import{aV as Y,aW as P,r as l,aX as B,ai as V,aY as W,B as u,j as e,Q as $,m as j,ay as X,aZ as Z,E as z,a7 as q,a_ as G,a$ as J,b0 as K}from"./index-CayrqlUJ.js";import{H as ee}from"./Header-C8nVRJ4M.js";var _=function(){return _=Object.assign||function(r){for(var d,i=1,s=arguments.length;i<s;i++){d=arguments[i];for(var n in d)Object.prototype.hasOwnProperty.call(d,n)&&(r[n]=d[n])}return r},_.apply(this,arguments)},te=function(r,d){var i={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&d.indexOf(s)<0&&(i[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(r);n<s.length;n++)d.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(r,s[n])&&(i[s[n]]=r[s[n]]);return i},ae=Y("CircleLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(180deg)} 100% {transform: rotate(360deg)}","circle");function A(r){var d=r.loading,i=d===void 0?!0:d,s=r.color,n=s===void 0?"#000000":s,v=r.speedMultiplier,f=v===void 0?1:v,N=r.cssOverride,y=N===void 0?{}:N,w=r.size,S=w===void 0?50:w,E=te(r,["loading","color","speedMultiplier","cssOverride","size"]),x=_({display:"inherit",position:"relative",width:P(S),height:P(S)},y),p=function(g){var h=B(S),C=h.value,O=h.unit;return{position:"absolute",height:"".concat(C*(1-g/10)).concat(O),width:"".concat(C*(1-g/10)).concat(O),borderTop:"1px solid ".concat(n),borderBottom:"none",borderLeft:"1px solid ".concat(n),borderRight:"none",borderRadius:"100%",transition:"2s",top:"".concat(g*.7*2.5,"%"),left:"".concat(g*.35*2.5,"%"),animation:"".concat(ae," ").concat(1/f,"s ").concat(g*.2/f,"s infinite linear")}};return i?l.createElement("span",_({style:x},E),l.createElement("span",{style:p(0)}),l.createElement("span",{style:p(1)}),l.createElement("span",{style:p(2)}),l.createElement("span",{style:p(3)}),l.createElement("span",{style:p(4)})):null}const ne=()=>{const[r,d]=l.useState(""),[i,s]=l.useState([]),[n,v]=l.useState(""),[f,N]=l.useState(""),[y,w]=l.useState(""),[S,E]=l.useState(!1),[x,p]=l.useState(null),[g,h]=l.useState(!1),C=V(t=>t==null?void 0:t.userLocation.coordinates),[O,L]=C?Object.values(C):[0,0],[c,k]=l.useState({heading:"",description:"",contactNumber:""}),[D,m]=l.useState(!1);l.useEffect(()=>{H()},[]);const H=async()=>{var t,a;try{m(!0);const o=await W();s(o.data.sharedSupplies)}catch(o){u.error(((a=(t=o.response)==null?void 0:t.data)==null?void 0:a.message)||"Error fetching supplies")}finally{m(!1)}},M=t=>/^[0-9]{10}$/.test(t),F=async()=>{var t,a;try{if(!n||!f||!y){u.warning("Please fill in all fields");return}if(!M(y)){u.warning("Please enter a valid 10-digit contact number");return}m(!0);const o=await G({heading:n,description:f,contactNumber:y,lat:O,lon:L});u.success("Supply shared successfully!"),s([o.data.supply,...i]),v(""),N(""),w("")}catch(o){u.error(((a=(t=o.response)==null?void 0:t.data)==null?void 0:a.message)||"Error sharing supply")}finally{m(!1)}},T=async t=>{var a,o;try{m(!0),await J(t),s(i.filter(b=>b._id!==t)),u.success("Supply deleted successfully!")}catch(b){u.error(((o=(a=b.response)==null?void 0:a.data)==null?void 0:o.message)||"Error deleting supply")}finally{m(!1)}},I=t=>{const a=i.find(o=>o._id===t);k({id:a._id,heading:a.heading,description:a.description,contactNumber:a.contactNumber}),h(!0)},Q=async()=>{var t,a;try{if(!c.heading||!c.description||!c.contactNumber){u.warning("Please fill in all fields");return}m(!0);const o=await K({supplyId:c.id,heading:c.heading,description:c.description,contactNumber:c.contactNumber});s(i.map(b=>b._id===c.id?o.data.supply:b)),h(!1),u.success("Supply updated successfully!")}catch(o){u.error(((a=(t=o.response)==null?void 0:t.data)==null?void 0:a.message)||"Error updating supply")}finally{m(!1)}},R=t=>{p(t),E(!0)},U=()=>{E(!1),p(null)};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",children:[e.jsx($,{position:"top-right",autoClose:3e3}),e.jsx(ee,{searchQuery:r,onSearchChange:t=>d(t.target.value),placeholderText:"Search foods, restaurants, etc..."}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[e.jsxs("div",{className:"text-center mb-6 sm:mb-8",children:[e.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400",children:"Share Your Supplies"}),e.jsx("p",{className:"mt-2 sm:mt-4 text-lg sm:text-xl text-gray-600",children:"Help others by sharing your supplies and resources"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6",children:[e.jsx("div",{className:"bg-white rounded-2xl shadow-xl p-4 sm:p-6",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base sm:text-lg font-medium text-gray-700 mb-2",children:"Heading"}),e.jsx("input",{type:"text",placeholder:"What supplies are you sharing?",value:n,onChange:t=>v(t.target.value),className:"w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base sm:text-lg font-medium text-gray-700 mb-2",children:"Contact Number"}),e.jsx("input",{type:"tel",placeholder:"Enter your contact number",value:y,onChange:t=>w(t.target.value),className:"w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base sm:text-lg font-medium text-gray-700 mb-2",children:"Description"}),e.jsx("textarea",{placeholder:"Provide details about your supplies...",value:f,onChange:t=>N(t.target.value),className:"w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 h-32 resize-none placeholder-gray-400"})]}),e.jsx("button",{onClick:F,disabled:D,className:"w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2",children:D?e.jsx(A,{size:20,color:"#ffffff"}):"Share Supplies"})]})}),e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-4 sm:p-6",children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-gray-800 mb-4",children:"Your Shared Supplies"}),e.jsx("div",{className:"overflow-y-auto max-h-[60vh] scrollbar-hide sm:max-h-[45vh] pr-2",children:e.jsx("div",{className:"space-y-3",children:D?e.jsx("div",{className:"flex justify-center items-center py-8",children:e.jsx(A,{size:40,color:"#FF5733"})}):i.length===0?e.jsx("p",{className:"text-center text-gray-500 py-8",children:"No supplies shared yet"}):i.map(t=>e.jsx(j.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-gray-50 rounded-xl p-4 relative group hover:shadow-md transition-all duration-300 cursor-pointer",onClick:()=>R(t),children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx("h3",{className:"text-base sm:text-lg font-semibold text-gray-800 pr-16",children:t.heading}),e.jsxs("div",{className:"flex gap-2 absolute top-3 right-3",children:[e.jsx("button",{onClick:a=>{a.stopPropagation(),I(t._id)},className:"p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors",children:e.jsx(X,{size:16})}),e.jsx("button",{onClick:a=>{a.stopPropagation(),T(t._id)},className:"p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors",children:e.jsx(Z,{size:16})})]})]}),e.jsx("p",{className:"text-sm text-gray-600 line-clamp-2",children:t.description}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-500",children:[e.jsxs("p",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"font-medium",children:"Contact:"}),t.contactNumber]}),e.jsx("div",{className:"hidden sm:block text-gray-300",children:"•"}),e.jsxs("p",{children:["Posted: ",new Date(t.createdAt).toLocaleString()]}),t.updatedAt&&t.updatedAt!==t.createdAt&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"hidden sm:block text-gray-300",children:"•"}),e.jsxs("p",{className:"italic",children:["Edited: ",new Date(t.updatedAt).toLocaleString()]})]})]})]})},t._id))})})]})]})]}),e.jsx(z,{children:S&&x&&e.jsx(j.div,{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(j.div,{className:"bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",duration:.5},children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-gray-800",children:"Supply Details"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Heading"}),e.jsx("p",{className:"mt-1 text-lg text-gray-800",children:x.heading})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Contact Number"}),e.jsx("p",{className:"mt-1 text-lg text-gray-800",children:x.contactNumber})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Description"}),e.jsx("p",{className:"mt-1 text-lg text-gray-800",children:x.description})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Posted"}),e.jsx("p",{className:"mt-1 text-gray-800",children:new Date(x.createdAt).toLocaleString()})]}),x.updatedAt&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Edited"}),e.jsx("p",{className:"mt-1 text-gray-800",children:new Date(x.updatedAt).toLocaleString()})]})]}),e.jsx(j.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:U,className:"mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-medium shadow-lg transition-all duration-300",children:"Close"})]})})}),e.jsx(z,{children:g&&e.jsx(j.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:e.jsxs(j.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.95,opacity:0},className:"bg-white rounded-2xl p-8 max-w-2xl w-full shadow-xl",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800",children:"Edit Supply"}),e.jsx("button",{onClick:()=>h(!1),className:"p-2 hover:bg-gray-100 rounded-full transition-colors duration-300",children:e.jsx(q,{className:"text-gray-500"})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-lg font-medium text-gray-700 mb-2",children:"Heading"}),e.jsx("input",{type:"text",value:c.heading,onChange:t=>k({...c,heading:t.target.value}),className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-lg font-medium text-gray-700 mb-2",children:"Contact Number"}),e.jsx("input",{type:"tel",value:c.contactNumber,onChange:t=>k({...c,contactNumber:t.target.value}),className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-lg font-medium text-gray-700 mb-2",children:"Description"}),e.jsx("textarea",{value:c.description,onChange:t=>k({...c,description:t.target.value}),className:"w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 h-40 resize-none"})]}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx("button",{onClick:()=>h(!1),className:"px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-300",children:"Cancel"}),e.jsx("button",{onClick:Q,className:"px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]",children:"Update Supply"})]})]})]})})})]})};export{ne as default};
