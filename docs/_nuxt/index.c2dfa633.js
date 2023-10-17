import{_ as m}from"./Markdown.1192c6ae.js";import{o as i,c,a as s,b as n,_,f as p,r as t,q as w,s as k,w as M,d as b,x as $,y,z as P,A as E,h as H}from"./entry.7555c9ca.js";import{_ as N}from"./nuxt-link.e621660f.js";import"./katex.min.0a87eea6.js";const C={class:"px-2"},R={class:"flex h-16 flex-row items-center overflow-x-auto overflow-y-hidden w-auto"},D=s("hr",{class:"py-1"},null,-1);function I(l,o){const e=m;return i(),c("div",null,[s("div",C,[s("div",R,[n(e,{class:"flex-none",md:"#### **MDPug Playground**"}),n(e,{class:"flex-none pl-2",md:"Easy to run `MDPug`"})])]),D])}const S={},T=_(S,[["render",I]]),V=`# MDPug
**Markdown + Pug**

\`\`\`\`!pug
- b = (b) => {o = pug_html; pug_html = ""; b(); r = pug_html; pug_html = o;return r}

mixin section(title,i)
  - p = md(\`\${"#".repeat(i)} \${title}\`)
  div(style={"margin-top":".5rem","margin-bottom":".5rem","border-bottom":"1px solid gray"})!= p
  - p = block && md(b(block))
  div!= p

mixin example(title)
  +section(title,2)
  - source = b(block)
  +section("Source",3).
    \`\`\`\`md
    #{source}
    \`\`\`\`
  +section("Result",3)!= source

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
    - p = md(\`\${'#'.repeat(i+1)} ***Variables can be used here: \${i}***\`)
    div!= p
  \`\`\`

\`\`\`\``,z={class:"overflow-hidden"},L=p({__name:"Main",setup(l){const o=t(V);return w("code",o),(e,a)=>{const r=k;return i(),c("div",z,[n(r,{keepalive:""})])}}}),A=s("hr",{class:"py-1"},null,-1),B={class:"flex h-8 flex-row flex-nowrap items-center overflow-x-auto overflow-y-hidden"},F={class:"ml-auto flex-none px-2"};function j(l,o){const e=m,a=N;return i(),c("div",null,[A,s("div",B,[s("div",F,[n(e,{class:"inline-block",md:"**MDPug Playground** @ 2023 ajiken4610 licensed under the `MIT LICENSE`. For license information, please see"}),n(a,{class:"pl-1",to:"/license"},{default:M(()=>[b("/license")]),_:1})])])])}const q={},U=_(q,[["render",j]]),Y=p({__name:"index",setup(l){$(x=>({fb461a70:H(f)}));const o=t(),e=t(),a=t(0),r=t(0);y(()=>{o.value&&(a.value=o.value.$el.offsetHeight),e.value&&(r.value=e.value.$el.offsetHeight)});const d=t(window.innerHeight),u=()=>{d.value=window.innerHeight};addEventListener("resize",u),P(()=>{removeEventListener("resize",u)});const f=E(()=>d.value-(a.value+r.value)+"px");return(x,G)=>{const h=T,v=L,g=U;return i(),c("div",null,[n(h,{ref_key:"headerElementRef",ref:o},null,512),n(v,{class:"main-height"}),n(g,{ref_key:"footerElementRef",ref:e},null,512)])}}});const W=_(Y,[["__scopeId","data-v-9c6e0e37"]]);export{W as default};
