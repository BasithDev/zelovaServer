import{ai as p,e as j,a as v,r as a,j as e,aj as N,m as h,ak as y,q as w,al as C,t as S,am as q,an as k,ao as E,ap as P,aq as F,ar as L}from"./index-CYBSKVP3.js";const R=()=>{const n=p(s=>s.adminData.data),b=j(),c=v(),[i,g]=a.useState(0),d=a.useMemo(()=>["dashboard","requests","user-manage","vendor-manage","user-issues","category-manage","coupon-manage","send-mail"],[]),[t,u]=a.useState(""),[o,m]=a.useState([]);a.useEffect(()=>{const s=async()=>{try{const l=await L();g(l.data.count)}catch(l){console.error("Error fetching pending requests:",l)}};s();const r=setInterval(s,3e4);return()=>clearInterval(r)},[]),a.useEffect(()=>{m(t?d.filter(s=>s.toLowerCase().includes(t.toLowerCase())):[])},[d,t]);const f=s=>{u(s.target.value)},x=s=>{const r=s==="dashboard"?"/admin":`/admin/${s}`;c(r),u("")};return e.jsxs("div",{className:"flex bg-white justify-between border-b-2 p-3 items-center mb-3",children:[e.jsx("div",{className:"relative w-1/2",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Search",value:t,onChange:f,className:"pl-10 pr-4 py-3 w-full rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx(N,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"}),o.length>0?e.jsx(h.ul,{initial:{opacity:0},animate:{opacity:1},className:"absolute bg-white border border-gray-300 w-full mt-1 z-50 rounded-md shadow-lg",children:o.map((s,r)=>e.jsxs(h.li,{onClick:()=>x(s),className:"cursor-pointer hover:bg-gray-100 p-2 flex items-center",children:[s==="dashboard"&&e.jsx(y,{className:"mr-2 text-blue-500"}),s.includes("user")&&e.jsx(w,{className:"mr-2 text-green-500"}),s.includes("issue")&&e.jsx(C,{className:"mr-2 text-red-500"}),s.includes("vendor")&&e.jsx(S,{className:"mr-2 text-orange-500"}),s.includes("category")&&e.jsx(q,{className:"mr-2 text-red-500"}),s.includes("coupon")&&e.jsx(k,{className:"mr-2 text-yellow-500"}),s.includes("mail")&&e.jsx(E,{className:"mr-2 text-teal-500"}),s.includes("requests")&&e.jsx(P,{className:"mr-2 text-pink-500"}),e.jsx("span",{children:s.replace("-"," ").replace(/\b\w/g,l=>l.toUpperCase())})]},r))}):t&&o.length===0&&e.jsxs("div",{className:"absolute bg-white border border-gray-300 w-full mt-1 z-50 rounded-md shadow-lg p-2 text-center cursor-pointer hover:bg-gray-100",onClick:()=>x("dashboard"),children:["Option not available, would you like to go to ",e.jsx("span",{className:"text-blue-500 font-bold",children:"Dashboard"}),"?"]})]})}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(F,{onClick:()=>c("/admin/requests"),className:`text-yellow-500 ${b.pathname==="/admin/requests"?"bg-blue-500":"hover:bg-blue-400"} cursor-pointer transition-all duration-200 text-4xl p-2 rounded-full`}),i>0&&e.jsx("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center",children:i})]}),e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx("div",{children:e.jsx("p",{className:"font-semibold text-xl",children:(n==null?void 0:n.fullname)||"admin name"})})})]})]})};export{R as A};
