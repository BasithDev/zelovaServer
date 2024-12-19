import{P as o,r as t,j as e,m as U,Q as F,aj as Q,aO as _,aP as q,aQ as P,aR as T,aS as B,aT as I,aU as $,B as v}from"./index-C0g0oOAM.js";import{H as k}from"./Header--2QA83I5.js";const N=({balance:r})=>e.jsxs("div",{className:`bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl shadow-lg p-8 relative overflow-hidden text-white 
      hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group`,children:[e.jsx("div",{className:`absolute top-0 right-0 w-40 h-40 transform translate-x-10 -translate-y-10
        group-hover:translate-x-8 group-hover:-translate-y-8 transition-all duration-300`,children:e.jsx("div",{className:"w-full h-full bg-white/10 rounded-full"})}),e.jsx("div",{className:`absolute -bottom-4 -left-4 w-32 h-32 transform
        group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-300`,children:e.jsx("div",{className:"w-full h-full bg-white/10 rounded-full"})}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300",children:e.jsx(P,{className:"text-yellow-300 text-2xl group-hover:rotate-12 transition-transform duration-300"})}),e.jsx("h2",{className:"text-2xl font-medium text-white/90",children:"Balance"})]}),e.jsxs("div",{className:"flex items-baseline gap-2 mb-3 group-hover:translate-x-1 transition-transform duration-300",children:[e.jsx("span",{className:"text-5xl font-bold",children:r}),e.jsx("span",{className:"text-xl opacity-90",children:"coins"})]}),e.jsx("p",{className:"text-sm text-white/80 group-hover:text-white transition-colors duration-300",children:"Use coins to pay on your next order"})]})]});N.propTypes={balance:o.number.isRequired};const m=({user:r,onSelect:l,selected:n})=>e.jsxs("div",{onClick:()=>l(r),className:`flex items-center gap-4 p-4 ${n?"bg-orange-50":"hover:bg-gray-50"} 
        cursor-pointer transition-colors rounded-lg border-2 ${n?"border-orange-400":"border-transparent"}`,children:[e.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center ${n?"bg-orange-100 text-orange-600":"bg-gray-100 text-gray-600"}`,children:r.profilePicture?e.jsx("img",{referrerPolicy:"no-referrer",src:r==null?void 0:r.profilePicture,alt:r.fullname,className:"w-full h-full object-cover rounded-full"}):e.jsx(T,{className:"text-2xl"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-medium text-gray-800",children:r.fullname}),e.jsx("p",{className:"text-sm text-gray-500",children:r.email})]}),n&&e.jsx("div",{className:"w-3 h-3 bg-orange-400 rounded-full"})]});m.propTypes={user:o.shape({_id:o.string.isRequired,fullname:o.string.isRequired,email:o.string.isRequired,profilePicture:o.string}).isRequired,onSelect:o.func.isRequired,selected:o.bool.isRequired};const A=(r,l)=>{const[n,d]=t.useState(r);return t.useEffect(()=>{const a=setTimeout(()=>{d(r)},l);return()=>{clearTimeout(a)}},[r,l]),n},z=()=>{const[r,l]=t.useState(""),[n,d]=t.useState(""),[a,u]=t.useState(null),[c,g]=t.useState(""),[f,w]=t.useState(0),[p,b]=t.useState([]),[S,C]=t.useState(!0),[j,h]=t.useState([]),x=A(n,500),y=async()=>{try{const s=await B();w(s.data.zcoins.balance);const i=s.data.zcoins.lastSentUserIds;i.length>0?b(i):b([])}catch(s){console.error("Error fetching coins or users:",s)}finally{C(!1)}};t.useEffect(()=>{y()},[]),t.useEffect(()=>{(async()=>{if(x.trim())try{const i=await I(x);h(i.data.users)}catch(i){console.error("Error searching users:",i),h([])}else h([])})()},[x]);const R=s=>{d(s.target.value)},E=async()=>{try{const s=parseInt(c);a&&s&&(await $({receiverId:a._id,amountNum:s}),v.success("Coins sent successfully")),g(""),y(),u(null)}catch(s){console.error("Error sending coins:",s),v.error("Error sending coins")}};return e.jsxs(U.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.4},className:"min-h-screen bg-gray-50",children:[e.jsx(F,{position:"top-right"}),e.jsx(k,{searchQuery:r,onSearchChange:l,placeholderText:"Search foods, restaurants, etc..."}),e.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-5xl",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Coins"}),S?e.jsx("div",{className:"bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl shadow-lg p-8 relative overflow-hidden text-white",children:e.jsx("div",{className:"flex items-center justify-center h-32",children:e.jsx("div",{className:"animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full"})})}):e.jsx(N,{balance:f}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-4",children:"Share Coins"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6",children:[e.jsxs("div",{className:"relative mb-6",children:[e.jsx(Q,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),e.jsx("input",{type:"text",placeholder:"Search users...",className:"w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500",value:n,onChange:R})]}),e.jsx("div",{className:"space-y-2 max-h-[300px] overflow-y-auto",children:j.length>0?j.map(s=>e.jsx(m,{user:s,onSelect:u,selected:(a==null?void 0:a._id)===s._id},s._id)):p.length>0?p.map(s=>e.jsx(m,{user:s,onSelect:u,selected:(a==null?void 0:a._id)===s._id},s._id)):e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[e.jsx(_,{className:"text-4xl mb-2"}),e.jsx("p",{children:"No recent transactions / search a user"})]})})]}),e.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6",children:[e.jsx("h3",{className:"font-medium text-gray-800 mb-4",children:"Enter Amount"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"amount",className:"block text-sm font-medium text-gray-700 mb-1",children:"Number of coins"}),e.jsx("input",{type:"number",id:"amount",value:c,onChange:s=>g(s.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400",placeholder:"Enter amount",min:"1",max:f})]}),e.jsxs("button",{onClick:E,disabled:!a||!c,className:`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
                    ${a&&c?"bg-orange-500 hover:bg-orange-600 text-white":"bg-gray-100 text-gray-400 cursor-not-allowed"} transition-colors`,children:[e.jsx(q,{className:a&&c?"text-white":"text-gray-400"}),"Share Coins"]})]})]})]})]})]})]})};export{z as default};
