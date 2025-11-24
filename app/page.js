"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SNIPPET_LIBRARY, SUPPORTED_LANGUAGES } from "./snippetLibrary";

const INITIAL_LETTERS = ["i", "a", "l", "r"];
const ALPHABET = (() => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const qIndex = letters.indexOf("q");
  const uIndex = letters.indexOf("u");
  if (qIndex >= 0 && uIndex >= 0 && uIndex > qIndex) {
    const [uLetter] = letters.splice(uIndex, 1);
    letters.splice(qIndex, 0, uLetter); // unlock u before q to keep prompt words realistic
  }
  return letters;
})();
const LETTER_SEQUENCE = Array.from(new Set([...INITIAL_LETTERS, ...ALPHABET]));

const FALLBACK_WORD_BANK = [
  "air",
  "aria",
  "lair",
  "liar",
  "rail",
  "briar",
  "racial",
  "radial",
  "real",
  "flare",
  "argil",
  "hilaria",
  "jail",
  "kalari",
  "alarm",
  "linear",
  "clarion",
  "plain",
  "qibla",
  "qi",
  "rails",
  "trail",
  "aural",
  "rival",
  "wail",
  "axial",
  "relay",
  "lazily",
  "dragon",
  "forest",
  "mural",
  "artisan",
  "station",
  "rotation",
  "delivery",
  "formation",
  "vital",
  "gaily",
  "brawler",
  "sailor",
  "pavilion",
  "citadel",
  "journal",
  "keyboard",
  "galaxy",
  "zephyr",
];

const DEFAULT_TARGET_WPM = 35;
const DEFAULT_LESSONS_PER_UNLOCK = 5;
const BASE_LESSON_WORDS = 6;
const LESSON_WORD_LIMIT = BASE_LESSON_WORDS * 3;
const STORAGE_KEY = "typing-progress-v1";
const IDLE_RESET_MS = 45000;
const DEFAULT_CODING_LANGUAGE = SUPPORTED_LANGUAGES[0]?.id ?? "javascript";
const CODING_IDLE_RESET_MS = 60000;
const TABS = [
  { id: "lesson", label: "Lesson" },
  { id: "coding", label: "Coding" },
  { id: "profile", label: "Profile" },
  { id: "settings", label: "Settings" },
];
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const WORD_DATA_URL = `${BASE_PATH}/full_dictionary_en.csv`;

const createSeededRandom = (seed = 1) => {
  let state = Math.abs(Math.floor(seed)) % 2147483647;
  if (state === 0) {
    state = 1;
  }
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
};

const shuffleWithSeed = (items, seed) => {
  if (!Array.isArray(items)) return [];
  const list = [...items];
  const random = createSeededRandom(seed);
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

const formatDuration = (ms) => {
  if (!ms) return "00:00";
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const wordUsesLetters = (word, letters) => {
  const allowed = new Set(letters);
  return Array.from(word).every((char) => allowed.has(char));
};

const determineLengthGroup = (length) => {
  if (length <= 4) return "short";
  if (length <= 7) return "medium";
  if (length <= 10) return "long";
  return "extra_long";
};

const FREQUENCY_WEIGHTS = {
  very_common: 4,
  common: 3,
  specialized: 2,
  rare: 1,
};

const OBSCURITY_WEIGHTS = {
  low: 3,
  medium: 2,
  high: 1,
};

const LENGTH_WEIGHTS = {
  short: 3,
  medium: 3,
  long: 2,
  extra_long: 1,
};

const COMPLEXITY_WEIGHTS = {
  simple_root: 3,
  compound: 2.5,
  affixed: 2,
  loanword: 1.5,
};

const DOMAIN_WEIGHTS = {
  general: 3,
  technology: 2.6,
  data: 2.4,
  design: 2.3,
  science: 2.2,
  project: 2.2,
  security: 2.2,
  networking: 2.2,
  food: 2,
};

const TYPING_FEATURE_WEIGHTS = {
  "double-letter": 0.35,
  "alternating-cv": 0.4,
  "all-lower": 0.15,
  "vowel-run": -0.35,
  "rare-letter": -0.6,
  "vowel-glide": 0.15,
  "y-ending": 0.1,
};

const normalizeTypingFeatures = (raw) => {
  if (!raw) return [];
  return raw
    .split("|")
    .map((token) => token.trim())
    .filter((token) => token && token !== "none");
};

const parseNumber = (value, fallback = 0) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizeWordRecord = (record) => {
  if (!record) return null;
  const rawWord = String(record.word ?? "").toLowerCase().trim();
  if (!rawWord || !/^[a-z]+$/.test(rawWord)) return null;
  if (rawWord.length < 2 || rawWord.length > 12) return null;
  const typingFeatures = normalizeTypingFeatures(record.typing_features);
  const recommended = String(record.recommended ?? "").trim().toLowerCase() === "yes";
  return {
    word: rawWord,
    length: rawWord.length,
    frequencyTier: record.frequency_tier ?? "rare",
    frequency: parseNumber(record.frequency),
    zipf: parseNumber(record.zipf),
    obscurityLevel: record.obscurity_level ?? "medium",
    lengthGroup: record.length_group ?? determineLengthGroup(rawWord.length),
    partOfSpeech: record.part_of_speech ?? "noun",
    domain: record.domain ?? "general",
    complexity: record.complexity ?? "simple_root",
    typingFeatures,
    recommended,
    notes: record.notes ?? "",
  };
};

const createFallbackEntry = (word) => ({
  word,
  length: word.length,
  frequencyTier: "common",
  frequency: 1,
  zipf: 5,
  obscurityLevel: "low",
  lengthGroup: determineLengthGroup(word.length),
  partOfSpeech: "noun",
  domain: "general",
  complexity: "simple_root",
  typingFeatures: ["all-lower"],
  recommended: true,
  notes: "fallback",
});

const FALLBACK_WORD_ENTRIES = FALLBACK_WORD_BANK.map((word) => createFallbackEntry(word));

const WORD_FILTER_LEVELS = [
  { allowHighObscurity: false, includeShortWords: false, includeNonRecommended: false },
  { allowHighObscurity: true, includeShortWords: false, includeNonRecommended: false },
  { allowHighObscurity: true, includeShortWords: true, includeNonRecommended: false },
  { allowHighObscurity: true, includeShortWords: true, includeNonRecommended: true },
];

const mergeWithFallbackEntries = (entries) => {
  const map = new Map();
  entries.forEach((entry) => {
    if (entry?.word) {
      map.set(entry.word, entry);
    }
  });
  FALLBACK_WORD_ENTRIES.forEach((entry) => {
    if (entry?.word && !map.has(entry.word)) {
      map.set(entry.word, entry);
    }
  });
  return Array.from(map.values());
};

const LENGTH_FALLBACK_ORDER = ["medium", "short", "long", "extra_long"];

const getLengthRatioPlan = (lettersCount) => {
  if (lettersCount <= 4) {
    return [
      { group: "medium", weight: 0.4 },
      { group: "short", weight: 0.5 },
      { group: "long", weight: 0.1 },
    ];
  }
  if (lettersCount <= 8) {
    return [
      { group: "medium", weight: 0.5 },
      { group: "short", weight: 0.3 },
      { group: "long", weight: 0.2 },
    ];
  }
  if (lettersCount <= 13) {
    return [
      { group: "medium", weight: 0.45 },
      { group: "long", weight: 0.25 },
      { group: "short", weight: 0.2 },
      { group: "extra_long", weight: 0.1 },
    ];
  }
  return [
    { group: "medium", weight: 0.4 },
    { group: "long", weight: 0.3 },
    { group: "short", weight: 0.15 },
    { group: "extra_long", weight: 0.15 },
  ];
};

const buildLengthQuotas = (ratios, limit) => {
  const quotas = {};
  let total = 0;
  ratios.forEach(({ group, weight }) => {
    const count = Math.max(0, Math.round(weight * limit));
    quotas[group] = count;
    total += count;
  });
  if (total > limit) {
    let diff = total - limit;
    for (let i = ratios.length - 1; i >= 0 && diff > 0; i -= 1) {
      const group = ratios[i].group;
      const reduction = Math.min(diff, quotas[group]);
      quotas[group] -= reduction;
      diff -= reduction;
    }
  } else if (total < limit) {
    let diff = limit - total;
    while (diff > 0) {
      for (let i = 0; i < ratios.length && diff > 0; i += 1) {
        const group = ratios[i].group;
        quotas[group] += 1;
        diff -= 1;
      }
    }
  }
  return quotas;
};

const buildLengthPattern = (lettersCount, limit) => {
  const ratios = getLengthRatioPlan(lettersCount);
  const quotas = buildLengthQuotas(ratios, limit);
  const queue = ratios.map(({ group }) => ({
    group,
    remaining: quotas[group] ?? 0,
  }));
  const pattern = [];
  while (pattern.length < limit) {
    let added = false;
    for (let i = 0; i < queue.length && pattern.length < limit; i += 1) {
      if (queue[i].remaining > 0) {
        pattern.push(queue[i].group);
        queue[i].remaining -= 1;
        added = true;
      }
    }
    if (!added) break;
  }
  if (pattern.length < limit) {
    const priority = queue.map((entry) => entry.group).filter(Boolean);
    const fallbackOrder = priority.length
      ? priority
      : [...LENGTH_FALLBACK_ORDER];
    let index = 0;
    while (pattern.length < limit) {
      const group = fallbackOrder[index % fallbackOrder.length];
      pattern.push(group);
      index += 1;
    }
  }
  return { pattern, priority: ratios.map(({ group }) => group) };
};

const parseCsvRow = (line) => {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  result.push(current);
  return result.map((value) => value.trim());
};

const parseWordMetadataCsv = (text) => {
  if (!text) return [];
  const rows = text.trim().split(/\r?\n/);
  if (rows.length <= 1) return [];
  const headers = parseCsvRow(rows[0]);
  const entries = [];
  const seen = new Set();
  for (let i = 1; i < rows.length; i += 1) {
    const row = rows[i];
    if (!row) continue;
    const cells = parseCsvRow(row);
    if (!cells.length) continue;
    const record = {};
    for (let j = 0; j < headers.length; j += 1) {
      record[headers[j]] = cells[j] ?? "";
    }
    const entry = normalizeWordRecord(record);
    if (entry && entry.recommended && !seen.has(entry.word)) {
      seen.add(entry.word);
      entries.push(entry);
    }
  }
  return entries;
};

const getTypingFeatureScore = (features) => {
  if (!Array.isArray(features) || features.length === 0) return 0;
  return features.reduce(
    (sum, feature) => sum + (TYPING_FEATURE_WEIGHTS[feature] ?? 0),
    0,
  );
};

const scoreWordEntry = (entry, letters, latestLetter, randomValue = 0) => {
  if (!entry) return 0;
  const freqScore = FREQUENCY_WEIGHTS[entry.frequencyTier] ?? 1;
  const obscurityScore = OBSCURITY_WEIGHTS[entry.obscurityLevel] ?? 1;
  const complexityScore = COMPLEXITY_WEIGHTS[entry.complexity] ?? 1;
  const domainScore = DOMAIN_WEIGHTS[entry.domain] ?? 2;
  const lengthScore = LENGTH_WEIGHTS[entry.lengthGroup] ?? 1;
  const unlockedCount = letters.length;
  let adaptiveLengthBonus = 0;
  if (unlockedCount <= 4 && entry.lengthGroup === "short") {
    adaptiveLengthBonus = 1;
  } else if (unlockedCount <= 7 && entry.lengthGroup === "medium") {
    adaptiveLengthBonus = 0.5;
  } else if (unlockedCount >= 10 && entry.lengthGroup === "long") {
    adaptiveLengthBonus = 0.4;
  }
  const featureScore = getTypingFeatureScore(entry.typingFeatures);
  const latestLetterBonus = latestLetter && entry.word.includes(latestLetter) ? 1 : 0;
  const zipfScore = (entry.zipf ?? 0) * 0.35;
  return (
    freqScore * 3 +
    obscurityScore * 2 +
    complexityScore +
    domainScore +
    lengthScore +
    adaptiveLengthBonus +
    featureScore +
    latestLetterBonus +
    zipfScore +
    randomValue
  );
};

const buildLessonWords = (letters, seed, dictionary) => {
  if (!letters.length) return [];
  const sourceEntries = dictionary.length > 0 ? dictionary : FALLBACK_WORD_ENTRIES;
  const latestLetter = letters.at(-1);
  let availableEntries = [];
  for (let i = 0; i < WORD_FILTER_LEVELS.length; i += 1) {
    const options = WORD_FILTER_LEVELS[i];
    const pool = sourceEntries.filter((entry) => {
      if (!entry?.word) return false;
      if (!wordUsesLetters(entry.word, letters)) return false;
      if (
        !options.includeShortWords &&
        entry.word.length <= 2
      )
        return false;
      if (!options.allowHighObscurity && entry.obscurityLevel === "high") return false;
      if (!options.includeNonRecommended && entry.recommended === false) return false;
      return true;
    });
    if (pool.length > 0) {
      availableEntries = pool;
      if (pool.length >= LESSON_WORD_LIMIT) {
        break;
      }
    }
  }

  if (availableEntries.length === 0) {
    return letters.map((letter) => `${letter}${letter}${letter}`);
  }

  const scoreSeed = seed + letters.length * 31;
  const random = createSeededRandom(scoreSeed);
  const scoredEntries = availableEntries
    .map((entry) => ({
      entry,
      score: scoreWordEntry(entry, letters, latestLetter, random() * 0.5),
    }))
    .sort((a, b) => b.score - a.score);

  const limit = LESSON_WORD_LIMIT;
  const poolSize = Math.max(limit * 3, 60);
  const topPool = scoredEntries.slice(0, Math.min(poolSize, scoredEntries.length));
  const focusPool =
    latestLetter && topPool.some((item) => item.entry.word.includes(latestLetter))
      ? topPool.filter((item) => item.entry.word.includes(latestLetter))
      : topPool;

  const preparedPool = shuffleWithSeed(focusPool, seed).map((item) => item.entry);
  if (preparedPool.length === 0) {
    return letters.map((letter) => `${letter}${letter}${letter}`);
  }

  const { pattern: lengthPattern, priority } = buildLengthPattern(letters.length, limit);
  const fallbackGroups = Array.from(new Set([...priority, ...LENGTH_FALLBACK_ORDER]));
  const buckets = preparedPool.reduce((acc, entry) => {
    const group = entry.lengthGroup ?? determineLengthGroup(entry.word.length);
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(entry);
    return acc;
  }, {});

  const popFromGroup = (group) => {
    const bucket = buckets[group];
    if (bucket && bucket.length) {
      return bucket.shift();
    }
    return null;
  };

  const takeFromAny = () => {
    for (let i = 0; i < fallbackGroups.length; i += 1) {
      const candidate = popFromGroup(fallbackGroups[i]);
      if (candidate) return candidate;
    }
    const secondaryGroups = Object.keys(buckets).filter(
      (group) => !fallbackGroups.includes(group),
    );
    for (let i = 0; i < secondaryGroups.length; i += 1) {
      const candidate = popFromGroup(secondaryGroups[i]);
      if (candidate) return candidate;
    }
    return null;
  };

  const selectedEntries = [];
  for (let i = 0; i < lengthPattern.length && selectedEntries.length < limit; i += 1) {
    const desiredGroup = lengthPattern[i];
    const nextEntry = popFromGroup(desiredGroup) ?? takeFromAny();
    if (!nextEntry) break;
    selectedEntries.push(nextEntry);
  }

  if (selectedEntries.length < limit) {
    const remainingEntries = Object.values(buckets).flat();
    const fillSource =
      remainingEntries.length > 0
        ? remainingEntries
        : preparedPool.length > 0
          ? preparedPool
          : [];
    let fillIndex = 0;
    while (selectedEntries.length < limit) {
      if (fillSource.length > 0) {
        selectedEntries.push(fillSource[fillIndex % fillSource.length]);
        fillIndex += 1;
      } else {
        const helperLetter = latestLetter ?? letters[0];
        if (!helperLetter) break;
        const helperWord = `${helperLetter}${letters[0] ?? helperLetter}${helperLetter}`;
        selectedEntries.push(createFallbackEntry(helperWord));
      }
    }
  }

  return selectedEntries.slice(0, limit).map((entry) => entry.word);
};

const highlightLessonText = (target, typed, mistakeMap) =>
  Array.from(target).map((char, index) => {
    const typedChar = typed[index];
    const displayChar = char === " " ? "\u00A0" : char;
    const hadMistake = Boolean(mistakeMap[index]);

    if (typedChar) {
      const isCorrect = typedChar === char;
      if (hadMistake) {
        return (
          <span
            key={`${char}-${index}`}
            className={
              isCorrect
                ? "text-amber-300 underline decoration-amber-300 decoration-2"
                : "text-rose-400 underline decoration-rose-400 decoration-2"
            }
          >
            {displayChar}
          </span>
        );
      }
      return (
        <span
          key={`${char}-${index}`}
          className={
            isCorrect
              ? "text-emerald-400"
              : "text-rose-400 underline decoration-rose-400 decoration-2"
          }
        >
          {displayChar}
        </span>
      );
    }

    if (index === typed.length) {
      if (hadMistake) {
        return (
          <span
            key={`${char}-${index}`}
            className="rounded border border-rose-500 bg-rose-500/20 text-rose-200"
          >
            {displayChar}
          </span>
        );
      }
      return (
        <span key={`${char}-${index}`} className="rounded bg-slate-700/70 text-white">
          {displayChar}
        </span>
      );
    }

    return (
      <span key={`${char}-${index}`} className="text-slate-500">
        {displayChar}
      </span>
    );
  });

const getSnippetAtIndex = (index) => {
  if (!SNIPPET_LIBRARY.length) return null;
  const normalizedIndex = index % SNIPPET_LIBRARY.length;
  return SNIPPET_LIBRARY[normalizedIndex];
};

const buildSnippetPayload = (index, language) => {
  const snippet = getSnippetAtIndex(index);
  if (!snippet) {
    return {
      snippet: null,
      text: "",
      languages: [],
    };
  }
  const fallbackLanguage =
    SUPPORTED_LANGUAGES.find((entry) => snippet.languages[entry.id])?.id ?? SUPPORTED_LANGUAGES[0]?.id;
  const resolvedLanguage = snippet.languages[language] ? language : fallbackLanguage;
  return {
    snippet,
    text: snippet.languages[resolvedLanguage] ?? "",
    activeLanguage: resolvedLanguage,
  };
};

const countWordsInLesson = (text) => {
  if (!text) return 0;
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
};

const movingAverage = (series, windowSize) => {
  if (!Array.isArray(series) || series.length === 0) return [];
  const normalizedWindow = Math.max(1, Math.floor(windowSize));
  if (normalizedWindow === 1) return [...series];
  const halfWindow = Math.floor(normalizedWindow / 2);
  return series.map((_, index) => {
    const start = Math.max(0, index - halfWindow);
    const end = Math.min(series.length - 1, index + halfWindow);
    const slice = series.slice(start, end + 1);
    const average = slice.reduce((sum, value) => sum + value, 0) / slice.length;
    return Number(average.toFixed(2));
  });
};

const regressionCoefficients = (points) => {
  if (!Array.isArray(points) || points.length < 2) return null;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumX2 = 0;
  points.forEach(({ x, y }) => {
    sumX += x;
    sumY += y;
    sumXY += x * y;
    sumX2 += x * x;
  });
  const n = points.length;
  const denominator = n * sumX2 - sumX * sumX;
  if (denominator === 0) return null;
  const slope = (n * sumXY - sumX * sumY) / denominator;
  const intercept = (sumY - slope * sumX) / n;
  return { slope, intercept };
};

const computeImprovementStreak = (lessons, field) => {
  if (!Array.isArray(lessons) || lessons.length === 0) return 0;
  let best = 1;
  let current = 1;
  for (let i = 1; i < lessons.length; i += 1) {
    if (lessons[i][field] >= lessons[i - 1][field]) {
      current += 1;
    } else {
      current = 1;
    }
    if (current > best) {
      best = current;
    }
  }
  return best;
};

const ACCURACY_BUCKETS = [
  { label: "<80", min: 0, max: 80 },
  { label: "80-85", min: 80, max: 85 },
  { label: "85-90", min: 85, max: 90 },
  { label: "90-95", min: 90, max: 95 },
  { label: "95+", min: 95, max: 101 },
];

const buildAccuracyBuckets = (lessons) =>
  ACCURACY_BUCKETS.map((bucket) => ({
    ...bucket,
    count: lessons.filter(
      (lesson) => lesson.accuracy >= bucket.min && lesson.accuracy < bucket.max,
    ).length,
  }));

const buildLetterInventory = (lessons, unlockedLetters) => {
  const counts = new Map();
  unlockedLetters.forEach((letter) => {
    counts.set(letter.toLowerCase(), 0);
  });
  lessons.forEach((lesson) => {
    const pool = (lesson.text ?? "").toLowerCase().replace(/[^a-z]/g, "");
    const uniqueLetters = new Set(pool.split(""));
    uniqueLetters.forEach((char) => {
      if (!char) return;
      counts.set(char, (counts.get(char) ?? 0) + 1);
    });
  });
  return Array.from(counts.entries())
    .map(([letter, count]) => ({ letter, count }))
    .sort((a, b) => (a.letter > b.letter ? 1 : -1));
};

const getLanguageLabel = (languageId) =>
  SUPPORTED_LANGUAGES.find((language) => language.id === languageId)?.label ?? languageId;

const getUpcomingWhitespace = (text, fromIndex) => {
  if (!text) return "";
  let pointer = fromIndex;
  let buffer = "";
  while (pointer < text.length) {
    const char = text[pointer];
    if (char === " " || char === "\t") {
      buffer += char;
      pointer += 1;
    } else {
      break;
    }
  }
  return buffer;
};

const buildCodingSummary = (sessions) => {
  if (!Array.isArray(sessions) || sessions.length === 0) {
    return {
      total: 0,
      avgWpm: 0,
      avgAccuracy: 0,
      bestWpm: 0,
      bestAccuracy: 0,
      languages: [],
      wpmStreak: 0,
      accuracyStreak: 0,
      totalMinutes: 0,
    };
  }
  const totals = sessions.reduce(
    (acc, entry) => {
      acc.wpm += entry.wpm ?? 0;
      acc.accuracy += entry.accuracy ?? 0;
      acc.duration += entry.durationMs ?? 0;
      return acc;
    },
    { wpm: 0, accuracy: 0, duration: 0 },
  );
  const total = sessions.length;
  const languages = Array.from(new Set(sessions.map((entry) => entry.language))).sort();
  return {
    total,
    avgWpm: Math.round(totals.wpm / total),
    avgAccuracy: Math.round(totals.accuracy / total),
    bestWpm: Math.max(...sessions.map((entry) => entry.wpm ?? 0)),
    bestAccuracy: Math.max(...sessions.map((entry) => entry.accuracy ?? 0)),
    languages,
    wpmStreak: computeImprovementStreak(sessions, "wpm"),
    accuracyStreak: computeImprovementStreak(sessions, "accuracy"),
    totalMinutes: Math.round((totals.duration / 60000) * 10) / 10,
  };
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("lesson");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [lessonHistory, setLessonHistory] = useState([]);
  const [targetWpm, setTargetWpm] = useState(DEFAULT_TARGET_WPM);
  const [lessonsPerUnlock, setLessonsPerUnlock] = useState(DEFAULT_LESSONS_PER_UNLOCK);
  const [unlockedCount, setUnlockedCount] = useState(INITIAL_LETTERS.length);
  const [successCounter, setSuccessCounter] = useState(0);
  const [mistakeMap, setMistakeMap] = useState({});
  const [dictionary, setDictionary] = useState([]);
  const [codingIndex, setCodingIndex] = useState(0);
  const [codingInput, setCodingInput] = useState("");
  const [codingStartTime, setCodingStartTime] = useState(null);
  const [codingComplete, setCodingComplete] = useState(false);
  const [codingHistory, setCodingHistory] = useState([]);
  const [codingMistakeMap, setCodingMistakeMap] = useState({});
  const [codingLanguage, setCodingLanguage] = useState(DEFAULT_CODING_LANGUAGE);

  const inputRef = useRef(null);
  const autoAdvanceTimeoutRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const codingAutoAdvanceTimeoutRef = useRef(null);
  const codingIdleTimeoutRef = useRef(null);

  const unlockedLetters = useMemo(
    () => LETTER_SEQUENCE.slice(0, unlockedCount),
    [unlockedCount],
  );
  const nextLetter =
    unlockedCount < LETTER_SEQUENCE.length ? LETTER_SEQUENCE[unlockedCount] : null;

  const lessonWords = useMemo(
    () => buildLessonWords(unlockedLetters, lessonIndex, dictionary),
    [dictionary, lessonIndex, unlockedLetters],
  );

  const lessonText = useMemo(() => lessonWords.join(" "), [lessonWords]);
  const highlightedPrompt = useMemo(
    () => highlightLessonText(lessonText, userInput, mistakeMap),
    [lessonText, mistakeMap, userInput],
  );

  const snippetPayload = useMemo(
    () => buildSnippetPayload(codingIndex, codingLanguage),
    [codingIndex, codingLanguage],
  );
  const codingText = snippetPayload.text;
  const codingHighlightedPrompt = useMemo(
    () => highlightLessonText(codingText, codingInput, codingMistakeMap),
    [codingInput, codingMistakeMap, codingText],
  );

  useEffect(() => {
    let cancelled = false;
    const loadDictionary = async () => {
      try {
        const response = await fetch(WORD_DATA_URL);
        const text = await response.text();
        if (cancelled) return;
        const entries = parseWordMetadataCsv(text);
        setDictionary(mergeWithFallbackEntries(entries));
      } catch (error) {
        console.error("Failed to load word metadata", error);
        setDictionary(FALLBACK_WORD_ENTRIES);
      }
    };
    loadDictionary();
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    if (activeTab === "lesson" || activeTab === "coding") {
      inputRef.current?.focus();
    }
  }, [activeTab, codingIndex, codingComplete, lessonIndex, lessonComplete]);

  useEffect(() => {
    let didLoad = false;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed.unlockedCount === "number") {
          setUnlockedCount(parsed.unlockedCount);
        }
        if (Array.isArray(parsed.lessonHistory)) {
          setLessonHistory(parsed.lessonHistory);
        }
        if (Array.isArray(parsed.codingHistory)) {
          setCodingHistory(parsed.codingHistory);
        }
        if (typeof parsed.successCounter === "number") {
          setSuccessCounter(parsed.successCounter);
        }
        if (typeof parsed.lessonIndex === "number") {
          setLessonIndex(parsed.lessonIndex);
        }
        if (typeof parsed.targetWpm === "number") {
          setTargetWpm(parsed.targetWpm);
        }
        if (typeof parsed.lessonsPerUnlock === "number") {
          setLessonsPerUnlock(parsed.lessonsPerUnlock);
        }
        if (typeof parsed.codingIndex === "number") {
          setCodingIndex(parsed.codingIndex);
        }
        if (typeof parsed.codingLanguage === "string") {
          setCodingLanguage(parsed.codingLanguage);
        }
        didLoad = true;
      }
    } catch (error) {
      console.error("Failed to restore progress", error);
    }
    if (!didLoad) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    const payload = {
      unlockedCount,
      lessonHistory,
      codingHistory,
      successCounter,
      lessonIndex,
      targetWpm,
      lessonsPerUnlock,
      codingIndex,
      codingLanguage,
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
      console.error("Failed to persist progress", error);
    }
  }, [
    lessonHistory,
    lessonIndex,
    lessonsPerUnlock,
    successCounter,
    targetWpm,
    unlockedCount,
    codingHistory,
    codingIndex,
    codingLanguage,
  ]);

  useEffect(() => {
    const typingTabs = ["lesson", "coding"];
    if (!typingTabs.includes(activeTab)) return undefined;
    if (activeTab === "lesson" && lessonComplete) return undefined;
    if (activeTab === "coding" && codingComplete) return undefined;
    const enforceFocus = (event) => {
      if (event.key === "Tab" || event.metaKey || event.ctrlKey || event.altKey) return;
      if (document.activeElement !== inputRef.current) {
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", enforceFocus, true);
    return () => window.removeEventListener("keydown", enforceFocus, true);
  }, [activeTab, codingComplete, lessonComplete]);

  useEffect(
    () => () => {
      if (autoAdvanceTimeoutRef.current) {
        clearTimeout(autoAdvanceTimeoutRef.current);
      }
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      if (codingAutoAdvanceTimeoutRef.current) {
        clearTimeout(codingAutoAdvanceTimeoutRef.current);
      }
      if (codingIdleTimeoutRef.current) {
        clearTimeout(codingIdleTimeoutRef.current);
      }
    },
    [],
  );

  const evaluateUnlock = useCallback(
    (wpm) => {
      if (wpm < targetWpm) {
        setSuccessCounter(0);
        return;
      }

      setSuccessCounter((count) => {
        const nextCount = count + 1;
        const canUnlockMore = unlockedCount < LETTER_SEQUENCE.length;
        if (nextCount >= lessonsPerUnlock && canUnlockMore) {
          setUnlockedCount((prev) => Math.min(prev + 1, LETTER_SEQUENCE.length));
          return 0;
        }
        return nextCount;
      });
    },
    [lessonsPerUnlock, targetWpm, unlockedCount],
  );

  const clearLessonState = useCallback(() => {
    setUserInput("");
    setStartTime(null);
    setLessonComplete(false);
    setMistakeMap({});
  }, []);

  const handleNextLesson = useCallback(() => {
    setLessonIndex((index) => index + 1);
    clearLessonState();
  }, [clearLessonState]);

  const scheduleAutoAdvance = useCallback(() => {
    if (autoAdvanceTimeoutRef.current) {
      clearTimeout(autoAdvanceTimeoutRef.current);
    }
    autoAdvanceTimeoutRef.current = setTimeout(() => {
      autoAdvanceTimeoutRef.current = null;
      handleNextLesson();
    }, 0);
  }, [handleNextLesson]);

  const clearCodingState = useCallback(() => {
    setCodingInput("");
    setCodingStartTime(null);
    setCodingComplete(false);
    setCodingMistakeMap({});
  }, []);

  const handleNextCodingSnippet = useCallback(() => {
    setCodingIndex((index) => index + 1);
  }, []);

  const scheduleCodingAdvance = useCallback(() => {
    if (codingAutoAdvanceTimeoutRef.current) {
      clearTimeout(codingAutoAdvanceTimeoutRef.current);
    }
    codingAutoAdvanceTimeoutRef.current = setTimeout(() => {
      codingAutoAdvanceTimeoutRef.current = null;
      handleNextCodingSnippet();
    }, 200);
  }, [handleNextCodingSnippet]);

  const resetIdleTimer = useCallback(() => {
    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current);
    }
    if (!startTime || lessonComplete) {
      return;
    }
    idleTimeoutRef.current = setTimeout(() => {
      idleTimeoutRef.current = null;
      clearLessonState();
    }, IDLE_RESET_MS);
  }, [clearLessonState, lessonComplete, startTime]);

  const resetCodingIdleTimer = useCallback(() => {
    if (codingIdleTimeoutRef.current) {
      clearTimeout(codingIdleTimeoutRef.current);
    }
    if (!codingStartTime || codingComplete) {
      return;
    }
    codingIdleTimeoutRef.current = setTimeout(() => {
      codingIdleTimeoutRef.current = null;
      clearCodingState();
    }, CODING_IDLE_RESET_MS);
  }, [clearCodingState, codingComplete, codingStartTime]);

  const finalizeLesson = useCallback(() => {
    if (lessonComplete) return;

    const endTime = Date.now();
    const effectiveStart = startTime ?? endTime;
    const elapsed = Math.max(endTime - effectiveStart, 1);
    const minutes = Math.max(elapsed / 60000, 1 / 60);
    const wpm = Math.max(0, Math.round((lessonText.length / 5) / minutes));
    const totalChars = lessonText.length || 1;
    const mistakes = Object.keys(mistakeMap).length;
    const accuracy = Math.max(0, Math.round(((totalChars - mistakes) / totalChars) * 100));

    setLessonComplete(true);
    setLessonHistory((history) => [
      ...history,
      {
        id: `lesson-${history.length + 1}-${endTime}`,
        wpm,
        accuracy,
        letters: unlockedLetters.join(""),
        text: lessonText,
        timestamp: new Date(endTime).toISOString(),
        durationMs: elapsed,
        success: wpm >= targetWpm,
        mistakes,
      },
    ]);

    evaluateUnlock(wpm);
    scheduleAutoAdvance();
  }, [
    evaluateUnlock,
    lessonComplete,
    lessonText,
    mistakeMap,
    scheduleAutoAdvance,
    startTime,
    targetWpm,
    unlockedLetters,
    userInput,
  ]);

  const finalizeCodingSnippet = useCallback(() => {
    if (codingComplete) return;
    if (!codingText) return;

    const endTime = Date.now();
    const effectiveStart = codingStartTime ?? endTime;
    const elapsed = Math.max(endTime - effectiveStart, 1);
    const minutes = Math.max(elapsed / 60000, 1 / 60);
    const wpm = Math.max(0, Math.round((codingText.length / 5) / minutes));
    const totalChars = codingText.length || 1;
    const mistakes = Object.keys(codingMistakeMap).length;
    const accuracy = Math.max(0, Math.round(((totalChars - mistakes) / totalChars) * 100));
    const snippetMeta = snippetPayload.snippet;

    setCodingComplete(true);
    setCodingHistory((history) => [
      ...history,
      {
        id: `coding-${history.length + 1}-${endTime}`,
        wpm,
        accuracy,
        language: snippetPayload.activeLanguage ?? codingLanguage,
        snippetId: snippetMeta?.id ?? "snippet",
        concept: snippetMeta?.concept ?? "Snippet",
        text: codingText,
        timestamp: new Date(endTime).toISOString(),
        durationMs: elapsed,
        mistakes,
        focusCharacters: snippetMeta?.focusCharacters ?? [],
        success: wpm >= targetWpm,
        mode: "coding",
      },
    ]);

    scheduleCodingAdvance();
  }, [
    codingComplete,
    codingLanguage,
    codingMistakeMap,
    codingStartTime,
    codingText,
    scheduleCodingAdvance,
    snippetPayload.activeLanguage,
    snippetPayload.snippet,
    targetWpm,
  ]);

  const recordMistake = useCallback((index) => {
    setMistakeMap((prev) => {
      if (prev[index]) return prev;
      return { ...prev, [index]: true };
    });
  }, []);

  const recordCodingMistake = useCallback((index) => {
    setCodingMistakeMap((prev) => {
      if (prev[index]) return prev;
      return { ...prev, [index]: true };
    });
  }, []);

  const handleTypingKey = useCallback(
    (event) => {
      const isLesson = activeTab === "lesson";
      const isCodingMode = activeTab === "coding";
      if (!isLesson && !isCodingMode) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isLesson && lessonComplete) return;
      if (isCodingMode && codingComplete) return;

      if (event.key === "Backspace") {
        event.preventDefault();
        if (isLesson) {
          setUserInput((prev) => prev.slice(0, -1));
        } else {
          setCodingInput((prev) => prev.slice(0, -1));
        }
        return;
      }

      if (event.key === "Tab") {
        if (!isCodingMode) {
          return;
        }
        event.preventDefault();
        setCodingInput((prev) => {
          if (codingComplete) return prev;
          if (prev.length >= codingText.length) {
            return prev;
          }
          const whitespace = getUpcomingWhitespace(codingText, prev.length);
          if (!whitespace) {
            return prev;
          }
          if (!codingText.startsWith(whitespace, prev.length)) {
            recordCodingMistake(prev.length);
            return prev;
          }
          return prev + whitespace;
        });
        return;
      }

      const char = event.key === "Enter" ? "\n" : event.key;
      if (char.length !== 1 && char !== "\n") {
        return;
      }

      if (isLesson && !startTime) {
        setStartTime(Date.now());
      }
      if (isCodingMode && !codingStartTime) {
        setCodingStartTime(Date.now());
      }

      event.preventDefault();
      if (isLesson) {
        setUserInput((prev) => {
          if (lessonComplete) return prev;
          if (prev.length >= lessonText.length) {
            return prev;
          }
          const expected = lessonText[prev.length];
          if (!expected) {
            return prev;
          }
          if (char === expected) {
            return prev + char;
          }
          recordMistake(prev.length);
          return prev;
        });
        return;
      }

      setCodingInput((prev) => {
        if (codingComplete) return prev;
        if (prev.length >= codingText.length) {
          return prev;
        }
        const expected = codingText[prev.length];
        if (!expected) {
          return prev;
        }
        if (char === "\n") {
          if (expected !== "\n") {
            recordCodingMistake(prev.length);
            return prev;
          }
          const indentAddition = getUpcomingWhitespace(codingText, prev.length + 1);
          return prev + "\n" + indentAddition;
        }
        if (char === expected) {
          return prev + char;
        }
        recordCodingMistake(prev.length);
        return prev;
      });
    },
    [
      activeTab,
      codingComplete,
      codingText,
      codingStartTime,
      lessonComplete,
      lessonText,
      recordCodingMistake,
      recordMistake,
      startTime,
    ],
  );

  useEffect(() => {
    if (!lessonComplete && lessonText && userInput === lessonText) {
      finalizeLesson();
    }
  }, [finalizeLesson, lessonComplete, lessonText, userInput]);

  useEffect(() => {
    if (!codingComplete && codingText && codingInput === codingText) {
      finalizeCodingSnippet();
    }
  }, [codingComplete, codingInput, codingText, finalizeCodingSnippet]);

  useEffect(() => {
    resetIdleTimer();
    return () => {
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, [resetIdleTimer, userInput]);

  useEffect(() => {
    resetCodingIdleTimer();
    return () => {
      if (codingIdleTimeoutRef.current) {
        clearTimeout(codingIdleTimeoutRef.current);
      }
    };
  }, [resetCodingIdleTimer, codingInput]);

  useEffect(() => {
    clearCodingState();
  }, [clearCodingState, codingIndex, codingLanguage]);

  const isTypingTab = activeTab === "lesson" || activeTab === "coding";
  const typingInputDisabled =
    !isTypingTab ||
    (activeTab === "lesson" && lessonComplete) ||
    (activeTab === "coding" && codingComplete);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
        <nav className="flex flex-wrap justify-center gap-3">
          {TABS.map((tab) => (
            <TabButton
              key={tab.id}
              isActive={activeTab === tab.id}
              label={tab.label}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </nav>

        {activeTab === "lesson" && (
          <>
            <LetterUnlockGrid
              unlockedCount={unlockedCount}
              nextLetter={nextLetter}
              history={lessonHistory}
              targetWpm={targetWpm}
            />
            <LessonSurface
              highlightedPrompt={highlightedPrompt}
              lessonText={lessonText}
              onClick={() => inputRef.current?.focus()}
            />
            <p className="text-center text-xs text-slate-400">
              Typing is captured automatically; press Backspace to fix mistakes and keep eyes on the words.
            </p>
          </>
        )}

        {activeTab === "coding" && (
          <CodingSection
            snippetPayload={snippetPayload}
            highlightedPrompt={codingHighlightedPrompt}
            codingComplete={codingComplete}
            onNext={handleNextCodingSnippet}
            codingHistory={codingHistory}
            codingLanguage={codingLanguage}
            codingIndex={codingIndex}
            codingText={codingText}
          />
        )}

        <input
          ref={inputRef}
          spellCheck={false}
          value=""
          onChange={() => { }}
          onKeyDown={handleTypingKey}
          className="absolute left-0 top-0 h-px w-px opacity-0"
          aria-hidden
          disabled={typingInputDisabled}
        />

        {activeTab === "profile" && (
          <ProfileSection
            history={lessonHistory}
            unlockedLetters={unlockedLetters}
            nextLetter={nextLetter}
            successCounter={successCounter}
            lessonsPerUnlock={lessonsPerUnlock}
            targetWpm={targetWpm}
          />
        )}

        {activeTab === "settings" && (
          <SettingsSection
            targetWpm={targetWpm}
            setTargetWpm={setTargetWpm}
            lessonsPerUnlock={lessonsPerUnlock}
            setLessonsPerUnlock={setLessonsPerUnlock}
            unlockedLetters={unlockedLetters}
            nextLetter={nextLetter}
            codingLanguage={codingLanguage}
            setCodingLanguage={setCodingLanguage}
          />
        )}
      </div>
    </div>
  );
}

function TabButton({ isActive, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition ${isActive
        ? "bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/40"
        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
    >
      {label}
    </button>
  );
}

const MAX_PROMPT_CHARACTERS_PER_LINE = 23;
const PROMPT_GRID_LINE_CLASS =
  "grid w-full justify-center gap-3 text-center font-mono text-4xl tracking-tight text-white sm:text-5xl";
const PROMPT_GRID_CELL_CLASS =
  "flex min-h-[3.5rem] items-center justify-center px-2 sm:min-h-[4.5rem]";
const PROMPT_GRID_FILLER_CLASS =
  "pointer-events-none flex min-h-[3.5rem] select-none items-center justify-center px-2 text-transparent sm:min-h-[4.5rem]";

const buildPromptLineRanges = (text, maxChars = MAX_PROMPT_CHARACTERS_PER_LINE) => {
  if (!text) return [];
  const ranges = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + maxChars, text.length);
    if (end < text.length && text[end] !== " ") {
      const segment = text.slice(start, end);
      const lastSpace = segment.lastIndexOf(" ");
      if (lastSpace > 0) {
        end = start + lastSpace;
      }
    }
    if (end === start) {
      end = Math.min(start + maxChars, text.length);
    }
    ranges.push({ start, end });
    start = end;
    while (start < text.length && text[start] === " ") {
      start += 1;
    }
  }
  return ranges;
};

function LessonSurface({ highlightedPrompt, lessonText, onClick }) {
  const promptLines = useMemo(() => {
    if (!lessonText) {
      return highlightedPrompt.length > 0 ? [highlightedPrompt] : [];
    }
    const ranges = buildPromptLineRanges(lessonText);
    if (ranges.length === 0) {
      return [highlightedPrompt];
    }
    return ranges.map(({ start, end }) => highlightedPrompt.slice(start, end));
  }, [highlightedPrompt, lessonText]);

  const gridColumnCount = Math.max(
    1,
    Math.min(
      MAX_PROMPT_CHARACTERS_PER_LINE,
      promptLines.reduce((max, line) => Math.max(max, line.length), 0),
    ),
  );

  return (
    <section
      className="relative flex min-h-[60vh] w-full items-center justify-center rounded-3xl border border-white/5 bg-slate-900/40 p-16 shadow-2xl shadow-black/40"
      onClick={onClick}
    >
      <div className="relative flex w-full max-w-7xl flex-col items-center gap-8">
        {promptLines.map((line, index) => (
          <div
            key={`prompt-line-${index}`}
            className={PROMPT_GRID_LINE_CLASS}
            style={{
              gridTemplateColumns: `repeat(${gridColumnCount}, minmax(0, 1fr))`,
            }}
          >
            {line.map((character, charIndex) => (
              <span key={`prompt-char-${index}-${charIndex}`} className={PROMPT_GRID_CELL_CLASS}>
                {character}
              </span>
            ))}
            {Array.from({ length: Math.max(0, gridColumnCount - line.length) }).map(
              (_, fillerIndex) => (
                <span
                  key={`prompt-filler-${index}-${fillerIndex}`}
                  className={PROMPT_GRID_FILLER_CLASS}
                  aria-hidden
                >
                  &nbsp;
                </span>
              ),
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function LetterUnlockGrid({ unlockedCount, nextLetter, history, targetWpm }) {
  const lastWpm = history.at(-1)?.wpm ?? 0;
  const currentLetter = LETTER_SEQUENCE.at(Math.max(unlockedCount - 1, 0)) ?? null;
  return (
    <div className="flex w-full flex-wrap justify-center gap-2 rounded-3xl border border-white/5 bg-slate-900/60 p-4">
      {LETTER_SEQUENCE.map((letter, index) => {
        const baseClasses =
          "flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors";
        if (index < unlockedCount) {
          const isCurrent = letter === currentLetter;
          return (
            <span
              key={letter}
              className={`${baseClasses} border-emerald-300 bg-emerald-500 text-slate-900 ${isCurrent ? "font-black ring-2 ring-emerald-200" : ""
                }`}
              title={isCurrent ? `Current focus · Target WPM ${targetWpm}` : undefined}
            >
              {letter}
            </span>
          );
        }

        if (letter === nextLetter) {
          return (
            <span
              key={letter}
              className={`${baseClasses} border-amber-300 bg-amber-300/30 text-amber-200`}
              title={`Next unlock · Need ${Math.max(targetWpm - lastWpm, 0)} WPM boost`}
            >
              {letter}
            </span>
          );
        }

        return (
          <span key={letter} className={`${baseClasses} border-white/10 bg-slate-800 text-slate-500`}>
            {letter}
          </span>
        );
      })}
    </div>
  );
}

function CodingSection({
  snippetPayload,
  highlightedPrompt,
  codingComplete,
  onNext,
  codingHistory,
  codingLanguage,
  codingIndex,
  codingText,
}) {
  const snippet = snippetPayload.snippet;
  const summary = buildCodingSummary(codingHistory);
  const totalSnippets = SNIPPET_LIBRARY.length || 1;
  const focusCharacters = snippet?.focusCharacters ?? [];
  const activeLanguage = snippetPayload.activeLanguage ?? codingLanguage;
  const languageLabel = getLanguageLabel(activeLanguage);

  return (
    <section className="w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Coding mode</p>
          <p className="text-xl font-semibold text-white">
            {snippet?.concept ?? "Snippet practice"}
          </p>
          <p className="text-sm text-slate-400">
            {snippet?.description ?? "Cycle through structured punctuation and patterns."}
          </p>
        </div>
        <div className="text-right text-xs text-slate-400">
          <p className="font-semibold text-white">
            Snippet {codingIndex % totalSnippets + 1} / {totalSnippets}
          </p>
          <p>{languageLabel}</p>
          <p>Focus: {focusCharacters.join(" ") || "symbols"}</p>
        </div>
      </div>

      <div className="mt-6 flex w-full justify-center">
        <div className="w-full max-w-4xl">
          <CodingSurface highlightedPrompt={highlightedPrompt} text={codingText} />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <p>Enter inserts a new line with matching indentation. Tab inserts the next block of spaces.</p>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10"
        >
          Next snippet
        </button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <SnippetLibraryList currentIndex={codingIndex % Math.max(totalSnippets, 1)} />
        <CodingStatsPanel
          summary={summary}
          lastEntry={codingHistory.at(-1) ?? null}
          complete={codingComplete}
        />
      </div>

      <CodingHistoryList history={codingHistory} />
    </section>
  );
}

function CodingSurface({ highlightedPrompt, text }) {
  const lines = useMemo(() => {
    if (!text) return [[]];
    const rawLines = text.split("\n");
    let cursor = 0;
    return rawLines.map((line, index) => {
      const nodes = highlightedPrompt.slice(cursor, cursor + line.length);
      cursor += line.length;
      if (cursor < highlightedPrompt.length) {
        cursor += 1;
      }
      if (line.length === 0) {
        return [
          <span key={`empty-${index}`} className="text-slate-700">
            &nbsp;
          </span>,
        ];
      }
      return nodes;
    });
  }, [highlightedPrompt, text]);

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/60">
      <div className="flex">
        <pre className="select-none border-r border-white/5 bg-slate-900/60 px-4 py-5 text-right text-xs font-semibold leading-6 text-slate-500">
          {lines.map((_, index) => (
            <span key={`line-${index}`} className="block">
              {index + 1}
            </span>
          ))}
        </pre>
        <pre className="flex-1 overflow-auto px-6 py-5 font-mono text-sm leading-6 text-white">
          {lines.map((line, index) => (
            <div key={`code-${index}`} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

function CodingStatsPanel({ summary, lastEntry, complete }) {
  const languageList =
    summary.languages.length > 0
      ? summary.languages.map((language) => getLanguageLabel(language)).join(", ")
      : "—";
  const lastEntryLanguage = lastEntry ? getLanguageLabel(lastEntry.language) : null;

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Session stats</p>
      {summary.total === 0 ? (
        <p className="mt-3 text-sm text-slate-400">Complete your first snippet to build coding momentum.</p>
      ) : (
        <>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <CodingStatCard label="Avg WPM" value={summary.avgWpm} detail={`${summary.total} snippets`} />
            <CodingStatCard label="Avg accuracy" value={`${summary.avgAccuracy}%`} detail={`${summary.totalMinutes} min`} />
            <CodingStatCard label="Top WPM" value={summary.bestWpm} detail="personal record" />
            <CodingStatCard label="Top accuracy" value={`${summary.bestAccuracy}%`} detail="cleanest run" />
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-xs text-slate-400">
            <p className="font-semibold uppercase tracking-[0.2em] text-slate-300">Languages covered</p>
            <p className="mt-1 text-sm text-white">{languageList}</p>
            <p className="mt-2">
              Improvement streaks: <span className="text-emerald-300">{summary.wpmStreak} wpm</span> /{" "}
              <span className="text-sky-300">{summary.accuracyStreak}% accuracy</span>
            </p>
            {lastEntry ? (
              <p className="mt-1 text-xs text-slate-400">
                Last: {lastEntryLanguage} · {lastEntry.wpm} wpm / {lastEntry.accuracy}%
              </p>
            ) : null}
            {complete ? <p className="mt-2 text-emerald-300">Snippet complete — auto-advancing...</p> : null}
          </div>
        </>
      )}
    </div>
  );
}

function CodingStatCard({ label, value, detail }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="text-xs text-slate-400">{detail}</p>
    </div>
  );
}

function SnippetLibraryList({ currentIndex }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Snippet library</p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">curriculum</p>
      </div>
      <ul className="mt-4 space-y-3 text-sm">
        {SNIPPET_LIBRARY.map((snippet, index) => (
          <li
            key={snippet.id}
            className={`rounded-2xl border px-4 py-3 ${index === currentIndex
              ? "border-emerald-400 bg-emerald-400/10 text-white"
              : "border-white/10 bg-slate-900/70 text-slate-200"
              }`}
          >
            <p className="font-semibold">{snippet.concept}</p>
            <p className="text-xs text-slate-400">{snippet.description}</p>
            <p className="text-xs text-slate-500">
              Focus: {snippet.focusCharacters.join(" ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CodingHistoryList({ history }) {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Recent coding sessions</p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {history.length} total
        </p>
      </div>
      {history.length === 0 ? (
        <p className="mt-3 text-sm text-slate-400">Complete snippets to build up your coding journal.</p>
      ) : (
        <ul className="mt-3 space-y-3 text-sm">
          {history
            .slice(-6)
            .reverse()
            .map((entry) => {
              const languageLabel = getLanguageLabel(entry.language);
              return (
                <li
                  key={entry.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3"
                >
                  <div>
                    <p className="font-semibold text-white">{entry.concept}</p>
                    <p className="text-xs text-slate-400">
                      {languageLabel} · {new Date(entry.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400">{entry.wpm} wpm</p>
                    <p className="text-slate-400">{entry.accuracy}%</p>
                    <p className="text-xs text-slate-500">{formatDuration(entry.durationMs)}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}

function ProfileSection({
  history,
  unlockedLetters,
  nextLetter,
  successCounter,
  lessonsPerUnlock,
  targetWpm,
}) {
  const [selectedLetter, setSelectedLetter] = useState("all");
  const [smoothingWindow, setSmoothingWindow] = useState(3);
  const [showTrendline, setShowTrendline] = useState(true);

  const annotatedHistory = useMemo(
    () =>
      history.map((record, index) => ({
        ...record,
        lessonNumber: index + 1,
      })),
    [history],
  );

  const letterInventory = useMemo(
    () => buildLetterInventory(annotatedHistory, unlockedLetters),
    [annotatedHistory, unlockedLetters],
  );

  useEffect(() => {
    if (selectedLetter === "all") return;
    const hasLetter = letterInventory.some((entry) => entry.letter === selectedLetter);
    if (!hasLetter) {
      setSelectedLetter("all");
    }
  }, [letterInventory, selectedLetter]);

  const filteredLessons = useMemo(() => {
    if (selectedLetter === "all") return annotatedHistory;
    const needle = selectedLetter.toLowerCase();
    return annotatedHistory.filter((lesson) => {
      const lessonLetters = (lesson.letters ?? "").toLowerCase();
      const lessonText = (lesson.text ?? "").toLowerCase();
      return lessonLetters.includes(needle) || lessonText.includes(needle);
    });
  }, [annotatedHistory, selectedLetter]);

  const summary = useMemo(() => {
    if (annotatedHistory.length === 0) {
      return {
        totalLessons: 0,
        avgWpm: 0,
        avgAccuracy: 0,
        bestWpm: 0,
        bestAccuracy: 0,
        successRate: 0,
        lessonsAboveTarget: 0,
        totalWords: 0,
        totalMinutes: 0,
        wpmStreak: 0,
        accuracyStreak: 0,
        lastSevenAvgWpm: 0,
      };
    }
    const totals = annotatedHistory.reduce(
      (acc, lesson) => {
        acc.wpm += lesson.wpm ?? 0;
        acc.accuracy += lesson.accuracy ?? 0;
        acc.words += countWordsInLesson(lesson.text);
        acc.duration += lesson.durationMs ?? 0;
        return acc;
      },
      { wpm: 0, accuracy: 0, words: 0, duration: 0 },
    );
    const totalLessons = annotatedHistory.length;
    const bestWpm = Math.max(...annotatedHistory.map((lesson) => lesson.wpm ?? 0));
    const bestAccuracy = Math.max(...annotatedHistory.map((lesson) => lesson.accuracy ?? 0));
    const lessonsAboveTarget = annotatedHistory.filter((lesson) => lesson.wpm >= targetWpm).length;
    const lastSeven = annotatedHistory.slice(-7);
    const lastSevenAvgWpm =
      lastSeven.length > 0
        ? Math.round(lastSeven.reduce((sum, lesson) => sum + lesson.wpm, 0) / lastSeven.length)
        : 0;

    return {
      totalLessons,
      avgWpm: Math.round(totals.wpm / totalLessons),
      avgAccuracy: Math.round(totals.accuracy / totalLessons),
      bestWpm,
      bestAccuracy,
      successRate: Math.round((lessonsAboveTarget / totalLessons) * 100),
      lessonsAboveTarget,
      totalWords: totals.words,
      totalMinutes: Math.round((totals.duration / 60000) * 10) / 10,
      wpmStreak: computeImprovementStreak(annotatedHistory, "wpm"),
      accuracyStreak: computeImprovementStreak(annotatedHistory, "accuracy"),
      lastSevenAvgWpm,
    };
  }, [annotatedHistory, targetWpm]);

  const accuracyBuckets = useMemo(
    () => buildAccuracyBuckets(annotatedHistory),
    [annotatedHistory],
  );

  const smoothingLabel = smoothingWindow === 1 ? "Off" : `${smoothingWindow} lessons`;

  return (
    <section className="w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Letters</p>
          <p className="text-lg font-semibold text-white">
            {unlockedLetters.join(", ")}
          </p>
        </div>
        <div className="text-right text-sm">
          <p className="text-slate-400">Next unlock</p>
          <p className="text-white font-semibold">
            {nextLetter ?? "All characters unlocked"}
          </p>
          {nextLetter ? (
            <p className="text-xs text-slate-500">
              {Math.max(lessonsPerUnlock - successCounter, 0)} high-WPM lessons to go
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ProfileStat label="Lessons" value={summary.totalLessons} hint="lifetime" />
        <ProfileStat label="Target WPM" value={targetWpm} hint="goal" />
        <ProfileStat label="Success Rate" value={`${summary.successRate}%`} hint="≥ target" />
        <ProfileStat
          label="Avg WPM"
          value={summary.avgWpm}
          hint={summary.lastSevenAvgWpm ? `last 7: ${summary.lastSevenAvgWpm}` : "last 7: —"}
        />
        <ProfileStat
          label="Avg Accuracy"
          value={`${summary.avgAccuracy}%`}
          hint={`${summary.totalWords} words`}
        />
        <ProfileStat label="Top WPM" value={summary.bestWpm} hint="fastest lesson" />
        <ProfileStat
          label="Top Accuracy"
          value={`${summary.bestAccuracy}%`}
          hint="cleanest lesson"
        />
        <ProfileStat
          label="Improvement streaks"
          value={`${summary.wpmStreak} / ${summary.accuracyStreak}`}
          hint="WPM / accuracy"
        />
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
        <div className="flex flex-wrap gap-6">
          <div className="min-w-[220px] flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Letter focus</p>
            <LetterFilter
              letters={letterInventory}
              selectedLetter={selectedLetter}
              onSelect={(value) => setSelectedLetter(value)}
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 text-sm text-slate-200 sm:flex-row sm:items-end sm:justify-end">
            <label className="flex flex-col gap-2 sm:w-48">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Smoothing</span>
              <input
                type="range"
                min={1}
                max={9}
                step={2}
                value={smoothingWindow}
                disabled={annotatedHistory.length === 0}
                onChange={(event) => setSmoothingWindow(Number(event.target.value))}
                className="accent-emerald-400"
              />
              <span className="text-xs text-slate-400">{smoothingLabel}</span>
            </label>
            <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              <input
                type="checkbox"
                checked={showTrendline}
                onChange={(event) => setShowTrendline(event.target.checked)}
                className="h-4 w-4 rounded border border-slate-600 bg-slate-900 text-emerald-400 accent-emerald-400"
              />
              Trendline
            </label>
          </div>
        </div>
        <DualAxisProgressChart
          lessons={filteredLessons}
          smoothingWindow={smoothingWindow}
          showTrendline={showTrendline}
          totalLessons={annotatedHistory.length}
          targetWpm={targetWpm}
          selectedLetter={selectedLetter}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <AccuracyDistribution buckets={accuracyBuckets} totalLessons={summary.totalLessons} />
        <HighlightsPanel summary={summary} />
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold text-white">Recent lessons</p>
        {history.length === 0 ? (
          <p className="mt-2 text-sm text-slate-400">Complete a lesson to see stats.</p>
        ) : (
          <ul className="mt-3 space-y-3 text-sm">
            {history
              .slice(-6)
              .reverse()
              .map((record) => (
                <li
                  key={record.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3"
                >
                  <div>
                    <p className="font-semibold text-white">{record.text}</p>
                    <p className="text-xs text-slate-400">
                      {new Date(record.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400">{record.wpm} wpm</p>
                    <p className="text-slate-400">{record.accuracy}%</p>
                    <p className="text-xs text-slate-500">
                      {formatDuration(record.durationMs)}
                    </p>
                    <p className="text-xs text-rose-400">
                      {record.mistakes ?? 0} mistakes
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function ProfileStat({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-5 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}

function LetterFilter({ letters, selectedLetter, onSelect }) {
  if (!letters.length) {
    return <p className="mt-2 text-sm text-slate-500">Complete a lesson to unlock insights.</p>;
  }
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onSelect("all")}
        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${selectedLetter === "all"
          ? "bg-emerald-400 text-slate-900"
          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
      >
        All
      </button>
      {letters.map((entry) => (
        <button
          key={entry.letter}
          type="button"
          onClick={() => onSelect(entry.letter)}
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${selectedLetter === entry.letter
            ? "bg-sky-400 text-slate-900"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
        >
          {entry.letter}
          <span className="ml-1 text-[10px] text-slate-400">{entry.count}</span>
        </button>
      ))}
    </div>
  );
}

function DualAxisProgressChart({
  lessons,
  smoothingWindow,
  showTrendline,
  totalLessons,
  targetWpm,
  selectedLetter,
}) {
  if (totalLessons === 0) {
    return (
      <p className="mt-6 text-sm text-slate-400">
        Complete a lesson to unlock progress visualizations.
      </p>
    );
  }

  if (!lessons.length) {
    return (
      <p className="mt-6 text-sm text-slate-400">
        No lessons yet for the letter "{selectedLetter.toUpperCase()}". Keep practicing to fill this chart.
      </p>
    );
  }

  const chartWidth = 900;
  const chartHeight = 320;
  const paddingX = 60;
  const paddingY = 40;
  const wpmSeries = lessons.map((lesson) => lesson.wpm);
  const accuracySeries = lessons.map((lesson) => lesson.accuracy);
  const smoothedWpm = movingAverage(wpmSeries, smoothingWindow);
  const smoothedAccuracy = movingAverage(accuracySeries, smoothingWindow);
  const chartPoints = lessons.map((lesson, index) => ({
    lessonNumber: lesson.lessonNumber,
    wpm: smoothedWpm[index] ?? lesson.wpm,
    accuracy: smoothedAccuracy[index] ?? lesson.accuracy,
    rawWpm: lesson.wpm,
    rawAccuracy: lesson.accuracy,
  }));

  const xDomainMax = Math.max(totalLessons, 1);
  const yLeftMax = Math.max(
    targetWpm + 15,
    ...chartPoints.map((point) => point.wpm),
    40,
  );
  const yRightMax = 100;

  const xScale = (lessonNumber) => {
    if (xDomainMax === 1) return chartWidth / 2;
    return (
      paddingX +
      ((lessonNumber - 1) / (xDomainMax - 1)) * (chartWidth - paddingX * 2)
    );
  };

  const yScaleLeft = (value) => {
    const clamped = Math.max(0, value);
    return (
      chartHeight -
      paddingY -
      (clamped / (yLeftMax || 1)) * (chartHeight - paddingY * 2)
    );
  };

  const yScaleRight = (value) => {
    const clamped = Math.max(0, Math.min(100, value));
    return (
      chartHeight -
      paddingY -
      (clamped / (yRightMax || 1)) * (chartHeight - paddingY * 2)
    );
  };

  const buildPath = (points, accessor, scaleFn) => {
    if (points.length === 0) return "";
    return points
      .map((point, index) => {
        const prefix = index === 0 ? "M" : "L";
        const x = xScale(point.lessonNumber).toFixed(2);
        const y = scaleFn(point[accessor]).toFixed(2);
        return `${prefix}${x},${y}`;
      })
      .join(" ");
  };

  const wpmPath = buildPath(chartPoints, "wpm", yScaleLeft);
  const accuracyPath = buildPath(chartPoints, "accuracy", yScaleRight);

  const regressionPoints = chartPoints.map((point) => ({
    x: point.lessonNumber,
    y: point.rawWpm,
  }));
  const regression = showTrendline ? regressionCoefficients(regressionPoints) : null;
  const regressionStart = lessons[0]?.lessonNumber ?? 1;
  const regressionEnd = lessons.at(-1)?.lessonNumber ?? regressionStart;
  const regressionLine = regression
    ? {
      x1: xScale(regressionStart),
      y1: yScaleLeft(regression.slope * regressionStart + regression.intercept),
      x2: xScale(regressionEnd),
      y2: yScaleLeft(regression.slope * regressionEnd + regression.intercept),
    }
    : null;

  const leftTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) => Math.round(yLeftMax * ratio));
  const rightTicks = [0, 25, 50, 75, 100];

  return (
    <div className="mt-6">
      <svg
        className="h-80 w-full"
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        role="img"
        aria-label="Typing performance chart"
      >
        <defs>
          <linearGradient id="wpmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(16,185,129)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <line
          x1={paddingX}
          y1={chartHeight - paddingY}
          x2={chartWidth - paddingX}
          y2={chartHeight - paddingY}
          stroke="rgba(148, 163, 184, 0.4)"
          strokeWidth="1"
        />
        <line
          x1={paddingX}
          y1={paddingY}
          x2={paddingX}
          y2={chartHeight - paddingY}
          stroke="rgba(148, 163, 184, 0.2)"
          strokeWidth="1"
        />
        <line
          x1={chartWidth - paddingX}
          y1={paddingY}
          x2={chartWidth - paddingX}
          y2={chartHeight - paddingY}
          stroke="rgba(148, 163, 184, 0.2)"
          strokeWidth="1"
        />
        {leftTicks.map((value) => (
          <g key={`left-${value}`}>
            <line
              x1={paddingX - 6}
              x2={paddingX}
              y1={yScaleLeft(value)}
              y2={yScaleLeft(value)}
              stroke="rgba(148,163,184,0.5)"
            />
            <text
              x={paddingX - 8}
              y={yScaleLeft(value) + 4}
              textAnchor="end"
              fontSize="10"
              fill="rgba(148,163,184,0.8)"
            >
              {value}
            </text>
          </g>
        ))}
        {rightTicks.map((value) => (
          <g key={`right-${value}`}>
            <line
              x1={chartWidth - paddingX}
              x2={chartWidth - paddingX + 6}
              y1={yScaleRight(value)}
              y2={yScaleRight(value)}
              stroke="rgba(148,163,184,0.5)"
            />
            <text
              x={chartWidth - paddingX + 8}
              y={yScaleRight(value) + 4}
              fontSize="10"
              fill="rgba(125,211,252,0.9)"
            >
              {value}%
            </text>
          </g>
        ))}
        <text
          x={paddingX}
          y={paddingY - 10}
          fontSize="11"
          fill="rgba(148,163,184,0.8)"
        >
          WPM
        </text>
        <text
          x={chartWidth - paddingX}
          y={paddingY - 10}
          fontSize="11"
          textAnchor="end"
          fill="rgba(125,211,252,0.9)"
        >
          Accuracy
        </text>
        {targetWpm ? (
          <line
            x1={paddingX}
            x2={chartWidth - paddingX}
            y1={yScaleLeft(targetWpm)}
            y2={yScaleLeft(targetWpm)}
            stroke="rgba(248,113,113,0.4)"
            strokeDasharray="6 4"
          />
        ) : null}
        {accuracyPath ? (
          <path
            d={accuracyPath}
            fill="none"
            stroke="rgba(56,189,248,0.9)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ) : null}
        {wpmPath ? (
          <path
            d={wpmPath}
            fill="none"
            stroke="url(#wpmGradient)"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ) : null}
        {regressionLine ? (
          <line
            x1={regressionLine.x1}
            y1={regressionLine.y1}
            x2={regressionLine.x2}
            y2={regressionLine.y2}
            stroke="rgba(248,250,252,0.5)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        ) : null}
        {lessons.map((lesson) => (
          <circle
            key={`wpm-${lesson.id ?? lesson.lessonNumber}`}
            cx={xScale(lesson.lessonNumber)}
            cy={yScaleLeft(lesson.wpm)}
            r={4}
            fill="rgb(16,185,129)"
            stroke="rgba(15,118,110,0.4)"
            strokeWidth="1"
          >
            <title>
              Lesson {lesson.lessonNumber}: {lesson.wpm} wpm
            </title>
          </circle>
        ))}
        {lessons.map((lesson) => (
          <circle
            key={`accuracy-${lesson.id ?? lesson.lessonNumber}`}
            cx={xScale(lesson.lessonNumber)}
            cy={yScaleRight(lesson.accuracy)}
            r={3}
            fill="rgb(56,189,248)"
            stroke="rgba(14,165,233,0.2)"
            strokeWidth="1"
            opacity="0.8"
          >
            <title>
              Lesson {lesson.lessonNumber}: {lesson.accuracy}% accuracy
            </title>
          </circle>
        ))}
      </svg>
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-6 rounded-full bg-emerald-400" />
          WPM (smoothed)
        </span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-6 rounded-full bg-sky-400" />
          Accuracy (smoothed)
        </span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-6 rounded-full border border-slate-200 border-dashed" />
          Trendline
        </span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-6 rounded-full bg-rose-400/50" />
          Target WPM
        </span>
      </div>
    </div>
  );
}

function AccuracyDistribution({ buckets, totalLessons }) {
  if (!totalLessons) {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
        <p className="text-sm font-semibold text-white">Accuracy spread</p>
        <p className="mt-2 text-sm text-slate-400">Complete lessons to populate this chart.</p>
      </div>
    );
  }

  const maxCount = Math.max(...buckets.map((bucket) => bucket.count), 1);

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Accuracy spread</p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">lessons</p>
      </div>
      <div className="mt-6 flex gap-3">
        {buckets.map((bucket) => (
          <div key={bucket.label} className="flex-1 text-center">
            <div className="relative h-32 overflow-hidden rounded-2xl bg-slate-900/60">
              <div
                className="absolute bottom-0 left-0 right-0 rounded-2xl bg-sky-400/70"
                style={{ height: `${(bucket.count / maxCount) * 100 || 0}%` }}
              />
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {bucket.label}
            </p>
            <p className="text-xs text-slate-500">{bucket.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HighlightsPanel({ summary }) {
  const items = [
    {
      label: "Lessons ≥ target",
      value: summary.lessonsAboveTarget,
      detail: summary.totalLessons ? `${summary.successRate}% of sessions` : "—",
    },
    {
      label: "Typing minutes",
      value: summary.totalMinutes,
      detail: "lifetime focus time",
    },
    {
      label: "Words practiced",
      value: summary.totalWords,
      detail: "approximate",
    },
    {
      label: "WPM streak",
      value: `${summary.wpmStreak} lessons`,
      detail: "non-stop improvement",
    },
    {
      label: "Accuracy streak",
      value: `${summary.accuracyStreak} lessons`,
      detail: "steady precision",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
      <p className="text-sm font-semibold text-white">Highlights</p>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              <p className="text-xs text-slate-400">{item.detail}</p>
            </div>
            <p className="text-lg font-semibold text-white">{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SettingsSection({
  targetWpm,
  setTargetWpm,
  lessonsPerUnlock,
  setLessonsPerUnlock,
  unlockedLetters,
  nextLetter,
  codingLanguage,
  setCodingLanguage,
}) {
  return (
    <section className="w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Configuration</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-3 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Target WPM
          <input
            type="number"
            min={5}
            max={200}
            value={targetWpm}
            onChange={(event) => setTargetWpm(Number(event.target.value) || DEFAULT_TARGET_WPM)}
            className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Lessons per unlock
          <input
            type="number"
            min={1}
            max={20}
            value={lessonsPerUnlock}
            onChange={(event) =>
              setLessonsPerUnlock(Math.max(1, Number(event.target.value) || DEFAULT_LESSONS_PER_UNLOCK))
            }
            className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Coding language
          <select
            value={codingLanguage}
            onChange={(event) => setCodingLanguage(event.target.value)}
            className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language.id} value={language.id}>
                {language.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">
        <p>Unlocked letters: {unlockedLetters.join(", ")}</p>
        <p>
          Next unlock: {nextLetter ?? "complete"} (
          {nextLetter ? "maintain target WPM to progress" : "all done"})
        </p>
      </div>
    </section>
  );
}
