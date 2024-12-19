import{r as a,ai as p,j as e,E as h,m as g,d as u,b1 as b}from"./index-Ch9wd4yu.js";import{H as f}from"./Header-DyU6ME6H.js";const y=()=>{const[n,c]=a.useState(""),r=p(t=>{var s;return(s=t==null?void 0:t.userLocation)==null?void 0:s.coordinates}),[l,i]=r?Object.values(r):[0,0],[o,x]=a.useState([]),[d,m]=a.useState(!0);return a.useEffect(()=>{(async()=>{try{const s=await b(l,i);x(s.data.supplies)}catch(s){console.error("Error fetching supplies:",s)}finally{m(!1)}})()},[l,i,r]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",children:[e.jsx(f,{searchQuery:n,onSearchChange:t=>c(t.target.value),placeholderText:"Search foods, restaurants, etc..."}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h1",{className:"text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400",children:"Get Supplies"}),e.jsx("p",{className:"mt-4 text-xl text-gray-600",children:"Receive Support and Essential Supplies with Ease"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center",children:"Available Supplies Near You"}),d?e.jsx("div",{className:"flex justify-center items-center h-64",children:e.jsx("div",{className:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 sm:h-32 sm:w-32"})}):o.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center h-64 text-center px-4",children:[e.jsx("img",{src:"/no-data.svg",alt:"No supplies",className:"w-40 h-40 mb-4 opacity-60"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-semibold text-gray-700 mb-2",children:"No Supplies Available"}),e.jsx("p",{className:"text-gray-500",children:"There are currently no supplies shared in your area."})]}):e.jsx(h,{children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6",children:o.map(t=>e.jsxs(g.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"bg-white rounded-xl shadow-md p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl relative",children:[e.jsxs("span",{className:"absolute top-3 right-3 bg-orange-100 text-orange-600 font-semibold text-sm rounded-full px-3 py-1",children:[t.distance.toFixed(1)," km"]}),e.jsx("h2",{className:"text-lg sm:text-xl font-semibold text-gray-800 mb-2 pr-20",children:t.heading}),e.jsx("p",{className:"text-gray-600 mb-4 line-clamp-3",children:t.description}),e.jsx("div",{className:"flex items-center text-gray-600 text-sm sm:text-base",children:e.jsxs("span",{className:"flex items-center gap-1",children:["Contact :",t.contactNumber]})}),e.jsx("div",{className:"mt-3 text-xs sm:text-sm text-gray-500",children:e.jsxs("p",{children:["Posted: ",new Date(t.createdAt).toLocaleString()]})}),e.jsx("button",{className:"absolute bottom-3 right-3 bg-gray-100 text-gray-500 rounded-full p-2.5 sm:p-3 hover:bg-orange-100 hover:text-orange-500 transition-all duration-300 shadow-sm",onClick:()=>window.location.href=`tel:${t.contactNumber}`,"aria-label":"Call supplier",children:e.jsx(u,{size:16})})]},t._id))})})]})]})};export{y as default};
