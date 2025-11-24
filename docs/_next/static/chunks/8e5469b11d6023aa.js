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
dispatch(handlers, "noop")`}}],n=["i","a","l","r"],i=Array.from(new Set([...n,..."abcdefghijklmnopqrstuvwxyz".split("")])),c="typing-progress-v1",o=l[0]?.id??"javascript",m=[{id:"lesson",label:"Lesson"},{id:"coding",label:"Coding"},{id:"profile",label:"Profile"},{id:"settings",label:"Settings"}],u=(e=1)=>{let t=Math.abs(Math.floor(e))%0x7fffffff;return 0===t&&(t=1),()=>((t=16807*t%0x7fffffff)-1)/0x7ffffffe},d=e=>{if(!e)return"00:00";let t=Math.max(0,Math.floor(e/1e3)),a=String(Math.floor(t/60)).padStart(2,"0"),r=String(t%60).padStart(2,"0");return`${a}:${r}`},h=e=>e<=4?"short":e<=7?"medium":e<=10?"long":"extra_long",p={very_common:4,common:3,specialized:2,rare:1},g={low:3,medium:2,high:1},x={short:3,medium:3,long:2,extra_long:1},f={simple_root:3,compound:2.5,affixed:2,loanword:1.5},b={general:3,technology:2.6,data:2.4,design:2.3,science:2.2,project:2.2,security:2.2,networking:2.2,food:2},y={"double-letter":.35,"alternating-cv":.4,"all-lower":.15,"vowel-run":-.35,"rare-letter":-.6,"vowel-glide":.15,"y-ending":.1},w=(e,t=0)=>{let a=Number.parseFloat(e);return Number.isFinite(a)?a:t},j=e=>{var t;if(!e)return null;let a=String(e.word??"").toLowerCase().trim();if(!a||!/^[a-z]+$/.test(a)||a.length<2||a.length>12)return null;let r=(t=e.typing_features)?t.split("|").map(e=>e.trim()).filter(e=>e&&"none"!==e):[],l="yes"===String(e.recommended??"").trim().toLowerCase();return{word:a,length:a.length,frequencyTier:e.frequency_tier??"rare",frequency:w(e.frequency),zipf:w(e.zipf),obscurityLevel:e.obscurity_level??"medium",lengthGroup:e.length_group??h(a.length),partOfSpeech:e.part_of_speech??"noun",domain:e.domain??"general",complexity:e.complexity??"simple_root",typingFeatures:r,recommended:l,notes:e.notes??""}},v=e=>({word:e,length:e.length,frequencyTier:"common",frequency:1,zipf:5,obscurityLevel:"low",lengthGroup:h(e.length),partOfSpeech:"noun",domain:"general",complexity:"simple_root",typingFeatures:["all-lower"],recommended:!0,notes:"fallback"}),N=["air","aria","lair","liar","rail","briar","racial","radial","real","flare","argil","hilaria","jail","kalari","alarm","linear","clarion","plain","qibla","qi","rails","trail","aural","rival","wail","axial","relay","lazily","dragon","forest","mural","artisan","station","rotation","delivery","formation","vital","gaily","brawler","sailor","pavilion","citadel","journal","keyboard","galaxy","zephyr"].map(e=>v(e)),S=["medium","short","long","extra_long"],k=e=>{let t=[],a="",r=!1;for(let l=0;l<e.length;l+=1){let s=e[l];if('"'===s){r&&'"'===e[l+1]?(a+='"',l+=1):r=!r;continue}if(","===s&&!r){t.push(a),a="";continue}a+=s}return t.push(a),t.map(e=>e.trim())},_=(e,a,r)=>Array.from(e).map((e,l)=>{let s=a[l],n=" "===e?" ":e,i=!!r[l];if(s){let a=s===e;return i?(0,t.jsx)("span",{className:a?"text-amber-300 underline decoration-amber-300 decoration-2":"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:a?"text-emerald-400":"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${l}`)}return l===a.length?i?(0,t.jsx)("span",{className:"rounded border border-rose-500 bg-rose-500/20 text-rose-200",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:"rounded bg-slate-700/70 text-white",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:"text-slate-500",children:n},`${e}-${l}`)}),M=(e,t)=>{if(!Array.isArray(e)||0===e.length)return[];let a=Math.max(1,Math.floor(t));if(1===a)return[...e];let r=Math.floor(a/2);return e.map((t,a)=>{let l=Math.max(0,a-r),s=Math.min(e.length-1,a+r),n=e.slice(l,s+1);return Number((n.reduce((e,t)=>e+t,0)/n.length).toFixed(2))})},L=(e,t)=>{if(!Array.isArray(e)||0===e.length)return 0;let a=1,r=1;for(let l=1;l<e.length;l+=1)e[l][t]>=e[l-1][t]?r+=1:r=1,r>a&&(a=r);return a},W=[{label:"<80",min:0,max:80},{label:"80-85",min:80,max:85},{label:"85-90",min:85,max:90},{label:"90-95",min:90,max:95},{label:"95+",min:95,max:101}],A=e=>l.find(t=>t.id===e)?.label??e,C=(e,t)=>{if(!e)return"";let a=t,r="";for(;a<e.length;){let t=e[a];if(" "===t||"	"===t)r+=t,a+=1;else break}return r};function $(){let e,d,w,M,L,W,A,$,I,G,U,q,K,J,V,Y,Q,X,Z,et,ea,er,el,es,en,ei,ec,eo,em,eu,ed,eh,ep,eg,ex,ef,eb,ew,ej,ev,eN,eS,ek,e_,eM,eL,eW,eA,eC,e$,eT,eP,eR,eD,eE,eO=(0,a.c)(169),[eH,eI]=(0,r.useState)("lesson"),[ez,eG]=(0,r.useState)(0),[eF,eB]=(0,r.useState)(""),[eU,eq]=(0,r.useState)(null),[eK,eJ]=(0,r.useState)(!1);eO[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],eO[0]=e):e=eO[0];let[eV,eY]=(0,r.useState)(e),[eQ,eX]=(0,r.useState)(35),[eZ,e0]=(0,r.useState)(5),[e1,e2]=(0,r.useState)(n.length),[e4,e3]=(0,r.useState)(0);eO[1]===Symbol.for("react.memo_cache_sentinel")?(d={},eO[1]=d):d=eO[1];let[e5,e6]=(0,r.useState)(d);eO[2]===Symbol.for("react.memo_cache_sentinel")?(w=[],eO[2]=w):w=eO[2];let[e8,e9]=(0,r.useState)(w),[e7,te]=(0,r.useState)(0),[tt,ta]=(0,r.useState)(""),[tr,tl]=(0,r.useState)(null),[ts,tn]=(0,r.useState)(!1);eO[3]===Symbol.for("react.memo_cache_sentinel")?(M=[],eO[3]=M):M=eO[3];let[ti,tc]=(0,r.useState)(M);eO[4]===Symbol.for("react.memo_cache_sentinel")?(L={},eO[4]=L):L=eO[4];let[to,tm]=(0,r.useState)(L),[tu,td]=(0,r.useState)(o),th=(0,r.useRef)(null),tp=(0,r.useRef)(null),tg=(0,r.useRef)(null),tx=(0,r.useRef)(null),tf=(0,r.useRef)(null);eO[5]!==e1?(W=i.slice(0,e1),eO[5]=e1,eO[6]=W):W=eO[6];let tb=W,ty=e1<i.length?i[e1]:null;eO[7]!==e8||eO[8]!==ez||eO[9]!==tb?(A=((e,t,a)=>{if(!e.length)return[];let r=a.length>0?a:N,l=e.at(-1),s=r.filter(t=>{var a;let r;return t?.word&&t.recommended&&(a=t.word,r=new Set(e),Array.from(a).every(e=>r.has(e)))&&"high"!==t.obscurityLevel&&t.word.length>2});if(0===s.length)return e.map(e=>`${e}${e}${e}`);let n=u(t+31*e.length),i=s.map(t=>({entry:t,score:((e,t,a,r=0)=>{var l;if(!e)return 0;let s=p[e.frequencyTier]??1,n=g[e.obscurityLevel]??1,i=f[e.complexity]??1,c=b[e.domain]??2,o=x[e.lengthGroup]??1,m=t.length,u=0;return m<=4&&"short"===e.lengthGroup?u=1:m<=7&&"medium"===e.lengthGroup?u=.5:m>=10&&"long"===e.lengthGroup&&(u=.4),3*s+2*n+i+c+o+u+(Array.isArray(l=e.typingFeatures)&&0!==l.length?l.reduce((e,t)=>e+(y[t]??0),0):0)+(a&&e.word.includes(a)?1:0)+(e.zipf??0)*.35+r})(t,e,l,.5*n())})).sort((e,t)=>t.score-e.score),c=Math.max(54,60),o=i.slice(0,Math.min(c,i.length)),m=((e,t)=>{if(!Array.isArray(e))return[];let a=[...e],r=u(t);for(let e=a.length-1;e>0;e-=1){let t=Math.floor(r()*(e+1));[a[e],a[t]]=[a[t],a[e]]}return a})(l&&o.some(e=>e.entry.word.includes(l))?o.filter(e=>e.entry.word.includes(l)):o,t).map(e=>e.entry);if(0===m.length)return e.map(e=>`${e}${e}${e}`);let{pattern:d,priority:w}=((e,t)=>{let a=e<=4?[{group:"medium",weight:.4},{group:"short",weight:.5},{group:"long",weight:.1}]:e<=8?[{group:"medium",weight:.5},{group:"short",weight:.3},{group:"long",weight:.2}]:e<=13?[{group:"medium",weight:.45},{group:"long",weight:.25},{group:"short",weight:.2},{group:"extra_long",weight:.1}]:[{group:"medium",weight:.4},{group:"long",weight:.3},{group:"short",weight:.15},{group:"extra_long",weight:.15}],r=((e,t)=>{let a={},r=0;if(e.forEach(({group:e,weight:l})=>{let s=Math.max(0,Math.round(l*t));a[e]=s,r+=s}),r>t){let l=r-t;for(let t=e.length-1;t>=0&&l>0;t-=1){let r=e[t].group,s=Math.min(l,a[r]);a[r]-=s,l-=s}}else if(r<t){let l=t-r;for(;l>0;)for(let t=0;t<e.length&&l>0;t+=1){let r=e[t].group;a[r]+=1,l-=1}}return a})(a,18),l=a.map(({group:e})=>({group:e,remaining:r[e]??0})),s=[];for(;s.length<18;){let e=!1;for(let t=0;t<l.length&&s.length<18;t+=1)l[t].remaining>0&&(s.push(l[t].group),l[t].remaining-=1,e=!0);if(!e)break}if(s.length<18){let e=l.map(e=>e.group).filter(Boolean),t=e.length?e:[...S],a=0;for(;s.length<18;){let e=t[a%t.length];s.push(e),a+=1}}return{pattern:s,priority:a.map(({group:e})=>e)}})(e.length,18),j=Array.from(new Set([...w,...S])),k=m.reduce((e,t)=>{let a=t.lengthGroup??h(t.word.length);return e[a]||(e[a]=[]),e[a].push(t),e},{}),_=e=>{let t=k[e];return t&&t.length?t.shift():null},M=()=>{for(let e=0;e<j.length;e+=1){let t=_(j[e]);if(t)return t}let e=Object.keys(k).filter(e=>!j.includes(e));for(let t=0;t<e.length;t+=1){let a=_(e[t]);if(a)return a}return null},L=[];for(let e=0;e<d.length&&L.length<18;e+=1){let t=_(d[e])??M();if(!t)break;L.push(t)}if(L.length<18){let t=Object.values(k).flat(),a=t.length>0?t:m.length>0?m:[],r=0;for(;L.length<18;)if(a.length>0)L.push(a[r%a.length]),r+=1;else{let t=l??e[0];if(!t)break;let a=`${t}${e[0]??t}${t}`;L.push(v(a))}}return L.slice(0,18).map(e=>e.word)})(tb,ez,e8),eO[7]=e8,eO[8]=ez,eO[9]=tb,eO[10]=A):A=eO[10];let tw=A;eO[11]!==tw?($=tw.join(" "),eO[11]=tw,eO[12]=$):$=eO[12];let tj=$;eO[13]!==tj||eO[14]!==e5||eO[15]!==eF?(I=_(tj,eF,e5),eO[13]=tj,eO[14]=e5,eO[15]=eF,eO[16]=I):I=eO[16];let tv=I;eO[17]!==e7||eO[18]!==tu?(G=((e,t)=>{let a=(e=>{if(!s.length)return null;let t=e%s.length;return s[t]})(e);if(!a)return{snippet:null,text:"",languages:[]};let r=l.find(e=>a.languages[e.id])?.id??l[0]?.id,n=a.languages[t]?t:r;return{snippet:a,text:a.languages[n]??"",activeLanguage:n}})(e7,tu),eO[17]=e7,eO[18]=tu,eO[19]=G):G=eO[19];let tN=G,tS=tN.text;eO[20]!==tt||eO[21]!==to||eO[22]!==tS?(U=_(tS,tt,to),eO[20]=tt,eO[21]=to,eO[22]=tS,eO[23]=U):U=eO[23];let tk=U;eO[24]===Symbol.for("react.memo_cache_sentinel")?(q=()=>{let e=!1;return(async()=>{try{let t,a=await fetch("/type-practice/full_dictionary_en.csv"),r=await a.text();if(e)return;let l=(e=>{if(!e)return[];let t=e.trim().split(/\r?\n/);if(t.length<=1)return[];let a=k(t[0]),r=[],l=new Set;for(let e=1;e<t.length;e+=1){let s=t[e];if(!s)continue;let n=k(s);if(!n.length)continue;let i={};for(let e=0;e<a.length;e+=1)i[a[e]]=n[e]??"";let c=j(i);c&&c.recommended&&!l.has(c.word)&&(l.add(c.word),r.push(c))}return r})(r);e9((t=new Map,l.forEach(e=>{e?.word&&t.set(e.word,e)}),N.forEach(e=>{e?.word&&!t.has(e.word)&&t.set(e.word,e)}),Array.from(t.values())))}catch(e){console.error("Failed to load word metadata",e),e9(N)}})(),()=>{e=!0}},K=[],eO[24]=q,eO[25]=K):(q=eO[24],K=eO[25]),(0,r.useEffect)(q,K),eO[26]!==eH?(J=()=>{("lesson"===eH||"coding"===eH)&&th.current?.focus()},eO[26]=eH,eO[27]=J):J=eO[27],eO[28]!==eH||eO[29]!==ts||eO[30]!==e7||eO[31]!==eK||eO[32]!==ez?(V=[eH,e7,ts,ez,eK],eO[28]=eH,eO[29]=ts,eO[30]=e7,eO[31]=eK,eO[32]=ez,eO[33]=V):V=eO[33],(0,r.useEffect)(J,V),eO[34]===Symbol.for("react.memo_cache_sentinel")?(Y=()=>{let e=!1;try{let t=window.localStorage.getItem(c);if(t){let a=JSON.parse(t);"number"==typeof a.unlockedCount&&e2(a.unlockedCount),Array.isArray(a.lessonHistory)&&eY(a.lessonHistory),Array.isArray(a.codingHistory)&&tc(a.codingHistory),"number"==typeof a.successCounter&&e3(a.successCounter),"number"==typeof a.lessonIndex&&eG(a.lessonIndex),"number"==typeof a.targetWpm&&eX(a.targetWpm),"number"==typeof a.lessonsPerUnlock&&e0(a.lessonsPerUnlock),"number"==typeof a.codingIndex&&te(a.codingIndex),"string"==typeof a.codingLanguage&&td(a.codingLanguage),e=!0}}catch(e){console.error("Failed to restore progress",e)}e||window.localStorage.removeItem(c)},Q=[],eO[34]=Y,eO[35]=Q):(Y=eO[34],Q=eO[35]),(0,r.useEffect)(Y,Q),eO[36]!==ti||eO[37]!==e7||eO[38]!==tu||eO[39]!==eV||eO[40]!==ez||eO[41]!==eZ||eO[42]!==e4||eO[43]!==eQ||eO[44]!==e1?(X=()=>{try{window.localStorage.setItem(c,JSON.stringify({unlockedCount:e1,lessonHistory:eV,codingHistory:ti,successCounter:e4,lessonIndex:ez,targetWpm:eQ,lessonsPerUnlock:eZ,codingIndex:e7,codingLanguage:tu}))}catch(e){console.error("Failed to persist progress",e)}},Z=[eV,ez,eZ,e4,eQ,e1,ti,e7,tu],eO[36]=ti,eO[37]=e7,eO[38]=tu,eO[39]=eV,eO[40]=ez,eO[41]=eZ,eO[42]=e4,eO[43]=eQ,eO[44]=e1,eO[45]=X,eO[46]=Z):(X=eO[45],Z=eO[46]),(0,r.useEffect)(X,Z),eO[47]!==eH||eO[48]!==ts||eO[49]!==eK?(et=()=>{if(!["lesson","coding"].includes(eH)||"lesson"===eH&&eK||"coding"===eH&&ts)return;let e=e=>{"Tab"===e.key||e.metaKey||e.ctrlKey||e.altKey||document.activeElement!==th.current&&th.current?.focus()};return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},ea=[eH,ts,eK],eO[47]=eH,eO[48]=ts,eO[49]=eK,eO[50]=et,eO[51]=ea):(et=eO[50],ea=eO[51]),(0,r.useEffect)(et,ea),eO[52]===Symbol.for("react.memo_cache_sentinel")?(er=()=>()=>{tp.current&&clearTimeout(tp.current),tg.current&&clearTimeout(tg.current),tx.current&&clearTimeout(tx.current),tf.current&&clearTimeout(tf.current)},el=[],eO[52]=er,eO[53]=el):(er=eO[52],el=eO[53]),(0,r.useEffect)(er,el),eO[54]!==eZ||eO[55]!==eQ||eO[56]!==e1?(es=e=>{e<eQ?e3(0):e3(e=>{let t=e+1,a=e1<i.length;return t>=eZ&&a?(e2(O),0):t})},eO[54]=eZ,eO[55]=eQ,eO[56]=e1,eO[57]=es):es=eO[57];let t_=es;eO[58]===Symbol.for("react.memo_cache_sentinel")?(en=()=>{eB(""),eq(null),eJ(!1),e6({})},eO[58]=en):en=eO[58];let tM=en;eO[59]===Symbol.for("react.memo_cache_sentinel")?(ei=()=>{eG(E),tM()},eO[59]=ei):ei=eO[59];let tL=ei;eO[60]===Symbol.for("react.memo_cache_sentinel")?(ec=()=>{tp.current&&clearTimeout(tp.current),tp.current=setTimeout(()=>{tp.current=null,tL()},0)},eO[60]=ec):ec=eO[60];let tW=ec;eO[61]===Symbol.for("react.memo_cache_sentinel")?(eo=()=>{ta(""),tl(null),tn(!1),tm({})},eO[61]=eo):eo=eO[61];let tA=eo;eO[62]===Symbol.for("react.memo_cache_sentinel")?(em=()=>{te(D)},eO[62]=em):em=eO[62];let tC=em;eO[63]===Symbol.for("react.memo_cache_sentinel")?(eu=()=>{tx.current&&clearTimeout(tx.current),tx.current=setTimeout(()=>{tx.current=null,tC()},200)},eO[63]=eu):eu=eO[63];let t$=eu;eO[64]!==eK||eO[65]!==eU?(ed=()=>{tg.current&&clearTimeout(tg.current),eU&&!eK&&(tg.current=setTimeout(()=>{tg.current=null,tM()},45e3))},eO[64]=eK,eO[65]=eU,eO[66]=ed):ed=eO[66];let tT=ed;eO[67]!==ts||eO[68]!==tr?(eh=()=>{tf.current&&clearTimeout(tf.current),tr&&!ts&&(tf.current=setTimeout(()=>{tf.current=null,tA()},6e4))},eO[67]=ts,eO[68]=tr,eO[69]=eh):eh=eO[69];let tP=eh;eO[70]!==t_||eO[71]!==eK||eO[72]!==tj||eO[73]!==e5||eO[74]!==eU||eO[75]!==eQ||eO[76]!==tb?(ep=()=>{if(eK)return;let e=Date.now(),t=eU??e,a=Math.max(e-t,1),r=Math.max(a/6e4,.016666666666666666),l=Math.max(0,Math.round(tj.length/5/r)),s=tj.length||1,n=Object.keys(e5).length,i=Math.max(0,Math.round((s-n)/s*100));eJ(!0),eY(t=>[...t,{id:`lesson-${t.length+1}-${e}`,wpm:l,accuracy:i,letters:tb.join(""),text:tj,timestamp:new Date(e).toISOString(),durationMs:a,success:l>=eQ,mistakes:n}]),t_(l),tW()},eO[70]=t_,eO[71]=eK,eO[72]=tj,eO[73]=e5,eO[74]=eU,eO[75]=eQ,eO[76]=tb,eO[77]=ep):ep=eO[77];let tR=ep;eO[78]!==ts||eO[79]!==tu||eO[80]!==to||eO[81]!==tr||eO[82]!==tS||eO[83]!==tN.activeLanguage||eO[84]!==tN.snippet||eO[85]!==eQ?(eg=()=>{if(ts||!tS)return;let e=Date.now(),t=tr??e,a=Math.max(e-t,1),r=Math.max(a/6e4,.016666666666666666),l=Math.max(0,Math.round(tS.length/5/r)),s=tS.length||1,n=Object.keys(to).length,i=Math.max(0,Math.round((s-n)/s*100)),c=tN.snippet;tn(!0),tc(t=>[...t,{id:`coding-${t.length+1}-${e}`,wpm:l,accuracy:i,language:tN.activeLanguage??tu,snippetId:c?.id??"snippet",concept:c?.concept??"Snippet",text:tS,timestamp:new Date(e).toISOString(),durationMs:a,mistakes:n,focusCharacters:c?.focusCharacters??[],success:l>=eQ,mode:"coding"}]),t$()},eO[78]=ts,eO[79]=tu,eO[80]=to,eO[81]=tr,eO[82]=tS,eO[83]=tN.activeLanguage,eO[84]=tN.snippet,eO[85]=eQ,eO[86]=eg):eg=eO[86];let tD=eg;eO[87]===Symbol.for("react.memo_cache_sentinel")?(ex=e=>{e6(t=>t[e]?t:{...t,[e]:!0})},eO[87]=ex):ex=eO[87];let tE=ex;eO[88]===Symbol.for("react.memo_cache_sentinel")?(ef=e=>{tm(t=>t[e]?t:{...t,[e]:!0})},eO[88]=ef):ef=eO[88];let tO=ef;eO[89]!==eH||eO[90]!==ts||eO[91]!==tr||eO[92]!==tS||eO[93]!==eK||eO[94]!==tj||eO[95]!==eU?(eb=e=>{let t="lesson"===eH,a="coding"===eH;if(!t&&!a||e.metaKey||e.ctrlKey||e.altKey||t&&eK||a&&ts)return;if("Backspace"===e.key){e.preventDefault(),t?eB(R):ta(P);return}if("Tab"===e.key){if(!a)return;e.preventDefault(),ta(e=>{if(ts||e.length>=tS.length)return e;let t=C(tS,e.length);return t?tS.startsWith(t,e.length)?e+t:(tO(e.length),e):e});return}let r="Enter"===e.key?"\n":e.key;if(1===r.length||"\n"===r){if(t&&!eU&&eq(Date.now()),a&&!tr&&tl(Date.now()),e.preventDefault(),t)return void eB(e=>{if(eK||e.length>=tj.length)return e;let t=tj[e.length];return t?r===t?e+r:(tE(e.length),e):e});ta(e=>{if(ts||e.length>=tS.length)return e;let t=tS[e.length];if(!t)return e;if("\n"===r){if("\n"!==t)return tO(e.length),e;let a=C(tS,e.length+1);return e+"\n"+a}return r===t?e+r:(tO(e.length),e)})}},eO[89]=eH,eO[90]=ts,eO[91]=tr,eO[92]=tS,eO[93]=eK,eO[94]=tj,eO[95]=eU,eO[96]=eb):eb=eO[96];let tH=eb;eO[97]!==tR||eO[98]!==eK||eO[99]!==tj||eO[100]!==eF?(ew=()=>{!eK&&tj&&eF===tj&&tR()},ej=[tR,eK,tj,eF],eO[97]=tR,eO[98]=eK,eO[99]=tj,eO[100]=eF,eO[101]=ew,eO[102]=ej):(ew=eO[101],ej=eO[102]),(0,r.useEffect)(ew,ej),eO[103]!==ts||eO[104]!==tt||eO[105]!==tS||eO[106]!==tD?(ev=()=>{!ts&&tS&&tt===tS&&tD()},eN=[ts,tt,tS,tD],eO[103]=ts,eO[104]=tt,eO[105]=tS,eO[106]=tD,eO[107]=ev,eO[108]=eN):(ev=eO[107],eN=eO[108]),(0,r.useEffect)(ev,eN),eO[109]!==tT?(eS=()=>(tT(),()=>{tg.current&&clearTimeout(tg.current)}),eO[109]=tT,eO[110]=eS):eS=eO[110],eO[111]!==tT||eO[112]!==eF?(ek=[tT,eF],eO[111]=tT,eO[112]=eF,eO[113]=ek):ek=eO[113],(0,r.useEffect)(eS,ek),eO[114]!==tP?(e_=()=>(tP(),()=>{tf.current&&clearTimeout(tf.current)}),eO[114]=tP,eO[115]=e_):e_=eO[115],eO[116]!==tt||eO[117]!==tP?(eM=[tP,tt],eO[116]=tt,eO[117]=tP,eO[118]=eM):eM=eO[118],(0,r.useEffect)(e_,eM),eO[119]===Symbol.for("react.memo_cache_sentinel")?(eL=()=>{tA()},eO[119]=eL):eL=eO[119],eO[120]!==e7||eO[121]!==tu?(eW=[tA,e7,tu],eO[120]=e7,eO[121]=tu,eO[122]=eW):eW=eO[122],(0,r.useEffect)(eL,eW);let tI="lesson"!==eH&&"coding"!==eH||"lesson"===eH&&eK||"coding"===eH&&ts;return eO[123]!==eH?(eA=m.map(e=>(0,t.jsx)(H,{isActive:eH===e.id,label:e.label,onClick:()=>eI(e.id)},e.id)),eO[123]=eH,eO[124]=eA):eA=eO[124],eO[125]!==eA?(eC=(0,t.jsx)("nav",{className:"flex flex-wrap justify-center gap-3",children:eA}),eO[125]=eA,eO[126]=eC):eC=eO[126],eO[127]!==eH||eO[128]!==tv||eO[129]!==eV||eO[130]!==tj||eO[131]!==ty||eO[132]!==eQ||eO[133]!==e1?(e$="lesson"===eH&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F,{unlockedCount:e1,nextLetter:ty,history:eV,targetWpm:eQ}),(0,t.jsx)(z,{highlightedPrompt:tv,lessonText:tj,onClick:()=>th.current?.focus()}),(0,t.jsx)("p",{className:"text-center text-xs text-slate-400",children:"Typing is captured automatically; press Backspace to fix mistakes and keep eyes on the words."})]}),eO[127]=eH,eO[128]=tv,eO[129]=eV,eO[130]=tj,eO[131]=ty,eO[132]=eQ,eO[133]=e1,eO[134]=e$):e$=eO[134],eO[135]!==eH||eO[136]!==ts||eO[137]!==tk||eO[138]!==ti||eO[139]!==e7||eO[140]!==tu||eO[141]!==tS||eO[142]!==tN?(eT="coding"===eH&&(0,t.jsx)(B,{snippetPayload:tN,highlightedPrompt:tk,codingComplete:ts,onNext:tC,codingHistory:ti,codingLanguage:tu,codingIndex:e7,codingText:tS}),eO[135]=eH,eO[136]=ts,eO[137]=tk,eO[138]=ti,eO[139]=e7,eO[140]=tu,eO[141]=tS,eO[142]=tN,eO[143]=eT):eT=eO[143],eO[144]!==tH||eO[145]!==tI?(eP=(0,t.jsx)("input",{ref:th,spellCheck:!1,value:"",onChange:T,onKeyDown:tH,className:"absolute left-0 top-0 h-px w-px opacity-0","aria-hidden":!0,disabled:tI}),eO[144]=tH,eO[145]=tI,eO[146]=eP):eP=eO[146],eO[147]!==eH||eO[148]!==eV||eO[149]!==eZ||eO[150]!==ty||eO[151]!==e4||eO[152]!==eQ||eO[153]!==tb?(eR="profile"===eH&&(0,t.jsx)(ee,{history:eV,unlockedLetters:tb,nextLetter:ty,successCounter:e4,lessonsPerUnlock:eZ,targetWpm:eQ}),eO[147]=eH,eO[148]=eV,eO[149]=eZ,eO[150]=ty,eO[151]=e4,eO[152]=eQ,eO[153]=tb,eO[154]=eR):eR=eO[154],eO[155]!==eH||eO[156]!==tu||eO[157]!==eZ||eO[158]!==ty||eO[159]!==eQ||eO[160]!==tb?(eD="settings"===eH&&(0,t.jsx)(ey,{targetWpm:eQ,setTargetWpm:eX,lessonsPerUnlock:eZ,setLessonsPerUnlock:e0,unlockedLetters:tb,nextLetter:ty,codingLanguage:tu,setCodingLanguage:td}),eO[155]=eH,eO[156]=tu,eO[157]=eZ,eO[158]=ty,eO[159]=eQ,eO[160]=tb,eO[161]=eD):eD=eO[161],eO[162]!==eC||eO[163]!==e$||eO[164]!==eT||eO[165]!==eP||eO[166]!==eR||eO[167]!==eD?(eE=(0,t.jsx)("div",{className:"min-h-screen bg-slate-950 px-4 py-10 text-slate-100",children:(0,t.jsxs)("div",{className:"mx-auto flex w-full max-w-6xl flex-col items-center gap-8",children:[eC,e$,eT,eP,eR,eD]})}),eO[162]=eC,eO[163]=e$,eO[164]=eT,eO[165]=eP,eO[166]=eR,eO[167]=eD,eO[168]=eE):eE=eO[168],eE}function T(){}function P(e){return e.slice(0,-1)}function R(e){return e.slice(0,-1)}function D(e){return e+1}function E(e){return e+1}function O(e){return Math.min(e+1,i.length)}function H(e){let r,l=(0,a.c)(4),{isActive:s,label:n,onClick:i}=e,c=`rounded-full px-5 py-2 text-sm font-medium transition ${s?"bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/40":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;return l[0]!==n||l[1]!==i||l[2]!==c?(r=(0,t.jsx)("button",{type:"button",onClick:i,className:c,children:n}),l[0]=n,l[1]=i,l[2]=c,l[3]=r):r=l[3],r}let I=23;function z(e){let r,l,s,n,i,c=(0,a.c)(21),{highlightedPrompt:o,lessonText:m,onClick:u}=e;if(c[0]!==o||c[1]!==m){e:{let e;if(!m){let e;c[3]!==o?(e=o.length>0?[o]:[],c[3]=o,c[4]=e):e=c[4],r=e;break e}let t=((e,t=I)=>{if(!e)return[];let a=[],r=0;for(;r<e.length;){let l=Math.min(r+t,e.length);if(l<e.length&&" "!==e[l]){let t=e.slice(r,l).lastIndexOf(" ");t>0&&(l=r+t)}for(l===r&&(l=Math.min(r+t,e.length)),a.push({start:r,end:l}),r=l;r<e.length&&" "===e[r];)r+=1}return a})(m);if(0===t.length){let e;c[5]!==o?(e=[o],c[5]=o,c[6]=e):e=c[6],r=e;break e}c[7]!==o?(e=e=>{let{start:t,end:a}=e;return o.slice(t,a)},c[7]=o,c[8]=e):e=c[8],r=t.map(e)}c[0]=o,c[1]=m,c[2]=r}else r=c[2];let d=r;c[9]!==d?(l=d.reduce(G,0),c[9]=d,c[10]=l):l=c[10];let h=Math.max(1,Math.min(I,l));if(c[11]!==h||c[12]!==d){let e;c[14]!==h?(e=(e,a)=>(0,t.jsxs)("div",{className:"grid w-full justify-center gap-3 text-center font-mono text-4xl tracking-tight text-white sm:text-5xl",style:{gridTemplateColumns:`repeat(${h}, minmax(0, 1fr))`},children:[e.map((e,r)=>(0,t.jsx)("span",{className:"flex min-h-[3.5rem] items-center justify-center px-2 sm:min-h-[4.5rem]",children:e},`prompt-char-${a}-${r}`)),Array.from({length:Math.max(0,h-e.length)}).map((e,r)=>(0,t.jsx)("span",{className:"pointer-events-none flex min-h-[3.5rem] select-none items-center justify-center px-2 text-transparent sm:min-h-[4.5rem]","aria-hidden":!0,children:" "},`prompt-filler-${a}-${r}`))]},`prompt-line-${a}`),c[14]=h,c[15]=e):e=c[15],s=d.map(e),c[11]=h,c[12]=d,c[13]=s}else s=c[13];return c[16]!==s?(n=(0,t.jsx)("div",{className:"relative flex w-full max-w-7xl flex-col items-center gap-8",children:s}),c[16]=s,c[17]=n):n=c[17],c[18]!==u||c[19]!==n?(i=(0,t.jsx)("section",{className:"relative flex min-h-[60vh] w-full items-center justify-center rounded-3xl border border-white/5 bg-slate-900/40 p-16 shadow-2xl shadow-black/40",onClick:u,children:n}),c[18]=u,c[19]=n,c[20]=i):i=c[20],i}function G(e,t){return Math.max(e,t.length)}function F(e){let r,l,s,n=(0,a.c)(10),{unlockedCount:c,nextLetter:o,history:m,targetWpm:u}=e,d=m.at(-1)?.wpm??0;n[0]!==c?(r=i.at(Math.max(c-1,0))??null,n[0]=c,n[1]=r):r=n[1];let h=r;return n[2]!==h||n[3]!==d||n[4]!==o||n[5]!==u||n[6]!==c?(l=i.map((e,a)=>{if(a<c){let a=e===h;return(0,t.jsx)("span",{className:`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-emerald-300 bg-emerald-500 text-slate-900 ${a?"font-black ring-2 ring-emerald-200":""}`,title:a?`Current focus \xb7 Target WPM ${u}`:void 0,children:e},e)}return e===o?(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-amber-300 bg-amber-300/30 text-amber-200",title:`Next unlock \xb7 Need ${Math.max(u-d,0)} WPM boost`,children:e},e):(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-white/10 bg-slate-800 text-slate-500",children:e},e)}),n[2]=h,n[3]=d,n[4]=o,n[5]=u,n[6]=c,n[7]=l):l=n[7],n[8]!==l?(s=(0,t.jsx)("div",{className:"flex w-full flex-wrap justify-center gap-2 rounded-3xl border border-white/5 bg-slate-900/60 p-4",children:l}),n[8]=l,n[9]=s):s=n[9],s}function B(e){let r,l,n,i,c,o,m,u,d,h,p,g,x,f,b,y,w,j,v,N,S,k,_=(0,a.c)(54),{snippetPayload:M,highlightedPrompt:W,codingComplete:C,onNext:$,codingHistory:T,codingLanguage:P,codingIndex:R,codingText:D}=e,E=M.snippet;_[0]!==T?(r=(e=>{if(!Array.isArray(e)||0===e.length)return{total:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,languages:[],wpmStreak:0,accuracyStreak:0,totalMinutes:0};let t=e.reduce((e,t)=>(e.wpm+=t.wpm??0,e.accuracy+=t.accuracy??0,e.duration+=t.durationMs??0,e),{wpm:0,accuracy:0,duration:0}),a=e.length,r=Array.from(new Set(e.map(e=>e.language))).sort();return{total:a,avgWpm:Math.round(t.wpm/a),avgAccuracy:Math.round(t.accuracy/a),bestWpm:Math.max(...e.map(e=>e.wpm??0)),bestAccuracy:Math.max(...e.map(e=>e.accuracy??0)),languages:r,wpmStreak:L(e,"wpm"),accuracyStreak:L(e,"accuracy"),totalMinutes:Math.round(t.duration/6e4*10)/10}})(T),_[0]=T,_[1]=r):r=_[1];let O=r,H=s.length||1;_[2]!==E?.focusCharacters?(l=E?.focusCharacters??[],_[2]=E?.focusCharacters,_[3]=l):l=_[3];let I=l,z=M.activeLanguage??P;_[4]!==z?(n=A(z),_[4]=z,_[5]=n):n=_[5];let G=n;_[6]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-400",children:"Coding mode"}),_[6]=i):i=_[6];let F=E?.concept??"Snippet practice";_[7]!==F?(c=(0,t.jsx)("p",{className:"text-xl font-semibold text-white",children:F}),_[7]=F,_[8]=c):c=_[8];let B=E?.description??"Cycle through structured punctuation and patterns.";_[9]!==B?(o=(0,t.jsx)("p",{className:"text-sm text-slate-400",children:B}),_[9]=B,_[10]=o):o=_[10],_[11]!==c||_[12]!==o?(m=(0,t.jsxs)("div",{children:[i,c,o]}),_[11]=c,_[12]=o,_[13]=m):m=_[13];let q=R%H+1;_[14]!==q?(u=(0,t.jsxs)("p",{className:"font-semibold text-white",children:["Snippet ",q," / ",H]}),_[14]=q,_[15]=u):u=_[15],_[16]!==G?(d=(0,t.jsx)("p",{children:G}),_[16]=G,_[17]=d):d=_[17],_[18]!==I?(h=I.join(" ")||"symbols",_[18]=I,_[19]=h):h=_[19],_[20]!==h?(p=(0,t.jsxs)("p",{children:["Focus: ",h]}),_[20]=h,_[21]=p):p=_[21],_[22]!==u||_[23]!==d||_[24]!==p?(g=(0,t.jsxs)("div",{className:"text-right text-xs text-slate-400",children:[u,d,p]}),_[22]=u,_[23]=d,_[24]=p,_[25]=g):g=_[25],_[26]!==g||_[27]!==m?(x=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[m,g]}),_[26]=g,_[27]=m,_[28]=x):x=_[28],_[29]!==D||_[30]!==W?(f=(0,t.jsx)("div",{className:"mt-6 flex w-full justify-center",children:(0,t.jsx)("div",{className:"w-full max-w-4xl",children:(0,t.jsx)(U,{highlightedPrompt:W,text:D})})}),_[29]=D,_[30]=W,_[31]=f):f=_[31],_[32]===Symbol.for("react.memo_cache_sentinel")?(b=(0,t.jsx)("p",{children:"Enter inserts a new line with matching indentation. Tab inserts the next block of spaces."}),_[32]=b):b=_[32],_[33]!==$?(y=(0,t.jsxs)("div",{className:"mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400",children:[b,(0,t.jsx)("button",{type:"button",onClick:$,className:"rounded-full border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10",children:"Next snippet"})]}),_[33]=$,_[34]=y):y=_[34];let K=R%Math.max(H,1);return _[35]!==K?(w=(0,t.jsx)(Q,{currentIndex:K}),_[35]=K,_[36]=w):w=_[36],_[37]!==T?(j=T.at(-1)??null,_[37]=T,_[38]=j):j=_[38],_[39]!==C||_[40]!==O||_[41]!==j?(v=(0,t.jsx)(J,{summary:O,lastEntry:j,complete:C}),_[39]=C,_[40]=O,_[41]=j,_[42]=v):v=_[42],_[43]!==w||_[44]!==v?(N=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]",children:[w,v]}),_[43]=w,_[44]=v,_[45]=N):N=_[45],_[46]!==T?(S=(0,t.jsx)(X,{history:T}),_[46]=T,_[47]=S):S=_[47],_[48]!==x||_[49]!==f||_[50]!==y||_[51]!==N||_[52]!==S?(k=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[x,f,y,N,S]}),_[48]=x,_[49]=f,_[50]=y,_[51]=N,_[52]=S,_[53]=k):k=_[53],k}function U(e){let r,l,s,n,i,c,o=(0,a.c)(15),{highlightedPrompt:m,text:u}=e;e:{let e;if(!u){let e;o[0]===Symbol.for("react.memo_cache_sentinel")?(e=[[]],o[0]=e):e=o[0],r=e;break e}if(o[1]!==m||o[2]!==u){let a=u.split("\n"),r=0;e=a.map((e,a)=>{let l=m.slice(r,r+e.length);return((r+=e.length)<m.length&&(r+=1),0===e.length)?[(0,t.jsx)("span",{className:"text-slate-700",children:" "},`empty-${a}`)]:l}),o[1]=m,o[2]=u,o[3]=e}else e=o[3];r=e}let d=r;return o[4]!==d?(l=d.map(K),o[4]=d,o[5]=l):l=o[5],o[6]!==l?(s=(0,t.jsx)("pre",{className:"select-none border-r border-white/5 bg-slate-900/60 px-4 py-5 text-right text-xs font-semibold leading-6 text-slate-500",children:l}),o[6]=l,o[7]=s):s=o[7],o[8]!==d?(n=d.map(q),o[8]=d,o[9]=n):n=o[9],o[10]!==n?(i=(0,t.jsx)("pre",{className:"flex-1 overflow-auto px-6 py-5 font-mono text-sm leading-6 text-white",children:n}),o[10]=n,o[11]=i):i=o[11],o[12]!==s||o[13]!==i?(c=(0,t.jsx)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/60",children:(0,t.jsxs)("div",{className:"flex",children:[s,i]})}),o[12]=s,o[13]=i,o[14]=c):c=o[14],c}function q(e,a){return(0,t.jsx)("div",{className:"whitespace-pre-wrap",children:e},`code-${a}`)}function K(e,a){return(0,t.jsx)("span",{className:"block",children:a+1},`line-${a}`)}function J(e){let r,l,s,n,i=(0,a.c)(18),{summary:c,lastEntry:o,complete:m}=e;i[0]!==c.languages?(r=c.languages.length>0?c.languages.map(V).join(", "):"—",i[0]=c.languages,i[1]=r):r=i[1];let u=r;i[2]!==o?(l=o?A(o.language):null,i[2]=o,i[3]=l):l=i[3];let d=l;return i[4]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Session stats"}),i[4]=s):s=i[4],i[5]!==m||i[6]!==u||i[7]!==o||i[8]!==d||i[9]!==c.accuracyStreak||i[10]!==c.avgAccuracy||i[11]!==c.avgWpm||i[12]!==c.bestAccuracy||i[13]!==c.bestWpm||i[14]!==c.total||i[15]!==c.totalMinutes||i[16]!==c.wpmStreak?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[s,0===c.total?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete your first snippet to build coding momentum."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:[(0,t.jsx)(Y,{label:"Avg WPM",value:c.avgWpm,detail:`${c.total} snippets`}),(0,t.jsx)(Y,{label:"Avg accuracy",value:`${c.avgAccuracy}%`,detail:`${c.totalMinutes} min`}),(0,t.jsx)(Y,{label:"Top WPM",value:c.bestWpm,detail:"personal record"}),(0,t.jsx)(Y,{label:"Top accuracy",value:`${c.bestAccuracy}%`,detail:"cleanest run"})]}),(0,t.jsxs)("div",{className:"mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-xs text-slate-400",children:[(0,t.jsx)("p",{className:"font-semibold uppercase tracking-[0.2em] text-slate-300",children:"Languages covered"}),(0,t.jsx)("p",{className:"mt-1 text-sm text-white",children:u}),(0,t.jsxs)("p",{className:"mt-2",children:["Improvement streaks: ",(0,t.jsxs)("span",{className:"text-emerald-300",children:[c.wpmStreak," wpm"]})," /"," ",(0,t.jsxs)("span",{className:"text-sky-300",children:[c.accuracyStreak,"% accuracy"]})]}),o?(0,t.jsxs)("p",{className:"mt-1 text-xs text-slate-400",children:["Last: ",d," · ",o.wpm," wpm / ",o.accuracy,"%"]}):null,m?(0,t.jsx)("p",{className:"mt-2 text-emerald-300",children:"Snippet complete — auto-advancing..."}):null]})]})]}),i[5]=m,i[6]=u,i[7]=o,i[8]=d,i[9]=c.accuracyStreak,i[10]=c.avgAccuracy,i[11]=c.avgWpm,i[12]=c.bestAccuracy,i[13]=c.bestWpm,i[14]=c.total,i[15]=c.totalMinutes,i[16]=c.wpmStreak,i[17]=n):n=i[17],n}function V(e){return A(e)}function Y(e){let r,l,s,n,i=(0,a.c)(10),{label:c,value:o,detail:m}=e;return i[0]!==c?(r=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=r):r=i[1],i[2]!==o?(l=(0,t.jsx)("p",{className:"text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=l):l=i[3],i[4]!==m?(s=(0,t.jsx)("p",{className:"text-xs text-slate-400",children:m}),i[4]=m,i[5]=s):s=i[5],i[6]!==r||i[7]!==l||i[8]!==s?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3",children:[r,l,s]}),i[6]=r,i[7]=l,i[8]=s,i[9]=n):n=i[9],n}function Q(e){let r,l,n,i=(0,a.c)(5),{currentIndex:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Snippet library"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"curriculum"})]}),i[0]=r):r=i[0],i[1]!==c?(l=s.map((e,a)=>(0,t.jsxs)("li",{className:`rounded-2xl border px-4 py-3 ${a===c?"border-emerald-400 bg-emerald-400/10 text-white":"border-white/10 bg-slate-900/70 text-slate-200"}`,children:[(0,t.jsx)("p",{className:"font-semibold",children:e.concept}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.description}),(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:["Focus: ",e.focusCharacters.join(" ")]})]},e.id)),i[1]=c,i[2]=l):l=i[2],i[3]!==l?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[r,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:l})]}),i[3]=l,i[4]=n):n=i[4],n}function X(e){let r,l,s,n,i=(0,a.c)(8),{history:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent coding sessions"}),i[0]=r):r=i[0],i[1]!==c.length?(l=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[r,(0,t.jsxs)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:[c.length," total"]})]}),i[1]=c.length,i[2]=l):l=i[2],i[3]!==c?(s=0===c.length?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete snippets to build up your coding journal."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:c.slice(-6).reverse().map(Z)}),i[3]=c,i[4]=s):s=i[4],i[5]!==l||i[6]!==s?(n=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[l,s]}),i[5]=l,i[6]=s,i[7]=n):n=i[7],n}function Z(e){let a=A(e.language);return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.concept}),(0,t.jsxs)("p",{className:"text-xs text-slate-400",children:[a," · ",new Date(e.timestamp).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:d(e.durationMs)})]})]},e.id)}function ee(e){let l,s,n,i,c,o,m,u,d,h,p,g,x,f,b,y,w,j,v,N,S,k,_,M,A,C,$,T,P,R,D,E,O,H,I,z,G,F,B,U,q,K,J,V,Y=(0,a.c)(150),{history:Q,unlockedLetters:X,nextLetter:Z,successCounter:ee,lessonsPerUnlock:em,targetWpm:eu}=e,[ed,eh]=(0,r.useState)("all"),[ep,ex]=(0,r.useState)(3),[eb,ey]=(0,r.useState)(!0);Y[0]!==Q?(l=Q.map(en),Y[0]=Q,Y[1]=l):l=Y[1];let ew=l;if(Y[2]!==ew||Y[3]!==X){let e;e=new Map,X.forEach(t=>{e.set(t.toLowerCase(),0)}),ew.forEach(t=>{new Set((t.text??"").toLowerCase().replace(/[^a-z]/g,"").split("")).forEach(t=>{t&&e.set(t,(e.get(t)??0)+1)})}),s=Array.from(e.entries()).map(([e,t])=>({letter:e,count:t})).sort((e,t)=>e.letter>t.letter?1:-1),Y[2]=ew,Y[3]=X,Y[4]=s}else s=Y[4];let ej=s;Y[5]!==ej||Y[6]!==ed?(n=()=>{"all"===ed||ej.some(e=>e.letter===ed)||eh("all")},i=[ej,ed],Y[5]=ej,Y[6]=ed,Y[7]=n,Y[8]=i):(n=Y[7],i=Y[8]),(0,r.useEffect)(n,i);e:{let e;if("all"===ed){c=ew;break e}if(Y[9]!==ew||Y[10]!==ed){let t=ed.toLowerCase();e=ew.filter(e=>{let a=(e.letters??"").toLowerCase(),r=(e.text??"").toLowerCase();return a.includes(t)||r.includes(t)}),Y[9]=ew,Y[10]=ed,Y[11]=e}else e=Y[11];c=e}let ev=c;t:{let e,t,a,r,l,s,n,i,c,m,u;if(0===ew.length){let e;Y[12]===Symbol.for("react.memo_cache_sentinel")?(e={totalLessons:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,successRate:0,lessonsAboveTarget:0,totalWords:0,totalMinutes:0,wpmStreak:0,accuracyStreak:0,lastSevenAvgWpm:0},Y[12]=e):e=Y[12],o=e;break t}Y[13]!==ew?(e=ew.reduce(es,{wpm:0,accuracy:0,words:0,duration:0}),Y[13]=ew,Y[14]=e):e=Y[14];let d=e,h=ew.length;Y[15]!==ew?(t=Math.max(...ew.map(el)),Y[15]=ew,Y[16]=t):t=Y[16];let p=t;Y[17]!==ew?(a=Math.max(...ew.map(er)),Y[17]=ew,Y[18]=a):a=Y[18];let g=a;if(Y[19]!==ew||Y[20]!==eu){let e;Y[22]!==eu?(e=e=>e.wpm>=eu,Y[22]=eu,Y[23]=e):e=Y[23],r=ew.filter(e),Y[19]=ew,Y[20]=eu,Y[21]=r}else r=Y[21];let x=r.length;if(Y[24]!==ew){let e=ew.slice(-7);l=e.length>0?Math.round(e.reduce(ea,0)/e.length):0,Y[24]=ew,Y[25]=l}else l=Y[25];let f=l;Y[26]!==h||Y[27]!==d.wpm?(s=Math.round(d.wpm/h),Y[26]=h,Y[27]=d.wpm,Y[28]=s):s=Y[28],Y[29]!==h||Y[30]!==d.accuracy?(n=Math.round(d.accuracy/h),Y[29]=h,Y[30]=d.accuracy,Y[31]=n):n=Y[31],Y[32]!==x||Y[33]!==h?(i=Math.round(x/h*100),Y[32]=x,Y[33]=h,Y[34]=i):i=Y[34];let b=d.words,y=Math.round(d.duration/6e4*10)/10;Y[35]!==ew?(c=L(ew,"wpm"),Y[35]=ew,Y[36]=c):c=Y[36],Y[37]!==ew?(m=L(ew,"accuracy"),Y[37]=ew,Y[38]=m):m=Y[38],Y[39]!==g||Y[40]!==p||Y[41]!==f||Y[42]!==x||Y[43]!==s||Y[44]!==n||Y[45]!==i||Y[46]!==y||Y[47]!==c||Y[48]!==m||Y[49]!==h||Y[50]!==d.words?(u={totalLessons:h,avgWpm:s,avgAccuracy:n,bestWpm:p,bestAccuracy:g,successRate:i,lessonsAboveTarget:x,totalWords:b,totalMinutes:y,wpmStreak:c,accuracyStreak:m,lastSevenAvgWpm:f},Y[39]=g,Y[40]=p,Y[41]=f,Y[42]=x,Y[43]=s,Y[44]=n,Y[45]=i,Y[46]=y,Y[47]=c,Y[48]=m,Y[49]=h,Y[50]=d.words,Y[51]=u):u=Y[51],o=u}let eN=o;if(Y[52]!==ew)m=W.map(e=>({...e,count:ew.filter(t=>t.accuracy>=e.min&&t.accuracy<e.max).length})),Y[52]=ew,Y[53]=m;else m=Y[53];let eS=m,ek=1===ep?"Off":`${ep} lessons`;Y[54]===Symbol.for("react.memo_cache_sentinel")?(u=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Letters"}),Y[54]=u):u=Y[54],Y[55]!==X?(d=X.join(", "),Y[55]=X,Y[56]=d):d=Y[56],Y[57]!==d?(h=(0,t.jsxs)("div",{children:[u,(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:d})]}),Y[57]=d,Y[58]=h):h=Y[58],Y[59]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)("p",{className:"text-slate-400",children:"Next unlock"}),Y[59]=p):p=Y[59];let e_=Z??"All characters unlocked";Y[60]!==e_?(g=(0,t.jsx)("p",{className:"text-white font-semibold",children:e_}),Y[60]=e_,Y[61]=g):g=Y[61],Y[62]!==em||Y[63]!==Z||Y[64]!==ee?(x=Z?(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:[Math.max(em-ee,0)," high-WPM lessons to go"]}):null,Y[62]=em,Y[63]=Z,Y[64]=ee,Y[65]=x):x=Y[65],Y[66]!==g||Y[67]!==x?(f=(0,t.jsxs)("div",{className:"text-right text-sm",children:[p,g,x]}),Y[66]=g,Y[67]=x,Y[68]=f):f=Y[68],Y[69]!==h||Y[70]!==f?(b=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[h,f]}),Y[69]=h,Y[70]=f,Y[71]=b):b=Y[71],Y[72]!==eN.totalLessons?(y=(0,t.jsx)(ei,{label:"Lessons",value:eN.totalLessons,hint:"lifetime"}),Y[72]=eN.totalLessons,Y[73]=y):y=Y[73],Y[74]!==eu?(w=(0,t.jsx)(ei,{label:"Target WPM",value:eu,hint:"goal"}),Y[74]=eu,Y[75]=w):w=Y[75];let eM=`${eN.successRate}%`;Y[76]!==eM?(j=(0,t.jsx)(ei,{label:"Success Rate",value:eM,hint:"≥ target"}),Y[76]=eM,Y[77]=j):j=Y[77];let eL=eN.lastSevenAvgWpm?`last 7: ${eN.lastSevenAvgWpm}`:"last 7: —";Y[78]!==eN.avgWpm||Y[79]!==eL?(v=(0,t.jsx)(ei,{label:"Avg WPM",value:eN.avgWpm,hint:eL}),Y[78]=eN.avgWpm,Y[79]=eL,Y[80]=v):v=Y[80];let eW=`${eN.avgAccuracy}%`,eA=`${eN.totalWords} words`;Y[81]!==eW||Y[82]!==eA?(N=(0,t.jsx)(ei,{label:"Avg Accuracy",value:eW,hint:eA}),Y[81]=eW,Y[82]=eA,Y[83]=N):N=Y[83],Y[84]!==eN.bestWpm?(S=(0,t.jsx)(ei,{label:"Top WPM",value:eN.bestWpm,hint:"fastest lesson"}),Y[84]=eN.bestWpm,Y[85]=S):S=Y[85];let eC=`${eN.bestAccuracy}%`;Y[86]!==eC?(k=(0,t.jsx)(ei,{label:"Top Accuracy",value:eC,hint:"cleanest lesson"}),Y[86]=eC,Y[87]=k):k=Y[87];let e$=`${eN.wpmStreak} / ${eN.accuracyStreak}`;Y[88]!==e$?(_=(0,t.jsx)(ei,{label:"Improvement streaks",value:e$,hint:"WPM / accuracy"}),Y[88]=e$,Y[89]=_):_=Y[89],Y[90]!==y||Y[91]!==w||Y[92]!==j||Y[93]!==v||Y[94]!==N||Y[95]!==S||Y[96]!==k||Y[97]!==_?(M=(0,t.jsxs)("div",{className:"mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[y,w,j,v,N,S,k,_]}),Y[90]=y,Y[91]=w,Y[92]=j,Y[93]=v,Y[94]=N,Y[95]=S,Y[96]=k,Y[97]=_,Y[98]=M):M=Y[98],Y[99]===Symbol.for("react.memo_cache_sentinel")?(A=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Letter focus"}),Y[99]=A):A=Y[99],Y[100]===Symbol.for("react.memo_cache_sentinel")?(C=e=>eh(e),Y[100]=C):C=Y[100],Y[101]!==ej||Y[102]!==ed?($=(0,t.jsxs)("div",{className:"min-w-[220px] flex-1",children:[A,(0,t.jsx)(ec,{letters:ej,selectedLetter:ed,onSelect:C})]}),Y[101]=ej,Y[102]=ed,Y[103]=$):$=Y[103],Y[104]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsx)("span",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Smoothing"}),Y[104]=T):T=Y[104];let eT=0===ew.length;return Y[105]===Symbol.for("react.memo_cache_sentinel")?(P=e=>ex(Number(e.target.value)),Y[105]=P):P=Y[105],Y[106]!==ep||Y[107]!==eT?(R=(0,t.jsx)("input",{type:"range",min:1,max:9,step:2,value:ep,disabled:eT,onChange:P,className:"accent-emerald-400"}),Y[106]=ep,Y[107]=eT,Y[108]=R):R=Y[108],Y[109]!==ek?(D=(0,t.jsx)("span",{className:"text-xs text-slate-400",children:ek}),Y[109]=ek,Y[110]=D):D=Y[110],Y[111]!==R||Y[112]!==D?(E=(0,t.jsxs)("label",{className:"flex flex-col gap-2 sm:w-48",children:[T,R,D]}),Y[111]=R,Y[112]=D,Y[113]=E):E=Y[113],Y[114]===Symbol.for("react.memo_cache_sentinel")?(O=e=>ey(e.target.checked),Y[114]=O):O=Y[114],Y[115]!==eb?(H=(0,t.jsxs)("label",{className:"flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:[(0,t.jsx)("input",{type:"checkbox",checked:eb,onChange:O,className:"h-4 w-4 rounded border border-slate-600 bg-slate-900 text-emerald-400 accent-emerald-400"}),"Trendline"]}),Y[115]=eb,Y[116]=H):H=Y[116],Y[117]!==E||Y[118]!==H?(I=(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-4 text-sm text-slate-200 sm:flex-row sm:items-end sm:justify-end",children:[E,H]}),Y[117]=E,Y[118]=H,Y[119]=I):I=Y[119],Y[120]!==$||Y[121]!==I?(z=(0,t.jsxs)("div",{className:"flex flex-wrap gap-6",children:[$,I]}),Y[120]=$,Y[121]=I,Y[122]=z):z=Y[122],Y[123]!==ew.length||Y[124]!==ev||Y[125]!==ed||Y[126]!==eb||Y[127]!==ep||Y[128]!==eu?(G=(0,t.jsx)(eo,{lessons:ev,smoothingWindow:ep,showTrendline:eb,totalLessons:ew.length,targetWpm:eu,selectedLetter:ed}),Y[123]=ew.length,Y[124]=ev,Y[125]=ed,Y[126]=eb,Y[127]=ep,Y[128]=eu,Y[129]=G):G=Y[129],Y[130]!==z||Y[131]!==G?(F=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[z,G]}),Y[130]=z,Y[131]=G,Y[132]=F):F=Y[132],Y[133]!==eS||Y[134]!==eN.totalLessons?(B=(0,t.jsx)(eg,{buckets:eS,totalLessons:eN.totalLessons}),Y[133]=eS,Y[134]=eN.totalLessons,Y[135]=B):B=Y[135],Y[136]!==eN?(U=(0,t.jsx)(ef,{summary:eN}),Y[136]=eN,Y[137]=U):U=Y[137],Y[138]!==B||Y[139]!==U?(q=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-2",children:[B,U]}),Y[138]=B,Y[139]=U,Y[140]=q):q=Y[140],Y[141]===Symbol.for("react.memo_cache_sentinel")?(K=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent lessons"}),Y[141]=K):K=Y[141],Y[142]!==Q?(J=(0,t.jsxs)("div",{className:"mt-8",children:[K,0===Q.length?(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete a lesson to see stats."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:Q.slice(-6).reverse().map(et)})]}),Y[142]=Q,Y[143]=J):J=Y[143],Y[144]!==b||Y[145]!==M||Y[146]!==F||Y[147]!==q||Y[148]!==J?(V=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[b,M,F,q,J]}),Y[144]=b,Y[145]=M,Y[146]=F,Y[147]=q,Y[148]=J,Y[149]=V):V=Y[149],V}function et(e){return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.text}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:new Date(e.timestamp).toLocaleString()})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:d(e.durationMs)}),(0,t.jsxs)("p",{className:"text-xs text-rose-400",children:[e.mistakes??0," mistakes"]})]})]},e.id)}function ea(e,t){return e+t.wpm}function er(e){return e.accuracy??0}function el(e){return e.wpm??0}function es(e,t){var a;return e.wpm=e.wpm+(t.wpm??0),e.accuracy=e.accuracy+(t.accuracy??0),e.words=e.words+((a=t.text)?a.trim().split(/\s+/).filter(Boolean).length:0),e.duration=e.duration+(t.durationMs??0),e}function en(e,t){return{...e,lessonNumber:t+1}}function ei(e){let r,l,s,n,i=(0,a.c)(10),{label:c,value:o,hint:m}=e;return i[0]!==c?(r=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=r):r=i[1],i[2]!==o?(l=(0,t.jsx)("p",{className:"mt-2 text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=l):l=i[3],i[4]!==m?(s=m?(0,t.jsx)("p",{className:"text-xs text-slate-500",children:m}):null,i[4]=m,i[5]=s):s=i[5],i[6]!==r||i[7]!==l||i[8]!==s?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-5 text-center",children:[r,l,s]}),i[6]=r,i[7]=l,i[8]=s,i[9]=n):n=i[9],n}function ec(e){let r,l,s,n,i=(0,a.c)(16),{letters:c,selectedLetter:o,onSelect:m}=e;if(!c.length){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:"Complete a lesson to unlock insights."}),i[0]=e):e=i[0],e}i[1]!==m?(r=()=>m("all"),i[1]=m,i[2]=r):r=i[2];let u=`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${"all"===o?"bg-emerald-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;if(i[3]!==r||i[4]!==u?(l=(0,t.jsx)("button",{type:"button",onClick:r,className:u,children:"All"}),i[3]=r,i[4]=u,i[5]=l):l=i[5],i[6]!==c||i[7]!==m||i[8]!==o){let e;i[10]!==m||i[11]!==o?(e=e=>(0,t.jsxs)("button",{type:"button",onClick:()=>m(e.letter),className:`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${o===e.letter?"bg-sky-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:[e.letter,(0,t.jsx)("span",{className:"ml-1 text-[10px] text-slate-400",children:e.count})]},e.letter),i[10]=m,i[11]=o,i[12]=e):e=i[12],s=c.map(e),i[6]=c,i[7]=m,i[8]=o,i[9]=s}else s=i[9];return i[13]!==l||i[14]!==s?(n=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-2",children:[l,s]}),i[13]=l,i[14]=s,i[15]=n):n=i[15],n}function eo(e){let r,l,s,n,i,c,o,m,u,d,h,p,g,x,f,b,y,w,j,v,N,S,k,_,L,W,A,C,$,T,P,R,D,E,O=(0,a.c)(97),{lessons:H,smoothingWindow:I,showTrendline:z,totalLessons:G,targetWpm:F,selectedLetter:B}=e;if(0===G){let e;return O[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-6 text-sm text-slate-400",children:"Complete a lesson to unlock progress visualizations."}),O[0]=e):e=O[0],e}if(!H.length){let e,a;return O[1]!==B?(e=B.toUpperCase(),O[1]=B,O[2]=e):e=O[2],O[3]!==e?(a=(0,t.jsxs)("p",{className:"mt-6 text-sm text-slate-400",children:['No lessons yet for the letter "',e,'". Keep practicing to fill this chart.']}),O[3]=e,O[4]=a):a=O[4],a}if(O[5]!==H||O[6]!==z||O[7]!==I||O[8]!==F||O[9]!==G){let e,t,a,m=H.map(ep),u=H.map(eh),d=M(m,I),h=M(u,I),p=H.map((e,t)=>({lessonNumber:e.lessonNumber,wpm:d[t]??e.wpm,accuracy:h[t]??e.accuracy,rawWpm:e.wpm,rawAccuracy:e.accuracy})),g=Math.max(G,1);i=Math.max(F+15,...p.map(ed),40),O[17]!==g?(e=e=>1===g?450:60+(e-1)/(g-1)*780,O[17]=g,O[18]=e):e=O[18],n=e,O[19]!==i?(t=e=>280-Math.max(0,e)/(i||1)*240,O[19]=i,O[20]=t):t=O[20],c=t,o=eu,O[21]!==n?(a=(e,t,a)=>0===e.length?"":e.map((e,r)=>{let l=n(e.lessonNumber).toFixed(2),s=a(e[t]).toFixed(2);return`${0===r?"M":"L"}${l},${s}`}).join(" "),O[21]=n,O[22]=a):a=O[22];let x=a;s=x(p,"wpm",c),r=x(p,"accuracy",o);let f=p.map(em);l=z?(e=>{if(!Array.isArray(e)||e.length<2)return null;let t=0,a=0,r=0,l=0;e.forEach(({x:e,y:s})=>{t+=e,a+=s,r+=e*s,l+=e*e});let s=e.length,n=s*l-t*t;if(0===n)return null;let i=(s*r-t*a)/n,c=(a-i*t)/s;return{slope:i,intercept:c}})(f):null,O[5]=H,O[6]=z,O[7]=I,O[8]=F,O[9]=G,O[10]=r,O[11]=l,O[12]=s,O[13]=n,O[14]=i,O[15]=c,O[16]=o}else r=O[10],l=O[11],s=O[12],n=O[13],i=O[14],c=O[15],o=O[16];let U=l,q=H[0]?.lessonNumber??1,K=H.at(-1)?.lessonNumber??q;O[23]!==U||O[24]!==K||O[25]!==q||O[26]!==n||O[27]!==c?(m=U?{x1:n(q),y1:c(U.slope*q+U.intercept),x2:n(K),y2:c(U.slope*K+U.intercept)}:null,O[23]=U,O[24]=K,O[25]=q,O[26]=n,O[27]=c,O[28]=m):m=O[28];let J=m;if(O[29]===Symbol.for("react.memo_cache_sentinel")?(u=[0,.25,.5,.75,1],O[29]=u):u=O[29],O[30]!==i||O[31]!==c||O[32]!==o){let e=u.map(e=>Math.round(i*e));x="mt-6",f="h-80 w-full",b="0 0 900 320",y="img",w="Typing performance chart",O[44]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"wpmGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgb(16,185,129)",stopOpacity:"0.4"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgb(16,185,129)",stopOpacity:"0.05"})]})}),v=(0,t.jsx)("line",{x1:60,y1:280,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.4)",strokeWidth:"1"}),d=(0,t.jsx)("line",{x1:60,y1:40,x2:60,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),h=(0,t.jsx)("line",{x1:840,y1:40,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),O[44]=d,O[45]=h,O[46]=j,O[47]=v):(d=O[44],h=O[45],j=O[46],v=O[47]),p=e.map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:54,x2:60,y1:c(e),y2:c(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsx)("text",{x:52,y:c(e)+4,textAnchor:"end",fontSize:"10",fill:"rgba(148,163,184,0.8)",children:e})]},`left-${e}`)),g=[0,25,50,75,100].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:840,x2:846,y1:o(e),y2:o(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsxs)("text",{x:848,y:o(e)+4,fontSize:"10",fill:"rgba(125,211,252,0.9)",children:[e,"%"]})]},`right-${e}`)),O[30]=i,O[31]=c,O[32]=o,O[33]=d,O[34]=h,O[35]=p,O[36]=g,O[37]=x,O[38]=f,O[39]=b,O[40]=y,O[41]=w,O[42]=j,O[43]=v}else d=O[33],h=O[34],p=O[35],g=O[36],x=O[37],f=O[38],b=O[39],y=O[40],w=O[41],j=O[42],v=O[43];if(O[48]===Symbol.for("react.memo_cache_sentinel")?(N=(0,t.jsx)("text",{x:60,y:30,fontSize:"11",fill:"rgba(148,163,184,0.8)",children:"WPM"}),S=(0,t.jsx)("text",{x:840,y:30,fontSize:"11",textAnchor:"end",fill:"rgba(125,211,252,0.9)",children:"Accuracy"}),O[48]=N,O[49]=S):(N=O[48],S=O[49]),O[50]!==F||O[51]!==c?(k=F?(0,t.jsx)("line",{x1:60,x2:840,y1:c(F),y2:c(F),stroke:"rgba(248,113,113,0.4)",strokeDasharray:"6 4"}):null,O[50]=F,O[51]=c,O[52]=k):k=O[52],O[53]!==r?(_=r?(0,t.jsx)("path",{d:r,fill:"none",stroke:"rgba(56,189,248,0.9)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round"}):null,O[53]=r,O[54]=_):_=O[54],O[55]!==s?(L=s?(0,t.jsx)("path",{d:s,fill:"none",stroke:"url(#wpmGradient)",strokeWidth:"3",strokeLinejoin:"round",strokeLinecap:"round"}):null,O[55]=s,O[56]=L):L=O[56],O[57]!==J?(W=J?(0,t.jsx)("line",{x1:J.x1,y1:J.y1,x2:J.x2,y2:J.y2,stroke:"rgba(248,250,252,0.5)",strokeWidth:"2",strokeDasharray:"4 4"}):null,O[57]=J,O[58]=W):W=O[58],O[59]!==H||O[60]!==n||O[61]!==c){let e;O[63]!==n||O[64]!==c?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:c(e.wpm),r:4,fill:"rgb(16,185,129)",stroke:"rgba(15,118,110,0.4)",strokeWidth:"1",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.wpm," wpm"]})},`wpm-${e.id??e.lessonNumber}`),O[63]=n,O[64]=c,O[65]=e):e=O[65],A=H.map(e),O[59]=H,O[60]=n,O[61]=c,O[62]=A}else A=O[62];if(O[66]!==H||O[67]!==n||O[68]!==o){let e;O[70]!==n||O[71]!==o?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:o(e.accuracy),r:3,fill:"rgb(56,189,248)",stroke:"rgba(14,165,233,0.2)",strokeWidth:"1",opacity:"0.8",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.accuracy,"% accuracy"]})},`accuracy-${e.id??e.lessonNumber}`),O[70]=n,O[71]=o,O[72]=e):e=O[72],C=H.map(e),O[66]=H,O[67]=n,O[68]=o,O[69]=C}else C=O[69];return O[73]!==d||O[74]!==h||O[75]!==p||O[76]!==g||O[77]!==k||O[78]!==_||O[79]!==L||O[80]!==W||O[81]!==A||O[82]!==C||O[83]!==f||O[84]!==b||O[85]!==y||O[86]!==w||O[87]!==j||O[88]!==v?($=(0,t.jsxs)("svg",{className:f,viewBox:b,role:y,"aria-label":w,children:[j,v,d,h,p,g,N,S,k,_,L,W,A,C]}),O[73]=d,O[74]=h,O[75]=p,O[76]=g,O[77]=k,O[78]=_,O[79]=L,O[80]=W,O[81]=A,O[82]=C,O[83]=f,O[84]=b,O[85]=y,O[86]=w,O[87]=j,O[88]=v,O[89]=$):$=O[89],O[90]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-emerald-400"}),"WPM (smoothed)"]}),O[90]=T):T=O[90],O[91]===Symbol.for("react.memo_cache_sentinel")?(P=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-sky-400"}),"Accuracy (smoothed)"]}),O[91]=P):P=O[91],O[92]===Symbol.for("react.memo_cache_sentinel")?(R=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full border border-slate-200 border-dashed"}),"Trendline"]}),O[92]=R):R=O[92],O[93]===Symbol.for("react.memo_cache_sentinel")?(D=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-4 text-xs text-slate-400",children:[T,P,R,(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-rose-400/50"}),"Target WPM"]})]}),O[93]=D):D=O[93],O[94]!==x||O[95]!==$?(E=(0,t.jsxs)("div",{className:x,children:[$,D]}),O[94]=x,O[95]=$,O[96]=E):E=O[96],E}function em(e){return{x:e.lessonNumber,y:e.rawWpm}}function eu(e){return 280-Math.max(0,Math.min(100,e))/100*240}function ed(e){return e.wpm}function eh(e){return e.accuracy}function ep(e){return e.wpm}function eg(e){let r,l,s,n,i=(0,a.c)(11),{buckets:c,totalLessons:o}=e;if(!o){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete lessons to populate this chart."})]}),i[0]=e):e=i[0],e}i[1]!==c?(r=Math.max(...c.map(ex),1),i[1]=c,i[2]=r):r=i[2];let m=r;if(i[3]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"lessons"})]}),i[3]=l):l=i[3],i[4]!==c||i[5]!==m){let e;i[7]!==m?(e=e=>(0,t.jsxs)("div",{className:"flex-1 text-center",children:[(0,t.jsx)("div",{className:"relative h-32 overflow-hidden rounded-2xl bg-slate-900/60",children:(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 rounded-2xl bg-sky-400/70",style:{height:`${e.count/m*100||0}%`}})}),(0,t.jsx)("p",{className:"mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:e.count})]},e.label),i[7]=m,i[8]=e):e=i[8],s=c.map(e),i[4]=c,i[5]=m,i[6]=s}else s=i[6];return i[9]!==s?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[l,(0,t.jsx)("div",{className:"mt-6 flex gap-3",children:s})]}),i[9]=s,i[10]=n):n=i[10],n}function ex(e){return e.count}function ef(e){let r,l,s,n,i,c,o,m,u=(0,a.c)(20),{summary:d}=e,h=d.totalLessons?`${d.successRate}% of sessions`:"—";u[0]!==d.lessonsAboveTarget||u[1]!==h?(r={label:"Lessons ≥ target",value:d.lessonsAboveTarget,detail:h},u[0]=d.lessonsAboveTarget,u[1]=h,u[2]=r):r=u[2],u[3]!==d.totalMinutes?(l={label:"Typing minutes",value:d.totalMinutes,detail:"lifetime focus time"},u[3]=d.totalMinutes,u[4]=l):l=u[4],u[5]!==d.totalWords?(s={label:"Words practiced",value:d.totalWords,detail:"approximate"},u[5]=d.totalWords,u[6]=s):s=u[6];let p=`${d.wpmStreak} lessons`;u[7]!==p?(n={label:"WPM streak",value:p,detail:"non-stop improvement"},u[7]=p,u[8]=n):n=u[8];let g=`${d.accuracyStreak} lessons`;u[9]!==g?(i={label:"Accuracy streak",value:g,detail:"steady precision"},u[9]=g,u[10]=i):i=u[10],u[11]!==r||u[12]!==l||u[13]!==s||u[14]!==n||u[15]!==i?(c=[r,l,s,n,i],u[11]=r,u[12]=l,u[13]=s,u[14]=n,u[15]=i,u[16]=c):c=u[16];let x=c;return u[17]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Highlights"}),u[17]=o):o=u[17],u[18]!==x?(m=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[o,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:x.map(eb)})]}),u[18]=x,u[19]=m):m=u[19],m}function eb(e){return(0,t.jsxs)("li",{className:"flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.2em] text-slate-500",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.detail})]}),(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:e.value})]},e.label)}function ey(e){let r,s,n,i,c,o,m,u,d,h,p,g,x,f,b=(0,a.c)(34),{targetWpm:y,setTargetWpm:w,lessonsPerUnlock:j,setLessonsPerUnlock:v,unlockedLetters:N,nextLetter:S,codingLanguage:k,setCodingLanguage:_}=e;b[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Configuration"}),b[0]=r):r=b[0],b[1]!==w?(s=e=>w(Number(e.target.value)||35),b[1]=w,b[2]=s):s=b[2],b[3]!==s||b[4]!==y?(n=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Target WPM",(0,t.jsx)("input",{type:"number",min:5,max:200,value:y,onChange:s,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),b[3]=s,b[4]=y,b[5]=n):n=b[5],b[6]!==v?(i=e=>v(Math.max(1,Number(e.target.value)||5)),b[6]=v,b[7]=i):i=b[7],b[8]!==j||b[9]!==i?(c=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Lessons per unlock",(0,t.jsx)("input",{type:"number",min:1,max:20,value:j,onChange:i,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),b[8]=j,b[9]=i,b[10]=c):c=b[10],b[11]!==_?(o=e=>_(e.target.value),b[11]=_,b[12]=o):o=b[12],b[13]===Symbol.for("react.memo_cache_sentinel")?(m=l.map(ew),b[13]=m):m=b[13],b[14]!==k||b[15]!==o?(u=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Coding language",(0,t.jsx)("select",{value:k,onChange:o,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60",children:m})]}),b[14]=k,b[15]=o,b[16]=u):u=b[16],b[17]!==n||b[18]!==c||b[19]!==u?(d=(0,t.jsxs)("div",{className:"mt-6 grid gap-6 lg:grid-cols-3 sm:grid-cols-2",children:[n,c,u]}),b[17]=n,b[18]=c,b[19]=u,b[20]=d):d=b[20],b[21]!==N?(h=N.join(", "),b[21]=N,b[22]=h):h=b[22],b[23]!==h?(p=(0,t.jsxs)("p",{children:["Unlocked letters: ",h]}),b[23]=h,b[24]=p):p=b[24];let M=S??"complete",L=S?"maintain target WPM to progress":"all done";return b[25]!==M||b[26]!==L?(g=(0,t.jsxs)("p",{children:["Next unlock: ",M," (",L,")"]}),b[25]=M,b[26]=L,b[27]=g):g=b[27],b[28]!==p||b[29]!==g?(x=(0,t.jsxs)("div",{className:"mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300",children:[p,g]}),b[28]=p,b[29]=g,b[30]=x):x=b[30],b[31]!==x||b[32]!==d?(f=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[r,d,x]}),b[31]=x,b[32]=d,b[33]=f):f=b[33],f}function ew(e){return(0,t.jsx)("option",{value:e.id,children:e.label},e.id)}e.s(["default",()=>$],81694)}]);