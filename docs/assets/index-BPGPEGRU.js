(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();function Bh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zd={exports:{}},Mr={},Jd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls=Symbol.for("react.element"),qh=Symbol.for("react.portal"),$h=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),Wh=Symbol.for("react.profiler"),Qh=Symbol.for("react.provider"),Hh=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Xh=Symbol.for("react.suspense"),Yh=Symbol.for("react.memo"),Zh=Symbol.for("react.lazy"),Cc=Symbol.iterator;function Jh(e){return e===null||typeof e!="object"?null:(e=Cc&&e[Cc]||e["@@iterator"],typeof e=="function"?e:null)}var ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tp=Object.assign,ip={};function Ji(e,t,i){this.props=e,this.context=t,this.refs=ip,this.updater=i||ep}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function np(){}np.prototype=Ji.prototype;function Za(e,t,i){this.props=e,this.context=t,this.refs=ip,this.updater=i||ep}var Ja=Za.prototype=new np;Ja.constructor=Za;tp(Ja,Ji.prototype);Ja.isPureReactComponent=!0;var kc=Array.isArray,sp=Object.prototype.hasOwnProperty,el={current:null},rp={key:!0,ref:!0,__self:!0,__source:!0};function op(e,t,i){var n,s={},r=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(r=""+t.key),t)sp.call(t,n)&&!rp.hasOwnProperty(n)&&(s[n]=t[n]);var a=arguments.length-2;if(a===1)s.children=i;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)s[n]===void 0&&(s[n]=a[n]);return{$$typeof:ls,type:e,key:r,ref:o,props:s,_owner:el.current}}function eg(e,t){return{$$typeof:ls,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ls}function tg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var bc=/\/+/g;function Jr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tg(""+e.key):t.toString(36)}function _s(e,t,i,n,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ls:case qh:o=!0}}if(o)return o=e,s=s(o),e=n===""?"."+Jr(o,0):n,kc(s)?(i="",e!=null&&(i=e.replace(bc,"$&/")+"/"),_s(s,t,i,"",function(c){return c})):s!=null&&(tl(s)&&(s=eg(s,i+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(bc,"$&/")+"/")+e)),t.push(s)),1;if(o=0,n=n===""?".":n+":",kc(e))for(var a=0;a<e.length;a++){r=e[a];var l=n+Jr(r,a);o+=_s(r,t,i,l,s)}else if(l=Jh(e),typeof l=="function")for(e=l.call(e),a=0;!(r=e.next()).done;)r=r.value,l=n+Jr(r,a++),o+=_s(r,t,i,l,s);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ys(e,t,i){if(e==null)return e;var n=[],s=0;return _s(e,n,"","",function(r){return t.call(i,r,s++)}),n}function ig(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Os={transition:null},ng={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Os,ReactCurrentOwner:el};function ap(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ys,forEach:function(e,t,i){ys(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return ys(e,function(){t++}),t},toArray:function(e){return ys(e,function(t){return t})||[]},only:function(e){if(!tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Ji;F.Fragment=$h;F.Profiler=Wh;F.PureComponent=Za;F.StrictMode=Kh;F.Suspense=Xh;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ng;F.act=ap;F.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=tp({},e.props),s=e.key,r=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,o=el.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)sp.call(t,l)&&!rp.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=i;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:ls,type:e.type,key:s,ref:r,props:n,_owner:o}};F.createContext=function(e){return e={$$typeof:Hh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qh,_context:e},e.Consumer=e};F.createElement=op;F.createFactory=function(e){var t=op.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Gh,render:e}};F.isValidElement=tl;F.lazy=function(e){return{$$typeof:Zh,_payload:{_status:-1,_result:e},_init:ig}};F.memo=function(e,t){return{$$typeof:Yh,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Os.transition;Os.transition={};try{e()}finally{Os.transition=t}};F.unstable_act=ap;F.useCallback=function(e,t){return Pe.current.useCallback(e,t)};F.useContext=function(e){return Pe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};F.useEffect=function(e,t){return Pe.current.useEffect(e,t)};F.useId=function(){return Pe.current.useId()};F.useImperativeHandle=function(e,t,i){return Pe.current.useImperativeHandle(e,t,i)};F.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Pe.current.useMemo(e,t)};F.useReducer=function(e,t,i){return Pe.current.useReducer(e,t,i)};F.useRef=function(e){return Pe.current.useRef(e)};F.useState=function(e){return Pe.current.useState(e)};F.useSyncExternalStore=function(e,t,i){return Pe.current.useSyncExternalStore(e,t,i)};F.useTransition=function(){return Pe.current.useTransition()};F.version="18.3.1";Jd.exports=F;var A=Jd.exports;const oe=Bh(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg=A,rg=Symbol.for("react.element"),og=Symbol.for("react.fragment"),ag=Object.prototype.hasOwnProperty,lg=sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cg={key:!0,ref:!0,__self:!0,__source:!0};function lp(e,t,i){var n,s={},r=null,o=null;i!==void 0&&(r=""+i),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)ag.call(t,n)&&!cg.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:rg,type:e,key:r,ref:o,props:s,_owner:lg.current}}Mr.Fragment=og;Mr.jsx=lp;Mr.jsxs=lp;Zd.exports=Mr;var g=Zd.exports,cp={exports:{}},Ie={},up={exports:{}},dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,R){var z=b.length;b.push(R);e:for(;0<z;){var H=z-1>>>1,se=b[H];if(0<s(se,R))b[H]=R,b[z]=se,z=H;else break e}}function i(b){return b.length===0?null:b[0]}function n(b){if(b.length===0)return null;var R=b[0],z=b.pop();if(z!==R){b[0]=z;e:for(var H=0,se=b.length,P=se>>>1;H<P;){var D=2*(H+1)-1,I=b[D],O=D+1,Fe=b[O];if(0>s(I,z))O<se&&0>s(Fe,I)?(b[H]=Fe,b[O]=z,H=O):(b[H]=I,b[D]=z,H=D);else if(O<se&&0>s(Fe,z))b[H]=Fe,b[O]=z,H=O;else break e}}return R}function s(b,R){var z=b.sortIndex-R.sortIndex;return z!==0?z:b.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,p=3,v=!1,y=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var R=i(c);R!==null;){if(R.callback===null)n(c);else if(R.startTime<=b)n(c),R.sortIndex=R.expirationTime,t(l,R);else break;R=i(c)}}function S(b){if(x=!1,h(b),!y)if(i(l)!==null)y=!0,vi(w);else{var R=i(c);R!==null&&te(S,R.startTime-b)}}function w(b,R){y=!1,x&&(x=!1,m(j),j=-1),v=!0;var z=p;try{for(h(R),d=i(l);d!==null&&(!(d.expirationTime>R)||b&&!B());){var H=d.callback;if(typeof H=="function"){d.callback=null,p=d.priorityLevel;var se=H(d.expirationTime<=R);R=e.unstable_now(),typeof se=="function"?d.callback=se:d===i(l)&&n(l),h(R)}else n(l);d=i(l)}if(d!==null)var P=!0;else{var D=i(c);D!==null&&te(S,D.startTime-R),P=!1}return P}finally{d=null,p=z,v=!1}}var E=!1,k=null,j=-1,V=5,M=-1;function B(){return!(e.unstable_now()-M<V)}function it(){if(k!==null){var b=e.unstable_now();M=b;var R=!0;try{R=k(!0,b)}finally{R?ut():(E=!1,k=null)}}else E=!1}var ut;if(typeof f=="function")ut=function(){f(it)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,vs=dt.port2;dt.port1.onmessage=it,ut=function(){vs.postMessage(null)}}else ut=function(){T(it,0)};function vi(b){k=b,E||(E=!0,ut())}function te(b,R){j=T(function(){b(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,vi(w))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return i(l)},e.unstable_next=function(b){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var z=p;p=R;try{return b()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,R){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=p;p=b;try{return R()}finally{p=z}},e.unstable_scheduleCallback=function(b,R,z){var H=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?H+z:H):z=H,b){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=z+se,b={id:u++,callback:R,priorityLevel:b,startTime:z,expirationTime:se,sortIndex:-1},z>H?(b.sortIndex=z,t(c,b),i(l)===null&&b===i(c)&&(x?(m(j),j=-1):x=!0,te(S,z-H))):(b.sortIndex=se,t(l,b),y||v||(y=!0,vi(w))),b},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(b){var R=p;return function(){var z=p;p=R;try{return b.apply(this,arguments)}finally{p=z}}}})(dp);up.exports=dp;var ug=up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=A,Re=ug;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pp=new Set,On={};function mi(e,t){qi(e,t),qi(e+"Capture",t)}function qi(e,t){for(On[e]=t,e=0;e<t.length;e++)pp.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=Object.prototype.hasOwnProperty,pg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ac={},Nc={};function fg(e){return qo.call(Nc,e)?!0:qo.call(Ac,e)?!1:pg.test(e)?Nc[e]=!0:(Ac[e]=!0,!1)}function mg(e,t,i,n){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hg(e,t,i,n){if(t===null||typeof t>"u"||mg(e,t,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,i,n,s,r,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var il=/[\-:]([a-z])/g;function nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(il,nl);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(il,nl);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(il,nl);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function sl(e,t,i,n){var s=me.hasOwnProperty(t)?me[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hg(t,i,s,n)&&(i=null),n||s===null?fg(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):s.mustUseProperty?e[s.propertyName]=i===null?s.type===3?!1:"":i:(t=s.attributeName,n=s.attributeNamespace,i===null?e.removeAttribute(t):(s=s.type,i=s===3||s===4&&i===!0?"":""+i,n?e.setAttributeNS(n,t,i):e.setAttribute(t,i))))}var jt=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xs=Symbol.for("react.element"),Si=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),$o=Symbol.for("react.profiler"),fp=Symbol.for("react.provider"),mp=Symbol.for("react.context"),ol=Symbol.for("react.forward_ref"),Ko=Symbol.for("react.suspense"),Wo=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),hp=Symbol.for("react.offscreen"),Mc=Symbol.iterator;function rn(e){return e===null||typeof e!="object"?null:(e=Mc&&e[Mc]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,eo;function Sn(e){if(eo===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);eo=t&&t[1]||""}return`
`+eo+e}var to=!1;function io(e,t){if(!e||to)return"";to=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),r=n.stack.split(`
`),o=s.length-1,a=r.length-1;1<=o&&0<=a&&s[o]!==r[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==r[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==r[a]){var l=`
`+s[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{to=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Sn(e):""}function gg(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=io(e.type,!1),e;case 11:return e=io(e.type.render,!1),e;case 1:return e=io(e.type,!0),e;default:return""}}function Qo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wi:return"Fragment";case Si:return"Portal";case $o:return"Profiler";case rl:return"StrictMode";case Ko:return"Suspense";case Wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mp:return(e.displayName||"Context")+".Consumer";case fp:return(e._context.displayName||"Context")+".Provider";case ol:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case al:return t=e.displayName||null,t!==null?t:Qo(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return Qo(e(t))}catch{}}return null}function vg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qo(t);case 8:return t===rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yg(e){var t=gp(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){n=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ss(e){e._valueTracker||(e._valueTracker=yg(e))}function vp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=gp(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ho(e,t){var i=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Dc(e,t){var i=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;i=Bt(t.value!=null?t.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yp(e,t){t=t.checked,t!=null&&sl(e,"checked",t,!1)}function Go(e,t){yp(e,t);var i=Bt(t.value),n=t.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xo(e,t.type,i):t.hasOwnProperty("defaultValue")&&Xo(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lc(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Xo(e,t,i){(t!=="number"||er(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var wn=Array.isArray;function Vi(e,t,i,n){if(e=e.options,t){t={};for(var s=0;s<i.length;s++)t["$"+i[s]]=!0;for(i=0;i<e.length;i++)s=t.hasOwnProperty("$"+e[i].value),e[i].selected!==s&&(e[i].selected=s),s&&n&&(e[i].defaultSelected=!0)}else{for(i=""+Bt(i),t=null,s=0;s<e.length;s++){if(e[s].value===i){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Yo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rc(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(C(92));if(wn(i)){if(1<i.length)throw Error(C(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Bt(i)}}function xp(e,t){var i=Bt(t.value),n=Bt(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function zc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ws,wp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,i,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ws=ws||document.createElement("div"),ws.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ws.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xg=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){xg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kn[t]=kn[e]})});function Tp(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||kn.hasOwnProperty(e)&&kn[e]?(""+t).trim():t+"px"}function Pp(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var n=i.indexOf("--")===0,s=Tp(i,t[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,s):e[i]=s}}var Sg=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jo(e,t){if(t){if(Sg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ea(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ta=null;function ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,Fi=null,_i=null;function Ic(e){if(e=ds(e)){if(typeof ia!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ir(t),ia(e.stateNode,e.type,t))}}function jp(e){Fi?_i?_i.push(e):_i=[e]:Fi=e}function Ep(){if(Fi){var e=Fi,t=_i;if(_i=Fi=null,Ic(e),t)for(e=0;e<t.length;e++)Ic(t[e])}}function Cp(e,t){return e(t)}function kp(){}var no=!1;function bp(e,t,i){if(no)return e(t,i);no=!0;try{return Cp(e,t,i)}finally{no=!1,(Fi!==null||_i!==null)&&(kp(),Ep())}}function Bn(e,t){var i=e.stateNode;if(i===null)return null;var n=Ir(i);if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(C(231,t,typeof i));return i}var na=!1;if(xt)try{var on={};Object.defineProperty(on,"passive",{get:function(){na=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{na=!1}function wg(e,t,i,n,s,r,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(i,c)}catch(u){this.onError(u)}}var bn=!1,tr=null,ir=!1,sa=null,Tg={onError:function(e){bn=!0,tr=e}};function Pg(e,t,i,n,s,r,o,a,l){bn=!1,tr=null,wg.apply(Tg,arguments)}function jg(e,t,i,n,s,r,o,a,l){if(Pg.apply(this,arguments),bn){if(bn){var c=tr;bn=!1,tr=null}else throw Error(C(198));ir||(ir=!0,sa=c)}}function hi(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Ap(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vc(e){if(hi(e)!==e)throw Error(C(188))}function Eg(e){var t=e.alternate;if(!t){if(t=hi(e),t===null)throw Error(C(188));return t!==e?null:e}for(var i=e,n=t;;){var s=i.return;if(s===null)break;var r=s.alternate;if(r===null){if(n=s.return,n!==null){i=n;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===i)return Vc(s),e;if(r===n)return Vc(s),t;r=r.sibling}throw Error(C(188))}if(i.return!==n.return)i=s,n=r;else{for(var o=!1,a=s.child;a;){if(a===i){o=!0,i=s,n=r;break}if(a===n){o=!0,n=s,i=r;break}a=a.sibling}if(!o){for(a=r.child;a;){if(a===i){o=!0,i=r,n=s;break}if(a===n){o=!0,n=r,i=s;break}a=a.sibling}if(!o)throw Error(C(189))}}if(i.alternate!==n)throw Error(C(190))}if(i.tag!==3)throw Error(C(188));return i.stateNode.current===i?e:t}function Np(e){return e=Eg(e),e!==null?Mp(e):null}function Mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mp(e);if(t!==null)return t;e=e.sibling}return null}var Dp=Re.unstable_scheduleCallback,Fc=Re.unstable_cancelCallback,Cg=Re.unstable_shouldYield,kg=Re.unstable_requestPaint,ne=Re.unstable_now,bg=Re.unstable_getCurrentPriorityLevel,cl=Re.unstable_ImmediatePriority,Lp=Re.unstable_UserBlockingPriority,nr=Re.unstable_NormalPriority,Ag=Re.unstable_LowPriority,Rp=Re.unstable_IdlePriority,Dr=null,ot=null;function Ng(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Dr,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Lg,Mg=Math.log,Dg=Math.LN2;function Lg(e){return e>>>=0,e===0?32:31-(Mg(e)/Dg|0)|0}var Ts=64,Ps=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sr(e,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,s=e.suspendedLanes,r=e.pingedLanes,o=i&268435455;if(o!==0){var a=o&~s;a!==0?n=Tn(a):(r&=o,r!==0&&(n=Tn(r)))}else o=i&~s,o!==0?n=Tn(o):r!==0&&(n=Tn(r));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,r=t&-t,s>=r||s===16&&(r&4194240)!==0))return t;if(n&4&&(n|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)i=31-Je(t),s=1<<i,n|=e[i],t&=~s;return n}function Rg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zg(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-Je(r),a=1<<o,l=s[o];l===-1?(!(a&i)||a&n)&&(s[o]=Rg(a,t)):l<=t&&(e.expiredLanes|=a),r&=~a}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zp(){var e=Ts;return Ts<<=1,!(Ts&4194240)&&(Ts=64),e}function so(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function cs(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=i}function Ig(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var s=31-Je(i),r=1<<s;t[s]=0,n[s]=-1,e[s]=-1,i&=~r}}function ul(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-Je(i),s=1<<n;s&t|e[n]&t&&(e[n]|=t),i&=~s}}var U=0;function Ip(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vp,dl,Fp,_p,Op,oa=!1,js=[],Rt=null,zt=null,It=null,qn=new Map,$n=new Map,Nt=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _c(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function an(e,t,i,n,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:r,targetContainers:[s]},t!==null&&(t=ds(t),t!==null&&dl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Fg(e,t,i,n,s){switch(t){case"focusin":return Rt=an(Rt,e,t,i,n,s),!0;case"dragenter":return zt=an(zt,e,t,i,n,s),!0;case"mouseover":return It=an(It,e,t,i,n,s),!0;case"pointerover":var r=s.pointerId;return qn.set(r,an(qn.get(r)||null,e,t,i,n,s)),!0;case"gotpointercapture":return r=s.pointerId,$n.set(r,an($n.get(r)||null,e,t,i,n,s)),!0}return!1}function Up(e){var t=ii(e.target);if(t!==null){var i=hi(t);if(i!==null){if(t=i.tag,t===13){if(t=Ap(i),t!==null){e.blockedOn=t,Op(e.priority,function(){Fp(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);ta=n,i.target.dispatchEvent(n),ta=null}else return t=ds(i),t!==null&&dl(t),e.blockedOn=i,!1;t.shift()}return!0}function Oc(e,t,i){Us(e)&&i.delete(t)}function _g(){oa=!1,Rt!==null&&Us(Rt)&&(Rt=null),zt!==null&&Us(zt)&&(zt=null),It!==null&&Us(It)&&(It=null),qn.forEach(Oc),$n.forEach(Oc)}function ln(e,t){e.blockedOn===t&&(e.blockedOn=null,oa||(oa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,_g)))}function Kn(e){function t(s){return ln(s,e)}if(0<js.length){ln(js[0],e);for(var i=1;i<js.length;i++){var n=js[i];n.blockedOn===e&&(n.blockedOn=null)}}for(Rt!==null&&ln(Rt,e),zt!==null&&ln(zt,e),It!==null&&ln(It,e),qn.forEach(t),$n.forEach(t),i=0;i<Nt.length;i++)n=Nt[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&(i=Nt[0],i.blockedOn===null);)Up(i),i.blockedOn===null&&Nt.shift()}var Oi=jt.ReactCurrentBatchConfig,rr=!0;function Og(e,t,i,n){var s=U,r=Oi.transition;Oi.transition=null;try{U=1,pl(e,t,i,n)}finally{U=s,Oi.transition=r}}function Ug(e,t,i,n){var s=U,r=Oi.transition;Oi.transition=null;try{U=4,pl(e,t,i,n)}finally{U=s,Oi.transition=r}}function pl(e,t,i,n){if(rr){var s=aa(e,t,i,n);if(s===null)ho(e,t,n,or,i),_c(e,n);else if(Fg(s,e,t,i,n))n.stopPropagation();else if(_c(e,n),t&4&&-1<Vg.indexOf(e)){for(;s!==null;){var r=ds(s);if(r!==null&&Vp(r),r=aa(e,t,i,n),r===null&&ho(e,t,n,or,i),r===s)break;s=r}s!==null&&n.stopPropagation()}else ho(e,t,n,null,i)}}var or=null;function aa(e,t,i,n){if(or=null,e=ll(n),e=ii(e),e!==null)if(t=hi(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Ap(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return or=e,null}function Bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bg()){case cl:return 1;case Lp:return 4;case nr:case Ag:return 16;case Rp:return 536870912;default:return 16}default:return 16}}var Dt=null,fl=null,Bs=null;function qp(){if(Bs)return Bs;var e,t=fl,i=t.length,n,s="value"in Dt?Dt.value:Dt.textContent,r=s.length;for(e=0;e<i&&t[e]===s[e];e++);var o=i-e;for(n=1;n<=o&&t[i-n]===s[r-n];n++);return Bs=s.slice(e,1<n?1-n:void 0)}function qs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Es(){return!0}function Uc(){return!1}function Ve(e){function t(i,n,s,r,o){this._reactName=i,this._targetInst=s,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(i=e[a],this[a]=i?i(r):r[a]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Es:Uc,this.isPropagationStopped=Uc,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Es)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Es)},persist:function(){},isPersistent:Es}),t}var en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Ve(en),us=Z({},en,{view:0,detail:0}),Bg=Ve(us),ro,oo,cn,Lr=Z({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cn&&(cn&&e.type==="mousemove"?(ro=e.screenX-cn.screenX,oo=e.screenY-cn.screenY):oo=ro=0,cn=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),Bc=Ve(Lr),qg=Z({},Lr,{dataTransfer:0}),$g=Ve(qg),Kg=Z({},us,{relatedTarget:0}),ao=Ve(Kg),Wg=Z({},en,{animationName:0,elapsedTime:0,pseudoElement:0}),Qg=Ve(Wg),Hg=Z({},en,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gg=Ve(Hg),Xg=Z({},en,{data:0}),qc=Ve(Xg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jg[e])?!!t[e]:!1}function hl(){return ev}var tv=Z({},us,{key:function(e){if(e.key){var t=Yg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?qs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iv=Ve(tv),nv=Z({},Lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$c=Ve(nv),sv=Z({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),rv=Ve(sv),ov=Z({},en,{propertyName:0,elapsedTime:0,pseudoElement:0}),av=Ve(ov),lv=Z({},Lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=Ve(lv),uv=[9,13,27,32],gl=xt&&"CompositionEvent"in window,An=null;xt&&"documentMode"in document&&(An=document.documentMode);var dv=xt&&"TextEvent"in window&&!An,$p=xt&&(!gl||An&&8<An&&11>=An),Kc=" ",Wc=!1;function Kp(e,t){switch(e){case"keyup":return uv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ti=!1;function pv(e,t){switch(e){case"compositionend":return Wp(t);case"keypress":return t.which!==32?null:(Wc=!0,Kc);case"textInput":return e=t.data,e===Kc&&Wc?null:e;default:return null}}function fv(e,t){if(Ti)return e==="compositionend"||!gl&&Kp(e,t)?(e=qp(),Bs=fl=Dt=null,Ti=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $p&&t.locale!=="ko"?null:t.data;default:return null}}var mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mv[e.type]:t==="textarea"}function Qp(e,t,i,n){jp(n),t=ar(t,"onChange"),0<t.length&&(i=new ml("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var Nn=null,Wn=null;function hv(e){rf(e,0)}function Rr(e){var t=Ei(e);if(vp(t))return e}function gv(e,t){if(e==="change")return t}var Hp=!1;if(xt){var lo;if(xt){var co="oninput"in document;if(!co){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),co=typeof Hc.oninput=="function"}lo=co}else lo=!1;Hp=lo&&(!document.documentMode||9<document.documentMode)}function Gc(){Nn&&(Nn.detachEvent("onpropertychange",Gp),Wn=Nn=null)}function Gp(e){if(e.propertyName==="value"&&Rr(Wn)){var t=[];Qp(t,Wn,e,ll(e)),bp(hv,t)}}function vv(e,t,i){e==="focusin"?(Gc(),Nn=t,Wn=i,Nn.attachEvent("onpropertychange",Gp)):e==="focusout"&&Gc()}function yv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rr(Wn)}function xv(e,t){if(e==="click")return Rr(t)}function Sv(e,t){if(e==="input"||e==="change")return Rr(t)}function wv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:wv;function Qn(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var s=i[n];if(!qo.call(t,s)||!tt(e[s],t[s]))return!1}return!0}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yc(e,t){var i=Xc(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Xc(i)}}function Xp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yp(){for(var e=window,t=er();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=er(e.document)}return t}function vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tv(e){var t=Yp(),i=e.focusedElem,n=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Xp(i.ownerDocument.documentElement,i)){if(n!==null&&vl(i)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=i.textContent.length,r=Math.min(n.start,s);n=n.end===void 0?r:Math.min(n.end,s),!e.extend&&r>n&&(s=n,n=r,r=s),s=Yc(i,r);var o=Yc(i,n);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),r>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pv=xt&&"documentMode"in document&&11>=document.documentMode,Pi=null,la=null,Mn=null,ca=!1;function Zc(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ca||Pi==null||Pi!==er(n)||(n=Pi,"selectionStart"in n&&vl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Mn&&Qn(Mn,n)||(Mn=n,n=ar(la,"onSelect"),0<n.length&&(t=new ml("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=Pi)))}function Cs(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ji={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},uo={},Zp={};xt&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function zr(e){if(uo[e])return uo[e];if(!ji[e])return e;var t=ji[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Zp)return uo[e]=t[i];return e}var Jp=zr("animationend"),ef=zr("animationiteration"),tf=zr("animationstart"),nf=zr("transitionend"),sf=new Map,Jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){sf.set(e,t),mi(t,[e])}for(var po=0;po<Jc.length;po++){var fo=Jc[po],jv=fo.toLowerCase(),Ev=fo[0].toUpperCase()+fo.slice(1);Wt(jv,"on"+Ev)}Wt(Jp,"onAnimationEnd");Wt(ef,"onAnimationIteration");Wt(tf,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(nf,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function eu(e,t,i){var n=e.type||"unknown-event";e.currentTarget=i,jg(n,t,void 0,e),e.currentTarget=null}function rf(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],s=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var a=n[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==r&&s.isPropagationStopped())break e;eu(s,a,c),r=l}else for(o=0;o<n.length;o++){if(a=n[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==r&&s.isPropagationStopped())break e;eu(s,a,c),r=l}}}if(ir)throw e=sa,ir=!1,sa=null,e}function $(e,t){var i=t[ma];i===void 0&&(i=t[ma]=new Set);var n=e+"__bubble";i.has(n)||(of(t,e,2,!1),i.add(n))}function mo(e,t,i){var n=0;t&&(n|=4),of(i,e,n,t)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[ks]){e[ks]=!0,pp.forEach(function(i){i!=="selectionchange"&&(Cv.has(i)||mo(i,!1,e),mo(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ks]||(t[ks]=!0,mo("selectionchange",!1,t))}}function of(e,t,i,n){switch(Bp(t)){case 1:var s=Og;break;case 4:s=Ug;break;default:s=pl}i=s.bind(null,t,i,e),s=void 0,!na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,i,{capture:!0,passive:s}):e.addEventListener(t,i,!0):s!==void 0?e.addEventListener(t,i,{passive:s}):e.addEventListener(t,i,!1)}function ho(e,t,i,n,s){var r=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var a=n.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=ii(a),o===null)return;if(l=o.tag,l===5||l===6){n=r=o;continue e}a=a.parentNode}}n=n.return}bp(function(){var c=r,u=ll(i),d=[];e:{var p=sf.get(e);if(p!==void 0){var v=ml,y=e;switch(e){case"keypress":if(qs(i)===0)break e;case"keydown":case"keyup":v=iv;break;case"focusin":y="focus",v=ao;break;case"focusout":y="blur",v=ao;break;case"beforeblur":case"afterblur":v=ao;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=$g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=rv;break;case Jp:case ef:case tf:v=Qg;break;case nf:v=av;break;case"scroll":v=Bg;break;case"wheel":v=cv;break;case"copy":case"cut":case"paste":v=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=$c}var x=(t&4)!==0,T=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var f=c,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,m!==null&&(S=Bn(f,m),S!=null&&x.push(Gn(f,S,h)))),T)break;f=f.return}0<x.length&&(p=new v(p,y,null,i,u),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&i!==ta&&(y=i.relatedTarget||i.fromElement)&&(ii(y)||y[St]))break e;if((v||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=i.relatedTarget||i.toElement,v=c,y=y?ii(y):null,y!==null&&(T=hi(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=Bc,S="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=$c,S="onPointerLeave",m="onPointerEnter",f="pointer"),T=v==null?p:Ei(v),h=y==null?p:Ei(y),p=new x(S,f+"leave",v,i,u),p.target=T,p.relatedTarget=h,S=null,ii(u)===c&&(x=new x(m,f+"enter",y,i,u),x.target=h,x.relatedTarget=T,S=x),T=S,v&&y)t:{for(x=v,m=y,f=0,h=x;h;h=yi(h))f++;for(h=0,S=m;S;S=yi(S))h++;for(;0<f-h;)x=yi(x),f--;for(;0<h-f;)m=yi(m),h--;for(;f--;){if(x===m||m!==null&&x===m.alternate)break t;x=yi(x),m=yi(m)}x=null}else x=null;v!==null&&tu(d,p,v,x,!1),y!==null&&T!==null&&tu(d,T,y,x,!0)}}e:{if(p=c?Ei(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var w=gv;else if(Qc(p))if(Hp)w=Sv;else{w=yv;var E=vv}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=xv);if(w&&(w=w(e,c))){Qp(d,w,i,u);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Xo(p,"number",p.value)}switch(E=c?Ei(c):window,e){case"focusin":(Qc(E)||E.contentEditable==="true")&&(Pi=E,la=c,Mn=null);break;case"focusout":Mn=la=Pi=null;break;case"mousedown":ca=!0;break;case"contextmenu":case"mouseup":case"dragend":ca=!1,Zc(d,i,u);break;case"selectionchange":if(Pv)break;case"keydown":case"keyup":Zc(d,i,u)}var k;if(gl)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ti?Kp(e,i)&&(j="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(j="onCompositionStart");j&&($p&&i.locale!=="ko"&&(Ti||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ti&&(k=qp()):(Dt=u,fl="value"in Dt?Dt.value:Dt.textContent,Ti=!0)),E=ar(c,j),0<E.length&&(j=new qc(j,e,null,i,u),d.push({event:j,listeners:E}),k?j.data=k:(k=Wp(i),k!==null&&(j.data=k)))),(k=dv?pv(e,i):fv(e,i))&&(c=ar(c,"onBeforeInput"),0<c.length&&(u=new qc("onBeforeInput","beforeinput",null,i,u),d.push({event:u,listeners:c}),u.data=k))}rf(d,t)})}function Gn(e,t,i){return{instance:e,listener:t,currentTarget:i}}function ar(e,t){for(var i=t+"Capture",n=[];e!==null;){var s=e,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=Bn(e,i),r!=null&&n.unshift(Gn(e,r,s)),r=Bn(e,t),r!=null&&n.push(Gn(e,r,s))),e=e.return}return n}function yi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tu(e,t,i,n,s){for(var r=t._reactName,o=[];i!==null&&i!==n;){var a=i,l=a.alternate,c=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&c!==null&&(a=c,s?(l=Bn(i,r),l!=null&&o.unshift(Gn(i,l,a))):s||(l=Bn(i,r),l!=null&&o.push(Gn(i,l,a)))),i=i.return}o.length!==0&&e.push({event:t,listeners:o})}var kv=/\r\n?/g,bv=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(kv,`
`).replace(bv,"")}function bs(e,t,i){if(t=iu(t),iu(e)!==t&&i)throw Error(C(425))}function lr(){}var ua=null,da=null;function pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fa=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,nu=typeof Promise=="function"?Promise:void 0,Nv=typeof queueMicrotask=="function"?queueMicrotask:typeof nu<"u"?function(e){return nu.resolve(null).then(e).catch(Mv)}:fa;function Mv(e){setTimeout(function(){throw e})}function go(e,t){var i=t,n=0;do{var s=i.nextSibling;if(e.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(n===0){e.removeChild(s),Kn(t);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=s}while(i);Kn(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var tn=Math.random().toString(36).slice(2),rt="__reactFiber$"+tn,Xn="__reactProps$"+tn,St="__reactContainer$"+tn,ma="__reactEvents$"+tn,Dv="__reactListeners$"+tn,Lv="__reactHandles$"+tn;function ii(e){var t=e[rt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[St]||i[rt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=su(e);e!==null;){if(i=e[rt])return i;e=su(e)}return t}e=i,i=e.parentNode}return null}function ds(e){return e=e[rt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ei(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ir(e){return e[Xn]||null}var ha=[],Ci=-1;function Qt(e){return{current:e}}function K(e){0>Ci||(e.current=ha[Ci],ha[Ci]=null,Ci--)}function q(e,t){Ci++,ha[Ci]=e.current,e.current=t}var qt={},Se=Qt(qt),ke=Qt(!1),ci=qt;function $i(e,t){var i=e.type.contextTypes;if(!i)return qt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in i)s[r]=t[r];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function be(e){return e=e.childContextTypes,e!=null}function cr(){K(ke),K(Se)}function ru(e,t,i){if(Se.current!==qt)throw Error(C(168));q(Se,t),q(ke,i)}function af(e,t,i){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(C(108,vg(e)||"Unknown",s));return Z({},i,n)}function ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,ci=Se.current,q(Se,e),q(ke,ke.current),!0}function ou(e,t,i){var n=e.stateNode;if(!n)throw Error(C(169));i?(e=af(e,t,ci),n.__reactInternalMemoizedMergedChildContext=e,K(ke),K(Se),q(Se,e)):K(ke),q(ke,i)}var ft=null,Vr=!1,vo=!1;function lf(e){ft===null?ft=[e]:ft.push(e)}function Rv(e){Vr=!0,lf(e)}function Ht(){if(!vo&&ft!==null){vo=!0;var e=0,t=U;try{var i=ft;for(U=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}ft=null,Vr=!1}catch(s){throw ft!==null&&(ft=ft.slice(e+1)),Dp(cl,Ht),s}finally{U=t,vo=!1}}return null}var ki=[],bi=0,dr=null,pr=0,Ue=[],Be=0,ui=null,mt=1,ht="";function Zt(e,t){ki[bi++]=pr,ki[bi++]=dr,dr=e,pr=t}function cf(e,t,i){Ue[Be++]=mt,Ue[Be++]=ht,Ue[Be++]=ui,ui=e;var n=mt;e=ht;var s=32-Je(n)-1;n&=~(1<<s),i+=1;var r=32-Je(t)+s;if(30<r){var o=s-s%5;r=(n&(1<<o)-1).toString(32),n>>=o,s-=o,mt=1<<32-Je(t)+s|i<<s|n,ht=r+e}else mt=1<<r|i<<s|n,ht=e}function yl(e){e.return!==null&&(Zt(e,1),cf(e,1,0))}function xl(e){for(;e===dr;)dr=ki[--bi],ki[bi]=null,pr=ki[--bi],ki[bi]=null;for(;e===ui;)ui=Ue[--Be],Ue[Be]=null,ht=Ue[--Be],Ue[Be]=null,mt=Ue[--Be],Ue[Be]=null}var De=null,Me=null,Q=!1,Ze=null;function uf(e,t){var i=qe(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function au(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Me=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=ui!==null?{id:mt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=qe(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,De=e,Me=null,!0):!1;default:return!1}}function ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function va(e){if(Q){var t=Me;if(t){var i=t;if(!au(e,t)){if(ga(e))throw Error(C(418));t=Vt(i.nextSibling);var n=De;t&&au(e,t)?uf(n,i):(e.flags=e.flags&-4097|2,Q=!1,De=e)}}else{if(ga(e))throw Error(C(418));e.flags=e.flags&-4097|2,Q=!1,De=e}}}function lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function As(e){if(e!==De)return!1;if(!Q)return lu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pa(e.type,e.memoizedProps)),t&&(t=Me)){if(ga(e))throw df(),Error(C(418));for(;t;)uf(e,t),t=Vt(t.nextSibling)}if(lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Me=Vt(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=De?Vt(e.stateNode.nextSibling):null;return!0}function df(){for(var e=Me;e;)e=Vt(e.nextSibling)}function Ki(){Me=De=null,Q=!1}function Sl(e){Ze===null?Ze=[e]:Ze.push(e)}var zv=jt.ReactCurrentBatchConfig;function un(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(C(309));var n=i.stateNode}if(!n)throw Error(C(147,e));var s=n,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(o){var a=s.refs;o===null?delete a[r]:a[r]=o},t._stringRef=r,t)}if(typeof e!="string")throw Error(C(284));if(!i._owner)throw Error(C(290,e))}return e}function Ns(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cu(e){var t=e._init;return t(e._payload)}function pf(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function i(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function n(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function s(m,f){return m=Ut(m,f),m.index=0,m.sibling=null,m}function r(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,h,S){return f===null||f.tag!==6?(f=jo(h,m.mode,S),f.return=m,f):(f=s(f,h),f.return=m,f)}function l(m,f,h,S){var w=h.type;return w===wi?u(m,f,h.props.children,S,h.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bt&&cu(w)===f.type)?(S=s(f,h.props),S.ref=un(m,f,h),S.return=m,S):(S=Xs(h.type,h.key,h.props,null,m.mode,S),S.ref=un(m,f,h),S.return=m,S)}function c(m,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Eo(h,m.mode,S),f.return=m,f):(f=s(f,h.children||[]),f.return=m,f)}function u(m,f,h,S,w){return f===null||f.tag!==7?(f=ai(h,m.mode,S,w),f.return=m,f):(f=s(f,h),f.return=m,f)}function d(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=jo(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xs:return h=Xs(f.type,f.key,f.props,null,m.mode,h),h.ref=un(m,null,f),h.return=m,h;case Si:return f=Eo(f,m.mode,h),f.return=m,f;case bt:var S=f._init;return d(m,S(f._payload),h)}if(wn(f)||rn(f))return f=ai(f,m.mode,h,null),f.return=m,f;Ns(m,f)}return null}function p(m,f,h,S){var w=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:a(m,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xs:return h.key===w?l(m,f,h,S):null;case Si:return h.key===w?c(m,f,h,S):null;case bt:return w=h._init,p(m,f,w(h._payload),S)}if(wn(h)||rn(h))return w!==null?null:u(m,f,h,S,null);Ns(m,h)}return null}function v(m,f,h,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(h)||null,a(f,m,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xs:return m=m.get(S.key===null?h:S.key)||null,l(f,m,S,w);case Si:return m=m.get(S.key===null?h:S.key)||null,c(f,m,S,w);case bt:var E=S._init;return v(m,f,h,E(S._payload),w)}if(wn(S)||rn(S))return m=m.get(h)||null,u(f,m,S,w,null);Ns(f,S)}return null}function y(m,f,h,S){for(var w=null,E=null,k=f,j=f=0,V=null;k!==null&&j<h.length;j++){k.index>j?(V=k,k=null):V=k.sibling;var M=p(m,k,h[j],S);if(M===null){k===null&&(k=V);break}e&&k&&M.alternate===null&&t(m,k),f=r(M,f,j),E===null?w=M:E.sibling=M,E=M,k=V}if(j===h.length)return i(m,k),Q&&Zt(m,j),w;if(k===null){for(;j<h.length;j++)k=d(m,h[j],S),k!==null&&(f=r(k,f,j),E===null?w=k:E.sibling=k,E=k);return Q&&Zt(m,j),w}for(k=n(m,k);j<h.length;j++)V=v(k,m,j,h[j],S),V!==null&&(e&&V.alternate!==null&&k.delete(V.key===null?j:V.key),f=r(V,f,j),E===null?w=V:E.sibling=V,E=V);return e&&k.forEach(function(B){return t(m,B)}),Q&&Zt(m,j),w}function x(m,f,h,S){var w=rn(h);if(typeof w!="function")throw Error(C(150));if(h=w.call(h),h==null)throw Error(C(151));for(var E=w=null,k=f,j=f=0,V=null,M=h.next();k!==null&&!M.done;j++,M=h.next()){k.index>j?(V=k,k=null):V=k.sibling;var B=p(m,k,M.value,S);if(B===null){k===null&&(k=V);break}e&&k&&B.alternate===null&&t(m,k),f=r(B,f,j),E===null?w=B:E.sibling=B,E=B,k=V}if(M.done)return i(m,k),Q&&Zt(m,j),w;if(k===null){for(;!M.done;j++,M=h.next())M=d(m,M.value,S),M!==null&&(f=r(M,f,j),E===null?w=M:E.sibling=M,E=M);return Q&&Zt(m,j),w}for(k=n(m,k);!M.done;j++,M=h.next())M=v(k,m,j,M.value,S),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?j:M.key),f=r(M,f,j),E===null?w=M:E.sibling=M,E=M);return e&&k.forEach(function(it){return t(m,it)}),Q&&Zt(m,j),w}function T(m,f,h,S){if(typeof h=="object"&&h!==null&&h.type===wi&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case xs:e:{for(var w=h.key,E=f;E!==null;){if(E.key===w){if(w=h.type,w===wi){if(E.tag===7){i(m,E.sibling),f=s(E,h.props.children),f.return=m,m=f;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bt&&cu(w)===E.type){i(m,E.sibling),f=s(E,h.props),f.ref=un(m,E,h),f.return=m,m=f;break e}i(m,E);break}else t(m,E);E=E.sibling}h.type===wi?(f=ai(h.props.children,m.mode,S,h.key),f.return=m,m=f):(S=Xs(h.type,h.key,h.props,null,m.mode,S),S.ref=un(m,f,h),S.return=m,m=S)}return o(m);case Si:e:{for(E=h.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){i(m,f.sibling),f=s(f,h.children||[]),f.return=m,m=f;break e}else{i(m,f);break}else t(m,f);f=f.sibling}f=Eo(h,m.mode,S),f.return=m,m=f}return o(m);case bt:return E=h._init,T(m,f,E(h._payload),S)}if(wn(h))return y(m,f,h,S);if(rn(h))return x(m,f,h,S);Ns(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(i(m,f.sibling),f=s(f,h),f.return=m,m=f):(i(m,f),f=jo(h,m.mode,S),f.return=m,m=f),o(m)):i(m,f)}return T}var Wi=pf(!0),ff=pf(!1),fr=Qt(null),mr=null,Ai=null,wl=null;function Tl(){wl=Ai=mr=null}function Pl(e){var t=fr.current;K(fr),e._currentValue=t}function ya(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function Ui(e,t){mr=e,wl=Ai=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(wl!==e)if(e={context:e,memoizedValue:t,next:null},Ai===null){if(mr===null)throw Error(C(308));Ai=e,mr.dependencies={lanes:0,firstContext:e}}else Ai=Ai.next=e;return t}var ni=null;function jl(e){ni===null?ni=[e]:ni.push(e)}function mf(e,t,i,n){var s=t.interleaved;return s===null?(i.next=i,jl(t)):(i.next=s.next,s.next=i),t.interleaved=i,wt(e,n)}function wt(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var At=!1;function El(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,_&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,wt(e,i)}return s=n.interleaved,s===null?(t.next=t,jl(n)):(t.next=s.next,s.next=t),n.interleaved=t,wt(e,i)}function $s(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,ul(e,i)}}function uu(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var s=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var o={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?s=r=o:r=r.next=o,i=i.next}while(i!==null);r===null?s=r=t:r=r.next=t}else s=r=t;i={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function hr(e,t,i,n){var s=e.updateQueue;At=!1;var r=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?r=c:o.next=c,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(r!==null){var d=s.baseState;o=0,u=c=l=null,a=r;do{var p=a.lane,v=a.eventTime;if((n&p)===p){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(p=t,v=i,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=Z({},d,p);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,l=d):u=u.next=v,o|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else r===null&&(s.shared.lanes=0);pi|=o,e.lanes=o,e.memoizedState=d}}function du(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=i,typeof s!="function")throw Error(C(191,s));s.call(n)}}}var ps={},at=Qt(ps),Yn=Qt(ps),Zn=Qt(ps);function si(e){if(e===ps)throw Error(C(174));return e}function Cl(e,t){switch(q(Zn,t),q(Yn,e),q(at,ps),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zo(t,e)}K(at),q(at,t)}function Qi(){K(at),K(Yn),K(Zn)}function gf(e){si(Zn.current);var t=si(at.current),i=Zo(t,e.type);t!==i&&(q(Yn,e),q(at,i))}function kl(e){Yn.current===e&&(K(at),K(Yn))}var G=Qt(0);function gr(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function bl(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var Ks=jt.ReactCurrentDispatcher,xo=jt.ReactCurrentBatchConfig,di=0,Y=null,ae=null,ce=null,vr=!1,Dn=!1,Jn=0,Iv=0;function he(){throw Error(C(321))}function Al(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!tt(e[i],t[i]))return!1;return!0}function Nl(e,t,i,n,s,r){if(di=r,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ks.current=e===null||e.memoizedState===null?Ov:Uv,e=i(n,s),Dn){r=0;do{if(Dn=!1,Jn=0,25<=r)throw Error(C(301));r+=1,ce=ae=null,t.updateQueue=null,Ks.current=Bv,e=i(n,s)}while(Dn)}if(Ks.current=yr,t=ae!==null&&ae.next!==null,di=0,ce=ae=Y=null,vr=!1,t)throw Error(C(300));return e}function Ml(){var e=Jn!==0;return Jn=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Y.memoizedState=ce=e:ce=ce.next=e,ce}function We(){if(ae===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?Y.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(C(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?Y.memoizedState=ce=e:ce=ce.next=e}return ce}function es(e,t){return typeof t=="function"?t(e):t}function So(e){var t=We(),i=t.queue;if(i===null)throw Error(C(311));i.lastRenderedReducer=e;var n=ae,s=n.baseQueue,r=i.pending;if(r!==null){if(s!==null){var o=s.next;s.next=r.next,r.next=o}n.baseQueue=s=r,i.pending=null}if(s!==null){r=s.next,n=n.baseState;var a=o=null,l=null,c=r;do{var u=c.lane;if((di&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=n):l=l.next=d,Y.lanes|=u,pi|=u}c=c.next}while(c!==null&&c!==r);l===null?o=n:l.next=a,tt(n,t.memoizedState)||(Ce=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,i.lastRenderedState=n}if(e=i.interleaved,e!==null){s=e;do r=s.lane,Y.lanes|=r,pi|=r,s=s.next;while(s!==e)}else s===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function wo(e){var t=We(),i=t.queue;if(i===null)throw Error(C(311));i.lastRenderedReducer=e;var n=i.dispatch,s=i.pending,r=t.memoizedState;if(s!==null){i.pending=null;var o=s=s.next;do r=e(r,o.action),o=o.next;while(o!==s);tt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),i.lastRenderedState=r}return[r,n]}function vf(){}function yf(e,t){var i=Y,n=We(),s=t(),r=!tt(n.memoizedState,s);if(r&&(n.memoizedState=s,Ce=!0),n=n.queue,Dl(wf.bind(null,i,n,e),[e]),n.getSnapshot!==t||r||ce!==null&&ce.memoizedState.tag&1){if(i.flags|=2048,ts(9,Sf.bind(null,i,n,s,t),void 0,null),ue===null)throw Error(C(349));di&30||xf(i,t,s)}return s}function xf(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Sf(e,t,i,n){t.value=i,t.getSnapshot=n,Tf(t)&&Pf(e)}function wf(e,t,i){return i(function(){Tf(t)&&Pf(e)})}function Tf(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!tt(e,i)}catch{return!0}}function Pf(e){var t=wt(e,1);t!==null&&et(t,e,1,-1)}function pu(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},t.queue=e,e=e.dispatch=_v.bind(null,Y,e),[t.memoizedState,e]}function ts(e,t,i,n){return e={tag:e,create:t,destroy:i,deps:n,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e)),e}function jf(){return We().memoizedState}function Ws(e,t,i,n){var s=st();Y.flags|=e,s.memoizedState=ts(1|t,i,void 0,n===void 0?null:n)}function Fr(e,t,i,n){var s=We();n=n===void 0?null:n;var r=void 0;if(ae!==null){var o=ae.memoizedState;if(r=o.destroy,n!==null&&Al(n,o.deps)){s.memoizedState=ts(t,i,r,n);return}}Y.flags|=e,s.memoizedState=ts(1|t,i,r,n)}function fu(e,t){return Ws(8390656,8,e,t)}function Dl(e,t){return Fr(2048,8,e,t)}function Ef(e,t){return Fr(4,2,e,t)}function Cf(e,t){return Fr(4,4,e,t)}function kf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,i){return i=i!=null?i.concat([e]):null,Fr(4,4,kf.bind(null,t,e),i)}function Ll(){}function Af(e,t){var i=We();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&Al(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function Nf(e,t){var i=We();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&Al(t,n[1])?n[0]:(e=e(),i.memoizedState=[e,t],e)}function Mf(e,t,i){return di&21?(tt(i,t)||(i=zp(),Y.lanes|=i,pi|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=i)}function Vv(e,t){var i=U;U=i!==0&&4>i?i:4,e(!0);var n=xo.transition;xo.transition={};try{e(!1),t()}finally{U=i,xo.transition=n}}function Df(){return We().memoizedState}function Fv(e,t,i){var n=Ot(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Lf(e))Rf(t,i);else if(i=mf(e,t,i,n),i!==null){var s=Te();et(i,e,n,s),zf(i,t,n)}}function _v(e,t,i){var n=Ot(e),s={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))Rf(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,a=r(o,i);if(s.hasEagerState=!0,s.eagerState=a,tt(a,o)){var l=t.interleaved;l===null?(s.next=s,jl(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}i=mf(e,t,s,n),i!==null&&(s=Te(),et(i,e,n,s),zf(i,t,n))}}function Lf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Rf(e,t){Dn=vr=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function zf(e,t,i){if(i&4194240){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,ul(e,i)}}var yr={readContext:Ke,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Ov={readContext:Ke,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:fu,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Ws(4194308,4,kf.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Ws(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ws(4,2,e,t)},useMemo:function(e,t){var i=st();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var n=st();return t=i!==void 0?i(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Fv.bind(null,Y,e),[n.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:pu,useDebugValue:Ll,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=pu(!1),t=e[0];return e=Vv.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var n=Y,s=st();if(Q){if(i===void 0)throw Error(C(407));i=i()}else{if(i=t(),ue===null)throw Error(C(349));di&30||xf(n,t,i)}s.memoizedState=i;var r={value:i,getSnapshot:t};return s.queue=r,fu(wf.bind(null,n,r,e),[e]),n.flags|=2048,ts(9,Sf.bind(null,n,r,i,t),void 0,null),i},useId:function(){var e=st(),t=ue.identifierPrefix;if(Q){var i=ht,n=mt;i=(n&~(1<<32-Je(n)-1)).toString(32)+i,t=":"+t+"R"+i,i=Jn++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Iv++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uv={readContext:Ke,useCallback:Af,useContext:Ke,useEffect:Dl,useImperativeHandle:bf,useInsertionEffect:Ef,useLayoutEffect:Cf,useMemo:Nf,useReducer:So,useRef:jf,useState:function(){return So(es)},useDebugValue:Ll,useDeferredValue:function(e){var t=We();return Mf(t,ae.memoizedState,e)},useTransition:function(){var e=So(es)[0],t=We().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:yf,useId:Df,unstable_isNewReconciler:!1},Bv={readContext:Ke,useCallback:Af,useContext:Ke,useEffect:Dl,useImperativeHandle:bf,useInsertionEffect:Ef,useLayoutEffect:Cf,useMemo:Nf,useReducer:wo,useRef:jf,useState:function(){return wo(es)},useDebugValue:Ll,useDeferredValue:function(e){var t=We();return ae===null?t.memoizedState=e:Mf(t,ae.memoizedState,e)},useTransition:function(){var e=wo(es)[0],t=We().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:yf,useId:Df,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function xa(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:Z({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var _r={isMounted:function(e){return(e=e._reactInternals)?hi(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var n=Te(),s=Ot(e),r=gt(n,s);r.payload=t,i!=null&&(r.callback=i),t=Ft(e,r,s),t!==null&&(et(t,e,s,n),$s(t,e,s))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=Te(),s=Ot(e),r=gt(n,s);r.tag=1,r.payload=t,i!=null&&(r.callback=i),t=Ft(e,r,s),t!==null&&(et(t,e,s,n),$s(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Te(),n=Ot(e),s=gt(i,n);s.tag=2,t!=null&&(s.callback=t),t=Ft(e,s,n),t!==null&&(et(t,e,n,i),$s(t,e,n))}};function mu(e,t,i,n,s,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!Qn(i,n)||!Qn(s,r):!0}function If(e,t,i){var n=!1,s=qt,r=t.contextType;return typeof r=="object"&&r!==null?r=Ke(r):(s=be(t)?ci:Se.current,n=t.contextTypes,r=(n=n!=null)?$i(e,s):qt),t=new t(i,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_r,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=r),t}function hu(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&_r.enqueueReplaceState(t,t.state,null)}function Sa(e,t,i,n){var s=e.stateNode;s.props=i,s.state=e.memoizedState,s.refs={},El(e);var r=t.contextType;typeof r=="object"&&r!==null?s.context=Ke(r):(r=be(t)?ci:Se.current,s.context=$i(e,r)),s.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(xa(e,t,r,i),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&_r.enqueueReplaceState(s,s.state,null),hr(e,i,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Hi(e,t){try{var i="",n=t;do i+=gg(n),n=n.return;while(n);var s=i}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:s,digest:null}}function To(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function wa(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var qv=typeof WeakMap=="function"?WeakMap:Map;function Vf(e,t,i){i=gt(-1,i),i.tag=3,i.payload={element:null};var n=t.value;return i.callback=function(){Sr||(Sr=!0,Ma=n),wa(e,t)},i}function Ff(e,t,i){i=gt(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;i.payload=function(){return n(s)},i.callback=function(){wa(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){wa(e,t),typeof n!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),i}function gu(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new qv;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(i)||(s.add(i),e=ny.bind(null,e,t,i),t.then(e,e))}function vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yu(e,t,i,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=gt(-1,1),t.tag=2,Ft(i,t,1))),i.lanes|=1),e)}var $v=jt.ReactCurrentOwner,Ce=!1;function we(e,t,i,n){t.child=e===null?ff(t,null,i,n):Wi(t,e.child,i,n)}function xu(e,t,i,n,s){i=i.render;var r=t.ref;return Ui(t,s),n=Nl(e,t,i,n,r,s),i=Ml(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Tt(e,t,s)):(Q&&i&&yl(t),t.flags|=1,we(e,t,n,s),t.child)}function Su(e,t,i,n,s){if(e===null){var r=i.type;return typeof r=="function"&&!Ul(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=r,_f(e,t,r,n,s)):(e=Xs(i.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&s)){var o=r.memoizedProps;if(i=i.compare,i=i!==null?i:Qn,i(o,n)&&e.ref===t.ref)return Tt(e,t,s)}return t.flags|=1,e=Ut(r,n),e.ref=t.ref,e.return=t,t.child=e}function _f(e,t,i,n,s){if(e!==null){var r=e.memoizedProps;if(Qn(r,n)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=n=r,(e.lanes&s)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,Tt(e,t,s)}return Ta(e,t,i,n,s)}function Of(e,t,i){var n=t.pendingProps,s=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Mi,Ne),Ne|=i;else{if(!(i&1073741824))return e=r!==null?r.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Mi,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:i,q(Mi,Ne),Ne|=n}else r!==null?(n=r.baseLanes|i,t.memoizedState=null):n=i,q(Mi,Ne),Ne|=n;return we(e,t,s,i),t.child}function Uf(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,i,n,s){var r=be(i)?ci:Se.current;return r=$i(t,r),Ui(t,s),i=Nl(e,t,i,n,r,s),n=Ml(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Tt(e,t,s)):(Q&&n&&yl(t),t.flags|=1,we(e,t,i,s),t.child)}function wu(e,t,i,n,s){if(be(i)){var r=!0;ur(t)}else r=!1;if(Ui(t,s),t.stateNode===null)Qs(e,t),If(t,i,n),Sa(t,i,n,s),n=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=i.contextType;typeof c=="object"&&c!==null?c=Ke(c):(c=be(i)?ci:Se.current,c=$i(t,c));var u=i.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==n||l!==c)&&hu(t,o,n,c),At=!1;var p=t.memoizedState;o.state=p,hr(t,n,o,s),l=t.memoizedState,a!==n||p!==l||ke.current||At?(typeof u=="function"&&(xa(t,i,u,n),l=t.memoizedState),(a=At||mu(t,i,a,n,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=c,n=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,hf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Xe(t.type,a),o.props=c,d=t.pendingProps,p=o.context,l=i.contextType,typeof l=="object"&&l!==null?l=Ke(l):(l=be(i)?ci:Se.current,l=$i(t,l));var v=i.getDerivedStateFromProps;(u=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&hu(t,o,n,l),At=!1,p=t.memoizedState,o.state=p,hr(t,n,o,s);var y=t.memoizedState;a!==d||p!==y||ke.current||At?(typeof v=="function"&&(xa(t,i,v,n),y=t.memoizedState),(c=At||mu(t,i,c,n,p,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),o.props=n,o.state=y,o.context=l,n=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Pa(e,t,i,n,r,s)}function Pa(e,t,i,n,s,r){Uf(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return s&&ou(t,i,!1),Tt(e,t,r);n=t.stateNode,$v.current=t;var a=o&&typeof i.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Wi(t,e.child,null,r),t.child=Wi(t,null,a,r)):we(e,t,a,r),t.memoizedState=n.state,s&&ou(t,i,!0),t.child}function Bf(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),Cl(e,t.containerInfo)}function Tu(e,t,i,n,s){return Ki(),Sl(s),t.flags|=256,we(e,t,i,n),t.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function Ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function qf(e,t,i){var n=t.pendingProps,s=G.current,r=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),q(G,s&1),e===null)return va(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,r?(n=t.mode,r=t.child,o={mode:"hidden",children:o},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Br(o,n,0,null),e=ai(e,n,i,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=Ea(i),t.memoizedState=ja,e):Rl(t,o));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Kv(e,t,o,n,a,s,i);if(r){r=n.fallback,o=t.mode,s=e.child,a=s.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Ut(s,l),n.subtreeFlags=s.subtreeFlags&14680064),a!==null?r=Ut(a,r):(r=ai(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,n=r,r=t.child,o=e.child.memoizedState,o=o===null?Ea(i):{baseLanes:o.baseLanes|i,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~i,t.memoizedState=ja,n}return r=e.child,e=r.sibling,n=Ut(r,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=i),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n}function Rl(e,t){return t=Br({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ms(e,t,i,n){return n!==null&&Sl(n),Wi(t,e.child,null,i),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kv(e,t,i,n,s,r,o){if(i)return t.flags&256?(t.flags&=-257,n=To(Error(C(422))),Ms(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=n.fallback,s=t.mode,n=Br({mode:"visible",children:n.children},s,0,null),r=ai(r,s,o,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,t.mode&1&&Wi(t,e.child,null,o),t.child.memoizedState=Ea(o),t.memoizedState=ja,r);if(!(t.mode&1))return Ms(e,t,o,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var a=n.dgst;return n=a,r=Error(C(419)),n=To(r,n,void 0),Ms(e,t,o,n)}if(a=(o&e.childLanes)!==0,Ce||a){if(n=ue,n!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|o)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,wt(e,s),et(n,e,s,-1))}return Ol(),n=To(Error(C(421))),Ms(e,t,o,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=sy.bind(null,e),s._reactRetry=t,null):(e=r.treeContext,Me=Vt(s.nextSibling),De=t,Q=!0,Ze=null,e!==null&&(Ue[Be++]=mt,Ue[Be++]=ht,Ue[Be++]=ui,mt=e.id,ht=e.overflow,ui=t),t=Rl(t,n.children),t.flags|=4096,t)}function Pu(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ya(e.return,t,i)}function Po(e,t,i,n,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=i,r.tailMode=s)}function $f(e,t,i){var n=t.pendingProps,s=n.revealOrder,r=n.tail;if(we(e,t,n.children,i),n=G.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,i,t);else if(e.tag===19)Pu(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(q(G,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(i=t.child,s=null;i!==null;)e=i.alternate,e!==null&&gr(e)===null&&(s=i),i=i.sibling;i=s,i===null?(s=t.child,t.child=null):(s=i.sibling,i.sibling=null),Po(t,!1,s,i,r);break;case"backwards":for(i=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&gr(e)===null){t.child=s;break}e=s.sibling,s.sibling=i,i=s,s=e}Po(t,!0,i,null,r);break;case"together":Po(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),pi|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,i=Ut(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ut(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Wv(e,t,i){switch(t.tag){case 3:Bf(t),Ki();break;case 5:gf(t);break;case 1:be(t.type)&&ur(t);break;case 4:Cl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;q(fr,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(q(G,G.current&1),t.flags|=128,null):i&t.child.childLanes?qf(e,t,i):(q(G,G.current&1),e=Tt(e,t,i),e!==null?e.sibling:null);q(G,G.current&1);break;case 19:if(n=(i&t.childLanes)!==0,e.flags&128){if(n)return $f(e,t,i);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),q(G,G.current),n)break;return null;case 22:case 23:return t.lanes=0,Of(e,t,i)}return Tt(e,t,i)}var Kf,Ca,Wf,Qf;Kf=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Ca=function(){};Wf=function(e,t,i,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,si(at.current);var r=null;switch(i){case"input":s=Ho(e,s),n=Ho(e,n),r=[];break;case"select":s=Z({},s,{value:void 0}),n=Z({},n,{value:void 0}),r=[];break;case"textarea":s=Yo(e,s),n=Yo(e,n),r=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=lr)}Jo(i,n);var o;i=null;for(c in s)if(!n.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(i||(i={}),i[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(On.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in n){var l=n[c];if(a=s!=null?s[c]:void 0,n.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(i||(i={}),i[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(i||(i={}),i[o]=l[o])}else i||(r||(r=[]),r.push(c,i)),i=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(r=r||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(On.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$("scroll",e),r||a===l||(r=[])):(r=r||[]).push(c,l))}i&&(r=r||[]).push("style",i);var c=r;(t.updateQueue=c)&&(t.flags|=4)}};Qf=function(e,t,i,n){i!==n&&(t.flags|=4)};function dn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var s=e.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function Qv(e,t,i){var n=t.pendingProps;switch(xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return be(t.type)&&cr(),ge(t),null;case 3:return n=t.stateNode,Qi(),K(ke),K(Se),bl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(As(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Ra(Ze),Ze=null))),Ca(e,t),ge(t),null;case 5:kl(t);var s=si(Zn.current);if(i=t.type,e!==null&&t.stateNode!=null)Wf(e,t,i,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return ge(t),null}if(e=si(at.current),As(t)){n=t.stateNode,i=t.type;var r=t.memoizedProps;switch(n[rt]=t,n[Xn]=r,e=(t.mode&1)!==0,i){case"dialog":$("cancel",n),$("close",n);break;case"iframe":case"object":case"embed":$("load",n);break;case"video":case"audio":for(s=0;s<Pn.length;s++)$(Pn[s],n);break;case"source":$("error",n);break;case"img":case"image":case"link":$("error",n),$("load",n);break;case"details":$("toggle",n);break;case"input":Dc(n,r),$("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},$("invalid",n);break;case"textarea":Rc(n,r),$("invalid",n)}Jo(i,r),s=null;for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];o==="children"?typeof a=="string"?n.textContent!==a&&(r.suppressHydrationWarning!==!0&&bs(n.textContent,a,e),s=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(r.suppressHydrationWarning!==!0&&bs(n.textContent,a,e),s=["children",""+a]):On.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$("scroll",n)}switch(i){case"input":Ss(n),Lc(n,r,!0);break;case"textarea":Ss(n),zc(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=lr)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sp(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(i,{is:n.is}):(e=o.createElement(i),i==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,i),e[rt]=t,e[Xn]=n,Kf(e,t,!1,!1),t.stateNode=e;e:{switch(o=ea(i,n),i){case"dialog":$("cancel",e),$("close",e),s=n;break;case"iframe":case"object":case"embed":$("load",e),s=n;break;case"video":case"audio":for(s=0;s<Pn.length;s++)$(Pn[s],e);s=n;break;case"source":$("error",e),s=n;break;case"img":case"image":case"link":$("error",e),$("load",e),s=n;break;case"details":$("toggle",e),s=n;break;case"input":Dc(e,n),s=Ho(e,n),$("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=Z({},n,{value:void 0}),$("invalid",e);break;case"textarea":Rc(e,n),s=Yo(e,n),$("invalid",e);break;default:s=n}Jo(i,s),a=s;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];r==="style"?Pp(e,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wp(e,l)):r==="children"?typeof l=="string"?(i!=="textarea"||l!=="")&&Un(e,l):typeof l=="number"&&Un(e,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(On.hasOwnProperty(r)?l!=null&&r==="onScroll"&&$("scroll",e):l!=null&&sl(e,r,l,o))}switch(i){case"input":Ss(e),Lc(e,n,!1);break;case"textarea":Ss(e),zc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Bt(n.value));break;case"select":e.multiple=!!n.multiple,r=n.value,r!=null?Vi(e,!!n.multiple,r,!1):n.defaultValue!=null&&Vi(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=lr)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Qf(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(i=si(Zn.current),si(at.current),As(t)){if(n=t.stateNode,i=t.memoizedProps,n[rt]=t,(r=n.nodeValue!==i)&&(e=De,e!==null))switch(e.tag){case 3:bs(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bs(n.nodeValue,i,(e.mode&1)!==0)}r&&(t.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[rt]=t,t.stateNode=n}return ge(t),null;case 13:if(K(G),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Me!==null&&t.mode&1&&!(t.flags&128))df(),Ki(),t.flags|=98560,r=!1;else if(r=As(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(C(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(C(317));r[rt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),r=!1}else Ze!==null&&(Ra(Ze),Ze=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?le===0&&(le=3):Ol())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Qi(),Ca(e,t),e===null&&Hn(t.stateNode.containerInfo),ge(t),null;case 10:return Pl(t.type._context),ge(t),null;case 17:return be(t.type)&&cr(),ge(t),null;case 19:if(K(G),r=t.memoizedState,r===null)return ge(t),null;if(n=(t.flags&128)!==0,o=r.rendering,o===null)if(n)dn(r,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=gr(e),o!==null){for(t.flags|=128,dn(r,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=i,i=t.child;i!==null;)r=i,e=n,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return q(G,G.current&1|2),t.child}e=e.sibling}r.tail!==null&&ne()>Gi&&(t.flags|=128,n=!0,dn(r,!1),t.lanes=4194304)}else{if(!n)if(e=gr(o),e!==null){if(t.flags|=128,n=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),dn(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Q)return ge(t),null}else 2*ne()-r.renderingStartTime>Gi&&i!==1073741824&&(t.flags|=128,n=!0,dn(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(i=r.last,i!==null?i.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ne(),t.sibling=null,i=G.current,q(G,n?i&1|2:i&1),t):(ge(t),null);case 22:case 23:return _l(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ne&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Hv(e,t){switch(xl(t),t.tag){case 1:return be(t.type)&&cr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(),K(ke),K(Se),bl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kl(t),null;case 13:if(K(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(G),null;case 4:return Qi(),null;case 10:return Pl(t.type._context),null;case 22:case 23:return _l(),null;case 24:return null;default:return null}}var Ds=!1,ye=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,N=null;function Ni(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){ee(e,t,n)}else i.current=null}function ka(e,t,i){try{i()}catch(n){ee(e,t,n)}}var ju=!1;function Xv(e,t){if(ua=rr,e=Yp(),vl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var s=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var v;d!==i||s!==0&&d.nodeType!==3||(a=o+s),d!==r||n!==0&&d.nodeType!==3||(l=o+n),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===i&&++c===s&&(a=o),p===r&&++u===n&&(l=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}i=a===-1||l===-1?null:{start:a,end:l}}else i=null}i=i||{start:0,end:0}}else i=null;for(da={focusedElem:e,selectionRange:i},rr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,T=y.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:Xe(t.type,x),T);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=ju,ju=!1,y}function Ln(e,t,i){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var r=s.destroy;s.destroy=void 0,r!==void 0&&ka(t,i,r)}s=s.next}while(s!==n)}}function Or(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==t)}}function ba(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Hf(e){var t=e.alternate;t!==null&&(e.alternate=null,Hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[Xn],delete t[ma],delete t[Dv],delete t[Lv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Aa(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=lr));else if(n!==4&&(e=e.child,e!==null))for(Aa(e,t,i),e=e.sibling;e!==null;)Aa(e,t,i),e=e.sibling}function Na(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Na(e,t,i),e=e.sibling;e!==null;)Na(e,t,i),e=e.sibling}var de=null,Ye=!1;function Et(e,t,i){for(i=i.child;i!==null;)Xf(e,t,i),i=i.sibling}function Xf(e,t,i){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Dr,i)}catch{}switch(i.tag){case 5:ye||Ni(i,t);case 6:var n=de,s=Ye;de=null,Et(e,t,i),de=n,Ye=s,de!==null&&(Ye?(e=de,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):de.removeChild(i.stateNode));break;case 18:de!==null&&(Ye?(e=de,i=i.stateNode,e.nodeType===8?go(e.parentNode,i):e.nodeType===1&&go(e,i),Kn(e)):go(de,i.stateNode));break;case 4:n=de,s=Ye,de=i.stateNode.containerInfo,Ye=!0,Et(e,t,i),de=n,Ye=s;break;case 0:case 11:case 14:case 15:if(!ye&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var r=s,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&ka(i,t,o),s=s.next}while(s!==n)}Et(e,t,i);break;case 1:if(!ye&&(Ni(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(a){ee(i,t,a)}Et(e,t,i);break;case 21:Et(e,t,i);break;case 22:i.mode&1?(ye=(n=ye)||i.memoizedState!==null,Et(e,t,i),ye=n):Et(e,t,i);break;default:Et(e,t,i)}}function Cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Gv),t.forEach(function(n){var s=ry.bind(null,e,n);i.has(n)||(i.add(n),n.then(s,s))})}}function He(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var s=i[n];try{var r=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Ye=!1;break e;case 3:de=a.stateNode.containerInfo,Ye=!0;break e;case 4:de=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(de===null)throw Error(C(160));Xf(r,o,s),de=null,Ye=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){ee(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yf(t,e),t=t.sibling}function Yf(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),nt(e),n&4){try{Ln(3,e,e.return),Or(3,e)}catch(x){ee(e,e.return,x)}try{Ln(5,e,e.return)}catch(x){ee(e,e.return,x)}}break;case 1:He(t,e),nt(e),n&512&&i!==null&&Ni(i,i.return);break;case 5:if(He(t,e),nt(e),n&512&&i!==null&&Ni(i,i.return),e.flags&32){var s=e.stateNode;try{Un(s,"")}catch(x){ee(e,e.return,x)}}if(n&4&&(s=e.stateNode,s!=null)){var r=e.memoizedProps,o=i!==null?i.memoizedProps:r,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&r.type==="radio"&&r.name!=null&&yp(s,r),ea(a,o);var c=ea(a,r);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Pp(s,d):u==="dangerouslySetInnerHTML"?wp(s,d):u==="children"?Un(s,d):sl(s,u,d,c)}switch(a){case"input":Go(s,r);break;case"textarea":xp(s,r);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var v=r.value;v!=null?Vi(s,!!r.multiple,v,!1):p!==!!r.multiple&&(r.defaultValue!=null?Vi(s,!!r.multiple,r.defaultValue,!0):Vi(s,!!r.multiple,r.multiple?[]:"",!1))}s[Xn]=r}catch(x){ee(e,e.return,x)}}break;case 6:if(He(t,e),nt(e),n&4){if(e.stateNode===null)throw Error(C(162));s=e.stateNode,r=e.memoizedProps;try{s.nodeValue=r}catch(x){ee(e,e.return,x)}}break;case 3:if(He(t,e),nt(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(x){ee(e,e.return,x)}break;case 4:He(t,e),nt(e);break;case 13:He(t,e),nt(e),s=e.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(Vl=ne())),n&4&&Cu(e);break;case 22:if(u=i!==null&&i.memoizedState!==null,e.mode&1?(ye=(c=ye)||u,He(t,e),ye=c):He(t,e),nt(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(N=e,u=e.child;u!==null;){for(d=N=u;N!==null;){switch(p=N,v=p.child,p.tag){case 0:case 11:case 14:case 15:Ln(4,p,p.return);break;case 1:Ni(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){n=p,i=p.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ee(n,i,x)}}break;case 5:Ni(p,p.return);break;case 22:if(p.memoizedState!==null){bu(d);continue}}v!==null?(v.return=p,N=v):bu(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{s=d.stateNode,c?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tp("display",o))}catch(x){ee(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ee(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:He(t,e),nt(e),n&4&&Cu(e);break;case 21:break;default:He(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Gf(i)){var n=i;break e}i=i.return}throw Error(C(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Un(s,""),n.flags&=-33);var r=Eu(e);Na(e,r,s);break;case 3:case 4:var o=n.stateNode.containerInfo,a=Eu(e);Aa(e,a,o);break;default:throw Error(C(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yv(e,t,i){N=e,Zf(e)}function Zf(e,t,i){for(var n=(e.mode&1)!==0;N!==null;){var s=N,r=s.child;if(s.tag===22&&n){var o=s.memoizedState!==null||Ds;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||ye;a=Ds;var c=ye;if(Ds=o,(ye=l)&&!c)for(N=s;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Au(s):l!==null?(l.return=o,N=l):Au(s);for(;r!==null;)N=r,Zf(r),r=r.sibling;N=s,Ds=a,ye=c}ku(e)}else s.subtreeFlags&8772&&r!==null?(r.return=s,N=r):ku(e)}}function ku(e){for(;N!==null;){var t=N;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Or(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ye)if(i===null)n.componentDidMount();else{var s=t.elementType===t.type?i.memoizedProps:Xe(t.type,i.memoizedProps);n.componentDidUpdate(s,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&du(t,r,n);break;case 3:var o=t.updateQueue;if(o!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}du(t,o,i)}break;case 5:var a=t.stateNode;if(i===null&&t.flags&4){i=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&i.focus();break;case"img":l.src&&(i.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Kn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||t.flags&512&&ba(t)}catch(p){ee(t,t.return,p)}}if(t===e){N=null;break}if(i=t.sibling,i!==null){i.return=t.return,N=i;break}N=t.return}}function bu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var i=t.sibling;if(i!==null){i.return=t.return,N=i;break}N=t.return}}function Au(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Or(4,t)}catch(l){ee(t,i,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(l){ee(t,s,l)}}var r=t.return;try{ba(t)}catch(l){ee(t,r,l)}break;case 5:var o=t.return;try{ba(t)}catch(l){ee(t,o,l)}}}catch(l){ee(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Zv=Math.ceil,xr=jt.ReactCurrentDispatcher,zl=jt.ReactCurrentOwner,$e=jt.ReactCurrentBatchConfig,_=0,ue=null,re=null,fe=0,Ne=0,Mi=Qt(0),le=0,is=null,pi=0,Ur=0,Il=0,Rn=null,Ee=null,Vl=0,Gi=1/0,pt=null,Sr=!1,Ma=null,_t=null,Ls=!1,Lt=null,wr=0,zn=0,Da=null,Hs=-1,Gs=0;function Te(){return _&6?ne():Hs!==-1?Hs:Hs=ne()}function Ot(e){return e.mode&1?_&2&&fe!==0?fe&-fe:zv.transition!==null?(Gs===0&&(Gs=zp()),Gs):(e=U,e!==0||(e=window.event,e=e===void 0?16:Bp(e.type)),e):1}function et(e,t,i,n){if(50<zn)throw zn=0,Da=null,Error(C(185));cs(e,i,n),(!(_&2)||e!==ue)&&(e===ue&&(!(_&2)&&(Ur|=i),le===4&&Mt(e,fe)),Ae(e,n),i===1&&_===0&&!(t.mode&1)&&(Gi=ne()+500,Vr&&Ht()))}function Ae(e,t){var i=e.callbackNode;zg(e,t);var n=sr(e,e===ue?fe:0);if(n===0)i!==null&&Fc(i),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(i!=null&&Fc(i),t===1)e.tag===0?Rv(Nu.bind(null,e)):lf(Nu.bind(null,e)),Nv(function(){!(_&6)&&Ht()}),i=null;else{switch(Ip(n)){case 1:i=cl;break;case 4:i=Lp;break;case 16:i=nr;break;case 536870912:i=Rp;break;default:i=nr}i=om(i,Jf.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Jf(e,t){if(Hs=-1,Gs=0,_&6)throw Error(C(327));var i=e.callbackNode;if(Bi()&&e.callbackNode!==i)return null;var n=sr(e,e===ue?fe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Tr(e,n);else{t=n;var s=_;_|=2;var r=tm();(ue!==e||fe!==t)&&(pt=null,Gi=ne()+500,oi(e,t));do try{ty();break}catch(a){em(e,a)}while(!0);Tl(),xr.current=r,_=s,re!==null?t=0:(ue=null,fe=0,t=le)}if(t!==0){if(t===2&&(s=ra(e),s!==0&&(n=s,t=La(e,s))),t===1)throw i=is,oi(e,0),Mt(e,n),Ae(e,ne()),i;if(t===6)Mt(e,n);else{if(s=e.current.alternate,!(n&30)&&!Jv(s)&&(t=Tr(e,n),t===2&&(r=ra(e),r!==0&&(n=r,t=La(e,r))),t===1))throw i=is,oi(e,0),Mt(e,n),Ae(e,ne()),i;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:Jt(e,Ee,pt);break;case 3:if(Mt(e,n),(n&130023424)===n&&(t=Vl+500-ne(),10<t)){if(sr(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){Te(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=fa(Jt.bind(null,e,Ee,pt),t);break}Jt(e,Ee,pt);break;case 4:if(Mt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var o=31-Je(n);r=1<<o,o=t[o],o>s&&(s=o),n&=~r}if(n=s,n=ne()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Zv(n/1960))-n,10<n){e.timeoutHandle=fa(Jt.bind(null,e,Ee,pt),n);break}Jt(e,Ee,pt);break;case 5:Jt(e,Ee,pt);break;default:throw Error(C(329))}}}return Ae(e,ne()),e.callbackNode===i?Jf.bind(null,e):null}function La(e,t){var i=Rn;return e.current.memoizedState.isDehydrated&&(oi(e,t).flags|=256),e=Tr(e,t),e!==2&&(t=Ee,Ee=i,t!==null&&Ra(t)),e}function Ra(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Jv(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var s=i[n],r=s.getSnapshot;s=s.value;try{if(!tt(r(),s))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~Il,t&=~Ur,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Je(t),n=1<<i;e[i]=-1,t&=~n}}function Nu(e){if(_&6)throw Error(C(327));Bi();var t=sr(e,0);if(!(t&1))return Ae(e,ne()),null;var i=Tr(e,t);if(e.tag!==0&&i===2){var n=ra(e);n!==0&&(t=n,i=La(e,n))}if(i===1)throw i=is,oi(e,0),Mt(e,t),Ae(e,ne()),i;if(i===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Ee,pt),Ae(e,ne()),null}function Fl(e,t){var i=_;_|=1;try{return e(t)}finally{_=i,_===0&&(Gi=ne()+500,Vr&&Ht())}}function fi(e){Lt!==null&&Lt.tag===0&&!(_&6)&&Bi();var t=_;_|=1;var i=$e.transition,n=U;try{if($e.transition=null,U=1,e)return e()}finally{U=n,$e.transition=i,_=t,!(_&6)&&Ht()}}function _l(){Ne=Mi.current,K(Mi)}function oi(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Av(i)),re!==null)for(i=re.return;i!==null;){var n=i;switch(xl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&cr();break;case 3:Qi(),K(ke),K(Se),bl();break;case 5:kl(n);break;case 4:Qi();break;case 13:K(G);break;case 19:K(G);break;case 10:Pl(n.type._context);break;case 22:case 23:_l()}i=i.return}if(ue=e,re=e=Ut(e.current,null),fe=Ne=t,le=0,is=null,Il=Ur=pi=0,Ee=Rn=null,ni!==null){for(t=0;t<ni.length;t++)if(i=ni[t],n=i.interleaved,n!==null){i.interleaved=null;var s=n.next,r=i.pending;if(r!==null){var o=r.next;r.next=s,n.next=o}i.pending=n}ni=null}return e}function em(e,t){do{var i=re;try{if(Tl(),Ks.current=yr,vr){for(var n=Y.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}vr=!1}if(di=0,ce=ae=Y=null,Dn=!1,Jn=0,zl.current=null,i===null||i.return===null){le=1,is=t,re=null;break}e:{var r=e,o=i.return,a=i,l=t;if(t=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=vu(o);if(v!==null){v.flags&=-257,yu(v,o,a,r,t),v.mode&1&&gu(r,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){gu(r,c,t),Ol();break e}l=Error(C(426))}}else if(Q&&a.mode&1){var T=vu(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),yu(T,o,a,r,t),Sl(Hi(l,a));break e}}r=l=Hi(l,a),le!==4&&(le=2),Rn===null?Rn=[r]:Rn.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var m=Vf(r,l,t);uu(r,m);break e;case 1:a=l;var f=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(_t===null||!_t.has(h)))){r.flags|=65536,t&=-t,r.lanes|=t;var S=Ff(r,a,t);uu(r,S);break e}}r=r.return}while(r!==null)}nm(i)}catch(w){t=w,re===i&&i!==null&&(re=i=i.return);continue}break}while(!0)}function tm(){var e=xr.current;return xr.current=yr,e===null?yr:e}function Ol(){(le===0||le===3||le===2)&&(le=4),ue===null||!(pi&268435455)&&!(Ur&268435455)||Mt(ue,fe)}function Tr(e,t){var i=_;_|=2;var n=tm();(ue!==e||fe!==t)&&(pt=null,oi(e,t));do try{ey();break}catch(s){em(e,s)}while(!0);if(Tl(),_=i,xr.current=n,re!==null)throw Error(C(261));return ue=null,fe=0,le}function ey(){for(;re!==null;)im(re)}function ty(){for(;re!==null&&!Cg();)im(re)}function im(e){var t=rm(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?nm(e):re=t,zl.current=null}function nm(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=Hv(i,t),i!==null){i.flags&=32767,re=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,re=null;return}}else if(i=Qv(i,t,Ne),i!==null){re=i;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);le===0&&(le=5)}function Jt(e,t,i){var n=U,s=$e.transition;try{$e.transition=null,U=1,iy(e,t,i,n)}finally{$e.transition=s,U=n}return null}function iy(e,t,i,n){do Bi();while(Lt!==null);if(_&6)throw Error(C(327));i=e.finishedWork;var s=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var r=i.lanes|i.childLanes;if(Ig(e,r),e===ue&&(re=ue=null,fe=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Ls||(Ls=!0,om(nr,function(){return Bi(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=$e.transition,$e.transition=null;var o=U;U=1;var a=_;_|=4,zl.current=null,Xv(e,i),Yf(i,e),Tv(da),rr=!!ua,da=ua=null,e.current=i,Yv(i),kg(),_=a,U=o,$e.transition=r}else e.current=i;if(Ls&&(Ls=!1,Lt=e,wr=s),r=e.pendingLanes,r===0&&(_t=null),Ng(i.stateNode),Ae(e,ne()),t!==null)for(n=e.onRecoverableError,i=0;i<t.length;i++)s=t[i],n(s.value,{componentStack:s.stack,digest:s.digest});if(Sr)throw Sr=!1,e=Ma,Ma=null,e;return wr&1&&e.tag!==0&&Bi(),r=e.pendingLanes,r&1?e===Da?zn++:(zn=0,Da=e):zn=0,Ht(),null}function Bi(){if(Lt!==null){var e=Ip(wr),t=$e.transition,i=U;try{if($e.transition=null,U=16>e?16:e,Lt===null)var n=!1;else{if(e=Lt,Lt=null,wr=0,_&6)throw Error(C(331));var s=_;for(_|=4,N=e.current;N!==null;){var r=N,o=r.child;if(N.flags&16){var a=r.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var u=N;switch(u.tag){case 0:case 11:case 15:Ln(8,u,r)}var d=u.child;if(d!==null)d.return=u,N=d;else for(;N!==null;){u=N;var p=u.sibling,v=u.return;if(Hf(u),u===c){N=null;break}if(p!==null){p.return=v,N=p;break}N=v}}}var y=r.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}N=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,N=o;else e:for(;N!==null;){if(r=N,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Ln(9,r,r.return)}var m=r.sibling;if(m!==null){m.return=r.return,N=m;break e}N=r.return}}var f=e.current;for(N=f;N!==null;){o=N;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,N=h;else e:for(o=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Or(9,a)}}catch(w){ee(a,a.return,w)}if(a===o){N=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,N=S;break e}N=a.return}}if(_=s,Ht(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Dr,e)}catch{}n=!0}return n}finally{U=i,$e.transition=t}}return!1}function Mu(e,t,i){t=Hi(i,t),t=Vf(e,t,1),e=Ft(e,t,1),t=Te(),e!==null&&(cs(e,1,t),Ae(e,t))}function ee(e,t,i){if(e.tag===3)Mu(e,e,i);else for(;t!==null;){if(t.tag===3){Mu(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_t===null||!_t.has(n))){e=Hi(i,e),e=Ff(t,e,1),t=Ft(t,e,1),e=Te(),t!==null&&(cs(t,1,e),Ae(t,e));break}}t=t.return}}function ny(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&i,ue===e&&(fe&i)===i&&(le===4||le===3&&(fe&130023424)===fe&&500>ne()-Vl?oi(e,0):Il|=i),Ae(e,t)}function sm(e,t){t===0&&(e.mode&1?(t=Ps,Ps<<=1,!(Ps&130023424)&&(Ps=4194304)):t=1);var i=Te();e=wt(e,t),e!==null&&(cs(e,t,i),Ae(e,i))}function sy(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),sm(e,i)}function ry(e,t){var i=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(i=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),sm(e,i)}var rm;rm=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ce=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return Ce=!1,Wv(e,t,i);Ce=!!(e.flags&131072)}else Ce=!1,Q&&t.flags&1048576&&cf(t,pr,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Qs(e,t),e=t.pendingProps;var s=$i(t,Se.current);Ui(t,i),s=Nl(null,t,n,e,s,i);var r=Ml();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(n)?(r=!0,ur(t)):r=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,El(t),s.updater=_r,t.stateNode=s,s._reactInternals=t,Sa(t,n,e,i),t=Pa(null,t,n,!0,r,i)):(t.tag=0,Q&&r&&yl(t),we(null,t,s,i),t=t.child),t;case 16:n=t.elementType;e:{switch(Qs(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=ay(n),e=Xe(n,e),s){case 0:t=Ta(null,t,n,e,i);break e;case 1:t=wu(null,t,n,e,i);break e;case 11:t=xu(null,t,n,e,i);break e;case 14:t=Su(null,t,n,Xe(n.type,e),i);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Xe(n,s),Ta(e,t,n,s,i);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Xe(n,s),wu(e,t,n,s,i);case 3:e:{if(Bf(t),e===null)throw Error(C(387));n=t.pendingProps,r=t.memoizedState,s=r.element,hf(e,t),hr(t,n,null,i);var o=t.memoizedState;if(n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){s=Hi(Error(C(423)),t),t=Tu(e,t,n,i,s);break e}else if(n!==s){s=Hi(Error(C(424)),t),t=Tu(e,t,n,i,s);break e}else for(Me=Vt(t.stateNode.containerInfo.firstChild),De=t,Q=!0,Ze=null,i=ff(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ki(),n===s){t=Tt(e,t,i);break e}we(e,t,n,i)}t=t.child}return t;case 5:return gf(t),e===null&&va(t),n=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,o=s.children,pa(n,s)?o=null:r!==null&&pa(n,r)&&(t.flags|=32),Uf(e,t),we(e,t,o,i),t.child;case 6:return e===null&&va(t),null;case 13:return qf(e,t,i);case 4:return Cl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Wi(t,null,n,i):we(e,t,n,i),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Xe(n,s),xu(e,t,n,s,i);case 7:return we(e,t,t.pendingProps,i),t.child;case 8:return we(e,t,t.pendingProps.children,i),t.child;case 12:return we(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,r=t.memoizedProps,o=s.value,q(fr,n._currentValue),n._currentValue=o,r!==null)if(tt(r.value,o)){if(r.children===s.children&&!ke.current){t=Tt(e,t,i);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var a=r.dependencies;if(a!==null){o=r.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(r.tag===1){l=gt(-1,i&-i),l.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}r.lanes|=i,l=r.alternate,l!==null&&(l.lanes|=i),ya(r.return,i,t),a.lanes|=i;break}l=l.next}}else if(r.tag===10)o=r.type===t.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(C(341));o.lanes|=i,a=o.alternate,a!==null&&(a.lanes|=i),ya(o,i,t),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===t){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}we(e,t,s.children,i),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,Ui(t,i),s=Ke(s),n=n(s),t.flags|=1,we(e,t,n,i),t.child;case 14:return n=t.type,s=Xe(n,t.pendingProps),s=Xe(n.type,s),Su(e,t,n,s,i);case 15:return _f(e,t,t.type,t.pendingProps,i);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Xe(n,s),Qs(e,t),t.tag=1,be(n)?(e=!0,ur(t)):e=!1,Ui(t,i),If(t,n,s),Sa(t,n,s,i),Pa(null,t,n,!0,e,i);case 19:return $f(e,t,i);case 22:return Of(e,t,i)}throw Error(C(156,t.tag))};function om(e,t){return Dp(e,t)}function oy(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,i,n){return new oy(e,t,i,n)}function Ul(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ay(e){if(typeof e=="function")return Ul(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ol)return 11;if(e===al)return 14}return 2}function Ut(e,t){var i=e.alternate;return i===null?(i=qe(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Xs(e,t,i,n,s,r){var o=2;if(n=e,typeof e=="function")Ul(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case wi:return ai(i.children,s,r,t);case rl:o=8,s|=8;break;case $o:return e=qe(12,i,t,s|2),e.elementType=$o,e.lanes=r,e;case Ko:return e=qe(13,i,t,s),e.elementType=Ko,e.lanes=r,e;case Wo:return e=qe(19,i,t,s),e.elementType=Wo,e.lanes=r,e;case hp:return Br(i,s,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fp:o=10;break e;case mp:o=9;break e;case ol:o=11;break e;case al:o=14;break e;case bt:o=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=qe(o,i,t,s),t.elementType=e,t.type=n,t.lanes=r,t}function ai(e,t,i,n){return e=qe(7,e,n,t),e.lanes=i,e}function Br(e,t,i,n){return e=qe(22,e,n,t),e.elementType=hp,e.lanes=i,e.stateNode={isHidden:!1},e}function jo(e,t,i){return e=qe(6,e,null,t),e.lanes=i,e}function Eo(e,t,i){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ly(e,t,i,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=so(0),this.expirationTimes=so(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Bl(e,t,i,n,s,r,o,a,l){return e=new ly(e,t,i,a,l),t===1?(t=1,r===!0&&(t|=8)):t=0,r=qe(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},El(r),e}function cy(e,t,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:n==null?null:""+n,children:e,containerInfo:t,implementation:i}}function am(e){if(!e)return qt;e=e._reactInternals;e:{if(hi(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var i=e.type;if(be(i))return af(e,i,t)}return t}function lm(e,t,i,n,s,r,o,a,l){return e=Bl(i,n,!0,e,s,r,o,a,l),e.context=am(null),i=e.current,n=Te(),s=Ot(i),r=gt(n,s),r.callback=t??null,Ft(i,r,s),e.current.lanes=s,cs(e,s,n),Ae(e,n),e}function qr(e,t,i,n){var s=t.current,r=Te(),o=Ot(s);return i=am(i),t.context===null?t.context=i:t.pendingContext=i,t=gt(r,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ft(s,t,o),e!==null&&(et(e,s,o,r),$s(e,s,o)),o}function Pr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function ql(e,t){Du(e,t),(e=e.alternate)&&Du(e,t)}function uy(){return null}var cm=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}$r.prototype.render=$l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));qr(e,t,null,null)};$r.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fi(function(){qr(null,e,null,null)}),t[St]=null}};function $r(e){this._internalRoot=e}$r.prototype.unstable_scheduleHydration=function(e){if(e){var t=_p();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Nt.length&&t!==0&&t<Nt[i].priority;i++);Nt.splice(i,0,e),i===0&&Up(e)}};function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function dy(e,t,i,n,s){if(s){if(typeof n=="function"){var r=n;n=function(){var c=Pr(o);r.call(c)}}var o=lm(t,n,e,0,null,!1,!1,"",Lu);return e._reactRootContainer=o,e[St]=o.current,Hn(e.nodeType===8?e.parentNode:e),fi(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var a=n;n=function(){var c=Pr(l);a.call(c)}}var l=Bl(e,0,!1,null,null,!1,!1,"",Lu);return e._reactRootContainer=l,e[St]=l.current,Hn(e.nodeType===8?e.parentNode:e),fi(function(){qr(t,l,i,n)}),l}function Wr(e,t,i,n,s){var r=i._reactRootContainer;if(r){var o=r;if(typeof s=="function"){var a=s;s=function(){var l=Pr(o);a.call(l)}}qr(t,o,e,s)}else o=dy(i,t,e,s,n);return Pr(o)}Vp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Tn(t.pendingLanes);i!==0&&(ul(t,i|1),Ae(t,ne()),!(_&6)&&(Gi=ne()+500,Ht()))}break;case 13:fi(function(){var n=wt(e,1);if(n!==null){var s=Te();et(n,e,1,s)}}),ql(e,1)}};dl=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var i=Te();et(t,e,134217728,i)}ql(e,134217728)}};Fp=function(e){if(e.tag===13){var t=Ot(e),i=wt(e,t);if(i!==null){var n=Te();et(i,e,t,n)}ql(e,t)}};_p=function(){return U};Op=function(e,t){var i=U;try{return U=e,t()}finally{U=i}};ia=function(e,t,i){switch(t){case"input":if(Go(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var s=Ir(n);if(!s)throw Error(C(90));vp(n),Go(n,s)}}}break;case"textarea":xp(e,i);break;case"select":t=i.value,t!=null&&Vi(e,!!i.multiple,t,!1)}};Cp=Fl;kp=fi;var py={usingClientEntryPoint:!1,Events:[ds,Ei,Ir,jp,Ep,Fl]},pn={findFiberByHostInstance:ii,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:pn.bundleType,version:pn.version,rendererPackageName:pn.rendererPackageName,rendererConfig:pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Np(e),e===null?null:e.stateNode},findFiberByHostInstance:pn.findFiberByHostInstance||uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{Dr=Rs.inject(fy),ot=Rs}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;Ie.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kl(t))throw Error(C(200));return cy(e,t,null,i)};Ie.createRoot=function(e,t){if(!Kl(e))throw Error(C(299));var i=!1,n="",s=cm;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Bl(e,1,!1,null,null,i,!1,n,s),e[St]=t.current,Hn(e.nodeType===8?e.parentNode:e),new $l(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Np(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return fi(e)};Ie.hydrate=function(e,t,i){if(!Kr(t))throw Error(C(200));return Wr(null,e,t,!0,i)};Ie.hydrateRoot=function(e,t,i){if(!Kl(e))throw Error(C(405));var n=i!=null&&i.hydratedSources||null,s=!1,r="",o=cm;if(i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(o=i.onRecoverableError)),t=lm(t,null,e,1,i??null,s,!1,r,o),e[St]=t.current,Hn(e),n)for(e=0;e<n.length;e++)i=n[e],s=i._getVersion,s=s(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,s]:t.mutableSourceEagerHydrationData.push(i,s);return new $r(t)};Ie.render=function(e,t,i){if(!Kr(t))throw Error(C(200));return Wr(null,e,t,!1,i)};Ie.unmountComponentAtNode=function(e){if(!Kr(e))throw Error(C(40));return e._reactRootContainer?(fi(function(){Wr(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Ie.unstable_batchedUpdates=Fl;Ie.unstable_renderSubtreeIntoContainer=function(e,t,i,n){if(!Kr(i))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Wr(e,t,i,!1,n)};Ie.version="18.3.1-next-f1338f8080-20240426";function um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um)}catch(e){console.error(e)}}um(),cp.exports=Ie;var my=cp.exports,dm,Ru=my;dm=Ru.createRoot,Ru.hydrateRoot;const Wl=A.createContext({});function Ql(e){const t=A.useRef(null);return t.current===null&&(t.current=e()),t.current}const Qr=A.createContext(null),Hl=A.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class hy extends A.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=i.offsetHeight||0,n.width=i.offsetWidth||0,n.top=i.offsetTop,n.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function gy({children:e,isPresent:t}){const i=A.useId(),n=A.useRef(null),s=A.useRef({width:0,height:0,top:0,left:0}),{nonce:r}=A.useContext(Hl);return A.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=s.current;if(t||!n.current||!o||!a)return;n.current.dataset.motionPopId=i;const u=document.createElement("style");return r&&(u.nonce=r),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),g.jsx(hy,{isPresent:t,childRef:n,sizeRef:s,children:A.cloneElement(e,{ref:n})})}const vy=({children:e,initial:t,isPresent:i,onExitComplete:n,custom:s,presenceAffectsLayout:r,mode:o})=>{const a=Ql(yy),l=A.useId(),c=A.useCallback(d=>{a.set(d,!0);for(const p of a.values())if(!p)return;n&&n()},[a,n]),u=A.useMemo(()=>({id:l,initial:t,isPresent:i,custom:s,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),r?[Math.random(),c]:[i,c]);return A.useMemo(()=>{a.forEach((d,p)=>a.set(p,!1))},[i]),A.useEffect(()=>{!i&&!a.size&&n&&n()},[i]),o==="popLayout"&&(e=g.jsx(gy,{isPresent:i,children:e})),g.jsx(Qr.Provider,{value:u,children:e})};function yy(){return new Map}function pm(e=!0){const t=A.useContext(Qr);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:n,register:s}=t,r=A.useId();A.useEffect(()=>{e&&s(r)},[e]);const o=A.useCallback(()=>e&&n&&n(r),[r,n,e]);return!i&&n?[!1,o]:[!0]}const zs=e=>e.key||"";function zu(e){const t=[];return A.Children.forEach(e,i=>{A.isValidElement(i)&&t.push(i)}),t}const Gl=typeof window<"u",fm=Gl?A.useLayoutEffect:A.useEffect,xy=({children:e,custom:t,initial:i=!0,onExitComplete:n,presenceAffectsLayout:s=!0,mode:r="sync",propagate:o=!1})=>{const[a,l]=pm(o),c=A.useMemo(()=>zu(e),[e]),u=o&&!a?[]:c.map(zs),d=A.useRef(!0),p=A.useRef(c),v=Ql(()=>new Map),[y,x]=A.useState(c),[T,m]=A.useState(c);fm(()=>{d.current=!1,p.current=c;for(let S=0;S<T.length;S++){const w=zs(T[S]);u.includes(w)?v.delete(w):v.get(w)!==!0&&v.set(w,!1)}},[T,u.length,u.join("-")]);const f=[];if(c!==y){let S=[...c];for(let w=0;w<T.length;w++){const E=T[w],k=zs(E);u.includes(k)||(S.splice(w,0,E),f.push(E))}r==="wait"&&f.length&&(S=f),m(zu(S)),x(c);return}const{forceRender:h}=A.useContext(Wl);return g.jsx(g.Fragment,{children:T.map(S=>{const w=zs(S),E=o&&!a?!1:c===T||u.includes(w),k=()=>{if(v.has(w))v.set(w,!0);else return;let j=!0;v.forEach(V=>{V||(j=!1)}),j&&(h==null||h(),m(p.current),o&&(l==null||l()),n&&n())};return g.jsx(vy,{isPresent:E,initial:!d.current||i?void 0:!1,custom:E?void 0:t,presenceAffectsLayout:s,mode:r,onExitComplete:E?void 0:k,children:S},w)})})},Le=e=>e;let mm=Le;function Xl(e){let t;return()=>(t===void 0&&(t=e()),t)}const Xi=(e,t,i)=>{const n=t-e;return n===0?1:(i-e)/n},vt=e=>e*1e3,yt=e=>e/1e3,Sy={useManualTiming:!1};function wy(e){let t=new Set,i=new Set,n=!1,s=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){r.has(c)&&(l.schedule(c),e()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const v=d&&n?t:i;return u&&r.add(c),v.has(c)||v.add(c),c},cancel:c=>{i.delete(c),r.delete(c)},process:c=>{if(o=c,n){s=!0;return}n=!0,[t,i]=[i,t],t.forEach(a),t.clear(),n=!1,s&&(s=!1,l.process(c))}};return l}const Is=["read","resolveKeyframes","update","preRender","render","postRender"],Ty=40;function hm(e,t){let i=!1,n=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>i=!0,o=Is.reduce((m,f)=>(m[f]=wy(r),m),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:p}=o,v=()=>{const m=performance.now();i=!1,s.delta=n?1e3/60:Math.max(Math.min(m-s.timestamp,Ty),1),s.timestamp=m,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),d.process(s),p.process(s),s.isProcessing=!1,i&&t&&(n=!1,e(v))},y=()=>{i=!0,n=!0,s.isProcessing||e(v)};return{schedule:Is.reduce((m,f)=>{const h=o[f];return m[f]=(S,w=!1,E=!1)=>(i||y(),h.schedule(S,w,E)),m},{}),cancel:m=>{for(let f=0;f<Is.length;f++)o[Is[f]].cancel(m)},state:s,steps:o}}const{schedule:W,cancel:$t,state:pe,steps:Co}=hm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0),gm=A.createContext({strict:!1}),Iu={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yi={};for(const e in Iu)Yi[e]={isEnabled:t=>Iu[e].some(i=>!!t[i])};function Py(e){for(const t in e)Yi[t]={...Yi[t],...e[t]}}const jy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function jr(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||jy.has(e)}let vm=e=>!jr(e);function Ey(e){e&&(vm=t=>t.startsWith("on")?!jr(t):e(t))}try{Ey(require("@emotion/is-prop-valid").default)}catch{}function Cy(e,t,i){const n={};for(const s in e)s==="values"&&typeof e.values=="object"||(vm(s)||i===!0&&jr(s)||!t&&!jr(s)||e.draggable&&s.startsWith("onDrag"))&&(n[s]=e[s]);return n}function ky(e){if(typeof Proxy>"u")return e;const t=new Map,i=(...n)=>e(...n);return new Proxy(i,{get:(n,s)=>s==="create"?e:(t.has(s)||t.set(s,e(s)),t.get(s))})}const Hr=A.createContext({});function ns(e){return typeof e=="string"||Array.isArray(e)}function Gr(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Yl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zl=["initial",...Yl];function Xr(e){return Gr(e.animate)||Zl.some(t=>ns(e[t]))}function ym(e){return!!(Xr(e)||e.variants)}function by(e,t){if(Xr(e)){const{initial:i,animate:n}=e;return{initial:i===!1||ns(i)?i:void 0,animate:ns(n)?n:void 0}}return e.inherit!==!1?t:{}}function Ay(e){const{initial:t,animate:i}=by(e,A.useContext(Hr));return A.useMemo(()=>({initial:t,animate:i}),[Vu(t),Vu(i)])}function Vu(e){return Array.isArray(e)?e.join(" "):e}const Ny=Symbol.for("motionComponentSymbol");function Di(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function My(e,t,i){return A.useCallback(n=>{n&&e.onMount&&e.onMount(n),t&&(n?t.mount(n):t.unmount()),i&&(typeof i=="function"?i(n):Di(i)&&(i.current=n))},[t])}const Jl=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Dy="framerAppearId",xm="data-"+Jl(Dy),{schedule:ec}=hm(queueMicrotask,!1),Sm=A.createContext({});function Ly(e,t,i,n,s){var r,o;const{visualElement:a}=A.useContext(Hr),l=A.useContext(gm),c=A.useContext(Qr),u=A.useContext(Hl).reducedMotion,d=A.useRef(null);n=n||l.renderer,!d.current&&n&&(d.current=n(e,{visualState:t,parent:a,props:i,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const p=d.current,v=A.useContext(Sm);p&&!p.projection&&s&&(p.type==="html"||p.type==="svg")&&Ry(d.current,i,s,v);const y=A.useRef(!1);A.useInsertionEffect(()=>{p&&y.current&&p.update(i,c)});const x=i[xm],T=A.useRef(!!x&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return fm(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),ec.render(p.render),T.current&&p.animationState&&p.animationState.animateChanges())}),A.useEffect(()=>{p&&(!T.current&&p.animationState&&p.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,x)}),T.current=!1))}),p}function Ry(e,t,i,n){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:wm(e.parent)),e.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Di(a),visualElement:e,animationType:typeof r=="string"?r:"both",initialPromotionConfig:n,layoutScroll:l,layoutRoot:c})}function wm(e){if(e)return e.options.allowProjection!==!1?e.projection:wm(e.parent)}function zy({preloadedFeatures:e,createVisualElement:t,useRender:i,useVisualState:n,Component:s}){var r,o;e&&Py(e);function a(c,u){let d;const p={...A.useContext(Hl),...c,layoutId:Iy(c)},{isStatic:v}=p,y=Ay(c),x=n(c,v);if(!v&&Gl){Vy();const T=Fy(p);d=T.MeasureLayout,y.visualElement=Ly(s,x,p,t,T.ProjectionNode)}return g.jsxs(Hr.Provider,{value:y,children:[d&&y.visualElement?g.jsx(d,{visualElement:y.visualElement,...p}):null,i(s,c,My(x,y.visualElement,u),x,v,y.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${(o=(r=s.displayName)!==null&&r!==void 0?r:s.name)!==null&&o!==void 0?o:""})`}`;const l=A.forwardRef(a);return l[Ny]=s,l}function Iy({layoutId:e}){const t=A.useContext(Wl).id;return t&&e!==void 0?t+"-"+e:e}function Vy(e,t){A.useContext(gm).strict}function Fy(e){const{drag:t,layout:i}=Yi;if(!t&&!i)return{};const n={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(e)||i!=null&&i.isEnabled(e)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}const _y=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tc(e){return typeof e!="string"||e.includes("-")?!1:!!(_y.indexOf(e)>-1||/[A-Z]/u.test(e))}function Fu(e){const t=[{},{}];return e==null||e.values.forEach((i,n)=>{t[0][n]=i.get(),t[1][n]=i.getVelocity()}),t}function ic(e,t,i,n){if(typeof t=="function"){const[s,r]=Fu(n);t=t(i!==void 0?i:e.custom,s,r)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,r]=Fu(n);t=t(i!==void 0?i:e.custom,s,r)}return t}const za=e=>Array.isArray(e),Oy=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Uy=e=>za(e)?e[e.length-1]||0:e,xe=e=>!!(e&&e.getVelocity);function Ys(e){const t=xe(e)?e.get():e;return Oy(t)?t.toValue():t}function By({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:i},n,s,r){const o={latestValues:qy(n,s,r,e),renderState:t()};return i&&(o.onMount=a=>i({props:n,current:a,...o}),o.onUpdate=a=>i(a)),o}const Tm=e=>(t,i)=>{const n=A.useContext(Hr),s=A.useContext(Qr),r=()=>By(e,t,n,s);return i?r():Ql(r)};function qy(e,t,i,n){const s={},r=n(e,{});for(const p in r)s[p]=Ys(r[p]);let{initial:o,animate:a}=e;const l=Xr(e),c=ym(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=i?i.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Gr(d)){const p=Array.isArray(d)?d:[d];for(let v=0;v<p.length;v++){const y=ic(e,p[v]);if(y){const{transitionEnd:x,transition:T,...m}=y;for(const f in m){let h=m[f];if(Array.isArray(h)){const S=u?h.length-1:0;h=h[S]}h!==null&&(s[f]=h)}for(const f in x)s[f]=x[f]}}}return s}const nn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gi=new Set(nn),Pm=e=>t=>typeof t=="string"&&t.startsWith(e),jm=Pm("--"),$y=Pm("var(--"),nc=e=>$y(e)?Ky.test(e.split("/*")[0].trim()):!1,Ky=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Em=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Pt=(e,t,i)=>i>t?t:i<e?e:i,sn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ss={...sn,transform:e=>Pt(0,1,e)},Vs={...sn,default:1},fs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),kt=fs("deg"),lt=fs("%"),L=fs("px"),Wy=fs("vh"),Qy=fs("vw"),_u={...lt,parse:e=>lt.parse(e)/100,transform:e=>lt.transform(e*100)},Hy={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,backgroundPositionX:L,backgroundPositionY:L},Gy={rotate:kt,rotateX:kt,rotateY:kt,rotateZ:kt,scale:Vs,scaleX:Vs,scaleY:Vs,scaleZ:Vs,skew:kt,skewX:kt,skewY:kt,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:ss,originX:_u,originY:_u,originZ:L},Ou={...sn,transform:Math.round},sc={...Hy,...Gy,zIndex:Ou,size:L,fillOpacity:ss,strokeOpacity:ss,numOctaves:Ou},Xy={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Yy=nn.length;function Zy(e,t,i){let n="",s=!0;for(let r=0;r<Yy;r++){const o=nn[r],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||i){const c=Em(a,sc[o]);if(!l){s=!1;const u=Xy[o]||o;n+=`${u}(${c}) `}i&&(t[o]=c)}}return n=n.trim(),i?n=i(t,s?"":n):s&&(n="none"),n}function rc(e,t,i){const{style:n,vars:s,transformOrigin:r}=e;let o=!1,a=!1;for(const l in t){const c=t[l];if(gi.has(l)){o=!0;continue}else if(jm(l)){s[l]=c;continue}else{const u=Em(c,sc[l]);l.startsWith("origin")?(a=!0,r[l]=u):n[l]=u}}if(t.transform||(o||i?n.transform=Zy(t,e.transform,i):n.transform&&(n.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;n.transformOrigin=`${l} ${c} ${u}`}}const Jy={offset:"stroke-dashoffset",array:"stroke-dasharray"},e0={offset:"strokeDashoffset",array:"strokeDasharray"};function t0(e,t,i=1,n=0,s=!0){e.pathLength=1;const r=s?Jy:e0;e[r.offset]=L.transform(-n);const o=L.transform(t),a=L.transform(i);e[r.array]=`${o} ${a}`}function Uu(e,t,i){return typeof e=="string"?e:L.transform(t+i*e)}function i0(e,t,i){const n=Uu(t,e.x,e.width),s=Uu(i,e.y,e.height);return`${n} ${s}`}function oc(e,{attrX:t,attrY:i,attrScale:n,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(rc(e,c,d),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:v,dimensions:y}=e;p.transform&&(y&&(v.transform=p.transform),delete p.transform),y&&(s!==void 0||r!==void 0||v.transform)&&(v.transformOrigin=i0(y,s!==void 0?s:.5,r!==void 0?r:.5)),t!==void 0&&(p.x=t),i!==void 0&&(p.y=i),n!==void 0&&(p.scale=n),o!==void 0&&t0(p,o,a,l,!1)}const ac=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Cm=()=>({...ac(),attrs:{}}),lc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function km(e,{style:t,vars:i},n,s){Object.assign(e.style,t,s&&s.getProjectionStyles(n));for(const r in i)e.style.setProperty(r,i[r])}const bm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Am(e,t,i,n){km(e,t,void 0,n);for(const s in t.attrs)e.setAttribute(bm.has(s)?s:Jl(s),t.attrs[s])}const Er={};function n0(e){Object.assign(Er,e)}function Nm(e,{layout:t,layoutId:i}){return gi.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!Er[e]||e==="opacity")}function cc(e,t,i){var n;const{style:s}=e,r={};for(const o in s)(xe(s[o])||t.style&&xe(t.style[o])||Nm(o,e)||((n=i==null?void 0:i.getValue(o))===null||n===void 0?void 0:n.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function Mm(e,t,i){const n=cc(e,t,i);for(const s in e)if(xe(e[s])||xe(t[s])){const r=nn.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;n[r]=e[s]}return n}function s0(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Bu=["x","y","width","height","cx","cy","r"],r0={useVisualState:Tm({scrapeMotionValuesFromProps:Mm,createRenderState:Cm,onUpdate:({props:e,prevProps:t,current:i,renderState:n,latestValues:s})=>{if(!i)return;let r=!!e.drag;if(!r){for(const a in s)if(gi.has(a)){r=!0;break}}if(!r)return;let o=!t;if(t)for(let a=0;a<Bu.length;a++){const l=Bu[a];e[l]!==t[l]&&(o=!0)}o&&W.read(()=>{s0(i,n),W.render(()=>{oc(n,s,lc(i.tagName),e.transformTemplate),Am(i,n)})})}})},o0={useVisualState:Tm({scrapeMotionValuesFromProps:cc,createRenderState:ac})};function Dm(e,t,i){for(const n in t)!xe(t[n])&&!Nm(n,i)&&(e[n]=t[n])}function a0({transformTemplate:e},t){return A.useMemo(()=>{const i=ac();return rc(i,t,e),Object.assign({},i.vars,i.style)},[t])}function l0(e,t){const i=e.style||{},n={};return Dm(n,i,e),Object.assign(n,a0(e,t)),n}function c0(e,t){const i={},n=l0(e,t);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=n,i}function u0(e,t,i,n){const s=A.useMemo(()=>{const r=Cm();return oc(r,t,lc(n),e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};Dm(r,e.style,e),s.style={...r,...s.style}}return s}function d0(e=!1){return(i,n,s,{latestValues:r},o)=>{const l=(tc(i)?u0:c0)(n,r,o,i),c=Cy(n,typeof i=="string",e),u=i!==A.Fragment?{...c,...l,ref:s}:{},{children:d}=n,p=A.useMemo(()=>xe(d)?d.get():d,[d]);return A.createElement(i,{...u,children:p})}}function p0(e,t){return function(n,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...tc(n)?r0:o0,preloadedFeatures:e,useRender:d0(s),createVisualElement:t,Component:n};return zy(o)}}function Lm(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yr(e,t,i){const n=e.getProps();return ic(n,t,i!==void 0?i:n.custom,e)}const f0=Xl(()=>window.ScrollTimeline!==void 0);class m0{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,i){for(let n=0;n<this.animations.length;n++)this.animations[n][t]=i}attachTimeline(t,i){const n=this.animations.map(s=>{if(f0()&&s.attachTimeline)return s.attachTimeline(t);if(typeof i=="function")return i(s)});return()=>{n.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let i=0;i<this.animations.length;i++)t=Math.max(t,this.animations[i].duration);return t}runAll(t){this.animations.forEach(i=>i[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class h0 extends m0{then(t,i){return Promise.all(this.animations).then(t).catch(i)}}function uc(e,t){return e?e[t]||e.default||e:void 0}const Ia=2e4;function Rm(e){let t=0;const i=50;let n=e.next(t);for(;!n.done&&t<Ia;)t+=i,n=e.next(t);return t>=Ia?1/0:t}function dc(e){return typeof e=="function"}function qu(e,t){e.timeline=t,e.onfinish=null}const pc=e=>Array.isArray(e)&&typeof e[0]=="number",g0={linearEasing:void 0};function v0(e,t){const i=Xl(e);return()=>{var n;return(n=g0[t])!==null&&n!==void 0?n:i()}}const Cr=v0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zm=(e,t,i=10)=>{let n="";const s=Math.max(Math.round(t/i),2);for(let r=0;r<s;r++)n+=e(Xi(0,s-1,r))+", ";return`linear(${n.substring(0,n.length-2)})`};function Im(e){return!!(typeof e=="function"&&Cr()||!e||typeof e=="string"&&(e in Va||Cr())||pc(e)||Array.isArray(e)&&e.every(Im))}const jn=([e,t,i,n])=>`cubic-bezier(${e}, ${t}, ${i}, ${n})`,Va={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:jn([0,.65,.55,1]),circOut:jn([.55,0,1,.45]),backIn:jn([.31,.01,.66,-.59]),backOut:jn([.33,1.53,.69,.99])};function Vm(e,t){if(e)return typeof e=="function"&&Cr()?zm(e,t):pc(e)?jn(e):Array.isArray(e)?e.map(i=>Vm(i,t)||Va.easeOut):Va[e]}const Ge={x:!1,y:!1};function Fm(){return Ge.x||Ge.y}function y0(e,t,i){var n;if(e instanceof Element)return[e];if(typeof e=="string"){let s=document;const r=(n=void 0)!==null&&n!==void 0?n:s.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}function _m(e,t){const i=y0(e),n=new AbortController,s={passive:!0,...t,signal:n.signal};return[i,s,()=>n.abort()]}function $u(e){return t=>{t.pointerType==="touch"||Fm()||e(t)}}function x0(e,t,i={}){const[n,s,r]=_m(e,i),o=$u(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const u=$u(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,s)});return n.forEach(a=>{a.addEventListener("pointerenter",o,s)}),r}const Om=(e,t)=>t?e===t?!0:Om(e,t.parentElement):!1,fc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,S0=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function w0(e){return S0.has(e.tagName)||e.tabIndex!==-1}const En=new WeakSet;function Ku(e){return t=>{t.key==="Enter"&&e(t)}}function ko(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const T0=(e,t)=>{const i=e.currentTarget;if(!i)return;const n=Ku(()=>{if(En.has(i))return;ko(i,"down");const s=Ku(()=>{ko(i,"up")}),r=()=>ko(i,"cancel");i.addEventListener("keyup",s,t),i.addEventListener("blur",r,t)});i.addEventListener("keydown",n,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",n),t)};function Wu(e){return fc(e)&&!Fm()}function P0(e,t,i={}){const[n,s,r]=_m(e,i),o=a=>{const l=a.currentTarget;if(!Wu(a)||En.has(l))return;En.add(l);const c=t(a),u=(v,y)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",p),!(!Wu(v)||!En.has(l))&&(En.delete(l),typeof c=="function"&&c(v,{success:y}))},d=v=>{u(v,i.useGlobalTarget||Om(l,v.target))},p=v=>{u(v,!1)};window.addEventListener("pointerup",d,s),window.addEventListener("pointercancel",p,s)};return n.forEach(a=>{!w0(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(i.useGlobalTarget?window:a).addEventListener("pointerdown",o,s),a.addEventListener("focus",c=>T0(c,s),s)}),r}function j0(e){return e==="x"||e==="y"?Ge[e]?null:(Ge[e]=!0,()=>{Ge[e]=!1}):Ge.x||Ge.y?null:(Ge.x=Ge.y=!0,()=>{Ge.x=Ge.y=!1})}const Um=new Set(["width","height","top","left","right","bottom",...nn]);let Zs;function E0(){Zs=void 0}const ct={now:()=>(Zs===void 0&&ct.set(pe.isProcessing||Sy.useManualTiming?pe.timestamp:performance.now()),Zs),set:e=>{Zs=e,queueMicrotask(E0)}};function mc(e,t){e.indexOf(t)===-1&&e.push(t)}function hc(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}class gc{constructor(){this.subscriptions=[]}add(t){return mc(this.subscriptions,t),()=>hc(this.subscriptions,t)}notify(t,i,n){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,i,n);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(t,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Bm(e,t){return t?e*(1e3/t):0}const Qu=30,C0=e=>!isNaN(parseFloat(e));class k0{constructor(t,i={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(n,s=!0)=>{const r=ct.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=ct.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=C0(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new gc);const n=this.events[t].add(i);return t==="change"?()=>{n(),W.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t,i=!0){!i||!this.passiveEffect?this.updateAndNotify(t,i):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,i,n){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Qu)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Qu);return Bm(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rs(e,t){return new k0(e,t)}function b0(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,rs(i))}function A0(e,t){const i=Yr(e,t);let{transitionEnd:n={},transition:s={},...r}=i||{};r={...r,...n};for(const o in r){const a=Uy(r[o]);b0(e,o,a)}}function N0(e){return!!(xe(e)&&e.add)}function Fa(e,t){const i=e.getValue("willChange");if(N0(i))return i.add(t)}function qm(e){return e.props[xm]}const $m=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,M0=1e-7,D0=12;function L0(e,t,i,n,s){let r,o,a=0;do o=t+(i-t)/2,r=$m(o,n,s)-e,r>0?i=o:t=o;while(Math.abs(r)>M0&&++a<D0);return o}function ms(e,t,i,n){if(e===t&&i===n)return Le;const s=r=>L0(r,0,1,e,i);return r=>r===0||r===1?r:$m(s(r),t,n)}const Km=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Wm=e=>t=>1-e(1-t),Qm=ms(.33,1.53,.69,.99),vc=Wm(Qm),Hm=Km(vc),Gm=e=>(e*=2)<1?.5*vc(e):.5*(2-Math.pow(2,-10*(e-1))),yc=e=>1-Math.sin(Math.acos(e)),Xm=Wm(yc),Ym=Km(yc),Zm=e=>/^0[^.\s]+$/u.test(e);function R0(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Zm(e):!0}const In=e=>Math.round(e*1e5)/1e5,xc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function z0(e){return e==null}const I0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Sc=(e,t)=>i=>!!(typeof i=="string"&&I0.test(i)&&i.startsWith(e)||t&&!z0(i)&&Object.prototype.hasOwnProperty.call(i,t)),Jm=(e,t,i)=>n=>{if(typeof n!="string")return n;const[s,r,o,a]=n.match(xc);return{[e]:parseFloat(s),[t]:parseFloat(r),[i]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},V0=e=>Pt(0,255,e),bo={...sn,transform:e=>Math.round(V0(e))},ri={test:Sc("rgb","red"),parse:Jm("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:n=1})=>"rgba("+bo.transform(e)+", "+bo.transform(t)+", "+bo.transform(i)+", "+In(ss.transform(n))+")"};function F0(e){let t="",i="",n="",s="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),n=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),n=e.substring(3,4),s=e.substring(4,5),t+=t,i+=i,n+=n,s+=s),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:s?parseInt(s,16)/255:1}}const _a={test:Sc("#"),parse:F0,transform:ri.transform},Li={test:Sc("hsl","hue"),parse:Jm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:n=1})=>"hsla("+Math.round(e)+", "+lt.transform(In(t))+", "+lt.transform(In(i))+", "+In(ss.transform(n))+")"},ve={test:e=>ri.test(e)||_a.test(e)||Li.test(e),parse:e=>ri.test(e)?ri.parse(e):Li.test(e)?Li.parse(e):_a.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ri.transform(e):Li.transform(e)},_0=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function O0(e){var t,i;return isNaN(e)&&typeof e=="string"&&(((t=e.match(xc))===null||t===void 0?void 0:t.length)||0)+(((i=e.match(_0))===null||i===void 0?void 0:i.length)||0)>0}const eh="number",th="color",U0="var",B0="var(",Hu="${}",q0=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function os(e){const t=e.toString(),i=[],n={color:[],number:[],var:[]},s=[];let r=0;const a=t.replace(q0,l=>(ve.test(l)?(n.color.push(r),s.push(th),i.push(ve.parse(l))):l.startsWith(B0)?(n.var.push(r),s.push(U0),i.push(l)):(n.number.push(r),s.push(eh),i.push(parseFloat(l))),++r,Hu)).split(Hu);return{values:i,split:a,indexes:n,types:s}}function ih(e){return os(e).values}function nh(e){const{split:t,types:i}=os(e),n=t.length;return s=>{let r="";for(let o=0;o<n;o++)if(r+=t[o],s[o]!==void 0){const a=i[o];a===eh?r+=In(s[o]):a===th?r+=ve.transform(s[o]):r+=s[o]}return r}}const $0=e=>typeof e=="number"?0:e;function K0(e){const t=ih(e);return nh(e)(t.map($0))}const Kt={test:O0,parse:ih,createTransformer:nh,getAnimatableNone:K0},W0=new Set(["brightness","contrast","saturate","opacity"]);function Q0(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=i.match(xc)||[];if(!n)return e;const s=i.replace(n,"");let r=W0.has(t)?1:0;return n!==i&&(r*=100),t+"("+r+s+")"}const H0=/\b([a-z-]*)\(.*?\)/gu,Oa={...Kt,getAnimatableNone:e=>{const t=e.match(H0);return t?t.map(Q0).join(" "):e}},G0={...sc,color:ve,backgroundColor:ve,outlineColor:ve,fill:ve,stroke:ve,borderColor:ve,borderTopColor:ve,borderRightColor:ve,borderBottomColor:ve,borderLeftColor:ve,filter:Oa,WebkitFilter:Oa},wc=e=>G0[e];function sh(e,t){let i=wc(e);return i!==Oa&&(i=Kt),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const X0=new Set(["auto","none","0"]);function Y0(e,t,i){let n=0,s;for(;n<e.length&&!s;){const r=e[n];typeof r=="string"&&!X0.has(r)&&os(r).values.length&&(s=e[n]),n++}if(s&&i)for(const r of t)e[r]=sh(i,s)}const Gu=e=>e===sn||e===L,Xu=(e,t)=>parseFloat(e.split(", ")[t]),Yu=(e,t)=>(i,{transform:n})=>{if(n==="none"||!n)return 0;const s=n.match(/^matrix3d\((.+)\)$/u);if(s)return Xu(s[1],t);{const r=n.match(/^matrix\((.+)\)$/u);return r?Xu(r[1],e):0}},Z0=new Set(["x","y","z"]),J0=nn.filter(e=>!Z0.has(e));function ex(e){const t=[];return J0.forEach(i=>{const n=e.getValue(i);n!==void 0&&(t.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),t}const Zi={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Yu(4,13),y:Yu(5,14)};Zi.translateX=Zi.x;Zi.translateY=Zi.y;const li=new Set;let Ua=!1,Ba=!1;function rh(){if(Ba){const e=Array.from(li).filter(n=>n.needsMeasurement),t=new Set(e.map(n=>n.element)),i=new Map;t.forEach(n=>{const s=ex(n);s.length&&(i.set(n,s),n.render())}),e.forEach(n=>n.measureInitialState()),t.forEach(n=>{n.render();const s=i.get(n);s&&s.forEach(([r,o])=>{var a;(a=n.getValue(r))===null||a===void 0||a.set(o)})}),e.forEach(n=>n.measureEndState()),e.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Ba=!1,Ua=!1,li.forEach(e=>e.complete()),li.clear()}function oh(){li.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ba=!0)})}function tx(){oh(),rh()}class Tc{constructor(t,i,n,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=n,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(li.add(this),Ua||(Ua=!0,W.read(oh),W.resolveKeyframes(rh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:n,motionValue:s}=this;for(let r=0;r<t.length;r++)if(t[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(n&&i){const l=n.readValue(i,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&o===void 0&&s.set(t[0])}else t[r]=t[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),li.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,li.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ah=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ix=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function nx(e){const t=ix.exec(e);if(!t)return[,];const[,i,n,s]=t;return[`--${i??n}`,s]}function lh(e,t,i=1){const[n,s]=nx(e);if(!n)return;const r=window.getComputedStyle(t).getPropertyValue(n);if(r){const o=r.trim();return ah(o)?parseFloat(o):o}return nc(s)?lh(s,t,i+1):s}const ch=e=>t=>t.test(e),sx={test:e=>e==="auto",parse:e=>e},uh=[sn,L,lt,kt,Qy,Wy,sx],Zu=e=>uh.find(ch(e));class dh extends Tc{constructor(t,i,n,s,r){super(t,i,n,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:n}=this;if(!i||!i.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),nc(c))){const u=lh(c,i.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Um.has(n)||t.length!==2)return;const[s,r]=t,o=Zu(s),a=Zu(r);if(o!==a)if(Gu(o)&&Gu(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,n=[];for(let s=0;s<t.length;s++)R0(t[s])&&n.push(s);n.length&&Y0(t,n,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:n}=this;if(!t||!t.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Zi[n](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const s=i[i.length-1];s!==void 0&&t.getValue(n,s).jump(s,!1)}measureEndState(){var t;const{element:i,name:n,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const r=i.getValue(n);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=Zi[n](i.measureViewportBox(),window.getComputedStyle(i.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{i.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Ju=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Kt.test(e)||e==="0")&&!e.startsWith("url("));function rx(e){const t=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}function ox(e,t,i,n){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const r=e[e.length-1],o=Ju(s,t),a=Ju(r,t);return!o||!a?!1:rx(e)||(i==="spring"||dc(i))&&n}const ax=e=>e!==null;function Zr(e,{repeat:t,repeatType:i="loop"},n){const s=e.filter(ax),r=t&&i!=="loop"&&t%2===1?0:s.length-1;return!r||n===void 0?s[r]:n}const lx=40;class ph{constructor({autoplay:t=!0,delay:i=0,type:n="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ct.now(),this.options={autoplay:t,delay:i,type:n,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>lx?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&tx(),this._resolved}onKeyframesResolved(t,i){this.resolvedAt=ct.now(),this.hasAttemptedResolve=!0;const{name:n,type:s,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!ox(t,n,s,r))if(o)this.options.duration=0;else{l&&l(Zr(t,this.options,i)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,i);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:i,...u},this.onPostResolved())}onPostResolved(){}then(t,i){return this.currentFinishedPromise.then(t,i)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const X=(e,t,i)=>e+(t-e)*i;function Ao(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function cx({hue:e,saturation:t,lightness:i,alpha:n}){e/=360,t/=100,i/=100;let s=0,r=0,o=0;if(!t)s=r=o=i;else{const a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;s=Ao(l,a,e+1/3),r=Ao(l,a,e),o=Ao(l,a,e-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:n}}function kr(e,t){return i=>i>0?t:e}const No=(e,t,i)=>{const n=e*e,s=i*(t*t-n)+n;return s<0?0:Math.sqrt(s)},ux=[_a,ri,Li],dx=e=>ux.find(t=>t.test(e));function ed(e){const t=dx(e);if(!t)return!1;let i=t.parse(e);return t===Li&&(i=cx(i)),i}const td=(e,t)=>{const i=ed(e),n=ed(t);if(!i||!n)return kr(e,t);const s={...i};return r=>(s.red=No(i.red,n.red,r),s.green=No(i.green,n.green,r),s.blue=No(i.blue,n.blue,r),s.alpha=X(i.alpha,n.alpha,r),ri.transform(s))},px=(e,t)=>i=>t(e(i)),hs=(...e)=>e.reduce(px),qa=new Set(["none","hidden"]);function fx(e,t){return qa.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}function mx(e,t){return i=>X(e,t,i)}function Pc(e){return typeof e=="number"?mx:typeof e=="string"?nc(e)?kr:ve.test(e)?td:vx:Array.isArray(e)?fh:typeof e=="object"?ve.test(e)?td:hx:kr}function fh(e,t){const i=[...e],n=i.length,s=e.map((r,o)=>Pc(r)(r,t[o]));return r=>{for(let o=0;o<n;o++)i[o]=s[o](r);return i}}function hx(e,t){const i={...e,...t},n={};for(const s in i)e[s]!==void 0&&t[s]!==void 0&&(n[s]=Pc(e[s])(e[s],t[s]));return s=>{for(const r in n)i[r]=n[r](s);return i}}function gx(e,t){var i;const n=[],s={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const o=t.types[r],a=e.indexes[o][s[o]],l=(i=e.values[a])!==null&&i!==void 0?i:0;n[r]=l,s[o]++}return n}const vx=(e,t)=>{const i=Kt.createTransformer(t),n=os(e),s=os(t);return n.indexes.var.length===s.indexes.var.length&&n.indexes.color.length===s.indexes.color.length&&n.indexes.number.length>=s.indexes.number.length?qa.has(e)&&!s.values.length||qa.has(t)&&!n.values.length?fx(e,t):hs(fh(gx(n,s),s.values),i):kr(e,t)};function mh(e,t,i){return typeof e=="number"&&typeof t=="number"&&typeof i=="number"?X(e,t,i):Pc(e)(e,t)}const yx=5;function hh(e,t,i){const n=Math.max(t-yx,0);return Bm(i-e(n),t-n)}const J={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Mo=.001;function xx({duration:e=J.duration,bounce:t=J.bounce,velocity:i=J.velocity,mass:n=J.mass}){let s,r,o=1-t;o=Pt(J.minDamping,J.maxDamping,o),e=Pt(J.minDuration,J.maxDuration,yt(e)),o<1?(s=c=>{const u=c*o,d=u*e,p=u-i,v=$a(c,o),y=Math.exp(-d);return Mo-p/v*y},r=c=>{const d=c*o*e,p=d*i+i,v=Math.pow(o,2)*Math.pow(c,2)*e,y=Math.exp(-d),x=$a(Math.pow(c,2),o);return(-s(c)+Mo>0?-1:1)*((p-v)*y)/x}):(s=c=>{const u=Math.exp(-c*e),d=(c-i)*e+1;return-Mo+u*d},r=c=>{const u=Math.exp(-c*e),d=(i-c)*(e*e);return u*d});const a=5/e,l=wx(s,r,a);if(e=vt(e),isNaN(l))return{stiffness:J.stiffness,damping:J.damping,duration:e};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:o*2*Math.sqrt(n*c),duration:e}}}const Sx=12;function wx(e,t,i){let n=i;for(let s=1;s<Sx;s++)n=n-e(n)/t(n);return n}function $a(e,t){return e*Math.sqrt(1-t*t)}const Tx=["duration","bounce"],Px=["stiffness","damping","mass"];function id(e,t){return t.some(i=>e[i]!==void 0)}function jx(e){let t={velocity:J.velocity,stiffness:J.stiffness,damping:J.damping,mass:J.mass,isResolvedFromDuration:!1,...e};if(!id(e,Px)&&id(e,Tx))if(e.visualDuration){const i=e.visualDuration,n=2*Math.PI/(i*1.2),s=n*n,r=2*Pt(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:J.mass,stiffness:s,damping:r}}else{const i=xx(e);t={...t,...i,mass:J.mass},t.isResolvedFromDuration=!0}return t}function gh(e=J.visualDuration,t=J.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:n,restDelta:s}=i;const r=i.keyframes[0],o=i.keyframes[i.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:v}=jx({...i,velocity:-yt(i.velocity||0)}),y=p||0,x=c/(2*Math.sqrt(l*u)),T=o-r,m=yt(Math.sqrt(l/u)),f=Math.abs(T)<5;n||(n=f?J.restSpeed.granular:J.restSpeed.default),s||(s=f?J.restDelta.granular:J.restDelta.default);let h;if(x<1){const w=$a(m,x);h=E=>{const k=Math.exp(-x*m*E);return o-k*((y+x*m*T)/w*Math.sin(w*E)+T*Math.cos(w*E))}}else if(x===1)h=w=>o-Math.exp(-m*w)*(T+(y+m*T)*w);else{const w=m*Math.sqrt(x*x-1);h=E=>{const k=Math.exp(-x*m*E),j=Math.min(w*E,300);return o-k*((y+x*m*T)*Math.sinh(j)+w*T*Math.cosh(j))/w}}const S={calculatedDuration:v&&d||null,next:w=>{const E=h(w);if(v)a.done=w>=d;else{let k=0;x<1&&(k=w===0?vt(y):hh(h,w,E));const j=Math.abs(k)<=n,V=Math.abs(o-E)<=s;a.done=j&&V}return a.value=a.done?o:E,a},toString:()=>{const w=Math.min(Rm(S),Ia),E=zm(k=>S.next(w*k).value,w,30);return w+"ms "+E}};return S}function nd({keyframes:e,velocity:t=0,power:i=.8,timeConstant:n=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=e[0],p={done:!1,value:d},v=j=>a!==void 0&&j<a||l!==void 0&&j>l,y=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let x=i*t;const T=d+x,m=o===void 0?T:o(T);m!==T&&(x=m-d);const f=j=>-x*Math.exp(-j/n),h=j=>m+f(j),S=j=>{const V=f(j),M=h(j);p.done=Math.abs(V)<=c,p.value=p.done?m:M};let w,E;const k=j=>{v(p.value)&&(w=j,E=gh({keyframes:[p.value,y(p.value)],velocity:hh(h,j,p.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return k(0),{calculatedDuration:null,next:j=>{let V=!1;return!E&&w===void 0&&(V=!0,S(j),k(j)),w!==void 0&&j>=w?E.next(j-w):(!V&&S(j),p)}}}const Ex=ms(.42,0,1,1),Cx=ms(0,0,.58,1),vh=ms(.42,0,.58,1),kx=e=>Array.isArray(e)&&typeof e[0]!="number",bx={linear:Le,easeIn:Ex,easeInOut:vh,easeOut:Cx,circIn:yc,circInOut:Ym,circOut:Xm,backIn:vc,backInOut:Hm,backOut:Qm,anticipate:Gm},sd=e=>{if(pc(e)){mm(e.length===4);const[t,i,n,s]=e;return ms(t,i,n,s)}else if(typeof e=="string")return bx[e];return e};function Ax(e,t,i){const n=[],s=i||mh,r=e.length-1;for(let o=0;o<r;o++){let a=s(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Le:t;a=hs(l,a)}n.push(a)}return n}function Nx(e,t,{clamp:i=!0,ease:n,mixer:s}={}){const r=e.length;if(mm(r===t.length),r===1)return()=>t[0];if(r===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[r-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Ax(t,n,s),l=a.length,c=u=>{if(o&&u<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const p=Xi(e[d],e[d+1],u);return a[d](p)};return i?u=>c(Pt(e[0],e[r-1],u)):c}function Mx(e,t){const i=e[e.length-1];for(let n=1;n<=t;n++){const s=Xi(0,t,n);e.push(X(i,1,s))}}function Dx(e){const t=[0];return Mx(t,e.length-1),t}function Lx(e,t){return e.map(i=>i*t)}function Rx(e,t){return e.map(()=>t||vh).splice(0,e.length-1)}function br({duration:e=300,keyframes:t,times:i,ease:n="easeInOut"}){const s=kx(n)?n.map(sd):sd(n),r={done:!1,value:t[0]},o=Lx(i&&i.length===t.length?i:Dx(t),e),a=Nx(o,t,{ease:Array.isArray(s)?s:Rx(t,s)});return{calculatedDuration:e,next:l=>(r.value=a(l),r.done=l>=e,r)}}const zx=e=>{const t=({timestamp:i})=>e(i);return{start:()=>W.update(t,!0),stop:()=>$t(t),now:()=>pe.isProcessing?pe.timestamp:ct.now()}},Ix={decay:nd,inertia:nd,tween:br,keyframes:br,spring:gh},Vx=e=>e/100;class jc extends ph{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:i,motionValue:n,element:s,keyframes:r}=this.options,o=(s==null?void 0:s.KeyframeResolver)||Tc,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(r,a,i,n,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:i="keyframes",repeat:n=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=dc(i)?i:Ix[i]||br;let l,c;a!==br&&typeof t[0]!="number"&&(l=hs(Vx,mh(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});r==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Rm(u));const{calculatedDuration:d}=u,p=d+s,v=p*(n+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:p,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,i=!1){const{resolved:n}=this;if(!n){const{keyframes:j}=this.options;return{done:!0,value:j[j.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=n;if(this.startTime===null)return r.next(0);const{delay:p,repeat:v,repeatType:y,repeatDelay:x,onUpdate:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),i?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-p*(this.speed>=0?1:-1),f=this.speed>=0?m<0:m>u;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let h=this.currentTime,S=r;if(v){const j=Math.min(this.currentTime,u)/d;let V=Math.floor(j),M=j%1;!M&&j>=1&&(M=1),M===1&&V--,V=Math.min(V,v+1),!!(V%2)&&(y==="reverse"?(M=1-M,x&&(M-=x/d)):y==="mirror"&&(S=o)),h=Pt(0,1,M)*d}const w=f?{done:!1,value:l[0]}:S.next(h);a&&(w.value=a(w.value));let{done:E}=w;!f&&c!==null&&(E=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return k&&s!==void 0&&(w.value=Zr(l,this.options,s)),T&&T(w.value),k&&this.finish(),w}get duration(){const{resolved:t}=this;return t?yt(t.calculatedDuration):0}get time(){return yt(this.currentTime)}set time(t){t=vt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=yt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=zx,onPlay:i,startTime:n}=this.options;this.driver||(this.driver=t(r=>this.tick(r))),i&&i();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=n??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Fx=new Set(["opacity","clipPath","filter","transform"]);function _x(e,t,i,{delay:n=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:i};l&&(c.offset=l);const u=Vm(a,s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:n,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}const Ox=Xl(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ar=10,Ux=2e4;function Bx(e){return dc(e.type)||e.type==="spring"||!Im(e.ease)}function qx(e,t){const i=new jc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let n={done:!1,value:e[0]};const s=[];let r=0;for(;!n.done&&r<Ux;)n=i.sample(r),s.push(n.value),r+=Ar;return{times:void 0,keyframes:s,duration:r-Ar,ease:"linear"}}const yh={anticipate:Gm,backInOut:Hm,circInOut:Ym};function $x(e){return e in yh}class rd extends ph{constructor(t){super(t);const{name:i,motionValue:n,element:s,keyframes:r}=this.options;this.resolver=new dh(r,(o,a)=>this.onKeyframesResolved(o,a),i,n,s),this.resolver.scheduleResolve()}initPlayback(t,i){let{duration:n=300,times:s,ease:r,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof r=="string"&&Cr()&&$x(r)&&(r=yh[r]),Bx(this.options)){const{onComplete:d,onUpdate:p,motionValue:v,element:y,...x}=this.options,T=qx(t,x);t=T.keyframes,t.length===1&&(t[1]=t[0]),n=T.duration,s=T.times,r=T.ease,o="keyframes"}const u=_x(a.owner.current,l,t,{...this.options,duration:n,times:s,ease:r});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(qu(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(Zr(t,this.options,i)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:n,times:s,type:o,ease:r,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:i}=t;return yt(i)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:i}=t;return yt(i.currentTime||0)}set time(t){const{resolved:i}=this;if(!i)return;const{animation:n}=i;n.currentTime=vt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:i}=t;return i.playbackRate}set speed(t){const{resolved:i}=this;if(!i)return;const{animation:n}=i;n.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:i}=t;return i.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:i}=t;return i.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:i}=this;if(!i)return Le;const{animation:n}=i;qu(n,t)}return Le}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:i,keyframes:n,duration:s,type:r,ease:o,times:a}=t;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:p,...v}=this.options,y=new jc({...v,keyframes:n,duration:s,type:r,ease:o,times:a,isGenerator:!0}),x=vt(this.time);c.setWithVelocity(y.sample(x-Ar).value,y.sample(x).value,Ar)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:i,name:n,repeatDelay:s,repeatType:r,damping:o,type:a}=t;if(!i||!i.owner||!(i.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=i.owner.getProps();return Ox()&&n&&Fx.has(n)&&!l&&!c&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const Kx={type:"spring",stiffness:500,damping:25,restSpeed:10},Wx=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Qx={type:"keyframes",duration:.8},Hx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Gx=(e,{keyframes:t})=>t.length>2?Qx:gi.has(e)?e.startsWith("scale")?Wx(t[1]):Kx:Hx;function Xx({when:e,delay:t,delayChildren:i,staggerChildren:n,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Ec=(e,t,i,n={},s,r)=>o=>{const a=uc(n,e)||{},l=a.delay||n.delay||0;let{elapsed:c=0}=n;c=c-vt(l);let u={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:r?void 0:s};Xx(a)||(u={...u,...Gx(e,u)}),u.duration&&(u.duration=vt(u.duration)),u.repeatDelay&&(u.repeatDelay=vt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!r&&t.get()!==void 0){const p=Zr(u.keyframes,a);if(p!==void 0)return W.update(()=>{u.onUpdate(p),u.onComplete()}),new h0([])}return!r&&rd.supports(u)?new rd(u):new jc(u)};function Yx({protectedKeys:e,needsAnimating:t},i){const n=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,n}function xh(e,t,{delay:i=0,transitionOverride:n,type:s}={}){var r;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;n&&(o=n);const c=[],u=s&&e.animationState&&e.animationState.getState()[s];for(const d in l){const p=e.getValue(d,(r=e.latestValues[d])!==null&&r!==void 0?r:null),v=l[d];if(v===void 0||u&&Yx(u,d))continue;const y={delay:i,...uc(o||{},d)};let x=!1;if(window.MotionHandoffAnimation){const m=qm(e);if(m){const f=window.MotionHandoffAnimation(m,d,W);f!==null&&(y.startTime=f,x=!0)}}Fa(e,d),p.start(Ec(d,p,v,e.shouldReduceMotion&&Um.has(d)?{type:!1}:y,e,x));const T=p.animation;T&&c.push(T)}return a&&Promise.all(c).then(()=>{W.update(()=>{a&&A0(e,a)})}),c}function Ka(e,t,i={}){var n;const s=Yr(e,t,i.type==="exit"?(n=e.presenceContext)===null||n===void 0?void 0:n.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=s||{};i.transitionOverride&&(r=i.transitionOverride);const o=s?()=>Promise.all(xh(e,s,i)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:p}=r;return Zx(e,t,u+c,d,p,i)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(i.delay)])}function Zx(e,t,i=0,n=0,s=1,r){const o=[],a=(e.variantChildren.size-1)*n,l=s===1?(c=0)=>c*n:(c=0)=>a-c*n;return Array.from(e.variantChildren).sort(Jx).forEach((c,u)=>{c.notify("AnimationStart",t),o.push(Ka(c,t,{...r,delay:i+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function Jx(e,t){return e.sortNodePosition(t)}function e1(e,t,i={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const s=t.map(r=>Ka(e,r,i));n=Promise.all(s)}else if(typeof t=="string")n=Ka(e,t,i);else{const s=typeof t=="function"?Yr(e,t,i.custom):t;n=Promise.all(xh(e,s,i))}return n.then(()=>{e.notify("AnimationComplete",t)})}const t1=Zl.length;function Sh(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?Sh(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const t={};for(let i=0;i<t1;i++){const n=Zl[i],s=e.props[n];(ns(s)||s===!1)&&(t[n]=s)}return t}const i1=[...Yl].reverse(),n1=Yl.length;function s1(e){return t=>Promise.all(t.map(({animation:i,options:n})=>e1(e,i,n)))}function r1(e){let t=s1(e),i=od(),n=!0;const s=l=>(c,u)=>{var d;const p=Yr(e,u,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(p){const{transition:v,transitionEnd:y,...x}=p;c={...c,...x,...y}}return c};function r(l){t=l(e)}function o(l){const{props:c}=e,u=Sh(e.parent)||{},d=[],p=new Set;let v={},y=1/0;for(let T=0;T<n1;T++){const m=i1[T],f=i[m],h=c[m]!==void 0?c[m]:u[m],S=ns(h),w=m===l?f.isActive:null;w===!1&&(y=T);let E=h===u[m]&&h!==c[m]&&S;if(E&&n&&e.manuallyAnimateOnMount&&(E=!1),f.protectedKeys={...v},!f.isActive&&w===null||!h&&!f.prevProp||Gr(h)||typeof h=="boolean")continue;const k=o1(f.prevProp,h);let j=k||m===l&&f.isActive&&!E&&S||T>y&&S,V=!1;const M=Array.isArray(h)?h:[h];let B=M.reduce(s(m),{});w===!1&&(B={});const{prevResolvedValues:it={}}=f,ut={...it,...B},dt=te=>{j=!0,p.has(te)&&(V=!0,p.delete(te)),f.needsAnimating[te]=!0;const b=e.getValue(te);b&&(b.liveStyle=!1)};for(const te in ut){const b=B[te],R=it[te];if(v.hasOwnProperty(te))continue;let z=!1;za(b)&&za(R)?z=!Lm(b,R):z=b!==R,z?b!=null?dt(te):p.add(te):b!==void 0&&p.has(te)?dt(te):f.protectedKeys[te]=!0}f.prevProp=h,f.prevResolvedValues=B,f.isActive&&(v={...v,...B}),n&&e.blockInitialAnimation&&(j=!1),j&&(!(E&&k)||V)&&d.push(...M.map(te=>({animation:te,options:{type:m}})))}if(p.size){const T={};p.forEach(m=>{const f=e.getBaseTarget(m),h=e.getValue(m);h&&(h.liveStyle=!0),T[m]=f??null}),d.push({animation:T})}let x=!!d.length;return n&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(x=!1),n=!1,x?t(d):Promise.resolve()}function a(l,c){var u;if(i[l].isActive===c)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var v;return(v=p.animationState)===null||v===void 0?void 0:v.setActive(l,c)}),i[l].isActive=c;const d=o(l);for(const p in i)i[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>i,reset:()=>{i=od(),n=!0}}}function o1(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Lm(t,e):!1}function Xt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function od(){return{animate:Xt(!0),whileInView:Xt(),whileHover:Xt(),whileTap:Xt(),whileDrag:Xt(),whileFocus:Xt(),exit:Xt()}}class Gt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class a1 extends Gt{constructor(t){super(t),t.animationState||(t.animationState=r1(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Gr(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let l1=0;class c1 extends Gt{constructor(){super(...arguments),this.id=l1++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;const s=this.node.animationState.setActive("exit",!t);i&&!t&&s.then(()=>i(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const u1={animation:{Feature:a1},exit:{Feature:c1}};function as(e,t,i,n={passive:!0}){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i)}function gs(e){return{point:{x:e.pageX,y:e.pageY}}}const d1=e=>t=>fc(t)&&e(t,gs(t));function Vn(e,t,i,n){return as(e,t,d1(i),n)}const ad=(e,t)=>Math.abs(e-t);function p1(e,t){const i=ad(e.x,t.x),n=ad(e.y,t.y);return Math.sqrt(i**2+n**2)}class wh{constructor(t,i,{transformPagePoint:n,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Lo(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,v=p1(d.offset,{x:0,y:0})>=3;if(!p&&!v)return;const{point:y}=d,{timestamp:x}=pe;this.history.push({...y,timestamp:x});const{onStart:T,onMove:m}=this.handlers;p||(T&&T(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Do(p,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:v,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=Lo(d.type==="pointercancel"?this.lastMoveEventInfo:Do(p,this.transformPagePoint),this.history);this.startEvent&&v&&v(d,T),y&&y(d,T)},!fc(t))return;this.dragSnapToOrigin=r,this.handlers=i,this.transformPagePoint=n,this.contextWindow=s||window;const o=gs(t),a=Do(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=pe;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=i;u&&u(t,Lo(a,this.history)),this.removeListeners=hs(Vn(this.contextWindow,"pointermove",this.handlePointerMove),Vn(this.contextWindow,"pointerup",this.handlePointerUp),Vn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),$t(this.updatePoint)}}function Do(e,t){return t?{point:t(e.point)}:e}function ld(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Lo({point:e},t){return{point:e,delta:ld(e,Th(t)),offset:ld(e,f1(t)),velocity:m1(t,.1)}}function f1(e){return e[0]}function Th(e){return e[e.length-1]}function m1(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,n=null;const s=Th(e);for(;i>=0&&(n=e[i],!(s.timestamp-n.timestamp>vt(t)));)i--;if(!n)return{x:0,y:0};const r=yt(s.timestamp-n.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-n.x)/r,y:(s.y-n.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Ph=1e-4,h1=1-Ph,g1=1+Ph,jh=.01,v1=0-jh,y1=0+jh;function ze(e){return e.max-e.min}function x1(e,t,i){return Math.abs(e-t)<=i}function cd(e,t,i,n=.5){e.origin=n,e.originPoint=X(t.min,t.max,e.origin),e.scale=ze(i)/ze(t),e.translate=X(i.min,i.max,e.origin)-e.originPoint,(e.scale>=h1&&e.scale<=g1||isNaN(e.scale))&&(e.scale=1),(e.translate>=v1&&e.translate<=y1||isNaN(e.translate))&&(e.translate=0)}function Fn(e,t,i,n){cd(e.x,t.x,i.x,n?n.originX:void 0),cd(e.y,t.y,i.y,n?n.originY:void 0)}function ud(e,t,i){e.min=i.min+t.min,e.max=e.min+ze(t)}function S1(e,t,i){ud(e.x,t.x,i.x),ud(e.y,t.y,i.y)}function dd(e,t,i){e.min=t.min-i.min,e.max=e.min+ze(t)}function _n(e,t,i){dd(e.x,t.x,i.x),dd(e.y,t.y,i.y)}function w1(e,{min:t,max:i},n){return t!==void 0&&e<t?e=n?X(t,e,n.min):Math.max(e,t):i!==void 0&&e>i&&(e=n?X(i,e,n.max):Math.min(e,i)),e}function pd(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function T1(e,{top:t,left:i,bottom:n,right:s}){return{x:pd(e.x,i,s),y:pd(e.y,t,n)}}function fd(e,t){let i=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,n]=[n,i]),{min:i,max:n}}function P1(e,t){return{x:fd(e.x,t.x),y:fd(e.y,t.y)}}function j1(e,t){let i=.5;const n=ze(e),s=ze(t);return s>n?i=Xi(t.min,t.max-n,e.min):n>s&&(i=Xi(e.min,e.max-s,t.min)),Pt(0,1,i)}function E1(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const Wa=.35;function C1(e=Wa){return e===!1?e=0:e===!0&&(e=Wa),{x:md(e,"left","right"),y:md(e,"top","bottom")}}function md(e,t,i){return{min:hd(e,t),max:hd(e,i)}}function hd(e,t){return typeof e=="number"?e:e[t]||0}const gd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ri=()=>({x:gd(),y:gd()}),vd=()=>({min:0,max:0}),ie=()=>({x:vd(),y:vd()});function Oe(e){return[e("x"),e("y")]}function Eh({top:e,left:t,right:i,bottom:n}){return{x:{min:t,max:i},y:{min:e,max:n}}}function k1({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function b1(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function Ro(e){return e===void 0||e===1}function Qa({scale:e,scaleX:t,scaleY:i}){return!Ro(e)||!Ro(t)||!Ro(i)}function ei(e){return Qa(e)||Ch(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ch(e){return yd(e.x)||yd(e.y)}function yd(e){return e&&e!=="0%"}function Nr(e,t,i){const n=e-i,s=t*n;return i+s}function xd(e,t,i,n,s){return s!==void 0&&(e=Nr(e,s,n)),Nr(e,i,n)+t}function Ha(e,t=0,i=1,n,s){e.min=xd(e.min,t,i,n,s),e.max=xd(e.max,t,i,n,s)}function kh(e,{x:t,y:i}){Ha(e.x,t.translate,t.scale,t.originPoint),Ha(e.y,i.translate,i.scale,i.originPoint)}const Sd=.999999999999,wd=1.0000000000001;function A1(e,t,i,n=!1){const s=i.length;if(!s)return;t.x=t.y=1;let r,o;for(let a=0;a<s;a++){r=i[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(n&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Ii(e,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,kh(e,o)),n&&ei(r.latestValues)&&Ii(e,r.latestValues))}t.x<wd&&t.x>Sd&&(t.x=1),t.y<wd&&t.y>Sd&&(t.y=1)}function zi(e,t){e.min=e.min+t,e.max=e.max+t}function Td(e,t,i,n,s=.5){const r=X(e.min,e.max,s);Ha(e,t,i,r,n)}function Ii(e,t){Td(e.x,t.x,t.scaleX,t.scale,t.originX),Td(e.y,t.y,t.scaleY,t.scale,t.originY)}function bh(e,t){return Eh(b1(e.getBoundingClientRect(),t))}function N1(e,t,i){const n=bh(e,i),{scroll:s}=t;return s&&(zi(n.x,s.offset.x),zi(n.y,s.offset.y)),n}const Ah=({current:e})=>e?e.ownerDocument.defaultView:null,M1=new WeakMap;class D1{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.visualElement=t}start(t,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(gs(u).point)},r=(u,d)=>{const{drag:p,dragPropagation:v,onDragStart:y}=this.getProps();if(p&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=j0(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Oe(T=>{let m=this.getAxisMotionValue(T).get()||0;if(lt.test(m)){const{projection:f}=this.visualElement;if(f&&f.layout){const h=f.layout.layoutBox[T];h&&(m=ze(h)*(parseFloat(m)/100))}}this.originPoint[T]=m}),y&&W.postRender(()=>y(u,d)),Fa(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:y,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:T}=d;if(v&&this.currentDirection===null){this.currentDirection=L1(T),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,T),this.updateAxis("y",d.point,T),this.visualElement.render(),x&&x(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Oe(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new wh(t,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Ah(this.visualElement)})}stop(t,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&W.postRender(()=>r(t,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,n){const{drag:s}=this.getProps();if(!n||!Fs(t,s,this.currentDirection))return;const r=this.getAxisMotionValue(t);let o=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(o=w1(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){var t;const{dragConstraints:i,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,r=this.constraints;i&&Di(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=T1(s.layoutBox,i):this.constraints=!1,this.elastic=C1(n),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Oe(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=E1(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Di(t))return!1;const n=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=N1(n,s.root,this.visualElement.getTransformPagePoint());let o=P1(s.layout.layoutBox,r);if(i){const a=i(k1(o));this.hasMutatedConstraints=!!a,a&&(o=Eh(a))}return o}startAnimation(t){const{drag:i,dragMomentum:n,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Oe(u=>{if(!Fs(u,i,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const p=s?200:1e6,v=s?40:1e7,y={type:"inertia",velocity:n?t[u]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...r,...d};return this.startAxisValueAnimation(u,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,i){const n=this.getAxisMotionValue(t);return Fa(this.visualElement,t),n.start(Ec(t,n,0,i,this.visualElement,!1))}stopAnimation(){Oe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Oe(t=>{var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps(),s=n[i];return s||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){Oe(i=>{const{drag:n}=this.getProps();if(!Fs(i,n,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(i);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[i];r.set(t[i]-X(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!Di(i)||!n||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Oe(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=j1({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Oe(o=>{if(!Fs(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(X(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;M1.set(this.visualElement,this);const t=this.visualElement.current,i=Vn(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),n=()=>{const{dragConstraints:l}=this.getProps();Di(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",n);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),W.read(n);const o=as(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Oe(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),i(),r(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=Wa,dragMomentum:a=!0}=t;return{...t,drag:i,dragDirectionLock:n,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Fs(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function L1(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class R1 extends Gt{constructor(t){super(t),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new D1(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}unmount(){this.removeGroupControls(),this.removeListeners()}}const Pd=e=>(t,i)=>{e&&W.postRender(()=>e(t,i))};class z1 extends Gt{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(t){this.session=new wh(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ah(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:n,onPanEnd:s}=this.node.getProps();return{onSessionStart:Pd(t),onStart:Pd(i),onMove:n,onEnd:(r,o)=>{delete this.session,s&&W.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=Vn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Js={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function jd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const fn={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const i=jd(e,t.target.x),n=jd(e,t.target.y);return`${i}% ${n}%`}},I1={correct:(e,{treeScale:t,projectionDelta:i})=>{const n=e,s=Kt.parse(e);if(s.length>5)return n;const r=Kt.createTransformer(e),o=typeof s[0]!="number"?1:0,a=i.x.scale*t.x,l=i.y.scale*t.y;s[0+o]/=a,s[1+o]/=l;const c=X(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};class V1 extends A.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n,layoutId:s}=this.props,{projection:r}=t;n0(F1),r&&(i.group&&i.group.add(r),n&&n.register&&s&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Js.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:n,drag:s,isPresent:r}=this.props,o=n.projection;return o&&(o.isPresent=r,s||t.layoutDependency!==i||i===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||W.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ec.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(s),n&&n.deregister&&n.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Nh(e){const[t,i]=pm(),n=A.useContext(Wl);return g.jsx(V1,{...e,layoutGroup:n,switchLayoutGroup:A.useContext(Sm),isPresent:t,safeToRemove:i})}const F1={borderRadius:{...fn,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fn,borderTopRightRadius:fn,borderBottomLeftRadius:fn,borderBottomRightRadius:fn,boxShadow:I1};function _1(e,t,i){const n=xe(e)?e:rs(e);return n.start(Ec("",n,t,i)),n.animation}function O1(e){return e instanceof SVGElement&&e.tagName!=="svg"}const U1=(e,t)=>e.depth-t.depth;class B1{constructor(){this.children=[],this.isDirty=!1}add(t){mc(this.children,t),this.isDirty=!0}remove(t){hc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(U1),this.isDirty=!1,this.children.forEach(t)}}function q1(e,t){const i=ct.now(),n=({timestamp:s})=>{const r=s-i;r>=t&&($t(n),e(r-t))};return W.read(n,!0),()=>$t(n)}const Mh=["TopLeft","TopRight","BottomLeft","BottomRight"],$1=Mh.length,Ed=e=>typeof e=="string"?parseFloat(e):e,Cd=e=>typeof e=="number"||L.test(e);function K1(e,t,i,n,s,r){s?(e.opacity=X(0,i.opacity!==void 0?i.opacity:1,W1(n)),e.opacityExit=X(t.opacity!==void 0?t.opacity:1,0,Q1(n))):r&&(e.opacity=X(t.opacity!==void 0?t.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let o=0;o<$1;o++){const a=`border${Mh[o]}Radius`;let l=kd(t,a),c=kd(i,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Cd(l)===Cd(c)?(e[a]=Math.max(X(Ed(l),Ed(c),n),0),(lt.test(c)||lt.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||i.rotate)&&(e.rotate=X(t.rotate||0,i.rotate||0,n))}function kd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const W1=Dh(0,.5,Xm),Q1=Dh(.5,.95,Le);function Dh(e,t,i){return n=>n<e?0:n>t?1:i(Xi(e,t,n))}function bd(e,t){e.min=t.min,e.max=t.max}function _e(e,t){bd(e.x,t.x),bd(e.y,t.y)}function Ad(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Nd(e,t,i,n,s){return e-=t,e=Nr(e,1/i,n),s!==void 0&&(e=Nr(e,1/s,n)),e}function H1(e,t=0,i=1,n=.5,s,r=e,o=e){if(lt.test(t)&&(t=parseFloat(t),t=X(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=X(r.min,r.max,n);e===r&&(a-=t),e.min=Nd(e.min,t,i,a,s),e.max=Nd(e.max,t,i,a,s)}function Md(e,t,[i,n,s],r,o){H1(e,t[i],t[n],t[s],t.scale,r,o)}const G1=["x","scaleX","originX"],X1=["y","scaleY","originY"];function Dd(e,t,i,n){Md(e.x,t,G1,i?i.x:void 0,n?n.x:void 0),Md(e.y,t,X1,i?i.y:void 0,n?n.y:void 0)}function Ld(e){return e.translate===0&&e.scale===1}function Lh(e){return Ld(e.x)&&Ld(e.y)}function Rd(e,t){return e.min===t.min&&e.max===t.max}function Y1(e,t){return Rd(e.x,t.x)&&Rd(e.y,t.y)}function zd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Rh(e,t){return zd(e.x,t.x)&&zd(e.y,t.y)}function Id(e){return ze(e.x)/ze(e.y)}function Vd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Z1{constructor(){this.members=[]}add(t){mc(this.members,t),t.scheduleRender()}remove(t){if(hc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(s=>t===s);if(i===0)return!1;let n;for(let s=i;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){n=r;break}}return n?(this.promote(n),!0):!1}promote(t,i){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,i&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:n}=t;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function J1(e,t,i){let n="";const s=e.x.translate/t.x,r=e.y.translate/t.y,o=(i==null?void 0:i.z)||0;if((s||r||o)&&(n=`translate3d(${s}px, ${r}px, ${o}px) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:p,skewX:v,skewY:y}=i;c&&(n=`perspective(${c}px) ${n}`),u&&(n+=`rotate(${u}deg) `),d&&(n+=`rotateX(${d}deg) `),p&&(n+=`rotateY(${p}deg) `),v&&(n+=`skewX(${v}deg) `),y&&(n+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(n+=`scale(${a}, ${l})`),n||"none"}const ti={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Cn=typeof window<"u"&&window.MotionDebug!==void 0,zo=["","X","Y","Z"],eS={visibility:"hidden"},Fd=1e3;let tS=0;function Io(e,t,i,n){const{latestValues:s}=t;s[e]&&(i[e]=s[e],t.setStaticValue(e,0),n&&(n[e]=0))}function zh(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const i=qm(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:s,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",W,!(s||r))}const{parent:n}=e;n&&!n.hasCheckedOptimisedAppear&&zh(n)}function Ih({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:n,resetTransform:s}){return class{constructor(o={},a=t==null?void 0:t()){this.id=tS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Cn&&(ti.totalNodes=ti.resolvedTargetDeltas=ti.recalculatedProjection=0),this.nodes.forEach(sS),this.nodes.forEach(cS),this.nodes.forEach(uS),this.nodes.forEach(rS),Cn&&window.MotionDebug.record(ti)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new B1)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new gc),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=O1(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let d;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=q1(p,250),Js.hasAnimatedSinceResize&&(Js.hasAnimatedSinceResize=!1,this.nodes.forEach(Od))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:v,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||hS,{onLayoutAnimationStart:T,onLayoutAnimationComplete:m}=u.getProps(),f=!this.targetLayout||!Rh(this.targetLayout,y)||v,h=!p&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||p&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,h);const S={...uc(x,"layout"),onPlay:T,onComplete:m};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||Od(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,$t(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(dS),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&zh(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(_d);return}this.isUpdating||this.nodes.forEach(aS),this.isUpdating=!1,this.nodes.forEach(lS),this.nodes.forEach(iS),this.nodes.forEach(nS),this.clearAllSnapshots();const a=ct.now();pe.delta=Pt(0,1e3/60,a-pe.timestamp),pe.timestamp=a,pe.isProcessing=!0,Co.update.process(pe),Co.preRender.process(pe),Co.render.process(pe),pe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ec.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(oS),this.sharedNodes.forEach(pS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ie(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=n(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Lh(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||ei(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),gS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return ie();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(vS))){const{scroll:u}=this.root;u&&(zi(l.x,u.offset.x),zi(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=ie();if(_e(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:p}=u;u!==this.root&&d&&p.layoutScroll&&(d.wasRoot&&_e(l,o),zi(l.x,d.offset.x),zi(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=ie();_e(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ii(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ei(u.latestValues)&&Ii(l,u.latestValues)}return ei(this.latestValues)&&Ii(l,this.latestValues),l}removeTransform(o){const a=ie();_e(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ei(c.latestValues))continue;Qa(c.latestValues)&&c.updateSnapshot();const u=ie(),d=c.measurePageBox();_e(u,d),Dd(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ei(this.latestValues)&&Dd(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==pe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:p}=this.options;if(!(!this.layout||!(d||p))){if(this.resolvedRelativeTargetAt=pe.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),_n(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),_e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ie(),this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),S1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):_e(this.target,this.layout.layoutBox),kh(this.target,this.targetDelta)):_e(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),_n(this.relativeTargetOrigin,this.target,v.target),_e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Cn&&ti.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Qa(this.parent.latestValues)||Ch(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===pe.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;_e(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;A1(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ie());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ad(this.prevProjectionDelta.x,this.projectionDelta.x),Ad(this.prevProjectionDelta.y,this.projectionDelta.y)),Fn(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!Vd(this.projectionDelta.x,this.prevProjectionDelta.x)||!Vd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Cn&&ti.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ri(),this.projectionDelta=Ri(),this.projectionDeltaWithTransform=Ri()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Ri();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=ie(),v=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=v!==y,T=this.getStack(),m=!T||T.members.length<=1,f=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(mS));this.animationProgress=0;let h;this.mixTargetDelta=S=>{const w=S/1e3;Ud(d.x,o.x,w),Ud(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_n(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fS(this.relativeTarget,this.relativeTargetOrigin,p,w),h&&Y1(this.relativeTarget,h)&&(this.isProjectionDirty=!1),h||(h=ie()),_e(h,this.relativeTarget)),x&&(this.animationValues=u,K1(u,c,this.latestValues,w,f,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&($t(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W.update(()=>{Js.hasAnimatedSinceResize=!0,this.currentAnimation=_1(0,Fd,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Fd),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Vh(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ie();const d=ze(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const p=ze(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}_e(a,l),Ii(a,u),Fn(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Z1),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Io("z",o,c,this.animationValues);for(let u=0;u<zo.length;u++)Io(`rotate${zo[u]}`,o,c,this.animationValues),Io(`skew${zo[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return eS;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Ys(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Ys(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ei(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=J1(this.projectionDeltaWithTransform,this.treeScale,p),u&&(c.transform=u(p,c.transform));const{x:v,y}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${y.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Er){if(p[x]===void 0)continue;const{correct:T,applyTo:m}=Er[x],f=c.transform==="none"?p[x]:T(p[x],d);if(m){const h=m.length;for(let S=0;S<h;S++)c[m[S]]=f}else c[x]=f}return this.options.layoutId&&(c.pointerEvents=d===this?Ys(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(_d),this.root.sharedNodes.clear()}}}function iS(e){e.updateLayout()}function nS(e){var t;const i=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=e.layout,{animationType:r}=e.options,o=i.source!==e.layout.source;r==="size"?Oe(d=>{const p=o?i.measuredBox[d]:i.layoutBox[d],v=ze(p);p.min=n[d].min,p.max=p.min+v}):Vh(r,i.layoutBox,n)&&Oe(d=>{const p=o?i.measuredBox[d]:i.layoutBox[d],v=ze(n[d]);p.max=p.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+v)});const a=Ri();Fn(a,n,i.layoutBox);const l=Ri();o?Fn(l,e.applyTransform(s,!0),i.measuredBox):Fn(l,n,i.layoutBox);const c=!Lh(a);let u=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:v}=d;if(p&&v){const y=ie();_n(y,i.layoutBox,p.layoutBox);const x=ie();_n(x,n,v.layoutBox),Rh(y,x)||(u=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function sS(e){Cn&&ti.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function rS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function oS(e){e.clearSnapshot()}function _d(e){e.clearMeasurements()}function aS(e){e.isLayoutDirty=!1}function lS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Od(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function cS(e){e.resolveTargetDelta()}function uS(e){e.calcProjection()}function dS(e){e.resetSkewAndRotation()}function pS(e){e.removeLeadSnapshot()}function Ud(e,t,i){e.translate=X(t.translate,0,i),e.scale=X(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function Bd(e,t,i,n){e.min=X(t.min,i.min,n),e.max=X(t.max,i.max,n)}function fS(e,t,i,n){Bd(e.x,t.x,i.x,n),Bd(e.y,t.y,i.y,n)}function mS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const hS={duration:.45,ease:[.4,0,.1,1]},qd=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),$d=qd("applewebkit/")&&!qd("chrome/")?Math.round:Le;function Kd(e){e.min=$d(e.min),e.max=$d(e.max)}function gS(e){Kd(e.x),Kd(e.y)}function Vh(e,t,i){return e==="position"||e==="preserve-aspect"&&!x1(Id(t),Id(i),.2)}function vS(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const yS=Ih({attachResizeListener:(e,t)=>as(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vo={current:void 0},Fh=Ih({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Vo.current){const e=new yS({});e.mount(window),e.setOptions({layoutScroll:!0}),Vo.current=e}return Vo.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),xS={pan:{Feature:z1},drag:{Feature:R1,ProjectionNode:Fh,MeasureLayout:Nh}};function Wd(e,t,i){const{props:n}=e;e.animationState&&n.whileHover&&e.animationState.setActive("whileHover",i==="Start");const s="onHover"+i,r=n[s];r&&W.postRender(()=>r(t,gs(t)))}class SS extends Gt{mount(){const{current:t}=this.node;t&&(this.unmount=x0(t,i=>(Wd(this.node,i,"Start"),n=>Wd(this.node,n,"End"))))}unmount(){}}class wS extends Gt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=hs(as(this.node.current,"focus",()=>this.onFocus()),as(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qd(e,t,i){const{props:n}=e;e.animationState&&n.whileTap&&e.animationState.setActive("whileTap",i==="Start");const s="onTap"+(i==="End"?"":i),r=n[s];r&&W.postRender(()=>r(t,gs(t)))}class TS extends Gt{mount(){const{current:t}=this.node;t&&(this.unmount=P0(t,i=>(Qd(this.node,i,"Start"),(n,{success:s})=>Qd(this.node,n,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ga=new WeakMap,Fo=new WeakMap,PS=e=>{const t=Ga.get(e.target);t&&t(e)},jS=e=>{e.forEach(PS)};function ES({root:e,...t}){const i=e||document;Fo.has(i)||Fo.set(i,{});const n=Fo.get(i),s=JSON.stringify(t);return n[s]||(n[s]=new IntersectionObserver(jS,{root:e,...t})),n[s]}function CS(e,t,i){const n=ES(t);return Ga.set(e,i),n.observe(e),()=>{Ga.delete(e),n.unobserve(e)}}const kS={some:0,all:1};class bS extends Gt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:n,amount:s="some",once:r}=t,o={root:i?i.current:void 0,rootMargin:n,threshold:typeof s=="number"?s:kS[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),p=c?u:d;p&&p(l)};return CS(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(AS(t,i))&&this.startObserver()}unmount(){}}function AS({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const NS={inView:{Feature:bS},tap:{Feature:TS},focus:{Feature:wS},hover:{Feature:SS}},MS={layout:{ProjectionNode:Fh,MeasureLayout:Nh}},Xa={current:null},_h={current:!1};function DS(){if(_h.current=!0,!!Gl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Xa.current=e.matches;e.addListener(t),t()}else Xa.current=!1}const LS=[...uh,ve,Kt],RS=e=>LS.find(ch(e)),Hd=new WeakMap;function zS(e,t,i){for(const n in t){const s=t[n],r=i[n];if(xe(s))e.addValue(n,s);else if(xe(r))e.addValue(n,rs(s,{owner:e}));else if(r!==s)if(e.hasValue(n)){const o=e.getValue(n);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=e.getStaticValue(n);e.addValue(n,rs(o!==void 0?o:s,{owner:e}))}}for(const n in i)t[n]===void 0&&e.removeValue(n);return t}const Gd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class IS{scrapeMotionValuesFromProps(t,i,n){return{}}constructor({parent:t,props:i,presenceContext:n,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Tc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=ct.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,W.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=i.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=i,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=Xr(i),this.isVariantNode=ym(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in p){const y=p[v];l[v]!==void 0&&xe(y)&&y.set(l[v],!1)}}mount(t){this.current=t,Hd.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),_h.current||DS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xa.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Hd.delete(this.current),this.projection&&this.projection.unmount(),$t(this.notifyUpdate),$t(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const n=gi.has(t),s=i.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&W.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),r=i.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{s(),r(),o&&o(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Yi){const i=Yi[t];if(!i)continue;const{isEnabled:n,Feature:s}=i;if(!this.features[t]&&s&&n(this.props)&&(this.features[t]=new s(this)),this.features[t]){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<Gd.length;n++){const s=Gd[n];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=t[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=zS(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const n=this.values.get(t);i!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&i!==void 0&&(n=rs(i===null?void 0:i,{owner:this}),this.addValue(t,n)),n}readValue(t,i){var n;let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(ah(s)||Zm(s))?s=parseFloat(s):!RS(s)&&Kt.test(i)&&(s=sh(t,i)),this.setBaseTarget(t,xe(s)?s.get():s)),xe(s)?s.get():s}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var i;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const o=ic(this.props,n,(i=this.presenceContext)===null||i===void 0?void 0:i.custom);o&&(s=o[t])}if(n&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!xe(r)?r:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new gc),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}}class Oh extends IS{constructor(){super(...arguments),this.KeyframeResolver=dh}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:n}){delete i[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;xe(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function VS(e){return window.getComputedStyle(e)}class FS extends Oh{constructor(){super(...arguments),this.type="html",this.renderInstance=km}readValueFromInstance(t,i){if(gi.has(i)){const n=wc(i);return n&&n.default||0}else{const n=VS(t),s=(jm(i)?n.getPropertyValue(i):n[i])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:i}){return bh(t,i)}build(t,i,n){rc(t,i,n.transformTemplate)}scrapeMotionValuesFromProps(t,i,n){return cc(t,i,n)}}class _S extends Oh{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(gi.has(i)){const n=wc(i);return n&&n.default||0}return i=bm.has(i)?i:Jl(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,n){return Mm(t,i,n)}build(t,i,n){oc(t,i,this.isSVGTag,n.transformTemplate)}renderInstance(t,i,n,s){Am(t,i,n,s)}mount(t){this.isSVGTag=lc(t.tagName),super.mount(t)}}const OS=(e,t)=>tc(e)?new _S(t):new FS(t,{allowProjection:e!==A.Fragment}),US=p0({...u1,...NS,...xS,...MS},OS),BS=ky(US);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uh=(...e)=>e.filter((t,i,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=A.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:s="",children:r,iconNode:o,...a},l)=>A.createElement("svg",{ref:l,...$S,width:t,height:t,stroke:e,strokeWidth:n?Number(i)*24/Number(t):i,className:Uh("lucide",s),...a},[...o.map(([c,u])=>A.createElement(c,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(e,t)=>{const i=A.forwardRef(({className:n,...s},r)=>A.createElement(KS,{ref:r,iconNode:t,className:Uh(`lucide-${qS(e)}`,n),...s}));return i.displayName=`${e}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=Qe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=Qe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=Qe("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=Qe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=Qe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=Qe("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=Qe("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=Qe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=Qe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=Qe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=Qe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=Qe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function xi({className:e="",variant:t,size:i,asChild:n,...s}){const r="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-magno-500 disabled:opacity-50 disabled:pointer-events-none",o={sm:"h-8 px-3",md:"h-9 px-4",lg:"h-10 px-6"},a={default:"bg-magno-600 text-white hover:bg-magno-700",outline:"border border-slate-300 bg-white hover:bg-slate-50",ghost:"bg-transparent hover:bg-slate-100"},l=[r,o[i]||o.md,a[t]||a.default,e].filter(Boolean).join(" ");return g.jsx("button",{className:l,...s})}function mn({className:e="",...t}){return g.jsx("div",{className:`rounded-xl border border-slate-200 bg-white shadow-sm ${e}`,...t})}function hn({className:e="",...t}){return g.jsx("div",{className:`p-4 border-b border-slate-200 ${e}`,...t})}function gn({className:e="",...t}){return g.jsx("div",{className:`p-4 ${e}`,...t})}function Ct({className:e="",...t}){return g.jsx("input",{className:`w-full h-9 px-3 rounded-md border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-magno-500 ${e}`,...t})}function sw({className:e="",...t}){return g.jsx("textarea",{className:`w-full min-h-[96px] px-3 py-2 rounded-md border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-magno-500 ${e}`,...t})}function Yt({className:e="",...t}){return g.jsx("label",{className:`text-sm text-slate-700 ${e}`,...t})}function rw({className:e="",checked:t,onCheckedChange:i,...n}){return g.jsx("input",{type:"checkbox",className:`h-4 w-4 rounded mt-1 border-slate-300 text-magno-600 focus:ring-magno-500 ${e}`,checked:t,onChange:s=>i==null?void 0:i(s.target.checked),...n})}function _o({className:e="",...t}){return g.jsx("span",{className:`inline-flex items-center px-2 py-0.5 text-xs rounded border bg-[#e7e7e7] text-slate-700 ${e}`,...t})}function ow({className:e="",...t}){return g.jsx("hr",{className:`my-4 border-slate-200 ${e}`,...t})}function aw({className:e="",value:t=0,...i}){return g.jsx("div",{className:`w-full h-2 bg-slate-200 rounded ${e}`,...i,children:g.jsx("div",{style:{width:`${t}%`},className:"h-full bg-magenta-600 rounded"})})}const Oo={},vn=({children:e})=>g.jsx(BS.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.25},children:e}),yn=({icon:e,title:t,subtitle:i})=>g.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[g.jsx("div",{className:"p-2 rounded-2xl bg-gray-100",children:g.jsx(e,{className:"h-5 w-5"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-xl font-semibold leading-tight",children:t}),i&&g.jsx("p",{className:"text-sm text-gray-500 mt-1",children:i})]})]}),Uo=(e=new Date)=>`Q${Math.floor(e.getMonth()/3)+1}`,Xd=(e,t,i)=>{const n=(i||"").toLowerCase();return e.filter(s=>t.includes(s.cat)&&(s.title.toLowerCase().includes(n)||s.desc.toLowerCase().includes(n)||s.how.toLowerCase().includes(n)))},Yd=(e,t,i,n,s,r)=>{const o=Object.keys(e).map(a=>({id:a,...t.find(l=>l.id===a),...e[a]}));return{servicio:i,objetivo_negocio:n,objetivo_usuario:s,tareas_clave:(r||[]).filter(Boolean),kpis:o}},Ya=[{id:"adoption",cat:"Uso & Adopción",title:"Tasa de adopción",how:"% de empresas que usan una funcionalidad en X días desde lanzamiento.",desc:"¿Se empieza a usar lo nuevo?"},{id:"active",cat:"Uso & Adopción",title:"Usuarios activos (DAU/MAU)",how:"Usuarios únicos diarios/mensuales que iniciaron sesión o realizaron acciones.",desc:"¿Hay hábito?"},{id:"activation",cat:"Uso & Adopción",title:"Tasa de activación",how:"% que completan la primera operación clave tras registrarse.",desc:"¿Llegan al momento 'aha'?"},{id:"featureUsage",cat:"Uso & Adopción",title:"Uso por funcionalidad",how:"% de sesiones con uso de la función (ej. pagos masivos).",desc:"¿Qué tanto se usa cada módulo?"},{id:"timeOnTask",cat:"Eficiencia & Fricción",title:"Tiempo en tarea",how:"Promedio (p50/p90) desde inicio a confirmación.",desc:"¿Qué tan rápido ocurre?"},{id:"success",cat:"Eficiencia & Fricción",title:"Tasa de éxito",how:"% de operaciones completadas sin error (sin necesidad de reintentos).",desc:"¿Se logra sin trabas?"},{id:"steps",cat:"Eficiencia & Fricción",title:"Pasos por tarea",how:"Promedio de pantallas/clics para completar.",desc:"¿Es compacto?"},{id:"abandon",cat:"Eficiencia & Fricción",title:"Tasa de abandono",how:"% que inician y no finalizan el flujo.",desc:"¿Dónde se caen?"},{id:"userError",cat:"Eficiencia & Fricción",title:"Errores de usuario/flujo",how:"Errores percibidos (ej. validación fallida) por cada 1.000 operaciones.",desc:"¿Qué rompe la tarea para el cliente?"},{id:"latency",cat:"Eficiencia & Fricción",title:"Tiempo de respuesta",how:"ms de latencia en endpoints/pantallas clave.",desc:"¿Carga rápido?"},{id:"interruption",cat:"Eficiencia & Fricción",title:"Transacciones interrumpidas",how:"% de operaciones que no concluyen por timeout o caída técnica.",desc:"¿Qué tan confiable es?"},{id:"nps",cat:"Satisfacción & Experiencia",title:"NPS",how:"% promotores − % detractores tras usar el módulo.",desc:"¿Nos recomendarían?"},{id:"csat",cat:"Satisfacción & Experiencia",title:"CSAT",how:"Promedio de satisfacción 1–5 al finalizar tarea.",desc:"¿Quedaron conformes?"},{id:"sus",cat:"Satisfacción & Experiencia",title:"SUS",how:"Escala SUS 0–100 post-uso o en tests.",desc:"¿Es usable?"},{id:"ces",cat:"Satisfacción & Experiencia",title:"CES",how:"Esfuerzo percibido 1–5 para completar.",desc:"¿Cuánto costó hacerlo?"},{id:"complaints",cat:"Satisfacción & Experiencia",title:"Reclamos/incidencias",how:"Tasa por 10k operaciones y tiempo de resolución.",desc:"¿Cuánto ruido generamos?"},{id:"conversion",cat:"Conversión & Negocio",title:"Tasa de conversión",how:"% que completan la acción clave (apertura, crédito, etc.).",desc:"¿Se concreta el valor?"},{id:"value",cat:"Conversión & Negocio",title:"Valor transaccionado",how:"USD movidos por canal/funcionalidad.",desc:"¿Cuánto se mueve?"},{id:"cross",cat:"Conversión & Negocio",title:"Cross-selling digital",how:"% que contratan otro producto desde el flujo.",desc:"¿Ampliamos relación?"},{id:"retention",cat:"Conversión & Negocio",title:"Retención (churn inverso)",how:"% que siguen activos en X meses.",desc:"¿Se quedan con nosotros?"},{id:"selfservice",cat:"Autoservicio & Costos",title:"% autogestión exitosa",how:"% de casos resueltos sin intervención humana.",desc:"¿Resuelven solos?"},{id:"digitalVsBranch",cat:"Autoservicio & Costos",title:"Digital vs. sucursal",how:"% de operaciones digitales vs. presenciales.",desc:"¿Migramos el canal?"},{id:"supportReduction",cat:"Autoservicio & Costos",title:"Reducción llamadas soporte",how:"Variación de llamadas sobre el tema.",desc:"¿Bajó el costo?"},{id:"helpUsage",cat:"Autoservicio & Costos",title:"Uso de ayuda digital",how:"% de consultas resueltas vía FAQ/chatbot vs tickets.",desc:"¿Qué tan efectiva es la ayuda digital?"},{id:"failedLogin",cat:"Seguridad & Cumplimiento",title:"Intentos de login fallidos",how:"# por 1.000 sesiones, bloqueo de cuentas.",desc:"¿Hay fricción o riesgo?"},{id:"twoFa",cat:"Seguridad & Cumplimiento",title:"2FA éxito",how:"% de autenticaciones 2FA exitosas.",desc:"¿Funciona la seguridad?"},{id:"kyc",cat:"Seguridad & Cumplimiento",title:"Tiempo KYC",how:"Minutos promedio de verificación.",desc:"¿Qué tan ágil es?"},{id:"fraud",cat:"Seguridad & Cumplimiento",title:"Fraude detectado/prevenido",how:"# / monto bloqueado.",desc:"¿Protegemos bien?"},{id:"onboarding",cat:"Seguridad & Cumplimiento",title:"Tiempo de activación de empresa/usuario",how:"Tiempo promedio desde registro hasta poder operar en banca empresas.",desc:"¿Qué tan rápido arrancan los nuevos clientes?"},{id:"uptime",cat:"Salud técnica",title:"Disponibilidad (uptime)",how:"% mensual de uptime del servicio.",desc:"¿Está arriba?"},{id:"errors5xx",cat:"Salud técnica",title:"Errores 4xx/5xx",how:"Tasa por 10k requests.",desc:"¿Estable en producción?"},{id:"mttr",cat:"Salud técnica",title:"MTTR",how:"Tiempo medio de recuperación ante incidentes.",desc:"¿Cuán rápido reponemos?"}],lw={adoption:"/kpi/adoption",active:"/kpi/active",activation:"/kpi/activation",featureUsage:"/kpi/featureUsage",timeOnTask:"/kpi/timeOnTask",success:"/kpi/success",steps:"/kpi/steps",abandon:"/kpi/abandon",userError:"/kpi/userError",latency:"/kpi/latency",interruption:"/kpi/interruption",nps:"/kpi/nps",csat:"/kpi/csat",sus:"/kpi/sus",ces:"/kpi/ces",complaints:"/kpi/complaints",conversion:"/kpi/conversion",value:"/kpi/value",cross:"/kpi/cross",retention:"/kpi/retention",selfservice:"/kpi/selfservice",digitalVsBranch:"/kpi/digitalVsBranch",supportReduction:"/kpi/supportReduction",helpUsage:"/kpi/helpUsage",failedLogin:"/kpi/failedLogin",twoFa:"/kpi/twoFa",kyc:"/kpi/kyc",fraud:"/kpi/fraud",onboarding:"/kpi/onboarding",uptime:"/kpi/uptime",errors5xx:"/kpi/errors5xx",mttr:"/kpi/mttr"},xn=Ya.map(e=>({...e,url:lw[e.id]||""})),cw={adoption:{title:"Tasa de adopción",subtitle:"Mide la velocidad y amplitud de uso de nuevas funcionalidades o productos.",html:`
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
  `},twoFA:{title:"2FA éxito",subtitle:"Seguridad & Cumplimiento: efectividad de la autenticación de dos factores",html:`
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
  `}},Bo=["Uso & Adopción","Eficiencia & Fricción","Satisfacción & Experiencia","Conversión & Negocio","Autoservicio & Costos","Seguridad & Cumplimiento","Salud técnica"];function uw(){const[e,t]=oe.useState(0),[i,n]=oe.useState(""),[s,r]=oe.useState(""),[o,a]=oe.useState(""),[l,c]=oe.useState(""),[u,d]=oe.useState(["",""]),[p,v]=oe.useState(""),[y,x]=oe.useState(Bo),[T,m]=oe.useState({}),[f,h]=oe.useState(null),[S,w]=oe.useState({open:!1,url:"",title:"",id:""}),E=(e+1)/5*100,k=Xd(xn,y,p),j=(Oo==null?void 0:Oo.VITE_KPI_BASE_URL)||"",V=P=>P?/^https?:\/\//i.test(P)?P:`${j}${P}`:"",M=oe.useMemo(()=>xn.find(P=>P.id===S.id),[S.id]),B=oe.useMemo(()=>{if(!M)return null;const P=cw[S.id]||{};return{title:P.title||M.title,subtitle:P.subtitle||M.cat,html:P.html||`<p>${M.desc}</p><p style="color:#6b7280;font-size:12px;">Cómo se mide: ${M.how}</p>`}},[S.id,M]),it=P=>{x(D=>D.includes(P)?D.filter(I=>I!==P):[...D,P])},ut=P=>{m(D=>{const I={...D};return I[P]?delete I[P]:I[P]={baseline:"",target:"",timeframe:Uo()},I})},dt=(P,D,I)=>{m(O=>({...O,[P]:{...O[P],[D]:I}}))},vs=()=>d(P=>[...P,""]),vi=P=>d(D=>D.filter((I,O)=>O!==P)),te=(P,D)=>d(I=>I.map((O,Fe)=>Fe===P?D:O)),b=()=>{t(0),n(""),r(""),a(""),c(""),d(["",""]),v(""),x(Bo),m({})},R=()=>Yd(T,xn,i,s,o,u),z=async()=>{const P=R(),D=[`# KPI Sheet — ${P.servicio||"(servicio)"}`,`
**Objetivo de negocio:** ${P.objetivo_negocio||"-"}`,`
**Objetivo de usuario:** ${P.objetivo_usuario||"-"}`,`
**Tareas clave:**`,...P.tareas_clave.map(I=>`- ${I}`),`
## KPI’s seleccionados`,...P.kpis.map(I=>`- **${I.title}** (${I.cat}) — ${I.desc}
  - Cómo se mide: ${I.how}
  - Baseline: ${I.baseline||""}
  - Meta: ${I.target||""}
  - Liberación: ${I.timeframe||""}`)].join(`
`);try{await navigator.clipboard.writeText(D)}catch{}alert("Resumen copiado en Markdown ✅")},H=async()=>{const P={...R(),timestamp:new Date().toISOString()};console.log("KPI: payload creado",P);try{const O="kpi_wizard_runs",Fe=JSON.parse(localStorage.getItem(O)||"[]");Fe.push(P),localStorage.setItem(O,JSON.stringify(Fe)),console.log("KPI: guardado local en localStorage")}catch(O){console.warn("KPI: no se pudo guardar en localStorage",O)}const D="https://script.google.com/macros/s/AKfycbySlnH4pLj9zI1GoQWoONU_WlrQ3TuvcU0tk1rsuaR_bXNnhvi8aB8gvSN0aKTaUiJe/exec",I=()=>{console.log("KPI: envío despachado (beacon o fetch no-cors)"),h?(h("✅ KPIs enviados"),setTimeout(()=>{oe.startTransition?oe.startTransition(()=>b()):b(),h(null)},0)):oe.startTransition?oe.startTransition(()=>b()):b()};try{const O=JSON.stringify(P);if(navigator.sendBeacon){if(navigator.sendBeacon(D,new Blob([O],{type:"text/plain;charset=UTF-8"}))){console.log("KPI: beacon enviado"),I();return}console.warn("KPI: sendBeacon devolvió false, probamos fetch(no-cors)")}await fetch(D,{method:"POST",mode:"no-cors",body:O}),console.log("KPI: fetch(no-cors) despachado"),I()}catch(O){console.error("KPI: error enviando al endpoint",O),h&&(h("❌ Error al enviar. Revisa la consola."),setTimeout(()=>h(null),4e3))}},se=()=>g.jsx("div",{className:"flex items-center gap-2 mb-6",children:[0,1,2,3,4].map(P=>g.jsx("div",{className:`h-2 flex-1 rounded-full ${P<=e?"bg-magno-600":"bg-gray-200"}`},P))});return oe.useEffect(()=>{try{if(typeof window<"u"&&window.__RUN_KPI_TESTS__){console.group("KPIWizard :: tests"),console.assert(Uo(new Date("2025-02-01"))==="Q1","computeQuarter Feb -> Q1"),console.assert(Uo(new Date("2025-08-01"))==="Q3","computeQuarter Aug -> Q3");const D=Xd(Ya,["Uso & Adopción"],"adop");console.assert(D.some(Fe=>Fe.id==="adoption"),"filterKPIs finds adoption");const O=Yd({nps:{baseline:"60",target:"75",timeframe:"Q4"}},Ya,"Nómina","Reducir costos","Pagar sin errores",["Cargar archivo"]);console.assert(O.kpis[0].id==="nps"&&O.servicio==="Nómina","buildSummary basics"),console.groupEnd()}}catch{}},[]),g.jsxs("div",{className:"max-w-6xl mx-auto p-6",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Mentoría KPI — Wizard"}),g.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-500",children:[g.jsxs("span",{children:["Pantalla ",e+1," de 5"]}),g.jsx("div",{className:"w-40",children:g.jsx(aw,{value:E})})]})]}),g.jsx(se,{}),g.jsxs(xy,{mode:"wait",children:[e===0&&g.jsx(vn,{children:g.jsxs(mn,{className:"shadow-sm rounded-2xl",children:[g.jsx(hn,{children:g.jsx(yn,{icon:iw,title:"1) Alineación de objetivos",subtitle:"Define el marco antes de idear: negocio + usuario + servicio"})}),g.jsxs(gn,{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsxs("div",{children:[g.jsx(Yt,{children:"Servicio / producto"}),g.jsx("div",{className:"flex gap-2 mt-1",children:g.jsx(Ct,{placeholder:"Ej. Pago a terceros",value:i,onChange:P=>n(P.target.value)})})]}),g.jsxs("div",{children:[g.jsx(Yt,{children:"Objetivo de negocio"}),g.jsx(Ct,{placeholder:"Ej. Reducir costos de atención",value:s,onChange:P=>r(P.target.value),className:"mt-1"})]}),g.jsxs("div",{children:[g.jsx(Yt,{children:"Objetivo de usuario"}),g.jsx(Ct,{placeholder:"Ej. Completar pagos masivos sin errores",value:o,onChange:P=>a(P.target.value),className:"mt-1"})]}),g.jsxs("div",{children:[g.jsx(Yt,{children:"Notas / contexto"}),g.jsx(sw,{placeholder:"Riesgos, dependencias, hipótesis…",value:l,onChange:P=>c(P.target.value),className:"mt-1"})]})]})]})},"s1"),e===1&&g.jsx(vn,{children:g.jsxs(mn,{className:"shadow-sm rounded-2xl",children:[g.jsx(hn,{children:g.jsx(yn,{icon:YS,title:"2) Tareas/flujo clave",subtitle:"Enumera 2–3 micro journeys críticos y dónde hay fricción"})}),g.jsx(gn,{children:g.jsxs("div",{className:"space-y-3",children:[u.map((P,D)=>g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Ct,{placeholder:`Tarea ${D+1} (ej. Cargar archivo de nómina)`,value:P,onChange:I=>te(D,I.target.value)}),u.length>1&&g.jsx(xi,{variant:"ghost",size:"icon",onClick:()=>vi(D),className:"shrink-0",children:g.jsx(nw,{className:"h-4 w-4"})})]},D)),g.jsxs(xi,{onClick:vs,variant:"secondary",className:"gap-2",children:[g.jsx(JS,{className:"h-4 w-4"})," Añadir tarea"]})]})})]})},"s2"),e===2&&g.jsx(vn,{children:g.jsxs(mn,{className:"shadow-sm rounded-2xl",children:[g.jsx(hn,{children:g.jsx(yn,{icon:ZS,title:"3) Selección de KPI’s",subtitle:"Marca los KPI’s relevantes (relevancia, medibilidad y accionabilidad)"})}),g.jsxs(gn,{children:[g.jsxs("div",{className:"gap-3 mb-4",children:[g.jsxs("div",{className:"flex items-center gap-2 flex-1 mb-4",children:[g.jsx(tw,{className:"h-4 w-4 text-gray-500"}),g.jsx(Ct,{placeholder:"Buscar KPI por nombre o descripción…",value:p,onChange:P=>v(P.target.value)})]}),g.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:Bo.map(P=>g.jsx("button",{onClick:()=>it(P),className:`px-2 py-1 rounded-full text-xs border ${y.includes(P)?"bg-magno-600 text-white border-magno-600":"bg-white text-gray-700"}`,children:P},P))})]}),g.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-3",children:k.map(P=>g.jsx("label",{className:`border rounded-2xl p-4 cursor-pointer transition-shadow ${T[P.id]?"border-magno-600 shadow-md":"hover:shadow-sm"}`,children:g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(rw,{checked:!!T[P.id],onCheckedChange:()=>ut(P.id)}),g.jsxs("div",{children:[g.jsxs("div",{className:"gap-2 mb-1",children:[g.jsxs("div",{className:"font-medium flex items-center gap-2",children:[P.title,P.url&&g.jsx("button",{type:"button",title:"Más info",onClick:D=>{D.stopPropagation(),w({open:!0,url:V(P.url),title:P.title,id:P.id})},className:"ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100",children:"?"})]}),g.jsx("div",{children:g.jsx(_o,{variant:"outline",children:P.cat})})]}),g.jsx("p",{className:"text-sm text-gray-600",children:P.desc}),g.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:["Cómo se mide: ",P.how]})]})]})},P.id))}),Object.keys(T).length===0&&g.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Tip: empieza marcando 2–3 KPI’s máximo para mantener el foco."})]})]})},"s3"),e===3&&g.jsx(vn,{children:g.jsxs(mn,{className:"shadow-sm rounded-2xl",children:[g.jsx(hn,{children:g.jsx(yn,{icon:HS,title:"4) Baseline y meta",subtitle:"Define punto de partida y objetivo por KPI seleccionado"})}),g.jsxs(gn,{className:"space-y-4",children:[Object.keys(T).length===0&&g.jsx("p",{className:"text-sm text-gray-500",children:"Primero selecciona KPI’s en la pantalla anterior."}),Object.keys(T).map(P=>{const D=xn.find(I=>I.id===P);return g.jsxs("div",{className:"border rounded-2xl p-4",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(_o,{variant:"outline",children:D.cat}),g.jsx("span",{className:"font-semibold",children:D.title}),D.url&&g.jsx("button",{type:"button",title:"Más info",onClick:()=>w({open:!0,url:V(D.url),title:D.title,id:D.id}),className:"ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100",children:"?"})]}),g.jsx("span",{className:"text-xs text-gray-500",children:D.how})]}),g.jsxs("div",{className:"grid md:grid-cols-3 gap-3 mt-2",children:[g.jsxs("div",{children:[g.jsx(Yt,{children:"Baseline"}),g.jsx(Ct,{placeholder:"Ej. 82% / 2m 30s",value:T[P].baseline,onChange:I=>dt(P,"baseline",I.target.value)})]}),g.jsxs("div",{children:[g.jsx(Yt,{children:"Meta"}),g.jsx(Ct,{placeholder:"Ej. 92% / 1m 45s",value:T[P].target,onChange:I=>dt(P,"target",I.target.value)})]}),g.jsxs("div",{children:[g.jsx(Yt,{children:"Liberación"}),g.jsx(Ct,{placeholder:"Momento estimado para liberar (opcional)",value:T[P].timeframe||"",onChange:I=>dt(P,"timeframe",I.target.value)})]})]})]},P)})]})]})},"s4"),e===4&&g.jsx(vn,{children:g.jsxs(mn,{className:"shadow-sm rounded-2xl",children:[g.jsx(hn,{children:g.jsx(yn,{icon:GS,title:"5) Resumen y confirmación",subtitle:"Todo listo para compartir y repetir en otro servicio"})}),g.jsxs(gn,{children:[g.jsxs("div",{className:"grid md:[grid-template-columns:3fr_4fr] gap-6",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold mb-2",children:"Contexto"}),g.jsxs("div",{className:"space-y-2 text-sm",children:[g.jsxs("p",{children:[g.jsx("span",{className:"font-medium",children:"Servicio / producto:"})," ",i||g.jsx("i",{className:"text-gray-400",children:"—"})]}),g.jsxs("p",{children:[g.jsx("span",{className:"font-medium",children:"Objetivo de negocio:"})," ",g.jsx("br",{})," ",s||g.jsx("i",{className:"text-gray-400",children:"—"})]}),g.jsxs("p",{children:[g.jsx("span",{className:"font-medium",children:"Objetivo de usuario:"})," ",g.jsx("br",{})," ",o||g.jsx("i",{className:"text-gray-400",children:"—"})]}),l&&g.jsx("p",{className:"text-gray-500",children:l})]}),g.jsx(ow,{className:"my-4"}),g.jsx("h4",{className:"font-semibold mb-2",children:"Tareas clave"}),g.jsx("ul",{className:"list-disc ml-5 text-sm space-y-1",children:u.filter(Boolean).map((P,D)=>g.jsx("li",{children:P},D))})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold mb-2",children:"KPI’s seleccionados"}),g.jsxs("div",{className:"space-y-3",children:[Object.keys(T).length===0&&g.jsx("p",{className:"text-sm text-gray-500",children:"No hay KPI’s seleccionados."}),Object.keys(T).map(P=>{const D=xn.find(O=>O.id===P),I=T[P];return g.jsxs("div",{className:"border rounded-2xl p-3",children:[g.jsxs("div",{className:"items-center justify-between gap-2",children:[g.jsx("div",{className:"mb-2",children:g.jsx(_o,{variant:"outline",children:D.cat})}),g.jsxs("div",{className:"gap-2",children:[g.jsxs("div",{className:"font-medium flex items-center gap-2",children:[D.title,D.url&&g.jsx("button",{type:"button",title:"Más info",onClick:()=>w({open:!0,url:V(D.url),title:D.title,id:D.id}),className:"ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100",children:"?"})]}),g.jsx("div",{className:"text-xs text-gray-500",children:D.desc})]})]}),g.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs mt-2",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-gray-500",children:"Baseline:"})," ",I.baseline||g.jsx("i",{children:"—"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-gray-500",children:"Meta:"})," ",I.target||g.jsx("i",{children:"—"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-gray-500",children:"Liberación:"})," ",I.timeframe||g.jsx("i",{children:"—"})]})]})]},P)})]})]})]}),g.jsxs("div",{className:"flex items-center gap-2 mt-6",children:[g.jsxs(xi,{onClick:z,className:"gap-2",children:[g.jsx(XS,{className:"h-4 w-4"})," Copiar resumen (Markdown)"]}),g.jsxs(xi,{variant:"secondary",onClick:b,className:"gap-2",children:[g.jsx(ew,{className:"h-4 w-4"})," Nuevo servicio"]})]})]})]})},"s5")]}),g.jsxs("div",{className:"flex justify-between mt-6",children:[g.jsxs(xi,{variant:"ghost",disabled:e===0,onClick:()=>t(P=>Math.max(0,P-1)),className:"gap-2",children:[g.jsx(WS,{className:"h-4 w-4"})," Anterior"]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs("span",{className:"text-xs text-gray-400",children:[Object.keys(T).length," KPI’s"]}),g.jsxs(xi,{onClick:()=>e===4?H():t(P=>Math.min(4,P+1)),className:"gap-2",children:[e===4?"Finalizar":"Siguiente"," ",g.jsx(QS,{className:"h-4 w-4"})]})]})]}),S.open&&g.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",onClick:()=>{w({open:!1,url:"",title:"",id:""})},children:g.jsxs("div",{className:"bg-white rounded-xl shadow-xl w-full max-w-3xl h-[75vh] flex flex-col",onClick:P=>P.stopPropagation(),children:[g.jsxs("div",{className:"flex items-center justify-between p-3 border-b",children:[g.jsxs("div",{className:"font-semibold text-sm",children:["Más info: ",(B==null?void 0:B.title)||S.title]}),g.jsx("div",{className:"flex items-center gap-2",children:g.jsx("button",{className:"w-7 h-7 rounded-full border text-sm",onClick:()=>{w({open:!1,url:"",title:"",id:""})},children:"×"})})]}),g.jsx("div",{className:"flex-1 min-h-0",children:B?g.jsxs("div",{className:"p-4 overflow-y-auto h-full",children:[(B==null?void 0:B.subtitle)&&g.jsx("div",{className:"text-xs text-gray-500 mb-2",children:B.subtitle}),g.jsx("div",{className:"prose max-w-none text-sm",dangerouslySetInnerHTML:{__html:B.html}})]}):S.url?g.jsx("iframe",{src:S.url,className:"w-full h-full rounded-b-xl",title:"Más info"}):g.jsx("div",{className:"p-4 text-sm text-gray-500",children:"No hay URL disponible para este KPI."})})]})}),f&&g.jsx("div",{className:"fixed bottom-4 right-4 z-50 rounded-xl bg-black/90 text-white px-4 py-2 shadow-lg",children:f})]})}function dw(){return g.jsxs("div",{className:"min-h-full",children:[g.jsx("header",{className:"border-b bg-white",children:g.jsx("div",{className:"max-w-6xl mx-auto px-4 py-3",children:g.jsx("h1",{className:"text-xl font-semibold",children:"KPIs"})})}),g.jsx("main",{className:"max-w-6xl mx-auto px-4 py-6",children:g.jsx(uw,{})})]})}dm(document.getElementById("root")).render(g.jsx(oe.StrictMode,{children:g.jsx(dw,{})}));
