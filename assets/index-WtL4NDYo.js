(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function X_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mh={exports:{}},da={},Th={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Cx(){if(og)return _t;og=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(U,te,ze){this.props=U,this.context=te,this.refs=M,this.updater=ze||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(U,te,ze){this.props=U,this.context=te,this.refs=M,this.updater=ze||y}var b=L.prototype=new x;b.constructor=L,E(b,S.prototype),b.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,B={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function j(U,te,ze){var Be,Z={},me=null,pe=null;if(te!=null)for(Be in te.ref!==void 0&&(pe=te.ref),te.key!==void 0&&(me=""+te.key),te)N.call(te,Be)&&!F.hasOwnProperty(Be)&&(Z[Be]=te[Be]);var be=arguments.length-2;if(be===1)Z.children=ze;else if(1<be){for(var De=Array(be),Je=0;Je<be;Je++)De[Je]=arguments[Je+2];Z.children=De}if(U&&U.defaultProps)for(Be in be=U.defaultProps,be)Z[Be]===void 0&&(Z[Be]=be[Be]);return{$$typeof:s,type:U,key:me,ref:pe,props:Z,_owner:B.current}}function C(U,te){return{$$typeof:s,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function P(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function O(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ze){return te[ze]})}var le=/\/+/g;function ne(U,te){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):te.toString(36)}function ae(U,te,ze,Be,Z){var me=typeof U;(me==="undefined"||me==="boolean")&&(U=null);var pe=!1;if(U===null)pe=!0;else switch(me){case"string":case"number":pe=!0;break;case"object":switch(U.$$typeof){case s:case e:pe=!0}}if(pe)return pe=U,Z=Z(pe),U=Be===""?"."+ne(pe,0):Be,A(Z)?(ze="",U!=null&&(ze=U.replace(le,"$&/")+"/"),ae(Z,te,ze,"",function(Je){return Je})):Z!=null&&(P(Z)&&(Z=C(Z,ze+(!Z.key||pe&&pe.key===Z.key?"":(""+Z.key).replace(le,"$&/")+"/")+U)),te.push(Z)),1;if(pe=0,Be=Be===""?".":Be+":",A(U))for(var be=0;be<U.length;be++){me=U[be];var De=Be+ne(me,be);pe+=ae(me,te,ze,De,Z)}else if(De=_(U),typeof De=="function")for(U=De.call(U),be=0;!(me=U.next()).done;)me=me.value,De=Be+ne(me,be++),pe+=ae(me,te,ze,De,Z);else if(me==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return pe}function fe(U,te,ze){if(U==null)return U;var Be=[],Z=0;return ae(U,Be,"","",function(me){return te.call(ze,me,Z++)}),Be}function se(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(ze){(U._status===0||U._status===-1)&&(U._status=1,U._result=ze)},function(ze){(U._status===0||U._status===-1)&&(U._status=2,U._result=ze)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},H={transition:null},oe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:B};function ie(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:fe,forEach:function(U,te,ze){fe(U,function(){te.apply(this,arguments)},ze)},count:function(U){var te=0;return fe(U,function(){te++}),te},toArray:function(U){return fe(U,function(te){return te})||[]},only:function(U){if(!P(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},_t.Component=S,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=L,_t.StrictMode=i,_t.Suspense=f,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,_t.act=ie,_t.cloneElement=function(U,te,ze){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Be=E({},U.props),Z=U.key,me=U.ref,pe=U._owner;if(te!=null){if(te.ref!==void 0&&(me=te.ref,pe=B.current),te.key!==void 0&&(Z=""+te.key),U.type&&U.type.defaultProps)var be=U.type.defaultProps;for(De in te)N.call(te,De)&&!F.hasOwnProperty(De)&&(Be[De]=te[De]===void 0&&be!==void 0?be[De]:te[De])}var De=arguments.length-2;if(De===1)Be.children=ze;else if(1<De){be=Array(De);for(var Je=0;Je<De;Je++)be[Je]=arguments[Je+2];Be.children=be}return{$$typeof:s,type:U.type,key:Z,ref:me,props:Be,_owner:pe}},_t.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},_t.createElement=j,_t.createFactory=function(U){var te=j.bind(null,U);return te.type=U,te},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:c,render:U}},_t.isValidElement=P,_t.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:se}},_t.memo=function(U,te){return{$$typeof:d,type:U,compare:te===void 0?null:te}},_t.startTransition=function(U){var te=H.transition;H.transition={};try{U()}finally{H.transition=te}},_t.unstable_act=ie,_t.useCallback=function(U,te){return ce.current.useCallback(U,te)},_t.useContext=function(U){return ce.current.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},_t.useEffect=function(U,te){return ce.current.useEffect(U,te)},_t.useId=function(){return ce.current.useId()},_t.useImperativeHandle=function(U,te,ze){return ce.current.useImperativeHandle(U,te,ze)},_t.useInsertionEffect=function(U,te){return ce.current.useInsertionEffect(U,te)},_t.useLayoutEffect=function(U,te){return ce.current.useLayoutEffect(U,te)},_t.useMemo=function(U,te){return ce.current.useMemo(U,te)},_t.useReducer=function(U,te,ze){return ce.current.useReducer(U,te,ze)},_t.useRef=function(U){return ce.current.useRef(U)},_t.useState=function(U){return ce.current.useState(U)},_t.useSyncExternalStore=function(U,te,ze){return ce.current.useSyncExternalStore(U,te,ze)},_t.useTransition=function(){return ce.current.useTransition()},_t.version="18.3.1",_t}var ag;function ud(){return ag||(ag=1,Th.exports=Cx()),Th.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Px(){if(lg)return da;lg=1;var s=ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,f,d){var p,g={},_=null,y=null;d!==void 0&&(_=""+d),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(g[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)g[p]===void 0&&(g[p]=f[p]);return{$$typeof:e,type:c,key:_,ref:y,props:g,_owner:o.current}}return da.Fragment=t,da.jsx=u,da.jsxs=u,da}var ug;function Lx(){return ug||(ug=1,Mh.exports=Px()),Mh.exports}var ve=Lx(),he=ud();const Dx=X_(he);var $l={},wh={exports:{}},Vn={},Ah={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Ix(){return cg||(cg=1,(function(s){function e(H,oe){var ie=H.length;H.push(oe);e:for(;0<ie;){var U=ie-1>>>1,te=H[U];if(0<o(te,oe))H[U]=oe,H[ie]=te,ie=U;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var oe=H[0],ie=H.pop();if(ie!==oe){H[0]=ie;e:for(var U=0,te=H.length,ze=te>>>1;U<ze;){var Be=2*(U+1)-1,Z=H[Be],me=Be+1,pe=H[me];if(0>o(Z,ie))me<te&&0>o(pe,Z)?(H[U]=pe,H[me]=ie,U=me):(H[U]=Z,H[Be]=ie,U=Be);else if(me<te&&0>o(pe,ie))H[U]=pe,H[me]=ie,U=me;else break e}}return oe}function o(H,oe){var ie=H.sortIndex-oe.sortIndex;return ie!==0?ie:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();s.unstable_now=function(){return u.now()-c}}var f=[],d=[],p=1,g=null,_=3,y=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(H){for(var oe=t(d);oe!==null;){if(oe.callback===null)i(d);else if(oe.startTime<=H)i(d),oe.sortIndex=oe.expirationTime,e(f,oe);else break;oe=t(d)}}function A(H){if(M=!1,b(H),!E)if(t(f)!==null)E=!0,se(N);else{var oe=t(d);oe!==null&&ce(A,oe.startTime-H)}}function N(H,oe){E=!1,M&&(M=!1,x(j),j=-1),y=!0;var ie=_;try{for(b(oe),g=t(f);g!==null&&(!(g.expirationTime>oe)||H&&!O());){var U=g.callback;if(typeof U=="function"){g.callback=null,_=g.priorityLevel;var te=U(g.expirationTime<=oe);oe=s.unstable_now(),typeof te=="function"?g.callback=te:g===t(f)&&i(f),b(oe)}else i(f);g=t(f)}if(g!==null)var ze=!0;else{var Be=t(d);Be!==null&&ce(A,Be.startTime-oe),ze=!1}return ze}finally{g=null,_=ie,y=!1}}var B=!1,F=null,j=-1,C=5,P=-1;function O(){return!(s.unstable_now()-P<C)}function le(){if(F!==null){var H=s.unstable_now();P=H;var oe=!0;try{oe=F(!0,H)}finally{oe?ne():(B=!1,F=null)}}else B=!1}var ne;if(typeof L=="function")ne=function(){L(le)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,fe=ae.port2;ae.port1.onmessage=le,ne=function(){fe.postMessage(null)}}else ne=function(){S(le,0)};function se(H){F=H,B||(B=!0,ne())}function ce(H,oe){j=S(function(){H(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,se(N))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var ie=_;_=oe;try{return H()}finally{_=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=_;_=H;try{return oe()}finally{_=ie}},s.unstable_scheduleCallback=function(H,oe,ie){var U=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?U+ie:U):ie=U,H){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ie+te,H={id:p++,callback:oe,priorityLevel:H,startTime:ie,expirationTime:te,sortIndex:-1},ie>U?(H.sortIndex=ie,e(d,H),t(f)===null&&H===t(d)&&(M?(x(j),j=-1):M=!0,ce(A,ie-U))):(H.sortIndex=te,e(f,H),E||y||(E=!0,se(N))),H},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(H){var oe=_;return function(){var ie=_;_=oe;try{return H.apply(this,arguments)}finally{_=ie}}}})(Rh)),Rh}var hg;function Nx(){return hg||(hg=1,Ah.exports=Ix()),Ah.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function Ux(){if(fg)return Vn;fg=1;var s=ud(),e=Nx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function _(n){return f.call(g,n)?!0:f.call(p,n)?!1:d.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,h){if(r===null||typeof r>"u"||y(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,h,m,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);S[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,r,l,h){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,h)&&(l=null),h||m===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,h=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),B=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,U;function te(n){if(U===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var ze=!1;function Be(n,r){if(!n||ze)return"";ze=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(J){var h=J}Reflect.construct(n,[],r)}else{try{r.call()}catch(J){h=J}n.call(r.prototype)}else{try{throw Error()}catch(J){h=J}n()}}catch(J){if(J&&h&&typeof J.stack=="string"){for(var m=J.stack.split(`
`),v=h.stack.split(`
`),T=m.length-1,I=v.length-1;1<=T&&0<=I&&m[T]!==v[I];)I--;for(;1<=T&&0<=I;T--,I--)if(m[T]!==v[I]){if(T!==1||I!==1)do if(T--,I--,0>I||m[T]!==v[I]){var z=`
`+m[T].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=T&&0<=I);break}}}finally{ze=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?te(n):""}function Z(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Be(n.type,!1),n;case 11:return n=Be(n.type.render,!1),n;case 1:return n=Be(n.type,!0),n;default:return""}}function me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case B:return"Portal";case C:return"Profiler";case j:return"StrictMode";case ne:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case le:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return r=n.displayName||null,r!==null?r:me(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return me(n(r))}catch{}}return null}function pe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(r);case 8:return r===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Je(n){var r=De(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(T){h=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ht(n){n._valueTracker||(n._valueTracker=Je(n))}function St(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=De(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function k(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ct(n,r){var l=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Qe(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=be(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Et(n,r){r=r.checked,r!=null&&b(n,"checked",r,!1)}function $e(n,r){Et(n,r);var l=be(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Oe(n,r.type,l):r.hasOwnProperty("defaultValue")&&Oe(n,r.type,be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function kt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Oe(n,r,l){(r!=="number"||k(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var ct=Array.isArray;function Gt(n,r,l,h){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&h&&(n[l].defaultSelected=!0)}else{for(l=""+be(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,h&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function Wt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(ct(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:be(l)}}function w(n,r){var l=be(r.value),h=be(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function q(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ae(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){qe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),He[r]=He[n]})});function Te(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||He.hasOwnProperty(n)&&He[n]?(""+r).trim():r+"px"}function Ie(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,m=Te(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,m):n[l]=m}}var rt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,r){if(r){if(rt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ce(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ee=null,Re=null,Ne=null;function Se(n){if(n=Jo(n)){if(typeof Ee!="function")throw Error(t(280));var r=n.stateNode;r&&(r=hl(r),Ee(n.stateNode,n.type,r))}}function de(n){Re?Ne?Ne.push(n):Ne=[n]:Re=n}function We(){if(Re){var n=Re,r=Ne;if(Ne=Re=null,Se(n),r)for(n=0;n<r.length;n++)Se(r[n])}}function lt(n,r){return n(r)}function Lt(){}var Mt=!1;function ei(n,r,l){if(Mt)return n(r,l);Mt=!0;try{return lt(n,r,l)}finally{Mt=!1,(Re!==null||Ne!==null)&&(Lt(),We())}}function vn(n,r){var l=n.stateNode;if(l===null)return null;var h=hl(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ts=!1;if(c)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Ts=!1}function Uo(n,r,l,h,m,v,T,I,z){var J=Array.prototype.slice.call(arguments,3);try{r.apply(l,J)}catch(_e){this.onError(_e)}}var pr=!1,Yr=null,Vi=!1,ws=null,As={onError:function(n){pr=!0,Yr=n}};function Wa(n,r,l,h,m,v,T,I,z){pr=!1,Yr=null,Uo.apply(As,arguments)}function Xa(n,r,l,h,m,v,T,I,z){if(Wa.apply(this,arguments),pr){if(pr){var J=Yr;pr=!1,Yr=null}else throw Error(t(198));Vi||(Vi=!0,ws=J)}}function Gi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ja(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ya(n){if(Gi(n)!==n)throw Error(t(188))}function ju(n){var r=n.alternate;if(!r){if(r=Gi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var m=l.return;if(m===null)break;var v=m.alternate;if(v===null){if(h=m.return,h!==null){l=h;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===l)return Ya(m),n;if(v===h)return Ya(m),r;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=m,h=v;else{for(var T=!1,I=m.child;I;){if(I===l){T=!0,l=m,h=v;break}if(I===h){T=!0,h=m,l=v;break}I=I.sibling}if(!T){for(I=v.child;I;){if(I===l){T=!0,l=v,h=m;break}if(I===h){T=!0,h=v,l=m;break}I=I.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ka(n){return n=ju(n),n!==null?qa(n):null}function qa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=qa(n);if(r!==null)return r;n=n.sibling}return null}var R=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,Q=e.unstable_shouldYield,ee=e.unstable_requestPaint,G=e.unstable_now,Me=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ve=e.unstable_UserBlockingPriority,Ue=e.unstable_NormalPriority,it=e.unstable_LowPriority,st=e.unstable_IdlePriority,Ze=null,ot=null;function Pt(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:et,Bt=Math.log,Dt=Math.LN2;function et(n){return n>>>=0,n===0?32:31-(Bt(n)/Dt|0)|0}var Ut=64,vt=4194304;function rn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ci(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,m=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var I=T&~m;I!==0?h=rn(I):(v&=T,v!==0&&(h=rn(v)))}else T=l&~m,T!==0?h=rn(T):v!==0&&(h=rn(v));if(h===0)return 0;if(r!==0&&r!==h&&(r&m)===0&&(m=h&-h,v=r&-r,m>=v||m===16&&(v&4194240)!==0))return r;if((h&4)!==0&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-Tt(r),m=1<<l,h|=n[l],r&=~m;return h}function Rn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kr(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,m=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Tt(v),I=1<<T,z=m[T];z===-1?((I&l)===0||(I&h)!==0)&&(m[T]=Rn(I,r)):z<=r&&(n.expiredLanes|=I),v&=~I}}function zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=Ut;return Ut<<=1,(Ut&4194240)===0&&(Ut=64),n}function xn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Qt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Tt(r),n[r]=l}function yn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Tt(l),v=1<<m;r[m]=0,h[m]=-1,n[m]=-1,l&=~v}}function qr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-Tt(l),m=1<<h;m&r|n[h]&r&&(n[h]|=r),l&=~m}}var xt=0;function kd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bd,Yu,zd,Hd,Vd,Ku=!1,$a=[],mr=null,gr=null,_r=null,Fo=new Map,Oo=new Map,vr=[],Zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(n,r){switch(n){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Fo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(r.pointerId)}}function ko(n,r,l,h,m,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[m]},r!==null&&(r=Jo(r),r!==null&&Yu(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function Jv(n,r,l,h,m){switch(r){case"focusin":return mr=ko(mr,n,r,l,h,m),!0;case"dragenter":return gr=ko(gr,n,r,l,h,m),!0;case"mouseover":return _r=ko(_r,n,r,l,h,m),!0;case"pointerover":var v=m.pointerId;return Fo.set(v,ko(Fo.get(v)||null,n,r,l,h,m)),!0;case"gotpointercapture":return v=m.pointerId,Oo.set(v,ko(Oo.get(v)||null,n,r,l,h,m)),!0}return!1}function Wd(n){var r=$r(n.target);if(r!==null){var l=Gi(r);if(l!==null){if(r=l.tag,r===13){if(r=ja(l),r!==null){n.blockedOn=r,Vd(n.priority,function(){zd(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Za(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=$u(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);ht=h,l.target.dispatchEvent(h),ht=null}else return r=Jo(l),r!==null&&Yu(r),n.blockedOn=l,!1;r.shift()}return!0}function Xd(n,r,l){Za(n)&&l.delete(r)}function Qv(){Ku=!1,mr!==null&&Za(mr)&&(mr=null),gr!==null&&Za(gr)&&(gr=null),_r!==null&&Za(_r)&&(_r=null),Fo.forEach(Xd),Oo.forEach(Xd)}function Bo(n,r){n.blockedOn===r&&(n.blockedOn=null,Ku||(Ku=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Qv)))}function zo(n){function r(m){return Bo(m,n)}if(0<$a.length){Bo($a[0],n);for(var l=1;l<$a.length;l++){var h=$a[l];h.blockedOn===n&&(h.blockedOn=null)}}for(mr!==null&&Bo(mr,n),gr!==null&&Bo(gr,n),_r!==null&&Bo(_r,n),Fo.forEach(r),Oo.forEach(r),l=0;l<vr.length;l++)h=vr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<vr.length&&(l=vr[0],l.blockedOn===null);)Wd(l),l.blockedOn===null&&vr.shift()}var Rs=A.ReactCurrentBatchConfig,Ja=!0;function e0(n,r,l,h){var m=xt,v=Rs.transition;Rs.transition=null;try{xt=1,qu(n,r,l,h)}finally{xt=m,Rs.transition=v}}function t0(n,r,l,h){var m=xt,v=Rs.transition;Rs.transition=null;try{xt=4,qu(n,r,l,h)}finally{xt=m,Rs.transition=v}}function qu(n,r,l,h){if(Ja){var m=$u(n,r,l,h);if(m===null)dc(n,r,h,Qa,l),Gd(n,h);else if(Jv(m,n,r,l,h))h.stopPropagation();else if(Gd(n,h),r&4&&-1<Zv.indexOf(n)){for(;m!==null;){var v=Jo(m);if(v!==null&&Bd(v),v=$u(n,r,l,h),v===null&&dc(n,r,h,Qa,l),v===m)break;m=v}m!==null&&h.stopPropagation()}else dc(n,r,h,null,l)}}var Qa=null;function $u(n,r,l,h){if(Qa=null,n=V(h),n=$r(n),n!==null)if(r=Gi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ja(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Qa=n,null}function jd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Me()){case Pe:return 1;case Ve:return 4;case Ue:case it:return 16;case st:return 536870912;default:return 16}default:return 16}}var xr=null,Zu=null,el=null;function Yd(){if(el)return el;var n,r=Zu,l=r.length,h,m="value"in xr?xr.value:xr.textContent,v=m.length;for(n=0;n<l&&r[n]===m[n];n++);var T=l-n;for(h=1;h<=T&&r[l-h]===m[v-h];h++);return el=m.slice(n,1<h?1-h:void 0)}function tl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function nl(){return!0}function Kd(){return!1}function jn(n){function r(l,h,m,v,T){this._reactName=l,this._targetInst=m,this.type=h,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?nl:Kd,this.isPropagationStopped=Kd,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),r}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=jn(bs),Ho=ie({},bs,{view:0,detail:0}),n0=jn(Ho),Qu,ec,Vo,il=ie({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vo&&(Vo&&n.type==="mousemove"?(Qu=n.screenX-Vo.screenX,ec=n.screenY-Vo.screenY):ec=Qu=0,Vo=n),Qu)},movementY:function(n){return"movementY"in n?n.movementY:ec}}),qd=jn(il),i0=ie({},il,{dataTransfer:0}),r0=jn(i0),s0=ie({},Ho,{relatedTarget:0}),tc=jn(s0),o0=ie({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),a0=jn(o0),l0=ie({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u0=jn(l0),c0=ie({},bs,{data:0}),$d=jn(c0),h0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=d0[n])?!!r[n]:!1}function nc(){return p0}var m0=ie({},Ho,{key:function(n){if(n.key){var r=h0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?f0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(n){return n.type==="keypress"?tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),g0=jn(m0),_0=ie({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=jn(_0),v0=ie({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),x0=jn(v0),y0=ie({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=jn(y0),E0=ie({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=jn(E0),T0=[9,13,27,32],ic=c&&"CompositionEvent"in window,Go=null;c&&"documentMode"in document&&(Go=document.documentMode);var w0=c&&"TextEvent"in window&&!Go,Jd=c&&(!ic||Go&&8<Go&&11>=Go),Qd=" ",ep=!1;function tp(n,r){switch(n){case"keyup":return T0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function A0(n,r){switch(n){case"compositionend":return np(r);case"keypress":return r.which!==32?null:(ep=!0,Qd);case"textInput":return n=r.data,n===Qd&&ep?null:n;default:return null}}function R0(n,r){if(Cs)return n==="compositionend"||!ic&&tp(n,r)?(n=Yd(),el=Zu=xr=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Jd&&r.locale!=="ko"?null:r.data;default:return null}}var b0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!b0[n.type]:r==="textarea"}function rp(n,r,l,h){de(h),r=ll(r,"onChange"),0<r.length&&(l=new Ju("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var Wo=null,Xo=null;function C0(n){Ep(n,0)}function rl(n){var r=Ns(n);if(St(r))return n}function P0(n,r){if(n==="change")return r}var sp=!1;if(c){var rc;if(c){var sc="oninput"in document;if(!sc){var op=document.createElement("div");op.setAttribute("oninput","return;"),sc=typeof op.oninput=="function"}rc=sc}else rc=!1;sp=rc&&(!document.documentMode||9<document.documentMode)}function ap(){Wo&&(Wo.detachEvent("onpropertychange",lp),Xo=Wo=null)}function lp(n){if(n.propertyName==="value"&&rl(Xo)){var r=[];rp(r,Xo,n,V(n)),ei(C0,r)}}function L0(n,r,l){n==="focusin"?(ap(),Wo=r,Xo=l,Wo.attachEvent("onpropertychange",lp)):n==="focusout"&&ap()}function D0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rl(Xo)}function I0(n,r){if(n==="click")return rl(r)}function N0(n,r){if(n==="input"||n==="change")return rl(r)}function U0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var hi=typeof Object.is=="function"?Object.is:U0;function jo(n,r){if(hi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var m=l[h];if(!f.call(r,m)||!hi(n[m],r[m]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cp(n,r){var l=up(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=up(l)}}function hp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?hp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function fp(){for(var n=window,r=k();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=k(n.document)}return r}function oc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function F0(n){var r=fp(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&hp(l.ownerDocument.documentElement,l)){if(h!==null&&oc(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,v=Math.min(h.start,m);h=h.end===void 0?v:Math.min(h.end,m),!n.extend&&v>h&&(m=h,h=v,v=m),m=cp(l,v);var T=cp(l,h);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),v>h?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var O0=c&&"documentMode"in document&&11>=document.documentMode,Ps=null,ac=null,Yo=null,lc=!1;function dp(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;lc||Ps==null||Ps!==k(h)||(h=Ps,"selectionStart"in h&&oc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Yo&&jo(Yo,h)||(Yo=h,h=ll(ac,"onSelect"),0<h.length&&(r=new Ju("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=Ps)))}function sl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ls={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},uc={},pp={};c&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function ol(n){if(uc[n])return uc[n];if(!Ls[n])return n;var r=Ls[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in pp)return uc[n]=r[l];return n}var mp=ol("animationend"),gp=ol("animationiteration"),_p=ol("animationstart"),vp=ol("transitionend"),xp=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(n,r){xp.set(n,r),a(r,[n])}for(var cc=0;cc<yp.length;cc++){var hc=yp[cc],k0=hc.toLowerCase(),B0=hc[0].toUpperCase()+hc.slice(1);yr(k0,"on"+B0)}yr(mp,"onAnimationEnd"),yr(gp,"onAnimationIteration"),yr(_p,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(vp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function Sp(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,Xa(h,r,void 0,n),n.currentTarget=null}function Ep(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],m=h.event;h=h.listeners;e:{var v=void 0;if(r)for(var T=h.length-1;0<=T;T--){var I=h[T],z=I.instance,J=I.currentTarget;if(I=I.listener,z!==v&&m.isPropagationStopped())break e;Sp(m,I,J),v=z}else for(T=0;T<h.length;T++){if(I=h[T],z=I.instance,J=I.currentTarget,I=I.listener,z!==v&&m.isPropagationStopped())break e;Sp(m,I,J),v=z}}}if(Vi)throw n=ws,Vi=!1,ws=null,n}function Xt(n,r){var l=r[xc];l===void 0&&(l=r[xc]=new Set);var h=n+"__bubble";l.has(h)||(Mp(r,n,2,!1),l.add(h))}function fc(n,r,l){var h=0;r&&(h|=4),Mp(l,n,h,r)}var al="_reactListening"+Math.random().toString(36).slice(2);function qo(n){if(!n[al]){n[al]=!0,i.forEach(function(l){l!=="selectionchange"&&(z0.has(l)||fc(l,!1,n),fc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[al]||(r[al]=!0,fc("selectionchange",!1,r))}}function Mp(n,r,l,h){switch(jd(r)){case 1:var m=e0;break;case 4:m=t0;break;default:m=qu}l=m.bind(null,r,l,n),m=void 0,!Ts||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),h?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function dc(n,r,l,h,m){var v=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var I=h.stateNode.containerInfo;if(I===m||I.nodeType===8&&I.parentNode===m)break;if(T===4)for(T=h.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;T=T.return}for(;I!==null;){if(T=$r(I),T===null)return;if(z=T.tag,z===5||z===6){h=v=T;continue e}I=I.parentNode}}h=h.return}ei(function(){var J=v,_e=V(l),ye=[];e:{var ge=xp.get(n);if(ge!==void 0){var Fe=Ju,Ge=n;switch(n){case"keypress":if(tl(l)===0)break e;case"keydown":case"keyup":Fe=g0;break;case"focusin":Ge="focus",Fe=tc;break;case"focusout":Ge="blur",Fe=tc;break;case"beforeblur":case"afterblur":Fe=tc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=x0;break;case mp:case gp:case _p:Fe=a0;break;case vp:Fe=S0;break;case"scroll":Fe=n0;break;case"wheel":Fe=M0;break;case"copy":case"cut":case"paste":Fe=u0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Zd}var Xe=(r&4)!==0,en=!Xe&&n==="scroll",K=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var W=J,$;W!==null;){$=W;var we=$.stateNode;if($.tag===5&&we!==null&&($=we,K!==null&&(we=vn(W,K),we!=null&&Xe.push($o(W,we,$)))),en)break;W=W.return}0<Xe.length&&(ge=new Fe(ge,Ge,null,l,_e),ye.push({event:ge,listeners:Xe}))}}if((r&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",ge&&l!==ht&&(Ge=l.relatedTarget||l.fromElement)&&($r(Ge)||Ge[Wi]))break e;if((Fe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(Ge=l.relatedTarget||l.toElement,Fe=J,Ge=Ge?$r(Ge):null,Ge!==null&&(en=Gi(Ge),Ge!==en||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Fe=null,Ge=J),Fe!==Ge)){if(Xe=qd,we="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=Zd,we="onPointerLeave",K="onPointerEnter",W="pointer"),en=Fe==null?ge:Ns(Fe),$=Ge==null?ge:Ns(Ge),ge=new Xe(we,W+"leave",Fe,l,_e),ge.target=en,ge.relatedTarget=$,we=null,$r(_e)===J&&(Xe=new Xe(K,W+"enter",Ge,l,_e),Xe.target=$,Xe.relatedTarget=en,we=Xe),en=we,Fe&&Ge)t:{for(Xe=Fe,K=Ge,W=0,$=Xe;$;$=Ds($))W++;for($=0,we=K;we;we=Ds(we))$++;for(;0<W-$;)Xe=Ds(Xe),W--;for(;0<$-W;)K=Ds(K),$--;for(;W--;){if(Xe===K||K!==null&&Xe===K.alternate)break t;Xe=Ds(Xe),K=Ds(K)}Xe=null}else Xe=null;Fe!==null&&Tp(ye,ge,Fe,Xe,!1),Ge!==null&&en!==null&&Tp(ye,en,Ge,Xe,!0)}}e:{if(ge=J?Ns(J):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var Ye=P0;else if(ip(ge))if(sp)Ye=N0;else{Ye=D0;var tt=L0}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ye=I0);if(Ye&&(Ye=Ye(n,J))){rp(ye,Ye,l,_e);break e}tt&&tt(n,ge,J),n==="focusout"&&(tt=ge._wrapperState)&&tt.controlled&&ge.type==="number"&&Oe(ge,"number",ge.value)}switch(tt=J?Ns(J):window,n){case"focusin":(ip(tt)||tt.contentEditable==="true")&&(Ps=tt,ac=J,Yo=null);break;case"focusout":Yo=ac=Ps=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,dp(ye,l,_e);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":dp(ye,l,_e)}var nt;if(ic)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Cs?tp(n,l)&&(at="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(Jd&&l.locale!=="ko"&&(Cs||at!=="onCompositionStart"?at==="onCompositionEnd"&&Cs&&(nt=Yd()):(xr=_e,Zu="value"in xr?xr.value:xr.textContent,Cs=!0)),tt=ll(J,at),0<tt.length&&(at=new $d(at,n,null,l,_e),ye.push({event:at,listeners:tt}),nt?at.data=nt:(nt=np(l),nt!==null&&(at.data=nt)))),(nt=w0?A0(n,l):R0(n,l))&&(J=ll(J,"onBeforeInput"),0<J.length&&(_e=new $d("onBeforeInput","beforeinput",null,l,_e),ye.push({event:_e,listeners:J}),_e.data=nt))}Ep(ye,r)})}function $o(n,r,l){return{instance:n,listener:r,currentTarget:l}}function ll(n,r){for(var l=r+"Capture",h=[];n!==null;){var m=n,v=m.stateNode;m.tag===5&&v!==null&&(m=v,v=vn(n,l),v!=null&&h.unshift($o(n,v,m)),v=vn(n,r),v!=null&&h.push($o(n,v,m))),n=n.return}return h}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Tp(n,r,l,h,m){for(var v=r._reactName,T=[];l!==null&&l!==h;){var I=l,z=I.alternate,J=I.stateNode;if(z!==null&&z===h)break;I.tag===5&&J!==null&&(I=J,m?(z=vn(l,v),z!=null&&T.unshift($o(l,z,I))):m||(z=vn(l,v),z!=null&&T.push($o(l,z,I)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var H0=/\r\n?/g,V0=/\u0000|\uFFFD/g;function wp(n){return(typeof n=="string"?n:""+n).replace(H0,`
`).replace(V0,"")}function ul(n,r,l){if(r=wp(r),wp(n)!==r&&l)throw Error(t(425))}function cl(){}var pc=null,mc=null;function gc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(n){return Ap.resolve(null).then(n).catch(X0)}:_c;function X0(n){setTimeout(function(){throw n})}function vc(n,r){var l=r,h=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(h===0){n.removeChild(m),zo(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=m}while(l);zo(r)}function Sr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Rp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),wi="__reactFiber$"+Is,Zo="__reactProps$"+Is,Wi="__reactContainer$"+Is,xc="__reactEvents$"+Is,j0="__reactListeners$"+Is,Y0="__reactHandles$"+Is;function $r(n){var r=n[wi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Wi]||l[wi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Rp(n);n!==null;){if(l=n[wi])return l;n=Rp(n)}return r}n=l,l=n.parentNode}return null}function Jo(n){return n=n[wi]||n[Wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function hl(n){return n[Zo]||null}var yc=[],Us=-1;function Er(n){return{current:n}}function jt(n){0>Us||(n.current=yc[Us],yc[Us]=null,Us--)}function Vt(n,r){Us++,yc[Us]=n.current,n.current=r}var Mr={},Sn=Er(Mr),On=Er(!1),Zr=Mr;function Fs(n,r){var l=n.type.contextTypes;if(!l)return Mr;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var m={},v;for(v in l)m[v]=r[v];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function kn(n){return n=n.childContextTypes,n!=null}function fl(){jt(On),jt(Sn)}function bp(n,r,l){if(Sn.current!==Mr)throw Error(t(168));Vt(Sn,r),Vt(On,l)}function Cp(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var m in h)if(!(m in r))throw Error(t(108,pe(n)||"Unknown",m));return ie({},l,h)}function dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,Zr=Sn.current,Vt(Sn,n),Vt(On,On.current),!0}function Pp(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=Cp(n,r,Zr),h.__reactInternalMemoizedMergedChildContext=n,jt(On),jt(Sn),Vt(Sn,n)):jt(On),Vt(On,l)}var Xi=null,pl=!1,Sc=!1;function Lp(n){Xi===null?Xi=[n]:Xi.push(n)}function K0(n){pl=!0,Lp(n)}function Tr(){if(!Sc&&Xi!==null){Sc=!0;var n=0,r=xt;try{var l=Xi;for(xt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Xi=null,pl=!1}catch(m){throw Xi!==null&&(Xi=Xi.slice(n+1)),R(Pe,Tr),m}finally{xt=r,Sc=!1}}return null}var Os=[],ks=0,ml=null,gl=0,ti=[],ni=0,Jr=null,ji=1,Yi="";function Qr(n,r){Os[ks++]=gl,Os[ks++]=ml,ml=n,gl=r}function Dp(n,r,l){ti[ni++]=ji,ti[ni++]=Yi,ti[ni++]=Jr,Jr=n;var h=ji;n=Yi;var m=32-Tt(h)-1;h&=~(1<<m),l+=1;var v=32-Tt(r)+m;if(30<v){var T=m-m%5;v=(h&(1<<T)-1).toString(32),h>>=T,m-=T,ji=1<<32-Tt(r)+m|l<<m|h,Yi=v+n}else ji=1<<v|l<<m|h,Yi=n}function Ec(n){n.return!==null&&(Qr(n,1),Dp(n,1,0))}function Mc(n){for(;n===ml;)ml=Os[--ks],Os[ks]=null,gl=Os[--ks],Os[ks]=null;for(;n===Jr;)Jr=ti[--ni],ti[ni]=null,Yi=ti[--ni],ti[ni]=null,ji=ti[--ni],ti[ni]=null}var Yn=null,Kn=null,Yt=!1,fi=null;function Ip(n,r){var l=oi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Np(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Yn=n,Kn=Sr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Yn=n,Kn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Jr!==null?{id:ji,overflow:Yi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=oi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Yn=n,Kn=null,!0):!1;default:return!1}}function Tc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wc(n){if(Yt){var r=Kn;if(r){var l=r;if(!Np(n,r)){if(Tc(n))throw Error(t(418));r=Sr(l.nextSibling);var h=Yn;r&&Np(n,r)?Ip(h,l):(n.flags=n.flags&-4097|2,Yt=!1,Yn=n)}}else{if(Tc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Yn=n}}}function Up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function _l(n){if(n!==Yn)return!1;if(!Yt)return Up(n),Yt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!gc(n.type,n.memoizedProps)),r&&(r=Kn)){if(Tc(n))throw Fp(),Error(t(418));for(;r;)Ip(n,r),r=Sr(r.nextSibling)}if(Up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Kn=Sr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Kn=null}}else Kn=Yn?Sr(n.stateNode.nextSibling):null;return!0}function Fp(){for(var n=Kn;n;)n=Sr(n.nextSibling)}function Bs(){Kn=Yn=null,Yt=!1}function Ac(n){fi===null?fi=[n]:fi.push(n)}var q0=A.ReactCurrentBatchConfig;function Qo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var m=h,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var I=m.refs;T===null?delete I[v]:I[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function vl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Op(n){var r=n._init;return r(n._payload)}function kp(n){function r(K,W){if(n){var $=K.deletions;$===null?(K.deletions=[W],K.flags|=16):$.push(W)}}function l(K,W){if(!n)return null;for(;W!==null;)r(K,W),W=W.sibling;return null}function h(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function m(K,W){return K=Dr(K,W),K.index=0,K.sibling=null,K}function v(K,W,$){return K.index=$,n?($=K.alternate,$!==null?($=$.index,$<W?(K.flags|=2,W):$):(K.flags|=2,W)):(K.flags|=1048576,W)}function T(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,W,$,we){return W===null||W.tag!==6?(W=_h($,K.mode,we),W.return=K,W):(W=m(W,$),W.return=K,W)}function z(K,W,$,we){var Ye=$.type;return Ye===F?_e(K,W,$.props.children,we,$.key):W!==null&&(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&Op(Ye)===W.type)?(we=m(W,$.props),we.ref=Qo(K,W,$),we.return=K,we):(we=Vl($.type,$.key,$.props,null,K.mode,we),we.ref=Qo(K,W,$),we.return=K,we)}function J(K,W,$,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=vh($,K.mode,we),W.return=K,W):(W=m(W,$.children||[]),W.return=K,W)}function _e(K,W,$,we,Ye){return W===null||W.tag!==7?(W=as($,K.mode,we,Ye),W.return=K,W):(W=m(W,$),W.return=K,W)}function ye(K,W,$){if(typeof W=="string"&&W!==""||typeof W=="number")return W=_h(""+W,K.mode,$),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return $=Vl(W.type,W.key,W.props,null,K.mode,$),$.ref=Qo(K,null,W),$.return=K,$;case B:return W=vh(W,K.mode,$),W.return=K,W;case se:var we=W._init;return ye(K,we(W._payload),$)}if(ct(W)||oe(W))return W=as(W,K.mode,$,null),W.return=K,W;vl(K,W)}return null}function ge(K,W,$,we){var Ye=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ye!==null?null:I(K,W,""+$,we);if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return $.key===Ye?z(K,W,$,we):null;case B:return $.key===Ye?J(K,W,$,we):null;case se:return Ye=$._init,ge(K,W,Ye($._payload),we)}if(ct($)||oe($))return Ye!==null?null:_e(K,W,$,we,null);vl(K,$)}return null}function Fe(K,W,$,we,Ye){if(typeof we=="string"&&we!==""||typeof we=="number")return K=K.get($)||null,I(W,K,""+we,Ye);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case N:return K=K.get(we.key===null?$:we.key)||null,z(W,K,we,Ye);case B:return K=K.get(we.key===null?$:we.key)||null,J(W,K,we,Ye);case se:var tt=we._init;return Fe(K,W,$,tt(we._payload),Ye)}if(ct(we)||oe(we))return K=K.get($)||null,_e(W,K,we,Ye,null);vl(W,we)}return null}function Ge(K,W,$,we){for(var Ye=null,tt=null,nt=W,at=W=0,fn=null;nt!==null&&at<$.length;at++){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var Rt=ge(K,nt,$[at],we);if(Rt===null){nt===null&&(nt=fn);break}n&&nt&&Rt.alternate===null&&r(K,nt),W=v(Rt,W,at),tt===null?Ye=Rt:tt.sibling=Rt,tt=Rt,nt=fn}if(at===$.length)return l(K,nt),Yt&&Qr(K,at),Ye;if(nt===null){for(;at<$.length;at++)nt=ye(K,$[at],we),nt!==null&&(W=v(nt,W,at),tt===null?Ye=nt:tt.sibling=nt,tt=nt);return Yt&&Qr(K,at),Ye}for(nt=h(K,nt);at<$.length;at++)fn=Fe(nt,K,at,$[at],we),fn!==null&&(n&&fn.alternate!==null&&nt.delete(fn.key===null?at:fn.key),W=v(fn,W,at),tt===null?Ye=fn:tt.sibling=fn,tt=fn);return n&&nt.forEach(function(Ir){return r(K,Ir)}),Yt&&Qr(K,at),Ye}function Xe(K,W,$,we){var Ye=oe($);if(typeof Ye!="function")throw Error(t(150));if($=Ye.call($),$==null)throw Error(t(151));for(var tt=Ye=null,nt=W,at=W=0,fn=null,Rt=$.next();nt!==null&&!Rt.done;at++,Rt=$.next()){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var Ir=ge(K,nt,Rt.value,we);if(Ir===null){nt===null&&(nt=fn);break}n&&nt&&Ir.alternate===null&&r(K,nt),W=v(Ir,W,at),tt===null?Ye=Ir:tt.sibling=Ir,tt=Ir,nt=fn}if(Rt.done)return l(K,nt),Yt&&Qr(K,at),Ye;if(nt===null){for(;!Rt.done;at++,Rt=$.next())Rt=ye(K,Rt.value,we),Rt!==null&&(W=v(Rt,W,at),tt===null?Ye=Rt:tt.sibling=Rt,tt=Rt);return Yt&&Qr(K,at),Ye}for(nt=h(K,nt);!Rt.done;at++,Rt=$.next())Rt=Fe(nt,K,at,Rt.value,we),Rt!==null&&(n&&Rt.alternate!==null&&nt.delete(Rt.key===null?at:Rt.key),W=v(Rt,W,at),tt===null?Ye=Rt:tt.sibling=Rt,tt=Rt);return n&&nt.forEach(function(bx){return r(K,bx)}),Yt&&Qr(K,at),Ye}function en(K,W,$,we){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case N:e:{for(var Ye=$.key,tt=W;tt!==null;){if(tt.key===Ye){if(Ye=$.type,Ye===F){if(tt.tag===7){l(K,tt.sibling),W=m(tt,$.props.children),W.return=K,K=W;break e}}else if(tt.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&Op(Ye)===tt.type){l(K,tt.sibling),W=m(tt,$.props),W.ref=Qo(K,tt,$),W.return=K,K=W;break e}l(K,tt);break}else r(K,tt);tt=tt.sibling}$.type===F?(W=as($.props.children,K.mode,we,$.key),W.return=K,K=W):(we=Vl($.type,$.key,$.props,null,K.mode,we),we.ref=Qo(K,W,$),we.return=K,K=we)}return T(K);case B:e:{for(tt=$.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){l(K,W.sibling),W=m(W,$.children||[]),W.return=K,K=W;break e}else{l(K,W);break}else r(K,W);W=W.sibling}W=vh($,K.mode,we),W.return=K,K=W}return T(K);case se:return tt=$._init,en(K,W,tt($._payload),we)}if(ct($))return Ge(K,W,$,we);if(oe($))return Xe(K,W,$,we);vl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,W!==null&&W.tag===6?(l(K,W.sibling),W=m(W,$),W.return=K,K=W):(l(K,W),W=_h($,K.mode,we),W.return=K,K=W),T(K)):l(K,W)}return en}var zs=kp(!0),Bp=kp(!1),xl=Er(null),yl=null,Hs=null,Rc=null;function bc(){Rc=Hs=yl=null}function Cc(n){var r=xl.current;jt(xl),n._currentValue=r}function Pc(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function Vs(n,r){yl=n,Rc=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function ii(n){var r=n._currentValue;if(Rc!==n)if(n={context:n,memoizedValue:r,next:null},Hs===null){if(yl===null)throw Error(t(308));Hs=n,yl.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return r}var es=null;function Lc(n){es===null?es=[n]:es.push(n)}function zp(n,r,l,h){var m=r.interleaved;return m===null?(l.next=l,Lc(r)):(l.next=m.next,m.next=l),r.interleaved=l,Ki(n,h)}function Ki(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var wr=!1;function Dc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Ar(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,(At&2)!==0){var m=h.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),h.pending=r,Ki(n,l)}return m=h.interleaved,m===null?(r.next=r,Lc(h)):(r.next=m.next,m.next=r),h.interleaved=r,Ki(n,l)}function Sl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,qr(n,l)}}function Vp(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var m=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?m=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?m=v=r:v=v.next=r}else m=v=r;l={baseState:h.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function El(n,r,l,h){var m=n.updateQueue;wr=!1;var v=m.firstBaseUpdate,T=m.lastBaseUpdate,I=m.shared.pending;if(I!==null){m.shared.pending=null;var z=I,J=z.next;z.next=null,T===null?v=J:T.next=J,T=z;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==T&&(I===null?_e.firstBaseUpdate=J:I.next=J,_e.lastBaseUpdate=z))}if(v!==null){var ye=m.baseState;T=0,_e=J=z=null,I=v;do{var ge=I.lane,Fe=I.eventTime;if((h&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ge=n,Xe=I;switch(ge=r,Fe=l,Xe.tag){case 1:if(Ge=Xe.payload,typeof Ge=="function"){ye=Ge.call(Fe,ye,ge);break e}ye=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Xe.payload,ge=typeof Ge=="function"?Ge.call(Fe,ye,ge):Ge,ge==null)break e;ye=ie({},ye,ge);break e;case 2:wr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=m.effects,ge===null?m.effects=[I]:ge.push(I))}else Fe={eventTime:Fe,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(J=_e=Fe,z=ye):_e=_e.next=Fe,T|=ge;if(I=I.next,I===null){if(I=m.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);if(_e===null&&(z=ye),m.baseState=z,m.firstBaseUpdate=J,m.lastBaseUpdate=_e,r=m.shared.interleaved,r!==null){m=r;do T|=m.lane,m=m.next;while(m!==r)}else v===null&&(m.shared.lanes=0);is|=T,n.lanes=T,n.memoizedState=ye}}function Gp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],m=h.callback;if(m!==null){if(h.callback=null,h=l,typeof m!="function")throw Error(t(191,m));m.call(h)}}}var ea={},Ai=Er(ea),ta=Er(ea),na=Er(ea);function ts(n){if(n===ea)throw Error(t(174));return n}function Ic(n,r){switch(Vt(na,r),Vt(ta,n),Vt(Ai,ea),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:xe(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=xe(r,n)}jt(Ai),Vt(Ai,r)}function Gs(){jt(Ai),jt(ta),jt(na)}function Wp(n){ts(na.current);var r=ts(Ai.current),l=xe(r,n.type);r!==l&&(Vt(ta,n),Vt(Ai,l))}function Nc(n){ta.current===n&&(jt(Ai),jt(ta))}var Kt=Er(0);function Ml(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Uc=[];function Fc(){for(var n=0;n<Uc.length;n++)Uc[n]._workInProgressVersionPrimary=null;Uc.length=0}var Tl=A.ReactCurrentDispatcher,Oc=A.ReactCurrentBatchConfig,ns=0,qt=null,sn=null,cn=null,wl=!1,ia=!1,ra=0,$0=0;function En(){throw Error(t(321))}function kc(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!hi(n[l],r[l]))return!1;return!0}function Bc(n,r,l,h,m,v){if(ns=v,qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=n===null||n.memoizedState===null?ex:tx,n=l(h,m),ia){v=0;do{if(ia=!1,ra=0,25<=v)throw Error(t(301));v+=1,cn=sn=null,r.updateQueue=null,Tl.current=nx,n=l(h,m)}while(ia)}if(Tl.current=bl,r=sn!==null&&sn.next!==null,ns=0,cn=sn=qt=null,wl=!1,r)throw Error(t(300));return n}function zc(){var n=ra!==0;return ra=0,n}function Ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?qt.memoizedState=cn=n:cn=cn.next=n,cn}function ri(){if(sn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var r=cn===null?qt.memoizedState:cn.next;if(r!==null)cn=r,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},cn===null?qt.memoizedState=cn=n:cn=cn.next=n}return cn}function sa(n,r){return typeof r=="function"?r(n):r}function Hc(n){var r=ri(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=sn,m=h.baseQueue,v=l.pending;if(v!==null){if(m!==null){var T=m.next;m.next=v.next,v.next=T}h.baseQueue=m=v,l.pending=null}if(m!==null){v=m.next,h=h.baseState;var I=T=null,z=null,J=v;do{var _e=J.lane;if((ns&_e)===_e)z!==null&&(z=z.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),h=J.hasEagerState?J.eagerState:n(h,J.action);else{var ye={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};z===null?(I=z=ye,T=h):z=z.next=ye,qt.lanes|=_e,is|=_e}J=J.next}while(J!==null&&J!==v);z===null?T=h:z.next=I,hi(h,r.memoizedState)||(Bn=!0),r.memoizedState=h,r.baseState=T,r.baseQueue=z,l.lastRenderedState=h}if(n=l.interleaved,n!==null){m=n;do v=m.lane,qt.lanes|=v,is|=v,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Vc(n){var r=ri(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,m=l.pending,v=r.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do v=n(v,T.action),T=T.next;while(T!==m);hi(v,r.memoizedState)||(Bn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,h]}function Xp(){}function jp(n,r){var l=qt,h=ri(),m=r(),v=!hi(h.memoizedState,m);if(v&&(h.memoizedState=m,Bn=!0),h=h.queue,Gc(qp.bind(null,l,h,n),[n]),h.getSnapshot!==r||v||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,oa(9,Kp.bind(null,l,h,m,r),void 0,null),hn===null)throw Error(t(349));(ns&30)!==0||Yp(l,r,m)}return m}function Yp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Kp(n,r,l,h){r.value=l,r.getSnapshot=h,$p(r)&&Zp(n)}function qp(n,r,l){return l(function(){$p(r)&&Zp(n)})}function $p(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!hi(n,l)}catch{return!0}}function Zp(n){var r=Ki(n,1);r!==null&&gi(r,n,1,-1)}function Jp(n){var r=Ri();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},r.queue=n,n=n.dispatch=Q0.bind(null,qt,n),[r.memoizedState,n]}function oa(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function Qp(){return ri().memoizedState}function Al(n,r,l,h){var m=Ri();qt.flags|=n,m.memoizedState=oa(1|r,l,void 0,h===void 0?null:h)}function Rl(n,r,l,h){var m=ri();h=h===void 0?null:h;var v=void 0;if(sn!==null){var T=sn.memoizedState;if(v=T.destroy,h!==null&&kc(h,T.deps)){m.memoizedState=oa(r,l,v,h);return}}qt.flags|=n,m.memoizedState=oa(1|r,l,v,h)}function em(n,r){return Al(8390656,8,n,r)}function Gc(n,r){return Rl(2048,8,n,r)}function tm(n,r){return Rl(4,2,n,r)}function nm(n,r){return Rl(4,4,n,r)}function im(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function rm(n,r,l){return l=l!=null?l.concat([n]):null,Rl(4,4,im.bind(null,r,n),l)}function Wc(){}function sm(n,r){var l=ri();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&kc(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function om(n,r){var l=ri();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&kc(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function am(n,r,l){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(hi(l,r)||(l=bn(),qt.lanes|=l,is|=l,n.baseState=!0),r)}function Z0(n,r){var l=xt;xt=l!==0&&4>l?l:4,n(!0);var h=Oc.transition;Oc.transition={};try{n(!1),r()}finally{xt=l,Oc.transition=h}}function lm(){return ri().memoizedState}function J0(n,r,l){var h=Pr(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},um(n))cm(r,l);else if(l=zp(n,r,l,h),l!==null){var m=Pn();gi(l,n,h,m),hm(l,r,h)}}function Q0(n,r,l){var h=Pr(n),m={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(um(n))cm(r,m);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,I=v(T,l);if(m.hasEagerState=!0,m.eagerState=I,hi(I,T)){var z=r.interleaved;z===null?(m.next=m,Lc(r)):(m.next=z.next,z.next=m),r.interleaved=m;return}}catch{}finally{}l=zp(n,r,m,h),l!==null&&(m=Pn(),gi(l,n,h,m),hm(l,r,h))}}function um(n){var r=n.alternate;return n===qt||r!==null&&r===qt}function cm(n,r){ia=wl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function hm(n,r,l){if((l&4194240)!==0){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,qr(n,l)}}var bl={readContext:ii,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},ex={readContext:ii,useCallback:function(n,r){return Ri().memoizedState=[n,r===void 0?null:r],n},useContext:ii,useEffect:em,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Al(4194308,4,im.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Al(4194308,4,n,r)},useInsertionEffect:function(n,r){return Al(4,2,n,r)},useMemo:function(n,r){var l=Ri();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Ri();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=J0.bind(null,qt,n),[h.memoizedState,n]},useRef:function(n){var r=Ri();return n={current:n},r.memoizedState=n},useState:Jp,useDebugValue:Wc,useDeferredValue:function(n){return Ri().memoizedState=n},useTransition:function(){var n=Jp(!1),r=n[0];return n=Z0.bind(null,n[1]),Ri().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=qt,m=Ri();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),hn===null)throw Error(t(349));(ns&30)!==0||Yp(h,r,l)}m.memoizedState=l;var v={value:l,getSnapshot:r};return m.queue=v,em(qp.bind(null,h,v,n),[n]),h.flags|=2048,oa(9,Kp.bind(null,h,v,l,r),void 0,null),l},useId:function(){var n=Ri(),r=hn.identifierPrefix;if(Yt){var l=Yi,h=ji;l=(h&~(1<<32-Tt(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=ra++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=$0++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},tx={readContext:ii,useCallback:sm,useContext:ii,useEffect:Gc,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Hc,useRef:Qp,useState:function(){return Hc(sa)},useDebugValue:Wc,useDeferredValue:function(n){var r=ri();return am(r,sn.memoizedState,n)},useTransition:function(){var n=Hc(sa)[0],r=ri().memoizedState;return[n,r]},useMutableSource:Xp,useSyncExternalStore:jp,useId:lm,unstable_isNewReconciler:!1},nx={readContext:ii,useCallback:sm,useContext:ii,useEffect:Gc,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Vc,useRef:Qp,useState:function(){return Vc(sa)},useDebugValue:Wc,useDeferredValue:function(n){var r=ri();return sn===null?r.memoizedState=n:am(r,sn.memoizedState,n)},useTransition:function(){var n=Vc(sa)[0],r=ri().memoizedState;return[n,r]},useMutableSource:Xp,useSyncExternalStore:jp,useId:lm,unstable_isNewReconciler:!1};function di(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Xc(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:ie({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Cl={isMounted:function(n){return(n=n._reactInternals)?Gi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=Pn(),m=Pr(n),v=qi(h,m);v.payload=r,l!=null&&(v.callback=l),r=Ar(n,v,m),r!==null&&(gi(r,n,m,h),Sl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=Pn(),m=Pr(n),v=qi(h,m);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Ar(n,v,m),r!==null&&(gi(r,n,m,h),Sl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Pn(),h=Pr(n),m=qi(l,h);m.tag=2,r!=null&&(m.callback=r),r=Ar(n,m,h),r!==null&&(gi(r,n,h,l),Sl(r,n,h))}};function fm(n,r,l,h,m,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,v,T):r.prototype&&r.prototype.isPureReactComponent?!jo(l,h)||!jo(m,v):!0}function dm(n,r,l){var h=!1,m=Mr,v=r.contextType;return typeof v=="object"&&v!==null?v=ii(v):(m=kn(r)?Zr:Sn.current,h=r.contextTypes,v=(h=h!=null)?Fs(n,m):Mr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Cl,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=v),r}function pm(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&Cl.enqueueReplaceState(r,r.state,null)}function jc(n,r,l,h){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Dc(n);var v=r.contextType;typeof v=="object"&&v!==null?m.context=ii(v):(v=kn(r)?Zr:Sn.current,m.context=Fs(n,v)),m.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Xc(n,r,v,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Cl.enqueueReplaceState(m,m.state,null),El(n,l,m,h),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,r){try{var l="",h=r;do l+=Z(h),h=h.return;while(h);var m=l}catch(v){m=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:m,digest:null}}function Yc(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Kc(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function mm(n,r,l){l=qi(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){Fl||(Fl=!0,uh=h),Kc(n,r)},l}function gm(n,r,l){l=qi(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var m=r.value;l.payload=function(){return h(m)},l.callback=function(){Kc(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Kc(n,r),typeof h!="function"&&(br===null?br=new Set([this]):br.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function _m(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new ix;var m=new Set;h.set(r,m)}else m=h.get(r),m===void 0&&(m=new Set,h.set(r,m));m.has(l)||(m.add(l),n=_x.bind(null,n,r,l),r.then(n,n))}function vm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function xm(n,r,l,h,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=qi(-1,1),r.tag=2,Ar(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var rx=A.ReactCurrentOwner,Bn=!1;function Cn(n,r,l,h){r.child=n===null?Bp(r,null,l,h):zs(r,n.child,l,h)}function ym(n,r,l,h,m){l=l.render;var v=r.ref;return Vs(r,m),h=Bc(n,r,l,h,v,m),l=zc(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,$i(n,r,m)):(Yt&&l&&Ec(r),r.flags|=1,Cn(n,r,h,m),r.child)}function Sm(n,r,l,h,m){if(n===null){var v=l.type;return typeof v=="function"&&!gh(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Em(n,r,v,h,m)):(n=Vl(l.type,null,h,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&m)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:jo,l(T,h)&&n.ref===r.ref)return $i(n,r,m)}return r.flags|=1,n=Dr(v,h),n.ref=r.ref,n.return=r,r.child=n}function Em(n,r,l,h,m){if(n!==null){var v=n.memoizedProps;if(jo(v,h)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=h=v,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,$i(n,r,m)}return qc(n,r,l,h,m)}function Mm(n,r,l){var h=r.pendingProps,m=h.children,v=n!==null?n.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(js,qn),qn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Vt(js,qn),qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,Vt(js,qn),qn|=h}else v!==null?(h=v.baseLanes|l,r.memoizedState=null):h=l,Vt(js,qn),qn|=h;return Cn(n,r,m,l),r.child}function Tm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function qc(n,r,l,h,m){var v=kn(l)?Zr:Sn.current;return v=Fs(r,v),Vs(r,m),l=Bc(n,r,l,h,v,m),h=zc(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,$i(n,r,m)):(Yt&&h&&Ec(r),r.flags|=1,Cn(n,r,l,m),r.child)}function wm(n,r,l,h,m){if(kn(l)){var v=!0;dl(r)}else v=!1;if(Vs(r,m),r.stateNode===null)Ll(n,r),dm(r,l,h),jc(r,l,h,m),h=!0;else if(n===null){var T=r.stateNode,I=r.memoizedProps;T.props=I;var z=T.context,J=l.contextType;typeof J=="object"&&J!==null?J=ii(J):(J=kn(l)?Zr:Sn.current,J=Fs(r,J));var _e=l.getDerivedStateFromProps,ye=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==h||z!==J)&&pm(r,T,h,J),wr=!1;var ge=r.memoizedState;T.state=ge,El(r,h,T,m),z=r.memoizedState,I!==h||ge!==z||On.current||wr?(typeof _e=="function"&&(Xc(r,l,_e,h),z=r.memoizedState),(I=wr||fm(r,l,I,h,ge,z,J))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=z),T.props=h,T.state=z,T.context=J,h=I):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{T=r.stateNode,Hp(n,r),I=r.memoizedProps,J=r.type===r.elementType?I:di(r.type,I),T.props=J,ye=r.pendingProps,ge=T.context,z=l.contextType,typeof z=="object"&&z!==null?z=ii(z):(z=kn(l)?Zr:Sn.current,z=Fs(r,z));var Fe=l.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ye||ge!==z)&&pm(r,T,h,z),wr=!1,ge=r.memoizedState,T.state=ge,El(r,h,T,m);var Ge=r.memoizedState;I!==ye||ge!==Ge||On.current||wr?(typeof Fe=="function"&&(Xc(r,l,Fe,h),Ge=r.memoizedState),(J=wr||fm(r,l,J,h,ge,Ge,z)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Ge,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Ge,z)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=Ge),T.props=h,T.state=Ge,T.context=z,h=J):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),h=!1)}return $c(n,r,l,h,v,m)}function $c(n,r,l,h,m,v){Tm(n,r);var T=(r.flags&128)!==0;if(!h&&!T)return m&&Pp(r,l,!1),$i(n,r,v);h=r.stateNode,rx.current=r;var I=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&T?(r.child=zs(r,n.child,null,v),r.child=zs(r,null,I,v)):Cn(n,r,I,v),r.memoizedState=h.state,m&&Pp(r,l,!0),r.child}function Am(n){var r=n.stateNode;r.pendingContext?bp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&bp(n,r.context,!1),Ic(n,r.containerInfo)}function Rm(n,r,l,h,m){return Bs(),Ac(m),r.flags|=256,Cn(n,r,l,h),r.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Jc(n){return{baseLanes:n,cachePool:null,transitions:null}}function bm(n,r,l){var h=r.pendingProps,m=Kt.current,v=!1,T=(r.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(m&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Vt(Kt,m&1),n===null)return wc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=h.children,n=h.fallback,v?(h=r.mode,v=r.child,T={mode:"hidden",children:T},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Gl(T,h,0,null),n=as(n,h,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Jc(l),r.memoizedState=Zc,n):Qc(r,T));if(m=n.memoizedState,m!==null&&(I=m.dehydrated,I!==null))return sx(n,r,T,h,I,m,l);if(v){v=h.fallback,T=r.mode,m=n.child,I=m.sibling;var z={mode:"hidden",children:h.children};return(T&1)===0&&r.child!==m?(h=r.child,h.childLanes=0,h.pendingProps=z,r.deletions=null):(h=Dr(m,z),h.subtreeFlags=m.subtreeFlags&14680064),I!==null?v=Dr(I,v):(v=as(v,T,l,null),v.flags|=2),v.return=r,h.return=r,h.sibling=v,r.child=h,h=v,v=r.child,T=n.child.memoizedState,T=T===null?Jc(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=Zc,h}return v=n.child,n=v.sibling,h=Dr(v,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function Qc(n,r){return r=Gl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Pl(n,r,l,h){return h!==null&&Ac(h),zs(r,n.child,null,l),n=Qc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function sx(n,r,l,h,m,v,T){if(l)return r.flags&256?(r.flags&=-257,h=Yc(Error(t(422))),Pl(n,r,T,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=h.fallback,m=r.mode,h=Gl({mode:"visible",children:h.children},m,0,null),v=as(v,m,T,null),v.flags|=2,h.return=r,v.return=r,h.sibling=v,r.child=h,(r.mode&1)!==0&&zs(r,n.child,null,T),r.child.memoizedState=Jc(T),r.memoizedState=Zc,v);if((r.mode&1)===0)return Pl(n,r,T,null);if(m.data==="$!"){if(h=m.nextSibling&&m.nextSibling.dataset,h)var I=h.dgst;return h=I,v=Error(t(419)),h=Yc(v,h,void 0),Pl(n,r,T,h)}if(I=(T&n.childLanes)!==0,Bn||I){if(h=hn,h!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(h.suspendedLanes|T))!==0?0:m,m!==0&&m!==v.retryLane&&(v.retryLane=m,Ki(n,m),gi(h,n,m,-1))}return mh(),h=Yc(Error(t(421))),Pl(n,r,T,h)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=vx.bind(null,n),m._reactRetry=r,null):(n=v.treeContext,Kn=Sr(m.nextSibling),Yn=r,Yt=!0,fi=null,n!==null&&(ti[ni++]=ji,ti[ni++]=Yi,ti[ni++]=Jr,ji=n.id,Yi=n.overflow,Jr=r),r=Qc(r,h.children),r.flags|=4096,r)}function Cm(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),Pc(n.return,r,l)}function eh(n,r,l,h,m){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=m)}function Pm(n,r,l){var h=r.pendingProps,m=h.revealOrder,v=h.tail;if(Cn(n,r,h.children,l),h=Kt.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Cm(n,l,r);else if(n.tag===19)Cm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Vt(Kt,h),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&Ml(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),eh(r,!1,m,l,v);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&Ml(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}eh(r,!0,l,null,v);break;case"together":eh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ll(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function $i(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),is|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Dr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Dr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function ox(n,r,l){switch(r.tag){case 3:Am(r),Bs();break;case 5:Wp(r);break;case 1:kn(r.type)&&dl(r);break;case 4:Ic(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,m=r.memoizedProps.value;Vt(xl,h._currentValue),h._currentValue=m;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(Vt(Kt,Kt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?bm(n,r,l):(Vt(Kt,Kt.current&1),n=$i(n,r,l),n!==null?n.sibling:null);Vt(Kt,Kt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,(n.flags&128)!==0){if(h)return Pm(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Vt(Kt,Kt.current),h)break;return null;case 22:case 23:return r.lanes=0,Mm(n,r,l)}return $i(n,r,l)}var Lm,th,Dm,Im;Lm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},th=function(){},Dm=function(n,r,l,h){var m=n.memoizedProps;if(m!==h){n=r.stateNode,ts(Ai.current);var v=null;switch(l){case"input":m=Ct(n,m),h=Ct(n,h),v=[];break;case"select":m=ie({},m,{value:void 0}),h=ie({},h,{value:void 0}),v=[];break;case"textarea":m=Wt(n,m),h=Wt(n,h),v=[];break;default:typeof m.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=cl)}je(l,h);var T;l=null;for(J in m)if(!h.hasOwnProperty(J)&&m.hasOwnProperty(J)&&m[J]!=null)if(J==="style"){var I=m[J];for(T in I)I.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(o.hasOwnProperty(J)?v||(v=[]):(v=v||[]).push(J,null));for(J in h){var z=h[J];if(I=m!=null?m[J]:void 0,h.hasOwnProperty(J)&&z!==I&&(z!=null||I!=null))if(J==="style")if(I){for(T in I)!I.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in z)z.hasOwnProperty(T)&&I[T]!==z[T]&&(l||(l={}),l[T]=z[T])}else l||(v||(v=[]),v.push(J,l)),l=z;else J==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(v=v||[]).push(J,z)):J==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(J,""+z):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(o.hasOwnProperty(J)?(z!=null&&J==="onScroll"&&Xt("scroll",n),v||I===z||(v=[])):(v=v||[]).push(J,z))}l&&(v=v||[]).push("style",l);var J=v;(r.updateQueue=J)&&(r.flags|=4)}},Im=function(n,r,l,h){l!==h&&(r.flags|=4)};function aa(n,r){if(!Yt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function Mn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags&14680064,h|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags,h|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function ax(n,r,l){var h=r.pendingProps;switch(Mc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(r),null;case 1:return kn(r.type)&&fl(),Mn(r),null;case 3:return h=r.stateNode,Gs(),jt(On),jt(Sn),Fc(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(_l(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,fi!==null&&(fh(fi),fi=null))),th(n,r),Mn(r),null;case 5:Nc(r);var m=ts(na.current);if(l=r.type,n!==null&&r.stateNode!=null)Dm(n,r,l,h,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return Mn(r),null}if(n=ts(Ai.current),_l(r)){h=r.stateNode,l=r.type;var v=r.memoizedProps;switch(h[wi]=r,h[Zo]=v,n=(r.mode&1)!==0,l){case"dialog":Xt("cancel",h),Xt("close",h);break;case"iframe":case"object":case"embed":Xt("load",h);break;case"video":case"audio":for(m=0;m<Ko.length;m++)Xt(Ko[m],h);break;case"source":Xt("error",h);break;case"img":case"image":case"link":Xt("error",h),Xt("load",h);break;case"details":Xt("toggle",h);break;case"input":Qe(h,v),Xt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},Xt("invalid",h);break;case"textarea":D(h,v),Xt("invalid",h)}je(l,v),m=null;for(var T in v)if(v.hasOwnProperty(T)){var I=v[T];T==="children"?typeof I=="string"?h.textContent!==I&&(v.suppressHydrationWarning!==!0&&ul(h.textContent,I,n),m=["children",I]):typeof I=="number"&&h.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&ul(h.textContent,I,n),m=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Xt("scroll",h)}switch(l){case"input":Ht(h),kt(h,v,!0);break;case"textarea":Ht(h),q(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=cl)}h=m,r.updateQueue=h,h!==null&&(r.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=T.createElement(l,{is:h.is}):(n=T.createElement(l),l==="select"&&(T=n,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):n=T.createElementNS(n,l),n[wi]=r,n[Zo]=h,Lm(n,r,!1,!1),r.stateNode=n;e:{switch(T=Ce(l,h),l){case"dialog":Xt("cancel",n),Xt("close",n),m=h;break;case"iframe":case"object":case"embed":Xt("load",n),m=h;break;case"video":case"audio":for(m=0;m<Ko.length;m++)Xt(Ko[m],n);m=h;break;case"source":Xt("error",n),m=h;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),m=h;break;case"details":Xt("toggle",n),m=h;break;case"input":Qe(n,h),m=Ct(n,h),Xt("invalid",n);break;case"option":m=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},m=ie({},h,{value:void 0}),Xt("invalid",n);break;case"textarea":D(n,h),m=Wt(n,h),Xt("invalid",n);break;default:m=h}je(l,m),I=m;for(v in I)if(I.hasOwnProperty(v)){var z=I[v];v==="style"?Ie(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ke(n,z)):v==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Ae(n,z):typeof z=="number"&&Ae(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?z!=null&&v==="onScroll"&&Xt("scroll",n):z!=null&&b(n,v,z,T))}switch(l){case"input":Ht(n),kt(n,h,!1);break;case"textarea":Ht(n),q(n);break;case"option":h.value!=null&&n.setAttribute("value",""+be(h.value));break;case"select":n.multiple=!!h.multiple,v=h.value,v!=null?Gt(n,!!h.multiple,v,!1):h.defaultValue!=null&&Gt(n,!!h.multiple,h.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=cl)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Mn(r),null;case 6:if(n&&r.stateNode!=null)Im(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=ts(na.current),ts(Ai.current),_l(r)){if(h=r.stateNode,l=r.memoizedProps,h[wi]=r,(v=h.nodeValue!==l)&&(n=Yn,n!==null))switch(n.tag){case 3:ul(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ul(h.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[wi]=r,r.stateNode=h}return Mn(r),null;case 13:if(jt(Kt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Kn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Fp(),Bs(),r.flags|=98560,v=!1;else if(v=_l(r),h!==null&&h.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[wi]=r}else Bs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mn(r),v=!1}else fi!==null&&(fh(fi),fi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Kt.current&1)!==0?on===0&&(on=3):mh())),r.updateQueue!==null&&(r.flags|=4),Mn(r),null);case 4:return Gs(),th(n,r),n===null&&qo(r.stateNode.containerInfo),Mn(r),null;case 10:return Cc(r.type._context),Mn(r),null;case 17:return kn(r.type)&&fl(),Mn(r),null;case 19:if(jt(Kt),v=r.memoizedState,v===null)return Mn(r),null;if(h=(r.flags&128)!==0,T=v.rendering,T===null)if(h)aa(v,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=Ml(n),T!==null){for(r.flags|=128,aa(v,!1),h=T.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)v=l,n=h,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Vt(Kt,Kt.current&1|2),r.child}n=n.sibling}v.tail!==null&&G()>Ys&&(r.flags|=128,h=!0,aa(v,!1),r.lanes=4194304)}else{if(!h)if(n=Ml(T),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),aa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Yt)return Mn(r),null}else 2*G()-v.renderingStartTime>Ys&&l!==1073741824&&(r.flags|=128,h=!0,aa(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=G(),r.sibling=null,l=Kt.current,Vt(Kt,h?l&1|2:l&1),r):(Mn(r),null);case 22:case 23:return ph(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?(qn&1073741824)!==0&&(Mn(r),r.subtreeFlags&6&&(r.flags|=8192)):Mn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function lx(n,r){switch(Mc(r),r.tag){case 1:return kn(r.type)&&fl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Gs(),jt(On),jt(Sn),Fc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Nc(r),null;case 13:if(jt(Kt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Bs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return jt(Kt),null;case 4:return Gs(),null;case 10:return Cc(r.type._context),null;case 22:case 23:return ph(),null;case 24:return null;default:return null}}var Dl=!1,Tn=!1,ux=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Xs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Jt(n,r,h)}else l.current=null}function nh(n,r,l){try{l()}catch(h){Jt(n,r,h)}}var Nm=!1;function cx(n,r){if(pc=Ja,n=fp(),oc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var m=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,I=-1,z=-1,J=0,_e=0,ye=n,ge=null;t:for(;;){for(var Fe;ye!==l||m!==0&&ye.nodeType!==3||(I=T+m),ye!==v||h!==0&&ye.nodeType!==3||(z=T+h),ye.nodeType===3&&(T+=ye.nodeValue.length),(Fe=ye.firstChild)!==null;)ge=ye,ye=Fe;for(;;){if(ye===n)break t;if(ge===l&&++J===m&&(I=T),ge===v&&++_e===h&&(z=T),(Fe=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Fe}l=I===-1||z===-1?null:{start:I,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(mc={focusedElem:n,selectionRange:l},Ja=!1,ke=r;ke!==null;)if(r=ke,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ke=n;else for(;ke!==null;){r=ke;try{var Ge=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Xe=Ge.memoizedProps,en=Ge.memoizedState,K=r.stateNode,W=K.getSnapshotBeforeUpdate(r.elementType===r.type?Xe:di(r.type,Xe),en);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Jt(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,ke=n;break}ke=r.return}return Ge=Nm,Nm=!1,Ge}function la(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var m=h=h.next;do{if((m.tag&n)===n){var v=m.destroy;m.destroy=void 0,v!==void 0&&nh(r,l,v)}m=m.next}while(m!==h)}}function Il(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function ih(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Um(n){var r=n.alternate;r!==null&&(n.alternate=null,Um(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[wi],delete r[Zo],delete r[xc],delete r[j0],delete r[Y0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fm(n){return n.tag===5||n.tag===3||n.tag===4}function Om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rh(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=cl));else if(h!==4&&(n=n.child,n!==null))for(rh(n,r,l),n=n.sibling;n!==null;)rh(n,r,l),n=n.sibling}function sh(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(sh(n,r,l),n=n.sibling;n!==null;)sh(n,r,l),n=n.sibling}var gn=null,pi=!1;function Rr(n,r,l){for(l=l.child;l!==null;)km(n,r,l),l=l.sibling}function km(n,r,l){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ze,l)}catch{}switch(l.tag){case 5:Tn||Xs(l,r);case 6:var h=gn,m=pi;gn=null,Rr(n,r,l),gn=h,pi=m,gn!==null&&(pi?(n=gn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):gn.removeChild(l.stateNode));break;case 18:gn!==null&&(pi?(n=gn,l=l.stateNode,n.nodeType===8?vc(n.parentNode,l):n.nodeType===1&&vc(n,l),zo(n)):vc(gn,l.stateNode));break;case 4:h=gn,m=pi,gn=l.stateNode.containerInfo,pi=!0,Rr(n,r,l),gn=h,pi=m;break;case 0:case 11:case 14:case 15:if(!Tn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){m=h=h.next;do{var v=m,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&nh(l,r,T),m=m.next}while(m!==h)}Rr(n,r,l);break;case 1:if(!Tn&&(Xs(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(I){Jt(l,r,I)}Rr(n,r,l);break;case 21:Rr(n,r,l);break;case 22:l.mode&1?(Tn=(h=Tn)||l.memoizedState!==null,Rr(n,r,l),Tn=h):Rr(n,r,l);break;default:Rr(n,r,l)}}function Bm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new ux),r.forEach(function(h){var m=xx.bind(null,n,h);l.has(h)||(l.add(h),h.then(m,m))})}}function mi(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var m=l[h];try{var v=n,T=r,I=T;e:for(;I!==null;){switch(I.tag){case 5:gn=I.stateNode,pi=!1;break e;case 3:gn=I.stateNode.containerInfo,pi=!0;break e;case 4:gn=I.stateNode.containerInfo,pi=!0;break e}I=I.return}if(gn===null)throw Error(t(160));km(v,T,m),gn=null,pi=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(J){Jt(m,r,J)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)zm(r,n),r=r.sibling}function zm(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(r,n),bi(n),h&4){try{la(3,n,n.return),Il(3,n)}catch(Xe){Jt(n,n.return,Xe)}try{la(5,n,n.return)}catch(Xe){Jt(n,n.return,Xe)}}break;case 1:mi(r,n),bi(n),h&512&&l!==null&&Xs(l,l.return);break;case 5:if(mi(r,n),bi(n),h&512&&l!==null&&Xs(l,l.return),n.flags&32){var m=n.stateNode;try{Ae(m,"")}catch(Xe){Jt(n,n.return,Xe)}}if(h&4&&(m=n.stateNode,m!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&Et(m,v),Ce(I,T);var J=Ce(I,v);for(T=0;T<z.length;T+=2){var _e=z[T],ye=z[T+1];_e==="style"?Ie(m,ye):_e==="dangerouslySetInnerHTML"?Ke(m,ye):_e==="children"?Ae(m,ye):b(m,_e,ye,J)}switch(I){case"input":$e(m,v);break;case"textarea":w(m,v);break;case"select":var ge=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!v.multiple;var Fe=v.value;Fe!=null?Gt(m,!!v.multiple,Fe,!1):ge!==!!v.multiple&&(v.defaultValue!=null?Gt(m,!!v.multiple,v.defaultValue,!0):Gt(m,!!v.multiple,v.multiple?[]:"",!1))}m[Zo]=v}catch(Xe){Jt(n,n.return,Xe)}}break;case 6:if(mi(r,n),bi(n),h&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,v=n.memoizedProps;try{m.nodeValue=v}catch(Xe){Jt(n,n.return,Xe)}}break;case 3:if(mi(r,n),bi(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{zo(r.containerInfo)}catch(Xe){Jt(n,n.return,Xe)}break;case 4:mi(r,n),bi(n);break;case 13:mi(r,n),bi(n),m=n.child,m.flags&8192&&(v=m.memoizedState!==null,m.stateNode.isHidden=v,!v||m.alternate!==null&&m.alternate.memoizedState!==null||(lh=G())),h&4&&Bm(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(Tn=(J=Tn)||_e,mi(r,n),Tn=J):mi(r,n),bi(n),h&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!_e&&(n.mode&1)!==0)for(ke=n,_e=n.child;_e!==null;){for(ye=ke=_e;ke!==null;){switch(ge=ke,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:la(4,ge,ge.return);break;case 1:Xs(ge,ge.return);var Ge=ge.stateNode;if(typeof Ge.componentWillUnmount=="function"){h=ge,l=ge.return;try{r=h,Ge.props=r.memoizedProps,Ge.state=r.memoizedState,Ge.componentWillUnmount()}catch(Xe){Jt(h,l,Xe)}}break;case 5:Xs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Gm(ye);continue}}Fe!==null?(Fe.return=ge,ke=Fe):Gm(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{m=ye.stateNode,J?(v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=ye.stateNode,z=ye.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=Te("display",T))}catch(Xe){Jt(n,n.return,Xe)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(Xe){Jt(n,n.return,Xe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:mi(r,n),bi(n),h&4&&Bm(n);break;case 21:break;default:mi(r,n),bi(n)}}function bi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Fm(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var m=h.stateNode;h.flags&32&&(Ae(m,""),h.flags&=-33);var v=Om(n);sh(n,v,m);break;case 3:case 4:var T=h.stateNode.containerInfo,I=Om(n);rh(n,I,T);break;default:throw Error(t(161))}}catch(z){Jt(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function hx(n,r,l){ke=n,Hm(n)}function Hm(n,r,l){for(var h=(n.mode&1)!==0;ke!==null;){var m=ke,v=m.child;if(m.tag===22&&h){var T=m.memoizedState!==null||Dl;if(!T){var I=m.alternate,z=I!==null&&I.memoizedState!==null||Tn;I=Dl;var J=Tn;if(Dl=T,(Tn=z)&&!J)for(ke=m;ke!==null;)T=ke,z=T.child,T.tag===22&&T.memoizedState!==null?Wm(m):z!==null?(z.return=T,ke=z):Wm(m);for(;v!==null;)ke=v,Hm(v),v=v.sibling;ke=m,Dl=I,Tn=J}Vm(n)}else(m.subtreeFlags&8772)!==0&&v!==null?(v.return=m,ke=v):Vm(n)}}function Vm(n){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Tn||Il(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!Tn)if(l===null)h.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:di(r.type,l.memoizedProps);h.componentDidUpdate(m,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Gp(r,v,h);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Gp(r,T,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var J=r.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&zo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||r.flags&512&&ih(r)}catch(ge){Jt(r,r.return,ge)}}if(r===n){ke=null;break}if(l=r.sibling,l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Gm(n){for(;ke!==null;){var r=ke;if(r===n){ke=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Wm(n){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Il(4,r)}catch(z){Jt(r,l,z)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var m=r.return;try{h.componentDidMount()}catch(z){Jt(r,m,z)}}var v=r.return;try{ih(r)}catch(z){Jt(r,v,z)}break;case 5:var T=r.return;try{ih(r)}catch(z){Jt(r,T,z)}}}catch(z){Jt(r,r.return,z)}if(r===n){ke=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ke=I;break}ke=r.return}}var fx=Math.ceil,Nl=A.ReactCurrentDispatcher,oh=A.ReactCurrentOwner,si=A.ReactCurrentBatchConfig,At=0,hn=null,tn=null,_n=0,qn=0,js=Er(0),on=0,ua=null,is=0,Ul=0,ah=0,ca=null,zn=null,lh=0,Ys=1/0,Zi=null,Fl=!1,uh=null,br=null,Ol=!1,Cr=null,kl=0,ha=0,ch=null,Bl=-1,zl=0;function Pn(){return(At&6)!==0?G():Bl!==-1?Bl:Bl=G()}function Pr(n){return(n.mode&1)===0?1:(At&2)!==0&&_n!==0?_n&-_n:q0.transition!==null?(zl===0&&(zl=bn()),zl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:jd(n.type)),n)}function gi(n,r,l,h){if(50<ha)throw ha=0,ch=null,Error(t(185));Qt(n,l,h),((At&2)===0||n!==hn)&&(n===hn&&((At&2)===0&&(Ul|=l),on===4&&Lr(n,_n)),Hn(n,h),l===1&&At===0&&(r.mode&1)===0&&(Ys=G()+500,pl&&Tr()))}function Hn(n,r){var l=n.callbackNode;Kr(n,r);var h=ci(n,n===hn?_n:0);if(h===0)l!==null&&Y(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&Y(l),r===1)n.tag===0?K0(jm.bind(null,n)):Lp(jm.bind(null,n)),W0(function(){(At&6)===0&&Tr()}),l=null;else{switch(kd(h)){case 1:l=Pe;break;case 4:l=Ve;break;case 16:l=Ue;break;case 536870912:l=st;break;default:l=Ue}l=eg(l,Xm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Xm(n,r){if(Bl=-1,zl=0,(At&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ks()&&n.callbackNode!==l)return null;var h=ci(n,n===hn?_n:0);if(h===0)return null;if((h&30)!==0||(h&n.expiredLanes)!==0||r)r=Hl(n,h);else{r=h;var m=At;At|=2;var v=Km();(hn!==n||_n!==r)&&(Zi=null,Ys=G()+500,ss(n,r));do try{mx();break}catch(I){Ym(n,I)}while(!0);bc(),Nl.current=v,At=m,tn!==null?r=0:(hn=null,_n=0,r=on)}if(r!==0){if(r===2&&(m=zt(n),m!==0&&(h=m,r=hh(n,m))),r===1)throw l=ua,ss(n,0),Lr(n,h),Hn(n,G()),l;if(r===6)Lr(n,h);else{if(m=n.current.alternate,(h&30)===0&&!dx(m)&&(r=Hl(n,h),r===2&&(v=zt(n),v!==0&&(h=v,r=hh(n,v))),r===1))throw l=ua,ss(n,0),Lr(n,h),Hn(n,G()),l;switch(n.finishedWork=m,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:os(n,zn,Zi);break;case 3:if(Lr(n,h),(h&130023424)===h&&(r=lh+500-G(),10<r)){if(ci(n,0)!==0)break;if(m=n.suspendedLanes,(m&h)!==h){Pn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=_c(os.bind(null,n,zn,Zi),r);break}os(n,zn,Zi);break;case 4:if(Lr(n,h),(h&4194240)===h)break;for(r=n.eventTimes,m=-1;0<h;){var T=31-Tt(h);v=1<<T,T=r[T],T>m&&(m=T),h&=~v}if(h=m,h=G()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*fx(h/1960))-h,10<h){n.timeoutHandle=_c(os.bind(null,n,zn,Zi),h);break}os(n,zn,Zi);break;case 5:os(n,zn,Zi);break;default:throw Error(t(329))}}}return Hn(n,G()),n.callbackNode===l?Xm.bind(null,n):null}function hh(n,r){var l=ca;return n.current.memoizedState.isDehydrated&&(ss(n,r).flags|=256),n=Hl(n,r),n!==2&&(r=zn,zn=l,r!==null&&fh(r)),n}function fh(n){zn===null?zn=n:zn.push.apply(zn,n)}function dx(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var m=l[h],v=m.getSnapshot;m=m.value;try{if(!hi(v(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Lr(n,r){for(r&=~ah,r&=~Ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Tt(r),h=1<<l;n[l]=-1,r&=~h}}function jm(n){if((At&6)!==0)throw Error(t(327));Ks();var r=ci(n,0);if((r&1)===0)return Hn(n,G()),null;var l=Hl(n,r);if(n.tag!==0&&l===2){var h=zt(n);h!==0&&(r=h,l=hh(n,h))}if(l===1)throw l=ua,ss(n,0),Lr(n,r),Hn(n,G()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,os(n,zn,Zi),Hn(n,G()),null}function dh(n,r){var l=At;At|=1;try{return n(r)}finally{At=l,At===0&&(Ys=G()+500,pl&&Tr())}}function rs(n){Cr!==null&&Cr.tag===0&&(At&6)===0&&Ks();var r=At;At|=1;var l=si.transition,h=xt;try{if(si.transition=null,xt=1,n)return n()}finally{xt=h,si.transition=l,At=r,(At&6)===0&&Tr()}}function ph(){qn=js.current,jt(js)}function ss(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,G0(l)),tn!==null)for(l=tn.return;l!==null;){var h=l;switch(Mc(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&fl();break;case 3:Gs(),jt(On),jt(Sn),Fc();break;case 5:Nc(h);break;case 4:Gs();break;case 13:jt(Kt);break;case 19:jt(Kt);break;case 10:Cc(h.type._context);break;case 22:case 23:ph()}l=l.return}if(hn=n,tn=n=Dr(n.current,null),_n=qn=r,on=0,ua=null,ah=Ul=is=0,zn=ca=null,es!==null){for(r=0;r<es.length;r++)if(l=es[r],h=l.interleaved,h!==null){l.interleaved=null;var m=h.next,v=l.pending;if(v!==null){var T=v.next;v.next=m,h.next=T}l.pending=h}es=null}return n}function Ym(n,r){do{var l=tn;try{if(bc(),Tl.current=bl,wl){for(var h=qt.memoizedState;h!==null;){var m=h.queue;m!==null&&(m.pending=null),h=h.next}wl=!1}if(ns=0,cn=sn=qt=null,ia=!1,ra=0,oh.current=null,l===null||l.return===null){on=1,ua=r,tn=null;break}e:{var v=n,T=l.return,I=l,z=r;if(r=_n,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var J=z,_e=I,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=vm(T);if(Fe!==null){Fe.flags&=-257,xm(Fe,T,I,v,r),Fe.mode&1&&_m(v,J,r),r=Fe,z=J;var Ge=r.updateQueue;if(Ge===null){var Xe=new Set;Xe.add(z),r.updateQueue=Xe}else Ge.add(z);break e}else{if((r&1)===0){_m(v,J,r),mh();break e}z=Error(t(426))}}else if(Yt&&I.mode&1){var en=vm(T);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),xm(en,T,I,v,r),Ac(Ws(z,I));break e}}v=z=Ws(z,I),on!==4&&(on=2),ca===null?ca=[v]:ca.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var K=mm(v,z,r);Vp(v,K);break e;case 1:I=z;var W=v.type,$=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(br===null||!br.has($)))){v.flags|=65536,r&=-r,v.lanes|=r;var we=gm(v,I,r);Vp(v,we);break e}}v=v.return}while(v!==null)}$m(l)}catch(Ye){r=Ye,tn===l&&l!==null&&(tn=l=l.return);continue}break}while(!0)}function Km(){var n=Nl.current;return Nl.current=bl,n===null?bl:n}function mh(){(on===0||on===3||on===2)&&(on=4),hn===null||(is&268435455)===0&&(Ul&268435455)===0||Lr(hn,_n)}function Hl(n,r){var l=At;At|=2;var h=Km();(hn!==n||_n!==r)&&(Zi=null,ss(n,r));do try{px();break}catch(m){Ym(n,m)}while(!0);if(bc(),At=l,Nl.current=h,tn!==null)throw Error(t(261));return hn=null,_n=0,on}function px(){for(;tn!==null;)qm(tn)}function mx(){for(;tn!==null&&!Q();)qm(tn)}function qm(n){var r=Qm(n.alternate,n,qn);n.memoizedProps=n.pendingProps,r===null?$m(n):tn=r,oh.current=null}function $m(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=ax(l,r,qn),l!==null){tn=l;return}}else{if(l=lx(l,r),l!==null){l.flags&=32767,tn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,tn=null;return}}if(r=r.sibling,r!==null){tn=r;return}tn=r=n}while(r!==null);on===0&&(on=5)}function os(n,r,l){var h=xt,m=si.transition;try{si.transition=null,xt=1,gx(n,r,l,h)}finally{si.transition=m,xt=h}return null}function gx(n,r,l,h){do Ks();while(Cr!==null);if((At&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(yn(n,v),n===hn&&(tn=hn=null,_n=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ol||(Ol=!0,eg(Ue,function(){return Ks(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=si.transition,si.transition=null;var T=xt;xt=1;var I=At;At|=4,oh.current=null,cx(n,l),zm(l,n),F0(mc),Ja=!!pc,mc=pc=null,n.current=l,hx(l),ee(),At=I,xt=T,si.transition=v}else n.current=l;if(Ol&&(Ol=!1,Cr=n,kl=m),v=n.pendingLanes,v===0&&(br=null),Pt(l.stateNode),Hn(n,G()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],h(m.value,{componentStack:m.stack,digest:m.digest});if(Fl)throw Fl=!1,n=uh,uh=null,n;return(kl&1)!==0&&n.tag!==0&&Ks(),v=n.pendingLanes,(v&1)!==0?n===ch?ha++:(ha=0,ch=n):ha=0,Tr(),null}function Ks(){if(Cr!==null){var n=kd(kl),r=si.transition,l=xt;try{if(si.transition=null,xt=16>n?16:n,Cr===null)var h=!1;else{if(n=Cr,Cr=null,kl=0,(At&6)!==0)throw Error(t(331));var m=At;for(At|=4,ke=n.current;ke!==null;){var v=ke,T=v.child;if((ke.flags&16)!==0){var I=v.deletions;if(I!==null){for(var z=0;z<I.length;z++){var J=I[z];for(ke=J;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:la(8,_e,v)}var ye=_e.child;if(ye!==null)ye.return=_e,ke=ye;else for(;ke!==null;){_e=ke;var ge=_e.sibling,Fe=_e.return;if(Um(_e),_e===J){ke=null;break}if(ge!==null){ge.return=Fe,ke=ge;break}ke=Fe}}}var Ge=v.alternate;if(Ge!==null){var Xe=Ge.child;if(Xe!==null){Ge.child=null;do{var en=Xe.sibling;Xe.sibling=null,Xe=en}while(Xe!==null)}}ke=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,ke=T;else e:for(;ke!==null;){if(v=ke,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:la(9,v,v.return)}var K=v.sibling;if(K!==null){K.return=v.return,ke=K;break e}ke=v.return}}var W=n.current;for(ke=W;ke!==null;){T=ke;var $=T.child;if((T.subtreeFlags&2064)!==0&&$!==null)$.return=T,ke=$;else e:for(T=W;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Il(9,I)}}catch(Ye){Jt(I,I.return,Ye)}if(I===T){ke=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,ke=we;break e}ke=I.return}}if(At=m,Tr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ze,n)}catch{}h=!0}return h}finally{xt=l,si.transition=r}}return!1}function Zm(n,r,l){r=Ws(l,r),r=mm(n,r,1),n=Ar(n,r,1),r=Pn(),n!==null&&(Qt(n,1,r),Hn(n,r))}function Jt(n,r,l){if(n.tag===3)Zm(n,n,l);else for(;r!==null;){if(r.tag===3){Zm(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(br===null||!br.has(h))){n=Ws(l,n),n=gm(r,n,1),r=Ar(r,n,1),n=Pn(),r!==null&&(Qt(r,1,n),Hn(r,n));break}}r=r.return}}function _x(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=Pn(),n.pingedLanes|=n.suspendedLanes&l,hn===n&&(_n&l)===l&&(on===4||on===3&&(_n&130023424)===_n&&500>G()-lh?ss(n,0):ah|=l),Hn(n,r)}function Jm(n,r){r===0&&((n.mode&1)===0?r=1:(r=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var l=Pn();n=Ki(n,r),n!==null&&(Qt(n,r,l),Hn(n,l))}function vx(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Jm(n,l)}function xx(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Jm(n,l)}var Qm;Qm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||On.current)Bn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Bn=!1,ox(n,r,l);Bn=(n.flags&131072)!==0}else Bn=!1,Yt&&(r.flags&1048576)!==0&&Dp(r,gl,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;Ll(n,r),n=r.pendingProps;var m=Fs(r,Sn.current);Vs(r,l),m=Bc(null,r,h,n,m,l);var v=zc();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,kn(h)?(v=!0,dl(r)):v=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Dc(r),m.updater=Cl,r.stateNode=m,m._reactInternals=r,jc(r,h,n,l),r=$c(null,r,h,!0,v,l)):(r.tag=0,Yt&&v&&Ec(r),Cn(null,r,m,l),r=r.child),r;case 16:h=r.elementType;e:{switch(Ll(n,r),n=r.pendingProps,m=h._init,h=m(h._payload),r.type=h,m=r.tag=Sx(h),n=di(h,n),m){case 0:r=qc(null,r,h,n,l);break e;case 1:r=wm(null,r,h,n,l);break e;case 11:r=ym(null,r,h,n,l);break e;case 14:r=Sm(null,r,h,di(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),qc(n,r,h,m,l);case 1:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),wm(n,r,h,m,l);case 3:e:{if(Am(r),n===null)throw Error(t(387));h=r.pendingProps,v=r.memoizedState,m=v.element,Hp(n,r),El(r,h,null,l);var T=r.memoizedState;if(h=T.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){m=Ws(Error(t(423)),r),r=Rm(n,r,h,l,m);break e}else if(h!==m){m=Ws(Error(t(424)),r),r=Rm(n,r,h,l,m);break e}else for(Kn=Sr(r.stateNode.containerInfo.firstChild),Yn=r,Yt=!0,fi=null,l=Bp(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Bs(),h===m){r=$i(n,r,l);break e}Cn(n,r,h,l)}r=r.child}return r;case 5:return Wp(r),n===null&&wc(r),h=r.type,m=r.pendingProps,v=n!==null?n.memoizedProps:null,T=m.children,gc(h,m)?T=null:v!==null&&gc(h,v)&&(r.flags|=32),Tm(n,r),Cn(n,r,T,l),r.child;case 6:return n===null&&wc(r),null;case 13:return bm(n,r,l);case 4:return Ic(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=zs(r,null,h,l):Cn(n,r,h,l),r.child;case 11:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),ym(n,r,h,m,l);case 7:return Cn(n,r,r.pendingProps,l),r.child;case 8:return Cn(n,r,r.pendingProps.children,l),r.child;case 12:return Cn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,m=r.pendingProps,v=r.memoizedProps,T=m.value,Vt(xl,h._currentValue),h._currentValue=T,v!==null)if(hi(v.value,T)){if(v.children===m.children&&!On.current){r=$i(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){T=v.child;for(var z=I.firstContext;z!==null;){if(z.context===h){if(v.tag===1){z=qi(-1,l&-l),z.tag=2;var J=v.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),J.pending=z}}v.lanes|=l,z=v.alternate,z!==null&&(z.lanes|=l),Pc(v.return,l,r),I.lanes|=l;break}z=z.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,I=T.alternate,I!==null&&(I.lanes|=l),Pc(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Cn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,h=r.pendingProps.children,Vs(r,l),m=ii(m),h=h(m),r.flags|=1,Cn(n,r,h,l),r.child;case 14:return h=r.type,m=di(h,r.pendingProps),m=di(h.type,m),Sm(n,r,h,m,l);case 15:return Em(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),Ll(n,r),r.tag=1,kn(h)?(n=!0,dl(r)):n=!1,Vs(r,l),dm(r,h,m),jc(r,h,m,l),$c(null,r,h,!0,n,l);case 19:return Pm(n,r,l);case 22:return Mm(n,r,l)}throw Error(t(156,r.tag))};function eg(n,r){return R(n,r)}function yx(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,r,l,h){return new yx(n,r,l,h)}function gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sx(n){if(typeof n=="function")return gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===fe)return 14}return 2}function Dr(n,r){var l=n.alternate;return l===null?(l=oi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Vl(n,r,l,h,m,v){var T=2;if(h=n,typeof n=="function")gh(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return as(l.children,m,v,r);case j:T=8,m|=8;break;case C:return n=oi(12,l,r,m|2),n.elementType=C,n.lanes=v,n;case ne:return n=oi(13,l,r,m),n.elementType=ne,n.lanes=v,n;case ae:return n=oi(19,l,r,m),n.elementType=ae,n.lanes=v,n;case ce:return Gl(l,m,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:T=10;break e;case O:T=9;break e;case le:T=11;break e;case fe:T=14;break e;case se:T=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=oi(T,l,r,m),r.elementType=n,r.type=h,r.lanes=v,r}function as(n,r,l,h){return n=oi(7,n,h,r),n.lanes=l,n}function Gl(n,r,l,h){return n=oi(22,n,h,r),n.elementType=ce,n.lanes=l,n.stateNode={isHidden:!1},n}function _h(n,r,l){return n=oi(6,n,null,r),n.lanes=l,n}function vh(n,r,l){return r=oi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Ex(n,r,l,h,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=h,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function xh(n,r,l,h,m,v,T,I,z){return n=new Ex(n,r,l,I,z),r===1?(r=1,v===!0&&(r|=8)):r=0,v=oi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(v),n}function Mx(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function tg(n){if(!n)return Mr;n=n._reactInternals;e:{if(Gi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(kn(l))return Cp(n,l,r)}return r}function ng(n,r,l,h,m,v,T,I,z){return n=xh(l,h,!0,n,m,v,T,I,z),n.context=tg(null),l=n.current,h=Pn(),m=Pr(l),v=qi(h,m),v.callback=r??null,Ar(l,v,m),n.current.lanes=m,Qt(n,m,h),Hn(n,h),n}function Wl(n,r,l,h){var m=r.current,v=Pn(),T=Pr(m);return l=tg(l),r.context===null?r.context=l:r.pendingContext=l,r=qi(v,T),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=Ar(m,r,T),n!==null&&(gi(n,m,T,v),Sl(n,m,T)),T}function Xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ig(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function yh(n,r){ig(n,r),(n=n.alternate)&&ig(n,r)}function Tx(){return null}var rg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sh(n){this._internalRoot=n}jl.prototype.render=Sh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Wl(n,r,null,null)},jl.prototype.unmount=Sh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;rs(function(){Wl(null,n,null,null)}),r[Wi]=null}};function jl(n){this._internalRoot=n}jl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Hd();n={blockedOn:null,target:n,priority:r};for(var l=0;l<vr.length&&r!==0&&r<vr[l].priority;l++);vr.splice(l,0,n),l===0&&Wd(n)}};function Eh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sg(){}function wx(n,r,l,h,m){if(m){if(typeof h=="function"){var v=h;h=function(){var J=Xl(T);v.call(J)}}var T=ng(r,h,n,0,null,!1,!1,"",sg);return n._reactRootContainer=T,n[Wi]=T.current,qo(n.nodeType===8?n.parentNode:n),rs(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof h=="function"){var I=h;h=function(){var J=Xl(z);I.call(J)}}var z=xh(n,0,!1,null,null,!1,!1,"",sg);return n._reactRootContainer=z,n[Wi]=z.current,qo(n.nodeType===8?n.parentNode:n),rs(function(){Wl(r,z,l,h)}),z}function Kl(n,r,l,h,m){var v=l._reactRootContainer;if(v){var T=v;if(typeof m=="function"){var I=m;m=function(){var z=Xl(T);I.call(z)}}Wl(r,T,n,m)}else T=wx(l,r,n,m,h);return Xl(T)}Bd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=rn(r.pendingLanes);l!==0&&(qr(r,l|1),Hn(r,G()),(At&6)===0&&(Ys=G()+500,Tr()))}break;case 13:rs(function(){var h=Ki(n,1);if(h!==null){var m=Pn();gi(h,n,1,m)}}),yh(n,1)}},Yu=function(n){if(n.tag===13){var r=Ki(n,134217728);if(r!==null){var l=Pn();gi(r,n,134217728,l)}yh(n,134217728)}},zd=function(n){if(n.tag===13){var r=Pr(n),l=Ki(n,r);if(l!==null){var h=Pn();gi(l,n,r,h)}yh(n,r)}},Hd=function(){return xt},Vd=function(n,r){var l=xt;try{return xt=n,r()}finally{xt=l}},Ee=function(n,r,l){switch(r){case"input":if($e(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var m=hl(h);if(!m)throw Error(t(90));St(h),$e(h,m)}}}break;case"textarea":w(n,l);break;case"select":r=l.value,r!=null&&Gt(n,!!l.multiple,r,!1)}},lt=dh,Lt=rs;var Ax={usingClientEntryPoint:!1,Events:[Jo,Ns,hl,de,We,dh]},fa={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rx={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ka(n),n===null?null:n.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||Tx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Ze=ql.inject(Rx),ot=ql}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax,Vn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(r))throw Error(t(200));return Mx(n,r,null,l)},Vn.createRoot=function(n,r){if(!Eh(n))throw Error(t(299));var l=!1,h="",m=rg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=xh(n,1,!1,null,null,l,!1,h,m),n[Wi]=r.current,qo(n.nodeType===8?n.parentNode:n),new Sh(r)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ka(r),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return rs(n)},Vn.hydrate=function(n,r,l){if(!Yl(r))throw Error(t(200));return Kl(null,n,r,!0,l)},Vn.hydrateRoot=function(n,r,l){if(!Eh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,m=!1,v="",T=rg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=ng(r,null,n,1,l??null,m,!1,v,T),n[Wi]=r.current,qo(n),h)for(n=0;n<h.length;n++)l=h[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new jl(r)},Vn.render=function(n,r,l){if(!Yl(r))throw Error(t(200));return Kl(null,n,r,!1,l)},Vn.unmountComponentAtNode=function(n){if(!Yl(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){Kl(null,null,n,!1,function(){n._reactRootContainer=null,n[Wi]=null})}),!0):!1},Vn.unstable_batchedUpdates=dh,Vn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Yl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Kl(n,r,l,!1,h)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var dg;function Fx(){if(dg)return wh.exports;dg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wh.exports=Ux(),wh.exports}var pg;function Ox(){if(pg)return $l;pg=1;var s=Fx();return $l.createRoot=s.createRoot,$l.hydrateRoot=s.hydrateRoot,$l}var kx=Ox();const Bx=X_(kx);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mg="popstate";function zx(s={}){function e(i,o){let{pathname:a,search:u,hash:c}=i.location;return gf("",{pathname:a,search:u,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Ca(o)}return Vx(e,t,null,s)}function $t(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ii(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hx(){return Math.random().toString(36).substring(2,10)}function gg(s,e){return{usr:s.state,key:s.key,idx:e}}function gf(s,e,t=null,i){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Co(e):e,state:t,key:e&&e.key||i||Hx()}}function Ca({pathname:s="/",search:e="",hash:t=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(s+=t.charAt(0)==="#"?t:"#"+t),s}function Co(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substring(t),s=s.substring(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substring(i),s=s.substring(0,i)),s&&(e.pathname=s)}return e}function Vx(s,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,u=o.history,c="POP",f=null,d=p();d==null&&(d=0,u.replaceState({...u.state,idx:d},""));function p(){return(u.state||{idx:null}).idx}function g(){c="POP";let S=p(),x=S==null?null:S-d;d=S,f&&f({action:c,location:M.location,delta:x})}function _(S,x){c="PUSH";let L=gf(M.location,S,x);d=p()+1;let b=gg(L,d),A=M.createHref(L);try{u.pushState(b,"",A)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(A)}a&&f&&f({action:c,location:M.location,delta:1})}function y(S,x){c="REPLACE";let L=gf(M.location,S,x);d=p();let b=gg(L,d),A=M.createHref(L);u.replaceState(b,"",A),a&&f&&f({action:c,location:M.location,delta:0})}function E(S){return Gx(S)}let M={get action(){return c},get location(){return s(o,u)},listen(S){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(mg,g),f=S,()=>{o.removeEventListener(mg,g),f=null}},createHref(S){return e(o,S)},createURL:E,encodeLocation(S){let x=E(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:y,go(S){return u.go(S)}};return M}function Gx(s,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),$t(t,"No window.location.(origin|href) available to create URL");let i=typeof s=="string"?s:Ca(s);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function j_(s,e,t="/"){return Wx(s,e,t,!1)}function Wx(s,e,t,i){let o=typeof e=="string"?Co(e):e,a=hr(o.pathname||"/",t);if(a==null)return null;let u=Y_(s);Xx(u);let c=null;for(let f=0;c==null&&f<u.length;++f){let d=ny(a);c=ey(u[f],d,i)}return c}function Y_(s,e=[],t=[],i="",o=!1){let a=(u,c,f=o,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(i)&&f)return;$t(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length)}let g=lr([i,p.relativePath]),_=t.concat(p);u.children&&u.children.length>0&&($t(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Y_(u.children,e,_,g,f)),!(u.path==null&&!u.index)&&e.push({path:g,score:Jx(g,u.index),routesMeta:_})};return s.forEach((u,c)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))a(u,c);else for(let d of K_(u.path))a(u,c,!0,d)}),e}function K_(s){let e=s.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let u=K_(i.join("/")),c=[];return c.push(...u.map(f=>f===""?a:[a,f].join("/"))),o&&c.push(...u),c.map(f=>s.startsWith("/")&&f===""?"/":f)}function Xx(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:Qx(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var jx=/^:[\w-]+$/,Yx=3,Kx=2,qx=1,$x=10,Zx=-2,_g=s=>s==="*";function Jx(s,e){let t=s.split("/"),i=t.length;return t.some(_g)&&(i+=Zx),e&&(i+=Kx),t.filter(o=>!_g(o)).reduce((o,a)=>o+(jx.test(a)?Yx:a===""?qx:$x),i)}function Qx(s,e){return s.length===e.length&&s.slice(0,-1).every((i,o)=>i===e[o])?s[s.length-1]-e[e.length-1]:0}function ey(s,e,t=!1){let{routesMeta:i}=s,o={},a="/",u=[];for(let c=0;c<i.length;++c){let f=i[c],d=c===i.length-1,p=a==="/"?e:e.slice(a.length)||"/",g=Uu({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},p),_=f.route;if(!g&&d&&t&&!i[i.length-1].route.index&&(g=Uu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},p)),!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:lr([a,g.pathname]),pathnameBase:oy(lr([a,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(a=lr([a,g.pathnameBase]))}return u}function Uu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,i]=ty(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:i.reduce((d,{paramName:p,isOptional:g},_)=>{if(p==="*"){let E=c[_]||"";u=a.slice(0,a.length-E.length).replace(/(.)\/+$/,"$1")}const y=c[_];return g&&!y?d[p]=void 0:d[p]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:u,pattern:s}}function ty(s,e=!1,t=!0){Ii(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let i=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,f)=>(i.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(i.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function ny(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ii(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function hr(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}function iy(s,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof s=="string"?Co(s):s;return{pathname:t?t.startsWith("/")?t:ry(t,e):e,search:ay(i),hash:ly(o)}}function ry(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function bh(s,e,t,i){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sy(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function q_(s){let e=sy(s);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function $_(s,e,t,i=!1){let o;typeof s=="string"?o=Co(s):(o={...s},$t(!o.pathname||!o.pathname.includes("?"),bh("?","pathname","search",o)),$t(!o.pathname||!o.pathname.includes("#"),bh("#","pathname","hash",o)),$t(!o.search||!o.search.includes("#"),bh("#","search","hash",o)));let a=s===""||o.pathname==="",u=a?"/":o.pathname,c;if(u==null)c=t;else{let g=e.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),g-=1;o.pathname=_.join("/")}c=g>=0?e[g]:"/"}let f=iy(o,c),d=u&&u!=="/"&&u.endsWith("/"),p=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(d||p)&&(f.pathname+="/"),f}var lr=s=>s.join("/").replace(/\/\/+/g,"/"),oy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ay=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ly=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function uy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Z_=["POST","PUT","PATCH","DELETE"];new Set(Z_);var cy=["GET",...Z_];new Set(cy);var Po=he.createContext(null);Po.displayName="DataRouter";var Hu=he.createContext(null);Hu.displayName="DataRouterState";he.createContext(!1);var J_=he.createContext({isTransitioning:!1});J_.displayName="ViewTransition";var hy=he.createContext(new Map);hy.displayName="Fetchers";var fy=he.createContext(null);fy.displayName="Await";var Oi=he.createContext(null);Oi.displayName="Navigation";var Oa=he.createContext(null);Oa.displayName="Location";var dr=he.createContext({outlet:null,matches:[],isDataRoute:!1});dr.displayName="Route";var cd=he.createContext(null);cd.displayName="RouteError";function dy(s,{relative:e}={}){$t(ka(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=he.useContext(Oi),{hash:o,pathname:a,search:u}=Ba(s,{relative:e}),c=a;return t!=="/"&&(c=a==="/"?t:lr([t,a])),i.createHref({pathname:c,search:u,hash:o})}function ka(){return he.useContext(Oa)!=null}function Es(){return $t(ka(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(Oa).location}var Q_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ev(s){he.useContext(Oi).static||he.useLayoutEffect(s)}function py(){let{isDataRoute:s}=he.useContext(dr);return s?Ry():my()}function my(){$t(ka(),"useNavigate() may be used only in the context of a <Router> component.");let s=he.useContext(Po),{basename:e,navigator:t}=he.useContext(Oi),{matches:i}=he.useContext(dr),{pathname:o}=Es(),a=JSON.stringify(q_(i)),u=he.useRef(!1);return ev(()=>{u.current=!0}),he.useCallback((f,d={})=>{if(Ii(u.current,Q_),!u.current)return;if(typeof f=="number"){t.go(f);return}let p=$_(f,JSON.parse(a),o,d.relative==="path");s==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:lr([e,p.pathname])),(d.replace?t.replace:t.push)(p,d.state,d)},[e,t,a,o,s])}he.createContext(null);function Ba(s,{relative:e}={}){let{matches:t}=he.useContext(dr),{pathname:i}=Es(),o=JSON.stringify(q_(t));return he.useMemo(()=>$_(s,JSON.parse(o),i,e==="path"),[s,o,i,e])}function gy(s,e){return tv(s,e)}function tv(s,e,t,i,o){var L;$t(ka(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=he.useContext(Oi),{matches:u}=he.useContext(dr),c=u[u.length-1],f=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",g=c&&c.route;{let b=g&&g.path||"";nv(d,!g||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let _=Es(),y;if(e){let b=typeof e=="string"?Co(e):e;$t(p==="/"||((L=b.pathname)==null?void 0:L.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${b.pathname}" was given in the \`location\` prop.`),y=b}else y=_;let E=y.pathname||"/",M=E;if(p!=="/"){let b=p.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(b.length).join("/")}let S=j_(s,{pathname:M});Ii(g||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ii(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=Sy(S&&S.map(b=>Object.assign({},b,{params:Object.assign({},f,b.params),pathname:lr([p,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?p:lr([p,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),u,t,i,o);return e&&x?he.createElement(Oa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},x):x}function _y(){let s=Ay(),e=uy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",s),u=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:a},"ErrorBoundary")," or"," ",he.createElement("code",{style:a},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),t?he.createElement("pre",{style:o},t):null,u)}var vy=he.createElement(_y,null),xy=class extends he.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.unstable_onError?this.props.unstable_onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?he.createElement(dr.Provider,{value:this.props.routeContext},he.createElement(cd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function yy({routeContext:s,match:e,children:t}){let i=he.useContext(Po);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(dr.Provider,{value:s},t)}function Sy(s,e=[],t=null,i=null,o=null){if(s==null){if(!t)return null;if(t.errors)s=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let a=s,u=t==null?void 0:t.errors;if(u!=null){let d=a.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);$t(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,f=-1;if(t)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=d),p.route.id){let{loaderData:g,errors:_}=t,y=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||y){c=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((d,p,g)=>{let _,y=!1,E=null,M=null;t&&(_=u&&p.route.id?u[p.route.id]:void 0,E=p.route.errorElement||vy,c&&(f<0&&g===0?(nv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,M=null):f===g&&(y=!0,M=p.route.hydrateFallbackElement||null)));let S=e.concat(a.slice(0,g+1)),x=()=>{let L;return _?L=E:y?L=M:p.route.Component?L=he.createElement(p.route.Component,null):p.route.element?L=p.route.element:L=d,he.createElement(yy,{match:p,routeContext:{outlet:d,matches:S,isDataRoute:t!=null},children:L})};return t&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?he.createElement(xy,{location:t.location,revalidation:t.revalidation,component:E,error:_,children:x(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:i}):x()},null)}function hd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ey(s){let e=he.useContext(Po);return $t(e,hd(s)),e}function My(s){let e=he.useContext(Hu);return $t(e,hd(s)),e}function Ty(s){let e=he.useContext(dr);return $t(e,hd(s)),e}function fd(s){let e=Ty(s),t=e.matches[e.matches.length-1];return $t(t.route.id,`${s} can only be used on routes that contain a unique "id"`),t.route.id}function wy(){return fd("useRouteId")}function Ay(){var i;let s=he.useContext(cd),e=My("useRouteError"),t=fd("useRouteError");return s!==void 0?s:(i=e.errors)==null?void 0:i[t]}function Ry(){let{router:s}=Ey("useNavigate"),e=fd("useNavigate"),t=he.useRef(!1);return ev(()=>{t.current=!0}),he.useCallback(async(o,a={})=>{Ii(t.current,Q_),t.current&&(typeof o=="number"?s.navigate(o):await s.navigate(o,{fromRouteId:e,...a}))},[s,e])}var vg={};function nv(s,e,t){!e&&!vg[s]&&(vg[s]=!0,Ii(!1,t))}he.memo(by);function by({routes:s,future:e,state:t,unstable_onError:i}){return tv(s,void 0,t,i,e)}function _f(s){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cy({basename:s="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){$t(!ka(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=s.replace(/^\/*/,"/"),c=he.useMemo(()=>({basename:u,navigator:o,static:a,future:{}}),[u,o,a]);typeof t=="string"&&(t=Co(t));let{pathname:f="/",search:d="",hash:p="",state:g=null,key:_="default"}=t,y=he.useMemo(()=>{let E=hr(f,u);return E==null?null:{location:{pathname:E,search:d,hash:p,state:g,key:_},navigationType:i}},[u,f,d,p,g,_,i]);return Ii(y!=null,`<Router basename="${u}"> is not able to match the URL "${f}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:he.createElement(Oi.Provider,{value:c},he.createElement(Oa.Provider,{children:e,value:y}))}function Py({children:s,location:e}){return gy(vf(s),e)}function vf(s,e=[]){let t=[];return he.Children.forEach(s,(i,o)=>{if(!he.isValidElement(i))return;let a=[...e,o];if(i.type===he.Fragment){t.push.apply(t,vf(i.props.children,a));return}$t(i.type===_f,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=vf(i.props.children,a)),t.push(u)}),t}var Au="get",Ru="application/x-www-form-urlencoded";function Vu(s){return s!=null&&typeof s.tagName=="string"}function Ly(s){return Vu(s)&&s.tagName.toLowerCase()==="button"}function Dy(s){return Vu(s)&&s.tagName.toLowerCase()==="form"}function Iy(s){return Vu(s)&&s.tagName.toLowerCase()==="input"}function Ny(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Uy(s,e){return s.button===0&&(!e||e==="_self")&&!Ny(s)}var Zl=null;function Fy(){if(Zl===null)try{new FormData(document.createElement("form"),0),Zl=!1}catch{Zl=!0}return Zl}var Oy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ch(s){return s!=null&&!Oy.has(s)?(Ii(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ru}"`),null):s}function ky(s,e){let t,i,o,a,u;if(Dy(s)){let c=s.getAttribute("action");i=c?hr(c,e):null,t=s.getAttribute("method")||Au,o=Ch(s.getAttribute("enctype"))||Ru,a=new FormData(s)}else if(Ly(s)||Iy(s)&&(s.type==="submit"||s.type==="image")){let c=s.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=s.getAttribute("formaction")||c.getAttribute("action");if(i=f?hr(f,e):null,t=s.getAttribute("formmethod")||c.getAttribute("method")||Au,o=Ch(s.getAttribute("formenctype"))||Ch(c.getAttribute("enctype"))||Ru,a=new FormData(c,s),!Fy()){let{name:d,type:p,value:g}=s;if(p==="image"){let _=d?`${d}.`:"";a.append(`${_}x`,"0"),a.append(`${_}y`,"0")}else d&&a.append(d,g)}}else{if(Vu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Au,i=null,o=Ru,u=s}return a&&o==="text/plain"&&(u=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function dd(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function By(s,e,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname=`_root.${t}`:e&&hr(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${t}`,i}async function zy(s,e){if(s.id in e)return e[s.id];try{let t=await import(s.module);return e[s.id]=t,t}catch(t){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Hy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Vy(s,e,t){let i=await Promise.all(s.map(async o=>{let a=e.routes[o.route.id];if(a){let u=await zy(a,t);return u.links?u.links():[]}return[]}));return jy(i.flat(1).filter(Hy).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function xg(s,e,t,i,o,a){let u=(f,d)=>t[d]?f.route.id!==t[d].route.id:!0,c=(f,d)=>{var p;return t[d].pathname!==f.pathname||((p=t[d].route.path)==null?void 0:p.endsWith("*"))&&t[d].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,d)=>u(f,d)||c(f,d)):a==="data"?e.filter((f,d)=>{var g;let p=i.routes[f.route.id];if(!p||!p.hasLoader)return!1;if(u(f,d)||c(f,d))return!0;if(f.route.shouldRevalidate){let _=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(s,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Gy(s,e,{includeHydrateFallback:t}={}){return Wy(s.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function Wy(s){return[...new Set(s)]}function Xy(s){let e={},t=Object.keys(s).sort();for(let i of t)e[i]=s[i];return e}function jy(s,e){let t=new Set;return new Set(e),s.reduce((i,o)=>{let a=JSON.stringify(Xy(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function iv(){let s=he.useContext(Po);return dd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Yy(){let s=he.useContext(Hu);return dd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var pd=he.createContext(void 0);pd.displayName="FrameworkContext";function rv(){let s=he.useContext(pd);return dd(s,"You must render this element inside a <HydratedRouter> element"),s}function Ky(s,e){let t=he.useContext(pd),[i,o]=he.useState(!1),[a,u]=he.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:d,onMouseLeave:p,onTouchStart:g}=e,_=he.useRef(null);he.useEffect(()=>{if(s==="render"&&u(!0),s==="viewport"){let M=x=>{x.forEach(L=>{u(L.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[s]),he.useEffect(()=>{if(i){let M=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(M)}}},[i]);let y=()=>{o(!0)},E=()=>{o(!1),u(!1)};return t?s!=="intent"?[a,_,{}]:[a,_,{onFocus:pa(c,y),onBlur:pa(f,E),onMouseEnter:pa(d,y),onMouseLeave:pa(p,E),onTouchStart:pa(g,y)}]:[!1,_,{}]}function pa(s,e){return t=>{s&&s(t),t.defaultPrevented||e(t)}}function qy({page:s,...e}){let{router:t}=iv(),i=he.useMemo(()=>j_(t.routes,s,t.basename),[t.routes,s,t.basename]);return i?he.createElement(Zy,{page:s,matches:i,...e}):null}function $y(s){let{manifest:e,routeModules:t}=rv(),[i,o]=he.useState([]);return he.useEffect(()=>{let a=!1;return Vy(s,e,t).then(u=>{a||o(u)}),()=>{a=!0}},[s,e,t]),i}function Zy({page:s,matches:e,...t}){let i=Es(),{manifest:o,routeModules:a}=rv(),{basename:u}=iv(),{loaderData:c,matches:f}=Yy(),d=he.useMemo(()=>xg(s,e,f,o,i,"data"),[s,e,f,o,i]),p=he.useMemo(()=>xg(s,e,f,o,i,"assets"),[s,e,f,o,i]),g=he.useMemo(()=>{if(s===i.pathname+i.search+i.hash)return[];let E=new Set,M=!1;if(e.forEach(x=>{var b;let L=o.routes[x.route.id];!L||!L.hasLoader||(!d.some(A=>A.route.id===x.route.id)&&x.route.id in c&&((b=a[x.route.id])!=null&&b.shouldRevalidate)||L.hasClientLoader?M=!0:E.add(x.route.id))}),E.size===0)return[];let S=By(s,u,"data");return M&&E.size>0&&S.searchParams.set("_routes",e.filter(x=>E.has(x.route.id)).map(x=>x.route.id).join(",")),[S.pathname+S.search]},[u,c,i,o,d,e,s,a]),_=he.useMemo(()=>Gy(p,o),[p,o]),y=$y(p);return he.createElement(he.Fragment,null,g.map(E=>he.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),_.map(E=>he.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),y.map(({key:E,link:M})=>he.createElement("link",{key:E,nonce:t.nonce,...M})))}function Jy(...s){return e=>{s.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sv&&(window.__reactRouterVersion="7.8.2")}catch{}function Qy({basename:s,children:e,window:t}){let i=he.useRef();i.current==null&&(i.current=zx({window:t,v5Compat:!0}));let o=i.current,[a,u]=he.useState({action:o.action,location:o.location}),c=he.useCallback(f=>{he.startTransition(()=>u(f))},[u]);return he.useLayoutEffect(()=>o.listen(c),[o,c]),he.createElement(Cy,{basename:s,children:e,location:a.location,navigationType:a.action,navigator:o})}var ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,po=he.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:u,state:c,target:f,to:d,preventScrollReset:p,viewTransition:g,..._},y){let{basename:E}=he.useContext(Oi),M=typeof d=="string"&&ov.test(d),S,x=!1;if(typeof d=="string"&&M&&(S=d,sv))try{let C=new URL(window.location.href),P=d.startsWith("//")?new URL(C.protocol+d):new URL(d),O=hr(P.pathname,E);P.origin===C.origin&&O!=null?d=O+P.search+P.hash:x=!0}catch{Ii(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=dy(d,{relative:o}),[b,A,N]=Ky(i,_),B=iS(d,{replace:u,state:c,target:f,preventScrollReset:p,relative:o,viewTransition:g});function F(C){e&&e(C),C.defaultPrevented||B(C)}let j=he.createElement("a",{..._,...N,href:S||L,onClick:x||a?e:F,ref:Jy(y,A),target:f,"data-discover":!M&&t==="render"?"true":void 0});return b&&!M?he.createElement(he.Fragment,null,j,he.createElement(qy,{page:L})):j});po.displayName="Link";var eS=he.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:u,viewTransition:c,children:f,...d},p){let g=Ba(u,{relative:d.relative}),_=Es(),y=he.useContext(Hu),{navigator:E,basename:M}=he.useContext(Oi),S=y!=null&&lS(g)&&c===!0,x=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,L=_.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(L=L.toLowerCase(),b=b?b.toLowerCase():null,x=x.toLowerCase()),b&&M&&(b=hr(b,M)||b);const A=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let N=L===x||!o&&L.startsWith(x)&&L.charAt(A)==="/",B=b!=null&&(b===x||!o&&b.startsWith(x)&&b.charAt(x.length)==="/"),F={isActive:N,isPending:B,isTransitioning:S},j=N?e:void 0,C;typeof i=="function"?C=i(F):C=[i,N?"active":null,B?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(F):a;return he.createElement(po,{...d,"aria-current":j,className:C,ref:p,style:P,to:u,viewTransition:c},typeof f=="function"?f(F):f)});eS.displayName="NavLink";var tS=he.forwardRef(({discover:s="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:u=Au,action:c,onSubmit:f,relative:d,preventScrollReset:p,viewTransition:g,..._},y)=>{let E=oS(),M=aS(c,{relative:d}),S=u.toLowerCase()==="get"?"get":"post",x=typeof c=="string"&&ov.test(c),L=b=>{if(f&&f(b),b.defaultPrevented)return;b.preventDefault();let A=b.nativeEvent.submitter,N=(A==null?void 0:A.getAttribute("formmethod"))||u;E(A||b.currentTarget,{fetcherKey:e,method:N,navigate:t,replace:o,state:a,relative:d,preventScrollReset:p,viewTransition:g})};return he.createElement("form",{ref:y,method:S,action:M,onSubmit:i?f:L,..._,"data-discover":!x&&s==="render"?"true":void 0})});tS.displayName="Form";function nS(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function av(s){let e=he.useContext(Po);return $t(e,nS(s)),e}function iS(s,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:u}={}){let c=py(),f=Es(),d=Ba(s,{relative:a});return he.useCallback(p=>{if(Uy(p,e)){p.preventDefault();let g=t!==void 0?t:Ca(f)===Ca(d);c(s,{replace:g,state:i,preventScrollReset:o,relative:a,viewTransition:u})}},[f,c,d,t,i,e,s,o,a,u])}var rS=0,sS=()=>`__${String(++rS)}__`;function oS(){let{router:s}=av("useSubmit"),{basename:e}=he.useContext(Oi),t=wy();return he.useCallback(async(i,o={})=>{let{action:a,method:u,encType:c,formData:f,body:d}=ky(i,e);if(o.navigate===!1){let p=o.fetcherKey||sS();await s.fetch(p,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:d,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await s.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:d,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[s,e,t])}function aS(s,{relative:e}={}){let{basename:t}=he.useContext(Oi),i=he.useContext(dr);$t(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Ba(s||".",{relative:e})},u=Es();if(s==null){a.search=u.search;let c=new URLSearchParams(a.search),f=c.getAll("index");if(f.some(p=>p==="")){c.delete("index"),f.filter(g=>g).forEach(g=>c.append("index",g));let p=c.toString();a.search=p?`?${p}`:""}}return(!s||s===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:lr([t,a.pathname])),Ca(a)}function lS(s,{relative:e}={}){let t=he.useContext(J_);$t(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=av("useViewTransitionState"),o=Ba(s,{relative:e});if(!t.isTransitioning)return!1;let a=hr(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=hr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Uu(o.pathname,u)!=null||Uu(o.pathname,a)!=null}const uS=({onComplete:s})=>{const[e,t]=he.useState(""),i="<BioElectro>";return he.useEffect(()=>{let o=0;const a=setInterval(()=>{t(i.substring(0,o)),o++,o>i.length&&(clearInterval(a),setTimeout(()=>{s()},1e3))},100);return()=>clearInterval(a)},[s]),ve.jsxs("div",{className:"fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center",children:[ve.jsxs("div",{className:"mb-4 text-4xl font-mono font-bold",children:[e," ",ve.jsx("span",{className:"animate-blink ml-1",children:" | "})]}),ve.jsx("div",{className:"w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden",children:ve.jsx("div",{className:"w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"})})]})},cS=({menuOpen:s,setMenuOpen:e})=>(he.useEffect(()=>{document.body.style.overflow=s?"hidden":""},[s]),ve.jsx("nav",{className:"fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg",children:ve.jsx("div",{className:"max-w-5xl mx-auto px-4",children:ve.jsxs("div",{className:"flex justify-between items-center h-16",children:[ve.jsxs(po,{to:"/",className:"font-mono text-xl font-bold text-white",children:["BioEchem",ve.jsx("span",{className:"text-emerlad-300",children:"Builds"})]}),ve.jsx("div",{className:"w-7 h-5 relative cursor-pointer z-40 md:hidden",onClick:()=>e(t=>!t),children:"☰"}),ve.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[ve.jsx(po,{to:"/",className:"text-gray-300 hover:text-white transition-colors",children:"Home"}),ve.jsx("a",{href:"#about",className:"text-gray-300 hover:text-white transition-colors",children:"Usage"}),ve.jsx("a",{href:"#projects",className:"text-gray-300 hover:text-white transition-colors",children:"Part List"}),ve.jsx(po,{to:"/contact",className:"text-gray-300 hover:text-white transition-colors",children:"Model"})]})]})})})),hS=({menuOpen:s,setMenuOpen:e})=>ve.jsxs("div",{className:`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${s?"h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none"}
      `,children:[ve.jsx("button",{onClick:()=>e(!1),className:"absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer","aria-label":"Close Menu",children:"×"}),ve.jsx("a",{href:"#home",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Home"}),ve.jsx("a",{href:"#about",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Usage"}),ve.jsx("a",{href:"#projects",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Part List"}),ve.jsx(po,{to:"/contact",onClick:()=>e(!1),className:`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${s?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`,children:"Model"})]}),md=({children:s})=>{const e=he.useRef(null);return he.useEffect(()=>{const t=new IntersectionObserver(([i])=>{i.isIntersecting&&e.current.classList.add("visible")},{threshold:.2,rootMargin:"0px 0px -50px 0px"});return e.current&&t.observe(e.current),()=>t.disconnect()}),ve.jsx("div",{ref:e,className:"reveal",children:s})},fS=()=>ve.jsx("section",{id:"home",className:"min-h-screen flex items-center justify-center relative",children:ve.jsx(md,{children:ve.jsxs("div",{className:"text-center z-10 px-4",children:[ve.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent leading-right",children:"Microbial Electrochemical Bioreactor"}),ve.jsx("p",{className:"tex-gray-400 text-lg mb-8 max-w-lg mx-auto",children:"3D printable electrochemical bioreactor for lab-scale microbial electrochemistry."}),ve.jsxs("div",{className:"flex justify-center space-x-4",children:[ve.jsx("a",{href:"#CAD Files",className:"bg-emerald-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]",children:"CAD Files"}),ve.jsx("a",{href:"#projects",className:`bg-emerald-300 text-white py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10`,children:"Part List"})]})]})})}),dS=()=>{const s=["NIH 3D Database Deposit","Journal of Chemical Education Paper"],e=["3D Printing","Gasket Fabrication","Assembly"];return ve.jsx("section",{id:"about",className:"min-h-screen flex items-center justify-center py-20",children:ve.jsx(md,{children:ve.jsxs("div",{className:"max-w-3xl mx-auto px-4",children:[ve.jsxs("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center",children:[" ","Usage"]}),ve.jsxs("div",{className:"rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all",children:[ve.jsx("p",{className:"text-gray-300 mb-6",children:"For 100mL scale microbial electrochemical experiments."}),ve.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[ve.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[ve.jsx("h3",{className:"text-xl font-bold mb-4",children:" Resources"}),ve.jsx("div",{className:"flex flex-wrap gap-2",children:s.map((t,i)=>ve.jsx("span",{className:`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    `,children:t},i))})]}),ve.jsxs("div",{className:"rounded-xl p-6 hover:-translate-y-1 transition-all",children:[ve.jsx("h3",{className:"text-xl font-bold mb-4",children:" Protocols"}),ve.jsx("div",{className:"flex flex-wrap gap-2",children:e.map((t,i)=>ve.jsx("span",{className:`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    `,children:t},i))})]})]})]}),ve.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-8",children:[ve.jsxs("div",{className:"p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all",children:[ve.jsx("h3",{className:"text-xl font-bold mb-4",children:" 🏫 MIT Furst Lab "}),ve.jsxs("ul",{className:"list-disc list-inside text-gray-300 space-y-2",children:[ve.jsxs("li",{children:[ve.jsx("strong",{children:" Department of Chemical Engineering "})," - MIT 2025"]}),ve.jsx("li",{children:"Designed by: Swathi Penumutchu"})]})]}),ve.jsxs("div",{className:"p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all",children:[ve.jsx("h3",{className:"text-xl font-bold mb-4",children:" Cite "}),ve.jsxs("div",{className:"space-y-4 text-gray-300",children:[ve.jsxs("div",{children:[ve.jsxs("h4",{className:"font-semibold",children:[" ","GitHub Repo"," "]}),ve.jsx("p",{children:"Link to design files and WebApp."})]}),ve.jsxs("div",{children:[ve.jsxs("h4",{className:"font-semibold",children:[" ","BioEchemBuilds Database"," "]}),ve.jsx("p",{children:"Fabrication database with all builds in microbial elechemistry toolkit."})]})]})]})]})]})})})},pS=()=>ve.jsx("section",{id:"projects",className:"min-h-screen flex items-center justify-center py-20",children:ve.jsx(md,{children:ve.jsxs("div",{className:"max-w-5xl mx-auto px-4",children:[ve.jsxs("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center",children:[" ","Part List"]}),ve.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[ve.jsxs("div",{className:"p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition",children:[ve.jsx("h3",{className:"text-xl font-bold mb-2",children:" Links"}),ve.jsx("p",{className:"text-gray-400 mb-4",children:"Additional Required Parts."}),ve.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:["Glass Jar","Gasket 1","Gasket 2"].map((s,e)=>ve.jsx("span",{className:`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    `,children:s},e))}),ve.jsx("div",{className:"flex justify-between items-center",children:ve.jsx("a",{href:"#",className:"text-blue-400 hover:text-blue-300 transition-colors my-4",children:"McMaster →"})})]}),ve.jsxs("div",{className:`
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            `,children:[ve.jsx("h3",{className:"text-xl font-bold mb-2",children:"Electrodes"}),ve.jsx("p",{className:"text-gray-400 mb-4",children:"Materials for Working Counter and Reference Electrodes."}),ve.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:["Fuel Cell Store","WPI","CHI"].map((s,e)=>ve.jsx("span",{className:`
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    `,children:s},e))}),ve.jsx("div",{className:"flex justify-between items-center ",children:ve.jsx("a",{href:"#",className:"text-blue-400 hover:text-blue-300 transition-colors my-4",children:"Purchase →"})})]})]})]})})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="179",mo={ROTATE:0,DOLLY:1,PAN:2},ho={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mS=0,yg=1,gS=2,lv=1,uv=2,rr=3,fr=0,Wn=1,Pi=2,Wr=0,go=1,Sg=2,Eg=3,Mg=4,_S=5,gs=100,vS=101,xS=102,yS=103,SS=104,ES=200,MS=201,TS=202,wS=203,xf=204,yf=205,AS=206,RS=207,bS=208,CS=209,PS=210,LS=211,DS=212,IS=213,NS=214,Sf=0,Ef=1,Mf=2,yo=3,Tf=4,wf=5,Af=6,Rf=7,cv=0,US=1,FS=2,Xr=0,OS=1,kS=2,BS=3,zS=4,HS=5,VS=6,GS=7,Tg="attached",WS="detached",hv=300,So=301,Eo=302,bf=303,Cf=304,Gu=306,Mo=1e3,Gr=1001,Fu=1002,Nn=1003,fv=1004,Ta=1005,Jn=1006,bu=1007,or=1008,Ni=1009,dv=1010,pv=1011,Pa=1012,_d=1013,ys=1014,Ei=1015,za=1016,vd=1017,xd=1018,La=1020,mv=35902,gv=1021,_v=1022,ui=1023,Da=1026,Ia=1027,yd=1028,Sd=1029,vv=1030,Ed=1031,Md=1033,Cu=33776,Pu=33777,Lu=33778,Du=33779,Pf=35840,Lf=35841,Df=35842,If=35843,Nf=36196,Uf=37492,Ff=37496,Of=37808,kf=37809,Bf=37810,zf=37811,Hf=37812,Vf=37813,Gf=37814,Wf=37815,Xf=37816,jf=37817,Yf=37818,Kf=37819,qf=37820,$f=37821,Iu=36492,Zf=36494,Jf=36495,xv=36283,Qf=36284,ed=36285,td=36286,Na=2300,Ua=2301,Ph=2302,wg=2400,Ag=2401,Rg=2402,XS=2500,jS=0,yv=1,nd=2,YS=3200,KS=3201,Sv=0,qS=1,Vr="",pn="srgb",Fn="srgb-linear",Ou="linear",Ft="srgb",qs=7680,bg=519,$S=512,ZS=513,JS=514,Ev=515,QS=516,eE=517,tE=518,nE=519,id=35044,Cg="300 es",Li=2e3,ku=2001;class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pg=1234567;const Aa=Math.PI/180,To=180/Math.PI;function Mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Td(s,e){return(s%e+e)%e}function iE(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function rE(s,e,t){return s!==e?(t-s)/(e-s):0}function Ra(s,e,t){return(1-t)*s+t*e}function sE(s,e,t,i){return Ra(s,e,1-Math.exp(-t*i))}function oE(s,e=1){return e-Math.abs(Td(s,e*2)-e)}function aE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function lE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function uE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cE(s,e){return s+Math.random()*(e-s)}function hE(s){return s*(.5-Math.random())}function fE(s){s!==void 0&&(Pg=s);let e=Pg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dE(s){return s*Aa}function pE(s){return s*To}function mE(s){return(s&s-1)===0&&s!==0}function gE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _E(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vE(s,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+i)/2),p=u((e+i)/2),g=a((e-i)/2),_=u((e-i)/2),y=a((i-e)/2),E=u((i-e)/2);switch(o){case"XYX":s.set(c*p,f*g,f*_,c*d);break;case"YZY":s.set(f*_,c*p,f*g,c*d);break;case"ZXZ":s.set(f*g,f*_,c*p,c*d);break;case"XZX":s.set(c*p,f*E,f*y,c*d);break;case"YXY":s.set(f*y,c*p,f*E,c*d);break;case"ZYZ":s.set(f*E,f*y,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function yi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mv={DEG2RAD:Aa,RAD2DEG:To,generateUUID:Mi,clamp:gt,euclideanModulo:Td,mapLinear:iE,inverseLerp:rE,lerp:Ra,damp:sE,pingpong:oE,smoothstep:aE,smootherstep:lE,randInt:uE,randFloat:cE,randFloatSpread:hE,seededRandom:fE,degToRad:dE,radToDeg:pE,isPowerOfTwo:mE,ceilPowerOfTwo:gE,floorPowerOfTwo:_E,setQuaternionFromProperEuler:vE,normalize:It,denormalize:yi};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ui{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let f=i[o+0],d=i[o+1],p=i[o+2],g=i[o+3];const _=a[u+0],y=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(g!==M||f!==_||d!==y||p!==E){let S=1-c;const x=f*_+d*y+p*E+g*M,L=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const N=Math.sqrt(b),B=Math.atan2(N,x*L);S=Math.sin(S*B)/N,c=Math.sin(c*B)/N}const A=c*L;if(f=f*S+_*A,d=d*S+y*A,p=p*S+E*A,g=g*S+M*A,S===1-c){const N=1/Math.sqrt(f*f+d*d+p*p+g*g);f*=N,d*=N,p*=N,g*=N}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],f=i[o+1],d=i[o+2],p=i[o+3],g=a[u],_=a[u+1],y=a[u+2],E=a[u+3];return e[t]=c*E+p*g+f*y-d*_,e[t+1]=f*E+p*_+d*g-c*y,e[t+2]=d*E+p*y+c*_-f*g,e[t+3]=p*E-c*g-f*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(i/2),p=c(o/2),g=c(a/2),_=f(i/2),y=f(o/2),E=f(a/2);switch(u){case"XYZ":this._x=_*p*g+d*y*E,this._y=d*y*g-_*p*E,this._z=d*p*E+_*y*g,this._w=d*p*g-_*y*E;break;case"YXZ":this._x=_*p*g+d*y*E,this._y=d*y*g-_*p*E,this._z=d*p*E-_*y*g,this._w=d*p*g+_*y*E;break;case"ZXY":this._x=_*p*g-d*y*E,this._y=d*y*g+_*p*E,this._z=d*p*E+_*y*g,this._w=d*p*g-_*y*E;break;case"ZYX":this._x=_*p*g-d*y*E,this._y=d*y*g+_*p*E,this._z=d*p*E-_*y*g,this._w=d*p*g+_*y*E;break;case"YZX":this._x=_*p*g+d*y*E,this._y=d*y*g+_*p*E,this._z=d*p*E-_*y*g,this._w=d*p*g-_*y*E;break;case"XZY":this._x=_*p*g-d*y*E,this._y=d*y*g-_*p*E,this._z=d*p*E+_*y*g,this._w=d*p*g+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],g=t[10],_=i+c+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(p-f)*y,this._y=(a-d)*y,this._z=(u-o)*y}else if(i>c&&i>g){const y=2*Math.sqrt(1+i-c-g);this._w=(p-f)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(a+d)/y}else if(c>g){const y=2*Math.sqrt(1+c-i-g);this._w=(a-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+g-i-c);this._w=(u-o)/y,this._x=(a+d)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+o*d-a*f,this._y=o*p+u*f+a*c-i*d,this._z=a*p+u*d+i*f-o*c,this._w=u*p-i*c-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*i+t*this._x,this._y=y*o+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),g=Math.sin((1-t)*p)/d,_=Math.sin(t*p)/d;return this._w=u*g+this._w*_,this._x=i*g+this._x*_,this._y=o*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*o-c*i),p=2*(c*t-a*o),g=2*(a*i-u*t);return this.x=t+f*d+u*g-c*p,this.y=i+f*p+c*d-a*g,this.z=o+f*g+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-i*f,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lh=new X,Lg=new Ui;class dt{constructor(e,t,i,o,a,u,c,f,d){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d)}set(e,t,i,o,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],p=i[4],g=i[7],_=i[2],y=i[5],E=i[8],M=o[0],S=o[3],x=o[6],L=o[1],b=o[4],A=o[7],N=o[2],B=o[5],F=o[8];return a[0]=u*M+c*L+f*N,a[3]=u*S+c*b+f*B,a[6]=u*x+c*A+f*F,a[1]=d*M+p*L+g*N,a[4]=d*S+p*b+g*B,a[7]=d*x+p*A+g*F,a[2]=_*M+y*L+E*N,a[5]=_*S+y*b+E*B,a[8]=_*x+y*A+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*a*p+i*c*f+o*a*d-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],g=p*u-c*d,_=c*f-p*a,y=d*a-u*f,E=t*g+i*_+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(o*d-p*i)*M,e[2]=(c*i-o*u)*M,e[3]=_*M,e[4]=(p*t-o*f)*M,e[5]=(o*a-c*t)*M,e[6]=y*M,e[7]=(i*f-d*t)*M,e[8]=(u*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*u+d*c)+u+e,-o*d,o*f,-o*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new dt;function Tv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xE(){const s=Fa("canvas");return s.style.display="block",s}const Dg={};function _o(s){s in Dg||(Dg[s]=!0,console.warn(s))}function yE(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Ig=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ng=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SE(){const s={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Ft&&(o.r=ur(o.r),o.g=ur(o.g),o.b=ur(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(o.r=vo(o.r),o.g=vo(o.g),o.b=vo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vr?Ou:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return _o("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return _o("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Fn]:{primaries:e,whitePoint:i,transfer:Ou,toXYZ:Ig,fromXYZ:Ng,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:Ig,fromXYZ:Ng,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),s}const wt=SE();function ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $s;class EE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$s===void 0&&($s=Fa("canvas")),$s.width=e.width,$s.height=e.height;const o=$s.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=$s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ur(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ME=0;class wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Ih(o[u].image)):a.push(Ih(o[u]))}else a=Ih(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ih(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?EE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TE=0;const Nh=new X;class mn extends Ms{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=Gr,o=Gr,a=Jn,u=or,c=ui,f=Ni,d=mn.DEFAULT_ANISOTROPY,p=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Mi(),this.name="",this.source=new wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case Fu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case Fu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=hv;mn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,o=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,d=f[0],p=f[4],g=f[8],_=f[1],y=f[5],E=f[9],M=f[2],S=f[6],x=f[10];if(Math.abs(p-_)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,A=(y+1)/2,N=(x+1)/2,B=(p+_)/4,F=(g+M)/4,j=(E+S)/4;return b>A&&b>N?b<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(b),o=B/i,a=F/i):A>N?A<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(A),i=B/o,a=j/o):N<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(N),i=F/a,o=j/a),this.set(i,o,a,t),this}let L=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(_-p)*(_-p));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(g-M)/L,this.z=(_-p)/L,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wE extends Ms{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const o={width:e,height:t,depth:i.depth},a=new mn(o);this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new wd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends wE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wv extends mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AE extends mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(a,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Ql.subVectors(this.max,ma),Zs.subVectors(e.a,ma),Js.subVectors(e.b,ma),Qs.subVectors(e.c,ma),Nr.subVectors(Js,Zs),Ur.subVectors(Qs,Js),ls.subVectors(Zs,Qs);let t=[0,-Nr.z,Nr.y,0,-Ur.z,Ur.y,0,-ls.z,ls.y,Nr.z,0,-Nr.x,Ur.z,0,-Ur.x,ls.z,0,-ls.x,-Nr.y,Nr.x,0,-Ur.y,Ur.x,0,-ls.y,ls.x,0];return!Uh(t,Zs,Js,Qs,Ql)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,Zs,Js,Qs,Ql))?!1:(eu.crossVectors(Nr,Ur),t=[eu.x,eu.y,eu.z],Uh(t,Zs,Js,Qs,Ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new X,new X,new X,new X,new X,new X,new X,new X],_i=new X,Jl=new ki,Zs=new X,Js=new X,Qs=new X,Nr=new X,Ur=new X,ls=new X,ma=new X,Ql=new X,eu=new X,us=new X;function Uh(s,e,t,i,o){for(let a=0,u=s.length-3;a<=u;a+=3){us.fromArray(s,a);const c=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),f=e.dot(us),d=t.dot(us),p=i.dot(us);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const RE=new ki,ga=new X,Fh=new X;class Bi{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):RE.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ga,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Fh)),this.expandByPoint(ga.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qi=new X,Oh=new X,tu=new X,Fr=new X,kh=new X,nu=new X,Bh=new X;class Ha{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Oh.copy(e).add(t).multiplyScalar(.5),tu.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(Oh);const a=e.distanceTo(t)*.5,u=-this.direction.dot(tu),c=Fr.dot(this.direction),f=-Fr.dot(tu),d=Fr.lengthSq(),p=Math.abs(1-u*u);let g,_,y,E;if(p>0)if(g=u*f-c,_=u*c-f,E=a*p,g>=0)if(_>=-E)if(_<=E){const M=1/p;g*=M,_*=M,y=g*(g+u*_+2*c)+_*(u*g+_+2*f)+d}else _=a,g=Math.max(0,-(u*_+c)),y=-g*g+_*(_+2*f)+d;else _=-a,g=Math.max(0,-(u*_+c)),y=-g*g+_*(_+2*f)+d;else _<=-E?(g=Math.max(0,-(-u*a+c)),_=g>0?-a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+d):_<=E?(g=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+d):(g=Math.max(0,-(u*a+c)),_=g>0?a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+d);else _=u>0?-a:a,g=Math.max(0,-(u*_+c)),y=-g*g+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Oh).addScaledVector(tu,_),y}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),o=Qi.dot(Qi)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,o=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,o=(e.min.x-_.x)*d),p>=0?(a=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||c>o)||((c>i||i!==i)&&(i=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,o,a){kh.subVectors(t,e),nu.subVectors(i,e),Bh.crossVectors(kh,nu);let u=this.direction.dot(Bh),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Fr.subVectors(this.origin,e);const f=c*this.direction.dot(nu.crossVectors(Fr,nu));if(f<0)return null;const d=c*this.direction.dot(kh.cross(Fr));if(d<0||f+d>u)return null;const p=-c*Fr.dot(Bh);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,o,a,u,c,f,d,p,g,_,y,E,M,S){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d,p,g,_,y,E,M,S)}set(e,t,i,o,a,u,c,f,d,p,g,_,y,E,M,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=o,x[1]=a,x[5]=u,x[9]=c,x[13]=f,x[2]=d,x[6]=p,x[10]=g,x[14]=_,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/eo.setFromMatrixColumn(e,0).length(),a=1/eo.setFromMatrixColumn(e,1).length(),u=1/eo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(o),d=Math.sin(o),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=u*p,y=u*g,E=c*p,M=c*g;t[0]=f*p,t[4]=-f*g,t[8]=d,t[1]=y+E*d,t[5]=_-M*d,t[9]=-c*f,t[2]=M-_*d,t[6]=E+y*d,t[10]=u*f}else if(e.order==="YXZ"){const _=f*p,y=f*g,E=d*p,M=d*g;t[0]=_+M*c,t[4]=E*c-y,t[8]=u*d,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=y*c-E,t[6]=M+_*c,t[10]=u*f}else if(e.order==="ZXY"){const _=f*p,y=f*g,E=d*p,M=d*g;t[0]=_-M*c,t[4]=-u*g,t[8]=E+y*c,t[1]=y+E*c,t[5]=u*p,t[9]=M-_*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const _=u*p,y=u*g,E=c*p,M=c*g;t[0]=f*p,t[4]=E*d-y,t[8]=_*d+M,t[1]=f*g,t[5]=M*d+_,t[9]=y*d-E,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const _=u*f,y=u*d,E=c*f,M=c*d;t[0]=f*p,t[4]=M-_*g,t[8]=E*g+y,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=y*g+E,t[10]=_-M*g}else if(e.order==="XZY"){const _=u*f,y=u*d,E=c*f,M=c*d;t[0]=f*p,t[4]=-g,t[8]=d*p,t[1]=_*g+M,t[5]=u*p,t[9]=y*g-E,t[2]=E*g-y,t[6]=c*p,t[10]=M*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bE,e,CE)}lookAt(e,t,i){const o=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Or.crossVectors(i,$n),Or.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Or.crossVectors(i,$n)),Or.normalize(),iu.crossVectors($n,Or),o[0]=Or.x,o[4]=iu.x,o[8]=$n.x,o[1]=Or.y,o[5]=iu.y,o[9]=$n.y,o[2]=Or.z,o[6]=iu.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],p=i[1],g=i[5],_=i[9],y=i[13],E=i[2],M=i[6],S=i[10],x=i[14],L=i[3],b=i[7],A=i[11],N=i[15],B=o[0],F=o[4],j=o[8],C=o[12],P=o[1],O=o[5],le=o[9],ne=o[13],ae=o[2],fe=o[6],se=o[10],ce=o[14],H=o[3],oe=o[7],ie=o[11],U=o[15];return a[0]=u*B+c*P+f*ae+d*H,a[4]=u*F+c*O+f*fe+d*oe,a[8]=u*j+c*le+f*se+d*ie,a[12]=u*C+c*ne+f*ce+d*U,a[1]=p*B+g*P+_*ae+y*H,a[5]=p*F+g*O+_*fe+y*oe,a[9]=p*j+g*le+_*se+y*ie,a[13]=p*C+g*ne+_*ce+y*U,a[2]=E*B+M*P+S*ae+x*H,a[6]=E*F+M*O+S*fe+x*oe,a[10]=E*j+M*le+S*se+x*ie,a[14]=E*C+M*ne+S*ce+x*U,a[3]=L*B+b*P+A*ae+N*H,a[7]=L*F+b*O+A*fe+N*oe,a[11]=L*j+b*le+A*se+N*ie,a[15]=L*C+b*ne+A*ce+N*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],g=e[6],_=e[10],y=e[14],E=e[3],M=e[7],S=e[11],x=e[15];return E*(+a*f*g-o*d*g-a*c*_+i*d*_+o*c*y-i*f*y)+M*(+t*f*y-t*d*_+a*u*_-o*u*y+o*d*p-a*f*p)+S*(+t*d*g-t*c*y-a*u*g+i*u*y+a*c*p-i*d*p)+x*(-o*c*p-t*f*g+t*c*_+o*u*g-i*u*_+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],g=e[9],_=e[10],y=e[11],E=e[12],M=e[13],S=e[14],x=e[15],L=g*S*d-M*_*d+M*f*y-c*S*y-g*f*x+c*_*x,b=E*_*d-p*S*d-E*f*y+u*S*y+p*f*x-u*_*x,A=p*M*d-E*g*d+E*c*y-u*M*y-p*c*x+u*g*x,N=E*g*f-p*M*f-E*c*_+u*M*_+p*c*S-u*g*S,B=t*L+i*b+o*A+a*N;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return e[0]=L*F,e[1]=(M*_*a-g*S*a-M*o*y+i*S*y+g*o*x-i*_*x)*F,e[2]=(c*S*a-M*f*a+M*o*d-i*S*d-c*o*x+i*f*x)*F,e[3]=(g*f*a-c*_*a-g*o*d+i*_*d+c*o*y-i*f*y)*F,e[4]=b*F,e[5]=(p*S*a-E*_*a+E*o*y-t*S*y-p*o*x+t*_*x)*F,e[6]=(E*f*a-u*S*a-E*o*d+t*S*d+u*o*x-t*f*x)*F,e[7]=(u*_*a-p*f*a+p*o*d-t*_*d-u*o*y+t*f*y)*F,e[8]=A*F,e[9]=(E*g*a-p*M*a-E*i*y+t*M*y+p*i*x-t*g*x)*F,e[10]=(u*M*a-E*c*a+E*i*d-t*M*d-u*i*x+t*c*x)*F,e[11]=(p*c*a-u*g*a-p*i*d+t*g*d+u*i*y-t*c*y)*F,e[12]=N*F,e[13]=(p*M*o-E*g*o+E*i*_-t*M*_-p*i*S+t*g*S)*F,e[14]=(E*c*o-u*M*o-E*i*f+t*M*f+u*i*S-t*c*S)*F,e[15]=(u*g*o-p*c*o+p*i*f-t*g*f-u*i*_+t*c*_)*F,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+i,d*c-o*f,d*f+o*c,0,d*c+o*f,p*c+i,p*f-o*u,0,d*f-o*c,p*f+o*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,g=c+c,_=a*d,y=a*p,E=a*g,M=u*p,S=u*g,x=c*g,L=f*d,b=f*p,A=f*g,N=i.x,B=i.y,F=i.z;return o[0]=(1-(M+x))*N,o[1]=(y+A)*N,o[2]=(E-b)*N,o[3]=0,o[4]=(y-A)*B,o[5]=(1-(_+x))*B,o[6]=(S+L)*B,o[7]=0,o[8]=(E+b)*F,o[9]=(S-L)*F,o[10]=(1-(_+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=eo.set(o[0],o[1],o[2]).length();const u=eo.set(o[4],o[5],o[6]).length(),c=eo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],vi.copy(this);const d=1/a,p=1/u,g=1/c;return vi.elements[0]*=d,vi.elements[1]*=d,vi.elements[2]*=d,vi.elements[4]*=p,vi.elements[5]*=p,vi.elements[6]*=p,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,t.setFromRotationMatrix(vi),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=Li,f=!1){const d=this.elements,p=2*a/(t-e),g=2*a/(i-o),_=(t+e)/(t-e),y=(i+o)/(i-o);let E,M;if(f)E=a/(u-a),M=u*a/(u-a);else if(c===Li)E=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===ku)E=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=Li,f=!1){const d=this.elements,p=2/(t-e),g=2/(i-o),_=-(t+e)/(t-e),y=-(i+o)/(i-o);let E,M;if(f)E=1/(u-a),M=u/(u-a);else if(c===Li)E=-2/(u-a),M=-(u+a)/(u-a);else if(c===ku)E=-1/(u-a),M=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const eo=new X,vi=new mt,bE=new X(0,0,0),CE=new X(1,1,1),Or=new X,iu=new X,$n=new X,Ug=new mt,Fg=new Ui;class Fi{constructor(e=0,t=0,i=0,o=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],g=o[2],_=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ug,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fg.setFromEuler(this),this.setFromQuaternion(Fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const Og=new X,to=new Ui,er=new mt,ru=new X,_a=new X,LE=new X,DE=new Ui,kg=new X(1,0,0),Bg=new X(0,1,0),zg=new X(0,0,1),Hg={type:"added"},IE={type:"removed"},no={type:"childadded",child:null},zh={type:"childremoved",child:null};class Zt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new X,t=new Fi,i=new Ui,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mt},normalMatrix:{value:new dt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(kg,e)}rotateY(e){return this.rotateOnAxis(Bg,e)}rotateZ(e){return this.rotateOnAxis(zg,e)}translateOnAxis(e,t){return Og.copy(e).applyQuaternion(this.quaternion),this.position.add(Og.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kg,e)}translateY(e){return this.translateOnAxis(Bg,e)}translateZ(e){return this.translateOnAxis(zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ru.copy(e):ru.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(_a,ru,this.up):er.lookAt(ru,_a,this.up),this.quaternion.setFromRotationMatrix(er),o&&(er.extractRotation(o.matrixWorld),to.setFromRotationMatrix(er),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hg),no.child=e,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IE),zh.child=e,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hg),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,LE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,DE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const g=f[d];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),g=u(e.shapes),_=u(e.skeletons),y=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=o,i;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Zt.DEFAULT_UP=new X(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new X,tr=new X,Hh=new X,nr=new X,io=new X,ro=new X,Vg=new X,Vh=new X,Gh=new X,Wh=new X,Xh=new bt,jh=new bt,Yh=new bt;class Si{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),xi.subVectors(e,t),o.cross(xi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){xi.subVectors(o,t),tr.subVectors(i,t),Hh.subVectors(e,t);const u=xi.dot(xi),c=xi.dot(tr),f=xi.dot(Hh),d=tr.dot(tr),p=tr.dot(Hh),g=u*d-c*c;if(g===0)return a.set(0,0,0),null;const _=1/g,y=(d*f-c*p)*_,E=(u*p-c*f)*_;return a.set(1-y-E,E,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,i,o,a,u,c,f){return this.getBarycoord(e,t,i,o,nr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,nr.x),f.addScaledVector(u,nr.y),f.addScaledVector(c,nr.z),f)}static getInterpolatedAttribute(e,t,i,o,a,u){return Xh.setScalar(0),jh.setScalar(0),Yh.setScalar(0),Xh.fromBufferAttribute(e,t),jh.fromBufferAttribute(e,i),Yh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Xh,a.x),u.addScaledVector(jh,a.y),u.addScaledVector(Yh,a.z),u}static isFrontFacing(e,t,i,o){return xi.subVectors(i,t),tr.subVectors(e,t),xi.cross(tr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),xi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return Si.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;io.subVectors(o,i),ro.subVectors(a,i),Vh.subVectors(e,i);const f=io.dot(Vh),d=ro.dot(Vh);if(f<=0&&d<=0)return t.copy(i);Gh.subVectors(e,o);const p=io.dot(Gh),g=ro.dot(Gh);if(p>=0&&g<=p)return t.copy(o);const _=f*g-p*d;if(_<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(i).addScaledVector(io,u);Wh.subVectors(e,a);const y=io.dot(Wh),E=ro.dot(Wh);if(E>=0&&y<=E)return t.copy(a);const M=y*d-f*E;if(M<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(i).addScaledVector(ro,c);const S=p*E-y*g;if(S<=0&&g-p>=0&&y-E>=0)return Vg.subVectors(a,o),c=(g-p)/(g-p+(y-E)),t.copy(o).addScaledVector(Vg,c);const x=1/(S+M+_);return u=M*x,c=_*x,t.copy(i).addScaledVector(io,u).addScaledVector(ro,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},su={h:0,s:0,l:0};function Kh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=wt.workingColorSpace){if(e=Td(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Kh(u,a,e+1/3),this.g=Kh(u,a,e),this.b=Kh(u,a,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=pn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=Rv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return wt.workingToColorSpace(An.copy(this),e),Math.round(gt(An.r*255,0,255))*65536+Math.round(gt(An.g*255,0,255))*256+Math.round(gt(An.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(An.copy(this),t);const i=An.r,o=An.g,a=An.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const g=u-c;switch(d=p<=.5?g/(u+c):g/(2-u-c),u){case i:f=(o-a)/g+(o<a?6:0);break;case o:f=(a-i)/g+2;break;case a:f=(i-o)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=pn){wt.workingToColorSpace(An.copy(this),e);const t=An.r,i=An.g,o=An.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(su);const i=Ra(kr.h,su.h,t),o=Ra(kr.s,su.s,t),a=Ra(kr.l,su.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new ft;ft.NAMES=Rv;let NE=0;class Di extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=go,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xf,this.blendDst=yf,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xf&&(i.blendSrc=this.blendSrc),this.blendDst!==yf&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vs extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new X,ou=new ut;let UE=0;class Un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=id,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ou.fromBufferAttribute(this,t),ou.applyMatrix3(e),this.setXY(t,ou.x,ou.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),o=It(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),o=It(o,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==id&&(e.usage=this.usage),e}}class bv extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cv extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class cr extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let FE=0;const ai=new mt,qh=new Zt,so=new X,Zn=new ki,va=new ki,dn=new X;class zi extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tv(e)?Cv:bv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new dt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new cr(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];va.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(Zn.min,va.min),Zn.expandByPoint(dn),dn.addVectors(Zn.max,va.max),Zn.expandByPoint(dn)):(Zn.expandByPoint(va.min),Zn.expandByPoint(va.max))}Zn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)dn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(dn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)dn.fromBufferAttribute(c,d),f&&(so.fromBufferAttribute(e,d),dn.add(so)),o=Math.max(o,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let j=0;j<i.count;j++)c[j]=new X,f[j]=new X;const d=new X,p=new X,g=new X,_=new ut,y=new ut,E=new ut,M=new X,S=new X;function x(j,C,P){d.fromBufferAttribute(i,j),p.fromBufferAttribute(i,C),g.fromBufferAttribute(i,P),_.fromBufferAttribute(a,j),y.fromBufferAttribute(a,C),E.fromBufferAttribute(a,P),p.sub(d),g.sub(d),y.sub(_),E.sub(_);const O=1/(y.x*E.y-E.x*y.y);isFinite(O)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(O),S.copy(g).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(O),c[j].add(M),c[C].add(M),c[P].add(M),f[j].add(S),f[C].add(S),f[P].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let j=0,C=L.length;j<C;++j){const P=L[j],O=P.start,le=P.count;for(let ne=O,ae=O+le;ne<ae;ne+=3)x(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const b=new X,A=new X,N=new X,B=new X;function F(j){N.fromBufferAttribute(o,j),B.copy(N);const C=c[j];b.copy(C),b.sub(N.multiplyScalar(N.dot(C))).normalize(),A.crossVectors(B,C);const O=A.dot(f[j])<0?-1:1;u.setXYZW(j,b.x,b.y,b.z,O)}for(let j=0,C=L.length;j<C;++j){const P=L[j],O=P.start,le=P.count;for(let ne=O,ae=O+le;ne<ae;ne+=3)F(e.getX(ne+0)),F(e.getX(ne+1)),F(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const o=new X,a=new X,u=new X,c=new X,f=new X,d=new X,p=new X,g=new X;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),M=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),p.subVectors(u,a),g.subVectors(o,a),p.cross(g),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),c.add(p),f.add(p),d.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let _=0,y=t.count;_<y;_+=3)o.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,a),g.subVectors(o,a),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,g=c.normalized,_=new d.constructor(f.length*p);let y=0,E=0;for(let M=0,S=f.length;M<S;M++){c.isInterleavedBufferAttribute?y=f[M]*c.data.stride+c.offset:y=f[M]*p;for(let x=0;x<p;x++)_[E++]=d[y++]}return new Un(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zi,i=this.index.array,o=this.attributes;for(const c in o){const f=o[c],d=e(f,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,g=d.length;p<g;p++){const _=d[p],y=e(_,i);f.push(y)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let g=0,_=d.length;g<_;g++){const y=d[g];p.push(y.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],g=a[d];for(let _=0,y=g.length;_<y;_++)p.push(g[_].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gg=new mt,cs=new Ha,au=new Bi,Wg=new X,lu=new X,uu=new X,cu=new X,$h=new X,hu=new X,Xg=new X,fu=new X;class Qn extends Zt{constructor(e=new zi,t=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){hu.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],g=a[f];p!==0&&($h.fromBufferAttribute(g,e),u?hu.addScaledVector($h,p):hu.addScaledVector($h.sub(t),p))}t.add(hu)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),au.copy(i.boundingSphere),au.applyMatrix4(a),cs.copy(e.ray).recast(e.near),!(au.containsPoint(cs.origin)===!1&&(cs.intersectSphere(au,Wg)===null||cs.origin.distanceToSquared(Wg)>(e.far-e.near)**2))&&(Gg.copy(a).invert(),cs.copy(e.ray).applyMatrix4(Gg),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,_=a.groups,y=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const S=_[E],x=u[S.materialIndex],L=Math.max(S.start,y.start),b=Math.min(c.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,N=b;A<N;A+=3){const B=c.getX(A),F=c.getX(A+1),j=c.getX(A+2);o=du(this,x,e,i,d,p,g,B,F,j),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(c.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const L=c.getX(S),b=c.getX(S+1),A=c.getX(S+2);o=du(this,u,e,i,d,p,g,L,b,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const S=_[E],x=u[S.materialIndex],L=Math.max(S.start,y.start),b=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,N=b;A<N;A+=3){const B=A,F=A+1,j=A+2;o=du(this,x,e,i,d,p,g,B,F,j),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const L=S,b=S+1,A=S+2;o=du(this,u,e,i,d,p,g,L,b,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function OE(s,e,t,i,o,a,u,c){let f;if(e.side===Wn?f=i.intersectTriangle(u,a,o,!0,c):f=i.intersectTriangle(o,a,u,e.side===fr,c),f===null)return null;fu.copy(c),fu.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(fu);return d<t.near||d>t.far?null:{distance:d,point:fu.clone(),object:s}}function du(s,e,t,i,o,a,u,c,f,d){s.getVertexPosition(c,lu),s.getVertexPosition(f,uu),s.getVertexPosition(d,cu);const p=OE(s,e,t,i,lu,uu,cu,Xg);if(p){const g=new X;Si.getBarycoord(Xg,lu,uu,cu,g),o&&(p.uv=Si.getInterpolatedAttribute(o,c,f,d,g,new ut)),a&&(p.uv1=Si.getInterpolatedAttribute(a,c,f,d,g,new ut)),u&&(p.normal=Si.getInterpolatedAttribute(u,c,f,d,g,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:d,normal:new X,materialIndex:0};Si.getNormal(lu,uu,cu,_.normal),p.face=_,p.barycoord=g}return p}class Va extends zi{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],g=[];let _=0,y=0;E("z","y","x",-1,-1,i,t,e,u,a,0),E("z","y","x",1,-1,i,t,-e,u,a,1),E("x","z","y",1,1,e,i,t,o,u,2),E("x","z","y",1,-1,e,i,-t,o,u,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new cr(d,3)),this.setAttribute("normal",new cr(p,3)),this.setAttribute("uv",new cr(g,2));function E(M,S,x,L,b,A,N,B,F,j,C){const P=A/F,O=N/j,le=A/2,ne=N/2,ae=B/2,fe=F+1,se=j+1;let ce=0,H=0;const oe=new X;for(let ie=0;ie<se;ie++){const U=ie*O-ne;for(let te=0;te<fe;te++){const ze=te*P-le;oe[M]=ze*L,oe[S]=U*b,oe[x]=ae,d.push(oe.x,oe.y,oe.z),oe[M]=0,oe[S]=0,oe[x]=B>0?1:-1,p.push(oe.x,oe.y,oe.z),g.push(te/F),g.push(1-ie/j),ce+=1}}for(let ie=0;ie<j;ie++)for(let U=0;U<F;U++){const te=_+U+fe*ie,ze=_+U+fe*(ie+1),Be=_+(U+1)+fe*(ie+1),Z=_+(U+1)+fe*ie;f.push(te,ze,Z),f.push(ze,Be,Z),H+=6}c.addGroup(y,H,C),y+=H,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const i=wo(s[t]);for(const o in i)e[o]=i[o]}return e}function kE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const BE={clone:wo,merge:Dn};var zE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zE,this.fragmentShader=HE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=kE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lv extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new X,jg=new ut,Yg=new ut;class In extends Lv{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,jg,Yg),t.subVectors(Yg,jg)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Aa*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*i/d,o*=u.width/f,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oo=-90,ao=1;class VE extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new In(oo,ao,e,t);o.layers=this.layers,this.add(o);const a=new In(oo,ao,e,t);a.layers=this.layers,this.add(a);const u=new In(oo,ao,e,t);u.layers=this.layers,this.add(u);const c=new In(oo,ao,e,t);c.layers=this.layers,this.add(c);const f=new In(oo,ao,e,t);f.layers=this.layers,this.add(f);const d=new In(oo,ao,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(g,_,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Dv extends mn{constructor(e=[],t=So,i,o,a,u,c,f,d,p){super(e,t,i,o,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GE extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Dv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Va(5,5,5),a=new jr({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wn,blending:Wr});a.uniforms.tEquirect.value=t;const u=new Qn(o,a),c=t.minFilter;return t.minFilter===or&&(t.minFilter=Jn),new VE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}class xs extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),x=this._getHandJoint(d,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=p.position.distanceTo(g.position),y=.02,E=.005;d.inputState.pinching&&_>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class XE extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=id,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new X;class Ad{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),o=It(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),o=It(o,this.array),a=It(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ad(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kg=new X,qg=new bt,$g=new bt,YE=new X,Zg=new mt,pu=new X,Jh=new Bi,Jg=new mt,Qh=new Ha;class KE extends Qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tg,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ki),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pu),this.boundingBox.expandByPoint(pu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pu),this.boundingSphere.expandByPoint(pu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,o=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jh.copy(this.boundingSphere),Jh.applyMatrix4(o),e.ray.intersectsSphere(Jh)!==!1&&(Jg.copy(o).invert(),Qh.copy(e.ray).applyMatrix4(Jg),!(this.boundingBox!==null&&Qh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,o=t.count;i<o;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===WS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,o=this.geometry;qg.fromBufferAttribute(o.attributes.skinIndex,e),$g.fromBufferAttribute(o.attributes.skinWeight,e),Kg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const u=$g.getComponent(a);if(u!==0){const c=qg.getComponent(a);Zg.multiplyMatrices(i.bones[c].matrixWorld,i.boneInverses[c]),t.addScaledVector(YE.copy(Kg).applyMatrix4(Zg),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Iv extends Zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nv extends mn{constructor(e=null,t=1,i=1,o,a,u,c,f,d=Nn,p=Nn,g,_){super(null,u,c,f,d,p,o,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qg=new mt,qE=new mt;class Rd{constructor(e=[],t=[]){this.uuid=Mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,o=this.bones.length;i<o;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,o=this.boneTexture;for(let a=0,u=e.length;a<u;a++){const c=e[a]?e[a].matrixWorld:qE;Qg.multiplyMatrices(c,t[a]),Qg.toArray(i,a*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Rd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Nv(t,e,e,ui,Ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const o=this.bones[t];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,o=e.bones.length;i<o;i++){const a=e.bones[i];let u=t[a];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),u=new Iv),this.bones.push(u),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let o=0,a=t.length;o<a;o++){const u=t[o];e.bones.push(u.uuid);const c=i[o];e.boneInverses.push(c.toArray())}return e}}class rd extends Un{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lo=new mt,e_=new mt,mu=[],t_=new ki,$E=new mt,xa=new Qn,ya=new Bi;class ZE extends Qn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,$E)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),t_.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(t_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),ya.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=o[u+c]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(i),e.ray.intersectsSphere(ya)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,lo),e_.multiplyMatrices(i,lo),xa.matrixWorld=e_,xa.raycast(e,mu);for(let u=0,c=mu.length;u<c;u++){const f=mu[u];f.instanceId=a,f.object=this,t.push(f)}mu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new Nv(new Float32Array(o*this.count),o,this.count,yd,Ei));const a=this.morphTexture.source.data.data;let u=0;for(let d=0;d<i.length;d++)u+=i[d];const c=this.geometry.morphTargetsRelative?1:1-u,f=o*e;a[f]=c,a.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ef=new X,JE=new X,QE=new dt;class Hr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=ef.subVectors(i,t).cross(JE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ef),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||QE.getNormalMatrix(e),o=this.coplanarPoint(ef).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Bi,eM=new ut(.5,.5),gu=new X;class bd{constructor(e=new Hr,t=new Hr,i=new Hr,o=new Hr,a=new Hr,u=new Hr){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li,i=!1){const o=this.planes,a=e.elements,u=a[0],c=a[1],f=a[2],d=a[3],p=a[4],g=a[5],_=a[6],y=a[7],E=a[8],M=a[9],S=a[10],x=a[11],L=a[12],b=a[13],A=a[14],N=a[15];if(o[0].setComponents(d-u,y-p,x-E,N-L).normalize(),o[1].setComponents(d+u,y+p,x+E,N+L).normalize(),o[2].setComponents(d+c,y+g,x+M,N+b).normalize(),o[3].setComponents(d-c,y-g,x-M,N-b).normalize(),i)o[4].setComponents(f,_,S,A).normalize(),o[5].setComponents(d-f,y-_,x-S,N-A).normalize();else if(o[4].setComponents(d-f,y-_,x-S,N-A).normalize(),t===Li)o[5].setComponents(d+f,y+_,x+S,N+A).normalize();else if(t===ku)o[5].setComponents(f,_,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=eM.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(gu.x=o.normal.x>0?e.max.x:e.min.x,gu.y=o.normal.y>0?e.max.y:e.min.y,gu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uv extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new X,zu=new X,n_=new mt,Sa=new Ha,_u=new Bi,tf=new X,i_=new X;class Cd extends Zt{constructor(e=new zi,t=new Uv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)Bu.fromBufferAttribute(t,o-1),zu.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Bu.distanceTo(zu);e.setAttribute("lineDistance",new cr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_u.copy(i.boundingSphere),_u.applyMatrix4(o),_u.radius+=a,e.ray.intersectsSphere(_u)===!1)return;n_.copy(o).invert(),Sa.copy(e.ray).applyMatrix4(n_);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=this.isLineSegments?2:1,p=i.index,_=i.attributes.position;if(p!==null){const y=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let M=y,S=E-1;M<S;M+=d){const x=p.getX(M),L=p.getX(M+1),b=vu(this,e,Sa,f,x,L,M);b&&t.push(b)}if(this.isLineLoop){const M=p.getX(E-1),S=p.getX(y),x=vu(this,e,Sa,f,M,S,E-1);x&&t.push(x)}}else{const y=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let M=y,S=E-1;M<S;M+=d){const x=vu(this,e,Sa,f,M,M+1,M);x&&t.push(x)}if(this.isLineLoop){const M=vu(this,e,Sa,f,E-1,y,E-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function vu(s,e,t,i,o,a,u){const c=s.geometry.attributes.position;if(Bu.fromBufferAttribute(c,o),zu.fromBufferAttribute(c,a),t.distanceSqToSegment(Bu,zu,tf,i_)>i)return;tf.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(tf);if(!(d<e.near||d>e.far))return{distance:d,point:i_.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const r_=new X,s_=new X;class tM extends Cd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)r_.fromBufferAttribute(t,o),s_.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+r_.distanceTo(s_);e.setAttribute("lineDistance",new cr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nM extends Cd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fv extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const o_=new mt,sd=new Ha,xu=new Bi,yu=new X;class iM extends Zt{constructor(e=new zi,t=new Fv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xu.copy(i.boundingSphere),xu.applyMatrix4(o),xu.radius+=a,e.ray.intersectsSphere(xu)===!1)return;o_.copy(o).invert(),sd.copy(e.ray).applyMatrix4(o_);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=i.index,g=i.attributes.position;if(d!==null){const _=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let E=_,M=y;E<M;E++){const S=d.getX(E);yu.fromBufferAttribute(g,S),a_(yu,S,f,o,e,t,this)}}else{const _=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let E=_,M=y;E<M;E++)yu.fromBufferAttribute(g,E),a_(yu,E,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function a_(s,e,t,i,o,a,u){const c=sd.distanceSqToPoint(s);if(c<t){const f=new X;sd.closestPointToPoint(s,f),f.applyMatrix4(i);const d=o.ray.origin.distanceTo(f);if(d<o.near||d>o.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ov extends mn{constructor(e,t,i=ys,o,a,u,c=Nn,f=Nn,d,p=Da,g=1){if(p!==Da&&p!==Ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:g};super(_,o,a,u,c,f,p,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wu extends zi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(o),d=c+1,p=f+1,g=e/c,_=t/f,y=[],E=[],M=[],S=[];for(let x=0;x<p;x++){const L=x*_-u;for(let b=0;b<d;b++){const A=b*g-a;E.push(A,-L,0),M.push(0,0,1),S.push(b/c),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let L=0;L<c;L++){const b=L+d*x,A=L+d*(x+1),N=L+1+d*(x+1),B=L+1+d*x;y.push(b,A,B),y.push(A,N,B)}this.setIndex(y),this.setAttribute("position",new cr(E,3)),this.setAttribute("normal",new cr(M,3)),this.setAttribute("uv",new cr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pd extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sv,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hi extends Pd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rM extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sM extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Su(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function oM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function aM(s){function e(o,a){return s[o]-s[a]}const t=s.length,i=new Array(t);for(let o=0;o!==t;++o)i[o]=o;return i.sort(e),i}function l_(s,e,t){const i=s.length,o=new s.constructor(i);for(let a=0,u=0;u!==i;++a){const c=t[a]*e;for(let f=0;f!==e;++f)o[u++]=s[c+f]}return o}function kv(s,e,t,i){let o=1,a=s[0];for(;a!==void 0&&a[i]===void 0;)a=s[o++];if(a===void 0)return;let u=a[i];if(u!==void 0)if(Array.isArray(u))do u=a[i],u!==void 0&&(e.push(a.time),t.push(...u)),a=s[o++];while(a!==void 0);else if(u.toArray!==void 0)do u=a[i],u!==void 0&&(e.push(a.time),u.toArray(t,t.length)),a=s[o++];while(a!==void 0);else do u=a[i],u!==void 0&&(e.push(a.time),t.push(u)),a=s[o++];while(a!==void 0)}class Ga{constructor(e,t,i,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,o=t[i],a=t[i-1];e:{t:{let u;n:{i:if(!(e<o)){for(let c=i+2;;){if(o===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(a=o,o=t[++i],e<o)break t}u=t.length;break n}if(!(e>=a)){const c=t[1];e<c&&(i=2,a=c);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(o=a,a=t[--i-1],e>=a)break t}u=i,i=0;break n}break e}for(;i<u;){const c=i+u>>>1;e<t[c]?u=c:i=c+1}if(o=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o;for(let u=0;u!==o;++u)t[u]=i[a+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lM extends Ga{constructor(e,t,i,o){super(e,t,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wg,endingEnd:wg}}intervalChanged_(e,t,i){const o=this.parameterPositions;let a=e-2,u=e+1,c=o[a],f=o[u];if(c===void 0)switch(this.getSettings_().endingStart){case Ag:a=e,c=2*t-i;break;case Rg:a=o.length-2,c=t+o[a]-o[a+1];break;default:a=e,c=i}if(f===void 0)switch(this.getSettings_().endingEnd){case Ag:u=e,f=2*i-t;break;case Rg:u=1,f=i+o[1]-o[0];break;default:u=e-1,f=t}const d=(i-t)*.5,p=this.valueSize;this._weightPrev=d/(t-c),this._weightNext=d/(f-i),this._offsetPrev=a*p,this._offsetNext=u*p}interpolate_(e,t,i,o){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=e*c,d=f-c,p=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,E=(i-t)/(o-t),M=E*E,S=M*E,x=-_*S+2*_*M-_*E,L=(1+_)*S+(-1.5-2*_)*M+(-.5+_)*E+1,b=(-1-y)*S+(1.5+y)*M+.5*E,A=y*S-y*M;for(let N=0;N!==c;++N)a[N]=x*u[p+N]+L*u[d+N]+b*u[f+N]+A*u[g+N];return a}}class uM extends Ga{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=e*c,d=f-c,p=(i-t)/(o-t),g=1-p;for(let _=0;_!==c;++_)a[_]=u[d+_]*g+u[f+_]*p;return a}}class cM extends Ga{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ti{constructor(e,t,i,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Su(t,this.TimeBufferType),this.values=Su(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Su(e.times,Array),values:Su(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(i.interpolation=o)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case Ph:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]*=e}return this}trim(e,t){const i=this.times,o=i.length;let a=0,u=o-1;for(;a!==o&&i[a]<e;)++a;for(;u!==-1&&i[u]>t;)--u;if(++u,a!==0||u!==o){a>=u&&(u=Math.max(u,1),a=u-1);const c=this.getValueSize();this.times=i.slice(a,u),this.values=this.values.slice(a*c,u*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,o=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let c=0;c!==a;c++){const f=i[c];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,f),e=!1;break}if(u!==null&&u>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,f,u),e=!1;break}u=f}if(o!==void 0&&oM(o))for(let c=0,f=o.length;c!==f;++c){const d=o[c];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===Ph,a=e.length-1;let u=1;for(let c=1;c<a;++c){let f=!1;const d=e[c],p=e[c+1];if(d!==p&&(c!==1||d!==e[0]))if(o)f=!0;else{const g=c*i,_=g-i,y=g+i;for(let E=0;E!==i;++E){const M=t[g+E];if(M!==t[_+E]||M!==t[y+E]){f=!0;break}}}if(f){if(c!==u){e[u]=e[c];const g=c*i,_=u*i;for(let y=0;y!==i;++y)t[_+y]=t[g+y]}++u}}if(a>0){e[u]=e[a];for(let c=a*i,f=u*i,d=0;d!==i;++d)t[f+d]=t[c+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,o=new i(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Ua;class Lo extends Ti{constructor(e,t,i){super(e,t,i)}}Lo.prototype.ValueTypeName="bool";Lo.prototype.ValueBufferType=Array;Lo.prototype.DefaultInterpolation=Na;Lo.prototype.InterpolantFactoryMethodLinear=void 0;Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class Bv extends Ti{constructor(e,t,i,o){super(e,t,i,o)}}Bv.prototype.ValueTypeName="color";class Ao extends Ti{constructor(e,t,i,o){super(e,t,i,o)}}Ao.prototype.ValueTypeName="number";class hM extends Ga{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=(i-t)/(o-t);let d=e*c;for(let p=d+c;d!==p;d+=4)Ui.slerpFlat(a,0,u,d-c,u,d,f);return a}}class Ro extends Ti{constructor(e,t,i,o){super(e,t,i,o)}InterpolantFactoryMethodLinear(e){return new hM(this.times,this.values,this.getValueSize(),e)}}Ro.prototype.ValueTypeName="quaternion";Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends Ti{constructor(e,t,i){super(e,t,i)}}Do.prototype.ValueTypeName="string";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=Na;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends Ti{constructor(e,t,i,o){super(e,t,i,o)}}bo.prototype.ValueTypeName="vector";class fM{constructor(e="",t=-1,i=[],o=XS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=o,this.uuid=Mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,o=1/(e.fps||1);for(let u=0,c=i.length;u!==c;++u)t.push(pM(i[u]).scale(o));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,o={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,u=i.length;a!==u;++a)t.push(Ti.toJSON(i[a]));return o}static CreateFromMorphTargetSequence(e,t,i,o){const a=t.length,u=[];for(let c=0;c<a;c++){let f=[],d=[];f.push((c+a-1)%a,c,(c+1)%a),d.push(0,1,0);const p=aM(f);f=l_(f,1,p),d=l_(d,1,p),!o&&f[0]===0&&(f.push(a),d.push(d[0])),u.push(new Ao(".morphTargetInfluences["+t[c].name+"]",f,d).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const o=e;i=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<i.length;o++)if(i[o].name===t)return i[o];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const o={},a=/^([\w-]*?)([\d]+)$/;for(let c=0,f=e.length;c<f;c++){const d=e[c],p=d.name.match(a);if(p&&p.length>1){const g=p[1];let _=o[g];_||(o[g]=_=[]),_.push(d)}}const u=[];for(const c in o)u.push(this.CreateFromMorphTargetSequence(c,o[c],t,i));return u}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,y,E,M){if(y.length!==0){const S=[],x=[];kv(y,S,x,E),S.length!==0&&M.push(new g(_,S,x))}},o=[],a=e.name||"default",u=e.fps||30,c=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let g=0;g<d.length;g++){const _=d[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let E;for(E=0;E<_.length;E++)if(_[E].morphTargets)for(let M=0;M<_[E].morphTargets.length;M++)y[_[E].morphTargets[M]]=-1;for(const M in y){const S=[],x=[];for(let L=0;L!==_[E].morphTargets.length;++L){const b=_[E];S.push(b.time),x.push(b.morphTarget===M?1:0)}o.push(new Ao(".morphTargetInfluence["+M+"]",S,x))}f=y.length*u}else{const y=".bones["+t[g].name+"]";i(bo,y+".position",_,"pos",o),i(Ro,y+".quaternion",_,"rot",o),i(bo,y+".scale",_,"scl",o)}}return o.length===0?null:new this(a,f,o,c)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,o=e.length;i!==o;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ao;case"vector":case"vector2":case"vector3":case"vector4":return bo;case"color":return Bv;case"quaternion":return Ro;case"bool":case"boolean":return Lo;case"string":return Do}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dM(s.type);if(s.times===void 0){const t=[],i=[];kv(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ar={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mM{constructor(e,t,i){const o=this;let a=!1,u=0,c=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(p){c++,a===!1&&o.onStart!==void 0&&o.onStart(p,u,c),a=!0},this.itemEnd=function(p){u++,o.onProgress!==void 0&&o.onProgress(p,u,c),u===c&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=d.length;g<_;g+=2){const y=d[g],E=d[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const gM=new mM;class Io{constructor(e){this.manager=e!==void 0?e:gM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Io.DEFAULT_MATERIAL_NAME="__DEFAULT";const ir={};class _M extends Error{constructor(e,t){super(e),this.response=t}}class zv extends Io{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=ar.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ir[e]!==void 0){ir[e].push({onLoad:t,onProgress:i,onError:o});return}ir[e]=[],ir[e].push({onLoad:t,onProgress:i,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,f=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=ir[e],g=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=_?parseInt(_):0,E=y!==0;let M=0;const S=new ReadableStream({start(x){L();function L(){g.read().then(({done:b,value:A})=>{if(b)x.close();else{M+=A.byteLength;const N=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:y});for(let B=0,F=p.length;B<F;B++){const j=p[B];j.onProgress&&j.onProgress(N)}x.enqueue(A),L()}},b=>{x.error(b)})}}});return new Response(S)}else throw new _M(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return d.json();default:if(c==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(c),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return d.arrayBuffer().then(E=>y.decode(E))}}}).then(d=>{ar.add(`file:${e}`,d);const p=ir[e];delete ir[e];for(let g=0,_=p.length;g<_;g++){const y=p[g];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=ir[e];if(p===void 0)throw this.manager.itemError(e),d;delete ir[e];for(let g=0,_=p.length;g<_;g++){const y=p[g];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const uo=new WeakMap;class vM extends Io{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=ar.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0);else{let g=uo.get(u);g===void 0&&(g=[],uo.set(u,g)),g.push({onLoad:t,onError:o})}return u}const c=Fa("img");function f(){p(),t&&t(this);const g=uo.get(this)||[];for(let _=0;_<g.length;_++){const y=g[_];y.onLoad&&y.onLoad(this)}uo.delete(this),a.manager.itemEnd(e)}function d(g){p(),o&&o(g),ar.remove(`image:${e}`);const _=uo.get(this)||[];for(let y=0;y<_.length;y++){const E=_[y];E.onError&&E.onError(g)}uo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",f,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",f,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),ar.add(`image:${e}`,c),a.manager.itemStart(e),c.src=e,c}}class xM extends Io{constructor(e){super(e)}load(e,t,i,o){const a=new mn,u=new vM(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},i,o),a}}class Ld extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const nf=new mt,u_=new X,c_=new X;class Dd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;u_.setFromMatrixPosition(e.matrixWorld),t.position.copy(u_),c_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c_),t.updateMatrixWorld(),nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yM extends Dd{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=To*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hv extends Ld{constructor(e,t,i=0,o=Math.PI/3,a=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=i,this.angle=o,this.penumbra=a,this.decay=u,this.map=null,this.shadow=new yM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const h_=new mt,Ea=new X,rf=new X;class SM extends Dd{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ea),rf.copy(i.position),rf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rf),i.updateMatrixWorld(),o.makeTranslation(-Ea.x,-Ea.y,-Ea.z),h_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h_,i.coordinateSystem,i.reversedDepth)}}class EM extends Ld{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new SM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Id extends Lv{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class MM extends Dd{constructor(){super(new Id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TM extends Ld{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new MM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ba{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const sf=new WeakMap;class wM extends Io{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=ar.get(`image-bitmap:${e}`);if(u!==void 0){if(a.manager.itemStart(e),u.then){u.then(d=>{if(sf.has(u)===!0)o&&o(sf.get(u)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(d),a.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(u),a.manager.itemEnd(e)},0),u}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const f=fetch(e,c).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return ar.add(`image-bitmap:${e}`,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){o&&o(d),sf.set(f,d),ar.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});ar.add(`image-bitmap:${e}`,f),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class AM extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nd="\\[\\]\\.:\\/",RM=new RegExp("["+Nd+"]","g"),Ud="[^"+Nd+"]",bM="[^"+Nd.replace("\\.","")+"]",CM=/((?:WC+[\/:])*)/.source.replace("WC",Ud),PM=/(WCOD+)?/.source.replace("WCOD",bM),LM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ud),DM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ud),IM=new RegExp("^"+CM+PM+LM+DM+"$"),NM=["material","materials","bones","map"];class UM{constructor(e,t,i){const o=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Nt{constructor(e,t,i){this.path=t,this.parsedPath=i||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,i):new Nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(RM,"")}static parseTrackName(e){const t=IM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const a=i.nodeName.substring(o+1);NM.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let u=0;u<a.length;u++){const c=a[u];if(c.name===t||c.uuid===t)return c;const f=i(c.children);if(f)return f}return null},o=i(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)e[t++]=i[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,o=t.propertyName;let a=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[o];if(u===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=a}else u.fromArray!==void 0&&u.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(f=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=UM;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class f_{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class FM extends Ms{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function d_(s,e,t,i){const o=OM(i);switch(t){case gv:return s*e;case yd:return s*e/o.components*o.byteLength;case Sd:return s*e/o.components*o.byteLength;case vv:return s*e*2/o.components*o.byteLength;case Ed:return s*e*2/o.components*o.byteLength;case _v:return s*e*3/o.components*o.byteLength;case ui:return s*e*4/o.components*o.byteLength;case Md:return s*e*4/o.components*o.byteLength;case Cu:case Pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lu:case Du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lf:case If:return Math.max(s,16)*Math.max(e,8)/4;case Pf:case Df:return Math.max(s,8)*Math.max(e,8)/2;case Nf:case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $f:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Iu:case Zf:case Jf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xv:case Qf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ed:case td:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OM(s){switch(s){case Ni:case dv:return{byteLength:1,components:1};case Pa:case pv:case za:return{byteLength:2,components:1};case vd:case xd:return{byteLength:2,components:4};case ys:case _d:case Ei:return{byteLength:4,components:1};case mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vv(){let s=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function kM(s){const e=new WeakMap;function t(c,f){const d=c.array,p=c.usage,g=d.byteLength,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,d,p),c.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=s.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,f,d){const p=f.array,g=f.updateRanges;if(s.bindBuffer(d,c),g.length===0)s.bufferSubData(d,0,p);else{g.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<g.length;y++){const E=g[_],M=g[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,g[_]=M)}g.length=_+1;for(let y=0,E=g.length;y<E;y++){const M=g[y];s.bufferSubData(d,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(s.deleteBuffer(f.buffer),e.delete(c))}function u(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:u}}var BM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zM=`#ifdef USE_ALPHAHASH
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
#endif`,HM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XM=`#ifdef USE_AOMAP
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
#endif`,jM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YM=`#ifdef USE_BATCHING
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
#endif`,KM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JM=`#ifdef USE_IRIDESCENCE
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
#endif`,QM=`#ifdef USE_BUMPMAP
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,uT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cT=`vec3 transformedNormal = objectNormal;
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
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_T=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
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
}`,RT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#endif`,LT=`#ifdef USE_ENVMAP
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
#endif`,DT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FT=`PhysicalMaterial material;
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
#endif`,OT=`struct PhysicalMaterial {
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
}`,kT=`
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
#endif`,BT=`#if defined( RE_IndirectDiffuse )
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KT=`#if defined( USE_POINTS_UV )
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
#endif`,qT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ew=`#ifdef USE_MORPHTARGETS
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
#endif`,tw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aw=`#ifdef USE_NORMALMAP
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
#endif`,lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mw=`float getShadowMask() {
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
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ww=`#ifdef USE_SKINNING
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
#endif`,Aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rw=`#ifdef USE_SKINNING
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
#endif`,bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
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
#endif`,Iw=`#ifdef USE_TRANSMISSION
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bw=`uniform sampler2D t2D;
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`#include <common>
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
}`,Xw=`#if DEPTH_PACKING == 3200
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
}`,jw=`#define DISTANCE
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
}`,Yw=`#define DISTANCE
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`uniform float scale;
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
}`,Zw=`uniform vec3 diffuse;
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
}`,Jw=`#include <common>
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
}`,Qw=`uniform vec3 diffuse;
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
}`,eA=`#define LAMBERT
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
}`,tA=`#define LAMBERT
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
}`,nA=`#define MATCAP
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
}`,iA=`#define MATCAP
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
}`,rA=`#define NORMAL
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
}`,sA=`#define NORMAL
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
}`,oA=`#define PHONG
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
}`,aA=`#define PHONG
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
}`,lA=`#define STANDARD
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
}`,uA=`#define STANDARD
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
}`,cA=`#define TOON
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
}`,hA=`#define TOON
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
}`,fA=`uniform float size;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 color;
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
}`,gA=`uniform float rotation;
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
}`,_A=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:BM,alphahash_pars_fragment:zM,alphamap_fragment:HM,alphamap_pars_fragment:VM,alphatest_fragment:GM,alphatest_pars_fragment:WM,aomap_fragment:XM,aomap_pars_fragment:jM,batching_pars_vertex:YM,batching_vertex:KM,begin_vertex:qM,beginnormal_vertex:$M,bsdfs:ZM,iridescence_fragment:JM,bumpmap_pars_fragment:QM,clipping_planes_fragment:eT,clipping_planes_pars_fragment:tT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:rT,color_pars_fragment:sT,color_pars_vertex:oT,color_vertex:aT,common:lT,cube_uv_reflection_fragment:uT,defaultnormal_vertex:cT,displacementmap_pars_vertex:hT,displacementmap_vertex:fT,emissivemap_fragment:dT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:_T,envmap_common_pars_fragment:vT,envmap_pars_fragment:xT,envmap_pars_vertex:yT,envmap_physical_pars_fragment:LT,envmap_vertex:ST,fog_vertex:ET,fog_pars_vertex:MT,fog_fragment:TT,fog_pars_fragment:wT,gradientmap_pars_fragment:AT,lightmap_pars_fragment:RT,lights_lambert_fragment:bT,lights_lambert_pars_fragment:CT,lights_pars_begin:PT,lights_toon_fragment:DT,lights_toon_pars_fragment:IT,lights_phong_fragment:NT,lights_phong_pars_fragment:UT,lights_physical_fragment:FT,lights_physical_pars_fragment:OT,lights_fragment_begin:kT,lights_fragment_maps:BT,lights_fragment_end:zT,logdepthbuf_fragment:HT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:GT,logdepthbuf_vertex:WT,map_fragment:XT,map_pars_fragment:jT,map_particle_fragment:YT,map_particle_pars_fragment:KT,metalnessmap_fragment:qT,metalnessmap_pars_fragment:$T,morphinstance_vertex:ZT,morphcolor_vertex:JT,morphnormal_vertex:QT,morphtarget_pars_vertex:ew,morphtarget_vertex:tw,normal_fragment_begin:nw,normal_fragment_maps:iw,normal_pars_fragment:rw,normal_pars_vertex:sw,normal_vertex:ow,normalmap_pars_fragment:aw,clearcoat_normal_fragment_begin:lw,clearcoat_normal_fragment_maps:uw,clearcoat_pars_fragment:cw,iridescence_pars_fragment:hw,opaque_fragment:fw,packing:dw,premultiplied_alpha_fragment:pw,project_vertex:mw,dithering_fragment:gw,dithering_pars_fragment:_w,roughnessmap_fragment:vw,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:yw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Ew,shadowmask_pars_fragment:Mw,skinbase_vertex:Tw,skinning_pars_vertex:ww,skinning_vertex:Aw,skinnormal_vertex:Rw,specularmap_fragment:bw,specularmap_pars_fragment:Cw,tonemapping_fragment:Pw,tonemapping_pars_fragment:Lw,transmission_fragment:Dw,transmission_pars_fragment:Iw,uv_pars_fragment:Nw,uv_pars_vertex:Uw,uv_vertex:Fw,worldpos_vertex:Ow,background_vert:kw,background_frag:Bw,backgroundCube_vert:zw,backgroundCube_frag:Hw,cube_vert:Vw,cube_frag:Gw,depth_vert:Ww,depth_frag:Xw,distanceRGBA_vert:jw,distanceRGBA_frag:Yw,equirect_vert:Kw,equirect_frag:qw,linedashed_vert:$w,linedashed_frag:Zw,meshbasic_vert:Jw,meshbasic_frag:Qw,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:uA,meshtoon_vert:cA,meshtoon_frag:hA,points_vert:fA,points_frag:dA,shadow_vert:pA,shadow_frag:mA,sprite_vert:gA,sprite_frag:_A},Le={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ci={basic:{uniforms:Dn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Dn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ft(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Dn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Dn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Dn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ft(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Dn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Dn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Dn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Dn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Dn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Dn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Dn([Le.common,Le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Dn([Le.lights,Le.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ci.physical={uniforms:Dn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Eu={r:0,b:0,g:0},fs=new Fi,vA=new mt;function xA(s,e,t,i,o,a,u){const c=new ft(0);let f=a===!0?0:1,d,p,g=null,_=0,y=null;function E(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?t:e).get(A)),A}function M(b){let A=!1;const N=E(b);N===null?x(c,f):N&&N.isColor&&(x(N,1),A=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(b,A){const N=E(A);N&&(N.isCubeTexture||N.mapping===Gu)?(p===void 0&&(p=new Qn(new Va(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:wo(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),fs.copy(A.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(vA.makeRotationFromEuler(fs)),p.material.toneMapped=wt.getTransfer(N.colorSpace)!==Ft,(g!==N||_!==N.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=N,_=N.version,y=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Qn(new Wu(2,2),new jr({name:"BackgroundMaterial",uniforms:wo(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=wt.getTransfer(N.colorSpace)!==Ft,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||_!==N.version||y!==s.toneMapping)&&(d.material.needsUpdate=!0,g=N,_=N.version,y=s.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function x(b,A){b.getRGB(Eu,Pv(s)),i.buffers.color.setClear(Eu.r,Eu.g,Eu.b,A,u)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,A=1){c.set(b),f=A,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,x(c,f)},render:M,addToRenderList:S,dispose:L}}function yA(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=_(null);let a=o,u=!1;function c(P,O,le,ne,ae){let fe=!1;const se=g(ne,le,O);a!==se&&(a=se,d(a.object)),fe=y(P,ne,le,ae),fe&&E(P,ne,le,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,A(P,O,le,ne),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function f(){return s.createVertexArray()}function d(P){return s.bindVertexArray(P)}function p(P){return s.deleteVertexArray(P)}function g(P,O,le){const ne=le.wireframe===!0;let ae=i[P.id];ae===void 0&&(ae={},i[P.id]=ae);let fe=ae[O.id];fe===void 0&&(fe={},ae[O.id]=fe);let se=fe[ne];return se===void 0&&(se=_(f()),fe[ne]=se),se}function _(P){const O=[],le=[],ne=[];for(let ae=0;ae<t;ae++)O[ae]=0,le[ae]=0,ne[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:le,attributeDivisors:ne,object:P,attributes:{},index:null}}function y(P,O,le,ne){const ae=a.attributes,fe=O.attributes;let se=0;const ce=le.getAttributes();for(const H in ce)if(ce[H].location>=0){const ie=ae[H];let U=fe[H];if(U===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(U=P.instanceColor)),ie===void 0||ie.attribute!==U||U&&ie.data!==U.data)return!0;se++}return a.attributesNum!==se||a.index!==ne}function E(P,O,le,ne){const ae={},fe=O.attributes;let se=0;const ce=le.getAttributes();for(const H in ce)if(ce[H].location>=0){let ie=fe[H];ie===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));const U={};U.attribute=ie,ie&&ie.data&&(U.data=ie.data),ae[H]=U,se++}a.attributes=ae,a.attributesNum=se,a.index=ne}function M(){const P=a.newAttributes;for(let O=0,le=P.length;O<le;O++)P[O]=0}function S(P){x(P,0)}function x(P,O){const le=a.newAttributes,ne=a.enabledAttributes,ae=a.attributeDivisors;le[P]=1,ne[P]===0&&(s.enableVertexAttribArray(P),ne[P]=1),ae[P]!==O&&(s.vertexAttribDivisor(P,O),ae[P]=O)}function L(){const P=a.newAttributes,O=a.enabledAttributes;for(let le=0,ne=O.length;le<ne;le++)O[le]!==P[le]&&(s.disableVertexAttribArray(le),O[le]=0)}function b(P,O,le,ne,ae,fe,se){se===!0?s.vertexAttribIPointer(P,O,le,ae,fe):s.vertexAttribPointer(P,O,le,ne,ae,fe)}function A(P,O,le,ne){M();const ae=ne.attributes,fe=le.getAttributes(),se=O.defaultAttributeValues;for(const ce in fe){const H=fe[ce];if(H.location>=0){let oe=ae[ce];if(oe===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),oe!==void 0){const ie=oe.normalized,U=oe.itemSize,te=e.get(oe);if(te===void 0)continue;const ze=te.buffer,Be=te.type,Z=te.bytesPerElement,me=Be===s.INT||Be===s.UNSIGNED_INT||oe.gpuType===_d;if(oe.isInterleavedBufferAttribute){const pe=oe.data,be=pe.stride,De=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let Je=0;Je<H.locationSize;Je++)x(H.location+Je,pe.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Je=0;Je<H.locationSize;Je++)S(H.location+Je);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let Je=0;Je<H.locationSize;Je++)b(H.location+Je,U/H.locationSize,Be,ie,be*Z,(De+U/H.locationSize*Je)*Z,me)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)x(H.location+pe,oe.meshPerAttribute);P.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<H.locationSize;pe++)S(H.location+pe);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe,U/H.locationSize,Be,ie,U*Z,U/H.locationSize*pe*Z,me)}}else if(se!==void 0){const ie=se[ce];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(H.location,ie);break;case 3:s.vertexAttrib3fv(H.location,ie);break;case 4:s.vertexAttrib4fv(H.location,ie);break;default:s.vertexAttrib1fv(H.location,ie)}}}}L()}function N(){j();for(const P in i){const O=i[P];for(const le in O){const ne=O[le];for(const ae in ne)p(ne[ae].object),delete ne[ae];delete O[le]}delete i[P]}}function B(P){if(i[P.id]===void 0)return;const O=i[P.id];for(const le in O){const ne=O[le];for(const ae in ne)p(ne[ae].object),delete ne[ae];delete O[le]}delete i[P.id]}function F(P){for(const O in i){const le=i[O];if(le[P.id]===void 0)continue;const ne=le[P.id];for(const ae in ne)p(ne[ae].object),delete ne[ae];delete le[P.id]}}function j(){C(),u=!0,a!==o&&(a=o,d(a.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:j,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function SA(s,e,t){let i;function o(d){i=d}function a(d,p){s.drawArrays(i,d,p),t.update(p,i,1)}function u(d,p,g){g!==0&&(s.drawArraysInstanced(i,d,p,g),t.update(p,i,g))}function c(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,p,0,g);let y=0;for(let E=0;E<g;E++)y+=p[E];t.update(y,i,1)}function f(d,p,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],p[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(i,d,0,p,0,_,0,g);let E=0;for(let M=0;M<g;M++)E+=p[M]*_[M];t.update(E,i,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function EA(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==ui&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(F){const j=F===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ni&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ei&&!j)}function f(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:N,maxSamples:B}}function MA(s){const e=this;let t=null,i=0,o=!1,a=!1;const u=new Hr,c=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||i!==0||o;return o=_,i=g.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=p(g,_,0)},this.setState=function(g,_,y){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=s.get(g);if(!o||E===null||E.length===0||a&&!S)a?p(null):d();else{const L=a?0:i,b=L*4;let A=x.clippingState||null;f.value=A,A=p(E,_,b,y);for(let N=0;N!==b;++N)A[N]=t[N];x.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,y,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=f.value,E!==!0||S===null){const x=y+M*4,L=_.matrixWorldInverse;c.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let b=0,A=y;b!==M;++b,A+=4)u.copy(g[b]).applyMatrix4(L,c),u.normal.toArray(S,A),S[A+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function TA(s){let e=new WeakMap;function t(u,c){return c===bf?u.mapping=So:c===Cf&&(u.mapping=Eo),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===bf||c===Cf)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new GE(f.height);return d.fromEquirectangularTexture(s,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const fo=4,p_=[.125,.215,.35,.446,.526,.582],_s=20,of=new Id,m_=new ft;let af=null,lf=0,uf=0,cf=!1;const ms=(1+Math.sqrt(5))/2,co=1/ms,g_=[new X(-ms,co,0),new X(ms,co,0),new X(-co,0,ms),new X(co,0,ms),new X(0,ms,-co),new X(0,ms,co),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],wA=new X;class __{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100,a={}){const{size:u=256,position:c=wA}=a;af=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,o,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(af,lf,uf),this._renderer.xr.enabled=cf,e.scissorTest=!1,Mu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),af=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:za,format:ui,colorSpace:Fn,depthBuffer:!1},o=v_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v_(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AA(a)),this._blurMaterial=RA(a,e,t)}return o}_compileMaterial(e){const t=new Qn(this._lodPlanes[0],e);this._renderer.compile(t,of)}_sceneToCubeUV(e,t,i,o,a){const f=new In(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(m_),g.toneMapping=Xr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null));const M=new vs({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),S=new Qn(new Va,M);let x=!1;const L=e.background;L?L.isColor&&(M.color.copy(L),e.background=null,x=!0):(M.color.copy(m_),x=!0);for(let b=0;b<6;b++){const A=b%3;A===0?(f.up.set(0,d[b],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[b],a.y,a.z)):A===1?(f.up.set(0,0,d[b]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[b],a.z)):(f.up.set(0,d[b],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[b]));const N=this._cubeSize;Mu(o,A*N,b>2?N:0,N,N),g.setRenderTarget(o),x&&g.render(S,f),g.render(e,f)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=y,g.autoClear=_,e.background=L}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===So||e.mapping===Eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x_());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new Qn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Mu(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,of)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=g_[(o-a-1)%g_.length];this._blur(e,a-1,a,u,c)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Qn(this._lodPlanes[o],d),_=d.uniforms,y=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*_s-1),M=a/E,S=isFinite(a)?1+Math.floor(p*M):_s;S>_s&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${_s}`);const x=[];let L=0;for(let F=0;F<_s;++F){const j=F/M,C=Math.exp(-j*j/2);x.push(C),F===0?L+=C:F<S&&(L+=2*C)}for(let F=0;F<x.length;F++)x[F]=x[F]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:b}=this;_.dTheta.value=E,_.mipInt.value=b-i;const A=this._sizeLods[o],N=3*A*(o>b-fo?o-b+fo:0),B=4*(this._cubeSize-A);Mu(t,N,B,3*A,2*A),f.setRenderTarget(t),f.render(g,of)}}function AA(s){const e=[],t=[],i=[];let o=s;const a=s-fo+1+p_.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>s-fo?f=p_[u-s+fo-1]:u===0&&(f=0),i.push(f);const d=1/(c-2),p=-d,g=1+d,_=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,E=6,M=3,S=2,x=1,L=new Float32Array(M*E*y),b=new Float32Array(S*E*y),A=new Float32Array(x*E*y);for(let B=0;B<y;B++){const F=B%3*2/3-1,j=B>2?0:-1,C=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];L.set(C,M*E*B),b.set(_,S*E*B);const P=[B,B,B,B,B,B];A.set(P,x*E*B)}const N=new zi;N.setAttribute("position",new Un(L,M)),N.setAttribute("uv",new Un(b,S)),N.setAttribute("faceIndex",new Un(A,x)),e.push(N),o>fo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function v_(s,e,t){const i=new Ss(s,e,t);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mu(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function RA(s,e,t){const i=new Float32Array(_s),o=new X(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function x_(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function y_(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Fd(){return`

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
	`}function bA(s){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,d=f===bf||f===Cf,p=f===So||f===Eo;if(d||p){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new __(s)),g=d?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const y=c.image;return d&&y&&y.height>0||p&&y&&o(y)?(t===null&&(t=new __(s)),g=d?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function o(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function CA(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&_o("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function PA(s,e,t,i){const o={},a=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function d(g){const _=[],y=g.index,E=g.attributes.position;let M=0;if(y!==null){const L=y.array;M=y.version;for(let b=0,A=L.length;b<A;b+=3){const N=L[b+0],B=L[b+1],F=L[b+2];_.push(N,B,B,F,F,N)}}else if(E!==void 0){const L=E.array;M=E.version;for(let b=0,A=L.length/3-1;b<A;b+=3){const N=b+0,B=b+1,F=b+2;_.push(N,B,B,F,F,N)}}else return;const S=new(Tv(_)?Cv:bv)(_,1);S.version=M;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function p(g){const _=a.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&d(g)}else d(g);return a.get(g)}return{get:c,update:f,getWireframeAttribute:p}}function LA(s,e,t){let i;function o(_){i=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function f(_,y){s.drawElements(i,y,a,_*u),t.update(y,i,1)}function d(_,y,E){E!==0&&(s.drawElementsInstanced(i,y,a,_*u,E),t.update(y,i,E))}function p(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,_,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];t.update(S,i,1)}function g(_,y,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)d(_[x]/u,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,_,0,M,0,E);let x=0;for(let L=0;L<E;L++)x+=y[L]*M[L];t.update(x,i,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function DA(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=c*(a/3);break;case s.LINES:t.lines+=c*(a/2);break;case s.LINE_STRIP:t.lines+=c*(a-1);break;case s.LINE_LOOP:t.lines+=c*a;break;case s.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function IA(s,e,t){const i=new WeakMap,o=new bt;function a(u,c,f){const d=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let _=i.get(c);if(_===void 0||_.count!==g){let P=function(){j.dispose(),i.delete(c),c.removeEventListener("dispose",P)};var y=P;_!==void 0&&_.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let N=c.attributes.position.count*A,B=1;N>e.maxTextureSize&&(B=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*B*4*g),j=new wv(F,N,B,g);j.type=Ei,j.needsUpdate=!0;const C=A*4;for(let O=0;O<g;O++){const le=x[O],ne=L[O],ae=b[O],fe=N*B*4*O;for(let se=0;se<le.count;se++){const ce=se*C;E===!0&&(o.fromBufferAttribute(le,se),F[fe+ce+0]=o.x,F[fe+ce+1]=o.y,F[fe+ce+2]=o.z,F[fe+ce+3]=0),M===!0&&(o.fromBufferAttribute(ne,se),F[fe+ce+4]=o.x,F[fe+ce+5]=o.y,F[fe+ce+6]=o.z,F[fe+ce+7]=0),S===!0&&(o.fromBufferAttribute(ae,se),F[fe+ce+8]=o.x,F[fe+ce+9]=o.y,F[fe+ce+10]=o.z,F[fe+ce+11]=ae.itemSize===4?o.w:1)}}_={count:g,texture:j,size:new ut(N,B)},i.set(c,_),c.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const M=c.morphTargetsRelative?1:1-E;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:a}}function NA(s,e,t,i){let o=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,g=e.get(f,p);if(o.get(g)!==d&&(e.update(g),o.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==d&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;o.get(_)!==d&&(_.update(),o.set(_,d))}return g}function u(){o=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}const Gv=new mn,S_=new Ov(1,1),Wv=new wv,Xv=new AE,jv=new Dv,E_=[],M_=[],T_=new Float32Array(16),w_=new Float32Array(9),A_=new Float32Array(4);function No(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=E_[o];if(a===void 0&&(a=new Float32Array(o),E_[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,s[u].toArray(a,c)}return a}function ln(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Xu(s,e){let t=M_[e];t===void 0&&(t=new Int32Array(e),M_[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function UA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function FA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function OA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function kA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function BA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;A_.set(i),s.uniformMatrix2fv(this.addr,!1,A_),un(t,i)}}function zA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;w_.set(i),s.uniformMatrix3fv(this.addr,!1,w_),un(t,i)}}function HA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;T_.set(i),s.uniformMatrix4fv(this.addr,!1,T_),un(t,i)}}function VA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function GA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function WA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function XA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function jA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function YA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function KA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function qA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function $A(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(S_.compareFunction=Ev,a=S_):a=Gv,t.setTexture2D(e||a,o)}function ZA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Xv,o)}function JA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||jv,o)}function QA(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Wv,o)}function eR(s){switch(s){case 5126:return UA;case 35664:return FA;case 35665:return OA;case 35666:return kA;case 35674:return BA;case 35675:return zA;case 35676:return HA;case 5124:case 35670:return VA;case 35667:case 35671:return GA;case 35668:case 35672:return WA;case 35669:case 35673:return XA;case 5125:return jA;case 36294:return YA;case 36295:return KA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return QA}}function tR(s,e){s.uniform1fv(this.addr,e)}function nR(s,e){const t=No(e,this.size,2);s.uniform2fv(this.addr,t)}function iR(s,e){const t=No(e,this.size,3);s.uniform3fv(this.addr,t)}function rR(s,e){const t=No(e,this.size,4);s.uniform4fv(this.addr,t)}function sR(s,e){const t=No(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function oR(s,e){const t=No(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function aR(s,e){const t=No(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function lR(s,e){s.uniform1iv(this.addr,e)}function uR(s,e){s.uniform2iv(this.addr,e)}function cR(s,e){s.uniform3iv(this.addr,e)}function hR(s,e){s.uniform4iv(this.addr,e)}function fR(s,e){s.uniform1uiv(this.addr,e)}function dR(s,e){s.uniform2uiv(this.addr,e)}function pR(s,e){s.uniform3uiv(this.addr,e)}function mR(s,e){s.uniform4uiv(this.addr,e)}function gR(s,e,t){const i=this.cache,o=e.length,a=Xu(t,o);ln(i,a)||(s.uniform1iv(this.addr,a),un(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Gv,a[u])}function _R(s,e,t){const i=this.cache,o=e.length,a=Xu(t,o);ln(i,a)||(s.uniform1iv(this.addr,a),un(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Xv,a[u])}function vR(s,e,t){const i=this.cache,o=e.length,a=Xu(t,o);ln(i,a)||(s.uniform1iv(this.addr,a),un(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||jv,a[u])}function xR(s,e,t){const i=this.cache,o=e.length,a=Xu(t,o);ln(i,a)||(s.uniform1iv(this.addr,a),un(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Wv,a[u])}function yR(s){switch(s){case 5126:return tR;case 35664:return nR;case 35665:return iR;case 35666:return rR;case 35674:return sR;case 35675:return oR;case 35676:return aR;case 5124:case 35670:return lR;case 35667:case 35671:return uR;case 35668:case 35672:return cR;case 35669:case 35673:return hR;case 5125:return fR;case 36294:return dR;case 36295:return pR;case 36296:return mR;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return vR;case 36289:case 36303:case 36311:case 36292:return xR}}class SR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eR(t.type)}}class ER{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yR(t.type)}}class MR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function R_(s,e){s.seq.push(e),s.map[e.id]=e}function TR(s,e,t){const i=s.name,o=i.length;for(hf.lastIndex=0;;){const a=hf.exec(i),u=hf.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===o){R_(t,d===void 0?new SR(c,s,e):new ER(c,s,e));break}else{let g=t.map[c];g===void 0&&(g=new MR(c),R_(t,g)),t=g}}}class Nu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);TR(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function b_(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const wR=37297;let AR=0;function RR(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const C_=new dt;function bR(s){wt._getMatrix(C_,wt.workingColorSpace,s);const e=`mat3( ${C_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case Ou:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function P_(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+RR(s.getShaderSource(e),c)}else return a}function CR(s,e){const t=bR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function PR(s,e){let t;switch(e){case OS:t="Linear";break;case kS:t="Reinhard";break;case BS:t="Cineon";break;case zS:t="ACESFilmic";break;case VS:t="AgX";break;case GS:t="Neutral";break;case HS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tu=new X;function LR(){wt.getLuminanceCoefficients(Tu);const s=Tu.x.toFixed(4),e=Tu.y.toFixed(4),t=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function IR(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function NR(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),u=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:s.getAttribLocation(e,u),locationSize:c}}return t}function wa(s){return s!==""}function L_(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(s){return s.replace(UR,OR)}const FR=new Map;function OR(s,e){let t=pt[e];if(t===void 0){const i=FR.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return od(t)}const kR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I_(s){return s.replace(kR,BR)}function BR(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function N_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function zR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function HR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case So:case Eo:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function GR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cv:e="ENVMAP_BLENDING_MULTIPLY";break;case US:e="ENVMAP_BLENDING_MIX";break;case FS:e="ENVMAP_BLENDING_ADD";break}return e}function WR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function XR(s,e,t,i){const o=s.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=zR(t),d=HR(t),p=VR(t),g=GR(t),_=WR(t),y=DR(t),E=IR(a),M=o.createProgram();let S,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(wa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(wa).join(`
`),x.length>0&&(x+=`
`)):(S=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),x=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xr?"#define TONE_MAPPING":"",t.toneMapping!==Xr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Xr?PR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,CR("linearToOutputTexel",t.outputColorSpace),LR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),u=od(u),u=L_(u,t),u=D_(u,t),c=od(c),c=L_(c,t),c=D_(c,t),u=I_(u),c=I_(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=L+S+u,A=L+x+c,N=b_(o,o.VERTEX_SHADER,b),B=b_(o,o.FRAGMENT_SHADER,A);o.attachShader(M,N),o.attachShader(M,B),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(O){if(s.debug.checkShaderErrors){const le=o.getProgramInfoLog(M)||"",ne=o.getShaderInfoLog(N)||"",ae=o.getShaderInfoLog(B)||"",fe=le.trim(),se=ne.trim(),ce=ae.trim();let H=!0,oe=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,M,N,B);else{const ie=P_(o,N,"vertex"),U=P_(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+fe+`
`+ie+`
`+U)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(se===""||ce==="")&&(oe=!1);oe&&(O.diagnostics={runnable:H,programLog:fe,vertexShader:{log:se,prefix:S},fragmentShader:{log:ce,prefix:x}})}o.deleteShader(N),o.deleteShader(B),j=new Nu(o,M),C=NR(o,M)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(M,wR)),P},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=B,this}let jR=0;class YR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new KR(e),t.set(e,i)),i}}class KR{constructor(e){this.id=jR++,this.code=e,this.usedTimes=0}}function qR(s,e,t,i,o,a,u){const c=new Av,f=new YR,d=new Set,p=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,P,O,le,ne){const ae=le.fog,fe=ne.geometry,se=C.isMeshStandardMaterial?le.environment:null,ce=(C.isMeshStandardMaterial?t:e).get(C.envMap||se),H=ce&&ce.mapping===Gu?ce.image.height:null,oe=E[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const ie=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=ie!==void 0?ie.length:0;let te=0;fe.morphAttributes.position!==void 0&&(te=1),fe.morphAttributes.normal!==void 0&&(te=2),fe.morphAttributes.color!==void 0&&(te=3);let ze,Be,Z,me;if(oe){const Mt=Ci[oe];ze=Mt.vertexShader,Be=Mt.fragmentShader}else ze=C.vertexShader,Be=C.fragmentShader,f.update(C),Z=f.getVertexShaderID(C),me=f.getFragmentShaderID(C);const pe=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),De=ne.isInstancedMesh===!0,Je=ne.isBatchedMesh===!0,Ht=!!C.map,St=!!C.matcap,k=!!ce,Ct=!!C.aoMap,Qe=!!C.lightMap,Et=!!C.bumpMap,$e=!!C.normalMap,kt=!!C.displacementMap,Oe=!!C.emissiveMap,ct=!!C.metalnessMap,Gt=!!C.roughnessMap,Wt=C.anisotropy>0,D=C.clearcoat>0,w=C.dispersion>0,q=C.iridescence>0,ue=C.sheen>0,xe=C.transmission>0,re=Wt&&!!C.anisotropyMap,Ke=D&&!!C.clearcoatMap,Ae=D&&!!C.clearcoatNormalMap,He=D&&!!C.clearcoatRoughnessMap,qe=q&&!!C.iridescenceMap,Te=q&&!!C.iridescenceThicknessMap,Ie=ue&&!!C.sheenColorMap,rt=ue&&!!C.sheenRoughnessMap,je=!!C.specularMap,Ce=!!C.specularColorMap,ht=!!C.specularIntensityMap,V=xe&&!!C.transmissionMap,Ee=xe&&!!C.thicknessMap,Re=!!C.gradientMap,Ne=!!C.alphaMap,Se=C.alphaTest>0,de=!!C.alphaHash,We=!!C.extensions;let lt=Xr;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Lt={shaderID:oe,shaderType:C.type,shaderName:C.name,vertexShader:ze,fragmentShader:Be,defines:C.defines,customVertexShaderID:Z,customFragmentShaderID:me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Je,batchingColor:Je&&ne._colorsTexture!==null,instancing:De,instancingColor:De&&ne.instanceColor!==null,instancingMorph:De&&ne.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Fn,alphaToCoverage:!!C.alphaToCoverage,map:Ht,matcap:St,envMap:k,envMapMode:k&&ce.mapping,envMapCubeUVHeight:H,aoMap:Ct,lightMap:Qe,bumpMap:Et,normalMap:$e,displacementMap:_&&kt,emissiveMap:Oe,normalMapObjectSpace:$e&&C.normalMapType===qS,normalMapTangentSpace:$e&&C.normalMapType===Sv,metalnessMap:ct,roughnessMap:Gt,anisotropy:Wt,anisotropyMap:re,clearcoat:D,clearcoatMap:Ke,clearcoatNormalMap:Ae,clearcoatRoughnessMap:He,dispersion:w,iridescence:q,iridescenceMap:qe,iridescenceThicknessMap:Te,sheen:ue,sheenColorMap:Ie,sheenRoughnessMap:rt,specularMap:je,specularColorMap:Ce,specularIntensityMap:ht,transmission:xe,transmissionMap:V,thicknessMap:Ee,gradientMap:Re,opaque:C.transparent===!1&&C.blending===go&&C.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Se,alphaHash:de,combine:C.combine,mapUv:Ht&&M(C.map.channel),aoMapUv:Ct&&M(C.aoMap.channel),lightMapUv:Qe&&M(C.lightMap.channel),bumpMapUv:Et&&M(C.bumpMap.channel),normalMapUv:$e&&M(C.normalMap.channel),displacementMapUv:kt&&M(C.displacementMap.channel),emissiveMapUv:Oe&&M(C.emissiveMap.channel),metalnessMapUv:ct&&M(C.metalnessMap.channel),roughnessMapUv:Gt&&M(C.roughnessMap.channel),anisotropyMapUv:re&&M(C.anisotropyMap.channel),clearcoatMapUv:Ke&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:rt&&M(C.sheenRoughnessMap.channel),specularMapUv:je&&M(C.specularMap.channel),specularColorMapUv:Ce&&M(C.specularColorMap.channel),specularIntensityMapUv:ht&&M(C.specularIntensityMap.channel),transmissionMapUv:V&&M(C.transmissionMap.channel),thicknessMapUv:Ee&&M(C.thicknessMap.channel),alphaMapUv:Ne&&M(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&($e||Wt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!fe.attributes.uv&&(Ht||Ne),fog:!!ae,useFog:C.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:be,skinning:ne.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Ht&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===Ft,decodeVideoTextureEmissive:Oe&&C.emissiveMap.isVideoTexture===!0&&wt.getTransfer(C.emissiveMap.colorSpace)===Ft,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Pi,flipSided:C.side===Wn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:We&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&C.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Lt.vertexUv1s=d.has(1),Lt.vertexUv2s=d.has(2),Lt.vertexUv3s=d.has(3),d.clear(),Lt}function x(C){const P=[];if(C.shaderID?P.push(C.shaderID):(P.push(C.customVertexShaderID),P.push(C.customFragmentShaderID)),C.defines!==void 0)for(const O in C.defines)P.push(O),P.push(C.defines[O]);return C.isRawShaderMaterial===!1&&(L(P,C),b(P,C),P.push(s.outputColorSpace)),P.push(C.customProgramCacheKey),P.join()}function L(C,P){C.push(P.precision),C.push(P.outputColorSpace),C.push(P.envMapMode),C.push(P.envMapCubeUVHeight),C.push(P.mapUv),C.push(P.alphaMapUv),C.push(P.lightMapUv),C.push(P.aoMapUv),C.push(P.bumpMapUv),C.push(P.normalMapUv),C.push(P.displacementMapUv),C.push(P.emissiveMapUv),C.push(P.metalnessMapUv),C.push(P.roughnessMapUv),C.push(P.anisotropyMapUv),C.push(P.clearcoatMapUv),C.push(P.clearcoatNormalMapUv),C.push(P.clearcoatRoughnessMapUv),C.push(P.iridescenceMapUv),C.push(P.iridescenceThicknessMapUv),C.push(P.sheenColorMapUv),C.push(P.sheenRoughnessMapUv),C.push(P.specularMapUv),C.push(P.specularColorMapUv),C.push(P.specularIntensityMapUv),C.push(P.transmissionMapUv),C.push(P.thicknessMapUv),C.push(P.combine),C.push(P.fogExp2),C.push(P.sizeAttenuation),C.push(P.morphTargetsCount),C.push(P.morphAttributeCount),C.push(P.numDirLights),C.push(P.numPointLights),C.push(P.numSpotLights),C.push(P.numSpotLightMaps),C.push(P.numHemiLights),C.push(P.numRectAreaLights),C.push(P.numDirLightShadows),C.push(P.numPointLightShadows),C.push(P.numSpotLightShadows),C.push(P.numSpotLightShadowsWithMaps),C.push(P.numLightProbes),C.push(P.shadowMapType),C.push(P.toneMapping),C.push(P.numClippingPlanes),C.push(P.numClipIntersection),C.push(P.depthPacking)}function b(C,P){c.disableAll(),P.supportsVertexTextures&&c.enable(0),P.instancing&&c.enable(1),P.instancingColor&&c.enable(2),P.instancingMorph&&c.enable(3),P.matcap&&c.enable(4),P.envMap&&c.enable(5),P.normalMapObjectSpace&&c.enable(6),P.normalMapTangentSpace&&c.enable(7),P.clearcoat&&c.enable(8),P.iridescence&&c.enable(9),P.alphaTest&&c.enable(10),P.vertexColors&&c.enable(11),P.vertexAlphas&&c.enable(12),P.vertexUv1s&&c.enable(13),P.vertexUv2s&&c.enable(14),P.vertexUv3s&&c.enable(15),P.vertexTangents&&c.enable(16),P.anisotropy&&c.enable(17),P.alphaHash&&c.enable(18),P.batching&&c.enable(19),P.dispersion&&c.enable(20),P.batchingColor&&c.enable(21),P.gradientMap&&c.enable(22),C.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),C.push(c.mask)}function A(C){const P=E[C.type];let O;if(P){const le=Ci[P];O=BE.clone(le.uniforms)}else O=C.uniforms;return O}function N(C,P){let O;for(let le=0,ne=p.length;le<ne;le++){const ae=p[le];if(ae.cacheKey===P){O=ae,++O.usedTimes;break}}return O===void 0&&(O=new XR(s,P,C,a),p.push(O)),O}function B(C){if(--C.usedTimes===0){const P=p.indexOf(C);p[P]=p[p.length-1],p.pop(),C.destroy()}}function F(C){f.remove(C)}function j(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:N,releaseProgram:B,releaseShaderCache:F,programs:p,dispose:j}}function $R(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let c=s.get(u);return c===void 0&&(c={},s.set(u,c)),c}function i(u){s.delete(u)}function o(u,c,f){s.get(u)[c]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function ZR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function U_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function F_(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(g,_,y,E,M,S){let x=s[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},s[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=S),e++,x}function c(g,_,y,E,M,S){const x=u(g,_,y,E,M,S);y.transmission>0?i.push(x):y.transparent===!0?o.push(x):t.push(x)}function f(g,_,y,E,M,S){const x=u(g,_,y,E,M,S);y.transmission>0?i.unshift(x):y.transparent===!0?o.unshift(x):t.unshift(x)}function d(g,_){t.length>1&&t.sort(g||ZR),i.length>1&&i.sort(_||U_),o.length>1&&o.sort(_||U_)}function p(){for(let g=e,_=s.length;g<_;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:f,finish:p,sort:d}}function JR(){let s=new WeakMap;function e(i,o){const a=s.get(i);let u;return a===void 0?(u=new F_,s.set(i,[u])):o>=a.length?(u=new F_,a.push(u)):u=a[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function QR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ft};break;case"SpotLight":t={position:new X,direction:new X,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function e1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let t1=0;function n1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function i1(s){const e=new QR,t=e1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new X);const o=new X,a=new mt,u=new mt;function c(d){let p=0,g=0,_=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,L=0,b=0,A=0,N=0,B=0,F=0;d.sort(n1);for(let C=0,P=d.length;C<P;C++){const O=d[C],le=O.color,ne=O.intensity,ae=O.distance,fe=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)p+=le.r*ne,g+=le.g*ne,_+=le.b*ne;else if(O.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(O.sh.coefficients[se],ne);F++}else if(O.isDirectionalLight){const se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ce=O.shadow,H=t.get(O);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,i.directionalShadow[y]=H,i.directionalShadowMap[y]=fe,i.directionalShadowMatrix[y]=O.shadow.matrix,L++}i.directional[y]=se,y++}else if(O.isSpotLight){const se=e.get(O);se.position.setFromMatrixPosition(O.matrixWorld),se.color.copy(le).multiplyScalar(ne),se.distance=ae,se.coneCos=Math.cos(O.angle),se.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),se.decay=O.decay,i.spot[M]=se;const ce=O.shadow;if(O.map&&(i.spotLightMap[N]=O.map,N++,ce.updateMatrices(O),O.castShadow&&B++),i.spotLightMatrix[M]=ce.matrix,O.castShadow){const H=t.get(O);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=fe,A++}M++}else if(O.isRectAreaLight){const se=e.get(O);se.color.copy(le).multiplyScalar(ne),se.halfWidth.set(O.width*.5,0,0),se.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=se,S++}else if(O.isPointLight){const se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),se.distance=O.distance,se.decay=O.decay,O.castShadow){const ce=O.shadow,H=t.get(O);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,i.pointShadow[E]=H,i.pointShadowMap[E]=fe,i.pointShadowMatrix[E]=O.shadow.matrix,b++}i.point[E]=se,E++}else if(O.isHemisphereLight){const se=e.get(O);se.skyColor.copy(O.color).multiplyScalar(ne),se.groundColor.copy(O.groundColor).multiplyScalar(ne),i.hemi[x]=se,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=_;const j=i.hash;(j.directionalLength!==y||j.pointLength!==E||j.spotLength!==M||j.rectAreaLength!==S||j.hemiLength!==x||j.numDirectionalShadows!==L||j.numPointShadows!==b||j.numSpotShadows!==A||j.numSpotMaps!==N||j.numLightProbes!==F)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=x,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=A+N-B,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=F,j.directionalLength=y,j.pointLength=E,j.spotLength=M,j.rectAreaLength=S,j.hemiLength=x,j.numDirectionalShadows=L,j.numPointShadows=b,j.numSpotShadows=A,j.numSpotMaps=N,j.numLightProbes=F,i.version=t1++)}function f(d,p){let g=0,_=0,y=0,E=0,M=0;const S=p.matrixWorldInverse;for(let x=0,L=d.length;x<L;x++){const b=d[x];if(b.isDirectionalLight){const A=i.directional[g];A.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),g++}else if(b.isSpotLight){const A=i.spot[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(b.isRectAreaLight){const A=i.rectArea[E];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(S),u.identity(),a.copy(b.matrixWorld),a.premultiply(S),u.extractRotation(a),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(b.isPointLight){const A=i.point[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(S),_++}else if(b.isHemisphereLight){const A=i.hemi[M];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(S),M++}}}return{setup:c,setupView:f,state:i}}function O_(s){const e=new i1(s),t=[],i=[];function o(p){d.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function u(p){i.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:u}}function r1(s){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let c;return u===void 0?(c=new O_(s),e.set(o,[c])):a>=u.length?(c=new O_(s),u.push(c)):c=u[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
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
}`;function a1(s,e,t){let i=new bd;const o=new ut,a=new ut,u=new bt,c=new rM({depthPacking:KS}),f=new sM,d={},p=t.maxTextureSize,g={[fr]:Wn,[Wn]:fr,[Pi]:Pi},_=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:s1,fragmentShader:o1}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qn(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lv;let x=this.type;this.render=function(B,F,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const C=s.getRenderTarget(),P=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Wr),le.buffers.depth.getReversed()?le.buffers.color.setClear(0,0,0,0):le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ne=x!==rr&&this.type===rr,ae=x===rr&&this.type!==rr;for(let fe=0,se=B.length;fe<se;fe++){const ce=B[fe],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const oe=H.getFrameExtents();if(o.multiply(oe),a.copy(H.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/oe.x),o.x=a.x*oe.x,H.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/oe.y),o.y=a.y*oe.y,H.mapSize.y=a.y)),H.map===null||ne===!0||ae===!0){const U=this.type!==rr?{minFilter:Nn,magFilter:Nn}:{};H.map!==null&&H.map.dispose(),H.map=new Ss(o.x,o.y,U),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ie=H.getViewportCount();for(let U=0;U<ie;U++){const te=H.getViewport(U);u.set(a.x*te.x,a.y*te.y,a.x*te.z,a.y*te.w),le.viewport(u),H.updateMatrices(ce,U),i=H.getFrustum(),A(F,j,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===rr&&L(H,j),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(C,P,O)};function L(B,F){const j=e.update(M);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ss(o.x,o.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(F,null,j,_,M,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(F,null,j,y,M,null)}function b(B,F,j,C){let P=null;const O=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(O!==void 0)P=O;else if(P=j.isPointLight===!0?f:c,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const le=P.uuid,ne=F.uuid;let ae=d[le];ae===void 0&&(ae={},d[le]=ae);let fe=ae[ne];fe===void 0&&(fe=P.clone(),ae[ne]=fe,F.addEventListener("dispose",N)),P=fe}if(P.visible=F.visible,P.wireframe=F.wireframe,C===rr?P.side=F.shadowSide!==null?F.shadowSide:F.side:P.side=F.shadowSide!==null?F.shadowSide:g[F.side],P.alphaMap=F.alphaMap,P.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,P.map=F.map,P.clipShadows=F.clipShadows,P.clippingPlanes=F.clippingPlanes,P.clipIntersection=F.clipIntersection,P.displacementMap=F.displacementMap,P.displacementScale=F.displacementScale,P.displacementBias=F.displacementBias,P.wireframeLinewidth=F.wireframeLinewidth,P.linewidth=F.linewidth,j.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const le=s.properties.get(P);le.light=j}return P}function A(B,F,j,C,P){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&P===rr)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const ne=e.update(B),ae=B.material;if(Array.isArray(ae)){const fe=ne.groups;for(let se=0,ce=fe.length;se<ce;se++){const H=fe[se],oe=ae[H.materialIndex];if(oe&&oe.visible){const ie=b(B,oe,C,P);B.onBeforeShadow(s,B,F,j,ne,ie,H),s.renderBufferDirect(j,null,ne,ie,B,H),B.onAfterShadow(s,B,F,j,ne,ie,H)}}}else if(ae.visible){const fe=b(B,ae,C,P);B.onBeforeShadow(s,B,F,j,ne,fe,null),s.renderBufferDirect(j,null,ne,fe,B,null),B.onAfterShadow(s,B,F,j,ne,fe,null)}}const le=B.children;for(let ne=0,ae=le.length;ne<ae;ne++)A(le[ne],F,j,C,P)}function N(B){B.target.removeEventListener("dispose",N);for(const j in d){const C=d[j],P=B.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}const l1={[Sf]:Ef,[Mf]:Af,[Tf]:Rf,[yo]:wf,[Ef]:Sf,[Af]:Mf,[Rf]:Tf,[wf]:yo};function u1(s,e){function t(){let V=!1;const Ee=new bt;let Re=null;const Ne=new bt(0,0,0,0);return{setMask:function(Se){Re!==Se&&!V&&(s.colorMask(Se,Se,Se,Se),Re=Se)},setLocked:function(Se){V=Se},setClear:function(Se,de,We,lt,Lt){Lt===!0&&(Se*=lt,de*=lt,We*=lt),Ee.set(Se,de,We,lt),Ne.equals(Ee)===!1&&(s.clearColor(Se,de,We,lt),Ne.copy(Ee))},reset:function(){V=!1,Re=null,Ne.set(-1,0,0,0)}}}function i(){let V=!1,Ee=!1,Re=null,Ne=null,Se=null;return{setReversed:function(de){if(Ee!==de){const We=e.get("EXT_clip_control");de?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ee=de;const lt=Se;Se=null,this.setClear(lt)}},getReversed:function(){return Ee},setTest:function(de){de?pe(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(de){Re!==de&&!V&&(s.depthMask(de),Re=de)},setFunc:function(de){if(Ee&&(de=l1[de]),Ne!==de){switch(de){case Sf:s.depthFunc(s.NEVER);break;case Ef:s.depthFunc(s.ALWAYS);break;case Mf:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case Tf:s.depthFunc(s.EQUAL);break;case wf:s.depthFunc(s.GEQUAL);break;case Af:s.depthFunc(s.GREATER);break;case Rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=de}},setLocked:function(de){V=de},setClear:function(de){Se!==de&&(Ee&&(de=1-de),s.clearDepth(de),Se=de)},reset:function(){V=!1,Re=null,Ne=null,Se=null,Ee=!1}}}function o(){let V=!1,Ee=null,Re=null,Ne=null,Se=null,de=null,We=null,lt=null,Lt=null;return{setTest:function(Mt){V||(Mt?pe(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Mt){Ee!==Mt&&!V&&(s.stencilMask(Mt),Ee=Mt)},setFunc:function(Mt,ei,vn){(Re!==Mt||Ne!==ei||Se!==vn)&&(s.stencilFunc(Mt,ei,vn),Re=Mt,Ne=ei,Se=vn)},setOp:function(Mt,ei,vn){(de!==Mt||We!==ei||lt!==vn)&&(s.stencilOp(Mt,ei,vn),de=Mt,We=ei,lt=vn)},setLocked:function(Mt){V=Mt},setClear:function(Mt){Lt!==Mt&&(s.clearStencil(Mt),Lt=Mt)},reset:function(){V=!1,Ee=null,Re=null,Ne=null,Se=null,de=null,We=null,lt=null,Lt=null}}}const a=new t,u=new i,c=new o,f=new WeakMap,d=new WeakMap;let p={},g={},_=new WeakMap,y=[],E=null,M=!1,S=null,x=null,L=null,b=null,A=null,N=null,B=null,F=new ft(0,0,0),j=0,C=!1,P=null,O=null,le=null,ne=null,ae=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ce=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(H)[1]),se=ce>=1):H.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),se=ce>=2);let oe=null,ie={};const U=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),ze=new bt().fromArray(U),Be=new bt().fromArray(te);function Z(V,Ee,Re,Ne){const Se=new Uint8Array(4),de=s.createTexture();s.bindTexture(V,de),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<Re;We++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ee,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Ee+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return de}const me={};me[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),pe(s.DEPTH_TEST),u.setFunc(yo),Et(!1),$e(yg),pe(s.CULL_FACE),Ct(Wr);function pe(V){p[V]!==!0&&(s.enable(V),p[V]=!0)}function be(V){p[V]!==!1&&(s.disable(V),p[V]=!1)}function De(V,Ee){return g[V]!==Ee?(s.bindFramebuffer(V,Ee),g[V]=Ee,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ee),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Je(V,Ee){let Re=y,Ne=!1;if(V){Re=_.get(Ee),Re===void 0&&(Re=[],_.set(Ee,Re));const Se=V.textures;if(Re.length!==Se.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let de=0,We=Se.length;de<We;de++)Re[de]=s.COLOR_ATTACHMENT0+de;Re.length=Se.length,Ne=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(Re)}function Ht(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const St={[gs]:s.FUNC_ADD,[vS]:s.FUNC_SUBTRACT,[xS]:s.FUNC_REVERSE_SUBTRACT};St[yS]=s.MIN,St[SS]=s.MAX;const k={[ES]:s.ZERO,[MS]:s.ONE,[TS]:s.SRC_COLOR,[xf]:s.SRC_ALPHA,[PS]:s.SRC_ALPHA_SATURATE,[bS]:s.DST_COLOR,[AS]:s.DST_ALPHA,[wS]:s.ONE_MINUS_SRC_COLOR,[yf]:s.ONE_MINUS_SRC_ALPHA,[CS]:s.ONE_MINUS_DST_COLOR,[RS]:s.ONE_MINUS_DST_ALPHA,[LS]:s.CONSTANT_COLOR,[DS]:s.ONE_MINUS_CONSTANT_COLOR,[IS]:s.CONSTANT_ALPHA,[NS]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(V,Ee,Re,Ne,Se,de,We,lt,Lt,Mt){if(V===Wr){M===!0&&(be(s.BLEND),M=!1);return}if(M===!1&&(pe(s.BLEND),M=!0),V!==_S){if(V!==S||Mt!==C){if((x!==gs||A!==gs)&&(s.blendEquation(s.FUNC_ADD),x=gs,A=gs),Mt)switch(V){case go:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sg:s.blendFunc(s.ONE,s.ONE);break;case Eg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case go:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Eg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,b=null,N=null,B=null,F.set(0,0,0),j=0,S=V,C=Mt}return}Se=Se||Ee,de=de||Re,We=We||Ne,(Ee!==x||Se!==A)&&(s.blendEquationSeparate(St[Ee],St[Se]),x=Ee,A=Se),(Re!==L||Ne!==b||de!==N||We!==B)&&(s.blendFuncSeparate(k[Re],k[Ne],k[de],k[We]),L=Re,b=Ne,N=de,B=We),(lt.equals(F)===!1||Lt!==j)&&(s.blendColor(lt.r,lt.g,lt.b,Lt),F.copy(lt),j=Lt),S=V,C=!1}function Qe(V,Ee){V.side===Pi?be(s.CULL_FACE):pe(s.CULL_FACE);let Re=V.side===Wn;Ee&&(Re=!Re),Et(Re),V.blending===go&&V.transparent===!1?Ct(Wr):Ct(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const Ne=V.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Oe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(V){P!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),P=V)}function $e(V){V!==mS?(pe(s.CULL_FACE),V!==O&&(V===yg?s.cullFace(s.BACK):V===gS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),O=V}function kt(V){V!==le&&(se&&s.lineWidth(V),le=V)}function Oe(V,Ee,Re){V?(pe(s.POLYGON_OFFSET_FILL),(ne!==Ee||ae!==Re)&&(s.polygonOffset(Ee,Re),ne=Ee,ae=Re)):be(s.POLYGON_OFFSET_FILL)}function ct(V){V?pe(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function Gt(V){V===void 0&&(V=s.TEXTURE0+fe-1),oe!==V&&(s.activeTexture(V),oe=V)}function Wt(V,Ee,Re){Re===void 0&&(oe===null?Re=s.TEXTURE0+fe-1:Re=oe);let Ne=ie[Re];Ne===void 0&&(Ne={type:void 0,texture:void 0},ie[Re]=Ne),(Ne.type!==V||Ne.texture!==Ee)&&(oe!==Re&&(s.activeTexture(Re),oe=Re),s.bindTexture(V,Ee||me[V]),Ne.type=V,Ne.texture=Ee)}function D(){const V=ie[oe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(V){ze.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ze.copy(V))}function rt(V){Be.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Be.copy(V))}function je(V,Ee){let Re=d.get(Ee);Re===void 0&&(Re=new WeakMap,d.set(Ee,Re));let Ne=Re.get(V);Ne===void 0&&(Ne=s.getUniformBlockIndex(Ee,V.name),Re.set(V,Ne))}function Ce(V,Ee){const Ne=d.get(Ee).get(V);f.get(Ee)!==Ne&&(s.uniformBlockBinding(Ee,Ne,V.__bindingPointIndex),f.set(Ee,Ne))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},oe=null,ie={},g={},_=new WeakMap,y=[],E=null,M=!1,S=null,x=null,L=null,b=null,A=null,N=null,B=null,F=new ft(0,0,0),j=0,C=!1,P=null,O=null,le=null,ne=null,ae=null,ze.set(0,0,s.canvas.width,s.canvas.height),Be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:pe,disable:be,bindFramebuffer:De,drawBuffers:Je,useProgram:Ht,setBlending:Ct,setMaterial:Qe,setFlipSided:Et,setCullFace:$e,setLineWidth:kt,setPolygonOffset:Oe,setScissorTest:ct,activeTexture:Gt,bindTexture:Wt,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:qe,texImage3D:Te,updateUBOMapping:je,uniformBlockBinding:Ce,texStorage2D:Ae,texStorage3D:He,texSubImage2D:ue,texSubImage3D:xe,compressedTexSubImage2D:re,compressedTexSubImage3D:Ke,scissor:Ie,viewport:rt,reset:ht}}function c1(s,e,t,i,o,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ut,p=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return y?new OffscreenCanvas(D,w):Fa("canvas")}function M(D,w,q){let ue=1;const xe=Wt(D);if((xe.width>q||xe.height>q)&&(ue=q/Math.max(xe.width,xe.height)),ue<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const re=Math.floor(ue*xe.width),Ke=Math.floor(ue*xe.height);g===void 0&&(g=E(re,Ke));const Ae=w?E(re,Ke):g;return Ae.width=re,Ae.height=Ke,Ae.getContext("2d").drawImage(D,0,0,re,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+re+"x"+Ke+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function S(D){return D.generateMipmaps}function x(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(D,w,q,ue,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let re=w;if(w===s.RED&&(q===s.FLOAT&&(re=s.R32F),q===s.HALF_FLOAT&&(re=s.R16F),q===s.UNSIGNED_BYTE&&(re=s.R8)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.R8UI),q===s.UNSIGNED_SHORT&&(re=s.R16UI),q===s.UNSIGNED_INT&&(re=s.R32UI),q===s.BYTE&&(re=s.R8I),q===s.SHORT&&(re=s.R16I),q===s.INT&&(re=s.R32I)),w===s.RG&&(q===s.FLOAT&&(re=s.RG32F),q===s.HALF_FLOAT&&(re=s.RG16F),q===s.UNSIGNED_BYTE&&(re=s.RG8)),w===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.RG8UI),q===s.UNSIGNED_SHORT&&(re=s.RG16UI),q===s.UNSIGNED_INT&&(re=s.RG32UI),q===s.BYTE&&(re=s.RG8I),q===s.SHORT&&(re=s.RG16I),q===s.INT&&(re=s.RG32I)),w===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.RGB8UI),q===s.UNSIGNED_SHORT&&(re=s.RGB16UI),q===s.UNSIGNED_INT&&(re=s.RGB32UI),q===s.BYTE&&(re=s.RGB8I),q===s.SHORT&&(re=s.RGB16I),q===s.INT&&(re=s.RGB32I)),w===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),q===s.UNSIGNED_INT&&(re=s.RGBA32UI),q===s.BYTE&&(re=s.RGBA8I),q===s.SHORT&&(re=s.RGBA16I),q===s.INT&&(re=s.RGBA32I)),w===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),w===s.RGBA){const Ke=xe?Ou:wt.getTransfer(ue);q===s.FLOAT&&(re=s.RGBA32F),q===s.HALF_FLOAT&&(re=s.RGBA16F),q===s.UNSIGNED_BYTE&&(re=Ke===Ft?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(D,w){let q;return D?w===null||w===ys||w===La?q=s.DEPTH24_STENCIL8:w===Ei?q=s.DEPTH32F_STENCIL8:w===Pa&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ys||w===La?q=s.DEPTH_COMPONENT24:w===Ei?q=s.DEPTH_COMPONENT32F:w===Pa&&(q=s.DEPTH_COMPONENT16),q}function N(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nn&&D.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function B(D){const w=D.target;w.removeEventListener("dispose",B),j(w),w.isVideoTexture&&p.delete(w)}function F(D){const w=D.target;w.removeEventListener("dispose",F),P(w)}function j(D){const w=i.get(D);if(w.__webglInit===void 0)return;const q=D.source,ue=_.get(q);if(ue){const xe=ue[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(D),Object.keys(ue).length===0&&_.delete(q)}i.remove(D)}function C(D){const w=i.get(D);s.deleteTexture(w.__webglTexture);const q=D.source,ue=_.get(q);delete ue[w.__cacheKey],u.memory.textures--}function P(D){const w=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let xe=0;xe<w.__webglFramebuffer[ue].length;xe++)s.deleteFramebuffer(w.__webglFramebuffer[ue][xe]);else s.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)s.deleteFramebuffer(w.__webglFramebuffer[ue]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=D.textures;for(let ue=0,xe=q.length;ue<xe;ue++){const re=i.get(q[ue]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),u.memory.textures--),i.remove(q[ue])}i.remove(D)}let O=0;function le(){O=0}function ne(){const D=O;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),O+=1,D}function ae(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function fe(D,w){const q=i.get(D);if(D.isVideoTexture&&ct(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const ue=D.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(q,D,w);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function se(D,w){const q=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){me(q,D,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function ce(D,w){const q=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){me(q,D,w);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function H(D,w){const q=i.get(D);if(D.version>0&&q.__version!==D.version){pe(q,D,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}const oe={[Mo]:s.REPEAT,[Gr]:s.CLAMP_TO_EDGE,[Fu]:s.MIRRORED_REPEAT},ie={[Nn]:s.NEAREST,[fv]:s.NEAREST_MIPMAP_NEAREST,[Ta]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[bu]:s.LINEAR_MIPMAP_NEAREST,[or]:s.LINEAR_MIPMAP_LINEAR},U={[$S]:s.NEVER,[nE]:s.ALWAYS,[ZS]:s.LESS,[Ev]:s.LEQUAL,[JS]:s.EQUAL,[tE]:s.GEQUAL,[QS]:s.GREATER,[eE]:s.NOTEQUAL};function te(D,w){if(w.type===Ei&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jn||w.magFilter===bu||w.magFilter===Ta||w.magFilter===or||w.minFilter===Jn||w.minFilter===bu||w.minFilter===Ta||w.minFilter===or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,oe[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,oe[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,oe[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ie[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nn||w.minFilter!==Ta&&w.minFilter!==or||w.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ze(D,w){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",B));const ue=w.source;let xe=_.get(ue);xe===void 0&&(xe={},_.set(ue,xe));const re=ae(w);if(re!==D.__cacheKey){xe[re]===void 0&&(xe[re]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,q=!0),xe[re].usedTimes++;const Ke=xe[D.__cacheKey];Ke!==void 0&&(xe[D.__cacheKey].usedTimes--,Ke.usedTimes===0&&C(w)),D.__cacheKey=re,D.__webglTexture=xe[re].texture}return q}function Be(D,w,q){return Math.floor(Math.floor(D/q)/w)}function Z(D,w,q,ue){const re=D.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,q,ue,w.data);else{re.sort((Te,Ie)=>Te.start-Ie.start);let Ke=0;for(let Te=1;Te<re.length;Te++){const Ie=re[Ke],rt=re[Te],je=Ie.start+Ie.count,Ce=Be(rt.start,w.width,4),ht=Be(Ie.start,w.width,4);rt.start<=je+1&&Ce===ht&&Be(rt.start+rt.count-1,w.width,4)===Ce?Ie.count=Math.max(Ie.count,rt.start+rt.count-Ie.start):(++Ke,re[Ke]=rt)}re.length=Ke+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Te=0,Ie=re.length;Te<Ie;Te++){const rt=re[Te],je=Math.floor(rt.start/4),Ce=Math.ceil(rt.count/4),ht=je%w.width,V=Math.floor(je/w.width),Ee=Ce,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,ht,V,Ee,Re,q,ue,w.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,qe)}}function me(D,w,q){let ue=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=s.TEXTURE_3D);const xe=ze(D,w),re=w.source;t.bindTexture(ue,D.__webglTexture,s.TEXTURE0+q);const Ke=i.get(re);if(re.version!==Ke.__version||xe===!0){t.activeTexture(s.TEXTURE0+q);const Ae=wt.getPrimaries(wt.workingColorSpace),He=w.colorSpace===Vr?null:wt.getPrimaries(w.colorSpace),qe=w.colorSpace===Vr||Ae===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Te=M(w.image,!1,o.maxTextureSize);Te=Gt(w,Te);const Ie=a.convert(w.format,w.colorSpace),rt=a.convert(w.type);let je=b(w.internalFormat,Ie,rt,w.colorSpace,w.isVideoTexture);te(ue,w);let Ce;const ht=w.mipmaps,V=w.isVideoTexture!==!0,Ee=Ke.__version===void 0||xe===!0,Re=re.dataReady,Ne=N(w,Te);if(w.isDepthTexture)je=A(w.format===Ia,w.type),Ee&&(V?t.texStorage2D(s.TEXTURE_2D,1,je,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,je,Te.width,Te.height,0,Ie,rt,null));else if(w.isDataTexture)if(ht.length>0){V&&Ee&&t.texStorage2D(s.TEXTURE_2D,Ne,je,ht[0].width,ht[0].height);for(let Se=0,de=ht.length;Se<de;Se++)Ce=ht[Se],V?Re&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ce.width,Ce.height,Ie,rt,Ce.data):t.texImage2D(s.TEXTURE_2D,Se,je,Ce.width,Ce.height,0,Ie,rt,Ce.data);w.generateMipmaps=!1}else V?(Ee&&t.texStorage2D(s.TEXTURE_2D,Ne,je,Te.width,Te.height),Re&&Z(w,Te,Ie,rt)):t.texImage2D(s.TEXTURE_2D,0,je,Te.width,Te.height,0,Ie,rt,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){V&&Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,je,ht[0].width,ht[0].height,Te.depth);for(let Se=0,de=ht.length;Se<de;Se++)if(Ce=ht[Se],w.format!==ui)if(Ie!==null)if(V){if(Re)if(w.layerUpdates.size>0){const We=d_(Ce.width,Ce.height,w.format,w.type);for(const lt of w.layerUpdates){const Lt=Ce.data.subarray(lt*We/Ce.data.BYTES_PER_ELEMENT,(lt+1)*We/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,lt,Ce.width,Ce.height,1,Ie,Lt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ce.width,Ce.height,Te.depth,Ie,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,je,Ce.width,Ce.height,Te.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ce.width,Ce.height,Te.depth,Ie,rt,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,je,Ce.width,Ce.height,Te.depth,0,Ie,rt,Ce.data)}else{V&&Ee&&t.texStorage2D(s.TEXTURE_2D,Ne,je,ht[0].width,ht[0].height);for(let Se=0,de=ht.length;Se<de;Se++)Ce=ht[Se],w.format!==ui?Ie!==null?V?Re&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Re&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ce.width,Ce.height,Ie,rt,Ce.data):t.texImage2D(s.TEXTURE_2D,Se,je,Ce.width,Ce.height,0,Ie,rt,Ce.data)}else if(w.isDataArrayTexture)if(V){if(Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,je,Te.width,Te.height,Te.depth),Re)if(w.layerUpdates.size>0){const Se=d_(Te.width,Te.height,w.format,w.type);for(const de of w.layerUpdates){const We=Te.data.subarray(de*Se/Te.data.BYTES_PER_ELEMENT,(de+1)*Se/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Te.width,Te.height,1,Ie,rt,We)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ie,rt,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,je,Te.width,Te.height,Te.depth,0,Ie,rt,Te.data);else if(w.isData3DTexture)V?(Ee&&t.texStorage3D(s.TEXTURE_3D,Ne,je,Te.width,Te.height,Te.depth),Re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ie,rt,Te.data)):t.texImage3D(s.TEXTURE_3D,0,je,Te.width,Te.height,Te.depth,0,Ie,rt,Te.data);else if(w.isFramebufferTexture){if(Ee)if(V)t.texStorage2D(s.TEXTURE_2D,Ne,je,Te.width,Te.height);else{let Se=Te.width,de=Te.height;for(let We=0;We<Ne;We++)t.texImage2D(s.TEXTURE_2D,We,je,Se,de,0,Ie,rt,null),Se>>=1,de>>=1}}else if(ht.length>0){if(V&&Ee){const Se=Wt(ht[0]);t.texStorage2D(s.TEXTURE_2D,Ne,je,Se.width,Se.height)}for(let Se=0,de=ht.length;Se<de;Se++)Ce=ht[Se],V?Re&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ie,rt,Ce):t.texImage2D(s.TEXTURE_2D,Se,je,Ie,rt,Ce);w.generateMipmaps=!1}else if(V){if(Ee){const Se=Wt(Te);t.texStorage2D(s.TEXTURE_2D,Ne,je,Se.width,Se.height)}Re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,rt,Te)}else t.texImage2D(s.TEXTURE_2D,0,je,Ie,rt,Te);S(w)&&x(ue),Ke.__version=re.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function pe(D,w,q){if(w.image.length!==6)return;const ue=ze(D,w),xe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);const re=i.get(xe);if(xe.version!==re.__version||ue===!0){t.activeTexture(s.TEXTURE0+q);const Ke=wt.getPrimaries(wt.workingColorSpace),Ae=w.colorSpace===Vr?null:wt.getPrimaries(w.colorSpace),He=w.colorSpace===Vr||Ke===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let de=0;de<6;de++)!qe&&!Te?Ie[de]=M(w.image[de],!0,o.maxCubemapSize):Ie[de]=Te?w.image[de].image:w.image[de],Ie[de]=Gt(w,Ie[de]);const rt=Ie[0],je=a.convert(w.format,w.colorSpace),Ce=a.convert(w.type),ht=b(w.internalFormat,je,Ce,w.colorSpace),V=w.isVideoTexture!==!0,Ee=re.__version===void 0||ue===!0,Re=xe.dataReady;let Ne=N(w,rt);te(s.TEXTURE_CUBE_MAP,w);let Se;if(qe){V&&Ee&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ht,rt.width,rt.height);for(let de=0;de<6;de++){Se=Ie[de].mipmaps;for(let We=0;We<Se.length;We++){const lt=Se[We];w.format!==ui?je!==null?V?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,0,0,lt.width,lt.height,je,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,0,0,lt.width,lt.height,je,Ce,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,We,ht,lt.width,lt.height,0,je,Ce,lt.data)}}}else{if(Se=w.mipmaps,V&&Ee){Se.length>0&&Ne++;const de=Wt(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ht,de.width,de.height)}for(let de=0;de<6;de++)if(Te){V?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ie[de].width,Ie[de].height,je,Ce,Ie[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ht,Ie[de].width,Ie[de].height,0,je,Ce,Ie[de].data);for(let We=0;We<Se.length;We++){const Lt=Se[We].image[de].image;V?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,0,0,Lt.width,Lt.height,je,Ce,Lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,ht,Lt.width,Lt.height,0,je,Ce,Lt.data)}}else{V?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,je,Ce,Ie[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ht,je,Ce,Ie[de]);for(let We=0;We<Se.length;We++){const lt=Se[We];V?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,0,0,je,Ce,lt.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,We+1,ht,je,Ce,lt.image[de])}}}S(w)&&x(s.TEXTURE_CUBE_MAP),re.__version=xe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function be(D,w,q,ue,xe,re){const Ke=a.convert(q.format,q.colorSpace),Ae=a.convert(q.type),He=b(q.internalFormat,Ke,Ae,q.colorSpace),qe=i.get(w),Te=i.get(q);if(Te.__renderTarget=w,!qe.__hasExternalTextures){const Ie=Math.max(1,w.width>>re),rt=Math.max(1,w.height>>re);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,re,He,Ie,rt,w.depth,0,Ke,Ae,null):t.texImage2D(xe,re,He,Ie,rt,0,Ke,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Oe(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,xe,Te.__webglTexture,0,kt(w)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,xe,Te.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(D,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const ue=w.depthTexture,xe=ue&&ue.isDepthTexture?ue.type:null,re=A(w.stencilBuffer,xe),Ke=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=kt(w);Oe(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,re,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,re,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,re,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,D)}else{const ue=w.textures;for(let xe=0;xe<ue.length;xe++){const re=ue[xe],Ke=a.convert(re.format,re.colorSpace),Ae=a.convert(re.type),He=b(re.internalFormat,Ke,Ae,re.colorSpace),qe=kt(w);q&&Oe(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,He,w.width,w.height):Oe(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,He,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,He,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Je(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(w.depthTexture);ue.__renderTarget=w,(!ue.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const xe=ue.__webglTexture,re=kt(w);if(w.depthTexture.format===Da)Oe(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(w.depthTexture.format===Ia)Oe(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ht(D){const w=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const ue=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",xe)};ue.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=ue}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ue=D.texture.mipmaps;ue&&ue.length>0?Je(w.__webglFramebuffer[0],D):Je(w.__webglFramebuffer,D)}else if(q){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=s.createRenderbuffer(),De(w.__webglDepthbuffer[ue],D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,re)}}else{const ue=D.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),De(w.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(D,w,q){const ue=i.get(D);w!==void 0&&be(ue.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ht(D)}function k(D){const w=D.texture,q=i.get(D),ue=i.get(w);D.addEventListener("dispose",F);const xe=D.textures,re=D.isWebGLCubeRenderTarget===!0,Ke=xe.length>1;if(Ke||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=w.version,u.memory.textures++),re){q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[Ae]=[];for(let He=0;He<w.mipmaps.length;He++)q.__webglFramebuffer[Ae][He]=s.createFramebuffer()}else q.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)q.__webglFramebuffer[Ae]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ae=0,He=xe.length;Ae<He;Ae++){const qe=i.get(xe[Ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&Oe(D)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const He=xe[Ae];q.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Ae]);const qe=a.convert(He.format,He.colorSpace),Te=a.convert(He.type),Ie=b(He.internalFormat,qe,Te,He.colorSpace,D.isXRRenderTarget===!0),rt=kt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Ie,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,q.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),De(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),te(s.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)be(q.__webglFramebuffer[Ae][He],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,He);else be(q.__webglFramebuffer[Ae],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(w)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ae=0,He=xe.length;Ae<He;Ae++){const qe=xe[Ae],Te=i.get(qe);let Ie=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Te.__webglTexture),te(Ie,qe),be(q.__webglFramebuffer,D,qe,s.COLOR_ATTACHMENT0+Ae,Ie,0),S(qe)&&x(Ie)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ue.__webglTexture),te(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)be(q.__webglFramebuffer[He],D,w,s.COLOR_ATTACHMENT0,Ae,He);else be(q.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,Ae,0);S(w)&&x(Ae),t.unbindTexture()}D.depthBuffer&&Ht(D)}function Ct(D){const w=D.textures;for(let q=0,ue=w.length;q<ue;q++){const xe=w[q];if(S(xe)){const re=L(D),Ke=i.get(xe).__webglTexture;t.bindTexture(re,Ke),x(re),t.unbindTexture()}}}const Qe=[],Et=[];function $e(D){if(D.samples>0){if(Oe(D)===!1){const w=D.textures,q=D.width,ue=D.height;let xe=s.COLOR_BUFFER_BIT;const re=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=i.get(D),Ae=w.length>1;if(Ae)for(let qe=0;qe<w.length;qe++)t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const He=D.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[qe]);const Te=i.get(w[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,q,ue,0,0,q,ue,xe,s.NEAREST),f===!0&&(Qe.length=0,Et.length=0,Qe.push(s.COLOR_ATTACHMENT0+qe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Qe.push(re),Et.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let qe=0;qe<w.length;qe++){t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[qe]);const Te=i.get(w[qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,Te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function kt(D){return Math.min(o.maxSamples,D.samples)}function Oe(D){const w=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(D){const w=u.render.frame;p.get(D)!==w&&(p.set(D,w),D.update())}function Gt(D,w){const q=D.colorSpace,ue=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Fn&&q!==Vr&&(wt.getTransfer(q)===Ft?(ue!==ui||xe!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=ne,this.resetTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=H,this.rebindTextures=St,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Oe}function h1(s,e){function t(i,o=Vr){let a;const u=wt.getTransfer(o);if(i===Ni)return s.UNSIGNED_BYTE;if(i===vd)return s.UNSIGNED_SHORT_4_4_4_4;if(i===xd)return s.UNSIGNED_SHORT_5_5_5_1;if(i===mv)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===dv)return s.BYTE;if(i===pv)return s.SHORT;if(i===Pa)return s.UNSIGNED_SHORT;if(i===_d)return s.INT;if(i===ys)return s.UNSIGNED_INT;if(i===Ei)return s.FLOAT;if(i===za)return s.HALF_FLOAT;if(i===gv)return s.ALPHA;if(i===_v)return s.RGB;if(i===ui)return s.RGBA;if(i===Da)return s.DEPTH_COMPONENT;if(i===Ia)return s.DEPTH_STENCIL;if(i===yd)return s.RED;if(i===Sd)return s.RED_INTEGER;if(i===vv)return s.RG;if(i===Ed)return s.RG_INTEGER;if(i===Md)return s.RGBA_INTEGER;if(i===Cu||i===Pu||i===Lu||i===Du)if(u===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Cu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Cu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Du)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pf||i===Lf||i===Df||i===If)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Pf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Df)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===If)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nf||i===Uf||i===Ff)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Nf||i===Uf)return u===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ff)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Of||i===kf||i===Bf||i===zf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===jf||i===Yf||i===Kf||i===qf||i===$f)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Of)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$f)return u===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Iu||i===Zf||i===Jf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Iu)return u===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xv||i===Qf||i===ed||i===td)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Iu)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Qf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ed)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===td)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===La?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class Yv extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d1=`
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

}`;class p1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Yv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new jr({vertexShader:f1,fragmentShader:d1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qn(new Wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m1 extends Ms{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,g=null,_=null,y=null,E=null;const M=new p1,S={},x=t.getContextAttributes();let L=null,b=null;const A=[],N=[],B=new ut;let F=null;const j=new In;j.viewport=new bt;const C=new In;C.viewport=new bt;const P=[j,C],O=new AM;let le=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let me=A[Z];return me===void 0&&(me=new Zh,A[Z]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Z){let me=A[Z];return me===void 0&&(me=new Zh,A[Z]=me),me.getGripSpace()},this.getHand=function(Z){let me=A[Z];return me===void 0&&(me=new Zh,A[Z]=me),me.getHandSpace()};function ae(Z){const me=N.indexOf(Z.inputSource);if(me===-1)return;const pe=A[me];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,d||u),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){o.removeEventListener("select",ae),o.removeEventListener("selectstart",ae),o.removeEventListener("selectend",ae),o.removeEventListener("squeeze",ae),o.removeEventListener("squeezestart",ae),o.removeEventListener("squeezeend",ae),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",se);for(let Z=0;Z<A.length;Z++){const me=N[Z];me!==null&&(N[Z]=null,A[Z].disconnect(me))}le=null,ne=null,M.reset();for(const Z in S)delete S[Z];e.setRenderTarget(L),y=null,_=null,g=null,o=null,b=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Z){d=Z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ae),o.addEventListener("selectstart",ae),o.addEventListener("selectend",ae),o.addEventListener("squeeze",ae),o.addEventListener("squeezestart",ae),o.addEventListener("squeezeend",ae),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(o,t)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,be=null,De=null;x.depth&&(De=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=x.stencil?Ia:Da,be=x.stencil?La:ys);const Je={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:a};_=g.createProjectionLayer(Je),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new Ss(_.textureWidth,_.textureHeight,{format:ui,type:Ni,depthTexture:new Ov(_.textureWidth,_.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const pe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new Ss(y.framebufferWidth,y.framebufferHeight,{format:ui,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await o.requestReferenceSpace(c),Be.setContext(o),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function se(Z){for(let me=0;me<Z.removed.length;me++){const pe=Z.removed[me],be=N.indexOf(pe);be>=0&&(N[be]=null,A[be].disconnect(pe))}for(let me=0;me<Z.added.length;me++){const pe=Z.added[me];let be=N.indexOf(pe);if(be===-1){for(let Je=0;Je<A.length;Je++)if(Je>=N.length){N.push(pe),be=Je;break}else if(N[Je]===null){N[Je]=pe,be=Je;break}if(be===-1)break}const De=A[be];De&&De.connect(pe)}}const ce=new X,H=new X;function oe(Z,me,pe){ce.setFromMatrixPosition(me.matrixWorld),H.setFromMatrixPosition(pe.matrixWorld);const be=ce.distanceTo(H),De=me.projectionMatrix.elements,Je=pe.projectionMatrix.elements,Ht=De[14]/(De[10]-1),St=De[14]/(De[10]+1),k=(De[9]+1)/De[5],Ct=(De[9]-1)/De[5],Qe=(De[8]-1)/De[0],Et=(Je[8]+1)/Je[0],$e=Ht*Qe,kt=Ht*Et,Oe=be/(-Qe+Et),ct=Oe*-Qe;if(me.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ct),Z.translateZ(Oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Gt=Ht+Oe,Wt=St+Oe,D=$e-ct,w=kt+(be-ct),q=k*St/Wt*Gt,ue=Ct*St/Wt*Gt;Z.projectionMatrix.makePerspective(D,w,q,ue,Gt,Wt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,me){me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let me=Z.near,pe=Z.far;M.texture!==null&&(M.depthNear>0&&(me=M.depthNear),M.depthFar>0&&(pe=M.depthFar)),O.near=C.near=j.near=me,O.far=C.far=j.far=pe,(le!==O.near||ne!==O.far)&&(o.updateRenderState({depthNear:O.near,depthFar:O.far}),le=O.near,ne=O.far),O.layers.mask=Z.layers.mask|6,j.layers.mask=O.layers.mask&3,C.layers.mask=O.layers.mask&5;const be=Z.parent,De=O.cameras;ie(O,be);for(let Je=0;Je<De.length;Je++)ie(De[Je],be);De.length===2?oe(O,j,C):O.projectionMatrix.copy(j.projectionMatrix),U(Z,O,be)};function U(Z,me,pe){pe===null?Z.matrix.copy(me.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=To*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(Z){f=Z,_!==null&&(_.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(O)},this.getCameraTexture=function(Z){return S[Z]};let te=null;function ze(Z,me){if(p=me.getViewerPose(d||u),E=me,p!==null){const pe=p.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let be=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,be=!0);for(let St=0;St<pe.length;St++){const k=pe[St];let Ct=null;if(y!==null)Ct=y.getViewport(k);else{const Et=g.getViewSubImage(_,k);Ct=Et.viewport,St===0&&(e.setRenderTargetTextures(b,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(b))}let Qe=P[St];Qe===void 0&&(Qe=new In,Qe.layers.enable(St),Qe.viewport=new bt,P[St]=Qe),Qe.matrix.fromArray(k.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(k.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),St===0&&(O.matrix.copy(Qe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),be===!0&&O.cameras.push(Qe)}const De=o.enabledFeatures;if(De&&De.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const St=g.getDepthInformation(pe[0]);St&&St.isValid&&St.texture&&M.init(St,o.renderState)}if(De&&De.includes("camera-access")&&(e.state.unbindTexture(),g))for(let St=0;St<pe.length;St++){const k=pe[St].camera;if(k){let Ct=S[k];Ct||(Ct=new Yv,S[k]=Ct);const Qe=g.getCameraImage(k);Ct.sourceTexture=Qe}}}for(let pe=0;pe<A.length;pe++){const be=N[pe],De=A[pe];be!==null&&De!==void 0&&De.update(be,me,d||u)}te&&te(Z,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),E=null}const Be=new Vv;Be.setAnimationLoop(ze),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}}const ds=new Fi,g1=new mt;function _1(s,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,Pv(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,L,b,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),p(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(a(S,x),E(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),M(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&c(S,x)):x.isPointsMaterial?f(S,x,L,b):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),b=L.envMap,A=L.envMapRotation;b&&(S.envMap.value=b,ds.copy(A),ds.x*=-1,ds.y*=-1,ds.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),S.envMapRotation.value.setFromMatrix4(g1.makeRotationFromEuler(ds)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function c(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,L,b){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=b*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function v1(s,e,t,i){let o={},a={},u=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,b){const A=b.program;i.uniformBlockBinding(L,A)}function d(L,b){let A=o[L.id];A===void 0&&(E(L),A=p(L),o[L.id]=A,L.addEventListener("dispose",S));const N=b.program;i.updateUBOMapping(L,N);const B=e.render.frame;a[L.id]!==B&&(_(L),a[L.id]=B)}function p(L){const b=g();L.__bindingPointIndex=b;const A=s.createBuffer(),N=L.__size,B=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,N,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,A),A}function g(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const b=o[L.id],A=L.uniforms,N=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let B=0,F=A.length;B<F;B++){const j=Array.isArray(A[B])?A[B]:[A[B]];for(let C=0,P=j.length;C<P;C++){const O=j[C];if(y(O,B,C,N)===!0){const le=O.__offset,ne=Array.isArray(O.value)?O.value:[O.value];let ae=0;for(let fe=0;fe<ne.length;fe++){const se=ne[fe],ce=M(se);typeof se=="number"||typeof se=="boolean"?(O.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,le+ae,O.__data)):se.isMatrix3?(O.__data[0]=se.elements[0],O.__data[1]=se.elements[1],O.__data[2]=se.elements[2],O.__data[3]=0,O.__data[4]=se.elements[3],O.__data[5]=se.elements[4],O.__data[6]=se.elements[5],O.__data[7]=0,O.__data[8]=se.elements[6],O.__data[9]=se.elements[7],O.__data[10]=se.elements[8],O.__data[11]=0):(se.toArray(O.__data,ae),ae+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(L,b,A,N){const B=L.value,F=b+"_"+A;if(N[F]===void 0)return typeof B=="number"||typeof B=="boolean"?N[F]=B:N[F]=B.clone(),!0;{const j=N[F];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return N[F]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function E(L){const b=L.uniforms;let A=0;const N=16;for(let F=0,j=b.length;F<j;F++){const C=Array.isArray(b[F])?b[F]:[b[F]];for(let P=0,O=C.length;P<O;P++){const le=C[P],ne=Array.isArray(le.value)?le.value:[le.value];for(let ae=0,fe=ne.length;ae<fe;ae++){const se=ne[ae],ce=M(se),H=A%N,oe=H%ce.boundary,ie=H+oe;A+=oe,ie!==0&&N-ie<ce.storage&&(A+=N-ie),le.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=A,A+=ce.storage}}}const B=A%N;return B>0&&(A+=N-B),L.__size=A,L.__cache={},this}function M(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function S(L){const b=L.target;b.removeEventListener("dispose",S);const A=u.indexOf(b.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(o[b.id]),delete o[b.id],delete a[b.id]}function x(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},a={}}return{bind:f,update:d,dispose:x}}class x1{constructor(e={}){const{canvas:t=xE(),context:i=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=pn;let B=0,F=0,j=null,C=-1,P=null;const O=new bt,le=new bt;let ne=null;const ae=new ft(0);let fe=0,se=t.width,ce=t.height,H=1,oe=null,ie=null;const U=new bt(0,0,se,ce),te=new bt(0,0,se,ce);let ze=!1;const Be=new bd;let Z=!1,me=!1;const pe=new mt,be=new X,De=new bt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function St(){return j===null?H:1}let k=i;function Ct(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gd}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Se,!1),k===null){const Y="webgl2";if(k=Ct(Y,R),k===null)throw Ct(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Qe,Et,$e,kt,Oe,ct,Gt,Wt,D,w,q,ue,xe,re,Ke,Ae,He,qe,Te,Ie,rt,je,Ce,ht;function V(){Qe=new CA(k),Qe.init(),je=new h1(k,Qe),Et=new EA(k,Qe,e,je),$e=new u1(k,Qe),Et.reversedDepthBuffer&&_&&$e.buffers.depth.setReversed(!0),kt=new DA(k),Oe=new $R,ct=new c1(k,Qe,$e,Oe,Et,je,kt),Gt=new TA(A),Wt=new bA(A),D=new kM(k),Ce=new yA(k,D),w=new PA(k,D,kt,Ce),q=new NA(k,w,D,kt),Te=new IA(k,Et,ct),Ae=new MA(Oe),ue=new qR(A,Gt,Wt,Qe,Et,Ce,Ae),xe=new _1(A,Oe),re=new JR,Ke=new r1(Qe),qe=new xA(A,Gt,Wt,$e,q,y,f),He=new a1(A,q,Et),ht=new v1(k,kt,Et,$e),Ie=new SA(k,Qe,kt),rt=new LA(k,Qe,kt),kt.programs=ue.programs,A.capabilities=Et,A.extensions=Qe,A.properties=Oe,A.renderLists=re,A.shadowMap=He,A.state=$e,A.info=kt}V();const Ee=new m1(A,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Qe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(se,ce,!1))},this.getSize=function(R){return R.set(se,ce)},this.setSize=function(R,Y,Q=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,ce=Y,t.width=Math.floor(R*H),t.height=Math.floor(Y*H),Q===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(se*H,ce*H).floor()},this.setDrawingBufferSize=function(R,Y,Q){se=R,ce=Y,H=Q,t.width=Math.floor(R*Q),t.height=Math.floor(Y*Q),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,Y,Q,ee){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,Y,Q,ee),$e.viewport(O.copy(U).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,Y,Q,ee){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,Y,Q,ee),$e.scissor(le.copy(te).multiplyScalar(H).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(R){$e.setScissorTest(ze=R)},this.setOpaqueSort=function(R){oe=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,Q=!0){let ee=0;if(R){let G=!1;if(j!==null){const Me=j.texture.format;G=Me===Md||Me===Ed||Me===Sd}if(G){const Me=j.texture.type,Pe=Me===Ni||Me===ys||Me===Pa||Me===La||Me===vd||Me===xd,Ve=qe.getClearColor(),Ue=qe.getClearAlpha(),it=Ve.r,st=Ve.g,Ze=Ve.b;Pe?(E[0]=it,E[1]=st,E[2]=Ze,E[3]=Ue,k.clearBufferuiv(k.COLOR,0,E)):(M[0]=it,M[1]=st,M[2]=Ze,M[3]=Ue,k.clearBufferiv(k.COLOR,0,M))}else ee|=k.COLOR_BUFFER_BIT}Y&&(ee|=k.DEPTH_BUFFER_BIT),Q&&(ee|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),qe.dispose(),re.dispose(),Ke.dispose(),Oe.dispose(),Gt.dispose(),Wt.dispose(),q.dispose(),Ce.dispose(),ht.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",vn),Ee.removeEventListener("sessionend",Ts),Xn.stop()};function Re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=kt.autoReset,Y=He.enabled,Q=He.autoUpdate,ee=He.needsUpdate,G=He.type;V(),kt.autoReset=R,He.enabled=Y,He.autoUpdate=Q,He.needsUpdate=ee,He.type=G}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function de(R){const Y=R.target;Y.removeEventListener("dispose",de),We(Y)}function We(R){lt(R),Oe.remove(R)}function lt(R){const Y=Oe.get(R).programs;Y!==void 0&&(Y.forEach(function(Q){ue.releaseProgram(Q)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,Q,ee,G,Me){Y===null&&(Y=Je);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,Ve=Gi(R,Y,Q,ee,G);$e.setMaterial(ee,Pe);let Ue=Q.index,it=1;if(ee.wireframe===!0){if(Ue=w.getWireframeAttribute(Q),Ue===void 0)return;it=2}const st=Q.drawRange,Ze=Q.attributes.position;let ot=st.start*it,Pt=(st.start+st.count)*it;Me!==null&&(ot=Math.max(ot,Me.start*it),Pt=Math.min(Pt,(Me.start+Me.count)*it)),Ue!==null?(ot=Math.max(ot,0),Pt=Math.min(Pt,Ue.count)):Ze!=null&&(ot=Math.max(ot,0),Pt=Math.min(Pt,Ze.count));const Tt=Pt-ot;if(Tt<0||Tt===1/0)return;Ce.setup(G,ee,Ve,Q,Ue);let Bt,Dt=Ie;if(Ue!==null&&(Bt=D.get(Ue),Dt=rt,Dt.setIndex(Bt)),G.isMesh)ee.wireframe===!0?($e.setLineWidth(ee.wireframeLinewidth*St()),Dt.setMode(k.LINES)):Dt.setMode(k.TRIANGLES);else if(G.isLine){let et=ee.linewidth;et===void 0&&(et=1),$e.setLineWidth(et*St()),G.isLineSegments?Dt.setMode(k.LINES):G.isLineLoop?Dt.setMode(k.LINE_LOOP):Dt.setMode(k.LINE_STRIP)}else G.isPoints?Dt.setMode(k.POINTS):G.isSprite&&Dt.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)_o("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))Dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const et=G._multiDrawStarts,Ut=G._multiDrawCounts,vt=G._multiDrawCount,rn=Ue?D.get(Ue).bytesPerElement:1,ci=Oe.get(ee).currentProgram.getUniforms();for(let Rn=0;Rn<vt;Rn++)ci.setValue(k,"_gl_DrawID",Rn),Dt.render(et[Rn]/rn,Ut[Rn])}else if(G.isInstancedMesh)Dt.renderInstances(ot,Tt,G.count);else if(Q.isInstancedBufferGeometry){const et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ut=Math.min(Q.instanceCount,et);Dt.renderInstances(ot,Tt,Ut)}else Dt.render(ot,Tt)};function Lt(R,Y,Q){R.transparent===!0&&R.side===Pi&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,As(R,Y,Q),R.side=fr,R.needsUpdate=!0,As(R,Y,Q),R.side=Pi):As(R,Y,Q)}this.compile=function(R,Y,Q=null){Q===null&&(Q=R),x=Ke.get(Q),x.init(Y),b.push(x),Q.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),R!==Q&&R.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const ee=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const Ve=Me[Pe];Lt(Ve,Q,G),ee.add(Ve)}else Lt(Me,Q,G),ee.add(Me)}),x=b.pop(),ee},this.compileAsync=function(R,Y,Q=null){const ee=this.compile(R,Y,Q);return new Promise(G=>{function Me(){if(ee.forEach(function(Pe){Oe.get(Pe).currentProgram.isReady()&&ee.delete(Pe)}),ee.size===0){G(R);return}setTimeout(Me,10)}Qe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Mt=null;function ei(R){Mt&&Mt(R)}function vn(){Xn.stop()}function Ts(){Xn.start()}const Xn=new Vv;Xn.setAnimationLoop(ei),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(R){Mt=R,Ee.setAnimationLoop(R),R===null?Xn.stop():Xn.start()},Ee.addEventListener("sessionstart",vn),Ee.addEventListener("sessionend",Ts),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,Y,j),x=Ke.get(R,b.length),x.init(Y),b.push(x),pe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Be.setFromProjectionMatrix(pe,Li,Y.reversedDepth),me=this.localClippingEnabled,Z=Ae.init(this.clippingPlanes,me),S=re.get(R,L.length),S.init(),L.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const Me=A.xr.getDepthSensingMesh();Me!==null&&Uo(Me,Y,-1/0,A.sortObjects)}Uo(R,Y,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(oe,ie),Ht=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Ht&&qe.addToRenderList(S,R),this.info.render.frame++,Z===!0&&Ae.beginShadows();const Q=x.state.shadowsArray;He.render(Q,R,Y),Z===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,G=S.transmissive;if(x.setupLights(),Y.isArrayCamera){const Me=Y.cameras;if(G.length>0)for(let Pe=0,Ve=Me.length;Pe<Ve;Pe++){const Ue=Me[Pe];Yr(ee,G,R,Ue)}Ht&&qe.render(R);for(let Pe=0,Ve=Me.length;Pe<Ve;Pe++){const Ue=Me[Pe];pr(S,R,Ue,Ue.viewport)}}else G.length>0&&Yr(ee,G,R,Y),Ht&&qe.render(R),pr(S,R,Y);j!==null&&F===0&&(ct.updateMultisampleRenderTarget(j),ct.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(A,R,Y),Ce.resetDefaultState(),C=-1,P=null,b.pop(),b.length>0?(x=b[b.length-1],Z===!0&&Ae.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Uo(R,Y,Q,ee){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){ee&&De.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const Pe=q.update(R),Ve=R.material;Ve.visible&&S.push(R,Pe,Ve,Q,De.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const Pe=q.update(R),Ve=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),De.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),De.copy(Pe.boundingSphere.center)),De.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(Ve)){const Ue=Pe.groups;for(let it=0,st=Ue.length;it<st;it++){const Ze=Ue[it],ot=Ve[Ze.materialIndex];ot&&ot.visible&&S.push(R,Pe,ot,Q,De.z,Ze)}}else Ve.visible&&S.push(R,Pe,Ve,Q,De.z,null)}}const Me=R.children;for(let Pe=0,Ve=Me.length;Pe<Ve;Pe++)Uo(Me[Pe],Y,Q,ee)}function pr(R,Y,Q,ee){const G=R.opaque,Me=R.transmissive,Pe=R.transparent;x.setupLightsView(Q),Z===!0&&Ae.setGlobalState(A.clippingPlanes,Q),ee&&$e.viewport(O.copy(ee)),G.length>0&&Vi(G,Y,Q),Me.length>0&&Vi(Me,Y,Q),Pe.length>0&&Vi(Pe,Y,Q),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Yr(R,Y,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new Ss(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?za:Ni,minFilter:or,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=x.state.transmissionRenderTarget[ee.id],Pe=ee.viewport||O;Me.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);const Ve=A.getRenderTarget(),Ue=A.getActiveCubeFace(),it=A.getActiveMipmapLevel();A.setRenderTarget(Me),A.getClearColor(ae),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),Ht&&qe.render(Q);const st=A.toneMapping;A.toneMapping=Xr;const Ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),Z===!0&&Ae.setGlobalState(A.clippingPlanes,ee),Vi(R,Q,ee),ct.updateMultisampleRenderTarget(Me),ct.updateRenderTargetMipmap(Me),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Pt=0,Tt=Y.length;Pt<Tt;Pt++){const Bt=Y[Pt],Dt=Bt.object,et=Bt.geometry,Ut=Bt.material,vt=Bt.group;if(Ut.side===Pi&&Dt.layers.test(ee.layers)){const rn=Ut.side;Ut.side=Wn,Ut.needsUpdate=!0,ws(Dt,Q,ee,et,Ut,vt),Ut.side=rn,Ut.needsUpdate=!0,ot=!0}}ot===!0&&(ct.updateMultisampleRenderTarget(Me),ct.updateRenderTargetMipmap(Me))}A.setRenderTarget(Ve,Ue,it),A.setClearColor(ae,fe),Ze!==void 0&&(ee.viewport=Ze),A.toneMapping=st}function Vi(R,Y,Q){const ee=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,Me=R.length;G<Me;G++){const Pe=R[G],Ve=Pe.object,Ue=Pe.geometry,it=Pe.group;let st=Pe.material;st.allowOverride===!0&&ee!==null&&(st=ee),Ve.layers.test(Q.layers)&&ws(Ve,Y,Q,Ue,st,it)}}function ws(R,Y,Q,ee,G,Me){R.onBeforeRender(A,Y,Q,ee,G,Me),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(A,Y,Q,ee,R,Me),G.transparent===!0&&G.side===Pi&&G.forceSinglePass===!1?(G.side=Wn,G.needsUpdate=!0,A.renderBufferDirect(Q,Y,ee,G,R,Me),G.side=fr,G.needsUpdate=!0,A.renderBufferDirect(Q,Y,ee,G,R,Me),G.side=Pi):A.renderBufferDirect(Q,Y,ee,G,R,Me),R.onAfterRender(A,Y,Q,ee,G,Me)}function As(R,Y,Q){Y.isScene!==!0&&(Y=Je);const ee=Oe.get(R),G=x.state.lights,Me=x.state.shadowsArray,Pe=G.state.version,Ve=ue.getParameters(R,G.state,Me,Y,Q),Ue=ue.getProgramCacheKey(Ve);let it=ee.programs;ee.environment=R.isMeshStandardMaterial?Y.environment:null,ee.fog=Y.fog,ee.envMap=(R.isMeshStandardMaterial?Wt:Gt).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",de),it=new Map,ee.programs=it);let st=it.get(Ue);if(st!==void 0){if(ee.currentProgram===st&&ee.lightsStateVersion===Pe)return Xa(R,Ve),st}else Ve.uniforms=ue.getUniforms(R),R.onBeforeCompile(Ve,A),st=ue.acquireProgram(Ve,Ue),it.set(Ue,st),ee.uniforms=Ve.uniforms;const Ze=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Ae.uniform),Xa(R,Ve),ee.needsLights=Ya(R),ee.lightsStateVersion=Pe,ee.needsLights&&(Ze.ambientLightColor.value=G.state.ambient,Ze.lightProbe.value=G.state.probe,Ze.directionalLights.value=G.state.directional,Ze.directionalLightShadows.value=G.state.directionalShadow,Ze.spotLights.value=G.state.spot,Ze.spotLightShadows.value=G.state.spotShadow,Ze.rectAreaLights.value=G.state.rectArea,Ze.ltc_1.value=G.state.rectAreaLTC1,Ze.ltc_2.value=G.state.rectAreaLTC2,Ze.pointLights.value=G.state.point,Ze.pointLightShadows.value=G.state.pointShadow,Ze.hemisphereLights.value=G.state.hemi,Ze.directionalShadowMap.value=G.state.directionalShadowMap,Ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ze.spotShadowMap.value=G.state.spotShadowMap,Ze.spotLightMatrix.value=G.state.spotLightMatrix,Ze.spotLightMap.value=G.state.spotLightMap,Ze.pointShadowMap.value=G.state.pointShadowMap,Ze.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=st,ee.uniformsList=null,st}function Wa(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Nu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Xa(R,Y){const Q=Oe.get(R);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.batchingColor=Y.batchingColor,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.instancingMorph=Y.instancingMorph,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function Gi(R,Y,Q,ee,G){Y.isScene!==!0&&(Y=Je),ct.resetTextureUnits();const Me=Y.fog,Pe=ee.isMeshStandardMaterial?Y.environment:null,Ve=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Fn,Ue=(ee.isMeshStandardMaterial?Wt:Gt).get(ee.envMap||Pe),it=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,st=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ze=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,Pt=!!Q.morphAttributes.color;let Tt=Xr;ee.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Tt=A.toneMapping);const Bt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Dt=Bt!==void 0?Bt.length:0,et=Oe.get(ee),Ut=x.state.lights;if(Z===!0&&(me===!0||R!==P)){const Qt=R===P&&ee.id===C;Ae.setState(ee,R,Qt)}let vt=!1;ee.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ut.state.version||et.outputColorSpace!==Ve||G.isBatchedMesh&&et.batching===!1||!G.isBatchedMesh&&et.batching===!0||G.isBatchedMesh&&et.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&et.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&et.instancing===!1||!G.isInstancedMesh&&et.instancing===!0||G.isSkinnedMesh&&et.skinning===!1||!G.isSkinnedMesh&&et.skinning===!0||G.isInstancedMesh&&et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&et.instancingMorph===!1&&G.morphTexture!==null||et.envMap!==Ue||ee.fog===!0&&et.fog!==Me||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ae.numPlanes||et.numIntersection!==Ae.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==st||et.morphTargets!==Ze||et.morphNormals!==ot||et.morphColors!==Pt||et.toneMapping!==Tt||et.morphTargetsCount!==Dt)&&(vt=!0):(vt=!0,et.__version=ee.version);let rn=et.currentProgram;vt===!0&&(rn=As(ee,Y,G));let ci=!1,Rn=!1,Kr=!1;const zt=rn.getUniforms(),bn=et.uniforms;if($e.useProgram(rn.program)&&(ci=!0,Rn=!0,Kr=!0),ee.id!==C&&(C=ee.id,Rn=!0),ci||P!==R){$e.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(k,"projectionMatrix",R.projectionMatrix),zt.setValue(k,"viewMatrix",R.matrixWorldInverse);const yn=zt.map.cameraPosition;yn!==void 0&&yn.setValue(k,be.setFromMatrixPosition(R.matrixWorld)),Et.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&zt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),P!==R&&(P=R,Rn=!0,Kr=!0)}if(G.isSkinnedMesh){zt.setOptional(k,G,"bindMatrix"),zt.setOptional(k,G,"bindMatrixInverse");const Qt=G.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),zt.setValue(k,"boneTexture",Qt.boneTexture,ct))}G.isBatchedMesh&&(zt.setOptional(k,G,"batchingTexture"),zt.setValue(k,"batchingTexture",G._matricesTexture,ct),zt.setOptional(k,G,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",G._indirectTexture,ct),zt.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",G._colorsTexture,ct));const xn=Q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Te.update(G,Q,rn),(Rn||et.receiveShadow!==G.receiveShadow)&&(et.receiveShadow=G.receiveShadow,zt.setValue(k,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(bn.envMap.value=Ue,bn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),Rn&&(zt.setValue(k,"toneMappingExposure",A.toneMappingExposure),et.needsLights&&ja(bn,Kr),Me&&ee.fog===!0&&xe.refreshFogUniforms(bn,Me),xe.refreshMaterialUniforms(bn,ee,H,ce,x.state.transmissionRenderTarget[R.id]),Nu.upload(k,Wa(et),bn,ct)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Nu.upload(k,Wa(et),bn,ct),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&zt.setValue(k,"center",G.center),zt.setValue(k,"modelViewMatrix",G.modelViewMatrix),zt.setValue(k,"normalMatrix",G.normalMatrix),zt.setValue(k,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Qt=ee.uniformsGroups;for(let yn=0,qr=Qt.length;yn<qr;yn++){const xt=Qt[yn];ht.update(xt,rn),ht.bind(xt,rn)}}return rn}function ja(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Ya(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,Y,Q){const ee=Oe.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Oe.get(R.texture).__webglTexture=Y,Oe.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const Q=Oe.get(R);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0};const ju=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,Q=0){j=R,B=Y,F=Q;let ee=!0,G=null,Me=!1,Pe=!1;if(R){const Ue=Oe.get(R);if(Ue.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(k.FRAMEBUFFER,null),ee=!1;else if(Ue.__webglFramebuffer===void 0)ct.setupRenderTarget(R);else if(Ue.__hasExternalTextures)ct.rebindTextures(R,Oe.get(R.texture).__webglTexture,Oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(Ue.__boundDepthTexture!==Ze){if(Ze!==null&&Oe.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(R)}}const it=R.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Pe=!0);const st=Oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[Y])?G=st[Y][Q]:G=st[Y],Me=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?G=Oe.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?G=st[Q]:G=st,O.copy(R.viewport),le.copy(R.scissor),ne=R.scissorTest}else O.copy(U).multiplyScalar(H).floor(),le.copy(te).multiplyScalar(H).floor(),ne=ze;if(Q!==0&&(G=ju),$e.bindFramebuffer(k.FRAMEBUFFER,G)&&ee&&$e.drawBuffers(R,G),$e.viewport(O),$e.scissor(le),$e.setScissorTest(ne),Me){const Ue=Oe.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,Q)}else if(Pe){const Ue=Y;for(let it=0;it<R.textures.length;it++){const st=Oe.get(R.textures[it]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+it,st.__webglTexture,Q,Ue)}}else if(R!==null&&Q!==0){const Ue=Oe.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ue.__webglTexture,Q)}C=-1},this.readRenderTargetPixels=function(R,Y,Q,ee,G,Me,Pe,Ve=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){$e.bindFramebuffer(k.FRAMEBUFFER,Ue);try{const it=R.textures[Ve],st=it.format,Ze=it.type;if(!Et.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ee&&Q>=0&&Q<=R.height-G&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ve),k.readPixels(Y,Q,ee,G,je.convert(st),je.convert(Ze),Me))}finally{const it=j!==null?Oe.get(j).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(R,Y,Q,ee,G,Me,Pe,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(Y>=0&&Y<=R.width-ee&&Q>=0&&Q<=R.height-G){$e.bindFramebuffer(k.FRAMEBUFFER,Ue);const it=R.textures[Ve],st=it.format,Ze=it.type;if(!Et.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.bufferData(k.PIXEL_PACK_BUFFER,Me.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ve),k.readPixels(Y,Q,ee,G,je.convert(st),je.convert(Ze),0);const Pt=j!==null?Oe.get(j).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,Pt);const Tt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await yE(k,Tt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Me),k.deleteBuffer(ot),k.deleteSync(Tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,Q=0){const ee=Math.pow(2,-Q),G=Math.floor(R.image.width*ee),Me=Math.floor(R.image.height*ee),Pe=Y!==null?Y.x:0,Ve=Y!==null?Y.y:0;ct.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Pe,Ve,G,Me),$e.unbindTexture()};const Ka=k.createFramebuffer(),qa=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,Q=null,ee=null,G=0,Me=null){Me===null&&(G!==0?(_o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=G,G=0):Me=0);let Pe,Ve,Ue,it,st,Ze,ot,Pt,Tt;const Bt=R.isCompressedTexture?R.mipmaps[Me]:R.image;if(Q!==null)Pe=Q.max.x-Q.min.x,Ve=Q.max.y-Q.min.y,Ue=Q.isBox3?Q.max.z-Q.min.z:1,it=Q.min.x,st=Q.min.y,Ze=Q.isBox3?Q.min.z:0;else{const xn=Math.pow(2,-G);Pe=Math.floor(Bt.width*xn),Ve=Math.floor(Bt.height*xn),R.isDataArrayTexture?Ue=Bt.depth:R.isData3DTexture?Ue=Math.floor(Bt.depth*xn):Ue=1,it=0,st=0,Ze=0}ee!==null?(ot=ee.x,Pt=ee.y,Tt=ee.z):(ot=0,Pt=0,Tt=0);const Dt=je.convert(Y.format),et=je.convert(Y.type);let Ut;Y.isData3DTexture?(ct.setTexture3D(Y,0),Ut=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ct.setTexture2DArray(Y,0),Ut=k.TEXTURE_2D_ARRAY):(ct.setTexture2D(Y,0),Ut=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const vt=k.getParameter(k.UNPACK_ROW_LENGTH),rn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ci=k.getParameter(k.UNPACK_SKIP_PIXELS),Rn=k.getParameter(k.UNPACK_SKIP_ROWS),Kr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Bt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Bt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,it),k.pixelStorei(k.UNPACK_SKIP_ROWS,st),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const zt=R.isDataArrayTexture||R.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const xn=Oe.get(R),Qt=Oe.get(Y),yn=Oe.get(xn.__renderTarget),qr=Oe.get(Qt.__renderTarget);$e.bindFramebuffer(k.READ_FRAMEBUFFER,yn.__webglFramebuffer),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let xt=0;xt<Ue;xt++)zt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(R).__webglTexture,G,Ze+xt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(Y).__webglTexture,Me,Tt+xt)),k.blitFramebuffer(it,st,Pe,Ve,ot,Pt,Pe,Ve,k.DEPTH_BUFFER_BIT,k.NEAREST);$e.bindFramebuffer(k.READ_FRAMEBUFFER,null),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(G!==0||R.isRenderTargetTexture||Oe.has(R)){const xn=Oe.get(R),Qt=Oe.get(Y);$e.bindFramebuffer(k.READ_FRAMEBUFFER,Ka),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,qa);for(let yn=0;yn<Ue;yn++)zt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,xn.__webglTexture,G,Ze+yn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xn.__webglTexture,G),bn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qt.__webglTexture,Me,Tt+yn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qt.__webglTexture,Me),G!==0?k.blitFramebuffer(it,st,Pe,Ve,ot,Pt,Pe,Ve,k.COLOR_BUFFER_BIT,k.NEAREST):bn?k.copyTexSubImage3D(Ut,Me,ot,Pt,Tt+yn,it,st,Pe,Ve):k.copyTexSubImage2D(Ut,Me,ot,Pt,it,st,Pe,Ve);$e.bindFramebuffer(k.READ_FRAMEBUFFER,null),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Ut,Me,ot,Pt,Tt,Pe,Ve,Ue,Dt,et,Bt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Ut,Me,ot,Pt,Tt,Pe,Ve,Ue,Dt,Bt.data):k.texSubImage3D(Ut,Me,ot,Pt,Tt,Pe,Ve,Ue,Dt,et,Bt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Me,ot,Pt,Pe,Ve,Dt,et,Bt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Me,ot,Pt,Bt.width,Bt.height,Dt,Bt.data):k.texSubImage2D(k.TEXTURE_2D,Me,ot,Pt,Pe,Ve,Dt,et,Bt);k.pixelStorei(k.UNPACK_ROW_LENGTH,vt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,rn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ci),k.pixelStorei(k.UNPACK_SKIP_ROWS,Rn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Kr),Me===0&&Y.generateMipmaps&&k.generateMipmap(Ut),$e.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,Q=null,ee=null,G=0){return _o('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,Q,ee,G)},this.initRenderTarget=function(R){Oe.get(R).__webglFramebuffer===void 0&&ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),$e.unbindTexture()},this.resetState=function(){B=0,F=0,j=null,$e.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function k_(s,e){if(e===jS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===nd||e===yv){let t=s.getIndex();if(t===null){const u=[],c=s.getAttribute("position");if(c!==void 0){for(let f=0;f<c.count;f++)u.push(f);s.setIndex(u),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,o=[];if(e===nd)for(let u=1;u<=i;u++)o.push(t.getX(0)),o.push(t.getX(u)),o.push(t.getX(u+1));else for(let u=0;u<i;u++)u%2===0?(o.push(t.getX(u)),o.push(t.getX(u+1)),o.push(t.getX(u+2))):(o.push(t.getX(u+2)),o.push(t.getX(u+1)),o.push(t.getX(u)));o.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(o),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class y1 extends Io{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new w1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new F1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new B1(t)})}load(e,t,i,o){const a=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=ba.extractUrlBase(e);u=ba.resolveURL(d,this.path)}else u=ba.extractUrlBase(e);this.manager.itemStart(e);const c=function(d){o?o(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},f=new zv(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{a.parse(d,u,function(p){t(p),a.manager.itemEnd(e)},c)}catch(p){c(p)}},i,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,o){let a;const u={},c={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===Kv){try{u[yt.KHR_BINARY_GLTF]=new z1(e)}catch(g){o&&o(g);return}a=JSON.parse(u[yt.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new Q1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const g=this.pluginCallbacks[p](d);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[g.name]=g,u[g.name]=!0}if(a.extensionsUsed)for(let p=0;p<a.extensionsUsed.length;++p){const g=a.extensionsUsed[p],_=a.extensionsRequired||[];switch(g){case yt.KHR_MATERIALS_UNLIT:u[g]=new M1;break;case yt.KHR_DRACO_MESH_COMPRESSION:u[g]=new H1(a,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:u[g]=new V1;break;case yt.KHR_MESH_QUANTIZATION:u[g]=new G1;break;default:_.indexOf(g)>=0&&c[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}d.setExtensions(u),d.setPlugins(c),d.parse(i,o)}parseAsync(e,t){const i=this;return new Promise(function(o,a){i.parse(e,t,o,a)})}}function S1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class E1{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,o=t.length;i<o;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let o=t.cache.get(i);if(o)return o;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const p=new ft(16777215);f.color!==void 0&&p.setRGB(f.color[0],f.color[1],f.color[2],Fn);const g=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new TM(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new EM(p),d.distance=g;break;case"spot":d=new Hv(p),d.distance=g,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),sr(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),o=Promise.resolve(d),t.cache.add(i,o),o}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],c=(a.extensions&&a.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(f){return i._getNodeRef(t.cache,c,f)})}}class M1{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return vs}extendParams(e,t,i){const o=[];e.color=new ft(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const u=a.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Fn),e.opacity=u[3]}a.baseColorTexture!==void 0&&o.push(i.assignTexture(e,"map",a.baseColorTexture,pn))}return Promise.all(o)}}class T1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class w1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const c=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ut(c,c)}return Promise.all(a)}}class A1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class R1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(a)}}class b1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ft(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=o.extensions[this.name];if(u.sheenColorFactor!==void 0){const c=u.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],Fn)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",u.sheenColorTexture,pn)),u.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(a)}}class C1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(a)}}class P1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const c=u.attenuationColor||[1,1,1];return t.attenuationColor=new ft().setRGB(c[0],c[1],c[2],Fn),Promise.all(a)}}class L1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class D1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",u.specularTexture));const c=u.specularColorFactor||[1,1,1];return t.specularColor=new ft().setRGB(c[0],c[1],c[2],Fn),u.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",u.specularColorTexture,pn)),Promise.all(a)}}class I1{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(a)}}class N1{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],u=o.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(a)}}class U1{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,o=i.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const a=o.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,u)}}class F1{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=o.images[u.source];let f=i.textureLoader;if(c.uri){const d=i.options.manager.getHandler(c.uri);d!==null&&(f=d)}return i.loadTextureImage(e,u.source,f)}}class O1{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const u=a.extensions[t],c=o.images[u.source];let f=i.textureLoader;if(c.uri){const d=i.options.manager.getHandler(c.uri);d!==null&&(f=d)}return i.loadTextureImage(e,u.source,f)}}class k1{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const o=i.extensions[this.name],a=this.parser.getDependency("buffer",o.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(c){const f=o.byteOffset||0,d=o.byteLength||0,p=o.count,g=o.byteStride,_=new Uint8Array(c,f,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(p,g,_,o.mode,o.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(p*g);return u.decodeGltfBuffer(new Uint8Array(y),p,g,_,o.mode,o.filter),y})})}else return null}}class B1{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const o=t.meshes[i.mesh];for(const d of o.primitives)if(d.mode!==li.TRIANGLES&&d.mode!==li.TRIANGLE_STRIP&&d.mode!==li.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=i.extensions[this.name].attributes,c=[],f={};for(const d in u)c.push(this.parser.getDependency("accessor",u[d]).then(p=>(f[d]=p,f[d])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(d=>{const p=d.pop(),g=p.isGroup?p.children:[p],_=d[0].count,y=[];for(const E of g){const M=new mt,S=new X,x=new Ui,L=new X(1,1,1),b=new ZE(E.geometry,E.material,_);for(let A=0;A<_;A++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,A),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,A),f.SCALE&&L.fromBufferAttribute(f.SCALE,A),b.setMatrixAt(A,M.compose(S,x,L));for(const A in f)if(A==="_COLOR_0"){const N=f[A];b.instanceColor=new rd(N.array,N.itemSize,N.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&E.geometry.setAttribute(A,f[A]);Zt.prototype.copy.call(b,E),this.parser.assignFinalMaterial(b),y.push(b)}return p.isGroup?(p.clear(),p.add(...y),p):y[0]}))}}const Kv="glTF",Ma=12,B_={JSON:1313821514,BIN:5130562};class z1{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ma),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-Ma,a=new DataView(e,Ma);let u=0;for(;u<o;){const c=a.getUint32(u,!0);u+=4;const f=a.getUint32(u,!0);if(u+=4,f===B_.JSON){const d=new Uint8Array(e,Ma+u,c);this.content=i.decode(d)}else if(f===B_.BIN){const d=Ma+u;this.body=e.slice(d,d+c)}u+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class H1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,o=this.dracoLoader,a=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,c={},f={},d={};for(const p in u){const g=ad[p]||p.toLowerCase();c[g]=u[p]}for(const p in e.attributes){const g=ad[p]||p.toLowerCase();if(u[p]!==void 0){const _=i.accessors[e.attributes[p]],y=xo[_.componentType];d[g]=y.name,f[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(g,_){o.decodeDracoFile(p,function(y){for(const E in y.attributes){const M=y.attributes[E],S=f[E];S!==void 0&&(M.normalized=S)}g(y)},c,d,Fn,_)})})}}class V1{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class G1{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class qv extends Ga{constructor(e,t,i,o){super(e,t,i,o)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o*3+o;for(let u=0;u!==o;u++)t[u]=i[a+u];return t}interpolate_(e,t,i,o){const a=this.resultBuffer,u=this.sampleValues,c=this.valueSize,f=c*2,d=c*3,p=o-t,g=(i-t)/p,_=g*g,y=_*g,E=e*d,M=E-d,S=-2*y+3*_,x=y-_,L=1-S,b=x-_+g;for(let A=0;A!==c;A++){const N=u[M+A+c],B=u[M+A+f]*p,F=u[E+A+c],j=u[E+A]*p;a[A]=L*N+b*B+S*F+x*j}return a}}const W1=new Ui;class X1 extends qv{interpolate_(e,t,i,o){const a=super.interpolate_(e,t,i,o);return W1.fromArray(a).normalize().toArray(a),a}}const li={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},z_={9728:Nn,9729:Jn,9984:fv,9985:bu,9986:Ta,9987:or},H_={33071:Gr,33648:Fu,10497:Mo},ff={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ad={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},j1={CUBICSPLINE:void 0,LINEAR:Ua,STEP:Na},df={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Y1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Pd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fr})),s.DefaultMaterial}function ps(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function sr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function K1(s,e,t){let i=!1,o=!1,a=!1;for(let d=0,p=e.length;d<p;d++){const g=e[d];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(o=!0),g.COLOR_0!==void 0&&(a=!0),i&&o&&a)break}if(!i&&!o&&!a)return Promise.resolve(s);const u=[],c=[],f=[];for(let d=0,p=e.length;d<p;d++){const g=e[d];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):s.attributes.position;u.push(_)}if(o){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):s.attributes.normal;c.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):s.attributes.color;f.push(_)}}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(f)]).then(function(d){const p=d[0],g=d[1],_=d[2];return i&&(s.morphAttributes.position=p),o&&(s.morphAttributes.normal=g),a&&(s.morphAttributes.color=_),s.morphTargetsRelative=!0,s})}function q1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,o=t.length;i<o;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $1(s){let e;const t=s.extensions&&s.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pf(t.attributes):e=s.indices+":"+pf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,o=s.targets.length;i<o;i++)e+=":"+pf(s.targets[i]);return e}function pf(s){let e="";const t=Object.keys(s).sort();for(let i=0,o=t.length;i<o;i++)e+=t[i]+":"+s[t[i]]+";";return e}function ld(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Z1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const J1=new mt;class Q1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new S1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,o=-1,a=!1,u=-1;if(typeof navigator<"u"){const c=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(c)===!0;const f=c.match(/Version\/(\d+)/);o=i&&f?parseInt(f[1],10):-1,a=c.indexOf("Firefox")>-1,u=a?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&o<17||a&&u<98?this.textureLoader=new xM(this.options.manager):this.textureLoader=new wM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,o=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(u){const c={scene:u[0][o.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:o.asset,parser:i,userData:{}};return ps(a,c,o),sr(c,o),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(c)})).then(function(){for(const f of c.scenes)f.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let o=0,a=t.length;o<a;o++){const u=t[o].joints;for(let c=0,f=u.length;c<f;c++)e[u[c]].isBone=!0}for(let o=0,a=e.length;o<a;o++){const u=e[o];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(i[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const o=i.clone(),a=(u,c)=>{const f=this.associations.get(u);f!=null&&this.associations.set(c,f);for(const[d,p]of u.children.entries())a(p,c.children[d])};return a(i,o),o.name+="_instance_"+e.uses[t]++,o}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const o=e(t[i]);if(o)return o}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let o=0;o<t.length;o++){const a=e(t[o]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let o=this.cache.get(i);if(!o){switch(e){case"scene":o=this.loadScene(t);break;case"node":o=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":o=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":o=this.loadAccessor(t);break;case"bufferView":o=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":o=this.loadBuffer(t);break;case"material":o=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":o=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":o=this.loadSkin(t);break;case"animation":o=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":o=this.loadCamera(t);break;default:if(o=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(i,o)}return o}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(o.map(function(a,u){return i.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(a,u){i.load(ba.resolveURL(t.uri,o.path),a,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const o=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+o)})}loadAccessor(e){const t=this,i=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const u=ff[o.type],c=xo[o.componentType],f=o.normalized===!0,d=new c(o.count*u);return Promise.resolve(new Un(d,u,f))}const a=[];return o.bufferView!==void 0?a.push(this.getDependency("bufferView",o.bufferView)):a.push(null),o.sparse!==void 0&&(a.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(a).then(function(u){const c=u[0],f=ff[o.type],d=xo[o.componentType],p=d.BYTES_PER_ELEMENT,g=p*f,_=o.byteOffset||0,y=o.bufferView!==void 0?i.bufferViews[o.bufferView].byteStride:void 0,E=o.normalized===!0;let M,S;if(y&&y!==g){const x=Math.floor(_/y),L="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+x+":"+o.count;let b=t.cache.get(L);b||(M=new d(c,x*y,o.count*y/p),b=new jE(M,y/p),t.cache.add(L,b)),S=new Ad(b,f,_%y/p,E)}else c===null?M=new d(o.count*f):M=new d(c,_,o.count*f),S=new Un(M,f,E);if(o.sparse!==void 0){const x=ff.SCALAR,L=xo[o.sparse.indices.componentType],b=o.sparse.indices.byteOffset||0,A=o.sparse.values.byteOffset||0,N=new L(u[1],b,o.sparse.count*x),B=new d(u[2],A,o.sparse.count*f);c!==null&&(S=new Un(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let F=0,j=N.length;F<j;F++){const C=N[F];if(S.setX(C,B[F*f]),f>=2&&S.setY(C,B[F*f+1]),f>=3&&S.setZ(C,B[F*f+2]),f>=4&&S.setW(C,B[F*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,u=t.images[a];let c=this.textureLoader;if(u.uri){const f=i.manager.getHandler(u.uri);f!==null&&(c=f)}return this.loadTextureImage(e,a,c)}loadTextureImage(e,t,i){const o=this,a=this.json,u=a.textures[e],c=a.images[t],f=(c.uri||c.bufferView)+":"+u.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=u.name||c.name||"",p.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(p.name=c.uri);const _=(a.samplers||{})[u.sampler]||{};return p.magFilter=z_[_.magFilter]||Jn,p.minFilter=z_[_.minFilter]||or,p.wrapS=H_[_.wrapS]||Mo,p.wrapT=H_[_.wrapT]||Mo,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==Nn&&p.minFilter!==Jn,o.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const i=this,o=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=o.images[e],c=self.URL||self.webkitURL;let f=u.uri||"",d=!1;if(u.bufferView!==void 0)f=i.getDependency("bufferView",u.bufferView).then(function(g){d=!0;const _=new Blob([g],{type:u.mimeType});return f=c.createObjectURL(_),f});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(f).then(function(g){return new Promise(function(_,y){let E=_;t.isImageBitmapLoader===!0&&(E=function(M){const S=new mn(M);S.needsUpdate=!0,_(S)}),t.load(ba.resolveURL(g,a.path),E,void 0,y)})}).then(function(g){return d===!0&&c.revokeObjectURL(f),sr(g,u),g.userData.mimeType=u.mimeType||Z1(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),g});return this.sourceCache[e]=p,p}assignTexture(e,t,i,o){const a=this;return this.getDependency("texture",i.index).then(function(u){if(!u)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(u=u.clone(),u.channel=i.texCoord),a.extensions[yt.KHR_TEXTURE_TRANSFORM]){const c=i.extensions!==void 0?i.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const f=a.associations.get(u);u=a.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(u,c),a.associations.set(u,f)}}return o!==void 0&&(u.colorSpace=o),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const o=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+i.uuid;let f=this.cache.get(c);f||(f=new Fv,Di.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(c,f)),i=f}else if(e.isLine){const c="LineBasicMaterial:"+i.uuid;let f=this.cache.get(c);f||(f=new Uv,Di.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(c,f)),i=f}if(o||a||u){let c="ClonedMaterial:"+i.uuid+":";o&&(c+="derivative-tangents:"),a&&(c+="vertex-colors:"),u&&(c+="flat-shading:");let f=this.cache.get(c);f||(f=i.clone(),a&&(f.vertexColors=!0),u&&(f.flatShading=!0),o&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(c,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return Pd}loadMaterial(e){const t=this,i=this.json,o=this.extensions,a=i.materials[e];let u;const c={},f=a.extensions||{},d=[];if(f[yt.KHR_MATERIALS_UNLIT]){const g=o[yt.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),d.push(g.extendParams(c,a,t))}else{const g=a.pbrMetallicRoughness||{};if(c.color=new ft(1,1,1),c.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;c.color.setRGB(_[0],_[1],_[2],Fn),c.opacity=_[3]}g.baseColorTexture!==void 0&&d.push(t.assignTexture(c,"map",g.baseColorTexture,pn)),c.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,c.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(c,"metalnessMap",g.metallicRoughnessTexture)),d.push(t.assignTexture(c,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,c)})))}a.doubleSided===!0&&(c.side=Pi);const p=a.alphaMode||df.OPAQUE;if(p===df.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,p===df.MASK&&(c.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&u!==vs&&(d.push(t.assignTexture(c,"normalMap",a.normalTexture)),c.normalScale=new ut(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;c.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&u!==vs&&(d.push(t.assignTexture(c,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&u!==vs){const g=a.emissiveFactor;c.emissive=new ft().setRGB(g[0],g[1],g[2],Fn)}return a.emissiveTexture!==void 0&&u!==vs&&d.push(t.assignTexture(c,"emissiveMap",a.emissiveTexture,pn)),Promise.all(d).then(function(){const g=new u(c);return a.name&&(g.name=a.name),sr(g,a),t.associations.set(g,{materials:e}),a.extensions&&ps(o,g,a),g})}createUniqueName(e){const t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,o=this.primitiveCache;function a(c){return i[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(f){return V_(f,c,t)})}const u=[];for(let c=0,f=e.length;c<f;c++){const d=e[c],p=$1(d),g=o[p];if(g)u.push(g.promise);else{let _;d.extensions&&d.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?_=a(d):_=V_(new zi,d,t),o[p]={primitive:d,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const t=this,i=this.json,o=this.extensions,a=i.meshes[e],u=a.primitives,c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f].material===void 0?Y1(this.cache):this.getDependency("material",u[f].material);c.push(p)}return c.push(t.loadGeometries(u)),Promise.all(c).then(function(f){const d=f.slice(0,f.length-1),p=f[f.length-1],g=[];for(let y=0,E=p.length;y<E;y++){const M=p[y],S=u[y];let x;const L=d[y];if(S.mode===li.TRIANGLES||S.mode===li.TRIANGLE_STRIP||S.mode===li.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new KE(M,L):new Qn(M,L),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===li.TRIANGLE_STRIP?x.geometry=k_(x.geometry,yv):S.mode===li.TRIANGLE_FAN&&(x.geometry=k_(x.geometry,nd));else if(S.mode===li.LINES)x=new tM(M,L);else if(S.mode===li.LINE_STRIP)x=new Cd(M,L);else if(S.mode===li.LINE_LOOP)x=new nM(M,L);else if(S.mode===li.POINTS)x=new iM(M,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&q1(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),sr(x,a),S.extensions&&ps(o,x,S),t.assignFinalMaterial(x),g.push(x)}for(let y=0,E=g.length;y<E;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return a.extensions&&ps(o,g[0],a),g[0];const _=new xs;a.extensions&&ps(o,_,a),t.associations.set(_,{meshes:e});for(let y=0,E=g.length;y<E;y++)_.add(g[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],o=i[i.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new In(Mv.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):i.type==="orthographic"&&(t=new Id(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),sr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let o=0,a=t.joints.length;o<a;o++)i.push(this._loadNodeShallow(t.joints[o]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(o){const a=o.pop(),u=o,c=[],f=[];for(let d=0,p=u.length;d<p;d++){const g=u[d];if(g){c.push(g);const _=new mt;a!==null&&_.fromArray(a.array,d*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Rd(c,f)})}loadAnimation(e){const t=this.json,i=this,o=t.animations[e],a=o.name?o.name:"animation_"+e,u=[],c=[],f=[],d=[],p=[];for(let g=0,_=o.channels.length;g<_;g++){const y=o.channels[g],E=o.samplers[y.sampler],M=y.target,S=M.node,x=o.parameters!==void 0?o.parameters[E.input]:E.input,L=o.parameters!==void 0?o.parameters[E.output]:E.output;M.node!==void 0&&(u.push(this.getDependency("node",S)),c.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",L)),d.push(E),p.push(M))}return Promise.all([Promise.all(u),Promise.all(c),Promise.all(f),Promise.all(d),Promise.all(p)]).then(function(g){const _=g[0],y=g[1],E=g[2],M=g[3],S=g[4],x=[];for(let L=0,b=_.length;L<b;L++){const A=_[L],N=y[L],B=E[L],F=M[L],j=S[L];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const C=i._createAnimationTracks(A,N,B,F,j);if(C)for(let P=0;P<C.length;P++)x.push(C[P])}return new fM(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,o=t.nodes[e];return o.mesh===void 0?null:i.getDependency("mesh",o.mesh).then(function(a){const u=i._getNodeRef(i.meshCache,o.mesh,a);return o.weights!==void 0&&u.traverse(function(c){if(c.isMesh)for(let f=0,d=o.weights.length;f<d;f++)c.morphTargetInfluences[f]=o.weights[f]}),u})}loadNode(e){const t=this.json,i=this,o=t.nodes[e],a=i._loadNodeShallow(e),u=[],c=o.children||[];for(let d=0,p=c.length;d<p;d++)u.push(i.getDependency("node",c[d]));const f=o.skin===void 0?Promise.resolve(null):i.getDependency("skin",o.skin);return Promise.all([a,Promise.all(u),f]).then(function(d){const p=d[0],g=d[1],_=d[2];_!==null&&p.traverse(function(y){y.isSkinnedMesh&&y.bind(_,J1)});for(let y=0,E=g.length;y<E;y++)p.add(g[y]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],u=a.name?o.createUniqueName(a.name):"",c=[],f=o._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&c.push(f),a.camera!==void 0&&c.push(o.getDependency("camera",a.camera).then(function(d){return o._getNodeRef(o.cameraCache,a.camera,d)})),o._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){c.push(d)}),this.nodeCache[e]=Promise.all(c).then(function(d){let p;if(a.isBone===!0?p=new Iv:d.length>1?p=new xs:d.length===1?p=d[0]:p=new Zt,p!==d[0])for(let g=0,_=d.length;g<_;g++)p.add(d[g]);if(a.name&&(p.userData.name=a.name,p.name=u),sr(p,a),a.extensions&&ps(i,p,a),a.matrix!==void 0){const g=new mt;g.fromArray(a.matrix),p.applyMatrix4(g)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);if(!o.associations.has(p))o.associations.set(p,{});else if(a.mesh!==void 0&&o.meshCache.refs[a.mesh]>1){const g=o.associations.get(p);o.associations.set(p,{...g})}return o.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],o=this,a=new xs;i.name&&(a.name=o.createUniqueName(i.name)),sr(a,i),i.extensions&&ps(t,a,i);const u=i.nodes||[],c=[];for(let f=0,d=u.length;f<d;f++)c.push(o.getDependency("node",u[f]));return Promise.all(c).then(function(f){for(let p=0,g=f.length;p<g;p++)a.add(f[p]);const d=p=>{const g=new Map;for(const[_,y]of o.associations)(_ instanceof Di||_ instanceof mn)&&g.set(_,y);return p.traverse(_=>{const y=o.associations.get(_);y!=null&&g.set(_,y)}),g};return o.associations=d(a),a})}_createAnimationTracks(e,t,i,o,a){const u=[],c=e.name?e.name:e.uuid,f=[];zr[a.path]===zr.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(c);let d;switch(zr[a.path]){case zr.weights:d=Ao;break;case zr.rotation:d=Ro;break;case zr.translation:case zr.scale:d=bo;break;default:switch(i.itemSize){case 1:d=Ao;break;case 2:case 3:default:d=bo;break}break}const p=o.interpolation!==void 0?j1[o.interpolation]:Ua,g=this._getArrayFromAccessor(i);for(let _=0,y=f.length;_<y;_++){const E=new d(f[_]+"."+zr[a.path],t.array,g,p);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ld(t.constructor),o=new Float32Array(t.length);for(let a=0,u=t.length;a<u;a++)o[a]=t[a]*i;t=o}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const o=this instanceof Ro?X1:qv;return new o(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function eb(s,e,t){const i=e.attributes,o=new ki;if(i.POSITION!==void 0){const c=t.json.accessors[i.POSITION],f=c.min,d=c.max;if(f!==void 0&&d!==void 0){if(o.set(new X(f[0],f[1],f[2]),new X(d[0],d[1],d[2])),c.normalized){const p=ld(xo[c.componentType]);o.min.multiplyScalar(p),o.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const c=new X,f=new X;for(let d=0,p=a.length;d<p;d++){const g=a[d];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],y=_.min,E=_.max;if(y!==void 0&&E!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),_.normalized){const M=ld(xo[_.componentType]);f.multiplyScalar(M)}c.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(c)}s.boundingBox=o;const u=new Bi;o.getCenter(u.center),u.radius=o.min.distanceTo(o.max)/2,s.boundingSphere=u}function V_(s,e,t){const i=e.attributes,o=[];function a(u,c){return t.getDependency("accessor",u).then(function(f){s.setAttribute(c,f)})}for(const u in i){const c=ad[u]||u.toLowerCase();c in s.attributes||o.push(a(i[u],c))}if(e.indices!==void 0&&!s.index){const u=t.getDependency("accessor",e.indices).then(function(c){s.setIndex(c)});o.push(u)}return wt.workingColorSpace!==Fn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),sr(s,e),eb(s,e,t),Promise.all(o).then(function(){return e.targets!==void 0?K1(s,e.targets,t):s})}const G_={type:"change"},Od={type:"start"},$v={type:"end"},wu=new Ha,W_=new Hr,tb=Math.cos(70*Mv.DEG2RAD),an=new X,Gn=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mf=1e-6;class nb extends FM{constructor(e,t=null){super(e,t),this.state=Ot.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mo.ROTATE,MIDDLE:mo.DOLLY,RIGHT:mo.PAN},this.touches={ONE:ho.ROTATE,TWO:ho.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Ui,this._lastTargetPosition=new X,this._quat=new Ui().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new f_,this._sphericalDelta=new f_,this._scale=1,this._panOffset=new X,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new X,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rb.bind(this),this._onPointerDown=ib.bind(this),this._onPointerUp=sb.bind(this),this._onContextMenu=fb.bind(this),this._onMouseWheel=lb.bind(this),this._onKeyDown=ub.bind(this),this._onTouchStart=cb.bind(this),this._onTouchMove=hb.bind(this),this._onMouseDown=ob.bind(this),this._onMouseMove=ab.bind(this),this._interceptControlDown=db.bind(this),this._interceptControlUp=pb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(G_),this.update(),this.state=Ot.NONE}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=Gn:i>Math.PI&&(i-=Gn),o<-Math.PI?o+=Gn:o>Math.PI&&(o-=Gn),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=u!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=an.length();u=this._clampDistance(c*this._scale);const f=c-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const d=new X(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),u=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(wu.origin.copy(this.object.position),wu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wu.direction))<tb?this.object.lookAt(this.target):(W_.setFromNormalAndCoplanarPoint(this.object.up,this.target),wu.intersectPlane(W_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>mf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mf||this._lastTargetPosition.distanceToSquared(this.target)>mf?(this.dispatchEvent(G_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;an.copy(o).sub(this.target);let a=an.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,u=i.width,c=i.height;this._mouse.x=o/u*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ut,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ib(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function rb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function sb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($v),this.state=Ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ob(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ot.DOLLY;break;case mo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ot.ROTATE}break;case mo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Od)}function ab(s){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function lb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(s.preventDefault(),this.dispatchEvent(Od),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent($v))}function ub(s){this.enabled!==!1&&this._handleKeyDown(s)}function cb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ho.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ot.TOUCH_ROTATE;break;case ho.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case ho.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ot.TOUCH_DOLLY_PAN;break;case ho.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Od)}function hb(s){switch(this._trackPointer(s),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ot.NONE}}function fb(s){this.enabled!==!1&&s.preventDefault()}function db(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const mb=()=>{const[s,e]=he.useState({name:"",email:"",message:""}),t=he.useRef(null);return he.useEffect(()=>{let i,o,a,u,c;i=new x1({antialias:!0}),i.outputColorSpace=pn,i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0),i.setPixelRatio(window.devicePixelRatio),i.shadowMap.enabled=!0,i.shadowMap.type=uv,t.current&&t.current.appendChild(i.domElement),o=new XE,a=new In(95,window.innerWidth/window.innerHeight,1,1e4),a.position.set(4,4,4),u=new nb(a,i.domElement),u.enableDamping=!0,u.enablePan=!0,u.minDistance=2,u.maxDistance=100,u.minPolarAngle=0,u.maxPolarAngle=Math.PI,u.autoRotate=!1,u.target.set(0,1,0),u.update();const f=new Hv(16777215,3e3,100,.22,1);f.position.set(0,25,0),f.castShadow=!0,f.shadow.bias=-1e-4,o.add(f),new y1().setPath("public/").load("scene.gltf",_=>{console.log("loading model");const y=_.scene;y.traverse(N=>{N.isMesh&&(N.castShadow=!0,N.receiveShadow=!0)}),o.add(y);const E=new ki().setFromObject(y),M=E.getSize(new X),S=E.getCenter(new X),x=9,L=Math.max(M.x,M.y,M.z),b=x/L;y.scale.set(b,b,b),E.setFromObject(y),E.getCenter(S),y.position.x+=0-S.x,y.position.y+=1-S.y,y.position.z+=0-S.z,a.position.set(0,4,10),a.lookAt(0,1,0),u.target.set(0,1,0),u.update(),console.log("Model scale applied:",b),console.log("Model new center:",S),console.log("Model new size:",E.getSize(new X));const A=document.getElementById("progress-container");A&&(A.style.display="none")},_=>{console.log(`loading ${_.loaded/_.total*100}%`)},_=>{console.error(_)});const p=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",p);const g=()=>{c=requestAnimationFrame(g),u.update(),i.render(o,a)};return g(),()=>{cancelAnimationFrame(c),window.removeEventListener("resize",p),i&&t.current&&(t.current.removeChild(i.domElement),i.dispose())}},[]),ve.jsx("div",{ref:t,style:{width:"100vw",height:"100vh"}})};function gb({menuOpen:s,setMenuOpen:e}){return ve.jsxs(ve.Fragment,{children:[ve.jsx(cS,{menuOpen:s,setMenuOpen:e}),ve.jsx(hS,{menuOpen:s,setMenuOpen:e}),ve.jsx(fS,{}),ve.jsx(dS,{}),ve.jsx(pS,{})]})}function _b(){const[s,e]=he.useState(!1),[t,i]=he.useState(!1);return ve.jsxs(ve.Fragment,{children:[!s&&ve.jsx(uS,{onComplete:()=>e(!0)}),ve.jsx("div",{className:`min-h-screen transition-opacity duration-700 ${s?"opacity-100":"opacity-0"} bg-black text-gray-100`,children:ve.jsx(Qy,{children:ve.jsxs(Py,{children:[ve.jsx(_f,{path:"/",element:ve.jsx(gb,{menuOpen:t,setMenuOpen:i})}),ve.jsx(_f,{path:"/contact",element:ve.jsx(mb,{})})]})})})]})}Bx.createRoot(document.getElementById("root")).render(ve.jsx(Dx.StrictMode,{children:ve.jsx(_b,{})}));
