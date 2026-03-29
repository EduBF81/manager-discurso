const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AgendarView-C9AlRZlH.js","assets/AgendarView-D1KeC0Em.css","assets/ConsultaView-AmEB6O-M.js","assets/ConsultaView-M8TOLLEx.css","assets/HistoricoView-DdUajlJI.js","assets/HistoricoView-c2of_hNJ.css","assets/PalestrantesView-z6uPJHo3.js","assets/PalestrantesView-BaHQjyiv.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ec(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},Zr=[],an=()=>{},Uf=()=>!1,aa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),la=t=>t.startsWith("onUpdate:"),ut=Object.assign,Tc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ty=Object.prototype.hasOwnProperty,Pe=(t,e)=>ty.call(t,e),ie=Array.isArray,es=t=>Di(t)==="[object Map]",Ts=t=>Di(t)==="[object Set]",bh=t=>Di(t)==="[object Date]",pe=t=>typeof t=="function",Ye=t=>typeof t=="string",jt=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Bf=t=>(xe(t)||pe(t))&&pe(t.then)&&pe(t.catch),jf=Object.prototype.toString,Di=t=>jf.call(t),ny=t=>Di(t).slice(8,-1),qf=t=>Di(t)==="[object Object]",ca=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ei=Ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ry=/-\w/g,Ct=ua(t=>t.replace(ry,e=>e.slice(1).toUpperCase())),sy=/\B([A-Z])/g,Nr=ua(t=>t.replace(sy,"-$1").toLowerCase()),ha=ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),ol=ua(t=>t?`on${ha(t)}`:""),on=(t,e)=>!Object.is(t,e),yo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$f=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},da=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rh;const fa=()=>Rh||(Rh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ic(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?ly(r):Ic(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||xe(t))return t}const iy=/;(?![^(]*\))/g,oy=/:([^]+)/,ay=/\/\*[^]*?\*\//g;function ly(t){const e={};return t.replace(ay,"").split(iy).forEach(n=>{if(n){const r=n.split(oy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hr(t){let e="";if(Ye(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=hr(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uy=Ec(cy);function Hf(t){return!!t||t===""}function hy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Is(t[r],e[r]);return n}function Is(t,e){if(t===e)return!0;let n=bh(t),r=bh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=jt(t),r=jt(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?hy(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Is(t[o],e[o]))return!1}}return String(t)===String(e)}function wc(t,e){return t.findIndex(n=>Is(n,e))}const zf=t=>!!(t&&t.__v_isRef===!0),Me=t=>Ye(t)?t:t==null?"":ie(t)||xe(t)&&(t.toString===jf||!pe(t.toString))?zf(t)?Me(t.value):JSON.stringify(t,Wf,2):String(t),Wf=(t,e)=>zf(e)?Wf(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[al(r,i)+" =>"]=s,n),{})}:Ts(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>al(n))}:jt(e)?al(e):xe(e)&&!ie(e)&&!qf(e)?String(e):e,al=(t,e="")=>{var n;return jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Kf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gf(t){return new Kf(t)}function Qf(){return _t}function dy(t,e=!1){_t&&_t.cleanups.push(t)}let Ve;const ll=new WeakSet;class Jf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ll.has(this)&&(ll.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sh(this),Zf(this);const e=Ve,n=Jt;Ve=this,Jt=!0;try{return this.fn()}finally{ep(this),Ve=e,Jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rc(e);this.deps=this.depsTail=void 0,Sh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ll.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kl(this)&&this.run()}get dirty(){return kl(this)}}let Yf=0,ti,ni;function Xf(t,e=!1){if(t.flags|=8,e){t.next=ni,ni=t;return}t.next=ti,ti=t}function Ac(){Yf++}function bc(){if(--Yf>0)return;if(ni){let e=ni;for(ni=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ti;){let e=ti;for(ti=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Zf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ep(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Rc(r),fy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function kl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(tp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function tp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===pi)||(t.globalVersion=pi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!kl(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Jt;Ve=t,Jt=!0;try{Zf(t);const s=t.fn(t._value);(e.version===0||on(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Jt=r,ep(t),t.flags&=-3}}function Rc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Rc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function fy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Jt=!0;const np=[];function Dn(){np.push(Jt),Jt=!1}function kn(){const t=np.pop();Jt=t===void 0?!0:t}function Sh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let pi=0;class py{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Jt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new py(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,rp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,pi++,this.notify(e)}notify(e){Ac();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bc()}}}function rp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)rp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Oo=new WeakMap,Rr=Symbol(""),Ol=Symbol(""),mi=Symbol("");function vt(t,e,n){if(Jt&&Ve){let r=Oo.get(t);r||Oo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Sc),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const o=Oo.get(t);if(!o){pi++;return}const l=c=>{c&&c.trigger()};if(Ac(),e==="clear")o.forEach(l);else{const c=ie(t),h=c&&ca(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===mi||!jt(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(mi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Rr)),es(t)&&l(o.get(Ol)));break;case"delete":c||(l(o.get(Rr)),es(t)&&l(o.get(Ol)));break;case"set":es(t)&&l(o.get(Rr));break}}bc()}function my(t,e){const n=Oo.get(t);return n&&n.get(e)}function zr(t){const e=Ae(t);return e===t?e:(vt(e,"iterate",mi),Bt(t)?e:e.map(Yt))}function pa(t){return vt(t=Ae(t),"iterate",mi),t}function rn(t,e){return On(t)?as(Pn(t)?Yt(e):e):Yt(e)}const gy={__proto__:null,[Symbol.iterator](){return cl(this,Symbol.iterator,t=>rn(this,t))},concat(...t){return zr(this).concat(...t.map(e=>ie(e)?zr(e):e))},entries(){return cl(this,"entries",t=>(t[1]=rn(this,t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(r=>rn(this,r)),arguments)},find(t,e){return _n(this,"find",t,e,n=>rn(this,n),arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,n=>rn(this,n),arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return ul(this,"includes",t)},indexOf(...t){return ul(this,"indexOf",t)},join(t){return zr(this).join(t)},lastIndexOf(...t){return ul(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return qs(this,"pop")},push(...t){return qs(this,"push",t)},reduce(t,...e){return Ph(this,"reduce",t,e)},reduceRight(t,...e){return Ph(this,"reduceRight",t,e)},shift(){return qs(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return qs(this,"splice",t)},toReversed(){return zr(this).toReversed()},toSorted(t){return zr(this).toSorted(t)},toSpliced(...t){return zr(this).toSpliced(...t)},unshift(...t){return qs(this,"unshift",t)},values(){return cl(this,"values",t=>rn(this,t))}};function cl(t,e,n){const r=pa(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const _y=Array.prototype;function _n(t,e,n,r,s,i){const o=pa(t),l=o!==t&&!Bt(t),c=o[e];if(c!==_y[e]){const p=c.apply(t,i);return l?Yt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,rn(t,p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function Ph(t,e,n,r){const s=pa(t),i=s!==t&&!Bt(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(h,d,p){return l&&(l=!1,h=rn(t,h)),n.call(this,h,rn(t,d),p,t)}):n.length>3&&(o=function(h,d,p){return n.call(this,h,d,p,t)}));const c=s[e](o,...r);return l?rn(t,c):c}function ul(t,e,n){const r=Ae(t);vt(r,"iterate",mi);const s=r[e](...n);return(s===-1||s===!1)&&ma(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function qs(t,e,n=[]){Dn(),Ac();const r=Ae(t)[e].apply(t,n);return bc(),kn(),r}const yy=Ec("__proto__,__v_isRef,__isVue"),sp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jt));function vy(t){jt(t)||(t=String(t));const e=Ae(this);return vt(e,"has",t),e.hasOwnProperty(t)}class ip{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Cy:cp:i?lp:ap).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=gy[n]))return c;if(n==="hasOwnProperty")return vy}const l=Reflect.get(e,n,We(e)?e:r);if((jt(n)?sp.has(n):yy(n))||(s||vt(e,"get",n),i))return l;if(We(l)){const c=o&&ca(n)?l:l.value;return s&&xe(c)?Nl(c):c}return xe(l)?s?Nl(l):ki(l):l}}class op extends ip{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ie(e)&&ca(n);if(!this._isShallow){const h=On(i);if(!Bt(r)&&!On(r)&&(i=Ae(i),r=Ae(r)),!o&&We(i)&&!We(r))return h||(i.value=r),!0}const l=o?Number(n)<e.length:Pe(e,n),c=Reflect.set(e,n,r,We(e)?e:s);return e===Ae(s)&&(l?on(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),c}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jt(n)||!sp.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",ie(e)?"length":Rr),Reflect.ownKeys(e)}}class Ey extends ip{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ty=new op,Iy=new Ey,wy=new op(!0);const Vl=t=>t,lo=t=>Reflect.getPrototypeOf(t);function Ay(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=es(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Vl:e?as:Yt;return!e&&vt(i,"iterate",c?Ol:Rr),ut(Object.create(h),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}}})}}function co(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function by(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);t||(on(s,l)&&vt(o,"get",s),vt(o,"get",l));const{has:c}=lo(o),h=e?Vl:t?as:Yt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Ae(s),"iterate",Rr),s.size},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return t||(on(s,l)&&vt(o,"has",s),vt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),h=e?Vl:t?as:Yt;return!t&&vt(c,"iterate",Rr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return ut(n,t?{add:co("add"),set:co("set"),delete:co("delete"),clear:co("clear")}:{add(s){const i=Ae(this),o=lo(i),l=Ae(s),c=!e&&!Bt(s)&&!On(s)?l:s;return o.has.call(i,c)||on(s,c)&&o.has.call(i,s)||on(l,c)&&o.has.call(i,l)||(i.add(c),Tn(i,"add",c,c)),this},set(s,i){!e&&!Bt(i)&&!On(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=lo(o);let h=l.call(o,s);h||(s=Ae(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?on(i,d)&&Tn(o,"set",s,i):Tn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=lo(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Tn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&Tn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ay(s,t,e)}),n}function Pc(t,e){const n=by(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const Ry={get:Pc(!1,!1)},Sy={get:Pc(!1,!0)},Py={get:Pc(!0,!1)};const ap=new WeakMap,lp=new WeakMap,cp=new WeakMap,Cy=new WeakMap;function xy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dy(t){return t.__v_skip||!Object.isExtensible(t)?0:xy(ny(t))}function ki(t){return On(t)?t:Cc(t,!1,Ty,Ry,ap)}function up(t){return Cc(t,!1,wy,Sy,lp)}function Nl(t){return Cc(t,!0,Iy,Py,cp)}function Cc(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Dy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Pn(t){return On(t)?Pn(t.__v_raw):!!(t&&t.__v_isReactive)}function On(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function ma(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function xc(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&$f(t,"__v_skip",!0),t}const Yt=t=>xe(t)?ki(t):t,as=t=>xe(t)?Nl(t):t;function We(t){return t?t.__v_isRef===!0:!1}function Ze(t){return hp(t,!1)}function ky(t){return hp(t,!0)}function hp(t,e){return We(t)?t:new Oy(t,e)}class Oy{constructor(e,n){this.dep=new Sc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:Yt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||On(e);e=r?e:Ae(e),on(e,n)&&(this._rawValue=e,this._value=r?e:Yt(e),this.dep.trigger())}}function St(t){return We(t)?t.value:t}const Vy={get:(t,e,n)=>e==="__v_raw"?t:St(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return We(s)&&!We(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dp(t){return Pn(t)?t:new Proxy(t,Vy)}function Ny(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=Ly(t,n);return e}class My{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=jt(n)?n:String(n),this._raw=Ae(e);let s=!0,i=e;if(!ie(e)||jt(this._key)||!ca(this._key))do s=!ma(i)||Bt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=St(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&We(this._raw[this._key])){const n=this._object[this._key];if(We(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return my(this._raw,this._key)}}function Ly(t,e,n){return new My(t,e,n)}class Fy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Sc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Xf(this,!0),!0}get value(){const e=this.dep.track();return tp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uy(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new Fy(r,s,n)}const uo={},Vo=new WeakMap;let Tr;function By(t,e=!1,n=Tr){if(n){let r=Vo.get(n);r||Vo.set(n,r=[]),r.push(t)}}function jy(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=H=>s?H:Bt(H)||s===!1||s===0?In(H,1):In(H);let d,p,g,E,x=!1,k=!1;if(We(t)?(p=()=>t.value,x=Bt(t)):Pn(t)?(p=()=>h(t),x=!0):ie(t)?(k=!0,x=t.some(H=>Pn(H)||Bt(H)),p=()=>t.map(H=>{if(We(H))return H.value;if(Pn(H))return h(H);if(pe(H))return c?c(H,2):H()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Dn();try{g()}finally{kn()}}const H=Tr;Tr=d;try{return c?c(t,3,[E]):t(E)}finally{Tr=H}}:p=an,e&&s){const H=p,ne=s===!0?1/0:s;p=()=>In(H(),ne)}const D=Qf(),C=()=>{d.stop(),D&&D.active&&Tc(D.effects,d)};if(i&&e){const H=e;e=(...ne)=>{H(...ne),C()}}let M=k?new Array(t.length).fill(uo):uo;const V=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const ne=d.run();if(s||x||(k?ne.some((ge,A)=>on(ge,M[A])):on(ne,M))){g&&g();const ge=Tr;Tr=d;try{const A=[ne,M===uo?void 0:k&&M[0]===uo?[]:M,E];M=ne,c?c(e,3,A):e(...A)}finally{Tr=ge}}}else d.run()};return l&&l(V),d=new Jf(p),d.scheduler=o?()=>o(V,!1):V,E=H=>By(H,!1,d),g=d.onStop=()=>{const H=Vo.get(d);if(H){if(c)c(H,4);else for(const ne of H)ne();Vo.delete(d)}},e?r?V(!0):M=d.run():o?o(V.bind(null,!0),!0):d.run(),C.pause=d.pause.bind(d),C.resume=d.resume.bind(d),C.stop=C,C}function In(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,We(t))In(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)In(t[r],e,n);else if(Ts(t)||es(t))t.forEach(r=>{In(r,e,n)});else if(qf(t)){for(const r in t)In(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&In(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(t,e,n,r){try{return r?t(...r):t()}catch(s){ga(s,e,n)}}function dn(t,e,n,r){if(pe(t)){const s=Oi(t,e,n,r);return s&&Bf(s)&&s.catch(i=>{ga(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(dn(t[i],e,n,r));return s}}function ga(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){Dn(),Oi(i,null,10,[t,c,h]),kn();return}}qy(t,n,s,r,o)}function qy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let nn=-1;const ts=[];let Qn=null,Kr=0;const fp=Promise.resolve();let No=null;function _a(t){const e=No||fp;return t?e.then(this?t.bind(this):t):e}function $y(t){let e=nn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=gi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Dc(t){if(!(t.flags&1)){const e=gi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=gi(n)?Rt.push(t):Rt.splice($y(e),0,t),t.flags|=1,pp()}}function pp(){No||(No=fp.then(gp))}function Hy(t){ie(t)?ts.push(...t):Qn&&t.id===-1?Qn.splice(Kr+1,0,t):t.flags&1||(ts.push(t),t.flags|=1),pp()}function Ch(t,e,n=nn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function mp(t){if(ts.length){const e=[...new Set(ts)].sort((n,r)=>gi(n)-gi(r));if(ts.length=0,Qn){Qn.push(...e);return}for(Qn=e,Kr=0;Kr<Qn.length;Kr++){const n=Qn[Kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qn=null,Kr=0}}const gi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gp(t){try{for(nn=0;nn<Rt.length;nn++){const e=Rt[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Oi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<Rt.length;nn++){const e=Rt[nn];e&&(e.flags&=-2)}nn=-1,Rt.length=0,mp(),No=null,(Rt.length||ts.length)&&gp()}}let lt=null,_p=null;function Mo(t){const e=lt;return lt=t,_p=t&&t.type.__scopeId||null,e}function Qt(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Bo(-1);const i=Mo(e);let o;try{o=t(...s)}finally{Mo(i),r._d&&Bo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Lo(t,e){if(lt===null)return t;const n=Ta(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=ke]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&In(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Dn(),dn(c,n,8,[t.el,l,t,e]),kn())}}function vo(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=zp();if(r||Sr){let s=Sr?Sr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function zy(){return!!(zp()||Sr)}const Wy=Symbol.for("v-scx"),Ky=()=>zt(Wy);function ri(t,e,n){return yp(t,e,n)}function yp(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,l=ut({},n),c=e&&r||!e&&i!=="post";let h;if(vi){if(i==="sync"){const E=Ky();h=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=an,E.resume=an,E.pause=an,E}}const d=Tt;l.call=(E,x,k)=>dn(E,d,x,k);let p=!1;i==="post"?l.scheduler=E=>{kt(E,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(E,x)=>{x?E():Dc(E)}),l.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,d&&(E.id=d.uid,E.i=d))};const g=jy(t,e,l);return vi&&(h?h.push(g):c&&g()),g}function Gy(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?vp(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Vi(this),l=yp(s,i.bind(r),n);return o(),l}function vp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Qy=Symbol("_vte"),Jy=t=>t.__isTeleport,Yy=Symbol("_leaveCb");function kc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,kc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dr(t,e){return pe(t)?ut({name:t.name},e,{setup:t}):t}function Ep(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function xh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Fo=new WeakMap;function si(t,e,n,r,s=!1){if(ie(t)){t.forEach((k,D)=>si(k,e&&(ie(e)?e[D]:e),n,r,s));return}if(ns(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&si(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ta(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===ke?l.refs={}:l.refs,p=l.setupState,g=Ae(p),E=p===ke?Uf:k=>xh(d,k)?!1:Pe(g,k),x=(k,D)=>!(D&&xh(d,D));if(h!=null&&h!==c){if(Dh(e),Ye(h))d[h]=null,E(h)&&(p[h]=null);else if(We(h)){const k=e;x(h,k.k)&&(h.value=null),k.k&&(d[k.k]=null)}}if(pe(c))Oi(c,l,12,[o,d]);else{const k=Ye(c),D=We(c);if(k||D){const C=()=>{if(t.f){const M=k?E(c)?p[c]:d[c]:x()||!t.k?c.value:d[t.k];if(s)ie(M)&&Tc(M,i);else if(ie(M))M.includes(i)||M.push(i);else if(k)d[c]=[i],E(c)&&(p[c]=d[c]);else{const V=[i];x(c,t.k)&&(c.value=V),t.k&&(d[t.k]=V)}}else k?(d[c]=o,E(c)&&(p[c]=o)):D&&(x(c,t.k)&&(c.value=o),t.k&&(d[t.k]=o))};if(o){const M=()=>{C(),Fo.delete(t)};M.id=-1,Fo.set(t,M),kt(M,n)}else Dh(t),C()}}}function Dh(t){const e=Fo.get(t);e&&(e.flags|=8,Fo.delete(t))}fa().requestIdleCallback;fa().cancelIdleCallback;const ns=t=>!!t.type.__asyncLoader,Tp=t=>t.type.__isKeepAlive;function Xy(t,e){Ip(t,"a",e)}function Zy(t,e){Ip(t,"da",e)}function Ip(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ya(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Tp(s.parent.vnode)&&ev(r,e,n,s),s=s.parent}}function ev(t,e,n,r){const s=ya(e,t,r,!0);wp(()=>{Tc(r[e],s)},n)}function ya(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Dn();const l=Vi(n),c=dn(e,n,t,o);return l(),kn(),c});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=Tt)=>{(!vi||t==="sp")&&ya(t,(...r)=>e(...r),n)},tv=Un("bm"),Oc=Un("m"),nv=Un("bu"),rv=Un("u"),sv=Un("bum"),wp=Un("um"),iv=Un("sp"),ov=Un("rtg"),av=Un("rtc");function lv(t,e=Tt){ya("ec",t,e)}const cv="components";function Vc(t,e){return hv(cv,t,!0,e)||t}const uv=Symbol.for("v-ndc");function hv(t,e,n=!0,r=!1){const s=lt||Tt;if(s){const i=s.type;{const l=Qv(i,!1);if(l&&(l===e||l===Ct(e)||l===ha(Ct(e))))return i}const o=kh(s[t]||i[t],e)||kh(s.appContext[t],e);return!o&&r?i:o}}function kh(t,e){return t&&(t[e]||t[Ct(e)]||t[ha(Ct(e))])}function wr(t,e,n,r){let s;const i=n,o=ie(t);if(o||Ye(t)){const l=o&&Pn(t);let c=!1,h=!1;l&&(c=!Bt(t),h=On(t),t=pa(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?h?as(Yt(t[d])):Yt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Ap(t,e,n={},r,s){if(lt.ce||lt.parent&&ns(lt.parent)&&lt.parent.ce){const h=Object.keys(n).length>0;return me(),Pr(Je,null,[ze("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),me();const o=i&&bp(i(n)),l=n.key||o&&o.key,c=Pr(Je,{key:(l&&!jt(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function bp(t){return t.some(e=>yi(e)?!(e.type===Vn||e.type===Je&&!bp(e.children)):!0)?t:null}const Ml=t=>t?Wp(t)?Ta(t):Ml(t.parent):null,ii=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ml(t.parent),$root:t=>Ml(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Sp(t),$forceUpdate:t=>t.f||(t.f=()=>{Dc(t.update)}),$nextTick:t=>t.n||(t.n=_a.bind(t.proxy)),$watch:t=>Gy.bind(t)}),hl=(t,e)=>t!==ke&&!t.__isScriptSetup&&Pe(t,e),dv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(hl(r,e))return o[e]=1,r[e];if(s!==ke&&Pe(s,e))return o[e]=2,s[e];if(Pe(i,e))return o[e]=3,i[e];if(n!==ke&&Pe(n,e))return o[e]=4,n[e];Ll&&(o[e]=0)}}const h=ii[e];let d,p;if(h)return e==="$attrs"&&vt(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==ke&&Pe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Pe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return hl(s,e)?(s[e]=n,!0):r!==ke&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==ke&&l[0]!=="$"&&Pe(t,l)||hl(e,l)||Pe(i,l)||Pe(r,l)||Pe(ii,l)||Pe(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Oh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ll=!0;function fv(t){const e=Sp(t),n=t.proxy,r=t.ctx;Ll=!1,e.beforeCreate&&Vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:E,updated:x,activated:k,deactivated:D,beforeDestroy:C,beforeUnmount:M,destroyed:V,unmounted:H,render:ne,renderTracked:ge,renderTriggered:A,errorCaptured:_,serverPrefetch:v,expose:w,inheritAttrs:b,components:R,directives:T,filters:rt}=e;if(h&&pv(h,r,null),o)for(const ce in o){const ye=o[ce];pe(ye)&&(r[ce]=ye.bind(n))}if(s){const ce=s.call(n,n);xe(ce)&&(t.data=ki(ce))}if(Ll=!0,i)for(const ce in i){const ye=i[ce],Nt=pe(ye)?ye.bind(n,n):pe(ye.get)?ye.get.bind(n,n):an,Kt=!pe(ye)&&pe(ye.set)?ye.set.bind(n):an,qt=Pt({get:Nt,set:Kt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Ue=>qt.value=Ue})}if(l)for(const ce in l)Rp(l[ce],r,n,ce);if(c){const ce=pe(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(ye=>{vo(ye,ce[ye])})}d&&Vh(d,t,"c");function Oe(ce,ye){ie(ye)?ye.forEach(Nt=>ce(Nt.bind(n))):ye&&ce(ye.bind(n))}if(Oe(tv,p),Oe(Oc,g),Oe(nv,E),Oe(rv,x),Oe(Xy,k),Oe(Zy,D),Oe(lv,_),Oe(av,ge),Oe(ov,A),Oe(sv,M),Oe(wp,H),Oe(iv,v),ie(w))if(w.length){const ce=t.exposed||(t.exposed={});w.forEach(ye=>{Object.defineProperty(ce,ye,{get:()=>n[ye],set:Nt=>n[ye]=Nt,enumerable:!0})})}else t.exposed||(t.exposed={});ne&&t.render===an&&(t.render=ne),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),T&&(t.directives=T),v&&Ep(t)}function pv(t,e,n=an){ie(t)&&(t=Fl(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),We(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Vh(t,e,n){dn(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rp(t,e,n,r){let s=r.includes(".")?vp(n,r):()=>n[r];if(Ye(t)){const i=e[t];pe(i)&&ri(s,i)}else if(pe(t))ri(s,t.bind(n));else if(xe(t))if(ie(t))t.forEach(i=>Rp(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&ri(s,i,t)}}function Sp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Uo(c,h,o,!0)),Uo(c,e,o)),xe(e)&&i.set(e,c),c}function Uo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Uo(t,i,n,!0),s&&s.forEach(o=>Uo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=mv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const mv={data:Nh,props:Mh,emits:Mh,methods:Ks,computed:Ks,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Ks,directives:Ks,watch:_v,provide:Nh,inject:gv};function Nh(t,e){return e?t?function(){return ut(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function gv(t,e){return Ks(Fl(t),Fl(e))}function Fl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Ks(t,e){return t?ut(Object.create(null),t,e):e}function Mh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:ut(Object.create(null),Oh(t),Oh(e??{})):e}function _v(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Pp(){return{app:null,config:{isNativeTag:Uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yv=0;function vv(t,e){return function(r,s=null){pe(r)||(r=ut({},r)),s!=null&&!xe(s)&&(s=null);const i=Pp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:yv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Yv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(h,...p)):pe(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const E=h._ceVNode||ze(r,s);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(E,d,g),c=!0,h._container=d,d.__vue_app__=h,Ta(E.component)}},onUnmount(d){l.push(d)},unmount(){c&&(dn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Sr;Sr=h;try{return d()}finally{Sr=p}}};return h}}let Sr=null;const Ev=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ct(e)}Modifiers`]||t[`${Nr(e)}Modifiers`];function Tv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&Ev(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ye(d)?d.trim():d)),o.number&&(s=n.map(da)));let l,c=r[l=ol(e)]||r[l=ol(Ct(e))];!c&&i&&(c=r[l=ol(Nr(e))]),c&&dn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,dn(h,t,6,s)}}const Iv=new WeakMap;function Cp(t,e,n=!1){const r=n?Iv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=h=>{const d=Cp(h,e,!0);d&&(l=!0,ut(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):ut(o,i),xe(t)&&r.set(t,o),o)}function va(t,e){return!t||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Nr(e))||Pe(t,e))}function Lh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:E,ctx:x,inheritAttrs:k}=t,D=Mo(t);let C,M;try{if(n.shapeFlag&4){const H=s||r,ne=H;C=sn(h.call(ne,H,d,p,E,g,x)),M=l}else{const H=e;C=sn(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),M=e.props?l:wv(l)}}catch(H){oi.length=0,ga(H,t,1),C=ze(Vn)}let V=C;if(M&&k!==!1){const H=Object.keys(M),{shapeFlag:ne}=V;H.length&&ne&7&&(i&&H.some(la)&&(M=Av(M,i)),V=ls(V,M,!1,!0))}return n.dirs&&(V=ls(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&kc(V,n.transition),C=V,Mo(D),C}const wv=t=>{let e;for(const n in t)(n==="class"||n==="style"||aa(n))&&((e||(e={}))[n]=t[n]);return e},Av=(t,e)=>{const n={};for(const r in t)(!la(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Fh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(xp(o,r,g)&&!va(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Fh(r,o,h):!0:!!o;return!1}function Fh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(xp(e,t,i)&&!va(n,i))return!0}return!1}function xp(t,e,n){const r=t[n],s=e[n];return n==="style"&&xe(r)&&xe(s)?!Is(r,s):r!==s}function Rv({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Dp={},kp=()=>Object.create(Dp),Op=t=>Object.getPrototypeOf(t)===Dp;function Sv(t,e,n,r=!1){const s={},i=kp();t.propsDefaults=Object.create(null),Vp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:up(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Pv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ae(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(va(t.emitsOptions,g))continue;const E=e[g];if(c)if(Pe(i,g))E!==i[g]&&(i[g]=E,h=!0);else{const x=Ct(g);s[x]=Ul(c,l,x,E,t,!1)}else E!==i[g]&&(i[g]=E,h=!0)}}}else{Vp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Pe(e,p)&&((d=Nr(p))===p||!Pe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ul(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],h=!0)}h&&Tn(t.attrs,"set","")}function Vp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ei(c))continue;const h=e[c];let d;s&&Pe(s,d=Ct(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:va(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ae(n),h=l||ke;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ul(s,c,p,h[p],t,!Pe(h,p))}}return o}function Ul(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Vi(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Nr(n))&&(r=!0))}return r}const Cv=new WeakMap;function Np(t,e,n=!1){const r=n?Cv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[g,E]=Np(p,e,!0);ut(o,g),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return xe(t)&&r.set(t,Zr),Zr;if(ie(i))for(let d=0;d<i.length;d++){const p=Ct(i[d]);Uh(p)&&(o[p]=ke)}else if(i)for(const d in i){const p=Ct(d);if(Uh(p)){const g=i[d],E=o[p]=ie(g)||pe(g)?{type:g}:ut({},g),x=E.type;let k=!1,D=!0;if(ie(x))for(let C=0;C<x.length;++C){const M=x[C],V=pe(M)&&M.name;if(V==="Boolean"){k=!0;break}else V==="String"&&(D=!1)}else k=pe(x)&&x.name==="Boolean";E[0]=k,E[1]=D,(k||Pe(E,"default"))&&l.push(p)}}const h=[o,l];return xe(t)&&r.set(t,h),h}function Uh(t){return t[0]!=="$"&&!ei(t)}const Nc=t=>t==="_"||t==="_ctx"||t==="$stable",Mc=t=>ie(t)?t.map(sn):[sn(t)],xv=(t,e,n)=>{if(e._n)return e;const r=Qt((...s)=>Mc(e(...s)),n);return r._c=!1,r},Mp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Nc(s))continue;const i=t[s];if(pe(i))e[s]=xv(s,i,r);else if(i!=null){const o=Mc(i);e[s]=()=>o}}},Lp=(t,e)=>{const n=Mc(e);t.slots.default=()=>n},Fp=(t,e,n)=>{for(const r in e)(n||!Nc(r))&&(t[r]=e[r])},Dv=(t,e,n)=>{const r=t.slots=kp();if(t.vnode.shapeFlag&32){const s=e._;s?(Fp(r,e,n),n&&$f(r,"_",s,!0)):Mp(e,r)}else e&&Lp(t,e)},kv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Fp(s,e,n):(i=!e.$stable,Mp(e,s)),o=e}else e&&(Lp(t,e),o={default:1});if(i)for(const l in s)!Nc(l)&&o[l]==null&&delete s[l]},kt=Lv;function Ov(t){return Vv(t)}function Vv(t,e){const n=fa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:E=an,insertStaticContent:x}=t,k=(y,I,S,N=null,U=null,F=null,G=void 0,K=null,z=!!I.dynamicChildren)=>{if(y===I)return;y&&!$s(y,I)&&(N=L(y),Ue(y,U,F,!0),y=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:j,ref:re,shapeFlag:J}=I;switch(j){case Ea:D(y,I,S,N);break;case Vn:C(y,I,S,N);break;case fl:y==null&&M(I,S,N,G);break;case Je:R(y,I,S,N,U,F,G,K,z);break;default:J&1?ne(y,I,S,N,U,F,G,K,z):J&6?T(y,I,S,N,U,F,G,K,z):(J&64||J&128)&&j.process(y,I,S,N,U,F,G,K,z,Z)}re!=null&&U?si(re,y&&y.ref,F,I||y,!I):re==null&&y&&y.ref!=null&&si(y.ref,null,F,y,!0)},D=(y,I,S,N)=>{if(y==null)r(I.el=l(I.children),S,N);else{const U=I.el=y.el;I.children!==y.children&&h(U,I.children)}},C=(y,I,S,N)=>{y==null?r(I.el=c(I.children||""),S,N):I.el=y.el},M=(y,I,S,N)=>{[y.el,y.anchor]=x(y.children,I,S,N,y.el,y.anchor)},V=({el:y,anchor:I},S,N)=>{let U;for(;y&&y!==I;)U=g(y),r(y,S,N),y=U;r(I,S,N)},H=({el:y,anchor:I})=>{let S;for(;y&&y!==I;)S=g(y),s(y),y=S;s(I)},ne=(y,I,S,N,U,F,G,K,z)=>{if(I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),y==null)ge(I,S,N,U,F,G,K,z);else{const j=y.el&&y.el._isVueCE?y.el:null;try{j&&j._beginPatch(),v(y,I,U,F,G,K,z)}finally{j&&j._endPatch()}}},ge=(y,I,S,N,U,F,G,K)=>{let z,j;const{props:re,shapeFlag:J,transition:ee,dirs:oe}=y;if(z=y.el=o(y.type,F,re&&re.is,re),J&8?d(z,y.children):J&16&&_(y.children,z,null,N,U,dl(y,F),G,K),oe&&vr(y,null,N,"created"),A(z,y,y.scopeId,G,N),re){for(const fe in re)fe!=="value"&&!ei(fe)&&i(z,fe,null,re[fe],F,N);"value"in re&&i(z,"value",null,re.value,F),(j=re.onVnodeBeforeMount)&&tn(j,N,y)}oe&&vr(y,null,N,"beforeMount");const ae=Nv(U,ee);ae&&ee.beforeEnter(z),r(z,I,S),((j=re&&re.onVnodeMounted)||ae||oe)&&kt(()=>{try{j&&tn(j,N,y),ae&&ee.enter(z),oe&&vr(y,null,N,"mounted")}finally{}},U)},A=(y,I,S,N,U)=>{if(S&&E(y,S),N)for(let F=0;F<N.length;F++)E(y,N[F]);if(U){let F=U.subTree;if(I===F||qp(F.type)&&(F.ssContent===I||F.ssFallback===I)){const G=U.vnode;A(y,G,G.scopeId,G.slotScopeIds,U.parent)}}},_=(y,I,S,N,U,F,G,K,z=0)=>{for(let j=z;j<y.length;j++){const re=y[j]=K?En(y[j]):sn(y[j]);k(null,re,I,S,N,U,F,G,K)}},v=(y,I,S,N,U,F,G)=>{const K=I.el=y.el;let{patchFlag:z,dynamicChildren:j,dirs:re}=I;z|=y.patchFlag&16;const J=y.props||ke,ee=I.props||ke;let oe;if(S&&Er(S,!1),(oe=ee.onVnodeBeforeUpdate)&&tn(oe,S,I,y),re&&vr(I,y,S,"beforeUpdate"),S&&Er(S,!0),(J.innerHTML&&ee.innerHTML==null||J.textContent&&ee.textContent==null)&&d(K,""),j?w(y.dynamicChildren,j,K,S,N,dl(I,U),F):G||ye(y,I,K,null,S,N,dl(I,U),F,!1),z>0){if(z&16)b(K,J,ee,S,U);else if(z&2&&J.class!==ee.class&&i(K,"class",null,ee.class,U),z&4&&i(K,"style",J.style,ee.style,U),z&8){const ae=I.dynamicProps;for(let fe=0;fe<ae.length;fe++){const Re=ae[fe],je=J[Re],Ge=ee[Re];(Ge!==je||Re==="value")&&i(K,Re,je,Ge,U,S)}}z&1&&y.children!==I.children&&d(K,I.children)}else!G&&j==null&&b(K,J,ee,S,U);((oe=ee.onVnodeUpdated)||re)&&kt(()=>{oe&&tn(oe,S,I,y),re&&vr(I,y,S,"updated")},N)},w=(y,I,S,N,U,F,G)=>{for(let K=0;K<I.length;K++){const z=y[K],j=I[K],re=z.el&&(z.type===Je||!$s(z,j)||z.shapeFlag&198)?p(z.el):S;k(z,j,re,null,N,U,F,G,!0)}},b=(y,I,S,N,U)=>{if(I!==S){if(I!==ke)for(const F in I)!ei(F)&&!(F in S)&&i(y,F,I[F],null,U,N);for(const F in S){if(ei(F))continue;const G=S[F],K=I[F];G!==K&&F!=="value"&&i(y,F,K,G,U,N)}"value"in S&&i(y,"value",I.value,S.value,U)}},R=(y,I,S,N,U,F,G,K,z)=>{const j=I.el=y?y.el:l(""),re=I.anchor=y?y.anchor:l("");let{patchFlag:J,dynamicChildren:ee,slotScopeIds:oe}=I;oe&&(K=K?K.concat(oe):oe),y==null?(r(j,S,N),r(re,S,N),_(I.children||[],S,re,U,F,G,K,z)):J>0&&J&64&&ee&&y.dynamicChildren&&y.dynamicChildren.length===ee.length?(w(y.dynamicChildren,ee,S,U,F,G,K),(I.key!=null||U&&I===U.subTree)&&Up(y,I,!0)):ye(y,I,S,re,U,F,G,K,z)},T=(y,I,S,N,U,F,G,K,z)=>{I.slotScopeIds=K,y==null?I.shapeFlag&512?U.ctx.activate(I,S,N,G,z):rt(I,S,N,U,F,G,z):xt(y,I,z)},rt=(y,I,S,N,U,F,G)=>{const K=y.component=Hv(y,N,U);if(Tp(y)&&(K.ctx.renderer=Z),zv(K,!1,G),K.asyncDep){if(U&&U.registerDep(K,Oe,G),!y.el){const z=K.subTree=ze(Vn);C(null,z,I,S),y.placeholder=z.el}}else Oe(K,y,I,S,U,F,G)},xt=(y,I,S)=>{const N=I.component=y.component;if(bv(y,I,S))if(N.asyncDep&&!N.asyncResolved){ce(N,I,S);return}else N.next=I,N.update();else I.el=y.el,N.vnode=I},Oe=(y,I,S,N,U,F,G)=>{const K=()=>{if(y.isMounted){let{next:J,bu:ee,u:oe,parent:ae,vnode:fe}=y;{const ft=Bp(y);if(ft){J&&(J.el=fe.el,ce(y,J,G)),ft.asyncDep.then(()=>{kt(()=>{y.isUnmounted||j()},U)});return}}let Re=J,je;Er(y,!1),J?(J.el=fe.el,ce(y,J,G)):J=fe,ee&&yo(ee),(je=J.props&&J.props.onVnodeBeforeUpdate)&&tn(je,ae,J,fe),Er(y,!0);const Ge=Lh(y),$t=y.subTree;y.subTree=Ge,k($t,Ge,p($t.el),L($t),y,U,F),J.el=Ge.el,Re===null&&Rv(y,Ge.el),oe&&kt(oe,U),(je=J.props&&J.props.onVnodeUpdated)&&kt(()=>tn(je,ae,J,fe),U)}else{let J;const{el:ee,props:oe}=I,{bm:ae,m:fe,parent:Re,root:je,type:Ge}=y,$t=ns(I);Er(y,!1),ae&&yo(ae),!$t&&(J=oe&&oe.onVnodeBeforeMount)&&tn(J,Re,I),Er(y,!0);{je.ce&&je.ce._hasShadowRoot()&&je.ce._injectChildStyle(Ge,y.parent?y.parent.type:void 0);const ft=y.subTree=Lh(y);k(null,ft,S,N,y,U,F),I.el=ft.el}if(fe&&kt(fe,U),!$t&&(J=oe&&oe.onVnodeMounted)){const ft=I;kt(()=>tn(J,Re,ft),U)}(I.shapeFlag&256||Re&&ns(Re.vnode)&&Re.vnode.shapeFlag&256)&&y.a&&kt(y.a,U),y.isMounted=!0,I=S=N=null}};y.scope.on();const z=y.effect=new Jf(K);y.scope.off();const j=y.update=z.run.bind(z),re=y.job=z.runIfDirty.bind(z);re.i=y,re.id=y.uid,z.scheduler=()=>Dc(re),Er(y,!0),j()},ce=(y,I,S)=>{I.component=y;const N=y.vnode.props;y.vnode=I,y.next=null,Pv(y,I.props,N,S),kv(y,I.children,S),Dn(),Ch(y),kn()},ye=(y,I,S,N,U,F,G,K,z=!1)=>{const j=y&&y.children,re=y?y.shapeFlag:0,J=I.children,{patchFlag:ee,shapeFlag:oe}=I;if(ee>0){if(ee&128){Kt(j,J,S,N,U,F,G,K,z);return}else if(ee&256){Nt(j,J,S,N,U,F,G,K,z);return}}oe&8?(re&16&&Dt(j,U,F),J!==j&&d(S,J)):re&16?oe&16?Kt(j,J,S,N,U,F,G,K,z):Dt(j,U,F,!0):(re&8&&d(S,""),oe&16&&_(J,S,N,U,F,G,K,z))},Nt=(y,I,S,N,U,F,G,K,z)=>{y=y||Zr,I=I||Zr;const j=y.length,re=I.length,J=Math.min(j,re);let ee;for(ee=0;ee<J;ee++){const oe=I[ee]=z?En(I[ee]):sn(I[ee]);k(y[ee],oe,S,null,U,F,G,K,z)}j>re?Dt(y,U,F,!0,!1,J):_(I,S,N,U,F,G,K,z,J)},Kt=(y,I,S,N,U,F,G,K,z)=>{let j=0;const re=I.length;let J=y.length-1,ee=re-1;for(;j<=J&&j<=ee;){const oe=y[j],ae=I[j]=z?En(I[j]):sn(I[j]);if($s(oe,ae))k(oe,ae,S,null,U,F,G,K,z);else break;j++}for(;j<=J&&j<=ee;){const oe=y[J],ae=I[ee]=z?En(I[ee]):sn(I[ee]);if($s(oe,ae))k(oe,ae,S,null,U,F,G,K,z);else break;J--,ee--}if(j>J){if(j<=ee){const oe=ee+1,ae=oe<re?I[oe].el:N;for(;j<=ee;)k(null,I[j]=z?En(I[j]):sn(I[j]),S,ae,U,F,G,K,z),j++}}else if(j>ee)for(;j<=J;)Ue(y[j],U,F,!0),j++;else{const oe=j,ae=j,fe=new Map;for(j=ae;j<=ee;j++){const st=I[j]=z?En(I[j]):sn(I[j]);st.key!=null&&fe.set(st.key,j)}let Re,je=0;const Ge=ee-ae+1;let $t=!1,ft=0;const qn=new Array(Ge);for(j=0;j<Ge;j++)qn[j]=0;for(j=oe;j<=J;j++){const st=y[j];if(je>=Ge){Ue(st,U,F,!0);continue}let Ht;if(st.key!=null)Ht=fe.get(st.key);else for(Re=ae;Re<=ee;Re++)if(qn[Re-ae]===0&&$s(st,I[Re])){Ht=Re;break}Ht===void 0?Ue(st,U,F,!0):(qn[Ht-ae]=j+1,Ht>=ft?ft=Ht:$t=!0,k(st,I[Ht],S,null,U,F,G,K,z),je++)}const Cs=$t?Mv(qn):Zr;for(Re=Cs.length-1,j=Ge-1;j>=0;j--){const st=ae+j,Ht=I[st],Wi=I[st+1],Br=st+1<re?Wi.el||jp(Wi):N;qn[j]===0?k(null,Ht,S,Br,U,F,G,K,z):$t&&(Re<0||j!==Cs[Re]?qt(Ht,S,Br,2):Re--)}}},qt=(y,I,S,N,U=null)=>{const{el:F,type:G,transition:K,children:z,shapeFlag:j}=y;if(j&6){qt(y.component.subTree,I,S,N);return}if(j&128){y.suspense.move(I,S,N);return}if(j&64){G.move(y,I,S,Z);return}if(G===Je){r(F,I,S);for(let J=0;J<z.length;J++)qt(z[J],I,S,N);r(y.anchor,I,S);return}if(G===fl){V(y,I,S);return}if(N!==2&&j&1&&K)if(N===0)K.beforeEnter(F),r(F,I,S),kt(()=>K.enter(F),U);else{const{leave:J,delayLeave:ee,afterLeave:oe}=K,ae=()=>{y.ctx.isUnmounted?s(F):r(F,I,S)},fe=()=>{F._isLeaving&&F[Yy](!0),J(F,()=>{ae(),oe&&oe()})};ee?ee(F,ae,fe):fe()}else r(F,I,S)},Ue=(y,I,S,N=!1,U=!1)=>{const{type:F,props:G,ref:K,children:z,dynamicChildren:j,shapeFlag:re,patchFlag:J,dirs:ee,cacheIndex:oe,memo:ae}=y;if(J===-2&&(U=!1),K!=null&&(Dn(),si(K,null,S,y,!0),kn()),oe!=null&&(I.renderCache[oe]=void 0),re&256){I.ctx.deactivate(y);return}const fe=re&1&&ee,Re=!ns(y);let je;if(Re&&(je=G&&G.onVnodeBeforeUnmount)&&tn(je,I,y),re&6)Mt(y.component,S,N);else{if(re&128){y.suspense.unmount(S,N);return}fe&&vr(y,null,I,"beforeUnmount"),re&64?y.type.remove(y,I,S,Z,N):j&&!j.hasOnce&&(F!==Je||J>0&&J&64)?Dt(j,I,S,!1,!0):(F===Je&&J&384||!U&&re&16)&&Dt(z,I,S),N&&Be(y)}const Ge=ae!=null&&oe==null;(Re&&(je=G&&G.onVnodeUnmounted)||fe||Ge)&&kt(()=>{je&&tn(je,I,y),fe&&vr(y,null,I,"unmounted"),Ge&&(y.el=null)},S)},Be=y=>{const{type:I,el:S,anchor:N,transition:U}=y;if(I===Je){jn(S,N);return}if(I===fl){H(y);return}const F=()=>{s(S),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(y.shapeFlag&1&&U&&!U.persisted){const{leave:G,delayLeave:K}=U,z=()=>G(S,F);K?K(y.el,F,z):z()}else F()},jn=(y,I)=>{let S;for(;y!==I;)S=g(y),s(y),y=S;s(I)},Mt=(y,I,S)=>{const{bum:N,scope:U,job:F,subTree:G,um:K,m:z,a:j}=y;Bh(z),Bh(j),N&&yo(N),U.stop(),F&&(F.flags|=8,Ue(G,y,I,S)),K&&kt(K,I),kt(()=>{y.isUnmounted=!0},I)},Dt=(y,I,S,N=!1,U=!1,F=0)=>{for(let G=F;G<y.length;G++)Ue(y[G],I,S,N,U)},L=y=>{if(y.shapeFlag&6)return L(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const I=g(y.anchor||y.el),S=I&&I[Qy];return S?g(S):I};let Y=!1;const Q=(y,I,S)=>{let N;y==null?I._vnode&&(Ue(I._vnode,null,null,!0),N=I._vnode.component):k(I._vnode||null,y,I,null,null,null,S),I._vnode=y,Y||(Y=!0,Ch(N),mp(),Y=!1)},Z={p:k,um:Ue,m:qt,r:Be,mt:rt,mc:_,pc:ye,pbc:w,n:L,o:t};return{render:Q,hydrate:void 0,createApp:vv(Q)}}function dl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Nv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Up(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=En(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Up(o,l)),l.type===Ea&&(l.patchFlag===-1&&(l=s[i]=En(l)),l.el=o.el),l.type===Vn&&!l.el&&(l.el=o.el)}}function Mv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Bp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bp(e)}function Bh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function jp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?jp(e.subTree):null}const qp=t=>t.__isSuspense;function Lv(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):Hy(t)}const Je=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),Vn=Symbol.for("v-cmt"),fl=Symbol.for("v-stc"),oi=[];let Ft=null;function me(t=!1){oi.push(Ft=t?null:[])}function Fv(){oi.pop(),Ft=oi[oi.length-1]||null}let _i=1;function Bo(t,e=!1){_i+=t,t<0&&Ft&&e&&(Ft.hasOnce=!0)}function $p(t){return t.dynamicChildren=_i>0?Ft||Zr:null,Fv(),_i>0&&Ft&&Ft.push(t),t}function Ie(t,e,n,r,s,i){return $p(B(t,e,n,r,s,i,!0))}function Pr(t,e,n,r,s){return $p(ze(t,e,n,r,s,!0))}function yi(t){return t?t.__v_isVNode===!0:!1}function $s(t,e){return t.type===e.type&&t.key===e.key}const Hp=({key:t})=>t??null,Eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||We(t)||pe(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,r=0,s=null,i=t===Je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hp(e),ref:e&&Eo(e),scopeId:_p,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(Lc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),_i>0&&!o&&Ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ft.push(c),c}const ze=Uv;function Uv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===uv)&&(t=Vn),yi(t)){const l=ls(t,e,!0);return n&&Lc(l,n),_i>0&&!i&&Ft&&(l.shapeFlag&6?Ft[Ft.indexOf(t)]=l:Ft.push(l)),l.patchFlag=-2,l}if(Jv(t)&&(t=t.__vccOpts),e){e=Bv(e);let{class:l,style:c}=e;l&&!Ye(l)&&(e.class=hr(l)),xe(c)&&(ma(c)&&!ie(c)&&(c=ut({},c)),e.style=Ic(c))}const o=Ye(t)?1:qp(t)?128:Jy(t)?64:xe(t)?4:pe(t)?2:0;return B(t,e,n,r,s,o,i,!0)}function Bv(t){return t?ma(t)||Op(t)?ut({},t):t:null}function ls(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?jv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Hp(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(Eo(e)):[i,Eo(e)]:Eo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ls(t.ssContent),ssFallback:t.ssFallback&&ls(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&kc(d,c.clone(d)),d}function Le(t=" ",e=0){return ze(Ea,null,t,e)}function wn(t="",e=!1){return e?(me(),Pr(Vn,null,t)):ze(Vn,null,t)}function sn(t){return t==null||typeof t=="boolean"?ze(Vn):ie(t)?ze(Je,null,t.slice()):yi(t)?En(t):ze(Ea,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ls(t)}function Lc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Lc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Op(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Le(e)]):n=8);t.children=e,t.shapeFlag|=n}function jv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=hr([e.class,r.class]));else if(s==="style")e.style=Ic([e.style,r.style]);else if(aa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!la(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){dn(t,e,7,[n,r])}const qv=Pp();let $v=0;function Hv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qv,i={uid:$v++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(r,s),emitsOptions:Cp(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Tv.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const zp=()=>Tt||lt;let jo,Bl;{const t=fa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};jo=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),Bl=e("__VUE_SSR_SETTERS__",n=>vi=n)}const Vi=t=>{const e=Tt;return jo(t),t.scope.on(),()=>{t.scope.off(),jo(e)}},jh=()=>{Tt&&Tt.scope.off(),jo(null)};function Wp(t){return t.vnode.shapeFlag&4}let vi=!1;function zv(t,e=!1,n=!1){e&&Bl(e);const{props:r,children:s}=t.vnode,i=Wp(t);Sv(t,r,i,e),Dv(t,s,n||e);const o=i?Wv(t,e):void 0;return e&&Bl(!1),o}function Wv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dv);const{setup:r}=n;if(r){Dn();const s=t.setupContext=r.length>1?Gv(t):null,i=Vi(t),o=Oi(r,t,0,[t.props,s]),l=Bf(o);if(kn(),i(),(l||t.sp)&&!ns(t)&&Ep(t),l){if(o.then(jh,jh),e)return o.then(c=>{qh(t,c)}).catch(c=>{ga(c,t,0)});t.asyncDep=o}else qh(t,o)}else Kp(t)}function qh(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=dp(e)),Kp(t)}function Kp(t,e,n){const r=t.type;t.render||(t.render=r.render||an);{const s=Vi(t);Dn();try{fv(t)}finally{kn(),s()}}}const Kv={get(t,e){return vt(t,"get",""),t[e]}};function Gv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Kv),slots:t.slots,emit:t.emit,expose:e}}function Ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dp(xc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ii)return ii[n](t)},has(e,n){return n in e||n in ii}})):t.proxy}function Qv(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function Jv(t){return pe(t)&&"__vccOpts"in t}const Pt=(t,e)=>Uy(t,e,vi);function Gp(t,e,n){try{Bo(-1);const r=arguments.length;return r===2?xe(e)&&!ie(e)?yi(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yi(n)&&(n=[n]),ze(t,e,n))}finally{Bo(1)}}const Yv="3.5.31";/**
* @vue/runtime-dom v3.5.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jl;const $h=typeof window<"u"&&window.trustedTypes;if($h)try{jl=$h.createPolicy("vue",{createHTML:t=>t})}catch{}const Qp=jl?t=>jl.createHTML(t):t=>t,Xv="http://www.w3.org/2000/svg",Zv="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Hh=vn&&vn.createElement("template"),eE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?vn.createElementNS(Xv,t):e==="mathml"?vn.createElementNS(Zv,t):n?vn.createElement(t,{is:n}):vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hh.innerHTML=Qp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Hh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tE=Symbol("_vtc");function nE(t,e,n){const r=t[tE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qo=Symbol("_vod"),Jp=Symbol("_vsh"),rE={name:"show",beforeMount(t,{value:e},{transition:n}){t[qo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Hs(t,!0),r.enter(t)):r.leave(t,()=>{Hs(t,!1)}):Hs(t,e))},beforeUnmount(t,{value:e}){Hs(t,e)}};function Hs(t,e){t.style.display=e?t[qo]:"none",t[Jp]=!e}const sE=Symbol(""),iE=/(?:^|;)\s*display\s*:/;function oE(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&To(r,l,"")}else for(const o in e)n[o]==null&&To(r,o,"");for(const o in n)o==="display"&&(i=!0),To(r,o,n[o])}else if(s){if(e!==n){const o=r[sE];o&&(n+=";"+o),r.cssText=n,i=iE.test(n)}}else e&&t.removeAttribute("style");qo in t&&(t[qo]=i?r.display:"",t[Jp]&&(r.display="none"))}const zh=/\s*!important$/;function To(t,e,n){if(ie(n))n.forEach(r=>To(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=aE(t,e);zh.test(n)?t.setProperty(Nr(r),n.replace(zh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],pl={};function aE(t,e){const n=pl[e];if(n)return n;let r=Ct(e);if(r!=="filter"&&r in t)return pl[e]=r;r=ha(r);for(let s=0;s<Wh.length;s++){const i=Wh[s]+r;if(i in t)return pl[e]=i}return e}const Kh="http://www.w3.org/1999/xlink";function Gh(t,e,n,r,s,i=uy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kh,e.slice(6,e.length)):t.setAttributeNS(Kh,e,n):n==null||i&&!Hf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":jt(n)?String(n):n)}function Qh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Hf(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Yn(t,e,n,r){t.addEventListener(e,n,r)}function lE(t,e,n,r){t.removeEventListener(e,n,r)}const Jh=Symbol("_vei");function cE(t,e,n,r,s=null){const i=t[Jh]||(t[Jh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=uE(e);if(r){const h=i[e]=fE(r,s);Yn(t,l,h,c)}else o&&(lE(t,l,o,c),i[e]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function uE(t){let e;if(Yh.test(t)){e={};let r;for(;r=t.match(Yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nr(t.slice(2)),e]}let ml=0;const hE=Promise.resolve(),dE=()=>ml||(hE.then(()=>ml=0),ml=Date.now());function fE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dn(pE(r,n.value),e,5,[r])};return n.value=t,n.attached=dE(),n}function pE(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?nE(t,r,o):e==="style"?oE(t,n,r):aa(e)?la(e)||cE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gE(t,e,r,o))?(Qh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gh(t,e,r,o,i,e!=="value")):t._isVueCE&&(_E(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ye(r)))?Qh(t,Ct(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gh(t,e,r,o))};function gE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xh(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xh(e)&&Ye(n)?!1:e in t}function _E(t,e){const n=t._def.props;if(!n)return!1;const r=Ct(e);return Array.isArray(n)?n.some(s=>Ct(s)===r):Object.keys(n).some(s=>Ct(s)===r)}const cs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>yo(e,n):e};function yE(t){t.target.composing=!0}function Zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cn=Symbol("_assign");function ed(t,e,n){return e&&(t=t.trim()),n&&(t=da(t)),t}const td={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Cn]=cs(s);const i=r||s.props&&s.props.type==="number";Yn(t,e?"change":"input",o=>{o.target.composing||t[Cn](ed(t.value,n,i))}),(n||i)&&Yn(t,"change",()=>{t.value=ed(t.value,n,i)}),e||(Yn(t,"compositionstart",yE),Yn(t,"compositionend",Zh),Yn(t,"change",Zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Cn]=cs(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?da(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},vE={deep:!0,created(t,e,n){t[Cn]=cs(n),Yn(t,"change",()=>{const r=t._modelValue,s=Ei(t),i=t.checked,o=t[Cn];if(ie(r)){const l=wc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(Ts(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Yp(t,i))})},mounted:nd,beforeUpdate(t,e,n){t[Cn]=cs(n),nd(t,e,n)}};function nd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ie(e))s=wc(e,r.props.value)>-1;else if(Ts(e))s=e.has(r.props.value);else{if(e===n)return;s=Is(e,Yp(t,!0))}t.checked!==s&&(t.checked=s)}const tC={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ts(e);Yn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?da(Ei(o)):Ei(o));t[Cn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,_a(()=>{t._assigning=!1})}),t[Cn]=cs(r)},mounted(t,{value:e}){rd(t,e)},beforeUpdate(t,e,n){t[Cn]=cs(n)},updated(t,{value:e}){t._assigning||rd(t,e)}};function rd(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!Ts(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ei(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=wc(e,l)>-1}else o.selected=e.has(l);else if(Is(Ei(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ei(t){return"_value"in t?t._value:t.value}function Yp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const EE=["ctrl","shift","alt","meta"],TE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>EE.some(n=>t[`${n}Key`]&&!e.includes(n))},IE=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=TE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},wE=ut({patchProp:mE},eE);let sd;function AE(){return sd||(sd=Ov(wE))}const bE=(...t)=>{const e=AE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=SE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,RE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function RE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function SE(t){return Ye(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Xp;const Ia=t=>Xp=t,Zp=Symbol();function ql(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ai;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ai||(ai={}));function PE(){const t=Gf(!0),e=t.run(()=>Ze({}));let n=[],r=[];const s=xc({install(i){Ia(s),s._a=i,i.provide(Zp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const em=()=>{};function id(t,e,n,r=em){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qf()&&dy(s),s}function Wr(t,...e){t.slice().forEach(n=>{n(...e)})}const CE=t=>t(),od=Symbol(),gl=Symbol();function $l(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ql(s)&&ql(r)&&t.hasOwnProperty(n)&&!We(r)&&!Pn(r)?t[n]=$l(s,r):t[n]=r}return t}const xE=Symbol();function DE(t){return!ql(t)||!t.hasOwnProperty(xE)}const{assign:Gn}=Object;function kE(t){return!!(We(t)&&t.effect)}function OE(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=Ny(n.state.value[t]);return Gn(d,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=xc(Pt(()=>{Ia(n);const E=n._s.get(t);return o[g].call(E,E)})),p),{}))}return c=tm(t,h,e,n,r,!0),c}function tm(t,e,n={},r,s,i){let o;const l=Gn({actions:{}},n),c={deep:!0};let h,d,p=[],g=[],E;const x=r.state.value[t];!i&&!x&&(r.state.value[t]={});let k;function D(_){let v;h=d=!1,typeof _=="function"?(_(r.state.value[t]),v={type:ai.patchFunction,storeId:t,events:E}):($l(r.state.value[t],_),v={type:ai.patchObject,payload:_,storeId:t,events:E});const w=k=Symbol();_a().then(()=>{k===w&&(h=!0)}),d=!0,Wr(p,v,r.state.value[t])}const C=i?function(){const{state:v}=n,w=v?v():{};this.$patch(b=>{Gn(b,w)})}:em;function M(){o.stop(),p=[],g=[],r._s.delete(t)}const V=(_,v="")=>{if(od in _)return _[gl]=v,_;const w=function(){Ia(r);const b=Array.from(arguments),R=[],T=[];function rt(ce){R.push(ce)}function xt(ce){T.push(ce)}Wr(g,{args:b,name:w[gl],store:ne,after:rt,onError:xt});let Oe;try{Oe=_.apply(this&&this.$id===t?this:ne,b)}catch(ce){throw Wr(T,ce),ce}return Oe instanceof Promise?Oe.then(ce=>(Wr(R,ce),ce)).catch(ce=>(Wr(T,ce),Promise.reject(ce))):(Wr(R,Oe),Oe)};return w[od]=!0,w[gl]=v,w},H={_p:r,$id:t,$onAction:id.bind(null,g),$patch:D,$reset:C,$subscribe(_,v={}){const w=id(p,_,v.detached,()=>b()),b=o.run(()=>ri(()=>r.state.value[t],R=>{(v.flush==="sync"?d:h)&&_({storeId:t,type:ai.direct,events:E},R)},Gn({},c,v)));return w},$dispose:M},ne=ki(H);r._s.set(t,ne);const A=(r._a&&r._a.runWithContext||CE)(()=>r._e.run(()=>(o=Gf()).run(()=>e({action:V}))));for(const _ in A){const v=A[_];if(We(v)&&!kE(v)||Pn(v))i||(x&&DE(v)&&(We(v)?v.value=x[_]:$l(v,x[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const w=V(v,_);A[_]=w,l.actions[_]=v}}return Gn(ne,A),Gn(Ae(ne),A),Object.defineProperty(ne,"$state",{get:()=>r.state.value[t],set:_=>{D(v=>{Gn(v,_)})}}),r._p.forEach(_=>{Gn(ne,o.run(()=>_({store:ne,app:r._a,pinia:r,options:l})))}),x&&i&&n.hydrate&&n.hydrate(ne.$state,x),h=!0,d=!0,ne}/*! #__NO_SIDE_EFFECTS__ */function nm(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const h=zy();return l=l||(h?zt(Zp,null):null),l&&Ia(l),l=Xp,l._s.has(r)||(i?tm(r,e,s,l):OE(r,s,l)),l._s.get(r)}return o.$id=r,o}var ad={};/**
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
 */const rm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},VE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,E=h&63;c||(E=64,o||(g=64)),r.push(n[d],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new NE;const g=i<<2|l>>4;if(r.push(g),h!==64){const E=l<<4&240|h>>2;if(r.push(E),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ME=function(t){const e=rm(t);return sm.encodeByteArray(e,!0)},$o=function(t){return ME(t).replace(/\./g,"")},im=function(t){try{return sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FE=()=>LE().__FIREBASE_DEFAULTS__,UE=()=>{if(typeof process>"u"||typeof ad>"u")return;const t=ad.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&im(t[1]);return e&&JSON.parse(e)},wa=()=>{try{return FE()||UE()||BE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},om=t=>{var e,n;return(n=(e=wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jE=t=>{const e=om(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},am=()=>{var t;return(t=wa())===null||t===void 0?void 0:t.config},lm=t=>{var e;return(e=wa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class qE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$o(JSON.stringify(n)),$o(JSON.stringify(o)),""].join(".")}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function zE(){var t;const e=(t=wa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QE(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JE(){return!zE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YE(){try{return typeof indexedDB=="object"}catch{return!1}}function XE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ZE="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZE,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?eT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,l,r)}}function eT(t,e){return t.replace(tT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tT=/\{\$([^}]+)}/g;function nT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ld(i)&&ld(o)){if(!Ho(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ld(t){return t!==null&&typeof t=="object"}/**
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
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rT(t,e){const n=new sT(t,e);return n.subscribe.bind(n)}class sT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_l),s.error===void 0&&(s.error=_l),s.complete===void 0&&(s.complete=_l);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _l(){}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ir="[DEFAULT]";/**
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
 */class oT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lT(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aT(t){return t===Ir?void 0:t}function lT(t){return t.instantiationMode==="EAGER"}/**
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
 */class cT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const uT={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},hT=Ee.INFO,dT={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},fT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=dT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=hT,this._logHandler=fT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const pT=(t,e)=>e.some(n=>t instanceof n);let cd,ud;function mT(){return cd||(cd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gT(){return ud||(ud=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cm=new WeakMap,Hl=new WeakMap,um=new WeakMap,yl=new WeakMap,Uc=new WeakMap;function _T(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cm.set(n,t)}).catch(()=>{}),Uc.set(e,t),e}function yT(t){if(Hl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hl.set(t,e)}let zl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||um.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vT(t){zl=t(zl)}function ET(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vl(this),e,...n);return um.set(r,e.sort?e.sort():[e]),rr(r)}:gT().includes(t)?function(...e){return t.apply(vl(this),e),rr(cm.get(this))}:function(...e){return rr(t.apply(vl(this),e))}}function TT(t){return typeof t=="function"?ET(t):(t instanceof IDBTransaction&&yT(t),pT(t,mT())?new Proxy(t,zl):t)}function rr(t){if(t instanceof IDBRequest)return _T(t);if(yl.has(t))return yl.get(t);const e=TT(t);return e!==t&&(yl.set(t,e),Uc.set(e,t)),e}const vl=t=>Uc.get(t);function IT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=rr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(rr(o.result),c.oldVersion,c.newVersion,rr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const wT=["get","getKey","getAll","getAllKeys","count"],AT=["put","add","delete","clear"],El=new Map;function hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(El.get(e))return El.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=AT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return El.set(e,i),i}vT(t=>({...t,get:(e,n,r)=>hd(e,n)||t.get(e,n,r),has:(e,n)=>!!hd(e,n)||t.has(e,n)}));/**
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
 */class bT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wl="@firebase/app",dd="0.10.13";/**
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
 */const Nn=new Fc("@firebase/app"),ST="@firebase/app-compat",PT="@firebase/analytics-compat",CT="@firebase/analytics",xT="@firebase/app-check-compat",DT="@firebase/app-check",kT="@firebase/auth",OT="@firebase/auth-compat",VT="@firebase/database",NT="@firebase/data-connect",MT="@firebase/database-compat",LT="@firebase/functions",FT="@firebase/functions-compat",UT="@firebase/installations",BT="@firebase/installations-compat",jT="@firebase/messaging",qT="@firebase/messaging-compat",$T="@firebase/performance",HT="@firebase/performance-compat",zT="@firebase/remote-config",WT="@firebase/remote-config-compat",KT="@firebase/storage",GT="@firebase/storage-compat",QT="@firebase/firestore",JT="@firebase/vertexai-preview",YT="@firebase/firestore-compat",XT="firebase",ZT="10.14.1";/**
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
 */const Kl="[DEFAULT]",eI={[Wl]:"fire-core",[ST]:"fire-core-compat",[CT]:"fire-analytics",[PT]:"fire-analytics-compat",[DT]:"fire-app-check",[xT]:"fire-app-check-compat",[kT]:"fire-auth",[OT]:"fire-auth-compat",[VT]:"fire-rtdb",[NT]:"fire-data-connect",[MT]:"fire-rtdb-compat",[LT]:"fire-fn",[FT]:"fire-fn-compat",[UT]:"fire-iid",[BT]:"fire-iid-compat",[jT]:"fire-fcm",[qT]:"fire-fcm-compat",[$T]:"fire-perf",[HT]:"fire-perf-compat",[zT]:"fire-rc",[WT]:"fire-rc-compat",[KT]:"fire-gcs",[GT]:"fire-gcs-compat",[QT]:"fire-fst",[YT]:"fire-fst-compat",[JT]:"fire-vertex","fire-js":"fire-js",[XT]:"fire-js-all"};/**
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
 */const zo=new Map,tI=new Map,Gl=new Map;function fd(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(Gl.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Gl.set(e,t);for(const n of zo.values())fd(n,t);for(const n of tI.values())fd(n,t);return!0}function Bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function An(t){return t.settings!==void 0}/**
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
 */const nI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new Ni("app","Firebase",nI);/**
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
 */class rI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=ZT;function hm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sr.create("bad-app-name",{appName:String(s)});if(n||(n=am()),!n)throw sr.create("no-options");const i=zo.get(s);if(i){if(Ho(n,i.options)&&Ho(r,i.config))return i;throw sr.create("duplicate-app",{appName:s})}const o=new cT(s);for(const c of Gl.values())o.addComponent(c);const l=new rI(n,r,o);return zo.set(s,l),l}function dm(t=Kl){const e=zo.get(t);if(!e&&t===Kl&&am())return hm();if(!e)throw sr.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let s=(r=eI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(l.join(" "));return}us(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sI="firebase-heartbeat-database",iI=1,Ti="firebase-heartbeat-store";let Tl=null;function fm(){return Tl||(Tl=IT(sI,iI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Tl}async function oI(t){try{const n=(await fm()).transaction(Ti),r=await n.objectStore(Ti).get(pm(t));return await n.done,r}catch(e){if(e instanceof Bn)Nn.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function pd(t,e){try{const r=(await fm()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,pm(t)),await r.done}catch(n){if(n instanceof Bn)Nn.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function pm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aI=1024,lI=30*24*60*60*1e3;class cI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=md();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=lI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=md(),{heartbeatsToSend:r,unsentEntries:s}=uI(this._heartbeatsCache.heartbeats),i=$o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Nn.warn(n),""}}}function md(){return new Date().toISOString().substring(0,10)}function uI(t,e=aI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YE()?XE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gd(t){return $o(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dI(t){us(new xr("platform-logger",e=>new bT(e),"PRIVATE")),us(new xr("heartbeat",e=>new cI(e),"PRIVATE")),ir(Wl,dd,t),ir(Wl,dd,"esm2017"),ir("fire-js","")}dI("");var fI="firebase",pI="10.14.1";/**
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
 */ir(fI,pI,"app");var _d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cr,mm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function v(){}v.prototype=_.prototype,A.D=_.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(w,b,R){for(var T=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)T[rt-2]=arguments[rt];return _.prototype[b].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,v){v||(v=0);var w=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)w[b]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(b=0;16>b;++b)w[b]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=A.g[0],v=A.g[1],b=A.g[2];var R=A.g[3],T=_+(R^v&(b^R))+w[0]+3614090360&4294967295;_=v+(T<<7&4294967295|T>>>25),T=R+(b^_&(v^b))+w[1]+3905402710&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(v^R&(_^v))+w[2]+606105819&4294967295,b=R+(T<<17&4294967295|T>>>15),T=v+(_^b&(R^_))+w[3]+3250441966&4294967295,v=b+(T<<22&4294967295|T>>>10),T=_+(R^v&(b^R))+w[4]+4118548399&4294967295,_=v+(T<<7&4294967295|T>>>25),T=R+(b^_&(v^b))+w[5]+1200080426&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(v^R&(_^v))+w[6]+2821735955&4294967295,b=R+(T<<17&4294967295|T>>>15),T=v+(_^b&(R^_))+w[7]+4249261313&4294967295,v=b+(T<<22&4294967295|T>>>10),T=_+(R^v&(b^R))+w[8]+1770035416&4294967295,_=v+(T<<7&4294967295|T>>>25),T=R+(b^_&(v^b))+w[9]+2336552879&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(v^R&(_^v))+w[10]+4294925233&4294967295,b=R+(T<<17&4294967295|T>>>15),T=v+(_^b&(R^_))+w[11]+2304563134&4294967295,v=b+(T<<22&4294967295|T>>>10),T=_+(R^v&(b^R))+w[12]+1804603682&4294967295,_=v+(T<<7&4294967295|T>>>25),T=R+(b^_&(v^b))+w[13]+4254626195&4294967295,R=_+(T<<12&4294967295|T>>>20),T=b+(v^R&(_^v))+w[14]+2792965006&4294967295,b=R+(T<<17&4294967295|T>>>15),T=v+(_^b&(R^_))+w[15]+1236535329&4294967295,v=b+(T<<22&4294967295|T>>>10),T=_+(b^R&(v^b))+w[1]+4129170786&4294967295,_=v+(T<<5&4294967295|T>>>27),T=R+(v^b&(_^v))+w[6]+3225465664&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^v&(R^_))+w[11]+643717713&4294967295,b=R+(T<<14&4294967295|T>>>18),T=v+(R^_&(b^R))+w[0]+3921069994&4294967295,v=b+(T<<20&4294967295|T>>>12),T=_+(b^R&(v^b))+w[5]+3593408605&4294967295,_=v+(T<<5&4294967295|T>>>27),T=R+(v^b&(_^v))+w[10]+38016083&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^v&(R^_))+w[15]+3634488961&4294967295,b=R+(T<<14&4294967295|T>>>18),T=v+(R^_&(b^R))+w[4]+3889429448&4294967295,v=b+(T<<20&4294967295|T>>>12),T=_+(b^R&(v^b))+w[9]+568446438&4294967295,_=v+(T<<5&4294967295|T>>>27),T=R+(v^b&(_^v))+w[14]+3275163606&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^v&(R^_))+w[3]+4107603335&4294967295,b=R+(T<<14&4294967295|T>>>18),T=v+(R^_&(b^R))+w[8]+1163531501&4294967295,v=b+(T<<20&4294967295|T>>>12),T=_+(b^R&(v^b))+w[13]+2850285829&4294967295,_=v+(T<<5&4294967295|T>>>27),T=R+(v^b&(_^v))+w[2]+4243563512&4294967295,R=_+(T<<9&4294967295|T>>>23),T=b+(_^v&(R^_))+w[7]+1735328473&4294967295,b=R+(T<<14&4294967295|T>>>18),T=v+(R^_&(b^R))+w[12]+2368359562&4294967295,v=b+(T<<20&4294967295|T>>>12),T=_+(v^b^R)+w[5]+4294588738&4294967295,_=v+(T<<4&4294967295|T>>>28),T=R+(_^v^b)+w[8]+2272392833&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^v)+w[11]+1839030562&4294967295,b=R+(T<<16&4294967295|T>>>16),T=v+(b^R^_)+w[14]+4259657740&4294967295,v=b+(T<<23&4294967295|T>>>9),T=_+(v^b^R)+w[1]+2763975236&4294967295,_=v+(T<<4&4294967295|T>>>28),T=R+(_^v^b)+w[4]+1272893353&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^v)+w[7]+4139469664&4294967295,b=R+(T<<16&4294967295|T>>>16),T=v+(b^R^_)+w[10]+3200236656&4294967295,v=b+(T<<23&4294967295|T>>>9),T=_+(v^b^R)+w[13]+681279174&4294967295,_=v+(T<<4&4294967295|T>>>28),T=R+(_^v^b)+w[0]+3936430074&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^v)+w[3]+3572445317&4294967295,b=R+(T<<16&4294967295|T>>>16),T=v+(b^R^_)+w[6]+76029189&4294967295,v=b+(T<<23&4294967295|T>>>9),T=_+(v^b^R)+w[9]+3654602809&4294967295,_=v+(T<<4&4294967295|T>>>28),T=R+(_^v^b)+w[12]+3873151461&4294967295,R=_+(T<<11&4294967295|T>>>21),T=b+(R^_^v)+w[15]+530742520&4294967295,b=R+(T<<16&4294967295|T>>>16),T=v+(b^R^_)+w[2]+3299628645&4294967295,v=b+(T<<23&4294967295|T>>>9),T=_+(b^(v|~R))+w[0]+4096336452&4294967295,_=v+(T<<6&4294967295|T>>>26),T=R+(v^(_|~b))+w[7]+1126891415&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~v))+w[14]+2878612391&4294967295,b=R+(T<<15&4294967295|T>>>17),T=v+(R^(b|~_))+w[5]+4237533241&4294967295,v=b+(T<<21&4294967295|T>>>11),T=_+(b^(v|~R))+w[12]+1700485571&4294967295,_=v+(T<<6&4294967295|T>>>26),T=R+(v^(_|~b))+w[3]+2399980690&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~v))+w[10]+4293915773&4294967295,b=R+(T<<15&4294967295|T>>>17),T=v+(R^(b|~_))+w[1]+2240044497&4294967295,v=b+(T<<21&4294967295|T>>>11),T=_+(b^(v|~R))+w[8]+1873313359&4294967295,_=v+(T<<6&4294967295|T>>>26),T=R+(v^(_|~b))+w[15]+4264355552&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~v))+w[6]+2734768916&4294967295,b=R+(T<<15&4294967295|T>>>17),T=v+(R^(b|~_))+w[13]+1309151649&4294967295,v=b+(T<<21&4294967295|T>>>11),T=_+(b^(v|~R))+w[4]+4149444226&4294967295,_=v+(T<<6&4294967295|T>>>26),T=R+(v^(_|~b))+w[11]+3174756917&4294967295,R=_+(T<<10&4294967295|T>>>22),T=b+(_^(R|~v))+w[2]+718787259&4294967295,b=R+(T<<15&4294967295|T>>>17),T=v+(R^(b|~_))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var v=_-this.blockSize,w=this.B,b=this.h,R=0;R<_;){if(b==0)for(;R<=v;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<_;)if(w[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,w),b=0;break}}else for(;R<_;)if(w[b++]=A[R++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var v=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=v&255,v/=256;for(this.u(A),A=Array(16),_=v=0;4>_;++_)for(var w=0;32>w;w+=8)A[v++]=this.g[_]>>>w&255;return A};function i(A,_){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=_(A)}function o(A,_){this.h=_;for(var v=[],w=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;w&&R==_||(v[b]=R,w=!1)}this.g=v}var l={};function c(A){return-128<=A&&128>A?i(A,function(_){return new o([_|0],0>_?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(h(-A));for(var _=[],v=1,w=0;A>=v;w++)_[w]=A/v|0,v*=4294967296;return new o(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return D(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),w=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),T=parseInt(A.substring(b,b+R),_);8>R?(R=h(Math.pow(_,R)),w=w.j(R).add(h(T))):(w=w.j(v),w=w.add(h(T)))}return w}var p=c(0),g=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var A=0,_=1,v=0;v<this.g.length;v++){var w=this.i(v);A+=(0<=w?w:4294967296+w)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(x(this))return"0";if(k(this))return"-"+D(this).toString(A);for(var _=h(Math.pow(A,6)),v=this,w="";;){var b=H(v,_).g;v=C(v,b.j(_));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=b,x(v))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function x(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function k(A){return A.h==-1}t.l=function(A){return A=C(this,A),k(A)?-1:x(A)?0:1};function D(A){for(var _=A.g.length,v=[],w=0;w<_;w++)v[w]=~A.g[w];return new o(v,~A.h).add(g)}t.abs=function(){return k(this)?D(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],w=0,b=0;b<=_;b++){var R=w+(this.i(b)&65535)+(A.i(b)&65535),T=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=T>>>16,R&=65535,T&=65535,v[b]=T<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function C(A,_){return A.add(D(_))}t.j=function(A){if(x(this)||x(A))return p;if(k(this))return k(A)?D(this).j(D(A)):D(D(this).j(A));if(k(A))return D(this.j(D(A)));if(0>this.l(E)&&0>A.l(E))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,v=[],w=0;w<2*_;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var R=this.i(w)>>>16,T=this.i(w)&65535,rt=A.i(b)>>>16,xt=A.i(b)&65535;v[2*w+2*b]+=T*xt,M(v,2*w+2*b),v[2*w+2*b+1]+=R*xt,M(v,2*w+2*b+1),v[2*w+2*b+1]+=T*rt,M(v,2*w+2*b+1),v[2*w+2*b+2]+=R*rt,M(v,2*w+2*b+2)}for(w=0;w<_;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=_;w<2*_;w++)v[w]=0;return new o(v,0)};function M(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function V(A,_){this.g=A,this.h=_}function H(A,_){if(x(_))throw Error("division by zero");if(x(A))return new V(p,p);if(k(A))return _=H(D(A),_),new V(D(_.g),D(_.h));if(k(_))return _=H(A,D(_)),new V(D(_.g),_.h);if(30<A.g.length){if(k(A)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,w=_;0>=w.l(A);)v=ne(v),w=ne(w);var b=ge(v,1),R=ge(w,1);for(w=ge(w,2),v=ge(v,2);!x(w);){var T=R.add(w);0>=T.l(A)&&(b=b.add(v),R=T),w=ge(w,1),v=ge(v,1)}return _=C(A,b.j(_)),new V(b,_)}for(b=p;0<=A.l(_);){for(v=Math.max(1,Math.floor(A.m()/_.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(v),T=R.j(_);k(T)||0<T.l(A);)v-=w,R=h(v),T=R.j(_);x(R)&&(R=g),b=b.add(R),A=C(A,T)}return new V(b,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)&A.i(w);return new o(v,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)|A.i(w);return new o(v,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)^A.i(w);return new o(v,this.h^A.h)};function ne(A){for(var _=A.g.length+1,v=[],w=0;w<_;w++)v[w]=A.i(w)<<1|A.i(w-1)>>>31;return new o(v,A.h)}function ge(A,_){var v=_>>5;_%=32;for(var w=A.g.length-v,b=[],R=0;R<w;R++)b[R]=0<_?A.i(R+v)>>>_|A.i(R+v+1)<<32-_:A.i(R+v);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Cr=o}).apply(typeof _d<"u"?_d:typeof self<"u"?self:typeof window<"u"?window:{});var ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gm,Js,_m,Io,Ql,ym,vm,Em;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ho=="object"&&ho];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in f))break e;f=f[P]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,P={next:function(){if(!m&&f<a.length){var O=f++;return{value:u(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function E(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function x(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,P,O){for(var W=Array(arguments.length-2),De=2;De<arguments.length;De++)W[De-2]=arguments[De];return u.prototype[P].apply(m,W)}}function k(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const P=a.length||0,O=m.length||0;a.length=P+O;for(let W=0;W<O;W++)a[P+W]=m[W]}else a.push(m)}}class C{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ne=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function ge(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function A(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)a[f]=m[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Nt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class rt{constructor(){this.h=this.g=null}add(u,f){const m=xt.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var xt=new C(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ye=!1,Nt=new rt,Kt=()=>{const a=l.Promise.resolve(void 0);ce=()=>{a.then(qt)}};var qt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){R(f)}var u=xt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ye=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var jn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function Mt(a,u){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ne){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Dt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Mt.aa.h.call(this)}}x(Mt,Be);var Dt={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(a,u,f,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=P,this.key=++Y,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _e(a){this.src=a,this.g={},this.h=0}_e.prototype.add=function(a,u,f,m,P){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var W=I(a,u,m,P);return-1<W?(u=a[W],f||(u.fa=!1)):(u=new Q(u,this.src,O,!!m,P),u.fa=f,a.push(u)),u};function y(a,u){var f=u.type;if(f in a.g){var m=a.g[f],P=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=P)&&Array.prototype.splice.call(m,P,1),O&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function I(a,u,f,m){for(var P=0;P<a.length;++P){var O=a[P];if(!O.da&&O.listener==u&&O.capture==!!f&&O.ha==m)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function U(a,u,f,m,P){if(Array.isArray(u)){for(var O=0;O<u.length;O++)U(a,u[O],f,m,P);return null}return f=oe(f),a&&a[L]?a.K(u,f,h(m)?!!m.capture:!1,P):F(a,u,f,!1,m,P)}function F(a,u,f,m,P,O){if(!u)throw Error("Invalid event type");var W=h(P)?!!P.capture:!!P,De=J(a);if(De||(a[S]=De=new _e(a)),f=De.add(u,f,m,W,O),f.proxy)return f;if(m=G(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)jn||(P=W),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(j(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function a(f){return u.call(a.src,a.listener,f)}const u=re;return a}function K(a,u,f,m,P){if(Array.isArray(u))for(var O=0;O<u.length;O++)K(a,u[O],f,m,P);else m=h(m)?!!m.capture:!!m,f=oe(f),a&&a[L]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],f=I(O,f,m,P),-1<f&&(Z(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=J(a))&&(u=a.g[u.toString()],a=-1,u&&(a=I(u,f,m,P)),(f=-1<a?u[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[L])y(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(j(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=J(u))?(y(f,a),f.h==0&&(f.src=null,u[S]=null)):Z(a)}}}function j(a){return a in N?N[a]:N[a]="on"+a}function re(a,u){if(a.da)a=!0;else{u=new Mt(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&z(a),a=f.call(m,u)}return a}function J(a){return a=a[S],a instanceof _e?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function ae(){Ue.call(this),this.i=new _e(this),this.M=this,this.F=null}x(ae,Ue),ae.prototype[L]=!0,ae.prototype.removeEventListener=function(a,u,f,m){K(this,a,u,f,m)};function fe(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Be(u,a);else if(u instanceof Be)u.target=u.target||a;else{var P=u;u=new Be(m,a),w(u,P)}if(P=!0,f)for(var O=f.length-1;0<=O;O--){var W=u.g=f[O];P=Re(W,m,!0,u)&&P}if(W=u.g=a,P=Re(W,m,!0,u)&&P,P=Re(W,m,!1,u)&&P,f)for(O=0;O<f.length;O++)W=u.g=f[O],P=Re(W,m,!1,u)&&P}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)Z(f[m]);delete a.g[u],a.h--}}this.F=null},ae.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},ae.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Re(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,O=0;O<u.length;++O){var W=u[O];if(W&&!W.da&&W.capture==f){var De=W.listener,it=W.ha||W.src;W.fa&&y(a.i,W),P=De.call(it,m)!==!1&&P}}return P&&!m.defaultPrevented}function je(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ge(a){a.g=je(()=>{a.g=null,a.i&&(a.i=!1,Ge(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class $t extends Ue{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){Ue.call(this),this.h=a,this.g={}}x(ft,Ue);var qn=[];function Cs(a){ge(a.g,function(u,f){this.g.hasOwnProperty(f)&&z(u)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Cs(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=l.JSON.stringify,Ht=l.JSON.parse,Wi=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Br(){}Br.prototype.h=null;function Vu(a){return a.h||(a.h=a.i())}function Nu(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wa(){Be.call(this,"d")}x(Wa,Be);function Ka(){Be.call(this,"c")}x(Ka,Be);var mr={},Mu=null;function Ki(){return Mu=Mu||new ae}mr.La="serverreachability";function Lu(a){Be.call(this,mr.La,a)}x(Lu,Be);function Ds(a){const u=Ki();fe(u,new Lu(u))}mr.STAT_EVENT="statevent";function Fu(a,u){Be.call(this,mr.STAT_EVENT,a),this.stat=u}x(Fu,Be);function wt(a){const u=Ki();fe(u,new Fu(u,a))}mr.Ma="timingevent";function Uu(a,u){Be.call(this,mr.Ma,a),this.size=u}x(Uu,Be);function ks(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Os(){this.g=!0}Os.prototype.xa=function(){this.g=!1};function k_(a,u,f,m,P,O){a.info(function(){if(a.g)if(O)for(var W="",De=O.split("&"),it=0;it<De.length;it++){var we=De[it].split("=");if(1<we.length){var pt=we[0];we=we[1];var mt=pt.split("_");W=2<=mt.length&&mt[1]=="type"?W+(pt+"="+we+"&"):W+(pt+"=redacted&")}}else W=null;else W=O;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+f+`
`+W})}function O_(a,u,f,m,P,O,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+f+`
`+O+" "+W})}function jr(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+N_(a,f)+(m?" "+m:"")})}function V_(a,u){a.info(function(){return"TIMEOUT: "+u})}Os.prototype.info=function(){};function N_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return st(f)}catch{return u}}var Gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ga;function Qi(){}x(Qi,Br),Qi.prototype.g=function(){return new XMLHttpRequest},Qi.prototype.i=function(){return{}},Ga=new Qi;function $n(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ju}function ju(){this.i=null,this.g="",this.h=!1}var qu={},Qa={};function Ja(a,u,f){a.L=1,a.v=Zi(mn(u)),a.m=f,a.P=!0,$u(a,null)}function $u(a,u){a.F=Date.now(),Ji(a),a.A=mn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),rh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new ju,a.g=Th(a.j,f?u:null,!a.m),0<a.O&&(a.M=new $t(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(qn[0]=P.toString()),P=qn);for(var O=0;O<P.length;O++){var W=U(f,P[O],m||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ds(),k_(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const u=this.M;u&&gn(a)==3?u.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const mt=gn(this.g);var u=this.g.Ba();const Hr=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||uh(this.g)))){this.J||mt!=4||u==7||(u==8||0>=Hr?Ds(3):Ds(2)),Ya(this);var f=this.g.Z();this.X=f;t:if(Hu(this)){var m=uh(this.g);a="";var P=m.length,O=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),Vs(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(O&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,O_(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var De,it=this.g;if((De=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(De)){var we=De;break t}}we=null}if(f=we)jr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,f);else{this.o=!1,this.s=3,wt(12),gr(this),Vs(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<W.length;)if(Gt=M_(this,W),Gt==Qa){mt==4&&(this.s=4,wt(14),f=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==qu){this.s=4,wt(15),jr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else jr(this.i,this.l,Gt,null),Xa(this,Gt);if(Hu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||W.length!=0||this.h.h||(this.s=1,wt(16),f=!1),this.o=this.o&&f,!f)jr(this.i,this.l,W,"[Invalid Chunked Response]"),gr(this),Vs(this);else if(0<W.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),sl(pt),pt.M=!0,wt(11))}}else jr(this.i,this.l,W,null),Xa(this,W);mt==4&&gr(this),this.o&&!this.J&&(mt==4?_h(this.j,this):(this.o=!1,Ji(this)))}else Z_(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),gr(this),Vs(this)}}}catch{}finally{}};function Hu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function M_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Qa:(f=Number(u.substring(f,m)),isNaN(f)?qu:(m+=1,m+f>u.length?Qa:(u=u.slice(m,m+f),a.C=m+f,u)))}$n.prototype.cancel=function(){this.J=!0,gr(this)};function Ji(a){a.S=Date.now()+a.I,zu(a,a.I)}function zu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ks(g(a.ba,a),u)}function Ya(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(V_(this.i,this.A),this.L!=2&&(Ds(),wt(17)),gr(this),this.s=2,Vs(this)):zu(this,this.S-a)};function Vs(a){a.j.G==0||a.J||_h(a.j,a)}function gr(a){Ya(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Cs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Xa(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Za(f.h,a))){if(!a.K&&Za(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)io(f),ro(f);else break e;rl(f),wt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=ks(g(f.Za,f),6e3));if(1>=Gu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else yr(f,11)}else if((a.K||f.g==a)&&io(f),!M(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let we=P[u];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const pt=we[3];pt!=null&&(f.la=pt,f.j.info("VER="+f.la));const mt=we[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const Hr=we[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(m=1.5*Hr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Gt=a.g;if(Gt){const ao=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ao){var O=m.h;O.g||ao.indexOf("spdy")==-1&&ao.indexOf("quic")==-1&&ao.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(el(O,O.h),O.h=null))}if(m.D){const il=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;il&&(m.ya=il,Ne(m.I,m.D,il))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var W=a;if(m.qa=Eh(m,m.J?m.ia:null,m.W),W.K){Qu(m.h,W);var De=W,it=m.L;it&&(De.I=it),De.B&&(Ya(De),Ji(De)),m.g=W}else mh(m);0<f.i.length&&so(f)}else we[0]!="stop"&&we[0]!="close"||yr(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?yr(f,7):nl(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}Ds(4)}catch{}}var L_=class{constructor(a,u){this.g=a,this.map=u}};function Wu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ku(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gu(a){return a.h?1:a.g?a.g.size:0}function Za(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function el(a,u){a.g?a.g.add(u):a.h=u}function Qu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Wu.prototype.cancel=function(){if(this.i=Ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ju(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return k(a.i)}function F_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function U_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function Yu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=U_(a),m=F_(a),P=m.length,O=0;O<P;O++)u.call(void 0,m[O],f&&f[O],a)}var Xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function B_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),P=null;if(0<=m){var O=a[f].substring(0,m);P=a[f].substring(m+1)}else O=a[f];u(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function _r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _r){this.h=a.h,Yi(this,a.j),this.o=a.o,this.g=a.g,Xi(this,a.s),this.l=a.l;var u=a.i,f=new Ls;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Zu(this,f),this.m=a.m}else a&&(u=String(a).match(Xu))?(this.h=!1,Yi(this,u[1]||"",!0),this.o=Ns(u[2]||""),this.g=Ns(u[3]||"",!0),Xi(this,u[4]),this.l=Ns(u[5]||"",!0),Zu(this,u[6]||"",!0),this.m=Ns(u[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}_r.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ms(u,eh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ms(u,eh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ms(f,f.charAt(0)=="/"?$_:q_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ms(f,z_)),a.join("")};function mn(a){return new _r(a)}function Yi(a,u,f){a.j=f?Ns(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Xi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Zu(a,u,f){u instanceof Ls?(a.i=u,W_(a.i,a.h)):(f||(u=Ms(u,H_)),a.i=new Ls(u,a.h))}function Ne(a,u,f){a.i.set(u,f)}function Zi(a){return Ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ns(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ms(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,j_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function j_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var eh=/[#\/\?@]/g,q_=/[#\?:]/g,$_=/[#\?]/g,H_=/[#\?@]/g,z_=/#/g;function Ls(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&B_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ls.prototype,t.add=function(a,u){Hn(this),this.i=null,a=qr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function th(a,u){Hn(a),u=qr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function nh(a,u){return Hn(a),u=qr(a,u),a.g.has(u)}t.forEach=function(a,u){Hn(this),this.g.forEach(function(f,m){f.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const P=a[m];for(let O=0;O<P.length;O++)f.push(u[m])}return f},t.V=function(a){Hn(this);let u=[];if(typeof a=="string")nh(this,a)&&(u=u.concat(this.g.get(qr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Hn(this),this.i=null,a=qr(this,a),nh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function rh(a,u,f){th(a,u),0<f.length&&(a.i=null,a.g.set(qr(a,u),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const O=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var P=O;W[m]!==""&&(P+="="+encodeURIComponent(String(W[m]))),a.push(P)}}return this.i=a.join("&")};function qr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function W_(a,u){u&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(th(this,m),rh(this,P,f))},a)),a.j=u}function K_(a,u){const f=new Os;if(l.Image){const m=new Image;m.onload=E(zn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=E(zn,f,"TestLoadImage: error",!1,u,m),m.onabort=E(zn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=E(zn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function G_(a,u){const f=new Os,m=new AbortController,P=setTimeout(()=>{m.abort(),zn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(P),O.ok?zn(f,"TestPingServer: ok",!0,u):zn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),zn(f,"TestPingServer: error",!1,u)})}function zn(a,u,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function Q_(){this.g=new Wi}function J_(a,u,f){const m=f||"";try{Yu(a,function(P,O){let W=P;h(P)&&(W=st(P)),u.push(m+O+"="+encodeURIComponent(W))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function eo(a){this.l=a.Ub||null,this.j=a.eb||!1}x(eo,Br),eo.prototype.g=function(){return new to(this.l,this.j)},eo.prototype.i=function(a){return function(){return a}}({});function to(a,u){ae.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(to,ae),t=to.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Fs(this):Us(this),this.readyState==3&&sh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fs(this))},t.Qa=function(a){this.g&&(this.response=a,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Us(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(to.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ih(a){let u="";return ge(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function tl(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=ih(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ne(a,u,f))}function $e(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x($e,ae);var Y_=/^https?$/i,X_=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ga.g(),this.v=this.o?Vu(this.o):Vu(Ga),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){oh(this,O);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())f.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(X_,u,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,W]of f)this.g.setRequestHeader(O,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ch(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){oh(this,O)}};function oh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,ah(a),no(a)}function ah(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),no(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),no(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lh(this):this.bb())},t.bb=function(){lh(this)};function lh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)je(a.Ea,0,a);else if(fe(a,"readystatechange"),gn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=W===0){var P=String(a.D).match(Xu)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!Y_.test(P?P.toLowerCase():"")}f=m}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var O=2<gn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",ah(a)}}finally{no(a)}}}}function no(a,u){if(a.g){ch(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||fe(a,"ready");try{f.onreadystatechange=m}catch{}}}function ch(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Ht(u)}};function uh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Z_(a){const u={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(M(a[m]))continue;var f=b(a[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=u[P]||[];u[P]=O,O.push(f)}A(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function hh(a){this.Aa=0,this.i=[],this.j=new Os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bs("baseRetryDelayMs",5e3,a),this.cb=Bs("retryDelaySeedMs",1e4,a),this.Wa=Bs("forwardChannelMaxRetries",2,a),this.wa=Bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wu(a&&a.concurrentRequestLimit),this.Da=new Q_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){wt(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Eh(this,null,this.W),so(this)};function nl(a){if(dh(a),a.G==3){var u=a.U++,f=mn(a.I);if(Ne(f,"SID",a.K),Ne(f,"RID",u),Ne(f,"TYPE","terminate"),js(a,f),u=new $n(a,a.j,u),u.L=2,u.v=Zi(mn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Th(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ji(u)}vh(a)}function ro(a){a.g&&(sl(a),a.g.cancel(),a.g=null)}function dh(a){ro(a),a.u&&(l.clearTimeout(a.u),a.u=null),io(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function so(a){if(!Ku(a.h)&&!a.s){a.s=!0;var u=a.Ga;ce||Kt(),ye||(ce(),ye=!0),Nt.add(u,a),a.B=0}}function ey(a,u){return Gu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ks(g(a.Ga,a,u),yh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new $n(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),w(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=ph(this,P,u),f=mn(this.I),Ne(f,"RID",a),Ne(f,"CVER",22),this.D&&Ne(f,"X-HTTP-Session-Id",this.D),js(this,f),O&&(this.O?u="headers="+encodeURIComponent(String(ih(O)))+"&"+u:this.m&&tl(f,this.m,O)),el(this.h,P),this.Ua&&Ne(f,"TYPE","init"),this.P?(Ne(f,"$req",u),Ne(f,"SID","null"),P.T=!0,Ja(P,f,null)):Ja(P,f,u),this.G=2}}else this.G==3&&(a?fh(this,a):this.i.length==0||Ku(this.h)||fh(this))};function fh(a,u){var f;u?f=u.l:f=a.U++;const m=mn(a.I);Ne(m,"SID",a.K),Ne(m,"RID",f),Ne(m,"AID",a.T),js(a,m),a.m&&a.o&&tl(m,a.m,a.o),f=new $n(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ph(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),el(a.h,f),Ja(f,m,u)}function js(a,u){a.H&&ge(a.H,function(f,m){Ne(u,m,f)}),a.l&&Yu({},function(f,m){Ne(u,m,f)})}function ph(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let O=-1;for(;;){const W=["count="+f];O==-1?0<f?(O=P[0].g,W.push("ofs="+O)):O=0:W.push("ofs="+O);let De=!0;for(let it=0;it<f;it++){let we=P[it].g;const pt=P[it].map;if(we-=O,0>we)O=Math.max(0,P[it].g-100),De=!1;else try{J_(pt,W,"req"+we+"_")}catch{m&&m(pt)}}if(De){m=W.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function mh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ce||Kt(),ye||(ce(),ye=!0),Nt.add(u,a),a.v=0}}function rl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ks(g(a.Fa,a),yh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ks(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),ro(this),gh(this))};function sl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function gh(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=mn(a.qa);Ne(u,"RID","rpc"),Ne(u,"SID",a.K),Ne(u,"AID",a.T),Ne(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ne(u,"TO",a.ja),Ne(u,"TYPE","xmlhttp"),js(a,u),a.m&&a.o&&tl(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Zi(mn(u)),f.m=null,f.P=!0,$u(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ro(this),rl(this),wt(19))};function io(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function _h(a,u){var f=null;if(a.g==u){io(a),sl(a),a.g=null;var m=2}else if(Za(a.h,u))f=u.D,Qu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=Ki(),fe(m,new Uu(m,f)),so(a)}else mh(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&ey(a,u)||m==2&&rl(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),P){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function yh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function yr(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const P=!m;m=new _r(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Yi(m,"https"),Zi(m),P?K_(m.toString(),f):G_(m.toString(),f)}else wt(2);a.G=0,a.l&&a.l.sa(u),vh(a),dh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function vh(a){if(a.G=0,a.ka=[],a.l){const u=Ju(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Eh(a,u,f){var m=f instanceof _r?mn(f):new _r(f);if(m.g!="")u&&(m.g=u+"."+m.g),Xi(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var O=new _r(null);m&&Yi(O,m),u&&(O.g=u),P&&Xi(O,P),f&&(O.l=f),m=O}return f=a.D,u=a.ya,f&&u&&Ne(m,f,u),Ne(m,"VER",a.la),js(a,m),m}function Th(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new $e(new eo({eb:f})):new $e(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ih(){}t=Ih.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oo(){}oo.prototype.g=function(a,u){return new Lt(a,u)};function Lt(a,u){ae.call(this),this.g=new hh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!M(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new $r(this)}x(Lt,ae),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){nl(this.g)},Lt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=st(a),a=f);u.i.push(new L_(u.Ya++,a)),u.G==3&&so(u)},Lt.prototype.N=function(){this.g.l=null,delete this.j,nl(this.g),delete this.g,Lt.aa.N.call(this)};function wh(a){Wa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}x(wh,Wa);function Ah(){Ka.call(this),this.status=1}x(Ah,Ka);function $r(a){this.g=a}x($r,Ih),$r.prototype.ua=function(){fe(this.g,"a")},$r.prototype.ta=function(a){fe(this.g,new wh(a))},$r.prototype.sa=function(a){fe(this.g,new Ah)},$r.prototype.ra=function(){fe(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,Em=function(){return new oo},vm=function(){return Ki()},ym=mr,Ql={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gi.NO_ERROR=0,Gi.TIMEOUT=8,Gi.HTTP_ERROR=6,Io=Gi,Bu.COMPLETE="complete",_m=Bu,Nu.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Js=Nu,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,gm=$e}).apply(typeof ho<"u"?ho:typeof self<"u"?self:typeof window<"u"?window:{});const yd="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let As="10.14.0";/**
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
 */const Dr=new Fc("@firebase/firestore");function zs(){return Dr.logLevel}function X(t,...e){if(Dr.logLevel<=Ee.DEBUG){const n=e.map(jc);Dr.debug(`Firestore (${As}): ${t}`,...n)}}function Mn(t,...e){if(Dr.logLevel<=Ee.ERROR){const n=e.map(jc);Dr.error(`Firestore (${As}): ${t}`,...n)}}function hs(t,...e){if(Dr.logLevel<=Ee.WARN){const n=e.map(jc);Dr.warn(`Firestore (${As}): ${t}`,...n)}}function jc(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function Ce(t,e){t||ue()}function de(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Tm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class gI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _I{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new Tm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new yt(e)}}class yI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new EI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function II(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Im{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=II(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new tt(0,0))}static max(){return new he(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Ii{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const wI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Ii{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return wI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new te(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Fe.fromString(e))}static fromName(e){return new se(Fe.fromString(e).popFirst(5))}static empty(){return new se(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Fe(e.slice()))}}function AI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new lr(s,se.empty(),e)}function bI(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(he.min(),se.empty(),-1)}static max(){return new lr(he.max(),se.empty(),-1)}}function RI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const SI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Li(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==SI)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function CI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qc.oe=-1;function Aa(t){return t==null}function Wo(t){return t===0&&1/t==-1/0}function xI(t){return typeof t=="number"&&Number.isInteger(t)&&!Wo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function vd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ed(this.data.getIterator())}getIteratorFrom(e){return new Ed(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Ed{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new ct(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Am extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Am("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const DI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=DI.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */function $c(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hc(t){const e=t.mapValue.fields.__previous_value__;return $c(e)?Hc(e):e}function wi(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class kI{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const po={mapValue:{}};function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$c(t)?4:VI(t)?9007199254740991:OI(t)?10:11:ue()}function fn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cr(s.timestampValue),l=cr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return kr(s.bytesValue).isEqual(kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ke(s.doubleValue),l=Ke(i.doubleValue);return o===l?Wo(o)===Wo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(vd(o)!==vd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!fn(o[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function bi(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ke(i.integerValue||i.doubleValue),c=Ke(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Td(t.timestampValue,e.timestampValue);case 4:return Td(wi(t),wi(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const l=kr(i),c=kr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=be(l[h],c[h]);if(d!==0)return d}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=be(Ke(i.latitude),Ke(o.latitude));return l!==0?l:be(Ke(i.longitude),Ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Id(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},g=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,x=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=be(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Id(E,x)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===po.mapValue&&o===po.mapValue)return 0;if(i===po.mapValue)return 1;if(o===po.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=be(c[p],d[p]);if(g!==0)return g;const E=fs(l[c[p]],h[d[p]]);if(E!==0)return E}return be(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Td(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=cr(t),r=cr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function Id(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=fs(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function ps(t){return Jl(t)}function Jl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Jl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Jl(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Yl(t){return!!t&&"integerValue"in t}function zc(t){return!!t&&"arrayValue"in t}function wd(t){return!!t&&"nullValue"in t}function Ad(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wo(t){return!!t&&"mapValue"in t}function OI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=li(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=li(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=li(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=li(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(li(this.value))}}function bm(t){const e=[];return Mr(t.fields,(n,r)=>{const s=new at([n]);if(wo(r)){const i=bm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
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
 */class Et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,he.min(),he.min(),he.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,he.min(),he.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,he.min(),he.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ko{constructor(e,n){this.position=e,this.inclusive=n}}function bd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Go{constructor(e,n="asc"){this.field=e,this.dir=n}}function NI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Rm{}class et extends Rm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LI(e,n,r):n==="array-contains"?new BI(e,r):n==="in"?new jI(e,r):n==="not-in"?new qI(e,r):n==="array-contains-any"?new $I(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FI(e,r):new UI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fs(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends Rm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pn(e,n)}matches(e){return Sm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sm(t){return t.op==="and"}function Pm(t){return MI(t)&&Sm(t)}function MI(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Xl(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(Pm(t))return t.filters.map(e=>Xl(e)).join(",");{const e=t.filters.map(n=>Xl(n)).join(",");return`${t.op}(${e})`}}function Cm(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Cm(o,s.filters[l]),!0):!1}(t,e):void ue()}function xm(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${ps(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(xm).join(" ,")+"}"}(t):"Filter"}class LI extends et{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class FI extends et{constructor(e,n){super(e,"in",n),this.keys=Dm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UI extends et{constructor(e,n){super(e,"not-in",n),this.keys=Dm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class BI extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zc(n)&&bi(n.arrayValue,this.value)}}class jI extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bi(this.value.arrayValue,n)}}class qI extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bi(this.value.arrayValue,n)}}class $I extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bi(this.value.arrayValue,r))}}/**
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
 */class HI{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Sd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new HI(t,e,n,r,s,i,o)}function Wc(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Aa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.ue=n}return e.ue}function Kc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rd(t.startAt,e.startAt)&&Rd(t.endAt,e.endAt)}function Zl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ba{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zI(t,e,n,r,s,i,o,l){return new ba(t,e,n,r,s,i,o,l)}function Gc(t){return new ba(t)}function Pd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WI(t){return t.collectionGroup!==null}function ci(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ct(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Go(i,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Go(at.keyField(),r))}return e.ce}function ln(t){const e=de(t);return e.le||(e.le=KI(e,ci(t))),e.le}function KI(t,e){if(t.limitType==="F")return Sd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Go(s.field,i)});const n=t.endAt?new Ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ko(t.startAt.position,t.startAt.inclusive):null;return Sd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ec(t,e,n){return new ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ra(t,e){return Kc(ln(t),ln(e))&&t.limitType===e.limitType}function km(t){return`${Wc(ln(t))}|lt:${t.limitType}`}function Gr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>xm(s)).join(", ")}]`),Aa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ps(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ps(s)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=bd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ci(r),s)||r.endAt&&!function(o,l,c){const h=bd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ci(r),s))}(t,e)}function GI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Om(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=QI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QI(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?fs(c,h):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wm(this.inner)}size(){return this.innerSize}}/**
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
 */const JI=new qe(se.comparator);function Ln(){return JI}const Vm=new qe(se.comparator);function Ys(...t){let e=Vm;for(const n of t)e=e.insert(n.key,n);return e}function Nm(t){let e=Vm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return ui()}function Mm(){return ui()}function ui(){return new bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const YI=new qe(se.comparator),XI=new ct(se.comparator);function ve(...t){let e=XI;for(const n of t)e=e.add(n);return e}const ZI=new ct(be);function ew(){return ZI}/**
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
 */function Qc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wo(e)?"-0":e}}function Lm(t){return{integerValue:""+t}}function tw(t,e){return xI(e)?Lm(e):Qc(t,e)}/**
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
 */class Pa{constructor(){this._=void 0}}function nw(t,e,n){return t instanceof Qo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$c(i)&&(i=Hc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ri?Um(t,e):t instanceof Si?Bm(t,e):function(s,i){const o=Fm(s,i),l=Cd(o)+Cd(s.Pe);return Yl(o)&&Yl(s.Pe)?Lm(l):Qc(s.serializer,l)}(t,e)}function rw(t,e,n){return t instanceof Ri?Um(t,e):t instanceof Si?Bm(t,e):n}function Fm(t,e){return t instanceof Jo?function(r){return Yl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qo extends Pa{}class Ri extends Pa{constructor(e){super(),this.elements=e}}function Um(t,e){const n=jm(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Si extends Pa{constructor(e){super(),this.elements=e}}function Bm(t,e){let n=jm(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class Jo extends Pa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Cd(t){return Ke(t.integerValue||t.doubleValue)}function jm(t){return zc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Si&&s instanceof Si?ds(r.elements,s.elements,fn):r instanceof Jo&&s instanceof Jo?fn(r.Pe,s.Pe):r instanceof Qo&&s instanceof Qo}(t.transform,e.transform)}class iw{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function qm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jc(t.key,Wt.none()):new Ui(t.key,t.data,Wt.none());{const n=t.data,r=Ot.empty();let s=new ct(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new fr(t.key,r,new Ut(s.toArray()),Wt.none())}}function ow(t,e,n){t instanceof Ui?function(s,i,o){const l=s.value.clone(),c=Dd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof fr?function(s,i,o){if(!Ao(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Dd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll($m(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function hi(t,e,n,r){return t instanceof Ui?function(i,o,l,c){if(!Ao(i.precondition,o))return l;const h=i.value.clone(),d=kd(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof fr?function(i,o,l,c){if(!Ao(i.precondition,o))return l;const h=kd(i.fieldTransforms,c,o),d=o.data;return d.setAll($m(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ao(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function aw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Fm(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function xd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,(i,o)=>sw(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ui extends Ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fr extends Ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $m(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dd(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,rw(o,l,n[s]))}return r}function kd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,nw(i,o,e))}return r}class Jc extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lw extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cw{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ow(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Mm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=qm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>xd(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>xd(n,r))}}class Yc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return YI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yc(e,n,r,s)}}/**
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
 */class uw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hw{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,Te;function dw(t){switch(t){default:return ue();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function Hm(t){if(t===void 0)return Mn("GRPC error has no .code"),q.UNKNOWN;switch(t){case Qe.OK:return q.OK;case Qe.CANCELLED:return q.CANCELLED;case Qe.UNKNOWN:return q.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return q.INTERNAL;case Qe.UNAVAILABLE:return q.UNAVAILABLE;case Qe.UNAUTHENTICATED:return q.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case Qe.NOT_FOUND:return q.NOT_FOUND;case Qe.ALREADY_EXISTS:return q.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return q.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case Qe.ABORTED:return q.ABORTED;case Qe.OUT_OF_RANGE:return q.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return q.UNIMPLEMENTED;case Qe.DATA_LOSS:return q.DATA_LOSS;default:return ue()}}(Te=Qe||(Qe={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fw(){return new TextEncoder}/**
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
 */const pw=new Cr([4294967295,4294967295],0);function Od(t){const e=fw().encode(t),n=new mm;return n.update(e),new Uint8Array(n.digest())}function Vd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cr([n,r],0),new Cr([s,i],0)]}class Xc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xs(`Invalid padding: ${n}`);if(r<0)throw new Xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Cr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Cr.fromNumber(r)));return s.compare(pw)===1&&(s=new Cr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Od(e),[r,s]=Vd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Od(e),[r,s]=Vd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Bi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xa(he.min(),s,new qe(be),Ln(),ve())}}class Bi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bi(r,n,ve(),ve(),ve())}}/**
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
 */class bo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class zm{constructor(e,n){this.targetId=e,this.me=n}}class Wm{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Nd{constructor(){this.fe=0,this.ge=Ld(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new Bi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ld()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mw{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ln(),this.qe=Md(),this.Qe=new qe(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Zl(i))if(r===0){const o=new se(i.path);this.Ue(n,o,Et.newNoDocument(o,he.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=kr(r).toUint8Array()}catch(c){if(c instanceof Am)return hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Xc(o,s,i)}catch(c){return hs(c instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Zl(l.target)){const c=new se(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Et.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ve();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new xa(e,n,this.Qe,this.ke,r);return this.ke=Ln(),this.qe=Md(),this.Qe=new qe(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Nd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Md(){return new qe(se.comparator)}function Ld(){return new qe(se.comparator)}const gw={asc:"ASCENDING",desc:"DESCENDING"},_w={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yw={and:"AND",or:"OR"};class vw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tc(t,e){return t.useProto3Json||Aa(e)?e:{value:e}}function Yo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Km(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ew(t,e){return Yo(t,e.toTimestamp())}function cn(t){return Ce(!!t),he.fromTimestamp(function(n){const r=cr(n);return new tt(r.seconds,r.nanos)}(t))}function Zc(t,e){return nc(t,e).canonicalString()}function nc(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Gm(t){const e=Fe.fromString(t);return Ce(Zm(e)),e}function rc(t,e){return Zc(t.databaseId,e.path)}function Il(t,e){const n=Gm(e);if(n.get(1)!==t.databaseId.projectId)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Jm(n))}function Qm(t,e){return Zc(t.databaseId,e)}function Tw(t){const e=Gm(t);return e.length===4?Fe.emptyPath():Jm(e)}function sc(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jm(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fd(t,e,n){return{name:rc(t,e),fields:n.value.mapValue.fields}}function Iw(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ce(d===void 0||typeof d=="string"),dt.fromBase64String(d||"")):(Ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?q.UNKNOWN:Hm(h.code);return new te(d,h.message||"")}(o);n=new Wm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Il(t,r.document.name),i=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):he.min(),l=new Ot({mapValue:{fields:r.document.fields}}),c=Et.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new bo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Il(t,r.document),i=r.readTime?cn(r.readTime):he.min(),o=Et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new bo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Il(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new hw(s,i),l=r.targetId;n=new zm(l,o)}}return n}function ww(t,e){let n;if(e instanceof Ui)n={update:Fd(t,e.key,e.value)};else if(e instanceof Jc)n={delete:rc(t,e.key)};else if(e instanceof fr)n={update:Fd(t,e.key,e.data),updateMask:kw(e.fieldMask)};else{if(!(e instanceof lw))return ue();n={verify:rc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ri)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Jo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ew(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function Aw(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?cn(s.updateTime):cn(i);return o.isEqual(he.min())&&(o=cn(i)),new iw(o,s.transformResults||[])}(n,e))):[]}function bw(t,e){return{documents:[Qm(t,e.path)]}}function Rw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Qm(t,s);const i=function(h){if(h.length!==0)return Xm(pn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:Qr(g.field),direction:Cw(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=tc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function Sw(t){let e=Tw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Ym(p);return g instanceof pn&&Pm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(x){return new Go(Jr(x.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Aa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,E=p.values||[];return new Ko(E,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,E=p.values||[];return new Ko(E,g)}(n.endAt)),zI(e,s,o,i,l,"F",c,h)}function Pw(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ym(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jr(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jr(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>Ym(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function Cw(t){return gw[t]}function xw(t){return _w[t]}function Dw(t){return yw[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return at.fromServerFormat(t.fieldPath)}function Xm(t){return t instanceof et?function(n){if(n.op==="=="){if(Ad(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(wd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ad(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(wd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:xw(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>Xm(s));return r.length===1?r[0]:{compositeFilter:{op:Dw(n.op),filters:r}}}(t):ue()}function kw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class nr{constructor(e,n,r,s,i=he.min(),o=he.min(),l=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ow{constructor(e){this.ct=e}}function Vw(t){const e=Sw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ec(e,e.limit,"L"):e}/**
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
 */class Nw{constructor(){this.un=new Mw}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(lr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Mw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(Fe.comparator)).toArray()}}/**
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
 */class ms{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ms(0)}static kn(){return new ms(-1)}}/**
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
 */class Lw{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Fw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Uw{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&hi(r.mutation,s,Ut.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ys();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Ln();const o=ui(),l=function(){return ui()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof fr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),hi(d.mutation,h,d.mutation.getFieldMask(),tt.now())):o.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new Fw(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ui();let s=new qe((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Ut.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ve()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Mm();d.forEach(g=>{if(!i.has(g)){const E=qm(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Ar());let l=-1,c=i;return o.next(h=>$.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ve())).next(d=>({batchId:l,changes:Nm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Ys();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const h=function(p,g){return new ba(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let l=Ys();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&hi(d.mutation,h,Ut.empty(),tt.now()),Sa(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class Bw{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:cn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:Vw(s.bundledQuery),readTime:cn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class jw{constructor(){this.overlays=new qe(se.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Ar(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return $.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uw(n,r));let i=this.Ir.get(n);i===void 0&&(i=ve(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class qw{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class eu{constructor(){this.Tr=new ct(nt.Er),this.dr=new ct(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Fe([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Fe([])),r=new nt(n,e),s=new nt(n,e+1);let i=ve();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
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
 */class $w{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(nt.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cw(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(be);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new nt(new se(i),0);let l=new ct(be);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),s=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Hw{constructor(e){this.Mr=e,this.docs=function(){return new qe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ln();const o=n.path,l=new se(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||RI(bI(d),r)<=0||(s.has(d.key)||Sa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zw(this)}getSize(e){return $.resolve(this.size)}}class zw extends Lw{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Ww{constructor(e){this.persistence=e,this.Nr=new bs(n=>Wc(n),Kc),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new eu,this.targetCount=0,this.kr=ms.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ms(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class Kw{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qc(0),this.Kr=!1,this.Kr=!0,this.$r=new qw,this.referenceDelegate=e(this),this.Ur=new Ww(this),this.indexManager=new Nw,this.remoteDocumentCache=function(s){return new Hw(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ow(n),this.Gr=new Bw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $w(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new Gw(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Gw extends PI{constructor(e){super(),this.currentSequenceNumber=e}}class tu{constructor(e){this.persistence=e,this.Jr=new eu,this.Yr=null}static Zr(e){return new tu(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class nu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nu(e,n.fromCache,r,s)}}/**
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
 */class Qw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Jw{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return JE()?8:CI(It())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Qw;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(zs()<=Ee.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Gr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(zs()<=Ee.DEBUG&&X("QueryEngine","Query:",Gr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(zs()<=Ee.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Gr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):$.resolve())}Yi(e,n){if(Pd(n))return $.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ec(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,ec(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return Pd(n)||s.isEqual(he.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?$.resolve(null):(zs()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gr(n)),this.rs(e,o,n,AI(s,-1)).next(l=>l))})}ts(e,n){let r=new ct(Om(e));return n.forEach((s,i)=>{Sa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return zs()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Gr(n)),this.Ji.getDocumentsMatchingQuery(e,n,lr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Yw{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new qe(be),this._s=new bs(i=>Wc(i),Kc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uw(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Xw(t,e,n,r){return new Yw(t,e,n,r)}async function eg(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ve();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Zw(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let E=$.resolve();return g.forEach(x=>{E=E.next(()=>d.getEntry(c,x)).next(k=>{const D=h.docVersions.get(x);Ce(D!==null),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function tg(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function e0(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(dt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),s=s.insert(p,E),function(k,D,C){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,E,d)&&l.push(n.Ur.updateTargetData(i,E))});let c=Ln(),h=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(t0(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(he.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return $.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function t0(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ln();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function n0(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function r0(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ic(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ud(t,e,n){const r=de(t);let s=he.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=de(c),g=p._s.get(d);return g!==void 0?$.resolve(p.os.get(g)):p.Ur.getTargetData(h,d)}(r,o,ln(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:ve())).next(l=>(s0(r,GI(e),l),{documents:l,Ts:i})))}function s0(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Bd{constructor(){this.activeTargetIds=ew()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class i0{constructor(){this.so=new Bd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Bd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class o0{_o(e){}shutdown(){}}/**
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
 */class jd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mo=null;function wl(){return mo===null?mo=function(){return 268435456+Math.round(2147483648*Math.random())}():mo++,"0x"+mo.toString(16)}/**
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
 */const a0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class l0{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const gt="WebChannelConnection";class c0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=wl(),c=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(d=>(X("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw hs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=a0[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=wl();return new Promise((o,l)=>{const c=new gm;c.setWithCredentials(!0),c.listenOnce(_m.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Io.NO_ERROR:const d=c.getResponseJson();X(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Io.TIMEOUT:X(gt,`RPC '${e}' ${i} timed out`),l(new te(q.DEADLINE_EXCEEDED,"Request time out"));break;case Io.HTTP_ERROR:const p=c.getStatus();if(X(gt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const x=function(D){const C=D.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(C)>=0?C:q.UNKNOWN}(E.status);l(new te(x,E.message))}else l(new te(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new te(q.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{X(gt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(gt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=wl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Em(),l=vm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(gt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,E=!1;const x=new l0({Io:D=>{E?X(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(X(gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(gt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),k=(D,C,M)=>{D.listen(C,V=>{try{M(V)}catch(H){setTimeout(()=>{throw H},0)}})};return k(p,Js.EventType.OPEN,()=>{E||(X(gt,`RPC '${e}' stream ${s} transport opened.`),x.yo())}),k(p,Js.EventType.CLOSE,()=>{E||(E=!0,X(gt,`RPC '${e}' stream ${s} transport closed`),x.So())}),k(p,Js.EventType.ERROR,D=>{E||(E=!0,hs(gt,`RPC '${e}' stream ${s} transport errored:`,D),x.So(new te(q.UNAVAILABLE,"The operation could not be completed")))}),k(p,Js.EventType.MESSAGE,D=>{var C;if(!E){const M=D.data[0];Ce(!!M);const V=M,H=V.error||((C=V[0])===null||C===void 0?void 0:C.error);if(H){X(gt,`RPC '${e}' stream ${s} received error:`,H);const ne=H.status;let ge=function(v){const w=Qe[v];if(w!==void 0)return Hm(w)}(ne),A=H.message;ge===void 0&&(ge=q.INTERNAL,A="Unknown error status: "+ne+" with message "+H.message),E=!0,x.So(new te(ge,A)),p.close()}else X(gt,`RPC '${e}' stream ${s} received:`,M),x.bo(M)}}),k(l,ym.STAT_EVENT,D=>{D.stat===Ql.PROXY?X(gt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Ql.NOPROXY&&X(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Al(){return typeof document<"u"?document:null}/**
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
 */function Da(t){return new vw(t,!0)}/**
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
 */class ng{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class rg{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ng(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new te(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u0 extends rg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Iw(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?cn(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=sc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Zl(c)?{documents:bw(i,c)}:{query:Rw(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Km(i,o.resumeToken);const h=tc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Yo(i,o.snapshotVersion.toTimestamp());const h=tc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Pw(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=sc(this.serializer),n.removeTarget=e,this.a_(n)}}class h0 extends rg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Aw(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=sc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ww(this.serializer,r))};this.a_(n)}}/**
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
 */class d0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,nc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(q.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,nc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(q.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class f0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Mn(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class p0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Lr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=de(c);h.L_.add(4),await ji(h),h.q_.set("Unknown"),h.L_.delete(4),await ka(h)}(this))})}),this.q_=new f0(r,s)}}async function ka(t){if(Lr(t))for(const e of t.B_)await e(!0)}async function ji(t){for(const e of t.B_)await e(!1)}function sg(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ou(n)?iu(n):Rs(n).r_()&&su(n,e))}function ru(t,e){const n=de(t),r=Rs(n);n.N_.delete(e),r.r_()&&ig(n,e),n.N_.size===0&&(r.r_()?r.o_():Lr(n)&&n.q_.set("Unknown"))}function su(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).A_(e)}function ig(t,e){t.Q_.xe(e),Rs(t).R_(e)}function iu(t){t.Q_=new mw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.q_.v_()}function ou(t){return Lr(t)&&!Rs(t).n_()&&t.N_.size>0}function Lr(t){return de(t).L_.size===0}function og(t){t.Q_=void 0}async function m0(t){t.q_.set("Online")}async function g0(t){t.N_.forEach((e,n)=>{su(t,e)})}async function _0(t,e){og(t),ou(t)?(t.q_.M_(e),iu(t)):t.q_.set("Unknown")}async function y0(t,e,n){if(t.q_.set("Online"),e instanceof Wm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xo(t,r)}else if(e instanceof bo?t.Q_.Ke(e):e instanceof zm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await tg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(dt.EMPTY_BYTE_STRING,d.snapshotVersion)),ig(i,c);const p=new nr(d.target,c,h,d.sequenceNumber);su(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Xo(t,r)}}async function Xo(t,e,n){if(!Fi(e))throw e;t.L_.add(1),await ji(t),t.q_.set("Offline"),n||(n=()=>tg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ka(t)})}function ag(t,e){return e().catch(n=>Xo(t,n,e))}async function Oa(t){const e=de(t),n=ur(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;v0(e);)try{const s=await n0(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,E0(e,s)}catch(s){await Xo(e,s)}lg(e)&&cg(e)}function v0(t){return Lr(t)&&t.O_.length<10}function E0(t,e){t.O_.push(e);const n=ur(t);n.r_()&&n.V_&&n.m_(e.mutations)}function lg(t){return Lr(t)&&!ur(t).n_()&&t.O_.length>0}function cg(t){ur(t).start()}async function T0(t){ur(t).p_()}async function I0(t){const e=ur(t);for(const n of t.O_)e.m_(n.mutations)}async function w0(t,e,n){const r=t.O_.shift(),s=Yc.from(r,e,n);await ag(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Oa(t)}async function A0(t,e){e&&ur(t).V_&&await async function(r,s){if(function(o){return dw(o)&&o!==q.ABORTED}(s.code)){const i=r.O_.shift();ur(r).s_(),await ag(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Oa(r)}}(t,e),lg(t)&&cg(t)}async function qd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Lr(n);n.L_.add(3),await ji(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ka(n)}async function b0(t,e){const n=de(t);e?(n.L_.delete(2),await ka(n)):e||(n.L_.add(2),await ji(n),n.q_.set("Unknown"))}function Rs(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new u0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:m0.bind(null,t),Ro:g0.bind(null,t),mo:_0.bind(null,t),d_:y0.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ou(t)?iu(t):t.q_.set("Unknown")):(await t.K_.stop(),og(t))})),t.K_}function ur(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new h0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:T0.bind(null,t),mo:A0.bind(null,t),f_:I0.bind(null,t),g_:w0.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Oa(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class au{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new au(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Fi(t))return new te(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class $d{constructor(){this.W_=new qe(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class gs{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new gs(e,n,rs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class R0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class S0{constructor(){this.queries=Hd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Hd(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new te(q.ABORTED,"Firestore shutting down"))}}function Hd(){return new bs(t=>km(t),Ra)}async function ug(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new R0,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=lu(o,`Initialization of query '${Gr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&cu(n)}async function hg(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function P0(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&cu(n)}function C0(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function cu(t){t.Y_.forEach(e=>{e.next()})}var oc,zd;(zd=oc||(oc={})).ea="default",zd.Cache="cache";class dg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==oc.Cache}}/**
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
 */class fg{constructor(e){this.key=e}}class pg{constructor(e){this.key=e}}class x0{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=Om(e),this.Ra=new rs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new $d,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),E=Sa(this.query,p)?p:null,x=!!g&&this.mutatedKeys.has(g.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;g&&E?g.data.isEqual(E.data)?x!==k&&(r.track({type:3,doc:E}),D=!0):this.ga(g,E)||(r.track({type:2,doc:E}),D=!0,(c&&this.Aa(E,c)>0||h&&this.Aa(E,h)<0)&&(l=!0)):!g&&E?(r.track({type:0,doc:E}),D=!0):g&&!E&&(r.track({type:1,doc:g}),D=!0,(c||h)&&(l=!0)),D&&(E?(o=o.add(E),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(E,x){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(E)-k(x)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new gs(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $d,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new pg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new fg(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return gs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class D0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class k0{constructor(e){this.key=e,this.va=!1}}class O0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new bs(l=>km(l),Ra),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(se.comparator),this.Na=new Map,this.La=new eu,this.Ba={},this.ka=new Map,this.qa=ms.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function V0(t,e,n=!0){const r=Eg(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await mg(r,e,n,!0),s}async function N0(t,e){const n=Eg(t);await mg(n,e,!0,!1)}async function mg(t,e,n,r){const s=await r0(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await M0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&sg(t.remoteStore,s),l}async function M0(t,e,n,r,s){t.Ka=(p,g,E)=>async function(k,D,C,M){let V=D.view.ma(C);V.ns&&(V=await Ud(k.localStore,D.query,!1).then(({documents:A})=>D.view.ma(A,V)));const H=M&&M.targetChanges.get(D.targetId),ne=M&&M.targetMismatches.get(D.targetId)!=null,ge=D.view.applyChanges(V,k.isPrimaryClient,H,ne);return Kd(k,D.targetId,ge.wa),ge.snapshot}(t,p,g,E);const i=await Ud(t.localStore,e,!0),o=new x0(e,i.Ts),l=o.ma(i.documents),c=Bi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Kd(t,n,h.wa);const d=new D0(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function L0(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ra(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ic(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ru(r.remoteStore,s.targetId),ac(r,s.targetId)}).catch(Li)):(ac(r,s.targetId),await ic(r.localStore,s.targetId,!0))}async function F0(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ru(n.remoteStore,r.targetId))}async function U0(t,e,n){const r=W0(t);try{const s=await function(o,l){const c=de(o),h=tt.now(),d=l.reduce((E,x)=>E.add(x.key),ve());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let x=Ln(),k=ve();return c.cs.getEntries(E,d).next(D=>{x=D,x.forEach((C,M)=>{M.isValidDocument()||(k=k.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,x)).next(D=>{p=D;const C=[];for(const M of l){const V=aw(M,p.get(M.key).overlayedDocument);V!=null&&C.push(new fr(M.key,V,bm(V.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(E,h,C,l)}).next(D=>{g=D;const C=D.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(E,D.batchId,C)})}).then(()=>({batchId:g.batchId,changes:Nm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new qe(be)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await qi(r,s.changes),await Oa(r.remoteStore)}catch(s){const i=lu(s,"Failed to persist write");n.reject(i)}}async function gg(t,e){const n=de(t);try{const r=await e0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ce(o.va):s.removedDocuments.size>0&&(Ce(o.va),o.va=!1))}),await qi(n,r,e)}catch(r){await Li(r)}}function Wd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&cu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B0(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new qe(se.comparator);o=o.insert(i,Et.newNoDocument(i,he.min()));const l=ve().add(i),c=new xa(he.min(),new Map,new qe(be),o,l);await gg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),uu(r)}else await ic(r.localStore,e,!1).then(()=>ac(r,e,n)).catch(Li)}async function j0(t,e){const n=de(t),r=e.batch.batchId;try{const s=await Zw(n.localStore,e);yg(n,r,null),_g(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qi(n,s)}catch(s){await Li(s)}}async function q0(t,e,n){const r=de(t);try{const s=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ce(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);yg(r,e,n),_g(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qi(r,s)}catch(s){await Li(s)}}function _g(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function yg(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ac(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||vg(t,r)})}function vg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ru(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),uu(t))}function Kd(t,e,n){for(const r of n)r instanceof fg?(t.La.addReference(r.key,e),$0(t,r)):r instanceof pg?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||vg(t,r.key)):ue()}function $0(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),uu(t))}function uu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new k0(n)),t.Oa=t.Oa.insert(n,r),sg(t.remoteStore,new nr(ln(Gc(n.path)),r,"TargetPurposeLimboResolution",qc.oe))}}async function qi(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=nu.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=de(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(h,g=>$.forEach(g.$i,E=>d.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>$.forEach(g.Ui,E=>d.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!Fi(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const E=d.os.get(g),x=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(x);d.os=d.os.insert(g,k)}}}(r.localStore,i))}async function H0(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await eg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new te(q.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(n,r.hs)}}function z0(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let s=ve();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function Eg(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B0.bind(null,e),e.Ca.d_=P0.bind(null,e.eventManager),e.Ca.$a=C0.bind(null,e.eventManager),e}function W0(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q0.bind(null,e),e}class Zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Da(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Xw(this.persistence,new Jw,e.initialUser,this.serializer)}Ga(e){return new Kw(tu.Zr,this.serializer)}Wa(e){return new i0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zo.provider={build:()=>new Zo};class lc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=H0.bind(null,this.syncEngine),await b0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new S0}()}createDatastore(e){const n=Da(e.databaseInfo.databaseId),r=function(i){return new c0(i)}(e.databaseInfo);return function(i,o,l,c){return new d0(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new p0(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Wd(this.syncEngine,n,0),function(){return jd.D()?new jd:new o0}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new O0(s,i,o,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ji(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}lc.provider={build:()=>new lc};/**
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
 */class Tg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class K0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Im.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bl(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await eg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await G0(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>qd(e.remoteStore,s)),t._onlineComponents=e}async function G0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await bl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;hs("Error using user provided cache. Falling back to memory cache: "+n),await bl(t,new Zo)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await bl(t,new Zo);return t._offlineComponents}async function Ig(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Gd(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Gd(t,new lc))),t._onlineComponents}function Q0(t){return Ig(t).then(e=>e.syncEngine)}async function wg(t){const e=await Ig(t),n=e.eventManager;return n.onListen=V0.bind(null,e.syncEngine),n.onUnlisten=L0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=N0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=F0.bind(null,e.syncEngine),n}function J0(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new Tg({next:g=>{d.Za(),o.enqueueAndForget(()=>hg(i,p));const E=g.docs.has(l);!E&&g.fromCache?h.reject(new te(q.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&c&&c.source==="server"?h.reject(new te(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new dg(Gc(l.path),d,{includeMetadataChanges:!0,_a:!0});return ug(i,p)}(await wg(t),t.asyncQueue,e,n,r)),r.promise}function Y0(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new Tg({next:g=>{d.Za(),o.enqueueAndForget(()=>hg(i,p)),g.fromCache&&c.source==="server"?h.reject(new te(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new dg(l,d,{includeMetadataChanges:!0,_a:!0});return ug(i,p)}(await wg(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ag(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Qd=new Map;/**
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
 */function bg(t,e,n){if(!n)throw new te(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function X0(t,e,n,r){if(e===!0&&r===!0)throw new te(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jd(t){if(!se.isDocumentKey(t))throw new te(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yd(t){if(se.isDocumentKey(t))throw new te(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hu(t);throw new te(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}X0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ag((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Va{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mI;switch(r.type){case"firstParty":return new vI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Qd.delete(n),r.terminate())}(this),Promise.resolve()}}function Z0(t,e,n,r={}){var s;const i=(t=Xt(t,Va))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=yt.MOCK_USER;else{l=$E(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new te(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new yt(h)}t._authCredentials=new gI(new Tm(l,c))}}/**
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
 */class Na{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Na(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class or extends Na{constructor(e,n,r){super(e,n,Gc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new se(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function Rg(t,e,...n){if(t=ht(t),bg("collection","path",e),t instanceof Va){const r=Fe.fromString(e,...n);return Yd(r),new or(t,null,r)}{if(!(t instanceof Vt||t instanceof or))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Yd(r),new or(t.firestore,null,r)}}function cc(t,e,...n){if(t=ht(t),arguments.length===1&&(e=Im.newId()),bg("doc","path",e),t instanceof Va){const r=Fe.fromString(e,...n);return Jd(r),new Vt(t,null,new se(r))}{if(!(t instanceof Vt||t instanceof or))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Jd(r),new Vt(t.firestore,t instanceof or?t.converter:null,new se(r))}}/**
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
 */class Zd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ng(this,"async_queue_retry"),this.Vu=()=>{const r=Al();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Al();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Al();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new xn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Fi(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=au.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Fr extends Va{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Zd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zd(e),this._firestoreClient=void 0,await e}}}function eA(t,e){const n=typeof t=="object"?t:dm(),r=typeof t=="string"?t:"(default)",s=Bc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jE("firestore");i&&Z0(s,...i)}return s}function du(t){if(t._terminated)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tA(t),t._firestoreClient}function tA(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new kI(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ag(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new K0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(dt.fromBase64String(e))}catch(n){throw new te(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ma{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fu{constructor(e){this._methodName=e}}/**
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
 */class pu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class mu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const nA=/^__.*__$/;class rA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ui(e,this.data,n,this.fieldTransforms)}}class Sg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Pg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class gu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ea(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Pg(this.Cu)&&nA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Da(e)}Qu(e,n,r,s=!1){return new gu({Cu:e,methodName:n,qu:r,path:at.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _u(t){const e=t._freezeSettings(),n=Da(t._databaseId);return new sA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cg(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);yu("Data must be an object, but it was:",o,r);const l=xg(r,o);let c,h;if(i.merge)c=new Ut(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=uc(e,p,n);if(!o.contains(g))throw new te(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);kg(d,g)||d.push(g)}c=new Ut(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new rA(new Ot(l),c,h)}class La extends fu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof La}}function iA(t,e,n,r){const s=t.Qu(1,e,n);yu("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();Mr(r,(c,h)=>{const d=vu(e,c,n);h=ht(h);const p=s.Nu(d);if(h instanceof La)i.push(d);else{const g=Fa(h,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Ut(i);return new Sg(o,l,s.fieldTransforms)}function oA(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[uc(e,r,n)],c=[s];if(i.length%2!=0)throw new te(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(uc(e,i[g])),c.push(i[g+1]);const h=[],d=Ot.empty();for(let g=l.length-1;g>=0;--g)if(!kg(h,l[g])){const E=l[g];let x=c[g];x=ht(x);const k=o.Nu(E);if(x instanceof La)h.push(E);else{const D=Fa(x,k);D!=null&&(h.push(E),d.set(E,D))}}const p=new Ut(h);return new Sg(d,p,o.fieldTransforms)}function Fa(t,e){if(Dg(t=ht(t)))return yu("Unsupported field value:",e,t),xg(t,e);if(t instanceof fu)return function(r,s){if(!Pg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Fa(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:Yo(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yo(s.serializer,i)}}if(r instanceof pu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _s)return{bytesValue:Km(s.serializer,r._byteString)};if(r instanceof Vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Qc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${hu(r)}`)}(t,e)}function xg(t,e){const n={};return wm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,s)=>{const i=Fa(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Dg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof pu||t instanceof _s||t instanceof Vt||t instanceof fu||t instanceof mu)}function yu(t,e,n){if(!Dg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=hu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function uc(t,e,n){if((e=ht(e))instanceof Ma)return e._internalPath;if(typeof e=="string")return vu(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const aA=new RegExp("[~\\*/\\[\\]]");function vu(t,e,n){if(e.search(aA)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ma(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te(q.INVALID_ARGUMENT,l+t+c)}function kg(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Og{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lA extends Og{data(){return super.data()}}function Vg(t,e){return typeof e=="string"?vu(t,e):e instanceof Ma?e._internalPath:e._delegate._internalPath}/**
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
 */function cA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uA{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ke(o.doubleValue));return new mu(i)}convertGeoPoint(e){return new pu(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=cr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Ce(Zm(r));const s=new Ai(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Ng(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mg extends Og{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ro extends Mg{data(e={}){return super.data(e)}}class hA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ro(this._firestore,this._userDataWriter,r.key,r,new Zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ro(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ro(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:dA(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
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
 */function fA(t){t=Xt(t,Vt);const e=Xt(t.firestore,Fr);return J0(du(e),t._key).then(n=>mA(e,t,n))}class Lg extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function Fg(t){t=Xt(t,Na);const e=Xt(t.firestore,Fr),n=du(e),r=new Lg(e);return cA(t._query),Y0(n,t._query).then(s=>new hA(e,r,t,s))}function pA(t,e,n){t=Xt(t,Vt);const r=Xt(t.firestore,Fr),s=Ng(t.converter,e,n);return Ua(r,[Cg(_u(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wt.none())])}function iC(t,e,n,...r){t=Xt(t,Vt);const s=Xt(t.firestore,Fr),i=_u(s);let o;return o=typeof(e=ht(e))=="string"||e instanceof Ma?oA(i,"updateDoc",t._key,e,n,r):iA(i,"updateDoc",t._key,e),Ua(s,[o.toMutation(t._key,Wt.exists(!0))])}function oC(t){return Ua(Xt(t.firestore,Fr),[new Jc(t._key,Wt.none())])}function aC(t,e){const n=Xt(t.firestore,Fr),r=cc(t),s=Ng(t.converter,e);return Ua(n,[Cg(_u(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function Ua(t,e){return function(r,s){const i=new xn;return r.asyncQueue.enqueueAndForget(async()=>U0(await Q0(r),s,i)),i.promise}(du(t),e)}function mA(t,e,n){const r=n.docs.get(e._key),s=new Lg(t);return new Mg(t,s,e._key,r,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){As=s})(ws),us(new xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Fr(new _I(r.getProvider("auth-internal")),new TI(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ir(yd,"4.7.3",e),ir(yd,"4.7.3","esm2017")})();function Eu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ug(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gA=Ug,Bg=new Ni("auth","Firebase",Ug());/**
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
 */const ta=new Fc("@firebase/auth");function _A(t,...e){ta.logLevel<=Ee.WARN&&ta.warn(`Auth (${ws}): ${t}`,...e)}function So(t,...e){ta.logLevel<=Ee.ERROR&&ta.error(`Auth (${ws}): ${t}`,...e)}/**
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
 */function Zt(t,...e){throw Tu(t,...e)}function un(t,...e){return Tu(t,...e)}function jg(t,e,n){const r=Object.assign(Object.assign({},gA()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return jg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bg.create(t,...e)}function le(t,e,...n){if(!t)throw Tu(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function Fn(t,e){t||bn(e)}/**
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
 */function hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yA(){return ef()==="http:"||ef()==="https:"}function ef(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yA()||KE()||"connection"in navigator)?navigator.onLine:!0}function EA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $i{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=HE()||GE()}get(){return vA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Iu(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IA=new $i(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pr(t,e,n,r,s={}){return $g(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Mi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return WE()||(h.referrerPolicy="no-referrer"),qg.fetch()(Hg(t,t.config.apiHost,n,l),h)})}async function $g(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TA),e);try{const s=new AA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw go(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jg(t,d,h);Zt(t,d)}}catch(s){if(s instanceof Bn)throw s;Zt(t,"network-request-failed",{message:String(s)})}}async function Ba(t,e,n,r,s={}){const i=await pr(t,e,n,r,s);return"mfaPendingCredential"in i&&Zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Hg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Iu(t.config,s):`${t.config.apiScheme}://${s}`}function wA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),IA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function tf(t){return t!==void 0&&t.enterprise!==void 0}class bA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RA(t,e){return pr(t,"GET","/v2/recaptchaConfig",Ur(t,e))}/**
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
 */async function SA(t,e){return pr(t,"POST","/v1/accounts:delete",e)}async function zg(t,e){return pr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PA(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=wu(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:di(Rl(s.auth_time)),issuedAtTime:di(Rl(s.iat)),expirationTime:di(Rl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Rl(t){return Number(t)*1e3}function wu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const s=im(n);return s?JSON.parse(s):(So("Failed to decode base64 JWT payload"),null)}catch(s){return So("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nf(t){const e=wu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&CA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pi(t,zg(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wg(i.providerUserInfo):[],l=kA(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new dc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function DA(t){const e=ht(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wg(t){return t.map(e=>{var{providerId:n}=e,r=Eu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function OA(t,e){const n=await $g(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Hg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VA(t,e){return pr(t,"POST","/v2/accounts:revokeToken",Ur(t,e))}/**
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
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=nf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await OA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ss;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function Wn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PA(this,e)}reload(){return DA(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await Pi(this,SA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(h=n.createdAt)!==null&&h!==void 0?h:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:V,emailVerified:H,isAnonymous:ne,providerData:ge,stsTokenManager:A}=n;le(V&&A,e,"internal-error");const _=ss.fromJSON(this.name,A);le(typeof V=="string",e,"internal-error"),Wn(p,e.name),Wn(g,e.name),le(typeof H=="boolean",e,"internal-error"),le(typeof ne=="boolean",e,"internal-error"),Wn(E,e.name),Wn(x,e.name),Wn(k,e.name),Wn(D,e.name),Wn(C,e.name),Wn(M,e.name);const v=new Rn({uid:V,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:ne,photoURL:x,phoneNumber:E,tenantId:k,stsTokenManager:_,createdAt:C,lastLoginAt:M});return ge&&Array.isArray(ge)&&(v.providerData=ge.map(w=>Object.assign({},w))),D&&(v._redirectEventId=D),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new ss;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ss;l.updateFromIdToken(r);const c=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new dc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const rf=new Map;function Sn(t){Fn(t instanceof Function,"Expected a class definition");let e=rf.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rf.set(t,e),e)}/**
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
 */class Kg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kg.type="NONE";const sf=Kg;/**
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
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Po(this.userKey,s.apiKey,i),this.fullPersistenceKey=Po("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(Sn(sf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Sn(sf);const o=Po(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Rn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new is(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new is(i,e,r))}}/**
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
 */function of(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zg(e))return"Blackberry";if(e_(e))return"Webos";if(Qg(e))return"Safari";if((e.includes("chrome/")||Jg(e))&&!e.includes("edge/"))return"Chrome";if(Xg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gg(t=It()){return/firefox\//i.test(t)}function Qg(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jg(t=It()){return/crios\//i.test(t)}function Yg(t=It()){return/iemobile/i.test(t)}function Xg(t=It()){return/android/i.test(t)}function Zg(t=It()){return/blackberry/i.test(t)}function e_(t=It()){return/webos/i.test(t)}function Au(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NA(t=It()){var e;return Au(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MA(){return QE()&&document.documentMode===10}function t_(t=It()){return Au(t)||Xg(t)||e_(t)||Zg(t)||/windows phone/i.test(t)||Yg(t)}/**
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
 */function n_(t,e=[]){let n;switch(t){case"Browser":n=of(It());break;case"Worker":n=`${of(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
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
 */class LA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function FA(t,e={}){return pr(t,"GET","/v2/passwordPolicy",Ur(t,e))}/**
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
 */const UA=6;class BA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class jA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new af(this),this.idTokenSubscription=new af(this),this.beforeStateQueue=new LA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zg(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(An(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(ar(this));const n=e?ht(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FA(this),n=new BA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=n_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_A(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ss(t){return ht(t)}class af{constructor(e){this.auth=e,this.observer=null,this.addObserver=rT(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qA(t){ja=t}function r_(t){return ja.loadJS(t)}function $A(){return ja.recaptchaEnterpriseScript}function HA(){return ja.gapiScript}function zA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WA="recaptcha-enterprise",KA="NO_RECAPTCHA";class GA{constructor(e){this.type=WA,this.auth=Ss(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{RA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new bA(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;tf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(KA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&tf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=$A();c.length!==0&&(c+=l),r_(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function lf(t,e,n,r=!1){const s=new GA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function cf(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await lf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await lf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function QA(t,e){const n=Bc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ho(i,e??{}))return s;Zt(s,"already-initialized")}return n.initialize({options:e})}function JA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YA(t,e,n){const r=Ss(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=s_(e),{host:o,port:l}=XA(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ZA()}function s_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XA(t){const e=s_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:uf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:uf(o)}}}function uf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function eb(t,e){return pr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function tb(t,e){return Ba(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
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
 */async function nb(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function rb(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
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
 */class Ci extends bu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cf(e,n,"signInWithPassword",tb);case"emailLink":return nb(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cf(e,r,"signUpPassword",eb);case"emailLink":return rb(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function os(t,e){return Ba(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
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
 */const sb="http://localhost";class Vr extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:sb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
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
 */function ib(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ob(t){const e=Gs(Qs(t)).link,n=e?Gs(Qs(e)).deep_link_id:null,r=Gs(Qs(t)).deep_link_id;return(r?Gs(Qs(r)).link:null)||r||n||e||t}class Ru{constructor(e){var n,r,s,i,o,l;const c=Gs(Qs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=ib((s=c.mode)!==null&&s!==void 0?s:null);le(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ob(e);try{return new Ru(n)}catch{return null}}}/**
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
 */class Ps{constructor(){this.providerId=Ps.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ru.parseLink(n);return le(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}Ps.PROVIDER_ID="password";Ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class i_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hi extends i_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xn extends Hi{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class er extends Hi{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
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
 */class tr extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
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
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=hf(r);return new ys({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=hf(r);return new ys({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function hf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ra extends Bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ra(e,n,r,s)}}function o_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ra._fromErrorAndOperation(t,i,e,r):i})}async function ab(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ys._forOperation(t,"link",r)}/**
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
 */async function lb(t,e,n=!1){const{auth:r}=t;if(An(r.app))return Promise.reject(ar(r));const s="reauthenticate";try{const i=await Pi(t,o_(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=wu(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),ys._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
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
 */async function a_(t,e,n=!1){if(An(t.app))return Promise.reject(ar(t));const r="signIn",s=await o_(t,r,e),i=await ys._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cb(t,e){return a_(Ss(t),e)}/**
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
 */async function ub(t){const e=Ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function hb(t,e,n){return An(t.app)?Promise.reject(ar(t)):cb(ht(t),Ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ub(t),r})}function db(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function fb(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function pb(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}function mb(t){return ht(t).signOut()}const sa="__sak";/**
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
 */class l_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gb=1e3,_b=10;class c_ extends l_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=t_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);MA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_b):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}c_.type="LOCAL";const yb=c_;/**
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
 */class u_ extends l_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u_.type="SESSION";const h_=u_;/**
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
 */function vb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await vb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
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
 */function Su(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Eb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Su("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function Tb(t){hn().location.href=t}/**
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
 */function d_(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function Ib(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ab(){return d_()?self:null}/**
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
 */const f_="firebaseLocalStorageDb",bb=1,ia="firebaseLocalStorage",p_="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(t,e){return t.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function Rb(){const t=indexedDB.deleteDatabase(f_);return new zi(t).toPromise()}function fc(){const t=indexedDB.open(f_,bb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ia,{keyPath:p_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ia)?e(r):(r.close(),await Rb(),e(await fc()))})})}async function df(t,e,n){const r=$a(t,!0).put({[p_]:e,value:n});return new zi(r).toPromise()}async function Sb(t,e){const n=$a(t,!1).get(e),r=await new zi(n).toPromise();return r===void 0?null:r.value}function ff(t,e){const n=$a(t,!0).delete(e);return new zi(n).toPromise()}const Pb=800,Cb=3;class m_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Cb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(Ab()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ib(),!this.activeServiceWorker)return;this.sender=new Eb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fc();return await df(e,sa,"1"),await ff(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ff(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$a(s,!1).getAll();return new zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m_.type="LOCAL";const xb=m_;new $i(3e4,6e4);/**
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
 */function Db(t,e){return e?Sn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pu extends bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kb(t){return a_(t.auth,new Pu(t),t.bypassAuthState)}function Ob(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),lb(n,new Pu(t),t.bypassAuthState)}async function Vb(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),ab(n,new Pu(t),t.bypassAuthState)}/**
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
 */class g_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kb;case"linkViaPopup":case"linkViaRedirect":return Vb;case"reauthViaPopup":case"reauthViaRedirect":return Ob;default:Zt(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Nb=new $i(2e3,1e4);class Xr extends g_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nb.get())};e()}}Xr.currentPopupAction=null;/**
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
 */const Mb="pendingRedirect",Co=new Map;class Lb extends g_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await Fb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fb(t,e){const n=jb(e),r=Bb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ub(t,e){Co.set(t._key(),e)}function Bb(t){return Sn(t._redirectPersistence)}function jb(t){return Po(Mb,t.config.apiKey,t.name)}async function qb(t,e,n=!1){if(An(t.app))return Promise.reject(ar(t));const r=Ss(t),s=Db(r,e),o=await new Lb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $b=10*60*1e3;class Hb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!__(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$b&&this.cachedEventUids.clear(),this.cachedEventUids.has(pf(e))}saveEventToCache(e){this.cachedEventUids.add(pf(e)),this.lastProcessedEventTime=Date.now()}}function pf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function __({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return __(t);default:return!1}}/**
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
 */async function Wb(t,e={}){return pr(t,"GET","/v1/projects",e)}/**
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
 */const Kb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gb=/^https?/;async function Qb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wb(t);for(const n of e)try{if(Jb(n))return}catch{}Zt(t,"unauthorized-domain")}function Jb(t){const e=hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gb.test(n))return!1;if(Kb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Yb=new $i(3e4,6e4);function mf(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xb(t){return new Promise((e,n)=>{var r,s,i;function o(){mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mf(),n(un(t,"network-request-failed"))},timeout:Yb.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const l=zA("iframefcb");return hn()[l]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},r_(`${HA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw xo=null,e})}let xo=null;function Zb(t){return xo=xo||Xb(t),xo}/**
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
 */const eR=new $i(5e3,15e3),tR="__/auth/iframe",nR="emulator/auth/iframe",rR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iR(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Iu(e,nR):`https://${t.config.authDomain}/${tR}`,r={apiKey:e.apiKey,appName:t.name,v:ws},s=sR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mi(r).slice(1)}`}async function oR(t){const e=await Zb(t),n=hn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:iR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=hn().setTimeout(()=>{i(o)},eR.get());function c(){hn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const aR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lR=500,cR=600,uR="_blank",hR="http://localhost";class gf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dR(t,e,n,r=lR,s=cR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},aR),{width:r.toString(),height:s.toString(),top:i,left:o}),h=It().toLowerCase();n&&(l=Jg(h)?uR:n),Gg(h)&&(e=e||hR,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[E,x])=>`${g}${E}=${x},`,"");if(NA(h)&&l!=="_self")return fR(e||"",l),new gf(null);const p=window.open(e||"",l,d);le(p,t,"popup-blocked");try{p.focus()}catch{}return new gf(p)}function fR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pR="__/auth/handler",mR="emulator/auth/handler",gR=encodeURIComponent("fac");async function _f(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:s};if(e instanceof i_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Hi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${gR}=${encodeURIComponent(c)}`:"";return`${_R(t)}?${Mi(l).slice(1)}${h}`}function _R({config:t}){return t.emulator?Iu(t,mR):`https://${t.authDomain}/${pR}`}/**
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
 */const Sl="webStorageSupport";class yR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h_,this._completeRedirectFn=qb,this._overrideRedirectResult=Ub}async _openPopup(e,n,r,s){var i;Fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _f(e,n,r,hc(),s);return dR(e,o,Su())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _f(e,n,r,hc(),s);return Tb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oR(e),r=new Hb(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sl,{type:Sl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Sl];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return t_()||Qg()||Au()}}const vR=yR;var yf="@firebase/auth",vf="1.7.9";/**
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
 */class ER{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IR(t){us(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:n_(t)},h=new jA(r,s,i,c);return JA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),us(new xr("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(r=>new ER(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(yf,vf,TR(t)),ir(yf,vf,"esm2017")}/**
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
 */const wR=5*60,AR=lm("authIdTokenMaxAge")||wR;let Ef=null;const bR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AR)return;const s=n==null?void 0:n.token;Ef!==s&&(Ef=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RR(t=dm()){const e=Bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QA(t,{popupRedirectResolver:vR,persistence:[xb,yb,h_]}),r=lm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=bR(i.toString());fb(n,o,()=>o(n.currentUser)),db(n,l=>o(l))}}const s=om("auth");return s&&YA(n,`http://${s}`),n}function SR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",SR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IR("Browser");const PR={apiKey:"AIzaSyDUGIn21XwIqVpZdZei6t-bmLz_CP_6ivU",authDomain:"agenda-de-discurso.firebaseapp.com",projectId:"agenda-de-discurso",storageBucket:"agenda-de-discurso.firebasestorage.app",messagingSenderId:"462407232641",appId:"1:462407232641:web:118fd89d2bb7dfbafcf180"},y_=hm(PR),Do=eA(y_),pc=RR(y_),CR="modulepreload",xR=function(t){return"/agenda-discursos/"+t},Tf={},_o=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=xR(c),c in Tf)return;Tf[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":CR,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,E)=>{p.addEventListener("load",g),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Yr=typeof document<"u";function v_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function DR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&v_(t.default)}const Se=Object.assign;function Pl(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const fi=()=>{},en=Array.isArray;function If(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const E_=/#/g,kR=/&/g,OR=/\//g,VR=/=/g,NR=/\?/g,T_=/\+/g,MR=/%5B/g,LR=/%5D/g,I_=/%5E/g,FR=/%60/g,w_=/%7B/g,UR=/%7C/g,A_=/%7D/g,BR=/%20/g;function Cu(t){return t==null?"":encodeURI(""+t).replace(UR,"|").replace(MR,"[").replace(LR,"]")}function jR(t){return Cu(t).replace(w_,"{").replace(A_,"}").replace(I_,"^")}function mc(t){return Cu(t).replace(T_,"%2B").replace(BR,"+").replace(E_,"%23").replace(kR,"%26").replace(FR,"`").replace(w_,"{").replace(A_,"}").replace(I_,"^")}function qR(t){return mc(t).replace(VR,"%3D")}function $R(t){return Cu(t).replace(E_,"%23").replace(NR,"%3F")}function HR(t){return $R(t).replace(OR,"%2F")}function xi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const zR=/\/$/,WR=t=>t.replace(zR,"");function Cl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=JR(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:xi(o)}}function KR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vs(e.matched[r],n.matched[s])&&b_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function b_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!QR(t[n],e[n]))return!1;return!0}function QR(t,e){return en(t)?Af(t,e):en(e)?Af(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Af(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function JR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let gc=function(t){return t.pop="pop",t.push="push",t}({}),xl=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function YR(t){if(!t)if(Yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),WR(t)}const XR=/^[^#]+#/;function ZR(t,e){return t.replace(XR,"#")+e}function eS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ha=()=>({left:window.scrollX,top:window.scrollY});function tS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=eS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function bf(t,e){return(history.state?history.state.position-e:-1)+t}const _c=new Map;function nS(t,e){_c.set(t,e)}function rS(t){const e=_c.get(t);return _c.delete(t),e}function sS(t){return typeof t=="string"||t&&typeof t=="object"}function R_(t){return typeof t=="string"||typeof t=="symbol"}let He=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const S_=Symbol("");He.MATCHER_NOT_FOUND+"",He.NAVIGATION_GUARD_REDIRECT+"",He.NAVIGATION_ABORTED+"",He.NAVIGATION_CANCELLED+"",He.NAVIGATION_DUPLICATED+"";function Es(t,e){return Se(new Error,{type:t,[S_]:!0},e)}function yn(t,e){return t instanceof Error&&S_ in t&&(e==null||!!(t.type&e))}const iS=["params","query","hash"];function oS(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of iS)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function aS(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(T_," "),i=s.indexOf("="),o=xi(i<0?s:s.slice(0,i)),l=i<0?null:xi(s.slice(i+1));if(o in e){let c=e[o];en(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Rf(t){let e="";for(let n in t){const r=t[n];if(n=qR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(s=>s&&mc(s)):[r&&mc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function lS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const cS=Symbol(""),Sf=Symbol(""),za=Symbol(""),xu=Symbol(""),yc=Symbol("");function Ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Jn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(Es(He.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?c(g):sS(g)?c(Es(He.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function Dl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(v_(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Jn(h,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=DR(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&Jn(g,n,r,o,l,s)()}))}}return i}function uS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>vs(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>vs(h,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hS=()=>location.protocol+"//"+location.host;function P_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),wf(l,"")}return wf(n,t)+r+s}function dS(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const E=P_(t,location),x=n.value,k=e.value;let D=0;if(g){if(n.value=E,e.value=g,o&&o===x){o=null;return}D=k?g.position-k.position:0}else r(E);s.forEach(C=>{C(n.value,x,{delta:D,type:gc.pop,direction:D?D>0?xl.forward:xl.back:xl.unknown})})};function c(){o=n.value}function h(g){s.push(g);const E=()=>{const x=s.indexOf(g);x>-1&&s.splice(x,1)};return i.push(E),E}function d(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Se({},g.state,{scroll:Ha()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:h,destroy:p}}function Pf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ha():null}}function fS(t){const{history:e,location:n}=window,r={value:P_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:hS()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(E){console.error(E),n[d?"replace":"assign"](g)}}function o(c,h){i(c,Se({},e.state,Pf(s.value.back,c,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=c}function l(c,h){const d=Se({},s.value,e.state,{forward:c,scroll:Ha()});i(d.current,d,!0),i(c,Se({},Pf(r.value,c,null),{position:d.position+1},h),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function pS(t){t=YR(t);const e=fS(t),n=dS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:ZR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let br=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Xe=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Xe||{});const mS={type:br.Static,value:""},gS=/[a-zA-Z0-9_]/;function _S(t){if(!t)return[[]];if(t==="/")return[[mS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=Xe.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===Xe.Static?i.push({type:br.Static,value:h}):n===Xe.Param||n===Xe.ParamRegExp||n===Xe.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:br.Param,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Xe.ParamRegExp){r=n,n=Xe.EscapeNext;continue}switch(n){case Xe.Static:c==="/"?(h&&p(),o()):c===":"?(p(),n=Xe.Param):g();break;case Xe.EscapeNext:g(),n=r;break;case Xe.Param:c==="("?n=Xe.ParamRegExp:gS.test(c)?g():(p(),n=Xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Xe.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=Xe.ParamRegExpEnd:d+=c;break;case Xe.ParamRegExpEnd:p(),n=Xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===Xe.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const Cf="[^/]+?",yS={sensitive:!1,strict:!1,start:!0,end:!0};var bt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(bt||{});const vS=/[.+*?^${}()[\]/\\]/g;function ES(t,e){const n=Se({},yS,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[bt.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let E=bt.Segment+(n.sensitive?bt.BonusCaseSensitive:0);if(g.type===br.Static)p||(s+="/"),s+=g.value.replace(vS,"\\$&"),E+=bt.Static;else if(g.type===br.Param){const{value:x,repeatable:k,optional:D,regexp:C}=g;i.push({name:x,repeatable:k,optional:D});const M=C||Cf;if(M!==Cf){E+=bt.BonusCustomRegExp;try{`${M}`}catch(H){throw new Error(`Invalid custom RegExp for param "${x}" (${M}): `+H.message)}}let V=k?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(V=D&&h.length<2?`(?:/${V})`:"/"+V),D&&(V+="?"),s+=V,E+=bt.Dynamic,D&&(E+=bt.BonusOptional),k&&(E+=bt.BonusRepeatable),M===".*"&&(E+=bt.BonusWildcard)}d.push(E)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=bt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const E=d[g]||"",x=i[g-1];p[x.name]=E&&x.repeatable?E.split("/"):E}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const E of g)if(E.type===br.Static)d+=E.value;else if(E.type===br.Param){const{value:x,repeatable:k,optional:D}=E,C=x in h?h[x]:"";if(en(C)&&!k)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const M=en(C)?C.join("/"):C;if(!M)if(D)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function TS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===bt.Static+bt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===bt.Static+bt.Segment?1:-1:0}function C_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=TS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xf(r))return 1;if(xf(s))return-1}return s.length-r.length}function xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const IS={strict:!1,end:!0,sensitive:!1};function wS(t,e,n){const r=ES(_S(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function AS(t,e){const n=[],r=new Map;e=If(IS,e);function s(p){return r.get(p)}function i(p,g,E){const x=!E,k=kf(p);k.aliasOf=E&&E.record;const D=If(e,p),C=[k];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ne of H)C.push(kf(Se({},k,{components:E?E.record.components:k.components,path:ne,aliasOf:E?E.record:k})))}let M,V;for(const H of C){const{path:ne}=H;if(g&&ne[0]!=="/"){const ge=g.record.path,A=ge[ge.length-1]==="/"?"":"/";H.path=g.record.path+(ne&&A+ne)}if(M=wS(H,g,D),E?E.alias.push(M):(V=V||M,V!==M&&V.alias.push(M),x&&p.name&&!Of(M)&&o(p.name)),x_(M)&&c(M),k.children){const ge=k.children;for(let A=0;A<ge.length;A++)i(ge[A],M,E&&E.children[A])}E=E||M}return V?()=>{o(V)}:fi}function o(p){if(R_(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=SS(p,n);n.splice(g,0,p),p.record.name&&!Of(p)&&r.set(p.record.name,p)}function h(p,g){let E,x={},k,D;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw Es(He.MATCHER_NOT_FOUND,{location:p});D=E.record.name,x=Se(Df(g.params,E.keys.filter(V=>!V.optional).concat(E.parent?E.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),p.params&&Df(p.params,E.keys.map(V=>V.name))),k=E.stringify(x)}else if(p.path!=null)k=p.path,E=n.find(V=>V.re.test(k)),E&&(x=E.parse(k),D=E.record.name);else{if(E=g.name?r.get(g.name):n.find(V=>V.re.test(g.path)),!E)throw Es(He.MATCHER_NOT_FOUND,{location:p,currentLocation:g});D=E.record.name,x=Se({},g.params,p.params),k=E.stringify(x)}const C=[];let M=E;for(;M;)C.unshift(M.record),M=M.parent;return{name:D,path:k,params:x,matched:C,meta:RS(C)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Df(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:bS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function bS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RS(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function SS(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;C_(t,e[i])<0?r=i:n=i+1}const s=PS(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function PS(t){let e=t;for(;e=e.parent;)if(x_(e)&&C_(t,e)===0)return e}function x_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Vf(t){const e=zt(za),n=zt(xu),r=Pt(()=>{const c=St(t.to);return e.resolve(c)}),s=Pt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(vs.bind(null,d));if(g>-1)return g;const E=Nf(c[h-2]);return h>1&&Nf(d)===E&&p[p.length-1].path!==E?p.findIndex(vs.bind(null,c[h-2])):g}),i=Pt(()=>s.value>-1&&OS(n.params,r.value.params)),o=Pt(()=>s.value>-1&&s.value===n.matched.length-1&&b_(n.params,r.value.params));function l(c={}){if(kS(c)){const h=e[St(t.replace)?"replace":"push"](St(t.to)).catch(fi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Pt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function CS(t){return t.length===1?t[0]:t}const xS=dr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Vf,setup(t,{slots:e}){const n=ki(Vf(t)),{options:r}=zt(za),s=Pt(()=>({[Mf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Mf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&CS(e.default(n));return t.custom?i:Gp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),DS=xS;function kS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Nf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mf=(t,e,n)=>t??e??n,VS=dr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(yc),s=Pt(()=>t.route||r.value),i=zt(Sf,0),o=Pt(()=>{let h=St(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Pt(()=>s.value.matched[o.value]);vo(Sf,Pt(()=>o.value+1)),vo(cS,l),vo(yc,s);const c=Ze();return ri(()=>[c.value,l.value,t.name],([h,d,p],[g,E,x])=>{d&&(d.instances[p]=h,E&&E!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=E.leaveGuards),d.updateGuards.size||(d.updateGuards=E.updateGuards))),h&&d&&(!E||!vs(d,E)||!g)&&(d.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return Lf(n.default,{Component:g,route:h});const E=p.props[d],x=E?E===!0?h.params:typeof E=="function"?E(h):E:null,D=Gp(g,Se({},x,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Lf(n.default,{Component:D,route:h})||D}}});function Lf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const NS=VS;function MS(t){const e=AS(t.routes,t),n=t.parseQuery||aS,r=t.stringifyQuery||Rf,s=t.history,i=Ws(),o=Ws(),l=Ws(),c=ky(Kn);let h=Kn;Yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Pl.bind(null,L=>""+L),p=Pl.bind(null,HR),g=Pl.bind(null,xi);function E(L,Y){let Q,Z;return R_(L)?(Q=e.getRecordMatcher(L),Z=Y):Z=L,e.addRoute(Z,Q)}function x(L){const Y=e.getRecordMatcher(L);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(L=>L.record)}function D(L){return!!e.getRecordMatcher(L)}function C(L,Y){if(Y=Se({},Y||c.value),typeof L=="string"){const S=Cl(n,L,Y.path),N=e.resolve({path:S.path},Y),U=s.createHref(S.fullPath);return Se(S,N,{params:g(N.params),hash:xi(S.hash),redirectedFrom:void 0,href:U})}let Q;if(L.path!=null)Q=Se({},L,{path:Cl(n,L.path,Y.path).path});else{const S=Se({},L.params);for(const N in S)S[N]==null&&delete S[N];Q=Se({},L,{params:p(S)}),Y.params=p(Y.params)}const Z=e.resolve(Q,Y),_e=L.hash||"";Z.params=d(g(Z.params));const y=KR(r,Se({},L,{hash:jR(_e),path:Z.path})),I=s.createHref(y);return Se({fullPath:y,hash:_e,query:r===Rf?lS(L.query):L.query||{}},Z,{redirectedFrom:void 0,href:I})}function M(L){return typeof L=="string"?Cl(n,L,c.value.path):Se({},L)}function V(L,Y){if(h!==L)return Es(He.NAVIGATION_CANCELLED,{from:Y,to:L})}function H(L){return A(L)}function ne(L){return H(Se(M(L),{replace:!0}))}function ge(L,Y){const Q=L.matched[L.matched.length-1];if(Q&&Q.redirect){const{redirect:Z}=Q;let _e=typeof Z=="function"?Z(L,Y):Z;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=M(_e):{path:_e},_e.params={}),Se({query:L.query,hash:L.hash,params:_e.path!=null?{}:L.params},_e)}}function A(L,Y){const Q=h=C(L),Z=c.value,_e=L.state,y=L.force,I=L.replace===!0,S=ge(Q,Z);if(S)return A(Se(M(S),{state:typeof S=="object"?Se({},_e,S.state):_e,force:y,replace:I}),Y||Q);const N=Q;N.redirectedFrom=Y;let U;return!y&&GR(r,Z,Q)&&(U=Es(He.NAVIGATION_DUPLICATED,{to:N,from:Z}),qt(Z,Z,!0,!1)),(U?Promise.resolve(U):w(N,Z)).catch(F=>yn(F)?yn(F,He.NAVIGATION_GUARD_REDIRECT)?F:Kt(F):ye(F,N,Z)).then(F=>{if(F){if(yn(F,He.NAVIGATION_GUARD_REDIRECT))return A(Se({replace:I},M(F.to),{state:typeof F.to=="object"?Se({},_e,F.to.state):_e,force:y}),Y||N)}else F=R(N,Z,!0,I,_e);return b(N,Z,F),F})}function _(L,Y){const Q=V(L,Y);return Q?Promise.reject(Q):Promise.resolve()}function v(L){const Y=jn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(L):L()}function w(L,Y){let Q;const[Z,_e,y]=uS(L,Y);Q=Dl(Z.reverse(),"beforeRouteLeave",L,Y);for(const S of Z)S.leaveGuards.forEach(N=>{Q.push(Jn(N,L,Y))});const I=_.bind(null,L,Y);return Q.push(I),Dt(Q).then(()=>{Q=[];for(const S of i.list())Q.push(Jn(S,L,Y));return Q.push(I),Dt(Q)}).then(()=>{Q=Dl(_e,"beforeRouteUpdate",L,Y);for(const S of _e)S.updateGuards.forEach(N=>{Q.push(Jn(N,L,Y))});return Q.push(I),Dt(Q)}).then(()=>{Q=[];for(const S of y)if(S.beforeEnter)if(en(S.beforeEnter))for(const N of S.beforeEnter)Q.push(Jn(N,L,Y));else Q.push(Jn(S.beforeEnter,L,Y));return Q.push(I),Dt(Q)}).then(()=>(L.matched.forEach(S=>S.enterCallbacks={}),Q=Dl(y,"beforeRouteEnter",L,Y,v),Q.push(I),Dt(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(Jn(S,L,Y));return Q.push(I),Dt(Q)}).catch(S=>yn(S,He.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function b(L,Y,Q){l.list().forEach(Z=>v(()=>Z(L,Y,Q)))}function R(L,Y,Q,Z,_e){const y=V(L,Y);if(y)return y;const I=Y===Kn,S=Yr?history.state:{};Q&&(Z||I?s.replace(L.fullPath,Se({scroll:I&&S&&S.scroll},_e)):s.push(L.fullPath,_e)),c.value=L,qt(L,Y,Q,I),Kt()}let T;function rt(){T||(T=s.listen((L,Y,Q)=>{if(!Mt.listening)return;const Z=C(L),_e=ge(Z,Mt.currentRoute.value);if(_e){A(Se(_e,{replace:!0,force:!0}),Z).catch(fi);return}h=Z;const y=c.value;Yr&&nS(bf(y.fullPath,Q.delta),Ha()),w(Z,y).catch(I=>yn(I,He.NAVIGATION_ABORTED|He.NAVIGATION_CANCELLED)?I:yn(I,He.NAVIGATION_GUARD_REDIRECT)?(A(Se(M(I.to),{force:!0}),Z).then(S=>{yn(S,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===gc.pop&&s.go(-1,!1)}).catch(fi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(I,Z,y))).then(I=>{I=I||R(Z,y,!1),I&&(Q.delta&&!yn(I,He.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===gc.pop&&yn(I,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(Z,y,I)}).catch(fi)}))}let xt=Ws(),Oe=Ws(),ce;function ye(L,Y,Q){Kt(L);const Z=Oe.list();return Z.length?Z.forEach(_e=>_e(L,Y,Q)):console.error(L),Promise.reject(L)}function Nt(){return ce&&c.value!==Kn?Promise.resolve():new Promise((L,Y)=>{xt.add([L,Y])})}function Kt(L){return ce||(ce=!L,rt(),xt.list().forEach(([Y,Q])=>L?Q(L):Y()),xt.reset()),L}function qt(L,Y,Q,Z){const{scrollBehavior:_e}=t;if(!Yr||!_e)return Promise.resolve();const y=!Q&&rS(bf(L.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return _a().then(()=>_e(L,Y,y)).then(I=>I&&tS(I)).catch(I=>ye(I,L,Y))}const Ue=L=>s.go(L);let Be;const jn=new Set,Mt={currentRoute:c,listening:!0,addRoute:E,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:k,resolve:C,options:t,push:H,replace:ne,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Oe.add,isReady:Nt,install(L){L.component("RouterLink",DS),L.component("RouterView",NS),L.config.globalProperties.$router=Mt,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>St(c)}),Yr&&!Be&&c.value===Kn&&(Be=!0,H(s.location).catch(Z=>{}));const Y={};for(const Z in Kn)Object.defineProperty(Y,Z,{get:()=>c.value[Z],enumerable:!0});L.provide(za,Mt),L.provide(xu,up(Y)),L.provide(yc,c);const Q=L.unmount;jn.add(L),L.unmount=function(){jn.delete(L),jn.size<1&&(h=Kn,T&&T(),T=null,c.value=Kn,Be=!1,ce=!1),Q()}}};function Dt(L){return L.reduce((Y,Q)=>Y.then(()=>v(Q)),Promise.resolve())}return Mt}function Du(){return zt(za)}function lC(t){return zt(xu)}const LS=nm("agenda",()=>{const t=Ze([]),e=Ze(!1),n=Ze(!1);return{agendamentos:t,isLoading:e,isFetched:n,fetchAgendamentos:async(s=!1)=>{if(!(n.value&&!s)){e.value=!0;try{const i=await Fg(Rg(Do,"agendamentos")),o=[];i.forEach(l=>{o.push({id:l.id,...l.data()})}),o.sort((l,c)=>new Date(l.dataDiscurso).getTime()-new Date(c.dataDiscurso).getTime()),t.value=o,n.value=!0}catch(i){console.error("Error fetching agendamentos:",i)}finally{e.value=!1}}}}}),FS={class:"bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"},US={key:0,class:"px-6 py-4 border-b border-gray-50 bg-gray-50/30 flex items-center gap-2"},BS={class:"text-lg font-bold text-gray-800"},jS={class:"p-6"},ko=dr({__name:"BaseCard",props:{title:{},icon:{}},setup(t){return(e,n)=>(me(),Ie("div",FS,[t.title?(me(),Ie("div",US,[t.icon?(me(),Ie("i",{key:0,class:hr([t.icon,"text-blue-500"])},null,2)):wn("",!0),B("h3",BS,Me(t.title),1)])):wn("",!0),B("div",jS,[Ap(e.$slots,"default")])]))}}),qS=["disabled"],vc=dr({__name:"BaseButton",props:{variant:{},block:{type:Boolean},disabled:{type:Boolean}},setup(t){return(e,n)=>(me(),Ie("button",{disabled:t.disabled,class:hr(["inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",t.block?"w-full":"",t.disabled?"opacity-50 cursor-not-allowed":"",!t.variant||t.variant==="primary"?"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":"",t.variant==="secondary"?"bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500":"",t.variant==="danger"?"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500":""])},[Ap(e.$slots,"default")],10,qS))}}),$S=`
1. Você conhece bem a Deus?
2. Você vai sobreviver aos últimos dias?
3. Você está avançando com a organização unida de Jeová?
4. Que provas temos de que Deus existe?
5. Você pode ter uma família feliz!
6. O Dilúvio dos dias de Noé e você
7. Imite a misericórdia de Jeová
8. Viva para fazer a vontade de Deus
9. Escute e faça o que a Bíblia diz
10. Seja honesto em tudo
11. Imite a Jesus e não faça parte do mundo
12. Deus quer que você respeite quem tem autoridade
13. Qual o ponto de vista de Deus sobre o sexo e o casamento?
14. Um povo puro e limpo honra a Jeová
15. 'Faça o bem a todos'
16. Seja cada vez mais amigo de Jeová
17. Glorifique a Deus com tudo o que você tem
18. Faça de Jeová a sua fortaleza
19. Como você pode saber seu futuro?
20. Chegou o tempo de Deus governar o mundo?
21. Dê valor ao seu lugar no Reino de Deus
22. Você está usando bem o que Jeová lhe dá?
23. A vida tem objetivo
24. Você encontrou "uma pérola de grande valor"?
25. Lute contra o espírito do mundo
26. Você é importante para Deus?
27. Como construir um casamento feliz
28. Mostre respeito e amor no seu casamento
29. As responsabilidades e recompensas de ter filhos
30. Como melhorar a comunicação na família
31. Você tem consciência da sua necessidade espiritual?
32. Como lidar com as ansiedades da vida
33. Quando vai existir verdadeira justiça?
34. Você vai ser marcado para sobreviver?
35. É possível viver para sempre? O que você precisa fazer?
36. Será que a vida é só isso?
37. Obedecer a Deus é mesmo a melhor coisa a fazer?
38. Como você pode sobreviver ao fim do mundo?
39. Jesus Cristo vence o mundo Como e quando?
40. O que vai acontecer em breve?
41. Fiquem parados e vejam como Jeová os salvará
42. O amor pode vencer o ódio?
43. Tudo o que Deus nos pede é para o nosso bem
44. Como os ensinos de Jesus podem ajudar você?
45. Continue andando no caminho que leva à vida
46. Fortaleça sua confiança em Jeová
47. 'Tenha fé nas boas novas'
48. Seja leal a Deus mesmo quando for testado
49. Será que um dia a Terra vai ser limpa?
50. Como sempre tomar as melhores decisões
51. Será que a verdade da Bíblia está mudando a sua vida?
52. Quem é o seu Deus?
53. Você pensa como Deus?
54. Fortaleça sua fé em Deus e em suas promessas
55. Você está fazendo um bom nome perante Deus?
56. Existe um líder em quem você pode confiar?
57. Como suportar perseguição
58. Quem são os verdadeiros seguidores de Cristo?
60. Você tem um objetivo na vida?
61. Nas promessas de quem você confia?
62. Onde encontrar uma esperança real para o futuro?
63. É possível encontrar a verdade?
64. Você ama os prazeres ou a Deus?
65. Como podemos ser pacíficos num mundo cheio de ódio
66. Você também vai participar na colheita?
67. Medite na Bíblia e nas criações de Jeová
68. 'Continuem a perdoar uns aos outros liberalmente'
69. Por que mostrar amor abnegado?
70. Por que Deus merece sua confiança?
71. 'Mantenha-se desperto' Por que e como?
72. O amor identifica os cristãos verdadeiros
73. Você tem "um coração sábio"?
74. Os olhos de Jeová estão em todo lugar
75. Mostre que você apoia o direito de Jeová governar
76. Princípios bíblicos Podem nos ajudar a lidar com os problemas atuais?
77. "Sempre mostrem hospitalidade"
78. Sirva a Jeová com um coração alegre
79. Você vai escolher ser amigo de Deus?
80. Você baseia sua esperança na ciência ou na Bíblia?
81. Quem está qualificado para fazer discípulos?
83. Será que os cristãos precisam obedecer aos Dez Mandamentos?
84. Escapará do destino deste mundo?
85. Boas notícias num mundo violento
86. Como orar a Deus e ser ouvido por ele?
87. Qual é a sua relação com Deus?
88. Por que viver de acordo com os padrões da Biblia?
89. Quem tem sede da verdade, venha!
90. Faça o máximo para alcançar a verdadeira vida!
91. A presença do Messias e seu domínio
92. O papel da religião nos assuntos do mundo
93. Desastres naturais Quando vão acabar?
94. A religião verdadeira atende às necessidades da sociedade humana
95. Não seja enganado pelo ocultismo!
96. O que vai acontecer com as religiões?
97. Permaneçamos inculpes em meio a uma geração pervertida
98. "A cena deste mundo está mudando"
99. Por que podemos confiar no que a Bíblia diz?
100. Como fazer amizades fortes e verdadeiras
101. Jeová é o "Grandioso Criador"
102. Preste atenção à "palavra profética"
103. Como você pode ter a verdadeira alegria?
104. Pais, vocês estão construindo com materiais à prova de fogo?
105. Somos consolados em todas as nossas tribulações
106. Arruinar a Terra provocará retribuição divina
108. Você está treinando bem a sua consciência? Você pode encarar o futuro com confiança!
109. O Reino de Deus está próximo
110. Deus vem primeiro na vida familiar bem-sucedida
111. É possível que a humanidade seja completamente curada?
113. Como mostrar amor num mundo egoísta Jovens Como vocês podem ter uma vida feliz?
115. Apreço pelas maravilhas da criação de Deus Não caia nas armadilhas de Satanás
116. Escolha sabiamente com quem irá associar-se!
117. Como vencer o mal com o bem
118. Olhemos os jovens do ponto de vista de Jeová
119. Por que é benéfico que os cristãos separados do mundo vivam
120. Por que se submeter à regência de Deus agora
121. Uma família mundial que será salva da destruição
124. Razões para crer que a Bíblia é de autoria divina
125. Por que a humanidade precisa de resgate
126. Quem se salvará?
127. O que acontece quando morremos?
128. É o inferno um lugar de tormento ardente?
129. O que a Bíblia diz sobre a Trindade?
130. A Terra permanecerá para sempre
131. Tome posição contra o Diabo!
132. Ressurreição - A vitória sobre a morte!
133. Tem importância o que cremos sobre a nossa origem?
134. Será que os cristãos precisam guardar o sábado?
135. A santidade da vida e do sangue
136. Será que Deus aprova o uso de imagens na adoração?
137. Ocorreram realmente os milagres da Bíblia?
138. Viva com bom juízo num mundo depravado
139. Sabedoria divina num mundo científico
140. Quem é realmente Jesus Cristo?
141. Quando terão fim os gemidos da criação humana?
142. Por que refugiar-se em Jeová
143. Confie no Deus de todo consolo
144. Uma congregação leal sob a liderança de Cristo
145. Quem é semelhante a Jeová, nosso Deus?
146. Use a educação para louvar a Jeová
147. Confie que Jeová tem o poder para nos salvar
148. Você tem o mesmo conceito de Deus sobre a vida?
149. O que significa "andar com Deus"?
150. Este mundo está condenado à destruição?
151. Jeová é "uma altura protetora" para seu povo
152. Armagedom Por que e quando?
153. Tenha bem em mente o "atemorizante dia"!
154. O governo humano é pesado na balança
155. Chegou a hora do julgamento de Babilonia?
156. O Dia do Juízo - Tempo de temor ou de esperança?
157. Como os verdadeiros cristãos adornam o ensino divino
158. Seja corajoso e confie em Jeová
159. Como encontrar segurança num mundo perigoso
160. Mantenha a identidade cristā!
161. Por que Jesus sofreu e morreu?
162. Seja liberto deste mundo em escuridão
163. Por que temer o Deus verdadeiro?
164. Será que Deus ainda está no controle?
165. Os valores de quem você preza?
166. Verdadeira fé - O que é e como mostrar
167. Ajamos sabiamente num mundo insensato
168. Você pode sentir-se seguro neste mundo atribulado!
169. Por que ser orientado pela Bíblia?
170. Quem está qualificado para governar a humanidade?
171. Poderá viver em paz agora E para sempre!
172. Que reputação você tem perante Deus?
173. Existe uma religião verdadeira do ponto de vista de Deus?
174. Quem se qualificará para entrar no novo mundo de Deus?
175. O que prova que a Bíblia é autêntica?
176. Quando haverá verdadeira paz e segurança?
177. Onde encontrar ajuda em tempos de aflição?
178. Ande no caminho da integridade
179. Rejeite as fantasias do mundo, empenhe-se pelas realidades do Reino
180. A ressurreição - Por que essa esperança deve ser real para você
181. Já é mais tarde do que você imagina?
182. O que o Reino de Deus está fazendo por nós agora?
183. Desvie seus olhos do que é fútil
184. A morte é o fim de tudo?
185. Será que a verdade influencia sua vida?
186. Sirva em união com o povo feliz de Deus
187. Por que um Deus amoroso permite a maldade?
188. Você confia em Jeová?
189. Ande com Deus e receba bênçãos para sempre
190. Como se cumprirá a promessa de perfeita felicidade familiar
191. Como o amor e a fé vencem o mundo
192. Você está no caminho para a vida eterna?
193. Os problemas de hoje logo serão coisa do passado
194. Como a sabedoria de Deus nos ajuda
`,Ff=$S.split(`
`).filter(t=>t.trim()!=="").map(t=>{const e=t.split(".");return e.length>=2?{numero:parseInt(e[0].trim(),10),titulo:e.slice(1).join(".").trim()}:null}).filter(t=>t!==null),HS={class:"max-w-6xl mx-auto pb-10 fade-in"},zS={class:"flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-gray-200 pb-5 mb-8 gap-4"},WS={class:"flex items-center gap-3 mb-1"},KS=["title"],GS={key:0,class:"flex flex-col items-center justify-center py-20 text-blue-500"},QS={class:"mb-12"},JS={class:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4"},YS={key:0,class:"bg-gray-50 border border-gray-200 rounded-xl p-6 text-center text-gray-500 text-sm"},XS={key:1,class:"grid grid-cols-1 lg:grid-cols-2 gap-5"},ZS={class:"text-md font-bold text-gray-900 mb-3 leading-snug"},eP={key:0,class:"text-xs font-semibold text-red-500 bg-red-50 p-2 rounded inline-block"},tP={key:1,class:"flex flex-wrap gap-2"},nP=["onClick"],rP={key:0,class:"ml-1 opacity-60"},sP={key:0,class:"bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-500"},iP={key:1,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"},oP={class:"flex justify-between items-start mb-3"},aP={class:"text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded inline-block tracking-wide"},lP=["onClick"],cP={class:"text-lg font-bold text-gray-900 leading-tight mb-4"},uP={class:"space-y-2 text-sm text-gray-600"},hP={class:"flex items-center gap-2"},dP={class:"font-medium text-gray-700"},fP={key:0,class:"flex items-center gap-2"},pP={key:1,class:"flex items-center gap-2"},mP={class:"flex items-center gap-2"},gP={class:"mt-12"},_P={key:0,class:"bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-400"},yP={key:1,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"},vP={class:"flex justify-between items-start mb-2"},EP={class:"text-xs font-medium text-gray-500 block"},TP=["onClick"],IP={class:"text-base font-bold text-gray-800 mb-2"},wP={class:"text-sm text-gray-500 space-y-1"},AP={class:"flex items-center gap-2"},bP={key:0,class:"flex items-center gap-2 text-xs"},RP={key:2,class:"fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 fade-in"},SP={class:"bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"},PP={class:"p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center"},CP={class:"p-6 overflow-y-auto w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3"},xP=["value"],DP={class:"text-sm font-medium text-gray-700 group-hover:text-blue-900 leading-snug"},kP={class:"font-bold text-gray-400 group-hover:text-blue-400"},OP={class:"p-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3"},VP={class:"mt-16 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-end sm:items-center text-[11px] text-gray-400 uppercase tracking-wide font-medium"},NP=dr({__name:"DashboardView",setup(t){const e=Du(),n=LS(),r=Ze([]),s=Ze([]),i=Ze([]),o=Ze(!1),l=Ze(!0),c=Ze(""),h=async()=>{try{const D=await Fg(Rg(Do,"palestrantes")),C=[];D.forEach(V=>C.push({id:V.id,...V.data()})),r.value=C;const M=await fA(cc(Do,"settings","congregacao_local"));M.exists()&&M.data().temasSugeridos&&(s.value=M.data().temasSugeridos,i.value=[...s.value])}catch(D){console.error("Erro no Matchmaking",D)}finally{l.value=!1}},d=async()=>{try{await pA(cc(Do,"settings","congregacao_local"),{temasSugeridos:i.value},{merge:!0}),s.value=[...i.value],o.value=!1}catch{alert("Erro ao salvar")}},p=Pt(()=>s.value.map(D=>{const C=Ff.find(V=>V.numero===D),M=r.value.filter(V=>V.temas?V.temas.some(H=>typeof H=="string"?parseInt(H.split("|")[0])===D:H.numero===D):!1);return{numero:D,titulo:C?C.titulo:"Desconhecido",oradores:M}})),g=D=>{const C=r.value.find(V=>V.id===D);if(!C||!C.telefone)return"";const M=C.telefone.replace(/\D/g,"");return M.length===11?`${M.slice(0,2)} ${M.slice(2,7)}-${M.slice(7)}`:M.length===10?`${M.slice(0,2)} ${M.slice(2,6)}-${M.slice(6)}`:C.telefone};Oc(()=>{c.value=localStorage.getItem("minhaCongregacao")||"Instituição Não Definida",n.fetchAgendamentos(),h()});const E=Pt(()=>{const D=new Date;return D.setHours(0,0,0,0),n.agendamentos.filter(C=>new Date(C.dataDiscurso+"T00:00:00")>=D)}),x=Pt(()=>{const D=new Date;D.setHours(0,0,0,0);const C=n.agendamentos.filter(M=>new Date(M.dataDiscurso+"T00:00:00")<D);return C.length>0?[C[C.length-1]]:[]}),k=D=>D.split("-").reverse().join("/");return(D,C)=>{const M=Vc("router-link");return me(),Ie("div",HS,[B("header",zS,[B("div",null,[B("div",WS,[C[5]||(C[5]=B("h1",{class:"text-3xl font-extrabold text-gray-900 tracking-tight"},"Congregação",-1)),B("span",{class:"bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-md flex items-center border border-indigo-100 shadow-sm transition-all hover:bg-indigo-100 cursor-help",title:`Sua Instituição Local: ${c.value}`},[C[4]||(C[4]=B("i",{class:"fas fa-place-of-worship mr-1.5 opacity-70"},null,-1)),Le(" "+Me(c.value),1)],8,KS)]),C[6]||(C[6]=B("p",{class:"text-gray-500"},"Acompanhe as próximas programações e o histórico recente.",-1))]),B("div",null,[ze(M,{to:"/agendar",class:"inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto"},{default:Qt(()=>[...C[7]||(C[7]=[B("i",{class:"fas fa-calendar-plus mr-2"},null,-1),Le(" Agendar Discurso ",-1)])]),_:1})])]),St(n).isLoading||l.value?(me(),Ie("div",GS,[...C[8]||(C[8]=[B("i",{class:"fas fa-spinner fa-spin fa-2x mb-3"},null,-1),B("span",{class:"text-sm font-medium text-gray-500 animate-pulse"},"A Sincronizar Informações...",-1)])])):(me(),Ie(Je,{key:1},[B("section",QS,[B("div",JS,[C[10]||(C[10]=B("h2",{class:"text-lg font-bold text-gray-800 flex items-center"},[B("i",{class:"fas fa-bullseye text-red-500 w-6"}),Le(" Necessidades da Congregação ")],-1)),B("button",{onClick:C[0]||(C[0]=V=>o.value=!0),class:"text-sm text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"},[...C[9]||(C[9]=[B("i",{class:"fas fa-cog mr-1"},null,-1),Le(" Definir Necessidades ",-1)])])]),p.value.length===0?(me(),Ie("div",YS," A congregação não tem nenhuma necessidade de tema definida no momento. Crie a lista no botão acima. ")):(me(),Ie("div",XS,[(me(!0),Ie(Je,null,wr(p.value,V=>(me(),Pr(ko,{key:V.numero,class:"border-t-[3px] border-t-red-400"},{default:Qt(()=>[B("h4",ZS,"Nº "+Me(V.numero)+" - "+Me(V.titulo),1),V.oradores.length===0?(me(),Ie("div",eP,[...C[11]||(C[11]=[B("i",{class:"fas fa-exclamation-triangle mr-1"},null,-1),Le(" Oradores Esgotados na Base de Dados. ",-1)])])):(me(),Ie("div",tP,[(me(!0),Ie(Je,null,wr(V.oradores,H=>(me(),Ie("button",{key:H.id,onClick:ne=>St(e).push(`/agendar?orador=${H.id}&temaNum=${V.numero}`),class:"inline-flex items-center text-xs font-medium text-blue-800 bg-blue-100/70 hover:bg-blue-200 px-3 py-1.5 rounded-full transition-colors group",title:"Clique para agendar rapidamente este orador!"},[C[12]||(C[12]=B("i",{class:"fas fa-user-plus text-blue-400 group-hover:text-blue-600 mr-1.5"},null,-1)),Le(" "+Me(H.nome)+" ",1),H.congregacao?(me(),Ie("span",rP,"("+Me(H.congregacaoNome||H.congregacao)+")",1)):wn("",!0)],8,nP))),128))]))]),_:2},1024))),128))]))]),B("section",null,[C[20]||(C[20]=B("h2",{class:"text-lg font-bold text-gray-800 mb-4 flex items-center"},[B("i",{class:"fas fa-calendar-alt text-blue-500 w-6"}),Le(" Próximos Discursos ")],-1)),E.value.length===0?(me(),Ie("div",sP,[...C[13]||(C[13]=[B("i",{class:"fas fa-inbox text-3xl mb-3 text-gray-300"},null,-1),B("p",{class:"text-sm font-medium"},"Nenhum discurso agendado futuramente.",-1)])])):(me(),Ie("div",iP,[(me(!0),Ie(Je,null,wr(E.value,V=>(me(),Pr(ko,{key:V.id,class:"border-t-[3px] border-t-blue-500 hover:-translate-y-1 transition-transform duration-300"},{default:Qt(()=>[B("div",oP,[B("time",aP,Me(k(V.dataDiscurso)),1),B("button",{onClick:H=>St(e).push(`/agendar?id=${V.id}`),class:"text-orange-400 hover:text-orange-600 bg-orange-50 hover:bg-orange-100 w-7 h-7 flex items-center justify-center rounded transition-colors shadow-sm",title:"Editar Programação"},[...C[14]||(C[14]=[B("i",{class:"fas fa-pen text-xs"},null,-1)])],8,lP)]),B("h4",cP,Me(V.temaSelecionado),1),B("div",uP,[B("p",hP,[C[15]||(C[15]=B("i",{class:"fas fa-user text-gray-400 w-4"},null,-1)),C[16]||(C[16]=Le()),B("span",dP,Me(V.palestranteNome),1)]),g(V.palestranteId)?(me(),Ie("p",fP,[C[17]||(C[17]=B("i",{class:"fas fa-phone-alt text-gray-400 w-4"},null,-1)),Le(" "+Me(g(V.palestranteId)),1)])):wn("",!0),V.congregacao?(me(),Ie("p",pP,[C[18]||(C[18]=B("i",{class:"fas fa-place-of-worship text-gray-400 w-4"},null,-1)),Le(" "+Me(V.congregacao),1)])):wn("",!0),B("p",mP,[C[19]||(C[19]=B("i",{class:"fas fa-music text-gray-400 w-4"},null,-1)),Le(" Cântico nº "+Me(V.cantico),1)])])]),_:2},1024))),128))]))]),B("section",gP,[C[25]||(C[25]=B("h2",{class:"text-lg font-bold text-gray-800 mb-4 flex items-center"},[B("i",{class:"fas fa-history text-gray-500 w-6"}),Le(" Último Discurso Realizado ")],-1)),x.value.length===0?(me(),Ie("div",_P,[...C[21]||(C[21]=[B("p",{class:"text-sm font-medium"},"Sem histórico de discursos anteriores nesta base de dados.",-1)])])):(me(),Ie("div",yP,[(me(!0),Ie(Je,null,wr(x.value,V=>(me(),Pr(ko,{key:V.id,class:"border-t-[3px] border-t-gray-300 bg-gray-50/50 opacity-90 hover:opacity-100 transition-opacity"},{default:Qt(()=>[B("div",vP,[B("time",EP,Me(k(V.dataDiscurso)),1),B("button",{onClick:H=>St(e).push(`/agendar?id=${V.id}`),class:"text-gray-400 hover:text-orange-500 bg-white border border-gray-200 hover:border-orange-200 hover:bg-orange-50 w-6 h-6 flex items-center justify-center rounded transition-colors",title:"Editar Registro Antigo"},[...C[22]||(C[22]=[B("i",{class:"fas fa-pen text-[10px]"},null,-1)])],8,TP)]),B("h4",IP,Me(V.temaSelecionado),1),B("div",wP,[B("p",AP,[C[23]||(C[23]=B("i",{class:"fas fa-user-check text-gray-400 w-4"},null,-1)),Le(" "+Me(V.palestranteNome),1)]),g(V.palestranteId)?(me(),Ie("p",bP,[C[24]||(C[24]=B("i",{class:"fas fa-phone-alt text-gray-300 w-4"},null,-1)),Le(" "+Me(g(V.palestranteId)),1)])):wn("",!0)])]),_:2},1024))),128))]))])],64)),o.value?(me(),Ie("div",RP,[B("div",SP,[B("header",PP,[C[27]||(C[27]=B("div",null,[B("h2",{class:"text-xl font-bold text-gray-800"},"Definir Necessidades Trimestrais"),B("p",{class:"text-sm text-gray-500 mt-1"},"Marque os discursos que a congregação precisa de ouvir.")],-1)),B("button",{onClick:C[1]||(C[1]=V=>o.value=!1),class:"text-gray-400 hover:text-gray-600 bg-white p-2 rounded-full shadow-sm"},[...C[26]||(C[26]=[B("i",{class:"fas fa-times"},null,-1)])])]),B("div",CP,[(me(!0),Ie(Je,null,wr(St(Ff),V=>(me(),Ie("label",{key:V.numero,class:"flex items-start gap-3 p-2.5 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-blue-100 group"},[Lo(B("input",{type:"checkbox",value:V.numero,"onUpdate:modelValue":C[2]||(C[2]=H=>i.value=H),class:"mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 bg-white"},null,8,xP),[[vE,i.value]]),B("span",DP,[B("span",kP,"Nº "+Me(V.numero),1),C[28]||(C[28]=Le()),C[29]||(C[29]=B("br",null,null,-1)),Le(" "+Me(V.titulo),1)])]))),128))]),B("footer",OP,[ze(vc,{variant:"secondary",onClick:C[3]||(C[3]=V=>o.value=!1)},{default:Qt(()=>[...C[30]||(C[30]=[Le("Cancelar",-1)])]),_:1}),ze(vc,{onClick:d},{default:Qt(()=>[Le("Gravar Lista ("+Me(i.value.length)+" temas)",1)]),_:1})])])])):wn("",!0),B("footer",VP,[B("span",null,"Agenda de Discursos © "+Me(new Date().getFullYear())+" — Versão 1.0.0",1),C[31]||(C[31]=B("a",{href:"mailto:admin@exemplo.com",class:"mt-3 sm:mt-0 hover:text-blue-500 transition-colors flex items-center gap-1.5 outline-none focus:text-blue-600 pb-1 border-b border-transparent hover:border-blue-200"},[B("i",{class:"fas fa-headset text-gray-300"}),Le(" Relatar Problema ")],-1))])])}}}),D_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},MP=D_(NP,[["__scopeId","data-v-9428c600"]]),LP={class:"min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 fade-in"},FP={class:"max-w-md w-full space-y-8"},UP={key:0,class:"bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg text-center font-medium animate-pulse"},BP={class:"ml-2"},jP=dr({__name:"LoginView",setup(t){const e=Du(),n=Ze(""),r=Ze(""),s=Ze(""),i=Ze(!1),o=async()=>{try{i.value=!0,s.value="",await hb(pc,n.value,r.value),e.push("/")}catch(l){s.value="Credenciais inválidas. Tente novamente.",console.error(l)}finally{i.value=!1}};return(l,c)=>(me(),Ie("div",LP,[B("div",FP,[c[5]||(c[5]=B("div",{class:"text-center"},[B("i",{class:"fas fa-microphone-alt text-4xl text-blue-600 mb-4 drop-shadow-sm"}),B("h2",{class:"text-3xl font-extrabold text-gray-900 tracking-tight"},"Agenda de Discursos"),B("p",{class:"mt-2 text-sm text-gray-500 font-medium"},"Autenticação Restrita para Coordenadores")],-1)),ze(ko,null,{default:Qt(()=>[B("form",{class:"space-y-6",onSubmit:IE(o,["prevent"])},[s.value?(me(),Ie("div",UP,Me(s.value),1)):wn("",!0),B("div",null,[c[2]||(c[2]=B("label",{for:"email",class:"block text-sm font-semibold text-gray-700"},"Email",-1)),Lo(B("input",{id:"email","onUpdate:modelValue":c[0]||(c[0]=h=>n.value=h),type:"email",required:"",class:"appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-1.5 transition-shadow"},null,512),[[td,n.value]])]),B("div",null,[c[3]||(c[3]=B("label",{for:"password",class:"block text-sm font-semibold text-gray-700"},"Password",-1)),Lo(B("input",{id:"password","onUpdate:modelValue":c[1]||(c[1]=h=>r.value=h),type:"password",required:"",class:"appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-1.5 transition-shadow"},null,512),[[td,r.value]])]),ze(vc,{type:"submit",block:"",disabled:i.value,class:"mt-8 py-3 text-sm tracking-wide"},{default:Qt(()=>[B("i",{class:hr(["fas",i.value?"fa-spinner fa-spin":"fa-lock"])},null,2),c[4]||(c[4]=Le()),B("span",BP,Me(i.value?"Verificando Autorização...":"Entrar na Plataforma"),1)]),_:1},8,["disabled"])],32)]),_:1})])]))}}),qP=D_(jP,[["__scopeId","data-v-1aafd5ea"]]),oa=MS({history:pS("/agenda-discursos/"),routes:[{path:"/login",name:"login",component:qP},{path:"/",name:"dashboard",component:MP,meta:{requiresAuth:!0}},{path:"/agendar",name:"agendar",component:()=>_o(()=>import("./AgendarView-C9AlRZlH.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/consulta",name:"consulta",component:()=>_o(()=>import("./ConsultaView-AmEB6O-M.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!0}},{path:"/historico",name:"historico",component:()=>_o(()=>import("./HistoricoView-DdUajlJI.js"),__vite__mapDeps([4,5])),meta:{requiresAuth:!0}},{path:"/palestrantes",name:"palestrantes",component:()=>_o(()=>import("./PalestrantesView-z6uPJHo3.js"),__vite__mapDeps([6,7])),meta:{requiresAuth:!0}}]});oa.beforeEach((t,e,n)=>{const r=ku();t.meta.requiresAuth&&!r.isAuthenticated?n("/login"):t.path==="/login"&&r.isAuthenticated?n("/"):n()});const ku=nm("auth",()=>{const t=Ze(null),e=Ze(!1),n=Ze(!1);return{user:t,isAuthenticated:e,isInitialized:n,initAuth:()=>{pb(pc,i=>{t.value=i,e.value=!!i,n.value=!0,i&&oa.currentRoute.value.path==="/login"&&oa.push("/")})},logout:async()=>{await mb(pc)}}}),$P={class:"bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50"},HP={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},zP={class:"flex justify-between h-16"},WP={class:"hidden md:flex items-center space-x-1"},KP={class:"flex items-center md:hidden"},GP={class:"md:hidden border-t border-gray-100 bg-white shadow-lg absolute w-full"},QP={class:"px-4 py-3 space-y-1"},JP=dr({__name:"NavBar",setup(t){const e=ku(),n=Du(),r=Ze(!1),s=async()=>{await e.logout(),n.push("/login")},i=[{name:"Início",path:"/"},{name:"Agendar",path:"/agendar"},{name:"Consultar",path:"/consulta"},{name:"Palestrantes",path:"/palestrantes"},{name:"Histórico S-99-T",path:"/historico"}];return(o,l)=>{const c=Vc("router-link");return me(),Ie("nav",$P,[B("div",HP,[B("div",zP,[l[3]||(l[3]=B("div",{class:"flex items-center gap-3"},[B("i",{class:"fas fa-microphone-alt text-blue-600 text-xl"}),B("span",{class:"font-bold text-xl tracking-tight text-gray-900"},"Agenda Discurso")],-1)),B("div",WP,[(me(),Ie(Je,null,wr(i,h=>ze(c,{key:h.path,to:h.path,class:"px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors","active-class":"text-blue-700 bg-blue-50"},{default:Qt(()=>[Le(Me(h.name),1)]),_:2},1032,["to"])),64)),B("button",{onClick:s,class:"ml-4 flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"},[...l[2]||(l[2]=[Le(" Sair ",-1),B("i",{class:"fas fa-sign-out-alt"},null,-1)])])]),B("div",KP,[B("button",{onClick:l[0]||(l[0]=h=>r.value=!r.value),class:"text-gray-500 hover:text-blue-600 focus:outline-none p-2 transition-colors"},[B("i",{class:hr(["fas text-xl",r.value?"fa-times":"fa-bars"])},null,2)])])])]),Lo(B("div",GP,[B("div",QP,[(me(),Ie(Je,null,wr(i,h=>ze(c,{key:h.path,to:h.path,onClick:l[1]||(l[1]=d=>r.value=!1),class:"block px-3 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors","active-class":"text-blue-700 bg-blue-50 border-l-4 border-blue-600"},{default:Qt(()=>[Le(Me(h.name),1)]),_:2},1032,["to"])),64)),B("div",{class:"pt-4 mt-2 border-t border-gray-100"},[B("button",{onClick:s,class:"w-full text-left flex items-center gap-3 px-3 py-3 text-base font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors"},[...l[4]||(l[4]=[B("i",{class:"fas fa-sign-out-alt"},null,-1),Le(" Encerrar Sessão ",-1)])])])])],512),[[rE,r.value]])])}}}),YP={key:0,class:"min-h-screen bg-gray-50"},XP={key:1,class:"min-h-screen flex items-center justify-center bg-gray-50"},ZP=dr({__name:"App",setup(t){const e=ku();return Oc(()=>{e.initAuth()}),(n,r)=>{const s=Vc("router-view");return St(e).isInitialized?(me(),Ie("div",YP,[St(e).isAuthenticated?(me(),Pr(JP,{key:0})):wn("",!0),B("main",{class:hr(St(e).isAuthenticated?"pt-8 px-4 sm:px-6 lg:px-8":"")},[ze(s)],2)])):(me(),Ie("div",XP,[...r[0]||(r[0]=[B("i",{class:"fas fa-spinner fa-spin fa-2x text-blue-500"},null,-1)])]))}}}),Ou=bE(ZP),eC=PE();Ou.use(eC);Ou.use(oa);Ou.mount("#app");export{vc as A,St as B,IE as C,Du as D,iC as E,Je as F,aC as G,D_ as H,_o as I,Pt as J,oC as K,Pr as L,ko as _,B as a,ze as b,Ie as c,dr as d,Qt as e,Rg as f,Fg as g,Do as h,cc as i,fA as j,Ff as k,lC as l,me as m,Le as n,Oc as o,Lo as p,wr as q,Ze as r,wn as s,Me as t,LS as u,tC as v,ri as w,td as x,vE as y,hr as z};
