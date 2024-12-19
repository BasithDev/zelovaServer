import{u as k,ai as q,r as l,j as e,Q as A,au as B,av as L,aw as h,B as $,ax as z}from"./index-C0g0oOAM.js";import{F as _,b as M}from"./index-DOcogqFP.js";import{l as T}from"./cropper-pDrp2STm.js";import{c as Q,a as b,d as V,F as Z,e as G,f as H,E as J}from"./index.esm-B0kyw4bv.js";import{u as K}from"./uploadImageToCloud-DyxytjVp.js";import{B as f}from"./BeatLoader-BjJYty_G.js";const ae=()=>{const c=k(),r=q(a=>a.userData.data),o=r._id,[j,d]=l.useState(!1),[y,m]=l.useState(!1),[N,i]=l.useState(!1),[u,p]=l.useState(null),[n,x]=l.useState(""),[g,v]=l.useState(null),w=()=>i(!0),I=a=>{const t=a.target.files[0];if(t){const s=new FileReader;s.onload=()=>p(s.result),s.readAsDataURL(t)}},C=()=>{g&&(x(g.getCroppedCanvas().toDataURL()),i(!1))},F=a=>{const t=/\/v(\d+)\/(.*)\./,s=a.match(t);return s?s[2]:null},D=async a=>{m(!0);try{p(null),x("");const t=F(a);t?await z({public_id:t,userId:o}):console.error("Invalid image URL or unable to extract public ID"),c(h(o))}catch(t){console.log(t)}finally{m(!1)}},P=Q({fullname:b().trim().required("Full name is required").min(3,"Full name must be at least 3 characters long").matches(/^[a-zA-Z\s]+$/,"Full name must only contain letters and spaces"),phoneNumber:b().trim().required("Phone number is required"),age:V().required("Age is required").min(10,"Enter a valid age (above 10 years)").max(115,"Enter a valid age (below 115 years)")}),E={fullname:r.fullname||"",phoneNumber:r.phoneNumber||"",age:r.age||""},S=[{name:"fullname",label:"Username",type:"text"},{name:"phoneNumber",label:"Phone Number",type:"tel"},{name:"age",label:"Age",type:"number"}],U=a=>a.fullname!==r.fullname||a.phoneNumber!==r.phoneNumber||a.age!==r.age||n;return e.jsxs("div",{className:"mx-5 my-10 p-6 bg-white rounded-lg shadow-lg",children:[e.jsx(A,{position:"top-right"}),e.jsx("h2",{className:"text-4xl font-bold text-center mb-4",children:"Edit Profile"}),e.jsxs("div",{className:"flex flex-col items-center mb-6 space-y-4",children:[e.jsx("img",{src:n||r.profilePicture||"https://placehold.co/100x100",alt:"Profile",className:"w-48 h-48 rounded-full border border-gray-300 object-cover"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("button",{onClick:w,className:"bg-orange-500 flex items-center gap-1 px-4 py-2 text-white font-semibold rounded hover:bg-orange-600",children:[e.jsx(_,{}),"Edit"]}),e.jsx("button",{onClick:()=>D(r.profilePicture),className:"bg-red-500 flex items-center gap-1 px-4 py-2 text-white font-semibold rounded hover:bg-red-700",children:y?e.jsx(f,{}):e.jsxs(e.Fragment,{children:[" ",e.jsx(M,{}),"Remove"]})})]})]}),N&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:e.jsxs("div",{className:"bg-white relative p-4 rounded shadow-lg",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Edit Profile Picture"}),e.jsx(B,{onClick:()=>i(!1),className:"absolute top-2 right-2 bg-red-500 text-white text-xl cursor-pointer rounded-full hover:bg-red-600"}),u?e.jsx(T,{src:u,style:{height:300,width:"100%"},initialAspectRatio:1,aspectRatio:1,guides:!1,viewMode:1,onInitialized:a=>v(a)}):e.jsx("p",{className:"text-center text-gray-500",children:"Please select an image to crop."}),e.jsxs("div",{className:"flex justify-between mt-4",children:[e.jsx("button",{onClick:()=>document.getElementById("imageInput").click(),className:"bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600",children:"Select"}),e.jsx("button",{onClick:C,className:"bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600",children:"Done"})]}),e.jsx("input",{type:"file",id:"imageInput",accept:"image/*",onChange:I,className:"hidden"})]})}),e.jsx(Z,{initialValues:E,validationSchema:P,onSubmit:async a=>{if(!U(a)){console.log("Data is the same");return}d(!0);try{let t={...a};if(t.userId=o,n){const s=await K(n);t.profilePicture=s.secure_url}await L(t),c(h(o)),$.success("User Details Updated Successfully")}catch(t){console.log(t)}finally{d(!1)}},children:({isSubmitting:a})=>e.jsxs(G,{children:[S.map(({name:t,label:s,type:R})=>e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-xl font-semibold text-orange-600 mb-2",children:s}),e.jsx(H,{type:R,name:t,className:"w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"}),e.jsx(J,{name:t,component:"div",className:"text-red-500 text-sm mt-1"})]},t)),e.jsx("div",{className:"my-4",children:e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-orange-500 text-white font-bold text-2xl rounded-lg hover:bg-orange-600 transition-all duration-300",disabled:a,children:j?e.jsx(f,{color:"#FFF",size:10}):"Update"})})]})})]})};export{ae as default};
