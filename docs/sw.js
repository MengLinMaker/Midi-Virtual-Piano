if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>n(e,r),l={module:{uri:r},exports:o,require:d};i[r]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-6c2a3e8d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.da8aed04.css",revision:null},{url:"assets/index.f8338627.js",revision:null},{url:"index.html",revision:"f34e483e2f9e790d3ddee2010bbfe726"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"c79f82c76d788af83a50f1b918fb1f18"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/api\/.*\/*.json/,new e.NetworkOnly({plugins:[new e.BackgroundSyncPlugin("myQueueName",{maxRetentionTime:1440})]}),"POST")}));
