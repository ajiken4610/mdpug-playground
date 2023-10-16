import{_ as m}from"./Markdown.e13cdfb8.js";import{o as a,c,a as s,b as n,_ as d,f as p,r as t,q as w,s as k,w as M,d as b,x as $,y,z as P,A as E,h as H}from"./entry.495f8801.js";import{_ as N}from"./nuxt-link.7e1430be.js";import"./katex.min.0a87eea6.js";const C={class:"px-2"},R={class:"flex h-16 flex-row items-center overflow-x-auto overflow-y-hidden w-auto"},D=s("hr",{class:"py-1"},null,-1);function I(l,o){const e=m;return a(),c("div",null,[s("div",C,[s("div",R,[n(e,{class:"flex-none",md:"#### **MDPug Playground**"}),n(e,{class:"flex-none pl-2",md:"Easy to run `MDPug`"})])]),D])}const S={},T=d(S,[["render",I]]),V=`# MDPug
**Markdown + Pug**

\`\`\`\`!pug
- let b = (b) => {let o = pug_html; pug_html = ""; b(); let r = pug_html; pug_html = o;return r}

mixin section(title,i=3)
  - let m = 0
  - m = md(\`\${"#".repeat(i)} \${title}\`)
  div!= m
  block

mixin example(title)
  div(style={"margin-top":".5rem"})
  - let t = md("## " + title)
  div!= t
  div(style={"margin-bottom":".5rem","border-bottom":"1px solid gray"})
  - let source = b(block)
  +section("Source")
    - p = md("\`\`\`\`md\\n" + source + "\\n\`\`\`\`")
    div!= p
  +section("Result")
    - p = md(source)
    div(style={"border":"1px solid","border-radius":".25rem"})!= p

+example("Markdown").
  # title
  This is Markdown-decorated text.

+example("Pug in Markdown").
  \`\`\`!pug
  - for(var i = 0;i < 3;i++)
    div \\#{i}
  \`\`\`

+example("STATIC Markdown in Pug in Markdown").
  \`\`\`!pug
  - for(var i = 0;i < 3;i++)
    :md ##### No variable can be used here. So, this won't work: \\#{i} or \${i}
  \`\`\`

+example("DYNAMIC Markdown in Pug in Markdown").
  \`\`\`!pug
  - for(var i = 0;i < 3;i++)
    - let p = md(\`\${'#'.repeat(i+1)} ***Variables can be used here: \${i}***\`)
    div!= p
  \`\`\`

\`\`\`\``,z={class:"overflow-hidden"},L=p({__name:"Main",setup(l){const o=t(V);return w("code",o),(e,r)=>{const i=k;return a(),c("div",z,[n(i,{keepalive:""})])}}}),A=s("hr",{class:"py-1"},null,-1),B={class:"flex h-8 flex-row flex-nowrap items-center overflow-x-auto overflow-y-hidden"},F={class:"ml-auto flex-none px-2"};function j(l,o){const e=m,r=N;return a(),c("div",null,[A,s("div",B,[s("div",F,[n(e,{class:"inline-block",md:"**MDPug Playground** @ 2023 ajiken4610 licensed under the `MIT LICENSE`. For license information, please see"}),n(r,{class:"pl-1",to:"/license"},{default:M(()=>[b("/license")]),_:1})])])])}const q={},U=d(q,[["render",j]]),Y=p({__name:"index",setup(l){$(x=>({fb461a70:H(f)}));const o=t(),e=t(),r=t(0),i=t(0);y(()=>{o.value&&(r.value=o.value.$el.offsetHeight),e.value&&(i.value=e.value.$el.offsetHeight)});const _=t(window.innerHeight),u=()=>{_.value=window.innerHeight};addEventListener("resize",u),P(()=>{removeEventListener("resize",u)});const f=E(()=>_.value-(r.value+i.value)+"px");return(x,G)=>{const v=T,h=L,g=U;return a(),c("div",null,[n(v,{ref_key:"headerElementRef",ref:o},null,512),n(h,{class:"main-height"}),n(g,{ref_key:"footerElementRef",ref:e},null,512)])}}});const W=d(Y,[["__scopeId","data-v-9c6e0e37"]]);export{W as default};
