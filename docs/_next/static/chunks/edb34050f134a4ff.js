(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67458,(e,t,a)=>{"use strict";var r=e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;a.c=function(e){return r.H.useMemoCache(e)}},932,(e,t,a)=>{"use strict";t.exports=e.r(67458)},81694,e=>{"use strict";e.i(47167);var t=e.i(43476),a=e.i(932),r=e.i(71645);let l=[{id:"javascript",label:"JavaScript"},{id:"python",label:"Python"},{id:"java",label:"Java"},{id:"csharp",label:"C#"},{id:"go",label:"Go"},{id:"ruby",label:"Ruby"}],s=[{id:"function-scaffold",concept:"Function scaffolding",description:"Practice parentheses, braces, nullish checks, and template literals.",focusCharacters:["(",")","{","}","?",":","=","`"],languages:{javascript:String.raw`function greet(userName) {
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
dispatch(handlers, "noop")`}}],n=["i","a","l","r"],i=(()=>{let e="abcdefghijklmnopqrstuvwxyz".split(""),t=e.indexOf("q"),a=e.indexOf("u");if(t>=0&&a>=0&&a>t){let[r]=e.splice(a,1);e.splice(t,0,r)}return e})(),c=Array.from(new Set([...n,...i])),o="typing-progress-v1",d=l[0]?.id??"javascript",u=[{id:"lesson",label:"Lesson"},{id:"coding",label:"Coding"},{id:"profile",label:"Profile"},{id:"settings",label:"Settings"}],m=(e=1)=>{let t=Math.abs(Math.floor(e))%0x7fffffff;return 0===t&&(t=1),()=>((t=16807*t%0x7fffffff)-1)/0x7ffffffe},h=e=>{if(!e)return"00:00";let t=Math.max(0,Math.floor(e/1e3)),a=String(Math.floor(t/60)).padStart(2,"0"),r=String(t%60).padStart(2,"0");return`${a}:${r}`},p=(e,t)=>{let a=new Set(t);return Array.from(e).every(e=>a.has(e))},x=e=>e<=4?"short":e<=7?"medium":e<=10?"long":"extra_long",g={very_common:4,common:3,specialized:2,rare:1},f={low:3,medium:2,high:1},b={short:3,medium:3,long:2,extra_long:1},y={simple_root:3,compound:2.5,affixed:2,loanword:1.5},w={general:3,technology:2.6,data:2.4,design:2.3,science:2.2,project:2.2,security:2.2,networking:2.2,food:2},j={"double-letter":.35,"alternating-cv":.4,"all-lower":.15,"vowel-run":-.35,"rare-letter":-.6,"vowel-glide":.15,"y-ending":.1},v=e=>({word:e,length:e.length,frequencyTier:"common",frequency:1,zipf:5,obscurityLevel:"low",lengthGroup:x(e.length),partOfSpeech:"noun",domain:"general",complexity:"simple_root",typingFeatures:["all-lower"],recommended:!0,notes:"fallback"}),N=["air","aria","lair","liar","rail","briar","racial","radial","real","flare","argil","hilaria","jail","kalari","alarm","linear","clarion","plain","aqua","acquire","equal","opaque","queen","queue","queer","quail","qualia","qualm","quake","liquid","qibla","qi","rails","trail","aural","rival","wail","axial","relay","lazily","dragon","forest","mural","artisan","station","rotation","delivery","formation","vital","gaily","brawler","sailor","pavilion","citadel","journal","keyboard","annex","axiom","boxcar","index","pixel","xenon","galaxy","byte","canyon","rhythm","syrup","voyage","zephyr","amaze","blizzard","frozen","guzzle","puzzle"].map(e=>v(e)),k=[{allowHighObscurity:!1,includeShortWords:!1,includeNonRecommended:!1},{allowHighObscurity:!0,includeShortWords:!1,includeNonRecommended:!1},{allowHighObscurity:!0,includeShortWords:!0,includeNonRecommended:!1},{allowHighObscurity:!0,includeShortWords:!0,includeNonRecommended:!0}],S=["medium","short","long","extra_long"],M=(e,a,r)=>Array.from(e).map((e,l)=>{let s=a[l],n=" "===e?" ":e,i=!!r[l];if(s){let a=s===e;return i?(0,t.jsx)("span",{className:a?"text-amber-300 underline decoration-amber-300 decoration-2":"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:a?"text-emerald-400":"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${l}`)}return l===a.length?i?(0,t.jsx)("span",{className:"rounded border border-rose-500 bg-rose-500/20 text-rose-200",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:"rounded bg-slate-700/70 text-white",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:"text-slate-500",children:n},`${e}-${l}`)}),_=(e,t)=>{if(!Array.isArray(e)||0===e.length)return[];let a=Math.max(1,Math.floor(t));if(1===a)return[...e];let r=Math.floor(a/2);return e.map((t,a)=>{let l=Math.max(0,a-r),s=Math.min(e.length-1,a+r),n=e.slice(l,s+1);return Number((n.reduce((e,t)=>e+t,0)/n.length).toFixed(2))})},C=(e,t)=>{if(!Array.isArray(e)||0===e.length)return 0;let a=1,r=1;for(let l=1;l<e.length;l+=1)e[l][t]>=e[l-1][t]?r+=1:r=1,r>a&&(a=r);return a},W=[{label:"<80",min:0,max:80},{label:"80-85",min:80,max:85},{label:"85-90",min:85,max:90},{label:"90-95",min:90,max:95},{label:"95+",min:95,max:101}],L=e=>l.find(t=>t.id===e)?.label??e,A=(e,t)=>{if(!e)return"";let a=t,r="";for(;a<e.length;){let t=e[a];if(" "===t||"	"===t)r+=t,a+=1;else break}return r};function $(){let[e,a]=(0,r.useState)("lesson"),[h,_]=(0,r.useState)(0),[C,W]=(0,r.useState)(""),[L,$]=(0,r.useState)(null),[R,D]=(0,r.useState)(!1),[H,z]=(0,r.useState)([]),[q,I]=(0,r.useState)(35),[G,U]=(0,r.useState)(5),[B,F]=(0,r.useState)(n.length),[K,V]=(0,r.useState)(0),[Y,Q]=(0,r.useState)({}),[X,Z]=(0,r.useState)([]),[ee,et]=(0,r.useState)(0),[ea,er]=(0,r.useState)(""),[el,es]=(0,r.useState)(null),[en,ei]=(0,r.useState)(!1),[ec,eo]=(0,r.useState)([]),[ed,eu]=(0,r.useState)({}),[em,ep]=(0,r.useState)(d),ex=(0,r.useRef)(null),eg=(0,r.useRef)(null),ef=(0,r.useRef)(null),eb=(0,r.useRef)(null),ey=(0,r.useRef)(null),ew=(0,r.useMemo)(()=>c.slice(0,B),[B]),ej=B<c.length?c[B]:null,ev=(0,r.useMemo)(()=>((e,t,a)=>{if(!e.length)return[];let r=e.length>=i.length,l=r?i:e,s=r?null:l.at(-1),n=r&&a.length>0?a.filter(e=>"fallback"!==e.notes):a,c=n.length>0?n:N,o=[];for(let e=0;e<k.length;e+=1){let t=k[e],a=c.filter(e=>!!e?.word&&!!p(e.word,l)&&(!!t.includeShortWords||!(e.word.length<=2))&&(!!t.allowHighObscurity||"high"!==e.obscurityLevel)&&(!!t.includeNonRecommended||!1!==e.recommended));if(a.length>0&&(o=a,a.length>=18))break}if(0===o.length)return l.map(e=>`${e}${e}${e}`);let d=m(t+31*e.length),u=o.map(t=>({entry:t,score:((e,t,a,r=0)=>{var l;if(!e)return 0;let s=g[e.frequencyTier]??1,n=f[e.obscurityLevel]??1,i=y[e.complexity]??1,c=w[e.domain]??2,o=b[e.lengthGroup]??1,d=t.length,u=0;return d<=4&&"short"===e.lengthGroup?u=1:d<=7&&"medium"===e.lengthGroup?u=.5:d>=10&&"long"===e.lengthGroup&&(u=.4),3*s+2*n+i+c+o+u+(Array.isArray(l=e.typingFeatures)&&0!==l.length?l.reduce((e,t)=>e+(j[t]??0),0):0)+(a&&e.word.includes(a)?1:0)+(e.zipf??0)*.35+r})(t,e,s,.5*d())})).sort((e,t)=>t.score-e.score),h=Math.max(54,60),M=u.slice(0,Math.min(h,u.length)),_=((e,t)=>{if(!Array.isArray(e))return[];let a=[...e],r=m(t);for(let e=a.length-1;e>0;e-=1){let t=Math.floor(r()*(e+1));[a[e],a[t]]=[a[t],a[e]]}return a})(!s||r?M:M.some(e=>e.entry.word.includes(s))?M.filter(e=>e.entry.word.includes(s)):M,t).map(e=>e.entry);if(0===_.length)return e.map(e=>`${e}${e}${e}`);let{pattern:C,priority:W}=((e,t)=>{let a=e<=4?[{group:"medium",weight:.4},{group:"short",weight:.5},{group:"long",weight:.1}]:e<=8?[{group:"medium",weight:.5},{group:"short",weight:.3},{group:"long",weight:.2}]:e<=13?[{group:"medium",weight:.45},{group:"long",weight:.25},{group:"short",weight:.2},{group:"extra_long",weight:.1}]:[{group:"medium",weight:.4},{group:"long",weight:.3},{group:"short",weight:.15},{group:"extra_long",weight:.15}],r=((e,t)=>{let a={},r=0;if(e.forEach(({group:e,weight:l})=>{let s=Math.max(0,Math.round(l*t));a[e]=s,r+=s}),r>t){let l=r-t;for(let t=e.length-1;t>=0&&l>0;t-=1){let r=e[t].group,s=Math.min(l,a[r]);a[r]-=s,l-=s}}else if(r<t){let l=t-r;for(;l>0;)for(let t=0;t<e.length&&l>0;t+=1){let r=e[t].group;a[r]+=1,l-=1}}return a})(a,18),l=a.map(({group:e})=>({group:e,remaining:r[e]??0})),s=[];for(;s.length<18;){let e=!1;for(let t=0;t<l.length&&s.length<18;t+=1)l[t].remaining>0&&(s.push(l[t].group),l[t].remaining-=1,e=!0);if(!e)break}if(s.length<18){let e=l.map(e=>e.group).filter(Boolean),t=e.length?e:[...S],a=0;for(;s.length<18;){let e=t[a%t.length];s.push(e),a+=1}}return{pattern:s,priority:a.map(({group:e})=>e)}})(e.length,18),L=Array.from(new Set([...W,...S])),A=_.reduce((e,t)=>{let a=t.lengthGroup??x(t.word.length);return e[a]||(e[a]=[]),e[a].push(t),e},{}),$=e=>{let t=A[e];return t&&t.length?t.shift():null},T=()=>{for(let e=0;e<L.length;e+=1){let t=$(L[e]);if(t)return t}let e=Object.keys(A).filter(e=>!L.includes(e));for(let t=0;t<e.length;t+=1){let a=$(e[t]);if(a)return a}return null},R=[];for(let e=0;e<C.length&&R.length<18;e+=1){let t=$(C[e])??T();if(!t)break;R.push(t)}if(R.length<18){let t=Object.values(A).flat(),a=t.length>0?t:_.length>0?_:[],r=0;for(;R.length<18;)if(a.length>0)R.push(a[r%a.length]),r+=1;else{let t=s??e[0];if(!t)break;let a=`${t}${e[0]??t}${t}`;R.push(v(a))}}return R.slice(0,18).map(e=>e.word)})(ew,h,X),[X,h,ew]),eN=(0,r.useMemo)(()=>ev.join(" "),[ev]),ek=(0,r.useMemo)(()=>M(eN,C,Y),[eN,Y,C]),eS=(0,r.useMemo)(()=>((e,t)=>{let a=(e=>{if(!s.length)return null;let t=e%s.length;return s[t]})(e);if(!a)return{snippet:null,text:"",languages:[]};let r=l.find(e=>a.languages[e.id])?.id??l[0]?.id,n=a.languages[t]?t:r;return{snippet:a,text:a.languages[n]??"",activeLanguage:n}})(ee,em),[ee,em]),eM=eS.text,e_=(0,r.useMemo)(()=>M(eM,ea,ed),[ea,ed,eM]);(0,r.useEffect)(()=>{let e=!1;return(async()=>{try{let t,a=await fetch("/type-practice/full_dictionary_en.json");if(!a.ok)throw Error(`Failed to fetch dictionary (${a.status})`);let r=await a.json();if(e)return;let l=Array.isArray(r)?r.map(e=>{if(!e||"string"!=typeof e.word)return null;let t=e.word.toLowerCase().trim();return!t||t.length<2||t.length>12||!/^[a-z]+$/.test(t)||!1===e.recommended?null:{...e,word:t}}).filter(Boolean):[];Z((t=new Map,l.forEach(e=>{e?.word&&t.set(e.word,e)}),N.forEach(e=>{e?.word&&!t.has(e.word)&&t.set(e.word,e)}),Array.from(t.values())))}catch(e){console.error("Failed to load word metadata",e),Z(N)}})(),()=>{e=!0}},[]),(0,r.useEffect)(()=>{("lesson"===e||"coding"===e)&&ex.current?.focus()},[e,ee,en,h,R]),(0,r.useEffect)(()=>{let e=!1;try{let t=window.localStorage.getItem(o);if(t){let a=JSON.parse(t);"number"==typeof a.unlockedCount&&F(a.unlockedCount),Array.isArray(a.lessonHistory)&&z(a.lessonHistory),Array.isArray(a.codingHistory)&&eo(a.codingHistory),"number"==typeof a.successCounter&&V(a.successCounter),"number"==typeof a.lessonIndex&&_(a.lessonIndex),"number"==typeof a.targetWpm&&I(a.targetWpm),"number"==typeof a.lessonsPerUnlock&&U(a.lessonsPerUnlock),"number"==typeof a.codingIndex&&et(a.codingIndex),"string"==typeof a.codingLanguage&&ep(a.codingLanguage),e=!0}}catch(e){console.error("Failed to restore progress",e)}e||window.localStorage.removeItem(o)},[]),(0,r.useEffect)(()=>{try{window.localStorage.setItem(o,JSON.stringify({unlockedCount:B,lessonHistory:H,codingHistory:ec,successCounter:K,lessonIndex:h,targetWpm:q,lessonsPerUnlock:G,codingIndex:ee,codingLanguage:em}))}catch(e){console.error("Failed to persist progress",e)}},[H,h,G,K,q,B,ec,ee,em]),(0,r.useEffect)(()=>{if(!["lesson","coding"].includes(e)||"lesson"===e&&R||"coding"===e&&en)return;let t=e=>{"Tab"===e.key||e.metaKey||e.ctrlKey||e.altKey||document.activeElement!==ex.current&&ex.current?.focus()};return window.addEventListener("keydown",t,!0),()=>window.removeEventListener("keydown",t,!0)},[e,en,R]),(0,r.useEffect)(()=>()=>{eg.current&&clearTimeout(eg.current),ef.current&&clearTimeout(ef.current),eb.current&&clearTimeout(eb.current),ey.current&&clearTimeout(ey.current)},[]);let eC=(0,r.useCallback)(e=>{e<q?V(0):V(e=>{let t=e+1,a=B<c.length;return t>=G&&a?(F(e=>Math.min(e+1,c.length)),0):t})},[G,q,B]),eW=(0,r.useCallback)(()=>{F(c.length),V(0)},[]),eL=(0,r.useCallback)(()=>{F(n.length),V(0)},[]),eA=(0,r.useCallback)(()=>{W(""),$(null),D(!1),Q({})},[]),e$=(0,r.useCallback)(()=>{_(e=>e+1),eA()},[eA]),eT=(0,r.useCallback)(()=>{eg.current&&clearTimeout(eg.current),eg.current=setTimeout(()=>{eg.current=null,e$()},0)},[e$]),eR=(0,r.useCallback)(()=>{er(""),es(null),ei(!1),eu({})},[]),eP=(0,r.useCallback)(()=>{et(e=>e+1)},[]),eD=(0,r.useCallback)(()=>{eb.current&&clearTimeout(eb.current),eb.current=setTimeout(()=>{eb.current=null,eP()},200)},[eP]),eE=(0,r.useCallback)(()=>{ef.current&&clearTimeout(ef.current),L&&!R&&(ef.current=setTimeout(()=>{ef.current=null,eA()},45e3))},[eA,R,L]),eO=(0,r.useCallback)(()=>{ey.current&&clearTimeout(ey.current),el&&!en&&(ey.current=setTimeout(()=>{ey.current=null,eR()},6e4))},[eR,en,el]),eH=(0,r.useCallback)(()=>{if(R)return;let e=Date.now(),t=L??e,a=Math.max(e-t,1),r=Math.max(a/6e4,1/60),l=Math.max(0,Math.round(eN.length/5/r)),s=eN.length||1,n=Object.keys(Y).length,i=Math.max(0,Math.round((s-n)/s*100));D(!0),z(t=>[...t,{id:`lesson-${t.length+1}-${e}`,wpm:l,accuracy:i,letters:ew.join(""),text:eN,timestamp:new Date(e).toISOString(),durationMs:a,success:l>=q,mistakes:n}]),eC(l),eT()},[eC,R,eN,Y,eT,L,q,ew,C]),ez=(0,r.useCallback)(()=>{if(en||!eM)return;let e=Date.now(),t=el??e,a=Math.max(e-t,1),r=Math.max(a/6e4,1/60),l=Math.max(0,Math.round(eM.length/5/r)),s=eM.length||1,n=Object.keys(ed).length,i=Math.max(0,Math.round((s-n)/s*100)),c=eS.snippet;ei(!0),eo(t=>[...t,{id:`coding-${t.length+1}-${e}`,wpm:l,accuracy:i,language:eS.activeLanguage??em,snippetId:c?.id??"snippet",concept:c?.concept??"Snippet",text:eM,timestamp:new Date(e).toISOString(),durationMs:a,mistakes:n,focusCharacters:c?.focusCharacters??[],success:l>=q,mode:"coding"}]),eD()},[en,em,ed,el,eM,eD,eS.activeLanguage,eS.snippet,q]),eq=(0,r.useCallback)(e=>{Q(t=>t[e]?t:{...t,[e]:!0})},[]),eI=(0,r.useCallback)(e=>{eu(t=>t[e]?t:{...t,[e]:!0})},[]),eG=(0,r.useCallback)(t=>{let a="lesson"===e,r="coding"===e;if(!a&&!r||t.metaKey||t.ctrlKey||t.altKey||a&&R||r&&en)return;if("Backspace"===t.key){t.preventDefault(),a?W(e=>e.slice(0,-1)):er(e=>e.slice(0,-1));return}if("Tab"===t.key){if(!r)return;t.preventDefault(),er(e=>{if(en||e.length>=eM.length)return e;let t=A(eM,e.length);return t?eM.startsWith(t,e.length)?e+t:(eI(e.length),e):e});return}let l="Enter"===t.key?"\n":t.key;if(1===l.length||"\n"===l){if(a&&!L&&$(Date.now()),r&&!el&&es(Date.now()),t.preventDefault(),a)return void W(e=>{if(R||e.length>=eN.length)return e;let t=eN[e.length];return t?l===t?e+l:(eq(e.length),e):e});er(e=>{if(en||e.length>=eM.length)return e;let t=eM[e.length];if(!t)return e;if("\n"===l){if("\n"!==t)return eI(e.length),e;let a=A(eM,e.length+1);return e+"\n"+a}return l===t?e+l:(eI(e.length),e)})}},[e,en,eM,el,R,eN,eI,eq,L]);(0,r.useEffect)(()=>{!R&&eN&&C===eN&&eH()},[eH,R,eN,C]),(0,r.useEffect)(()=>{!en&&eM&&ea===eM&&ez()},[en,ea,eM,ez]),(0,r.useEffect)(()=>(eE(),()=>{ef.current&&clearTimeout(ef.current)}),[eE,C]),(0,r.useEffect)(()=>(eO(),()=>{ey.current&&clearTimeout(ey.current)}),[eO,ea]),(0,r.useEffect)(()=>{eR()},[eR,ee,em]);let eU="lesson"!==e&&"coding"!==e||"lesson"===e&&R||"coding"===e&&en;return(0,t.jsx)("div",{className:"min-h-screen bg-slate-950 px-4 py-10 text-slate-100",children:(0,t.jsxs)("div",{className:"mx-auto flex w-full max-w-6xl flex-col items-center gap-8",children:[(0,t.jsx)("nav",{className:"flex flex-wrap justify-center gap-3",children:u.map(r=>(0,t.jsx)(T,{isActive:e===r.id,label:r.label,onClick:()=>a(r.id)},r.id))}),"lesson"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E,{unlockedCount:B,nextLetter:ej,history:H,targetWpm:q}),(0,t.jsx)(P,{highlightedPrompt:ek,lessonText:eN,onClick:()=>ex.current?.focus()}),(0,t.jsx)("p",{className:"text-center text-xs text-slate-400",children:"Typing is captured automatically; press Backspace to fix mistakes and keep eyes on the words."})]}),"coding"===e&&(0,t.jsx)(O,{snippetPayload:eS,highlightedPrompt:e_,codingComplete:en,onNext:eP,codingHistory:ec,codingLanguage:em,codingIndex:ee,codingText:eM}),(0,t.jsx)("input",{ref:ex,spellCheck:!1,value:"",onChange:()=>{},onKeyDown:eG,className:"absolute left-0 top-0 h-px w-px opacity-0","aria-hidden":!0,disabled:eU}),"profile"===e&&(0,t.jsx)(J,{history:H,unlockedLetters:ew,nextLetter:ej,successCounter:K,lessonsPerUnlock:G,targetWpm:q}),"settings"===e&&(0,t.jsx)(eh,{targetWpm:q,setTargetWpm:I,lessonsPerUnlock:G,setLessonsPerUnlock:U,unlockedLetters:ew,nextLetter:ej,codingLanguage:em,setCodingLanguage:ep,onUnlockAllLetters:eW,onResetLetterProgress:eL})]})})}function T(e){let r,l=(0,a.c)(4),{isActive:s,label:n,onClick:i}=e,c=`rounded-full px-5 py-2 text-sm font-medium transition ${s?"bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/40":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;return l[0]!==n||l[1]!==i||l[2]!==c?(r=(0,t.jsx)("button",{type:"button",onClick:i,className:c,children:n}),l[0]=n,l[1]=i,l[2]=c,l[3]=r):r=l[3],r}let R=23;function P(e){let r,l,s,n,i,c=(0,a.c)(21),{highlightedPrompt:o,lessonText:d,onClick:u}=e;if(c[0]!==o||c[1]!==d){e:{let e;if(!d){let e;c[3]!==o?(e=o.length>0?[o]:[],c[3]=o,c[4]=e):e=c[4],r=e;break e}let t=((e,t=R)=>{if(!e)return[];let a=[],r=0;for(;r<e.length;){let l=Math.min(r+t,e.length);if(l<e.length&&" "!==e[l]){let t=e.slice(r,l).lastIndexOf(" ");t>0&&(l=r+t)}for(l===r&&(l=Math.min(r+t,e.length)),a.push({start:r,end:l}),r=l;r<e.length&&" "===e[r];)r+=1}return a})(d);if(0===t.length){let e;c[5]!==o?(e=[o],c[5]=o,c[6]=e):e=c[6],r=e;break e}c[7]!==o?(e=e=>{let{start:t,end:a}=e;return o.slice(t,a)},c[7]=o,c[8]=e):e=c[8],r=t.map(e)}c[0]=o,c[1]=d,c[2]=r}else r=c[2];let m=r;c[9]!==m?(l=m.reduce(D,0),c[9]=m,c[10]=l):l=c[10];let h=Math.max(1,Math.min(R,l));if(c[11]!==h||c[12]!==m){let e;c[14]!==h?(e=(e,a)=>(0,t.jsxs)("div",{className:"grid w-full justify-center gap-3 text-center font-mono text-4xl tracking-tight text-white sm:text-5xl",style:{gridTemplateColumns:`repeat(${h}, minmax(0, 1fr))`},children:[e.map((e,r)=>(0,t.jsx)("span",{className:"flex min-h-[3.5rem] items-center justify-center px-2 sm:min-h-[4.5rem]",children:e},`prompt-char-${a}-${r}`)),Array.from({length:Math.max(0,h-e.length)}).map((e,r)=>(0,t.jsx)("span",{className:"pointer-events-none flex min-h-[3.5rem] select-none items-center justify-center px-2 text-transparent sm:min-h-[4.5rem]","aria-hidden":!0,children:" "},`prompt-filler-${a}-${r}`))]},`prompt-line-${a}`),c[14]=h,c[15]=e):e=c[15],s=m.map(e),c[11]=h,c[12]=m,c[13]=s}else s=c[13];return c[16]!==s?(n=(0,t.jsx)("div",{className:"relative flex w-full max-w-7xl flex-col items-center gap-8",children:s}),c[16]=s,c[17]=n):n=c[17],c[18]!==u||c[19]!==n?(i=(0,t.jsx)("section",{className:"relative flex min-h-[60vh] w-full items-center justify-center rounded-3xl border border-white/5 bg-slate-900/40 p-16 shadow-2xl shadow-black/40",onClick:u,children:n}),c[18]=u,c[19]=n,c[20]=i):i=c[20],i}function D(e,t){return Math.max(e,t.length)}function E(e){let r,l,s,n=(0,a.c)(10),{unlockedCount:i,nextLetter:o,history:d,targetWpm:u}=e,m=d.at(-1)?.wpm??0;n[0]!==i?(r=c.at(Math.max(i-1,0))??null,n[0]=i,n[1]=r):r=n[1];let h=r;return n[2]!==h||n[3]!==m||n[4]!==o||n[5]!==u||n[6]!==i?(l=c.map((e,a)=>{if(a<i){let a=e===h;return(0,t.jsx)("span",{className:`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-emerald-300 bg-emerald-500 text-slate-900 ${a?"font-black ring-2 ring-emerald-200":""}`,title:a?`Current focus \xb7 Target WPM ${u}`:void 0,children:e},e)}return e===o?(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-amber-300 bg-amber-300/30 text-amber-200",title:`Next unlock \xb7 Need ${Math.max(u-m,0)} WPM boost`,children:e},e):(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-white/10 bg-slate-800 text-slate-500",children:e},e)}),n[2]=h,n[3]=m,n[4]=o,n[5]=u,n[6]=i,n[7]=l):l=n[7],n[8]!==l?(s=(0,t.jsx)("div",{className:"flex w-full flex-wrap justify-center gap-2 rounded-3xl border border-white/5 bg-slate-900/60 p-4",children:l}),n[8]=l,n[9]=s):s=n[9],s}function O(e){let r,l,n,i,c,o,d,u,m,h,p,x,g,f,b,y,w,j,v,N,k,S,M=(0,a.c)(54),{snippetPayload:_,highlightedPrompt:W,codingComplete:A,onNext:$,codingHistory:T,codingLanguage:R,codingIndex:P,codingText:D}=e,E=_.snippet;M[0]!==T?(r=(e=>{if(!Array.isArray(e)||0===e.length)return{total:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,languages:[],wpmStreak:0,accuracyStreak:0,totalMinutes:0};let t=e.reduce((e,t)=>(e.wpm+=t.wpm??0,e.accuracy+=t.accuracy??0,e.duration+=t.durationMs??0,e),{wpm:0,accuracy:0,duration:0}),a=e.length,r=Array.from(new Set(e.map(e=>e.language))).sort();return{total:a,avgWpm:Math.round(t.wpm/a),avgAccuracy:Math.round(t.accuracy/a),bestWpm:Math.max(...e.map(e=>e.wpm??0)),bestAccuracy:Math.max(...e.map(e=>e.accuracy??0)),languages:r,wpmStreak:C(e,"wpm"),accuracyStreak:C(e,"accuracy"),totalMinutes:Math.round(t.duration/6e4*10)/10}})(T),M[0]=T,M[1]=r):r=M[1];let O=r,z=s.length||1;M[2]!==E?.focusCharacters?(l=E?.focusCharacters??[],M[2]=E?.focusCharacters,M[3]=l):l=M[3];let q=l,G=_.activeLanguage??R;M[4]!==G?(n=L(G),M[4]=G,M[5]=n):n=M[5];let U=n;M[6]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-400",children:"Coding mode"}),M[6]=i):i=M[6];let K=E?.concept??"Snippet practice";M[7]!==K?(c=(0,t.jsx)("p",{className:"text-xl font-semibold text-white",children:K}),M[7]=K,M[8]=c):c=M[8];let J=E?.description??"Cycle through structured punctuation and patterns.";M[9]!==J?(o=(0,t.jsx)("p",{className:"text-sm text-slate-400",children:J}),M[9]=J,M[10]=o):o=M[10],M[11]!==c||M[12]!==o?(d=(0,t.jsxs)("div",{children:[i,c,o]}),M[11]=c,M[12]=o,M[13]=d):d=M[13];let V=P%z+1;M[14]!==V?(u=(0,t.jsxs)("p",{className:"font-semibold text-white",children:["Snippet ",V," / ",z]}),M[14]=V,M[15]=u):u=M[15],M[16]!==U?(m=(0,t.jsx)("p",{children:U}),M[16]=U,M[17]=m):m=M[17],M[18]!==q?(h=q.join(" ")||"symbols",M[18]=q,M[19]=h):h=M[19],M[20]!==h?(p=(0,t.jsxs)("p",{children:["Focus: ",h]}),M[20]=h,M[21]=p):p=M[21],M[22]!==u||M[23]!==m||M[24]!==p?(x=(0,t.jsxs)("div",{className:"text-right text-xs text-slate-400",children:[u,m,p]}),M[22]=u,M[23]=m,M[24]=p,M[25]=x):x=M[25],M[26]!==x||M[27]!==d?(g=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[d,x]}),M[26]=x,M[27]=d,M[28]=g):g=M[28],M[29]!==D||M[30]!==W?(f=(0,t.jsx)("div",{className:"mt-6 flex w-full justify-center",children:(0,t.jsx)("div",{className:"w-full max-w-4xl",children:(0,t.jsx)(H,{highlightedPrompt:W,text:D})})}),M[29]=D,M[30]=W,M[31]=f):f=M[31],M[32]===Symbol.for("react.memo_cache_sentinel")?(b=(0,t.jsx)("p",{children:"Enter inserts a new line with matching indentation. Tab inserts the next block of spaces."}),M[32]=b):b=M[32],M[33]!==$?(y=(0,t.jsxs)("div",{className:"mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400",children:[b,(0,t.jsx)("button",{type:"button",onClick:$,className:"rounded-full border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10",children:"Next snippet"})]}),M[33]=$,M[34]=y):y=M[34];let Y=P%Math.max(z,1);return M[35]!==Y?(w=(0,t.jsx)(B,{currentIndex:Y}),M[35]=Y,M[36]=w):w=M[36],M[37]!==T?(j=T.at(-1)??null,M[37]=T,M[38]=j):j=M[38],M[39]!==A||M[40]!==O||M[41]!==j?(v=(0,t.jsx)(I,{summary:O,lastEntry:j,complete:A}),M[39]=A,M[40]=O,M[41]=j,M[42]=v):v=M[42],M[43]!==w||M[44]!==v?(N=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]",children:[w,v]}),M[43]=w,M[44]=v,M[45]=N):N=M[45],M[46]!==T?(k=(0,t.jsx)(F,{history:T}),M[46]=T,M[47]=k):k=M[47],M[48]!==g||M[49]!==f||M[50]!==y||M[51]!==N||M[52]!==k?(S=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[g,f,y,N,k]}),M[48]=g,M[49]=f,M[50]=y,M[51]=N,M[52]=k,M[53]=S):S=M[53],S}function H(e){let r,l,s,n,i,c,o=(0,a.c)(15),{highlightedPrompt:d,text:u}=e;e:{let e;if(!u){let e;o[0]===Symbol.for("react.memo_cache_sentinel")?(e=[[]],o[0]=e):e=o[0],r=e;break e}if(o[1]!==d||o[2]!==u){let a=u.split("\n"),r=0;e=a.map((e,a)=>{let l=d.slice(r,r+e.length);return((r+=e.length)<d.length&&(r+=1),0===e.length)?[(0,t.jsx)("span",{className:"text-slate-700",children:" "},`empty-${a}`)]:l}),o[1]=d,o[2]=u,o[3]=e}else e=o[3];r=e}let m=r;return o[4]!==m?(l=m.map(q),o[4]=m,o[5]=l):l=o[5],o[6]!==l?(s=(0,t.jsx)("pre",{className:"select-none border-r border-white/5 bg-slate-900/60 px-4 py-5 text-right text-xs font-semibold leading-6 text-slate-500",children:l}),o[6]=l,o[7]=s):s=o[7],o[8]!==m?(n=m.map(z),o[8]=m,o[9]=n):n=o[9],o[10]!==n?(i=(0,t.jsx)("pre",{className:"flex-1 overflow-auto px-6 py-5 font-mono text-sm leading-6 text-white",children:n}),o[10]=n,o[11]=i):i=o[11],o[12]!==s||o[13]!==i?(c=(0,t.jsx)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/60",children:(0,t.jsxs)("div",{className:"flex",children:[s,i]})}),o[12]=s,o[13]=i,o[14]=c):c=o[14],c}function z(e,a){return(0,t.jsx)("div",{className:"whitespace-pre-wrap",children:e},`code-${a}`)}function q(e,a){return(0,t.jsx)("span",{className:"block",children:a+1},`line-${a}`)}function I(e){let r,l,s,n,i=(0,a.c)(18),{summary:c,lastEntry:o,complete:d}=e;i[0]!==c.languages?(r=c.languages.length>0?c.languages.map(G).join(", "):"—",i[0]=c.languages,i[1]=r):r=i[1];let u=r;i[2]!==o?(l=o?L(o.language):null,i[2]=o,i[3]=l):l=i[3];let m=l;return i[4]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Session stats"}),i[4]=s):s=i[4],i[5]!==d||i[6]!==u||i[7]!==o||i[8]!==m||i[9]!==c.accuracyStreak||i[10]!==c.avgAccuracy||i[11]!==c.avgWpm||i[12]!==c.bestAccuracy||i[13]!==c.bestWpm||i[14]!==c.total||i[15]!==c.totalMinutes||i[16]!==c.wpmStreak?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[s,0===c.total?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete your first snippet to build coding momentum."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:[(0,t.jsx)(U,{label:"Avg WPM",value:c.avgWpm,detail:`${c.total} snippets`}),(0,t.jsx)(U,{label:"Avg accuracy",value:`${c.avgAccuracy}%`,detail:`${c.totalMinutes} min`}),(0,t.jsx)(U,{label:"Top WPM",value:c.bestWpm,detail:"personal record"}),(0,t.jsx)(U,{label:"Top accuracy",value:`${c.bestAccuracy}%`,detail:"cleanest run"})]}),(0,t.jsxs)("div",{className:"mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-xs text-slate-400",children:[(0,t.jsx)("p",{className:"font-semibold uppercase tracking-[0.2em] text-slate-300",children:"Languages covered"}),(0,t.jsx)("p",{className:"mt-1 text-sm text-white",children:u}),(0,t.jsxs)("p",{className:"mt-2",children:["Improvement streaks: ",(0,t.jsxs)("span",{className:"text-emerald-300",children:[c.wpmStreak," wpm"]})," /"," ",(0,t.jsxs)("span",{className:"text-sky-300",children:[c.accuracyStreak,"% accuracy"]})]}),o?(0,t.jsxs)("p",{className:"mt-1 text-xs text-slate-400",children:["Last: ",m," · ",o.wpm," wpm / ",o.accuracy,"%"]}):null,d?(0,t.jsx)("p",{className:"mt-2 text-emerald-300",children:"Snippet complete — auto-advancing..."}):null]})]})]}),i[5]=d,i[6]=u,i[7]=o,i[8]=m,i[9]=c.accuracyStreak,i[10]=c.avgAccuracy,i[11]=c.avgWpm,i[12]=c.bestAccuracy,i[13]=c.bestWpm,i[14]=c.total,i[15]=c.totalMinutes,i[16]=c.wpmStreak,i[17]=n):n=i[17],n}function G(e){return L(e)}function U(e){let r,l,s,n,i=(0,a.c)(10),{label:c,value:o,detail:d}=e;return i[0]!==c?(r=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=r):r=i[1],i[2]!==o?(l=(0,t.jsx)("p",{className:"text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=l):l=i[3],i[4]!==d?(s=(0,t.jsx)("p",{className:"text-xs text-slate-400",children:d}),i[4]=d,i[5]=s):s=i[5],i[6]!==r||i[7]!==l||i[8]!==s?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3",children:[r,l,s]}),i[6]=r,i[7]=l,i[8]=s,i[9]=n):n=i[9],n}function B(e){let r,l,n,i=(0,a.c)(5),{currentIndex:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Snippet library"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"curriculum"})]}),i[0]=r):r=i[0],i[1]!==c?(l=s.map((e,a)=>(0,t.jsxs)("li",{className:`rounded-2xl border px-4 py-3 ${a===c?"border-emerald-400 bg-emerald-400/10 text-white":"border-white/10 bg-slate-900/70 text-slate-200"}`,children:[(0,t.jsx)("p",{className:"font-semibold",children:e.concept}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.description}),(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:["Focus: ",e.focusCharacters.join(" ")]})]},e.id)),i[1]=c,i[2]=l):l=i[2],i[3]!==l?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[r,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:l})]}),i[3]=l,i[4]=n):n=i[4],n}function F(e){let r,l,s,n,i=(0,a.c)(8),{history:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent coding sessions"}),i[0]=r):r=i[0],i[1]!==c.length?(l=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[r,(0,t.jsxs)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:[c.length," total"]})]}),i[1]=c.length,i[2]=l):l=i[2],i[3]!==c?(s=0===c.length?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete snippets to build up your coding journal."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:c.slice(-6).reverse().map(K)}),i[3]=c,i[4]=s):s=i[4],i[5]!==l||i[6]!==s?(n=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[l,s]}),i[5]=l,i[6]=s,i[7]=n):n=i[7],n}function K(e){let a=L(e.language);return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.concept}),(0,t.jsxs)("p",{className:"text-xs text-slate-400",children:[a," · ",new Date(e.timestamp).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:h(e.durationMs)})]})]},e.id)}function J(e){let l,s,n,i,c,o,d,u,m,h,p,x,g,f,b,y,w,j,v,N,k,S,M,_,L,A,$,T,R,P,D,E,O,H,z,q,I,G,U,B,F,K,J,el,es=(0,a.c)(150),{history:en,unlockedLetters:ei,nextLetter:ec,successCounter:ed,lessonsPerUnlock:em,targetWpm:eh}=e,[ep,ex]=(0,r.useState)("all"),[eg,ef]=(0,r.useState)(3),[eb,ey]=(0,r.useState)(!0);es[0]!==en?(l=en.map(ee),es[0]=en,es[1]=l):l=es[1];let ew=l;if(es[2]!==ew||es[3]!==ei){let e;e=new Map,ei.forEach(t=>{e.set(t.toLowerCase(),0)}),ew.forEach(t=>{new Set((t.text??"").toLowerCase().replace(/[^a-z]/g,"").split("")).forEach(t=>{t&&e.set(t,(e.get(t)??0)+1)})}),s=Array.from(e.entries()).map(([e,t])=>({letter:e,count:t})).sort((e,t)=>e.letter>t.letter?1:-1),es[2]=ew,es[3]=ei,es[4]=s}else s=es[4];let ej=s;es[5]!==ej||es[6]!==ep?(n=()=>{"all"===ep||ej.some(e=>e.letter===ep)||ex("all")},i=[ej,ep],es[5]=ej,es[6]=ep,es[7]=n,es[8]=i):(n=es[7],i=es[8]),(0,r.useEffect)(n,i);e:{let e;if("all"===ep){c=ew;break e}if(es[9]!==ew||es[10]!==ep){let t=ep.toLowerCase();e=ew.filter(e=>{let a=(e.letters??"").toLowerCase(),r=(e.text??"").toLowerCase();return a.includes(t)||r.includes(t)}),es[9]=ew,es[10]=ep,es[11]=e}else e=es[11];c=e}let ev=c;t:{let e,t,a,r,l,s,n,i,c,d,u;if(0===ew.length){let e;es[12]===Symbol.for("react.memo_cache_sentinel")?(e={totalLessons:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,successRate:0,lessonsAboveTarget:0,totalWords:0,totalMinutes:0,wpmStreak:0,accuracyStreak:0,lastSevenAvgWpm:0},es[12]=e):e=es[12],o=e;break t}es[13]!==ew?(e=ew.reduce(Z,{wpm:0,accuracy:0,words:0,duration:0}),es[13]=ew,es[14]=e):e=es[14];let m=e,h=ew.length;es[15]!==ew?(t=Math.max(...ew.map(X)),es[15]=ew,es[16]=t):t=es[16];let p=t;es[17]!==ew?(a=Math.max(...ew.map(Q)),es[17]=ew,es[18]=a):a=es[18];let x=a;if(es[19]!==ew||es[20]!==eh){let e;es[22]!==eh?(e=e=>e.wpm>=eh,es[22]=eh,es[23]=e):e=es[23],r=ew.filter(e),es[19]=ew,es[20]=eh,es[21]=r}else r=es[21];let g=r.length;if(es[24]!==ew){let e=ew.slice(-7);l=e.length>0?Math.round(e.reduce(Y,0)/e.length):0,es[24]=ew,es[25]=l}else l=es[25];let f=l;es[26]!==h||es[27]!==m.wpm?(s=Math.round(m.wpm/h),es[26]=h,es[27]=m.wpm,es[28]=s):s=es[28],es[29]!==h||es[30]!==m.accuracy?(n=Math.round(m.accuracy/h),es[29]=h,es[30]=m.accuracy,es[31]=n):n=es[31],es[32]!==g||es[33]!==h?(i=Math.round(g/h*100),es[32]=g,es[33]=h,es[34]=i):i=es[34];let b=m.words,y=Math.round(m.duration/6e4*10)/10;es[35]!==ew?(c=C(ew,"wpm"),es[35]=ew,es[36]=c):c=es[36],es[37]!==ew?(d=C(ew,"accuracy"),es[37]=ew,es[38]=d):d=es[38],es[39]!==x||es[40]!==p||es[41]!==f||es[42]!==g||es[43]!==s||es[44]!==n||es[45]!==i||es[46]!==y||es[47]!==c||es[48]!==d||es[49]!==h||es[50]!==m.words?(u={totalLessons:h,avgWpm:s,avgAccuracy:n,bestWpm:p,bestAccuracy:x,successRate:i,lessonsAboveTarget:g,totalWords:b,totalMinutes:y,wpmStreak:c,accuracyStreak:d,lastSevenAvgWpm:f},es[39]=x,es[40]=p,es[41]=f,es[42]=g,es[43]=s,es[44]=n,es[45]=i,es[46]=y,es[47]=c,es[48]=d,es[49]=h,es[50]=m.words,es[51]=u):u=es[51],o=u}let eN=o;if(es[52]!==ew)d=W.map(e=>({...e,count:ew.filter(t=>t.accuracy>=e.min&&t.accuracy<e.max).length})),es[52]=ew,es[53]=d;else d=es[53];let ek=d,eS=1===eg?"Off":`${eg} lessons`;es[54]===Symbol.for("react.memo_cache_sentinel")?(u=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Letters"}),es[54]=u):u=es[54],es[55]!==ei?(m=ei.join(", "),es[55]=ei,es[56]=m):m=es[56],es[57]!==m?(h=(0,t.jsxs)("div",{children:[u,(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:m})]}),es[57]=m,es[58]=h):h=es[58],es[59]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)("p",{className:"text-slate-400",children:"Next unlock"}),es[59]=p):p=es[59];let eM=ec??"All characters unlocked";es[60]!==eM?(x=(0,t.jsx)("p",{className:"text-white font-semibold",children:eM}),es[60]=eM,es[61]=x):x=es[61],es[62]!==em||es[63]!==ec||es[64]!==ed?(g=ec?(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:[Math.max(em-ed,0)," high-WPM lessons to go"]}):null,es[62]=em,es[63]=ec,es[64]=ed,es[65]=g):g=es[65],es[66]!==x||es[67]!==g?(f=(0,t.jsxs)("div",{className:"text-right text-sm",children:[p,x,g]}),es[66]=x,es[67]=g,es[68]=f):f=es[68],es[69]!==h||es[70]!==f?(b=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[h,f]}),es[69]=h,es[70]=f,es[71]=b):b=es[71],es[72]!==eN.totalLessons?(y=(0,t.jsx)(et,{label:"Lessons",value:eN.totalLessons,hint:"lifetime"}),es[72]=eN.totalLessons,es[73]=y):y=es[73],es[74]!==eh?(w=(0,t.jsx)(et,{label:"Target WPM",value:eh,hint:"goal"}),es[74]=eh,es[75]=w):w=es[75];let e_=`${eN.successRate}%`;es[76]!==e_?(j=(0,t.jsx)(et,{label:"Success Rate",value:e_,hint:"≥ target"}),es[76]=e_,es[77]=j):j=es[77];let eC=eN.lastSevenAvgWpm?`last 7: ${eN.lastSevenAvgWpm}`:"last 7: —";es[78]!==eN.avgWpm||es[79]!==eC?(v=(0,t.jsx)(et,{label:"Avg WPM",value:eN.avgWpm,hint:eC}),es[78]=eN.avgWpm,es[79]=eC,es[80]=v):v=es[80];let eW=`${eN.avgAccuracy}%`,eL=`${eN.totalWords} words`;es[81]!==eW||es[82]!==eL?(N=(0,t.jsx)(et,{label:"Avg Accuracy",value:eW,hint:eL}),es[81]=eW,es[82]=eL,es[83]=N):N=es[83],es[84]!==eN.bestWpm?(k=(0,t.jsx)(et,{label:"Top WPM",value:eN.bestWpm,hint:"fastest lesson"}),es[84]=eN.bestWpm,es[85]=k):k=es[85];let eA=`${eN.bestAccuracy}%`;es[86]!==eA?(S=(0,t.jsx)(et,{label:"Top Accuracy",value:eA,hint:"cleanest lesson"}),es[86]=eA,es[87]=S):S=es[87];let e$=`${eN.wpmStreak} / ${eN.accuracyStreak}`;es[88]!==e$?(M=(0,t.jsx)(et,{label:"Improvement streaks",value:e$,hint:"WPM / accuracy"}),es[88]=e$,es[89]=M):M=es[89],es[90]!==y||es[91]!==w||es[92]!==j||es[93]!==v||es[94]!==N||es[95]!==k||es[96]!==S||es[97]!==M?(_=(0,t.jsxs)("div",{className:"mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[y,w,j,v,N,k,S,M]}),es[90]=y,es[91]=w,es[92]=j,es[93]=v,es[94]=N,es[95]=k,es[96]=S,es[97]=M,es[98]=_):_=es[98],es[99]===Symbol.for("react.memo_cache_sentinel")?(L=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Letter focus"}),es[99]=L):L=es[99],es[100]===Symbol.for("react.memo_cache_sentinel")?(A=e=>ex(e),es[100]=A):A=es[100],es[101]!==ej||es[102]!==ep?($=(0,t.jsxs)("div",{className:"min-w-[220px] flex-1",children:[L,(0,t.jsx)(ea,{letters:ej,selectedLetter:ep,onSelect:A})]}),es[101]=ej,es[102]=ep,es[103]=$):$=es[103],es[104]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsx)("span",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Smoothing"}),es[104]=T):T=es[104];let eT=0===ew.length;return es[105]===Symbol.for("react.memo_cache_sentinel")?(R=e=>ef(Number(e.target.value)),es[105]=R):R=es[105],es[106]!==eg||es[107]!==eT?(P=(0,t.jsx)("input",{type:"range",min:1,max:9,step:2,value:eg,disabled:eT,onChange:R,className:"accent-emerald-400"}),es[106]=eg,es[107]=eT,es[108]=P):P=es[108],es[109]!==eS?(D=(0,t.jsx)("span",{className:"text-xs text-slate-400",children:eS}),es[109]=eS,es[110]=D):D=es[110],es[111]!==P||es[112]!==D?(E=(0,t.jsxs)("label",{className:"flex flex-col gap-2 sm:w-48",children:[T,P,D]}),es[111]=P,es[112]=D,es[113]=E):E=es[113],es[114]===Symbol.for("react.memo_cache_sentinel")?(O=e=>ey(e.target.checked),es[114]=O):O=es[114],es[115]!==eb?(H=(0,t.jsxs)("label",{className:"flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:[(0,t.jsx)("input",{type:"checkbox",checked:eb,onChange:O,className:"h-4 w-4 rounded border border-slate-600 bg-slate-900 text-emerald-400 accent-emerald-400"}),"Trendline"]}),es[115]=eb,es[116]=H):H=es[116],es[117]!==E||es[118]!==H?(z=(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-4 text-sm text-slate-200 sm:flex-row sm:items-end sm:justify-end",children:[E,H]}),es[117]=E,es[118]=H,es[119]=z):z=es[119],es[120]!==$||es[121]!==z?(q=(0,t.jsxs)("div",{className:"flex flex-wrap gap-6",children:[$,z]}),es[120]=$,es[121]=z,es[122]=q):q=es[122],es[123]!==ew.length||es[124]!==ev||es[125]!==ep||es[126]!==eb||es[127]!==eg||es[128]!==eh?(I=(0,t.jsx)(er,{lessons:ev,smoothingWindow:eg,showTrendline:eb,totalLessons:ew.length,targetWpm:eh,selectedLetter:ep}),es[123]=ew.length,es[124]=ev,es[125]=ep,es[126]=eb,es[127]=eg,es[128]=eh,es[129]=I):I=es[129],es[130]!==q||es[131]!==I?(G=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[q,I]}),es[130]=q,es[131]=I,es[132]=G):G=es[132],es[133]!==ek||es[134]!==eN.totalLessons?(U=(0,t.jsx)(eo,{buckets:ek,totalLessons:eN.totalLessons}),es[133]=ek,es[134]=eN.totalLessons,es[135]=U):U=es[135],es[136]!==eN?(B=(0,t.jsx)(eu,{summary:eN}),es[136]=eN,es[137]=B):B=es[137],es[138]!==U||es[139]!==B?(F=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-2",children:[U,B]}),es[138]=U,es[139]=B,es[140]=F):F=es[140],es[141]===Symbol.for("react.memo_cache_sentinel")?(K=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent lessons"}),es[141]=K):K=es[141],es[142]!==en?(J=(0,t.jsxs)("div",{className:"mt-8",children:[K,0===en.length?(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete a lesson to see stats."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:en.slice(-6).reverse().map(V)})]}),es[142]=en,es[143]=J):J=es[143],es[144]!==b||es[145]!==_||es[146]!==G||es[147]!==F||es[148]!==J?(el=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[b,_,G,F,J]}),es[144]=b,es[145]=_,es[146]=G,es[147]=F,es[148]=J,es[149]=el):el=es[149],el}function V(e){return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.text}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:new Date(e.timestamp).toLocaleString()})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:h(e.durationMs)}),(0,t.jsxs)("p",{className:"text-xs text-rose-400",children:[e.mistakes??0," mistakes"]})]})]},e.id)}function Y(e,t){return e+t.wpm}function Q(e){return e.accuracy??0}function X(e){return e.wpm??0}function Z(e,t){var a;return e.wpm=e.wpm+(t.wpm??0),e.accuracy=e.accuracy+(t.accuracy??0),e.words=e.words+((a=t.text)?a.trim().split(/\s+/).filter(Boolean).length:0),e.duration=e.duration+(t.durationMs??0),e}function ee(e,t){return{...e,lessonNumber:t+1}}function et(e){let r,l,s,n,i=(0,a.c)(10),{label:c,value:o,hint:d}=e;return i[0]!==c?(r=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=r):r=i[1],i[2]!==o?(l=(0,t.jsx)("p",{className:"mt-2 text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=l):l=i[3],i[4]!==d?(s=d?(0,t.jsx)("p",{className:"text-xs text-slate-500",children:d}):null,i[4]=d,i[5]=s):s=i[5],i[6]!==r||i[7]!==l||i[8]!==s?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-5 text-center",children:[r,l,s]}),i[6]=r,i[7]=l,i[8]=s,i[9]=n):n=i[9],n}function ea(e){let r,l,s,n,i=(0,a.c)(16),{letters:c,selectedLetter:o,onSelect:d}=e;if(!c.length){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:"Complete a lesson to unlock insights."}),i[0]=e):e=i[0],e}i[1]!==d?(r=()=>d("all"),i[1]=d,i[2]=r):r=i[2];let u=`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${"all"===o?"bg-emerald-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;if(i[3]!==r||i[4]!==u?(l=(0,t.jsx)("button",{type:"button",onClick:r,className:u,children:"All"}),i[3]=r,i[4]=u,i[5]=l):l=i[5],i[6]!==c||i[7]!==d||i[8]!==o){let e;i[10]!==d||i[11]!==o?(e=e=>(0,t.jsxs)("button",{type:"button",onClick:()=>d(e.letter),className:`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${o===e.letter?"bg-sky-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:[e.letter,(0,t.jsx)("span",{className:"ml-1 text-[10px] text-slate-400",children:e.count})]},e.letter),i[10]=d,i[11]=o,i[12]=e):e=i[12],s=c.map(e),i[6]=c,i[7]=d,i[8]=o,i[9]=s}else s=i[9];return i[13]!==l||i[14]!==s?(n=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-2",children:[l,s]}),i[13]=l,i[14]=s,i[15]=n):n=i[15],n}function er(e){let r,l,s,n,i,c,o,d,u,m,h,p,x,g,f,b,y,w,j,v,N,k,S,M,C,W,L,A,$,T,R,P,D,E,O=(0,a.c)(97),{lessons:H,smoothingWindow:z,showTrendline:q,totalLessons:I,targetWpm:G,selectedLetter:U}=e;if(0===I){let e;return O[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-6 text-sm text-slate-400",children:"Complete a lesson to unlock progress visualizations."}),O[0]=e):e=O[0],e}if(!H.length){let e,a;return O[1]!==U?(e=U.toUpperCase(),O[1]=U,O[2]=e):e=O[2],O[3]!==e?(a=(0,t.jsxs)("p",{className:"mt-6 text-sm text-slate-400",children:['No lessons yet for the letter "',e,'". Keep practicing to fill this chart.']}),O[3]=e,O[4]=a):a=O[4],a}if(O[5]!==H||O[6]!==q||O[7]!==z||O[8]!==G){let e,t,a,d=H.map(ec),u=H.map(ei),m=_(d,z),h=_(u,z),p=H.map((e,t)=>({lessonNumber:e.lessonNumber,wpm:m[t]??e.wpm,accuracy:h[t]??e.accuracy,rawWpm:e.wpm,rawAccuracy:e.accuracy})),x=H[0]?.lessonNumber??1,g=Math.max(H.at(-1)?.lessonNumber??x,x);i=Math.max(G+15,...p.map(en),40),O[16]!==g||O[17]!==x?(e=e=>g===x?450:60+(e-x)/(g-x)*780,O[16]=g,O[17]=x,O[18]=e):e=O[18],n=e,O[19]!==i?(t=e=>280-Math.max(0,e)/(i||1)*240,O[19]=i,O[20]=t):t=O[20],c=t,o=es,O[21]!==n?(a=(e,t,a)=>0===e.length?"":e.map((e,r)=>{let l=n(e.lessonNumber).toFixed(2),s=a(e[t]).toFixed(2);return`${0===r?"M":"L"}${l},${s}`}).join(" "),O[21]=n,O[22]=a):a=O[22];let f=a;s=f(p,"wpm",c),r=f(p,"accuracy",o);let b=p.map(el);l=q?(e=>{if(!Array.isArray(e)||e.length<2)return null;let t=0,a=0,r=0,l=0;e.forEach(({x:e,y:s})=>{t+=e,a+=s,r+=e*s,l+=e*e});let s=e.length,n=s*l-t*t;if(0===n)return null;let i=(s*r-t*a)/n,c=(a-i*t)/s;return{slope:i,intercept:c}})(b):null,O[5]=H,O[6]=q,O[7]=z,O[8]=G,O[9]=r,O[10]=l,O[11]=s,O[12]=n,O[13]=i,O[14]=c,O[15]=o}else r=O[9],l=O[10],s=O[11],n=O[12],i=O[13],c=O[14],o=O[15];let B=l,F=H[0]?.lessonNumber??1,K=H.at(-1)?.lessonNumber??F;O[23]!==B||O[24]!==K||O[25]!==F||O[26]!==n||O[27]!==c?(d=B?{x1:n(F),y1:c(B.slope*F+B.intercept),x2:n(K),y2:c(B.slope*K+B.intercept)}:null,O[23]=B,O[24]=K,O[25]=F,O[26]=n,O[27]=c,O[28]=d):d=O[28];let J=d;if(O[29]===Symbol.for("react.memo_cache_sentinel")?(u=[0,.25,.5,.75,1],O[29]=u):u=O[29],O[30]!==i||O[31]!==c||O[32]!==o){let e=u.map(e=>Math.round(i*e));g="mt-6",f="h-80 w-full",b="0 0 900 320",y="img",w="Typing performance chart",O[44]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"wpmGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgb(16,185,129)",stopOpacity:"0.4"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgb(16,185,129)",stopOpacity:"0.05"})]})}),v=(0,t.jsx)("line",{x1:60,y1:280,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.4)",strokeWidth:"1"}),m=(0,t.jsx)("line",{x1:60,y1:40,x2:60,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),h=(0,t.jsx)("line",{x1:840,y1:40,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),O[44]=m,O[45]=h,O[46]=j,O[47]=v):(m=O[44],h=O[45],j=O[46],v=O[47]),p=e.map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:54,x2:60,y1:c(e),y2:c(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsx)("text",{x:52,y:c(e)+4,textAnchor:"end",fontSize:"10",fill:"rgba(148,163,184,0.8)",children:e})]},`left-${e}`)),x=[0,25,50,75,100].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:840,x2:846,y1:o(e),y2:o(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsxs)("text",{x:848,y:o(e)+4,fontSize:"10",fill:"rgba(125,211,252,0.9)",children:[e,"%"]})]},`right-${e}`)),O[30]=i,O[31]=c,O[32]=o,O[33]=m,O[34]=h,O[35]=p,O[36]=x,O[37]=g,O[38]=f,O[39]=b,O[40]=y,O[41]=w,O[42]=j,O[43]=v}else m=O[33],h=O[34],p=O[35],x=O[36],g=O[37],f=O[38],b=O[39],y=O[40],w=O[41],j=O[42],v=O[43];if(O[48]===Symbol.for("react.memo_cache_sentinel")?(N=(0,t.jsx)("text",{x:60,y:30,fontSize:"11",fill:"rgba(148,163,184,0.8)",children:"WPM"}),k=(0,t.jsx)("text",{x:840,y:30,fontSize:"11",textAnchor:"end",fill:"rgba(125,211,252,0.9)",children:"Accuracy"}),O[48]=N,O[49]=k):(N=O[48],k=O[49]),O[50]!==G||O[51]!==c?(S=G?(0,t.jsx)("line",{x1:60,x2:840,y1:c(G),y2:c(G),stroke:"rgba(248,113,113,0.4)",strokeDasharray:"6 4"}):null,O[50]=G,O[51]=c,O[52]=S):S=O[52],O[53]!==r?(M=r?(0,t.jsx)("path",{d:r,fill:"none",stroke:"rgba(56,189,248,0.9)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round"}):null,O[53]=r,O[54]=M):M=O[54],O[55]!==s?(C=s?(0,t.jsx)("path",{d:s,fill:"none",stroke:"url(#wpmGradient)",strokeWidth:"3",strokeLinejoin:"round",strokeLinecap:"round"}):null,O[55]=s,O[56]=C):C=O[56],O[57]!==J?(W=J?(0,t.jsx)("line",{x1:J.x1,y1:J.y1,x2:J.x2,y2:J.y2,stroke:"rgba(248,250,252,0.5)",strokeWidth:"2",strokeDasharray:"4 4"}):null,O[57]=J,O[58]=W):W=O[58],O[59]!==H||O[60]!==n||O[61]!==c){let e;O[63]!==n||O[64]!==c?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:c(e.wpm),r:4,fill:"rgb(16,185,129)",stroke:"rgba(15,118,110,0.4)",strokeWidth:"1",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.wpm," wpm"]})},`wpm-${e.id??e.lessonNumber}`),O[63]=n,O[64]=c,O[65]=e):e=O[65],L=H.map(e),O[59]=H,O[60]=n,O[61]=c,O[62]=L}else L=O[62];if(O[66]!==H||O[67]!==n||O[68]!==o){let e;O[70]!==n||O[71]!==o?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:o(e.accuracy),r:3,fill:"rgb(56,189,248)",stroke:"rgba(14,165,233,0.2)",strokeWidth:"1",opacity:"0.8",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.accuracy,"% accuracy"]})},`accuracy-${e.id??e.lessonNumber}`),O[70]=n,O[71]=o,O[72]=e):e=O[72],A=H.map(e),O[66]=H,O[67]=n,O[68]=o,O[69]=A}else A=O[69];return O[73]!==m||O[74]!==h||O[75]!==p||O[76]!==x||O[77]!==S||O[78]!==M||O[79]!==C||O[80]!==W||O[81]!==L||O[82]!==A||O[83]!==f||O[84]!==b||O[85]!==y||O[86]!==w||O[87]!==j||O[88]!==v?($=(0,t.jsxs)("svg",{className:f,viewBox:b,role:y,"aria-label":w,children:[j,v,m,h,p,x,N,k,S,M,C,W,L,A]}),O[73]=m,O[74]=h,O[75]=p,O[76]=x,O[77]=S,O[78]=M,O[79]=C,O[80]=W,O[81]=L,O[82]=A,O[83]=f,O[84]=b,O[85]=y,O[86]=w,O[87]=j,O[88]=v,O[89]=$):$=O[89],O[90]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-emerald-400"}),"WPM (smoothed)"]}),O[90]=T):T=O[90],O[91]===Symbol.for("react.memo_cache_sentinel")?(R=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-sky-400"}),"Accuracy (smoothed)"]}),O[91]=R):R=O[91],O[92]===Symbol.for("react.memo_cache_sentinel")?(P=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full border border-slate-200 border-dashed"}),"Trendline"]}),O[92]=P):P=O[92],O[93]===Symbol.for("react.memo_cache_sentinel")?(D=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-4 text-xs text-slate-400",children:[T,R,P,(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-rose-400/50"}),"Target WPM"]})]}),O[93]=D):D=O[93],O[94]!==g||O[95]!==$?(E=(0,t.jsxs)("div",{className:g,children:[$,D]}),O[94]=g,O[95]=$,O[96]=E):E=O[96],E}function el(e){return{x:e.lessonNumber,y:e.rawWpm}}function es(e){return 280-Math.max(0,Math.min(100,e))/100*240}function en(e){return e.wpm}function ei(e){return e.accuracy}function ec(e){return e.wpm}function eo(e){let r,l,s,n,i=(0,a.c)(11),{buckets:c,totalLessons:o}=e;if(!o){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete lessons to populate this chart."})]}),i[0]=e):e=i[0],e}i[1]!==c?(r=Math.max(...c.map(ed),1),i[1]=c,i[2]=r):r=i[2];let d=r;if(i[3]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"lessons"})]}),i[3]=l):l=i[3],i[4]!==c||i[5]!==d){let e;i[7]!==d?(e=e=>(0,t.jsxs)("div",{className:"flex-1 text-center",children:[(0,t.jsx)("div",{className:"relative h-32 overflow-hidden rounded-2xl bg-slate-900/60",children:(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 rounded-2xl bg-sky-400/70",style:{height:`${e.count/d*100||0}%`}})}),(0,t.jsx)("p",{className:"mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:e.count})]},e.label),i[7]=d,i[8]=e):e=i[8],s=c.map(e),i[4]=c,i[5]=d,i[6]=s}else s=i[6];return i[9]!==s?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[l,(0,t.jsx)("div",{className:"mt-6 flex gap-3",children:s})]}),i[9]=s,i[10]=n):n=i[10],n}function ed(e){return e.count}function eu(e){let r,l,s,n,i,c,o,d,u=(0,a.c)(20),{summary:m}=e,h=m.totalLessons?`${m.successRate}% of sessions`:"—";u[0]!==m.lessonsAboveTarget||u[1]!==h?(r={label:"Lessons ≥ target",value:m.lessonsAboveTarget,detail:h},u[0]=m.lessonsAboveTarget,u[1]=h,u[2]=r):r=u[2],u[3]!==m.totalMinutes?(l={label:"Typing minutes",value:m.totalMinutes,detail:"lifetime focus time"},u[3]=m.totalMinutes,u[4]=l):l=u[4],u[5]!==m.totalWords?(s={label:"Words practiced",value:m.totalWords,detail:"approximate"},u[5]=m.totalWords,u[6]=s):s=u[6];let p=`${m.wpmStreak} lessons`;u[7]!==p?(n={label:"WPM streak",value:p,detail:"non-stop improvement"},u[7]=p,u[8]=n):n=u[8];let x=`${m.accuracyStreak} lessons`;u[9]!==x?(i={label:"Accuracy streak",value:x,detail:"steady precision"},u[9]=x,u[10]=i):i=u[10],u[11]!==r||u[12]!==l||u[13]!==s||u[14]!==n||u[15]!==i?(c=[r,l,s,n,i],u[11]=r,u[12]=l,u[13]=s,u[14]=n,u[15]=i,u[16]=c):c=u[16];let g=c;return u[17]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Highlights"}),u[17]=o):o=u[17],u[18]!==g?(d=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[o,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:g.map(em)})]}),u[18]=g,u[19]=d):d=u[19],d}function em(e){return(0,t.jsxs)("li",{className:"flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.2em] text-slate-500",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.detail})]}),(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:e.value})]},e.label)}function eh(e){let r,s,n,i,c,o,d,u,m,h,p,x,g,f,b,y,w,j=(0,a.c)(42),{targetWpm:v,setTargetWpm:N,lessonsPerUnlock:k,setLessonsPerUnlock:S,unlockedLetters:M,nextLetter:_,codingLanguage:C,setCodingLanguage:W,onUnlockAllLetters:L,onResetLetterProgress:A}=e;j[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Configuration"}),j[0]=r):r=j[0],j[1]!==N?(s=e=>N(Number(e.target.value)||35),j[1]=N,j[2]=s):s=j[2],j[3]!==s||j[4]!==v?(n=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Target WPM",(0,t.jsx)("input",{type:"number",min:5,max:200,value:v,onChange:s,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),j[3]=s,j[4]=v,j[5]=n):n=j[5],j[6]!==S?(i=e=>S(Math.max(1,Number(e.target.value)||5)),j[6]=S,j[7]=i):i=j[7],j[8]!==k||j[9]!==i?(c=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Lessons per unlock",(0,t.jsx)("input",{type:"number",min:1,max:20,value:k,onChange:i,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),j[8]=k,j[9]=i,j[10]=c):c=j[10],j[11]!==W?(o=e=>W(e.target.value),j[11]=W,j[12]=o):o=j[12],j[13]===Symbol.for("react.memo_cache_sentinel")?(d=l.map(ep),j[13]=d):d=j[13],j[14]!==C||j[15]!==o?(u=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Coding language",(0,t.jsx)("select",{value:C,onChange:o,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60",children:d})]}),j[14]=C,j[15]=o,j[16]=u):u=j[16],j[17]!==n||j[18]!==c||j[19]!==u?(m=(0,t.jsxs)("div",{className:"mt-6 grid gap-6 lg:grid-cols-3 sm:grid-cols-2",children:[n,c,u]}),j[17]=n,j[18]=c,j[19]=u,j[20]=m):m=j[20],j[21]!==M?(h=M.join(", "),j[21]=M,j[22]=h):h=j[22],j[23]!==h?(p=(0,t.jsxs)("p",{children:["Unlocked letters: ",h]}),j[23]=h,j[24]=p):p=j[24];let $=_??"complete",T=_?"maintain target WPM to progress":"all done";return j[25]!==$||j[26]!==T?(x=(0,t.jsxs)("p",{children:["Next unlock: ",$," (",T,")"]}),j[25]=$,j[26]=T,j[27]=x):x=j[27],j[28]!==L?(g=(0,t.jsx)("button",{type:"button",onClick:L,className:"rounded-2xl bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-emerald-400",children:"Unlock all letters"}),j[28]=L,j[29]=g):g=j[29],j[30]!==A?(f=(0,t.jsx)("button",{type:"button",onClick:A,className:"rounded-2xl border border-white/10 bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-rose-400/50",children:"Reset letter progress"}),j[30]=A,j[31]=f):f=j[31],j[32]!==g||j[33]!==f?(b=(0,t.jsxs)("div",{className:"mt-4 flex flex-wrap gap-3",children:[g,f]}),j[32]=g,j[33]=f,j[34]=b):b=j[34],j[35]!==p||j[36]!==x||j[37]!==b?(y=(0,t.jsxs)("div",{className:"mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300",children:[p,x,b]}),j[35]=p,j[36]=x,j[37]=b,j[38]=y):y=j[38],j[39]!==y||j[40]!==m?(w=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[r,m,y]}),j[39]=y,j[40]=m,j[41]=w):w=j[41],w}function ep(e){return(0,t.jsx)("option",{value:e.id,children:e.label},e.id)}e.s(["default",()=>$],81694)}]);