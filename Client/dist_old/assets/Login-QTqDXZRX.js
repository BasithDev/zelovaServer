import{r as d,u as w,a as y,j as e,Q as N,m as v,F as P,L as x,B as m,l as L,s as g}from"./index-773LaoHc.js";import{R as k}from"./index-B8eV_nKf.js";import{F as C}from"./index-CytjV_2w.js";import{P as F}from"./PrimaryBtn-BjabzPHK.js";const I=()=>{const[r,u]=d.useState(""),[t,p]=d.useState(""),l=w(),o=y(),h=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,f=async()=>{if(!h.test(t)){m.error("Password does not meet the required criteria.");return}try{const s=await L({email:r,password:t}),{Id:j,token:n,isVendor:a,status:i}=s.data,c=j;a?(l(g({userId:c,token:n,isVendor:a,status:i})),o("/role-select",{replace:!0})):(l(g({userId:c,token:n,isVendor:a,status:i})),o("/"))}catch(s){m.error(s.response.data.message)}},b=()=>{window.location.href="http://zelova.zapto.org/api/auth/google"};return e.jsxs("div",{className:"flex flex-col md:flex-row h-screen w-full",children:[e.jsx(N,{position:"top-right"}),e.jsx("div",{className:"bg-orange-200 w-full md:w-1/3 flex items-center justify-center rounded-none md:rounded-r-xl py-6 md:py-0",children:e.jsx("div",{className:"text-6xl md:text-9xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text",children:"Z"})}),e.jsxs(v.div,{className:"w-full md:w-2/3 flex flex-col justify-center items-center h-screen bg-white p-6 md:p-8 rounded-none md:rounded-l-lg shadow-lg",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.5},children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold mb-2",children:"Welcome!"}),e.jsx("p",{className:"text-gray-500 mb-4 md:mb-6",children:"Please sign in to your account to continue"}),e.jsxs("div",{className:"w-full max-w-sm px-4",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-orange-200 p-3.5 rounded-l-lg",children:e.jsx(P,{className:"text-orange-500"})}),e.jsx("input",{type:"text",placeholder:"Email ID",value:r,onChange:s=>u(s.target.value),className:"w-full p-[9px] border border-gray-300 rounded-r-lg focus:outline-none bg-white bg-opacity-50"})]}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"bg-orange-200 p-3.5 rounded-l-lg",children:e.jsx(k,{className:"text-orange-500"})}),e.jsx("input",{type:"password",placeholder:"Password",value:t,onChange:s=>p(s.target.value),className:"w-full p-[9px] border border-gray-300 rounded-r-lg focus:outline-none bg-white bg-opacity-50"})]}),e.jsx("div",{className:"text-center mb-4",children:e.jsx(x,{replace:!0,to:"/forgot-password",children:e.jsxs("span",{className:"text-gray-500",children:["Forgot Password? ",e.jsx("span",{className:"underline text-blue-500",children:"Click Here"})]})})}),e.jsx(F,{text:"Login",onClick:f,className:"w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white text-lg md:text-xl font-bold py-2 rounded-lg mb-4"}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("hr",{className:"w-full border-gray-300"}),e.jsx("span",{className:"px-2 text-gray-500",children:"OR"}),e.jsx("hr",{className:"w-full border-gray-300"})]}),e.jsxs("button",{onClick:b,className:"w-full bg-white border border-gray-300 hover:bg-gray-100 transition-all duration-200 text-gray-700 py-2 rounded-lg flex items-center justify-center mb-4",children:[e.jsx(C,{className:"mr-2 text-lg md:text-2xl"}),"Sign In Using Google Account"]}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-gray-500",children:"Create New Account? "}),e.jsx(x,{replace:!0,to:"/register",children:e.jsx("span",{className:"text-blue-500 underline",children:"Sign Up"})})]})]})]})]})};export{I as default};
