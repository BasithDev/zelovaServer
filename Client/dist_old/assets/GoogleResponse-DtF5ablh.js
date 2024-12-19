import{a as n,r as a,B as c,j as e,Q as m}from"./index-773LaoHc.js";const i=()=>{const o=n(),[t,l]=a.useState(null);a.useEffect(()=>{const r=new URLSearchParams(window.location.search).get("status");l(r),r==="error"&&c.error("An error occurred during login. Please try again.")},[]);const s=()=>{o("/login")};return e.jsxs("div",{className:"flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4",children:[e.jsx(m,{}),t==="blocked"?e.jsxs("div",{className:"w-full max-w-md p-4 sm:p-6 bg-white border border-red-500 rounded-md shadow-lg text-center",children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4",children:"Account Blocked"}),e.jsx("p",{className:"text-sm sm:text-base text-gray-700 mb-4 sm:mb-6",children:"Your account is blocked. Please contact support for further assistance."}),e.jsx("button",{onClick:s,className:"w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm sm:text-base",children:"Go to Login"})]}):t==="error"?e.jsxs("div",{className:"w-full max-w-md p-4 sm:p-6 bg-white border border-yellow-500 rounded-md shadow-lg text-center",children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-yellow-600 mb-3 sm:mb-4",children:"Error Occurred"}),e.jsx("p",{className:"text-sm sm:text-base text-gray-700 mb-4 sm:mb-6",children:"There was an error during login. Please try again later."}),e.jsx("button",{onClick:s,className:"w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm sm:text-base",children:"Go to Login"})]}):e.jsx("p",{className:"text-base sm:text-lg text-gray-700",children:"Processing your request..."})]})};export{i as default};