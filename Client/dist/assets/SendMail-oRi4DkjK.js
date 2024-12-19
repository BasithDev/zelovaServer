import{r as m,j as e,m as u,Q as x,B as l,a0 as b}from"./index-C0g0oOAM.js";import{A as f}from"./AdminSearchBar-CU6sjleP.js";import{B as p}from"./BeatLoader-BjJYty_G.js";const v=()=>{const[s,n]=m.useState({to:"",subject:"",message:""}),[r,d]=m.useState(!1),i=a=>{const{name:t,value:o}=a.target;n({...s,[t]:o})},c=()=>{n({to:"",subject:"",message:""})},g=async()=>{var a,t;if(!s.to||!s.subject||!s.message){l.error("Please fill in all fields");return}try{d(!0),(await b({email:s.to,subject:s.subject,message:s.message})).data.status==="Success"&&(l.success("Email sent successfully"),c())}catch(o){l.error(((t=(a=o.response)==null?void 0:a.data)==null?void 0:t.message)||"Failed to send email")}finally{d(!1)}};return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(f,{}),e.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-3xl mx-auto p-6",children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Send Email"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"to",className:"block text-sm font-medium text-gray-700 mb-2",children:"Recipient Email"}),e.jsx("input",{type:"email",id:"to",name:"to",value:s.to,onChange:i,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",placeholder:"Enter recipient's email"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 mb-2",children:"Subject"}),e.jsx("input",{type:"text",id:"subject",name:"subject",value:s.subject,onChange:i,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",placeholder:"Enter email subject"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:i,rows:"6",className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none",placeholder:"Enter your message"})]}),e.jsxs("div",{className:"flex gap-4 pt-4",children:[e.jsx("button",{onClick:g,disabled:r,className:"flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:r?e.jsx(p,{size:8,color:"#ffffff"}):"Send Email"}),e.jsx("button",{onClick:c,disabled:r,className:"px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"Clear"})]})]})]})}),e.jsx(x,{position:"bottom-right"})]})};export{v as default};
