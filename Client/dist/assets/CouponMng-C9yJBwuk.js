import{r as l,j as t,Q as S,E as b,m as j,Y as D,B as a,Z as $,_,$ as z}from"./index-CayrqlUJ.js";import{F as O,a as q}from"./index-DDPlpqAo.js";import{A as B}from"./AdminSearchBar-Skp478av.js";const H=()=>{const[r,C]=l.useState([]),[f,c]=l.useState(!1),[d,g]=l.useState(null),[n,p]=l.useState(1),[i,N]=l.useState(5),[o,m]=l.useState({name:"",code:"",description:"",type:"percentage",discount:"",minPrice:"",expiry:""}),u=async()=>{try{const e=await D();C(e.data)}catch(e){console.error(e),a.error("Failed to fetch coupons",{position:"top-right",autoClose:3e3})}};l.useEffect(()=>{u()},[]);const h=e=>{const{name:s,value:k}=e.target;m(E=>({...E,[s]:k}))},v=async()=>{try{if(!o.name||!o.code||!o.discount||!o.minPrice){a.error("Please fill all required fields",{position:"top-right",autoClose:3e3});return}await $(o),a.success("Coupon added successfully",{position:"top-right",autoClose:3e3}),x(),c(!1),u()}catch(e){console.error(e),a.error("Failed to add coupon",{position:"top-right",autoClose:3e3})}},w=async e=>{try{await _(e),a.success("Coupon deleted successfully",{position:"top-right",autoClose:3e3}),u()}catch(s){console.error(s),a.error("Failed to delete coupon",{position:"top-right",autoClose:3e3})}},P=async()=>{try{if(!o.name||!o.code||!o.discount||!o.minPrice){a.error("Please fill all required fields",{position:"top-right",autoClose:3e3});return}await z(d._id,o),a.success("Coupon updated successfully",{position:"top-right",autoClose:3e3}),x(),c(!1),u()}catch(e){console.error(e),a.error("Failed to update coupon",{position:"top-right",autoClose:3e3})}},A=e=>{g(e),m({...e}),c(!0)},y=()=>{x(),c(!0)},x=()=>{m({name:"",code:"",description:"",type:"percentage",discount:"",minPrice:"",expiry:""}),g(null)},M=[{name:"name",placeholder:"Coupon Name",type:"text"},{name:"code",placeholder:"Coupon Code",type:"text"},{name:"description",placeholder:"Description",type:"textarea"},{name:"type",placeholder:"Type",type:"select",options:["percentage","amount"]},{name:"discount",placeholder:"Discount",type:"number"},{name:"minPrice",placeholder:"Minimum Order Amount",type:"number"},{name:"expiry",placeholder:"Expiry Date (Optional)",type:"datetime-local"}],F=e=>e.type==="textarea"?t.jsx("textarea",{name:e.name,placeholder:e.placeholder,value:o[e.name],onChange:h,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"},e.name):e.type==="select"?t.jsx("select",{name:e.name,value:o[e.name],onChange:h,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",children:e.options.map(s=>t.jsx("option",{value:s,children:s.charAt(0).toUpperCase()+s.slice(1)},s))},e.name):t.jsx("input",{type:e.type,name:e.name,placeholder:e.placeholder,value:o[e.name],onChange:h,className:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"},e.name);return t.jsxs("div",{children:[t.jsx(B,{}),t.jsx(S,{}),t.jsx("h1",{className:"text-3xl ms-4 font-bold text-gray-800",children:"Manage Coupons"}),t.jsxs("div",{className:"flex justify-between items-center px-4 mt-4",children:[t.jsxs("select",{value:i,onChange:e=>{N(Number(e.target.value)),p(1)},className:"p-2 border border-gray-300 rounded-lg outline-none",children:[t.jsx("option",{value:5,children:"5 per page"}),t.jsx("option",{value:10,children:"10 per page"}),t.jsx("option",{value:20,children:"20 per page"})]}),r.length>0&&t.jsx("button",{onClick:y,className:"bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition",children:"Add New Coupon"})]}),t.jsx("div",{className:"p-4",children:r.length===0?t.jsxs("div",{className:"text-center py-8",children:[t.jsx("p",{className:"text-gray-600 mb-4",children:"No coupons available"}),t.jsx("button",{onClick:y,className:"bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition",children:"Add New Coupon"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.jsx(b,{children:r.slice((n-1)*i,n*i).map(e=>t.jsxs(j.div,{className:"p-5 bg-white border border-gray-200 rounded-lg shadow-md flex justify-between items-start hover:shadow-2xl transition-all",initial:{opacity:0,y:60},animate:{opacity:1,y:0},whileHover:{scale:1.02},transition:{type:"tween",duration:.1},children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-lg font-semibold text-gray-700",children:e.name}),t.jsxs("p",{className:"text-sm text-gray-500",children:["Code: ",t.jsx("span",{className:"font-mono",children:e.code})]}),t.jsxs("p",{className:"text-gray-500",children:["Description: ",e.description]}),t.jsxs("p",{className:"text-gray-500",children:["Discount: ",e.type==="percentage"?`${e.discount}%`:`₹${e.discount}`]}),t.jsxs("p",{className:"text-gray-500",children:["Min. Order: ",e.minPrice?`₹${e.minPrice}`:"No minimum"]}),t.jsxs("p",{className:"text-gray-500",children:["Expires: ",e.expiry?new Date(e.expiry).toLocaleString():"No expiry"]})]}),t.jsxs("div",{className:"flex space-x-1",children:[t.jsx("button",{onClick:()=>A(e),className:"text-blue-500 hover:bg-gray-200 p-2 rounded-full transition-all duration-200 hover:text-blue-600",children:t.jsx(O,{size:20})}),t.jsx("button",{onClick:()=>w(e._id),className:"text-red-500 hover:bg-gray-200 p-2 rounded-full transition-all duration-200 hover:text-red-600",children:t.jsx(q,{size:20})})]})]},e._id))})}),Math.ceil(r.length/i)>1&&t.jsxs("div",{className:"flex justify-center gap-2 mt-6",children:[t.jsx("button",{onClick:()=>p(e=>e-1),disabled:n===1,className:`px-3 py-1 rounded ${n===1?"bg-gray-200 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"Previous"}),[...Array(Math.ceil(r.length/i))].map((e,s)=>t.jsx("button",{onClick:()=>p(s+1),className:`px-3 py-1 rounded ${n===s+1?"bg-blue-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,children:s+1},s+1)),t.jsx("button",{onClick:()=>p(e=>e+1),disabled:n===Math.ceil(r.length/i),className:`px-3 py-1 rounded ${n===Math.ceil(r.length/i)?"bg-gray-200 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"Next"})]})]})}),t.jsx(b,{children:f&&t.jsx(j.div,{className:"fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-96 relative",children:[t.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-800",children:d?"Edit Coupon":"Add Coupon"}),t.jsx("div",{className:"space-y-4",children:M.map(F)}),t.jsxs("div",{className:"flex justify-end space-x-4 mt-6",children:[t.jsx("button",{onClick:()=>c(!1),className:"px-4 py-2 text-gray-600 hover:text-gray-800",children:"Cancel"}),t.jsx("button",{onClick:d?P:v,className:"bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition",children:d?"Update":"Add"})]})]})})})]})};export{H as default};
