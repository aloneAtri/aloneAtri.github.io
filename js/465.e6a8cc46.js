(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[465],{6465:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Jt}});var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"music"}},[t("div",{attrs:{id:"title"}},[t("h1",{staticClass:"select2"},[e._v("MusicPlayer")]),t("ul",{attrs:{id:"head"}},[t("li",{staticClass:"select2"},[t("el-button",[e._v("播放列表")])],1),t("li",{staticClass:"select2"},[t("el-button",[e._v("歌单")])],1),t("li",{staticClass:"select2"},[t("el-button",[e._v("歌曲搜索")])],1)])]),t("router-view"),t("div",{attrs:{id:"load"}},[e._m(0),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"}),t("el-slider",{model:{value:e.load,callback:function(t){e.load=t},expression:"load"}})],1),t("div",[e._m(1),t("span",{staticClass:"demonstration1"}),t("el-slider",{staticStyle:{width:"65%","margin-right":"20px"},model:{value:e.sound,callback:function(t){e.sound=t},expression:"sound"}})],1)])],1)},o=[function(){var e=this,t=e._self._c;return t("div",[t("span",[t("i",{staticClass:"el-icon-d-arrow-left select"})]),t("span",[t("i",{staticClass:"el-icon-video-pause select"})]),t("span",[t("i",{staticClass:"el-icon-video-play select"})]),t("span",[t("i",{staticClass:"el-icon-d-arrow-right select"})])])},function(){var e=this,t=e._self._c;return t("span",[t("i",{staticClass:"el-icon-bell select"})])}];function s(e,t){return function(){return e.apply(t,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:a}=Object,c=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),u=e=>(e=e.toLowerCase(),t=>c(t)===e),l=e=>t=>typeof t===e,{isArray:f}=Array,d=l("undefined");function h(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const p=u("ArrayBuffer");function m(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t}const b=l("string"),g=l("function"),y=l("number"),w=e=>null!==e&&"object"===typeof e,E=e=>!0===e||!1===e,O=e=>{if("object"!==c(e))return!1;const t=a(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},v=u("Date"),R=u("File"),S=u("Blob"),A=u("FileList"),C=e=>w(e)&&g(e.pipe),j=e=>{const t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||i.call(e)===t||g(e.toString)&&e.toString()===t)},T=u("URLSearchParams"),x=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),f(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function N(){const e={},t=(t,n)=>{O(e[n])&&O(t)?e[n]=N(e[n],t):O(t)?e[n]=N({},t):f(t)?e[n]=t.slice():e[n]=t};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&_(arguments[n],t);return e}const P=(e,t,n,{allOwnKeys:r}={})=>(_(t,((t,r)=>{n&&g(t)?e[r]=s(t,n):e[r]=t}),{allOwnKeys:r}),e),B=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),D=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},F=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),s=o.length;while(s-- >0)i=o[s],r&&!r(i,e,t)||c[i]||(t[i]=e[i],c[i]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},U=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},L=e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},k=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&a(Uint8Array)),z=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},q=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},I=u("HTMLFormElement"),M=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),J=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),V=u("RegExp"),H=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},W=e=>{H(e,((t,n)=>{const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")}))}))},K=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},$=()=>{},X=(e,t)=>(e=+e,Number.isFinite(e)?e:t);var Q={isArray:f,isArrayBuffer:p,isBuffer:h,isFormData:j,isArrayBufferView:m,isString:b,isNumber:y,isBoolean:E,isObject:w,isPlainObject:O,isUndefined:d,isDate:v,isFile:R,isBlob:S,isRegExp:V,isFunction:g,isStream:C,isURLSearchParams:T,isTypedArray:k,isFileList:A,forEach:_,merge:N,extend:P,trim:x,stripBOM:B,inherits:D,toFlatObject:F,kindOf:c,kindOfTest:u,endsWith:U,toArray:L,forEachEntry:z,matchAll:q,isHTMLForm:I,hasOwnProperty:J,hasOwnProp:J,reduceDescriptors:H,freezeMethods:W,toObjectSet:K,toCamelCase:M,noop:$,toFiniteNumber:X};function Z(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}Q.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const G=Z.prototype,Y={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Y[e]={value:e}})),Object.defineProperties(Z,Y),Object.defineProperty(G,"isAxiosError",{value:!0}),Z.from=(e,t,n,r,o,s)=>{const i=Object.create(G);return Q.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Z.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var ee=Z,te=n(6230),ne=te;function re(e){return Q.isPlainObject(e)||Q.isArray(e)}function oe(e){return Q.endsWith(e,"[]")?e.slice(0,-2):e}function se(e,t,n){return e?e.concat(t).map((function(e,t){return e=oe(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function ie(e){return Q.isArray(e)&&!e.some(re)}const ae=Q.toFlatObject(Q,{},null,(function(e){return/^is[A-Z]/.test(e)}));function ce(e){return e&&Q.isFunction(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator]}function ue(e,t,n){if(!Q.isObject(e))throw new TypeError("target must be an object");t=t||new(ne||FormData),n=Q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Q.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&ce(t);if(!Q.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(Q.isDate(e))return e.toISOString();if(!c&&Q.isBlob(e))throw new ee("Blob is not supported. Use a Buffer instead.");return Q.isArrayBuffer(e)||Q.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(Q.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Q.isArray(e)&&ie(e)||Q.isFileList(e)||Q.endsWith(n,"[]")&&(a=Q.toArray(e)))return n=oe(n),a.forEach((function(e,r){!Q.isUndefined(e)&&null!==e&&t.append(!0===i?se([n],r,s):null===i?n:n+"[]",u(e))})),!1;return!!re(e)||(t.append(se(o,n,s),u(e)),!1)}const f=[],d=Object.assign(ae,{defaultVisitor:l,convertValue:u,isVisitable:re});function h(e,n){if(!Q.isUndefined(e)){if(-1!==f.indexOf(e))throw Error("Circular reference detected in "+n.join("."));f.push(e),Q.forEach(e,(function(e,r){const s=!(Q.isUndefined(e)||null===e)&&o.call(t,e,Q.isString(r)?r.trim():r,n,d);!0===s&&h(e,n?n.concat(r):[r])})),f.pop()}}if(!Q.isObject(e))throw new TypeError("data must be an object");return h(e),t}var le=ue;function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function de(e,t){this._pairs=[],e&&le(e,this,t)}const he=de.prototype;he.append=function(e,t){this._pairs.push([e,t])},he.toString=function(e){const t=e?function(t){return e.call(this,t,fe)}:fe;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var pe=de;function me(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function be(e,t,n){if(!t)return e;const r=n&&n.encode||me,o=n&&n.serialize;let s;if(s=o?o(t,n):Q.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}class ge{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Q.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var ye=ge,we={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ee="undefined"!==typeof URLSearchParams?URLSearchParams:pe,Oe=FormData;const ve=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})();var Re={isBrowser:!0,classes:{URLSearchParams:Ee,FormData:Oe,Blob:Blob},isStandardBrowserEnv:ve,protocols:["http","https","file","blob","url","data"]};function Se(e,t){return le(e,new Re.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Re.isNode&&Q.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Ae(e){return Q.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Ce(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function je(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&Q.isArray(r)?r.length:s,a)return Q.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&Q.isObject(r[s])||(r[s]=[]);const c=t(e,n,r[s],o);return c&&Q.isArray(r[s])&&(r[s]=Ce(r[s])),!i}if(Q.isFormData(e)&&Q.isFunction(e.entries)){const n={};return Q.forEachEntry(e,((e,r)=>{t(Ae(e),r,n,0)})),n}return null}var Te=je;function xe(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var _e=Re.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),Q.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),Q.isString(r)&&i.push("path="+r),Q.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ne(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Pe(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Be(e,t){return e&&!Ne(t)?Pe(e,t):t}var De=Re.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=Q.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function Fe(e,t,n){ee.call(this,null==e?"canceled":e,ee.ERR_CANCELED,t,n),this.name="CanceledError"}Q.inherits(Fe,ee,{__CANCEL__:!0});var Ue=Fe;function Le(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const ke=Q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var ze=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ke[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const qe=Symbol("internals"),Ie=Symbol("defaults");function Me(e){return e&&String(e).trim().toLowerCase()}function Je(e){return!1===e||null==e?e:Q.isArray(e)?e.map(Je):String(e)}function Ve(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}function He(e,t,n,r){return Q.isFunction(r)?r.call(this,t,n):Q.isString(t)?Q.isString(r)?-1!==t.indexOf(r):Q.isRegExp(r)?r.test(t):void 0:void 0}function We(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function Ke(e,t){const n=Q.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}function $e(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}function Xe(e,t){e&&this.set(e),this[Ie]=t||null}Object.assign(Xe.prototype,{set:function(e,t,n){const r=this;function o(e,t,n){const o=Me(t);if(!o)throw new Error("header name must be a non-empty string");const s=$e(r,o);(!s||!0===n||!1!==r[s]&&!1!==n)&&(r[s||t]=Je(e))}return Q.isPlainObject(e)?Q.forEach(e,((e,n)=>{o(e,n,t)})):o(t,e,n),this},get:function(e,t){if(e=Me(e),!e)return;const n=$e(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return Ve(e);if(Q.isFunction(t))return t.call(this,e,n);if(Q.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=Me(e),e){const n=$e(this,e);return!(!n||t&&!He(this,this[n],n,t))}return!1},delete:function(e,t){const n=this;let r=!1;function o(e){if(e=Me(e),e){const o=$e(n,e);!o||t&&!He(n,n[o],o,t)||(delete n[o],r=!0)}}return Q.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return Q.forEach(this,((r,o)=>{const s=$e(n,o);if(s)return t[s]=Je(r),void delete t[o];const i=e?We(o):String(o).trim();i!==o&&delete t[o],t[i]=Je(r),n[i]=!0})),this},toJSON:function(e){const t=Object.create(null);return Q.forEach(Object.assign({},this[Ie]||null,this),((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Q.isArray(n)?n.join(", "):n)})),t}}),Object.assign(Xe,{from:function(e){return Q.isString(e)?new this(ze(e)):e instanceof this?e:new this(e)},accessor:function(e){const t=this[qe]=this[qe]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=Me(e);n[t]||(Ke(r,e),n[t]=!0)}return Q.isArray(e)?e.forEach(o):o(e),this}}),Xe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),Q.freezeMethods(Xe.prototype),Q.freezeMethods(Xe);var Qe=Xe;function Ze(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;while(l!==s)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var Ge=Ze;function Ye(e,t){let n=0;const r=Ge(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a),u=s<=i;n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&u?(i-s)/c:void 0};l[t?"download":"upload"]=!0,e(l)}}function et(e){return new Promise((function(t,n){let r=e.data;const o=Qe.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}Q.isFormData(r)&&Re.isStandardBrowserEnv&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=Be(e.baseURL,e.url);function l(){if(!c)return;const r=Qe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),o=s&&"text"!==s&&"json"!==s?c.response:c.responseText,i={data:o,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};xe((function(e){t(e),a()}),(function(e){n(e),a()}),i),c=null}if(c.open(e.method.toUpperCase(),be(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new ee("Request aborted",ee.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new ee("Network Error",ee.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||we;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ee(t,r.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,c)),c=null},Re.isStandardBrowserEnv){const t=(e.withCredentials||De(u))&&e.xsrfCookieName&&_e.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&Q.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),Q.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&c.addEventListener("progress",Ye(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new Ue(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=Le(u);f&&-1===Re.protocols.indexOf(f)?n(new ee("Unsupported protocol "+f+":",ee.ERR_BAD_REQUEST,e)):c.send(r||null)}))}const tt={http:et,xhr:et};var nt={getAdapter:e=>{if(Q.isString(e)){const t=tt[e];if(!e)throw Error(Q.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!Q.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:tt};const rt={"Content-Type":"application/x-www-form-urlencoded"};function ot(){let e;return"undefined"!==typeof XMLHttpRequest?e=nt.getAdapter("xhr"):"undefined"!==typeof process&&"process"===Q.kindOf(process)&&(e=nt.getAdapter("http")),e}function st(e,t,n){if(Q.isString(e))try{return(t||JSON.parse)(e),Q.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const it={transitional:we,adapter:ot(),transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Q.isObject(e);o&&Q.isHTMLForm(e)&&(e=new FormData(e));const s=Q.isFormData(e);if(s)return r&&r?JSON.stringify(Te(e)):e;if(Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e))return e;if(Q.isArrayBufferView(e))return e.buffer;if(Q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Se(e,this.formSerializer).toString();if((i=Q.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return le(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),st(e)):e}],transformResponse:[function(e){const t=this.transitional||it.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&Q.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,s=!n&&r;try{return JSON.parse(e)}catch(o){if(s){if("SyntaxError"===o.name)throw ee.from(o,ee.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Re.classes.FormData,Blob:Re.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Q.forEach(["delete","get","head"],(function(e){it.headers[e]={}})),Q.forEach(["post","put","patch"],(function(e){it.headers[e]=Q.merge(rt)}));var at=it;function ct(e,t){const n=this||at,r=t||n,o=Qe.from(r.headers);let s=r.data;return Q.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function ut(e){return!(!e||!e.__CANCEL__)}function lt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ue}function ft(e){lt(e),e.headers=Qe.from(e.headers),e.data=ct.call(e,e.transformRequest);const t=e.adapter||at.adapter;return t(e).then((function(t){return lt(e),t.data=ct.call(e,e.transformResponse,t),t.headers=Qe.from(t.headers),t}),(function(t){return ut(t)||(lt(e),t&&t.response&&(t.response.data=ct.call(e,e.transformResponse,t.response),t.response.headers=Qe.from(t.response.headers))),Promise.reject(t)}))}function dt(e,t){t=t||{};const n={};function r(e,t){return Q.isPlainObject(e)&&Q.isPlainObject(t)?Q.merge(e,t):Q.isPlainObject(t)?Q.merge({},t):Q.isArray(t)?t.slice():t}function o(n){return Q.isUndefined(t[n])?Q.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!Q.isUndefined(t[e]))return r(void 0,t[e])}function i(n){return Q.isUndefined(t[n])?Q.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a};return Q.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){const t=c[e]||o,r=t(e);Q.isUndefined(r)&&t!==a||(n[e]=r)})),n}const ht="1.1.3",pt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{pt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const mt={};function bt(e,t,n){if("object"!==typeof e)throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new ee("option "+s+" must be "+n,ee.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ee("Unknown option "+s,ee.ERR_BAD_OPTION)}}pt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+ht+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new ee(r(o," has been removed"+(t?" in "+t:"")),ee.ERR_DEPRECATED);return t&&!mt[o]&&(mt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var gt={assertOptions:bt,validators:pt};const yt=gt.validators;class wt{constructor(e){this.defaults=e,this.interceptors={request:new ye,response:new ye}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=dt(this.defaults,t);const{transitional:n,paramsSerializer:r}=t;void 0!==n&&gt.assertOptions(n,{silentJSONParsing:yt.transitional(yt.boolean),forcedJSONParsing:yt.transitional(yt.boolean),clarifyTimeoutError:yt.transitional(yt.boolean)},!1),void 0!==r&&gt.assertOptions(r,{encode:yt.function,serialize:yt.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();const o=t.headers&&Q.merge(t.headers.common,t.headers[t.method]);o&&Q.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),t.headers=new Qe(t.headers,o);const s=[];let i=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const a=[];let c;this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)}));let u,l=0;if(!i){const e=[ft.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,a),u=e.length,c=Promise.resolve(t);while(l<u)c=c.then(e[l++],e[l++]);return c}u=s.length;let f=t;l=0;while(l<u){const e=s[l++],t=s[l++];try{f=e(f)}catch(d){t.call(this,d);break}}try{c=ft.call(this,f)}catch(d){return Promise.reject(d)}l=0,u=a.length;while(l<u)c=c.then(a[l++],a[l++]);return c}getUri(e){e=dt(this.defaults,e);const t=Be(e.baseURL,e.url);return be(t,e.params,e.paramsSerializer)}}Q.forEach(["delete","get","head","options"],(function(e){wt.prototype[e]=function(t,n){return this.request(dt(n||{},{method:e,url:t,data:(n||{}).data}))}})),Q.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(dt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}wt.prototype[e]=t(),wt.prototype[e+"Form"]=t(!0)}));var Et=wt;class Ot{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Ue(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new Ot((function(t){e=t}));return{token:t,cancel:e}}}var vt=Ot;function Rt(e){return function(t){return e.apply(null,t)}}function St(e){return Q.isObject(e)&&!0===e.isAxiosError}function At(e){const t=new Et(e),n=s(Et.prototype.request,t);return Q.extend(n,Et.prototype,t,{allOwnKeys:!0}),Q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return At(dt(e,t))},n}const Ct=At(at);Ct.Axios=Et,Ct.CanceledError=Ue,Ct.CancelToken=vt,Ct.isCancel=ut,Ct.VERSION=ht,Ct.toFormData=le,Ct.AxiosError=ee,Ct.Cancel=Ct.CanceledError,Ct.all=function(e){return Promise.all(e)},Ct.spread=Rt,Ct.isAxiosError=St,Ct.formToJSON=e=>Te(Q.isHTMLForm(e)?new FormData(e):e);var jt=Ct;const{Axios:Tt,AxiosError:xt,CanceledError:_t,isCancel:Nt,CancelToken:Pt,VERSION:Bt,all:Dt,Cancel:Ft,isAxiosError:Ut,spread:Lt,toFormData:kt}=jt;var zt={data(){return{load:0,sound:0}},mounted(){}},qt=zt,It=n(1001),Mt=(0,It.Z)(qt,r,o,!1,null,"d9dea6c4",null),Jt=Mt.exports},6230:function(e){e.exports="object"==typeof self?self.FormData:window.FormData}}]);
//# sourceMappingURL=465.e6a8cc46.js.map