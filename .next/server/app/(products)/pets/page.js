(()=>{var e={};e.id=758,e.ids=[758],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4326:(e,r,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.r(r),s.d(r,{GlobalError:()=>p.a,__next_app__:()=>b,originalPathname:()=>g,pages:()=>f,routeModule:()=>v,tree:()=>h});var t=s(5690),a=s(7973),n=s(8852),i=s(5603),o=s(2504),c=s(5932),x=s(6550),p=s.n(x),d=s(6979),m={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(m[e]=()=>d[e]);s.d(r,m);var u=e([t,a,n,i]);[t,a,n,i]=u.then?(await u)():u;let h=["",{children:["(products)",{children:["pets",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5690)),"D:\\PetShopFAKE\\deploy\\New folder\\pet-shop-web\\src\\app\\(products)\\pets\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7973)),"D:\\PetShopFAKE\\deploy\\New folder\\pet-shop-web\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,8852)),"D:\\PetShopFAKE\\deploy\\New folder\\pet-shop-web\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,5603)),"D:\\PetShopFAKE\\deploy\\New folder\\pet-shop-web\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],f=["D:\\PetShopFAKE\\deploy\\New folder\\pet-shop-web\\src\\app\\(products)\\pets\\page.tsx"],g="/(products)/pets/page",b={require:s,loadChunk:()=>Promise.resolve()},v=new o.AppPageRouteModule({definition:{kind:c.x.APP_PAGE,page:"/(products)/pets/page",pathname:"/pets",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:h}});l()}catch(e){l(e)}})},5187:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,9404,23)),Promise.resolve().then(s.bind(s,3872))},3872:(e,r,s)=>{"use strict";s.d(r,{default:()=>y});var l=s(326),t=s(7577),a=s(4432),n=s(5441),i=s(1006);s(3141);var o=s(3738),c=s(8128),x=s(434),p=s(6226);let d={ALL:"all",DOG:"dogs",CAT:"cats"};var m=s(4178);function u({category:e,handleCategoryFilter:r}){let s=(0,t.useRef)(null);return l.jsx("div",{className:"mt-[-15px] w-full min-w-[320px] overflow-hidden bg-white px-[50px] pb-[35px] text-center text-primary small-screen:px-0",children:(0,l.jsxs)("div",{className:"relative mx-auto w-[640px] min-w-[320px] max-w-full smallest-screen:w-[480px] up-xxx-smallest-screen:w-[320px]",children:[l.jsx("div",{className:"overflow-hidden",children:(0,l.jsxs)(i.tq,{ref:s,effect:"coverflow",grabCursor:!0,breakpoints:{1:{slidesPerView:2},580:{slidesPerView:3},768:{slidesPerView:4}},pagination:{el:".pets-swiper-pagination",clickable:!0,renderBullet:function(e,r){return`<span class="${r} !bg-[#531492]"></span>`}},coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},modules:[o.lI,o.tl,o.W_],className:"swiper-container",children:[l.jsx(i.o5,{className:"flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]",children:(0,l.jsxs)(x.default,{href:"/",className:"group flex flex-col items-center",children:[l.jsx("div",{className:"flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",children:l.jsx(c.Z,{size:22,className:"fill-current text-primary duration-100 ease-linear hover:scale-[1.15] hover:text-secondary"})}),l.jsx("h2",{className:"mt-[10px] text-center text-[17px] font-medium capitalize leading-[1.18] tracking-[0.005em]",children:"Home"})]})},0),l.jsx(i.o5,{className:"flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]",children:(0,l.jsxs)("label",{htmlFor:d.ALL,className:"group flex cursor-pointer flex-col items-center",children:[l.jsx("input",{type:"radio",id:d.ALL,className:"flex appearance-none flex-col items-center",onClick:()=>{r(d.ALL)}}),l.jsx("div",{className:(0,m.Z)("relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",{"scale-[1.15]":e===d.ALL}),children:l.jsx(p.default,{src:"/assets/images/dog.jpg",fill:!0,alt:"category dogs",className:"object-cover"})}),l.jsx("h2",{className:"mt-[10px] text-center text-[17px] font-medium capitalize leading-[1.18] tracking-[0.005em]",children:"All"})]})},1),l.jsx(i.o5,{className:"flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]",children:(0,l.jsxs)("label",{htmlFor:d.DOG,className:"group flex cursor-pointer flex-col items-center",children:[l.jsx("input",{type:"radio",id:d.DOG,className:"flex appearance-none flex-col items-center",onClick:()=>{r(d.DOG)}}),l.jsx("div",{className:(0,m.Z)("relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",{"scale-[1.15]":e===d.DOG}),children:l.jsx(p.default,{src:"/assets/images/dog.jpg",fill:!0,alt:"category dogs",className:"object-cover"})}),l.jsx("h2",{className:"mt-[10px] text-center text-[17px] font-medium capitalize leading-[1.18] tracking-[0.005em]",children:"Dogs"})]})},2),l.jsx(i.o5,{className:"flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]",children:(0,l.jsxs)("label",{htmlFor:d.CAT,className:"group flex cursor-pointer flex-col items-center",children:[l.jsx("input",{type:"radio",id:d.CAT,className:"flex appearance-none flex-col items-center",onClick:()=>{r(d.CAT)}}),l.jsx("div",{className:(0,m.Z)("relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",{"scale-[1.15]":e===d.CAT}),children:l.jsx(p.default,{src:"/assets/images/dog.jpg",fill:!0,alt:"category dogs",className:"object-cover"})}),l.jsx("h2",{className:"mt-[10px] text-center text-[17px] font-medium capitalize leading-[1.18] tracking-[0.005em]",children:"Cats"})]})},3)]})}),l.jsx("div",{className:"pets-swiper-pagination mt-[10px] flex justify-center gap-[10px]"})]})})}var h=s(7289),f=s(5181),g=s(5578),b=s(1229),v=s(9546);function w({sort:e,handleSortFilter:r}){let[s,a]=(0,t.useState)(!1),n=(0,t.useRef)(null);return(0,v.Z)({ref:n,enabled:s,callback:()=>{a(!1)}}),(0,l.jsxs)("div",{className:"relative flex",ref:n,children:[(0,l.jsxs)("select",{className:"hidden opacity-0",children:[l.jsx("option",{value:g.E.DEFAULT,children:"Default sorting"}),l.jsx("option",{value:g.E.RATING,children:"Sort by average rating"}),l.jsx("option",{value:g.E.LATEST,children:"Sort by latest"}),l.jsx("option",{value:g.E.PRICE,children:"Sort by price: low to high"}),l.jsx("option",{value:g.E.PRICE_DESC,children:"Sort by price: high to low"})]}),(0,l.jsxs)("span",{className:"flex cursor-pointer items-center gap-[5px]",onClick:()=>a(!s),children:[g.j[e],l.jsx(b.Z,{size:10,className:"rotate-[180deg] fill-current text-primary"})]}),(0,l.jsxs)("ul",{className:(0,m.Z)("absolute left-0 top-full z-[20] mb-[13px] mt-[4px] w-auto flex-col overflow-hidden whitespace-nowrap rounded-[3px] border border-solid border-primary bg-white font-normal leading-[40px] transition-all duration-150 ease-linear",{"flex max-h-[200px] translate-y-0 scale-y-100 opacity-100":s,"max-h-0 translate-y-[-5px] scale-y-75 opacity-0":!s}),children:[l.jsx("li",{className:(0,m.Z)("relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",{"bg-primary text-white":e===g.E.DEFAULT}),onClick:()=>{a(!1),r(g.E.DEFAULT)},children:"Default sorting"}),l.jsx("li",{className:(0,m.Z)("relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",{"bg-primary text-white":e===g.E.LATEST}),onClick:()=>{a(!1),r(g.E.LATEST)},children:"Sort by latest"}),l.jsx("li",{className:(0,m.Z)("relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",{"bg-primary text-white":e===g.E.RATING}),onClick:()=>{a(!1),r(g.E.RATING)},children:"Sort by average rating"}),l.jsx("li",{className:(0,m.Z)("relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",{"bg-primary text-white":e===g.E.PRICE}),onClick:()=>{a(!1),r(g.E.PRICE)},children:"Sort by price: low to high"}),l.jsx("li",{className:(0,m.Z)("relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",{"bg-primary text-white":e===g.E.PRICE_DESC}),onClick:()=>{a(!1),r(g.E.PRICE_DESC)},children:"Sort by price: high to low"})]})]})}var j=s(2221);function y(){let[e,r]=(0,t.useState)(!1),[s,i]=(0,t.useState)(d.ALL),[o,c]=(0,t.useState)([a.M.MIN,a.M.MAX]),[x,p]=(0,t.useState)(g.E.DEFAULT),[v,y]=(0,t.useState)(2);return(0,l.jsxs)(l.Fragment,{children:[l.jsx(u,{category:s,handleCategoryFilter:function(e){i(e)}}),(0,l.jsxs)("div",{className:"mx-auto flex flex-nowrap rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]",children:[l.jsx("div",{className:"border-r border-solid border-light_gray_color_second large-screen:min-w-[232px] small-screen:relative small-screen:overflow-hidden",children:(0,l.jsxs)("div",{className:(0,m.Z)("sticky left-0 top-[90px] flex flex-col pb-[30px] transition-all duration-150 ease-linear small-screen:fixed small-screen:right-0 small-screen:top-0 small-screen:z-[200] small-screen:h-full small-screen:w-[360px] small-screen:max-w-full small-screen:bg-white small-screen:pb-[30px] small-screen:leading-[1.23]",{"small-screen:translate-x-0 small-screen:opacity-100":e,"small-screen:w-0 small-screen:translate-x-full small-screen:opacity-0":!e}),children:[l.jsx("div",{className:"relative flex items-center justify-end large-screen:hidden",children:l.jsx("div",{className:"flex h-[46px] w-[46px] items-center justify-center",children:l.jsx("button",{onClick:()=>r(!1),children:l.jsx(f.Z,{size:32,className:"fill-current text-primary"})})})}),(0,l.jsxs)("div",{className:"flex flex-col px-[25px] pt-[25px]",children:[l.jsx("h3",{className:"mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary",children:"Price"}),(0,l.jsxs)("form",{action:"",className:"flex flex-col",children:[l.jsx("span",{children:l.jsx(n.Z,{className:"horizontal-slider",ariaLabel:["Lower thumb","Upper thumb"],renderThumb:(e,r)=>(0,t.createElement)("div",{...e,key:r.index,className:"top-[-4px] h-[10px] w-[10px] rounded-[50%] !border-none bg-primary focus-visible:outline-none"}),thumbActiveClassName:"",renderTrack:(e,r)=>1===r.index?(0,t.createElement)("div",{...e,key:r.index,className:"relative h-[2px] rounded-full bg-primary"}):(0,t.createElement)("div",{...e,key:r.index,className:"relative h-[2px] rounded-full bg-background_color"}),step:1e5,min:a.M.MIN,max:a.M.MAX,onChange:c,value:o})}),(0,l.jsxs)("div",{className:"mb-[3px] mt-[15px] text-[12px] leading-[18px] tracking-[0.025em] text-text_color",children:[l.jsx("span",{children:"Price:\xa0"}),(0,l.jsxs)("span",{children:[o[0]," "]}),l.jsx("span",{children:"\xa0\xa0-\xa0"}),(0,l.jsxs)("span",{children:[o[1]," "]})]}),l.jsx("button",{type:"button",className:"hover_animate mt-[10px] inline-block cursor-pointer rounded-[18px] border-[2px] border-solid border-primary bg-white px-[18px] py-[5px] text-center text-[12px] font-bold uppercase tracking-wider text-primary outline-none hover:bg-primary hover:text-white",children:"Filter"})]})]})]})}),(0,l.jsxs)("div",{className:"flex-1 large-screen:min-w-[900px] small-screen:w-full",children:[(0,l.jsxs)("div",{className:"flex min-h-[55px] items-center border-b border-solid border-light_gray_color_second px-[30px] py-[13px] text-[13px] font-normal leading-[16px] tracking-[0.025em] text-text_color",children:[(0,l.jsxs)("div",{className:"flex w-full flex-1 small-screen:gap-[5px] up-smallest-screen:items-center up-smallest-screen:justify-between smallest-screen:flex-col",children:[l.jsx("div",{className:"w-full flex-1",children:"Showing all 11 results"}),l.jsx(w,{sort:x,handleSortFilter:function(e){p(e)}})]}),l.jsx("div",{className:"ml-[15px] mr-[2px] large-screen:hidden large-screen:opacity-0",children:(0,l.jsxs)("button",{className:"hover_animate inline-flex cursor-pointer items-center gap-[7px] rounded-[17px] border-[2px] border-solid border-primary bg-white px-[22px] py-[7px] text-center text-[11px] font-bold uppercase leading-[14px] tracking-[0.07em] text-primary outline-none hover:bg-primary hover:text-white",onClick:()=>r(!0),children:[l.jsx(b.Z,{size:8,className:"rotate-[-90deg] fill-current"}),"Filter"]})})]}),l.jsx("div",{className:"flex flex-wrap",children:[...Array(11)].map((e,r)=>l.jsx("div",{className:"large-screen:w-[25%] up-x-small-screen:w-[25%] up-x-smallest-screen:!w-[calc(100%/3)] up-xx-smallest-screen:!w-[50%] xx-smallest-screen:w-full down-xx-smallest-screen:!w-[50%]",children:l.jsx(h.Z,{})},r))}),l.jsx("div",{className:"mt-[30px] flex justify-center pb-[30px]",children:l.jsx(j.Z,{paging:v,handlePagingFilter:function(e){y(e)}})})]})]})]})}},7289:(e,r,s)=>{"use strict";s.d(r,{Z:()=>d});var l=s(326),t=s(6987),a=s(2217),n=s(6535),i=s(6226),o=s(434),c=s(2205),x=s(4926),p=s(6011);function d(){return(0,l.jsxs)("div",{className:"border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]",children:[l.jsx("div",{className:"relative w-full overflow-hidden pb-[85%]",children:l.jsx(o.default,{href:"/pets/F1141410",className:"h-full w-full",children:l.jsx(i.default,{src:"/assets/images/food1.jpg",alt:"food1",fill:!0,loading:"eager",className:"absolute left-0 top-0 object-cover"})})}),(0,l.jsxs)("div",{className:"relative flex flex-auto flex-col justify-between px-[30px] pt-[20px]",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[l.jsx(p.Z,{spanClass:"mb-[10px] line-clamp-2 max-h-[46px] w-full overflow-hidden font-quicksand text-[17px] font-bold capitalize leading-[1.35] tracking-[-0.01em] text-primary",value:"True Acre Foods Grain "}),l.jsx(p.Z,{spanClass:"mb-[10px] line-clamp-4 max-h-[76px] w-full overflow-hidden font-quicksand text-[13px] font-normal capitalize leading-[1.46] tracking-[0.02em] text-text_color",value:"Bring some grain-free goodness to your pup’s bowl. Bring some grain-free goodness to your pup’s bowl.Bring some grain-free goodness to your pup’s bowl."}),(0,l.jsxs)("span",{className:"flex gap-[2px]",children:[[void 0,void 0,void 0,void 0].map((e,r)=>l.jsx(n.Z,{size:12,className:"fill-current text-dark_yellow_color"},r)),l.jsx(n.Z,{size:12,className:"fill-current text-dark_yellow_color",percentage:.5})]})]}),(0,l.jsxs)("div",{className:"mt-[15px] flex flex-wrap items-center gap-[5px] text-[13px] font-normal leading-[16px] tracking-[0.02em] text-primary",children:[l.jsx(o.default,{href:"#",children:"Fresh & Frozen Food"}),l.jsx(a.Z,{size:3,className:"fill-current text-dark_orange_color"}),l.jsx(o.default,{href:"#",children:"Sophresh"})]})]}),l.jsx("form",{className:"flex flex-col gap-[12.5px] px-[30px] pb-[30px] pt-[15px]",children:(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"font-quicksand font-bold leading-[1] tracking-[-0.02em] text-secondary up-smallest-screen:text-[18px]",children:"$45.00"}),l.jsx(c.Z,{element:l.jsx(x.Z,{type:"submit",size:"circle_lg",variant:"primary",startIcon:l.jsx(t.Z,{size:16})}),value:"Add to Cart"})]})})]})}},7818:(e,r,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.d(r,{Z:()=>o});var t=s(4150),a=s(1903),n=s(2961),i=e([n]);function o(){return(0,t.jsxs)(t.Fragment,{children:[t.jsx(a.Z,{pathLink:["pets"],pathName:["Pets"]}),t.jsx(n.Z,{})]})}n=(i.then?(await i)():i)[0],l()}catch(e){l(e)}})},2961:(e,r,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.d(r,{Z:()=>e});var t=s(1851);let e=(await (0,t.createProxy)(String.raw`D:\PetShopFAKE\deploy\New folder\pet-shop-web\src\app\(products)\pets\_components\pets-content.tsx`)).default;l()}catch(e){l(e)}},1)},5690:(e,r,s)=>{"use strict";s.a(e,async(e,l)=>{try{s.r(r),s.d(r,{default:()=>i});var t=s(4150),a=s(7818),n=e([a]);function i(){return t.jsx(a.Z,{})}a=(n.then?(await n)():n)[0],l()}catch(e){l(e)}})}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),l=r.X(0,[424,209,226,162,446,497],()=>s(4326));module.exports=l})();