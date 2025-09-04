(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();function ig(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ap={exports:{}},_r={},lp={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=Symbol.for("react.element"),ng=Symbol.for("react.portal"),sg=Symbol.for("react.fragment"),rg=Symbol.for("react.strict_mode"),og=Symbol.for("react.profiler"),ag=Symbol.for("react.provider"),lg=Symbol.for("react.context"),cg=Symbol.for("react.forward_ref"),ug=Symbol.for("react.suspense"),dg=Symbol.for("react.memo"),pg=Symbol.for("react.lazy"),Ic=Symbol.iterator;function fg(e){return e===null||typeof e!="object"?null:(e=Ic&&e[Ic]||e["@@iterator"],typeof e=="function"?e:null)}var cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},up=Object.assign,dp={};function sn(e,t,i){this.props=e,this.context=t,this.refs=dp,this.updater=i||cp}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pp(){}pp.prototype=sn.prototype;function sl(e,t,i){this.props=e,this.context=t,this.refs=dp,this.updater=i||cp}var rl=sl.prototype=new pp;rl.constructor=sl;up(rl,sn.prototype);rl.isPureReactComponent=!0;var Vc=Array.isArray,fp=Object.prototype.hasOwnProperty,ol={current:null},mp={key:!0,ref:!0,__self:!0,__source:!0};function hp(e,t,i){var n,s={},r=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(r=""+t.key),t)fp.call(t,n)&&!mp.hasOwnProperty(n)&&(s[n]=t[n]);var a=arguments.length-2;if(a===1)s.children=i;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)s[n]===void 0&&(s[n]=a[n]);return{$$typeof:cs,type:e,key:r,ref:o,props:s,_owner:ol.current}}function mg(e,t){return{$$typeof:cs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function al(e){return typeof e=="object"&&e!==null&&e.$$typeof===cs}function hg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var Fc=/\/+/g;function ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hg(""+e.key):t.toString(36)}function Hs(e,t,i,n,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case cs:case ng:o=!0}}if(o)return o=e,s=s(o),e=n===""?"."+ao(o,0):n,Vc(s)?(i="",e!=null&&(i=e.replace(Fc,"$&/")+"/"),Hs(s,t,i,"",function(c){return c})):s!=null&&(al(s)&&(s=mg(s,i+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Fc,"$&/")+"/")+e)),t.push(s)),1;if(o=0,n=n===""?".":n+":",Vc(e))for(var a=0;a<e.length;a++){r=e[a];var l=n+ao(r,a);o+=Hs(r,t,i,l,s)}else if(l=fg(e),typeof l=="function")for(e=l.call(e),a=0;!(r=e.next()).done;)r=r.value,l=n+ao(r,a++),o+=Hs(r,t,i,l,s);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Cs(e,t,i){if(e==null)return e;var n=[],s=0;return Hs(e,n,"","",function(r){return t.call(i,r,s++)}),n}function gg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Qs={transition:null},vg={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Qs,ReactCurrentOwner:ol};function gp(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Cs,forEach:function(e,t,i){Cs(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return Cs(e,function(){t++}),t},toArray:function(e){return Cs(e,function(t){return t})||[]},only:function(e){if(!al(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=sn;I.Fragment=sg;I.Profiler=og;I.PureComponent=sl;I.StrictMode=rg;I.Suspense=ug;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg;I.act=gp;I.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=up({},e.props),s=e.key,r=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,o=ol.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)fp.call(t,l)&&!mp.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=i;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:cs,type:e.type,key:s,ref:r,props:n,_owner:o}};I.createContext=function(e){return e={$$typeof:lg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ag,_context:e},e.Consumer=e};I.createElement=hp;I.createFactory=function(e){var t=hp.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:cg,render:e}};I.isValidElement=al;I.lazy=function(e){return{$$typeof:pg,_payload:{_status:-1,_result:e},_init:gg}};I.memo=function(e,t){return{$$typeof:dg,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Qs.transition;Qs.transition={};try{e()}finally{Qs.transition=t}};I.unstable_act=gp;I.useCallback=function(e,t){return Ee.current.useCallback(e,t)};I.useContext=function(e){return Ee.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ee.current.useEffect(e,t)};I.useId=function(){return Ee.current.useId()};I.useImperativeHandle=function(e,t,i){return Ee.current.useImperativeHandle(e,t,i)};I.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ee.current.useMemo(e,t)};I.useReducer=function(e,t,i){return Ee.current.useReducer(e,t,i)};I.useRef=function(e){return Ee.current.useRef(e)};I.useState=function(e){return Ee.current.useState(e)};I.useSyncExternalStore=function(e,t,i){return Ee.current.useSyncExternalStore(e,t,i)};I.useTransition=function(){return Ee.current.useTransition()};I.version="18.3.1";lp.exports=I;var b=lp.exports;const W=ig(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg=b,xg=Symbol.for("react.element"),Sg=Symbol.for("react.fragment"),wg=Object.prototype.hasOwnProperty,Tg=yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jg={key:!0,ref:!0,__self:!0,__source:!0};function vp(e,t,i){var n,s={},r=null,o=null;i!==void 0&&(r=""+i),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)wg.call(t,n)&&!jg.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:xg,type:e,key:r,ref:o,props:s,_owner:Tg.current}}_r.Fragment=Sg;_r.jsx=vp;_r.jsxs=vp;ap.exports=_r;var g=ap.exports,yp={exports:{}},Oe={},xp={exports:{}},Sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,L){var R=k.length;k.push(L);e:for(;0<R;){var U=R-1>>>1,ie=k[U];if(0<s(ie,L))k[U]=L,k[R]=ie,R=U;else break e}}function i(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var L=k[0],R=k.pop();if(R!==L){k[0]=R;e:for(var U=0,ie=k.length,Ti=ie>>>1;U<Ti;){var pt=2*(U+1)-1,cn=k[pt],De=pt+1,Le=k[De];if(0>s(cn,R))De<ie&&0>s(Le,cn)?(k[U]=Le,k[De]=R,U=De):(k[U]=cn,k[pt]=R,U=pt);else if(De<ie&&0>s(Le,R))k[U]=Le,k[De]=R,U=De;else break e}}return L}function s(k,L){var R=k.sortIndex-L.sortIndex;return R!==0?R:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,p=3,v=!1,y=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(k){for(var L=i(c);L!==null;){if(L.callback===null)n(c);else if(L.startTime<=k)n(c),L.sortIndex=L.expirationTime,t(l,L);else break;L=i(c)}}function S(k){if(x=!1,h(k),!y)if(i(l)!==null)y=!0,wi(w);else{var L=i(c);L!==null&&te(S,L.startTime-k)}}function w(k,L){y=!1,x&&(x=!1,m(P),P=-1),v=!0;var R=p;try{for(h(L),d=i(l);d!==null&&(!(d.expirationTime>L)||k&&!Z());){var U=d.callback;if(typeof U=="function"){d.callback=null,p=d.priorityLevel;var ie=U(d.expirationTime<=L);L=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===i(l)&&n(l),h(L)}else n(l);d=i(l)}if(d!==null)var Ti=!0;else{var pt=i(c);pt!==null&&te(S,pt.startTime-L),Ti=!1}return Ti}finally{d=null,p=R,v=!1}}var T=!1,C=null,P=-1,z=5,M=-1;function Z(){return!(e.unstable_now()-M<z)}function Te(){if(C!==null){var k=e.unstable_now();M=k;var L=!0;try{L=C(!0,k)}finally{L?de():(T=!1,C=null)}}else T=!1}var de;if(typeof f=="function")de=function(){f(Te)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Ts=Zt.port2;Zt.port1.onmessage=Te,de=function(){Ts.postMessage(null)}}else de=function(){j(Te,0)};function wi(k){C=k,T||(T=!0,de())}function te(k,L){P=j(function(){k(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,wi(w))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return i(l)},e.unstable_next=function(k){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var R=p;p=L;try{return k()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var R=p;p=k;try{return L()}finally{p=R}},e.unstable_scheduleCallback=function(k,L,R){var U=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?U+R:U):R=U,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=R+ie,k={id:u++,callback:L,priorityLevel:k,startTime:R,expirationTime:ie,sortIndex:-1},R>U?(k.sortIndex=R,t(c,k),i(l)===null&&k===i(c)&&(x?(m(P),P=-1):x=!0,te(S,R-U))):(k.sortIndex=ie,t(l,k),y||v||(y=!0,wi(w))),k},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(k){var L=p;return function(){var R=p;p=L;try{return k.apply(this,arguments)}finally{p=R}}}})(Sp);xp.exports=Sp;var Pg=xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg=b,Fe=Pg;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wp=new Set,Un={};function yi(e,t){Hi(e,t),Hi(e+"Capture",t)}function Hi(e,t){for(Un[e]=t,e=0;e<t.length;e++)wp.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=Object.prototype.hasOwnProperty,Cg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_c={},Oc={};function kg(e){return Xo.call(Oc,e)?!0:Xo.call(_c,e)?!1:Cg.test(e)?Oc[e]=!0:(_c[e]=!0,!1)}function bg(e,t,i,n){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ag(e,t,i,n){if(t===null||typeof t>"u"||bg(e,t,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,i,n,s,r,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ll=/[\-:]([a-z])/g;function cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ll,cl);he[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ll,cl);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ll,cl);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function ul(e,t,i,n){var s=he.hasOwnProperty(t)?he[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ag(t,i,s,n)&&(i=null),n||s===null?kg(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):s.mustUseProperty?e[s.propertyName]=i===null?s.type===3?!1:"":i:(t=s.attributeName,n=s.attributeNamespace,i===null?e.removeAttribute(t):(s=s.type,i=s===3||s===4&&i===!0?"":""+i,n?e.setAttributeNS(n,t,i):e.setAttribute(t,i))))}var Ct=Eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),Yo=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),pl=Symbol.for("react.forward_ref"),Zo=Symbol.for("react.suspense"),Jo=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Pp=Symbol.for("react.offscreen"),Uc=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Uc&&e[Uc]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,lo;function wn(e){if(lo===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);lo=t&&t[1]||""}return`
`+lo+e}var co=!1;function uo(e,t){if(!e||co)return"";co=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),r=n.stack.split(`
`),o=s.length-1,a=r.length-1;1<=o&&0<=a&&s[o]!==r[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==r[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==r[a]){var l=`
`+s[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{co=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?wn(e):""}function Ng(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=uo(e.type,!1),e;case 11:return e=uo(e.type.render,!1),e;case 1:return e=uo(e.type,!0),e;default:return""}}function ea(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ei:return"Fragment";case Pi:return"Portal";case Yo:return"Profiler";case dl:return"StrictMode";case Zo:return"Suspense";case Jo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jp:return(e.displayName||"Context")+".Consumer";case Tp:return(e._context.displayName||"Context")+".Provider";case pl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fl:return t=e.displayName||null,t!==null?t:ea(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return ea(e(t))}catch{}}return null}function Mg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ea(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dg(e){var t=Ep(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){n=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bs(e){e._valueTracker||(e._valueTracker=Dg(e))}function Cp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=Ep(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ta(e,t){var i=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Bc(e,t){var i=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;i=$t(t.value!=null?t.value:i),e._wrapperState={initialChecked:n,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kp(e,t){t=t.checked,t!=null&&ul(e,"checked",t,!1)}function ia(e,t){kp(e,t);var i=$t(t.value),n=t.type;if(i!=null)n==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?na(e,t.type,i):t.hasOwnProperty("defaultValue")&&na(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qc(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function na(e,t,i){(t!=="number"||lr(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Tn=Array.isArray;function Ui(e,t,i,n){if(e=e.options,t){t={};for(var s=0;s<i.length;s++)t["$"+i[s]]=!0;for(i=0;i<e.length;i++)s=t.hasOwnProperty("$"+e[i].value),e[i].selected!==s&&(e[i].selected=s),s&&n&&(e[i].defaultSelected=!0)}else{for(i=""+$t(i),t=null,s=0;s<e.length;s++){if(e[s].value===i){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(E(92));if(Tn(i)){if(1<i.length)throw Error(E(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:$t(i)}}function bp(e,t){var i=$t(t.value),n=$t(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),n!=null&&(e.defaultValue=""+n)}function Kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ap(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ap(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var As,Np=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,i,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(As=As||document.createElement("div"),As.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=As.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lg=["Webkit","ms","Moz","O"];Object.keys(bn).forEach(function(e){Lg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bn[t]=bn[e]})});function Mp(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||bn.hasOwnProperty(e)&&bn[e]?(""+t).trim():t+"px"}function Dp(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var n=i.indexOf("--")===0,s=Mp(i,t[i],n);i==="float"&&(i="cssFloat"),n?e.setProperty(i,s):e[i]=s}}var Rg=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(e,t){if(t){if(Rg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function aa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ca=null,Bi=null,qi=null;function Wc(e){if(e=ps(e)){if(typeof ca!="function")throw Error(E(280));var t=e.stateNode;t&&(t=$r(t),ca(e.stateNode,e.type,t))}}function Lp(e){Bi?qi?qi.push(e):qi=[e]:Bi=e}function Rp(){if(Bi){var e=Bi,t=qi;if(qi=Bi=null,Wc(e),t)for(e=0;e<t.length;e++)Wc(t[e])}}function zp(e,t){return e(t)}function Ip(){}var po=!1;function Vp(e,t,i){if(po)return e(t,i);po=!0;try{return zp(e,t,i)}finally{po=!1,(Bi!==null||qi!==null)&&(Ip(),Rp())}}function qn(e,t){var i=e.stateNode;if(i===null)return null;var n=$r(i);if(n===null)return null;i=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(E(231,t,typeof i));return i}var ua=!1;if(wt)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){ua=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{ua=!1}function zg(e,t,i,n,s,r,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(i,c)}catch(u){this.onError(u)}}var An=!1,cr=null,ur=!1,da=null,Ig={onError:function(e){An=!0,cr=e}};function Vg(e,t,i,n,s,r,o,a,l){An=!1,cr=null,zg.apply(Ig,arguments)}function Fg(e,t,i,n,s,r,o,a,l){if(Vg.apply(this,arguments),An){if(An){var c=cr;An=!1,cr=null}else throw Error(E(198));ur||(ur=!0,da=c)}}function xi(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Fp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hc(e){if(xi(e)!==e)throw Error(E(188))}function _g(e){var t=e.alternate;if(!t){if(t=xi(e),t===null)throw Error(E(188));return t!==e?null:e}for(var i=e,n=t;;){var s=i.return;if(s===null)break;var r=s.alternate;if(r===null){if(n=s.return,n!==null){i=n;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===i)return Hc(s),e;if(r===n)return Hc(s),t;r=r.sibling}throw Error(E(188))}if(i.return!==n.return)i=s,n=r;else{for(var o=!1,a=s.child;a;){if(a===i){o=!0,i=s,n=r;break}if(a===n){o=!0,n=s,i=r;break}a=a.sibling}if(!o){for(a=r.child;a;){if(a===i){o=!0,i=r,n=s;break}if(a===n){o=!0,n=r,i=s;break}a=a.sibling}if(!o)throw Error(E(189))}}if(i.alternate!==n)throw Error(E(190))}if(i.tag!==3)throw Error(E(188));return i.stateNode.current===i?e:t}function _p(e){return e=_g(e),e!==null?Op(e):null}function Op(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Op(e);if(t!==null)return t;e=e.sibling}return null}var Up=Fe.unstable_scheduleCallback,Qc=Fe.unstable_cancelCallback,Og=Fe.unstable_shouldYield,Ug=Fe.unstable_requestPaint,re=Fe.unstable_now,Bg=Fe.unstable_getCurrentPriorityLevel,hl=Fe.unstable_ImmediatePriority,Bp=Fe.unstable_UserBlockingPriority,dr=Fe.unstable_NormalPriority,qg=Fe.unstable_LowPriority,qp=Fe.unstable_IdlePriority,Or=null,lt=null;function $g(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Or,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Hg,Kg=Math.log,Wg=Math.LN2;function Hg(e){return e>>>=0,e===0?32:31-(Kg(e)/Wg|0)|0}var Ns=64,Ms=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pr(e,t){var i=e.pendingLanes;if(i===0)return 0;var n=0,s=e.suspendedLanes,r=e.pingedLanes,o=i&268435455;if(o!==0){var a=o&~s;a!==0?n=jn(a):(r&=o,r!==0&&(n=jn(r)))}else o=i&~s,o!==0?n=jn(o):r!==0&&(n=jn(r));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,r=t&-t,s>=r||s===16&&(r&4194240)!==0))return t;if(n&4&&(n|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)i=31-it(t),s=1<<i,n|=e[i],t&=~s;return n}function Qg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gg(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-it(r),a=1<<o,l=s[o];l===-1?(!(a&i)||a&n)&&(s[o]=Qg(a,t)):l<=t&&(e.expiredLanes|=a),r&=~a}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $p(){var e=Ns;return Ns<<=1,!(Ns&4194240)&&(Ns=64),e}function fo(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function us(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=i}function Xg(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<i;){var s=31-it(i),r=1<<s;t[s]=0,n[s]=-1,e[s]=-1,i&=~r}}function gl(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-it(i),s=1<<n;s&t|e[n]&t&&(e[n]|=t),i&=~s}}var _=0;function Kp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wp,vl,Hp,Qp,Gp,fa=!1,Ds=[],zt=null,It=null,Vt=null,$n=new Map,Kn=new Map,Mt=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gc(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function pn(e,t,i,n,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:r,targetContainers:[s]},t!==null&&(t=ps(t),t!==null&&vl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Zg(e,t,i,n,s){switch(t){case"focusin":return zt=pn(zt,e,t,i,n,s),!0;case"dragenter":return It=pn(It,e,t,i,n,s),!0;case"mouseover":return Vt=pn(Vt,e,t,i,n,s),!0;case"pointerover":var r=s.pointerId;return $n.set(r,pn($n.get(r)||null,e,t,i,n,s)),!0;case"gotpointercapture":return r=s.pointerId,Kn.set(r,pn(Kn.get(r)||null,e,t,i,n,s)),!0}return!1}function Xp(e){var t=si(e.target);if(t!==null){var i=xi(t);if(i!==null){if(t=i.tag,t===13){if(t=Fp(i),t!==null){e.blockedOn=t,Gp(e.priority,function(){Hp(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=ma(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);la=n,i.target.dispatchEvent(n),la=null}else return t=ps(i),t!==null&&vl(t),e.blockedOn=i,!1;t.shift()}return!0}function Xc(e,t,i){Gs(e)&&i.delete(t)}function Jg(){fa=!1,zt!==null&&Gs(zt)&&(zt=null),It!==null&&Gs(It)&&(It=null),Vt!==null&&Gs(Vt)&&(Vt=null),$n.forEach(Xc),Kn.forEach(Xc)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,fa||(fa=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Jg)))}function Wn(e){function t(s){return fn(s,e)}if(0<Ds.length){fn(Ds[0],e);for(var i=1;i<Ds.length;i++){var n=Ds[i];n.blockedOn===e&&(n.blockedOn=null)}}for(zt!==null&&fn(zt,e),It!==null&&fn(It,e),Vt!==null&&fn(Vt,e),$n.forEach(t),Kn.forEach(t),i=0;i<Mt.length;i++)n=Mt[i],n.blockedOn===e&&(n.blockedOn=null);for(;0<Mt.length&&(i=Mt[0],i.blockedOn===null);)Xp(i),i.blockedOn===null&&Mt.shift()}var $i=Ct.ReactCurrentBatchConfig,fr=!0;function ev(e,t,i,n){var s=_,r=$i.transition;$i.transition=null;try{_=1,yl(e,t,i,n)}finally{_=s,$i.transition=r}}function tv(e,t,i,n){var s=_,r=$i.transition;$i.transition=null;try{_=4,yl(e,t,i,n)}finally{_=s,$i.transition=r}}function yl(e,t,i,n){if(fr){var s=ma(e,t,i,n);if(s===null)jo(e,t,n,mr,i),Gc(e,n);else if(Zg(s,e,t,i,n))n.stopPropagation();else if(Gc(e,n),t&4&&-1<Yg.indexOf(e)){for(;s!==null;){var r=ps(s);if(r!==null&&Wp(r),r=ma(e,t,i,n),r===null&&jo(e,t,n,mr,i),r===s)break;s=r}s!==null&&n.stopPropagation()}else jo(e,t,n,null,i)}}var mr=null;function ma(e,t,i,n){if(mr=null,e=ml(n),e=si(e),e!==null)if(t=xi(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Fp(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mr=e,null}function Yp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bg()){case hl:return 1;case Bp:return 4;case dr:case qg:return 16;case qp:return 536870912;default:return 16}default:return 16}}var Lt=null,xl=null,Xs=null;function Zp(){if(Xs)return Xs;var e,t=xl,i=t.length,n,s="value"in Lt?Lt.value:Lt.textContent,r=s.length;for(e=0;e<i&&t[e]===s[e];e++);var o=i-e;for(n=1;n<=o&&t[i-n]===s[r-n];n++);return Xs=s.slice(e,1<n?1-n:void 0)}function Ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ls(){return!0}function Yc(){return!1}function Ue(e){function t(i,n,s,r,o){this._reactName=i,this._targetInst=s,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(i=e[a],this[a]=i?i(r):r[a]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ls:Yc,this.isPropagationStopped=Yc,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),t}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Ue(rn),ds=Y({},rn,{view:0,detail:0}),iv=Ue(ds),mo,ho,mn,Ur=Y({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(mo=e.screenX-mn.screenX,ho=e.screenY-mn.screenY):ho=mo=0,mn=e),mo)},movementY:function(e){return"movementY"in e?e.movementY:ho}}),Zc=Ue(Ur),nv=Y({},Ur,{dataTransfer:0}),sv=Ue(nv),rv=Y({},ds,{relatedTarget:0}),go=Ue(rv),ov=Y({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),av=Ue(ov),lv=Y({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cv=Ue(lv),uv=Y({},rn,{data:0}),Jc=Ue(uv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fv[e])?!!t[e]:!1}function wl(){return mv}var hv=Y({},ds,{key:function(e){if(e.key){var t=dv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?Ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gv=Ue(hv),vv=Y({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=Ue(vv),yv=Y({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),xv=Ue(yv),Sv=Y({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=Ue(Sv),Tv=Y({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=Ue(Tv),Pv=[9,13,27,32],Tl=wt&&"CompositionEvent"in window,Nn=null;wt&&"documentMode"in document&&(Nn=document.documentMode);var Ev=wt&&"TextEvent"in window&&!Nn,Jp=wt&&(!Tl||Nn&&8<Nn&&11>=Nn),tu=" ",iu=!1;function ef(e,t){switch(e){case"keyup":return Pv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ci=!1;function Cv(e,t){switch(e){case"compositionend":return tf(t);case"keypress":return t.which!==32?null:(iu=!0,tu);case"textInput":return e=t.data,e===tu&&iu?null:e;default:return null}}function kv(e,t){if(Ci)return e==="compositionend"||!Tl&&ef(e,t)?(e=Zp(),Xs=xl=Lt=null,Ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jp&&t.locale!=="ko"?null:t.data;default:return null}}var bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bv[e.type]:t==="textarea"}function nf(e,t,i,n){Lp(n),t=hr(t,"onChange"),0<t.length&&(i=new Sl("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var Mn=null,Hn=null;function Av(e){mf(e,0)}function Br(e){var t=Ai(e);if(Cp(t))return e}function Nv(e,t){if(e==="change")return t}var sf=!1;if(wt){var vo;if(wt){var yo="oninput"in document;if(!yo){var su=document.createElement("div");su.setAttribute("oninput","return;"),yo=typeof su.oninput=="function"}vo=yo}else vo=!1;sf=vo&&(!document.documentMode||9<document.documentMode)}function ru(){Mn&&(Mn.detachEvent("onpropertychange",rf),Hn=Mn=null)}function rf(e){if(e.propertyName==="value"&&Br(Hn)){var t=[];nf(t,Hn,e,ml(e)),Vp(Av,t)}}function Mv(e,t,i){e==="focusin"?(ru(),Mn=t,Hn=i,Mn.attachEvent("onpropertychange",rf)):e==="focusout"&&ru()}function Dv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Br(Hn)}function Lv(e,t){if(e==="click")return Br(t)}function Rv(e,t){if(e==="input"||e==="change")return Br(t)}function zv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:zv;function Qn(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var s=i[n];if(!Xo.call(t,s)||!st(e[s],t[s]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var i=ou(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ou(i)}}function of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function af(){for(var e=window,t=lr();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=lr(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Iv(e){var t=af(),i=e.focusedElem,n=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&of(i.ownerDocument.documentElement,i)){if(n!==null&&jl(i)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=i.textContent.length,r=Math.min(n.start,s);n=n.end===void 0?r:Math.min(n.end,s),!e.extend&&r>n&&(s=n,n=r,r=s),s=au(i,r);var o=au(i,n);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),r>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vv=wt&&"documentMode"in document&&11>=document.documentMode,ki=null,ha=null,Dn=null,ga=!1;function lu(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ga||ki==null||ki!==lr(n)||(n=ki,"selectionStart"in n&&jl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Dn&&Qn(Dn,n)||(Dn=n,n=hr(ha,"onSelect"),0<n.length&&(t=new Sl("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=ki)))}function Rs(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var bi={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionend:Rs("Transition","TransitionEnd")},xo={},lf={};wt&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);function qr(e){if(xo[e])return xo[e];if(!bi[e])return e;var t=bi[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in lf)return xo[e]=t[i];return e}var cf=qr("animationend"),uf=qr("animationiteration"),df=qr("animationstart"),pf=qr("transitionend"),ff=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){ff.set(e,t),yi(t,[e])}for(var So=0;So<cu.length;So++){var wo=cu[So],Fv=wo.toLowerCase(),_v=wo[0].toUpperCase()+wo.slice(1);Qt(Fv,"on"+_v)}Qt(cf,"onAnimationEnd");Qt(uf,"onAnimationIteration");Qt(df,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(pf,"onTransitionEnd");Hi("onMouseEnter",["mouseout","mouseover"]);Hi("onMouseLeave",["mouseout","mouseover"]);Hi("onPointerEnter",["pointerout","pointerover"]);Hi("onPointerLeave",["pointerout","pointerover"]);yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function uu(e,t,i){var n=e.type||"unknown-event";e.currentTarget=i,Fg(n,t,void 0,e),e.currentTarget=null}function mf(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],s=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var a=n[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==r&&s.isPropagationStopped())break e;uu(s,a,c),r=l}else for(o=0;o<n.length;o++){if(a=n[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==r&&s.isPropagationStopped())break e;uu(s,a,c),r=l}}}if(ur)throw e=da,ur=!1,da=null,e}function q(e,t){var i=t[wa];i===void 0&&(i=t[wa]=new Set);var n=e+"__bubble";i.has(n)||(hf(t,e,2,!1),i.add(n))}function To(e,t,i){var n=0;t&&(n|=4),hf(i,e,n,t)}var zs="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[zs]){e[zs]=!0,wp.forEach(function(i){i!=="selectionchange"&&(Ov.has(i)||To(i,!1,e),To(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zs]||(t[zs]=!0,To("selectionchange",!1,t))}}function hf(e,t,i,n){switch(Yp(t)){case 1:var s=ev;break;case 4:s=tv;break;default:s=yl}i=s.bind(null,t,i,e),s=void 0,!ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,i,{capture:!0,passive:s}):e.addEventListener(t,i,!0):s!==void 0?e.addEventListener(t,i,{passive:s}):e.addEventListener(t,i,!1)}function jo(e,t,i,n,s){var r=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var a=n.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=si(a),o===null)return;if(l=o.tag,l===5||l===6){n=r=o;continue e}a=a.parentNode}}n=n.return}Vp(function(){var c=r,u=ml(i),d=[];e:{var p=ff.get(e);if(p!==void 0){var v=Sl,y=e;switch(e){case"keypress":if(Ys(i)===0)break e;case"keydown":case"keyup":v=gv;break;case"focusin":y="focus",v=go;break;case"focusout":y="blur",v=go;break;case"beforeblur":case"afterblur":v=go;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xv;break;case cf:case uf:case df:v=av;break;case pf:v=wv;break;case"scroll":v=iv;break;case"wheel":v=jv;break;case"copy":case"cut":case"paste":v=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=eu}var x=(t&4)!==0,j=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var f=c,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,m!==null&&(S=qn(f,m),S!=null&&x.push(Xn(f,S,h)))),j)break;f=f.return}0<x.length&&(p=new v(p,y,null,i,u),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&i!==la&&(y=i.relatedTarget||i.fromElement)&&(si(y)||y[Tt]))break e;if((v||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=i.relatedTarget||i.toElement,v=c,y=y?si(y):null,y!==null&&(j=xi(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=Zc,S="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=eu,S="onPointerLeave",m="onPointerEnter",f="pointer"),j=v==null?p:Ai(v),h=y==null?p:Ai(y),p=new x(S,f+"leave",v,i,u),p.target=j,p.relatedTarget=h,S=null,si(u)===c&&(x=new x(m,f+"enter",y,i,u),x.target=h,x.relatedTarget=j,S=x),j=S,v&&y)t:{for(x=v,m=y,f=0,h=x;h;h=ji(h))f++;for(h=0,S=m;S;S=ji(S))h++;for(;0<f-h;)x=ji(x),f--;for(;0<h-f;)m=ji(m),h--;for(;f--;){if(x===m||m!==null&&x===m.alternate)break t;x=ji(x),m=ji(m)}x=null}else x=null;v!==null&&du(d,p,v,x,!1),y!==null&&j!==null&&du(d,j,y,x,!0)}}e:{if(p=c?Ai(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var w=Nv;else if(nu(p))if(sf)w=Rv;else{w=Dv;var T=Mv}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=Lv);if(w&&(w=w(e,c))){nf(d,w,i,u);break e}T&&T(e,p,c),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&na(p,"number",p.value)}switch(T=c?Ai(c):window,e){case"focusin":(nu(T)||T.contentEditable==="true")&&(ki=T,ha=c,Dn=null);break;case"focusout":Dn=ha=ki=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,lu(d,i,u);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":lu(d,i,u)}var C;if(Tl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ci?ef(e,i)&&(P="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(P="onCompositionStart");P&&(Jp&&i.locale!=="ko"&&(Ci||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ci&&(C=Zp()):(Lt=u,xl="value"in Lt?Lt.value:Lt.textContent,Ci=!0)),T=hr(c,P),0<T.length&&(P=new Jc(P,e,null,i,u),d.push({event:P,listeners:T}),C?P.data=C:(C=tf(i),C!==null&&(P.data=C)))),(C=Ev?Cv(e,i):kv(e,i))&&(c=hr(c,"onBeforeInput"),0<c.length&&(u=new Jc("onBeforeInput","beforeinput",null,i,u),d.push({event:u,listeners:c}),u.data=C))}mf(d,t)})}function Xn(e,t,i){return{instance:e,listener:t,currentTarget:i}}function hr(e,t){for(var i=t+"Capture",n=[];e!==null;){var s=e,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=qn(e,i),r!=null&&n.unshift(Xn(e,r,s)),r=qn(e,t),r!=null&&n.push(Xn(e,r,s))),e=e.return}return n}function ji(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function du(e,t,i,n,s){for(var r=t._reactName,o=[];i!==null&&i!==n;){var a=i,l=a.alternate,c=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&c!==null&&(a=c,s?(l=qn(i,r),l!=null&&o.unshift(Xn(i,l,a))):s||(l=qn(i,r),l!=null&&o.push(Xn(i,l,a)))),i=i.return}o.length!==0&&e.push({event:t,listeners:o})}var Uv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(Uv,`
`).replace(Bv,"")}function Is(e,t,i){if(t=pu(t),pu(e)!==t&&i)throw Error(E(425))}function gr(){}var va=null,ya=null;function xa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sa=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,fu=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof fu<"u"?function(e){return fu.resolve(null).then(e).catch(Kv)}:Sa;function Kv(e){setTimeout(function(){throw e})}function Po(e,t){var i=t,n=0;do{var s=i.nextSibling;if(e.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(n===0){e.removeChild(s),Wn(t);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=s}while(i);Wn(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var on=Math.random().toString(36).slice(2),at="__reactFiber$"+on,Yn="__reactProps$"+on,Tt="__reactContainer$"+on,wa="__reactEvents$"+on,Wv="__reactListeners$"+on,Hv="__reactHandles$"+on;function si(e){var t=e[at];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Tt]||i[at]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=mu(e);e!==null;){if(i=e[at])return i;e=mu(e)}return t}e=i,i=e.parentNode}return null}function ps(e){return e=e[at]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ai(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function $r(e){return e[Yn]||null}var Ta=[],Ni=-1;function Gt(e){return{current:e}}function $(e){0>Ni||(e.current=Ta[Ni],Ta[Ni]=null,Ni--)}function B(e,t){Ni++,Ta[Ni]=e.current,e.current=t}var Kt={},we=Gt(Kt),Ae=Gt(!1),fi=Kt;function Qi(e,t){var i=e.type.contextTypes;if(!i)return Kt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in i)s[r]=t[r];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ne(e){return e=e.childContextTypes,e!=null}function vr(){$(Ae),$(we)}function hu(e,t,i){if(we.current!==Kt)throw Error(E(168));B(we,t),B(Ae,i)}function gf(e,t,i){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(E(108,Mg(e)||"Unknown",s));return Y({},i,n)}function yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,fi=we.current,B(we,e),B(Ae,Ae.current),!0}function gu(e,t,i){var n=e.stateNode;if(!n)throw Error(E(169));i?(e=gf(e,t,fi),n.__reactInternalMemoizedMergedChildContext=e,$(Ae),$(we),B(we,e)):$(Ae),B(Ae,i)}var ht=null,Kr=!1,Eo=!1;function vf(e){ht===null?ht=[e]:ht.push(e)}function Qv(e){Kr=!0,vf(e)}function Xt(){if(!Eo&&ht!==null){Eo=!0;var e=0,t=_;try{var i=ht;for(_=1;e<i.length;e++){var n=i[e];do n=n(!0);while(n!==null)}ht=null,Kr=!1}catch(s){throw ht!==null&&(ht=ht.slice(e+1)),Up(hl,Xt),s}finally{_=t,Eo=!1}}return null}var Mi=[],Di=0,xr=null,Sr=0,$e=[],Ke=0,mi=null,gt=1,vt="";function ei(e,t){Mi[Di++]=Sr,Mi[Di++]=xr,xr=e,Sr=t}function yf(e,t,i){$e[Ke++]=gt,$e[Ke++]=vt,$e[Ke++]=mi,mi=e;var n=gt;e=vt;var s=32-it(n)-1;n&=~(1<<s),i+=1;var r=32-it(t)+s;if(30<r){var o=s-s%5;r=(n&(1<<o)-1).toString(32),n>>=o,s-=o,gt=1<<32-it(t)+s|i<<s|n,vt=r+e}else gt=1<<r|i<<s|n,vt=e}function Pl(e){e.return!==null&&(ei(e,1),yf(e,1,0))}function El(e){for(;e===xr;)xr=Mi[--Di],Mi[Di]=null,Sr=Mi[--Di],Mi[Di]=null;for(;e===mi;)mi=$e[--Ke],$e[Ke]=null,vt=$e[--Ke],$e[Ke]=null,gt=$e[--Ke],$e[Ke]=null}var Ie=null,ze=null,H=!1,tt=null;function xf(e,t){var i=We(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function vu(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,ze=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=mi!==null?{id:gt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=We(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Ie=e,ze=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pa(e){if(H){var t=ze;if(t){var i=t;if(!vu(e,t)){if(ja(e))throw Error(E(418));t=Ft(i.nextSibling);var n=Ie;t&&vu(e,t)?xf(n,i):(e.flags=e.flags&-4097|2,H=!1,Ie=e)}}else{if(ja(e))throw Error(E(418));e.flags=e.flags&-4097|2,H=!1,Ie=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Vs(e){if(e!==Ie)return!1;if(!H)return yu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xa(e.type,e.memoizedProps)),t&&(t=ze)){if(ja(e))throw Sf(),Error(E(418));for(;t;)xf(e,t),t=Ft(t.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){ze=Ft(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ie?Ft(e.stateNode.nextSibling):null;return!0}function Sf(){for(var e=ze;e;)e=Ft(e.nextSibling)}function Gi(){ze=Ie=null,H=!1}function Cl(e){tt===null?tt=[e]:tt.push(e)}var Gv=Ct.ReactCurrentBatchConfig;function hn(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(E(309));var n=i.stateNode}if(!n)throw Error(E(147,e));var s=n,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(o){var a=s.refs;o===null?delete a[r]:a[r]=o},t._stringRef=r,t)}if(typeof e!="string")throw Error(E(284));if(!i._owner)throw Error(E(290,e))}return e}function Fs(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xu(e){var t=e._init;return t(e._payload)}function wf(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function i(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function n(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function s(m,f){return m=Bt(m,f),m.index=0,m.sibling=null,m}function r(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,h,S){return f===null||f.tag!==6?(f=Do(h,m.mode,S),f.return=m,f):(f=s(f,h),f.return=m,f)}function l(m,f,h,S){var w=h.type;return w===Ei?u(m,f,h.props.children,S,h.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===At&&xu(w)===f.type)?(S=s(f,h.props),S.ref=hn(m,f,h),S.return=m,S):(S=sr(h.type,h.key,h.props,null,m.mode,S),S.ref=hn(m,f,h),S.return=m,S)}function c(m,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Lo(h,m.mode,S),f.return=m,f):(f=s(f,h.children||[]),f.return=m,f)}function u(m,f,h,S,w){return f===null||f.tag!==7?(f=ui(h,m.mode,S,w),f.return=m,f):(f=s(f,h),f.return=m,f)}function d(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Do(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ks:return h=sr(f.type,f.key,f.props,null,m.mode,h),h.ref=hn(m,null,f),h.return=m,h;case Pi:return f=Lo(f,m.mode,h),f.return=m,f;case At:var S=f._init;return d(m,S(f._payload),h)}if(Tn(f)||un(f))return f=ui(f,m.mode,h,null),f.return=m,f;Fs(m,f)}return null}function p(m,f,h,S){var w=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:a(m,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ks:return h.key===w?l(m,f,h,S):null;case Pi:return h.key===w?c(m,f,h,S):null;case At:return w=h._init,p(m,f,w(h._payload),S)}if(Tn(h)||un(h))return w!==null?null:u(m,f,h,S,null);Fs(m,h)}return null}function v(m,f,h,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(h)||null,a(f,m,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ks:return m=m.get(S.key===null?h:S.key)||null,l(f,m,S,w);case Pi:return m=m.get(S.key===null?h:S.key)||null,c(f,m,S,w);case At:var T=S._init;return v(m,f,h,T(S._payload),w)}if(Tn(S)||un(S))return m=m.get(h)||null,u(f,m,S,w,null);Fs(f,S)}return null}function y(m,f,h,S){for(var w=null,T=null,C=f,P=f=0,z=null;C!==null&&P<h.length;P++){C.index>P?(z=C,C=null):z=C.sibling;var M=p(m,C,h[P],S);if(M===null){C===null&&(C=z);break}e&&C&&M.alternate===null&&t(m,C),f=r(M,f,P),T===null?w=M:T.sibling=M,T=M,C=z}if(P===h.length)return i(m,C),H&&ei(m,P),w;if(C===null){for(;P<h.length;P++)C=d(m,h[P],S),C!==null&&(f=r(C,f,P),T===null?w=C:T.sibling=C,T=C);return H&&ei(m,P),w}for(C=n(m,C);P<h.length;P++)z=v(C,m,P,h[P],S),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?P:z.key),f=r(z,f,P),T===null?w=z:T.sibling=z,T=z);return e&&C.forEach(function(Z){return t(m,Z)}),H&&ei(m,P),w}function x(m,f,h,S){var w=un(h);if(typeof w!="function")throw Error(E(150));if(h=w.call(h),h==null)throw Error(E(151));for(var T=w=null,C=f,P=f=0,z=null,M=h.next();C!==null&&!M.done;P++,M=h.next()){C.index>P?(z=C,C=null):z=C.sibling;var Z=p(m,C,M.value,S);if(Z===null){C===null&&(C=z);break}e&&C&&Z.alternate===null&&t(m,C),f=r(Z,f,P),T===null?w=Z:T.sibling=Z,T=Z,C=z}if(M.done)return i(m,C),H&&ei(m,P),w;if(C===null){for(;!M.done;P++,M=h.next())M=d(m,M.value,S),M!==null&&(f=r(M,f,P),T===null?w=M:T.sibling=M,T=M);return H&&ei(m,P),w}for(C=n(m,C);!M.done;P++,M=h.next())M=v(C,m,P,M.value,S),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?P:M.key),f=r(M,f,P),T===null?w=M:T.sibling=M,T=M);return e&&C.forEach(function(Te){return t(m,Te)}),H&&ei(m,P),w}function j(m,f,h,S){if(typeof h=="object"&&h!==null&&h.type===Ei&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ks:e:{for(var w=h.key,T=f;T!==null;){if(T.key===w){if(w=h.type,w===Ei){if(T.tag===7){i(m,T.sibling),f=s(T,h.props.children),f.return=m,m=f;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===At&&xu(w)===T.type){i(m,T.sibling),f=s(T,h.props),f.ref=hn(m,T,h),f.return=m,m=f;break e}i(m,T);break}else t(m,T);T=T.sibling}h.type===Ei?(f=ui(h.props.children,m.mode,S,h.key),f.return=m,m=f):(S=sr(h.type,h.key,h.props,null,m.mode,S),S.ref=hn(m,f,h),S.return=m,m=S)}return o(m);case Pi:e:{for(T=h.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){i(m,f.sibling),f=s(f,h.children||[]),f.return=m,m=f;break e}else{i(m,f);break}else t(m,f);f=f.sibling}f=Lo(h,m.mode,S),f.return=m,m=f}return o(m);case At:return T=h._init,j(m,f,T(h._payload),S)}if(Tn(h))return y(m,f,h,S);if(un(h))return x(m,f,h,S);Fs(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(i(m,f.sibling),f=s(f,h),f.return=m,m=f):(i(m,f),f=Do(h,m.mode,S),f.return=m,m=f),o(m)):i(m,f)}return j}var Xi=wf(!0),Tf=wf(!1),wr=Gt(null),Tr=null,Li=null,kl=null;function bl(){kl=Li=Tr=null}function Al(e){var t=wr.current;$(wr),e._currentValue=t}function Ea(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function Ki(e,t){Tr=e,kl=Li=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(kl!==e)if(e={context:e,memoizedValue:t,next:null},Li===null){if(Tr===null)throw Error(E(308));Li=e,Tr.dependencies={lanes:0,firstContext:e}}else Li=Li.next=e;return t}var ri=null;function Nl(e){ri===null?ri=[e]:ri.push(e)}function jf(e,t,i,n){var s=t.interleaved;return s===null?(i.next=i,Nl(t)):(i.next=s.next,s.next=i),t.interleaved=i,jt(e,n)}function jt(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Nt=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,F&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,jt(e,i)}return s=n.interleaved,s===null?(t.next=t,Nl(n)):(t.next=s.next,s.next=t),n.interleaved=t,jt(e,i)}function Zs(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,gl(e,i)}}function Su(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var s=null,r=null;if(i=i.firstBaseUpdate,i!==null){do{var o={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};r===null?s=r=o:r=r.next=o,i=i.next}while(i!==null);r===null?s=r=t:r=r.next=t}else s=r=t;i={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:n.shared,effects:n.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function jr(e,t,i,n){var s=e.updateQueue;Nt=!1;var r=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?r=c:o.next=c,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(r!==null){var d=s.baseState;o=0,u=c=l=null,a=r;do{var p=a.lane,v=a.eventTime;if((n&p)===p){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(p=t,v=i,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=Y({},d,p);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,l=d):u=u.next=v,o|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else r===null&&(s.shared.lanes=0);gi|=o,e.lanes=o,e.memoizedState=d}}function wu(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=i,typeof s!="function")throw Error(E(191,s));s.call(n)}}}var fs={},ct=Gt(fs),Zn=Gt(fs),Jn=Gt(fs);function oi(e){if(e===fs)throw Error(E(174));return e}function Dl(e,t){switch(B(Jn,t),B(Zn,e),B(ct,fs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ra(t,e)}$(ct),B(ct,t)}function Yi(){$(ct),$(Zn),$(Jn)}function Ef(e){oi(Jn.current);var t=oi(ct.current),i=ra(t,e.type);t!==i&&(B(Zn,e),B(ct,i))}function Ll(e){Zn.current===e&&($(ct),$(Zn))}var Q=Gt(0);function Pr(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Co=[];function Rl(){for(var e=0;e<Co.length;e++)Co[e]._workInProgressVersionPrimary=null;Co.length=0}var Js=Ct.ReactCurrentDispatcher,ko=Ct.ReactCurrentBatchConfig,hi=0,X=null,ae=null,ce=null,Er=!1,Ln=!1,es=0,Xv=0;function ge(){throw Error(E(321))}function zl(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!st(e[i],t[i]))return!1;return!0}function Il(e,t,i,n,s,r){if(hi=r,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Js.current=e===null||e.memoizedState===null?ey:ty,e=i(n,s),Ln){r=0;do{if(Ln=!1,es=0,25<=r)throw Error(E(301));r+=1,ce=ae=null,t.updateQueue=null,Js.current=iy,e=i(n,s)}while(Ln)}if(Js.current=Cr,t=ae!==null&&ae.next!==null,hi=0,ce=ae=X=null,Er=!1,t)throw Error(E(300));return e}function Vl(){var e=es!==0;return es=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?X.memoizedState=ce=e:ce=ce.next=e,ce}function Ge(){if(ae===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?X.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(E(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?X.memoizedState=ce=e:ce=ce.next=e}return ce}function ts(e,t){return typeof t=="function"?t(e):t}function bo(e){var t=Ge(),i=t.queue;if(i===null)throw Error(E(311));i.lastRenderedReducer=e;var n=ae,s=n.baseQueue,r=i.pending;if(r!==null){if(s!==null){var o=s.next;s.next=r.next,r.next=o}n.baseQueue=s=r,i.pending=null}if(s!==null){r=s.next,n=n.baseState;var a=o=null,l=null,c=r;do{var u=c.lane;if((hi&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=n):l=l.next=d,X.lanes|=u,gi|=u}c=c.next}while(c!==null&&c!==r);l===null?o=n:l.next=a,st(n,t.memoizedState)||(be=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,i.lastRenderedState=n}if(e=i.interleaved,e!==null){s=e;do r=s.lane,X.lanes|=r,gi|=r,s=s.next;while(s!==e)}else s===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Ao(e){var t=Ge(),i=t.queue;if(i===null)throw Error(E(311));i.lastRenderedReducer=e;var n=i.dispatch,s=i.pending,r=t.memoizedState;if(s!==null){i.pending=null;var o=s=s.next;do r=e(r,o.action),o=o.next;while(o!==s);st(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),i.lastRenderedState=r}return[r,n]}function Cf(){}function kf(e,t){var i=X,n=Ge(),s=t(),r=!st(n.memoizedState,s);if(r&&(n.memoizedState=s,be=!0),n=n.queue,Fl(Nf.bind(null,i,n,e),[e]),n.getSnapshot!==t||r||ce!==null&&ce.memoizedState.tag&1){if(i.flags|=2048,is(9,Af.bind(null,i,n,s,t),void 0,null),ue===null)throw Error(E(349));hi&30||bf(i,t,s)}return s}function bf(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Af(e,t,i,n){t.value=i,t.getSnapshot=n,Mf(t)&&Df(e)}function Nf(e,t,i){return i(function(){Mf(t)&&Df(e)})}function Mf(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!st(e,i)}catch{return!0}}function Df(e){var t=jt(e,1);t!==null&&nt(t,e,1,-1)}function Tu(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:e},t.queue=e,e=e.dispatch=Jv.bind(null,X,e),[t.memoizedState,e]}function is(e,t,i,n){return e={tag:e,create:t,destroy:i,deps:n,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e)),e}function Lf(){return Ge().memoizedState}function er(e,t,i,n){var s=ot();X.flags|=e,s.memoizedState=is(1|t,i,void 0,n===void 0?null:n)}function Wr(e,t,i,n){var s=Ge();n=n===void 0?null:n;var r=void 0;if(ae!==null){var o=ae.memoizedState;if(r=o.destroy,n!==null&&zl(n,o.deps)){s.memoizedState=is(t,i,r,n);return}}X.flags|=e,s.memoizedState=is(1|t,i,r,n)}function ju(e,t){return er(8390656,8,e,t)}function Fl(e,t){return Wr(2048,8,e,t)}function Rf(e,t){return Wr(4,2,e,t)}function zf(e,t){return Wr(4,4,e,t)}function If(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vf(e,t,i){return i=i!=null?i.concat([e]):null,Wr(4,4,If.bind(null,t,e),i)}function _l(){}function Ff(e,t){var i=Ge();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&zl(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function _f(e,t){var i=Ge();t=t===void 0?null:t;var n=i.memoizedState;return n!==null&&t!==null&&zl(t,n[1])?n[0]:(e=e(),i.memoizedState=[e,t],e)}function Of(e,t,i){return hi&21?(st(i,t)||(i=$p(),X.lanes|=i,gi|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=i)}function Yv(e,t){var i=_;_=i!==0&&4>i?i:4,e(!0);var n=ko.transition;ko.transition={};try{e(!1),t()}finally{_=i,ko.transition=n}}function Uf(){return Ge().memoizedState}function Zv(e,t,i){var n=Ut(e);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Bf(e))qf(t,i);else if(i=jf(e,t,i,n),i!==null){var s=Pe();nt(i,e,n,s),$f(i,t,n)}}function Jv(e,t,i){var n=Ut(e),s={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Bf(e))qf(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,a=r(o,i);if(s.hasEagerState=!0,s.eagerState=a,st(a,o)){var l=t.interleaved;l===null?(s.next=s,Nl(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}i=jf(e,t,s,n),i!==null&&(s=Pe(),nt(i,e,n,s),$f(i,t,n))}}function Bf(e){var t=e.alternate;return e===X||t!==null&&t===X}function qf(e,t){Ln=Er=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function $f(e,t,i){if(i&4194240){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,gl(e,i)}}var Cr={readContext:Qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},ey={readContext:Qe,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:ju,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,er(4194308,4,If.bind(null,t,e),i)},useLayoutEffect:function(e,t){return er(4194308,4,e,t)},useInsertionEffect:function(e,t){return er(4,2,e,t)},useMemo:function(e,t){var i=ot();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var n=ot();return t=i!==void 0?i(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Zv.bind(null,X,e),[n.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:Tu,useDebugValue:_l,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=Tu(!1),t=e[0];return e=Yv.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var n=X,s=ot();if(H){if(i===void 0)throw Error(E(407));i=i()}else{if(i=t(),ue===null)throw Error(E(349));hi&30||bf(n,t,i)}s.memoizedState=i;var r={value:i,getSnapshot:t};return s.queue=r,ju(Nf.bind(null,n,r,e),[e]),n.flags|=2048,is(9,Af.bind(null,n,r,i,t),void 0,null),i},useId:function(){var e=ot(),t=ue.identifierPrefix;if(H){var i=vt,n=gt;i=(n&~(1<<32-it(n)-1)).toString(32)+i,t=":"+t+"R"+i,i=es++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Xv++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ty={readContext:Qe,useCallback:Ff,useContext:Qe,useEffect:Fl,useImperativeHandle:Vf,useInsertionEffect:Rf,useLayoutEffect:zf,useMemo:_f,useReducer:bo,useRef:Lf,useState:function(){return bo(ts)},useDebugValue:_l,useDeferredValue:function(e){var t=Ge();return Of(t,ae.memoizedState,e)},useTransition:function(){var e=bo(ts)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Cf,useSyncExternalStore:kf,useId:Uf,unstable_isNewReconciler:!1},iy={readContext:Qe,useCallback:Ff,useContext:Qe,useEffect:Fl,useImperativeHandle:Vf,useInsertionEffect:Rf,useLayoutEffect:zf,useMemo:_f,useReducer:Ao,useRef:Lf,useState:function(){return Ao(ts)},useDebugValue:_l,useDeferredValue:function(e){var t=Ge();return ae===null?t.memoizedState=e:Of(t,ae.memoizedState,e)},useTransition:function(){var e=Ao(ts)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Cf,useSyncExternalStore:kf,useId:Uf,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Ca(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:Y({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Hr={isMounted:function(e){return(e=e._reactInternals)?xi(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var n=Pe(),s=Ut(e),r=yt(n,s);r.payload=t,i!=null&&(r.callback=i),t=_t(e,r,s),t!==null&&(nt(t,e,s,n),Zs(t,e,s))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=Pe(),s=Ut(e),r=yt(n,s);r.tag=1,r.payload=t,i!=null&&(r.callback=i),t=_t(e,r,s),t!==null&&(nt(t,e,s,n),Zs(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Pe(),n=Ut(e),s=yt(i,n);s.tag=2,t!=null&&(s.callback=t),t=_t(e,s,n),t!==null&&(nt(t,e,n,i),Zs(t,e,n))}};function Pu(e,t,i,n,s,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!Qn(i,n)||!Qn(s,r):!0}function Kf(e,t,i){var n=!1,s=Kt,r=t.contextType;return typeof r=="object"&&r!==null?r=Qe(r):(s=Ne(t)?fi:we.current,n=t.contextTypes,r=(n=n!=null)?Qi(e,s):Kt),t=new t(i,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hr,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=r),t}function Eu(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&Hr.enqueueReplaceState(t,t.state,null)}function ka(e,t,i,n){var s=e.stateNode;s.props=i,s.state=e.memoizedState,s.refs={},Ml(e);var r=t.contextType;typeof r=="object"&&r!==null?s.context=Qe(r):(r=Ne(t)?fi:we.current,s.context=Qi(e,r)),s.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Ca(e,t,r,i),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Hr.enqueueReplaceState(s,s.state,null),jr(e,i,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Zi(e,t){try{var i="",n=t;do i+=Ng(n),n=n.return;while(n);var s=i}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:s,digest:null}}function No(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function ba(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function Wf(e,t,i){i=yt(-1,i),i.tag=3,i.payload={element:null};var n=t.value;return i.callback=function(){br||(br=!0,Fa=n),ba(e,t)},i}function Hf(e,t,i){i=yt(-1,i),i.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;i.payload=function(){return n(s)},i.callback=function(){ba(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(i.callback=function(){ba(e,t),typeof n!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),i}function Cu(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new ny;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(i)||(s.add(i),e=vy.bind(null,e,t,i),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,i,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=yt(-1,1),t.tag=2,_t(i,t,1))),i.lanes|=1),e)}var sy=Ct.ReactCurrentOwner,be=!1;function je(e,t,i,n){t.child=e===null?Tf(t,null,i,n):Xi(t,e.child,i,n)}function Au(e,t,i,n,s){i=i.render;var r=t.ref;return Ki(t,s),n=Il(e,t,i,n,r,s),i=Vl(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Pt(e,t,s)):(H&&i&&Pl(t),t.flags|=1,je(e,t,n,s),t.child)}function Nu(e,t,i,n,s){if(e===null){var r=i.type;return typeof r=="function"&&!Hl(r)&&r.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=r,Qf(e,t,r,n,s)):(e=sr(i.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&s)){var o=r.memoizedProps;if(i=i.compare,i=i!==null?i:Qn,i(o,n)&&e.ref===t.ref)return Pt(e,t,s)}return t.flags|=1,e=Bt(r,n),e.ref=t.ref,e.return=t,t.child=e}function Qf(e,t,i,n,s){if(e!==null){var r=e.memoizedProps;if(Qn(r,n)&&e.ref===t.ref)if(be=!1,t.pendingProps=n=r,(e.lanes&s)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Pt(e,t,s)}return Aa(e,t,i,n,s)}function Gf(e,t,i){var n=t.pendingProps,s=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(zi,Re),Re|=i;else{if(!(i&1073741824))return e=r!==null?r.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(zi,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:i,B(zi,Re),Re|=n}else r!==null?(n=r.baseLanes|i,t.memoizedState=null):n=i,B(zi,Re),Re|=n;return je(e,t,s,i),t.child}function Xf(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Aa(e,t,i,n,s){var r=Ne(i)?fi:we.current;return r=Qi(t,r),Ki(t,s),i=Il(e,t,i,n,r,s),n=Vl(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Pt(e,t,s)):(H&&n&&Pl(t),t.flags|=1,je(e,t,i,s),t.child)}function Mu(e,t,i,n,s){if(Ne(i)){var r=!0;yr(t)}else r=!1;if(Ki(t,s),t.stateNode===null)tr(e,t),Kf(t,i,n),ka(t,i,n,s),n=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=i.contextType;typeof c=="object"&&c!==null?c=Qe(c):(c=Ne(i)?fi:we.current,c=Qi(t,c));var u=i.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==n||l!==c)&&Eu(t,o,n,c),Nt=!1;var p=t.memoizedState;o.state=p,jr(t,n,o,s),l=t.memoizedState,a!==n||p!==l||Ae.current||Nt?(typeof u=="function"&&(Ca(t,i,u,n),l=t.memoizedState),(a=Nt||Pu(t,i,a,n,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=c,n=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Pf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Je(t.type,a),o.props=c,d=t.pendingProps,p=o.context,l=i.contextType,typeof l=="object"&&l!==null?l=Qe(l):(l=Ne(i)?fi:we.current,l=Qi(t,l));var v=i.getDerivedStateFromProps;(u=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Eu(t,o,n,l),Nt=!1,p=t.memoizedState,o.state=p,jr(t,n,o,s);var y=t.memoizedState;a!==d||p!==y||Ae.current||Nt?(typeof v=="function"&&(Ca(t,i,v,n),y=t.memoizedState),(c=Nt||Pu(t,i,c,n,p,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),o.props=n,o.state=y,o.context=l,n=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Na(e,t,i,n,r,s)}function Na(e,t,i,n,s,r){Xf(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return s&&gu(t,i,!1),Pt(e,t,r);n=t.stateNode,sy.current=t;var a=o&&typeof i.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Xi(t,e.child,null,r),t.child=Xi(t,null,a,r)):je(e,t,a,r),t.memoizedState=n.state,s&&gu(t,i,!0),t.child}function Yf(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),Dl(e,t.containerInfo)}function Du(e,t,i,n,s){return Gi(),Cl(s),t.flags|=256,je(e,t,i,n),t.child}var Ma={dehydrated:null,treeContext:null,retryLane:0};function Da(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zf(e,t,i){var n=t.pendingProps,s=Q.current,r=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),B(Q,s&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,r?(n=t.mode,r=t.child,o={mode:"hidden",children:o},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Xr(o,n,0,null),e=ui(e,n,i,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=Da(i),t.memoizedState=Ma,e):Ol(t,o));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return ry(e,t,o,n,a,s,i);if(r){r=n.fallback,o=t.mode,s=e.child,a=s.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Bt(s,l),n.subtreeFlags=s.subtreeFlags&14680064),a!==null?r=Bt(a,r):(r=ui(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,n=r,r=t.child,o=e.child.memoizedState,o=o===null?Da(i):{baseLanes:o.baseLanes|i,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~i,t.memoizedState=Ma,n}return r=e.child,e=r.sibling,n=Bt(r,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=i),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n}function Ol(e,t){return t=Xr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _s(e,t,i,n){return n!==null&&Cl(n),Xi(t,e.child,null,i),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ry(e,t,i,n,s,r,o){if(i)return t.flags&256?(t.flags&=-257,n=No(Error(E(422))),_s(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=n.fallback,s=t.mode,n=Xr({mode:"visible",children:n.children},s,0,null),r=ui(r,s,o,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,t.mode&1&&Xi(t,e.child,null,o),t.child.memoizedState=Da(o),t.memoizedState=Ma,r);if(!(t.mode&1))return _s(e,t,o,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var a=n.dgst;return n=a,r=Error(E(419)),n=No(r,n,void 0),_s(e,t,o,n)}if(a=(o&e.childLanes)!==0,be||a){if(n=ue,n!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|o)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,jt(e,s),nt(n,e,s,-1))}return Wl(),n=No(Error(E(421))),_s(e,t,o,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=yy.bind(null,e),s._reactRetry=t,null):(e=r.treeContext,ze=Ft(s.nextSibling),Ie=t,H=!0,tt=null,e!==null&&($e[Ke++]=gt,$e[Ke++]=vt,$e[Ke++]=mi,gt=e.id,vt=e.overflow,mi=t),t=Ol(t,n.children),t.flags|=4096,t)}function Lu(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ea(e.return,t,i)}function Mo(e,t,i,n,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=i,r.tailMode=s)}function Jf(e,t,i){var n=t.pendingProps,s=n.revealOrder,r=n.tail;if(je(e,t,n.children,i),n=Q.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,i,t);else if(e.tag===19)Lu(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(B(Q,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(i=t.child,s=null;i!==null;)e=i.alternate,e!==null&&Pr(e)===null&&(s=i),i=i.sibling;i=s,i===null?(s=t.child,t.child=null):(s=i.sibling,i.sibling=null),Mo(t,!1,s,i,r);break;case"backwards":for(i=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Pr(e)===null){t.child=s;break}e=s.sibling,s.sibling=i,i=s,s=e}Mo(t,!0,i,null,r);break;case"together":Mo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),gi|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,i=Bt(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Bt(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function oy(e,t,i){switch(t.tag){case 3:Yf(t),Gi();break;case 5:Ef(t);break;case 1:Ne(t.type)&&yr(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;B(wr,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):i&t.child.childLanes?Zf(e,t,i):(B(Q,Q.current&1),e=Pt(e,t,i),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(n=(i&t.childLanes)!==0,e.flags&128){if(n)return Jf(e,t,i);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),B(Q,Q.current),n)break;return null;case 22:case 23:return t.lanes=0,Gf(e,t,i)}return Pt(e,t,i)}var em,La,tm,im;em=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};La=function(){};tm=function(e,t,i,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,oi(ct.current);var r=null;switch(i){case"input":s=ta(e,s),n=ta(e,n),r=[];break;case"select":s=Y({},s,{value:void 0}),n=Y({},n,{value:void 0}),r=[];break;case"textarea":s=sa(e,s),n=sa(e,n),r=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=gr)}oa(i,n);var o;i=null;for(c in s)if(!n.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(i||(i={}),i[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Un.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in n){var l=n[c];if(a=s!=null?s[c]:void 0,n.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(i||(i={}),i[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(i||(i={}),i[o]=l[o])}else i||(r||(r=[]),r.push(c,i)),i=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(r=r||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Un.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&q("scroll",e),r||a===l||(r=[])):(r=r||[]).push(c,l))}i&&(r=r||[]).push("style",i);var c=r;(t.updateQueue=c)&&(t.flags|=4)}};im=function(e,t,i,n){i!==n&&(t.flags|=4)};function gn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var s=e.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function ay(e,t,i){var n=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ne(t.type)&&vr(),ve(t),null;case 3:return n=t.stateNode,Yi(),$(Ae),$(we),Rl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(Ua(tt),tt=null))),La(e,t),ve(t),null;case 5:Ll(t);var s=oi(Jn.current);if(i=t.type,e!==null&&t.stateNode!=null)tm(e,t,i,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=oi(ct.current),Vs(t)){n=t.stateNode,i=t.type;var r=t.memoizedProps;switch(n[at]=t,n[Yn]=r,e=(t.mode&1)!==0,i){case"dialog":q("cancel",n),q("close",n);break;case"iframe":case"object":case"embed":q("load",n);break;case"video":case"audio":for(s=0;s<Pn.length;s++)q(Pn[s],n);break;case"source":q("error",n);break;case"img":case"image":case"link":q("error",n),q("load",n);break;case"details":q("toggle",n);break;case"input":Bc(n,r),q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},q("invalid",n);break;case"textarea":$c(n,r),q("invalid",n)}oa(i,r),s=null;for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];o==="children"?typeof a=="string"?n.textContent!==a&&(r.suppressHydrationWarning!==!0&&Is(n.textContent,a,e),s=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(r.suppressHydrationWarning!==!0&&Is(n.textContent,a,e),s=["children",""+a]):Un.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&q("scroll",n)}switch(i){case"input":bs(n),qc(n,r,!0);break;case"textarea":bs(n),Kc(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=gr)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ap(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(i,{is:n.is}):(e=o.createElement(i),i==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,i),e[at]=t,e[Yn]=n,em(e,t,!1,!1),t.stateNode=e;e:{switch(o=aa(i,n),i){case"dialog":q("cancel",e),q("close",e),s=n;break;case"iframe":case"object":case"embed":q("load",e),s=n;break;case"video":case"audio":for(s=0;s<Pn.length;s++)q(Pn[s],e);s=n;break;case"source":q("error",e),s=n;break;case"img":case"image":case"link":q("error",e),q("load",e),s=n;break;case"details":q("toggle",e),s=n;break;case"input":Bc(e,n),s=ta(e,n),q("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=Y({},n,{value:void 0}),q("invalid",e);break;case"textarea":$c(e,n),s=sa(e,n),q("invalid",e);break;default:s=n}oa(i,s),a=s;for(r in a)if(a.hasOwnProperty(r)){var l=a[r];r==="style"?Dp(e,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Np(e,l)):r==="children"?typeof l=="string"?(i!=="textarea"||l!=="")&&Bn(e,l):typeof l=="number"&&Bn(e,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Un.hasOwnProperty(r)?l!=null&&r==="onScroll"&&q("scroll",e):l!=null&&ul(e,r,l,o))}switch(i){case"input":bs(e),qc(e,n,!1);break;case"textarea":bs(e),Kc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+$t(n.value));break;case"select":e.multiple=!!n.multiple,r=n.value,r!=null?Ui(e,!!n.multiple,r,!1):n.defaultValue!=null&&Ui(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=gr)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)im(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(i=oi(Jn.current),oi(ct.current),Vs(t)){if(n=t.stateNode,i=t.memoizedProps,n[at]=t,(r=n.nodeValue!==i)&&(e=Ie,e!==null))switch(e.tag){case 3:Is(n.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Is(n.nodeValue,i,(e.mode&1)!==0)}r&&(t.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[at]=t,t.stateNode=n}return ve(t),null;case 13:if($(Q),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&ze!==null&&t.mode&1&&!(t.flags&128))Sf(),Gi(),t.flags|=98560,r=!1;else if(r=Vs(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(E(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(E(317));r[at]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),r=!1}else tt!==null&&(Ua(tt),tt=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?le===0&&(le=3):Wl())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Yi(),La(e,t),e===null&&Gn(t.stateNode.containerInfo),ve(t),null;case 10:return Al(t.type._context),ve(t),null;case 17:return Ne(t.type)&&vr(),ve(t),null;case 19:if($(Q),r=t.memoizedState,r===null)return ve(t),null;if(n=(t.flags&128)!==0,o=r.rendering,o===null)if(n)gn(r,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Pr(e),o!==null){for(t.flags|=128,gn(r,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=i,i=t.child;i!==null;)r=i,e=n,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}r.tail!==null&&re()>Ji&&(t.flags|=128,n=!0,gn(r,!1),t.lanes=4194304)}else{if(!n)if(e=Pr(o),e!==null){if(t.flags|=128,n=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),gn(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!H)return ve(t),null}else 2*re()-r.renderingStartTime>Ji&&i!==1073741824&&(t.flags|=128,n=!0,gn(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(i=r.last,i!==null?i.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=re(),t.sibling=null,i=Q.current,B(Q,n?i&1|2:i&1),t):(ve(t),null);case 22:case 23:return Kl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Re&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function ly(e,t){switch(El(t),t.tag){case 1:return Ne(t.type)&&vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(),$(Ae),$(we),Rl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ll(t),null;case 13:if($(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Q),null;case 4:return Yi(),null;case 10:return Al(t.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var Os=!1,xe=!1,cy=typeof WeakSet=="function"?WeakSet:Set,A=null;function Ri(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){ee(e,t,n)}else i.current=null}function Ra(e,t,i){try{i()}catch(n){ee(e,t,n)}}var Ru=!1;function uy(e,t){if(va=fr,e=af(),jl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var s=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var v;d!==i||s!==0&&d.nodeType!==3||(a=o+s),d!==r||n!==0&&d.nodeType!==3||(l=o+n),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===i&&++c===s&&(a=o),p===r&&++u===n&&(l=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}i=a===-1||l===-1?null:{start:a,end:l}}else i=null}i=i||{start:0,end:0}}else i=null;for(ya={focusedElem:e,selectionRange:i},fr=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,j=y.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:Je(t.type,x),j);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=Ru,Ru=!1,y}function Rn(e,t,i){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var r=s.destroy;s.destroy=void 0,r!==void 0&&Ra(t,i,r)}s=s.next}while(s!==n)}}function Qr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var n=i.create;i.destroy=n()}i=i.next}while(i!==t)}}function za(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Yn],delete t[wa],delete t[Wv],delete t[Hv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sm(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=gr));else if(n!==4&&(e=e.child,e!==null))for(Ia(e,t,i),e=e.sibling;e!==null;)Ia(e,t,i),e=e.sibling}function Va(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Va(e,t,i),e=e.sibling;e!==null;)Va(e,t,i),e=e.sibling}var pe=null,et=!1;function kt(e,t,i){for(i=i.child;i!==null;)rm(e,t,i),i=i.sibling}function rm(e,t,i){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Or,i)}catch{}switch(i.tag){case 5:xe||Ri(i,t);case 6:var n=pe,s=et;pe=null,kt(e,t,i),pe=n,et=s,pe!==null&&(et?(e=pe,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):pe.removeChild(i.stateNode));break;case 18:pe!==null&&(et?(e=pe,i=i.stateNode,e.nodeType===8?Po(e.parentNode,i):e.nodeType===1&&Po(e,i),Wn(e)):Po(pe,i.stateNode));break;case 4:n=pe,s=et,pe=i.stateNode.containerInfo,et=!0,kt(e,t,i),pe=n,et=s;break;case 0:case 11:case 14:case 15:if(!xe&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var r=s,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&Ra(i,t,o),s=s.next}while(s!==n)}kt(e,t,i);break;case 1:if(!xe&&(Ri(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(a){ee(i,t,a)}kt(e,t,i);break;case 21:kt(e,t,i);break;case 22:i.mode&1?(xe=(n=xe)||i.memoizedState!==null,kt(e,t,i),xe=n):kt(e,t,i);break;default:kt(e,t,i)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new cy),t.forEach(function(n){var s=xy.bind(null,e,n);i.has(n)||(i.add(n),n.then(s,s))})}}function Ye(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var s=i[n];try{var r=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,et=!1;break e;case 3:pe=a.stateNode.containerInfo,et=!0;break e;case 4:pe=a.stateNode.containerInfo,et=!0;break e}a=a.return}if(pe===null)throw Error(E(160));rm(r,o,s),pe=null,et=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){ee(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)om(t,e),t=t.sibling}function om(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),rt(e),n&4){try{Rn(3,e,e.return),Qr(3,e)}catch(x){ee(e,e.return,x)}try{Rn(5,e,e.return)}catch(x){ee(e,e.return,x)}}break;case 1:Ye(t,e),rt(e),n&512&&i!==null&&Ri(i,i.return);break;case 5:if(Ye(t,e),rt(e),n&512&&i!==null&&Ri(i,i.return),e.flags&32){var s=e.stateNode;try{Bn(s,"")}catch(x){ee(e,e.return,x)}}if(n&4&&(s=e.stateNode,s!=null)){var r=e.memoizedProps,o=i!==null?i.memoizedProps:r,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&r.type==="radio"&&r.name!=null&&kp(s,r),aa(a,o);var c=aa(a,r);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Dp(s,d):u==="dangerouslySetInnerHTML"?Np(s,d):u==="children"?Bn(s,d):ul(s,u,d,c)}switch(a){case"input":ia(s,r);break;case"textarea":bp(s,r);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var v=r.value;v!=null?Ui(s,!!r.multiple,v,!1):p!==!!r.multiple&&(r.defaultValue!=null?Ui(s,!!r.multiple,r.defaultValue,!0):Ui(s,!!r.multiple,r.multiple?[]:"",!1))}s[Yn]=r}catch(x){ee(e,e.return,x)}}break;case 6:if(Ye(t,e),rt(e),n&4){if(e.stateNode===null)throw Error(E(162));s=e.stateNode,r=e.memoizedProps;try{s.nodeValue=r}catch(x){ee(e,e.return,x)}}break;case 3:if(Ye(t,e),rt(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(x){ee(e,e.return,x)}break;case 4:Ye(t,e),rt(e);break;case 13:Ye(t,e),rt(e),s=e.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(ql=re())),n&4&&Iu(e);break;case 22:if(u=i!==null&&i.memoizedState!==null,e.mode&1?(xe=(c=xe)||u,Ye(t,e),xe=c):Ye(t,e),rt(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(A=e,u=e.child;u!==null;){for(d=A=u;A!==null;){switch(p=A,v=p.child,p.tag){case 0:case 11:case 14:case 15:Rn(4,p,p.return);break;case 1:Ri(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){n=p,i=p.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ee(n,i,x)}}break;case 5:Ri(p,p.return);break;case 22:if(p.memoizedState!==null){Fu(d);continue}}v!==null?(v.return=p,A=v):Fu(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{s=d.stateNode,c?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mp("display",o))}catch(x){ee(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ee(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ye(t,e),rt(e),n&4&&Iu(e);break;case 21:break;default:Ye(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(sm(i)){var n=i;break e}i=i.return}throw Error(E(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Bn(s,""),n.flags&=-33);var r=zu(e);Va(e,r,s);break;case 3:case 4:var o=n.stateNode.containerInfo,a=zu(e);Ia(e,a,o);break;default:throw Error(E(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dy(e,t,i){A=e,am(e)}function am(e,t,i){for(var n=(e.mode&1)!==0;A!==null;){var s=A,r=s.child;if(s.tag===22&&n){var o=s.memoizedState!==null||Os;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||xe;a=Os;var c=xe;if(Os=o,(xe=l)&&!c)for(A=s;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?_u(s):l!==null?(l.return=o,A=l):_u(s);for(;r!==null;)A=r,am(r),r=r.sibling;A=s,Os=a,xe=c}Vu(e)}else s.subtreeFlags&8772&&r!==null?(r.return=s,A=r):Vu(e)}}function Vu(e){for(;A!==null;){var t=A;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Qr(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!xe)if(i===null)n.componentDidMount();else{var s=t.elementType===t.type?i.memoizedProps:Je(t.type,i.memoizedProps);n.componentDidUpdate(s,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&wu(t,r,n);break;case 3:var o=t.updateQueue;if(o!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}wu(t,o,i)}break;case 5:var a=t.stateNode;if(i===null&&t.flags&4){i=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&i.focus();break;case"img":l.src&&(i.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Wn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}xe||t.flags&512&&za(t)}catch(p){ee(t,t.return,p)}}if(t===e){A=null;break}if(i=t.sibling,i!==null){i.return=t.return,A=i;break}A=t.return}}function Fu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var i=t.sibling;if(i!==null){i.return=t.return,A=i;break}A=t.return}}function _u(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Qr(4,t)}catch(l){ee(t,i,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(l){ee(t,s,l)}}var r=t.return;try{za(t)}catch(l){ee(t,r,l)}break;case 5:var o=t.return;try{za(t)}catch(l){ee(t,o,l)}}}catch(l){ee(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var py=Math.ceil,kr=Ct.ReactCurrentDispatcher,Ul=Ct.ReactCurrentOwner,He=Ct.ReactCurrentBatchConfig,F=0,ue=null,oe=null,me=0,Re=0,zi=Gt(0),le=0,ns=null,gi=0,Gr=0,Bl=0,zn=null,ke=null,ql=0,Ji=1/0,mt=null,br=!1,Fa=null,Ot=null,Us=!1,Rt=null,Ar=0,In=0,_a=null,ir=-1,nr=0;function Pe(){return F&6?re():ir!==-1?ir:ir=re()}function Ut(e){return e.mode&1?F&2&&me!==0?me&-me:Gv.transition!==null?(nr===0&&(nr=$p()),nr):(e=_,e!==0||(e=window.event,e=e===void 0?16:Yp(e.type)),e):1}function nt(e,t,i,n){if(50<In)throw In=0,_a=null,Error(E(185));us(e,i,n),(!(F&2)||e!==ue)&&(e===ue&&(!(F&2)&&(Gr|=i),le===4&&Dt(e,me)),Me(e,n),i===1&&F===0&&!(t.mode&1)&&(Ji=re()+500,Kr&&Xt()))}function Me(e,t){var i=e.callbackNode;Gg(e,t);var n=pr(e,e===ue?me:0);if(n===0)i!==null&&Qc(i),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(i!=null&&Qc(i),t===1)e.tag===0?Qv(Ou.bind(null,e)):vf(Ou.bind(null,e)),$v(function(){!(F&6)&&Xt()}),i=null;else{switch(Kp(n)){case 1:i=hl;break;case 4:i=Bp;break;case 16:i=dr;break;case 536870912:i=qp;break;default:i=dr}i=hm(i,lm.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function lm(e,t){if(ir=-1,nr=0,F&6)throw Error(E(327));var i=e.callbackNode;if(Wi()&&e.callbackNode!==i)return null;var n=pr(e,e===ue?me:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Nr(e,n);else{t=n;var s=F;F|=2;var r=um();(ue!==e||me!==t)&&(mt=null,Ji=re()+500,ci(e,t));do try{hy();break}catch(a){cm(e,a)}while(!0);bl(),kr.current=r,F=s,oe!==null?t=0:(ue=null,me=0,t=le)}if(t!==0){if(t===2&&(s=pa(e),s!==0&&(n=s,t=Oa(e,s))),t===1)throw i=ns,ci(e,0),Dt(e,n),Me(e,re()),i;if(t===6)Dt(e,n);else{if(s=e.current.alternate,!(n&30)&&!fy(s)&&(t=Nr(e,n),t===2&&(r=pa(e),r!==0&&(n=r,t=Oa(e,r))),t===1))throw i=ns,ci(e,0),Dt(e,n),Me(e,re()),i;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:ti(e,ke,mt);break;case 3:if(Dt(e,n),(n&130023424)===n&&(t=ql+500-re(),10<t)){if(pr(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){Pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Sa(ti.bind(null,e,ke,mt),t);break}ti(e,ke,mt);break;case 4:if(Dt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var o=31-it(n);r=1<<o,o=t[o],o>s&&(s=o),n&=~r}if(n=s,n=re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*py(n/1960))-n,10<n){e.timeoutHandle=Sa(ti.bind(null,e,ke,mt),n);break}ti(e,ke,mt);break;case 5:ti(e,ke,mt);break;default:throw Error(E(329))}}}return Me(e,re()),e.callbackNode===i?lm.bind(null,e):null}function Oa(e,t){var i=zn;return e.current.memoizedState.isDehydrated&&(ci(e,t).flags|=256),e=Nr(e,t),e!==2&&(t=ke,ke=i,t!==null&&Ua(t)),e}function Ua(e){ke===null?ke=e:ke.push.apply(ke,e)}function fy(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var s=i[n],r=s.getSnapshot;s=s.value;try{if(!st(r(),s))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Bl,t&=~Gr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-it(t),n=1<<i;e[i]=-1,t&=~n}}function Ou(e){if(F&6)throw Error(E(327));Wi();var t=pr(e,0);if(!(t&1))return Me(e,re()),null;var i=Nr(e,t);if(e.tag!==0&&i===2){var n=pa(e);n!==0&&(t=n,i=Oa(e,n))}if(i===1)throw i=ns,ci(e,0),Dt(e,t),Me(e,re()),i;if(i===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ti(e,ke,mt),Me(e,re()),null}function $l(e,t){var i=F;F|=1;try{return e(t)}finally{F=i,F===0&&(Ji=re()+500,Kr&&Xt())}}function vi(e){Rt!==null&&Rt.tag===0&&!(F&6)&&Wi();var t=F;F|=1;var i=He.transition,n=_;try{if(He.transition=null,_=1,e)return e()}finally{_=n,He.transition=i,F=t,!(F&6)&&Xt()}}function Kl(){Re=zi.current,$(zi)}function ci(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,qv(i)),oe!==null)for(i=oe.return;i!==null;){var n=i;switch(El(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&vr();break;case 3:Yi(),$(Ae),$(we),Rl();break;case 5:Ll(n);break;case 4:Yi();break;case 13:$(Q);break;case 19:$(Q);break;case 10:Al(n.type._context);break;case 22:case 23:Kl()}i=i.return}if(ue=e,oe=e=Bt(e.current,null),me=Re=t,le=0,ns=null,Bl=Gr=gi=0,ke=zn=null,ri!==null){for(t=0;t<ri.length;t++)if(i=ri[t],n=i.interleaved,n!==null){i.interleaved=null;var s=n.next,r=i.pending;if(r!==null){var o=r.next;r.next=s,n.next=o}i.pending=n}ri=null}return e}function cm(e,t){do{var i=oe;try{if(bl(),Js.current=Cr,Er){for(var n=X.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Er=!1}if(hi=0,ce=ae=X=null,Ln=!1,es=0,Ul.current=null,i===null||i.return===null){le=1,ns=t,oe=null;break}e:{var r=e,o=i.return,a=i,l=t;if(t=me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=ku(o);if(v!==null){v.flags&=-257,bu(v,o,a,r,t),v.mode&1&&Cu(r,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Cu(r,c,t),Wl();break e}l=Error(E(426))}}else if(H&&a.mode&1){var j=ku(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),bu(j,o,a,r,t),Cl(Zi(l,a));break e}}r=l=Zi(l,a),le!==4&&(le=2),zn===null?zn=[r]:zn.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var m=Wf(r,l,t);Su(r,m);break e;case 1:a=l;var f=r.type,h=r.stateNode;if(!(r.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ot===null||!Ot.has(h)))){r.flags|=65536,t&=-t,r.lanes|=t;var S=Hf(r,a,t);Su(r,S);break e}}r=r.return}while(r!==null)}pm(i)}catch(w){t=w,oe===i&&i!==null&&(oe=i=i.return);continue}break}while(!0)}function um(){var e=kr.current;return kr.current=Cr,e===null?Cr:e}function Wl(){(le===0||le===3||le===2)&&(le=4),ue===null||!(gi&268435455)&&!(Gr&268435455)||Dt(ue,me)}function Nr(e,t){var i=F;F|=2;var n=um();(ue!==e||me!==t)&&(mt=null,ci(e,t));do try{my();break}catch(s){cm(e,s)}while(!0);if(bl(),F=i,kr.current=n,oe!==null)throw Error(E(261));return ue=null,me=0,le}function my(){for(;oe!==null;)dm(oe)}function hy(){for(;oe!==null&&!Og();)dm(oe)}function dm(e){var t=mm(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?pm(e):oe=t,Ul.current=null}function pm(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=ly(i,t),i!==null){i.flags&=32767,oe=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(i=ay(i,t,Re),i!==null){oe=i;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function ti(e,t,i){var n=_,s=He.transition;try{He.transition=null,_=1,gy(e,t,i,n)}finally{He.transition=s,_=n}return null}function gy(e,t,i,n){do Wi();while(Rt!==null);if(F&6)throw Error(E(327));i=e.finishedWork;var s=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var r=i.lanes|i.childLanes;if(Xg(e,r),e===ue&&(oe=ue=null,me=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Us||(Us=!0,hm(dr,function(){return Wi(),null})),r=(i.flags&15990)!==0,i.subtreeFlags&15990||r){r=He.transition,He.transition=null;var o=_;_=1;var a=F;F|=4,Ul.current=null,uy(e,i),om(i,e),Iv(ya),fr=!!va,ya=va=null,e.current=i,dy(i),Ug(),F=a,_=o,He.transition=r}else e.current=i;if(Us&&(Us=!1,Rt=e,Ar=s),r=e.pendingLanes,r===0&&(Ot=null),$g(i.stateNode),Me(e,re()),t!==null)for(n=e.onRecoverableError,i=0;i<t.length;i++)s=t[i],n(s.value,{componentStack:s.stack,digest:s.digest});if(br)throw br=!1,e=Fa,Fa=null,e;return Ar&1&&e.tag!==0&&Wi(),r=e.pendingLanes,r&1?e===_a?In++:(In=0,_a=e):In=0,Xt(),null}function Wi(){if(Rt!==null){var e=Kp(Ar),t=He.transition,i=_;try{if(He.transition=null,_=16>e?16:e,Rt===null)var n=!1;else{if(e=Rt,Rt=null,Ar=0,F&6)throw Error(E(331));var s=F;for(F|=4,A=e.current;A!==null;){var r=A,o=r.child;if(A.flags&16){var a=r.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(A=c;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:Rn(8,u,r)}var d=u.child;if(d!==null)d.return=u,A=d;else for(;A!==null;){u=A;var p=u.sibling,v=u.return;if(nm(u),u===c){A=null;break}if(p!==null){p.return=v,A=p;break}A=v}}}var y=r.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}A=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,A=o;else e:for(;A!==null;){if(r=A,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Rn(9,r,r.return)}var m=r.sibling;if(m!==null){m.return=r.return,A=m;break e}A=r.return}}var f=e.current;for(A=f;A!==null;){o=A;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,A=h;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qr(9,a)}}catch(w){ee(a,a.return,w)}if(a===o){A=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,A=S;break e}A=a.return}}if(F=s,Xt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Or,e)}catch{}n=!0}return n}finally{_=i,He.transition=t}}return!1}function Uu(e,t,i){t=Zi(i,t),t=Wf(e,t,1),e=_t(e,t,1),t=Pe(),e!==null&&(us(e,1,t),Me(e,t))}function ee(e,t,i){if(e.tag===3)Uu(e,e,i);else for(;t!==null;){if(t.tag===3){Uu(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ot===null||!Ot.has(n))){e=Zi(i,e),e=Hf(t,e,1),t=_t(t,e,1),e=Pe(),t!==null&&(us(t,1,e),Me(t,e));break}}t=t.return}}function vy(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&i,ue===e&&(me&i)===i&&(le===4||le===3&&(me&130023424)===me&&500>re()-ql?ci(e,0):Bl|=i),Me(e,t)}function fm(e,t){t===0&&(e.mode&1?(t=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):t=1);var i=Pe();e=jt(e,t),e!==null&&(us(e,t,i),Me(e,i))}function yy(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),fm(e,i)}function xy(e,t){var i=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(i=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),fm(e,i)}var mm;mm=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)be=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return be=!1,oy(e,t,i);be=!!(e.flags&131072)}else be=!1,H&&t.flags&1048576&&yf(t,Sr,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;tr(e,t),e=t.pendingProps;var s=Qi(t,we.current);Ki(t,i),s=Il(null,t,n,e,s,i);var r=Vl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(n)?(r=!0,yr(t)):r=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ml(t),s.updater=Hr,t.stateNode=s,s._reactInternals=t,ka(t,n,e,i),t=Na(null,t,n,!0,r,i)):(t.tag=0,H&&r&&Pl(t),je(null,t,s,i),t=t.child),t;case 16:n=t.elementType;e:{switch(tr(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=wy(n),e=Je(n,e),s){case 0:t=Aa(null,t,n,e,i);break e;case 1:t=Mu(null,t,n,e,i);break e;case 11:t=Au(null,t,n,e,i);break e;case 14:t=Nu(null,t,n,Je(n.type,e),i);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Je(n,s),Aa(e,t,n,s,i);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Je(n,s),Mu(e,t,n,s,i);case 3:e:{if(Yf(t),e===null)throw Error(E(387));n=t.pendingProps,r=t.memoizedState,s=r.element,Pf(e,t),jr(t,n,null,i);var o=t.memoizedState;if(n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){s=Zi(Error(E(423)),t),t=Du(e,t,n,i,s);break e}else if(n!==s){s=Zi(Error(E(424)),t),t=Du(e,t,n,i,s);break e}else for(ze=Ft(t.stateNode.containerInfo.firstChild),Ie=t,H=!0,tt=null,i=Tf(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Gi(),n===s){t=Pt(e,t,i);break e}je(e,t,n,i)}t=t.child}return t;case 5:return Ef(t),e===null&&Pa(t),n=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,o=s.children,xa(n,s)?o=null:r!==null&&xa(n,r)&&(t.flags|=32),Xf(e,t),je(e,t,o,i),t.child;case 6:return e===null&&Pa(t),null;case 13:return Zf(e,t,i);case 4:return Dl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Xi(t,null,n,i):je(e,t,n,i),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Je(n,s),Au(e,t,n,s,i);case 7:return je(e,t,t.pendingProps,i),t.child;case 8:return je(e,t,t.pendingProps.children,i),t.child;case 12:return je(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,r=t.memoizedProps,o=s.value,B(wr,n._currentValue),n._currentValue=o,r!==null)if(st(r.value,o)){if(r.children===s.children&&!Ae.current){t=Pt(e,t,i);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var a=r.dependencies;if(a!==null){o=r.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(r.tag===1){l=yt(-1,i&-i),l.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}r.lanes|=i,l=r.alternate,l!==null&&(l.lanes|=i),Ea(r.return,i,t),a.lanes|=i;break}l=l.next}}else if(r.tag===10)o=r.type===t.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(E(341));o.lanes|=i,a=o.alternate,a!==null&&(a.lanes|=i),Ea(o,i,t),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===t){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}je(e,t,s.children,i),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,Ki(t,i),s=Qe(s),n=n(s),t.flags|=1,je(e,t,n,i),t.child;case 14:return n=t.type,s=Je(n,t.pendingProps),s=Je(n.type,s),Nu(e,t,n,s,i);case 15:return Qf(e,t,t.type,t.pendingProps,i);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Je(n,s),tr(e,t),t.tag=1,Ne(n)?(e=!0,yr(t)):e=!1,Ki(t,i),Kf(t,n,s),ka(t,n,s,i),Na(null,t,n,!0,e,i);case 19:return Jf(e,t,i);case 22:return Gf(e,t,i)}throw Error(E(156,t.tag))};function hm(e,t){return Up(e,t)}function Sy(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,i,n){return new Sy(e,t,i,n)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wy(e){if(typeof e=="function")return Hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pl)return 11;if(e===fl)return 14}return 2}function Bt(e,t){var i=e.alternate;return i===null?(i=We(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function sr(e,t,i,n,s,r){var o=2;if(n=e,typeof e=="function")Hl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ei:return ui(i.children,s,r,t);case dl:o=8,s|=8;break;case Yo:return e=We(12,i,t,s|2),e.elementType=Yo,e.lanes=r,e;case Zo:return e=We(13,i,t,s),e.elementType=Zo,e.lanes=r,e;case Jo:return e=We(19,i,t,s),e.elementType=Jo,e.lanes=r,e;case Pp:return Xr(i,s,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tp:o=10;break e;case jp:o=9;break e;case pl:o=11;break e;case fl:o=14;break e;case At:o=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=We(o,i,t,s),t.elementType=e,t.type=n,t.lanes=r,t}function ui(e,t,i,n){return e=We(7,e,n,t),e.lanes=i,e}function Xr(e,t,i,n){return e=We(22,e,n,t),e.elementType=Pp,e.lanes=i,e.stateNode={isHidden:!1},e}function Do(e,t,i){return e=We(6,e,null,t),e.lanes=i,e}function Lo(e,t,i){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ty(e,t,i,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fo(0),this.expirationTimes=fo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ql(e,t,i,n,s,r,o,a,l){return e=new Ty(e,t,i,a,l),t===1?(t=1,r===!0&&(t|=8)):t=0,r=We(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(r),e}function jy(e,t,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:n==null?null:""+n,children:e,containerInfo:t,implementation:i}}function gm(e){if(!e)return Kt;e=e._reactInternals;e:{if(xi(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var i=e.type;if(Ne(i))return gf(e,i,t)}return t}function vm(e,t,i,n,s,r,o,a,l){return e=Ql(i,n,!0,e,s,r,o,a,l),e.context=gm(null),i=e.current,n=Pe(),s=Ut(i),r=yt(n,s),r.callback=t??null,_t(i,r,s),e.current.lanes=s,us(e,s,n),Me(e,n),e}function Yr(e,t,i,n){var s=t.current,r=Pe(),o=Ut(s);return i=gm(i),t.context===null?t.context=i:t.pendingContext=i,t=yt(r,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=_t(s,t,o),e!==null&&(nt(e,s,o,r),Zs(e,s,o)),o}function Mr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Gl(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}function Py(){return null}var ym=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xl(e){this._internalRoot=e}Zr.prototype.render=Xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Yr(e,t,null,null)};Zr.prototype.unmount=Xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vi(function(){Yr(null,e,null,null)}),t[Tt]=null}};function Zr(e){this._internalRoot=e}Zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qp();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Mt.length&&t!==0&&t<Mt[i].priority;i++);Mt.splice(i,0,e),i===0&&Xp(e)}};function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qu(){}function Ey(e,t,i,n,s){if(s){if(typeof n=="function"){var r=n;n=function(){var c=Mr(o);r.call(c)}}var o=vm(t,n,e,0,null,!1,!1,"",qu);return e._reactRootContainer=o,e[Tt]=o.current,Gn(e.nodeType===8?e.parentNode:e),vi(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var a=n;n=function(){var c=Mr(l);a.call(c)}}var l=Ql(e,0,!1,null,null,!1,!1,"",qu);return e._reactRootContainer=l,e[Tt]=l.current,Gn(e.nodeType===8?e.parentNode:e),vi(function(){Yr(t,l,i,n)}),l}function eo(e,t,i,n,s){var r=i._reactRootContainer;if(r){var o=r;if(typeof s=="function"){var a=s;s=function(){var l=Mr(o);a.call(l)}}Yr(t,o,e,s)}else o=Ey(i,t,e,s,n);return Mr(o)}Wp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=jn(t.pendingLanes);i!==0&&(gl(t,i|1),Me(t,re()),!(F&6)&&(Ji=re()+500,Xt()))}break;case 13:vi(function(){var n=jt(e,1);if(n!==null){var s=Pe();nt(n,e,1,s)}}),Gl(e,1)}};vl=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var i=Pe();nt(t,e,134217728,i)}Gl(e,134217728)}};Hp=function(e){if(e.tag===13){var t=Ut(e),i=jt(e,t);if(i!==null){var n=Pe();nt(i,e,t,n)}Gl(e,t)}};Qp=function(){return _};Gp=function(e,t){var i=_;try{return _=e,t()}finally{_=i}};ca=function(e,t,i){switch(t){case"input":if(ia(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var s=$r(n);if(!s)throw Error(E(90));Cp(n),ia(n,s)}}}break;case"textarea":bp(e,i);break;case"select":t=i.value,t!=null&&Ui(e,!!i.multiple,t,!1)}};zp=$l;Ip=vi;var Cy={usingClientEntryPoint:!1,Events:[ps,Ai,$r,Lp,Rp,$l]},vn={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ky={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_p(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bs.isDisabled&&Bs.supportsFiber)try{Or=Bs.inject(ky),lt=Bs}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy;Oe.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yl(t))throw Error(E(200));return jy(e,t,null,i)};Oe.createRoot=function(e,t){if(!Yl(e))throw Error(E(299));var i=!1,n="",s=ym;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ql(e,1,!1,null,null,i,!1,n,s),e[Tt]=t.current,Gn(e.nodeType===8?e.parentNode:e),new Xl(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=_p(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return vi(e)};Oe.hydrate=function(e,t,i){if(!Jr(t))throw Error(E(200));return eo(null,e,t,!0,i)};Oe.hydrateRoot=function(e,t,i){if(!Yl(e))throw Error(E(405));var n=i!=null&&i.hydratedSources||null,s=!1,r="",o=ym;if(i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(o=i.onRecoverableError)),t=vm(t,null,e,1,i??null,s,!1,r,o),e[Tt]=t.current,Gn(e),n)for(e=0;e<n.length;e++)i=n[e],s=i._getVersion,s=s(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,s]:t.mutableSourceEagerHydrationData.push(i,s);return new Zr(t)};Oe.render=function(e,t,i){if(!Jr(t))throw Error(E(200));return eo(null,e,t,!1,i)};Oe.unmountComponentAtNode=function(e){if(!Jr(e))throw Error(E(40));return e._reactRootContainer?(vi(function(){eo(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};Oe.unstable_batchedUpdates=$l;Oe.unstable_renderSubtreeIntoContainer=function(e,t,i,n){if(!Jr(i))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return eo(e,t,i,!1,n)};Oe.version="18.3.1-next-f1338f8080-20240426";function xm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xm)}catch(e){console.error(e)}}xm(),yp.exports=Oe;var by=yp.exports,Sm,$u=by;Sm=$u.createRoot,$u.hydrateRoot;const Zl=b.createContext({});function Jl(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const to=b.createContext(null),ec=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Ay extends b.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=i.offsetHeight||0,n.width=i.offsetWidth||0,n.top=i.offsetTop,n.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ny({children:e,isPresent:t}){const i=b.useId(),n=b.useRef(null),s=b.useRef({width:0,height:0,top:0,left:0}),{nonce:r}=b.useContext(ec);return b.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=s.current;if(t||!n.current||!o||!a)return;n.current.dataset.motionPopId=i;const u=document.createElement("style");return r&&(u.nonce=r),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),g.jsx(Ay,{isPresent:t,childRef:n,sizeRef:s,children:b.cloneElement(e,{ref:n})})}const My=({children:e,initial:t,isPresent:i,onExitComplete:n,custom:s,presenceAffectsLayout:r,mode:o})=>{const a=Jl(Dy),l=b.useId(),c=b.useCallback(d=>{a.set(d,!0);for(const p of a.values())if(!p)return;n&&n()},[a,n]),u=b.useMemo(()=>({id:l,initial:t,isPresent:i,custom:s,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),r?[Math.random(),c]:[i,c]);return b.useMemo(()=>{a.forEach((d,p)=>a.set(p,!1))},[i]),b.useEffect(()=>{!i&&!a.size&&n&&n()},[i]),o==="popLayout"&&(e=g.jsx(Ny,{isPresent:i,children:e})),g.jsx(to.Provider,{value:u,children:e})};function Dy(){return new Map}function wm(e=!0){const t=b.useContext(to);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:n,register:s}=t,r=b.useId();b.useEffect(()=>{e&&s(r)},[e]);const o=b.useCallback(()=>e&&n&&n(r),[r,n,e]);return!i&&n?[!1,o]:[!0]}const qs=e=>e.key||"";function Ku(e){const t=[];return b.Children.forEach(e,i=>{b.isValidElement(i)&&t.push(i)}),t}const tc=typeof window<"u",Tm=tc?b.useLayoutEffect:b.useEffect,Ly=({children:e,custom:t,initial:i=!0,onExitComplete:n,presenceAffectsLayout:s=!0,mode:r="sync",propagate:o=!1})=>{const[a,l]=wm(o),c=b.useMemo(()=>Ku(e),[e]),u=o&&!a?[]:c.map(qs),d=b.useRef(!0),p=b.useRef(c),v=Jl(()=>new Map),[y,x]=b.useState(c),[j,m]=b.useState(c);Tm(()=>{d.current=!1,p.current=c;for(let S=0;S<j.length;S++){const w=qs(j[S]);u.includes(w)?v.delete(w):v.get(w)!==!0&&v.set(w,!1)}},[j,u.length,u.join("-")]);const f=[];if(c!==y){let S=[...c];for(let w=0;w<j.length;w++){const T=j[w],C=qs(T);u.includes(C)||(S.splice(w,0,T),f.push(T))}r==="wait"&&f.length&&(S=f),m(Ku(S)),x(c);return}const{forceRender:h}=b.useContext(Zl);return g.jsx(g.Fragment,{children:j.map(S=>{const w=qs(S),T=o&&!a?!1:c===j||u.includes(w),C=()=>{if(v.has(w))v.set(w,!0);else return;let P=!0;v.forEach(z=>{z||(P=!1)}),P&&(h==null||h(),m(p.current),o&&(l==null||l()),n&&n())};return g.jsx(My,{isPresent:T,initial:!d.current||i?void 0:!1,custom:T?void 0:t,presenceAffectsLayout:s,mode:r,onExitComplete:T?void 0:C,children:S},w)})})},Ve=e=>e;let jm=Ve;function ic(e){let t;return()=>(t===void 0&&(t=e()),t)}const en=(e,t,i)=>{const n=t-e;return n===0?1:(i-e)/n},xt=e=>e*1e3,St=e=>e/1e3,Ry={useManualTiming:!1};function zy(e){let t=new Set,i=new Set,n=!1,s=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){r.has(c)&&(l.schedule(c),e()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const v=d&&n?t:i;return u&&r.add(c),v.has(c)||v.add(c),c},cancel:c=>{i.delete(c),r.delete(c)},process:c=>{if(o=c,n){s=!0;return}n=!0,[t,i]=[i,t],t.forEach(a),t.clear(),n=!1,s&&(s=!1,l.process(c))}};return l}const $s=["read","resolveKeyframes","update","preRender","render","postRender"],Iy=40;function Pm(e,t){let i=!1,n=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>i=!0,o=$s.reduce((m,f)=>(m[f]=zy(r),m),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:p}=o,v=()=>{const m=performance.now();i=!1,s.delta=n?1e3/60:Math.max(Math.min(m-s.timestamp,Iy),1),s.timestamp=m,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),d.process(s),p.process(s),s.isProcessing=!1,i&&t&&(n=!1,e(v))},y=()=>{i=!0,n=!0,s.isProcessing||e(v)};return{schedule:$s.reduce((m,f)=>{const h=o[f];return m[f]=(S,w=!1,T=!1)=>(i||y(),h.schedule(S,w,T)),m},{}),cancel:m=>{for(let f=0;f<$s.length;f++)o[$s[f]].cancel(m)},state:s,steps:o}}const{schedule:K,cancel:Wt,state:fe,steps:Ro}=Pm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ve,!0),Em=b.createContext({strict:!1}),Wu={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},tn={};for(const e in Wu)tn[e]={isEnabled:t=>Wu[e].some(i=>!!t[i])};function Vy(e){for(const t in e)tn[t]={...tn[t],...e[t]}}const Fy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Dr(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Fy.has(e)}let Cm=e=>!Dr(e);function _y(e){e&&(Cm=t=>t.startsWith("on")?!Dr(t):e(t))}try{_y(require("@emotion/is-prop-valid").default)}catch{}function Oy(e,t,i){const n={};for(const s in e)s==="values"&&typeof e.values=="object"||(Cm(s)||i===!0&&Dr(s)||!t&&!Dr(s)||e.draggable&&s.startsWith("onDrag"))&&(n[s]=e[s]);return n}function Uy(e){if(typeof Proxy>"u")return e;const t=new Map,i=(...n)=>e(...n);return new Proxy(i,{get:(n,s)=>s==="create"?e:(t.has(s)||t.set(s,e(s)),t.get(s))})}const io=b.createContext({});function ss(e){return typeof e=="string"||Array.isArray(e)}function no(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const nc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],sc=["initial",...nc];function so(e){return no(e.animate)||sc.some(t=>ss(e[t]))}function km(e){return!!(so(e)||e.variants)}function By(e,t){if(so(e)){const{initial:i,animate:n}=e;return{initial:i===!1||ss(i)?i:void 0,animate:ss(n)?n:void 0}}return e.inherit!==!1?t:{}}function qy(e){const{initial:t,animate:i}=By(e,b.useContext(io));return b.useMemo(()=>({initial:t,animate:i}),[Hu(t),Hu(i)])}function Hu(e){return Array.isArray(e)?e.join(" "):e}const $y=Symbol.for("motionComponentSymbol");function Ii(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ky(e,t,i){return b.useCallback(n=>{n&&e.onMount&&e.onMount(n),t&&(n?t.mount(n):t.unmount()),i&&(typeof i=="function"?i(n):Ii(i)&&(i.current=n))},[t])}const rc=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Wy="framerAppearId",bm="data-"+rc(Wy),{schedule:oc}=Pm(queueMicrotask,!1),Am=b.createContext({});function Hy(e,t,i,n,s){var r,o;const{visualElement:a}=b.useContext(io),l=b.useContext(Em),c=b.useContext(to),u=b.useContext(ec).reducedMotion,d=b.useRef(null);n=n||l.renderer,!d.current&&n&&(d.current=n(e,{visualState:t,parent:a,props:i,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const p=d.current,v=b.useContext(Am);p&&!p.projection&&s&&(p.type==="html"||p.type==="svg")&&Qy(d.current,i,s,v);const y=b.useRef(!1);b.useInsertionEffect(()=>{p&&y.current&&p.update(i,c)});const x=i[bm],j=b.useRef(!!x&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return Tm(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),oc.render(p.render),j.current&&p.animationState&&p.animationState.animateChanges())}),b.useEffect(()=>{p&&(!j.current&&p.animationState&&p.animationState.animateChanges(),j.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,x)}),j.current=!1))}),p}function Qy(e,t,i,n){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:Nm(e.parent)),e.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Ii(a),visualElement:e,animationType:typeof r=="string"?r:"both",initialPromotionConfig:n,layoutScroll:l,layoutRoot:c})}function Nm(e){if(e)return e.options.allowProjection!==!1?e.projection:Nm(e.parent)}function Gy({preloadedFeatures:e,createVisualElement:t,useRender:i,useVisualState:n,Component:s}){var r,o;e&&Vy(e);function a(c,u){let d;const p={...b.useContext(ec),...c,layoutId:Xy(c)},{isStatic:v}=p,y=qy(c),x=n(c,v);if(!v&&tc){Yy();const j=Zy(p);d=j.MeasureLayout,y.visualElement=Hy(s,x,p,t,j.ProjectionNode)}return g.jsxs(io.Provider,{value:y,children:[d&&y.visualElement?g.jsx(d,{visualElement:y.visualElement,...p}):null,i(s,c,Ky(x,y.visualElement,u),x,v,y.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${(o=(r=s.displayName)!==null&&r!==void 0?r:s.name)!==null&&o!==void 0?o:""})`}`;const l=b.forwardRef(a);return l[$y]=s,l}function Xy({layoutId:e}){const t=b.useContext(Zl).id;return t&&e!==void 0?t+"-"+e:e}function Yy(e,t){b.useContext(Em).strict}function Zy(e){const{drag:t,layout:i}=tn;if(!t&&!i)return{};const n={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(e)||i!=null&&i.isEnabled(e)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}const Jy=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ac(e){return typeof e!="string"||e.includes("-")?!1:!!(Jy.indexOf(e)>-1||/[A-Z]/u.test(e))}function Qu(e){const t=[{},{}];return e==null||e.values.forEach((i,n)=>{t[0][n]=i.get(),t[1][n]=i.getVelocity()}),t}function lc(e,t,i,n){if(typeof t=="function"){const[s,r]=Qu(n);t=t(i!==void 0?i:e.custom,s,r)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,r]=Qu(n);t=t(i!==void 0?i:e.custom,s,r)}return t}const Ba=e=>Array.isArray(e),e0=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),t0=e=>Ba(e)?e[e.length-1]||0:e,Se=e=>!!(e&&e.getVelocity);function rr(e){const t=Se(e)?e.get():e;return e0(t)?t.toValue():t}function i0({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:i},n,s,r){const o={latestValues:n0(n,s,r,e),renderState:t()};return i&&(o.onMount=a=>i({props:n,current:a,...o}),o.onUpdate=a=>i(a)),o}const Mm=e=>(t,i)=>{const n=b.useContext(io),s=b.useContext(to),r=()=>i0(e,t,n,s);return i?r():Jl(r)};function n0(e,t,i,n){const s={},r=n(e,{});for(const p in r)s[p]=rr(r[p]);let{initial:o,animate:a}=e;const l=so(e),c=km(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=i?i.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!no(d)){const p=Array.isArray(d)?d:[d];for(let v=0;v<p.length;v++){const y=lc(e,p[v]);if(y){const{transitionEnd:x,transition:j,...m}=y;for(const f in m){let h=m[f];if(Array.isArray(h)){const S=u?h.length-1:0;h=h[S]}h!==null&&(s[f]=h)}for(const f in x)s[f]=x[f]}}}return s}const an=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Si=new Set(an),Dm=e=>t=>typeof t=="string"&&t.startsWith(e),Lm=Dm("--"),s0=Dm("var(--"),cc=e=>s0(e)?r0.test(e.split("/*")[0].trim()):!1,r0=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Rm=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Et=(e,t,i)=>i>t?t:i<e?e:i,ln={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},rs={...ln,transform:e=>Et(0,1,e)},Ks={...ln,default:1},ms=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),bt=ms("deg"),ut=ms("%"),D=ms("px"),o0=ms("vh"),a0=ms("vw"),Gu={...ut,parse:e=>ut.parse(e)/100,transform:e=>ut.transform(e*100)},l0={borderWidth:D,borderTopWidth:D,borderRightWidth:D,borderBottomWidth:D,borderLeftWidth:D,borderRadius:D,radius:D,borderTopLeftRadius:D,borderTopRightRadius:D,borderBottomRightRadius:D,borderBottomLeftRadius:D,width:D,maxWidth:D,height:D,maxHeight:D,top:D,right:D,bottom:D,left:D,padding:D,paddingTop:D,paddingRight:D,paddingBottom:D,paddingLeft:D,margin:D,marginTop:D,marginRight:D,marginBottom:D,marginLeft:D,backgroundPositionX:D,backgroundPositionY:D},c0={rotate:bt,rotateX:bt,rotateY:bt,rotateZ:bt,scale:Ks,scaleX:Ks,scaleY:Ks,scaleZ:Ks,skew:bt,skewX:bt,skewY:bt,distance:D,translateX:D,translateY:D,translateZ:D,x:D,y:D,z:D,perspective:D,transformPerspective:D,opacity:rs,originX:Gu,originY:Gu,originZ:D},Xu={...ln,transform:Math.round},uc={...l0,...c0,zIndex:Xu,size:D,fillOpacity:rs,strokeOpacity:rs,numOctaves:Xu},u0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},d0=an.length;function p0(e,t,i){let n="",s=!0;for(let r=0;r<d0;r++){const o=an[r],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||i){const c=Rm(a,uc[o]);if(!l){s=!1;const u=u0[o]||o;n+=`${u}(${c}) `}i&&(t[o]=c)}}return n=n.trim(),i?n=i(t,s?"":n):s&&(n="none"),n}function dc(e,t,i){const{style:n,vars:s,transformOrigin:r}=e;let o=!1,a=!1;for(const l in t){const c=t[l];if(Si.has(l)){o=!0;continue}else if(Lm(l)){s[l]=c;continue}else{const u=Rm(c,uc[l]);l.startsWith("origin")?(a=!0,r[l]=u):n[l]=u}}if(t.transform||(o||i?n.transform=p0(t,e.transform,i):n.transform&&(n.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;n.transformOrigin=`${l} ${c} ${u}`}}const f0={offset:"stroke-dashoffset",array:"stroke-dasharray"},m0={offset:"strokeDashoffset",array:"strokeDasharray"};function h0(e,t,i=1,n=0,s=!0){e.pathLength=1;const r=s?f0:m0;e[r.offset]=D.transform(-n);const o=D.transform(t),a=D.transform(i);e[r.array]=`${o} ${a}`}function Yu(e,t,i){return typeof e=="string"?e:D.transform(t+i*e)}function g0(e,t,i){const n=Yu(t,e.x,e.width),s=Yu(i,e.y,e.height);return`${n} ${s}`}function pc(e,{attrX:t,attrY:i,attrScale:n,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(dc(e,c,d),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:v,dimensions:y}=e;p.transform&&(y&&(v.transform=p.transform),delete p.transform),y&&(s!==void 0||r!==void 0||v.transform)&&(v.transformOrigin=g0(y,s!==void 0?s:.5,r!==void 0?r:.5)),t!==void 0&&(p.x=t),i!==void 0&&(p.y=i),n!==void 0&&(p.scale=n),o!==void 0&&h0(p,o,a,l,!1)}const fc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),zm=()=>({...fc(),attrs:{}}),mc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Im(e,{style:t,vars:i},n,s){Object.assign(e.style,t,s&&s.getProjectionStyles(n));for(const r in i)e.style.setProperty(r,i[r])}const Vm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Fm(e,t,i,n){Im(e,t,void 0,n);for(const s in t.attrs)e.setAttribute(Vm.has(s)?s:rc(s),t.attrs[s])}const Lr={};function v0(e){Object.assign(Lr,e)}function _m(e,{layout:t,layoutId:i}){return Si.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!Lr[e]||e==="opacity")}function hc(e,t,i){var n;const{style:s}=e,r={};for(const o in s)(Se(s[o])||t.style&&Se(t.style[o])||_m(o,e)||((n=i==null?void 0:i.getValue(o))===null||n===void 0?void 0:n.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function Om(e,t,i){const n=hc(e,t,i);for(const s in e)if(Se(e[s])||Se(t[s])){const r=an.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;n[r]=e[s]}return n}function y0(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Zu=["x","y","width","height","cx","cy","r"],x0={useVisualState:Mm({scrapeMotionValuesFromProps:Om,createRenderState:zm,onUpdate:({props:e,prevProps:t,current:i,renderState:n,latestValues:s})=>{if(!i)return;let r=!!e.drag;if(!r){for(const a in s)if(Si.has(a)){r=!0;break}}if(!r)return;let o=!t;if(t)for(let a=0;a<Zu.length;a++){const l=Zu[a];e[l]!==t[l]&&(o=!0)}o&&K.read(()=>{y0(i,n),K.render(()=>{pc(n,s,mc(i.tagName),e.transformTemplate),Fm(i,n)})})}})},S0={useVisualState:Mm({scrapeMotionValuesFromProps:hc,createRenderState:fc})};function Um(e,t,i){for(const n in t)!Se(t[n])&&!_m(n,i)&&(e[n]=t[n])}function w0({transformTemplate:e},t){return b.useMemo(()=>{const i=fc();return dc(i,t,e),Object.assign({},i.vars,i.style)},[t])}function T0(e,t){const i=e.style||{},n={};return Um(n,i,e),Object.assign(n,w0(e,t)),n}function j0(e,t){const i={},n=T0(e,t);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=n,i}function P0(e,t,i,n){const s=b.useMemo(()=>{const r=zm();return pc(r,t,mc(n),e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};Um(r,e.style,e),s.style={...r,...s.style}}return s}function E0(e=!1){return(i,n,s,{latestValues:r},o)=>{const l=(ac(i)?P0:j0)(n,r,o,i),c=Oy(n,typeof i=="string",e),u=i!==b.Fragment?{...c,...l,ref:s}:{},{children:d}=n,p=b.useMemo(()=>Se(d)?d.get():d,[d]);return b.createElement(i,{...u,children:p})}}function C0(e,t){return function(n,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...ac(n)?x0:S0,preloadedFeatures:e,useRender:E0(s),createVisualElement:t,Component:n};return Gy(o)}}function Bm(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ro(e,t,i){const n=e.getProps();return lc(n,t,i!==void 0?i:n.custom,e)}const k0=ic(()=>window.ScrollTimeline!==void 0);class b0{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,i){for(let n=0;n<this.animations.length;n++)this.animations[n][t]=i}attachTimeline(t,i){const n=this.animations.map(s=>{if(k0()&&s.attachTimeline)return s.attachTimeline(t);if(typeof i=="function")return i(s)});return()=>{n.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let i=0;i<this.animations.length;i++)t=Math.max(t,this.animations[i].duration);return t}runAll(t){this.animations.forEach(i=>i[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class A0 extends b0{then(t,i){return Promise.all(this.animations).then(t).catch(i)}}function gc(e,t){return e?e[t]||e.default||e:void 0}const qa=2e4;function qm(e){let t=0;const i=50;let n=e.next(t);for(;!n.done&&t<qa;)t+=i,n=e.next(t);return t>=qa?1/0:t}function vc(e){return typeof e=="function"}function Ju(e,t){e.timeline=t,e.onfinish=null}const yc=e=>Array.isArray(e)&&typeof e[0]=="number",N0={linearEasing:void 0};function M0(e,t){const i=ic(e);return()=>{var n;return(n=N0[t])!==null&&n!==void 0?n:i()}}const Rr=M0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),$m=(e,t,i=10)=>{let n="";const s=Math.max(Math.round(t/i),2);for(let r=0;r<s;r++)n+=e(en(0,s-1,r))+", ";return`linear(${n.substring(0,n.length-2)})`};function Km(e){return!!(typeof e=="function"&&Rr()||!e||typeof e=="string"&&(e in $a||Rr())||yc(e)||Array.isArray(e)&&e.every(Km))}const En=([e,t,i,n])=>`cubic-bezier(${e}, ${t}, ${i}, ${n})`,$a={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:En([0,.65,.55,1]),circOut:En([.55,0,1,.45]),backIn:En([.31,.01,.66,-.59]),backOut:En([.33,1.53,.69,.99])};function Wm(e,t){if(e)return typeof e=="function"&&Rr()?$m(e,t):yc(e)?En(e):Array.isArray(e)?e.map(i=>Wm(i,t)||$a.easeOut):$a[e]}const Ze={x:!1,y:!1};function Hm(){return Ze.x||Ze.y}function D0(e,t,i){var n;if(e instanceof Element)return[e];if(typeof e=="string"){let s=document;const r=(n=void 0)!==null&&n!==void 0?n:s.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}function Qm(e,t){const i=D0(e),n=new AbortController,s={passive:!0,...t,signal:n.signal};return[i,s,()=>n.abort()]}function ed(e){return t=>{t.pointerType==="touch"||Hm()||e(t)}}function L0(e,t,i={}){const[n,s,r]=Qm(e,i),o=ed(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const u=ed(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,s)});return n.forEach(a=>{a.addEventListener("pointerenter",o,s)}),r}const Gm=(e,t)=>t?e===t?!0:Gm(e,t.parentElement):!1,xc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,R0=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function z0(e){return R0.has(e.tagName)||e.tabIndex!==-1}const Cn=new WeakSet;function td(e){return t=>{t.key==="Enter"&&e(t)}}function zo(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const I0=(e,t)=>{const i=e.currentTarget;if(!i)return;const n=td(()=>{if(Cn.has(i))return;zo(i,"down");const s=td(()=>{zo(i,"up")}),r=()=>zo(i,"cancel");i.addEventListener("keyup",s,t),i.addEventListener("blur",r,t)});i.addEventListener("keydown",n,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",n),t)};function id(e){return xc(e)&&!Hm()}function V0(e,t,i={}){const[n,s,r]=Qm(e,i),o=a=>{const l=a.currentTarget;if(!id(a)||Cn.has(l))return;Cn.add(l);const c=t(a),u=(v,y)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",p),!(!id(v)||!Cn.has(l))&&(Cn.delete(l),typeof c=="function"&&c(v,{success:y}))},d=v=>{u(v,i.useGlobalTarget||Gm(l,v.target))},p=v=>{u(v,!1)};window.addEventListener("pointerup",d,s),window.addEventListener("pointercancel",p,s)};return n.forEach(a=>{!z0(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(i.useGlobalTarget?window:a).addEventListener("pointerdown",o,s),a.addEventListener("focus",c=>I0(c,s),s)}),r}function F0(e){return e==="x"||e==="y"?Ze[e]?null:(Ze[e]=!0,()=>{Ze[e]=!1}):Ze.x||Ze.y?null:(Ze.x=Ze.y=!0,()=>{Ze.x=Ze.y=!1})}const Xm=new Set(["width","height","top","left","right","bottom",...an]);let or;function _0(){or=void 0}const dt={now:()=>(or===void 0&&dt.set(fe.isProcessing||Ry.useManualTiming?fe.timestamp:performance.now()),or),set:e=>{or=e,queueMicrotask(_0)}};function Sc(e,t){e.indexOf(t)===-1&&e.push(t)}function wc(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}class Tc{constructor(){this.subscriptions=[]}add(t){return Sc(this.subscriptions,t),()=>wc(this.subscriptions,t)}notify(t,i,n){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,i,n);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(t,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ym(e,t){return t?e*(1e3/t):0}const nd=30,O0=e=>!isNaN(parseFloat(e));class U0{constructor(t,i={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(n,s=!0)=>{const r=dt.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=dt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=O0(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new Tc);const n=this.events[t].add(i);return t==="change"?()=>{n(),K.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t,i=!0){!i||!this.passiveEffect?this.updateAndNotify(t,i):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,i,n){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=dt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>nd)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,nd);return Ym(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function os(e,t){return new U0(e,t)}function B0(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,os(i))}function q0(e,t){const i=ro(e,t);let{transitionEnd:n={},transition:s={},...r}=i||{};r={...r,...n};for(const o in r){const a=t0(r[o]);B0(e,o,a)}}function $0(e){return!!(Se(e)&&e.add)}function Ka(e,t){const i=e.getValue("willChange");if($0(i))return i.add(t)}function Zm(e){return e.props[bm]}const Jm=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,K0=1e-7,W0=12;function H0(e,t,i,n,s){let r,o,a=0;do o=t+(i-t)/2,r=Jm(o,n,s)-e,r>0?i=o:t=o;while(Math.abs(r)>K0&&++a<W0);return o}function hs(e,t,i,n){if(e===t&&i===n)return Ve;const s=r=>H0(r,0,1,e,i);return r=>r===0||r===1?r:Jm(s(r),t,n)}const eh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,th=e=>t=>1-e(1-t),ih=hs(.33,1.53,.69,.99),jc=th(ih),nh=eh(jc),sh=e=>(e*=2)<1?.5*jc(e):.5*(2-Math.pow(2,-10*(e-1))),Pc=e=>1-Math.sin(Math.acos(e)),rh=th(Pc),oh=eh(Pc),ah=e=>/^0[^.\s]+$/u.test(e);function Q0(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||ah(e):!0}const Vn=e=>Math.round(e*1e5)/1e5,Ec=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function G0(e){return e==null}const X0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cc=(e,t)=>i=>!!(typeof i=="string"&&X0.test(i)&&i.startsWith(e)||t&&!G0(i)&&Object.prototype.hasOwnProperty.call(i,t)),lh=(e,t,i)=>n=>{if(typeof n!="string")return n;const[s,r,o,a]=n.match(Ec);return{[e]:parseFloat(s),[t]:parseFloat(r),[i]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Y0=e=>Et(0,255,e),Io={...ln,transform:e=>Math.round(Y0(e))},ai={test:Cc("rgb","red"),parse:lh("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:n=1})=>"rgba("+Io.transform(e)+", "+Io.transform(t)+", "+Io.transform(i)+", "+Vn(rs.transform(n))+")"};function Z0(e){let t="",i="",n="",s="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),n=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),n=e.substring(3,4),s=e.substring(4,5),t+=t,i+=i,n+=n,s+=s),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:s?parseInt(s,16)/255:1}}const Wa={test:Cc("#"),parse:Z0,transform:ai.transform},Vi={test:Cc("hsl","hue"),parse:lh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:n=1})=>"hsla("+Math.round(e)+", "+ut.transform(Vn(t))+", "+ut.transform(Vn(i))+", "+Vn(rs.transform(n))+")"},ye={test:e=>ai.test(e)||Wa.test(e)||Vi.test(e),parse:e=>ai.test(e)?ai.parse(e):Vi.test(e)?Vi.parse(e):Wa.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ai.transform(e):Vi.transform(e)},J0=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ex(e){var t,i;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ec))===null||t===void 0?void 0:t.length)||0)+(((i=e.match(J0))===null||i===void 0?void 0:i.length)||0)>0}const ch="number",uh="color",tx="var",ix="var(",sd="${}",nx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function as(e){const t=e.toString(),i=[],n={color:[],number:[],var:[]},s=[];let r=0;const a=t.replace(nx,l=>(ye.test(l)?(n.color.push(r),s.push(uh),i.push(ye.parse(l))):l.startsWith(ix)?(n.var.push(r),s.push(tx),i.push(l)):(n.number.push(r),s.push(ch),i.push(parseFloat(l))),++r,sd)).split(sd);return{values:i,split:a,indexes:n,types:s}}function dh(e){return as(e).values}function ph(e){const{split:t,types:i}=as(e),n=t.length;return s=>{let r="";for(let o=0;o<n;o++)if(r+=t[o],s[o]!==void 0){const a=i[o];a===ch?r+=Vn(s[o]):a===uh?r+=ye.transform(s[o]):r+=s[o]}return r}}const sx=e=>typeof e=="number"?0:e;function rx(e){const t=dh(e);return ph(e)(t.map(sx))}const Ht={test:ex,parse:dh,createTransformer:ph,getAnimatableNone:rx},ox=new Set(["brightness","contrast","saturate","opacity"]);function ax(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=i.match(Ec)||[];if(!n)return e;const s=i.replace(n,"");let r=ox.has(t)?1:0;return n!==i&&(r*=100),t+"("+r+s+")"}const lx=/\b([a-z-]*)\(.*?\)/gu,Ha={...Ht,getAnimatableNone:e=>{const t=e.match(lx);return t?t.map(ax).join(" "):e}},cx={...uc,color:ye,backgroundColor:ye,outlineColor:ye,fill:ye,stroke:ye,borderColor:ye,borderTopColor:ye,borderRightColor:ye,borderBottomColor:ye,borderLeftColor:ye,filter:Ha,WebkitFilter:Ha},kc=e=>cx[e];function fh(e,t){let i=kc(e);return i!==Ha&&(i=Ht),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const ux=new Set(["auto","none","0"]);function dx(e,t,i){let n=0,s;for(;n<e.length&&!s;){const r=e[n];typeof r=="string"&&!ux.has(r)&&as(r).values.length&&(s=e[n]),n++}if(s&&i)for(const r of t)e[r]=fh(i,s)}const rd=e=>e===ln||e===D,od=(e,t)=>parseFloat(e.split(", ")[t]),ad=(e,t)=>(i,{transform:n})=>{if(n==="none"||!n)return 0;const s=n.match(/^matrix3d\((.+)\)$/u);if(s)return od(s[1],t);{const r=n.match(/^matrix\((.+)\)$/u);return r?od(r[1],e):0}},px=new Set(["x","y","z"]),fx=an.filter(e=>!px.has(e));function mx(e){const t=[];return fx.forEach(i=>{const n=e.getValue(i);n!==void 0&&(t.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),t}const nn={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ad(4,13),y:ad(5,14)};nn.translateX=nn.x;nn.translateY=nn.y;const di=new Set;let Qa=!1,Ga=!1;function mh(){if(Ga){const e=Array.from(di).filter(n=>n.needsMeasurement),t=new Set(e.map(n=>n.element)),i=new Map;t.forEach(n=>{const s=mx(n);s.length&&(i.set(n,s),n.render())}),e.forEach(n=>n.measureInitialState()),t.forEach(n=>{n.render();const s=i.get(n);s&&s.forEach(([r,o])=>{var a;(a=n.getValue(r))===null||a===void 0||a.set(o)})}),e.forEach(n=>n.measureEndState()),e.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Ga=!1,Qa=!1,di.forEach(e=>e.complete()),di.clear()}function hh(){di.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ga=!0)})}function hx(){hh(),mh()}class bc{constructor(t,i,n,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=n,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(di.add(this),Qa||(Qa=!0,K.read(hh),K.resolveKeyframes(mh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:n,motionValue:s}=this;for(let r=0;r<t.length;r++)if(t[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(n&&i){const l=n.readValue(i,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&o===void 0&&s.set(t[0])}else t[r]=t[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),di.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,di.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const gh=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),gx=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function vx(e){const t=gx.exec(e);if(!t)return[,];const[,i,n,s]=t;return[`--${i??n}`,s]}function vh(e,t,i=1){const[n,s]=vx(e);if(!n)return;const r=window.getComputedStyle(t).getPropertyValue(n);if(r){const o=r.trim();return gh(o)?parseFloat(o):o}return cc(s)?vh(s,t,i+1):s}const yh=e=>t=>t.test(e),yx={test:e=>e==="auto",parse:e=>e},xh=[ln,D,ut,bt,a0,o0,yx],ld=e=>xh.find(yh(e));class Sh extends bc{constructor(t,i,n,s,r){super(t,i,n,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:n}=this;if(!i||!i.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),cc(c))){const u=vh(c,i.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Xm.has(n)||t.length!==2)return;const[s,r]=t,o=ld(s),a=ld(r);if(o!==a)if(rd(o)&&rd(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,n=[];for(let s=0;s<t.length;s++)Q0(t[s])&&n.push(s);n.length&&dx(t,n,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:n}=this;if(!t||!t.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=nn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const s=i[i.length-1];s!==void 0&&t.getValue(n,s).jump(s,!1)}measureEndState(){var t;const{element:i,name:n,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const r=i.getValue(n);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=nn[n](i.measureViewportBox(),window.getComputedStyle(i.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{i.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const cd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ht.test(e)||e==="0")&&!e.startsWith("url("));function xx(e){const t=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}function Sx(e,t,i,n){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const r=e[e.length-1],o=cd(s,t),a=cd(r,t);return!o||!a?!1:xx(e)||(i==="spring"||vc(i))&&n}const wx=e=>e!==null;function oo(e,{repeat:t,repeatType:i="loop"},n){const s=e.filter(wx),r=t&&i!=="loop"&&t%2===1?0:s.length-1;return!r||n===void 0?s[r]:n}const Tx=40;class wh{constructor({autoplay:t=!0,delay:i=0,type:n="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=dt.now(),this.options={autoplay:t,delay:i,type:n,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Tx?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&hx(),this._resolved}onKeyframesResolved(t,i){this.resolvedAt=dt.now(),this.hasAttemptedResolve=!0;const{name:n,type:s,velocity:r,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Sx(t,n,s,r))if(o)this.options.duration=0;else{l&&l(oo(t,this.options,i)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,i);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:i,...u},this.onPostResolved())}onPostResolved(){}then(t,i){return this.currentFinishedPromise.then(t,i)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const G=(e,t,i)=>e+(t-e)*i;function Vo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function jx({hue:e,saturation:t,lightness:i,alpha:n}){e/=360,t/=100,i/=100;let s=0,r=0,o=0;if(!t)s=r=o=i;else{const a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;s=Vo(l,a,e+1/3),r=Vo(l,a,e),o=Vo(l,a,e-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:n}}function zr(e,t){return i=>i>0?t:e}const Fo=(e,t,i)=>{const n=e*e,s=i*(t*t-n)+n;return s<0?0:Math.sqrt(s)},Px=[Wa,ai,Vi],Ex=e=>Px.find(t=>t.test(e));function ud(e){const t=Ex(e);if(!t)return!1;let i=t.parse(e);return t===Vi&&(i=jx(i)),i}const dd=(e,t)=>{const i=ud(e),n=ud(t);if(!i||!n)return zr(e,t);const s={...i};return r=>(s.red=Fo(i.red,n.red,r),s.green=Fo(i.green,n.green,r),s.blue=Fo(i.blue,n.blue,r),s.alpha=G(i.alpha,n.alpha,r),ai.transform(s))},Cx=(e,t)=>i=>t(e(i)),gs=(...e)=>e.reduce(Cx),Xa=new Set(["none","hidden"]);function kx(e,t){return Xa.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}function bx(e,t){return i=>G(e,t,i)}function Ac(e){return typeof e=="number"?bx:typeof e=="string"?cc(e)?zr:ye.test(e)?dd:Mx:Array.isArray(e)?Th:typeof e=="object"?ye.test(e)?dd:Ax:zr}function Th(e,t){const i=[...e],n=i.length,s=e.map((r,o)=>Ac(r)(r,t[o]));return r=>{for(let o=0;o<n;o++)i[o]=s[o](r);return i}}function Ax(e,t){const i={...e,...t},n={};for(const s in i)e[s]!==void 0&&t[s]!==void 0&&(n[s]=Ac(e[s])(e[s],t[s]));return s=>{for(const r in n)i[r]=n[r](s);return i}}function Nx(e,t){var i;const n=[],s={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const o=t.types[r],a=e.indexes[o][s[o]],l=(i=e.values[a])!==null&&i!==void 0?i:0;n[r]=l,s[o]++}return n}const Mx=(e,t)=>{const i=Ht.createTransformer(t),n=as(e),s=as(t);return n.indexes.var.length===s.indexes.var.length&&n.indexes.color.length===s.indexes.color.length&&n.indexes.number.length>=s.indexes.number.length?Xa.has(e)&&!s.values.length||Xa.has(t)&&!n.values.length?kx(e,t):gs(Th(Nx(n,s),s.values),i):zr(e,t)};function jh(e,t,i){return typeof e=="number"&&typeof t=="number"&&typeof i=="number"?G(e,t,i):Ac(e)(e,t)}const Dx=5;function Ph(e,t,i){const n=Math.max(t-Dx,0);return Ym(i-e(n),t-n)}const J={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},_o=.001;function Lx({duration:e=J.duration,bounce:t=J.bounce,velocity:i=J.velocity,mass:n=J.mass}){let s,r,o=1-t;o=Et(J.minDamping,J.maxDamping,o),e=Et(J.minDuration,J.maxDuration,St(e)),o<1?(s=c=>{const u=c*o,d=u*e,p=u-i,v=Ya(c,o),y=Math.exp(-d);return _o-p/v*y},r=c=>{const d=c*o*e,p=d*i+i,v=Math.pow(o,2)*Math.pow(c,2)*e,y=Math.exp(-d),x=Ya(Math.pow(c,2),o);return(-s(c)+_o>0?-1:1)*((p-v)*y)/x}):(s=c=>{const u=Math.exp(-c*e),d=(c-i)*e+1;return-_o+u*d},r=c=>{const u=Math.exp(-c*e),d=(i-c)*(e*e);return u*d});const a=5/e,l=zx(s,r,a);if(e=xt(e),isNaN(l))return{stiffness:J.stiffness,damping:J.damping,duration:e};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:o*2*Math.sqrt(n*c),duration:e}}}const Rx=12;function zx(e,t,i){let n=i;for(let s=1;s<Rx;s++)n=n-e(n)/t(n);return n}function Ya(e,t){return e*Math.sqrt(1-t*t)}const Ix=["duration","bounce"],Vx=["stiffness","damping","mass"];function pd(e,t){return t.some(i=>e[i]!==void 0)}function Fx(e){let t={velocity:J.velocity,stiffness:J.stiffness,damping:J.damping,mass:J.mass,isResolvedFromDuration:!1,...e};if(!pd(e,Vx)&&pd(e,Ix))if(e.visualDuration){const i=e.visualDuration,n=2*Math.PI/(i*1.2),s=n*n,r=2*Et(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:J.mass,stiffness:s,damping:r}}else{const i=Lx(e);t={...t,...i,mass:J.mass},t.isResolvedFromDuration=!0}return t}function Eh(e=J.visualDuration,t=J.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:n,restDelta:s}=i;const r=i.keyframes[0],o=i.keyframes[i.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:v}=Fx({...i,velocity:-St(i.velocity||0)}),y=p||0,x=c/(2*Math.sqrt(l*u)),j=o-r,m=St(Math.sqrt(l/u)),f=Math.abs(j)<5;n||(n=f?J.restSpeed.granular:J.restSpeed.default),s||(s=f?J.restDelta.granular:J.restDelta.default);let h;if(x<1){const w=Ya(m,x);h=T=>{const C=Math.exp(-x*m*T);return o-C*((y+x*m*j)/w*Math.sin(w*T)+j*Math.cos(w*T))}}else if(x===1)h=w=>o-Math.exp(-m*w)*(j+(y+m*j)*w);else{const w=m*Math.sqrt(x*x-1);h=T=>{const C=Math.exp(-x*m*T),P=Math.min(w*T,300);return o-C*((y+x*m*j)*Math.sinh(P)+w*j*Math.cosh(P))/w}}const S={calculatedDuration:v&&d||null,next:w=>{const T=h(w);if(v)a.done=w>=d;else{let C=0;x<1&&(C=w===0?xt(y):Ph(h,w,T));const P=Math.abs(C)<=n,z=Math.abs(o-T)<=s;a.done=P&&z}return a.value=a.done?o:T,a},toString:()=>{const w=Math.min(qm(S),qa),T=$m(C=>S.next(w*C).value,w,30);return w+"ms "+T}};return S}function fd({keyframes:e,velocity:t=0,power:i=.8,timeConstant:n=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=e[0],p={done:!1,value:d},v=P=>a!==void 0&&P<a||l!==void 0&&P>l,y=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let x=i*t;const j=d+x,m=o===void 0?j:o(j);m!==j&&(x=m-d);const f=P=>-x*Math.exp(-P/n),h=P=>m+f(P),S=P=>{const z=f(P),M=h(P);p.done=Math.abs(z)<=c,p.value=p.done?m:M};let w,T;const C=P=>{v(p.value)&&(w=P,T=Eh({keyframes:[p.value,y(p.value)],velocity:Ph(h,P,p.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:P=>{let z=!1;return!T&&w===void 0&&(z=!0,S(P),C(P)),w!==void 0&&P>=w?T.next(P-w):(!z&&S(P),p)}}}const _x=hs(.42,0,1,1),Ox=hs(0,0,.58,1),Ch=hs(.42,0,.58,1),Ux=e=>Array.isArray(e)&&typeof e[0]!="number",Bx={linear:Ve,easeIn:_x,easeInOut:Ch,easeOut:Ox,circIn:Pc,circInOut:oh,circOut:rh,backIn:jc,backInOut:nh,backOut:ih,anticipate:sh},md=e=>{if(yc(e)){jm(e.length===4);const[t,i,n,s]=e;return hs(t,i,n,s)}else if(typeof e=="string")return Bx[e];return e};function qx(e,t,i){const n=[],s=i||jh,r=e.length-1;for(let o=0;o<r;o++){let a=s(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Ve:t;a=gs(l,a)}n.push(a)}return n}function $x(e,t,{clamp:i=!0,ease:n,mixer:s}={}){const r=e.length;if(jm(r===t.length),r===1)return()=>t[0];if(r===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[r-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=qx(t,n,s),l=a.length,c=u=>{if(o&&u<e[0])return t[0];let d=0;if(l>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const p=en(e[d],e[d+1],u);return a[d](p)};return i?u=>c(Et(e[0],e[r-1],u)):c}function Kx(e,t){const i=e[e.length-1];for(let n=1;n<=t;n++){const s=en(0,t,n);e.push(G(i,1,s))}}function Wx(e){const t=[0];return Kx(t,e.length-1),t}function Hx(e,t){return e.map(i=>i*t)}function Qx(e,t){return e.map(()=>t||Ch).splice(0,e.length-1)}function Ir({duration:e=300,keyframes:t,times:i,ease:n="easeInOut"}){const s=Ux(n)?n.map(md):md(n),r={done:!1,value:t[0]},o=Hx(i&&i.length===t.length?i:Wx(t),e),a=$x(o,t,{ease:Array.isArray(s)?s:Qx(t,s)});return{calculatedDuration:e,next:l=>(r.value=a(l),r.done=l>=e,r)}}const Gx=e=>{const t=({timestamp:i})=>e(i);return{start:()=>K.update(t,!0),stop:()=>Wt(t),now:()=>fe.isProcessing?fe.timestamp:dt.now()}},Xx={decay:fd,inertia:fd,tween:Ir,keyframes:Ir,spring:Eh},Yx=e=>e/100;class Nc extends wh{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:i,motionValue:n,element:s,keyframes:r}=this.options,o=(s==null?void 0:s.KeyframeResolver)||bc,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(r,a,i,n,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:i="keyframes",repeat:n=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=vc(i)?i:Xx[i]||Ir;let l,c;a!==Ir&&typeof t[0]!="number"&&(l=gs(Yx,jh(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});r==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=qm(u));const{calculatedDuration:d}=u,p=d+s,v=p*(n+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:p,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,i=!1){const{resolved:n}=this;if(!n){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=n;if(this.startTime===null)return r.next(0);const{delay:p,repeat:v,repeatType:y,repeatDelay:x,onUpdate:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),i?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-p*(this.speed>=0?1:-1),f=this.speed>=0?m<0:m>u;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let h=this.currentTime,S=r;if(v){const P=Math.min(this.currentTime,u)/d;let z=Math.floor(P),M=P%1;!M&&P>=1&&(M=1),M===1&&z--,z=Math.min(z,v+1),!!(z%2)&&(y==="reverse"?(M=1-M,x&&(M-=x/d)):y==="mirror"&&(S=o)),h=Et(0,1,M)*d}const w=f?{done:!1,value:l[0]}:S.next(h);a&&(w.value=a(w.value));let{done:T}=w;!f&&c!==null&&(T=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return C&&s!==void 0&&(w.value=oo(l,this.options,s)),j&&j(w.value),C&&this.finish(),w}get duration(){const{resolved:t}=this;return t?St(t.calculatedDuration):0}get time(){return St(this.currentTime)}set time(t){t=xt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=St(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Gx,onPlay:i,startTime:n}=this.options;this.driver||(this.driver=t(r=>this.tick(r))),i&&i();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=n??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Zx=new Set(["opacity","clipPath","filter","transform"]);function Jx(e,t,i,{delay:n=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:i};l&&(c.offset=l);const u=Wm(a,s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:n,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}const e1=ic(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vr=10,t1=2e4;function i1(e){return vc(e.type)||e.type==="spring"||!Km(e.ease)}function n1(e,t){const i=new Nc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let n={done:!1,value:e[0]};const s=[];let r=0;for(;!n.done&&r<t1;)n=i.sample(r),s.push(n.value),r+=Vr;return{times:void 0,keyframes:s,duration:r-Vr,ease:"linear"}}const kh={anticipate:sh,backInOut:nh,circInOut:oh};function s1(e){return e in kh}class hd extends wh{constructor(t){super(t);const{name:i,motionValue:n,element:s,keyframes:r}=this.options;this.resolver=new Sh(r,(o,a)=>this.onKeyframesResolved(o,a),i,n,s),this.resolver.scheduleResolve()}initPlayback(t,i){let{duration:n=300,times:s,ease:r,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof r=="string"&&Rr()&&s1(r)&&(r=kh[r]),i1(this.options)){const{onComplete:d,onUpdate:p,motionValue:v,element:y,...x}=this.options,j=n1(t,x);t=j.keyframes,t.length===1&&(t[1]=t[0]),n=j.duration,s=j.times,r=j.ease,o="keyframes"}const u=Jx(a.owner.current,l,t,{...this.options,duration:n,times:s,ease:r});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Ju(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(oo(t,this.options,i)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:n,times:s,type:o,ease:r,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:i}=t;return St(i)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:i}=t;return St(i.currentTime||0)}set time(t){const{resolved:i}=this;if(!i)return;const{animation:n}=i;n.currentTime=xt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:i}=t;return i.playbackRate}set speed(t){const{resolved:i}=this;if(!i)return;const{animation:n}=i;n.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:i}=t;return i.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:i}=t;return i.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:i}=this;if(!i)return Ve;const{animation:n}=i;Ju(n,t)}return Ve}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:i,keyframes:n,duration:s,type:r,ease:o,times:a}=t;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:p,...v}=this.options,y=new Nc({...v,keyframes:n,duration:s,type:r,ease:o,times:a,isGenerator:!0}),x=xt(this.time);c.setWithVelocity(y.sample(x-Vr).value,y.sample(x).value,Vr)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:i,name:n,repeatDelay:s,repeatType:r,damping:o,type:a}=t;if(!i||!i.owner||!(i.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=i.owner.getProps();return e1()&&n&&Zx.has(n)&&!l&&!c&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const r1={type:"spring",stiffness:500,damping:25,restSpeed:10},o1=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),a1={type:"keyframes",duration:.8},l1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},c1=(e,{keyframes:t})=>t.length>2?a1:Si.has(e)?e.startsWith("scale")?o1(t[1]):r1:l1;function u1({when:e,delay:t,delayChildren:i,staggerChildren:n,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Mc=(e,t,i,n={},s,r)=>o=>{const a=gc(n,e)||{},l=a.delay||n.delay||0;let{elapsed:c=0}=n;c=c-xt(l);let u={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:r?void 0:s};u1(a)||(u={...u,...c1(e,u)}),u.duration&&(u.duration=xt(u.duration)),u.repeatDelay&&(u.repeatDelay=xt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!r&&t.get()!==void 0){const p=oo(u.keyframes,a);if(p!==void 0)return K.update(()=>{u.onUpdate(p),u.onComplete()}),new A0([])}return!r&&hd.supports(u)?new hd(u):new Nc(u)};function d1({protectedKeys:e,needsAnimating:t},i){const n=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,n}function bh(e,t,{delay:i=0,transitionOverride:n,type:s}={}){var r;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;n&&(o=n);const c=[],u=s&&e.animationState&&e.animationState.getState()[s];for(const d in l){const p=e.getValue(d,(r=e.latestValues[d])!==null&&r!==void 0?r:null),v=l[d];if(v===void 0||u&&d1(u,d))continue;const y={delay:i,...gc(o||{},d)};let x=!1;if(window.MotionHandoffAnimation){const m=Zm(e);if(m){const f=window.MotionHandoffAnimation(m,d,K);f!==null&&(y.startTime=f,x=!0)}}Ka(e,d),p.start(Mc(d,p,v,e.shouldReduceMotion&&Xm.has(d)?{type:!1}:y,e,x));const j=p.animation;j&&c.push(j)}return a&&Promise.all(c).then(()=>{K.update(()=>{a&&q0(e,a)})}),c}function Za(e,t,i={}){var n;const s=ro(e,t,i.type==="exit"?(n=e.presenceContext)===null||n===void 0?void 0:n.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=s||{};i.transitionOverride&&(r=i.transitionOverride);const o=s?()=>Promise.all(bh(e,s,i)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:p}=r;return p1(e,t,u+c,d,p,i)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(i.delay)])}function p1(e,t,i=0,n=0,s=1,r){const o=[],a=(e.variantChildren.size-1)*n,l=s===1?(c=0)=>c*n:(c=0)=>a-c*n;return Array.from(e.variantChildren).sort(f1).forEach((c,u)=>{c.notify("AnimationStart",t),o.push(Za(c,t,{...r,delay:i+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function f1(e,t){return e.sortNodePosition(t)}function m1(e,t,i={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const s=t.map(r=>Za(e,r,i));n=Promise.all(s)}else if(typeof t=="string")n=Za(e,t,i);else{const s=typeof t=="function"?ro(e,t,i.custom):t;n=Promise.all(bh(e,s,i))}return n.then(()=>{e.notify("AnimationComplete",t)})}const h1=sc.length;function Ah(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?Ah(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const t={};for(let i=0;i<h1;i++){const n=sc[i],s=e.props[n];(ss(s)||s===!1)&&(t[n]=s)}return t}const g1=[...nc].reverse(),v1=nc.length;function y1(e){return t=>Promise.all(t.map(({animation:i,options:n})=>m1(e,i,n)))}function x1(e){let t=y1(e),i=gd(),n=!0;const s=l=>(c,u)=>{var d;const p=ro(e,u,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(p){const{transition:v,transitionEnd:y,...x}=p;c={...c,...x,...y}}return c};function r(l){t=l(e)}function o(l){const{props:c}=e,u=Ah(e.parent)||{},d=[],p=new Set;let v={},y=1/0;for(let j=0;j<v1;j++){const m=g1[j],f=i[m],h=c[m]!==void 0?c[m]:u[m],S=ss(h),w=m===l?f.isActive:null;w===!1&&(y=j);let T=h===u[m]&&h!==c[m]&&S;if(T&&n&&e.manuallyAnimateOnMount&&(T=!1),f.protectedKeys={...v},!f.isActive&&w===null||!h&&!f.prevProp||no(h)||typeof h=="boolean")continue;const C=S1(f.prevProp,h);let P=C||m===l&&f.isActive&&!T&&S||j>y&&S,z=!1;const M=Array.isArray(h)?h:[h];let Z=M.reduce(s(m),{});w===!1&&(Z={});const{prevResolvedValues:Te={}}=f,de={...Te,...Z},Zt=te=>{P=!0,p.has(te)&&(z=!0,p.delete(te)),f.needsAnimating[te]=!0;const k=e.getValue(te);k&&(k.liveStyle=!1)};for(const te in de){const k=Z[te],L=Te[te];if(v.hasOwnProperty(te))continue;let R=!1;Ba(k)&&Ba(L)?R=!Bm(k,L):R=k!==L,R?k!=null?Zt(te):p.add(te):k!==void 0&&p.has(te)?Zt(te):f.protectedKeys[te]=!0}f.prevProp=h,f.prevResolvedValues=Z,f.isActive&&(v={...v,...Z}),n&&e.blockInitialAnimation&&(P=!1),P&&(!(T&&C)||z)&&d.push(...M.map(te=>({animation:te,options:{type:m}})))}if(p.size){const j={};p.forEach(m=>{const f=e.getBaseTarget(m),h=e.getValue(m);h&&(h.liveStyle=!0),j[m]=f??null}),d.push({animation:j})}let x=!!d.length;return n&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(x=!1),n=!1,x?t(d):Promise.resolve()}function a(l,c){var u;if(i[l].isActive===c)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var v;return(v=p.animationState)===null||v===void 0?void 0:v.setActive(l,c)}),i[l].isActive=c;const d=o(l);for(const p in i)i[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>i,reset:()=>{i=gd(),n=!0}}}function S1(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Bm(t,e):!1}function Jt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gd(){return{animate:Jt(!0),whileInView:Jt(),whileHover:Jt(),whileTap:Jt(),whileDrag:Jt(),whileFocus:Jt(),exit:Jt()}}class Yt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class w1 extends Yt{constructor(t){super(t),t.animationState||(t.animationState=x1(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();no(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let T1=0;class j1 extends Yt{constructor(){super(...arguments),this.id=T1++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;const s=this.node.animationState.setActive("exit",!t);i&&!t&&s.then(()=>i(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const P1={animation:{Feature:w1},exit:{Feature:j1}};function ls(e,t,i,n={passive:!0}){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i)}function vs(e){return{point:{x:e.pageX,y:e.pageY}}}const E1=e=>t=>xc(t)&&e(t,vs(t));function Fn(e,t,i,n){return ls(e,t,E1(i),n)}const vd=(e,t)=>Math.abs(e-t);function C1(e,t){const i=vd(e.x,t.x),n=vd(e.y,t.y);return Math.sqrt(i**2+n**2)}class Nh{constructor(t,i,{transformPagePoint:n,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Uo(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,v=C1(d.offset,{x:0,y:0})>=3;if(!p&&!v)return;const{point:y}=d,{timestamp:x}=fe;this.history.push({...y,timestamp:x});const{onStart:j,onMove:m}=this.handlers;p||(j&&j(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Oo(p,this.transformPagePoint),K.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:v,onSessionEnd:y,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Uo(d.type==="pointercancel"?this.lastMoveEventInfo:Oo(p,this.transformPagePoint),this.history);this.startEvent&&v&&v(d,j),y&&y(d,j)},!xc(t))return;this.dragSnapToOrigin=r,this.handlers=i,this.transformPagePoint=n,this.contextWindow=s||window;const o=vs(t),a=Oo(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=fe;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=i;u&&u(t,Uo(a,this.history)),this.removeListeners=gs(Fn(this.contextWindow,"pointermove",this.handlePointerMove),Fn(this.contextWindow,"pointerup",this.handlePointerUp),Fn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Wt(this.updatePoint)}}function Oo(e,t){return t?{point:t(e.point)}:e}function yd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Uo({point:e},t){return{point:e,delta:yd(e,Mh(t)),offset:yd(e,k1(t)),velocity:b1(t,.1)}}function k1(e){return e[0]}function Mh(e){return e[e.length-1]}function b1(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,n=null;const s=Mh(e);for(;i>=0&&(n=e[i],!(s.timestamp-n.timestamp>xt(t)));)i--;if(!n)return{x:0,y:0};const r=St(s.timestamp-n.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-n.x)/r,y:(s.y-n.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Dh=1e-4,A1=1-Dh,N1=1+Dh,Lh=.01,M1=0-Lh,D1=0+Lh;function _e(e){return e.max-e.min}function L1(e,t,i){return Math.abs(e-t)<=i}function xd(e,t,i,n=.5){e.origin=n,e.originPoint=G(t.min,t.max,e.origin),e.scale=_e(i)/_e(t),e.translate=G(i.min,i.max,e.origin)-e.originPoint,(e.scale>=A1&&e.scale<=N1||isNaN(e.scale))&&(e.scale=1),(e.translate>=M1&&e.translate<=D1||isNaN(e.translate))&&(e.translate=0)}function _n(e,t,i,n){xd(e.x,t.x,i.x,n?n.originX:void 0),xd(e.y,t.y,i.y,n?n.originY:void 0)}function Sd(e,t,i){e.min=i.min+t.min,e.max=e.min+_e(t)}function R1(e,t,i){Sd(e.x,t.x,i.x),Sd(e.y,t.y,i.y)}function wd(e,t,i){e.min=t.min-i.min,e.max=e.min+_e(t)}function On(e,t,i){wd(e.x,t.x,i.x),wd(e.y,t.y,i.y)}function z1(e,{min:t,max:i},n){return t!==void 0&&e<t?e=n?G(t,e,n.min):Math.max(e,t):i!==void 0&&e>i&&(e=n?G(i,e,n.max):Math.min(e,i)),e}function Td(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function I1(e,{top:t,left:i,bottom:n,right:s}){return{x:Td(e.x,i,s),y:Td(e.y,t,n)}}function jd(e,t){let i=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,n]=[n,i]),{min:i,max:n}}function V1(e,t){return{x:jd(e.x,t.x),y:jd(e.y,t.y)}}function F1(e,t){let i=.5;const n=_e(e),s=_e(t);return s>n?i=en(t.min,t.max-n,e.min):n>s&&(i=en(e.min,e.max-s,t.min)),Et(0,1,i)}function _1(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const Ja=.35;function O1(e=Ja){return e===!1?e=0:e===!0&&(e=Ja),{x:Pd(e,"left","right"),y:Pd(e,"top","bottom")}}function Pd(e,t,i){return{min:Ed(e,t),max:Ed(e,i)}}function Ed(e,t){return typeof e=="number"?e:e[t]||0}const Cd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Fi=()=>({x:Cd(),y:Cd()}),kd=()=>({min:0,max:0}),se=()=>({x:kd(),y:kd()});function qe(e){return[e("x"),e("y")]}function Rh({top:e,left:t,right:i,bottom:n}){return{x:{min:t,max:i},y:{min:e,max:n}}}function U1({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function B1(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function Bo(e){return e===void 0||e===1}function el({scale:e,scaleX:t,scaleY:i}){return!Bo(e)||!Bo(t)||!Bo(i)}function ii(e){return el(e)||zh(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function zh(e){return bd(e.x)||bd(e.y)}function bd(e){return e&&e!=="0%"}function Fr(e,t,i){const n=e-i,s=t*n;return i+s}function Ad(e,t,i,n,s){return s!==void 0&&(e=Fr(e,s,n)),Fr(e,i,n)+t}function tl(e,t=0,i=1,n,s){e.min=Ad(e.min,t,i,n,s),e.max=Ad(e.max,t,i,n,s)}function Ih(e,{x:t,y:i}){tl(e.x,t.translate,t.scale,t.originPoint),tl(e.y,i.translate,i.scale,i.originPoint)}const Nd=.999999999999,Md=1.0000000000001;function q1(e,t,i,n=!1){const s=i.length;if(!s)return;t.x=t.y=1;let r,o;for(let a=0;a<s;a++){r=i[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(n&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Oi(e,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ih(e,o)),n&&ii(r.latestValues)&&Oi(e,r.latestValues))}t.x<Md&&t.x>Nd&&(t.x=1),t.y<Md&&t.y>Nd&&(t.y=1)}function _i(e,t){e.min=e.min+t,e.max=e.max+t}function Dd(e,t,i,n,s=.5){const r=G(e.min,e.max,s);tl(e,t,i,r,n)}function Oi(e,t){Dd(e.x,t.x,t.scaleX,t.scale,t.originX),Dd(e.y,t.y,t.scaleY,t.scale,t.originY)}function Vh(e,t){return Rh(B1(e.getBoundingClientRect(),t))}function $1(e,t,i){const n=Vh(e,i),{scroll:s}=t;return s&&(_i(n.x,s.offset.x),_i(n.y,s.offset.y)),n}const Fh=({current:e})=>e?e.ownerDocument.defaultView:null,K1=new WeakMap;class W1{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=se(),this.visualElement=t}start(t,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(vs(u).point)},r=(u,d)=>{const{drag:p,dragPropagation:v,onDragStart:y}=this.getProps();if(p&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=F0(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),qe(j=>{let m=this.getAxisMotionValue(j).get()||0;if(ut.test(m)){const{projection:f}=this.visualElement;if(f&&f.layout){const h=f.layout.layoutBox[j];h&&(m=_e(h)*(parseFloat(m)/100))}}this.originPoint[j]=m}),y&&K.postRender(()=>y(u,d)),Ka(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:y,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:j}=d;if(v&&this.currentDirection===null){this.currentDirection=H1(j),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,j),this.updateAxis("y",d.point,j),this.visualElement.render(),x&&x(u,d)},a=(u,d)=>this.stop(u,d),l=()=>qe(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Nh(t,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Fh(this.visualElement)})}stop(t,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&K.postRender(()=>r(t,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,n){const{drag:s}=this.getProps();if(!n||!Ws(t,s,this.currentDirection))return;const r=this.getAxisMotionValue(t);let o=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(o=z1(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){var t;const{dragConstraints:i,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,r=this.constraints;i&&Ii(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=I1(s.layoutBox,i):this.constraints=!1,this.elastic=O1(n),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&qe(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=_1(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Ii(t))return!1;const n=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=$1(n,s.root,this.visualElement.getTransformPagePoint());let o=V1(s.layout.layoutBox,r);if(i){const a=i(U1(o));this.hasMutatedConstraints=!!a,a&&(o=Rh(a))}return o}startAnimation(t){const{drag:i,dragMomentum:n,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=qe(u=>{if(!Ws(u,i,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const p=s?200:1e6,v=s?40:1e7,y={type:"inertia",velocity:n?t[u]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...r,...d};return this.startAxisValueAnimation(u,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,i){const n=this.getAxisMotionValue(t);return Ka(this.visualElement,t),n.start(Mc(t,n,0,i,this.visualElement,!1))}stopAnimation(){qe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){qe(t=>{var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps(),s=n[i];return s||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){qe(i=>{const{drag:n}=this.getProps();if(!Ws(i,n,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(i);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[i];r.set(t[i]-G(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!Ii(i)||!n||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};qe(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=F1({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),qe(o=>{if(!Ws(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(G(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;K1.set(this.visualElement,this);const t=this.visualElement.current,i=Fn(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),n=()=>{const{dragConstraints:l}=this.getProps();Ii(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",n);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),K.read(n);const o=ls(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(qe(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),i(),r(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=Ja,dragMomentum:a=!0}=t;return{...t,drag:i,dragDirectionLock:n,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Ws(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function H1(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class Q1 extends Yt{constructor(t){super(t),this.removeGroupControls=Ve,this.removeListeners=Ve,this.controls=new W1(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ve}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ld=e=>(t,i)=>{e&&K.postRender(()=>e(t,i))};class G1 extends Yt{constructor(){super(...arguments),this.removePointerDownListener=Ve}onPointerDown(t){this.session=new Nh(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Fh(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:n,onPanEnd:s}=this.node.getProps();return{onSessionStart:Ld(t),onStart:Ld(i),onMove:n,onEnd:(r,o)=>{delete this.session,s&&K.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=Fn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ar={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Rd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const yn={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(D.test(e))e=parseFloat(e);else return e;const i=Rd(e,t.target.x),n=Rd(e,t.target.y);return`${i}% ${n}%`}},X1={correct:(e,{treeScale:t,projectionDelta:i})=>{const n=e,s=Ht.parse(e);if(s.length>5)return n;const r=Ht.createTransformer(e),o=typeof s[0]!="number"?1:0,a=i.x.scale*t.x,l=i.y.scale*t.y;s[0+o]/=a,s[1+o]/=l;const c=G(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};class Y1 extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n,layoutId:s}=this.props,{projection:r}=t;v0(Z1),r&&(i.group&&i.group.add(r),n&&n.register&&s&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),ar.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:n,drag:s,isPresent:r}=this.props,o=n.projection;return o&&(o.isPresent=r,s||t.layoutDependency!==i||i===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||K.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),oc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(s),n&&n.deregister&&n.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function _h(e){const[t,i]=wm(),n=b.useContext(Zl);return g.jsx(Y1,{...e,layoutGroup:n,switchLayoutGroup:b.useContext(Am),isPresent:t,safeToRemove:i})}const Z1={borderRadius:{...yn,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yn,borderTopRightRadius:yn,borderBottomLeftRadius:yn,borderBottomRightRadius:yn,boxShadow:X1};function J1(e,t,i){const n=Se(e)?e:os(e);return n.start(Mc("",n,t,i)),n.animation}function eS(e){return e instanceof SVGElement&&e.tagName!=="svg"}const tS=(e,t)=>e.depth-t.depth;class iS{constructor(){this.children=[],this.isDirty=!1}add(t){Sc(this.children,t),this.isDirty=!0}remove(t){wc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(tS),this.isDirty=!1,this.children.forEach(t)}}function nS(e,t){const i=dt.now(),n=({timestamp:s})=>{const r=s-i;r>=t&&(Wt(n),e(r-t))};return K.read(n,!0),()=>Wt(n)}const Oh=["TopLeft","TopRight","BottomLeft","BottomRight"],sS=Oh.length,zd=e=>typeof e=="string"?parseFloat(e):e,Id=e=>typeof e=="number"||D.test(e);function rS(e,t,i,n,s,r){s?(e.opacity=G(0,i.opacity!==void 0?i.opacity:1,oS(n)),e.opacityExit=G(t.opacity!==void 0?t.opacity:1,0,aS(n))):r&&(e.opacity=G(t.opacity!==void 0?t.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let o=0;o<sS;o++){const a=`border${Oh[o]}Radius`;let l=Vd(t,a),c=Vd(i,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Id(l)===Id(c)?(e[a]=Math.max(G(zd(l),zd(c),n),0),(ut.test(c)||ut.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||i.rotate)&&(e.rotate=G(t.rotate||0,i.rotate||0,n))}function Vd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const oS=Uh(0,.5,rh),aS=Uh(.5,.95,Ve);function Uh(e,t,i){return n=>n<e?0:n>t?1:i(en(e,t,n))}function Fd(e,t){e.min=t.min,e.max=t.max}function Be(e,t){Fd(e.x,t.x),Fd(e.y,t.y)}function _d(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Od(e,t,i,n,s){return e-=t,e=Fr(e,1/i,n),s!==void 0&&(e=Fr(e,1/s,n)),e}function lS(e,t=0,i=1,n=.5,s,r=e,o=e){if(ut.test(t)&&(t=parseFloat(t),t=G(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=G(r.min,r.max,n);e===r&&(a-=t),e.min=Od(e.min,t,i,a,s),e.max=Od(e.max,t,i,a,s)}function Ud(e,t,[i,n,s],r,o){lS(e,t[i],t[n],t[s],t.scale,r,o)}const cS=["x","scaleX","originX"],uS=["y","scaleY","originY"];function Bd(e,t,i,n){Ud(e.x,t,cS,i?i.x:void 0,n?n.x:void 0),Ud(e.y,t,uS,i?i.y:void 0,n?n.y:void 0)}function qd(e){return e.translate===0&&e.scale===1}function Bh(e){return qd(e.x)&&qd(e.y)}function $d(e,t){return e.min===t.min&&e.max===t.max}function dS(e,t){return $d(e.x,t.x)&&$d(e.y,t.y)}function Kd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function qh(e,t){return Kd(e.x,t.x)&&Kd(e.y,t.y)}function Wd(e){return _e(e.x)/_e(e.y)}function Hd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class pS{constructor(){this.members=[]}add(t){Sc(this.members,t),t.scheduleRender()}remove(t){if(wc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(s=>t===s);if(i===0)return!1;let n;for(let s=i;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){n=r;break}}return n?(this.promote(n),!0):!1}promote(t,i){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,i&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:n}=t;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function fS(e,t,i){let n="";const s=e.x.translate/t.x,r=e.y.translate/t.y,o=(i==null?void 0:i.z)||0;if((s||r||o)&&(n=`translate3d(${s}px, ${r}px, ${o}px) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:p,skewX:v,skewY:y}=i;c&&(n=`perspective(${c}px) ${n}`),u&&(n+=`rotate(${u}deg) `),d&&(n+=`rotateX(${d}deg) `),p&&(n+=`rotateY(${p}deg) `),v&&(n+=`skewX(${v}deg) `),y&&(n+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(n+=`scale(${a}, ${l})`),n||"none"}const ni={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},kn=typeof window<"u"&&window.MotionDebug!==void 0,qo=["","X","Y","Z"],mS={visibility:"hidden"},Qd=1e3;let hS=0;function $o(e,t,i,n){const{latestValues:s}=t;s[e]&&(i[e]=s[e],t.setStaticValue(e,0),n&&(n[e]=0))}function $h(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const i=Zm(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:s,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",K,!(s||r))}const{parent:n}=e;n&&!n.hasCheckedOptimisedAppear&&$h(n)}function Kh({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:n,resetTransform:s}){return class{constructor(o={},a=t==null?void 0:t()){this.id=hS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,kn&&(ni.totalNodes=ni.resolvedTargetDeltas=ni.recalculatedProjection=0),this.nodes.forEach(yS),this.nodes.forEach(jS),this.nodes.forEach(PS),this.nodes.forEach(xS),kn&&window.MotionDebug.record(ni)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new iS)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Tc),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=eS(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let d;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=nS(p,250),ar.hasAnimatedSinceResize&&(ar.hasAnimatedSinceResize=!1,this.nodes.forEach(Xd))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:v,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||AS,{onLayoutAnimationStart:j,onLayoutAnimationComplete:m}=u.getProps(),f=!this.targetLayout||!qh(this.targetLayout,y)||v,h=!p&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||p&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,h);const S={...gc(x,"layout"),onPlay:j,onComplete:m};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||Xd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Wt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ES),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&$h(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Gd);return}this.isUpdating||this.nodes.forEach(wS),this.isUpdating=!1,this.nodes.forEach(TS),this.nodes.forEach(gS),this.nodes.forEach(vS),this.clearAllSnapshots();const a=dt.now();fe.delta=Et(0,1e3/60,a-fe.timestamp),fe.timestamp=a,fe.isProcessing=!0,Ro.update.process(fe),Ro.preRender.process(fe),Ro.render.process(fe),fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,oc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(SS),this.sharedNodes.forEach(CS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,K.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){K.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=n(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Bh(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||ii(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),NS(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return se();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(MS))){const{scroll:u}=this.root;u&&(_i(l.x,u.offset.x),_i(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=se();if(Be(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:p}=u;u!==this.root&&d&&p.layoutScroll&&(d.wasRoot&&Be(l,o),_i(l.x,d.offset.x),_i(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=se();Be(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Oi(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ii(u.latestValues)&&Oi(l,u.latestValues)}return ii(this.latestValues)&&Oi(l,this.latestValues),l}removeTransform(o){const a=se();Be(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ii(c.latestValues))continue;el(c.latestValues)&&c.updateSnapshot();const u=se(),d=c.measurePageBox();Be(u,d),Bd(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ii(this.latestValues)&&Bd(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:p}=this.options;if(!(!this.layout||!(d||p))){if(this.resolvedRelativeTargetAt=fe.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=se(),this.relativeTargetOrigin=se(),On(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=se(),this.targetWithTransforms=se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),R1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Be(this.target,this.layout.layoutBox),Ih(this.target,this.targetDelta)):Be(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=se(),this.relativeTargetOrigin=se(),On(this.relativeTargetOrigin,this.target,v.target),Be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}kn&&ni.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||el(this.parent.latestValues)||zh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===fe.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Be(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;q1(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=se());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_d(this.prevProjectionDelta.x,this.projectionDelta.x),_d(this.prevProjectionDelta.y,this.projectionDelta.y)),_n(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!Hd(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),kn&&ni.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Fi(),this.projectionDelta=Fi(),this.projectionDeltaWithTransform=Fi()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Fi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=se(),v=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=v!==y,j=this.getStack(),m=!j||j.members.length<=1,f=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(bS));this.animationProgress=0;let h;this.mixTargetDelta=S=>{const w=S/1e3;Yd(d.x,o.x,w),Yd(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(On(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),kS(this.relativeTarget,this.relativeTargetOrigin,p,w),h&&dS(this.relativeTarget,h)&&(this.isProjectionDirty=!1),h||(h=se()),Be(h,this.relativeTarget)),x&&(this.animationValues=u,rS(u,c,this.latestValues,w,f,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Wt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=K.update(()=>{ar.hasAnimatedSinceResize=!0,this.currentAnimation=J1(0,Qd,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qd),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Wh(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||se();const d=_e(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const p=_e(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}Be(a,l),Oi(a,u),_n(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new pS),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&$o("z",o,c,this.animationValues);for(let u=0;u<qo.length;u++)$o(`rotate${qo[u]}`,o,c,this.animationValues),$o(`skew${qo[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return mS;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=rr(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=rr(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ii(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=fS(this.projectionDeltaWithTransform,this.treeScale,p),u&&(c.transform=u(p,c.transform));const{x:v,y}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${y.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Lr){if(p[x]===void 0)continue;const{correct:j,applyTo:m}=Lr[x],f=c.transform==="none"?p[x]:j(p[x],d);if(m){const h=m.length;for(let S=0;S<h;S++)c[m[S]]=f}else c[x]=f}return this.options.layoutId&&(c.pointerEvents=d===this?rr(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Gd),this.root.sharedNodes.clear()}}}function gS(e){e.updateLayout()}function vS(e){var t;const i=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=e.layout,{animationType:r}=e.options,o=i.source!==e.layout.source;r==="size"?qe(d=>{const p=o?i.measuredBox[d]:i.layoutBox[d],v=_e(p);p.min=n[d].min,p.max=p.min+v}):Wh(r,i.layoutBox,n)&&qe(d=>{const p=o?i.measuredBox[d]:i.layoutBox[d],v=_e(n[d]);p.max=p.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+v)});const a=Fi();_n(a,n,i.layoutBox);const l=Fi();o?_n(l,e.applyTransform(s,!0),i.measuredBox):_n(l,n,i.layoutBox);const c=!Bh(a);let u=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:v}=d;if(p&&v){const y=se();On(y,i.layoutBox,p.layoutBox);const x=se();On(x,n,v.layoutBox),qh(y,x)||(u=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function yS(e){kn&&ni.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function xS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function SS(e){e.clearSnapshot()}function Gd(e){e.clearMeasurements()}function wS(e){e.isLayoutDirty=!1}function TS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Xd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function jS(e){e.resolveTargetDelta()}function PS(e){e.calcProjection()}function ES(e){e.resetSkewAndRotation()}function CS(e){e.removeLeadSnapshot()}function Yd(e,t,i){e.translate=G(t.translate,0,i),e.scale=G(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function Zd(e,t,i,n){e.min=G(t.min,i.min,n),e.max=G(t.max,i.max,n)}function kS(e,t,i,n){Zd(e.x,t.x,i.x,n),Zd(e.y,t.y,i.y,n)}function bS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const AS={duration:.45,ease:[.4,0,.1,1]},Jd=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ep=Jd("applewebkit/")&&!Jd("chrome/")?Math.round:Ve;function tp(e){e.min=ep(e.min),e.max=ep(e.max)}function NS(e){tp(e.x),tp(e.y)}function Wh(e,t,i){return e==="position"||e==="preserve-aspect"&&!L1(Wd(t),Wd(i),.2)}function MS(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const DS=Kh({attachResizeListener:(e,t)=>ls(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ko={current:void 0},Hh=Kh({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ko.current){const e=new DS({});e.mount(window),e.setOptions({layoutScroll:!0}),Ko.current=e}return Ko.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),LS={pan:{Feature:G1},drag:{Feature:Q1,ProjectionNode:Hh,MeasureLayout:_h}};function ip(e,t,i){const{props:n}=e;e.animationState&&n.whileHover&&e.animationState.setActive("whileHover",i==="Start");const s="onHover"+i,r=n[s];r&&K.postRender(()=>r(t,vs(t)))}class RS extends Yt{mount(){const{current:t}=this.node;t&&(this.unmount=L0(t,i=>(ip(this.node,i,"Start"),n=>ip(this.node,n,"End"))))}unmount(){}}class zS extends Yt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=gs(ls(this.node.current,"focus",()=>this.onFocus()),ls(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function np(e,t,i){const{props:n}=e;e.animationState&&n.whileTap&&e.animationState.setActive("whileTap",i==="Start");const s="onTap"+(i==="End"?"":i),r=n[s];r&&K.postRender(()=>r(t,vs(t)))}class IS extends Yt{mount(){const{current:t}=this.node;t&&(this.unmount=V0(t,i=>(np(this.node,i,"Start"),(n,{success:s})=>np(this.node,n,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const il=new WeakMap,Wo=new WeakMap,VS=e=>{const t=il.get(e.target);t&&t(e)},FS=e=>{e.forEach(VS)};function _S({root:e,...t}){const i=e||document;Wo.has(i)||Wo.set(i,{});const n=Wo.get(i),s=JSON.stringify(t);return n[s]||(n[s]=new IntersectionObserver(FS,{root:e,...t})),n[s]}function OS(e,t,i){const n=_S(t);return il.set(e,i),n.observe(e),()=>{il.delete(e),n.unobserve(e)}}const US={some:0,all:1};class BS extends Yt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:n,amount:s="some",once:r}=t,o={root:i?i.current:void 0,rootMargin:n,threshold:typeof s=="number"?s:US[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),p=c?u:d;p&&p(l)};return OS(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(qS(t,i))&&this.startObserver()}unmount(){}}function qS({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const $S={inView:{Feature:BS},tap:{Feature:IS},focus:{Feature:zS},hover:{Feature:RS}},KS={layout:{ProjectionNode:Hh,MeasureLayout:_h}},nl={current:null},Qh={current:!1};function WS(){if(Qh.current=!0,!!tc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>nl.current=e.matches;e.addListener(t),t()}else nl.current=!1}const HS=[...xh,ye,Ht],QS=e=>HS.find(yh(e)),sp=new WeakMap;function GS(e,t,i){for(const n in t){const s=t[n],r=i[n];if(Se(s))e.addValue(n,s);else if(Se(r))e.addValue(n,os(s,{owner:e}));else if(r!==s)if(e.hasValue(n)){const o=e.getValue(n);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=e.getStaticValue(n);e.addValue(n,os(o!==void 0?o:s,{owner:e}))}}for(const n in i)t[n]===void 0&&e.removeValue(n);return t}const rp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class XS{scrapeMotionValuesFromProps(t,i,n){return{}}constructor({parent:t,props:i,presenceContext:n,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=bc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=dt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,K.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=i.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=i,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=so(i),this.isVariantNode=km(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(i,{},this);for(const v in p){const y=p[v];l[v]!==void 0&&Se(y)&&y.set(l[v],!1)}}mount(t){this.current=t,sp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),Qh.current||WS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:nl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){sp.delete(this.current),this.projection&&this.projection.unmount(),Wt(this.notifyUpdate),Wt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const n=Si.has(t),s=i.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&K.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),r=i.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{s(),r(),o&&o(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in tn){const i=tn[t];if(!i)continue;const{isEnabled:n,Feature:s}=i;if(!this.features[t]&&s&&n(this.props)&&(this.features[t]=new s(this)),this.features[t]){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):se()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<rp.length;n++){const s=rp[n];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=t[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=GS(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const n=this.values.get(t);i!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&i!==void 0&&(n=os(i===null?void 0:i,{owner:this}),this.addValue(t,n)),n}readValue(t,i){var n;let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(gh(s)||ah(s))?s=parseFloat(s):!QS(s)&&Ht.test(i)&&(s=fh(t,i)),this.setBaseTarget(t,Se(s)?s.get():s)),Se(s)?s.get():s}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var i;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const o=lc(this.props,n,(i=this.presenceContext)===null||i===void 0?void 0:i.custom);o&&(s=o[t])}if(n&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!Se(r)?r:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new Tc),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}}class Gh extends XS{constructor(){super(...arguments),this.KeyframeResolver=Sh}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:n}){delete i[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Se(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function YS(e){return window.getComputedStyle(e)}class ZS extends Gh{constructor(){super(...arguments),this.type="html",this.renderInstance=Im}readValueFromInstance(t,i){if(Si.has(i)){const n=kc(i);return n&&n.default||0}else{const n=YS(t),s=(Lm(i)?n.getPropertyValue(i):n[i])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:i}){return Vh(t,i)}build(t,i,n){dc(t,i,n.transformTemplate)}scrapeMotionValuesFromProps(t,i,n){return hc(t,i,n)}}class JS extends Gh{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=se}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(Si.has(i)){const n=kc(i);return n&&n.default||0}return i=Vm.has(i)?i:rc(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,n){return Om(t,i,n)}build(t,i,n){pc(t,i,this.isSVGTag,n.transformTemplate)}renderInstance(t,i,n,s){Fm(t,i,n,s)}mount(t){this.isSVGTag=mc(t.tagName),super.mount(t)}}const ew=(e,t)=>ac(e)?new JS(t):new ZS(t,{allowProjection:e!==b.Fragment}),tw=C0({...P1,...$S,...LS,...KS},ew),iw=Uy(tw);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xh=(...e)=>e.filter((t,i,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:s="",children:r,iconNode:o,...a},l)=>b.createElement("svg",{ref:l,...sw,width:t,height:t,stroke:e,strokeWidth:n?Number(i)*24/Number(t):i,className:Xh("lucide",s),...a},[...o.map(([c,u])=>b.createElement(c,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(e,t)=>{const i=b.forwardRef(({className:n,...s},r)=>b.createElement(rw,{ref:r,iconNode:t,className:Xh(`lucide-${nw(e)}`,n),...s}));return i.displayName=`${e}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=Xe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=Xe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=Xe("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=Xe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=Xe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=Xe("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=Xe("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=Xe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=Xe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=Xe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=Xe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=Xe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function pi({className:e="",variant:t,size:i,asChild:n,...s}){const r="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-magno-500 disabled:opacity-50 disabled:pointer-events-none",o={sm:"h-8 px-3",md:"h-9 px-4",lg:"h-10 px-6"},a={default:"bg-magno-600 text-white hover:bg-magno-700",outline:"border border-slate-300 bg-white hover:bg-slate-50",ghost:"bg-transparent hover:bg-slate-100"},l=[r,o[i]||o.md,a[t]||a.default,e].filter(Boolean).join(" ");return g.jsx("button",{className:l,...s})}function vw({className:e="",value:t=0,...i}){return g.jsx("div",{className:`w-full h-2 bg-slate-200 rounded ${e}`,...i,children:g.jsx("div",{style:{width:`${t}%`},className:"h-full bg-magenta-600 rounded"})})}function xn({children:e,...t}){return g.jsx(iw.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.25},...t,children:e})}function ys({className:e="",...t}){return g.jsx("div",{className:`rounded-xl border border-slate-200 bg-white shadow-sm ${e}`,...t})}function xs({className:e="",...t}){return g.jsx("div",{className:`p-4 border-b border-slate-200 ${e}`,...t})}function Ss({className:e="",...t}){return g.jsx("div",{className:`p-4 ${e}`,...t})}function qt({className:e="",...t}){return g.jsx("input",{className:`w-full h-9 px-3 rounded-md border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-magno-500 ${e}`,...t})}function yw({className:e="",...t}){return g.jsx("textarea",{className:`w-full min-h-[96px] px-3 py-2 rounded-md border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-magno-500 ${e}`,...t})}function li({className:e="",...t}){return g.jsx("label",{className:`text-sm text-slate-700 ${e}`,...t})}function ws({icon:e,title:t,subtitle:i}){return g.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[g.jsx("div",{className:"p-2 rounded-2xl bg-gray-100",children:e&&g.jsx(e,{className:"h-5 w-5"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-xl font-semibold leading-tight",children:t}),i&&g.jsx("p",{className:"text-sm text-gray-500 mt-1",children:i})]})]})}function xw({service:e,setService:t,bizGoal:i,setBizGoal:n,userGoal:s,setUserGoal:r,notes:o,setNotes:a}){return g.jsxs(ys,{className:"shadow-sm rounded-2xl",children:[g.jsx(xs,{children:g.jsx(ws,{icon:hw,title:"1) Alineación de objetivos",subtitle:"Define el marco antes de idear: negocio + usuario + servicio"})}),g.jsxs(Ss,{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsxs("div",{children:[g.jsx(li,{children:"Servicio / producto"}),g.jsx("div",{className:"flex gap-2 mt-1",children:g.jsx(qt,{placeholder:"Ej. Pago a terceros",value:e,onChange:l=>t(l.target.value)})})]}),g.jsxs("div",{children:[g.jsx(li,{children:"Objetivo de negocio"}),g.jsx(qt,{placeholder:"Ej. Reducir costos de atención",value:i,onChange:l=>n(l.target.value),className:"mt-1"})]}),g.jsxs("div",{children:[g.jsx(li,{children:"Objetivo de usuario"}),g.jsx(qt,{placeholder:"Ej. Completar pagos masivos sin errores",value:s,onChange:l=>r(l.target.value),className:"mt-1"})]}),g.jsxs("div",{children:[g.jsx(li,{children:"Notas / contexto"}),g.jsx(yw,{placeholder:"Riesgos, dependencias, hipótesis…",value:o,onChange:l=>a(l.target.value),className:"mt-1"})]})]})]})}function Sw({tasks:e,addTask:t,removeTask:i,updateTask:n}){return g.jsxs(ys,{className:"shadow-sm rounded-2xl",children:[g.jsx(xs,{children:g.jsx(ws,{icon:dw,title:"2) Tareas/flujo clave",subtitle:"Enumera 2–3 micro journeys críticos y dónde hay fricción"})}),g.jsx(Ss,{children:g.jsxs("div",{className:"space-y-3",children:[e.map((s,r)=>g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(qt,{placeholder:`Tarea ${r+1} (ej. Cargar archivo de nómina)`,value:s,onChange:o=>n(r,o.target.value)}),e.length>1&&g.jsx(pi,{variant:"ghost",size:"icon",onClick:()=>i(r),className:"shrink-0",children:g.jsx(gw,{className:"h-4 w-4"})})]},r)),g.jsxs(pi,{onClick:t,variant:"secondary",className:"gap-2",children:[g.jsx(fw,{className:"h-4 w-4"})," Añadir tarea"]})]})})]})}function ww({className:e="",checked:t,onCheckedChange:i,...n}){return g.jsx("input",{type:"checkbox",className:`h-4 w-4 rounded mt-1 border-slate-300 text-magno-600 focus:ring-magno-500 ${e}`,checked:t,onChange:s=>i==null?void 0:i(s.target.checked),...n})}function Dc({className:e="",...t}){return g.jsx("span",{className:`inline-flex items-center px-2 py-0.5 text-xs rounded border bg-[#e7e7e7] text-slate-700 ${e}`,...t})}function Tw({search:e,setSearch:t,categories:i,filterCats:n,toggleCat:s,filteredKPIs:r,selected:o,toggleKPI:a,setInfo:l,resolveKpiUrl:c}){return g.jsxs(ys,{className:"shadow-sm rounded-2xl",children:[g.jsx(xs,{children:g.jsx(ws,{icon:pw,title:"3) Selección de KPIs",subtitle:"Marca los KPIs relevantes (relevancia, medibilidad y accionabilidad)"})}),g.jsxs(Ss,{children:[g.jsxs("div",{className:"gap-3 mb-4",children:[g.jsxs("div",{className:"flex items-center gap-2 flex-1 mb-4",children:[g.jsx(mw,{className:"h-4 w-4 text-gray-500"}),g.jsx(qt,{placeholder:"Buscar KPI por nombre o descripción…",value:e,onChange:u=>t(u.target.value)})]}),g.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:i.map(u=>g.jsx("button",{onClick:()=>s(u),className:`px-2 py-1 rounded-full text-xs border ${n.includes(u)?"bg-magno-600 text-white border-magno-600":"bg-white text-gray-700"}`,children:u},u))})]}),g.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-3",children:r.map(u=>g.jsx("label",{className:`border rounded-2xl p-4 cursor-pointer transition-shadow ${o[u.id]?"border-magno-600 shadow-md":"hover:shadow-sm"}`,children:g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(ww,{checked:!!o[u.id],onCheckedChange:()=>a(u.id)}),g.jsxs("div",{children:[g.jsxs("div",{className:"gap-2 mb-1",children:[g.jsxs("div",{className:"font-medium flex items-center gap-2",children:[u.title,u.url&&g.jsx("button",{type:"button",title:"Más info",onClick:d=>{d.stopPropagation(),l({open:!0,url:c(u.url),title:u.title,id:u.id})},className:"ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100",children:"?"})]}),g.jsx("div",{children:g.jsx(Dc,{variant:"outline",children:u.cat})})]}),g.jsx("p",{className:"text-sm text-gray-600",children:u.desc}),g.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:["Cómo se mide: ",u.how]})]})]})},u.id))}),Object.keys(o).length===0&&g.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Tip: empieza marcando 2–3 KPIs máximo para mantener el foco."})]})]})}function jw({selected:e,kpiCatalogWithUrl:t,updateSelected:i,setInfo:n,resolveKpiUrl:s}){return g.jsxs(ys,{className:"shadow-sm rounded-2xl",children:[g.jsx(xs,{children:g.jsx(ws,{icon:lw,title:"4) Baseline y meta",subtitle:"Define punto de partida y objetivo por KPI seleccionado"})}),g.jsxs(Ss,{className:"space-y-4",children:[Object.keys(e).length===0&&g.jsx("p",{className:"text-sm text-gray-500",children:"Primero selecciona KPIs en la pantalla anterior."}),Object.keys(e).map(r=>{const o=t.find(a=>a.id===r);return g.jsxs("div",{className:"border rounded-2xl p-4",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Dc,{variant:"outline",children:o.cat}),g.jsx("span",{className:"font-semibold",children:o.title}),o.url&&g.jsx("button",{type:"button",title:"Más info",onClick:()=>n({open:!0,url:s(o.url),title:o.title,id:o.id}),className:"ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100",children:"?"})]}),g.jsx("span",{className:"text-xs text-gray-500",children:o.how})]}),g.jsxs("div",{className:"grid md:grid-cols-3 gap-3 mt-2",children:[g.jsxs("div",{children:[g.jsx(li,{children:"Baseline"}),g.jsx(qt,{placeholder:"Ej. 82% / 2m 30s",value:e[r].baseline,onChange:a=>i(r,"baseline",a.target.value)})]}),g.jsxs("div",{children:[g.jsx(li,{children:"Meta"}),g.jsx(qt,{placeholder:"Ej. 92% / 1m 45s",value:e[r].target,onChange:a=>i(r,"target",a.target.value)})]}),g.jsxs("div",{children:[g.jsx(li,{children:"Liberación"}),g.jsx(qt,{placeholder:"Momento estimado para liberar (opcional)",value:e[r].timeframe||"",onChange:a=>i(r,"timeframe",a.target.value)})]})]})]},r)})]})]})}function Pw({className:e="",...t}){return g.jsx("hr",{className:`my-4 border-slate-200 ${e}`,...t})}function Ew({service:e,bizGoal:t,userGoal:i,notes:n,tasks:s,selected:r,kpiCatalogWithUrl:o,setInfo:a,resolveKpiUrl:l,copyMarkdown:c,resetAll:u}){return g.jsxs(ys,{className:"shadow-sm rounded-2xl",children:[g.jsx(xs,{children:g.jsx(ws,{icon:cw,title:"5) Resumen y confirmación",subtitle:"Todo listo para compartir y repetir en otro servicio"})}),g.jsxs(Ss,{children:[g.jsxs("div",{className:"grid md:[grid-template-columns:3fr_4fr] gap-6",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold mb-2",children:"Contexto"}),g.jsxs("div",{className:"space-y-2 text-sm",children:[g.jsxs("p",{children:[g.jsx("span",{className:"font-medium",children:"Servicio / producto:"})," ",e||g.jsx("i",{className:"text-gray-400",children:"—"})]}),g.jsxs("p",{children:[g.jsx("span",{className:"font-medium",children:"Objetivo de negocio:"})," ",g.jsx("br",{})," ",t||g.jsx("i",{className:"text-gray-400",children:"—"})]}),g.jsxs("p",{children:[g.jsx("span",{className:"font-medium",children:"Objetivo de usuario:"})," ",g.jsx("br",{})," ",i||g.jsx("i",{className:"text-gray-400",children:"—"})]}),n&&g.jsx("p",{className:"text-gray-500",children:n})]}),g.jsx(Pw,{className:"my-4"}),g.jsx("h4",{className:"font-semibold mb-2",children:"Tareas clave"}),g.jsx("ul",{className:"list-disc ml-5 text-sm space-y-1",children:s.filter(Boolean).map((d,p)=>g.jsx("li",{children:d},p))})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"font-semibold mb-2",children:"KPIs seleccionados"}),g.jsxs("div",{className:"space-y-3",children:[Object.keys(r).length===0&&g.jsx("p",{className:"text-sm text-gray-500",children:"No hay KPIs seleccionados."}),Object.keys(r).map(d=>{const p=o.find(y=>y.id===d),v=r[d];return g.jsxs("div",{className:"border rounded-2xl p-3",children:[g.jsxs("div",{className:"items-center justify-between gap-2",children:[g.jsx("div",{className:"mb-2",children:g.jsx(Dc,{variant:"outline",children:p.cat})}),g.jsxs("div",{className:"gap-2",children:[g.jsxs("div",{className:"font-medium flex items-center gap-2",children:[p.title,p.url&&g.jsx("button",{type:"button",title:"Más info",onClick:()=>a({open:!0,url:l(p.url),title:p.title,id:p.id}),className:"ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs text-gray-600 hover:bg-gray-100",children:"?"})]}),g.jsx("div",{className:"text-xs text-gray-500",children:p.desc})]})]}),g.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs mt-2",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-gray-500",children:"Baseline:"})," ",v.baseline||g.jsx("i",{children:"—"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-gray-500",children:"Meta:"})," ",v.target||g.jsx("i",{children:"—"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-gray-500",children:"Liberación:"})," ",v.timeframe||g.jsx("i",{children:"—"})]})]})]},d)})]})]})]}),g.jsxs("div",{className:"flex items-center gap-2 mt-6",children:[g.jsxs(pi,{onClick:c,className:"gap-2",children:[g.jsx(uw,{className:"h-4 w-4"})," Copiar resumen (Markdown)"]}),g.jsxs(pi,{variant:"secondary",onClick:u,className:"gap-2",children:[g.jsx(Yh,{className:"h-4 w-4"})," Nuevo servicio"]})]})]})]})}const Cw={adoption:{title:"Tasa de adopción",subtitle:"Mide la velocidad y amplitud de uso de nuevas funcionalidades o productos.",html:`
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
  `}},Zh="kpi_runs_index",Lc="kpi_run:";function Jh(e){try{return localStorage.getItem(e)}catch{return null}}function Rc(e,t){try{return localStorage.setItem(e,t),!0}catch{return!1}}function eg(){const e=Jh(Zh);if(!e)return[];try{return JSON.parse(e)||[]}catch{return[]}}function tg(e){return Rc(Zh,JSON.stringify(e||[]))}function op(e={}){const t=(Date.now().toString(36)+Math.random().toString(36).slice(2,8)).toLowerCase(),i=new Date().toISOString(),n=eg();n.unshift({id:t,title:e.title||"(sin nombre)",status:"draft",updatedAt:i}),tg(n);const s={id:t,step:0,service:"",bizGoal:"",userGoal:"",notes:"",tasks:["",""],selected:{},status:"draft",updatedAt:i};return Rc(Lc+t,JSON.stringify(s)),t}function Ho(e,t,i={}){if(!e)return{ok:!1,error:"missing id"};const n=new Date().toISOString(),s={...t,id:e,updatedAt:n};if(!Rc(Lc+e,JSON.stringify(s)))return{ok:!1,error:"localStorage write failed"};const o=eg(),a=o.findIndex(c=>c.id===e),l={id:e,title:i.title||(t==null?void 0:t.service)||"(sin nombre)",status:(t==null?void 0:t.status)||"draft",updatedAt:n};return a>=0?o.splice(a,1,l):o.unshift(l),tg(o),{ok:!0}}function kw(e){if(!e)return null;const t=Jh(Lc+e);if(!t)return null;try{return JSON.parse(t)}catch{return null}}const Qo={},bw=(e=new Date)=>`Q${Math.floor(e.getMonth()/3)+1}`,Aw=(e,t,i)=>{const n=(i||"").toLowerCase();return e.filter(s=>t.includes(s.cat)&&(s.title.toLowerCase().includes(n)||s.desc.toLowerCase().includes(n)||s.how.toLowerCase().includes(n)))},Nw=(e,t,i,n,s,r)=>{const o=Object.keys(e).map(a=>({id:a,...t.find(l=>l.id===a),...e[a]}));return{servicio:i,objetivo_negocio:n,objetivo_usuario:s,tareas_clave:(r||[]).filter(Boolean),kpis:o}},Mw=[{id:"adoption",cat:"Uso & Adopción",title:"Tasa de adopción",how:"% de empresas que usan una funcionalidad en X días desde lanzamiento.",desc:"¿Se empieza a usar lo nuevo?"},{id:"active",cat:"Uso & Adopción",title:"Usuarios activos (DAU/MAU)",how:"Usuarios únicos diarios/mensuales que iniciaron sesión o realizaron acciones.",desc:"¿Hay hábito?"},{id:"activation",cat:"Uso & Adopción",title:"Tasa de activación",how:"% que completan la primera operación clave tras registrarse.",desc:"¿Llegan al momento 'aha'?"},{id:"featureUsage",cat:"Uso & Adopción",title:"Uso por funcionalidad",how:"% de sesiones con uso de la función (ej. pagos masivos).",desc:"¿Qué tanto se usa cada módulo?"},{id:"timeOnTask",cat:"Eficiencia & Fricción",title:"Tiempo en tarea",how:"Promedio (p50/p90) desde inicio a confirmación.",desc:"¿Qué tan rápido ocurre?"},{id:"success",cat:"Eficiencia & Fricción",title:"Tasa de éxito",how:"% de operaciones completadas sin error (sin necesidad de reintentos).",desc:"¿Se logra sin trabas?"},{id:"steps",cat:"Eficiencia & Fricción",title:"Pasos por tarea",how:"Promedio de pantallas/clics para completar.",desc:"¿Es compacto?"},{id:"abandon",cat:"Eficiencia & Fricción",title:"Tasa de abandono",how:"% que inician y no finalizan el flujo.",desc:"¿Dónde se caen?"},{id:"userError",cat:"Eficiencia & Fricción",title:"Errores de usuario/flujo",how:"Errores percibidos (ej. validación fallida) por cada 1.000 operaciones.",desc:"¿Qué rompe la tarea para el cliente?"},{id:"latency",cat:"Eficiencia & Fricción",title:"Tiempo de respuesta",how:"ms de latencia en endpoints/pantallas clave.",desc:"¿Carga rápido?"},{id:"interruption",cat:"Eficiencia & Fricción",title:"Transacciones interrumpidas",how:"% de operaciones que no concluyen por timeout o caída técnica.",desc:"¿Qué tan confiable es?"},{id:"nps",cat:"Satisfacción & Experiencia",title:"NPS",how:"% promotores − % detractores tras usar el módulo.",desc:"¿Nos recomendarían?"},{id:"csat",cat:"Satisfacción & Experiencia",title:"CSAT",how:"Promedio de satisfacción 1–5 al finalizar tarea.",desc:"¿Quedaron conformes?"},{id:"sus",cat:"Satisfacción & Experiencia",title:"SUS",how:"Escala SUS 0–100 post-uso.",desc:"¿Qué tan usable es?"},{id:"conversion",cat:"Conversión & Negocio",title:"Tasa de conversión",how:"% de usuarios que completan una acción objetivo.",desc:"¿Cuántos completan?"},{id:"value",cat:"Conversión & Negocio",title:"Valor por usuario",how:"ARPU u otra medida de valor.",desc:"¿Cuánto valor produce?"},{id:"cross",cat:"Conversión & Negocio",title:"Cross/Up-sell",how:"% de clientes que adoptan módulos adicionales.",desc:"¿Se expande el uso?"},{id:"retention",cat:"Conversión & Negocio",title:"Retención",how:"% de clientes que siguen activos.",desc:"¿Se quedan?"},{id:"selfservice",cat:"Autoservicio & Costos",title:"Autoservicio",how:"% de tareas resueltas sin soporte humano.",desc:"¿Cuánto se auto-resuelve?"},{id:"digitalVsBranch",cat:"Autoservicio & Costos",title:"Digital vs Sucursal",how:"% de operaciones digitales vs presenciales.",desc:"¿Cuánto migra a digital?"},{id:"supportReduction",cat:"Autoservicio & Costos",title:"Reducción de soporte",how:"Variación de tickets por 1.000 usuarios.",desc:"¿Baja el soporte?"},{id:"helpUsage",cat:"Seguridad & Cumplimiento",title:"Uso de ayuda",how:"% de sesiones con vistas a ayuda.",desc:"¿Necesitan ayuda?"},{id:"failedLogin",cat:"Seguridad & Cumplimiento",title:"Login fallido",how:"Intentos fallidos por usuario.",desc:"¿Problemas de acceso?"},{id:"twoFa",cat:"Seguridad & Cumplimiento",title:"2FA",how:"% de sesiones con 2FA.",desc:"¿Aumenta la seguridad?"},{id:"kyc",cat:"Seguridad & Cumplimiento",title:"KYC",how:"% de KYC completado.",desc:"¿Cumplimiento?"},{id:"fraud",cat:"Seguridad & Cumplimiento",title:"Fraude",how:"Intentos/bloqueos por fraude.",desc:"¿Riesgo controlado?"},{id:"onboarding",cat:"Salud técnica",title:"Onboarding técnico",how:"Tiempo/esfuerzo de alta técnica.",desc:"¿Cuán complejo es?"},{id:"uptime",cat:"Salud técnica",title:"Uptime",how:"% de disponibilidad.",desc:"¿Disponibilidad estable?"},{id:"errors5xx",cat:"Salud técnica",title:"Errores 5xx",how:"Errores 5xx por 10k req.",desc:"¿Errores del servidor?"},{id:"mttr",cat:"Salud técnica",title:"MTTR",how:"Tiempo medio de recuperación.",desc:"¿Qué tan rápido reponemos?"}],Dw={adoption:"/kpi/adoption",active:"/kpi/active",activation:"/kpi/activation",featureUsage:"/kpi/featureUsage",timeOnTask:"/kpi/timeOnTask",success:"/kpi/success",steps:"/kpi/steps",abandon:"/kpi/abandon",userError:"/kpi/userError",latency:"/kpi/latency",interruption:"/kpi/interruption",nps:"/kpi/nps",csat:"/kpi/csat",sus:"/kpi/sus",ces:"/kpi/ces",complaints:"/kpi/complaints",conversion:"/kpi/conversion",value:"/kpi/value",cross:"/kpi/cross",retention:"/kpi/retention",selfservice:"/kpi/selfservice",digitalVsBranch:"/kpi/digitalVsBranch",supportReduction:"/kpi/supportReduction",helpUsage:"/kpi/helpUsage",failedLogin:"/kpi/failedLogin",twoFa:"/kpi/twoFa",kyc:"/kpi/kyc",fraud:"/kpi/fraud",onboarding:"/kpi/onboarding",uptime:"/kpi/uptime",errors5xx:"/kpi/errors5xx",mttr:"/kpi/mttr"},Sn=Mw.map(e=>({...e,url:Dw[e.id]||""})),Go=["Uso & Adopción","Eficiencia & Fricción","Satisfacción & Experiencia","Conversión & Negocio","Autoservicio & Costos","Seguridad & Cumplimiento","Salud técnica"];async function Lw(e){try{const t=new TextEncoder,i=await crypto.subtle.digest("SHA-256",t.encode(e)),n=new Uint8Array(i);let s="";for(let r=0;r<n.byteLength;r++)s+=String.fromCharCode(n[r]);return btoa(s)}catch{return""}}function Rw(){const[e,t]=W.useState(0),[i,n]=W.useState(null),[s,r]=W.useState(""),[o,a]=W.useState(""),[l,c]=W.useState(""),[u,d]=W.useState(""),[p,v]=W.useState(["",""]),[y,x]=W.useState(""),[j,m]=W.useState(Go),[f,h]=W.useState({}),[S,w]=W.useState(null),[T,C]=W.useState({open:!1,url:"",title:"",id:""}),P=(e+1)/5*100,z=Aw(Sn,j,y),M=(Qo==null?void 0:Qo.VITE_KPI_BASE_URL)||"",Z=N=>N?/^https?:\/\//i.test(N)?N:`${M}${N}`:"",Te=W.useMemo(()=>Sn.find(N=>N.id===T.id),[T.id]),de=W.useMemo(()=>{if(!Te)return null;const N=Cw[T.id];return N?{title:N.title||Te.title,subtitle:N.subtitle||Te.cat,html:N.html||`<p>${Te.desc}</p><p style="color:#6b7280;font-size:12px;">Cómo se mide: ${Te.how}</p>`}:null},[T.id,Te]),Zt=N=>{m(O=>O.includes(N)?O.filter(V=>V!==N):[...O,N])},Ts=N=>{h(O=>{const V={...O};return V[N]?delete V[N]:V[N]={baseline:"",target:"",timeframe:bw()},V})},wi=(N,O,V)=>{h(ne=>({...ne,[N]:{...ne[N],[O]:V}}))},te=()=>v(N=>[...N,""]),k=N=>v(O=>O.filter((V,ne)=>ne!==N)),L=(N,O)=>v(V=>V.map((ne,js)=>js===N?O:ne)),R=()=>{t(0),r(""),a(""),c(""),d(""),v(["",""]),x(""),m(Go),h({})},U=()=>{if(typeof window>"u"){R();return}const O=op({title:s||"(sin nombre)"});n(O);const V=new URL(window.location.href);V.searchParams.set("run",O),window.history.replaceState({},"",V.toString()),R()},ie=()=>Nw(f,Sn,s,o,l,p),Ti=async()=>{const N=ie(),O=[`# KPI Sheet – ${N.servicio||"(servicio)"}`,`
**Objetivo de negocio:** ${N.objetivo_negocio||"-"}`,`
**Objetivo de usuario:** ${N.objetivo_usuario||"-"}`,`
**Tareas clave:**`,...N.tareas_clave.map(V=>`- ${V}`),`
## KPIs seleccionados`,...N.kpis.map(V=>`- **${V.title}** (${V.cat}) – ${V.desc}
  - Cómo se mide: ${V.how}
  - Baseline: ${V.baseline||""}
  - Meta: ${V.target||""}
  - Liberación: ${V.timeframe||""}`)].join(`
`);try{await navigator.clipboard.writeText(O)}catch{}alert("Resumen copiado en Markdown.")},pt=async()=>{const N=ie(),O=await Lw(JSON.stringify(N)),V={id:i,...N,payloadHash:O,timestamp:new Date().toISOString()};try{const ft="kpi_wizard_runs",Ps=JSON.parse(localStorage.getItem(ft)||"[]");Ps.push(V),localStorage.setItem(ft,JSON.stringify(Ps))}catch{}const ne="https://script.google.com/macros/s/AKfycbypACjMpvCiMwdofKZFCO0tu1DyBwZpU9OvsrbXpUamE3BzmRAfEcAU2A63taJvk4Va/exec",js=()=>{try{const ft=De();Ho(i,{...ft,status:"sent"},{title:s||"(sin nombre)"})}catch{}w?(w("OK. KPIs enviados"),setTimeout(()=>{W.startTransition?W.startTransition(()=>U()):U(),w(null)},0)):W.startTransition?W.startTransition(()=>U()):U()};try{const ft=JSON.stringify(V);if(navigator.sendBeacon){const Es=(()=>{try{const zc=new URL(ne,window.location.href);return zc.searchParams.set("ua",navigator.userAgent||""),zc.toString()}catch{return ne}})();if(navigator.sendBeacon(Es,new Blob([ft],{type:"text/plain;charset=UTF-8"}))){js();return}}const Ps=(()=>{try{const Es=new URL(ne,window.location.href);return Es.searchParams.set("ua",navigator.userAgent||""),Es.toString()}catch{return ne}})();await fetch(Ps,{method:"POST",mode:"no-cors",body:ft}),js()}catch{w&&(w("Error al enviar. Revisa la consola."),setTimeout(()=>w(null),4e3))}},cn=()=>g.jsx("div",{className:"flex items-center gap-2 mb-6",children:[0,1,2,3,4].map(N=>g.jsx("div",{className:`h-2 flex-1 rounded-full ${N<=e?"bg-magno-600":"bg-gray-200"}`},N))}),De=W.useCallback(()=>({id:i,step:e,service:s,bizGoal:o,userGoal:l,notes:u,tasks:p,selected:f,status:"draft"}),[i,e,s,o,l,u,p,f]);W.useEffect(()=>{if(typeof window>"u")return;const N=new URL(window.location.href),O=N.searchParams.get("run");if(O){const ne=kw(O);if(ne){n(O),t(ne.step??0),r(ne.service??""),a(ne.bizGoal??""),c(ne.userGoal??""),d(ne.notes??""),v(Array.isArray(ne.tasks)?ne.tasks:["",""]),h(ne.selected||{});return}}const V=op({title:s||"(sin nombre)"});n(V),N.searchParams.set("run",V),window.history.replaceState({},"",N.toString())},[]);const Le=W.useRef({timer:null,lastHash:""});return W.useEffect(()=>{if(!i)return;const N=De(),O=JSON.stringify(N);if(Le.current.lastHash!==O)return Le.current.timer&&clearTimeout(Le.current.timer),Le.current.timer=setTimeout(()=>{try{Ho(i,N,{title:s||"(sin nombre)"}),Le.current.lastHash=O}catch{}},1500),()=>{Le.current.timer&&clearTimeout(Le.current.timer)}},[i,s,o,l,u,p,f,e,De]),W.useEffect(()=>{if(typeof window>"u")return;const N=()=>{if(i)try{const V=De();Ho(i,V,{title:s||"(sin nombre)"}),Le.current.lastHash=JSON.stringify(V)}catch{}},O=()=>{document.visibilityState==="hidden"&&N()};return window.addEventListener("visibilitychange",O),window.addEventListener("pagehide",N),window.addEventListener("beforeunload",N),()=>{window.removeEventListener("visibilitychange",O),window.removeEventListener("pagehide",N),window.removeEventListener("beforeunload",N)}},[i,De,s]),g.jsxs("div",{className:"max-w-6xl mx-auto p-6",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Mentoría KPI – Wizard"}),g.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-500",children:[g.jsxs("span",{children:["Pantalla ",e+1," de 5"]}),g.jsx("div",{className:"w-40",children:g.jsx(vw,{value:P})}),g.jsxs(pi,{variant:"outline",size:"sm",className:"ml-2 gap-2",onClick:()=>{window.confirm("¿Resetear el flujo actual? Se perderán los cambios no enviados.")&&U()},title:"Resetear y empezar desde cero",children:[g.jsx(Yh,{className:"h-4 w-4"})," Resetear"]})]})]}),g.jsx(cn,{}),g.jsxs(Ly,{mode:"wait",children:[e===0&&g.jsx(xn,{children:g.jsx(xw,{service:s,setService:r,bizGoal:o,setBizGoal:a,userGoal:l,setUserGoal:c,notes:u,setNotes:d})},"s1"),e===1&&g.jsx(xn,{children:g.jsx(Sw,{tasks:p,addTask:te,removeTask:k,updateTask:L})},"s2"),e===2&&g.jsx(xn,{children:g.jsx(Tw,{search:y,setSearch:x,categories:Go,filterCats:j,toggleCat:Zt,filteredKPIs:z,selected:f,toggleKPI:Ts,setInfo:C,resolveKpiUrl:Z})},"s3"),e===3&&g.jsx(xn,{children:g.jsx(jw,{selected:f,kpiCatalogWithUrl:Sn,updateSelected:wi,setInfo:C,resolveKpiUrl:Z})},"s4"),e===4&&g.jsx(xn,{children:g.jsx(Ew,{service:s,bizGoal:o,userGoal:l,notes:u,tasks:p,selected:f,kpiCatalogWithUrl:Sn,setInfo:C,resolveKpiUrl:Z,copyMarkdown:Ti,resetAll:R})},"s5")]}),g.jsxs("div",{className:"flex justify-between mt-6",children:[g.jsxs(pi,{variant:"ghost",disabled:e===0,onClick:()=>t(N=>Math.max(0,N-1)),className:"gap-2",children:[g.jsx(ow,{className:"h-4 w-4"})," Anterior"]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs("span",{className:"text-xs text-gray-400",children:[Object.keys(f).length," KPIs"]}),g.jsxs(pi,{onClick:()=>e===4?pt():t(N=>Math.min(4,N+1)),className:"gap-2",children:[e===4?"Finalizar":"Siguiente"," ",g.jsx(aw,{className:"h-4 w-4"})]})]})]}),T.open&&g.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",onClick:()=>{C({open:!1,url:"",title:"",id:""})},children:g.jsxs("div",{className:"bg-white rounded-xl shadow-xl w-full max-w-3xl h-[75vh] flex flex-col",onClick:N=>N.stopPropagation(),children:[g.jsxs("div",{className:"flex items-center justify-between p-3 border-b",children:[g.jsxs("div",{className:"font-semibold text-sm",children:["Más info: ",(de==null?void 0:de.title)||T.title]}),g.jsx("div",{className:"flex items-center gap-2",children:g.jsx("button",{className:"w-7 h-7 rounded-full border text-sm",onClick:()=>{C({open:!1,url:"",title:"",id:""})},children:"×"})})]}),g.jsx("div",{className:"flex-1 min-h-0",children:de?g.jsxs("div",{className:"p-4 overflow-y-auto h-full",children:[(de==null?void 0:de.subtitle)&&g.jsx("div",{className:"text-xs text-gray-500 mb-2",children:de.subtitle}),g.jsx("div",{className:"prose max-w-none text-sm",dangerouslySetInnerHTML:{__html:de.html}})]}):T.url?g.jsx("iframe",{src:T.url,className:"w-full h-full rounded-b-xl",title:"Más info"}):g.jsx("div",{className:"p-4 text-sm text-gray-500",children:"No hay URL disponible para este KPI."})})]})}),S&&g.jsx("div",{className:"fixed bottom-4 right-4 z-50 rounded-xl bg-black/90 text-white px-4 py-2 shadow-lg",children:S})]})}function zw(){return g.jsxs("div",{className:"min-h-full",children:[g.jsx("header",{className:"border-b bg-white",children:g.jsx("div",{className:"max-w-6xl mx-auto px-4 py-3",children:g.jsx("h1",{className:"text-xl font-semibold",children:"KPIs"})})}),g.jsx("main",{className:"max-w-6xl mx-auto px-4 py-6",children:g.jsx(Rw,{})})]})}Sm(document.getElementById("root")).render(g.jsx(W.StrictMode,{children:g.jsx(zw,{})}));
