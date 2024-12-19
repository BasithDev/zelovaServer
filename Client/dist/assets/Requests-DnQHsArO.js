import{A,j as e,Q as _,r as l,C as E,D as p,m as f,E as k,P as r,H as C,I as y,B as g,J as I,K as P}from"./index-773LaoHc.js";import{A as F}from"./AdminSearchBar-D3DWW-dM.js";import{B as x}from"./BeatLoader-XBix1ygb.js";const L=async()=>{const{data:s}=await P();return s},B=()=>{const{data:s,isLoading:n,isError:a,refetch:o}=A({queryKey:["vendorApplications"],queryFn:L,staleTime:6e4,cacheTime:3e5,refetchInterval:1e4});return n?e.jsx("p",{children:"Loading..."}):a?e.jsx("p",{children:"Error loading vendor requests"}):e.jsxs("div",{className:"pb-3 bg-gray-100 min-h-screen transition-all duration-300",children:[e.jsx(_,{position:"top-right"}),e.jsx(F,{}),e.jsx("h1",{className:"text-2xl mx-3 font-bold mb-4",children:"Vendors Request"}),e.jsx("div",{className:"space-y-4",children:s&&s.length>0?s.map(i=>e.jsx(b,{application:i,refetchApplications:o},i._id)):e.jsx("p",{className:"text-center",children:"No vendor applications available."})})]})},b=({application:s})=>{const[n,a]=l.useState(!1),o=E(),i=p({mutationFn:async t=>{await C(t),await y({public_id:s.license.public_id})},onSuccess:async()=>{g.success("Vendor request accepted!"),o.setQueryData(["vendorApplications"],t=>t.filter(d=>d._id!==s._id))},onError:()=>{g.error("Error accepting vendor request.")}}),c=p({mutationFn:async t=>{await I(t),await y({public_id:s.license.public_id})},onSuccess:async()=>{g.success("Vendor request denied!"),o.setQueryData(["vendorApplications"],t=>t.filter(d=>d._id!==s._id))},onError:()=>{g.error("Error denying vendor request.")}}),h=()=>a(!n);return e.jsxs(f.div,{layout:!0,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"bg-white mx-3 p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex flex-col items-start",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:s.user.profilePicture||"https://placehold.co/60x60",alt:`Profile of ${s.user.fullname}`,className:"w-16 h-16 rounded-full mr-4 border border-gray-300 shadow-sm"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"text-xl font-semibold",children:s.user.fullname}),e.jsx("p",{className:"text-gray-600",children:s.restaurantName}),e.jsx("p",{className:"text-gray-600",children:s.user.email})]})]}),e.jsxs("div",{className:"flex space-x-2 mt-4",children:[e.jsx("button",{onClick:h,className:"font-semibold text-lg transition-all duration-300 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transform hover:scale-105",children:n?"Close":"View"}),e.jsx("button",{onClick:()=>i.mutate(s._id),className:"font-semibold text-lg transition-all duration-300 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transform hover:scale-105",children:i.isPending?e.jsx(x,{color:"#FFF",size:10}):"Accept"}),e.jsx("button",{onClick:()=>c.mutate(s._id),className:"font-semibold text-lg transition-all duration-300 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transform hover:scale-105",children:c.isPending?e.jsx(x,{color:"#FFF",size:10}):"Deny"})]}),e.jsx(k,{children:n&&e.jsxs(f.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"mt-4 bg-gray-100 rounded-md shadow-xl p-4 w-full border-t border-gray-200",children:[e.jsx("p",{children:e.jsx("strong",{children:"License"})}),e.jsx(j,{src:s.license.url,alt:"License Image"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Restaurant Name:"})," ",s.restaurantName]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Address:"})," ",s.address]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," ",s.description]})]})})]})},j=({src:s,alt:n})=>{const[a,o]=l.useState(!1),[i,c]=l.useState(!0),[h,t]=l.useState("50% 50%"),d=l.useRef(null),v=()=>o(u=>!u),N=u=>{const m=d.current.getBoundingClientRect(),q=(u.clientX-m.left)/m.width*100,R=(u.clientY-m.top)/m.height*100;t(`${q}% ${R}%`)},w=()=>{c(!1)};return e.jsxs("div",{className:"flex bg-white p-3 w-fit rounded-2xl space-x-4",children:[e.jsxs("div",{className:"relative w-96 h-96 overflow-hidden border border-gray-300 rounded-lg",onMouseMove:N,onClick:v,ref:d,style:{cursor:"zoom-in",transition:"transform 0.3s ease"},children:[i&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-200",children:e.jsx(x,{color:"#555"})}),e.jsx("img",{src:s,alt:n,onLoad:w,className:"w-full h-full object-cover",style:{transform:a?"scale(1.05)":"scale(1)",transition:"transform 0.3s ease"}})]}),a&&e.jsx("div",{className:"w-96 h-96 border border-gray-300 rounded-lg shadow-lg overflow-hidden",style:{backgroundImage:`url(${s})`,backgroundSize:"200%",backgroundPosition:h,backgroundRepeat:"no-repeat",transition:"background-position 0.1s ease"}})]})};b.propTypes={application:r.shape({_id:r.string.isRequired,restaurantName:r.string.isRequired,description:r.string,address:r.string,license:r.string.isRequired,user:r.shape({profilePicture:r.string,fullname:r.string.isRequired,email:r.string.isRequired}).isRequired}).isRequired,refetchApplications:r.func.isRequired};j.propTypes={src:r.string.isRequired,alt:r.string.isRequired};export{B as default};