import{_ as P}from"./Markdown.95eabfde.js";import{r as w,h as d,u as c,n as v,q as T,o as x,c as V,s as D,v as j,a as m,x as b,y as k,b as p}from"./entry.f8c67795.js";function _(t){return typeof t=="function"?t():c(t)}const h=()=>{};function B(t,o){function n(...e){return new Promise((u,l)=>{Promise.resolve(t(()=>o.apply(this,e),{fn:o,thisArg:this,args:e})).then(u).catch(l)})}return n}function C(t,o={}){let n,e,u=h;const l=s=>{clearTimeout(s),u(),u=h};return s=>{const f=_(t),r=_(o.maxWait);return n&&l(n),f<=0||r!==void 0&&r<=0?(e&&(l(e),e=null),Promise.resolve(s())):new Promise((i,y)=>{u=o.rejectOnCancel?y:i,r&&!e&&(e=setTimeout(()=>{n&&l(n),e=null,i(s())},r)),n=setTimeout(()=>{e&&l(e),e=null,i(s())},f)})}}function E(t,o=200,n={}){return B(C(o,n),t)}function F(t,o=200,n={}){const e=w(t.value),u=E(()=>{e.value=t.value},o,n);return d(t,()=>u()),e}const M={class:"overflow-y-hidden h-full"},R=v({__name:"Editor",props:{modelValue:{}},emits:["update:modelValue"],setup(t,{emit:o}){const n=t,e=w(n.modelValue);d(T(n,"modelValue"),l=>e.value=l);const u=F(e,500);return d(u,l=>{o("update:modelValue",l)}),(l,a)=>(x(),V("div",M,[D(m("textarea",{class:"h-full w-full","onUpdate:modelValue":a[0]||(a[0]=s=>b(e)?e.value=s:null)},null,512),[[j,c(e)]])]))}}),N={class:"h-full"},U={class:"inline-block w-full overflow-y-auto px-1 h-1/2 md:h-full md:w-1/2"},W={class:"inline-block w-full overflow-y-auto px-1 h-1/2 md:h-full md:w-1/2"},q=v({__name:"index",setup(t){const o=k("code");return(n,e)=>{const u=P,l=R;return x(),V("div",N,[m("div",U,[p(u,{md:c(o)},null,8,["md"])]),m("div",W,[p(l,{modelValue:c(o),"onUpdate:modelValue":e[0]||(e[0]=a=>b(o)?o.value=a:null)},null,8,["modelValue"])])])}}});export{q as default};
