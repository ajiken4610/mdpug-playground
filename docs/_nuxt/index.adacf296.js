import{_}from"./Markdown.a5497848.js";import{o as i,c,a as s,b as n,_ as d,f as p,r as t,q as v,s as k,w as b,d as M,x as y,y as P,z as $,A as T,h as E}from"./entry.de37861b.js";import{_ as H}from"./nuxt-link.b1094309.js";import"./katex.min.0a87eea6.js";const I={class:"px-2"},N={class:"flex h-16 flex-row items-center overflow-x-auto overflow-y-hidden w-auto"},C=s("hr",{class:"py-1"},null,-1);function L(l,o){const e=_;return i(),c("div",null,[s("div",I,[s("div",N,[n(e,{class:"flex-none",md:"#### **MDPug Playground**"}),n(e,{class:"flex-none pl-2",md:"Easy to run `MDPug`"})])]),C])}const R={},S=d(R,[["render",L]]),D='# MDPug\n**Markdown + Pug**\nYou can write Markdown at top level of the source.\nIn Markdown, you can write Pug using `!pug`block.\nIn Pug statements, you can write Markdown using `md()` or `:md`.\n\n````!pug\nmixin section(title,i)\n  - r(md(`${"#".repeat(i)} ${title}`))\n  div(style={"margin-top":".5rem","margin-bottom":".5rem","border-bottom":"1px solid gray"})\n  - block && r(md(b(block)))\n\nmixin example(title)\n  +section(title,2)\n  - var source = b(block)\n  +section("Source",3).\n    ````md\n    !{source}\n    ````\n  +section("Result",3)!= source\n\n+example("Markdown").\n  # title\n  This is **Markdown-decorated** text.\n\n+example("Pug in Markdown").\n  ```!pug\n  div hello\n  ```\n+example("*STATIC* Markdown in Pug in Markdown").\n  ```!pug\n  - for(var i = 0;i < 3;i++)\n    :md > No variables can be used here. So, this won\'t work: \\#{i} or \\${i}\n  ```\n\n+example("*DYNAMIC* Markdown in Pug in Markdown").\n  ```!pug\n  - for(var i = 0;i < 3;i++)\n    - r(md(`> Variables can be used here: ${i}`))\n  ```\n\n+example("Declared functions and filters which can be used in Pug statements").\n  #### r(html)\n  `r(html)` will render HTML received in arguments.\n  This is commonly used with md() or b(block) function.\n  ```!pug\n  - r(`<em>ITALIC TEXT</em>`)\n  ```\n  #### b(block)\n  `b(block)` will return mixin block as string.\n  See console.\n  ```!pug\n  mixin test\n    - block && console.log(b(block))\n  +test\n  +test This text will appear in console.\n  ```\n  #### md(markdown)\n  `md(markdown)` compiles the Markdown received as an argument into HTML and returns it.\n  This is commonly used with r() function.\n  ```!pug\n  - r(md(`> Random number: ${Math.random()}`))\n  ```\n  #### :md markdown\n  `:md markdown` allows you to write STATIC Markdown in Pug.\n  Please note that **NO** variables defined in Pug can be used within this filter.\n  ```!pug\n  :md > This statement is decorated using Markdown.\n  ```\n````\n',A={class:"overflow-hidden"},V=p({__name:"Main",setup(l){const o=t(D);return v("code",o),(e,a)=>{const r=k;return i(),c("div",A,[n(r,{keepalive:""})])}}}),z=s("hr",{class:"py-1"},null,-1),B={class:"flex h-8 flex-row flex-nowrap items-center overflow-x-auto overflow-y-hidden"},F={class:"ml-auto flex-none px-2"};function Y(l,o){const e=_,a=H;return i(),c("div",null,[z,s("div",B,[s("div",F,[n(e,{class:"inline-block",md:"**MDPug Playground** @ 2023 ajiken4610 licensed under the `MIT LICENSE`. For license information, please see"}),n(a,{class:"pl-1",to:"/license"},{default:b(()=>[M("/license")]),_:1})])])])}const j={},q=d(j,[["render",Y]]),O=p({__name:"index",setup(l){y(h=>({fb461a70:E(f)}));const o=t(),e=t(),a=t(0),r=t(0);P(()=>{o.value&&(a.value=o.value.$el.offsetHeight),e.value&&(r.value=e.value.$el.offsetHeight)});const u=t(window.innerHeight),m=()=>{u.value=window.innerHeight};addEventListener("resize",m),$(()=>{removeEventListener("resize",m)});const f=T(()=>u.value-(a.value+r.value)+"px");return(h,U)=>{const w=S,x=V,g=q;return i(),c("div",null,[n(w,{ref_key:"headerElementRef",ref:o},null,512),n(x,{class:"main-height"}),n(g,{ref_key:"footerElementRef",ref:e},null,512)])}}});const Q=d(O,[["__scopeId","data-v-9c6e0e37"]]);export{Q as default};
