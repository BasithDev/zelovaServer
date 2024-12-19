import{r as o,a as C,j as e,Q as E,m as c,M as k,g as L,L as $,h as B,B as i,i as R,k as I}from"./index-CayrqlUJ.js";import{P as f}from"./PrimaryBtn-BDdjfxVD.js";import{R as z}from"./index-DujuKZwk.js";import{B as g}from"./BeatLoader-C92O3Hv_.js";const K=()=>{const[n,y]=o.useState(""),[u,h]=o.useState(""),[x,b]=o.useState(""),[j,v]=o.useState(!1),[N,P]=o.useState(!1),[d,m]=o.useState(!1),[p,w]=o.useState(!1),[s,r]=o.useState(!1),S=C(),O=async()=>{var t,a;try{r(!0),(await B({email:n})).data.status==="Success"&&(i.success("OTP sent successfully"),v(!0),m(!0))}catch(l){i.error(((a=(t=l.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to send OTP"),m(!1)}finally{r(!1)}},F=async()=>{var t,a;try{r(!0),(await R({email:n,otp:u})).data.status==="Success"&&(i.success("OTP verified successfully"),P(!0),w(!0))}catch(l){i.error(((a=(t=l.response)==null?void 0:t.data)==null?void 0:a.message)||"Invalid OTP"),w(!1)}finally{r(!1)}},T=async()=>{var t,a;try{r(!0),(await I({email:n,password:x})).data.status==="Success"&&(i.success("Password reset successfully"),setTimeout(()=>{S("/login")},2e3))}catch(l){i.error(((a=(t=l.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to reset password")}finally{r(!1)}};return e.jsxs("div",{className:"flex flex-col lg:flex-row min-h-screen",children:[e.jsx(E,{position:"top-right"}),e.jsx("div",{className:"bg-orange-200 w-full lg:w-[480px] h-[120px] lg:h-auto flex items-center justify-center lg:rounded-r-xl",children:e.jsx("div",{className:"text-7xl lg:text-9xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text",children:"Z"})}),e.jsxs(c.div,{className:"flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-extrabold text-center mb-6 lg:mb-8 text-gray-800",children:"Forgot Password"}),e.jsxs("div",{className:"w-full max-w-md mx-auto px-4",children:[e.jsxs(c.div,{className:"space-y-4",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2 sm:gap-0 mb-4",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsx("div",{className:"bg-orange-200 p-3 lg:p-3.5 rounded-l-lg flex items-center justify-center",children:e.jsx(k,{className:"text-orange-500"})}),e.jsx("input",{type:"email",placeholder:"Email ID",value:n,onChange:t=>y(t.target.value),disabled:d||s,className:`w-full p-2 lg:p-[9px] border border-gray-300 rounded-r-lg focus:outline-none bg-white bg-opacity-50 ${d||s?"opacity-60 cursor-not-allowed":""}`})]}),e.jsx(f,{text:s?e.jsx(g,{size:8,color:"#ffffff"}):"Send OTP",onClick:O,disabled:d||s||!n,className:`w-full sm:w-auto px-4 py-2 lg:py-2.5 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-bold rounded-lg whitespace-nowrap ${d||s?"opacity-60 cursor-not-allowed":""}`})]}),j&&e.jsxs(c.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex flex-col sm:flex-row items-center gap-2 sm:gap-0 mb-4",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsx("div",{className:"bg-orange-200 p-3 lg:p-3.5 rounded-l-lg flex items-center justify-center",children:e.jsx(L,{className:"text-orange-500"})}),e.jsx("input",{type:"text",placeholder:"Enter OTP",value:u,onChange:t=>h(t.target.value),disabled:p||s,className:`w-full p-2 lg:p-[9px] border border-gray-300 rounded-r-lg focus:outline-none bg-white bg-opacity-50 ${p||s?"opacity-60 cursor-not-allowed":""}`})]}),e.jsx(f,{text:s?e.jsx(g,{size:8,color:"#ffffff"}):"Verify",onClick:F,disabled:p||s||!u,className:`w-full sm:w-auto px-4 py-2 lg:py-2.5 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-bold rounded-lg whitespace-nowrap ${p||s?"opacity-60 cursor-not-allowed":""}`})]}),N&&e.jsxs(c.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex flex-col sm:flex-row items-center gap-2 sm:gap-0 mb-4",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsx("div",{className:"bg-orange-200 p-3 lg:p-3.5 rounded-l-lg flex items-center justify-center",children:e.jsx(z,{className:"text-orange-500"})}),e.jsx("input",{type:"password",placeholder:"New Password",value:x,onChange:t=>b(t.target.value),disabled:s,className:`w-full p-2 lg:p-[9px] border border-gray-300 rounded-r-lg focus:outline-none bg-white bg-opacity-50 ${s?"opacity-60 cursor-not-allowed":""}`})]}),e.jsx(f,{text:s?e.jsx(g,{size:8,color:"#ffffff"}):"Change",onClick:T,disabled:s||!x,className:`w-full sm:w-auto px-4 py-2 lg:py-2.5 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-bold rounded-lg whitespace-nowrap ${s?"opacity-60 cursor-not-allowed":""}`})]})]}),e.jsx(c.div,{className:"mt-6 text-center",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},children:e.jsx($,{to:"/login",children:e.jsx("button",{className:"w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-bold rounded-lg whitespace-nowrap",children:"Back to Login"})})})]})]})]})};export{K as default};
