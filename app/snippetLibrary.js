export const SUPPORTED_LANGUAGES = [
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "java", label: "Java" },
  { id: "csharp", label: "C#" },
  { id: "go", label: "Go" },
  { id: "ruby", label: "Ruby" },
];

export const SNIPPET_LIBRARY = [
  {
    id: "function-scaffold",
    concept: "Function scaffolding",
    description: "Practice parentheses, braces, nullish checks, and template literals.",
    focusCharacters: ["(", ")", "{", "}", "?", ":", "=", "`"],
    languages: {
      javascript: String.raw`function greet(userName) {
  const fallback = "friend";
  const label = (userName ?? fallback).trim();
  return \`Hello, \${label}!\`;
}

console.log(greet("Sloane"));`,
      python: String.raw`def greet(user_name):
  fallback = "friend"
  label = (user_name or fallback).strip()
  return f"Hello, {label}!"

print(greet("Sloane"))`,
      java: String.raw`public class Greeter {
  public static String greet(String userName) {
    String fallback = "friend";
    String label = (userName == null ? fallback : userName).trim();
    return String.format("Hello, %s!", label);
  }

  public static void main(String[] args) {
    System.out.println(greet("Sloane"));
  }
}`,
      csharp: String.raw`public static class Greeter {
  public static string Greet(string userName) {
    var fallback = "friend";
    var label = (userName ?? fallback).Trim();
    return $"Hello, {label}!";
  }

  public static void Main() {
    Console.WriteLine(Greet("Sloane"));
  }
}`,
      go: String.raw`package main

import (
  "fmt"
  "strings"
)

func greet(userName string) string {
  fallback := "friend"
  label := strings.TrimSpace(userName)
  if label == "" {
    label = fallback
  }
  return fmt.Sprintf("Hello, %s!", label)
}

func main() {
  fmt.Println(greet("Sloane"))
}`,
      ruby: String.raw`def greet(user_name)
  fallback = "friend"
  label = (user_name || fallback).strip
  "Hello, #{label}!"
end

puts greet("Sloane")`,
    },
  },
  {
    id: "loop-scan",
    concept: "Loop scanner",
    description: "Iterate arrays, use modulus, conditionals, and continue statements.",
    focusCharacters: ["[", "]", "%", "=", "<", ">", "!", "+"],
    languages: {
      javascript: String.raw`const numbers = [3, 7, 12, 21, 42];

for (let index = 0; index < numbers.length; index += 1) {
  const value = numbers[index];
  if (value % 2 === 0) {
    console.log(\`[even] \${value}\`);
    continue;
  }
  console.log(\`[odd] \${value}\`);
}`,
      python: String.raw`numbers = [3, 7, 12, 21, 42]

for index, value in enumerate(numbers):
  if value % 2 == 0:
    print(f"[even] {value}")
    continue
  print(f"[odd] {value}")`,
      java: String.raw`import java.util.List;

public class LoopScan {
  public static void main(String[] args) {
    List<Integer> numbers = List.of(3, 7, 12, 21, 42);
    for (int index = 0; index < numbers.size(); index++) {
      int value = numbers.get(index);
      if (value % 2 == 0) {
        System.out.println("[even] " + value);
        continue;
      }
      System.out.println("[odd] " + value);
    }
  }
}`,
      csharp: String.raw`var numbers = new[] { 3, 7, 12, 21, 42 };

for (var index = 0; index < numbers.Length; index++) {
  var value = numbers[index];
  if (value % 2 == 0) {
    Console.WriteLine($"[even] {value}");
    continue;
  }
  Console.WriteLine($"[odd] {value}");
}`,
      go: String.raw`package main

import "fmt"

func main() {
  numbers := []int{3, 7, 12, 21, 42}
  for index, value := range numbers {
    if value%2 == 0 {
      fmt.Printf("[even] %d\n", value)
      continue
    }
    fmt.Printf("[odd] %d\n", value)
  }
}`,
      ruby: String.raw`numbers = [3, 7, 12, 21, 42]

numbers.each_with_index do |value, _index|
  if value.even?
    puts "[even] #{value}"
    next
  end
  puts "[odd] #{value}"
end`,
    },
  },
  {
    id: "data-ledger",
    concept: "Data ledger",
    description: "Practice object literals, spreads, ternaries, and computed structures.",
    focusCharacters: ["{", "}", ":", "\"", ".", "?", ">=", "["],
    languages: {
      javascript: String.raw`const ledger = {
  opened: new Date("2024-01-01"),
  balance: 1250.5,
  tags: ["ops", "priority"],
};

const status = ledger.balance >= 1000 ? "healthy" : "watch";
const summary = { ...ledger, status };
console.log(summary);`,
      python: String.raw`from datetime import date

ledger = {
  "opened": date(2024, 1, 1),
  "balance": 1250.5,
  "tags": ["ops", "priority"],
}

status = "healthy" if ledger["balance"] >= 1000 else "watch"
summary = { **ledger, "status": status }
print(summary)`,
      java: String.raw`import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public class DataLedger {
  public static void main(String[] args) {
    Map<String, Object> ledger = Map.of(
      "opened", LocalDate.of(2024, 1, 1),
      "balance", 1250.5,
      "tags", List.of("ops", "priority")
    );

    String status = (Double) ledger.get("balance") >= 1000 ? "healthy" : "watch";
    System.out.println(ledger);
    System.out.println("status=" + status);
  }
}`,
      csharp: String.raw`var ledger = new {
  Opened = new DateTime(2024, 1, 1),
  Balance = 1250.5m,
  Tags = new[] { "ops", "priority" }
};

var status = ledger.Balance >= 1000 ? "healthy" : "watch";
var summary = new { ledger.Opened, ledger.Balance, ledger.Tags, Status = status };
Console.WriteLine(summary);`,
      go: String.raw`package main

import (
  "fmt"
  "time"
)

type Ledger struct {
  Opened time.Time
  Balance float64
  Tags []string
}

func main() {
  ledger := Ledger{
    Opened: time.Date(2024, 1, 1, 0, 0, 0, 0, time.UTC),
    Balance: 1250.5,
    Tags: []string{"ops", "priority"},
  }
  status := "watch"
  if ledger.Balance >= 1000 {
    status = "healthy"
  }
  fmt.Println(ledger, "status=", status)
}`,
      ruby: String.raw`require "date"

ledger = {
  opened: Date.new(2024, 1, 1),
  balance: 1250.5,
  tags: %w[ops priority],
}

status = ledger[:balance] >= 1000 ? "healthy" : "watch"
summary = ledger.merge(status: status)
puts summary`,
    },
  },
  {
    id: "shape-class",
    concept: "Class & methods",
    description: "Work with constructors, properties, getters, and formatted output.",
    focusCharacters: ["class", "()", "{}", "=>", "*", "+", ";"],
    languages: {
      javascript: String.raw`class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(8, 5);
console.log(\`area=\${rect.area()}\`);`,
      python: String.raw`class Rectangle:
  def __init__(self, width, height):
    self.width = width
    self.height = height

  def area(self):
    return self.width * self.height

rect = Rectangle(8, 5)
print(f"area={rect.area()}")`,
      java: String.raw`public class Rectangle {
  private final int width;
  private final int height;

  public Rectangle(int width, int height) {
    this.width = width;
    this.height = height;
  }

  public int area() {
    return width * height;
  }

  public static void main(String[] args) {
    Rectangle rect = new Rectangle(8, 5);
    System.out.println("area=" + rect.area());
  }
}`,
      csharp: String.raw`public class Rectangle {
  public int Width { get; }
  public int Height { get; }

  public Rectangle(int width, int height) {
    Width = width;
    Height = height;
  }

  public int Area() => Width * Height;
}

var rect = new Rectangle(8, 5);
Console.WriteLine($"area={rect.Area()}");`,
      go: String.raw`package main

import "fmt"

type Rectangle struct {
  Width  int
  Height int
}

func (r Rectangle) Area() int {
  return r.Width * r.Height
}

func main() {
  rect := Rectangle{Width: 8, Height: 5}
  fmt.Printf("area=%d\n", rect.Area())
}`,
      ruby: String.raw`class Rectangle
  attr_reader :width, :height

  def initialize(width, height)
    @width = width
    @height = height
  end

  def area
    width * height
  end
end

rect = Rectangle.new(8, 5)
puts "area=#{rect.area}"`,
    },
  },
  {
    id: "dispatch-table",
    concept: "Dispatch table",
    description: "Map keywords to handlers, switch on commands, and handle defaults.",
    focusCharacters: ["switch", "=>", ":", "()", "\"", ","],
    languages: {
      javascript: String.raw`const handlers = {
  start: () => console.log("boot"),
  stop: () => console.log("halt"),
  reload: () => console.log("refresh"),
};

function dispatch(command) {
  const handler = handlers[command] ?? (() => console.log("unknown"));
  handler();
}

dispatch("start");
dispatch("noop");`,
      python: String.raw`handlers = {
  "start": lambda: print("boot"),
  "stop": lambda: print("halt"),
  "reload": lambda: print("refresh"),
}

def dispatch(command):
  handler = handlers.get(command, lambda: print("unknown"))
  handler()

dispatch("start")
dispatch("noop")`,
      java: String.raw`import java.util.Map;

public class DispatchTable {
  interface Handler { void run(); }

  public static void main(String[] args) {
    Map<String, Handler> handlers = Map.of(
      "start", () -> System.out.println("boot"),
      "stop", () -> System.out.println("halt"),
      "reload", () -> System.out.println("refresh")
    );

    dispatch(handlers, "start");
    dispatch(handlers, "noop");
  }

  private static void dispatch(Map<String, Handler> handlers, String command) {
    handlers.getOrDefault(command, () -> System.out.println("unknown")).run();
  }
}`,
      csharp: String.raw`var handlers = new Dictionary<string, Action> {
  ["start"] = () => Console.WriteLine("boot"),
  ["stop"] = () => Console.WriteLine("halt"),
  ["reload"] = () => Console.WriteLine("refresh"),
};

void Dispatch(string command) {
  if (!handlers.TryGetValue(command, out var handler)) {
    handler = () => Console.WriteLine("unknown");
  }
  handler();
}

Dispatch("start");
Dispatch("noop");`,
      go: String.raw`package main

import "fmt"

type handler func()

func main() {
  handlers := map[string]handler{
    "start": func() { fmt.Println("boot") },
    "stop": func() { fmt.Println("halt") },
    "reload": func() { fmt.Println("refresh") },
  }

  dispatch(handlers, "start")
  dispatch(handlers, "noop")
}

func dispatch(table map[string]handler, command string) {
  handler, ok := table[command]
  if !ok {
    handler = func() { fmt.Println("unknown") }
  }
  handler()
}`,
      ruby: String.raw`handlers = {
  start: -> { puts "boot" },
  stop: -> { puts "halt" },
  reload: -> { puts "refresh" },
}

def dispatch(handlers, command)
  (handlers[command.to_sym] || -> { puts "unknown" }).call
end

dispatch(handlers, "start")
dispatch(handlers, "noop")`,
    },
  },
];
