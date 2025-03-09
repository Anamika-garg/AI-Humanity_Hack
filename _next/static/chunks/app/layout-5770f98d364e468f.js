(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{93966:function(e,t,r){Promise.resolve().then(r.bind(r,51164)),Promise.resolve().then(r.t.bind(r,11631,23)),Promise.resolve().then(r.t.bind(r,53054,23)),Promise.resolve().then(r.bind(r,40549))},40549:function(e,t,r){"use strict";r.d(t,{default:function(){return X}});var n=r(57437),a=r(2265),s=r(66094),i=r(93191),o=r(39343),l=r(82755),d=r(25524),c=r(38472),u=r(54662),m=r(89733),f=r(77209),p=r(4919),x=r(84973),h=r(70402);function g(){let e=(0,x.w)(),{register:t,handleSubmit:r,formState:{errors:a},reset:s}=(0,o.cI)(),i=(0,d.D)({mutationFn:e=>c.Z.post("/api/book-demo",e),onSuccess:()=>{e.onClose(),s()},onError:e=>{console.error("Error booking demo:",e)}});return(0,n.jsx)(u.Vq,{open:e.isOpen,onOpenChange:e.onClose,children:(0,n.jsxs)(u.cZ,{className:"sm:max-w-[425px]",children:[(0,n.jsxs)(u.fK,{children:[(0,n.jsx)(u.$N,{className:"text-center",children:(0,n.jsx)("div",{className:"flex items-center justify-center gap-x-2 font-bold text-2xl mb-2",children:"Book a Demo"})}),(0,n.jsx)(u.Be,{className:"text-center text-sm",children:"Schedule a demo to explore Educhain Pro"})]}),(0,n.jsxs)("form",{onSubmit:r(e=>{i.mutate(e)}),className:"space-y-4",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(h._,{htmlFor:"name",children:"Name"}),(0,n.jsx)(f.I,{id:"name",placeholder:"Your Name",...t("name",{required:"Name is required"})}),a.name&&(0,n.jsx)("p",{className:"text-sm text-red-500",children:a.name.message})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(h._,{htmlFor:"email",children:"Email"}),(0,n.jsx)(f.I,{id:"email",type:"email",placeholder:"your.email@example.com",...t("email",{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,message:"Please enter a valid email"}})}),a.email&&(0,n.jsx)("p",{className:"text-sm text-red-500",children:a.email.message})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(h._,{htmlFor:"notes",children:"Additional Notes"}),(0,n.jsx)(p.g,{id:"notes",placeholder:"Any specific topics you'd like to discuss?",...t("notes")})]}),(0,n.jsx)(u.cN,{children:(0,n.jsxs)(m.z,{type:"submit",disabled:i.isPending,className:"w-full",children:[i.isPending?"Booking...":"Book a Demo",(0,n.jsx)(l.Z,{className:"w-4 h-4 ml-2"})]})})]})]})})}var y=r(22468),j=r(79055),b=r(78311),v=r(48185),N=r(49354),w=r(37374),F=r(72696),C=r(68692);let S=["Dashboard","Settings","Adaptive Quiz","Interactive Simulations","Personalized Learning Paths","AI-Powered Grading Assistant"],k=w.R.filter(e=>!S.includes(e.title)),z=()=>{let e=(0,b.t)(),[t,r]=(0,a.useState)(!1),{data:s,isLoading:i}=(0,C.Z)();return(0,n.jsx)(u.Vq,{open:e.isOpen,onOpenChange:e.onClose,children:(0,n.jsxs)(u.cZ,{children:[(0,n.jsxs)(u.fK,{children:[(0,n.jsxs)(u.$N,{className:"flex justify-center items-center flex-col gap-y-2 pb-2",children:[(0,n.jsxs)("div",{className:"flex items-center gap-x-2 font-bold text-xl",children:["Upgrade to Educhain",(0,n.jsx)(j.C,{className:"uppercase text-sm py-1",children:"pro"})]}),(0,n.jsx)("p",{className:"font-normal text-gray-700 text-sm",children:"Get upto 5x more usage with Educhain Pro"})]}),(0,n.jsx)(u.Be,{className:"grid grid-cols-1 gap-2 pt-2 space-y-2 text-zinc-900 font-medium",children:k.map((e,t)=>(0,n.jsxs)(v.Zb,{className:(0,N.cn)("p-2 border-black/5 flex items-center justify-between","col-span-1"),children:[(0,n.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,n.jsx)("div",{className:(0,N.cn)("p-2 w-fit rounded-md"),children:(0,n.jsx)(e.icon,{className:(0,N.cn)("w-6 h-6")})}),(0,n.jsx)("div",{className:"font-semibold text-sm",children:e.title})]}),(0,n.jsx)(y.Z,{className:"text-primary w-5 h-5"})]},e.link))})]}),(0,n.jsx)(u.cN,{children:(0,n.jsx)(F.Z,{user:s})})]})})};var O=r(31014),E=r(59772),q=r(37151),_=r(60994),P=r(2128),T=r(59983);let Z=E.Ry({title:E.Z_().min(1,"Feature title is required"),description:E.Z_().min(1,"Description is required"),category:E.Km(["question-generation","lesson-plan","examination","other"],{required_error:"Please select a category"}),priority:E.Km(["low","medium","high"],{required_error:"Please select a priority"})});function A(){let e=(0,T.a)(),{control:t,register:r,handleSubmit:a,formState:{errors:s},reset:i}=(0,o.cI)({resolver:(0,O.F)(Z)}),l=(0,d.D)({mutationFn:e=>c.Z.post("/api/feature-request",e),onSuccess:()=>{i(),e.onClose()},onError:e=>{console.error("Error submitting feature request:",e)}});return(0,n.jsx)(u.Vq,{open:e.isOpen,onOpenChange:e.onClose,children:(0,n.jsxs)(u.cZ,{className:"sm:max-w-[425px]",children:[(0,n.jsxs)(u.fK,{children:[(0,n.jsx)(u.$N,{className:"text-center",children:(0,n.jsxs)("div",{className:"flex items-center justify-center gap-x-2 font-bold text-2xl mb-2",children:[(0,n.jsx)(q.Z,{className:"w-6 h-6 text-yellow-400"}),"New Feature Request"]})}),(0,n.jsx)(u.Be,{className:"text-center text-sm",children:"Share your ideas to improve our platform"})]}),(0,n.jsxs)("form",{onSubmit:a(e=>{l.mutate(e)}),className:"space-y-4",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(h._,{htmlFor:"title",children:"Feature Title"}),(0,n.jsx)(f.I,{id:"title",placeholder:"Brief title for your feature idea",...r("title")}),s.title&&(0,n.jsx)("p",{className:"text-sm text-red-500",children:s.title.message})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(h._,{htmlFor:"description",children:"Description"}),(0,n.jsx)(p.g,{id:"description",placeholder:"Describe your feature idea in detail",...r("description")}),s.description&&(0,n.jsx)("p",{className:"text-sm text-red-500",children:s.description.message})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(h._,{htmlFor:"category",children:"Category"}),(0,n.jsx)(o.Qr,{name:"category",control:t,render:e=>{let{field:t}=e;return(0,n.jsxs)(P.Ph,{onValueChange:t.onChange,defaultValue:t.value,children:[(0,n.jsx)(P.i4,{children:(0,n.jsx)(P.ki,{placeholder:"Select a category"})}),(0,n.jsxs)(P.Bw,{children:[(0,n.jsx)(P.Ql,{value:"question-generation",children:"Question Generation"}),(0,n.jsx)(P.Ql,{value:"lesson-plan",children:"Lesson Plan"}),(0,n.jsx)(P.Ql,{value:"examination",children:"Examination"}),(0,n.jsx)(P.Ql,{value:"other",children:"Other"})]})]})}}),s.category&&(0,n.jsx)("p",{className:"text-sm text-red-500",children:s.category.message})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(h._,{htmlFor:"priority",children:"Priority"}),(0,n.jsx)(o.Qr,{name:"priority",control:t,render:e=>{let{field:t}=e;return(0,n.jsxs)(P.Ph,{onValueChange:t.onChange,defaultValue:t.value,children:[(0,n.jsx)(P.i4,{children:(0,n.jsx)(P.ki,{placeholder:"Select priority"})}),(0,n.jsxs)(P.Bw,{children:[(0,n.jsx)(P.Ql,{value:"low",children:"Low"}),(0,n.jsx)(P.Ql,{value:"medium",children:"Medium"}),(0,n.jsx)(P.Ql,{value:"high",children:"High"})]})]})}}),s.priority&&(0,n.jsx)("p",{className:"text-sm text-red-500",children:s.priority.message})]}),(0,n.jsx)(u.cN,{children:(0,n.jsxs)(m.z,{type:"submit",disabled:l.isPending,className:"w-full",children:[l.isPending?"Submitting...":"Submit Feature Request",(0,n.jsx)(_.Z,{className:"w-4 h-4 ml-2"})]})})]})]})})}var R=r(40932),D=r(93132),V=r(8124),B=r(53742),Q=r(62662),I=r(97501),K=r(87992),G=r(99827),H=r(19775),M=r(25857);let U=e=>{let t=[],r="",n="English",a=()=>{r&&(t.push({text:r,lang:n}),r="")};for(let t=0;t<e.length;t++){let s=e[t],i=(0,M.ej)(s);i!==n&&(a(),n=i),r+=s}return a(),t};var W=e=>{let{topic:t,mcqs:r,id:s,subDetails:i,answerKeys:o,createdBy:l}=e,[d,c]=(0,a.useState)(null);(0,a.useEffect)(()=>{(async()=>{try{await Promise.all(Object.values(M.xV).map(async e=>{if("Outfit"===e.font)return;let t="".concat(e.font,"-Regular.ttf"),r=await fetch("/fonts/".concat(t));await r.arrayBuffer()}))}catch(e){console.error("Error preloading fonts:",e)}})()},[]);let u=async()=>{try{let e=new I.kH({orientation:"portrait",unit:"px",format:"a4",putOnlyUsedFonts:!0,floatPrecision:16}),n=e.internal.pageSize.getWidth(),a=e.internal.pageSize.getHeight(),s=e.internal.getNumberOfPages();e.addFileToVFS("Outfit-Medium.ttf",H.g),e.addFont("Outfit-Medium.ttf","Outfit","normal"),await (0,M.N0)(e);let i=40,l=function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{fontSize:s=12,indent:o=0,spacing:l=15,isBold:c=!1,isOption:u=!1}=r,m=(0,M.ej)(t);"English"===m?e.setFont("Outfit",c?"bold":"normal"):e.setFont("NotoSans".concat(m),"normal"),e.setFontSize(s);let f=e.splitTextToSize(t,n-80-2*o);if(i+f.length*l>a-40&&(e.addPage(),d(),i=40),u){let r=t.substring(0,3),n=t.substring(3);e.setFont("Outfit","normal"),e.text(r,40+o,i);let a=(0,M.ej)(n);"English"!==a&&e.setFont("NotoSans".concat(a),"normal"),e.text(n,40+o+15,i)}else f.forEach(t=>{e.text(t,40+o,i),i+=l});return f.length*l},d=()=>{e.setDrawColor(200,200,200),e.setLineWidth(1),e.roundedRect(20,20,n-40,a-40,6,6)};if(d(),t){e.setFont("Outfit","bold"),e.setFontSize(20);let a="Subject: ".concat(t),s=e.getTextWidth(a);e.text(a,(n-s)/2,60),e.setFontSize(14),e.setTextColor("#F9802D");let o=Array.from(new Set(r.map(e=>e.type))).join(", "),l="Question Types: ".concat(o),d=e.getTextWidth(l);e.text(l,(n-d)/2,80),e.setTextColor(0,0,0),i=100}if(e.setDrawColor(200,200,200),e.setLineWidth(.5),e.line(55,i,n-40-15,i),i+=20,r.forEach((e,t)=>{switch(l("".concat(t+1,". ").concat(e.question),{fontSize:12,spacing:16,isBold:!0}),i+=8,e.type){case"Multiple Choice":var r;null===(r=e.options)||void 0===r||r.forEach((e,t)=>{let r="".concat(String.fromCharCode(65+t),") ").concat(e);l(r,{fontSize:12,indent:20,spacing:16,isOption:!0}),i+=12});break;case"True/False":["True","False"].forEach((e,t)=>{let r="".concat(String.fromCharCode(65+t),") ").concat(e);l(r,{fontSize:12,indent:20,spacing:16,isOption:!0}),i+=12});break;case"Short Answer":case"Fill in the Blank":i+=10}i+=16}),o&&o.length>0){e.addPage(),d(),i=40,e.setFont("Outfit","bold"),e.setFontSize(16);let t="Answer Key",r=e.getTextWidth(t);e.text(t,n/2-r/2,i),i+=25,e.setDrawColor(200,200,200),e.setLineWidth(.5),e.line(55,i-10,n-40-15,i-10),i+=10,o.forEach((t,r)=>{if(i>a-100&&(e.addPage(),d(),i=40),e.setFont("Outfit","normal"),e.setFontSize(12),e.text("".concat(r+1,"."),55,i),t.answer){let r=U(t.answer),n=115;e.setFont("Outfit","normal"),e.setFontSize(12),e.text("Answer: ",75,i),r.forEach(t=>{let{text:r,lang:a}=t;e.setFont("English"===a?"Outfit":"NotoSans".concat(a),"normal");let s={align:"left",baseline:"alphabetic",renderingMode:"fill"};"English"!==a&&(s.encoding="Identity-H"),e.text(r,n,i,s),n+=e.getTextWidth(r)}),i+=16}if(t.explanation){let r=U(t.explanation),n=115;e.setFont("Outfit","normal"),e.setFontSize(12),e.text("Explanation: ",75,i),r.forEach(t=>{let{text:r,lang:a}=t;e.setFont("English"===a?"Outfit":"NotoSans".concat(a),"normal");let s={align:"left",baseline:"alphabetic",renderingMode:"fill"};"English"!==a&&(s.encoding="Identity-H"),e.text(r,n,i,s),n+=e.getTextWidth(r)}),i+=20}i+=10})}let c=()=>{let t="Powered by ",r="educhain";e.setFont("Outfit","normal"),e.setFontSize(10);let s=e.getTextWidth(t),i=e.getTextWidth(r),o=n-40-s-i-15,l=o+s,d=a-20;e.setTextColor(0,0,0),e.text(t,o,d),e.setTextColor("#F9802D"),e.text(r,l,d),e.link(l,d-15,i,10,{url:"https://educhain.in"}),e.setTextColor(0,0,0)};for(let t=1;t<=s;t++)e.setPage(t),c();e.save("educhain.pdf")}catch(e){console.error("PDF generation error:",e),c(e.message)}};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(m.z,{onClick:u,variant:"outline",size:"sm",className:"bg-orange-500 text-white",children:[(0,n.jsx)(G.Z,{className:"mr-2 h-4 w-4 "}),"Download PDF"]}),d&&(0,n.jsxs)(K.bZ,{variant:"destructive",className:"mt-4",children:[(0,n.jsx)(K.Cd,{children:"Error"}),(0,n.jsx)(K.X,{children:d})]})]})},L=function(){var e;let[t,r]=(0,B.KO)(Q.n),a=(0,D.e)(),s=(0,V.F)(),{data:i}=(0,C.Z)(),o=async e=>{if(!e)throw Error("Demo ID is required");try{let{data:t,error:r}=await a.from("generated_demos").select("id").eq("id",e).single();if(r)throw console.error("Check error:",r),Error("Failed to verify demo access");if(!t)throw Error("Demo not found");let{data:n,error:s}=await a.from("generated_demos").select("*").eq("id",e).single();if(s)throw console.error("Fetch error:",s),s;if(!n)throw Error("No demo data found");if(null==i?void 0:i.id){let{error:t}=await a.from("generated_demos").update({generated_by:i.id}).eq("id",e);t&&console.error("Update error:",t)}return n}catch(e){throw console.error("Error in fetchDemoData:",e),e}},{data:l,error:d,isLoading:c,isError:m}=(0,R.a)({queryKey:["demo",t],queryFn:()=>t?o(t):Promise.reject("No demo ID"),enabled:!!t&&s.isOpen,retry:1,staleTime:3e5}),f=(e,t)=>{if(!e||!e.type)return null;switch(e.type){case"Multiple Choice":var r;return(0,n.jsx)("div",{className:"space-y-2 ml-4",children:null===(r=e.options)||void 0===r?void 0:r.map((t,r)=>(0,n.jsxs)("div",{className:"p-2 rounded ".concat(t===e.answer?"bg-green-100 border-green-200":"bg-gray-50"),children:[String.fromCharCode(65+r),". ",t]},r))});case"True/False":return(0,n.jsx)("div",{className:"space-y-2 ml-4",children:["True","False"].map((t,r)=>(0,n.jsxs)("div",{className:"p-2 rounded ".concat(t===e.answer?"bg-green-100 border-green-200":"bg-gray-50"),children:[String.fromCharCode(65+r),". ",t]},r))});case"Short Answer":case"Fill in the Blank":return(0,n.jsx)("div",{className:"ml-4 p-2 bg-gray-50 rounded",children:(0,n.jsxs)("p",{className:"text-gray-600",children:["Answer: ",e.answer||"No answer provided"]})});default:return null}};return s.isOpen?(0,n.jsx)(u.Vq,{open:s.isOpen,onOpenChange:e=>{e||(r(null),s.onClose())},children:(0,n.jsxs)(u.cZ,{className:"max-w-3xl h-[70vh] overflow-y-scroll",children:[(0,n.jsx)(u.fK,{children:(0,n.jsx)(u.$N,{className:"text-center text-2xl font-bold mb-4",children:(null==l?void 0:l.topic)||"Generated Questions"})}),c&&(0,n.jsx)("div",{className:"flex justify-center items-center h-40",children:(0,n.jsx)("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"})}),m&&(0,n.jsx)("div",{className:"text-center text-red-500 p-4",children:d instanceof Error?d.message:"Failed to load demo data"}),l&&!c&&(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsxs)("span",{className:"text-sm text-gray-500",children:["Total Questions: ",l.number_of_questions]}),(()=>{var e;if(!l)return;let r=l.questions.map(e=>({question:e.question,options:"Multiple Choice"===e.type&&e.options||[],answer:e.answer,explanation:e.explanation||"",type:e.type})),a=[{key:"Total Questions",value:l.number_of_questions.toString()},{key:"Question Type",value:(null===(e=l.questions[0])||void 0===e?void 0:e.type)||"Mixed"}],s=l.questions.map(e=>({answer:e.answer,explanation:e.explanation||""}));return(0,n.jsx)(W,{topic:l.topic,mcqs:r,id:t||"",subDetails:a,answerKeys:s})})()]}),(0,n.jsx)("div",{id:"questions-container",className:"space-y-6",children:null===(e=l.questions)||void 0===e?void 0:e.map((e,t)=>e?(0,n.jsxs)("div",{className:"p-4 border rounded-lg",children:[(0,n.jsxs)("h3",{className:"font-medium mb-2",children:[t+1,". ",e.question]}),f(e,t)]},t):null)})]})]})}):null};let Y=()=>{let[e,t]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{t(!0)},[]),e)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(z,{}),(0,n.jsx)(g,{}),(0,n.jsx)(A,{}),(0,n.jsx)(L,{})]}):null};var $=r(27776),J=r(89736),X=e=>{let{children:t}=e,[r]=(0,a.useState)(()=>new s.S({defaultOptions:{queries:{staleTime:1/0}}}));return(0,n.jsxs)(i.aH,{client:r,children:[(0,n.jsx)(Y,{}),(0,n.jsx)(J.p,{children:t}),(0,n.jsx)($.x7,{richColors:!0})]})}},72696:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(57437),a=r(2265),s=r(16463),i=r(89733),o=r(27776),l=r(78311);let d=e=>new Promise(t=>{let r=document.createElement("script");r.src=e,r.onload=()=>t(!0),r.onerror=()=>t(!1),document.body.appendChild(r)});function c(e){let{user:t}=e,r=(0,s.useRouter)(),c=(0,l.t)(),[u,m]=(0,a.useState)(!1),f=async()=>{m(!0);try{if(!await d("https://checkout.razorpay.com/v1/checkout.js"))throw Error("Failed to load Razorpay script");let e=await fetch("/api/payments/subscription/create",{method:"POST"});if(!e.ok){let t=await e.json();throw Error(t.error||"HTTP error! status: ".concat(e.status))}let n=await e.json();c.onClose();let a={key:"rzp_live_eMHMBA2m4sSKzv",subscription_id:n.id,name:"Educhain Premium",description:"Educhain Premium Subscription",prefill:{email:t.email},handler:async e=>{try{let t=await fetch("/api/payments/subscription/activate",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({razorpay_payment_id:e.razorpay_payment_id,razorpay_subscription_id:e.razorpay_subscription_id,razorpay_signature:e.razorpay_signature})});if(!t.ok){let e=await t.json();throw Error(e.error||"Failed to activate subscription. Status: ".concat(t.status))}o.Am.success("Subscription Activated",{description:"Your premium subscription has been successfully activated. The page will refresh shortly.",duration:5e3}),r.refresh()}catch(e){console.error("Error in payment handler:",e),o.Am.error("Subscription Activation Failed",{description:"Payment successful, but failed to activate subscription. Please contact support.",duration:5e3})}},modal:{ondismiss:()=>{console.log("Checkout form closed"),(0,o.Am)("Subscription Cancelled",{description:"Subscription process cancelled. You can try again later.",duration:5e3})}}};new window.Razorpay(a).open()}catch(e){console.error("Subscription error:",e),o.Am.error("Subscription Error",{description:e instanceof Error?"Failed to initiate subscription: ".concat(e.message):"An unknown error occurred. Please try again.",duration:5e3})}finally{m(!1)}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.z,{onClick:f,disabled:u,className:"w-full",children:u?"Processing...":"Subscribe Now @ 99"})})}},87992:function(e,t,r){"use strict";r.d(t,{Cd:function(){return d},X:function(){return c},bZ:function(){return l}});var n=r(57437),a=r(2265),s=r(12218),i=r(49354);let o=(0,s.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),l=a.forwardRef((e,t)=>{let{className:r,variant:a,...s}=e;return(0,n.jsx)("div",{ref:t,role:"alert",className:(0,i.cn)(o({variant:a}),r),...s})});l.displayName="Alert";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h5",{ref:t,className:(0,i.cn)("mb-1 font-medium leading-none tracking-tight",r),...a})});d.displayName="AlertTitle";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("text-sm [&_p]:leading-relaxed",r),...a})});c.displayName="AlertDescription"},79055:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var n=r(57437);r(2265);var a=r(12218),s=r(49354);let i=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o(e){let{className:t,variant:r,...a}=e;return(0,n.jsx)("div",{className:(0,s.cn)(i({variant:r}),t),...a})}},48185:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var n=r(57437),a=r(2265),s=r(49354);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});i.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});o.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},54662:function(e,t,r){"use strict";r.d(t,{$N:function(){return x},Be:function(){return h},Vq:function(){return l},cN:function(){return p},cZ:function(){return m},fK:function(){return f},hg:function(){return d}});var n=r(57437),a=r(2265),s=r(13304),i=r(74697),o=r(49354);let l=s.fC,d=s.xz,c=s.h_;s.x8;let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a})});u.displayName=s.aV.displayName;let m=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{}),(0,n.jsxs)(s.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...l,children:[a,(0,n.jsxs)(s.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(i.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=s.VY.displayName;let f=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};f.displayName="DialogHeader";let p=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};p.displayName="DialogFooter";let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",r),...a})});x.displayName=s.Dx.displayName;let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})});h.displayName=s.dk.displayName},77209:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(57437),a=r(2265),s=r(49354);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},70402:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var n=r(57437),a=r(2265),s=r(38364),i=r(12218),o=r(49354);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.f,{ref:t,className:(0,o.cn)(l(),r),...a})});d.displayName=s.f.displayName},2128:function(e,t,r){"use strict";r.d(t,{Bw:function(){return x},Ph:function(){return c},Ql:function(){return h},i4:function(){return m},ki:function(){return u}});var n=r(57437),a=r(2265),s=r(17549),i=r(42421),o=r(14392),l=r(22468),d=r(49354);let c=s.fC;s.ZA;let u=s.B4,m=a.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsxs)(s.xz,{ref:t,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...o,children:[a,(0,n.jsx)(s.JO,{asChild:!0,children:(0,n.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=s.xz.displayName;let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.u_,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(o.Z,{className:"h-4 w-4"})})});f.displayName=s.u_.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.$G,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})});p.displayName=s.$G.displayName;let x=a.forwardRef((e,t)=>{let{className:r,children:a,position:i="popper",...o}=e;return(0,n.jsx)(s.h_,{children:(0,n.jsxs)(s.VY,{ref:t,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:i,...o,children:[(0,n.jsx)(f,{}),(0,n.jsx)(s.l_,{className:(0,d.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,n.jsx)(p,{})]})})});x.displayName=s.VY.displayName,a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.__,{ref:t,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...a})}).displayName=s.__.displayName;let h=a.forwardRef((e,t)=>{let{className:r,children:a,...i}=e;return(0,n.jsxs)(s.ck,{ref:t,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(s.wU,{children:(0,n.jsx)(l.Z,{className:"h-4 w-4"})})}),(0,n.jsx)(s.eT,{children:a})]})});h.displayName=s.ck.displayName,a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...a})}).displayName=s.Z0.displayName},4919:function(e,t,r){"use strict";r.d(t,{g:function(){return i}});var n=r(57437),a=r(2265),s=r(49354);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});i.displayName="Textarea"},89736:function(e,t,r){"use strict";r.d(t,{Tooltip:function(){return l},TooltipContent:function(){return c},TooltipTrigger:function(){return d},p:function(){return o}});var n=r(57437),a=r(2265),s=r(27071),i=r(49354);let o=s.zt,l=s.fC,d=s.xz,c=a.forwardRef((e,t)=>{let{className:r,sideOffset:a=4,...o}=e;return(0,n.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,i.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...o})});c.displayName=s.VY.displayName},84973:function(e,t,r){"use strict";r.d(t,{w:function(){return n}});let n=(0,r(39099).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}))},8124:function(e,t,r){"use strict";r.d(t,{F:function(){return n}});let n=(0,r(39099).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}))},59983:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});let n=(0,r(39099).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}))},78311:function(e,t,r){"use strict";r.d(t,{t:function(){return n}});let n=(0,r(39099).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}))},68692:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(93132),a=r(40932);function s(){return(0,a.a)({queryKey:["user"],queryFn:async()=>{let e=(0,n.e)(),{data:t}=await e.auth.getUser();if(null==t?void 0:t.user){let{data:r}=await e.from("users").select("*").eq("id",t.user.id).single();return{...r,email:t.user.email}}return null}})}},62662:function(e,t,r){"use strict";r.d(t,{n:function(){return n}});let n=(0,r(91741).O4)("demoId",null)},37374:function(e,t,r){"use strict";r.d(t,{R:function(){return m}});var n=r(79869),a=r(69067),s=r(35952),i=r(61496),o=r(22023),l=r(74760),d=r(10462),c=r(6540),u=r(35690);let m=[{title:"Question Generation",description:"Create multiple-choice questions with ease to assess student understanding and enhance learning outcomes.",link:"/mcq-generation",icon:n.Z,released:!0},{title:"Lesson Plans",description:"Create structured, engaging lesson plans to enhance your teaching effectiveness and student learning outcomes.",link:"/lesson-plans",icon:a.Z,released:!0},{title:"Indic Language MCQ Generation",description:"Create multiple-choice questions with ease to assess student understanding in languages such as Hindi, Marathi, Gujarati, Telegu, Kannada, etc",link:"/indic-mcq-generation",icon:s.Z,released:!0},{title:"Doubt Solving",description:"Doubt Solving",link:"/doubt-solving",icon:i.Z,released:!0},{title:"Generate from URL",description:"Generate from URL format to quickly produce relevant multiple-choice questions.",link:"/mcq-from-data",icon:o.Z,released:!0},{title:"Adaptive Quiz",description:"Practice Quiz from with adaptive difficulty",link:"/fast-adaptive-quiz",icon:l.Z,released:!1},{title:"Interactive Simulations",description:"Create engaging, interactive simulations to visualize complex concepts and enhance student understanding.",link:"/interactive-simulations",icon:d.Z,released:!1},{title:"Personalized Learning Paths",description:"Generate customized learning paths based on individual student performance and learning styles.",link:"/personalized-learning",icon:c.Z,released:!1},{title:"AI-Powered Grading Assistant",description:"Automate grading for essays and open-ended questions, providing detailed feedback and suggestions for improvement.",link:"/ai-grading",icon:u.Z,released:!1}]},25857:function(e,t,r){"use strict";r.d(t,{N0:function(){return a},ej:function(){return s},xV:function(){return n}});let n={hin:{name:"Hindi",font:"NotoSansDevanagari",range:/[\u0900-\u097F]/},guj:{name:"Gujarati",font:"NotoSansGujarati",range:/[\u0A80-\u0AFF]/},tam:{name:"Tamil",font:"NotoSansTamil",range:/[\u0B80-\u0BFF]/},tel:{name:"Telugu",font:"NotoSansTelugu",range:/[\u0C00-\u0C7F]/},kan:{name:"Kannada",font:"NotoSansKannada",range:/[\u0C80-\u0CFF]/},eng:{name:"English",font:"Outfit",range:/[a-zA-Z0-9]/}},a=async e=>{try{await Promise.all(Object.entries(n).map(async t=>{let[r,n]=t;if("eng"===r)return;let a="".concat(n.font,"-Regular.ttf"),s=await fetch("/fonts/".concat(a));if(!s.ok)throw Error("Failed to load ".concat(a));let i=await s.arrayBuffer(),o=btoa(new Uint8Array(i).reduce((e,t)=>e+String.fromCharCode(t),""));e.addFileToVFS(a,o),e.addFont(a,n.font,"normal","Identity-H")}))}catch(e){throw console.error("Error loading fonts:",e),Error("Failed to load required fonts")}},s=e=>/[\u0900-\u097F]/.test(e)?"Devanagari":/[\u0A80-\u0AFF]/.test(e)?"Gujarati":/[\u0B80-\u0BFF]/.test(e)?"Tamil":/[\u0C00-\u0C7F]/.test(e)?"Telugu":/[\u0C80-\u0CFF]/.test(e)?"Kannada":"English"},53054:function(){}},function(e){e.O(0,[2975,9141,2505,8869,9109,360,7520,7776,2499,932,9343,9772,1056,6065,9084,92,1656,3555,8984,4358,2971,7023,1744],function(){return e(e.s=93966)}),_N_E=e.O()}]);