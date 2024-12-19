import{R as b,aF as R,r as x,aG as _,j as e,m as y,E as S}from"./index-CayrqlUJ.js";import{u as O,c as P,a as j}from"./index.esm-OkektUg8.js";import{P as E}from"./PrimaryBtn-BDdjfxVD.js";import{l as I}from"./cropper-Bkq8wAXt.js";import{S as q}from"./sweetalert2.esm.all-D3pEHXw3.js";import{u as F}from"./uploadImageToCloud-BFRfkgxe.js";import{B as T}from"./BeatLoader-C92O3Hv_.js";const C=[{key:"title",getter:t=>t.getTitle()},{key:"html",getter:t=>t.getHtmlContainer()},{key:"confirmButtonText",getter:t=>t.getConfirmButton()},{key:"denyButtonText",getter:t=>t.getDenyButton()},{key:"cancelButtonText",getter:t=>t.getCancelButton()},{key:"footer",getter:t=>t.getFooter()},{key:"closeButtonHtml",getter:t=>t.getCloseButton()},{key:"iconHtml",getter:t=>t.getIconContent()},{key:"loaderHtml",getter:t=>t.getLoader()}],N=()=>{};function D(t){function g(s){const o={},n={},a=C.map(m=>m.key);return Object.entries(s).forEach(m=>{let[d,c]=m;a.includes(d)&&b.isValidElement(c)?(o[d]=c,n[d]=" "):n[d]=c}),[o,n]}function h(s,o){Object.entries(o).forEach(n=>{let[a,m]=n;const c=C.find(r=>r.key===a).getter(t),i=R(c);i.render(m),s.__roots.push(i)})}function f(s){s.__roots.forEach(o=>{o.unmount()}),s.__roots=[]}return class extends t{static argsToParams(s){if(b.isValidElement(s[0])||b.isValidElement(s[1])){const o={};return["title","html","icon"].forEach((n,a)=>{s[a]!==void 0&&(o[n]=s[a])}),o}else return t.argsToParams(s)}_main(s,o){this.__roots=[],this.__params=Object.assign({},o,s);const[n,a]=g(this.__params),m=a.willOpen||N,d=a.didOpen||N,c=a.didDestroy||N;return super._main(Object.assign({},a,{willOpen:i=>{h(this,n),m(i)},didOpen:i=>{setTimeout(()=>{d(i)})},didDestroy:i=>{c(i),f(this)}}))}update(s){Object.assign(this.__params,s),f(this);const[o,n]=g(this.__params);super.update(n),h(this,o)}}}const z=()=>{const[t,g]=x.useState(null),[h,f]=x.useState(""),[s,o]=x.useState(null),[n,a]=x.useState(!1),[m,d]=x.useState(!1),c=D(q),i=x.useRef(null),r=O({initialValues:{restaurantName:"",address:"",description:""},validationSchema:P({restaurantName:j().required("Restaurant name is required"),address:j().required("Address is required"),description:j().required("Description is required")}),onSubmit:async u=>{try{d(!0);const l=await F(s);await _({restaurantName:u.restaurantName,address:u.address,description:u.description,license:{url:l.secure_url,public_id:l.public_id}}),c.fire({title:e.jsx("p",{className:"text-2xl font-semibold",children:"Request Submitted!"}),text:"Your vendor request was successfully submitted.",icon:"success",iconColor:"#10B981",showConfirmButton:!0,confirmButtonText:"OK",background:"#f3f4f6",color:"#111827",buttonsStyling:!1,customClass:{popup:"rounded-lg p-6 shadow-lg",confirmButton:"bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition duration-200",cancelButton:"bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"}})}catch(l){console.error("Error submitting form:",l),c.fire({title:e.jsx("p",{className:"text-2xl font-semibold",children:"Request Failed"}),text:"There was an error submitting your vendor request. Please try again.",icon:"error",iconColor:"#EF4444",showConfirmButton:!0,confirmButtonText:"Retry",background:"#fef2f2",color:"#7f1d1d",buttonsStyling:!1,customClass:{popup:"rounded-3xl p-6 shadow-xl",confirmButton:"bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"}})}finally{d(!1)}}}),w=u=>{const l=u.target.files[0];if(l&&l.type.startsWith("image/")){f("");const p=new FileReader;p.onloadend=()=>{g(p.result),a(!0)},p.readAsDataURL(l)}else f("Please select a valid image file")},v=()=>{var l;const u=(l=i.current)==null?void 0:l.cropper;if(u){const p=u.getCroppedCanvas();p&&p.toBlob(B=>{const k=URL.createObjectURL(B);o(k),a(!1)},"image/jpeg")}};return e.jsxs(y.div,{className:`${s?"h-fit":"h-screen"} p-6 bg-amber-50`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[e.jsxs("h2",{className:"text-3xl font-bold text-center mb-10",children:["Become a Partner With ",e.jsx("span",{className:"text-orange-500",children:"Zelova"})]}),e.jsxs("form",{onSubmit:r.handleSubmit,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xl font-semibold mb-2",children:"Upload License"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:w,className:"hidden",id:"imageUpload"}),e.jsx("label",{htmlFor:"imageUpload",className:"cursor-pointer inline-block bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition duration-200 shadow-md",children:"Choose File"})]}),h&&e.jsx("p",{className:"text-red-500 text-sm mt-2",children:h})]}),s&&e.jsxs("div",{className:"bg-white space-y-3 p-3 flex-col justify-center items-center flex shadow-2xl rounded-2xl w-fit transition-all duration-200",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Cropped Image Preview"}),e.jsx("img",{src:s,alt:"Cropped",className:"h-56 object-cover rounded-md border border-gray-300"}),e.jsx("button",{type:"button",onClick:()=>a(!0),className:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200",children:"Crop Again"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xl font-semibold mb-2",children:"Restaurant Name"}),e.jsx("input",{type:"text",name:"restaurantName",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.restaurantName,className:"w-full border rounded-md px-3 py-2"}),r.touched.restaurantName&&r.errors.restaurantName&&e.jsx("p",{className:"text-red-500 text-sm",children:r.errors.restaurantName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xl font-semibold mb-2",children:"Address"}),e.jsx("textarea",{name:"address",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.address,className:"w-full border rounded-md px-3 py-2"}),r.touched.address&&r.errors.address&&e.jsx("p",{className:"text-red-500 text-sm",children:r.errors.address})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xl font-semibold mb-2",children:"Description"}),e.jsx("textarea",{name:"description",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.description,className:"w-full border rounded-md px-3 py-2",rows:"4"}),r.touched.description&&r.errors.description&&e.jsx("p",{className:"text-red-500 text-sm",children:r.errors.description})]}),e.jsx(E,{text:m?e.jsx(T,{color:"#FFF",size:10}):"Submit Request",className:"py-2 font-bold text-2xl w-full"})]}),e.jsx(S,{children:n&&e.jsx(y.div,{className:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:e.jsxs(y.div,{className:"bg-white p-6 rounded-lg shadow-lg max-w-lg w-full",initial:{y:-50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{duration:.3},children:[e.jsx("h3",{className:"text-xl font-semibold text-center mb-4",children:"Crop Your Image"}),e.jsx(I,{src:t,ref:i,style:{height:400,width:"100%"},aspectRatio:1,guides:!1}),e.jsxs("div",{className:"mt-4 flex justify-end space-x-4",children:[e.jsx("button",{onClick:v,className:"bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200",children:"Save Crop"}),e.jsx("button",{onClick:()=>a(!1),className:"bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200",children:"Cancel"})]})]})})})]})};export{z as default};
