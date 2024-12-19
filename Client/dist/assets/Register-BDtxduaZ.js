import{r as m,a as d,b as x,j as e,Q as u,m as g,F as p,M as h,c as b,d as f,L as y}from"./index-_sbS5Ts6.js";import{u as j,c as w,a as r,b as N,d as v}from"./index.esm-KWZiMSCk.js";import{R as o}from"./index-C1RyoVUy.js";import{F as P}from"./index-CpkFeV_4.js";import{P as F}from"./PrimaryBtn-CsSN_U_4.js";import{B as q}from"./BeatLoader-BD9pXv5w.js";const k=()=>{const[t,l]=m.useState(!1),n=d(),i=()=>{window.location.href="http://34.93.91.95:3000/api/auth/google"},s=j({initialValues:{fullname:"",email:"",password:"",confirmPassword:"",age:"",phoneNumber:""},validationSchema:w({fullname:r().required("Fullname is required"),email:r().email("Invalid email address").required("Email is required"),password:r().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character").required("Password is required"),confirmPassword:r().oneOf([N("password"),null],"Passwords must match").required("Confirm Password is required"),age:v().required("Age is required").min(18,"You must be at least 18 years old").max(115,"Enter a valid age"),phoneNumber:r().matches(/^[0-9]{10}$/,"Phone number must be exactly 10 digits").required("Phone number is required")}),onSubmit:async a=>{l(!0);try{await x(a),n("/otp",{state:{emailForOtp:a.email}})}finally{l(!1)}}});return e.jsxs("div",{className:"flex flex-col lg:flex-row min-h-screen",children:[e.jsx(u,{position:"top-right",autoClose:2e3}),e.jsx("div",{className:"bg-orange-200 lg:w-[480px] w-full h-[120px] lg:h-auto flex items-center justify-center lg:rounded-r-xl",children:e.jsx("div",{className:"text-7xl lg:text-9xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text",children:"Z"})}),e.jsxs(g.div,{className:"flex flex-col justify-center w-full lg:w-2/3 p-4 sm:p-6 lg:p-10 bg-white",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.5},children:[e.jsx("h1",{className:"text-3xl lg:text-4xl font-bold mb-2",children:"Create an account"}),e.jsx("p",{className:"text-gray-500 mb-6",children:"Please create an account to continue"}),e.jsxs("form",{className:"space-y-4",onSubmit:s.handleSubmit,children:[[{name:"fullname",type:"text",placeholder:"FULL NAME",icon:e.jsx(p,{})},{name:"email",type:"email",placeholder:"Email ID",icon:e.jsx(h,{})},{name:"password",type:"password",placeholder:"Password",icon:e.jsx(o,{})},{name:"confirmPassword",type:"password",placeholder:"Confirm Password",icon:e.jsx(o,{})},{name:"age",type:"number",placeholder:"Age",icon:e.jsx(b,{})},{name:"phoneNumber",type:"text",placeholder:"Mobile Number",icon:e.jsx(f,{})}].map((a,c)=>e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"bg-orange-200 p-3 lg:p-3.5 rounded-lg",children:a.icon}),e.jsx("input",{type:a.type,name:a.name,placeholder:a.placeholder,className:"flex-1 p-2 text-sm lg:text-base border rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-300",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values[a.name]})]}),s.touched[a.name]&&s.errors[a.name]&&e.jsx("div",{className:"text-red-500 text-sm",children:s.errors[a.name]})]},c)),e.jsx(F,{type:"submit",text:t?e.jsx(q,{color:"#FFF",size:10}):"Sign Up",className:"bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-bold text-xl lg:text-2xl text-white w-full py-2 rounded-md",disabled:t})]}),e.jsxs("div",{className:"flex items-center my-4",children:[e.jsx("div",{className:"flex-grow border-t border-gray-300"}),e.jsx("span",{className:"mx-4 text-gray-500 text-sm lg:text-base",children:"OR"}),e.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),e.jsxs("button",{onClick:i,className:"w-full bg-white border border-gray-300 hover:bg-gray-100 transition-all duration-200 text-gray-700 py-2 rounded-lg flex items-center justify-center mb-4 text-sm lg:text-base",children:[e.jsx(P,{className:"mr-2 text-xl lg:text-2xl"}),"Sign In Using Google Account"]}),e.jsx(y,{to:"/login",children:e.jsxs("p",{className:"text-center text-gray-500 mt-4 text-sm lg:text-base",children:["Already registered? ",e.jsx("span",{className:"underline text-blue-500",children:"Sign In"})]})})]})]})};export{k as default};
