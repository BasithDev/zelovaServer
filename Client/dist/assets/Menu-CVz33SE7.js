import{P as o,j as e,b6 as qe,at as Te,aj as ze,E as T,m as f,b7 as Ee,r as l,e as He,b8 as Pe,u as Ae,ai as oe,B as h,Q as $e,b9 as le,ba as ie,bb as de,bc as ce,aJ as Be,bd as Qe,be as De,aI as Ue}from"./index-Ch9wd4yu.js";import{e as xe}from"./index-C2A4QmaL.js";import{R as Ke,c as Ge}from"./distanceUtils-DZILSnG6.js";import{H as Je}from"./Header-DyU6ME6H.js";import{d as Ve}from"./debounce-j2yoVX8S.js";const me=({restaurant:r,timeInMinutes:d,distanceInKm:m})=>e.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden mb-6",children:[e.jsxs("div",{className:"h-32 sm:h-40 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 relative",children:[e.jsx("div",{className:"absolute inset-0",children:e.jsxs("svg",{className:"w-full h-full opacity-10",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[e.jsx("path",{d:"M0 0 L100 0 L100 100 L0 100 Z",fill:"url(#pattern)"}),e.jsx("defs",{children:e.jsx("pattern",{id:"pattern",x:"0",y:"0",width:"10",height:"10",patternUnits:"userSpaceOnUse",children:e.jsx("circle",{cx:"5",cy:"5",r:"2",fill:"currentColor"})})})]})}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/30"})]}),e.jsx("div",{className:"p-4 sm:p-6 relative",children:e.jsxs("div",{className:"flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6",children:[e.jsx("div",{className:"w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shadow-lg -mt-12 sm:-mt-16 border-4 border-white bg-white",children:e.jsx("img",{src:r.image,alt:r.name,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex-1 w-full sm:w-auto",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0",children:[e.jsxs("div",{className:"text-center sm:text-left",children:[e.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-800",children:r.name}),e.jsxs("p",{className:"text-gray-600 flex items-center justify-center sm:justify-start gap-2 mt-1",children:[e.jsx(qe,{className:"hidden sm:block text-orange-500"}),r.address]}),e.jsxs("p",{className:"text-gray-600 mt-1",children:["Phone: ",r.phone]})]}),e.jsx("div",{className:`${r.avgRating>=3.5?"bg-green-600":"bg-orange-500"} text-white rounded-lg px-3 py-1`,children:e.jsxs("span",{className:"text-base sm:text-lg flex items-center font-semibold",children:[r.avgRating===0||!r.avgRating?"Not rated yet":(r.avgRating||0).toFixed(1),e.jsx(Te,{className:"inline ml-1 text-yellow-400"})]})})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3",children:[e.jsx("span",{className:"bg-orange-50 text-orange-600 text-xs sm:text-sm px-3 py-1 rounded-full",children:"Fast Food"}),e.jsx("span",{className:"bg-orange-50 text-orange-600 text-xs sm:text-sm px-3 py-1 rounded-full",children:"Restaurant"}),e.jsx("span",{className:"bg-orange-50 text-orange-600 text-xs sm:text-sm px-3 py-1 rounded-full",children:"Beverages"})]}),e.jsx("div",{className:"mt-4 border-t pt-4",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:`w-3 h-3 ${d<15?"bg-green-600":d<=30?"bg-orange-500":"bg-red-500"} rounded-full`}),e.jsx("p",{className:"text-sm sm:text-base text-gray-600 ml-2",children:"Outlet"})]}),e.jsx("div",{className:`h-12 flex items-center border-l-2 ml-[5px] ${d<15?"border-green-600":d<=30?"border-orange-500":"border-red-500"}`,children:e.jsxs("p",{className:"text-sm sm:text-base text-gray-600 ml-2",children:[d," Mins • ",m," Km"]})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:`w-3 h-3 ${d<15?"bg-green-600":d<=30?"bg-orange-500":"bg-red-500"} rounded-full`}),e.jsx("p",{className:"text-sm sm:text-base text-gray-600 ml-2",children:"Your Location"})]})]})})]})]})})]});me.propTypes={restaurant:o.shape({name:o.string.isRequired,image:o.string.isRequired,address:o.string.isRequired,phone:o.string.isRequired,avgRating:o.number}).isRequired,timeInMinutes:o.number.isRequired,distanceInKm:o.string.isRequired};const z=({message:r="Loading..."})=>e.jsxs("div",{className:"flex flex-col justify-center items-center min-h-screen",children:[e.jsx(Ke,{color:"#4F46E5",loading:!0,size:50}),e.jsx("p",{className:"mt-4 text-gray-600",children:r})]});z.propTypes={message:o.string};z.defaultProps={message:"Loading..."};const ue=({menuSearchQuery:r,onSearchChange:d,sortOrder:m,onSortChange:p})=>e.jsx("div",{className:"px-8 py-3",children:e.jsxs("div",{className:"flex justify-between items-center gap-4",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx("input",{type:"text",value:r,onChange:d,placeholder:"Search in menu...",className:"w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 shadow-sm"}),e.jsx("div",{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",children:e.jsx(ze,{size:16})})]}),e.jsxs("select",{value:m,onChange:p,className:"w-32 px-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm cursor-pointer",children:[e.jsx("option",{value:"none",children:"Sort by"}),e.jsx("option",{value:"lowToHigh",children:"Price: Low to High"}),e.jsx("option",{value:"highToLow",children:"Price: High to Low"})]})]})});ue.propTypes={menuSearchQuery:o.string.isRequired,onSearchChange:o.func.isRequired,sortOrder:o.oneOf(["none","lowToHigh","highToLow"]).isRequired,onSortChange:o.func.isRequired};const ge=({isOpen:r,onToggle:d,categories:m,onCategoryClick:p})=>e.jsxs("div",{className:"fixed bottom-4 right-4 z-50",children:[e.jsx("button",{onClick:d,className:"bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all",children:e.jsx(xe,{size:24})}),e.jsx(T,{children:r&&e.jsx(f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-48",children:m.map(b=>e.jsx("button",{onClick:()=>p(b),className:"block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors",children:b},b))})})]});ge.propTypes={isOpen:o.bool.isRequired,onToggle:o.func.isRequired,categories:o.arrayOf(o.string).isRequired,onCategoryClick:o.func.isRequired};const es=()=>{const{id:r}=Ee(),[d,m]=l.useState(""),[p,b]=l.useState(""),[S,he]=l.useState(""),[w,fe]=l.useState(null),[pe,be]=l.useState([]),[je,v]=l.useState(!0),[N,_]=l.useState(!1),[C,ye]=l.useState("none"),[R,k]=l.useState(new Set),[we,E]=l.useState(!1),[H,F]=l.useState({}),[j,P]=l.useState(null),L=He(),{cart:y,updateCartMutation:ve}=Pe(),Ne=Ae(),Ce=oe(t=>t.userLocation.coordinates),u=(t,a,s=null)=>{const n={itemId:t,action:a,selectedCustomizations:s};ve.mutate(n)};l.useEffect(()=>{if(L.state){const{foodCategory:t}=L.state;Q(t)}},[L.state]);const A=t=>{P(t);const a={};t.customizations.forEach(s=>{a[s.fieldName]=s.options[0]}),F(a),E(!0)},$=()=>{E(!1),P(null),F({})},Se=(t,a)=>{F(s=>({...s,[t]:a}))},_e=t=>{if(t.preventDefault(),!j)return;const a=Object.entries(H).map(([s,n])=>({fieldName:s,options:n}));u(j._id,"add",a),$()},B=(t,a)=>{var n,c,x;const s=(x=(c=(n=y.data)==null?void 0:n.cart)==null?void 0:c.items)==null?void 0:x.find(g=>(g==null?void 0:g.item._id)===t._id);a==="add"?s?u(t._id,"add",s.selectedCustomizations):A(t):a==="remove"&&u(t._id,"remove")},Re=oe(t=>t.userLocation),{lat:M,lng:O}=Re.coordinates,q=l.useMemo(()=>Ve(t=>{he(t)},300),[]);l.useEffect(()=>()=>{q.cancel()},[q]);const ke=t=>{const a=t.target.value;b(a),q(a)},Q=t=>{const a=document.getElementById(t);a&&(a.scrollIntoView({behavior:"smooth"}),_(!1))},D=async t=>{try{R.has(t)?(await Be({foodItemId:t}),k(a=>{const s=new Set(a);return s.delete(t),s}),h.success("Item removed from favorites!")):(await Qe({foodItemId:t}),k(a=>new Set(a).add(t)),h.success("Item added to favorites!"))}catch(a){console.error("Error toggling favorite:",a),h.error("Failed to toggle favorite. Please try again.")}};if(l.useEffect(()=>{const t=async()=>{try{v(!0);const s=await De(r,M,O);s!=null&&s.data?(fe(s.data.restaurant),be(s.data.menu)):h.error("No menu data found"),v(!1)}catch(s){console.log(s),h.error("Failed to load menu"),v(!1)}},a=async()=>{try{const s=await Ue();if(s!=null&&s.data){const n=s.data.favorites.map(c=>c.item._id);k(new Set(n))}}catch(s){console.error("Error fetching favorites:",s)}};r&&M&&O?(t(),a()):(h.error("Invalid restaurant or location details"),v(!1))},[r,M,O,Ne,Ce]),je)return e.jsx(z,{message:"Loading menu..."});const{distanceInKm:Fe,timeInMinutes:Le}=w?Ge(w.distance):{distanceInKm:0,timeInMinutes:0},U=pe.reduce((t,a)=>{var n;const s=((n=a.foodCategory)==null?void 0:n.name)||"Other";return t[s]||(t[s]=[]),t[s].push(a),t},{}),Me=t=>C==="none"?t:[...t].sort((a,s)=>C==="lowToHigh"?a.price-s.price:C==="highToLow"?s.price-a.price:0),K=Object.entries(U).reduce((t,[a,s])=>{const n=S.toLowerCase().trim();let c=s;return n&&(c=s.filter(x=>x.name.toLowerCase().includes(n)||x.description.toLowerCase().includes(n)||a.toLowerCase().includes(n))),c.length>0&&(t[a]=Me(c)),t},{}),Oe=Object.keys(K).length>0;return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx($e,{position:"top-right"}),e.jsx(Je,{searchQuery:d,onSearchChange:t=>m(t.target.value),placeholderText:"Search foods, restaurants, etc..."}),w&&e.jsx("div",{className:"p-4",children:e.jsx(me,{restaurant:w,distanceInKm:Fe,timeInMinutes:Le})}),e.jsx(ue,{menuSearchQuery:p,onSearchChange:ke,sortOrder:C,onSortChange:t=>ye(t.target.value)}),e.jsxs("div",{className:"fixed bottom-24 lg:bottom-4 right-4 z-50",children:[e.jsx("button",{onClick:()=>_(!N),className:"bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all",children:e.jsx(xe,{size:24})}),e.jsx(T,{children:N&&e.jsx(ge,{isOpen:N,onToggle:()=>_(!N),categories:Object.keys(U),onCategoryClick:Q})})]}),e.jsxs("div",{className:"pb-20",children:[!Oe&&S&&e.jsxs("div",{className:"flex flex-col items-center justify-center py-12",children:[e.jsx("p",{className:"text-xl text-gray-600",children:`No menu items found matching - "${S}"`}),e.jsx("p",{className:"text-gray-500 mt-2",children:"Try a different search term"})]}),Object.entries(K).map(([t,a])=>e.jsxs("div",{id:t,className:"px-8 py-3",children:[e.jsx("h3",{className:"text-3xl font-extrabold px-3 mb-6 text-gray-800",children:t}),a.map(s=>{var n,c,x,g,G,J,V,Y,Z,W,X,I,ee,se,te,ae,re,ne;return e.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 flex flex-col lg:flex-row justify-between items-start hover:shadow-xl transition-shadow duration-300",children:[e.jsxs("div",{className:"flex-1 mb-4 lg:mb-0 w-full lg:w-auto",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsx("h4",{className:"text-xl sm:text-2xl font-semibold text-gray-900",children:s.name}),e.jsx("button",{onClick:()=>D(s._id),className:"block lg:hidden p-2 bg-gray-100 rounded-full transition-colors duration-300 ml-2",children:R.has(s._id)?e.jsx(le,{className:"text-red-500 text-xl sm:text-2xl"}):e.jsx(ie,{className:"text-gray-400 hover:text-red-500 text-xl sm:text-2xl"})})]}),e.jsx("p",{className:"text-gray-500 text-sm sm:text-base mb-3",children:s.description}),e.jsxs("p",{className:"text-lg sm:text-xl font-bold text-green-600 mb-3",children:["₹",s.price]}),e.jsx("p",{className:`text-sm sm:text-lg font-semibold w-fit ${(n=s==null?void 0:s.offers)!=null&&n.offerName?"text-green-600 bg-green-200":"text-yellow-600 bg-yellow-200"} p-2 rounded-lg mb-3`,children:((c=s.offers)==null?void 0:c.offerName)||"Buy For 500+ Get Free Delivery"}),e.jsx("button",{onClick:()=>D(s._id),className:"hidden lg:block p-2 bg-gray-100 rounded-full transition-colors duration-300",children:R.has(s._id)?e.jsx(le,{className:"text-red-500 text-xl sm:text-2xl"}):e.jsx(ie,{className:"text-gray-400 hover:text-red-500 text-xl sm:text-2xl"})})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3 w-full lg:w-auto",children:[s.image&&e.jsx("div",{className:"w-full sm:w-40 h-40 mb-3",children:e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-cover rounded-lg shadow-md"})}),s.customizable?((J=(G=(g=(x=y.data)==null?void 0:x.cart)==null?void 0:g.items)==null?void 0:G.find(i=>(i==null?void 0:i.item._id)===s._id))==null?void 0:J.quantity)>0?e.jsxs("div",{className:"flex bg-white rounded-lg shadow-md py-2 px-4 border-orange-500 border-2 items-center gap-4 sm:gap-6 w-full lg:w-auto justify-center",children:[e.jsx("button",{onClick:()=>B(s,"remove"),className:"w-6 h-6 flex items-center justify-center hover:bg-gray-200 p-1 rounded-lg transition-colors duration-300",children:e.jsx(de,{className:"text-orange-500 text-lg sm:text-xl"})}),e.jsx("p",{className:"text-xl sm:text-2xl text-orange-500 font-bold",children:(W=(Z=(Y=(V=y.data)==null?void 0:V.cart)==null?void 0:Y.items)==null?void 0:Z.find(i=>(i==null?void 0:i.item._id)===s._id))==null?void 0:W.quantity}),e.jsx("button",{onClick:()=>B(s,"add"),className:"w-6 h-6 flex items-center justify-center hover:bg-gray-200 p-1 rounded-lg transition-colors duration-300",children:e.jsx(ce,{className:"text-orange-500 text-lg sm:text-xl"})})]}):e.jsx("button",{onClick:()=>A(s),className:"w-full lg:w-auto px-4 py-2 text-xl sm:text-2xl bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300",children:"Add"}):((se=(ee=(I=(X=y.data)==null?void 0:X.cart)==null?void 0:I.items)==null?void 0:ee.find(i=>(i==null?void 0:i.item._id)===s._id))==null?void 0:se.quantity)>0?e.jsxs("div",{className:"flex bg-white rounded-lg shadow-md py-2 px-4 border-orange-500 border-2 items-center gap-4 sm:gap-6 w-full lg:w-auto justify-center",children:[e.jsx("button",{onClick:()=>u(s._id,"remove"),className:"w-6 h-6 flex items-center justify-center hover:bg-gray-200 p-1 rounded-lg transition-colors duration-300",children:e.jsx(de,{className:"text-orange-500 text-lg sm:text-xl"})}),e.jsx("p",{className:"text-xl sm:text-2xl text-orange-500 font-bold",children:(ne=(re=(ae=(te=y.data)==null?void 0:te.cart)==null?void 0:ae.items)==null?void 0:re.find(i=>(i==null?void 0:i.item._id)===s._id))==null?void 0:ne.quantity}),e.jsx("button",{onClick:()=>u(s._id,"add"),className:"w-6 h-6 flex items-center justify-center hover:bg-gray-200 p-1 rounded-lg transition-colors duration-300",children:e.jsx(ce,{className:"text-orange-500 text-lg sm:text-xl"})})]}):e.jsx("button",{onClick:()=>u(s._id,"add"),className:"w-full lg:w-auto px-4 py-2 text-xl sm:text-2xl bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300",children:"Add"})]})]},s._id)})]},t))]}),e.jsx(T,{children:we&&j&&e.jsx(f.div,{className:"fixed inset-0 flex items-center justify-center z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(f.div,{className:"bg-white rounded-xl p-4 sm:p-8 w-[90%] sm:w-[28rem] relative shadow-[0_0_12px_0_rgba(0,0,0,0.3)] mx-4 sm:mx-0",initial:{opacity:0,scale:.5,y:100},animate:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:20}},exit:{opacity:0,scale:.5,y:100,transition:{duration:.1}},children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold mb-6",children:j.name}),e.jsxs("form",{onSubmit:_e,children:[j.customizations.map(t=>e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-3",children:t.fieldName}),e.jsx("div",{className:"flex flex-wrap gap-3",children:t.options.map(a=>{var s;return e.jsxs(f.button,{type:"button",onClick:()=>Se(t.fieldName,a),className:`px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg shadow-sm ${((s=H[t.fieldName])==null?void 0:s._id)===a._id?"bg-blue-500 text-white shadow-blue-200":"bg-white border border-gray-200 hover:border-blue-300"}`,whileHover:{scale:1.03,transition:{duration:.2}},whileTap:{scale:.97},children:[a.name," - ₹",a.price]},a._id)})})]},t._id)),e.jsxs("div",{className:"flex justify-end mt-8 gap-3",children:[e.jsx(f.button,{type:"button",onClick:$,className:"px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base bg-white border border-gray-200 rounded-lg hover:border-gray-300",whileHover:{scale:1.03,transition:{duration:.2}},whileTap:{scale:.97},children:"Cancel"}),e.jsx(f.button,{type:"submit",className:"px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base bg-green-500 text-white rounded-lg shadow-sm shadow-green-200",whileHover:{scale:1.03,backgroundColor:"#22c55e",transition:{duration:.2}},whileTap:{scale:.97},children:"Add to Cart"})]})]})]})})})]})};export{es as default};
