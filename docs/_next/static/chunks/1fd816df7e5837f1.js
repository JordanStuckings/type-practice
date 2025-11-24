(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67458,(e,t,a)=>{"use strict";var r=e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;a.c=function(e){return r.H.useMemoCache(e)}},932,(e,t,a)=>{"use strict";t.exports=e.r(67458)},81694,e=>{"use strict";e.i(47167);var t=e.i(43476),a=e.i(932),r=e.i(71645);let s=[{id:"javascript",label:"JavaScript"},{id:"python",label:"Python"},{id:"java",label:"Java"},{id:"csharp",label:"C#"},{id:"go",label:"Go"},{id:"ruby",label:"Ruby"}],l=[{id:"function-scaffold",concept:"Function scaffolding",description:"Practice parentheses, braces, nullish checks, and template literals.",focusCharacters:["(",")","{","}","?",":","=","`"],languages:{javascript:String.raw`function greet(userName) {
  const fallback = "friend";
  const label = (userName ?? fallback).trim();
  return \`Hello, \${label}!\`;
}

console.log(greet("Sloane"));`,python:String.raw`def greet(user_name):
  fallback = "friend"
  label = (user_name or fallback).strip()
  return f"Hello, {label}!"

print(greet("Sloane"))`,java:String.raw`public class Greeter {
  public static String greet(String userName) {
    String fallback = "friend";
    String label = (userName == null ? fallback : userName).trim();
    return String.format("Hello, %s!", label);
  }

  public static void main(String[] args) {
    System.out.println(greet("Sloane"));
  }
}`,csharp:String.raw`public static class Greeter {
  public static string Greet(string userName) {
    var fallback = "friend";
    var label = (userName ?? fallback).Trim();
    return $"Hello, {label}!";
  }

  public static void Main() {
    Console.WriteLine(Greet("Sloane"));
  }
}`,go:String.raw`package main

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
}`,ruby:String.raw`def greet(user_name)
  fallback = "friend"
  label = (user_name || fallback).strip
  "Hello, #{label}!"
end

puts greet("Sloane")`}},{id:"loop-scan",concept:"Loop scanner",description:"Iterate arrays, use modulus, conditionals, and continue statements.",focusCharacters:["[","]","%","=","<",">","!","+"],languages:{javascript:String.raw`const numbers = [3, 7, 12, 21, 42];

for (let index = 0; index < numbers.length; index += 1) {
  const value = numbers[index];
  if (value % 2 === 0) {
    console.log(\`[even] \${value}\`);
    continue;
  }
  console.log(\`[odd] \${value}\`);
}`,python:String.raw`numbers = [3, 7, 12, 21, 42]

for index, value in enumerate(numbers):
  if value % 2 == 0:
    print(f"[even] {value}")
    continue
  print(f"[odd] {value}")`,java:String.raw`import java.util.List;

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
}`,csharp:String.raw`var numbers = new[] { 3, 7, 12, 21, 42 };

for (var index = 0; index < numbers.Length; index++) {
  var value = numbers[index];
  if (value % 2 == 0) {
    Console.WriteLine($"[even] {value}");
    continue;
  }
  Console.WriteLine($"[odd] {value}");
}`,go:String.raw`package main

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
}`,ruby:String.raw`numbers = [3, 7, 12, 21, 42]

numbers.each_with_index do |value, _index|
  if value.even?
    puts "[even] #{value}"
    next
  end
  puts "[odd] #{value}"
end`}},{id:"data-ledger",concept:"Data ledger",description:"Practice object literals, spreads, ternaries, and computed structures.",focusCharacters:["{","}",":",'"',".","?",">=","["],languages:{javascript:String.raw`const ledger = {
  opened: new Date("2024-01-01"),
  balance: 1250.5,
  tags: ["ops", "priority"],
};

const status = ledger.balance >= 1000 ? "healthy" : "watch";
const summary = { ...ledger, status };
console.log(summary);`,python:String.raw`from datetime import date

ledger = {
  "opened": date(2024, 1, 1),
  "balance": 1250.5,
  "tags": ["ops", "priority"],
}

status = "healthy" if ledger["balance"] >= 1000 else "watch"
summary = { **ledger, "status": status }
print(summary)`,java:String.raw`import java.time.LocalDate;
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
}`,csharp:String.raw`var ledger = new {
  Opened = new DateTime(2024, 1, 1),
  Balance = 1250.5m,
  Tags = new[] { "ops", "priority" }
};

var status = ledger.Balance >= 1000 ? "healthy" : "watch";
var summary = new { ledger.Opened, ledger.Balance, ledger.Tags, Status = status };
Console.WriteLine(summary);`,go:String.raw`package main

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
}`,ruby:String.raw`require "date"

ledger = {
  opened: Date.new(2024, 1, 1),
  balance: 1250.5,
  tags: %w[ops priority],
}

status = ledger[:balance] >= 1000 ? "healthy" : "watch"
summary = ledger.merge(status: status)
puts summary`}},{id:"shape-class",concept:"Class & methods",description:"Work with constructors, properties, getters, and formatted output.",focusCharacters:["class","()","{}","=>","*","+",";"],languages:{javascript:String.raw`class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(8, 5);
console.log(\`area=\${rect.area()}\`);`,python:String.raw`class Rectangle:
  def __init__(self, width, height):
    self.width = width
    self.height = height

  def area(self):
    return self.width * self.height

rect = Rectangle(8, 5)
print(f"area={rect.area()}")`,java:String.raw`public class Rectangle {
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
}`,csharp:String.raw`public class Rectangle {
  public int Width { get; }
  public int Height { get; }

  public Rectangle(int width, int height) {
    Width = width;
    Height = height;
  }

  public int Area() => Width * Height;
}

var rect = new Rectangle(8, 5);
Console.WriteLine($"area={rect.Area()}");`,go:String.raw`package main

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
}`,ruby:String.raw`class Rectangle
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
puts "area=#{rect.area}"`}},{id:"dispatch-table",concept:"Dispatch table",description:"Map keywords to handlers, switch on commands, and handle defaults.",focusCharacters:["switch","=>",":","()",'"',","],languages:{javascript:String.raw`const handlers = {
  start: () => console.log("boot"),
  stop: () => console.log("halt"),
  reload: () => console.log("refresh"),
};

function dispatch(command) {
  const handler = handlers[command] ?? (() => console.log("unknown"));
  handler();
}

dispatch("start");
dispatch("noop");`,python:String.raw`handlers = {
  "start": lambda: print("boot"),
  "stop": lambda: print("halt"),
  "reload": lambda: print("refresh"),
}

def dispatch(command):
  handler = handlers.get(command, lambda: print("unknown"))
  handler()

dispatch("start")
dispatch("noop")`,java:String.raw`import java.util.Map;

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
}`,csharp:String.raw`var handlers = new Dictionary<string, Action> {
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
Dispatch("noop");`,go:String.raw`package main

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
}`,ruby:String.raw`handlers = {
  start: -> { puts "boot" },
  stop: -> { puts "halt" },
  reload: -> { puts "refresh" },
}

def dispatch(handlers, command)
  (handlers[command.to_sym] || -> { puts "unknown" }).call
end

dispatch(handlers, "start")
dispatch(handlers, "noop")`}}],n=["i","a","l","r"],i=Array.from(new Set([...n,..."abcdefghijklmnopqrstuvwxyz".split("")])),c="typing-progress-v1",o=s[0]?.id??"javascript",m=[{id:"lesson",label:"Lesson"},{id:"coding",label:"Coding"},{id:"profile",label:"Profile"},{id:"settings",label:"Settings"}],d=(e=1)=>{let t=Math.abs(Math.floor(e))%0x7fffffff;return 0===t&&(t=1),()=>((t=16807*t%0x7fffffff)-1)/0x7ffffffe},u=e=>{if(!e)return"00:00";let t=Math.max(0,Math.floor(e/1e3)),a=String(Math.floor(t/60)).padStart(2,"0"),r=String(t%60).padStart(2,"0");return`${a}:${r}`},h=e=>e<=4?"short":e<=7?"medium":e<=10?"long":"extra_long",p={very_common:4,common:3,specialized:2,rare:1},x={low:3,medium:2,high:1},g={short:3,medium:3,long:2,extra_long:1},f={simple_root:3,compound:2.5,affixed:2,loanword:1.5},b={general:3,technology:2.6,data:2.4,design:2.3,science:2.2,project:2.2,security:2.2,networking:2.2,food:2},y={"double-letter":.35,"alternating-cv":.4,"all-lower":.15,"vowel-run":-.35,"rare-letter":-.6,"vowel-glide":.15,"y-ending":.1},w=(e,t=0)=>{let a=Number.parseFloat(e);return Number.isFinite(a)?a:t},j=e=>{var t;if(!e)return null;let a=String(e.word??"").toLowerCase().trim();if(!a||!/^[a-z]+$/.test(a)||a.length<2||a.length>12)return null;let r=(t=e.typing_features)?t.split("|").map(e=>e.trim()).filter(e=>e&&"none"!==e):[],s="yes"===String(e.recommended??"").trim().toLowerCase();return{word:a,length:a.length,frequencyTier:e.frequency_tier??"rare",frequency:w(e.frequency),zipf:w(e.zipf),obscurityLevel:e.obscurity_level??"medium",lengthGroup:e.length_group??h(a.length),partOfSpeech:e.part_of_speech??"noun",domain:e.domain??"general",complexity:e.complexity??"simple_root",typingFeatures:r,recommended:s,notes:e.notes??""}},v=["air","aria","lair","liar","rail","briar","racial","radial","real","flare","argil","hilaria","jail","kalari","alarm","linear","clarion","plain","qibla","qi","rails","trail","aural","rival","wail","axial","relay","lazily","dragon","forest","mural","artisan","station","rotation","delivery","formation","vital","gaily","brawler","sailor","pavilion","citadel","journal","keyboard","galaxy","zephyr"].map(e=>({word:e,length:e.length,frequencyTier:"common",frequency:1,zipf:5,obscurityLevel:"low",lengthGroup:h(e.length),partOfSpeech:"noun",domain:"general",complexity:"simple_root",typingFeatures:["all-lower"],recommended:!0,notes:"fallback"})),N=e=>{let t=[],a="",r=!1;for(let s=0;s<e.length;s+=1){let l=e[s];if('"'===l){r&&'"'===e[s+1]?(a+='"',s+=1):r=!r;continue}if(","===l&&!r){t.push(a),a="";continue}a+=l}return t.push(a),t.map(e=>e.trim())},S=(e,a,r)=>Array.from(e).map((e,s)=>{let l=a[s],n=" "===e?" ":e,i=!!r[s];if(l){let a=l===e;return i?(0,t.jsx)("span",{className:a?"text-amber-300 underline decoration-amber-300 decoration-2":"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${s}`):(0,t.jsx)("span",{className:a?"text-emerald-400":"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${s}`)}return s===a.length?i?(0,t.jsx)("span",{className:"rounded border border-rose-500 bg-rose-500/20 text-rose-200",children:n},`${e}-${s}`):(0,t.jsx)("span",{className:"rounded bg-slate-700/70 text-white",children:n},`${e}-${s}`):(0,t.jsx)("span",{className:"text-slate-500",children:n},`${e}-${s}`)}),k=(e,t)=>{if(!Array.isArray(e)||0===e.length)return[];let a=Math.max(1,Math.floor(t));if(1===a)return[...e];let r=Math.floor(a/2);return e.map((t,a)=>{let s=Math.max(0,a-r),l=Math.min(e.length-1,a+r),n=e.slice(s,l+1);return Number((n.reduce((e,t)=>e+t,0)/n.length).toFixed(2))})},_=(e,t)=>{if(!Array.isArray(e)||0===e.length)return 0;let a=1,r=1;for(let s=1;s<e.length;s+=1)e[s][t]>=e[s-1][t]?r+=1:r=1,r>a&&(a=r);return a},M=[{label:"<80",min:0,max:80},{label:"80-85",min:80,max:85},{label:"85-90",min:85,max:90},{label:"90-95",min:90,max:95},{label:"95+",min:95,max:101}],L=e=>s.find(t=>t.id===e)?.label??e,W=(e,t)=>{if(!e)return"";let a=t,r="";for(;a<e.length;){let t=e[a];if(" "===t||"	"===t)r+=t,a+=1;else break}return r};function C(){let e,u,h,w,k,_,M,L,C,O,I,F,U,B,q,K,J,V,Y,Q,Z,ee,et,ea,er,es,el,en,ei,ec,eo,em,ed,eu,eh,ep,ex,eg,eb,ey,ew,ej,ev,eN,eS,ek,e_,eM,eL,eW,eC,eA,e$,eT,eP,eR=(0,a.c)(169),[eD,eE]=(0,r.useState)("lesson"),[eO,eH]=(0,r.useState)(0),[eI,ez]=(0,r.useState)(""),[eG,eF]=(0,r.useState)(null),[eU,eB]=(0,r.useState)(!1);eR[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],eR[0]=e):e=eR[0];let[eq,eK]=(0,r.useState)(e),[eJ,eV]=(0,r.useState)(35),[eY,eQ]=(0,r.useState)(5),[eX,eZ]=(0,r.useState)(n.length),[e0,e1]=(0,r.useState)(0);eR[1]===Symbol.for("react.memo_cache_sentinel")?(u={},eR[1]=u):u=eR[1];let[e2,e4]=(0,r.useState)(u);eR[2]===Symbol.for("react.memo_cache_sentinel")?(h=[],eR[2]=h):h=eR[2];let[e3,e5]=(0,r.useState)(h),[e6,e8]=(0,r.useState)(0),[e9,e7]=(0,r.useState)(""),[te,tt]=(0,r.useState)(null),[ta,tr]=(0,r.useState)(!1);eR[3]===Symbol.for("react.memo_cache_sentinel")?(w=[],eR[3]=w):w=eR[3];let[ts,tl]=(0,r.useState)(w);eR[4]===Symbol.for("react.memo_cache_sentinel")?(k={},eR[4]=k):k=eR[4];let[tn,ti]=(0,r.useState)(k),[tc,to]=(0,r.useState)(o),tm=(0,r.useRef)(null),td=(0,r.useRef)(null),tu=(0,r.useRef)(null),th=(0,r.useRef)(null),tp=(0,r.useRef)(null);eR[5]!==eX?(_=i.slice(0,eX),eR[5]=eX,eR[6]=_):_=eR[6];let tx=_,tg=eX<i.length?i[eX]:null;eR[7]!==e3||eR[8]!==eO||eR[9]!==tx?(M=((e,t,a)=>{if(!e.length)return[];let r=a.length>0?a:v,s=e.at(-1),l=r.filter(t=>{var a;let r;return t?.word&&t.recommended&&(a=t.word,r=new Set(e),Array.from(a).every(e=>r.has(e)))&&"high"!==t.obscurityLevel});if(0===l.length)return e.map(e=>`${e}${e}${e}`);let n=d(t+31*e.length),i=l.map(t=>({entry:t,score:((e,t,a,r=0)=>{var s;if(!e)return 0;let l=p[e.frequencyTier]??1,n=x[e.obscurityLevel]??1,i=f[e.complexity]??1,c=b[e.domain]??2,o=g[e.lengthGroup]??1,m=t.length,d=0;return m<=4&&"short"===e.lengthGroup?d=1:m<=7&&"medium"===e.lengthGroup?d=.5:m>=10&&"long"===e.lengthGroup&&(d=.4),3*l+2*n+i+c+o+d+(Array.isArray(s=e.typingFeatures)&&0!==s.length?s.reduce((e,t)=>e+(y[t]??0),0):0)+(a&&e.word.includes(a)?1:0)+(e.zipf??0)*.35+r})(t,e,s,.5*n())})).sort((e,t)=>t.score-e.score),c=Math.max(54,60),o=i.slice(0,Math.min(c,i.length)),m=((e,t)=>{if(!Array.isArray(e))return[];let a=[...e],r=d(t);for(let e=a.length-1;e>0;e-=1){let t=Math.floor(r()*(e+1));[a[e],a[t]]=[a[t],a[e]]}return a})(s&&o.some(e=>e.entry.word.includes(s))?o.filter(e=>e.entry.word.includes(s)):o,t).map(e=>e.entry);if(0===m.length)return e.map(e=>`${e}${e}${e}`);let u=[];for(let e=0;e<18;e+=1)u.push(m[e%m.length].word);return u})(tx,eO,e3),eR[7]=e3,eR[8]=eO,eR[9]=tx,eR[10]=M):M=eR[10];let tf=M;eR[11]!==tf?(L=tf.join(" "),eR[11]=tf,eR[12]=L):L=eR[12];let tb=L;eR[13]!==tb||eR[14]!==e2||eR[15]!==eI?(C=S(tb,eI,e2),eR[13]=tb,eR[14]=e2,eR[15]=eI,eR[16]=C):C=eR[16];let ty=C;eR[17]!==e6||eR[18]!==tc?(O=((e,t)=>{let a=(e=>{if(!l.length)return null;let t=e%l.length;return l[t]})(e);if(!a)return{snippet:null,text:"",languages:[]};let r=s.find(e=>a.languages[e.id])?.id??s[0]?.id,n=a.languages[t]?t:r;return{snippet:a,text:a.languages[n]??"",activeLanguage:n}})(e6,tc),eR[17]=e6,eR[18]=tc,eR[19]=O):O=eR[19];let tw=O,tj=tw.text;eR[20]!==e9||eR[21]!==tn||eR[22]!==tj?(I=S(tj,e9,tn),eR[20]=e9,eR[21]=tn,eR[22]=tj,eR[23]=I):I=eR[23];let tv=I;eR[24]===Symbol.for("react.memo_cache_sentinel")?(F=()=>{let e=!1;return(async()=>{try{let t=await fetch("/type-practice/full_dictionary_en.csv"),a=await t.text();if(e)return;let r=(e=>{if(!e)return[];let t=e.trim().split(/\r?\n/);if(t.length<=1)return[];let a=N(t[0]),r=[],s=new Set;for(let e=1;e<t.length;e+=1){let l=t[e];if(!l)continue;let n=N(l);if(!n.length)continue;let i={};for(let e=0;e<a.length;e+=1)i[a[e]]=n[e]??"";let c=j(i);c&&c.recommended&&!s.has(c.word)&&(s.add(c.word),r.push(c))}return r})(a);e5(r)}catch(e){console.error("Failed to load word metadata",e)}})(),()=>{e=!0}},U=[],eR[24]=F,eR[25]=U):(F=eR[24],U=eR[25]),(0,r.useEffect)(F,U),eR[26]!==eD?(B=()=>{("lesson"===eD||"coding"===eD)&&tm.current?.focus()},eR[26]=eD,eR[27]=B):B=eR[27],eR[28]!==eD||eR[29]!==ta||eR[30]!==e6||eR[31]!==eU||eR[32]!==eO?(q=[eD,e6,ta,eO,eU],eR[28]=eD,eR[29]=ta,eR[30]=e6,eR[31]=eU,eR[32]=eO,eR[33]=q):q=eR[33],(0,r.useEffect)(B,q),eR[34]===Symbol.for("react.memo_cache_sentinel")?(K=()=>{let e=!1;try{let t=window.localStorage.getItem(c);if(t){let a=JSON.parse(t);"number"==typeof a.unlockedCount&&eZ(a.unlockedCount),Array.isArray(a.lessonHistory)&&eK(a.lessonHistory),Array.isArray(a.codingHistory)&&tl(a.codingHistory),"number"==typeof a.successCounter&&e1(a.successCounter),"number"==typeof a.lessonIndex&&eH(a.lessonIndex),"number"==typeof a.targetWpm&&eV(a.targetWpm),"number"==typeof a.lessonsPerUnlock&&eQ(a.lessonsPerUnlock),"number"==typeof a.codingIndex&&e8(a.codingIndex),"string"==typeof a.codingLanguage&&to(a.codingLanguage),e=!0}}catch(e){console.error("Failed to restore progress",e)}e||window.localStorage.removeItem(c)},J=[],eR[34]=K,eR[35]=J):(K=eR[34],J=eR[35]),(0,r.useEffect)(K,J),eR[36]!==ts||eR[37]!==e6||eR[38]!==tc||eR[39]!==eq||eR[40]!==eO||eR[41]!==eY||eR[42]!==e0||eR[43]!==eJ||eR[44]!==eX?(V=()=>{try{window.localStorage.setItem(c,JSON.stringify({unlockedCount:eX,lessonHistory:eq,codingHistory:ts,successCounter:e0,lessonIndex:eO,targetWpm:eJ,lessonsPerUnlock:eY,codingIndex:e6,codingLanguage:tc}))}catch(e){console.error("Failed to persist progress",e)}},Y=[eq,eO,eY,e0,eJ,eX,ts,e6,tc],eR[36]=ts,eR[37]=e6,eR[38]=tc,eR[39]=eq,eR[40]=eO,eR[41]=eY,eR[42]=e0,eR[43]=eJ,eR[44]=eX,eR[45]=V,eR[46]=Y):(V=eR[45],Y=eR[46]),(0,r.useEffect)(V,Y),eR[47]!==eD||eR[48]!==ta||eR[49]!==eU?(Q=()=>{if(!["lesson","coding"].includes(eD)||"lesson"===eD&&eU||"coding"===eD&&ta)return;let e=e=>{"Tab"===e.key||e.metaKey||e.ctrlKey||e.altKey||document.activeElement!==tm.current&&tm.current?.focus()};return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},Z=[eD,ta,eU],eR[47]=eD,eR[48]=ta,eR[49]=eU,eR[50]=Q,eR[51]=Z):(Q=eR[50],Z=eR[51]),(0,r.useEffect)(Q,Z),eR[52]===Symbol.for("react.memo_cache_sentinel")?(ee=()=>()=>{td.current&&clearTimeout(td.current),tu.current&&clearTimeout(tu.current),th.current&&clearTimeout(th.current),tp.current&&clearTimeout(tp.current)},et=[],eR[52]=ee,eR[53]=et):(ee=eR[52],et=eR[53]),(0,r.useEffect)(ee,et),eR[54]!==eY||eR[55]!==eJ||eR[56]!==eX?(ea=e=>{e<eJ?e1(0):e1(e=>{let t=e+1,a=eX<i.length;return t>=eY&&a?(eZ(D),0):t})},eR[54]=eY,eR[55]=eJ,eR[56]=eX,eR[57]=ea):ea=eR[57];let tN=ea;eR[58]===Symbol.for("react.memo_cache_sentinel")?(er=()=>{ez(""),eF(null),eB(!1),e4({})},eR[58]=er):er=eR[58];let tS=er;eR[59]===Symbol.for("react.memo_cache_sentinel")?(es=()=>{eH(R),tS()},eR[59]=es):es=eR[59];let tk=es;eR[60]===Symbol.for("react.memo_cache_sentinel")?(el=()=>{td.current&&clearTimeout(td.current),td.current=setTimeout(()=>{td.current=null,tk()},0)},eR[60]=el):el=eR[60];let t_=el;eR[61]===Symbol.for("react.memo_cache_sentinel")?(en=()=>{e7(""),tt(null),tr(!1),ti({})},eR[61]=en):en=eR[61];let tM=en;eR[62]===Symbol.for("react.memo_cache_sentinel")?(ei=()=>{e8(P)},eR[62]=ei):ei=eR[62];let tL=ei;eR[63]===Symbol.for("react.memo_cache_sentinel")?(ec=()=>{th.current&&clearTimeout(th.current),th.current=setTimeout(()=>{th.current=null,tL()},200)},eR[63]=ec):ec=eR[63];let tW=ec;eR[64]!==eU||eR[65]!==eG?(eo=()=>{tu.current&&clearTimeout(tu.current),eG&&!eU&&(tu.current=setTimeout(()=>{tu.current=null,tS()},45e3))},eR[64]=eU,eR[65]=eG,eR[66]=eo):eo=eR[66];let tC=eo;eR[67]!==ta||eR[68]!==te?(em=()=>{tp.current&&clearTimeout(tp.current),te&&!ta&&(tp.current=setTimeout(()=>{tp.current=null,tM()},6e4))},eR[67]=ta,eR[68]=te,eR[69]=em):em=eR[69];let tA=em;eR[70]!==tN||eR[71]!==eU||eR[72]!==tb||eR[73]!==e2||eR[74]!==eG||eR[75]!==eJ||eR[76]!==tx?(ed=()=>{if(eU)return;let e=Date.now(),t=eG??e,a=Math.max(e-t,1),r=Math.max(a/6e4,.016666666666666666),s=Math.max(0,Math.round(tb.length/5/r)),l=tb.length||1,n=Object.keys(e2).length,i=Math.max(0,Math.round((l-n)/l*100));eB(!0),eK(t=>[...t,{id:`lesson-${t.length+1}-${e}`,wpm:s,accuracy:i,letters:tx.join(""),text:tb,timestamp:new Date(e).toISOString(),durationMs:a,success:s>=eJ,mistakes:n}]),tN(s),t_()},eR[70]=tN,eR[71]=eU,eR[72]=tb,eR[73]=e2,eR[74]=eG,eR[75]=eJ,eR[76]=tx,eR[77]=ed):ed=eR[77];let t$=ed;eR[78]!==ta||eR[79]!==tc||eR[80]!==tn||eR[81]!==te||eR[82]!==tj||eR[83]!==tw.activeLanguage||eR[84]!==tw.snippet||eR[85]!==eJ?(eu=()=>{if(ta||!tj)return;let e=Date.now(),t=te??e,a=Math.max(e-t,1),r=Math.max(a/6e4,.016666666666666666),s=Math.max(0,Math.round(tj.length/5/r)),l=tj.length||1,n=Object.keys(tn).length,i=Math.max(0,Math.round((l-n)/l*100)),c=tw.snippet;tr(!0),tl(t=>[...t,{id:`coding-${t.length+1}-${e}`,wpm:s,accuracy:i,language:tw.activeLanguage??tc,snippetId:c?.id??"snippet",concept:c?.concept??"Snippet",text:tj,timestamp:new Date(e).toISOString(),durationMs:a,mistakes:n,focusCharacters:c?.focusCharacters??[],success:s>=eJ,mode:"coding"}]),tW()},eR[78]=ta,eR[79]=tc,eR[80]=tn,eR[81]=te,eR[82]=tj,eR[83]=tw.activeLanguage,eR[84]=tw.snippet,eR[85]=eJ,eR[86]=eu):eu=eR[86];let tT=eu;eR[87]===Symbol.for("react.memo_cache_sentinel")?(eh=e=>{e4(t=>t[e]?t:{...t,[e]:!0})},eR[87]=eh):eh=eR[87];let tP=eh;eR[88]===Symbol.for("react.memo_cache_sentinel")?(ep=e=>{ti(t=>t[e]?t:{...t,[e]:!0})},eR[88]=ep):ep=eR[88];let tR=ep;eR[89]!==eD||eR[90]!==ta||eR[91]!==te||eR[92]!==tj||eR[93]!==eU||eR[94]!==tb||eR[95]!==eG?(ex=e=>{let t="lesson"===eD,a="coding"===eD;if(!t&&!a||e.metaKey||e.ctrlKey||e.altKey||t&&eU||a&&ta)return;if("Backspace"===e.key){e.preventDefault(),t?ez(T):e7($);return}if("Tab"===e.key){if(!a)return;e.preventDefault(),e7(e=>{if(ta||e.length>=tj.length)return e;let t=W(tj,e.length);return t?tj.startsWith(t,e.length)?e+t:(tR(e.length),e):e});return}let r="Enter"===e.key?"\n":e.key;if(1===r.length||"\n"===r){if(t&&!eG&&eF(Date.now()),a&&!te&&tt(Date.now()),e.preventDefault(),t)return void ez(e=>{if(eU||e.length>=tb.length)return e;let t=tb[e.length];return t?r===t?e+r:(tP(e.length),e):e});e7(e=>{if(ta||e.length>=tj.length)return e;let t=tj[e.length];if(!t)return e;if("\n"===r){if("\n"!==t)return tR(e.length),e;let a=W(tj,e.length+1);return e+"\n"+a}return r===t?e+r:(tR(e.length),e)})}},eR[89]=eD,eR[90]=ta,eR[91]=te,eR[92]=tj,eR[93]=eU,eR[94]=tb,eR[95]=eG,eR[96]=ex):ex=eR[96];let tD=ex;eR[97]!==t$||eR[98]!==eU||eR[99]!==tb||eR[100]!==eI?(eg=()=>{!eU&&tb&&eI===tb&&t$()},eb=[t$,eU,tb,eI],eR[97]=t$,eR[98]=eU,eR[99]=tb,eR[100]=eI,eR[101]=eg,eR[102]=eb):(eg=eR[101],eb=eR[102]),(0,r.useEffect)(eg,eb),eR[103]!==ta||eR[104]!==e9||eR[105]!==tj||eR[106]!==tT?(ey=()=>{!ta&&tj&&e9===tj&&tT()},ew=[ta,e9,tj,tT],eR[103]=ta,eR[104]=e9,eR[105]=tj,eR[106]=tT,eR[107]=ey,eR[108]=ew):(ey=eR[107],ew=eR[108]),(0,r.useEffect)(ey,ew),eR[109]!==tC?(ej=()=>(tC(),()=>{tu.current&&clearTimeout(tu.current)}),eR[109]=tC,eR[110]=ej):ej=eR[110],eR[111]!==tC||eR[112]!==eI?(ev=[tC,eI],eR[111]=tC,eR[112]=eI,eR[113]=ev):ev=eR[113],(0,r.useEffect)(ej,ev),eR[114]!==tA?(eN=()=>(tA(),()=>{tp.current&&clearTimeout(tp.current)}),eR[114]=tA,eR[115]=eN):eN=eR[115],eR[116]!==e9||eR[117]!==tA?(eS=[tA,e9],eR[116]=e9,eR[117]=tA,eR[118]=eS):eS=eR[118],(0,r.useEffect)(eN,eS),eR[119]===Symbol.for("react.memo_cache_sentinel")?(ek=()=>{tM()},eR[119]=ek):ek=eR[119],eR[120]!==e6||eR[121]!==tc?(e_=[tM,e6,tc],eR[120]=e6,eR[121]=tc,eR[122]=e_):e_=eR[122],(0,r.useEffect)(ek,e_);let tE="lesson"!==eD&&"coding"!==eD||"lesson"===eD&&eU||"coding"===eD&&ta;return eR[123]!==eD?(eM=m.map(e=>(0,t.jsx)(E,{isActive:eD===e.id,label:e.label,onClick:()=>eE(e.id)},e.id)),eR[123]=eD,eR[124]=eM):eM=eR[124],eR[125]!==eM?(eL=(0,t.jsx)("nav",{className:"flex flex-wrap justify-center gap-3",children:eM}),eR[125]=eM,eR[126]=eL):eL=eR[126],eR[127]!==eD||eR[128]!==ty||eR[129]!==eq||eR[130]!==tb||eR[131]!==tg||eR[132]!==eJ||eR[133]!==eX?(eW="lesson"===eD&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z,{unlockedCount:eX,nextLetter:tg,history:eq,targetWpm:eJ}),(0,t.jsx)(H,{highlightedPrompt:ty,lessonText:tb,onClick:()=>tm.current?.focus()}),(0,t.jsx)("p",{className:"text-center text-xs text-slate-400",children:"Typing is captured automatically; press Backspace to fix mistakes and keep eyes on the words."})]}),eR[127]=eD,eR[128]=ty,eR[129]=eq,eR[130]=tb,eR[131]=tg,eR[132]=eJ,eR[133]=eX,eR[134]=eW):eW=eR[134],eR[135]!==eD||eR[136]!==ta||eR[137]!==tv||eR[138]!==ts||eR[139]!==e6||eR[140]!==tc||eR[141]!==tj||eR[142]!==tw?(eC="coding"===eD&&(0,t.jsx)(G,{snippetPayload:tw,highlightedPrompt:tv,codingComplete:ta,onNext:tL,codingHistory:ts,codingLanguage:tc,codingIndex:e6,codingText:tj}),eR[135]=eD,eR[136]=ta,eR[137]=tv,eR[138]=ts,eR[139]=e6,eR[140]=tc,eR[141]=tj,eR[142]=tw,eR[143]=eC):eC=eR[143],eR[144]!==tD||eR[145]!==tE?(eA=(0,t.jsx)("input",{ref:tm,spellCheck:!1,value:"",onChange:A,onKeyDown:tD,className:"absolute left-0 top-0 h-px w-px opacity-0","aria-hidden":!0,disabled:tE}),eR[144]=tD,eR[145]=tE,eR[146]=eA):eA=eR[146],eR[147]!==eD||eR[148]!==eq||eR[149]!==eY||eR[150]!==tg||eR[151]!==e0||eR[152]!==eJ||eR[153]!==tx?(e$="profile"===eD&&(0,t.jsx)(X,{history:eq,unlockedLetters:tx,nextLetter:tg,successCounter:e0,lessonsPerUnlock:eY,targetWpm:eJ}),eR[147]=eD,eR[148]=eq,eR[149]=eY,eR[150]=tg,eR[151]=e0,eR[152]=eJ,eR[153]=tx,eR[154]=e$):e$=eR[154],eR[155]!==eD||eR[156]!==tc||eR[157]!==eY||eR[158]!==tg||eR[159]!==eJ||eR[160]!==tx?(eT="settings"===eD&&(0,t.jsx)(ef,{targetWpm:eJ,setTargetWpm:eV,lessonsPerUnlock:eY,setLessonsPerUnlock:eQ,unlockedLetters:tx,nextLetter:tg,codingLanguage:tc,setCodingLanguage:to}),eR[155]=eD,eR[156]=tc,eR[157]=eY,eR[158]=tg,eR[159]=eJ,eR[160]=tx,eR[161]=eT):eT=eR[161],eR[162]!==eL||eR[163]!==eW||eR[164]!==eC||eR[165]!==eA||eR[166]!==e$||eR[167]!==eT?(eP=(0,t.jsx)("div",{className:"min-h-screen bg-slate-950 px-4 py-10 text-slate-100",children:(0,t.jsxs)("div",{className:"mx-auto flex w-full max-w-6xl flex-col items-center gap-8",children:[eL,eW,eC,eA,e$,eT]})}),eR[162]=eL,eR[163]=eW,eR[164]=eC,eR[165]=eA,eR[166]=e$,eR[167]=eT,eR[168]=eP):eP=eR[168],eP}function A(){}function $(e){return e.slice(0,-1)}function T(e){return e.slice(0,-1)}function P(e){return e+1}function R(e){return e+1}function D(e){return Math.min(e+1,i.length)}function E(e){let r,s=(0,a.c)(4),{isActive:l,label:n,onClick:i}=e,c=`rounded-full px-5 py-2 text-sm font-medium transition ${l?"bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/40":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;return s[0]!==n||s[1]!==i||s[2]!==c?(r=(0,t.jsx)("button",{type:"button",onClick:i,className:c,children:n}),s[0]=n,s[1]=i,s[2]=c,s[3]=r):r=s[3],r}let O=23;function H(e){let r,s,l,n,i,c=(0,a.c)(21),{highlightedPrompt:o,lessonText:m,onClick:d}=e;if(c[0]!==o||c[1]!==m){e:{let e;if(!m){let e;c[3]!==o?(e=o.length>0?[o]:[],c[3]=o,c[4]=e):e=c[4],r=e;break e}let t=((e,t=O)=>{if(!e)return[];let a=[],r=0;for(;r<e.length;){let s=Math.min(r+t,e.length);if(s<e.length&&" "!==e[s]){let t=e.slice(r,s).lastIndexOf(" ");t>0&&(s=r+t)}for(s===r&&(s=Math.min(r+t,e.length)),a.push({start:r,end:s}),r=s;r<e.length&&" "===e[r];)r+=1}return a})(m);if(0===t.length){let e;c[5]!==o?(e=[o],c[5]=o,c[6]=e):e=c[6],r=e;break e}c[7]!==o?(e=e=>{let{start:t,end:a}=e;return o.slice(t,a)},c[7]=o,c[8]=e):e=c[8],r=t.map(e)}c[0]=o,c[1]=m,c[2]=r}else r=c[2];let u=r;c[9]!==u?(s=u.reduce(I,0),c[9]=u,c[10]=s):s=c[10];let h=Math.max(1,Math.min(O,s));if(c[11]!==h||c[12]!==u){let e;c[14]!==h?(e=(e,a)=>(0,t.jsxs)("div",{className:"grid w-full justify-center gap-3 text-center font-mono text-4xl tracking-tight text-white sm:text-5xl",style:{gridTemplateColumns:`repeat(${h}, minmax(0, 1fr))`},children:[e.map((e,r)=>(0,t.jsx)("span",{className:"flex min-h-[3.5rem] items-center justify-center px-2 sm:min-h-[4.5rem]",children:e},`prompt-char-${a}-${r}`)),Array.from({length:Math.max(0,h-e.length)}).map((e,r)=>(0,t.jsx)("span",{className:"pointer-events-none flex min-h-[3.5rem] select-none items-center justify-center px-2 text-transparent sm:min-h-[4.5rem]","aria-hidden":!0,children:" "},`prompt-filler-${a}-${r}`))]},`prompt-line-${a}`),c[14]=h,c[15]=e):e=c[15],l=u.map(e),c[11]=h,c[12]=u,c[13]=l}else l=c[13];return c[16]!==l?(n=(0,t.jsx)("div",{className:"relative flex w-full max-w-7xl flex-col items-center gap-8",children:l}),c[16]=l,c[17]=n):n=c[17],c[18]!==d||c[19]!==n?(i=(0,t.jsx)("section",{className:"relative flex min-h-[60vh] w-full items-center justify-center rounded-3xl border border-white/5 bg-slate-900/40 p-16 shadow-2xl shadow-black/40",onClick:d,children:n}),c[18]=d,c[19]=n,c[20]=i):i=c[20],i}function I(e,t){return Math.max(e,t.length)}function z(e){let r,s,l,n=(0,a.c)(10),{unlockedCount:c,nextLetter:o,history:m,targetWpm:d}=e,u=m.at(-1)?.wpm??0;n[0]!==c?(r=i.at(Math.max(c-1,0))??null,n[0]=c,n[1]=r):r=n[1];let h=r;return n[2]!==h||n[3]!==u||n[4]!==o||n[5]!==d||n[6]!==c?(s=i.map((e,a)=>{if(a<c){let a=e===h;return(0,t.jsx)("span",{className:`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-emerald-300 bg-emerald-500 text-slate-900 ${a?"font-black ring-2 ring-emerald-200":""}`,title:a?`Current focus \xb7 Target WPM ${d}`:void 0,children:e},e)}return e===o?(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-amber-300 bg-amber-300/30 text-amber-200",title:`Next unlock \xb7 Need ${Math.max(d-u,0)} WPM boost`,children:e},e):(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-white/10 bg-slate-800 text-slate-500",children:e},e)}),n[2]=h,n[3]=u,n[4]=o,n[5]=d,n[6]=c,n[7]=s):s=n[7],n[8]!==s?(l=(0,t.jsx)("div",{className:"flex w-full flex-wrap justify-center gap-2 rounded-3xl border border-white/5 bg-slate-900/60 p-4",children:s}),n[8]=s,n[9]=l):l=n[9],l}function G(e){let r,s,n,i,c,o,m,d,u,h,p,x,g,f,b,y,w,j,v,N,S,k,M=(0,a.c)(54),{snippetPayload:W,highlightedPrompt:C,codingComplete:A,onNext:$,codingHistory:T,codingLanguage:P,codingIndex:R,codingText:D}=e,E=W.snippet;M[0]!==T?(r=(e=>{if(!Array.isArray(e)||0===e.length)return{total:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,languages:[],wpmStreak:0,accuracyStreak:0,totalMinutes:0};let t=e.reduce((e,t)=>(e.wpm+=t.wpm??0,e.accuracy+=t.accuracy??0,e.duration+=t.durationMs??0,e),{wpm:0,accuracy:0,duration:0}),a=e.length,r=Array.from(new Set(e.map(e=>e.language))).sort();return{total:a,avgWpm:Math.round(t.wpm/a),avgAccuracy:Math.round(t.accuracy/a),bestWpm:Math.max(...e.map(e=>e.wpm??0)),bestAccuracy:Math.max(...e.map(e=>e.accuracy??0)),languages:r,wpmStreak:_(e,"wpm"),accuracyStreak:_(e,"accuracy"),totalMinutes:Math.round(t.duration/6e4*10)/10}})(T),M[0]=T,M[1]=r):r=M[1];let O=r,H=l.length||1;M[2]!==E?.focusCharacters?(s=E?.focusCharacters??[],M[2]=E?.focusCharacters,M[3]=s):s=M[3];let I=s,z=W.activeLanguage??P;M[4]!==z?(n=L(z),M[4]=z,M[5]=n):n=M[5];let G=n;M[6]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-400",children:"Coding mode"}),M[6]=i):i=M[6];let U=E?.concept??"Snippet practice";M[7]!==U?(c=(0,t.jsx)("p",{className:"text-xl font-semibold text-white",children:U}),M[7]=U,M[8]=c):c=M[8];let B=E?.description??"Cycle through structured punctuation and patterns.";M[9]!==B?(o=(0,t.jsx)("p",{className:"text-sm text-slate-400",children:B}),M[9]=B,M[10]=o):o=M[10],M[11]!==c||M[12]!==o?(m=(0,t.jsxs)("div",{children:[i,c,o]}),M[11]=c,M[12]=o,M[13]=m):m=M[13];let K=R%H+1;M[14]!==K?(d=(0,t.jsxs)("p",{className:"font-semibold text-white",children:["Snippet ",K," / ",H]}),M[14]=K,M[15]=d):d=M[15],M[16]!==G?(u=(0,t.jsx)("p",{children:G}),M[16]=G,M[17]=u):u=M[17],M[18]!==I?(h=I.join(" ")||"symbols",M[18]=I,M[19]=h):h=M[19],M[20]!==h?(p=(0,t.jsxs)("p",{children:["Focus: ",h]}),M[20]=h,M[21]=p):p=M[21],M[22]!==d||M[23]!==u||M[24]!==p?(x=(0,t.jsxs)("div",{className:"text-right text-xs text-slate-400",children:[d,u,p]}),M[22]=d,M[23]=u,M[24]=p,M[25]=x):x=M[25],M[26]!==x||M[27]!==m?(g=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[m,x]}),M[26]=x,M[27]=m,M[28]=g):g=M[28],M[29]!==D||M[30]!==C?(f=(0,t.jsx)("div",{className:"mt-6 flex w-full justify-center",children:(0,t.jsx)("div",{className:"w-full max-w-4xl",children:(0,t.jsx)(F,{highlightedPrompt:C,text:D})})}),M[29]=D,M[30]=C,M[31]=f):f=M[31],M[32]===Symbol.for("react.memo_cache_sentinel")?(b=(0,t.jsx)("p",{children:"Enter inserts a new line with matching indentation. Tab inserts the next block of spaces."}),M[32]=b):b=M[32],M[33]!==$?(y=(0,t.jsxs)("div",{className:"mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400",children:[b,(0,t.jsx)("button",{type:"button",onClick:$,className:"rounded-full border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10",children:"Next snippet"})]}),M[33]=$,M[34]=y):y=M[34];let J=R%Math.max(H,1);return M[35]!==J?(w=(0,t.jsx)(V,{currentIndex:J}),M[35]=J,M[36]=w):w=M[36],M[37]!==T?(j=T.at(-1)??null,M[37]=T,M[38]=j):j=M[38],M[39]!==A||M[40]!==O||M[41]!==j?(v=(0,t.jsx)(q,{summary:O,lastEntry:j,complete:A}),M[39]=A,M[40]=O,M[41]=j,M[42]=v):v=M[42],M[43]!==w||M[44]!==v?(N=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]",children:[w,v]}),M[43]=w,M[44]=v,M[45]=N):N=M[45],M[46]!==T?(S=(0,t.jsx)(Y,{history:T}),M[46]=T,M[47]=S):S=M[47],M[48]!==g||M[49]!==f||M[50]!==y||M[51]!==N||M[52]!==S?(k=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[g,f,y,N,S]}),M[48]=g,M[49]=f,M[50]=y,M[51]=N,M[52]=S,M[53]=k):k=M[53],k}function F(e){let r,s,l,n,i,c,o=(0,a.c)(15),{highlightedPrompt:m,text:d}=e;e:{let e;if(!d){let e;o[0]===Symbol.for("react.memo_cache_sentinel")?(e=[[]],o[0]=e):e=o[0],r=e;break e}if(o[1]!==m||o[2]!==d){let a=d.split("\n"),r=0;e=a.map((e,a)=>{let s=m.slice(r,r+e.length);return((r+=e.length)<m.length&&(r+=1),0===e.length)?[(0,t.jsx)("span",{className:"text-slate-700",children:" "},`empty-${a}`)]:s}),o[1]=m,o[2]=d,o[3]=e}else e=o[3];r=e}let u=r;return o[4]!==u?(s=u.map(B),o[4]=u,o[5]=s):s=o[5],o[6]!==s?(l=(0,t.jsx)("pre",{className:"select-none border-r border-white/5 bg-slate-900/60 px-4 py-5 text-right text-xs font-semibold leading-6 text-slate-500",children:s}),o[6]=s,o[7]=l):l=o[7],o[8]!==u?(n=u.map(U),o[8]=u,o[9]=n):n=o[9],o[10]!==n?(i=(0,t.jsx)("pre",{className:"flex-1 overflow-auto px-6 py-5 font-mono text-sm leading-6 text-white",children:n}),o[10]=n,o[11]=i):i=o[11],o[12]!==l||o[13]!==i?(c=(0,t.jsx)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/60",children:(0,t.jsxs)("div",{className:"flex",children:[l,i]})}),o[12]=l,o[13]=i,o[14]=c):c=o[14],c}function U(e,a){return(0,t.jsx)("div",{className:"whitespace-pre-wrap",children:e},`code-${a}`)}function B(e,a){return(0,t.jsx)("span",{className:"block",children:a+1},`line-${a}`)}function q(e){let r,s,l,n,i=(0,a.c)(18),{summary:c,lastEntry:o,complete:m}=e;i[0]!==c.languages?(r=c.languages.length>0?c.languages.map(K).join(", "):"—",i[0]=c.languages,i[1]=r):r=i[1];let d=r;i[2]!==o?(s=o?L(o.language):null,i[2]=o,i[3]=s):s=i[3];let u=s;return i[4]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Session stats"}),i[4]=l):l=i[4],i[5]!==m||i[6]!==d||i[7]!==o||i[8]!==u||i[9]!==c.accuracyStreak||i[10]!==c.avgAccuracy||i[11]!==c.avgWpm||i[12]!==c.bestAccuracy||i[13]!==c.bestWpm||i[14]!==c.total||i[15]!==c.totalMinutes||i[16]!==c.wpmStreak?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[l,0===c.total?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete your first snippet to build coding momentum."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:[(0,t.jsx)(J,{label:"Avg WPM",value:c.avgWpm,detail:`${c.total} snippets`}),(0,t.jsx)(J,{label:"Avg accuracy",value:`${c.avgAccuracy}%`,detail:`${c.totalMinutes} min`}),(0,t.jsx)(J,{label:"Top WPM",value:c.bestWpm,detail:"personal record"}),(0,t.jsx)(J,{label:"Top accuracy",value:`${c.bestAccuracy}%`,detail:"cleanest run"})]}),(0,t.jsxs)("div",{className:"mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-xs text-slate-400",children:[(0,t.jsx)("p",{className:"font-semibold uppercase tracking-[0.2em] text-slate-300",children:"Languages covered"}),(0,t.jsx)("p",{className:"mt-1 text-sm text-white",children:d}),(0,t.jsxs)("p",{className:"mt-2",children:["Improvement streaks: ",(0,t.jsxs)("span",{className:"text-emerald-300",children:[c.wpmStreak," wpm"]})," /"," ",(0,t.jsxs)("span",{className:"text-sky-300",children:[c.accuracyStreak,"% accuracy"]})]}),o?(0,t.jsxs)("p",{className:"mt-1 text-xs text-slate-400",children:["Last: ",u," · ",o.wpm," wpm / ",o.accuracy,"%"]}):null,m?(0,t.jsx)("p",{className:"mt-2 text-emerald-300",children:"Snippet complete — auto-advancing..."}):null]})]})]}),i[5]=m,i[6]=d,i[7]=o,i[8]=u,i[9]=c.accuracyStreak,i[10]=c.avgAccuracy,i[11]=c.avgWpm,i[12]=c.bestAccuracy,i[13]=c.bestWpm,i[14]=c.total,i[15]=c.totalMinutes,i[16]=c.wpmStreak,i[17]=n):n=i[17],n}function K(e){return L(e)}function J(e){let r,s,l,n,i=(0,a.c)(10),{label:c,value:o,detail:m}=e;return i[0]!==c?(r=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=r):r=i[1],i[2]!==o?(s=(0,t.jsx)("p",{className:"text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=s):s=i[3],i[4]!==m?(l=(0,t.jsx)("p",{className:"text-xs text-slate-400",children:m}),i[4]=m,i[5]=l):l=i[5],i[6]!==r||i[7]!==s||i[8]!==l?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3",children:[r,s,l]}),i[6]=r,i[7]=s,i[8]=l,i[9]=n):n=i[9],n}function V(e){let r,s,n,i=(0,a.c)(5),{currentIndex:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Snippet library"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"curriculum"})]}),i[0]=r):r=i[0],i[1]!==c?(s=l.map((e,a)=>(0,t.jsxs)("li",{className:`rounded-2xl border px-4 py-3 ${a===c?"border-emerald-400 bg-emerald-400/10 text-white":"border-white/10 bg-slate-900/70 text-slate-200"}`,children:[(0,t.jsx)("p",{className:"font-semibold",children:e.concept}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.description}),(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:["Focus: ",e.focusCharacters.join(" ")]})]},e.id)),i[1]=c,i[2]=s):s=i[2],i[3]!==s?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[r,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:s})]}),i[3]=s,i[4]=n):n=i[4],n}function Y(e){let r,s,l,n,i=(0,a.c)(8),{history:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent coding sessions"}),i[0]=r):r=i[0],i[1]!==c.length?(s=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[r,(0,t.jsxs)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:[c.length," total"]})]}),i[1]=c.length,i[2]=s):s=i[2],i[3]!==c?(l=0===c.length?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete snippets to build up your coding journal."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:c.slice(-6).reverse().map(Q)}),i[3]=c,i[4]=l):l=i[4],i[5]!==s||i[6]!==l?(n=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[s,l]}),i[5]=s,i[6]=l,i[7]=n):n=i[7],n}function Q(e){let a=L(e.language);return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.concept}),(0,t.jsxs)("p",{className:"text-xs text-slate-400",children:[a," · ",new Date(e.timestamp).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:u(e.durationMs)})]})]},e.id)}function X(e){let s,l,n,i,c,o,m,d,u,h,p,x,g,f,b,y,w,j,v,N,S,k,L,W,C,A,$,T,P,R,D,E,O,H,I,z,G,F,U,B,q,K,J,V,Y=(0,a.c)(150),{history:Q,unlockedLetters:X,nextLetter:ec,successCounter:eo,lessonsPerUnlock:em,targetWpm:ed}=e,[eu,ep]=(0,r.useState)("all"),[eg,ef]=(0,r.useState)(3),[eb,ey]=(0,r.useState)(!0);Y[0]!==Q?(s=Q.map(es),Y[0]=Q,Y[1]=s):s=Y[1];let ew=s;if(Y[2]!==ew||Y[3]!==X){let e;e=new Map,X.forEach(t=>{e.set(t.toLowerCase(),0)}),ew.forEach(t=>{new Set((t.text??"").toLowerCase().replace(/[^a-z]/g,"").split("")).forEach(t=>{t&&e.set(t,(e.get(t)??0)+1)})}),l=Array.from(e.entries()).map(([e,t])=>({letter:e,count:t})).sort((e,t)=>e.letter>t.letter?1:-1),Y[2]=ew,Y[3]=X,Y[4]=l}else l=Y[4];let ej=l;Y[5]!==ej||Y[6]!==eu?(n=()=>{"all"===eu||ej.some(e=>e.letter===eu)||ep("all")},i=[ej,eu],Y[5]=ej,Y[6]=eu,Y[7]=n,Y[8]=i):(n=Y[7],i=Y[8]),(0,r.useEffect)(n,i);e:{let e;if("all"===eu){c=ew;break e}if(Y[9]!==ew||Y[10]!==eu){let t=eu.toLowerCase();e=ew.filter(e=>{let a=(e.letters??"").toLowerCase(),r=(e.text??"").toLowerCase();return a.includes(t)||r.includes(t)}),Y[9]=ew,Y[10]=eu,Y[11]=e}else e=Y[11];c=e}let ev=c;t:{let e,t,a,r,s,l,n,i,c,m,d;if(0===ew.length){let e;Y[12]===Symbol.for("react.memo_cache_sentinel")?(e={totalLessons:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,successRate:0,lessonsAboveTarget:0,totalWords:0,totalMinutes:0,wpmStreak:0,accuracyStreak:0,lastSevenAvgWpm:0},Y[12]=e):e=Y[12],o=e;break t}Y[13]!==ew?(e=ew.reduce(er,{wpm:0,accuracy:0,words:0,duration:0}),Y[13]=ew,Y[14]=e):e=Y[14];let u=e,h=ew.length;Y[15]!==ew?(t=Math.max(...ew.map(ea)),Y[15]=ew,Y[16]=t):t=Y[16];let p=t;Y[17]!==ew?(a=Math.max(...ew.map(et)),Y[17]=ew,Y[18]=a):a=Y[18];let x=a;if(Y[19]!==ew||Y[20]!==ed){let e;Y[22]!==ed?(e=e=>e.wpm>=ed,Y[22]=ed,Y[23]=e):e=Y[23],r=ew.filter(e),Y[19]=ew,Y[20]=ed,Y[21]=r}else r=Y[21];let g=r.length;if(Y[24]!==ew){let e=ew.slice(-7);s=e.length>0?Math.round(e.reduce(ee,0)/e.length):0,Y[24]=ew,Y[25]=s}else s=Y[25];let f=s;Y[26]!==h||Y[27]!==u.wpm?(l=Math.round(u.wpm/h),Y[26]=h,Y[27]=u.wpm,Y[28]=l):l=Y[28],Y[29]!==h||Y[30]!==u.accuracy?(n=Math.round(u.accuracy/h),Y[29]=h,Y[30]=u.accuracy,Y[31]=n):n=Y[31],Y[32]!==g||Y[33]!==h?(i=Math.round(g/h*100),Y[32]=g,Y[33]=h,Y[34]=i):i=Y[34];let b=u.words,y=Math.round(u.duration/6e4*10)/10;Y[35]!==ew?(c=_(ew,"wpm"),Y[35]=ew,Y[36]=c):c=Y[36],Y[37]!==ew?(m=_(ew,"accuracy"),Y[37]=ew,Y[38]=m):m=Y[38],Y[39]!==x||Y[40]!==p||Y[41]!==f||Y[42]!==g||Y[43]!==l||Y[44]!==n||Y[45]!==i||Y[46]!==y||Y[47]!==c||Y[48]!==m||Y[49]!==h||Y[50]!==u.words?(d={totalLessons:h,avgWpm:l,avgAccuracy:n,bestWpm:p,bestAccuracy:x,successRate:i,lessonsAboveTarget:g,totalWords:b,totalMinutes:y,wpmStreak:c,accuracyStreak:m,lastSevenAvgWpm:f},Y[39]=x,Y[40]=p,Y[41]=f,Y[42]=g,Y[43]=l,Y[44]=n,Y[45]=i,Y[46]=y,Y[47]=c,Y[48]=m,Y[49]=h,Y[50]=u.words,Y[51]=d):d=Y[51],o=d}let eN=o;if(Y[52]!==ew)m=M.map(e=>({...e,count:ew.filter(t=>t.accuracy>=e.min&&t.accuracy<e.max).length})),Y[52]=ew,Y[53]=m;else m=Y[53];let eS=m,ek=1===eg?"Off":`${eg} lessons`;Y[54]===Symbol.for("react.memo_cache_sentinel")?(d=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Letters"}),Y[54]=d):d=Y[54],Y[55]!==X?(u=X.join(", "),Y[55]=X,Y[56]=u):u=Y[56],Y[57]!==u?(h=(0,t.jsxs)("div",{children:[d,(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:u})]}),Y[57]=u,Y[58]=h):h=Y[58],Y[59]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)("p",{className:"text-slate-400",children:"Next unlock"}),Y[59]=p):p=Y[59];let e_=ec??"All characters unlocked";Y[60]!==e_?(x=(0,t.jsx)("p",{className:"text-white font-semibold",children:e_}),Y[60]=e_,Y[61]=x):x=Y[61],Y[62]!==em||Y[63]!==ec||Y[64]!==eo?(g=ec?(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:[Math.max(em-eo,0)," high-WPM lessons to go"]}):null,Y[62]=em,Y[63]=ec,Y[64]=eo,Y[65]=g):g=Y[65],Y[66]!==x||Y[67]!==g?(f=(0,t.jsxs)("div",{className:"text-right text-sm",children:[p,x,g]}),Y[66]=x,Y[67]=g,Y[68]=f):f=Y[68],Y[69]!==h||Y[70]!==f?(b=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[h,f]}),Y[69]=h,Y[70]=f,Y[71]=b):b=Y[71],Y[72]!==eN.totalLessons?(y=(0,t.jsx)(el,{label:"Lessons",value:eN.totalLessons,hint:"lifetime"}),Y[72]=eN.totalLessons,Y[73]=y):y=Y[73],Y[74]!==ed?(w=(0,t.jsx)(el,{label:"Target WPM",value:ed,hint:"goal"}),Y[74]=ed,Y[75]=w):w=Y[75];let eM=`${eN.successRate}%`;Y[76]!==eM?(j=(0,t.jsx)(el,{label:"Success Rate",value:eM,hint:"≥ target"}),Y[76]=eM,Y[77]=j):j=Y[77];let eL=eN.lastSevenAvgWpm?`last 7: ${eN.lastSevenAvgWpm}`:"last 7: —";Y[78]!==eN.avgWpm||Y[79]!==eL?(v=(0,t.jsx)(el,{label:"Avg WPM",value:eN.avgWpm,hint:eL}),Y[78]=eN.avgWpm,Y[79]=eL,Y[80]=v):v=Y[80];let eW=`${eN.avgAccuracy}%`,eC=`${eN.totalWords} words`;Y[81]!==eW||Y[82]!==eC?(N=(0,t.jsx)(el,{label:"Avg Accuracy",value:eW,hint:eC}),Y[81]=eW,Y[82]=eC,Y[83]=N):N=Y[83],Y[84]!==eN.bestWpm?(S=(0,t.jsx)(el,{label:"Top WPM",value:eN.bestWpm,hint:"fastest lesson"}),Y[84]=eN.bestWpm,Y[85]=S):S=Y[85];let eA=`${eN.bestAccuracy}%`;Y[86]!==eA?(k=(0,t.jsx)(el,{label:"Top Accuracy",value:eA,hint:"cleanest lesson"}),Y[86]=eA,Y[87]=k):k=Y[87];let e$=`${eN.wpmStreak} / ${eN.accuracyStreak}`;Y[88]!==e$?(L=(0,t.jsx)(el,{label:"Improvement streaks",value:e$,hint:"WPM / accuracy"}),Y[88]=e$,Y[89]=L):L=Y[89],Y[90]!==y||Y[91]!==w||Y[92]!==j||Y[93]!==v||Y[94]!==N||Y[95]!==S||Y[96]!==k||Y[97]!==L?(W=(0,t.jsxs)("div",{className:"mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[y,w,j,v,N,S,k,L]}),Y[90]=y,Y[91]=w,Y[92]=j,Y[93]=v,Y[94]=N,Y[95]=S,Y[96]=k,Y[97]=L,Y[98]=W):W=Y[98],Y[99]===Symbol.for("react.memo_cache_sentinel")?(C=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Letter focus"}),Y[99]=C):C=Y[99],Y[100]===Symbol.for("react.memo_cache_sentinel")?(A=e=>ep(e),Y[100]=A):A=Y[100],Y[101]!==ej||Y[102]!==eu?($=(0,t.jsxs)("div",{className:"min-w-[220px] flex-1",children:[C,(0,t.jsx)(en,{letters:ej,selectedLetter:eu,onSelect:A})]}),Y[101]=ej,Y[102]=eu,Y[103]=$):$=Y[103],Y[104]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsx)("span",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Smoothing"}),Y[104]=T):T=Y[104];let eT=0===ew.length;return Y[105]===Symbol.for("react.memo_cache_sentinel")?(P=e=>ef(Number(e.target.value)),Y[105]=P):P=Y[105],Y[106]!==eg||Y[107]!==eT?(R=(0,t.jsx)("input",{type:"range",min:1,max:9,step:2,value:eg,disabled:eT,onChange:P,className:"accent-emerald-400"}),Y[106]=eg,Y[107]=eT,Y[108]=R):R=Y[108],Y[109]!==ek?(D=(0,t.jsx)("span",{className:"text-xs text-slate-400",children:ek}),Y[109]=ek,Y[110]=D):D=Y[110],Y[111]!==R||Y[112]!==D?(E=(0,t.jsxs)("label",{className:"flex flex-col gap-2 sm:w-48",children:[T,R,D]}),Y[111]=R,Y[112]=D,Y[113]=E):E=Y[113],Y[114]===Symbol.for("react.memo_cache_sentinel")?(O=e=>ey(e.target.checked),Y[114]=O):O=Y[114],Y[115]!==eb?(H=(0,t.jsxs)("label",{className:"flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:[(0,t.jsx)("input",{type:"checkbox",checked:eb,onChange:O,className:"h-4 w-4 rounded border border-slate-600 bg-slate-900 text-emerald-400 accent-emerald-400"}),"Trendline"]}),Y[115]=eb,Y[116]=H):H=Y[116],Y[117]!==E||Y[118]!==H?(I=(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-4 text-sm text-slate-200 sm:flex-row sm:items-end sm:justify-end",children:[E,H]}),Y[117]=E,Y[118]=H,Y[119]=I):I=Y[119],Y[120]!==$||Y[121]!==I?(z=(0,t.jsxs)("div",{className:"flex flex-wrap gap-6",children:[$,I]}),Y[120]=$,Y[121]=I,Y[122]=z):z=Y[122],Y[123]!==ew.length||Y[124]!==ev||Y[125]!==eu||Y[126]!==eb||Y[127]!==eg||Y[128]!==ed?(G=(0,t.jsx)(ei,{lessons:ev,smoothingWindow:eg,showTrendline:eb,totalLessons:ew.length,targetWpm:ed,selectedLetter:eu}),Y[123]=ew.length,Y[124]=ev,Y[125]=eu,Y[126]=eb,Y[127]=eg,Y[128]=ed,Y[129]=G):G=Y[129],Y[130]!==z||Y[131]!==G?(F=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[z,G]}),Y[130]=z,Y[131]=G,Y[132]=F):F=Y[132],Y[133]!==eS||Y[134]!==eN.totalLessons?(U=(0,t.jsx)(eh,{buckets:eS,totalLessons:eN.totalLessons}),Y[133]=eS,Y[134]=eN.totalLessons,Y[135]=U):U=Y[135],Y[136]!==eN?(B=(0,t.jsx)(ex,{summary:eN}),Y[136]=eN,Y[137]=B):B=Y[137],Y[138]!==U||Y[139]!==B?(q=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-2",children:[U,B]}),Y[138]=U,Y[139]=B,Y[140]=q):q=Y[140],Y[141]===Symbol.for("react.memo_cache_sentinel")?(K=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent lessons"}),Y[141]=K):K=Y[141],Y[142]!==Q?(J=(0,t.jsxs)("div",{className:"mt-8",children:[K,0===Q.length?(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete a lesson to see stats."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:Q.slice(-6).reverse().map(Z)})]}),Y[142]=Q,Y[143]=J):J=Y[143],Y[144]!==b||Y[145]!==W||Y[146]!==F||Y[147]!==q||Y[148]!==J?(V=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[b,W,F,q,J]}),Y[144]=b,Y[145]=W,Y[146]=F,Y[147]=q,Y[148]=J,Y[149]=V):V=Y[149],V}function Z(e){return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.text}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:new Date(e.timestamp).toLocaleString()})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:u(e.durationMs)}),(0,t.jsxs)("p",{className:"text-xs text-rose-400",children:[e.mistakes??0," mistakes"]})]})]},e.id)}function ee(e,t){return e+t.wpm}function et(e){return e.accuracy??0}function ea(e){return e.wpm??0}function er(e,t){var a;return e.wpm=e.wpm+(t.wpm??0),e.accuracy=e.accuracy+(t.accuracy??0),e.words=e.words+((a=t.text)?a.trim().split(/\s+/).filter(Boolean).length:0),e.duration=e.duration+(t.durationMs??0),e}function es(e,t){return{...e,lessonNumber:t+1}}function el(e){let r,s,l,n,i=(0,a.c)(10),{label:c,value:o,hint:m}=e;return i[0]!==c?(r=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=r):r=i[1],i[2]!==o?(s=(0,t.jsx)("p",{className:"mt-2 text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=s):s=i[3],i[4]!==m?(l=m?(0,t.jsx)("p",{className:"text-xs text-slate-500",children:m}):null,i[4]=m,i[5]=l):l=i[5],i[6]!==r||i[7]!==s||i[8]!==l?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-5 text-center",children:[r,s,l]}),i[6]=r,i[7]=s,i[8]=l,i[9]=n):n=i[9],n}function en(e){let r,s,l,n,i=(0,a.c)(16),{letters:c,selectedLetter:o,onSelect:m}=e;if(!c.length){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:"Complete a lesson to unlock insights."}),i[0]=e):e=i[0],e}i[1]!==m?(r=()=>m("all"),i[1]=m,i[2]=r):r=i[2];let d=`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${"all"===o?"bg-emerald-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;if(i[3]!==r||i[4]!==d?(s=(0,t.jsx)("button",{type:"button",onClick:r,className:d,children:"All"}),i[3]=r,i[4]=d,i[5]=s):s=i[5],i[6]!==c||i[7]!==m||i[8]!==o){let e;i[10]!==m||i[11]!==o?(e=e=>(0,t.jsxs)("button",{type:"button",onClick:()=>m(e.letter),className:`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${o===e.letter?"bg-sky-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:[e.letter,(0,t.jsx)("span",{className:"ml-1 text-[10px] text-slate-400",children:e.count})]},e.letter),i[10]=m,i[11]=o,i[12]=e):e=i[12],l=c.map(e),i[6]=c,i[7]=m,i[8]=o,i[9]=l}else l=i[9];return i[13]!==s||i[14]!==l?(n=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-2",children:[s,l]}),i[13]=s,i[14]=l,i[15]=n):n=i[15],n}function ei(e){let r,s,l,n,i,c,o,m,d,u,h,p,x,g,f,b,y,w,j,v,N,S,_,M,L,W,C,A,$,T,P,R,D,E,O=(0,a.c)(97),{lessons:H,smoothingWindow:I,showTrendline:z,totalLessons:G,targetWpm:F,selectedLetter:U}=e;if(0===G){let e;return O[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-6 text-sm text-slate-400",children:"Complete a lesson to unlock progress visualizations."}),O[0]=e):e=O[0],e}if(!H.length){let e,a;return O[1]!==U?(e=U.toUpperCase(),O[1]=U,O[2]=e):e=O[2],O[3]!==e?(a=(0,t.jsxs)("p",{className:"mt-6 text-sm text-slate-400",children:['No lessons yet for the letter "',e,'". Keep practicing to fill this chart.']}),O[3]=e,O[4]=a):a=O[4],a}if(O[5]!==H||O[6]!==z||O[7]!==I||O[8]!==F||O[9]!==G){let e,t,a,m=H.map(eu),d=H.map(ed),u=k(m,I),h=k(d,I),p=H.map((e,t)=>({lessonNumber:e.lessonNumber,wpm:u[t]??e.wpm,accuracy:h[t]??e.accuracy,rawWpm:e.wpm,rawAccuracy:e.accuracy})),x=Math.max(G,1);i=Math.max(F+15,...p.map(em),40),O[17]!==x?(e=e=>1===x?450:60+(e-1)/(x-1)*780,O[17]=x,O[18]=e):e=O[18],n=e,O[19]!==i?(t=e=>280-Math.max(0,e)/(i||1)*240,O[19]=i,O[20]=t):t=O[20],c=t,o=eo,O[21]!==n?(a=(e,t,a)=>0===e.length?"":e.map((e,r)=>{let s=n(e.lessonNumber).toFixed(2),l=a(e[t]).toFixed(2);return`${0===r?"M":"L"}${s},${l}`}).join(" "),O[21]=n,O[22]=a):a=O[22];let g=a;l=g(p,"wpm",c),r=g(p,"accuracy",o);let f=p.map(ec);s=z?(e=>{if(!Array.isArray(e)||e.length<2)return null;let t=0,a=0,r=0,s=0;e.forEach(({x:e,y:l})=>{t+=e,a+=l,r+=e*l,s+=e*e});let l=e.length,n=l*s-t*t;if(0===n)return null;let i=(l*r-t*a)/n,c=(a-i*t)/l;return{slope:i,intercept:c}})(f):null,O[5]=H,O[6]=z,O[7]=I,O[8]=F,O[9]=G,O[10]=r,O[11]=s,O[12]=l,O[13]=n,O[14]=i,O[15]=c,O[16]=o}else r=O[10],s=O[11],l=O[12],n=O[13],i=O[14],c=O[15],o=O[16];let B=s,q=H[0]?.lessonNumber??1,K=H.at(-1)?.lessonNumber??q;O[23]!==B||O[24]!==K||O[25]!==q||O[26]!==n||O[27]!==c?(m=B?{x1:n(q),y1:c(B.slope*q+B.intercept),x2:n(K),y2:c(B.slope*K+B.intercept)}:null,O[23]=B,O[24]=K,O[25]=q,O[26]=n,O[27]=c,O[28]=m):m=O[28];let J=m;if(O[29]===Symbol.for("react.memo_cache_sentinel")?(d=[0,.25,.5,.75,1],O[29]=d):d=O[29],O[30]!==i||O[31]!==c||O[32]!==o){let e=d.map(e=>Math.round(i*e));g="mt-6",f="h-80 w-full",b="0 0 900 320",y="img",w="Typing performance chart",O[44]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"wpmGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgb(16,185,129)",stopOpacity:"0.4"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgb(16,185,129)",stopOpacity:"0.05"})]})}),v=(0,t.jsx)("line",{x1:60,y1:280,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.4)",strokeWidth:"1"}),u=(0,t.jsx)("line",{x1:60,y1:40,x2:60,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),h=(0,t.jsx)("line",{x1:840,y1:40,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),O[44]=u,O[45]=h,O[46]=j,O[47]=v):(u=O[44],h=O[45],j=O[46],v=O[47]),p=e.map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:54,x2:60,y1:c(e),y2:c(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsx)("text",{x:52,y:c(e)+4,textAnchor:"end",fontSize:"10",fill:"rgba(148,163,184,0.8)",children:e})]},`left-${e}`)),x=[0,25,50,75,100].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:840,x2:846,y1:o(e),y2:o(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsxs)("text",{x:848,y:o(e)+4,fontSize:"10",fill:"rgba(125,211,252,0.9)",children:[e,"%"]})]},`right-${e}`)),O[30]=i,O[31]=c,O[32]=o,O[33]=u,O[34]=h,O[35]=p,O[36]=x,O[37]=g,O[38]=f,O[39]=b,O[40]=y,O[41]=w,O[42]=j,O[43]=v}else u=O[33],h=O[34],p=O[35],x=O[36],g=O[37],f=O[38],b=O[39],y=O[40],w=O[41],j=O[42],v=O[43];if(O[48]===Symbol.for("react.memo_cache_sentinel")?(N=(0,t.jsx)("text",{x:60,y:30,fontSize:"11",fill:"rgba(148,163,184,0.8)",children:"WPM"}),S=(0,t.jsx)("text",{x:840,y:30,fontSize:"11",textAnchor:"end",fill:"rgba(125,211,252,0.9)",children:"Accuracy"}),O[48]=N,O[49]=S):(N=O[48],S=O[49]),O[50]!==F||O[51]!==c?(_=F?(0,t.jsx)("line",{x1:60,x2:840,y1:c(F),y2:c(F),stroke:"rgba(248,113,113,0.4)",strokeDasharray:"6 4"}):null,O[50]=F,O[51]=c,O[52]=_):_=O[52],O[53]!==r?(M=r?(0,t.jsx)("path",{d:r,fill:"none",stroke:"rgba(56,189,248,0.9)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round"}):null,O[53]=r,O[54]=M):M=O[54],O[55]!==l?(L=l?(0,t.jsx)("path",{d:l,fill:"none",stroke:"url(#wpmGradient)",strokeWidth:"3",strokeLinejoin:"round",strokeLinecap:"round"}):null,O[55]=l,O[56]=L):L=O[56],O[57]!==J?(W=J?(0,t.jsx)("line",{x1:J.x1,y1:J.y1,x2:J.x2,y2:J.y2,stroke:"rgba(248,250,252,0.5)",strokeWidth:"2",strokeDasharray:"4 4"}):null,O[57]=J,O[58]=W):W=O[58],O[59]!==H||O[60]!==n||O[61]!==c){let e;O[63]!==n||O[64]!==c?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:c(e.wpm),r:4,fill:"rgb(16,185,129)",stroke:"rgba(15,118,110,0.4)",strokeWidth:"1",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.wpm," wpm"]})},`wpm-${e.id??e.lessonNumber}`),O[63]=n,O[64]=c,O[65]=e):e=O[65],C=H.map(e),O[59]=H,O[60]=n,O[61]=c,O[62]=C}else C=O[62];if(O[66]!==H||O[67]!==n||O[68]!==o){let e;O[70]!==n||O[71]!==o?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:o(e.accuracy),r:3,fill:"rgb(56,189,248)",stroke:"rgba(14,165,233,0.2)",strokeWidth:"1",opacity:"0.8",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.accuracy,"% accuracy"]})},`accuracy-${e.id??e.lessonNumber}`),O[70]=n,O[71]=o,O[72]=e):e=O[72],A=H.map(e),O[66]=H,O[67]=n,O[68]=o,O[69]=A}else A=O[69];return O[73]!==u||O[74]!==h||O[75]!==p||O[76]!==x||O[77]!==_||O[78]!==M||O[79]!==L||O[80]!==W||O[81]!==C||O[82]!==A||O[83]!==f||O[84]!==b||O[85]!==y||O[86]!==w||O[87]!==j||O[88]!==v?($=(0,t.jsxs)("svg",{className:f,viewBox:b,role:y,"aria-label":w,children:[j,v,u,h,p,x,N,S,_,M,L,W,C,A]}),O[73]=u,O[74]=h,O[75]=p,O[76]=x,O[77]=_,O[78]=M,O[79]=L,O[80]=W,O[81]=C,O[82]=A,O[83]=f,O[84]=b,O[85]=y,O[86]=w,O[87]=j,O[88]=v,O[89]=$):$=O[89],O[90]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-emerald-400"}),"WPM (smoothed)"]}),O[90]=T):T=O[90],O[91]===Symbol.for("react.memo_cache_sentinel")?(P=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-sky-400"}),"Accuracy (smoothed)"]}),O[91]=P):P=O[91],O[92]===Symbol.for("react.memo_cache_sentinel")?(R=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full border border-slate-200 border-dashed"}),"Trendline"]}),O[92]=R):R=O[92],O[93]===Symbol.for("react.memo_cache_sentinel")?(D=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-4 text-xs text-slate-400",children:[T,P,R,(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-rose-400/50"}),"Target WPM"]})]}),O[93]=D):D=O[93],O[94]!==g||O[95]!==$?(E=(0,t.jsxs)("div",{className:g,children:[$,D]}),O[94]=g,O[95]=$,O[96]=E):E=O[96],E}function ec(e){return{x:e.lessonNumber,y:e.rawWpm}}function eo(e){return 280-Math.max(0,Math.min(100,e))/100*240}function em(e){return e.wpm}function ed(e){return e.accuracy}function eu(e){return e.wpm}function eh(e){let r,s,l,n,i=(0,a.c)(11),{buckets:c,totalLessons:o}=e;if(!o){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete lessons to populate this chart."})]}),i[0]=e):e=i[0],e}i[1]!==c?(r=Math.max(...c.map(ep),1),i[1]=c,i[2]=r):r=i[2];let m=r;if(i[3]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"lessons"})]}),i[3]=s):s=i[3],i[4]!==c||i[5]!==m){let e;i[7]!==m?(e=e=>(0,t.jsxs)("div",{className:"flex-1 text-center",children:[(0,t.jsx)("div",{className:"relative h-32 overflow-hidden rounded-2xl bg-slate-900/60",children:(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 rounded-2xl bg-sky-400/70",style:{height:`${e.count/m*100||0}%`}})}),(0,t.jsx)("p",{className:"mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:e.count})]},e.label),i[7]=m,i[8]=e):e=i[8],l=c.map(e),i[4]=c,i[5]=m,i[6]=l}else l=i[6];return i[9]!==l?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[s,(0,t.jsx)("div",{className:"mt-6 flex gap-3",children:l})]}),i[9]=l,i[10]=n):n=i[10],n}function ep(e){return e.count}function ex(e){let r,s,l,n,i,c,o,m,d=(0,a.c)(20),{summary:u}=e,h=u.totalLessons?`${u.successRate}% of sessions`:"—";d[0]!==u.lessonsAboveTarget||d[1]!==h?(r={label:"Lessons ≥ target",value:u.lessonsAboveTarget,detail:h},d[0]=u.lessonsAboveTarget,d[1]=h,d[2]=r):r=d[2],d[3]!==u.totalMinutes?(s={label:"Typing minutes",value:u.totalMinutes,detail:"lifetime focus time"},d[3]=u.totalMinutes,d[4]=s):s=d[4],d[5]!==u.totalWords?(l={label:"Words practiced",value:u.totalWords,detail:"approximate"},d[5]=u.totalWords,d[6]=l):l=d[6];let p=`${u.wpmStreak} lessons`;d[7]!==p?(n={label:"WPM streak",value:p,detail:"non-stop improvement"},d[7]=p,d[8]=n):n=d[8];let x=`${u.accuracyStreak} lessons`;d[9]!==x?(i={label:"Accuracy streak",value:x,detail:"steady precision"},d[9]=x,d[10]=i):i=d[10],d[11]!==r||d[12]!==s||d[13]!==l||d[14]!==n||d[15]!==i?(c=[r,s,l,n,i],d[11]=r,d[12]=s,d[13]=l,d[14]=n,d[15]=i,d[16]=c):c=d[16];let g=c;return d[17]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Highlights"}),d[17]=o):o=d[17],d[18]!==g?(m=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[o,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:g.map(eg)})]}),d[18]=g,d[19]=m):m=d[19],m}function eg(e){return(0,t.jsxs)("li",{className:"flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.2em] text-slate-500",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.detail})]}),(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:e.value})]},e.label)}function ef(e){let r,l,n,i,c,o,m,d,u,h,p,x,g,f,b=(0,a.c)(34),{targetWpm:y,setTargetWpm:w,lessonsPerUnlock:j,setLessonsPerUnlock:v,unlockedLetters:N,nextLetter:S,codingLanguage:k,setCodingLanguage:_}=e;b[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Configuration"}),b[0]=r):r=b[0],b[1]!==w?(l=e=>w(Number(e.target.value)||35),b[1]=w,b[2]=l):l=b[2],b[3]!==l||b[4]!==y?(n=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Target WPM",(0,t.jsx)("input",{type:"number",min:5,max:200,value:y,onChange:l,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),b[3]=l,b[4]=y,b[5]=n):n=b[5],b[6]!==v?(i=e=>v(Math.max(1,Number(e.target.value)||5)),b[6]=v,b[7]=i):i=b[7],b[8]!==j||b[9]!==i?(c=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Lessons per unlock",(0,t.jsx)("input",{type:"number",min:1,max:20,value:j,onChange:i,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),b[8]=j,b[9]=i,b[10]=c):c=b[10],b[11]!==_?(o=e=>_(e.target.value),b[11]=_,b[12]=o):o=b[12],b[13]===Symbol.for("react.memo_cache_sentinel")?(m=s.map(eb),b[13]=m):m=b[13],b[14]!==k||b[15]!==o?(d=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Coding language",(0,t.jsx)("select",{value:k,onChange:o,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60",children:m})]}),b[14]=k,b[15]=o,b[16]=d):d=b[16],b[17]!==n||b[18]!==c||b[19]!==d?(u=(0,t.jsxs)("div",{className:"mt-6 grid gap-6 lg:grid-cols-3 sm:grid-cols-2",children:[n,c,d]}),b[17]=n,b[18]=c,b[19]=d,b[20]=u):u=b[20],b[21]!==N?(h=N.join(", "),b[21]=N,b[22]=h):h=b[22],b[23]!==h?(p=(0,t.jsxs)("p",{children:["Unlocked letters: ",h]}),b[23]=h,b[24]=p):p=b[24];let M=S??"complete",L=S?"maintain target WPM to progress":"all done";return b[25]!==M||b[26]!==L?(x=(0,t.jsxs)("p",{children:["Next unlock: ",M," (",L,")"]}),b[25]=M,b[26]=L,b[27]=x):x=b[27],b[28]!==p||b[29]!==x?(g=(0,t.jsxs)("div",{className:"mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300",children:[p,x]}),b[28]=p,b[29]=x,b[30]=g):g=b[30],b[31]!==g||b[32]!==u?(f=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[r,u,g]}),b[31]=g,b[32]=u,b[33]=f):f=b[33],f}function eb(e){return(0,t.jsx)("option",{value:e.id,children:e.label},e.id)}e.s(["default",()=>C],81694)}]);