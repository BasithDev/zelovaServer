import{ai as w,u as N,r,a as E,j as e,Q as v,m as l,aD as O,B as t,aE as p,aw as S}from"./index-CYBSKVP3.js";const C=()=>{const n=w(a=>a.userData.data),h=N(),[s,c]=r.useState(""),[o,d]=r.useState(""),[x,u]=r.useState(!1),[i,m]=r.useState(!1),[g,f]=r.useState(!1),b=E(),y=async()=>{if(!s){t.error("Please enter a new email.");return}if(s===n.email){t.error("New email should be different from the old email.");return}m(!0);try{(await p.post("http://localhost:3000/api/user/send-otp",{email:s})).data.status==="Success"?(u(!0),t.success("OTP sent successfully.")):t.error("Failed to send OTP.")}catch(a){console.error("Error sending OTP:",a),t.error("An error occurred.")}finally{m(!1)}},j=async()=>{if(!o){t.error("Please enter the OTP.");return}f(!0);try{const a=await p.patch("http://localhost:3000/api/user/update-email",{userId:n._id,email:s,otp:o});a.data.status==="Success"?(c(""),d(""),u(!1),h(S(n._id)),b("/profile")):t.error(a.data.message||"Failed to update email.")}catch(a){console.error("Error updating email:",a),t.error("An error occurred while updating the email.")}finally{f(!1)}};return e.jsxs("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:[e.jsx(v,{position:"top-right"}),e.jsxs(l.div,{className:"w-full max-w-md p-6 bg-white rounded-lg shadow-lg",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[e.jsx("h2",{className:"text-2xl font-semibold text-center text-gray-800 mb-6",children:"Edit Email ID"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-600 font-medium",children:"Old Email:"}),e.jsx("input",{type:"email",value:n.email,readOnly:!0,className:"w-full p-3 mt-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-600 font-medium",children:"New Email:"}),e.jsx("input",{type:"email",value:s,onChange:a=>c(a.target.value),placeholder:"Enter new email",className:"w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"})]}),x?e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-600 font-medium",children:"Enter OTP:"}),e.jsx("input",{type:"text",value:o,onChange:a=>d(a.target.value),placeholder:"Enter OTP",className:"w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"})]}):e.jsx("div",{className:"mb-4",children:e.jsx(l.button,{onClick:y,disabled:i,className:`w-full text-xl font-bold p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${i&&"cursor-wait"}`,children:i?"Sending OTP...":e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"inline mr-2"})," Send OTP"]})})}),e.jsx("div",{className:"mt-6",children:e.jsx(l.button,{onClick:j,disabled:g||!o,className:"w-full p-3 bg-orange-500 text-white font-bold text-xl rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 cursor-pointer",children:g?"Updating Email...":"Change Email ID"})})]})]})};export{C as default};