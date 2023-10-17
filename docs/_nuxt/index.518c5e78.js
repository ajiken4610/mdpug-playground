import{_}from"./Markdown.f4b654c4.js";import{o as r,c,a as s,b as n,_ as l,f as h,r as t,q as k,s as v,w as b,d as M,x as y,y as P,z as T,A as $,h as E}from"./entry.d5b290ec.js";import{_ as H}from"./nuxt-link.48a9daf8.js";import"./sanitizeHTML.7b773b3b.js";const I={class:"px-2"},N={class:"flex h-16 flex-row items-center overflow-x-auto overflow-y-hidden w-auto"},C=s("hr",{class:"py-1"},null,-1);function L(d,o){const e=_;return r(),c("div",null,[s("div",I,[s("div",N,[n(e,{class:"flex-none",md:"#### **MDPug Playground**"}),n(e,{class:"flex-none pl-2",md:"Easy to run `MDPug`"})])]),C])}const R={},S=l(R,[["render",L]]),D='# MDPug\n**Markdown + Pug**\nYou can write Markdown at the top level of the source.\nIn Markdown, you can write Pug using `!pug`block.\nIn Pug statements, you can write Markdown using `+md`, `md()` or `:md`.\n\n````!pug\nstyle.\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    border-bottom: 1px solid gray\n  }\nmixin section(title,i)\n  +md #{"#".repeat(i)} #{title}\n  +md!= block && b(block)\n\nmixin example(title)\n  +section(title,2)\n  - var source = b(block)\n  +section("Source",3).\n    ````md\n    !{source}\n    ````\n  +section("Result",3)!= source\n\n+example("Markdown").\n  #### title\n  This is **Markdown-decorated** text.\n\n+example("Pug in Markdown").\n  ```!pug\n  div hello\n  ```\n+example("*STATIC* Markdown in Pug in Markdown").\n  ```!pug\n  - for(var i = 0;i < 3;i++)\n    :md > No variables can be used here. So, this won\'t work: \\\\#{i} or ${i}\n  ```\n\n+example("*DYNAMIC* Markdown in Pug in Markdown").\n  ```!pug\n  - for(var i = 0;i < 3;i++)\n    +md > Variables can be used here: \\#{i}\n  ```\n\n+example("Declared functions, mixins and filters which can be used in Pug statements").\n  #### r(html)\n  `r(html)` will render HTML received in arguments.\n  This is commonly used with md() or b(block) function.\n  ```!pug\n  - r(`<em>ITALIC TEXT</em>`)\n  ```\n  #### b(block)\n  `b(block)` will return mixin block as string.\n  See console.\n  ```!pug\n  mixin test\n    - block && console.log(b(block))\n  +test\n  +test This text will appear in console.\n  ```\n  #### :md markdown\n  `:md markdown` allows you to write STATIC Markdown in Pug.\n  Please note that **NO** variables defined in Pug can be used within this filter.\n  ```!pug\n  :md > This statement is **decorated** using Markdown.\n  ```\n  #### +md markdown\n  `+md markdown` compiles the Markdown received as a block into HTML and render it.\n  ```!pug\n  - var text = "This is the text declared within variable."\n  +md.\n    > This text is **decorated** within Markdown.\n    > Variables can be used here: \\#{text}\n  ```\n  #### md(markdown)\n  `md(markdown)` compiles the Markdown received as an argument into HTML and returns it.\n  This is commonly used with r() function.\n  ```!pug\n  - r(md(`> Random number: \\`${Math.random()}\\``))\n  ```\n````\n',V={class:"overflow-hidden"},A=h({__name:"Main",setup(d){const o=t(D);return k("code",o),(e,a)=>{const i=v;return r(),c("div",V,[n(i,{keepalive:""})])}}}),z=s("hr",{class:"py-1"},null,-1),B={class:"flex h-8 flex-row flex-nowrap items-center overflow-x-auto overflow-y-hidden"},F={class:"ml-auto flex-none px-2"};function Y(d,o){const e=_,a=H;return r(),c("div",null,[z,s("div",B,[s("div",F,[n(e,{class:"inline-block",md:"**MDPug Playground** @ 2023 ajiken4610 licensed under the `MIT LICENSE`. For license information, please see"}),n(a,{class:"pl-1",to:"/license"},{default:b(()=>[M("/license")]),_:1})])])])}const j={},q=l(j,[["render",Y]]),O=h({__name:"index",setup(d){y(w=>({fb461a70:E(p)}));const o=t(),e=t(),a=t(0),i=t(0);P(()=>{o.value&&(a.value=o.value.$el.offsetHeight),e.value&&(i.value=e.value.$el.offsetHeight)});const m=t(window.innerHeight),u=()=>{m.value=window.innerHeight};addEventListener("resize",u),T(()=>{removeEventListener("resize",u)});const p=$(()=>m.value-(a.value+i.value)+"px");return(w,U)=>{const f=S,x=A,g=q;return r(),c("div",null,[n(f,{ref_key:"headerElementRef",ref:o},null,512),n(x,{class:"main-height"}),n(g,{ref_key:"footerElementRef",ref:e},null,512)])}}});const Q=l(O,[["__scopeId","data-v-9c6e0e37"]]);export{Q as default};
