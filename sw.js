if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const f=e=>n(e,t),l={module:{uri:t},exports:o,require:f};i[t]=Promise.all(r.map((e=>l[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Cl7KrLN9.js",revision:null},{url:"index.html",revision:"9e006fdfdef62fbf18bcd30c0887858f"},{url:"registerSW.js",revision:"baa3f9c789f78efb2b8735516976ba56"},{url:"manifest.webmanifest",revision:"c0c3280513b9e7d6c2f5e9411f30c694"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
