if(!self.define){let e,t={};const i=(i,o)=>(i=new URL(i+".js",o).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(t[n])return;let s={};const c=e=>i(e,n),d={module:{uri:n},exports:s,require:c};t[n]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(r(...e),s)))}}define(["./workbox-e4df0f2a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"f5594e208e8aa94e4786648a42cc15d9"},{url:"q.js",revision:"1c2c65f49a17d82319538fa7fdae3cd9"}],{}),e.cleanupOutdatedCaches()}));
