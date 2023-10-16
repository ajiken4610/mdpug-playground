import{_ as u}from"./Markdown.a1537bc9.js";import{o as i,c,a as s,b as n,_ as d,n as p,r as t,A as w,B as b,w as k,d as M,C as $,D as y,E,F as P,u as H}from"./entry.7ebb0f52.js";import{_ as N}from"./nuxt-link.c320a6fa.js";import"./katex.min.0a87eea6.js";const R={class:"px-2"},C={class:"flex h-16 flex-row items-center overflow-x-auto overflow-y-hidden w-auto"},D=s("hr",{class:"py-1"},null,-1);function B(l,o){const e=u;return i(),c("div",null,[s("div",R,[s("div",C,[n(e,{class:"flex-none",md:"#### **MDPug Playground**"}),n(e,{class:"flex-none pl-2",md:"Easy to run `MDPug`"})])]),D])}const L={},T=d(L,[["render",B]]),V=`# MDPug
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
- b("  - let p = md(\`\${'#'.repeat(i+1)} ***\${i}***\`)")
- b("  div!= p")
- b("\`\`\`")
+example(m): :md ## Markdown in Pug in Markdown
- r()
\`\`\`
`,z={class:"overflow-hidden"},F=p({__name:"Main",setup(l){const o=t(V);return w("code",o),(e,r)=>{const a=b;return i(),c("div",z,[n(a,{keepalive:""})])}}}),I=s("hr",{class:"py-1"},null,-1),S={class:"flex h-8 flex-row flex-nowrap items-center overflow-x-auto overflow-y-hidden"},j={class:"ml-auto flex-none px-2"};function A(l,o){const e=u,r=N;return i(),c("div",null,[I,s("div",S,[s("div",j,[n(e,{class:"inline-block",md:"**MDPug Playground** @ 2023 ajiken4610 licensed under the `MIT LICENSE`. For license information, please see"}),n(r,{class:"pl-1",to:"/license"},{default:k(()=>[M("/license")]),_:1})])])])}const U={},q=d(U,[["render",A]]),G=p({__name:"index",setup(l){$(x=>({fb461a70:H(f)}));const o=t(),e=t(),r=t(0),a=t(0);y(()=>{o.value&&(r.value=o.value.$el.offsetHeight),e.value&&(a.value=e.value.$el.offsetHeight)});const _=t(window.innerHeight),m=()=>{_.value=window.innerHeight};addEventListener("resize",m),E(()=>{removeEventListener("resize",m)});const f=P(()=>_.value-(r.value+a.value)+"px");return(x,J)=>{const v=T,h=F,g=q;return i(),c("div",null,[n(v,{ref_key:"headerElementRef",ref:o},null,512),n(h,{class:"main-height"}),n(g,{ref_key:"footerElementRef",ref:e},null,512)])}}});const X=d(G,[["__scopeId","data-v-9c6e0e37"]]);export{X as default};
