(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Cg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cp={exports:{}},Kr={},jp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),jg=Symbol.for("react.portal"),bg=Symbol.for("react.fragment"),kg=Symbol.for("react.strict_mode"),Ag=Symbol.for("react.profiler"),Ng=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),Rg=Symbol.for("react.forward_ref"),Lg=Symbol.for("react.suspense"),Dg=Symbol.for("react.memo"),Ig=Symbol.for("react.lazy"),Hc=Symbol.iterator;function zg(e){return e===null||typeof e!="object"?null:(e=Hc&&e[Hc]||e["@@iterator"],typeof e=="function"?e:null)}var bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kp=Object.assign,Ap={};function ai(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||bp}ai.prototype.isReactComponent={};ai.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ai.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Np(){}Np.prototype=ai.prototype;function fl(e,t,n){this.props=e,this.context=t,this.refs=Ap,this.updater=n||bp}var ml=fl.prototype=new Np;ml.constructor=fl;kp(ml,ai.prototype);ml.isPureReactComponent=!0;var Qc=Array.isArray,Mp=Object.prototype.hasOwnProperty,hl={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var i,s={},r=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(r=""+t.key),t)Mp.call(t,i)&&!Rp.hasOwnProperty(i)&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return{$$typeof:ps,type:e,key:r,ref:o,props:s,_owner:hl.current}}function Vg(e,t){return{$$typeof:ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ps}function Fg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gc=/\/+/g;function ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fg(""+e.key):t.toString(36)}function Ys(e,t,n,i,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ps:case jg:o=!0}}if(o)return o=e,s=s(o),e=i===""?"."+ho(o,0):i,Qc(s)?(n="",e!=null&&(n=e.replace(Gc,"$&/")+"/"),Ys(s,t,n,"",function(c){return c})):s!=null&&(gl(s)&&(s=Vg(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Gc,"$&/")+"/")+e)),t.push(s)),1;if(o=0,i=i===""?".":i+":",Qc(e))for(var a=0;a<e.length;a++){r=e[a];var l=i+ho(r,a);o+=Ys(r,t,n,l,s)}else if(l=zg(e),typeof l=="function")for(e=l.call(e),a=0;!(r=e.next()).done;)r=r.value,l=i+ho(r,a++),o+=Ys(r,t,n,l,s);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function As(e,t,n){if(e==null)return e;var i=[],s=0;return Ys(e,i,"","",function(r){return t.call(n,r,s++)}),i}function _g(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Zs={transition:null},Og={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Zs,ReactCurrentOwner:hl};function Dp(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:As,forEach:function(e,t,n){As(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return As(e,function(){t++}),t},toArray:function(e){return As(e,function(t){return t})||[]},only:function(e){if(!gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=ai;z.Fragment=bg;z.Profiler=Ag;z.PureComponent=fl;z.StrictMode=kg;z.Suspense=Lg;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Og;z.act=Dp;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=kp({},e.props),s=e.key,r=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,o=hl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Mp.call(t,l)&&!Rp.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ps,type:e.type,key:s,ref:r,props:i,_owner:o}};z.createContext=function(e){return e={$$typeof:Mg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ng,_context:e},e.Consumer=e};z.createElement=Lp;z.createFactory=function(e){var t=Lp.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Rg,render:e}};z.isValidElement=gl;z.lazy=function(e){return{$$typeof:Ig,_payload:{_status:-1,_result:e},_init:_g}};z.memo=function(e,t){return{$$typeof:Dg,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Zs.transition;Zs.transition={};try{e()}finally{Zs.transition=t}};z.unstable_act=Dp;z.useCallback=function(e,t){return Ce.current.useCallback(e,t)};z.useContext=function(e){return Ce.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ce.current.useEffect(e,t)};z.useId=function(){return Ce.current.useId()};z.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ce.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};z.useRef=function(e){return Ce.current.useRef(e)};z.useState=function(e){return Ce.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ce.current.useTransition()};z.version="18.3.1";jp.exports=z;var k=jp.exports;const q=Cg(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug=k,Bg=Symbol.for("react.element"),$g=Symbol.for("react.fragment"),qg=Object.prototype.hasOwnProperty,Kg=Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wg={key:!0,ref:!0,__self:!0,__source:!0};function Ip(e,t,n){var i,s={},r=null,o=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)qg.call(t,i)&&!Wg.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:Bg,type:e,key:r,ref:o,props:s,_owner:Kg.current}}Kr.Fragment=$g;Kr.jsx=Ip;Kr.jsxs=Ip;Cp.exports=Kr;var v=Cp.exports,zp={exports:{}},Be={},Vp={exports:{}},Fp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,L){var D=b.length;b.push(L);e:for(;0<D;){var U=D-1>>>1,ne=b[U];if(0<s(ne,L))b[U]=L,b[D]=ne,D=U;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var L=b[0],D=b.pop();if(D!==L){b[0]=D;e:for(var U=0,ne=b.length,Cn=ne>>>1;U<Cn;){var mt=2*(U+1)-1,pi=b[mt],Le=mt+1,De=b[Le];if(0>s(pi,D))Le<ne&&0>s(De,pi)?(b[U]=De,b[Le]=D,U=Le):(b[U]=pi,b[mt]=D,U=mt);else if(Le<ne&&0>s(De,D))b[U]=De,b[Le]=D,U=Le;else break e}}return L}function s(b,L){var D=b.sortIndex-L.sortIndex;return D!==0?D:b.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,p=3,g=!1,y=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var L=n(c);L!==null;){if(L.callback===null)i(c);else if(L.startTime<=b)i(c),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(c)}}function S(b){if(x=!1,h(b),!y)if(n(l)!==null)y=!0,Pn(w);else{var L=n(c);L!==null&&te(S,L.startTime-b)}}function w(b,L){y=!1,x&&(x=!1,m(P),P=-1),g=!0;var D=p;try{for(h(L),d=n(l);d!==null&&(!(d.expirationTime>L)||b&&!Z());){var U=d.callback;if(typeof U=="function"){d.callback=null,p=d.priorityLevel;var ne=U(d.expirationTime<=L);L=e.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&i(l),h(L)}else i(l);d=n(l)}if(d!==null)var Cn=!0;else{var mt=n(c);mt!==null&&te(S,mt.startTime-L),Cn=!1}return Cn}finally{d=null,p=D,g=!1}}var E=!1,j=null,P=-1,I=5,M=-1;function Z(){return!(e.unstable_now()-M<I)}function Te(){if(j!==null){var b=e.unstable_now();M=b;var L=!0;try{L=j(!0,b)}finally{L?de():(E=!1,j=null)}}else E=!1}var de;if(typeof f=="function")de=function(){f(Te)};else if(typeof MessageChannel<"u"){var en=new MessageChannel,Cs=en.port2;en.port1.onmessage=Te,de=function(){Cs.postMessage(null)}}else de=function(){T(Te,0)};function Pn(b){j=b,E||(E=!0,de())}function te(b,L){P=T(function(){b(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Pn(w))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var D=p;p=L;try{return b()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,L){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var D=p;p=b;try{return L()}finally{p=D}},e.unstable_scheduleCallback=function(b,L,D){var U=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?U+D:U):D=U,b){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=D+ne,b={id:u++,callback:L,priorityLevel:b,startTime:D,expirationTime:ne,sortIndex:-1},D>U?(b.sortIndex=D,t(c,b),n(l)===null&&b===n(c)&&(x?(m(P),P=-1):x=!0,te(S,D-U))):(b.sortIndex=ne,t(l,b),y||g||(y=!0,Pn(w))),b},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(b){var L=p;return function(){var D=p;p=L;try{return b.apply(this,arguments)}finally{p=D}}}})(Fp);Vp.exports=Fp;var Hg=Vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg=k,Oe=Hg;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _p=new Set,qi={};function wn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(qi[e]=t,e=0;e<t.length;e++)_p.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sa=Object.prototype.hasOwnProperty,Gg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xc={},Yc={};function Xg(e){return sa.call(Yc,e)?!0:sa.call(Xc,e)?!1:Gg.test(e)?Yc[e]=!0:(Xc[e]=!0,!1)}function Yg(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zg(e,t,n,i){if(t===null||typeof t>"u"||Yg(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,i,s,r,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var vl=/[\-:]([a-z])/g;function yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vl,yl);he[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vl,yl);he[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vl,yl);he[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function xl(e,t,n,i){var s=he.hasOwnProperty(t)?he[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zg(t,n,s,i)&&(n=null),i||s===null?Xg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,i=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var At=Qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ns=Symbol.for("react.element"),bn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),Sl=Symbol.for("react.strict_mode"),ra=Symbol.for("react.profiler"),Op=Symbol.for("react.provider"),Up=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Bp=Symbol.for("react.offscreen"),Zc=Symbol.iterator;function fi(e){return e===null||typeof e!="object"?null:(e=Zc&&e[Zc]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,go;function Pi(e){if(go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);go=t&&t[1]||""}return`
`+go+e}var vo=!1;function yo(e,t){if(!e||vo)return"";vo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),r=i.stack.split(`
`),o=s.length-1,a=r.length-1;1<=o&&0<=a&&s[o]!==r[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==r[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==r[a]){var l=`
`+s[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{vo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pi(e):""}function Jg(e){switch(e.tag){case 5:return Pi(e.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return e=yo(e.type,!1),e;case 11:return e=yo(e.type.render,!1),e;case 1:return e=yo(e.type,!0),e;default:return""}}function la(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case bn:return"Portal";case ra:return"Profiler";case Sl:return"StrictMode";case oa:return"Suspense";case aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Up:return(e.displayName||"Context")+".Consumer";case Op:return(e._context.displayName||"Context")+".Provider";case wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tl:return t=e.displayName||null,t!==null?t:la(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return la(e(t))}catch{}}return null}function ev(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return la(t);case 8:return t===Sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $p(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tv(e){var t=$p(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ms(e){e._valueTracker||(e._valueTracker=tv(e))}function qp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=$p(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jc(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kp(e,t){t=t.checked,t!=null&&xl(e,"checked",t,!1)}function ua(e,t){Kp(e,t);var n=Wt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,n):t.hasOwnProperty("defaultValue")&&da(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function da(e,t,n){(t!=="number"||pr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ci=Array.isArray;function Kn(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function pa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Ci(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Wp(e,t){var n=Wt(t.value),i=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rs,Qp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rs=Rs||document.createElement("div"),Rs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nv=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(e){nv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mi[t]=Mi[e]})});function Gp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mi.hasOwnProperty(e)&&Mi[e]?(""+t).trim():t+"px"}function Xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=Gp(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,s):e[n]=s}}var iv=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,t){if(t){if(iv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ga=null;function El(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,Wn=null,Hn=null;function iu(e){if(e=hs(e)){if(typeof va!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Xr(t),va(e.stateNode,e.type,t))}}function Yp(e){Wn?Hn?Hn.push(e):Hn=[e]:Wn=e}function Zp(){if(Wn){var e=Wn,t=Hn;if(Hn=Wn=null,iu(e),t)for(e=0;e<t.length;e++)iu(t[e])}}function Jp(e,t){return e(t)}function ef(){}var xo=!1;function tf(e,t,n){if(xo)return e(t,n);xo=!0;try{return Jp(e,t,n)}finally{xo=!1,(Wn!==null||Hn!==null)&&(ef(),Zp())}}function Wi(e,t){var n=e.stateNode;if(n===null)return null;var i=Xr(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var ya=!1;if(Pt)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){ya=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{ya=!1}function sv(e,t,n,i,s,r,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ri=!1,fr=null,mr=!1,xa=null,rv={onError:function(e){Ri=!0,fr=e}};function ov(e,t,n,i,s,r,o,a,l){Ri=!1,fr=null,sv.apply(rv,arguments)}function av(e,t,n,i,s,r,o,a,l){if(ov.apply(this,arguments),Ri){if(Ri){var c=fr;Ri=!1,fr=null}else throw Error(C(198));mr||(mr=!0,xa=c)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(Tn(e)!==e)throw Error(C(188))}function lv(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return su(s),e;if(r===i)return su(s),t;r=r.sibling}throw Error(C(188))}if(n.return!==i.return)n=s,i=r;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o){for(a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==i)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function sf(e){return e=lv(e),e!==null?rf(e):null}function rf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rf(e);if(t!==null)return t;e=e.sibling}return null}var of=Oe.unstable_scheduleCallback,ru=Oe.unstable_cancelCallback,cv=Oe.unstable_shouldYield,uv=Oe.unstable_requestPaint,re=Oe.unstable_now,dv=Oe.unstable_getCurrentPriorityLevel,Pl=Oe.unstable_ImmediatePriority,af=Oe.unstable_UserBlockingPriority,hr=Oe.unstable_NormalPriority,pv=Oe.unstable_LowPriority,lf=Oe.unstable_IdlePriority,Wr=null,ut=null;function fv(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Wr,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:gv,mv=Math.log,hv=Math.LN2;function gv(e){return e>>>=0,e===0?32:31-(mv(e)/hv|0)|0}var Ls=64,Ds=4194304;function ji(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,r=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?i=ji(a):(r&=o,r!==0&&(i=ji(r)))}else o=n&~s,o!==0?i=ji(o):r!==0&&(i=ji(r));if(i===0)return 0;if(t!==0&&t!==i&&!(t&s)&&(s=i&-i,r=t&-t,s>=r||s===16&&(r&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-st(t),s=1<<n,i|=e[n],t&=~s;return i}function vv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-st(r),a=1<<o,l=s[o];l===-1?(!(a&n)||a&i)&&(s[o]=vv(a,t)):l<=t&&(e.expiredLanes|=a),r&=~a}}function Sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cf(){var e=Ls;return Ls<<=1,!(Ls&4194240)&&(Ls=64),e}function So(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function xv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-st(n),r=1<<s;t[s]=0,i[s]=-1,e[s]=-1,n&=~r}}function Cl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-st(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}var _=0;function uf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var df,jl,pf,ff,mf,wa=!1,Is=[],Ft=null,_t=null,Ot=null,Hi=new Map,Qi=new Map,Dt=[],Sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ou(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function hi(e,t,n,i,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=hs(t),t!==null&&jl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function wv(e,t,n,i,s){switch(t){case"focusin":return Ft=hi(Ft,e,t,n,i,s),!0;case"dragenter":return _t=hi(_t,e,t,n,i,s),!0;case"mouseover":return Ot=hi(Ot,e,t,n,i,s),!0;case"pointerover":var r=s.pointerId;return Hi.set(r,hi(Hi.get(r)||null,e,t,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Qi.set(r,hi(Qi.get(r)||null,e,t,n,i,s)),!0}return!1}function hf(e){var t=an(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=nf(n),t!==null){e.blockedOn=t,mf(e.priority,function(){pf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ga=i,n.target.dispatchEvent(i),ga=null}else return t=hs(n),t!==null&&jl(t),e.blockedOn=n,!1;t.shift()}return!0}function au(e,t,n){Js(e)&&n.delete(t)}function Tv(){wa=!1,Ft!==null&&Js(Ft)&&(Ft=null),_t!==null&&Js(_t)&&(_t=null),Ot!==null&&Js(Ot)&&(Ot=null),Hi.forEach(au),Qi.forEach(au)}function gi(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Tv)))}function Gi(e){function t(s){return gi(s,e)}if(0<Is.length){gi(Is[0],e);for(var n=1;n<Is.length;n++){var i=Is[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Ft!==null&&gi(Ft,e),_t!==null&&gi(_t,e),Ot!==null&&gi(Ot,e),Hi.forEach(t),Qi.forEach(t),n=0;n<Dt.length;n++)i=Dt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)hf(n),n.blockedOn===null&&Dt.shift()}var Qn=At.ReactCurrentBatchConfig,vr=!0;function Ev(e,t,n,i){var s=_,r=Qn.transition;Qn.transition=null;try{_=1,bl(e,t,n,i)}finally{_=s,Qn.transition=r}}function Pv(e,t,n,i){var s=_,r=Qn.transition;Qn.transition=null;try{_=4,bl(e,t,n,i)}finally{_=s,Qn.transition=r}}function bl(e,t,n,i){if(vr){var s=Ta(e,t,n,i);if(s===null)No(e,t,i,yr,n),ou(e,i);else if(wv(s,e,t,n,i))i.stopPropagation();else if(ou(e,i),t&4&&-1<Sv.indexOf(e)){for(;s!==null;){var r=hs(s);if(r!==null&&df(r),r=Ta(e,t,n,i),r===null&&No(e,t,i,yr,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else No(e,t,i,null,n)}}var yr=null;function Ta(e,t,n,i){if(yr=null,e=El(i),e=an(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yr=e,null}function gf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dv()){case Pl:return 1;case af:return 4;case hr:case pv:return 16;case lf:return 536870912;default:return 16}default:return 16}}var zt=null,kl=null,er=null;function vf(){if(er)return er;var e,t=kl,n=t.length,i,s="value"in zt?zt.value:zt.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===s[r-i];i++);return er=s.slice(e,1<i?1-i:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zs(){return!0}function lu(){return!1}function $e(e){function t(n,i,s,r,o){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(r):r[a]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?zs:lu,this.isPropagationStopped=lu,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zs)},persist:function(){},isPersistent:zs}),t}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=$e(li),ms=Y({},li,{view:0,detail:0}),Cv=$e(ms),wo,To,vi,Hr=Y({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(wo=e.screenX-vi.screenX,To=e.screenY-vi.screenY):To=wo=0,vi=e),wo)},movementY:function(e){return"movementY"in e?e.movementY:To}}),cu=$e(Hr),jv=Y({},Hr,{dataTransfer:0}),bv=$e(jv),kv=Y({},ms,{relatedTarget:0}),Eo=$e(kv),Av=Y({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=$e(Av),Mv=Y({},li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rv=$e(Mv),Lv=Y({},li,{data:0}),uu=$e(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zv[e])?!!t[e]:!1}function Nl(){return Vv}var Fv=Y({},ms,{key:function(e){if(e.key){var t=Dv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(e){return e.type==="keypress"?tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_v=$e(Fv),Ov=Y({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=$e(Ov),Uv=Y({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),Bv=$e(Uv),$v=Y({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=$e($v),Kv=Y({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=$e(Kv),Hv=[9,13,27,32],Ml=Pt&&"CompositionEvent"in window,Li=null;Pt&&"documentMode"in document&&(Li=document.documentMode);var Qv=Pt&&"TextEvent"in window&&!Li,yf=Pt&&(!Ml||Li&&8<Li&&11>=Li),pu=" ",fu=!1;function xf(e,t){switch(e){case"keyup":return Hv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Gv(e,t){switch(e){case"compositionend":return Sf(t);case"keypress":return t.which!==32?null:(fu=!0,pu);case"textInput":return e=t.data,e===pu&&fu?null:e;default:return null}}function Xv(e,t){if(An)return e==="compositionend"||!Ml&&xf(e,t)?(e=vf(),er=kl=zt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yf&&t.locale!=="ko"?null:t.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yv[e.type]:t==="textarea"}function wf(e,t,n,i){Yp(i),t=xr(t,"onChange"),0<t.length&&(n=new Al("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Di=null,Xi=null;function Zv(e){Rf(e,0)}function Qr(e){var t=Rn(e);if(qp(t))return e}function Jv(e,t){if(e==="change")return t}var Tf=!1;if(Pt){var Po;if(Pt){var Co="oninput"in document;if(!Co){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),Co=typeof hu.oninput=="function"}Po=Co}else Po=!1;Tf=Po&&(!document.documentMode||9<document.documentMode)}function gu(){Di&&(Di.detachEvent("onpropertychange",Ef),Xi=Di=null)}function Ef(e){if(e.propertyName==="value"&&Qr(Xi)){var t=[];wf(t,Xi,e,El(e)),tf(Zv,t)}}function ey(e,t,n){e==="focusin"?(gu(),Di=t,Xi=n,Di.attachEvent("onpropertychange",Ef)):e==="focusout"&&gu()}function ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qr(Xi)}function ny(e,t){if(e==="click")return Qr(t)}function iy(e,t){if(e==="input"||e==="change")return Qr(t)}function sy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:sy;function Yi(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!sa.call(t,s)||!ot(e[s],t[s]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yu(e,t){var n=vu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vu(n)}}function Pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cf(){for(var e=window,t=pr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pr(e.document)}return t}function Rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ry(e){var t=Cf(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pf(n.ownerDocument.documentElement,n)){if(i!==null&&Rl(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,r=Math.min(i.start,s);i=i.end===void 0?r:Math.min(i.end,s),!e.extend&&r>i&&(s=i,i=r,r=s),s=yu(n,r);var o=yu(n,i);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),r>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var oy=Pt&&"documentMode"in document&&11>=document.documentMode,Nn=null,Ea=null,Ii=null,Pa=!1;function xu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pa||Nn==null||Nn!==pr(i)||(i=Nn,"selectionStart"in i&&Rl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ii&&Yi(Ii,i)||(Ii=i,i=xr(Ea,"onSelect"),0<i.length&&(t=new Al("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Nn)))}function Vs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionend:Vs("Transition","TransitionEnd")},jo={},jf={};Pt&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function Gr(e){if(jo[e])return jo[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jf)return jo[e]=t[n];return e}var bf=Gr("animationend"),kf=Gr("animationiteration"),Af=Gr("animationstart"),Nf=Gr("transitionend"),Mf=new Map,Su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Mf.set(e,t),wn(t,[e])}for(var bo=0;bo<Su.length;bo++){var ko=Su[bo],ay=ko.toLowerCase(),ly=ko[0].toUpperCase()+ko.slice(1);Xt(ay,"on"+ly)}Xt(bf,"onAnimationEnd");Xt(kf,"onAnimationIteration");Xt(Af,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Nf,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function wu(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,av(i,t,void 0,e),e.currentTarget=null}function Rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==r&&s.isPropagationStopped())break e;wu(s,a,c),r=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==r&&s.isPropagationStopped())break e;wu(s,a,c),r=l}}}if(mr)throw e=xa,mr=!1,xa=null,e}function $(e,t){var n=t[Aa];n===void 0&&(n=t[Aa]=new Set);var i=e+"__bubble";n.has(i)||(Lf(t,e,2,!1),n.add(i))}function Ao(e,t,n){var i=0;t&&(i|=4),Lf(n,e,i,t)}var Fs="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[Fs]){e[Fs]=!0,_p.forEach(function(n){n!=="selectionchange"&&(cy.has(n)||Ao(n,!1,e),Ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fs]||(t[Fs]=!0,Ao("selectionchange",!1,t))}}function Lf(e,t,n,i){switch(gf(t)){case 1:var s=Ev;break;case 4:s=Pv;break;default:s=bl}n=s.bind(null,t,n,e),s=void 0,!ya||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function No(e,t,n,i,s){var r=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=an(a),o===null)return;if(l=o.tag,l===5||l===6){i=r=o;continue e}a=a.parentNode}}i=i.return}tf(function(){var c=r,u=El(n),d=[];e:{var p=Mf.get(e);if(p!==void 0){var g=Al,y=e;switch(e){case"keypress":if(tr(n)===0)break e;case"keydown":case"keyup":g=_v;break;case"focusin":y="focus",g=Eo;break;case"focusout":y="blur",g=Eo;break;case"beforeblur":case"afterblur":g=Eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Bv;break;case bf:case kf:case Af:g=Nv;break;case Nf:g=qv;break;case"scroll":g=Cv;break;case"wheel":g=Wv;break;case"copy":case"cut":case"paste":g=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=du}var x=(t&4)!==0,T=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var f=c,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,m!==null&&(S=Wi(f,m),S!=null&&x.push(Ji(f,S,h)))),T)break;f=f.return}0<x.length&&(p=new g(p,y,null,n,u),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==ga&&(y=n.relatedTarget||n.fromElement)&&(an(y)||y[Ct]))break e;if((g||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?an(y):null,y!==null&&(T=Tn(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(x=cu,S="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=du,S="onPointerLeave",m="onPointerEnter",f="pointer"),T=g==null?p:Rn(g),h=y==null?p:Rn(y),p=new x(S,f+"leave",g,n,u),p.target=T,p.relatedTarget=h,S=null,an(u)===c&&(x=new x(m,f+"enter",y,n,u),x.target=h,x.relatedTarget=T,S=x),T=S,g&&y)t:{for(x=g,m=y,f=0,h=x;h;h=jn(h))f++;for(h=0,S=m;S;S=jn(S))h++;for(;0<f-h;)x=jn(x),f--;for(;0<h-f;)m=jn(m),h--;for(;f--;){if(x===m||m!==null&&x===m.alternate)break t;x=jn(x),m=jn(m)}x=null}else x=null;g!==null&&Tu(d,p,g,x,!1),y!==null&&T!==null&&Tu(d,T,y,x,!0)}}e:{if(p=c?Rn(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var w=Jv;else if(mu(p))if(Tf)w=iy;else{w=ty;var E=ey}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=ny);if(w&&(w=w(e,c))){wf(d,w,n,u);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&da(p,"number",p.value)}switch(E=c?Rn(c):window,e){case"focusin":(mu(E)||E.contentEditable==="true")&&(Nn=E,Ea=c,Ii=null);break;case"focusout":Ii=Ea=Nn=null;break;case"mousedown":Pa=!0;break;case"contextmenu":case"mouseup":case"dragend":Pa=!1,xu(d,n,u);break;case"selectionchange":if(oy)break;case"keydown":case"keyup":xu(d,n,u)}var j;if(Ml)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else An?xf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(yf&&n.locale!=="ko"&&(An||P!=="onCompositionStart"?P==="onCompositionEnd"&&An&&(j=vf()):(zt=u,kl="value"in zt?zt.value:zt.textContent,An=!0)),E=xr(c,P),0<E.length&&(P=new uu(P,e,null,n,u),d.push({event:P,listeners:E}),j?P.data=j:(j=Sf(n),j!==null&&(P.data=j)))),(j=Qv?Gv(e,n):Xv(e,n))&&(c=xr(c,"onBeforeInput"),0<c.length&&(u=new uu("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=j))}Rf(d,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xr(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=Wi(e,n),r!=null&&i.unshift(Ji(e,r,s)),r=Wi(e,t),r!=null&&i.push(Ji(e,r,s))),e=e.return}return i}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tu(e,t,n,i,s){for(var r=t._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,s?(l=Wi(n,r),l!=null&&o.unshift(Ji(n,l,a))):s||(l=Wi(n,r),l!=null&&o.push(Ji(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var uy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(uy,`
`).replace(dy,"")}function _s(e,t,n){if(t=Eu(t),Eu(e)!==t&&n)throw Error(C(425))}function Sr(){}var Ca=null,ja=null;function ba(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,py=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(my)}:ka;function my(e){setTimeout(function(){throw e})}function Mo(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){e.removeChild(s),Gi(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Gi(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ci=Math.random().toString(36).slice(2),ct="__reactFiber$"+ci,es="__reactProps$"+ci,Ct="__reactContainer$"+ci,Aa="__reactEvents$"+ci,hy="__reactListeners$"+ci,gy="__reactHandles$"+ci;function an(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cu(e);e!==null;){if(n=e[ct])return n;e=Cu(e)}return t}e=n,n=e.parentNode}return null}function hs(e){return e=e[ct]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Xr(e){return e[es]||null}var Na=[],Ln=-1;function Yt(e){return{current:e}}function K(e){0>Ln||(e.current=Na[Ln],Na[Ln]=null,Ln--)}function B(e,t){Ln++,Na[Ln]=e.current,e.current=t}var Ht={},we=Yt(Ht),Ae=Yt(!1),gn=Ht;function Zn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in n)s[r]=t[r];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ne(e){return e=e.childContextTypes,e!=null}function wr(){K(Ae),K(we)}function ju(e,t,n){if(we.current!==Ht)throw Error(C(168));B(we,t),B(Ae,n)}function Df(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(C(108,ev(e)||"Unknown",s));return Y({},n,i)}function Tr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,gn=we.current,B(we,e),B(Ae,Ae.current),!0}function bu(e,t,n){var i=e.stateNode;if(!i)throw Error(C(169));n?(e=Df(e,t,gn),i.__reactInternalMemoizedMergedChildContext=e,K(Ae),K(we),B(we,e)):K(Ae),B(Ae,n)}var vt=null,Yr=!1,Ro=!1;function If(e){vt===null?vt=[e]:vt.push(e)}function vy(e){Yr=!0,If(e)}function Zt(){if(!Ro&&vt!==null){Ro=!0;var e=0,t=_;try{var n=vt;for(_=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}vt=null,Yr=!1}catch(s){throw vt!==null&&(vt=vt.slice(e+1)),of(Pl,Zt),s}finally{_=t,Ro=!1}}return null}var Dn=[],In=0,Er=null,Pr=0,We=[],He=0,vn=null,yt=1,xt="";function nn(e,t){Dn[In++]=Pr,Dn[In++]=Er,Er=e,Pr=t}function zf(e,t,n){We[He++]=yt,We[He++]=xt,We[He++]=vn,vn=e;var i=yt;e=xt;var s=32-st(i)-1;i&=~(1<<s),n+=1;var r=32-st(t)+s;if(30<r){var o=s-s%5;r=(i&(1<<o)-1).toString(32),i>>=o,s-=o,yt=1<<32-st(t)+s|n<<s|i,xt=r+e}else yt=1<<r|n<<s|i,xt=e}function Ll(e){e.return!==null&&(nn(e,1),zf(e,1,0))}function Dl(e){for(;e===Er;)Er=Dn[--In],Dn[In]=null,Pr=Dn[--In],Dn[In]=null;for(;e===vn;)vn=We[--He],We[He]=null,xt=We[--He],We[He]=null,yt=We[--He],We[He]=null}var Fe=null,Ve=null,H=!1,it=null;function Vf(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Ve=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:yt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Ve=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ra(e){if(H){var t=Ve;if(t){var n=t;if(!ku(e,t)){if(Ma(e))throw Error(C(418));t=Ut(n.nextSibling);var i=Fe;t&&ku(e,t)?Vf(i,n):(e.flags=e.flags&-4097|2,H=!1,Fe=e)}}else{if(Ma(e))throw Error(C(418));e.flags=e.flags&-4097|2,H=!1,Fe=e}}}function Au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Os(e){if(e!==Fe)return!1;if(!H)return Au(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ba(e.type,e.memoizedProps)),t&&(t=Ve)){if(Ma(e))throw Ff(),Error(C(418));for(;t;)Vf(e,t),t=Ut(t.nextSibling)}if(Au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Fe?Ut(e.stateNode.nextSibling):null;return!0}function Ff(){for(var e=Ve;e;)e=Ut(e.nextSibling)}function Jn(){Ve=Fe=null,H=!1}function Il(e){it===null?it=[e]:it.push(e)}var yy=At.ReactCurrentBatchConfig;function yi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var i=n.stateNode}if(!i)throw Error(C(147,e));var s=i,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(o){var a=s.refs;o===null?delete a[r]:a[r]=o},t._stringRef=r,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Us(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nu(e){var t=e._init;return t(e._payload)}function _f(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function i(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function s(m,f){return m=Kt(m,f),m.index=0,m.sibling=null,m}function r(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,h,S){return f===null||f.tag!==6?(f=_o(h,m.mode,S),f.return=m,f):(f=s(f,h),f.return=m,f)}function l(m,f,h,S){var w=h.type;return w===kn?u(m,f,h.props.children,S,h.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Rt&&Nu(w)===f.type)?(S=s(f,h.props),S.ref=yi(m,f,h),S.return=m,S):(S=lr(h.type,h.key,h.props,null,m.mode,S),S.ref=yi(m,f,h),S.return=m,S)}function c(m,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Oo(h,m.mode,S),f.return=m,f):(f=s(f,h.children||[]),f.return=m,f)}function u(m,f,h,S,w){return f===null||f.tag!==7?(f=pn(h,m.mode,S,w),f.return=m,f):(f=s(f,h),f.return=m,f)}function d(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=_o(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ns:return h=lr(f.type,f.key,f.props,null,m.mode,h),h.ref=yi(m,null,f),h.return=m,h;case bn:return f=Oo(f,m.mode,h),f.return=m,f;case Rt:var S=f._init;return d(m,S(f._payload),h)}if(Ci(f)||fi(f))return f=pn(f,m.mode,h,null),f.return=m,f;Us(m,f)}return null}function p(m,f,h,S){var w=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:a(m,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ns:return h.key===w?l(m,f,h,S):null;case bn:return h.key===w?c(m,f,h,S):null;case Rt:return w=h._init,p(m,f,w(h._payload),S)}if(Ci(h)||fi(h))return w!==null?null:u(m,f,h,S,null);Us(m,h)}return null}function g(m,f,h,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(h)||null,a(f,m,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ns:return m=m.get(S.key===null?h:S.key)||null,l(f,m,S,w);case bn:return m=m.get(S.key===null?h:S.key)||null,c(f,m,S,w);case Rt:var E=S._init;return g(m,f,h,E(S._payload),w)}if(Ci(S)||fi(S))return m=m.get(h)||null,u(f,m,S,w,null);Us(f,S)}return null}function y(m,f,h,S){for(var w=null,E=null,j=f,P=f=0,I=null;j!==null&&P<h.length;P++){j.index>P?(I=j,j=null):I=j.sibling;var M=p(m,j,h[P],S);if(M===null){j===null&&(j=I);break}e&&j&&M.alternate===null&&t(m,j),f=r(M,f,P),E===null?w=M:E.sibling=M,E=M,j=I}if(P===h.length)return n(m,j),H&&nn(m,P),w;if(j===null){for(;P<h.length;P++)j=d(m,h[P],S),j!==null&&(f=r(j,f,P),E===null?w=j:E.sibling=j,E=j);return H&&nn(m,P),w}for(j=i(m,j);P<h.length;P++)I=g(j,m,P,h[P],S),I!==null&&(e&&I.alternate!==null&&j.delete(I.key===null?P:I.key),f=r(I,f,P),E===null?w=I:E.sibling=I,E=I);return e&&j.forEach(function(Z){return t(m,Z)}),H&&nn(m,P),w}function x(m,f,h,S){var w=fi(h);if(typeof w!="function")throw Error(C(150));if(h=w.call(h),h==null)throw Error(C(151));for(var E=w=null,j=f,P=f=0,I=null,M=h.next();j!==null&&!M.done;P++,M=h.next()){j.index>P?(I=j,j=null):I=j.sibling;var Z=p(m,j,M.value,S);if(Z===null){j===null&&(j=I);break}e&&j&&Z.alternate===null&&t(m,j),f=r(Z,f,P),E===null?w=Z:E.sibling=Z,E=Z,j=I}if(M.done)return n(m,j),H&&nn(m,P),w;if(j===null){for(;!M.done;P++,M=h.next())M=d(m,M.value,S),M!==null&&(f=r(M,f,P),E===null?w=M:E.sibling=M,E=M);return H&&nn(m,P),w}for(j=i(m,j);!M.done;P++,M=h.next())M=g(j,m,P,M.value,S),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?P:M.key),f=r(M,f,P),E===null?w=M:E.sibling=M,E=M);return e&&j.forEach(function(Te){return t(m,Te)}),H&&nn(m,P),w}function T(m,f,h,S){if(typeof h=="object"&&h!==null&&h.type===kn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ns:e:{for(var w=h.key,E=f;E!==null;){if(E.key===w){if(w=h.type,w===kn){if(E.tag===7){n(m,E.sibling),f=s(E,h.props.children),f.return=m,m=f;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Rt&&Nu(w)===E.type){n(m,E.sibling),f=s(E,h.props),f.ref=yi(m,E,h),f.return=m,m=f;break e}n(m,E);break}else t(m,E);E=E.sibling}h.type===kn?(f=pn(h.props.children,m.mode,S,h.key),f.return=m,m=f):(S=lr(h.type,h.key,h.props,null,m.mode,S),S.ref=yi(m,f,h),S.return=m,m=S)}return o(m);case bn:e:{for(E=h.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=s(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Oo(h,m.mode,S),f.return=m,m=f}return o(m);case Rt:return E=h._init,T(m,f,E(h._payload),S)}if(Ci(h))return y(m,f,h,S);if(fi(h))return x(m,f,h,S);Us(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=s(f,h),f.return=m,m=f):(n(m,f),f=_o(h,m.mode,S),f.return=m,m=f),o(m)):n(m,f)}return T}var ei=_f(!0),Of=_f(!1),Cr=Yt(null),jr=null,zn=null,zl=null;function Vl(){zl=zn=jr=null}function Fl(e){var t=Cr.current;K(Cr),e._currentValue=t}function La(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){jr=e,zl=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(jr===null)throw Error(C(308));zn=e,jr.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var ln=null;function _l(e){ln===null?ln=[e]:ln.push(e)}function Uf(e,t,n,i){var s=t.interleaved;return s===null?(n.next=n,_l(t)):(n.next=s.next,s.next=n),t.interleaved=n,jt(e,i)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,F&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,jt(e,n)}return s=i.interleaved,s===null?(t.next=t,_l(i)):(t.next=s.next,s.next=t),i.interleaved=t,jt(e,n)}function nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Cl(e,n)}}function Mu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?s=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function br(e,t,n,i){var s=e.updateQueue;Lt=!1;var r=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?r=c:o.next=c,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(r!==null){var d=s.baseState;o=0,u=c=l=null,a=r;do{var p=a.lane,g=a.eventTime;if((i&p)===p){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(p=t,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(g,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(g,d,p):y,p==null)break e;d=Y({},d,p);break e;case 2:Lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,o|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else r===null&&(s.shared.lanes=0);xn|=o,e.lanes=o,e.memoizedState=d}}function Ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(C(191,s));s.call(i)}}}var gs={},dt=Yt(gs),ts=Yt(gs),ns=Yt(gs);function cn(e){if(e===gs)throw Error(C(174));return e}function Ul(e,t){switch(B(ns,t),B(ts,e),B(dt,gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}K(dt),B(dt,t)}function ti(){K(dt),K(ts),K(ns)}function $f(e){cn(ns.current);var t=cn(dt.current),n=fa(t,e.type);t!==n&&(B(ts,e),B(dt,n))}function Bl(e){ts.current===e&&(K(dt),K(ts))}var Q=Yt(0);function kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lo=[];function $l(){for(var e=0;e<Lo.length;e++)Lo[e]._workInProgressVersionPrimary=null;Lo.length=0}var ir=At.ReactCurrentDispatcher,Do=At.ReactCurrentBatchConfig,yn=0,X=null,ae=null,ce=null,Ar=!1,zi=!1,is=0,xy=0;function ge(){throw Error(C(321))}function ql(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Kl(e,t,n,i,s,r){if(yn=r,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ir.current=e===null||e.memoizedState===null?Ey:Py,e=n(i,s),zi){r=0;do{if(zi=!1,is=0,25<=r)throw Error(C(301));r+=1,ce=ae=null,t.updateQueue=null,ir.current=Cy,e=n(i,s)}while(zi)}if(ir.current=Nr,t=ae!==null&&ae.next!==null,yn=0,ce=ae=X=null,Ar=!1,t)throw Error(C(300));return e}function Wl(){var e=is!==0;return is=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?X.memoizedState=ce=e:ce=ce.next=e,ce}function Ye(){if(ae===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?X.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(C(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?X.memoizedState=ce=e:ce=ce.next=e}return ce}function ss(e,t){return typeof t=="function"?t(e):t}function Io(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var i=ae,s=i.baseQueue,r=n.pending;if(r!==null){if(s!==null){var o=s.next;s.next=r.next,r.next=o}i.baseQueue=s=r,n.pending=null}if(s!==null){r=s.next,i=i.baseState;var a=o=null,l=null,c=r;do{var u=c.lane;if((yn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,X.lanes|=u,xn|=u}c=c.next}while(c!==null&&c!==r);l===null?o=i:l.next=a,ot(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){s=e;do r=s.lane,X.lanes|=r,xn|=r,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zo(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do r=e(r,o.action),o=o.next;while(o!==s);ot(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function qf(){}function Kf(e,t){var n=X,i=Ye(),s=t(),r=!ot(i.memoizedState,s);if(r&&(i.memoizedState=s,ke=!0),i=i.queue,Hl(Qf.bind(null,n,i,e),[e]),i.getSnapshot!==t||r||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,rs(9,Hf.bind(null,n,i,s,t),void 0,null),ue===null)throw Error(C(349));yn&30||Wf(n,t,s)}return s}function Wf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hf(e,t,n,i){t.value=n,t.getSnapshot=i,Gf(t)&&Xf(e)}function Qf(e,t,n){return n(function(){Gf(t)&&Xf(e)})}function Gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Xf(e){var t=jt(e,1);t!==null&&rt(t,e,1,-1)}function Lu(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t.queue=e,e=e.dispatch=Ty.bind(null,X,e),[t.memoizedState,e]}function rs(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Yf(){return Ye().memoizedState}function sr(e,t,n,i){var s=lt();X.flags|=e,s.memoizedState=rs(1|t,n,void 0,i===void 0?null:i)}function Zr(e,t,n,i){var s=Ye();i=i===void 0?null:i;var r=void 0;if(ae!==null){var o=ae.memoizedState;if(r=o.destroy,i!==null&&ql(i,o.deps)){s.memoizedState=rs(t,n,r,i);return}}X.flags|=e,s.memoizedState=rs(1|t,n,r,i)}function Du(e,t){return sr(8390656,8,e,t)}function Hl(e,t){return Zr(2048,8,e,t)}function Zf(e,t){return Zr(4,2,e,t)}function Jf(e,t){return Zr(4,4,e,t)}function em(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tm(e,t,n){return n=n!=null?n.concat([e]):null,Zr(4,4,em.bind(null,t,e),n)}function Ql(){}function nm(e,t){var n=Ye();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ql(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function im(e,t){var n=Ye();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ql(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function sm(e,t,n){return yn&21?(ot(n,t)||(n=cf(),X.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function Sy(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var i=Do.transition;Do.transition={};try{e(!1),t()}finally{_=n,Do.transition=i}}function rm(){return Ye().memoizedState}function wy(e,t,n){var i=qt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},om(e))am(t,n);else if(n=Uf(e,t,n,i),n!==null){var s=Pe();rt(n,e,i,s),lm(n,t,i)}}function Ty(e,t,n){var i=qt(e),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(om(e))am(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,a=r(o,n);if(s.hasEagerState=!0,s.eagerState=a,ot(a,o)){var l=t.interleaved;l===null?(s.next=s,_l(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}n=Uf(e,t,s,i),n!==null&&(s=Pe(),rt(n,e,i,s),lm(n,t,i))}}function om(e){var t=e.alternate;return e===X||t!==null&&t===X}function am(e,t){zi=Ar=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lm(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Cl(e,n)}}var Nr={readContext:Xe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Ey={readContext:Xe,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,sr(4194308,4,em.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sr(4194308,4,e,t)},useInsertionEffect:function(e,t){return sr(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=lt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=wy.bind(null,X,e),[i.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Lu,useDebugValue:Ql,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Lu(!1),t=e[0];return e=Sy.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=X,s=lt();if(H){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ue===null)throw Error(C(349));yn&30||Wf(i,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,Du(Qf.bind(null,i,r,e),[e]),i.flags|=2048,rs(9,Hf.bind(null,i,r,n,t),void 0,null),n},useId:function(){var e=lt(),t=ue.identifierPrefix;if(H){var n=xt,i=yt;n=(i&~(1<<32-st(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=is++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Py={readContext:Xe,useCallback:nm,useContext:Xe,useEffect:Hl,useImperativeHandle:tm,useInsertionEffect:Zf,useLayoutEffect:Jf,useMemo:im,useReducer:Io,useRef:Yf,useState:function(){return Io(ss)},useDebugValue:Ql,useDeferredValue:function(e){var t=Ye();return sm(t,ae.memoizedState,e)},useTransition:function(){var e=Io(ss)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:Kf,useId:rm,unstable_isNewReconciler:!1},Cy={readContext:Xe,useCallback:nm,useContext:Xe,useEffect:Hl,useImperativeHandle:tm,useInsertionEffect:Zf,useLayoutEffect:Jf,useMemo:im,useReducer:zo,useRef:Yf,useState:function(){return zo(ss)},useDebugValue:Ql,useDeferredValue:function(e){var t=Ye();return ae===null?t.memoizedState=e:sm(t,ae.memoizedState,e)},useTransition:function(){var e=zo(ss)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:Kf,useId:rm,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Da(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jr={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Pe(),s=qt(e),r=St(i,s);r.payload=t,n!=null&&(r.callback=n),t=Bt(e,r,s),t!==null&&(rt(t,e,s,i),nr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Pe(),s=qt(e),r=St(i,s);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Bt(e,r,s),t!==null&&(rt(t,e,s,i),nr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),i=qt(e),s=St(n,i);s.tag=2,t!=null&&(s.callback=t),t=Bt(e,s,i),t!==null&&(rt(t,e,i,n),nr(t,e,i))}};function Iu(e,t,n,i,s,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,o):t.prototype&&t.prototype.isPureReactComponent?!Yi(n,i)||!Yi(s,r):!0}function cm(e,t,n){var i=!1,s=Ht,r=t.contextType;return typeof r=="object"&&r!==null?r=Xe(r):(s=Ne(t)?gn:we.current,i=t.contextTypes,r=(i=i!=null)?Zn(e,s):Ht),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jr,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=r),t}function zu(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Jr.enqueueReplaceState(t,t.state,null)}function Ia(e,t,n,i){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ol(e);var r=t.contextType;typeof r=="object"&&r!==null?s.context=Xe(r):(r=Ne(t)?gn:we.current,s.context=Zn(e,r)),s.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Da(e,t,r,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Jr.enqueueReplaceState(s,s.state,null),br(e,n,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ni(e,t){try{var n="",i=t;do n+=Jg(i),i=i.return;while(i);var s=n}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:s,digest:null}}function Vo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jy=typeof WeakMap=="function"?WeakMap:Map;function um(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Rr||(Rr=!0,Wa=i),za(e,t)},n}function dm(e,t,n){n=St(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;n.payload=function(){return i(s)},n.callback=function(){za(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof i!="function"&&($t===null?$t=new Set([this]):$t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Vu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new jy;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(s.add(n),e=Oy.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _u(e,t,n,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var by=At.ReactCurrentOwner,ke=!1;function Ee(e,t,n,i){t.child=e===null?Of(t,null,n,i):ei(t,e.child,n,i)}function Ou(e,t,n,i,s){n=n.render;var r=t.ref;return Gn(t,s),i=Kl(e,t,n,i,r,s),n=Wl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,bt(e,t,s)):(H&&n&&Ll(t),t.flags|=1,Ee(e,t,i,s),t.child)}function Uu(e,t,n,i,s){if(e===null){var r=n.type;return typeof r=="function"&&!nc(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,pm(e,t,r,i,s)):(e=lr(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&s)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(o,i)&&e.ref===t.ref)return bt(e,t,s)}return t.flags|=1,e=Kt(r,i),e.ref=t.ref,e.return=t,t.child=e}function pm(e,t,n,i,s){if(e!==null){var r=e.memoizedProps;if(Yi(r,i)&&e.ref===t.ref)if(ke=!1,t.pendingProps=i=r,(e.lanes&s)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,bt(e,t,s)}return Va(e,t,n,i,s)}function fm(e,t,n){var i=t.pendingProps,s=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Fn,ze),ze|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Fn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=r!==null?r.baseLanes:n,B(Fn,ze),ze|=i}else r!==null?(i=r.baseLanes|n,t.memoizedState=null):i=n,B(Fn,ze),ze|=i;return Ee(e,t,s,n),t.child}function mm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Va(e,t,n,i,s){var r=Ne(n)?gn:we.current;return r=Zn(t,r),Gn(t,s),n=Kl(e,t,n,i,r,s),i=Wl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,bt(e,t,s)):(H&&i&&Ll(t),t.flags|=1,Ee(e,t,n,s),t.child)}function Bu(e,t,n,i,s){if(Ne(n)){var r=!0;Tr(t)}else r=!1;if(Gn(t,s),t.stateNode===null)rr(e,t),cm(t,n,i),Ia(t,n,i,s),i=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xe(c):(c=Ne(n)?gn:we.current,c=Zn(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&zu(t,o,i,c),Lt=!1;var p=t.memoizedState;o.state=p,br(t,i,o,s),l=t.memoizedState,a!==i||p!==l||Ae.current||Lt?(typeof u=="function"&&(Da(t,n,u,i),l=t.memoizedState),(a=Lt||Iu(t,n,a,i,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Bf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:tt(t.type,a),o.props=c,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xe(l):(l=Ne(n)?gn:we.current,l=Zn(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&zu(t,o,i,l),Lt=!1,p=t.memoizedState,o.state=p,br(t,i,o,s);var y=t.memoizedState;a!==d||p!==y||Ae.current||Lt?(typeof g=="function"&&(Da(t,n,g,i),y=t.memoizedState),(c=Lt||Iu(t,n,c,i,p,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return Fa(e,t,n,i,r,s)}function Fa(e,t,n,i,s,r){mm(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return s&&bu(t,n,!1),bt(e,t,r);i=t.stateNode,by.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=ei(t,e.child,null,r),t.child=ei(t,null,a,r)):Ee(e,t,a,r),t.memoizedState=i.state,s&&bu(t,n,!0),t.child}function hm(e){var t=e.stateNode;t.pendingContext?ju(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ju(e,t.context,!1),Ul(e,t.containerInfo)}function $u(e,t,n,i,s){return Jn(),Il(s),t.flags|=256,Ee(e,t,n,i),t.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function gm(e,t,n){var i=t.pendingProps,s=Q.current,r=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),B(Q,s&1),e===null)return Ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,r?(i=t.mode,r=t.child,o={mode:"hidden",children:o},!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=no(o,i,0,null),e=pn(e,i,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=Oa(n),t.memoizedState=_a,e):Gl(t,o));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return ky(e,t,o,i,a,s,n);if(r){r=i.fallback,o=t.mode,s=e.child,a=s.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=Kt(s,l),i.subtreeFlags=s.subtreeFlags&14680064),a!==null?r=Kt(a,r):(r=pn(r,o,n,null),r.flags|=2),r.return=t,i.return=t,i.sibling=r,t.child=i,i=r,r=t.child,o=e.child.memoizedState,o=o===null?Oa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~n,t.memoizedState=_a,i}return r=e.child,e=r.sibling,i=Kt(r,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Gl(e,t){return t=no({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bs(e,t,n,i){return i!==null&&Il(i),ei(t,e.child,null,n),e=Gl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ky(e,t,n,i,s,r,o){if(n)return t.flags&256?(t.flags&=-257,i=Vo(Error(C(422))),Bs(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=i.fallback,s=t.mode,i=no({mode:"visible",children:i.children},s,0,null),r=pn(r,s,o,null),r.flags|=2,i.return=t,r.return=t,i.sibling=r,t.child=i,t.mode&1&&ei(t,e.child,null,o),t.child.memoizedState=Oa(o),t.memoizedState=_a,r);if(!(t.mode&1))return Bs(e,t,o,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var a=i.dgst;return i=a,r=Error(C(419)),i=Vo(r,i,void 0),Bs(e,t,o,i)}if(a=(o&e.childLanes)!==0,ke||a){if(i=ue,i!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|o)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,jt(e,s),rt(i,e,s,-1))}return tc(),i=Vo(Error(C(421))),Bs(e,t,o,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Uy.bind(null,e),s._reactRetry=t,null):(e=r.treeContext,Ve=Ut(s.nextSibling),Fe=t,H=!0,it=null,e!==null&&(We[He++]=yt,We[He++]=xt,We[He++]=vn,yt=e.id,xt=e.overflow,vn=t),t=Gl(t,i.children),t.flags|=4096,t)}function qu(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),La(e.return,t,n)}function Fo(e,t,n,i,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s)}function vm(e,t,n){var i=t.pendingProps,s=i.revealOrder,r=i.tail;if(Ee(e,t,i.children,n),i=Q.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,n,t);else if(e.tag===19)qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(B(Q,i),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&kr(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Fo(t,!1,s,n,r);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&kr(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Fo(t,!0,n,null,r);break;case"together":Fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ay(e,t,n){switch(t.tag){case 3:hm(t),Jn();break;case 5:$f(t);break;case 1:Ne(t.type)&&Tr(t);break;case 4:Ul(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;B(Cr,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?gm(e,t,n):(B(Q,Q.current&1),e=bt(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return vm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),B(Q,Q.current),i)break;return null;case 22:case 23:return t.lanes=0,fm(e,t,n)}return bt(e,t,n)}var ym,Ua,xm,Sm;ym=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ua=function(){};xm=function(e,t,n,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,cn(dt.current);var r=null;switch(n){case"input":s=ca(e,s),i=ca(e,i),r=[];break;case"select":s=Y({},s,{value:void 0}),i=Y({},i,{value:void 0}),r=[];break;case"textarea":s=pa(e,s),i=pa(e,i),r=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Sr)}ma(n,i);var o;n=null;for(c in s)if(!i.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qi.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in i){var l=i[c];if(a=s!=null?s[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(r||(r=[]),r.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(r=r||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$("scroll",e),r||a===l||(r=[])):(r=r||[]).push(c,l))}n&&(r=r||[]).push("style",n);var c=r;(t.updateQueue=c)&&(t.flags|=4)}};Sm=function(e,t,n,i){n!==i&&(t.flags|=4)};function xi(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Ny(e,t,n){var i=t.pendingProps;switch(Dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ne(t.type)&&wr(),ve(t),null;case 3:return i=t.stateNode,ti(),K(Ae),K(we),$l(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(Ga(it),it=null))),Ua(e,t),ve(t),null;case 5:Bl(t);var s=cn(ns.current);if(n=t.type,e!==null&&t.stateNode!=null)xm(e,t,n,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=cn(dt.current),Os(t)){i=t.stateNode,n=t.type;var r=t.memoizedProps;switch(i[ct]=t,i[es]=r,e=(t.mode&1)!==0,n){case"dialog":$("cancel",i),$("close",i);break;case"iframe":case"object":case"embed":$("load",i);break;case"video":case"audio":for(s=0;s<bi.length;s++)$(bi[s],i);break;case"source":$("error",i);break;case"img":case"image":case"link":$("error",i),$("load",i);break;case"details":$("toggle",i);break;case"input":Jc(i,r),$("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!r.multiple},$("invalid",i);break;case"textarea":tu(i,r),$("invalid",i)}ma(n,r),s=null;for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];o==="children"?typeof a=="string"?i.textContent!==a&&(r.suppressHydrationWarning!==!0&&_s(i.textContent,a,e),s=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(r.suppressHydrationWarning!==!0&&_s(i.textContent,a,e),s=["children",""+a]):qi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$("scroll",i)}switch(n){case"input":Ms(i),eu(i,r,!0);break;case"textarea":Ms(i),nu(i);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(i.onclick=Sr)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(n,{is:i.is}):(e=o.createElement(n),n==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,n),e[ct]=t,e[es]=i,ym(e,t,!1,!1),t.stateNode=e;e:{switch(o=ha(n,i),n){case"dialog":$("cancel",e),$("close",e),s=i;break;case"iframe":case"object":case"embed":$("load",e),s=i;break;case"video":case"audio":for(s=0;s<bi.length;s++)$(bi[s],e);s=i;break;case"source":$("error",e),s=i;break;case"img":case"image":case"link":$("error",e),$("load",e),s=i;break;case"details":$("toggle",e),s=i;break;case"input":Jc(e,i),s=ca(e,i),$("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=Y({},i,{value:void 0}),$("invalid",e);break;case"textarea":tu(e,i),s=pa(e,i),$("invalid",e);break;default:s=i}ma(n,s),a=s;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];r==="style"?Xp(e,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qp(e,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ki(e,l):typeof l=="number"&&Ki(e,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(qi.hasOwnProperty(r)?l!=null&&r==="onScroll"&&$("scroll",e):l!=null&&xl(e,r,l,o))}switch(n){case"input":Ms(e),eu(e,i,!1);break;case"textarea":Ms(e),nu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Wt(i.value));break;case"select":e.multiple=!!i.multiple,r=i.value,r!=null?Kn(e,!!i.multiple,r,!1):i.defaultValue!=null&&Kn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Sr)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Sm(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(C(166));if(n=cn(ns.current),cn(dt.current),Os(t)){if(i=t.stateNode,n=t.memoizedProps,i[ct]=t,(r=i.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:_s(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_s(i.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ct]=t,t.stateNode=i}return ve(t),null;case 13:if(K(Q),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ve!==null&&t.mode&1&&!(t.flags&128))Ff(),Jn(),t.flags|=98560,r=!1;else if(r=Os(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(C(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(C(317));r[ct]=t}else Jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),r=!1}else it!==null&&(Ga(it),it=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?le===0&&(le=3):tc())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return ti(),Ua(e,t),e===null&&Zi(t.stateNode.containerInfo),ve(t),null;case 10:return Fl(t.type._context),ve(t),null;case 17:return Ne(t.type)&&wr(),ve(t),null;case 19:if(K(Q),r=t.memoizedState,r===null)return ve(t),null;if(i=(t.flags&128)!==0,o=r.rendering,o===null)if(i)xi(r,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=kr(e),o!==null){for(t.flags|=128,xi(r,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)r=n,e=i,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}r.tail!==null&&re()>ii&&(t.flags|=128,i=!0,xi(r,!1),t.lanes=4194304)}else{if(!i)if(e=kr(o),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!H)return ve(t),null}else 2*re()-r.renderingStartTime>ii&&n!==1073741824&&(t.flags|=128,i=!0,xi(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(n=r.last,n!==null?n.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=re(),t.sibling=null,n=Q.current,B(Q,i?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return ec(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?ze&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function My(e,t){switch(Dl(t),t.tag){case 1:return Ne(t.type)&&wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ti(),K(Ae),K(we),$l(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bl(t),null;case 13:if(K(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Q),null;case 4:return ti(),null;case 10:return Fl(t.type._context),null;case 22:case 23:return ec(),null;case 24:return null;default:return null}}var $s=!1,xe=!1,Ry=typeof WeakSet=="function"?WeakSet:Set,A=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ee(e,t,i)}else n.current=null}function Ba(e,t,n){try{n()}catch(i){ee(e,t,i)}}var Ku=!1;function Ly(e,t){if(Ca=vr,e=Cf(),Rl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var g;d!==n||s!==0&&d.nodeType!==3||(a=o+s),d!==r||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++c===s&&(a=o),p===r&&++u===i&&(l=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ja={focusedElem:e,selectionRange:n},vr=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,T=y.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:tt(t.type,x),T);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=Ku,Ku=!1,y}function Vi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var r=s.destroy;s.destroy=void 0,r!==void 0&&Ba(t,n,r)}s=s.next}while(s!==i)}}function eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function $a(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wm(e){var t=e.alternate;t!==null&&(e.alternate=null,wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[es],delete t[Aa],delete t[hy],delete t[gy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tm(e){return e.tag===5||e.tag===3||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qa(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sr));else if(i!==4&&(e=e.child,e!==null))for(qa(e,t,n),e=e.sibling;e!==null;)qa(e,t,n),e=e.sibling}function Ka(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ka(e,t,n),e=e.sibling;e!==null;)Ka(e,t,n),e=e.sibling}var pe=null,nt=!1;function Nt(e,t,n){for(n=n.child;n!==null;)Em(e,t,n),n=n.sibling}function Em(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Wr,n)}catch{}switch(n.tag){case 5:xe||Vn(n,t);case 6:var i=pe,s=nt;pe=null,Nt(e,t,n),pe=i,nt=s,pe!==null&&(nt?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(nt?(e=pe,n=n.stateNode,e.nodeType===8?Mo(e.parentNode,n):e.nodeType===1&&Mo(e,n),Gi(e)):Mo(pe,n.stateNode));break;case 4:i=pe,s=nt,pe=n.stateNode.containerInfo,nt=!0,Nt(e,t,n),pe=i,nt=s;break;case 0:case 11:case 14:case 15:if(!xe&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var r=s,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&Ba(n,t,o),s=s.next}while(s!==i)}Nt(e,t,n);break;case 1:if(!xe&&(Vn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ee(n,t,a)}Nt(e,t,n);break;case 21:Nt(e,t,n);break;case 22:n.mode&1?(xe=(i=xe)||n.memoizedState!==null,Nt(e,t,n),xe=i):Nt(e,t,n);break;default:Nt(e,t,n)}}function Hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ry),t.forEach(function(i){var s=By.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var r=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,nt=!1;break e;case 3:pe=a.stateNode.containerInfo,nt=!0;break e;case 4:pe=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(pe===null)throw Error(C(160));Em(r,o,s),pe=null,nt=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){ee(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pm(t,e),t=t.sibling}function Pm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),at(e),i&4){try{Vi(3,e,e.return),eo(3,e)}catch(x){ee(e,e.return,x)}try{Vi(5,e,e.return)}catch(x){ee(e,e.return,x)}}break;case 1:Je(t,e),at(e),i&512&&n!==null&&Vn(n,n.return);break;case 5:if(Je(t,e),at(e),i&512&&n!==null&&Vn(n,n.return),e.flags&32){var s=e.stateNode;try{Ki(s,"")}catch(x){ee(e,e.return,x)}}if(i&4&&(s=e.stateNode,s!=null)){var r=e.memoizedProps,o=n!==null?n.memoizedProps:r,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&r.type==="radio"&&r.name!=null&&Kp(s,r),ha(a,o);var c=ha(a,r);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Xp(s,d):u==="dangerouslySetInnerHTML"?Qp(s,d):u==="children"?Ki(s,d):xl(s,u,d,c)}switch(a){case"input":ua(s,r);break;case"textarea":Wp(s,r);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var g=r.value;g!=null?Kn(s,!!r.multiple,g,!1):p!==!!r.multiple&&(r.defaultValue!=null?Kn(s,!!r.multiple,r.defaultValue,!0):Kn(s,!!r.multiple,r.multiple?[]:"",!1))}s[es]=r}catch(x){ee(e,e.return,x)}}break;case 6:if(Je(t,e),at(e),i&4){if(e.stateNode===null)throw Error(C(162));s=e.stateNode,r=e.memoizedProps;try{s.nodeValue=r}catch(x){ee(e,e.return,x)}}break;case 3:if(Je(t,e),at(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(t.containerInfo)}catch(x){ee(e,e.return,x)}break;case 4:Je(t,e),at(e);break;case 13:Je(t,e),at(e),s=e.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(Zl=re())),i&4&&Hu(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||u,Je(t,e),xe=c):Je(t,e),at(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(A=e,u=e.child;u!==null;){for(d=A=u;A!==null;){switch(p=A,g=p.child,p.tag){case 0:case 11:case 14:case 15:Vi(4,p,p.return);break;case 1:Vn(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{t=i,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ee(i,n,x)}}break;case 5:Vn(p,p.return);break;case 22:if(p.memoizedState!==null){Gu(d);continue}}g!==null?(g.return=p,A=g):Gu(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{s=d.stateNode,c?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gp("display",o))}catch(x){ee(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ee(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Je(t,e),at(e),i&4&&Hu(e);break;case 21:break;default:Je(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tm(n)){var i=n;break e}n=n.return}throw Error(C(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Ki(s,""),i.flags&=-33);var r=Wu(e);Ka(e,r,s);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Wu(e);qa(e,a,o);break;default:throw Error(C(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dy(e,t,n){A=e,Cm(e)}function Cm(e,t,n){for(var i=(e.mode&1)!==0;A!==null;){var s=A,r=s.child;if(s.tag===22&&i){var o=s.memoizedState!==null||$s;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||xe;a=$s;var c=xe;if($s=o,(xe=l)&&!c)for(A=s;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Xu(s):l!==null?(l.return=o,A=l):Xu(s);for(;r!==null;)A=r,Cm(r),r=r.sibling;A=s,$s=a,xe=c}Qu(e)}else s.subtreeFlags&8772&&r!==null?(r.return=s,A=r):Qu(e)}}function Qu(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||eo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!xe)if(n===null)i.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&Ru(t,r,i);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ru(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Gi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}xe||t.flags&512&&$a(t)}catch(p){ee(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Gu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Xu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{eo(4,t)}catch(l){ee(t,n,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(l){ee(t,s,l)}}var r=t.return;try{$a(t)}catch(l){ee(t,r,l)}break;case 5:var o=t.return;try{$a(t)}catch(l){ee(t,o,l)}}}catch(l){ee(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var Iy=Math.ceil,Mr=At.ReactCurrentDispatcher,Xl=At.ReactCurrentOwner,Ge=At.ReactCurrentBatchConfig,F=0,ue=null,oe=null,me=0,ze=0,Fn=Yt(0),le=0,os=null,xn=0,to=0,Yl=0,Fi=null,be=null,Zl=0,ii=1/0,gt=null,Rr=!1,Wa=null,$t=null,qs=!1,Vt=null,Lr=0,_i=0,Ha=null,or=-1,ar=0;function Pe(){return F&6?re():or!==-1?or:or=re()}function qt(e){return e.mode&1?F&2&&me!==0?me&-me:yy.transition!==null?(ar===0&&(ar=cf()),ar):(e=_,e!==0||(e=window.event,e=e===void 0?16:gf(e.type)),e):1}function rt(e,t,n,i){if(50<_i)throw _i=0,Ha=null,Error(C(185));fs(e,n,i),(!(F&2)||e!==ue)&&(e===ue&&(!(F&2)&&(to|=n),le===4&&It(e,me)),Me(e,i),n===1&&F===0&&!(t.mode&1)&&(ii=re()+500,Yr&&Zt()))}function Me(e,t){var n=e.callbackNode;yv(e,t);var i=gr(e,e===ue?me:0);if(i===0)n!==null&&ru(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&ru(n),t===1)e.tag===0?vy(Yu.bind(null,e)):If(Yu.bind(null,e)),fy(function(){!(F&6)&&Zt()}),n=null;else{switch(uf(i)){case 1:n=Pl;break;case 4:n=af;break;case 16:n=hr;break;case 536870912:n=lf;break;default:n=hr}n=Lm(n,jm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jm(e,t){if(or=-1,ar=0,F&6)throw Error(C(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var i=gr(e,e===ue?me:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Dr(e,i);else{t=i;var s=F;F|=2;var r=km();(ue!==e||me!==t)&&(gt=null,ii=re()+500,dn(e,t));do try{Fy();break}catch(a){bm(e,a)}while(!0);Vl(),Mr.current=r,F=s,oe!==null?t=0:(ue=null,me=0,t=le)}if(t!==0){if(t===2&&(s=Sa(e),s!==0&&(i=s,t=Qa(e,s))),t===1)throw n=os,dn(e,0),It(e,i),Me(e,re()),n;if(t===6)It(e,i);else{if(s=e.current.alternate,!(i&30)&&!zy(s)&&(t=Dr(e,i),t===2&&(r=Sa(e),r!==0&&(i=r,t=Qa(e,r))),t===1))throw n=os,dn(e,0),It(e,i),Me(e,re()),n;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(C(345));case 2:sn(e,be,gt);break;case 3:if(It(e,i),(i&130023424)===i&&(t=Zl+500-re(),10<t)){if(gr(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){Pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ka(sn.bind(null,e,be,gt),t);break}sn(e,be,gt);break;case 4:if(It(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var o=31-st(i);r=1<<o,o=t[o],o>s&&(s=o),i&=~r}if(i=s,i=re()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Iy(i/1960))-i,10<i){e.timeoutHandle=ka(sn.bind(null,e,be,gt),i);break}sn(e,be,gt);break;case 5:sn(e,be,gt);break;default:throw Error(C(329))}}}return Me(e,re()),e.callbackNode===n?jm.bind(null,e):null}function Qa(e,t){var n=Fi;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Dr(e,t),e!==2&&(t=be,be=n,t!==null&&Ga(t)),e}function Ga(e){be===null?be=e:be.push.apply(be,e)}function zy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!ot(r(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~Yl,t&=~to,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),i=1<<n;e[n]=-1,t&=~i}}function Yu(e){if(F&6)throw Error(C(327));Xn();var t=gr(e,0);if(!(t&1))return Me(e,re()),null;var n=Dr(e,t);if(e.tag!==0&&n===2){var i=Sa(e);i!==0&&(t=i,n=Qa(e,i))}if(n===1)throw n=os,dn(e,0),It(e,t),Me(e,re()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,be,gt),Me(e,re()),null}function Jl(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(ii=re()+500,Yr&&Zt())}}function Sn(e){Vt!==null&&Vt.tag===0&&!(F&6)&&Xn();var t=F;F|=1;var n=Ge.transition,i=_;try{if(Ge.transition=null,_=1,e)return e()}finally{_=i,Ge.transition=n,F=t,!(F&6)&&Zt()}}function ec(){ze=Fn.current,K(Fn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,py(n)),oe!==null)for(n=oe.return;n!==null;){var i=n;switch(Dl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wr();break;case 3:ti(),K(Ae),K(we),$l();break;case 5:Bl(i);break;case 4:ti();break;case 13:K(Q);break;case 19:K(Q);break;case 10:Fl(i.type._context);break;case 22:case 23:ec()}n=n.return}if(ue=e,oe=e=Kt(e.current,null),me=ze=t,le=0,os=null,Yl=to=xn=0,be=Fi=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,r=n.pending;if(r!==null){var o=r.next;r.next=s,i.next=o}n.pending=i}ln=null}return e}function bm(e,t){do{var n=oe;try{if(Vl(),ir.current=Nr,Ar){for(var i=X.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Ar=!1}if(yn=0,ce=ae=X=null,zi=!1,is=0,Xl.current=null,n===null||n.return===null){le=1,os=t,oe=null;break}e:{var r=e,o=n.return,a=n,l=t;if(t=me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Fu(o);if(g!==null){g.flags&=-257,_u(g,o,a,r,t),g.mode&1&&Vu(r,c,t),t=g,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Vu(r,c,t),tc();break e}l=Error(C(426))}}else if(H&&a.mode&1){var T=Fu(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),_u(T,o,a,r,t),Il(ni(l,a));break e}}r=l=ni(l,a),le!==4&&(le=2),Fi===null?Fi=[r]:Fi.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var m=um(r,l,t);Mu(r,m);break e;case 1:a=l;var f=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&($t===null||!$t.has(h)))){r.flags|=65536,t&=-t,r.lanes|=t;var S=dm(r,a,t);Mu(r,S);break e}}r=r.return}while(r!==null)}Nm(n)}catch(w){t=w,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function km(){var e=Mr.current;return Mr.current=Nr,e===null?Nr:e}function tc(){(le===0||le===3||le===2)&&(le=4),ue===null||!(xn&268435455)&&!(to&268435455)||It(ue,me)}function Dr(e,t){var n=F;F|=2;var i=km();(ue!==e||me!==t)&&(gt=null,dn(e,t));do try{Vy();break}catch(s){bm(e,s)}while(!0);if(Vl(),F=n,Mr.current=i,oe!==null)throw Error(C(261));return ue=null,me=0,le}function Vy(){for(;oe!==null;)Am(oe)}function Fy(){for(;oe!==null&&!cv();)Am(oe)}function Am(e){var t=Rm(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Nm(e):oe=t,Xl.current=null}function Nm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=My(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=Ny(n,t,ze),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function sn(e,t,n){var i=_,s=Ge.transition;try{Ge.transition=null,_=1,_y(e,t,n,i)}finally{Ge.transition=s,_=i}return null}function _y(e,t,n,i){do Xn();while(Vt!==null);if(F&6)throw Error(C(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(xv(e,r),e===ue&&(oe=ue=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qs||(qs=!0,Lm(hr,function(){return Xn(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=Ge.transition,Ge.transition=null;var o=_;_=1;var a=F;F|=4,Xl.current=null,Ly(e,n),Pm(n,e),ry(ja),vr=!!Ca,ja=Ca=null,e.current=n,Dy(n),uv(),F=a,_=o,Ge.transition=r}else e.current=n;if(qs&&(qs=!1,Vt=e,Lr=s),r=e.pendingLanes,r===0&&($t=null),fv(n.stateNode),Me(e,re()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Rr)throw Rr=!1,e=Wa,Wa=null,e;return Lr&1&&e.tag!==0&&Xn(),r=e.pendingLanes,r&1?e===Ha?_i++:(_i=0,Ha=e):_i=0,Zt(),null}function Xn(){if(Vt!==null){var e=uf(Lr),t=Ge.transition,n=_;try{if(Ge.transition=null,_=16>e?16:e,Vt===null)var i=!1;else{if(e=Vt,Vt=null,Lr=0,F&6)throw Error(C(331));var s=F;for(F|=4,A=e.current;A!==null;){var r=A,o=r.child;if(A.flags&16){var a=r.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(A=c;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:Vi(8,u,r)}var d=u.child;if(d!==null)d.return=u,A=d;else for(;A!==null;){u=A;var p=u.sibling,g=u.return;if(wm(u),u===c){A=null;break}if(p!==null){p.return=g,A=p;break}A=g}}}var y=r.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}A=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,A=o;else e:for(;A!==null;){if(r=A,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Vi(9,r,r.return)}var m=r.sibling;if(m!==null){m.return=r.return,A=m;break e}A=r.return}}var f=e.current;for(A=f;A!==null;){o=A;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,A=h;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eo(9,a)}}catch(w){ee(a,a.return,w)}if(a===o){A=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,A=S;break e}A=a.return}}if(F=s,Zt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Wr,e)}catch{}i=!0}return i}finally{_=n,Ge.transition=t}}return!1}function Zu(e,t,n){t=ni(n,t),t=um(e,t,1),e=Bt(e,t,1),t=Pe(),e!==null&&(fs(e,1,t),Me(e,t))}function ee(e,t,n){if(e.tag===3)Zu(e,e,n);else for(;t!==null;){if(t.tag===3){Zu(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($t===null||!$t.has(i))){e=ni(n,e),e=dm(t,e,1),t=Bt(t,e,1),e=Pe(),t!==null&&(fs(t,1,e),Me(t,e));break}}t=t.return}}function Oy(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>re()-Zl?dn(e,0):Yl|=n),Me(e,t)}function Mm(e,t){t===0&&(e.mode&1?(t=Ds,Ds<<=1,!(Ds&130023424)&&(Ds=4194304)):t=1);var n=Pe();e=jt(e,t),e!==null&&(fs(e,t,n),Me(e,n))}function Uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mm(e,n)}function By(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(C(314))}i!==null&&i.delete(t),Mm(e,n)}var Rm;Rm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,Ay(e,t,n);ke=!!(e.flags&131072)}else ke=!1,H&&t.flags&1048576&&zf(t,Pr,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;rr(e,t),e=t.pendingProps;var s=Zn(t,we.current);Gn(t,n),s=Kl(null,t,i,e,s,n);var r=Wl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(i)?(r=!0,Tr(t)):r=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ol(t),s.updater=Jr,t.stateNode=s,s._reactInternals=t,Ia(t,i,e,n),t=Fa(null,t,i,!0,r,n)):(t.tag=0,H&&r&&Ll(t),Ee(null,t,s,n),t=t.child),t;case 16:i=t.elementType;e:{switch(rr(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=qy(i),e=tt(i,e),s){case 0:t=Va(null,t,i,e,n);break e;case 1:t=Bu(null,t,i,e,n);break e;case 11:t=Ou(null,t,i,e,n);break e;case 14:t=Uu(null,t,i,tt(i.type,e),n);break e}throw Error(C(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:tt(i,s),Va(e,t,i,s,n);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:tt(i,s),Bu(e,t,i,s,n);case 3:e:{if(hm(t),e===null)throw Error(C(387));i=t.pendingProps,r=t.memoizedState,s=r.element,Bf(e,t),br(t,i,null,n);var o=t.memoizedState;if(i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){s=ni(Error(C(423)),t),t=$u(e,t,i,n,s);break e}else if(i!==s){s=ni(Error(C(424)),t),t=$u(e,t,i,n,s);break e}else for(Ve=Ut(t.stateNode.containerInfo.firstChild),Fe=t,H=!0,it=null,n=Of(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),i===s){t=bt(e,t,n);break e}Ee(e,t,i,n)}t=t.child}return t;case 5:return $f(t),e===null&&Ra(t),i=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,o=s.children,ba(i,s)?o=null:r!==null&&ba(i,r)&&(t.flags|=32),mm(e,t),Ee(e,t,o,n),t.child;case 6:return e===null&&Ra(t),null;case 13:return gm(e,t,n);case 4:return Ul(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ei(t,null,i,n):Ee(e,t,i,n),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:tt(i,s),Ou(e,t,i,s,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,r=t.memoizedProps,o=s.value,B(Cr,i._currentValue),i._currentValue=o,r!==null)if(ot(r.value,o)){if(r.children===s.children&&!Ae.current){t=bt(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var a=r.dependencies;if(a!==null){o=r.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(r.tag===1){l=St(-1,n&-n),l.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),La(r.return,n,t),a.lanes|=n;break}l=l.next}}else if(r.tag===10)o=r.type===t.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),La(o,n,t),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===t){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}Ee(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,Gn(t,n),s=Xe(s),i=i(s),t.flags|=1,Ee(e,t,i,n),t.child;case 14:return i=t.type,s=tt(i,t.pendingProps),s=tt(i.type,s),Uu(e,t,i,s,n);case 15:return pm(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:tt(i,s),rr(e,t),t.tag=1,Ne(i)?(e=!0,Tr(t)):e=!1,Gn(t,n),cm(t,i,s),Ia(t,i,s,n),Fa(null,t,i,!0,e,n);case 19:return vm(e,t,n);case 22:return fm(e,t,n)}throw Error(C(156,t.tag))};function Lm(e,t){return of(e,t)}function $y(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,i){return new $y(e,t,n,i)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qy(e){if(typeof e=="function")return nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wl)return 11;if(e===Tl)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lr(e,t,n,i,s,r){var o=2;if(i=e,typeof e=="function")nc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case kn:return pn(n.children,s,r,t);case Sl:o=8,s|=8;break;case ra:return e=Qe(12,n,t,s|2),e.elementType=ra,e.lanes=r,e;case oa:return e=Qe(13,n,t,s),e.elementType=oa,e.lanes=r,e;case aa:return e=Qe(19,n,t,s),e.elementType=aa,e.lanes=r,e;case Bp:return no(n,s,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Op:o=10;break e;case Up:o=9;break e;case wl:o=11;break e;case Tl:o=14;break e;case Rt:o=16,i=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Qe(o,n,t,s),t.elementType=e,t.type=i,t.lanes=r,t}function pn(e,t,n,i){return e=Qe(7,e,i,t),e.lanes=n,e}function no(e,t,n,i){return e=Qe(22,e,i,t),e.elementType=Bp,e.lanes=n,e.stateNode={isHidden:!1},e}function _o(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Oo(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ky(e,t,n,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=So(0),this.expirationTimes=So(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ic(e,t,n,i,s,r,o,a,l){return e=new Ky(e,t,n,a,l),t===1?(t=1,r===!0&&(t|=8)):t=0,r=Qe(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(r),e}function Wy(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Dm(e){if(!e)return Ht;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Df(e,n,t)}return t}function Im(e,t,n,i,s,r,o,a,l){return e=ic(n,i,!0,e,s,r,o,a,l),e.context=Dm(null),n=e.current,i=Pe(),s=qt(n),r=St(i,s),r.callback=t??null,Bt(n,r,s),e.current.lanes=s,fs(e,s,i),Me(e,i),e}function io(e,t,n,i){var s=t.current,r=Pe(),o=qt(s);return n=Dm(n),t.context===null?t.context=n:t.pendingContext=n,t=St(r,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Bt(s,t,o),e!==null&&(rt(e,s,o,r),nr(e,s,o)),o}function Ir(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sc(e,t){Ju(e,t),(e=e.alternate)&&Ju(e,t)}function Hy(){return null}var zm=typeof reportError=="function"?reportError:function(e){console.error(e)};function rc(e){this._internalRoot=e}so.prototype.render=rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));io(e,t,null,null)};so.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){io(null,e,null,null)}),t[Ct]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&hf(e)}};function oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function Qy(e,t,n,i,s){if(s){if(typeof i=="function"){var r=i;i=function(){var c=Ir(o);r.call(c)}}var o=Im(t,i,e,0,null,!1,!1,"",ed);return e._reactRootContainer=o,e[Ct]=o.current,Zi(e.nodeType===8?e.parentNode:e),Sn(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var a=i;i=function(){var c=Ir(l);a.call(c)}}var l=ic(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=l,e[Ct]=l.current,Zi(e.nodeType===8?e.parentNode:e),Sn(function(){io(t,l,n,i)}),l}function oo(e,t,n,i,s){var r=n._reactRootContainer;if(r){var o=r;if(typeof s=="function"){var a=s;s=function(){var l=Ir(o);a.call(l)}}io(t,o,e,s)}else o=Qy(n,t,e,s,i);return Ir(o)}df=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ji(t.pendingLanes);n!==0&&(Cl(t,n|1),Me(t,re()),!(F&6)&&(ii=re()+500,Zt()))}break;case 13:Sn(function(){var i=jt(e,1);if(i!==null){var s=Pe();rt(i,e,1,s)}}),sc(e,1)}};jl=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Pe();rt(t,e,134217728,n)}sc(e,134217728)}};pf=function(e){if(e.tag===13){var t=qt(e),n=jt(e,t);if(n!==null){var i=Pe();rt(n,e,t,i)}sc(e,t)}};ff=function(){return _};mf=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};va=function(e,t,n){switch(t){case"input":if(ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=Xr(i);if(!s)throw Error(C(90));qp(i),ua(i,s)}}}break;case"textarea":Wp(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};Jp=Jl;ef=Sn;var Gy={usingClientEntryPoint:!1,Events:[hs,Rn,Xr,Yp,Zp,Jl]},Si={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xy={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sf(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||Hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{Wr=Ks.inject(Xy),ut=Ks}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(t))throw Error(C(200));return Wy(e,t,null,n)};Be.createRoot=function(e,t){if(!oc(e))throw Error(C(299));var n=!1,i="",s=zm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ic(e,1,!1,null,null,n,!1,i,s),e[Ct]=t.current,Zi(e.nodeType===8?e.parentNode:e),new rc(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=sf(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return Sn(e)};Be.hydrate=function(e,t,n){if(!ro(t))throw Error(C(200));return oo(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!oc(e))throw Error(C(405));var i=n!=null&&n.hydratedSources||null,s=!1,r="",o=zm;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Im(t,null,e,1,n??null,s,!1,r,o),e[Ct]=t.current,Zi(e),i)for(e=0;e<i.length;e++)n=i[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new so(t)};Be.render=function(e,t,n){if(!ro(t))throw Error(C(200));return oo(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!ro(e))throw Error(C(40));return e._reactRootContainer?(Sn(function(){oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};Be.unstable_batchedUpdates=Jl;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!ro(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return oo(e,t,n,!1,i)};Be.version="18.3.1-next-f1338f8080-20240426";function Vm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vm)}catch(e){console.error(e)}}Vm(),zp.exports=Be;var Yy=zp.exports,Fm,td=Yy;Fm=td.createRoot,td.hydrateRoot;const ac=k.createContext({});function lc(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const ao=k.createContext(null),cc=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Zy extends k.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Jy({children:e,isPresent:t}){const n=k.useId(),i=k.useRef(null),s=k.useRef({width:0,height:0,top:0,left:0}),{nonce:r}=k.useContext(cc);return k.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=s.current;if(t||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return r&&(u.nonce=r),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),v.jsx(Zy,{isPresent:t,childRef:i,sizeRef:s,children:k.cloneElement(e,{ref:i})})}const e0=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:o})=>{const a=lc(t0),l=k.useId(),c=k.useCallback(d=>{a.set(d,!0);for(const p of a.values())if(!p)return;i&&i()},[a,i]),u=k.useMemo(()=>({id:l,initial:t,isPresent:n,custom:s,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),r?[Math.random(),c]:[n,c]);return k.useMemo(()=>{a.forEach((d,p)=>a.set(p,!1))},[n]),k.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(e=v.jsx(Jy,{isPresent:n,children:e})),v.jsx(ao.Provider,{value:u,children:e})};function t0(){return new Map}function _m(e=!0){const t=k.useContext(ao);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:s}=t,r=k.useId();k.useEffect(()=>{e&&s(r)},[e]);const o=k.useCallback(()=>e&&i&&i(r),[r,i,e]);return!n&&i?[!1,o]:[!0]}const Ws=e=>e.key||"";function nd(e){const t=[];return k.Children.forEach(e,n=>{k.isValidElement(n)&&t.push(n)}),t}const uc=typeof window<"u",Om=uc?k.useLayoutEffect:k.useEffect,n0=({children:e,custom:t,initial:n=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:r="sync",propagate:o=!1})=>{const[a,l]=_m(o),c=k.useMemo(()=>nd(e),[e]),u=o&&!a?[]:c.map(Ws),d=k.useRef(!0),p=k.useRef(c),g=lc(()=>new Map),[y,x]=k.useState(c),[T,m]=k.useState(c);Om(()=>{d.current=!1,p.current=c;for(let S=0;S<T.length;S++){const w=Ws(T[S]);u.includes(w)?g.delete(w):g.get(w)!==!0&&g.set(w,!1)}},[T,u.length,u.join("-")]);const f=[];if(c!==y){let S=[...c];for(let w=0;w<T.length;w++){const E=T[w],j=Ws(E);u.includes(j)||(S.splice(w,0,E),f.push(E))}r==="wait"&&f.length&&(S=f),m(nd(S)),x(c);return}const{forceRender:h}=k.useContext(ac);return v.jsx(v.Fragment,{children:T.map(S=>{const w=Ws(S),E=o&&!a?!1:c===T||u.includes(w),j=()=>{if(g.has(w))g.set(w,!0);else return;let P=!0;g.forEach(I=>{I||(P=!1)}),P&&(h==null||h(),m(p.current),o&&(l==null||l()),i&&i())};return v.jsx(e0,{isPresent:E,initial:!d.current||n?void 0:!1,custom:E?void 0:t,presenceAffectsLayout:s,mode:r,onExitComplete:E?void 0:j,children:S},w)})})},_e=e=>e;let Um=_e;function dc(e){let t;return()=>(t===void 0&&(t=e()),t)}const si=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},wt=e=>e*1e3,Tt=e=>e/1e3,i0={useManualTiming:!1};function s0(e){let t=new Set,n=new Set,i=!1,s=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){r.has(c)&&(l.schedule(c),e()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const g=d&&i?t:n;return u&&r.add(c),g.has(c)||g.add(c),c},cancel:c=>{n.delete(c),r.delete(c)},process:c=>{if(o=c,i){s=!0;return}i=!0,[t,n]=[n,t],t.forEach(a),t.clear(),i=!1,s&&(s=!1,l.process(c))}};return l}const Hs=["read","resolveKeyframes","update","preRender","render","postRender"],r0=40;function Bm(e,t){let n=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,o=Hs.reduce((m,f)=>(m[f]=s0(r),m),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:p}=o,g=()=>{const m=performance.now();n=!1,s.delta=i?1e3/60:Math.max(Math.min(m-s.timestamp,r0),1),s.timestamp=m,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),d.process(s),p.process(s),s.isProcessing=!1,n&&t&&(i=!1,e(g))},y=()=>{n=!0,i=!0,s.isProcessing||e(g)};return{schedule:Hs.reduce((m,f)=>{const h=o[f];return m[f]=(S,w=!1,E=!1)=>(n||y(),h.schedule(S,w,E)),m},{}),cancel:m=>{for(let f=0;f<Hs.length;f++)o[Hs[f]].cancel(m)},state:s,steps:o}}const{schedule:W,cancel:Qt,state:fe,steps:Uo}=Bm(typeof requestAnimationFrame<"u"?requestAnimationFrame:_e,!0),$m=k.createContext({strict:!1}),id={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ri={};for(const e in id)ri[e]={isEnabled:t=>id[e].some(n=>!!t[n])};function o0(e){for(const t in e)ri[t]={...ri[t],...e[t]}}const a0=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zr(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||a0.has(e)}let qm=e=>!zr(e);function l0(e){e&&(qm=t=>t.startsWith("on")?!zr(t):e(t))}try{l0(require("@emotion/is-prop-valid").default)}catch{}function c0(e,t,n){const i={};for(const s in e)s==="values"&&typeof e.values=="object"||(qm(s)||n===!0&&zr(s)||!t&&!zr(s)||e.draggable&&s.startsWith("onDrag"))&&(i[s]=e[s]);return i}function u0(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...i)=>e(...i);return new Proxy(n,{get:(i,s)=>s==="create"?e:(t.has(s)||t.set(s,e(s)),t.get(s))})}const lo=k.createContext({});function as(e){return typeof e=="string"||Array.isArray(e)}function co(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const pc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],fc=["initial",...pc];function uo(e){return co(e.animate)||fc.some(t=>as(e[t]))}function Km(e){return!!(uo(e)||e.variants)}function d0(e,t){if(uo(e)){const{initial:n,animate:i}=e;return{initial:n===!1||as(n)?n:void 0,animate:as(i)?i:void 0}}return e.inherit!==!1?t:{}}function p0(e){const{initial:t,animate:n}=d0(e,k.useContext(lo));return k.useMemo(()=>({initial:t,animate:n}),[sd(t),sd(n)])}function sd(e){return Array.isArray(e)?e.join(" "):e}const f0=Symbol.for("motionComponentSymbol");function _n(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function m0(e,t,n){return k.useCallback(i=>{i&&e.onMount&&e.onMount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):_n(n)&&(n.current=i))},[t])}const mc=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),h0="framerAppearId",Wm="data-"+mc(h0),{schedule:hc}=Bm(queueMicrotask,!1),Hm=k.createContext({});function g0(e,t,n,i,s){var r,o;const{visualElement:a}=k.useContext(lo),l=k.useContext($m),c=k.useContext(ao),u=k.useContext(cc).reducedMotion,d=k.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const p=d.current,g=k.useContext(Hm);p&&!p.projection&&s&&(p.type==="html"||p.type==="svg")&&v0(d.current,n,s,g);const y=k.useRef(!1);k.useInsertionEffect(()=>{p&&y.current&&p.update(n,c)});const x=n[Wm],T=k.useRef(!!x&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return Om(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),hc.render(p.render),T.current&&p.animationState&&p.animationState.animateChanges())}),k.useEffect(()=>{p&&(!T.current&&p.animationState&&p.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,x)}),T.current=!1))}),p}function v0(e,t,n,i){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Qm(e.parent)),e.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&_n(a),visualElement:e,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Qm(e){if(e)return e.options.allowProjection!==!1?e.projection:Qm(e.parent)}function y0({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:i,Component:s}){var r,o;e&&o0(e);function a(c,u){let d;const p={...k.useContext(cc),...c,layoutId:x0(c)},{isStatic:g}=p,y=p0(c),x=i(c,g);if(!g&&uc){S0();const T=w0(p);d=T.MeasureLayout,y.visualElement=g0(s,x,p,t,T.ProjectionNode)}return v.jsxs(lo.Provider,{value:y,children:[d&&y.visualElement?v.jsx(d,{visualElement:y.visualElement,...p}):null,n(s,c,m0(x,y.visualElement,u),x,g,y.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${(o=(r=s.displayName)!==null&&r!==void 0?r:s.name)!==null&&o!==void 0?o:""})`}`;const l=k.forwardRef(a);return l[f0]=s,l}function x0({layoutId:e}){const t=k.useContext(ac).id;return t&&e!==void 0?t+"-"+e:e}function S0(e,t){k.useContext($m).strict}function w0(e){const{drag:t,layout:n}=ri;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const T0=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function gc(e){return typeof e!="string"||e.includes("-")?!1:!!(T0.indexOf(e)>-1||/[A-Z]/u.test(e))}function rd(e){const t=[{},{}];return e==null||e.values.forEach((n,i)=>{t[0][i]=n.get(),t[1][i]=n.getVelocity()}),t}function vc(e,t,n,i){if(typeof t=="function"){const[s,r]=rd(i);t=t(n!==void 0?n:e.custom,s,r)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,r]=rd(i);t=t(n!==void 0?n:e.custom,s,r)}return t}const Xa=e=>Array.isArray(e),E0=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),P0=e=>Xa(e)?e[e.length-1]||0:e,Se=e=>!!(e&&e.getVelocity);function cr(e){const t=Se(e)?e.get():e;return E0(t)?t.toValue():t}function C0({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},i,s,r){const o={latestValues:j0(i,s,r,e),renderState:t()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Gm=e=>(t,n)=>{const i=k.useContext(lo),s=k.useContext(ao),r=()=>C0(e,t,i,s);return n?r():lc(r)};function j0(e,t,n,i){const s={},r=i(e,{});for(const p in r)s[p]=cr(r[p]);let{initial:o,animate:a}=e;const l=uo(e),c=Km(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!co(d)){const p=Array.isArray(d)?d:[d];for(let g=0;g<p.length;g++){const y=vc(e,p[g]);if(y){const{transitionEnd:x,transition:T,...m}=y;for(const f in m){let h=m[f];if(Array.isArray(h)){const S=u?h.length-1:0;h=h[S]}h!==null&&(s[f]=h)}for(const f in x)s[f]=x[f]}}}return s}const ui=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],En=new Set(ui),Xm=e=>t=>typeof t=="string"&&t.startsWith(e),Ym=Xm("--"),b0=Xm("var(--"),yc=e=>b0(e)?k0.test(e.split("/*")[0].trim()):!1,k0=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Zm=(e,t)=>t&&typeof e=="number"?t.transform(e):e,kt=(e,t,n)=>n>t?t:n<e?e:n,di={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ls={...di,transform:e=>kt(0,1,e)},Qs={...di,default:1},vs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Mt=vs("deg"),pt=vs("%"),R=vs("px"),A0=vs("vh"),N0=vs("vw"),od={...pt,parse:e=>pt.parse(e)/100,transform:e=>pt.transform(e*100)},M0={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,radius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,backgroundPositionX:R,backgroundPositionY:R},R0={rotate:Mt,rotateX:Mt,rotateY:Mt,rotateZ:Mt,scale:Qs,scaleX:Qs,scaleY:Qs,scaleZ:Qs,skew:Mt,skewX:Mt,skewY:Mt,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:ls,originX:od,originY:od,originZ:R},ad={...di,transform:Math.round},xc={...M0,...R0,zIndex:ad,size:R,fillOpacity:ls,strokeOpacity:ls,numOctaves:ad},L0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},D0=ui.length;function I0(e,t,n){let i="",s=!0;for(let r=0;r<D0;r++){const o=ui[r],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Zm(a,xc[o]);if(!l){s=!1;const u=L0[o]||o;i+=`${u}(${c}) `}n&&(t[o]=c)}}return i=i.trim(),n?i=n(t,s?"":i):s&&(i="none"),i}function Sc(e,t,n){const{style:i,vars:s,transformOrigin:r}=e;let o=!1,a=!1;for(const l in t){const c=t[l];if(En.has(l)){o=!0;continue}else if(Ym(l)){s[l]=c;continue}else{const u=Zm(c,xc[l]);l.startsWith("origin")?(a=!0,r[l]=u):i[l]=u}}if(t.transform||(o||n?i.transform=I0(t,e.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}const z0={offset:"stroke-dashoffset",array:"stroke-dasharray"},V0={offset:"strokeDashoffset",array:"strokeDasharray"};function F0(e,t,n=1,i=0,s=!0){e.pathLength=1;const r=s?z0:V0;e[r.offset]=R.transform(-i);const o=R.transform(t),a=R.transform(n);e[r.array]=`${o} ${a}`}function ld(e,t,n){return typeof e=="string"?e:R.transform(t+n*e)}function _0(e,t,n){const i=ld(t,e.x,e.width),s=ld(n,e.y,e.height);return`${i} ${s}`}function wc(e,{attrX:t,attrY:n,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(Sc(e,c,d),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:g,dimensions:y}=e;p.transform&&(y&&(g.transform=p.transform),delete p.transform),y&&(s!==void 0||r!==void 0||g.transform)&&(g.transformOrigin=_0(y,s!==void 0?s:.5,r!==void 0?r:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&F0(p,o,a,l,!1)}const Tc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Jm=()=>({...Tc(),attrs:{}}),Ec=e=>typeof e=="string"&&e.toLowerCase()==="svg";function eh(e,{style:t,vars:n},i,s){Object.assign(e.style,t,s&&s.getProjectionStyles(i));for(const r in n)e.style.setProperty(r,n[r])}const th=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function nh(e,t,n,i){eh(e,t,void 0,i);for(const s in t.attrs)e.setAttribute(th.has(s)?s:mc(s),t.attrs[s])}const Vr={};function O0(e){Object.assign(Vr,e)}function ih(e,{layout:t,layoutId:n}){return En.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Vr[e]||e==="opacity")}function Pc(e,t,n){var i;const{style:s}=e,r={};for(const o in s)(Se(s[o])||t.style&&Se(t.style[o])||ih(o,e)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function sh(e,t,n){const i=Pc(e,t,n);for(const s in e)if(Se(e[s])||Se(t[s])){const r=ui.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=e[s]}return i}function U0(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const cd=["x","y","width","height","cx","cy","r"],B0={useVisualState:Gm({scrapeMotionValuesFromProps:sh,createRenderState:Jm,onUpdate:({props:e,prevProps:t,current:n,renderState:i,latestValues:s})=>{if(!n)return;let r=!!e.drag;if(!r){for(const a in s)if(En.has(a)){r=!0;break}}if(!r)return;let o=!t;if(t)for(let a=0;a<cd.length;a++){const l=cd[a];e[l]!==t[l]&&(o=!0)}o&&W.read(()=>{U0(n,i),W.render(()=>{wc(i,s,Ec(n.tagName),e.transformTemplate),nh(n,i)})})}})},$0={useVisualState:Gm({scrapeMotionValuesFromProps:Pc,createRenderState:Tc})};function rh(e,t,n){for(const i in t)!Se(t[i])&&!ih(i,n)&&(e[i]=t[i])}function q0({transformTemplate:e},t){return k.useMemo(()=>{const n=Tc();return Sc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function K0(e,t){const n=e.style||{},i={};return rh(i,n,e),Object.assign(i,q0(e,t)),i}function W0(e,t){const n={},i=K0(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}function H0(e,t,n,i){const s=k.useMemo(()=>{const r=Jm();return wc(r,t,Ec(i),e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};rh(r,e.style,e),s.style={...r,...s.style}}return s}function Q0(e=!1){return(n,i,s,{latestValues:r},o)=>{const l=(gc(n)?H0:W0)(i,r,o,n),c=c0(i,typeof n=="string",e),u=n!==k.Fragment?{...c,...l,ref:s}:{},{children:d}=i,p=k.useMemo(()=>Se(d)?d.get():d,[d]);return k.createElement(n,{...u,children:p})}}function G0(e,t){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...gc(i)?B0:$0,preloadedFeatures:e,useRender:Q0(s),createVisualElement:t,Component:i};return y0(o)}}function oh(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function po(e,t,n){const i=e.getProps();return vc(i,t,n!==void 0?n:i.custom,e)}const X0=dc(()=>window.ScrollTimeline!==void 0);class Y0{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=n}attachTimeline(t,n){const i=this.animations.map(s=>{if(X0()&&s.attachTimeline)return s.attachTimeline(t);if(typeof n=="function")return n(s)});return()=>{i.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Z0 extends Y0{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Cc(e,t){return e?e[t]||e.default||e:void 0}const Ya=2e4;function ah(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<Ya;)t+=n,i=e.next(t);return t>=Ya?1/0:t}function jc(e){return typeof e=="function"}function ud(e,t){e.timeline=t,e.onfinish=null}const bc=e=>Array.isArray(e)&&typeof e[0]=="number",J0={linearEasing:void 0};function ex(e,t){const n=dc(e);return()=>{var i;return(i=J0[t])!==null&&i!==void 0?i:n()}}const Fr=ex(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),lh=(e,t,n=10)=>{let i="";const s=Math.max(Math.round(t/n),2);for(let r=0;r<s;r++)i+=e(si(0,s-1,r))+", ";return`linear(${i.substring(0,i.length-2)})`};function ch(e){return!!(typeof e=="function"&&Fr()||!e||typeof e=="string"&&(e in Za||Fr())||bc(e)||Array.isArray(e)&&e.every(ch))}const ki=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,Za={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ki([0,.65,.55,1]),circOut:ki([.55,0,1,.45]),backIn:ki([.31,.01,.66,-.59]),backOut:ki([.33,1.53,.69,.99])};function uh(e,t){if(e)return typeof e=="function"&&Fr()?lh(e,t):bc(e)?ki(e):Array.isArray(e)?e.map(n=>uh(n,t)||Za.easeOut):Za[e]}const et={x:!1,y:!1};function dh(){return et.x||et.y}function tx(e,t,n){var i;if(e instanceof Element)return[e];if(typeof e=="string"){let s=document;const r=(i=void 0)!==null&&i!==void 0?i:s.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}function ph(e,t){const n=tx(e),i=new AbortController,s={passive:!0,...t,signal:i.signal};return[n,s,()=>i.abort()]}function dd(e){return t=>{t.pointerType==="touch"||dh()||e(t)}}function nx(e,t,n={}){const[i,s,r]=ph(e,n),o=dd(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const u=dd(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,s)});return i.forEach(a=>{a.addEventListener("pointerenter",o,s)}),r}const fh=(e,t)=>t?e===t?!0:fh(e,t.parentElement):!1,kc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,ix=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function sx(e){return ix.has(e.tagName)||e.tabIndex!==-1}const Ai=new WeakSet;function pd(e){return t=>{t.key==="Enter"&&e(t)}}function Bo(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const rx=(e,t)=>{const n=e.currentTarget;if(!n)return;const i=pd(()=>{if(Ai.has(n))return;Bo(n,"down");const s=pd(()=>{Bo(n,"up")}),r=()=>Bo(n,"cancel");n.addEventListener("keyup",s,t),n.addEventListener("blur",r,t)});n.addEventListener("keydown",i,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),t)};function fd(e){return kc(e)&&!dh()}function ox(e,t,n={}){const[i,s,r]=ph(e,n),o=a=>{const l=a.currentTarget;if(!fd(a)||Ai.has(l))return;Ai.add(l);const c=t(a),u=(g,y)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",p),!(!fd(g)||!Ai.has(l))&&(Ai.delete(l),typeof c=="function"&&c(g,{success:y}))},d=g=>{u(g,n.useGlobalTarget||fh(l,g.target))},p=g=>{u(g,!1)};window.addEventListener("pointerup",d,s),window.addEventListener("pointercancel",p,s)};return i.forEach(a=>{!sx(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,s),a.addEventListener("focus",c=>rx(c,s),s)}),r}function ax(e){return e==="x"||e==="y"?et[e]?null:(et[e]=!0,()=>{et[e]=!1}):et.x||et.y?null:(et.x=et.y=!0,()=>{et.x=et.y=!1})}const mh=new Set(["width","height","top","left","right","bottom",...ui]);let ur;function lx(){ur=void 0}const ft={now:()=>(ur===void 0&&ft.set(fe.isProcessing||i0.useManualTiming?fe.timestamp:performance.now()),ur),set:e=>{ur=e,queueMicrotask(lx)}};function Ac(e,t){e.indexOf(t)===-1&&e.push(t)}function Nc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Mc{constructor(){this.subscriptions=[]}add(t){return Ac(this.subscriptions,t),()=>Nc(this.subscriptions,t)}notify(t,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function hh(e,t){return t?e*(1e3/t):0}const md=30,cx=e=>!isNaN(parseFloat(e));class ux{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=ft.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=ft.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=cx(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Mc);const i=this.events[t].add(n);return t==="change"?()=>{i(),W.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>md)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,md);return hh(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function cs(e,t){return new ux(e,t)}function dx(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,cs(n))}function px(e,t){const n=po(e,t);let{transitionEnd:i={},transition:s={},...r}=n||{};r={...r,...i};for(const o in r){const a=P0(r[o]);dx(e,o,a)}}function fx(e){return!!(Se(e)&&e.add)}function Ja(e,t){const n=e.getValue("willChange");if(fx(n))return n.add(t)}function gh(e){return e.props[Wm]}const vh=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,mx=1e-7,hx=12;function gx(e,t,n,i,s){let r,o,a=0;do o=t+(n-t)/2,r=vh(o,i,s)-e,r>0?n=o:t=o;while(Math.abs(r)>mx&&++a<hx);return o}function ys(e,t,n,i){if(e===t&&n===i)return _e;const s=r=>gx(r,0,1,e,n);return r=>r===0||r===1?r:vh(s(r),t,i)}const yh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,xh=e=>t=>1-e(1-t),Sh=ys(.33,1.53,.69,.99),Rc=xh(Sh),wh=yh(Rc),Th=e=>(e*=2)<1?.5*Rc(e):.5*(2-Math.pow(2,-10*(e-1))),Lc=e=>1-Math.sin(Math.acos(e)),Eh=xh(Lc),Ph=yh(Lc),Ch=e=>/^0[^.\s]+$/u.test(e);function vx(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Ch(e):!0}const Oi=e=>Math.round(e*1e5)/1e5,Dc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yx(e){return e==null}const xx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ic=(e,t)=>n=>!!(typeof n=="string"&&xx.test(n)&&n.startsWith(e)||t&&!yx(n)&&Object.prototype.hasOwnProperty.call(n,t)),jh=(e,t,n)=>i=>{if(typeof i!="string")return i;const[s,r,o,a]=i.match(Dc);return{[e]:parseFloat(s),[t]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Sx=e=>kt(0,255,e),$o={...di,transform:e=>Math.round(Sx(e))},un={test:Ic("rgb","red"),parse:jh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+$o.transform(e)+", "+$o.transform(t)+", "+$o.transform(n)+", "+Oi(ls.transform(i))+")"};function wx(e){let t="",n="",i="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const el={test:Ic("#"),parse:wx,transform:un.transform},On={test:Ic("hsl","hue"),parse:jh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+pt.transform(Oi(t))+", "+pt.transform(Oi(n))+", "+Oi(ls.transform(i))+")"},ye={test:e=>un.test(e)||el.test(e)||On.test(e),parse:e=>un.test(e)?un.parse(e):On.test(e)?On.parse(e):el.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?un.transform(e):On.transform(e)},Tx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ex(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Dc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Tx))===null||n===void 0?void 0:n.length)||0)>0}const bh="number",kh="color",Px="var",Cx="var(",hd="${}",jx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function us(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},s=[];let r=0;const a=t.replace(jx,l=>(ye.test(l)?(i.color.push(r),s.push(kh),n.push(ye.parse(l))):l.startsWith(Cx)?(i.var.push(r),s.push(Px),n.push(l)):(i.number.push(r),s.push(bh),n.push(parseFloat(l))),++r,hd)).split(hd);return{values:n,split:a,indexes:i,types:s}}function Ah(e){return us(e).values}function Nh(e){const{split:t,types:n}=us(e),i=t.length;return s=>{let r="";for(let o=0;o<i;o++)if(r+=t[o],s[o]!==void 0){const a=n[o];a===bh?r+=Oi(s[o]):a===kh?r+=ye.transform(s[o]):r+=s[o]}return r}}const bx=e=>typeof e=="number"?0:e;function kx(e){const t=Ah(e);return Nh(e)(t.map(bx))}const Gt={test:Ex,parse:Ah,createTransformer:Nh,getAnimatableNone:kx},Ax=new Set(["brightness","contrast","saturate","opacity"]);function Nx(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(Dc)||[];if(!i)return e;const s=n.replace(i,"");let r=Ax.has(t)?1:0;return i!==n&&(r*=100),t+"("+r+s+")"}const Mx=/\b([a-z-]*)\(.*?\)/gu,tl={...Gt,getAnimatableNone:e=>{const t=e.match(Mx);return t?t.map(Nx).join(" "):e}},Rx={...xc,color:ye,backgroundColor:ye,outlineColor:ye,fill:ye,stroke:ye,borderColor:ye,borderTopColor:ye,borderRightColor:ye,borderBottomColor:ye,borderLeftColor:ye,filter:tl,WebkitFilter:tl},zc=e=>Rx[e];function Mh(e,t){let n=zc(e);return n!==tl&&(n=Gt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Lx=new Set(["auto","none","0"]);function Dx(e,t,n){let i=0,s;for(;i<e.length&&!s;){const r=e[i];typeof r=="string"&&!Lx.has(r)&&us(r).values.length&&(s=e[i]),i++}if(s&&n)for(const r of t)e[r]=Mh(n,s)}const gd=e=>e===di||e===R,vd=(e,t)=>parseFloat(e.split(", ")[t]),yd=(e,t)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return vd(s[1],t);{const r=i.match(/^matrix\((.+)\)$/u);return r?vd(r[1],e):0}},Ix=new Set(["x","y","z"]),zx=ui.filter(e=>!Ix.has(e));function Vx(e){const t=[];return zx.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t}const oi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:yd(4,13),y:yd(5,14)};oi.translateX=oi.x;oi.translateY=oi.y;const fn=new Set;let nl=!1,il=!1;function Rh(){if(il){const e=Array.from(fn).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),n=new Map;t.forEach(i=>{const s=Vx(i);s.length&&(n.set(i,s),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const s=n.get(i);s&&s.forEach(([r,o])=>{var a;(a=i.getValue(r))===null||a===void 0||a.set(o)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}il=!1,nl=!1,fn.forEach(e=>e.complete()),fn.clear()}function Lh(){fn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(il=!0)})}function Fx(){Lh(),Rh()}class Vc{constructor(t,n,i,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=i,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(fn.add(this),nl||(nl=!0,W.read(Lh),W.resolveKeyframes(Rh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:i,motionValue:s}=this;for(let r=0;r<t.length;r++)if(t[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&o===void 0&&s.set(t[0])}else t[r]=t[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),fn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,fn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Dh=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),_x=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ox(e){const t=_x.exec(e);if(!t)return[,];const[,n,i,s]=t;return[`--${n??i}`,s]}function Ih(e,t,n=1){const[i,s]=Ox(e);if(!i)return;const r=window.getComputedStyle(t).getPropertyValue(i);if(r){const o=r.trim();return Dh(o)?parseFloat(o):o}return yc(s)?Ih(s,t,n+1):s}const zh=e=>t=>t.test(e),Ux={test:e=>e==="auto",parse:e=>e},Vh=[di,R,pt,Mt,N0,A0,Ux],xd=e=>Vh.find(zh(e));class Fh extends Vc{constructor(t,n,i,s,r){super(t,n,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),yc(c))){const u=Ih(c,n.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!mh.has(i)||t.length!==2)return;const[s,r]=t,o=xd(s),a=xd(r);if(o!==a)if(gd(o)&&gd(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,i=[];for(let s=0;s<t.length;s++)vx(t[s])&&i.push(s);i.length&&Dx(t,i,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=oi[i](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&t.getValue(i,s).jump(s,!1)}measureEndState(){var t;const{element:n,name:i,unresolvedKeyframes:s}=this;if(!n||!n.current)return;const r=n.getValue(i);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=oi[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Sd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Gt.test(e)||e==="0")&&!e.startsWith("url("));function Bx(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function $x(e,t,n,i){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const r=e[e.length-1],o=Sd(s,t),a=Sd(r,t);return!o||!a?!1:Bx(e)||(n==="spring"||jc(n))&&i}const qx=e=>e!==null;function fo(e,{repeat:t,repeatType:n="loop"},i){const s=e.filter(qx),r=t&&n!=="loop"&&t%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}const Kx=40;class _h{constructor({autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ft.now(),this.options={autoplay:t,delay:n,type:i,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Kx?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Fx(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=ft.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!$x(t,i,s,r))if(o)this.options.duration=0;else{l&&l(fo(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,n);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const G=(e,t,n)=>e+(t-e)*n;function qo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Wx({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let s=0,r=0,o=0;if(!t)s=r=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;s=qo(l,a,e+1/3),r=qo(l,a,e),o=qo(l,a,e-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}function _r(e,t){return n=>n>0?t:e}const Ko=(e,t,n)=>{const i=e*e,s=n*(t*t-i)+i;return s<0?0:Math.sqrt(s)},Hx=[el,un,On],Qx=e=>Hx.find(t=>t.test(e));function wd(e){const t=Qx(e);if(!t)return!1;let n=t.parse(e);return t===On&&(n=Wx(n)),n}const Td=(e,t)=>{const n=wd(e),i=wd(t);if(!n||!i)return _r(e,t);const s={...n};return r=>(s.red=Ko(n.red,i.red,r),s.green=Ko(n.green,i.green,r),s.blue=Ko(n.blue,i.blue,r),s.alpha=G(n.alpha,i.alpha,r),un.transform(s))},Gx=(e,t)=>n=>t(e(n)),xs=(...e)=>e.reduce(Gx),sl=new Set(["none","hidden"]);function Xx(e,t){return sl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Yx(e,t){return n=>G(e,t,n)}function Fc(e){return typeof e=="number"?Yx:typeof e=="string"?yc(e)?_r:ye.test(e)?Td:e1:Array.isArray(e)?Oh:typeof e=="object"?ye.test(e)?Td:Zx:_r}function Oh(e,t){const n=[...e],i=n.length,s=e.map((r,o)=>Fc(r)(r,t[o]));return r=>{for(let o=0;o<i;o++)n[o]=s[o](r);return n}}function Zx(e,t){const n={...e,...t},i={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(i[s]=Fc(e[s])(e[s],t[s]));return s=>{for(const r in i)n[r]=i[r](s);return n}}function Jx(e,t){var n;const i=[],s={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const o=t.types[r],a=e.indexes[o][s[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;i[r]=l,s[o]++}return i}const e1=(e,t)=>{const n=Gt.createTransformer(t),i=us(e),s=us(t);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?sl.has(e)&&!s.values.length||sl.has(t)&&!i.values.length?Xx(e,t):xs(Oh(Jx(i,s),s.values),n):_r(e,t)};function Uh(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?G(e,t,n):Fc(e)(e,t)}const t1=5;function Bh(e,t,n){const i=Math.max(t-t1,0);return hh(n-e(i),t-i)}const J={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Wo=.001;function n1({duration:e=J.duration,bounce:t=J.bounce,velocity:n=J.velocity,mass:i=J.mass}){let s,r,o=1-t;o=kt(J.minDamping,J.maxDamping,o),e=kt(J.minDuration,J.maxDuration,Tt(e)),o<1?(s=c=>{const u=c*o,d=u*e,p=u-n,g=rl(c,o),y=Math.exp(-d);return Wo-p/g*y},r=c=>{const d=c*o*e,p=d*n+n,g=Math.pow(o,2)*Math.pow(c,2)*e,y=Math.exp(-d),x=rl(Math.pow(c,2),o);return(-s(c)+Wo>0?-1:1)*((p-g)*y)/x}):(s=c=>{const u=Math.exp(-c*e),d=(c-n)*e+1;return-Wo+u*d},r=c=>{const u=Math.exp(-c*e),d=(n-c)*(e*e);return u*d});const a=5/e,l=s1(s,r,a);if(e=wt(e),isNaN(l))return{stiffness:J.stiffness,damping:J.damping,duration:e};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:e}}}const i1=12;function s1(e,t,n){let i=n;for(let s=1;s<i1;s++)i=i-e(i)/t(i);return i}function rl(e,t){return e*Math.sqrt(1-t*t)}const r1=["duration","bounce"],o1=["stiffness","damping","mass"];function Ed(e,t){return t.some(n=>e[n]!==void 0)}function a1(e){let t={velocity:J.velocity,stiffness:J.stiffness,damping:J.damping,mass:J.mass,isResolvedFromDuration:!1,...e};if(!Ed(e,o1)&&Ed(e,r1))if(e.visualDuration){const n=e.visualDuration,i=2*Math.PI/(n*1.2),s=i*i,r=2*kt(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:J.mass,stiffness:s,damping:r}}else{const n=n1(e);t={...t,...n,mass:J.mass},t.isResolvedFromDuration=!0}return t}function $h(e=J.visualDuration,t=J.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:s}=n;const r=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:g}=a1({...n,velocity:-Tt(n.velocity||0)}),y=p||0,x=c/(2*Math.sqrt(l*u)),T=o-r,m=Tt(Math.sqrt(l/u)),f=Math.abs(T)<5;i||(i=f?J.restSpeed.granular:J.restSpeed.default),s||(s=f?J.restDelta.granular:J.restDelta.default);let h;if(x<1){const w=rl(m,x);h=E=>{const j=Math.exp(-x*m*E);return o-j*((y+x*m*T)/w*Math.sin(w*E)+T*Math.cos(w*E))}}else if(x===1)h=w=>o-Math.exp(-m*w)*(T+(y+m*T)*w);else{const w=m*Math.sqrt(x*x-1);h=E=>{const j=Math.exp(-x*m*E),P=Math.min(w*E,300);return o-j*((y+x*m*T)*Math.sinh(P)+w*T*Math.cosh(P))/w}}const S={calculatedDuration:g&&d||null,next:w=>{const E=h(w);if(g)a.done=w>=d;else{let j=0;x<1&&(j=w===0?wt(y):Bh(h,w,E));const P=Math.abs(j)<=i,I=Math.abs(o-E)<=s;a.done=P&&I}return a.value=a.done?o:E,a},toString:()=>{const w=Math.min(ah(S),Ya),E=lh(j=>S.next(w*j).value,w,30);return w+"ms "+E}};return S}function Pd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=e[0],p={done:!1,value:d},g=P=>a!==void 0&&P<a||l!==void 0&&P>l,y=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let x=n*t;const T=d+x,m=o===void 0?T:o(T);m!==T&&(x=m-d);const f=P=>-x*Math.exp(-P/i),h=P=>m+f(P),S=P=>{const I=f(P),M=h(P);p.done=Math.abs(I)<=c,p.value=p.done?m:M};let w,E;const j=P=>{g(p.value)&&(w=P,E=$h({keyframes:[p.value,y(p.value)],velocity:Bh(h,P,p.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return j(0),{calculatedDuration:null,next:P=>{let I=!1;return!E&&w===void 0&&(I=!0,S(P),j(P)),w!==void 0&&P>=w?E.next(P-w):(!I&&S(P),p)}}}const l1=ys(.42,0,1,1),c1=ys(0,0,.58,1),qh=ys(.42,0,.58,1),u1=e=>Array.isArray(e)&&typeof e[0]!="number",d1={linear:_e,easeIn:l1,easeInOut:qh,easeOut:c1,circIn:Lc,circInOut:Ph,circOut:Eh,backIn:Rc,backInOut:wh,backOut:Sh,anticipate:Th},Cd=e=>{if(bc(e)){Um(e.length===4);const[t,n,i,s]=e;return ys(t,n,i,s)}else if(typeof e=="string")return d1[e];return e};function p1(e,t,n){const i=[],s=n||Uh,r=e.length-1;for(let o=0;o<r;o++){let a=s(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||_e:t;a=xs(l,a)}i.push(a)}return i}function f1(e,t,{clamp:n=!0,ease:i,mixer:s}={}){const r=e.length;if(Um(r===t.length),r===1)return()=>t[0];if(r===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[r-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=p1(t,i,s),l=a.length,c=u=>{if(o&&u<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const p=si(e[d],e[d+1],u);return a[d](p)};return n?u=>c(kt(e[0],e[r-1],u)):c}function m1(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const s=si(0,t,i);e.push(G(n,1,s))}}function h1(e){const t=[0];return m1(t,e.length-1),t}function g1(e,t){return e.map(n=>n*t)}function v1(e,t){return e.map(()=>t||qh).splice(0,e.length-1)}function Or({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const s=u1(i)?i.map(Cd):Cd(i),r={done:!1,value:t[0]},o=g1(n&&n.length===t.length?n:h1(t),e),a=f1(o,t,{ease:Array.isArray(s)?s:v1(t,s)});return{calculatedDuration:e,next:l=>(r.value=a(l),r.done=l>=e,r)}}const y1=e=>{const t=({timestamp:n})=>e(n);return{start:()=>W.update(t,!0),stop:()=>Qt(t),now:()=>fe.isProcessing?fe.timestamp:ft.now()}},x1={decay:Pd,inertia:Pd,tween:Or,keyframes:Or,spring:$h},S1=e=>e/100;class _c extends _h{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:s,keyframes:r}=this.options,o=(s==null?void 0:s.KeyframeResolver)||Vc,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(r,a,n,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=jc(n)?n:x1[n]||Or;let l,c;a!==Or&&typeof t[0]!="number"&&(l=xs(S1,Uh(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});r==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=ah(u));const{calculatedDuration:d}=u,p=d+s,g=p*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:p,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:i}=this;if(!i){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return r.next(0);const{delay:p,repeat:g,repeatType:y,repeatDelay:x,onUpdate:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-p*(this.speed>=0?1:-1),f=this.speed>=0?m<0:m>u;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let h=this.currentTime,S=r;if(g){const P=Math.min(this.currentTime,u)/d;let I=Math.floor(P),M=P%1;!M&&P>=1&&(M=1),M===1&&I--,I=Math.min(I,g+1),!!(I%2)&&(y==="reverse"?(M=1-M,x&&(M-=x/d)):y==="mirror"&&(S=o)),h=kt(0,1,M)*d}const w=f?{done:!1,value:l[0]}:S.next(h);a&&(w.value=a(w.value));let{done:E}=w;!f&&c!==null&&(E=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return j&&s!==void 0&&(w.value=fo(l,this.options,s)),T&&T(w.value),j&&this.finish(),w}get duration(){const{resolved:t}=this;return t?Tt(t.calculatedDuration):0}get time(){return Tt(this.currentTime)}set time(t){t=wt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Tt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=y1,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=t(r=>this.tick(r))),n&&n();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const w1=new Set(["opacity","clipPath","filter","transform"]);function T1(e,t,n,{delay:i=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:n};l&&(c.offset=l);const u=uh(a,s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}const E1=dc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ur=10,P1=2e4;function C1(e){return jc(e.type)||e.type==="spring"||!ch(e.ease)}function j1(e,t){const n=new _c({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:e[0]};const s=[];let r=0;for(;!i.done&&r<P1;)i=n.sample(r),s.push(i.value),r+=Ur;return{times:void 0,keyframes:s,duration:r-Ur,ease:"linear"}}const Kh={anticipate:Th,backInOut:wh,circInOut:Ph};function b1(e){return e in Kh}class jd extends _h{constructor(t){super(t);const{name:n,motionValue:i,element:s,keyframes:r}=this.options;this.resolver=new Fh(r,(o,a)=>this.onKeyframesResolved(o,a),n,i,s),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:i=300,times:s,ease:r,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof r=="string"&&Fr()&&b1(r)&&(r=Kh[r]),C1(this.options)){const{onComplete:d,onUpdate:p,motionValue:g,element:y,...x}=this.options,T=j1(t,x);t=T.keyframes,t.length===1&&(t[1]=t[0]),i=T.duration,s=T.times,r=T.ease,o="keyframes"}const u=T1(a.owner.current,l,t,{...this.options,duration:i,times:s,ease:r});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(ud(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(fo(t,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:s,type:o,ease:r,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Tt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Tt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=wt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return _e;const{animation:i}=n;ud(i,t)}return _e}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:i,duration:s,type:r,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:p,...g}=this.options,y=new _c({...g,keyframes:i,duration:s,type:r,ease:o,times:a,isGenerator:!0}),x=wt(this.time);c.setWithVelocity(y.sample(x-Ur).value,y.sample(x).value,Ur)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:i,repeatDelay:s,repeatType:r,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return E1()&&i&&w1.has(i)&&!l&&!c&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const k1={type:"spring",stiffness:500,damping:25,restSpeed:10},A1=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),N1={type:"keyframes",duration:.8},M1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},R1=(e,{keyframes:t})=>t.length>2?N1:En.has(e)?e.startsWith("scale")?A1(t[1]):k1:M1;function L1({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Oc=(e,t,n,i={},s,r)=>o=>{const a=Cc(i,e)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-wt(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:r?void 0:s};L1(a)||(u={...u,...R1(e,u)}),u.duration&&(u.duration=wt(u.duration)),u.repeatDelay&&(u.repeatDelay=wt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!r&&t.get()!==void 0){const p=fo(u.keyframes,a);if(p!==void 0)return W.update(()=>{u.onUpdate(p),u.onComplete()}),new Z0([])}return!r&&jd.supports(u)?new jd(u):new _c(u)};function D1({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function Wh(e,t,{delay:n=0,transitionOverride:i,type:s}={}){var r;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;i&&(o=i);const c=[],u=s&&e.animationState&&e.animationState.getState()[s];for(const d in l){const p=e.getValue(d,(r=e.latestValues[d])!==null&&r!==void 0?r:null),g=l[d];if(g===void 0||u&&D1(u,d))continue;const y={delay:n,...Cc(o||{},d)};let x=!1;if(window.MotionHandoffAnimation){const m=gh(e);if(m){const f=window.MotionHandoffAnimation(m,d,W);f!==null&&(y.startTime=f,x=!0)}}Ja(e,d),p.start(Oc(d,p,g,e.shouldReduceMotion&&mh.has(d)?{type:!1}:y,e,x));const T=p.animation;T&&c.push(T)}return a&&Promise.all(c).then(()=>{W.update(()=>{a&&px(e,a)})}),c}function ol(e,t,n={}){var i;const s=po(e,t,n.type==="exit"?(i=e.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(r=n.transitionOverride);const o=s?()=>Promise.all(Wh(e,s,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:p}=r;return I1(e,t,u+c,d,p,n)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function I1(e,t,n=0,i=0,s=1,r){const o=[],a=(e.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(e.variantChildren).sort(z1).forEach((c,u)=>{c.notify("AnimationStart",t),o.push(ol(c,t,{...r,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function z1(e,t){return e.sortNodePosition(t)}function V1(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const s=t.map(r=>ol(e,r,n));i=Promise.all(s)}else if(typeof t=="string")i=ol(e,t,n);else{const s=typeof t=="function"?po(e,t,n.custom):t;i=Promise.all(Wh(e,s,n))}return i.then(()=>{e.notify("AnimationComplete",t)})}const F1=fc.length;function Hh(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Hh(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<F1;n++){const i=fc[n],s=e.props[i];(as(s)||s===!1)&&(t[i]=s)}return t}const _1=[...pc].reverse(),O1=pc.length;function U1(e){return t=>Promise.all(t.map(({animation:n,options:i})=>V1(e,n,i)))}function B1(e){let t=U1(e),n=bd(),i=!0;const s=l=>(c,u)=>{var d;const p=po(e,u,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(p){const{transition:g,transitionEnd:y,...x}=p;c={...c,...x,...y}}return c};function r(l){t=l(e)}function o(l){const{props:c}=e,u=Hh(e.parent)||{},d=[],p=new Set;let g={},y=1/0;for(let T=0;T<O1;T++){const m=_1[T],f=n[m],h=c[m]!==void 0?c[m]:u[m],S=as(h),w=m===l?f.isActive:null;w===!1&&(y=T);let E=h===u[m]&&h!==c[m]&&S;if(E&&i&&e.manuallyAnimateOnMount&&(E=!1),f.protectedKeys={...g},!f.isActive&&w===null||!h&&!f.prevProp||co(h)||typeof h=="boolean")continue;const j=$1(f.prevProp,h);let P=j||m===l&&f.isActive&&!E&&S||T>y&&S,I=!1;const M=Array.isArray(h)?h:[h];let Z=M.reduce(s(m),{});w===!1&&(Z={});const{prevResolvedValues:Te={}}=f,de={...Te,...Z},en=te=>{P=!0,p.has(te)&&(I=!0,p.delete(te)),f.needsAnimating[te]=!0;const b=e.getValue(te);b&&(b.liveStyle=!1)};for(const te in de){const b=Z[te],L=Te[te];if(g.hasOwnProperty(te))continue;let D=!1;Xa(b)&&Xa(L)?D=!oh(b,L):D=b!==L,D?b!=null?en(te):p.add(te):b!==void 0&&p.has(te)?en(te):f.protectedKeys[te]=!0}f.prevProp=h,f.prevResolvedValues=Z,f.isActive&&(g={...g,...Z}),i&&e.blockInitialAnimation&&(P=!1),P&&(!(E&&j)||I)&&d.push(...M.map(te=>({animation:te,options:{type:m}})))}if(p.size){const T={};p.forEach(m=>{const f=e.getBaseTarget(m),h=e.getValue(m);h&&(h.liveStyle=!0),T[m]=f??null}),d.push({animation:T})}let x=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(x=!1),i=!1,x?t(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>n,reset:()=>{n=bd(),i=!0}}}function $1(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!oh(t,e):!1}function tn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bd(){return{animate:tn(!0),whileInView:tn(),whileHover:tn(),whileTap:tn(),whileDrag:tn(),whileFocus:tn(),exit:tn()}}class Jt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class q1 extends Jt{constructor(t){super(t),t.animationState||(t.animationState=B1(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();co(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let K1=0;class W1 extends Jt{constructor(){super(...arguments),this.id=K1++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const H1={animation:{Feature:q1},exit:{Feature:W1}};function ds(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}function Ss(e){return{point:{x:e.pageX,y:e.pageY}}}const Q1=e=>t=>kc(t)&&e(t,Ss(t));function Ui(e,t,n,i){return ds(e,t,Q1(n),i)}const kd=(e,t)=>Math.abs(e-t);function G1(e,t){const n=kd(e.x,t.x),i=kd(e.y,t.y);return Math.sqrt(n**2+i**2)}class Qh{constructor(t,n,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Qo(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=G1(d.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:y}=d,{timestamp:x}=fe;this.history.push({...y,timestamp:x});const{onStart:T,onMove:m}=this.handlers;p||(T&&T(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Ho(p,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=Qo(d.type==="pointercancel"?this.lastMoveEventInfo:Ho(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,T),y&&y(d,T)},!kc(t))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=i,this.contextWindow=s||window;const o=Ss(t),a=Ho(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=fe;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(t,Qo(a,this.history)),this.removeListeners=xs(Ui(this.contextWindow,"pointermove",this.handlePointerMove),Ui(this.contextWindow,"pointerup",this.handlePointerUp),Ui(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Qt(this.updatePoint)}}function Ho(e,t){return t?{point:t(e.point)}:e}function Ad(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Qo({point:e},t){return{point:e,delta:Ad(e,Gh(t)),offset:Ad(e,X1(t)),velocity:Y1(t,.1)}}function X1(e){return e[0]}function Gh(e){return e[e.length-1]}function Y1(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const s=Gh(e);for(;n>=0&&(i=e[n],!(s.timestamp-i.timestamp>wt(t)));)n--;if(!i)return{x:0,y:0};const r=Tt(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Xh=1e-4,Z1=1-Xh,J1=1+Xh,Yh=.01,eS=0-Yh,tS=0+Yh;function Ue(e){return e.max-e.min}function nS(e,t,n){return Math.abs(e-t)<=n}function Nd(e,t,n,i=.5){e.origin=i,e.originPoint=G(t.min,t.max,e.origin),e.scale=Ue(n)/Ue(t),e.translate=G(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Z1&&e.scale<=J1||isNaN(e.scale))&&(e.scale=1),(e.translate>=eS&&e.translate<=tS||isNaN(e.translate))&&(e.translate=0)}function Bi(e,t,n,i){Nd(e.x,t.x,n.x,i?i.originX:void 0),Nd(e.y,t.y,n.y,i?i.originY:void 0)}function Md(e,t,n){e.min=n.min+t.min,e.max=e.min+Ue(t)}function iS(e,t,n){Md(e.x,t.x,n.x),Md(e.y,t.y,n.y)}function Rd(e,t,n){e.min=t.min-n.min,e.max=e.min+Ue(t)}function $i(e,t,n){Rd(e.x,t.x,n.x),Rd(e.y,t.y,n.y)}function sS(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?G(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?G(n,e,i.max):Math.min(e,n)),e}function Ld(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function rS(e,{top:t,left:n,bottom:i,right:s}){return{x:Ld(e.x,n,s),y:Ld(e.y,t,i)}}function Dd(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function oS(e,t){return{x:Dd(e.x,t.x),y:Dd(e.y,t.y)}}function aS(e,t){let n=.5;const i=Ue(e),s=Ue(t);return s>i?n=si(t.min,t.max-i,e.min):i>s&&(n=si(e.min,e.max-s,t.min)),kt(0,1,n)}function lS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const al=.35;function cS(e=al){return e===!1?e=0:e===!0&&(e=al),{x:Id(e,"left","right"),y:Id(e,"top","bottom")}}function Id(e,t,n){return{min:zd(e,t),max:zd(e,n)}}function zd(e,t){return typeof e=="number"?e:e[t]||0}const Vd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Un=()=>({x:Vd(),y:Vd()}),Fd=()=>({min:0,max:0}),se=()=>({x:Fd(),y:Fd()});function Ke(e){return[e("x"),e("y")]}function Zh({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function uS({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function dS(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Go(e){return e===void 0||e===1}function ll({scale:e,scaleX:t,scaleY:n}){return!Go(e)||!Go(t)||!Go(n)}function rn(e){return ll(e)||Jh(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Jh(e){return _d(e.x)||_d(e.y)}function _d(e){return e&&e!=="0%"}function Br(e,t,n){const i=e-n,s=t*i;return n+s}function Od(e,t,n,i,s){return s!==void 0&&(e=Br(e,s,i)),Br(e,n,i)+t}function cl(e,t=0,n=1,i,s){e.min=Od(e.min,t,n,i,s),e.max=Od(e.max,t,n,i,s)}function eg(e,{x:t,y:n}){cl(e.x,t.translate,t.scale,t.originPoint),cl(e.y,n.translate,n.scale,n.originPoint)}const Ud=.999999999999,Bd=1.0000000000001;function pS(e,t,n,i=!1){const s=n.length;if(!s)return;t.x=t.y=1;let r,o;for(let a=0;a<s;a++){r=n[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&$n(e,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,eg(e,o)),i&&rn(r.latestValues)&&$n(e,r.latestValues))}t.x<Bd&&t.x>Ud&&(t.x=1),t.y<Bd&&t.y>Ud&&(t.y=1)}function Bn(e,t){e.min=e.min+t,e.max=e.max+t}function $d(e,t,n,i,s=.5){const r=G(e.min,e.max,s);cl(e,t,n,r,i)}function $n(e,t){$d(e.x,t.x,t.scaleX,t.scale,t.originX),$d(e.y,t.y,t.scaleY,t.scale,t.originY)}function tg(e,t){return Zh(dS(e.getBoundingClientRect(),t))}function fS(e,t,n){const i=tg(e,n),{scroll:s}=t;return s&&(Bn(i.x,s.offset.x),Bn(i.y,s.offset.y)),i}const ng=({current:e})=>e?e.ownerDocument.defaultView:null,mS=new WeakMap;class hS{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=se(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ss(u).point)},r=(u,d)=>{const{drag:p,dragPropagation:g,onDragStart:y}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ax(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ke(T=>{let m=this.getAxisMotionValue(T).get()||0;if(pt.test(m)){const{projection:f}=this.visualElement;if(f&&f.layout){const h=f.layout.layoutBox[T];h&&(m=Ue(h)*(parseFloat(m)/100))}}this.originPoint[T]=m}),y&&W.postRender(()=>y(u,d)),Ja(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:y,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:T}=d;if(g&&this.currentDirection===null){this.currentDirection=gS(T),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,T),this.updateAxis("y",d.point,T),this.visualElement.render(),x&&x(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Ke(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Qh(t,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:ng(this.visualElement)})}stop(t,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&W.postRender(()=>r(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:s}=this.getProps();if(!i||!Gs(t,s,this.currentDirection))return;const r=this.getAxisMotionValue(t);let o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=sS(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,r=this.constraints;n&&_n(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=rS(s.layoutBox,n):this.constraints=!1,this.elastic=cS(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Ke(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=lS(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!_n(t))return!1;const i=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=fS(i,s.root,this.visualElement.getTransformPagePoint());let o=oS(s.layout.layoutBox,r);if(n){const a=n(uS(o));this.hasMutatedConstraints=!!a,a&&(o=Zh(a))}return o}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Ke(u=>{if(!Gs(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const p=s?200:1e6,g=s?40:1e7,y={type:"inertia",velocity:i?t[u]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...r,...d};return this.startAxisValueAnimation(u,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return Ja(this.visualElement,t),i.start(Oc(t,i,0,n,this.visualElement,!1))}stopAnimation(){Ke(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ke(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Ke(n=>{const{drag:i}=this.getProps();if(!Gs(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[n];r.set(t[n]-G(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!_n(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Ke(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=aS({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Ke(o=>{if(!Gs(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(G(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;mS.set(this.visualElement,this);const t=this.visualElement.current,n=Ui(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();_n(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),W.read(i);const o=ds(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ke(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),r(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=al,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Gs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function gS(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class vS extends Jt{constructor(t){super(t),this.removeGroupControls=_e,this.removeListeners=_e,this.controls=new hS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_e}unmount(){this.removeGroupControls(),this.removeListeners()}}const qd=e=>(t,n)=>{e&&W.postRender(()=>e(t,n))};class yS extends Jt{constructor(){super(...arguments),this.removePointerDownListener=_e}onPointerDown(t){this.session=new Qh(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ng(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:qd(t),onStart:qd(n),onMove:i,onEnd:(r,o)=>{delete this.session,s&&W.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=Ui(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const dr={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Kd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const wi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(R.test(e))e=parseFloat(e);else return e;const n=Kd(e,t.target.x),i=Kd(e,t.target.y);return`${n}% ${i}%`}},xS={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,s=Gt.parse(e);if(s.length>5)return i;const r=Gt.createTransformer(e),o=typeof s[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;s[0+o]/=a,s[1+o]/=l;const c=G(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};class SS extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=t;O0(wS),r&&(n.group&&n.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),dr.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||W.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),hc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ig(e){const[t,n]=_m(),i=k.useContext(ac);return v.jsx(SS,{...e,layoutGroup:i,switchLayoutGroup:k.useContext(Hm),isPresent:t,safeToRemove:n})}const wS={borderRadius:{...wi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wi,borderTopRightRadius:wi,borderBottomLeftRadius:wi,borderBottomRightRadius:wi,boxShadow:xS};function TS(e,t,n){const i=Se(e)?e:cs(e);return i.start(Oc("",i,t,n)),i.animation}function ES(e){return e instanceof SVGElement&&e.tagName!=="svg"}const PS=(e,t)=>e.depth-t.depth;class CS{constructor(){this.children=[],this.isDirty=!1}add(t){Ac(this.children,t),this.isDirty=!0}remove(t){Nc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(PS),this.isDirty=!1,this.children.forEach(t)}}function jS(e,t){const n=ft.now(),i=({timestamp:s})=>{const r=s-n;r>=t&&(Qt(i),e(r-t))};return W.read(i,!0),()=>Qt(i)}const sg=["TopLeft","TopRight","BottomLeft","BottomRight"],bS=sg.length,Wd=e=>typeof e=="string"?parseFloat(e):e,Hd=e=>typeof e=="number"||R.test(e);function kS(e,t,n,i,s,r){s?(e.opacity=G(0,n.opacity!==void 0?n.opacity:1,AS(i)),e.opacityExit=G(t.opacity!==void 0?t.opacity:1,0,NS(i))):r&&(e.opacity=G(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<bS;o++){const a=`border${sg[o]}Radius`;let l=Qd(t,a),c=Qd(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Hd(l)===Hd(c)?(e[a]=Math.max(G(Wd(l),Wd(c),i),0),(pt.test(c)||pt.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=G(t.rotate||0,n.rotate||0,i))}function Qd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const AS=rg(0,.5,Eh),NS=rg(.5,.95,_e);function rg(e,t,n){return i=>i<e?0:i>t?1:n(si(e,t,i))}function Gd(e,t){e.min=t.min,e.max=t.max}function qe(e,t){Gd(e.x,t.x),Gd(e.y,t.y)}function Xd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Yd(e,t,n,i,s){return e-=t,e=Br(e,1/n,i),s!==void 0&&(e=Br(e,1/s,i)),e}function MS(e,t=0,n=1,i=.5,s,r=e,o=e){if(pt.test(t)&&(t=parseFloat(t),t=G(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=G(r.min,r.max,i);e===r&&(a-=t),e.min=Yd(e.min,t,n,a,s),e.max=Yd(e.max,t,n,a,s)}function Zd(e,t,[n,i,s],r,o){MS(e,t[n],t[i],t[s],t.scale,r,o)}const RS=["x","scaleX","originX"],LS=["y","scaleY","originY"];function Jd(e,t,n,i){Zd(e.x,t,RS,n?n.x:void 0,i?i.x:void 0),Zd(e.y,t,LS,n?n.y:void 0,i?i.y:void 0)}function ep(e){return e.translate===0&&e.scale===1}function og(e){return ep(e.x)&&ep(e.y)}function tp(e,t){return e.min===t.min&&e.max===t.max}function DS(e,t){return tp(e.x,t.x)&&tp(e.y,t.y)}function np(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ag(e,t){return np(e.x,t.x)&&np(e.y,t.y)}function ip(e){return Ue(e.x)/Ue(e.y)}function sp(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class IS{constructor(){this.members=[]}add(t){Ac(this.members,t),t.scheduleRender()}remove(t){if(Nc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(s=>t===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function zS(e,t,n){let i="";const s=e.x.translate/t.x,r=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((s||r||o)&&(i=`translate3d(${s}px, ${r}px, ${o}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:p,skewX:g,skewY:y}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),p&&(i+=`rotateY(${p}deg) `),g&&(i+=`skewX(${g}deg) `),y&&(i+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const on={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ni=typeof window<"u"&&window.MotionDebug!==void 0,Xo=["","X","Y","Z"],VS={visibility:"hidden"},rp=1e3;let FS=0;function Yo(e,t,n,i){const{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),i&&(i[e]=0))}function lg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=gh(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",W,!(s||r))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&lg(i)}function cg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=t==null?void 0:t()){this.id=FS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ni&&(on.totalNodes=on.resolvedTargetDeltas=on.recalculatedProjection=0),this.nodes.forEach(US),this.nodes.forEach(WS),this.nodes.forEach(HS),this.nodes.forEach(BS),Ni&&window.MotionDebug.record(on)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new CS)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Mc),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ES(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let d;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=jS(p,250),dr.hasAnimatedSinceResize&&(dr.hasAnimatedSinceResize=!1,this.nodes.forEach(ap))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||ZS,{onLayoutAnimationStart:T,onLayoutAnimationComplete:m}=u.getProps(),f=!this.targetLayout||!ag(this.targetLayout,y)||g,h=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||p&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,h);const S={...Cc(x,"layout"),onPlay:T,onComplete:m};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||ap(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Qt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(QS),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(op);return}this.isUpdating||this.nodes.forEach(qS),this.isUpdating=!1,this.nodes.forEach(KS),this.nodes.forEach(_S),this.nodes.forEach(OS),this.clearAllSnapshots();const a=ft.now();fe.delta=kt(0,1e3/60,a-fe.timestamp),fe.timestamp=a,fe.isProcessing=!0,Uo.update.process(fe),Uo.preRender.process(fe),Uo.render.process(fe),fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,hc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($S),this.sharedNodes.forEach(GS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!og(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||rn(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),JS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return se();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(ew))){const{scroll:u}=this.root;u&&(Bn(l.x,u.offset.x),Bn(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=se();if(qe(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:p}=u;u!==this.root&&d&&p.layoutScroll&&(d.wasRoot&&qe(l,o),Bn(l.x,d.offset.x),Bn(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=se();qe(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&$n(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),rn(u.latestValues)&&$n(l,u.latestValues)}return rn(this.latestValues)&&$n(l,this.latestValues),l}removeTransform(o){const a=se();qe(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!rn(c.latestValues))continue;ll(c.latestValues)&&c.updateSnapshot();const u=se(),d=c.measurePageBox();qe(u,d),Jd(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return rn(this.latestValues)&&Jd(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:p}=this.options;if(!(!this.layout||!(d||p))){if(this.resolvedRelativeTargetAt=fe.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=se(),this.relativeTargetOrigin=se(),$i(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=se(),this.targetWithTransforms=se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qe(this.target,this.layout.layoutBox),eg(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=se(),this.relativeTargetOrigin=se(),$i(this.relativeTargetOrigin,this.target,g.target),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ni&&on.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ll(this.parent.latestValues)||Jh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===fe.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;qe(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;pS(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=se());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xd(this.prevProjectionDelta.x,this.projectionDelta.x),Xd(this.prevProjectionDelta.y,this.projectionDelta.y)),Bi(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==g||!sp(this.projectionDelta.x,this.prevProjectionDelta.x)||!sp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Ni&&on.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Un(),this.projectionDelta=Un(),this.projectionDeltaWithTransform=Un()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Un();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=se(),g=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=g!==y,T=this.getStack(),m=!T||T.members.length<=1,f=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(YS));this.animationProgress=0;let h;this.mixTargetDelta=S=>{const w=S/1e3;lp(d.x,o.x,w),lp(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($i(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),XS(this.relativeTarget,this.relativeTargetOrigin,p,w),h&&DS(this.relativeTarget,h)&&(this.isProjectionDirty=!1),h||(h=se()),qe(h,this.relativeTarget)),x&&(this.animationValues=u,kS(u,c,this.latestValues,w,f,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Qt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W.update(()=>{dr.hasAnimatedSinceResize=!0,this.currentAnimation=TS(0,rp,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(rp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&ug(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||se();const d=Ue(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const p=Ue(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}qe(a,l),$n(a,u),Bi(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new IS),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Yo("z",o,c,this.animationValues);for(let u=0;u<Xo.length;u++)Yo(`rotate${Xo[u]}`,o,c,this.animationValues),Yo(`skew${Xo[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return VS;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=cr(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=cr(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!rn(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=zS(this.projectionDeltaWithTransform,this.treeScale,p),u&&(c.transform=u(p,c.transform));const{x:g,y}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Vr){if(p[x]===void 0)continue;const{correct:T,applyTo:m}=Vr[x],f=c.transform==="none"?p[x]:T(p[x],d);if(m){const h=m.length;for(let S=0;S<h;S++)c[m[S]]=f}else c[x]=f}return this.options.layoutId&&(c.pointerEvents=d===this?cr(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(op),this.root.sharedNodes.clear()}}}function _S(e){e.updateLayout()}function OS(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=e.layout,{animationType:r}=e.options,o=n.source!==e.layout.source;r==="size"?Ke(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],g=Ue(p);p.min=i[d].min,p.max=p.min+g}):ug(r,n.layoutBox,i)&&Ke(d=>{const p=o?n.measuredBox[d]:n.layoutBox[d],g=Ue(i[d]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const a=Un();Bi(a,i,n.layoutBox);const l=Un();o?Bi(l,e.applyTransform(s,!0),n.measuredBox):Bi(l,i,n.layoutBox);const c=!og(a);let u=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:g}=d;if(p&&g){const y=se();$i(y,n.layoutBox,p.layoutBox);const x=se();$i(x,i,g.layoutBox),ag(y,x)||(u=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function US(e){Ni&&on.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function BS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function $S(e){e.clearSnapshot()}function op(e){e.clearMeasurements()}function qS(e){e.isLayoutDirty=!1}function KS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ap(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function WS(e){e.resolveTargetDelta()}function HS(e){e.calcProjection()}function QS(e){e.resetSkewAndRotation()}function GS(e){e.removeLeadSnapshot()}function lp(e,t,n){e.translate=G(t.translate,0,n),e.scale=G(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function cp(e,t,n,i){e.min=G(t.min,n.min,i),e.max=G(t.max,n.max,i)}function XS(e,t,n,i){cp(e.x,t.x,n.x,i),cp(e.y,t.y,n.y,i)}function YS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const ZS={duration:.45,ease:[.4,0,.1,1]},up=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),dp=up("applewebkit/")&&!up("chrome/")?Math.round:_e;function pp(e){e.min=dp(e.min),e.max=dp(e.max)}function JS(e){pp(e.x),pp(e.y)}function ug(e,t,n){return e==="position"||e==="preserve-aspect"&&!nS(ip(t),ip(n),.2)}function ew(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const tw=cg({attachResizeListener:(e,t)=>ds(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Zo={current:void 0},dg=cg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Zo.current){const e=new tw({});e.mount(window),e.setOptions({layoutScroll:!0}),Zo.current=e}return Zo.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),nw={pan:{Feature:yS},drag:{Feature:vS,ProjectionNode:dg,MeasureLayout:ig}};function fp(e,t,n){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,r=i[s];r&&W.postRender(()=>r(t,Ss(t)))}class iw extends Jt{mount(){const{current:t}=this.node;t&&(this.unmount=nx(t,n=>(fp(this.node,n,"Start"),i=>fp(this.node,i,"End"))))}unmount(){}}class sw extends Jt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xs(ds(this.node.current,"focus",()=>this.onFocus()),ds(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mp(e,t,n){const{props:i}=e;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),r=i[s];r&&W.postRender(()=>r(t,Ss(t)))}class rw extends Jt{mount(){const{current:t}=this.node;t&&(this.unmount=ox(t,n=>(mp(this.node,n,"Start"),(i,{success:s})=>mp(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ul=new WeakMap,Jo=new WeakMap,ow=e=>{const t=ul.get(e.target);t&&t(e)},aw=e=>{e.forEach(ow)};function lw({root:e,...t}){const n=e||document;Jo.has(n)||Jo.set(n,{});const i=Jo.get(n),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(aw,{root:e,...t})),i[s]}function cw(e,t,n){const i=lw(t);return ul.set(e,n),i.observe(e),()=>{ul.delete(e),i.unobserve(e)}}const uw={some:0,all:1};class dw extends Jt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:r}=t,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:uw[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),p=c?u:d;p&&p(l)};return cw(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(pw(t,n))&&this.startObserver()}unmount(){}}function pw({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const fw={inView:{Feature:dw},tap:{Feature:rw},focus:{Feature:sw},hover:{Feature:iw}},mw={layout:{ProjectionNode:dg,MeasureLayout:ig}},dl={current:null},pg={current:!1};function hw(){if(pg.current=!0,!!uc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>dl.current=e.matches;e.addListener(t),t()}else dl.current=!1}const gw=[...Vh,ye,Gt],vw=e=>gw.find(zh(e)),hp=new WeakMap;function yw(e,t,n){for(const i in t){const s=t[i],r=n[i];if(Se(s))e.addValue(i,s);else if(Se(r))e.addValue(i,cs(s,{owner:e}));else if(r!==s)if(e.hasValue(i)){const o=e.getValue(i);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=e.getStaticValue(i);e.addValue(i,cs(o!==void 0?o:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const gp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class xw{scrapeMotionValuesFromProps(t,n,i){return{}}constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Vc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=ft.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,W.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=uo(n),this.isVariantNode=Km(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in p){const y=p[g];l[g]!==void 0&&Se(y)&&y.set(l[g],!1)}}mount(t){this.current=t,hp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),pg.current||hw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:dl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){hp.delete(this.current),this.projection&&this.projection.unmount(),Qt(this.notifyUpdate),Qt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=En.has(t),s=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&W.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),r(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ri){const n=ri[t];if(!n)continue;const{isEnabled:i,Feature:s}=n;if(!this.features[t]&&s&&i(this.props)&&(this.features[t]=new s(this)),this.features[t]){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):se()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<gp.length;i++){const s=gp[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=t[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=yw(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const i=this.values.get(t);n!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=cs(n===null?void 0:n,{owner:this}),this.addValue(t,i)),i}readValue(t,n){var i;let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(Dh(s)||Ch(s))?s=parseFloat(s):!vw(s)&&Gt.test(n)&&(s=Mh(t,n)),this.setBaseTarget(t,Se(s)?s.get():s)),Se(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const o=vc(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(s=o[t])}if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!Se(r)?r:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Mc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class fg extends xw{constructor(){super(...arguments),this.KeyframeResolver=Fh}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Se(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Sw(e){return window.getComputedStyle(e)}class ww extends fg{constructor(){super(...arguments),this.type="html",this.renderInstance=eh}readValueFromInstance(t,n){if(En.has(n)){const i=zc(n);return i&&i.default||0}else{const i=Sw(t),s=(Ym(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return tg(t,n)}build(t,n,i){Sc(t,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,n,i){return Pc(t,n,i)}}class Tw extends fg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=se}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(En.has(n)){const i=zc(n);return i&&i.default||0}return n=th.has(n)?n:mc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,i){return sh(t,n,i)}build(t,n,i){wc(t,n,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,i,s){nh(t,n,i,s)}mount(t){this.isSVGTag=Ec(t.tagName),super.mount(t)}}const Ew=(e,t)=>gc(e)?new Tw(t):new ww(t,{allowProjection:e!==k.Fragment}),Pw=G0({...H1,...fw,...nw,...mw},Ew),Cw=u0(Pw);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mg=(...e)=>e.filter((t,n,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=k.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:s="",children:r,iconNode:o,...a},l)=>k.createElement("svg",{ref:l,...bw,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:mg("lucide",s),...a},[...o.map(([c,u])=>k.createElement(c,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(e,t)=>{const n=k.forwardRef(({className:i,...s},r)=>k.createElement(kw,{ref:r,iconNode:t,className:mg(`lucide-${jw(e)}`,i),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=Ze("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=Ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=Ze("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=Ze("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=Ze("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=Ze("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=Ze("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=Ze("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=Ze("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=Ze("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=Ze("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=Ze("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function mn({className:e="",variant:t,size:n,asChild:i,...s}){const r="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-magno-500 disabled:opacity-50 disabled:pointer-events-none",o={sm:"h-8 px-3",md:"h-9 px-4",lg:"h-10 px-6"},a={default:"bg-magno-600 text-white hover:bg-magno-700",outline:"border border-slate-300 bg-white hover:bg-slate-50",ghost:"bg-transparent hover:bg-slate-100"},l=[r,o[n]||o.md,a[t]||a.default,e].filter(Boolean).join(" ");return v.jsx("button",{className:l,...s})}function Uw({className:e="",value:t=0,...n}){return v.jsx("div",{className:`w-full h-2 bg-slate-200 rounded ${e}`,...n,children:v.jsx("div",{style:{width:`${t}%`},className:"h-full bg-magenta-600 rounded"})})}function Ti({children:e,...t}){return v.jsx(Cw.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.25},...t,children:e})}function ws({className:e="",...t}){return v.jsx("div",{className:`rounded-xl border border-slate-200 bg-white shadow-sm ${e}`,...t})}function Ts({className:e="",...t}){return v.jsx("div",{className:`p-4 border-b border-slate-200 ${e}`,...t})}function Es({className:e="",...t}){return v.jsx("div",{className:`p-4 ${e}`,...t})}function hn({className:e="",...t}){return v.jsx("input",{className:`w-full h-9 px-3 rounded-md border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-magno-500 ${e}`,...t})}function Bw({className:e="",...t}){return v.jsx("textarea",{className:`w-full min-h-[96px] px-3 py-2 rounded-md border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-magno-500 ${e}`,...t})}function qn({className:e="",...t}){return v.jsx("label",{className:`text-sm text-slate-700 ${e}`,...t})}function Ps({icon:e,title:t,subtitle:n}){return v.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[v.jsx("div",{className:"p-2 rounded-2xl bg-gray-100",children:e&&v.jsx(e,{className:"h-5 w-5"})}),v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-semibold leading-tight",children:t}),n&&v.jsx("p",{className:"text-sm text-gray-500 mt-1",children:n})]})]})}function $w({service:e,setService:t,bizGoal:n,setBizGoal:i,userGoal:s,setUserGoal:r,notes:o,setNotes:a}){return v.jsxs(ws,{className:"shadow-sm rounded-2xl",children:[v.jsx(Ts,{children:v.jsx(Ps,{icon:_w,title:"1) Alineación de objetivos",subtitle:"Define el marco antes de idear: negocio + usuario + servicio"})}),v.jsxs(Es,{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[v.jsxs("div",{children:[v.jsx(qn,{children:"Servicio / producto"}),v.jsx("div",{className:"flex gap-2 mt-1",children:v.jsx(hn,{placeholder:"Ej. Pago a terceros",value:e,onChange:l=>t(l.target.value)})})]}),v.jsxs("div",{children:[v.jsx(qn,{children:"Objetivo de negocio"}),v.jsx(hn,{placeholder:"Ej. Reducir costos de atención",value:n,onChange:l=>i(l.target.value),className:"mt-1"})]}),v.jsxs("div",{children:[v.jsx(qn,{children:"Objetivo de usuario"}),v.jsx(hn,{placeholder:"Ej. Completar pagos masivos sin errores",value:s,onChange:l=>r(l.target.value),className:"mt-1"})]}),v.jsxs("div",{children:[v.jsx(qn,{children:"Notas / contexto"}),v.jsx(Bw,{placeholder:"Riesgos, dependencias, hipótesis…",value:o,onChange:l=>a(l.target.value),className:"mt-1"})]})]})]})}function qw({tasks:e,addTask:t,removeTask:n,updateTask:i}){return v.jsxs(ws,{className:"shadow-sm rounded-2xl",children:[v.jsx(Ts,{children:v.jsx(Ps,{icon:Dw,title:"2) Tareas/flujo clave",subtitle:"Enumera 2–3 micro journeys críticos y dónde hay fricción"})}),v.jsx(Es,{children:v.jsxs("div",{className:"space-y-3",children:[e.map((s,r)=>v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(hn,{placeholder:`Tarea ${r+1} (ej. Cargar archivo de nómina)`,value:s,onChange:o=>i(r,o.target.value)}),e.length>1&&v.jsx(mn,{variant:"ghost",size:"icon",onClick:()=>n(r),className:"shrink-0",children:v.jsx(Ow,{className:"h-4 w-4"})})]},r)),v.jsxs(mn,{onClick:t,variant:"secondary",className:"gap-2",children:[v.jsx(zw,{className:"h-4 w-4"})," Añadir tarea"]})]})})]})}function Kw({className:e="",checked:t,onCheckedChange:n,...i}){return v.jsx("input",{type:"checkbox",className:`h-4 w-4 rounded mt-1 border-slate-300 text-magno-600 focus:ring-magno-500 ${e}`,checked:t,onChange:s=>n==null?void 0:n(s.target.checked),...i})}function Uc({className:e="",...t}){return v.jsx("span",{className:`inline-flex items-center px-2 py-0.5 text-xs rounded border bg-[#e7e7e7] text-slate-700 ${e}`,...t})}function Ww({search:e,setSearch:t,categories:n,filterCats:i,toggleCat:s,filteredKPIs:r,selected:o,toggleKPI:a,setInfo:l,resolveKpiUrl:c}){return v.jsxs(ws,{className:"shadow-sm rounded-2xl",children:[v.jsx(Ts,{children:v.jsx(Ps,{icon:Iw,title:"3) Selección de KPIs",subtitle:"Marca los KPIs relevantes (relevancia, medibilidad y accionabilidad)"})}),v.jsxs(Es,{children:[v.jsxs("div",{className:"gap-3 mb-4",children:[v.jsxs("div",{className:"flex items-center gap-2 flex-1 mb-4",children:[v.jsx(Fw,{className:"h-4 w-4 text-gray-500"}),v.jsx(hn,{placeholder:"Buscar KPI por nombre o descripción…",value:e,onChange:u=>t(u.target.value)})]}),v.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:n.map(u=>v.jsx("button",{onClick:()=>s(u),className:`px-2 py-1 rounded-full text-xs border ${i.includes(u)?"bg-magno-600 text-white border-magno-600":"bg-white text-gray-700"}`,children:u},u))})]}),v.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-3",children:r.map(u=>v.jsx("label",{className:`border rounded-2xl p-4 cursor-pointer transition-shadow ${o[u.id]?"border-magno-600 shadow-md":"hover:shadow-sm"}`,children:v.jsxs("div",{className:"flex items-start gap-3",children:[v.jsx(Kw,{checked:!!o[u.id],onCheckedChange:()=>a(u.id)}),v.jsxs("div",{children:[v.jsxs("div",{className:"gap-2 mb-1",children:[v.jsxs("div",{className:"font-medium flex items-center gap-2",children:[u.title,u.url&&v.jsx("button",{type:"button",title:"Más info",onClick:d=>{d.stopPropagation(),l({open:!0,url:c(u.url),title:u.title,id:u.id})},className:"ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100",children:"?"})]}),v.jsx("div",{children:v.jsx(Uc,{variant:"outline",children:u.cat})})]}),v.jsx("p",{className:"text-sm text-gray-600",children:u.desc}),v.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:["Cómo se mide: ",u.how]})]})]})},u.id))}),Object.keys(o).length===0&&v.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Tip: empieza marcando 2–3 KPIs máximo para mantener el foco."})]})]})}function Hw({selected:e,kpiCatalogWithUrl:t,updateSelected:n,setInfo:i,resolveKpiUrl:s}){const r=Object.keys(e).length,a=(c=>c===0?{text:"Falta foco: aún no han elegido.",tone:"neutral"}:c<=3?{text:"Ideal: foco nítido para iterar rápido.",tone:"success"}:c<=6?{text:"Bien, pero vigilen la dispersión.",tone:"info"}:c<=10?{text:"Muchos: alto riesgo de diluir esfuerzos.",tone:"warn"}:{text:"⚠️ Exceso: re-evaluar y priorizar.",tone:"danger"})(r),l={neutral:"bg-gray-50 border-gray-200 text-gray-700",success:"bg-emerald-50 border-emerald-200 text-emerald-700",info:"bg-amber-50 border-amber-200 text-amber-800",warn:"bg-orange-50 border-orange-200 text-orange-800",danger:"bg-red-50 border-red-200 text-red-700"};return v.jsxs(ws,{className:"shadow-sm rounded-2xl",children:[v.jsx(Ts,{children:v.jsx(Ps,{icon:Mw,title:"4) Baseline y meta",subtitle:"Define punto de partida y objetivo por KPI seleccionado"})}),v.jsxs(Es,{className:"space-y-4",children:[v.jsxs("div",{className:`text-sm px-3 py-2 rounded border ${l[a.tone]}`,children:[v.jsxs("span",{className:"font-medium mr-2",children:["Selección: ",r," KPI(s)."]}),v.jsx("span",{children:a.text})]}),r===0&&v.jsx("p",{className:"text-sm text-gray-500",children:"Primero selecciona KPIs en la pantalla anterior."}),Object.keys(e).map(c=>{const u=t.find(d=>d.id===c);return v.jsxs("div",{className:"border rounded-2xl p-4",children:[v.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(Uc,{variant:"outline",children:u.cat}),v.jsx("span",{className:"font-semibold",children:u.title}),u.url&&v.jsx("button",{type:"button",title:"Más info",onClick:()=>i({open:!0,url:s(u.url),title:u.title,id:u.id}),className:"ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100",children:"?"})]}),v.jsx("span",{className:"text-xs text-gray-500",children:u.how})]}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-3 mt-2",children:[v.jsxs("div",{children:[v.jsx(qn,{children:"Baseline"}),v.jsx(hn,{placeholder:"Ej. 82% / 2m 30s",value:e[c].baseline,onChange:d=>n(c,"baseline",d.target.value)})]}),v.jsxs("div",{children:[v.jsx(qn,{children:"Meta"}),v.jsx(hn,{placeholder:"Ej. 92% / 1m 45s",value:e[c].target,onChange:d=>n(c,"target",d.target.value)})]})]})]},c)})]})]})}function Qw({className:e="",...t}){return v.jsx("hr",{className:`my-4 border-slate-200 ${e}`,...t})}function Gw(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),i=n.createElement("base"),s=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(s),t&&(i.href=t),s.href=e,s.href}const Xw=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function Et(e){const t=[];for(let n=0,i=e.length;n<i;n++)t.push(e[n]);return t}function $r(e,t){const i=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return i?parseFloat(i.replace("px","")):0}function Yw(e){const t=$r(e,"border-left-width"),n=$r(e,"border-right-width");return e.clientWidth+t+n}function Zw(e){const t=$r(e,"border-top-width"),n=$r(e,"border-bottom-width");return e.clientHeight+t+n}function hg(e,t={}){const n=t.width||Yw(e),i=t.height||Zw(e);return{width:n,height:i}}function Jw(){let e,t;try{t=process}catch{}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const Ie=16384;function e2(e){(e.width>Ie||e.height>Ie)&&(e.width>Ie&&e.height>Ie?e.width>e.height?(e.height*=Ie/e.width,e.width=Ie):(e.width*=Ie/e.height,e.height=Ie):e.width>Ie?(e.height*=Ie/e.width,e.width=Ie):(e.width*=Ie/e.height,e.height=Ie))}function qr(e){return new Promise((t,n)=>{const i=new Image;i.decode=()=>t(i),i.onload=()=>t(i),i.onerror=n,i.crossOrigin="anonymous",i.decoding="async",i.src=e})}async function t2(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function n2(e,t,n){const i="http://www.w3.org/2000/svg",s=document.createElementNS(i,"svg"),r=document.createElementNS(i,"foreignObject");return s.setAttribute("width",`${t}`),s.setAttribute("height",`${n}`),s.setAttribute("viewBox",`0 0 ${t} ${n}`),r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("externalResourcesRequired","true"),s.appendChild(r),r.appendChild(e),t2(s)}const Re=(e,t)=>{if(e instanceof t)return!0;const n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||Re(n,t)};function i2(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function s2(e){return Et(e).map(t=>{const n=e.getPropertyValue(t),i=e.getPropertyPriority(t);return`${t}: ${n}${i?" !important":""};`}).join(" ")}function r2(e,t,n){const i=`.${e}:${t}`,s=n.cssText?i2(n):s2(n);return document.createTextNode(`${i}{${s}}`)}function vp(e,t,n){const i=window.getComputedStyle(e,n),s=i.getPropertyValue("content");if(s===""||s==="none")return;const r=Xw();try{t.className=`${t.className} ${r}`}catch{return}const o=document.createElement("style");o.appendChild(r2(r,n,i)),t.appendChild(o)}function o2(e,t){vp(e,t,":before"),vp(e,t,":after")}const yp="application/font-woff",xp="image/jpeg",a2={woff:yp,woff2:yp,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:xp,jpeg:xp,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function l2(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function Bc(e){const t=l2(e).toLowerCase();return a2[t]||""}function c2(e){return e.split(/,/)[1]}function pl(e){return e.search(/^(data:)/)!==-1}function u2(e,t){return`data:${t};base64,${e}`}async function gg(e,t,n){const i=await fetch(e,t);if(i.status===404)throw new Error(`Resource "${i.url}" not found`);const s=await i.blob();return new Promise((r,o)=>{const a=new FileReader;a.onerror=o,a.onloadend=()=>{try{r(n({res:i,result:a.result}))}catch(l){o(l)}},a.readAsDataURL(s)})}const ea={};function d2(e,t,n){let i=e.replace(/\?.*/,"");return n&&(i=e),/ttf|otf|eot|woff2?/i.test(i)&&(i=i.replace(/.*\//,"")),t?`[${t}]${i}`:i}async function $c(e,t,n){const i=d2(e,t,n.includeQueryParams);if(ea[i]!=null)return ea[i];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let s;try{const r=await gg(e,n.fetchRequestInit,({res:o,result:a})=>(t||(t=o.headers.get("Content-Type")||""),c2(a)));s=u2(r,t)}catch(r){s=n.imagePlaceholder||"";let o=`Failed to fetch resource: ${e}`;r&&(o=typeof r=="string"?r:r.message),o&&console.warn(o)}return ea[i]=s,s}async function p2(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):qr(t)}async function f2(e,t){if(e.currentSrc){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=e.clientWidth,r.height=e.clientHeight,o==null||o.drawImage(e,0,0,r.width,r.height);const a=r.toDataURL();return qr(a)}const n=e.poster,i=Bc(n),s=await $c(n,i,t);return qr(s)}async function m2(e){var t;try{if(!((t=e==null?void 0:e.contentDocument)===null||t===void 0)&&t.body)return await mo(e.contentDocument.body,{},!0)}catch{}return e.cloneNode(!1)}async function h2(e,t){return Re(e,HTMLCanvasElement)?p2(e):Re(e,HTMLVideoElement)?f2(e,t):Re(e,HTMLIFrameElement)?m2(e):e.cloneNode(!1)}const g2=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT";async function v2(e,t,n){var i,s;let r=[];return g2(e)&&e.assignedNodes?r=Et(e.assignedNodes()):Re(e,HTMLIFrameElement)&&(!((i=e.contentDocument)===null||i===void 0)&&i.body)?r=Et(e.contentDocument.body.childNodes):r=Et(((s=e.shadowRoot)!==null&&s!==void 0?s:e).childNodes),r.length===0||Re(e,HTMLVideoElement)||await r.reduce((o,a)=>o.then(()=>mo(a,n)).then(l=>{l&&t.appendChild(l)}),Promise.resolve()),t}function y2(e,t){const n=t.style;if(!n)return;const i=window.getComputedStyle(e);i.cssText?(n.cssText=i.cssText,n.transformOrigin=i.transformOrigin):Et(i).forEach(s=>{let r=i.getPropertyValue(s);s==="font-size"&&r.endsWith("px")&&(r=`${Math.floor(parseFloat(r.substring(0,r.length-2)))-.1}px`),Re(e,HTMLIFrameElement)&&s==="display"&&r==="inline"&&(r="block"),s==="d"&&t.getAttribute("d")&&(r=`path(${t.getAttribute("d")})`),n.setProperty(s,r,i.getPropertyPriority(s))})}function x2(e,t){Re(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),Re(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function S2(e,t){if(Re(e,HTMLSelectElement)){const n=t,i=Array.from(n.children).find(s=>e.value===s.getAttribute("value"));i&&i.setAttribute("selected","")}}function w2(e,t){return Re(t,Element)&&(y2(e,t),o2(e,t),x2(e,t),S2(e,t)),t}async function T2(e,t){const n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;const i={};for(let r=0;r<n.length;r++){const a=n[r].getAttribute("xlink:href");if(a){const l=e.querySelector(a),c=document.querySelector(a);!l&&c&&!i[a]&&(i[a]=await mo(c,t,!0))}}const s=Object.values(i);if(s.length){const r="http://www.w3.org/1999/xhtml",o=document.createElementNS(r,"svg");o.setAttribute("xmlns",r),o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.overflow="hidden",o.style.display="none";const a=document.createElementNS(r,"defs");o.appendChild(a);for(let l=0;l<s.length;l++)a.appendChild(s[l]);e.appendChild(o)}return e}async function mo(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(i=>h2(i,t)).then(i=>v2(e,i,t)).then(i=>w2(e,i)).then(i=>T2(i,t))}const vg=/url\((['"]?)([^'"]+?)\1\)/g,E2=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,P2=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function C2(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function j2(e){const t=[];return e.replace(vg,(n,i,s)=>(t.push(s),n)),t.filter(n=>!pl(n))}async function b2(e,t,n,i,s){try{const r=n?Gw(t,n):t,o=Bc(t);let a;return s||(a=await $c(r,o,i)),e.replace(C2(t),`$1${a}$3`)}catch{}return e}function k2(e,{preferredFontFormat:t}){return t?e.replace(P2,n=>{for(;;){const[i,,s]=E2.exec(n)||[];if(!s)return"";if(s===t)return`src: ${i};`}}):e}function yg(e){return e.search(vg)!==-1}async function xg(e,t,n){if(!yg(e))return e;const i=k2(e,n);return j2(i).reduce((r,o)=>r.then(a=>b2(a,o,t,n)),Promise.resolve(i))}async function Xs(e,t,n){var i;const s=(i=t.style)===null||i===void 0?void 0:i.getPropertyValue(e);if(s){const r=await xg(s,null,n);return t.style.setProperty(e,r,t.style.getPropertyPriority(e)),!0}return!1}async function A2(e,t){await Xs("background",e,t)||await Xs("background-image",e,t),await Xs("mask",e,t)||await Xs("mask-image",e,t)}async function N2(e,t){const n=Re(e,HTMLImageElement);if(!(n&&!pl(e.src))&&!(Re(e,SVGImageElement)&&!pl(e.href.baseVal)))return;const i=n?e.src:e.href.baseVal,s=await $c(i,Bc(i),t);await new Promise((r,o)=>{e.onload=r,e.onerror=o;const a=e;a.decode&&(a.decode=r),a.loading==="lazy"&&(a.loading="eager"),n?(e.srcset="",e.src=s):e.href.baseVal=s})}async function M2(e,t){const i=Et(e.childNodes).map(s=>Sg(s,t));await Promise.all(i).then(()=>e)}async function Sg(e,t){Re(e,Element)&&(await A2(e,t),await N2(e,t),await M2(e,t))}function R2(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const i=t.style;return i!=null&&Object.keys(i).forEach(s=>{n[s]=i[s]}),e}const Sp={};async function wp(e){let t=Sp[e];if(t!=null)return t;const i=await(await fetch(e)).text();return t={url:e,cssText:i},Sp[e]=t,t}async function Tp(e,t){let n=e.cssText;const i=/url\(["']?([^"')]+)["']?\)/g,r=(n.match(/url\([^)]+\)/g)||[]).map(async o=>{let a=o.replace(i,"$1");return a.startsWith("https://")||(a=new URL(a,e.url).href),gg(a,t.fetchRequestInit,({result:l})=>(n=n.replace(o,`url(${l})`),[o,l]))});return Promise.all(r).then(()=>n)}function Ep(e){if(e==null)return[];const t=[],n=/(\/\*[\s\S]*?\*\/)/gi;let i=e.replace(n,"");const s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const l=s.exec(i);if(l===null)break;t.push(l[0])}i=i.replace(s,"");const r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",a=new RegExp(o,"gi");for(;;){let l=r.exec(i);if(l===null){if(l=a.exec(i),l===null)break;r.lastIndex=a.lastIndex}else a.lastIndex=r.lastIndex;t.push(l[0])}return t}async function L2(e,t){const n=[],i=[];return e.forEach(s=>{if("cssRules"in s)try{Et(s.cssRules||[]).forEach((r,o)=>{if(r.type===CSSRule.IMPORT_RULE){let a=o+1;const l=r.href,c=wp(l).then(u=>Tp(u,t)).then(u=>Ep(u).forEach(d=>{try{s.insertRule(d,d.startsWith("@import")?a+=1:s.cssRules.length)}catch(p){console.error("Error inserting rule from remote css",{rule:d,error:p})}})).catch(u=>{console.error("Error loading remote css",u.toString())});i.push(c)}})}catch(r){const o=e.find(a=>a.href==null)||document.styleSheets[0];s.href!=null&&i.push(wp(s.href).then(a=>Tp(a,t)).then(a=>Ep(a).forEach(l=>{o.insertRule(l,s.cssRules.length)})).catch(a=>{console.error("Error loading remote stylesheet",a)})),console.error("Error inlining remote css file",r)}}),Promise.all(i).then(()=>(e.forEach(s=>{if("cssRules"in s)try{Et(s.cssRules||[]).forEach(r=>{n.push(r)})}catch(r){console.error(`Error while reading CSS rules from ${s.href}`,r)}}),n))}function D2(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>yg(t.style.getPropertyValue("src")))}async function I2(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=Et(e.ownerDocument.styleSheets),i=await L2(n,t);return D2(i)}async function z2(e,t){const n=await I2(e,t);return(await Promise.all(n.map(s=>{const r=s.parentStyleSheet?s.parentStyleSheet.href:null;return xg(s.cssText,r,t)}))).join(`
`)}async function V2(e,t){const n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await z2(e,t);if(n){const i=document.createElement("style"),s=document.createTextNode(n);i.appendChild(s),e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i)}}async function F2(e,t={}){const{width:n,height:i}=hg(e,t),s=await mo(e,t,!0);return await V2(s,t),await Sg(s,t),R2(s,t),await n2(s,n,i)}async function _2(e,t={}){const{width:n,height:i}=hg(e,t),s=await F2(e,t),r=await qr(s),o=document.createElement("canvas"),a=o.getContext("2d"),l=t.pixelRatio||Jw(),c=t.canvasWidth||n,u=t.canvasHeight||i;return o.width=c*l,o.height=u*l,t.skipAutoScale||e2(o),o.style.width=`${c}`,o.style.height=`${u}`,t.backgroundColor&&(a.fillStyle=t.backgroundColor,a.fillRect(0,0,o.width,o.height)),a.drawImage(r,0,0,o.width,o.height),o}async function O2(e,t={}){return(await _2(e,t)).toDataURL()}function U2({service:e,bizGoal:t,userGoal:n,notes:i,tasks:s,selected:r,kpiCatalogWithUrl:o,setInfo:a,resolveKpiUrl:l,copyMarkdown:c,resetAll:u}){const d=q.useRef(null),p=async()=>{const g=d.current;if(g)try{const y=await O2(g,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:Math.min(2,window.devicePixelRatio||1),filter:m=>{if(!(m instanceof Element))return!0;const f=window.getComputedStyle(m);return!(f&&/url\(/i.test(f.backgroundImage||""))}}),x=document.createElement("a"),T=`kpi-resumen-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.png`;x.download=T,x.href=y,document.body.appendChild(x),x.click(),document.body.removeChild(x)}catch{alert("No se pudo generar la imagen PNG.")}};return v.jsx("div",{ref:d,children:v.jsxs(ws,{className:"shadow-sm rounded-2xl",children:[v.jsx(Ts,{children:v.jsx(Ps,{icon:Rw,title:"5) Resumen y confirmación",subtitle:"Todo listo para compartir y repetir en otro servicio"})}),v.jsxs(Es,{children:[v.jsxs("div",{className:"grid md:[grid-template-columns:3fr_4fr] gap-6",children:[v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-2",children:"Contexto"}),v.jsxs("div",{className:"space-y-2 text-sm",children:[v.jsxs("p",{children:[v.jsx("span",{className:"font-medium",children:"Servicio / producto:"})," ",e||v.jsx("i",{className:"text-gray-400",children:"—"})]}),v.jsxs("p",{children:[v.jsx("span",{className:"font-medium",children:"Objetivo de negocio:"})," ",v.jsx("br",{})," ",t||v.jsx("i",{className:"text-gray-400",children:"—"})]}),v.jsxs("p",{children:[v.jsx("span",{className:"font-medium",children:"Objetivo de usuario:"})," ",v.jsx("br",{})," ",n||v.jsx("i",{className:"text-gray-400",children:"—"})]}),i&&v.jsx("p",{className:"text-gray-500",children:i})]}),v.jsx(Qw,{className:"my-4"}),v.jsx("h4",{className:"font-semibold mb-2",children:"Tareas clave"}),v.jsx("ul",{className:"list-disc ml-5 text-sm space-y-1",children:s.filter(Boolean).map((g,y)=>v.jsx("li",{children:g},y))})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"font-semibold mb-2",children:"KPIs seleccionados"}),v.jsxs("div",{className:"space-y-3",children:[Object.keys(r).length===0&&v.jsx("p",{className:"text-sm text-gray-500",children:"No hay KPIs seleccionados."}),Object.keys(r).map(g=>{const y=o.find(T=>T.id===g),x=r[g];return v.jsxs("div",{className:"border rounded-2xl p-3",children:[v.jsxs("div",{className:"items-center justify-between gap-2",children:[v.jsx("div",{className:"mb-2",children:v.jsx(Uc,{variant:"outline",children:y.cat})}),v.jsxs("div",{className:"gap-2",children:[v.jsxs("div",{className:"font-medium flex items-center gap-2",children:[y.title,y.url&&v.jsx("button",{type:"button",title:"Más info",onClick:()=>a({open:!0,url:l(y.url),title:y.title,id:y.id}),className:"ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100",children:"?"})]}),v.jsx("div",{className:"text-xs text-gray-500",children:y.desc})]})]}),v.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs mt-2",children:[v.jsxs("div",{children:[v.jsx("span",{className:"text-gray-500",children:"Baseline:"})," ",x.baseline||v.jsx("i",{children:"—"})]}),v.jsxs("div",{children:[v.jsx("span",{className:"text-gray-500",children:"Meta:"})," ",x.target||v.jsx("i",{children:"—"})]})]})]},g)})]})]})]}),v.jsxs("div",{className:"flex items-center gap-2 mt-6",children:[v.jsxs(mn,{onClick:c,className:"gap-2",children:[v.jsx(Lw,{className:"h-4 w-4"})," Copiar resumen (Markdown)"]}),v.jsx(mn,{onClick:p,className:"gap-2",variant:"outline",children:"Descargar imagen (PNG)"})]})]})]})})}const B2={adoption:{title:"Tasa de adopción",subtitle:"Mide la velocidad y amplitud de uso de nuevas funcionalidades o productos.",html:`
    <div class="space-y-4">
      <p>
        La <strong>Tasa de adopción</strong> refleja el porcentaje de usuarios o empresas que empiezan a utilizar una nueva
        funcionalidad o producto dentro de un periodo de tiempo específico (por ejemplo, durante las primeras 
        7, 14 o 30 días tras su lanzamiento). Es un indicador esencial para entender la aceptación inicial de 
        una novedad y evaluar si el esfuerzo de desarrollo está generando el impacto esperado.
      </p>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tasa de adopción (%) = (Número de usuarios que adoptan la nueva funcionalidad ÷ 
            Total de usuarios objetivo) × 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La proporción de clientes que prueban o integran la nueva funcionalidad.</li>
          <li>La efectividad de las campañas de lanzamiento y comunicación.</li>
          <li>El nivel de interés real que genera una mejora o producto en la base de usuarios.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Una tasa <strong>alta</strong> indica que la innovación responde a una necesidad concreta y ofrece valor claro.</li>
          <li>Una tasa <strong>baja</strong> puede sugerir que los usuarios no perciben el beneficio, que la solución no es lo suficientemente simple, o que falta difusión interna/externa.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Frecuencia recomendada de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Semanal durante el primer mes tras el lanzamiento.</li>
          <li>Mensual para evaluar la consolidación del uso.</li>
        </ul>
      </div>
    </div>
  `},active:{title:"Usuarios activos (DAU/MAU)",subtitle:"Mide hábito y recurrencia de uso en ventanas diaria y mensual.",html:`
    <div class="space-y-4">
      <p>
        <strong>DAU</strong> (Daily Active Users) y <strong>MAU</strong> (Monthly Active Users) cuantifican cuántos
        usuarios únicos interactúan con el producto en un día o en un mes, respectivamente. En banca empresas,
        ayuda a entender si hay <em>hábito</em> y recurrencia de uso en tareas clave (p. ej., pagos, consultas de saldos).
      </p>

      <div>
        <p class="font-semibold">Definiciones:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>DAU:</strong> Número de usuarios <em>únicos</em> que realizaron al menos una acción válida en un día (login, consulta, transacción, etc.).</li>
          <li><strong>MAU:</strong> Número de usuarios <em>únicos</em> que realizaron al menos una acción válida en los últimos 30 días.</li>
          <li><strong>Stickiness (DAU/MAU):</strong> Relación que aproxima la frecuencia de uso mensual. Un mayor valor sugiere hábito más fuerte.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmulas:</p>
        <ul class="list-disc list-inside pl-2">
          <li><code>DAU = # usuarios únicos activos en D</code></li>
          <li><code>MAU = # usuarios únicos activos en últimos 30 días</code></li>
          <li><code>Stickiness (%) = (DAU ÷ MAU) × 100</code></li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La magnitud de la base que realmente usa el canal digital (no solo registrada).</li>
          <li>La frecuencia/constancia con la que vuelven (stickiness).</li>
          <li>Impacto de lanzamientos o campañas en el uso recurrente (picos vs consolidación).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación y señales:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>DAU alto pero stickiness bajo:</strong> picos por eventos (p. ej. fin de mes) pero poco hábito diario.</li>
          <li><strong>MAU alto y stickiness creciente:</strong> adopción sostenida y más tareas recurrentes en digital.</li>
          <li><strong>Caídas bruscas:</strong> pueden indicar incidentes, fricción nueva o cambios en procesos (ej. token, KYC).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Evento de “usuario activo” claro:</strong> define qué cuenta como actividad válida (evitar solo “abrir app”).</li>
          <li><strong>Segmenta por empresa/rol:</strong> banca empresas tiene múltiples usuarios por cuenta; segmenta por rol (pagador, aprobador, visor).</li>
          <li><strong>Vista por módulo:</strong> DAU/MAU global + por funcionalidades clave (p. ej., Nómina, Transferencias exterior).</li>
          <li><strong>Normaliza por estacionalidad:</strong> compara semanas equivalentes y controla periodos de cierre/fin de mes.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En septiembre: <code>MAU = 8.000</code> empresas/usuarios activos.</li>
          <li>Un día típico: <code>DAU = 2.000</code>.</li>
          <li><code>Stickiness = (2.000 ÷ 8.000) × 100 = 25%</code>.</li>
          <li>Si lanzas pagos masivos y sube a 2.600 DAU con 8.200 MAU, <code>stickiness = 31,7%</code> → hábito en alza.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No mezclar “usuarios registrados” con activos: son universos diferentes.</li>
          <li>Evitar contar sesiones múltiples del mismo usuario como usuarios distintos (asegura unicidad).</li>
          <li>No uses solo DAU o solo MAU: la relación DAU/MAU evita lecturas sesgadas.</li>
        </ul>
      </div>
    </div>
    `},activation:{title:"Tasa de activación",subtitle:"Del registro al primer valor: ¿cuántos llegan a su primera acción clave?",html:`
    <div class="space-y-4">
      <p>
        La <strong>Tasa de activación</strong> mide el porcentaje de usuarios/empresas que,
        tras <em>registrarse o habilitar acceso</em>, completan su <strong>primera acción de valor</strong>
        (p. ej., realizar un pago, cargar nómina, aprobar una transferencia, descargar un estado con éxito).
        Es un indicador de si el onboarding y el flujo inicial realmente conducen a valor.
      </p>

      <div>
        <p class="font-semibold">Definiciones clave:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Evento de activación:</strong> la <em>primera</em> acción que demuestra valor real (no solo login). Debe ser única, medible y trazable.</li>
          <li><strong>Ventana de activación:</strong> tiempo máximo considerado desde el alta (p. ej., 7, 14 o 30 días) para contar una activación como válida.</li>
          <li><strong>Unidad de medida:</strong> por <em>usuario</em> o por <em>empresa</em> (en banca empresas suele medirse a nivel de empresa <em>y</em> a nivel de roles: pagador, aprobador, visor).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tasa de activación (%) = (Nº de cuentas/usuarios que completan el evento de activación dentro de la ventana ÷ Nº total de nuevos registrados/habilitados) × 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La eficacia del onboarding (configuración de token, permisos, límites, KYC) para llevar a la primera acción de valor.</li>
          <li>La claridad del valor percibido del canal digital para empresas.</li>
          <li>La facilidad de descubrir y ejecutar el flujo inicial clave (p. ej., “pago simple” o “carga de nómina”).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Alta activación:</strong> buen onboarding + propuesta de valor clara + fricción baja en el primer flujo.</li>
          <li><strong>Baja activación:</strong> señales de fricción (tokenización, permisos, aprobaciones), valor poco visible, o ventana demasiado corta.</li>
          <li><strong>Tiempo a activación (TTA):</strong> usarlo como complemento: días/horas promedio al primer evento de valor.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Define <em>un</em> evento de activación por módulo (p. ej., en nómina “archivo cargado y pago confirmado”).</li>
          <li>Segmenta por <strong>rol</strong> (pagador, aprobador) y por <strong>tamaño de empresa</strong> (micro, pyme, corporativa).</li>
          <li>Elige una <strong>ventana realista</strong> según el ciclo del cliente (p. ej., 14 días para pagos, 30 días para nómina).</li>
          <li>Complementa con <strong>embudo de activación</strong> (alta → token → permisos → primera transacción).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo (empresa):</p>
        <ul class="list-disc list-inside pl-2">
          <li>En 30 días: 1.000 empresas habilitadas.</li>
          <li>Dentro de 14 días: 620 realizan su primer pago o cargan nómina con éxito.</li>
          <li><code>Tasa de activación = (620 ÷ 1.000) × 100 = 62%</code>.</li>
          <li>Si el <em>Tiempo a activación</em> promedio baja de 6 a 3 días tras mejoras de onboarding, vamos en la dirección correcta.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No contar <strong>login</strong> como activación; debe ser una acción de valor.</li>
          <li>Evitar <strong>ventanas</strong> demasiado cortas (subestiman activación) o demasiado largas (diluyen lectura).</li>
          <li>Cuidado con <strong>duplicados</strong> (múltiples usuarios por empresa) y con <strong>eventos técnicos</strong> que marcan éxito sin que el usuario lo perciba.</li>
        </ul>
      </div>
    </div>
  `},featureUsage:{title:"Uso por funcionalidad",subtitle:"Profundidad de uso: ¿qué tanto se usan los distintos módulos?",html:`
    <div class="space-y-4">
      <p>
        El KPI de <strong>Uso por funcionalidad</strong> mide el porcentaje de sesiones o usuarios
        que utilizan una funcionalidad específica del producto (ej. pagos masivos, transferencias
        internacionales, descarga de certificados). Permite identificar qué módulos generan más
        valor y cuáles pueden estar infrautilizados.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Porcentaje de usuarios o sesiones que usan una funcionalidad sobre el total de usuarios o sesiones en un periodo dado.</li>
          <li>Puede medirse por <em>usuario único</em> (empresas que al menos una vez usaron la función) o por <em>sesiones</em> (veces que la función fue usada en relación al total de sesiones).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Uso funcionalidad (%) = (Nº de usuarios/sesiones que usaron la funcionalidad ÷ Nº total de usuarios/sesiones en el periodo) × 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>El nivel de adopción y relevancia de cada módulo de la banca empresas.</li>
          <li>La efectividad de las campañas de comunicación o lanzamientos de nuevas funciones.</li>
          <li>Oportunidades de simplificación: funcionalidades críticas con bajo uso pueden indicar problemas de discoverability o complejidad.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Alto uso:</strong> la funcionalidad es percibida como valiosa y probablemente resuelve una necesidad recurrente.</li>
          <li><strong>Bajo uso:</strong> puede deberse a que los usuarios no conocen la función, no confían en ella o encuentran fricción en el acceso.</li>
          <li>Un cambio en la interfaz que aumenta el uso puede ser evidencia de mejora en la experiencia de descubrimiento.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Medir el uso por <strong>segmento</strong> (tipo de empresa, rol de usuario, sector).</li>
          <li>Complementar con <strong>encuestas cualitativas</strong> para entender por qué no se usa una función crítica.</li>
          <li>Relacionar con métricas de <strong>adopción y retención</strong> para identificar correlaciones (ej. empresas que usan 3+ funcionalidades tienden a quedarse más tiempo).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En un mes: 10.000 usuarios activos en banca empresas.</li>
          <li>De ellos, 3.200 usaron la funcionalidad “pagos masivos”.</li>
          <li><code>Uso pagos masivos = (3.200 ÷ 10.000) × 100 = 32%</code>.</li>
          <li>Si tras mejorar la visibilidad del acceso sube a 4.800 usuarios, el uso escala a 48% → evidencia de impacto positivo.</li>
        </ul>
      </div>
    </div>
  `},timeOnTask:{title:"Tiempo en tarea",subtitle:"Eficiencia y fricción: ¿cuánto tarda un usuario en completar una acción clave?",html:`
    <div class="space-y-4">
      <p>
        El KPI de <strong>Tiempo en tarea</strong> mide la duración promedio que un usuario emplea
        para completar un flujo o acción clave en el sistema (ej. realizar una transferencia,
        cargar nómina, descargar un estado de cuenta). Es un indicador central de eficiencia y
        facilidad de uso.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Tiempo promedio (mediana p50 y, opcionalmente, percentil p90) desde el inicio hasta la confirmación de una tarea.</li>
          <li>Se mide en segundos o minutos, dependiendo del tipo de flujo.</li>
          <li>Debe excluir tiempos de inactividad prolongada para no sesgar el dato.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tiempo en tarea = (Σ tiempos de finalización de la tarea ÷ Nº de tareas completadas)</code>
          </li>
          <li>Recomendado: reportar <code>p50</code> y <code>p90</code> en lugar de solo el promedio, para reflejar variabilidad.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La eficiencia del flujo de usuario.</li>
          <li>La claridad de la interfaz y los pasos necesarios para completar la acción.</li>
          <li>El impacto de cambios en diseño o performance en la productividad del usuario.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Tiempos bajos:</strong> procesos optimizados y simples.</li>
          <li><strong>Tiempos altos:</strong> indicio de fricción, pasos innecesarios, carga lenta o errores frecuentes.</li>
          <li>Comparar entre <strong>nuevos</strong> y <strong>usuarios recurrentes</strong> ayuda a detectar problemas de aprendizaje vs problemas de diseño.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Definir claramente inicio y fin de cada tarea (ej. clic en “Nueva transferencia” → confirmación exitosa).</li>
          <li>Registrar tanto el <strong>tiempo activo</strong> como los posibles <strong>tiempos de espera del sistema</strong>.</li>
          <li>Complementar con <strong>eventos de error</strong> para detectar si los tiempos altos están vinculados a fallos.</li>
          <li>Comparar después de <strong>rediseños o mejoras</strong> para validar impacto.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En un mes: 1.200 operaciones de carga de nómina.</li>
          <li>Mediana (p50): 2 min 10 s.</li>
          <li>Percentil 90 (p90): 4 min 30 s.</li>
          <li>Tras optimizar validaciones, el p50 bajó a 1 min 20 s y el p90 a 2 min 45 s → evidencia clara de mejora en eficiencia.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No confundir tiempo bajo con buena experiencia: un tiempo muy corto puede indicar que el usuario abandonó o cometió un error sin completar.</li>
          <li>No usar solo promedio: puede ocultar casos extremos donde pocos usuarios sufren fricción severa.</li>
        </ul>
      </div>
    </div>
  `},success:{title:"Tasa de éxito",subtitle:"Eficiencia & Fricción: ¿cuántas operaciones se completan sin problemas?",html:`
    <div class="space-y-4">
      <p>
        La <strong>Tasa de éxito</strong> mide el porcentaje de operaciones o tareas que los usuarios logran
        completar sin errores, bloqueos o necesidad de repetir pasos. En banca empresas es un KPI clave
        para evaluar la <em>confiabilidad y usabilidad de los flujos críticos</em> como transferencias,
        pagos masivos o apertura de cuentas.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Proporción de operaciones iniciadas que llegan a completarse correctamente.</li>
          <li>Se considera éxito cuando el sistema confirma la operación y el usuario percibe que se logró el objetivo.</li>
          <li>Incluye la reducción de <strong>reintentos</strong> y de errores de validación o técnicos.</li>
          </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li><code>Tasa de éxito (%) = (Nº de operaciones completadas exitosamente ÷ Nº total de operaciones iniciadas) × 100</code></li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La capacidad del sistema para permitir que los usuarios completen sus objetivos.</li>
          <li>La solidez de los flujos de negocio frente a fricciones técnicas o de diseño.</li>
          <li>El impacto de mejoras de UX en la reducción de errores y caídas.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Tasa alta (&gt;95%):</strong> indica que la mayoría de los usuarios logran completar sus operaciones sin problemas.</li>
          <li><strong>Tasa baja (&lt;90%):</strong> alerta sobre fricciones críticas: errores técnicos, validaciones confusas, problemas de diseño o flujos poco claros.</li>
          <li>Un aumento sostenido en la tasa tras un rediseño es evidencia fuerte de mejora de la experiencia.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Definir con claridad qué cuenta como “éxito” en cada flujo (ej. transferencia confirmada, nómina procesada sin rechazos).</li>
          <li>Separar causas de fallos: <em>errores del usuario</em> (datos mal ingresados) vs <em>errores técnicos</em> (servidor, red, token).</li>
          <li>Analizar éxito por segmento (empresa grande, pyme, rol del usuario) para detectar dónde falla más.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>En un mes: 5.000 transferencias iniciadas.</li>
          <li>De ellas, 4.600 llegaron a confirmación exitosa.</li>
          <li><code>Tasa de éxito = (4.600 ÷ 5.000) × 100 = 92%</code>.</li>
          <li>Tras simplificar el formulario de transferencia, la tasa sube a 97% → se reducen los errores de digitación.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No basta con contar intentos: se debe medir hasta el final del flujo (ej. confirmación de operación).</li>
          <li>Evitar considerar “guardado en borradores” como éxito; el KPI debe reflejar valor real entregado al usuario.</li>
          <li>Si la tasa baja repentinamente, cruzar con métricas técnicas (latencia, uptime) para detectar la causa raíz.</li>
        </ul>
      </div>
    </div>
  `},steps:{title:"Pasos por tarea",subtitle:"Eficiencia & Fricción: mide la simplicidad de los flujos",html:`
    <div class="space-y-4">
      <p>
        El KPI <strong>Pasos por tarea</strong> cuantifica la cantidad de pantallas, clics o interacciones 
        que necesita un usuario para completar una acción específica dentro del producto digital. 
        Es un indicador directo de la <em>eficiencia y simplicidad de los flujos</em>.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Cuenta de pantallas o interacciones necesarias para completar un flujo de inicio a fin.</li>
          <li>Puede medirse en clics, pantallas o campos requeridos según el diseño del producto.</li>
          <li>Se recomienda medir tanto el <em>mínimo teórico</em> como el <em>promedio real</em> que siguen los usuarios.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Pasos promedio = (Suma de pasos de todos los usuarios que completaron la tarea ÷ Total de usuarios que completaron la tarea)</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La fricción percibida en el recorrido de una tarea.</li>
          <li>La eficiencia del diseño y si se está pidiendo información redundante.</li>
          <li>La oportunidad de optimizar flujos para reducir complejidad.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Pocos pasos:</strong> generalmente indica simplicidad y mayor probabilidad de éxito.</li>
          <li><strong>Muchos pasos:</strong> suele correlacionarse con más abandonos, errores y frustración.</li>
          <li>En banca, algunos pasos adicionales son inevitables (ej. autenticación, doble aprobación), por lo que el benchmark debe considerar <em>regulación</em> y <em>seguridad</em>.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Identificar pasos que no aportan valor y eliminarlos o automatizarlos.</li>
          <li>Diferenciar pasos <em>obligatorios</em> por seguridad/regulación de pasos <em>opcionales</em> o redundantes.</li>
          <li>Analizar por segmentos de empresa: grandes corporativos suelen requerir más pasos por controles internos (ej. doble firma).</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Flujo actual de <strong>transferencia simple</strong>: 7 pasos (seleccionar cuenta, ingresar monto, beneficiario, descripción, confirmar, token, recibo).</li>
          <li>Se optimiza a 5 pasos eliminando campos redundantes y precargando datos.</li>
          <li><code>Pasos promedio antes = 7</code> → <code>Pasos promedio después = 5</code>.</li>
          <li>El abandono se reduce de 12% a 6% tras simplificar el flujo.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No medir solo el flujo teórico; en la práctica los usuarios pueden repetir pasos o retroceder.</li>
          <li>No todos los pasos pesan igual: algunos son rápidos (un clic) y otros más costosos (llenar formularios largos).</li>
          <li>Cuidado con eliminar pasos críticos de seguridad solo para “bajar el número”; la clave es optimizar sin comprometer confianza.</li>
        </ul>
      </div>
    </div>
  `},abandon:{title:"Tasa de abandono",subtitle:"Eficiencia & Fricción: ¿dónde y cuánto se caen los usuarios en el flujo?",html:`
    <div class="space-y-4">
      <p>
        La <strong>Tasa de abandono</strong> cuantifica el porcentaje de usuarios/empresas que inician un flujo
        (p. ej., transferencia, pagos masivos, registro) pero no lo completan. Es un indicador crítico
        de <em>fricción</em> y suele correlacionar con complejidad, tiempos altos o errores de validación/técnicos.
      </p>

      <div>
        <p class="font-semibold">Definición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Proporción de instancias iniciadas que no alcanzan el estado de confirmación/éxito.</li>
          <li>Puede medirse a nivel de flujo completo o por <em>paso del embudo</em> para localizar el punto exacto de caída.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Fórmula:</p>
        <ul class="list-disc list-inside pl-2">
          <li>
            <code>Tasa de abandono (%) = (Nº de operaciones iniciadas no completadas ÷ Nº total de operaciones iniciadas) × 100</code>
          </li>
          <li>
            <code>Abandono por paso (%) = (Nº que pasan por el paso i y no llegan al i+1 ÷ Nº que llegan al paso i) × 100</code>
          </li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">¿Qué mide?</p>
        <ul class="list-disc list-inside pl-2">
          <li>La fricción real en formularios, validaciones, autenticación (token/2FA) y tiempos de espera.</li>
          <li>La claridad del flujo (campos, instrucciones, estados de error).</li>
          <li>El impacto de incidentes técnicos (timeouts, caídas) en la continuidad del proceso.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Interpretación:</p>
        <ul class="list-disc list-inside pl-2">
          <li><strong>Abandono alto</strong> suele indicar excesivos pasos/campos, latencia elevada o mensajes de error poco accionables.</li>
          <li><strong>Disminuciones</strong> tras un rediseño son evidencia de mejora; contrástalo con <em>Tasa de éxito</em> y <em>Tiempo en tarea</em>.</li>
          <li>Analiza <em>por segmento</em> (rol, tamaño de empresa) para detectar fricciones específicas.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Buenas prácticas de medición:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Instrumentar el <strong>embudo paso a paso</strong> (inicio → datos → revisión → confirmación) para ubicar el escalón de fuga.</li>
          <li>Registrar <strong>causas de salida</strong> (cerró pestaña, error 4xx/5xx, validación fallida, timeout).</li>
          <li>Separar <strong>abandono voluntario</strong> (desistimiento) de <strong>forzado</strong> (error técnico/autenticación).</li>
          <li>Controlar <strong>estacionalidad</strong> (fin de mes, horarios críticos) al comparar periodos.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Ejemplo:</p>
        <ul class="list-disc list-inside pl-2">
          <li>Mes actual: 10.000 transferencias iniciadas; 1.300 no llegan a confirmación.</li>
          <li><code>Abandono total = (1.300 ÷ 10.000) × 100 = 13%</code>.</li>
          <li>Embudo muestra que el 60% de los abandonos sucede en el paso de <em>token</em> (2FA) → priorizar mejora de UX del token y latencia.</li>
        </ul>
      </div>

      <div>
        <p class="font-semibold">Alertas y anti-patrones:</p>
        <ul class="list-disc list-inside pl-2">
          <li>No mezclar <strong>abandono</strong> con <strong>rechazos posteriores</strong> (p. ej., control antifraude) si la UX ya confirmó al usuario.</li>
          <li>Evitar promediar todo el embudo: el valor por paso es el que habilita acciones concretas.</li>
          <li>Si el abandono sube, cruza con <em>Tiempo de respuesta</em>, <em>Errores 4xx/5xx</em> e <em>Interrupciones</em> para hallar causa raíz.</li>
        </ul>
      </div>
    </div>
  `},userError:{title:"Errores de usuario/flujo",subtitle:"Eficiencia & Fricción: validaciones y pasos que rompen la tarea para el cliente",html:`
  <div class="space-y-4">
    <p>
      <strong>Errores de usuario/flujo</strong> cuantifica los fallos que enfrentan los usuarios al completar
      una tarea por causas de <em>flujo/UX</em> (validaciones confusas, campos obligatorios poco claros, 
      formatos estrictos, pasos redundantes) más que por incidentes puramente técnicos (4xx/5xx).
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Errores originados por interacción o diseño: validaciones, formatos, permisos, límites y reglas de negocio.</li>
        <li>No incluye caídas del servidor ni timeouts (eso va a <em>Errores 4xx/5xx</em> o <em>Interrupciones</em>).</li>
        <li>Se mide por flujo (ej. transferencias, pagos masivos, altas) y por paso del embudo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplos comunes en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Validación de campos:</strong> formato de cuenta, RUC/NIT, email, monto con separadores.</li>
        <li><strong>Reglas de negocio:</strong> límites diarios superados, beneficiario no habilitado, rol sin permisos.</li>
        <li><strong>Autenticación de paso:</strong> token/2FA ingresado fuera de ventana de tiempo.</li>
        <li><strong>Archivos:</strong> planilla de nómina con columnas inválidas, extensiones no permitidas.</li>
        <li><strong>Flujo:</strong> usuarios que retroceden por no entender el orden aprobación–confirmación.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de errores de usuario (%) = (Nº de intentos con error de usuario ÷ Nº total de intentos) × 100</code></li>
        <li><code>Errores por 1.000 ops = (Nº de errores de usuario ÷ Nº de operaciones) × 1.000</code></li>
        <li><code>Top-errores = ranking por tipo de error (validación, permiso, límite, formato…)</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>Claridad de formularios, mensajes y reglas de negocio en el flujo.</li>
        <li>Descubribilidad de requisitos (ej. habilitar beneficiario antes de transferir).</li>
        <li>Madurez del diseño para prevenir errores (más que solo reportarlos).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta tasa de errores de usuario</strong> suele correlacionar con <em>abandono</em> y menor <em>tasa de éxito</em>.</li>
        <li>Si los errores caen y la <em>tasa de éxito</em> sube, el flujo ganó claridad y robustez.</li>
        <li>Analizar por <em>paso</em> del embudo y <em>rol</em> (pagador, aprobador, visor) para acciones precisas.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Instrumentación granular:</strong> evento por tipo de error y por campo (ej. <code>error: monto_formato</code>).</li>
        <li><strong>Mensajes accionables:</strong> indicar qué falló y cómo resolver (ej. formato requerido, enlace a habilitar beneficiario).</li>
        <li><strong>Prevención:</strong> máscaras de entrada, autocompletado, validación en tiempo real, defaults inteligentes.</li>
        <li><strong>Segmentación:</strong> por tamaño de empresa/rol y por dispositivo (web vs. móvil).</li>
        <li><strong>Loop con soporte:</strong> mapear los errores top con tickets/FAQs para cerrar brechas de contenido.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 20.000 intentos de transferencia; 1.200 con errores de usuario.</li>
        <li><code>Tasa de errores = (1.200 ÷ 20.000) × 100 = 6%</code>; los top-errores son <em>formato de cuenta</em> (35%) y <em>límite excedido</em> (28%).</li>
        <li>Tras mejorar validación en vivo y explicar límites disponibles, la tasa baja a 3,2% y la <em>tasa de éxito</em> sube 4 pp.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No mezclar con <strong>errores técnicos</strong>; separa ambos para intervenir correctamente.</li>
        <li>Evita mensajes genéricos (“Error desconocido”): impiden aprendizaje y acción.</li>
        <li>Si un mismo error concentra &gt;20% de los casos, priorízalo como épica de UX/negocio.</li>
      </ul>
    </div>
  </div>
  `},latency:{title:"Tiempo de respuesta",subtitle:"Eficiencia & Fricción: rapidez del sistema al ejecutar acciones clave",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Tiempo de respuesta</strong> mide cuánto tarda el sistema en mostrar la
      respuesta o confirmar una acción tras la interacción del usuario. En banca empresas,
      es crítico porque impacta directamente en la <em>percepción de eficiencia y confianza</em>
      en procesos como transferencias, pagos masivos o consultas de saldos.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo promedio en milisegundos o segundos que tarda en responder un servicio, endpoint o pantalla tras la acción del usuario.</li>
        <li>Se mide tanto en <em>frontend</em> (renderizado, carga de pantalla) como en <em>backend</em> (respuesta de APIs, servicios).</li>
        <li>Se recomienda separar <strong>tiempo de respuesta percibido</strong> (lo que ve el cliente) del <strong>tiempo técnico</strong> (logs del sistema).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tiempo promedio de respuesta = Σ tiempos de respuesta ÷ Nº de solicitudes</code></li>
        <li><code>Percentil P90 = tiempo por debajo del cual responden el 90% de las solicitudes</code></li>
        <li><code>Percentil P95 = tiempo por debajo del cual responden el 95% de las solicitudes</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La rapidez del sistema para ejecutar operaciones críticas.</li>
        <li>La estabilidad en picos de carga (ej. fin de mes, días de pago de nómina).</li>
        <li>El impacto de la latencia en el abandono de flujos.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt;1s:</strong> excelente, experiencia fluida.</li>
        <li><strong>1–3s:</strong> aceptable en banca, aunque puede sentirse lento en consultas simples.</li>
        <li><strong>&gt;3s:</strong> alto riesgo de frustración y abandono, sobre todo en acciones frecuentes como consultar saldos.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas de medición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir tanto promedio como percentiles (P90/P95) para detectar problemas en los peores escenarios.</li>
        <li>Incluir medición <strong>end-to-end</strong> (desde clic hasta render final), no solo tiempos de servidor.</li>
        <li>Segregar por tipo de flujo: consultas (rápidas), operaciones de carga (más complejas).</li>
        <li>Comparar <strong>latencia percibida</strong> con feedback de usuarios para validar la experiencia real.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Consulta de saldos: promedio 1.2s, P90 = 2.1s → aceptable.</li>
        <li>Transferencia internacional: promedio 4.5s, P95 = 7s → alto riesgo de frustración.</li>
        <li>Tras optimizar APIs, bajamos a 2.8s promedio y 4.5s P95 → mejora notable en la experiencia.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No reportar solo promedios: pueden ocultar casos críticos de lentitud.</li>
        <li>Evitar medir solo backend; el usuario percibe la suma de <em>todo el ciclo</em> (front + red + backend).</li>
        <li>No descuidar picos de carga: un servicio estable en horario normal puede colapsar en cierres de nómina.</li>
      </ul>
    </div>
  </div>
  `},interruption:{title:"Transacciones interrumpidas",subtitle:"Eficiencia & Fricción: operaciones que no concluyen por caídas o timeouts",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Transacciones interrumpidas</strong> mide el porcentaje de operaciones
      que fueron iniciadas pero no llegaron a completarse debido a problemas técnicos como 
      <em>timeouts</em>, caídas de red, errores de comunicación con sistemas externos o interrupciones 
      inesperadas en el flujo.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Operaciones abandonadas de forma no voluntaria por parte del usuario.</li>
        <li>Incluye fallos en APIs, desconexiones, expiraciones de sesión y errores de infraestructura.</li>
        <li>No deben confundirse con abandonos voluntarios (usuario cierra el flujo o decide no continuar).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de interrupciones (%) = (Nº de transacciones interrumpidas ÷ Nº total de transacciones iniciadas) × 100</code></li>
        <li><code>Interrupciones por 1.000 ops = (Nº de interrupciones ÷ Nº total de operaciones) × 1.000</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La estabilidad real de los flujos críticos de negocio.</li>
        <li>El impacto de fallos técnicos en la experiencia y la confianza del cliente.</li>
        <li>Riesgo de pérdida de operaciones valiosas (p. ej., transferencias de alto monto, pagos masivos).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Baja tasa (&lt;1%):</strong> esperada en sistemas bancarios estables.</li>
        <li><strong>Tasa media (1–3%):</strong> indica problemas localizados (ej. picos de carga, integración con un servicio externo).</li>
        <li><strong>Tasa alta (&gt;5%):</strong> alerta roja: genera pérdida de confianza y potencial reclamo/regulación.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas de medición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Registrar <strong>código de error</strong> y <strong>momento del flujo</strong> donde ocurrió la interrupción.</li>
        <li>Diferenciar interrupciones <em>recuperables</em> (ej. reintento automático exitoso) de las <em>críticas</em> (usuario perdió la operación).</li>
        <li>Medir <strong>por módulo</strong> (ej. nómina vs transferencias internacionales) para ubicar la causa raíz.</li>
        <li>Cruzar con <em>latencia</em> y <em>errores técnicos</em> para encontrar correlaciones.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 15.000 transferencias iniciadas.</li>
        <li>De ellas, 450 se interrumpieron por timeout o caída.</li>
        <li><code>Tasa de interrupciones = (450 ÷ 15.000) × 100 = 3%</code>.</li>
        <li>El 70% ocurrió en horario de cierre de nómina → indicador de necesidad de escalar infraestructura.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No mezclar con <strong>abandono</strong>: deben medirse por separado.</li>
        <li>Evitar ocultar interrupciones en promedios de éxito; deben tener su propio KPI.</li>
        <li>Si los reintentos automáticos superan el 10%, considerar rediseño o mejora en capacidad del sistema.</li>
      </ul>
    </div>
  </div>
  `},nps:{title:"NPS (Net Promoter Score)",subtitle:"Satisfacción & Experiencia: ¿nos recomendarían a un colega/empresa?",html:`
  <div class="space-y-4">
    <p>
      El <strong>NPS</strong> estima la lealtad e intención de recomendación del cliente. 
      En banca empresas se usa para entender, tras una interacción o en general, 
      si una compañía recomendaría el canal digital a otra empresa/colega.
    </p>

    <div>
      <p class="font-semibold">Pregunta estándar:</p>
      <ul class="list-disc list-inside pl-2">
        <li>“Del 0 al 10, ¿qué tan probable es que recomiendes nuestra banca empresas a un colega?”</li>
        <li>Se clasifica la respuesta en:
          <ul class="list-disc list-inside pl-6">
            <li><strong>Promotores:</strong> 9–10</li>
            <li><strong>Pasivos:</strong> 7–8</li>
            <li><strong>Detractores:</strong> 0–6</li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>NPS = (% Promotores) − (% Detractores)</code> → rango de −100 a +100</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Tipos de NPS:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Relacional:</strong> percepción general del canal (medición periódica: trimestral/mensual).</li>
        <li><strong>Transaccional:</strong> posterior a un flujo específico (ej. pagos masivos, transferencias al exterior) para detectar fricción puntual.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>Lealtad y probabilidad de recomendación (proxy de crecimiento orgánico).</li>
        <li>Impacto de mejoras o incidentes en la experiencia percibida.</li>
        <li>Brechas entre módulos (comparar NPS por funcionalidad/flujo).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (guía general):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt;= 50:</strong> excelente (experiencia muy sólida).</li>
        <li><strong>0 a 49:</strong> bueno/aceptable con oportunidades claras.</li>
        <li><strong>&lt; 0:</strong> alerta: predominan experiencias negativas.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Acompañar con pregunta abierta: “¿Cuál fue la principal razón de tu puntuación?” para accionar.</li>
        <li>Segmentar por <strong>rol</strong> (pagador, aprobador, visor) y <strong>tamaño de empresa</strong>.</li>
        <li>Detonar NPS transaccional solo tras <em>éxito o fallo</em> del flujo para entender diferencias.</li>
        <li>Vincular NPS con métricas operativas (latencia, errores, tasa de éxito) para causa raíz.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo de cálculo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Encuestas válidas: 400. Promotores: 200 (50%), Pasivos: 120 (30%), Detractores: 80 (20%).</li>
        <li><code>NPS = 50% − 20% = +30</code> (bueno, con margen de mejora).</li>
        <li>Tras optimizar token en pagos masivos, los detractores bajan a 10% → <code>NPS = 50% − 10% = +40</code>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No usar NPS aislado: complementarlo con <em>CSAT</em>, <em>CES</em> y métricas del flujo.</li>
        <li>Evitar muestras sesgadas (solo quienes completaron con éxito); incluir fallos/cancelaciones.</li>
        <li>Cuidar la frecuencia: demasiado NPS puede fatigar y bajar la tasa de respuesta.</li>
      </ul>
    </div>
  </div>
  `},csat:{title:"CSAT (Customer Satisfaction)",subtitle:"Satisfacción & Experiencia: satisfacción inmediata tras una interacción",html:`
  <div class="space-y-4">
    <p>
      <strong>CSAT</strong> mide la satisfacción percibida por el usuario justo después de una interacción
      o flujo específico (p. ej., consulta de saldos, transferencia, carga de nómina). Es un indicador
      táctico y de lectura rápida sobre cómo se sintió la experiencia <em>en ese momento</em>.
    </p>

    <div>
      <p class="font-semibold">Pregunta típica:</p>
      <ul class="list-disc list-inside pl-2">
        <li>“En una escala de 1 a 5, ¿qué tan satisfecho quedaste con [este proceso/flujo]?”</li>
        <li>Escala común: 1 = Muy insatisfecho … 5 = Muy satisfecho.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas más usadas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>CSAT promedio = (Σ puntuaciones) ÷ (# de respuestas)</code>  → en escala 1–5.</li>
        <li><code>CSAT Top-2 (%) = ((# de respuestas con 4 o 5) ÷ # total de respuestas) × 100</code></li>
        <li><code>Tasa de respuesta = (# de encuestas contestadas ÷ # de invitaciones) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La percepción inmediata de calidad y facilidad del flujo.</li>
        <li>El impacto de fricciones puntuales (latencia, validaciones, token) en la satisfacción.</li>
        <li>Diferencias entre módulos o segmentos (rol, tamaño de empresa).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (guía general):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>CSAT Top-2 ≥ 85%:</strong> experiencia muy satisfactoria.</li>
        <li><strong>70–84%:</strong> aceptable, con oportunidades de mejora.</li>
        <li><strong>&lt; 70%:</strong> alerta: revisar fricciones y causa raíz.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Disparar CSAT <em>transaccional</em> al final de flujos críticos (p. ej., transferencia confirmada).</li>
        <li>Incluir una <strong>pregunta abierta</strong> opcional (“¿Qué podemos mejorar?”) para accionar.</li>
        <li>Segmentar por <strong>rol</strong> (pagador, aprobador, visor) y por <strong>módulo</strong>.</li>
        <li>Controlar <strong>sesgo de éxito</strong>: también medir cuando el flujo falla o se aborta.</li>
        <li>Cruzar CSAT con <em>latencia</em>, <em>errores</em> y <em>tasa de éxito</em> para diagnóstico.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Respuestas: 600. Con “4 o 5”: 468 → <code>CSAT Top-2 = (468 ÷ 600) × 100 = 78%</code>.</li>
        <li>Tras optimizar validaciones en el formulario de transferencias, Top-2 sube a 86% y el tiempo en tarea baja 25%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No usar CSAT solo: complementa con <strong>NPS</strong> (lealtad) y <strong>CES</strong> (esfuerzo).</li>
        <li>Evitar encuestas excesivas que bajen la tasa de respuesta.</li>
        <li>No mezclar preguntas o escalas diferentes en el tiempo sin recalibrar históricos.</li>
      </ul>
    </div>
  </div>
  `},sus:{title:"SUS (System Usability Scale)",subtitle:"Satisfacción & Experiencia: escala estandarizada de usabilidad percibida",html:`
  <div class="space-y-4">
    <p>
      El <strong>SUS</strong> es una encuesta estandarizada de 10 ítems creada por John Brooke en 1986,
      ampliamente usada para medir la <em>usabilidad percibida</em> de un sistema digital.
      Proporciona un puntaje de 0 a 100 que resume la experiencia del usuario en términos de 
      facilidad de uso, consistencia y confianza.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Escala de 10 preguntas con respuestas tipo Likert (1 = totalmente en desacuerdo, 5 = totalmente de acuerdo).</li>
        <li>Las preguntas se alternan entre formulaciones positivas y negativas para evitar sesgo.</li>
        <li>El resultado es un puntaje único entre 0 y 100 (no es porcentaje).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplos de ítems:</p>
      <ul class="list-disc list-inside pl-2">
        <li>“Me gustaría usar este sistema con frecuencia.”</li>
        <li>“Encontré el sistema innecesariamente complejo.”</li>
        <li>“Pensé que el sistema era fácil de usar.”</li>
        <li>“Necesitaría apoyo técnico para poder usar este sistema.”</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula de cálculo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Cada respuesta se normaliza en una escala 0–4 según si la pregunta es positiva o negativa.</li>
        <li>Se suman los valores y se multiplican por 2.5 → <strong>puntaje final 0–100</strong>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt; 80:</strong> excelente, sistema altamente usable.</li>
        <li><strong>70–80:</strong> bueno, con mejoras posibles.</li>
        <li><strong>50–70:</strong> aceptable, experiencia con fricciones.</li>
        <li><strong>&lt; 50:</strong> usabilidad deficiente, requiere rediseño.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La percepción subjetiva de usabilidad (no mide satisfacción ni estética).</li>
        <li>La comparabilidad con benchmarks de la industria, al ser una escala estándar.</li>
        <li>La evolución tras cambios en el producto (antes vs después de un rediseño).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo en banca empresas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Un grupo de 20 usuarios evalúa la carga de nómina con el SUS.</li>
        <li>Puntaje promedio: 68 → aceptable pero con fricciones.</li>
        <li>Tras simplificar el flujo, el puntaje sube a 82 → evidencia de mejora en usabilidad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir SUS con satisfacción general (ese es CSAT o NPS).</li>
        <li>Evitar muestras muy pequeñas (&lt;10 usuarios) → resultados poco fiables.</li>
        <li>No usar SUS como único indicador; complementarlo con métricas de eficiencia (tiempo en tarea, tasa de éxito).</li>
      </ul>
    </div>
  </div>
  `},ces:{title:"CES (Customer Effort Score)",subtitle:"Satisfacción & Experiencia: mide el esfuerzo percibido para completar una tarea",html:`
  <div class="space-y-4">
    <p>
      El <strong>CES</strong> evalúa cuánto esfuerzo sintió un usuario al completar un flujo o tarea específica.
      En banca empresas es clave porque procesos como <em>pagos masivos</em>, <em>transferencias internacionales</em> 
      o <em>carga de nómina</em> pueden ser complejos, y este KPI permite medir qué tan costoso resulta para el cliente.
    </p>

    <div>
      <p class="font-semibold">Pregunta típica:</p>
      <ul class="list-disc list-inside pl-2">
        <li>“¿Qué tan fácil fue completar la tarea?”</li>
        <li>Escala de 1 a 5 (o 1 a 7), donde 1 = Muy fácil, 5/7 = Muy difícil.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula de cálculo:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>CES promedio = (Σ puntuaciones de esfuerzo ÷ Nº de respuestas)</code></li>
        <li>Opcional: reportar % de respuestas “Muy fácil” o “Fácil” como indicador de éxito.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>El nivel de fricción que percibe el usuario en el flujo.</li>
        <li>El impacto de la complejidad del diseño y requisitos del negocio en la experiencia.</li>
        <li>El costo cognitivo y operativo para completar tareas críticas.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>CES bajo (1–2):</strong> flujos fáciles de completar, experiencia óptima.</li>
        <li><strong>CES medio (3):</strong> esfuerzo aceptable pero con oportunidades de simplificación.</li>
        <li><strong>CES alto (4–5 o más):</strong> alto nivel de fricción; correlaciona con abandono y reclamos.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir CES <strong>por flujo crítico</strong> (p. ej., nómina vs. transferencias) para accionar mejoras específicas.</li>
        <li>Complementar con métricas objetivas (<em>tiempo en tarea</em>, <em>errores de usuario</em>) para validar.</li>
        <li>Recoger feedback cualitativo opcional (“¿Qué te resultó más difícil?”) para diagnosticar.</li>
        <li>Comparar CES antes/después de cambios para probar impacto de simplificaciones.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Encuestas: 300. Promedio CES = 2.1 (escala 1–5).</li>
        <li>Usuarios destacan que cargar archivos de nómina requiere mucho ajuste → “difícil”.</li>
        <li>Tras mejorar la validación en vivo de planillas, CES baja a 1.4 → menor esfuerzo percibido.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir “esfuerzo” con “satisfacción”: un flujo puede ser satisfactorio pero demandar esfuerzo.</li>
        <li>Evitar escalas diferentes en el tiempo (1–5 vs 1–7) sin recalibrar históricos.</li>
        <li>No usar CES en flujos demasiado triviales (p. ej., login), reservarlo para procesos con carga cognitiva real.</li>
      </ul>
    </div>
  </div>
  `},complaints:{title:"Reclamos / Incidencias",subtitle:"Satisfacción & Experiencia: volumen y resolución de problemas reportados por usuarios",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Reclamos / Incidencias</strong> mide la cantidad y proporción de casos reportados por los
      usuarios en relación con el uso del producto. Refleja directamente la <em>percepción de calidad y confianza</em>
      del canal, y permite identificar áreas de fricción que generan costos adicionales en soporte y afectan la
      satisfacción.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Casos generados por usuarios a través de canales de atención (call center, tickets, chat, sucursal).</li>
        <li>Incluye tanto reclamos formales como incidencias técnicas reportadas por usuarios.</li>
        <li>Se relaciona con volumen de operaciones para medir su frecuencia relativa.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de reclamos (%) = (Nº de reclamos/incidencias ÷ Nº total de operaciones) × 100</code></li>
        <li><code>Reclamos por 10.000 operaciones = (Nº de reclamos ÷ Nº de operaciones) × 10.000</code></li>
        <li><code>% resueltos en primer contacto = (Nº de reclamos resueltos al primer intento ÷ Nº total de reclamos) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La robustez y estabilidad de los flujos (menos errores → menos reclamos).</li>
        <li>El costo operativo derivado de incidencias (atención, soporte, reprocesos).</li>
        <li>La confianza del cliente: a menor tasa de reclamos, mayor percepción de fiabilidad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Tasa baja (&lt;0.5%):</strong> indica buena estabilidad y experiencia.</li>
        <li><strong>Tasa moderada (0.5–1.5%):</strong> aceptable, con puntos de fricción a monitorear.</li>
        <li><strong>Tasa alta (&gt;1.5%):</strong> señal de alerta: requiere análisis de causa raíz.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Clasificar reclamos por <strong>categoría</strong>: técnica, operativa, UX, fraude.</li>
        <li>Analizar correlación con otros KPI’s (abandono, errores de usuario, latencia).</li>
        <li>Medir tiempo medio de resolución (TMR) y % resueltos en primer contacto.</li>
        <li>Priorizar incidencias de alto impacto económico o reputacional.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 200.000 operaciones digitales; 1.200 reclamos/incidencias registrados.</li>
        <li><code>Tasa de reclamos = (1.200 ÷ 200.000) × 100 = 0.6%</code>.</li>
        <li>60% resueltos en primer contacto, tiempo medio de resolución = 36 horas.</li>
        <li>El 40% de los reclamos corresponden a fallos en carga de nómina → foco de mejora inmediato.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo volumen: la gravedad e impacto económico/reputacional son igual o más importantes.</li>
        <li>No centralizar todas las categorías en un solo bucket: segmentar para poder accionar.</li>
        <li>No dejar sin integrar con métricas de autoservicio: un reclamo evitado digitalmente es ahorro directo.</li>
      </ul>
    </div>
  </div>
  `},conversion:{title:"Tasa de conversión",subtitle:"Conversión & Negocio: mide cuántos completan la acción clave esperada",html:`
  <div class="space-y-4">
    <p>
      La <strong>Tasa de conversión</strong> refleja el porcentaje de usuarios/empresas que, tras iniciar
      un flujo, llegan a completar la acción clave que define el éxito de ese proceso.
      En banca empresas este KPI es esencial para evaluar la efectividad de flujos como
      <em>apertura de productos</em>, <em>pagos masivos</em>, <em>transferencias internacionales</em>
      o <em>registro de servicios</em>.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Proporción de usuarios que alcanzan el objetivo final frente al total que inició el flujo.</li>
        <li>Debe estar asociado a una <em>acción de valor</em> clara (ej. pago confirmado, servicio activado, inversión fondeada).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de conversión (%) = (Nº de usuarios/empresas que completaron la acción clave ÷ Nº total de usuarios/empresas que iniciaron el flujo) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad del diseño del flujo para guiar al usuario hasta el éxito.</li>
        <li>La claridad de la propuesta de valor y beneficios percibidos.</li>
        <li>La capacidad de convertir la intención en acción concluida.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta conversión (&gt;80%):</strong> el flujo es claro, confiable y atractivo.</li>
        <li><strong>Conversión media (50–79%):</strong> aceptable, pero con puntos de fricción a revisar.</li>
        <li><strong>Baja conversión (&lt;50%):</strong> alerta: los usuarios se pierden o desisten antes de terminar.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Definir con precisión cuál es el “evento de conversión” en cada flujo.</li>
        <li>Construir <strong>embudos de conversión</strong> para detectar en qué paso se caen los usuarios.</li>
        <li>Analizar por <strong>segmentos</strong>: tipo de empresa, rol de usuario, frecuencia de uso.</li>
        <li>Cruzar con métricas de <em>abandono</em> y <em>errores</em> para identificar fricciones.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 5.000 empresas inician flujo de registro de proveedores.</li>
        <li>3.700 completan y activan el servicio.</li>
        <li><code>Tasa de conversión = (3.700 ÷ 5.000) × 100 = 74%</code>.</li>
        <li>Tras simplificar validaciones, la tasa sube a 82% → clara mejora en efectividad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir “visitas” con “intenciones reales”: mide a quienes realmente inician el flujo.</li>
        <li>Evitar promediar conversiones de flujos muy diferentes (p. ej. pagos vs apertura de créditos).</li>
        <li>No ignorar la calidad: alta conversión con mucho fraude o errores no es éxito real.</li>
      </ul>
    </div>
  </div>
  `},value:{title:"Valor transaccionado",subtitle:"Conversión & Negocio: volumen monetario operado en el canal digital",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Valor transaccionado</strong> mide el monto total de dinero movido a través de la banca empresas
      en un periodo determinado. Refleja el grado de confianza y relevancia que las empresas depositan en el canal
      digital para gestionar operaciones financieras de alto impacto.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Monto total de todas las operaciones completadas en el canal (pagos, transferencias, inversiones, retiros, etc.).</li>
        <li>Puede desglosarse por tipo de producto (ej. pagos masivos, transferencias internacionales, ahorro/inversión).</li>
        <li>Debe considerarse tanto el volumen bruto como el número de operaciones para tener contexto.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Valor transaccionado = Σ (monto de cada operación completada en el periodo)</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La magnitud económica que fluye por el canal digital.</li>
        <li>El nivel de confianza de las empresas en usar el canal para montos significativos.</li>
        <li>La migración de operaciones desde sucursales físicas a digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Valor creciente:</strong> indica mayor adopción y confianza en el canal digital.</li>
        <li><strong>Valor estancado o decreciente:</strong> puede señalar que las empresas aún prefieren canales alternativos o que existe desconfianza para operaciones grandes.</li>
        <li>Debe analizarse junto a métricas de <em>número de operaciones</em> para distinguir entre más transacciones pequeñas o pocas transacciones grandes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Desglosar el valor por tipo de operación (p. ej. nómina, pagos a terceros, transferencias internacionales).</li>
        <li>Relacionar con KPIs de <em>autoservicio</em> para medir la migración desde sucursal.</li>
        <li>Monitorear top clientes y segmentos que generan la mayor parte del volumen.</li>
        <li>Combinar con <em>retención</em> para identificar sostenibilidad: empresas que mueven alto volumen tienden a permanecer.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes actual: 50.000 operaciones completadas.</li>
        <li>Monto total: USD 320 millones.</li>
        <li>De ellos, USD 200 millones corresponden a pagos masivos y USD 70 millones a transferencias internacionales.</li>
        <li>Comparado con el mes anterior (USD 280 millones), el valor creció un 14% → evidencia de mayor migración digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No interpretar valor alto como éxito absoluto: revisar también <em>costo operativo</em> y <em>tasa de éxito</em>.</li>
        <li>Evitar depender solo de grandes clientes: concentrar el valor en pocos actores aumenta riesgo.</li>
        <li>No confundir incremento de valor con incremento de usuarios; ambos deben medirse por separado.</li>
      </ul>
    </div>
  </div>
  `},cross:{title:"Cross-selling digital",subtitle:"Conversión & Negocio: ampliación de relación a través de productos adicionales",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Cross-selling digital</strong> mide el porcentaje de clientes que, partiendo de un flujo
      principal en la banca empresas, contratan o activan un producto/servicio adicional de manera digital.
      Refleja la capacidad del canal para <em>profundizar la relación</em> con los clientes y aumentar el
      valor de vida (LTV).
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Proporción de empresas que adquieren un producto adicional digitalmente tras usar o activar otro servicio.</li>
        <li>Ejemplos: al realizar pagos masivos, activar automáticamente un producto de inversión; 
        al consultar saldos, contratar línea de crédito.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Cross-selling digital (%) = (Nº de clientes que adquirieron un producto adicional ÷ Nº total de clientes expuestos a la oferta) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad de las estrategias digitales de ampliación de portafolio.</li>
        <li>La capacidad del canal para generar más valor por cliente (share of wallet).</li>
        <li>La confianza de los clientes para contratar productos complejos de forma digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta tasa:</strong> los clientes perciben valor y facilidad para ampliar su relación digitalmente.</li>
        <li><strong>Tasa baja:</strong> puede indicar baja relevancia de la oferta, falta de confianza o fricción en el flujo.</li>
        <li>Debe analizarse junto a <em>retención</em> y <em>valor transaccionado</em> para ver impacto en sostenibilidad.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Ofrecer productos complementarios en el momento correcto del flujo (ej. tras completar una transferencia, sugerir inversión de excedentes).</li>
        <li>Personalizar ofertas según perfil y comportamiento de la empresa.</li>
        <li>Medir tanto adopción inmediata como uso recurrente del producto adicional.</li>
        <li>Cuidar que el cross-selling no aumente la fricción del flujo original.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 2.000 empresas completaron pagos masivos.</li>
        <li>De ellas, 300 contrataron digitalmente un producto de inversión ofrecido en el flujo.</li>
        <li><code>Cross-selling digital = (300 ÷ 2.000) × 100 = 15%</code>.</li>
        <li>Tras mejorar la visibilidad de la oferta, la tasa sube a 22% en el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No saturar al usuario con múltiples ofertas irrelevantes: genera rechazo y abandono.</li>
        <li>Evitar medir cross-selling solo por clics en la oferta; el KPI debe reflejar contratación/uso real.</li>
        <li>No confundir con retención: son indicadores distintos aunque complementarios.</li>
      </ul>
    </div>
  </div>
  `},retention:{title:"Retención (churn inverso)",subtitle:"Conversión & Negocio: mide cuántos clientes permanecen activos en el tiempo",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Retención</strong>, también conocido como <em>churn inverso</em>, mide el porcentaje de
      clientes que siguen activos en la plataforma después de un periodo determinado. Es un indicador clave de
      la <em>sostenibilidad del negocio</em> y de la capacidad del canal digital para mantener relaciones a largo plazo.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Clientes considerados activos: aquellos que realizan al menos una acción relevante en un periodo definido (ej. transacción, aprobación, carga de nómina).</li>
        <li>Se mide típicamente en ventanas de 30, 60 o 90 días, y también a nivel trimestral o anual.</li>
        <li>Complemento natural del <em>churn</em>, que mide los que abandonan.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Retención (%) = (Nº de clientes activos al final del periodo ÷ Nº de clientes activos al inicio del periodo) × 100</code></li>
        <li><code>Churn (%) = 100 − Retención (%)</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La capacidad del canal digital para generar hábito y fidelidad.</li>
        <li>La salud de la relación con empresas: un cliente que se mantiene activo confía en el canal.</li>
        <li>El impacto de mejoras o problemas en la permanencia de clientes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Alta retención (&gt;85%):</strong> experiencia robusta y valor claro para los clientes.</li>
        <li><strong>Media (70–84%):</strong> aceptable, pero con señales de fuga en algunos segmentos.</li>
        <li><strong>Baja (&lt;70%):</strong> alerta: pérdida significativa de clientes → revisar fricciones o falta de valor.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Definir con claridad qué significa “activo” en el contexto de banca empresas (ej. haber realizado al menos una operación en 90 días).</li>
        <li>Medir retención por <strong>segmento</strong> (micro, pyme, corporativo) y por <strong>rol</strong> (pagador, aprobador).</li>
        <li>Combinar con métricas de <em>valor transaccionado</em> y <em>uso por funcionalidad</em> para entender profundidad.</li>
        <li>Analizar cohortes: clientes que iniciaron en el mismo mes/trimestre para ver cómo evolucionan en el tiempo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Al inicio de Q1: 5.000 empresas activas.</li>
        <li>Al final de Q1: 4.350 siguen activas.</li>
        <li><code>Retención = (4.350 ÷ 5.000) × 100 = 87%</code>.</li>
        <li>Churn = 13%. Tras mejorar onboarding de nómina, la retención sube a 90% en Q2.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo volumen: una empresa “activa” que mueve poco valor puede ser distinta a una de alto valor.</li>
        <li>No confundir retención con frecuencia: un cliente retenido puede entrar solo una vez en el trimestre.</li>
        <li>No dejar de lado cohortes: ver la evolución por antigüedad da información más accionable que un promedio global.</li>
      </ul>
    </div>
  </div>
  `},selfservice:{title:"% Autogestión exitosa",subtitle:"Autoservicio & Costos: casos resueltos sin intervención humana",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>% de autogestión exitosa</strong> mide la proporción de operaciones o solicitudes que los
      clientes logran resolver por sí mismos en los canales digitales, sin requerir ayuda de agentes humanos 
      (call center, sucursal, chat asistido). Refleja directamente la eficiencia del canal y su capacidad 
      para reducir costos operativos.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Operaciones completadas de principio a fin en digital sin asistencia manual.</li>
        <li>Incluye consultas, transacciones y gestiones administrativas (ej. cambio de contraseña, descarga de certificados).</li>
        <li>No se consideran autogestión exitosa los casos que terminan en un ticket o llamada.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Autogestión exitosa = (Nº de operaciones completadas sin ayuda ÷ Nº total de operaciones iniciadas) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La madurez del canal digital como primera opción de uso.</li>
        <li>La reducción de dependencias en soporte humano.</li>
        <li>La confianza de los clientes en que el canal digital es suficiente para resolver sus necesidades.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt;90%:</strong> excelente nivel de autoservicio, canal consolidado.</li>
        <li><strong>75–89%:</strong> aceptable, con oportunidades de mejora en ciertos flujos.</li>
        <li><strong>&lt;75%:</strong> alerta: demasiadas operaciones requieren intervención de soporte.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Identificar los flujos con más derivaciones a soporte y simplificarlos.</li>
        <li>Ofrecer mensajes de error claros y soluciones inmediatas dentro del mismo canal.</li>
        <li>Medir autogestión a nivel de <em>funcionalidad</em> (ej. transferencias, nómina, certificados) para priorizar mejoras.</li>
        <li>Cruzar con métricas de <em>reclamos/incidencias</em> y <em>tiempo en tarea</em>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 100.000 operaciones digitales.</li>
        <li>De ellas, 82.000 fueron completadas sin contacto con soporte.</li>
        <li><code>% Autogestión exitosa = (82.000 ÷ 100.000) × 100 = 82%</code>.</li>
        <li>Tras mejorar el flujo de recuperación de contraseña, el indicador sube a 89% en el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir autogestión con uso digital: si el cliente empieza en digital pero termina en call center, no cuenta como éxito.</li>
        <li>No ignorar la experiencia: autogestión “forzada” con alta fricción puede aumentar reclamos.</li>
        <li>No medir solo globalmente: un flujo puede tener 95% éxito y otro solo 50%, lo cual se oculta en el promedio.</li>
      </ul>
    </div>
  </div>
  `},digitalVsBranch:{title:"Digital vs. Sucursal",subtitle:"Autoservicio & Costos: proporción de operaciones digitales frente a presenciales",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Digital vs. Sucursal</strong> mide la proporción de operaciones realizadas en el canal 
      digital en comparación con las realizadas en sucursales físicas. Refleja el grado de migración hacia 
      autoservicio y la eficiencia lograda al reducir costos operativos de atención presencial.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Operaciones realizadas por los clientes en banca empresas web o móvil vs. operaciones equivalentes realizadas en oficinas físicas.</li>
        <li>Se puede calcular a nivel global o por tipo de producto (ej. transferencias, pagos, consultas de saldo).</li>
        <li>Complementa al KPI de <em>% autogestión exitosa</em>, mostrando la sustitución de canales presenciales.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Digital = (Operaciones digitales ÷ Operaciones totales) × 100</code></li>
        <li><code>% Sucursal = (Operaciones en sucursal ÷ Operaciones totales) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad de la estrategia de transformación digital.</li>
        <li>La preferencia real de los clientes por canales de autoservicio.</li>
        <li>El potencial de reducción de costos al disminuir la atención presencial.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt;80% digital:</strong> excelente nivel de adopción digital.</li>
        <li><strong>50–79% digital:</strong> transición en progreso, todavía con alto uso de sucursales.</li>
        <li><strong>&lt;50% digital:</strong> alerta: los clientes siguen prefiriendo el canal presencial.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir por tipo de transacción: algunos procesos pueden migrar más rápido que otros.</li>
        <li>Relacionar con costos operativos para cuantificar el ahorro de la migración digital.</li>
        <li>Complementar con encuestas cualitativas para entender barreras de adopción digital.</li>
        <li>Comparar contra benchmarks del sector bancario para evaluar madurez.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes actual: 500.000 operaciones totales.</li>
        <li>Digital: 420.000 (84%); Sucursal: 80.000 (16%).</li>
        <li><code>% Digital = (420.000 ÷ 500.000) × 100 = 84%</code>.</li>
        <li>En transferencias internacionales, el indicador es menor (65%), señal de oportunidad de migración.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo globalmente: los promedios pueden ocultar flujos con baja migración.</li>
        <li>No confundir “intención digital” (ej. iniciar en web) con operación completada digitalmente.</li>
        <li>No asumir que migrar a digital es siempre positivo: algunos segmentos valoran la atención presencial.</li>
      </ul>
    </div>
  </div>
  `},supportReduction:{title:"Reducción de llamadas a soporte",subtitle:"Autoservicio & Costos: impacto de mejoras digitales en la demanda de atención humana",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Reducción de llamadas a soporte</strong> mide cómo evoluciona el volumen de llamadas al call center
      o tickets de soporte relacionados con procesos que pueden resolverse digitalmente. Refleja el impacto directo
      de las mejoras de autogestión en la <em>eficiencia operativa</em> y en los costos del banco.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Comparación del volumen de llamadas o tickets recibidos en un periodo contra un baseline histórico.</li>
        <li>Se enfoca en llamadas vinculadas a procesos que ya tienen opción digital (ej. desbloqueo de usuario, descarga de certificados, transferencias).</li>
        <li>Puede medirse globalmente o por tipo de flujo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Reducción = ((Llamadas baseline − Llamadas actuales) ÷ Llamadas baseline) × 100</code></li>
        <li><code>Llamadas por 1.000 operaciones = (Nº de llamadas ÷ Nº de operaciones digitales) × 1.000</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>El impacto de las mejoras digitales en la resolución autónoma de los clientes.</li>
        <li>La reducción de costos operativos en atención telefónica y soporte humano.</li>
        <li>La efectividad de la comunicación y educación de usuarios para aprovechar el canal digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Reducción significativa (&gt;30%):</strong> éxito claro de la estrategia digital.</li>
        <li><strong>Reducción moderada (10–29%):</strong> muestra avance, pero aún con dependencias de soporte.</li>
        <li><strong>Sin reducción o incremento:</strong> alerta: puede haber problemas de usabilidad o fallas técnicas recurrentes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Medir por <strong>categoría de llamada</strong> (ej. token, transferencias, contraseñas) para enfocar mejoras.</li>
        <li>Relacionar con KPIs de <em>% autogestión exitosa</em> y <em>errores de usuario</em>.</li>
        <li>Monitorear <strong>tiempo medio de atención</strong>: menos llamadas debe reflejar también menor carga operativa.</li>
        <li>Incluir retroalimentación de soporte para identificar causas raíz.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Baseline Q1: 15.000 llamadas de soporte relacionadas con bloqueos de usuario.</li>
        <li>Q2 tras mejoras de autogestión: 9.000 llamadas.</li>
        <li><code>% Reducción = ((15.000 − 9.000) ÷ 15.000) × 100 = 40%</code>.</li>
        <li>Impacto: ahorro operativo estimado de USD 50.000 en un trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No considerar solo volumen: medir también el <strong>motivo</strong> de las llamadas para entender qué procesos requieren rediseño.</li>
        <li>No confundir reducción por estacionalidad (ej. menos actividad en feriados) con mejora real.</li>
        <li>No medir aislado: vincularlo con satisfacción (CSAT, CES) para validar que la reducción no se debe a frustración o deserción del canal.</li>
      </ul>
    </div>
  </div>
  `},helpUsage:{title:"Uso de ayuda digital",subtitle:"Autoservicio & Costos: efectividad de FAQs, chatbots y guías en línea",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Uso de ayuda digital</strong> mide cuántos clientes utilizan los recursos de soporte
      en línea (FAQs, chatbots, tutoriales, guías contextuales) y en qué medida resuelven sus dudas sin
      necesidad de contactar soporte humano. Refleja la <em>madurez del autoservicio</em> y el potencial
      de reducción de costos de atención.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Consultas atendidas en canales digitales de ayuda (FAQ, chatbot, asistentes contextuales).</li>
        <li>Éxito de esas consultas: porcentaje que resuelve sin escalar a soporte humano.</li>
        <li>Puede medirse a nivel global o por flujo (ej. transferencias, nómina, certificados).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% Uso de ayuda digital = (Consultas en canales digitales ÷ Total de consultas) × 100</code></li>
        <li><code>% Resolución digital = (Consultas resueltas sin escalar ÷ Consultas en ayuda digital) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>El grado en que los clientes adoptan recursos de autoservicio para resolver dudas.</li>
        <li>La efectividad de las herramientas digitales frente a la atención tradicional.</li>
        <li>El impacto de FAQs, tutoriales y chatbots en la reducción de carga de soporte.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Uso alto (&gt;60% de consultas en digital):</strong> buena adopción de ayuda online.</li>
        <li><strong>Resolución alta (&gt;80%):</strong> indica que las herramientas son efectivas.</li>
        <li><strong>Bajo uso:</strong> los clientes no encuentran la ayuda o no confían en ella.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Integrar ayuda contextual en el flujo (tooltips, guías paso a paso).</li>
        <li>Monitorear las preguntas más frecuentes en chat/FAQ y actualizar contenido.</li>
        <li>Medir tasa de escalamiento: qué % de consultas terminan en agente humano.</li>
        <li>Usar feedback (“¿Te fue útil esta respuesta?”) para mejorar continuamente.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 50.000 consultas totales.</li>
        <li>De ellas, 30.000 fueron atendidas por FAQ/chatbot.</li>
        <li><code>% Uso de ayuda digital = (30.000 ÷ 50.000) × 100 = 60%</code>.</li>
        <li>24.000 de esas consultas se resolvieron sin escalar → <code>% Resolución digital = (24.000 ÷ 30.000) × 100 = 80%</code>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo volumen: el éxito depende de la resolución efectiva.</li>
        <li>Evitar chatbots que devuelvan respuestas genéricas sin contexto; generan frustración.</li>
        <li>No dejar FAQs estáticas: la falta de actualización reduce confianza y uso.</li>
      </ul>
    </div>
  </div>
  `},failedLogin:{title:"Intentos de login fallidos",subtitle:"Seguridad & Cumplimiento: fricción y riesgo en el acceso",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Intentos de login fallidos</strong> mide la cantidad y proporción de accesos no exitosos
      (credenciales incorrectas, bloqueo por intentos, expiración de sesión/2FA). En banca empresas, un nivel alto
      puede indicar <em>fricción de UX</em> (reglas poco claras) o <em>riesgo</em> (ataques de fuerza bruta).
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Conteo de intentos de autenticación con error (usuario/clave, 2FA, dispositivo no reconocido).</li>
        <li>Puede incluir <em>bloqueos de cuenta</em> tras N intentos fallidos.</li>
        <li>Se recomienda medir por <strong>empresa</strong>, <strong>usuario</strong> y <strong>origen</strong> (IP/dispositivo).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Intentos fallidos por 1.000 sesiones = (Nº de intentos fallidos ÷ Nº de sesiones totales) × 1.000</code></li>
        <li><code>% sesiones con al menos 1 fallo = (Sesiones con ≥1 fallo ÷ Sesiones totales) × 100</code></li>
        <li><code>% cuentas bloqueadas = (Cuentas bloqueadas por intentos ÷ Cuentas activas) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La claridad y usabilidad del proceso de autenticación (UX del login/2FA).</li>
        <li>Eventos anómalos que pueden sugerir ataques o credenciales comprometidas.</li>
        <li>Impacto de políticas (complejidad de contraseñas, rotación, 2FA) en la fricción del acceso.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (guía):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt; 30/1.000 sesiones:</strong> fricción baja esperable en entornos 2FA.</li>
        <li><strong>30–80/1.000:</strong> revisar UX/mensajes, latencia del OTP y recordatorios de políticas.</li>
        <li><strong>&gt; 80/1.000 o picos súbitos:</strong> posible ataque o cambio de política mal comunicado.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar <strong>error de credenciales</strong>, <strong>error de 2FA</strong> y <strong>bloqueo</strong> como eventos distintos.</li>
        <li>Registrar <strong>latencia del OTP</strong> y ventana de validez para detectar caducidades.</li>
        <li>Mejorar mensajes accionables (formato de usuario, política de contraseña, reenvío de OTP).</li>
        <li>Aplicar <strong>rate limiting</strong>, CAPTCHA adaptativo y alertas ante picos por IP/rango.</li>
        <li>Segmentar por <strong>rol</strong> (pagador, aprobador) y por <strong>dispositivo</strong> (web/móvil).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 120.000 sesiones; 7.200 intentos fallidos.</li>
        <li><code>Intentos fallidos por 1.000 = (7.200 ÷ 120.000) × 1.000 = 60</code>.</li>
        <li>El 35% proviene de <em>2FA expirado</em> → se amplía ventana de OTP y se añade reenvío rápido; el indicador baja a 28/1.000.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No mezclar intentos fallidos con <strong>intentos maliciosos</strong> sin aplicar heurísticas (IP, patrón temporal).</li>
        <li>No usar solo totales: los <strong>picos horarios</strong> y por <strong>origen</strong> son clave para detección temprana.</li>
        <li>Evitar mensajes genéricos (“error de autenticación”): impiden que el usuario se recupere y elevan llamadas a soporte.</li>
      </ul>
    </div>
  </div>
  `},twoFa:{title:"2FA éxito",subtitle:"Seguridad & Cumplimiento: efectividad de la autenticación de dos factores",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>2FA éxito</strong> mide el porcentaje de intentos de autenticación con doble factor
      (contraseña + token/OTP, app de seguridad, biometría) que resultan exitosos. Refleja tanto la
      <em>robustez de la seguridad</em> como la <em>usabilidad del proceso</em>.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Intentos de autenticación que logran completarse correctamente usando el segundo factor requerido.</li>
        <li>Puede incluir OTP por SMS, token físico, app de autenticación o biometría.</li>
        <li>Debe diferenciarse entre <strong>fallas técnicas</strong> (OTP no entregado, latencia) y <strong>fallas de usuario</strong> (código expirado, digitación errónea).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>% 2FA éxito = (Nº de autenticaciones 2FA completadas ÷ Nº total de intentos 2FA) × 100</code></li>
        <li><code>% 2FA fallidas = 100 − % 2FA éxito</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La confiabilidad del sistema de autenticación multifactor.</li>
        <li>La claridad de la experiencia de usuario en procesos sensibles.</li>
        <li>El impacto de la fricción en la continuidad de operaciones críticas (pagos, transferencias).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (referencial):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&gt; 95%:</strong> óptimo, balance adecuado entre seguridad y usabilidad.</li>
        <li><strong>90–94%:</strong> aceptable, pero con señales de fricción o fallas técnicas.</li>
        <li><strong>&lt; 90%:</strong> alerta: exceso de fricción o problemas de infraestructura/entrega de OTP.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar métricas de <strong>fallos de entrega</strong> (ej. SMS no llega) vs <strong>fallos de uso</strong> (código digitado mal).</li>
        <li>Medir latencia promedio de entrega de OTP.</li>
        <li>Optimizar mensajes y UX para evitar expiraciones de códigos.</li>
        <li>Ofrecer opciones de segundo factor redundantes (app, token físico, SMS).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 80.000 intentos de autenticación 2FA.</li>
        <li>De ellos, 75.200 fueron exitosos.</li>
        <li><code>% 2FA éxito = (75.200 ÷ 80.000) × 100 = 94%</code>.</li>
        <li>Tras mejorar el tiempo de entrega de OTP, el KPI sube a 97% en el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir bajo % con falta de seguridad: a veces indica demasiada fricción.</li>
        <li>No mezclar intentos <strong>reales</strong> con intentos <strong>maliciosos</strong> (fuerza bruta, bots).</li>
        <li>Evitar medir solo globalmente: segmentar por canal (web, app) y tipo de token.</li>
      </ul>
    </div>
  </div>
  `},kyc:{title:"Tiempo KYC",subtitle:"Seguridad & Cumplimiento: rapidez para habilitar a una empresa a operar",html:`
  <div class="space-y-4">
    <p>
      <strong>Tiempo KYC</strong> (Know Your Customer) mide cuánto tarda el proceso de verificación y
      habilitación de una empresa (y sus usuarios/firmantes) desde el inicio del alta hasta quedar
      <em>apta para operar</em> en la banca empresas. Impacta directamente en la activación y en la
      percepción de agilidad/regulación.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo <em>end-to-end</em> desde la solicitud/registro hasta la aprobación final para operar.</li>
        <li>Incluye validación de empresa, UBO/beneficiarios finales, listas de sanciones, documentación y asignación de roles.</li>
        <li>Se recomienda medir por <strong>p50/p90</strong> y % dentro de SLA comprometido.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tiempo KYC promedio = Σ (tiempo de cada caso) ÷ Nº de casos</code></li>
        <li><code>P90 KYC = tiempo por debajo del cual finalizan el 90% de los casos</code></li>
        <li><code>% dentro de SLA = (Casos con KYC ≤ SLA ÷ Casos totales) × 100</code></li>
        <li><code>% STP (Straight-Through Processing) = (Casos aprobados sin intervención manual ÷ Casos totales) × 100</code></li>
        <li><code>% Re-trabajo = (Casos que requirieron reenvío de docs ÷ Casos totales) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La eficiencia del onboarding regulatorio y la calidad de la documentación solicitada.</li>
        <li>La fricción operativa (idas y vueltas por documentos, validaciones fallidas, observaciones).</li>
        <li>El balance entre cumplimiento normativo y agilidad para habilitar el canal.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (guía):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>P90 ≤ 3–5 días hábiles:</strong> onboarding ágil para pymes/renovaciones.</li>
        <li><strong>P90 6–10 días:</strong> razonable en corporativos con estructuras complejas.</li>
        <li><strong>P90 &gt; 10 días o % SLA &lt; 80%:</strong> alerta: exceso de fricción o cuello de botella operativo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Checklists dinámicos y <em>upload</em> guiado con validaciones en tiempo real (formato, vigencia, legibilidad).</li>
        <li>Integraciones para <strong>verificación automática</strong> (registros mercantiles, listas PEP/sanciones) y cálculo de riesgo.</li>
        <li>Separar tiempos por etapa: recepción de docs → verificación → observaciones → aprobación final.</li>
        <li>Medir y elevar <strong>% STP</strong>; reducir <strong>% re-trabajo</strong> con requisitos claros y ejemplos.</li>
        <li>Segmentar por tipo de empresa (micro/pyme/corporativa) y por <em>renovación</em> vs <em>alta</em>.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 1.000 casos KYC iniciados; SLA = 5 días hábiles.</li>
        <li>Promedio = 4.2 días; P90 = 7.1 días; <code>% dentro de SLA = 78%</code>.</li>
        <li>% STP = 46%; % Re-trabajo = 22% (principalmente por actas societarias desactualizadas).</li>
        <li>Tras guías de documentación y validación automática, P90 baja a 5.2 días y SLA sube a 88%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo promedio: los percentiles muestran la verdadera cola larga de casos lentos.</li>
        <li>Evitar requisitos redundantes o no normativos que alargan el ciclo sin mejorar el control.</li>
        <li>No mezclar renovaciones simplificadas con altas nuevas complejas al reportar.</li>
      </ul>
    </div>
  </div>
  `},fraud:{title:"Fraude detectado / prevenido",subtitle:"Seguridad & Cumplimiento: protección activa contra operaciones sospechosas",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Fraude detectado / prevenido</strong> mide la cantidad y el valor monetario de intentos de fraude
      que fueron identificados y bloqueados antes de concretarse. En banca empresas, es crítico porque garantiza la
      <em>confianza en el canal digital</em> y refleja la efectividad de los sistemas antifraude y de monitoreo.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Intentos de operaciones sospechosas que fueron detenidas, investigadas o rechazadas por reglas antifraude o monitoreo manual.</li>
        <li>Incluye fraude por phishing, credenciales robadas, malware, suplantación o desvío de fondos.</li>
        <li>Se mide tanto en <strong>número de casos</strong> como en <strong>monto económico</strong> bloqueado.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Nº de fraudes detectados = total de operaciones sospechosas bloqueadas</code></li>
        <li><code>Monto prevenido = Σ montos de operaciones bloqueadas por sospecha de fraude</code></li>
        <li><code>% de fraude prevenido = (Monto bloqueado ÷ Monto total intentado en fraudes) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La capacidad de las defensas digitales (reglas, IA, monitoreo) para proteger el dinero del cliente y del banco.</li>
        <li>La evolución de intentos de fraude a lo largo del tiempo (tendencias y patrones).</li>
        <li>El nivel de resiliencia del canal frente a amenazas emergentes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Más fraudes detectados</strong> puede ser positivo (sistema alerta funcionando) o negativo (incremento de ataques); debe leerse junto al % prevenido.</li>
        <li><strong>% prevenido alto (&gt;95%)</strong> indica un sistema robusto.</li>
        <li><strong>% prevenido bajo (&lt;90%)</strong> alerta de vulnerabilidades o controles insuficientes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar métricas de <strong>fraude detectado</strong> (bloqueado) vs <strong>fraude consumado</strong> (logró concretarse).</li>
        <li>Analizar por canal (web, móvil) y tipo de fraude (phishing, malware, ingeniería social).</li>
        <li>Correlacionar con <em>intentos de login fallidos</em> y <em>2FA éxito</em> para anticipar vulnerabilidades.</li>
        <li>Medir tiempos de reacción desde la alerta hasta la resolución.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 250 intentos de fraude detectados.</li>
        <li>Monto intentado: USD 3.2 millones.</li>
        <li>Monto bloqueado: USD 3.05 millones.</li>
        <li><code>% prevenido = (3.05M ÷ 3.2M) × 100 = 95.3%</code>.</li>
        <li>El 60% correspondió a intentos con credenciales robadas; tras reforzar 2FA, el índice de éxito de ataques bajó significativamente.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No confundir volumen de intentos con vulnerabilidad: un alza puede deberse a campañas externas.</li>
        <li>No reportar solo número de casos: el monto económico es igual de relevante.</li>
        <li>No mezclar fraude detectado con reclamos de usuarios; deben integrarse pero medirse distinto.</li>
      </ul>
    </div>
  </div>
  `},onboarding:{title:"Tiempo de activación de empresa/usuario",subtitle:"Seguridad & Cumplimiento: rapidez para habilitar a un cliente a operar en digital",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Tiempo de activación de empresa/usuario</strong> mide cuánto tarda una empresa o un usuario 
      en quedar habilitado para operar en la banca empresas digital después de haberse registrado o haber sido creado 
      en el sistema. Refleja la <em>eficiencia del onboarding</em> y el impacto del proceso inicial en la experiencia del cliente.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo desde el registro o alta de un cliente/usuario hasta su primera operación exitosa en el canal digital.</li>
        <li>Incluye pasos como validación de identidad, configuración de perfiles, activación de token o credenciales y asignación de permisos.</li>
        <li>Se recomienda medir en días u horas hábiles, y distinguir entre <em>empresas nuevas</em> y <em>usuarios adicionales</em> dentro de una empresa existente.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tiempo promedio de activación = Σ (tiempo de activación por cliente/usuario) ÷ Nº de clientes/usuarios activados</code></li>
        <li><code>% activados dentro de SLA = (Clientes/usuarios activados dentro del tiempo objetivo ÷ Total activados) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La agilidad del banco en habilitar a sus clientes para operar digitalmente.</li>
        <li>La claridad del proceso de onboarding y la facilidad de configuración inicial.</li>
        <li>El impacto de fricciones como demoras en la entrega de tokens, validaciones manuales o aprobación de roles.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>≤ 24–48h:</strong> experiencia ágil, genera confianza y rápida adopción.</li>
        <li><strong>3–5 días:</strong> aceptable, pero puede generar frustración en clientes que esperan inmediatez.</li>
        <li><strong>&gt; 5 días:</strong> alerta: riesgo de abandono o migración a canales presenciales.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Automatizar validaciones y asignación de permisos para reducir tiempos.</li>
        <li>Medir activación por rol (ej. pagador, aprobador, visor) para identificar cuellos de botella específicos.</li>
        <li>Ofrecer guías claras y soporte contextual para reducir la necesidad de llamadas o tickets.</li>
        <li>Comparar tiempos de activación de empresas nuevas vs usuarios adicionales dentro de clientes existentes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 1.200 usuarios/empresas registrados.</li>
        <li>Promedio de activación: 2.8 días.</li>
        <li><code>% dentro de SLA (≤ 3 días) = (950 ÷ 1.200) × 100 = 79%</code>.</li>
        <li>Tras automatizar entrega de tokens, el promedio bajó a 1.5 días y SLA subió a 92%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo promedio: usar percentiles (P90, P95) para capturar casos lentos que generan frustración.</li>
        <li>No confundir activación con adopción: que un usuario esté habilitado no garantiza que lo use (ese es KPI de activación funcional).</li>
        <li>No excluir usuarios adicionales: su experiencia también impacta la satisfacción global de la empresa.</li>
      </ul>
    </div>
  </div>
  `},uptime:{title:"Disponibilidad (uptime)",subtitle:"Salud técnica: estabilidad y continuidad del servicio digital",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Disponibilidad (uptime)</strong> mide el porcentaje de tiempo en que la banca empresas
      está operativa y accesible para los clientes. Es un indicador crítico de la <em>confiabilidad técnica</em>
      y está directamente vinculado a la percepción de seguridad y confianza en el canal digital.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo total en que el servicio estuvo disponible ÷ tiempo total del periodo medido.</li>
        <li>Se mide típicamente a nivel mensual o trimestral.</li>
        <li>Incluye tanto caídas totales como parciales (ej. un módulo clave fuera de servicio).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Uptime (%) = ((Tiempo total del periodo − Tiempo de caída) ÷ Tiempo total del periodo) × 100</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La confiabilidad de la infraestructura técnica de la banca empresas.</li>
        <li>El impacto de caídas programadas (mantenimientos) y no programadas en la experiencia del cliente.</li>
        <li>La solidez de los mecanismos de redundancia y monitoreo.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (estándares):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>99.9% o más:</strong> nivel óptimo (“tres nueves” = ~43 min de caída/mes).</li>
        <li><strong>99.5–99.8%:</strong> aceptable, pero con espacio para mejora (~3.5h de caída/mes).</li>
        <li><strong>&lt;99.5%:</strong> crítico: genera desconfianza y puede incumplir SLAs regulatorios.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Diferenciar caídas planificadas vs incidentes críticos.</li>
        <li>Medir disponibilidad por módulo crítico (pagos, transferencias, consultas).</li>
        <li>Complementar con <em>MTTR</em> (Mean Time to Recovery) para ver velocidad de recuperación.</li>
        <li>Implementar monitoreo continuo y alertas proactivas para minimizar impacto en clientes.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Periodo: 30 días = 43.200 minutos.</li>
        <li>Caídas no planificadas: 85 minutos.</li>
        <li><code>Uptime = ((43.200 − 85) ÷ 43.200) × 100 = 99.80%</code>.</li>
        <li>Interpretación: dentro de lo aceptable, aunque por debajo de un SLA de 99.9%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No reportar solo uptime global: las caídas parciales de módulos clave afectan más al cliente que una caída breve total.</li>
        <li>Evitar ocultar mantenimientos bajo “disponibilidad plena”: deben comunicarse claramente.</li>
        <li>No medir solo al final de mes: el impacto real está en las horas pico de operación (ej. nómina, fin de mes).</li>
      </ul>
    </div>
  </div>
  `},errors5xx:{title:"Errores 4xx / 5xx",subtitle:"Salud técnica: estabilidad y confiabilidad de los servicios",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>Errores 4xx / 5xx</strong> mide la frecuencia de respuestas fallidas devueltas por
      los servicios del canal digital. Es un indicador directo de la <em>calidad técnica</em> y refleja
      tanto problemas de <em>validación / cliente</em> (4xx) como de <em>infraestructura / servidor</em> (5xx).
    </p>

    <div>
      <p class="font-semibold">Definiciones:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>Errores 4xx:</strong> solicitudes inválidas por parte del cliente (campos mal formados, permisos insuficientes, recursos inexistentes).</li>
        <li><strong>Errores 5xx:</strong> fallas del servidor (timeouts, caídas de servicios, excepciones internas).</li>
        <li>Ambos afectan la experiencia del usuario y deben monitorearse de forma diferenciada.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmulas:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>Tasa de errores 4xx/5xx = (Nº de respuestas 4xx/5xx ÷ Nº total de requests) × 100</code></li>
        <li><code>Errores por 10.000 requests = (Nº de errores ÷ Nº total de requests) × 10.000</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La estabilidad técnica del backend y la calidad de las integraciones.</li>
        <li>La claridad y robustez de las validaciones de entrada.</li>
        <li>La experiencia real de los clientes al intentar operar en el canal digital.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación:</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt; 0.5% de errores:</strong> nivel óptimo de estabilidad.</li>
        <li><strong>0.5% – 1.5%:</strong> aceptable, con oportunidades de optimización.</li>
        <li><strong>&gt; 1.5%:</strong> alerta de inestabilidad que afecta directamente a la satisfacción y confianza.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Separar métricas de 4xx vs 5xx para diferenciar <em>errores de usuario</em> vs <em>fallos técnicos</em>.</li>
        <li>Monitorear percentiles y picos horarios para detectar saturaciones.</li>
        <li>Cruzar con KPIs de <em>tasa de éxito</em> y <em>abandono</em> para entender impacto en negocio.</li>
        <li>Implementar alertas automáticas cuando supere umbrales definidos (ej. SLA interno).</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 12 millones de requests.</li>
        <li>Errores 4xx: 48.000 (0.4%); Errores 5xx: 36.000 (0.3%).</li>
        <li><code>Tasa total de errores = (84.000 ÷ 12.000.000) × 100 = 0.7%</code>.</li>
        <li>Tras reforzar validaciones en API de transferencias, los 4xx bajan a 0.2% y la tasa global a 0.5%.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No agrupar 4xx y 5xx como un único indicador sin desglose: tienen causas y acciones distintas.</li>
        <li>No medir solo promedios: los picos en horarios críticos pueden ser más dañinos que el global mensual.</li>
        <li>Evitar depender de reportes manuales; instrumentar monitoreo continuo y alertas proactivas.</li>
      </ul>
    </div>
  </div>
  `},mttr:{title:"MTTR (Mean Time To Recovery)",subtitle:"Salud técnica: rapidez de recuperación tras incidentes",html:`
  <div class="space-y-4">
    <p>
      El KPI <strong>MTTR (Mean Time To Recovery)</strong> mide el tiempo promedio que tarda el equipo en 
      restaurar el servicio tras un incidente que afecta la disponibilidad o el desempeño de la banca empresas. 
      Es clave para evaluar la <em>resiliencia operativa</em> y la capacidad de respuesta ante fallos.
    </p>

    <div>
      <p class="font-semibold">Definición:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Tiempo desde la detección del incidente hasta la recuperación total del servicio afectado.</li>
        <li>Incluye incidentes críticos (caídas de módulos de pagos, transferencias, login) y menores (degradaciones).</li>
        <li>Debe medirse por severidad e incluir tanto interrupciones totales como parciales.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Fórmula:</p>
      <ul class="list-disc list-inside pl-2">
        <li><code>MTTR = Σ (Tiempo de recuperación de cada incidente) ÷ Nº de incidentes</code></li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">¿Qué mide?</p>
      <ul class="list-disc list-inside pl-2">
        <li>La efectividad de los equipos técnicos en resolver problemas.</li>
        <li>El impacto de los incidentes en la continuidad de negocio.</li>
        <li>La madurez de los procesos de monitoreo, diagnóstico y respuesta.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Interpretación (referencial):</p>
      <ul class="list-disc list-inside pl-2">
        <li><strong>&lt; 1 hora:</strong> excelente, alta resiliencia.</li>
        <li><strong>1–4 horas:</strong> aceptable, con oportunidad de mejora.</li>
        <li><strong>&gt; 4 horas:</strong> crítico: riesgo alto de impacto en clientes y reputación.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Buenas prácticas:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Clasificar incidentes por severidad (crítico, mayor, menor) y calcular MTTR por nivel.</li>
        <li>Automatizar monitoreo y alertas para reducir el <em>tiempo de detección</em> (MTTD).</li>
        <li>Establecer <strong>runbooks</strong> y protocolos claros para acelerar la recuperación.</li>
        <li>Realizar post-mortems y aplicar aprendizajes para evitar reincidencias.</li>
        <li>Complementar con <em>uptime</em> y <em>errores 4xx/5xx</em> para una visión integral.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Ejemplo:</p>
      <ul class="list-disc list-inside pl-2">
        <li>Mes: 8 incidentes registrados.</li>
        <li>Tiempos de recuperación: 30m, 50m, 1h20m, 2h10m, 40m, 3h, 1h, 45m.</li>
        <li>Promedio = 1h30m → <code>MTTR = 90 minutos</code>.</li>
        <li>Tras implementar monitoreo proactivo, el promedio baja a 55 minutos el siguiente trimestre.</li>
      </ul>
    </div>

    <div>
      <p class="font-semibold">Alertas y anti-patrones:</p>
      <ul class="list-disc list-inside pl-2">
        <li>No medir solo el promedio: analizar también la variabilidad (P90) para casos extremos.</li>
        <li>No incluir en MTTR tareas post-incidente como análisis forense; debe centrarse en <em>restauración de servicio</em>.</li>
        <li>No confundir con <em>MTTF</em> (Mean Time To Failure) o <em>MTBF</em> (Mean Time Between Failures).</li>
      </ul>
    </div>
  </div>
  `}},wg="kpi_runs_index",qc="kpi_run:";function Tg(e){try{return localStorage.getItem(e)}catch{return null}}function Kc(e,t){try{return localStorage.setItem(e,t),!0}catch{return!1}}function Eg(){const e=Tg(wg);if(!e)return[];try{return JSON.parse(e)||[]}catch{return[]}}function Pg(e){return Kc(wg,JSON.stringify(e||[]))}function Pp(e={}){const t=(Date.now().toString(36)+Math.random().toString(36).slice(2,8)).toLowerCase(),n=new Date().toISOString(),i=Eg();i.unshift({id:t,title:e.title||"(sin nombre)",status:"draft",updatedAt:n}),Pg(i);const s={id:t,step:0,service:"",bizGoal:"",userGoal:"",notes:"",tasks:["",""],selected:{},status:"draft",updatedAt:n};return Kc(qc+t,JSON.stringify(s)),t}function ta(e,t,n={}){if(!e)return{ok:!1,error:"missing id"};const i=new Date().toISOString(),s={...t,id:e,updatedAt:i};if(!Kc(qc+e,JSON.stringify(s)))return{ok:!1,error:"localStorage write failed"};const o=Eg(),a=o.findIndex(c=>c.id===e),l={id:e,title:n.title||(t==null?void 0:t.service)||"(sin nombre)",status:(t==null?void 0:t.status)||"draft",updatedAt:i};return a>=0?o.splice(a,1,l):o.unshift(l),Pg(o),{ok:!0}}function $2(e){if(!e)return null;const t=Tg(qc+e);if(!t)return null;try{return JSON.parse(t)}catch{return null}}const na={},q2=(e=new Date)=>`Q${Math.floor(e.getMonth()/3)+1}`,K2=(e,t,n)=>{const i=(n||"").toLowerCase();return e.filter(s=>t.includes(s.cat)&&(s.title.toLowerCase().includes(i)||s.desc.toLowerCase().includes(i)||s.how.toLowerCase().includes(i)))},W2=(e,t,n,i,s,r)=>{const o=Object.keys(e).map(a=>({id:a,...t.find(l=>l.id===a),...e[a]}));return{servicio:n,objetivo_negocio:i,objetivo_usuario:s,tareas_clave:(r||[]).filter(Boolean),kpis:o}},H2=[{id:"adoption",cat:"Uso & Adopción",title:"Tasa de adopción",how:"% de empresas que usan una funcionalidad en X días desde lanzamiento.",desc:"¿Se empieza a usar lo nuevo?"},{id:"active",cat:"Uso & Adopción",title:"Usuarios activos (DAU/MAU)",how:"Usuarios únicos diarios/mensuales que iniciaron sesión o realizaron acciones.",desc:"¿Hay hábito?"},{id:"activation",cat:"Uso & Adopción",title:"Tasa de activación",how:"% que completan la primera operación clave tras registrarse.",desc:"¿Llegan al momento 'aha'?"},{id:"featureUsage",cat:"Uso & Adopción",title:"Uso por funcionalidad",how:"% de sesiones con uso de la función (ej. pagos masivos).",desc:"¿Qué tanto se usa cada módulo?"},{id:"timeOnTask",cat:"Eficiencia & Fricción",title:"Tiempo en tarea",how:"Promedio (p50/p90) desde inicio a confirmación.",desc:"¿Qué tan rápido ocurre?"},{id:"success",cat:"Eficiencia & Fricción",title:"Tasa de éxito",how:"% de operaciones completadas sin error (sin necesidad de reintentos).",desc:"¿Se logra sin trabas?"},{id:"steps",cat:"Eficiencia & Fricción",title:"Pasos por tarea",how:"Promedio de pantallas/clics para completar.",desc:"¿Es compacto?"},{id:"abandon",cat:"Eficiencia & Fricción",title:"Tasa de abandono",how:"% que inician y no finalizan el flujo.",desc:"¿Dónde se caen?"},{id:"userError",cat:"Eficiencia & Fricción",title:"Errores de usuario/flujo",how:"Errores percibidos (ej. validación fallida) por cada 1.000 operaciones.",desc:"¿Qué rompe la tarea para el cliente?"},{id:"latency",cat:"Eficiencia & Fricción",title:"Tiempo de respuesta",how:"ms de latencia en endpoints/pantallas clave.",desc:"¿Carga rápido?"},{id:"interruption",cat:"Eficiencia & Fricción",title:"Transacciones interrumpidas",how:"% de operaciones que no concluyen por timeout o caída técnica.",desc:"¿Qué tan confiable es?"},{id:"nps",cat:"Satisfacción & Experiencia",title:"NPS",how:"% promotores − % detractores tras usar el módulo.",desc:"¿Nos recomendarían?"},{id:"csat",cat:"Satisfacción & Experiencia",title:"CSAT",how:"Promedio de satisfacción 1–5 al finalizar tarea.",desc:"¿Quedaron conformes?"},{id:"sus",cat:"Satisfacción & Experiencia",title:"SUS",how:"Escala SUS 0–100 post-uso.",desc:"¿Qué tan usable es?"},{id:"conversion",cat:"Conversión & Negocio",title:"Tasa de conversión",how:"% de usuarios que completan una acción objetivo.",desc:"¿Cuántos completan?"},{id:"value",cat:"Conversión & Negocio",title:"Valor por usuario",how:"ARPU u otra medida de valor.",desc:"¿Cuánto valor produce?"},{id:"cross",cat:"Conversión & Negocio",title:"Cross/Up-sell",how:"% de clientes que adoptan módulos adicionales.",desc:"¿Se expande el uso?"},{id:"retention",cat:"Conversión & Negocio",title:"Retención",how:"% de clientes que siguen activos.",desc:"¿Se quedan?"},{id:"selfservice",cat:"Autoservicio & Costos",title:"Autoservicio",how:"% de tareas resueltas sin soporte humano.",desc:"¿Cuánto se auto-resuelve?"},{id:"digitalVsBranch",cat:"Autoservicio & Costos",title:"Digital vs Sucursal",how:"% de operaciones digitales vs presenciales.",desc:"¿Cuánto migra a digital?"},{id:"supportReduction",cat:"Autoservicio & Costos",title:"Reducción de soporte",how:"Variación de tickets por 1.000 usuarios.",desc:"¿Baja el soporte?"},{id:"helpUsage",cat:"Seguridad & Cumplimiento",title:"Uso de ayuda",how:"% de sesiones con vistas a ayuda.",desc:"¿Necesitan ayuda?"},{id:"failedLogin",cat:"Seguridad & Cumplimiento",title:"Login fallido",how:"Intentos fallidos por usuario.",desc:"¿Problemas de acceso?"},{id:"twoFa",cat:"Seguridad & Cumplimiento",title:"2FA",how:"% de sesiones con 2FA.",desc:"¿Aumenta la seguridad?"},{id:"kyc",cat:"Seguridad & Cumplimiento",title:"KYC",how:"% de KYC completado.",desc:"¿Cumplimiento?"},{id:"fraud",cat:"Seguridad & Cumplimiento",title:"Fraude",how:"Intentos/bloqueos por fraude.",desc:"¿Riesgo controlado?"},{id:"onboarding",cat:"Salud técnica",title:"Onboarding técnico",how:"Tiempo/esfuerzo de alta técnica.",desc:"¿Cuán complejo es?"},{id:"uptime",cat:"Salud técnica",title:"Uptime",how:"% de disponibilidad.",desc:"¿Disponibilidad estable?"},{id:"errors5xx",cat:"Salud técnica",title:"Errores 5xx",how:"Errores 5xx por 10k req.",desc:"¿Errores del servidor?"},{id:"mttr",cat:"Salud técnica",title:"MTTR",how:"Tiempo medio de recuperación.",desc:"¿Qué tan rápido reponemos?"}],Q2={adoption:"/kpi/adoption",active:"/kpi/active",activation:"/kpi/activation",featureUsage:"/kpi/featureUsage",timeOnTask:"/kpi/timeOnTask",success:"/kpi/success",steps:"/kpi/steps",abandon:"/kpi/abandon",userError:"/kpi/userError",latency:"/kpi/latency",interruption:"/kpi/interruption",nps:"/kpi/nps",csat:"/kpi/csat",sus:"/kpi/sus",ces:"/kpi/ces",complaints:"/kpi/complaints",conversion:"/kpi/conversion",value:"/kpi/value",cross:"/kpi/cross",retention:"/kpi/retention",selfservice:"/kpi/selfservice",digitalVsBranch:"/kpi/digitalVsBranch",supportReduction:"/kpi/supportReduction",helpUsage:"/kpi/helpUsage",failedLogin:"/kpi/failedLogin",twoFa:"/kpi/twoFa",kyc:"/kpi/kyc",fraud:"/kpi/fraud",onboarding:"/kpi/onboarding",uptime:"/kpi/uptime",errors5xx:"/kpi/errors5xx",mttr:"/kpi/mttr"},Ei=H2.map(e=>({...e,url:Q2[e.id]||""})),ia=["Uso & Adopción","Eficiencia & Fricción","Satisfacción & Experiencia","Conversión & Negocio","Autoservicio & Costos","Seguridad & Cumplimiento","Salud técnica"];async function G2(e){try{const t=new TextEncoder,n=await crypto.subtle.digest("SHA-256",t.encode(e)),i=new Uint8Array(n);let s="";for(let r=0;r<i.byteLength;r++)s+=String.fromCharCode(i[r]);return btoa(s)}catch{return""}}function X2(){const[e,t]=q.useState(0),[n,i]=q.useState(null),[s,r]=q.useState(""),[o,a]=q.useState(""),[l,c]=q.useState(""),[u,d]=q.useState(""),[p,g]=q.useState(["",""]),[y,x]=q.useState(""),[T,m]=q.useState(ia),[f,h]=q.useState({}),[S,w]=q.useState(null),[E,j]=q.useState({open:!1,url:"",title:"",id:""}),P=(e+1)/5*100,I=K2(Ei,T,y),M=(na==null?void 0:na.VITE_KPI_BASE_URL)||"",Z=N=>N?/^https?:\/\//i.test(N)?N:`${M}${N}`:"",Te=q.useMemo(()=>Ei.find(N=>N.id===E.id),[E.id]),de=q.useMemo(()=>{if(!Te)return null;const N=B2[E.id];return N?{title:N.title||Te.title,subtitle:N.subtitle||Te.cat,html:N.html||`<p>${Te.desc}</p><p style="color:#6b7280;font-size:12px;">Cómo se mide: ${Te.how}</p>`}:null},[E.id,Te]),en=N=>{m(O=>O.includes(N)?O.filter(V=>V!==N):[...O,N])},Cs=N=>{h(O=>{const V={...O};return V[N]?delete V[N]:V[N]={baseline:"",target:"",timeframe:q2()},V})},Pn=(N,O,V)=>{h(ie=>({...ie,[N]:{...ie[N],[O]:V}}))},te=()=>g(N=>[...N,""]),b=N=>g(O=>O.filter((V,ie)=>ie!==N)),L=(N,O)=>g(V=>V.map((ie,js)=>js===N?O:ie)),D=()=>{t(0),r(""),a(""),c(""),d(""),g(["",""]),x(""),m(ia),h({})},U=()=>{if(typeof window>"u"){D();return}const O=Pp({title:s||"(sin nombre)"});i(O);const V=new URL(window.location.href);V.searchParams.set("run",O),window.history.replaceState({},"",V.toString()),D()},ne=()=>W2(f,Ei,s,o,l,p),Cn=async()=>{const N=ne(),O=[`# KPI Sheet – ${N.servicio||"(servicio)"}`,`
**Objetivo de negocio:** ${N.objetivo_negocio||"-"}`,`
**Objetivo de usuario:** ${N.objetivo_usuario||"-"}`,`
**Tareas clave:**`,...N.tareas_clave.map(V=>`- ${V}`),`
## KPIs seleccionados`,...N.kpis.map(V=>`- **${V.title}** (${V.cat}) – ${V.desc}
  - Cómo se mide: ${V.how}
  - Baseline: ${V.baseline||""}
  - Meta: ${V.target||""}
  - Liberación: ${V.timeframe||""}`)].join(`
`);try{await navigator.clipboard.writeText(O)}catch{}alert("Resumen copiado en Markdown.")},mt=async()=>{const N=ne(),O=await G2(JSON.stringify(N)),V={id:n,...N,payloadHash:O,timestamp:new Date().toISOString()};try{const ht="kpi_wizard_runs",bs=JSON.parse(localStorage.getItem(ht)||"[]");bs.push(V),localStorage.setItem(ht,JSON.stringify(bs))}catch{}const ie="https://script.google.com/macros/s/AKfycbypACjMpvCiMwdofKZFCO0tu1DyBwZpU9OvsrbXpUamE3BzmRAfEcAU2A63taJvk4Va/exec",js=()=>{try{const ht=Le();ta(n,{...ht,status:"sent"},{title:s||"(sin nombre)"})}catch{}w?(w("OK. KPIs enviados"),setTimeout(()=>{q.startTransition?q.startTransition(()=>U()):U(),w(null)},0)):q.startTransition?q.startTransition(()=>U()):U()};try{const ht=JSON.stringify(V);if(navigator.sendBeacon){const ks=(()=>{try{const Wc=new URL(ie,window.location.href);return Wc.searchParams.set("ua",navigator.userAgent||""),Wc.toString()}catch{return ie}})();if(navigator.sendBeacon(ks,new Blob([ht],{type:"text/plain;charset=UTF-8"}))){js();return}}const bs=(()=>{try{const ks=new URL(ie,window.location.href);return ks.searchParams.set("ua",navigator.userAgent||""),ks.toString()}catch{return ie}})();await fetch(bs,{method:"POST",mode:"no-cors",body:ht}),js()}catch{w&&(w("Error al enviar. Revisa la consola."),setTimeout(()=>w(null),4e3))}},pi=()=>v.jsx("div",{className:"flex items-center gap-2 mb-6",children:[0,1,2,3,4].map(N=>v.jsx("div",{className:`h-2 flex-1 rounded-full ${N<=e?"bg-magno-600":"bg-gray-200"}`},N))}),Le=q.useCallback(()=>({id:n,step:e,service:s,bizGoal:o,userGoal:l,notes:u,tasks:p,selected:f,status:"draft"}),[n,e,s,o,l,u,p,f]);q.useEffect(()=>{if(typeof window>"u")return;const N=new URL(window.location.href),O=N.searchParams.get("run");if(O){const ie=$2(O);if(ie){i(O),t(ie.step??0),r(ie.service??""),a(ie.bizGoal??""),c(ie.userGoal??""),d(ie.notes??""),g(Array.isArray(ie.tasks)?ie.tasks:["",""]),h(ie.selected||{});return}}const V=Pp({title:s||"(sin nombre)"});i(V),N.searchParams.set("run",V),window.history.replaceState({},"",N.toString())},[]);const De=q.useRef({timer:null,lastHash:""});return q.useEffect(()=>{if(!n)return;const N=Le(),O=JSON.stringify(N);if(De.current.lastHash!==O)return De.current.timer&&clearTimeout(De.current.timer),De.current.timer=setTimeout(()=>{try{ta(n,N,{title:s||"(sin nombre)"}),De.current.lastHash=O}catch{}},1500),()=>{De.current.timer&&clearTimeout(De.current.timer)}},[n,s,o,l,u,p,f,e,Le]),q.useEffect(()=>{if(typeof window>"u")return;const N=()=>{if(n)try{const V=Le();ta(n,V,{title:s||"(sin nombre)"}),De.current.lastHash=JSON.stringify(V)}catch{}},O=()=>{document.visibilityState==="hidden"&&N()};return window.addEventListener("visibilitychange",O),window.addEventListener("pagehide",N),window.addEventListener("beforeunload",N),()=>{window.removeEventListener("visibilitychange",O),window.removeEventListener("pagehide",N),window.removeEventListener("beforeunload",N)}},[n,Le,s]),v.jsxs("div",{className:"max-w-6xl mx-auto p-6",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"KPI-o-matic"}),v.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-500",children:[v.jsxs("span",{children:["Pantalla ",e+1," de 5"]}),v.jsx("div",{className:"w-40",children:v.jsx(Uw,{value:P})}),v.jsxs(mn,{variant:"outline",size:"sm",className:"ml-2 gap-2",onClick:()=>{window.confirm("¿Resetear el flujo actual? Se perderán los cambios no enviados.")&&U()},title:"Resetear y empezar desde cero",children:[v.jsx(Vw,{className:"h-4 w-4"})," Resetear"]})]})]}),v.jsx(pi,{}),v.jsxs(n0,{mode:"wait",children:[e===0&&v.jsx(Ti,{children:v.jsx($w,{service:s,setService:r,bizGoal:o,setBizGoal:a,userGoal:l,setUserGoal:c,notes:u,setNotes:d})},"s1"),e===1&&v.jsx(Ti,{children:v.jsx(qw,{tasks:p,addTask:te,removeTask:b,updateTask:L})},"s2"),e===2&&v.jsx(Ti,{children:v.jsx(Ww,{search:y,setSearch:x,categories:ia,filterCats:T,toggleCat:en,filteredKPIs:I,selected:f,toggleKPI:Cs,setInfo:j,resolveKpiUrl:Z})},"s3"),e===3&&v.jsx(Ti,{children:v.jsx(Hw,{selected:f,kpiCatalogWithUrl:Ei,updateSelected:Pn,setInfo:j,resolveKpiUrl:Z})},"s4"),e===4&&v.jsx(Ti,{children:v.jsx(U2,{service:s,bizGoal:o,userGoal:l,notes:u,tasks:p,selected:f,kpiCatalogWithUrl:Ei,setInfo:j,resolveKpiUrl:Z,copyMarkdown:Cn,resetAll:D})},"s5")]}),v.jsxs("div",{className:"flex justify-between mt-6",children:[v.jsxs(mn,{variant:"ghost",disabled:e===0,onClick:()=>t(N=>Math.max(0,N-1)),className:"gap-2",children:[v.jsx(Aw,{className:"h-4 w-4"})," Anterior"]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsxs("span",{className:"text-xs text-gray-400",children:[Object.keys(f).length," KPIs"]}),v.jsxs(mn,{onClick:()=>e===4?mt():t(N=>Math.min(4,N+1)),className:"gap-2",children:[e===4?"Finalizar":"Siguiente"," ",v.jsx(Nw,{className:"h-4 w-4"})]})]})]}),E.open&&v.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",onClick:()=>{j({open:!1,url:"",title:"",id:""})},children:v.jsxs("div",{className:"bg-white rounded-xl shadow-xl w-full max-w-3xl h-[75vh] flex flex-col",onClick:N=>N.stopPropagation(),children:[v.jsxs("div",{className:"flex items-center justify-between p-3 border-b",children:[v.jsxs("div",{className:"font-semibold text-sm",children:["Más info: ",(de==null?void 0:de.title)||E.title]}),v.jsx("div",{className:"flex items-center gap-2",children:v.jsx("button",{className:"w-7 h-7 rounded-full border text-sm",onClick:()=>{j({open:!1,url:"",title:"",id:""})},children:"×"})})]}),v.jsx("div",{className:"flex-1 min-h-0",children:de?v.jsxs("div",{className:"p-4 overflow-y-auto h-full",children:[(de==null?void 0:de.subtitle)&&v.jsx("div",{className:"text-xs text-gray-500 mb-2",children:de.subtitle}),v.jsx("div",{className:"prose max-w-none text-sm",dangerouslySetInnerHTML:{__html:de.html}})]}):E.url?v.jsx("iframe",{src:E.url,className:"w-full h-full rounded-b-xl",title:"Más info"}):v.jsx("div",{className:"p-4 text-sm text-gray-500",children:"No hay URL disponible para este KPI."})})]})}),S&&v.jsx("div",{className:"fixed bottom-4 right-4 z-50 rounded-xl bg-black/90 text-white px-4 py-2 shadow-lg",children:S})]})}function Y2(){return v.jsxs("div",{className:"min-h-screen flex flex-col",children:[v.jsx("header",{className:"border-b bg-white"}),v.jsx("main",{className:"max-w-6xl mx-auto px-4 py-6 flex-1 w-full",children:v.jsx(X2,{})}),v.jsx("footer",{className:"text-center text-xs text-gray-600 pt-2 p-3 bg-[#e7e7e7]",children:"Hecho con ❤️ atte Carlitos"})]})}Fm(document.getElementById("root")).render(v.jsx(q.StrictMode,{children:v.jsx(Y2,{})}));
