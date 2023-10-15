import{_ as m}from"./Markdown.95eabfde.js";import{o as c,c as r,a as s,b as n,_ as i,n as f,r as t,z as g,A as $,w as k,d as E,B as y,C as H,D as M,E as C,u as P}from"./entry.f8c67795.js";import{_ as b}from"./nuxt-link.e9fea5af.js";const B={class:"px-2"},L={class:"flex h-16 flex-row items-center overflow-x-auto overflow-y-hidden w-auto"},N=s("hr",{class:"py-1"},null,-1);function j(_,o){const e=m;return c(),r("div",null,[s("div",B,[s("div",L,[n(e,{class:"flex-none",md:"#### **MDPug Playground**"}),n(e,{class:"flex-none pl-2",md:"Easy to run `MDPug`"})])]),N])}const D={},R=i(D,[["render",j]]),T={class:"overflow-hidden"},z=f({__name:"Main",setup(_){const o=t(`# Welcome to MDPug!!!
## Extended tables
| This header spans two   || Header A |
| columns *and* two rows ^|| Header B |
|-------------|------------|----------|
| Cell A      | Cell B     | Cell C   |
## Code Highlight
\`\`\`js
console.log("helloworld");
\`\`\`
$$ Latex
This is inline katex: $c = \\pm\\sqrt{a^2 + b^2}$

This is block level katex:

$$
c = \\pm\\sqrt{a^2 + b^2}
$$

## Linkify
github.com
@ajiken4610
#ajiken4610
:ajiken4610

## Footnote
helloworld[^helloworld]

[^helloworld]: helloworld is a famous programming source code.
`);return g("code",o),(e,a)=>{const l=$;return c(),r("div",T,[n(l,{keepalive:""})])}}}),V=s("hr",{class:"py-1"},null,-1),A={class:"flex h-8 flex-row flex-nowrap items-center overflow-x-auto overflow-y-hidden"},F={class:"ml-auto flex-none px-2"};function I(_,o){const e=m,a=b;return c(),r("div",null,[V,s("div",A,[s("div",F,[n(e,{class:"inline-block",md:"**MDPug Playground** @ 2023 ajiken4610 licensed under the `MIT LICENSE`. For license information, please see"}),n(a,{class:"pl-1",to:"/license"},{default:k(()=>[E("/license")]),_:1})])])])}const q={},S=i(q,[["render",I]]),U=f({__name:"index",setup(_){y(p=>({fb461a70:P(h)}));const o=t(),e=t(),a=t(0),l=t(0);H(()=>{o.value&&(a.value=o.value.$el.offsetHeight),e.value&&(l.value=e.value.$el.offsetHeight)});const d=t(window.innerHeight),u=()=>{d.value=window.innerHeight};addEventListener("resize",u),M(()=>{removeEventListener("resize",u)});const h=C(()=>d.value-(a.value+l.value)+"px");return(p,W)=>{const x=R,v=z,w=S;return c(),r("div",null,[n(x,{ref_key:"headerElementRef",ref:o},null,512),n(v,{class:"main-height"}),n(w,{ref_key:"footerElementRef",ref:e},null,512)])}}});const O=i(U,[["__scopeId","data-v-9c6e0e37"]]);export{O as default};
