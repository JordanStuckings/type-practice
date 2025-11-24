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
dispatch(handlers, "noop")`}}],n=["i","a","l","r"],i=Array.from(new Set([...n,...(()=>{let e="abcdefghijklmnopqrstuvwxyz".split(""),t=e.indexOf("q"),a=e.indexOf("u");if(t>=0&&a>=0&&a>t){let[r]=e.splice(a,1);e.splice(t,0,r)}return e})()])),c="typing-progress-v1",o=l[0]?.id??"javascript",m=[{id:"lesson",label:"Lesson"},{id:"coding",label:"Coding"},{id:"profile",label:"Profile"},{id:"settings",label:"Settings"}],u=(e=1)=>{let t=Math.abs(Math.floor(e))%0x7fffffff;return 0===t&&(t=1),()=>((t=16807*t%0x7fffffff)-1)/0x7ffffffe},d=e=>{if(!e)return"00:00";let t=Math.max(0,Math.floor(e/1e3)),a=String(Math.floor(t/60)).padStart(2,"0"),r=String(t%60).padStart(2,"0");return`${a}:${r}`},h=(e,t)=>{let a=new Set(t);return Array.from(e).every(e=>a.has(e))},p=e=>e<=4?"short":e<=7?"medium":e<=10?"long":"extra_long",g={very_common:4,common:3,specialized:2,rare:1},x={low:3,medium:2,high:1},f={short:3,medium:3,long:2,extra_long:1},b={simple_root:3,compound:2.5,affixed:2,loanword:1.5},y={general:3,technology:2.6,data:2.4,design:2.3,science:2.2,project:2.2,security:2.2,networking:2.2,food:2},w={"double-letter":.35,"alternating-cv":.4,"all-lower":.15,"vowel-run":-.35,"rare-letter":-.6,"vowel-glide":.15,"y-ending":.1},j=(e,t=0)=>{let a=Number.parseFloat(e);return Number.isFinite(a)?a:t},v=e=>{var t;if(!e)return null;let a=String(e.word??"").toLowerCase().trim();if(!a||!/^[a-z]+$/.test(a)||a.length<2||a.length>12)return null;let r=(t=e.typing_features)?t.split("|").map(e=>e.trim()).filter(e=>e&&"none"!==e):[],l="yes"===String(e.recommended??"").trim().toLowerCase();return{word:a,length:a.length,frequencyTier:e.frequency_tier??"rare",frequency:j(e.frequency),zipf:j(e.zipf),obscurityLevel:e.obscurity_level??"medium",lengthGroup:e.length_group??p(a.length),partOfSpeech:e.part_of_speech??"noun",domain:e.domain??"general",complexity:e.complexity??"simple_root",typingFeatures:r,recommended:l,notes:e.notes??""}},N=e=>({word:e,length:e.length,frequencyTier:"common",frequency:1,zipf:5,obscurityLevel:"low",lengthGroup:p(e.length),partOfSpeech:"noun",domain:"general",complexity:"simple_root",typingFeatures:["all-lower"],recommended:!0,notes:"fallback"}),S=["air","aria","lair","liar","rail","briar","racial","radial","real","flare","argil","hilaria","jail","kalari","alarm","linear","clarion","plain","aqua","acquire","equal","opaque","queen","queue","queer","quail","qualia","qualm","quake","liquid","qibla","qi","rails","trail","aural","rival","wail","axial","relay","lazily","dragon","forest","mural","artisan","station","rotation","delivery","formation","vital","gaily","brawler","sailor","pavilion","citadel","journal","keyboard","annex","axiom","boxcar","index","pixel","xenon","galaxy","byte","canyon","rhythm","syrup","voyage","zephyr","amaze","blizzard","frozen","guzzle","puzzle"].map(e=>N(e)),k=[{allowHighObscurity:!1,includeShortWords:!1,includeNonRecommended:!1},{allowHighObscurity:!0,includeShortWords:!1,includeNonRecommended:!1},{allowHighObscurity:!0,includeShortWords:!0,includeNonRecommended:!1},{allowHighObscurity:!0,includeShortWords:!0,includeNonRecommended:!0}],_=["medium","short","long","extra_long"],M=e=>{let t=[],a="",r=!1;for(let l=0;l<e.length;l+=1){let s=e[l];if('"'===s){r&&'"'===e[l+1]?(a+='"',l+=1):r=!r;continue}if(","===s&&!r){t.push(a),a="";continue}a+=s}return t.push(a),t.map(e=>e.trim())},W=(e,a,r)=>Array.from(e).map((e,l)=>{let s=a[l],n=" "===e?" ":e,i=!!r[l];if(s){let a=s===e;return i?(0,t.jsx)("span",{className:a?"text-amber-300 underline decoration-amber-300 decoration-2":"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:a?"text-emerald-400":"text-rose-400 underline decoration-rose-400 decoration-2",children:n},`${e}-${l}`)}return l===a.length?i?(0,t.jsx)("span",{className:"rounded border border-rose-500 bg-rose-500/20 text-rose-200",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:"rounded bg-slate-700/70 text-white",children:n},`${e}-${l}`):(0,t.jsx)("span",{className:"text-slate-500",children:n},`${e}-${l}`)}),L=(e,t)=>{if(!Array.isArray(e)||0===e.length)return[];let a=Math.max(1,Math.floor(t));if(1===a)return[...e];let r=Math.floor(a/2);return e.map((t,a)=>{let l=Math.max(0,a-r),s=Math.min(e.length-1,a+r),n=e.slice(l,s+1);return Number((n.reduce((e,t)=>e+t,0)/n.length).toFixed(2))})},A=(e,t)=>{if(!Array.isArray(e)||0===e.length)return 0;let a=1,r=1;for(let l=1;l<e.length;l+=1)e[l][t]>=e[l-1][t]?r+=1:r=1,r>a&&(a=r);return a},C=[{label:"<80",min:0,max:80},{label:"80-85",min:80,max:85},{label:"85-90",min:85,max:90},{label:"90-95",min:90,max:95},{label:"95+",min:95,max:101}],$=e=>l.find(t=>t.id===e)?.label??e,T=(e,t)=>{if(!e)return"";let a=t,r="";for(;a<e.length;){let t=e[a];if(" "===t||"	"===t)r+=t,a+=1;else break}return r};function R(){let e,d,j,L,A,C,$,R,I,F,K,J,V,Y,Q,X,Z,ee,et,er,el,es,en,ei,ec,eo,em,eu,ed,eh,ep,eg,ex,ef,eb,ey,ew,ev,eN,eS,ek,e_,eM,eW,eL,eA,eC,e$,eT,eR,eP,eO,eD,eE,eH,ez=(0,a.c)(169),[eq,eI]=(0,r.useState)("lesson"),[eG,eF]=(0,r.useState)(0),[eB,eU]=(0,r.useState)(""),[eK,eJ]=(0,r.useState)(null),[eV,eY]=(0,r.useState)(!1);ez[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],ez[0]=e):e=ez[0];let[eQ,eX]=(0,r.useState)(e),[eZ,e0]=(0,r.useState)(35),[e1,e2]=(0,r.useState)(5),[e4,e3]=(0,r.useState)(n.length),[e5,e6]=(0,r.useState)(0);ez[1]===Symbol.for("react.memo_cache_sentinel")?(d={},ez[1]=d):d=ez[1];let[e8,e9]=(0,r.useState)(d);ez[2]===Symbol.for("react.memo_cache_sentinel")?(j=[],ez[2]=j):j=ez[2];let[e7,te]=(0,r.useState)(j),[tt,ta]=(0,r.useState)(0),[tr,tl]=(0,r.useState)(""),[ts,tn]=(0,r.useState)(null),[ti,tc]=(0,r.useState)(!1);ez[3]===Symbol.for("react.memo_cache_sentinel")?(L=[],ez[3]=L):L=ez[3];let[to,tm]=(0,r.useState)(L);ez[4]===Symbol.for("react.memo_cache_sentinel")?(A={},ez[4]=A):A=ez[4];let[tu,td]=(0,r.useState)(A),[th,tp]=(0,r.useState)(o),tg=(0,r.useRef)(null),tx=(0,r.useRef)(null),tf=(0,r.useRef)(null),tb=(0,r.useRef)(null),ty=(0,r.useRef)(null);ez[5]!==e4?(C=i.slice(0,e4),ez[5]=e4,ez[6]=C):C=ez[6];let tw=C,tj=e4<i.length?i[e4]:null;ez[7]!==e7||ez[8]!==eG||ez[9]!==tw?($=((e,t,a)=>{if(!e.length)return[];let r=a.length>0?a:S,l=e.at(-1),s=[];for(let t=0;t<k.length;t+=1){let a=k[t],l=r.filter(t=>!!t?.word&&!!h(t.word,e)&&(!!a.includeShortWords||!(t.word.length<=2))&&(!!a.allowHighObscurity||"high"!==t.obscurityLevel)&&(!!a.includeNonRecommended||!1!==t.recommended));if(l.length>0&&(s=l,l.length>=18))break}if(0===s.length)return e.map(e=>`${e}${e}${e}`);let n=u(t+31*e.length),i=s.map(t=>({entry:t,score:((e,t,a,r=0)=>{var l;if(!e)return 0;let s=g[e.frequencyTier]??1,n=x[e.obscurityLevel]??1,i=b[e.complexity]??1,c=y[e.domain]??2,o=f[e.lengthGroup]??1,m=t.length,u=0;return m<=4&&"short"===e.lengthGroup?u=1:m<=7&&"medium"===e.lengthGroup?u=.5:m>=10&&"long"===e.lengthGroup&&(u=.4),3*s+2*n+i+c+o+u+(Array.isArray(l=e.typingFeatures)&&0!==l.length?l.reduce((e,t)=>e+(w[t]??0),0):0)+(a&&e.word.includes(a)?1:0)+(e.zipf??0)*.35+r})(t,e,l,.5*n())})).sort((e,t)=>t.score-e.score),c=Math.max(54,60),o=i.slice(0,Math.min(c,i.length)),m=((e,t)=>{if(!Array.isArray(e))return[];let a=[...e],r=u(t);for(let e=a.length-1;e>0;e-=1){let t=Math.floor(r()*(e+1));[a[e],a[t]]=[a[t],a[e]]}return a})(l&&o.some(e=>e.entry.word.includes(l))?o.filter(e=>e.entry.word.includes(l)):o,t).map(e=>e.entry);if(0===m.length)return e.map(e=>`${e}${e}${e}`);let{pattern:d,priority:j}=((e,t)=>{let a=e<=4?[{group:"medium",weight:.4},{group:"short",weight:.5},{group:"long",weight:.1}]:e<=8?[{group:"medium",weight:.5},{group:"short",weight:.3},{group:"long",weight:.2}]:e<=13?[{group:"medium",weight:.45},{group:"long",weight:.25},{group:"short",weight:.2},{group:"extra_long",weight:.1}]:[{group:"medium",weight:.4},{group:"long",weight:.3},{group:"short",weight:.15},{group:"extra_long",weight:.15}],r=((e,t)=>{let a={},r=0;if(e.forEach(({group:e,weight:l})=>{let s=Math.max(0,Math.round(l*t));a[e]=s,r+=s}),r>t){let l=r-t;for(let t=e.length-1;t>=0&&l>0;t-=1){let r=e[t].group,s=Math.min(l,a[r]);a[r]-=s,l-=s}}else if(r<t){let l=t-r;for(;l>0;)for(let t=0;t<e.length&&l>0;t+=1){let r=e[t].group;a[r]+=1,l-=1}}return a})(a,18),l=a.map(({group:e})=>({group:e,remaining:r[e]??0})),s=[];for(;s.length<18;){let e=!1;for(let t=0;t<l.length&&s.length<18;t+=1)l[t].remaining>0&&(s.push(l[t].group),l[t].remaining-=1,e=!0);if(!e)break}if(s.length<18){let e=l.map(e=>e.group).filter(Boolean),t=e.length?e:[..._],a=0;for(;s.length<18;){let e=t[a%t.length];s.push(e),a+=1}}return{pattern:s,priority:a.map(({group:e})=>e)}})(e.length,18),v=Array.from(new Set([...j,..._])),M=m.reduce((e,t)=>{let a=t.lengthGroup??p(t.word.length);return e[a]||(e[a]=[]),e[a].push(t),e},{}),W=e=>{let t=M[e];return t&&t.length?t.shift():null},L=()=>{for(let e=0;e<v.length;e+=1){let t=W(v[e]);if(t)return t}let e=Object.keys(M).filter(e=>!v.includes(e));for(let t=0;t<e.length;t+=1){let a=W(e[t]);if(a)return a}return null},A=[];for(let e=0;e<d.length&&A.length<18;e+=1){let t=W(d[e])??L();if(!t)break;A.push(t)}if(A.length<18){let t=Object.values(M).flat(),a=t.length>0?t:m.length>0?m:[],r=0;for(;A.length<18;)if(a.length>0)A.push(a[r%a.length]),r+=1;else{let t=l??e[0];if(!t)break;let a=`${t}${e[0]??t}${t}`;A.push(N(a))}}return A.slice(0,18).map(e=>e.word)})(tw,eG,e7),ez[7]=e7,ez[8]=eG,ez[9]=tw,ez[10]=$):$=ez[10];let tv=$;ez[11]!==tv?(R=tv.join(" "),ez[11]=tv,ez[12]=R):R=ez[12];let tN=R;ez[13]!==tN||ez[14]!==e8||ez[15]!==eB?(I=W(tN,eB,e8),ez[13]=tN,ez[14]=e8,ez[15]=eB,ez[16]=I):I=ez[16];let tS=I;ez[17]!==tt||ez[18]!==th?(F=((e,t)=>{let a=(e=>{if(!s.length)return null;let t=e%s.length;return s[t]})(e);if(!a)return{snippet:null,text:"",languages:[]};let r=l.find(e=>a.languages[e.id])?.id??l[0]?.id,n=a.languages[t]?t:r;return{snippet:a,text:a.languages[n]??"",activeLanguage:n}})(tt,th),ez[17]=tt,ez[18]=th,ez[19]=F):F=ez[19];let tk=F,t_=tk.text;ez[20]!==tr||ez[21]!==tu||ez[22]!==t_?(K=W(t_,tr,tu),ez[20]=tr,ez[21]=tu,ez[22]=t_,ez[23]=K):K=ez[23];let tM=K;ez[24]===Symbol.for("react.memo_cache_sentinel")?(J=()=>{let e=!1;return(async()=>{try{let t,a=await fetch("/type-practice/full_dictionary_en.csv"),r=await a.text();if(e)return;let l=(e=>{if(!e)return[];let t=e.trim().split(/\r?\n/);if(t.length<=1)return[];let a=M(t[0]),r=[],l=new Set;for(let e=1;e<t.length;e+=1){let s=t[e];if(!s)continue;let n=M(s);if(!n.length)continue;let i={};for(let e=0;e<a.length;e+=1)i[a[e]]=n[e]??"";let c=v(i);c&&c.recommended&&!l.has(c.word)&&(l.add(c.word),r.push(c))}return r})(r);te((t=new Map,l.forEach(e=>{e?.word&&t.set(e.word,e)}),S.forEach(e=>{e?.word&&!t.has(e.word)&&t.set(e.word,e)}),Array.from(t.values())))}catch(e){console.error("Failed to load word metadata",e),te(S)}})(),()=>{e=!0}},V=[],ez[24]=J,ez[25]=V):(J=ez[24],V=ez[25]),(0,r.useEffect)(J,V),ez[26]!==eq?(Y=()=>{("lesson"===eq||"coding"===eq)&&tg.current?.focus()},ez[26]=eq,ez[27]=Y):Y=ez[27],ez[28]!==eq||ez[29]!==ti||ez[30]!==tt||ez[31]!==eV||ez[32]!==eG?(Q=[eq,tt,ti,eG,eV],ez[28]=eq,ez[29]=ti,ez[30]=tt,ez[31]=eV,ez[32]=eG,ez[33]=Q):Q=ez[33],(0,r.useEffect)(Y,Q),ez[34]===Symbol.for("react.memo_cache_sentinel")?(X=()=>{let e=!1;try{let t=window.localStorage.getItem(c);if(t){let a=JSON.parse(t);"number"==typeof a.unlockedCount&&e3(a.unlockedCount),Array.isArray(a.lessonHistory)&&eX(a.lessonHistory),Array.isArray(a.codingHistory)&&tm(a.codingHistory),"number"==typeof a.successCounter&&e6(a.successCounter),"number"==typeof a.lessonIndex&&eF(a.lessonIndex),"number"==typeof a.targetWpm&&e0(a.targetWpm),"number"==typeof a.lessonsPerUnlock&&e2(a.lessonsPerUnlock),"number"==typeof a.codingIndex&&ta(a.codingIndex),"string"==typeof a.codingLanguage&&tp(a.codingLanguage),e=!0}}catch(e){console.error("Failed to restore progress",e)}e||window.localStorage.removeItem(c)},Z=[],ez[34]=X,ez[35]=Z):(X=ez[34],Z=ez[35]),(0,r.useEffect)(X,Z),ez[36]!==to||ez[37]!==tt||ez[38]!==th||ez[39]!==eQ||ez[40]!==eG||ez[41]!==e1||ez[42]!==e5||ez[43]!==eZ||ez[44]!==e4?(ee=()=>{try{window.localStorage.setItem(c,JSON.stringify({unlockedCount:e4,lessonHistory:eQ,codingHistory:to,successCounter:e5,lessonIndex:eG,targetWpm:eZ,lessonsPerUnlock:e1,codingIndex:tt,codingLanguage:th}))}catch(e){console.error("Failed to persist progress",e)}},et=[eQ,eG,e1,e5,eZ,e4,to,tt,th],ez[36]=to,ez[37]=tt,ez[38]=th,ez[39]=eQ,ez[40]=eG,ez[41]=e1,ez[42]=e5,ez[43]=eZ,ez[44]=e4,ez[45]=ee,ez[46]=et):(ee=ez[45],et=ez[46]),(0,r.useEffect)(ee,et),ez[47]!==eq||ez[48]!==ti||ez[49]!==eV?(er=()=>{if(!["lesson","coding"].includes(eq)||"lesson"===eq&&eV||"coding"===eq&&ti)return;let e=e=>{"Tab"===e.key||e.metaKey||e.ctrlKey||e.altKey||document.activeElement!==tg.current&&tg.current?.focus()};return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},el=[eq,ti,eV],ez[47]=eq,ez[48]=ti,ez[49]=eV,ez[50]=er,ez[51]=el):(er=ez[50],el=ez[51]),(0,r.useEffect)(er,el),ez[52]===Symbol.for("react.memo_cache_sentinel")?(es=()=>()=>{tx.current&&clearTimeout(tx.current),tf.current&&clearTimeout(tf.current),tb.current&&clearTimeout(tb.current),ty.current&&clearTimeout(ty.current)},en=[],ez[52]=es,ez[53]=en):(es=ez[52],en=ez[53]),(0,r.useEffect)(es,en),ez[54]!==e1||ez[55]!==eZ||ez[56]!==e4?(ei=e=>{e<eZ?e6(0):e6(e=>{let t=e+1,a=e4<i.length;return t>=e1&&a?(e3(z),0):t})},ez[54]=e1,ez[55]=eZ,ez[56]=e4,ez[57]=ei):ei=ez[57];let tW=ei;ez[58]===Symbol.for("react.memo_cache_sentinel")?(ec=()=>{eU(""),eJ(null),eY(!1),e9({})},ez[58]=ec):ec=ez[58];let tL=ec;ez[59]===Symbol.for("react.memo_cache_sentinel")?(eo=()=>{eF(H),tL()},ez[59]=eo):eo=ez[59];let tA=eo;ez[60]===Symbol.for("react.memo_cache_sentinel")?(em=()=>{tx.current&&clearTimeout(tx.current),tx.current=setTimeout(()=>{tx.current=null,tA()},0)},ez[60]=em):em=ez[60];let tC=em;ez[61]===Symbol.for("react.memo_cache_sentinel")?(eu=()=>{tl(""),tn(null),tc(!1),td({})},ez[61]=eu):eu=ez[61];let t$=eu;ez[62]===Symbol.for("react.memo_cache_sentinel")?(ed=()=>{ta(E)},ez[62]=ed):ed=ez[62];let tT=ed;ez[63]===Symbol.for("react.memo_cache_sentinel")?(eh=()=>{tb.current&&clearTimeout(tb.current),tb.current=setTimeout(()=>{tb.current=null,tT()},200)},ez[63]=eh):eh=ez[63];let tR=eh;ez[64]!==eV||ez[65]!==eK?(ep=()=>{tf.current&&clearTimeout(tf.current),eK&&!eV&&(tf.current=setTimeout(()=>{tf.current=null,tL()},45e3))},ez[64]=eV,ez[65]=eK,ez[66]=ep):ep=ez[66];let tP=ep;ez[67]!==ti||ez[68]!==ts?(eg=()=>{ty.current&&clearTimeout(ty.current),ts&&!ti&&(ty.current=setTimeout(()=>{ty.current=null,t$()},6e4))},ez[67]=ti,ez[68]=ts,ez[69]=eg):eg=ez[69];let tO=eg;ez[70]!==tW||ez[71]!==eV||ez[72]!==tN||ez[73]!==e8||ez[74]!==eK||ez[75]!==eZ||ez[76]!==tw?(ex=()=>{if(eV)return;let e=Date.now(),t=eK??e,a=Math.max(e-t,1),r=Math.max(a/6e4,.016666666666666666),l=Math.max(0,Math.round(tN.length/5/r)),s=tN.length||1,n=Object.keys(e8).length,i=Math.max(0,Math.round((s-n)/s*100));eY(!0),eX(t=>[...t,{id:`lesson-${t.length+1}-${e}`,wpm:l,accuracy:i,letters:tw.join(""),text:tN,timestamp:new Date(e).toISOString(),durationMs:a,success:l>=eZ,mistakes:n}]),tW(l),tC()},ez[70]=tW,ez[71]=eV,ez[72]=tN,ez[73]=e8,ez[74]=eK,ez[75]=eZ,ez[76]=tw,ez[77]=ex):ex=ez[77];let tD=ex;ez[78]!==ti||ez[79]!==th||ez[80]!==tu||ez[81]!==ts||ez[82]!==t_||ez[83]!==tk.activeLanguage||ez[84]!==tk.snippet||ez[85]!==eZ?(ef=()=>{if(ti||!t_)return;let e=Date.now(),t=ts??e,a=Math.max(e-t,1),r=Math.max(a/6e4,.016666666666666666),l=Math.max(0,Math.round(t_.length/5/r)),s=t_.length||1,n=Object.keys(tu).length,i=Math.max(0,Math.round((s-n)/s*100)),c=tk.snippet;tc(!0),tm(t=>[...t,{id:`coding-${t.length+1}-${e}`,wpm:l,accuracy:i,language:tk.activeLanguage??th,snippetId:c?.id??"snippet",concept:c?.concept??"Snippet",text:t_,timestamp:new Date(e).toISOString(),durationMs:a,mistakes:n,focusCharacters:c?.focusCharacters??[],success:l>=eZ,mode:"coding"}]),tR()},ez[78]=ti,ez[79]=th,ez[80]=tu,ez[81]=ts,ez[82]=t_,ez[83]=tk.activeLanguage,ez[84]=tk.snippet,ez[85]=eZ,ez[86]=ef):ef=ez[86];let tE=ef;ez[87]===Symbol.for("react.memo_cache_sentinel")?(eb=e=>{e9(t=>t[e]?t:{...t,[e]:!0})},ez[87]=eb):eb=ez[87];let tH=eb;ez[88]===Symbol.for("react.memo_cache_sentinel")?(ey=e=>{td(t=>t[e]?t:{...t,[e]:!0})},ez[88]=ey):ey=ez[88];let tz=ey;ez[89]!==eq||ez[90]!==ti||ez[91]!==ts||ez[92]!==t_||ez[93]!==eV||ez[94]!==tN||ez[95]!==eK?(ew=e=>{let t="lesson"===eq,a="coding"===eq;if(!t&&!a||e.metaKey||e.ctrlKey||e.altKey||t&&eV||a&&ti)return;if("Backspace"===e.key){e.preventDefault(),t?eU(D):tl(O);return}if("Tab"===e.key){if(!a)return;e.preventDefault(),tl(e=>{if(ti||e.length>=t_.length)return e;let t=T(t_,e.length);return t?t_.startsWith(t,e.length)?e+t:(tz(e.length),e):e});return}let r="Enter"===e.key?"\n":e.key;if(1===r.length||"\n"===r){if(t&&!eK&&eJ(Date.now()),a&&!ts&&tn(Date.now()),e.preventDefault(),t)return void eU(e=>{if(eV||e.length>=tN.length)return e;let t=tN[e.length];return t?r===t?e+r:(tH(e.length),e):e});tl(e=>{if(ti||e.length>=t_.length)return e;let t=t_[e.length];if(!t)return e;if("\n"===r){if("\n"!==t)return tz(e.length),e;let a=T(t_,e.length+1);return e+"\n"+a}return r===t?e+r:(tz(e.length),e)})}},ez[89]=eq,ez[90]=ti,ez[91]=ts,ez[92]=t_,ez[93]=eV,ez[94]=tN,ez[95]=eK,ez[96]=ew):ew=ez[96];let tq=ew;ez[97]!==tD||ez[98]!==eV||ez[99]!==tN||ez[100]!==eB?(ev=()=>{!eV&&tN&&eB===tN&&tD()},eN=[tD,eV,tN,eB],ez[97]=tD,ez[98]=eV,ez[99]=tN,ez[100]=eB,ez[101]=ev,ez[102]=eN):(ev=ez[101],eN=ez[102]),(0,r.useEffect)(ev,eN),ez[103]!==ti||ez[104]!==tr||ez[105]!==t_||ez[106]!==tE?(eS=()=>{!ti&&t_&&tr===t_&&tE()},ek=[ti,tr,t_,tE],ez[103]=ti,ez[104]=tr,ez[105]=t_,ez[106]=tE,ez[107]=eS,ez[108]=ek):(eS=ez[107],ek=ez[108]),(0,r.useEffect)(eS,ek),ez[109]!==tP?(e_=()=>(tP(),()=>{tf.current&&clearTimeout(tf.current)}),ez[109]=tP,ez[110]=e_):e_=ez[110],ez[111]!==tP||ez[112]!==eB?(eM=[tP,eB],ez[111]=tP,ez[112]=eB,ez[113]=eM):eM=ez[113],(0,r.useEffect)(e_,eM),ez[114]!==tO?(eW=()=>(tO(),()=>{ty.current&&clearTimeout(ty.current)}),ez[114]=tO,ez[115]=eW):eW=ez[115],ez[116]!==tr||ez[117]!==tO?(eL=[tO,tr],ez[116]=tr,ez[117]=tO,ez[118]=eL):eL=ez[118],(0,r.useEffect)(eW,eL),ez[119]===Symbol.for("react.memo_cache_sentinel")?(eA=()=>{t$()},ez[119]=eA):eA=ez[119],ez[120]!==tt||ez[121]!==th?(eC=[t$,tt,th],ez[120]=tt,ez[121]=th,ez[122]=eC):eC=ez[122],(0,r.useEffect)(eA,eC);let tI="lesson"!==eq&&"coding"!==eq||"lesson"===eq&&eV||"coding"===eq&&ti;return ez[123]!==eq?(e$=m.map(e=>(0,t.jsx)(q,{isActive:eq===e.id,label:e.label,onClick:()=>eI(e.id)},e.id)),ez[123]=eq,ez[124]=e$):e$=ez[124],ez[125]!==e$?(eT=(0,t.jsx)("nav",{className:"flex flex-wrap justify-center gap-3",children:e$}),ez[125]=e$,ez[126]=eT):eT=ez[126],ez[127]!==eq||ez[128]!==tS||ez[129]!==eQ||ez[130]!==tN||ez[131]!==tj||ez[132]!==eZ||ez[133]!==e4?(eR="lesson"===eq&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(B,{unlockedCount:e4,nextLetter:tj,history:eQ,targetWpm:eZ}),(0,t.jsx)(G,{highlightedPrompt:tS,lessonText:tN,onClick:()=>tg.current?.focus()}),(0,t.jsx)("p",{className:"text-center text-xs text-slate-400",children:"Typing is captured automatically; press Backspace to fix mistakes and keep eyes on the words."})]}),ez[127]=eq,ez[128]=tS,ez[129]=eQ,ez[130]=tN,ez[131]=tj,ez[132]=eZ,ez[133]=e4,ez[134]=eR):eR=ez[134],ez[135]!==eq||ez[136]!==ti||ez[137]!==tM||ez[138]!==to||ez[139]!==tt||ez[140]!==th||ez[141]!==t_||ez[142]!==tk?(eP="coding"===eq&&(0,t.jsx)(U,{snippetPayload:tk,highlightedPrompt:tM,codingComplete:ti,onNext:tT,codingHistory:to,codingLanguage:th,codingIndex:tt,codingText:t_}),ez[135]=eq,ez[136]=ti,ez[137]=tM,ez[138]=to,ez[139]=tt,ez[140]=th,ez[141]=t_,ez[142]=tk,ez[143]=eP):eP=ez[143],ez[144]!==tq||ez[145]!==tI?(eO=(0,t.jsx)("input",{ref:tg,spellCheck:!1,value:"",onChange:P,onKeyDown:tq,className:"absolute left-0 top-0 h-px w-px opacity-0","aria-hidden":!0,disabled:tI}),ez[144]=tq,ez[145]=tI,ez[146]=eO):eO=ez[146],ez[147]!==eq||ez[148]!==eQ||ez[149]!==e1||ez[150]!==tj||ez[151]!==e5||ez[152]!==eZ||ez[153]!==tw?(eD="profile"===eq&&(0,t.jsx)(ea,{history:eQ,unlockedLetters:tw,nextLetter:tj,successCounter:e5,lessonsPerUnlock:e1,targetWpm:eZ}),ez[147]=eq,ez[148]=eQ,ez[149]=e1,ez[150]=tj,ez[151]=e5,ez[152]=eZ,ez[153]=tw,ez[154]=eD):eD=ez[154],ez[155]!==eq||ez[156]!==th||ez[157]!==e1||ez[158]!==tj||ez[159]!==eZ||ez[160]!==tw?(eE="settings"===eq&&(0,t.jsx)(ej,{targetWpm:eZ,setTargetWpm:e0,lessonsPerUnlock:e1,setLessonsPerUnlock:e2,unlockedLetters:tw,nextLetter:tj,codingLanguage:th,setCodingLanguage:tp}),ez[155]=eq,ez[156]=th,ez[157]=e1,ez[158]=tj,ez[159]=eZ,ez[160]=tw,ez[161]=eE):eE=ez[161],ez[162]!==eT||ez[163]!==eR||ez[164]!==eP||ez[165]!==eO||ez[166]!==eD||ez[167]!==eE?(eH=(0,t.jsx)("div",{className:"min-h-screen bg-slate-950 px-4 py-10 text-slate-100",children:(0,t.jsxs)("div",{className:"mx-auto flex w-full max-w-6xl flex-col items-center gap-8",children:[eT,eR,eP,eO,eD,eE]})}),ez[162]=eT,ez[163]=eR,ez[164]=eP,ez[165]=eO,ez[166]=eD,ez[167]=eE,ez[168]=eH):eH=ez[168],eH}function P(){}function O(e){return e.slice(0,-1)}function D(e){return e.slice(0,-1)}function E(e){return e+1}function H(e){return e+1}function z(e){return Math.min(e+1,i.length)}function q(e){let r,l=(0,a.c)(4),{isActive:s,label:n,onClick:i}=e,c=`rounded-full px-5 py-2 text-sm font-medium transition ${s?"bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/40":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;return l[0]!==n||l[1]!==i||l[2]!==c?(r=(0,t.jsx)("button",{type:"button",onClick:i,className:c,children:n}),l[0]=n,l[1]=i,l[2]=c,l[3]=r):r=l[3],r}let I=23;function G(e){let r,l,s,n,i,c=(0,a.c)(21),{highlightedPrompt:o,lessonText:m,onClick:u}=e;if(c[0]!==o||c[1]!==m){e:{let e;if(!m){let e;c[3]!==o?(e=o.length>0?[o]:[],c[3]=o,c[4]=e):e=c[4],r=e;break e}let t=((e,t=I)=>{if(!e)return[];let a=[],r=0;for(;r<e.length;){let l=Math.min(r+t,e.length);if(l<e.length&&" "!==e[l]){let t=e.slice(r,l).lastIndexOf(" ");t>0&&(l=r+t)}for(l===r&&(l=Math.min(r+t,e.length)),a.push({start:r,end:l}),r=l;r<e.length&&" "===e[r];)r+=1}return a})(m);if(0===t.length){let e;c[5]!==o?(e=[o],c[5]=o,c[6]=e):e=c[6],r=e;break e}c[7]!==o?(e=e=>{let{start:t,end:a}=e;return o.slice(t,a)},c[7]=o,c[8]=e):e=c[8],r=t.map(e)}c[0]=o,c[1]=m,c[2]=r}else r=c[2];let d=r;c[9]!==d?(l=d.reduce(F,0),c[9]=d,c[10]=l):l=c[10];let h=Math.max(1,Math.min(I,l));if(c[11]!==h||c[12]!==d){let e;c[14]!==h?(e=(e,a)=>(0,t.jsxs)("div",{className:"grid w-full justify-center gap-3 text-center font-mono text-4xl tracking-tight text-white sm:text-5xl",style:{gridTemplateColumns:`repeat(${h}, minmax(0, 1fr))`},children:[e.map((e,r)=>(0,t.jsx)("span",{className:"flex min-h-[3.5rem] items-center justify-center px-2 sm:min-h-[4.5rem]",children:e},`prompt-char-${a}-${r}`)),Array.from({length:Math.max(0,h-e.length)}).map((e,r)=>(0,t.jsx)("span",{className:"pointer-events-none flex min-h-[3.5rem] select-none items-center justify-center px-2 text-transparent sm:min-h-[4.5rem]","aria-hidden":!0,children:" "},`prompt-filler-${a}-${r}`))]},`prompt-line-${a}`),c[14]=h,c[15]=e):e=c[15],s=d.map(e),c[11]=h,c[12]=d,c[13]=s}else s=c[13];return c[16]!==s?(n=(0,t.jsx)("div",{className:"relative flex w-full max-w-7xl flex-col items-center gap-8",children:s}),c[16]=s,c[17]=n):n=c[17],c[18]!==u||c[19]!==n?(i=(0,t.jsx)("section",{className:"relative flex min-h-[60vh] w-full items-center justify-center rounded-3xl border border-white/5 bg-slate-900/40 p-16 shadow-2xl shadow-black/40",onClick:u,children:n}),c[18]=u,c[19]=n,c[20]=i):i=c[20],i}function F(e,t){return Math.max(e,t.length)}function B(e){let r,l,s,n=(0,a.c)(10),{unlockedCount:c,nextLetter:o,history:m,targetWpm:u}=e,d=m.at(-1)?.wpm??0;n[0]!==c?(r=i.at(Math.max(c-1,0))??null,n[0]=c,n[1]=r):r=n[1];let h=r;return n[2]!==h||n[3]!==d||n[4]!==o||n[5]!==u||n[6]!==c?(l=i.map((e,a)=>{if(a<c){let a=e===h;return(0,t.jsx)("span",{className:`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-emerald-300 bg-emerald-500 text-slate-900 ${a?"font-black ring-2 ring-emerald-200":""}`,title:a?`Current focus \xb7 Target WPM ${u}`:void 0,children:e},e)}return e===o?(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-amber-300 bg-amber-300/30 text-amber-200",title:`Next unlock \xb7 Need ${Math.max(u-d,0)} WPM boost`,children:e},e):(0,t.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-colors border-white/10 bg-slate-800 text-slate-500",children:e},e)}),n[2]=h,n[3]=d,n[4]=o,n[5]=u,n[6]=c,n[7]=l):l=n[7],n[8]!==l?(s=(0,t.jsx)("div",{className:"flex w-full flex-wrap justify-center gap-2 rounded-3xl border border-white/5 bg-slate-900/60 p-4",children:l}),n[8]=l,n[9]=s):s=n[9],s}function U(e){let r,l,n,i,c,o,m,u,d,h,p,g,x,f,b,y,w,j,v,N,S,k,_=(0,a.c)(54),{snippetPayload:M,highlightedPrompt:W,codingComplete:L,onNext:C,codingHistory:T,codingLanguage:R,codingIndex:P,codingText:O}=e,D=M.snippet;_[0]!==T?(r=(e=>{if(!Array.isArray(e)||0===e.length)return{total:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,languages:[],wpmStreak:0,accuracyStreak:0,totalMinutes:0};let t=e.reduce((e,t)=>(e.wpm+=t.wpm??0,e.accuracy+=t.accuracy??0,e.duration+=t.durationMs??0,e),{wpm:0,accuracy:0,duration:0}),a=e.length,r=Array.from(new Set(e.map(e=>e.language))).sort();return{total:a,avgWpm:Math.round(t.wpm/a),avgAccuracy:Math.round(t.accuracy/a),bestWpm:Math.max(...e.map(e=>e.wpm??0)),bestAccuracy:Math.max(...e.map(e=>e.accuracy??0)),languages:r,wpmStreak:A(e,"wpm"),accuracyStreak:A(e,"accuracy"),totalMinutes:Math.round(t.duration/6e4*10)/10}})(T),_[0]=T,_[1]=r):r=_[1];let E=r,H=s.length||1;_[2]!==D?.focusCharacters?(l=D?.focusCharacters??[],_[2]=D?.focusCharacters,_[3]=l):l=_[3];let z=l,q=M.activeLanguage??R;_[4]!==q?(n=$(q),_[4]=q,_[5]=n):n=_[5];let I=n;_[6]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-400",children:"Coding mode"}),_[6]=i):i=_[6];let G=D?.concept??"Snippet practice";_[7]!==G?(c=(0,t.jsx)("p",{className:"text-xl font-semibold text-white",children:G}),_[7]=G,_[8]=c):c=_[8];let F=D?.description??"Cycle through structured punctuation and patterns.";_[9]!==F?(o=(0,t.jsx)("p",{className:"text-sm text-slate-400",children:F}),_[9]=F,_[10]=o):o=_[10],_[11]!==c||_[12]!==o?(m=(0,t.jsxs)("div",{children:[i,c,o]}),_[11]=c,_[12]=o,_[13]=m):m=_[13];let B=P%H+1;_[14]!==B?(u=(0,t.jsxs)("p",{className:"font-semibold text-white",children:["Snippet ",B," / ",H]}),_[14]=B,_[15]=u):u=_[15],_[16]!==I?(d=(0,t.jsx)("p",{children:I}),_[16]=I,_[17]=d):d=_[17],_[18]!==z?(h=z.join(" ")||"symbols",_[18]=z,_[19]=h):h=_[19],_[20]!==h?(p=(0,t.jsxs)("p",{children:["Focus: ",h]}),_[20]=h,_[21]=p):p=_[21],_[22]!==u||_[23]!==d||_[24]!==p?(g=(0,t.jsxs)("div",{className:"text-right text-xs text-slate-400",children:[u,d,p]}),_[22]=u,_[23]=d,_[24]=p,_[25]=g):g=_[25],_[26]!==g||_[27]!==m?(x=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[m,g]}),_[26]=g,_[27]=m,_[28]=x):x=_[28],_[29]!==O||_[30]!==W?(f=(0,t.jsx)("div",{className:"mt-6 flex w-full justify-center",children:(0,t.jsx)("div",{className:"w-full max-w-4xl",children:(0,t.jsx)(K,{highlightedPrompt:W,text:O})})}),_[29]=O,_[30]=W,_[31]=f):f=_[31],_[32]===Symbol.for("react.memo_cache_sentinel")?(b=(0,t.jsx)("p",{children:"Enter inserts a new line with matching indentation. Tab inserts the next block of spaces."}),_[32]=b):b=_[32],_[33]!==C?(y=(0,t.jsxs)("div",{className:"mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400",children:[b,(0,t.jsx)("button",{type:"button",onClick:C,className:"rounded-full border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/10",children:"Next snippet"})]}),_[33]=C,_[34]=y):y=_[34];let U=P%Math.max(H,1);return _[35]!==U?(w=(0,t.jsx)(Z,{currentIndex:U}),_[35]=U,_[36]=w):w=_[36],_[37]!==T?(j=T.at(-1)??null,_[37]=T,_[38]=j):j=_[38],_[39]!==L||_[40]!==E||_[41]!==j?(v=(0,t.jsx)(Y,{summary:E,lastEntry:j,complete:L}),_[39]=L,_[40]=E,_[41]=j,_[42]=v):v=_[42],_[43]!==w||_[44]!==v?(N=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]",children:[w,v]}),_[43]=w,_[44]=v,_[45]=N):N=_[45],_[46]!==T?(S=(0,t.jsx)(ee,{history:T}),_[46]=T,_[47]=S):S=_[47],_[48]!==x||_[49]!==f||_[50]!==y||_[51]!==N||_[52]!==S?(k=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[x,f,y,N,S]}),_[48]=x,_[49]=f,_[50]=y,_[51]=N,_[52]=S,_[53]=k):k=_[53],k}function K(e){let r,l,s,n,i,c,o=(0,a.c)(15),{highlightedPrompt:m,text:u}=e;e:{let e;if(!u){let e;o[0]===Symbol.for("react.memo_cache_sentinel")?(e=[[]],o[0]=e):e=o[0],r=e;break e}if(o[1]!==m||o[2]!==u){let a=u.split("\n"),r=0;e=a.map((e,a)=>{let l=m.slice(r,r+e.length);return((r+=e.length)<m.length&&(r+=1),0===e.length)?[(0,t.jsx)("span",{className:"text-slate-700",children:" "},`empty-${a}`)]:l}),o[1]=m,o[2]=u,o[3]=e}else e=o[3];r=e}let d=r;return o[4]!==d?(l=d.map(V),o[4]=d,o[5]=l):l=o[5],o[6]!==l?(s=(0,t.jsx)("pre",{className:"select-none border-r border-white/5 bg-slate-900/60 px-4 py-5 text-right text-xs font-semibold leading-6 text-slate-500",children:l}),o[6]=l,o[7]=s):s=o[7],o[8]!==d?(n=d.map(J),o[8]=d,o[9]=n):n=o[9],o[10]!==n?(i=(0,t.jsx)("pre",{className:"flex-1 overflow-auto px-6 py-5 font-mono text-sm leading-6 text-white",children:n}),o[10]=n,o[11]=i):i=o[11],o[12]!==s||o[13]!==i?(c=(0,t.jsx)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/60",children:(0,t.jsxs)("div",{className:"flex",children:[s,i]})}),o[12]=s,o[13]=i,o[14]=c):c=o[14],c}function J(e,a){return(0,t.jsx)("div",{className:"whitespace-pre-wrap",children:e},`code-${a}`)}function V(e,a){return(0,t.jsx)("span",{className:"block",children:a+1},`line-${a}`)}function Y(e){let r,l,s,n,i=(0,a.c)(18),{summary:c,lastEntry:o,complete:m}=e;i[0]!==c.languages?(r=c.languages.length>0?c.languages.map(Q).join(", "):"—",i[0]=c.languages,i[1]=r):r=i[1];let u=r;i[2]!==o?(l=o?$(o.language):null,i[2]=o,i[3]=l):l=i[3];let d=l;return i[4]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Session stats"}),i[4]=s):s=i[4],i[5]!==m||i[6]!==u||i[7]!==o||i[8]!==d||i[9]!==c.accuracyStreak||i[10]!==c.avgAccuracy||i[11]!==c.avgWpm||i[12]!==c.bestAccuracy||i[13]!==c.bestWpm||i[14]!==c.total||i[15]!==c.totalMinutes||i[16]!==c.wpmStreak?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[s,0===c.total?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete your first snippet to build coding momentum."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:[(0,t.jsx)(X,{label:"Avg WPM",value:c.avgWpm,detail:`${c.total} snippets`}),(0,t.jsx)(X,{label:"Avg accuracy",value:`${c.avgAccuracy}%`,detail:`${c.totalMinutes} min`}),(0,t.jsx)(X,{label:"Top WPM",value:c.bestWpm,detail:"personal record"}),(0,t.jsx)(X,{label:"Top accuracy",value:`${c.bestAccuracy}%`,detail:"cleanest run"})]}),(0,t.jsxs)("div",{className:"mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-xs text-slate-400",children:[(0,t.jsx)("p",{className:"font-semibold uppercase tracking-[0.2em] text-slate-300",children:"Languages covered"}),(0,t.jsx)("p",{className:"mt-1 text-sm text-white",children:u}),(0,t.jsxs)("p",{className:"mt-2",children:["Improvement streaks: ",(0,t.jsxs)("span",{className:"text-emerald-300",children:[c.wpmStreak," wpm"]})," /"," ",(0,t.jsxs)("span",{className:"text-sky-300",children:[c.accuracyStreak,"% accuracy"]})]}),o?(0,t.jsxs)("p",{className:"mt-1 text-xs text-slate-400",children:["Last: ",d," · ",o.wpm," wpm / ",o.accuracy,"%"]}):null,m?(0,t.jsx)("p",{className:"mt-2 text-emerald-300",children:"Snippet complete — auto-advancing..."}):null]})]})]}),i[5]=m,i[6]=u,i[7]=o,i[8]=d,i[9]=c.accuracyStreak,i[10]=c.avgAccuracy,i[11]=c.avgWpm,i[12]=c.bestAccuracy,i[13]=c.bestWpm,i[14]=c.total,i[15]=c.totalMinutes,i[16]=c.wpmStreak,i[17]=n):n=i[17],n}function Q(e){return $(e)}function X(e){let r,l,s,n,i=(0,a.c)(10),{label:c,value:o,detail:m}=e;return i[0]!==c?(r=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=r):r=i[1],i[2]!==o?(l=(0,t.jsx)("p",{className:"text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=l):l=i[3],i[4]!==m?(s=(0,t.jsx)("p",{className:"text-xs text-slate-400",children:m}),i[4]=m,i[5]=s):s=i[5],i[6]!==r||i[7]!==l||i[8]!==s?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3",children:[r,l,s]}),i[6]=r,i[7]=l,i[8]=s,i[9]=n):n=i[9],n}function Z(e){let r,l,n,i=(0,a.c)(5),{currentIndex:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Snippet library"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"curriculum"})]}),i[0]=r):r=i[0],i[1]!==c?(l=s.map((e,a)=>(0,t.jsxs)("li",{className:`rounded-2xl border px-4 py-3 ${a===c?"border-emerald-400 bg-emerald-400/10 text-white":"border-white/10 bg-slate-900/70 text-slate-200"}`,children:[(0,t.jsx)("p",{className:"font-semibold",children:e.concept}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.description}),(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:["Focus: ",e.focusCharacters.join(" ")]})]},e.id)),i[1]=c,i[2]=l):l=i[2],i[3]!==l?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[r,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:l})]}),i[3]=l,i[4]=n):n=i[4],n}function ee(e){let r,l,s,n,i=(0,a.c)(8),{history:c}=e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent coding sessions"}),i[0]=r):r=i[0],i[1]!==c.length?(l=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[r,(0,t.jsxs)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:[c.length," total"]})]}),i[1]=c.length,i[2]=l):l=i[2],i[3]!==c?(s=0===c.length?(0,t.jsx)("p",{className:"mt-3 text-sm text-slate-400",children:"Complete snippets to build up your coding journal."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:c.slice(-6).reverse().map(et)}),i[3]=c,i[4]=s):s=i[4],i[5]!==l||i[6]!==s?(n=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[l,s]}),i[5]=l,i[6]=s,i[7]=n):n=i[7],n}function et(e){let a=$(e.language);return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.concept}),(0,t.jsxs)("p",{className:"text-xs text-slate-400",children:[a," · ",new Date(e.timestamp).toLocaleString()]})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:d(e.durationMs)})]})]},e.id)}function ea(e){let l,s,n,i,c,o,m,u,d,h,p,g,x,f,b,y,w,j,v,N,S,k,_,M,W,L,$,T,R,P,O,D,E,H,z,q,I,G,F,B,U,K,J,V,Y=(0,a.c)(150),{history:Q,unlockedLetters:X,nextLetter:Z,successCounter:ee,lessonsPerUnlock:et,targetWpm:ea}=e,[ed,eh]=(0,r.useState)("all"),[ep,eg]=(0,r.useState)(3),[ex,eb]=(0,r.useState)(!0);Y[0]!==Q?(l=Q.map(ec),Y[0]=Q,Y[1]=l):l=Y[1];let ew=l;if(Y[2]!==ew||Y[3]!==X){let e;e=new Map,X.forEach(t=>{e.set(t.toLowerCase(),0)}),ew.forEach(t=>{new Set((t.text??"").toLowerCase().replace(/[^a-z]/g,"").split("")).forEach(t=>{t&&e.set(t,(e.get(t)??0)+1)})}),s=Array.from(e.entries()).map(([e,t])=>({letter:e,count:t})).sort((e,t)=>e.letter>t.letter?1:-1),Y[2]=ew,Y[3]=X,Y[4]=s}else s=Y[4];let ej=s;Y[5]!==ej||Y[6]!==ed?(n=()=>{"all"===ed||ej.some(e=>e.letter===ed)||eh("all")},i=[ej,ed],Y[5]=ej,Y[6]=ed,Y[7]=n,Y[8]=i):(n=Y[7],i=Y[8]),(0,r.useEffect)(n,i);e:{let e;if("all"===ed){c=ew;break e}if(Y[9]!==ew||Y[10]!==ed){let t=ed.toLowerCase();e=ew.filter(e=>{let a=(e.letters??"").toLowerCase(),r=(e.text??"").toLowerCase();return a.includes(t)||r.includes(t)}),Y[9]=ew,Y[10]=ed,Y[11]=e}else e=Y[11];c=e}let ev=c;t:{let e,t,a,r,l,s,n,i,c,m,u;if(0===ew.length){let e;Y[12]===Symbol.for("react.memo_cache_sentinel")?(e={totalLessons:0,avgWpm:0,avgAccuracy:0,bestWpm:0,bestAccuracy:0,successRate:0,lessonsAboveTarget:0,totalWords:0,totalMinutes:0,wpmStreak:0,accuracyStreak:0,lastSevenAvgWpm:0},Y[12]=e):e=Y[12],o=e;break t}Y[13]!==ew?(e=ew.reduce(ei,{wpm:0,accuracy:0,words:0,duration:0}),Y[13]=ew,Y[14]=e):e=Y[14];let d=e,h=ew.length;Y[15]!==ew?(t=Math.max(...ew.map(en)),Y[15]=ew,Y[16]=t):t=Y[16];let p=t;Y[17]!==ew?(a=Math.max(...ew.map(es)),Y[17]=ew,Y[18]=a):a=Y[18];let g=a;if(Y[19]!==ew||Y[20]!==ea){let e;Y[22]!==ea?(e=e=>e.wpm>=ea,Y[22]=ea,Y[23]=e):e=Y[23],r=ew.filter(e),Y[19]=ew,Y[20]=ea,Y[21]=r}else r=Y[21];let x=r.length;if(Y[24]!==ew){let e=ew.slice(-7);l=e.length>0?Math.round(e.reduce(el,0)/e.length):0,Y[24]=ew,Y[25]=l}else l=Y[25];let f=l;Y[26]!==h||Y[27]!==d.wpm?(s=Math.round(d.wpm/h),Y[26]=h,Y[27]=d.wpm,Y[28]=s):s=Y[28],Y[29]!==h||Y[30]!==d.accuracy?(n=Math.round(d.accuracy/h),Y[29]=h,Y[30]=d.accuracy,Y[31]=n):n=Y[31],Y[32]!==x||Y[33]!==h?(i=Math.round(x/h*100),Y[32]=x,Y[33]=h,Y[34]=i):i=Y[34];let b=d.words,y=Math.round(d.duration/6e4*10)/10;Y[35]!==ew?(c=A(ew,"wpm"),Y[35]=ew,Y[36]=c):c=Y[36],Y[37]!==ew?(m=A(ew,"accuracy"),Y[37]=ew,Y[38]=m):m=Y[38],Y[39]!==g||Y[40]!==p||Y[41]!==f||Y[42]!==x||Y[43]!==s||Y[44]!==n||Y[45]!==i||Y[46]!==y||Y[47]!==c||Y[48]!==m||Y[49]!==h||Y[50]!==d.words?(u={totalLessons:h,avgWpm:s,avgAccuracy:n,bestWpm:p,bestAccuracy:g,successRate:i,lessonsAboveTarget:x,totalWords:b,totalMinutes:y,wpmStreak:c,accuracyStreak:m,lastSevenAvgWpm:f},Y[39]=g,Y[40]=p,Y[41]=f,Y[42]=x,Y[43]=s,Y[44]=n,Y[45]=i,Y[46]=y,Y[47]=c,Y[48]=m,Y[49]=h,Y[50]=d.words,Y[51]=u):u=Y[51],o=u}let eN=o;if(Y[52]!==ew)m=C.map(e=>({...e,count:ew.filter(t=>t.accuracy>=e.min&&t.accuracy<e.max).length})),Y[52]=ew,Y[53]=m;else m=Y[53];let eS=m,ek=1===ep?"Off":`${ep} lessons`;Y[54]===Symbol.for("react.memo_cache_sentinel")?(u=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Letters"}),Y[54]=u):u=Y[54],Y[55]!==X?(d=X.join(", "),Y[55]=X,Y[56]=d):d=Y[56],Y[57]!==d?(h=(0,t.jsxs)("div",{children:[u,(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:d})]}),Y[57]=d,Y[58]=h):h=Y[58],Y[59]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)("p",{className:"text-slate-400",children:"Next unlock"}),Y[59]=p):p=Y[59];let e_=Z??"All characters unlocked";Y[60]!==e_?(g=(0,t.jsx)("p",{className:"text-white font-semibold",children:e_}),Y[60]=e_,Y[61]=g):g=Y[61],Y[62]!==et||Y[63]!==Z||Y[64]!==ee?(x=Z?(0,t.jsxs)("p",{className:"text-xs text-slate-500",children:[Math.max(et-ee,0)," high-WPM lessons to go"]}):null,Y[62]=et,Y[63]=Z,Y[64]=ee,Y[65]=x):x=Y[65],Y[66]!==g||Y[67]!==x?(f=(0,t.jsxs)("div",{className:"text-right text-sm",children:[p,g,x]}),Y[66]=g,Y[67]=x,Y[68]=f):f=Y[68],Y[69]!==h||Y[70]!==f?(b=(0,t.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[h,f]}),Y[69]=h,Y[70]=f,Y[71]=b):b=Y[71],Y[72]!==eN.totalLessons?(y=(0,t.jsx)(eo,{label:"Lessons",value:eN.totalLessons,hint:"lifetime"}),Y[72]=eN.totalLessons,Y[73]=y):y=Y[73],Y[74]!==ea?(w=(0,t.jsx)(eo,{label:"Target WPM",value:ea,hint:"goal"}),Y[74]=ea,Y[75]=w):w=Y[75];let eM=`${eN.successRate}%`;Y[76]!==eM?(j=(0,t.jsx)(eo,{label:"Success Rate",value:eM,hint:"≥ target"}),Y[76]=eM,Y[77]=j):j=Y[77];let eW=eN.lastSevenAvgWpm?`last 7: ${eN.lastSevenAvgWpm}`:"last 7: —";Y[78]!==eN.avgWpm||Y[79]!==eW?(v=(0,t.jsx)(eo,{label:"Avg WPM",value:eN.avgWpm,hint:eW}),Y[78]=eN.avgWpm,Y[79]=eW,Y[80]=v):v=Y[80];let eL=`${eN.avgAccuracy}%`,eA=`${eN.totalWords} words`;Y[81]!==eL||Y[82]!==eA?(N=(0,t.jsx)(eo,{label:"Avg Accuracy",value:eL,hint:eA}),Y[81]=eL,Y[82]=eA,Y[83]=N):N=Y[83],Y[84]!==eN.bestWpm?(S=(0,t.jsx)(eo,{label:"Top WPM",value:eN.bestWpm,hint:"fastest lesson"}),Y[84]=eN.bestWpm,Y[85]=S):S=Y[85];let eC=`${eN.bestAccuracy}%`;Y[86]!==eC?(k=(0,t.jsx)(eo,{label:"Top Accuracy",value:eC,hint:"cleanest lesson"}),Y[86]=eC,Y[87]=k):k=Y[87];let e$=`${eN.wpmStreak} / ${eN.accuracyStreak}`;Y[88]!==e$?(_=(0,t.jsx)(eo,{label:"Improvement streaks",value:e$,hint:"WPM / accuracy"}),Y[88]=e$,Y[89]=_):_=Y[89],Y[90]!==y||Y[91]!==w||Y[92]!==j||Y[93]!==v||Y[94]!==N||Y[95]!==S||Y[96]!==k||Y[97]!==_?(M=(0,t.jsxs)("div",{className:"mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[y,w,j,v,N,S,k,_]}),Y[90]=y,Y[91]=w,Y[92]=j,Y[93]=v,Y[94]=N,Y[95]=S,Y[96]=k,Y[97]=_,Y[98]=M):M=Y[98],Y[99]===Symbol.for("react.memo_cache_sentinel")?(W=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Letter focus"}),Y[99]=W):W=Y[99],Y[100]===Symbol.for("react.memo_cache_sentinel")?(L=e=>eh(e),Y[100]=L):L=Y[100],Y[101]!==ej||Y[102]!==ed?($=(0,t.jsxs)("div",{className:"min-w-[220px] flex-1",children:[W,(0,t.jsx)(em,{letters:ej,selectedLetter:ed,onSelect:L})]}),Y[101]=ej,Y[102]=ed,Y[103]=$):$=Y[103],Y[104]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsx)("span",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"Smoothing"}),Y[104]=T):T=Y[104];let eT=0===ew.length;return Y[105]===Symbol.for("react.memo_cache_sentinel")?(R=e=>eg(Number(e.target.value)),Y[105]=R):R=Y[105],Y[106]!==ep||Y[107]!==eT?(P=(0,t.jsx)("input",{type:"range",min:1,max:9,step:2,value:ep,disabled:eT,onChange:R,className:"accent-emerald-400"}),Y[106]=ep,Y[107]=eT,Y[108]=P):P=Y[108],Y[109]!==ek?(O=(0,t.jsx)("span",{className:"text-xs text-slate-400",children:ek}),Y[109]=ek,Y[110]=O):O=Y[110],Y[111]!==P||Y[112]!==O?(D=(0,t.jsxs)("label",{className:"flex flex-col gap-2 sm:w-48",children:[T,P,O]}),Y[111]=P,Y[112]=O,Y[113]=D):D=Y[113],Y[114]===Symbol.for("react.memo_cache_sentinel")?(E=e=>eb(e.target.checked),Y[114]=E):E=Y[114],Y[115]!==ex?(H=(0,t.jsxs)("label",{className:"flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:[(0,t.jsx)("input",{type:"checkbox",checked:ex,onChange:E,className:"h-4 w-4 rounded border border-slate-600 bg-slate-900 text-emerald-400 accent-emerald-400"}),"Trendline"]}),Y[115]=ex,Y[116]=H):H=Y[116],Y[117]!==D||Y[118]!==H?(z=(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-4 text-sm text-slate-200 sm:flex-row sm:items-end sm:justify-end",children:[D,H]}),Y[117]=D,Y[118]=H,Y[119]=z):z=Y[119],Y[120]!==$||Y[121]!==z?(q=(0,t.jsxs)("div",{className:"flex flex-wrap gap-6",children:[$,z]}),Y[120]=$,Y[121]=z,Y[122]=q):q=Y[122],Y[123]!==ew.length||Y[124]!==ev||Y[125]!==ed||Y[126]!==ex||Y[127]!==ep||Y[128]!==ea?(I=(0,t.jsx)(eu,{lessons:ev,smoothingWindow:ep,showTrendline:ex,totalLessons:ew.length,targetWpm:ea,selectedLetter:ed}),Y[123]=ew.length,Y[124]=ev,Y[125]=ed,Y[126]=ex,Y[127]=ep,Y[128]=ea,Y[129]=I):I=Y[129],Y[130]!==q||Y[131]!==I?(G=(0,t.jsxs)("div",{className:"mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5",children:[q,I]}),Y[130]=q,Y[131]=I,Y[132]=G):G=Y[132],Y[133]!==eS||Y[134]!==eN.totalLessons?(F=(0,t.jsx)(ef,{buckets:eS,totalLessons:eN.totalLessons}),Y[133]=eS,Y[134]=eN.totalLessons,Y[135]=F):F=Y[135],Y[136]!==eN?(B=(0,t.jsx)(ey,{summary:eN}),Y[136]=eN,Y[137]=B):B=Y[137],Y[138]!==F||Y[139]!==B?(U=(0,t.jsxs)("div",{className:"mt-8 grid gap-6 lg:grid-cols-2",children:[F,B]}),Y[138]=F,Y[139]=B,Y[140]=U):U=Y[140],Y[141]===Symbol.for("react.memo_cache_sentinel")?(K=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Recent lessons"}),Y[141]=K):K=Y[141],Y[142]!==Q?(J=(0,t.jsxs)("div",{className:"mt-8",children:[K,0===Q.length?(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete a lesson to see stats."}):(0,t.jsx)("ul",{className:"mt-3 space-y-3 text-sm",children:Q.slice(-6).reverse().map(er)})]}),Y[142]=Q,Y[143]=J):J=Y[143],Y[144]!==b||Y[145]!==M||Y[146]!==G||Y[147]!==U||Y[148]!==J?(V=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[b,M,G,U,J]}),Y[144]=b,Y[145]=M,Y[146]=G,Y[147]=U,Y[148]=J,Y[149]=V):V=Y[149],V}function er(e){return(0,t.jsxs)("li",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-white",children:e.text}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:new Date(e.timestamp).toLocaleString()})]}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsxs)("p",{className:"text-emerald-400",children:[e.wpm," wpm"]}),(0,t.jsxs)("p",{className:"text-slate-400",children:[e.accuracy,"%"]}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:d(e.durationMs)}),(0,t.jsxs)("p",{className:"text-xs text-rose-400",children:[e.mistakes??0," mistakes"]})]})]},e.id)}function el(e,t){return e+t.wpm}function es(e){return e.accuracy??0}function en(e){return e.wpm??0}function ei(e,t){var a;return e.wpm=e.wpm+(t.wpm??0),e.accuracy=e.accuracy+(t.accuracy??0),e.words=e.words+((a=t.text)?a.trim().split(/\s+/).filter(Boolean).length:0),e.duration=e.duration+(t.durationMs??0),e}function ec(e,t){return{...e,lessonNumber:t+1}}function eo(e){let r,l,s,n,i=(0,a.c)(10),{label:c,value:o,hint:m}=e;return i[0]!==c?(r=(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:c}),i[0]=c,i[1]=r):r=i[1],i[2]!==o?(l=(0,t.jsx)("p",{className:"mt-2 text-2xl font-semibold text-white",children:o}),i[2]=o,i[3]=l):l=i[3],i[4]!==m?(s=m?(0,t.jsx)("p",{className:"text-xs text-slate-500",children:m}):null,i[4]=m,i[5]=s):s=i[5],i[6]!==r||i[7]!==l||i[8]!==s?(n=(0,t.jsxs)("div",{className:"rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-5 text-center",children:[r,l,s]}),i[6]=r,i[7]=l,i[8]=s,i[9]=n):n=i[9],n}function em(e){let r,l,s,n,i=(0,a.c)(16),{letters:c,selectedLetter:o,onSelect:m}=e;if(!c.length){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-500",children:"Complete a lesson to unlock insights."}),i[0]=e):e=i[0],e}i[1]!==m?(r=()=>m("all"),i[1]=m,i[2]=r):r=i[2];let u=`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${"all"===o?"bg-emerald-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`;if(i[3]!==r||i[4]!==u?(l=(0,t.jsx)("button",{type:"button",onClick:r,className:u,children:"All"}),i[3]=r,i[4]=u,i[5]=l):l=i[5],i[6]!==c||i[7]!==m||i[8]!==o){let e;i[10]!==m||i[11]!==o?(e=e=>(0,t.jsxs)("button",{type:"button",onClick:()=>m(e.letter),className:`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${o===e.letter?"bg-sky-400 text-slate-900":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:[e.letter,(0,t.jsx)("span",{className:"ml-1 text-[10px] text-slate-400",children:e.count})]},e.letter),i[10]=m,i[11]=o,i[12]=e):e=i[12],s=c.map(e),i[6]=c,i[7]=m,i[8]=o,i[9]=s}else s=i[9];return i[13]!==l||i[14]!==s?(n=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-2",children:[l,s]}),i[13]=l,i[14]=s,i[15]=n):n=i[15],n}function eu(e){let r,l,s,n,i,c,o,m,u,d,h,p,g,x,f,b,y,w,j,v,N,S,k,_,M,W,A,C,$,T,R,P,O,D,E=(0,a.c)(97),{lessons:H,smoothingWindow:z,showTrendline:q,totalLessons:I,targetWpm:G,selectedLetter:F}=e;if(0===I){let e;return E[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("p",{className:"mt-6 text-sm text-slate-400",children:"Complete a lesson to unlock progress visualizations."}),E[0]=e):e=E[0],e}if(!H.length){let e,a;return E[1]!==F?(e=F.toUpperCase(),E[1]=F,E[2]=e):e=E[2],E[3]!==e?(a=(0,t.jsxs)("p",{className:"mt-6 text-sm text-slate-400",children:['No lessons yet for the letter "',e,'". Keep practicing to fill this chart.']}),E[3]=e,E[4]=a):a=E[4],a}if(E[5]!==H||E[6]!==q||E[7]!==z||E[8]!==G||E[9]!==I){let e,t,a,m=H.map(ex),u=H.map(eg),d=L(m,z),h=L(u,z),p=H.map((e,t)=>({lessonNumber:e.lessonNumber,wpm:d[t]??e.wpm,accuracy:h[t]??e.accuracy,rawWpm:e.wpm,rawAccuracy:e.accuracy})),g=Math.max(I,1);i=Math.max(G+15,...p.map(ep),40),E[17]!==g?(e=e=>1===g?450:60+(e-1)/(g-1)*780,E[17]=g,E[18]=e):e=E[18],n=e,E[19]!==i?(t=e=>280-Math.max(0,e)/(i||1)*240,E[19]=i,E[20]=t):t=E[20],c=t,o=eh,E[21]!==n?(a=(e,t,a)=>0===e.length?"":e.map((e,r)=>{let l=n(e.lessonNumber).toFixed(2),s=a(e[t]).toFixed(2);return`${0===r?"M":"L"}${l},${s}`}).join(" "),E[21]=n,E[22]=a):a=E[22];let x=a;s=x(p,"wpm",c),r=x(p,"accuracy",o);let f=p.map(ed);l=q?(e=>{if(!Array.isArray(e)||e.length<2)return null;let t=0,a=0,r=0,l=0;e.forEach(({x:e,y:s})=>{t+=e,a+=s,r+=e*s,l+=e*e});let s=e.length,n=s*l-t*t;if(0===n)return null;let i=(s*r-t*a)/n,c=(a-i*t)/s;return{slope:i,intercept:c}})(f):null,E[5]=H,E[6]=q,E[7]=z,E[8]=G,E[9]=I,E[10]=r,E[11]=l,E[12]=s,E[13]=n,E[14]=i,E[15]=c,E[16]=o}else r=E[10],l=E[11],s=E[12],n=E[13],i=E[14],c=E[15],o=E[16];let B=l,U=H[0]?.lessonNumber??1,K=H.at(-1)?.lessonNumber??U;E[23]!==B||E[24]!==K||E[25]!==U||E[26]!==n||E[27]!==c?(m=B?{x1:n(U),y1:c(B.slope*U+B.intercept),x2:n(K),y2:c(B.slope*K+B.intercept)}:null,E[23]=B,E[24]=K,E[25]=U,E[26]=n,E[27]=c,E[28]=m):m=E[28];let J=m;if(E[29]===Symbol.for("react.memo_cache_sentinel")?(u=[0,.25,.5,.75,1],E[29]=u):u=E[29],E[30]!==i||E[31]!==c||E[32]!==o){let e=u.map(e=>Math.round(i*e));x="mt-6",f="h-80 w-full",b="0 0 900 320",y="img",w="Typing performance chart",E[44]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"wpmGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"rgb(16,185,129)",stopOpacity:"0.4"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"rgb(16,185,129)",stopOpacity:"0.05"})]})}),v=(0,t.jsx)("line",{x1:60,y1:280,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.4)",strokeWidth:"1"}),d=(0,t.jsx)("line",{x1:60,y1:40,x2:60,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),h=(0,t.jsx)("line",{x1:840,y1:40,x2:840,y2:280,stroke:"rgba(148, 163, 184, 0.2)",strokeWidth:"1"}),E[44]=d,E[45]=h,E[46]=j,E[47]=v):(d=E[44],h=E[45],j=E[46],v=E[47]),p=e.map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:54,x2:60,y1:c(e),y2:c(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsx)("text",{x:52,y:c(e)+4,textAnchor:"end",fontSize:"10",fill:"rgba(148,163,184,0.8)",children:e})]},`left-${e}`)),g=[0,25,50,75,100].map(e=>(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:840,x2:846,y1:o(e),y2:o(e),stroke:"rgba(148,163,184,0.5)"}),(0,t.jsxs)("text",{x:848,y:o(e)+4,fontSize:"10",fill:"rgba(125,211,252,0.9)",children:[e,"%"]})]},`right-${e}`)),E[30]=i,E[31]=c,E[32]=o,E[33]=d,E[34]=h,E[35]=p,E[36]=g,E[37]=x,E[38]=f,E[39]=b,E[40]=y,E[41]=w,E[42]=j,E[43]=v}else d=E[33],h=E[34],p=E[35],g=E[36],x=E[37],f=E[38],b=E[39],y=E[40],w=E[41],j=E[42],v=E[43];if(E[48]===Symbol.for("react.memo_cache_sentinel")?(N=(0,t.jsx)("text",{x:60,y:30,fontSize:"11",fill:"rgba(148,163,184,0.8)",children:"WPM"}),S=(0,t.jsx)("text",{x:840,y:30,fontSize:"11",textAnchor:"end",fill:"rgba(125,211,252,0.9)",children:"Accuracy"}),E[48]=N,E[49]=S):(N=E[48],S=E[49]),E[50]!==G||E[51]!==c?(k=G?(0,t.jsx)("line",{x1:60,x2:840,y1:c(G),y2:c(G),stroke:"rgba(248,113,113,0.4)",strokeDasharray:"6 4"}):null,E[50]=G,E[51]=c,E[52]=k):k=E[52],E[53]!==r?(_=r?(0,t.jsx)("path",{d:r,fill:"none",stroke:"rgba(56,189,248,0.9)",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round"}):null,E[53]=r,E[54]=_):_=E[54],E[55]!==s?(M=s?(0,t.jsx)("path",{d:s,fill:"none",stroke:"url(#wpmGradient)",strokeWidth:"3",strokeLinejoin:"round",strokeLinecap:"round"}):null,E[55]=s,E[56]=M):M=E[56],E[57]!==J?(W=J?(0,t.jsx)("line",{x1:J.x1,y1:J.y1,x2:J.x2,y2:J.y2,stroke:"rgba(248,250,252,0.5)",strokeWidth:"2",strokeDasharray:"4 4"}):null,E[57]=J,E[58]=W):W=E[58],E[59]!==H||E[60]!==n||E[61]!==c){let e;E[63]!==n||E[64]!==c?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:c(e.wpm),r:4,fill:"rgb(16,185,129)",stroke:"rgba(15,118,110,0.4)",strokeWidth:"1",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.wpm," wpm"]})},`wpm-${e.id??e.lessonNumber}`),E[63]=n,E[64]=c,E[65]=e):e=E[65],A=H.map(e),E[59]=H,E[60]=n,E[61]=c,E[62]=A}else A=E[62];if(E[66]!==H||E[67]!==n||E[68]!==o){let e;E[70]!==n||E[71]!==o?(e=e=>(0,t.jsx)("circle",{cx:n(e.lessonNumber),cy:o(e.accuracy),r:3,fill:"rgb(56,189,248)",stroke:"rgba(14,165,233,0.2)",strokeWidth:"1",opacity:"0.8",children:(0,t.jsxs)("title",{children:["Lesson ",e.lessonNumber,": ",e.accuracy,"% accuracy"]})},`accuracy-${e.id??e.lessonNumber}`),E[70]=n,E[71]=o,E[72]=e):e=E[72],C=H.map(e),E[66]=H,E[67]=n,E[68]=o,E[69]=C}else C=E[69];return E[73]!==d||E[74]!==h||E[75]!==p||E[76]!==g||E[77]!==k||E[78]!==_||E[79]!==M||E[80]!==W||E[81]!==A||E[82]!==C||E[83]!==f||E[84]!==b||E[85]!==y||E[86]!==w||E[87]!==j||E[88]!==v?($=(0,t.jsxs)("svg",{className:f,viewBox:b,role:y,"aria-label":w,children:[j,v,d,h,p,g,N,S,k,_,M,W,A,C]}),E[73]=d,E[74]=h,E[75]=p,E[76]=g,E[77]=k,E[78]=_,E[79]=M,E[80]=W,E[81]=A,E[82]=C,E[83]=f,E[84]=b,E[85]=y,E[86]=w,E[87]=j,E[88]=v,E[89]=$):$=E[89],E[90]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-emerald-400"}),"WPM (smoothed)"]}),E[90]=T):T=E[90],E[91]===Symbol.for("react.memo_cache_sentinel")?(R=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-sky-400"}),"Accuracy (smoothed)"]}),E[91]=R):R=E[91],E[92]===Symbol.for("react.memo_cache_sentinel")?(P=(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full border border-slate-200 border-dashed"}),"Trendline"]}),E[92]=P):P=E[92],E[93]===Symbol.for("react.memo_cache_sentinel")?(O=(0,t.jsxs)("div",{className:"mt-3 flex flex-wrap gap-4 text-xs text-slate-400",children:[T,R,P,(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"h-1.5 w-6 rounded-full bg-rose-400/50"}),"Target WPM"]})]}),E[93]=O):O=E[93],E[94]!==x||E[95]!==$?(D=(0,t.jsxs)("div",{className:x,children:[$,O]}),E[94]=x,E[95]=$,E[96]=D):D=E[96],D}function ed(e){return{x:e.lessonNumber,y:e.rawWpm}}function eh(e){return 280-Math.max(0,Math.min(100,e))/100*240}function ep(e){return e.wpm}function eg(e){return e.accuracy}function ex(e){return e.wpm}function ef(e){let r,l,s,n,i=(0,a.c)(11),{buckets:c,totalLessons:o}=e;if(!o){let e;return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"mt-2 text-sm text-slate-400",children:"Complete lessons to populate this chart."})]}),i[0]=e):e=i[0],e}i[1]!==c?(r=Math.max(...c.map(eb),1),i[1]=c,i[2]=r):r=i[2];let m=r;if(i[3]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Accuracy spread"}),(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.3em] text-slate-500",children:"lessons"})]}),i[3]=l):l=i[3],i[4]!==c||i[5]!==m){let e;i[7]!==m?(e=e=>(0,t.jsxs)("div",{className:"flex-1 text-center",children:[(0,t.jsx)("div",{className:"relative h-32 overflow-hidden rounded-2xl bg-slate-900/60",children:(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 rounded-2xl bg-sky-400/70",style:{height:`${e.count/m*100||0}%`}})}),(0,t.jsx)("p",{className:"mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-500",children:e.count})]},e.label),i[7]=m,i[8]=e):e=i[8],s=c.map(e),i[4]=c,i[5]=m,i[6]=s}else s=i[6];return i[9]!==s?(n=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[l,(0,t.jsx)("div",{className:"mt-6 flex gap-3",children:s})]}),i[9]=s,i[10]=n):n=i[10],n}function eb(e){return e.count}function ey(e){let r,l,s,n,i,c,o,m,u=(0,a.c)(20),{summary:d}=e,h=d.totalLessons?`${d.successRate}% of sessions`:"—";u[0]!==d.lessonsAboveTarget||u[1]!==h?(r={label:"Lessons ≥ target",value:d.lessonsAboveTarget,detail:h},u[0]=d.lessonsAboveTarget,u[1]=h,u[2]=r):r=u[2],u[3]!==d.totalMinutes?(l={label:"Typing minutes",value:d.totalMinutes,detail:"lifetime focus time"},u[3]=d.totalMinutes,u[4]=l):l=u[4],u[5]!==d.totalWords?(s={label:"Words practiced",value:d.totalWords,detail:"approximate"},u[5]=d.totalWords,u[6]=s):s=u[6];let p=`${d.wpmStreak} lessons`;u[7]!==p?(n={label:"WPM streak",value:p,detail:"non-stop improvement"},u[7]=p,u[8]=n):n=u[8];let g=`${d.accuracyStreak} lessons`;u[9]!==g?(i={label:"Accuracy streak",value:g,detail:"steady precision"},u[9]=g,u[10]=i):i=u[10],u[11]!==r||u[12]!==l||u[13]!==s||u[14]!==n||u[15]!==i?(c=[r,l,s,n,i],u[11]=r,u[12]=l,u[13]=s,u[14]=n,u[15]=i,u[16]=c):c=u[16];let x=c;return u[17]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)("p",{className:"text-sm font-semibold text-white",children:"Highlights"}),u[17]=o):o=u[17],u[18]!==x?(m=(0,t.jsxs)("div",{className:"rounded-3xl border border-white/10 bg-slate-950/50 p-5",children:[o,(0,t.jsx)("ul",{className:"mt-4 space-y-3 text-sm",children:x.map(ew)})]}),u[18]=x,u[19]=m):m=u[19],m}function ew(e){return(0,t.jsxs)("li",{className:"flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs uppercase tracking-[0.2em] text-slate-500",children:e.label}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:e.detail})]}),(0,t.jsx)("p",{className:"text-lg font-semibold text-white",children:e.value})]},e.label)}function ej(e){let r,s,n,i,c,o,m,u,d,h,p,g,x,f,b=(0,a.c)(34),{targetWpm:y,setTargetWpm:w,lessonsPerUnlock:j,setLessonsPerUnlock:v,unlockedLetters:N,nextLetter:S,codingLanguage:k,setCodingLanguage:_}=e;b[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.3em] text-slate-400",children:"Configuration"}),b[0]=r):r=b[0],b[1]!==w?(s=e=>w(Number(e.target.value)||35),b[1]=w,b[2]=s):s=b[2],b[3]!==s||b[4]!==y?(n=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Target WPM",(0,t.jsx)("input",{type:"number",min:5,max:200,value:y,onChange:s,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),b[3]=s,b[4]=y,b[5]=n):n=b[5],b[6]!==v?(i=e=>v(Math.max(1,Number(e.target.value)||5)),b[6]=v,b[7]=i):i=b[7],b[8]!==j||b[9]!==i?(c=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Lessons per unlock",(0,t.jsx)("input",{type:"number",min:1,max:20,value:j,onChange:i,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60"})]}),b[8]=j,b[9]=i,b[10]=c):c=b[10],b[11]!==_?(o=e=>_(e.target.value),b[11]=_,b[12]=o):o=b[12],b[13]===Symbol.for("react.memo_cache_sentinel")?(m=l.map(ev),b[13]=m):m=b[13],b[14]!==k||b[15]!==o?(u=(0,t.jsxs)("label",{className:"flex flex-col gap-2 text-sm text-slate-300",children:["Coding language",(0,t.jsx)("select",{value:k,onChange:o,className:"rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none focus:border-emerald-500/60",children:m})]}),b[14]=k,b[15]=o,b[16]=u):u=b[16],b[17]!==n||b[18]!==c||b[19]!==u?(d=(0,t.jsxs)("div",{className:"mt-6 grid gap-6 lg:grid-cols-3 sm:grid-cols-2",children:[n,c,u]}),b[17]=n,b[18]=c,b[19]=u,b[20]=d):d=b[20],b[21]!==N?(h=N.join(", "),b[21]=N,b[22]=h):h=b[22],b[23]!==h?(p=(0,t.jsxs)("p",{children:["Unlocked letters: ",h]}),b[23]=h,b[24]=p):p=b[24];let M=S??"complete",W=S?"maintain target WPM to progress":"all done";return b[25]!==M||b[26]!==W?(g=(0,t.jsxs)("p",{children:["Next unlock: ",M," (",W,")"]}),b[25]=M,b[26]=W,b[27]=g):g=b[27],b[28]!==p||b[29]!==g?(x=(0,t.jsxs)("div",{className:"mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300",children:[p,g]}),b[28]=p,b[29]=g,b[30]=x):x=b[30],b[31]!==x||b[32]!==d?(f=(0,t.jsxs)("section",{className:"w-full rounded-3xl border border-white/10 bg-slate-900/50 p-6",children:[r,d,x]}),b[31]=x,b[32]=d,b[33]=f):f=b[33],f}function ev(e){return(0,t.jsx)("option",{value:e.id,children:e.label},e.id)}e.s(["default",()=>R],81694)}]);