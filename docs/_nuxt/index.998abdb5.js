import{_ as u}from"./Markdown.14ef6642.js";import{o as i,c,a as s,b as n,_ as d,f as p,r as t,q as w,s as g,w as k,d as M,x as $,y,z as P,A as E,h as H}from"./entry.8f2e580c.js";import{_ as N}from"./nuxt-link.89ef73f6.js";import"./katex.min.0a87eea6.js";const C={class:"px-2"},R={class:"flex h-16 flex-row items-center overflow-x-auto overflow-y-hidden w-auto"},T=s("hr",{class:"py-1"},null,-1);function D(l,o){const e=u;return i(),c("div",null,[s("div",C,[s("div",R,[n(e,{class:"flex-none",md:"#### **MDPug Playground**"}),n(e,{class:"flex-none pl-2",md:"Easy to run `MDPug`"})])]),T])}const I={},S=d(I,[["render",D]]),V=`# MDPug
**Markdown + Pug**

\`\`\`!pug
mixin section(title,i=3)
  - let m = 0
  - m = md(\`\${"#".repeat(i)} \${title}\`)
  div!= m
  block

mixin example(source)
  div(style={"margin-top":".5rem"})
  block
  div(style={"margin-bottom":".5rem","border-bottom":"1px solid gray"})
  - let p
  +section("Source")
    - p = md(o("\`\`\`\`md","\`\`\`\`"))
    div!= p
  +section("Result")
    - p = md(m)
    div(style={"border":"1px solid","border-radius":".25rem"})!= p

- let m = ""
- let b = (n) => m += n + "\\n"
- let o = (s,e) => s + "\\n" + m + e + "\\n"
- let r = () => m = ""

- b("# Title")
- b("This is Markdown-decorated text.")
+example(m): :md ## Markdown
- r()

- b("\`\`\`!pug")
- b("- for(var i = 0;i < 3;i++)")
- b("    div #{i}")
- b("\`\`\`")
+example(m): :md ## Pug in Markdown
- r()

- b("\`\`\`!pug")
- b("- for(var i = 0;i < 3;i++)")
- b("  :md ##### No variable can be used here. So, this won't be work: #{i} or \${i}")
- b("\`\`\`")
+example(m): :md ## STATIC Markdown in Pug in Markdown
- r()

- b("\`\`\`!pug")
- b("- for(var i = 0;i < 3;i++)")
- b("  - let p = md(\`\${'#'.repeat(i+1)} ***Variable can be used here: \${i}***\`)")
- b("  div!= p")
- b("\`\`\`")
+example(m): :md ## DYNAMIC Markdown in Pug in Markdown
- r()
\`\`\`
`,z={class:"overflow-hidden"},L=p({__name:"Main",setup(l){const o=t(V);return w("code",o),(e,r)=>{const a=g;return i(),c("div",z,[n(a,{keepalive:""})])}}}),A=s("hr",{class:"py-1"},null,-1),B={class:"flex h-8 flex-row flex-nowrap items-center overflow-x-auto overflow-y-hidden"},F={class:"ml-auto flex-none px-2"};function j(l,o){const e=u,r=N;return i(),c("div",null,[A,s("div",B,[s("div",F,[n(e,{class:"inline-block",md:"**MDPug Playground** @ 2023 ajiken4610 licensed under the `MIT LICENSE`. For license information, please see"}),n(r,{class:"pl-1",to:"/license"},{default:k(()=>[M("/license")]),_:1})])])])}const q={},U=d(q,[["render",j]]),Y=p({__name:"index",setup(l){$(x=>({fb461a70:H(f)}));const o=t(),e=t(),r=t(0),a=t(0);y(()=>{o.value&&(r.value=o.value.$el.offsetHeight),e.value&&(a.value=e.value.$el.offsetHeight)});const _=t(window.innerHeight),m=()=>{_.value=window.innerHeight};addEventListener("resize",m),P(()=>{removeEventListener("resize",m)});const f=E(()=>_.value-(r.value+a.value)+"px");return(x,G)=>{const v=S,h=L,b=U;return i(),c("div",null,[n(v,{ref_key:"headerElementRef",ref:o},null,512),n(h,{class:"main-height"}),n(b,{ref_key:"footerElementRef",ref:e},null,512)])}}});const W=d(Y,[["__scopeId","data-v-9c6e0e37"]]);export{W as default};
