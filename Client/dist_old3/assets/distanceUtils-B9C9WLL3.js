import{aV as m,aX as w,aW as v,r as d}from"./index-_sbS5Ts6.js";var o=function(){return o=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++){r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)},j=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a},x=m("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),M=m("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");function R(e){var r=e.loading,a=r===void 0?!0:r,t=e.color,n=t===void 0?"#000000":t,l=e.speedMultiplier,y=l===void 0?1:l,p=e.cssOverride,h=p===void 0?{}:p,g=e.size,i=g===void 0?60:g,O=j(e,["loading","color","speedMultiplier","cssOverride","size"]),u=w(i),s=u.value,c=u.unit,b=o({display:"inherit",width:v(i),height:v(i),position:"relative"},h),f=function(_){return{position:"absolute",top:"0",left:"0",width:"".concat(s).concat(c),height:"".concat(s).concat(c),border:"".concat(s/10).concat(c," solid ").concat(n),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(_===1?x:M," ").concat(2/y,"s 0s infinite linear")}};return a?d.createElement("span",o({style:b},O),d.createElement("span",{style:f(1)}),d.createElement("span",{style:f(2)})):null}const X=e=>{const r=(e/1e3).toFixed(1),t=Math.ceil(r/5.5*60);return{distanceInKm:r,timeInMinutes:t}};export{R,X as c};