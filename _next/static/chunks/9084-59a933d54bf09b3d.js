"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9084],{42421:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},14392:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},62361:function(e,t,n){n.d(t,{u:function(){return r}});function r(e,[t,n]){return Math.min(n,Math.max(t,e))}},17549:function(e,t,n){n.d(t,{$G:function(){return eF},B4:function(){return eD},JO:function(){return eI},VY:function(){return eO},Z0:function(){return eK},ZA:function(){return eL},__:function(){return e_},ck:function(){return eA},eT:function(){return eW},fC:function(){return eE},h_:function(){return eN},l_:function(){return eV},u_:function(){return eB},wU:function(){return eH},xz:function(){return eP}});var r=n(2265),i=n(54887),o=n(62361),s=n(78149),a=n(76402),l=n(1584),u=n(98324),c=n(87513),d=n(53938),h=n(20589),p=n(80467),f=n(53201),v=n(39664),m=n(56935),g=n(25171),w=n(71538),y=n(75137),x=n(91715),b=n(1336),C=n(47250),S=n(31725),M=n(78369),R=n(49418),T=n(57437),j=[" ","Enter","ArrowUp","ArrowDown"],k=[" ","Enter"],E="Select",[P,D,I]=(0,a.B)(E),[N,O]=(0,u.b)(E,[I,v.D7]),V=(0,v.D7)(),[L,_]=N(E),[A,W]=N(E),H=e=>{let{__scopeSelect:t,children:n,open:i,defaultOpen:o,onOpenChange:s,value:a,defaultValue:l,onValueChange:u,dir:d,name:h,autoComplete:p,disabled:m,required:g,form:w}=e,y=V(t),[b,C]=r.useState(null),[S,M]=r.useState(null),[R,j]=r.useState(!1),k=(0,c.gm)(d),[E=!1,D]=(0,x.T)({prop:i,defaultProp:o,onChange:s}),[I,N]=(0,x.T)({prop:a,defaultProp:l,onChange:u}),O=r.useRef(null),_=!b||w||!!b.closest("form"),[W,H]=r.useState(new Set),B=Array.from(W).map(e=>e.props.value).join(";");return(0,T.jsx)(v.fC,{...y,children:(0,T.jsxs)(L,{required:g,scope:t,trigger:b,onTriggerChange:C,valueNode:S,onValueNodeChange:M,valueNodeHasChildren:R,onValueNodeHasChildrenChange:j,contentId:(0,f.M)(),value:I,onValueChange:N,open:E,onOpenChange:D,dir:k,triggerPointerDownPosRef:O,disabled:m,children:[(0,T.jsx)(P.Provider,{scope:t,children:(0,T.jsx)(A,{scope:e.__scopeSelect,onNativeOptionAdd:r.useCallback(e=>{H(t=>new Set(t).add(e))},[]),onNativeOptionRemove:r.useCallback(e=>{H(t=>{let n=new Set(t);return n.delete(e),n})},[]),children:n})}),_?(0,T.jsxs)(eT,{"aria-hidden":!0,required:g,tabIndex:-1,name:h,autoComplete:p,value:I,onChange:e=>N(e.target.value),disabled:m,form:w,children:[void 0===I?(0,T.jsx)("option",{value:""}):null,Array.from(W)]},B):null]})})};H.displayName=E;var B="SelectTrigger",F=r.forwardRef((e,t)=>{let{__scopeSelect:n,disabled:i=!1,...o}=e,a=V(n),u=_(B,n),c=u.disabled||i,d=(0,l.e)(t,u.onTriggerChange),h=D(n),p=r.useRef("touch"),[f,m,w]=ej(e=>{let t=h().filter(e=>!e.disabled),n=t.find(e=>e.value===u.value),r=ek(t,e,n);void 0!==r&&u.onValueChange(r.value)}),y=e=>{c||(u.onOpenChange(!0),w()),e&&(u.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,T.jsx)(v.ee,{asChild:!0,...a,children:(0,T.jsx)(g.WV.button,{type:"button",role:"combobox","aria-controls":u.contentId,"aria-expanded":u.open,"aria-required":u.required,"aria-autocomplete":"none",dir:u.dir,"data-state":u.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":eR(u.value)?"":void 0,...o,ref:d,onClick:(0,s.M)(o.onClick,e=>{e.currentTarget.focus(),"mouse"!==p.current&&y(e)}),onPointerDown:(0,s.M)(o.onPointerDown,e=>{p.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(y(e),e.preventDefault())}),onKeyDown:(0,s.M)(o.onKeyDown,e=>{let t=""!==f.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&j.includes(e.key)&&(y(),e.preventDefault())})})})});F.displayName=B;var K="SelectValue",U=r.forwardRef((e,t)=>{let{__scopeSelect:n,className:r,style:i,children:o,placeholder:s="",...a}=e,u=_(K,n),{onValueNodeHasChildrenChange:c}=u,d=void 0!==o,h=(0,l.e)(t,u.onValueNodeChange);return(0,b.b)(()=>{c(d)},[c,d]),(0,T.jsx)(g.WV.span,{...a,ref:h,style:{pointerEvents:"none"},children:eR(u.value)?(0,T.jsx)(T.Fragment,{children:s}):o})});U.displayName=K;var z=r.forwardRef((e,t)=>{let{__scopeSelect:n,children:r,...i}=e;return(0,T.jsx)(g.WV.span,{"aria-hidden":!0,...i,ref:t,children:r||"▼"})});z.displayName="SelectIcon";var Z=e=>(0,T.jsx)(m.h,{asChild:!0,...e});Z.displayName="SelectPortal";var G="SelectContent",Y=r.forwardRef((e,t)=>{let n=_(G,e.__scopeSelect),[o,s]=r.useState();return((0,b.b)(()=>{s(new DocumentFragment)},[]),n.open)?(0,T.jsx)(J,{...e,ref:t}):o?i.createPortal((0,T.jsx)(q,{scope:e.__scopeSelect,children:(0,T.jsx)(P.Slot,{scope:e.__scopeSelect,children:(0,T.jsx)("div",{children:e.children})})}),o):null});Y.displayName=G;var[q,X]=N(G),J=r.forwardRef((e,t)=>{let{__scopeSelect:n,position:i="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:u,side:c,sideOffset:f,align:v,alignOffset:m,arrowPadding:g,collisionBoundary:y,collisionPadding:x,sticky:b,hideWhenDetached:C,avoidCollisions:S,...j}=e,k=_(G,n),[E,P]=r.useState(null),[I,N]=r.useState(null),O=(0,l.e)(t,e=>P(e)),[V,L]=r.useState(null),[A,W]=r.useState(null),H=D(n),[B,F]=r.useState(!1),K=r.useRef(!1);r.useEffect(()=>{if(E)return(0,M.Ry)(E)},[E]),(0,h.EW)();let U=r.useCallback(e=>{let[t,...n]=H().map(e=>e.ref.current),[r]=n.slice(-1),i=document.activeElement;for(let n of e)if(n===i||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&I&&(I.scrollTop=0),n===r&&I&&(I.scrollTop=I.scrollHeight),null==n||n.focus(),document.activeElement!==i))return},[H,I]),z=r.useCallback(()=>U([V,E]),[U,V,E]);r.useEffect(()=>{B&&z()},[B,z]);let{onOpenChange:Z,triggerPointerDownPosRef:Y}=k;r.useEffect(()=>{if(E){let e={x:0,y:0},t=t=>{var n,r,i,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(i=null===(n=Y.current)||void 0===n?void 0:n.x)&&void 0!==i?i:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(r=Y.current)||void 0===r?void 0:r.y)&&void 0!==o?o:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():E.contains(n.target)||Z(!1),document.removeEventListener("pointermove",t),Y.current=null};return null!==Y.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[E,Z,Y]),r.useEffect(()=>{let e=()=>Z(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[Z]);let[X,J]=ej(e=>{let t=H().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),r=ek(t,e,n);r&&setTimeout(()=>r.ref.current.focus())}),ee=r.useCallback((e,t,n)=>{let r=!K.current&&!n;(void 0!==k.value&&k.value===t||r)&&(L(e),r&&(K.current=!0))},[k.value]),et=r.useCallback(()=>null==E?void 0:E.focus(),[E]),en=r.useCallback((e,t,n)=>{let r=!K.current&&!n;(void 0!==k.value&&k.value===t||r)&&W(e)},[k.value]),er="popper"===i?Q:$,ei=er===Q?{side:c,sideOffset:f,align:v,alignOffset:m,arrowPadding:g,collisionBoundary:y,collisionPadding:x,sticky:b,hideWhenDetached:C,avoidCollisions:S}:{};return(0,T.jsx)(q,{scope:n,content:E,viewport:I,onViewportChange:N,itemRefCallback:ee,selectedItem:V,onItemLeave:et,itemTextRefCallback:en,focusSelectedItem:z,selectedItemText:A,position:i,isPositioned:B,searchRef:X,children:(0,T.jsx)(R.Z,{as:w.g7,allowPinchZoom:!0,children:(0,T.jsx)(p.M,{asChild:!0,trapped:k.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,s.M)(o,e=>{var t;null===(t=k.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}),children:(0,T.jsx)(d.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>k.onOpenChange(!1),children:(0,T.jsx)(er,{role:"listbox",id:k.contentId,"data-state":k.open?"open":"closed",dir:k.dir,onContextMenu:e=>e.preventDefault(),...j,...ei,onPlaced:()=>F(!0),ref:O,style:{display:"flex",flexDirection:"column",outline:"none",...j.style},onKeyDown:(0,s.M)(j.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||J(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=H().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>U(t)),e.preventDefault()}})})})})})})});J.displayName="SelectContentImpl";var $=r.forwardRef((e,t)=>{let{__scopeSelect:n,onPlaced:i,...s}=e,a=_(G,n),u=X(G,n),[c,d]=r.useState(null),[h,p]=r.useState(null),f=(0,l.e)(t,e=>p(e)),v=D(n),m=r.useRef(!1),w=r.useRef(!0),{viewport:y,selectedItem:x,selectedItemText:C,focusSelectedItem:S}=u,M=r.useCallback(()=>{if(a.trigger&&a.valueNode&&c&&h&&y&&x&&C){let e=a.trigger.getBoundingClientRect(),t=h.getBoundingClientRect(),n=a.valueNode.getBoundingClientRect(),r=C.getBoundingClientRect();if("rtl"!==a.dir){let i=r.left-t.left,s=n.left-i,a=e.left-s,l=e.width+a,u=Math.max(l,t.width),d=window.innerWidth-10,h=(0,o.u)(s,[10,Math.max(10,d-u)]);c.style.minWidth=l+"px",c.style.left=h+"px"}else{let i=t.right-r.right,s=window.innerWidth-n.right-i,a=window.innerWidth-e.right-s,l=e.width+a,u=Math.max(l,t.width),d=window.innerWidth-10,h=(0,o.u)(s,[10,Math.max(10,d-u)]);c.style.minWidth=l+"px",c.style.right=h+"px"}let s=v(),l=window.innerHeight-20,u=y.scrollHeight,d=window.getComputedStyle(h),p=parseInt(d.borderTopWidth,10),f=parseInt(d.paddingTop,10),g=parseInt(d.borderBottomWidth,10),w=p+f+u+parseInt(d.paddingBottom,10)+g,b=Math.min(5*x.offsetHeight,w),S=window.getComputedStyle(y),M=parseInt(S.paddingTop,10),R=parseInt(S.paddingBottom,10),T=e.top+e.height/2-10,j=x.offsetHeight/2,k=p+f+(x.offsetTop+j);if(k<=T){let e=s.length>0&&x===s[s.length-1].ref.current;c.style.bottom="0px";let t=h.clientHeight-y.offsetTop-y.offsetHeight;c.style.height=k+Math.max(l-T,j+(e?R:0)+t+g)+"px"}else{let e=s.length>0&&x===s[0].ref.current;c.style.top="0px";let t=Math.max(T,p+y.offsetTop+(e?M:0)+j);c.style.height=t+(w-k)+"px",y.scrollTop=k-T+y.offsetTop}c.style.margin="".concat(10,"px 0"),c.style.minHeight=b+"px",c.style.maxHeight=l+"px",null==i||i(),requestAnimationFrame(()=>m.current=!0)}},[v,a.trigger,a.valueNode,c,h,y,x,C,a.dir,i]);(0,b.b)(()=>M(),[M]);let[R,j]=r.useState();(0,b.b)(()=>{h&&j(window.getComputedStyle(h).zIndex)},[h]);let k=r.useCallback(e=>{e&&!0===w.current&&(M(),null==S||S(),w.current=!1)},[M,S]);return(0,T.jsx)(ee,{scope:n,contentWrapper:c,shouldExpandOnScrollRef:m,onScrollButtonChange:k,children:(0,T.jsx)("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:R},children:(0,T.jsx)(g.WV.div,{...s,ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});$.displayName="SelectItemAlignedPosition";var Q=r.forwardRef((e,t)=>{let{__scopeSelect:n,align:r="start",collisionPadding:i=10,...o}=e,s=V(n);return(0,T.jsx)(v.VY,{...s,...o,ref:t,align:r,collisionPadding:i,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Q.displayName="SelectPopperPosition";var[ee,et]=N(G,{}),en="SelectViewport",er=r.forwardRef((e,t)=>{let{__scopeSelect:n,nonce:i,...o}=e,a=X(en,n),u=et(en,n),c=(0,l.e)(t,a.onViewportChange),d=r.useRef(0);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),(0,T.jsx)(P.Slot,{scope:n,children:(0,T.jsx)(g.WV.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:(0,s.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=u;if((null==r?void 0:r.current)&&n){let e=Math.abs(d.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,i=Math.max(parseFloat(n.style.minHeight),parseFloat(n.style.height));if(i<r){let o=i+e,s=Math.min(r,o),a=o-s;n.style.height=s+"px","0px"===n.style.bottom&&(t.scrollTop=a>0?a:0,n.style.justifyContent="flex-end")}}}d.current=t.scrollTop})})})]})});er.displayName=en;var ei="SelectGroup",[eo,es]=N(ei),ea=r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,i=(0,f.M)();return(0,T.jsx)(eo,{scope:n,id:i,children:(0,T.jsx)(g.WV.div,{role:"group","aria-labelledby":i,...r,ref:t})})});ea.displayName=ei;var el="SelectLabel",eu=r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,i=es(el,n);return(0,T.jsx)(g.WV.div,{id:i.id,...r,ref:t})});eu.displayName=el;var ec="SelectItem",[ed,eh]=N(ec),ep=r.forwardRef((e,t)=>{let{__scopeSelect:n,value:i,disabled:o=!1,textValue:a,...u}=e,c=_(ec,n),d=X(ec,n),h=c.value===i,[p,v]=r.useState(null!=a?a:""),[m,w]=r.useState(!1),y=(0,l.e)(t,e=>{var t;return null===(t=d.itemRefCallback)||void 0===t?void 0:t.call(d,e,i,o)}),x=(0,f.M)(),b=r.useRef("touch"),C=()=>{o||(c.onValueChange(i),c.onOpenChange(!1))};if(""===i)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,T.jsx)(ed,{scope:n,value:i,disabled:o,textId:x,isSelected:h,onItemTextChange:r.useCallback(e=>{v(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[]),children:(0,T.jsx)(P.ItemSlot,{scope:n,value:i,disabled:o,textValue:p,children:(0,T.jsx)(g.WV.div,{role:"option","aria-labelledby":x,"data-highlighted":m?"":void 0,"aria-selected":h&&m,"data-state":h?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...u,ref:y,onFocus:(0,s.M)(u.onFocus,()=>w(!0)),onBlur:(0,s.M)(u.onBlur,()=>w(!1)),onClick:(0,s.M)(u.onClick,()=>{"mouse"!==b.current&&C()}),onPointerUp:(0,s.M)(u.onPointerUp,()=>{"mouse"===b.current&&C()}),onPointerDown:(0,s.M)(u.onPointerDown,e=>{b.current=e.pointerType}),onPointerMove:(0,s.M)(u.onPointerMove,e=>{if(b.current=e.pointerType,o){var t;null===(t=d.onItemLeave)||void 0===t||t.call(d)}else"mouse"===b.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,s.M)(u.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=d.onItemLeave)||void 0===t||t.call(d)}}),onKeyDown:(0,s.M)(u.onKeyDown,e=>{var t;(null===(t=d.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(k.includes(e.key)&&C()," "===e.key&&e.preventDefault())})})})})});ep.displayName=ec;var ef="SelectItemText",ev=r.forwardRef((e,t)=>{let{__scopeSelect:n,className:o,style:s,...a}=e,u=_(ef,n),c=X(ef,n),d=eh(ef,n),h=W(ef,n),[p,f]=r.useState(null),v=(0,l.e)(t,e=>f(e),d.onItemTextChange,e=>{var t;return null===(t=c.itemTextRefCallback)||void 0===t?void 0:t.call(c,e,d.value,d.disabled)}),m=null==p?void 0:p.textContent,w=r.useMemo(()=>(0,T.jsx)("option",{value:d.value,disabled:d.disabled,children:m},d.value),[d.disabled,d.value,m]),{onNativeOptionAdd:y,onNativeOptionRemove:x}=h;return(0,b.b)(()=>(y(w),()=>x(w)),[y,x,w]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(g.WV.span,{id:d.textId,...a,ref:v}),d.isSelected&&u.valueNode&&!u.valueNodeHasChildren?i.createPortal(a.children,u.valueNode):null]})});ev.displayName=ef;var em="SelectItemIndicator",eg=r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e;return eh(em,n).isSelected?(0,T.jsx)(g.WV.span,{"aria-hidden":!0,...r,ref:t}):null});eg.displayName=em;var ew="SelectScrollUpButton",ey=r.forwardRef((e,t)=>{let n=X(ew,e.__scopeSelect),i=et(ew,e.__scopeSelect),[o,s]=r.useState(!1),a=(0,l.e)(t,i.onScrollButtonChange);return(0,b.b)(()=>{if(n.viewport&&n.isPositioned){let e=function(){s(t.scrollTop>0)},t=n.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),o?(0,T.jsx)(eC,{...e,ref:a,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});ey.displayName=ew;var ex="SelectScrollDownButton",eb=r.forwardRef((e,t)=>{let n=X(ex,e.__scopeSelect),i=et(ex,e.__scopeSelect),[o,s]=r.useState(!1),a=(0,l.e)(t,i.onScrollButtonChange);return(0,b.b)(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;s(Math.ceil(t.scrollTop)<e)},t=n.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),o?(0,T.jsx)(eC,{...e,ref:a,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});eb.displayName=ex;var eC=r.forwardRef((e,t)=>{let{__scopeSelect:n,onAutoScroll:i,...o}=e,a=X("SelectScrollButton",n),l=r.useRef(null),u=D(n),c=r.useCallback(()=>{null!==l.current&&(window.clearInterval(l.current),l.current=null)},[]);return r.useEffect(()=>()=>c(),[c]),(0,b.b)(()=>{var e;let t=u().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[u]),(0,T.jsx)(g.WV.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,s.M)(o.onPointerDown,()=>{null===l.current&&(l.current=window.setInterval(i,50))}),onPointerMove:(0,s.M)(o.onPointerMove,()=>{var e;null===(e=a.onItemLeave)||void 0===e||e.call(a),null===l.current&&(l.current=window.setInterval(i,50))}),onPointerLeave:(0,s.M)(o.onPointerLeave,()=>{c()})})}),eS=r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e;return(0,T.jsx)(g.WV.div,{"aria-hidden":!0,...r,ref:t})});eS.displayName="SelectSeparator";var eM="SelectArrow";function eR(e){return""===e||void 0===e}r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,i=V(n),o=_(eM,n),s=X(eM,n);return o.open&&"popper"===s.position?(0,T.jsx)(v.Eh,{...i,...r,ref:t}):null}).displayName=eM;var eT=r.forwardRef((e,t)=>{let{value:n,...i}=e,o=r.useRef(null),s=(0,l.e)(t,o),a=(0,C.D)(n);return r.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(a!==n&&t){let r=new Event("change",{bubbles:!0});t.call(e,n),e.dispatchEvent(r)}},[a,n]),(0,T.jsx)(S.T,{asChild:!0,children:(0,T.jsx)("select",{...i,ref:s,defaultValue:n})})});function ej(e){let t=(0,y.W)(e),n=r.useRef(""),i=r.useRef(0),o=r.useCallback(e=>{let r=n.current+e;t(r),function e(t){n.current=t,window.clearTimeout(i.current),""!==t&&(i.current=window.setTimeout(()=>e(""),1e3))}(r)},[t]),s=r.useCallback(()=>{n.current="",window.clearTimeout(i.current)},[]);return r.useEffect(()=>()=>window.clearTimeout(i.current),[]),[n,o,s]}function ek(e,t,n){var r;let i=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===i.length&&(o=o.filter(e=>e!==n));let s=o.find(e=>e.textValue.toLowerCase().startsWith(i.toLowerCase()));return s!==n?s:void 0}eT.displayName="BubbleSelect";var eE=H,eP=F,eD=U,eI=z,eN=Z,eO=Y,eV=er,eL=ea,e_=eu,eA=ep,eW=ev,eH=eg,eB=ey,eF=eb,eK=eS},47250:function(e,t,n){n.d(t,{D:function(){return i}});var r=n(2265);function i(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},92812:function(e,t,n){n.d(t,{R:function(){return a},m:function(){return s}});var r=n(69948),i=n(43494),o=n(30924),s=class extends i.F{#e;#t;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.mutationCache,this.#e=[],this.state=e.state||a(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#t.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){this.#n=(0,o.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#r({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});let t="pending"===this.state.status,n=!this.#n.canStart();try{if(!t){this.#r({type:"pending",variables:e,isPaused:n}),await this.#t.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#r({type:"pending",context:t,variables:e,isPaused:n})}let r=await this.#n.start();return await this.#t.config.onSuccess?.(r,e,this.state.context,this),await this.options.onSuccess?.(r,e,this.state.context),await this.#t.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,e,this.state.context),this.#r({type:"success",data:r}),r}catch(t){try{throw await this.#t.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#t.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#r({type:"error",error:t})}}finally{this.#t.runNext(this)}}#r(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),r.V.batch(()=>{this.#e.forEach(t=>{t.onMutationUpdate(e)}),this.#t.notify({mutation:this,type:"updated",action:e})})}};function a(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},25524:function(e,t,n){n.d(t,{D:function(){return d}});var r=n(2265),i=n(92812),o=n(69948),s=n(49010),a=n(56298),l=class extends s.l{#i;#o=void 0;#s;#a;constructor(e,t){super(),this.#i=e,this.setOptions(t),this.bindMethods(),this.#l()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#i.defaultMutationOptions(e),(0,a.VS)(this.options,t)||this.#i.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,a.Ym)(t.mutationKey)!==(0,a.Ym)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(e){this.#l(),this.#u(e)}getCurrentResult(){return this.#o}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#l(),this.#u()}mutate(e,t){return this.#a=t,this.#s?.removeObserver(this),this.#s=this.#i.getMutationCache().build(this.#i,this.options),this.#s.addObserver(this),this.#s.execute(e)}#l(){let e=this.#s?.state??(0,i.R)();this.#o={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#u(e){o.V.batch(()=>{if(this.#a&&this.hasListeners()){let t=this.#o.variables,n=this.#o.context;e?.type==="success"?(this.#a.onSuccess?.(e.data,t,n),this.#a.onSettled?.(e.data,null,t,n)):e?.type==="error"&&(this.#a.onError?.(e.error,t,n),this.#a.onSettled?.(void 0,e.error,t,n))}this.listeners.forEach(e=>{e(this.#o)})})}},u=n(93191),c=n(37832);function d(e,t){let n=(0,u.NL)(t),[i]=r.useState(()=>new l(n,e));r.useEffect(()=>{i.setOptions(e)},[i,e]);let s=r.useSyncExternalStore(r.useCallback(e=>i.subscribe(o.V.batchCalls(e)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),a=r.useCallback((e,t)=>{i.mutate(e,t).catch(c.Z)},[i]);if(s.error&&(0,c.L)(i.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:a,mutateAsync:s.mutate}}}}]);