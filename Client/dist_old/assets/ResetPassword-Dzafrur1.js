import{ai as h,u as x,a as b,r as t,j as s,Q as N,m as w,B as r,aE as j,aw as y}from"./index-CYBSKVP3.js";const v=()=>{const d=h(e=>e.userData.data),g=x(),p=b(),[o,i]=t.useState(""),[a,l]=t.useState(""),[n,c]=t.useState(""),[u,m]=t.useState(!1),f=async()=>{if(!o||!a||!n){r.error("Please fill in all fields.");return}if(a.length<6){r.error("New password must be at least 6 characters long.");return}if(a!==n){r.error("New password and confirm password do not match.");return}m(!0);try{const e=await j.patch("http://zelova.zapto.org/api/user/reset-password",{userId:d._id,oldPassword:o,newPassword:a});e.data.status==="Success"?(i(""),l(""),c(""),g(y(d._id)),p("/profile")):r.error(e.data.message||"Failed to reset password.")}catch(e){console.error("Error resetting password:",e.response.data.message),r.error(e.response.data.message)}finally{m(!1)}};return s.jsxs("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:[s.jsx(N,{position:"top-right"}),s.jsxs(w.div,{className:"w-full max-w-md p-6 bg-white rounded-lg shadow-lg",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[s.jsx("h2",{className:"text-2xl font-semibold text-center text-gray-800 mb-6",children:"Reset Password"}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"block text-gray-600 font-medium",children:"Old Password:"}),s.jsx("input",{type:"password",value:o,onChange:e=>i(e.target.value),placeholder:"Enter old password",className:"w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"block text-gray-600 font-medium",children:"New Password:"}),s.jsx("input",{type:"password",value:a,onChange:e=>l(e.target.value),placeholder:"Enter new password",className:"w-full p-3  mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"block text-gray-600 font-medium",children:"Confirm New Password:"}),s.jsx("input",{type:"password",value:n,onChange:e=>c(e.target.value),placeholder:"Confirm new password",className:"w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"})]}),s.jsx("div",{className:"mt-6",children:s.jsx(w.button,{onClick:f,disabled:u,className:"w-full p-3 bg-orange-500 text-white font-bold text-xl rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 cursor-pointer",children:u?"Updating Password...":"Reset Password"})})]})]})};export{v as default};
