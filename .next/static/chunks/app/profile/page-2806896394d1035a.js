(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{1858:function(e,t,r){Promise.resolve().then(r.bind(r,4946))},6463:function(e,t,r){"use strict";var s=r(1169);r.o(s,"useParams")&&r.d(t,{useParams:function(){return s.useParams}}),r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},4492:function(e,t,r){"use strict";var s=r(2265),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=s.useState,n=s.useEffect,c=s.useLayoutEffect,i=s.useDebugValue;function x(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!l(e,r)}catch(e){return!0}}var o="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),s=a({inst:{value:r,getSnapshot:t}}),l=s[0].inst,o=s[1];return c(function(){l.value=r,l.getSnapshot=t,x(l)&&o({inst:l})},[e,r,t]),n(function(){return x(l)&&o({inst:l}),e(function(){x(l)&&o({inst:l})})},[e]),i(r),r};t.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:o},5107:function(e,t,r){"use strict";var s=r(2265),l=r(554),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=l.useSyncExternalStore,c=s.useRef,i=s.useEffect,x=s.useMemo,o=s.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,s,l){var d=c(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;var m=n(e,(d=x(function(){function e(e){if(!i){if(i=!0,n=e,e=s(e),void 0!==l&&p.hasValue){var t=p.value;if(l(t,e))return c=t}return c=e}if(t=c,a(n,e))return t;var r=s(e);return void 0!==l&&l(t,r)?t:(n=e,c=r)}var n,c,i=!1,x=void 0===r?null:r;return[function(){return e(t())},null===x?void 0:function(){return e(x())}]},[t,r,s,l]))[0],d[1]);return i(function(){p.hasValue=!0,p.value=m},[m]),o(m),m}},554:function(e,t,r){"use strict";e.exports=r(4492)},5006:function(e,t,r){"use strict";e.exports=r(5107)},4946:function(e,t,r){"use strict";r.d(t,{default:function(){return z}});var s=r(7437),l=r(2265);let a={DASHBOARD:"dashboard",ORDERS:"orders",ADDRESS:"address",ACCOUNT_DETAILS:"account details"};var n=r(3344);function c(e){return(0,s.jsx)(n.n,{viewBox:"0 0 512 512",fill:"currentColor",...e,children:(0,s.jsx)("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"})})}var i=r(2311),x=r(6648),o=r(6463);let{useRef:d}=l;function p(e){let t=d();return r=>{let s=e(r);return!function(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,s]of e)if(!Object.is(s,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let s of r)if(!Object.prototype.hasOwnProperty.call(t,s)||!Object.is(e[s],t[s]))return!1;return!0}(t.current,s)?t.current=s:t.current}}var m=r(9099);let u={id:"",product:"",quantity:"",name:"",telephone:0,total:0},h=(0,m.Ue)(e=>({order:null,setOrder:t=>e({order:t}),clearOrder:()=>e({order:null}),resetOrder:()=>e({order:u})}));function f(e){let{tabActive:t,setTabActive:r}=e,l=(0,o.useRouter)(),{clearOrder:n}=h(p(e=>({clearOrder:e.clearOrder})));return(0,s.jsxs)("div",{className:"flex basis-[260px] flex-col border-r border-solid border-light_gray_color_second p-[40px] smallest-screen:border-b smallest-screen:border-r-0",children:[(0,s.jsxs)("div",{className:"mb-[25px] flex items-center gap-[20px] text-start smallest-screen:flex-col",children:[(0,s.jsx)("div",{className:"relative h-[70px] w-[70px] overflow-clip object-cover",children:(0,s.jsx)(x.default,{src:"/assets/images/avatar.jpg",fill:!0,alt:"avatar"})}),(0,s.jsxs)("div",{className:"flex flex-col text-[14px] leading-[1.5] tracking-[0.02] smallest-screen:flex-row",children:[(0,s.jsx)("span",{className:"text-text_color",children:"Hello,\xa0"}),(0,s.jsx)("span",{className:"font-medium text-primary",children:"Tran Binh"})]})]}),(0,s.jsx)("div",{className:"h-full w-full flex-1",children:(0,s.jsxs)("ul",{className:"flex flex-col gap-[25px] text-[14px] font-medium uppercase leading-[1] tracking-[0.025em] text-primary",children:[(0,s.jsx)("li",{className:(0,i.Z)("cursor-pointer hover:text-secondary smallest-screen:text-center",{"text-text_color":t===a.DASHBOARD}),onClick:()=>{t!==a.DASHBOARD&&r(a.DASHBOARD)},children:"dashboard"}),(0,s.jsx)("li",{className:(0,i.Z)("cursor-pointer hover:text-secondary smallest-screen:text-center",{"text-text_color":t===a.ORDERS}),onClick:()=>{t!==a.ORDERS&&r(a.ORDERS),n()},children:"orders"}),(0,s.jsx)("li",{className:(0,i.Z)("cursor-pointer hover:text-secondary smallest-screen:text-center",{"text-text_color":t===a.ADDRESS}),onClick:()=>{t!==a.ADDRESS&&r(a.ADDRESS)},children:"address"}),(0,s.jsx)("li",{className:(0,i.Z)("cursor-pointer hover:text-secondary smallest-screen:text-center",{"text-text_color":t===a.ACCOUNT_DETAILS}),onClick:()=>{t!==a.ACCOUNT_DETAILS&&r(a.ACCOUNT_DETAILS)},children:"account details"}),(0,s.jsxs)("li",{className:"flex cursor-pointer gap-[4px] hover:text-secondary smallest-screen:justify-center",onClick:()=>{l.push("/")},children:[(0,s.jsx)(c,{size:14,className:"fill-current"}),"log out"]})]})})]})}var j=r(3236);function b(e){return(0,s.jsx)(n.n,{viewBox:"0 0 576 512",fill:"currentColor",...e,children:(0,s.jsx)("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})})}var g=r(4601);function y(e){let{RedirectOrderDetail:t}=e;return(0,s.jsxs)("tr",{className:"mb-[10px] xxx-smallest-screen:block",children:[(0,s.jsx)("td",{className:"py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center",children:(0,s.jsx)("div",{onClick:t,className:"cursor-pointer font-bold text-primary hover:text-secondary",children:"#PH1244721"})}),(0,s.jsx)("td",{className:"py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center",children:"3"}),(0,s.jsx)("td",{className:"py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center",children:"Sunday,April 21,2024"}),(0,s.jsx)("td",{className:"py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center",children:"$330"}),(0,s.jsx)("td",{className:"py-[7px] pr-[15px] xxx-smallest-screen:flex xxx-smallest-screen:justify-center",children:"Processing"}),(0,s.jsx)("td",{className:"py-[7px] text-center xxx-smallest-screen:flex xxx-smallest-screen:justify-center",children:(0,s.jsx)(g.Z,{value:"View Order",element:(0,s.jsx)(j.Z,{size:"none",variant:"none",onClick:t,startIcon:(0,s.jsx)(b,{size:18,className:"fill-current text-primary hover:text-secondary"})})})})]})}function N(e){return(0,s.jsx)(n.n,{viewBox:"0 0 512 512",fill:"currentColor",...e,children:(0,s.jsx)("path",{d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"})})}var v=r(9922);function w(e){let{setTabActive:t}=e,r={id:"",product:"",quantity:"",name:"",telephone:null,total:null},{setOrder:l,clearOrder:n}=((0,o.useRouter)(),h(p(e=>({setOrder:e.setOrder,clearOrder:e.clearOrder})))),c=()=>{t(a.ORDERS),l(r)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"mb-[25px] mt-[10px] flex flex-col xxx-smallest-screen:text-center",children:[(0,s.jsx)("h2",{className:"text-[22px] font-medium leading-[28px] text-primary",children:"Recent Orders"}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("table",{className:"mt-[20px] w-full xxx-smallest-screen:block",children:[(0,s.jsx)("thead",{className:"w-full border-b border-solid border-light_gray_color_second xxx-smallest-screen:hidden",children:(0,s.jsxs)("tr",{className:"w-full text-left text-[13px] uppercase leading-[1] tracking-[0.02em] text-text_color xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"w-[20%] pb-[15px] font-normal",children:"Order"}),(0,s.jsx)("th",{className:"w-[10%] pb-[15px] font-normal",children:"Items"}),(0,s.jsx)("th",{className:"w-[40%] pb-[15px] font-normal",children:"Date"}),(0,s.jsx)("th",{className:"w-[15%] pb-[15px] font-normal",children:"Total"}),(0,s.jsx)("th",{className:"w-[15%] pb-[15px] font-normal",children:"Status"}),(0,s.jsx)("th",{className:"w-[10%] pb-[15px] font-normal",children:"Action"})]})}),(0,s.jsxs)("tbody",{className:"w-full text-left xxx-smallest-screen:block",children:[(0,s.jsx)(y,{RedirectOrderDetail:c}),(0,s.jsx)(y,{RedirectOrderDetail:c}),(0,s.jsx)(y,{RedirectOrderDetail:c})]})]}),(0,s.jsx)("div",{className:"mt-[20px] flex justify-center",children:(0,s.jsx)(j.Z,{variant:"primary",size:"xsm",className:"text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]",onClick:()=>{t(a.ORDERS),n()},children:"View All"})})]})]}),(0,s.jsxs)("div",{className:"mb-[25px] flex flex-col xxx-smallest-screen:text-center",children:[(0,s.jsx)("h2",{className:"text-[22px] font-medium leading-[28px] text-primary",children:"Your Shipping Address"}),(0,s.jsxs)("div",{className:"mt-[20px] flex items-center gap-[10px]",children:[(0,s.jsx)(v.Z,{size:20,className:"fill-current text-primary"}),(0,s.jsx)("span",{className:"text-[16px] leading-[1.5] tracking-[0.02em] text-text_color",children:"54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang"}),(0,s.jsx)(g.Z,{value:"Edit",element:(0,s.jsx)(j.Z,{size:"none",variant:"icon",startIcon:(0,s.jsx)(N,{size:20,className:"ml-[5px] fill-current"}),onClick:()=>{t(a.ADDRESS)}})})]})]}),(0,s.jsxs)("div",{className:"flex flex-col xxx-smallest-screen:text-center",children:[(0,s.jsx)("h2",{className:"text-[22px] font-medium leading-[28px] text-primary",children:"Account Details"}),(0,s.jsx)("div",{className:"mt-[20px] flex items-center justify-center gap-[10px]",children:(0,s.jsx)("table",{className:"min-w-[50%] xxx-smallest-screen:block",children:(0,s.jsxs)("tbody",{className:"flex w-full flex-col items-center xxx-smallest-screen:block",children:[(0,s.jsxs)("tr",{className:"flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"min-w-[50%] py-[14px] font-medium text-primary",children:"Name :"}),(0,s.jsx)("td",{className:"min-w-[50%] py-[14px]",children:"Tran Duc Binh"})]}),(0,s.jsxs)("tr",{className:"flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"min-w-[50%] py-[14px] font-medium text-primary",children:"Telephone :"}),(0,s.jsx)("td",{className:"min-w-[50%] py-[14px]",children:"0123 987 456"})]}),(0,s.jsxs)("tr",{className:"flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"min-w-[50%] py-[14px] font-medium text-primary",children:"Email :"}),(0,s.jsx)("td",{className:"min-w-[50%] py-[14px]",children:"example@gmail.com"})]}),(0,s.jsxs)("tr",{className:"flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"min-w-[50%] py-[14px] font-medium text-primary",children:"Nationality :"}),(0,s.jsx)("td",{className:"min-w-[50%] py-[14px]",children:"Viet Nam"})]})]})})}),(0,s.jsx)("div",{className:"mt-[20px] flex justify-center",children:(0,s.jsx)(j.Z,{variant:"primary",size:"xsm",className:"text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]",onClick:()=>{t(a.ACCOUNT_DETAILS)},children:"Edit"})})]})]})}var _=r(587);function k(){return(0,s.jsxs)("div",{className:"mt-[10px] flex max-w-[430px] flex-col",children:[(0,s.jsx)("h2",{className:"text-[22px] font-medium leading-[28px] text-primary xxx-smallest-screen:text-center",children:"Address"}),(0,s.jsxs)("form",{action:"",className:"mt-[25px] flex flex-col gap-[10px]",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"province",children:"Province *"}),(0,s.jsx)(_.default,{id:"province"})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"district",children:"District *"}),(0,s.jsx)(_.default,{id:"district"})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"ward",children:"Ward *"}),(0,s.jsx)(_.default,{id:"ward"})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"street",children:"Street *"}),(0,s.jsx)(_.default,{id:"street"})]}),(0,s.jsx)(j.Z,{type:"submit",size:"xsm",variant:"secondary",className:"mt-[35px] font-bold",children:"Save changes"})]})]})}function D(){return(0,s.jsxs)("div",{className:"mt-[10px] flex max-w-[430px] flex-col",id:"account_details",children:[(0,s.jsx)("h2",{className:"text-[22px] font-medium leading-[28px] text-primary xxx-smallest-screen:text-center",children:"Account Details"}),(0,s.jsxs)("form",{action:"",className:"mt-[25px] flex max-w-[430px] flex-col gap-[10px]",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"user_name",children:"Name *"}),(0,s.jsx)(_.default,{id:"user_name"})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"user_telephone",children:"Telephone *"}),(0,s.jsx)(_.default,{id:"user_telephone"})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"user_email",children:"Email *"}),(0,s.jsx)(_.default,{id:"user_email"})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"user_nationality",children:"Nationnality *"}),(0,s.jsx)(_.default,{id:"user_nationality"})]}),(0,s.jsxs)("fieldset",{className:"mt-[40px] flex max-w-[430px] flex-col gap-[10px]",children:[(0,s.jsx)("legend",{className:"mb-[25px] text-[22px] font-medium leading-[28px] text-primary",children:"Password Change"}),(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"password",children:"Current password (leave blank to leave unchanged)"}),(0,s.jsx)(_.default,{id:"password"})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"new_password",children:"New password (leave blank to leave unchanged)"}),(0,s.jsx)(_.default,{id:"new_password"})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-[10px]",children:[(0,s.jsx)("label",{className:"text-primary",htmlFor:"confirm_password",children:"Confirm new password"}),(0,s.jsx)(_.default,{id:"confirm_password"})]})]})]}),(0,s.jsx)(j.Z,{type:"submit",size:"xsm",variant:"secondary",className:"mt-[35px] font-bold",children:"Save changes"})]})}function S(e){let{RedirectOrderDetail:t,orderList:r}=e,l=r.length,a=(0,o.useRouter)();return 0===l?(0,s.jsxs)("div",{className:"flex flex-col gap-[20px]",children:[(0,s.jsx)("h3",{className:"mb-[10px]",children:"No order has been made yet."}),(0,s.jsx)("div",{children:(0,s.jsx)(j.Z,{variant:"primary",size:"sm",onClick:()=>{a.push("/")},children:"browser products"})})]}):(0,s.jsxs)("table",{className:"mt-[20px] w-full xxx-smallest-screen:block",children:[(0,s.jsx)("thead",{className:"w-full border-b border-solid border-light_gray_color_second xxx-smallest-screen:hidden",children:(0,s.jsxs)("tr",{className:"w-full text-left text-[13px] uppercase leading-[1] tracking-[0.02em] text-text_color xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"w-[20%] pb-[15px] font-normal",children:"Order"}),(0,s.jsx)("th",{className:"w-[10%] pb-[15px] font-normal",children:"Items"}),(0,s.jsx)("th",{className:"w-[40%] pb-[15px] font-normal",children:"Date"}),(0,s.jsx)("th",{className:"w-[15%] pb-[15px] font-normal",children:"Total"}),(0,s.jsx)("th",{className:"w-[15%] pb-[15px] font-normal",children:"Status"}),(0,s.jsx)("th",{className:"w-[10%] pb-[15px] font-normal",children:"Action"})]})}),(0,s.jsxs)("tbody",{className:"w-full text-left xxx-smallest-screen:block",children:[(0,s.jsx)(y,{RedirectOrderDetail:t}),(0,s.jsx)(y,{RedirectOrderDetail:t}),(0,s.jsx)(y,{RedirectOrderDetail:t}),(0,s.jsx)(y,{RedirectOrderDetail:t}),(0,s.jsx)(y,{RedirectOrderDetail:t})]})]})}var O=r(7138);function A(){return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("h3",{className:"mb-[10px]",children:["Order #",(0,s.jsx)("span",{className:"font-bold uppercase text-black",children:"PH1244721"}),"\xa0was placed on\xa0",(0,s.jsx)("span",{className:"font-bold capitalize text-black",children:"Sunday,April 21,2024"}),"\xa0and is currently\xa0",(0,s.jsx)("span",{className:"font-bold capitalize text-black",children:"processing"}),"."]}),(0,s.jsxs)("div",{className:"mb-[45px] mt-[30px] flex flex-col",children:[(0,s.jsx)("h2",{className:"mb-[35px] text-[22px] font-medium leading-[28px] text-primary",children:"Order Details"}),(0,s.jsxs)("table",{className:"xxx-smallest-screen:block",children:[(0,s.jsx)("thead",{className:"xxx-smallest-screen:hidden",children:(0,s.jsxs)("tr",{className:"uppercase xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] text-left text-[13px] font-normal leading-[1]",children:"product"}),(0,s.jsx)("th",{className:"border-b border-solid border-light_gray_color_second pb-[15px] text-right text-[13px] font-normal leading-[1]",children:"total"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{className:"xxx-smallest-screen:block",children:[(0,s.jsx)("td",{className:"w-[70%] pb-[6px] pt-[15px] text-left text-[13px] font-normal leading-[1]",children:(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsxs)("div",{className:"text-[14px] leading-[1.27] text-primary",children:[(0,s.jsx)(O.default,{href:"/pets/{id}",className:"hover:text-secondary",children:"Husky"}),(0,s.jsx)("span",{children:" \xd7\xa03 "})]})})}),(0,s.jsxs)("td",{className:"pb-[6px] pt-[15px] text-right font-quicksand text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary",children:[(0,s.jsx)("span",{children:"15.000.000"}),"\xa0VND"]})]}),(0,s.jsxs)("tr",{className:"xxx-smallest-screen:block",children:[(0,s.jsx)("td",{className:"w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] pt-[6px] text-left text-[13px] font-normal leading-[1]",children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"text-[14px] leading-[1.27] text-primary",children:[(0,s.jsx)(O.default,{href:"/pets/{id}",className:"hover:text-secondary",children:"Dog food"}),(0,s.jsx)("span",{children:" \xd7\xa02 "})]}),(0,s.jsxs)("ul",{className:"mt-[5px] flex gap-[10px]",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{className:"capitalize",children:"weight : "}),(0,s.jsx)("span",{className:"text-primary",children:" 5kg "})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{className:"capitalize",children:"Ingredient : "}),(0,s.jsx)("span",{className:"text-primary",children:" beef "})]})]})]})}),(0,s.jsxs)("td",{className:"border-b border-solid border-light_gray_color_second pb-[15px] pt-[6px] text-right font-quicksand text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary",children:[(0,s.jsx)("span",{children:"500.000"}),"\xa0VND"]})]})]}),(0,s.jsxs)("tfoot",{children:[(0,s.jsxs)("tr",{className:"uppercase xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]",children:"subtotal :"}),(0,s.jsxs)("td",{className:"border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary",children:[(0,s.jsx)("span",{children:"15.500.000"})," vnd"]})]}),(0,s.jsxs)("tr",{className:"uppercase xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]",children:"Shipping :"}),(0,s.jsxs)("td",{className:"border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary",children:[(0,s.jsx)("span",{children:"50.000"})," vnd"]})]}),(0,s.jsxs)("tr",{className:"xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]",children:"payment method :"}),(0,s.jsx)("td",{className:"border-b border-solid border-light_gray_color_second py-[15px] text-right text-[15px] font-normal leading-[1.5] tracking-[0.01em] text-primary",children:"Direct bank transfer"})]}),(0,s.jsxs)("tr",{className:"xxx-smallest-screen:block",children:[(0,s.jsx)("th",{className:"w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]",children:"Total :"}),(0,s.jsxs)("td",{className:"border-b border-solid border-light_gray_color_second py-[15px] text-right font-quicksand text-[24px] font-bold leading-[23px] tracking-[-0.02em] text-secondary",children:[(0,s.jsx)("span",{children:"15.550.000"})," VND"]})]})]})]})]}),(0,s.jsxs)("div",{className:"mb-[40px] flex flex-wrap",children:[(0,s.jsxs)("div",{className:"flex w-[220px] flex-col",children:[(0,s.jsx)("h2",{className:"mb-[35px] text-[22px] font-medium leading-[28px] text-primary",children:"Bill Detail"}),(0,s.jsxs)("ul",{className:"flex flex-col",children:[(0,s.jsx)("li",{children:"Tran Duc Binh"}),(0,s.jsx)("li",{children:"0123 987 456"}),(0,s.jsx)("li",{children:"example@gmail.com"}),(0,s.jsx)("li",{children:"Viet nam"})]})]}),(0,s.jsxs)("div",{className:"flex w-[220px] flex-col",children:[(0,s.jsx)("h2",{className:"mb-[35px] text-[22px] font-medium leading-[28px] text-primary",children:"Address Detail"}),(0,s.jsxs)("ul",{className:"flex flex-col",children:[(0,s.jsx)("li",{children:"Da Nang"}),(0,s.jsx)("li",{children:"Lien Chieu"}),(0,s.jsx)("li",{children:"Hoa Khanh Bac"}),(0,s.jsx)("li",{children:"54 Nguyen Luong Bang"})]})]})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("p",{children:[(0,s.jsx)("i",{className:"font-bold",children:"Note"})," : Đồ dễ vỡ shipper cẩn thận gi\xfap em, nếu kh\xf4ng li\xean lạc được th\xec gọi cho số 0555666777"]})})]})}function C(e){let{setTabActive:t}=e,r={id:"",product:"",quantity:"",name:"",telephone:null,total:null},{order:l,setOrder:n}=h(p(e=>({order:e.order,setOrder:e.setOrder})));return(0,s.jsx)("div",{className:"mt-[10px] flex flex-col",children:l?(0,s.jsx)(A,{}):(0,s.jsx)(S,{RedirectOrderDetail:()=>{t(a.ORDERS),n(r)},orderList:[r]})})}function R(e){let{tabActive:t,setTabActive:r}=e;return(0,s.jsxs)("div",{className:"flex-1 px-[50px] py-[35px] text-[14px] leading-[1.5] tracking-[0.02em] text-text_color",children:[t===a.DASHBOARD&&(0,s.jsx)(w,{setTabActive:r}),t===a.ORDERS&&(0,s.jsx)(C,{setTabActive:r}),t===a.ADDRESS&&(0,s.jsx)(k,{}),t===a.ACCOUNT_DETAILS&&(0,s.jsx)(D,{})]})}var E=r(3679);function z(){let[e,t]=(0,l.useState)(a.DASHBOARD);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(E.Z,{pathLink:["profile"],pathName:["Profile"]}),(0,s.jsx)("div",{className:"mx-auto mb-[40px] mt-[30px] min-w-[320px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px]",children:(0,s.jsxs)("div",{className:"flex h-full w-full bg-white smallest-screen:block",children:[(0,s.jsx)(f,{tabActive:e,setTabActive:t}),(0,s.jsx)(R,{tabActive:e,setTabActive:t})]})})]})}},3679:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var s=r(7437),l=r(7138),a=r(2833);function n(e){let{pathLink:t,pathName:r}=e;return 1===t.length?(0,s.jsxs)("div",{className:"w-full min-w-[320px] bg-white px-[50px] pb-[35px] pt-[30px] text-center text-primary",children:[(0,s.jsx)("div",{className:"h-full w-full",children:(0,s.jsxs)("ol",{className:"mx-auto flex h-full w-[780px] max-w-full flex-wrap items-center justify-center text-[13px] font-medium capitalize leading-[1.23] tracking-[0.015em]",children:[(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/",className:"hover_animate hover:text-secondary",children:"home"})}),(0,s.jsx)("li",{className:"mx-[7px]",children:(0,s.jsx)(a.Z,{size:7,className:"translate-y-[1px] rotate-[90deg] fill-current"})}),(0,s.jsx)("li",{children:r[0]})]})}),(0,s.jsx)("h1",{className:"mx-auto max-w-[600px] font-quicksand font-bold capitalize tracking-[0.02em] large-screen:mt-[20px] large-screen:text-[40px] large-screen:leading-[42px] small-screen:mt-[30px] small-screen:text-[30px] small-screen:leading-[34px]",children:r[0]})]}):(0,s.jsxs)("div",{className:"w-full min-w-[320px] bg-white px-[50px] pb-[35px] pt-[30px] text-center text-primary",children:[(0,s.jsx)("div",{className:"h-full w-full",children:(0,s.jsxs)("ol",{className:"mx-auto flex h-full w-[780px] max-w-full flex-wrap items-center justify-center text-[13px] font-medium capitalize leading-[1.23] tracking-[0.015em]",children:[(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/",className:"hover_animate hover:text-secondary",children:"home"})}),t.slice(0,-1).map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center",children:[(0,s.jsx)(a.Z,{size:7,className:"mx-[7px] translate-y-[1px] rotate-[90deg] fill-current"}),(0,s.jsx)(l.default,{href:e,className:"hover_animate hover:text-secondary",children:r[t]})]},t)),(0,s.jsx)("li",{className:"mx-[7px]",children:(0,s.jsx)(a.Z,{size:7,className:"translate-y-[1px] rotate-[90deg] fill-current"})}),(0,s.jsx)("li",{children:r.at(-1)})]})}),(0,s.jsx)("h1",{className:"mx-auto max-w-[600px] font-quicksand font-bold capitalize tracking-[0.02em] large-screen:mt-[20px] large-screen:text-[40px] large-screen:leading-[42px] small-screen:mt-[30px] small-screen:text-[30px] small-screen:leading-[34px]",children:r.at(-1)})]})}},3236:function(e,t,r){"use strict";var s=r(7437),l=r(2218),a=r(2265);let n=(0,l.j)("inline-block outline-none border-solid border-[2px] cursor-pointer rounded-[25px] text-center uppercase hover_animate ",{variants:{size:{xsm:"px-[25px] py-[15px]",sm:"px-[28px] py-[6px] text-[11px] leading-[14px] font-bold tracking-wider",md:"px-[30px] py-[8px] text-[13px] leading-[16px] font-bold tracking-wider",lg:"px-[34px] py-[15.5px] text-[12px] leading-[15px] font-bold tracking-[0.03em]",circle_xsm:"p-[3px] text-[7px] leading-[1]",circle_sm:"p-[7px] text-[11px] leading-[1]",circle_md:"p-[11px] text-[16px] leading-[1]",circle_lg:"p-[12px]",circle_xlg:"p-[15px] text-[21px] leading-[1]",circle_xxl:"p-[33px]",none:"p-0"},variant:{primary:"bg-white text-primary border-primary hover:bg-primary hover:text-white",secondary:"bg-primary text-white border-primary hover:bg-white hover:text-primary",tertiary:"bg-white text-primary border-white hover:bg-primary hover:border-primary hover:text-white",discovery:"bg-dark_orange_color text-white border-dark_orange_color hover:bg-white hover:text-dark_orange_color",none:"bg-transparent border-transparent text-black hover:opacity-[0.85]",icon:"text-primary hover:text-secondary border-none"}},defaultVariants:{size:"md",variant:"primary"}}),c=(0,a.forwardRef)((e,t)=>{let{size:r,variant:l,children:c,startIcon:i,endIcon:x,className:o,onClick:d,...p}=e,m=(0,a.useMemo)(()=>n({size:r,variant:l}),[r,l]);o&&(m+=" "+o);let u=i&&(0,s.jsxs)("span",{children:[" ",i," "]}),h=x&&(0,s.jsxs)("span",{children:[" ",x," "]});return(0,s.jsxs)("button",{className:m,ref:t,...p,onClick:d&&d,children:[u,c,h]})});c.displayName="Button",t.Z=c},2833:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(7437),l=r(3344);function a(e){return(0,s.jsx)(l.n,{viewBox:"0 0 448 512",fill:"currentColor",...e,children:(0,s.jsx)("path",{d:"M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z",strokeWidth:70,stroke:"currentColor"})})}},9922:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(7437),l=r(3344);function a(e){return(0,s.jsx)(l.n,{viewBox:"0 0 384 512",fill:"currentColor",...e,children:(0,s.jsx)("path",{d:"M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"})})}},587:function(e,t,r){"use strict";var s=r(7437),l=r(2218),a=r(2265);let n=(0,l.j)("font-medium border-solid border rounded-[3px] outline-none tracking-[0.01em]",{variants:{inputSize:{small:"px-[10px] py-[8px] text-[11px] leading-[14px]",medium:"px-[12px] py-[9px] text-[13px] leading-[16px]",large:"px-[14px] py-[10px] text-[15px] leading-[18px]",quantity:"w-[50px]",medium_full_width:"px-[12px] py-[9px] text-[13px] leading-[16px] w-full font-quicksand ",form_controls:"w-[18px]  h-[18px] "},variant:{primary:"text-primary border-input_border_color bg-background_color ",secondary:"bg-green-500 text-white",third:"bg-red-500 text-white",quantity:"text-center text-[18px] font-medium leading-[1] tracking-[0.015em] text-primary bg-white border-none outline-none appearance-none"}},compoundVariants:[{variant:"primary",class:"focus:outline-none focus:border-primary"},{variant:"secondary",class:"focus:bg-green-600 focus:border-green-600"},{variant:"third",class:"focus:bg-red-600 focus:border-red-600"}],defaultVariants:{inputSize:"medium",variant:"primary"}}),c=(0,a.forwardRef)((e,t)=>{let{inputSize:r,variant:l,trimOnBlur:c,className:i,onChange:x,onBlur:o,...d}=e,p=(0,a.useMemo)(()=>n({inputSize:r,variant:l}),[r,l]);return i&&(p+=" "+i),(0,s.jsx)("input",{ref:t,className:p,...d,onBlur:e=>{if(c){let t=e.target.value.trim();null==x||x({...e,target:{...e.target,value:t}}),null==o||o(e)}}})});c.displayName="Input",t.default=c},3344:function(e,t,r){"use strict";r.d(t,{n:function(){return n}});var s=r(7437),l=r(2311);let a={small:16,medium:24,large:32};function n(e){let{size:t,className:r,...n}=e,c="string"==typeof t?a[t]:t;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:(0,l.Z)("select-none",r),focusable:"false","aria-hidden":"true",width:c,height:c,...n})}},4601:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(7437),l=r(2311);function a(e){let{value:t,element:r,enable:a=!0}=e,n=(0,s.jsx)("span",{className:(0,l.Z)("tooltip_animate invisible absolute bottom-[calc((100%+10px))] right-[calc(50%-21px)] inline-flex max-w-[120px] translate-y-[7px] scale-[0.7] rounded-[15px] bg-primary px-[9px] py-[6px] text-center text-[10px] font-bold uppercase leading-[13px] tracking-[0.025em] text-white opacity-0 after:absolute after:bottom-[-10px] after:right-[15px] after:block after:border-[6px] after:border-solid after:border-transparent after:border-t-primary after:content-[''] group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100",{"text-wrap":t.length>20,"text-nowrap":t.length<20}),children:t});return(0,s.jsxs)("div",{className:"group relative inline-block",children:[a&&n,r]})}},2311:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(4839);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.Z)(t)}},9099:function(e,t,r){"use strict";r.d(t,{Ue:function(){return p}});let s=e=>{let t;let r=new Set,s=(e,s)=>{let l="function"==typeof e?e(t):e;if(!Object.is(l,t)){let e=t;t=(null!=s?s:"object"!=typeof l||null===l)?l:Object.assign({},t,l),r.forEach(r=>r(t,e))}},l=()=>t,a={setState:s,getState:l,getInitialState:()=>n,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},n=t=e(s,l,a);return a},l=e=>e?s(e):s;var a=r(2265),n=r(5006);let{useDebugValue:c}=a,{useSyncExternalStoreWithSelector:i}=n,x=!1,o=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?l(e):e,r=(e,r)=>(function(e,t=o,r){r&&!x&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),x=!0);let s=i(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return c(s),s})(t,e,r);return Object.assign(r,t),r},p=e=>e?d(e):d}},function(e){e.O(0,[231,885,971,23,744],function(){return e(e.s=1858)}),_N_E=e.O()}]);