(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function c_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ih={exports:{}},ia={},rh={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function L0(){if(Cm)return gt;Cm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=m&&N[m]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,te,Be){this.props=N,this.context=te,this.refs=T,this.updater=Be||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,te){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,te,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function I(N,te,Be){this.props=N,this.context=te,this.refs=T,this.updater=Be||y}var P=I.prototype=new x;P.constructor=I,M(P,S.prototype),P.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,B={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function j(N,te,Be){var ke,Z={},pe=null,de=null;if(te!=null)for(ke in te.ref!==void 0&&(de=te.ref),te.key!==void 0&&(pe=""+te.key),te)k.call(te,ke)&&!U.hasOwnProperty(ke)&&(Z[ke]=te[ke]);var Re=arguments.length-2;if(Re===1)Z.children=Be;else if(1<Re){for(var Le=Array(Re),Ze=0;Ze<Re;Ze++)Le[Ze]=arguments[Ze+2];Z.children=Le}if(N&&N.defaultProps)for(ke in Re=N.defaultProps,Re)Z[ke]===void 0&&(Z[ke]=Re[ke]);return{$$typeof:o,type:N,key:pe,ref:de,props:Z,_owner:B.current}}function C(N,te){return{$$typeof:o,type:N.type,key:te,ref:N.ref,props:N.props,_owner:N._owner}}function b(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function F(N){var te={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Be){return te[Be]})}var le=/\/+/g;function ne(N,te){return typeof N=="object"&&N!==null&&N.key!=null?F(""+N.key):te.toString(36)}function ae(N,te,Be,ke,Z){var pe=typeof N;(pe==="undefined"||pe==="boolean")&&(N=null);var de=!1;if(N===null)de=!0;else switch(pe){case"string":case"number":de=!0;break;case"object":switch(N.$$typeof){case o:case e:de=!0}}if(de)return de=N,Z=Z(de),N=ke===""?"."+ne(de,0):ke,R(Z)?(Be="",N!=null&&(Be=N.replace(le,"$&/")+"/"),ae(Z,te,Be,"",function(Ze){return Ze})):Z!=null&&(b(Z)&&(Z=C(Z,Be+(!Z.key||de&&de.key===Z.key?"":(""+Z.key).replace(le,"$&/")+"/")+N)),te.push(Z)),1;if(de=0,ke=ke===""?".":ke+":",R(N))for(var Re=0;Re<N.length;Re++){pe=N[Re];var Le=ke+ne(pe,Re);de+=ae(pe,te,Be,Le,Z)}else if(Le=_(N),typeof Le=="function")for(N=Le.call(N),Re=0;!(pe=N.next()).done;)pe=pe.value,Le=ke+ne(pe,Re++),de+=ae(pe,te,Be,Le,Z);else if(pe==="object")throw te=String(N),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return de}function he(N,te,Be){if(N==null)return N;var ke=[],Z=0;return ae(N,ke,"","",function(pe){return te.call(Be,pe,Z++)}),ke}function se(N){if(N._status===-1){var te=N._result;te=te(),te.then(function(Be){(N._status===0||N._status===-1)&&(N._status=1,N._result=Be)},function(Be){(N._status===0||N._status===-1)&&(N._status=2,N._result=Be)}),N._status===-1&&(N._status=0,N._result=te)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},H={transition:null},oe={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:H,ReactCurrentOwner:B};function ie(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:he,forEach:function(N,te,Be){he(N,function(){te.apply(this,arguments)},Be)},count:function(N){var te=0;return he(N,function(){te++}),te},toArray:function(N){return he(N,function(te){return te})||[]},only:function(N){if(!b(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},gt.Component=S,gt.Fragment=t,gt.Profiler=s,gt.PureComponent=I,gt.StrictMode=i,gt.Suspense=f,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,gt.act=ie,gt.cloneElement=function(N,te,Be){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ke=M({},N.props),Z=N.key,pe=N.ref,de=N._owner;if(te!=null){if(te.ref!==void 0&&(pe=te.ref,de=B.current),te.key!==void 0&&(Z=""+te.key),N.type&&N.type.defaultProps)var Re=N.type.defaultProps;for(Le in te)k.call(te,Le)&&!U.hasOwnProperty(Le)&&(ke[Le]=te[Le]===void 0&&Re!==void 0?Re[Le]:te[Le])}var Le=arguments.length-2;if(Le===1)ke.children=Be;else if(1<Le){Re=Array(Le);for(var Ze=0;Ze<Le;Ze++)Re[Ze]=arguments[Ze+2];ke.children=Re}return{$$typeof:o,type:N.type,key:Z,ref:pe,props:ke,_owner:de}},gt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},gt.createElement=j,gt.createFactory=function(N){var te=j.bind(null,N);return te.type=N,te},gt.createRef=function(){return{current:null}},gt.forwardRef=function(N){return{$$typeof:u,render:N}},gt.isValidElement=b,gt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:se}},gt.memo=function(N,te){return{$$typeof:d,type:N,compare:te===void 0?null:te}},gt.startTransition=function(N){var te=H.transition;H.transition={};try{N()}finally{H.transition=te}},gt.unstable_act=ie,gt.useCallback=function(N,te){return ue.current.useCallback(N,te)},gt.useContext=function(N){return ue.current.useContext(N)},gt.useDebugValue=function(){},gt.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},gt.useEffect=function(N,te){return ue.current.useEffect(N,te)},gt.useId=function(){return ue.current.useId()},gt.useImperativeHandle=function(N,te,Be){return ue.current.useImperativeHandle(N,te,Be)},gt.useInsertionEffect=function(N,te){return ue.current.useInsertionEffect(N,te)},gt.useLayoutEffect=function(N,te){return ue.current.useLayoutEffect(N,te)},gt.useMemo=function(N,te){return ue.current.useMemo(N,te)},gt.useReducer=function(N,te,Be){return ue.current.useReducer(N,te,Be)},gt.useRef=function(N){return ue.current.useRef(N)},gt.useState=function(N){return ue.current.useState(N)},gt.useSyncExternalStore=function(N,te,Be){return ue.current.useSyncExternalStore(N,te,Be)},gt.useTransition=function(){return ue.current.useTransition()},gt.version="18.3.1",gt}var Pm;function kf(){return Pm||(Pm=1,rh.exports=L0()),rh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function D0(){if(Lm)return ia;Lm=1;var o=kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,d){var g,m={},_=null,y=null;d!==void 0&&(_=""+d),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(g in f)i.call(f,g)&&!a.hasOwnProperty(g)&&(m[g]=f[g]);if(u&&u.defaultProps)for(g in f=u.defaultProps,f)m[g]===void 0&&(m[g]=f[g]);return{$$typeof:e,type:u,key:_,ref:y,props:m,_owner:s.current}}return ia.Fragment=t,ia.jsx=c,ia.jsxs=c,ia}var Dm;function I0(){return Dm||(Dm=1,ih.exports=D0()),ih.exports}var ye=I0(),Mi=kf();const N0=c_(Mi);var Fl={},sh={exports:{}},zn={},oh={exports:{}},ah={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function U0(){return Im||(Im=1,(function(o){function e(H,oe){var ie=H.length;H.push(oe);e:for(;0<ie;){var N=ie-1>>>1,te=H[N];if(0<s(te,oe))H[N]=oe,H[ie]=te,ie=N;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var oe=H[0],ie=H.pop();if(ie!==oe){H[0]=ie;e:for(var N=0,te=H.length,Be=te>>>1;N<Be;){var ke=2*(N+1)-1,Z=H[ke],pe=ke+1,de=H[pe];if(0>s(Z,ie))pe<te&&0>s(de,Z)?(H[N]=de,H[pe]=ie,N=pe):(H[N]=Z,H[ke]=ie,N=ke);else if(pe<te&&0>s(de,ie))H[N]=de,H[pe]=ie,N=pe;else break e}}return oe}function s(H,oe){var ie=H.sortIndex-oe.sortIndex;return ie!==0?ie:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],d=[],g=1,m=null,_=3,y=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var oe=t(d);oe!==null;){if(oe.callback===null)i(d);else if(oe.startTime<=H)i(d),oe.sortIndex=oe.expirationTime,e(f,oe);else break;oe=t(d)}}function R(H){if(T=!1,P(H),!M)if(t(f)!==null)M=!0,se(k);else{var oe=t(d);oe!==null&&ue(R,oe.startTime-H)}}function k(H,oe){M=!1,T&&(T=!1,x(j),j=-1),y=!0;var ie=_;try{for(P(oe),m=t(f);m!==null&&(!(m.expirationTime>oe)||H&&!F());){var N=m.callback;if(typeof N=="function"){m.callback=null,_=m.priorityLevel;var te=N(m.expirationTime<=oe);oe=o.unstable_now(),typeof te=="function"?m.callback=te:m===t(f)&&i(f),P(oe)}else i(f);m=t(f)}if(m!==null)var Be=!0;else{var ke=t(d);ke!==null&&ue(R,ke.startTime-oe),Be=!1}return Be}finally{m=null,_=ie,y=!1}}var B=!1,U=null,j=-1,C=5,b=-1;function F(){return!(o.unstable_now()-b<C)}function le(){if(U!==null){var H=o.unstable_now();b=H;var oe=!0;try{oe=U(!0,H)}finally{oe?ne():(B=!1,U=null)}}else B=!1}var ne;if(typeof I=="function")ne=function(){I(le)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,he=ae.port2;ae.port1.onmessage=le,ne=function(){he.postMessage(null)}}else ne=function(){S(le,0)};function se(H){U=H,B||(B=!0,ne())}function ue(H,oe){j=S(function(){H(o.unstable_now())},oe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,se(k))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(H){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var ie=_;_=oe;try{return H()}finally{_=ie}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=_;_=H;try{return oe()}finally{_=ie}},o.unstable_scheduleCallback=function(H,oe,ie){var N=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?N+ie:N):ie=N,H){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ie+te,H={id:g++,callback:oe,priorityLevel:H,startTime:ie,expirationTime:te,sortIndex:-1},ie>N?(H.sortIndex=ie,e(d,H),t(f)===null&&H===t(d)&&(T?(x(j),j=-1):T=!0,ue(R,ie-N))):(H.sortIndex=te,e(f,H),M||y||(M=!0,se(k))),H},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(H){var oe=_;return function(){var ie=_;_=oe;try{return H.apply(this,arguments)}finally{_=ie}}}})(ah)),ah}var Nm;function F0(){return Nm||(Nm=1,oh.exports=U0()),oh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function O0(){if(Um)return zn;Um=1;var o=kf(),e=F0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},m={};function _(n){return f.call(m,n)?!0:f.call(g,n)?!1:d.test(n)?m[n]=!0:(g[n]=!0,!1)}function y(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,h){if(r===null||typeof r>"u"||y(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,l,h,p,v,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,I);S[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,I);S[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,I);S[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,h){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,h)&&(l=null),h||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,h=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var R=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),F=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),H=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,N;function te(n){if(N===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Be=!1;function ke(n,r){if(!n||Be)return"";Be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Q){var h=Q}Reflect.construct(n,[],r)}else{try{r.call()}catch(Q){h=Q}n.call(r.prototype)}else{try{throw Error()}catch(Q){h=Q}n()}}catch(Q){if(Q&&h&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),v=h.stack.split(`
`),E=p.length-1,D=v.length-1;1<=E&&0<=D&&p[E]!==v[D];)D--;for(;1<=E&&0<=D;E--,D--)if(p[E]!==v[D]){if(E!==1||D!==1)do if(E--,D--,0>D||p[E]!==v[D]){var z=`
`+p[E].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=E&&0<=D);break}}}finally{Be=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?te(n):""}function Z(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=ke(n.type,!1),n;case 11:return n=ke(n.type.render,!1),n;case 1:return n=ke(n.type,!0),n;default:return""}}function pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case B:return"Portal";case C:return"Profiler";case j:return"StrictMode";case ne:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case le:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:pe(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return pe(n(r))}catch{}}return null}function de(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(r);case 8:return r===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=Le(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,v.call(this,E)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function zt(n){n._valueTracker||(n._valueTracker=Ze(n))}function yt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=Le(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function O(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bt(n,r){var l=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Qe(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=Re(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function St(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function qe(n,r){St(n,r);var l=Re(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Fe(n,r.type,l):r.hasOwnProperty("defaultValue")&&Fe(n,r.type,Re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ot(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Fe(n,r,l){(r!=="number"||O(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var ct=Array.isArray;function Vt(n,r,l,h){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Re(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,h&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function Gt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(ct(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Re(l)}}function w(n,r){var l=Re(r.value),h=Re(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function q(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,Ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function we(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){Ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),ze[r]=ze[n]})});function Ee(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||ze.hasOwnProperty(n)&&ze[n]?(""+r).trim():r+"px"}function De(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Ee(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,p):n[l]=p}}var it=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,r){if(r){if(it[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function be(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Se=null,Ae=null,Ie=null;function xe(n){if(n=Vo(n)){if(typeof Se!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Za(r),Se(n.stateNode,n.type,r))}}function fe(n){Ae?Ie?Ie.push(n):Ie=[n]:Ae=n}function Ge(){if(Ae){var n=Ae,r=Ie;if(Ie=Ae=null,xe(n),r)for(n=0;n<r.length;n++)xe(r[n])}}function at(n,r){return n(r)}function Pt(){}var Mt=!1;function Qn(n,r,l){if(Mt)return n(r,l);Mt=!0;try{return at(n,r,l)}finally{Mt=!1,(Ae!==null||Ie!==null)&&(Pt(),Ge())}}function gn(n,r){var l=n.stateNode;if(l===null)return null;var h=Za(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var _s=!1;if(u)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){_s=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{_s=!1}function wo(n,r,l,h,p,v,E,D,z){var Q=Array.prototype.slice.call(arguments,3);try{r.apply(l,Q)}catch(ge){this.onError(ge)}}var lr=!1,Hr=null,Bi=!1,vs=null,xs={onError:function(n){lr=!0,Hr=n}};function Pa(n,r,l,h,p,v,E,D,z){lr=!1,Hr=null,wo.apply(xs,arguments)}function La(n,r,l,h,p,v,E,D,z){if(Pa.apply(this,arguments),lr){if(lr){var Q=Hr;lr=!1,Hr=null}else throw Error(t(198));Bi||(Bi=!0,vs=Q)}}function zi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Da(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ia(n){if(zi(n)!==n)throw Error(t(188))}function Ac(n){var r=n.alternate;if(!r){if(r=zi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Ia(p),n;if(v===h)return Ia(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=v;else{for(var E=!1,D=p.child;D;){if(D===l){E=!0,l=p,h=v;break}if(D===h){E=!0,h=p,l=v;break}D=D.sibling}if(!E){for(D=v.child;D;){if(D===l){E=!0,l=v,h=p;break}if(D===h){E=!0,h=v,l=p;break}D=D.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Na(n){return n=Ac(n),n!==null?Ua(n):null}function Ua(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ua(n);if(r!==null)return r;n=n.sibling}return null}var A=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,J=e.unstable_shouldYield,ee=e.unstable_requestPaint,G=e.unstable_now,Me=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,He=e.unstable_UserBlockingPriority,Ne=e.unstable_NormalPriority,nt=e.unstable_LowPriority,rt=e.unstable_IdlePriority,$e=null,st=null;function Ct(n){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot($e,n,void 0,(n.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Je,kt=Math.log,Lt=Math.LN2;function Je(n){return n>>>=0,n===0?32:31-(kt(n)/Lt|0)|0}var Nt=64,_t=4194304;function tn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function li(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,p=n.suspendedLanes,v=n.pingedLanes,E=l&268435455;if(E!==0){var D=E&~p;D!==0?h=tn(D):(v&=E,v!==0&&(h=tn(v)))}else E=l&~p,E!==0?h=tn(E):v!==0&&(h=tn(v));if(h===0)return 0;if(r!==0&&r!==h&&(r&p)===0&&(p=h&-h,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((h&4)!==0&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-Et(r),p=1<<l,h|=n[l],r&=~p;return h}function wn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vr(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var E=31-Et(v),D=1<<E,z=p[E];z===-1?((D&l)===0||(D&h)!==0)&&(p[E]=wn(D,r)):z<=r&&(n.expiredLanes|=D),v&=~D}}function Bt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function _n(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Zt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Et(r),n[r]=l}function vn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Et(l),v=1<<p;r[p]=0,h[p]=-1,n[p]=-1,l&=~v}}function Gr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-Et(l),p=1<<h;p&r|n[h]&r&&(n[h]|=r),l&=~p}}var vt=0;function ad(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ld,Rc,cd,ud,hd,bc=!1,Fa=[],cr=null,ur=null,hr=null,Ao=new Map,Ro=new Map,fr=[],J_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(n,r){switch(n){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Ao.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(r.pointerId)}}function bo(n,r,l,h,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},r!==null&&(r=Vo(r),r!==null&&Rc(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function ev(n,r,l,h,p){switch(r){case"focusin":return cr=bo(cr,n,r,l,h,p),!0;case"dragenter":return ur=bo(ur,n,r,l,h,p),!0;case"mouseover":return hr=bo(hr,n,r,l,h,p),!0;case"pointerover":var v=p.pointerId;return Ao.set(v,bo(Ao.get(v)||null,n,r,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,Ro.set(v,bo(Ro.get(v)||null,n,r,l,h,p)),!0}return!1}function dd(n){var r=Wr(n.target);if(r!==null){var l=zi(r);if(l!==null){if(r=l.tag,r===13){if(r=Da(l),r!==null){n.blockedOn=r,hd(n.priority,function(){cd(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Oa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Pc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);ut=h,l.target.dispatchEvent(h),ut=null}else return r=Vo(l),r!==null&&Rc(r),n.blockedOn=l,!1;r.shift()}return!0}function pd(n,r,l){Oa(n)&&l.delete(r)}function tv(){bc=!1,cr!==null&&Oa(cr)&&(cr=null),ur!==null&&Oa(ur)&&(ur=null),hr!==null&&Oa(hr)&&(hr=null),Ao.forEach(pd),Ro.forEach(pd)}function Co(n,r){n.blockedOn===r&&(n.blockedOn=null,bc||(bc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tv)))}function Po(n){function r(p){return Co(p,n)}if(0<Fa.length){Co(Fa[0],n);for(var l=1;l<Fa.length;l++){var h=Fa[l];h.blockedOn===n&&(h.blockedOn=null)}}for(cr!==null&&Co(cr,n),ur!==null&&Co(ur,n),hr!==null&&Co(hr,n),Ao.forEach(r),Ro.forEach(r),l=0;l<fr.length;l++)h=fr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<fr.length&&(l=fr[0],l.blockedOn===null);)dd(l),l.blockedOn===null&&fr.shift()}var ys=R.ReactCurrentBatchConfig,ka=!0;function nv(n,r,l,h){var p=vt,v=ys.transition;ys.transition=null;try{vt=1,Cc(n,r,l,h)}finally{vt=p,ys.transition=v}}function iv(n,r,l,h){var p=vt,v=ys.transition;ys.transition=null;try{vt=4,Cc(n,r,l,h)}finally{vt=p,ys.transition=v}}function Cc(n,r,l,h){if(ka){var p=Pc(n,r,l,h);if(p===null)Yc(n,r,h,Ba,l),fd(n,h);else if(ev(p,n,r,l,h))h.stopPropagation();else if(fd(n,h),r&4&&-1<J_.indexOf(n)){for(;p!==null;){var v=Vo(p);if(v!==null&&ld(v),v=Pc(n,r,l,h),v===null&&Yc(n,r,h,Ba,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else Yc(n,r,h,null,l)}}var Ba=null;function Pc(n,r,l,h){if(Ba=null,n=V(h),n=Wr(n),n!==null)if(r=zi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Da(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ba=n,null}function md(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Me()){case Ce:return 1;case He:return 4;case Ne:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var dr=null,Lc=null,za=null;function gd(){if(za)return za;var n,r=Lc,l=r.length,h,p="value"in dr?dr.value:dr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var E=l-n;for(h=1;h<=E&&r[l-h]===p[v-h];h++);return za=p.slice(n,1<h?1-h:void 0)}function Ha(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Va(){return!0}function _d(){return!1}function Xn(n){function r(l,h,p,v,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Va:_d,this.isPropagationStopped=_d,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),r}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=Xn(Ss),Lo=ie({},Ss,{view:0,detail:0}),rv=Xn(Lo),Ic,Nc,Do,Ga=ie({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Do&&(Do&&n.type==="mousemove"?(Ic=n.screenX-Do.screenX,Nc=n.screenY-Do.screenY):Nc=Ic=0,Do=n),Ic)},movementY:function(n){return"movementY"in n?n.movementY:Nc}}),vd=Xn(Ga),sv=ie({},Ga,{dataTransfer:0}),ov=Xn(sv),av=ie({},Lo,{relatedTarget:0}),Uc=Xn(av),lv=ie({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=Xn(lv),uv=ie({},Ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hv=Xn(uv),fv=ie({},Ss,{data:0}),xd=Xn(fv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=mv[n])?!!r[n]:!1}function Fc(){return gv}var _v=ie({},Lo,{key:function(n){if(n.key){var r=dv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ha(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(n){return n.type==="keypress"?Ha(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ha(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vv=Xn(_v),xv=ie({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=Xn(xv),yv=ie({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),Sv=Xn(yv),Mv=ie({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=Xn(Mv),Tv=ie({},Ga,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Xn(Tv),Av=[9,13,27,32],Oc=u&&"CompositionEvent"in window,Io=null;u&&"documentMode"in document&&(Io=document.documentMode);var Rv=u&&"TextEvent"in window&&!Io,Sd=u&&(!Oc||Io&&8<Io&&11>=Io),Md=" ",Ed=!1;function Td(n,r){switch(n){case"keyup":return Av.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function bv(n,r){switch(n){case"compositionend":return wd(r);case"keypress":return r.which!==32?null:(Ed=!0,Md);case"textInput":return n=r.data,n===Md&&Ed?null:n;default:return null}}function Cv(n,r){if(Ms)return n==="compositionend"||!Oc&&Td(n,r)?(n=gd(),za=Lc=dr=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Sd&&r.locale!=="ko"?null:r.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Pv[n.type]:r==="textarea"}function Rd(n,r,l,h){fe(h),r=Ka(r,"onChange"),0<r.length&&(l=new Dc("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var No=null,Uo=null;function Lv(n){Xd(n,0)}function Wa(n){var r=Rs(n);if(yt(r))return n}function Dv(n,r){if(n==="change")return r}var bd=!1;if(u){var kc;if(u){var Bc="oninput"in document;if(!Bc){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),Bc=typeof Cd.oninput=="function"}kc=Bc}else kc=!1;bd=kc&&(!document.documentMode||9<document.documentMode)}function Pd(){No&&(No.detachEvent("onpropertychange",Ld),Uo=No=null)}function Ld(n){if(n.propertyName==="value"&&Wa(Uo)){var r=[];Rd(r,Uo,n,V(n)),Qn(Lv,r)}}function Iv(n,r,l){n==="focusin"?(Pd(),No=r,Uo=l,No.attachEvent("onpropertychange",Ld)):n==="focusout"&&Pd()}function Nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wa(Uo)}function Uv(n,r){if(n==="click")return Wa(r)}function Fv(n,r){if(n==="input"||n==="change")return Wa(r)}function Ov(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ci=typeof Object.is=="function"?Object.is:Ov;function Fo(n,r){if(ci(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(r,p)||!ci(n[p],r[p]))return!1}return!0}function Dd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Id(n,r){var l=Dd(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Dd(l)}}function Nd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Nd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ud(){for(var n=window,r=O();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=O(n.document)}return r}function zc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function kv(n){var r=Ud(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Nd(l.ownerDocument.documentElement,l)){if(h!==null&&zc(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!n.extend&&v>h&&(p=h,h=v,v=p),p=Id(l,v);var E=Id(l,h);p&&E&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>h?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Bv=u&&"documentMode"in document&&11>=document.documentMode,Es=null,Hc=null,Oo=null,Vc=!1;function Fd(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vc||Es==null||Es!==O(h)||(h=Es,"selectionStart"in h&&zc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Oo&&Fo(Oo,h)||(Oo=h,h=Ka(Hc,"onSelect"),0<h.length&&(r=new Dc("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=Es)))}function Xa(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ts={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},Gc={},Od={};u&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function ja(n){if(Gc[n])return Gc[n];if(!Ts[n])return n;var r=Ts[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Od)return Gc[n]=r[l];return n}var kd=ja("animationend"),Bd=ja("animationiteration"),zd=ja("animationstart"),Hd=ja("transitionend"),Vd=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,r){Vd.set(n,r),a(r,[n])}for(var Wc=0;Wc<Gd.length;Wc++){var Xc=Gd[Wc],zv=Xc.toLowerCase(),Hv=Xc[0].toUpperCase()+Xc.slice(1);pr(zv,"on"+Hv)}pr(kd,"onAnimationEnd"),pr(Bd,"onAnimationIteration"),pr(zd,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(Hd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Wd(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,La(h,r,void 0,n),n.currentTarget=null}function Xd(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],p=h.event;h=h.listeners;e:{var v=void 0;if(r)for(var E=h.length-1;0<=E;E--){var D=h[E],z=D.instance,Q=D.currentTarget;if(D=D.listener,z!==v&&p.isPropagationStopped())break e;Wd(p,D,Q),v=z}else for(E=0;E<h.length;E++){if(D=h[E],z=D.instance,Q=D.currentTarget,D=D.listener,z!==v&&p.isPropagationStopped())break e;Wd(p,D,Q),v=z}}}if(Bi)throw n=vs,Bi=!1,vs=null,n}function Wt(n,r){var l=r[Jc];l===void 0&&(l=r[Jc]=new Set);var h=n+"__bubble";l.has(h)||(jd(r,n,2,!1),l.add(h))}function jc(n,r,l){var h=0;r&&(h|=4),jd(l,n,h,r)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Bo(n){if(!n[Ya]){n[Ya]=!0,i.forEach(function(l){l!=="selectionchange"&&(Vv.has(l)||jc(l,!1,n),jc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ya]||(r[Ya]=!0,jc("selectionchange",!1,r))}}function jd(n,r,l,h){switch(md(r)){case 1:var p=nv;break;case 4:p=iv;break;default:p=Cc}l=p.bind(null,r,l,n),p=void 0,!_s||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),h?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Yc(n,r,l,h,p){var v=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var D=h.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;E=E.return}for(;D!==null;){if(E=Wr(D),E===null)return;if(z=E.tag,z===5||z===6){h=v=E;continue e}D=D.parentNode}}h=h.return}Qn(function(){var Q=v,ge=V(l),ve=[];e:{var me=Vd.get(n);if(me!==void 0){var Ue=Dc,Ve=n;switch(n){case"keypress":if(Ha(l)===0)break e;case"keydown":case"keyup":Ue=vv;break;case"focusin":Ve="focus",Ue=Uc;break;case"focusout":Ve="blur",Ue=Uc;break;case"beforeblur":case"afterblur":Ue=Uc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Sv;break;case kd:case Bd:case zd:Ue=cv;break;case Hd:Ue=Ev;break;case"scroll":Ue=rv;break;case"wheel":Ue=wv;break;case"copy":case"cut":case"paste":Ue=hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=yd}var We=(r&4)!==0,Qt=!We&&n==="scroll",K=We?me!==null?me+"Capture":null:me;We=[];for(var W=Q,$;W!==null;){$=W;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,K!==null&&(Te=gn(W,K),Te!=null&&We.push(zo(W,Te,$)))),Qt)break;W=W.return}0<We.length&&(me=new Ue(me,Ve,null,l,ge),ve.push({event:me,listeners:We}))}}if((r&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",me&&l!==ut&&(Ve=l.relatedTarget||l.fromElement)&&(Wr(Ve)||Ve[Hi]))break e;if((Ue||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(Ve=l.relatedTarget||l.toElement,Ue=Q,Ve=Ve?Wr(Ve):null,Ve!==null&&(Qt=zi(Ve),Ve!==Qt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ue=null,Ve=Q),Ue!==Ve)){if(We=vd,Te="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(We=yd,Te="onPointerLeave",K="onPointerEnter",W="pointer"),Qt=Ue==null?me:Rs(Ue),$=Ve==null?me:Rs(Ve),me=new We(Te,W+"leave",Ue,l,ge),me.target=Qt,me.relatedTarget=$,Te=null,Wr(ge)===Q&&(We=new We(K,W+"enter",Ve,l,ge),We.target=$,We.relatedTarget=Qt,Te=We),Qt=Te,Ue&&Ve)t:{for(We=Ue,K=Ve,W=0,$=We;$;$=ws($))W++;for($=0,Te=K;Te;Te=ws(Te))$++;for(;0<W-$;)We=ws(We),W--;for(;0<$-W;)K=ws(K),$--;for(;W--;){if(We===K||K!==null&&We===K.alternate)break t;We=ws(We),K=ws(K)}We=null}else We=null;Ue!==null&&Yd(ve,me,Ue,We,!1),Ve!==null&&Qt!==null&&Yd(ve,Qt,Ve,We,!0)}}e:{if(me=Q?Rs(Q):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var je=Dv;else if(Ad(me))if(bd)je=Fv;else{je=Nv;var et=Iv}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(je=Uv);if(je&&(je=je(n,Q))){Rd(ve,je,l,ge);break e}et&&et(n,me,Q),n==="focusout"&&(et=me._wrapperState)&&et.controlled&&me.type==="number"&&Fe(me,"number",me.value)}switch(et=Q?Rs(Q):window,n){case"focusin":(Ad(et)||et.contentEditable==="true")&&(Es=et,Hc=Q,Oo=null);break;case"focusout":Oo=Hc=Es=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Fd(ve,l,ge);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Fd(ve,l,ge)}var tt;if(Oc)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Ms?Td(n,l)&&(ot="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Sd&&l.locale!=="ko"&&(Ms||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Ms&&(tt=gd()):(dr=ge,Lc="value"in dr?dr.value:dr.textContent,Ms=!0)),et=Ka(Q,ot),0<et.length&&(ot=new xd(ot,n,null,l,ge),ve.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=wd(l),tt!==null&&(ot.data=tt)))),(tt=Rv?bv(n,l):Cv(n,l))&&(Q=Ka(Q,"onBeforeInput"),0<Q.length&&(ge=new xd("onBeforeInput","beforeinput",null,l,ge),ve.push({event:ge,listeners:Q}),ge.data=tt))}Xd(ve,r)})}function zo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Ka(n,r){for(var l=r+"Capture",h=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=gn(n,l),v!=null&&h.unshift(zo(n,v,p)),v=gn(n,r),v!=null&&h.push(zo(n,v,p))),n=n.return}return h}function ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yd(n,r,l,h,p){for(var v=r._reactName,E=[];l!==null&&l!==h;){var D=l,z=D.alternate,Q=D.stateNode;if(z!==null&&z===h)break;D.tag===5&&Q!==null&&(D=Q,p?(z=gn(l,v),z!=null&&E.unshift(zo(l,z,D))):p||(z=gn(l,v),z!=null&&E.push(zo(l,z,D)))),l=l.return}E.length!==0&&n.push({event:r,listeners:E})}var Gv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Kd(n){return(typeof n=="string"?n:""+n).replace(Gv,`
`).replace(Wv,"")}function qa(n,r,l){if(r=Kd(r),Kd(n)!==r&&l)throw Error(t(425))}function $a(){}var Kc=null,qc=null;function $c(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,qd=typeof Promise=="function"?Promise:void 0,jv=typeof queueMicrotask=="function"?queueMicrotask:typeof qd<"u"?function(n){return qd.resolve(null).then(n).catch(Yv)}:Zc;function Yv(n){setTimeout(function(){throw n})}function Qc(n,r){var l=r,h=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){n.removeChild(p),Po(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Po(r)}function mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function $d(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var As=Math.random().toString(36).slice(2),wi="__reactFiber$"+As,Ho="__reactProps$"+As,Hi="__reactContainer$"+As,Jc="__reactEvents$"+As,Kv="__reactListeners$"+As,qv="__reactHandles$"+As;function Wr(n){var r=n[wi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Hi]||l[wi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=$d(n);n!==null;){if(l=n[wi])return l;n=$d(n)}return r}n=l,l=n.parentNode}return null}function Vo(n){return n=n[wi]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Za(n){return n[Ho]||null}var eu=[],bs=-1;function gr(n){return{current:n}}function Xt(n){0>bs||(n.current=eu[bs],eu[bs]=null,bs--)}function Ht(n,r){bs++,eu[bs]=n.current,n.current=r}var _r={},xn=gr(_r),Un=gr(!1),Xr=_r;function Cs(n,r){var l=n.type.contextTypes;if(!l)return _r;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Fn(n){return n=n.childContextTypes,n!=null}function Qa(){Xt(Un),Xt(xn)}function Zd(n,r,l){if(xn.current!==_r)throw Error(t(168));Ht(xn,r),Ht(Un,l)}function Qd(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in r))throw Error(t(108,de(n)||"Unknown",p));return ie({},l,h)}function Ja(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Xr=xn.current,Ht(xn,n),Ht(Un,Un.current),!0}function Jd(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=Qd(n,r,Xr),h.__reactInternalMemoizedMergedChildContext=n,Xt(Un),Xt(xn),Ht(xn,n)):Xt(Un),Ht(Un,l)}var Vi=null,el=!1,tu=!1;function ep(n){Vi===null?Vi=[n]:Vi.push(n)}function $v(n){el=!0,ep(n)}function vr(){if(!tu&&Vi!==null){tu=!0;var n=0,r=vt;try{var l=Vi;for(vt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Vi=null,el=!1}catch(p){throw Vi!==null&&(Vi=Vi.slice(n+1)),A(Ce,vr),p}finally{vt=r,tu=!1}}return null}var Ps=[],Ls=0,tl=null,nl=0,Jn=[],ei=0,jr=null,Gi=1,Wi="";function Yr(n,r){Ps[Ls++]=nl,Ps[Ls++]=tl,tl=n,nl=r}function tp(n,r,l){Jn[ei++]=Gi,Jn[ei++]=Wi,Jn[ei++]=jr,jr=n;var h=Gi;n=Wi;var p=32-Et(h)-1;h&=~(1<<p),l+=1;var v=32-Et(r)+p;if(30<v){var E=p-p%5;v=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Gi=1<<32-Et(r)+p|l<<p|h,Wi=v+n}else Gi=1<<v|l<<p|h,Wi=n}function nu(n){n.return!==null&&(Yr(n,1),tp(n,1,0))}function iu(n){for(;n===tl;)tl=Ps[--Ls],Ps[Ls]=null,nl=Ps[--Ls],Ps[Ls]=null;for(;n===jr;)jr=Jn[--ei],Jn[ei]=null,Wi=Jn[--ei],Jn[ei]=null,Gi=Jn[--ei],Jn[ei]=null}var jn=null,Yn=null,jt=!1,ui=null;function np(n,r){var l=ri(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function ip(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,jn=n,Yn=mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,jn=n,Yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=jr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ri(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,jn=n,Yn=null,!0):!1;default:return!1}}function ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function su(n){if(jt){var r=Yn;if(r){var l=r;if(!ip(n,r)){if(ru(n))throw Error(t(418));r=mr(l.nextSibling);var h=jn;r&&ip(n,r)?np(h,l):(n.flags=n.flags&-4097|2,jt=!1,jn=n)}}else{if(ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,jn=n}}}function rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function il(n){if(n!==jn)return!1;if(!jt)return rp(n),jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$c(n.type,n.memoizedProps)),r&&(r=Yn)){if(ru(n))throw sp(),Error(t(418));for(;r;)np(n,r),r=mr(r.nextSibling)}if(rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Yn=mr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Yn=null}}else Yn=jn?mr(n.stateNode.nextSibling):null;return!0}function sp(){for(var n=Yn;n;)n=mr(n.nextSibling)}function Ds(){Yn=jn=null,jt=!1}function ou(n){ui===null?ui=[n]:ui.push(n)}var Zv=R.ReactCurrentBatchConfig;function Go(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var p=h,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(E){var D=p.refs;E===null?delete D[v]:D[v]=E},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function rl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function op(n){var r=n._init;return r(n._payload)}function ap(n){function r(K,W){if(n){var $=K.deletions;$===null?(K.deletions=[W],K.flags|=16):$.push(W)}}function l(K,W){if(!n)return null;for(;W!==null;)r(K,W),W=W.sibling;return null}function h(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function p(K,W){return K=Ar(K,W),K.index=0,K.sibling=null,K}function v(K,W,$){return K.index=$,n?($=K.alternate,$!==null?($=$.index,$<W?(K.flags|=2,W):$):(K.flags|=2,W)):(K.flags|=1048576,W)}function E(K){return n&&K.alternate===null&&(K.flags|=2),K}function D(K,W,$,Te){return W===null||W.tag!==6?(W=Zu($,K.mode,Te),W.return=K,W):(W=p(W,$),W.return=K,W)}function z(K,W,$,Te){var je=$.type;return je===U?ge(K,W,$.props.children,Te,$.key):W!==null&&(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===se&&op(je)===W.type)?(Te=p(W,$.props),Te.ref=Go(K,W,$),Te.return=K,Te):(Te=bl($.type,$.key,$.props,null,K.mode,Te),Te.ref=Go(K,W,$),Te.return=K,Te)}function Q(K,W,$,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=Qu($,K.mode,Te),W.return=K,W):(W=p(W,$.children||[]),W.return=K,W)}function ge(K,W,$,Te,je){return W===null||W.tag!==7?(W=ts($,K.mode,Te,je),W.return=K,W):(W=p(W,$),W.return=K,W)}function ve(K,W,$){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Zu(""+W,K.mode,$),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case k:return $=bl(W.type,W.key,W.props,null,K.mode,$),$.ref=Go(K,null,W),$.return=K,$;case B:return W=Qu(W,K.mode,$),W.return=K,W;case se:var Te=W._init;return ve(K,Te(W._payload),$)}if(ct(W)||oe(W))return W=ts(W,K.mode,$,null),W.return=K,W;rl(K,W)}return null}function me(K,W,$,Te){var je=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return je!==null?null:D(K,W,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case k:return $.key===je?z(K,W,$,Te):null;case B:return $.key===je?Q(K,W,$,Te):null;case se:return je=$._init,me(K,W,je($._payload),Te)}if(ct($)||oe($))return je!==null?null:ge(K,W,$,Te,null);rl(K,$)}return null}function Ue(K,W,$,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get($)||null,D(W,K,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case k:return K=K.get(Te.key===null?$:Te.key)||null,z(W,K,Te,je);case B:return K=K.get(Te.key===null?$:Te.key)||null,Q(W,K,Te,je);case se:var et=Te._init;return Ue(K,W,$,et(Te._payload),je)}if(ct(Te)||oe(Te))return K=K.get($)||null,ge(W,K,Te,je,null);rl(W,Te)}return null}function Ve(K,W,$,Te){for(var je=null,et=null,tt=W,ot=W=0,un=null;tt!==null&&ot<$.length;ot++){tt.index>ot?(un=tt,tt=null):un=tt.sibling;var At=me(K,tt,$[ot],Te);if(At===null){tt===null&&(tt=un);break}n&&tt&&At.alternate===null&&r(K,tt),W=v(At,W,ot),et===null?je=At:et.sibling=At,et=At,tt=un}if(ot===$.length)return l(K,tt),jt&&Yr(K,ot),je;if(tt===null){for(;ot<$.length;ot++)tt=ve(K,$[ot],Te),tt!==null&&(W=v(tt,W,ot),et===null?je=tt:et.sibling=tt,et=tt);return jt&&Yr(K,ot),je}for(tt=h(K,tt);ot<$.length;ot++)un=Ue(tt,K,ot,$[ot],Te),un!==null&&(n&&un.alternate!==null&&tt.delete(un.key===null?ot:un.key),W=v(un,W,ot),et===null?je=un:et.sibling=un,et=un);return n&&tt.forEach(function(Rr){return r(K,Rr)}),jt&&Yr(K,ot),je}function We(K,W,$,Te){var je=oe($);if(typeof je!="function")throw Error(t(150));if($=je.call($),$==null)throw Error(t(151));for(var et=je=null,tt=W,ot=W=0,un=null,At=$.next();tt!==null&&!At.done;ot++,At=$.next()){tt.index>ot?(un=tt,tt=null):un=tt.sibling;var Rr=me(K,tt,At.value,Te);if(Rr===null){tt===null&&(tt=un);break}n&&tt&&Rr.alternate===null&&r(K,tt),W=v(Rr,W,ot),et===null?je=Rr:et.sibling=Rr,et=Rr,tt=un}if(At.done)return l(K,tt),jt&&Yr(K,ot),je;if(tt===null){for(;!At.done;ot++,At=$.next())At=ve(K,At.value,Te),At!==null&&(W=v(At,W,ot),et===null?je=At:et.sibling=At,et=At);return jt&&Yr(K,ot),je}for(tt=h(K,tt);!At.done;ot++,At=$.next())At=Ue(tt,K,ot,At.value,Te),At!==null&&(n&&At.alternate!==null&&tt.delete(At.key===null?ot:At.key),W=v(At,W,ot),et===null?je=At:et.sibling=At,et=At);return n&&tt.forEach(function(P0){return r(K,P0)}),jt&&Yr(K,ot),je}function Qt(K,W,$,Te){if(typeof $=="object"&&$!==null&&$.type===U&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case k:e:{for(var je=$.key,et=W;et!==null;){if(et.key===je){if(je=$.type,je===U){if(et.tag===7){l(K,et.sibling),W=p(et,$.props.children),W.return=K,K=W;break e}}else if(et.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===se&&op(je)===et.type){l(K,et.sibling),W=p(et,$.props),W.ref=Go(K,et,$),W.return=K,K=W;break e}l(K,et);break}else r(K,et);et=et.sibling}$.type===U?(W=ts($.props.children,K.mode,Te,$.key),W.return=K,K=W):(Te=bl($.type,$.key,$.props,null,K.mode,Te),Te.ref=Go(K,W,$),Te.return=K,K=Te)}return E(K);case B:e:{for(et=$.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){l(K,W.sibling),W=p(W,$.children||[]),W.return=K,K=W;break e}else{l(K,W);break}else r(K,W);W=W.sibling}W=Qu($,K.mode,Te),W.return=K,K=W}return E(K);case se:return et=$._init,Qt(K,W,et($._payload),Te)}if(ct($))return Ve(K,W,$,Te);if(oe($))return We(K,W,$,Te);rl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,W!==null&&W.tag===6?(l(K,W.sibling),W=p(W,$),W.return=K,K=W):(l(K,W),W=Zu($,K.mode,Te),W.return=K,K=W),E(K)):l(K,W)}return Qt}var Is=ap(!0),lp=ap(!1),sl=gr(null),ol=null,Ns=null,au=null;function lu(){au=Ns=ol=null}function cu(n){var r=sl.current;Xt(sl),n._currentValue=r}function uu(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function Us(n,r){ol=n,au=Ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(On=!0),n.firstContext=null)}function ti(n){var r=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:r,next:null},Ns===null){if(ol===null)throw Error(t(308));Ns=n,ol.dependencies={lanes:0,firstContext:n}}else Ns=Ns.next=n;return r}var Kr=null;function hu(n){Kr===null?Kr=[n]:Kr.push(n)}function cp(n,r,l,h){var p=r.interleaved;return p===null?(l.next=l,hu(r)):(l.next=p.next,p.next=l),r.interleaved=l,Xi(n,h)}function Xi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var xr=!1;function fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function yr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,(wt&2)!==0){var p=h.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),h.pending=r,Xi(n,l)}return p=h.interleaved,p===null?(r.next=r,hu(h)):(r.next=p.next,p.next=r),h.interleaved=r,Xi(n,l)}function al(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Gr(n,l)}}function hp(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=E:v=v.next=E,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function ll(n,r,l,h){var p=n.updateQueue;xr=!1;var v=p.firstBaseUpdate,E=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var z=D,Q=z.next;z.next=null,E===null?v=Q:E.next=Q,E=z;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,D=ge.lastBaseUpdate,D!==E&&(D===null?ge.firstBaseUpdate=Q:D.next=Q,ge.lastBaseUpdate=z))}if(v!==null){var ve=p.baseState;E=0,ge=Q=z=null,D=v;do{var me=D.lane,Ue=D.eventTime;if((h&me)===me){ge!==null&&(ge=ge.next={eventTime:Ue,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=n,We=D;switch(me=r,Ue=l,We.tag){case 1:if(Ve=We.payload,typeof Ve=="function"){ve=Ve.call(Ue,ve,me);break e}ve=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=We.payload,me=typeof Ve=="function"?Ve.call(Ue,ve,me):Ve,me==null)break e;ve=ie({},ve,me);break e;case 2:xr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[D]:me.push(D))}else Ue={eventTime:Ue,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ge===null?(Q=ge=Ue,z=ve):ge=ge.next=Ue,E|=me;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;me=D,D=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(ge===null&&(z=ve),p.baseState=z,p.firstBaseUpdate=Q,p.lastBaseUpdate=ge,r=p.shared.interleaved,r!==null){p=r;do E|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);Zr|=E,n.lanes=E,n.memoizedState=ve}}function fp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Wo={},Ai=gr(Wo),Xo=gr(Wo),jo=gr(Wo);function qr(n){if(n===Wo)throw Error(t(174));return n}function du(n,r){switch(Ht(jo,r),Ht(Xo,n),Ht(Ai,Wo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:_e(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=_e(r,n)}Xt(Ai),Ht(Ai,r)}function Fs(){Xt(Ai),Xt(Xo),Xt(jo)}function dp(n){qr(jo.current);var r=qr(Ai.current),l=_e(r,n.type);r!==l&&(Ht(Xo,n),Ht(Ai,l))}function pu(n){Xo.current===n&&(Xt(Ai),Xt(Xo))}var Yt=gr(0);function cl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var mu=[];function gu(){for(var n=0;n<mu.length;n++)mu[n]._workInProgressVersionPrimary=null;mu.length=0}var ul=R.ReactCurrentDispatcher,_u=R.ReactCurrentBatchConfig,$r=0,Kt=null,nn=null,ln=null,hl=!1,Yo=!1,Ko=0,Qv=0;function yn(){throw Error(t(321))}function vu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!ci(n[l],r[l]))return!1;return!0}function xu(n,r,l,h,p,v){if($r=v,Kt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ul.current=n===null||n.memoizedState===null?n0:i0,n=l(h,p),Yo){v=0;do{if(Yo=!1,Ko=0,25<=v)throw Error(t(301));v+=1,ln=nn=null,r.updateQueue=null,ul.current=r0,n=l(h,p)}while(Yo)}if(ul.current=pl,r=nn!==null&&nn.next!==null,$r=0,ln=nn=Kt=null,hl=!1,r)throw Error(t(300));return n}function yu(){var n=Ko!==0;return Ko=0,n}function Ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Kt.memoizedState=ln=n:ln=ln.next=n,ln}function ni(){if(nn===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var r=ln===null?Kt.memoizedState:ln.next;if(r!==null)ln=r,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},ln===null?Kt.memoizedState=ln=n:ln=ln.next=n}return ln}function qo(n,r){return typeof r=="function"?r(n):r}function Su(n){var r=ni(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=nn,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var E=p.next;p.next=v.next,v.next=E}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var D=E=null,z=null,Q=v;do{var ge=Q.lane;if(($r&ge)===ge)z!==null&&(z=z.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),h=Q.hasEagerState?Q.eagerState:n(h,Q.action);else{var ve={lane:ge,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};z===null?(D=z=ve,E=h):z=z.next=ve,Kt.lanes|=ge,Zr|=ge}Q=Q.next}while(Q!==null&&Q!==v);z===null?E=h:z.next=D,ci(h,r.memoizedState)||(On=!0),r.memoizedState=h,r.baseState=E,r.baseQueue=z,l.lastRenderedState=h}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Kt.lanes|=v,Zr|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Mu(n){var r=ni(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do v=n(v,E.action),E=E.next;while(E!==p);ci(v,r.memoizedState)||(On=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,h]}function pp(){}function mp(n,r){var l=Kt,h=ni(),p=r(),v=!ci(h.memoizedState,p);if(v&&(h.memoizedState=p,On=!0),h=h.queue,Eu(vp.bind(null,l,h,n),[n]),h.getSnapshot!==r||v||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,$o(9,_p.bind(null,l,h,p,r),void 0,null),cn===null)throw Error(t(349));($r&30)!==0||gp(l,r,p)}return p}function gp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Kt.updateQueue,r===null?(r={lastEffect:null,stores:null},Kt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function _p(n,r,l,h){r.value=l,r.getSnapshot=h,xp(r)&&yp(n)}function vp(n,r,l){return l(function(){xp(r)&&yp(n)})}function xp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!ci(n,l)}catch{return!0}}function yp(n){var r=Xi(n,1);r!==null&&pi(r,n,1,-1)}function Sp(n){var r=Ri();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},r.queue=n,n=n.dispatch=t0.bind(null,Kt,n),[r.memoizedState,n]}function $o(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=Kt.updateQueue,r===null?(r={lastEffect:null,stores:null},Kt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function Mp(){return ni().memoizedState}function fl(n,r,l,h){var p=Ri();Kt.flags|=n,p.memoizedState=$o(1|r,l,void 0,h===void 0?null:h)}function dl(n,r,l,h){var p=ni();h=h===void 0?null:h;var v=void 0;if(nn!==null){var E=nn.memoizedState;if(v=E.destroy,h!==null&&vu(h,E.deps)){p.memoizedState=$o(r,l,v,h);return}}Kt.flags|=n,p.memoizedState=$o(1|r,l,v,h)}function Ep(n,r){return fl(8390656,8,n,r)}function Eu(n,r){return dl(2048,8,n,r)}function Tp(n,r){return dl(4,2,n,r)}function wp(n,r){return dl(4,4,n,r)}function Ap(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Rp(n,r,l){return l=l!=null?l.concat([n]):null,dl(4,4,Ap.bind(null,r,n),l)}function Tu(){}function bp(n,r){var l=ni();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&vu(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function Cp(n,r){var l=ni();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&vu(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function Pp(n,r,l){return($r&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=l):(ci(l,r)||(l=An(),Kt.lanes|=l,Zr|=l,n.baseState=!0),r)}function Jv(n,r){var l=vt;vt=l!==0&&4>l?l:4,n(!0);var h=_u.transition;_u.transition={};try{n(!1),r()}finally{vt=l,_u.transition=h}}function Lp(){return ni().memoizedState}function e0(n,r,l){var h=Tr(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Dp(n))Ip(r,l);else if(l=cp(n,r,l,h),l!==null){var p=bn();pi(l,n,h,p),Np(l,r,h)}}function t0(n,r,l){var h=Tr(n),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Dp(n))Ip(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var E=r.lastRenderedState,D=v(E,l);if(p.hasEagerState=!0,p.eagerState=D,ci(D,E)){var z=r.interleaved;z===null?(p.next=p,hu(r)):(p.next=z.next,z.next=p),r.interleaved=p;return}}catch{}finally{}l=cp(n,r,p,h),l!==null&&(p=bn(),pi(l,n,h,p),Np(l,r,h))}}function Dp(n){var r=n.alternate;return n===Kt||r!==null&&r===Kt}function Ip(n,r){Yo=hl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Np(n,r,l){if((l&4194240)!==0){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Gr(n,l)}}var pl={readContext:ti,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},n0={readContext:ti,useCallback:function(n,r){return Ri().memoizedState=[n,r===void 0?null:r],n},useContext:ti,useEffect:Ep,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,fl(4194308,4,Ap.bind(null,r,n),l)},useLayoutEffect:function(n,r){return fl(4194308,4,n,r)},useInsertionEffect:function(n,r){return fl(4,2,n,r)},useMemo:function(n,r){var l=Ri();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Ri();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=e0.bind(null,Kt,n),[h.memoizedState,n]},useRef:function(n){var r=Ri();return n={current:n},r.memoizedState=n},useState:Sp,useDebugValue:Tu,useDeferredValue:function(n){return Ri().memoizedState=n},useTransition:function(){var n=Sp(!1),r=n[0];return n=Jv.bind(null,n[1]),Ri().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=Kt,p=Ri();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),cn===null)throw Error(t(349));($r&30)!==0||gp(h,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,Ep(vp.bind(null,h,v,n),[n]),h.flags|=2048,$o(9,_p.bind(null,h,v,l,r),void 0,null),l},useId:function(){var n=Ri(),r=cn.identifierPrefix;if(jt){var l=Wi,h=Gi;l=(h&~(1<<32-Et(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=Ko++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Qv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},i0={readContext:ti,useCallback:bp,useContext:ti,useEffect:Eu,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:wp,useMemo:Cp,useReducer:Su,useRef:Mp,useState:function(){return Su(qo)},useDebugValue:Tu,useDeferredValue:function(n){var r=ni();return Pp(r,nn.memoizedState,n)},useTransition:function(){var n=Su(qo)[0],r=ni().memoizedState;return[n,r]},useMutableSource:pp,useSyncExternalStore:mp,useId:Lp,unstable_isNewReconciler:!1},r0={readContext:ti,useCallback:bp,useContext:ti,useEffect:Eu,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:wp,useMemo:Cp,useReducer:Mu,useRef:Mp,useState:function(){return Mu(qo)},useDebugValue:Tu,useDeferredValue:function(n){var r=ni();return nn===null?r.memoizedState=n:Pp(r,nn.memoizedState,n)},useTransition:function(){var n=Mu(qo)[0],r=ni().memoizedState;return[n,r]},useMutableSource:pp,useSyncExternalStore:mp,useId:Lp,unstable_isNewReconciler:!1};function hi(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function wu(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:ie({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var ml={isMounted:function(n){return(n=n._reactInternals)?zi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=bn(),p=Tr(n),v=ji(h,p);v.payload=r,l!=null&&(v.callback=l),r=yr(n,v,p),r!==null&&(pi(r,n,p,h),al(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=bn(),p=Tr(n),v=ji(h,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=yr(n,v,p),r!==null&&(pi(r,n,p,h),al(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=bn(),h=Tr(n),p=ji(l,h);p.tag=2,r!=null&&(p.callback=r),r=yr(n,p,h),r!==null&&(pi(r,n,h,l),al(r,n,h))}};function Up(n,r,l,h,p,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,v,E):r.prototype&&r.prototype.isPureReactComponent?!Fo(l,h)||!Fo(p,v):!0}function Fp(n,r,l){var h=!1,p=_r,v=r.contextType;return typeof v=="object"&&v!==null?v=ti(v):(p=Fn(r)?Xr:xn.current,h=r.contextTypes,v=(h=h!=null)?Cs(n,p):_r),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ml,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Op(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&ml.enqueueReplaceState(r,r.state,null)}function Au(n,r,l,h){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},fu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=ti(v):(v=Fn(r)?Xr:xn.current,p.context=Cs(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(wu(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&ml.enqueueReplaceState(p,p.state,null),ll(n,l,p,h),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Os(n,r){try{var l="",h=r;do l+=Z(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Ru(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function bu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var s0=typeof WeakMap=="function"?WeakMap:Map;function kp(n,r,l){l=ji(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){Ml||(Ml=!0,Gu=h),bu(n,r)},l}function Bp(n,r,l){l=ji(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var p=r.value;l.payload=function(){return h(p)},l.callback=function(){bu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){bu(n,r),typeof h!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),l}function zp(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new s0;var p=new Set;h.set(r,p)}else p=h.get(r),p===void 0&&(p=new Set,h.set(r,p));p.has(l)||(p.add(l),n=x0.bind(null,n,r,l),r.then(n,n))}function Hp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Vp(n,r,l,h,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=ji(-1,1),r.tag=2,yr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var o0=R.ReactCurrentOwner,On=!1;function Rn(n,r,l,h){r.child=n===null?lp(r,null,l,h):Is(r,n.child,l,h)}function Gp(n,r,l,h,p){l=l.render;var v=r.ref;return Us(r,p),h=xu(n,r,l,h,v,p),l=yu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(jt&&l&&nu(r),r.flags|=1,Rn(n,r,h,p),r.child)}function Wp(n,r,l,h,p){if(n===null){var v=l.type;return typeof v=="function"&&!$u(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Xp(n,r,v,h,p)):(n=bl(l.type,null,h,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var E=v.memoizedProps;if(l=l.compare,l=l!==null?l:Fo,l(E,h)&&n.ref===r.ref)return Yi(n,r,p)}return r.flags|=1,n=Ar(v,h),n.ref=r.ref,n.return=r,r.child=n}function Xp(n,r,l,h,p){if(n!==null){var v=n.memoizedProps;if(Fo(v,h)&&n.ref===r.ref)if(On=!1,r.pendingProps=h=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(On=!0);else return r.lanes=n.lanes,Yi(n,r,p)}return Cu(n,r,l,h,p)}function jp(n,r,l){var h=r.pendingProps,p=h.children,v=n!==null?n.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Bs,Kn),Kn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ht(Bs,Kn),Kn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,Ht(Bs,Kn),Kn|=h}else v!==null?(h=v.baseLanes|l,r.memoizedState=null):h=l,Ht(Bs,Kn),Kn|=h;return Rn(n,r,p,l),r.child}function Yp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Cu(n,r,l,h,p){var v=Fn(l)?Xr:xn.current;return v=Cs(r,v),Us(r,p),l=xu(n,r,l,h,v,p),h=yu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(jt&&h&&nu(r),r.flags|=1,Rn(n,r,l,p),r.child)}function Kp(n,r,l,h,p){if(Fn(l)){var v=!0;Ja(r)}else v=!1;if(Us(r,p),r.stateNode===null)_l(n,r),Fp(r,l,h),Au(r,l,h,p),h=!0;else if(n===null){var E=r.stateNode,D=r.memoizedProps;E.props=D;var z=E.context,Q=l.contextType;typeof Q=="object"&&Q!==null?Q=ti(Q):(Q=Fn(l)?Xr:xn.current,Q=Cs(r,Q));var ge=l.getDerivedStateFromProps,ve=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";ve||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==h||z!==Q)&&Op(r,E,h,Q),xr=!1;var me=r.memoizedState;E.state=me,ll(r,h,E,p),z=r.memoizedState,D!==h||me!==z||Un.current||xr?(typeof ge=="function"&&(wu(r,l,ge,h),z=r.memoizedState),(D=xr||Up(r,l,D,h,me,z,Q))?(ve||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=z),E.props=h,E.state=z,E.context=Q,h=D):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{E=r.stateNode,up(n,r),D=r.memoizedProps,Q=r.type===r.elementType?D:hi(r.type,D),E.props=Q,ve=r.pendingProps,me=E.context,z=l.contextType,typeof z=="object"&&z!==null?z=ti(z):(z=Fn(l)?Xr:xn.current,z=Cs(r,z));var Ue=l.getDerivedStateFromProps;(ge=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==ve||me!==z)&&Op(r,E,h,z),xr=!1,me=r.memoizedState,E.state=me,ll(r,h,E,p);var Ve=r.memoizedState;D!==ve||me!==Ve||Un.current||xr?(typeof Ue=="function"&&(wu(r,l,Ue,h),Ve=r.memoizedState),(Q=xr||Up(r,l,Q,h,me,Ve,z)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,Ve,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,Ve,z)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=Ve),E.props=h,E.state=Ve,E.context=z,h=Q):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),h=!1)}return Pu(n,r,l,h,v,p)}function Pu(n,r,l,h,p,v){Yp(n,r);var E=(r.flags&128)!==0;if(!h&&!E)return p&&Jd(r,l,!1),Yi(n,r,v);h=r.stateNode,o0.current=r;var D=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&E?(r.child=Is(r,n.child,null,v),r.child=Is(r,null,D,v)):Rn(n,r,D,v),r.memoizedState=h.state,p&&Jd(r,l,!0),r.child}function qp(n){var r=n.stateNode;r.pendingContext?Zd(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Zd(n,r.context,!1),du(n,r.containerInfo)}function $p(n,r,l,h,p){return Ds(),ou(p),r.flags|=256,Rn(n,r,l,h),r.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Du(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zp(n,r,l){var h=r.pendingProps,p=Yt.current,v=!1,E=(r.flags&128)!==0,D;if((D=E)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ht(Yt,p&1),n===null)return su(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=h.children,n=h.fallback,v?(h=r.mode,v=r.child,E={mode:"hidden",children:E},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=E):v=Cl(E,h,0,null),n=ts(n,h,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Du(l),r.memoizedState=Lu,n):Iu(r,E));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return a0(n,r,E,h,D,p,l);if(v){v=h.fallback,E=r.mode,p=n.child,D=p.sibling;var z={mode:"hidden",children:h.children};return(E&1)===0&&r.child!==p?(h=r.child,h.childLanes=0,h.pendingProps=z,r.deletions=null):(h=Ar(p,z),h.subtreeFlags=p.subtreeFlags&14680064),D!==null?v=Ar(D,v):(v=ts(v,E,l,null),v.flags|=2),v.return=r,h.return=r,h.sibling=v,r.child=h,h=v,v=r.child,E=n.child.memoizedState,E=E===null?Du(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=n.childLanes&~l,r.memoizedState=Lu,h}return v=n.child,n=v.sibling,h=Ar(v,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function Iu(n,r){return r=Cl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function gl(n,r,l,h){return h!==null&&ou(h),Is(r,n.child,null,l),n=Iu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function a0(n,r,l,h,p,v,E){if(l)return r.flags&256?(r.flags&=-257,h=Ru(Error(t(422))),gl(n,r,E,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=h.fallback,p=r.mode,h=Cl({mode:"visible",children:h.children},p,0,null),v=ts(v,p,E,null),v.flags|=2,h.return=r,v.return=r,h.sibling=v,r.child=h,(r.mode&1)!==0&&Is(r,n.child,null,E),r.child.memoizedState=Du(E),r.memoizedState=Lu,v);if((r.mode&1)===0)return gl(n,r,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var D=h.dgst;return h=D,v=Error(t(419)),h=Ru(v,h,void 0),gl(n,r,E,h)}if(D=(E&n.childLanes)!==0,On||D){if(h=cn,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|E))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Xi(n,p),pi(h,n,p,-1))}return qu(),h=Ru(Error(t(421))),gl(n,r,E,h)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=y0.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Yn=mr(p.nextSibling),jn=r,jt=!0,ui=null,n!==null&&(Jn[ei++]=Gi,Jn[ei++]=Wi,Jn[ei++]=jr,Gi=n.id,Wi=n.overflow,jr=r),r=Iu(r,h.children),r.flags|=4096,r)}function Qp(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),uu(n.return,r,l)}function Nu(n,r,l,h,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function Jp(n,r,l){var h=r.pendingProps,p=h.revealOrder,v=h.tail;if(Rn(n,r,h.children,l),h=Yt.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,l,r);else if(n.tag===19)Qp(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Ht(Yt,h),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&cl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Nu(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&cl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Nu(r,!0,l,null,v);break;case"together":Nu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function _l(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Yi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Zr|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Ar(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Ar(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function l0(n,r,l){switch(r.tag){case 3:qp(r),Ds();break;case 5:dp(r);break;case 1:Fn(r.type)&&Ja(r);break;case 4:du(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,p=r.memoizedProps.value;Ht(sl,h._currentValue),h._currentValue=p;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(Ht(Yt,Yt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Zp(n,r,l):(Ht(Yt,Yt.current&1),n=Yi(n,r,l),n!==null?n.sibling:null);Ht(Yt,Yt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,(n.flags&128)!==0){if(h)return Jp(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ht(Yt,Yt.current),h)break;return null;case 22:case 23:return r.lanes=0,jp(n,r,l)}return Yi(n,r,l)}var em,Uu,tm,nm;em=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Uu=function(){},tm=function(n,r,l,h){var p=n.memoizedProps;if(p!==h){n=r.stateNode,qr(Ai.current);var v=null;switch(l){case"input":p=bt(n,p),h=bt(n,h),v=[];break;case"select":p=ie({},p,{value:void 0}),h=ie({},h,{value:void 0}),v=[];break;case"textarea":p=Gt(n,p),h=Gt(n,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=$a)}Xe(l,h);var E;l=null;for(Q in p)if(!h.hasOwnProperty(Q)&&p.hasOwnProperty(Q)&&p[Q]!=null)if(Q==="style"){var D=p[Q];for(E in D)D.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(s.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in h){var z=h[Q];if(D=p!=null?p[Q]:void 0,h.hasOwnProperty(Q)&&z!==D&&(z!=null||D!=null))if(Q==="style")if(D){for(E in D)!D.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in z)z.hasOwnProperty(E)&&D[E]!==z[E]&&(l||(l={}),l[E]=z[E])}else l||(v||(v=[]),v.push(Q,l)),l=z;else Q==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,D=D?D.__html:void 0,z!=null&&D!==z&&(v=v||[]).push(Q,z)):Q==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(Q,""+z):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(s.hasOwnProperty(Q)?(z!=null&&Q==="onScroll"&&Wt("scroll",n),v||D===z||(v=[])):(v=v||[]).push(Q,z))}l&&(v=v||[]).push("style",l);var Q=v;(r.updateQueue=Q)&&(r.flags|=4)}},nm=function(n,r,l,h){l!==h&&(r.flags|=4)};function Zo(n,r){if(!jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function Sn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function c0(n,r,l){var h=r.pendingProps;switch(iu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(r),null;case 1:return Fn(r.type)&&Qa(),Sn(r),null;case 3:return h=r.stateNode,Fs(),Xt(Un),Xt(xn),gu(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(il(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ui!==null&&(ju(ui),ui=null))),Uu(n,r),Sn(r),null;case 5:pu(r);var p=qr(jo.current);if(l=r.type,n!==null&&r.stateNode!=null)tm(n,r,l,h,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return Sn(r),null}if(n=qr(Ai.current),il(r)){h=r.stateNode,l=r.type;var v=r.memoizedProps;switch(h[wi]=r,h[Ho]=v,n=(r.mode&1)!==0,l){case"dialog":Wt("cancel",h),Wt("close",h);break;case"iframe":case"object":case"embed":Wt("load",h);break;case"video":case"audio":for(p=0;p<ko.length;p++)Wt(ko[p],h);break;case"source":Wt("error",h);break;case"img":case"image":case"link":Wt("error",h),Wt("load",h);break;case"details":Wt("toggle",h);break;case"input":Qe(h,v),Wt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},Wt("invalid",h);break;case"textarea":L(h,v),Wt("invalid",h)}Xe(l,v),p=null;for(var E in v)if(v.hasOwnProperty(E)){var D=v[E];E==="children"?typeof D=="string"?h.textContent!==D&&(v.suppressHydrationWarning!==!0&&qa(h.textContent,D,n),p=["children",D]):typeof D=="number"&&h.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&qa(h.textContent,D,n),p=["children",""+D]):s.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Wt("scroll",h)}switch(l){case"input":zt(h),Ot(h,v,!0);break;case"textarea":zt(h),q(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=$a)}h=p,r.updateQueue=h,h!==null&&(r.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=E.createElement(l,{is:h.is}):(n=E.createElement(l),l==="select"&&(E=n,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):n=E.createElementNS(n,l),n[wi]=r,n[Ho]=h,em(n,r,!1,!1),r.stateNode=n;e:{switch(E=be(l,h),l){case"dialog":Wt("cancel",n),Wt("close",n),p=h;break;case"iframe":case"object":case"embed":Wt("load",n),p=h;break;case"video":case"audio":for(p=0;p<ko.length;p++)Wt(ko[p],n);p=h;break;case"source":Wt("error",n),p=h;break;case"img":case"image":case"link":Wt("error",n),Wt("load",n),p=h;break;case"details":Wt("toggle",n),p=h;break;case"input":Qe(n,h),p=bt(n,h),Wt("invalid",n);break;case"option":p=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},p=ie({},h,{value:void 0}),Wt("invalid",n);break;case"textarea":L(n,h),p=Gt(n,h),Wt("invalid",n);break;default:p=h}Xe(l,p),D=p;for(v in D)if(D.hasOwnProperty(v)){var z=D[v];v==="style"?De(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ye(n,z)):v==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&we(n,z):typeof z=="number"&&we(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?z!=null&&v==="onScroll"&&Wt("scroll",n):z!=null&&P(n,v,z,E))}switch(l){case"input":zt(n),Ot(n,h,!1);break;case"textarea":zt(n),q(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Re(h.value));break;case"select":n.multiple=!!h.multiple,v=h.value,v!=null?Vt(n,!!h.multiple,v,!1):h.defaultValue!=null&&Vt(n,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=$a)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Sn(r),null;case 6:if(n&&r.stateNode!=null)nm(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=qr(jo.current),qr(Ai.current),il(r)){if(h=r.stateNode,l=r.memoizedProps,h[wi]=r,(v=h.nodeValue!==l)&&(n=jn,n!==null))switch(n.tag){case 3:qa(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&qa(h.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[wi]=r,r.stateNode=h}return Sn(r),null;case 13:if(Xt(Yt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Yn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)sp(),Ds(),r.flags|=98560,v=!1;else if(v=il(r),h!==null&&h.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[wi]=r}else Ds(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Sn(r),v=!1}else ui!==null&&(ju(ui),ui=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Yt.current&1)!==0?rn===0&&(rn=3):qu())),r.updateQueue!==null&&(r.flags|=4),Sn(r),null);case 4:return Fs(),Uu(n,r),n===null&&Bo(r.stateNode.containerInfo),Sn(r),null;case 10:return cu(r.type._context),Sn(r),null;case 17:return Fn(r.type)&&Qa(),Sn(r),null;case 19:if(Xt(Yt),v=r.memoizedState,v===null)return Sn(r),null;if(h=(r.flags&128)!==0,E=v.rendering,E===null)if(h)Zo(v,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(E=cl(n),E!==null){for(r.flags|=128,Zo(v,!1),h=E.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)v=l,n=h,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,n=E.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ht(Yt,Yt.current&1|2),r.child}n=n.sibling}v.tail!==null&&G()>zs&&(r.flags|=128,h=!0,Zo(v,!1),r.lanes=4194304)}else{if(!h)if(n=cl(E),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Zo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!jt)return Sn(r),null}else 2*G()-v.renderingStartTime>zs&&l!==1073741824&&(r.flags|=128,h=!0,Zo(v,!1),r.lanes=4194304);v.isBackwards?(E.sibling=r.child,r.child=E):(l=v.last,l!==null?l.sibling=E:r.child=E,v.last=E)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=G(),r.sibling=null,l=Yt.current,Ht(Yt,h?l&1|2:l&1),r):(Sn(r),null);case 22:case 23:return Ku(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?(Kn&1073741824)!==0&&(Sn(r),r.subtreeFlags&6&&(r.flags|=8192)):Sn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function u0(n,r){switch(iu(r),r.tag){case 1:return Fn(r.type)&&Qa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Fs(),Xt(Un),Xt(xn),gu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return pu(r),null;case 13:if(Xt(Yt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ds()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Xt(Yt),null;case 4:return Fs(),null;case 10:return cu(r.type._context),null;case 22:case 23:return Ku(),null;case 24:return null;default:return null}}var vl=!1,Mn=!1,h0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ks(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){$t(n,r,h)}else l.current=null}function Fu(n,r,l){try{l()}catch(h){$t(n,r,h)}}var im=!1;function f0(n,r){if(Kc=ka,n=Ud(),zc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var E=0,D=-1,z=-1,Q=0,ge=0,ve=n,me=null;t:for(;;){for(var Ue;ve!==l||p!==0&&ve.nodeType!==3||(D=E+p),ve!==v||h!==0&&ve.nodeType!==3||(z=E+h),ve.nodeType===3&&(E+=ve.nodeValue.length),(Ue=ve.firstChild)!==null;)me=ve,ve=Ue;for(;;){if(ve===n)break t;if(me===l&&++Q===p&&(D=E),me===v&&++ge===h&&(z=E),(Ue=ve.nextSibling)!==null)break;ve=me,me=ve.parentNode}ve=Ue}l=D===-1||z===-1?null:{start:D,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(qc={focusedElem:n,selectionRange:l},ka=!1,Oe=r;Oe!==null;)if(r=Oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Oe=n;else for(;Oe!==null;){r=Oe;try{var Ve=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var We=Ve.memoizedProps,Qt=Ve.memoizedState,K=r.stateNode,W=K.getSnapshotBeforeUpdate(r.elementType===r.type?We:hi(r.type,We),Qt);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){$t(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Oe=n;break}Oe=r.return}return Ve=im,im=!1,Ve}function Qo(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Fu(r,l,v)}p=p.next}while(p!==h)}}function xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function Ou(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function rm(n){var r=n.alternate;r!==null&&(n.alternate=null,rm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[wi],delete r[Ho],delete r[Jc],delete r[Kv],delete r[qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sm(n){return n.tag===5||n.tag===3||n.tag===4}function om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ku(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=$a));else if(h!==4&&(n=n.child,n!==null))for(ku(n,r,l),n=n.sibling;n!==null;)ku(n,r,l),n=n.sibling}function Bu(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(Bu(n,r,l),n=n.sibling;n!==null;)Bu(n,r,l),n=n.sibling}var pn=null,fi=!1;function Sr(n,r,l){for(l=l.child;l!==null;)am(n,r,l),l=l.sibling}function am(n,r,l){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount($e,l)}catch{}switch(l.tag){case 5:Mn||ks(l,r);case 6:var h=pn,p=fi;pn=null,Sr(n,r,l),pn=h,fi=p,pn!==null&&(fi?(n=pn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):pn.removeChild(l.stateNode));break;case 18:pn!==null&&(fi?(n=pn,l=l.stateNode,n.nodeType===8?Qc(n.parentNode,l):n.nodeType===1&&Qc(n,l),Po(n)):Qc(pn,l.stateNode));break;case 4:h=pn,p=fi,pn=l.stateNode.containerInfo,fi=!0,Sr(n,r,l),pn=h,fi=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,E=v.destroy;v=v.tag,E!==void 0&&((v&2)!==0||(v&4)!==0)&&Fu(l,r,E),p=p.next}while(p!==h)}Sr(n,r,l);break;case 1:if(!Mn&&(ks(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(D){$t(l,r,D)}Sr(n,r,l);break;case 21:Sr(n,r,l);break;case 22:l.mode&1?(Mn=(h=Mn)||l.memoizedState!==null,Sr(n,r,l),Mn=h):Sr(n,r,l);break;default:Sr(n,r,l)}}function lm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new h0),r.forEach(function(h){var p=S0.bind(null,n,h);l.has(h)||(l.add(h),h.then(p,p))})}}function di(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=n,E=r,D=E;e:for(;D!==null;){switch(D.tag){case 5:pn=D.stateNode,fi=!1;break e;case 3:pn=D.stateNode.containerInfo,fi=!0;break e;case 4:pn=D.stateNode.containerInfo,fi=!0;break e}D=D.return}if(pn===null)throw Error(t(160));am(v,E,p),pn=null,fi=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(Q){$t(p,r,Q)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)cm(r,n),r=r.sibling}function cm(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(r,n),bi(n),h&4){try{Qo(3,n,n.return),xl(3,n)}catch(We){$t(n,n.return,We)}try{Qo(5,n,n.return)}catch(We){$t(n,n.return,We)}}break;case 1:di(r,n),bi(n),h&512&&l!==null&&ks(l,l.return);break;case 5:if(di(r,n),bi(n),h&512&&l!==null&&ks(l,l.return),n.flags&32){var p=n.stateNode;try{we(p,"")}catch(We){$t(n,n.return,We)}}if(h&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,E=l!==null?l.memoizedProps:v,D=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&St(p,v),be(D,E);var Q=be(D,v);for(E=0;E<z.length;E+=2){var ge=z[E],ve=z[E+1];ge==="style"?De(p,ve):ge==="dangerouslySetInnerHTML"?Ye(p,ve):ge==="children"?we(p,ve):P(p,ge,ve,Q)}switch(D){case"input":qe(p,v);break;case"textarea":w(p,v);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Ue=v.value;Ue!=null?Vt(p,!!v.multiple,Ue,!1):me!==!!v.multiple&&(v.defaultValue!=null?Vt(p,!!v.multiple,v.defaultValue,!0):Vt(p,!!v.multiple,v.multiple?[]:"",!1))}p[Ho]=v}catch(We){$t(n,n.return,We)}}break;case 6:if(di(r,n),bi(n),h&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(We){$t(n,n.return,We)}}break;case 3:if(di(r,n),bi(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Po(r.containerInfo)}catch(We){$t(n,n.return,We)}break;case 4:di(r,n),bi(n);break;case 13:di(r,n),bi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Vu=G())),h&4&&lm(n);break;case 22:if(ge=l!==null&&l.memoizedState!==null,n.mode&1?(Mn=(Q=Mn)||ge,di(r,n),Mn=Q):di(r,n),bi(n),h&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!ge&&(n.mode&1)!==0)for(Oe=n,ge=n.child;ge!==null;){for(ve=Oe=ge;Oe!==null;){switch(me=Oe,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:Qo(4,me,me.return);break;case 1:ks(me,me.return);var Ve=me.stateNode;if(typeof Ve.componentWillUnmount=="function"){h=me,l=me.return;try{r=h,Ve.props=r.memoizedProps,Ve.state=r.memoizedState,Ve.componentWillUnmount()}catch(We){$t(h,l,We)}}break;case 5:ks(me,me.return);break;case 22:if(me.memoizedState!==null){fm(ve);continue}}Ue!==null?(Ue.return=me,Oe=Ue):fm(ve)}ge=ge.sibling}e:for(ge=null,ve=n;;){if(ve.tag===5){if(ge===null){ge=ve;try{p=ve.stateNode,Q?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=ve.stateNode,z=ve.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,D.style.display=Ee("display",E))}catch(We){$t(n,n.return,We)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=Q?"":ve.memoizedProps}catch(We){$t(n,n.return,We)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:di(r,n),bi(n),h&4&&lm(n);break;case 21:break;default:di(r,n),bi(n)}}function bi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(sm(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(we(p,""),h.flags&=-33);var v=om(n);Bu(n,v,p);break;case 3:case 4:var E=h.stateNode.containerInfo,D=om(n);ku(n,D,E);break;default:throw Error(t(161))}}catch(z){$t(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function d0(n,r,l){Oe=n,um(n)}function um(n,r,l){for(var h=(n.mode&1)!==0;Oe!==null;){var p=Oe,v=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||vl;if(!E){var D=p.alternate,z=D!==null&&D.memoizedState!==null||Mn;D=vl;var Q=Mn;if(vl=E,(Mn=z)&&!Q)for(Oe=p;Oe!==null;)E=Oe,z=E.child,E.tag===22&&E.memoizedState!==null?dm(p):z!==null?(z.return=E,Oe=z):dm(p);for(;v!==null;)Oe=v,um(v),v=v.sibling;Oe=p,vl=D,Mn=Q}hm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Oe=v):hm(n)}}function hm(n){for(;Oe!==null;){var r=Oe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mn||xl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!Mn)if(l===null)h.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:hi(r.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&fp(r,v,h);break;case 3:var E=r.updateQueue;if(E!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}fp(r,E,l)}break;case 5:var D=r.stateNode;if(l===null&&r.flags&4){l=D;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Q=r.alternate;if(Q!==null){var ge=Q.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&Po(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||r.flags&512&&Ou(r)}catch(me){$t(r,r.return,me)}}if(r===n){Oe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function fm(n){for(;Oe!==null;){var r=Oe;if(r===n){Oe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function dm(n){for(;Oe!==null;){var r=Oe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{xl(4,r)}catch(z){$t(r,l,z)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var p=r.return;try{h.componentDidMount()}catch(z){$t(r,p,z)}}var v=r.return;try{Ou(r)}catch(z){$t(r,v,z)}break;case 5:var E=r.return;try{Ou(r)}catch(z){$t(r,E,z)}}}catch(z){$t(r,r.return,z)}if(r===n){Oe=null;break}var D=r.sibling;if(D!==null){D.return=r.return,Oe=D;break}Oe=r.return}}var p0=Math.ceil,yl=R.ReactCurrentDispatcher,zu=R.ReactCurrentOwner,ii=R.ReactCurrentBatchConfig,wt=0,cn=null,Jt=null,mn=0,Kn=0,Bs=gr(0),rn=0,Jo=null,Zr=0,Sl=0,Hu=0,ea=null,kn=null,Vu=0,zs=1/0,Ki=null,Ml=!1,Gu=null,Mr=null,El=!1,Er=null,Tl=0,ta=0,Wu=null,wl=-1,Al=0;function bn(){return(wt&6)!==0?G():wl!==-1?wl:wl=G()}function Tr(n){return(n.mode&1)===0?1:(wt&2)!==0&&mn!==0?mn&-mn:Zv.transition!==null?(Al===0&&(Al=An()),Al):(n=vt,n!==0||(n=window.event,n=n===void 0?16:md(n.type)),n)}function pi(n,r,l,h){if(50<ta)throw ta=0,Wu=null,Error(t(185));Zt(n,l,h),((wt&2)===0||n!==cn)&&(n===cn&&((wt&2)===0&&(Sl|=l),rn===4&&wr(n,mn)),Bn(n,h),l===1&&wt===0&&(r.mode&1)===0&&(zs=G()+500,el&&vr()))}function Bn(n,r){var l=n.callbackNode;Vr(n,r);var h=li(n,n===cn?mn:0);if(h===0)l!==null&&Y(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&Y(l),r===1)n.tag===0?$v(mm.bind(null,n)):ep(mm.bind(null,n)),jv(function(){(wt&6)===0&&vr()}),l=null;else{switch(ad(h)){case 1:l=Ce;break;case 4:l=He;break;case 16:l=Ne;break;case 536870912:l=rt;break;default:l=Ne}l=Em(l,pm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function pm(n,r){if(wl=-1,Al=0,(wt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Hs()&&n.callbackNode!==l)return null;var h=li(n,n===cn?mn:0);if(h===0)return null;if((h&30)!==0||(h&n.expiredLanes)!==0||r)r=Rl(n,h);else{r=h;var p=wt;wt|=2;var v=_m();(cn!==n||mn!==r)&&(Ki=null,zs=G()+500,Jr(n,r));do try{_0();break}catch(D){gm(n,D)}while(!0);lu(),yl.current=v,wt=p,Jt!==null?r=0:(cn=null,mn=0,r=rn)}if(r!==0){if(r===2&&(p=Bt(n),p!==0&&(h=p,r=Xu(n,p))),r===1)throw l=Jo,Jr(n,0),wr(n,h),Bn(n,G()),l;if(r===6)wr(n,h);else{if(p=n.current.alternate,(h&30)===0&&!m0(p)&&(r=Rl(n,h),r===2&&(v=Bt(n),v!==0&&(h=v,r=Xu(n,v))),r===1))throw l=Jo,Jr(n,0),wr(n,h),Bn(n,G()),l;switch(n.finishedWork=p,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:es(n,kn,Ki);break;case 3:if(wr(n,h),(h&130023424)===h&&(r=Vu+500-G(),10<r)){if(li(n,0)!==0)break;if(p=n.suspendedLanes,(p&h)!==h){bn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Zc(es.bind(null,n,kn,Ki),r);break}es(n,kn,Ki);break;case 4:if(wr(n,h),(h&4194240)===h)break;for(r=n.eventTimes,p=-1;0<h;){var E=31-Et(h);v=1<<E,E=r[E],E>p&&(p=E),h&=~v}if(h=p,h=G()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*p0(h/1960))-h,10<h){n.timeoutHandle=Zc(es.bind(null,n,kn,Ki),h);break}es(n,kn,Ki);break;case 5:es(n,kn,Ki);break;default:throw Error(t(329))}}}return Bn(n,G()),n.callbackNode===l?pm.bind(null,n):null}function Xu(n,r){var l=ea;return n.current.memoizedState.isDehydrated&&(Jr(n,r).flags|=256),n=Rl(n,r),n!==2&&(r=kn,kn=l,r!==null&&ju(r)),n}function ju(n){kn===null?kn=n:kn.push.apply(kn,n)}function m0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!ci(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function wr(n,r){for(r&=~Hu,r&=~Sl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Et(r),h=1<<l;n[l]=-1,r&=~h}}function mm(n){if((wt&6)!==0)throw Error(t(327));Hs();var r=li(n,0);if((r&1)===0)return Bn(n,G()),null;var l=Rl(n,r);if(n.tag!==0&&l===2){var h=Bt(n);h!==0&&(r=h,l=Xu(n,h))}if(l===1)throw l=Jo,Jr(n,0),wr(n,r),Bn(n,G()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,kn,Ki),Bn(n,G()),null}function Yu(n,r){var l=wt;wt|=1;try{return n(r)}finally{wt=l,wt===0&&(zs=G()+500,el&&vr())}}function Qr(n){Er!==null&&Er.tag===0&&(wt&6)===0&&Hs();var r=wt;wt|=1;var l=ii.transition,h=vt;try{if(ii.transition=null,vt=1,n)return n()}finally{vt=h,ii.transition=l,wt=r,(wt&6)===0&&vr()}}function Ku(){Kn=Bs.current,Xt(Bs)}function Jr(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Xv(l)),Jt!==null)for(l=Jt.return;l!==null;){var h=l;switch(iu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Qa();break;case 3:Fs(),Xt(Un),Xt(xn),gu();break;case 5:pu(h);break;case 4:Fs();break;case 13:Xt(Yt);break;case 19:Xt(Yt);break;case 10:cu(h.type._context);break;case 22:case 23:Ku()}l=l.return}if(cn=n,Jt=n=Ar(n.current,null),mn=Kn=r,rn=0,Jo=null,Hu=Sl=Zr=0,kn=ea=null,Kr!==null){for(r=0;r<Kr.length;r++)if(l=Kr[r],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var E=v.next;v.next=p,h.next=E}l.pending=h}Kr=null}return n}function gm(n,r){do{var l=Jt;try{if(lu(),ul.current=pl,hl){for(var h=Kt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}hl=!1}if($r=0,ln=nn=Kt=null,Yo=!1,Ko=0,zu.current=null,l===null||l.return===null){rn=1,Jo=r,Jt=null;break}e:{var v=n,E=l.return,D=l,z=r;if(r=mn,D.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var Q=z,ge=D,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ue=Hp(E);if(Ue!==null){Ue.flags&=-257,Vp(Ue,E,D,v,r),Ue.mode&1&&zp(v,Q,r),r=Ue,z=Q;var Ve=r.updateQueue;if(Ve===null){var We=new Set;We.add(z),r.updateQueue=We}else Ve.add(z);break e}else{if((r&1)===0){zp(v,Q,r),qu();break e}z=Error(t(426))}}else if(jt&&D.mode&1){var Qt=Hp(E);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Vp(Qt,E,D,v,r),ou(Os(z,D));break e}}v=z=Os(z,D),rn!==4&&(rn=2),ea===null?ea=[v]:ea.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var K=kp(v,z,r);hp(v,K);break e;case 1:D=z;var W=v.type,$=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Mr===null||!Mr.has($)))){v.flags|=65536,r&=-r,v.lanes|=r;var Te=Bp(v,D,r);hp(v,Te);break e}}v=v.return}while(v!==null)}xm(l)}catch(je){r=je,Jt===l&&l!==null&&(Jt=l=l.return);continue}break}while(!0)}function _m(){var n=yl.current;return yl.current=pl,n===null?pl:n}function qu(){(rn===0||rn===3||rn===2)&&(rn=4),cn===null||(Zr&268435455)===0&&(Sl&268435455)===0||wr(cn,mn)}function Rl(n,r){var l=wt;wt|=2;var h=_m();(cn!==n||mn!==r)&&(Ki=null,Jr(n,r));do try{g0();break}catch(p){gm(n,p)}while(!0);if(lu(),wt=l,yl.current=h,Jt!==null)throw Error(t(261));return cn=null,mn=0,rn}function g0(){for(;Jt!==null;)vm(Jt)}function _0(){for(;Jt!==null&&!J();)vm(Jt)}function vm(n){var r=Mm(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,r===null?xm(n):Jt=r,zu.current=null}function xm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=c0(l,r,Kn),l!==null){Jt=l;return}}else{if(l=u0(l,r),l!==null){l.flags&=32767,Jt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Jt=null;return}}if(r=r.sibling,r!==null){Jt=r;return}Jt=r=n}while(r!==null);rn===0&&(rn=5)}function es(n,r,l){var h=vt,p=ii.transition;try{ii.transition=null,vt=1,v0(n,r,l,h)}finally{ii.transition=p,vt=h}return null}function v0(n,r,l,h){do Hs();while(Er!==null);if((wt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(vn(n,v),n===cn&&(Jt=cn=null,mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||El||(El=!0,Em(Ne,function(){return Hs(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=ii.transition,ii.transition=null;var E=vt;vt=1;var D=wt;wt|=4,zu.current=null,f0(n,l),cm(l,n),kv(qc),ka=!!Kc,qc=Kc=null,n.current=l,d0(l),ee(),wt=D,vt=E,ii.transition=v}else n.current=l;if(El&&(El=!1,Er=n,Tl=p),v=n.pendingLanes,v===0&&(Mr=null),Ct(l.stateNode),Bn(n,G()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Ml)throw Ml=!1,n=Gu,Gu=null,n;return(Tl&1)!==0&&n.tag!==0&&Hs(),v=n.pendingLanes,(v&1)!==0?n===Wu?ta++:(ta=0,Wu=n):ta=0,vr(),null}function Hs(){if(Er!==null){var n=ad(Tl),r=ii.transition,l=vt;try{if(ii.transition=null,vt=16>n?16:n,Er===null)var h=!1;else{if(n=Er,Er=null,Tl=0,(wt&6)!==0)throw Error(t(331));var p=wt;for(wt|=4,Oe=n.current;Oe!==null;){var v=Oe,E=v.child;if((Oe.flags&16)!==0){var D=v.deletions;if(D!==null){for(var z=0;z<D.length;z++){var Q=D[z];for(Oe=Q;Oe!==null;){var ge=Oe;switch(ge.tag){case 0:case 11:case 15:Qo(8,ge,v)}var ve=ge.child;if(ve!==null)ve.return=ge,Oe=ve;else for(;Oe!==null;){ge=Oe;var me=ge.sibling,Ue=ge.return;if(rm(ge),ge===Q){Oe=null;break}if(me!==null){me.return=Ue,Oe=me;break}Oe=Ue}}}var Ve=v.alternate;if(Ve!==null){var We=Ve.child;if(We!==null){Ve.child=null;do{var Qt=We.sibling;We.sibling=null,We=Qt}while(We!==null)}}Oe=v}}if((v.subtreeFlags&2064)!==0&&E!==null)E.return=v,Oe=E;else e:for(;Oe!==null;){if(v=Oe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Qo(9,v,v.return)}var K=v.sibling;if(K!==null){K.return=v.return,Oe=K;break e}Oe=v.return}}var W=n.current;for(Oe=W;Oe!==null;){E=Oe;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,Oe=$;else e:for(E=W;Oe!==null;){if(D=Oe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:xl(9,D)}}catch(je){$t(D,D.return,je)}if(D===E){Oe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Oe=Te;break e}Oe=D.return}}if(wt=p,vr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot($e,n)}catch{}h=!0}return h}finally{vt=l,ii.transition=r}}return!1}function ym(n,r,l){r=Os(l,r),r=kp(n,r,1),n=yr(n,r,1),r=bn(),n!==null&&(Zt(n,1,r),Bn(n,r))}function $t(n,r,l){if(n.tag===3)ym(n,n,l);else for(;r!==null;){if(r.tag===3){ym(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Mr===null||!Mr.has(h))){n=Os(l,n),n=Bp(r,n,1),r=yr(r,n,1),n=bn(),r!==null&&(Zt(r,1,n),Bn(r,n));break}}r=r.return}}function x0(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=bn(),n.pingedLanes|=n.suspendedLanes&l,cn===n&&(mn&l)===l&&(rn===4||rn===3&&(mn&130023424)===mn&&500>G()-Vu?Jr(n,0):Hu|=l),Bn(n,r)}function Sm(n,r){r===0&&((n.mode&1)===0?r=1:(r=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var l=bn();n=Xi(n,r),n!==null&&(Zt(n,r,l),Bn(n,l))}function y0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Sm(n,l)}function S0(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Sm(n,l)}var Mm;Mm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Un.current)On=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return On=!1,l0(n,r,l);On=(n.flags&131072)!==0}else On=!1,jt&&(r.flags&1048576)!==0&&tp(r,nl,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;_l(n,r),n=r.pendingProps;var p=Cs(r,xn.current);Us(r,l),p=xu(null,r,h,n,p,l);var v=yu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Fn(h)?(v=!0,Ja(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,fu(r),p.updater=ml,r.stateNode=p,p._reactInternals=r,Au(r,h,n,l),r=Pu(null,r,h,!0,v,l)):(r.tag=0,jt&&v&&nu(r),Rn(null,r,p,l),r=r.child),r;case 16:h=r.elementType;e:{switch(_l(n,r),n=r.pendingProps,p=h._init,h=p(h._payload),r.type=h,p=r.tag=E0(h),n=hi(h,n),p){case 0:r=Cu(null,r,h,n,l);break e;case 1:r=Kp(null,r,h,n,l);break e;case 11:r=Gp(null,r,h,n,l);break e;case 14:r=Wp(null,r,h,hi(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:hi(h,p),Cu(n,r,h,p,l);case 1:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:hi(h,p),Kp(n,r,h,p,l);case 3:e:{if(qp(r),n===null)throw Error(t(387));h=r.pendingProps,v=r.memoizedState,p=v.element,up(n,r),ll(r,h,null,l);var E=r.memoizedState;if(h=E.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Os(Error(t(423)),r),r=$p(n,r,h,l,p);break e}else if(h!==p){p=Os(Error(t(424)),r),r=$p(n,r,h,l,p);break e}else for(Yn=mr(r.stateNode.containerInfo.firstChild),jn=r,jt=!0,ui=null,l=lp(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ds(),h===p){r=Yi(n,r,l);break e}Rn(n,r,h,l)}r=r.child}return r;case 5:return dp(r),n===null&&su(r),h=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,E=p.children,$c(h,p)?E=null:v!==null&&$c(h,v)&&(r.flags|=32),Yp(n,r),Rn(n,r,E,l),r.child;case 6:return n===null&&su(r),null;case 13:return Zp(n,r,l);case 4:return du(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Is(r,null,h,l):Rn(n,r,h,l),r.child;case 11:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:hi(h,p),Gp(n,r,h,p,l);case 7:return Rn(n,r,r.pendingProps,l),r.child;case 8:return Rn(n,r,r.pendingProps.children,l),r.child;case 12:return Rn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,p=r.pendingProps,v=r.memoizedProps,E=p.value,Ht(sl,h._currentValue),h._currentValue=E,v!==null)if(ci(v.value,E)){if(v.children===p.children&&!Un.current){r=Yi(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var D=v.dependencies;if(D!==null){E=v.child;for(var z=D.firstContext;z!==null;){if(z.context===h){if(v.tag===1){z=ji(-1,l&-l),z.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var ge=Q.pending;ge===null?z.next=z:(z.next=ge.next,ge.next=z),Q.pending=z}}v.lanes|=l,z=v.alternate,z!==null&&(z.lanes|=l),uu(v.return,l,r),D.lanes|=l;break}z=z.next}}else if(v.tag===10)E=v.type===r.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(t(341));E.lanes|=l,D=E.alternate,D!==null&&(D.lanes|=l),uu(E,l,r),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===r){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}Rn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,h=r.pendingProps.children,Us(r,l),p=ti(p),h=h(p),r.flags|=1,Rn(n,r,h,l),r.child;case 14:return h=r.type,p=hi(h,r.pendingProps),p=hi(h.type,p),Wp(n,r,h,p,l);case 15:return Xp(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:hi(h,p),_l(n,r),r.tag=1,Fn(h)?(n=!0,Ja(r)):n=!1,Us(r,l),Fp(r,h,p),Au(r,h,p,l),Pu(null,r,h,!0,n,l);case 19:return Jp(n,r,l);case 22:return jp(n,r,l)}throw Error(t(156,r.tag))};function Em(n,r){return A(n,r)}function M0(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,r,l,h){return new M0(n,r,l,h)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function E0(n){if(typeof n=="function")return $u(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===he)return 14}return 2}function Ar(n,r){var l=n.alternate;return l===null?(l=ri(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function bl(n,r,l,h,p,v){var E=2;if(h=n,typeof n=="function")$u(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return ts(l.children,p,v,r);case j:E=8,p|=8;break;case C:return n=ri(12,l,r,p|2),n.elementType=C,n.lanes=v,n;case ne:return n=ri(13,l,r,p),n.elementType=ne,n.lanes=v,n;case ae:return n=ri(19,l,r,p),n.elementType=ae,n.lanes=v,n;case ue:return Cl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:E=10;break e;case F:E=9;break e;case le:E=11;break e;case he:E=14;break e;case se:E=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ri(E,l,r,p),r.elementType=n,r.type=h,r.lanes=v,r}function ts(n,r,l,h){return n=ri(7,n,h,r),n.lanes=l,n}function Cl(n,r,l,h){return n=ri(22,n,h,r),n.elementType=ue,n.lanes=l,n.stateNode={isHidden:!1},n}function Zu(n,r,l){return n=ri(6,n,null,r),n.lanes=l,n}function Qu(n,r,l){return r=ri(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function T0(n,r,l,h,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ju(n,r,l,h,p,v,E,D,z){return n=new T0(n,r,l,D,z),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ri(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(v),n}function w0(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function Tm(n){if(!n)return _r;n=n._reactInternals;e:{if(zi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Fn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Fn(l))return Qd(n,l,r)}return r}function wm(n,r,l,h,p,v,E,D,z){return n=Ju(l,h,!0,n,p,v,E,D,z),n.context=Tm(null),l=n.current,h=bn(),p=Tr(l),v=ji(h,p),v.callback=r??null,yr(l,v,p),n.current.lanes=p,Zt(n,p,h),Bn(n,h),n}function Pl(n,r,l,h){var p=r.current,v=bn(),E=Tr(p);return l=Tm(l),r.context===null?r.context=l:r.pendingContext=l,r=ji(v,E),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=yr(p,r,E),n!==null&&(pi(n,p,E,v),al(n,p,E)),E}function Ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Am(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function eh(n,r){Am(n,r),(n=n.alternate)&&Am(n,r)}function A0(){return null}var Rm=typeof reportError=="function"?reportError:function(n){console.error(n)};function th(n){this._internalRoot=n}Dl.prototype.render=th.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Pl(n,r,null,null)},Dl.prototype.unmount=th.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qr(function(){Pl(null,n,null,null)}),r[Hi]=null}};function Dl(n){this._internalRoot=n}Dl.prototype.unstable_scheduleHydration=function(n){if(n){var r=ud();n={blockedOn:null,target:n,priority:r};for(var l=0;l<fr.length&&r!==0&&r<fr[l].priority;l++);fr.splice(l,0,n),l===0&&dd(n)}};function nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function R0(n,r,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var Q=Ll(E);v.call(Q)}}var E=wm(r,h,n,0,null,!1,!1,"",bm);return n._reactRootContainer=E,n[Hi]=E.current,Bo(n.nodeType===8?n.parentNode:n),Qr(),E}for(;p=n.lastChild;)n.removeChild(p);if(typeof h=="function"){var D=h;h=function(){var Q=Ll(z);D.call(Q)}}var z=Ju(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=z,n[Hi]=z.current,Bo(n.nodeType===8?n.parentNode:n),Qr(function(){Pl(r,z,l,h)}),z}function Nl(n,r,l,h,p){var v=l._reactRootContainer;if(v){var E=v;if(typeof p=="function"){var D=p;p=function(){var z=Ll(E);D.call(z)}}Pl(r,E,n,p)}else E=R0(l,r,n,p,h);return Ll(E)}ld=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=tn(r.pendingLanes);l!==0&&(Gr(r,l|1),Bn(r,G()),(wt&6)===0&&(zs=G()+500,vr()))}break;case 13:Qr(function(){var h=Xi(n,1);if(h!==null){var p=bn();pi(h,n,1,p)}}),eh(n,1)}},Rc=function(n){if(n.tag===13){var r=Xi(n,134217728);if(r!==null){var l=bn();pi(r,n,134217728,l)}eh(n,134217728)}},cd=function(n){if(n.tag===13){var r=Tr(n),l=Xi(n,r);if(l!==null){var h=bn();pi(l,n,r,h)}eh(n,r)}},ud=function(){return vt},hd=function(n,r){var l=vt;try{return vt=n,r()}finally{vt=l}},Se=function(n,r,l){switch(r){case"input":if(qe(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var p=Za(h);if(!p)throw Error(t(90));yt(h),qe(h,p)}}}break;case"textarea":w(n,l);break;case"select":r=l.value,r!=null&&Vt(n,!!l.multiple,r,!1)}},at=Yu,Pt=Qr;var b0={usingClientEntryPoint:!1,Events:[Vo,Rs,Za,fe,Ge,Yu]},na={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C0={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Na(n),n===null?null:n.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||A0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{$e=Ul.inject(C0),st=Ul}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0,zn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(r))throw Error(t(200));return w0(n,r,null,l)},zn.createRoot=function(n,r){if(!nh(n))throw Error(t(299));var l=!1,h="",p=Rm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Ju(n,1,!1,null,null,l,!1,h,p),n[Hi]=r.current,Bo(n.nodeType===8?n.parentNode:n),new th(r)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Na(r),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return Qr(n)},zn.hydrate=function(n,r,l){if(!Il(r))throw Error(t(200));return Nl(null,n,r,!0,l)},zn.hydrateRoot=function(n,r,l){if(!nh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",E=Rm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),r=wm(r,null,n,1,l??null,p,!1,v,E),n[Hi]=r.current,Bo(n),h)for(n=0;n<h.length;n++)l=h[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Dl(r)},zn.render=function(n,r,l){if(!Il(r))throw Error(t(200));return Nl(null,n,r,!1,l)},zn.unmountComponentAtNode=function(n){if(!Il(n))throw Error(t(40));return n._reactRootContainer?(Qr(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},zn.unstable_batchedUpdates=Yu,zn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Il(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nl(n,r,l,!1,h)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var Fm;function k0(){if(Fm)return sh.exports;Fm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sh.exports=O0(),sh.exports}var Om;function B0(){if(Om)return Fl;Om=1;var o=k0();return Fl.createRoot=o.createRoot,Fl.hydrateRoot=o.hydrateRoot,Fl}var z0=B0();const H0=c_(z0),V0=({onComplete:o})=>{const[e,t]=Mi.useState(""),i="<BioElectro>";return Mi.useEffect(()=>{let s=0;const a=setInterval(()=>{t(i.substring(0,s)),s++,s>i.length&&(clearInterval(a),setTimeout(()=>{o()},1e3))},100);return()=>clearInterval(a)},[o]),ye.jsxs("div",{className:"fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center",children:[ye.jsxs("div",{className:"mb-4 text-4xl font-mono font-bold",children:[e," ",ye.jsx("span",{className:"animate-blink ml-1",children:" | "})]}),ye.jsx("div",{className:"w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden",children:ye.jsx("div",{className:"w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"})})]})},G0=({menuOpen:o,setMenuOpen:e})=>(Mi.useEffect(()=>{document.body.style.overflow=o?"hidden":""},[o]),ye.jsx("nav",{className:"fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg",children:ye.jsx("div",{className:"max-w-5xl mx-auto px-4",children:ye.jsxs("div",{className:"flex justify-between items-center h-16",children:[ye.jsxs("a",{href:"#home",className:"font-mono text-xl font-bold text-white",children:[" ","BioEchem",ye.jsx("span",{className:"text-emerlad-300",children:"Builds"})," "]}),ye.jsx("div",{className:"w-7 h-5 relative cursor-pointer z-40 md:hidden",onClick:()=>e(t=>!t),children:"☰"}),ye.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[ye.jsxs("a",{href:"#home",className:"text-gray-300 hove:text-white transition-colors",children:[" ","Home"]}),ye.jsxs("a",{href:"#about",className:"text-gray-300 hove:text-white transition-colors",children:[" ","Usage"," "]}),ye.jsxs("a",{href:"#projects",className:"text-gray-300 hove:text-white transition-colors",children:[" ","Part List"," "]}),ye.jsxs("a",{href:"#contact",className:"text-gray-300 hove:text-white transition-colors",children:[" ","Model"," "]})]})]})})})),W0=({menuOpen:o,setMenuOpen:e})=>ye.jsxs("div",{className:`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${o?"h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none"}
                   `,children:[ye.jsx("button",{onClick:()=>e(!1),className:"absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer","aria-label":"Close Menu",children:"×"}),ye.jsx("a",{href:"#home",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}        
            `,children:"Home"}),ye.jsx("a",{href:"#about",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}        
    `,children:"Usage"}),ye.jsx("a",{href:"#projects",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}        
    `,children:"Part List"}),ye.jsx("a",{href:"#contact",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}        
    `,children:"Model"})]}),Bf=({children:o})=>{const e=Mi.useRef(null);return Mi.useEffect(()=>{const t=new IntersectionObserver(([i])=>{i.isIntersecting&&e.current.classList.add("visible")},{threshold:.2,rootMargin:"0px 0px -50px 0px"});return e.current&&t.observe(e.current),()=>t.disconnect()}),ye.jsx("div",{ref:e,className:"reveal",children:o})},X0=()=>ye.jsx("section",{id:"home",className:"min-h-screen flex items-center justify-center relative",children:ye.jsx(Bf,{children:ye.jsxs("div",{className:"text-center z-10 px-4",children:[ye.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent leading-right",children:"Microbial Electrochemical Bioreactor"}),ye.jsx("p",{className:"tex-gray-400 text-lg mb-8 max-w-lg mx-auto",children:"3D printable electrochemical bioreactor for lab-scale microbial electrochemistry."}),ye.jsxs("div",{className:"flex justify-center space-x-4",children:[ye.jsx("a",{href:"#CAD Files",className:"bg-emerald-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]",children:"CAD Files"}),ye.jsx("a",{href:"#projects",className:`bg-emerald-300 text-white py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10`,children:"Part List"})]})]})})}),j0=()=>{const o=["NIH 3D Database Deposit","Journal of Chemical Education Paper"],e=["3D Printing","Gasket Fabrication","Assembly"];return ye.jsx("section",{id:"about",className:"min-h-screen flex items-center justify-center py-20",children:ye.jsx(Bf,{children:ye.jsxs("div",{className:"max-w-3xl mx-auto px-4",children:[ye.jsxs("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center",children:[" ","Usage"]}),ye.jsxs("div",{className:"rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all",children:[ye.jsx("p",{className:"text-gray-300 mb-6",children:"For 100mL scale microbial electrochemical experiments."}),ye.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[ye.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[ye.jsx("h3",{className:"text-xl font-bold mb-4",children:" Resources"}),ye.jsx("div",{className:"flex flex-wrap gap-2",children:o.map((t,i)=>ye.jsx("span",{className:`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    `,children:t},i))})]}),ye.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[ye.jsx("h3",{className:"text-xl font-bold mb-4",children:" Protocols"}),ye.jsx("div",{className:"flex flex-wrap gap-2",children:e.map((t,i)=>ye.jsx("span",{className:`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    `,children:t},i))})]})]})]}),ye.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-8",children:[ye.jsxs("div",{className:"p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all",children:[ye.jsx("h3",{className:"text-xl font-bold mb-4",children:" 🏫 MIT Furst Lab "}),ye.jsxs("ul",{className:"list-disc list-inside text-gray-300 space-y-2",children:[ye.jsxs("li",{children:[ye.jsx("strong",{children:" Department of Chemical Engineering "})," - MIT 2025"]}),ye.jsx("li",{children:"Designed by: Swathi Penumutchu"})]})]}),ye.jsxs("div",{className:"p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all",children:[ye.jsx("h3",{className:"text-xl font-bold mb-4",children:" Cite "}),ye.jsxs("div",{className:"space-y-4 text-gray-300",children:[ye.jsxs("div",{children:[ye.jsxs("h4",{className:"font-semibold",children:[" ","GitHub Repo"," "]}),ye.jsx("p",{children:"Link to design files and WebApp."})]}),ye.jsxs("div",{children:[ye.jsxs("h4",{className:"font-semibold",children:[" ","BioEchemBuilds Database"," "]}),ye.jsx("p",{children:"Fabrication database with all builds in microbial elechemistry toolkit."})]})]})]})]})]})})})},Y0=()=>ye.jsx("section",{id:"projects",className:"min-h-screen flex items-center justify-center py-20",children:ye.jsx(Bf,{children:ye.jsxs("div",{className:"max-w-5xl mx-auto px-4",children:[ye.jsxs("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center",children:[" ","Part List"]}),ye.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[ye.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition",children:[ye.jsx("h3",{className:"text-xl font-bold mb-2",children:" Links"}),ye.jsx("p",{className:"text-gray-400 mb-4",children:"Additional Required Parts."}),ye.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:["Glass Jar","Gasket 1","Gasket 2"].map((o,e)=>ye.jsx("span",{className:`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    `,children:o},e))}),ye.jsx("div",{className:"flex justify-between items-center",children:ye.jsx("a",{href:"#",className:"text-blue-400 hover:text-blue-300 transition-colors my-4",children:"McMaster →"})})]}),ye.jsxs("div",{className:`
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            `,children:[ye.jsx("h3",{className:"text-xl font-bold mb-2",children:"Electrodes"}),ye.jsx("p",{className:"text-gray-400 mb-4",children:"Materials for Working Counter and Reference Electrodes."}),ye.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:["Fuel Cell Store","WPI","CHI"].map((o,e)=>ye.jsx("span",{className:`
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    `,children:o},e))}),ye.jsx("div",{className:"flex justify-between items-center ",children:ye.jsx("a",{href:"#",className:"text-blue-400 hover:text-blue-300 transition-colors my-4",children:"Purchase →"})})]})]})]})})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="179",oo={ROTATE:0,DOLLY:1,PAN:2},ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},K0=0,km=1,q0=2,u_=1,h_=2,tr=3,ar=0,Gn=1,vi=2,kr=0,ao=1,Bm=2,zm=3,Hm=4,$0=5,us=100,Z0=101,Q0=102,J0=103,ex=104,tx=200,nx=201,ix=202,rx=203,Yh=204,Kh=205,sx=206,ox=207,ax=208,lx=209,cx=210,ux=211,hx=212,fx=213,dx=214,qh=0,$h=1,Zh=2,ho=3,Qh=4,Jh=5,ef=6,tf=7,f_=0,px=1,mx=2,Br=0,gx=1,_x=2,vx=3,xx=4,yx=5,Sx=6,Mx=7,Vm="attached",Ex="detached",d_=300,fo=301,po=302,nf=303,rf=304,Ec=306,mo=1e3,Or=1001,vc=1002,Dn=1003,p_=1004,da=1005,Zn=1006,hc=1007,ir=1008,Di=1009,m_=1010,g_=1011,va=1012,Hf=1013,ps=1014,Si=1015,wa=1016,Vf=1017,Gf=1018,xa=1020,__=35902,v_=1021,x_=1022,ai=1023,ya=1026,Sa=1027,Wf=1028,Xf=1029,y_=1030,jf=1031,Yf=1033,fc=33776,dc=33777,pc=33778,mc=33779,sf=35840,of=35841,af=35842,lf=35843,cf=36196,uf=37492,hf=37496,ff=37808,df=37809,pf=37810,mf=37811,gf=37812,_f=37813,vf=37814,xf=37815,yf=37816,Sf=37817,Mf=37818,Ef=37819,Tf=37820,wf=37821,gc=36492,Af=36494,Rf=36495,S_=36283,bf=36284,Cf=36285,Pf=36286,Ma=2300,Ea=2301,lh=2302,Gm=2400,Wm=2401,Xm=2402,Tx=2500,wx=0,M_=1,Lf=2,Ax=3200,Rx=3201,E_=0,bx=1,Fr="",fn="srgb",Nn="srgb-linear",xc="linear",Ut="srgb",Vs=7680,jm=519,Cx=512,Px=513,Lx=514,T_=515,Dx=516,Ix=517,Nx=518,Ux=519,Df=35044,Ym="300 es",Pi=2e3,yc=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Km=1234567;const ma=Math.PI/180,go=180/Math.PI;function Ei(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function mt(o,e,t){return Math.max(e,Math.min(t,o))}function Kf(o,e){return(o%e+e)%e}function Fx(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Ox(o,e,t){return o!==e?(t-o)/(e-o):0}function ga(o,e,t){return(1-t)*o+t*e}function kx(o,e,t,i){return ga(o,e,1-Math.exp(-t*i))}function Bx(o,e=1){return e-Math.abs(Kf(o,e*2)-e)}function zx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Hx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Vx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Gx(o,e){return o+Math.random()*(e-o)}function Wx(o){return o*(.5-Math.random())}function Xx(o){o!==void 0&&(Km=o);let e=Km+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jx(o){return o*ma}function Yx(o){return o*go}function Kx(o){return(o&o-1)===0&&o!==0}function qx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function $x(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zx(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),d=a((e+i)/2),g=c((e+i)/2),m=a((e-i)/2),_=c((e-i)/2),y=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*g,f*m,f*_,u*d);break;case"YZY":o.set(f*_,u*g,f*m,u*d);break;case"ZXZ":o.set(f*m,f*_,u*g,u*d);break;case"XZX":o.set(u*g,f*M,f*y,u*d);break;case"YXY":o.set(f*y,u*g,f*M,u*d);break;case"ZYZ":o.set(f*M,f*y,u*g,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Dt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const w_={DEG2RAD:ma,RAD2DEG:go,generateUUID:Ei,clamp:mt,euclideanModulo:Kf,mapLinear:Fx,inverseLerp:Ox,lerp:ga,damp:kx,pingpong:Bx,smoothstep:zx,smootherstep:Hx,randInt:Vx,randFloat:Gx,randFloatSpread:Wx,seededRandom:Xx,degToRad:jx,radToDeg:Yx,isPowerOfTwo:Kx,ceilPowerOfTwo:qx,floorPowerOfTwo:$x,setQuaternionFromProperEuler:Zx,normalize:Dt,denormalize:xi};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ii{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let f=i[s+0],d=i[s+1],g=i[s+2],m=i[s+3];const _=a[c+0],y=a[c+1],M=a[c+2],T=a[c+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(u===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=T;return}if(m!==T||f!==_||d!==y||g!==M){let S=1-u;const x=f*_+d*y+g*M+m*T,I=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const k=Math.sqrt(P),B=Math.atan2(k,x*I);S=Math.sin(S*B)/k,u=Math.sin(u*B)/k}const R=u*I;if(f=f*S+_*R,d=d*S+y*R,g=g*S+M*R,m=m*S+T*R,S===1-u){const k=1/Math.sqrt(f*f+d*d+g*g+m*m);f*=k,d*=k,g*=k,m*=k}}e[t]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],f=i[s+1],d=i[s+2],g=i[s+3],m=a[c],_=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+g*m+f*y-d*_,e[t+1]=f*M+g*_+d*m-u*y,e[t+2]=d*M+g*y+u*_-f*m,e[t+3]=g*M-u*m-f*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,d=u(i/2),g=u(s/2),m=u(a/2),_=f(i/2),y=f(s/2),M=f(a/2);switch(c){case"XYZ":this._x=_*g*m+d*y*M,this._y=d*y*m-_*g*M,this._z=d*g*M+_*y*m,this._w=d*g*m-_*y*M;break;case"YXZ":this._x=_*g*m+d*y*M,this._y=d*y*m-_*g*M,this._z=d*g*M-_*y*m,this._w=d*g*m+_*y*M;break;case"ZXY":this._x=_*g*m-d*y*M,this._y=d*y*m+_*g*M,this._z=d*g*M+_*y*m,this._w=d*g*m-_*y*M;break;case"ZYX":this._x=_*g*m-d*y*M,this._y=d*y*m+_*g*M,this._z=d*g*M-_*y*m,this._w=d*g*m+_*y*M;break;case"YZX":this._x=_*g*m+d*y*M,this._y=d*y*m+_*g*M,this._z=d*g*M-_*y*m,this._w=d*g*m-_*y*M;break;case"XZY":this._x=_*g*m-d*y*M,this._y=d*y*m-_*g*M,this._z=d*g*M+_*y*m,this._w=d*g*m+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],f=t[9],d=t[2],g=t[6],m=t[10],_=i+u+m;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-f)*y,this._y=(a-d)*y,this._z=(c-s)*y}else if(i>u&&i>m){const y=2*Math.sqrt(1+i-u-m);this._w=(g-f)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+d)/y}else if(u>m){const y=2*Math.sqrt(1+u-i-m);this._w=(a-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(f+g)/y}else{const y=2*Math.sqrt(1+m-i-u);this._w=(c-s)/y,this._x=(a+d)/y,this._y=(f+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,f=t._y,d=t._z,g=t._w;return this._x=i*g+c*u+s*d-a*f,this._y=s*g+c*f+a*u-i*d,this._z=a*g+c*d+i*f-s*u,this._w=c*g-i*u-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),g=Math.atan2(d,u),m=Math.sin((1-t)*g)/d,_=Math.sin(t*g)/d;return this._w=c*m+this._w*_,this._x=i*m+this._x*_,this._y=s*m+this._y*_,this._z=a*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,f=e.w,d=2*(c*s-u*i),g=2*(u*t-a*s),m=2*(a*i-c*t);return this.x=t+f*d+c*m-u*g,this.y=i+f*g+u*d-a*m,this.z=s+f*m+a*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*c-i*f,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ch.copy(this).projectOnVector(e),this.sub(ch)}reflect(e){return this.sub(ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new X,qm=new Ii;class ft{constructor(e,t,i,s,a,c,u,f,d){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,d)}set(e,t,i,s,a,c,u,f,d){const g=this.elements;return g[0]=e,g[1]=s,g[2]=u,g[3]=t,g[4]=a,g[5]=f,g[6]=i,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],g=i[4],m=i[7],_=i[2],y=i[5],M=i[8],T=s[0],S=s[3],x=s[6],I=s[1],P=s[4],R=s[7],k=s[2],B=s[5],U=s[8];return a[0]=c*T+u*I+f*k,a[3]=c*S+u*P+f*B,a[6]=c*x+u*R+f*U,a[1]=d*T+g*I+m*k,a[4]=d*S+g*P+m*B,a[7]=d*x+g*R+m*U,a[2]=_*T+y*I+M*k,a[5]=_*S+y*P+M*B,a[8]=_*x+y*R+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],g=e[8];return t*c*g-t*u*d-i*a*g+i*u*f+s*a*d-s*c*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],g=e[8],m=g*c-u*d,_=u*f-g*a,y=d*a-c*f,M=t*m+i*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=m*T,e[1]=(s*d-g*i)*T,e[2]=(u*i-s*c)*T,e[3]=_*T,e[4]=(g*t-s*f)*T,e[5]=(s*a-u*t)*T,e[6]=y*T,e[7]=(i*f-d*t)*T,e[8]=(c*t-i*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*c+d*u)+c+e,-s*d,s*f,-s*(-d*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(uh.makeScale(e,t)),this}rotate(e){return this.premultiply(uh.makeRotation(-e)),this}translate(e,t){return this.premultiply(uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new ft;function A_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ta(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Qx(){const o=Ta("canvas");return o.style.display="block",o}const $m={};function lo(o){o in $m||($m[o]=!0,console.warn(o))}function Jx(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Zm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ey(){const o={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ut&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(s.r=co(s.r),s.g=co(s.g),s.b=co(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fr?xc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Nn]:{primaries:e,whitePoint:i,transfer:xc,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),o}const Tt=ey();function sr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gs;class ty{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=Ta("canvas")),Gs.width=e.width,Gs.height=e.height;const s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=sr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sr(t[i]/255)*255):t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ny=0;class qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(hh(s[c].image)):a.push(hh(s[c]))}else a=hh(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function hh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ty.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iy=0;const fh=new X;class dn extends gs{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=Or,s=Or,a=Zn,c=ir,u=ai,f=Di,d=dn.DEFAULT_ANISOTROPY,g=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Ei(),this.name="",this.source=new qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=d_;dn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,d=f[0],g=f[4],m=f[8],_=f[1],y=f[5],M=f[9],T=f[2],S=f[6],x=f[10];if(Math.abs(g-_)<.01&&Math.abs(m-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(m+T)<.1&&Math.abs(M+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,R=(y+1)/2,k=(x+1)/2,B=(g+_)/4,U=(m+T)/4,j=(M+S)/4;return P>R&&P>k?P<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(P),s=B/i,a=U/i):R>k?R<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(R),i=B/s,a=j/s):k<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(k),i=U/a,s=j/a),this.set(i,s,a,t),this}let I=Math.sqrt((S-M)*(S-M)+(m-T)*(m-T)+(_-g)*(_-g));return Math.abs(I)<.001&&(I=1),this.x=(S-M)/I,this.y=(m-T)/I,this.z=(_-g)/I,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ry extends gs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:i.depth},a=new dn(s);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends ry{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class R_ extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sy extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,mi):mi.fromBufferAttribute(a,c),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ol.copy(i.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),kl.subVectors(this.max,ra),Ws.subVectors(e.a,ra),Xs.subVectors(e.b,ra),js.subVectors(e.c,ra),br.subVectors(Xs,Ws),Cr.subVectors(js,Xs),ns.subVectors(Ws,js);let t=[0,-br.z,br.y,0,-Cr.z,Cr.y,0,-ns.z,ns.y,br.z,0,-br.x,Cr.z,0,-Cr.x,ns.z,0,-ns.x,-br.y,br.x,0,-Cr.y,Cr.x,0,-ns.y,ns.x,0];return!dh(t,Ws,Xs,js,kl)||(t=[1,0,0,0,1,0,0,0,1],!dh(t,Ws,Xs,js,kl))?!1:(Bl.crossVectors(br,Cr),t=[Bl.x,Bl.y,Bl.z],dh(t,Ws,Xs,js,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new X,new X,new X,new X,new X,new X,new X,new X],mi=new X,Ol=new Ui,Ws=new X,Xs=new X,js=new X,br=new X,Cr=new X,ns=new X,ra=new X,kl=new X,Bl=new X,is=new X;function dh(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){is.fromArray(o,a);const u=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),f=e.dot(is),d=t.dot(is),g=i.dot(is);if(Math.max(-Math.max(f,d,g),Math.min(f,d,g))>u)return!1}return!0}const oy=new Ui,sa=new X,ph=new X;class Fi{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):oy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(ph)),this.expandByPoint(sa.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $i=new X,mh=new X,zl=new X,Pr=new X,gh=new X,Hl=new X,_h=new X;class Aa{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){mh.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(mh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(zl),u=Pr.dot(this.direction),f=-Pr.dot(zl),d=Pr.lengthSq(),g=Math.abs(1-c*c);let m,_,y,M;if(g>0)if(m=c*f-u,_=c*u-f,M=a*g,m>=0)if(_>=-M)if(_<=M){const T=1/g;m*=T,_*=T,y=m*(m+c*_+2*u)+_*(c*m+_+2*f)+d}else _=a,m=Math.max(0,-(c*_+u)),y=-m*m+_*(_+2*f)+d;else _=-a,m=Math.max(0,-(c*_+u)),y=-m*m+_*(_+2*f)+d;else _<=-M?(m=Math.max(0,-(-c*a+u)),_=m>0?-a:Math.min(Math.max(-a,-f),a),y=-m*m+_*(_+2*f)+d):_<=M?(m=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+d):(m=Math.max(0,-(c*a+u)),_=m>0?a:Math.min(Math.max(-a,-f),a),y=-m*m+_*(_+2*f)+d);else _=c>0?-a:a,m=Math.max(0,-(c*_+u)),y=-m*m+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(mh).addScaledVector(zl,_),y}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const i=$i.dot(this.direction),s=$i.dot($i)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,f;const d=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),g>=0?(a=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(a=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),m>=0?(u=(e.min.z-_.z)*m,f=(e.max.z-_.z)*m):(u=(e.max.z-_.z)*m,f=(e.min.z-_.z)*m),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,s,a){gh.subVectors(t,e),Hl.subVectors(i,e),_h.crossVectors(gh,Hl);let c=this.direction.dot(_h),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Pr.subVectors(this.origin,e);const f=u*this.direction.dot(Hl.crossVectors(Pr,Hl));if(f<0)return null;const d=u*this.direction.dot(gh.cross(Pr));if(d<0||f+d>c)return null;const g=-u*Pr.dot(_h);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,s,a,c,u,f,d,g,m,_,y,M,T,S){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,d,g,m,_,y,M,T,S)}set(e,t,i,s,a,c,u,f,d,g,m,_,y,M,T,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=c,x[9]=u,x[13]=f,x[2]=d,x[6]=g,x[10]=m,x[14]=_,x[3]=y,x[7]=M,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),a=1/Ys.setFromMatrixColumn(e,1).length(),c=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),g=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const _=c*g,y=c*m,M=u*g,T=u*m;t[0]=f*g,t[4]=-f*m,t[8]=d,t[1]=y+M*d,t[5]=_-T*d,t[9]=-u*f,t[2]=T-_*d,t[6]=M+y*d,t[10]=c*f}else if(e.order==="YXZ"){const _=f*g,y=f*m,M=d*g,T=d*m;t[0]=_+T*u,t[4]=M*u-y,t[8]=c*d,t[1]=c*m,t[5]=c*g,t[9]=-u,t[2]=y*u-M,t[6]=T+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*g,y=f*m,M=d*g,T=d*m;t[0]=_-T*u,t[4]=-c*m,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*g,t[9]=T-_*u,t[2]=-c*d,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*g,y=c*m,M=u*g,T=u*m;t[0]=f*g,t[4]=M*d-y,t[8]=_*d+T,t[1]=f*m,t[5]=T*d+_,t[9]=y*d-M,t[2]=-d,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,y=c*d,M=u*f,T=u*d;t[0]=f*g,t[4]=T-_*m,t[8]=M*m+y,t[1]=m,t[5]=c*g,t[9]=-u*g,t[2]=-d*g,t[6]=y*m+M,t[10]=_-T*m}else if(e.order==="XZY"){const _=c*f,y=c*d,M=u*f,T=u*d;t[0]=f*g,t[4]=-m,t[8]=d*g,t[1]=_*m+T,t[5]=c*g,t[9]=y*m-M,t[2]=M*m-y,t[6]=u*g,t[10]=T*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,ly)}lookAt(e,t,i){const s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Lr.crossVectors(i,qn),Lr.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Lr.crossVectors(i,qn)),Lr.normalize(),Vl.crossVectors(qn,Lr),s[0]=Lr.x,s[4]=Vl.x,s[8]=qn.x,s[1]=Lr.y,s[5]=Vl.y,s[9]=qn.y,s[2]=Lr.z,s[6]=Vl.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],g=i[1],m=i[5],_=i[9],y=i[13],M=i[2],T=i[6],S=i[10],x=i[14],I=i[3],P=i[7],R=i[11],k=i[15],B=s[0],U=s[4],j=s[8],C=s[12],b=s[1],F=s[5],le=s[9],ne=s[13],ae=s[2],he=s[6],se=s[10],ue=s[14],H=s[3],oe=s[7],ie=s[11],N=s[15];return a[0]=c*B+u*b+f*ae+d*H,a[4]=c*U+u*F+f*he+d*oe,a[8]=c*j+u*le+f*se+d*ie,a[12]=c*C+u*ne+f*ue+d*N,a[1]=g*B+m*b+_*ae+y*H,a[5]=g*U+m*F+_*he+y*oe,a[9]=g*j+m*le+_*se+y*ie,a[13]=g*C+m*ne+_*ue+y*N,a[2]=M*B+T*b+S*ae+x*H,a[6]=M*U+T*F+S*he+x*oe,a[10]=M*j+T*le+S*se+x*ie,a[14]=M*C+T*ne+S*ue+x*N,a[3]=I*B+P*b+R*ae+k*H,a[7]=I*U+P*F+R*he+k*oe,a[11]=I*j+P*le+R*se+k*ie,a[15]=I*C+P*ne+R*ue+k*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],f=e[9],d=e[13],g=e[2],m=e[6],_=e[10],y=e[14],M=e[3],T=e[7],S=e[11],x=e[15];return M*(+a*f*m-s*d*m-a*u*_+i*d*_+s*u*y-i*f*y)+T*(+t*f*y-t*d*_+a*c*_-s*c*y+s*d*g-a*f*g)+S*(+t*d*m-t*u*y-a*c*m+i*c*y+a*u*g-i*d*g)+x*(-s*u*g-t*f*m+t*u*_+s*c*m-i*c*_+i*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],g=e[8],m=e[9],_=e[10],y=e[11],M=e[12],T=e[13],S=e[14],x=e[15],I=m*S*d-T*_*d+T*f*y-u*S*y-m*f*x+u*_*x,P=M*_*d-g*S*d-M*f*y+c*S*y+g*f*x-c*_*x,R=g*T*d-M*m*d+M*u*y-c*T*y-g*u*x+c*m*x,k=M*m*f-g*T*f-M*u*_+c*T*_+g*u*S-c*m*S,B=t*I+i*P+s*R+a*k;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return e[0]=I*U,e[1]=(T*_*a-m*S*a-T*s*y+i*S*y+m*s*x-i*_*x)*U,e[2]=(u*S*a-T*f*a+T*s*d-i*S*d-u*s*x+i*f*x)*U,e[3]=(m*f*a-u*_*a-m*s*d+i*_*d+u*s*y-i*f*y)*U,e[4]=P*U,e[5]=(g*S*a-M*_*a+M*s*y-t*S*y-g*s*x+t*_*x)*U,e[6]=(M*f*a-c*S*a-M*s*d+t*S*d+c*s*x-t*f*x)*U,e[7]=(c*_*a-g*f*a+g*s*d-t*_*d-c*s*y+t*f*y)*U,e[8]=R*U,e[9]=(M*m*a-g*T*a-M*i*y+t*T*y+g*i*x-t*m*x)*U,e[10]=(c*T*a-M*u*a+M*i*d-t*T*d-c*i*x+t*u*x)*U,e[11]=(g*u*a-c*m*a-g*i*d+t*m*d+c*i*y-t*u*y)*U,e[12]=k*U,e[13]=(g*T*s-M*m*s+M*i*_-t*T*_-g*i*S+t*m*S)*U,e[14]=(M*u*s-c*T*s-M*i*f+t*T*f+c*i*S-t*u*S)*U,e[15]=(c*m*s-g*u*s+g*i*f-t*m*f-c*i*_+t*u*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,d=a*c,g=a*u;return this.set(d*c+i,d*u-s*f,d*f+s*u,0,d*u+s*f,g*u+i,g*f-s*c,0,d*f-s*u,g*f+s*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,d=a+a,g=c+c,m=u+u,_=a*d,y=a*g,M=a*m,T=c*g,S=c*m,x=u*m,I=f*d,P=f*g,R=f*m,k=i.x,B=i.y,U=i.z;return s[0]=(1-(T+x))*k,s[1]=(y+R)*k,s[2]=(M-P)*k,s[3]=0,s[4]=(y-R)*B,s[5]=(1-(_+x))*B,s[6]=(S+I)*B,s[7]=0,s[8]=(M+P)*U,s[9]=(S-I)*U,s[10]=(1-(_+T))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Ys.set(s[0],s[1],s[2]).length();const c=Ys.set(s[4],s[5],s[6]).length(),u=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],gi.copy(this);const d=1/a,g=1/c,m=1/u;return gi.elements[0]*=d,gi.elements[1]*=d,gi.elements[2]*=d,gi.elements[4]*=g,gi.elements[5]*=g,gi.elements[6]*=g,gi.elements[8]*=m,gi.elements[9]*=m,gi.elements[10]*=m,t.setFromRotationMatrix(gi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=Pi,f=!1){const d=this.elements,g=2*a/(t-e),m=2*a/(i-s),_=(t+e)/(t-e),y=(i+s)/(i-s);let M,T;if(f)M=a/(c-a),T=c*a/(c-a);else if(u===Pi)M=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(u===yc)M=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=m,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=Pi,f=!1){const d=this.elements,g=2/(t-e),m=2/(i-s),_=-(t+e)/(t-e),y=-(i+s)/(i-s);let M,T;if(f)M=1/(c-a),T=c/(c-a);else if(u===Pi)M=-2/(c-a),T=-(c+a)/(c-a);else if(u===yc)M=-1/(c-a),T=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=m,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=M,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ys=new X,gi=new pt,ay=new X(0,0,0),ly=new X(1,1,1),Lr=new X,Vl=new X,qn=new X,Jm=new pt,eg=new Ii;class Ni{constructor(e=0,t=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],f=s[1],d=s[5],g=s[9],m=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class b_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cy=0;const tg=new X,Ks=new Ii,Zi=new pt,Gl=new X,oa=new X,uy=new X,hy=new Ii,ng=new X(1,0,0),ig=new X(0,1,0),rg=new X(0,0,1),sg={type:"added"},fy={type:"removed"},qs={type:"childadded",child:null},vh={type:"childremoved",child:null};class qt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new X,t=new Ni,i=new Ii,s=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new ft}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,t){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gl.copy(e):Gl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(oa,Gl,this.up):Zi.lookAt(Gl,oa,this.up),this.quaternion.setFromRotationMatrix(Zi),s&&(Zi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sg),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fy),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sg),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){const m=f[d];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),d=c(e.textures),g=c(e.images),m=c(e.shapes),_=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),m.length>0&&(i.shapes=m),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const f=[];for(const d in u){const g=u[d];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}qt.DEFAULT_UP=new X(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new X,Qi=new X,xh=new X,Ji=new X,$s=new X,Zs=new X,og=new X,yh=new X,Sh=new X,Mh=new X,Eh=new Rt,Th=new Rt,wh=new Rt;class yi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_i.subVectors(e,t),s.cross(_i);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){_i.subVectors(s,t),Qi.subVectors(i,t),xh.subVectors(e,t);const c=_i.dot(_i),u=_i.dot(Qi),f=_i.dot(xh),d=Qi.dot(Qi),g=Qi.dot(xh),m=c*d-u*u;if(m===0)return a.set(0,0,0),null;const _=1/m,y=(d*f-u*g)*_,M=(c*g-u*f)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,s,a,c,u,f){return this.getBarycoord(e,t,i,s,Ji)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ji.x),f.addScaledVector(c,Ji.y),f.addScaledVector(u,Ji.z),f)}static getInterpolatedAttribute(e,t,i,s,a,c){return Eh.setScalar(0),Th.setScalar(0),wh.setScalar(0),Eh.fromBufferAttribute(e,t),Th.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Eh,a.x),c.addScaledVector(Th,a.y),c.addScaledVector(wh,a.z),c}static isFrontFacing(e,t,i,s){return _i.subVectors(i,t),Qi.subVectors(e,t),_i.cross(Qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),_i.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return yi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;$s.subVectors(s,i),Zs.subVectors(a,i),yh.subVectors(e,i);const f=$s.dot(yh),d=Zs.dot(yh);if(f<=0&&d<=0)return t.copy(i);Sh.subVectors(e,s);const g=$s.dot(Sh),m=Zs.dot(Sh);if(g>=0&&m<=g)return t.copy(s);const _=f*m-g*d;if(_<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(i).addScaledVector($s,c);Mh.subVectors(e,a);const y=$s.dot(Mh),M=Zs.dot(Mh);if(M>=0&&y<=M)return t.copy(a);const T=y*d-f*M;if(T<=0&&d>=0&&M<=0)return u=d/(d-M),t.copy(i).addScaledVector(Zs,u);const S=g*M-y*m;if(S<=0&&m-g>=0&&y-M>=0)return og.subVectors(a,s),u=(m-g)/(m-g+(y-M)),t.copy(s).addScaledVector(og,u);const x=1/(S+T+_);return c=T*x,u=_*x,t.copy(i).addScaledVector($s,c).addScaledVector(Zs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Ah(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=Kf(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Ah(c,a,e+1/3),this.g=Ah(c,a,e),this.b=Ah(c,a,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=C_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Tt.workingToColorSpace(Tn.copy(this),e),Math.round(mt(Tn.r*255,0,255))*65536+Math.round(mt(Tn.g*255,0,255))*256+Math.round(mt(Tn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Tn.copy(this),t);const i=Tn.r,s=Tn.g,a=Tn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let f,d;const g=(u+c)/2;if(u===c)f=0,d=0;else{const m=c-u;switch(d=g<=.5?m/(c+u):m/(2-c-u),c){case i:f=(s-a)/m+(s<a?6:0);break;case s:f=(a-i)/m+2;break;case a:f=(i-s)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=fn){Tt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,s=Tn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(Wl);const i=ga(Dr.h,Wl.h,t),s=ga(Dr.s,Wl.s,t),a=ga(Dr.l,Wl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new ht;ht.NAMES=C_;let dy=0;class Li extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=ao,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=Kh,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yh&&(i.blendSrc=this.blendSrc),this.blendDst!==Kh&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fs extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=f_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new X,Xl=new lt;let py=0;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:py++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Df,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),a=Dt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}}class P_ extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class L_ extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class or extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let my=0;const si=new pt,Rh=new qt,Qs=new X,$n=new Ui,aa=new Ui,hn=new X;class Oi extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A_(e)?L_:P_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ft().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new or(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];aa.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors($n.min,aa.min),$n.expandByPoint(hn),hn.addVectors($n.max,aa.max),$n.expandByPoint(hn)):($n.expandByPoint(aa.min),$n.expandByPoint(aa.max))}$n.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)hn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,g=u.count;d<g;d++)hn.fromBufferAttribute(u,d),f&&(Qs.fromBufferAttribute(e,d),hn.add(Qs)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let j=0;j<i.count;j++)u[j]=new X,f[j]=new X;const d=new X,g=new X,m=new X,_=new lt,y=new lt,M=new lt,T=new X,S=new X;function x(j,C,b){d.fromBufferAttribute(i,j),g.fromBufferAttribute(i,C),m.fromBufferAttribute(i,b),_.fromBufferAttribute(a,j),y.fromBufferAttribute(a,C),M.fromBufferAttribute(a,b),g.sub(d),m.sub(d),y.sub(_),M.sub(_);const F=1/(y.x*M.y-M.x*y.y);isFinite(F)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(m,-y.y).multiplyScalar(F),S.copy(m).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(F),u[j].add(T),u[C].add(T),u[b].add(T),f[j].add(S),f[C].add(S),f[b].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let j=0,C=I.length;j<C;++j){const b=I[j],F=b.start,le=b.count;for(let ne=F,ae=F+le;ne<ae;ne+=3)x(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const P=new X,R=new X,k=new X,B=new X;function U(j){k.fromBufferAttribute(s,j),B.copy(k);const C=u[j];P.copy(C),P.sub(k.multiplyScalar(k.dot(C))).normalize(),R.crossVectors(B,C);const F=R.dot(f[j])<0?-1:1;c.setXYZW(j,P.x,P.y,P.z,F)}for(let j=0,C=I.length;j<C;++j){const b=I[j],F=b.start,le=b.count;for(let ne=F,ae=F+le;ne<ae;ne+=3)U(e.getX(ne+0)),U(e.getX(ne+1)),U(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new X,a=new X,c=new X,u=new X,f=new X,d=new X,g=new X,m=new X;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),g.subVectors(c,a),m.subVectors(s,a),g.cross(m),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),u.add(g),f.add(g),d.add(g),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,a),m.subVectors(s,a),g.cross(m),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(u,f){const d=u.array,g=u.itemSize,m=u.normalized,_=new d.constructor(f.length*g);let y=0,M=0;for(let T=0,S=f.length;T<S;T++){u.isInterleavedBufferAttribute?y=f[T]*u.data.stride+u.offset:y=f[T]*g;for(let x=0;x<g;x++)_[M++]=d[y++]}return new In(_,g,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let g=0,m=d.length;g<m;g++){const _=d[g],y=e(_,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],g=[];for(let m=0,_=d.length;m<_;m++){const y=d[m];g.push(y.toJSON(e.data))}g.length>0&&(s[f]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const g=s[d];this.setAttribute(d,g.clone(t))}const a=e.morphAttributes;for(const d in a){const g=[],m=a[d];for(let _=0,y=m.length;_<y;_++)g.push(m[_].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ag=new pt,rs=new Aa,jl=new Fi,lg=new X,Yl=new X,Kl=new X,ql=new X,bh=new X,$l=new X,cg=new X,Zl=new X;class Vn extends qt{constructor(e=new Oi,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){$l.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const g=u[f],m=a[f];g!==0&&(bh.fromBufferAttribute(m,e),c?$l.addScaledVector(bh,g):$l.addScaledVector(bh.sub(t),g))}t.add($l)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(a),rs.copy(e.ray).recast(e.near),!(jl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(jl,lg)===null||rs.origin.distanceToSquared(lg)>(e.far-e.near)**2))&&(ag.copy(a).invert(),rs.copy(e.ray).applyMatrix4(ag),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,g=a.attributes.uv1,m=a.attributes.normal,_=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,T=_.length;M<T;M++){const S=_[M],x=c[S.materialIndex],I=Math.max(S.start,y.start),P=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let R=I,k=P;R<k;R+=3){const B=u.getX(R),U=u.getX(R+1),j=u.getX(R+2);s=Ql(this,x,e,i,d,g,m,B,U,j),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),T=Math.min(u.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const I=u.getX(S),P=u.getX(S+1),R=u.getX(S+2);s=Ql(this,c,e,i,d,g,m,I,P,R),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=_.length;M<T;M++){const S=_[M],x=c[S.materialIndex],I=Math.max(S.start,y.start),P=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let R=I,k=P;R<k;R+=3){const B=R,U=R+1,j=R+2;s=Ql(this,x,e,i,d,g,m,B,U,j),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const I=S,P=S+1,R=S+2;s=Ql(this,c,e,i,d,g,m,I,P,R),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function gy(o,e,t,i,s,a,c,u){let f;if(e.side===Gn?f=i.intersectTriangle(c,a,s,!0,u):f=i.intersectTriangle(s,a,c,e.side===ar,u),f===null)return null;Zl.copy(u),Zl.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Zl);return d<t.near||d>t.far?null:{distance:d,point:Zl.clone(),object:o}}function Ql(o,e,t,i,s,a,c,u,f,d){o.getVertexPosition(u,Yl),o.getVertexPosition(f,Kl),o.getVertexPosition(d,ql);const g=gy(o,e,t,i,Yl,Kl,ql,cg);if(g){const m=new X;yi.getBarycoord(cg,Yl,Kl,ql,m),s&&(g.uv=yi.getInterpolatedAttribute(s,u,f,d,m,new lt)),a&&(g.uv1=yi.getInterpolatedAttribute(a,u,f,d,m,new lt)),c&&(g.normal=yi.getInterpolatedAttribute(c,u,f,d,m,new X),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const _={a:u,b:f,c:d,normal:new X,materialIndex:0};yi.getNormal(Yl,Kl,ql,_.normal),g.face=_,g.barycoord=m}return g}class Ra extends Oi{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],d=[],g=[],m=[];let _=0,y=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new or(d,3)),this.setAttribute("normal",new or(g,3)),this.setAttribute("uv",new or(m,2));function M(T,S,x,I,P,R,k,B,U,j,C){const b=R/U,F=k/j,le=R/2,ne=k/2,ae=B/2,he=U+1,se=j+1;let ue=0,H=0;const oe=new X;for(let ie=0;ie<se;ie++){const N=ie*F-ne;for(let te=0;te<he;te++){const Be=te*b-le;oe[T]=Be*I,oe[S]=N*P,oe[x]=ae,d.push(oe.x,oe.y,oe.z),oe[T]=0,oe[S]=0,oe[x]=B>0?1:-1,g.push(oe.x,oe.y,oe.z),m.push(te/U),m.push(1-ie/j),ue+=1}}for(let ie=0;ie<j;ie++)for(let N=0;N<U;N++){const te=_+N+he*ie,Be=_+N+he*(ie+1),ke=_+(N+1)+he*(ie+1),Z=_+(N+1)+he*ie;f.push(te,Be,Z),f.push(Be,ke,Z),H+=6}u.addGroup(y,H,C),y+=H,_+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pn(o){const e={};for(let t=0;t<o.length;t++){const i=_o(o[t]);for(const s in i)e[s]=i[s]}return e}function _y(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function D_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const vy={clone:_o,merge:Pn};var xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xy,this.fragmentShader=yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=_y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class I_ extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new X,ug=new lt,hg=new lt;class Ln extends I_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,ug,hg),t.subVectors(hg,ug)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*i/d,s*=c.width/f,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,eo=1;class Sy extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(Js,eo,e,t);s.layers=this.layers,this.add(s);const a=new Ln(Js,eo,e,t);a.layers=this.layers,this.add(a);const c=new Ln(Js,eo,e,t);c.layers=this.layers,this.add(c);const u=new Ln(Js,eo,e,t);u.layers=this.layers,this.add(u);const f=new Ln(Js,eo,e,t);f.layers=this.layers,this.add(f);const d=new Ln(Js,eo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,f]=t;for(const d of t)this.remove(d);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,d,g]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(t,g),e.setRenderTarget(m,_,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class N_ extends dn{constructor(e=[],t=fo,i,s,a,c,u,f,d,g){super(e,t,i,s,a,c,u,f,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class My extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new N_(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ra(5,5,5),a=new zr({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:kr});a.uniforms.tEquirect.value=t;const c=new Vn(s,a),u=t.minFilter;return t.minFilter===ir&&(t.minFilter=Zn),new Sy(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class ds extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ey={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,i),x=this._getHandJoint(d,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=g.position.distanceTo(m.position),y=.02,M=.005;d.inputState.pinching&&_>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ty extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Df,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new X;class $f{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),a=Dt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $f(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fg=new X,dg=new Rt,pg=new Rt,Ay=new X,mg=new pt,Jl=new X,Ph=new Fi,gg=new pt,Lh=new Aa;class Ry extends Vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vm,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingBox.expandByPoint(Jl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingSphere.expandByPoint(Jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ph.copy(this.boundingSphere),Ph.applyMatrix4(s),e.ray.intersectsSphere(Ph)!==!1&&(gg.copy(s).invert(),Lh.copy(e.ray).applyMatrix4(gg),!(this.boundingBox!==null&&Lh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ex?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;dg.fromBufferAttribute(s.attributes.skinIndex,e),pg.fromBufferAttribute(s.attributes.skinWeight,e),fg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=pg.getComponent(a);if(c!==0){const u=dg.getComponent(a);mg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(Ay.copy(fg).applyMatrix4(mg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class U_ extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class F_ extends dn{constructor(e=null,t=1,i=1,s,a,c,u,f,d=Dn,g=Dn,m,_){super(null,c,u,f,d,g,s,a,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _g=new pt,by=new pt;class Zf{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new pt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:by;_g.multiplyMatrices(u,t[a]),_g.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Zf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new F_(t,e,e,ai,Si);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new U_),this.bones.push(c),this.boneInverses.push(new pt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class If extends In{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const to=new pt,vg=new pt,ec=[],xg=new Ui,Cy=new pt,la=new Vn,ca=new Fi;class Py extends Vn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new If(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Cy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,to),xg.copy(e.boundingBox).applyMatrix4(to),this.boundingBox.union(xg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,to),ca.copy(e.boundingSphere).applyMatrix4(to),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(i),e.ray.intersectsSphere(ca)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,to),vg.multiplyMatrices(i,to),la.matrixWorld=vg,la.raycast(e,ec);for(let c=0,u=ec.length;c<u;c++){const f=ec[c];f.instanceId=a,f.object=this,t.push(f)}ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new If(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new F_(new Float32Array(s*this.count),s,this.count,Wf,Si));const a=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,f=s*e;a[f]=u,a.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dh=new X,Ly=new X,Dy=new ft;class Ur{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Dh.subVectors(i,t).cross(Ly.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dy.getNormalMatrix(e),s=this.coplanarPoint(Dh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Fi,Iy=new lt(.5,.5),tc=new X;class Qf{constructor(e=new Ur,t=new Ur,i=new Ur,s=new Ur,a=new Ur,c=new Ur){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi,i=!1){const s=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],d=a[3],g=a[4],m=a[5],_=a[6],y=a[7],M=a[8],T=a[9],S=a[10],x=a[11],I=a[12],P=a[13],R=a[14],k=a[15];if(s[0].setComponents(d-c,y-g,x-M,k-I).normalize(),s[1].setComponents(d+c,y+g,x+M,k+I).normalize(),s[2].setComponents(d+u,y+m,x+T,k+P).normalize(),s[3].setComponents(d-u,y-m,x-T,k-P).normalize(),i)s[4].setComponents(f,_,S,R).normalize(),s[5].setComponents(d-f,y-_,x-S,k-R).normalize();else if(s[4].setComponents(d-f,y-_,x-S,k-R).normalize(),t===Pi)s[5].setComponents(d+f,y+_,x+S,k+R).normalize();else if(t===yc)s[5].setComponents(f,_,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const t=Iy.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(tc.x=s.normal.x>0?e.max.x:e.min.x,tc.y=s.normal.y>0?e.max.y:e.min.y,tc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O_ extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new X,Mc=new X,yg=new pt,ua=new Aa,nc=new Fi,Ih=new X,Sg=new X;class Jf extends qt{constructor(e=new Oi,t=new O_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Sc.fromBufferAttribute(t,s-1),Mc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new or(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(s),nc.radius+=a,e.ray.intersectsSphere(nc)===!1)return;yg.copy(s).invert(),ua.copy(e.ray).applyMatrix4(yg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){const y=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let T=y,S=M-1;T<S;T+=d){const x=g.getX(T),I=g.getX(T+1),P=ic(this,e,ua,f,x,I,T);P&&t.push(P)}if(this.isLineLoop){const T=g.getX(M-1),S=g.getX(y),x=ic(this,e,ua,f,T,S,M-1);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let T=y,S=M-1;T<S;T+=d){const x=ic(this,e,ua,f,T,T+1,T);x&&t.push(x)}if(this.isLineLoop){const T=ic(this,e,ua,f,M-1,y,M-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function ic(o,e,t,i,s,a,c){const u=o.geometry.attributes.position;if(Sc.fromBufferAttribute(u,s),Mc.fromBufferAttribute(u,a),t.distanceSqToSegment(Sc,Mc,Ih,Sg)>i)return;Ih.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Ih);if(!(d<e.near||d>e.far))return{distance:d,point:Sg.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const Mg=new X,Eg=new X;class Ny extends Jf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Mg.fromBufferAttribute(t,s),Eg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mg.distanceTo(Eg);e.setAttribute("lineDistance",new or(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uy extends Jf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class k_ extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tg=new pt,Nf=new Aa,rc=new Fi,sc=new X;class Fy extends qt{constructor(e=new Oi,t=new k_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),rc.radius+=a,e.ray.intersectsSphere(rc)===!1)return;Tg.copy(s).invert(),Nf.copy(e.ray).applyMatrix4(Tg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=i.index,m=i.attributes.position;if(d!==null){const _=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let M=_,T=y;M<T;M++){const S=d.getX(M);sc.fromBufferAttribute(m,S),wg(sc,S,f,s,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(m.count,c.start+c.count);for(let M=_,T=y;M<T;M++)sc.fromBufferAttribute(m,M),wg(sc,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function wg(o,e,t,i,s,a,c){const u=Nf.distanceSqToPoint(o);if(u<t){const f=new X;Nf.closestPointToPoint(o,f),f.applyMatrix4(i);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class B_ extends dn{constructor(e,t,i=ps,s,a,c,u=Dn,f=Dn,d,g=ya,m=1){if(g!==ya&&g!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:m};super(_,s,a,c,u,f,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ba extends Oi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(s),d=u+1,g=f+1,m=e/u,_=t/f,y=[],M=[],T=[],S=[];for(let x=0;x<g;x++){const I=x*_-c;for(let P=0;P<d;P++){const R=P*m-a;M.push(R,-I,0),T.push(0,0,1),S.push(P/u),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let I=0;I<u;I++){const P=I+d*x,R=I+d*(x+1),k=I+1+d*(x+1),B=I+1+d*x;y.push(P,R,B),y.push(R,k,B)}this.setIndex(y),this.setAttribute("position",new or(M,3)),this.setAttribute("normal",new or(T,3)),this.setAttribute("uv",new or(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=E_,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ki extends Tc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Oy extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ky extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function oc(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function By(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function zy(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ag(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let f=0;f!==e;++f)s[c++]=o[u+f]}return s}function z_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push(...c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Ca{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Hy extends Ca{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gm,endingEnd:Gm}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case Wm:a=e,u=2*t-i;break;case Xm:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case Wm:c=e,f=2*i-t;break;case Xm:c=1,f=i+s[1]-s[0];break;default:c=e-1,f=t}const d=(i-t)*.5,g=this.valueSize;this._weightPrev=d/(t-u),this._weightNext=d/(f-i),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,g=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),T=M*M,S=T*M,x=-_*S+2*_*T-_*M,I=(1+_)*S+(-1.5-2*_)*T+(-.5+_)*M+1,P=(-1-y)*S+(1.5+y)*T+.5*M,R=y*S-y*T;for(let k=0;k!==u;++k)a[k]=x*c[g+k]+I*c[d+k]+P*c[f+k]+R*c[m+k];return a}}class Vy extends Ca{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,g=(i-t)/(s-t),m=1-g;for(let _=0;_!==u;++_)a[_]=c[d+_]*m+c[f+_]*g;return a}}class Gy extends Ca{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ti{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oc(t,this.TimeBufferType),this.values=oc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oc(e.times,Array),values:oc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case Ea:t=this.InterpolantFactoryMethodLinear;break;case lh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=i[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(s!==void 0&&By(s))for(let u=0,f=s.length;u!==f;++u){const d=s[u];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lh,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const d=e[u],g=e[u+1];if(d!==g&&(u!==1||d!==e[0]))if(s)f=!0;else{const m=u*i,_=m-i,y=m+i;for(let M=0;M!==i;++M){const T=t[m+M];if(T!==t[_+M]||T!==t[y+M]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const m=u*i,_=c*i;for(let y=0;y!==i;++y)t[_+y]=t[m+y]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,f=c*i,d=0;d!==i;++d)t[f+d]=t[u+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Ea;class So extends Ti{constructor(e,t,i){super(e,t,i)}}So.prototype.ValueTypeName="bool";So.prototype.ValueBufferType=Array;So.prototype.DefaultInterpolation=Ma;So.prototype.InterpolantFactoryMethodLinear=void 0;So.prototype.InterpolantFactoryMethodSmooth=void 0;class H_ extends Ti{constructor(e,t,i,s){super(e,t,i,s)}}H_.prototype.ValueTypeName="color";class vo extends Ti{constructor(e,t,i,s){super(e,t,i,s)}}vo.prototype.ValueTypeName="number";class Wy extends Ca{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-t)/(s-t);let d=e*u;for(let g=d+u;d!==g;d+=4)Ii.slerpFlat(a,0,c,d-u,c,d,f);return a}}class xo extends Ti{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Wy(this.times,this.values,this.getValueSize(),e)}}xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends Ti{constructor(e,t,i){super(e,t,i)}}Mo.prototype.ValueTypeName="string";Mo.prototype.ValueBufferType=Array;Mo.prototype.DefaultInterpolation=Ma;Mo.prototype.InterpolantFactoryMethodLinear=void 0;Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends Ti{constructor(e,t,i,s){super(e,t,i,s)}}yo.prototype.ValueTypeName="vector";class Xy{constructor(e="",t=-1,i=[],s=Tx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ei(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Yy(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Ti.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],d=[];f.push((u+a-1)%a,u,(u+1)%a),d.push(0,1,0);const g=zy(f);f=Ag(f,1,g),d=Ag(d,1,g),!s&&f[0]===0&&(f.push(a),d.push(d[0])),c.push(new vo(".morphTargetInfluences["+t[u].name+"]",f,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const d=e[u],g=d.name.match(a);if(g&&g.length>1){const m=g[1];let _=s[m];_||(s[m]=_=[]),_.push(d)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(m,_,y,M,T){if(y.length!==0){const S=[],x=[];z_(y,S,x,M),S.length!==0&&T.push(new m(_,S,x))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let m=0;m<d.length;m++){const _=d[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let T=0;T<_[M].morphTargets.length;T++)y[_[M].morphTargets[T]]=-1;for(const T in y){const S=[],x=[];for(let I=0;I!==_[M].morphTargets.length;++I){const P=_[M];S.push(P.time),x.push(P.morphTarget===T?1:0)}s.push(new vo(".morphTargetInfluence["+T+"]",S,x))}f=y.length*c}else{const y=".bones["+t[m].name+"]";i(yo,y+".position",_,"pos",s),i(xo,y+".quaternion",_,"rot",s),i(yo,y+".scale",_,"scl",s)}}return s.length===0?null:new this(a,f,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jy(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return yo;case"color":return H_;case"quaternion":return xo;case"bool":case"boolean":return So;case"string":return Mo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Yy(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jy(o.type);if(o.times===void 0){const t=[],i=[];z_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const rr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ky{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(g){u++,a===!1&&s.onStart!==void 0&&s.onStart(g,c,u),a=!0},this.itemEnd=function(g){c++,s.onProgress!==void 0&&s.onProgress(g,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,m){return d.push(g,m),this},this.removeHandler=function(g){const m=d.indexOf(g);return m!==-1&&d.splice(m,2),this},this.getHandler=function(g){for(let m=0,_=d.length;m<_;m+=2){const y=d[m],M=d[m+1];if(y.global&&(y.lastIndex=0),y.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const qy=new Ky;class Eo{constructor(e){this.manager=e!==void 0?e:qy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const er={};class $y extends Error{constructor(e,t){super(e),this.response=t}}class V_ extends Eo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=rr.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(er[e]!==void 0){er[e].push({onLoad:t,onProgress:i,onError:s});return}er[e]=[],er[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=er[e],m=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let T=0;const S=new ReadableStream({start(x){I();function I(){m.read().then(({done:P,value:R})=>{if(P)x.close();else{T+=R.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:y});for(let B=0,U=g.length;B<U;B++){const j=g[B];j.onProgress&&j.onProgress(k)}x.enqueue(R),I()}},P=>{x.error(P)})}}});return new Response(S)}else throw new $y(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,u));case"json":return d.json();default:if(u==="")return d.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),_=m&&m[1]?m[1].toLowerCase():void 0,y=new TextDecoder(_);return d.arrayBuffer().then(M=>y.decode(M))}}}).then(d=>{rr.add(`file:${e}`,d);const g=er[e];delete er[e];for(let m=0,_=g.length;m<_;m++){const y=g[m];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=er[e];if(g===void 0)throw this.manager.itemError(e),d;delete er[e];for(let m=0,_=g.length;m<_;m++){const y=g[m];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const no=new WeakMap;class Zy extends Eo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=rr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let m=no.get(c);m===void 0&&(m=[],no.set(c,m)),m.push({onLoad:t,onError:s})}return c}const u=Ta("img");function f(){g(),t&&t(this);const m=no.get(this)||[];for(let _=0;_<m.length;_++){const y=m[_];y.onLoad&&y.onLoad(this)}no.delete(this),a.manager.itemEnd(e)}function d(m){g(),s&&s(m),rr.remove(`image:${e}`);const _=no.get(this)||[];for(let y=0;y<_.length;y++){const M=_[y];M.onError&&M.onError(m)}no.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){u.removeEventListener("load",f,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),rr.add(`image:${e}`,u),a.manager.itemStart(e),u.src=e,u}}class Qy extends Eo{constructor(e){super(e)}load(e,t,i,s){const a=new dn,c=new Zy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class ed extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Nh=new pt,Rg=new X,bg=new X;class td{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qf,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Rg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rg),bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bg),t.updateMatrixWorld(),Nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jy extends td{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=go*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class G_ extends ed{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Jy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cg=new pt,ha=new X,Uh=new X;class eS extends td{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),i.position.copy(ha),Uh.copy(i.position),Uh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uh),i.updateMatrixWorld(),s.makeTranslation(-ha.x,-ha.y,-ha.z),Cg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cg,i.coordinateSystem,i.reversedDepth)}}class tS extends ed{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new eS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nd extends I_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=g*this.view.offsetY,f=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nS extends td{constructor(){super(new nd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iS extends ed{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new nS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _a{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Fh=new WeakMap;class rS extends Eo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=rr.get(`image-bitmap:${e}`);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(d=>{if(Fh.has(c)===!0)s&&s(Fh.get(c)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(d),a.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader,u.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const f=fetch(e,u).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return rr.add(`image-bitmap:${e}`,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){s&&s(d),Fh.set(f,d),rr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});rr.add(`image-bitmap:${e}`,f),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class sS extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const id="\\[\\]\\.:\\/",oS=new RegExp("["+id+"]","g"),rd="[^"+id+"]",aS="[^"+id.replace("\\.","")+"]",lS=/((?:WC+[\/:])*)/.source.replace("WC",rd),cS=/(WCOD+)?/.source.replace("WCOD",aS),uS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rd),hS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rd),fS=new RegExp("^"+lS+cS+uS+hS+"$"),dS=["material","materials","bones","map"];class pS{constructor(e,t,i){const s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class It{constructor(e,t,i){this.path=t,this.parsedPath=i||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,i):new It(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oS,"")}static parseTrackName(e){const t=fS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);dS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[s];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?u=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=pS;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pg{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mS extends gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Lg(o,e,t,i){const s=gS(i);switch(t){case v_:return o*e;case Wf:return o*e/s.components*s.byteLength;case Xf:return o*e/s.components*s.byteLength;case y_:return o*e*2/s.components*s.byteLength;case jf:return o*e*2/s.components*s.byteLength;case x_:return o*e*3/s.components*s.byteLength;case ai:return o*e*4/s.components*s.byteLength;case Yf:return o*e*4/s.components*s.byteLength;case fc:case dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case of:case lf:return Math.max(o,16)*Math.max(e,8)/4;case sf:case af:return Math.max(o,8)*Math.max(e,8)/2;case cf:case uf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case gc:case Af:case Rf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case S_:case bf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Cf:case Pf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gS(o){switch(o){case Di:case m_:return{byteLength:1,components:1};case va:case g_:case wa:return{byteLength:2,components:1};case Vf:case Gf:return{byteLength:2,components:4};case ps:case Hf:case Si:return{byteLength:4,components:1};case __:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function _S(o){const e=new WeakMap;function t(u,f){const d=u.array,g=u.usage,m=d.byteLength,_=o.createBuffer();o.bindBuffer(f,_),o.bufferData(f,d,g),u.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,d){const g=f.array,m=f.updateRanges;if(o.bindBuffer(d,u),m.length===0)o.bufferSubData(d,0,g);else{m.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<m.length;y++){const M=m[_],T=m[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,m[_]=T)}m.length=_+1;for(let y=0,M=m.length;y<M;y++){const T=m[y];o.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(o.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:a,update:c}}var vS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ES=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KS="gl_FragColor = linearToOutputTexel( gl_FragColor );",qS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:vS,alphahash_pars_fragment:xS,alphamap_fragment:yS,alphamap_pars_fragment:SS,alphatest_fragment:MS,alphatest_pars_fragment:ES,aomap_fragment:TS,aomap_pars_fragment:wS,batching_pars_vertex:AS,batching_vertex:RS,begin_vertex:bS,beginnormal_vertex:CS,bsdfs:PS,iridescence_fragment:LS,bumpmap_pars_fragment:DS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:NS,clipping_planes_pars_vertex:US,clipping_planes_vertex:FS,color_fragment:OS,color_pars_fragment:kS,color_pars_vertex:BS,color_vertex:zS,common:HS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:GS,displacementmap_pars_vertex:WS,displacementmap_vertex:XS,emissivemap_fragment:jS,emissivemap_pars_fragment:YS,colorspace_fragment:KS,colorspace_pars_fragment:qS,envmap_fragment:$S,envmap_common_pars_fragment:ZS,envmap_pars_fragment:QS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:uM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:hM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:_M,lights_fragment_maps:vM,lights_fragment_end:xM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:EM,map_fragment:TM,map_pars_fragment:wM,map_particle_fragment:AM,map_particle_pars_fragment:RM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:CM,morphinstance_vertex:PM,morphcolor_vertex:LM,morphnormal_vertex:DM,morphtarget_pars_vertex:IM,morphtarget_vertex:NM,normal_fragment_begin:UM,normal_fragment_maps:FM,normal_pars_fragment:OM,normal_pars_vertex:kM,normal_vertex:BM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:jM,premultiplied_alpha_fragment:YM,project_vertex:KM,dithering_fragment:qM,dithering_pars_fragment:$M,roughnessmap_fragment:ZM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:eE,shadowmap_vertex:tE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:rE,skinning_vertex:sE,skinnormal_vertex:oE,specularmap_fragment:aE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:hE,transmission_pars_fragment:fE,uv_pars_fragment:dE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:_E,background_frag:vE,backgroundCube_vert:xE,backgroundCube_frag:yE,cube_vert:SE,cube_frag:ME,depth_vert:EE,depth_frag:TE,distanceRGBA_vert:wE,distanceRGBA_frag:AE,equirect_vert:RE,equirect_frag:bE,linedashed_vert:CE,linedashed_frag:PE,meshbasic_vert:LE,meshbasic_frag:DE,meshlambert_vert:IE,meshlambert_frag:NE,meshmatcap_vert:UE,meshmatcap_frag:FE,meshnormal_vert:OE,meshnormal_frag:kE,meshphong_vert:BE,meshphong_frag:zE,meshphysical_vert:HE,meshphysical_frag:VE,meshtoon_vert:GE,meshtoon_frag:WE,points_vert:XE,points_frag:jE,shadow_vert:YE,shadow_frag:KE,sprite_vert:qE,sprite_frag:$E},Pe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ci={basic:{uniforms:Pn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Pn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Pn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Pn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Pn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Pn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Pn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Pn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Pn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Pn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Pn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Pn([Pe.common,Pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Pn([Pe.lights,Pe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ci.physical={uniforms:Pn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const ac={r:0,b:0,g:0},os=new Ni,ZE=new pt;function QE(o,e,t,i,s,a,c){const u=new ht(0);let f=a===!0?0:1,d,g,m=null,_=0,y=null;function M(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?t:e).get(R)),R}function T(P){let R=!1;const k=M(P);k===null?x(u,f):k&&k.isColor&&(x(k,1),R=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(P,R){const k=M(R);k&&(k.isCubeTexture||k.mapping===Ec)?(g===void 0&&(g=new Vn(new Ra(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:_o(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,U,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),os.copy(R.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(os)),g.material.toneMapped=Tt.getTransfer(k.colorSpace)!==Ut,(m!==k||_!==k.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,m=k,_=k.version,y=o.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(d===void 0&&(d=new Vn(new ba(2,2),new zr({name:"BackgroundMaterial",uniforms:_o(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=k,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(k.colorSpace)!==Ut,k.matrixAutoUpdate===!0&&k.updateMatrix(),d.material.uniforms.uvTransform.value.copy(k.matrix),(m!==k||_!==k.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,m=k,_=k.version,y=o.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function x(P,R){P.getRGB(ac,D_(o)),i.buffers.color.setClear(ac.r,ac.g,ac.b,R,c)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,R=1){u.set(P),f=R,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,x(u,f)},render:T,addToRenderList:S,dispose:I}}function JE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(b,F,le,ne,ae){let he=!1;const se=m(ne,le,F);a!==se&&(a=se,d(a.object)),he=y(b,ne,le,ae),he&&M(b,ne,le,ae),ae!==null&&e.update(ae,o.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,R(b,F,le,ne),ae!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function f(){return o.createVertexArray()}function d(b){return o.bindVertexArray(b)}function g(b){return o.deleteVertexArray(b)}function m(b,F,le){const ne=le.wireframe===!0;let ae=i[b.id];ae===void 0&&(ae={},i[b.id]=ae);let he=ae[F.id];he===void 0&&(he={},ae[F.id]=he);let se=he[ne];return se===void 0&&(se=_(f()),he[ne]=se),se}function _(b){const F=[],le=[],ne=[];for(let ae=0;ae<t;ae++)F[ae]=0,le[ae]=0,ne[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:le,attributeDivisors:ne,object:b,attributes:{},index:null}}function y(b,F,le,ne){const ae=a.attributes,he=F.attributes;let se=0;const ue=le.getAttributes();for(const H in ue)if(ue[H].location>=0){const ie=ae[H];let N=he[H];if(N===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(N=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(N=b.instanceColor)),ie===void 0||ie.attribute!==N||N&&ie.data!==N.data)return!0;se++}return a.attributesNum!==se||a.index!==ne}function M(b,F,le,ne){const ae={},he=F.attributes;let se=0;const ue=le.getAttributes();for(const H in ue)if(ue[H].location>=0){let ie=he[H];ie===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const N={};N.attribute=ie,ie&&ie.data&&(N.data=ie.data),ae[H]=N,se++}a.attributes=ae,a.attributesNum=se,a.index=ne}function T(){const b=a.newAttributes;for(let F=0,le=b.length;F<le;F++)b[F]=0}function S(b){x(b,0)}function x(b,F){const le=a.newAttributes,ne=a.enabledAttributes,ae=a.attributeDivisors;le[b]=1,ne[b]===0&&(o.enableVertexAttribArray(b),ne[b]=1),ae[b]!==F&&(o.vertexAttribDivisor(b,F),ae[b]=F)}function I(){const b=a.newAttributes,F=a.enabledAttributes;for(let le=0,ne=F.length;le<ne;le++)F[le]!==b[le]&&(o.disableVertexAttribArray(le),F[le]=0)}function P(b,F,le,ne,ae,he,se){se===!0?o.vertexAttribIPointer(b,F,le,ae,he):o.vertexAttribPointer(b,F,le,ne,ae,he)}function R(b,F,le,ne){T();const ae=ne.attributes,he=le.getAttributes(),se=F.defaultAttributeValues;for(const ue in he){const H=he[ue];if(H.location>=0){let oe=ae[ue];if(oe===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){const ie=oe.normalized,N=oe.itemSize,te=e.get(oe);if(te===void 0)continue;const Be=te.buffer,ke=te.type,Z=te.bytesPerElement,pe=ke===o.INT||ke===o.UNSIGNED_INT||oe.gpuType===Hf;if(oe.isInterleavedBufferAttribute){const de=oe.data,Re=de.stride,Le=oe.offset;if(de.isInstancedInterleavedBuffer){for(let Ze=0;Ze<H.locationSize;Ze++)x(H.location+Ze,de.meshPerAttribute);b.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ze=0;Ze<H.locationSize;Ze++)S(H.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Be);for(let Ze=0;Ze<H.locationSize;Ze++)P(H.location+Ze,N/H.locationSize,ke,ie,Re*Z,(Le+N/H.locationSize*Ze)*Z,pe)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)x(H.location+de,oe.meshPerAttribute);b.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<H.locationSize;de++)S(H.location+de);o.bindBuffer(o.ARRAY_BUFFER,Be);for(let de=0;de<H.locationSize;de++)P(H.location+de,N/H.locationSize,ke,ie,N*Z,N/H.locationSize*de*Z,pe)}}else if(se!==void 0){const ie=se[ue];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(H.location,ie);break;case 3:o.vertexAttrib3fv(H.location,ie);break;case 4:o.vertexAttrib4fv(H.location,ie);break;default:o.vertexAttrib1fv(H.location,ie)}}}}I()}function k(){j();for(const b in i){const F=i[b];for(const le in F){const ne=F[le];for(const ae in ne)g(ne[ae].object),delete ne[ae];delete F[le]}delete i[b]}}function B(b){if(i[b.id]===void 0)return;const F=i[b.id];for(const le in F){const ne=F[le];for(const ae in ne)g(ne[ae].object),delete ne[ae];delete F[le]}delete i[b.id]}function U(b){for(const F in i){const le=i[F];if(le[b.id]===void 0)continue;const ne=le[b.id];for(const ae in ne)g(ne[ae].object),delete ne[ae];delete le[b.id]}}function j(){C(),c=!0,a!==s&&(a=s,d(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:j,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:B,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:I}}function eT(o,e,t){let i;function s(d){i=d}function a(d,g){o.drawArrays(i,d,g),t.update(g,i,1)}function c(d,g,m){m!==0&&(o.drawArraysInstanced(i,d,g,m),t.update(g,i,m))}function u(d,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,g,0,m);let y=0;for(let M=0;M<m;M++)y+=g[M];t.update(y,i,1)}function f(d,g,m,_){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)c(d[M],g[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(i,d,0,g,0,_,0,m);let M=0;for(let T=0;T<m;T++)M+=g[T]*_[T];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function tT(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==ai&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const j=U===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Di&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Si&&!j)}function f(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=f(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const m=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:m,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:k,maxSamples:B}}function nT(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Ur,u=new ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const y=m.length!==0||_||i!==0||s;return s=_,i=m.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,_){t=g(m,_,0)},this.setState=function(m,_,y){const M=m.clippingPlanes,T=m.clipIntersection,S=m.clipShadows,x=o.get(m);if(!s||M===null||M.length===0||a&&!S)a?g(null):d();else{const I=a?0:i,P=I*4;let R=x.clippingState||null;f.value=R,R=g(M,_,P,y);for(let k=0;k!==P;++k)R[k]=t[k];x.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(m,_,y,M){const T=m!==null?m.length:0;let S=null;if(T!==0){if(S=f.value,M!==!0||S===null){const x=y+T*4,I=_.matrixWorldInverse;u.getNormalMatrix(I),(S===null||S.length<x)&&(S=new Float32Array(x));for(let P=0,R=y;P!==T;++P,R+=4)c.copy(m[P]).applyMatrix4(I,u),c.normal.toArray(S,R),S[R+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function iT(o){let e=new WeakMap;function t(c,u){return u===nf?c.mapping=fo:u===rf&&(c.mapping=po),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===nf||u===rf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new My(f.height);return d.fromEquirectangularTexture(o,c),e.set(c,d),c.addEventListener("dispose",s),t(d.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const so=4,Dg=[.125,.215,.35,.446,.526,.582],hs=20,Oh=new nd,Ig=new ht;let kh=null,Bh=0,zh=0,Hh=!1;const cs=(1+Math.sqrt(5))/2,io=1/cs,Ng=[new X(-cs,io,0),new X(cs,io,0),new X(-io,0,cs),new X(io,0,cs),new X(0,cs,-io),new X(0,cs,io),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],rT=new X;class Ug{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,a={}){const{size:c=256,position:u=rT}=a;kh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,s,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,Bh,zh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:wa,format:ai,colorSpace:Nn,depthBuffer:!1},s=Fg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(a)),this._blurMaterial=oT(a,e,t)}return s}_compileMaterial(e){const t=new Vn(this._lodPlanes[0],e);this._renderer.compile(t,Oh)}_sceneToCubeUV(e,t,i,s,a){const f=new Ln(90,1,t,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,y=m.toneMapping;m.getClearColor(Ig),m.toneMapping=Br,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null));const T=new fs({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),S=new Vn(new Ra,T);let x=!1;const I=e.background;I?I.isColor&&(T.color.copy(I),e.background=null,x=!0):(T.color.copy(Ig),x=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(f.up.set(0,d[P],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+g[P],a.y,a.z)):R===1?(f.up.set(0,0,d[P]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+g[P],a.z)):(f.up.set(0,d[P],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+g[P]));const k=this._cubeSize;lc(s,R*k,P>2?k:0,k,k),m.setRenderTarget(s),x&&m.render(S,f),m.render(e,f)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=y,m.autoClear=_,e.background=I}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fo||e.mapping===po;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Vn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;lc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Oh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Ng[(s-a-1)%Ng.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,m=new Vn(this._lodPlanes[s],d),_=d.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*hs-1),T=a/M,S=isFinite(a)?1+Math.floor(g*T):hs;S>hs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${hs}`);const x=[];let I=0;for(let U=0;U<hs;++U){const j=U/T,C=Math.exp(-j*j/2);x.push(C),U===0?I+=C:U<S&&(I+=2*C)}for(let U=0;U<x.length;U++)x[U]=x[U]/I;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-i;const R=this._sizeLods[s],k=3*R*(s>P-so?s-P+so:0),B=4*(this._cubeSize-R);lc(t,k,B,3*R,2*R),f.setRenderTarget(t),f.render(m,Oh)}}function sT(o){const e=[],t=[],i=[];let s=o;const a=o-so+1+Dg.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let f=1/u;c>o-so?f=Dg[c-o+so-1]:c===0&&(f=0),i.push(f);const d=1/(u-2),g=-d,m=1+d,_=[g,g,m,g,m,m,g,g,m,m,g,m],y=6,M=6,T=3,S=2,x=1,I=new Float32Array(T*M*y),P=new Float32Array(S*M*y),R=new Float32Array(x*M*y);for(let B=0;B<y;B++){const U=B%3*2/3-1,j=B>2?0:-1,C=[U,j,0,U+2/3,j,0,U+2/3,j+1,0,U,j,0,U+2/3,j+1,0,U,j+1,0];I.set(C,T*M*B),P.set(_,S*M*B);const b=[B,B,B,B,B,B];R.set(b,x*M*B)}const k=new Oi;k.setAttribute("position",new In(I,T)),k.setAttribute("uv",new In(P,S)),k.setAttribute("faceIndex",new In(R,x)),e.push(k),s>so&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fg(o,e,t){const i=new ms(o,e,t);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function oT(o,e,t){const i=new Float32Array(hs),s=new X(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Og(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function kg(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aT(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===nf||f===rf,g=f===fo||f===po;if(d||g){let m=e.get(u);const _=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new Ug(o)),m=d?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return d&&y&&y.height>0||g&&y&&s(y)?(t===null&&(t=new Ug(o)),m=d?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function s(u){let f=0;const d=6;for(let g=0;g<d;g++)u[g]!==void 0&&f++;return f===d}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function lT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cT(o,e,t,i){const s={},a=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete s[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(m,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function f(m){const _=m.attributes;for(const y in _)e.update(_[y],o.ARRAY_BUFFER)}function d(m){const _=[],y=m.index,M=m.attributes.position;let T=0;if(y!==null){const I=y.array;T=y.version;for(let P=0,R=I.length;P<R;P+=3){const k=I[P+0],B=I[P+1],U=I[P+2];_.push(k,B,B,U,U,k)}}else if(M!==void 0){const I=M.array;T=M.version;for(let P=0,R=I.length/3-1;P<R;P+=3){const k=P+0,B=P+1,U=P+2;_.push(k,B,B,U,U,k)}}else return;const S=new(A_(_)?L_:P_)(_,1);S.version=T;const x=a.get(m);x&&e.remove(x),a.set(m,S)}function g(m){const _=a.get(m);if(_){const y=m.index;y!==null&&_.version<y.version&&d(m)}else d(m);return a.get(m)}return{get:u,update:f,getWireframeAttribute:g}}function uT(o,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function f(_,y){o.drawElements(i,y,a,_*c),t.update(y,i,1)}function d(_,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,_*c,M),t.update(y,i,M))}function g(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function m(_,y,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)d(_[x]/c,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,_,0,T,0,M);let x=0;for(let I=0;I<M;I++)x+=y[I]*T[I];t.update(x,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=m}function hT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fT(o,e,t){const i=new WeakMap,s=new Rt;function a(c,u,f){const d=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let _=i.get(u);if(_===void 0||_.count!==m){let b=function(){j.dispose(),i.delete(u),u.removeEventListener("dispose",b)};var y=b;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),S===!0&&(R=3);let k=u.attributes.position.count*R,B=1;k>e.maxTextureSize&&(B=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const U=new Float32Array(k*B*4*m),j=new R_(U,k,B,m);j.type=Si,j.needsUpdate=!0;const C=R*4;for(let F=0;F<m;F++){const le=x[F],ne=I[F],ae=P[F],he=k*B*4*F;for(let se=0;se<le.count;se++){const ue=se*C;M===!0&&(s.fromBufferAttribute(le,se),U[he+ue+0]=s.x,U[he+ue+1]=s.y,U[he+ue+2]=s.z,U[he+ue+3]=0),T===!0&&(s.fromBufferAttribute(ne,se),U[he+ue+4]=s.x,U[he+ue+5]=s.y,U[he+ue+6]=s.z,U[he+ue+7]=0),S===!0&&(s.fromBufferAttribute(ae,se),U[he+ue+8]=s.x,U[he+ue+9]=s.y,U[he+ue+10]=s.z,U[he+ue+11]=ae.itemSize===4?s.w:1)}}_={count:m,texture:j,size:new lt(k,B)},i.set(u,_),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const T=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",T),f.getUniforms().setValue(o,"morphTargetInfluences",d)}f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function dT(o,e,t,i){let s=new WeakMap;function a(f){const d=i.render.frame,g=f.geometry,m=e.get(f,g);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return m}function c(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const X_=new dn,Bg=new B_(1,1),j_=new R_,Y_=new sy,K_=new N_,zg=[],Hg=[],Vg=new Float32Array(16),Gg=new Float32Array(9),Wg=new Float32Array(4);function To(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=zg[s];if(a===void 0&&(a=new Float32Array(s),zg[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function on(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function an(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function wc(o,e){let t=Hg[e];t===void 0&&(t=new Int32Array(e),Hg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function pT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function mT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2fv(this.addr,e),an(t,e)}}function gT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;o.uniform3fv(this.addr,e),an(t,e)}}function _T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4fv(this.addr,e),an(t,e)}}function vT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Wg.set(i),o.uniformMatrix2fv(this.addr,!1,Wg),an(t,i)}}function xT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Gg.set(i),o.uniformMatrix3fv(this.addr,!1,Gg),an(t,i)}}function yT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Vg.set(i),o.uniformMatrix4fv(this.addr,!1,Vg),an(t,i)}}function ST(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function MT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2iv(this.addr,e),an(t,e)}}function ET(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;o.uniform3iv(this.addr,e),an(t,e)}}function TT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4iv(this.addr,e),an(t,e)}}function wT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function AT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;o.uniform2uiv(this.addr,e),an(t,e)}}function RT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;o.uniform3uiv(this.addr,e),an(t,e)}}function bT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;o.uniform4uiv(this.addr,e),an(t,e)}}function CT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Bg.compareFunction=T_,a=Bg):a=X_,t.setTexture2D(e||a,s)}function PT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Y_,s)}function LT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||K_,s)}function DT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||j_,s)}function IT(o){switch(o){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return _T;case 35674:return vT;case 35675:return xT;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return wT;case 36294:return AT;case 36295:return RT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return DT}}function NT(o,e){o.uniform1fv(this.addr,e)}function UT(o,e){const t=To(e,this.size,2);o.uniform2fv(this.addr,t)}function FT(o,e){const t=To(e,this.size,3);o.uniform3fv(this.addr,t)}function OT(o,e){const t=To(e,this.size,4);o.uniform4fv(this.addr,t)}function kT(o,e){const t=To(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function BT(o,e){const t=To(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function zT(o,e){const t=To(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function HT(o,e){o.uniform1iv(this.addr,e)}function VT(o,e){o.uniform2iv(this.addr,e)}function GT(o,e){o.uniform3iv(this.addr,e)}function WT(o,e){o.uniform4iv(this.addr,e)}function XT(o,e){o.uniform1uiv(this.addr,e)}function jT(o,e){o.uniform2uiv(this.addr,e)}function YT(o,e){o.uniform3uiv(this.addr,e)}function KT(o,e){o.uniform4uiv(this.addr,e)}function qT(o,e,t){const i=this.cache,s=e.length,a=wc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||X_,a[c])}function $T(o,e,t){const i=this.cache,s=e.length,a=wc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Y_,a[c])}function ZT(o,e,t){const i=this.cache,s=e.length,a=wc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||K_,a[c])}function QT(o,e,t){const i=this.cache,s=e.length,a=wc(t,s);on(i,a)||(o.uniform1iv(this.addr,a),an(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||j_,a[c])}function JT(o){switch(o){case 5126:return NT;case 35664:return UT;case 35665:return FT;case 35666:return OT;case 35674:return kT;case 35675:return BT;case 35676:return zT;case 5124:case 35670:return HT;case 35667:case 35671:return VT;case 35668:case 35672:return GT;case 35669:case 35673:return WT;case 5125:return XT;case 36294:return jT;case 36295:return YT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return QT}}class ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=IT(t.type)}}class tw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JT(t.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function Xg(o,e){o.seq.push(e),o.map[e.id]=e}function iw(o,e,t){const i=o.name,s=i.length;for(Vh.lastIndex=0;;){const a=Vh.exec(i),c=Vh.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===s){Xg(t,d===void 0?new ew(u,o,e):new tw(u,o,e));break}else{let m=t.map[u];m===void 0&&(m=new nw(u),Xg(t,m)),t=m}}}class _c{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);iw(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function jg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const rw=37297;let sw=0;function ow(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Yg=new ft;function aw(o){Tt._getMatrix(Yg,Tt.workingColorSpace,o);const e=`mat3( ${Yg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(o)){case xc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Kg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+ow(o.getShaderSource(e),u)}else return a}function lw(o,e){const t=aw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cw(o,e){let t;switch(e){case gx:t="Linear";break;case _x:t="Reinhard";break;case vx:t="Cineon";break;case xx:t="ACESFilmic";break;case Sx:t="AgX";break;case Mx:t="Neutral";break;case yx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cc=new X;function uw(){Tt.getLuminanceCoefficients(cc);const o=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function fw(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function pa(o){return o!==""}function qg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $g(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uf(o){return o.replace(pw,gw)}const mw=new Map;function gw(o,e){let t=dt[e];if(t===void 0){const i=mw.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uf(t)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(o){return o.replace(_w,vw)}function vw(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Qg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xw(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===u_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===h_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function yw(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case fo:case po:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function Mw(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case f_:e="ENVMAP_BLENDING_MULTIPLY";break;case px:e="ENVMAP_BLENDING_MIX";break;case mx:e="ENVMAP_BLENDING_ADD";break}return e}function Ew(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Tw(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=xw(t),d=yw(t),g=Sw(t),m=Mw(t),_=Ew(t),y=hw(t),M=fw(a),T=s.createProgram();let S,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(pa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(pa).join(`
`),x.length>0&&(x+=`
`)):(S=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),x=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Br?"#define TONE_MAPPING":"",t.toneMapping!==Br?dt.tonemapping_pars_fragment:"",t.toneMapping!==Br?cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,lw("linearToOutputTexel",t.outputColorSpace),uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),c=Uf(c),c=qg(c,t),c=$g(c,t),u=Uf(u),u=qg(u,t),u=$g(u,t),c=Zg(c),u=Zg(u),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=I+S+c,R=I+x+u,k=jg(s,s.VERTEX_SHADER,P),B=jg(s,s.FRAGMENT_SHADER,R);s.attachShader(T,k),s.attachShader(T,B),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function U(F){if(o.debug.checkShaderErrors){const le=s.getProgramInfoLog(T)||"",ne=s.getShaderInfoLog(k)||"",ae=s.getShaderInfoLog(B)||"",he=le.trim(),se=ne.trim(),ue=ae.trim();let H=!0,oe=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,T,k,B);else{const ie=Kg(s,k,"vertex"),N=Kg(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+he+`
`+ie+`
`+N)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(se===""||ue==="")&&(oe=!1);oe&&(F.diagnostics={runnable:H,programLog:he,vertexShader:{log:se,prefix:S},fragmentShader:{log:ue,prefix:x}})}s.deleteShader(k),s.deleteShader(B),j=new _c(s,T),C=dw(s,T)}let j;this.getUniforms=function(){return j===void 0&&U(this),j};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(T,rw)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=B,this}let ww=0;class Aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rw(e),t.set(e,i)),i}}class Rw{constructor(e){this.id=ww++,this.code=e,this.usedTimes=0}}function bw(o,e,t,i,s,a,c){const u=new b_,f=new Aw,d=new Set,g=[],m=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,b,F,le,ne){const ae=le.fog,he=ne.geometry,se=C.isMeshStandardMaterial?le.environment:null,ue=(C.isMeshStandardMaterial?t:e).get(C.envMap||se),H=ue&&ue.mapping===Ec?ue.image.height:null,oe=M[C.type];C.precision!==null&&(y=s.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const ie=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=ie!==void 0?ie.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let Be,ke,Z,pe;if(oe){const Mt=Ci[oe];Be=Mt.vertexShader,ke=Mt.fragmentShader}else Be=C.vertexShader,ke=C.fragmentShader,f.update(C),Z=f.getVertexShaderID(C),pe=f.getFragmentShaderID(C);const de=o.getRenderTarget(),Re=o.state.buffers.depth.getReversed(),Le=ne.isInstancedMesh===!0,Ze=ne.isBatchedMesh===!0,zt=!!C.map,yt=!!C.matcap,O=!!ue,bt=!!C.aoMap,Qe=!!C.lightMap,St=!!C.bumpMap,qe=!!C.normalMap,Ot=!!C.displacementMap,Fe=!!C.emissiveMap,ct=!!C.metalnessMap,Vt=!!C.roughnessMap,Gt=C.anisotropy>0,L=C.clearcoat>0,w=C.dispersion>0,q=C.iridescence>0,ce=C.sheen>0,_e=C.transmission>0,re=Gt&&!!C.anisotropyMap,Ye=L&&!!C.clearcoatMap,we=L&&!!C.clearcoatNormalMap,ze=L&&!!C.clearcoatRoughnessMap,Ke=q&&!!C.iridescenceMap,Ee=q&&!!C.iridescenceThicknessMap,De=ce&&!!C.sheenColorMap,it=ce&&!!C.sheenRoughnessMap,Xe=!!C.specularMap,be=!!C.specularColorMap,ut=!!C.specularIntensityMap,V=_e&&!!C.transmissionMap,Se=_e&&!!C.thicknessMap,Ae=!!C.gradientMap,Ie=!!C.alphaMap,xe=C.alphaTest>0,fe=!!C.alphaHash,Ge=!!C.extensions;let at=Br;C.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(at=o.toneMapping);const Pt={shaderID:oe,shaderType:C.type,shaderName:C.name,vertexShader:Be,fragmentShader:ke,defines:C.defines,customVertexShaderID:Z,customFragmentShaderID:pe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&ne._colorsTexture!==null,instancing:Le,instancingColor:Le&&ne.instanceColor!==null,instancingMorph:Le&&ne.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Nn,alphaToCoverage:!!C.alphaToCoverage,map:zt,matcap:yt,envMap:O,envMapMode:O&&ue.mapping,envMapCubeUVHeight:H,aoMap:bt,lightMap:Qe,bumpMap:St,normalMap:qe,displacementMap:_&&Ot,emissiveMap:Fe,normalMapObjectSpace:qe&&C.normalMapType===bx,normalMapTangentSpace:qe&&C.normalMapType===E_,metalnessMap:ct,roughnessMap:Vt,anisotropy:Gt,anisotropyMap:re,clearcoat:L,clearcoatMap:Ye,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:w,iridescence:q,iridescenceMap:Ke,iridescenceThicknessMap:Ee,sheen:ce,sheenColorMap:De,sheenRoughnessMap:it,specularMap:Xe,specularColorMap:be,specularIntensityMap:ut,transmission:_e,transmissionMap:V,thicknessMap:Se,gradientMap:Ae,opaque:C.transparent===!1&&C.blending===ao&&C.alphaToCoverage===!1,alphaMap:Ie,alphaTest:xe,alphaHash:fe,combine:C.combine,mapUv:zt&&T(C.map.channel),aoMapUv:bt&&T(C.aoMap.channel),lightMapUv:Qe&&T(C.lightMap.channel),bumpMapUv:St&&T(C.bumpMap.channel),normalMapUv:qe&&T(C.normalMap.channel),displacementMapUv:Ot&&T(C.displacementMap.channel),emissiveMapUv:Fe&&T(C.emissiveMap.channel),metalnessMapUv:ct&&T(C.metalnessMap.channel),roughnessMapUv:Vt&&T(C.roughnessMap.channel),anisotropyMapUv:re&&T(C.anisotropyMap.channel),clearcoatMapUv:Ye&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:De&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:it&&T(C.sheenRoughnessMap.channel),specularMapUv:Xe&&T(C.specularMap.channel),specularColorMapUv:be&&T(C.specularColorMap.channel),specularIntensityMapUv:ut&&T(C.specularIntensityMap.channel),transmissionMapUv:V&&T(C.transmissionMap.channel),thicknessMapUv:Se&&T(C.thicknessMap.channel),alphaMapUv:Ie&&T(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(qe||Gt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!he.attributes.uv&&(zt||Ie),fog:!!ae,useFog:C.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Re,skinning:ne.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:at,decodeVideoTexture:zt&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Ut,decodeVideoTextureEmissive:Fe&&C.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(C.emissiveMap.colorSpace)===Ut,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===vi,flipSided:C.side===Gn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ge&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&C.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pt.vertexUv1s=d.has(1),Pt.vertexUv2s=d.has(2),Pt.vertexUv3s=d.has(3),d.clear(),Pt}function x(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)b.push(F),b.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(I(b,C),P(b,C),b.push(o.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function I(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function P(C,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),b.gradientMap&&u.enable(22),C.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reversedDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),C.push(u.mask)}function R(C){const b=M[C.type];let F;if(b){const le=Ci[b];F=vy.clone(le.uniforms)}else F=C.uniforms;return F}function k(C,b){let F;for(let le=0,ne=g.length;le<ne;le++){const ae=g[le];if(ae.cacheKey===b){F=ae,++F.usedTimes;break}}return F===void 0&&(F=new Tw(o,b,C,a),g.push(F)),F}function B(C){if(--C.usedTimes===0){const b=g.indexOf(C);g[b]=g[g.length-1],g.pop(),C.destroy()}}function U(C){f.remove(C)}function j(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:k,releaseProgram:B,releaseShaderCache:U,programs:g,dispose:j}}function Cw(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,f){o.get(c)[u]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function Pw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Jg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function e_(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(m,_,y,M,T,S){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:_,material:y,groupOrder:M,renderOrder:m.renderOrder,z:T,group:S},o[e]=x):(x.id=m.id,x.object=m,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=m.renderOrder,x.z=T,x.group=S),e++,x}function u(m,_,y,M,T,S){const x=c(m,_,y,M,T,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function f(m,_,y,M,T,S){const x=c(m,_,y,M,T,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function d(m,_){t.length>1&&t.sort(m||Pw),i.length>1&&i.sort(_||Jg),s.length>1&&s.sort(_||Jg)}function g(){for(let m=e,_=o.length;m<_;m++){const y=o[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:g,sort:d}}function Lw(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new e_,o.set(i,[c])):s>=a.length?(c=new e_,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function Dw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ht};break;case"SpotLight":t={position:new X,direction:new X,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new X,halfWidth:new X,halfHeight:new X};break}return o[e.id]=t,t}}}function Iw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Nw=0;function Uw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Fw(o){const e=new Dw,t=Iw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new X);const s=new X,a=new pt,c=new pt;function u(d){let g=0,m=0,_=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let y=0,M=0,T=0,S=0,x=0,I=0,P=0,R=0,k=0,B=0,U=0;d.sort(Uw);for(let C=0,b=d.length;C<b;C++){const F=d[C],le=F.color,ne=F.intensity,ae=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=le.r*ne,m+=le.g*ne,_+=le.b*ne;else if(F.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(F.sh.coefficients[se],ne);U++}else if(F.isDirectionalLight){const se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ue=F.shadow,H=t.get(F);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,i.directionalShadow[y]=H,i.directionalShadowMap[y]=he,i.directionalShadowMatrix[y]=F.shadow.matrix,I++}i.directional[y]=se,y++}else if(F.isSpotLight){const se=e.get(F);se.position.setFromMatrixPosition(F.matrixWorld),se.color.copy(le).multiplyScalar(ne),se.distance=ae,se.coneCos=Math.cos(F.angle),se.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),se.decay=F.decay,i.spot[T]=se;const ue=F.shadow;if(F.map&&(i.spotLightMap[k]=F.map,k++,ue.updateMatrices(F),F.castShadow&&B++),i.spotLightMatrix[T]=ue.matrix,F.castShadow){const H=t.get(F);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,i.spotShadow[T]=H,i.spotShadowMap[T]=he,R++}T++}else if(F.isRectAreaLight){const se=e.get(F);se.color.copy(le).multiplyScalar(ne),se.halfWidth.set(F.width*.5,0,0),se.halfHeight.set(0,F.height*.5,0),i.rectArea[S]=se,S++}else if(F.isPointLight){const se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),se.distance=F.distance,se.decay=F.decay,F.castShadow){const ue=F.shadow,H=t.get(F);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,H.shadowCameraNear=ue.camera.near,H.shadowCameraFar=ue.camera.far,i.pointShadow[M]=H,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=F.shadow.matrix,P++}i.point[M]=se,M++}else if(F.isHemisphereLight){const se=e.get(F);se.skyColor.copy(F.color).multiplyScalar(ne),se.groundColor.copy(F.groundColor).multiplyScalar(ne),i.hemi[x]=se,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=m,i.ambient[2]=_;const j=i.hash;(j.directionalLength!==y||j.pointLength!==M||j.spotLength!==T||j.rectAreaLength!==S||j.hemiLength!==x||j.numDirectionalShadows!==I||j.numPointShadows!==P||j.numSpotShadows!==R||j.numSpotMaps!==k||j.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=T,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=R+k-B,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=U,j.directionalLength=y,j.pointLength=M,j.spotLength=T,j.rectAreaLength=S,j.hemiLength=x,j.numDirectionalShadows=I,j.numPointShadows=P,j.numSpotShadows=R,j.numSpotMaps=k,j.numLightProbes=U,i.version=Nw++)}function f(d,g){let m=0,_=0,y=0,M=0,T=0;const S=g.matrixWorldInverse;for(let x=0,I=d.length;x<I;x++){const P=d[x];if(P.isDirectionalLight){const R=i.directional[m];R.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),m++}else if(P.isSpotLight){const R=i.spot[y];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),y++}else if(P.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),c.identity(),a.copy(P.matrixWorld),a.premultiply(S),c.extractRotation(a),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const R=i.hemi[T];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:u,setupView:f,state:i}}function t_(o){const e=new Fw(o),t=[],i=[];function s(g){d.camera=g,t.length=0,i.length=0}function a(g){t.push(g)}function c(g){i.push(g)}function u(){e.setup(t)}function f(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function Ow(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new t_(o),e.set(s,[u])):a>=c.length?(u=new t_(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zw(o,e,t){let i=new Qf;const s=new lt,a=new lt,c=new Rt,u=new Oy({depthPacking:Rx}),f=new ky,d={},g=t.maxTextureSize,m={[ar]:Gn,[Gn]:ar,[vi]:vi},_=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:kw,fragmentShader:Bw}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Oi;M.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Vn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u_;let x=this.type;this.render=function(B,U,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const C=o.getRenderTarget(),b=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),le=o.state;le.setBlending(kr),le.buffers.depth.getReversed()?le.buffers.color.setClear(0,0,0,0):le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ne=x!==tr&&this.type===tr,ae=x===tr&&this.type!==tr;for(let he=0,se=B.length;he<se;he++){const ue=B[he],H=ue.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const oe=H.getFrameExtents();if(s.multiply(oe),a.copy(H.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/oe.x),s.x=a.x*oe.x,H.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/oe.y),s.y=a.y*oe.y,H.mapSize.y=a.y)),H.map===null||ne===!0||ae===!0){const N=this.type!==tr?{minFilter:Dn,magFilter:Dn}:{};H.map!==null&&H.map.dispose(),H.map=new ms(s.x,s.y,N),H.map.texture.name=ue.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const ie=H.getViewportCount();for(let N=0;N<ie;N++){const te=H.getViewport(N);c.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),le.viewport(c),H.updateMatrices(ue,N),i=H.getFrustum(),R(U,j,H.camera,ue,this.type)}H.isPointLightShadow!==!0&&this.type===tr&&I(H,j),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(C,b,F)};function I(B,U){const j=e.update(T);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ms(s.x,s.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(U,null,j,_,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(U,null,j,y,T,null)}function P(B,U,j,C){let b=null;const F=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)b=F;else if(b=j.isPointLight===!0?f:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const le=b.uuid,ne=U.uuid;let ae=d[le];ae===void 0&&(ae={},d[le]=ae);let he=ae[ne];he===void 0&&(he=b.clone(),ae[ne]=he,U.addEventListener("dispose",k)),b=he}if(b.visible=U.visible,b.wireframe=U.wireframe,C===tr?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:m[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,j.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const le=o.properties.get(b);le.light=j}return b}function R(B,U,j,C,b){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&b===tr)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const ne=e.update(B),ae=B.material;if(Array.isArray(ae)){const he=ne.groups;for(let se=0,ue=he.length;se<ue;se++){const H=he[se],oe=ae[H.materialIndex];if(oe&&oe.visible){const ie=P(B,oe,C,b);B.onBeforeShadow(o,B,U,j,ne,ie,H),o.renderBufferDirect(j,null,ne,ie,B,H),B.onAfterShadow(o,B,U,j,ne,ie,H)}}}else if(ae.visible){const he=P(B,ae,C,b);B.onBeforeShadow(o,B,U,j,ne,he,null),o.renderBufferDirect(j,null,ne,he,B,null),B.onAfterShadow(o,B,U,j,ne,he,null)}}const le=B.children;for(let ne=0,ae=le.length;ne<ae;ne++)R(le[ne],U,j,C,b)}function k(B){B.target.removeEventListener("dispose",k);for(const j in d){const C=d[j],b=B.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const Hw={[qh]:$h,[Zh]:ef,[Qh]:tf,[ho]:Jh,[$h]:qh,[ef]:Zh,[tf]:Qh,[Jh]:ho};function Vw(o,e){function t(){let V=!1;const Se=new Rt;let Ae=null;const Ie=new Rt(0,0,0,0);return{setMask:function(xe){Ae!==xe&&!V&&(o.colorMask(xe,xe,xe,xe),Ae=xe)},setLocked:function(xe){V=xe},setClear:function(xe,fe,Ge,at,Pt){Pt===!0&&(xe*=at,fe*=at,Ge*=at),Se.set(xe,fe,Ge,at),Ie.equals(Se)===!1&&(o.clearColor(xe,fe,Ge,at),Ie.copy(Se))},reset:function(){V=!1,Ae=null,Ie.set(-1,0,0,0)}}}function i(){let V=!1,Se=!1,Ae=null,Ie=null,xe=null;return{setReversed:function(fe){if(Se!==fe){const Ge=e.get("EXT_clip_control");fe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Se=fe;const at=xe;xe=null,this.setClear(at)}},getReversed:function(){return Se},setTest:function(fe){fe?de(o.DEPTH_TEST):Re(o.DEPTH_TEST)},setMask:function(fe){Ae!==fe&&!V&&(o.depthMask(fe),Ae=fe)},setFunc:function(fe){if(Se&&(fe=Hw[fe]),Ie!==fe){switch(fe){case qh:o.depthFunc(o.NEVER);break;case $h:o.depthFunc(o.ALWAYS);break;case Zh:o.depthFunc(o.LESS);break;case ho:o.depthFunc(o.LEQUAL);break;case Qh:o.depthFunc(o.EQUAL);break;case Jh:o.depthFunc(o.GEQUAL);break;case ef:o.depthFunc(o.GREATER);break;case tf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=fe}},setLocked:function(fe){V=fe},setClear:function(fe){xe!==fe&&(Se&&(fe=1-fe),o.clearDepth(fe),xe=fe)},reset:function(){V=!1,Ae=null,Ie=null,xe=null,Se=!1}}}function s(){let V=!1,Se=null,Ae=null,Ie=null,xe=null,fe=null,Ge=null,at=null,Pt=null;return{setTest:function(Mt){V||(Mt?de(o.STENCIL_TEST):Re(o.STENCIL_TEST))},setMask:function(Mt){Se!==Mt&&!V&&(o.stencilMask(Mt),Se=Mt)},setFunc:function(Mt,Qn,gn){(Ae!==Mt||Ie!==Qn||xe!==gn)&&(o.stencilFunc(Mt,Qn,gn),Ae=Mt,Ie=Qn,xe=gn)},setOp:function(Mt,Qn,gn){(fe!==Mt||Ge!==Qn||at!==gn)&&(o.stencilOp(Mt,Qn,gn),fe=Mt,Ge=Qn,at=gn)},setLocked:function(Mt){V=Mt},setClear:function(Mt){Pt!==Mt&&(o.clearStencil(Mt),Pt=Mt)},reset:function(){V=!1,Se=null,Ae=null,Ie=null,xe=null,fe=null,Ge=null,at=null,Pt=null}}}const a=new t,c=new i,u=new s,f=new WeakMap,d=new WeakMap;let g={},m={},_=new WeakMap,y=[],M=null,T=!1,S=null,x=null,I=null,P=null,R=null,k=null,B=null,U=new ht(0,0,0),j=0,C=!1,b=null,F=null,le=null,ne=null,ae=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ue=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(H)[1]),se=ue>=1):H.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),se=ue>=2);let oe=null,ie={};const N=o.getParameter(o.SCISSOR_BOX),te=o.getParameter(o.VIEWPORT),Be=new Rt().fromArray(N),ke=new Rt().fromArray(te);function Z(V,Se,Ae,Ie){const xe=new Uint8Array(4),fe=o.createTexture();o.bindTexture(V,fe),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ge=0;Ge<Ae;Ge++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Se,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,xe):o.texImage2D(Se+Ge,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xe);return fe}const pe={};pe[o.TEXTURE_2D]=Z(o.TEXTURE_2D,o.TEXTURE_2D,1),pe[o.TEXTURE_CUBE_MAP]=Z(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[o.TEXTURE_2D_ARRAY]=Z(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pe[o.TEXTURE_3D]=Z(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),de(o.DEPTH_TEST),c.setFunc(ho),St(!1),qe(km),de(o.CULL_FACE),bt(kr);function de(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function Re(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function Le(V,Se){return m[V]!==Se?(o.bindFramebuffer(V,Se),m[V]=Se,V===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Se),V===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ze(V,Se){let Ae=y,Ie=!1;if(V){Ae=_.get(Se),Ae===void 0&&(Ae=[],_.set(Se,Ae));const xe=V.textures;if(Ae.length!==xe.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let fe=0,Ge=xe.length;fe<Ge;fe++)Ae[fe]=o.COLOR_ATTACHMENT0+fe;Ae.length=xe.length,Ie=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(Ae)}function zt(V){return M!==V?(o.useProgram(V),M=V,!0):!1}const yt={[us]:o.FUNC_ADD,[Z0]:o.FUNC_SUBTRACT,[Q0]:o.FUNC_REVERSE_SUBTRACT};yt[J0]=o.MIN,yt[ex]=o.MAX;const O={[tx]:o.ZERO,[nx]:o.ONE,[ix]:o.SRC_COLOR,[Yh]:o.SRC_ALPHA,[cx]:o.SRC_ALPHA_SATURATE,[ax]:o.DST_COLOR,[sx]:o.DST_ALPHA,[rx]:o.ONE_MINUS_SRC_COLOR,[Kh]:o.ONE_MINUS_SRC_ALPHA,[lx]:o.ONE_MINUS_DST_COLOR,[ox]:o.ONE_MINUS_DST_ALPHA,[ux]:o.CONSTANT_COLOR,[hx]:o.ONE_MINUS_CONSTANT_COLOR,[fx]:o.CONSTANT_ALPHA,[dx]:o.ONE_MINUS_CONSTANT_ALPHA};function bt(V,Se,Ae,Ie,xe,fe,Ge,at,Pt,Mt){if(V===kr){T===!0&&(Re(o.BLEND),T=!1);return}if(T===!1&&(de(o.BLEND),T=!0),V!==$0){if(V!==S||Mt!==C){if((x!==us||R!==us)&&(o.blendEquation(o.FUNC_ADD),x=us,R=us),Mt)switch(V){case ao:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bm:o.blendFunc(o.ONE,o.ONE);break;case zm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hm:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ao:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bm:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case zm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,P=null,k=null,B=null,U.set(0,0,0),j=0,S=V,C=Mt}return}xe=xe||Se,fe=fe||Ae,Ge=Ge||Ie,(Se!==x||xe!==R)&&(o.blendEquationSeparate(yt[Se],yt[xe]),x=Se,R=xe),(Ae!==I||Ie!==P||fe!==k||Ge!==B)&&(o.blendFuncSeparate(O[Ae],O[Ie],O[fe],O[Ge]),I=Ae,P=Ie,k=fe,B=Ge),(at.equals(U)===!1||Pt!==j)&&(o.blendColor(at.r,at.g,at.b,Pt),U.copy(at),j=Pt),S=V,C=!1}function Qe(V,Se){V.side===vi?Re(o.CULL_FACE):de(o.CULL_FACE);let Ae=V.side===Gn;Se&&(Ae=!Ae),St(Ae),V.blending===ao&&V.transparent===!1?bt(kr):bt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const Ie=V.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):Re(o.SAMPLE_ALPHA_TO_COVERAGE)}function St(V){b!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),b=V)}function qe(V){V!==K0?(de(o.CULL_FACE),V!==F&&(V===km?o.cullFace(o.BACK):V===q0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Re(o.CULL_FACE),F=V}function Ot(V){V!==le&&(se&&o.lineWidth(V),le=V)}function Fe(V,Se,Ae){V?(de(o.POLYGON_OFFSET_FILL),(ne!==Se||ae!==Ae)&&(o.polygonOffset(Se,Ae),ne=Se,ae=Ae)):Re(o.POLYGON_OFFSET_FILL)}function ct(V){V?de(o.SCISSOR_TEST):Re(o.SCISSOR_TEST)}function Vt(V){V===void 0&&(V=o.TEXTURE0+he-1),oe!==V&&(o.activeTexture(V),oe=V)}function Gt(V,Se,Ae){Ae===void 0&&(oe===null?Ae=o.TEXTURE0+he-1:Ae=oe);let Ie=ie[Ae];Ie===void 0&&(Ie={type:void 0,texture:void 0},ie[Ae]=Ie),(Ie.type!==V||Ie.texture!==Se)&&(oe!==Ae&&(o.activeTexture(Ae),oe=Ae),o.bindTexture(V,Se||pe[V]),Ie.type=V,Ie.texture=Se)}function L(){const V=ie[oe];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(V){Be.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Be.copy(V))}function it(V){ke.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),ke.copy(V))}function Xe(V,Se){let Ae=d.get(Se);Ae===void 0&&(Ae=new WeakMap,d.set(Se,Ae));let Ie=Ae.get(V);Ie===void 0&&(Ie=o.getUniformBlockIndex(Se,V.name),Ae.set(V,Ie))}function be(V,Se){const Ie=d.get(Se).get(V);f.get(Se)!==Ie&&(o.uniformBlockBinding(Se,Ie,V.__bindingPointIndex),f.set(Se,Ie))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},oe=null,ie={},m={},_=new WeakMap,y=[],M=null,T=!1,S=null,x=null,I=null,P=null,R=null,k=null,B=null,U=new ht(0,0,0),j=0,C=!1,b=null,F=null,le=null,ne=null,ae=null,Be.set(0,0,o.canvas.width,o.canvas.height),ke.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:de,disable:Re,bindFramebuffer:Le,drawBuffers:Ze,useProgram:zt,setBlending:bt,setMaterial:Qe,setFlipSided:St,setCullFace:qe,setLineWidth:Ot,setPolygonOffset:Fe,setScissorTest:ct,activeTexture:Vt,bindTexture:Gt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:Ke,texImage3D:Ee,updateUBOMapping:Xe,uniformBlockBinding:be,texStorage2D:we,texStorage3D:ze,texSubImage2D:ce,texSubImage3D:_e,compressedTexSubImage2D:re,compressedTexSubImage3D:Ye,scissor:De,viewport:it,reset:ut}}function Gw(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new lt,g=new WeakMap;let m;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return y?new OffscreenCanvas(L,w):Ta("canvas")}function T(L,w,q){let ce=1;const _e=Gt(L);if((_e.width>q||_e.height>q)&&(ce=q/Math.max(_e.width,_e.height)),ce<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(ce*_e.width),Ye=Math.floor(ce*_e.height);m===void 0&&(m=M(re,Ye));const we=w?M(re,Ye):m;return we.width=re,we.height=Ye,we.getContext("2d").drawImage(L,0,0,re,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+re+"x"+Ye+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,w,q,ce,_e=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=w;if(w===o.RED&&(q===o.FLOAT&&(re=o.R32F),q===o.HALF_FLOAT&&(re=o.R16F),q===o.UNSIGNED_BYTE&&(re=o.R8)),w===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(re=o.R8UI),q===o.UNSIGNED_SHORT&&(re=o.R16UI),q===o.UNSIGNED_INT&&(re=o.R32UI),q===o.BYTE&&(re=o.R8I),q===o.SHORT&&(re=o.R16I),q===o.INT&&(re=o.R32I)),w===o.RG&&(q===o.FLOAT&&(re=o.RG32F),q===o.HALF_FLOAT&&(re=o.RG16F),q===o.UNSIGNED_BYTE&&(re=o.RG8)),w===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(re=o.RG8UI),q===o.UNSIGNED_SHORT&&(re=o.RG16UI),q===o.UNSIGNED_INT&&(re=o.RG32UI),q===o.BYTE&&(re=o.RG8I),q===o.SHORT&&(re=o.RG16I),q===o.INT&&(re=o.RG32I)),w===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(re=o.RGB8UI),q===o.UNSIGNED_SHORT&&(re=o.RGB16UI),q===o.UNSIGNED_INT&&(re=o.RGB32UI),q===o.BYTE&&(re=o.RGB8I),q===o.SHORT&&(re=o.RGB16I),q===o.INT&&(re=o.RGB32I)),w===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(re=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(re=o.RGBA16UI),q===o.UNSIGNED_INT&&(re=o.RGBA32UI),q===o.BYTE&&(re=o.RGBA8I),q===o.SHORT&&(re=o.RGBA16I),q===o.INT&&(re=o.RGBA32I)),w===o.RGB&&q===o.UNSIGNED_INT_5_9_9_9_REV&&(re=o.RGB9_E5),w===o.RGBA){const Ye=_e?xc:Tt.getTransfer(ce);q===o.FLOAT&&(re=o.RGBA32F),q===o.HALF_FLOAT&&(re=o.RGBA16F),q===o.UNSIGNED_BYTE&&(re=Ye===Ut?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(re=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(re=o.RGB5_A1)}return(re===o.R16F||re===o.R32F||re===o.RG16F||re===o.RG32F||re===o.RGBA16F||re===o.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(L,w){let q;return L?w===null||w===ps||w===xa?q=o.DEPTH24_STENCIL8:w===Si?q=o.DEPTH32F_STENCIL8:w===va&&(q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ps||w===xa?q=o.DEPTH_COMPONENT24:w===Si?q=o.DEPTH_COMPONENT32F:w===va&&(q=o.DEPTH_COMPONENT16),q}function k(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Dn&&L.minFilter!==Zn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function B(L){const w=L.target;w.removeEventListener("dispose",B),j(w),w.isVideoTexture&&g.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),b(w)}function j(L){const w=i.get(L);if(w.__webglInit===void 0)return;const q=L.source,ce=_.get(q);if(ce){const _e=ce[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(L),Object.keys(ce).length===0&&_.delete(q)}i.remove(L)}function C(L){const w=i.get(L);o.deleteTexture(w.__webglTexture);const q=L.source,ce=_.get(q);delete ce[w.__cacheKey],c.memory.textures--}function b(L){const w=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(w.__webglFramebuffer[ce]))for(let _e=0;_e<w.__webglFramebuffer[ce].length;_e++)o.deleteFramebuffer(w.__webglFramebuffer[ce][_e]);else o.deleteFramebuffer(w.__webglFramebuffer[ce]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[ce])}else{if(Array.isArray(w.__webglFramebuffer))for(let ce=0;ce<w.__webglFramebuffer.length;ce++)o.deleteFramebuffer(w.__webglFramebuffer[ce]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ce=0;ce<w.__webglColorRenderbuffer.length;ce++)w.__webglColorRenderbuffer[ce]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[ce]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=L.textures;for(let ce=0,_e=q.length;ce<_e;ce++){const re=i.get(q[ce]);re.__webglTexture&&(o.deleteTexture(re.__webglTexture),c.memory.textures--),i.remove(q[ce])}i.remove(L)}let F=0;function le(){F=0}function ne(){const L=F;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),F+=1,L}function ae(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function he(L,w){const q=i.get(L);if(L.isVideoTexture&&ct(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const ce=L.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(q,L,w);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+w)}function se(L,w){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){pe(q,L,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+w)}function ue(L,w){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){pe(q,L,w);return}t.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+w)}function H(L,w){const q=i.get(L);if(L.version>0&&q.__version!==L.version){de(q,L,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+w)}const oe={[mo]:o.REPEAT,[Or]:o.CLAMP_TO_EDGE,[vc]:o.MIRRORED_REPEAT},ie={[Dn]:o.NEAREST,[p_]:o.NEAREST_MIPMAP_NEAREST,[da]:o.NEAREST_MIPMAP_LINEAR,[Zn]:o.LINEAR,[hc]:o.LINEAR_MIPMAP_NEAREST,[ir]:o.LINEAR_MIPMAP_LINEAR},N={[Cx]:o.NEVER,[Ux]:o.ALWAYS,[Px]:o.LESS,[T_]:o.LEQUAL,[Lx]:o.EQUAL,[Nx]:o.GEQUAL,[Dx]:o.GREATER,[Ix]:o.NOTEQUAL};function te(L,w){if(w.type===Si&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zn||w.magFilter===hc||w.magFilter===da||w.magFilter===ir||w.minFilter===Zn||w.minFilter===hc||w.minFilter===da||w.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,oe[w.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,oe[w.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,oe[w.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,ie[w.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Dn||w.minFilter!==da&&w.minFilter!==ir||w.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Be(L,w){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",B));const ce=w.source;let _e=_.get(ce);_e===void 0&&(_e={},_.set(ce,_e));const re=ae(w);if(re!==L.__cacheKey){_e[re]===void 0&&(_e[re]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,q=!0),_e[re].usedTimes++;const Ye=_e[L.__cacheKey];Ye!==void 0&&(_e[L.__cacheKey].usedTimes--,Ye.usedTimes===0&&C(w)),L.__cacheKey=re,L.__webglTexture=_e[re].texture}return q}function ke(L,w,q){return Math.floor(Math.floor(L/q)/w)}function Z(L,w,q,ce){const re=L.updateRanges;if(re.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,q,ce,w.data);else{re.sort((Ee,De)=>Ee.start-De.start);let Ye=0;for(let Ee=1;Ee<re.length;Ee++){const De=re[Ye],it=re[Ee],Xe=De.start+De.count,be=ke(it.start,w.width,4),ut=ke(De.start,w.width,4);it.start<=Xe+1&&be===ut&&ke(it.start+it.count-1,w.width,4)===be?De.count=Math.max(De.count,it.start+it.count-De.start):(++Ye,re[Ye]=it)}re.length=Ye+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),ze=o.getParameter(o.UNPACK_SKIP_PIXELS),Ke=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Ee=0,De=re.length;Ee<De;Ee++){const it=re[Ee],Xe=Math.floor(it.start/4),be=Math.ceil(it.count/4),ut=Xe%w.width,V=Math.floor(Xe/w.width),Se=be,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ut),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),t.texSubImage2D(o.TEXTURE_2D,0,ut,V,Se,Ae,q,ce,w.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ze),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ke)}}function pe(L,w,q){let ce=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=o.TEXTURE_3D);const _e=Be(L,w),re=w.source;t.bindTexture(ce,L.__webglTexture,o.TEXTURE0+q);const Ye=i.get(re);if(re.version!==Ye.__version||_e===!0){t.activeTexture(o.TEXTURE0+q);const we=Tt.getPrimaries(Tt.workingColorSpace),ze=w.colorSpace===Fr?null:Tt.getPrimaries(w.colorSpace),Ke=w.colorSpace===Fr||we===ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Ee=T(w.image,!1,s.maxTextureSize);Ee=Vt(w,Ee);const De=a.convert(w.format,w.colorSpace),it=a.convert(w.type);let Xe=P(w.internalFormat,De,it,w.colorSpace,w.isVideoTexture);te(ce,w);let be;const ut=w.mipmaps,V=w.isVideoTexture!==!0,Se=Ye.__version===void 0||_e===!0,Ae=re.dataReady,Ie=k(w,Ee);if(w.isDepthTexture)Xe=R(w.format===Sa,w.type),Se&&(V?t.texStorage2D(o.TEXTURE_2D,1,Xe,Ee.width,Ee.height):t.texImage2D(o.TEXTURE_2D,0,Xe,Ee.width,Ee.height,0,De,it,null));else if(w.isDataTexture)if(ut.length>0){V&&Se&&t.texStorage2D(o.TEXTURE_2D,Ie,Xe,ut[0].width,ut[0].height);for(let xe=0,fe=ut.length;xe<fe;xe++)be=ut[xe],V?Ae&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,be.width,be.height,De,it,be.data):t.texImage2D(o.TEXTURE_2D,xe,Xe,be.width,be.height,0,De,it,be.data);w.generateMipmaps=!1}else V?(Se&&t.texStorage2D(o.TEXTURE_2D,Ie,Xe,Ee.width,Ee.height),Ae&&Z(w,Ee,De,it)):t.texImage2D(o.TEXTURE_2D,0,Xe,Ee.width,Ee.height,0,De,it,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){V&&Se&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Xe,ut[0].width,ut[0].height,Ee.depth);for(let xe=0,fe=ut.length;xe<fe;xe++)if(be=ut[xe],w.format!==ai)if(De!==null)if(V){if(Ae)if(w.layerUpdates.size>0){const Ge=Lg(be.width,be.height,w.format,w.type);for(const at of w.layerUpdates){const Pt=be.data.subarray(at*Ge/be.data.BYTES_PER_ELEMENT,(at+1)*Ge/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,at,be.width,be.height,1,De,Pt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Ee.depth,De,be.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xe,Xe,be.width,be.height,Ee.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ae&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Ee.depth,De,it,be.data):t.texImage3D(o.TEXTURE_2D_ARRAY,xe,Xe,be.width,be.height,Ee.depth,0,De,it,be.data)}else{V&&Se&&t.texStorage2D(o.TEXTURE_2D,Ie,Xe,ut[0].width,ut[0].height);for(let xe=0,fe=ut.length;xe<fe;xe++)be=ut[xe],w.format!==ai?De!==null?V?Ae&&t.compressedTexSubImage2D(o.TEXTURE_2D,xe,0,0,be.width,be.height,De,be.data):t.compressedTexImage2D(o.TEXTURE_2D,xe,Xe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ae&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,be.width,be.height,De,it,be.data):t.texImage2D(o.TEXTURE_2D,xe,Xe,be.width,be.height,0,De,it,be.data)}else if(w.isDataArrayTexture)if(V){if(Se&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Xe,Ee.width,Ee.height,Ee.depth),Ae)if(w.layerUpdates.size>0){const xe=Lg(Ee.width,Ee.height,w.format,w.type);for(const fe of w.layerUpdates){const Ge=Ee.data.subarray(fe*xe/Ee.data.BYTES_PER_ELEMENT,(fe+1)*xe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Ee.width,Ee.height,1,De,it,Ge)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,it,Ee.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Xe,Ee.width,Ee.height,Ee.depth,0,De,it,Ee.data);else if(w.isData3DTexture)V?(Se&&t.texStorage3D(o.TEXTURE_3D,Ie,Xe,Ee.width,Ee.height,Ee.depth),Ae&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,it,Ee.data)):t.texImage3D(o.TEXTURE_3D,0,Xe,Ee.width,Ee.height,Ee.depth,0,De,it,Ee.data);else if(w.isFramebufferTexture){if(Se)if(V)t.texStorage2D(o.TEXTURE_2D,Ie,Xe,Ee.width,Ee.height);else{let xe=Ee.width,fe=Ee.height;for(let Ge=0;Ge<Ie;Ge++)t.texImage2D(o.TEXTURE_2D,Ge,Xe,xe,fe,0,De,it,null),xe>>=1,fe>>=1}}else if(ut.length>0){if(V&&Se){const xe=Gt(ut[0]);t.texStorage2D(o.TEXTURE_2D,Ie,Xe,xe.width,xe.height)}for(let xe=0,fe=ut.length;xe<fe;xe++)be=ut[xe],V?Ae&&t.texSubImage2D(o.TEXTURE_2D,xe,0,0,De,it,be):t.texImage2D(o.TEXTURE_2D,xe,Xe,De,it,be);w.generateMipmaps=!1}else if(V){if(Se){const xe=Gt(Ee);t.texStorage2D(o.TEXTURE_2D,Ie,Xe,xe.width,xe.height)}Ae&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,De,it,Ee)}else t.texImage2D(o.TEXTURE_2D,0,Xe,De,it,Ee);S(w)&&x(ce),Ye.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,q){if(w.image.length!==6)return;const ce=Be(L,w),_e=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+q);const re=i.get(_e);if(_e.version!==re.__version||ce===!0){t.activeTexture(o.TEXTURE0+q);const Ye=Tt.getPrimaries(Tt.workingColorSpace),we=w.colorSpace===Fr?null:Tt.getPrimaries(w.colorSpace),ze=w.colorSpace===Fr||Ye===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,De=[];for(let fe=0;fe<6;fe++)!Ke&&!Ee?De[fe]=T(w.image[fe],!0,s.maxCubemapSize):De[fe]=Ee?w.image[fe].image:w.image[fe],De[fe]=Vt(w,De[fe]);const it=De[0],Xe=a.convert(w.format,w.colorSpace),be=a.convert(w.type),ut=P(w.internalFormat,Xe,be,w.colorSpace),V=w.isVideoTexture!==!0,Se=re.__version===void 0||ce===!0,Ae=_e.dataReady;let Ie=k(w,it);te(o.TEXTURE_CUBE_MAP,w);let xe;if(Ke){V&&Se&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ut,it.width,it.height);for(let fe=0;fe<6;fe++){xe=De[fe].mipmaps;for(let Ge=0;Ge<xe.length;Ge++){const at=xe[Ge];w.format!==ai?Xe!==null?V?Ae&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge,0,0,at.width,at.height,Xe,at.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge,ut,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge,0,0,at.width,at.height,Xe,be,at.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge,ut,at.width,at.height,0,Xe,be,at.data)}}}else{if(xe=w.mipmaps,V&&Se){xe.length>0&&Ie++;const fe=Gt(De[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ut,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ee){V?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De[fe].width,De[fe].height,Xe,be,De[fe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,De[fe].width,De[fe].height,0,Xe,be,De[fe].data);for(let Ge=0;Ge<xe.length;Ge++){const Pt=xe[Ge].image[fe].image;V?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge+1,0,0,Pt.width,Pt.height,Xe,be,Pt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge+1,ut,Pt.width,Pt.height,0,Xe,be,Pt.data)}}else{V?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Xe,be,De[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Xe,be,De[fe]);for(let Ge=0;Ge<xe.length;Ge++){const at=xe[Ge];V?Ae&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge+1,0,0,Xe,be,at.image[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ge+1,ut,Xe,be,at.image[fe])}}}S(w)&&x(o.TEXTURE_CUBE_MAP),re.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Re(L,w,q,ce,_e,re){const Ye=a.convert(q.format,q.colorSpace),we=a.convert(q.type),ze=P(q.internalFormat,Ye,we,q.colorSpace),Ke=i.get(w),Ee=i.get(q);if(Ee.__renderTarget=w,!Ke.__hasExternalTextures){const De=Math.max(1,w.width>>re),it=Math.max(1,w.height>>re);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,re,ze,De,it,w.depth,0,Ye,we,null):t.texImage2D(_e,re,ze,De,it,0,Ye,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),Fe(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ce,_e,Ee.__webglTexture,0,Ot(w)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ce,_e,Ee.__webglTexture,re),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(L,w,q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),w.depthBuffer){const ce=w.depthTexture,_e=ce&&ce.isDepthTexture?ce.type:null,re=R(w.stencilBuffer,_e),Ye=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=Ot(w);Fe(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,re,w.width,w.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,re,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,re,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ye,o.RENDERBUFFER,L)}else{const ce=w.textures;for(let _e=0;_e<ce.length;_e++){const re=ce[_e],Ye=a.convert(re.format,re.colorSpace),we=a.convert(re.type),ze=P(re.internalFormat,Ye,we,re.colorSpace),Ke=Ot(w);q&&Fe(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,ze,w.width,w.height):Fe(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke,ze,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ze,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ze(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(w.depthTexture);ce.__renderTarget=w,(!ce.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const _e=ce.__webglTexture,re=Ot(w);if(w.depthTexture.format===ya)Fe(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,re):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(w.depthTexture.format===Sa)Fe(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,re):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function zt(L){const w=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ce=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ce){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ce.removeEventListener("dispose",_e)};ce.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=ce}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ce=L.texture.mipmaps;ce&&ce.length>0?Ze(w.__webglFramebuffer[0],L):Ze(w.__webglFramebuffer,L)}else if(q){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]===void 0)w.__webglDepthbuffer[ce]=o.createRenderbuffer(),Le(w.__webglDepthbuffer[ce],L,!1);else{const _e=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ce];o.bindRenderbuffer(o.RENDERBUFFER,re),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,re)}}else{const ce=L.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),Le(w.__webglDepthbuffer,L,!1);else{const _e=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,re),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,re)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(L,w,q){const ce=i.get(L);w!==void 0&&Re(ce.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&zt(L)}function O(L){const w=L.texture,q=i.get(L),ce=i.get(w);L.addEventListener("dispose",U);const _e=L.textures,re=L.isWebGLCubeRenderTarget===!0,Ye=_e.length>1;if(Ye||(ce.__webglTexture===void 0&&(ce.__webglTexture=o.createTexture()),ce.__version=w.version,c.memory.textures++),re){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let ze=0;ze<w.mipmaps.length;ze++)q.__webglFramebuffer[we][ze]=o.createFramebuffer()}else q.__webglFramebuffer[we]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)q.__webglFramebuffer[we]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ye)for(let we=0,ze=_e.length;we<ze;we++){const Ke=i.get(_e[we]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=o.createTexture(),c.memory.textures++)}if(L.samples>0&&Fe(L)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<_e.length;we++){const ze=_e[we];q.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const Ke=a.convert(ze.format,ze.colorSpace),Ee=a.convert(ze.type),De=P(ze.internalFormat,Ke,Ee,ze.colorSpace,L.isXRRenderTarget===!0),it=Ot(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,it,De,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,q.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Le(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(re){t.bindTexture(o.TEXTURE_CUBE_MAP,ce.__webglTexture),te(o.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)Re(q.__webglFramebuffer[we][ze],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else Re(q.__webglFramebuffer[we],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(w)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let we=0,ze=_e.length;we<ze;we++){const Ke=_e[we],Ee=i.get(Ke);let De=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(De,Ee.__webglTexture),te(De,Ke),Re(q.__webglFramebuffer,L,Ke,o.COLOR_ATTACHMENT0+we,De,0),S(Ke)&&x(De)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,ce.__webglTexture),te(we,w),w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)Re(q.__webglFramebuffer[ze],L,w,o.COLOR_ATTACHMENT0,we,ze);else Re(q.__webglFramebuffer,L,w,o.COLOR_ATTACHMENT0,we,0);S(w)&&x(we),t.unbindTexture()}L.depthBuffer&&zt(L)}function bt(L){const w=L.textures;for(let q=0,ce=w.length;q<ce;q++){const _e=w[q];if(S(_e)){const re=I(L),Ye=i.get(_e).__webglTexture;t.bindTexture(re,Ye),x(re),t.unbindTexture()}}}const Qe=[],St=[];function qe(L){if(L.samples>0){if(Fe(L)===!1){const w=L.textures,q=L.width,ce=L.height;let _e=o.COLOR_BUFFER_BIT;const re=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ye=i.get(L),we=w.length>1;if(we)for(let Ke=0;Ke<w.length;Ke++)t.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const ze=L.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ke=0;Ke<w.length;Ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ke]);const Ee=i.get(w[Ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,q,ce,0,0,q,ce,_e,o.NEAREST),f===!0&&(Qe.length=0,St.length=0,Qe.push(o.COLOR_ATTACHMENT0+Ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qe.push(re),St.push(re),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,St)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ke=0;Ke<w.length;Ke++){t.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ke]);const Ee=i.get(w[Ke]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,Ee,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&f){const w=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Ot(L){return Math.min(s.maxSamples,L.samples)}function Fe(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(L){const w=c.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function Vt(L,w){const q=L.colorSpace,ce=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Nn&&q!==Fr&&(Tt.getTransfer(q)===Ut?(ce!==ai||_e!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=ne,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=ue,this.setTextureCube=H,this.rebindTextures=yt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Fe}function Ww(o,e){function t(i,s=Fr){let a;const c=Tt.getTransfer(s);if(i===Di)return o.UNSIGNED_BYTE;if(i===Vf)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Gf)return o.UNSIGNED_SHORT_5_5_5_1;if(i===__)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===m_)return o.BYTE;if(i===g_)return o.SHORT;if(i===va)return o.UNSIGNED_SHORT;if(i===Hf)return o.INT;if(i===ps)return o.UNSIGNED_INT;if(i===Si)return o.FLOAT;if(i===wa)return o.HALF_FLOAT;if(i===v_)return o.ALPHA;if(i===x_)return o.RGB;if(i===ai)return o.RGBA;if(i===ya)return o.DEPTH_COMPONENT;if(i===Sa)return o.DEPTH_STENCIL;if(i===Wf)return o.RED;if(i===Xf)return o.RED_INTEGER;if(i===y_)return o.RG;if(i===jf)return o.RG_INTEGER;if(i===Yf)return o.RGBA_INTEGER;if(i===fc||i===dc||i===pc||i===mc)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sf||i===of||i===af||i===lf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===sf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===of)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===af)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cf||i===uf||i===hf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===cf||i===uf)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===hf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ff||i===df||i===pf||i===mf||i===gf||i===_f||i===vf||i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===Tf||i===wf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ff)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===df)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_f)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ef)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gc||i===Af||i===Rf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===gc)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Af)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===S_||i===bf||i===Cf||i===Pf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===gc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===bf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class q_ extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new q_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zr({vertexShader:Xw,fragmentShader:jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vn(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kw extends gs{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",f=1,d=null,g=null,m=null,_=null,y=null,M=null;const T=new Yw,S={},x=t.getContextAttributes();let I=null,P=null;const R=[],k=[],B=new lt;let U=null;const j=new Ln;j.viewport=new Rt;const C=new Ln;C.viewport=new Rt;const b=[j,C],F=new sS;let le=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=R[Z];return pe===void 0&&(pe=new Ch,R[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=R[Z];return pe===void 0&&(pe=new Ch,R[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=R[Z];return pe===void 0&&(pe=new Ch,R[Z]=pe),pe.getHandSpace()};function ae(Z){const pe=k.indexOf(Z.inputSource);if(pe===-1)return;const de=R[pe];de!==void 0&&(de.update(Z.inputSource,Z.frame,d||c),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function he(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",se);for(let Z=0;Z<R.length;Z++){const pe=k[Z];pe!==null&&(k[Z]=null,R[Z].disconnect(pe))}le=null,ne=null,T.reset();for(const Z in S)delete S[Z];e.setRenderTarget(I),y=null,_=null,m=null,s=null,P=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Z){d=Z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",he),s.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&(m=new XRWebGLBinding(s,t)),m!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Re=null,Le=null;x.depth&&(Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=x.stencil?Sa:ya,Re=x.stencil?xa:ps);const Ze={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};_=m.createProjectionLayer(Ze),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new ms(_.textureWidth,_.textureHeight,{format:ai,type:Di,depthTexture:new B_(_.textureWidth,_.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const de={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new ms(y.framebufferWidth,y.framebufferHeight,{format:ai,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(u),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function se(Z){for(let pe=0;pe<Z.removed.length;pe++){const de=Z.removed[pe],Re=k.indexOf(de);Re>=0&&(k[Re]=null,R[Re].disconnect(de))}for(let pe=0;pe<Z.added.length;pe++){const de=Z.added[pe];let Re=k.indexOf(de);if(Re===-1){for(let Ze=0;Ze<R.length;Ze++)if(Ze>=k.length){k.push(de),Re=Ze;break}else if(k[Ze]===null){k[Ze]=de,Re=Ze;break}if(Re===-1)break}const Le=R[Re];Le&&Le.connect(de)}}const ue=new X,H=new X;function oe(Z,pe,de){ue.setFromMatrixPosition(pe.matrixWorld),H.setFromMatrixPosition(de.matrixWorld);const Re=ue.distanceTo(H),Le=pe.projectionMatrix.elements,Ze=de.projectionMatrix.elements,zt=Le[14]/(Le[10]-1),yt=Le[14]/(Le[10]+1),O=(Le[9]+1)/Le[5],bt=(Le[9]-1)/Le[5],Qe=(Le[8]-1)/Le[0],St=(Ze[8]+1)/Ze[0],qe=zt*Qe,Ot=zt*St,Fe=Re/(-Qe+St),ct=Fe*-Qe;if(pe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ct),Z.translateZ(Fe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Vt=zt+Fe,Gt=yt+Fe,L=qe-ct,w=Ot+(Re-ct),q=O*yt/Gt*Vt,ce=bt*yt/Gt*Vt;Z.projectionMatrix.makePerspective(L,w,q,ce,Vt,Gt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let pe=Z.near,de=Z.far;T.texture!==null&&(T.depthNear>0&&(pe=T.depthNear),T.depthFar>0&&(de=T.depthFar)),F.near=C.near=j.near=pe,F.far=C.far=j.far=de,(le!==F.near||ne!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),le=F.near,ne=F.far),F.layers.mask=Z.layers.mask|6,j.layers.mask=F.layers.mask&3,C.layers.mask=F.layers.mask&5;const Re=Z.parent,Le=F.cameras;ie(F,Re);for(let Ze=0;Ze<Le.length;Ze++)ie(Le[Ze],Re);Le.length===2?oe(F,j,C):F.projectionMatrix.copy(j.projectionMatrix),N(Z,F,Re)};function N(Z,pe,de){de===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=go*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(Z){f=Z,_!==null&&(_.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(F)},this.getCameraTexture=function(Z){return S[Z]};let te=null;function Be(Z,pe){if(g=pe.getViewerPose(d||c),M=pe,g!==null){const de=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Re=!1;de.length!==F.cameras.length&&(F.cameras.length=0,Re=!0);for(let yt=0;yt<de.length;yt++){const O=de[yt];let bt=null;if(y!==null)bt=y.getViewport(O);else{const St=m.getViewSubImage(_,O);bt=St.viewport,yt===0&&(e.setRenderTargetTextures(P,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(P))}let Qe=b[yt];Qe===void 0&&(Qe=new Ln,Qe.layers.enable(yt),Qe.viewport=new Rt,b[yt]=Qe),Qe.matrix.fromArray(O.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(O.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(bt.x,bt.y,bt.width,bt.height),yt===0&&(F.matrix.copy(Qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Re===!0&&F.cameras.push(Qe)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){const yt=m.getDepthInformation(de[0]);yt&&yt.isValid&&yt.texture&&T.init(yt,s.renderState)}if(Le&&Le.includes("camera-access")&&(e.state.unbindTexture(),m))for(let yt=0;yt<de.length;yt++){const O=de[yt].camera;if(O){let bt=S[O];bt||(bt=new q_,S[O]=bt);const Qe=m.getCameraImage(O);bt.sourceTexture=Qe}}}for(let de=0;de<R.length;de++){const Re=k[de],Le=R[de];Re!==null&&Le!==void 0&&Le.update(Re,pe,d||c)}te&&te(Z,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),M=null}const ke=new W_;ke.setAnimationLoop(Be),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}}const as=new Ni,qw=new pt;function $w(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,D_(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,I,P,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),m(S,x)):x.isMeshPhongMaterial?(a(S,x),g(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,R)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),T(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?f(S,x,I,P):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Gn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Gn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const I=e.get(x),P=I.envMap,R=I.envMapRotation;P&&(S.envMap.value=P,as.copy(R),as.x*=-1,as.y*=-1,as.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),S.envMapRotation.value.setFromMatrix4(qw.makeRotationFromEuler(as)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,I,P){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*I,S.scale.value=P*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,I){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const I=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zw(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(I,P){const R=P.program;i.uniformBlockBinding(I,R)}function d(I,P){let R=s[I.id];R===void 0&&(M(I),R=g(I),s[I.id]=R,I.addEventListener("dispose",S));const k=P.program;i.updateUBOMapping(I,k);const B=e.render.frame;a[I.id]!==B&&(_(I),a[I.id]=B)}function g(I){const P=m();I.__bindingPointIndex=P;const R=o.createBuffer(),k=I.__size,B=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,k,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,R),R}function m(){for(let I=0;I<u;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const P=s[I.id],R=I.uniforms,k=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,U=R.length;B<U;B++){const j=Array.isArray(R[B])?R[B]:[R[B]];for(let C=0,b=j.length;C<b;C++){const F=j[C];if(y(F,B,C,k)===!0){const le=F.__offset,ne=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let he=0;he<ne.length;he++){const se=ne[he],ue=T(se);typeof se=="number"||typeof se=="boolean"?(F.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,le+ae,F.__data)):se.isMatrix3?(F.__data[0]=se.elements[0],F.__data[1]=se.elements[1],F.__data[2]=se.elements[2],F.__data[3]=0,F.__data[4]=se.elements[3],F.__data[5]=se.elements[4],F.__data[6]=se.elements[5],F.__data[7]=0,F.__data[8]=se.elements[6],F.__data[9]=se.elements[7],F.__data[10]=se.elements[8],F.__data[11]=0):(se.toArray(F.__data,ae),ae+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,P,R,k){const B=I.value,U=P+"_"+R;if(k[U]===void 0)return typeof B=="number"||typeof B=="boolean"?k[U]=B:k[U]=B.clone(),!0;{const j=k[U];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return k[U]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function M(I){const P=I.uniforms;let R=0;const k=16;for(let U=0,j=P.length;U<j;U++){const C=Array.isArray(P[U])?P[U]:[P[U]];for(let b=0,F=C.length;b<F;b++){const le=C[b],ne=Array.isArray(le.value)?le.value:[le.value];for(let ae=0,he=ne.length;ae<he;ae++){const se=ne[ae],ue=T(se),H=R%k,oe=H%ue.boundary,ie=H+oe;R+=oe,ie!==0&&k-ie<ue.storage&&(R+=k-ie),le.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=ue.storage}}}const B=R%k;return B>0&&(R+=k-B),I.__size=R,I.__cache={},this}function T(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function S(I){const P=I.target;P.removeEventListener("dispose",S);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),o.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function x(){for(const I in s)o.deleteBuffer(s[I]);c=[],s={},a={}}return{bind:f,update:d,dispose:x}}class Qw{constructor(e={}){const{canvas:t=Qx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const I=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let k=!1;this._outputColorSpace=fn;let B=0,U=0,j=null,C=-1,b=null;const F=new Rt,le=new Rt;let ne=null;const ae=new ht(0);let he=0,se=t.width,ue=t.height,H=1,oe=null,ie=null;const N=new Rt(0,0,se,ue),te=new Rt(0,0,se,ue);let Be=!1;const ke=new Qf;let Z=!1,pe=!1;const de=new pt,Re=new X,Le=new Rt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function yt(){return j===null?H:1}let O=i;function bt(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zf}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",xe,!1),O===null){const Y="webgl2";if(O=bt(Y,A),O===null)throw bt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qe,St,qe,Ot,Fe,ct,Vt,Gt,L,w,q,ce,_e,re,Ye,we,ze,Ke,Ee,De,it,Xe,be,ut;function V(){Qe=new lT(O),Qe.init(),Xe=new Ww(O,Qe),St=new tT(O,Qe,e,Xe),qe=new Vw(O,Qe),St.reversedDepthBuffer&&_&&qe.buffers.depth.setReversed(!0),Ot=new hT(O),Fe=new Cw,ct=new Gw(O,Qe,qe,Fe,St,Xe,Ot),Vt=new iT(R),Gt=new aT(R),L=new _S(O),be=new JE(O,L),w=new cT(O,L,Ot,be),q=new dT(O,w,L,Ot),Ee=new fT(O,St,ct),we=new nT(Fe),ce=new bw(R,Vt,Gt,Qe,St,be,we),_e=new $w(R,Fe),re=new Lw,Ye=new Ow(Qe),Ke=new QE(R,Vt,Gt,qe,q,y,f),ze=new zw(R,q,St),ut=new Zw(O,Ot,St,qe),De=new eT(O,Qe,Ot),it=new uT(O,Qe,Ot),Ot.programs=ce.programs,R.capabilities=St,R.extensions=Qe,R.properties=Fe,R.renderLists=re,R.shadowMap=ze,R.state=qe,R.info=Ot}V();const Se=new Kw(R,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(se,ue,!1))},this.getSize=function(A){return A.set(se,ue)},this.setSize=function(A,Y,J=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,ue=Y,t.width=Math.floor(A*H),t.height=Math.floor(Y*H),J===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(se*H,ue*H).floor()},this.setDrawingBufferSize=function(A,Y,J){se=A,ue=Y,H=J,t.width=Math.floor(A*J),t.height=Math.floor(Y*J),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,Y,J,ee){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,Y,J,ee),qe.viewport(F.copy(N).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,Y,J,ee){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,Y,J,ee),qe.scissor(le.copy(te).multiplyScalar(H).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(A){qe.setScissorTest(Be=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,J=!0){let ee=0;if(A){let G=!1;if(j!==null){const Me=j.texture.format;G=Me===Yf||Me===jf||Me===Xf}if(G){const Me=j.texture.type,Ce=Me===Di||Me===ps||Me===va||Me===xa||Me===Vf||Me===Gf,He=Ke.getClearColor(),Ne=Ke.getClearAlpha(),nt=He.r,rt=He.g,$e=He.b;Ce?(M[0]=nt,M[1]=rt,M[2]=$e,M[3]=Ne,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=nt,T[1]=rt,T[2]=$e,T[3]=Ne,O.clearBufferiv(O.COLOR,0,T))}else ee|=O.COLOR_BUFFER_BIT}Y&&(ee|=O.DEPTH_BUFFER_BIT),J&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ke.dispose(),re.dispose(),Ye.dispose(),Fe.dispose(),Vt.dispose(),Gt.dispose(),q.dispose(),be.dispose(),ut.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",gn),Se.removeEventListener("sessionend",_s),Wn.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=Ot.autoReset,Y=ze.enabled,J=ze.autoUpdate,ee=ze.needsUpdate,G=ze.type;V(),Ot.autoReset=A,ze.enabled=Y,ze.autoUpdate=J,ze.needsUpdate=ee,ze.type=G}function xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const Y=A.target;Y.removeEventListener("dispose",fe),Ge(Y)}function Ge(A){at(A),Fe.remove(A)}function at(A){const Y=Fe.get(A).programs;Y!==void 0&&(Y.forEach(function(J){ce.releaseProgram(J)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,J,ee,G,Me){Y===null&&(Y=Ze);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,He=zi(A,Y,J,ee,G);qe.setMaterial(ee,Ce);let Ne=J.index,nt=1;if(ee.wireframe===!0){if(Ne=w.getWireframeAttribute(J),Ne===void 0)return;nt=2}const rt=J.drawRange,$e=J.attributes.position;let st=rt.start*nt,Ct=(rt.start+rt.count)*nt;Me!==null&&(st=Math.max(st,Me.start*nt),Ct=Math.min(Ct,(Me.start+Me.count)*nt)),Ne!==null?(st=Math.max(st,0),Ct=Math.min(Ct,Ne.count)):$e!=null&&(st=Math.max(st,0),Ct=Math.min(Ct,$e.count));const Et=Ct-st;if(Et<0||Et===1/0)return;be.setup(G,ee,He,J,Ne);let kt,Lt=De;if(Ne!==null&&(kt=L.get(Ne),Lt=it,Lt.setIndex(kt)),G.isMesh)ee.wireframe===!0?(qe.setLineWidth(ee.wireframeLinewidth*yt()),Lt.setMode(O.LINES)):Lt.setMode(O.TRIANGLES);else if(G.isLine){let Je=ee.linewidth;Je===void 0&&(Je=1),qe.setLineWidth(Je*yt()),G.isLineSegments?Lt.setMode(O.LINES):G.isLineLoop?Lt.setMode(O.LINE_LOOP):Lt.setMode(O.LINE_STRIP)}else G.isPoints?Lt.setMode(O.POINTS):G.isSprite&&Lt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))Lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Je=G._multiDrawStarts,Nt=G._multiDrawCounts,_t=G._multiDrawCount,tn=Ne?L.get(Ne).bytesPerElement:1,li=Fe.get(ee).currentProgram.getUniforms();for(let wn=0;wn<_t;wn++)li.setValue(O,"_gl_DrawID",wn),Lt.render(Je[wn]/tn,Nt[wn])}else if(G.isInstancedMesh)Lt.renderInstances(st,Et,G.count);else if(J.isInstancedBufferGeometry){const Je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Nt=Math.min(J.instanceCount,Je);Lt.renderInstances(st,Et,Nt)}else Lt.render(st,Et)};function Pt(A,Y,J){A.transparent===!0&&A.side===vi&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,xs(A,Y,J),A.side=ar,A.needsUpdate=!0,xs(A,Y,J),A.side=vi):xs(A,Y,J)}this.compile=function(A,Y,J=null){J===null&&(J=A),x=Ye.get(J),x.init(Y),P.push(x),J.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),A!==J&&A.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const ee=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const He=Me[Ce];Pt(He,J,G),ee.add(He)}else Pt(Me,J,G),ee.add(Me)}),x=P.pop(),ee},this.compileAsync=function(A,Y,J=null){const ee=this.compile(A,Y,J);return new Promise(G=>{function Me(){if(ee.forEach(function(Ce){Fe.get(Ce).currentProgram.isReady()&&ee.delete(Ce)}),ee.size===0){G(A);return}setTimeout(Me,10)}Qe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Mt=null;function Qn(A){Mt&&Mt(A)}function gn(){Wn.stop()}function _s(){Wn.start()}const Wn=new W_;Wn.setAnimationLoop(Qn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(A){Mt=A,Se.setAnimationLoop(A),A===null?Wn.stop():Wn.start()},Se.addEventListener("sessionstart",gn),Se.addEventListener("sessionend",_s),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(Y),Y=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,Y,j),x=Ye.get(A,P.length),x.init(Y),P.push(x),de.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ke.setFromProjectionMatrix(de,Pi,Y.reversedDepth),pe=this.localClippingEnabled,Z=we.init(this.clippingPlanes,pe),S=re.get(A,I.length),S.init(),I.push(S),Se.enabled===!0&&Se.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&wo(Me,Y,-1/0,R.sortObjects)}wo(A,Y,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(oe,ie),zt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,zt&&Ke.addToRenderList(S,A),this.info.render.frame++,Z===!0&&we.beginShadows();const J=x.state.shadowsArray;ze.render(J,A,Y),Z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,G=S.transmissive;if(x.setupLights(),Y.isArrayCamera){const Me=Y.cameras;if(G.length>0)for(let Ce=0,He=Me.length;Ce<He;Ce++){const Ne=Me[Ce];Hr(ee,G,A,Ne)}zt&&Ke.render(A);for(let Ce=0,He=Me.length;Ce<He;Ce++){const Ne=Me[Ce];lr(S,A,Ne,Ne.viewport)}}else G.length>0&&Hr(ee,G,A,Y),zt&&Ke.render(A),lr(S,A,Y);j!==null&&U===0&&(ct.updateMultisampleRenderTarget(j),ct.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(R,A,Y),be.resetDefaultState(),C=-1,b=null,P.pop(),P.length>0?(x=P[P.length-1],Z===!0&&we.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function wo(A,Y,J,ee){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ee&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const Ce=q.update(A),He=A.material;He.visible&&S.push(A,Ce,He,J,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Ce=q.update(A),He=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Le.copy(Ce.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(He)){const Ne=Ce.groups;for(let nt=0,rt=Ne.length;nt<rt;nt++){const $e=Ne[nt],st=He[$e.materialIndex];st&&st.visible&&S.push(A,Ce,st,J,Le.z,$e)}}else He.visible&&S.push(A,Ce,He,J,Le.z,null)}}const Me=A.children;for(let Ce=0,He=Me.length;Ce<He;Ce++)wo(Me[Ce],Y,J,ee)}function lr(A,Y,J,ee){const G=A.opaque,Me=A.transmissive,Ce=A.transparent;x.setupLightsView(J),Z===!0&&we.setGlobalState(R.clippingPlanes,J),ee&&qe.viewport(F.copy(ee)),G.length>0&&Bi(G,Y,J),Me.length>0&&Bi(Me,Y,J),Ce.length>0&&Bi(Ce,Y,J),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Hr(A,Y,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new ms(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?wa:Di,minFilter:ir,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Me=x.state.transmissionRenderTarget[ee.id],Ce=ee.viewport||F;Me.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const He=R.getRenderTarget(),Ne=R.getActiveCubeFace(),nt=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor(ae),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),zt&&Ke.render(J);const rt=R.toneMapping;R.toneMapping=Br;const $e=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),Z===!0&&we.setGlobalState(R.clippingPlanes,ee),Bi(A,J,ee),ct.updateMultisampleRenderTarget(Me),ct.updateRenderTargetMipmap(Me),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ct=0,Et=Y.length;Ct<Et;Ct++){const kt=Y[Ct],Lt=kt.object,Je=kt.geometry,Nt=kt.material,_t=kt.group;if(Nt.side===vi&&Lt.layers.test(ee.layers)){const tn=Nt.side;Nt.side=Gn,Nt.needsUpdate=!0,vs(Lt,J,ee,Je,Nt,_t),Nt.side=tn,Nt.needsUpdate=!0,st=!0}}st===!0&&(ct.updateMultisampleRenderTarget(Me),ct.updateRenderTargetMipmap(Me))}R.setRenderTarget(He,Ne,nt),R.setClearColor(ae,he),$e!==void 0&&(ee.viewport=$e),R.toneMapping=rt}function Bi(A,Y,J){const ee=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,Me=A.length;G<Me;G++){const Ce=A[G],He=Ce.object,Ne=Ce.geometry,nt=Ce.group;let rt=Ce.material;rt.allowOverride===!0&&ee!==null&&(rt=ee),He.layers.test(J.layers)&&vs(He,Y,J,Ne,rt,nt)}}function vs(A,Y,J,ee,G,Me){A.onBeforeRender(R,Y,J,ee,G,Me),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(R,Y,J,ee,A,Me),G.transparent===!0&&G.side===vi&&G.forceSinglePass===!1?(G.side=Gn,G.needsUpdate=!0,R.renderBufferDirect(J,Y,ee,G,A,Me),G.side=ar,G.needsUpdate=!0,R.renderBufferDirect(J,Y,ee,G,A,Me),G.side=vi):R.renderBufferDirect(J,Y,ee,G,A,Me),A.onAfterRender(R,Y,J,ee,G,Me)}function xs(A,Y,J){Y.isScene!==!0&&(Y=Ze);const ee=Fe.get(A),G=x.state.lights,Me=x.state.shadowsArray,Ce=G.state.version,He=ce.getParameters(A,G.state,Me,Y,J),Ne=ce.getProgramCacheKey(He);let nt=ee.programs;ee.environment=A.isMeshStandardMaterial?Y.environment:null,ee.fog=Y.fog,ee.envMap=(A.isMeshStandardMaterial?Gt:Vt).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",fe),nt=new Map,ee.programs=nt);let rt=nt.get(Ne);if(rt!==void 0){if(ee.currentProgram===rt&&ee.lightsStateVersion===Ce)return La(A,He),rt}else He.uniforms=ce.getUniforms(A),A.onBeforeCompile(He,R),rt=ce.acquireProgram(He,Ne),nt.set(Ne,rt),ee.uniforms=He.uniforms;const $e=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=we.uniform),La(A,He),ee.needsLights=Ia(A),ee.lightsStateVersion=Ce,ee.needsLights&&($e.ambientLightColor.value=G.state.ambient,$e.lightProbe.value=G.state.probe,$e.directionalLights.value=G.state.directional,$e.directionalLightShadows.value=G.state.directionalShadow,$e.spotLights.value=G.state.spot,$e.spotLightShadows.value=G.state.spotShadow,$e.rectAreaLights.value=G.state.rectArea,$e.ltc_1.value=G.state.rectAreaLTC1,$e.ltc_2.value=G.state.rectAreaLTC2,$e.pointLights.value=G.state.point,$e.pointLightShadows.value=G.state.pointShadow,$e.hemisphereLights.value=G.state.hemi,$e.directionalShadowMap.value=G.state.directionalShadowMap,$e.directionalShadowMatrix.value=G.state.directionalShadowMatrix,$e.spotShadowMap.value=G.state.spotShadowMap,$e.spotLightMatrix.value=G.state.spotLightMatrix,$e.spotLightMap.value=G.state.spotLightMap,$e.pointShadowMap.value=G.state.pointShadowMap,$e.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=rt,ee.uniformsList=null,rt}function Pa(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=_c.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function La(A,Y){const J=Fe.get(A);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.batchingColor=Y.batchingColor,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.instancingMorph=Y.instancingMorph,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function zi(A,Y,J,ee,G){Y.isScene!==!0&&(Y=Ze),ct.resetTextureUnits();const Me=Y.fog,Ce=ee.isMeshStandardMaterial?Y.environment:null,He=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Nn,Ne=(ee.isMeshStandardMaterial?Gt:Vt).get(ee.envMap||Ce),nt=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,rt=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),$e=!!J.morphAttributes.position,st=!!J.morphAttributes.normal,Ct=!!J.morphAttributes.color;let Et=Br;ee.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Et=R.toneMapping);const kt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Lt=kt!==void 0?kt.length:0,Je=Fe.get(ee),Nt=x.state.lights;if(Z===!0&&(pe===!0||A!==b)){const Zt=A===b&&ee.id===C;we.setState(ee,A,Zt)}let _t=!1;ee.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Nt.state.version||Je.outputColorSpace!==He||G.isBatchedMesh&&Je.batching===!1||!G.isBatchedMesh&&Je.batching===!0||G.isBatchedMesh&&Je.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Je.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Je.instancing===!1||!G.isInstancedMesh&&Je.instancing===!0||G.isSkinnedMesh&&Je.skinning===!1||!G.isSkinnedMesh&&Je.skinning===!0||G.isInstancedMesh&&Je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Je.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Je.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Je.instancingMorph===!1&&G.morphTexture!==null||Je.envMap!==Ne||ee.fog===!0&&Je.fog!==Me||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==nt||Je.vertexTangents!==rt||Je.morphTargets!==$e||Je.morphNormals!==st||Je.morphColors!==Ct||Je.toneMapping!==Et||Je.morphTargetsCount!==Lt)&&(_t=!0):(_t=!0,Je.__version=ee.version);let tn=Je.currentProgram;_t===!0&&(tn=xs(ee,Y,G));let li=!1,wn=!1,Vr=!1;const Bt=tn.getUniforms(),An=Je.uniforms;if(qe.useProgram(tn.program)&&(li=!0,wn=!0,Vr=!0),ee.id!==C&&(C=ee.id,wn=!0),li||b!==A){qe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Bt.setValue(O,"projectionMatrix",A.projectionMatrix),Bt.setValue(O,"viewMatrix",A.matrixWorldInverse);const vn=Bt.map.cameraPosition;vn!==void 0&&vn.setValue(O,Re.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&Bt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Bt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,wn=!0,Vr=!0)}if(G.isSkinnedMesh){Bt.setOptional(O,G,"bindMatrix"),Bt.setOptional(O,G,"bindMatrixInverse");const Zt=G.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Bt.setValue(O,"boneTexture",Zt.boneTexture,ct))}G.isBatchedMesh&&(Bt.setOptional(O,G,"batchingTexture"),Bt.setValue(O,"batchingTexture",G._matricesTexture,ct),Bt.setOptional(O,G,"batchingIdTexture"),Bt.setValue(O,"batchingIdTexture",G._indirectTexture,ct),Bt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Bt.setValue(O,"batchingColorTexture",G._colorsTexture,ct));const _n=J.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Ee.update(G,J,tn),(wn||Je.receiveShadow!==G.receiveShadow)&&(Je.receiveShadow=G.receiveShadow,Bt.setValue(O,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(An.envMap.value=Ne,An.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),wn&&(Bt.setValue(O,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&Da(An,Vr),Me&&ee.fog===!0&&_e.refreshFogUniforms(An,Me),_e.refreshMaterialUniforms(An,ee,H,ue,x.state.transmissionRenderTarget[A.id]),_c.upload(O,Pa(Je),An,ct)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(_c.upload(O,Pa(Je),An,ct),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Bt.setValue(O,"center",G.center),Bt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Bt.setValue(O,"normalMatrix",G.normalMatrix),Bt.setValue(O,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Zt=ee.uniformsGroups;for(let vn=0,Gr=Zt.length;vn<Gr;vn++){const vt=Zt[vn];ut.update(vt,tn),ut.bind(vt,tn)}}return tn}function Da(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Ia(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,Y,J){const ee=Fe.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Fe.get(A.texture).__webglTexture=Y,Fe.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:J,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const J=Fe.get(A);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0};const Ac=O.createFramebuffer();this.setRenderTarget=function(A,Y=0,J=0){j=A,B=Y,U=J;let ee=!0,G=null,Me=!1,Ce=!1;if(A){const Ne=Fe.get(A);if(Ne.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(Ne.__webglFramebuffer===void 0)ct.setupRenderTarget(A);else if(Ne.__hasExternalTextures)ct.rebindTextures(A,Fe.get(A.texture).__webglTexture,Fe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Ne.__boundDepthTexture!==$e){if($e!==null&&Fe.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);const rt=Fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[Y])?G=rt[Y][J]:G=rt[Y],Me=!0):A.samples>0&&ct.useMultisampledRTT(A)===!1?G=Fe.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?G=rt[J]:G=rt,F.copy(A.viewport),le.copy(A.scissor),ne=A.scissorTest}else F.copy(N).multiplyScalar(H).floor(),le.copy(te).multiplyScalar(H).floor(),ne=Be;if(J!==0&&(G=Ac),qe.bindFramebuffer(O.FRAMEBUFFER,G)&&ee&&qe.drawBuffers(A,G),qe.viewport(F),qe.scissor(le),qe.setScissorTest(ne),Me){const Ne=Fe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,J)}else if(Ce){const Ne=Y;for(let nt=0;nt<A.textures.length;nt++){const rt=Fe.get(A.textures[nt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+nt,rt.__webglTexture,J,Ne)}}else if(A!==null&&J!==0){const Ne=Fe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ne.__webglTexture,J)}C=-1},this.readRenderTargetPixels=function(A,Y,J,ee,G,Me,Ce,He=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){qe.bindFramebuffer(O.FRAMEBUFFER,Ne);try{const nt=A.textures[He],rt=nt.format,$e=nt.type;if(!St.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ee&&J>=0&&J<=A.height-G&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+He),O.readPixels(Y,J,ee,G,Xe.convert(rt),Xe.convert($e),Me))}finally{const nt=j!==null?Fe.get(j).__webglFramebuffer:null;qe.bindFramebuffer(O.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,J,ee,G,Me,Ce,He=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(Y>=0&&Y<=A.width-ee&&J>=0&&J<=A.height-G){qe.bindFramebuffer(O.FRAMEBUFFER,Ne);const nt=A.textures[He],rt=nt.format,$e=nt.type;if(!St.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+He),O.readPixels(Y,J,ee,G,Xe.convert(rt),Xe.convert($e),0);const Ct=j!==null?Fe.get(j).__webglFramebuffer:null;qe.bindFramebuffer(O.FRAMEBUFFER,Ct);const Et=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Jx(O,Et,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(st),O.deleteSync(Et),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,J=0){const ee=Math.pow(2,-J),G=Math.floor(A.image.width*ee),Me=Math.floor(A.image.height*ee),Ce=Y!==null?Y.x:0,He=Y!==null?Y.y:0;ct.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Ce,He,G,Me),qe.unbindTexture()};const Na=O.createFramebuffer(),Ua=O.createFramebuffer();this.copyTextureToTexture=function(A,Y,J=null,ee=null,G=0,Me=null){Me===null&&(G!==0?(lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=G,G=0):Me=0);let Ce,He,Ne,nt,rt,$e,st,Ct,Et;const kt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(J!==null)Ce=J.max.x-J.min.x,He=J.max.y-J.min.y,Ne=J.isBox3?J.max.z-J.min.z:1,nt=J.min.x,rt=J.min.y,$e=J.isBox3?J.min.z:0;else{const _n=Math.pow(2,-G);Ce=Math.floor(kt.width*_n),He=Math.floor(kt.height*_n),A.isDataArrayTexture?Ne=kt.depth:A.isData3DTexture?Ne=Math.floor(kt.depth*_n):Ne=1,nt=0,rt=0,$e=0}ee!==null?(st=ee.x,Ct=ee.y,Et=ee.z):(st=0,Ct=0,Et=0);const Lt=Xe.convert(Y.format),Je=Xe.convert(Y.type);let Nt;Y.isData3DTexture?(ct.setTexture3D(Y,0),Nt=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ct.setTexture2DArray(Y,0),Nt=O.TEXTURE_2D_ARRAY):(ct.setTexture2D(Y,0),Nt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const _t=O.getParameter(O.UNPACK_ROW_LENGTH),tn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),li=O.getParameter(O.UNPACK_SKIP_PIXELS),wn=O.getParameter(O.UNPACK_SKIP_ROWS),Vr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,kt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,kt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,nt),O.pixelStorei(O.UNPACK_SKIP_ROWS,rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);const Bt=A.isDataArrayTexture||A.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const _n=Fe.get(A),Zt=Fe.get(Y),vn=Fe.get(_n.__renderTarget),Gr=Fe.get(Zt.__renderTarget);qe.bindFramebuffer(O.READ_FRAMEBUFFER,vn.__webglFramebuffer),qe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Gr.__webglFramebuffer);for(let vt=0;vt<Ne;vt++)Bt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(A).__webglTexture,G,$e+vt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(Y).__webglTexture,Me,Et+vt)),O.blitFramebuffer(nt,rt,Ce,He,st,Ct,Ce,He,O.DEPTH_BUFFER_BIT,O.NEAREST);qe.bindFramebuffer(O.READ_FRAMEBUFFER,null),qe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||Fe.has(A)){const _n=Fe.get(A),Zt=Fe.get(Y);qe.bindFramebuffer(O.READ_FRAMEBUFFER,Na),qe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ua);for(let vn=0;vn<Ne;vn++)Bt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_n.__webglTexture,G,$e+vn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_n.__webglTexture,G),An?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zt.__webglTexture,Me,Et+vn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Zt.__webglTexture,Me),G!==0?O.blitFramebuffer(nt,rt,Ce,He,st,Ct,Ce,He,O.COLOR_BUFFER_BIT,O.NEAREST):An?O.copyTexSubImage3D(Nt,Me,st,Ct,Et+vn,nt,rt,Ce,He):O.copyTexSubImage2D(Nt,Me,st,Ct,nt,rt,Ce,He);qe.bindFramebuffer(O.READ_FRAMEBUFFER,null),qe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Nt,Me,st,Ct,Et,Ce,He,Ne,Lt,Je,kt.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Nt,Me,st,Ct,Et,Ce,He,Ne,Lt,kt.data):O.texSubImage3D(Nt,Me,st,Ct,Et,Ce,He,Ne,Lt,Je,kt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,st,Ct,Ce,He,Lt,Je,kt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,st,Ct,kt.width,kt.height,Lt,kt.data):O.texSubImage2D(O.TEXTURE_2D,Me,st,Ct,Ce,He,Lt,Je,kt);O.pixelStorei(O.UNPACK_ROW_LENGTH,_t),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,li),O.pixelStorei(O.UNPACK_SKIP_ROWS,wn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Vr),Me===0&&Y.generateMipmaps&&O.generateMipmap(Nt),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,J=null,ee=null,G=0){return lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,J,ee,G)},this.initRenderTarget=function(A){Fe.get(A).__webglFramebuffer===void 0&&ct.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ct.setTextureCube(A,0):A.isData3DTexture?ct.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ct.setTexture2DArray(A,0):ct.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){B=0,U=0,j=null,qe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function n_(o,e){if(e===wx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Lf||e===M_){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Lf)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Jw extends Eo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rA(t)}),this.register(function(t){return new sA(t)}),this.register(function(t){return new pA(t)}),this.register(function(t){return new mA(t)}),this.register(function(t){return new gA(t)}),this.register(function(t){return new aA(t)}),this.register(function(t){return new lA(t)}),this.register(function(t){return new cA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new iA(t)}),this.register(function(t){return new hA(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new dA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new tA(t)}),this.register(function(t){return new _A(t)}),this.register(function(t){return new vA(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=_a.extractUrlBase(e);c=_a.resolveURL(d,this.path)}else c=_a.extractUrlBase(e);this.manager.itemStart(e);const u=function(d){s?s(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},f=new V_(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{a.parse(d,c,function(g){t(g),a.manager.itemEnd(e)},u)}catch(g){u(g)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===$_){try{c[xt.KHR_BINARY_GLTF]=new xA(e)}catch(m){s&&s(m);return}a=JSON.parse(c[xt.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new DA(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const m=this.pluginCallbacks[g](d);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[m.name]=m,c[m.name]=!0}if(a.extensionsUsed)for(let g=0;g<a.extensionsUsed.length;++g){const m=a.extensionsUsed[g],_=a.extensionsRequired||[];switch(m){case xt.KHR_MATERIALS_UNLIT:c[m]=new nA;break;case xt.KHR_DRACO_MESH_COMPRESSION:c[m]=new yA(a,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:c[m]=new SA;break;case xt.KHR_MESH_QUANTIZATION:c[m]=new MA;break;default:_.indexOf(m)>=0&&u[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}d.setExtensions(c),d.setPlugins(u),d.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function eA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tA{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const g=new ht(16777215);f.color!==void 0&&g.setRGB(f.color[0],f.color[1],f.color[2],Nn);const m=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new iS(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new tS(g),d.distance=m;break;case"spot":d=new G_(g),d.distance=m,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),nr(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(d),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return i._getNodeRef(t.cache,u,f)})}}class nA{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return fs}extendParams(e,t,i){const s=[];e.color=new ht(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Nn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,fn))}return Promise.all(s)}}class iA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class rA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(u,u)}return Promise.all(a)}}class sA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class oA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class aA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ht(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Nn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,fn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class lA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class cA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new ht().setRGB(u[0],u[1],u[2],Nn),Promise.all(a)}}class uA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class hA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new ht().setRGB(u[0],u[1],u[2],Nn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,fn)),Promise.all(a)}}class fA{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class dA{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class pA{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class mA{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return i.loadTextureImage(e,c.source,f)}}class gA{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return i.loadTextureImage(e,c.source,f)}}class _A{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=s.byteOffset||0,d=s.byteLength||0,g=s.count,m=s.byteStride,_=new Uint8Array(u,f,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(g,m,_,s.mode,s.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(g*m);return c.decodeGltfBuffer(new Uint8Array(y),g,m,_,s.mode,s.filter),y})})}else return null}}class vA{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const d of s.primitives)if(d.mode!==oi.TRIANGLES&&d.mode!==oi.TRIANGLE_STRIP&&d.mode!==oi.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],f={};for(const d in c)u.push(this.parser.getDependency("accessor",c[d]).then(g=>(f[d]=g,f[d])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(d=>{const g=d.pop(),m=g.isGroup?g.children:[g],_=d[0].count,y=[];for(const M of m){const T=new pt,S=new X,x=new Ii,I=new X(1,1,1),P=new Py(M.geometry,M.material,_);for(let R=0;R<_;R++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,R),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,R),f.SCALE&&I.fromBufferAttribute(f.SCALE,R),P.setMatrixAt(R,T.compose(S,x,I));for(const R in f)if(R==="_COLOR_0"){const k=f[R];P.instanceColor=new If(k.array,k.itemSize,k.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&M.geometry.setAttribute(R,f[R]);qt.prototype.copy.call(P,M),this.parser.assignFinalMaterial(P),y.push(P)}return g.isGroup?(g.clear(),g.add(...y),g):y[0]}))}}const $_="glTF",fa=12,i_={JSON:1313821514,BIN:5130562};class xA{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-fa,a=new DataView(e,fa);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===i_.JSON){const d=new Uint8Array(e,fa+c,u);this.content=i.decode(d)}else if(f===i_.BIN){const d=fa+c;this.body=e.slice(d,d+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},d={};for(const g in c){const m=Ff[g]||g.toLowerCase();u[m]=c[g]}for(const g in e.attributes){const m=Ff[g]||g.toLowerCase();if(c[g]!==void 0){const _=i.accessors[e.attributes[g]],y=uo[_.componentType];d[m]=y.name,f[m]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(g){return new Promise(function(m,_){s.decodeDracoFile(g,function(y){for(const M in y.attributes){const T=y.attributes[M],S=f[M];S!==void 0&&(T.normalized=S)}m(y)},u,d,Nn,_)})})}}class SA{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class MA{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class Z_ extends Ca{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,d=u*3,g=s-t,m=(i-t)/g,_=m*m,y=_*m,M=e*d,T=M-d,S=-2*y+3*_,x=y-_,I=1-S,P=x-_+m;for(let R=0;R!==u;R++){const k=c[T+R+u],B=c[T+R+f]*g,U=c[M+R+u],j=c[M+R]*g;a[R]=I*k+P*B+S*U+x*j}return a}}const EA=new Ii;class TA extends Z_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return EA.fromArray(a).normalize().toArray(a),a}}const oi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},r_={9728:Dn,9729:Zn,9984:p_,9985:hc,9986:da,9987:ir},s_={33071:Or,33648:vc,10497:mo},Gh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ff={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wA={CUBICSPLINE:void 0,LINEAR:Ea,STEP:Ma},Wh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AA(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Tc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ar})),o.DefaultMaterial}function ls(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function nr(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function RA(o,e,t){let i=!1,s=!1,a=!1;for(let d=0,g=e.length;d<g;d++){const m=e[d];if(m.POSITION!==void 0&&(i=!0),m.NORMAL!==void 0&&(s=!0),m.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],f=[];for(let d=0,g=e.length;d<g;d++){const m=e[d];if(i){const _=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):o.attributes.position;c.push(_)}if(s){const _=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):o.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(d){const g=d[0],m=d[1],_=d[2];return i&&(o.morphAttributes.position=g),s&&(o.morphAttributes.normal=m),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function bA(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CA(o){let e;const t=o.extensions&&o.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xh(t.attributes):e=o.indices+":"+Xh(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+Xh(o.targets[i]);return e}function Xh(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Of(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PA(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const LA=new pt;class DA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new eA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);s=i&&f?parseInt(f[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new Qy(this.options.manager):this.textureLoader=new rS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new V_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return ls(a,u,s),nr(u,s),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[d,g]of c.children.entries())a(g,u.children[d])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(_a.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=Gh[s.type],u=uo[s.componentType],f=s.normalized===!0,d=new u(s.count*c);return Promise.resolve(new In(d,c,f))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=Gh[s.type],d=uo[s.componentType],g=d.BYTES_PER_ELEMENT,m=g*f,_=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let T,S;if(y&&y!==m){const x=Math.floor(_/y),I="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let P=t.cache.get(I);P||(T=new d(u,x*y,s.count*y/g),P=new wy(T,y/g),t.cache.add(I,P)),S=new $f(P,f,_%y/g,M)}else u===null?T=new d(s.count*f):T=new d(u,_,s.count*f),S=new In(T,f,M);if(s.sparse!==void 0){const x=Gh.SCALAR,I=uo[s.sparse.indices.componentType],P=s.sparse.indices.byteOffset||0,R=s.sparse.values.byteOffset||0,k=new I(c[1],P,s.sparse.count*x),B=new d(c[2],R,s.sparse.count*f);u!==null&&(S=new In(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,j=k.length;U<j;U++){const C=k[U];if(S.setX(C,B[U*f]),f>=2&&S.setY(C,B[U*f+1]),f>=3&&S.setZ(C,B[U*f+2]),f>=4&&S.setW(C,B[U*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,i).then(function(g){g.flipY=!1,g.name=c.name||u.name||"",g.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(g.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return g.magFilter=r_[_.magFilter]||Zn,g.minFilter=r_[_.minFilter]||ir,g.wrapS=s_[_.wrapS]||mo,g.wrapT=s_[_.wrapT]||mo,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Dn&&g.minFilter!==Zn,s.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const c=s.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",d=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(m){d=!0;const _=new Blob([m],{type:c.mimeType});return f=u.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(f).then(function(m){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(T){const S=new dn(T);S.needsUpdate=!0,_(S)}),t.load(_a.resolveURL(m,a.path),M,void 0,y)})}).then(function(m){return d===!0&&u.revokeObjectURL(f),nr(m,c),m.userData.mimeType=c.mimeType||PA(c.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),m});return this.sourceCache[e]=g,g}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[xt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new k_,Li.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(u,f)),i=f}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new O_,Li.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(u,f)),i=f}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return Tc}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},f=a.extensions||{},d=[];if(f[xt.KHR_MATERIALS_UNLIT]){const m=s[xt.KHR_MATERIALS_UNLIT];c=m.getMaterialType(),d.push(m.extendParams(u,a,t))}else{const m=a.pbrMetallicRoughness||{};if(u.color=new ht(1,1,1),u.opacity=1,Array.isArray(m.baseColorFactor)){const _=m.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],Nn),u.opacity=_[3]}m.baseColorTexture!==void 0&&d.push(t.assignTexture(u,"map",m.baseColorTexture,fn)),u.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,u.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(u,"metalnessMap",m.metallicRoughnessTexture)),d.push(t.assignTexture(u,"roughnessMap",m.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=vi);const g=a.alphaMode||Wh.OPAQUE;if(g===Wh.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,g===Wh.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==fs&&(d.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new lt(1,1),a.normalTexture.scale!==void 0)){const m=a.normalTexture.scale;u.normalScale.set(m,m)}if(a.occlusionTexture!==void 0&&c!==fs&&(d.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==fs){const m=a.emissiveFactor;u.emissive=new ht().setRGB(m[0],m[1],m[2],Nn)}return a.emissiveTexture!==void 0&&c!==fs&&d.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,fn)),Promise.all(d).then(function(){const m=new c(u);return a.name&&(m.name=a.name),nr(m,a),t.associations.set(m,{materials:e}),a.extensions&&ls(s,m,a),m})}createUniqueName(e){const t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return o_(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const d=e[u],g=CA(d),m=s[g];if(m)c.push(m.promise);else{let _;d.extensions&&d.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?_=a(d):_=o_(new Oi,d,t),s[g]={primitive:d,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let f=0,d=c.length;f<d;f++){const g=c[f].material===void 0?AA(this.cache):this.getDependency("material",c[f].material);u.push(g)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const d=f.slice(0,f.length-1),g=f[f.length-1],m=[];for(let y=0,M=g.length;y<M;y++){const T=g[y],S=c[y];let x;const I=d[y];if(S.mode===oi.TRIANGLES||S.mode===oi.TRIANGLE_STRIP||S.mode===oi.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new Ry(T,I):new Vn(T,I),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===oi.TRIANGLE_STRIP?x.geometry=n_(x.geometry,M_):S.mode===oi.TRIANGLE_FAN&&(x.geometry=n_(x.geometry,Lf));else if(S.mode===oi.LINES)x=new Ny(T,I);else if(S.mode===oi.LINE_STRIP)x=new Jf(T,I);else if(S.mode===oi.LINE_LOOP)x=new Uy(T,I);else if(S.mode===oi.POINTS)x=new Fy(T,I);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&bA(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),nr(x,a),S.extensions&&ls(s,x,S),t.assignFinalMaterial(x),m.push(x)}for(let y=0,M=m.length;y<M;y++)t.associations.set(m[y],{meshes:e,primitives:y});if(m.length===1)return a.extensions&&ls(s,m[0],a),m[0];const _=new ds;a.extensions&&ls(s,_,a),t.associations.set(_,{meshes:e});for(let y=0,M=m.length;y<M;y++)_.add(m[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ln(w_.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new nd(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),nr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],f=[];for(let d=0,g=c.length;d<g;d++){const m=c[d];if(m){u.push(m);const _=new pt;a!==null&&_.fromArray(a.array,d*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Zf(u,f)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],f=[],d=[],g=[];for(let m=0,_=s.channels.length;m<_;m++){const y=s.channels[m],M=s.samplers[y.sampler],T=y.target,S=T.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,I=s.parameters!==void 0?s.parameters[M.output]:M.output;T.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",I)),d.push(M),g.push(T))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(d),Promise.all(g)]).then(function(m){const _=m[0],y=m[1],M=m[2],T=m[3],S=m[4],x=[];for(let I=0,P=_.length;I<P;I++){const R=_[I],k=y[I],B=M[I],U=T[I],j=S[I];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const C=i._createAnimationTracks(R,k,B,U,j);if(C)for(let b=0;b<C.length;b++)x.push(C[b])}return new Xy(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,d=s.weights.length;f<d;f++)u.morphTargetInfluences[f]=s.weights[f]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let d=0,g=u.length;d<g;d++)c.push(i.getDependency("node",u[d]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),f]).then(function(d){const g=d[0],m=d[1],_=d[2];_!==null&&g.traverse(function(y){y.isSkinnedMesh&&y.bind(_,LA)});for(let y=0,M=m.length;y<M;y++)g.add(m[y]);return g})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],f=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(d){return s._getNodeRef(s.cameraCache,a.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){u.push(d)}),this.nodeCache[e]=Promise.all(u).then(function(d){let g;if(a.isBone===!0?g=new U_:d.length>1?g=new ds:d.length===1?g=d[0]:g=new qt,g!==d[0])for(let m=0,_=d.length;m<_;m++)g.add(d[m]);if(a.name&&(g.userData.name=a.name,g.name=c),nr(g,a),a.extensions&&ls(i,g,a),a.matrix!==void 0){const m=new pt;m.fromArray(a.matrix),g.applyMatrix4(m)}else a.translation!==void 0&&g.position.fromArray(a.translation),a.rotation!==void 0&&g.quaternion.fromArray(a.rotation),a.scale!==void 0&&g.scale.fromArray(a.scale);if(!s.associations.has(g))s.associations.set(g,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const m=s.associations.get(g);s.associations.set(g,{...m})}return s.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new ds;i.name&&(a.name=s.createUniqueName(i.name)),nr(a,i),i.extensions&&ls(t,a,i);const c=i.nodes||[],u=[];for(let f=0,d=c.length;f<d;f++)u.push(s.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let g=0,m=f.length;g<m;g++)a.add(f[g]);const d=g=>{const m=new Map;for(const[_,y]of s.associations)(_ instanceof Li||_ instanceof dn)&&m.set(_,y);return g.traverse(_=>{const y=s.associations.get(_);y!=null&&m.set(_,y)}),m};return s.associations=d(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,f=[];Nr[a.path]===Nr.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(u);let d;switch(Nr[a.path]){case Nr.weights:d=vo;break;case Nr.rotation:d=xo;break;case Nr.translation:case Nr.scale:d=yo;break;default:switch(i.itemSize){case 1:d=vo;break;case 2:case 3:default:d=yo;break}break}const g=s.interpolation!==void 0?wA[s.interpolation]:Ea,m=this._getArrayFromAccessor(i);for(let _=0,y=f.length;_<y;_++){const M=new d(f[_]+"."+Nr[a.path],t.array,m,g);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Of(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof xo?TA:Z_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function IA(o,e,t){const i=e.attributes,s=new Ui;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],f=u.min,d=u.max;if(f!==void 0&&d!==void 0){if(s.set(new X(f[0],f[1],f[2]),new X(d[0],d[1],d[2])),u.normalized){const g=Of(uo[u.componentType]);s.min.multiplyScalar(g),s.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new X,f=new X;for(let d=0,g=a.length;d<g;d++){const m=a[d];if(m.POSITION!==void 0){const _=t.json.accessors[m.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const T=Of(uo[_.componentType]);f.multiplyScalar(T)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Fi;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function o_(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){o.setAttribute(u,f)})}for(const c in i){const u=Ff[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return Tt.workingColorSpace!==Nn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),nr(o,e),IA(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?RA(o,e.targets,t):o})}const a_={type:"change"},od={type:"start"},Q_={type:"end"},uc=new Aa,l_=new Ur,NA=Math.cos(70*w_.DEG2RAD),sn=new X,Hn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jh=1e-6;class UA extends mS{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oo.ROTATE,MIDDLE:oo.DOLLY,RIGHT:oo.PAN},this.touches={ONE:ro.ROTATE,TWO:ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Ii,this._lastTargetPosition=new X,this._quat=new Ii().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pg,this._sphericalDelta=new Pg,this._scale=1,this._panOffset=new X,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new X,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=OA.bind(this),this._onPointerDown=FA.bind(this),this._onPointerUp=kA.bind(this),this._onContextMenu=XA.bind(this),this._onMouseWheel=HA.bind(this),this._onKeyDown=VA.bind(this),this._onTouchStart=GA.bind(this),this._onTouchMove=WA.bind(this),this._onMouseDown=BA.bind(this),this._onMouseMove=zA.bind(this),this._interceptControlDown=jA.bind(this),this._interceptControlUp=YA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(a_),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=sn.length();c=this._clampDistance(u*this._scale);const f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const u=new X(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(uc.origin.copy(this.object.position),uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uc.direction))<NA?this.object.lookAt(this.target):(l_.setFromNormalAndCoplanarPoint(this.object.up,this.target),uc.intersectPlane(l_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jh||this._lastTargetPosition.distanceToSquared(this.target)>jh?(this.dispatchEvent(a_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;sn.copy(s).sub(this.target);let a=sn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function FA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function OA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function kA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q_),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function BA(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ft.DOLLY;break;case oo.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ft.ROTATE}break;case oo.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(od)}function zA(o){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function HA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(o.preventDefault(),this.dispatchEvent(od),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Q_))}function VA(o){this.enabled!==!1&&this._handleKeyDown(o)}function GA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ft.TOUCH_ROTATE;break;case ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ft.TOUCH_DOLLY_PAN;break;case ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(od)}function WA(o){switch(this._trackPointer(o),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ft.NONE}}function XA(o){this.enabled!==!1&&o.preventDefault()}function jA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function YA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const KA=()=>{const[o,e]=Mi.useState({name:"",email:"",message:""}),t=Mi.useRef(null);return Mi.useEffect(()=>{let i,s,a,c,u;i=new Qw({antialias:!0}),i.outputColorSpace=fn,i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0),i.setPixelRatio(window.devicePixelRatio),i.shadowMap.enabled=!0,i.shadowMap.type=h_,t.current.appendChild(i.domElement),s=new Ty,a=new Ln(45,window.innerWidth/window.innerHeight,1,1e3),a.position.set(4,5,11),c=new UA(a,i.domElement),c.enableDamping=!0,c.enablePan=!1,c.minDistance=5,c.maxDistance=20,c.minPolarAngle=.5,c.maxPolarAngle=1.5,c.autoRotate=!1,c.target=new X(0,1,0),c.update();const f=new ba(20,20,32,32);f.rotateX(-Math.PI/2);const d=new Tc({color:5592405,side:vi}),g=new Vn(f,d);g.castShadow=!1,g.receiveShadow=!0,s.add(g);const m=new G_(16777215,3e3,100,.22,1);m.position.set(0,25,0),m.castShadow=!0,m.shadow.bias=-1e-4,s.add(m),new Jw().load("/scene.gltf",T=>{const S=T.scene;S.traverse(j=>{j.isMesh&&(j.castShadow=!0,j.receiveShadow=!0)}),s.add(S);const x=new Ui().setFromObject(S),I=x.getSize(new X),P=x.getCenter(new X),B=4/Math.max(I.x,I.y,I.z);S.scale.set(B,B,B),x.setFromObject(S),x.getCenter(P),S.position.x+=0-P.x,S.position.y+=1-P.y,S.position.z+=0-P.z,a.position.set(0,4,10),a.lookAt(0,1,0),c.target.set(0,1,0),c.update(),console.log("Model scale applied:",B),console.log("Model new center:",P),console.log("Model new size:",x.getSize(new X));const U=document.getElementById("progress-container");U&&(U.style.display="none")},T=>{T.total&&console.log(`loading ${T.loaded/T.total*100}%`)},T=>{console.error(T)});const y=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",y);const M=()=>{u=requestAnimationFrame(M),c.update(),i.render(s,a)};return M(),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",y),i&&t.current&&(t.current.removeChild(i.domElement),i.dispose())}},[]),ye.jsx("div",{ref:t,style:{width:"100vw",height:"100vh"}})};function qA(){const[o,e]=Mi.useState(!1),[t,i]=Mi.useState(!1);return ye.jsxs(ye.Fragment,{children:[!o&&ye.jsx(V0,{onComplete:()=>e(!0)})," ",ye.jsxs("div",{className:`min-h-screen transition-opacity duration-700 ${o?"opacity-100":"opacity-0"} bg-black text-gray-100`,children:[ye.jsx(G0,{menuOpen:t,setMenuOpen:i}),ye.jsx(W0,{menuOpen:t,setMenuOpen:i}),ye.jsx(X0,{}),ye.jsx(j0,{}),ye.jsx(Y0,{}),ye.jsx(KA,{})]})]})}H0.createRoot(document.getElementById("root")).render(ye.jsx(N0.StrictMode,{children:ye.jsx(qA,{})}));
