import{r as s,j as e,aj as S,m as d,E as F,aI as C,aJ as E}from"./index-Ch9wd4yu.js";import{b as H}from"./index-BRsIRrf1.js";import{H as L}from"./Header-DyU6ME6H.js";import{d as M}from"./debounce-j2yoVX8S.js";const _=()=>{const[i,u]=s.useState([]),[m,h]=s.useState(""),[x,f]=s.useState(""),[a,g]=s.useState(""),[o,p]=s.useState("none"),[v,n]=s.useState(!1);s.useEffect(()=>{(async()=>{try{const r=await C();u(r.data.favorites),n(r.data.favorites.length===0)}catch(r){console.error("Error fetching favourites:",r),n(!0)}})()},[]);const y=s.useMemo(()=>M(t=>{g(t)},300),[]),j=t=>{const r=t.target.value;f(r),y(r)},l=s.useMemo(()=>{const t=a.toLowerCase().trim();return t?i.filter(r=>r.item.name.toLowerCase().includes(t)||r.item.description.toLowerCase().includes(t)||r.item.restaurantId.name.toLowerCase().includes(t)):i},[a,i]),c=s.useMemo(()=>o==="none"?l:[...l].sort((t,r)=>o==="lowToHigh"?t.item.price-r.item.price:o==="highToLow"?r.item.price-t.item.price:0),[l,o]),N=async t=>{try{await E({foodItemId:t}),u(r=>r.filter(w=>w.item._id!==t))}catch(r){console.error("Error removing favorite:",r)}},b=()=>{c.length===0&&n(!0)};return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(L,{searchQuery:m,onSearchChange:t=>h(t.target.value),placeholderText:"Search foods, restaurants, etc..."}),e.jsx("div",{className:"px-8 py-3",children:e.jsxs("div",{className:"flex justify-between items-center gap-4",children:[e.jsxs("div",{className:"relative flex-1 max-w-2xl",children:[e.jsx("input",{type:"text",value:x,onChange:j,placeholder:"Search in favourites...",className:"w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 shadow-sm"}),e.jsx("div",{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",children:e.jsx(S,{size:16})})]}),e.jsxs("select",{value:o,onChange:t=>p(t.target.value),className:"w-32 px-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm cursor-pointer",children:[e.jsx("option",{value:"none",children:"Sort by"}),e.jsx("option",{value:"lowToHigh",children:"Price: Low to High"}),e.jsx("option",{value:"highToLow",children:"Price: High to Low"})]})]})}),e.jsxs("div",{className:"pb-20 px-8",children:[v&&!a&&e.jsxs(d.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"flex flex-col items-center justify-center py-12",children:[e.jsx("p",{className:"text-xl text-gray-600",children:"No favourites added yet"}),e.jsx("p",{className:"text-gray-500 mt-2",children:"Start adding items to your favourites!"})]}),!c.length&&a&&e.jsxs("div",{className:"flex flex-col items-center justify-center py-12",children:[e.jsx("p",{className:"text-xl text-gray-600",children:`No favourites found matching - "${a}"`}),e.jsx("p",{className:"text-gray-500 mt-2",children:"Try a different search term"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:e.jsx(F,{onExitComplete:b,children:c.map(t=>e.jsxs(d.div,{className:"bg-white rounded-lg shadow-md overflow-hidden hover:bg-orange-50 cursor-pointer transition-all duration-200 hover:shadow-lg relative",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:[e.jsxs("div",{className:"relative",children:[t.item.image&&e.jsx(d.img,{src:t.item.image,alt:t.item.name,className:"w-full h-64 object-cover",whileHover:{scale:1.05},transition:{duration:.3}}),t.item.offers&&e.jsx("div",{className:"absolute bottom-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md",children:t.item.offers.offerName})]}),e.jsx("div",{className:"absolute top-3 right-3",children:e.jsx("button",{onClick:()=>N(t.item._id),className:"focus:outline-none",children:e.jsx(H,{className:"text-red-500 text-2xl hover:scale-110 transition-all duration-300"})})}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"text-xl font-bold text-gray-900 truncate mb-2",children:t.item.name}),e.jsx("p",{className:"text-sm text-gray-600 line-clamp-2 mb-3",children:t.item.description}),e.jsxs("p",{className:"text-lg font-semibold text-green-500 mb-2",children:["₹",t.item.price]}),t.item.restaurantId&&e.jsxs("div",{className:"text-gray-700",children:[e.jsxs("p",{className:"font-bold text-gray-800 text-xl",children:[e.jsx("span",{className:"font-semibold text-sm text-indigo-700",children:"From: "})," ",t.item.restaurantId.name]}),e.jsx("p",{className:"text-gray-500",children:t.item.restaurantId.address})]})]})]},t._id))})})]})]})};export{_ as default};