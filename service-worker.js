if(!self.define){let e,t={};const i=(i,o)=>(i=new URL(i+".js",o).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(t[n])return;let s={};const c=e=>i(e,n),f={module:{uri:n},exports:s,require:c};t[n]=Promise.all(o.map((e=>f[e]||c(e)))).then((e=>(r(...e),s)))}}define(["./workbox-6716fad7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"7678dfe0f6c8a16c4a377e25c8037bf3"},{url:"q.js",revision:"49ccb77fee78f338b7e2b624579aff7a"}],{})}));
