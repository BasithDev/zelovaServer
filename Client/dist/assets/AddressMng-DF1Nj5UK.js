import{r as o,j as e,Q as w,m as x,b2 as v,b3 as A,B as t,b4 as E,b5 as C}from"./index-_sbS5Ts6.js";import{c as k,b as P,d as F}from"./index-CHPngtjJ.js";const I=()=>{const[d,n]=o.useState([]),[g,i]=o.useState(!1),[c,u]=o.useState(!1),[h,m]=o.useState(null),[a,r]=o.useState({label:"",address:"",phone:""}),p=async()=>{try{const s=await v();n(s.data.addresses||[])}catch(s){console.error("Error fetching addresses:",s),n([])}};o.useEffect(()=>{p()},[]);const b=async()=>{if(a.label&&a.address&&a.phone)try{const s=await A(a);s.data.address&&(n(l=>[...l||[],s.data.address]),r({label:"",address:"",phone:""}),i(!1),t.success("New Address Added!"))}catch(s){console.error("Error adding address:",s),t.error("Failed to add address. Please try again.")}else t.error("Please fill in all fields")},f=async s=>{try{await E(s),n(d.filter(l=>l._id!==s)),t.success("Address deleted successfully!")}catch(l){console.error("Error deleting address:",l),t.error("Failed to delete address. Please try again.")}},y=s=>{r({label:s.label,address:s.address,phone:s.phone}),m(s._id),u(!0),i(!0)},N=async()=>{if(a.label&&a.address&&a.phone)try{await C(h,a);const s=d.map(l=>l._id===h?{...l,...a}:l);n(s),r({label:"",address:"",phone:""}),i(!1),u(!1),m(null),t.success("Address updated successfully!")}catch(s){console.error("Error updating address:",s),t.error("Failed to update address. Please try again.")}else t.error("Please fill in all fields")},j=()=>{r({label:"",address:"",phone:""}),i(!1),u(!1),m(null)};return e.jsxs("div",{className:"relative flex flex-col lg:flex-row p-4 md:p-6 gap-4 md:gap-6 min-h-screen bg-gray-50",children:[e.jsx(w,{position:"top-right"}),e.jsx("div",{className:"w-full lg:w-[60%]",children:e.jsxs(x.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"bg-white p-4 md:p-6 rounded-lg shadow-md",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-gray-800",children:"Saved Addresses"}),(d==null?void 0:d.length)>0?e.jsx("ul",{className:"space-y-4",children:d.map(s=>e.jsxs("li",{className:"relative cursor-pointer p-3 md:p-4 border rounded-md bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all",children:[e.jsxs("div",{className:"absolute top-2 right-2 flex gap-1 md:gap-2",children:[e.jsx("button",{onClick:()=>y(s),className:"text-blue-600 bg-gray-100 p-2 md:p-3 rounded-full shadow hover:bg-blue-100 hover:text-blue-700 transition-all focus:outline-none focus:ring focus:ring-blue-300",children:e.jsx(k,{className:"text-lg md:text-xl"})}),e.jsx("button",{onClick:()=>f(s._id),className:"text-red-600 bg-gray-100 p-2 md:p-3 rounded-full shadow hover:bg-red-100 hover:text-red-700 transition-all focus:outline-none focus:ring focus:ring-red-300",children:e.jsx(P,{className:"text-lg md:text-xl"})})]}),e.jsxs("div",{className:"flex flex-col gap-1 md:gap-2 pr-16 md:pr-24",children:[e.jsx("span",{className:"font-medium text-gray-900",children:s.label}),e.jsxs("p",{className:"text-sm text-gray-700",children:["Address : ",s.address]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Phone: ",s.phone]})]})]},s._id))}):e.jsx("p",{className:"text-gray-500",children:"No addresses saved yet."})]})}),e.jsxs(x.div,{initial:{x:"100%"},animate:{x:g?0:"100%"},transition:{type:"tween",duration:.3},className:"fixed top-0 right-0 w-full md:w-[400px] lg:w-[450px] h-full bg-white shadow-xl p-4 md:p-6 overflow-auto z-10",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold mb-4 text-blue-500",children:c?"Edit Address":"Add New Address"}),e.jsxs("div",{className:"mb-4 md:mb-6",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Label"}),e.jsx("input",{type:"text",value:a.label,onChange:s=>r({...a,label:s.target.value}),className:"w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300",placeholder:"e.g., Home, Office"})]}),e.jsxs("div",{className:"mb-4 md:mb-6",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Address"}),e.jsx("textarea",{value:a.address,onChange:s=>r({...a,address:s.target.value}),className:"w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300",placeholder:"Enter your address",rows:"4"})]}),e.jsxs("div",{className:"mb-4 md:mb-6",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone Number"}),e.jsx("input",{type:"text",value:a.phone,onChange:s=>r({...a,phone:s.target.value}),className:"w-full p-2 md:p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300",placeholder:"Enter your phone number"})]}),e.jsxs("div",{className:"flex gap-3 mt-6",children:[e.jsx("button",{onClick:c?N:b,className:"flex-1 bg-blue-500 text-white py-2 md:py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring focus:ring-blue-300",children:c?"Update Address":"Add Address"}),e.jsx("button",{onClick:j,className:"flex-1 bg-gray-200 text-gray-800 py-2 md:py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring focus:ring-gray-400",children:"Cancel"})]})]}),!g&&e.jsxs(x.button,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6,ease:"easeOut"},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>i(!0),className:"fixed bottom-20 lg:bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-[11] flex items-center gap-2",children:[e.jsx(F,{className:"text-2xl"}),e.jsx("span",{className:"hidden md:inline",children:"New Address"})]})]})};export{I as default};
