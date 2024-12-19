import{a as n,ai as c,j as e,m as d,ay as x,g as m,az as h,aA as i,aB as g,aC as j,P as l}from"./index-C0g0oOAM.js";const u=()=>{const r=n(),s=c(a=>a.userData.data);return e.jsx("div",{className:"flex bg-slate-50 items-center justify-center min-h-screen",children:e.jsxs(d.div,{initial:{y:50},animate:{y:0},exit:{y:50},transition:{duration:.1},className:"bg-white rounded-xl p-8 w-full sm:max-w-4xl text-center shadow-none sm:shadow-2xl transition-transform transform",children:[e.jsx("h1",{className:"text-4xl font-extrabold mb-8 text-gray-800",children:"Your Profile"}),e.jsxs("div",{className:"flex flex-col items-center mb-8",children:[e.jsx("img",{referrerPolicy:"no-referrer",src:(s==null?void 0:s.profilePicture)||"https://placehold.co/100x100",alt:"Profile of Abdul Basith",className:"rounded-full w-32 h-32 mb-4 border-4 transition-all duration-300 border-blue-500 shadow-xl hover:shadow-2xl"}),e.jsx("h2",{className:"text-3xl font-semibold text-gray-700",children:s==null?void 0:s.fullname}),e.jsx("p",{className:"text-gray-400 mb-6 text-lg",children:s==null?void 0:s.email})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(o,{onClick:()=>r("/edit-user"),icon:e.jsx(x,{}),color:"text-orange-500",label:"Edit Profile"}),e.jsx(o,{onClick:()=>r("/reset-password"),icon:e.jsx(m,{}),color:"text-blue-500",label:"Reset Password"}),e.jsx(o,{onClick:()=>r("/change-id"),icon:e.jsx(h,{}),color:"text-blue-500",label:"Change ID"}),s.isVendor?e.jsx(o,{onClick:()=>r("/vendor"),icon:e.jsx(i,{}),color:"text-green-500",label:"Switch To Vendor"}):e.jsx(o,{onClick:()=>r("/request-vendor"),icon:e.jsx(i,{}),color:"text-green-500",label:"Become a Vendor"}),e.jsx(o,{onClick:()=>r("/address-manage"),icon:e.jsx(g,{}),color:"text-orange-500",label:"Your Addresses"}),e.jsx(o,{onClick:()=>r("/report"),icon:e.jsx(j,{}),color:"text-red-500",label:"Report a Problem"})]})]})})},o=({icon:r,color:s,label:a,onClick:t})=>e.jsxs("div",{onClick:t,className:"flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 hover:shadow-lg transition-all transform hover:scale-105",children:[e.jsx("div",{className:`${s} text-2xl mr-4`,children:r}),e.jsx("span",{className:"text-gray-700 font-medium",children:a})]});o.propTypes={icon:l.element.isRequired,color:l.string.isRequired,label:l.string.isRequired,onClick:l.func.isRequired};export{u as default};