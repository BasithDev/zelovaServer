import{e as f,a as j,r,j as e,m as t,bG as y,E as b,bH as v,bI as w}from"./index-Ch9wd4yu.js";const k=()=>{const o=f(),{orderId:d,coinsWon:s}=o.state||{},i=j(),[a,x]=r.useState(!1),[m,n]=r.useState(0);r.useEffect(()=>{const g=setTimeout(()=>{if(a&&s){let l=0;const c=setInterval(()=>{l+=Math.ceil(s/20),l>=s?(n(s),clearInterval(c)):n(l)},50);return()=>clearInterval(c)}},500);return()=>clearTimeout(g)},[a,s]);const p=()=>{i("/orders")},u=()=>{i("/")},h=()=>{x(!0)};return e.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-4",children:e.jsxs(t.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},className:"w-full max-w-md text-center p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-center bg-white",children:[e.jsxs(t.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:260,damping:20},className:"relative",children:[e.jsx("div",{className:"absolute -inset-1 bg-green-500 rounded-full opacity-20 animate-pulse"}),e.jsx(y,{className:"text-green-500 w-16 sm:w-20 h-16 sm:h-20 relative"})]}),e.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"mt-6 space-y-2",children:[e.jsx("h1",{className:"text-2xl sm:text-4xl font-bold text-gray-800",children:"Order Placed Successfully!"}),e.jsxs("p",{className:"text-base sm:text-lg text-gray-700",children:["Order ID: ",e.jsx("span",{className:"font-semibold",children:d})]}),e.jsx("p",{className:"text-sm sm:text-base text-gray-600",children:"Your order is being prepared. Track its status on the orders page."})]}),e.jsx(b,{mode:"wait",children:a?e.jsx(t.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},className:"mt-8 w-full sm:w-80 h-32 bg-gradient-to-r from-purple-100 to-orange-100 rounded-xl flex items-center justify-center p-4 shadow-inner",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-lg sm:text-xl text-gray-800",children:"Congratulations! 🎉"}),e.jsxs("p",{className:"text-2xl sm:text-3xl font-bold text-orange-500 mt-2",children:["+",m," coins"]})]})},"reward-reveal"):e.jsx(t.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:"mt-8 w-full sm:w-80",children:e.jsxs(t.div,{onClick:h,className:"relative w-full h-32 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-xl cursor-pointer shadow-lg overflow-hidden group",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e.jsx("div",{className:"absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-300"}),e.jsx("div",{className:"relative h-full flex items-center justify-center",children:e.jsx("p",{className:"text-lg sm:text-xl text-white font-bold px-4 text-center",children:"Scratch to Reveal Your Reward!"})})]})},"scratch-card")}),e.jsxs("div",{className:"mt-8 w-full grid grid-cols-2 gap-4",children:[e.jsxs(t.button,{onClick:u,className:"flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition duration-300",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e.jsx(v,{className:"text-lg"}),e.jsx("span",{className:"text-sm sm:text-base",children:"Home"})]}),e.jsxs(t.button,{onClick:p,className:"flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition duration-300",whileHover:{scale:1.02},whileTap:{scale:.98},children:[e.jsx(w,{className:"text-lg"}),e.jsx("span",{className:"text-sm sm:text-base",children:"Track Order"})]})]})]})})};export{k as default};
