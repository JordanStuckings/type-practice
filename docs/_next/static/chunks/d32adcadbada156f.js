(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67458,(e,t,a)=>{"use strict";var s=e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;a.c=function(e){return s.H.useMemoCache(e)}},932,(e,t,a)=>{"use strict";t.exports=e.r(67458)},81694,e=>{"use strict";e.i(47167);var t=e.i(43476),a=e.i(932),s=e.i(71645);let l=[{id:"javascript",label:"JavaScript"},{id:"python",label:"Python"},{id:"java",label:"Java"},{id:"csharp",label:"C#"},{id:"go",label:"Go"},{id:"ruby",label:"Ruby"}],r=[{id:"function-scaffold",concept:"Function scaffolding",description:"Practice parentheses, braces, nullish checks, and template literals.",focusCharacters:["(",")","{","}","?",":","=","`"],languages:{javascript:String.raw`function greet(userName) {
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
dispatch(handlers, "noop")`}}],n=["i","a","l","r"],i=Array.from(new Set([...n,..."abcdefghijklmnopqrstuvwxyz".split("")])),c=["air","aria","lair","liar","rail","briar","racial","radial","real","flare","argil","hilaria","jail","kalari","alarm","linear","clarion","plain","qibla","qi","rails","trail","aural","rival","wail","axial","relay","lazily","dragon","forest","mural","artisan","station","rotation","delivery","formation","vital","gaily","brawler","sailor","pavilion","citadel","journal","keyboard","galaxy","zephyr"],o="typing-progress-v1",d=l[0]?.id??"javascript",u=[{id:"lesson",label:"Lesson"},{id:"coding",label:"Coding"},{id:"profile",label:"Profile"},{id:"settings",label:"Settings"}],m=e=>{if(!e)return"00:00";let t=Math.max(0,Math.floor(e/1e3)),a=String(Math.floor(t/60)).padStart(2,"0"),s=String(t%60).padStart(2,"0");return`${a}:${s}`},h=e=>{if(!e)return null;let t=e.split("/")[0].trim();if(!t)return null;let a=t.toLowerCase();return!/^[a-z]+$/.test(a)||a.length<2||a.length>10?null:a},p=(e,a,s)=>Array.from(e).map((e,l)=>{let r=a[l],n=" "===e?" ":e,i=!!s[l];if(r){let a=r===e;return i?(0,t.jsx)("span",{className:"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:a?"text-emerald-400":"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${l}`)}return l===a.length?i?(0,t.jsx)("span",{className:"rounded border border-rose-500 bg-rose-500/20 text-rose-200",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:"rounded bg-slate-700/70 text-white",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:"text-slate-500",children:n},`${e}-${l}`)}),x=(e,t)=>{if(!Array.isArray(e)||0===e.length)return[];let a=Math.max(1,Math.floor(t));if(1===a)return[...e];let s=Math.floor(a/2);return e.map((t,a)=>{let l=Math.max(0,a-s),r=Math.min(e.length-1,a+s),n=e.slice(l,r+1);return Number((n.reduce((e,t)=>e+t,0)/n.length).toFixed(2))})},g=(e,t)=>{if(!Array.isArray(e)||0===e.length)return 0;let a=1,s=1;for(let l=1;l<e.length;l+=1)e[l][t]>=e[l-1][t]?s+=1:s=1,s>a&&(a=s);return a},f=[{label:"<80",min:0,max:80},{label:"80-85",min:80,max:85},{label:"85-90",min:85,max:90},{label:"90-95",min:90,max:95},{label:"95+",min:95,max:101}],b=e=>l.find(t=>t.id===e)?.label??e,y=(e,t)=>{if(!e)return"";let a=t,s="";for(;a<e.length;){let t=e[a];if(" "===t||"	"===t)s+=t,a+=1;else break}return s};function w(){let[e,a]=(0,s.useState)("lesson"),[m,x]=(0,s.useState)(0),[g,f]=(0,s.useState)(""),[b,w]=(0,s.useState)(null),[v,M]=(0,s.useState)(!1),[C,_]=(0,s.useState)([]),[L,W]=(0,s.useState)(35),[A,$]=(0,s.useState)(5),[T,R]=(0,s.useState)(n.length),[D,E]=(0,s.useState)(0),[H,O]=(0,s.useState)({}),[I,z]=(0,s.useState)([]),[U,B]=(0,s.useState)(0),[F,G]=(0,s.useState)(""),[K,q]=(0,s.useState)(null),[J,V]=(0,s.useState)(!1),[Y,Q]=(0,s.useState)([]),[X,Z]=(0,s.useState)({}),[et,ea]=(0,s.useState)(d),es=(0,s.useRef)(null),el=(0,s.useRef)(null),er=(0,s.useRef)(null),en=(0,s.useRef)(null),ei=(0,s.useRef)(null),ec=(0,s.useMemo)(()=>i.slice(0,T),[T]),eo=T<i.length?i[T]:null,ed=(0,s.useMemo)(()=>((e,t,a)=>{if(!e.length)return[];let s=(a.length>0?a:c).filter(t=>{let a;return a=new Set(e),Array.from(t).every(e=>a.has(e))});if(0===s.length)return e.map(e=>`${e}${e}${e}`);let l=e.at(-1),r=l?s.filter(e=>e.includes(l)):s;0===r.length&&(r=l?[`${l}${e[0]??l}${l}`]:s);let n=[],i=t%r.length;for(let e=0;e<18;e+=1)n.push(r[(i+e)%r.length]);return n})(ec,m,I),[I,m,ec]),eu=(0,s.useMemo)(()=>ed.join(" "),[ed]),em=(0,s.useMemo)(()=>p(eu,g,H),[eu,H,g]),eh=(0,s.useMemo)(()=>((e,t)=>{let a=(e=>{if(!r.length)return null;let t=e%r.length;return r[t]})(e);if(!a)return{snippet:null,text:"",languages:[]};let s=l.find(e=>a.languages[e.id])?.id??l[0]?.id,n=a.languages[t]?t:s;return{snippet:a,text:a.languages[n]??"",activeLanguage:n}})(U,et),[U,et]),ep=eh.text,ex=(0,s.useMemo)(()=>p(ep,F,X),[F,X,ep]);(0,s.useEffect)(()=>{let e=!1;return(async()=>{try{let t=await fetch("/type-practice/dictionary.txt"),a=await t.text();if(e)return;let s=a.split(/\r?\n/),l=[],r=new Set;for(let e=0;e<s.length;e+=1){let t=h(s[e]);t&&!r.has(t)&&(r.add(t),l.push(t))}z(l)}catch(e){console.error("Failed to load dictionary",e)}})(),()=>{e=!0}},[]),(0,s.useEffect)(()=>{("lesson"===e||"coding"===e)&&es.current?.focus()},[e,U,J,m,v]),(0,s.useEffect)(()=>{let e=!1;try{let t=window.localStorage.getItem(o);if(t){let a=JSON.parse(t);"number"==typeof a.unlockedCount&&R(a.unlockedCount),Array.isArray(a.lessonHistory)&&_(a.lessonHistory),Array.isArray(a.codingHistory)&&Q(a.codingHistory),"number"==typeof a.successCounter&&E(a.successCounter),"number"==typeof a.lessonIndex&&x(a.lessonIndex),"number"==typeof a.targetWpm&&W(a.targetWpm),"number"==typeof a.lessonsPerUnlock&&$(a.lessonsPerUnlock),"number"==typeof a.codingIndex&&B(a.codingIndex),"string"==typeof a.codingLanguage&&ea(a.codingLanguage),e=!0}}catch(e){console.error("Failed to restore progress",e)}e||window.localStorage.removeItem(o)},[]),(0,s.useEffect)(()=>{try{window.localStorage.setItem(o,JSON.stringify({unlockedCount:T,lessonHistory:C,codingHistory:Y,successCounter:D,lessonIndex:m,targetWpm:L,lessonsPerUnlock:A,codingIndex:U,codingLanguage:et}))}catch(e){console.error("Failed to persist progress",e)}},[C,m,A,D,L,T,Y,U,et]),(0,s.useEffect)(()=>{if(!["lesson","coding"].includes(e)||"lesson"===e&&v||"coding"===e&&J)return;let t=e=>{"Tab"===e.key||e.metaKey||e.ctrlKey||e.altKey||document.activeElement!==es.current&&es.current?.focus()};return window.addEventListener("keydown",t,!0),()=>window.removeEventListener("keydown",t,!0)},[e,J,v]),(0,s.useEffect)(()=>()=>{el.current&&clearTimeout(el.current),er.current&&clearTimeout(er.current),en.current&&clearTimeout(en.current),ei.current&&clearTimeout(ei.current)},[]);let eg=(0,s.useCallback)(e=>{e<L?E(0):E(e=>{let t=e+1,a=T<i.length;return t>=A&&a?(R(e=>Math.min(e+1,i.length)),0):t})},[A,L,T]),ef=(0,s.useCallback)(()=>{f(""),w(null),M(!1),O({})},[]),eb=(0,s.useCallback)(()=>{x(e=>e+1),ef()},[ef]),ey=(0,s.useCallback)(()=>{el.current&&clearTimeout(el.current),el.current=setTimeout(()=>{el.current=null,eb()},0)},[eb]),ew=(0,s.useCallback)(()=>{G(""),q(null),V(!1),Z({})},[]),ej=(0,s.useCallback)(()=>{B(e=>e+1)},[]),ev=(0,s.useCallback)(()=>{en.current&&clearTimeout(en.current),en.current=setTimeout(()=>{en.current=null,ej()},200)},[ej]),eN=(0,s.useCallback)(()=>{er.current&&clearTimeout(er.current),b&&!v&&(er.current=setTimeout(()=>{er.current=null,ef()},45e3))},[ef,v,b]),eS=(0,s.useCallback)(()=>{ei.current&&clearTimeout(ei.current),K&&!J&&(ei.current=setTimeout(()=>{ei.current=null,ew()},6e4))},[ew,J,K]),ek=(0,s.useCallback)(()=>{if(v)return;let e=Date.now(),t=b??e,a=Math.max(e-t,1),s=Math.max(a/6e4,1/60),l=Math.max(0,Math.round(eu.length/5/s)),r=eu.length||1,n=Object.keys(H).length,i=Math.max(0,Math.round((r-n)/r*100));M(!0),_(t=>[...t,{id:`lesson-${t.length+1}-${e}`,wpm:l,accuracy:i,letters:ec.join(""),text:eu,timestamp:new Date(e).toISOString(),durationMs:a,success:l>=L,mistakes:n}]),eg(l),ey()},[eg,v,eu,H,ey,b,L,ec,g]),eM=(0,s.useCallback)(()=>{if(J||!ep)return;let e=Date.now(),t=K??e,a=Math.max(e-t,1),s=Math.max(a/6e4,1/60),l=Math.max(0,Math.round(ep.length/5/s)),r=ep.length||1,n=Object.keys(X).length,i=Math.max(0,Math.round((r-n)/r*100)),c=eh.snippet;V(!0),Q(t=>[...t,{id:`coding-${t.length+1}-${e}`,wpm:l,accuracy:i,language:eh.activeLanguage??et,snippetId:c?.id??"snippet",concept:c?.concept??"Snippet",text:ep,timestamp:new Date(e).toISOString(),durationMs:a,mistakes:n,focusCharacters:c?.focusCharacters??[],success:l>=L,mode:"coding"}]),ev()},[J,et,X,K,ep,ev,eh.activeLanguage,eh.snippet,L]),eC=(0,s.useCallback)(e=>{O(t=>t[e]?t:{...t,[e]:!0})},[]),e_=(0,s.useCallback)(e=>{Z(t=>t[e]?t:{...t,[e]:!0})},[]),eL=(0,s.useCallback)(t=>{let a="lesson"===e,s="coding"===e;if(!a&&!s||t.metaKey||t.ctrlKey||t.altKey||a&&v||s&&J)return;if("Backspace"===t.key){t.preventDefault(),a?f(e=>e.slice(0,-1)):G(e=>e.slice(0,-1));return}if("Tab"===t.key){if(!s)return;t.preventDefault(),G(e=>{if(J||e.length>=ep.length)return e;let t=y(ep,e.length);return t?ep.startsWith(t,e.length)?e+t:(e_(e.length),e):e});return}let l="Enter"===t.key?"\n":t.key;if(1===l.length||"\n"===l){if(a&&!b&&w(Date.now()),s&&!K&&q(Date.now()),t.preventDefault(),a)return void f(e=>{if(v||e.length>=eu.length)return e;let t=eu[e.length];return t?l===t?e+l:(eC(e.length),e):e});G(e=>{if(J||e.length>=ep.length)return e;let t=ep[e.length];if(!t)return e;if("\n"===l){if("\n"!==t)return e_(e.length),e;let a=y(ep,e.length+1);return e+"\n"+a}return l===t?e+l:(e_(e.length),e)})}},[e,J,ep,K,v,eu,e_,eC,b]);(0,s.useEffect)(()=>{!v&&eu&&g===eu&&ek()},[ek,v,eu,g]),(0,s.useEffect)(()=>{!J&&ep&&F===ep&&eM()},[J,F,ep,eM]),(0,s.useEffect)(()=>(eN(),()=>{er.current&&clearTimeout(er.current)}),[eN,g]),(0,s.useEffect)(()=>(eS(),()=>{ei.current&&clearTimeout(ei.current)}),[eS,F]),(0,s.useEffect)(()=>{ew()},[ew,U,et]);let eW="lesson"!==e&&"coding"!==e||"lesson"===e&&v||"coding"===e&&J;return(0,t.jsx)("div",{className:"min-h-screen bg-slate-950 px-4 py-10 text-slate-100",children:(0,t.jsxs)("div",{className:"mx-auto flex w-full max-w-6xl flex-col items-center gap-8",children:[(0,t.jsx)("nav",{className:"flex flex-wrap justify-center gap-3",children:u.map(s=>(0,t.jsx)(j,{isActive:e===s.id,label:s.label,onClick:()=>a(s.id)},s.id))}),"lesson"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S,{unlockedCount:T,nextLetter:eo,history:C,targetWpm:L}),(0,t.jsx)(N,{highlightedPrompt:em,onClick:()=>es.current?.focus()}),(0,t.jsx)("p",{className:"text-center text-xs text-slate-400",children:"Typing is captured automatically; press Backspace to fix mistakes and keep eyes on the words."})]}),"coding"===e&&(0,t.jsx)(k,{snippetPayload:eh,highlightedPrompt:ex,codingComplete:J,onNext:ej,codingHistory:Y,codingLanguage:et,codingIndex:U,codingText:ep}),(0,t.jsx)("input",{ref:es,spellCheck:!1,value:"",onChange:()=>{},onKeyDown:eL,className:"absolute left-0 top-0 h-px w-px opacity-0","aria-hidden":!0,disabled:eW}),"profile"===e&&(0,t.jsx)(P,{history:C,unlockedLetters:ec,nextLetter:eo,successCounter:D,lessonsPerUnlock:A,targetWpm:L}),"settings"===e&&(0,t.jsx)(ee,{targetWpm:L,setTargetWpm:W,lessonsPerUnlock:A,setLessonsPerUnlock:$,unlockedLetters:ec,nextLetter:eo,codingLanguage:et,setCodingLanguage:ea})]})})}function j(e){let s,l=(0,a.c)(4),{isActive:r,label:n,onClick:i}=e,c=`rounded-full px-5 py-2 text-sm font-medium transition ${r?"bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/40":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;return l[0]!==n||l[1]!==i||l[2]!==c?(s=(0,t.jsx)("button",{type:"button",onClick:i,className:c,children:n}),l[0]=n,l[1]=i,l[2]=c,l[3]=s):s=l[3],s}let v="flex w-full flex-wrap justify-center gap-1 text-center font-mono text-4xl tracking-tight text-white sm:text-5xl";function N(e){let l,r,n,i,c,o,d,u,m,h,p,x,g,f=(0,a.c)(31),{highlightedPrompt:b,onClick:y}=e,w=(0,s.useRef)(null),j=(0,s.useRef)(null);f[0]!==b.length?(l=()=>b.length,f[0]=b.length,f[1]=l):l=f[1];let[N,S]=(0,s.useState)(l);f[2]!==b.length?(r=()=>{let e=j.current;if(!e)return void S(b.length);let t=Array.from(e.children);if(0===t.length)return void S(b.length);let a=t[0].offsetTop,s=t.length;for(let e=0;e<t.length;e+=1)if(t[e].offsetTop>a+.5){s=e;break}S(e=>e===s?e:s)},f[2]=b.length,f[3]=r):r=f[3];let k=r;f[4]!==k?(n=()=>{k()},f[4]=k,f[5]=n):n=f[5],f[6]!==b||f[7]!==k?(i=[b,k],f[6]=b,f[7]=k,f[8]=i):i=f[8],(0,s.useLayoutEffect)(n,i),f[9]!==k?(c=()=>{let e=w.current;if(!e)return;let t=()=>k();window.addEventListener("resize",t);let a="undefined"!=typeof ResizeObserver?new ResizeObserver(()=>k()):null;return a?.observe(e),()=>{window.removeEventListener("resize",t),a?.disconnect()}},o=[k],f[9]=k,f[10]=c,f[11]=o):(c=f[10],o=f[11]),(0,s.useLayoutEffect)(c,o);let M=Math.min(Math.max(N,0),b.length);f[12]!==M||f[13]!==b?(d=b.slice(0,M),f[12]=M,f[13]=b,f[14]=d):d=f[14];let C=d;f[15]!==M||f[16]!==b?(u=b.slice(M),f[15]=M,f[16]=b,f[17]=u):u=f[17];let _=u;return f[18]!==b?(m=(0,t.jsx)("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 -z-10 flex w-full items-center justify-center opacity-0",children:(0,t.jsx)("p",{ref:j,className:v,children:b})}),f[18]=b,f[19]=m):m=f[19],f[20]!==C?(h=(0,t.jsx)("p",{className:v,children:C}),f[20]=C,f[21]=h):h=f[21],f[22]!==_?(p=_.length>0?(0,t.jsx)("p",{className:v,children:_}):null,f[22]=_,f[23]=p):p=f[23],f[24]!==h||f[25]!==p||f[26]!==m?(x=(0,t.jsxs)("div",{ref:w,className:"relative flex w-full max-w-7xl flex-col items-center gap-8",children:[m,h,p]}),f[24]=h,f[25]=p,f[26]=m,f[27]=x):x=f[27],f[28]!==y||f[29]!==x?(g=(0,t.jsx)("section",{className:"relative flex min-h-[60vh] w-full items-center justify-center rounded-3xl border border-white/5 bg-slate-900/40 p-16 shadow-2xl shadow-black/40",onClick:y,children:x}),f[28]=y,f[29]=x,f[30]=g):g=f[30],g}function S(e){let s,l,r=(0,a.c)(8),{unlockedCount:n,nextLetter:c,history:o,targetWpm:d}=e,u=o.at(-1)?.wpm??0,m=d?Math.min(Math.max(u/d,0),1):0;return r[0]!==u||r[1]!==c||r[2]!==m||r[3]!==d||r[4]!==n?(s=i.map((e,a)=>{if(a<n)return(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-emerald-300 bg-emerald-500 text-slate-900",children:e},e);if(e===c){let a,s,l,r=(a=[16,185,129],s=Math.min(Math.max(m,0),1),l=[71,85,105].map((e,t)=>Math.round(e+(a[t]-e)*s)),`rgb(${l.join(",")})`),n=m>.5?"text-slate-900":"text-slate-200";return(0,t.jsx)("span",{className:`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors ${n}`,style:{backgroundColor:r},title:`Current WPM ${u} / target ${d}`,children:e},e)}return(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-white/10 bg-slate-800 text-slate-500",children:e},e)}),r[0]=u,r[1]=c,r[2]=m,r[3]=d,r[4]=n,r[5]=s):s=r[5],r[6]!==s?(l=(0,t.jsx)("div",{className:"flex w-full flex-wrap justify-center gap-2 rounded-3xl border border-white/5 bg-slate-900/60 p-4",children:s}),r[6]=s,r[7]=l):l=r[7],l}function k(e){let s,l,n,i,c,o,d,u,m,h,p,x,f,y,w,j,v,N,S,k,C,_,W=(0,a.c)(54),{snippetPayload:A,highlightedPrompt:R,codingComplete:P,onNext:D,codingHistory:E,codingLanguage:H,codingIndex:O,codingText:I}=e,z=A.snippet;W[0]!==E?(s=(e=>{if(!Array.isArray(e)||0===e.length)return{total:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,languages:[],wpmStreak:0,accuracyStreak:0,totalMinutes:0};let t=e.reduce((e,t)=>(e.wpm+=t.wpm??0,e.accuracy+=t.accuracy??0,e.duration+=t.durationMs??0,e),{wpm:0,accuracy:0,duration:0}),a=e.length,s=Array.from(new Set(e.map(e=>e.language))).sort();return{total:a,avgWpm:Math.round(t.wpm/a),avgAccuracy:Math.round(t.accuracy/a),bestWpm:Math.max(...e.map(e=>e.wpm??0)),bestAccuracy:Math.max(...e.map(e=>e.accuracy??0)),languages:s,wpmStreak:g(e,"wpm"),accuracyStreak:g(e,"accuracy"),totalMinutes:Math.round(t.duration/6e4*10)/10}})(E),W[0]=E,W[1]=s):s=W[1];let U=s,B=r.length||1;W[2]!==z?.focusCharacters?(l=z?.focusCharacters??[],W[2]=z?.focusCharacters,W[3]=l):l=W[3];let F=l,G=A.activeLanguage??H;W[4]!==G?(n=b(G),W[4]=G,W[5]=n):n=W[5];let K=n;W[6]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-400",children:"Coding mode"}),W[6]=i):i=W[6];let q=z?.concept??"Snippet practice";W[7]!==q?(c=(0,t.jsx)("p",{className:"text-xl font-semibold text-white",children:q}),W[7]=q,W[8]=c):c=W[8];let J=z?.description??"Cycle through structured punctuation and patterns.";W[9]!==J?(o=(0,t.jsx)("p",{className:"text-sm text-slate-400",children:J}),W[9]=J,W[10]=o):o=W[10],W[11]!==c||W[12]!==o?(d=(0,t.jsxs)("div",{children:[i,c,o]}),W[11]=c,W[12]=o,W[13]=d):d=W[13];let V=O%B+1;W[14]!==V?(u=(0,t.jsxs)("p",{className:"font-semibold text-white",children:["Snippet ",V," / ",B]}),W[14]=V,W[15]=u):u=W[15],W[16]!==K?(m=(0,t.jsx)("p",{children:K}),W[16]=K,W[17]=m):m=W[17],W[18]!==F?(h=F.join(" ")||"symbols",W[18]=F,W[19]=h):h=W[19],W[20]!==h?(p=(0,t.jsxs)("p",{children:["Focus: ",h]}),W[20]=h,W[21]=p):p=W[21],W[22]!==u||W[23]!==m||W[24]!==p?(x=(0,t.jsxs)("div",{className:"text-right text-xs text-slate-400",children:[u,m,p]}),W[22]=u,W[23]=m,W[24]=p,W[25]=x):x=W[25],W[26]!==x||W[27]!==d?(f=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[d,x]}),W[26]=x,W[27]=d,W[28]=f):f=W[28],W[29]!==I||W[30]!==R?(y=(0,t.jsx)("div",{className:"mt-6 flex w-full justify-center",children:(0,t.jsx)("div",{className:"w-full max-w-4xl",children:(0,t.jsx)(M,{highlightedPrompt:R,text:I})})}),W[29]=I,W[30]=R,W[31]=y):y=W[31],W[32]===Symbol.for("react.memo_cache_sentinel")?(w=(0,t.jsx)("p",{children:"Enter inserts a new line with matching indentation. Tab inserts the next block of spaces."}),W[32]=w):w=W[32],W[33]!==D?(j=(0,t.jsxs)("div",{className:"mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400",children:[w,(0,t.jsx)("button",{type:"button",onClick:D,className:"rounded-full border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10",children:"Next snippet"})]}),W[33]=D,W[34]=j):j=W[34];let Y=O%Math.max(B,1);return W[35]!==Y?(v=(0,t.jsx)($,{currentIndex:Y}),W[35]=Y,W[36]=v):v=W[36],W[37]!==E?(N=E.at(-1)??null,W[37]=E,W[38]=N):N=W[38],W[39]!==P||W[40]!==U||W[41]!==N?(S=(0,t.jsx)(L,{summary:U,lastEntry:N,complete:P}),W[39]=P,W[40]=U,W[41]=N,W[42]=S):S=W[42],W[43]!==v||W[44]!==S?(k=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]",children:[v,S]}),W[43]=v,W[44]=S,W[45]=k):k=W[45],W[46]!==E?(C=(0,t.jsx)(T,{history:E}),W[46]=E,W[47]=C):C=W[47],W[48]!==f||W[49]!==y||W[50]!==j||W[51]!==k||W[52]!==C?(_=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[f,y,j,k,C]}),W[48]=f,W[49]=y,W[50]=j,W[51]=k,W[52]=C,W[53]=_):_=W[53],_}function M(e){let s,l,r,n,i,c,o=(0,a.c)(15),{highlightedPrompt:d,text:u}=e;e:{let e;if(!u){let e;o[0]===Symbol.for("react.memo_cache_sentinel")?(e=[[]],o[0]=e):e=o[0],s=e;break e}if(o[1]!==d||o[2]!==u){let a=u.split("\n"),s=0;e=a.map((e,a)=>{let l=d.slice(s,s+e.length);return((s+=e.length)<d.length&&(s+=1),0===e.length)?[(0,t.jsx)("span",{className:"text-slate-700",children:" "},`empty-${a}`)]:l}),o[1]=d,o[2]=u,o[3]=e}else e=o[3];s=e}let m=s;return o[4]!==m?(l=m.map(_),o[4]=m,o[5]=l):l=o[5],o[6]!==l?(r=(0,t.jsx)("pre",{className:"select-none border-r border-white/5 bg-slate-900/60 px-4 py-5 text-right text-xs font-semibold leading-6 text-slate-500",children:l}),o[6]=l,o[7]=r):r=o[7],o[8]!==m?(n=m.map(C),o[8]=m,o[9]=n):n=o[9],o[10]!==n?(i=(0,t.jsx)("pre",{className:"flex-1 overflow-auto px-6 py-5 font-mono text-sm leading-6 text-white",children:n}),o[10]=n,o[11]=i):i=o[11],o[12]!==r||o[13]!==i?(c=(0,t.jsx)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/60",children:(0,t.jsxs)("div",{className:"flex",children:[r,i]})}),o[12]=r,o[13]=i,o[14]=c):c=o[14],c}function C(e,a){return(0,t.jsx)("div",{className:"whitespace-pre-wrap",children:e},`code-${a}`)}function _(e,a){return(0,t.jsx)("span",{className:"block",children:a+1},`line-${a}`)}function L(e){let s,l,r,n,i=(0,a.c)(18),{summary:c,lastEntry:o,complete:d}=e;i[0]!==c.languages?(s=c.languages.length>0?c.languages.map(W).join(", "):"—",i[0]=c.languages,i[1]=s):s=i[1];let u=s;i[2]!==o?(l=o?b(o.language):null,i[2]=o,i[3]=l):l=i[3];let m=l;return i[4]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Session stats"}),i[4]=r):r=i[4],i[5]!==d||i[6]!==u||i[7]!==o||i[8]!==m||i[9]!==c.accuracyStreak||i[10]!==c.avgAccuracy||i[11]!==c.avgWpm||i[12]!==c.bestAccuracy||i[13]!==c.bestWpm||i[14]!==c.total||i[15]!==c.totalMinutes||i[16]!==c.wpmStreak?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[r,0===c.total?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete your first snippet to build coding momentum."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:[(0,t.jsx)(A,{label:"Avg WPM",value:c.avgWpm,detail:`${c.total} snippets`}),(0,t.jsx)(A,{label:"Avg accuracy",value:`${c.avgAccuracy}%`,detail:`${c.totalMinutes} min`}),(0,t.jsx)(A,{label:"Top WPM",value:c.bestWpm,detail:"personal record"}),(0,t.jsx)(A,{label:"Top accuracy",value:`${c.bestAccuracy}%`,detail:"cleanest run"})]}),(0,t.jsxs)("div",{className:"mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-xs text-slate-400",children:[(0,t.jsx)("p",{className:"font-semibold uppercase tracking-[0.2em] text-slate-300",children:"Languages covered"}),(0,t.jsx)("p",{className:"mt-1 text-sm text-white",children:u}),(0,t.jsxs)("p",{className:"mt-2",children:["Improvement streaks: ",(0,t.jsxs)("span",{className:"text-emerald-300",children:[c.wpmStreak," wpm"]})," /"," ",(0,t.jsxs)("span",{className:"text-sky-300",children:[c.accuracyStreak,"% accuracy"]})]}),o?(0,t.jsxs)("p",{className:"mt-1 text-xs text-slate-400",children:["Last: ",m," · ",o.wpm," wpm / ",o.accuracy,"%"]}):null,d?(0,t.jsx)("p",{className:"mt-2 text-emerald-300",children:"Snippet complete — auto-advancing..."}):null]})]})]}),i[5]=d,i[6]=u,i[7]=o,i[8]=m,i[9]=c.accuracyStreak,i[10]=c.avgAccuracy,i[11]=c.avgWpm,i[12]=c.bestAccuracy,i[13]=c.bestWpm,i[14]=c.total,i[15]=c.totalMinutes,i[16]=c.wpmStreak,i[17]=n):n=i[17],n}function W(e){return b(e)}function A(e){let s,l,r,n,i=(0,a.c)(10),{label:c,value:o,detail:d}=e;return i[0]!==c?(s=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=s):s=i[1],i[2]!==o?(l=(0,t.jsx)("p",{className:"text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=l):l=i[3],i[4]!==d?(r=(0,t.jsx)("p",{className:"text-xs text-slate-400",children:d}),i[4]=d,i[5]=r):r=i[5],i[6]!==s||i[7]!==l||i[8]!==r?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3",children:[s,l,r]}),i[6]=s,i[7]=l,i[8]=r,i[9]=n):n=i[9],n}function $(e){let s,l,n,i=(0,a.c)(5),{currentIndex:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Snippet library"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"curriculum"})]}),i[0]=s):s=i[0],i[1]!==c?(l=r.map((e,a)=>(0,t.jsxs)("li",{className:`rounded-2xl border px-4 py-3 ${a===c?"border-emerald-400 bg-emerald-400/10 text-white":"border-white/10 bg-slate-900/70 text-slate-200"}`,children:[(0,t.jsx)("p",{className:"font-semibold",children:e.concept}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.description}),(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:["Focus: ",e.focusCharacters.join(" ")]})]},e.id)),i[1]=c,i[2]=l):l=i[2],i[3]!==l?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[s,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:l})]}),i[3]=l,i[4]=n):n=i[4],n}function T(e){let s,l,r,n,i=(0,a.c)(8),{history:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent coding sessions"}),i[0]=s):s=i[0],i[1]!==c.length?(l=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[s,(0,t.jsxs)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:[c.length," total"]})]}),i[1]=c.length,i[2]=l):l=i[2],i[3]!==c?(r=0===c.length?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete snippets to build up your coding journal."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:c.slice(-6).reverse().map(R)}),i[3]=c,i[4]=r):r=i[4],i[5]!==l||i[6]!==r?(n=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[l,r]}),i[5]=l,i[6]=r,i[7]=n):n=i[7],n}function R(e){let a=b(e.language);return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.concept}),(0,t.jsxs)("p",{className:"text-xs text-slate-400",children:[a," · ",new Date(e.timestamp).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:m(e.durationMs)})]})]},e.id)}function P(e){let l,r,n,i,c,o,d,u,m,h,p,x,b,y,w,j,v,N,S,k,M,C,_,L,W,A,$,T,R,P,G,K,q,J,V,Q,Z,ee,et,ea,es,el,er,en,ei=(0,a.c)(150),{history:ec,unlockedLetters:eo,nextLetter:ed,successCounter:eu,lessonsPerUnlock:em,targetWpm:eh}=e,[ep,ex]=(0,s.useState)("all"),[eg,ef]=(0,s.useState)(3),[eb,ey]=(0,s.useState)(!0);ei[0]!==ec?(l=ec.map(z),ei[0]=ec,ei[1]=l):l=ei[1];let ew=l;if(ei[2]!==ew||ei[3]!==eo){let e;e=new Map,eo.forEach(t=>{e.set(t.toLowerCase(),0)}),ew.forEach(t=>{new Set((t.text??"").toLowerCase().replace(/[^a-z]/g,"").split("")).forEach(t=>{t&&e.set(t,(e.get(t)??0)+1)})}),r=Array.from(e.entries()).map(([e,t])=>({letter:e,count:t})).sort((e,t)=>e.letter>t.letter?1:-1),ei[2]=ew,ei[3]=eo,ei[4]=r}else r=ei[4];let ej=r;ei[5]!==ej||ei[6]!==ep?(n=()=>{"all"===ep||ej.some(e=>e.letter===ep)||ex("all")},i=[ej,ep],ei[5]=ej,ei[6]=ep,ei[7]=n,ei[8]=i):(n=ei[7],i=ei[8]),(0,s.useEffect)(n,i);e:{let e;if("all"===ep){c=ew;break e}if(ei[9]!==ew||ei[10]!==ep){let t=ep.toLowerCase();e=ew.filter(e=>{let a=(e.letters??"").toLowerCase(),s=(e.text??"").toLowerCase();return a.includes(t)||s.includes(t)}),ei[9]=ew,ei[10]=ep,ei[11]=e}else e=ei[11];c=e}let ev=c;t:{let e,t,a,s,l,r,n,i,c,d,u;if(0===ew.length){let e;ei[12]===Symbol.for("react.memo_cache_sentinel")?(e={totalLessons:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,successRate:0,lessonsAboveTarget:0,totalWords:0,totalMinutes:0,wpmStreak:0,accuracyStreak:0,lastSevenAvgWpm:0},ei[12]=e):e=ei[12],o=e;break t}ei[13]!==ew?(e=ew.reduce(I,{wpm:0,accuracy:0,words:0,duration:0}),ei[13]=ew,ei[14]=e):e=ei[14];let m=e,h=ew.length;ei[15]!==ew?(t=Math.max(...ew.map(O)),ei[15]=ew,ei[16]=t):t=ei[16];let p=t;ei[17]!==ew?(a=Math.max(...ew.map(H)),ei[17]=ew,ei[18]=a):a=ei[18];let x=a;if(ei[19]!==ew||ei[20]!==eh){let e;ei[22]!==eh?(e=e=>e.wpm>=eh,ei[22]=eh,ei[23]=e):e=ei[23],s=ew.filter(e),ei[19]=ew,ei[20]=eh,ei[21]=s}else s=ei[21];let f=s.length;if(ei[24]!==ew){let e=ew.slice(-7);l=e.length>0?Math.round(e.reduce(E,0)/e.length):0,ei[24]=ew,ei[25]=l}else l=ei[25];let b=l;ei[26]!==h||ei[27]!==m.wpm?(r=Math.round(m.wpm/h),ei[26]=h,ei[27]=m.wpm,ei[28]=r):r=ei[28],ei[29]!==h||ei[30]!==m.accuracy?(n=Math.round(m.accuracy/h),ei[29]=h,ei[30]=m.accuracy,ei[31]=n):n=ei[31],ei[32]!==f||ei[33]!==h?(i=Math.round(f/h*100),ei[32]=f,ei[33]=h,ei[34]=i):i=ei[34];let y=m.words,w=Math.round(m.duration/6e4*10)/10;ei[35]!==ew?(c=g(ew,"wpm"),ei[35]=ew,ei[36]=c):c=ei[36],ei[37]!==ew?(d=g(ew,"accuracy"),ei[37]=ew,ei[38]=d):d=ei[38],ei[39]!==x||ei[40]!==p||ei[41]!==b||ei[42]!==f||ei[43]!==r||ei[44]!==n||ei[45]!==i||ei[46]!==w||ei[47]!==c||ei[48]!==d||ei[49]!==h||ei[50]!==m.words?(u={totalLessons:h,avgWpm:r,avgAccuracy:n,bestWpm:p,bestAccuracy:x,successRate:i,lessonsAboveTarget:f,totalWords:y,totalMinutes:w,wpmStreak:c,accuracyStreak:d,lastSevenAvgWpm:b},ei[39]=x,ei[40]=p,ei[41]=b,ei[42]=f,ei[43]=r,ei[44]=n,ei[45]=i,ei[46]=w,ei[47]=c,ei[48]=d,ei[49]=h,ei[50]=m.words,ei[51]=u):u=ei[51],o=u}let eN=o;if(ei[52]!==ew)d=f.map(e=>({...e,count:ew.filter(t=>t.accuracy>=e.min&&t.accuracy<e.max).length})),ei[52]=ew,ei[53]=d;else d=ei[53];let eS=d,ek=1===eg?"Off":`${eg} lessons`;ei[54]===Symbol.for("react.memo_cache_sentinel")?(u=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Letters"}),ei[54]=u):u=ei[54],ei[55]!==eo?(m=eo.join(", "),ei[55]=eo,ei[56]=m):m=ei[56],ei[57]!==m?(h=(0,t.jsxs)("div",{children:[u,(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:m})]}),ei[57]=m,ei[58]=h):h=ei[58],ei[59]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)("p",{className:"text-slate-400",children:"Next unlock"}),ei[59]=p):p=ei[59];let eM=ed??"All characters unlocked";ei[60]!==eM?(x=(0,t.jsx)("p",{className:"text-white font-semibold",children:eM}),ei[60]=eM,ei[61]=x):x=ei[61],ei[62]!==em||ei[63]!==ed||ei[64]!==eu?(b=ed?(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:[Math.max(em-eu,0)," high-WPM lessons to go"]}):null,ei[62]=em,ei[63]=ed,ei[64]=eu,ei[65]=b):b=ei[65],ei[66]!==x||ei[67]!==b?(y=(0,t.jsxs)("div",{className:"text-right text-sm",children:[p,x,b]}),ei[66]=x,ei[67]=b,ei[68]=y):y=ei[68],ei[69]!==h||ei[70]!==y?(w=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[h,y]}),ei[69]=h,ei[70]=y,ei[71]=w):w=ei[71],ei[72]!==eN.totalLessons?(j=(0,t.jsx)(U,{label:"Lessons",value:eN.totalLessons,hint:"lifetime"}),ei[72]=eN.totalLessons,ei[73]=j):j=ei[73],ei[74]!==eh?(v=(0,t.jsx)(U,{label:"Target WPM",value:eh,hint:"goal"}),ei[74]=eh,ei[75]=v):v=ei[75];let eC=`${eN.successRate}%`;ei[76]!==eC?(N=(0,t.jsx)(U,{label:"Success Rate",value:eC,hint:"≥ target"}),ei[76]=eC,ei[77]=N):N=ei[77];let e_=eN.lastSevenAvgWpm?`last 7: ${eN.lastSevenAvgWpm}`:"last 7: —";ei[78]!==eN.avgWpm||ei[79]!==e_?(S=(0,t.jsx)(U,{label:"Avg WPM",value:eN.avgWpm,hint:e_}),ei[78]=eN.avgWpm,ei[79]=e_,ei[80]=S):S=ei[80];let eL=`${eN.avgAccuracy}%`,eW=`${eN.totalWords} words`;ei[81]!==eL||ei[82]!==eW?(k=(0,t.jsx)(U,{label:"Avg Accuracy",value:eL,hint:eW}),ei[81]=eL,ei[82]=eW,ei[83]=k):k=ei[83],ei[84]!==eN.bestWpm?(M=(0,t.jsx)(U,{label:"Top WPM",value:eN.bestWpm,hint:"fastest lesson"}),ei[84]=eN.bestWpm,ei[85]=M):M=ei[85];let eA=`${eN.bestAccuracy}%`;ei[86]!==eA?(C=(0,t.jsx)(U,{label:"Top Accuracy",value:eA,hint:"cleanest lesson"}),ei[86]=eA,ei[87]=C):C=ei[87];let e$=`${eN.wpmStreak} / ${eN.accuracyStreak}`;ei[88]!==e$?(_=(0,t.jsx)(U,{label:"Improvement streaks",value:e$,hint:"WPM / accuracy"}),ei[88]=e$,ei[89]=_):_=ei[89],ei[90]!==j||ei[91]!==v||ei[92]!==N||ei[93]!==S||ei[94]!==k||ei[95]!==M||ei[96]!==C||ei[97]!==_?(L=(0,t.jsxs)("div",{className:"mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[j,v,N,S,k,M,C,_]}),ei[90]=j,ei[91]=v,ei[92]=N,ei[93]=S,ei[94]=k,ei[95]=M,ei[96]=C,ei[97]=_,ei[98]=L):L=ei[98],ei[99]===Symbol.for("react.memo_cache_sentinel")?(W=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Letter focus"}),ei[99]=W):W=ei[99],ei[100]===Symbol.for("react.memo_cache_sentinel")?(A=e=>ex(e),ei[100]=A):A=ei[100],ei[101]!==ej||ei[102]!==ep?($=(0,t.jsxs)("div",{className:"min-w-[220px] flex-1",children:[W,(0,t.jsx)(B,{letters:ej,selectedLetter:ep,onSelect:A})]}),ei[101]=ej,ei[102]=ep,ei[103]=$):$=ei[103],ei[104]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsx)("span",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Smoothing"}),ei[104]=T):T=ei[104];let eT=0===ew.length;return ei[105]===Symbol.for("react.memo_cache_sentinel")?(R=e=>ef(Number(e.target.value)),ei[105]=R):R=ei[105],ei[106]!==eg||ei[107]!==eT?(P=(0,t.jsx)("input",{type:"range",min:1,max:9,step:2,value:eg,disabled:eT,onChange:R,className:"accent-emerald-400"}),ei[106]=eg,ei[107]=eT,ei[108]=P):P=ei[108],ei[109]!==ek?(G=(0,t.jsx)("span",{className:"text-xs text-slate-400",children:ek}),ei[109]=ek,ei[110]=G):G=ei[110],ei[111]!==P||ei[112]!==G?(K=(0,t.jsxs)("label",{className:"flex flex-col gap-2 sm:w-48",children:[T,P,G]}),ei[111]=P,ei[112]=G,ei[113]=K):K=ei[113],ei[114]===Symbol.for("react.memo_cache_sentinel")?(q=e=>ey(e.target.checked),ei[114]=q):q=ei[114],ei[115]!==eb?(J=(0,t.jsxs)("label",{className:"flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:[(0,t.jsx)("input",{type:"checkbox",checked:eb,onChange:q,className:"h-4 w-4 rounded border border-slate-600 bg-slate-900 text-emerald-400 accent-emerald-400"}),"Trendline"]}),ei[115]=eb,ei[116]=J):J=ei[116],ei[117]!==K||ei[118]!==J?(V=(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-4 text-sm text-slate-200 sm:flex-row sm:items-end sm:justify-end",children:[K,J]}),ei[117]=K,ei[118]=J,ei[119]=V):V=ei[119],ei[120]!==$||ei[121]!==V?(Q=(0,t.jsxs)("div",{className:"flex flex-wrap gap-6",children:[$,V]}),ei[120]=$,ei[121]=V,ei[122]=Q):Q=ei[122],ei[123]!==ew.length||ei[124]!==ev||ei[125]!==ep||ei[126]!==eb||ei[127]!==eg||ei[128]!==eh?(Z=(0,t.jsx)(F,{lessons:ev,smoothingWindow:eg,showTrendline:eb,totalLessons:ew.length,targetWpm:eh,selectedLetter:ep}),ei[123]=ew.length,ei[124]=ev,ei[125]=ep,ei[126]=eb,ei[127]=eg,ei[128]=eh,ei[129]=Z):Z=ei[129],ei[130]!==Q||ei[131]!==Z?(ee=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[Q,Z]}),ei[130]=Q,ei[131]=Z,ei[132]=ee):ee=ei[132],ei[133]!==eS||ei[134]!==eN.totalLessons?(et=(0,t.jsx)(Y,{buckets:eS,totalLessons:eN.totalLessons}),ei[133]=eS,ei[134]=eN.totalLessons,ei[135]=et):et=ei[135],ei[136]!==eN?(ea=(0,t.jsx)(X,{summary:eN}),ei[136]=eN,ei[137]=ea):ea=ei[137],ei[138]!==et||ei[139]!==ea?(es=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-2",children:[et,ea]}),ei[138]=et,ei[139]=ea,ei[140]=es):es=ei[140],ei[141]===Symbol.for("react.memo_cache_sentinel")?(el=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent lessons"}),ei[141]=el):el=ei[141],ei[142]!==ec?(er=(0,t.jsxs)("div",{className:"mt-8",children:[el,0===ec.length?(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete a lesson to see stats."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:ec.slice(-6).reverse().map(D)})]}),ei[142]=ec,ei[143]=er):er=ei[143],ei[144]!==w||ei[145]!==L||ei[146]!==ee||ei[147]!==es||ei[148]!==er?(en=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[w,L,ee,es,er]}),ei[144]=w,ei[145]=L,ei[146]=ee,ei[147]=es,ei[148]=er,ei[149]=en):en=ei[149],en}function D(e){return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.text}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:new Date(e.timestamp).toLocaleString()})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:m(e.durationMs)}),(0,t.jsxs)("p",{className:"text-xs text-rose-400",children:[e.mistakes??0," mistakes"]})]})]},e.id)}function E(e,t){return e+t.wpm}function H(e){return e.accuracy??0}function O(e){return e.wpm??0}function I(e,t){var a;return e.wpm=e.wpm+(t.wpm??0),e.accuracy=e.accuracy+(t.accuracy??0),e.words=e.words+((a=t.text)?a.trim().split(/\s+/).filter(Boolean).length:0),e.duration=e.duration+(t.durationMs??0),e}function z(e,t){return{...e,lessonNumber:t+1}}function U(e){let s,l,r,n,i=(0,a.c)(10),{label:c,value:o,hint:d}=e;return i[0]!==c?(s=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=s):s=i[1],i[2]!==o?(l=(0,t.jsx)("p",{className:"mt-2 text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=l):l=i[3],i[4]!==d?(r=d?(0,t.jsx)("p",{className:"text-xs text-slate-500",children:d}):null,i[4]=d,i[5]=r):r=i[5],i[6]!==s||i[7]!==l||i[8]!==r?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-5 text-center",children:[s,l,r]}),i[6]=s,i[7]=l,i[8]=r,i[9]=n):n=i[9],n}function B(e){let s,l,r,n,i=(0,a.c)(16),{letters:c,selectedLetter:o,onSelect:d}=e;if(!c.length){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:"Complete a lesson to unlock insights."}),i[0]=e):e=i[0],e}i[1]!==d?(s=()=>d("all"),i[1]=d,i[2]=s):s=i[2];let u=`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${"all"===o?"bg-emerald-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;if(i[3]!==s||i[4]!==u?(l=(0,t.jsx)("button",{type:"button",onClick:s,className:u,children:"All"}),i[3]=s,i[4]=u,i[5]=l):l=i[5],i[6]!==c||i[7]!==d||i[8]!==o){let e;i[10]!==d||i[11]!==o?(e=e=>(0,t.jsxs)("button",{type:"button",onClick:()=>d(e.letter),className:`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${o===e.letter?"bg-sky-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:[e.letter,(0,t.jsx)("span",{className:"ml-1 text-[10px] text-slate-400",children:e.count})]},e.letter),i[10]=d,i[11]=o,i[12]=e):e=i[12],r=c.map(e),i[6]=c,i[7]=d,i[8]=o,i[9]=r}else r=i[9];return i[13]!==l||i[14]!==r?(n=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-2",children:[l,r]}),i[13]=l,i[14]=r,i[15]=n):n=i[15],n}function F(e){let s,l,r,n,i,c,o,d,u,m,h,p,g,f,b,y,w,j,v,N,S,k,M,C,_,L,W,A,$,T,R,P,D,E,H=(0,a.c)(97),{lessons:O,smoothingWindow:I,showTrendline:z,totalLessons:U,targetWpm:B,selectedLetter:F}=e;if(0===U){let e;return H[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-6 text-sm text-slate-400",children:"Complete a lesson to unlock progress visualizations."}),H[0]=e):e=H[0],e}if(!O.length){let e,a;return H[1]!==F?(e=F.toUpperCase(),H[1]=F,H[2]=e):e=H[2],H[3]!==e?(a=(0,t.jsxs)("p",{className:"mt-6 text-sm text-slate-400",children:['No lessons yet for the letter "',e,'". Keep practicing to fill this chart.']}),H[3]=e,H[4]=a):a=H[4],a}if(H[5]!==O||H[6]!==z||H[7]!==I||H[8]!==B||H[9]!==U){let e,t,a,d=O.map(V),u=O.map(J),m=x(d,I),h=x(u,I),p=O.map((e,t)=>({lessonNumber:e.lessonNumber,wpm:m[t]??e.wpm,accuracy:h[t]??e.accuracy,rawWpm:e.wpm,rawAccuracy:e.accuracy})),g=Math.max(U,1);i=Math.max(B+15,...p.map(q),40),H[17]!==g?(e=e=>1===g?450:60+(e-1)/(g-1)*780,H[17]=g,H[18]=e):e=H[18],n=e,H[19]!==i?(t=e=>280-Math.max(0,e)/(i||1)*240,H[19]=i,H[20]=t):t=H[20],c=t,o=K,H[21]!==n?(a=(e,t,a)=>0===e.length?"":e.map((e,s)=>{let l=n(e.lessonNumber).toFixed(2),r=a(e[t]).toFixed(2);return`${0===s?"M":"L"}${l},${r}`}).join(" "),H[21]=n,H[22]=a):a=H[22];let f=a;r=f(p,"wpm",c),s=f(p,"accuracy",o);let b=p.map(G);l=z?(e=>{if(!Array.isArray(e)||e.length<2)return null;let t=0,a=0,s=0,l=0;e.forEach(({x:e,y:r})=>{t+=e,a+=r,s+=e*r,l+=e*e});let r=e.length,n=r*l-t*t;if(0===n)return null;let i=(r*s-t*a)/n,c=(a-i*t)/r;return{slope:i,intercept:c}})(b):null,H[5]=O,H[6]=z,H[7]=I,H[8]=B,H[9]=U,H[10]=s,H[11]=l,H[12]=r,H[13]=n,H[14]=i,H[15]=c,H[16]=o}else s=H[10],l=H[11],r=H[12],n=H[13],i=H[14],c=H[15],o=H[16];let Y=l,Q=O[0]?.lessonNumber??1,X=O.at(-1)?.lessonNumber??Q;H[23]!==Y||H[24]!==X||H[25]!==Q||H[26]!==n||H[27]!==c?(d=Y?{x1:n(Q),y1:c(Y.slope*Q+Y.intercept),x2:n(X),y2:c(Y.slope*X+Y.intercept)}:null,H[23]=Y,H[24]=X,H[25]=Q,H[26]=n,H[27]=c,H[28]=d):d=H[28];let Z=d;if(H[29]===Symbol.for("react.memo_cache_sentinel")?(u=[0,.25,.5,.75,1],H[29]=u):u=H[29],H[30]!==i||H[31]!==c||H[32]!==o){let e=u.map(e=>Math.round(i*e));f="mt-6",b="h-80 w-full",y="0 0 900 320",w="img",j="Typing performance chart",H[44]===Symbol.for("react.memo_cache_sentinel")?(v=(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"wpmGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgb(16,185,129)",stopOpacity:"0.4"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgb(16,185,129)",stopOpacity:"0.05"})]})}),N=(0,t.jsx)("line",{x1:60,y1:280,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.4)",strokeWidth:"1"}),m=(0,t.jsx)("line",{x1:60,y1:40,x2:60,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),h=(0,t.jsx)("line",{x1:840,y1:40,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),H[44]=m,H[45]=h,H[46]=v,H[47]=N):(m=H[44],h=H[45],v=H[46],N=H[47]),p=e.map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:54,x2:60,y1:c(e),y2:c(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsx)("text",{x:52,y:c(e)+4,textAnchor:"end",fontSize:"10",fill:"rgba(148,163,184,0.8)",children:e})]},`left-${e}`)),g=[0,25,50,75,100].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:840,x2:846,y1:o(e),y2:o(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsxs)("text",{x:848,y:o(e)+4,fontSize:"10",fill:"rgba(125,211,252,0.9)",children:[e,"%"]})]},`right-${e}`)),H[30]=i,H[31]=c,H[32]=o,H[33]=m,H[34]=h,H[35]=p,H[36]=g,H[37]=f,H[38]=b,H[39]=y,H[40]=w,H[41]=j,H[42]=v,H[43]=N}else m=H[33],h=H[34],p=H[35],g=H[36],f=H[37],b=H[38],y=H[39],w=H[40],j=H[41],v=H[42],N=H[43];if(H[48]===Symbol.for("react.memo_cache_sentinel")?(S=(0,t.jsx)("text",{x:60,y:30,fontSize:"11",fill:"rgba(148,163,184,0.8)",children:"WPM"}),k=(0,t.jsx)("text",{x:840,y:30,fontSize:"11",textAnchor:"end",fill:"rgba(125,211,252,0.9)",children:"Accuracy"}),H[48]=S,H[49]=k):(S=H[48],k=H[49]),H[50]!==B||H[51]!==c?(M=B?(0,t.jsx)("line",{x1:60,x2:840,y1:c(B),y2:c(B),stroke:"rgba(248,113,113,0.4)",strokeDasharray:"6 4"}):null,H[50]=B,H[51]=c,H[52]=M):M=H[52],H[53]!==s?(C=s?(0,t.jsx)("path",{d:s,fill:"none",stroke:"rgba(56,189,248,0.9)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round"}):null,H[53]=s,H[54]=C):C=H[54],H[55]!==r?(_=r?(0,t.jsx)("path",{d:r,fill:"none",stroke:"url(#wpmGradient)",strokeWidth:"3",strokeLinejoin:"round",strokeLinecap:"round"}):null,H[55]=r,H[56]=_):_=H[56],H[57]!==Z?(L=Z?(0,t.jsx)("line",{x1:Z.x1,y1:Z.y1,x2:Z.x2,y2:Z.y2,stroke:"rgba(248,250,252,0.5)",strokeWidth:"2",strokeDasharray:"4 4"}):null,H[57]=Z,H[58]=L):L=H[58],H[59]!==O||H[60]!==n||H[61]!==c){let e;H[63]!==n||H[64]!==c?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:c(e.wpm),r:4,fill:"rgb(16,185,129)",stroke:"rgba(15,118,110,0.4)",strokeWidth:"1",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.wpm," wpm"]})},`wpm-${e.id??e.lessonNumber}`),H[63]=n,H[64]=c,H[65]=e):e=H[65],W=O.map(e),H[59]=O,H[60]=n,H[61]=c,H[62]=W}else W=H[62];if(H[66]!==O||H[67]!==n||H[68]!==o){let e;H[70]!==n||H[71]!==o?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:o(e.accuracy),r:3,fill:"rgb(56,189,248)",stroke:"rgba(14,165,233,0.2)",strokeWidth:"1",opacity:"0.8",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.accuracy,"% accuracy"]})},`accuracy-${e.id??e.lessonNumber}`),H[70]=n,H[71]=o,H[72]=e):e=H[72],A=O.map(e),H[66]=O,H[67]=n,H[68]=o,H[69]=A}else A=H[69];return H[73]!==m||H[74]!==h||H[75]!==p||H[76]!==g||H[77]!==M||H[78]!==C||H[79]!==_||H[80]!==L||H[81]!==W||H[82]!==A||H[83]!==b||H[84]!==y||H[85]!==w||H[86]!==j||H[87]!==v||H[88]!==N?($=(0,t.jsxs)("svg",{className:b,viewBox:y,role:w,"aria-label":j,children:[v,N,m,h,p,g,S,k,M,C,_,L,W,A]}),H[73]=m,H[74]=h,H[75]=p,H[76]=g,H[77]=M,H[78]=C,H[79]=_,H[80]=L,H[81]=W,H[82]=A,H[83]=b,H[84]=y,H[85]=w,H[86]=j,H[87]=v,H[88]=N,H[89]=$):$=H[89],H[90]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-emerald-400"}),"WPM (smoothed)"]}),H[90]=T):T=H[90],H[91]===Symbol.for("react.memo_cache_sentinel")?(R=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-sky-400"}),"Accuracy (smoothed)"]}),H[91]=R):R=H[91],H[92]===Symbol.for("react.memo_cache_sentinel")?(P=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full border border-slate-200 border-dashed"}),"Trendline"]}),H[92]=P):P=H[92],H[93]===Symbol.for("react.memo_cache_sentinel")?(D=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-4 text-xs text-slate-400",children:[T,R,P,(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-rose-400/50"}),"Target WPM"]})]}),H[93]=D):D=H[93],H[94]!==f||H[95]!==$?(E=(0,t.jsxs)("div",{className:f,children:[$,D]}),H[94]=f,H[95]=$,H[96]=E):E=H[96],E}function G(e){return{x:e.lessonNumber,y:e.rawWpm}}function K(e){return 280-Math.max(0,Math.min(100,e))/100*240}function q(e){return e.wpm}function J(e){return e.accuracy}function V(e){return e.wpm}function Y(e){let s,l,r,n,i=(0,a.c)(11),{buckets:c,totalLessons:o}=e;if(!o){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete lessons to populate this chart."})]}),i[0]=e):e=i[0],e}i[1]!==c?(s=Math.max(...c.map(Q),1),i[1]=c,i[2]=s):s=i[2];let d=s;if(i[3]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"lessons"})]}),i[3]=l):l=i[3],i[4]!==c||i[5]!==d){let e;i[7]!==d?(e=e=>(0,t.jsxs)("div",{className:"flex-1 text-center",children:[(0,t.jsx)("div",{className:"relative h-32 overflow-hidden rounded-2xl bg-slate-900/60",children:(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 rounded-2xl bg-sky-400/70",style:{height:`${e.count/d*100||0}%`}})}),(0,t.jsx)("p",{className:"mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:e.count})]},e.label),i[7]=d,i[8]=e):e=i[8],r=c.map(e),i[4]=c,i[5]=d,i[6]=r}else r=i[6];return i[9]!==r?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[l,(0,t.jsx)("div",{className:"mt-6 flex gap-3",children:r})]}),i[9]=r,i[10]=n):n=i[10],n}function Q(e){return e.count}function X(e){let s,l,r,n,i,c,o,d,u=(0,a.c)(20),{summary:m}=e,h=m.totalLessons?`${m.successRate}% of sessions`:"—";u[0]!==m.lessonsAboveTarget||u[1]!==h?(s={label:"Lessons ≥ target",value:m.lessonsAboveTarget,detail:h},u[0]=m.lessonsAboveTarget,u[1]=h,u[2]=s):s=u[2],u[3]!==m.totalMinutes?(l={label:"Typing minutes",value:m.totalMinutes,detail:"lifetime focus time"},u[3]=m.totalMinutes,u[4]=l):l=u[4],u[5]!==m.totalWords?(r={label:"Words practiced",value:m.totalWords,detail:"approximate"},u[5]=m.totalWords,u[6]=r):r=u[6];let p=`${m.wpmStreak} lessons`;u[7]!==p?(n={label:"WPM streak",value:p,detail:"non-stop improvement"},u[7]=p,u[8]=n):n=u[8];let x=`${m.accuracyStreak} lessons`;u[9]!==x?(i={label:"Accuracy streak",value:x,detail:"steady precision"},u[9]=x,u[10]=i):i=u[10],u[11]!==s||u[12]!==l||u[13]!==r||u[14]!==n||u[15]!==i?(c=[s,l,r,n,i],u[11]=s,u[12]=l,u[13]=r,u[14]=n,u[15]=i,u[16]=c):c=u[16];let g=c;return u[17]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Highlights"}),u[17]=o):o=u[17],u[18]!==g?(d=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[o,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:g.map(Z)})]}),u[18]=g,u[19]=d):d=u[19],d}function Z(e){return(0,t.jsxs)("li",{className:"flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.2em] text-slate-500",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.detail})]}),(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:e.value})]},e.label)}function ee(e){let s,r,n,i,c,o,d,u,m,h,p,x,g,f,b=(0,a.c)(34),{targetWpm:y,setTargetWpm:w,lessonsPerUnlock:j,setLessonsPerUnlock:v,unlockedLetters:N,nextLetter:S,codingLanguage:k,setCodingLanguage:M}=e;b[0]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Configuration"}),b[0]=s):s=b[0],b[1]!==w?(r=e=>w(Number(e.target.value)||35),b[1]=w,b[2]=r):r=b[2],b[3]!==r||b[4]!==y?(n=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Target WPM",(0,t.jsx)("input",{type:"number",min:5,max:200,value:y,onChange:r,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),b[3]=r,b[4]=y,b[5]=n):n=b[5],b[6]!==v?(i=e=>v(Math.max(1,Number(e.target.value)||5)),b[6]=v,b[7]=i):i=b[7],b[8]!==j||b[9]!==i?(c=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Lessons per unlock",(0,t.jsx)("input",{type:"number",min:1,max:20,value:j,onChange:i,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),b[8]=j,b[9]=i,b[10]=c):c=b[10],b[11]!==M?(o=e=>M(e.target.value),b[11]=M,b[12]=o):o=b[12],b[13]===Symbol.for("react.memo_cache_sentinel")?(d=l.map(et),b[13]=d):d=b[13],b[14]!==k||b[15]!==o?(u=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Coding language",(0,t.jsx)("select",{value:k,onChange:o,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60",children:d})]}),b[14]=k,b[15]=o,b[16]=u):u=b[16],b[17]!==n||b[18]!==c||b[19]!==u?(m=(0,t.jsxs)("div",{className:"mt-6 grid gap-6 lg:grid-cols-3 sm:grid-cols-2",children:[n,c,u]}),b[17]=n,b[18]=c,b[19]=u,b[20]=m):m=b[20],b[21]!==N?(h=N.join(", "),b[21]=N,b[22]=h):h=b[22],b[23]!==h?(p=(0,t.jsxs)("p",{children:["Unlocked letters: ",h]}),b[23]=h,b[24]=p):p=b[24];let C=S??"complete",_=S?"maintain target WPM to progress":"all done";return b[25]!==C||b[26]!==_?(x=(0,t.jsxs)("p",{children:["Next unlock: ",C," (",_,")"]}),b[25]=C,b[26]=_,b[27]=x):x=b[27],b[28]!==p||b[29]!==x?(g=(0,t.jsxs)("div",{className:"mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300",children:[p,x]}),b[28]=p,b[29]=x,b[30]=g):g=b[30],b[31]!==g||b[32]!==m?(f=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[s,m,g]}),b[31]=g,b[32]=m,b[33]=f):f=b[33],f}function et(e){return(0,t.jsx)("option",{value:e.id,children:e.label},e.id)}e.s(["default",()=>w],81694)}]);