function xx(s,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in s)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(s,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function O_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var mh={exports:{}},ca={},gh={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function yx(){if(qm)return _t;qm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),p=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=p&&N[p]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(N,te,ze){this.props=N,this.context=te,this.refs=M,this.updater=ze||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,te){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,te,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function D(N,te,ze){this.props=N,this.context=te,this.refs=M,this.updater=ze||y}var P=D.prototype=new x;P.constructor=D,E(P,S.prototype),P.isPureReactComponent=!0;var R=Array.isArray,U=Object.prototype.hasOwnProperty,z={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function Y(N,te,ze){var Be,Z={},pe=null,de=null;if(te!=null)for(Be in te.ref!==void 0&&(de=te.ref),te.key!==void 0&&(pe=""+te.key),te)U.call(te,Be)&&!O.hasOwnProperty(Be)&&(Z[Be]=te[Be]);var Re=arguments.length-2;if(Re===1)Z.children=ze;else if(1<Re){for(var Le=Array(Re),Je=0;Je<Re;Je++)Le[Je]=arguments[Je+2];Z.children=Le}if(N&&N.defaultProps)for(Be in Re=N.defaultProps,Re)Z[Be]===void 0&&(Z[Be]=Re[Be]);return{$$typeof:s,type:N,key:pe,ref:de,props:Z,_owner:z.current}}function C(N,te){return{$$typeof:s,type:N.type,key:te,ref:N.ref,props:N.props,_owner:N._owner}}function b(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function F(N){var te={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ze){return te[ze]})}var le=/\/+/g;function ne(N,te){return typeof N=="object"&&N!==null&&N.key!=null?F(""+N.key):te.toString(36)}function ae(N,te,ze,Be,Z){var pe=typeof N;(pe==="undefined"||pe==="boolean")&&(N=null);var de=!1;if(N===null)de=!0;else switch(pe){case"string":case"number":de=!0;break;case"object":switch(N.$$typeof){case s:case e:de=!0}}if(de)return de=N,Z=Z(de),N=Be===""?"."+ne(de,0):Be,R(Z)?(ze="",N!=null&&(ze=N.replace(le,"$&/")+"/"),ae(Z,te,ze,"",function(Je){return Je})):Z!=null&&(b(Z)&&(Z=C(Z,ze+(!Z.key||de&&de.key===Z.key?"":(""+Z.key).replace(le,"$&/")+"/")+N)),te.push(Z)),1;if(de=0,Be=Be===""?".":Be+":",R(N))for(var Re=0;Re<N.length;Re++){pe=N[Re];var Le=Be+ne(pe,Re);de+=ae(pe,te,ze,Le,Z)}else if(Le=_(N),typeof Le=="function")for(N=Le.call(N),Re=0;!(pe=N.next()).done;)pe=pe.value,Le=Be+ne(pe,Re++),de+=ae(pe,te,ze,Le,Z);else if(pe==="object")throw te=String(N),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return de}function he(N,te,ze){if(N==null)return N;var Be=[],Z=0;return ae(N,Be,"","",function(pe){return te.call(ze,pe,Z++)}),Be}function se(N){if(N._status===-1){var te=N._result;te=te(),te.then(function(ze){(N._status===0||N._status===-1)&&(N._status=1,N._result=ze)},function(ze){(N._status===0||N._status===-1)&&(N._status=2,N._result=ze)}),N._status===-1&&(N._status=0,N._result=te)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},H={transition:null},oe={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:H,ReactCurrentOwner:z};function ie(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:he,forEach:function(N,te,ze){he(N,function(){te.apply(this,arguments)},ze)},count:function(N){var te=0;return he(N,function(){te++}),te},toArray:function(N){return he(N,function(te){return te})||[]},only:function(N){if(!b(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},_t.Component=S,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=D,_t.StrictMode=i,_t.Suspense=f,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,_t.act=ie,_t.cloneElement=function(N,te,ze){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Be=E({},N.props),Z=N.key,pe=N.ref,de=N._owner;if(te!=null){if(te.ref!==void 0&&(pe=te.ref,de=z.current),te.key!==void 0&&(Z=""+te.key),N.type&&N.type.defaultProps)var Re=N.type.defaultProps;for(Le in te)U.call(te,Le)&&!O.hasOwnProperty(Le)&&(Be[Le]=te[Le]===void 0&&Re!==void 0?Re[Le]:te[Le])}var Le=arguments.length-2;if(Le===1)Be.children=ze;else if(1<Le){Re=Array(Le);for(var Je=0;Je<Le;Je++)Re[Je]=arguments[Je+2];Be.children=Re}return{$$typeof:s,type:N.type,key:Z,ref:pe,props:Be,_owner:de}},_t.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},_t.createElement=Y,_t.createFactory=function(N){var te=Y.bind(null,N);return te.type=N,te},_t.createRef=function(){return{current:null}},_t.forwardRef=function(N){return{$$typeof:u,render:N}},_t.isValidElement=b,_t.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:se}},_t.memo=function(N,te){return{$$typeof:d,type:N,compare:te===void 0?null:te}},_t.startTransition=function(N){var te=H.transition;H.transition={};try{N()}finally{H.transition=te}},_t.unstable_act=ie,_t.useCallback=function(N,te){return ue.current.useCallback(N,te)},_t.useContext=function(N){return ue.current.useContext(N)},_t.useDebugValue=function(){},_t.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},_t.useEffect=function(N,te){return ue.current.useEffect(N,te)},_t.useId=function(){return ue.current.useId()},_t.useImperativeHandle=function(N,te,ze){return ue.current.useImperativeHandle(N,te,ze)},_t.useInsertionEffect=function(N,te){return ue.current.useInsertionEffect(N,te)},_t.useLayoutEffect=function(N,te){return ue.current.useLayoutEffect(N,te)},_t.useMemo=function(N,te){return ue.current.useMemo(N,te)},_t.useReducer=function(N,te,ze){return ue.current.useReducer(N,te,ze)},_t.useRef=function(N){return ue.current.useRef(N)},_t.useState=function(N){return ue.current.useState(N)},_t.useSyncExternalStore=function(N,te,ze){return ue.current.useSyncExternalStore(N,te,ze)},_t.useTransition=function(){return ue.current.useTransition()},_t.version="18.3.1",_t}var $m;function td(){return $m||($m=1,gh.exports=yx()),gh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function Sx(){if(Zm)return ca;Zm=1;var s=td(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,d){var g,p={},_=null,y=null;d!==void 0&&(_=""+d),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(g in f)i.call(f,g)&&!a.hasOwnProperty(g)&&(p[g]=f[g]);if(u&&u.defaultProps)for(g in f=u.defaultProps,f)p[g]===void 0&&(p[g]=f[g]);return{$$typeof:e,type:u,key:_,ref:y,props:p,_owner:o.current}}return ca.Fragment=t,ca.jsx=c,ca.jsxs=c,ca}var Jm;function Ex(){return Jm||(Jm=1,mh.exports=Sx()),mh.exports}var ge=Ex(),Ie=td();const k_=O_(Ie),Mx=xx({__proto__:null,default:k_},[Ie]);var Wl={},_h={exports:{}},Vn={},vh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function Tx(){return Qm||(Qm=1,(function(s){function e(H,oe){var ie=H.length;H.push(oe);e:for(;0<ie;){var N=ie-1>>>1,te=H[N];if(0<o(te,oe))H[N]=oe,H[ie]=te,ie=N;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var oe=H[0],ie=H.pop();if(ie!==oe){H[0]=ie;e:for(var N=0,te=H.length,ze=te>>>1;N<ze;){var Be=2*(N+1)-1,Z=H[Be],pe=Be+1,de=H[pe];if(0>o(Z,ie))pe<te&&0>o(de,Z)?(H[N]=de,H[pe]=ie,N=pe):(H[N]=Z,H[Be]=ie,N=Be);else if(pe<te&&0>o(de,ie))H[N]=de,H[pe]=ie,N=pe;else break e}}return oe}function o(H,oe){var ie=H.sortIndex-oe.sortIndex;return ie!==0?ie:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();s.unstable_now=function(){return c.now()-u}}var f=[],d=[],g=1,p=null,_=3,y=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var oe=t(d);oe!==null;){if(oe.callback===null)i(d);else if(oe.startTime<=H)i(d),oe.sortIndex=oe.expirationTime,e(f,oe);else break;oe=t(d)}}function R(H){if(M=!1,P(H),!E)if(t(f)!==null)E=!0,se(U);else{var oe=t(d);oe!==null&&ue(R,oe.startTime-H)}}function U(H,oe){E=!1,M&&(M=!1,x(Y),Y=-1),y=!0;var ie=_;try{for(P(oe),p=t(f);p!==null&&(!(p.expirationTime>oe)||H&&!F());){var N=p.callback;if(typeof N=="function"){p.callback=null,_=p.priorityLevel;var te=N(p.expirationTime<=oe);oe=s.unstable_now(),typeof te=="function"?p.callback=te:p===t(f)&&i(f),P(oe)}else i(f);p=t(f)}if(p!==null)var ze=!0;else{var Be=t(d);Be!==null&&ue(R,Be.startTime-oe),ze=!1}return ze}finally{p=null,_=ie,y=!1}}var z=!1,O=null,Y=-1,C=5,b=-1;function F(){return!(s.unstable_now()-b<C)}function le(){if(O!==null){var H=s.unstable_now();b=H;var oe=!0;try{oe=O(!0,H)}finally{oe?ne():(z=!1,O=null)}}else z=!1}var ne;if(typeof D=="function")ne=function(){D(le)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,he=ae.port2;ae.port1.onmessage=le,ne=function(){he.postMessage(null)}}else ne=function(){S(le,0)};function se(H){O=H,z||(z=!0,ne())}function ue(H,oe){Y=S(function(){H(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,se(U))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var ie=_;_=oe;try{return H()}finally{_=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=_;_=H;try{return oe()}finally{_=ie}},s.unstable_scheduleCallback=function(H,oe,ie){var N=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?N+ie:N):ie=N,H){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ie+te,H={id:g++,callback:oe,priorityLevel:H,startTime:ie,expirationTime:te,sortIndex:-1},ie>N?(H.sortIndex=ie,e(d,H),t(f)===null&&H===t(d)&&(M?(x(Y),Y=-1):M=!0,ue(R,ie-N))):(H.sortIndex=te,e(f,H),E||y||(E=!0,se(U))),H},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(H){var oe=_;return function(){var ie=_;_=oe;try{return H.apply(this,arguments)}finally{_=ie}}}})(xh)),xh}var eg;function wx(){return eg||(eg=1,vh.exports=Tx()),vh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function Ax(){if(tg)return Vn;tg=1;var s=td(),e=wx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},p={};function _(n){return f.call(p,n)?!0:f.call(g,n)?!1:d.test(n)?p[n]=!0:(g[n]=!0,!1)}function y(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,h){if(r===null||typeof r>"u"||y(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,h,m,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,D);S[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,h){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,h)&&(l=null),h||m===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,h=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),z=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),F=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),H=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,N;function te(n){if(N===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var ze=!1;function Be(n,r){if(!n||ze)return"";ze=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(J){var h=J}Reflect.construct(n,[],r)}else{try{r.call()}catch(J){h=J}n.call(r.prototype)}else{try{throw Error()}catch(J){h=J}n()}}catch(J){if(J&&h&&typeof J.stack=="string"){for(var m=J.stack.split(`
`),v=h.stack.split(`
`),T=m.length-1,I=v.length-1;1<=T&&0<=I&&m[T]!==v[I];)I--;for(;1<=T&&0<=I;T--,I--)if(m[T]!==v[I]){if(T!==1||I!==1)do if(T--,I--,0>I||m[T]!==v[I]){var B=`
`+m[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=I);break}}}finally{ze=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?te(n):""}function Z(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Be(n.type,!1),n;case 11:return n=Be(n.type.render,!1),n;case 1:return n=Be(n.type,!0),n;default:return""}}function pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case z:return"Portal";case C:return"Profiler";case Y:return"StrictMode";case ne:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case le:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:pe(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return pe(n(r))}catch{}}return null}function de(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(r);case 8:return r===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Je(n){var r=Le(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(T){h=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ht(n){n._valueTracker||(n._valueTracker=Je(n))}function St(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=Le(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function k(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ct(n,r){var l=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Qe(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=Re(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Et(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function $e(n,r){Et(n,r);var l=Re(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Oe(n,r.type,l):r.hasOwnProperty("defaultValue")&&Oe(n,r.type,Re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function kt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Oe(n,r,l){(r!=="number"||k(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var ut=Array.isArray;function Gt(n,r,l,h){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Re(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,h&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function Wt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(ut(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Re(l)}}function w(n,r){var l=Re(r.value),h=Re(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function q(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function we(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){qe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),He[r]=He[n]})});function Me(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||He.hasOwnProperty(n)&&He[n]?(""+r).trim():r+"px"}function De(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,m=Me(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,m):n[l]=m}}var rt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,r){if(r){if(rt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function be(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Se=null,Ae=null,Ne=null;function ye(n){if(n=Ko(n)){if(typeof Se!="function")throw Error(t(280));var r=n.stateNode;r&&(r=sl(r),Se(n.stateNode,n.type,r))}}function fe(n){Ae?Ne?Ne.push(n):Ne=[n]:Ae=n}function We(){if(Ae){var n=Ae,r=Ne;if(Ne=Ae=null,ye(n),r)for(n=0;n<r.length;n++)ye(r[n])}}function lt(n,r){return n(r)}function Lt(){}var Mt=!1;function ei(n,r,l){if(Mt)return n(r,l);Mt=!0;try{return lt(n,r,l)}finally{Mt=!1,(Ae!==null||Ne!==null)&&(Lt(),We())}}function vn(n,r){var l=n.stateNode;if(l===null)return null;var h=sl(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Es=!1;if(u)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Es=!1}function Lo(n,r,l,h,m,v,T,I,B){var J=Array.prototype.slice.call(arguments,3);try{r.apply(l,J)}catch(_e){this.onError(_e)}}var cr=!1,Wr=null,zi=!1,Ms=null,Ts={onError:function(n){cr=!0,Wr=n}};function ka(n,r,l,h,m,v,T,I,B){cr=!1,Wr=null,Lo.apply(Ts,arguments)}function Ba(n,r,l,h,m,v,T,I,B){if(ka.apply(this,arguments),cr){if(cr){var J=Wr;cr=!1,Wr=null}else throw Error(t(198));zi||(zi=!0,Ms=J)}}function Hi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function za(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ha(n){if(Hi(n)!==n)throw Error(t(188))}function kc(n){var r=n.alternate;if(!r){if(r=Hi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var m=l.return;if(m===null)break;var v=m.alternate;if(v===null){if(h=m.return,h!==null){l=h;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===l)return Ha(m),n;if(v===h)return Ha(m),r;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=m,h=v;else{for(var T=!1,I=m.child;I;){if(I===l){T=!0,l=m,h=v;break}if(I===h){T=!0,h=m,l=v;break}I=I.sibling}if(!T){for(I=v.child;I;){if(I===l){T=!0,l=v,h=m;break}if(I===h){T=!0,h=v,l=m;break}I=I.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Va(n){return n=kc(n),n!==null?Ga(n):null}function Ga(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ga(n);if(r!==null)return r;n=n.sibling}return null}var A=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,Q=e.unstable_shouldYield,ee=e.unstable_requestPaint,G=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Ve=e.unstable_UserBlockingPriority,Ue=e.unstable_NormalPriority,it=e.unstable_LowPriority,st=e.unstable_IdlePriority,Ze=null,ot=null;function Pt(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:et,Bt=Math.log,Dt=Math.LN2;function et(n){return n>>>=0,n===0?32:31-(Bt(n)/Dt|0)|0}var Ut=64,vt=4194304;function rn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ui(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,m=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var I=T&~m;I!==0?h=rn(I):(v&=T,v!==0&&(h=rn(v)))}else T=l&~m,T!==0?h=rn(T):v!==0&&(h=rn(v));if(h===0)return 0;if(r!==0&&r!==h&&(r&m)===0&&(m=h&-h,v=r&-r,m>=v||m===16&&(v&4194240)!==0))return r;if((h&4)!==0&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-Tt(r),m=1<<l,h|=n[l],r&=~m;return h}function Rn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xr(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,m=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Tt(v),I=1<<T,B=m[T];B===-1?((I&l)===0||(I&h)!==0)&&(m[T]=Rn(I,r)):B<=r&&(n.expiredLanes|=I),v&=~I}}function zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=Ut;return Ut<<=1,(Ut&4194240)===0&&(Ut=64),n}function xn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Jt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Tt(r),n[r]=l}function yn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Tt(l),v=1<<m;r[m]=0,h[m]=-1,n[m]=-1,l&=~v}}function jr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-Tt(l),m=1<<h;m&r|n[h]&r&&(n[h]|=r),l&=~m}}var xt=0;function Rd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var bd,Bc,Cd,Pd,Ld,zc=!1,Wa=[],ur=null,hr=null,fr=null,Do=new Map,Io=new Map,dr=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(n,r){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Do.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(r.pointerId)}}function No(n,r,l,h,m,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[m]},r!==null&&(r=Ko(r),r!==null&&Bc(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function Vv(n,r,l,h,m){switch(r){case"focusin":return ur=No(ur,n,r,l,h,m),!0;case"dragenter":return hr=No(hr,n,r,l,h,m),!0;case"mouseover":return fr=No(fr,n,r,l,h,m),!0;case"pointerover":var v=m.pointerId;return Do.set(v,No(Do.get(v)||null,n,r,l,h,m)),!0;case"gotpointercapture":return v=m.pointerId,Io.set(v,No(Io.get(v)||null,n,r,l,h,m)),!0}return!1}function Id(n){var r=Yr(n.target);if(r!==null){var l=Hi(r);if(l!==null){if(r=l.tag,r===13){if(r=za(l),r!==null){n.blockedOn=r,Ld(n.priority,function(){Cd(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Vc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);ht=h,l.target.dispatchEvent(h),ht=null}else return r=Ko(l),r!==null&&Bc(r),n.blockedOn=l,!1;r.shift()}return!0}function Nd(n,r,l){Xa(n)&&l.delete(r)}function Gv(){zc=!1,ur!==null&&Xa(ur)&&(ur=null),hr!==null&&Xa(hr)&&(hr=null),fr!==null&&Xa(fr)&&(fr=null),Do.forEach(Nd),Io.forEach(Nd)}function Uo(n,r){n.blockedOn===r&&(n.blockedOn=null,zc||(zc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gv)))}function Fo(n){function r(m){return Uo(m,n)}if(0<Wa.length){Uo(Wa[0],n);for(var l=1;l<Wa.length;l++){var h=Wa[l];h.blockedOn===n&&(h.blockedOn=null)}}for(ur!==null&&Uo(ur,n),hr!==null&&Uo(hr,n),fr!==null&&Uo(fr,n),Do.forEach(r),Io.forEach(r),l=0;l<dr.length;l++)h=dr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<dr.length&&(l=dr[0],l.blockedOn===null);)Id(l),l.blockedOn===null&&dr.shift()}var ws=R.ReactCurrentBatchConfig,ja=!0;function Wv(n,r,l,h){var m=xt,v=ws.transition;ws.transition=null;try{xt=1,Hc(n,r,l,h)}finally{xt=m,ws.transition=v}}function Xv(n,r,l,h){var m=xt,v=ws.transition;ws.transition=null;try{xt=4,Hc(n,r,l,h)}finally{xt=m,ws.transition=v}}function Hc(n,r,l,h){if(ja){var m=Vc(n,r,l,h);if(m===null)su(n,r,h,Ya,l),Dd(n,h);else if(Vv(m,n,r,l,h))h.stopPropagation();else if(Dd(n,h),r&4&&-1<Hv.indexOf(n)){for(;m!==null;){var v=Ko(m);if(v!==null&&bd(v),v=Vc(n,r,l,h),v===null&&su(n,r,h,Ya,l),v===m)break;m=v}m!==null&&h.stopPropagation()}else su(n,r,h,null,l)}}var Ya=null;function Vc(n,r,l,h){if(Ya=null,n=V(h),n=Yr(n),n!==null)if(r=Hi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=za(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ya=n,null}function Ud(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Ce:return 1;case Ve:return 4;case Ue:case it:return 16;case st:return 536870912;default:return 16}default:return 16}}var pr=null,Gc=null,Ka=null;function Fd(){if(Ka)return Ka;var n,r=Gc,l=r.length,h,m="value"in pr?pr.value:pr.textContent,v=m.length;for(n=0;n<l&&r[n]===m[n];n++);var T=l-n;for(h=1;h<=T&&r[l-h]===m[v-h];h++);return Ka=m.slice(n,1<h?1-h:void 0)}function qa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $a(){return!0}function Od(){return!1}function jn(n){function r(l,h,m,v,T){this._reactName=l,this._targetInst=m,this.type=h,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?$a:Od,this.isPropagationStopped=Od,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),r}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=jn(As),Oo=ie({},As,{view:0,detail:0}),jv=jn(Oo),Xc,jc,ko,Za=ie({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ko&&(ko&&n.type==="mousemove"?(Xc=n.screenX-ko.screenX,jc=n.screenY-ko.screenY):jc=Xc=0,ko=n),Xc)},movementY:function(n){return"movementY"in n?n.movementY:jc}}),kd=jn(Za),Yv=ie({},Za,{dataTransfer:0}),Kv=jn(Yv),qv=ie({},Oo,{relatedTarget:0}),Yc=jn(qv),$v=ie({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=jn($v),Jv=ie({},As,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Qv=jn(Jv),e0=ie({},As,{data:0}),Bd=jn(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=i0[n])?!!r[n]:!1}function Kc(){return r0}var s0=ie({},Oo,{key:function(n){if(n.key){var r=t0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=qa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?n0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(n){return n.type==="keypress"?qa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),o0=jn(s0),a0=ie({},Za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=jn(a0),l0=ie({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),c0=jn(l0),u0=ie({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),h0=jn(u0),f0=ie({},Za,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=jn(f0),p0=[9,13,27,32],qc=u&&"CompositionEvent"in window,Bo=null;u&&"documentMode"in document&&(Bo=document.documentMode);var m0=u&&"TextEvent"in window&&!Bo,Hd=u&&(!qc||Bo&&8<Bo&&11>=Bo),Vd=" ",Gd=!1;function Wd(n,r){switch(n){case"keyup":return p0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function g0(n,r){switch(n){case"compositionend":return Xd(r);case"keypress":return r.which!==32?null:(Gd=!0,Vd);case"textInput":return n=r.data,n===Vd&&Gd?null:n;default:return null}}function _0(n,r){if(Rs)return n==="compositionend"||!qc&&Wd(n,r)?(n=Fd(),Ka=Gc=pr=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Hd&&r.locale!=="ko"?null:r.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!v0[n.type]:r==="textarea"}function Yd(n,r,l,h){fe(h),r=nl(r,"onChange"),0<r.length&&(l=new Wc("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var zo=null,Ho=null;function x0(n){hp(n,0)}function Ja(n){var r=Ds(n);if(St(r))return n}function y0(n,r){if(n==="change")return r}var Kd=!1;if(u){var $c;if(u){var Zc="oninput"in document;if(!Zc){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),Zc=typeof qd.oninput=="function"}$c=Zc}else $c=!1;Kd=$c&&(!document.documentMode||9<document.documentMode)}function $d(){zo&&(zo.detachEvent("onpropertychange",Zd),Ho=zo=null)}function Zd(n){if(n.propertyName==="value"&&Ja(Ho)){var r=[];Yd(r,Ho,n,V(n)),ei(x0,r)}}function S0(n,r,l){n==="focusin"?($d(),zo=r,Ho=l,zo.attachEvent("onpropertychange",Zd)):n==="focusout"&&$d()}function E0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ja(Ho)}function M0(n,r){if(n==="click")return Ja(r)}function T0(n,r){if(n==="input"||n==="change")return Ja(r)}function w0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var hi=typeof Object.is=="function"?Object.is:w0;function Vo(n,r){if(hi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var m=l[h];if(!f.call(r,m)||!hi(n[m],r[m]))return!1}return!0}function Jd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qd(n,r){var l=Jd(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Jd(l)}}function ep(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?ep(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function tp(){for(var n=window,r=k();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=k(n.document)}return r}function Jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function A0(n){var r=tp(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&ep(l.ownerDocument.documentElement,l)){if(h!==null&&Jc(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,v=Math.min(h.start,m);h=h.end===void 0?v:Math.min(h.end,m),!n.extend&&v>h&&(m=h,h=v,v=m),m=Qd(l,v);var T=Qd(l,h);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),v>h?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var R0=u&&"documentMode"in document&&11>=document.documentMode,bs=null,Qc=null,Go=null,eu=!1;function np(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;eu||bs==null||bs!==k(h)||(h=bs,"selectionStart"in h&&Jc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Go&&Vo(Go,h)||(Go=h,h=nl(Qc,"onSelect"),0<h.length&&(r=new Wc("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=bs)))}function Qa(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Cs={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},tu={},ip={};u&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function el(n){if(tu[n])return tu[n];if(!Cs[n])return n;var r=Cs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in ip)return tu[n]=r[l];return n}var rp=el("animationend"),sp=el("animationiteration"),op=el("animationstart"),ap=el("transitionend"),lp=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,r){lp.set(n,r),a(r,[n])}for(var nu=0;nu<cp.length;nu++){var iu=cp[nu],b0=iu.toLowerCase(),C0=iu[0].toUpperCase()+iu.slice(1);mr(b0,"on"+C0)}mr(rp,"onAnimationEnd"),mr(sp,"onAnimationIteration"),mr(op,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(ap,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function up(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,Ba(h,r,void 0,n),n.currentTarget=null}function hp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],m=h.event;h=h.listeners;e:{var v=void 0;if(r)for(var T=h.length-1;0<=T;T--){var I=h[T],B=I.instance,J=I.currentTarget;if(I=I.listener,B!==v&&m.isPropagationStopped())break e;up(m,I,J),v=B}else for(T=0;T<h.length;T++){if(I=h[T],B=I.instance,J=I.currentTarget,I=I.listener,B!==v&&m.isPropagationStopped())break e;up(m,I,J),v=B}}}if(zi)throw n=Ms,zi=!1,Ms=null,n}function Xt(n,r){var l=r[hu];l===void 0&&(l=r[hu]=new Set);var h=n+"__bubble";l.has(h)||(fp(r,n,2,!1),l.add(h))}function ru(n,r,l){var h=0;r&&(h|=4),fp(l,n,h,r)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Xo(n){if(!n[tl]){n[tl]=!0,i.forEach(function(l){l!=="selectionchange"&&(P0.has(l)||ru(l,!1,n),ru(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[tl]||(r[tl]=!0,ru("selectionchange",!1,r))}}function fp(n,r,l,h){switch(Ud(r)){case 1:var m=Wv;break;case 4:m=Xv;break;default:m=Hc}l=m.bind(null,r,l,n),m=void 0,!Es||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),h?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function su(n,r,l,h,m){var v=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var I=h.stateNode.containerInfo;if(I===m||I.nodeType===8&&I.parentNode===m)break;if(T===4)for(T=h.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===m||B.nodeType===8&&B.parentNode===m))return;T=T.return}for(;I!==null;){if(T=Yr(I),T===null)return;if(B=T.tag,B===5||B===6){h=v=T;continue e}I=I.parentNode}}h=h.return}ei(function(){var J=v,_e=V(l),xe=[];e:{var me=lp.get(n);if(me!==void 0){var Fe=Wc,Ge=n;switch(n){case"keypress":if(qa(l)===0)break e;case"keydown":case"keyup":Fe=o0;break;case"focusin":Ge="focus",Fe=Yc;break;case"focusout":Ge="blur",Fe=Yc;break;case"beforeblur":case"afterblur":Fe=Yc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=c0;break;case rp:case sp:case op:Fe=Zv;break;case ap:Fe=h0;break;case"scroll":Fe=jv;break;case"wheel":Fe=d0;break;case"copy":case"cut":case"paste":Fe=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=zd}var Xe=(r&4)!==0,Qt=!Xe&&n==="scroll",K=Xe?me!==null?me+"Capture":null:me;Xe=[];for(var W=J,$;W!==null;){$=W;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,K!==null&&(Te=vn(W,K),Te!=null&&Xe.push(jo(W,Te,$)))),Qt)break;W=W.return}0<Xe.length&&(me=new Fe(me,Ge,null,l,_e),xe.push({event:me,listeners:Xe}))}}if((r&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",me&&l!==ht&&(Ge=l.relatedTarget||l.fromElement)&&(Yr(Ge)||Ge[Vi]))break e;if((Fe||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Fe?(Ge=l.relatedTarget||l.toElement,Fe=J,Ge=Ge?Yr(Ge):null,Ge!==null&&(Qt=Hi(Ge),Ge!==Qt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Fe=null,Ge=J),Fe!==Ge)){if(Xe=kd,Te="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=zd,Te="onPointerLeave",K="onPointerEnter",W="pointer"),Qt=Fe==null?me:Ds(Fe),$=Ge==null?me:Ds(Ge),me=new Xe(Te,W+"leave",Fe,l,_e),me.target=Qt,me.relatedTarget=$,Te=null,Yr(_e)===J&&(Xe=new Xe(K,W+"enter",Ge,l,_e),Xe.target=$,Xe.relatedTarget=Qt,Te=Xe),Qt=Te,Fe&&Ge)t:{for(Xe=Fe,K=Ge,W=0,$=Xe;$;$=Ps($))W++;for($=0,Te=K;Te;Te=Ps(Te))$++;for(;0<W-$;)Xe=Ps(Xe),W--;for(;0<$-W;)K=Ps(K),$--;for(;W--;){if(Xe===K||K!==null&&Xe===K.alternate)break t;Xe=Ps(Xe),K=Ps(K)}Xe=null}else Xe=null;Fe!==null&&dp(xe,me,Fe,Xe,!1),Ge!==null&&Qt!==null&&dp(xe,Qt,Ge,Xe,!0)}}e:{if(me=J?Ds(J):window,Fe=me.nodeName&&me.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&me.type==="file")var Ye=y0;else if(jd(me))if(Kd)Ye=T0;else{Ye=E0;var tt=S0}else(Fe=me.nodeName)&&Fe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ye=M0);if(Ye&&(Ye=Ye(n,J))){Yd(xe,Ye,l,_e);break e}tt&&tt(n,me,J),n==="focusout"&&(tt=me._wrapperState)&&tt.controlled&&me.type==="number"&&Oe(me,"number",me.value)}switch(tt=J?Ds(J):window,n){case"focusin":(jd(tt)||tt.contentEditable==="true")&&(bs=tt,Qc=J,Go=null);break;case"focusout":Go=Qc=bs=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,np(xe,l,_e);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":np(xe,l,_e)}var nt;if(qc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Rs?Wd(n,l)&&(at="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(Hd&&l.locale!=="ko"&&(Rs||at!=="onCompositionStart"?at==="onCompositionEnd"&&Rs&&(nt=Fd()):(pr=_e,Gc="value"in pr?pr.value:pr.textContent,Rs=!0)),tt=nl(J,at),0<tt.length&&(at=new Bd(at,n,null,l,_e),xe.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Xd(l),nt!==null&&(at.data=nt)))),(nt=m0?g0(n,l):_0(n,l))&&(J=nl(J,"onBeforeInput"),0<J.length&&(_e=new Bd("onBeforeInput","beforeinput",null,l,_e),xe.push({event:_e,listeners:J}),_e.data=nt))}hp(xe,r)})}function jo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function nl(n,r){for(var l=r+"Capture",h=[];n!==null;){var m=n,v=m.stateNode;m.tag===5&&v!==null&&(m=v,v=vn(n,l),v!=null&&h.unshift(jo(n,v,m)),v=vn(n,r),v!=null&&h.push(jo(n,v,m))),n=n.return}return h}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dp(n,r,l,h,m){for(var v=r._reactName,T=[];l!==null&&l!==h;){var I=l,B=I.alternate,J=I.stateNode;if(B!==null&&B===h)break;I.tag===5&&J!==null&&(I=J,m?(B=vn(l,v),B!=null&&T.unshift(jo(l,B,I))):m||(B=vn(l,v),B!=null&&T.push(jo(l,B,I)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var L0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function pp(n){return(typeof n=="string"?n:""+n).replace(L0,`
`).replace(D0,"")}function il(n,r,l){if(r=pp(r),pp(n)!==r&&l)throw Error(t(425))}function rl(){}var ou=null,au=null;function lu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,I0=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(n){return mp.resolve(null).then(n).catch(U0)}:cu;function U0(n){setTimeout(function(){throw n})}function uu(n,r){var l=r,h=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(h===0){n.removeChild(m),Fo(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=m}while(l);Fo(r)}function gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function gp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),wi="__reactFiber$"+Ls,Yo="__reactProps$"+Ls,Vi="__reactContainer$"+Ls,hu="__reactEvents$"+Ls,F0="__reactListeners$"+Ls,O0="__reactHandles$"+Ls;function Yr(n){var r=n[wi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Vi]||l[wi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=gp(n);n!==null;){if(l=n[wi])return l;n=gp(n)}return r}n=l,l=n.parentNode}return null}function Ko(n){return n=n[wi]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function sl(n){return n[Yo]||null}var fu=[],Is=-1;function _r(n){return{current:n}}function jt(n){0>Is||(n.current=fu[Is],fu[Is]=null,Is--)}function Vt(n,r){Is++,fu[Is]=n.current,n.current=r}var vr={},Sn=_r(vr),On=_r(!1),Kr=vr;function Ns(n,r){var l=n.type.contextTypes;if(!l)return vr;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var m={},v;for(v in l)m[v]=r[v];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function kn(n){return n=n.childContextTypes,n!=null}function ol(){jt(On),jt(Sn)}function _p(n,r,l){if(Sn.current!==vr)throw Error(t(168));Vt(Sn,r),Vt(On,l)}function vp(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var m in h)if(!(m in r))throw Error(t(108,de(n)||"Unknown",m));return ie({},l,h)}function al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,Kr=Sn.current,Vt(Sn,n),Vt(On,On.current),!0}function xp(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=vp(n,r,Kr),h.__reactInternalMemoizedMergedChildContext=n,jt(On),jt(Sn),Vt(Sn,n)):jt(On),Vt(On,l)}var Gi=null,ll=!1,du=!1;function yp(n){Gi===null?Gi=[n]:Gi.push(n)}function k0(n){ll=!0,yp(n)}function xr(){if(!du&&Gi!==null){du=!0;var n=0,r=xt;try{var l=Gi;for(xt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Gi=null,ll=!1}catch(m){throw Gi!==null&&(Gi=Gi.slice(n+1)),A(Ce,xr),m}finally{xt=r,du=!1}}return null}var Us=[],Fs=0,cl=null,ul=0,ti=[],ni=0,qr=null,Wi=1,Xi="";function $r(n,r){Us[Fs++]=ul,Us[Fs++]=cl,cl=n,ul=r}function Sp(n,r,l){ti[ni++]=Wi,ti[ni++]=Xi,ti[ni++]=qr,qr=n;var h=Wi;n=Xi;var m=32-Tt(h)-1;h&=~(1<<m),l+=1;var v=32-Tt(r)+m;if(30<v){var T=m-m%5;v=(h&(1<<T)-1).toString(32),h>>=T,m-=T,Wi=1<<32-Tt(r)+m|l<<m|h,Xi=v+n}else Wi=1<<v|l<<m|h,Xi=n}function pu(n){n.return!==null&&($r(n,1),Sp(n,1,0))}function mu(n){for(;n===cl;)cl=Us[--Fs],Us[Fs]=null,ul=Us[--Fs],Us[Fs]=null;for(;n===qr;)qr=ti[--ni],ti[ni]=null,Xi=ti[--ni],ti[ni]=null,Wi=ti[--ni],ti[ni]=null}var Yn=null,Kn=null,Yt=!1,fi=null;function Ep(n,r){var l=oi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Mp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Yn=n,Kn=gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Yn=n,Kn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=qr!==null?{id:Wi,overflow:Xi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=oi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Yn=n,Kn=null,!0):!1;default:return!1}}function gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _u(n){if(Yt){var r=Kn;if(r){var l=r;if(!Mp(n,r)){if(gu(n))throw Error(t(418));r=gr(l.nextSibling);var h=Yn;r&&Mp(n,r)?Ep(h,l):(n.flags=n.flags&-4097|2,Yt=!1,Yn=n)}}else{if(gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Yn=n}}}function Tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function hl(n){if(n!==Yn)return!1;if(!Yt)return Tp(n),Yt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!lu(n.type,n.memoizedProps)),r&&(r=Kn)){if(gu(n))throw wp(),Error(t(418));for(;r;)Ep(n,r),r=gr(r.nextSibling)}if(Tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Kn=gr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Kn=null}}else Kn=Yn?gr(n.stateNode.nextSibling):null;return!0}function wp(){for(var n=Kn;n;)n=gr(n.nextSibling)}function Os(){Kn=Yn=null,Yt=!1}function vu(n){fi===null?fi=[n]:fi.push(n)}var B0=R.ReactCurrentBatchConfig;function qo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var m=h,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var I=m.refs;T===null?delete I[v]:I[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function fl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Ap(n){var r=n._init;return r(n._payload)}function Rp(n){function r(K,W){if(n){var $=K.deletions;$===null?(K.deletions=[W],K.flags|=16):$.push(W)}}function l(K,W){if(!n)return null;for(;W!==null;)r(K,W),W=W.sibling;return null}function h(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function m(K,W){return K=Rr(K,W),K.index=0,K.sibling=null,K}function v(K,W,$){return K.index=$,n?($=K.alternate,$!==null?($=$.index,$<W?(K.flags|=2,W):$):(K.flags|=2,W)):(K.flags|=1048576,W)}function T(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,W,$,Te){return W===null||W.tag!==6?(W=ch($,K.mode,Te),W.return=K,W):(W=m(W,$),W.return=K,W)}function B(K,W,$,Te){var Ye=$.type;return Ye===O?_e(K,W,$.props.children,Te,$.key):W!==null&&(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&Ap(Ye)===W.type)?(Te=m(W,$.props),Te.ref=qo(K,W,$),Te.return=K,Te):(Te=Fl($.type,$.key,$.props,null,K.mode,Te),Te.ref=qo(K,W,$),Te.return=K,Te)}function J(K,W,$,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=uh($,K.mode,Te),W.return=K,W):(W=m(W,$.children||[]),W.return=K,W)}function _e(K,W,$,Te,Ye){return W===null||W.tag!==7?(W=rs($,K.mode,Te,Ye),W.return=K,W):(W=m(W,$),W.return=K,W)}function xe(K,W,$){if(typeof W=="string"&&W!==""||typeof W=="number")return W=ch(""+W,K.mode,$),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return $=Fl(W.type,W.key,W.props,null,K.mode,$),$.ref=qo(K,null,W),$.return=K,$;case z:return W=uh(W,K.mode,$),W.return=K,W;case se:var Te=W._init;return xe(K,Te(W._payload),$)}if(ut(W)||oe(W))return W=rs(W,K.mode,$,null),W.return=K,W;fl(K,W)}return null}function me(K,W,$,Te){var Ye=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ye!==null?null:I(K,W,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case U:return $.key===Ye?B(K,W,$,Te):null;case z:return $.key===Ye?J(K,W,$,Te):null;case se:return Ye=$._init,me(K,W,Ye($._payload),Te)}if(ut($)||oe($))return Ye!==null?null:_e(K,W,$,Te,null);fl(K,$)}return null}function Fe(K,W,$,Te,Ye){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get($)||null,I(W,K,""+Te,Ye);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case U:return K=K.get(Te.key===null?$:Te.key)||null,B(W,K,Te,Ye);case z:return K=K.get(Te.key===null?$:Te.key)||null,J(W,K,Te,Ye);case se:var tt=Te._init;return Fe(K,W,$,tt(Te._payload),Ye)}if(ut(Te)||oe(Te))return K=K.get($)||null,_e(W,K,Te,Ye,null);fl(W,Te)}return null}function Ge(K,W,$,Te){for(var Ye=null,tt=null,nt=W,at=W=0,fn=null;nt!==null&&at<$.length;at++){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var Rt=me(K,nt,$[at],Te);if(Rt===null){nt===null&&(nt=fn);break}n&&nt&&Rt.alternate===null&&r(K,nt),W=v(Rt,W,at),tt===null?Ye=Rt:tt.sibling=Rt,tt=Rt,nt=fn}if(at===$.length)return l(K,nt),Yt&&$r(K,at),Ye;if(nt===null){for(;at<$.length;at++)nt=xe(K,$[at],Te),nt!==null&&(W=v(nt,W,at),tt===null?Ye=nt:tt.sibling=nt,tt=nt);return Yt&&$r(K,at),Ye}for(nt=h(K,nt);at<$.length;at++)fn=Fe(nt,K,at,$[at],Te),fn!==null&&(n&&fn.alternate!==null&&nt.delete(fn.key===null?at:fn.key),W=v(fn,W,at),tt===null?Ye=fn:tt.sibling=fn,tt=fn);return n&&nt.forEach(function(br){return r(K,br)}),Yt&&$r(K,at),Ye}function Xe(K,W,$,Te){var Ye=oe($);if(typeof Ye!="function")throw Error(t(150));if($=Ye.call($),$==null)throw Error(t(151));for(var tt=Ye=null,nt=W,at=W=0,fn=null,Rt=$.next();nt!==null&&!Rt.done;at++,Rt=$.next()){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var br=me(K,nt,Rt.value,Te);if(br===null){nt===null&&(nt=fn);break}n&&nt&&br.alternate===null&&r(K,nt),W=v(br,W,at),tt===null?Ye=br:tt.sibling=br,tt=br,nt=fn}if(Rt.done)return l(K,nt),Yt&&$r(K,at),Ye;if(nt===null){for(;!Rt.done;at++,Rt=$.next())Rt=xe(K,Rt.value,Te),Rt!==null&&(W=v(Rt,W,at),tt===null?Ye=Rt:tt.sibling=Rt,tt=Rt);return Yt&&$r(K,at),Ye}for(nt=h(K,nt);!Rt.done;at++,Rt=$.next())Rt=Fe(nt,K,at,Rt.value,Te),Rt!==null&&(n&&Rt.alternate!==null&&nt.delete(Rt.key===null?at:Rt.key),W=v(Rt,W,at),tt===null?Ye=Rt:tt.sibling=Rt,tt=Rt);return n&&nt.forEach(function(vx){return r(K,vx)}),Yt&&$r(K,at),Ye}function Qt(K,W,$,Te){if(typeof $=="object"&&$!==null&&$.type===O&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case U:e:{for(var Ye=$.key,tt=W;tt!==null;){if(tt.key===Ye){if(Ye=$.type,Ye===O){if(tt.tag===7){l(K,tt.sibling),W=m(tt,$.props.children),W.return=K,K=W;break e}}else if(tt.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&Ap(Ye)===tt.type){l(K,tt.sibling),W=m(tt,$.props),W.ref=qo(K,tt,$),W.return=K,K=W;break e}l(K,tt);break}else r(K,tt);tt=tt.sibling}$.type===O?(W=rs($.props.children,K.mode,Te,$.key),W.return=K,K=W):(Te=Fl($.type,$.key,$.props,null,K.mode,Te),Te.ref=qo(K,W,$),Te.return=K,K=Te)}return T(K);case z:e:{for(tt=$.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){l(K,W.sibling),W=m(W,$.children||[]),W.return=K,K=W;break e}else{l(K,W);break}else r(K,W);W=W.sibling}W=uh($,K.mode,Te),W.return=K,K=W}return T(K);case se:return tt=$._init,Qt(K,W,tt($._payload),Te)}if(ut($))return Ge(K,W,$,Te);if(oe($))return Xe(K,W,$,Te);fl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,W!==null&&W.tag===6?(l(K,W.sibling),W=m(W,$),W.return=K,K=W):(l(K,W),W=ch($,K.mode,Te),W.return=K,K=W),T(K)):l(K,W)}return Qt}var ks=Rp(!0),bp=Rp(!1),dl=_r(null),pl=null,Bs=null,xu=null;function yu(){xu=Bs=pl=null}function Su(n){var r=dl.current;jt(dl),n._currentValue=r}function Eu(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function zs(n,r){pl=n,xu=Bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function ii(n){var r=n._currentValue;if(xu!==n)if(n={context:n,memoizedValue:r,next:null},Bs===null){if(pl===null)throw Error(t(308));Bs=n,pl.dependencies={lanes:0,firstContext:n}}else Bs=Bs.next=n;return r}var Zr=null;function Mu(n){Zr===null?Zr=[n]:Zr.push(n)}function Cp(n,r,l,h){var m=r.interleaved;return m===null?(l.next=l,Mu(r)):(l.next=m.next,m.next=l),r.interleaved=l,ji(n,h)}function ji(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var yr=!1;function Tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Sr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,(At&2)!==0){var m=h.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),h.pending=r,ji(n,l)}return m=h.interleaved,m===null?(r.next=r,Mu(h)):(r.next=m.next,m.next=r),h.interleaved=r,ji(n,l)}function ml(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,jr(n,l)}}function Lp(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var m=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?m=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?m=v=r:v=v.next=r}else m=v=r;l={baseState:h.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function gl(n,r,l,h){var m=n.updateQueue;yr=!1;var v=m.firstBaseUpdate,T=m.lastBaseUpdate,I=m.shared.pending;if(I!==null){m.shared.pending=null;var B=I,J=B.next;B.next=null,T===null?v=J:T.next=J,T=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==T&&(I===null?_e.firstBaseUpdate=J:I.next=J,_e.lastBaseUpdate=B))}if(v!==null){var xe=m.baseState;T=0,_e=J=B=null,I=v;do{var me=I.lane,Fe=I.eventTime;if((h&me)===me){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ge=n,Xe=I;switch(me=r,Fe=l,Xe.tag){case 1:if(Ge=Xe.payload,typeof Ge=="function"){xe=Ge.call(Fe,xe,me);break e}xe=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Xe.payload,me=typeof Ge=="function"?Ge.call(Fe,xe,me):Ge,me==null)break e;xe=ie({},xe,me);break e;case 2:yr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,me=m.effects,me===null?m.effects=[I]:me.push(I))}else Fe={eventTime:Fe,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(J=_e=Fe,B=xe):_e=_e.next=Fe,T|=me;if(I=I.next,I===null){if(I=m.shared.pending,I===null)break;me=I,I=me.next,me.next=null,m.lastBaseUpdate=me,m.shared.pending=null}}while(!0);if(_e===null&&(B=xe),m.baseState=B,m.firstBaseUpdate=J,m.lastBaseUpdate=_e,r=m.shared.interleaved,r!==null){m=r;do T|=m.lane,m=m.next;while(m!==r)}else v===null&&(m.shared.lanes=0);es|=T,n.lanes=T,n.memoizedState=xe}}function Dp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],m=h.callback;if(m!==null){if(h.callback=null,h=l,typeof m!="function")throw Error(t(191,m));m.call(h)}}}var $o={},Ai=_r($o),Zo=_r($o),Jo=_r($o);function Jr(n){if(n===$o)throw Error(t(174));return n}function wu(n,r){switch(Vt(Jo,r),Vt(Zo,n),Vt(Ai,$o),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ve(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ve(r,n)}jt(Ai),Vt(Ai,r)}function Hs(){jt(Ai),jt(Zo),jt(Jo)}function Ip(n){Jr(Jo.current);var r=Jr(Ai.current),l=ve(r,n.type);r!==l&&(Vt(Zo,n),Vt(Ai,l))}function Au(n){Zo.current===n&&(jt(Ai),jt(Zo))}var Kt=_r(0);function _l(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ru=[];function bu(){for(var n=0;n<Ru.length;n++)Ru[n]._workInProgressVersionPrimary=null;Ru.length=0}var vl=R.ReactCurrentDispatcher,Cu=R.ReactCurrentBatchConfig,Qr=0,qt=null,sn=null,un=null,xl=!1,Qo=!1,ea=0,z0=0;function En(){throw Error(t(321))}function Pu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!hi(n[l],r[l]))return!1;return!0}function Lu(n,r,l,h,m,v){if(Qr=v,qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,vl.current=n===null||n.memoizedState===null?W0:X0,n=l(h,m),Qo){v=0;do{if(Qo=!1,ea=0,25<=v)throw Error(t(301));v+=1,un=sn=null,r.updateQueue=null,vl.current=j0,n=l(h,m)}while(Qo)}if(vl.current=El,r=sn!==null&&sn.next!==null,Qr=0,un=sn=qt=null,xl=!1,r)throw Error(t(300));return n}function Du(){var n=ea!==0;return ea=0,n}function Ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?qt.memoizedState=un=n:un=un.next=n,un}function ri(){if(sn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var r=un===null?qt.memoizedState:un.next;if(r!==null)un=r,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},un===null?qt.memoizedState=un=n:un=un.next=n}return un}function ta(n,r){return typeof r=="function"?r(n):r}function Iu(n){var r=ri(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=sn,m=h.baseQueue,v=l.pending;if(v!==null){if(m!==null){var T=m.next;m.next=v.next,v.next=T}h.baseQueue=m=v,l.pending=null}if(m!==null){v=m.next,h=h.baseState;var I=T=null,B=null,J=v;do{var _e=J.lane;if((Qr&_e)===_e)B!==null&&(B=B.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),h=J.hasEagerState?J.eagerState:n(h,J.action);else{var xe={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};B===null?(I=B=xe,T=h):B=B.next=xe,qt.lanes|=_e,es|=_e}J=J.next}while(J!==null&&J!==v);B===null?T=h:B.next=I,hi(h,r.memoizedState)||(Bn=!0),r.memoizedState=h,r.baseState=T,r.baseQueue=B,l.lastRenderedState=h}if(n=l.interleaved,n!==null){m=n;do v=m.lane,qt.lanes|=v,es|=v,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Nu(n){var r=ri(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,m=l.pending,v=r.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do v=n(v,T.action),T=T.next;while(T!==m);hi(v,r.memoizedState)||(Bn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,h]}function Np(){}function Up(n,r){var l=qt,h=ri(),m=r(),v=!hi(h.memoizedState,m);if(v&&(h.memoizedState=m,Bn=!0),h=h.queue,Uu(kp.bind(null,l,h,n),[n]),h.getSnapshot!==r||v||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,na(9,Op.bind(null,l,h,m,r),void 0,null),hn===null)throw Error(t(349));(Qr&30)!==0||Fp(l,r,m)}return m}function Fp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Op(n,r,l,h){r.value=l,r.getSnapshot=h,Bp(r)&&zp(n)}function kp(n,r,l){return l(function(){Bp(r)&&zp(n)})}function Bp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!hi(n,l)}catch{return!0}}function zp(n){var r=ji(n,1);r!==null&&gi(r,n,1,-1)}function Hp(n){var r=Ri();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},r.queue=n,n=n.dispatch=G0.bind(null,qt,n),[r.memoizedState,n]}function na(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function Vp(){return ri().memoizedState}function yl(n,r,l,h){var m=Ri();qt.flags|=n,m.memoizedState=na(1|r,l,void 0,h===void 0?null:h)}function Sl(n,r,l,h){var m=ri();h=h===void 0?null:h;var v=void 0;if(sn!==null){var T=sn.memoizedState;if(v=T.destroy,h!==null&&Pu(h,T.deps)){m.memoizedState=na(r,l,v,h);return}}qt.flags|=n,m.memoizedState=na(1|r,l,v,h)}function Gp(n,r){return yl(8390656,8,n,r)}function Uu(n,r){return Sl(2048,8,n,r)}function Wp(n,r){return Sl(4,2,n,r)}function Xp(n,r){return Sl(4,4,n,r)}function jp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Yp(n,r,l){return l=l!=null?l.concat([n]):null,Sl(4,4,jp.bind(null,r,n),l)}function Fu(){}function Kp(n,r){var l=ri();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Pu(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function qp(n,r){var l=ri();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Pu(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function $p(n,r,l){return(Qr&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(hi(l,r)||(l=bn(),qt.lanes|=l,es|=l,n.baseState=!0),r)}function H0(n,r){var l=xt;xt=l!==0&&4>l?l:4,n(!0);var h=Cu.transition;Cu.transition={};try{n(!1),r()}finally{xt=l,Cu.transition=h}}function Zp(){return ri().memoizedState}function V0(n,r,l){var h=wr(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Jp(n))Qp(r,l);else if(l=Cp(n,r,l,h),l!==null){var m=Pn();gi(l,n,h,m),em(l,r,h)}}function G0(n,r,l){var h=wr(n),m={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Jp(n))Qp(r,m);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,I=v(T,l);if(m.hasEagerState=!0,m.eagerState=I,hi(I,T)){var B=r.interleaved;B===null?(m.next=m,Mu(r)):(m.next=B.next,B.next=m),r.interleaved=m;return}}catch{}finally{}l=Cp(n,r,m,h),l!==null&&(m=Pn(),gi(l,n,h,m),em(l,r,h))}}function Jp(n){var r=n.alternate;return n===qt||r!==null&&r===qt}function Qp(n,r){Qo=xl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function em(n,r,l){if((l&4194240)!==0){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,jr(n,l)}}var El={readContext:ii,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},W0={readContext:ii,useCallback:function(n,r){return Ri().memoizedState=[n,r===void 0?null:r],n},useContext:ii,useEffect:Gp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,yl(4194308,4,jp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return yl(4194308,4,n,r)},useInsertionEffect:function(n,r){return yl(4,2,n,r)},useMemo:function(n,r){var l=Ri();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Ri();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=V0.bind(null,qt,n),[h.memoizedState,n]},useRef:function(n){var r=Ri();return n={current:n},r.memoizedState=n},useState:Hp,useDebugValue:Fu,useDeferredValue:function(n){return Ri().memoizedState=n},useTransition:function(){var n=Hp(!1),r=n[0];return n=H0.bind(null,n[1]),Ri().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=qt,m=Ri();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),hn===null)throw Error(t(349));(Qr&30)!==0||Fp(h,r,l)}m.memoizedState=l;var v={value:l,getSnapshot:r};return m.queue=v,Gp(kp.bind(null,h,v,n),[n]),h.flags|=2048,na(9,Op.bind(null,h,v,l,r),void 0,null),l},useId:function(){var n=Ri(),r=hn.identifierPrefix;if(Yt){var l=Xi,h=Wi;l=(h&~(1<<32-Tt(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=ea++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=z0++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},X0={readContext:ii,useCallback:Kp,useContext:ii,useEffect:Uu,useImperativeHandle:Yp,useInsertionEffect:Wp,useLayoutEffect:Xp,useMemo:qp,useReducer:Iu,useRef:Vp,useState:function(){return Iu(ta)},useDebugValue:Fu,useDeferredValue:function(n){var r=ri();return $p(r,sn.memoizedState,n)},useTransition:function(){var n=Iu(ta)[0],r=ri().memoizedState;return[n,r]},useMutableSource:Np,useSyncExternalStore:Up,useId:Zp,unstable_isNewReconciler:!1},j0={readContext:ii,useCallback:Kp,useContext:ii,useEffect:Uu,useImperativeHandle:Yp,useInsertionEffect:Wp,useLayoutEffect:Xp,useMemo:qp,useReducer:Nu,useRef:Vp,useState:function(){return Nu(ta)},useDebugValue:Fu,useDeferredValue:function(n){var r=ri();return sn===null?r.memoizedState=n:$p(r,sn.memoizedState,n)},useTransition:function(){var n=Nu(ta)[0],r=ri().memoizedState;return[n,r]},useMutableSource:Np,useSyncExternalStore:Up,useId:Zp,unstable_isNewReconciler:!1};function di(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ou(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:ie({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ml={isMounted:function(n){return(n=n._reactInternals)?Hi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=Pn(),m=wr(n),v=Yi(h,m);v.payload=r,l!=null&&(v.callback=l),r=Sr(n,v,m),r!==null&&(gi(r,n,m,h),ml(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=Pn(),m=wr(n),v=Yi(h,m);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Sr(n,v,m),r!==null&&(gi(r,n,m,h),ml(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Pn(),h=wr(n),m=Yi(l,h);m.tag=2,r!=null&&(m.callback=r),r=Sr(n,m,h),r!==null&&(gi(r,n,h,l),ml(r,n,h))}};function tm(n,r,l,h,m,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,v,T):r.prototype&&r.prototype.isPureReactComponent?!Vo(l,h)||!Vo(m,v):!0}function nm(n,r,l){var h=!1,m=vr,v=r.contextType;return typeof v=="object"&&v!==null?v=ii(v):(m=kn(r)?Kr:Sn.current,h=r.contextTypes,v=(h=h!=null)?Ns(n,m):vr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ml,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=v),r}function im(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&Ml.enqueueReplaceState(r,r.state,null)}function ku(n,r,l,h){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Tu(n);var v=r.contextType;typeof v=="object"&&v!==null?m.context=ii(v):(v=kn(r)?Kr:Sn.current,m.context=Ns(n,v)),m.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Ou(n,r,v,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Ml.enqueueReplaceState(m,m.state,null),gl(n,l,m,h),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Vs(n,r){try{var l="",h=r;do l+=Z(h),h=h.return;while(h);var m=l}catch(v){m=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:m,digest:null}}function Bu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Y0=typeof WeakMap=="function"?WeakMap:Map;function rm(n,r,l){l=Yi(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){Pl||(Pl=!0,th=h),zu(n,r)},l}function sm(n,r,l){l=Yi(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var m=r.value;l.payload=function(){return h(m)},l.callback=function(){zu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){zu(n,r),typeof h!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function om(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new Y0;var m=new Set;h.set(r,m)}else m=h.get(r),m===void 0&&(m=new Set,h.set(r,m));m.has(l)||(m.add(l),n=ax.bind(null,n,r,l),r.then(n,n))}function am(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function lm(n,r,l,h,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Yi(-1,1),r.tag=2,Sr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var K0=R.ReactCurrentOwner,Bn=!1;function Cn(n,r,l,h){r.child=n===null?bp(r,null,l,h):ks(r,n.child,l,h)}function cm(n,r,l,h,m){l=l.render;var v=r.ref;return zs(r,m),h=Lu(n,r,l,h,v,m),l=Du(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,Ki(n,r,m)):(Yt&&l&&pu(r),r.flags|=1,Cn(n,r,h,m),r.child)}function um(n,r,l,h,m){if(n===null){var v=l.type;return typeof v=="function"&&!lh(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,hm(n,r,v,h,m)):(n=Fl(l.type,null,h,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&m)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:Vo,l(T,h)&&n.ref===r.ref)return Ki(n,r,m)}return r.flags|=1,n=Rr(v,h),n.ref=r.ref,n.return=r,r.child=n}function hm(n,r,l,h,m){if(n!==null){var v=n.memoizedProps;if(Vo(v,h)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=h=v,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,Ki(n,r,m)}return Hu(n,r,l,h,m)}function fm(n,r,l){var h=r.pendingProps,m=h.children,v=n!==null?n.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Ws,qn),qn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Vt(Ws,qn),qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,Vt(Ws,qn),qn|=h}else v!==null?(h=v.baseLanes|l,r.memoizedState=null):h=l,Vt(Ws,qn),qn|=h;return Cn(n,r,m,l),r.child}function dm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Hu(n,r,l,h,m){var v=kn(l)?Kr:Sn.current;return v=Ns(r,v),zs(r,m),l=Lu(n,r,l,h,v,m),h=Du(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,Ki(n,r,m)):(Yt&&h&&pu(r),r.flags|=1,Cn(n,r,l,m),r.child)}function pm(n,r,l,h,m){if(kn(l)){var v=!0;al(r)}else v=!1;if(zs(r,m),r.stateNode===null)wl(n,r),nm(r,l,h),ku(r,l,h,m),h=!0;else if(n===null){var T=r.stateNode,I=r.memoizedProps;T.props=I;var B=T.context,J=l.contextType;typeof J=="object"&&J!==null?J=ii(J):(J=kn(l)?Kr:Sn.current,J=Ns(r,J));var _e=l.getDerivedStateFromProps,xe=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";xe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==h||B!==J)&&im(r,T,h,J),yr=!1;var me=r.memoizedState;T.state=me,gl(r,h,T,m),B=r.memoizedState,I!==h||me!==B||On.current||yr?(typeof _e=="function"&&(Ou(r,l,_e,h),B=r.memoizedState),(I=yr||tm(r,l,I,h,me,B,J))?(xe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=B),T.props=h,T.state=B,T.context=J,h=I):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{T=r.stateNode,Pp(n,r),I=r.memoizedProps,J=r.type===r.elementType?I:di(r.type,I),T.props=J,xe=r.pendingProps,me=T.context,B=l.contextType,typeof B=="object"&&B!==null?B=ii(B):(B=kn(l)?Kr:Sn.current,B=Ns(r,B));var Fe=l.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==xe||me!==B)&&im(r,T,h,B),yr=!1,me=r.memoizedState,T.state=me,gl(r,h,T,m);var Ge=r.memoizedState;I!==xe||me!==Ge||On.current||yr?(typeof Fe=="function"&&(Ou(r,l,Fe,h),Ge=r.memoizedState),(J=yr||tm(r,l,J,h,me,Ge,B)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Ge,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Ge,B)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=Ge),T.props=h,T.state=Ge,T.context=B,h=J):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),h=!1)}return Vu(n,r,l,h,v,m)}function Vu(n,r,l,h,m,v){dm(n,r);var T=(r.flags&128)!==0;if(!h&&!T)return m&&xp(r,l,!1),Ki(n,r,v);h=r.stateNode,K0.current=r;var I=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&T?(r.child=ks(r,n.child,null,v),r.child=ks(r,null,I,v)):Cn(n,r,I,v),r.memoizedState=h.state,m&&xp(r,l,!0),r.child}function mm(n){var r=n.stateNode;r.pendingContext?_p(n,r.pendingContext,r.pendingContext!==r.context):r.context&&_p(n,r.context,!1),wu(n,r.containerInfo)}function gm(n,r,l,h,m){return Os(),vu(m),r.flags|=256,Cn(n,r,l,h),r.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,r,l){var h=r.pendingProps,m=Kt.current,v=!1,T=(r.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(m&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Vt(Kt,m&1),n===null)return _u(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=h.children,n=h.fallback,v?(h=r.mode,v=r.child,T={mode:"hidden",children:T},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Ol(T,h,0,null),n=rs(n,h,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Wu(l),r.memoizedState=Gu,n):Xu(r,T));if(m=n.memoizedState,m!==null&&(I=m.dehydrated,I!==null))return q0(n,r,T,h,I,m,l);if(v){v=h.fallback,T=r.mode,m=n.child,I=m.sibling;var B={mode:"hidden",children:h.children};return(T&1)===0&&r.child!==m?(h=r.child,h.childLanes=0,h.pendingProps=B,r.deletions=null):(h=Rr(m,B),h.subtreeFlags=m.subtreeFlags&14680064),I!==null?v=Rr(I,v):(v=rs(v,T,l,null),v.flags|=2),v.return=r,h.return=r,h.sibling=v,r.child=h,h=v,v=r.child,T=n.child.memoizedState,T=T===null?Wu(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=Gu,h}return v=n.child,n=v.sibling,h=Rr(v,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function Xu(n,r){return r=Ol({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Tl(n,r,l,h){return h!==null&&vu(h),ks(r,n.child,null,l),n=Xu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function q0(n,r,l,h,m,v,T){if(l)return r.flags&256?(r.flags&=-257,h=Bu(Error(t(422))),Tl(n,r,T,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=h.fallback,m=r.mode,h=Ol({mode:"visible",children:h.children},m,0,null),v=rs(v,m,T,null),v.flags|=2,h.return=r,v.return=r,h.sibling=v,r.child=h,(r.mode&1)!==0&&ks(r,n.child,null,T),r.child.memoizedState=Wu(T),r.memoizedState=Gu,v);if((r.mode&1)===0)return Tl(n,r,T,null);if(m.data==="$!"){if(h=m.nextSibling&&m.nextSibling.dataset,h)var I=h.dgst;return h=I,v=Error(t(419)),h=Bu(v,h,void 0),Tl(n,r,T,h)}if(I=(T&n.childLanes)!==0,Bn||I){if(h=hn,h!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(h.suspendedLanes|T))!==0?0:m,m!==0&&m!==v.retryLane&&(v.retryLane=m,ji(n,m),gi(h,n,m,-1))}return ah(),h=Bu(Error(t(421))),Tl(n,r,T,h)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=lx.bind(null,n),m._reactRetry=r,null):(n=v.treeContext,Kn=gr(m.nextSibling),Yn=r,Yt=!0,fi=null,n!==null&&(ti[ni++]=Wi,ti[ni++]=Xi,ti[ni++]=qr,Wi=n.id,Xi=n.overflow,qr=r),r=Xu(r,h.children),r.flags|=4096,r)}function vm(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),Eu(n.return,r,l)}function ju(n,r,l,h,m){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=m)}function xm(n,r,l){var h=r.pendingProps,m=h.revealOrder,v=h.tail;if(Cn(n,r,h.children,l),h=Kt.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vm(n,l,r);else if(n.tag===19)vm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Vt(Kt,h),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&_l(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),ju(r,!1,m,l,v);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&_l(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}ju(r,!0,l,null,v);break;case"together":ju(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function wl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Ki(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),es|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Rr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Rr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function $0(n,r,l){switch(r.tag){case 3:mm(r),Os();break;case 5:Ip(r);break;case 1:kn(r.type)&&al(r);break;case 4:wu(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,m=r.memoizedProps.value;Vt(dl,h._currentValue),h._currentValue=m;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(Vt(Kt,Kt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?_m(n,r,l):(Vt(Kt,Kt.current&1),n=Ki(n,r,l),n!==null?n.sibling:null);Vt(Kt,Kt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,(n.flags&128)!==0){if(h)return xm(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Vt(Kt,Kt.current),h)break;return null;case 22:case 23:return r.lanes=0,fm(n,r,l)}return Ki(n,r,l)}var ym,Yu,Sm,Em;ym=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Yu=function(){},Sm=function(n,r,l,h){var m=n.memoizedProps;if(m!==h){n=r.stateNode,Jr(Ai.current);var v=null;switch(l){case"input":m=Ct(n,m),h=Ct(n,h),v=[];break;case"select":m=ie({},m,{value:void 0}),h=ie({},h,{value:void 0}),v=[];break;case"textarea":m=Wt(n,m),h=Wt(n,h),v=[];break;default:typeof m.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=rl)}je(l,h);var T;l=null;for(J in m)if(!h.hasOwnProperty(J)&&m.hasOwnProperty(J)&&m[J]!=null)if(J==="style"){var I=m[J];for(T in I)I.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(o.hasOwnProperty(J)?v||(v=[]):(v=v||[]).push(J,null));for(J in h){var B=h[J];if(I=m!=null?m[J]:void 0,h.hasOwnProperty(J)&&B!==I&&(B!=null||I!=null))if(J==="style")if(I){for(T in I)!I.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in B)B.hasOwnProperty(T)&&I[T]!==B[T]&&(l||(l={}),l[T]=B[T])}else l||(v||(v=[]),v.push(J,l)),l=B;else J==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(v=v||[]).push(J,B)):J==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(J,""+B):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(o.hasOwnProperty(J)?(B!=null&&J==="onScroll"&&Xt("scroll",n),v||I===B||(v=[])):(v=v||[]).push(J,B))}l&&(v=v||[]).push("style",l);var J=v;(r.updateQueue=J)&&(r.flags|=4)}},Em=function(n,r,l,h){l!==h&&(r.flags|=4)};function ia(n,r){if(!Yt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function Mn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags&14680064,h|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags,h|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function Z0(n,r,l){var h=r.pendingProps;switch(mu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(r),null;case 1:return kn(r.type)&&ol(),Mn(r),null;case 3:return h=r.stateNode,Hs(),jt(On),jt(Sn),bu(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(hl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,fi!==null&&(rh(fi),fi=null))),Yu(n,r),Mn(r),null;case 5:Au(r);var m=Jr(Jo.current);if(l=r.type,n!==null&&r.stateNode!=null)Sm(n,r,l,h,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return Mn(r),null}if(n=Jr(Ai.current),hl(r)){h=r.stateNode,l=r.type;var v=r.memoizedProps;switch(h[wi]=r,h[Yo]=v,n=(r.mode&1)!==0,l){case"dialog":Xt("cancel",h),Xt("close",h);break;case"iframe":case"object":case"embed":Xt("load",h);break;case"video":case"audio":for(m=0;m<Wo.length;m++)Xt(Wo[m],h);break;case"source":Xt("error",h);break;case"img":case"image":case"link":Xt("error",h),Xt("load",h);break;case"details":Xt("toggle",h);break;case"input":Qe(h,v),Xt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},Xt("invalid",h);break;case"textarea":L(h,v),Xt("invalid",h)}je(l,v),m=null;for(var T in v)if(v.hasOwnProperty(T)){var I=v[T];T==="children"?typeof I=="string"?h.textContent!==I&&(v.suppressHydrationWarning!==!0&&il(h.textContent,I,n),m=["children",I]):typeof I=="number"&&h.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&il(h.textContent,I,n),m=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Xt("scroll",h)}switch(l){case"input":Ht(h),kt(h,v,!0);break;case"textarea":Ht(h),q(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=rl)}h=m,r.updateQueue=h,h!==null&&(r.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=T.createElement(l,{is:h.is}):(n=T.createElement(l),l==="select"&&(T=n,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):n=T.createElementNS(n,l),n[wi]=r,n[Yo]=h,ym(n,r,!1,!1),r.stateNode=n;e:{switch(T=be(l,h),l){case"dialog":Xt("cancel",n),Xt("close",n),m=h;break;case"iframe":case"object":case"embed":Xt("load",n),m=h;break;case"video":case"audio":for(m=0;m<Wo.length;m++)Xt(Wo[m],n);m=h;break;case"source":Xt("error",n),m=h;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),m=h;break;case"details":Xt("toggle",n),m=h;break;case"input":Qe(n,h),m=Ct(n,h),Xt("invalid",n);break;case"option":m=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},m=ie({},h,{value:void 0}),Xt("invalid",n);break;case"textarea":L(n,h),m=Wt(n,h),Xt("invalid",n);break;default:m=h}je(l,m),I=m;for(v in I)if(I.hasOwnProperty(v)){var B=I[v];v==="style"?De(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ke(n,B)):v==="children"?typeof B=="string"?(l!=="textarea"||B!=="")&&we(n,B):typeof B=="number"&&we(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?B!=null&&v==="onScroll"&&Xt("scroll",n):B!=null&&P(n,v,B,T))}switch(l){case"input":Ht(n),kt(n,h,!1);break;case"textarea":Ht(n),q(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Re(h.value));break;case"select":n.multiple=!!h.multiple,v=h.value,v!=null?Gt(n,!!h.multiple,v,!1):h.defaultValue!=null&&Gt(n,!!h.multiple,h.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=rl)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Mn(r),null;case 6:if(n&&r.stateNode!=null)Em(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=Jr(Jo.current),Jr(Ai.current),hl(r)){if(h=r.stateNode,l=r.memoizedProps,h[wi]=r,(v=h.nodeValue!==l)&&(n=Yn,n!==null))switch(n.tag){case 3:il(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&il(h.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[wi]=r,r.stateNode=h}return Mn(r),null;case 13:if(jt(Kt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Kn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)wp(),Os(),r.flags|=98560,v=!1;else if(v=hl(r),h!==null&&h.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[wi]=r}else Os(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mn(r),v=!1}else fi!==null&&(rh(fi),fi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Kt.current&1)!==0?on===0&&(on=3):ah())),r.updateQueue!==null&&(r.flags|=4),Mn(r),null);case 4:return Hs(),Yu(n,r),n===null&&Xo(r.stateNode.containerInfo),Mn(r),null;case 10:return Su(r.type._context),Mn(r),null;case 17:return kn(r.type)&&ol(),Mn(r),null;case 19:if(jt(Kt),v=r.memoizedState,v===null)return Mn(r),null;if(h=(r.flags&128)!==0,T=v.rendering,T===null)if(h)ia(v,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=_l(n),T!==null){for(r.flags|=128,ia(v,!1),h=T.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)v=l,n=h,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Vt(Kt,Kt.current&1|2),r.child}n=n.sibling}v.tail!==null&&G()>Xs&&(r.flags|=128,h=!0,ia(v,!1),r.lanes=4194304)}else{if(!h)if(n=_l(T),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ia(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Yt)return Mn(r),null}else 2*G()-v.renderingStartTime>Xs&&l!==1073741824&&(r.flags|=128,h=!0,ia(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=G(),r.sibling=null,l=Kt.current,Vt(Kt,h?l&1|2:l&1),r):(Mn(r),null);case 22:case 23:return oh(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?(qn&1073741824)!==0&&(Mn(r),r.subtreeFlags&6&&(r.flags|=8192)):Mn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function J0(n,r){switch(mu(r),r.tag){case 1:return kn(r.type)&&ol(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Hs(),jt(On),jt(Sn),bu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Au(r),null;case 13:if(jt(Kt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Os()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return jt(Kt),null;case 4:return Hs(),null;case 10:return Su(r.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var Al=!1,Tn=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Gs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Zt(n,r,h)}else l.current=null}function Ku(n,r,l){try{l()}catch(h){Zt(n,r,h)}}var Mm=!1;function ex(n,r){if(ou=ja,n=tp(),Jc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var m=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,I=-1,B=-1,J=0,_e=0,xe=n,me=null;t:for(;;){for(var Fe;xe!==l||m!==0&&xe.nodeType!==3||(I=T+m),xe!==v||h!==0&&xe.nodeType!==3||(B=T+h),xe.nodeType===3&&(T+=xe.nodeValue.length),(Fe=xe.firstChild)!==null;)me=xe,xe=Fe;for(;;){if(xe===n)break t;if(me===l&&++J===m&&(I=T),me===v&&++_e===h&&(B=T),(Fe=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Fe}l=I===-1||B===-1?null:{start:I,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(au={focusedElem:n,selectionRange:l},ja=!1,ke=r;ke!==null;)if(r=ke,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ke=n;else for(;ke!==null;){r=ke;try{var Ge=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Xe=Ge.memoizedProps,Qt=Ge.memoizedState,K=r.stateNode,W=K.getSnapshotBeforeUpdate(r.elementType===r.type?Xe:di(r.type,Xe),Qt);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Zt(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,ke=n;break}ke=r.return}return Ge=Mm,Mm=!1,Ge}function ra(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var m=h=h.next;do{if((m.tag&n)===n){var v=m.destroy;m.destroy=void 0,v!==void 0&&Ku(r,l,v)}m=m.next}while(m!==h)}}function Rl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function qu(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Tm(n){var r=n.alternate;r!==null&&(n.alternate=null,Tm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[wi],delete r[Yo],delete r[hu],delete r[F0],delete r[O0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function wm(n){return n.tag===5||n.tag===3||n.tag===4}function Am(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $u(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=rl));else if(h!==4&&(n=n.child,n!==null))for($u(n,r,l),n=n.sibling;n!==null;)$u(n,r,l),n=n.sibling}function Zu(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(Zu(n,r,l),n=n.sibling;n!==null;)Zu(n,r,l),n=n.sibling}var gn=null,pi=!1;function Er(n,r,l){for(l=l.child;l!==null;)Rm(n,r,l),l=l.sibling}function Rm(n,r,l){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ze,l)}catch{}switch(l.tag){case 5:Tn||Gs(l,r);case 6:var h=gn,m=pi;gn=null,Er(n,r,l),gn=h,pi=m,gn!==null&&(pi?(n=gn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):gn.removeChild(l.stateNode));break;case 18:gn!==null&&(pi?(n=gn,l=l.stateNode,n.nodeType===8?uu(n.parentNode,l):n.nodeType===1&&uu(n,l),Fo(n)):uu(gn,l.stateNode));break;case 4:h=gn,m=pi,gn=l.stateNode.containerInfo,pi=!0,Er(n,r,l),gn=h,pi=m;break;case 0:case 11:case 14:case 15:if(!Tn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){m=h=h.next;do{var v=m,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Ku(l,r,T),m=m.next}while(m!==h)}Er(n,r,l);break;case 1:if(!Tn&&(Gs(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(I){Zt(l,r,I)}Er(n,r,l);break;case 21:Er(n,r,l);break;case 22:l.mode&1?(Tn=(h=Tn)||l.memoizedState!==null,Er(n,r,l),Tn=h):Er(n,r,l);break;default:Er(n,r,l)}}function bm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Q0),r.forEach(function(h){var m=cx.bind(null,n,h);l.has(h)||(l.add(h),h.then(m,m))})}}function mi(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var m=l[h];try{var v=n,T=r,I=T;e:for(;I!==null;){switch(I.tag){case 5:gn=I.stateNode,pi=!1;break e;case 3:gn=I.stateNode.containerInfo,pi=!0;break e;case 4:gn=I.stateNode.containerInfo,pi=!0;break e}I=I.return}if(gn===null)throw Error(t(160));Rm(v,T,m),gn=null,pi=!1;var B=m.alternate;B!==null&&(B.return=null),m.return=null}catch(J){Zt(m,r,J)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Cm(r,n),r=r.sibling}function Cm(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(r,n),bi(n),h&4){try{ra(3,n,n.return),Rl(3,n)}catch(Xe){Zt(n,n.return,Xe)}try{ra(5,n,n.return)}catch(Xe){Zt(n,n.return,Xe)}}break;case 1:mi(r,n),bi(n),h&512&&l!==null&&Gs(l,l.return);break;case 5:if(mi(r,n),bi(n),h&512&&l!==null&&Gs(l,l.return),n.flags&32){var m=n.stateNode;try{we(m,"")}catch(Xe){Zt(n,n.return,Xe)}}if(h&4&&(m=n.stateNode,m!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&Et(m,v),be(I,T);var J=be(I,v);for(T=0;T<B.length;T+=2){var _e=B[T],xe=B[T+1];_e==="style"?De(m,xe):_e==="dangerouslySetInnerHTML"?Ke(m,xe):_e==="children"?we(m,xe):P(m,_e,xe,J)}switch(I){case"input":$e(m,v);break;case"textarea":w(m,v);break;case"select":var me=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!v.multiple;var Fe=v.value;Fe!=null?Gt(m,!!v.multiple,Fe,!1):me!==!!v.multiple&&(v.defaultValue!=null?Gt(m,!!v.multiple,v.defaultValue,!0):Gt(m,!!v.multiple,v.multiple?[]:"",!1))}m[Yo]=v}catch(Xe){Zt(n,n.return,Xe)}}break;case 6:if(mi(r,n),bi(n),h&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,v=n.memoizedProps;try{m.nodeValue=v}catch(Xe){Zt(n,n.return,Xe)}}break;case 3:if(mi(r,n),bi(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Fo(r.containerInfo)}catch(Xe){Zt(n,n.return,Xe)}break;case 4:mi(r,n),bi(n);break;case 13:mi(r,n),bi(n),m=n.child,m.flags&8192&&(v=m.memoizedState!==null,m.stateNode.isHidden=v,!v||m.alternate!==null&&m.alternate.memoizedState!==null||(eh=G())),h&4&&bm(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(Tn=(J=Tn)||_e,mi(r,n),Tn=J):mi(r,n),bi(n),h&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!_e&&(n.mode&1)!==0)for(ke=n,_e=n.child;_e!==null;){for(xe=ke=_e;ke!==null;){switch(me=ke,Fe=me.child,me.tag){case 0:case 11:case 14:case 15:ra(4,me,me.return);break;case 1:Gs(me,me.return);var Ge=me.stateNode;if(typeof Ge.componentWillUnmount=="function"){h=me,l=me.return;try{r=h,Ge.props=r.memoizedProps,Ge.state=r.memoizedState,Ge.componentWillUnmount()}catch(Xe){Zt(h,l,Xe)}}break;case 5:Gs(me,me.return);break;case 22:if(me.memoizedState!==null){Dm(xe);continue}}Fe!==null?(Fe.return=me,ke=Fe):Dm(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{m=xe.stateNode,J?(v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=xe.stateNode,B=xe.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Me("display",T))}catch(Xe){Zt(n,n.return,Xe)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=J?"":xe.memoizedProps}catch(Xe){Zt(n,n.return,Xe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:mi(r,n),bi(n),h&4&&bm(n);break;case 21:break;default:mi(r,n),bi(n)}}function bi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(wm(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var m=h.stateNode;h.flags&32&&(we(m,""),h.flags&=-33);var v=Am(n);Zu(n,v,m);break;case 3:case 4:var T=h.stateNode.containerInfo,I=Am(n);$u(n,I,T);break;default:throw Error(t(161))}}catch(B){Zt(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function tx(n,r,l){ke=n,Pm(n)}function Pm(n,r,l){for(var h=(n.mode&1)!==0;ke!==null;){var m=ke,v=m.child;if(m.tag===22&&h){var T=m.memoizedState!==null||Al;if(!T){var I=m.alternate,B=I!==null&&I.memoizedState!==null||Tn;I=Al;var J=Tn;if(Al=T,(Tn=B)&&!J)for(ke=m;ke!==null;)T=ke,B=T.child,T.tag===22&&T.memoizedState!==null?Im(m):B!==null?(B.return=T,ke=B):Im(m);for(;v!==null;)ke=v,Pm(v),v=v.sibling;ke=m,Al=I,Tn=J}Lm(n)}else(m.subtreeFlags&8772)!==0&&v!==null?(v.return=m,ke=v):Lm(n)}}function Lm(n){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Tn||Rl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!Tn)if(l===null)h.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:di(r.type,l.memoizedProps);h.componentDidUpdate(m,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Dp(r,v,h);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Dp(r,T,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&l.focus();break;case"img":B.src&&(l.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var J=r.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Fo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||r.flags&512&&qu(r)}catch(me){Zt(r,r.return,me)}}if(r===n){ke=null;break}if(l=r.sibling,l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Dm(n){for(;ke!==null;){var r=ke;if(r===n){ke=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Im(n){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Rl(4,r)}catch(B){Zt(r,l,B)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var m=r.return;try{h.componentDidMount()}catch(B){Zt(r,m,B)}}var v=r.return;try{qu(r)}catch(B){Zt(r,v,B)}break;case 5:var T=r.return;try{qu(r)}catch(B){Zt(r,T,B)}}}catch(B){Zt(r,r.return,B)}if(r===n){ke=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ke=I;break}ke=r.return}}var nx=Math.ceil,bl=R.ReactCurrentDispatcher,Ju=R.ReactCurrentOwner,si=R.ReactCurrentBatchConfig,At=0,hn=null,en=null,_n=0,qn=0,Ws=_r(0),on=0,sa=null,es=0,Cl=0,Qu=0,oa=null,zn=null,eh=0,Xs=1/0,qi=null,Pl=!1,th=null,Mr=null,Ll=!1,Tr=null,Dl=0,aa=0,nh=null,Il=-1,Nl=0;function Pn(){return(At&6)!==0?G():Il!==-1?Il:Il=G()}function wr(n){return(n.mode&1)===0?1:(At&2)!==0&&_n!==0?_n&-_n:B0.transition!==null?(Nl===0&&(Nl=bn()),Nl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Ud(n.type)),n)}function gi(n,r,l,h){if(50<aa)throw aa=0,nh=null,Error(t(185));Jt(n,l,h),((At&2)===0||n!==hn)&&(n===hn&&((At&2)===0&&(Cl|=l),on===4&&Ar(n,_n)),Hn(n,h),l===1&&At===0&&(r.mode&1)===0&&(Xs=G()+500,ll&&xr()))}function Hn(n,r){var l=n.callbackNode;Xr(n,r);var h=ui(n,n===hn?_n:0);if(h===0)l!==null&&j(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&j(l),r===1)n.tag===0?k0(Um.bind(null,n)):yp(Um.bind(null,n)),N0(function(){(At&6)===0&&xr()}),l=null;else{switch(Rd(h)){case 1:l=Ce;break;case 4:l=Ve;break;case 16:l=Ue;break;case 536870912:l=st;break;default:l=Ue}l=Gm(l,Nm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Nm(n,r){if(Il=-1,Nl=0,(At&6)!==0)throw Error(t(327));var l=n.callbackNode;if(js()&&n.callbackNode!==l)return null;var h=ui(n,n===hn?_n:0);if(h===0)return null;if((h&30)!==0||(h&n.expiredLanes)!==0||r)r=Ul(n,h);else{r=h;var m=At;At|=2;var v=Om();(hn!==n||_n!==r)&&(qi=null,Xs=G()+500,ns(n,r));do try{sx();break}catch(I){Fm(n,I)}while(!0);yu(),bl.current=v,At=m,en!==null?r=0:(hn=null,_n=0,r=on)}if(r!==0){if(r===2&&(m=zt(n),m!==0&&(h=m,r=ih(n,m))),r===1)throw l=sa,ns(n,0),Ar(n,h),Hn(n,G()),l;if(r===6)Ar(n,h);else{if(m=n.current.alternate,(h&30)===0&&!ix(m)&&(r=Ul(n,h),r===2&&(v=zt(n),v!==0&&(h=v,r=ih(n,v))),r===1))throw l=sa,ns(n,0),Ar(n,h),Hn(n,G()),l;switch(n.finishedWork=m,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:is(n,zn,qi);break;case 3:if(Ar(n,h),(h&130023424)===h&&(r=eh+500-G(),10<r)){if(ui(n,0)!==0)break;if(m=n.suspendedLanes,(m&h)!==h){Pn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=cu(is.bind(null,n,zn,qi),r);break}is(n,zn,qi);break;case 4:if(Ar(n,h),(h&4194240)===h)break;for(r=n.eventTimes,m=-1;0<h;){var T=31-Tt(h);v=1<<T,T=r[T],T>m&&(m=T),h&=~v}if(h=m,h=G()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*nx(h/1960))-h,10<h){n.timeoutHandle=cu(is.bind(null,n,zn,qi),h);break}is(n,zn,qi);break;case 5:is(n,zn,qi);break;default:throw Error(t(329))}}}return Hn(n,G()),n.callbackNode===l?Nm.bind(null,n):null}function ih(n,r){var l=oa;return n.current.memoizedState.isDehydrated&&(ns(n,r).flags|=256),n=Ul(n,r),n!==2&&(r=zn,zn=l,r!==null&&rh(r)),n}function rh(n){zn===null?zn=n:zn.push.apply(zn,n)}function ix(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var m=l[h],v=m.getSnapshot;m=m.value;try{if(!hi(v(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ar(n,r){for(r&=~Qu,r&=~Cl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Tt(r),h=1<<l;n[l]=-1,r&=~h}}function Um(n){if((At&6)!==0)throw Error(t(327));js();var r=ui(n,0);if((r&1)===0)return Hn(n,G()),null;var l=Ul(n,r);if(n.tag!==0&&l===2){var h=zt(n);h!==0&&(r=h,l=ih(n,h))}if(l===1)throw l=sa,ns(n,0),Ar(n,r),Hn(n,G()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,is(n,zn,qi),Hn(n,G()),null}function sh(n,r){var l=At;At|=1;try{return n(r)}finally{At=l,At===0&&(Xs=G()+500,ll&&xr())}}function ts(n){Tr!==null&&Tr.tag===0&&(At&6)===0&&js();var r=At;At|=1;var l=si.transition,h=xt;try{if(si.transition=null,xt=1,n)return n()}finally{xt=h,si.transition=l,At=r,(At&6)===0&&xr()}}function oh(){qn=Ws.current,jt(Ws)}function ns(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,I0(l)),en!==null)for(l=en.return;l!==null;){var h=l;switch(mu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&ol();break;case 3:Hs(),jt(On),jt(Sn),bu();break;case 5:Au(h);break;case 4:Hs();break;case 13:jt(Kt);break;case 19:jt(Kt);break;case 10:Su(h.type._context);break;case 22:case 23:oh()}l=l.return}if(hn=n,en=n=Rr(n.current,null),_n=qn=r,on=0,sa=null,Qu=Cl=es=0,zn=oa=null,Zr!==null){for(r=0;r<Zr.length;r++)if(l=Zr[r],h=l.interleaved,h!==null){l.interleaved=null;var m=h.next,v=l.pending;if(v!==null){var T=v.next;v.next=m,h.next=T}l.pending=h}Zr=null}return n}function Fm(n,r){do{var l=en;try{if(yu(),vl.current=El,xl){for(var h=qt.memoizedState;h!==null;){var m=h.queue;m!==null&&(m.pending=null),h=h.next}xl=!1}if(Qr=0,un=sn=qt=null,Qo=!1,ea=0,Ju.current=null,l===null||l.return===null){on=1,sa=r,en=null;break}e:{var v=n,T=l.return,I=l,B=r;if(r=_n,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var J=B,_e=I,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=am(T);if(Fe!==null){Fe.flags&=-257,lm(Fe,T,I,v,r),Fe.mode&1&&om(v,J,r),r=Fe,B=J;var Ge=r.updateQueue;if(Ge===null){var Xe=new Set;Xe.add(B),r.updateQueue=Xe}else Ge.add(B);break e}else{if((r&1)===0){om(v,J,r),ah();break e}B=Error(t(426))}}else if(Yt&&I.mode&1){var Qt=am(T);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),lm(Qt,T,I,v,r),vu(Vs(B,I));break e}}v=B=Vs(B,I),on!==4&&(on=2),oa===null?oa=[v]:oa.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var K=rm(v,B,r);Lp(v,K);break e;case 1:I=B;var W=v.type,$=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Mr===null||!Mr.has($)))){v.flags|=65536,r&=-r,v.lanes|=r;var Te=sm(v,I,r);Lp(v,Te);break e}}v=v.return}while(v!==null)}Bm(l)}catch(Ye){r=Ye,en===l&&l!==null&&(en=l=l.return);continue}break}while(!0)}function Om(){var n=bl.current;return bl.current=El,n===null?El:n}function ah(){(on===0||on===3||on===2)&&(on=4),hn===null||(es&268435455)===0&&(Cl&268435455)===0||Ar(hn,_n)}function Ul(n,r){var l=At;At|=2;var h=Om();(hn!==n||_n!==r)&&(qi=null,ns(n,r));do try{rx();break}catch(m){Fm(n,m)}while(!0);if(yu(),At=l,bl.current=h,en!==null)throw Error(t(261));return hn=null,_n=0,on}function rx(){for(;en!==null;)km(en)}function sx(){for(;en!==null&&!Q();)km(en)}function km(n){var r=Vm(n.alternate,n,qn);n.memoizedProps=n.pendingProps,r===null?Bm(n):en=r,Ju.current=null}function Bm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Z0(l,r,qn),l!==null){en=l;return}}else{if(l=J0(l,r),l!==null){l.flags&=32767,en=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,en=null;return}}if(r=r.sibling,r!==null){en=r;return}en=r=n}while(r!==null);on===0&&(on=5)}function is(n,r,l){var h=xt,m=si.transition;try{si.transition=null,xt=1,ox(n,r,l,h)}finally{si.transition=m,xt=h}return null}function ox(n,r,l,h){do js();while(Tr!==null);if((At&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(yn(n,v),n===hn&&(en=hn=null,_n=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ll||(Ll=!0,Gm(Ue,function(){return js(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=si.transition,si.transition=null;var T=xt;xt=1;var I=At;At|=4,Ju.current=null,ex(n,l),Cm(l,n),A0(au),ja=!!ou,au=ou=null,n.current=l,tx(l),ee(),At=I,xt=T,si.transition=v}else n.current=l;if(Ll&&(Ll=!1,Tr=n,Dl=m),v=n.pendingLanes,v===0&&(Mr=null),Pt(l.stateNode),Hn(n,G()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],h(m.value,{componentStack:m.stack,digest:m.digest});if(Pl)throw Pl=!1,n=th,th=null,n;return(Dl&1)!==0&&n.tag!==0&&js(),v=n.pendingLanes,(v&1)!==0?n===nh?aa++:(aa=0,nh=n):aa=0,xr(),null}function js(){if(Tr!==null){var n=Rd(Dl),r=si.transition,l=xt;try{if(si.transition=null,xt=16>n?16:n,Tr===null)var h=!1;else{if(n=Tr,Tr=null,Dl=0,(At&6)!==0)throw Error(t(331));var m=At;for(At|=4,ke=n.current;ke!==null;){var v=ke,T=v.child;if((ke.flags&16)!==0){var I=v.deletions;if(I!==null){for(var B=0;B<I.length;B++){var J=I[B];for(ke=J;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:ra(8,_e,v)}var xe=_e.child;if(xe!==null)xe.return=_e,ke=xe;else for(;ke!==null;){_e=ke;var me=_e.sibling,Fe=_e.return;if(Tm(_e),_e===J){ke=null;break}if(me!==null){me.return=Fe,ke=me;break}ke=Fe}}}var Ge=v.alternate;if(Ge!==null){var Xe=Ge.child;if(Xe!==null){Ge.child=null;do{var Qt=Xe.sibling;Xe.sibling=null,Xe=Qt}while(Xe!==null)}}ke=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,ke=T;else e:for(;ke!==null;){if(v=ke,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ra(9,v,v.return)}var K=v.sibling;if(K!==null){K.return=v.return,ke=K;break e}ke=v.return}}var W=n.current;for(ke=W;ke!==null;){T=ke;var $=T.child;if((T.subtreeFlags&2064)!==0&&$!==null)$.return=T,ke=$;else e:for(T=W;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Rl(9,I)}}catch(Ye){Zt(I,I.return,Ye)}if(I===T){ke=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,ke=Te;break e}ke=I.return}}if(At=m,xr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ze,n)}catch{}h=!0}return h}finally{xt=l,si.transition=r}}return!1}function zm(n,r,l){r=Vs(l,r),r=rm(n,r,1),n=Sr(n,r,1),r=Pn(),n!==null&&(Jt(n,1,r),Hn(n,r))}function Zt(n,r,l){if(n.tag===3)zm(n,n,l);else for(;r!==null;){if(r.tag===3){zm(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Mr===null||!Mr.has(h))){n=Vs(l,n),n=sm(r,n,1),r=Sr(r,n,1),n=Pn(),r!==null&&(Jt(r,1,n),Hn(r,n));break}}r=r.return}}function ax(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=Pn(),n.pingedLanes|=n.suspendedLanes&l,hn===n&&(_n&l)===l&&(on===4||on===3&&(_n&130023424)===_n&&500>G()-eh?ns(n,0):Qu|=l),Hn(n,r)}function Hm(n,r){r===0&&((n.mode&1)===0?r=1:(r=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var l=Pn();n=ji(n,r),n!==null&&(Jt(n,r,l),Hn(n,l))}function lx(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Hm(n,l)}function cx(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Hm(n,l)}var Vm;Vm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||On.current)Bn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Bn=!1,$0(n,r,l);Bn=(n.flags&131072)!==0}else Bn=!1,Yt&&(r.flags&1048576)!==0&&Sp(r,ul,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;wl(n,r),n=r.pendingProps;var m=Ns(r,Sn.current);zs(r,l),m=Lu(null,r,h,n,m,l);var v=Du();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,kn(h)?(v=!0,al(r)):v=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Tu(r),m.updater=Ml,r.stateNode=m,m._reactInternals=r,ku(r,h,n,l),r=Vu(null,r,h,!0,v,l)):(r.tag=0,Yt&&v&&pu(r),Cn(null,r,m,l),r=r.child),r;case 16:h=r.elementType;e:{switch(wl(n,r),n=r.pendingProps,m=h._init,h=m(h._payload),r.type=h,m=r.tag=hx(h),n=di(h,n),m){case 0:r=Hu(null,r,h,n,l);break e;case 1:r=pm(null,r,h,n,l);break e;case 11:r=cm(null,r,h,n,l);break e;case 14:r=um(null,r,h,di(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),Hu(n,r,h,m,l);case 1:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),pm(n,r,h,m,l);case 3:e:{if(mm(r),n===null)throw Error(t(387));h=r.pendingProps,v=r.memoizedState,m=v.element,Pp(n,r),gl(r,h,null,l);var T=r.memoizedState;if(h=T.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){m=Vs(Error(t(423)),r),r=gm(n,r,h,l,m);break e}else if(h!==m){m=Vs(Error(t(424)),r),r=gm(n,r,h,l,m);break e}else for(Kn=gr(r.stateNode.containerInfo.firstChild),Yn=r,Yt=!0,fi=null,l=bp(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Os(),h===m){r=Ki(n,r,l);break e}Cn(n,r,h,l)}r=r.child}return r;case 5:return Ip(r),n===null&&_u(r),h=r.type,m=r.pendingProps,v=n!==null?n.memoizedProps:null,T=m.children,lu(h,m)?T=null:v!==null&&lu(h,v)&&(r.flags|=32),dm(n,r),Cn(n,r,T,l),r.child;case 6:return n===null&&_u(r),null;case 13:return _m(n,r,l);case 4:return wu(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=ks(r,null,h,l):Cn(n,r,h,l),r.child;case 11:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),cm(n,r,h,m,l);case 7:return Cn(n,r,r.pendingProps,l),r.child;case 8:return Cn(n,r,r.pendingProps.children,l),r.child;case 12:return Cn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,m=r.pendingProps,v=r.memoizedProps,T=m.value,Vt(dl,h._currentValue),h._currentValue=T,v!==null)if(hi(v.value,T)){if(v.children===m.children&&!On.current){r=Ki(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){T=v.child;for(var B=I.firstContext;B!==null;){if(B.context===h){if(v.tag===1){B=Yi(-1,l&-l),B.tag=2;var J=v.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),J.pending=B}}v.lanes|=l,B=v.alternate,B!==null&&(B.lanes|=l),Eu(v.return,l,r),I.lanes|=l;break}B=B.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,I=T.alternate,I!==null&&(I.lanes|=l),Eu(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Cn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,h=r.pendingProps.children,zs(r,l),m=ii(m),h=h(m),r.flags|=1,Cn(n,r,h,l),r.child;case 14:return h=r.type,m=di(h,r.pendingProps),m=di(h.type,m),um(n,r,h,m,l);case 15:return hm(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),wl(n,r),r.tag=1,kn(h)?(n=!0,al(r)):n=!1,zs(r,l),nm(r,h,m),ku(r,h,m,l),Vu(null,r,h,!0,n,l);case 19:return xm(n,r,l);case 22:return fm(n,r,l)}throw Error(t(156,r.tag))};function Gm(n,r){return A(n,r)}function ux(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,r,l,h){return new ux(n,r,l,h)}function lh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hx(n){if(typeof n=="function")return lh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===he)return 14}return 2}function Rr(n,r){var l=n.alternate;return l===null?(l=oi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Fl(n,r,l,h,m,v){var T=2;if(h=n,typeof n=="function")lh(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return rs(l.children,m,v,r);case Y:T=8,m|=8;break;case C:return n=oi(12,l,r,m|2),n.elementType=C,n.lanes=v,n;case ne:return n=oi(13,l,r,m),n.elementType=ne,n.lanes=v,n;case ae:return n=oi(19,l,r,m),n.elementType=ae,n.lanes=v,n;case ue:return Ol(l,m,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:T=10;break e;case F:T=9;break e;case le:T=11;break e;case he:T=14;break e;case se:T=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=oi(T,l,r,m),r.elementType=n,r.type=h,r.lanes=v,r}function rs(n,r,l,h){return n=oi(7,n,h,r),n.lanes=l,n}function Ol(n,r,l,h){return n=oi(22,n,h,r),n.elementType=ue,n.lanes=l,n.stateNode={isHidden:!1},n}function ch(n,r,l){return n=oi(6,n,null,r),n.lanes=l,n}function uh(n,r,l){return r=oi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function fx(n,r,l,h,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=h,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function hh(n,r,l,h,m,v,T,I,B){return n=new fx(n,r,l,I,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=oi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(v),n}function dx(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function Wm(n){if(!n)return vr;n=n._reactInternals;e:{if(Hi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(kn(l))return vp(n,l,r)}return r}function Xm(n,r,l,h,m,v,T,I,B){return n=hh(l,h,!0,n,m,v,T,I,B),n.context=Wm(null),l=n.current,h=Pn(),m=wr(l),v=Yi(h,m),v.callback=r??null,Sr(l,v,m),n.current.lanes=m,Jt(n,m,h),Hn(n,h),n}function kl(n,r,l,h){var m=r.current,v=Pn(),T=wr(m);return l=Wm(l),r.context===null?r.context=l:r.pendingContext=l,r=Yi(v,T),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=Sr(m,r,T),n!==null&&(gi(n,m,T,v),ml(n,m,T)),T}function Bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function fh(n,r){jm(n,r),(n=n.alternate)&&jm(n,r)}function px(){return null}var Ym=typeof reportError=="function"?reportError:function(n){console.error(n)};function dh(n){this._internalRoot=n}zl.prototype.render=dh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));kl(n,r,null,null)},zl.prototype.unmount=dh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ts(function(){kl(null,n,null,null)}),r[Vi]=null}};function zl(n){this._internalRoot=n}zl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Pd();n={blockedOn:null,target:n,priority:r};for(var l=0;l<dr.length&&r!==0&&r<dr[l].priority;l++);dr.splice(l,0,n),l===0&&Id(n)}};function ph(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Km(){}function mx(n,r,l,h,m){if(m){if(typeof h=="function"){var v=h;h=function(){var J=Bl(T);v.call(J)}}var T=Xm(r,h,n,0,null,!1,!1,"",Km);return n._reactRootContainer=T,n[Vi]=T.current,Xo(n.nodeType===8?n.parentNode:n),ts(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof h=="function"){var I=h;h=function(){var J=Bl(B);I.call(J)}}var B=hh(n,0,!1,null,null,!1,!1,"",Km);return n._reactRootContainer=B,n[Vi]=B.current,Xo(n.nodeType===8?n.parentNode:n),ts(function(){kl(r,B,l,h)}),B}function Vl(n,r,l,h,m){var v=l._reactRootContainer;if(v){var T=v;if(typeof m=="function"){var I=m;m=function(){var B=Bl(T);I.call(B)}}kl(r,T,n,m)}else T=mx(l,r,n,m,h);return Bl(T)}bd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=rn(r.pendingLanes);l!==0&&(jr(r,l|1),Hn(r,G()),(At&6)===0&&(Xs=G()+500,xr()))}break;case 13:ts(function(){var h=ji(n,1);if(h!==null){var m=Pn();gi(h,n,1,m)}}),fh(n,1)}},Bc=function(n){if(n.tag===13){var r=ji(n,134217728);if(r!==null){var l=Pn();gi(r,n,134217728,l)}fh(n,134217728)}},Cd=function(n){if(n.tag===13){var r=wr(n),l=ji(n,r);if(l!==null){var h=Pn();gi(l,n,r,h)}fh(n,r)}},Pd=function(){return xt},Ld=function(n,r){var l=xt;try{return xt=n,r()}finally{xt=l}},Se=function(n,r,l){switch(r){case"input":if($e(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var m=sl(h);if(!m)throw Error(t(90));St(h),$e(h,m)}}}break;case"textarea":w(n,l);break;case"select":r=l.value,r!=null&&Gt(n,!!l.multiple,r,!1)}},lt=sh,Lt=ts;var gx={usingClientEntryPoint:!1,Events:[Ko,Ds,sl,fe,We,sh]},la={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_x={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Va(n),n===null?null:n.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{Ze=Gl.inject(_x),ot=Gl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx,Vn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ph(r))throw Error(t(200));return dx(n,r,null,l)},Vn.createRoot=function(n,r){if(!ph(n))throw Error(t(299));var l=!1,h="",m=Ym;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=hh(n,1,!1,null,null,l,!1,h,m),n[Vi]=r.current,Xo(n.nodeType===8?n.parentNode:n),new dh(r)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Va(r),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return ts(n)},Vn.hydrate=function(n,r,l){if(!Hl(r))throw Error(t(200));return Vl(null,n,r,!0,l)},Vn.hydrateRoot=function(n,r,l){if(!ph(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,m=!1,v="",T=Ym;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Xm(r,null,n,1,l??null,m,!1,v,T),n[Vi]=r.current,Xo(n),h)for(n=0;n<h.length;n++)l=h[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new zl(r)},Vn.render=function(n,r,l){if(!Hl(r))throw Error(t(200));return Vl(null,n,r,!1,l)},Vn.unmountComponentAtNode=function(n){if(!Hl(n))throw Error(t(40));return n._reactRootContainer?(ts(function(){Vl(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},Vn.unstable_batchedUpdates=sh,Vn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Hl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Vl(n,r,l,!1,h)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var ng;function B_(){if(ng)return _h.exports;ng=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_h.exports=Ax(),_h.exports}var ig;function Rx(){if(ig)return Wl;ig=1;var s=B_();return Wl.createRoot=s.createRoot,Wl.hydrateRoot=s.hydrateRoot,Wl}var bx=Rx();const Cx=O_(bx);B_();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},Ta.apply(this,arguments)}var kr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(kr||(kr={}));const rg="popstate";function Px(s){s===void 0&&(s={});function e(i,o){let{pathname:a,search:c,hash:u}=i.location;return af("",{pathname:a,search:c,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Rc(o)}return Dx(e,t,null,s)}function nn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function z_(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lx(){return Math.random().toString(36).substr(2,8)}function sg(s,e){return{usr:s.state,key:s.key,idx:e}}function af(s,e,t,i){return t===void 0&&(t=null),Ta({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?Ao(e):e,{state:t,key:e&&e.key||i||Lx()})}function Rc(s){let{pathname:e="/",search:t="",hash:i=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ao(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substr(i),s=s.substr(0,i)),s&&(e.pathname=s)}return e}function Dx(s,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,u=kr.Pop,f=null,d=g();d==null&&(d=0,c.replaceState(Ta({},c.state,{idx:d}),""));function g(){return(c.state||{idx:null}).idx}function p(){u=kr.Pop;let S=g(),x=S==null?null:S-d;d=S,f&&f({action:u,location:M.location,delta:x})}function _(S,x){u=kr.Push;let D=af(M.location,S,x);d=g()+1;let P=sg(D,d),R=M.createHref(D);try{c.pushState(P,"",R)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;o.location.assign(R)}a&&f&&f({action:u,location:M.location,delta:1})}function y(S,x){u=kr.Replace;let D=af(M.location,S,x);d=g();let P=sg(D,d),R=M.createHref(D);c.replaceState(P,"",R),a&&f&&f({action:u,location:M.location,delta:0})}function E(S){let x=o.location.origin!=="null"?o.location.origin:o.location.href,D=typeof S=="string"?S:Rc(S);return D=D.replace(/ $/,"%20"),nn(x,"No window.location.(origin|href) available to create URL for href: "+D),new URL(D,x)}let M={get action(){return u},get location(){return s(o,c)},listen(S){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(rg,p),f=S,()=>{o.removeEventListener(rg,p),f=null}},createHref(S){return e(o,S)},createURL:E,encodeLocation(S){let x=E(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:y,go(S){return c.go(S)}};return M}var og;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(og||(og={}));function Ix(s,e,t){return t===void 0&&(t="/"),Nx(s,e,t)}function Nx(s,e,t,i){let o=typeof e=="string"?Ao(e):e,a=nd(o.pathname||"/",t);if(a==null)return null;let c=H_(s);Ux(c);let u=null;for(let f=0;u==null&&f<c.length;++f){let d=Yx(a);u=Wx(c[f],d)}return u}function H_(s,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(a,c,u)=>{let f={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};f.relativePath.startsWith("/")&&(nn(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let d=zr([i,f.relativePath]),g=t.concat(f);a.children&&a.children.length>0&&(nn(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),H_(a.children,e,g,d)),!(a.path==null&&!a.index)&&e.push({path:d,score:Vx(d,a.index),routesMeta:g})};return s.forEach((a,c)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))o(a,c);else for(let f of V_(a.path))o(a,c,f)}),e}function V_(s){let e=s.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=V_(i.join("/")),u=[];return u.push(...c.map(f=>f===""?a:[a,f].join("/"))),o&&u.push(...c),u.map(f=>s.startsWith("/")&&f===""?"/":f)}function Ux(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:Gx(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const Fx=/^:[\w-]+$/,Ox=3,kx=2,Bx=1,zx=10,Hx=-2,ag=s=>s==="*";function Vx(s,e){let t=s.split("/"),i=t.length;return t.some(ag)&&(i+=Hx),e&&(i+=kx),t.filter(o=>!ag(o)).reduce((o,a)=>o+(Fx.test(a)?Ox:a===""?Bx:zx),i)}function Gx(s,e){return s.length===e.length&&s.slice(0,-1).every((i,o)=>i===e[o])?s[s.length-1]-e[e.length-1]:0}function Wx(s,e,t){let{routesMeta:i}=s,o={},a="/",c=[];for(let u=0;u<i.length;++u){let f=i[u],d=u===i.length-1,g=a==="/"?e:e.slice(a.length)||"/",p=Xx({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},g),_=f.route;if(!p)return null;Object.assign(o,p.params),c.push({params:o,pathname:zr([a,p.pathname]),pathnameBase:Zx(zr([a,p.pathnameBase])),route:_}),p.pathnameBase!=="/"&&(a=zr([a,p.pathnameBase]))}return c}function Xx(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,i]=jx(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:i.reduce((d,g,p)=>{let{paramName:_,isOptional:y}=g;if(_==="*"){let M=u[p]||"";c=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const E=u[p];return y&&!E?d[_]=void 0:d[_]=(E||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:c,pattern:s}}function jx(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),z_(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let i=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,f)=>(i.push({paramName:u,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(i.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function Yx(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return z_(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function nd(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}function Kx(s,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof s=="string"?Ao(s):s;return{pathname:t?t.startsWith("/")?t:qx(t,e):e,search:Jx(i),hash:Qx(o)}}function qx(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function yh(s,e,t,i){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $x(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function G_(s,e){let t=$x(s);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function W_(s,e,t,i){i===void 0&&(i=!1);let o;typeof s=="string"?o=Ao(s):(o=Ta({},s),nn(!o.pathname||!o.pathname.includes("?"),yh("?","pathname","search",o)),nn(!o.pathname||!o.pathname.includes("#"),yh("#","pathname","hash",o)),nn(!o.search||!o.search.includes("#"),yh("#","search","hash",o)));let a=s===""||o.pathname==="",c=a?"/":o.pathname,u;if(c==null)u=t;else{let p=e.length-1;if(!i&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),p-=1;o.pathname=_.join("/")}u=p>=0?e[p]:"/"}let f=Kx(o,u),d=c&&c!=="/"&&c.endsWith("/"),g=(a||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(d||g)&&(f.pathname+="/"),f}const zr=s=>s.join("/").replace(/\/\/+/g,"/"),Zx=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Jx=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Qx=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function ey(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const X_=["post","put","patch","delete"];new Set(X_);const ty=["get",...X_];new Set(ty);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},wa.apply(this,arguments)}const id=Ie.createContext(null),ny=Ie.createContext(null),xs=Ie.createContext(null),Ic=Ie.createContext(null),ys=Ie.createContext({outlet:null,matches:[],isDataRoute:!1}),j_=Ie.createContext(null);function iy(s,e){let{relative:t}=e===void 0?{}:e;Ia()||nn(!1);let{basename:i,navigator:o}=Ie.useContext(xs),{hash:a,pathname:c,search:u}=K_(s,{relative:t}),f=c;return i!=="/"&&(f=c==="/"?i:zr([i,c])),o.createHref({pathname:f,search:u,hash:a})}function Ia(){return Ie.useContext(Ic)!=null}function Nc(){return Ia()||nn(!1),Ie.useContext(Ic).location}function Y_(s){Ie.useContext(xs).static||Ie.useLayoutEffect(s)}function ry(){let{isDataRoute:s}=Ie.useContext(ys);return s?_y():sy()}function sy(){Ia()||nn(!1);let s=Ie.useContext(id),{basename:e,future:t,navigator:i}=Ie.useContext(xs),{matches:o}=Ie.useContext(ys),{pathname:a}=Nc(),c=JSON.stringify(G_(o,t.v7_relativeSplatPath)),u=Ie.useRef(!1);return Y_(()=>{u.current=!0}),Ie.useCallback(function(d,g){if(g===void 0&&(g={}),!u.current)return;if(typeof d=="number"){i.go(d);return}let p=W_(d,JSON.parse(c),a,g.relative==="path");s==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:zr([e,p.pathname])),(g.replace?i.replace:i.push)(p,g.state,g)},[e,i,c,a,s])}function K_(s,e){let{relative:t}=e===void 0?{}:e,{future:i}=Ie.useContext(xs),{matches:o}=Ie.useContext(ys),{pathname:a}=Nc(),c=JSON.stringify(G_(o,i.v7_relativeSplatPath));return Ie.useMemo(()=>W_(s,JSON.parse(c),a,t==="path"),[s,c,a,t])}function oy(s,e){return ay(s,e)}function ay(s,e,t,i){Ia()||nn(!1);let{navigator:o}=Ie.useContext(xs),{matches:a}=Ie.useContext(ys),c=a[a.length-1],u=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let d=Nc(),g;if(e){var p;let S=typeof e=="string"?Ao(e):e;f==="/"||(p=S.pathname)!=null&&p.startsWith(f)||nn(!1),g=S}else g=d;let _=g.pathname||"/",y=_;if(f!=="/"){let S=f.replace(/^\//,"").split("/");y="/"+_.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=Ix(s,{pathname:y}),M=fy(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},u,S.params),pathname:zr([f,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:zr([f,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),a,t,i);return e&&M?Ie.createElement(Ic.Provider,{value:{location:wa({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:kr.Pop}},M):M}function ly(){let s=gy(),e=ey(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Ie.createElement(Ie.Fragment,null,Ie.createElement("h2",null,"Unexpected Application Error!"),Ie.createElement("h3",{style:{fontStyle:"italic"}},e),t?Ie.createElement("pre",{style:o},t):null,null)}const cy=Ie.createElement(ly,null);class uy extends Ie.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Ie.createElement(ys.Provider,{value:this.props.routeContext},Ie.createElement(j_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hy(s){let{routeContext:e,match:t,children:i}=s,o=Ie.useContext(id);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Ie.createElement(ys.Provider,{value:e},i)}function fy(s,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),s==null){var a;if(!t)return null;if(t.errors)s=t.matches;else if((a=i)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let c=s,u=(o=t)==null?void 0:o.errors;if(u!=null){let g=c.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);g>=0||nn(!1),c=c.slice(0,Math.min(c.length,g+1))}let f=!1,d=-1;if(t&&i&&i.v7_partialHydration)for(let g=0;g<c.length;g++){let p=c[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=g),p.route.id){let{loaderData:_,errors:y}=t,E=p.route.loader&&_[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||E){f=!0,d>=0?c=c.slice(0,d+1):c=[c[0]];break}}}return c.reduceRight((g,p,_)=>{let y,E=!1,M=null,S=null;t&&(y=u&&p.route.id?u[p.route.id]:void 0,M=p.route.errorElement||cy,f&&(d<0&&_===0?(vy("route-fallback"),E=!0,S=null):d===_&&(E=!0,S=p.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,_+1)),D=()=>{let P;return y?P=M:E?P=S:p.route.Component?P=Ie.createElement(p.route.Component,null):p.route.element?P=p.route.element:P=g,Ie.createElement(hy,{match:p,routeContext:{outlet:g,matches:x,isDataRoute:t!=null},children:P})};return t&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?Ie.createElement(uy,{location:t.location,revalidation:t.revalidation,component:M,error:y,children:D(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):D()},null)}var q_=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(q_||{}),$_=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})($_||{});function dy(s){let e=Ie.useContext(id);return e||nn(!1),e}function py(s){let e=Ie.useContext(ny);return e||nn(!1),e}function my(s){let e=Ie.useContext(ys);return e||nn(!1),e}function Z_(s){let e=my(),t=e.matches[e.matches.length-1];return t.route.id||nn(!1),t.route.id}function gy(){var s;let e=Ie.useContext(j_),t=py(),i=Z_();return e!==void 0?e:(s=t.errors)==null?void 0:s[i]}function _y(){let{router:s}=dy(q_.UseNavigateStable),e=Z_($_.UseNavigateStable),t=Ie.useRef(!1);return Y_(()=>{t.current=!0}),Ie.useCallback(function(o,a){a===void 0&&(a={}),t.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,wa({fromRouteId:e},a)))},[s,e])}const lg={};function vy(s,e,t){lg[s]||(lg[s]=!0)}function xy(s,e){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function lf(s){nn(!1)}function yy(s){let{basename:e="/",children:t=null,location:i,navigationType:o=kr.Pop,navigator:a,static:c=!1,future:u}=s;Ia()&&nn(!1);let f=e.replace(/^\/*/,"/"),d=Ie.useMemo(()=>({basename:f,navigator:a,static:c,future:wa({v7_relativeSplatPath:!1},u)}),[f,u,a,c]);typeof i=="string"&&(i=Ao(i));let{pathname:g="/",search:p="",hash:_="",state:y=null,key:E="default"}=i,M=Ie.useMemo(()=>{let S=nd(g,f);return S==null?null:{location:{pathname:S,search:p,hash:_,state:y,key:E},navigationType:o}},[f,g,p,_,y,E,o]);return M==null?null:Ie.createElement(xs.Provider,{value:d},Ie.createElement(Ic.Provider,{children:t,value:M}))}function Sy(s){let{children:e,location:t}=s;return oy(cf(e),t)}new Promise(()=>{});function cf(s,e){e===void 0&&(e=[]);let t=[];return Ie.Children.forEach(s,(i,o)=>{if(!Ie.isValidElement(i))return;let a=[...e,o];if(i.type===Ie.Fragment){t.push.apply(t,cf(i.props.children,a));return}i.type!==lf&&nn(!1),!i.props.index||!i.props.children||nn(!1);let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=cf(i.props.children,a)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uf(){return uf=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},uf.apply(this,arguments)}function Ey(s,e){if(s==null)return{};var t={},i=Object.keys(s),o,a;for(a=0;a<i.length;a++)o=i[a],!(e.indexOf(o)>=0)&&(t[o]=s[o]);return t}function My(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ty(s,e){return s.button===0&&(!e||e==="_self")&&!My(s)}const wy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ay="6";try{window.__reactRouterVersion=Ay}catch{}const Ry="startTransition",cg=Mx[Ry];function by(s){let{basename:e,children:t,future:i,window:o}=s,a=Ie.useRef();a.current==null&&(a.current=Px({window:o,v5Compat:!0}));let c=a.current,[u,f]=Ie.useState({action:c.action,location:c.location}),{v7_startTransition:d}=i||{},g=Ie.useCallback(p=>{d&&cg?cg(()=>f(p)):f(p)},[f,d]);return Ie.useLayoutEffect(()=>c.listen(g),[c,g]),Ie.useEffect(()=>xy(i),[i]),Ie.createElement(yy,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:c,future:i})}const Cy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Py=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xc=Ie.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:a,replace:c,state:u,target:f,to:d,preventScrollReset:g,viewTransition:p}=e,_=Ey(e,wy),{basename:y}=Ie.useContext(xs),E,M=!1;if(typeof d=="string"&&Py.test(d)&&(E=d,Cy))try{let P=new URL(window.location.href),R=d.startsWith("//")?new URL(P.protocol+d):new URL(d),U=nd(R.pathname,y);R.origin===P.origin&&U!=null?d=U+R.search+R.hash:M=!0}catch{}let S=iy(d,{relative:o}),x=Ly(d,{replace:c,state:u,target:f,preventScrollReset:g,relative:o,viewTransition:p});function D(P){i&&i(P),P.defaultPrevented||x(P)}return Ie.createElement("a",uf({},_,{href:E||S,onClick:M||a?i:D,ref:t,target:f}))});var ug;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(ug||(ug={}));var hg;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(hg||(hg={}));function Ly(s,e){let{target:t,replace:i,state:o,preventScrollReset:a,relative:c,viewTransition:u}=e===void 0?{}:e,f=ry(),d=Nc(),g=K_(s,{relative:c});return Ie.useCallback(p=>{if(Ty(p,t)){p.preventDefault();let _=i!==void 0?i:Rc(d)===Rc(g);f(s,{replace:_,state:o,preventScrollReset:a,relative:c,viewTransition:u})}},[d,f,g,i,o,t,s,a,c,u])}const Dy=({onComplete:s})=>{const[e,t]=Ie.useState(""),i="<BioElectro>";return Ie.useEffect(()=>{let o=0;const a=setInterval(()=>{t(i.substring(0,o)),o++,o>i.length&&(clearInterval(a),setTimeout(()=>{s()},1e3))},100);return()=>clearInterval(a)},[s]),ge.jsxs("div",{className:"fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center",children:[ge.jsxs("div",{className:"mb-4 text-4xl font-mono font-bold",children:[e," ",ge.jsx("span",{className:"animate-blink ml-1",children:" | "})]}),ge.jsx("div",{className:"w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden",children:ge.jsx("div",{className:"w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"})})]})},Iy=({menuOpen:s,setMenuOpen:e})=>(Ie.useEffect(()=>{document.body.style.overflow=s?"hidden":""},[s]),ge.jsx("nav",{className:"fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg",children:ge.jsx("div",{className:"max-w-5xl mx-auto px-4",children:ge.jsxs("div",{className:"flex justify-between items-center h-16",children:[ge.jsxs(xc,{to:"/",className:"font-mono text-xl font-bold text-white",children:["BioEchem",ge.jsx("span",{className:"text-emerlad-300",children:"Builds"})]}),ge.jsx("div",{className:"w-7 h-5 relative cursor-pointer z-40 md:hidden",onClick:()=>e(t=>!t),children:"☰"}),ge.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[ge.jsx(xc,{to:"/",className:"text-gray-300 hover:text-white transition-colors",children:"Home"}),ge.jsx("a",{href:"#about",className:"text-gray-300 hover:text-white transition-colors",children:"Usage"}),ge.jsx("a",{href:"#projects",className:"text-gray-300 hover:text-white transition-colors",children:"Part List"}),ge.jsx(xc,{to:"/contact",className:"text-gray-300 hover:text-white transition-colors",children:"Model"})]})]})})})),Ny=({menuOpen:s,setMenuOpen:e})=>ge.jsxs("div",{className:`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${s?"h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none"}
      `,children:[ge.jsx("button",{onClick:()=>e(!1),className:"absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer","aria-label":"Close Menu",children:"×"}),ge.jsx("a",{href:"#home",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Home"}),ge.jsx("a",{href:"#about",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Usage"}),ge.jsx("a",{href:"#projects",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Part List"}),ge.jsx(xc,{to:"/contact",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Model"})]}),rd=({children:s})=>{const e=Ie.useRef(null);return Ie.useEffect(()=>{const t=new IntersectionObserver(([i])=>{i.isIntersecting&&e.current.classList.add("visible")},{threshold:.2,rootMargin:"0px 0px -50px 0px"});return e.current&&t.observe(e.current),()=>t.disconnect()}),ge.jsx("div",{ref:e,className:"reveal",children:s})},Uy=()=>ge.jsx("section",{id:"home",className:"min-h-screen flex items-center justify-center relative",children:ge.jsx(rd,{children:ge.jsxs("div",{className:"text-center z-10 px-4",children:[ge.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent leading-right",children:"Microbial Electrochemical Bioreactor"}),ge.jsx("p",{className:"tex-gray-400 text-lg mb-8 max-w-lg mx-auto",children:"3D printable electrochemical bioreactor for lab-scale microbial electrochemistry."}),ge.jsxs("div",{className:"flex justify-center space-x-4",children:[ge.jsx("a",{href:"#CAD Files",className:"bg-emerald-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]",children:"CAD Files"}),ge.jsx("a",{href:"#projects",className:`bg-emerald-300 text-white py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10`,children:"Part List"})]})]})})}),Fy=()=>{const s=["NIH 3D Database Deposit","Journal of Chemical Education Paper"],e=["3D Printing","Gasket Fabrication","Assembly"];return ge.jsx("section",{id:"about",className:"min-h-screen flex items-center justify-center py-20",children:ge.jsx(rd,{children:ge.jsxs("div",{className:"max-w-3xl mx-auto px-4",children:[ge.jsxs("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center",children:[" ","Usage"]}),ge.jsxs("div",{className:"rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all",children:[ge.jsx("p",{className:"text-gray-300 mb-6",children:"For 100mL scale microbial electrochemical experiments."}),ge.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[ge.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[ge.jsx("h3",{className:"text-xl font-bold mb-4",children:" Resources"}),ge.jsx("div",{className:"flex flex-wrap gap-2",children:s.map((t,i)=>ge.jsx("span",{className:`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    `,children:t},i))})]}),ge.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[ge.jsx("h3",{className:"text-xl font-bold mb-4",children:" Protocols"}),ge.jsx("div",{className:"flex flex-wrap gap-2",children:e.map((t,i)=>ge.jsx("span",{className:`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    `,children:t},i))})]})]})]}),ge.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-8",children:[ge.jsxs("div",{className:"p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all",children:[ge.jsx("h3",{className:"text-xl font-bold mb-4",children:" 🏫 MIT Furst Lab "}),ge.jsxs("ul",{className:"list-disc list-inside text-gray-300 space-y-2",children:[ge.jsxs("li",{children:[ge.jsx("strong",{children:" Department of Chemical Engineering "})," - MIT 2025"]}),ge.jsx("li",{children:"Designed by: Swathi Penumutchu"})]})]}),ge.jsxs("div",{className:"p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all",children:[ge.jsx("h3",{className:"text-xl font-bold mb-4",children:" Cite "}),ge.jsxs("div",{className:"space-y-4 text-gray-300",children:[ge.jsxs("div",{children:[ge.jsxs("h4",{className:"font-semibold",children:[" ","GitHub Repo"," "]}),ge.jsx("p",{children:"Link to design files and WebApp."})]}),ge.jsxs("div",{children:[ge.jsxs("h4",{className:"font-semibold",children:[" ","BioEchemBuilds Database"," "]}),ge.jsx("p",{children:"Fabrication database with all builds in microbial elechemistry toolkit."})]})]})]})]})]})})})},Oy=()=>ge.jsx("section",{id:"projects",className:"min-h-screen flex items-center justify-center py-20",children:ge.jsx(rd,{children:ge.jsxs("div",{className:"max-w-5xl mx-auto px-4",children:[ge.jsxs("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center",children:[" ","Part List"]}),ge.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[ge.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition",children:[ge.jsx("h3",{className:"text-xl font-bold mb-2",children:" Links"}),ge.jsx("p",{className:"text-gray-400 mb-4",children:"Additional Required Parts."}),ge.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:["Glass Jar","Gasket 1","Gasket 2"].map((s,e)=>ge.jsx("span",{className:`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    `,children:s},e))}),ge.jsx("div",{className:"flex justify-between items-center",children:ge.jsx("a",{href:"#",className:"text-blue-400 hover:text-blue-300 transition-colors my-4",children:"McMaster →"})})]}),ge.jsxs("div",{className:`
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            `,children:[ge.jsx("h3",{className:"text-xl font-bold mb-2",children:"Electrodes"}),ge.jsx("p",{className:"text-gray-400 mb-4",children:"Materials for Working Counter and Reference Electrodes."}),ge.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:["Fuel Cell Store","WPI","CHI"].map((s,e)=>ge.jsx("span",{className:`
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    `,children:s},e))}),ge.jsx("div",{className:"flex justify-between items-center ",children:ge.jsx("a",{href:"#",className:"text-blue-400 hover:text-blue-300 transition-colors my-4",children:"Purchase →"})})]})]})]})})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="179",ho={ROTATE:0,DOLLY:1,PAN:2},co={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ky=0,fg=1,By=2,J_=1,Q_=2,nr=3,lr=0,Wn=1,Pi=2,Hr=0,fo=1,dg=2,pg=3,mg=4,zy=5,ds=100,Hy=101,Vy=102,Gy=103,Wy=104,Xy=200,jy=201,Yy=202,Ky=203,hf=204,ff=205,qy=206,$y=207,Zy=208,Jy=209,Qy=210,eS=211,tS=212,nS=213,iS=214,df=0,pf=1,mf=2,_o=3,gf=4,_f=5,vf=6,xf=7,ev=0,rS=1,sS=2,Vr=0,oS=1,aS=2,lS=3,cS=4,uS=5,hS=6,fS=7,gg="attached",dS="detached",tv=300,vo=301,xo=302,yf=303,Sf=304,Uc=306,yo=1e3,Br=1001,bc=1002,Nn=1003,nv=1004,xa=1005,Jn=1006,yc=1007,rr=1008,Ii=1009,iv=1010,rv=1011,Aa=1012,od=1013,_s=1014,Ei=1015,Na=1016,ad=1017,ld=1018,Ra=1020,sv=35902,ov=1021,av=1022,ci=1023,ba=1026,Ca=1027,cd=1028,ud=1029,lv=1030,hd=1031,fd=1033,Sc=33776,Ec=33777,Mc=33778,Tc=33779,Ef=35840,Mf=35841,Tf=35842,wf=35843,Af=36196,Rf=37492,bf=37496,Cf=37808,Pf=37809,Lf=37810,Df=37811,If=37812,Nf=37813,Uf=37814,Ff=37815,Of=37816,kf=37817,Bf=37818,zf=37819,Hf=37820,Vf=37821,wc=36492,Gf=36494,Wf=36495,cv=36283,Xf=36284,jf=36285,Yf=36286,Pa=2300,La=2301,Sh=2302,_g=2400,vg=2401,xg=2402,pS=2500,mS=0,uv=1,Kf=2,gS=3200,_S=3201,hv=0,vS=1,Or="",pn="srgb",Fn="srgb-linear",Cc="linear",Ft="srgb",Ys=7680,yg=519,xS=512,yS=513,SS=514,fv=515,ES=516,MS=517,TS=518,wS=519,qf=35044,Sg="300 es",Li=2e3,Pc=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eg=1234567;const Sa=Math.PI/180,So=180/Math.PI;function Mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function dd(s,e){return(s%e+e)%e}function AS(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function RS(s,e,t){return s!==e?(t-s)/(e-s):0}function Ea(s,e,t){return(1-t)*s+t*e}function bS(s,e,t,i){return Ea(s,e,1-Math.exp(-t*i))}function CS(s,e=1){return e-Math.abs(dd(s,e*2)-e)}function PS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function LS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function DS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function IS(s,e){return s+Math.random()*(e-s)}function NS(s){return s*(.5-Math.random())}function US(s){s!==void 0&&(Eg=s);let e=Eg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function FS(s){return s*Sa}function OS(s){return s*So}function kS(s){return(s&s-1)===0&&s!==0}function BS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function HS(s,e,t,i,o){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),d=a((e+i)/2),g=c((e+i)/2),p=a((e-i)/2),_=c((e-i)/2),y=a((i-e)/2),E=c((i-e)/2);switch(o){case"XYX":s.set(u*g,f*p,f*_,u*d);break;case"YZY":s.set(f*_,u*g,f*p,u*d);break;case"ZXZ":s.set(f*p,f*_,u*g,u*d);break;case"XZX":s.set(u*g,f*E,f*y,u*d);break;case"YXY":s.set(f*y,u*g,f*E,u*d);break;case"ZYZ":s.set(f*E,f*y,u*g,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function yi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dv={DEG2RAD:Sa,RAD2DEG:So,generateUUID:Mi,clamp:gt,euclideanModulo:dd,mapLinear:AS,inverseLerp:RS,lerp:Ea,damp:bS,pingpong:CS,smoothstep:PS,smootherstep:LS,randInt:DS,randFloat:IS,randFloatSpread:NS,seededRandom:US,degToRad:FS,radToDeg:OS,isPowerOfTwo:kS,ceilPowerOfTwo:BS,floorPowerOfTwo:zS,setQuaternionFromProperEuler:HS,normalize:It,denormalize:yi};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ni{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let f=i[o+0],d=i[o+1],g=i[o+2],p=i[o+3];const _=a[c+0],y=a[c+1],E=a[c+2],M=a[c+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(u===1){e[t+0]=_,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(p!==M||f!==_||d!==y||g!==E){let S=1-u;const x=f*_+d*y+g*E+p*M,D=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const U=Math.sqrt(P),z=Math.atan2(U,x*D);S=Math.sin(S*z)/U,u=Math.sin(u*z)/U}const R=u*D;if(f=f*S+_*R,d=d*S+y*R,g=g*S+E*R,p=p*S+M*R,S===1-u){const U=1/Math.sqrt(f*f+d*d+g*g+p*p);f*=U,d*=U,g*=U,p*=U}}e[t]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],f=i[o+1],d=i[o+2],g=i[o+3],p=a[c],_=a[c+1],y=a[c+2],E=a[c+3];return e[t]=u*E+g*p+f*y-d*_,e[t+1]=f*E+g*_+d*p-u*y,e[t+2]=d*E+g*y+u*_-f*p,e[t+3]=g*E-u*p-f*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,d=u(i/2),g=u(o/2),p=u(a/2),_=f(i/2),y=f(o/2),E=f(a/2);switch(c){case"XYZ":this._x=_*g*p+d*y*E,this._y=d*y*p-_*g*E,this._z=d*g*E+_*y*p,this._w=d*g*p-_*y*E;break;case"YXZ":this._x=_*g*p+d*y*E,this._y=d*y*p-_*g*E,this._z=d*g*E-_*y*p,this._w=d*g*p+_*y*E;break;case"ZXY":this._x=_*g*p-d*y*E,this._y=d*y*p+_*g*E,this._z=d*g*E+_*y*p,this._w=d*g*p-_*y*E;break;case"ZYX":this._x=_*g*p-d*y*E,this._y=d*y*p+_*g*E,this._z=d*g*E-_*y*p,this._w=d*g*p+_*y*E;break;case"YZX":this._x=_*g*p+d*y*E,this._y=d*y*p+_*g*E,this._z=d*g*E-_*y*p,this._w=d*g*p-_*y*E;break;case"XZY":this._x=_*g*p-d*y*E,this._y=d*y*p-_*g*E,this._z=d*g*E+_*y*p,this._w=d*g*p+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],f=t[9],d=t[2],g=t[6],p=t[10],_=i+u+p;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-f)*y,this._y=(a-d)*y,this._z=(c-o)*y}else if(i>u&&i>p){const y=2*Math.sqrt(1+i-u-p);this._w=(g-f)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+d)/y}else if(u>p){const y=2*Math.sqrt(1+u-i-p);this._w=(a-d)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(f+g)/y}else{const y=2*Math.sqrt(1+p-i-u);this._w=(c-o)/y,this._x=(a+d)/y,this._y=(f+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,f=t._y,d=t._z,g=t._w;return this._x=i*g+c*u+o*d-a*f,this._y=o*g+c*f+a*u-i*d,this._z=a*g+c*d+i*f-o*u,this._w=c*g-i*u-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*o+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),g=Math.atan2(d,u),p=Math.sin((1-t)*g)/d,_=Math.sin(t*g)/d;return this._w=c*p+this._w*_,this._x=i*p+this._x*_,this._y=o*p+this._y*_,this._z=a*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,f=e.w,d=2*(c*o-u*i),g=2*(u*t-a*o),p=2*(a*i-c*t);return this.x=t+f*d+c*p-u*g,this.y=i+f*g+u*d-a*p,this.z=o+f*p+a*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-a*u,this.y=a*c-i*f,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eh.copy(this).projectOnVector(e),this.sub(Eh)}reflect(e){return this.sub(Eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new X,Mg=new Ni;class dt{constructor(e,t,i,o,a,c,u,f,d){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,d)}set(e,t,i,o,a,c,u,f,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=u,g[3]=t,g[4]=a,g[5]=f,g[6]=i,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],g=i[4],p=i[7],_=i[2],y=i[5],E=i[8],M=o[0],S=o[3],x=o[6],D=o[1],P=o[4],R=o[7],U=o[2],z=o[5],O=o[8];return a[0]=c*M+u*D+f*U,a[3]=c*S+u*P+f*z,a[6]=c*x+u*R+f*O,a[1]=d*M+g*D+p*U,a[4]=d*S+g*P+p*z,a[7]=d*x+g*R+p*O,a[2]=_*M+y*D+E*U,a[5]=_*S+y*P+E*z,a[8]=_*x+y*R+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],g=e[8];return t*c*g-t*u*d-i*a*g+i*u*f+o*a*d-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],g=e[8],p=g*c-u*d,_=u*f-g*a,y=d*a-c*f,E=t*p+i*_+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=p*M,e[1]=(o*d-g*i)*M,e[2]=(u*i-o*c)*M,e[3]=_*M,e[4]=(g*t-o*f)*M,e[5]=(o*a-u*t)*M,e[6]=y*M,e[7]=(i*f-d*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*c+d*u)+c+e,-o*d,o*f,-o*(-d*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mh=new dt;function pv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Da(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function VS(){const s=Da("canvas");return s.style.display="block",s}const Tg={};function po(s){s in Tg||(Tg[s]=!0,console.warn(s))}function GS(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const wg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ag=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WS(){const s={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ft&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(o.r=mo(o.r),o.g=mo(o.g),o.b=mo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Or?Cc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return po("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return po("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Fn]:{primaries:e,whitePoint:i,transfer:Cc,toXYZ:wg,fromXYZ:Ag,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:wg,fromXYZ:Ag,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),s}const wt=WS();function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ks;class XS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=Da("canvas")),Ks.width=e.width,Ks.height=e.height;const o=Ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=or(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Th(o[c].image)):a.push(Th(o[c]))}else a=Th(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Th(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?XS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YS=0;const wh=new X;class mn extends Ss{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=Br,o=Br,a=Jn,c=rr,u=ci,f=Ii,d=mn.DEFAULT_ANISOTROPY,g=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Mi(),this.name="",this.source=new pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=tv;mn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,o=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,d=f[0],g=f[4],p=f[8],_=f[1],y=f[5],E=f[9],M=f[2],S=f[6],x=f[10];if(Math.abs(g-_)<.01&&Math.abs(p-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(p+M)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,R=(y+1)/2,U=(x+1)/2,z=(g+_)/4,O=(p+M)/4,Y=(E+S)/4;return P>R&&P>U?P<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(P),o=z/i,a=O/i):R>U?R<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),i=z/o,a=Y/o):U<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(U),i=O/a,o=Y/a),this.set(i,o,a,t),this}let D=Math.sqrt((S-E)*(S-E)+(p-M)*(p-M)+(_-g)*(_-g));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(p-M)/D,this.z=(_-g)/D,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KS extends Ss{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const o={width:e,height:t,depth:i.depth},a=new mn(o);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new pd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends KS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mv extends mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qS extends mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,_i):_i.fromBufferAttribute(a,c),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xl.copy(i.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),jl.subVectors(this.max,ua),qs.subVectors(e.a,ua),$s.subVectors(e.b,ua),Zs.subVectors(e.c,ua),Cr.subVectors($s,qs),Pr.subVectors(Zs,$s),ss.subVectors(qs,Zs);let t=[0,-Cr.z,Cr.y,0,-Pr.z,Pr.y,0,-ss.z,ss.y,Cr.z,0,-Cr.x,Pr.z,0,-Pr.x,ss.z,0,-ss.x,-Cr.y,Cr.x,0,-Pr.y,Pr.x,0,-ss.y,ss.x,0];return!Ah(t,qs,$s,Zs,jl)||(t=[1,0,0,0,1,0,0,0,1],!Ah(t,qs,$s,Zs,jl))?!1:(Yl.crossVectors(Cr,Pr),t=[Yl.x,Yl.y,Yl.z],Ah(t,qs,$s,Zs,jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new X,new X,new X,new X,new X,new X,new X,new X],_i=new X,Xl=new Fi,qs=new X,$s=new X,Zs=new X,Cr=new X,Pr=new X,ss=new X,ua=new X,jl=new X,Yl=new X,os=new X;function Ah(s,e,t,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){os.fromArray(s,a);const u=o.x*Math.abs(os.x)+o.y*Math.abs(os.y)+o.z*Math.abs(os.z),f=e.dot(os),d=t.dot(os),g=i.dot(os);if(Math.max(-Math.max(f,d,g),Math.min(f,d,g))>u)return!1}return!0}const $S=new Fi,ha=new X,Rh=new X;class Oi{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$S.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ha,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Rh)),this.expandByPoint(ha.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new X,bh=new X,Kl=new X,Lr=new X,Ch=new X,ql=new X,Ph=new X;class Ua{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){bh.copy(e).add(t).multiplyScalar(.5),Kl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(bh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Kl),u=Lr.dot(this.direction),f=-Lr.dot(Kl),d=Lr.lengthSq(),g=Math.abs(1-c*c);let p,_,y,E;if(g>0)if(p=c*f-u,_=c*u-f,E=a*g,p>=0)if(_>=-E)if(_<=E){const M=1/g;p*=M,_*=M,y=p*(p+c*_+2*u)+_*(c*p+_+2*f)+d}else _=a,p=Math.max(0,-(c*_+u)),y=-p*p+_*(_+2*f)+d;else _=-a,p=Math.max(0,-(c*_+u)),y=-p*p+_*(_+2*f)+d;else _<=-E?(p=Math.max(0,-(-c*a+u)),_=p>0?-a:Math.min(Math.max(-a,-f),a),y=-p*p+_*(_+2*f)+d):_<=E?(p=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+d):(p=Math.max(0,-(c*a+u)),_=p>0?a:Math.min(Math.max(-a,-f),a),y=-p*p+_*(_+2*f)+d);else _=c>0?-a:a,p=Math.max(0,-(c*_+u)),y=-p*p+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(bh).addScaledVector(Kl,_),y}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),o=Zi.dot(Zi)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,f;const d=1/this.direction.x,g=1/this.direction.y,p=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,o=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,o=(e.min.x-_.x)*d),g>=0?(a=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(a=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),p>=0?(u=(e.min.z-_.z)*p,f=(e.max.z-_.z)*p):(u=(e.max.z-_.z)*p,f=(e.min.z-_.z)*p),i>f||u>o)||((u>i||i!==i)&&(i=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,o,a){Ch.subVectors(t,e),ql.subVectors(i,e),Ph.crossVectors(Ch,ql);let c=this.direction.dot(Ph),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Lr.subVectors(this.origin,e);const f=u*this.direction.dot(ql.crossVectors(Lr,ql));if(f<0)return null;const d=u*this.direction.dot(Ch.cross(Lr));if(d<0||f+d>c)return null;const g=-u*Lr.dot(Ph);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,o,a,c,u,f,d,g,p,_,y,E,M,S){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,d,g,p,_,y,E,M,S)}set(e,t,i,o,a,c,u,f,d,g,p,_,y,E,M,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=o,x[1]=a,x[5]=c,x[9]=u,x[13]=f,x[2]=d,x[6]=g,x[10]=p,x[14]=_,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Js.setFromMatrixColumn(e,0).length(),a=1/Js.setFromMatrixColumn(e,1).length(),c=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(o),d=Math.sin(o),g=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const _=c*g,y=c*p,E=u*g,M=u*p;t[0]=f*g,t[4]=-f*p,t[8]=d,t[1]=y+E*d,t[5]=_-M*d,t[9]=-u*f,t[2]=M-_*d,t[6]=E+y*d,t[10]=c*f}else if(e.order==="YXZ"){const _=f*g,y=f*p,E=d*g,M=d*p;t[0]=_+M*u,t[4]=E*u-y,t[8]=c*d,t[1]=c*p,t[5]=c*g,t[9]=-u,t[2]=y*u-E,t[6]=M+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*g,y=f*p,E=d*g,M=d*p;t[0]=_-M*u,t[4]=-c*p,t[8]=E+y*u,t[1]=y+E*u,t[5]=c*g,t[9]=M-_*u,t[2]=-c*d,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*g,y=c*p,E=u*g,M=u*p;t[0]=f*g,t[4]=E*d-y,t[8]=_*d+M,t[1]=f*p,t[5]=M*d+_,t[9]=y*d-E,t[2]=-d,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,y=c*d,E=u*f,M=u*d;t[0]=f*g,t[4]=M-_*p,t[8]=E*p+y,t[1]=p,t[5]=c*g,t[9]=-u*g,t[2]=-d*g,t[6]=y*p+E,t[10]=_-M*p}else if(e.order==="XZY"){const _=c*f,y=c*d,E=u*f,M=u*d;t[0]=f*g,t[4]=-p,t[8]=d*g,t[1]=_*p+M,t[5]=c*g,t[9]=y*p-E,t[2]=E*p-y,t[6]=u*g,t[10]=M*p+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZS,e,JS)}lookAt(e,t,i){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Dr.crossVectors(i,$n),Dr.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Dr.crossVectors(i,$n)),Dr.normalize(),$l.crossVectors($n,Dr),o[0]=Dr.x,o[4]=$l.x,o[8]=$n.x,o[1]=Dr.y,o[5]=$l.y,o[9]=$n.y,o[2]=Dr.z,o[6]=$l.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],g=i[1],p=i[5],_=i[9],y=i[13],E=i[2],M=i[6],S=i[10],x=i[14],D=i[3],P=i[7],R=i[11],U=i[15],z=o[0],O=o[4],Y=o[8],C=o[12],b=o[1],F=o[5],le=o[9],ne=o[13],ae=o[2],he=o[6],se=o[10],ue=o[14],H=o[3],oe=o[7],ie=o[11],N=o[15];return a[0]=c*z+u*b+f*ae+d*H,a[4]=c*O+u*F+f*he+d*oe,a[8]=c*Y+u*le+f*se+d*ie,a[12]=c*C+u*ne+f*ue+d*N,a[1]=g*z+p*b+_*ae+y*H,a[5]=g*O+p*F+_*he+y*oe,a[9]=g*Y+p*le+_*se+y*ie,a[13]=g*C+p*ne+_*ue+y*N,a[2]=E*z+M*b+S*ae+x*H,a[6]=E*O+M*F+S*he+x*oe,a[10]=E*Y+M*le+S*se+x*ie,a[14]=E*C+M*ne+S*ue+x*N,a[3]=D*z+P*b+R*ae+U*H,a[7]=D*O+P*F+R*he+U*oe,a[11]=D*Y+P*le+R*se+U*ie,a[15]=D*C+P*ne+R*ue+U*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],f=e[9],d=e[13],g=e[2],p=e[6],_=e[10],y=e[14],E=e[3],M=e[7],S=e[11],x=e[15];return E*(+a*f*p-o*d*p-a*u*_+i*d*_+o*u*y-i*f*y)+M*(+t*f*y-t*d*_+a*c*_-o*c*y+o*d*g-a*f*g)+S*(+t*d*p-t*u*y-a*c*p+i*c*y+a*u*g-i*d*g)+x*(-o*u*g-t*f*p+t*u*_+o*c*p-i*c*_+i*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],g=e[8],p=e[9],_=e[10],y=e[11],E=e[12],M=e[13],S=e[14],x=e[15],D=p*S*d-M*_*d+M*f*y-u*S*y-p*f*x+u*_*x,P=E*_*d-g*S*d-E*f*y+c*S*y+g*f*x-c*_*x,R=g*M*d-E*p*d+E*u*y-c*M*y-g*u*x+c*p*x,U=E*p*f-g*M*f-E*u*_+c*M*_+g*u*S-c*p*S,z=t*D+i*P+o*R+a*U;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=D*O,e[1]=(M*_*a-p*S*a-M*o*y+i*S*y+p*o*x-i*_*x)*O,e[2]=(u*S*a-M*f*a+M*o*d-i*S*d-u*o*x+i*f*x)*O,e[3]=(p*f*a-u*_*a-p*o*d+i*_*d+u*o*y-i*f*y)*O,e[4]=P*O,e[5]=(g*S*a-E*_*a+E*o*y-t*S*y-g*o*x+t*_*x)*O,e[6]=(E*f*a-c*S*a-E*o*d+t*S*d+c*o*x-t*f*x)*O,e[7]=(c*_*a-g*f*a+g*o*d-t*_*d-c*o*y+t*f*y)*O,e[8]=R*O,e[9]=(E*p*a-g*M*a-E*i*y+t*M*y+g*i*x-t*p*x)*O,e[10]=(c*M*a-E*u*a+E*i*d-t*M*d-c*i*x+t*u*x)*O,e[11]=(g*u*a-c*p*a-g*i*d+t*p*d+c*i*y-t*u*y)*O,e[12]=U*O,e[13]=(g*M*o-E*p*o+E*i*_-t*M*_-g*i*S+t*p*S)*O,e[14]=(E*u*o-c*M*o-E*i*f+t*M*f+c*i*S-t*u*S)*O,e[15]=(c*p*o-g*u*o+g*i*f-t*p*f-c*i*_+t*u*_)*O,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,d=a*c,g=a*u;return this.set(d*c+i,d*u-o*f,d*f+o*u,0,d*u+o*f,g*u+i,g*f-o*c,0,d*f-o*u,g*f+o*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,d=a+a,g=c+c,p=u+u,_=a*d,y=a*g,E=a*p,M=c*g,S=c*p,x=u*p,D=f*d,P=f*g,R=f*p,U=i.x,z=i.y,O=i.z;return o[0]=(1-(M+x))*U,o[1]=(y+R)*U,o[2]=(E-P)*U,o[3]=0,o[4]=(y-R)*z,o[5]=(1-(_+x))*z,o[6]=(S+D)*z,o[7]=0,o[8]=(E+P)*O,o[9]=(S-D)*O,o[10]=(1-(_+M))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Js.set(o[0],o[1],o[2]).length();const c=Js.set(o[4],o[5],o[6]).length(),u=Js.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],vi.copy(this);const d=1/a,g=1/c,p=1/u;return vi.elements[0]*=d,vi.elements[1]*=d,vi.elements[2]*=d,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=p,vi.elements[9]*=p,vi.elements[10]*=p,t.setFromRotationMatrix(vi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=Li,f=!1){const d=this.elements,g=2*a/(t-e),p=2*a/(i-o),_=(t+e)/(t-e),y=(i+o)/(i-o);let E,M;if(f)E=a/(c-a),M=c*a/(c-a);else if(u===Li)E=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Pc)E=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=p,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Li,f=!1){const d=this.elements,g=2/(t-e),p=2/(i-o),_=-(t+e)/(t-e),y=-(i+o)/(i-o);let E,M;if(f)E=1/(c-a),M=c/(c-a);else if(u===Li)E=-2/(c-a),M=-(c+a)/(c-a);else if(u===Pc)E=-1/(c-a),M=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=p,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Js=new X,vi=new mt,ZS=new X(0,0,0),JS=new X(1,1,1),Dr=new X,$l=new X,$n=new X,Rg=new mt,bg=new Ni;class Ui{constructor(e=0,t=0,i=0,o=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],f=o[1],d=o[5],g=o[9],p=o[2],_=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bg.setFromEuler(this),this.setFromQuaternion(bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QS=0;const Cg=new X,Qs=new Ni,Ji=new mt,Zl=new X,fa=new X,eE=new X,tE=new Ni,Pg=new X(1,0,0),Lg=new X(0,1,0),Dg=new X(0,0,1),Ig={type:"added"},nE={type:"removed"},eo={type:"childadded",child:null},Lh={type:"childremoved",child:null};class $t extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new X,t=new Ui,i=new Ni,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mt},normalMatrix:{value:new dt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(Pg,e)}rotateY(e){return this.rotateOnAxis(Lg,e)}rotateZ(e){return this.rotateOnAxis(Dg,e)}translateOnAxis(e,t){return Cg.copy(e).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pg,e)}translateY(e){return this.translateOnAxis(Lg,e)}translateZ(e){return this.translateOnAxis(Dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zl.copy(e):Zl.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(fa,Zl,this.up):Ji.lookAt(Zl,fa,this.up),this.quaternion.setFromRotationMatrix(Ji),o&&(Ji.extractRotation(o.matrixWorld),Qs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ig),eo.child=e,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nE),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ig),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,eE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,tE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){const p=f[d];a(e.shapes,p)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),d=c(e.textures),g=c(e.images),p=c(e.shapes),_=c(e.skeletons),y=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),p.length>0&&(i.shapes=p),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=o,i;function c(u){const f=[];for(const d in u){const g=u[d];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}$t.DEFAULT_UP=new X(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new X,Qi=new X,Dh=new X,er=new X,to=new X,no=new X,Ng=new X,Ih=new X,Nh=new X,Uh=new X,Fh=new bt,Oh=new bt,kh=new bt;class Si{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),xi.subVectors(e,t),o.cross(xi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){xi.subVectors(o,t),Qi.subVectors(i,t),Dh.subVectors(e,t);const c=xi.dot(xi),u=xi.dot(Qi),f=xi.dot(Dh),d=Qi.dot(Qi),g=Qi.dot(Dh),p=c*d-u*u;if(p===0)return a.set(0,0,0),null;const _=1/p,y=(d*f-u*g)*_,E=(c*g-u*f)*_;return a.set(1-y-E,E,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,o,a,c,u,f){return this.getBarycoord(e,t,i,o,er)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,er.x),f.addScaledVector(c,er.y),f.addScaledVector(u,er.z),f)}static getInterpolatedAttribute(e,t,i,o,a,c){return Fh.setScalar(0),Oh.setScalar(0),kh.setScalar(0),Fh.fromBufferAttribute(e,t),Oh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Fh,a.x),c.addScaledVector(Oh,a.y),c.addScaledVector(kh,a.z),c}static isFrontFacing(e,t,i,o){return xi.subVectors(i,t),Qi.subVectors(e,t),xi.cross(Qi).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),xi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return Si.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;to.subVectors(o,i),no.subVectors(a,i),Ih.subVectors(e,i);const f=to.dot(Ih),d=no.dot(Ih);if(f<=0&&d<=0)return t.copy(i);Nh.subVectors(e,o);const g=to.dot(Nh),p=no.dot(Nh);if(g>=0&&p<=g)return t.copy(o);const _=f*p-g*d;if(_<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(i).addScaledVector(to,c);Uh.subVectors(e,a);const y=to.dot(Uh),E=no.dot(Uh);if(E>=0&&y<=E)return t.copy(a);const M=y*d-f*E;if(M<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(i).addScaledVector(no,u);const S=g*E-y*p;if(S<=0&&p-g>=0&&y-E>=0)return Ng.subVectors(a,o),u=(p-g)/(p-g+(y-E)),t.copy(o).addScaledVector(Ng,u);const x=1/(S+M+_);return c=M*x,u=_*x,t.copy(i).addScaledVector(to,c).addScaledVector(no,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Bh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=wt.workingColorSpace){if(e=dd(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Bh(c,a,e+1/3),this.g=Bh(c,a,e),this.b=Bh(c,a,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=pn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=_v[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return wt.workingToColorSpace(An.copy(this),e),Math.round(gt(An.r*255,0,255))*65536+Math.round(gt(An.g*255,0,255))*256+Math.round(gt(An.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(An.copy(this),t);const i=An.r,o=An.g,a=An.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let f,d;const g=(u+c)/2;if(u===c)f=0,d=0;else{const p=c-u;switch(d=g<=.5?p/(c+u):p/(2-c-u),c){case i:f=(o-a)/p+(o<a?6:0);break;case o:f=(a-i)/p+2;break;case a:f=(i-o)/p+4;break}f/=6}return e.h=f,e.s=d,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=pn){wt.workingToColorSpace(An.copy(this),e);const t=An.r,i=An.g,o=An.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Jl);const i=Ea(Ir.h,Jl.h,t),o=Ea(Ir.s,Jl.s,t),a=Ea(Ir.l,Jl.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new ft;ft.NAMES=_v;let iE=0;class Di extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=fo,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=ff,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hf&&(i.blendSrc=this.blendSrc),this.blendDst!==ff&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ms extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new X,Ql=new ct;let rE=0;class Un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qf,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),o=It(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),o=It(o,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qf&&(e.usage=this.usage),e}}class vv extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xv extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ar extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sE=0;const ai=new mt,zh=new $t,io=new X,Zn=new Fi,da=new Fi,dn=new X;class ki extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pv(e)?xv:vv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new dt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ar(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];da.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(Zn.min,da.min),Zn.expandByPoint(dn),dn.addVectors(Zn.max,da.max),Zn.expandByPoint(dn)):(Zn.expandByPoint(da.min),Zn.expandByPoint(da.max))}Zn.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)dn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(dn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,g=u.count;d<g;d++)dn.fromBufferAttribute(u,d),f&&(io.fromBufferAttribute(e,d),dn.add(io)),o=Math.max(o,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let Y=0;Y<i.count;Y++)u[Y]=new X,f[Y]=new X;const d=new X,g=new X,p=new X,_=new ct,y=new ct,E=new ct,M=new X,S=new X;function x(Y,C,b){d.fromBufferAttribute(i,Y),g.fromBufferAttribute(i,C),p.fromBufferAttribute(i,b),_.fromBufferAttribute(a,Y),y.fromBufferAttribute(a,C),E.fromBufferAttribute(a,b),g.sub(d),p.sub(d),y.sub(_),E.sub(_);const F=1/(y.x*E.y-E.x*y.y);isFinite(F)&&(M.copy(g).multiplyScalar(E.y).addScaledVector(p,-y.y).multiplyScalar(F),S.copy(p).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(F),u[Y].add(M),u[C].add(M),u[b].add(M),f[Y].add(S),f[C].add(S),f[b].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let Y=0,C=D.length;Y<C;++Y){const b=D[Y],F=b.start,le=b.count;for(let ne=F,ae=F+le;ne<ae;ne+=3)x(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const P=new X,R=new X,U=new X,z=new X;function O(Y){U.fromBufferAttribute(o,Y),z.copy(U);const C=u[Y];P.copy(C),P.sub(U.multiplyScalar(U.dot(C))).normalize(),R.crossVectors(z,C);const F=R.dot(f[Y])<0?-1:1;c.setXYZW(Y,P.x,P.y,P.z,F)}for(let Y=0,C=D.length;Y<C;++Y){const b=D[Y],F=b.start,le=b.count;for(let ne=F,ae=F+le;ne<ae;ne+=3)O(e.getX(ne+0)),O(e.getX(ne+1)),O(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const o=new X,a=new X,c=new X,u=new X,f=new X,d=new X,g=new X,p=new X;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),M=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,S),g.subVectors(c,a),p.subVectors(o,a),g.cross(p),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),u.add(g),f.add(g),d.add(g),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,y=t.count;_<y;_+=3)o.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,a),p.subVectors(o,a),g.cross(p),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(u,f){const d=u.array,g=u.itemSize,p=u.normalized,_=new d.constructor(f.length*g);let y=0,E=0;for(let M=0,S=f.length;M<S;M++){u.isInterleavedBufferAttribute?y=f[M]*u.data.stride+u.offset:y=f[M]*g;for(let x=0;x<g;x++)_[E++]=d[y++]}return new Un(_,g,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ki,i=this.index.array,o=this.attributes;for(const u in o){const f=o[u],d=e(f,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let g=0,p=d.length;g<p;g++){const _=d[g],y=e(_,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],g=[];for(let p=0,_=d.length;p<_;p++){const y=d[p];g.push(y.toJSON(e.data))}g.length>0&&(o[f]=g,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(t))}const a=e.morphAttributes;for(const d in a){const g=[],p=a[d];for(let _=0,y=p.length;_<y;_++)g.push(p[_].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const p=c[d];this.addGroup(p.start,p.count,p.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ug=new mt,as=new Ua,ec=new Oi,Fg=new X,tc=new X,nc=new X,ic=new X,Hh=new X,rc=new X,Og=new X,sc=new X;class Qn extends $t{constructor(e=new ki,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){rc.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const g=u[f],p=a[f];g!==0&&(Hh.fromBufferAttribute(p,e),c?rc.addScaledVector(Hh,g):rc.addScaledVector(Hh.sub(t),g))}t.add(rc)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(a),as.copy(e.ray).recast(e.near),!(ec.containsPoint(as.origin)===!1&&(as.intersectSphere(ec,Fg)===null||as.origin.distanceToSquared(Fg)>(e.far-e.near)**2))&&(Ug.copy(a).invert(),as.copy(e.ray).applyMatrix4(Ug),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,g=a.attributes.uv1,p=a.attributes.normal,_=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const S=_[E],x=c[S.materialIndex],D=Math.max(S.start,y.start),P=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let R=D,U=P;R<U;R+=3){const z=u.getX(R),O=u.getX(R+1),Y=u.getX(R+2);o=oc(this,x,e,i,d,g,p,z,O,Y),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(u.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const D=u.getX(S),P=u.getX(S+1),R=u.getX(S+2);o=oc(this,c,e,i,d,g,p,D,P,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const S=_[E],x=c[S.materialIndex],D=Math.max(S.start,y.start),P=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let R=D,U=P;R<U;R+=3){const z=R,O=R+1,Y=R+2;o=oc(this,x,e,i,d,g,p,z,O,Y),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const D=S,P=S+1,R=S+2;o=oc(this,c,e,i,d,g,p,D,P,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function oE(s,e,t,i,o,a,c,u){let f;if(e.side===Wn?f=i.intersectTriangle(c,a,o,!0,u):f=i.intersectTriangle(o,a,c,e.side===lr,u),f===null)return null;sc.copy(u),sc.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(sc);return d<t.near||d>t.far?null:{distance:d,point:sc.clone(),object:s}}function oc(s,e,t,i,o,a,c,u,f,d){s.getVertexPosition(u,tc),s.getVertexPosition(f,nc),s.getVertexPosition(d,ic);const g=oE(s,e,t,i,tc,nc,ic,Og);if(g){const p=new X;Si.getBarycoord(Og,tc,nc,ic,p),o&&(g.uv=Si.getInterpolatedAttribute(o,u,f,d,p,new ct)),a&&(g.uv1=Si.getInterpolatedAttribute(a,u,f,d,p,new ct)),c&&(g.normal=Si.getInterpolatedAttribute(c,u,f,d,p,new X),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const _={a:u,b:f,c:d,normal:new X,materialIndex:0};Si.getNormal(tc,nc,ic,_.normal),g.face=_,g.barycoord=p}return g}class Fa extends ki{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],d=[],g=[],p=[];let _=0,y=0;E("z","y","x",-1,-1,i,t,e,c,a,0),E("z","y","x",1,-1,i,t,-e,c,a,1),E("x","z","y",1,1,e,i,t,o,c,2),E("x","z","y",1,-1,e,i,-t,o,c,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new ar(d,3)),this.setAttribute("normal",new ar(g,3)),this.setAttribute("uv",new ar(p,2));function E(M,S,x,D,P,R,U,z,O,Y,C){const b=R/O,F=U/Y,le=R/2,ne=U/2,ae=z/2,he=O+1,se=Y+1;let ue=0,H=0;const oe=new X;for(let ie=0;ie<se;ie++){const N=ie*F-ne;for(let te=0;te<he;te++){const ze=te*b-le;oe[M]=ze*D,oe[S]=N*P,oe[x]=ae,d.push(oe.x,oe.y,oe.z),oe[M]=0,oe[S]=0,oe[x]=z>0?1:-1,g.push(oe.x,oe.y,oe.z),p.push(te/O),p.push(1-ie/Y),ue+=1}}for(let ie=0;ie<Y;ie++)for(let N=0;N<O;N++){const te=_+N+he*ie,ze=_+N+he*(ie+1),Be=_+(N+1)+he*(ie+1),Z=_+(N+1)+he*ie;f.push(te,ze,Z),f.push(ze,Be,Z),H+=6}u.addGroup(y,H,C),y+=H,_+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const i=Eo(s[t]);for(const o in i)e[o]=i[o]}return e}function aE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const lE={clone:Eo,merge:Dn};var cE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cE,this.fragmentShader=uE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=aE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sv extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new X,kg=new ct,Bg=new ct;class In extends Sv{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,kg,Bg),t.subVectors(Bg,kg)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*i/d,o*=c.width/f,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ro=-90,so=1;class hE extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new In(ro,so,e,t);o.layers=this.layers,this.add(o);const a=new In(ro,so,e,t);a.layers=this.layers,this.add(a);const c=new In(ro,so,e,t);c.layers=this.layers,this.add(c);const u=new In(ro,so,e,t);u.layers=this.layers,this.add(u);const f=new In(ro,so,e,t);f.layers=this.layers,this.add(f);const d=new In(ro,so,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,f]=t;for(const d of t)this.remove(d);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,d,g]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),e.render(t,g),e.setRenderTarget(p,_,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Ev extends mn{constructor(e=[],t=vo,i,o,a,c,u,f,d,g){super(e,t,i,o,a,c,u,f,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fE extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Ev(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Fa(5,5,5),a=new Gr({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wn,blending:Hr});a.uniforms.tEquirect.value=t;const c=new Qn(o,a),u=t.minFilter;return t.minFilter===rr&&(t.minFilter=Jn),new hE(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}class gs extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dE={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),x=this._getHandJoint(d,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],_=g.position.distanceTo(p.position),y=.02,E=.005;d.inputState.pinching&&_>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(dE)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pE extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qf,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new X;class md{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),o=It(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),o=It(o,this.array),a=It(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new md(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zg=new X,Hg=new bt,Vg=new bt,gE=new X,Gg=new mt,ac=new X,Gh=new Oi,Wg=new mt,Wh=new Ua;class _E extends Qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gg,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ac),this.boundingBox.expandByPoint(ac)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ac),this.boundingSphere.expandByPoint(ac)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,o=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gh.copy(this.boundingSphere),Gh.applyMatrix4(o),e.ray.intersectsSphere(Gh)!==!1&&(Wg.copy(o).invert(),Wh.copy(e.ray).applyMatrix4(Wg),!(this.boundingBox!==null&&Wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,o=t.count;i<o;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,o=this.geometry;Hg.fromBufferAttribute(o.attributes.skinIndex,e),Vg.fromBufferAttribute(o.attributes.skinWeight,e),zg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Vg.getComponent(a);if(c!==0){const u=Hg.getComponent(a);Gg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(gE.copy(zg).applyMatrix4(Gg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mv extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tv extends mn{constructor(e=null,t=1,i=1,o,a,c,u,f,d=Nn,g=Nn,p,_){super(null,c,u,f,d,g,o,a,p,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xg=new mt,vE=new mt;class gd{constructor(e=[],t=[]){this.uuid=Mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,o=this.bones.length;i<o;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,o=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:vE;Xg.multiplyMatrices(u,t[a]),Xg.toArray(i,a*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new gd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Tv(t,e,e,ci,Ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const o=this.bones[t];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,o=e.bones.length;i<o;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new Mv),this.bones.push(c),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let o=0,a=t.length;o<a;o++){const c=t[o];e.bones.push(c.uuid);const u=i[o];e.boneInverses.push(u.toArray())}return e}}class $f extends Un{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const oo=new mt,jg=new mt,lc=[],Yg=new Fi,xE=new mt,pa=new Qn,ma=new Oi;class yE extends Qn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $f(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,xE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,oo),Yg.copy(e.boundingBox).applyMatrix4(oo),this.boundingBox.union(Yg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,oo),ma.copy(e.boundingSphere).applyMatrix4(oo),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=o[c+u]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,oo),jg.multiplyMatrices(i,oo),pa.matrixWorld=jg,pa.raycast(e,lc);for(let c=0,u=lc.length;c<u;c++){const f=lc[c];f.instanceId=a,f.object=this,t.push(f)}lc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $f(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new Tv(new Float32Array(o*this.count),o,this.count,cd,Ei));const a=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,f=o*e;a[f]=u,a.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xh=new X,SE=new X,EE=new dt;class Fr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Xh.subVectors(i,t).cross(SE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xh),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||EE.getNormalMatrix(e),o=this.coplanarPoint(Xh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Oi,ME=new ct(.5,.5),cc=new X;class _d{constructor(e=new Fr,t=new Fr,i=new Fr,o=new Fr,a=new Fr,c=new Fr){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li,i=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],d=a[3],g=a[4],p=a[5],_=a[6],y=a[7],E=a[8],M=a[9],S=a[10],x=a[11],D=a[12],P=a[13],R=a[14],U=a[15];if(o[0].setComponents(d-c,y-g,x-E,U-D).normalize(),o[1].setComponents(d+c,y+g,x+E,U+D).normalize(),o[2].setComponents(d+u,y+p,x+M,U+P).normalize(),o[3].setComponents(d-u,y-p,x-M,U-P).normalize(),i)o[4].setComponents(f,_,S,R).normalize(),o[5].setComponents(d-f,y-_,x-S,U-R).normalize();else if(o[4].setComponents(d-f,y-_,x-S,U-R).normalize(),t===Li)o[5].setComponents(d+f,y+_,x+S,U+R).normalize();else if(t===Pc)o[5].setComponents(f,_,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=ME.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(cc.x=o.normal.x>0?e.max.x:e.min.x,cc.y=o.normal.y>0?e.max.y:e.min.y,cc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wv extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new X,Dc=new X,Kg=new mt,ga=new Ua,uc=new Oi,jh=new X,qg=new X;class vd extends $t{constructor(e=new ki,t=new wv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)Lc.fromBufferAttribute(t,o-1),Dc.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Lc.distanceTo(Dc);e.setAttribute("lineDistance",new ar(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(o),uc.radius+=a,e.ray.intersectsSphere(uc)===!1)return;Kg.copy(o).invert(),ga.copy(e.ray).applyMatrix4(Kg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){const y=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let M=y,S=E-1;M<S;M+=d){const x=g.getX(M),D=g.getX(M+1),P=hc(this,e,ga,f,x,D,M);P&&t.push(P)}if(this.isLineLoop){const M=g.getX(E-1),S=g.getX(y),x=hc(this,e,ga,f,M,S,E-1);x&&t.push(x)}}else{const y=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let M=y,S=E-1;M<S;M+=d){const x=hc(this,e,ga,f,M,M+1,M);x&&t.push(x)}if(this.isLineLoop){const M=hc(this,e,ga,f,E-1,y,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function hc(s,e,t,i,o,a,c){const u=s.geometry.attributes.position;if(Lc.fromBufferAttribute(u,o),Dc.fromBufferAttribute(u,a),t.distanceSqToSegment(Lc,Dc,jh,qg)>i)return;jh.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(jh);if(!(d<e.near||d>e.far))return{distance:d,point:qg.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const $g=new X,Zg=new X;class TE extends vd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)$g.fromBufferAttribute(t,o),Zg.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+$g.distanceTo(Zg);e.setAttribute("lineDistance",new ar(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wE extends vd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Av extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jg=new mt,Zf=new Ua,fc=new Oi,dc=new X;class AE extends $t{constructor(e=new ki,t=new Av){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(o),fc.radius+=a,e.ray.intersectsSphere(fc)===!1)return;Jg.copy(o).invert(),Zf.copy(e.ray).applyMatrix4(Jg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=i.index,p=i.attributes.position;if(d!==null){const _=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let E=_,M=y;E<M;E++){const S=d.getX(E);dc.fromBufferAttribute(p,S),Qg(dc,S,f,o,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let E=_,M=y;E<M;E++)dc.fromBufferAttribute(p,E),Qg(dc,E,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Qg(s,e,t,i,o,a,c){const u=Zf.distanceSqToPoint(s);if(u<t){const f=new X;Zf.closestPointToPoint(s,f),f.applyMatrix4(i);const d=o.ray.origin.distanceTo(f);if(d<o.near||d>o.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Rv extends mn{constructor(e,t,i=_s,o,a,c,u=Nn,f=Nn,d,g=ba,p=1){if(g!==ba&&g!==Ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:p};super(_,o,a,c,u,f,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fc extends ki{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(o),d=u+1,g=f+1,p=e/u,_=t/f,y=[],E=[],M=[],S=[];for(let x=0;x<g;x++){const D=x*_-c;for(let P=0;P<d;P++){const R=P*p-a;E.push(R,-D,0),M.push(0,0,1),S.push(P/u),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let D=0;D<u;D++){const P=D+d*x,R=D+d*(x+1),U=D+1+d*(x+1),z=D+1+d*x;y.push(P,R,z),y.push(R,U,z)}this.setIndex(y),this.setAttribute("position",new ar(E,3)),this.setAttribute("normal",new ar(M,3)),this.setAttribute("uv",new ar(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class xd extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hv,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bi extends xd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class RE extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bE extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function pc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function CE(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function PE(s){function e(o,a){return s[o]-s[a]}const t=s.length,i=new Array(t);for(let o=0;o!==t;++o)i[o]=o;return i.sort(e),i}function e_(s,e,t){const i=s.length,o=new s.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let f=0;f!==e;++f)o[c++]=s[u+f]}return o}function bv(s,e,t,i){let o=1,a=s[0];for(;a!==void 0&&a[i]===void 0;)a=s[o++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push(...c)),a=s[o++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=s[o++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=s[o++];while(a!==void 0)}class Oa{constructor(e,t,i,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,o=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<o)){for(let u=i+2;;){if(o===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=o,o=t[++i],e<o)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(o=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(o=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o;for(let c=0;c!==o;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class LE extends Oa{constructor(e,t,i,o){super(e,t,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_g,endingEnd:_g}}intervalChanged_(e,t,i){const o=this.parameterPositions;let a=e-2,c=e+1,u=o[a],f=o[c];if(u===void 0)switch(this.getSettings_().endingStart){case vg:a=e,u=2*t-i;break;case xg:a=o.length-2,u=t+o[a]-o[a+1];break;default:a=e,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case vg:c=e,f=2*i-t;break;case xg:c=1,f=i+o[1]-o[0];break;default:c=e-1,f=t}const d=(i-t)*.5,g=this.valueSize;this._weightPrev=d/(t-u),this._weightNext=d/(f-i),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,g=this._offsetPrev,p=this._offsetNext,_=this._weightPrev,y=this._weightNext,E=(i-t)/(o-t),M=E*E,S=M*E,x=-_*S+2*_*M-_*E,D=(1+_)*S+(-1.5-2*_)*M+(-.5+_)*E+1,P=(-1-y)*S+(1.5+y)*M+.5*E,R=y*S-y*M;for(let U=0;U!==u;++U)a[U]=x*c[g+U]+D*c[d+U]+P*c[f+U]+R*c[p+U];return a}}class DE extends Oa{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,g=(i-t)/(o-t),p=1-g;for(let _=0;_!==u;++_)a[_]=c[d+_]*p+c[f+_]*g;return a}}class IE extends Oa{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ti{constructor(e,t,i,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pc(t,this.TimeBufferType),this.values=pc(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pc(e.times,Array),values:pc(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(i.interpolation=o)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new IE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new DE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new LE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pa:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case Sh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return Sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]*=e}return this}trim(e,t){const i=this.times,o=i.length;let a=0,c=o-1;for(;a!==o&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==o){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,o=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=i[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(o!==void 0&&CE(o))for(let u=0,f=o.length;u!==f;++u){const d=o[u];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===Sh,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const d=e[u],g=e[u+1];if(d!==g&&(u!==1||d!==e[0]))if(o)f=!0;else{const p=u*i,_=p-i,y=p+i;for(let E=0;E!==i;++E){const M=t[p+E];if(M!==t[_+E]||M!==t[y+E]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const p=u*i,_=c*i;for(let y=0;y!==i;++y)t[_+y]=t[p+y]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,f=c*i,d=0;d!==i;++d)t[f+d]=t[u+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,o=new i(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=La;class Ro extends Ti{constructor(e,t,i){super(e,t,i)}}Ro.prototype.ValueTypeName="bool";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=Pa;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Cv extends Ti{constructor(e,t,i,o){super(e,t,i,o)}}Cv.prototype.ValueTypeName="color";class Mo extends Ti{constructor(e,t,i,o){super(e,t,i,o)}}Mo.prototype.ValueTypeName="number";class NE extends Oa{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-t)/(o-t);let d=e*u;for(let g=d+u;d!==g;d+=4)Ni.slerpFlat(a,0,c,d-u,c,d,f);return a}}class To extends Ti{constructor(e,t,i,o){super(e,t,i,o)}InterpolantFactoryMethodLinear(e){return new NE(this.times,this.values,this.getValueSize(),e)}}To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends Ti{constructor(e,t,i){super(e,t,i)}}bo.prototype.ValueTypeName="string";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=Pa;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends Ti{constructor(e,t,i,o){super(e,t,i,o)}}wo.prototype.ValueTypeName="vector";class UE{constructor(e="",t=-1,i=[],o=pS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=o,this.uuid=Mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,o=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(OE(i[c]).scale(o));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,o={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Ti.toJSON(i[a]));return o}static CreateFromMorphTargetSequence(e,t,i,o){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],d=[];f.push((u+a-1)%a,u,(u+1)%a),d.push(0,1,0);const g=PE(f);f=e_(f,1,g),d=e_(d,1,g),!o&&f[0]===0&&(f.push(a),d.push(d[0])),c.push(new Mo(".morphTargetInfluences["+t[u].name+"]",f,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const o=e;i=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<i.length;o++)if(i[o].name===t)return i[o];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const o={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const d=e[u],g=d.name.match(a);if(g&&g.length>1){const p=g[1];let _=o[p];_||(o[p]=_=[]),_.push(d)}}const c=[];for(const u in o)c.push(this.CreateFromMorphTargetSequence(u,o[u],t,i));return c}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(p,_,y,E,M){if(y.length!==0){const S=[],x=[];bv(y,S,x,E),S.length!==0&&M.push(new p(_,S,x))}},o=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let p=0;p<d.length;p++){const _=d[p].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let E;for(E=0;E<_.length;E++)if(_[E].morphTargets)for(let M=0;M<_[E].morphTargets.length;M++)y[_[E].morphTargets[M]]=-1;for(const M in y){const S=[],x=[];for(let D=0;D!==_[E].morphTargets.length;++D){const P=_[E];S.push(P.time),x.push(P.morphTarget===M?1:0)}o.push(new Mo(".morphTargetInfluence["+M+"]",S,x))}f=y.length*c}else{const y=".bones["+t[p].name+"]";i(wo,y+".position",_,"pos",o),i(To,y+".quaternion",_,"rot",o),i(wo,y+".scale",_,"scl",o)}}return o.length===0?null:new this(a,f,o,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,o=e.length;i!==o;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function FE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return wo;case"color":return Cv;case"quaternion":return To;case"bool":case"boolean":return Ro;case"string":return bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function OE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=FE(s.type);if(s.times===void 0){const t=[],i=[];bv(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const sr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class kE{constructor(e,t,i){const o=this;let a=!1,c=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(g){u++,a===!1&&o.onStart!==void 0&&o.onStart(g,c,u),a=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,u),c===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,p){return d.push(g,p),this},this.removeHandler=function(g){const p=d.indexOf(g);return p!==-1&&d.splice(p,2),this},this.getHandler=function(g){for(let p=0,_=d.length;p<_;p+=2){const y=d[p],E=d[p+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const BE=new kE;class Co{constructor(e){this.manager=e!==void 0?e:BE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";const tr={};class zE extends Error{constructor(e,t){super(e),this.response=t}}class Pv extends Co{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=sr.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(tr[e]!==void 0){tr[e].push({onLoad:t,onProgress:i,onError:o});return}tr[e]=[],tr[e].push({onLoad:t,onProgress:i,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=tr[e],p=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=_?parseInt(_):0,E=y!==0;let M=0;const S=new ReadableStream({start(x){D();function D(){p.read().then(({done:P,value:R})=>{if(P)x.close();else{M+=R.byteLength;const U=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:y});for(let z=0,O=g.length;z<O;z++){const Y=g[z];Y.onProgress&&Y.onProgress(U)}x.enqueue(R),D()}},P=>{x.error(P)})}}});return new Response(S)}else throw new zE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,u));case"json":return d.json();default:if(u==="")return d.text();{const p=/charset="?([^;"\s]*)"?/i.exec(u),_=p&&p[1]?p[1].toLowerCase():void 0,y=new TextDecoder(_);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{sr.add(`file:${e}`,d);const g=tr[e];delete tr[e];for(let p=0,_=g.length;p<_;p++){const y=g[p];y.onLoad&&y.onLoad(d)}}).catch(d=>{const g=tr[e];if(g===void 0)throw this.manager.itemError(e),d;delete tr[e];for(let p=0,_=g.length;p<_;p++){const y=g[p];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ao=new WeakMap;class HE extends Co{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=sr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let p=ao.get(c);p===void 0&&(p=[],ao.set(c,p)),p.push({onLoad:t,onError:o})}return c}const u=Da("img");function f(){g(),t&&t(this);const p=ao.get(this)||[];for(let _=0;_<p.length;_++){const y=p[_];y.onLoad&&y.onLoad(this)}ao.delete(this),a.manager.itemEnd(e)}function d(p){g(),o&&o(p),sr.remove(`image:${e}`);const _=ao.get(this)||[];for(let y=0;y<_.length;y++){const E=_[y];E.onError&&E.onError(p)}ao.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){u.removeEventListener("load",f,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),sr.add(`image:${e}`,u),a.manager.itemStart(e),u.src=e,u}}class VE extends Co{constructor(e){super(e)}load(e,t,i,o){const a=new mn,c=new HE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,o),a}}class yd extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Yh=new mt,t_=new X,n_=new X;class Sd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;t_.setFromMatrixPosition(e.matrixWorld),t.position.copy(t_),n_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(n_),t.updateMatrixWorld(),Yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GE extends Sd{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=So*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lv extends yd{constructor(e,t,i=0,o=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=i,this.angle=o,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new GE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const i_=new mt,_a=new X,Kh=new X;class WE extends Sd{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),i.position.copy(_a),Kh.copy(i.position),Kh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Kh),i.updateMatrixWorld(),o.makeTranslation(-_a.x,-_a.y,-_a.z),i_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i_,i.coordinateSystem,i.reversedDepth)}}class XE extends yd{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new WE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ed extends Sv{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=g*this.view.offsetY,f=u-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jE extends Sd{constructor(){super(new Ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YE extends yd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new jE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ma{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const qh=new WeakMap;class KE extends Co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=sr.get(`image-bitmap:${e}`);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(d=>{if(qh.has(c)===!0)o&&o(qh.get(c)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(d),a.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader,u.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const f=fetch(e,u).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return sr.add(`image-bitmap:${e}`,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){o&&o(d),qh.set(f,d),sr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});sr.add(`image-bitmap:${e}`,f),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qE extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Md="\\[\\]\\.:\\/",$E=new RegExp("["+Md+"]","g"),Td="[^"+Md+"]",ZE="[^"+Md.replace("\\.","")+"]",JE=/((?:WC+[\/:])*)/.source.replace("WC",Td),QE=/(WCOD+)?/.source.replace("WCOD",ZE),eM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Td),tM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Td),nM=new RegExp("^"+JE+QE+eM+tM+"$"),iM=["material","materials","bones","map"];class rM{constructor(e,t,i){const o=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Nt{constructor(e,t,i){this.path=t,this.parsedPath=i||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,i):new Nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($E,"")}static parseTrackName(e){const t=nM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const a=i.nodeName.substring(o+1);iM.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},o=i(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)e[t++]=i[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,o=t.propertyName;let a=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[o];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?u=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=rM;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class r_{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sM extends Ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function s_(s,e,t,i){const o=oM(i);switch(t){case ov:return s*e;case cd:return s*e/o.components*o.byteLength;case ud:return s*e/o.components*o.byteLength;case lv:return s*e*2/o.components*o.byteLength;case hd:return s*e*2/o.components*o.byteLength;case av:return s*e*3/o.components*o.byteLength;case ci:return s*e*4/o.components*o.byteLength;case fd:return s*e*4/o.components*o.byteLength;case Sc:case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:case wf:return Math.max(s,16)*Math.max(e,8)/4;case Ef:case Tf:return Math.max(s,8)*Math.max(e,8)/2;case Af:case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wc:case Gf:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cv:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oM(s){switch(s){case Ii:case iv:return{byteLength:1,components:1};case Aa:case rv:case Na:return{byteLength:2,components:1};case ad:case ld:return{byteLength:2,components:4};case _s:case od:case Ei:return{byteLength:4,components:1};case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dv(){let s=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function aM(s){const e=new WeakMap;function t(u,f){const d=u.array,g=u.usage,p=d.byteLength,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,d,g),u.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=s.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function i(u,f,d){const g=f.array,p=f.updateRanges;if(s.bindBuffer(d,u),p.length===0)s.bufferSubData(d,0,g);else{p.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<p.length;y++){const E=p[_],M=p[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,p[_]=M)}p.length=_+1;for(let y=0,E=p.length;y<E;y++){const M=p[y];s.bufferSubData(d,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(s.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:o,remove:a,update:c}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
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
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,LM=`#define PI 3.141592653589793
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
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IM=`vec3 transformedNormal = objectNormal;
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
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
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
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
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
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sT=`PhysicalMaterial material;
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
#endif`,oT=`struct PhysicalMaterial {
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
}`,aT=`
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
#endif`,lT=`#if defined( RE_IndirectDiffuse )
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
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_T=`#if defined( USE_POINTS_UV )
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
#endif`,vT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ST=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ET=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`#ifdef USE_MORPHTARGETS
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
#endif`,TT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PT=`#ifdef USE_NORMALMAP
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
#endif`,LT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jT=`float getShadowMask() {
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
}`,YT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KT=`#ifdef USE_SKINNING
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
#endif`,qT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,ZT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ew=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tw=`#ifdef USE_TRANSMISSION
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
#endif`,nw=`#ifdef USE_TRANSMISSION
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lw=`uniform sampler2D t2D;
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
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`#include <common>
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
}`,pw=`#if DEPTH_PACKING == 3200
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
}`,mw=`#define DISTANCE
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
}`,gw=`#define DISTANCE
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`uniform float scale;
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
}`,yw=`uniform vec3 diffuse;
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
}`,Sw=`#include <common>
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
}`,Ew=`uniform vec3 diffuse;
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
}`,Mw=`#define LAMBERT
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
}`,Tw=`#define LAMBERT
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
}`,ww=`#define MATCAP
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
}`,Aw=`#define MATCAP
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
}`,Rw=`#define NORMAL
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
}`,bw=`#define NORMAL
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
}`,Cw=`#define PHONG
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
}`,Pw=`#define PHONG
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
}`,Lw=`#define STANDARD
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
}`,Dw=`#define STANDARD
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
}`,Iw=`#define TOON
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
}`,Nw=`#define TOON
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
}`,Uw=`uniform float size;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,Ow=`#include <common>
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
}`,kw=`uniform vec3 color;
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
}`,Bw=`uniform float rotation;
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
}`,zw=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:hM,alphatest_fragment:fM,alphatest_pars_fragment:dM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:_M,begin_vertex:vM,beginnormal_vertex:xM,bsdfs:yM,iridescence_fragment:SM,bumpmap_pars_fragment:EM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:bM,color_pars_vertex:CM,color_vertex:PM,common:LM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:IM,displacementmap_pars_vertex:NM,displacementmap_vertex:UM,emissivemap_fragment:FM,emissivemap_pars_fragment:OM,colorspace_fragment:kM,colorspace_pars_fragment:BM,envmap_fragment:zM,envmap_common_pars_fragment:HM,envmap_pars_fragment:VM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:eT,envmap_vertex:WM,fog_vertex:XM,fog_pars_vertex:jM,fog_fragment:YM,fog_pars_fragment:KM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:$M,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:JM,lights_pars_begin:QM,lights_toon_fragment:tT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:oT,lights_fragment_begin:aT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:hT,logdepthbuf_pars_vertex:fT,logdepthbuf_vertex:dT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:_T,metalnessmap_fragment:vT,metalnessmap_pars_fragment:xT,morphinstance_vertex:yT,morphcolor_vertex:ST,morphnormal_vertex:ET,morphtarget_pars_vertex:MT,morphtarget_vertex:TT,normal_fragment_begin:wT,normal_fragment_maps:AT,normal_pars_fragment:RT,normal_pars_vertex:bT,normal_vertex:CT,normalmap_pars_fragment:PT,clearcoat_normal_fragment_begin:LT,clearcoat_normal_fragment_maps:DT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:NT,opaque_fragment:UT,packing:FT,premultiplied_alpha_fragment:OT,project_vertex:kT,dithering_fragment:BT,dithering_pars_fragment:zT,roughnessmap_fragment:HT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:WT,shadowmap_vertex:XT,shadowmask_pars_fragment:jT,skinbase_vertex:YT,skinning_pars_vertex:KT,skinning_vertex:qT,skinnormal_vertex:$T,specularmap_fragment:ZT,specularmap_pars_fragment:JT,tonemapping_fragment:QT,tonemapping_pars_fragment:ew,transmission_fragment:tw,transmission_pars_fragment:nw,uv_pars_fragment:iw,uv_pars_vertex:rw,uv_vertex:sw,worldpos_vertex:ow,background_vert:aw,background_frag:lw,backgroundCube_vert:cw,backgroundCube_frag:uw,cube_vert:hw,cube_frag:fw,depth_vert:dw,depth_frag:pw,distanceRGBA_vert:mw,distanceRGBA_frag:gw,equirect_vert:_w,equirect_frag:vw,linedashed_vert:xw,linedashed_frag:yw,meshbasic_vert:Sw,meshbasic_frag:Ew,meshlambert_vert:Mw,meshlambert_frag:Tw,meshmatcap_vert:ww,meshmatcap_frag:Aw,meshnormal_vert:Rw,meshnormal_frag:bw,meshphong_vert:Cw,meshphong_frag:Pw,meshphysical_vert:Lw,meshphysical_frag:Dw,meshtoon_vert:Iw,meshtoon_frag:Nw,points_vert:Uw,points_frag:Fw,shadow_vert:Ow,shadow_frag:kw,sprite_vert:Bw,sprite_frag:zw},Pe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ci={basic:{uniforms:Dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ft(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Dn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Dn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ft(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Dn([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Dn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Dn([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Dn([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Dn([Pe.common,Pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Dn([Pe.lights,Pe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ci.physical={uniforms:Dn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const mc={r:0,b:0,g:0},cs=new Ui,Hw=new mt;function Vw(s,e,t,i,o,a,c){const u=new ft(0);let f=a===!0?0:1,d,g,p=null,_=0,y=null;function E(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?t:e).get(R)),R}function M(P){let R=!1;const U=E(P);U===null?x(u,f):U&&U.isColor&&(x(U,1),R=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(P,R){const U=E(R);U&&(U.isCubeTexture||U.mapping===Uc)?(g===void 0&&(g=new Qn(new Fa(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:Eo(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,O,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),cs.copy(R.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Hw.makeRotationFromEuler(cs)),g.material.toneMapped=wt.getTransfer(U.colorSpace)!==Ft,(p!==U||_!==U.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,p=U,_=U.version,y=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(d===void 0&&(d=new Qn(new Fc(2,2),new Gr({name:"BackgroundMaterial",uniforms:Eo(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=U,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=wt.getTransfer(U.colorSpace)!==Ft,U.matrixAutoUpdate===!0&&U.updateMatrix(),d.material.uniforms.uvTransform.value.copy(U.matrix),(p!==U||_!==U.version||y!==s.toneMapping)&&(d.material.needsUpdate=!0,p=U,_=U.version,y=s.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function x(P,R){P.getRGB(mc,yv(s)),i.buffers.color.setClear(mc.r,mc.g,mc.b,R,c)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,R=1){u.set(P),f=R,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,x(u,f)},render:M,addToRenderList:S,dispose:D}}function Gw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=_(null);let a=o,c=!1;function u(b,F,le,ne,ae){let he=!1;const se=p(ne,le,F);a!==se&&(a=se,d(a.object)),he=y(b,ne,le,ae),he&&E(b,ne,le,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,R(b,F,le,ne),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function f(){return s.createVertexArray()}function d(b){return s.bindVertexArray(b)}function g(b){return s.deleteVertexArray(b)}function p(b,F,le){const ne=le.wireframe===!0;let ae=i[b.id];ae===void 0&&(ae={},i[b.id]=ae);let he=ae[F.id];he===void 0&&(he={},ae[F.id]=he);let se=he[ne];return se===void 0&&(se=_(f()),he[ne]=se),se}function _(b){const F=[],le=[],ne=[];for(let ae=0;ae<t;ae++)F[ae]=0,le[ae]=0,ne[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:le,attributeDivisors:ne,object:b,attributes:{},index:null}}function y(b,F,le,ne){const ae=a.attributes,he=F.attributes;let se=0;const ue=le.getAttributes();for(const H in ue)if(ue[H].location>=0){const ie=ae[H];let N=he[H];if(N===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(N=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(N=b.instanceColor)),ie===void 0||ie.attribute!==N||N&&ie.data!==N.data)return!0;se++}return a.attributesNum!==se||a.index!==ne}function E(b,F,le,ne){const ae={},he=F.attributes;let se=0;const ue=le.getAttributes();for(const H in ue)if(ue[H].location>=0){let ie=he[H];ie===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const N={};N.attribute=ie,ie&&ie.data&&(N.data=ie.data),ae[H]=N,se++}a.attributes=ae,a.attributesNum=se,a.index=ne}function M(){const b=a.newAttributes;for(let F=0,le=b.length;F<le;F++)b[F]=0}function S(b){x(b,0)}function x(b,F){const le=a.newAttributes,ne=a.enabledAttributes,ae=a.attributeDivisors;le[b]=1,ne[b]===0&&(s.enableVertexAttribArray(b),ne[b]=1),ae[b]!==F&&(s.vertexAttribDivisor(b,F),ae[b]=F)}function D(){const b=a.newAttributes,F=a.enabledAttributes;for(let le=0,ne=F.length;le<ne;le++)F[le]!==b[le]&&(s.disableVertexAttribArray(le),F[le]=0)}function P(b,F,le,ne,ae,he,se){se===!0?s.vertexAttribIPointer(b,F,le,ae,he):s.vertexAttribPointer(b,F,le,ne,ae,he)}function R(b,F,le,ne){M();const ae=ne.attributes,he=le.getAttributes(),se=F.defaultAttributeValues;for(const ue in he){const H=he[ue];if(H.location>=0){let oe=ae[ue];if(oe===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){const ie=oe.normalized,N=oe.itemSize,te=e.get(oe);if(te===void 0)continue;const ze=te.buffer,Be=te.type,Z=te.bytesPerElement,pe=Be===s.INT||Be===s.UNSIGNED_INT||oe.gpuType===od;if(oe.isInterleavedBufferAttribute){const de=oe.data,Re=de.stride,Le=oe.offset;if(de.isInstancedInterleavedBuffer){for(let Je=0;Je<H.locationSize;Je++)x(H.location+Je,de.meshPerAttribute);b.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Je=0;Je<H.locationSize;Je++)S(H.location+Je);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let Je=0;Je<H.locationSize;Je++)P(H.location+Je,N/H.locationSize,Be,ie,Re*Z,(Le+N/H.locationSize*Je)*Z,pe)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)x(H.location+de,oe.meshPerAttribute);b.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<H.locationSize;de++)S(H.location+de);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let de=0;de<H.locationSize;de++)P(H.location+de,N/H.locationSize,Be,ie,N*Z,N/H.locationSize*de*Z,pe)}}else if(se!==void 0){const ie=se[ue];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(H.location,ie);break;case 3:s.vertexAttrib3fv(H.location,ie);break;case 4:s.vertexAttrib4fv(H.location,ie);break;default:s.vertexAttrib1fv(H.location,ie)}}}}D()}function U(){Y();for(const b in i){const F=i[b];for(const le in F){const ne=F[le];for(const ae in ne)g(ne[ae].object),delete ne[ae];delete F[le]}delete i[b]}}function z(b){if(i[b.id]===void 0)return;const F=i[b.id];for(const le in F){const ne=F[le];for(const ae in ne)g(ne[ae].object),delete ne[ae];delete F[le]}delete i[b.id]}function O(b){for(const F in i){const le=i[F];if(le[b.id]===void 0)continue;const ne=le[b.id];for(const ae in ne)g(ne[ae].object),delete ne[ae];delete le[b.id]}}function Y(){C(),c=!0,a!==o&&(a=o,d(a.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:C,dispose:U,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:S,disableUnusedAttributes:D}}function Ww(s,e,t){let i;function o(d){i=d}function a(d,g){s.drawArrays(i,d,g),t.update(g,i,1)}function c(d,g,p){p!==0&&(s.drawArraysInstanced(i,d,g,p),t.update(g,i,p))}function u(d,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,g,0,p);let y=0;for(let E=0;E<p;E++)y+=g[E];t.update(y,i,1)}function f(d,g,p,_){if(p===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)c(d[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(i,d,0,g,0,_,0,p);let E=0;for(let M=0;M<p;M++)E+=g[M]*_[M];t.update(E,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Xw(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==ci&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const Y=O===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ii&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ei&&!Y)}function f(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=f(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const p=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:U,maxSamples:z}}function jw(s){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Fr,u=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const y=p.length!==0||_||i!==0||o;return o=_,i=p.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,_){t=g(p,_,0)},this.setState=function(p,_,y){const E=p.clippingPlanes,M=p.clipIntersection,S=p.clipShadows,x=s.get(p);if(!o||E===null||E.length===0||a&&!S)a?g(null):d();else{const D=a?0:i,P=D*4;let R=x.clippingState||null;f.value=R,R=g(E,_,P,y);for(let U=0;U!==P;++U)R[U]=t[U];x.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(p,_,y,E){const M=p!==null?p.length:0;let S=null;if(M!==0){if(S=f.value,E!==!0||S===null){const x=y+M*4,D=_.matrixWorldInverse;u.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let P=0,R=y;P!==M;++P,R+=4)c.copy(p[P]).applyMatrix4(D,u),c.normal.toArray(S,R),S[R+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function Yw(s){let e=new WeakMap;function t(c,u){return u===yf?c.mapping=vo:u===Sf&&(c.mapping=xo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===yf||u===Sf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new fE(f.height);return d.fromEquirectangularTexture(s,c),e.set(c,d),c.addEventListener("dispose",o),t(d.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const uo=4,o_=[.125,.215,.35,.446,.526,.582],ps=20,$h=new Ed,a_=new ft;let Zh=null,Jh=0,Qh=0,ef=!1;const fs=(1+Math.sqrt(5))/2,lo=1/fs,l_=[new X(-fs,lo,0),new X(fs,lo,0),new X(-lo,0,fs),new X(lo,0,fs),new X(0,fs,-lo),new X(0,fs,lo),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],Kw=new X;class c_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:u=Kw}=a;Zh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,o,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zh,Jh,Qh),this._renderer.xr.enabled=ef,e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vo||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Na,format:ci,colorSpace:Fn,depthBuffer:!1},o=u_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u_(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qw(a)),this._blurMaterial=$w(a,e,t)}return o}_compileMaterial(e){const t=new Qn(this._lodPlanes[0],e);this._renderer.compile(t,$h)}_sceneToCubeUV(e,t,i,o,a){const f=new In(90,1,t,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,y=p.toneMapping;p.getClearColor(a_),p.toneMapping=Vr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(o),p.clearDepth(),p.setRenderTarget(null));const M=new ms({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),S=new Qn(new Fa,M);let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(a_),x=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(f.up.set(0,d[P],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+g[P],a.y,a.z)):R===1?(f.up.set(0,0,d[P]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+g[P],a.z)):(f.up.set(0,d[P],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+g[P]));const U=this._cubeSize;gc(o,R*U,P>2?U:0,U,U),p.setRenderTarget(o),x&&p.render(S,f),p.render(e,f)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=y,p.autoClear=_,e.background=D}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===vo||e.mapping===xo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=f_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new Qn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;gc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,$h)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=l_[(o-a-1)%l_.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,p=new Qn(this._lodPlanes[o],d),_=d.uniforms,y=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ps-1),M=a/E,S=isFinite(a)?1+Math.floor(g*M):ps;S>ps&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ps}`);const x=[];let D=0;for(let O=0;O<ps;++O){const Y=O/M,C=Math.exp(-Y*Y/2);x.push(C),O===0?D+=C:O<S&&(D+=2*C)}for(let O=0;O<x.length;O++)x[O]=x[O]/D;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:P}=this;_.dTheta.value=E,_.mipInt.value=P-i;const R=this._sizeLods[o],U=3*R*(o>P-uo?o-P+uo:0),z=4*(this._cubeSize-R);gc(t,U,z,3*R,2*R),f.setRenderTarget(t),f.render(p,$h)}}function qw(s){const e=[],t=[],i=[];let o=s;const a=s-uo+1+o_.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let f=1/u;c>s-uo?f=o_[c-s+uo-1]:c===0&&(f=0),i.push(f);const d=1/(u-2),g=-d,p=1+d,_=[g,g,p,g,p,p,g,g,p,p,g,p],y=6,E=6,M=3,S=2,x=1,D=new Float32Array(M*E*y),P=new Float32Array(S*E*y),R=new Float32Array(x*E*y);for(let z=0;z<y;z++){const O=z%3*2/3-1,Y=z>2?0:-1,C=[O,Y,0,O+2/3,Y,0,O+2/3,Y+1,0,O,Y,0,O+2/3,Y+1,0,O,Y+1,0];D.set(C,M*E*z),P.set(_,S*E*z);const b=[z,z,z,z,z,z];R.set(b,x*E*z)}const U=new ki;U.setAttribute("position",new Un(D,M)),U.setAttribute("uv",new Un(P,S)),U.setAttribute("faceIndex",new Un(R,x)),e.push(U),o>uo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function u_(s,e,t){const i=new vs(s,e,t);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gc(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function $w(s,e,t){const i=new Float32Array(ps),o=new X(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wd(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function h_(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wd(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function f_(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function wd(){return`

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
	`}function Zw(s){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===yf||f===Sf,g=f===vo||f===xo;if(d||g){let p=e.get(u);const _=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new c_(s)),p=d?t.fromEquirectangular(u,p):t.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return d&&y&&y.height>0||g&&y&&o(y)?(t===null&&(t=new c_(s)),p=d?t.fromEquirectangular(u):t.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",a),p.texture):null}}}return u}function o(u){let f=0;const d=6;for(let g=0;g<d;g++)u[g]!==void 0&&f++;return f===d}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Jw(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&po("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Qw(s,e,t,i){const o={},a=new WeakMap;function c(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete o[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(p,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,t.memory.geometries++),_}function f(p){const _=p.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function d(p){const _=[],y=p.index,E=p.attributes.position;let M=0;if(y!==null){const D=y.array;M=y.version;for(let P=0,R=D.length;P<R;P+=3){const U=D[P+0],z=D[P+1],O=D[P+2];_.push(U,z,z,O,O,U)}}else if(E!==void 0){const D=E.array;M=E.version;for(let P=0,R=D.length/3-1;P<R;P+=3){const U=P+0,z=P+1,O=P+2;_.push(U,z,z,O,O,U)}}else return;const S=new(pv(_)?xv:vv)(_,1);S.version=M;const x=a.get(p);x&&e.remove(x),a.set(p,S)}function g(p){const _=a.get(p);if(_){const y=p.index;y!==null&&_.version<y.version&&d(p)}else d(p);return a.get(p)}return{get:u,update:f,getWireframeAttribute:g}}function eA(s,e,t){let i;function o(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function f(_,y){s.drawElements(i,y,a,_*c),t.update(y,i,1)}function d(_,y,E){E!==0&&(s.drawElementsInstanced(i,y,a,_*c,E),t.update(y,i,E))}function g(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,_,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];t.update(S,i,1)}function p(_,y,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)d(_[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,_,0,M,0,E);let x=0;for(let D=0;D<E;D++)x+=y[D]*M[D];t.update(x,i,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=p}function tA(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(a/3);break;case s.LINES:t.lines+=u*(a/2);break;case s.LINE_STRIP:t.lines+=u*(a-1);break;case s.LINE_LOOP:t.lines+=u*a;break;case s.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function nA(s,e,t){const i=new WeakMap,o=new bt;function a(c,u,f){const d=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let _=i.get(u);if(_===void 0||_.count!==p){let b=function(){Y.dispose(),i.delete(u),u.removeEventListener("dispose",b)};var y=b;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let R=0;E===!0&&(R=1),M===!0&&(R=2),S===!0&&(R=3);let U=u.attributes.position.count*R,z=1;U>e.maxTextureSize&&(z=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*z*4*p),Y=new mv(O,U,z,p);Y.type=Ei,Y.needsUpdate=!0;const C=R*4;for(let F=0;F<p;F++){const le=x[F],ne=D[F],ae=P[F],he=U*z*4*F;for(let se=0;se<le.count;se++){const ue=se*C;E===!0&&(o.fromBufferAttribute(le,se),O[he+ue+0]=o.x,O[he+ue+1]=o.y,O[he+ue+2]=o.z,O[he+ue+3]=0),M===!0&&(o.fromBufferAttribute(ne,se),O[he+ue+4]=o.x,O[he+ue+5]=o.y,O[he+ue+6]=o.z,O[he+ue+7]=0),S===!0&&(o.fromBufferAttribute(ae,se),O[he+ue+8]=o.x,O[he+ue+9]=o.y,O[he+ue+10]=o.z,O[he+ue+11]=ae.itemSize===4?o.w:1)}}_={count:p,texture:Y,size:new ct(U,z)},i.set(u,_),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const M=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:a}}function iA(s,e,t,i){let o=new WeakMap;function a(f){const d=i.render.frame,g=f.geometry,p=e.get(f,g);if(o.get(p)!==d&&(e.update(p),o.set(p,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==d&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return p}function c(){o=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const Iv=new mn,d_=new Rv(1,1),Nv=new mv,Uv=new qS,Fv=new Ev,p_=[],m_=[],g_=new Float32Array(16),__=new Float32Array(9),v_=new Float32Array(4);function Po(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=p_[o];if(a===void 0&&(a=new Float32Array(o),p_[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(a,u)}return a}function ln(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function cn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Oc(s,e){let t=m_[e];t===void 0&&(t=new Int32Array(e),m_[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function rA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2fv(this.addr,e),cn(t,e)}}function oA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;s.uniform3fv(this.addr,e),cn(t,e)}}function aA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4fv(this.addr,e),cn(t,e)}}function lA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;v_.set(i),s.uniformMatrix2fv(this.addr,!1,v_),cn(t,i)}}function cA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;__.set(i),s.uniformMatrix3fv(this.addr,!1,__),cn(t,i)}}function uA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;g_.set(i),s.uniformMatrix4fv(this.addr,!1,g_),cn(t,i)}}function hA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2iv(this.addr,e),cn(t,e)}}function dA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3iv(this.addr,e),cn(t,e)}}function pA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4iv(this.addr,e),cn(t,e)}}function mA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function gA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2uiv(this.addr,e),cn(t,e)}}function _A(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3uiv(this.addr,e),cn(t,e)}}function vA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4uiv(this.addr,e),cn(t,e)}}function xA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(d_.compareFunction=fv,a=d_):a=Iv,t.setTexture2D(e||a,o)}function yA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Uv,o)}function SA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Fv,o)}function EA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Nv,o)}function MA(s){switch(s){case 5126:return rA;case 35664:return sA;case 35665:return oA;case 35666:return aA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return hA;case 35667:case 35671:return fA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return EA}}function TA(s,e){s.uniform1fv(this.addr,e)}function wA(s,e){const t=Po(e,this.size,2);s.uniform2fv(this.addr,t)}function AA(s,e){const t=Po(e,this.size,3);s.uniform3fv(this.addr,t)}function RA(s,e){const t=Po(e,this.size,4);s.uniform4fv(this.addr,t)}function bA(s,e){const t=Po(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function CA(s,e){const t=Po(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function PA(s,e){const t=Po(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function LA(s,e){s.uniform1iv(this.addr,e)}function DA(s,e){s.uniform2iv(this.addr,e)}function IA(s,e){s.uniform3iv(this.addr,e)}function NA(s,e){s.uniform4iv(this.addr,e)}function UA(s,e){s.uniform1uiv(this.addr,e)}function FA(s,e){s.uniform2uiv(this.addr,e)}function OA(s,e){s.uniform3uiv(this.addr,e)}function kA(s,e){s.uniform4uiv(this.addr,e)}function BA(s,e,t){const i=this.cache,o=e.length,a=Oc(t,o);ln(i,a)||(s.uniform1iv(this.addr,a),cn(i,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Iv,a[c])}function zA(s,e,t){const i=this.cache,o=e.length,a=Oc(t,o);ln(i,a)||(s.uniform1iv(this.addr,a),cn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Uv,a[c])}function HA(s,e,t){const i=this.cache,o=e.length,a=Oc(t,o);ln(i,a)||(s.uniform1iv(this.addr,a),cn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Fv,a[c])}function VA(s,e,t){const i=this.cache,o=e.length,a=Oc(t,o);ln(i,a)||(s.uniform1iv(this.addr,a),cn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Nv,a[c])}function GA(s){switch(s){case 5126:return TA;case 35664:return wA;case 35665:return AA;case 35666:return RA;case 35674:return bA;case 35675:return CA;case 35676:return PA;case 5124:case 35670:return LA;case 35667:case 35671:return DA;case 35668:case 35672:return IA;case 35669:case 35673:return NA;case 5125:return UA;case 36294:return FA;case 36295:return OA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return VA}}class WA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MA(t.type)}}class XA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GA(t.type)}}class jA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function x_(s,e){s.seq.push(e),s.map[e.id]=e}function YA(s,e,t){const i=s.name,o=i.length;for(tf.lastIndex=0;;){const a=tf.exec(i),c=tf.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===o){x_(t,d===void 0?new WA(u,s,e):new XA(u,s,e));break}else{let p=t.map[u];p===void 0&&(p=new jA(u),x_(t,p)),t=p}}}class Ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);YA(a,c,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function y_(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const KA=37297;let qA=0;function $A(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const S_=new dt;function ZA(s){wt._getMatrix(S_,wt.workingColorSpace,s);const e=`mat3( ${S_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case Cc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function E_(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+$A(s.getShaderSource(e),u)}else return a}function JA(s,e){const t=ZA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function QA(s,e){let t;switch(e){case oS:t="Linear";break;case aS:t="Reinhard";break;case lS:t="Cineon";break;case cS:t="ACESFilmic";break;case hS:t="AgX";break;case fS:t="Neutral";break;case uS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _c=new X;function e1(){wt.getLuminanceCoefficients(_c);const s=_c.x.toFixed(4),e=_c.y.toFixed(4),t=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function n1(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function i1(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),c=a.name;let u=1;a.type===s.FLOAT_MAT2&&(u=2),a.type===s.FLOAT_MAT3&&(u=3),a.type===s.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function ya(s){return s!==""}function M_(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(s){return s.replace(r1,o1)}const s1=new Map;function o1(s,e){let t=pt[e];if(t===void 0){const i=s1.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jf(t)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(s){return s.replace(a1,l1)}function l1(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function A_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Q_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function u1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vo:case xo:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xo:e="ENVMAP_MODE_REFRACTION";break}return e}function f1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ev:e="ENVMAP_BLENDING_MULTIPLY";break;case rS:e="ENVMAP_BLENDING_MIX";break;case sS:e="ENVMAP_BLENDING_ADD";break}return e}function d1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function p1(s,e,t,i){const o=s.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=c1(t),d=u1(t),g=h1(t),p=f1(t),_=d1(t),y=t1(t),E=n1(a),M=o.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ya).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ya).join(`
`),x.length>0&&(x+=`
`)):(S=[A_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),x=[A_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vr?"#define TONE_MAPPING":"",t.toneMapping!==Vr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Vr?QA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,JA("linearToOutputTexel",t.outputColorSpace),e1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),c=Jf(c),c=M_(c,t),c=T_(c,t),u=Jf(u),u=M_(u,t),u=T_(u,t),c=w_(c),u=w_(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=D+S+c,R=D+x+u,U=y_(o,o.VERTEX_SHADER,P),z=y_(o,o.FRAGMENT_SHADER,R);o.attachShader(M,U),o.attachShader(M,z),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function O(F){if(s.debug.checkShaderErrors){const le=o.getProgramInfoLog(M)||"",ne=o.getShaderInfoLog(U)||"",ae=o.getShaderInfoLog(z)||"",he=le.trim(),se=ne.trim(),ue=ae.trim();let H=!0,oe=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,M,U,z);else{const ie=E_(o,U,"vertex"),N=E_(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+he+`
`+ie+`
`+N)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(se===""||ue==="")&&(oe=!1);oe&&(F.diagnostics={runnable:H,programLog:he,vertexShader:{log:se,prefix:S},fragmentShader:{log:ue,prefix:x}})}o.deleteShader(U),o.deleteShader(z),Y=new Ac(o,M),C=i1(o,M)}let Y;this.getUniforms=function(){return Y===void 0&&O(this),Y};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(M,KA)),b},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qA++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=z,this}let m1=0;class g1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _1(e),t.set(e,i)),i}}class _1{constructor(e){this.id=m1++,this.code=e,this.usedTimes=0}}function v1(s,e,t,i,o,a,c){const u=new gv,f=new g1,d=new Set,g=[],p=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,b,F,le,ne){const ae=le.fog,he=ne.geometry,se=C.isMeshStandardMaterial?le.environment:null,ue=(C.isMeshStandardMaterial?t:e).get(C.envMap||se),H=ue&&ue.mapping===Uc?ue.image.height:null,oe=E[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const ie=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=ie!==void 0?ie.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let ze,Be,Z,pe;if(oe){const Mt=Ci[oe];ze=Mt.vertexShader,Be=Mt.fragmentShader}else ze=C.vertexShader,Be=C.fragmentShader,f.update(C),Z=f.getVertexShaderID(C),pe=f.getFragmentShaderID(C);const de=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Le=ne.isInstancedMesh===!0,Je=ne.isBatchedMesh===!0,Ht=!!C.map,St=!!C.matcap,k=!!ue,Ct=!!C.aoMap,Qe=!!C.lightMap,Et=!!C.bumpMap,$e=!!C.normalMap,kt=!!C.displacementMap,Oe=!!C.emissiveMap,ut=!!C.metalnessMap,Gt=!!C.roughnessMap,Wt=C.anisotropy>0,L=C.clearcoat>0,w=C.dispersion>0,q=C.iridescence>0,ce=C.sheen>0,ve=C.transmission>0,re=Wt&&!!C.anisotropyMap,Ke=L&&!!C.clearcoatMap,we=L&&!!C.clearcoatNormalMap,He=L&&!!C.clearcoatRoughnessMap,qe=q&&!!C.iridescenceMap,Me=q&&!!C.iridescenceThicknessMap,De=ce&&!!C.sheenColorMap,rt=ce&&!!C.sheenRoughnessMap,je=!!C.specularMap,be=!!C.specularColorMap,ht=!!C.specularIntensityMap,V=ve&&!!C.transmissionMap,Se=ve&&!!C.thicknessMap,Ae=!!C.gradientMap,Ne=!!C.alphaMap,ye=C.alphaTest>0,fe=!!C.alphaHash,We=!!C.extensions;let lt=Vr;C.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Lt={shaderID:oe,shaderType:C.type,shaderName:C.name,vertexShader:ze,fragmentShader:Be,defines:C.defines,customVertexShaderID:Z,customFragmentShaderID:pe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Je,batchingColor:Je&&ne._colorsTexture!==null,instancing:Le,instancingColor:Le&&ne.instanceColor!==null,instancingMorph:Le&&ne.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Fn,alphaToCoverage:!!C.alphaToCoverage,map:Ht,matcap:St,envMap:k,envMapMode:k&&ue.mapping,envMapCubeUVHeight:H,aoMap:Ct,lightMap:Qe,bumpMap:Et,normalMap:$e,displacementMap:_&&kt,emissiveMap:Oe,normalMapObjectSpace:$e&&C.normalMapType===vS,normalMapTangentSpace:$e&&C.normalMapType===hv,metalnessMap:ut,roughnessMap:Gt,anisotropy:Wt,anisotropyMap:re,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:we,clearcoatRoughnessMap:He,dispersion:w,iridescence:q,iridescenceMap:qe,iridescenceThicknessMap:Me,sheen:ce,sheenColorMap:De,sheenRoughnessMap:rt,specularMap:je,specularColorMap:be,specularIntensityMap:ht,transmission:ve,transmissionMap:V,thicknessMap:Se,gradientMap:Ae,opaque:C.transparent===!1&&C.blending===fo&&C.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ye,alphaHash:fe,combine:C.combine,mapUv:Ht&&M(C.map.channel),aoMapUv:Ct&&M(C.aoMap.channel),lightMapUv:Qe&&M(C.lightMap.channel),bumpMapUv:Et&&M(C.bumpMap.channel),normalMapUv:$e&&M(C.normalMap.channel),displacementMapUv:kt&&M(C.displacementMap.channel),emissiveMapUv:Oe&&M(C.emissiveMap.channel),metalnessMapUv:ut&&M(C.metalnessMap.channel),roughnessMapUv:Gt&&M(C.roughnessMap.channel),anisotropyMapUv:re&&M(C.anisotropyMap.channel),clearcoatMapUv:Ke&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:we&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:rt&&M(C.sheenRoughnessMap.channel),specularMapUv:je&&M(C.specularMap.channel),specularColorMapUv:be&&M(C.specularColorMap.channel),specularIntensityMapUv:ht&&M(C.specularIntensityMap.channel),transmissionMapUv:V&&M(C.transmissionMap.channel),thicknessMapUv:Se&&M(C.thicknessMap.channel),alphaMapUv:Ne&&M(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&($e||Wt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!he.attributes.uv&&(Ht||Ne),fog:!!ae,useFog:C.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Re,skinning:ne.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Ht&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===Ft,decodeVideoTextureEmissive:Oe&&C.emissiveMap.isVideoTexture===!0&&wt.getTransfer(C.emissiveMap.colorSpace)===Ft,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Pi,flipSided:C.side===Wn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:We&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&C.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Lt.vertexUv1s=d.has(1),Lt.vertexUv2s=d.has(2),Lt.vertexUv3s=d.has(3),d.clear(),Lt}function x(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)b.push(F),b.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(D(b,C),P(b,C),b.push(s.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function D(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function P(C,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),b.gradientMap&&u.enable(22),C.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reversedDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),C.push(u.mask)}function R(C){const b=E[C.type];let F;if(b){const le=Ci[b];F=lE.clone(le.uniforms)}else F=C.uniforms;return F}function U(C,b){let F;for(let le=0,ne=g.length;le<ne;le++){const ae=g[le];if(ae.cacheKey===b){F=ae,++F.usedTimes;break}}return F===void 0&&(F=new p1(s,b,C,a),g.push(F)),F}function z(C){if(--C.usedTimes===0){const b=g.indexOf(C);g[b]=g[g.length-1],g.pop(),C.destroy()}}function O(C){f.remove(C)}function Y(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:U,releaseProgram:z,releaseShaderCache:O,programs:g,dispose:Y}}function x1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function i(c){s.delete(c)}function o(c,u,f){s.get(c)[u]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function y1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function R_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function b_(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(p,_,y,E,M,S){let x=s[e];return x===void 0?(x={id:p.id,object:p,geometry:_,material:y,groupOrder:E,renderOrder:p.renderOrder,z:M,group:S},s[e]=x):(x.id=p.id,x.object=p,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=p.renderOrder,x.z=M,x.group=S),e++,x}function u(p,_,y,E,M,S){const x=c(p,_,y,E,M,S);y.transmission>0?i.push(x):y.transparent===!0?o.push(x):t.push(x)}function f(p,_,y,E,M,S){const x=c(p,_,y,E,M,S);y.transmission>0?i.unshift(x):y.transparent===!0?o.unshift(x):t.unshift(x)}function d(p,_){t.length>1&&t.sort(p||y1),i.length>1&&i.sort(_||R_),o.length>1&&o.sort(_||R_)}function g(){for(let p=e,_=s.length;p<_;p++){const y=s[p];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:f,finish:g,sort:d}}function S1(){let s=new WeakMap;function e(i,o){const a=s.get(i);let c;return a===void 0?(c=new b_,s.set(i,[c])):o>=a.length?(c=new b_,a.push(c)):c=a[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function E1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ft};break;case"SpotLight":t={position:new X,direction:new X,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function M1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let T1=0;function w1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function A1(s){const e=new E1,t=M1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new X);const o=new X,a=new mt,c=new mt;function u(d){let g=0,p=0,_=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,D=0,P=0,R=0,U=0,z=0,O=0;d.sort(w1);for(let C=0,b=d.length;C<b;C++){const F=d[C],le=F.color,ne=F.intensity,ae=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=le.r*ne,p+=le.g*ne,_+=le.b*ne;else if(F.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(F.sh.coefficients[se],ne);O++}else if(F.isDirectionalLight){const se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ue=F.shadow,H=t.get(F);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,i.directionalShadow[y]=H,i.directionalShadowMap[y]=he,i.directionalShadowMatrix[y]=F.shadow.matrix,D++}i.directional[y]=se,y++}else if(F.isSpotLight){const se=e.get(F);se.position.setFromMatrixPosition(F.matrixWorld),se.color.copy(le).multiplyScalar(ne),se.distance=ae,se.coneCos=Math.cos(F.angle),se.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),se.decay=F.decay,i.spot[M]=se;const ue=F.shadow;if(F.map&&(i.spotLightMap[U]=F.map,U++,ue.updateMatrices(F),F.castShadow&&z++),i.spotLightMatrix[M]=ue.matrix,F.castShadow){const H=t.get(F);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=he,R++}M++}else if(F.isRectAreaLight){const se=e.get(F);se.color.copy(le).multiplyScalar(ne),se.halfWidth.set(F.width*.5,0,0),se.halfHeight.set(0,F.height*.5,0),i.rectArea[S]=se,S++}else if(F.isPointLight){const se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),se.distance=F.distance,se.decay=F.decay,F.castShadow){const ue=F.shadow,H=t.get(F);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,H.shadowCameraNear=ue.camera.near,H.shadowCameraFar=ue.camera.far,i.pointShadow[E]=H,i.pointShadowMap[E]=he,i.pointShadowMatrix[E]=F.shadow.matrix,P++}i.point[E]=se,E++}else if(F.isHemisphereLight){const se=e.get(F);se.skyColor.copy(F.color).multiplyScalar(ne),se.groundColor.copy(F.groundColor).multiplyScalar(ne),i.hemi[x]=se,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=p,i.ambient[2]=_;const Y=i.hash;(Y.directionalLength!==y||Y.pointLength!==E||Y.spotLength!==M||Y.rectAreaLength!==S||Y.hemiLength!==x||Y.numDirectionalShadows!==D||Y.numPointShadows!==P||Y.numSpotShadows!==R||Y.numSpotMaps!==U||Y.numLightProbes!==O)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=x,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=R+U-z,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=O,Y.directionalLength=y,Y.pointLength=E,Y.spotLength=M,Y.rectAreaLength=S,Y.hemiLength=x,Y.numDirectionalShadows=D,Y.numPointShadows=P,Y.numSpotShadows=R,Y.numSpotMaps=U,Y.numLightProbes=O,i.version=T1++)}function f(d,g){let p=0,_=0,y=0,E=0,M=0;const S=g.matrixWorldInverse;for(let x=0,D=d.length;x<D;x++){const P=d[x];if(P.isDirectionalLight){const R=i.directional[p];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),p++}else if(P.isSpotLight){const R=i.spot[y];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),y++}else if(P.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),c.identity(),a.copy(P.matrixWorld),a.premultiply(S),c.extractRotation(a),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),_++}else if(P.isHemisphereLight){const R=i.hemi[M];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(S),M++}}}return{setup:u,setupView:f,state:i}}function C_(s){const e=new A1(s),t=[],i=[];function o(g){d.camera=g,t.length=0,i.length=0}function a(g){t.push(g)}function c(g){i.push(g)}function u(){e.setup(t)}function f(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function R1(s){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new C_(s),e.set(o,[u])):a>=c.length?(u=new C_(s),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C1=`uniform sampler2D shadow_pass;
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
}`;function P1(s,e,t){let i=new _d;const o=new ct,a=new ct,c=new bt,u=new RE({depthPacking:_S}),f=new bE,d={},g=t.maxTextureSize,p={[lr]:Wn,[Wn]:lr,[Pi]:Pi},_=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:b1,fragmentShader:C1}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new ki;E.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qn(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let x=this.type;this.render=function(z,O,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const C=s.getRenderTarget(),b=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Hr),le.buffers.depth.getReversed()?le.buffers.color.setClear(0,0,0,0):le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ne=x!==nr&&this.type===nr,ae=x===nr&&this.type!==nr;for(let he=0,se=z.length;he<se;he++){const ue=z[he],H=ue.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const oe=H.getFrameExtents();if(o.multiply(oe),a.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(a.x=Math.floor(g/oe.x),o.x=a.x*oe.x,H.mapSize.x=a.x),o.y>g&&(a.y=Math.floor(g/oe.y),o.y=a.y*oe.y,H.mapSize.y=a.y)),H.map===null||ne===!0||ae===!0){const N=this.type!==nr?{minFilter:Nn,magFilter:Nn}:{};H.map!==null&&H.map.dispose(),H.map=new vs(o.x,o.y,N),H.map.texture.name=ue.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ie=H.getViewportCount();for(let N=0;N<ie;N++){const te=H.getViewport(N);c.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),le.viewport(c),H.updateMatrices(ue,N),i=H.getFrustum(),R(O,Y,H.camera,ue,this.type)}H.isPointLightShadow!==!0&&this.type===nr&&D(H,Y),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(C,b,F)};function D(z,O){const Y=e.update(M);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new vs(o.x,o.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(O,null,Y,_,M,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(O,null,Y,y,M,null)}function P(z,O,Y,C){let b=null;const F=Y.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)b=F;else if(b=Y.isPointLight===!0?f:u,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const le=b.uuid,ne=O.uuid;let ae=d[le];ae===void 0&&(ae={},d[le]=ae);let he=ae[ne];he===void 0&&(he=b.clone(),ae[ne]=he,O.addEventListener("dispose",U)),b=he}if(b.visible=O.visible,b.wireframe=O.wireframe,C===nr?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:p[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,Y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const le=s.properties.get(b);le.light=Y}return b}function R(z,O,Y,C,b){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&b===nr)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,z.matrixWorld);const ne=e.update(z),ae=z.material;if(Array.isArray(ae)){const he=ne.groups;for(let se=0,ue=he.length;se<ue;se++){const H=he[se],oe=ae[H.materialIndex];if(oe&&oe.visible){const ie=P(z,oe,C,b);z.onBeforeShadow(s,z,O,Y,ne,ie,H),s.renderBufferDirect(Y,null,ne,ie,z,H),z.onAfterShadow(s,z,O,Y,ne,ie,H)}}}else if(ae.visible){const he=P(z,ae,C,b);z.onBeforeShadow(s,z,O,Y,ne,he,null),s.renderBufferDirect(Y,null,ne,he,z,null),z.onAfterShadow(s,z,O,Y,ne,he,null)}}const le=z.children;for(let ne=0,ae=le.length;ne<ae;ne++)R(le[ne],O,Y,C,b)}function U(z){z.target.removeEventListener("dispose",U);for(const Y in d){const C=d[Y],b=z.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const L1={[df]:pf,[mf]:vf,[gf]:xf,[_o]:_f,[pf]:df,[vf]:mf,[xf]:gf,[_f]:_o};function D1(s,e){function t(){let V=!1;const Se=new bt;let Ae=null;const Ne=new bt(0,0,0,0);return{setMask:function(ye){Ae!==ye&&!V&&(s.colorMask(ye,ye,ye,ye),Ae=ye)},setLocked:function(ye){V=ye},setClear:function(ye,fe,We,lt,Lt){Lt===!0&&(ye*=lt,fe*=lt,We*=lt),Se.set(ye,fe,We,lt),Ne.equals(Se)===!1&&(s.clearColor(ye,fe,We,lt),Ne.copy(Se))},reset:function(){V=!1,Ae=null,Ne.set(-1,0,0,0)}}}function i(){let V=!1,Se=!1,Ae=null,Ne=null,ye=null;return{setReversed:function(fe){if(Se!==fe){const We=e.get("EXT_clip_control");fe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Se=fe;const lt=ye;ye=null,this.setClear(lt)}},getReversed:function(){return Se},setTest:function(fe){fe?de(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(fe){Ae!==fe&&!V&&(s.depthMask(fe),Ae=fe)},setFunc:function(fe){if(Se&&(fe=L1[fe]),Ne!==fe){switch(fe){case df:s.depthFunc(s.NEVER);break;case pf:s.depthFunc(s.ALWAYS);break;case mf:s.depthFunc(s.LESS);break;case _o:s.depthFunc(s.LEQUAL);break;case gf:s.depthFunc(s.EQUAL);break;case _f:s.depthFunc(s.GEQUAL);break;case vf:s.depthFunc(s.GREATER);break;case xf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=fe}},setLocked:function(fe){V=fe},setClear:function(fe){ye!==fe&&(Se&&(fe=1-fe),s.clearDepth(fe),ye=fe)},reset:function(){V=!1,Ae=null,Ne=null,ye=null,Se=!1}}}function o(){let V=!1,Se=null,Ae=null,Ne=null,ye=null,fe=null,We=null,lt=null,Lt=null;return{setTest:function(Mt){V||(Mt?de(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(Mt){Se!==Mt&&!V&&(s.stencilMask(Mt),Se=Mt)},setFunc:function(Mt,ei,vn){(Ae!==Mt||Ne!==ei||ye!==vn)&&(s.stencilFunc(Mt,ei,vn),Ae=Mt,Ne=ei,ye=vn)},setOp:function(Mt,ei,vn){(fe!==Mt||We!==ei||lt!==vn)&&(s.stencilOp(Mt,ei,vn),fe=Mt,We=ei,lt=vn)},setLocked:function(Mt){V=Mt},setClear:function(Mt){Lt!==Mt&&(s.clearStencil(Mt),Lt=Mt)},reset:function(){V=!1,Se=null,Ae=null,Ne=null,ye=null,fe=null,We=null,lt=null,Lt=null}}}const a=new t,c=new i,u=new o,f=new WeakMap,d=new WeakMap;let g={},p={},_=new WeakMap,y=[],E=null,M=!1,S=null,x=null,D=null,P=null,R=null,U=null,z=null,O=new ft(0,0,0),Y=0,C=!1,b=null,F=null,le=null,ne=null,ae=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ue=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(H)[1]),se=ue>=1):H.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),se=ue>=2);let oe=null,ie={};const N=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),ze=new bt().fromArray(N),Be=new bt().fromArray(te);function Z(V,Se,Ae,Ne){const ye=new Uint8Array(4),fe=s.createTexture();s.bindTexture(V,fe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<Ae;We++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Se,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Se+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return fe}const pe={};pe[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),de(s.DEPTH_TEST),c.setFunc(_o),Et(!1),$e(fg),de(s.CULL_FACE),Ct(Hr);function de(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function Re(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function Le(V,Se){return p[V]!==Se?(s.bindFramebuffer(V,Se),p[V]=Se,V===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Se),V===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Se),!0):!1}function Je(V,Se){let Ae=y,Ne=!1;if(V){Ae=_.get(Se),Ae===void 0&&(Ae=[],_.set(Se,Ae));const ye=V.textures;if(Ae.length!==ye.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,We=ye.length;fe<We;fe++)Ae[fe]=s.COLOR_ATTACHMENT0+fe;Ae.length=ye.length,Ne=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(Ae)}function Ht(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const St={[ds]:s.FUNC_ADD,[Hy]:s.FUNC_SUBTRACT,[Vy]:s.FUNC_REVERSE_SUBTRACT};St[Gy]=s.MIN,St[Wy]=s.MAX;const k={[Xy]:s.ZERO,[jy]:s.ONE,[Yy]:s.SRC_COLOR,[hf]:s.SRC_ALPHA,[Qy]:s.SRC_ALPHA_SATURATE,[Zy]:s.DST_COLOR,[qy]:s.DST_ALPHA,[Ky]:s.ONE_MINUS_SRC_COLOR,[ff]:s.ONE_MINUS_SRC_ALPHA,[Jy]:s.ONE_MINUS_DST_COLOR,[$y]:s.ONE_MINUS_DST_ALPHA,[eS]:s.CONSTANT_COLOR,[tS]:s.ONE_MINUS_CONSTANT_COLOR,[nS]:s.CONSTANT_ALPHA,[iS]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(V,Se,Ae,Ne,ye,fe,We,lt,Lt,Mt){if(V===Hr){M===!0&&(Re(s.BLEND),M=!1);return}if(M===!1&&(de(s.BLEND),M=!0),V!==zy){if(V!==S||Mt!==C){if((x!==ds||R!==ds)&&(s.blendEquation(s.FUNC_ADD),x=ds,R=ds),Mt)switch(V){case fo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dg:s.blendFunc(s.ONE,s.ONE);break;case pg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case fo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,P=null,U=null,z=null,O.set(0,0,0),Y=0,S=V,C=Mt}return}ye=ye||Se,fe=fe||Ae,We=We||Ne,(Se!==x||ye!==R)&&(s.blendEquationSeparate(St[Se],St[ye]),x=Se,R=ye),(Ae!==D||Ne!==P||fe!==U||We!==z)&&(s.blendFuncSeparate(k[Ae],k[Ne],k[fe],k[We]),D=Ae,P=Ne,U=fe,z=We),(lt.equals(O)===!1||Lt!==Y)&&(s.blendColor(lt.r,lt.g,lt.b,Lt),O.copy(lt),Y=Lt),S=V,C=!1}function Qe(V,Se){V.side===Pi?Re(s.CULL_FACE):de(s.CULL_FACE);let Ae=V.side===Wn;Se&&(Ae=!Ae),Et(Ae),V.blending===fo&&V.transparent===!1?Ct(Hr):Ct(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const Ne=V.stencilWrite;u.setTest(Ne),Ne&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Oe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(V){b!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),b=V)}function $e(V){V!==ky?(de(s.CULL_FACE),V!==F&&(V===fg?s.cullFace(s.BACK):V===By?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),F=V}function kt(V){V!==le&&(se&&s.lineWidth(V),le=V)}function Oe(V,Se,Ae){V?(de(s.POLYGON_OFFSET_FILL),(ne!==Se||ae!==Ae)&&(s.polygonOffset(Se,Ae),ne=Se,ae=Ae)):Re(s.POLYGON_OFFSET_FILL)}function ut(V){V?de(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function Gt(V){V===void 0&&(V=s.TEXTURE0+he-1),oe!==V&&(s.activeTexture(V),oe=V)}function Wt(V,Se,Ae){Ae===void 0&&(oe===null?Ae=s.TEXTURE0+he-1:Ae=oe);let Ne=ie[Ae];Ne===void 0&&(Ne={type:void 0,texture:void 0},ie[Ae]=Ne),(Ne.type!==V||Ne.texture!==Se)&&(oe!==Ae&&(s.activeTexture(Ae),oe=Ae),s.bindTexture(V,Se||pe[V]),Ne.type=V,Ne.texture=Se)}function L(){const V=ie[oe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(V){ze.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ze.copy(V))}function rt(V){Be.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Be.copy(V))}function je(V,Se){let Ae=d.get(Se);Ae===void 0&&(Ae=new WeakMap,d.set(Se,Ae));let Ne=Ae.get(V);Ne===void 0&&(Ne=s.getUniformBlockIndex(Se,V.name),Ae.set(V,Ne))}function be(V,Se){const Ne=d.get(Se).get(V);f.get(Se)!==Ne&&(s.uniformBlockBinding(Se,Ne,V.__bindingPointIndex),f.set(Se,Ne))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},oe=null,ie={},p={},_=new WeakMap,y=[],E=null,M=!1,S=null,x=null,D=null,P=null,R=null,U=null,z=null,O=new ft(0,0,0),Y=0,C=!1,b=null,F=null,le=null,ne=null,ae=null,ze.set(0,0,s.canvas.width,s.canvas.height),Be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:de,disable:Re,bindFramebuffer:Le,drawBuffers:Je,useProgram:Ht,setBlending:Ct,setMaterial:Qe,setFlipSided:Et,setCullFace:$e,setLineWidth:kt,setPolygonOffset:Oe,setScissorTest:ut,activeTexture:Gt,bindTexture:Wt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:qe,texImage3D:Me,updateUBOMapping:je,uniformBlockBinding:be,texStorage2D:we,texStorage3D:He,texSubImage2D:ce,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:Ke,scissor:De,viewport:rt,reset:ht}}function I1(s,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ct,g=new WeakMap;let p;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,w){return y?new OffscreenCanvas(L,w):Da("canvas")}function M(L,w,q){let ce=1;const ve=Wt(L);if((ve.width>q||ve.height>q)&&(ce=q/Math.max(ve.width,ve.height)),ce<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(ce*ve.width),Ke=Math.floor(ce*ve.height);p===void 0&&(p=E(re,Ke));const we=w?E(re,Ke):p;return we.width=re,we.height=Ke,we.getContext("2d").drawImage(L,0,0,re,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+re+"x"+Ke+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,w,q,ce,ve=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=w;if(w===s.RED&&(q===s.FLOAT&&(re=s.R32F),q===s.HALF_FLOAT&&(re=s.R16F),q===s.UNSIGNED_BYTE&&(re=s.R8)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.R8UI),q===s.UNSIGNED_SHORT&&(re=s.R16UI),q===s.UNSIGNED_INT&&(re=s.R32UI),q===s.BYTE&&(re=s.R8I),q===s.SHORT&&(re=s.R16I),q===s.INT&&(re=s.R32I)),w===s.RG&&(q===s.FLOAT&&(re=s.RG32F),q===s.HALF_FLOAT&&(re=s.RG16F),q===s.UNSIGNED_BYTE&&(re=s.RG8)),w===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.RG8UI),q===s.UNSIGNED_SHORT&&(re=s.RG16UI),q===s.UNSIGNED_INT&&(re=s.RG32UI),q===s.BYTE&&(re=s.RG8I),q===s.SHORT&&(re=s.RG16I),q===s.INT&&(re=s.RG32I)),w===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.RGB8UI),q===s.UNSIGNED_SHORT&&(re=s.RGB16UI),q===s.UNSIGNED_INT&&(re=s.RGB32UI),q===s.BYTE&&(re=s.RGB8I),q===s.SHORT&&(re=s.RGB16I),q===s.INT&&(re=s.RGB32I)),w===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),q===s.UNSIGNED_INT&&(re=s.RGBA32UI),q===s.BYTE&&(re=s.RGBA8I),q===s.SHORT&&(re=s.RGBA16I),q===s.INT&&(re=s.RGBA32I)),w===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),w===s.RGBA){const Ke=ve?Cc:wt.getTransfer(ce);q===s.FLOAT&&(re=s.RGBA32F),q===s.HALF_FLOAT&&(re=s.RGBA16F),q===s.UNSIGNED_BYTE&&(re=Ke===Ft?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(L,w){let q;return L?w===null||w===_s||w===Ra?q=s.DEPTH24_STENCIL8:w===Ei?q=s.DEPTH32F_STENCIL8:w===Aa&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===_s||w===Ra?q=s.DEPTH_COMPONENT24:w===Ei?q=s.DEPTH_COMPONENT32F:w===Aa&&(q=s.DEPTH_COMPONENT16),q}function U(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Nn&&L.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function z(L){const w=L.target;w.removeEventListener("dispose",z),Y(w),w.isVideoTexture&&g.delete(w)}function O(L){const w=L.target;w.removeEventListener("dispose",O),b(w)}function Y(L){const w=i.get(L);if(w.__webglInit===void 0)return;const q=L.source,ce=_.get(q);if(ce){const ve=ce[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(L),Object.keys(ce).length===0&&_.delete(q)}i.remove(L)}function C(L){const w=i.get(L);s.deleteTexture(w.__webglTexture);const q=L.source,ce=_.get(q);delete ce[w.__cacheKey],c.memory.textures--}function b(L){const w=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(w.__webglFramebuffer[ce]))for(let ve=0;ve<w.__webglFramebuffer[ce].length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[ce][ve]);else s.deleteFramebuffer(w.__webglFramebuffer[ce]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ce])}else{if(Array.isArray(w.__webglFramebuffer))for(let ce=0;ce<w.__webglFramebuffer.length;ce++)s.deleteFramebuffer(w.__webglFramebuffer[ce]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ce=0;ce<w.__webglColorRenderbuffer.length;ce++)w.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ce]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=L.textures;for(let ce=0,ve=q.length;ce<ve;ce++){const re=i.get(q[ce]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),c.memory.textures--),i.remove(q[ce])}i.remove(L)}let F=0;function le(){F=0}function ne(){const L=F;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),F+=1,L}function ae(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function he(L,w){const q=i.get(L);if(L.isVideoTexture&&ut(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const ce=L.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(q,L,w);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function se(L,w){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){pe(q,L,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function ue(L,w){const q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){pe(q,L,w);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function H(L,w){const q=i.get(L);if(L.version>0&&q.__version!==L.version){de(q,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}const oe={[yo]:s.REPEAT,[Br]:s.CLAMP_TO_EDGE,[bc]:s.MIRRORED_REPEAT},ie={[Nn]:s.NEAREST,[nv]:s.NEAREST_MIPMAP_NEAREST,[xa]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[yc]:s.LINEAR_MIPMAP_NEAREST,[rr]:s.LINEAR_MIPMAP_LINEAR},N={[xS]:s.NEVER,[wS]:s.ALWAYS,[yS]:s.LESS,[fv]:s.LEQUAL,[SS]:s.EQUAL,[TS]:s.GEQUAL,[ES]:s.GREATER,[MS]:s.NOTEQUAL};function te(L,w){if(w.type===Ei&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jn||w.magFilter===yc||w.magFilter===xa||w.magFilter===rr||w.minFilter===Jn||w.minFilter===yc||w.minFilter===xa||w.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,oe[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,oe[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,oe[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ie[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nn||w.minFilter!==xa&&w.minFilter!==rr||w.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ze(L,w){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",z));const ce=w.source;let ve=_.get(ce);ve===void 0&&(ve={},_.set(ce,ve));const re=ae(w);if(re!==L.__cacheKey){ve[re]===void 0&&(ve[re]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ve[re].usedTimes++;const Ke=ve[L.__cacheKey];Ke!==void 0&&(ve[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&C(w)),L.__cacheKey=re,L.__webglTexture=ve[re].texture}return q}function Be(L,w,q){return Math.floor(Math.floor(L/q)/w)}function Z(L,w,q,ce){const re=L.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,q,ce,w.data);else{re.sort((Me,De)=>Me.start-De.start);let Ke=0;for(let Me=1;Me<re.length;Me++){const De=re[Ke],rt=re[Me],je=De.start+De.count,be=Be(rt.start,w.width,4),ht=Be(De.start,w.width,4);rt.start<=je+1&&be===ht&&Be(rt.start+rt.count-1,w.width,4)===be?De.count=Math.max(De.count,rt.start+rt.count-De.start):(++Ke,re[Ke]=rt)}re.length=Ke+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Me=0,De=re.length;Me<De;Me++){const rt=re[Me],je=Math.floor(rt.start/4),be=Math.ceil(rt.count/4),ht=je%w.width,V=Math.floor(je/w.width),Se=be,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,ht,V,Se,Ae,q,ce,w.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,qe)}}function pe(L,w,q){let ce=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=s.TEXTURE_3D);const ve=ze(L,w),re=w.source;t.bindTexture(ce,L.__webglTexture,s.TEXTURE0+q);const Ke=i.get(re);if(re.version!==Ke.__version||ve===!0){t.activeTexture(s.TEXTURE0+q);const we=wt.getPrimaries(wt.workingColorSpace),He=w.colorSpace===Or?null:wt.getPrimaries(w.colorSpace),qe=w.colorSpace===Or||we===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Me=M(w.image,!1,o.maxTextureSize);Me=Gt(w,Me);const De=a.convert(w.format,w.colorSpace),rt=a.convert(w.type);let je=P(w.internalFormat,De,rt,w.colorSpace,w.isVideoTexture);te(ce,w);let be;const ht=w.mipmaps,V=w.isVideoTexture!==!0,Se=Ke.__version===void 0||ve===!0,Ae=re.dataReady,Ne=U(w,Me);if(w.isDepthTexture)je=R(w.format===Ca,w.type),Se&&(V?t.texStorage2D(s.TEXTURE_2D,1,je,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,je,Me.width,Me.height,0,De,rt,null));else if(w.isDataTexture)if(ht.length>0){V&&Se&&t.texStorage2D(s.TEXTURE_2D,Ne,je,ht[0].width,ht[0].height);for(let ye=0,fe=ht.length;ye<fe;ye++)be=ht[ye],V?Ae&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,be.width,be.height,De,rt,be.data):t.texImage2D(s.TEXTURE_2D,ye,je,be.width,be.height,0,De,rt,be.data);w.generateMipmaps=!1}else V?(Se&&t.texStorage2D(s.TEXTURE_2D,Ne,je,Me.width,Me.height),Ae&&Z(w,Me,De,rt)):t.texImage2D(s.TEXTURE_2D,0,je,Me.width,Me.height,0,De,rt,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){V&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,je,ht[0].width,ht[0].height,Me.depth);for(let ye=0,fe=ht.length;ye<fe;ye++)if(be=ht[ye],w.format!==ci)if(De!==null)if(V){if(Ae)if(w.layerUpdates.size>0){const We=s_(be.width,be.height,w.format,w.type);for(const lt of w.layerUpdates){const Lt=be.data.subarray(lt*We/be.data.BYTES_PER_ELEMENT,(lt+1)*We/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,lt,be.width,be.height,1,De,Lt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,be.width,be.height,Me.depth,De,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,je,be.width,be.height,Me.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,be.width,be.height,Me.depth,De,rt,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,je,be.width,be.height,Me.depth,0,De,rt,be.data)}else{V&&Se&&t.texStorage2D(s.TEXTURE_2D,Ne,je,ht[0].width,ht[0].height);for(let ye=0,fe=ht.length;ye<fe;ye++)be=ht[ye],w.format!==ci?De!==null?V?Ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,be.width,be.height,De,be.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,je,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ae&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,be.width,be.height,De,rt,be.data):t.texImage2D(s.TEXTURE_2D,ye,je,be.width,be.height,0,De,rt,be.data)}else if(w.isDataArrayTexture)if(V){if(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,je,Me.width,Me.height,Me.depth),Ae)if(w.layerUpdates.size>0){const ye=s_(Me.width,Me.height,w.format,w.type);for(const fe of w.layerUpdates){const We=Me.data.subarray(fe*ye/Me.data.BYTES_PER_ELEMENT,(fe+1)*ye/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,De,rt,We)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,rt,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,je,Me.width,Me.height,Me.depth,0,De,rt,Me.data);else if(w.isData3DTexture)V?(Se&&t.texStorage3D(s.TEXTURE_3D,Ne,je,Me.width,Me.height,Me.depth),Ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,rt,Me.data)):t.texImage3D(s.TEXTURE_3D,0,je,Me.width,Me.height,Me.depth,0,De,rt,Me.data);else if(w.isFramebufferTexture){if(Se)if(V)t.texStorage2D(s.TEXTURE_2D,Ne,je,Me.width,Me.height);else{let ye=Me.width,fe=Me.height;for(let We=0;We<Ne;We++)t.texImage2D(s.TEXTURE_2D,We,je,ye,fe,0,De,rt,null),ye>>=1,fe>>=1}}else if(ht.length>0){if(V&&Se){const ye=Wt(ht[0]);t.texStorage2D(s.TEXTURE_2D,Ne,je,ye.width,ye.height)}for(let ye=0,fe=ht.length;ye<fe;ye++)be=ht[ye],V?Ae&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,De,rt,be):t.texImage2D(s.TEXTURE_2D,ye,je,De,rt,be);w.generateMipmaps=!1}else if(V){if(Se){const ye=Wt(Me);t.texStorage2D(s.TEXTURE_2D,Ne,je,ye.width,ye.height)}Ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,rt,Me)}else t.texImage2D(s.TEXTURE_2D,0,je,De,rt,Me);S(w)&&x(ce),Ke.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,q){if(w.image.length!==6)return;const ce=ze(L,w),ve=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);const re=i.get(ve);if(ve.version!==re.__version||ce===!0){t.activeTexture(s.TEXTURE0+q);const Ke=wt.getPrimaries(wt.workingColorSpace),we=w.colorSpace===Or?null:wt.getPrimaries(w.colorSpace),He=w.colorSpace===Or||Ke===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,De=[];for(let fe=0;fe<6;fe++)!qe&&!Me?De[fe]=M(w.image[fe],!0,o.maxCubemapSize):De[fe]=Me?w.image[fe].image:w.image[fe],De[fe]=Gt(w,De[fe]);const rt=De[0],je=a.convert(w.format,w.colorSpace),be=a.convert(w.type),ht=P(w.internalFormat,je,be,w.colorSpace),V=w.isVideoTexture!==!0,Se=re.__version===void 0||ce===!0,Ae=ve.dataReady;let Ne=U(w,rt);te(s.TEXTURE_CUBE_MAP,w);let ye;if(qe){V&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ht,rt.width,rt.height);for(let fe=0;fe<6;fe++){ye=De[fe].mipmaps;for(let We=0;We<ye.length;We++){const lt=ye[We];w.format!==ci?je!==null?V?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,0,0,lt.width,lt.height,je,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,0,0,lt.width,lt.height,je,be,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We,ht,lt.width,lt.height,0,je,be,lt.data)}}}else{if(ye=w.mipmaps,V&&Se){ye.length>0&&Ne++;const fe=Wt(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ht,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){V?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De[fe].width,De[fe].height,je,be,De[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ht,De[fe].width,De[fe].height,0,je,be,De[fe].data);for(let We=0;We<ye.length;We++){const Lt=ye[We].image[fe].image;V?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,0,0,Lt.width,Lt.height,je,be,Lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,ht,Lt.width,Lt.height,0,je,be,Lt.data)}}else{V?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,je,be,De[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ht,je,be,De[fe]);for(let We=0;We<ye.length;We++){const lt=ye[We];V?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,0,0,je,be,lt.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,We+1,ht,je,be,lt.image[fe])}}}S(w)&&x(s.TEXTURE_CUBE_MAP),re.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Re(L,w,q,ce,ve,re){const Ke=a.convert(q.format,q.colorSpace),we=a.convert(q.type),He=P(q.internalFormat,Ke,we,q.colorSpace),qe=i.get(w),Me=i.get(q);if(Me.__renderTarget=w,!qe.__hasExternalTextures){const De=Math.max(1,w.width>>re),rt=Math.max(1,w.height>>re);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,re,He,De,rt,w.depth,0,Ke,we,null):t.texImage2D(ve,re,He,De,rt,0,Ke,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Oe(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,ve,Me.__webglTexture,0,kt(w)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,ve,Me.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(L,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const ce=w.depthTexture,ve=ce&&ce.isDepthTexture?ce.type:null,re=R(w.stencilBuffer,ve),Ke=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=kt(w);Oe(w)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,re,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,re,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,re,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,L)}else{const ce=w.textures;for(let ve=0;ve<ce.length;ve++){const re=ce[ve],Ke=a.convert(re.format,re.colorSpace),we=a.convert(re.type),He=P(re.internalFormat,Ke,we,re.colorSpace),qe=kt(w);q&&Oe(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,He,w.width,w.height):Oe(w)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,He,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,He,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Je(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(w.depthTexture);ce.__renderTarget=w,(!ce.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ve=ce.__webglTexture,re=kt(w);if(w.depthTexture.format===ba)Oe(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Ca)Oe(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ht(L){const w=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ce=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ce){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ce.removeEventListener("dispose",ve)};ce.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=ce}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ce=L.texture.mipmaps;ce&&ce.length>0?Je(w.__webglFramebuffer[0],L):Je(w.__webglFramebuffer,L)}else if(q){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]===void 0)w.__webglDepthbuffer[ce]=s.createRenderbuffer(),Le(w.__webglDepthbuffer[ce],L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,re)}}else{const ce=L.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Le(w.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(L,w,q){const ce=i.get(L);w!==void 0&&Re(ce.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ht(L)}function k(L){const w=L.texture,q=i.get(L),ce=i.get(w);L.addEventListener("dispose",O);const ve=L.textures,re=L.isWebGLCubeRenderTarget===!0,Ke=ve.length>1;if(Ke||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=w.version,c.memory.textures++),re){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let He=0;He<w.mipmaps.length;He++)q.__webglFramebuffer[we][He]=s.createFramebuffer()}else q.__webglFramebuffer[we]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)q.__webglFramebuffer[we]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let we=0,He=ve.length;we<He;we++){const qe=i.get(ve[we]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&Oe(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<ve.length;we++){const He=ve[we];q.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const qe=a.convert(He.format,He.colorSpace),Me=a.convert(He.type),De=P(He.internalFormat,qe,Me,He.colorSpace,L.isXRRenderTarget===!0),rt=kt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,De,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,q.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),te(s.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)Re(q.__webglFramebuffer[we][He],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,He);else Re(q.__webglFramebuffer[we],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(w)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let we=0,He=ve.length;we<He;we++){const qe=ve[we],Me=i.get(qe);let De=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,Me.__webglTexture),te(De,qe),Re(q.__webglFramebuffer,L,qe,s.COLOR_ATTACHMENT0+we,De,0),S(qe)&&x(De)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,ce.__webglTexture),te(we,w),w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)Re(q.__webglFramebuffer[He],L,w,s.COLOR_ATTACHMENT0,we,He);else Re(q.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,we,0);S(w)&&x(we),t.unbindTexture()}L.depthBuffer&&Ht(L)}function Ct(L){const w=L.textures;for(let q=0,ce=w.length;q<ce;q++){const ve=w[q];if(S(ve)){const re=D(L),Ke=i.get(ve).__webglTexture;t.bindTexture(re,Ke),x(re),t.unbindTexture()}}}const Qe=[],Et=[];function $e(L){if(L.samples>0){if(Oe(L)===!1){const w=L.textures,q=L.width,ce=L.height;let ve=s.COLOR_BUFFER_BIT;const re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=i.get(L),we=w.length>1;if(we)for(let qe=0;qe<w.length;qe++)t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const He=L.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[qe]);const Me=i.get(w[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,q,ce,0,0,q,ce,ve,s.NEAREST),f===!0&&(Qe.length=0,Et.length=0,Qe.push(s.COLOR_ATTACHMENT0+qe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qe.push(re),Et.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let qe=0;qe<w.length;qe++){t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[qe]);const Me=i.get(w[qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,Me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&f){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function kt(L){return Math.min(o.maxSamples,L.samples)}function Oe(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(L){const w=c.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function Gt(L,w){const q=L.colorSpace,ce=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Fn&&q!==Or&&(wt.getTransfer(q)===Ft?(ce!==ci||ve!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=ne,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=ue,this.setTextureCube=H,this.rebindTextures=St,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Oe}function N1(s,e){function t(i,o=Or){let a;const c=wt.getTransfer(o);if(i===Ii)return s.UNSIGNED_BYTE;if(i===ad)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(i===sv)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===iv)return s.BYTE;if(i===rv)return s.SHORT;if(i===Aa)return s.UNSIGNED_SHORT;if(i===od)return s.INT;if(i===_s)return s.UNSIGNED_INT;if(i===Ei)return s.FLOAT;if(i===Na)return s.HALF_FLOAT;if(i===ov)return s.ALPHA;if(i===av)return s.RGB;if(i===ci)return s.RGBA;if(i===ba)return s.DEPTH_COMPONENT;if(i===Ca)return s.DEPTH_STENCIL;if(i===cd)return s.RED;if(i===ud)return s.RED_INTEGER;if(i===lv)return s.RG;if(i===hd)return s.RG_INTEGER;if(i===fd)return s.RGBA_INTEGER;if(i===Sc||i===Ec||i===Mc||i===Tc)if(c===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ef||i===Mf||i===Tf||i===wf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ef)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Af||i===Rf||i===bf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Af||i===Rf)return c===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===bf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cf||i===Pf||i===Lf||i===Df||i===If||i===Nf||i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===zf||i===Hf||i===Vf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Cf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Df)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===If)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ff)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Of)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vf)return c===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Gf||i===Wf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===wc)return c===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cv||i===Xf||i===jf||i===Yf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===wc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Xf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ra?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class Ov extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const U1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F1=`
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

}`;class O1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ov(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gr({vertexShader:U1,fragmentShader:F1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qn(new Fc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k1 extends Ss{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",f=1,d=null,g=null,p=null,_=null,y=null,E=null;const M=new O1,S={},x=t.getContextAttributes();let D=null,P=null;const R=[],U=[],z=new ct;let O=null;const Y=new In;Y.viewport=new bt;const C=new In;C.viewport=new bt;const b=[Y,C],F=new qE;let le=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=R[Z];return pe===void 0&&(pe=new Vh,R[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=R[Z];return pe===void 0&&(pe=new Vh,R[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=R[Z];return pe===void 0&&(pe=new Vh,R[Z]=pe),pe.getHandSpace()};function ae(Z){const pe=U.indexOf(Z.inputSource);if(pe===-1)return;const de=R[pe];de!==void 0&&(de.update(Z.inputSource,Z.frame,d||c),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function he(){o.removeEventListener("select",ae),o.removeEventListener("selectstart",ae),o.removeEventListener("selectend",ae),o.removeEventListener("squeeze",ae),o.removeEventListener("squeezestart",ae),o.removeEventListener("squeezeend",ae),o.removeEventListener("end",he),o.removeEventListener("inputsourceschange",se);for(let Z=0;Z<R.length;Z++){const pe=U[Z];pe!==null&&(U[Z]=null,R[Z].disconnect(pe))}le=null,ne=null,M.reset();for(const Z in S)delete S[Z];e.setRenderTarget(D),y=null,_=null,p=null,o=null,P=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Z){d=Z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return p},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",ae),o.addEventListener("selectstart",ae),o.addEventListener("selectend",ae),o.addEventListener("squeeze",ae),o.addEventListener("squeezestart",ae),o.addEventListener("squeezeend",ae),o.addEventListener("end",he),o.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&(p=new XRWebGLBinding(o,t)),p!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Re=null,Le=null;x.depth&&(Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=x.stencil?Ca:ba,Re=x.stencil?Ra:_s);const Je={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};_=p.createProjectionLayer(Je),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new vs(_.textureWidth,_.textureHeight,{format:ci,type:Ii,depthTexture:new Rv(_.textureWidth,_.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const de={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new vs(y.framebufferWidth,y.framebufferHeight,{format:ci,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await o.requestReferenceSpace(u),Be.setContext(o),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function se(Z){for(let pe=0;pe<Z.removed.length;pe++){const de=Z.removed[pe],Re=U.indexOf(de);Re>=0&&(U[Re]=null,R[Re].disconnect(de))}for(let pe=0;pe<Z.added.length;pe++){const de=Z.added[pe];let Re=U.indexOf(de);if(Re===-1){for(let Je=0;Je<R.length;Je++)if(Je>=U.length){U.push(de),Re=Je;break}else if(U[Je]===null){U[Je]=de,Re=Je;break}if(Re===-1)break}const Le=R[Re];Le&&Le.connect(de)}}const ue=new X,H=new X;function oe(Z,pe,de){ue.setFromMatrixPosition(pe.matrixWorld),H.setFromMatrixPosition(de.matrixWorld);const Re=ue.distanceTo(H),Le=pe.projectionMatrix.elements,Je=de.projectionMatrix.elements,Ht=Le[14]/(Le[10]-1),St=Le[14]/(Le[10]+1),k=(Le[9]+1)/Le[5],Ct=(Le[9]-1)/Le[5],Qe=(Le[8]-1)/Le[0],Et=(Je[8]+1)/Je[0],$e=Ht*Qe,kt=Ht*Et,Oe=Re/(-Qe+Et),ut=Oe*-Qe;if(pe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ut),Z.translateZ(Oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Gt=Ht+Oe,Wt=St+Oe,L=$e-ut,w=kt+(Re-ut),q=k*St/Wt*Gt,ce=Ct*St/Wt*Gt;Z.projectionMatrix.makePerspective(L,w,q,ce,Gt,Wt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let pe=Z.near,de=Z.far;M.texture!==null&&(M.depthNear>0&&(pe=M.depthNear),M.depthFar>0&&(de=M.depthFar)),F.near=C.near=Y.near=pe,F.far=C.far=Y.far=de,(le!==F.near||ne!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),le=F.near,ne=F.far),F.layers.mask=Z.layers.mask|6,Y.layers.mask=F.layers.mask&3,C.layers.mask=F.layers.mask&5;const Re=Z.parent,Le=F.cameras;ie(F,Re);for(let Je=0;Je<Le.length;Je++)ie(Le[Je],Re);Le.length===2?oe(F,Y,C):F.projectionMatrix.copy(Y.projectionMatrix),N(Z,F,Re)};function N(Z,pe,de){de===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=So*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(Z){f=Z,_!==null&&(_.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(F)},this.getCameraTexture=function(Z){return S[Z]};let te=null;function ze(Z,pe){if(g=pe.getViewerPose(d||c),E=pe,g!==null){const de=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Re=!1;de.length!==F.cameras.length&&(F.cameras.length=0,Re=!0);for(let St=0;St<de.length;St++){const k=de[St];let Ct=null;if(y!==null)Ct=y.getViewport(k);else{const Et=p.getViewSubImage(_,k);Ct=Et.viewport,St===0&&(e.setRenderTargetTextures(P,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(P))}let Qe=b[St];Qe===void 0&&(Qe=new In,Qe.layers.enable(St),Qe.viewport=new bt,b[St]=Qe),Qe.matrix.fromArray(k.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(k.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),St===0&&(F.matrix.copy(Qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Re===!0&&F.cameras.push(Qe)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&p){const St=p.getDepthInformation(de[0]);St&&St.isValid&&St.texture&&M.init(St,o.renderState)}if(Le&&Le.includes("camera-access")&&(e.state.unbindTexture(),p))for(let St=0;St<de.length;St++){const k=de[St].camera;if(k){let Ct=S[k];Ct||(Ct=new Ov,S[k]=Ct);const Qe=p.getCameraImage(k);Ct.sourceTexture=Qe}}}for(let de=0;de<R.length;de++){const Re=U[de],Le=R[de];Re!==null&&Le!==void 0&&Le.update(Re,pe,d||c)}te&&te(Z,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),E=null}const Be=new Dv;Be.setAnimationLoop(ze),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}}const us=new Ui,B1=new mt;function z1(s,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,yv(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,D,P,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),p(S,x)):x.isMeshPhongMaterial?(a(S,x),g(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,R)):x.isMeshMatcapMaterial?(a(S,x),E(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),M(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?f(S,x,D,P):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),P=D.envMap,R=D.envMapRotation;P&&(S.envMap.value=P,us.copy(R),us.x*=-1,us.y*=-1,us.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),S.envMapRotation.value.setFromMatrix4(B1.makeRotationFromEuler(us)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,D,P){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=P*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function p(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function H1(s,e,t,i){let o={},a={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,P){const R=P.program;i.uniformBlockBinding(D,R)}function d(D,P){let R=o[D.id];R===void 0&&(E(D),R=g(D),o[D.id]=R,D.addEventListener("dispose",S));const U=P.program;i.updateUBOMapping(D,U);const z=e.render.frame;a[D.id]!==z&&(_(D),a[D.id]=z)}function g(D){const P=p();D.__bindingPointIndex=P;const R=s.createBuffer(),U=D.__size,z=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,U,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function p(){for(let D=0;D<u;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const P=o[D.id],R=D.uniforms,U=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let z=0,O=R.length;z<O;z++){const Y=Array.isArray(R[z])?R[z]:[R[z]];for(let C=0,b=Y.length;C<b;C++){const F=Y[C];if(y(F,z,C,U)===!0){const le=F.__offset,ne=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let he=0;he<ne.length;he++){const se=ne[he],ue=M(se);typeof se=="number"||typeof se=="boolean"?(F.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,le+ae,F.__data)):se.isMatrix3?(F.__data[0]=se.elements[0],F.__data[1]=se.elements[1],F.__data[2]=se.elements[2],F.__data[3]=0,F.__data[4]=se.elements[3],F.__data[5]=se.elements[4],F.__data[6]=se.elements[5],F.__data[7]=0,F.__data[8]=se.elements[6],F.__data[9]=se.elements[7],F.__data[10]=se.elements[8],F.__data[11]=0):(se.toArray(F.__data,ae),ae+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(D,P,R,U){const z=D.value,O=P+"_"+R;if(U[O]===void 0)return typeof z=="number"||typeof z=="boolean"?U[O]=z:U[O]=z.clone(),!0;{const Y=U[O];if(typeof z=="number"||typeof z=="boolean"){if(Y!==z)return U[O]=z,!0}else if(Y.equals(z)===!1)return Y.copy(z),!0}return!1}function E(D){const P=D.uniforms;let R=0;const U=16;for(let O=0,Y=P.length;O<Y;O++){const C=Array.isArray(P[O])?P[O]:[P[O]];for(let b=0,F=C.length;b<F;b++){const le=C[b],ne=Array.isArray(le.value)?le.value:[le.value];for(let ae=0,he=ne.length;ae<he;ae++){const se=ne[ae],ue=M(se),H=R%U,oe=H%ue.boundary,ie=H+oe;R+=oe,ie!==0&&U-ie<ue.storage&&(R+=U-ie),le.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=ue.storage}}}const z=R%U;return z>0&&(R+=U-z),D.__size=R,D.__cache={},this}function M(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function S(D){const P=D.target;P.removeEventListener("dispose",S);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function x(){for(const D in o)s.deleteBuffer(o[D]);c=[],o={},a={}}return{bind:f,update:d,dispose:x}}class V1{constructor(e={}){const{canvas:t=VS(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const D=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let U=!1;this._outputColorSpace=pn;let z=0,O=0,Y=null,C=-1,b=null;const F=new bt,le=new bt;let ne=null;const ae=new ft(0);let he=0,se=t.width,ue=t.height,H=1,oe=null,ie=null;const N=new bt(0,0,se,ue),te=new bt(0,0,se,ue);let ze=!1;const Be=new _d;let Z=!1,pe=!1;const de=new mt,Re=new X,Le=new bt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function St(){return Y===null?H:1}let k=i;function Ct(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sd}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ye,!1),k===null){const j="webgl2";if(k=Ct(j,A),k===null)throw Ct(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qe,Et,$e,kt,Oe,ut,Gt,Wt,L,w,q,ce,ve,re,Ke,we,He,qe,Me,De,rt,je,be,ht;function V(){Qe=new Jw(k),Qe.init(),je=new N1(k,Qe),Et=new Xw(k,Qe,e,je),$e=new D1(k,Qe),Et.reversedDepthBuffer&&_&&$e.buffers.depth.setReversed(!0),kt=new tA(k),Oe=new x1,ut=new I1(k,Qe,$e,Oe,Et,je,kt),Gt=new Yw(R),Wt=new Zw(R),L=new aM(k),be=new Gw(k,L),w=new Qw(k,L,kt,be),q=new iA(k,w,L,kt),Me=new nA(k,Et,ut),we=new jw(Oe),ce=new v1(R,Gt,Wt,Qe,Et,be,we),ve=new z1(R,Oe),re=new S1,Ke=new R1(Qe),qe=new Vw(R,Gt,Wt,$e,q,y,f),He=new P1(R,q,Et),ht=new H1(k,kt,Et,$e),De=new Ww(k,Qe,kt),rt=new eA(k,Qe,kt),kt.programs=ce.programs,R.capabilities=Et,R.extensions=Qe,R.properties=Oe,R.renderLists=re,R.shadowMap=He,R.state=$e,R.info=kt}V();const Se=new k1(R,k);this.xr=Se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(se,ue,!1))},this.getSize=function(A){return A.set(se,ue)},this.setSize=function(A,j,Q=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,ue=j,t.width=Math.floor(A*H),t.height=Math.floor(j*H),Q===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(se*H,ue*H).floor()},this.setDrawingBufferSize=function(A,j,Q){se=A,ue=j,H=Q,t.width=Math.floor(A*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,j,Q,ee){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,j,Q,ee),$e.viewport(F.copy(N).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,j,Q,ee){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,j,Q,ee),$e.scissor(le.copy(te).multiplyScalar(H).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(A){$e.setScissorTest(ze=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,Q=!0){let ee=0;if(A){let G=!1;if(Y!==null){const Ee=Y.texture.format;G=Ee===fd||Ee===hd||Ee===ud}if(G){const Ee=Y.texture.type,Ce=Ee===Ii||Ee===_s||Ee===Aa||Ee===Ra||Ee===ad||Ee===ld,Ve=qe.getClearColor(),Ue=qe.getClearAlpha(),it=Ve.r,st=Ve.g,Ze=Ve.b;Ce?(E[0]=it,E[1]=st,E[2]=Ze,E[3]=Ue,k.clearBufferuiv(k.COLOR,0,E)):(M[0]=it,M[1]=st,M[2]=Ze,M[3]=Ue,k.clearBufferiv(k.COLOR,0,M))}else ee|=k.COLOR_BUFFER_BIT}j&&(ee|=k.DEPTH_BUFFER_BIT),Q&&(ee|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),qe.dispose(),re.dispose(),Ke.dispose(),Oe.dispose(),Gt.dispose(),Wt.dispose(),q.dispose(),be.dispose(),ht.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",vn),Se.removeEventListener("sessionend",Es),Xn.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const A=kt.autoReset,j=He.enabled,Q=He.autoUpdate,ee=He.needsUpdate,G=He.type;V(),kt.autoReset=A,He.enabled=j,He.autoUpdate=Q,He.needsUpdate=ee,He.type=G}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const j=A.target;j.removeEventListener("dispose",fe),We(j)}function We(A){lt(A),Oe.remove(A)}function lt(A){const j=Oe.get(A).programs;j!==void 0&&(j.forEach(function(Q){ce.releaseProgram(Q)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,Q,ee,G,Ee){j===null&&(j=Je);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,Ve=Hi(A,j,Q,ee,G);$e.setMaterial(ee,Ce);let Ue=Q.index,it=1;if(ee.wireframe===!0){if(Ue=w.getWireframeAttribute(Q),Ue===void 0)return;it=2}const st=Q.drawRange,Ze=Q.attributes.position;let ot=st.start*it,Pt=(st.start+st.count)*it;Ee!==null&&(ot=Math.max(ot,Ee.start*it),Pt=Math.min(Pt,(Ee.start+Ee.count)*it)),Ue!==null?(ot=Math.max(ot,0),Pt=Math.min(Pt,Ue.count)):Ze!=null&&(ot=Math.max(ot,0),Pt=Math.min(Pt,Ze.count));const Tt=Pt-ot;if(Tt<0||Tt===1/0)return;be.setup(G,ee,Ve,Q,Ue);let Bt,Dt=De;if(Ue!==null&&(Bt=L.get(Ue),Dt=rt,Dt.setIndex(Bt)),G.isMesh)ee.wireframe===!0?($e.setLineWidth(ee.wireframeLinewidth*St()),Dt.setMode(k.LINES)):Dt.setMode(k.TRIANGLES);else if(G.isLine){let et=ee.linewidth;et===void 0&&(et=1),$e.setLineWidth(et*St()),G.isLineSegments?Dt.setMode(k.LINES):G.isLineLoop?Dt.setMode(k.LINE_LOOP):Dt.setMode(k.LINE_STRIP)}else G.isPoints?Dt.setMode(k.POINTS):G.isSprite&&Dt.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)po("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))Dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const et=G._multiDrawStarts,Ut=G._multiDrawCounts,vt=G._multiDrawCount,rn=Ue?L.get(Ue).bytesPerElement:1,ui=Oe.get(ee).currentProgram.getUniforms();for(let Rn=0;Rn<vt;Rn++)ui.setValue(k,"_gl_DrawID",Rn),Dt.render(et[Rn]/rn,Ut[Rn])}else if(G.isInstancedMesh)Dt.renderInstances(ot,Tt,G.count);else if(Q.isInstancedBufferGeometry){const et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ut=Math.min(Q.instanceCount,et);Dt.renderInstances(ot,Tt,Ut)}else Dt.render(ot,Tt)};function Lt(A,j,Q){A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,Ts(A,j,Q),A.side=lr,A.needsUpdate=!0,Ts(A,j,Q),A.side=Pi):Ts(A,j,Q)}this.compile=function(A,j,Q=null){Q===null&&(Q=A),x=Ke.get(Q),x.init(j),P.push(x),Q.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),A!==Q&&A.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const ee=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Ee=G.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const Ve=Ee[Ce];Lt(Ve,Q,G),ee.add(Ve)}else Lt(Ee,Q,G),ee.add(Ee)}),x=P.pop(),ee},this.compileAsync=function(A,j,Q=null){const ee=this.compile(A,j,Q);return new Promise(G=>{function Ee(){if(ee.forEach(function(Ce){Oe.get(Ce).currentProgram.isReady()&&ee.delete(Ce)}),ee.size===0){G(A);return}setTimeout(Ee,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Mt=null;function ei(A){Mt&&Mt(A)}function vn(){Xn.stop()}function Es(){Xn.start()}const Xn=new Dv;Xn.setAnimationLoop(ei),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){Mt=A,Se.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},Se.addEventListener("sessionstart",vn),Se.addEventListener("sessionend",Es),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(j),j=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,j,Y),x=Ke.get(A,P.length),x.init(j),P.push(x),de.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Be.setFromProjectionMatrix(de,Li,j.reversedDepth),pe=this.localClippingEnabled,Z=we.init(this.clippingPlanes,pe),S=re.get(A,D.length),S.init(),D.push(S),Se.enabled===!0&&Se.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&Lo(Ee,j,-1/0,R.sortObjects)}Lo(A,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(oe,ie),Ht=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Ht&&qe.addToRenderList(S,A),this.info.render.frame++,Z===!0&&we.beginShadows();const Q=x.state.shadowsArray;He.render(Q,A,j),Z===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,G=S.transmissive;if(x.setupLights(),j.isArrayCamera){const Ee=j.cameras;if(G.length>0)for(let Ce=0,Ve=Ee.length;Ce<Ve;Ce++){const Ue=Ee[Ce];Wr(ee,G,A,Ue)}Ht&&qe.render(A);for(let Ce=0,Ve=Ee.length;Ce<Ve;Ce++){const Ue=Ee[Ce];cr(S,A,Ue,Ue.viewport)}}else G.length>0&&Wr(ee,G,A,j),Ht&&qe.render(A),cr(S,A,j);Y!==null&&O===0&&(ut.updateMultisampleRenderTarget(Y),ut.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(R,A,j),be.resetDefaultState(),C=-1,b=null,P.pop(),P.length>0?(x=P[P.length-1],Z===!0&&we.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Lo(A,j,Q,ee){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){ee&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const Ce=q.update(A),Ve=A.material;Ve.visible&&S.push(A,Ce,Ve,Q,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const Ce=q.update(A),Ve=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Le.copy(Ce.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Ve)){const Ue=Ce.groups;for(let it=0,st=Ue.length;it<st;it++){const Ze=Ue[it],ot=Ve[Ze.materialIndex];ot&&ot.visible&&S.push(A,Ce,ot,Q,Le.z,Ze)}}else Ve.visible&&S.push(A,Ce,Ve,Q,Le.z,null)}}const Ee=A.children;for(let Ce=0,Ve=Ee.length;Ce<Ve;Ce++)Lo(Ee[Ce],j,Q,ee)}function cr(A,j,Q,ee){const G=A.opaque,Ee=A.transmissive,Ce=A.transparent;x.setupLightsView(Q),Z===!0&&we.setGlobalState(R.clippingPlanes,Q),ee&&$e.viewport(F.copy(ee)),G.length>0&&zi(G,j,Q),Ee.length>0&&zi(Ee,j,Q),Ce.length>0&&zi(Ce,j,Q),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Wr(A,j,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new vs(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Na:Ii,minFilter:rr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ee=x.state.transmissionRenderTarget[ee.id],Ce=ee.viewport||F;Ee.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const Ve=R.getRenderTarget(),Ue=R.getActiveCubeFace(),it=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(ae),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),Ht&&qe.render(Q);const st=R.toneMapping;R.toneMapping=Vr;const Ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),Z===!0&&we.setGlobalState(R.clippingPlanes,ee),zi(A,Q,ee),ut.updateMultisampleRenderTarget(Ee),ut.updateRenderTargetMipmap(Ee),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Pt=0,Tt=j.length;Pt<Tt;Pt++){const Bt=j[Pt],Dt=Bt.object,et=Bt.geometry,Ut=Bt.material,vt=Bt.group;if(Ut.side===Pi&&Dt.layers.test(ee.layers)){const rn=Ut.side;Ut.side=Wn,Ut.needsUpdate=!0,Ms(Dt,Q,ee,et,Ut,vt),Ut.side=rn,Ut.needsUpdate=!0,ot=!0}}ot===!0&&(ut.updateMultisampleRenderTarget(Ee),ut.updateRenderTargetMipmap(Ee))}R.setRenderTarget(Ve,Ue,it),R.setClearColor(ae,he),Ze!==void 0&&(ee.viewport=Ze),R.toneMapping=st}function zi(A,j,Q){const ee=j.isScene===!0?j.overrideMaterial:null;for(let G=0,Ee=A.length;G<Ee;G++){const Ce=A[G],Ve=Ce.object,Ue=Ce.geometry,it=Ce.group;let st=Ce.material;st.allowOverride===!0&&ee!==null&&(st=ee),Ve.layers.test(Q.layers)&&Ms(Ve,j,Q,Ue,st,it)}}function Ms(A,j,Q,ee,G,Ee){A.onBeforeRender(R,j,Q,ee,G,Ee),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(R,j,Q,ee,A,Ee),G.transparent===!0&&G.side===Pi&&G.forceSinglePass===!1?(G.side=Wn,G.needsUpdate=!0,R.renderBufferDirect(Q,j,ee,G,A,Ee),G.side=lr,G.needsUpdate=!0,R.renderBufferDirect(Q,j,ee,G,A,Ee),G.side=Pi):R.renderBufferDirect(Q,j,ee,G,A,Ee),A.onAfterRender(R,j,Q,ee,G,Ee)}function Ts(A,j,Q){j.isScene!==!0&&(j=Je);const ee=Oe.get(A),G=x.state.lights,Ee=x.state.shadowsArray,Ce=G.state.version,Ve=ce.getParameters(A,G.state,Ee,j,Q),Ue=ce.getProgramCacheKey(Ve);let it=ee.programs;ee.environment=A.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(A.isMeshStandardMaterial?Wt:Gt).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",fe),it=new Map,ee.programs=it);let st=it.get(Ue);if(st!==void 0){if(ee.currentProgram===st&&ee.lightsStateVersion===Ce)return Ba(A,Ve),st}else Ve.uniforms=ce.getUniforms(A),A.onBeforeCompile(Ve,R),st=ce.acquireProgram(Ve,Ue),it.set(Ue,st),ee.uniforms=Ve.uniforms;const Ze=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=we.uniform),Ba(A,Ve),ee.needsLights=Ha(A),ee.lightsStateVersion=Ce,ee.needsLights&&(Ze.ambientLightColor.value=G.state.ambient,Ze.lightProbe.value=G.state.probe,Ze.directionalLights.value=G.state.directional,Ze.directionalLightShadows.value=G.state.directionalShadow,Ze.spotLights.value=G.state.spot,Ze.spotLightShadows.value=G.state.spotShadow,Ze.rectAreaLights.value=G.state.rectArea,Ze.ltc_1.value=G.state.rectAreaLTC1,Ze.ltc_2.value=G.state.rectAreaLTC2,Ze.pointLights.value=G.state.point,Ze.pointLightShadows.value=G.state.pointShadow,Ze.hemisphereLights.value=G.state.hemi,Ze.directionalShadowMap.value=G.state.directionalShadowMap,Ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ze.spotShadowMap.value=G.state.spotShadowMap,Ze.spotLightMatrix.value=G.state.spotLightMatrix,Ze.spotLightMap.value=G.state.spotLightMap,Ze.pointShadowMap.value=G.state.pointShadowMap,Ze.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=st,ee.uniformsList=null,st}function ka(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Ac.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Ba(A,j){const Q=Oe.get(A);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.batchingColor=j.batchingColor,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function Hi(A,j,Q,ee,G){j.isScene!==!0&&(j=Je),ut.resetTextureUnits();const Ee=j.fog,Ce=ee.isMeshStandardMaterial?j.environment:null,Ve=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Fn,Ue=(ee.isMeshStandardMaterial?Wt:Gt).get(ee.envMap||Ce),it=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,st=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ze=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,Pt=!!Q.morphAttributes.color;let Tt=Vr;ee.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Tt=R.toneMapping);const Bt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Dt=Bt!==void 0?Bt.length:0,et=Oe.get(ee),Ut=x.state.lights;if(Z===!0&&(pe===!0||A!==b)){const Jt=A===b&&ee.id===C;we.setState(ee,A,Jt)}let vt=!1;ee.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ut.state.version||et.outputColorSpace!==Ve||G.isBatchedMesh&&et.batching===!1||!G.isBatchedMesh&&et.batching===!0||G.isBatchedMesh&&et.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&et.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&et.instancing===!1||!G.isInstancedMesh&&et.instancing===!0||G.isSkinnedMesh&&et.skinning===!1||!G.isSkinnedMesh&&et.skinning===!0||G.isInstancedMesh&&et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&et.instancingMorph===!1&&G.morphTexture!==null||et.envMap!==Ue||ee.fog===!0&&et.fog!==Ee||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==we.numPlanes||et.numIntersection!==we.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==st||et.morphTargets!==Ze||et.morphNormals!==ot||et.morphColors!==Pt||et.toneMapping!==Tt||et.morphTargetsCount!==Dt)&&(vt=!0):(vt=!0,et.__version=ee.version);let rn=et.currentProgram;vt===!0&&(rn=Ts(ee,j,G));let ui=!1,Rn=!1,Xr=!1;const zt=rn.getUniforms(),bn=et.uniforms;if($e.useProgram(rn.program)&&(ui=!0,Rn=!0,Xr=!0),ee.id!==C&&(C=ee.id,Rn=!0),ui||b!==A){$e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(k,"projectionMatrix",A.projectionMatrix),zt.setValue(k,"viewMatrix",A.matrixWorldInverse);const yn=zt.map.cameraPosition;yn!==void 0&&yn.setValue(k,Re.setFromMatrixPosition(A.matrixWorld)),Et.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&zt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Rn=!0,Xr=!0)}if(G.isSkinnedMesh){zt.setOptional(k,G,"bindMatrix"),zt.setOptional(k,G,"bindMatrixInverse");const Jt=G.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),zt.setValue(k,"boneTexture",Jt.boneTexture,ut))}G.isBatchedMesh&&(zt.setOptional(k,G,"batchingTexture"),zt.setValue(k,"batchingTexture",G._matricesTexture,ut),zt.setOptional(k,G,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",G._indirectTexture,ut),zt.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",G._colorsTexture,ut));const xn=Q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Me.update(G,Q,rn),(Rn||et.receiveShadow!==G.receiveShadow)&&(et.receiveShadow=G.receiveShadow,zt.setValue(k,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(bn.envMap.value=Ue,bn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&j.environment!==null&&(bn.envMapIntensity.value=j.environmentIntensity),Rn&&(zt.setValue(k,"toneMappingExposure",R.toneMappingExposure),et.needsLights&&za(bn,Xr),Ee&&ee.fog===!0&&ve.refreshFogUniforms(bn,Ee),ve.refreshMaterialUniforms(bn,ee,H,ue,x.state.transmissionRenderTarget[A.id]),Ac.upload(k,ka(et),bn,ut)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ac.upload(k,ka(et),bn,ut),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&zt.setValue(k,"center",G.center),zt.setValue(k,"modelViewMatrix",G.modelViewMatrix),zt.setValue(k,"normalMatrix",G.normalMatrix),zt.setValue(k,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Jt=ee.uniformsGroups;for(let yn=0,jr=Jt.length;yn<jr;yn++){const xt=Jt[yn];ht.update(xt,rn),ht.bind(xt,rn)}}return rn}function za(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Ha(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,j,Q){const ee=Oe.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Oe.get(A.texture).__webglTexture=j,Oe.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const Q=Oe.get(A);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0};const kc=k.createFramebuffer();this.setRenderTarget=function(A,j=0,Q=0){Y=A,z=j,O=Q;let ee=!0,G=null,Ee=!1,Ce=!1;if(A){const Ue=Oe.get(A);if(Ue.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(k.FRAMEBUFFER,null),ee=!1;else if(Ue.__webglFramebuffer===void 0)ut.setupRenderTarget(A);else if(Ue.__hasExternalTextures)ut.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Ue.__boundDepthTexture!==Ze){if(Ze!==null&&Oe.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ce=!0);const st=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[j])?G=st[j][Q]:G=st[j],Ee=!0):A.samples>0&&ut.useMultisampledRTT(A)===!1?G=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?G=st[Q]:G=st,F.copy(A.viewport),le.copy(A.scissor),ne=A.scissorTest}else F.copy(N).multiplyScalar(H).floor(),le.copy(te).multiplyScalar(H).floor(),ne=ze;if(Q!==0&&(G=kc),$e.bindFramebuffer(k.FRAMEBUFFER,G)&&ee&&$e.drawBuffers(A,G),$e.viewport(F),$e.scissor(le),$e.setScissorTest(ne),Ee){const Ue=Oe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ue.__webglTexture,Q)}else if(Ce){const Ue=j;for(let it=0;it<A.textures.length;it++){const st=Oe.get(A.textures[it]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+it,st.__webglTexture,Q,Ue)}}else if(A!==null&&Q!==0){const Ue=Oe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ue.__webglTexture,Q)}C=-1},this.readRenderTargetPixels=function(A,j,Q,ee,G,Ee,Ce,Ve=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){$e.bindFramebuffer(k.FRAMEBUFFER,Ue);try{const it=A.textures[Ve],st=it.format,Ze=it.type;if(!Et.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ee&&Q>=0&&Q<=A.height-G&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ve),k.readPixels(j,Q,ee,G,je.convert(st),je.convert(Ze),Ee))}finally{const it=Y!==null?Oe.get(Y).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(A,j,Q,ee,G,Ee,Ce,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue)if(j>=0&&j<=A.width-ee&&Q>=0&&Q<=A.height-G){$e.bindFramebuffer(k.FRAMEBUFFER,Ue);const it=A.textures[Ve],st=it.format,Ze=it.type;if(!Et.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.bufferData(k.PIXEL_PACK_BUFFER,Ee.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ve),k.readPixels(j,Q,ee,G,je.convert(st),je.convert(Ze),0);const Pt=Y!==null?Oe.get(Y).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,Pt);const Tt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await GS(k,Tt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ee),k.deleteBuffer(ot),k.deleteSync(Tt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,Q=0){const ee=Math.pow(2,-Q),G=Math.floor(A.image.width*ee),Ee=Math.floor(A.image.height*ee),Ce=j!==null?j.x:0,Ve=j!==null?j.y:0;ut.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Ce,Ve,G,Ee),$e.unbindTexture()};const Va=k.createFramebuffer(),Ga=k.createFramebuffer();this.copyTextureToTexture=function(A,j,Q=null,ee=null,G=0,Ee=null){Ee===null&&(G!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=G,G=0):Ee=0);let Ce,Ve,Ue,it,st,Ze,ot,Pt,Tt;const Bt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(Q!==null)Ce=Q.max.x-Q.min.x,Ve=Q.max.y-Q.min.y,Ue=Q.isBox3?Q.max.z-Q.min.z:1,it=Q.min.x,st=Q.min.y,Ze=Q.isBox3?Q.min.z:0;else{const xn=Math.pow(2,-G);Ce=Math.floor(Bt.width*xn),Ve=Math.floor(Bt.height*xn),A.isDataArrayTexture?Ue=Bt.depth:A.isData3DTexture?Ue=Math.floor(Bt.depth*xn):Ue=1,it=0,st=0,Ze=0}ee!==null?(ot=ee.x,Pt=ee.y,Tt=ee.z):(ot=0,Pt=0,Tt=0);const Dt=je.convert(j.format),et=je.convert(j.type);let Ut;j.isData3DTexture?(ut.setTexture3D(j,0),Ut=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ut.setTexture2DArray(j,0),Ut=k.TEXTURE_2D_ARRAY):(ut.setTexture2D(j,0),Ut=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=k.getParameter(k.UNPACK_ROW_LENGTH),rn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ui=k.getParameter(k.UNPACK_SKIP_PIXELS),Rn=k.getParameter(k.UNPACK_SKIP_ROWS),Xr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Bt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Bt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,it),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const zt=A.isDataArrayTexture||A.isData3DTexture,bn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const xn=Oe.get(A),Jt=Oe.get(j),yn=Oe.get(xn.__renderTarget),jr=Oe.get(Jt.__renderTarget);$e.bindFramebuffer(k.READ_FRAMEBUFFER,yn.__webglFramebuffer),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let xt=0;xt<Ue;xt++)zt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(A).__webglTexture,G,Ze+xt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(j).__webglTexture,Ee,Tt+xt)),k.blitFramebuffer(it,st,Ce,Ve,ot,Pt,Ce,Ve,k.DEPTH_BUFFER_BIT,k.NEAREST);$e.bindFramebuffer(k.READ_FRAMEBUFFER,null),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||Oe.has(A)){const xn=Oe.get(A),Jt=Oe.get(j);$e.bindFramebuffer(k.READ_FRAMEBUFFER,Va),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ga);for(let yn=0;yn<Ue;yn++)zt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,xn.__webglTexture,G,Ze+yn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xn.__webglTexture,G),bn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jt.__webglTexture,Ee,Tt+yn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Jt.__webglTexture,Ee),G!==0?k.blitFramebuffer(it,st,Ce,Ve,ot,Pt,Ce,Ve,k.COLOR_BUFFER_BIT,k.NEAREST):bn?k.copyTexSubImage3D(Ut,Ee,ot,Pt,Tt+yn,it,st,Ce,Ve):k.copyTexSubImage2D(Ut,Ee,ot,Pt,it,st,Ce,Ve);$e.bindFramebuffer(k.READ_FRAMEBUFFER,null),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else bn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ut,Ee,ot,Pt,Tt,Ce,Ve,Ue,Dt,et,Bt.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(Ut,Ee,ot,Pt,Tt,Ce,Ve,Ue,Dt,Bt.data):k.texSubImage3D(Ut,Ee,ot,Pt,Tt,Ce,Ve,Ue,Dt,et,Bt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ee,ot,Pt,Ce,Ve,Dt,et,Bt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ee,ot,Pt,Bt.width,Bt.height,Dt,Bt.data):k.texSubImage2D(k.TEXTURE_2D,Ee,ot,Pt,Ce,Ve,Dt,et,Bt);k.pixelStorei(k.UNPACK_ROW_LENGTH,vt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,rn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ui),k.pixelStorei(k.UNPACK_SKIP_ROWS,Rn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xr),Ee===0&&j.generateMipmaps&&k.generateMipmap(Ut),$e.unbindTexture()},this.copyTextureToTexture3D=function(A,j,Q=null,ee=null,G=0){return po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,Q,ee,G)},this.initRenderTarget=function(A){Oe.get(A).__webglFramebuffer===void 0&&ut.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ut.setTextureCube(A,0):A.isData3DTexture?ut.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ut.setTexture2DArray(A,0):ut.setTexture2D(A,0),$e.unbindTexture()},this.resetState=function(){z=0,O=0,Y=null,$e.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function P_(s,e){if(e===mS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Kf||e===uv){let t=s.getIndex();if(t===null){const c=[],u=s.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,o=[];if(e===Kf)for(let c=1;c<=i;c++)o.push(t.getX(0)),o.push(t.getX(c)),o.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(o.push(t.getX(c)),o.push(t.getX(c+1)),o.push(t.getX(c+2))):(o.push(t.getX(c+2)),o.push(t.getX(c+1)),o.push(t.getX(c)));o.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(o),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class G1 extends Co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new K1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new lR(t)})}load(e,t,i,o){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=Ma.extractUrlBase(e);c=Ma.resolveURL(d,this.path)}else c=Ma.extractUrlBase(e);this.manager.itemStart(e);const u=function(d){o?o(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},f=new Pv(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{a.parse(d,c,function(g){t(g),a.manager.itemEnd(e)},u)}catch(g){u(g)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,o){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===kv){try{c[yt.KHR_BINARY_GLTF]=new cR(e)}catch(p){o&&o(p);return}a=JSON.parse(c[yt.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new ER(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const p=this.pluginCallbacks[g](d);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[p.name]=p,c[p.name]=!0}if(a.extensionsUsed)for(let g=0;g<a.extensionsUsed.length;++g){const p=a.extensionsUsed[g],_=a.extensionsRequired||[];switch(p){case yt.KHR_MATERIALS_UNLIT:c[p]=new j1;break;case yt.KHR_DRACO_MESH_COMPRESSION:c[p]=new uR(a,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:c[p]=new hR;break;case yt.KHR_MESH_QUANTIZATION:c[p]=new fR;break;default:_.indexOf(p)>=0&&u[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}d.setExtensions(c),d.setPlugins(u),d.parse(i,o)}parseAsync(e,t){const i=this;return new Promise(function(o,a){i.parse(e,t,o,a)})}}function W1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X1{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,o=t.length;i<o;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let o=t.cache.get(i);if(o)return o;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const g=new ft(16777215);f.color!==void 0&&g.setRGB(f.color[0],f.color[1],f.color[2],Fn);const p=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new YE(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new XE(g),d.distance=p;break;case"spot":d=new Lv(g),d.distance=p,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),ir(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),o=Promise.resolve(d),t.cache.add(i,o),o}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return i._getNodeRef(t.cache,u,f)})}}class j1{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return ms}extendParams(e,t,i){const o=[];e.color=new ft(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Fn),e.opacity=c[3]}a.baseColorTexture!==void 0&&o.push(i.assignTexture(e,"map",a.baseColorTexture,pn))}return Promise.all(o)}}class Y1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class K1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(u,u)}return Promise.all(a)}}class q1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class $1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class Z1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ft(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=o.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Fn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,pn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class J1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class Q1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new ft().setRGB(u[0],u[1],u[2],Fn),Promise.all(a)}}class eR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class tR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new ft().setRGB(u[0],u[1],u[2],Fn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,pn)),Promise.all(a)}}class nR{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class iR{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class rR{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,o=i.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const a=o.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class sR{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=o.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return i.loadTextureImage(e,c.source,f)}}class oR{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=o.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return i.loadTextureImage(e,c.source,f)}}class aR{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const o=i.extensions[this.name],a=this.parser.getDependency("buffer",o.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=o.byteOffset||0,d=o.byteLength||0,g=o.count,p=o.byteStride,_=new Uint8Array(u,f,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(g,p,_,o.mode,o.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(g*p);return c.decodeGltfBuffer(new Uint8Array(y),g,p,_,o.mode,o.filter),y})})}else return null}}class lR{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const o=t.meshes[i.mesh];for(const d of o.primitives)if(d.mode!==li.TRIANGLES&&d.mode!==li.TRIANGLE_STRIP&&d.mode!==li.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],f={};for(const d in c)u.push(this.parser.getDependency("accessor",c[d]).then(g=>(f[d]=g,f[d])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(d=>{const g=d.pop(),p=g.isGroup?g.children:[g],_=d[0].count,y=[];for(const E of p){const M=new mt,S=new X,x=new Ni,D=new X(1,1,1),P=new yE(E.geometry,E.material,_);for(let R=0;R<_;R++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,R),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,R),f.SCALE&&D.fromBufferAttribute(f.SCALE,R),P.setMatrixAt(R,M.compose(S,x,D));for(const R in f)if(R==="_COLOR_0"){const U=f[R];P.instanceColor=new $f(U.array,U.itemSize,U.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&E.geometry.setAttribute(R,f[R]);$t.prototype.copy.call(P,E),this.parser.assignFinalMaterial(P),y.push(P)}return g.isGroup?(g.clear(),g.add(...y),g):y[0]}))}}const kv="glTF",va=12,L_={JSON:1313821514,BIN:5130562};class cR{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,va),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-va,a=new DataView(e,va);let c=0;for(;c<o;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===L_.JSON){const d=new Uint8Array(e,va+c,u);this.content=i.decode(d)}else if(f===L_.BIN){const d=va+c;this.body=e.slice(d,d+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,o=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},d={};for(const g in c){const p=Qf[g]||g.toLowerCase();u[p]=c[g]}for(const g in e.attributes){const p=Qf[g]||g.toLowerCase();if(c[g]!==void 0){const _=i.accessors[e.attributes[g]],y=go[_.componentType];d[p]=y.name,f[p]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(g){return new Promise(function(p,_){o.decodeDracoFile(g,function(y){for(const E in y.attributes){const M=y.attributes[E],S=f[E];S!==void 0&&(M.normalized=S)}p(y)},u,d,Fn,_)})})}}class hR{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fR{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class Bv extends Oa{constructor(e,t,i,o){super(e,t,i,o)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o*3+o;for(let c=0;c!==o;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,d=u*3,g=o-t,p=(i-t)/g,_=p*p,y=_*p,E=e*d,M=E-d,S=-2*y+3*_,x=y-_,D=1-S,P=x-_+p;for(let R=0;R!==u;R++){const U=c[M+R+u],z=c[M+R+f]*g,O=c[E+R+u],Y=c[E+R]*g;a[R]=D*U+P*z+S*O+x*Y}return a}}const dR=new Ni;class pR extends Bv{interpolate_(e,t,i,o){const a=super.interpolate_(e,t,i,o);return dR.fromArray(a).normalize().toArray(a),a}}const li={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},go={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},D_={9728:Nn,9729:Jn,9984:nv,9985:yc,9986:xa,9987:rr},I_={33071:Br,33648:bc,10497:yo},nf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mR={CUBICSPLINE:void 0,LINEAR:La,STEP:Pa},rf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gR(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:lr})),s.DefaultMaterial}function hs(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ir(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _R(s,e,t){let i=!1,o=!1,a=!1;for(let d=0,g=e.length;d<g;d++){const p=e[d];if(p.POSITION!==void 0&&(i=!0),p.NORMAL!==void 0&&(o=!0),p.COLOR_0!==void 0&&(a=!0),i&&o&&a)break}if(!i&&!o&&!a)return Promise.resolve(s);const c=[],u=[],f=[];for(let d=0,g=e.length;d<g;d++){const p=e[d];if(i){const _=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):s.attributes.position;c.push(_)}if(o){const _=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):s.attributes.normal;u.push(_)}if(a){const _=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):s.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(d){const g=d[0],p=d[1],_=d[2];return i&&(s.morphAttributes.position=g),o&&(s.morphAttributes.normal=p),a&&(s.morphAttributes.color=_),s.morphTargetsRelative=!0,s})}function vR(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,o=t.length;i<o;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xR(s){let e;const t=s.extensions&&s.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sf(t.attributes):e=s.indices+":"+sf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,o=s.targets.length;i<o;i++)e+=":"+sf(s.targets[i]);return e}function sf(s){let e="";const t=Object.keys(s).sort();for(let i=0,o=t.length;i<o;i++)e+=t[i]+":"+s[t[i]]+";";return e}function ed(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yR(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const SR=new mt;class ER{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,o=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);o=i&&f?parseInt(f[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&o<17||a&&c<98?this.textureLoader=new VE(this.options.manager):this.textureLoader=new KE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,o=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][o.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:o.asset,parser:i,userData:{}};return hs(a,u,o),ir(u,o),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let o=0,a=t.length;o<a;o++){const c=t[o].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let o=0,a=e.length;o<a;o++){const c=e[o];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const o=i.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[d,g]of c.children.entries())a(g,u.children[d])};return a(i,o),o.name+="_instance_"+e.uses[t]++,o}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const o=e(t[i]);if(o)return o}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let o=0;o<t.length;o++){const a=e(t[o]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let o=this.cache.get(i);if(!o){switch(e){case"scene":o=this.loadScene(t);break;case"node":o=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":o=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":o=this.loadAccessor(t);break;case"bufferView":o=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":o=this.loadBuffer(t);break;case"material":o=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":o=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":o=this.loadSkin(t);break;case"animation":o=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":o=this.loadCamera(t);break;default:if(o=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(i,o)}return o}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(o.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(a,c){i.load(Ma.resolveURL(t.uri,o.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const o=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+o)})}loadAccessor(e){const t=this,i=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const c=nf[o.type],u=go[o.componentType],f=o.normalized===!0,d=new u(o.count*c);return Promise.resolve(new Un(d,c,f))}const a=[];return o.bufferView!==void 0?a.push(this.getDependency("bufferView",o.bufferView)):a.push(null),o.sparse!==void 0&&(a.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=nf[o.type],d=go[o.componentType],g=d.BYTES_PER_ELEMENT,p=g*f,_=o.byteOffset||0,y=o.bufferView!==void 0?i.bufferViews[o.bufferView].byteStride:void 0,E=o.normalized===!0;let M,S;if(y&&y!==p){const x=Math.floor(_/y),D="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+x+":"+o.count;let P=t.cache.get(D);P||(M=new d(u,x*y,o.count*y/g),P=new mE(M,y/g),t.cache.add(D,P)),S=new md(P,f,_%y/g,E)}else u===null?M=new d(o.count*f):M=new d(u,_,o.count*f),S=new Un(M,f,E);if(o.sparse!==void 0){const x=nf.SCALAR,D=go[o.sparse.indices.componentType],P=o.sparse.indices.byteOffset||0,R=o.sparse.values.byteOffset||0,U=new D(c[1],P,o.sparse.count*x),z=new d(c[2],R,o.sparse.count*f);u!==null&&(S=new Un(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let O=0,Y=U.length;O<Y;O++){const C=U[O];if(S.setX(C,z[O*f]),f>=2&&S.setY(C,z[O*f+1]),f>=3&&S.setZ(C,z[O*f+2]),f>=4&&S.setW(C,z[O*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const o=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,i).then(function(g){g.flipY=!1,g.name=c.name||u.name||"",g.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(g.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return g.magFilter=D_[_.magFilter]||Jn,g.minFilter=D_[_.minFilter]||rr,g.wrapS=I_[_.wrapS]||yo,g.wrapT=I_[_.wrapT]||yo,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Nn&&g.minFilter!==Jn,o.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const i=this,o=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const c=o.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",d=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(p){d=!0;const _=new Blob([p],{type:c.mimeType});return f=u.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(f).then(function(p){return new Promise(function(_,y){let E=_;t.isImageBitmapLoader===!0&&(E=function(M){const S=new mn(M);S.needsUpdate=!0,_(S)}),t.load(Ma.resolveURL(p,a.path),E,void 0,y)})}).then(function(p){return d===!0&&u.revokeObjectURL(f),ir(p,c),p.userData.mimeType=c.mimeType||yR(c.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),p});return this.sourceCache[e]=g,g}assignTexture(e,t,i,o){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[yt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return o!==void 0&&(c.colorSpace=o),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const o=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new Av,Di.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(u,f)),i=f}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new wv,Di.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(u,f)),i=f}if(o||a||c){let u="ClonedMaterial:"+i.uuid+":";o&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),o&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return xd}loadMaterial(e){const t=this,i=this.json,o=this.extensions,a=i.materials[e];let c;const u={},f=a.extensions||{},d=[];if(f[yt.KHR_MATERIALS_UNLIT]){const p=o[yt.KHR_MATERIALS_UNLIT];c=p.getMaterialType(),d.push(p.extendParams(u,a,t))}else{const p=a.pbrMetallicRoughness||{};if(u.color=new ft(1,1,1),u.opacity=1,Array.isArray(p.baseColorFactor)){const _=p.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],Fn),u.opacity=_[3]}p.baseColorTexture!==void 0&&d.push(t.assignTexture(u,"map",p.baseColorTexture,pn)),u.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,u.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(u,"metalnessMap",p.metallicRoughnessTexture)),d.push(t.assignTexture(u,"roughnessMap",p.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Pi);const g=a.alphaMode||rf.OPAQUE;if(g===rf.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,g===rf.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==ms&&(d.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new ct(1,1),a.normalTexture.scale!==void 0)){const p=a.normalTexture.scale;u.normalScale.set(p,p)}if(a.occlusionTexture!==void 0&&c!==ms&&(d.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==ms){const p=a.emissiveFactor;u.emissive=new ft().setRGB(p[0],p[1],p[2],Fn)}return a.emissiveTexture!==void 0&&c!==ms&&d.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,pn)),Promise.all(d).then(function(){const p=new c(u);return a.name&&(p.name=a.name),ir(p,a),t.associations.set(p,{materials:e}),a.extensions&&hs(o,p,a),p})}createUniqueName(e){const t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,o=this.primitiveCache;function a(u){return i[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return N_(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const d=e[u],g=xR(d),p=o[g];if(p)c.push(p.promise);else{let _;d.extensions&&d.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?_=a(d):_=N_(new ki,d,t),o[g]={primitive:d,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,o=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let f=0,d=c.length;f<d;f++){const g=c[f].material===void 0?gR(this.cache):this.getDependency("material",c[f].material);u.push(g)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const d=f.slice(0,f.length-1),g=f[f.length-1],p=[];for(let y=0,E=g.length;y<E;y++){const M=g[y],S=c[y];let x;const D=d[y];if(S.mode===li.TRIANGLES||S.mode===li.TRIANGLE_STRIP||S.mode===li.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new _E(M,D):new Qn(M,D),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===li.TRIANGLE_STRIP?x.geometry=P_(x.geometry,uv):S.mode===li.TRIANGLE_FAN&&(x.geometry=P_(x.geometry,Kf));else if(S.mode===li.LINES)x=new TE(M,D);else if(S.mode===li.LINE_STRIP)x=new vd(M,D);else if(S.mode===li.LINE_LOOP)x=new wE(M,D);else if(S.mode===li.POINTS)x=new AE(M,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&vR(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),ir(x,a),S.extensions&&hs(o,x,S),t.assignFinalMaterial(x),p.push(x)}for(let y=0,E=p.length;y<E;y++)t.associations.set(p[y],{meshes:e,primitives:y});if(p.length===1)return a.extensions&&hs(o,p[0],a),p[0];const _=new gs;a.extensions&&hs(o,_,a),t.associations.set(_,{meshes:e});for(let y=0,E=p.length;y<E;y++)_.add(p[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],o=i[i.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new In(dv.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):i.type==="orthographic"&&(t=new Ed(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ir(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let o=0,a=t.joints.length;o<a;o++)i.push(this._loadNodeShallow(t.joints[o]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(o){const a=o.pop(),c=o,u=[],f=[];for(let d=0,g=c.length;d<g;d++){const p=c[d];if(p){u.push(p);const _=new mt;a!==null&&_.fromArray(a.array,d*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new gd(u,f)})}loadAnimation(e){const t=this.json,i=this,o=t.animations[e],a=o.name?o.name:"animation_"+e,c=[],u=[],f=[],d=[],g=[];for(let p=0,_=o.channels.length;p<_;p++){const y=o.channels[p],E=o.samplers[y.sampler],M=y.target,S=M.node,x=o.parameters!==void 0?o.parameters[E.input]:E.input,D=o.parameters!==void 0?o.parameters[E.output]:E.output;M.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",D)),d.push(E),g.push(M))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(d),Promise.all(g)]).then(function(p){const _=p[0],y=p[1],E=p[2],M=p[3],S=p[4],x=[];for(let D=0,P=_.length;D<P;D++){const R=_[D],U=y[D],z=E[D],O=M[D],Y=S[D];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const C=i._createAnimationTracks(R,U,z,O,Y);if(C)for(let b=0;b<C.length;b++)x.push(C[b])}return new UE(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,o=t.nodes[e];return o.mesh===void 0?null:i.getDependency("mesh",o.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,o.mesh,a);return o.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,d=o.weights.length;f<d;f++)u.morphTargetInfluences[f]=o.weights[f]}),c})}loadNode(e){const t=this.json,i=this,o=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=o.children||[];for(let d=0,g=u.length;d<g;d++)c.push(i.getDependency("node",u[d]));const f=o.skin===void 0?Promise.resolve(null):i.getDependency("skin",o.skin);return Promise.all([a,Promise.all(c),f]).then(function(d){const g=d[0],p=d[1],_=d[2];_!==null&&g.traverse(function(y){y.isSkinnedMesh&&y.bind(_,SR)});for(let y=0,E=p.length;y<E;y++)g.add(p[y]);return g})}_loadNodeShallow(e){const t=this.json,i=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?o.createUniqueName(a.name):"",u=[],f=o._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(o.getDependency("camera",a.camera).then(function(d){return o._getNodeRef(o.cameraCache,a.camera,d)})),o._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){u.push(d)}),this.nodeCache[e]=Promise.all(u).then(function(d){let g;if(a.isBone===!0?g=new Mv:d.length>1?g=new gs:d.length===1?g=d[0]:g=new $t,g!==d[0])for(let p=0,_=d.length;p<_;p++)g.add(d[p]);if(a.name&&(g.userData.name=a.name,g.name=c),ir(g,a),a.extensions&&hs(i,g,a),a.matrix!==void 0){const p=new mt;p.fromArray(a.matrix),g.applyMatrix4(p)}else a.translation!==void 0&&g.position.fromArray(a.translation),a.rotation!==void 0&&g.quaternion.fromArray(a.rotation),a.scale!==void 0&&g.scale.fromArray(a.scale);if(!o.associations.has(g))o.associations.set(g,{});else if(a.mesh!==void 0&&o.meshCache.refs[a.mesh]>1){const p=o.associations.get(g);o.associations.set(g,{...p})}return o.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],o=this,a=new gs;i.name&&(a.name=o.createUniqueName(i.name)),ir(a,i),i.extensions&&hs(t,a,i);const c=i.nodes||[],u=[];for(let f=0,d=c.length;f<d;f++)u.push(o.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let g=0,p=f.length;g<p;g++)a.add(f[g]);const d=g=>{const p=new Map;for(const[_,y]of o.associations)(_ instanceof Di||_ instanceof mn)&&p.set(_,y);return g.traverse(_=>{const y=o.associations.get(_);y!=null&&p.set(_,y)}),p};return o.associations=d(a),a})}_createAnimationTracks(e,t,i,o,a){const c=[],u=e.name?e.name:e.uuid,f=[];Ur[a.path]===Ur.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(u);let d;switch(Ur[a.path]){case Ur.weights:d=Mo;break;case Ur.rotation:d=To;break;case Ur.translation:case Ur.scale:d=wo;break;default:switch(i.itemSize){case 1:d=Mo;break;case 2:case 3:default:d=wo;break}break}const g=o.interpolation!==void 0?mR[o.interpolation]:La,p=this._getArrayFromAccessor(i);for(let _=0,y=f.length;_<y;_++){const E=new d(f[_]+"."+Ur[a.path],t.array,p,g);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),c.push(E)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ed(t.constructor),o=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)o[a]=t[a]*i;t=o}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const o=this instanceof To?pR:Bv;return new o(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MR(s,e,t){const i=e.attributes,o=new Fi;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],f=u.min,d=u.max;if(f!==void 0&&d!==void 0){if(o.set(new X(f[0],f[1],f[2]),new X(d[0],d[1],d[2])),u.normalized){const g=ed(go[u.componentType]);o.min.multiplyScalar(g),o.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new X,f=new X;for(let d=0,g=a.length;d<g;d++){const p=a[d];if(p.POSITION!==void 0){const _=t.json.accessors[p.POSITION],y=_.min,E=_.max;if(y!==void 0&&E!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),_.normalized){const M=ed(go[_.componentType]);f.multiplyScalar(M)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(u)}s.boundingBox=o;const c=new Oi;o.getCenter(c.center),c.radius=o.min.distanceTo(o.max)/2,s.boundingSphere=c}function N_(s,e,t){const i=e.attributes,o=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){s.setAttribute(u,f)})}for(const c in i){const u=Qf[c]||c.toLowerCase();u in s.attributes||o.push(a(i[c],u))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(u){s.setIndex(u)});o.push(c)}return wt.workingColorSpace!==Fn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),ir(s,e),MR(s,e,t),Promise.all(o).then(function(){return e.targets!==void 0?_R(s,e.targets,t):s})}const U_={type:"change"},Ad={type:"start"},zv={type:"end"},vc=new Ua,F_=new Fr,TR=Math.cos(70*dv.DEG2RAD),an=new X,Gn=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},of=1e-6;class wR extends sM{constructor(e,t=null){super(e,t),this.state=Ot.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:co.ROTATE,TWO:co.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Ni,this._lastTargetPosition=new X,this._quat=new Ni().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new r_,this._sphericalDelta=new r_,this._scale=1,this._panOffset=new X,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new X,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RR.bind(this),this._onPointerDown=AR.bind(this),this._onPointerUp=bR.bind(this),this._onContextMenu=UR.bind(this),this._onMouseWheel=LR.bind(this),this._onKeyDown=DR.bind(this),this._onTouchStart=IR.bind(this),this._onTouchMove=NR.bind(this),this._onMouseDown=CR.bind(this),this._onMouseMove=PR.bind(this),this._interceptControlDown=FR.bind(this),this._interceptControlUp=OR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(U_),this.update(),this.state=Ot.NONE}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=Gn:i>Math.PI&&(i-=Gn),o<-Math.PI?o+=Gn:o>Math.PI&&(o-=Gn),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=an.length();c=this._clampDistance(u*this._scale);const f=u-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const u=new X(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(u),this.object.updateMatrixWorld(),c=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(vc.origin.copy(this.object.position),vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vc.direction))<TR?this.object.lookAt(this.target):(F_.setFromNormalAndCoplanarPoint(this.object.up,this.target),vc.intersectPlane(F_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>of||8*(1-this._lastQuaternion.dot(this.object.quaternion))>of||this._lastTargetPosition.distanceToSquared(this.target)>of?(this.dispatchEvent(U_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;an.copy(o).sub(this.target);let a=an.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=o/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ct,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function AR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function RR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function bR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zv),this.state=Ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function CR(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ot.DOLLY;break;case ho.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ot.ROTATE}break;case ho.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Ad)}function PR(s){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function LR(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(s.preventDefault(),this.dispatchEvent(Ad),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(zv))}function DR(s){this.enabled!==!1&&this._handleKeyDown(s)}function IR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case co.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ot.TOUCH_ROTATE;break;case co.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case co.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ot.TOUCH_DOLLY_PAN;break;case co.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Ad)}function NR(s){switch(this._trackPointer(s),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ot.NONE}}function UR(s){this.enabled!==!1&&s.preventDefault()}function FR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function OR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kR=()=>{const s=Ie.useRef();return Ie.useEffect(()=>{const e=new V1({antialias:!0});e.outputColorSpace=pn,e.setSize(window.innerWidth,window.innerHeight),e.setClearColor(0),e.setPixelRatio(window.devicePixelRatio),e.shadowMap.enabled=!0,e.shadowMap.type=Q_,s.current.appendChild(e.domElement);const t=new pE,i=new In(45,window.innerWidth/window.innerHeight,1,1e3);i.position.set(8,7,18);const o=new wR(i,e.domElement);o.enableDamping=!0,o.enablePan=!1,o.minDistance=5,o.maxDistance=20,o.minPolarAngle=0,o.maxPolarAngle=Math.PI,o.autoRotate=!1,o.target=new X(0,2,0),o.update();const a=new Lv(16777215,3e3,100,.22,1);a.position.set(0,25,0),a.castShadow=!0,a.shadow.bias=-1e-4,t.add(a),new G1().load("scene.gltf",g=>{console.log("loading model");const p=g.scene;p.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)});const y=new Fi().setFromObject(p).getSize(new X);let E=1;y.length()>3&&(E=3/y.length()),p.scale.setScalar(E),p.position.set(0,1.05,1),t.add(p);const M=document.getElementById("progress-container");M&&(M.style.display="none")},g=>{console.log(`loading ${g.loaded/g.total*100}%`)},g=>{console.error(g)});const u=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",u);let f;function d(){f=requestAnimationFrame(d),o.update(),e.render(t,i)}return d(),()=>{f&&cancelAnimationFrame(f),window.removeEventListener("resize",u),o.dispose(),e.dispose(),s.current&&e.domElement.parentNode===s.current&&s.current.removeChild(e.domElement),t.traverse(g=>{g.geometry&&g.geometry.dispose(),g.material&&(Array.isArray(g.material)?g.material.forEach(p=>p.dispose()):g.material.dispose())})}},[]),ge.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[ge.jsxs("div",{children:[ge.jsx("h1",{style:{textAlign:"center",fontSize:"2rem",padding:"1rem 0",color:"white",background:"#222"},children:"3D Render"}),ge.jsx("div",{className:"border"})]}),ge.jsx("div",{ref:s,style:{flex:1,minHeight:0,minWidth:0,position:"relative"}})]})};function BR({menuOpen:s,setMenuOpen:e}){return ge.jsxs(ge.Fragment,{children:[ge.jsx(Iy,{menuOpen:s,setMenuOpen:e}),ge.jsx(Ny,{menuOpen:s,setMenuOpen:e}),ge.jsx(Uy,{}),ge.jsx(Fy,{}),ge.jsx(Oy,{})]})}function zR(){const[s,e]=Ie.useState(!1),[t,i]=Ie.useState(!1);return s?ge.jsx("div",{className:`min-h-screen transition-opacity duration-700 ${s?"opacity-100":"opacity-0"} bg-black text-gray-100`,children:ge.jsx(by,{basename:"/bioreactor",children:ge.jsxs(Sy,{children:[ge.jsx(lf,{path:"/",element:ge.jsx(BR,{menuOpen:t,setMenuOpen:i})}),ge.jsx(lf,{path:"/contact",element:ge.jsx(kR,{})})]})})}):ge.jsx(Dy,{onComplete:()=>e(!0)})}Cx.createRoot(document.getElementById("root")).render(ge.jsx(k_.StrictMode,{children:ge.jsx(zR,{})}));
