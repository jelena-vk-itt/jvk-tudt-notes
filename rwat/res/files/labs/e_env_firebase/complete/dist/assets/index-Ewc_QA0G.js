(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Ry={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Yb=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];e[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],h=i[n++],f=i[n++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const u=i[n++],h=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Z_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,f=h?i[o+1]:0,g=o+2<i.length,y=g?i[o+2]:0,I=u>>2,b=(u&3)<<4|f>>4;let L=(f&15)<<2|y>>6,x=y&63;g||(x=64,h||(L=64)),r.push(n[I],n[b],n[L],n[x])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(X_(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Yb(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],f=o<i.length?n[i.charAt(o)]:0;++o;const y=o<i.length?n[i.charAt(o)]:64;++o;const b=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||f==null||y==null||b==null)throw new Jb;const L=u<<2|f>>4;if(r.push(L),y!==64){const x=f<<4&240|y>>2;if(r.push(x),b!==64){const z=y<<6&192|b;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Jb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qb=function(i){const e=X_(i);return Z_.encodeByteArray(e,!0)},Nl=function(i){return Qb(i).replace(/\./g,"")},ew=function(i){try{return Z_.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ol(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Xb(n)||(i[n]=Ol(i[n],e[n]));return i}function Xb(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=()=>tw().__FIREBASE_DEFAULTS__,e1=()=>{if(typeof process>"u"||typeof Ry>"u")return;const i=Ry.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},t1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ew(i[1]);return e&&JSON.parse(e)},Ql=()=>{try{return Zb()||e1()||t1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},nw=i=>{var e,n;return(n=(e=Ql())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},n1=i=>{const e=nw(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iw=()=>{var i;return(i=Ql())===null||i===void 0?void 0:i.config},rw=i=>{var e;return(e=Ql())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Nl(JSON.stringify(n)),Nl(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function Wf(){var i;const e=(i=Ql())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function o1(){return typeof window<"u"||sw()}function sw(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function a1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $f(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Gf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ow(){const i=at();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function u1(){return!Wf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yu(){try{return typeof indexedDB=="object"}catch{return!1}}function aw(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function c1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=l1,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?h1(u,r):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Nt(o,f,r)}}function h1(i,e){return i.replace(d1,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const d1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function f1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function _u(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const u=i[o],h=e[o];if(Py(u)&&Py(h)){if(!_u(u,h))return!1}else if(u!==h)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Py(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function po(i){const e={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,u]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function su(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}function uw(i,e){const n=new p1(i,e);return n.subscribe.bind(n)}class p1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");m1(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=Zd),o.error===void 0&&(o.error=Zd),o.complete===void 0&&(o.complete=Zd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m1(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Zd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=1e3,v1=2,y1=4*60*60*1e3,_1=.5;function ky(i,e=g1,n=v1){const r=e*Math.pow(n,i),o=Math.round(_1*r*(Math.random()-.5)*2);return Math.min(y1,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(i){return i&&i._delegate?i._delegate:i}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new i1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E1(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[u,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);r===f&&h.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),u=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I1(i){return i===qr?void 0:i}function E1(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new w1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=[];var ye;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ye||(ye={}));const lw={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},b1=ye.INFO,T1={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},A1=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=T1[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=b1,this._logHandler=A1,this._userLogHandler=null,zf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}function S1(i){zf.forEach(e=>{e.setLogLevel(i)})}function R1(i,e){for(const n of zf){let r=null;e&&e.level&&(r=lw[e.level]),i===null?n.userLogHandler=null:n.userLogHandler=(o,u,...h)=>{const f=h.map(g=>{if(g==null)return null;if(typeof g=="string")return g;if(typeof g=="number"||typeof g=="boolean")return g.toString();if(g instanceof Error)return g.message;try{return JSON.stringify(g)}catch{return null}}).filter(g=>g).join(" ");u>=(r??o.logLevel)&&i({level:ye[u].toLowerCase(),message:f,args:h,type:o.name})}}}const C1=(i,e)=>e.some(n=>i instanceof n);let Dy,Ny;function P1(){return Dy||(Dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k1(){return Ny||(Ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hw=new WeakMap,yf=new WeakMap,dw=new WeakMap,ef=new WeakMap,Kf=new WeakMap;function D1(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{n(or(i.result)),o()},h=()=>{r(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&hw.set(n,i)}).catch(()=>{}),Kf.set(e,i),e}function N1(i){if(yf.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{n(),o()},h=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});yf.set(i,e)}let _f={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return yf.get(i);if(e==="objectStoreNames")return i.objectStoreNames||dw.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function O1(i){_f=i(_f)}function L1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(tf(this),e,...n);return dw.set(r,e.sort?e.sort():[e]),or(r)}:k1().includes(i)?function(...e){return i.apply(tf(this),e),or(hw.get(this))}:function(...e){return or(i.apply(tf(this),e))}}function M1(i){return typeof i=="function"?L1(i):(i instanceof IDBTransaction&&N1(i),C1(i,P1())?new Proxy(i,_f):i)}function or(i){if(i instanceof IDBRequest)return D1(i);if(ef.has(i))return ef.get(i);const e=M1(i);return e!==i&&(ef.set(i,e),Kf.set(e,i)),e}const tf=i=>Kf.get(i);function fw(i,e,{blocked:n,upgrade:r,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),f=or(h);return r&&h.addEventListener("upgradeneeded",g=>{r(or(h.result),g.oldVersion,g.newVersion,or(h.transaction),g)}),n&&h.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),f.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const V1=["get","getKey","getAll","getAllKeys","count"],x1=["put","add","delete","clear"],nf=new Map;function Oy(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=x1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||V1.includes(n)))return;const u=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return r&&(y=y.index(f.shift())),(await Promise.all([y[n](...f),o&&g.done]))[0]};return nf.set(e,u),u}O1(i=>({...i,get:(e,n,r)=>Oy(e,n)||i.get(e,n,r),has:(e,n)=>!!Oy(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(U1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function U1(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ll="@firebase/app",wf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Ou("@firebase/app"),j1="@firebase/app-compat",B1="@firebase/analytics-compat",q1="@firebase/analytics",H1="@firebase/app-check-compat",W1="@firebase/app-check",$1="@firebase/auth",G1="@firebase/auth-compat",z1="@firebase/database",K1="@firebase/data-connect",Y1="@firebase/database-compat",J1="@firebase/functions",Q1="@firebase/functions-compat",X1="@firebase/installations",Z1="@firebase/installations-compat",eT="@firebase/messaging",tT="@firebase/messaging-compat",nT="@firebase/performance",iT="@firebase/performance-compat",rT="@firebase/remote-config",sT="@firebase/remote-config-compat",oT="@firebase/storage",aT="@firebase/storage-compat",uT="@firebase/firestore",cT="@firebase/vertexai-preview",lT="@firebase/firestore-compat",hT="firebase",dT="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]",fT={[Ll]:"fire-core",[j1]:"fire-core-compat",[q1]:"fire-analytics",[B1]:"fire-analytics-compat",[W1]:"fire-app-check",[H1]:"fire-app-check-compat",[$1]:"fire-auth",[G1]:"fire-auth-compat",[z1]:"fire-rtdb",[K1]:"fire-data-connect",[Y1]:"fire-rtdb-compat",[J1]:"fire-fn",[Q1]:"fire-fn-compat",[X1]:"fire-iid",[Z1]:"fire-iid-compat",[eT]:"fire-fcm",[tT]:"fire-fcm-compat",[nT]:"fire-perf",[iT]:"fire-perf-compat",[rT]:"fire-rc",[sT]:"fire-rc-compat",[oT]:"fire-gcs",[aT]:"fire-gcs-compat",[uT]:"fire-fst",[lT]:"fire-fst-compat",[cT]:"fire-vertex","fire-js":"fire-js",[hT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Map,wo=new Map,Io=new Map;function wu(i,e){try{i.container.addComponent(e)}catch(n){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function pw(i,e){i.container.addOrOverwriteComponent(e)}function yn(i){const e=i.name;if(Io.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;Io.set(e,i);for(const n of lr.values())wu(n,i);for(const n of wo.values())wu(n,i);return!0}function Oi(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function pT(i,e,n=cr){Oi(i,e).clearInstance(n)}function mw(i){return i.options!==void 0}function Ge(i){return i.settings!==void 0}function mT(){Io.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gn=new Ni("app","Firebase",gT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gw=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends gw{constructor(e,n,r,o){const u=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,h={name:r,automaticDataCollectionEnabled:u};if(e.apiKey!==void 0)super(e,h,o);else{const f=e;super(f.options,h,o)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:u},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,jt(Ll,wf,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Yf(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw gn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=dT;function Xl(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cr,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw gn.create("bad-app-name",{appName:String(o)});if(n||(n=iw()),!n)throw gn.create("no-options");const u=lr.get(o);if(u){if(_u(n,u.options)&&_u(r,u.config))return u;throw gn.create("duplicate-app",{appName:o})}const h=new cw(o);for(const g of Io.values())h.addComponent(g);const f=new gw(n,r,h);return lr.set(o,f),f}function yT(i,e){if(o1()&&!sw())throw gn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;mw(i)?n=i.options:n=i;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const o=y=>[...y].reduce((I,b)=>Math.imul(31,I)+b.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw gn.create("finalization-registry-not-supported",{});const u=""+o(JSON.stringify(r)),h=wo.get(u);if(h)return h.incRefCount(e.releaseOnDeref),h;const f=new cw(u);for(const y of Io.values())f.addComponent(y);const g=new vT(n,e,u,f);return wo.set(u,g),g}function Zl(i=cr){const e=lr.get(i);if(!e&&i===cr&&iw())return Xl();if(!e)throw gn.create("no-app",{appName:i});return e}function _T(){return Array.from(lr.values())}async function Yf(i){let e=!1;const n=i.name;lr.has(n)?(e=!0,lr.delete(n)):wo.has(n)&&i.decRefCount()<=0&&(wo.delete(n),e=!0),e&&(await Promise.all(i.container.getProviders().map(r=>r.delete())),i.isDeleted=!0)}function jt(i,e,n){var r;let o=(r=fT[i])!==null&&r!==void 0?r:i;n&&(o+=`-${n}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const f=[`Unable to register library "${o}" with version "${e}":`];u&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(f.join(" "));return}yn(new un(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}function vw(i,e){if(i!==null&&typeof i!="function")throw gn.create("invalid-log-argument");R1(i,e)}function yw(i){S1(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="firebase-heartbeat-database",IT=1,Iu="firebase-heartbeat-store";let rf=null;function _w(){return rf||(rf=fw(wT,IT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Iu)}catch(n){console.warn(n)}}}}).catch(i=>{throw gn.create("idb-open",{originalErrorMessage:i.message})})),rf}async function ET(i){try{const n=(await _w()).transaction(Iu),r=await n.objectStore(Iu).get(ww(i));return await n.done,r}catch(e){if(e instanceof Nt)Ci.warn(e.message);else{const n=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ci.warn(n.message)}}}async function Ly(i,e){try{const r=(await _w()).transaction(Iu,"readwrite");await r.objectStore(Iu).put(e,ww(i)),await r.done}catch(n){if(n instanceof Nt)Ci.warn(n.message);else{const r=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ci.warn(r.message)}}}function ww(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=1024,TT=30*24*60*60*1e3;class AT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=My();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=TT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ci.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=My(),{heartbeatsToSend:r,unsentEntries:o}=ST(this._heartbeatsCache.heartbeats),u=Nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Ci.warn(n),""}}}function My(){return new Date().toISOString().substring(0,10)}function ST(i,e=bT){const n=[];let r=i.slice();for(const o of i){const u=n.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Vy(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Vy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yu()?aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ET(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Vy(i){return Nl(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(i){yn(new un("platform-logger",e=>new F1(e),"PRIVATE")),yn(new un("heartbeat",e=>new AT(e),"PRIVATE")),jt(Ll,wf,i),jt(Ll,wf,"esm2017"),jt("fire-js","")}CT("");const PT=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Nt,SDK_VERSION:mr,_DEFAULT_ENTRY_NAME:cr,_addComponent:wu,_addOrOverwriteComponent:pw,_apps:lr,_clearComponents:mT,_components:Io,_getProvider:Oi,_isFirebaseApp:mw,_isFirebaseServerApp:Ge,_registerComponent:yn,_removeServiceInstance:pT,_serverApps:wo,deleteApp:Yf,getApp:Zl,getApps:_T,initializeApp:Xl,initializeServerApp:yT,onLog:vw,registerVersion:jt,setLogLevel:yw},Symbol.toStringTag,{value:"Module"}));var kT="firebase",DT="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(kT,DT,"app");const Iw="@firebase/installations",Jf="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=1e4,bw=`w:${Jf}`,Tw="FIS_v2",NT="https://firebaseinstallations.googleapis.com/v1",OT=60*60*1e3,LT="installations",MT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yr=new Ni(LT,MT,VT);function Aw(i){return i instanceof Nt&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw({projectId:i}){return`${NT}/projects/${i}/installations`}function Rw(i){return{token:i.token,requestStatus:2,expiresIn:FT(i.expiresIn),creationTime:Date.now()}}async function Cw(i,e){const r=(await e.json()).error;return Yr.create("request-failed",{requestName:i,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Pw({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function xT(i,{refreshToken:e}){const n=Pw(i);return n.append("Authorization",UT(e)),n}async function kw(i){const e=await i();return e.status>=500&&e.status<600?i():e}function FT(i){return Number(i.replace("s","000"))}function UT(i){return`${Tw} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT({appConfig:i,heartbeatServiceProvider:e},{fid:n}){const r=Sw(i),o=Pw(i),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:n,authVersion:Tw,appId:i.appId,sdkVersion:bw},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await kw(()=>fetch(r,f));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:Rw(y.authToken)}}else throw await Cw("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(i){return new Promise(e=>{setTimeout(e,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=/^[cdef][\w-]{21}$/,If="";function HT(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=WT(i);return qT.test(n)?n:If}catch{return If}}function WT(i){return BT(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new Map;function Ow(i,e){const n=eh(i);Lw(n,e),$T(n,e)}function Lw(i,e){const n=Nw.get(i);if(n)for(const r of n)r(e)}function $T(i,e){const n=GT();n&&n.postMessage({key:i,fid:e}),zT()}let Hr=null;function GT(){return!Hr&&"BroadcastChannel"in self&&(Hr=new BroadcastChannel("[Firebase] FID Change"),Hr.onmessage=i=>{Lw(i.data.key,i.data.fid)}),Hr}function zT(){Nw.size===0&&Hr&&(Hr.close(),Hr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="firebase-installations-database",YT=1,Jr="firebase-installations-store";let sf=null;function Qf(){return sf||(sf=fw(KT,YT,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Jr)}}})),sf}async function Ml(i,e){const n=eh(i),o=(await Qf()).transaction(Jr,"readwrite"),u=o.objectStore(Jr),h=await u.get(n);return await u.put(e,n),await o.done,(!h||h.fid!==e.fid)&&Ow(i,e.fid),e}async function Mw(i){const e=eh(i),r=(await Qf()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(e),await r.done}async function th(i,e){const n=eh(i),o=(await Qf()).transaction(Jr,"readwrite"),u=o.objectStore(Jr),h=await u.get(n),f=e(h);return f===void 0?await u.delete(n):await u.put(f,n),await o.done,f&&(!h||h.fid!==f.fid)&&Ow(i,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xf(i){let e;const n=await th(i.appConfig,r=>{const o=JT(r),u=QT(i,o);return e=u.registrationPromise,u.installationEntry});return n.fid===If?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function JT(i){const e=i||{fid:HT(),registrationStatus:0};return Vw(e)}function QT(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Yr.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=XT(i,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ZT(i)}:{installationEntry:e}}async function XT(i,e){try{const n=await jT(i,e);return Ml(i.appConfig,n)}catch(n){throw Aw(n)&&n.customData.serverCode===409?await Mw(i.appConfig):await Ml(i.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ZT(i){let e=await xy(i.appConfig);for(;e.registrationStatus===1;)await Dw(100),e=await xy(i.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xf(i);return r||n}return e}function xy(i){return th(i,e=>{if(!e)throw Yr.create("installation-not-found");return Vw(e)})}function Vw(i){return eA(i)?{fid:i.fid,registrationStatus:0}:i}function eA(i){return i.registrationStatus===1&&i.registrationTime+Ew<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA({appConfig:i,heartbeatServiceProvider:e},n){const r=nA(i,n),o=xT(i,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:bw,appId:i.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await kw(()=>fetch(r,f));if(g.ok){const y=await g.json();return Rw(y)}else throw await Cw("Generate Auth Token",g)}function nA(i,{fid:e}){return`${Sw(i)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf(i,e=!1){let n;const r=await th(i.appConfig,u=>{if(!xw(u))throw Yr.create("not-registered");const h=u.authToken;if(!e&&sA(h))return u;if(h.requestStatus===1)return n=iA(i,e),u;{if(!navigator.onLine)throw Yr.create("app-offline");const f=aA(u);return n=rA(i,f),f}});return n?await n:r.authToken}async function iA(i,e){let n=await Fy(i.appConfig);for(;n.authToken.requestStatus===1;)await Dw(100),n=await Fy(i.appConfig);const r=n.authToken;return r.requestStatus===0?Zf(i,e):r}function Fy(i){return th(i,e=>{if(!xw(e))throw Yr.create("not-registered");const n=e.authToken;return uA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function rA(i,e){try{const n=await tA(i,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ml(i.appConfig,r),n}catch(n){if(Aw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Mw(i.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ml(i.appConfig,r)}throw n}}function xw(i){return i!==void 0&&i.registrationStatus===2}function sA(i){return i.requestStatus===2&&!oA(i)}function oA(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+OT}function aA(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function uA(i){return i.requestStatus===1&&i.requestTime+Ew<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(i){const e=i,{installationEntry:n,registrationPromise:r}=await Xf(e);return r?r.catch(console.error):Zf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(i,e=!1){const n=i;return await hA(n),(await Zf(n,e)).token}async function hA(i){const{registrationPromise:e}=await Xf(i);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(i){if(!i||!i.options)throw of("App Configuration");if(!i.name)throw of("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!i.options[n])throw of(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function of(i){return Yr.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="installations",fA="installations-internal",pA=i=>{const e=i.getProvider("app").getImmediate(),n=dA(e),r=Oi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},mA=i=>{const e=i.getProvider("app").getImmediate(),n=Oi(e,Fw).getImmediate();return{getId:()=>cA(n),getToken:o=>lA(n,o)}};function gA(){yn(new un(Fw,pA,"PUBLIC")),yn(new un(fA,mA,"PRIVATE"))}gA();jt(Iw,Jf);jt(Iw,Jf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="analytics",vA="firebase_id",yA="origin",_A=60*1e3,wA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ep="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Ou("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},an=new Ni("analytics","Analytics",IA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(i){if(!i.startsWith(ep)){const e=an.create("invalid-gtag-resource",{gtagURL:i});return Qt.warn(e.message),""}return i}function Uw(i){return Promise.all(i.map(e=>e.catch(n=>n)))}function bA(i,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(i,e)),n}function TA(i,e){const n=bA("firebase-js-sdk-policy",{createScriptURL:EA}),r=document.createElement("script"),o=`${ep}?l=${i}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function AA(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function SA(i,e,n,r,o,u){const h=r[o];try{if(h)await e[h];else{const g=(await Uw(n)).find(y=>y.measurementId===o);g&&await e[g.appId]}}catch(f){Qt.error(f)}i("config",o,u)}async function RA(i,e,n,r,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await Uw(n);for(const g of h){const y=f.find(b=>b.measurementId===g),I=y&&e[y.appId];if(I)u.push(I);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),i("event",r,o||{})}catch(u){Qt.error(u)}}function CA(i,e,n,r){async function o(u,...h){try{if(u==="event"){const[f,g]=h;await RA(i,e,n,f,g)}else if(u==="config"){const[f,g]=h;await SA(i,e,n,r,f,g)}else if(u==="consent"){const[f,g]=h;i("consent",f,g)}else if(u==="get"){const[f,g,y]=h;i("get",f,g,y)}else if(u==="set"){const[f]=h;i("set",f)}else i(u,...h)}catch(f){Qt.error(f)}}return o}function PA(i,e,n,r,o){let u=function(...h){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=CA(u,i,e,n),{gtagCore:u,wrappedGtag:window[o]}}function kA(i){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ep)&&n.src.includes(i))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=30,NA=1e3;class OA{constructor(e={},n=NA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jw=new OA;function LA(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function MA(i){var e;const{appId:n,apiKey:r}=i,o={method:"GET",headers:LA(r)},u=wA.replace("{app-id}",n),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let f="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(f=g.error.message)}catch{}throw an.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function VA(i,e=jw,n){const{appId:r,apiKey:o,measurementId:u}=i.options;if(!r)throw an.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:r};throw an.create("no-api-key")}const h=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new UA;return setTimeout(async()=>{f.abort()},_A),Bw({appId:r,apiKey:o,measurementId:u},h,f,e)}async function Bw(i,{throttleEndTimeMillis:e,backoffCount:n},r,o=jw){var u;const{appId:h,measurementId:f}=i;try{await xA(r,e)}catch(g){if(f)return Qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:f};throw g}try{const g=await MA(i);return o.deleteThrottleMetadata(h),g}catch(g){const y=g;if(!FA(y)){if(o.deleteThrottleMetadata(h),f)return Qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:f};throw g}const I=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?ky(n,o.intervalMillis,DA):ky(n,o.intervalMillis),b={throttleEndTimeMillis:Date.now()+I,backoffCount:n+1};return o.setThrottleMetadata(h,b),Qt.debug(`Calling attemptFetch again in ${I} millis`),Bw(i,b,r,o)}}function xA(i,e){return new Promise((n,r)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);i.addEventListener(()=>{clearTimeout(u),r(an.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function FA(i){if(!(i instanceof Nt)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class UA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function jA(i,e,n,r,o){if(o&&o.global){i("event",n,r);return}else{const u=await e,h=Object.assign(Object.assign({},r),{send_to:u});i("event",n,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(){if(yu())try{await aw()}catch(i){return Qt.warn(an.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return Qt.warn(an.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qA(i,e,n,r,o,u,h){var f;const g=VA(i);g.then(x=>{n[x.measurementId]=x.appId,i.options.measurementId&&x.measurementId!==i.options.measurementId&&Qt.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>Qt.error(x)),e.push(g);const y=BA().then(x=>{if(x)return r.getId()}),[I,b]=await Promise.all([g,y]);kA(u)||TA(u,I.measurementId),o("js",new Date);const L=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return L[yA]="firebase",L.update=!0,b!=null&&(L[vA]=b),o("config",I.measurementId,L),I.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.app=e}_delete(){return delete lu[this.app.options.appId],Promise.resolve()}}let lu={},Uy=[];const jy={};let af="dataLayer",WA="gtag",By,qw,qy=!1;function $A(){const i=[];if($f()&&i.push("This is a browser extension environment."),c1()||i.push("Cookies are not available."),i.length>0){const e=i.map((r,o)=>`(${o+1}) ${r}`).join(" "),n=an.create("invalid-analytics-context",{errorInfo:e});Qt.warn(n.message)}}function GA(i,e,n){$A();const r=i.options.appId;if(!r)throw an.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)Qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw an.create("no-api-key");if(lu[r]!=null)throw an.create("already-exists",{id:r});if(!qy){AA(af);const{wrappedGtag:u,gtagCore:h}=PA(lu,Uy,jy,af,WA);qw=u,By=h,qy=!0}return lu[r]=qA(i,Uy,jy,e,By,af,n),new HA(i)}function zA(i=Zl()){i=ce(i);const e=Oi(i,Vl);return e.isInitialized()?e.getImmediate():KA(i)}function KA(i,e={}){const n=Oi(i,Vl);if(n.isInitialized()){const o=n.getImmediate();if(_u(e,n.getOptions()))return o;throw an.create("already-initialized")}return n.initialize({options:e})}function YA(i,e,n,r){i=ce(i),jA(qw,lu[i.app.options.appId],e,n,r).catch(o=>Qt.error(o))}const Hy="@firebase/analytics",Wy="0.10.8";function JA(){yn(new un(Vl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return GA(r,o,n)},"PUBLIC")),yn(new un("analytics-internal",i,"PRIVATE")),jt(Hy,Wy),jt(Hy,Wy,"esm2017");function i(e){try{const n=e.getProvider(Vl).getImmediate();return{logEvent:(r,o,u)=>YA(n,r,o,u)}}catch(n){throw an.create("interop-component-reg-failed",{reason:n})}}}JA();var $y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,Hw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,S){function R(){}R.prototype=S.prototype,P.D=S.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(k,C,N){for(var A=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)A[bt-2]=arguments[bt];return S.prototype[C].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,S,R){R||(R=0);var k=Array(16);if(typeof S=="string")for(var C=0;16>C;++C)k[C]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(C=0;16>C;++C)k[C]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=P.g[0],R=P.g[1],C=P.g[2];var N=P.g[3],A=S+(N^R&(C^N))+k[0]+3614090360&4294967295;S=R+(A<<7&4294967295|A>>>25),A=N+(C^S&(R^C))+k[1]+3905402710&4294967295,N=S+(A<<12&4294967295|A>>>20),A=C+(R^N&(S^R))+k[2]+606105819&4294967295,C=N+(A<<17&4294967295|A>>>15),A=R+(S^C&(N^S))+k[3]+3250441966&4294967295,R=C+(A<<22&4294967295|A>>>10),A=S+(N^R&(C^N))+k[4]+4118548399&4294967295,S=R+(A<<7&4294967295|A>>>25),A=N+(C^S&(R^C))+k[5]+1200080426&4294967295,N=S+(A<<12&4294967295|A>>>20),A=C+(R^N&(S^R))+k[6]+2821735955&4294967295,C=N+(A<<17&4294967295|A>>>15),A=R+(S^C&(N^S))+k[7]+4249261313&4294967295,R=C+(A<<22&4294967295|A>>>10),A=S+(N^R&(C^N))+k[8]+1770035416&4294967295,S=R+(A<<7&4294967295|A>>>25),A=N+(C^S&(R^C))+k[9]+2336552879&4294967295,N=S+(A<<12&4294967295|A>>>20),A=C+(R^N&(S^R))+k[10]+4294925233&4294967295,C=N+(A<<17&4294967295|A>>>15),A=R+(S^C&(N^S))+k[11]+2304563134&4294967295,R=C+(A<<22&4294967295|A>>>10),A=S+(N^R&(C^N))+k[12]+1804603682&4294967295,S=R+(A<<7&4294967295|A>>>25),A=N+(C^S&(R^C))+k[13]+4254626195&4294967295,N=S+(A<<12&4294967295|A>>>20),A=C+(R^N&(S^R))+k[14]+2792965006&4294967295,C=N+(A<<17&4294967295|A>>>15),A=R+(S^C&(N^S))+k[15]+1236535329&4294967295,R=C+(A<<22&4294967295|A>>>10),A=S+(C^N&(R^C))+k[1]+4129170786&4294967295,S=R+(A<<5&4294967295|A>>>27),A=N+(R^C&(S^R))+k[6]+3225465664&4294967295,N=S+(A<<9&4294967295|A>>>23),A=C+(S^R&(N^S))+k[11]+643717713&4294967295,C=N+(A<<14&4294967295|A>>>18),A=R+(N^S&(C^N))+k[0]+3921069994&4294967295,R=C+(A<<20&4294967295|A>>>12),A=S+(C^N&(R^C))+k[5]+3593408605&4294967295,S=R+(A<<5&4294967295|A>>>27),A=N+(R^C&(S^R))+k[10]+38016083&4294967295,N=S+(A<<9&4294967295|A>>>23),A=C+(S^R&(N^S))+k[15]+3634488961&4294967295,C=N+(A<<14&4294967295|A>>>18),A=R+(N^S&(C^N))+k[4]+3889429448&4294967295,R=C+(A<<20&4294967295|A>>>12),A=S+(C^N&(R^C))+k[9]+568446438&4294967295,S=R+(A<<5&4294967295|A>>>27),A=N+(R^C&(S^R))+k[14]+3275163606&4294967295,N=S+(A<<9&4294967295|A>>>23),A=C+(S^R&(N^S))+k[3]+4107603335&4294967295,C=N+(A<<14&4294967295|A>>>18),A=R+(N^S&(C^N))+k[8]+1163531501&4294967295,R=C+(A<<20&4294967295|A>>>12),A=S+(C^N&(R^C))+k[13]+2850285829&4294967295,S=R+(A<<5&4294967295|A>>>27),A=N+(R^C&(S^R))+k[2]+4243563512&4294967295,N=S+(A<<9&4294967295|A>>>23),A=C+(S^R&(N^S))+k[7]+1735328473&4294967295,C=N+(A<<14&4294967295|A>>>18),A=R+(N^S&(C^N))+k[12]+2368359562&4294967295,R=C+(A<<20&4294967295|A>>>12),A=S+(R^C^N)+k[5]+4294588738&4294967295,S=R+(A<<4&4294967295|A>>>28),A=N+(S^R^C)+k[8]+2272392833&4294967295,N=S+(A<<11&4294967295|A>>>21),A=C+(N^S^R)+k[11]+1839030562&4294967295,C=N+(A<<16&4294967295|A>>>16),A=R+(C^N^S)+k[14]+4259657740&4294967295,R=C+(A<<23&4294967295|A>>>9),A=S+(R^C^N)+k[1]+2763975236&4294967295,S=R+(A<<4&4294967295|A>>>28),A=N+(S^R^C)+k[4]+1272893353&4294967295,N=S+(A<<11&4294967295|A>>>21),A=C+(N^S^R)+k[7]+4139469664&4294967295,C=N+(A<<16&4294967295|A>>>16),A=R+(C^N^S)+k[10]+3200236656&4294967295,R=C+(A<<23&4294967295|A>>>9),A=S+(R^C^N)+k[13]+681279174&4294967295,S=R+(A<<4&4294967295|A>>>28),A=N+(S^R^C)+k[0]+3936430074&4294967295,N=S+(A<<11&4294967295|A>>>21),A=C+(N^S^R)+k[3]+3572445317&4294967295,C=N+(A<<16&4294967295|A>>>16),A=R+(C^N^S)+k[6]+76029189&4294967295,R=C+(A<<23&4294967295|A>>>9),A=S+(R^C^N)+k[9]+3654602809&4294967295,S=R+(A<<4&4294967295|A>>>28),A=N+(S^R^C)+k[12]+3873151461&4294967295,N=S+(A<<11&4294967295|A>>>21),A=C+(N^S^R)+k[15]+530742520&4294967295,C=N+(A<<16&4294967295|A>>>16),A=R+(C^N^S)+k[2]+3299628645&4294967295,R=C+(A<<23&4294967295|A>>>9),A=S+(C^(R|~N))+k[0]+4096336452&4294967295,S=R+(A<<6&4294967295|A>>>26),A=N+(R^(S|~C))+k[7]+1126891415&4294967295,N=S+(A<<10&4294967295|A>>>22),A=C+(S^(N|~R))+k[14]+2878612391&4294967295,C=N+(A<<15&4294967295|A>>>17),A=R+(N^(C|~S))+k[5]+4237533241&4294967295,R=C+(A<<21&4294967295|A>>>11),A=S+(C^(R|~N))+k[12]+1700485571&4294967295,S=R+(A<<6&4294967295|A>>>26),A=N+(R^(S|~C))+k[3]+2399980690&4294967295,N=S+(A<<10&4294967295|A>>>22),A=C+(S^(N|~R))+k[10]+4293915773&4294967295,C=N+(A<<15&4294967295|A>>>17),A=R+(N^(C|~S))+k[1]+2240044497&4294967295,R=C+(A<<21&4294967295|A>>>11),A=S+(C^(R|~N))+k[8]+1873313359&4294967295,S=R+(A<<6&4294967295|A>>>26),A=N+(R^(S|~C))+k[15]+4264355552&4294967295,N=S+(A<<10&4294967295|A>>>22),A=C+(S^(N|~R))+k[6]+2734768916&4294967295,C=N+(A<<15&4294967295|A>>>17),A=R+(N^(C|~S))+k[13]+1309151649&4294967295,R=C+(A<<21&4294967295|A>>>11),A=S+(C^(R|~N))+k[4]+4149444226&4294967295,S=R+(A<<6&4294967295|A>>>26),A=N+(R^(S|~C))+k[11]+3174756917&4294967295,N=S+(A<<10&4294967295|A>>>22),A=C+(S^(N|~R))+k[2]+718787259&4294967295,C=N+(A<<15&4294967295|A>>>17),A=R+(N^(C|~S))+k[9]+3951481745&4294967295,P.g[0]=P.g[0]+S&4294967295,P.g[1]=P.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+C&4294967295,P.g[3]=P.g[3]+N&4294967295}r.prototype.u=function(P,S){S===void 0&&(S=P.length);for(var R=S-this.blockSize,k=this.B,C=this.h,N=0;N<S;){if(C==0)for(;N<=R;)o(this,P,N),N+=this.blockSize;if(typeof P=="string"){for(;N<S;)if(k[C++]=P.charCodeAt(N++),C==this.blockSize){o(this,k),C=0;break}}else for(;N<S;)if(k[C++]=P[N++],C==this.blockSize){o(this,k),C=0;break}}this.h=C,this.o+=S},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var S=1;S<P.length-8;++S)P[S]=0;var R=8*this.o;for(S=P.length-8;S<P.length;++S)P[S]=R&255,R/=256;for(this.u(P),P=Array(16),S=R=0;4>S;++S)for(var k=0;32>k;k+=8)P[R++]=this.g[S]>>>k&255;return P};function u(P,S){var R=f;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=S(P)}function h(P,S){this.h=S;for(var R=[],k=!0,C=P.length-1;0<=C;C--){var N=P[C]|0;k&&N==S||(R[C]=N,k=!1)}this.g=R}var f={};function g(P){return-128<=P&&128>P?u(P,function(S){return new h([S|0],0>S?-1:0)}):new h([P|0],0>P?-1:0)}function y(P){if(isNaN(P)||!isFinite(P))return b;if(0>P)return D(y(-P));for(var S=[],R=1,k=0;P>=R;k++)S[k]=P/R|0,R*=4294967296;return new h(S,0)}function I(P,S){if(P.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P.charAt(0)=="-")return D(I(P.substring(1),S));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),k=b,C=0;C<P.length;C+=8){var N=Math.min(8,P.length-C),A=parseInt(P.substring(C,C+N),S);8>N?(N=y(Math.pow(S,N)),k=k.j(N).add(y(A))):(k=k.j(R),k=k.add(y(A)))}return k}var b=g(0),L=g(1),x=g(16777216);i=h.prototype,i.m=function(){if(E(this))return-D(this).m();for(var P=0,S=1,R=0;R<this.g.length;R++){var k=this.i(R);P+=(0<=k?k:4294967296+k)*S,S*=4294967296}return P},i.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(z(this))return"0";if(E(this))return"-"+D(this).toString(P);for(var S=y(Math.pow(P,6)),R=this,k="";;){var C=re(R,S).g;R=F(R,C.j(S));var N=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=C,z(R))return N+k;for(;6>N.length;)N="0"+N;k=N+k}},i.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function z(P){if(P.h!=0)return!1;for(var S=0;S<P.g.length;S++)if(P.g[S]!=0)return!1;return!0}function E(P){return P.h==-1}i.l=function(P){return P=F(this,P),E(P)?-1:z(P)?0:1};function D(P){for(var S=P.g.length,R=[],k=0;k<S;k++)R[k]=~P.g[k];return new h(R,~P.h).add(L)}i.abs=function(){return E(this)?D(this):this},i.add=function(P){for(var S=Math.max(this.g.length,P.g.length),R=[],k=0,C=0;C<=S;C++){var N=k+(this.i(C)&65535)+(P.i(C)&65535),A=(N>>>16)+(this.i(C)>>>16)+(P.i(C)>>>16);k=A>>>16,N&=65535,A&=65535,R[C]=A<<16|N}return new h(R,R[R.length-1]&-2147483648?-1:0)};function F(P,S){return P.add(D(S))}i.j=function(P){if(z(this)||z(P))return b;if(E(this))return E(P)?D(this).j(D(P)):D(D(this).j(P));if(E(P))return D(this.j(D(P)));if(0>this.l(x)&&0>P.l(x))return y(this.m()*P.m());for(var S=this.g.length+P.g.length,R=[],k=0;k<2*S;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var C=0;C<P.g.length;C++){var N=this.i(k)>>>16,A=this.i(k)&65535,bt=P.i(C)>>>16,Ae=P.i(C)&65535;R[2*k+2*C]+=A*Ae,$(R,2*k+2*C),R[2*k+2*C+1]+=N*Ae,$(R,2*k+2*C+1),R[2*k+2*C+1]+=A*bt,$(R,2*k+2*C+1),R[2*k+2*C+2]+=N*bt,$(R,2*k+2*C+2)}for(k=0;k<S;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=S;k<2*S;k++)R[k]=0;return new h(R,0)};function $(P,S){for(;(P[S]&65535)!=P[S];)P[S+1]+=P[S]>>>16,P[S]&=65535,S++}function Y(P,S){this.g=P,this.h=S}function re(P,S){if(z(S))throw Error("division by zero");if(z(P))return new Y(b,b);if(E(P))return S=re(D(P),S),new Y(D(S.g),D(S.h));if(E(S))return S=re(P,D(S)),new Y(D(S.g),S.h);if(30<P.g.length){if(E(P)||E(S))throw Error("slowDivide_ only works with positive integers.");for(var R=L,k=S;0>=k.l(P);)R=pe(R),k=pe(k);var C=he(R,1),N=he(k,1);for(k=he(k,2),R=he(R,2);!z(k);){var A=N.add(k);0>=A.l(P)&&(C=C.add(R),N=A),k=he(k,1),R=he(R,1)}return S=F(P,C.j(S)),new Y(C,S)}for(C=b;0<=P.l(S);){for(R=Math.max(1,Math.floor(P.m()/S.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),N=y(R),A=N.j(S);E(A)||0<A.l(P);)R-=k,N=y(R),A=N.j(S);z(N)&&(N=L),C=C.add(N),P=F(P,A)}return new Y(C,P)}i.A=function(P){return re(this,P).h},i.and=function(P){for(var S=Math.max(this.g.length,P.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)&P.i(k);return new h(R,this.h&P.h)},i.or=function(P){for(var S=Math.max(this.g.length,P.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)|P.i(k);return new h(R,this.h|P.h)},i.xor=function(P){for(var S=Math.max(this.g.length,P.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)^P.i(k);return new h(R,this.h^P.h)};function pe(P){for(var S=P.g.length+1,R=[],k=0;k<S;k++)R[k]=P.i(k)<<1|P.i(k-1)>>>31;return new h(R,P.h)}function he(P,S){var R=S>>5;S%=32;for(var k=P.g.length-R,C=[],N=0;N<k;N++)C[N]=0<S?P.i(N+R)>>>S|P.i(N+R+1)<<32-S:P.i(N+R);return new h(C,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hw=r,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=I,Gr=h}).apply(typeof $y<"u"?$y:typeof self<"u"?self:typeof window<"u"?window:{});var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ww,ou,$w,El,Ef,Gw,zw,Kw;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,v){return c==Array.prototype||c==Object.prototype||(c[m]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof gl=="object"&&gl];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function o(c,m){if(m)e:{var v=r;c=c.split(".");for(var w=0;w<c.length-1;w++){var O=c[w];if(!(O in v))break e;v=v[O]}c=c[c.length-1],w=v[c],m=m(w),m!=w&&m!=null&&e(v,c,{configurable:!0,writable:!0,value:m})}}function u(c,m){c instanceof String&&(c+="");var v=0,w=!1,O={next:function(){if(!w&&v<c.length){var V=v++;return{value:m(V,c[V]),done:!1}}return w=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(c){return c||function(){return u(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function y(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function I(c,m,v){return c.call.apply(c.bind,arguments)}function b(c,m,v){if(!c)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,w),c.apply(m,O)}}return function(){return c.apply(m,arguments)}}function L(c,m,v){return L=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:b,L.apply(null,arguments)}function x(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function z(c,m){function v(){}v.prototype=m.prototype,c.aa=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(w,O,V){for(var G=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)G[Se-2]=arguments[Se];return m.prototype[O].apply(w,G)}}function E(c){const m=c.length;if(0<m){const v=Array(m);for(let w=0;w<m;w++)v[w]=c[w];return v}return[]}function D(c,m){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(g(w)){const O=c.length||0,V=w.length||0;c.length=O+V;for(let G=0;G<V;G++)c[O+G]=w[G]}else c.push(w)}}class F{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function $(c){return/^[\s\xa0]*$/.test(c)}function Y(){var c=f.navigator;return c&&(c=c.userAgent)?c:""}function re(c){return re[" "](c),c}re[" "]=function(){};var pe=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function he(c,m,v){for(const w in c)m.call(v,c[w],w,c)}function P(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function S(c){const m={};for(const v in c)m[v]=c[v];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,m){let v,w;for(let O=1;O<arguments.length;O++){w=arguments[O];for(v in w)c[v]=w[v];for(let V=0;V<R.length;V++)v=R[V],Object.prototype.hasOwnProperty.call(w,v)&&(c[v]=w[v])}}function C(c){var m=1;c=c.split(":");const v=[];for(;0<m&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function N(c){f.setTimeout(()=>{throw c},0)}function A(){var c=vr;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class bt{constructor(){this.h=this.g=null}add(m,v){const w=Ae.get();w.set(m,v),this.h?this.h.next=w:this.g=w,this.h=w}}var Ae=new F(()=>new oe,c=>c.reset());class oe{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,Vi=!1,vr=new bt,cn=()=>{const c=f.Promise.resolve(void 0);ut=()=>{c.then(Ku)}};var Ku=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(v){N(v)}var m=Ae;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}Vi=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pt(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var Ah=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return c}();function yr(c,m){if(pt.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(pe){e:{try{re(m.nodeName);var O=!0;break e}catch{}O=!1}O||(m=null)}}else v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Sh[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&yr.aa.h.call(this)}}z(yr,pt);var Sh={2:"touch",3:"pen",4:"mouse"};yr.prototype.h=function(){yr.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Tt="closure_listenable_"+(1e6*Math.random()|0),Yu=0;function ss(c,m,v,w,O){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!w,this.ha=O,this.key=++Yu,this.da=this.fa=!1}function os(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function as(c){this.src=c,this.g={},this.h=0}as.prototype.add=function(c,m,v,w,O){var V=c.toString();c=this.g[V],c||(c=this.g[V]=[],this.h++);var G=cs(c,m,w,O);return-1<G?(m=c[G],v||(m.fa=!1)):(m=new ss(m,this.src,V,!!w,O),m.fa=v,c.push(m)),m};function us(c,m){var v=m.type;if(v in c.g){var w=c.g[v],O=Array.prototype.indexOf.call(w,m,void 0),V;(V=0<=O)&&Array.prototype.splice.call(w,O,1),V&&(os(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function cs(c,m,v,w){for(var O=0;O<c.length;++O){var V=c[O];if(!V.da&&V.listener==m&&V.capture==!!v&&V.ha==w)return O}return-1}var jo="closure_lm_"+(1e6*Math.random()|0),At={};function Ju(c,m,v,w,O){if(Array.isArray(m)){for(var V=0;V<m.length;V++)Ju(c,m[V],v,w,O);return null}return v=qo(v),c&&c[Tt]?c.K(m,v,y(w)?!!w.capture:!!w,O):Rh(c,m,v,!1,w,O)}function Rh(c,m,v,w,O,V){if(!m)throw Error("Invalid event type");var G=y(O)?!!O.capture:!!O,Se=_r(c);if(Se||(c[jo]=Se=new as(c)),v=Se.add(m,v,w,G,V),v.proxy)return v;if(w=Ch(),v.proxy=w,w.src=c,w.listener=v,c.addEventListener)Ah||(O=G),O===void 0&&(O=!1),c.addEventListener(m.toString(),w,O);else if(c.attachEvent)c.attachEvent(Xu(m.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ch(){function c(v){return m.call(c.src,c.listener,v)}const m=Ph;return c}function Qu(c,m,v,w,O){if(Array.isArray(m))for(var V=0;V<m.length;V++)Qu(c,m[V],v,w,O);else w=y(w)?!!w.capture:!!w,v=qo(v),c&&c[Tt]?(c=c.i,m=String(m).toString(),m in c.g&&(V=c.g[m],v=cs(V,v,w,O),-1<v&&(os(V[v]),Array.prototype.splice.call(V,v,1),V.length==0&&(delete c.g[m],c.h--)))):c&&(c=_r(c))&&(m=c.g[m.toString()],c=-1,m&&(c=cs(m,v,w,O)),(v=-1<c?m[c]:null)&&Bo(v))}function Bo(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Tt])us(m.i,c);else{var v=c.type,w=c.proxy;m.removeEventListener?m.removeEventListener(v,w,c.capture):m.detachEvent?m.detachEvent(Xu(v),w):m.addListener&&m.removeListener&&m.removeListener(w),(v=_r(m))?(us(v,c),v.h==0&&(v.src=null,m[jo]=null)):os(c)}}}function Xu(c){return c in At?At[c]:At[c]="on"+c}function Ph(c,m){if(c.da)c=!0;else{m=new yr(m,this);var v=c.listener,w=c.ha||c.src;c.fa&&Bo(c),c=v.call(w,m)}return c}function _r(c){return c=c[jo],c instanceof as?c:null}var Mn="__closure_events_fn_"+(1e9*Math.random()>>>0);function qo(c){return typeof c=="function"?c:(c[Mn]||(c[Mn]=function(m){return c.handleEvent(m)}),c[Mn])}function et(){$t.call(this),this.i=new as(this),this.M=this,this.F=null}z(et,$t),et.prototype[Tt]=!0,et.prototype.removeEventListener=function(c,m,v,w){Qu(this,c,m,v,w)};function mt(c,m){var v,w=c.F;if(w)for(v=[];w;w=w.F)v.push(w);if(c=c.M,w=m.type||m,typeof m=="string")m=new pt(m,c);else if(m instanceof pt)m.target=m.target||c;else{var O=m;m=new pt(w,c),k(m,O)}if(O=!0,v)for(var V=v.length-1;0<=V;V--){var G=m.g=v[V];O=si(G,w,!0,m)&&O}if(G=m.g=c,O=si(G,w,!0,m)&&O,O=si(G,w,!1,m)&&O,v)for(V=0;V<v.length;V++)G=m.g=v[V],O=si(G,w,!1,m)&&O}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var v=c.g[m],w=0;w<v.length;w++)os(v[w]);delete c.g[m],c.h--}}this.F=null},et.prototype.K=function(c,m,v,w){return this.i.add(String(c),m,!1,v,w)},et.prototype.L=function(c,m,v,w){return this.i.add(String(c),m,!0,v,w)};function si(c,m,v,w){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var O=!0,V=0;V<m.length;++V){var G=m[V];if(G&&!G.da&&G.capture==v){var Se=G.listener,tt=G.ha||G.src;G.fa&&us(c.i,G),O=Se.call(tt,w)!==!1&&O}}return O&&!w.defaultPrevented}function oi(c,m,v){if(typeof c=="function")v&&(c=L(c,v));else if(c&&typeof c.handleEvent=="function")c=L(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(c,m||0)}function Vn(c){c.g=oi(()=>{c.g=null,c.i&&(c.i=!1,Vn(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Zu extends $t{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Vn(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wr(c){$t.call(this),this.h=c,this.g={}}z(wr,$t);var ec=[];function Ir(c){he(c.g,function(m,v){this.g.hasOwnProperty(v)&&Bo(m)},c),c.g={}}wr.prototype.N=function(){wr.aa.N.call(this),Ir(this)},wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xi=f.JSON.stringify,ai=f.JSON.parse,kh=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function Ho(){}Ho.prototype.h=null;function Wo(c){return c.h||(c.h=c.i())}function $o(){}var xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Go(){pt.call(this,"d")}z(Go,pt);function ln(){pt.call(this,"c")}z(ln,pt);var wn={},ls=null;function Fi(){return ls=ls||new et}wn.La="serverreachability";function hs(c){pt.call(this,wn.La,c)}z(hs,pt);function In(c){const m=Fi();mt(m,new hs(m))}wn.STAT_EVENT="statevent";function Ui(c,m){pt.call(this,wn.STAT_EVENT,c),this.stat=m}z(Ui,pt);function St(c){const m=Fi();mt(m,new Ui(m,c))}wn.Ma="timingevent";function zo(c,m){pt.call(this,wn.Ma,c),this.size=m}z(zo,pt);function Er(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function br(){this.g=!0}br.prototype.xa=function(){this.g=!1};function Dh(c,m,v,w,O,V){c.info(function(){if(c.g)if(V)for(var G="",Se=V.split("&"),tt=0;tt<Se.length;tt++){var me=Se[tt].split("=");if(1<me.length){var gt=me[0];me=me[1];var Ve=gt.split("_");G=2<=Ve.length&&Ve[1]=="type"?G+(gt+"="+me+"&"):G+(gt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+w+") [attempt "+O+"]: "+m+`
`+v+`
`+G})}function Nh(c,m,v,w,O,V,G){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+O+"]: "+m+`
`+v+`
`+V+" "+G})}function hn(c,m,v,w){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+ui(c,v)+(w?" "+w:"")})}function Fn(c,m){c.info(function(){return"TIMEOUT: "+m})}br.prototype.info=function(){};function ui(c,m){if(!c.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var w=v[c];if(!(2>w.length)){var O=w[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<O.length;G++)O[G]=""}}}}return xi(v)}catch{return m}}var Tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ko={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Un;function ds(){}z(ds,Ho),ds.prototype.g=function(){return new XMLHttpRequest},ds.prototype.i=function(){return{}},Un=new ds;function Mt(c,m,v,w){this.j=c,this.i=m,this.l=v,this.R=w||1,this.U=new wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tc}function tc(){this.i=null,this.g="",this.h=!1}var nc={},fs={};function ps(c,m,v){c.L=1,c.v=dn(qt(m)),c.m=v,c.P=!0,Ue(c,null)}function Ue(c,m){c.F=Date.now(),Ar(c),c.A=qt(c.v);var v=c.A,w=c.R;Array.isArray(w)||(w=[String(w)]),An(v.i,"t",w),c.C=0,v=c.j.J,c.h=new tc,c.g=hc(c.j,v?m:null,!c.m),0<c.O&&(c.M=new Zu(L(c.Y,c,c.g),c.O)),m=c.U,v=c.g,w=c.ca;var O="readystatechange";Array.isArray(O)||(O&&(ec[0]=O.toString()),O=ec);for(var V=0;V<O.length;V++){var G=Ju(v,O[V],w||m.handleEvent,!1,m.h||m);if(!G)break;m.g[G.key]=G}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),In(),Dh(c.i,c.u,c.A,c.l,c.R,c.m)}Mt.prototype.ca=function(c){c=c.target;const m=this.M;m&&zt(c)==3?m.j():this.Y(c)},Mt.prototype.Y=function(c){try{if(c==this.g)e:{const Ve=zt(this.g);var m=this.g.Ba();const zi=this.g.Z();if(!(3>Ve)&&(Ve!=3||this.g&&(this.h.h||this.g.oa()||ia(this.g)))){this.J||Ve!=4||m==7||(m==8||0>=zi?In(3):In(2)),ms(this);var v=this.g.Z();this.X=v;t:if(ci(this)){var w=ia(this.g);c="";var O=w.length,V=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),li(this);var G="";break t}this.h.i=new f.TextDecoder}for(m=0;m<O;m++)this.h.h=!0,c+=this.h.i.decode(w[m],{stream:!(V&&m==O-1)});w.length=0,this.h.g+=c,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=v==200,Nh(this.i,this.u,this.A,this.l,this.R,Ve,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,tt=this.g;if((Se=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Se)){var me=Se;break t}}me=null}if(v=me)hn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gs(this,v);else{this.o=!1,this.s=3,St(12),hi(this),li(this);break e}}if(this.P){v=!0;let Ct;for(;!this.J&&this.C<G.length;)if(Ct=ic(this,G),Ct==fs){Ve==4&&(this.s=4,St(14),v=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==nc){this.s=4,St(15),hn(this.i,this.l,G,"[Invalid Chunk]"),v=!1;break}else hn(this.i,this.l,Ct,null),gs(this,Ct);if(ci(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||G.length!=0||this.h.h||(this.s=1,St(16),v=!1),this.o=this.o&&v,!v)hn(this.i,this.l,G,"[Invalid Chunked Response]"),hi(this),li(this);else if(0<G.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),K(gt),gt.M=!0,St(11))}}else hn(this.i,this.l,G,null),gs(this,G);Ve==4&&hi(this),this.o&&!this.J&&(Ve==4?Le(this.j,this):(this.o=!1,Ar(this)))}else Vh(this.g),v==400&&0<G.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),hi(this),li(this)}}}catch{}finally{}};function ci(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ic(c,m){var v=c.C,w=m.indexOf(`
`,v);return w==-1?fs:(v=Number(m.substring(v,w)),isNaN(v)?nc:(w+=1,w+v>m.length?fs:(m=m.slice(w,w+v),c.C=w+v,m)))}Mt.prototype.cancel=function(){this.J=!0,hi(this)};function Ar(c){c.S=Date.now()+c.I,de(c,c.I)}function de(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Er(L(c.ba,c),m)}function ms(c){c.B&&(f.clearTimeout(c.B),c.B=null)}Mt.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Fn(this.i,this.A),this.L!=2&&(In(),St(17)),hi(this),this.s=2,li(this)):de(this,this.S-c)};function li(c){c.j.G==0||c.J||Le(c.j,c)}function hi(c){ms(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Ir(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function gs(c,m){try{var v=c.j;if(v.G!=0&&(v.g==c||ct(v.h,c))){if(!c.K&&ct(v.h,c)&&v.G==3){try{var w=v.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var O=w;if(O[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Rs(v),As(v);else break e;ge(v),St(18)}}else v.za=O[1],0<v.za-v.T&&37500>O[2]&&v.F&&v.v==0&&!v.C&&(v.C=Er(L(v.Za,v),6e3));if(1>=Gt(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else je(v,11)}else if((c.K||v.g==c)&&Rs(v),!$(m))for(O=v.Da.g.parse(m),m=0;m<O.length;m++){let me=O[m];if(v.T=me[0],me=me[1],v.G==2)if(me[0]=="c"){v.K=me[1],v.ia=me[2];const gt=me[3];gt!=null&&(v.la=gt,v.j.info("VER="+v.la));const Ve=me[4];Ve!=null&&(v.Aa=Ve,v.j.info("SVER="+v.Aa));const zi=me[5];zi!=null&&typeof zi=="number"&&0<zi&&(w=1.5*zi,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const Ct=c.g;if(Ct){const Hn=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var V=w.h;V.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Yo(V,V.h),V.h=null))}if(w.D){const oa=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(w.ya=oa,De(w.I,w.D,oa))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var G=c;if(w.qa=sa(w,w.J?w.ia:null,w.W),G.K){bn(w.h,G);var Se=G,tt=w.L;tt&&(Se.I=tt),Se.B&&(ms(Se),Ar(Se)),w.g=G}else Nr(w);0<v.i.length&&Ss(v)}else me[0]!="stop"&&me[0]!="close"||je(v,7);else v.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?je(v,7):gi(v):me[0]!="noop"&&v.l&&v.l.ta(me),v.v=0)}}In(4)}catch{}}var Me=class{constructor(c,m){this.g=c,this.map=m}};function En(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rc(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Gt(c){return c.h?1:c.g?c.g.size:0}function ct(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Yo(c,m){c.g?c.g.add(m):c.h=m}function bn(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}En.prototype.cancel=function(){if(this.i=Jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Jo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.D);return m}return E(c.i)}function vs(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var m=[],v=c.length,w=0;w<v;w++)m.push(c[w]);return m}m=[],v=0;for(w in c)m[v++]=c[w];return m}function Qo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var m=[];c=c.length;for(var v=0;v<c;v++)m.push(v);return m}m=[],v=0;for(const w in c)m[v++]=w;return m}}}function ys(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var v=Qo(c),w=vs(c),O=w.length,V=0;V<O;V++)m.call(void 0,w[V],v&&v[V],c)}var _s=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oh(c,m){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var w=c[v].indexOf("="),O=null;if(0<=w){var V=c[v].substring(0,w);O=c[v].substring(w+1)}else V=c[v];m(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Bt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Bt){this.h=c.h,Sr(this,c.j),this.o=c.o,this.g=c.g,Tn(this,c.s),this.l=c.l;var m=c.i,v=new Bi;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),Xo(this,v),this.m=c.m}else c&&(m=String(c).match(_s))?(this.h=!1,Sr(this,m[1]||"",!0),this.o=ji(m[2]||""),this.g=ji(m[3]||"",!0),Tn(this,m[4]),this.l=ji(m[5]||"",!0),Xo(this,m[6]||"",!0),this.m=ji(m[7]||"")):(this.h=!1,this.i=new Bi(null,this.h))}Bt.prototype.toString=function(){var c=[],m=this.j;m&&c.push(Rr(m,Vt,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Rr(m,Vt,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Rr(v,v.charAt(0)=="/"?oc:jn,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Rr(v,ac)),c.join("")};function qt(c){return new Bt(c)}function Sr(c,m,v){c.j=v?ji(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Tn(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function Xo(c,m,v){m instanceof Bi?(c.i=m,uc(c.i,c.h)):(v||(m=Rr(m,ws)),c.i=new Bi(m,c.h))}function De(c,m,v){c.i.set(m,v)}function dn(c){return De(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ji(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Rr(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,sc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function sc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Vt=/[#\/\?@]/g,jn=/[#\?:]/g,oc=/[#\?]/g,ws=/[#\?@]/g,ac=/#/g;function Bi(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function fn(c){c.g||(c.g=new Map,c.h=0,c.i&&Oh(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}i=Bi.prototype,i.add=function(c,m){fn(this),this.i=null,c=Sn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function di(c,m){fn(c),m=Sn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Zo(c,m){return fn(c),m=Sn(c,m),c.g.has(m)}i.forEach=function(c,m){fn(this),this.g.forEach(function(v,w){v.forEach(function(O){c.call(m,O,w,this)},this)},this)},i.na=function(){fn(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let w=0;w<m.length;w++){const O=c[w];for(let V=0;V<O.length;V++)v.push(m[w])}return v},i.V=function(c){fn(this);let m=[];if(typeof c=="string")Zo(this,c)&&(m=m.concat(this.g.get(Sn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)m=m.concat(c[v])}return m},i.set=function(c,m){return fn(this),this.i=null,c=Sn(this,c),Zo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},i.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function An(c,m,v){di(c,m),0<v.length&&(c.i=null,c.g.set(Sn(c,m),E(v)),c.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var w=m[v];const V=encodeURIComponent(String(w)),G=this.V(w);for(w=0;w<G.length;w++){var O=V;G[w]!==""&&(O+="="+encodeURIComponent(String(G[w]))),c.push(O)}}return this.i=c.join("&")};function Sn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function uc(c,m){m&&!c.j&&(fn(c),c.i=null,c.g.forEach(function(v,w){var O=w.toLowerCase();w!=O&&(di(this,w),An(this,O,v))},c)),c.j=m}function Cr(c,m){const v=new br;if(f.Image){const w=new Image;w.onload=x(Bn,v,"TestLoadImage: loaded",!0,m,w),w.onerror=x(Bn,v,"TestLoadImage: error",!1,m,w),w.onabort=x(Bn,v,"TestLoadImage: abort",!1,m,w),w.ontimeout=x(Bn,v,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else m(!1)}function Lh(c,m){const v=new br,w=new AbortController,O=setTimeout(()=>{w.abort(),Bn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:w.signal}).then(V=>{clearTimeout(O),V.ok?Bn(v,"TestPingServer: ok",!0,m):Bn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(O),Bn(v,"TestPingServer: error",!1,m)})}function Bn(c,m,v,w,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),w(v)}catch{}}function Mh(){this.g=new kh}function qi(c,m,v){const w=v||"";try{ys(c,function(O,V){let G=O;y(O)&&(G=xi(O)),m.push(w+V+"="+encodeURIComponent(G))})}catch(O){throw m.push(w+"type="+encodeURIComponent("_badmap")),O}}function Xt(c){this.l=c.Ub||null,this.j=c.eb||!1}z(Xt,Ho),Xt.prototype.g=function(){return new Hi(this.l,this.j)},Xt.prototype.i=function(c){return function(){return c}}({});function Hi(c,m){et.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Hi,et),i=Hi.prototype,i.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,pi(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pr(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pr(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?fi(this):pi(this),this.readyState==3&&Pr(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,fi(this))},i.Qa=function(c){this.g&&(this.response=c,fi(this))},i.ga=function(){this.g&&fi(this)};function fi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,pi(c)}i.setRequestHeader=function(c,m){this.u.append(c,m)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function pi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ea(c){let m="";return he(c,function(v,w){m+=w,m+=":",m+=v,m+=`\r
`}),m}function ta(c,m,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=ea(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):De(c,m,v))}function Oe(c){et.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Oe,et);var Is=/^https?$/i,mi=["POST","PUT"];i=Oe.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,m,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Un.g(),this.v=this.o?Wo(this.o):Wo(Un),this.g.onreadystatechange=L(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(V){Wi(this,V);return}if(c=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var O in w)v.set(O,w[O]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const V of w.keys())v.set(V,w.get(V));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(V=>V.toLowerCase()=="content-type"),O=f.FormData&&c instanceof f.FormData,!(0<=Array.prototype.indexOf.call(mi,m,void 0))||w||O||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of v)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ts(this),this.u=!0,this.g.send(c),this.u=!1}catch(V){Wi(this,V)}};function Wi(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,Es(c),bs(c)}function Es(c){c.A||(c.A=!0,mt(c,"complete"),mt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,mt(this,"complete"),mt(this,"abort"),bs(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bs(this,!0)),Oe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?na(this):this.bb())},i.bb=function(){na(this)};function na(c){if(c.h&&typeof h<"u"&&(!c.v[1]||zt(c)!=4||c.Z()!=2)){if(c.u&&zt(c)==4)oi(c.Ea,0,c);else if(mt(c,"readystatechange"),zt(c)==4){c.h=!1;try{const G=c.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var w;if(w=G===0){var O=String(c.D).match(_s)[1]||null;!O&&f.self&&f.self.location&&(O=f.self.location.protocol.slice(0,-1)),w=!Is.test(O?O.toLowerCase():"")}v=w}if(v)mt(c,"complete"),mt(c,"success");else{c.m=6;try{var V=2<zt(c)?c.g.statusText:""}catch{V=""}c.l=V+" ["+c.Z()+"]",Es(c)}}finally{bs(c)}}}}function bs(c,m){if(c.g){Ts(c);const v=c.g,w=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||mt(c,"ready");try{v.onreadystatechange=w}catch{}}}function Ts(c){c.I&&(f.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function zt(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),ai(m)}};function ia(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Vh(c){const m={};c=(c.g&&2<=zt(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if($(c[w]))continue;var v=C(c[w]);const O=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const V=m[O]||[];m[O]=V,V.push(v)}P(m,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $i(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function Rn(c){this.Aa=0,this.i=[],this.j=new br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$i("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$i("baseRetryDelayMs",5e3,c),this.cb=$i("retryDelaySeedMs",1e4,c),this.Wa=$i("forwardChannelMaxRetries",2,c),this.wa=$i("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new En(c&&c.concurrentRequestLimit),this.Da=new Mh,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Rn.prototype,i.la=8,i.G=1,i.connect=function(c,m,v,w){St(0),this.W=c,this.H=m||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=sa(this,null,this.W),Ss(this)};function gi(c){if(cc(c),c.G==3){var m=c.U++,v=qt(c.I);if(De(v,"SID",c.K),De(v,"RID",m),De(v,"TYPE","terminate"),ee(c,v),m=new Mt(c,c.j,m),m.L=2,m.v=dn(qt(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.v,v=!0),v||(m.g=hc(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ar(m)}qn(c)}function As(c){c.g&&(K(c),c.g.cancel(),c.g=null)}function cc(c){As(c),c.u&&(f.clearTimeout(c.u),c.u=null),Rs(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&f.clearTimeout(c.s),c.s=null)}function Ss(c){if(!rc(c.h)&&!c.s){c.s=!0;var m=c.Ga;ut||cn(),Vi||(ut(),Vi=!0),vr.add(m,c),c.B=0}}function xh(c,m){return Gt(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Er(L(c.Ga,c,m),ra(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const O=new Mt(this,this.j,c);let V=this.o;if(this.S&&(V?(V=S(V),k(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=Dr(this,O,m),v=qt(this.I),De(v,"RID",c),De(v,"CVER",22),this.D&&De(v,"X-HTTP-Session-Id",this.D),ee(this,v),V&&(this.O?m="headers="+encodeURIComponent(String(ea(V)))+"&"+m:this.m&&ta(v,this.m,V)),Yo(this.h,O),this.Ua&&De(v,"TYPE","init"),this.P?(De(v,"$req",m),De(v,"SID","null"),O.T=!0,ps(O,v,null)):ps(O,v,m),this.G=2}}else this.G==3&&(c?kr(this,c):this.i.length==0||rc(this.h)||kr(this))};function kr(c,m){var v;m?v=m.l:v=c.U++;const w=qt(c.I);De(w,"SID",c.K),De(w,"RID",v),De(w,"AID",c.T),ee(c,w),c.m&&c.o&&ta(w,c.m,c.o),v=new Mt(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),m&&(c.i=m.D.concat(c.i)),m=Dr(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Yo(c.h,v),ps(v,w,m)}function ee(c,m){c.H&&he(c.H,function(v,w){De(m,w,v)}),c.l&&ys({},function(v,w){De(m,w,v)})}function Dr(c,m,v){v=Math.min(c.i.length,v);var w=c.l?L(c.l.Na,c.l,c):null;e:{var O=c.i;let V=-1;for(;;){const G=["count="+v];V==-1?0<v?(V=O[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Se=!0;for(let tt=0;tt<v;tt++){let me=O[tt].g;const gt=O[tt].map;if(me-=V,0>me)V=Math.max(0,O[tt].g-100),Se=!1;else try{qi(gt,G,"req"+me+"_")}catch{w&&w(gt)}}if(Se){w=G.join("&");break e}}}return c=c.i.splice(0,v),m.D=c,w}function Nr(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;ut||cn(),Vi||(ut(),Vi=!0),vr.add(m,c),c.v=0}}function ge(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Er(L(c.Fa,c),ra(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,lc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Er(L(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),As(this),lc(this))};function K(c){c.A!=null&&(f.clearTimeout(c.A),c.A=null)}function lc(c){c.g=new Mt(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=qt(c.qa);De(m,"RID","rpc"),De(m,"SID",c.K),De(m,"AID",c.T),De(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&De(m,"TO",c.ja),De(m,"TYPE","xmlhttp"),ee(c,m),c.m&&c.o&&ta(m,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=dn(qt(m)),v.m=null,v.P=!0,Ue(v,c)}i.Za=function(){this.C!=null&&(this.C=null,As(this),ge(this),St(19))};function Rs(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Le(c,m){var v=null;if(c.g==m){Rs(c),K(c),c.g=null;var w=2}else if(ct(c.h,m))v=m.D,bn(c.h,m),w=1;else return;if(c.G!=0){if(m.o)if(w==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var O=c.B;w=Fi(),mt(w,new zo(w,v)),Ss(c)}else Nr(c);else if(O=m.s,O==3||O==0&&0<m.X||!(w==1&&xh(c,m)||w==2&&ge(c)))switch(v&&0<v.length&&(m=c.h,m.i=m.i.concat(v)),O){case 1:je(c,5);break;case 4:je(c,10);break;case 3:je(c,6);break;default:je(c,2)}}}function ra(c,m){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*m}function je(c,m){if(c.j.info("Error code "+m),m==2){var v=L(c.fb,c),w=c.Xa;const O=!w;w=new Bt(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Sr(w,"https"),dn(w),O?Cr(w.toString(),v):Lh(w.toString(),v)}else St(2);c.G=0,c.l&&c.l.sa(m),qn(c),cc(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function qn(c){if(c.G=0,c.ka=[],c.l){const m=Jo(c.h);(m.length!=0||c.i.length!=0)&&(D(c.ka,m),D(c.ka,c.i),c.h.i.length=0,E(c.i),c.i.length=0),c.l.ra()}}function sa(c,m,v){var w=v instanceof Bt?qt(v):new Bt(v);if(w.g!="")m&&(w.g=m+"."+w.g),Tn(w,w.s);else{var O=f.location;w=O.protocol,m=m?m+"."+O.hostname:O.hostname,O=+O.port;var V=new Bt(null);w&&Sr(V,w),m&&(V.g=m),O&&Tn(V,O),v&&(V.l=v),w=V}return v=c.D,m=c.ya,v&&m&&De(w,v,m),De(w,"VER",c.la),ee(c,w),w}function hc(c,m,v){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new Oe(new Xt({eb:v})):new Oe(c.pa),m.Ha(c.J),m}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function dc(){}i=dc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Cs(){}Cs.prototype.g=function(c,m){return new Rt(c,m)};function Rt(c,m){et.call(this),this.g=new Rn(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!$(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!$(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Gi(this)}z(Rt,et),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){gi(this.g)},Rt.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=xi(c),c=v);m.i.push(new Me(m.Ya++,c)),m.G==3&&Ss(m)},Rt.prototype.N=function(){this.g.l=null,delete this.j,gi(this.g),delete this.g,Rt.aa.N.call(this)};function fc(c){Go.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const v in m){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}z(fc,Go);function Ps(){ln.call(this),this.status=1}z(Ps,ln);function Gi(c){this.g=c}z(Gi,dc),Gi.prototype.ua=function(){mt(this.g,"a")},Gi.prototype.ta=function(c){mt(this.g,new fc(c))},Gi.prototype.sa=function(c){mt(this.g,new Ps)},Gi.prototype.ra=function(){mt(this.g,"b")},Cs.prototype.createWebChannel=Cs.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Kw=function(){return new Cs},zw=function(){return Fi()},Gw=wn,Ef={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,El=Tr,Ko.COMPLETE="complete",$w=Ko,$o.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",et.prototype.listen=et.prototype.K,ou=$o,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,Ww=Oe}).apply(typeof gl<"u"?gl:typeof self<"u"?self:typeof window<"u"?window:{});const Gy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Ou("@firebase/firestore");function tu(){return Qr.logLevel}function Q(i,...e){if(Qr.logLevel<=ye.DEBUG){const n=e.map(tp);Qr.debug(`Firestore (${Oo}): ${i}`,...n)}}function Pi(i,...e){if(Qr.logLevel<=ye.ERROR){const n=e.map(tp);Qr.error(`Firestore (${Oo}): ${i}`,...n)}}function Eo(i,...e){if(Qr.logLevel<=ye.WARN){const n=e.map(tp);Qr.warn(`Firestore (${Oo}): ${i}`,...n)}}function tp(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(i="Unexpected state"){const e=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+i;throw Pi(e),new Error(e)}function ke(i,e){i||se()}function ue(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class XA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZA{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let r=this.i;const o=g=>this.i!==r?(r=this.i,n(g)):Promise.resolve();let u=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ar,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ar)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new Yw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new Ft(e)}}class eS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const r=u=>{u.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,Q("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>r(u))};const o=u=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new nS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<i;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=rS(40);for(let u=0;u<o.length;++u)r.length<20&&o[u]<n&&(r+=e.charAt(o[u]%e.length))}return r}}function be(i,e){return i<e?-1:i>e?1:0}function bo(i,e,n){return i.length===e.length&&i.every((r,o)=>n(r,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new dt(0,0))}static max(){return new ae(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const u=e.get(o),h=n.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Eu{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const sS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Eu{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return sS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",o=0;const u=()=>{if(r.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new te(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new te(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(r+=f,o++):(u(),o++)}if(u(),h)throw new te(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Fe.fromString(e))}static fromName(e){return new ne(Fe.fromString(e).popFirst(5))}static empty(){return new ne(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Fe(e.slice()))}}function oS(i,e){const n=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,o=ae.fromTimestamp(r===1e9?new dt(n+1,0):new dt(n,r));return new hr(o,ne.empty(),e)}function aS(i){return new hr(i.readTime,i.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(ae.min(),ne.empty(),-1)}static max(){return new hr(ae.max(),ne.empty(),-1)}}function uS(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(i.documentKey,e.documentKey),n!==0?n:be(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==cS)throw i;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(r,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(r,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let o=0,u=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++u,h&&u===o&&n()},g=>r(g))}),h=!0,u===o&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(o=>o?B.resolve(o):r());return n}static forEach(e,n){const r=[];return e.forEach((o,u)=>{r.push(n.call(this,o,u))}),this.waitFor(r)}static mapArray(e,n){return new B((r,o)=>{const u=e.length,h=new Array(u);let f=0;for(let g=0;g<u;g++){const y=g;n(e[y]).next(I=>{h[y]=I,++f,f===u&&r(h)},I=>o(I))}})}static doWhile(e,n){return new B((r,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):r()};u()})}}function hS(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mu(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}np.oe=-1;function nh(i){return i==null}function xl(i){return i===0&&1/i==-1/0}function dS(i){return typeof i=="number"&&Number.isInteger(i)&&!xl(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function Lo(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function Qw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||kt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vl(this.root,e,this.comparator,!0)}}class vl{constructor(e,n,r,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?r(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,n,r,o,u){this.key=e,this.value=n,this.color=r??kt.RED,this.left=o??kt.EMPTY,this.right=u??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,o,u){return new kt(e??this.key,n??this.value,r??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let o=this;const u=r(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,r),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,n,r,o,u){return this}insert(e,n,r){return new kt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ky(this.data.getIterator())}getIteratorFrom(e){return new Ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ot(this.comparator);return n.data=e,n}}class Ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new On([])}unionWith(e){let n=new Ot(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new On(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Xw("Invalid base64 string: "+u):u}}(e);return new Lt(n)}static fromUint8Array(e){const n=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const fS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(i){if(ke(!!i),typeof i=="string"){let e=0;const n=fS.exec(i);if(ke(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(i.seconds),nanos:Ze(i.nanos)}}function Ze(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Xr(i){return typeof i=="string"?Lt.fromBase64String(i):Lt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rp(i){const e=i.mapValue.fields.__previous_value__;return ip(e)?rp(e):e}function bu(i){const e=dr(i.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,r,o,u,h,f,g,y){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=y}}class Tu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Tu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?ip(i)?4:gS(i)?9007199254740991:mS(i)?10:11:se()}function ni(i,e){if(i===e)return!0;const n=Zr(i);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return bu(i).isEqual(bu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=dr(o.timestampValue),f=dr(u.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return Xr(o.bytesValue).isEqual(Xr(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return Ze(o.geoPointValue.latitude)===Ze(u.geoPointValue.latitude)&&Ze(o.geoPointValue.longitude)===Ze(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Ze(o.integerValue)===Ze(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Ze(o.doubleValue),f=Ze(u.doubleValue);return h===f?xl(h)===xl(f):isNaN(h)&&isNaN(f)}return!1}(i,e);case 9:return bo(i.arrayValue.values||[],e.arrayValue.values||[],ni);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},f=u.mapValue.fields||{};if(zy(h)!==zy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!ni(h[g],f[g])))return!1;return!0}(i,e);default:return se()}}function Au(i,e){return(i.values||[]).find(n=>ni(n,e))!==void 0}function To(i,e){if(i===e)return 0;const n=Zr(i),r=Zr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(i.booleanValue,e.booleanValue);case 2:return function(u,h){const f=Ze(u.integerValue||u.doubleValue),g=Ze(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(i,e);case 3:return Yy(i.timestampValue,e.timestampValue);case 4:return Yy(bu(i),bu(e));case 5:return be(i.stringValue,e.stringValue);case 6:return function(u,h){const f=Xr(u),g=Xr(h);return f.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const f=u.split("/"),g=h.split("/");for(let y=0;y<f.length&&y<g.length;y++){const I=be(f[y],g[y]);if(I!==0)return I}return be(f.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const f=be(Ze(u.latitude),Ze(h.latitude));return f!==0?f:be(Ze(u.longitude),Ze(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Jy(i.arrayValue,e.arrayValue);case 10:return function(u,h){var f,g,y,I;const b=u.fields||{},L=h.fields||{},x=(f=b.value)===null||f===void 0?void 0:f.arrayValue,z=(g=L.value)===null||g===void 0?void 0:g.arrayValue,E=be(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((I=z==null?void 0:z.values)===null||I===void 0?void 0:I.length)||0);return E!==0?E:Jy(x,z)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===yl.mapValue&&h===yl.mapValue)return 0;if(u===yl.mapValue)return 1;if(h===yl.mapValue)return-1;const f=u.fields||{},g=Object.keys(f),y=h.fields||{},I=Object.keys(y);g.sort(),I.sort();for(let b=0;b<g.length&&b<I.length;++b){const L=be(g[b],I[b]);if(L!==0)return L;const x=To(f[g[b]],y[I[b]]);if(x!==0)return x}return be(g.length,I.length)}(i.mapValue,e.mapValue);default:throw se()}}function Yy(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return be(i,e);const n=dr(i),r=dr(e),o=be(n.seconds,r.seconds);return o!==0?o:be(n.nanos,r.nanos)}function Jy(i,e){const n=i.values||[],r=e.values||[];for(let o=0;o<n.length&&o<r.length;++o){const u=To(n[o],r[o]);if(u)return u}return be(n.length,r.length)}function Ao(i){return bf(i)}function bf(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const r=dr(n);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return Xr(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return ne.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let r="[",o=!0;for(const u of n.values||[])o?o=!1:r+=",",r+=bf(u);return r+"]"}(i.arrayValue):"mapValue"in i?function(n){const r=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const h of r)u?u=!1:o+=",",o+=`${h}:${bf(n.fields[h])}`;return o+"}"}(i.mapValue):se()}function Tf(i){return!!i&&"integerValue"in i}function sp(i){return!!i&&"arrayValue"in i}function Qy(i){return!!i&&"nullValue"in i}function Xy(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function bl(i){return!!i&&"mapValue"in i}function mS(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function hu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Lo(i.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hu(r)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hu(i.arrayValue.values[n]);return e}return Object.assign({},i)}function gS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hu(n)}setAll(e){let n=Dt.emptyPath(),r={},o=[];e.forEach((h,f)=>{if(!n.isImmediateParentOf(f)){const g=this.getFieldsMap(n);this.applyChanges(g,r,o),r={},o=[],n=f.popLast()}h?r[f.lastSegment()]=hu(h):o.push(f.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,r,o)}delete(e){const n=this.field(e.popLast());bl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ni(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=n.mapValue.fields[e.get(r)];bl(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,r){Lo(n,(o,u)=>e[o]=u);for(const o of r)delete e[o]}clone(){return new mn(hu(this.value))}}function Zw(i){const e=[];return Lo(i.fields,(n,r)=>{const o=new Dt([n]);if(bl(r)){const u=Zw(r.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new On(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,r,o,u,h,f){this.key=e,this.documentType=n,this.version=r,this.readTime=o,this.createTime=u,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Ut(e,0,ae.min(),ae.min(),ae.min(),mn.empty(),0)}static newFoundDocument(e,n,r,o){return new Ut(e,1,n,ae.min(),r,o,0)}static newNoDocument(e,n){return new Ut(e,2,n,ae.min(),ae.min(),mn.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,ae.min(),ae.min(),mn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.position=e,this.inclusive=n}}function Zy(i,e,n){let r=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?r=ne.comparator(ne.fromName(h.referenceValue),n.key):r=To(h,n.data.field(u.field)),u.dir==="desc"&&(r*=-1),r!==0)break}return r}function e_(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!ni(i.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n="asc"){this.field=e,this.dir=n}}function vS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{}class ht extends e0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _S(e,n,r):n==="array-contains"?new ES(e,r):n==="in"?new bS(e,r):n==="not-in"?new TS(e,r):n==="array-contains-any"?new AS(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wS(e,r):new IS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(To(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(To(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ii extends e0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ii(e,n)}matches(e){return t0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function t0(i){return i.op==="and"}function n0(i){return yS(i)&&t0(i)}function yS(i){for(const e of i.filters)if(e instanceof ii)return!1;return!0}function Af(i){if(i instanceof ht)return i.field.canonicalString()+i.op.toString()+Ao(i.value);if(n0(i))return i.filters.map(e=>Af(e)).join(",");{const e=i.filters.map(n=>Af(n)).join(",");return`${i.op}(${e})`}}function i0(i,e){return i instanceof ht?function(r,o){return o instanceof ht&&r.op===o.op&&r.field.isEqual(o.field)&&ni(r.value,o.value)}(i,e):i instanceof ii?function(r,o){return o instanceof ii&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((u,h,f)=>u&&i0(h,o.filters[f]),!0):!1}(i,e):void se()}function r0(i){return i instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${Ao(n.value)}`}(i):i instanceof ii?function(n){return n.op.toString()+" {"+n.getFilters().map(r0).join(" ,")+"}"}(i):"Filter"}class _S extends ht{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class wS extends ht{constructor(e,n){super(e,"in",n),this.keys=s0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IS extends ht{constructor(e,n){super(e,"not-in",n),this.keys=s0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function s0(i,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class ES extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sp(n)&&Au(n.arrayValue,this.value)}}class bS extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Au(this.value.arrayValue,n)}}class TS extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(Au(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Au(this.value.arrayValue,n)}}class AS extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Au(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n=null,r=[],o=[],u=null,h=null,f=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=u,this.startAt=h,this.endAt=f,this.ue=null}}function t_(i,e=null,n=[],r=[],o=null,u=null,h=null){return new SS(i,e,n,r,o,u,h)}function op(i){const e=ue(i);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Af(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(u){return u.field.canonicalString()+u.dir}(r)).join(","),nh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.ue=n}return e.ue}function ap(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!vS(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!i0(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!e_(i.startAt,e.startAt)&&e_(i.endAt,e.endAt)}function Sf(i){return ne.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n=null,r=[],o=[],u=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=u,this.limitType=h,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function RS(i,e,n,r,o,u,h,f){return new ih(i,e,n,r,o,u,h,f)}function o0(i){return new ih(i)}function n_(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function CS(i){return i.collectionGroup!==null}function du(i){const e=ue(i);if(e.ce===null){e.ce=[];const n=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),n.add(u.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Ot(Dt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Ul(u,r))}),n.has(Dt.keyField().canonicalString())||e.ce.push(new Ul(Dt.keyField(),r))}return e.ce}function ei(i){const e=ue(i);return e.le||(e.le=PS(e,du(i))),e.le}function PS(i,e){if(i.limitType==="F")return t_(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ul(o.field,u)});const n=i.endAt?new Fl(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new Fl(i.startAt.position,i.startAt.inclusive):null;return t_(i.path,i.collectionGroup,e,i.filters,i.limit,n,r)}}function Rf(i,e,n){return new ih(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function rh(i,e){return ap(ei(i),ei(e))&&i.limitType===e.limitType}function a0(i){return`${op(ei(i))}|lt:${i.limitType}`}function lo(i){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(o=>r0(o)).join(", ")}]`),nh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(o=>Ao(o)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(o=>Ao(o)).join(",")),`Target(${r})`}(ei(i))}; limitType=${i.limitType})`}function sh(i,e){return e.isFoundDocument()&&function(r,o){const u=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(u):ne.isDocumentKey(r.path)?r.path.isEqual(u):r.path.isImmediateParentOf(u)}(i,e)&&function(r,o){for(const u of du(r))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(r,o){for(const u of r.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(r,o){return!(r.startAt&&!function(h,f,g){const y=Zy(h,f,g);return h.inclusive?y<=0:y<0}(r.startAt,du(r),o)||r.endAt&&!function(h,f,g){const y=Zy(h,f,g);return h.inclusive?y>=0:y>0}(r.endAt,du(r),o))}(i,e)}function kS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function u0(i){return(e,n)=>{let r=!1;for(const o of du(i)){const u=DS(o,e,n);if(u!==0)return u;r=r||o.field.isKeyField()}return 0}}function DS(i,e,n){const r=i.field.isKeyField()?ne.comparator(e.key,n.key):function(u,h,f){const g=h.data.field(u),y=f.data.field(u);return g!==null&&y!==null?To(g,y):se()}(i.field,e,n);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[o,u]of r)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[n]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Lo(this.inner,(n,r)=>{for(const[o,u]of r)e(o,u)})}isEmpty(){return Qw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new He(ne.comparator);function ki(){return NS}const c0=new He(ne.comparator);function au(...i){let e=c0;for(const n of i)e=e.insert(n.key,n);return e}function l0(i){let e=c0;return i.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return fu()}function h0(){return fu()}function fu(){return new Mo(i=>i.toString(),(i,e)=>i.isEqual(e))}const OS=new He(ne.comparator),LS=new Ot(ne.comparator);function _e(...i){let e=LS;for(const n of i)e=e.add(n);return e}const MS=new Ot(be);function VS(){return MS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xl(e)?"-0":e}}function d0(i){return{integerValue:""+i}}function xS(i,e){return dS(e)?d0(e):up(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this._=void 0}}function FS(i,e,n){return i instanceof jl?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&ip(u)&&(u=rp(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(n,e):i instanceof Su?p0(i,e):i instanceof Ru?m0(i,e):function(o,u){const h=f0(o,u),f=i_(h)+i_(o.Pe);return Tf(h)&&Tf(o.Pe)?d0(f):up(o.serializer,f)}(i,e)}function US(i,e,n){return i instanceof Su?p0(i,e):i instanceof Ru?m0(i,e):n}function f0(i,e){return i instanceof Bl?function(r){return Tf(r)||function(u){return!!u&&"doubleValue"in u}(r)}(e)?e:{integerValue:0}:null}class jl extends oh{}class Su extends oh{constructor(e){super(),this.elements=e}}function p0(i,e){const n=g0(e);for(const r of i.elements)n.some(o=>ni(o,r))||n.push(r);return{arrayValue:{values:n}}}class Ru extends oh{constructor(e){super(),this.elements=e}}function m0(i,e){let n=g0(e);for(const r of i.elements)n=n.filter(o=>!ni(o,r));return{arrayValue:{values:n}}}class Bl extends oh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function i_(i){return Ze(i.integerValue||i.doubleValue)}function g0(i){return sp(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function jS(i,e){return i.field.isEqual(e.field)&&function(r,o){return r instanceof Su&&o instanceof Su||r instanceof Ru&&o instanceof Ru?bo(r.elements,o.elements,ni):r instanceof Bl&&o instanceof Bl?ni(r.Pe,o.Pe):r instanceof jl&&o instanceof jl}(i.transform,e.transform)}class BS{constructor(e,n){this.version=e,this.transformResults=n}}class Si{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Si}static exists(e){return new Si(void 0,e)}static updateTime(e){return new Si(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tl(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class ah{}function v0(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new _0(i.key,Si.none()):new Vu(i.key,i.data,Si.none());{const n=i.data,r=mn.empty();let o=new Ot(Dt.comparator);for(let u of e.fields)if(!o.has(u)){let h=n.field(u);h===null&&u.length>1&&(u=u.popLast(),h=n.field(u)),h===null?r.delete(u):r.set(u,h),o=o.add(u)}return new ns(i.key,r,new On(o.toArray()),Si.none())}}function qS(i,e,n){i instanceof Vu?function(o,u,h){const f=o.value.clone(),g=s_(o.fieldTransforms,u,h.transformResults);f.setAll(g),u.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(i,e,n):i instanceof ns?function(o,u,h){if(!Tl(o.precondition,u))return void u.convertToUnknownDocument(h.version);const f=s_(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(y0(o)),g.setAll(f),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,n):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,n)}function pu(i,e,n,r){return i instanceof Vu?function(u,h,f,g){if(!Tl(u.precondition,h))return f;const y=u.value.clone(),I=o_(u.fieldTransforms,g,h);return y.setAll(I),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(i,e,n,r):i instanceof ns?function(u,h,f,g){if(!Tl(u.precondition,h))return f;const y=o_(u.fieldTransforms,g,h),I=h.data;return I.setAll(y0(u)),I.setAll(y),h.convertToFoundDocument(h.version,I).setHasLocalMutations(),f===null?null:f.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(i,e,n,r):function(u,h,f){return Tl(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(i,e,n)}function HS(i,e){let n=null;for(const r of i.fieldTransforms){const o=e.data.field(r.field),u=f0(r.transform,o||null);u!=null&&(n===null&&(n=mn.empty()),n.set(r.field,u))}return n||null}function r_(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&bo(r,o,(u,h)=>jS(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Vu extends ah{constructor(e,n,r,o=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ns extends ah{constructor(e,n,r,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function y0(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=i.data.field(n);e.set(n,r)}}),e}function s_(i,e,n){const r=new Map;ke(i.length===n.length);for(let o=0;o<n.length;o++){const u=i[o],h=u.transform,f=e.data.field(u.field);r.set(u.field,US(h,f,n[o]))}return r}function o_(i,e,n){const r=new Map;for(const o of i){const u=o.transform,h=n.data.field(o.field);r.set(o.field,FS(u,h,e))}return r}class _0 extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WS extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,r,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&qS(u,e,r[o])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=h0();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let f=this.applyToLocalView(h,u.mutatedFields);f=n.has(o.key)?null:f;const g=v0(h,f);g!==null&&r.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,(n,r)=>r_(n,r))&&bo(this.baseMutations,e.baseMutations,(n,r)=>r_(n,r))}}class cp{constructor(e,n,r,o){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(e,n,r){ke(e.mutations.length===r.length);let o=function(){return OS}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,r[h].version);return new cp(e,n,r,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,Ee;function KS(i){switch(i){default:return se();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function w0(i){if(i===void 0)return Pi("GRPC error has no .code"),q.UNKNOWN;switch(i){case st.OK:return q.OK;case st.CANCELLED:return q.CANCELLED;case st.UNKNOWN:return q.UNKNOWN;case st.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case st.INTERNAL:return q.INTERNAL;case st.UNAVAILABLE:return q.UNAVAILABLE;case st.UNAUTHENTICATED:return q.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case st.NOT_FOUND:return q.NOT_FOUND;case st.ALREADY_EXISTS:return q.ALREADY_EXISTS;case st.PERMISSION_DENIED:return q.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case st.ABORTED:return q.ABORTED;case st.OUT_OF_RANGE:return q.OUT_OF_RANGE;case st.UNIMPLEMENTED:return q.UNIMPLEMENTED;case st.DATA_LOSS:return q.DATA_LOSS;default:return se()}}(Ee=st||(st={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new Gr([4294967295,4294967295],0);function a_(i){const e=YS().encode(i),n=new Hw;return n.update(e),new Uint8Array(n.digest())}function u_(i){const e=new DataView(i.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([o,u],0)]}class lp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uu(`Invalid padding: ${n}`);if(r<0)throw new uu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uu(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Gr.fromNumber(this.Ie)}Ee(e,n,r){let o=e.add(n.multiply(Gr.fromNumber(r)));return o.compare(JS)===1&&(o=new Gr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=a_(e),[r,o]=u_(n);for(let u=0;u<this.hashCount;u++){const h=this.Ee(r,o,u);if(!this.de(h))return!1}return!0}static create(e,n,r){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new lp(u,o,n);return r.forEach(f=>h.insert(f)),h}insert(e){if(this.Ie===0)return;const n=a_(e),[r,o]=u_(n);for(let u=0;u<this.hashCount;u++){const h=this.Ee(r,o,u);this.Ae(h)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,r,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const o=new Map;return o.set(e,xu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uh(ae.min(),o,new He(be),ki(),_e())}}class xu{constructor(e,n,r,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xu(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,r,o){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=o}}class I0{constructor(e,n){this.targetId=e,this.me=n}}class E0{constructor(e,n,r=Lt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=o}}class c_{constructor(){this.fe=0,this.ge=h_(),this.pe=Lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:se()}}),new xu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=h_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QS{constructor(e){this.Le=e,this.Be=new Map,this.ke=ki(),this.qe=l_(),this.Qe=new He(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,o)=>{this.ze(o)&&n(o)})}He(e){const n=e.targetId,r=e.me.count,o=this.Je(n);if(o){const u=o.target;if(Sf(u))if(r===0){const h=new ne(u.path);this.Ue(n,h,Ut.newNoDocument(h,ae.min()))}else ke(r===1);else{const h=this.Ye(n);if(h!==r){const f=this.Ze(e),g=f?this.Xe(f,e,h):1;if(g!==0){this.je(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,y)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:u=0}=n;let h,f;try{h=Xr(r).toUint8Array()}catch(g){if(g instanceof Xw)return Eo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new lp(h,o,u)}catch(g){return Eo(g instanceof uu?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Ie===0?null:f}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let o=0;return r.forEach(u=>{const h=this.Le.tt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(f)||(this.Ue(n,u,null),o++)}),o}rt(e){const n=new Map;this.Be.forEach((u,h)=>{const f=this.Je(h);if(f){if(u.current&&Sf(f.target)){const g=new ne(f.target.path);this.ke.get(g)!==null||this.it(h,g)||this.Ue(h,g,Ut.newNoDocument(g,e))}u.be&&(n.set(h,u.ve()),u.Ce())}});let r=_e();this.qe.forEach((u,h)=>{let f=!0;h.forEachWhile(g=>{const y=this.Je(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(r=r.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new uh(e,n,this.Qe,this.ke,r);return this.ke=ki(),this.qe=l_(),this.Qe=new He(be),o}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,n)?o.Fe(n,1):o.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new c_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ot(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new c_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function l_(){return new He(ne.comparator)}function h_(){return new He(ne.comparator)}const XS={asc:"ASCENDING",desc:"DESCENDING"},ZS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eR={and:"AND",or:"OR"};class tR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cf(i,e){return i.useProto3Json||nh(e)?e:{value:e}}function ql(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b0(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function nR(i,e){return ql(i,e.toTimestamp())}function ti(i){return ke(!!i),ae.fromTimestamp(function(n){const r=dr(n);return new dt(r.seconds,r.nanos)}(i))}function hp(i,e){return Pf(i,e).canonicalString()}function Pf(i,e){const n=function(o){return new Fe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?n:n.child(e)}function T0(i){const e=Fe.fromString(i);return ke(P0(e)),e}function kf(i,e){return hp(i.databaseId,e.path)}function uf(i,e){const n=T0(e);if(n.get(1)!==i.databaseId.projectId)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new ne(S0(n))}function A0(i,e){return hp(i.databaseId,e)}function iR(i){const e=T0(i);return e.length===4?Fe.emptyPath():S0(e)}function Df(i){return new Fe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function S0(i){return ke(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function d_(i,e,n){return{name:kf(i,e),fields:n.value.mapValue.fields}}function rR(i,e){let n;if("targetChange"in e){e.targetChange;const r=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,I){return y.useProto3Json?(ke(I===void 0||typeof I=="string"),Lt.fromBase64String(I||"")):(ke(I===void 0||I instanceof Buffer||I instanceof Uint8Array),Lt.fromUint8Array(I||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const I=y.code===void 0?q.UNKNOWN:w0(y.code);return new te(I,y.message||"")}(h);n=new E0(r,o,u,f||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=uf(i,r.document.name),u=ti(r.document.updateTime),h=r.document.createTime?ti(r.document.createTime):ae.min(),f=new mn({mapValue:{fields:r.document.fields}}),g=Ut.newFoundDocument(o,u,h,f),y=r.targetIds||[],I=r.removedTargetIds||[];n=new Al(y,I,g.key,g)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=uf(i,r.document),u=r.readTime?ti(r.readTime):ae.min(),h=Ut.newNoDocument(o,u),f=r.removedTargetIds||[];n=new Al([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=uf(i,r.document),u=r.removedTargetIds||[];n=new Al([],u,o,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:u}=r,h=new zS(o,u),f=r.targetId;n=new I0(f,h)}}return n}function sR(i,e){let n;if(e instanceof Vu)n={update:d_(i,e.key,e.value)};else if(e instanceof _0)n={delete:kf(i,e.key)};else if(e instanceof ns)n={update:d_(i,e.key,e.data),updateMask:pR(e.fieldMask)};else{if(!(e instanceof WS))return se();n={verify:kf(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(u,h){const f=h.transform;if(f instanceof jl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Su)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Ru)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Bl)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:nR(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:se()}(i,e.precondition)),n}function oR(i,e){return i&&i.length>0?(ke(e!==void 0),i.map(n=>function(o,u){let h=o.updateTime?ti(o.updateTime):ti(u);return h.isEqual(ae.min())&&(h=ti(u)),new BS(h,o.transformResults||[])}(n,e))):[]}function aR(i,e){return{documents:[A0(i,e.path)]}}function uR(i,e){const n={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=A0(i,o);const u=function(y){if(y.length!==0)return C0(ii.create(y,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const h=function(y){if(y.length!==0)return y.map(I=>function(L){return{field:ho(L.field),direction:hR(L.dir)}}(I))}(e.orderBy);h&&(n.structuredQuery.orderBy=h);const f=Cf(i,e.limit);return f!==null&&(n.structuredQuery.limit=f),e.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{_t:n,parent:o}}function cR(i){let e=iR(i.parent);const n=i.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){ke(r===1);const I=n.from[0];I.allDescendants?o=I.collectionId:e=e.child(I.collectionId)}let u=[];n.where&&(u=function(b){const L=R0(b);return L instanceof ii&&n0(L)?L.getFilters():[L]}(n.where));let h=[];n.orderBy&&(h=function(b){return b.map(L=>function(z){return new Ul(fo(z.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(L))}(n.orderBy));let f=null;n.limit&&(f=function(b){let L;return L=typeof b=="object"?b.value:b,nh(L)?null:L}(n.limit));let g=null;n.startAt&&(g=function(b){const L=!!b.before,x=b.values||[];return new Fl(x,L)}(n.startAt));let y=null;return n.endAt&&(y=function(b){const L=!b.before,x=b.values||[];return new Fl(x,L)}(n.endAt)),RS(e,o,h,u,f,"F",g,y)}function lR(i,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function R0(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fo(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=fo(n.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=fo(n.unaryFilter.field);return ht.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=fo(n.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(i):i.fieldFilter!==void 0?function(n){return ht.create(fo(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return ii.create(n.compositeFilter.filters.map(r=>R0(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return se()}}(n.compositeFilter.op))}(i):se()}function hR(i){return XS[i]}function dR(i){return ZS[i]}function fR(i){return eR[i]}function ho(i){return{fieldPath:i.canonicalString()}}function fo(i){return Dt.fromServerFormat(i.fieldPath)}function C0(i){return i instanceof ht?function(n){if(n.op==="=="){if(Xy(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NAN"}};if(Qy(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xy(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NAN"}};if(Qy(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(n.field),op:dR(n.op),value:n.value}}}(i):i instanceof ii?function(n){const r=n.getFilters().map(o=>C0(o));return r.length===1?r[0]:{compositeFilter:{op:fR(n.op),filters:r}}}(i):se()}function pR(i){const e=[];return i.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function P0(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,o,u=ae.min(),h=ae.min(),f=Lt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.ct=e}}function gR(i){const e=cR({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Rf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.un=new yR}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(hr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class yR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n]||new Ot(Fe.comparator),u=!o.has(r);return this.index[n]=o.add(r),u}has(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Ot(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new So(0)}static kn(){return new So(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.changes=new Mo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(r!==null&&pu(r.mutation,o,On.empty(),dt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const o=Wr();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,r).next(u=>{let h=au();return u.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const o=[];return r.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,f)=>{n.set(h,f)})})}computeViews(e,n,r,o){let u=ki();const h=fu(),f=function(){return fu()}();return n.forEach((g,y)=>{const I=r.get(y.key);o.has(y.key)&&(I===void 0||I.mutation instanceof ns)?u=u.insert(y.key,y):I!==void 0?(h.set(y.key,I.mutation.getFieldMask()),pu(I.mutation,y,I.mutation.getFieldMask(),dt.now())):h.set(y.key,On.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((y,I)=>h.set(y,I)),n.forEach((y,I)=>{var b;return f.set(y,new wR(I,(b=h.get(y))!==null&&b!==void 0?b:null))}),f))}recalculateAndSaveOverlays(e,n){const r=fu();let o=new He((h,f)=>h-f),u=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(h=>{for(const f of h)f.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let I=r.get(g)||On.empty();I=f.applyToLocalView(y,I),r.set(g,I);const b=(o.get(f.batchId)||_e()).add(g);o=o.insert(f.batchId,b)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),y=g.key,I=g.value,b=h0();I.forEach(L=>{if(!u.has(L)){const x=v0(n.get(L),r.get(L));x!==null&&b.set(L,x),u=u.add(L)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,b))}return B.waitFor(h)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,o){return function(h){return ne.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,o):this.getDocumentsMatchingCollectionQuery(e,n,r,o)}getNextDocuments(e,n,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,o-u.size):B.resolve(Wr());let f=-1,g=u;return h.next(y=>B.forEach(y,(I,b)=>(f<b.largestBatchId&&(f=b.largestBatchId),u.get(I)?B.resolve():this.remoteDocumentCache.getEntry(e,I).next(L=>{g=g.insert(I,L)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,g,y,_e())).next(I=>({batchId:f,changes:l0(I)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let o=au();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,r,o){const u=n.collectionGroup;let h=au();return this.indexManager.getCollectionParents(e,u).next(f=>B.forEach(f,g=>{const y=function(b,L){return new ih(L,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,r,o).next(I=>{I.forEach((b,L)=>{h=h.insert(b,L)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,n,r,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,u,o))).next(h=>{u.forEach((g,y)=>{const I=y.getKey();h.get(I)===null&&(h=h.insert(I,Ut.newInvalidDocument(I)))});let f=au();return h.forEach((g,y)=>{const I=u.get(g);I!==void 0&&pu(I.mutation,y,On.empty(),dt.now()),sh(n,y)&&(f=f.insert(g,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:ti(o.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(o){return{name:o.name,query:gR(o.bundledQuery),readTime:ti(o.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.overlays=new He(ne.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return B.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&r.set(o,u)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((o,u)=>{this.ht(e,n,u)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const o=this.Ir.get(r);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const o=Wr(),u=n.length+1,h=new ne(n.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>r&&o.set(g.getKey(),g)}return B.resolve(o)}getOverlaysForCollectionGroup(e,n,r,o){let u=new He((y,I)=>y-I);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>r){let I=u.get(y.largestBatchId);I===null&&(I=Wr(),u=u.insert(y.largestBatchId,I)),I.set(y.getKey(),y)}}const f=Wr(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,I)=>f.set(y,I)),!(f.size()>=o)););return B.resolve(f)}ht(e,n,r){const o=this.overlays.get(r.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(r.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(r.key,new GS(n,r));let u=this.Ir.get(n);u===void 0&&(u=_e(),this.Ir.set(n,u)),this.Ir.set(n,u.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.Tr=new Ot(wt.Er),this.dr=new Ot(wt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new wt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new wt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ne(new Fe([])),r=new wt(n,e),o=new wt(n,e+1),u=[];return this.dr.forEachInRange([r,o],h=>{this.Vr(h),u.push(h.key)}),u}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ne(new Fe([])),r=new wt(n,e),o=new wt(n,e+1);let u=_e();return this.dr.forEachInRange([r,o],h=>{u=u.add(h.key)}),u}containsKey(e){const n=new wt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class wt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ne.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ot(wt.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,o){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new $S(u,n,r,o);this.mutationQueue.push(h);for(const f of o)this.br=this.br.add(new wt(f.key,u)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,o=this.vr(r),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new wt(n,0),o=new wt(n,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([r,o],h=>{const f=this.Dr(h.wr);u.push(f)}),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ot(be);return n.forEach(o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,h],f=>{r=r.add(f.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,o=r.length+1;let u=r;ne.isDocumentKey(u)||(u=u.child(""));const h=new wt(new ne(u),0);let f=new Ot(be);return this.br.forEachWhile(g=>{const y=g.key.path;return!!r.isPrefixOf(y)&&(y.length===o&&(f=f.add(g.wr)),!0)},h),B.resolve(this.Cr(f))}Cr(e){const n=[];return e.forEach(r=>{const o=this.Dr(r);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){ke(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,o=>{const u=new wt(o.key,n.batchId);return r=r.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new wt(n,0),o=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.Mr=e,this.docs=function(){return new He(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,o=this.docs.get(r),u=o?o.size:0,h=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let r=ki();return n.forEach(o=>{const u=this.docs.get(o);r=r.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,o){let u=ki();const h=n.path,f=new ne(h.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:y,value:{document:I}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||uS(aS(I),r)<=0||(o.has(I.key)||sh(n,I))&&(u=u.insert(I.key,I.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,n,r,o){se()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RR(this)}getSize(e){return B.resolve(this.size)}}class RR extends _R{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?n.push(this.cr.addEntry(e,o)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.persistence=e,this.Nr=new Mo(n=>op(n),ap),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new dp,this.targetCount=0,this.kr=So.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,o)=>n(o)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new So(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let o=0;const u=[];return this.Nr.forEach((h,f)=>{f.sequenceNumber<=n&&r.get(f.targetId)===null&&(this.Nr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),B.waitFor(u).next(()=>o)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),B.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new np(0),this.Kr=!1,this.Kr=!0,this.$r=new TR,this.referenceDelegate=e(this),this.Ur=new CR(this),this.indexManager=new vR,this.remoteDocumentCache=function(o){return new SR(o)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mR(n),this.Gr=new ER(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new AR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const o=new kR(this.Qr.next());return this.referenceDelegate.zr(),r(o).next(u=>this.referenceDelegate.jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class kR extends lS{constructor(e){super(),this.currentSequenceNumber=e}}class fp{constructor(e){this.persistence=e,this.Jr=new dp,this.Yr=null}static Zr(e){return new fp(e)}get Xr(){if(this.Yr)return this.Yr;throw se()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(o=>this.Xr.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.Xr.add(u.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const o=ne.fromPath(r);return this.ei(e,o).next(u=>{u||n.removeEntry(o,ae.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r,o){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=o}static Wi(e,n){let r=_e(),o=_e();for(const u of n.docChanges)switch(u.type){case 0:r=r.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new pp(e,n.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return u1()?8:hS(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,o){const u={result:null};return this.Yi(e,n).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.Zi(e,n,o,r).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new DR;return this.Xi(e,n,h).next(f=>{if(u.result=f,this.zi)return this.es(e,n,h,f.size)})}).next(()=>u.result)}es(e,n,r,o){return r.documentReadCount<this.ji?(tu()<=ye.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",lo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(tu()<=ye.DEBUG&&Q("QueryEngine","Query:",lo(n),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.Hi*o?(tu()<=ye.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",lo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ei(n))):B.resolve())}Yi(e,n){if(n_(n))return B.resolve(null);let r=ei(n);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Rf(n,null,"F"),r=ei(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(u=>{const h=_e(...u);return this.Ji.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,r).next(g=>{const y=this.ts(n,f);return this.ns(n,y,h,g.readTime)?this.Yi(e,Rf(n,null,"F")):this.rs(e,y,n,g)}))})))}Zi(e,n,r,o){return n_(n)||o.isEqual(ae.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(u=>{const h=this.ts(n,u);return this.ns(n,h,r,o)?B.resolve(null):(tu()<=ye.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),lo(n)),this.rs(e,h,n,oS(o,-1)).next(f=>f))})}ts(e,n){let r=new Ot(u0(e));return n.forEach((o,u)=>{sh(e,u)&&(r=r.add(u))}),r}ns(e,n,r,o){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Xi(e,n,r){return tu()<=ye.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",lo(n)),this.Ji.getDocumentsMatchingQuery(e,n,hr.min(),r)}rs(e,n,r,o){return this.Ji.getDocumentsMatchingQuery(e,r,o).next(u=>(n.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n,r,o){this.persistence=e,this.ss=n,this.serializer=o,this.os=new He(be),this._s=new Mo(u=>op(u),ap),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function LR(i,e,n,r){return new OR(i,e,n,r)}async function k0(i,e){const n=ue(i);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let o;return n.mutationQueue.getAllMutationBatches(r).next(u=>(o=u,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(u=>{const h=[],f=[];let g=_e();for(const y of o){h.push(y.batchId);for(const I of y.mutations)g=g.add(I.key)}for(const y of u){f.push(y.batchId);for(const I of y.mutations)g=g.add(I.key)}return n.localDocuments.getDocuments(r,g).next(y=>({hs:y,removedBatchIds:h,addedBatchIds:f}))})})}function MR(i,e){const n=ue(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=e.batch.keys(),u=n.cs.newChangeBuffer({trackRemovals:!0});return function(f,g,y,I){const b=y.batch,L=b.keys();let x=B.resolve();return L.forEach(z=>{x=x.next(()=>I.getEntry(g,z)).next(E=>{const D=y.docVersions.get(z);ke(D!==null),E.version.compareTo(D)<0&&(b.applyToRemoteDocument(E,y),E.isValidDocument()&&(E.setReadTime(y.commitVersion),I.addEntry(E)))})}),x.next(()=>f.mutationQueue.removeMutationBatch(g,b))}(n,r,e,u).next(()=>u.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(f){let g=_e();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(g=g.add(f.batch.mutations[y].key));return g}(e))).next(()=>n.localDocuments.getDocuments(r,o))})}function D0(i){const e=ue(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function VR(i,e){const n=ue(i),r=e.snapshotVersion;let o=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=n.cs.newChangeBuffer({trackRemovals:!0});o=n.os;const f=[];e.targetChanges.forEach((I,b)=>{const L=o.get(b);if(!L)return;f.push(n.Ur.removeMatchingKeys(u,I.removedDocuments,b).next(()=>n.Ur.addMatchingKeys(u,I.addedDocuments,b)));let x=L.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?x=x.withResumeToken(Lt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):I.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(I.resumeToken,r)),o=o.insert(b,x),function(E,D,F){return E.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(L,x,I)&&f.push(n.Ur.updateTargetData(u,x))});let g=ki(),y=_e();if(e.documentUpdates.forEach(I=>{e.resolvedLimboDocuments.has(I)&&f.push(n.persistence.referenceDelegate.updateLimboDocument(u,I))}),f.push(xR(u,h,e.documentUpdates).next(I=>{g=I.Ps,y=I.Is})),!r.isEqual(ae.min())){const I=n.Ur.getLastRemoteSnapshotVersion(u).next(b=>n.Ur.setTargetsMetadata(u,u.currentSequenceNumber,r));f.push(I)}return B.waitFor(f).next(()=>h.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,y)).next(()=>g)}).then(u=>(n.os=o,u))}function xR(i,e,n){let r=_e(),o=_e();return n.forEach(u=>r=r.add(u)),e.getEntries(i,r).next(u=>{let h=ki();return n.forEach((f,g)=>{const y=u.get(f);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(ae.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):Q("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",g.version)}),{Ps:h,Is:o}})}function FR(i,e){const n=ue(i);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UR(i,e){const n=ue(i);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return n.Ur.getTargetData(r,e).next(u=>u?(o=u,B.resolve(o)):n.Ur.allocateTargetId(r).next(h=>(o=new rr(e,h,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=n.os.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Nf(i,e,n){const r=ue(i),o=r.os.get(e),u=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",u,h=>r.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Mu(h))throw h;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}r.os=r.os.remove(e),r._s.delete(o.target)}function f_(i,e,n){const r=ue(i);let o=ae.min(),u=_e();return r.persistence.runTransaction("Execute query","readwrite",h=>function(g,y,I){const b=ue(g),L=b._s.get(I);return L!==void 0?B.resolve(b.os.get(L)):b.Ur.getTargetData(y,I)}(r,h,ei(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(h,f.targetId).next(g=>{u=g})}).next(()=>r.ss.getDocumentsMatchingQuery(h,e,n?o:ae.min(),n?u:_e())).next(f=>(jR(r,kS(e),f),{documents:f,Ts:u})))}function jR(i,e,n){let r=i.us.get(e)||ae.min();n.forEach((o,u)=>{u.readTime.compareTo(r)>0&&(r=u.readTime)}),i.us.set(e,r)}class p_{constructor(){this.activeTargetIds=VS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BR{constructor(){this.so=new p_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new p_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l=null;function cf(){return _l===null?_l=function(){return 268435456+Math.round(2147483648*Math.random())}():_l++,"0x"+_l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class $R extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${o}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}get Fo(){return!1}Mo(n,r,o,u,h){const f=cf(),g=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${f}:`,g,o);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,u,h),this.No(n,g,y,o).then(I=>(Q("RestConnection",`Received RPC '${n}' ${f}: `,I),I),I=>{throw Eo("RestConnection",`RPC '${n}' ${f} failed with error: `,I,"url: ",g,"request:",o),I})}Lo(n,r,o,u,h,f){return this.Mo(n,r,o,u,h)}Oo(n,r,o){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((u,h)=>n[h]=u),o&&o.headers.forEach((u,h)=>n[h]=u)}xo(n,r){const o=HR[n];return`${this.Do}/v1/${r}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,o){const u=cf();return new Promise((h,f)=>{const g=new Ww;g.setWithCredentials(!0),g.listenOnce($w.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case El.NO_ERROR:const I=g.getResponseJson();Q(xt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(I)),h(I);break;case El.TIMEOUT:Q(xt,`RPC '${e}' ${u} timed out`),f(new te(q.DEADLINE_EXCEEDED,"Request time out"));break;case El.HTTP_ERROR:const b=g.getStatus();if(Q(xt,`RPC '${e}' ${u} failed with status:`,b,"response text:",g.getResponseText()),b>0){let L=g.getResponseJson();Array.isArray(L)&&(L=L[0]);const x=L==null?void 0:L.error;if(x&&x.status&&x.message){const z=function(D){const F=D.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(F)>=0?F:q.UNKNOWN}(x.status);f(new te(z,x.message))}else f(new te(q.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new te(q.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{Q(xt,`RPC '${e}' ${u} completed.`)}});const y=JSON.stringify(o);Q(xt,`RPC '${e}' ${u} sending request:`,o),g.send(n,"POST",y,r,15)})}Bo(e,n,r){const o=cf(),u=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Kw(),f=zw(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,n,r),g.encodeInitMessageHeaders=!0;const I=u.join("");Q(xt,`Creating RPC '${e}' stream ${o}: ${I}`,g);const b=h.createWebChannel(I,g);let L=!1,x=!1;const z=new WR({Io:D=>{x?Q(xt,`Not sending because RPC '${e}' stream ${o} is closed:`,D):(L||(Q(xt,`Opening RPC '${e}' stream ${o} transport.`),b.open(),L=!0),Q(xt,`RPC '${e}' stream ${o} sending:`,D),b.send(D))},To:()=>b.close()}),E=(D,F,$)=>{D.listen(F,Y=>{try{$(Y)}catch(re){setTimeout(()=>{throw re},0)}})};return E(b,ou.EventType.OPEN,()=>{x||(Q(xt,`RPC '${e}' stream ${o} transport opened.`),z.yo())}),E(b,ou.EventType.CLOSE,()=>{x||(x=!0,Q(xt,`RPC '${e}' stream ${o} transport closed`),z.So())}),E(b,ou.EventType.ERROR,D=>{x||(x=!0,Eo(xt,`RPC '${e}' stream ${o} transport errored:`,D),z.So(new te(q.UNAVAILABLE,"The operation could not be completed")))}),E(b,ou.EventType.MESSAGE,D=>{var F;if(!x){const $=D.data[0];ke(!!$);const Y=$,re=Y.error||((F=Y[0])===null||F===void 0?void 0:F.error);if(re){Q(xt,`RPC '${e}' stream ${o} received error:`,re);const pe=re.status;let he=function(R){const k=st[R];if(k!==void 0)return w0(k)}(pe),P=re.message;he===void 0&&(he=q.INTERNAL,P="Unknown error status: "+pe+" with message "+re.message),x=!0,z.So(new te(he,P)),b.close()}else Q(xt,`RPC '${e}' stream ${o} received:`,$),z.bo($)}}),E(f,Gw.STAT_EVENT,D=>{D.stat===Ef.PROXY?Q(xt,`RPC '${e}' stream ${o} detected buffering proxy`):D.stat===Ef.NOPROXY&&Q(xt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.wo()},0),z}}function lf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(i){return new tR(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n,r=1e3,o=1.5,u=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=o,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),o=Math.max(0,n-r);o>0&&Q("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,o,u,h,f,g){this.ui=e,this.Ho=r,this.Jo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new N0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Pi(n.toString()),Pi("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.Yo===n&&this.P_(r,o)},r=>{e(()=>{const o=new te(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(o)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{r(()=>this.I_(o))}),this.stream.onMessage(o=>{r(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GR extends O0{constructor(e,n,r,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,h),this.serializer=u}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=rR(this.serializer,e),r=function(u){if(!("targetChange"in u))return ae.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ae.min():h.readTime?ti(h.readTime):ae.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Df(this.serializer),n.addTarget=function(u,h){let f;const g=h.target;if(f=Sf(g)?{documents:aR(u,g)}:{query:uR(u,g)._t},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=b0(u,h.resumeToken);const y=Cf(u,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(ae.min())>0){f.readTime=ql(u,h.snapshotVersion.toTimestamp());const y=Cf(u,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const r=lR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Df(this.serializer),n.removeTarget=e,this.a_(n)}}class zR extends O0{constructor(e,n,r,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,h),this.serializer=u}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=oR(e.writeResults,e.commitTime),r=ti(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Df(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR extends class{}{constructor(e,n,r,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Mo(e,Pf(n,r),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(q.UNKNOWN,u.toString())})}Lo(e,n,r,o,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.Lo(e,Pf(n,r),o,h,f,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(q.UNKNOWN,h.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class YR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pi(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o(h=>{r.enqueueAndForget(async()=>{is(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(g){const y=ue(g);y.L_.add(4),await Fu(y),y.q_.set("Unknown"),y.L_.delete(4),await lh(y)}(this))})}),this.q_=new YR(r,o)}}async function lh(i){if(is(i))for(const e of i.B_)await e(!0)}async function Fu(i){for(const e of i.B_)await e(!1)}function L0(i,e){const n=ue(i);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),yp(n)?vp(n):Vo(n).r_()&&gp(n,e))}function mp(i,e){const n=ue(i),r=Vo(n);n.N_.delete(e),r.r_()&&M0(n,e),n.N_.size===0&&(r.r_()?r.o_():is(n)&&n.q_.set("Unknown"))}function gp(i,e){if(i.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vo(i).A_(e)}function M0(i,e){i.Q_.xe(e),Vo(i).R_(e)}function vp(i){i.Q_=new QS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>i.N_.get(e)||null,tt:()=>i.datastore.serializer.databaseId}),Vo(i).start(),i.q_.v_()}function yp(i){return is(i)&&!Vo(i).n_()&&i.N_.size>0}function is(i){return ue(i).L_.size===0}function V0(i){i.Q_=void 0}async function QR(i){i.q_.set("Online")}async function XR(i){i.N_.forEach((e,n)=>{gp(i,e)})}async function ZR(i,e){V0(i),yp(i)?(i.q_.M_(e),vp(i)):i.q_.set("Unknown")}async function eC(i,e,n){if(i.q_.set("Online"),e instanceof E0&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const f of u.targetIds)o.N_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.N_.delete(f),o.Q_.removeTarget(f))}(i,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hl(i,r)}else if(e instanceof Al?i.Q_.Ke(e):e instanceof I0?i.Q_.He(e):i.Q_.We(e),!n.isEqual(ae.min()))try{const r=await D0(i.localStore);n.compareTo(r)>=0&&await function(u,h){const f=u.Q_.rt(h);return f.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const I=u.N_.get(y);I&&u.N_.set(y,I.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,y)=>{const I=u.N_.get(g);if(!I)return;u.N_.set(g,I.withResumeToken(Lt.EMPTY_BYTE_STRING,I.snapshotVersion)),M0(u,g);const b=new rr(I.target,g,y,I.sequenceNumber);gp(u,b)}),u.remoteSyncer.applyRemoteEvent(f)}(i,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Hl(i,r)}}async function Hl(i,e,n){if(!Mu(e))throw e;i.L_.add(1),await Fu(i),i.q_.set("Offline"),n||(n=()=>D0(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),i.L_.delete(1),await lh(i)})}function x0(i,e){return e().catch(n=>Hl(i,n,e))}async function hh(i){const e=ue(i),n=fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;tC(e);)try{const o=await FR(e.localStore,r);if(o===null){e.O_.length===0&&n.o_();break}r=o.batchId,nC(e,o)}catch(o){await Hl(e,o)}F0(e)&&U0(e)}function tC(i){return is(i)&&i.O_.length<10}function nC(i,e){i.O_.push(e);const n=fr(i);n.r_()&&n.V_&&n.m_(e.mutations)}function F0(i){return is(i)&&!fr(i).n_()&&i.O_.length>0}function U0(i){fr(i).start()}async function iC(i){fr(i).p_()}async function rC(i){const e=fr(i);for(const n of i.O_)e.m_(n.mutations)}async function sC(i,e,n){const r=i.O_.shift(),o=cp.from(r,e,n);await x0(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await hh(i)}async function oC(i,e){e&&fr(i).V_&&await async function(r,o){if(function(h){return KS(h)&&h!==q.ABORTED}(o.code)){const u=r.O_.shift();fr(r).s_(),await x0(r,()=>r.remoteSyncer.rejectFailedWrite(u.batchId,o)),await hh(r)}}(i,e),F0(i)&&U0(i)}async function g_(i,e){const n=ue(i);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=is(n);n.L_.add(3),await Fu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await lh(n)}async function aC(i,e){const n=ue(i);e?(n.L_.delete(2),await lh(n)):e||(n.L_.add(2),await Fu(n),n.q_.set("Unknown"))}function Vo(i){return i.K_||(i.K_=function(n,r,o){const u=ue(n);return u.w_(),new GR(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Eo:QR.bind(null,i),Ro:XR.bind(null,i),mo:ZR.bind(null,i),d_:eC.bind(null,i)}),i.B_.push(async e=>{e?(i.K_.s_(),yp(i)?vp(i):i.q_.set("Unknown")):(await i.K_.stop(),V0(i))})),i.K_}function fr(i){return i.U_||(i.U_=function(n,r,o){const u=ue(n);return u.w_(),new zR(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:iC.bind(null,i),mo:oC.bind(null,i),f_:rC.bind(null,i),g_:sC.bind(null,i)}),i.B_.push(async e=>{e?(i.U_.s_(),await hh(i)):(await i.U_.stop(),i.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))})),i.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=u,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,u){const h=Date.now()+r,f=new _p(e,n,h,o,u);return f.start(r),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wp(i,e){if(Pi("AsyncQueue",`${e}: ${i}`),Mu(i))return new te(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=au(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new mo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.W_=new He(ne.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):se():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ro{constructor(e,n,r,o,u,h,f,g,y){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,r,o,u){const h=[];return n.forEach(f=>{h.push({type:0,doc:f})}),new Ro(e,n,mo.emptySet(n),h,r,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class cC{constructor(){this.queries=y_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const o=ue(n),u=o.queries;o.queries=y_(),u.forEach((h,f)=>{for(const g of f.j_)g.onError(r)})})(this,new te(q.ABORTED,"Firestore shutting down"))}}function y_(){return new Mo(i=>a0(i),rh)}async function lC(i,e){const n=ue(i);let r=3;const o=e.query;let u=n.queries.get(o);u?!u.H_()&&e.J_()&&(r=2):(u=new uC,r=e.J_()?0:1);try{switch(r){case 0:u.z_=await n.onListen(o,!0);break;case 1:u.z_=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(h){const f=wp(h,`Initialization of query '${lo(e.query)}' failed`);return void e.onError(f)}n.queries.set(o,u),u.j_.push(e),e.Z_(n.onlineState),u.z_&&e.X_(u.z_)&&Ip(n)}async function hC(i,e){const n=ue(i),r=e.query;let o=3;const u=n.queries.get(r);if(u){const h=u.j_.indexOf(e);h>=0&&(u.j_.splice(h,1),u.j_.length===0?o=e.J_()?0:1:!u.H_()&&e.J_()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dC(i,e){const n=ue(i);let r=!1;for(const o of e){const u=o.query,h=n.queries.get(u);if(h){for(const f of h.j_)f.X_(o)&&(r=!0);h.z_=o}}r&&Ip(n)}function fC(i,e,n){const r=ue(i),o=r.queries.get(e);if(o)for(const u of o.j_)u.onError(n);r.queries.delete(e)}function Ip(i){i.Y_.forEach(e=>{e.next()})}var Of,__;(__=Of||(Of={})).ea="default",__.Cache="cache";class pC{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new Ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Of.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.key=e}}class B0{constructor(e){this.key=e}}class mC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=u0(e),this.Ra=new mo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new v_,o=n?n.Ra:this.Ra;let u=n?n.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((I,b)=>{const L=o.get(I),x=sh(this.query,b)?b:null,z=!!L&&this.mutatedKeys.has(L.key),E=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let D=!1;L&&x?L.data.isEqual(x.data)?z!==E&&(r.track({type:3,doc:x}),D=!0):this.ga(L,x)||(r.track({type:2,doc:x}),D=!0,(g&&this.Aa(x,g)>0||y&&this.Aa(x,y)<0)&&(f=!0)):!L&&x?(r.track({type:0,doc:x}),D=!0):L&&!x&&(r.track({type:1,doc:L}),D=!0,(g||y)&&(f=!0)),D&&(x?(h=h.add(x),u=E?u.add(I):u.delete(I)):(h=h.delete(I),u=u.delete(I)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const I=this.query.limitType==="F"?h.last():h.first();h=h.delete(I.key),u=u.delete(I.key),r.track({type:1,doc:I})}return{Ra:h,fa:r,ns:f,mutatedKeys:u}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,o){const u=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort((I,b)=>function(x,z){const E=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return E(x)-E(z)}(I.type,b.type)||this.Aa(I.doc,b.doc)),this.pa(r),o=o!=null&&o;const f=n&&!o?this.ya():[],g=this.da.size===0&&this.current&&!o?1:0,y=g!==this.Ea;return this.Ea=g,h.length!==0||y?{snapshot:new Ro(this.query,e.Ra,u,h,e.mutatedKeys,g===0,y,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:f}:{wa:f}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new v_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new B0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new j0(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ro.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class gC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vC{constructor(e){this.key=e,this.va=!1}}class yC{constructor(e,n,r,o,u,h){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new Mo(f=>a0(f),rh),this.Ma=new Map,this.xa=new Set,this.Oa=new He(ne.comparator),this.Na=new Map,this.La=new dp,this.Ba={},this.ka=new Map,this.qa=So.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function _C(i,e,n=!0){const r=z0(i);let o;const u=r.Fa.get(e);return u?(r.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Da()):o=await q0(r,e,n,!0),o}async function wC(i,e){const n=z0(i);await q0(n,e,!0,!1)}async function q0(i,e,n,r){const o=await UR(i.localStore,ei(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,n);let f;return r&&(f=await IC(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&n&&L0(i.remoteStore,o),f}async function IC(i,e,n,r,o){i.Ka=(b,L,x)=>async function(E,D,F,$){let Y=D.view.ma(F);Y.ns&&(Y=await f_(E.localStore,D.query,!1).then(({documents:P})=>D.view.ma(P,Y)));const re=$&&$.targetChanges.get(D.targetId),pe=$&&$.targetMismatches.get(D.targetId)!=null,he=D.view.applyChanges(Y,E.isPrimaryClient,re,pe);return I_(E,D.targetId,he.wa),he.snapshot}(i,b,L,x);const u=await f_(i.localStore,e,!0),h=new mC(e,u.Ts),f=h.ma(u.documents),g=xu.createSynthesizedTargetChangeForCurrentChange(n,r&&i.onlineState!=="Offline",o),y=h.applyChanges(f,i.isPrimaryClient,g);I_(i,n,y.wa);const I=new gC(e,n,h);return i.Fa.set(e,I),i.Ma.has(n)?i.Ma.get(n).push(e):i.Ma.set(n,[e]),y.snapshot}async function EC(i,e,n){const r=ue(i),o=r.Fa.get(e),u=r.Ma.get(o.targetId);if(u.length>1)return r.Ma.set(o.targetId,u.filter(h=>!rh(h,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Nf(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),n&&mp(r.remoteStore,o.targetId),Lf(r,o.targetId)}).catch(Lu)):(Lf(r,o.targetId),await Nf(r.localStore,o.targetId,!0))}async function bC(i,e){const n=ue(i),r=n.Fa.get(e),o=n.Ma.get(r.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mp(n.remoteStore,r.targetId))}async function TC(i,e,n){const r=DC(i);try{const o=await function(h,f){const g=ue(h),y=dt.now(),I=f.reduce((x,z)=>x.add(z.key),_e());let b,L;return g.persistence.runTransaction("Locally write mutations","readwrite",x=>{let z=ki(),E=_e();return g.cs.getEntries(x,I).next(D=>{z=D,z.forEach((F,$)=>{$.isValidDocument()||(E=E.add(F))})}).next(()=>g.localDocuments.getOverlayedDocuments(x,z)).next(D=>{b=D;const F=[];for(const $ of f){const Y=HS($,b.get($.key).overlayedDocument);Y!=null&&F.push(new ns($.key,Y,Zw(Y.value.mapValue),Si.exists(!0)))}return g.mutationQueue.addMutationBatch(x,y,F,f)}).next(D=>{L=D;const F=D.applyToLocalDocumentSet(b,E);return g.documentOverlayCache.saveOverlays(x,D.batchId,F)})}).then(()=>({batchId:L.batchId,changes:l0(b)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),function(h,f,g){let y=h.Ba[h.currentUser.toKey()];y||(y=new He(be)),y=y.insert(f,g),h.Ba[h.currentUser.toKey()]=y}(r,o.batchId,n),await Uu(r,o.changes),await hh(r.remoteStore)}catch(o){const u=wp(o,"Failed to persist write");n.reject(u)}}async function H0(i,e){const n=ue(i);try{const r=await VR(n.localStore,e);e.targetChanges.forEach((o,u)=>{const h=n.Na.get(u);h&&(ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?ke(h.va):o.removedDocuments.size>0&&(ke(h.va),h.va=!1))}),await Uu(n,r,e)}catch(r){await Lu(r)}}function w_(i,e,n){const r=ue(i);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.Fa.forEach((u,h)=>{const f=h.view.Z_(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=ue(h);g.onlineState=f;let y=!1;g.queries.forEach((I,b)=>{for(const L of b.j_)L.Z_(f)&&(y=!0)}),y&&Ip(g)}(r.eventManager,e),o.length&&r.Ca.d_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AC(i,e,n){const r=ue(i);r.sharedClientState.updateQueryState(e,"rejected",n);const o=r.Na.get(e),u=o&&o.key;if(u){let h=new He(ne.comparator);h=h.insert(u,Ut.newNoDocument(u,ae.min()));const f=_e().add(u),g=new uh(ae.min(),new Map,new He(be),h,f);await H0(r,g),r.Oa=r.Oa.remove(u),r.Na.delete(e),Ep(r)}else await Nf(r.localStore,e,!1).then(()=>Lf(r,e,n)).catch(Lu)}async function SC(i,e){const n=ue(i),r=e.batch.batchId;try{const o=await MR(n.localStore,e);$0(n,r,null),W0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Uu(n,o)}catch(o){await Lu(o)}}async function RC(i,e,n){const r=ue(i);try{const o=await function(h,f){const g=ue(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let I;return g.mutationQueue.lookupMutationBatch(y,f).next(b=>(ke(b!==null),I=b.keys(),g.mutationQueue.removeMutationBatch(y,b))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,I,f)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,I)).next(()=>g.localDocuments.getDocuments(y,I))})}(r.localStore,e);$0(r,e,n),W0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Uu(r,o)}catch(o){await Lu(o)}}function W0(i,e){(i.ka.get(e)||[]).forEach(n=>{n.resolve()}),i.ka.delete(e)}function $0(i,e,n){const r=ue(i);let o=r.Ba[r.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),r.Ba[r.currentUser.toKey()]=o}}function Lf(i,e,n=null){i.sharedClientState.removeLocalQueryTarget(e);for(const r of i.Ma.get(e))i.Fa.delete(r),n&&i.Ca.$a(r,n);i.Ma.delete(e),i.isPrimaryClient&&i.La.gr(e).forEach(r=>{i.La.containsKey(r)||G0(i,r)})}function G0(i,e){i.xa.delete(e.path.canonicalString());const n=i.Oa.get(e);n!==null&&(mp(i.remoteStore,n),i.Oa=i.Oa.remove(e),i.Na.delete(n),Ep(i))}function I_(i,e,n){for(const r of n)r instanceof j0?(i.La.addReference(r.key,e),CC(i,r)):r instanceof B0?(Q("SyncEngine","Document no longer in limbo: "+r.key),i.La.removeReference(r.key,e),i.La.containsKey(r.key)||G0(i,r.key)):se()}function CC(i,e){const n=e.key,r=n.path.canonicalString();i.Oa.get(n)||i.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),i.xa.add(r),Ep(i))}function Ep(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const e=i.xa.values().next().value;i.xa.delete(e);const n=new ne(Fe.fromString(e)),r=i.qa.next();i.Na.set(r,new vC(n)),i.Oa=i.Oa.insert(n,r),L0(i.remoteStore,new rr(ei(o0(n.path)),r,"TargetPurposeLimboResolution",np.oe))}}async function Uu(i,e,n){const r=ue(i),o=[],u=[],h=[];r.Fa.isEmpty()||(r.Fa.forEach((f,g)=>{h.push(r.Ka(g,e,n).then(y=>{var I;if((y||n)&&r.isPrimaryClient){const b=y?!y.fromCache:(I=n==null?void 0:n.targetChanges.get(g.targetId))===null||I===void 0?void 0:I.current;r.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(y){o.push(y);const b=pp.Wi(g.targetId,y);u.push(b)}}))}),await Promise.all(h),r.Ca.d_(o),await async function(g,y){const I=ue(g);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>B.forEach(y,L=>B.forEach(L.$i,x=>I.persistence.referenceDelegate.addReference(b,L.targetId,x)).next(()=>B.forEach(L.Ui,x=>I.persistence.referenceDelegate.removeReference(b,L.targetId,x)))))}catch(b){if(!Mu(b))throw b;Q("LocalStore","Failed to update sequence numbers: "+b)}for(const b of y){const L=b.targetId;if(!b.fromCache){const x=I.os.get(L),z=x.snapshotVersion,E=x.withLastLimboFreeSnapshotVersion(z);I.os=I.os.insert(L,E)}}}(r.localStore,u))}async function PC(i,e){const n=ue(i);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await k0(n.localStore,e);n.currentUser=e,function(u,h){u.ka.forEach(f=>{f.forEach(g=>{g.reject(new te(q.CANCELLED,h))})}),u.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Uu(n,r.hs)}}function kC(i,e){const n=ue(i),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let o=_e();const u=n.Ma.get(e);if(!u)return o;for(const h of u){const f=n.Fa.get(h);o=o.unionWith(f.view.Va)}return o}}function z0(i){const e=ue(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=H0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AC.bind(null,e),e.Ca.d_=dC.bind(null,e.eventManager),e.Ca.$a=fC.bind(null,e.eventManager),e}function DC(i){const e=ue(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RC.bind(null,e),e}class Wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ch(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return LR(this.persistence,new NR,e.initialUser,this.serializer)}Ga(e){return new PR(fp.Zr,this.serializer)}Wa(e){return new BR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wl.provider={build:()=>new Wl};class Mf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>w_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PC.bind(null,this.syncEngine),await aC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cC}()}createDatastore(e){const n=ch(e.databaseInfo.databaseId),r=function(u){return new $R(u)}(e.databaseInfo);return function(u,h,f,g){return new KR(u,h,f,g)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,o,u,h,f){return new JR(r,o,u,h,f)}(this.localStore,this.datastore,e.asyncQueue,n=>w_(this.syncEngine,n,0),function(){return m_.D()?new m_:new qR}())}createSyncEngine(e,n){return function(o,u,h,f,g,y,I){const b=new yC(o,u,h,f,g,y);return I&&(b.Qa=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=ue(o);Q("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await Fu(u),u.k_.shutdown(),u.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Mf.provider={build:()=>new Mf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pi("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n,r,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Jw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(r,async h=>{Q("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(r,h=>(Q("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hf(i,e){i.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let r=n.initialUser;i.setCredentialChangeListener(async o=>{r.isEqual(o)||(await k0(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function E_(i,e){i.asyncQueue.verifyOperationInProgress();const n=await LC(i);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(r=>g_(e.remoteStore,r)),i.setAppCheckTokenChangeListener((r,o)=>g_(e.remoteStore,o)),i._onlineComponents=e}async function LC(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await hf(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Eo("Error using user provided cache. Falling back to memory cache: "+n),await hf(i,new Wl)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await hf(i,new Wl);return i._offlineComponents}async function K0(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await E_(i,i._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await E_(i,new Mf))),i._onlineComponents}function MC(i){return K0(i).then(e=>e.syncEngine)}async function VC(i){const e=await K0(i),n=e.eventManager;return n.onListen=_C.bind(null,e.syncEngine),n.onUnlisten=EC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bC.bind(null,e.syncEngine),n}function xC(i,e,n={}){const r=new ar;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,f,g,y){const I=new NC({next:L=>{I.Za(),h.enqueueAndForget(()=>hC(u,b)),L.fromCache&&g.source==="server"?y.reject(new te(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(L)},error:L=>y.reject(L)}),b=new pC(f,I,{includeMetadataChanges:!0,_a:!0});return lC(u,b)}(await VC(i),i.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(i,e,n){if(!n)throw new te(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function FC(i,e,n,r){if(e===!0&&r===!0)throw new te(q.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function T_(i){if(!ne.isDocumentKey(i))throw new te(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function A_(i){if(ne.isDocumentKey(i))throw new te(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function bp(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":se()}function Cu(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new te(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bp(i);throw new te(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Y0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dh{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new S_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new S_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QA;switch(r.type){case"firstParty":return new tS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=b_.get(n);r&&(Q("ComponentProvider","Removing Datastore"),b_.delete(n),r.terminate())}(this),Promise.resolve()}}function UC(i,e,n,r={}){var o;const u=(i=Cu(i,dh))._getSettings(),h=`${e}:${n}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&Eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),r.mockUserToken){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=Ft.MOCK_USER;else{f=r1(r.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new te(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ft(y)}i._authCredentials=new XA(new Yw(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fh(this.firestore,e,this._query)}}class vn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class ur extends fh{constructor(e,n,r){super(e,n,o0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new ne(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function jC(i,e,...n){if(i=ce(i),J0("collection","path",e),i instanceof dh){const r=Fe.fromString(e,...n);return A_(r),new ur(i,null,r)}{if(!(i instanceof vn||i instanceof ur))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(Fe.fromString(e,...n));return A_(r),new ur(i.firestore,null,r)}}function BC(i,e,...n){if(i=ce(i),arguments.length===1&&(e=Jw.newId()),J0("doc","path",e),i instanceof dh){const r=Fe.fromString(e,...n);return T_(r),new vn(i,null,new ne(r))}{if(!(i instanceof vn||i instanceof ur))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(Fe.fromString(e,...n));return T_(r),new vn(i.firestore,i instanceof ur?i.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new N0(this,"async_queue_retry"),this.Vu=()=>{const r=lf();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=lf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=lf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ar;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Mu(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(r);throw Pi("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const o=_p.createAndSchedule(this,e,n,r,u=>this.yu(u));return this.Tu.push(o),o}fu(){this.Eu&&se()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Tp extends dh{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new R_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new R_(e),this._firestoreClient=void 0,await e}}}function qC(i,e){const n=typeof i=="object"?i:Zl(),r=typeof i=="string"?i:"(default)",o=Oi(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const u=n1("firestore");u&&UC(o,...u)}return o}function Q0(i){if(i._terminated)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||HC(i),i._firestoreClient}function HC(i){var e,n,r;const o=i._freezeSettings(),u=function(f,g,y,I){return new pS(f,g,y,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Y0(I.experimentalLongPollingOptions),I.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new OC(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Co(Lt.fromBase64String(e))}catch(n){throw new te(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Co(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let u=0;u<r.length;++u)if(r[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=/^__.*__$/;class $C{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vu(e,this.data,n,this.fieldTransforms)}}function Z0(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Cp{constructor(e,n,r,o,u,h){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=o,u===void 0&&this.vu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Cp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Fu({path:r,xu:!1});return o.Ou(e),o}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Fu({path:r,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return $l(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Z0(this.Cu)&&WC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class GC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ch(e)}Qu(e,n,r,o=!1){return new Cp({Cu:e,methodName:n,qu:r,path:Dt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zC(i){const e=i._freezeSettings(),n=ch(i._databaseId);return new GC(i._databaseId,!!e.ignoreUndefinedProperties,n)}function KC(i,e,n,r,o,u={}){const h=i.Qu(u.merge||u.mergeFields?2:0,e,n,o);iI("Data must be an object, but it was:",h,r);const f=tI(r,h);let g,y;if(u.merge)g=new On(h.fieldMask),y=h.fieldTransforms;else if(u.mergeFields){const I=[];for(const b of u.mergeFields){const L=YC(e,b,n);if(!h.contains(L))throw new te(q.INVALID_ARGUMENT,`Field '${L}' is specified in your field mask but missing from your input data.`);QC(I,L)||I.push(L)}g=new On(I),y=h.fieldTransforms.filter(b=>g.covers(b.field))}else g=null,y=h.fieldTransforms;return new $C(new mn(f),g,y)}function eI(i,e){if(nI(i=ce(i)))return iI("Unsupported field value:",e,i),tI(i,e);if(i instanceof X0)return function(r,o){if(!Z0(o.Cu))throw o.Bu(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${r._methodName}() is not currently supported inside arrays`);const u=r._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,o){const u=[];let h=0;for(const f of r){let g=eI(f,o.Lu(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(r,o){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xS(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const u=dt.fromDate(r);return{timestampValue:ql(o.serializer,u)}}if(r instanceof dt){const u=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ql(o.serializer,u)}}if(r instanceof Sp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Co)return{bytesValue:b0(o.serializer,r._byteString)};if(r instanceof vn){const u=o.databaseId,h=r.firestore._databaseId;if(!h.isEqual(u))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:hp(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Rp)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw f.Bu("VectorValues must only contain numeric values.");return up(f.serializer,g)})}}}}}}(r,o);throw o.Bu(`Unsupported field value: ${bp(r)}`)}(i,e)}function tI(i,e){const n={};return Qw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lo(i,(r,o)=>{const u=eI(o,e.Mu(r));u!=null&&(n[r]=u)}),{mapValue:{fields:n}}}function nI(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof dt||i instanceof Sp||i instanceof Co||i instanceof vn||i instanceof X0||i instanceof Rp)}function iI(i,e,n){if(!nI(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const r=bp(n);throw r==="an object"?e.Bu(i+" a custom object"):e.Bu(i+" "+r)}}function YC(i,e,n){if((e=ce(e))instanceof Ap)return e._internalPath;if(typeof e=="string")return rI(i,e);throw $l("Field path arguments must be of type string or ",i,!1,void 0,n)}const JC=new RegExp("[~\\*/\\[\\]]");function rI(i,e,n){if(e.search(JC)>=0)throw $l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new Ap(...e.split("."))._internalPath}catch{throw $l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function $l(i,e,n,r,o){const u=r&&!r.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;n&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${r}`),h&&(g+=` in document ${o}`),g+=")"),new te(q.INVALID_ARGUMENT,f+i+g)}function QC(i,e){return i.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n,r,o,u){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XC extends sI{data(){return super.data()}}function oI(i,e){return typeof e=="string"?rI(i,e):e instanceof Ap?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new te(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class e2{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lo(e,(o,u)=>{r[o]=this.convertValue(u,n)}),r}convertVectorValue(e){var n,r,o;const u=(o=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(h=>Ze(h.doubleValue));return new Rp(u)}convertGeoPoint(e){return new Sp(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bu(e));default:return null}}convertTimestamp(e){const n=dr(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);ke(P0(r));const o=new Tu(r.get(1),r.get(3)),u=new ne(r.popFirst(5));return o.isEqual(n)||Pi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(i,e,n){let r;return r=i?i.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class n2 extends sI{constructor(e,n,r,o,u,h){super(e,n,r,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sl extends n2{data(e={}){return super.data(e)}}class i2{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new wl(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sl(this._firestore,this._userDataWriter,r.key,r,new wl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const g=new Sl(o._firestore,o._userDataWriter,f.doc.key,f.doc,new wl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>u||f.type!==3).map(f=>{const g=new Sl(o._firestore,o._userDataWriter,f.doc.key,f.doc,new wl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,I=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),I=h.indexOf(f.doc.key)),{type:r2(f.type),doc:g,oldIndex:y,newIndex:I}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function r2(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}class s2 extends e2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Co(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,n)}}function o2(i){i=Cu(i,fh);const e=Cu(i.firestore,Tp),n=Q0(e),r=new s2(e);return ZC(i._query),xC(n,i._query).then(o=>new i2(e,r,i,o))}function a2(i,e,n){i=Cu(i,vn);const r=Cu(i.firestore,Tp),o=t2(i.converter,e);return u2(r,[KC(zC(r),"setDoc",i._key,o,i.converter!==null,n).toMutation(i._key,Si.none())])}function u2(i,e){return function(r,o){const u=new ar;return r.asyncQueue.enqueueAndForget(async()=>TC(await MC(r),o,u)),u.promise}(Q0(i),e)}(function(e,n=!0){(function(o){Oo=o})(mr),yn(new un("firestore",(r,{instanceIdentifier:o,options:u})=>{const h=r.getProvider("app").getImmediate(),f=new Tp(new ZA(r.getProvider("auth-internal")),new iS(r.getProvider("app-check-internal")),function(y,I){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new te(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tu(y.options.projectId,I)}(h,o),h);return u=Object.assign({useFetchStreams:n},u),f._setSettings(u),f},"PUBLIC").setMultipleInstances(!0)),jt(Gy,"4.7.3",e),jt(Gy,"4.7.3","esm2017")})();function Pp(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(i);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(i,r[o])&&(n[r[o]]=i[r[o]]);return n}const nu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},co={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function aI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l2=c2,h2=aI,uI=new Ni("auth","Firebase",aI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new Ou("@firebase/auth");function d2(i,...e){Gl.logLevel<=ye.WARN&&Gl.warn(`Auth (${mr}): ${i}`,...e)}function Rl(i,...e){Gl.logLevel<=ye.ERROR&&Gl.error(`Auth (${mr}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(i,...e){throw Dp(i,...e)}function ft(i,...e){return Dp(i,...e)}function kp(i,e,n){const r=Object.assign(Object.assign({},h2()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:i.name})}function It(i){return kp(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xo(i,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(i,"argument-error"),kp(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dp(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return uI.create(i,...e)}function W(i,e,...n){if(!i)throw Dp(e,...n)}function Zn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Rl(e),new Error(e)}function Ln(i,e){i||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Np(){return C_()==="http:"||C_()==="https:"}function C_(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Np()||$f()||"connection"in navigator)?navigator.onLine:!0}function p2(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=s1()||Gf()}get(){return f2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(i,e){Ln(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=new ju(3e4,6e4);function Ke(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ye(i,e,n,r,o={}){return lI(i,o,async()=>{let u={},h={};r&&(e==="GET"?h=r:u={body:JSON.stringify(r)});const f=No(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const y=Object.assign({method:e,headers:g},u);return a1()||(y.referrerPolicy="no-referrer"),cI.fetch()(hI(i,i.config.apiHost,n,f),y)})}async function lI(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},m2),e);try{const o=new y2(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw cu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const f=u.ok?h.errorMessage:h.error.message,[g,y]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw cu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw cu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw cu(i,"user-disabled",h);const I=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw kp(i,I,y);Et(i,I)}}catch(o){if(o instanceof Nt)throw o;Et(i,"network-request-failed",{message:String(o)})}}async function Li(i,e,n,r,o={}){const u=await Ye(i,e,n,r,o);return"mfaPendingCredential"in u&&Et(i,"multi-factor-auth-required",{_serverResponse:u}),u}function hI(i,e,n,r){const o=`${e}${n}?${r}`;return i.config.emulator?Op(i.config,o):`${i.config.apiScheme}://${o}`}function v2(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class y2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),g2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cu(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=ft(i,e,r);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(i){return i!==void 0&&i.getResponse!==void 0}function k_(i){return i!==void 0&&i.enterprise!==void 0}class _2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return v2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(i){return(await Ye(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function I2(i,e){return Ye(i,"GET","/v2/recaptchaConfig",Ke(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(i,e){return Ye(i,"POST","/v1/accounts:delete",e)}async function b2(i,e){return Ye(i,"POST","/v1/accounts:update",e)}async function dI(i,e){return Ye(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function T2(i,e=!1){const n=ce(i),r=await n.getIdToken(e),o=ph(r);W(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:mu(df(o.auth_time)),issuedAtTime:mu(df(o.iat)),expirationTime:mu(df(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function df(i){return Number(i)*1e3}function ph(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return Rl("JWT malformed, contained fewer than 3 sections"),null;try{const o=ew(n);return o?JSON.parse(o):(Rl("Failed to decode base64 JWT payload"),null)}catch(o){return Rl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function D_(i){const e=ph(i);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&A2(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function A2({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mu(this.lastLoginAt),this.creationTime=mu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku(i){var e;const n=i.auth,r=await i.getIdToken(),o=await Di(i,dI(n,{idToken:r}));W(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?fI(u.providerUserInfo):[],f=C2(i.providerData,h),g=i.isAnonymous,y=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),I=g?y:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Vf(u.createdAt,u.lastLoginAt),isAnonymous:I};Object.assign(i,b)}async function R2(i){const e=ce(i);await ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function C2(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function fI(i){return i.map(e=>{var{providerId:n}=e,r=Pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(i,e){const n=await lI(i,{},async()=>{const r=No({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=hI(i,o,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",cI.fetch()(h,{method:"POST",headers:f,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function k2(i,e){return Ye(i,"POST","/v2/accounts:revokeToken",Ke(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):D_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=D_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:u}=await P2(e,n);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:u}=n,h=new go;return r&&(W(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(W(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(W(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(i,e){W(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class bi{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,u=Pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new S2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Vf(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return T2(this,e)}reload(){return R2(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ku(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Di(this,E2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,u,h,f,g,y,I;const b=(r=n.displayName)!==null&&r!==void 0?r:void 0,L=(o=n.email)!==null&&o!==void 0?o:void 0,x=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,z=(h=n.photoURL)!==null&&h!==void 0?h:void 0,E=(f=n.tenantId)!==null&&f!==void 0?f:void 0,D=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,F=(y=n.createdAt)!==null&&y!==void 0?y:void 0,$=(I=n.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:Y,emailVerified:re,isAnonymous:pe,providerData:he,stsTokenManager:P}=n;W(Y&&P,e,"internal-error");const S=go.fromJSON(this.name,P);W(typeof Y=="string",e,"internal-error"),ir(b,e.name),ir(L,e.name),W(typeof re=="boolean",e,"internal-error"),W(typeof pe=="boolean",e,"internal-error"),ir(x,e.name),ir(z,e.name),ir(E,e.name),ir(D,e.name),ir(F,e.name),ir($,e.name);const R=new bi({uid:Y,auth:e,email:L,emailVerified:re,displayName:b,isAnonymous:pe,photoURL:z,phoneNumber:x,tenantId:E,stsTokenManager:S,createdAt:F,lastLoginAt:$});return he&&Array.isArray(he)&&(R.providerData=he.map(k=>Object.assign({},k))),D&&(R._redirectEventId=D),R}static async _fromIdTokenResponse(e,n,r=!1){const o=new go;o.updateFromServerResponse(n);const u=new bi({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ku(u),u}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];W(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?fI(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),f=new go;f.updateFromIdToken(r);const g=new bi({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Vf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new Map;function on(i){Ln(i instanceof Function,"Expected a class definition");let e=N_.get(i);return e?(Ln(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,N_.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pI.type="NONE";const Po=pI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(i,e,n){return`firebase:${i}:${e}:${n}`}class vo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=zr(this.userKey,o.apiKey,u),this.fullPersistenceKey=zr("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vo(on(Po),e,r);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||on(Po);const h=zr(r,e.config.apiKey,e.name);let f=null;for(const y of n)try{const I=await y._get(h);if(I){const b=bi._fromJSON(e,I);y!==u&&(f=b),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new vo(u,e,r):(u=g[0],f&&await u._set(h,f.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(h)}catch{}})),new vo(u,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_I(e))return"Blackberry";if(wI(e))return"Webos";if(gI(e))return"Safari";if((e.includes("chrome/")||vI(e))&&!e.includes("edge/"))return"Chrome";if(Bu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mI(i=at()){return/firefox\//i.test(i)}function gI(i=at()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vI(i=at()){return/crios\//i.test(i)}function yI(i=at()){return/iemobile/i.test(i)}function Bu(i=at()){return/android/i.test(i)}function _I(i=at()){return/blackberry/i.test(i)}function wI(i=at()){return/webos/i.test(i)}function qu(i=at()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function D2(i=at()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function N2(i=at()){var e;return qu(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function O2(){return ow()&&document.documentMode===10}function II(i=at()){return qu(i)||Bu(i)||wI(i)||_I(i)||/windows phone/i.test(i)||yI(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(i,e=[]){let n;switch(i){case"Browser":n=O_(at());break;case"Worker":n=`${O_(at())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=u=>new Promise((h,f)=>{try{const g=e(u);h(g)}catch(g){f(g)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(i,e={}){return Ye(i,"GET","/v2/passwordPolicy",Ke(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=6;class x2{constructor(e){var n,r,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:V2,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,u,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(r=g.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new L_(this),this.idTokenSubscription=new L_(this),this.beforeStateQueue=new L2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dI(this,{idToken:e}),r=await bi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ge(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ku(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(It(this));const n=e?ce(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await M2(this),n=new x2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await k2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(f,this,"internal-error"),f.then(()=>{h||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,r,o);return()=>{h=!0,g()}}else{const g=e.addObserver(n);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=EI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&d2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ze(i){return ce(i)}class L_{constructor(e){this.auth=e,this.observer=null,this.addObserver=uw(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function U2(i){Hu=i}function Lp(i){return Hu.loadJS(i)}function j2(){return Hu.recaptchaV2Script}function B2(){return Hu.recaptchaEnterpriseScript}function q2(){return Hu.gapiScript}function bI(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const H2="recaptcha-enterprise",W2="NO_RECAPTCHA";class $2{constructor(e){this.type=H2,this.auth=ze(e)}async verify(e="verify",n=!1){async function r(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,f)=>{I2(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new _2(g);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,h(y.siteKey)}}).catch(g=>{f(g)})})}function o(u,h,f){const g=window.grecaptcha;k_(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(y=>{h(y)}).catch(()=>{h(W2)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((u,h)=>{r(this.auth).then(f=>{if(!n&&k_(window.grecaptcha))o(f,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=B2();g.length!==0&&(g+=f),Lp(g).then(()=>{o(f,u,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function M_(i,e,n,r=!1){const o=new $2(i);let u;try{u=await o.verify(n)}catch{u=await o.verify(n,!0)}const h=Object.assign({},e);return r?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Du(i,e,n,r){var o;if(!((o=i._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await M_(i,e,n,n==="getOobCode");return r(i,u)}else return r(i,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await M_(i,e,n,n==="getOobCode");return r(i,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(i,e){const n=Oi(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(_u(u,e??{}))return o;Et(o,"already-initialized")}return n.initialize({options:e})}function z2(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TI(i,e,n){const r=ze(i);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(n!=null&&n.disableWarnings),u=AI(e),{host:h,port:f}=K2(e),g=f===null?"":`:${f}`;r.config.emulator={url:`${u}//${h}${g}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:h,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Y2()}function AI(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function K2(i){const e=AI(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:V_(r.substr(u.length+1))}}else{const[u,h]=r.split(":");return{host:u,port:V_(h)}}}function V_(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Y2(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(i,e){return Ye(i,"POST","/v1/accounts:resetPassword",Ke(i,e))}async function J2(i,e){return Ye(i,"POST","/v1/accounts:update",e)}async function Q2(i,e){return Ye(i,"POST","/v1/accounts:signUp",e)}async function X2(i,e){return Ye(i,"POST","/v1/accounts:update",Ke(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(i,e){return Li(i,"POST","/v1/accounts:signInWithPassword",Ke(i,e))}async function mh(i,e){return Ye(i,"POST","/v1/accounts:sendOobCode",Ke(i,e))}async function eP(i,e){return mh(i,e)}async function tP(i,e){return mh(i,e)}async function nP(i,e){return mh(i,e)}async function iP(i,e){return mh(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(i,e){return Li(i,"POST","/v1/accounts:signInWithEmailLink",Ke(i,e))}async function sP(i,e){return Li(i,"POST","/v1/accounts:signInWithEmailLink",Ke(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends Fo{constructor(e,n,r,o=null){super("password",r),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Nu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Nu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Du(e,n,"signInWithPassword",Z2);case"emailLink":return rP(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Du(e,r,"signUpPassword",Q2);case"emailLink":return sP(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(i,e){return Li(i,"POST","/v1/accounts:signInWithIdp",Ke(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="http://localhost";class ri extends Fo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,u=Pp(n,["providerId","signInMethod"]);if(!r||!o)return null;const h=new ri(r,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:oP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=No(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(i,e){return Ye(i,"POST","/v1/accounts:sendVerificationCode",Ke(i,e))}async function uP(i,e){return Li(i,"POST","/v1/accounts:signInWithPhoneNumber",Ke(i,e))}async function cP(i,e){const n=await Li(i,"POST","/v1/accounts:signInWithPhoneNumber",Ke(i,e));if(n.temporaryProof)throw cu(i,"account-exists-with-different-credential",n);return n}const lP={USER_NOT_FOUND:"user-not-found"};async function hP(i,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Li(i,"POST","/v1/accounts:signInWithPhoneNumber",Ke(i,n),lP)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Fo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Kr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Kr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return uP(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return cP(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return hP(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:o}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:o,temporaryProof:u}=e;return!r&&!n&&!o&&!u?null:new Kr({verificationId:n,verificationCode:r,phoneNumber:o,temporaryProof:u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fP(i){const e=po(su(i)).link,n=e?po(su(e)).deep_link_id:null,r=po(su(i)).deep_link_id;return(r?po(su(r)).link:null)||r||n||e||i}class gh{constructor(e){var n,r,o,u,h,f;const g=po(su(e)),y=(n=g.apiKey)!==null&&n!==void 0?n:null,I=(r=g.oobCode)!==null&&r!==void 0?r:null,b=dP((o=g.mode)!==null&&o!==void 0?o:null);W(y&&I&&b,"argument-error"),this.apiKey=y,this.operation=b,this.code=I,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=fP(e);try{return new gh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.providerId=gr.PROVIDER_ID}static credential(e,n){return Nu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gh.parseLink(n);return W(r,"argument-error"),Nu._fromEmailAndCode(e,r.code,r.tenantId)}}gr.PROVIDER_ID="password";gr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends Mi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class yo extends Uo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),ri._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),ri._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return yo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return yo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:u,nonce:h,providerId:f}=e;if(!r&&!o&&!n&&!u||!f)return null;try{return new yo(f)._credential({idToken:n,accessToken:r,nonce:h,pendingToken:u})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Uo{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Uo{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="http://localhost";class ko extends Fo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,pendingToken:u}=n;return!r||!o||!u||r!==o?null:new ko(r,u)}static _create(e,n){return new ko(e,n)}buildRequest(){return{requestUri:pP,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="saml.";class zl extends Mi{constructor(e){W(e.startsWith(mP),"argument-error"),super(e)}static credentialFromResult(e){return zl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return zl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ko.fromJSON(e);return W(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ko._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Uo{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(i,e){return Li(i,"POST","/v1/accounts:signUp",Ke(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const u=await bi._fromIdTokenResponse(e,r,o),h=x_(r);return new _n({user:u,providerId:h,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=x_(r);return new _n({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function x_(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(i){var e;if(Ge(i.app))return Promise.reject(It(i));const n=ze(i);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new _n({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await RI(n,{returnSecureToken:!0}),o=await _n._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Nt{constructor(e,n,r,o){var u;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new Kl(e,n,r,o)}}function CI(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(i,u,e,r):u})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(i,e){const n=ce(i);await vh(!0,n,e);const{providerUserInfo:r}=await b2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),o=PI(r||[]);return n.providerData=n.providerData.filter(u=>o.has(u.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Mp(i,e,n=!1){const r=await Di(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return _n._forOperation(i,"link",r)}async function vh(i,e,n){await ku(e);const r=PI(e.providerData),o=i===!1?"provider-already-linked":"no-such-provider";W(r.has(n)===i,e.auth,o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(i,e,n=!1){const{auth:r}=i;if(Ge(r.app))return Promise.reject(It(r));const o="reauthenticate";try{const u=await Di(i,CI(r,o,e,i),n);W(u.idToken,r,"internal-error");const h=ph(u.idToken);W(h,r,"internal-error");const{sub:f}=h;return W(i.uid===f,r,"user-mismatch"),_n._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(i,e,n=!1){if(Ge(i.app))return Promise.reject(It(i));const r="signIn",o=await CI(i,r,e),u=await _n._fromIdTokenResponse(i,r,o);return n||await i._updateCurrentUser(u.user),u}async function yh(i,e){return DI(ze(i),e)}async function NI(i,e){const n=ce(i);return await vh(!1,n,e.providerId),Mp(n,e)}async function OI(i,e){return kI(ce(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(i,e){return Li(i,"POST","/v1/accounts:signInWithCustomToken",Ke(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(i,e){if(Ge(i.app))return Promise.reject(It(i));const n=ze(i),r=await yP(n,{token:e,returnSecureToken:!0}),o=await _n._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Vp._fromServerResponse(e,n):"totpInfo"in n?xp._fromServerResponse(e,n):Et(e,"internal-error")}}class Vp extends Wu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Vp(n)}}class xp extends Wu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new xp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(i,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,i,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(i){const e=ze(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wP(i,e,n){const r=ze(i),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&_h(r,o,n),await Du(r,o,"getOobCode",tP)}async function IP(i,e,n){await SI(ce(i),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fp(i),r})}async function EP(i,e){await X2(ce(i),{oobCode:e})}async function LI(i,e){const n=ce(i),r=await SI(n,{oobCode:e}),o=r.requestType;switch(W(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":W(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":W(r.mfaInfo,n,"internal-error");default:W(r.email,n,"internal-error")}let u=null;return r.mfaInfo&&(u=Wu._fromServerResponse(ze(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:u},operation:o}}async function bP(i,e){const{data:n}=await LI(ce(i),e);return n.email}async function TP(i,e,n){if(Ge(i.app))return Promise.reject(It(i));const r=ze(i),h=await Du(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Fp(i),g}),f=await _n._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(f.user),f}function AP(i,e,n){return Ge(i.app)?Promise.reject(It(i)):yh(ce(i),gr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fp(i),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(i,e,n){const r=ze(i),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(h,f){W(f.handleCodeInApp,r,"argument-error"),f&&_h(r,h,f)}u(o,n),await Du(r,o,"getOobCode",nP)}function RP(i,e){const n=gh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function CP(i,e,n){if(Ge(i.app))return Promise.reject(It(i));const r=ce(i),o=gr.credentialWithLink(e,n||Pu());return W(o._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),yh(r,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(i,e){return Ye(i,"POST","/v1/accounts:createAuthUri",Ke(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(i,e){const n=Np()?Pu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:o}=await PP(ce(i),r);return o||[]}async function DP(i,e){const n=ce(i),o={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&_h(n.auth,o,e);const{email:u}=await eP(n.auth,o);u!==i.email&&await i.reload()}async function NP(i,e,n){const r=ce(i),u={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};n&&_h(r.auth,u,n);const{email:h}=await iP(r.auth,u);h!==i.email&&await i.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(i,e){return Ye(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(i,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ce(i),u={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},h=await Di(r,OP(r.auth,u));r.displayName=h.displayName||null,r.photoURL=h.photoUrl||null;const f=r.providerData.find(({providerId:g})=>g==="password");f&&(f.displayName=r.displayName,f.photoURL=r.photoURL),await r._updateTokensIfNecessary(h)}function MP(i,e){const n=ce(i);return Ge(n.auth.app)?Promise.reject(It(n.auth)):MI(n,e,null)}function VP(i,e){return MI(ce(i),null,e)}async function MI(i,e,n){const{auth:r}=i,u={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(u.email=e),n&&(u.password=n);const h=await Di(i,J2(r,u));await i._updateTokensIfNecessary(h,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(i){var e,n;if(!i)return null;const{providerId:r}=i,o=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},u=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(i!=null&&i.idToken)){const h=(n=(e=ph(i.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(h){const f=h!=="anonymous"&&h!=="custom"?h:null;return new _o(u,f)}}if(!r)return null;switch(r){case"facebook.com":return new FP(u,o);case"github.com":return new UP(u,o);case"google.com":return new jP(u,o);case"twitter.com":return new BP(u,o,i.screenName||null);case"custom":case"anonymous":return new _o(u,null);default:return new _o(u,r,o)}}class _o{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class VI extends _o{constructor(e,n,r,o){super(e,n,r),this.username=o}}class FP extends _o{constructor(e,n){super(e,"facebook.com",n)}}class UP extends VI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class jP extends _o{constructor(e,n){super(e,"google.com",n)}}class BP extends VI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function qP(i){const{user:e,_tokenResponse:n}=i;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:xP(n)}function HP(i,e,n,r){return ce(i).onIdTokenChanged(e,n,r)}function WP(i,e,n){return ce(i).beforeAuthStateChanged(e,n)}function $P(i,e,n,r){return ce(i).onAuthStateChanged(e,n,r)}function GP(i){return ce(i).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new $r("enroll",e,n)}static _fromMfaPendingCredential(e){return new $r("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return $r._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return $r._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ze(e),o=n.customData._serverResponse,u=(o.mfaInfo||[]).map(f=>Wu._fromServerResponse(r,f));W(o.mfaPendingCredential,r,"internal-error");const h=$r._fromMfaPendingCredential(o.mfaPendingCredential);return new Up(h,u,async f=>{const g=await f._process(r,h);delete o.mfaInfo,delete o.mfaPendingCredential;const y=Object.assign(Object.assign({},o),{idToken:g.idToken,refreshToken:g.refreshToken});switch(n.operationType){case"signIn":const I=await _n._fromIdTokenResponse(r,n.operationType,y);return await r._updateCurrentUser(I.user),I;case"reauthenticate":return W(n.user,r,"internal-error"),_n._forOperation(n.user,n.operationType,y);default:Et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function zP(i,e){var n;const r=ce(i),o=e;return W(e.customData.operationType,r,"argument-error"),W((n=o.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Up._fromError(r,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(i,e){return Ye(i,"POST","/v2/accounts/mfaEnrollment:start",Ke(i,e))}function YP(i,e){return Ye(i,"POST","/v2/accounts/mfaEnrollment:finalize",Ke(i,e))}function JP(i,e){return Ye(i,"POST","/v2/accounts/mfaEnrollment:withdraw",Ke(i,e))}class jp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Wu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new jp(e)}async getSession(){return $r._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,o=await this.getSession(),u=await Di(this.user,r._process(this.user.auth,o,n));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const o=await Di(this.user,JP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==n),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const ff=new WeakMap;function QP(i){const e=ce(i);return ff.has(e)||ff.set(e,jp._fromUser(e)),ff.get(e)}const Yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yl,"1"),this.storage.removeItem(Yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=1e3,ZP=10;class FI extends xI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=II(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!n&&this.localCache[r]===h||this.notifyListeners(r,h)},u=this.storage.getItem(r);O2()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ZP):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}FI.type="LOCAL";const wh=FI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI extends xI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}UI.type="SESSION";const pr=UI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new Ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:u}=n.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const f=Array.from(h).map(async y=>y(n.origin,u)),g=await ek(f);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((f,g)=>{const y=$u("",20);o.port1.start();const I=setTimeout(()=>{g(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(b){const L=b;if(L.data.eventId===y)switch(L.data.status){case"ack":clearTimeout(I),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(L.data.response);break;default:clearTimeout(I),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function nk(i){ot().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rk(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function sk(){return Bp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="firebaseLocalStorageDb",ok=1,Jl="firebaseLocalStorage",BI="fbase_key";class Gu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eh(i,e){return i.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function ak(){const i=indexedDB.deleteDatabase(jI);return new Gu(i).toPromise()}function xf(){const i=indexedDB.open(jI,ok);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(Jl,{keyPath:BI})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(Jl)?e(r):(r.close(),await ak(),e(await xf()))})})}async function F_(i,e,n){const r=Eh(i,!0).put({[BI]:e,value:n});return new Gu(r).toPromise()}async function uk(i,e){const n=Eh(i,!1).get(e),r=await new Gu(n).toPromise();return r===void 0?null:r.value}function U_(i,e){const n=Eh(i,!0).delete(e);return new Gu(n).toPromise()}const ck=800,lk=3;class qI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(sk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ik(),!this.activeServiceWorker)return;this.sender=new tk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xf();return await F_(e,Yl,"1"),await U_(e,Yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>F_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>U_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Eh(o,!1).getAll();return new Gu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qI.type="LOCAL";const Do=qI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(i,e){return Ye(i,"POST","/v2/accounts/mfaSignIn:start",Ke(i,e))}function dk(i,e){return Ye(i,"POST","/v2/accounts/mfaSignIn:finalize",Ke(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=500,pk=6e4,Il=1e12;class mk{constructor(e){this.auth=e,this.counter=Il,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new gk(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Il;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Il;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Il;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class gk{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;W(o,"argument-error",{appName:n}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=vk(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},pk)},fk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function vk(i){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<i;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=bI("rcb"),yk=new ju(3e4,6e4);class _k{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ot().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return W(wk(n),e,"argument-error"),this.shouldResolveImmediately(n)&&P_(ot().grecaptcha)?Promise.resolve(ot().grecaptcha):new Promise((r,o)=>{const u=ot().setTimeout(()=>{o(ft(e,"network-request-failed"))},yk.get());ot()[pf]=()=>{ot().clearTimeout(u),delete ot()[pf];const f=ot().grecaptcha;if(!f||!P_(f)){o(ft(e,"internal-error"));return}const g=f.render;f.render=(y,I)=>{const b=g(y,I);return this.counter++,b},this.hostLanguage=n,r(f)};const h=`${j2()}?${No({onload:pf,render:"explicit",hl:n})}`;Lp(h).catch(()=>{clearTimeout(u),o(ft(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ot().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wk(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class Ik{async load(e){return new mk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="recaptcha",Ek={theme:"light",type:"image"};let bk=class{constructor(e,n,r=Object.assign({},Ek)){this.parameters=r,this.type=HI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ze(e),this.isInvisible=this.parameters.size==="invisible",W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof n=="string"?document.getElementById(n):n;W(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ik:new _k,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(o=>{const u=h=>{h&&(this.tokenChangeListeners.delete(u),o(h))};this.tokenChangeListeners.add(u),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){W(!this.parameters.sitekey,this.auth,"argument-error"),W(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ot()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){W(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){W(Np()&&!Bp(),this.auth,"internal-error"),await Tk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await w2(this.auth);W(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return W(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Tk(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Kr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Ak(i,e,n){if(Ge(i.app))return Promise.reject(It(i));const r=ze(i),o=await bh(r,e,ce(n));return new qp(o,u=>yh(r,u))}async function Sk(i,e,n){const r=ce(i);await vh(!1,r,"phone");const o=await bh(r.auth,e,ce(n));return new qp(o,u=>NI(r,u))}async function Rk(i,e,n){const r=ce(i);if(Ge(r.auth.app))return Promise.reject(It(r.auth));const o=await bh(r.auth,e,ce(n));return new qp(o,u=>OI(r,u))}async function bh(i,e,n){var r;const o=await n.verify();try{W(typeof o=="string",i,"argument-error"),W(n.type===HI,i,"argument-error");let u;if(typeof e=="string"?u={phoneNumber:e}:u=e,"session"in u){const h=u.session;if("phoneNumber"in u)return W(h.type==="enroll",i,"internal-error"),(await KP(i,{idToken:h.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:o}})).phoneSessionInfo.sessionInfo;{W(h.type==="signin",i,"internal-error");const f=((r=u.multiFactorHint)===null||r===void 0?void 0:r.uid)||u.multiFactorUid;return W(f,i,"missing-multi-factor-info"),(await hk(i,{mfaPendingCredential:h.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:h}=await aP(i,{phoneNumber:u.phoneNumber,recaptchaToken:o});return h}}finally{n._reset()}}async function Ck(i,e){const n=ce(i);if(Ge(n.auth.app))return Promise.reject(It(n.auth));await Mp(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es=class Cl{constructor(e){this.providerId=Cl.PROVIDER_ID,this.auth=ze(e)}verifyPhoneNumber(e,n){return bh(this.auth,e,ce(n))}static credential(e,n){return Kr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Cl.credentialFromTaggedObject(n)}static credentialFromError(e){return Cl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Kr._fromTokenResponse(n,r):null}};es.PROVIDER_ID="phone";es.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(i,e){return e?on(e):(W(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp extends Fo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pk(i){return DI(i.auth,new Hp(i),i.bypassAuthState)}function kk(i){const{auth:e,user:n}=i;return W(n,e,"internal-error"),kI(n,new Hp(i),i.bypassAuthState)}async function Dk(i){const{auth:e,user:n}=i;return W(n,e,"internal-error"),Mp(n,new Hp(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n,r,o,u=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:u,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:n,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pk;case"linkViaPopup":case"linkViaRedirect":return Dk;case"reauthViaPopup":case"reauthViaRedirect":return kk;default:Et(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new ju(2e3,1e4);async function Ok(i,e,n){if(Ge(i.app))return Promise.reject(ft(i,"operation-not-supported-in-this-environment"));const r=ze(i);xo(i,e,Mi);const o=rs(r,n);return new Ti(r,"signInViaPopup",e,o).executeNotNull()}async function Lk(i,e,n){const r=ce(i);if(Ge(r.auth.app))return Promise.reject(ft(r.auth,"operation-not-supported-in-this-environment"));xo(r.auth,e,Mi);const o=rs(r.auth,n);return new Ti(r.auth,"reauthViaPopup",e,o,r).executeNotNull()}async function Mk(i,e,n){const r=ce(i);xo(r.auth,e,Mi);const o=rs(r.auth,n);return new Ti(r.auth,"linkViaPopup",e,o,r).executeNotNull()}class Ti extends WI{constructor(e,n,r,o,u){super(e,n,o,u),this.provider=r,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=$u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nk.get())};e()}}Ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="pendingRedirect",gu=new Map;class xk extends WI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gu.get(this.auth._key());if(!e){try{const r=await Fk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gu.set(this.auth._key(),e)}return this.bypassAuthState||gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fk(i,e){const n=GI(e),r=$I(i);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}async function Wp(i,e){return $I(i)._set(GI(e),"true")}function Uk(){gu.clear()}function $p(i,e){gu.set(i._key(),e)}function $I(i){return on(i._redirectPersistence)}function GI(i){return zr(Vk,i.config.apiKey,i.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(i,e,n){return Bk(i,e,n)}async function Bk(i,e,n){if(Ge(i.app))return Promise.reject(It(i));const r=ze(i);xo(i,e,Mi),await r._initializationPromise;const o=rs(r,n);return await Wp(o,r),o._openRedirect(r,e,"signInViaRedirect")}function qk(i,e,n){return Hk(i,e,n)}async function Hk(i,e,n){const r=ce(i);if(xo(r.auth,e,Mi),Ge(r.auth.app))return Promise.reject(It(r.auth));await r.auth._initializationPromise;const o=rs(r.auth,n);await Wp(o,r.auth);const u=await zI(r);return o._openRedirect(r.auth,e,"reauthViaRedirect",u)}function Wk(i,e,n){return $k(i,e,n)}async function $k(i,e,n){const r=ce(i);xo(r.auth,e,Mi),await r.auth._initializationPromise;const o=rs(r.auth,n);await vh(!1,r,e.providerId),await Wp(o,r.auth);const u=await zI(r);return o._openRedirect(r.auth,e,"linkViaRedirect",u)}async function Gk(i,e){return await ze(i)._initializationPromise,Th(i,e,!1)}async function Th(i,e,n=!1){if(Ge(i.app))return Promise.reject(It(i));const r=ze(i),o=rs(r,e),h=await new xk(r,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}async function zI(i){const e=$u(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=10*60*1e3;class KI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!YI(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ft(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zk&&this.cachedEventUids.clear(),this.cachedEventUids.has(j_(e))}saveEventToCache(e){this.cachedEventUids.add(j_(e)),this.lastProcessedEventTime=Date.now()}}function j_(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function YI({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kk(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YI(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(i,e={}){return Ye(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jk=/^https?/;async function Qk(i){if(i.config.emulator)return;const{authorizedDomains:e}=await JI(i);for(const n of e)try{if(Xk(n))return}catch{}Et(i,"unauthorized-domain")}function Xk(i){const e=Pu(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===r}if(!Jk.test(n))return!1;if(Yk.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new ju(3e4,6e4);function B_(){const i=ot().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function eD(i){return new Promise((e,n)=>{var r,o,u;function h(){B_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{B_(),n(ft(i,"network-request-failed"))},timeout:Zk.get()})}if(!((o=(r=ot().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=ot().gapi)===null||u===void 0)&&u.load)h();else{const f=bI("iframefcb");return ot()[f]=()=>{gapi.load?h():n(ft(i,"network-request-failed"))},Lp(`${q2()}?onload=${f}`).catch(g=>n(g))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function tD(i){return Pl=Pl||eD(i),Pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new ju(5e3,15e3),iD="__/auth/iframe",rD="emulator/auth/iframe",sD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aD(i){const e=i.config;W(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Op(e,rD):`https://${i.config.authDomain}/${iD}`,r={apiKey:e.apiKey,appName:i.name,v:mr},o=oD.get(i.config.apiHost);o&&(r.eid=o);const u=i._getFrameworks();return u.length&&(r.fw=u.join(",")),`${n}?${No(r).slice(1)}`}async function uD(i){const e=await tD(i),n=ot().gapi;return W(n,i,"internal-error"),e.open({where:document.body,url:aD(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sD,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const h=ft(i,"network-request-failed"),f=ot().setTimeout(()=>{u(h)},nD.get());function g(){ot().clearTimeout(f),o(r)}r.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lD=500,hD=600,dD="_blank",fD="http://localhost";class q_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pD(i,e,n,r=lD,o=hD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const g=Object.assign(Object.assign({},cD),{width:r.toString(),height:o.toString(),top:u,left:h}),y=at().toLowerCase();n&&(f=vI(y)?dD:n),mI(y)&&(e=e||fD,g.scrollbars="yes");const I=Object.entries(g).reduce((L,[x,z])=>`${L}${x}=${z},`,"");if(N2(y)&&f!=="_self")return mD(e||"",f),new q_(null);const b=window.open(e||"",f,I);W(b,i,"popup-blocked");try{b.focus()}catch{}return new q_(b)}function mD(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="__/auth/handler",vD="emulator/auth/handler",yD=encodeURIComponent("fac");async function Ff(i,e,n,r,o,u){W(i.config.authDomain,i,"auth-domain-config-required"),W(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:mr,eventId:o};if(e instanceof Mi){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",f1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,b]of Object.entries(u||{}))h[I]=b}if(e instanceof Uo){const I=e.getScopes().filter(b=>b!=="");I.length>0&&(h.scopes=I.join(","))}i.tenantId&&(h.tid=i.tenantId);const f=h;for(const I of Object.keys(f))f[I]===void 0&&delete f[I];const g=await i._getAppCheckToken(),y=g?`#${yD}=${encodeURIComponent(g)}`:"";return`${_D(i)}?${No(f).slice(1)}${y}`}function _D({config:i}){return i.emulator?Op(i,vD):`https://${i.authDomain}/${gD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="webStorageSupport";class wD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pr,this._completeRedirectFn=Th,this._overrideRedirectResult=$p}async _openPopup(e,n,r,o){var u;Ln((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Ff(e,n,r,Pu(),o);return pD(e,h,$u())}async _openRedirect(e,n,r,o){await this._originValidation(e);const u=await Ff(e,n,r,Pu(),o);return nk(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Ln(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uD(e),r=new KI(e);return n.register("authEvent",o=>(W(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mf,{type:mf},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[mf];h!==void 0&&n(!!h),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return II()||gI()||qu()}}const QI=wD;class ID{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Zn("unexpected MultiFactorSessionType")}}}class Gp extends ID{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Gp(e)}_finalizeEnroll(e,n,r){return YP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return dk(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class XI{constructor(){}static assertion(e){return Gp._fromCredential(e)}}XI.FACTOR_ID="phone";var H_="@firebase/auth",W_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TD(i){yn(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=r.options;W(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:h,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:EI(i)},y=new F2(r,o,u,g);return z2(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yn(new un("auth-internal",e=>{const n=ze(e.getProvider("auth").getImmediate());return(r=>new ED(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(H_,W_,bD(i)),jt(H_,W_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=5*60,SD=rw("authIdTokenMaxAge")||AD;let $_=null;const RD=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SD)return;const o=n==null?void 0:n.token;$_!==o&&($_=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function CD(i=Zl()){const e=Oi(i,"auth");if(e.isInitialized())return e.getImmediate();const n=G2(i,{popupRedirectResolver:QI,persistence:[Do,wh,pr]}),r=rw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const h=RD(u.toString());WP(n,h,()=>h(n.currentUser)),HP(n,f=>h(f))}}const o=nw("auth");return o&&TI(n,`http://${o}`),n}function PD(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}U2({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=o=>{const u=ft("internal-error");u.customData=o,n(u)},r.type="text/javascript",r.charset="UTF-8",PD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TD("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n){this._delegate=e,this.firebase=n,wu(e,new un("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Yf(this._delegate)))}_getService(e,n=cr){var r;this._delegate.checkDestroyed();const o=this._delegate.container.getProvider(e);return!o.isInitialized()&&((r=o.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&o.initialize(),o.getImmediate({identifier:n})}_removeServiceInstance(e,n=cr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){wu(this._delegate,e)}_addOrOverwriteComponent(e){pw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},G_=new Ni("app-compat","Firebase",DD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(i){const e={},n={__esModule:!0,initializeApp:u,app:o,registerVersion:jt,setLogLevel:yw,onLog:vw,apps:null,SDK_VERSION:mr,INTERNAL:{registerComponent:f,removeApp:r,useAsService:g,modularAPIs:PT}};n.default=n,Object.defineProperty(n,"apps",{get:h});function r(y){delete e[y]}function o(y){if(y=y||cr,!Cy(e,y))throw G_.create("no-app",{appName:y});return e[y]}o.App=i;function u(y,I={}){const b=Xl(y,I);if(Cy(e,b.name))return e[b.name];const L=new i(b,n);return e[b.name]=L,L}function h(){return Object.keys(e).map(y=>e[y])}function f(y){const I=y.name,b=I.replace("-compat","");if(yn(y)&&y.type==="PUBLIC"){const L=(x=o())=>{if(typeof x[b]!="function")throw G_.create("invalid-app-argument",{appName:I});return x[b]()};y.serviceProps!==void 0&&Ol(L,y.serviceProps),n[b]=L,i.prototype[b]=function(...x){return this._getService.bind(this,I).apply(this,y.multipleInstances?x:[])}}return y.type==="PUBLIC"?n[b]:null}function g(y,I){return I==="serverAuth"?null:I}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(){const i=ND(kD);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:ZI,extendNamespace:e,createSubscribe:uw,ErrorFactory:Ni,deepExtend:Ol});function e(n){Ol(i,n)}return i}const OD=ZI();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=new Ou("@firebase/app-compat"),LD="@firebase/app-compat",MD="0.2.43";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(i){jt(LD,MD,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const i=tw();if(i.firebase!==void 0){z_.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&z_.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Z=OD;VD();var xD="firebase",FD="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Z.registerVersion(xD,FD,"app-compat");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=2e3;async function jD(i,e,n){var r;const{BuildInfo:o}=ts();Ln(e.sessionId,"AuthEvent did not contain a session ID");const u=await $D(e.sessionId),h={};return qu()?h.ibi=o.packageName:Bu()?h.apn=o.packageName:Et(i,"operation-not-supported-in-this-environment"),o.displayName&&(h.appDisplayName=o.displayName),h.sessionId=u,Ff(i,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,h)}async function BD(i){const{BuildInfo:e}=ts(),n={};qu()?n.iosBundleId=e.packageName:Bu()?n.androidPackageName=e.packageName:Et(i,"operation-not-supported-in-this-environment"),await JI(i,n)}function qD(i){const{cordova:e}=ts();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let o=null;r?e.plugins.browsertab.openUrl(i):o=e.InAppBrowser.open(i,D2()?"_blank":"_system","location=yes"),n(o)})})}async function HD(i,e,n){const{cordova:r}=ts();let o=()=>{};try{await new Promise((u,h)=>{let f=null;function g(){var b;u();const L=(b=r.plugins.browsertab)===null||b===void 0?void 0:b.close;typeof L=="function"&&L(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function y(){f||(f=window.setTimeout(()=>{h(ft(i,"redirect-cancelled-by-user"))},UD))}function I(){(document==null?void 0:document.visibilityState)==="visible"&&y()}e.addPassiveListener(g),document.addEventListener("resume",y,!1),Bu()&&document.addEventListener("visibilitychange",I,!1),o=()=>{e.removePassiveListener(g),document.removeEventListener("resume",y,!1),document.removeEventListener("visibilitychange",I,!1),f&&window.clearTimeout(f)}})}finally{o()}}function WD(i){var e,n,r,o,u,h,f,g,y,I;const b=ts();W(typeof((e=b==null?void 0:b.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),W(typeof((n=b==null?void 0:b.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),W(typeof((u=(o=(r=b==null?void 0:b.cordova)===null||r===void 0?void 0:r.plugins)===null||o===void 0?void 0:o.browsertab)===null||u===void 0?void 0:u.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),W(typeof((g=(f=(h=b==null?void 0:b.cordova)===null||h===void 0?void 0:h.plugins)===null||f===void 0?void 0:f.browsertab)===null||g===void 0?void 0:g.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),W(typeof((I=(y=b==null?void 0:b.cordova)===null||y===void 0?void 0:y.InAppBrowser)===null||I===void 0?void 0:I.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function $D(i){const e=GD(i),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(o=>o.toString(16).padStart(2,"0")).join("")}function GD(i){if(Ln(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),n=new Uint8Array(e);for(let r=0;r<i.length;r++)n[r]=i.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=20;class KD extends KI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function YD(i,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:XD(),postBody:null,tenantId:i.tenantId,error:ft(i,"no-auth-event")}}function JD(i,e){return Uf()._set(jf(i),e)}async function K_(i){const e=await Uf()._get(jf(i));return e&&await Uf()._remove(jf(i)),e}function QD(i,e){var n,r;const o=eN(e);if(o.includes("/__/auth/callback")){const u=kl(o),h=u.firebaseError?ZD(decodeURIComponent(u.firebaseError)):null,f=(r=(n=h==null?void 0:h.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],g=f?ft(f):null;return g?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:g,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:o,postBody:null}}return null}function XD(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<zD;n++){const r=Math.floor(Math.random()*e.length);i.push(e.charAt(r))}return i.join("")}function Uf(){return on(wh)}function jf(i){return zr("authEvent",i.config.apiKey,i.name)}function ZD(i){try{return JSON.parse(i)}catch{return null}}function eN(i){const e=kl(i),n=e.link?decodeURIComponent(e.link):void 0,r=kl(n).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return kl(o).link||o||r||n||i}function kl(i){if(!(i!=null&&i.includes("?")))return{};const[e,...n]=i.split("?");return po(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=500;class nN{constructor(){this._redirectPersistence=pr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Th,this._overrideRedirectResult=$p}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new KD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,o){WD(e);const u=await this._initialize(e);await u.initialized(),u.resetRedirect(),Uk(),await this._originValidation(e);const h=YD(e,r,o);await JD(e,h);const f=await jD(e,h,n),g=await qD(f);return HD(e,u,g)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BD(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:o,BuildInfo:u}=ts(),h=setTimeout(async()=>{await K_(e),n.onEvent(Y_())},tN),f=async I=>{clearTimeout(h);const b=await K_(e);let L=null;b&&(I!=null&&I.url)&&(L=QD(b,I.url)),n.onEvent(L||Y_())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,f);const g=o,y=`${u.packageName.toLowerCase()}://`;ts().handleOpenURL=async I=>{if(I.toLowerCase().startsWith(y)&&f({url:I}),typeof g=="function")try{g(I)}catch(b){console.error(b)}}}}const iN=nN;function Y_(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ft("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(i,e){ze(i)._logFramework(e)}var sN="@firebase/auth-compat",oN="0.5.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=1e3;function vu(){var i;return((i=self==null?void 0:self.location)===null||i===void 0?void 0:i.protocol)||null}function uN(){return vu()==="http:"||vu()==="https:"}function eE(i=at()){return!!((vu()==="file:"||vu()==="ionic:"||vu()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function cN(){return Gf()||Wf()}function lN(){return ow()&&(document==null?void 0:document.documentMode)===11}function hN(i=at()){return/Edge\/\d+/.test(i)}function dN(i=at()){return lN()||hN(i)}function tE(){try{const i=self.localStorage,e=$u();if(i)return i.setItem(e,"1"),i.removeItem(e),dN()?yu():!0}catch{return zp()&&yu()}return!1}function zp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function gf(){return(uN()||$f()||eE())&&!cN()&&tE()&&!zp()}function nE(){return eE()&&typeof document<"u"}async function fN(){return nE()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},aN);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function pN(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={LOCAL:"local",NONE:"none",SESSION:"session"},iu=W,iE="persistence";function mN(i,e){if(iu(Object.values(sn).includes(e),i,"invalid-persistence-type"),Gf()){iu(e!==sn.SESSION,i,"unsupported-persistence-type");return}if(Wf()){iu(e===sn.NONE,i,"unsupported-persistence-type");return}if(zp()){iu(e===sn.NONE||e===sn.LOCAL&&yu(),i,"unsupported-persistence-type");return}iu(e===sn.NONE||tE(),i,"unsupported-persistence-type")}async function Bf(i){await i._initializationPromise;const e=rE(),n=zr(iE,i.config.apiKey,i.name);e&&e.setItem(n,i._getPersistence())}function gN(i,e){const n=rE();if(!n)return[];const r=zr(iE,i,e);switch(n.getItem(r)){case sn.NONE:return[Po];case sn.LOCAL:return[Do,pr];case sn.SESSION:return[pr];default:return[]}}function rE(){var i;try{return((i=pN())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=W;class sr{constructor(){this.browserResolver=on(QI),this.cordovaResolver=on(iN),this.underlyingResolver=null,this._redirectPersistence=pr,this._completeRedirectFn=Th,this._overrideRedirectResult=$p}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,o)}async _openRedirect(e,n,r,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,o)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return nE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return vN(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await fN();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(i){return i.unwrap()}function yN(i){return i.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(i){return oE(i)}function wN(i,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const o=e;o.resolver=new IN(i,zP(i,e))}else if(r){const o=oE(e),u=e;o&&(u.credential=o,u.tenantId=r.tenantId||void 0,u.email=r.email||void 0,u.phoneNumber=r.phoneNumber||void 0)}}function oE(i){const{_tokenResponse:e}=i instanceof Nt?i.customData:i;if(!e)return null;if(!(i instanceof Nt)&&"temporaryProof"in e&&"phoneNumber"in e)return es.credentialFromResult(i);const n=e.providerId;if(!n||n===nu.PASSWORD)return null;let r;switch(n){case nu.GOOGLE:r=Jn;break;case nu.FACEBOOK:r=Yn;break;case nu.GITHUB:r=Qn;break;case nu.TWITTER:r=Xn;break;default:const{oauthIdToken:o,oauthAccessToken:u,oauthTokenSecret:h,pendingToken:f,nonce:g}=e;return!u&&!h&&!o&&!f?null:f?n.startsWith("saml.")?ko._create(n,f):ri._fromParams({providerId:n,signInMethod:n,pendingToken:f,idToken:o,accessToken:u}):new yo(n).credential({idToken:o,accessToken:u,rawNonce:g})}return i instanceof Nt?r.credentialFromError(i):r.credentialFromResult(i)}function Jt(i,e){return e.catch(n=>{throw n instanceof Nt&&wN(i,n),n}).then(n=>{const r=n.operationType,o=n.user;return{operationType:r,credential:_N(n),additionalUserInfo:qP(n),user:Ai.getOrCreate(o)}})}async function qf(i,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Jt(i,n.confirm(r))}}class IN{constructor(e,n){this.resolver=n,this.auth=yN(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Jt(sE(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this._delegate=e,this.multiFactor=QP(e)}static getOrCreate(e){return Ai.USER_MAP.has(e)||Ai.USER_MAP.set(e,new Ai(e)),Ai.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Jt(this.auth,NI(this._delegate,e))}async linkWithPhoneNumber(e,n){return qf(this.auth,Sk(this._delegate,e,n))}async linkWithPopup(e){return Jt(this.auth,Mk(this._delegate,e,sr))}async linkWithRedirect(e){return await Bf(ze(this.auth)),Wk(this._delegate,e,sr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Jt(this.auth,OI(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return qf(this.auth,Rk(this._delegate,e,n))}reauthenticateWithPopup(e){return Jt(this.auth,Lk(this._delegate,e,sr))}async reauthenticateWithRedirect(e){return await Bf(ze(this.auth)),qk(this._delegate,e,sr)}sendEmailVerification(e){return DP(this._delegate,e)}async unlink(e){return await vP(this._delegate,e),this}updateEmail(e){return MP(this._delegate,e)}updatePassword(e){return VP(this._delegate,e)}updatePhoneNumber(e){return Ck(this._delegate,e)}updateProfile(e){return LP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return NP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ai.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=W;class Hf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ru(r,"invalid-api-key",{appName:e.name}),ru(r,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?sr:void 0;this._delegate=n.initialize({options:{persistence:EN(r,e.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(l2),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ai.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){TI(this._delegate,e,n)}applyActionCode(e){return EP(this._delegate,e)}checkActionCode(e){return LI(this._delegate,e)}confirmPasswordReset(e,n){return IP(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Jt(this._delegate,TP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return kP(this._delegate,e)}isSignInWithEmailLink(e){return RP(this._delegate,e)}async getRedirectResult(){ru(gf(),this._delegate,"operation-not-supported-in-this-environment");const e=await Gk(this._delegate,sr);return e?Jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){rN(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:o,error:u,complete:h}=J_(e,n,r);return this._delegate.onAuthStateChanged(o,u,h)}onIdTokenChanged(e,n,r){const{next:o,error:u,complete:h}=J_(e,n,r);return this._delegate.onIdTokenChanged(o,u,h)}sendSignInLinkToEmail(e,n){return SP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return wP(this._delegate,e,n||void 0)}async setPersistence(e){mN(this._delegate,e);let n;switch(e){case sn.SESSION:n=pr;break;case sn.LOCAL:n=await on(Do)._isAvailable()?Do:wh;break;case sn.NONE:n=Po;break;default:return Et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Jt(this._delegate,gP(this._delegate))}signInWithCredential(e){return Jt(this._delegate,yh(this._delegate,e))}signInWithCustomToken(e){return Jt(this._delegate,_P(this._delegate,e))}signInWithEmailAndPassword(e,n){return Jt(this._delegate,AP(this._delegate,e,n))}signInWithEmailLink(e,n){return Jt(this._delegate,CP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return qf(this._delegate,Ak(this._delegate,e,n))}async signInWithPopup(e){return ru(gf(),this._delegate,"operation-not-supported-in-this-environment"),Jt(this._delegate,Ok(this._delegate,e,sr))}async signInWithRedirect(e){return ru(gf(),this._delegate,"operation-not-supported-in-this-environment"),await Bf(this._delegate),jk(this._delegate,e,sr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return bP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Hf.Persistence=sn;function J_(i,e,n){let r=i;typeof i!="function"&&({next:r,error:e,complete:n}=i);const o=r;return{next:h=>o(h&&Ai.getOrCreate(h)),error:e,complete:n}}function EN(i,e){const n=gN(i,e);if(typeof self<"u"&&!n.includes(Do)&&n.push(Do),typeof window<"u")for(const r of[wh,pr])n.includes(r)||n.push(r);return n.includes(Po)||n.push(Po),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.providerId="phone",this._delegate=new es(sE(Z.auth()))}static credential(e,n){return es.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Kp.PHONE_SIGN_IN_METHOD=es.PHONE_SIGN_IN_METHOD;Kp.PROVIDER_ID=es.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=W;class TN{constructor(e,n,r=Z.app()){var o;bN((o=r.options)===null||o===void 0?void 0:o.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new bk(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="auth-compat";function SN(i){i.INTERNAL.registerComponent(new un(AN,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Hf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:co.EMAIL_SIGNIN,PASSWORD_RESET:co.PASSWORD_RESET,RECOVER_EMAIL:co.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:co.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:co.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:co.VERIFY_EMAIL}},EmailAuthProvider:gr,FacebookAuthProvider:Yn,GithubAuthProvider:Qn,GoogleAuthProvider:Jn,OAuthProvider:yo,SAMLAuthProvider:zl,PhoneAuthProvider:Kp,PhoneMultiFactorGenerator:XI,RecaptchaVerifier:TN,TwitterAuthProvider:Xn,Auth:Hf,AuthCredential:Fo,Error:Nt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(sN,oN)}SN(Z);function RN(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var aE={exports:{}};(function(i){(function(){var e=window.CustomEvent;(!e||typeof e=="object")&&(e=function(D,F){F=F||{};var $=document.createEvent("CustomEvent");return $.initCustomEvent(D,!!F.bubbles,!!F.cancelable,F.detail||null),$},e.prototype=window.Event.prototype);function n(E){for(;E&&E!==document.body;){var D=window.getComputedStyle(E),F=function($,Y){return!(D[$]===void 0||D[$]===Y)};if(D.opacity<1||F("zIndex","auto")||F("transform","none")||F("mixBlendMode","normal")||F("filter","none")||F("perspective","none")||D.isolation==="isolate"||D.position==="fixed"||D.webkitOverflowScrolling==="touch")return!0;E=E.parentElement}return!1}function r(E){for(;E;){if(E.localName==="dialog")return E;E=E.parentElement}return null}function o(E){E&&E.blur&&E!==document.body&&E.blur()}function u(E,D){for(var F=0;F<E.length;++F)if(E[F]===D)return!0;return!1}function h(E){return!E||!E.hasAttribute("method")?!1:E.getAttribute("method").toLowerCase()==="dialog"}function f(E){if(this.dialog_=E,this.replacedStyleTop_=!1,this.openAsModal_=!1,E.hasAttribute("role")||E.setAttribute("role","dialog"),E.show=this.show.bind(this),E.showModal=this.showModal.bind(this),E.close=this.close.bind(this),"returnValue"in E||(E.returnValue=""),"MutationObserver"in window){var D=new MutationObserver(this.maybeHideModal.bind(this));D.observe(E,{attributes:!0,attributeFilter:["open"]})}else{var F=!1,$=(function(){F?this.downgradeModal():this.maybeHideModal(),F=!1}).bind(this),Y,re=function(pe){if(pe.target===E){var he="DOMNodeRemoved";F|=pe.type.substr(0,he.length)===he,window.clearTimeout(Y),Y=window.setTimeout($,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(pe){E.addEventListener(pe,re)})}Object.defineProperty(E,"open",{set:this.setOpen.bind(this),get:E.hasAttribute.bind(E,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}f.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),g.dm.removeDialog(this))},setOpen:function(E){E?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(E){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var D=document.createElement("div");this.dialog_.insertBefore(D,this.dialog_.firstChild),D.tabIndex=-1,D.focus(),this.dialog_.removeChild(D)}var F=document.createEvent("MouseEvents");F.initMouseEvent(E.type,E.bubbles,E.cancelable,window,E.detail,E.screenX,E.screenY,E.clientX,E.clientY,E.ctrlKey,E.altKey,E.shiftKey,E.metaKey,E.button,E.relatedTarget),this.dialog_.dispatchEvent(F),E.stopPropagation()},focus_:function(){var E=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!E&&this.dialog_.tabIndex>=0&&(E=this.dialog_),!E){var D=["button","input","keygen","select","textarea"],F=D.map(function($){return $+":not([disabled])"});F.push('[tabindex]:not([disabled]):not([tabindex=""])'),E=this.dialog_.querySelector(F.join(", "))}o(document.activeElement),E&&E.focus()},updateZIndex:function(E,D){if(E<D)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=E,this.backdrop_.style.zIndex=D},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!g.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");n(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,g.needsCentering(this.dialog_)?(g.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(E){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),E!==void 0&&(this.dialog_.returnValue=E);var D=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(D)}};var g={};if(g.reposition=function(E){var D=document.body.scrollTop||document.documentElement.scrollTop,F=D+(window.innerHeight-E.offsetHeight)/2;E.style.top=Math.max(D,F)+"px"},g.isInlinePositionSetByStylesheet=function(E){for(var D=0;D<document.styleSheets.length;++D){var F=document.styleSheets[D],$=null;try{$=F.cssRules}catch{}if($)for(var Y=0;Y<$.length;++Y){var re=$[Y],pe=null;try{pe=document.querySelectorAll(re.selectorText)}catch{}if(!(!pe||!u(pe,E))){var he=re.style.getPropertyValue("top"),P=re.style.getPropertyValue("bottom");if(he&&he!=="auto"||P&&P!=="auto")return!0}}}return!1},g.needsCentering=function(E){var D=window.getComputedStyle(E);return D.position!=="absolute"||E.style.top!=="auto"&&E.style.top!==""||E.style.bottom!=="auto"&&E.style.bottom!==""?!1:!g.isInlinePositionSetByStylesheet(E)},g.forceRegisterDialog=function(E){if((window.HTMLDialogElement||E.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",E),E.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new f(E)},g.registerDialog=function(E){E.showModal||g.forceRegisterDialog(E)},g.DialogManager=function(){this.pendingDialogStack=[];var E=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(D){this.forwardTab_=void 0,D.stopPropagation(),E([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(D){var F=[];D.forEach(function($){for(var Y=0,re;re=$.removedNodes[Y];++Y){if(re instanceof Element)re.localName==="dialog"&&F.push(re);else continue;F=F.concat(re.querySelectorAll("dialog"))}}),F.length&&E(F)}))},g.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},g.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},g.DialogManager.prototype.updateStacking=function(){for(var E=this.zIndexHigh_,D=0,F;F=this.pendingDialogStack[D];++D)F.updateZIndex(--E,--E),D===0&&(this.overlay.style.zIndex=--E);var $=this.pendingDialogStack[0];if($){var Y=$.dialog.parentNode||document.body;Y.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},g.DialogManager.prototype.containedByTopDialog_=function(E){for(;E=r(E);){for(var D=0,F;F=this.pendingDialogStack[D];++D)if(F.dialog===E)return D===0;E=E.parentElement}return!1},g.DialogManager.prototype.handleFocus_=function(E){if(!this.containedByTopDialog_(E.target)&&(E.preventDefault(),E.stopPropagation(),o(E.target),this.forwardTab_!==void 0)){var D=this.pendingDialogStack[0],F=D.dialog,$=F.compareDocumentPosition(E.target);return $&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?D.focus_():document.documentElement.focus()),!1}},g.DialogManager.prototype.handleKey_=function(E){if(this.forwardTab_=void 0,E.keyCode===27){E.preventDefault(),E.stopPropagation();var D=new e("cancel",{bubbles:!1,cancelable:!0}),F=this.pendingDialogStack[0];F&&F.dialog.dispatchEvent(D)&&F.dialog.close()}else E.keyCode===9&&(this.forwardTab_=!E.shiftKey)},g.DialogManager.prototype.checkDOM_=function(E){var D=this.pendingDialogStack.slice();D.forEach(function(F){E.indexOf(F.dialog)!==-1?F.downgradeModal():F.maybeHideModal()})},g.DialogManager.prototype.pushDialog=function(E){var D=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=D?!1:(this.pendingDialogStack.unshift(E)===1&&this.blockDocument(),this.updateStacking(),!0)},g.DialogManager.prototype.removeDialog=function(E){var D=this.pendingDialogStack.indexOf(E);D!==-1&&(this.pendingDialogStack.splice(D,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())},g.dm=new g.DialogManager,g.formSubmitter=null,g.useValue=null,window.HTMLDialogElement===void 0){var y=document.createElement("form");if(y.setAttribute("method","dialog"),y.method!=="dialog"){var I=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(I){var b=I.get;I.get=function(){return h(this)?"dialog":b.call(this)};var L=I.set;I.set=function(E){return typeof E=="string"&&E.toLowerCase()==="dialog"?this.setAttribute("method",E):L.call(this,E)},Object.defineProperty(HTMLFormElement.prototype,"method",I)}}document.addEventListener("click",function(E){if(g.formSubmitter=null,g.useValue=null,!E.defaultPrevented){var D=E.target;if(!(!D||!h(D.form))){var F=D.type==="submit"&&["button","input"].indexOf(D.localName)>-1;if(!F){if(!(D.localName==="input"&&D.type==="image"))return;g.useValue=E.offsetX+","+E.offsetY}var $=r(D);$&&(g.formSubmitter=D)}}},!1);var x=HTMLFormElement.prototype.submit,z=function(){if(!h(this))return x.call(this);var E=r(this);E&&E.close()};HTMLFormElement.prototype.submit=z,document.addEventListener("submit",function(E){var D=E.target;if(h(D)){E.preventDefault();var F=r(D);if(F){var $=g.formSubmitter;$&&$.form===D?F.close(g.useValue||$.value):F.close(),g.formSubmitter=null}}},!0)}g.forceRegisterDialog=g.forceRegisterDialog,g.registerDialog=g.registerDialog,typeof i.exports=="object"?i.exports=g:window.dialogPolyfill=g})()})(aE);var CN=aE.exports;const PN=RN(CN);/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe={upgradeDom:function(i,e){},upgradeElement:function(i,e){},upgradeElements:function(i){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(i,e){},register:function(i){},downgradeElements:function(i){}};qe=function(){var i=[],e=[],n="mdlComponentConfigInternal_";function r(E,D){for(var F=0;F<i.length;F++)if(i[F].className===E)return typeof D<"u"&&(i[F]=D),i[F];return!1}function o(E){var D=E.getAttribute("data-upgraded");return D===null?[""]:D.split(",")}function u(E,D){var F=o(E);return F.indexOf(D)!==-1}function h(E,D,F){if("CustomEvent"in window&&typeof window.CustomEvent=="function")return new CustomEvent(E,{bubbles:D,cancelable:F});var $=document.createEvent("Events");return $.initEvent(E,D,F),$}function f(E,D){if(typeof E>"u"&&typeof D>"u")for(var F=0;F<i.length;F++)f(i[F].className,i[F].cssClass);else{var $=E;if(typeof D>"u"){var Y=r($);Y&&(D=Y.cssClass)}for(var re=document.querySelectorAll("."+D),pe=0;pe<re.length;pe++)g(re[pe],$)}}function g(E,D){if(!(typeof E=="object"&&E instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var F=h("mdl-componentupgrading",!0,!0);if(E.dispatchEvent(F),!F.defaultPrevented){var $=o(E),Y=[];if(D)u(E,D)||Y.push(r(D));else{var re=E.classList;i.forEach(function(N){re.contains(N.cssClass)&&Y.indexOf(N)===-1&&!u(E,N.className)&&Y.push(N)})}for(var pe=0,he=Y.length,P;pe<he;pe++){if(P=Y[pe],P){$.push(P.className),E.setAttribute("data-upgraded",$.join(","));var S=new P.classConstructor(E);S[n]=P,e.push(S);for(var R=0,k=P.callbacks.length;R<k;R++)P.callbacks[R](E);P.widget&&(E[P.className]=S)}else throw new Error("Unable to find a registered component for the given class.");var C=h("mdl-componentupgraded",!0,!1);E.dispatchEvent(C)}}}function y(E){Array.isArray(E)||(E instanceof Element?E=[E]:E=Array.prototype.slice.call(E));for(var D=0,F=E.length,$;D<F;D++)$=E[D],$ instanceof HTMLElement&&(g($),$.children.length>0&&y($.children))}function I(E){var D=typeof E.widget>"u"&&typeof E.widget>"u",F=!0;D||(F=E.widget||E.widget);var $={classConstructor:E.constructor||E.constructor,className:E.classAsString||E.classAsString,cssClass:E.cssClass||E.cssClass,widget:F,callbacks:[]};if(i.forEach(function(re){if(re.cssClass===$.cssClass)throw new Error("The provided cssClass has already been registered: "+re.cssClass);if(re.className===$.className)throw new Error("The provided className has already been registered")}),E.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");var Y=r(E.classAsString,$);Y||i.push($)}function b(E,D){var F=r(E);F&&F.callbacks.push(D)}function L(){for(var E=0;E<i.length;E++)f(i[E].className)}function x(E){if(E){var D=e.indexOf(E);e.splice(D,1);var F=E.element_.getAttribute("data-upgraded").split(","),$=F.indexOf(E[n].classAsString);F.splice($,1),E.element_.setAttribute("data-upgraded",F.join(","));var Y=h("mdl-componentdowngraded",!0,!1);E.element_.dispatchEvent(Y)}}function z(E){var D=function($){e.filter(function(Y){return Y.element_===$}).forEach(x)};if(E instanceof Array||E instanceof NodeList)for(var F=0;F<E.length;F++)D(E[F]);else if(E instanceof Node)D(E);else throw new Error("Invalid argument provided to downgrade MDL nodes.")}return{upgradeDom:f,upgradeElement:g,upgradeElements:y,upgradeAllRegistered:L,registerUpgradedCallback:b,register:I,downgradeElements:z}}();qe.ComponentConfigPublic;qe.ComponentConfig;qe.Component;qe.upgradeDom=qe.upgradeDom;qe.upgradeElement=qe.upgradeElement;qe.upgradeElements=qe.upgradeElements;qe.upgradeAllRegistered=qe.upgradeAllRegistered;qe.registerUpgradedCallback=qe.registerUpgradedCallback;qe.register=qe.register;qe.downgradeElements=qe.downgradeElements;window.componentHandler=qe;window.componentHandler=qe;window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),qe.upgradeAllRegistered()):(qe.upgradeElement=function(){},qe.register=function(){})});/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(n){this.element_=n,this.init()};window.MaterialButton=i,i.prototype.Constant_={},i.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},i.prototype.blurHandler_=function(e){e&&this.element_.blur()},i.prototype.disable=function(){this.element_.disabled=!0},i.prototype.disable=i.prototype.disable,i.prototype.enable=function(){this.element_.disabled=!1},i.prototype.enable=i.prototype.enable,i.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:i,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(n){this.element_=n,this.init()};window.MaterialProgress=i,i.prototype.Constant_={},i.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},i.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},i.prototype.setProgress=i.prototype.setProgress,i.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},i.prototype.setBuffer=i.prototype.setBuffer,i.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:i,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(n){this.element_=n,this.init()};window.MaterialSpinner=i,i.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},i.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},i.prototype.createLayer=function(e){var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),n.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var u=document.createElement("div");u.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),u.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var h=[r,o,u],f=0;f<h.length;f++){var g=document.createElement("div");g.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),h[f].appendChild(g)}n.appendChild(r),n.appendChild(o),n.appendChild(u),this.element_.appendChild(n)},i.prototype.createLayer=i.prototype.createLayer,i.prototype.stop=function(){this.element_.classList.remove("is-active")},i.prototype.stop=i.prototype.stop,i.prototype.start=function(){this.element_.classList.add("is-active")},i.prototype.start=i.prototype.start,i.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:i,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var i=function(n){this.element_=n,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=i,i.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},i.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},i.prototype.onKeyDown_=function(e){var n=e.target.value.split(`
`).length;e.keyCode===13&&n>=this.maxRows&&e.preventDefault()},i.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},i.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.onReset_=function(e){this.updateClasses_()},i.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},i.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},i.prototype.checkDisabled=i.prototype.checkDisabled,i.prototype.checkFocus=function(){this.element_.querySelector(":focus")?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},i.prototype.checkFocus=i.prototype.checkFocus,i.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},i.prototype.checkValidity=i.prototype.checkValidity,i.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},i.prototype.checkDirty=i.prototype.checkDirty,i.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},i.prototype.disable=i.prototype.disable,i.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},i.prototype.enable=i.prototype.enable,i.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},i.prototype.change=i.prototype.change,i.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:i,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})})();(function(){(function(){var i,e=typeof Object.create=="function"?Object.create:function(t){function s(){}return s.prototype=t,new s},n;if(typeof Object.setPrototypeOf=="function")n=Object.setPrototypeOf;else{var r;e:{var o={xb:!0},u={};try{u.__proto__=o,r=u.xb;break e}catch{}r=!1}n=r?function(t,s){if(t.__proto__=s,t.__proto__!==s)throw new TypeError(t+" is not extensible");return t}:null}var h=n;function f(t,s){if(t.prototype=e(s.prototype),t.prototype.constructor=t,h)h(t,s);else for(var a in s)if(a!="prototype")if(Object.defineProperties){var l=Object.getOwnPropertyDescriptor(s,a);l&&Object.defineProperty(t,a,l)}else t[a]=s[a];t.K=s.prototype}var g=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){t!=Array.prototype&&t!=Object.prototype&&(t[s]=a.value)},y=typeof window<"u"&&window===this?this:typeof global<"u"&&global!=null?global:this;function I(t,s){if(s){var a=y;t=t.split(".");for(var l=0;l<t.length-1;l++){var d=t[l];d in a||(a[d]={}),a=a[d]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&g(a,t,{configurable:!0,writable:!0,value:s})}}I("Object.is",function(t){return t||function(s,a){return s===a?s!==0||1/s===1/a:s!==s&&a!==a}}),I("Array.prototype.includes",function(t){return t||function(s,a){var l=this;l instanceof String&&(l=String(l));var d=l.length;for(a=a||0,0>a&&(a=Math.max(a+d,0));a<d;a++){var p=l[a];if(p===s||Object.is(p,s))return!0}return!1}});var b=this;function L(t){return t!==void 0}function x(t){return typeof t=="string"}var z=/^[\w+/_-]+[=]{0,2}$/,E=null;function D(){}function F(t){t.W=void 0,t.Xa=function(){return t.W?t.W:t.W=new t}}function $(t){var s=typeof t;if(s=="object")if(t){if(t instanceof Array)return"array";if(t instanceof Object)return s;var a=Object.prototype.toString.call(t);if(a=="[object Window]")return"object";if(a=="[object Array]"||typeof t.length=="number"&&typeof t.splice<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("splice"))return"array";if(a=="[object Function]"||typeof t.call<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("call"))return"function"}else return"null";else if(s=="function"&&typeof t.call>"u")return"object";return s}function Y(t){return $(t)=="array"}function re(t){var s=$(t);return s=="array"||s=="object"&&typeof t.length=="number"}function pe(t){return $(t)=="function"}function he(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}var P="closure_uid_"+(1e9*Math.random()>>>0),S=0;function R(t,s,a){return t.call.apply(t.bind,arguments)}function k(t,s,a){if(!t)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(d,l),t.apply(s,d)}}return function(){return t.apply(s,arguments)}}function C(t,s,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C=R:C=k,C.apply(null,arguments)}function N(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function A(t,s){for(var a in s)t[a]=s[a]}var bt=Date.now||function(){return+new Date};function Ae(t,s){t=t.split(".");var a=b;t[0]in a||typeof a.execScript>"u"||a.execScript("var "+t[0]);for(var l;t.length&&(l=t.shift());)!t.length&&L(s)?a[l]=s:a[l]&&a[l]!==Object.prototype[l]?a=a[l]:a=a[l]={}}function oe(t,s){function a(){}a.prototype=s.prototype,t.K=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.vc=function(l,d,p){for(var _=Array(arguments.length-2),T=2;T<arguments.length;T++)_[T-2]=arguments[T];return s.prototype[d].apply(l,_)}}function ut(t){if(Error.captureStackTrace)Error.captureStackTrace(this,ut);else{var s=Error().stack;s&&(this.stack=s)}t&&(this.message=String(t))}oe(ut,Error),ut.prototype.name="CustomError";var Vi;function vr(t,s){t=t.split("%s");for(var a="",l=t.length-1,d=0;d<l;d++)a+=t[d]+(d<s.length?s[d]:"%s");ut.call(this,a+t[l])}oe(vr,ut),vr.prototype.name="AssertionError";function cn(t,s){throw new vr("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}var Ku=Array.prototype.indexOf?function(t,s){return Array.prototype.indexOf.call(t,s,void 0)}:function(t,s){if(x(t))return x(s)&&s.length==1?t.indexOf(s,0):-1;for(var a=0;a<t.length;a++)if(a in t&&t[a]===s)return a;return-1},$t=Array.prototype.forEach?function(t,s,a){Array.prototype.forEach.call(t,s,a)}:function(t,s,a){for(var l=t.length,d=x(t)?t.split(""):t,p=0;p<l;p++)p in d&&s.call(a,d[p],p,t)};function pt(t,s){for(var a=x(t)?t.split(""):t,l=t.length-1;0<=l;--l)l in a&&s.call(void 0,a[l],l,t)}var Ah=Array.prototype.filter?function(t,s){return Array.prototype.filter.call(t,s,void 0)}:function(t,s){for(var a=t.length,l=[],d=0,p=x(t)?t.split(""):t,_=0;_<a;_++)if(_ in p){var T=p[_];s.call(void 0,T,_,t)&&(l[d++]=T)}return l},yr=Array.prototype.map?function(t,s){return Array.prototype.map.call(t,s,void 0)}:function(t,s){for(var a=t.length,l=Array(a),d=x(t)?t.split(""):t,p=0;p<a;p++)p in d&&(l[p]=s.call(void 0,d[p],p,t));return l},Sh=Array.prototype.some?function(t,s){return Array.prototype.some.call(t,s,void 0)}:function(t,s){for(var a=t.length,l=x(t)?t.split(""):t,d=0;d<a;d++)if(d in l&&s.call(void 0,l[d],d,t))return!0;return!1};function Tt(t,s){return 0<=Ku(t,s)}function Yu(t,s){s=Ku(t,s);var a;return(a=0<=s)&&ss(t,s),a}function ss(t,s){return Array.prototype.splice.call(t,s,1).length==1}function os(t,s){e:{for(var a=t.length,l=x(t)?t.split(""):t,d=0;d<a;d++)if(d in l&&s.call(void 0,l[d],d,t)){s=d;break e}s=-1}0<=s&&ss(t,s)}function as(t,s){var a=0;pt(t,function(l,d){s.call(void 0,l,d,t)&&ss(t,d)&&a++})}function us(t){return Array.prototype.concat.apply([],arguments)}function cs(t){var s=t.length;if(0<s){for(var a=Array(s),l=0;l<s;l++)a[l]=t[l];return a}return[]}function jo(t,s,a){return 2>=arguments.length?Array.prototype.slice.call(t,s):Array.prototype.slice.call(t,s,a)}var At=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},Ju=/&/g,Rh=/</g,Ch=/>/g,Qu=/"/g,Bo=/'/g,Xu=/\x00/g,Ph=/[\x00&<>"']/;function _r(t,s){return t<s?-1:t>s?1:0}function Mn(t){return Ph.test(t)&&(t.indexOf("&")!=-1&&(t=t.replace(Ju,"&amp;")),t.indexOf("<")!=-1&&(t=t.replace(Rh,"&lt;")),t.indexOf(">")!=-1&&(t=t.replace(Ch,"&gt;")),t.indexOf('"')!=-1&&(t=t.replace(Qu,"&quot;")),t.indexOf("'")!=-1&&(t=t.replace(Bo,"&#39;")),t.indexOf("\0")!=-1&&(t=t.replace(Xu,"&#0;"))),t}function qo(t,s,a){for(var l in t)s.call(a,t[l],l,t)}function et(t){var s={},a;for(a in t)s[a]=t[a];return s}var mt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function si(t,s){for(var a,l,d=1;d<arguments.length;d++){l=arguments[d];for(a in l)t[a]=l[a];for(var p=0;p<mt.length;p++)a=mt[p],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}var oi="StopIteration"in b?b.StopIteration:{message:"StopIteration",stack:""};function Vn(){}Vn.prototype.next=function(){throw oi},Vn.prototype.ha=function(){return this};function Zu(t){if(t instanceof Vn)return t;if(typeof t.ha=="function")return t.ha(!1);if(re(t)){var s=0,a=new Vn;return a.next=function(){for(;;){if(s>=t.length)throw oi;if(s in t)return t[s++];s++}},a}throw Error("Not implemented")}function wr(t,s){if(re(t))try{$t(t,s,void 0)}catch(a){if(a!==oi)throw a}else{t=Zu(t);try{for(;;)s.call(void 0,t.next(),void 0,t)}catch(a){if(a!==oi)throw a}}}function ec(t){if(re(t))return cs(t);t=Zu(t);var s=[];return wr(t,function(a){s.push(a)}),s}function Ir(t,s){this.g={},this.a=[],this.j=this.h=0;var a=arguments.length;if(1<a){if(a%2)throw Error("Uneven number of arguments");for(var l=0;l<a;l+=2)this.set(arguments[l],arguments[l+1])}else if(t)if(t instanceof Ir)for(a=t.ja(),l=0;l<a.length;l++)this.set(a[l],t.get(a[l]));else for(l in t)this.set(l,t[l])}i=Ir.prototype,i.la=function(){xi(this);for(var t=[],s=0;s<this.a.length;s++)t.push(this.g[this.a[s]]);return t},i.ja=function(){return xi(this),this.a.concat()},i.clear=function(){this.g={},this.j=this.h=this.a.length=0};function xi(t){if(t.h!=t.a.length){for(var s=0,a=0;s<t.a.length;){var l=t.a[s];ai(t.g,l)&&(t.a[a++]=l),s++}t.a.length=a}if(t.h!=t.a.length){var d={};for(a=s=0;s<t.a.length;)l=t.a[s],ai(d,l)||(t.a[a++]=l,d[l]=1),s++;t.a.length=a}}i.get=function(t,s){return ai(this.g,t)?this.g[t]:s},i.set=function(t,s){ai(this.g,t)||(this.h++,this.a.push(t),this.j++),this.g[t]=s},i.forEach=function(t,s){for(var a=this.ja(),l=0;l<a.length;l++){var d=a[l],p=this.get(d);t.call(s,p,d,this)}},i.ha=function(t){xi(this);var s=0,a=this.j,l=this,d=new Vn;return d.next=function(){if(a!=l.j)throw Error("The map has changed since the iterator was created");if(s>=l.a.length)throw oi;var p=l.a[s++];return t?p:l.g[p]},d};function ai(t,s){return Object.prototype.hasOwnProperty.call(t,s)}var kh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ho(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var l=t[a].indexOf("="),d=null;if(0<=l){var p=t[a].substring(0,l);d=t[a].substring(l+1)}else p=t[a];s(p,d?decodeURIComponent(d.replace(/\+/g," ")):"")}}}function Wo(t,s,a,l){for(var d=a.length;0<=(s=t.indexOf(a,s))&&s<l;){var p=t.charCodeAt(s-1);if((p==38||p==63)&&(p=t.charCodeAt(s+d),!p||p==61||p==38||p==35))return s;s+=d+1}return-1}var $o=/#|$/;function xn(t,s){var a=t.search($o),l=Wo(t,0,s,a);if(0>l)return null;var d=t.indexOf("&",l);return(0>d||d>a)&&(d=a),l+=s.length+1,decodeURIComponent(t.substr(l,d-l).replace(/\+/g," "))}var Go=/[?&]($|#)/;function ln(t,s){this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1;var a;t instanceof ln?(this.i=L(s)?s:t.i,wn(this,t.j),this.A=t.A,this.h=t.h,ls(this,t.C),this.g=t.g,Fi(this,Ko(t.a)),this.s=t.s):t&&(a=String(t).match(kh))?(this.i=!!s,wn(this,a[1]||"",!0),this.A=In(a[2]||""),this.h=In(a[3]||"",!0),ls(this,a[4]),this.g=In(a[5]||"",!0),Fi(this,a[6]||"",!0),this.s=In(a[7]||"")):(this.i=!!s,this.a=new hn(null,this.i))}ln.prototype.toString=function(){var t=[],s=this.j;s&&t.push(Ui(s,zo,!0),":");var a=this.h;return(a||s=="file")&&(t.push("//"),(s=this.A)&&t.push(Ui(s,zo,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.C,a!=null&&t.push(":",String(a))),(a=this.g)&&(this.h&&a.charAt(0)!="/"&&t.push("/"),t.push(Ui(a,a.charAt(0)=="/"?br:Er,!0))),(a=this.a.toString())&&t.push("?",a),(a=this.s)&&t.push("#",Ui(a,Nh)),t.join("")};function wn(t,s,a){t.j=a?In(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function ls(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.C=s}else t.C=null}function Fi(t,s,a){s instanceof hn?(t.a=s,ds(t.a,t.i)):(a||(s=Ui(s,Dh)),t.a=new hn(s,t.i))}function hs(t){return t instanceof ln?new ln(t):new ln(t,void 0)}function In(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ui(t,s,a){return x(t)?(t=encodeURI(t).replace(s,St),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function St(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zo=/[#\/\?@]/g,Er=/[#\?:]/g,br=/[#\?]/g,Dh=/[#\?@]/g,Nh=/#/g;function hn(t,s){this.g=this.a=null,this.h=t||null,this.j=!!s}function Fn(t){t.a||(t.a=new Ir,t.g=0,t.h&&Ho(t.h,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=hn.prototype,i.add=function(t,s){Fn(this),this.h=null,t=Un(this,t);var a=this.a.get(t);return a||this.a.set(t,a=[]),a.push(s),this.g+=1,this};function ui(t,s){Fn(t),s=Un(t,s),ai(t.a.g,s)&&(t.h=null,t.g-=t.a.get(s).length,t=t.a,ai(t.g,s)&&(delete t.g[s],t.h--,t.j++,t.a.length>2*t.h&&xi(t)))}i.clear=function(){this.a=this.h=null,this.g=0};function Tr(t,s){return Fn(t),s=Un(t,s),ai(t.a.g,s)}i.forEach=function(t,s){Fn(this),this.a.forEach(function(a,l){$t(a,function(d){t.call(s,d,l,this)},this)},this)},i.ja=function(){Fn(this);for(var t=this.a.la(),s=this.a.ja(),a=[],l=0;l<s.length;l++)for(var d=t[l],p=0;p<d.length;p++)a.push(s[l]);return a},i.la=function(t){Fn(this);var s=[];if(x(t))Tr(this,t)&&(s=us(s,this.a.get(Un(this,t))));else{t=this.a.la();for(var a=0;a<t.length;a++)s=us(s,t[a])}return s},i.set=function(t,s){return Fn(this),this.h=null,t=Un(this,t),Tr(this,t)&&(this.g-=this.a.get(t).length),this.a.set(t,[s]),this.g+=1,this},i.get=function(t,s){return t?(t=this.la(t),0<t.length?String(t[0]):s):s},i.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var t=[],s=this.a.ja(),a=0;a<s.length;a++){var l=s[a],d=encodeURIComponent(String(l));l=this.la(l);for(var p=0;p<l.length;p++){var _=d;l[p]!==""&&(_+="="+encodeURIComponent(String(l[p]))),t.push(_)}}return this.h=t.join("&")};function Ko(t){var s=new hn;return s.h=t.h,t.a&&(s.a=new Ir(t.a),s.g=t.g),s}function Un(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function ds(t,s){s&&!t.j&&(Fn(t),t.h=null,t.a.forEach(function(a,l){var d=l.toLowerCase();l!=d&&(ui(this,l),ui(this,d),0<a.length&&(this.h=null,this.a.set(Un(this,d),cs(a)),this.g+=a.length))},t)),t.j=s}function Mt(t){this.a=hs(t)}function tc(t,s){s?t.a.a.set(Ue.Sa,s):ui(t.a.a,Ue.Sa)}function nc(t,s){s!==null?t.a.a.set(Ue.Qa,s?"1":"0"):ui(t.a.a,Ue.Qa)}function fs(t){return t.a.a.get(Ue.Pa)||null}function ps(t,s){s?t.a.a.set(Ue.PROVIDER_ID,s):ui(t.a.a,Ue.PROVIDER_ID)}Mt.prototype.toString=function(){return this.a.toString()};var Ue={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"},ci;e:{var ic=b.navigator;if(ic){var Ar=ic.userAgent;if(Ar){ci=Ar;break e}}ci=""}function de(t){return ci.indexOf(t)!=-1}function ms(){return(de("Chrome")||de("CriOS"))&&!de("Edge")}function li(t){return li[" "](t),t}li[" "]=D;function hi(t,s){var a=Oh;return Object.prototype.hasOwnProperty.call(a,t)?a[t]:a[t]=s(t)}var gs=de("Opera"),Me=de("Trident")||de("MSIE"),En=de("Edge"),rc=En||Me,Gt=de("Gecko")&&!(ci.toLowerCase().indexOf("webkit")!=-1&&!de("Edge"))&&!(de("Trident")||de("MSIE"))&&!de("Edge"),ct=ci.toLowerCase().indexOf("webkit")!=-1&&!de("Edge"),Yo=ct&&de("Mobile"),bn=de("Macintosh");function Jo(){var t=b.document;return t?t.documentMode:void 0}var vs;e:{var Qo="",ys=function(){var t=ci;if(Gt)return/rv:([^\);]+)(\)|;)/.exec(t);if(En)return/Edge\/([\d\.]+)/.exec(t);if(Me)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ct)return/WebKit\/(\S+)/.exec(t);if(gs)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ys&&(Qo=ys?ys[1]:""),Me){var _s=Jo();if(_s!=null&&_s>parseFloat(Qo)){vs=String(_s);break e}}vs=Qo}var Oh={};function Bt(t){return hi(t,function(){for(var s=0,a=At(String(vs)).split("."),l=At(String(t)).split("."),d=Math.max(a.length,l.length),p=0;s==0&&p<d;p++){var _=a[p]||"",T=l[p]||"";do{if(_=/(\d*)(\D*)(.*)/.exec(_)||["","","",""],T=/(\d*)(\D*)(.*)/.exec(T)||["","","",""],_[0].length==0&&T[0].length==0)break;s=_r(_[1].length==0?0:parseInt(_[1],10),T[1].length==0?0:parseInt(T[1],10))||_r(_[2].length==0,T[2].length==0)||_r(_[2],T[2]),_=_[3],T=T[3]}while(s==0)}return 0<=s})}var qt,Sr=b.document;qt=Sr&&Me?Jo()||(Sr.compatMode=="CSS1Compat"?parseInt(vs,10):5):void 0;function Tn(t,s){this.a=t===De&&s||"",this.g=Xo}Tn.prototype.ma=!0,Tn.prototype.ka=function(){return this.a},Tn.prototype.toString=function(){return"Const{"+this.a+"}"};var Xo={},De={};function dn(){this.a="",this.h=sc}dn.prototype.ma=!0,dn.prototype.ka=function(){return this.a.toString()},dn.prototype.g=function(){return 1},dn.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function ji(t){return t instanceof dn&&t.constructor===dn&&t.h===sc?t.a:(cn("expected object of type TrustedResourceUrl, got '"+t+"' of type "+$(t)),"type_error:TrustedResourceUrl")}function Rr(){var t=kE;t instanceof Tn&&t.constructor===Tn&&t.g===Xo?t=t.a:(cn("expected object of type Const, got '"+t+"'"),t="type_error:Const");var s=new dn;return s.a=t,s}var sc={};function Vt(){this.a="",this.h=Bi}Vt.prototype.ma=!0,Vt.prototype.ka=function(){return this.a.toString()},Vt.prototype.g=function(){return 1},Vt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function jn(t){return t instanceof Vt&&t.constructor===Vt&&t.h===Bi?t.a:(cn("expected object of type SafeUrl, got '"+t+"' of type "+$(t)),"type_error:SafeUrl")}var oc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function ws(t){return t instanceof Vt?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),oc.test(t)||(t="about:invalid#zClosurez"),fn(t))}function ac(t){return t instanceof Vt?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),oc.test(t)||(t="about:invalid#zClosurez"),fn(t))}var Bi={};function fn(t){var s=new Vt;return s.a=t,s}fn("about:blank");function di(){this.a="",this.g=Zo}di.prototype.ma=!0;var Zo={};di.prototype.ka=function(){return this.a},di.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function An(){this.a="",this.j=uc,this.h=null}An.prototype.g=function(){return this.h},An.prototype.ma=!0,An.prototype.ka=function(){return this.a.toString()},An.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Sn(t){return t instanceof An&&t.constructor===An&&t.j===uc?t.a:(cn("expected object of type SafeHtml, got '"+t+"' of type "+$(t)),"type_error:SafeHtml")}var uc={};function Cr(t,s){var a=new An;return a.a=t,a.h=s,a}Cr("<!DOCTYPE html>",0);var Lh=Cr("",0);Cr("<br>",0);var Bn=function(t){var s=!1,a;return function(){return s||(a=t(),s=!0),a}}(function(){if(typeof document>"u")return!1;var t=document.createElement("div"),s=document.createElement("div");return s.appendChild(document.createElement("div")),t.appendChild(s),t.firstChild?(s=t.firstChild.firstChild,t.innerHTML=Sn(Lh),!s.parentElement):!1});function Mh(t,s){if(t.src=ji(s),E===null)e:{if(s=b.document,(s=s.querySelector&&s.querySelector("script[nonce]"))&&(s=s.nonce||s.getAttribute("nonce"))&&z.test(s)){E=s;break e}E=""}s=E,s&&t.setAttribute("nonce",s)}function qi(t,s){s=s instanceof Vt?s:ac(s),t.assign(jn(s))}function Xt(t,s){this.a=L(t)?t:0,this.g=L(s)?s:0}Xt.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Xt.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Xt.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Xt.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this};function Hi(t,s){this.width=t,this.height=s}i=Hi.prototype,i.toString=function(){return"("+this.width+" x "+this.height+")"},i.aspectRatio=function(){return this.width/this.height},i.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},i.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},i.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};function Pr(t){return t?new Ts(Wi(t)):Vi||(Vi=new Ts)}function fi(t,s){var a=s||document;return a.querySelectorAll&&a.querySelector?a.querySelectorAll("."+t):ea(document,t,s)}function pi(t,s){var a=s||document;if(a.getElementsByClassName)t=a.getElementsByClassName(t)[0];else{a=document;var l=s||a;t=l.querySelectorAll&&l.querySelector&&t?l.querySelector(t?"."+t:""):ea(a,t,s)[0]||null}return t||null}function ea(t,s,a){var l;if(t=a||t,t.querySelectorAll&&t.querySelector&&s)return t.querySelectorAll(s?"."+s:"");if(s&&t.getElementsByClassName){var d=t.getElementsByClassName(s);return d}if(d=t.getElementsByTagName("*"),s){var p={};for(a=l=0;t=d[a];a++){var _=t.className;typeof _.split=="function"&&Tt(_.split(/\s+/),s)&&(p[l++]=t)}return p.length=l,p}return d}function ta(t,s){qo(s,function(a,l){a&&typeof a=="object"&&a.ma&&(a=a.ka()),l=="style"?t.style.cssText=a:l=="class"?t.className=a:l=="for"?t.htmlFor=a:Oe.hasOwnProperty(l)?t.setAttribute(Oe[l],a):l.lastIndexOf("aria-",0)==0||l.lastIndexOf("data-",0)==0?t.setAttribute(l,a):t[l]=a})}var Oe={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Is(t){return t.scrollingElement?t.scrollingElement:(ct||t.compatMode!="CSS1Compat")&&t.body||t.documentElement}function mi(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Wi(t){return t.nodeType==9?t:t.ownerDocument||t.document}function Es(t,s){if("textContent"in t)t.textContent=s;else if(t.nodeType==3)t.data=String(s);else if(t.firstChild&&t.firstChild.nodeType==3){for(;t.lastChild!=t.firstChild;)t.removeChild(t.lastChild);t.firstChild.data=String(s)}else{for(var a;a=t.firstChild;)t.removeChild(a);t.appendChild(Wi(t).createTextNode(String(s)))}}function na(t,s){return s?bs(t,function(a){return!s||x(a.className)&&Tt(a.className.split(/\s+/),s)}):null}function bs(t,s){for(var a=0;t;){if(s(t))return t;t=t.parentNode,a++}return null}function Ts(t){this.a=t||b.document||document}Ts.prototype.N=function(){return x(void 0)?this.a.getElementById(void 0):void 0};var zt={Fc:!0},ia={Hc:!0},Vh={Ec:!0},$i={Gc:!0};function Rn(){throw Error("Do not instantiate directly")}Rn.prototype.va=null,Rn.prototype.toString=function(){return this.content};function gi(t,s,a,l){if(t=t(s||Ss,void 0,a),l=(l||Pr()).a.createElement("DIV"),t=As(t),t.match(cc),t=Cr(t,null),Bn())for(;l.lastChild;)l.removeChild(l.lastChild);return l.innerHTML=Sn(t),l.childNodes.length==1&&(t=l.firstChild,t.nodeType==1&&(l=t)),l}function As(t){if(!he(t))return Mn(String(t));if(t instanceof Rn){if(t.fa===zt)return t.content;if(t.fa===$i)return Mn(t.content)}return cn("Soy template output is unsafe for use as HTML: "+t),"zSoyz"}var cc=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,Ss={};function xh(t){if(t!=null)switch(t.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}function kr(){Rn.call(this)}oe(kr,Rn),kr.prototype.fa=zt;function ee(t){return t!=null&&t.fa===zt?t:t instanceof An?K(Sn(t).toString(),t.g()):K(Mn(String(String(t))),xh(t))}function Dr(){Rn.call(this)}oe(Dr,Rn),Dr.prototype.fa=ia,Dr.prototype.va=1;function Nr(t,s){this.content=String(t),this.va=s??null}oe(Nr,Rn),Nr.prototype.fa=$i;function ge(t){return new Nr(t,void 0)}var K=function(t){function s(a){this.content=a}return s.prototype=t.prototype,function(a,l){return a=new s(String(a)),l!==void 0&&(a.va=l),a}}(kr),lc=function(t){function s(a){this.content=a}return s.prototype=t.prototype,function(a){return new s(String(a))}}(Dr);function Rs(t){function s(){}var a={label:Le("New password")};s.prototype=t,t=new s;for(var l in a)t[l]=a[l];return t}function Le(t){return(t=String(t))?new Nr(t,void 0):""}var ra=function(t){function s(a){this.content=a}return s.prototype=t.prototype,function(a,l){return a=String(a),a?(a=new s(a),l!==void 0&&(a.va=l),a):""}}(kr);function je(t){return t!=null&&t.fa===zt?String(String(t.content).replace(m,"").replace(v,"&lt;")).replace(fc,dc):Mn(String(t))}function qn(t){return t!=null&&t.fa===ia?t=String(t).replace(Ps,Rt):t instanceof Vt?t=String(jn(t).toString()).replace(Ps,Rt):(t=String(t),c.test(t)?t=t.replace(Ps,Rt):(cn("Bad value `%s` for |filterNormalizeUri",[t]),t="#zSoyz")),t}function sa(t){return t!=null&&t.fa===Vh?t=t.content:t==null?t="":t instanceof di?t instanceof di&&t.constructor===di&&t.g===Zo?t=t.a:(cn("expected object of type SafeStyle, got '"+t+"' of type "+$(t)),t="type_error:SafeStyle"):(t=String(t),Gi.test(t)||(cn("Bad value `%s` for |filterCssValue",[t]),t="zSoyz")),t}var hc={"\0":"&#0;","	":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function dc(t){return hc[t]}var Cs={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","\x07":"%07","\b":"%08","	":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","\x1B":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function Rt(t){return Cs[t]}var fc=/[\x00\x22\x27\x3c\x3e]/g,Ps=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Gi=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,c=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,m=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,v=/</g;function w(){return ge("Enter a valid phone number")}function O(){return ge("Unable to send password reset code to specified email")}function V(){return ge("Something went wrong. Please try again.")}function G(){return ge("This email already exists without any means of sign-in. Please reset the password to recover.")}function Se(t){t=t||{};var s="";switch(t.code){case"invalid-argument":s+="Client specified an invalid argument.";break;case"invalid-configuration":s+="Client specified an invalid project configuration.";break;case"failed-precondition":s+="Request can not be executed in the current system state.";break;case"out-of-range":s+="Client specified an invalid range.";break;case"unauthenticated":s+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":s+="Client does not have sufficient permission.";break;case"not-found":s+="Specified resource is not found.";break;case"aborted":s+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":s+="The resource that a client tried to create already exists.";break;case"resource-exhausted":s+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":s+="Request cancelled by the client.";break;case"data-loss":s+="Unrecoverable data loss or data corruption.";break;case"unknown":s+="Unknown server error.";break;case"internal":s+="Internal server error.";break;case"not-implemented":s+="API method not implemented by the server.";break;case"unavailable":s+="Service unavailable.";break;case"deadline-exceeded":s+="Request deadline exceeded.";break;case"auth/user-disabled":s+="The user account has been disabled by an administrator.";break;case"auth/timeout":s+="The operation has timed out.";break;case"auth/too-many-requests":s+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":s+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":s+="A network error has occurred. Try again later.";break;case"restart-process":s+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":s+="No sign-in provider is available for the given email, please try with a different email."}return ge(s)}function tt(){return ge("Please login again to perform this operation")}function me(t,s,a){var l=Error.call(this);if(this.message=l.message,"stack"in l&&(this.stack=l.stack),this.code=gt+t,!(t=s)){switch(t="",this.code){case"firebaseui/merge-conflict":t+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";break;default:t+=V()}t=ge(t).toString()}this.message=t||"",this.credential=a||null}f(me,Error),me.prototype.toJSON=function(){return{code:this.code,message:this.message}};var gt="firebaseui/";function Ve(){this.T=this.T,this.C=this.C}var zi=0;Ve.prototype.T=!1,Ve.prototype.m=function(){!this.T&&(this.T=!0,this.o(),zi!=0)&&(this[P]||(this[P]=++S))};function Ct(t,s){t.T?L(void 0)?s.call(void 0):s():(t.C||(t.C=[]),t.C.push(L(void 0)?C(s,void 0):s))}Ve.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Hn(t){t&&typeof t.m=="function"&&t.m()}var oa=Object.freeze||function(t){return t},Jp=!Me||9<=Number(qt),cE=Me&&!Bt("9"),lE=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{b.addEventListener("test",D,s),b.removeEventListener("test",D,s)}catch{}return t}();function vi(t,s){this.type=t,this.g=this.target=s,this.h=!1,this.qb=!0}vi.prototype.stopPropagation=function(){this.h=!0},vi.prototype.preventDefault=function(){this.qb=!1};function Ht(t,s){if(vi.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(Gt){e:{try{li(s.nodeName);var d=!0;break e}catch{}d=!1}d||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.keyCode=t.keyCode||0,this.key=t.key||"",this.j=t.charCode||(a=="keypress"?t.keyCode:0),this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=x(t.pointerType)?t.pointerType:hE[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}oe(Ht,vi);var hE=oa({2:"touch",3:"pen",4:"mouse"});Ht.prototype.stopPropagation=function(){Ht.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},Ht.prototype.preventDefault=function(){Ht.K.preventDefault.call(this);var t=this.a;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,cE)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch{}};var aa="closure_listenable_"+(1e6*Math.random()|0),dE=0;function fE(t,s,a,l,d){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.La=d,this.key=++dE,this.sa=this.Ia=!1}function pc(t){t.sa=!0,t.listener=null,t.proxy=null,t.src=null,t.La=null}function mc(t){this.src=t,this.a={},this.g=0}mc.prototype.add=function(t,s,a,l,d){var p=t.toString();t=this.a[p],t||(t=this.a[p]=[],this.g++);var _=Uh(t,s,l,d);return-1<_?(s=t[_],a||(s.Ia=!1)):(s=new fE(s,this.src,p,!!l,d),s.Ia=a,t.push(s)),s};function Fh(t,s){var a=s.type;a in t.a&&Yu(t.a[a],s)&&(pc(s),t.a[a].length==0&&(delete t.a[a],t.g--))}function Uh(t,s,a,l){for(var d=0;d<t.length;++d){var p=t[d];if(!p.sa&&p.listener==s&&p.capture==!!a&&p.La==l)return d}return-1}var jh="closure_lm_"+(1e6*Math.random()|0),Bh={};function Cn(t,s,a,l,d){if(l&&l.once)return ua(t,s,a,l,d);if(Y(s)){for(var p=0;p<s.length;p++)Cn(t,s[p],a,l,d);return null}return a=Hh(a),t&&t[aa]?t.J.add(String(s),a,!1,he(l)?!!l.capture:!!l,d):Qp(t,s,a,!1,l,d)}function Qp(t,s,a,l,d,p){if(!s)throw Error("Invalid event type");var _=he(d)?!!d.capture:!!d,T=gc(t);if(T||(t[jh]=T=new mc(t)),a=T.add(s,a,l,_,p),a.proxy)return a;if(l=pE(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)lE||(d=_),d===void 0&&(d=!1),t.addEventListener(s.toString(),l,d);else if(t.attachEvent)t.attachEvent(Xp(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function pE(){var t=mE,s=Jp?function(a){return t.call(s.src,s.listener,a)}:function(a){if(a=t.call(s.src,s.listener,a),!a)return a};return s}function ua(t,s,a,l,d){if(Y(s)){for(var p=0;p<s.length;p++)ua(t,s[p],a,l,d);return null}return a=Hh(a),t&&t[aa]?t.J.add(String(s),a,!0,he(l)?!!l.capture:!!l,d):Qp(t,s,a,!0,l,d)}function Or(t,s,a,l,d){if(Y(s))for(var p=0;p<s.length;p++)Or(t,s[p],a,l,d);else l=he(l)?!!l.capture:!!l,a=Hh(a),t&&t[aa]?(t=t.J,s=String(s).toString(),s in t.a&&(p=t.a[s],a=Uh(p,a,l,d),-1<a&&(pc(p[a]),ss(p,a),p.length==0&&(delete t.a[s],t.g--)))):t&&(t=gc(t))&&(s=t.a[s.toString()],t=-1,s&&(t=Uh(s,a,l,d)),(a=-1<t?s[t]:null)&&Ki(a))}function Ki(t){if(typeof t!="number"&&t&&!t.sa){var s=t.src;if(s&&s[aa])Fh(s.J,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(Xp(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=gc(s))?(Fh(a,t),a.g==0&&(a.src=null,s[jh]=null)):pc(t)}}}function Xp(t){return t in Bh?Bh[t]:Bh[t]="on"+t}function Zp(t,s,a,l){var d=!0;if((t=gc(t))&&(s=t.a[s.toString()]))for(s=s.concat(),t=0;t<s.length;t++){var p=s[t];p&&p.capture==a&&!p.sa&&(p=em(p,l),d=d&&p!==!1)}return d}function em(t,s){var a=t.listener,l=t.La||t.src;return t.Ia&&Ki(t),a.call(l,s)}function mE(t,s){if(t.sa)return!0;if(!Jp){if(!s)e:{s=["window","event"];for(var a=b,l=0;l<s.length;l++)if(a=a[s[l]],a==null){s=null;break e}s=a}if(l=s,s=new Ht(l,this),a=!0,!(0>l.keyCode||l.returnValue!=null)){e:{var d=!1;if(l.keyCode==0)try{l.keyCode=-1;break e}catch{d=!0}(d||l.returnValue==null)&&(l.returnValue=!0)}for(l=[],d=s.g;d;d=d.parentNode)l.push(d);for(t=t.type,d=l.length-1;!s.h&&0<=d;d--){s.g=l[d];var p=Zp(l[d],t,!0,s);a=a&&p}for(d=0;!s.h&&d<l.length;d++)s.g=l[d],p=Zp(l[d],t,!1,s),a=a&&p}return a}return em(t,new Ht(s,this))}function gc(t){return t=t[jh],t instanceof mc?t:null}var qh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hh(t){return pe(t)?t:(t[qh]||(t[qh]=function(s){return t.handleEvent(s)}),t[qh])}function nt(){Ve.call(this),this.J=new mc(this),this.wb=this,this.Ha=null}oe(nt,Ve),nt.prototype[aa]=!0,nt.prototype.Za=function(t){this.Ha=t},nt.prototype.removeEventListener=function(t,s,a,l){Or(this,t,s,a,l)};function Yi(t,s){var a,l=t.Ha;if(l)for(a=[];l;l=l.Ha)a.push(l);if(t=t.wb,l=s.type||s,x(s))s=new vi(s,t);else if(s instanceof vi)s.target=s.target||t;else{var d=s;s=new vi(l,t),si(s,d)}if(d=!0,a)for(var p=a.length-1;!s.h&&0<=p;p--){var _=s.g=a[p];d=vc(_,l,!0,s)&&d}if(s.h||(_=s.g=t,d=vc(_,l,!0,s)&&d,s.h||(d=vc(_,l,!1,s)&&d)),a)for(p=0;!s.h&&p<a.length;p++)_=s.g=a[p],d=vc(_,l,!1,s)&&d;return d}nt.prototype.o=function(){if(nt.K.o.call(this),this.J){var t=this.J,s;for(s in t.a){for(var a=t.a[s],l=0;l<a.length;l++)pc(a[l]);delete t.a[s],t.g--}}this.Ha=null};function vc(t,s,a,l){if(s=t.J.a[String(s)],!s)return!0;s=s.concat();for(var d=!0,p=0;p<s.length;++p){var _=s[p];if(_&&!_.sa&&_.capture==a){var T=_.listener,M=_.La||_.src;_.Ia&&Fh(t.J,_),d=T.call(M,l)!==!1&&d}}return d&&l.qb!=0}var Zt={},tm=0;function nm(t,s){if(!t)throw Error("Event target element must be provided!");if(t=Wh(t),Zt[t]&&Zt[t].length)for(var a=0;a<Zt[t].length;a++)Yi(Zt[t][a],s)}function gE(t){var s=Wh(t.N());Zt[s]&&Zt[s].length&&(os(Zt[s],function(a){return a==t}),Zt[s].length||delete Zt[s])}function Wh(t){return typeof t.a>"u"&&(t.a=tm,tm++),t.a}function yc(t){if(!t)throw Error("Event target element must be provided!");nt.call(this),this.a=t}f(yc,nt),yc.prototype.N=function(){return this.a},yc.prototype.register=function(){var t=Wh(this.N());Zt[t]?Tt(Zt[t],this)||Zt[t].push(this):Zt[t]=[this]};function im(t){if(!t)return!1;try{return!!t.$goog_Thenable}catch{return!1}}function $h(t,s){this.h=t,this.j=s,this.g=0,this.a=null}$h.prototype.get=function(){if(0<this.g){this.g--;var t=this.a;this.a=t.next,t.next=null}else t=this.h();return t};function rm(t,s){t.j(s),100>t.g&&(t.g++,s.next=t.a,t.a=s)}function sm(){this.g=this.a=null}var om=new $h(function(){return new Gh},function(t){t.reset()});sm.prototype.add=function(t,s){var a=om.get();a.set(t,s),this.g?this.g.next=a:this.a=a,this.g=a};function vE(){var t=um,s=null;return t.a&&(s=t.a,t.a=t.a.next,t.a||(t.g=null),s.next=null),s}function Gh(){this.next=this.g=this.a=null}Gh.prototype.set=function(t,s){this.a=t,this.g=s,this.next=null},Gh.prototype.reset=function(){this.next=this.g=this.a=null};function am(t){b.setTimeout(function(){throw t},0)}var zh;function yE(){var t=b.MessageChannel;if(typeof t>"u"&&typeof window<"u"&&window.postMessage&&window.addEventListener&&!de("Presto")&&(t=function(){var d=document.createElement("IFRAME");d.style.display="none",d.src="",document.documentElement.appendChild(d);var p=d.contentWindow;d=p.document,d.open(),d.write(""),d.close();var _="callImmediate"+Math.random(),T=p.location.protocol=="file:"?"*":p.location.protocol+"//"+p.location.host;d=C(function(M){(T=="*"||M.origin==T)&&M.data==_&&this.port1.onmessage()},this),p.addEventListener("message",d,!1),this.port1={},this.port2={postMessage:function(){p.postMessage(_,T)}}}),typeof t<"u"&&!de("Trident")&&!de("MSIE")){var s=new t,a={},l=a;return s.port1.onmessage=function(){if(L(a.next)){a=a.next;var d=a.gb;a.gb=null,d()}},function(d){l.next={gb:d},l=l.next,s.port2.postMessage(0)}}return typeof document<"u"&&"onreadystatechange"in document.createElement("SCRIPT")?function(d){var p=document.createElement("SCRIPT");p.onreadystatechange=function(){p.onreadystatechange=null,p.parentNode.removeChild(p),p=null,d(),d=null},document.documentElement.appendChild(p)}:function(d){b.setTimeout(d,0)}}function Kh(t,s){_c||_E(),Yh||(_c(),Yh=!0),um.add(t,s)}var _c;function _E(){if(b.Promise&&b.Promise.resolve){var t=b.Promise.resolve(void 0);_c=function(){t.then(cm)}}else _c=function(){var s=cm;!pe(b.setImmediate)||b.Window&&b.Window.prototype&&!de("Edge")&&b.Window.prototype.setImmediate==b.setImmediate?(zh||(zh=yE()),zh(s)):b.setImmediate(s)}}var Yh=!1,um=new sm;function cm(){for(var t;t=vE();){try{t.a.call(t.g)}catch(s){am(s)}rm(om,t)}Yh=!1}function it(t){if(this.a=Lr,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,t!=D)try{var s=this;t.call(void 0,function(a){Mr(s,ca,a)},function(a){if(!(a instanceof Ds))try{throw a instanceof Error?a:Error("Promise rejected.")}catch{}Mr(s,yi,a)})}catch(a){Mr(this,yi,a)}}var Lr=0,ca=2,yi=3;function lm(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}lm.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var hm=new $h(function(){return new lm},function(t){t.reset()});function Jh(t,s,a){var l=hm.get();return l.s=t,l.g=s,l.j=a,l}function We(t){if(t instanceof it)return t;var s=new it(D);return Mr(s,ca,t),s}function ks(t){return new it(function(s,a){a(t)})}it.prototype.then=function(t,s,a){return fm(this,pe(t)?t:null,pe(s)?s:null,a)},it.prototype.$goog_Thenable=!0,i=it.prototype,i.fc=function(t,s){return t=Jh(t,t,s),t.h=!0,Qh(this,t),this},i.Ca=function(t,s){return fm(this,null,t,s)},i.cancel=function(t){this.a==Lr&&Kh(function(){var s=new Ds(t);dm(this,s)},this)};function dm(t,s){if(t.a==Lr)if(t.h){var a=t.h;if(a.g){for(var l=0,d=null,p=null,_=a.g;_&&(_.h||(l++,_.a==t&&(d=_),!(d&&1<l)));_=_.next)d||(p=_);d&&(a.a==Lr&&l==1?dm(a,s):(p?(l=p,l.next==a.j&&(a.j=l),l.next=l.next.next):mm(a),gm(a,d,yi,s)))}t.h=null}else Mr(t,yi,s)}function Qh(t,s){t.g||t.a!=ca&&t.a!=yi||pm(t),t.j?t.j.next=s:t.g=s,t.j=s}function fm(t,s,a,l){var d=Jh(null,null,null);return d.a=new it(function(p,_){d.s=s?function(T){try{var M=s.call(l,T);p(M)}catch(H){_(H)}}:p,d.g=a?function(T){try{var M=a.call(l,T);!L(M)&&T instanceof Ds?_(T):p(M)}catch(H){_(H)}}:_}),d.a.h=t,Qh(t,d),d.a}i.hc=function(t){this.a=Lr,Mr(this,ca,t)},i.ic=function(t){this.a=Lr,Mr(this,yi,t)};function Mr(t,s,a){if(t.a==Lr){t===a&&(s=yi,a=new TypeError("Promise cannot resolve to itself")),t.a=1;e:{var l=a,d=t.hc,p=t.ic;if(l instanceof it){Qh(l,Jh(d||D,p||null,t));var _=!0}else if(im(l))l.then(d,p,t),_=!0;else{if(he(l))try{var T=l.then;if(pe(T)){wE(l,T,d,p,t),_=!0;break e}}catch(M){p.call(t,M),_=!0;break e}_=!1}}_||(t.A=a,t.a=s,t.h=null,pm(t),s!=yi||a instanceof Ds||IE(t,a))}}function wE(t,s,a,l,d){function p(M){T||(T=!0,l.call(d,M))}function _(M){T||(T=!0,a.call(d,M))}var T=!1;try{s.call(t,_,p)}catch(M){p(M)}}function pm(t){t.i||(t.i=!0,Kh(t.Hb,t))}function mm(t){var s=null;return t.g&&(s=t.g,t.g=s.next,s.next=null),t.g||(t.j=null),s}i.Hb=function(){for(var t;t=mm(this);)gm(this,t,this.a,this.A);this.i=!1};function gm(t,s,a,l){if(a==yi&&s.g&&!s.h)for(;t&&t.s;t=t.h)t.s=!1;if(s.a)s.a.h=null,vm(s,a,l);else try{s.h?s.s.call(s.j):vm(s,a,l)}catch(d){ym.call(null,d)}rm(hm,s)}function vm(t,s,a){s==ca?t.s.call(t.j,a):t.g&&t.g.call(t.j,a)}function IE(t,s){t.s=!0,Kh(function(){t.s&&ym.call(null,s)})}var ym=am;function Ds(t){ut.call(this,t)}oe(Ds,ut),Ds.prototype.name="cancel";function _m(t,s,a){s||(s={}),a=a||window;var l=t instanceof Vt?t:ws(typeof t.href<"u"?t.href:String(t));t=s.target||t.target;var d=[];for(p in s)switch(p){case"width":case"height":case"top":case"left":d.push(p+"="+s[p]);break;case"target":case"noopener":case"noreferrer":break;default:d.push(p+"="+(s[p]?1:0))}var p=d.join(",");return(de("iPhone")&&!de("iPod")&&!de("iPad")||de("iPad")||de("iPod"))&&a.navigator&&a.navigator.standalone&&t&&t!="_self"?(p=a.document.createElement("A"),l=l instanceof Vt?l:ac(l),p.href=jn(l),p.setAttribute("target",t),s.noreferrer&&p.setAttribute("rel","noreferrer"),s=document.createEvent("MouseEvent"),s.initMouseEvent("click",!0,!0,a,1),p.dispatchEvent(s),a={}):s.noreferrer?(a=a.open("",t,p),s=jn(l).toString(),a&&(rc&&s.indexOf(";")!=-1&&(s="'"+s.replace(/'/g,"%27")+"'"),a.opener=null,s=Cr('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Mn(s)+'">',null),a.document.write(Sn(s)),a.document.close())):(a=a.open(jn(l).toString(),t,p))&&s.noopener&&(a.opener=null),a}function wm(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch{}return!1}function Ns(t){_m(t,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function wc(t,s){if(t=he(t)&&t.nodeType==1?t:document.querySelector(String(t)),t==null)throw Error(s||"Cannot find element.");return t}function _i(){return window.location.href}function EE(){var t=null;return new it(function(s){b.document.readyState=="complete"?s():(t=function(){s()},ua(window,"load",t))}).Ca(function(s){throw Or(window,"load",t),s})}function bE(){for(var t=32,s=[];0<t;)s.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return s.join("")}function TE(t,s,a){return a=a===void 0?{}:a,Object.keys(t).filter(function(l){return s.includes(l)}).reduce(function(l,d){return l[d]=t[d],l},a)}function Ji(t){var s=RE;this.s=[],this.T=s,this.O=t||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}Ji.prototype.cancel=function(t){if(this.a)this.h instanceof Ji&&this.h.cancel();else{if(this.g){var s=this.g;delete this.g,t?s.cancel(t):(s.C--,0>=s.C&&s.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(t=new ha,Ic(this),la(this,!1,t))}},Ji.prototype.L=function(t,s){this.A=!1,la(this,t,s)};function la(t,s,a){t.a=!0,t.h=a,t.j=!s,bm(t)}function Ic(t){if(t.a){if(!t.J)throw new Ec;t.J=!1}}Ji.prototype.callback=function(t){Ic(this),la(this,!0,t)};function Im(t,s,a){t.s.push([s,a,void 0]),t.a&&bm(t)}Ji.prototype.then=function(t,s,a){var l,d,p=new it(function(_,T){l=_,d=T});return Im(this,l,function(_){_ instanceof ha?p.cancel():d(_)}),p.then(t,s,a)},Ji.prototype.$goog_Thenable=!0;function Em(t){return Sh(t.s,function(s){return pe(s[1])})}function bm(t){if(t.i&&t.a&&Em(t)){var s=t.i,a=bc[s];a&&(b.clearTimeout(a.a),delete bc[s]),t.i=0}t.g&&(t.g.C--,delete t.g),s=t.h;for(var l=a=!1;t.s.length&&!t.A;){var d=t.s.shift(),p=d[0],_=d[1];if(d=d[2],p=t.j?_:p)try{var T=p.call(d||t.O,s);L(T)&&(t.j=t.j&&(T==s||T instanceof Error),t.h=s=T),(im(s)||typeof b.Promise=="function"&&s instanceof b.Promise)&&(l=!0,t.A=!0)}catch(M){s=M,t.j=!0,Em(t)||(a=!0)}}t.h=s,l&&(T=C(t.L,t,!0),l=C(t.L,t,!1),s instanceof Ji?(Im(s,T,l),s.l=!0):s.then(T,l)),a&&(s=new Tm(s),bc[s.a]=s,t.i=s.a)}function Ec(){ut.call(this)}oe(Ec,ut),Ec.prototype.message="Deferred has already fired",Ec.prototype.name="AlreadyCalledError";function ha(){ut.call(this)}oe(ha,ut),ha.prototype.message="Deferred was canceled",ha.prototype.name="CanceledError";function Tm(t){this.a=b.setTimeout(C(this.h,this),0),this.g=t}Tm.prototype.h=function(){throw delete bc[this.a],this.g};var bc={};function AE(t){var s={},a=s.document||document,l=ji(t).toString(),d=document.createElement("SCRIPT"),p={rb:d,sb:void 0},_=new Ji(p),T=null,M=s.timeout!=null?s.timeout:5e3;return 0<M&&(T=window.setTimeout(function(){Tc(d,!0);var H=new Xh(PE,"Timeout reached for loading script "+l);Ic(_),la(_,!1,H)},M),p.sb=T),d.onload=d.onreadystatechange=function(){d.readyState&&d.readyState!="loaded"&&d.readyState!="complete"||(Tc(d,s.xc||!1,T),_.callback(null))},d.onerror=function(){Tc(d,!0,T);var H=new Xh(CE,"Error while loading script "+l);Ic(_),la(_,!1,H)},p=s.attributes||{},si(p,{type:"text/javascript",charset:"UTF-8"}),ta(d,p),Mh(d,t),SE(a).appendChild(d),_}function SE(t){var s=(t||document).getElementsByTagName("HEAD");return s&&s.length!=0?s[0]:t.documentElement}function RE(){if(this&&this.rb){var t=this.rb;t&&t.tagName=="SCRIPT"&&Tc(t,!0,this.sb)}}function Tc(t,s,a){a!=null&&b.clearTimeout(a),t.onload=D,t.onerror=D,t.onreadystatechange=D,s&&window.setTimeout(function(){mi(t)},0)}var CE=0,PE=1;function Xh(t,s){var a="Jsloader error (code #"+t+")";s&&(a+=": "+s),ut.call(this,a),this.code=t}oe(Xh,ut);function da(){return b.google&&b.google.accounts&&b.google.accounts.id||null}function Zh(t){this.a=t||da(),this.h=!1,this.g=null}Zh.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())};function Am(t,s,a){if(t.a&&s)return function(){return t.h=!0,new it(function(d){t.g=d,t.a.initialize({client_id:s,callback:d,auto_select:!a}),t.a.prompt()})}();if(s){var l=ed.Xa().load().then(function(){return t.a=da(),Am(t,s,a)}).Ca(function(){return null});return We(l)}return We(null)}F(Zh);var kE=new Tn(De,"https://accounts.google.com/gsi/client");function ed(){this.a=null}ed.prototype.load=function(){var t=this;if(this.a)return this.a;var s=Rr();return da()?We():this.a=EE().then(function(){if(!da())return new it(function(a,l){var d=setTimeout(function(){t.a=null,l(Error("Network error!"))},1e4);b.onGoogleLibraryLoad=function(){clearTimeout(d),a()},We(AE(s)).then(function(){da()&&a()}).Ca(function(p){clearTimeout(d),t.a=null,l(p)})})})},F(ed);function td(t,s){this.a=t,this.g=s||function(a){throw a}}td.prototype.confirm=function(t){return We(this.a.confirm(t)).Ca(this.g)};function nd(t,s,a){this.reset(t,s,a,void 0,void 0)}nd.prototype.a=null,nd.prototype.reset=function(t,s,a,l,d){this.h=l||bt(),this.j=t,this.s=s,this.g=a,delete this.a};function id(t){this.s=t,this.a=this.h=this.j=this.g=null}function Ac(t,s){this.name=t,this.value=s}Ac.prototype.toString=function(){return this.name};var Sm=new Ac("SEVERE",1e3),Rm=new Ac("WARNING",900),Cm=new Ac("CONFIG",700);function Pm(t){return t.j?t.j:t.g?Pm(t.g):(cn("Root logger has no level set."),null)}id.prototype.log=function(t,s,a){if(t.value>=Pm(this).value)for(pe(s)&&(s=s()),t=new nd(t,String(s),this.s),a&&(t.a=a),a=this;a;){var l=a,d=t;if(l.a)for(var p=0;s=l.a[p];p++)s(d);a=a.g}};var rd={},fa=null;function km(){fa||(fa=new id(""),rd[""]=fa,fa.j=Cm)}function Dm(t){km();var s;if(!(s=rd[t])){s=new id(t);var a=t.lastIndexOf("."),l=t.substr(a+1);a=Dm(t.substr(0,a)),a.h||(a.h={}),a.h[l]=s,s.g=a,rd[t]=s}return s}function Sc(){this.a=bt()}var sd=null;Sc.prototype.set=function(t){this.a=t},Sc.prototype.reset=function(){this.set(bt())},Sc.prototype.get=function(){return this.a};function pa(t){this.j=t||"",sd||(sd=new Sc),this.s=sd}pa.prototype.a=!0,pa.prototype.g=!0,pa.prototype.h=!1;function Vr(t){return 10>t?"0"+t:String(t)}function DE(t,s){t=(t.h-s)/1e3,s=t.toFixed(3);var a=0;if(1>t)a=2;else for(;100>t;)a++,t*=10;for(;0<a--;)s=" "+s;return s}function Nm(t){pa.call(this,t)}oe(Nm,pa);function NE(t,s){var a=[];if(a.push(t.j," "),t.g){var l=new Date(s.h);a.push("[",Vr(l.getFullYear()-2e3)+Vr(l.getMonth()+1)+Vr(l.getDate())+" "+Vr(l.getHours())+":"+Vr(l.getMinutes())+":"+Vr(l.getSeconds())+"."+Vr(Math.floor(l.getMilliseconds()/10)),"] ")}return a.push("[",DE(s,t.s.get()),"s] "),a.push("[",s.g,"] "),a.push(s.s),t.h&&(s=s.a)&&a.push(`
`,s instanceof Error?s.message:s.toString()),t.a&&a.push(`
`),a.join("")}function Om(){this.s=C(this.h,this),this.a=new Nm,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Om.prototype.h=function(t){function s(p){if(p){if(p.value>=Sm.value)return"error";if(p.value>=Rm.value)return"warn";if(p.value>=Cm.value)return"log"}return"debug"}if(!this.j[t.g]){var a=NE(this.a,t),l=OE;if(l){var d=s(t.j);LE(l,d,a,t.a)}}};var OE=b.console;function LE(t,s,a,l){t[s]?t[s](a,l||""):t.log(a,l||"")}function en(t,s){var a=od;a&&a.log(Sm,t,s)}var od;od=Dm("firebaseui");var ad=new Om;if(ad.g!=1){var Rc;km(),Rc=fa;var ME=ad.s;Rc.a||(Rc.a=[]),Rc.a.push(ME),ad.g=!0}function Qi(t){var s=od;s&&s.log(Rm,t,void 0)}function Lm(){this.a=(typeof document>"u"?null:document)||{cookie:""}}i=Lm.prototype,i.set=function(t,s,a,l,d,p){if(/[;=\s]/.test(t))throw Error('Invalid cookie name "'+t+'"');if(/[;\r\n]/.test(s))throw Error('Invalid cookie value "'+s+'"');L(a)||(a=-1),d=d?";domain="+d:"",l=l?";path="+l:"",p=p?";secure":"",a=0>a?"":a==0?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(bt()+1e3*a).toUTCString(),this.a.cookie=t+"="+s+d+l+a+p},i.get=function(t,s){for(var a=t+"=",l=(this.a.cookie||"").split(";"),d=0,p;d<l.length;d++){if(p=At(l[d]),p.lastIndexOf(a,0)==0)return p.substr(a.length);if(p==t)return""}return s},i.ja=function(){return ud(this).keys},i.la=function(){return ud(this).values},i.clear=function(){for(var t=ud(this).keys,s=t.length-1;0<=s;s--){var a=t[s];this.get(a),this.set(a,"",0,void 0,void 0)}};function ud(t){t=(t.a.cookie||"").split(";");for(var s=[],a=[],l,d,p=0;p<t.length;p++)d=At(t[p]),l=d.indexOf("="),l==-1?(s.push(""),a.push(d)):(s.push(d.substring(0,l)),a.push(d.substring(l+1)));return{keys:s,values:a}}var Cc=new Lm;function Mm(){}function Os(t,s,a,l){this.h=typeof t<"u"&&t!==null?t:-1,this.g=s||null,this.a=a||null,this.j=!!l}f(Os,Mm),Os.prototype.set=function(t,s){Cc.set(t,s,this.h,this.g,this.a,this.j)},Os.prototype.get=function(t){return Cc.get(t)||null},Os.prototype.ra=function(t){var s=this.g,a=this.a;Cc.get(t),Cc.set(t,"",0,s,a)};function cd(t,s){this.g=t,this.a=s||null}function Vm(t){return{email:t.g,credential:t.a&&t.a.toJSON()}}function xm(t){if(t&&t.email){var s=t.credential&&Z.auth.AuthCredential.fromJSON(t.credential);return new cd(t.email,s)}return null}function Fm(t){this.a=t||null}function Um(t){for(var s=[],a=0,l=0;l<t.length;l++){var d=t.charCodeAt(l);255<d&&(s[a++]=d&255,d>>=8),s[a++]=d}return s}function VE(t){return yr(t,function(s){return s=s.toString(16),1<s.length?s:"0"+s}).join("")}function Pc(t){for(this.i=t,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(Ls*(this.j+1)),t=0;t<this.g;t++)this.a[t]=[this.i[4*t],this.i[4*t+1],this.i[4*t+2],this.i[4*t+3]];var s=Array(4);for(t=this.g;t<Ls*(this.j+1);t++){if(s[0]=this.a[t-1][0],s[1]=this.a[t-1][1],s[2]=this.a[t-1][2],s[3]=this.a[t-1][3],t%this.g==0){var a=s,l=a[0];a[0]=a[1],a[1]=a[2],a[2]=a[3],a[3]=l,Wm(s),s[0]^=Dc[t/this.g][0],s[1]^=Dc[t/this.g][1],s[2]^=Dc[t/this.g][2],s[3]^=Dc[t/this.g][3]}else 6<this.g&&t%this.g==4&&Wm(s);this.a[t]=Array(4),this.a[t][0]=this.a[t-this.g][0]^s[0],this.a[t][1]=this.a[t-this.g][1]^s[1],this.a[t][2]=this.a[t-this.g][2]^s[2],this.a[t][3]=this.a[t-this.g][3]^s[3]}}Pc.prototype.A=16;var Ls=Pc.prototype.A/4;function jm(t,s){for(var a,l=0;l<Ls;l++)for(var d=0;4>d;d++)a=4*d+l,a=s[a],t.h[l][d]=a}function Bm(t){for(var s=[],a=0;a<Ls;a++)for(var l=0;4>l;l++)s[4*l+a]=t.h[a][l];return s}function Ms(t,s){for(var a=0;4>a;a++)for(var l=0;4>l;l++)t.h[a][l]^=t.a[4*s+l][a]}function kc(t,s){for(var a=0;4>a;a++)for(var l=0;4>l;l++)t.h[a][l]=s[t.h[a][l]]}function qm(t){for(var s=1;4>s;s++)for(var a=0;4>a;a++)t.s[s][a]=t.h[s][a];for(s=1;4>s;s++)for(a=0;4>a;a++)t.h[s][a]=t.s[s][(a+s)%Ls]}function Hm(t){for(var s=1;4>s;s++)for(var a=0;4>a;a++)t.s[s][(a+s)%Ls]=t.h[s][a];for(s=1;4>s;s++)for(a=0;4>a;a++)t.h[s][a]=t.s[s][a]}function Wm(t){t[0]=Vs[t[0]],t[1]=Vs[t[1]],t[2]=Vs[t[2]],t[3]=Vs[t[3]]}var Vs=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],$m=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],Dc=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Nc=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Oc=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Lc=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Mc=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Vc=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],xc=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Gm(t,s){t=new Pc(Km(t)),s=Um(s);for(var a=s.splice(0,16),l="",d;a.length;){d=16-a.length;for(var p=0;p<d;p++)a.push(0);for(d=t,jm(d,a),Ms(d,0),a=1;a<d.j;++a){kc(d,Vs),qm(d),p=d.h;for(var _=d.s[0],T=0;4>T;T++)_[0]=p[0][T],_[1]=p[1][T],_[2]=p[2][T],_[3]=p[3][T],p[0][T]=Nc[_[0]]^Oc[_[1]]^_[2]^_[3],p[1][T]=_[0]^Nc[_[1]]^Oc[_[2]]^_[3],p[2][T]=_[0]^_[1]^Nc[_[2]]^Oc[_[3]],p[3][T]=Oc[_[0]]^_[1]^_[2]^Nc[_[3]];Ms(d,a)}kc(d,Vs),qm(d),Ms(d,d.j),l+=VE(Bm(d)),a=s.splice(0,16)}return l}function zm(t,s){t=new Pc(Km(t));for(var a=[],l=0;l<s.length;l+=2)a.push(parseInt(s.substring(l,l+2),16));var d=a.splice(0,16);for(s="";d.length;){for(l=t,jm(l,d),Ms(l,l.j),d=1;d<l.j;++d){Hm(l),kc(l,$m),Ms(l,l.j-d);for(var p=l.h,_=l.s[0],T=0;4>T;T++)_[0]=p[0][T],_[1]=p[1][T],_[2]=p[2][T],_[3]=p[3][T],p[0][T]=xc[_[0]]^Mc[_[1]]^Vc[_[2]]^Lc[_[3]],p[1][T]=Lc[_[0]]^xc[_[1]]^Mc[_[2]]^Vc[_[3]],p[2][T]=Vc[_[0]]^Lc[_[1]]^xc[_[2]]^Mc[_[3]],p[3][T]=Mc[_[0]]^Vc[_[1]]^Lc[_[2]]^xc[_[3]]}if(Hm(l),kc(l,$m),Ms(l,0),l=Bm(l),8192>=l.length)l=String.fromCharCode.apply(null,l);else{for(d="",p=0;p<l.length;p+=8192)d+=String.fromCharCode.apply(null,jo(l,p,p+8192));l=d}s+=l,d=a.splice(0,16)}return s.replace(/(\x00)+$/,"")}function Km(t){t=Um(t.substring(0,32));for(var s=32-t.length,a=0;a<s;a++)t.push(0);return t}function Ym(t){var s=[];return ld(new xE,t,s),s.join("")}function xE(){}function ld(t,s,a){if(s==null)a.push("null");else{if(typeof s=="object"){if(Y(s)){var l=s;s=l.length,a.push("[");for(var d="",p=0;p<s;p++)a.push(d),ld(t,l[p],a),d=",";a.push("]");return}if(s instanceof String||s instanceof Number||s instanceof Boolean)s=s.valueOf();else{a.push("{"),d="";for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(p=s[l],typeof p!="function"&&(a.push(d),Qm(l,a),a.push(":"),ld(t,p,a),d=","));a.push("}");return}}switch(typeof s){case"string":Qm(s,a);break;case"number":a.push(isFinite(s)&&!isNaN(s)?String(s):"null");break;case"boolean":a.push(String(s));break;case"function":a.push("null");break;default:throw Error("Unknown type: "+typeof s)}}}var Jm={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\u000b"},FE=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Qm(t,s){s.push('"',t.replace(FE,function(a){var l=Jm[a];return l||(l="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Jm[a]=l),l}),'"')}function ma(t){this.a=t}ma.prototype.set=function(t,s){L(s)?this.a.set(t,Ym(s)):this.a.ra(t)},ma.prototype.get=function(t){try{var s=this.a.get(t)}catch{return}if(s!==null)try{return JSON.parse(s)}catch{throw"Storage: Invalid value was encountered"}};function Fc(){}oe(Fc,Mm),Fc.prototype.clear=function(){var t=ec(this.ha(!0)),s=this;$t(t,function(a){s.ra(a)})};function Uc(t){this.a=t}oe(Uc,Fc);function jc(t){if(!t.a)return!1;try{return t.a.setItem("__sak","1"),t.a.removeItem("__sak"),!0}catch{return!1}}i=Uc.prototype,i.set=function(t,s){try{this.a.setItem(t,s)}catch{throw this.a.length==0?"Storage mechanism: Storage disabled":"Storage mechanism: Quota exceeded"}},i.get=function(t){if(t=this.a.getItem(t),!x(t)&&t!==null)throw"Storage mechanism: Invalid value was encountered";return t},i.ra=function(t){this.a.removeItem(t)},i.ha=function(t){var s=0,a=this.a,l=new Vn;return l.next=function(){if(s>=a.length)throw oi;var d=a.key(s++);if(t)return d;if(d=a.getItem(d),!x(d))throw"Storage mechanism: Invalid value was encountered";return d},l},i.clear=function(){this.a.clear()},i.key=function(t){return this.a.key(t)};function hd(){var t=null;try{t=window.localStorage||null}catch{}this.a=t}oe(hd,Uc);function dd(){var t=null;try{t=window.sessionStorage||null}catch{}this.a=t}oe(dd,Uc);function xs(t,s){this.g=t,this.a=s+"::"}oe(xs,Fc),xs.prototype.set=function(t,s){this.g.set(this.a+t,s)},xs.prototype.get=function(t){return this.g.get(this.a+t)},xs.prototype.ra=function(t){this.g.ra(this.a+t)},xs.prototype.ha=function(t){var s=this.g.ha(!0),a=this,l=new Vn;return l.next=function(){for(var d=s.next();d.substr(0,a.a.length)!=a.a;)d=s.next();return t?d.substr(a.a.length):a.g.get(d)},l},jc(new hd);var Xm,Zm=new dd;Xm=jc(Zm)?new xs(Zm,"firebaseui"):null;var fd=new ma(Xm),pd={name:"pendingEmailCredential",storage:fd},xr={name:"redirectStatus",storage:fd},ga={name:"redirectUrl",storage:fd},Fs={name:"emailForSignIn",storage:new ma(new Os(3600,"/"))},va={name:"pendingEncryptedCredential",storage:new ma(new Os(3600,"/"))};function Us(t,s){return t.storage.get(s?t.name+":"+s:t.name)}function Kt(t,s){t.storage.a.ra(s?t.name+":"+s:t.name)}function js(t,s,a){t.storage.set(a?t.name+":"+a:t.name,s)}function eg(t){return Us(ga,t)||null}function Wn(t){return t=Us(pd,t)||null,xm(t)}function $n(t){Kt(pd,t)}function tg(t,s){js(pd,Vm(t),s)}function md(t){return(t=Us(xr,t)||null)&&typeof t.tenantId<"u"?new Fm(t.tenantId):null}function UE(t,s){js(xr,{tenantId:t.a},s)}function jE(t,s){s=Us(Fs,s);var a=null;if(s)try{var l=zm(t,s),d=JSON.parse(l);a=d&&d.email||null}catch{}return a}function BE(t,s){s=Us(va,s);var a=null;if(s)try{var l=zm(t,s);a=JSON.parse(l)}catch{}return xm(a||null)}function qE(t,s,a){js(va,Gm(t,JSON.stringify(Vm(s))),a)}function gd(){this.W={}}function Je(t,s,a){if(s.toLowerCase()in t.W)throw Error("Configuration "+s+" has already been defined.");t.W[s.toLowerCase()]=a}function vd(t,s,a){if(!(s.toLowerCase()in t.W))throw Error("Configuration "+s+" is not defined.");t.W[s.toLowerCase()]=a}gd.prototype.get=function(t){if(!(t.toLowerCase()in this.W))throw Error("Configuration "+t+" is not defined.");return this.W[t.toLowerCase()]};function yd(t,s){if(t=t.get(s),!t)throw Error("Configuration "+s+" is required.");return t}function _d(){this.g=void 0,this.a={}}i=_d.prototype,i.set=function(t,s){ng(this,t,s,!1)},i.add=function(t,s){ng(this,t,s,!0)};function ng(t,s,a,l){for(var d=0;d<s.length;d++){var p=s.charAt(d);t.a[p]||(t.a[p]=new _d),t=t.a[p]}if(l&&t.g!==void 0)throw Error('The collection already contains the key "'+s+'"');t.g=a}i.get=function(t){e:{for(var s=this,a=0;a<t.length;a++)if(s=s.a[t.charAt(a)],!s){t=void 0;break e}t=s}return t?t.g:void 0},i.la=function(){var t=[];return ig(this,t),t};function ig(t,s){t.g!==void 0&&s.push(t.g);for(var a in t.a)ig(t.a[a],s)}i.ja=function(){var t=[];return rg(this,"",t),t};function rg(t,s,a){t.g!==void 0&&a.push(s);for(var l in t.a)rg(t.a[l],s+l,a)}i.clear=function(){this.a={},this.g=void 0};function sg(t){for(this.a=t,this.g=new _d,t=0;t<this.a.length;t++){var s=this.g.get("+"+this.a[t].b);s?s.push(this.a[t]):this.g.add("+"+this.a[t].b,[this.a[t]])}}function Bc(t,s){t=t.g;var a={},l=0;for(t.g!==void 0&&(a[l]=t.g);l<s.length;l++){var d=s.charAt(l);if(!(d in t.a))break;t=t.a[d],t.g!==void 0&&(a[l]=t.g)}for(var p in a)if(a.hasOwnProperty(p))return a[p];return[]}function Fr(t){for(var s=0;s<Wt.length;s++)if(Wt[s].c===t)return Wt[s];return null}function og(t){t=t.toUpperCase();for(var s=[],a=0;a<Wt.length;a++)Wt[a].f===t&&s.push(Wt[a]);return s}function ag(t){if(0<t.length&&t.charAt(0)=="+"){t=t.substring(1);for(var s=[],a=0;a<Wt.length;a++)Wt[a].b==t&&s.push(Wt[a]);t=s}else t=og(t);return t}function ug(t){t.sort(function(s,a){return s.name.localeCompare(a.name,"en")})}var Wt=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];ug(Wt);var ya=new sg(Wt);function cg(t,s){this.a=t,this.Aa=s}function lg(t){t=At(t);var s=Bc(ya,t);return 0<s.length?new cg(s[0].b=="1"?"1-US-0":s[0].c,At(t.substr(s[0].b.length+1))):null}function wd(t){var s=Fr(t.a);if(!s)throw Error("Country ID "+t.a+" not found.");return"+"+s.b+t.Aa}function hg(t,s){for(var a=0;a<t.length;a++)if(!Tt(dg,t[a])&&(Bs!==null&&t[a]in Bs||Tt(s,t[a])))return t[a];return null}var dg=["emailLink","password","phone"],Bs={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function HE(){this.a=new gd,Je(this.a,"autoUpgradeAnonymousUsers"),Je(this.a,"callbacks"),Je(this.a,"credentialHelper",Wc),Je(this.a,"immediateFederatedRedirect",!1),Je(this.a,"popupMode",!1),Je(this.a,"privacyPolicyUrl"),Je(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),Je(this.a,"queryParameterForWidgetMode","mode"),Je(this.a,"signInFlow"),Je(this.a,"signInOptions"),Je(this.a,"signInSuccessUrl"),Je(this.a,"siteName"),Je(this.a,"tosUrl"),Je(this.a,"widgetUrl"),Je(this.a,"adminRestrictedOperation")}function qc(t){var s=!!t.a.get("autoUpgradeAnonymousUsers");return s&&!Eg(t)&&en('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),s}function Hc(t){t=t.a.get("signInOptions")||[];for(var s=[],a=0;a<t.length;a++){var l=t[a];l=he(l)?l:{provider:l},l.provider&&s.push(l)}return s}function tn(t,s){t=Hc(t);for(var a=0;a<t.length;a++)if(t[a].provider===s)return t[a];return null}function qs(t){return Hc(t).map(function(s){return s.provider})}function _a(t,s){t=fg(t);for(var a=0;a<t.length;a++)if(t[a].providerId===s)return t[a];return null}function fg(t){return Hc(t).map(function(s){if(Bs[s.provider]||Tt(ZE,s.provider)){s={providerId:s.provider,S:s.providerName||null,V:s.fullLabel||null,ta:s.buttonColor||null,za:s.iconUrl?jn(ws(s.iconUrl)).toString():null};for(var a in s)s[a]===null&&delete s[a];return s}return{providerId:s.provider,S:s.providerName||null,V:s.fullLabel||null,ta:s.buttonColor||null,za:s.iconUrl?jn(ws(s.iconUrl)).toString():null,Ob:s.loginHintKey||null}})}function pg(t){var s=tn(t,Z.auth.GoogleAuthProvider.PROVIDER_ID),a;if(a=s&&s.clientId){e:{if((window.location&&window.location.protocol)==="http:"||(window.location&&window.location.protocol)==="https:"){for(l in t=t.a.get("credentialHelper"),Ad)if(Ad[l]===t){var l=Ad[l];break e}}l=Wc}a=l===Td}return a&&s.clientId||null}function mg(t){return t=tn(t,Z.auth.EmailAuthProvider.PROVIDER_ID),!!(t&&t.disableSignUp&&t.disableSignUp.status)}function Ur(t){return t=t.a.get("adminRestrictedOperation")||null,!(!t||!t.status)}function WE(t){var s=null;if(Hc(t).forEach(function(l){l.provider==Z.auth.PhoneAuthProvider.PROVIDER_ID&&he(l.recaptchaParameters)&&!Array.isArray(l.recaptchaParameters)&&(s=et(l.recaptchaParameters))}),s){var a=[];eb.forEach(function(l){typeof s[l]<"u"&&(a.push(l),delete s[l])}),a.length&&Qi('The following provided "recaptchaParameters" keys are not allowed: '+a.join(", "))}return s}function $E(t){return(t=t.a.get("adminRestrictedOperation"))&&t.adminEmail?t.adminEmail:null}function GE(t){if(t=t.a.get("adminRestrictedOperation")||null){var s=t.helpLink||null;if(s&&typeof s=="string")return function(){Ns(s)}}return null}function zE(t){return(t=tn(t,Z.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp&&t.disableSignUp.adminEmail||null}function KE(t){if((t=tn(t,Z.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp){var s=t.disableSignUp.helpLink||null;if(s&&typeof s=="string")return function(){Ns(s)}}return null}function gg(t,s){return t=(t=tn(t,s))&&t.scopes,Array.isArray(t)?t:[]}function vg(t,s){return t=(t=tn(t,s))&&t.customParameters,he(t)?(t=et(t),s===Z.auth.GoogleAuthProvider.PROVIDER_ID&&delete t.login_hint,s===Z.auth.GithubAuthProvider.PROVIDER_ID&&delete t.login,t):null}function YE(t){t=tn(t,Z.auth.PhoneAuthProvider.PROVIDER_ID);var s=null;return t&&typeof t.loginHint=="string"&&(s=lg(t.loginHint)),t&&t.defaultNationalNumber||s&&s.Aa||null}function JE(t){var s=(t=tn(t,Z.auth.PhoneAuthProvider.PROVIDER_ID))&&t.defaultCountry||null;s=s&&og(s);var a=null;return t&&typeof t.loginHint=="string"&&(a=lg(t.loginHint)),s&&s[0]||a&&Fr(a.a)||null}function Id(t){if(t=tn(t,Z.auth.PhoneAuthProvider.PROVIDER_ID),!t)return null;var s=t.whitelistedCountries,a=t.blacklistedCountries;if(typeof s<"u"&&(!Array.isArray(s)||s.length==0))throw Error("WhitelistedCountries must be a non-empty array.");if(typeof a<"u"&&!Array.isArray(a))throw Error("BlacklistedCountries must be an array.");if(s&&a)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!s&&!a)return Wt;if(t=[],s){a={};for(var l=0;l<s.length;l++)for(var d=ag(s[l]),p=0;p<d.length;p++)a[d[p].c]=d[p];for(var _ in a)a.hasOwnProperty(_)&&t.push(a[_])}else{for(_={},s=0;s<a.length;s++)for(d=ag(a[s]),l=0;l<d.length;l++)_[d[l].c]=d[l];for(d=0;d<Wt.length;d++)_!==null&&Wt[d].c in _||t.push(Wt[d])}return t}function yg(t){return yd(t.a,"queryParameterForWidgetMode")}function Qe(t){var s=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,s&&!t&&Qi("Privacy Policy URL is missing, the link will not be displayed."),s&&t){if(typeof s=="function")return s;if(typeof s=="string")return function(){Ns(s)}}return null}function Xe(t){var s=t.a.get("tosUrl")||null,a=t.a.get("privacyPolicyUrl")||null;if(a&&!s&&Qi("Term of Service URL is missing, the link will not be displayed."),s&&a){if(typeof a=="function")return a;if(typeof a=="string")return function(){Ns(a)}}return null}function _g(t){return(t=tn(t,Z.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.requireDisplayName<"u"?!!t.requireDisplayName:!0}function Hs(t){return t=tn(t,Z.auth.EmailAuthProvider.PROVIDER_ID),!(!t||t.signInMethod!==Z.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function QE(t){return t=tn(t,Z.auth.EmailAuthProvider.PROVIDER_ID),!(!t||!t.forceSameDevice)}function XE(t){if(Hs(t)){var s={url:_i(),handleCodeInApp:!0};(t=tn(t,Z.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.emailLinkSignIn=="function"&&si(s,t.emailLinkSignIn()),t=s.url;var a=_i();a instanceof ln||(a=hs(a)),t instanceof ln||(t=hs(t));var l=a;a=new ln(l);var d=!!t.j;d?wn(a,t.j):d=!!t.A,d?a.A=t.A:d=!!t.h,d?a.h=t.h:d=t.C!=null;var p=t.g;if(d)ls(a,t.C);else if(d=!!t.g){if(p.charAt(0)!="/"&&(l.h&&!l.g?p="/"+p:(l=a.g.lastIndexOf("/"),l!=-1&&(p=a.g.substr(0,l+1)+p))),p==".."||p==".")p="";else if(p.indexOf("./")!=-1||p.indexOf("/.")!=-1){l=p.lastIndexOf("/",0)==0,p=p.split("/");for(var _=[],T=0;T<p.length;){var M=p[T++];M=="."?l&&T==p.length&&_.push(""):M==".."?((1<_.length||_.length==1&&_[0]!="")&&_.pop(),l&&T==p.length&&_.push("")):(_.push(M),l=!0)}p=_.join("/")}}return d?a.g=p:d=t.a.toString()!=="",d?Fi(a,Ko(t.a)):d=!!t.s,d&&(a.s=t.s),s.url=a.toString(),s}return null}function Ed(t){var s=!!t.a.get("immediateFederatedRedirect"),a=qs(t);return t=wg(t),s&&a.length==1&&!Tt(dg,a[0])&&t==$c}function wg(t){t=t.a.get("signInFlow");for(var s in Sd)if(Sd[s]==t)return Sd[s];return $c}function bd(t){return wa(t).signInSuccess||null}function Ig(t){return wa(t).signInSuccessWithAuthResult||null}function Eg(t){return wa(t).signInFailure||null}function wa(t){return t.a.get("callbacks")||{}}var Td="googleyolo",Wc="none",Ad={nc:Td,NONE:Wc},$c="redirect",Sd={qc:"popup",rc:$c},Rd={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},ZE=["anonymous"],eb=["sitekey","tabindex","callback","expired-callback"],Ia,Ws,Cd,bg,Te={};function J(t,s,a,l){Te[t].apply(null,Array.prototype.slice.call(arguments,1))}function Tg(t){return t.classList?t.classList:(t=t.className,x(t)&&t.match(/\S+/g)||[])}function Ea(t,s){return t.classList?t.classList.contains(s):Tt(Tg(t),s)}function Gn(t,s){t.classList?t.classList.add(s):Ea(t,s)||(t.className+=0<t.className.length?" "+s:s)}function zn(t,s){t.classList?t.classList.remove(s):Ea(t,s)&&(t.className=Ah(Tg(t),function(a){return a!=s}).join(" "))}function vt(t){var s=t.type;switch(x(s)&&s.toLowerCase()){case"checkbox":case"radio":return t.checked?t.value:null;case"select-one":return s=t.selectedIndex,0<=s?t.options[s].value:null;case"select-multiple":s=[];for(var a,l=0;a=t.options[l];l++)a.selected&&s.push(a.value);return s.length?s:null;default:return t.value!=null?t.value:null}}function Ag(t,s){var a=t.type;switch(x(a)&&a.toLowerCase()){case"checkbox":case"radio":t.checked=s;break;case"select-one":if(t.selectedIndex=-1,x(s)){for(var l=0;a=t.options[l];l++)if(a.value==s){a.selected=!0;break}}break;case"select-multiple":for(x(s)&&(s=[s]),l=0;a=t.options[l];l++)if(a.selected=!1,s)for(var d,p=0;d=s[p];p++)a.value==d&&(a.selected=!0);break;default:t.value=s??""}}function tb(t){if(t.altKey&&!t.ctrlKey||t.metaKey||112<=t.keyCode&&123>=t.keyCode)return!1;if(ba(t.keyCode))return!0;switch(t.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!Gt;default:return 166>t.keyCode||183<t.keyCode}}function Sg(t,s,a,l,d,p){if(ct&&!Bt("525"))return!0;if(bn&&d)return ba(t);if(d&&!l)return!1;if(!Gt){typeof s=="number"&&(s=Pd(s));var _=s==17||s==18||bn&&s==91;if((!a||bn)&&_||bn&&s==16&&(l||p))return!1}if((ct||En)&&l&&a)switch(t){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Me&&l&&s==t)return!1;switch(t){case 13:return Gt?p||d?!1:!(a&&l):!0;case 27:return!(ct||En||Gt)}return Gt&&(l||d||p)?!1:ba(t)}function ba(t){if(48<=t&&57>=t||96<=t&&106>=t||65<=t&&90>=t||(ct||En)&&t==0)return!0;switch(t){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return Gt;default:return!1}}function Pd(t){if(Gt)t=nb(t);else if(bn&&ct)switch(t){case 93:t=91}return t}function nb(t){switch(t){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return t}}function $s(t){nt.call(this),this.a=t,Cn(t,"keydown",this.g,!1,this),Cn(t,"click",this.h,!1,this)}oe($s,nt),$s.prototype.g=function(t){(t.keyCode==13||ct&&t.keyCode==3)&&Rg(this,t)},$s.prototype.h=function(t){Rg(this,t)};function Rg(t,s){var a=new Pg(s);if(Yi(t,a)){a=new Cg(s);try{Yi(t,a)}finally{s.stopPropagation()}}}$s.prototype.o=function(){$s.K.o.call(this),Or(this.a,"keydown",this.g,!1,this),Or(this.a,"click",this.h,!1,this),delete this.a};function Cg(t){Ht.call(this,t.a),this.type="action"}oe(Cg,Ht);function Pg(t){Ht.call(this,t.a),this.type="beforeaction"}oe(Pg,Ht);function Gs(t){nt.call(this),this.a=t,t=Me?"focusout":"blur",this.g=Cn(this.a,Me?"focusin":"focus",this,!Me),this.h=Cn(this.a,t,this,!Me)}oe(Gs,nt),Gs.prototype.handleEvent=function(t){var s=new Ht(t.a);s.type=t.type=="focusin"||t.type=="focus"?"focusin":"focusout",Yi(this,s)},Gs.prototype.o=function(){Gs.K.o.call(this),Ki(this.g),Ki(this.h),delete this.a};function Gc(t,s){nt.call(this),this.g=t||1,this.a=s||b,this.h=C(this.gc,this),this.j=bt()}oe(Gc,nt),i=Gc.prototype,i.Ka=!1,i.aa=null,i.gc=function(){if(this.Ka){var t=bt()-this.j;0<t&&t<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-t):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),Yi(this,"tick"),this.Ka&&(zc(this),this.start()))}},i.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=bt())};function zc(t){t.Ka=!1,t.aa&&(t.a.clearTimeout(t.aa),t.aa=null)}i.o=function(){Gc.K.o.call(this),zc(this),delete this.a};function ib(t,s){if(pe(t))s&&(t=C(t,s));else if(t&&typeof t.handleEvent=="function")t=C(t.handleEvent,t);else throw Error("Invalid listener argument");return b.setTimeout(t,0)}function zs(t){Ve.call(this),this.g=t,this.a={}}oe(zs,Ve);var kg=[];function Ks(t,s,a,l){Y(a)||(a&&(kg[0]=a.toString()),a=kg);for(var d=0;d<a.length;d++){var p=Cn(s,a[d],l||t.handleEvent,!1,t.g||t);if(!p)break;t.a[p.key]=p}}function Dg(t){qo(t.a,function(s,a){this.a.hasOwnProperty(a)&&Ki(s)},t),t.a={}}zs.prototype.o=function(){zs.K.o.call(this),Dg(this)},zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ta(t){nt.call(this),this.a=null,this.g=t,t=Me||En||ct&&!Bt("531")&&t.tagName=="TEXTAREA",this.h=new zs(this),Ks(this.h,this.g,t?["keydown","paste","cut","drop","input"]:"input",this)}oe(Ta,nt),Ta.prototype.handleEvent=function(t){if(t.type=="input")Me&&Bt(10)&&t.keyCode==0&&t.j==0||(kd(this),Yi(this,Ng(t)));else if(t.type!="keydown"||tb(t)){var s=t.type=="keydown"?this.g.value:null;Me&&t.keyCode==229&&(s=null);var a=Ng(t);kd(this),this.a=ib(function(){this.a=null,this.g.value!=s&&Yi(this,a)},this)}};function kd(t){t.a!=null&&(b.clearTimeout(t.a),t.a=null)}function Ng(t){return t=new Ht(t.a),t.type="input",t}Ta.prototype.o=function(){Ta.K.o.call(this),this.h.m(),kd(this),delete this.g};function Aa(t,s){nt.call(this),t&&(this.Oa&&xg(this),this.qa=t,this.Na=Cn(this.qa,"keypress",this,s),this.Ya=Cn(this.qa,"keydown",this.Jb,s,this),this.Oa=Cn(this.qa,"keyup",this.Kb,s,this))}oe(Aa,nt),i=Aa.prototype,i.qa=null,i.Na=null,i.Ya=null,i.Oa=null,i.R=-1,i.X=-1,i.Ua=!1;var Og={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Lg={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Mg=!ct||Bt("525"),Vg=bn&&Gt;i=Aa.prototype,i.Jb=function(t){(ct||En)&&(this.R==17&&!t.ctrlKey||this.R==18&&!t.altKey||bn&&this.R==91&&!t.metaKey)&&(this.X=this.R=-1),this.R==-1&&(t.ctrlKey&&t.keyCode!=17?this.R=17:t.altKey&&t.keyCode!=18?this.R=18:t.metaKey&&t.keyCode!=91&&(this.R=91)),Mg&&!Sg(t.keyCode,this.R,t.shiftKey,t.ctrlKey,t.altKey,t.metaKey)?this.handleEvent(t):(this.X=Pd(t.keyCode),Vg&&(this.Ua=t.altKey))},i.Kb=function(t){this.X=this.R=-1,this.Ua=t.altKey},i.handleEvent=function(t){var s=t.a,a=s.altKey;if(Me&&t.type=="keypress")var l=this.X,d=l!=13&&l!=27?s.keyCode:0;else(ct||En)&&t.type=="keypress"?(l=this.X,d=0<=s.charCode&&63232>s.charCode&&ba(l)?s.charCode:0):gs&&!ct?(l=this.X,d=ba(l)?s.keyCode:0):(t.type=="keypress"?(Vg&&(a=this.Ua),s.keyCode==s.charCode?32>s.keyCode?(l=s.keyCode,d=0):(l=this.X,d=s.charCode):(l=s.keyCode||this.X,d=s.charCode||0)):(l=s.keyCode||this.X,d=s.charCode||0),bn&&d==63&&l==224&&(l=191));var p=l=Pd(l);l?63232<=l&&l in Og?p=Og[l]:l==25&&t.shiftKey&&(p=9):s.keyIdentifier&&s.keyIdentifier in Lg&&(p=Lg[s.keyIdentifier]),Gt&&Mg&&t.type=="keypress"&&!Sg(p,this.R,t.shiftKey,t.ctrlKey,a,t.metaKey)||(t=p==this.R,this.R=p,s=new Fg(p,d,t,s),s.altKey=a,Yi(this,s))},i.N=function(){return this.qa};function xg(t){t.Na&&(Ki(t.Na),Ki(t.Ya),Ki(t.Oa),t.Na=null,t.Ya=null,t.Oa=null),t.qa=null,t.R=-1,t.X=-1}i.o=function(){Aa.K.o.call(this),xg(this)};function Fg(t,s,a,l){Ht.call(this,l),this.type="key",this.keyCode=t,this.j=s,this.repeat=a}oe(Fg,Ht);function Ys(t,s,a,l){this.top=t,this.right=s,this.bottom=a,this.left=l}Ys.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Ys.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Ys.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Ys.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};function Kc(t,s){var a=Wi(t);return a.defaultView&&a.defaultView.getComputedStyle&&(t=a.defaultView.getComputedStyle(t,null))&&(t[s]||t.getPropertyValue(s))||""}function Ug(t){try{var s=t.getBoundingClientRect()}catch{return{left:0,top:0,right:0,bottom:0}}return Me&&t.ownerDocument.body&&(t=t.ownerDocument,s.left-=t.documentElement.clientLeft+t.body.clientLeft,s.top-=t.documentElement.clientTop+t.body.clientTop),s}function rb(t,s){s=s||Is(document);var a=s||Is(document),l=jg(t),d=jg(a);if(!Me||9<=Number(qt)){_=Kc(a,"borderLeftWidth");var p=Kc(a,"borderRightWidth");T=Kc(a,"borderTopWidth"),M=Kc(a,"borderBottomWidth"),p=new Ys(parseFloat(T),parseFloat(p),parseFloat(M),parseFloat(_))}else{var _=Yc(a,"borderLeft");p=Yc(a,"borderRight");var T=Yc(a,"borderTop"),M=Yc(a,"borderBottom");p=new Ys(T,p,M,_)}a==Is(document)?(_=l.a-a.scrollLeft,l=l.g-a.scrollTop,!Me||10<=Number(qt)||(_+=p.left,l+=p.top)):(_=l.a-d.a-p.left,l=l.g-d.g-p.top),d=t.offsetWidth,p=t.offsetHeight,T=ct&&!d&&!p,L(d)&&!T||!t.getBoundingClientRect?t=new Hi(d,p):(t=Ug(t),t=new Hi(t.right-t.left,t.bottom-t.top)),d=a.clientHeight-t.height,p=a.scrollLeft,T=a.scrollTop,p+=Math.min(_,Math.max(_-(a.clientWidth-t.width),0)),T+=Math.min(l,Math.max(l-d,0)),a=new Xt(p,T),s.scrollLeft=a.a,s.scrollTop=a.g}function jg(t){var s=Wi(t),a=new Xt(0,0),l=s?Wi(s):document;return l=!Me||9<=Number(qt)||Pr(l).a.compatMode=="CSS1Compat"?l.documentElement:l.body,t==l||(t=Ug(t),l=Pr(s).a,s=Is(l),l=l.parentWindow||l.defaultView,s=Me&&Bt("10")&&l.pageYOffset!=s.scrollTop?new Xt(s.scrollLeft,s.scrollTop):new Xt(l.pageXOffset||s.scrollLeft,l.pageYOffset||s.scrollTop),a.a=t.left+s.a,a.g=t.top+s.g),a}var Bg={thin:2,medium:4,thick:6};function Yc(t,s){if((t.currentStyle?t.currentStyle[s+"Style"]:null)=="none")return 0;var a=t.currentStyle?t.currentStyle[s+"Width"]:null;if(a in Bg)t=Bg[a];else if(/^\d+px?$/.test(a))t=parseInt(a,10);else{s=t.style.left;var l=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,t.style.left=a,a=t.style.pixelLeft,t.style.left=s,t.runtimeStyle.left=l,t=+a}return t}function Dd(){}F(Dd),Dd.prototype.a=0;function jr(t){nt.call(this),this.s=t||Pr(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}oe(jr,nt),i=jr.prototype,i.Lb=Dd.Xa(),i.N=function(){return this.g};function we(t,s){return t.g?pi(s,t.g||t.s.a):null}function Sa(t){return t.L||(t.L=new zs(t)),t.L}i.Za=function(t){if(this.Y&&this.Y!=t)throw Error("Method not supported");jr.K.Za.call(this,t)},i.kb=function(){this.g=this.s.a.createElement("DIV")},i.render=function(t){if(this.na)throw Error("Component already rendered");this.g||this.kb(),t?t.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},i.v=function(){this.na=!0,Nd(this,function(t){!t.na&&t.N()&&t.v()})},i.ya=function(){Nd(this,function(t){t.na&&t.ya()}),this.L&&Dg(this.L),this.na=!1},i.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Nd(this,function(t){t.m()}),this.g&&mi(this.g),this.Y=this.g=this.oa=this.Ea=null,jr.K.o.call(this)};function Nd(t,s){t.Ea&&$t(t.Ea,s,void 0)}i.removeChild=function(t,s){if(t){var a=x(t)?t:t.cb||(t.cb=":"+(t.Lb.a++).toString(36));if(this.oa&&a?(t=this.oa,t=(t!==null&&a in t?t[a]:void 0)||null):t=null,a&&t){var l=this.oa;if(a in l&&delete l[a],Yu(this.Ea,t),s&&(t.ya(),t.g&&mi(t.g)),s=t,s==null)throw Error("Unable to set parent component");s.Y=null,jr.K.Za.call(s,null)}}if(!t)throw Error("Child is not in parent component");return t};function $e(t,s){var a=na(t,"firebaseui-textfield");s?(zn(t,"firebaseui-input-invalid"),Gn(t,"firebaseui-input"),a&&zn(a,"firebaseui-textfield-invalid")):(zn(t,"firebaseui-input"),Gn(t,"firebaseui-input-invalid"),a&&Gn(a,"firebaseui-textfield-invalid"))}function Js(t,s,a){s=new Ta(s),Ct(t,N(Hn,s)),Ks(Sa(t),s,"input",a)}function Ra(t,s,a){s=new Aa(s),Ct(t,N(Hn,s)),Ks(Sa(t),s,"key",function(l){l.keyCode==13&&(l.stopPropagation(),l.preventDefault(),a(l))})}function sb(t,s,a){s=new Gs(s),Ct(t,N(Hn,s)),Ks(Sa(t),s,"focusin",a)}function ob(t,s,a){s=new Gs(s),Ct(t,N(Hn,s)),Ks(Sa(t),s,"focusout",a)}function Be(t,s,a){s=new $s(s),Ct(t,N(Hn,s)),Ks(Sa(t),s,"action",function(l){l.stopPropagation(),l.preventDefault(),a(l)})}function nn(t){Gn(t,"firebaseui-hidden")}function yt(t,s){s&&Es(t,s),zn(t,"firebaseui-hidden")}function Qs(t){return!Ea(t,"firebaseui-hidden")&&t.style.display!="none"}function Xs(t){t=t||{};var s=t.email,a=t.disabled,l='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return l=t.wc?l+"Enter new email address":l+"Email",l+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+je(s??"")+'"'+(a?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',K(l)}function Yt(t){t=t||{},t=t.label;var s='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return s=t?s+ee(t):s+"Next",K(s+"</button>")}function Od(){var t=""+Yt({label:Le("Sign In")});return K(t)}function qg(){var t=""+Yt({label:Le("Save")});return K(t)}function Pn(){var t=""+Yt({label:Le("Continue")});return K(t)}function Hg(t){t=t||{},t=t.label;var s='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return s=t?s+ee(t):s+"Choose password",K(s+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function Wg(){var t={},s='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return s=t.current?s+"Current password":s+"Password",K(s+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function $g(){return K('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function rn(t){t=t||{},t=t.label;var s='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return s=t?s+ee(t):s+"Cancel",K(s+"</button>")}function Pt(t){var s="";return t.F&&t.D&&(s+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),K(s)}function Zs(t){var s="";return t.F&&t.D&&(s+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),K(s)}function Gg(t){return t='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+ee(t.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',K(t)}Gg.a="firebaseui.auth.soy2.element.infoBar";function zg(t){var s=t.content;return t=t.Ab,K('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(t?" "+je(t):"")+'">'+ee(s)+"</dialog>")}function Kg(t){var s=t.message;return K(zg({content:ra('<div class="firebaseui-dialog-icon-wrapper"><div class="'+je(t.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+ee(s)+"</div>")}))}Kg.a="firebaseui.auth.soy2.element.progressDialog";function Yg(t){var s='<div class="firebaseui-list-box-actions">';t=t.items;for(var a=t.length,l=0;l<a;l++){var d=t[l];s+='<button type="button" data-listboxid="'+je(d.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(d.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+je(d.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+ee(d.label)+"</div></button>"}return s=""+zg({Ab:Le("firebaseui-list-box-dialog"),content:ra(s+"</div>")}),K(s)}Yg.a="firebaseui.auth.soy2.element.listBoxDialog";function Jc(t){return t=t||{},K(t.tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}Jc.a="firebaseui.auth.soy2.element.busyIndicator";function Xi(t,s){return t=t||{},t=t.ga,ge(t.S?t.S:s.hb[t.providerId]?""+s.hb[t.providerId]:t.providerId&&t.providerId.indexOf("saml.")==0||t.providerId&&t.providerId.indexOf("oidc.")==0?t.providerId.substring(5):""+t.providerId)}function Ld(t){Jg(t,"upgradeElement")}function Md(t){Jg(t,"downgradeElements")}var ab=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Jg(t,s){t&&window.componentHandler&&window.componentHandler[s]&&ab.forEach(function(a){Ea(t,a)&&window.componentHandler[s](t),$t(fi(a,t),function(l){window.componentHandler[s](l)})})}function Qg(t,s,a){if(Qc.call(this),document.body.appendChild(t),t.showModal||window.dialogPolyfill.registerDialog(t),t.showModal(),Ld(t),s&&Be(this,t,function(p){var _=t.getBoundingClientRect();(p.clientX<_.left||_.left+_.width<p.clientX||p.clientY<_.top||_.top+_.height<p.clientY)&&Qc.call(this)}),!a){var l=this.N().parentElement||this.N().parentNode;if(l){var d=this;this.da=function(){if(t.open){var p=t.getBoundingClientRect().height,_=l.getBoundingClientRect().height,T=l.getBoundingClientRect().top-document.body.getBoundingClientRect().top,M=l.getBoundingClientRect().left-document.body.getBoundingClientRect().left,H=t.getBoundingClientRect().width,X=l.getBoundingClientRect().width;t.style.top=(T+(_-p)/2).toString()+"px",p=M+(X-H)/2,t.style.left=p.toString()+"px",t.style.right=(document.body.getBoundingClientRect().width-p-H).toString()+"px"}else window.removeEventListener("resize",d.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Qc(){var t=Vd.call(this);t&&(Md(t),t.open&&t.close(),mi(t),this.da&&window.removeEventListener("resize",this.da))}function Vd(){return pi("firebaseui-id-dialog")}function Xg(){mi(Zg.call(this))}function Zg(){return we(this,"firebaseui-id-info-bar")}function ev(){return we(this,"firebaseui-id-dismiss-info-bar")}var ub={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function xd(t,s,a){vi.call(this,t,s);for(var l in a)this[l]=a[l]}oe(xd,vi);function U(t,s,a,l,d){jr.call(this,a),this.fb=t,this.eb=s,this.Fa=!1,this.Ga=l||null,this.A=this.ca=null,this.Z=et(ub),si(this.Z,d||{})}oe(U,jr),i=U.prototype,i.kb=function(){var t=gi(this.fb,this.eb,this.Z,this.s);Ld(t),this.g=t},i.v=function(){if(U.K.v.call(this),nm(xe(this),new xd("pageEnter",xe(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var t=this.Z.F;Be(this,this.bb(),function(){t()})}if(this.ab()&&this.Z.D){var s=this.Z.D;Be(this,this.ab(),function(){s()})}},i.ya=function(){nm(xe(this),new xd("pageExit",xe(this),{pageId:this.Ga})),U.K.ya.call(this)},i.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Md(this.N()),U.K.o.call(this)};function cb(t){t.Fa=!0;var s=Ea(t.N(),"firebaseui-use-spinner");t.ca=window.setTimeout(function(){t.N()&&t.A===null&&(t.A=gi(Jc,{tb:s},null,t.s),t.N().appendChild(t.A),Ld(t.A))},500)}i.I=function(t,s,a,l){function d(){if(p.T)return null;p.Fa=!1,window.clearTimeout(p.ca),p.ca=null,p.A&&(Md(p.A),mi(p.A),p.A=null)}var p=this;return p.Fa?null:(cb(p),t.apply(null,s).then(a,l).then(d,d))};function xe(t){return t.N().parentElement||t.N().parentNode}function Ca(t,s,a){Ra(t,s,function(){a.focus()})}function eo(t,s,a){Ra(t,s,function(){a()})}A(U.prototype,{a:function(t){Xg.call(this);var s=gi(Gg,{message:t},null,this.s);this.N().appendChild(s),Be(this,ev.call(this),function(){mi(s)})},yc:Xg,Ac:Zg,zc:ev,$:function(t,s){t=gi(Kg,{Ma:t,message:s},null,this.s),Qg.call(this,t)},h:Qc,Cb:Vd,Cc:function(){return we(this,"firebaseui-tos")},bb:function(){return we(this,"firebaseui-tos-link")},ab:function(){return we(this,"firebaseui-pp-link")},Dc:function(){return we(this,"firebaseui-tos-list")}});function tv(t,s,a){t=t||{},s=t.Va;var l=t.ia;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Xs(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?rn(null):"")+Yt(null)+'</div></div><div class="firebaseui-card-footer">'+(l?Zs(a):Pt(a))+"</div></form></div>",K(t)}tv.a="firebaseui.auth.soy2.page.signIn";function nv(t,s,a){return t=t||{},s=t.ia,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+Xs(t)+Wg()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+$g()+'</div><div class="firebaseui-form-actions">'+Od()+'</div></div><div class="firebaseui-card-footer">'+(s?Zs(a):Pt(a))+"</div></form></div>",K(t)}nv.a="firebaseui.auth.soy2.page.passwordSignIn";function iv(t,s,a){t=t||{};var l=t.Tb;s=t.Ta;var d=t.ia,p='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+Xs(t);return l?(t=t||{},t=t.name,t='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+je(t??"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',t=K(t)):t="",a=p+t+Hg(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?rn(null):"")+qg()+'</div></div><div class="firebaseui-card-footer">'+(d?Zs(a):Pt(a))+"</div></form></div>",K(a)}iv.a="firebaseui.auth.soy2.page.passwordSignUp";function rv(t,s,a){return t=t||{},s=t.Ta,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+Xs(t)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?rn(null):"")+Yt({label:Le("Send")})+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(t)}rv.a="firebaseui.auth.soy2.page.passwordRecovery";function sv(t,s,a){s=t.G;var l="";return t="Follow the instructions sent to <strong>"+(ee(t.email)+"</strong> to recover your password"),l+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">',s&&(l+='<div class="firebaseui-form-actions">'+Yt({label:Le("Done")})+"</div>"),l+='</div><div class="firebaseui-card-footer">'+Pt(a)+"</div></div>",K(l)}sv.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent";function ov(t,s,a){return K('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+Jc(null)+"</div></div>")}ov.a="firebaseui.auth.soy2.page.callback";function av(t,s,a){return K('<div class="firebaseui-container firebaseui-id-page-spinner">'+Jc({tb:!0})+"</div>")}av.a="firebaseui.auth.soy2.page.spinner";function uv(){return K('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}uv.a="firebaseui.auth.soy2.page.blank";function cv(t,s,a){s="",t="A sign-in email with additional instructions was sent to <strong>"+(ee(t.email)+"</strong>. Check your email to complete sign-in.");var l=K('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');return s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+l+'</div><div class="firebaseui-form-actions">'+rn({label:Le("Back")})+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(s)}cv.a="firebaseui.auth.soy2.page.emailLinkSignInSent";function lv(t,s,a){return t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn't work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">`+K('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+rn({label:Le("Back")})+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(t)}lv.a="firebaseui.auth.soy2.page.emailNotReceived";function hv(t,s,a){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+Xs(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+rn(null)+Yt(null)+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(t)}hv.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation";function dv(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+rn({label:Le("Dismiss")})+"</div></div></div>";return K(t)}dv.a="firebaseui.auth.soy2.page.differentDeviceError";function fv(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+rn({label:Le("Dismiss")})+"</div></div></div>";return K(t)}fv.a="firebaseui.auth.soy2.page.anonymousUserMismatch";function pv(t,s,a){return s="",t="You’ve already used <strong>"+(ee(t.email)+"</strong> to sign in. Enter your password for that account."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+t+"</p>"+Wg()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+$g()+'</div><div class="firebaseui-form-actions">'+Od()+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(s)}pv.a="firebaseui.auth.soy2.page.passwordLinking";function mv(t,s,a){var l=t.email;return s="",t=""+Xi(t,a),t=Le(t),l="You’ve already used <strong>"+(ee(l)+("</strong>. You can connect your <strong>"+(ee(t)+("</strong> account with <strong>"+(ee(l)+"</strong> by signing in with email link below."))))),t="For this flow to successfully connect your "+(ee(t)+" account with this email, you have to open the link on the same device or browser."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+l+'<p class="firebaseui-text firebaseui-text-justify">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Od()+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(s)}mv.a="firebaseui.auth.soy2.page.emailLinkSignInLinking";function gv(t,s,a){s="";var l=""+Xi(t,a);return l=Le(l),t="You originally intended to connect <strong>"+(ee(l)+"</strong> to your email account but have opened the link on a different device where you are not signed in."),l="If you still want to connect your <strong>"+(ee(l)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+t+'</p><p class="firebaseui-text firebaseui-text-justify">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Pn()+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(s)}gv.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";function vv(t,s,a){var l=t.email;return s="",t=""+Xi(t,a),t=Le(t),l="You’ve already used <strong>"+(ee(l)+("</strong>. Sign in with "+(ee(t)+" to continue."))),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Yt({label:Le("Sign in with "+t)})+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(s)}vv.a="firebaseui.auth.soy2.page.federatedLinking";function yv(t,s,a){t=t||{};var l=t.kc;s=t.yb,t=t.Eb;var d='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return l?(l="<strong>"+(ee(l)+"</strong> is not authorized to view the requested page."),d+=l):d+="User is not authorized to view the requested page.",d+="</p>",s&&(s="Please contact <strong>"+(ee(s)+"</strong> for authorization."),d+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+s+"</p>"),d+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',t&&(d+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),d+='</div><div class="firebaseui-form-actions">'+rn({label:Le("Back")})+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(d)}yv.a="firebaseui.auth.soy2.page.unauthorizedUser";function _v(t,s,a){return s="",t="To continue sign in with <strong>"+(ee(t.email)+"</strong> on this device, you have to recover the password."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+rn(null)+Yt({label:Le("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(s)}_v.a="firebaseui.auth.soy2.page.unsupportedProvider";function wv(t){var s="",a='<p class="firebaseui-text">for <strong>'+(ee(t.email)+"</strong></p>");return s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+a+Hg(Rs(t))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+qg()+"</div></div></form></div>",K(s)}wv.a="firebaseui.auth.soy2.page.passwordReset";function Iv(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></div>",K(t)}Iv.a="firebaseui.auth.soy2.page.passwordResetSuccess";function Ev(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></div>",K(t)}Ev.a="firebaseui.auth.soy2.page.passwordResetFailure";function bv(t){var s=t.G,a="";return t="Your sign-in email address has been changed back to <strong>"+(ee(t.email)+"</strong>."),a+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(s?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></form></div>",K(a)}bv.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess";function Tv(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></div>",K(t)}Tv.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure";function Av(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></div>",K(t)}Av.a="firebaseui.auth.soy2.page.emailVerificationSuccess";function Sv(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></div>",K(t)}Sv.a="firebaseui.auth.soy2.page.emailVerificationFailure";function Rv(t){var s=t.G,a="";return t="You can now sign in with your new email <strong>"+(ee(t.email)+"</strong>."),a+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">'+(s?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></div>",K(a)}Rv.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";function Cv(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></div>",K(t)}Cv.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";function Pv(t){var s=t.factorId,a=t.phoneNumber;t=t.G;var l='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';switch(s){case"phone":s="The <strong>"+(ee(s)+(" "+(ee(a)+"</strong> was removed as a second authentication step."))),l+=s;break;default:l+="The device or app was removed as a second authentication step."}return l+=`</p><p class="firebaseui-text">If you don't recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">`+(t?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></form></div>",K(l)}Pv.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";function kv(t){return t=t||{},t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn't remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn't work, contact support for assistance.</p></div><div class="firebaseui-card-actions">`+(t.G?'<div class="firebaseui-form-actions">'+Pn()+"</div>":"")+"</div></div>",K(t)}kv.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";function Dv(t){var s=t.zb;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+ee(t.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',s&&(t+=Yt({label:Le("Retry")})),K(t+"</div></div></div>")}Dv.a="firebaseui.auth.soy2.page.recoverableError";function Nv(t){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+ee(t.errorMessage)+"</p></div></div>",K(t)}Nv.a="firebaseui.auth.soy2.page.unrecoverableError";function Ov(t,s,a){var l=t.Qb;return s="",t="Continue with "+(ee(t.jc)+"?"),l="You originally wanted to sign in with "+ee(l),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+t+'</h2><p class="firebaseui-text">'+l+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+rn(null)+Yt({label:Le("Continue")})+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form></div>",K(s)}Ov.a="firebaseui.auth.soy2.page.emailMismatch";function Lv(t,s,a){var l='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=t.Sb,s=t.length;for(var d=0;d<s;d++){var p={ga:t[d]},_=a;p=p||{};var T=p.ga,M=p;M=M||{};var H="";switch(M.ga.providerId){case"google.com":H+="firebaseui-idp-google";break;case"github.com":H+="firebaseui-idp-github";break;case"facebook.com":H+="firebaseui-idp-facebook";break;case"twitter.com":H+="firebaseui-idp-twitter";break;case"phone":H+="firebaseui-idp-phone";break;case"anonymous":H+="firebaseui-idp-anonymous";break;case"password":H+="firebaseui-idp-password";break;default:H+="firebaseui-idp-generic"}M='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+je(ge(H))+' firebaseui-id-idp-button" data-provider-id="'+je(T.providerId)+'" style="background-color:',H=(H=p)||{},H=H.ga,M=M+je(sa(ge(H.ta?H.ta:_.wa[H.providerId]?""+_.wa[H.providerId]:H.providerId.indexOf("saml.")==0?""+_.wa.saml:H.providerId.indexOf("oidc.")==0?""+_.wa.oidc:""+_.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var X=p;H=_,X=X||{},X=X.ga,H=lc(X.za?qn(X.za):H.xa[X.providerId]?qn(H.xa[X.providerId]):X.providerId.indexOf("saml.")==0?qn(H.xa.saml):X.providerId.indexOf("oidc.")==0?qn(H.xa.oidc):qn(H.xa.password)),M=M+je(qn(H))+'"></span>',T.providerId=="password"?(M+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',T.V?M+=ee(T.V):T.S?(p="Sign in with "+ee(Xi(p,_)),M+=p):M+="Sign in with email",M+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',M=T.S?M+ee(T.S):M+"Email",M+="</span>"):T.providerId=="phone"?(M+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',T.V?M+=ee(T.V):T.S?(p="Sign in with "+ee(Xi(p,_)),M+=p):M+="Sign in with phone",M+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',M=T.S?M+ee(T.S):M+"Phone",M+="</span>"):T.providerId=="anonymous"?(M+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',T.V?M+=ee(T.V):T.S?(p="Sign in with "+ee(Xi(p,_)),M+=p):M+="Continue as guest",M+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',M=T.S?M+ee(T.S):M+"Guest",M+="</span>"):(M+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',T.V?M+=ee(T.V):(H="Sign in with "+ee(Xi(p,_)),M+=H),M+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(T.S?ee(T.S):ee(Xi(p,_)))+"</span>"),T=K(M+"</button>"),l+='<li class="firebaseui-list-item">'+T+"</li>"}return l+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Zs(a)+"</div></div>",K(l)}Lv.a="firebaseui.auth.soy2.page.providerSignIn";function Mv(t,s,a){t=t||{};var l=t.Gb,d=t.Va;s=t.ia,t=t||{},t=t.Aa,t='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+je(t??"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+K(t);var p;return l?p=K('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):p="",p=t+p+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(d?rn(null):"")+Yt({label:Le("Verify")})+'</div></div><div class="firebaseui-card-footer">',s?(s='<p class="firebaseui-tos firebaseui-phone-tos">',s=a.F&&a.D?s+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':s+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",a=K(s+"</p>")):a=K('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+Pt(a),K(p+a+"</div></form></div>")}Mv.a="firebaseui.auth.soy2.page.phoneSignInStart";function Vv(t,s,a){t=t||{},s=t.phoneNumber;var l="";return t='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+(ee(s)+"</a>"),ee(s),s=l,l=K('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'),a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+"</p>"+l+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+rn(null)+Yt({label:Le("Continue")})+'</div></div><div class="firebaseui-card-footer">'+Pt(a)+"</div></form>",t=K('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),K(s+(a+t+"</div>"))}Vv.a="firebaseui.auth.soy2.page.phoneSignInFinish";function xv(){return K('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}xv.a="firebaseui.auth.soy2.page.signOut";function Fv(t,s,a){var l='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=t.ec,s=t.length;for(var d=0;d<s;d++){var p=t[d],_="",T=ee(p.displayName),M=p.tenantId?p.tenantId:"top-level-project";M=Le(M),_+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+je(M)+' firebaseui-id-tenant-selection-button"'+(p.tenantId?'data-tenant-id="'+je(p.tenantId)+'"':"")+'style="background-color:'+je(sa(p.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+je(qn(p.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',p.V?_+=ee(p.V):(p="Sign in to "+ee(p.displayName),_+=p),_=K(_+('</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+T+"</span></button>")),l+='<li class="firebaseui-list-item">'+_+"</li>"}return l+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Zs(a)+"</div></div>",K(l)}Fv.a="firebaseui.auth.soy2.page.selectTenant";function Uv(t,s,a){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Xs(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Yt(null)+'</div></div><div class="firebaseui-card-footer">'+Zs(a)+"</div></form></div>",K(t)}Uv.a="firebaseui.auth.soy2.page.providerMatchByEmail";function lt(){return we(this,"firebaseui-id-submit")}function rt(){return we(this,"firebaseui-id-secondary-link")}function _t(t,s){Be(this,lt.call(this),function(l){t(l)});var a=rt.call(this);a&&s&&Be(this,a,function(l){s(l)})}function Xc(){return we(this,"firebaseui-id-password")}function Zc(){return we(this,"firebaseui-id-password-error")}function jv(){var t=Xc.call(this),s=Zc.call(this);Js(this,t,function(){Qs(s)&&($e(t,!0),nn(s))})}function Bv(){var t=Xc.call(this),s=Zc.call(this);return vt(t)?($e(t,!0),nn(s),s=!0):($e(t,!1),yt(s,ge("Enter your password").toString()),s=!1),s?vt(t):null}function to(t,s,a,l,d,p){U.call(this,pv,{email:t},p,"passwordLinking",{F:l,D:d}),this.w=s,this.H=a}f(to,U),to.prototype.v=function(){this.P(),this.M(this.w,this.H),eo(this,this.i(),this.w),this.i().focus(),U.prototype.v.call(this)},to.prototype.o=function(){this.w=null,U.prototype.o.call(this)},to.prototype.j=function(){return vt(we(this,"firebaseui-id-email"))},A(to.prototype,{i:Xc,B:Zc,P:jv,u:Bv,ea:lt,ba:rt,M:_t});var lb=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function wi(){return we(this,"firebaseui-id-email")}function Zi(){return we(this,"firebaseui-id-email-error")}function no(t){var s=wi.call(this),a=Zi.call(this);Js(this,s,function(){Qs(a)&&($e(s,!0),nn(a))}),t&&Ra(this,s,function(){t()})}function io(){return At(vt(wi.call(this))||"")}function ro(){var t=wi.call(this),s=Zi.call(this),a=vt(t)||"";return a?lb.test(a)?($e(t,!0),nn(s),s=!0):($e(t,!1),yt(s,ge("That email address isn't correct").toString()),s=!1):($e(t,!1),yt(s,ge("Enter your email address to continue").toString()),s=!1),s?At(vt(t)):null}function Pa(t,s,a,l,d,p,_){U.call(this,nv,{email:a,ia:!!p},_,"passwordSignIn",{F:l,D:d}),this.w=t,this.H=s}f(Pa,U),Pa.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Ca(this,this.l(),this.i()),eo(this,this.i(),this.w),vt(this.l())?this.i().focus():this.l().focus(),U.prototype.v.call(this)},Pa.prototype.o=function(){this.H=this.w=null,U.prototype.o.call(this)},A(Pa.prototype,{l:wi,U:Zi,P:no,M:io,j:ro,i:Xc,B:Zc,ea:jv,u:Bv,ua:lt,pa:rt,ba:_t});function Re(t,s,a,l,d,p){U.call(this,t,s,l,d||"notice",p),this.i=a||null}oe(Re,U),Re.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Re.K.v.call(this)},Re.prototype.o=function(){this.i=null,Re.K.o.call(this)},A(Re.prototype,{l:lt,w:rt,u:_t});function el(t,s,a,l,d){Re.call(this,sv,{email:t,G:!!s},s,d,"passwordRecoveryEmailSent",{F:a,D:l})}oe(el,Re);function qv(t,s){Re.call(this,Av,{G:!!t},t,s,"emailVerificationSuccess")}oe(qv,Re);function Hv(t,s){Re.call(this,Sv,{G:!!t},t,s,"emailVerificationFailure")}oe(Hv,Re);function Wv(t,s,a){Re.call(this,Rv,{email:t,G:!!s},s,a,"verifyAndChangeEmailSuccess")}oe(Wv,Re);function $v(t,s){Re.call(this,Cv,{G:!!t},t,s,"verifyAndChangeEmailFailure")}oe($v,Re);function Gv(t,s){Re.call(this,kv,{G:!!t},t,s,"revertSecondFactorAdditionFailure")}oe(Gv,Re);function zv(t){Re.call(this,xv,void 0,void 0,t,"signOut")}oe(zv,Re);function Kv(t,s){Re.call(this,Iv,{G:!!t},t,s,"passwordResetSuccess")}oe(Kv,Re);function Yv(t,s){Re.call(this,Ev,{G:!!t},t,s,"passwordResetFailure")}oe(Yv,Re);function Jv(t,s){Re.call(this,Tv,{G:!!t},t,s,"emailChangeRevokeFailure")}oe(Jv,Re);function Qv(t,s,a){Re.call(this,Dv,{errorMessage:t,zb:!!s},s,a,"recoverableError")}oe(Qv,Re);function Xv(t,s){Re.call(this,Nv,{errorMessage:t},void 0,s,"unrecoverableError")}oe(Xv,Re);function ka(t){if(t.code==="auth/invalid-credential"&&t.message&&t.message.indexOf("error=consent_required")!==-1)return{code:"auth/user-cancelled"};if(t.message&&t.message.indexOf("HTTP Cloud Function returned an error:")!==-1){var s=JSON.parse(t.message.substring(t.message.indexOf("{"),t.message.lastIndexOf("}")+1));return{code:t.code,message:s&&s.error&&s.error.message||t.message}}return t}function Ii(t,s,a,l){function d(_){if(!_.name||_.name!="cancel"){e:{var T=_.message;try{var M=((JSON.parse(T).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(M&&M.length){var H=!0;break e}}catch{}H=!1}if(H)_=xe(s),s.m(),Ne(t,_,void 0,ge("Your sign-in session has expired. Please try again.").toString());else{if(H=_&&_.message||"",_.code){if(_.code=="auth/email-already-in-use"||_.code=="auth/credential-already-in-use")return;H=Pe(_)}s.a(H)}}}if(wy(t),l)return Zv(t,a),We();if(!a.credential)throw Error("No credential found!");if(!ve(t).currentUser&&!a.user)throw Error("User not logged in.");try{var p=qb(t,a)}catch(_){return en(_.code||_.message,_),s.a(_.code||_.message),We()}return a=p.then(function(_){Zv(t,_)},d).then(void 0,d),le(t,p),We(a)}function Zv(t,s){if(!s.user)throw Error("No user found");var a=Ig(j(t));if(bd(j(t))&&a&&Qi("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),a){a=Ig(j(t));var l=eg(ie(t))||void 0;Kt(ga,ie(t));var d=!1;wm()?((!a||a(s,l))&&(d=!0,qi(window.opener.location,tl(t,l))),a||window.close()):(!a||a(s,l))&&(d=!0,qi(window.location,tl(t,l))),d||t.reset()}else{a=s.user,s=s.credential,l=bd(j(t)),d=eg(ie(t))||void 0,Kt(ga,ie(t));var p=!1;wm()?((!l||l(a,s,d))&&(p=!0,qi(window.opener.location,tl(t,d))),l||window.close()):(!l||l(a,s,d))&&(p=!0,qi(window.location,tl(t,d))),p||t.reset()}}function tl(t,s){if(t=s||j(t).a.get("signInSuccessUrl"),!t)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return t}function Pe(t){var s={code:t.code};s=s||{};var a="";switch(s.code){case"auth/email-already-in-use":a+="The email address is already used by another account";break;case"auth/requires-recent-login":a+=tt();break;case"auth/too-many-requests":a+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":a+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":a+="That email address doesn't match an existing account";break;case"auth/user-token-expired":a+=tt();break;case"auth/weak-password":a+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":a+="The email and password you entered don't match";break;case"auth/network-request-failed":a+="A network error has occurred";break;case"auth/invalid-phone-number":a+=w();break;case"auth/invalid-verification-code":a+=ge("Wrong code. Try again.");break;case"auth/code-expired":a+="This code is no longer valid";break;case"auth/expired-action-code":a+="This code has expired.";break;case"auth/invalid-action-code":a+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(s=ge(a).toString())return s;try{return JSON.parse(t.message),en("Internal error: "+t.message,void 0),V().toString()}catch{return t.message}}function hb(t,s,a){var l=Bs[s]&&Z.auth[Bs[s]]?new Z.auth[Bs[s]]:s.indexOf("saml.")==0?new Z.auth.SAMLAuthProvider(s):new Z.auth.OAuthProvider(s);if(!l)throw Error("Invalid Firebase Auth provider!");var d=gg(j(t),s);if(l.addScope)for(var p=0;p<d.length;p++)l.addScope(d[p]);return d=vg(j(t),s)||{},a&&(s==Z.auth.GoogleAuthProvider.PROVIDER_ID?t="login_hint":s==Z.auth.GithubAuthProvider.PROVIDER_ID?t="login":t=(t=_a(j(t),s))&&t.Ob,t&&(d[t]=a)),l.setCustomParameters&&l.setCustomParameters(d),l}function Da(t,s,a,l){function d(){UE(new Fm(t.h.tenantId||null),ie(t)),le(t,s.I(C(t.dc,t),[M],function(){if((window.location&&window.location.protocol)==="file:")return le(t,my(t).then(function(H){s.m(),Kt(xr,ie(t)),J("callback",t,T,We(H))},p))},_))}function p(H){if(Kt(xr,ie(t)),!H.name||H.name!="cancel")switch(H=ka(H),H.code){case"auth/popup-blocked":d();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":break;case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":s.a(Pe(H));break;case"auth/admin-restricted-operation":s.m(),Ur(j(t))?J("handleUnauthorizedUser",t,T,null,a):J("callback",t,T,ks(H));break;default:s.m(),J("callback",t,T,ks(H))}}function _(H){Kt(xr,ie(t)),H.name&&H.name=="cancel"||(en("signInWithRedirect: "+H.code,void 0),H=Pe(H),s.Ga=="blank"&&Ed(j(t))?(s.m(),J("providerSignIn",t,T,H)):s.a(H))}var T=xe(s),M=hb(t,a,l);wg(j(t))==$c?d():le(t,Bb(t,M).then(function(H){s.m(),J("callback",t,T,We(H))},p))}function db(t,s){le(t,s.I(C(t.$b,t),[],function(a){return s.m(),Ii(t,s,a,!0)},function(a){a.name&&a.name=="cancel"||(en("ContinueAsGuest: "+a.code,void 0),a=Pe(a),s.a(a))}))}function fb(t,s,a){function l(p){var _=!1;return p=s.I(C(t.ac,t),[p],function(T){var M=xe(s);s.m(),J("callback",t,M,We(T)),_=!0},function(T){if((!T.name||T.name!="cancel")&&(!T||T.code!="auth/credential-already-in-use"))if(T&&T.code=="auth/email-already-in-use"&&T.email&&T.credential){var M=xe(s);s.m(),J("callback",t,M,ks(T))}else T&&T.code=="auth/admin-restricted-operation"&&Ur(j(t))?(T=xe(s),s.m(),J("handleUnauthorizedUser",t,T,null,Z.auth.GoogleAuthProvider.PROVIDER_ID)):(T=Pe(T),s.a(T))}),le(t,p),p.then(function(){return _},function(){return!1})}if(a&&a.credential&&a.clientId===pg(j(t))){if(gg(j(t),Z.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var d=JSON.parse(atob(a.credential.split(".")[1])).email}catch{}return Da(t,s,Z.auth.GoogleAuthProvider.PROVIDER_ID,d),We(!0)}return l(Z.auth.GoogleAuthProvider.credential(a.credential))}return a&&s.a(ge("The selected credential for the authentication provider is not supported!").toString()),We(!1)}function pb(t,s){var a=s.j(),l=s.u();if(a)if(l){var d=Z.auth.EmailAuthProvider.credential(a,l);le(t,s.I(C(t.bc,t),[a,l],function(p){return Ii(t,s,{user:p.user,credential:d,operationType:p.operationType,additionalUserInfo:p.additionalUserInfo})},function(p){if(!p.name||p.name!="cancel")switch(p.code){case"auth/email-already-in-use":break;case"auth/email-exists":$e(s.l(),!1),yt(s.U(),Pe(p));break;case"auth/too-many-requests":case"auth/wrong-password":$e(s.i(),!1),yt(s.B(),Pe(p));break;default:en("verifyPassword: "+p.message,void 0),s.a(Pe(p))}}))}else s.i().focus();else s.l().focus()}function nl(t){return t=qs(j(t)),t.length==1&&t[0]==Z.auth.EmailAuthProvider.PROVIDER_ID}function ey(t){return t=qs(j(t)),t.length==1&&t[0]==Z.auth.PhoneAuthProvider.PROVIDER_ID}function Ne(t,s,a,l){nl(t)?l?J("signIn",t,s,a,l):Ud(t,s,a):t&&ey(t)&&!l?J("phoneSignInStart",t,s):t&&Ed(j(t))&&!l?J("federatedRedirect",t,s,a):J("providerSignIn",t,s,l,a)}function ty(t,s,a,l){var d=xe(s);le(t,s.I(C(ve(t).fetchSignInMethodsForEmail,ve(t)),[a],function(p){s.m(),ny(t,d,p,a,l)},function(p){p=Pe(p),s.a(p)}))}function ny(t,s,a,l,d,p){a.length||Hs(j(t))&&!Hs(j(t))?Tt(a,Z.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?J("passwordSignIn",t,s,l,p):a.length==1&&a[0]===Z.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Hs(j(t))?J("sendEmailLinkForSignIn",t,s,l,function(){J("signIn",t,s)}):J("unsupportedProvider",t,s,l):(a=hg(a,qs(j(t))))?(tg(new cd(l),ie(t)),J("federatedSignIn",t,s,l,a,d)):J("unsupportedProvider",t,s,l):mg(j(t))?J("handleUnauthorizedUser",t,s,l,Z.auth.EmailAuthProvider.PROVIDER_ID):Hs(j(t))?J("sendEmailLinkForSignIn",t,s,l,function(){J("signIn",t,s)}):J("passwordSignUp",t,s,l,void 0,void 0,p)}function Fd(t,s,a,l,d,p){var _=xe(s);le(t,s.I(C(t.Ib,t),[a,p],function(){s.m(),J("emailLinkSignInSent",t,_,a,l,p)},d))}function Ud(t,s,a){a?J("prefilledEmailSignIn",t,s,a):J("signIn",t,s)}function Na(){return xn(_i(),"oobCode")}function jd(){var t=xn(_i(),"continueUrl");return t?function(){qi(window.location,t)}:null}function Oa(t,s){U.call(this,fv,void 0,s,"anonymousUserMismatch"),this.i=t}f(Oa,U),Oa.prototype.v=function(){var t=this;Be(this,this.l(),function(){t.i()}),this.l().focus(),U.prototype.v.call(this)},Oa.prototype.o=function(){this.i=null,U.prototype.o.call(this)},A(Oa.prototype,{l:rt}),Te.anonymousUserMismatch=function(t,s){var a=new Oa(function(){a.m(),Ne(t,s)});a.render(s),fe(t,a)};function il(t){U.call(this,ov,void 0,t,"callback")}f(il,U),il.prototype.I=function(t,s,a,l){return t.apply(null,s).then(a,l)};function iy(t,s,a){if(a.user){var l={user:a.user,credential:a.credential,operationType:a.operationType,additionalUserInfo:a.additionalUserInfo},d=Wn(ie(t)),p=d&&d.g;if(p&&!gb(a.user,p))mb(t,s,l);else{var _=d&&d.a;_?le(t,a.user.linkWithCredential(_).then(function(T){l={user:T.user,credential:_,operationType:T.operationType,additionalUserInfo:T.additionalUserInfo},ry(t,s,l)},function(T){rl(t,s,T)})):ry(t,s,l)}}else a=xe(s),s.m(),$n(ie(t)),Ne(t,a)}function ry(t,s,a){$n(ie(t)),Ii(t,s,a)}function rl(t,s,a){var l=xe(s);$n(ie(t)),a=Pe(a),s.m(),Ne(t,l,void 0,a)}function sy(t,s,a,l){var d=xe(s);le(t,ve(t).fetchSignInMethodsForEmail(a).then(function(p){s.m(),p.length?Tt(p,Z.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?J("passwordLinking",t,d,a):p.length==1&&p[0]===Z.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?J("emailLinkSignInLinking",t,d,a):(p=hg(p,qs(j(t))))?J("federatedLinking",t,d,a,p,l):($n(ie(t)),J("unsupportedProvider",t,d,a)):($n(ie(t)),J("passwordRecovery",t,d,a,!1,G().toString()))},function(p){rl(t,s,p)}))}function mb(t,s,a){var l=xe(s);le(t,er(t).then(function(){s.m(),J("emailMismatch",t,l,a)},function(d){d.name&&d.name=="cancel"||(d=Pe(d.code),s.a(d))}))}function gb(t,s){if(s==t.email)return!0;if(t.providerData){for(var a=0;a<t.providerData.length;a++)if(s==t.providerData[a].email)return!0}return!1}Te.callback=function(t,s,a){var l=new il;l.render(s),fe(t,l),a=a||my(t),le(t,a.then(function(d){iy(t,l,d)},function(d){if((d=ka(d))&&(d.code=="auth/account-exists-with-different-credential"||d.code=="auth/email-already-in-use")&&d.email&&d.credential)tg(new cd(d.email,d.credential),ie(t)),sy(t,l,d.email);else if(d&&d.code=="auth/user-cancelled"){var p=Wn(ie(t)),_=Pe(d);p&&p.a?sy(t,l,p.g,_):p?ty(t,l,p.g,_):rl(t,l,d)}else d&&d.code=="auth/credential-already-in-use"||(d&&d.code=="auth/operation-not-supported-in-this-environment"&&nl(t)?iy(t,l,{user:null,credential:null}):d&&d.code=="auth/admin-restricted-operation"&&Ur(j(t))?(l.m(),$n(ie(t)),J("handleUnauthorizedUser",t,s,null,null)):rl(t,l,d))}))};function La(t,s){U.call(this,dv,void 0,s,"differentDeviceError"),this.i=t}f(La,U),La.prototype.v=function(){var t=this;Be(this,this.l(),function(){t.i()}),this.l().focus(),U.prototype.v.call(this)},La.prototype.o=function(){this.i=null,U.prototype.o.call(this)},A(La.prototype,{l:rt}),Te.differentDeviceError=function(t,s){var a=new La(function(){a.m(),Ne(t,s)});a.render(s),fe(t,a)};function Ma(t,s,a,l){U.call(this,bv,{email:t,G:!!a},l,"emailChangeRevoke"),this.l=s,this.i=a||null}f(Ma,U),Ma.prototype.v=function(){var t=this;Be(this,we(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),U.prototype.v.call(this)},Ma.prototype.o=function(){this.l=this.i=null,U.prototype.o.call(this)},A(Ma.prototype,{u:lt,B:rt,w:_t});function Va(){return we(this,"firebaseui-id-new-password")}function sl(){return we(this,"firebaseui-id-password-toggle")}function vb(){this.Ra=!this.Ra;var t=sl.call(this),s=Va.call(this);this.Ra?(s.type="text",Gn(t,"firebaseui-input-toggle-off"),zn(t,"firebaseui-input-toggle-on")):(s.type="password",Gn(t,"firebaseui-input-toggle-on"),zn(t,"firebaseui-input-toggle-off")),s.focus()}function ol(){return we(this,"firebaseui-id-new-password-error")}function oy(){this.Ra=!1;var t=Va.call(this);t.type="password";var s=ol.call(this);Js(this,t,function(){Qs(s)&&($e(t,!0),nn(s))});var a=sl.call(this);Gn(a,"firebaseui-input-toggle-on"),zn(a,"firebaseui-input-toggle-off"),sb(this,t,function(){Gn(a,"firebaseui-input-toggle-focus"),zn(a,"firebaseui-input-toggle-blur")}),ob(this,t,function(){Gn(a,"firebaseui-input-toggle-blur"),zn(a,"firebaseui-input-toggle-focus")}),Be(this,a,C(vb,this))}function ay(){var t=Va.call(this),s=ol.call(this);return vt(t)?($e(t,!0),nn(s),s=!0):($e(t,!1),yt(s,ge("Enter your password").toString()),s=!1),s?vt(t):null}function xa(t,s,a){U.call(this,wv,{email:t},a,"passwordReset"),this.l=s}f(xa,U),xa.prototype.v=function(){this.H(),this.B(this.l),eo(this,this.i(),this.l),this.i().focus(),U.prototype.v.call(this)},xa.prototype.o=function(){this.l=null,U.prototype.o.call(this)},A(xa.prototype,{i:Va,w:ol,M:sl,H:oy,u:ay,U:lt,P:rt,B:_t});function Fa(t,s,a,l,d){U.call(this,Pv,{factorId:t,phoneNumber:a||null,G:!!l},d,"revertSecondFactorAdditionSuccess"),this.l=s,this.i=l||null}f(Fa,U),Fa.prototype.v=function(){var t=this;Be(this,we(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),U.prototype.v.call(this)},Fa.prototype.o=function(){this.l=this.i=null,U.prototype.o.call(this)},A(Fa.prototype,{u:lt,B:rt,w:_t});function yb(t,s,a,l,d){var p=a.u();p&&le(t,a.I(C(ve(t).confirmPasswordReset,ve(t)),[l,p],function(){a.m();var _=new Kv(d);_.render(s),fe(t,_)},function(_){uy(t,s,a,_)}))}function uy(t,s,a,l){(l&&l.code)=="auth/weak-password"?(t=Pe(l),$e(a.i(),!1),yt(a.w(),t),a.i().focus()):(a&&a.m(),a=new Yv,a.render(s),fe(t,a))}function _b(t,s,a){var l=new Ma(a,function(){le(t,l.I(C(ve(t).sendPasswordResetEmail,ve(t)),[a],function(){l.m(),l=new el(a,void 0,Qe(j(t)),Xe(j(t))),l.render(s),fe(t,l)},function(){l.a(O().toString())}))});l.render(s),fe(t,l)}function wb(t,s,a,l){var d=new Fa(l.factorId,function(){d.I(C(ve(t).sendPasswordResetEmail,ve(t)),[a],function(){d.m(),d=new el(a,void 0,Qe(j(t)),Xe(j(t))),d.render(s),fe(t,d)},function(){d.a(O().toString())})},l.phoneNumber);d.render(s),fe(t,d)}Te.passwordReset=function(t,s,a,l){le(t,ve(t).verifyPasswordResetCode(a).then(function(d){var p=new xa(d,function(){yb(t,s,p,a,l)});p.render(s),fe(t,p)},function(){uy(t,s)}))},Te.emailChangeRevocation=function(t,s,a){var l=null;le(t,ve(t).checkActionCode(a).then(function(d){return l=d.data.email,ve(t).applyActionCode(a)}).then(function(){_b(t,s,l)},function(){var d=new Jv;d.render(s),fe(t,d)}))},Te.emailVerification=function(t,s,a,l){le(t,ve(t).applyActionCode(a).then(function(){var d=new qv(l);d.render(s),fe(t,d)},function(){var d=new Hv;d.render(s),fe(t,d)}))},Te.revertSecondFactorAddition=function(t,s,a){var l=null,d=null;le(t,ve(t).checkActionCode(a).then(function(p){return l=p.data.email,d=p.data.multiFactorInfo,ve(t).applyActionCode(a)}).then(function(){wb(t,s,l,d)},function(){var p=new Gv;p.render(s),fe(t,p)}))},Te.verifyAndChangeEmail=function(t,s,a,l){var d=null;le(t,ve(t).checkActionCode(a).then(function(p){return d=p.data.email,ve(t).applyActionCode(a)}).then(function(){var p=new Wv(d,l);p.render(s),fe(t,p)},function(){var p=new $v;p.render(s),fe(t,p)}))};function al(t,s){try{var a=typeof t.selectionStart=="number"}catch{a=!1}a?(t.selectionStart=s,t.selectionEnd=s):Me&&!Bt("9")&&(t.type=="textarea"&&(s=t.value.substring(0,s).replace(/(\r\n|\r|\n)/g,`
`).length),t=t.createTextRange(),t.collapse(!0),t.move("character",s),t.select())}function Ua(t,s,a,l,d,p){U.call(this,hv,{email:a},p,"emailLinkSignInConfirmation",{F:l,D:d}),this.l=t,this.u=s}f(Ua,U),Ua.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),al(this.i(),(this.i().value||"").length),U.prototype.v.call(this)},Ua.prototype.o=function(){this.u=this.l=null,U.prototype.o.call(this)},A(Ua.prototype,{i:wi,M:Zi,w:no,H:io,j:ro,U:lt,P:rt,B:_t}),Te.emailLinkConfirmation=function(t,s,a,l,d,p){var _=new Ua(function(){var T=_.j();T?(_.m(),l(t,s,T,a)):_.i().focus()},function(){_.m(),Ne(t,s,d||void 0)},d||void 0,Qe(j(t)),Xe(j(t)));_.render(s),fe(t,_),p&&_.a(p)};function ja(t,s,a,l,d){U.call(this,gv,{ga:t},d,"emailLinkSignInLinkingDifferentDevice",{F:a,D:l}),this.i=s}f(ja,U),ja.prototype.v=function(){this.u(this.i),this.l().focus(),U.prototype.v.call(this)},ja.prototype.o=function(){this.i=null,U.prototype.o.call(this)},A(ja.prototype,{l:lt,u:_t}),Te.emailLinkNewDeviceLinking=function(t,s,a,l){var d=new Mt(a);if(a=d.a.a.get(Ue.PROVIDER_ID)||null,ps(d,null),a){var p=new ja(_a(j(t),a),function(){p.m(),l(t,s,d.toString())},Qe(j(t)),Xe(j(t)));p.render(s),fe(t,p)}else Ne(t,s)};function ul(t){U.call(this,uv,void 0,t,"blank")}f(ul,U);function Bd(t,s,a,l,d){var p=new ul,_=new Mt(a),T=_.a.a.get(Ue.$a)||"",M=_.a.a.get(Ue.Sa)||"",H=_.a.a.get(Ue.Qa)==="1",X=fs(_),Ce=_.a.a.get(Ue.PROVIDER_ID)||null;_=_.a.a.get(Ue.vb)||null,Iy(t,_);var Nn=!Us(Fs,ie(t)),Sy=l||jE(M,ie(t)),Za=(l=BE(M,ie(t)))&&l.a;Ce&&Za&&Za.providerId!==Ce&&(Za=null),p.render(s),fe(t,p),le(t,p.I(function(){var pn=We(null);pn=X&&Nn||Nn&&H?ks(Error("anonymous-user-not-found")):Fb(t,a).then(function(Xd){if(Ce&&!Za)throw Error("pending-credential-not-found");return Xd});var eu=null;return pn.then(function(Xd){return eu=Xd,d?null:ve(t).checkActionCode(T)}).then(function(){return eu})},[],function(pn){Sy?Eb(t,p,Sy,a,Za,pn):H?(p.m(),J("differentDeviceError",t,s)):(p.m(),J("emailLinkConfirmation",t,s,a,cy))},function(pn){var eu=void 0;if(!pn||!pn.name||pn.name!="cancel")switch(p.m(),pn&&pn.message){case"anonymous-user-not-found":J("differentDeviceError",t,s);break;case"anonymous-user-mismatch":J("anonymousUserMismatch",t,s);break;case"pending-credential-not-found":J("emailLinkNewDeviceLinking",t,s,a,Ib);break;default:pn&&(eu=Pe(pn)),Ne(t,s,void 0,eu)}}))}function cy(t,s,a,l){Bd(t,s,l,a,!0)}function Ib(t,s,a){Bd(t,s,a)}function Eb(t,s,a,l,d,p){var _=xe(s);s.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ge("Signing in...").toString());var T=null;d=(p?Ub(t,p,a,l,d):jb(t,a,l,d)).then(function(M){Kt(va,ie(t)),Kt(Fs,ie(t)),s.h(),s.$("firebaseui-icon-done",ge("Signed in!").toString()),T=setTimeout(function(){s.h(),Ii(t,s,M,!0)},1e3),le(t,function(){s&&(s.h(),s.m()),clearTimeout(T)})},function(M){if(s.h(),s.m(),!M.name||M.name!="cancel"){M=ka(M);var H=Pe(M);M.code=="auth/email-already-in-use"||M.code=="auth/credential-already-in-use"?(Kt(va,ie(t)),Kt(Fs,ie(t))):M.code=="auth/invalid-email"?(H=ge("The email provided does not match the current sign-in session.").toString(),J("emailLinkConfirmation",t,_,l,cy,null,H)):Ne(t,_,a,H)}}),le(t,d)}Te.emailLinkSignInCallback=Bd;function Ba(t,s,a,l,d,p){U.call(this,mv,{email:t,ga:s},p,"emailLinkSignInLinking",{F:l,D:d}),this.i=a}f(Ba,U),Ba.prototype.v=function(){this.u(this.i),this.l().focus(),U.prototype.v.call(this)},Ba.prototype.o=function(){this.i=null,U.prototype.o.call(this)},A(Ba.prototype,{l:lt,u:_t});function bb(t,s,a,l){var d=xe(s);Fd(t,s,a,function(){Ne(t,d,a)},function(p){if(!p.name||p.name!="cancel"){var _=Pe(p);p&&p.code=="auth/network-request-failed"?s.a(_):(s.m(),Ne(t,d,a,_))}},l)}Te.emailLinkSignInLinking=function(t,s,a){var l=Wn(ie(t));if($n(ie(t)),l){var d=l.a.providerId,p=new Ba(a,_a(j(t),d),function(){bb(t,p,a,l)},Qe(j(t)),Xe(j(t)));p.render(s),fe(t,p)}else Ne(t,s)};function qa(t,s,a,l,d,p){U.call(this,cv,{email:t},p,"emailLinkSignInSent",{F:l,D:d}),this.u=s,this.i=a}f(qa,U),qa.prototype.v=function(){var t=this;Be(this,this.l(),function(){t.i()}),Be(this,we(this,"firebaseui-id-trouble-getting-email-link"),function(){t.u()}),this.l().focus(),U.prototype.v.call(this)},qa.prototype.o=function(){this.i=this.u=null,U.prototype.o.call(this)},A(qa.prototype,{l:rt}),Te.emailLinkSignInSent=function(t,s,a,l,d){var p=new qa(a,function(){p.m(),J("emailNotReceived",t,s,a,l,d)},function(){p.m(),l()},Qe(j(t)),Xe(j(t)));p.render(s),fe(t,p)};function Ha(t,s,a,l,d,p,_){U.call(this,Ov,{jc:t,Qb:s},_,"emailMismatch",{F:d,D:p}),this.l=a,this.i=l}f(Ha,U),Ha.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),U.prototype.v.call(this)},Ha.prototype.o=function(){this.i=null,U.prototype.o.call(this)},A(Ha.prototype,{u:lt,B:rt,w:_t}),Te.emailMismatch=function(t,s,a){var l=Wn(ie(t));if(l){var d=new Ha(a.user.email,l.g,function(){var p=d;$n(ie(t)),Ii(t,p,a)},function(){var p=a.credential.providerId,_=xe(d);d.m(),l.a?J("federatedLinking",t,_,l.g,p):J("federatedSignIn",t,_,l.g,p)},Qe(j(t)),Xe(j(t)));d.render(s),fe(t,d)}else Ne(t,s)};function so(t,s,a,l,d){U.call(this,lv,void 0,d,"emailNotReceived",{F:a,D:l}),this.l=t,this.i=s}f(so,U),so.prototype.v=function(){var t=this;Be(this,this.u(),function(){t.i()}),Be(this,this.Da(),function(){t.l()}),this.u().focus(),U.prototype.v.call(this)},so.prototype.Da=function(){return we(this,"firebaseui-id-resend-email-link")},so.prototype.o=function(){this.i=this.l=null,U.prototype.o.call(this)},A(so.prototype,{u:rt}),Te.emailNotReceived=function(t,s,a,l,d){var p=new so(function(){Fd(t,p,a,l,function(_){_=Pe(_),p.a(_)},d)},function(){p.m(),Ne(t,s,a)},Qe(j(t)),Xe(j(t)));p.render(s),fe(t,p)};function oo(t,s,a,l,d,p){U.call(this,vv,{email:t,ga:s},p,"federatedLinking",{F:l,D:d}),this.i=a}f(oo,U),oo.prototype.v=function(){this.u(this.i),this.l().focus(),U.prototype.v.call(this)},oo.prototype.o=function(){this.i=null,U.prototype.o.call(this)},A(oo.prototype,{l:lt,u:_t}),Te.federatedLinking=function(t,s,a,l,d){var p=Wn(ie(t));if(p&&p.a){var _=new oo(a,_a(j(t),l),function(){Da(t,_,l,a)},Qe(j(t)),Xe(j(t)));_.render(s),fe(t,_),d&&_.a(d)}else Ne(t,s)},Te.federatedRedirect=function(t,s,a){var l=new ul;l.render(s),fe(t,l),s=qs(j(t))[0],Da(t,l,s,a)},Te.federatedSignIn=function(t,s,a,l,d){var p=new oo(a,_a(j(t),l),function(){Da(t,p,l,a)},Qe(j(t)),Xe(j(t)));p.render(s),fe(t,p),d&&p.a(d)};function Tb(t,s,a,l){var d=s.u();d?le(t,s.I(C(t.Xb,t),[a,d],function(p){return p=p.user.linkWithCredential(l).then(function(_){return Ii(t,s,{user:_.user,credential:l,operationType:_.operationType,additionalUserInfo:_.additionalUserInfo})}),le(t,p),p},function(p){if(!p.name||p.name!="cancel")switch(p.code){case"auth/wrong-password":$e(s.i(),!1),yt(s.B(),Pe(p));break;case"auth/too-many-requests":s.a(Pe(p));break;default:en("signInWithEmailAndPassword: "+p.message,void 0),s.a(Pe(p))}})):s.i().focus()}Te.passwordLinking=function(t,s,a){var l=Wn(ie(t));$n(ie(t));var d=l&&l.a;if(d){var p=new to(a,function(){Tb(t,p,a,d)},function(){p.m(),J("passwordRecovery",t,s,a)},Qe(j(t)),Xe(j(t)));p.render(s),fe(t,p)}else Ne(t,s)};function Wa(t,s,a,l,d,p){U.call(this,rv,{email:a,Ta:!!s},p,"passwordRecovery",{F:l,D:d}),this.l=t,this.u=s}f(Wa,U),Wa.prototype.v=function(){this.B(),this.H(this.l,this.u),vt(this.i())||this.i().focus(),eo(this,this.i(),this.l),U.prototype.v.call(this)},Wa.prototype.o=function(){this.u=this.l=null,U.prototype.o.call(this)},A(Wa.prototype,{i:wi,w:Zi,B:no,M:io,j:ro,U:lt,P:rt,H:_t});function Ab(t,s){var a=s.j();if(a){var l=xe(s);le(t,s.I(C(ve(t).sendPasswordResetEmail,ve(t)),[a],function(){s.m();var d=new el(a,function(){d.m(),Ne(t,l)},Qe(j(t)),Xe(j(t)));d.render(l),fe(t,d)},function(d){$e(s.i(),!1),yt(s.w(),Pe(d))}))}else s.i().focus()}Te.passwordRecovery=function(t,s,a,l,d){var p=new Wa(function(){Ab(t,p)},l?void 0:function(){p.m(),Ne(t,s)},a,Qe(j(t)),Xe(j(t)));p.render(s),fe(t,p),d&&p.a(d)},Te.passwordSignIn=function(t,s,a,l){var d=new Pa(function(){pb(t,d)},function(){var p=d.M();d.m(),J("passwordRecovery",t,s,p)},a,Qe(j(t)),Xe(j(t)),l);d.render(s),fe(t,d)};function qd(){return we(this,"firebaseui-id-name")}function Hd(){return we(this,"firebaseui-id-name-error")}function $a(t,s,a,l,d,p,_,T,M){U.call(this,iv,{email:l,Tb:t,name:d,Ta:!!a,ia:!!T},M,"passwordSignUp",{F:p,D:_}),this.w=s,this.H=a,this.B=t}f($a,U),$a.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Ca(this,this.i(),this.u()),Ca(this,this.u(),this.l())):Ca(this,this.i(),this.l()),this.w&&eo(this,this.l(),this.w),vt(this.i())?this.B&&!vt(this.u())?this.u().focus():this.l().focus():this.i().focus(),U.prototype.v.call(this)},$a.prototype.o=function(){this.H=this.w=null,U.prototype.o.call(this)},A($a.prototype,{i:wi,U:Zi,ea:no,jb:io,j:ro,u:qd,Bc:Hd,Ja:function(){var t=qd.call(this),s=Hd.call(this);Js(this,t,function(){Qs(s)&&($e(t,!0),nn(s))})},M:function(){var t=qd.call(this),s=Hd.call(this),a=vt(t);return a=!/^[\s\xa0]*$/.test(a==null?"":String(a)),$e(t,a),a?(nn(s),s=!0):(yt(s,ge("Enter your account name").toString()),s=!1),s?At(vt(t)):null},l:Va,ba:ol,lb:sl,ua:oy,P:ay,Nb:lt,Mb:rt,pa:_t});function Sb(t,s){var a=_g(j(t)),l=s.j(),d=null;a&&(d=s.M());var p=s.P();if(l){if(a)if(d)d=Mn(d);else{s.u().focus();return}if(p){var _=Z.auth.EmailAuthProvider.credential(l,p);le(t,s.I(C(t.Yb,t),[l,p],function(T){var M={user:T.user,credential:_,operationType:T.operationType,additionalUserInfo:T.additionalUserInfo};return a?(T=T.user.updateProfile({displayName:d}).then(function(){return Ii(t,s,M)}),le(t,T),T):Ii(t,s,M)},function(T){if(!T.name||T.name!="cancel"){var M=ka(T);switch(T=Pe(M),M.code){case"auth/email-already-in-use":return Rb(t,s,l,M);case"auth/too-many-requests":T=ge("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":$e(s.l(),!1),yt(s.ba(),T);break;case"auth/admin-restricted-operation":Ur(j(t))?(T=xe(s),s.m(),J("handleUnauthorizedUser",t,T,l,Z.auth.EmailAuthProvider.PROVIDER_ID)):s.a(T);break;default:M="setAccountInfo: "+Ym(M),en(M,void 0),s.a(T)}}}))}else s.l().focus()}else s.i().focus()}function Rb(t,s,a,l){function d(){var _=Pe(l);$e(s.i(),!1),yt(s.U(),_),s.i().focus()}var p=ve(t).fetchSignInMethodsForEmail(a).then(function(_){_.length?d():(_=xe(s),s.m(),J("passwordRecovery",t,_,a,!1,G().toString()))},function(){d()});return le(t,p),p}Te.passwordSignUp=function(t,s,a,l,d,p){function _(){T.m(),Ne(t,s)}var T=new $a(_g(j(t)),function(){Sb(t,T)},d?void 0:_,a,l,Qe(j(t)),Xe(j(t)),p);T.render(s),fe(t,T)};function Wd(){return we(this,"firebaseui-id-phone-confirmation-code")}function ly(){return we(this,"firebaseui-id-phone-confirmation-code-error")}function hy(){return we(this,"firebaseui-id-resend-countdown")}function ao(t,s,a,l,d,p,_,T,M){U.call(this,Vv,{phoneNumber:d},M,"phoneSignInFinish",{F:_,D:T}),this.jb=p,this.i=new Gc(1e3),this.B=p,this.P=t,this.l=s,this.H=a,this.M=l}f(ao,U),ao.prototype.v=function(){var t=this;this.U(this.jb),Cn(this.i,"tick",this.w,!1,this),this.i.start(),Be(this,we(this,"firebaseui-id-change-phone-number-link"),function(){t.P()}),Be(this,this.Da(),function(){t.M()}),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),U.prototype.v.call(this)},ao.prototype.o=function(){this.M=this.H=this.l=this.P=null,zc(this.i),Or(this.i,"tick",this.w),this.i=null,U.prototype.o.call(this)},ao.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(zc(this.i),Or(this.i,"tick",this.w),this.ua(),this.lb())},A(ao.prototype,{u:Wd,pa:ly,Ja:function(t){var s=Wd.call(this),a=ly.call(this);Js(this,s,function(){Qs(a)&&($e(s,!0),nn(a))}),t&&Ra(this,s,function(){t()})},ba:function(){var t=At(vt(Wd.call(this))||"");return/^\d{6}$/.test(t)?t:null},Fb:hy,U:function(t){Es(hy.call(this),ge("Resend code in "+((9<t?"0:":"0:0")+t)).toString())},ua:function(){nn(this.Fb())},Da:function(){return we(this,"firebaseui-id-resend-link")},lb:function(){yt(this.Da())},Nb:lt,Mb:rt,ea:_t});function Cb(t,s,a,l){function d(_){s.u().focus(),$e(s.u(),!1),yt(s.pa(),_)}var p=s.ba();p?(s.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ge("Verifying...").toString()),le(t,s.I(C(l.confirm,l),[p],function(_){s.h(),s.$("firebaseui-icon-done",ge("Verified!").toString());var T=setTimeout(function(){s.h(),s.m();var M={user:kn(t).currentUser,credential:null,operationType:_.operationType,additionalUserInfo:_.additionalUserInfo};Ii(t,s,M,!0)},1e3);le(t,function(){s&&s.h(),clearTimeout(T)})},function(_){if(_.name&&_.name=="cancel")s.h();else{var T=ka(_);switch(_=Pe(T),T.code){case"auth/credential-already-in-use":s.h();break;case"auth/code-expired":T=xe(s),s.h(),s.m(),J("phoneSignInStart",t,T,a,_);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":s.h(),d(_);break;default:s.h(),s.a(_)}}}))):d(ge("Wrong code. Try again.").toString())}Te.phoneSignInFinish=function(t,s,a,l,d,p){var _=new ao(function(){_.m(),J("phoneSignInStart",t,s,a)},function(){Cb(t,_,a,d)},function(){_.m(),Ne(t,s)},function(){_.m(),J("phoneSignInStart",t,s,a)},wd(a),l,Qe(j(t)),Xe(j(t)));_.render(s),fe(t,_),p&&_.a(p)};var Pb=!Me&&!(de("Safari")&&!(ms()||de("Coast")||de("Opera")||de("Edge")||de("Firefox")||de("FxiOS")||de("Silk")||de("Android")));function cl(t,s){return/-[a-z]/.test(s)?null:Pb&&t.dataset?!de("Android")||ms()||de("Firefox")||de("FxiOS")||de("Opera")||de("Silk")||s in t.dataset?(t=t.dataset[s],t===void 0?null:t):null:t.getAttribute("data-"+String(s).replace(/([A-Z])/g,"-$1").toLowerCase())}function kb(t,s,a){var l=this;t=gi(Yg,{items:t},null,this.s),Qg.call(this,t,!0,!0),a&&(a=Db(t,a))&&(a.focus(),rb(a,t)),Be(this,t,function(d){(d=(d=na(d.target,"firebaseui-id-list-box-dialog-button"))&&cl(d,"listboxid"))&&(Qc.call(l),s(d))})}function Db(t,s){t=(t||document).getElementsByTagName("BUTTON");for(var a=0;a<t.length;a++)if(cl(t[a],"listboxid")===s)return t[a];return null}function Br(){return we(this,"firebaseui-id-phone-number")}function dy(){return we(this,"firebaseui-id-country-selector")}function $d(){return we(this,"firebaseui-id-phone-number-error")}function Nb(t,s){var a=t.a,l=Gd("1-US-0",a),d=null;if(s&&Gd(s,a)?d=s:l?d="1-US-0":d=0<a.length?a[0].c:null,!d)throw Error("No available default country");ll.call(this,d,t)}function Gd(t,s){return t=Fr(t),!(!t||!Tt(s,t))}function Ob(t){return t.map(function(s){return{id:s.c,Ma:"firebaseui-flag "+zd(s),label:s.name+" "+("‎+"+s.b)}})}function zd(t){return"firebaseui-flag-"+t.f}function Lb(t){var s=this;kb.call(this,Ob(t.a),function(a){ll.call(s,a,t,!0),s.O().focus()},this.Ba)}function ll(t,s,a){var l=Fr(t);l&&(a&&(a=At(vt(Br.call(this))||""),s=Bc(s,a),s.length&&s[0].b!=l.b&&(a="+"+l.b+a.substr(s[0].b.length+1),Ag(Br.call(this),a))),s=Fr(this.Ba),this.Ba=t,t=we(this,"firebaseui-id-country-selector-flag"),s&&zn(t,zd(s)),Gn(t,zd(l)),Es(we(this,"firebaseui-id-country-selector-code"),"‎+"+l.b))}function Ga(t,s,a,l,d,p,_,T,M,H){U.call(this,Mv,{Gb:s,Aa:M||null,Va:!!a,ia:!!p},H,"phoneSignInStart",{F:l,D:d}),this.H=T||null,this.M=s,this.l=t,this.w=a||null,this.pa=_||null}f(Ga,U),Ga.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Ca(this,this.O(),this.i()),eo(this,this.i(),this.l),this.O().focus(),al(this.O(),(this.O().value||"").length),U.prototype.v.call(this)},Ga.prototype.o=function(){this.w=this.l=null,U.prototype.o.call(this)},A(Ga.prototype,{Cb:Vd,O:Br,B:$d,ea:function(t,s,a){var l=this,d=Br.call(this),p=dy.call(this),_=$d.call(this),T=t||ya,M=T.a;if(M.length==0)throw Error("No available countries provided.");Nb.call(l,T,s),Be(this,p,function(){Lb.call(l,T)}),Js(this,d,function(){Qs(_)&&($e(d,!0),nn(_));var H=At(vt(d)||""),X=Fr(this.Ba),Ce=Bc(T,H);H=Gd("1-US-0",M),Ce.length&&Ce[0].b!=X.b&&(X=Ce[0],ll.call(l,X.b=="1"&&H?"1-US-0":X.c,T))}),a&&Ra(this,d,function(){a()})},U:function(t){var s=At(vt(Br.call(this))||"");t=t||ya;var a=t.a,l=Bc(ya,s);if(l.length&&!Tt(a,l[0]))throw Ag(Br.call(this)),Br.call(this).focus(),yt($d.call(this),ge("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return a=Fr(this.Ba),l.length&&l[0].b!=a.b&&ll.call(this,l[0].c,t),l.length&&(s=s.substr(l[0].b.length+1)),s?new cg(this.Ba,s):null},Ja:dy,ba:function(){return we(this,"firebaseui-recaptcha-container")},u:function(){return we(this,"firebaseui-id-recaptcha-error")},i:lt,ua:rt,P:_t});function fy(t,s,a,l){try{var d=s.U(Cd)}catch{return}d?Ia?(s.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ge("Verifying...").toString()),le(t,s.I(C(t.cc,t),[wd(d),a],function(p){var _=xe(s);s.$("firebaseui-icon-done",ge("Code sent!").toString());var T=setTimeout(function(){s.h(),s.m(),J("phoneSignInFinish",t,_,d,15,p)},1e3);le(t,function(){s&&s.h(),clearTimeout(T)})},function(p){if(s.h(),!p.name||p.name!="cancel"){grecaptcha.reset(bg),Ia=null;var _=p&&p.message||"";if(p.code)switch(p.code){case"auth/too-many-requests":_=ge("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":s.O().focus(),yt(s.B(),w().toString());return;case"auth/admin-restricted-operation":if(Ur(j(t))){p=xe(s),s.m(),J("handleUnauthorizedUser",t,p,wd(d),Z.auth.PhoneAuthProvider.PROVIDER_ID);return}_=Pe(p);break;default:_=Pe(p)}s.a(_)}}))):Ws?yt(s.u(),ge("Solve the reCAPTCHA").toString()):!Ws&&l&&s.i().click():(s.O().focus(),yt(s.B(),w().toString()))}Te.phoneSignInStart=function(t,s,a,l){var d=WE(j(t))||{};Ia=null,Ws=!(d&&d.size==="invisible");var p=ey(t),_=JE(j(t)),T=p?YE(j(t)):null;_=a&&a.a||_&&_.c||null,a=a&&a.Aa||T,(T=Id(j(t)))&&ug(T),Cd=T?new sg(Id(j(t))):ya;var M=new Ga(function(X){fy(t,M,H,!(!X||!X.keyCode))},Ws,p?null:function(){H.clear(),M.m(),Ne(t,s)},Qe(j(t)),Xe(j(t)),p,Cd,_,a);M.render(s),fe(t,M),l&&M.a(l),d.callback=function(X){M.u()&&nn(M.u()),Ia=X,Ws||fy(t,M,H)},d["expired-callback"]=function(){Ia=null};var H=new Z.auth.RecaptchaVerifier(Ws?M.ba():M.i(),d,kn(t).app);le(t,M.I(C(H.render,H),[],function(X){bg=X},function(X){X.name&&X.name=="cancel"||(X=Pe(X),M.m(),Ne(t,s,void 0,X))}))},Te.prefilledEmailSignIn=function(t,s,a){var l=new ul;l.render(s),fe(t,l),le(t,l.I(C(ve(t).fetchSignInMethodsForEmail,ve(t)),[a],function(d){l.m();var p=!(!nl(t)||!gy(t));ny(t,s,d,a,void 0,p)},function(d){d=Pe(d),l.m(),J("signIn",t,s,a,d)}))};function za(t,s,a,l,d){U.call(this,Lv,{Sb:s},d,"providerSignIn",{F:a,D:l}),this.i=t}f(za,U),za.prototype.v=function(){this.l(this.i),U.prototype.v.call(this)},za.prototype.o=function(){this.i=null,U.prototype.o.call(this)},A(za.prototype,{l:function(t){function s(_){t(_)}for(var a=this.g?fi("firebaseui-id-idp-button",this.g||this.s.a):[],l=0;l<a.length;l++){var d=a[l],p=cl(d,"providerId");Be(this,d,N(s,p))}}}),Te.providerSignIn=function(t,s,a,l){var d=new za(function(p){p==Z.auth.EmailAuthProvider.PROVIDER_ID?(d.m(),Ud(t,s,l)):p==Z.auth.PhoneAuthProvider.PROVIDER_ID?(d.m(),J("phoneSignInStart",t,s)):p=="anonymous"?db(t,d):Da(t,d,p,l),Ie(t),t.l.cancel()},fg(j(t)),Qe(j(t)),Xe(j(t)));d.render(s),fe(t,d),a&&d.a(a),xb(t)},Te.sendEmailLinkForSignIn=function(t,s,a,l){var d=new il;d.render(s),fe(t,d),Fd(t,d,a,l,function(p){d.m(),p&&p.code=="auth/admin-restricted-operation"&&Ur(j(t))?J("handleUnauthorizedUser",t,s,a,Z.auth.EmailAuthProvider.PROVIDER_ID):(p=Pe(p),J("signIn",t,s,a,p))})};function Ka(t,s,a,l,d,p,_){U.call(this,tv,{email:a,Va:!!s,ia:!!p},_,"signIn",{F:l,D:d}),this.i=t,this.u=s}f(Ka,U),Ka.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),al(this.l(),(this.l().value||"").length),U.prototype.v.call(this)},Ka.prototype.o=function(){this.u=this.i=null,U.prototype.o.call(this)},A(Ka.prototype,{l:wi,M:Zi,w:no,H:io,j:ro,U:lt,P:rt,B:_t}),Te.signIn=function(t,s,a,l){var d=nl(t),p=new Ka(function(){var _=p,T=_.j()||"";T&&ty(t,_,T)},d?null:function(){p.m(),Ne(t,s,a)},a,Qe(j(t)),Xe(j(t)),d);p.render(s),fe(t,p),l&&p.a(l)};function Ya(t,s,a,l,d,p,_){U.call(this,yv,{kc:t,yb:a,Eb:!!l},_,"unauthorizedUser",{F:d,D:p}),this.l=s,this.i=l}f(Ya,U),Ya.prototype.v=function(){var t=this,s=we(this,"firebaseui-id-unauthorized-user-help-link");this.i&&s&&Be(this,s,function(){t.i()}),Be(this,this.u(),function(){t.l()}),this.u().focus(),U.prototype.v.call(this)},Ya.prototype.o=function(){this.i=this.l=null,U.prototype.o.call(this)},A(Ya.prototype,{u:rt}),Te.handleUnauthorizedUser=function(t,s,a,l){function d(){Ne(t,s)}l===Z.auth.EmailAuthProvider.PROVIDER_ID?d=function(){Ud(t,s)}:l===Z.auth.PhoneAuthProvider.PROVIDER_ID&&(d=function(){J("phoneSignInStart",t,s)});var p=null,_=null;l===Z.auth.EmailAuthProvider.PROVIDER_ID&&mg(j(t))?(p=zE(j(t)),_=KE(j(t))):Ur(j(t))&&(p=$E(j(t)),_=GE(j(t)));var T=new Ya(a,function(){T.m(),d()},p,_,Qe(j(t)),Xe(j(t)));T.render(s),fe(t,T)};function Ja(t,s,a,l,d,p){U.call(this,_v,{email:t},p,"unsupportedProvider",{F:l,D:d}),this.l=s,this.i=a}f(Ja,U),Ja.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),U.prototype.v.call(this)},Ja.prototype.o=function(){this.i=this.l=null,U.prototype.o.call(this)},A(Ja.prototype,{u:lt,B:rt,w:_t}),Te.unsupportedProvider=function(t,s,a){var l=new Ja(a,function(){l.m(),J("passwordRecovery",t,s,a)},function(){l.m(),Ne(t,s,a)},Qe(j(t)),Xe(j(t)));l.render(s),fe(t,l)};function Kn(t,s){this.$=!1;var a=Kd(s);if(Qa[a])throw Error('An AuthUI instance already exists for the key "'+a+'"');Qa[a]=this,this.a=t,this.u=null,this.Y=!1,py(this.a),this.h=Z.initializeApp({apiKey:t.app.options.apiKey,authDomain:t.app.options.authDomain},t.app.name+"-firebaseui-temp").auth(),(t=t.emulatorConfig)&&(a=t.port,this.h.useEmulator(t.protocol+"://"+t.host+(a===null?"":":"+a),t.options)),py(this.h),this.h.setPersistence&&this.h.setPersistence(Z.auth.Auth.Persistence.SESSION),this.oa=s,this.ca=new HE,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Zh.Xa(),this.j=this.C=null,this.da=this.A=!1}function py(t){t&&t.INTERNAL&&t.INTERNAL.logFramework&&t.INTERNAL.logFramework("FirebaseUI-web")}var Qa={};function Kd(t){return t||"[DEFAULT]"}function my(t){return Ie(t),t.i||(t.i=Ei(t,function(s){return s&&!Wn(ie(t))?We(kn(t).getRedirectResult().then(function(a){return a},function(a){if(a&&a.code=="auth/email-already-in-use"&&a.email&&a.credential)throw a;return tr(t,a)})):We(ve(t).getRedirectResult().then(function(a){return qc(j(t))&&!a.user&&t.j&&!t.j.isAnonymous?kn(t).getRedirectResult():a}))})),t.i}function fe(t,s){Ie(t),t.g=s}var uo=null;function ve(t){return Ie(t),t.h}function kn(t){return Ie(t),t.a}function ie(t){return Ie(t),t.oa}function gy(t){return Ie(t),t.O?t.O.emailHint:void 0}i=Kn.prototype,i.nb=function(){return Ie(this),!!md(ie(this))||vy(_i())};function vy(t){return t=new Mt(t),(t.a.a.get(Ue.ub)||null)==="signIn"&&!!t.a.a.get(Ue.$a)}i.start=function(t,s){yy(this,t,s)};function yy(t,s,a,l){Ie(t),typeof t.a.languageCode<"u"&&(t.u=t.a.languageCode);var d="en".replace(/_/g,"-");t.a.languageCode=d,t.h.languageCode=d,t.Y=!0,typeof t.a.tenantId<"u"&&(t.h.tenantId=t.a.tenantId),t.ib(a),t.O=l||null;var p=b.document;t.C?t.C.then(function(){p.readyState=="complete"?hl(t,s):ua(window,"load",function(){hl(t,s)})}):p.readyState=="complete"?hl(t,s):ua(window,"load",function(){hl(t,s)})}function hl(t,s){var a=wc(s,"Could not find the FirebaseUI widget element on the page.");if(a.setAttribute("lang","en".replace(/_/g,"-")),uo){var l=uo;Ie(l),Wn(ie(l))&&Qi("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),uo.reset()}if(uo=t,t.T=a,Vb(t,a),jc(new hd)&&jc(new dd)){s=wc(s,"Could not find the FirebaseUI widget element on the page."),a=_i(),l=yd(j(t).a,"queryParameterForSignInSuccessUrl"),a=(a=xn(a,l))?jn(ws(a)).toString():null;e:{l=_i();var d=yg(j(t));l=xn(l,d)||"";for(p in Rd)if(Rd[p].toLowerCase()==l.toLowerCase()){var p=Rd[p];break e}p="callback"}switch(p){case"callback":a&&(p=ie(t),js(ga,a,p)),t.nb()?J("callback",t,s):Ne(t,s,gy(t));break;case"resetPassword":J("passwordReset",t,s,Na(),jd());break;case"recoverEmail":J("emailChangeRevocation",t,s,Na());break;case"revertSecondFactorAddition":J("revertSecondFactorAddition",t,s,Na());break;case"verifyEmail":J("emailVerification",t,s,Na(),jd());break;case"verifyAndChangeEmail":J("verifyAndChangeEmail",t,s,Na(),jd());break;case"signIn":J("emailLinkSignInCallback",t,s,_i()),Ey();break;case"select":a&&(p=ie(t),js(ga,a,p)),Ne(t,s);break;default:throw Error("Unhandled widget operation.")}s=j(t),(s=wa(s).uiShown||null)&&s()}else s=wc(s,"Could not find the FirebaseUI widget element on the page."),p=new Xv(ge("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),p.render(s),fe(t,p);s=t.g&&t.g.Ga=="blank"&&Ed(j(t)),md(ie(t))&&!s&&(s=md(ie(t)),Iy(t,s.a),Kt(xr,ie(t)))}function Ei(t,s){if(t.A)return s(_y(t));if(le(t,function(){t.A=!1}),qc(j(t))){var a=new it(function(l){le(t,t.a.onAuthStateChanged(function(d){t.j=d,t.A||(t.A=!0,l(s(_y(t))))}))});return le(t,a),a}return t.A=!0,s(null)}function _y(t){return Ie(t),qc(j(t))&&t.j&&t.j.isAnonymous?t.j:null}function le(t,s){if(Ie(t),s){t.s.push(s);var a=function(){as(t.s,function(l){return l==s})};typeof s!="function"&&s.then(a,a)}}i.Db=function(){Ie(this),this.Z=!0};function Mb(t){Ie(t);var s;return(s=t.Z)||(t=j(t),t=vg(t,Z.auth.GoogleAuthProvider.PROVIDER_ID),s=!(!t||t.prompt!=="select_account")),s}function wy(t){typeof t.a.languageCode<"u"&&t.Y&&(t.Y=!1,t.a.languageCode=t.u)}function Iy(t,s){t.a.tenantId=s,t.h.tenantId=s}i.reset=function(){Ie(this);var t=this;this.T&&this.T.removeAttribute("lang"),this.J&&gE(this.J),wy(this),this.O=null,Ey(),Kt(xr,ie(this)),Ie(this),this.l.cancel(),this.i=We({user:null,credential:null}),uo==this&&(uo=null),this.T=null;for(var s=0;s<this.s.length;s++)typeof this.s[s]=="function"?this.s[s]():this.s[s].cancel&&this.s[s].cancel();this.s=[],$n(ie(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=er(this).then(function(){t.C=null},function(){t.C=null}))};function Vb(t,s){t.L=null,t.J=new yc(s),t.J.register(),Cn(t.J,"pageEnter",function(a){if(a=a&&a.pageId,t.L!=a){var l=j(t);(l=wa(l).uiChanged||null)&&l(t.L,a),t.L=a}})}i.ib=function(t){Ie(this);var s=this.ca,a;for(a in t)try{vd(s.a,a,t[a])}catch{en('Invalid config: "'+a+'"',void 0)}Yo&&vd(s.a,"popupMode",!1),Id(s),!this.da&&bd(j(this))&&(Qi("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)};function j(t){return Ie(t),t.ca}i.Wb=function(){Ie(this);var t=j(this),s=yd(t.a,"widgetUrl");t=yg(t);for(var a=s.search($o),l=0,d,p=[];0<=(d=Wo(s,l,t,a));)p.push(s.substring(l,d)),l=Math.min(s.indexOf("&",d)+1||a,a);p.push(s.substr(l)),s=p.join("").replace(Go,"$1"),a="="+encodeURIComponent("select"),(t+=a)?(a=s.indexOf("#"),0>a&&(a=s.length),l=s.indexOf("?"),0>l||l>a?(l=a,d=""):d=s.substring(l+1,a),s=[s.substr(0,l),d,s.substr(a)],a=s[1],s[1]=t?a?a+"&"+t:t:a,a=s[0]+(s[1]?"?"+s[1]:"")+s[2]):a=s,j(this).a.get("popupMode")?(t=(window.screen.availHeight-600)/2,s=(window.screen.availWidth-500)/2,a=a||"about:blank",t={width:500,height:600,top:0<t?t:0,left:0<s?s:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},t.target=t.target||a.target||"google_popup",t.width=t.width||690,t.height=t.height||500,(t=_m(a,t))&&t.focus()):qi(window.location,a)};function Ie(t){if(t.$)throw Error("AuthUI instance is deleted!")}i.Wa=function(){var t=this;return Ie(this),this.h.app.delete().then(function(){var s=Kd(ie(t));delete Qa[s],t.reset(),t.$=!0})};function xb(t){Ie(t);try{Am(t.l,pg(j(t)),Mb(t)).then(function(s){return t.g?fb(t,t.g,s):!1})}catch{}}i.Ib=function(t,s){Ie(this);var a=this,l=bE();if(!Hs(j(this)))return ks(Error("Email link sign-in should be enabled to trigger email sending."));var d=XE(j(this)),p=new Mt(d.url);return tc(p,l),s&&s.a&&(qE(l,s,ie(this)),ps(p,s.a.providerId)),nc(p,QE(j(this))),Ei(this,function(_){return _&&((_=_.uid)?p.a.a.set(Ue.Pa,_):ui(p.a.a,Ue.Pa)),d.url=p.toString(),ve(a).sendSignInLinkToEmail(t,d)}).then(function(){var _=ie(a),T={};T.email=t,js(Fs,Gm(l,JSON.stringify(T)),_)},function(_){throw Kt(va,ie(a)),Kt(Fs,ie(a)),_})};function Fb(t,s){var a=fs(new Mt(s));return a?(s=new it(function(l,d){var p=kn(t).onAuthStateChanged(function(_){p(),_&&_.isAnonymous&&_.uid===a?l(_):_&&_.isAnonymous&&_.uid!==a?d(Error("anonymous-user-mismatch")):d(Error("anonymous-user-not-found"))});le(t,p)}),le(t,s),s):We(null)}function Ub(t,s,a,l,d){Ie(t);var p=d||null,_=Z.auth.EmailAuthProvider.credentialWithLink(a,l);return a=p?ve(t).signInWithEmailLink(a,l).then(function(T){return T.user.linkWithCredential(p)}).then(function(){return er(t)}).then(function(){return tr(t,{code:"auth/email-already-in-use"},p)}):ve(t).fetchSignInMethodsForEmail(a).then(function(T){return T.length?tr(t,{code:"auth/email-already-in-use"},_):s.linkWithCredential(_)}),le(t,a),a}function jb(t,s,a,l){Ie(t);var d=l||null,p;return s=ve(t).signInWithEmailLink(s,a).then(function(_){if(p={user:_.user,credential:null,operationType:_.operationType,additionalUserInfo:_.additionalUserInfo},d)return _.user.linkWithCredential(d).then(function(T){p={user:T.user,credential:d,operationType:p.operationType,additionalUserInfo:T.additionalUserInfo}})}).then(function(){er(t)}).then(function(){return kn(t).updateCurrentUser(p.user)}).then(function(){return p.user=kn(t).currentUser,p}),le(t,s),s}function Ey(){var t=_i();if(vy(t)){t=new Mt(t);for(var s in Ue)Ue.hasOwnProperty(s)&&ui(t.a.a,Ue[s]);s={state:"signIn",mode:"emailLink",operation:"clear"};var a=b.document.title;b.history&&b.history.replaceState&&b.history.replaceState(s,a,t.toString())}}i.bc=function(t,s){Ie(this);var a=this;return ve(this).signInWithEmailAndPassword(t,s).then(function(l){return Ei(a,function(d){return d?er(a).then(function(){return tr(a,{code:"auth/email-already-in-use"},Z.auth.EmailAuthProvider.credential(t,s))}):l})})},i.Yb=function(t,s){Ie(this);var a=this;return Ei(this,function(l){if(l){var d=Z.auth.EmailAuthProvider.credential(t,s);return l.linkWithCredential(d)}return ve(a).createUserWithEmailAndPassword(t,s)})},i.ac=function(t){Ie(this);var s=this;return Ei(this,function(a){return a?a.linkWithCredential(t).then(function(l){return l},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return tr(s,l,t)}):ve(s).signInWithCredential(t)})};function Bb(t,s){return Ie(t),Ei(t,function(a){return a&&!Wn(ie(t))?a.linkWithPopup(s).then(function(l){return l},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return tr(t,l)}):ve(t).signInWithPopup(s)})}i.dc=function(t){Ie(this);var s=this,a=this.i;return this.i=null,Ei(this,function(l){return l&&!Wn(ie(s))?l.linkWithRedirect(t):ve(s).signInWithRedirect(t)}).then(function(){},function(l){throw s.i=a,l})},i.cc=function(t,s){Ie(this);var a=this;return Ei(this,function(l){return l?l.linkWithPhoneNumber(t,s).then(function(d){return new td(d,function(p){if(p.code=="auth/credential-already-in-use")return tr(a,p);throw p})}):kn(a).signInWithPhoneNumber(t,s).then(function(d){return new td(d)})})},i.$b=function(){return Ie(this),kn(this).signInAnonymously()};function qb(t,s){return Ie(t),Ei(t,function(a){if(t.j&&!t.j.isAnonymous&&qc(j(t))&&!ve(t).currentUser)return er(t).then(function(){return s.credential.providerId=="password"&&(s.credential=null),s});if(a)return er(t).then(function(){return a.linkWithCredential(s.credential)}).then(function(l){return s.user=l.user,s.credential=l.credential,s.operationType=l.operationType,s.additionalUserInfo=l.additionalUserInfo,s},function(l){if(l&&l.code=="auth/email-already-in-use"&&l.email&&l.credential)throw l;return tr(t,l,s.credential)});if(!s.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return er(t).then(function(){return kn(t).updateCurrentUser(s.user)}).then(function(){return s.user=kn(t).currentUser,s.operationType="signIn",s.credential&&s.credential.providerId&&s.credential.providerId=="password"&&(s.credential=null),s})})}i.Xb=function(t,s){return Ie(this),ve(this).signInWithEmailAndPassword(t,s)};function er(t){return Ie(t),ve(t).signOut()}function tr(t,s,a){if(Ie(t),s&&s.code&&(s.code=="auth/email-already-in-use"||s.code=="auth/credential-already-in-use")){var l=Eg(j(t));return We().then(function(){return l(new me("anonymous-upgrade-merge-conflict",null,a||s.credential))}).then(function(){throw t.g&&(t.g.m(),t.g=null),s})}return ks(s)}function Xa(t,s,a,l){U.call(this,Uv,void 0,l,"providerMatchByEmail",{F:s,D:a}),this.i=t}f(Xa,U),Xa.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),al(this.l(),(this.l().value||"").length),U.prototype.v.call(this)},Xa.prototype.o=function(){this.i=null,U.prototype.o.call(this)},A(Xa.prototype,{l:wi,H:Zi,u:no,B:io,j:ro,M:lt,w:_t});function dl(t,s,a,l,d){U.call(this,Fv,{ec:s},d,"selectTenant",{F:a,D:l}),this.i=t}f(dl,U),dl.prototype.v=function(){Hb(this,this.i),U.prototype.v.call(this)},dl.prototype.o=function(){this.i=null,U.prototype.o.call(this)};function Hb(t,s){function a(T){s(T)}for(var l=t.g?fi("firebaseui-id-tenant-selection-button",t.g||t.s.a):[],d=0;d<l.length;d++){var p=l[d],_=cl(p,"tenantId");Be(t,p,N(a,_))}}function Yd(t){U.call(this,av,void 0,t,"spinner")}f(Yd,U);function Wb(t){this.a=new gd,Je(this.a,"authDomain"),Je(this.a,"displayMode",pl),Je(this.a,"tenants"),Je(this.a,"callbacks"),Je(this.a,"tosUrl"),Je(this.a,"privacyPolicyUrl");for(var s in t)if(t.hasOwnProperty(s))try{vd(this.a,s,t[s])}catch{en('Invalid config: "'+s+'"',void 0)}}function $b(t){t=t.a.get("displayMode");for(var s in Qd)if(Qd[s]===t)return Qd[s];return pl}function fl(t){return t.a.get("callbacks")||{}}function by(t){var s=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,s&&!t&&Qi("Privacy Policy URL is missing, the link will not be displayed."),s&&t){if(typeof s=="function")return s;if(typeof s=="string")return function(){Ns(s)}}return null}function Ty(t){var s=t.a.get("tosUrl")||null,a=t.a.get("privacyPolicyUrl")||null;if(a&&!s&&Qi("Terms of Service URL is missing, the link will not be displayed."),s&&a){if(typeof a=="function")return a;if(typeof a=="string")return function(){Ns(a)}}return null}function Jd(t,s){if(t=t.a.get("tenants"),!t||!t.hasOwnProperty(s)&&!t.hasOwnProperty(ml))throw Error("Invalid tenant configuration!")}function Ay(t,s,a){if(t=t.a.get("tenants"),!t)throw Error("Invalid tenant configuration!");var l=[];if(t=t[s]||t[ml],!t)return en("Invalid tenant configuration: "+(s+" is not configured!"),void 0),l;if(s=t.signInOptions,!s)throw Error("Invalid tenant configuration: signInOptions are invalid!");return s.forEach(function(d){if(typeof d=="string")l.push(d);else if(typeof d.provider=="string"){var p=d.hd;p&&a?(p instanceof RegExp?p:new RegExp("@"+p.replace(".","\\.")+"$")).test(a)&&l.push(d.provider):l.push(d.provider)}else d="Invalid tenant configuration: signInOption "+(JSON.stringify(d)+" is invalid!"),en(d,void 0)}),l}function Gb(t,s,a){return t=zb(t,s),(s=t.signInOptions)&&a&&(s=s.filter(function(l){return typeof l=="string"?a.includes(l):a.includes(l.provider)}),t.signInOptions=s),t}function zb(t,s){var a=Kb,l=l===void 0?{}:l;return Jd(t,s),t=t.a.get("tenants"),TE(t[s]||t[ml],a,l)}var Kb=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],pl="optionFirst",Qd={pc:pl,oc:"identifierFirst"},ml="*";function Dn(t,s){var a=this;this.s=wc(t),this.a={},Object.keys(s).forEach(function(l){a.a[l]=new Wb(s[l])}),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(l){this.ob=l||null},enumerable:!1})}i=Dn.prototype,i.Ub=function(t,s){var a=this;nr(this);var l=t.apiKey;return new it(function(d,p){if(a.a.hasOwnProperty(l)){var _=fl(a.a[l]).selectTenantUiHidden||null;if($b(a.a[l])===pl){var T=[];s.forEach(function(X){X=X||"_";var Ce=a.a[l].a.get("tenants");if(!Ce)throw Error("Invalid tenant configuration!");(Ce=Ce[X]||Ce[ml])?X={tenantId:X!=="_"?X:null,V:Ce.fullLabel||null,displayName:Ce.displayName,za:Ce.iconUrl,ta:Ce.buttonColor}:(en("Invalid tenant configuration: "+(X+" is not configured!"),void 0),X=null),X&&T.push(X)});var M=function(X){X={tenantId:X,providerIds:Ay(a.a[l],X||"_")},d(X)};if(T.length===1){M(T[0].tenantId);return}a.g=new dl(function(X){nr(a),_&&_(),M(X)},T,by(a.a[l]),Ty(a.a[l]))}else a.g=new Xa(function(){var X=a.g.j();if(X){for(var Ce=0;Ce<s.length;Ce++){var Nn=Ay(a.a[l],s[Ce]||"_",X);if(Nn.length!==0){X={tenantId:s[Ce],providerIds:Nn,email:X},nr(a),_&&_(),d(X);return}}a.g.a(Se({code:"no-matching-tenant-for-email"}).toString())}},by(a.a[l]),Ty(a.a[l]));a.g.render(a.s),(p=fl(a.a[l]).selectTenantUiShown||null)&&p()}else{var H=Error("Invalid project configuration: API key is invalid!");H.code="invalid-configuration",a.pb(H),p(H)}})},i.Pb=function(t,s){if(!this.a.hasOwnProperty(t))throw Error("Invalid project configuration: API key is invalid!");var a=s||void 0;Jd(this.a[t],s||"_");try{this.i=Z.app(a).auth()}catch{var l=this.a[t].a.get("authDomain");if(!l)throw Error("Invalid project configuration: authDomain is required!");t=Z.initializeApp({apiKey:t,authDomain:l},a),t.auth().tenantId=s,this.i=t.auth()}return this.i},i.Zb=function(t,s){var a=this;return new it(function(l,d){function p(Ce,Nn){a.j=new Kn(t),yy(a.j,a.s,Ce,Nn)}var _=t.app.options.apiKey;a.a.hasOwnProperty(_)||d(Error("Invalid project configuration: API key is invalid!"));var T=Gb(a.a[_],t.tenantId||"_",s&&s.providerIds);nr(a),d={signInSuccessWithAuthResult:function(Ce){return l(Ce),!1}};var M=fl(a.a[_]).signInUiShown||null,H=!1;d.uiChanged=function(Ce,Nn){Ce===null&&Nn==="callback"?((Ce=pi("firebaseui-id-page-callback",a.s))&&nn(Ce),a.h=new Yd,a.h.render(a.s)):H||Ce===null&&Nn==="spinner"||Nn==="blank"||(a.h&&(a.h.m(),a.h=null),H=!0,M&&M(t.tenantId))},T.callbacks=d,T.credentialHelper="none";var X;s&&s.email&&(X={emailHint:s.email}),a.j?a.j.Wa().then(function(){p(T,X)}):p(T,X)})},i.reset=function(){var t=this;return We().then(function(){t.j&&t.j.Wa()}).then(function(){t.j=null,nr(t)})},i.Vb=function(){var t=this;this.h||this.A||(this.A=window.setTimeout(function(){nr(t),t.h=new Yd,t.g=t.h,t.h.render(t.s),t.A=null},500))},i.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},i.Bb=function(){return nr(this),this.g=new zv,this.g.render(this.s),We()};function nr(t){t.j&&t.j.reset(),t.mb(),t.g&&t.g.m()}i.pb=function(t){var s=this,a=Se({code:t.code}).toString()||t.message;nr(this);var l;t.retry&&typeof t.retry=="function"&&(l=function(){s.reset(),t.retry()}),this.g=new Qv(a,l),this.g.render(this.s)},i.Rb=function(t){var s=this;return We().then(function(){var a=s.i&&s.i.app.options.apiKey;if(!s.a.hasOwnProperty(a))throw Error("Invalid project configuration: API key is invalid!");if(Jd(s.a[a],t.tenantId||"_"),!s.i.currentUser||s.i.currentUser.uid!==t.uid)throw Error("The user being processed does not match the signed in user!");return(a=fl(s.a[a]).beforeSignInSuccess||null)?a(t):t}).then(function(a){if(a.uid!==t.uid)throw Error("User with mismatching UID returned.");return a})},Ae("firebaseui.auth.FirebaseUiHandler",Dn),Ae("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Dn.prototype.Ub),Ae("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Dn.prototype.Pb),Ae("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Dn.prototype.Zb),Ae("firebaseui.auth.FirebaseUiHandler.prototype.reset",Dn.prototype.reset),Ae("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Dn.prototype.Vb),Ae("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Dn.prototype.mb),Ae("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Dn.prototype.Bb),Ae("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Dn.prototype.pb),Ae("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Dn.prototype.Rb),Ae("firebaseui.auth.AuthUI",Kn),Ae("firebaseui.auth.AuthUI.getInstance",function(t){return t=Kd(t),Qa[t]?Qa[t]:null}),Ae("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",Kn.prototype.Db),Ae("firebaseui.auth.AuthUI.prototype.start",Kn.prototype.start),Ae("firebaseui.auth.AuthUI.prototype.setConfig",Kn.prototype.ib),Ae("firebaseui.auth.AuthUI.prototype.signIn",Kn.prototype.Wb),Ae("firebaseui.auth.AuthUI.prototype.reset",Kn.prototype.reset),Ae("firebaseui.auth.AuthUI.prototype.delete",Kn.prototype.Wa),Ae("firebaseui.auth.AuthUI.prototype.isPendingRedirect",Kn.prototype.nb),Ae("firebaseui.auth.AuthUIError",me),Ae("firebaseui.auth.AuthUIError.prototype.toJSON",me.prototype.toJSON),Ae("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",Td),Ae("firebaseui.auth.CredentialHelper.NONE",Wc),Ae("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),it.prototype.catch=it.prototype.Ca,it.prototype.finally=it.prototype.fc}).apply(typeof global<"u"?global:typeof self<"u"?self:window)}).apply(typeof global<"u"?global:typeof self<"u"?self:window);typeof window<"u"&&(window.dialogPolyfill=PN);var Q_=firebaseui.auth;const kN={apiKey:"AIzaSyBV1i44xkAdtdgDtaTniMgszuCqz7gWDx0",authDomain:"jvk-test.firebaseapp.com",projectId:"jvk-test",storageBucket:"jvk-test.appspot.com",messagingSenderId:"991916937600",appId:"1:991916937600:web:1b6abf257f28ceba6f7165",measurementId:"G-KHYJ1JZFH5"},DN={signInSuccessUrl:"index.html",signInOptions:[{provider:Z.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!1},{provider:Z.auth.GoogleAuthProvider.PROVIDER_ID}]},Yp=Xl(kN);zA(Yp);const uE=qC(Yp),Dl=CD(Yp);$P(Dl,i=>{zu("");let e=document.getElementById("auth-el"),n=document.getElementById("root");Dl.currentUser?(e.innerHTML="",n.style.display="block"):(n.style.display="none",(Q_.AuthUI.getInstance()||new Q_.AuthUI(Dl)).start(e,DN))});function zu(i,e=!1){e||Array.from(document.querySelector("#workspace").children).forEach(r=>{r.style.display="none"});let n=document.getElementById(i);n&&(n.style.display="block")}function vf(i,e=!1){document.getElementById("text-message").innerHTML=i,zu("text-message",e)}document.getElementById("button-logout").addEventListener("click",i=>{i.preventDefault(),zu(""),GP(Dl).catch(()=>{console.log("Error during signout: ",i)})});document.getElementById("button-create").addEventListener("click",i=>{i.preventDefault(),zu("form-create")});document.getElementById("button-list").addEventListener("click",async i=>{i.preventDefault(),zu("table-list");let e=document.getElementById("table-list");for(;e.children.length>1;)e.removeChild(e.lastChild);(await o2(jC(uE,"users"))).forEach(r=>{e.innerHTML+=`<tr><td>${r.id}</td><td>${r.get("name")}</td></tr>`})});document.getElementById("button-submit").addEventListener("click",i=>{let e=document.getElementById("input-persid").value,n=document.getElementById("input-name").value;n&&e?a2(BC(uE,"users",e),{name:n}).then(()=>{vf("The person has been added successfully.")}).catch(r=>{vf("An error occurred while adding the person: "+r)}):vf("You must enter non-empty id and name.",!0)});
