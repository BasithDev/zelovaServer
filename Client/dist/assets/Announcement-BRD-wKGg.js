import{P as T,r as d,aa as C,B as c,j as e,ab as k,ac as E,ad as A,R as I,ae as F,af as M,Q as P,ag as R,ah as D}from"./index-CayrqlUJ.js";import{A as V}from"./AdminSearchBar-Skp478av.js";const S=({onTemplateSelect:i})=>{const[g,m]=d.useState(!0),[p,t]=d.useState(!1),[r,l]=d.useState({name:"",subject:"",message:""}),[h,f]=d.useState([]);d.useEffect(()=>{b()},[]);const b=async()=>{try{m(!0);const s=await C();f(s.data.map(a=>({id:a._id,name:a.templateName,subject:a.title,message:a.message})))}catch(s){c.error("Failed to load templates"),console.error("Error fetching templates:",s)}finally{m(!1)}},j=async()=>{if(!r.name||!r.subject||!r.message){c.error("Please fill in all template fields");return}try{await k({templateName:r.name,title:r.subject,message:r.message}),c.success("Template saved successfully"),t(!1),l({name:"",subject:"",message:""}),b()}catch(s){c.error("Failed to save template"),console.error("Error saving template:",s)}},y=async s=>{try{await A(s),c.success("Template deleted successfully"),b()}catch(a){c.error("Failed to delete template"),console.error("Error deleting template:",a)}},v=s=>{i(s),c.info("Template loaded")},N=()=>g?e.jsx("div",{className:"text-center py-4",children:e.jsx("p",{children:"Loading templates..."})}):h.length===0?e.jsx("div",{className:"text-center py-4",children:e.jsx("p",{className:"text-gray-500",children:"No templates saved"})}):e.jsx("div",{className:"grid gap-4",children:h.map(s=>e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 transition-colors cursor-pointer",onClick:()=>v(s),children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsx("h3",{className:"font-medium text-gray-800",children:s.name}),e.jsx("button",{onClick:a=>{a.stopPropagation(),y(s.id)},className:"text-red-500 hover:text-red-700 p-1",children:e.jsx(E,{size:20})})]}),e.jsxs("p",{className:"text-sm text-gray-600 mb-1",children:["Subject: ",s.subject]}),e.jsx("p",{className:"text-sm text-gray-500 line-clamp-2",children:s.message})]},s.id))});return e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:"Saved Templates"}),e.jsx("button",{onClick:()=>t(!0),className:"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:"Save as Template"})]}),N(),p&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-lg p-6 w-full max-w-md",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-800 mb-4",children:"Save as Template"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Template Name"}),e.jsx("input",{type:"text",value:r.name,onChange:s=>l(a=>({...a,name:s.target.value})),className:"w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter template name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Subject"}),e.jsx("input",{type:"text",value:r.subject,onChange:s=>l(a=>({...a,subject:s.target.value})),className:"w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter email subject"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),e.jsx("textarea",{value:r.message,onChange:s=>l(a=>({...a,message:s.target.value})),className:"w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32",placeholder:"Enter email message"})]})]}),e.jsxs("div",{className:"mt-6 flex justify-end space-x-3",children:[e.jsx("button",{onClick:()=>t(!1),className:"px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",children:"Cancel"}),e.jsx("button",{onClick:j,className:"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors",children:"Save Template"})]})]})})]})};S.propTypes={onTemplateSelect:T.func.isRequired};const L=()=>{const[i,g]=d.useState({subject:"",message:""}),[m,p]=d.useState(!1),[t,r]=d.useState({isVisible:!1,total:0,sent:0,failed:0,subject:"",jobId:null,status:""}),l=d.useRef(null),h=d.useRef(null);I.useEffect(()=>()=>{l.current&&clearInterval(l.current)},[]);const f=s=>{l.current&&clearInterval(l.current),l.current=setInterval(async()=>{var a,o;try{const n=await D(s);if(((a=n.data)==null?void 0:a.status)==="Success"){const{state:x,progress:u}=n.data.data;r(w=>({...w,sent:(u==null?void 0:u.processed)||0,failed:(u==null?void 0:u.failed)||0,total:(u==null?void 0:u.total)||w.total,status:x})),(x==="completed"||x==="failed")&&(clearInterval(l.current),l.current=null,x==="completed"?c.success("Announcement sent successfully"):c.error("Failed to send some announcements"))}}catch(n){((o=n.response)==null?void 0:o.status)===404?(clearInterval(l.current),l.current=null,c.error("Job not found")):console.error("Error checking progress:",n)}},1e3)},b=async()=>{var s,a;if(!i.subject||!i.message){c.error("Please fill in all fields");return}l.current&&(clearInterval(l.current),l.current=null),p(!0),r({isVisible:!0,total:0,sent:0,failed:0,subject:i.subject,jobId:null,status:"queuing"});try{const o=await R({subject:i.subject,message:i.message});if(o.data.status==="Success"){g({subject:"",message:""});const n=o.data.jobId;h.current=n,r(x=>({...x,total:o.data.totalEmails,jobId:n,status:"sending"})),f(n)}}catch(o){c.error(((a=(s=o.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to send announcement"),console.error("Error:",o),r(n=>({...n,status:"failed"}))}finally{p(!1)}},j=s=>{const{name:a,value:o}=s.target;g(n=>({...n,[a]:o}))},y=()=>{g({subject:"",message:""})},v=()=>{l.current&&(clearInterval(l.current),l.current=null),r({isVisible:!1,total:0,sent:0,failed:0,subject:"",jobId:null,status:""})},N=s=>{g({subject:s.subject,message:s.message})};return e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(V,{}),e.jsx("div",{className:"container mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsx("div",{className:"bg-white rounded-lg shadow-sm p-6",children:e.jsx(S,{onTemplateSelect:N})})}),e.jsx("div",{className:"lg:col-span-2",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"Send Announcement"}),t.isVisible&&e.jsx("div",{className:"mb-6",children:e.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-gray-800",children:"Sending Progress"}),t.subject&&e.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["Subject: ",t.subject]}),t.status&&e.jsxs("p",{className:`text-sm mt-1 ${t.status==="completed"?"text-green-600":t.status==="failed"?"text-red-600":"text-blue-600"}`,children:["Status: ",t.status==="queuing"?"Setting up announcement...":t.status==="sending"?"Sending announcement...":t.status==="completed"?"Announcement completed successfully!":t.status==="failed"?"Failed to send announcement":""]})]}),e.jsx("button",{onClick:v,className:"text-sm text-gray-600 hover:text-gray-800 px-2 py-1 rounded hover:bg-gray-200 transition-colors",children:"Clear Progress"})]}),e.jsx("div",{className:"w-full h-2 bg-gray-200 rounded-full mb-2",children:e.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${t.status==="failed"?"bg-red-500":t.status==="completed"?"bg-green-500":"bg-blue-500"}`,style:{width:`${t.total?t.sent/t.total*100:0}%`}})}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-500",children:"Total"}),e.jsx("p",{className:"font-medium",children:t.total})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-green-600 flex items-center gap-1",children:[e.jsx(F,{}),"Sent"]}),e.jsx("p",{className:"font-medium",children:t.sent})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-red-600 flex items-center gap-1",children:[e.jsx(M,{}),"Failed"]}),e.jsx("p",{className:"font-medium",children:t.failed})]})]})]})}),e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:e.jsx("p",{className:"text-blue-800 text-sm",children:"This announcement will be sent to all registered users via email. Please ensure your message is clear and relevant to all users."})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 mb-2",children:"Announcement Subject"}),e.jsx("input",{type:"text",id:"subject",name:"subject",value:i.subject,onChange:j,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors",placeholder:"Enter announcement subject",disabled:m})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Announcement Message"}),e.jsx("textarea",{id:"message",name:"message",value:i.message,onChange:j,rows:"8",className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none",placeholder:"Enter your announcement message",disabled:m})]}),e.jsxs("div",{className:"flex gap-4 pt-4",children:[e.jsx("button",{onClick:b,disabled:m,className:"flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:m?e.jsx("div",{className:"loader"}):e.jsx(e.Fragment,{children:"Send Announcement"})}),e.jsx("button",{onClick:y,disabled:m,className:"px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"Clear"})]})]})]})})]})}),e.jsx(P,{position:"bottom-right"})]})};export{L as default};
