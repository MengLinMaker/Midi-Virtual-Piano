define(["exports"],(function(t){"use strict";try{self["workbox:core:6.5.2"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.5.2"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class r{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=n(t)}}class i extends r{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class a{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=i&&i.handler;const o=t.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:t,event:e,params:r})}catch(t){c=Promise.reject(t)}const h=i&&i.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:r})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const r=this.t.get(s.method)||[];for(const i of r){let r;const a=i.match({url:t,sameOrigin:e,request:s,event:n});if(a)return r=a,(Array.isArray(r)&&0===r.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(r=void 0),{route:i,params:r}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,n(t))}setCatchHandler(t){this.o=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let o;const c=()=>(o||(o=new a,o.addFetchListener(),o.addCacheListener()),o);function h(t,e,n){let a;if("string"==typeof t){const s=new URL(t,location.href);a=new r((({url:t})=>t.href===s.href),e,n)}else if(t instanceof RegExp)a=new i(t,e,n);else if("function"==typeof t)a=new r(t,e,n);else{if(!(t instanceof r))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return c().registerRoute(a),a}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},u.apply(this,arguments)}let l,f;const w=new WeakMap,d=new WeakMap,y=new WeakMap,p=new WeakMap,g=new WeakMap;let m={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||y.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return v(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function R(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(f||(f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(b(this),e),v(w.get(this))}:function(...e){return v(t.apply(b(this),e))}:function(e,...s){const n=t.call(b(this),e,...s);return y.set(n,e.sort?e.sort():[e]),v(n)}}function q(t){return"function"==typeof t?R(t):(t instanceof IDBTransaction&&function(t){if(d.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),n()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}(t),e=t,(l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,m):t);var e}function v(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(v(t.result)),n()},i=()=>{s(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&w.set(e,t)})).catch((()=>{})),g.set(e,t),e}(t);if(p.has(t))return p.get(t);const e=q(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const b=t=>g.get(t);const D=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],I=new Map;function U(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(I.get(e))return I.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,r=E.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!D.includes(s))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let a=i.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[s](...e),r&&i.done]))[0]};return I.set(e,i),i}m=(t=>u({},t,{get:(e,s,n)=>U(e,s)||t.get(e,s,n),has:(e,s)=>!!U(e,s)||t.has(e,s)}))(m);try{self["workbox:background-sync:6.5.2"]&&_()}catch(t){}const B="requests",x="queueName";class L{constructor(){this.h=null}async addEntry(t){const e=(await this.getDb()).transaction(B,"readwrite",{durability:"relaxed"});await e.store.add(t),await e.done}async getFirstEntryId(){const t=await this.getDb(),e=await t.transaction(B).store.openCursor();return null==e?void 0:e.value.id}async getAllEntriesByQueueName(t){const e=await this.getDb(),s=await e.getAllFromIndex(B,x,IDBKeyRange.only(t));return s||new Array}async getEntryCountByQueueName(t){return(await this.getDb()).countFromIndex(B,x,IDBKeyRange.only(t))}async deleteEntry(t){const e=await this.getDb();await e.delete(B,t)}async getFirstEntryByQueueName(t){return await this.getEndEntryFromIndex(IDBKeyRange.only(t),"next")}async getLastEntryByQueueName(t){return await this.getEndEntryFromIndex(IDBKeyRange.only(t),"prev")}async getEndEntryFromIndex(t,e){const s=await this.getDb(),n=await s.transaction(B).store.index(x).openCursor(t,e);return null==n?void 0:n.value}async getDb(){return this.h||(this.h=await function(t,e,{blocked:s,upgrade:n,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),o=v(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(v(a.result),t.oldVersion,t.newVersion,v(a.transaction))})),s&&a.addEventListener("blocked",(()=>s())),o.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}("workbox-background-sync",3,{upgrade:this.u})),this.h}u(t,e){e>0&&e<3&&t.objectStoreNames.contains(B)&&t.deleteObjectStore(B);t.createObjectStore(B,{autoIncrement:!0,keyPath:"id"}).createIndex(x,x,{unique:!1})}}class k{constructor(t){this.l=t,this.p=new L}async pushEntry(t){delete t.id,t.queueName=this.l,await this.p.addEntry(t)}async unshiftEntry(t){const e=await this.p.getFirstEntryId();e?t.id=e-1:delete t.id,t.queueName=this.l,await this.p.addEntry(t)}async popEntry(){return this.g(await this.p.getLastEntryByQueueName(this.l))}async shiftEntry(){return this.g(await this.p.getFirstEntryByQueueName(this.l))}async getAll(){return await this.p.getAllEntriesByQueueName(this.l)}async size(){return await this.p.getEntryCountByQueueName(this.l)}async deleteEntry(t){await this.p.deleteEntry(t)}async g(t){return t&&await this.deleteEntry(t.id),t}}const O=["method","referrer","referrerPolicy","mode","credentials","cache","redirect","integrity","keepalive"];class C{constructor(t){"navigate"===t.mode&&(t.mode="same-origin"),this.m=t}static async fromRequest(t){const e={url:t.url,headers:{}};"GET"!==t.method&&(e.body=await t.clone().arrayBuffer());for(const[s,n]of t.headers.entries())e.headers[s]=n;for(const s of O)void 0!==t[s]&&(e[s]=t[s]);return new C(e)}toObject(){const t=Object.assign({},this.m);return t.headers=Object.assign({},this.m.headers),t.body&&(t.body=t.body.slice(0)),t}toRequest(){return new Request(this.m.url,this.m)}clone(){return new C(this.toObject())}}const N="workbox-background-sync",j=new Set,S=t=>{const e={request:new C(t.requestData).toRequest(),timestamp:t.timestamp};return t.metadata&&(e.metadata=t.metadata),e};class T{constructor(t,{forceSyncFallback:e,onSync:n,maxRetentionTime:r}={}){if(this.R=!1,this.q=!1,j.has(t))throw new s("duplicate-queue-name",{name:t});j.add(t),this.v=t,this.D=n||this.replayRequests,this.I=r||10080,this.U=Boolean(e),this.B=new k(this.v),this.L()}get name(){return this.v}async pushRequest(t){await this._(t,"push")}async unshiftRequest(t){await this._(t,"unshift")}async popRequest(){return this.k("pop")}async shiftRequest(){return this.k("shift")}async getAll(){const t=await this.B.getAll(),e=Date.now(),s=[];for(const n of t){const t=60*this.I*1e3;e-n.timestamp>t?await this.B.deleteEntry(n.id):s.push(S(n))}return s}async size(){return await this.B.size()}async _({request:t,metadata:e,timestamp:s=Date.now()},n){const r={requestData:(await C.fromRequest(t.clone())).toObject(),timestamp:s};switch(e&&(r.metadata=e),n){case"push":await this.B.pushEntry(r);break;case"unshift":await this.B.unshiftEntry(r)}this.R?this.q=!0:await this.registerSync()}async k(t){const e=Date.now();let s;switch(t){case"pop":s=await this.B.popEntry();break;case"shift":s=await this.B.shiftEntry()}if(s){const n=60*this.I*1e3;return e-s.timestamp>n?this.k(t):S(s)}}async replayRequests(){let t;for(;t=await this.shiftRequest();)try{await fetch(t.request.clone())}catch(e){throw await this.unshiftRequest(t),new s("queue-replay-failed",{name:this.v})}}async registerSync(){if("sync"in self.registration&&!this.U)try{await self.registration.sync.register(`${N}:${this.v}`)}catch(t){}}L(){"sync"in self.registration&&!this.U?self.addEventListener("sync",(t=>{if(t.tag===`${N}:${this.v}`){const e=async()=>{let e;this.R=!0;try{await this.D({queue:this})}catch(t){if(t instanceof Error)throw e=t,e}finally{!this.q||e&&!t.lastChance||await this.registerSync(),this.R=!1,this.q=!1}};t.waitUntil(e())}})):this.D({queue:this})}static get O(){return j}}function P(t){return new Promise((e=>setTimeout(e,t)))}const K={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},M=t=>[K.prefix,t,K.suffix].filter((t=>t&&t.length>0)).join("-"),W=t=>t||M(K.precache),A=t=>t||M(K.runtime);function F(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class ${constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const H=new Set;try{self["workbox:strategies:6.5.2"]&&_()}catch(t){}function Q(t){return"string"==typeof t?new Request(t):t}class G{constructor(t,e){this.C={},Object.assign(this,e),this.event=e.event,this.N=t,this.j=new $,this.S=[],this.T=[...t.plugins],this.P=new Map;for(const t of this.T)this.P.set(t,{});this.event.waitUntil(this.j.promise)}async fetch(t){const{event:e}=this;let n=Q(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(t){if(t instanceof Error)throw new s("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const i=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.N.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:i,response:t});return t}catch(t){throw r&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:r.clone(),request:i.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=Q(t);let s;const{cacheName:n,matchOptions:r}=this.N,i=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},r),{cacheName:n});s=await caches.match(i,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:r,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(t,e){const n=Q(t);await P(0);const r=await this.getCacheKey(n,"write");if(!e)throw new s("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const a=await this.K(e);if(!a)return!1;const{cacheName:o,matchOptions:c}=this.N,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(t,e,s,n){const r=F(e.url,s);if(e.url===r)return t.match(e,n);const i=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await t.keys(e,i);for(const e of a)if(r===F(e.url,s))return t.match(e,n)}(h,r.clone(),["__WB_REVISION__"],c):null;try{await h.put(r,u?a.clone():a)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of H)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:o,oldResponse:l,newResponse:a.clone(),request:r,event:this.event});return!0}async getCacheKey(t,e){const s=`${t.url} | ${e}`;if(!this.C[s]){let n=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))n=Q(await t({mode:e,request:n,event:this.event,params:this.params}));this.C[s]=n}return this.C[s]}hasCallback(t){for(const e of this.N.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.N.plugins)if("function"==typeof e[t]){const s=this.P.get(e),n=n=>{const r=Object.assign(Object.assign({},n),{state:s});return e[t](r)};yield n}}waitUntil(t){return this.S.push(t),t}async doneWaiting(){let t;for(;t=this.S.shift();)await t}destroy(){this.j.resolve(null)}async K(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class z{constructor(t={}){this.cacheName=A(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,r=new G(this,{event:e,request:s,params:n}),i=this.M(r,s,e);return[i,this.W(i,r,s,e)]}async M(t,e,n){let r;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(r=await this.A(e,t),!r||"error"===r.type)throw new s("no-response",{url:e.url})}catch(s){if(s instanceof Error)for(const i of t.iterateCallbacks("handlerDidError"))if(r=await i({error:s,event:n,request:e}),r)break;if(!r)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))r=await s({event:n,request:e,response:r});return r}async W(t,e,s,n){let r,i;try{r=await t}catch(i){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await e.doneWaiting()}catch(t){t instanceof Error&&(i=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:i}),e.destroy(),i)throw i}}function V(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:6.5.2"]&&_()}catch(t){}function J(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const r=new URL(n,location.href),i=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",e),{cacheKey:r.href,url:i.href}}class X{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class Y{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=(null==e?void 0:e.cacheKey)||this.F.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this.F=t}}let Z,tt;async function et(t,e){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new s("cross-origin-copy-response",{origin:n});const r=t.clone(),i={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},a=e?e(i):i,o=function(){if(void 0===Z){const t=new Response("");if("body"in t)try{new Response(t.body),Z=!0}catch(t){Z=!1}Z=!1}return Z}()?r.body:await r.blob();return new Response(o,a)}class st extends z{constructor(t={}){t.cacheName=W(t.cacheName),super(t),this.$=!1!==t.fallbackToNetwork,this.plugins.push(st.copyRedirectedCacheableResponsesPlugin)}async A(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.H(t,e):await this.G(t,e))}async G(t,e){let n;const r=e.params||{};if(!this.$)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const s=r.integrity,i=t.integrity,a=!i||i===s;n=await e.fetch(new Request(t,{integrity:i||s})),s&&a&&(this.V(),await e.cachePut(t,n.clone()))}return n}async H(t,e){this.V();const n=await e.fetch(t);if(!await e.cachePut(t,n.clone()))throw new s("bad-precaching-response",{url:t.url,status:n.status});return n}V(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==st.copyRedirectedCacheableResponsesPlugin&&(n===st.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(st.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}st.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},st.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await et(t):t};class nt{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.J=new Map,this.X=new Map,this.Y=new Map,this.N=new st({cacheName:W(t),plugins:[...e,new Y({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.N}precache(t){this.addToCacheList(t),this.Z||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.Z=!0)}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:r}=J(n),i="string"!=typeof n&&n.revision?"reload":"default";if(this.J.has(r)&&this.J.get(r)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.J.get(r),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.Y.has(t)&&this.Y.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:r});this.Y.set(t,n.integrity)}if(this.J.set(r,t),this.X.set(r,i),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return V(t,(async()=>{const e=new X;this.strategy.plugins.push(e);for(const[e,s]of this.J){const n=this.Y.get(s),r=this.X.get(e),i=new Request(e,{integrity:n,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return V(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.J.values()),n=[];for(const r of e)s.has(r.url)||(await t.delete(r),n.push(r.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.J}getCachedURLs(){return[...this.J.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.J.get(e.href)}getIntegrityForCacheKey(t){return this.Y.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new s("non-precached-url",{url:t});return s=>(s.request=new Request(t),s.params=Object.assign({cacheKey:e},s.params),this.strategy.handle(s))}}const rt=()=>(tt||(tt=new nt),tt);class it extends r{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const r of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:r}={}){const i=new URL(t,location.href);i.hash="",yield i.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(i,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(r){const t=r({url:i});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(r);if(e){return{cacheKey:e,integrity:t.getIntegrityForCacheKey(e)}}}}),t.strategy)}}t.BackgroundSyncPlugin=class{constructor(t,e){this.fetchDidFail=async({request:t})=>{await this.tt.pushRequest({request:t})},this.tt=new T(t,e)}},t.NavigationRoute=class extends r{constructor(t,{allowlist:e=[/./],denylist:s=[]}={}){super((t=>this.et(t)),t),this.st=e,this.nt=s}et({url:t,request:e}){if(e&&"navigate"!==e.mode)return!1;const s=t.pathname+t.search;for(const t of this.nt)if(t.test(s))return!1;return!!this.st.some((t=>t.test(s)))}},t.NetworkOnly=class extends z{constructor(t={}){super(t),this.rt=t.networkTimeoutSeconds||0}async A(t,e){let n,r;try{const s=[e.fetch(t)];if(this.rt){const t=P(1e3*this.rt);s.push(t)}if(r=await Promise.race(s),!r)throw new Error(`Timed out the network response after ${this.rt} seconds.`)}catch(t){t instanceof Error&&(n=t)}if(!r)throw new s("no-response",{url:t.url,error:n});return r}},t.cleanupOutdatedCaches=function(){self.addEventListener("activate",(t=>{const e=W();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t));return await Promise.all(s.map((t=>self.caches.delete(t)))),s})(e).then((t=>{})))}))},t.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},t.createHandlerBoundToURL=function(t){return rt().createHandlerBoundToURL(t)},t.precacheAndRoute=function(t,e){!function(t){rt().precache(t)}(t),function(t){const e=rt();h(new it(e,t))}(e)},t.registerRoute=h}));