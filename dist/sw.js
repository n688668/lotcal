if(!self.define){let e,n={};const s=(s,r)=>(s=new URL(s+".js",r).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let u={};const o=e=>s(e,l),t={module:{uri:l},exports:u,require:o};n[l]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(i(...e),u)))}}define(["./workbox-4ee0fbad"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/DCzZ_ZzY.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DWfRJfTT.js",revision:null},{url:"_nuxt/error-404.CQIR5sR7.css",revision:null},{url:"_nuxt/error-500.BzMM2uIp.css",revision:null},{url:"_nuxt/I3N6fRmQ.js",revision:null},{url:"_payload.json",revision:"720557de59767dd1b984d5b68a923e62"},{url:"_nuxt/builds/latest.json",revision:"b4b2c62ece4375153bd2b0bb7cf41acd"},{url:"_nuxt/builds/meta/04e4485e-4221-48a1-9316-5eb4e06d622d.json",revision:null},{url:"manifest.webmanifest",revision:"318846c8d058010dbc776719346524f0"}],{}),e.cleanupOutdatedCaches()}));
