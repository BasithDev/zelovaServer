import{A as V,r as d,C as k,j as e,bJ as L,bK as D,bL as G,bM as E,bG as o,bN as $,bO as H,bP as q,bQ as O,bR as B,E as W,m as c,bS as Y,bT as M,bU as Q}from"./index-C0g0oOAM.js";import{A as z}from"./AnalyticsDashboard-DZULaQ4L.js";import"./debounce-FfCMBVjr.js";const Z=()=>{const{data:r={},isLoading:P,isError:I}=V({queryKey:["vendorOrders"],queryFn:Q,refetchInterval:5e3}),[i,T]=d.useState({todaysOrdersCount:0,todaysOrdersPendingCount:0,totalOrders:0,totalSales:0,totalProfit:0});d.useEffect(()=>{(async()=>{try{const t=await Y();T(t.data)}catch(t){console.error("Error fetching dashboard data:",t)}})()},[]);const m=(r==null?void 0:r.data)||[],[n,x]=d.useState({isOpen:!1,orderId:null,newStatus:null,customerName:null}),S=k(),R=async(s,t,a)=>{x({isOpen:!0,orderId:s,newStatus:t,customerName:a})},A=async()=>{var s,t;try{await M({orderId:n.orderId,status:n.newStatus}),await S.invalidateQueries(["vendorOrders"]),x({isOpen:!1,orderId:null,newStatus:null,customerName:null})}catch(a){console.error("Failed to update order status:",a),(t=(s=a.response)==null?void 0:s.data)!=null&&t.message?console.log(a.response.data.message):console.log("Failed to update order status. Please try again.")}};return P?e.jsxs("div",{className:"flex items-center justify-center min-h-screen",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary"}),e.jsx("p",{className:"ml-3",children:"Loading orders..."})]}):I?e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:e.jsx("div",{className:"bg-red-100 p-4 rounded-lg",children:e.jsx("p",{className:"text-red-600",children:"Failed to load orders. Please try again later."})})}):e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx("div",{className:"bg-white shadow-sm",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),e.jsxs("div",{className:"text-left sm:text-right",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Today"}),e.jsx("p",{className:"text-lg font-semibold text-gray-700",children:new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]})]})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-12",children:[e.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",children:e.jsxs("div",{className:"p-4 sm:p-6 flex flex-col items-center justify-center",children:[e.jsx("div",{className:"p-2 sm:p-3 bg-blue-100 rounded-full mb-4",children:e.jsx(L,{className:"w-5 h-5 sm:w-6 sm:h-6 text-blue-600"})}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Orders Today"}),e.jsx("p",{className:"text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-2",children:i.todaysOrdersCount})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",children:e.jsxs("div",{className:"p-4 sm:p-6 flex flex-col items-center justify-center",children:[e.jsx("div",{className:"p-2 sm:p-3 bg-yellow-100 rounded-full mb-4",children:e.jsx(D,{className:"w-5 h-5 sm:w-6 sm:h-6 text-yellow-600"})}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Pending Orders"}),e.jsx("p",{className:"text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-2",children:i.todaysOrdersPendingCount})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",children:e.jsxs("div",{className:"p-4 sm:p-6 flex flex-col items-center justify-center",children:[e.jsx("div",{className:"p-2 sm:p-3 bg-purple-100 rounded-full mb-4",children:e.jsx(G,{className:"w-5 h-5 sm:w-6 sm:h-6 text-purple-600"})}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Orders Placed"}),e.jsx("p",{className:"text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-2",children:i.totalOrders})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",children:e.jsxs("div",{className:"p-4 sm:p-6 flex flex-col items-center justify-center",children:[e.jsx("div",{className:"p-2 sm:p-3 bg-green-100 rounded-full mb-4",children:e.jsx(E,{className:"w-5 h-5 sm:w-6 sm:h-6 text-green-600"})}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Sales"}),e.jsxs("p",{className:"text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-2",children:["₹",i.totalSales.toFixed(2)]})]})}),e.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",children:e.jsxs("div",{className:"p-4 sm:p-6 flex flex-col items-center justify-center",children:[e.jsx("div",{className:"p-2 sm:p-3 bg-red-100 rounded-full mb-4",children:e.jsx(o,{className:"w-5 h-5 sm:w-6 sm:h-6 text-red-600"})}),e.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Total Profit"}),e.jsxs("p",{className:"text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-2",children:["₹",i.totalProfit.toFixed(2)]})]})})]}),e.jsx(z,{fetchReports:$,exportReportToPDF:H,exportReportToExcel:q}),e.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden",children:[e.jsx("div",{className:"p-6 border-b border-gray-200",children:e.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Live Orders"})}),e.jsx("div",{className:"divide-y divide-gray-200",children:Array.isArray(m)&&m.length>0?m.map(s=>{var t,a,h,u,p,g,j,N,f,b,y,w,v;return e.jsx("div",{className:"p-6 hover:bg-gray-50 transition-colors duration-200",children:e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-4",children:[e.jsxs("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium 
                                                    ${((t=s==null?void 0:s.status)==null?void 0:t.toUpperCase())==="PENDING"?"bg-purple-100 text-purple-800":""}
                                                    ${((a=s==null?void 0:s.status)==null?void 0:a.toUpperCase())==="PAID"?"bg-purple-100 text-purple-800":""}
                                                    ${((h=s==null?void 0:s.status)==null?void 0:h.toUpperCase())==="PREPARING"?"bg-yellow-100 text-yellow-800":""}
                                                    ${((u=s==null?void 0:s.status)==null?void 0:u.toUpperCase())==="ON THE WAY"?"bg-blue-100 text-blue-800":""}
                                                    ${((p=s==null?void 0:s.status)==null?void 0:p.toUpperCase())==="DELIVERED"?"bg-green-100 text-green-800":""}
                                                    ${((g=s==null?void 0:s.status)==null?void 0:g.toUpperCase())==="NOT RECEIVED BY CUSTOMER"?"bg-red-100 text-red-800":""}
                                                `,children:[((j=s==null?void 0:s.status)==null?void 0:j.toUpperCase())==="PENDING"?e.jsx(D,{className:"w-4 h-4 mr-2"}):"",((N=s==null?void 0:s.status)==null?void 0:N.toUpperCase())==="PAID"?e.jsx(E,{className:"w-4 h-4 mr-2"}):"",((f=s==null?void 0:s.status)==null?void 0:f.toUpperCase())==="PREPARING"?e.jsx(O,{className:"w-4 h-4 mr-2 animate-spin"}):"",((b=s==null?void 0:s.status)==null?void 0:b.toUpperCase())==="ON THE WAY"?e.jsx(B,{className:"w-4 h-4 mr-2"}):"",((y=s==null?void 0:s.status)==null?void 0:y.toUpperCase())==="DELIVERED"?e.jsx(o,{className:"w-4 h-4 mr-2"}):"",((w=s==null?void 0:s.status)==null?void 0:w.toUpperCase())==="NOT RECEIVED BY CUSTOMER"?e.jsx(o,{className:"w-4 h-4 mr-2"}):"",s==null?void 0:s.status]}),e.jsx("span",{className:"text-lg font-semibold text-gray-900",children:s.orderId})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Customer"}),e.jsx("p",{className:"text-base text-gray-900",children:s.user.name}),e.jsx("p",{className:"text-sm text-gray-500",children:s.user.phoneNumber}),e.jsx("p",{className:"text-sm text-gray-500",children:s.user.address})]}),e.jsxs("div",{className:"bg-gray-100 rounded-lg p-4",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 mb-2",children:"Order Items"}),e.jsx("ul",{className:"space-y-2",children:s.items.map((l,F)=>e.jsxs("li",{className:"flex justify-between text-sm",children:[e.jsxs("span",{className:"text-gray-700",children:[l.quantity,"x ",l.name,l.customizations.length>0&&e.jsx("ul",{className:"text-xs text-gray-500",children:l.customizations.map((C,U)=>e.jsxs("li",{children:[C.fieldName,": ",C.selectedOption.name]},U))})]}),e.jsxs("span",{className:"text-gray-900 font-medium",children:["₹",(l.price*l.quantity).toFixed(2)]})]},F))}),e.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-200 flex justify-between",children:[e.jsx("span",{className:"font-medium",children:"Total"}),e.jsxs("span",{className:"font-bold",children:["₹",s.billDetails.finalAmount.toFixed(2)]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Delivery Address"}),e.jsx("p",{className:"text-base text-gray-900",children:s.user.address})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Order Time"}),e.jsx("p",{className:"text-base text-gray-900",children:new Date(((v=s==null?void 0:s.createdAt)==null?void 0:v.$date)||(s==null?void 0:s.createdAt)).toLocaleTimeString()})]})]})]}),e.jsx("div",{className:"flex-shrink-0 w-full sm:w-auto",children:e.jsxs("select",{value:s.status,onChange:l=>R(s.orderId,l.target.value,s.user.name),className:"block w-full sm:w-48 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200",children:[e.jsx("option",{value:"PENDING",children:"Pending"}),e.jsx("option",{value:"PREPARING",children:"Preparing"}),e.jsx("option",{value:"ON THE WAY",children:"On The Way"}),e.jsx("option",{value:"DELIVERED",children:"Delivered"})]})})]})},s.orderId)}):e.jsx("div",{className:"p-6 text-center",children:e.jsx("p",{className:"text-gray-500",children:"No live orders at the moment"})})})]})]}),e.jsx(W,{children:n.isOpen&&e.jsx(c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50",children:e.jsx(c.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.95,opacity:0},transition:{duration:.2},className:"bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full mx-4 shadow-xl",children:e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("div",{className:"mb-4 p-3 rounded-full bg-blue-100",children:e.jsx(O,{className:"w-6 h-6 sm:w-8 sm:h-8 text-blue-600 animate-spin"})}),e.jsx("h3",{className:"text-lg sm:text-xl font-semibold text-gray-900 mb-2",children:"Update Order Status"}),e.jsxs("p",{className:"text-sm sm:text-base text-gray-600 mb-2",children:["Order ID: ",e.jsxs("span",{className:"font-semibold",children:["#",n.orderId]})]}),e.jsxs("p",{className:"text-sm sm:text-base text-gray-600 mb-2",children:["Customer: ",e.jsx("span",{className:"font-semibold",children:n.customerName})]}),e.jsxs("p",{className:"text-sm sm:text-base text-gray-600 mb-6 sm:mb-8",children:["Are you sure you want to change the order status to"," ",e.jsx("span",{className:"font-semibold text-blue-600",children:n.newStatus}),"?"]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(c.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>x({isOpen:!1,orderId:null,newStatus:null,customerName:null}),className:"flex-1 px-6 py-3 text-gray-700 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 transition-colors",children:"Cancel"}),e.jsx(c.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:A,className:"flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors",children:"Confirm"})]})]})})})})]})};export{Z as default};
