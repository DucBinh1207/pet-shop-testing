(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{7341:function(e,t,n){Promise.resolve().then(n.bind(n,7814))},7814:function(e,t,n){"use strict";n.d(t,{H:function(){return y},default:function(){return _}});var r=n(7437),s=n(3679),a=n(6463),i=n(2265),l=n(8214),c=n(7818);let o=(0,c.default)(()=>n.e(779).then(n.bind(n,1779)),{loadableGenerated:{webpack:()=>[1779]}}),d=(0,c.default)(()=>n.e(75).then(n.bind(n,2075)),{loadableGenerated:{webpack:()=>[2075]}}),x=(0,c.default)(()=>n.e(158).then(n.bind(n,2158)),{loadableGenerated:{webpack:()=>[2158]}});function p(e){let{tab:t}=e,n=(0,i.useContext)(y);return(0,r.jsxs)(r.Fragment,{children:[t===l.m.DESCRIPTION&&(0,r.jsx)(d,{description:n.description}),t===l.m.ADDITIONAL_INFO&&(0,r.jsx)(o,{product:n}),t===l.m.REVIEWS&&(0,r.jsx)(x,{})]})}var m=n(4253);function u(){let[e,t]=(0,i.useState)(l.m.DESCRIPTION);return(0,r.jsxs)("div",{className:"mt-[45px] flex flex-col font-quicksand up-smallest-screen:mb-[70px] smallest-screen:mb-[40px] smallest-screen:mt-[30px]",children:[(0,r.jsx)(m.Z,{tab:e,setTab:t}),(0,r.jsx)(p,{tab:e})]})}var f=n(3037),g=n(2754),h=n(8288),b=n(4456),j=n(6317),k=n(5607),N=n(821),v=n(4233);function w(){let e=(0,i.useContext)(y),[t,n]=(0,i.useState)([h.m.BEEF]);function s(e){t.includes(e)||n([e])}return(0,r.jsxs)("div",{className:"mx-auto mb-[40px] mt-[30px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full",children:[(0,r.jsxs)("div",{className:"mb-[30px] flex text-text_color smallest-screen:flex-col",children:[(0,r.jsxs)("div",{className:"up-smallest-screen:w-[50%]",children:[(0,r.jsx)(f.Z,{}),(0,r.jsx)(k.Z,{type:"foods",category:"dry-food",sku:e.id,tags:["foods","dog","cat"],brand:e.brand})]}),(0,r.jsxs)("div",{className:"large-screen:px-[50px] large-screen:pt-[30px] between-small-smallest:px-[35px] between-small-smallest:pt-[35px] up-smallest-screen:w-[50%] smallest-screen:mx-[35px] smallest-screen:mt-[20px]",children:[(0,r.jsx)("h1",{className:"mt-[15px] font-quicksand font-bold capitalize leading-[1.15] text-primary large-screen:text-[40px] large-screen:tracking-[-0.02em]",children:e.name}),(0,r.jsx)(g.Z,{}),(0,r.jsxs)("span",{className:"mt-[20px] block text-[12px] font-semibold leading-[1.25] tracking-[0.02em]",children:["SKU:\xa0",(0,r.jsxs)("span",{className:"font-normal",children:[" ",e.id]})]}),(0,r.jsx)("form",{action:"",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("div",{className:"mt-[25px]",children:[(0,r.jsx)("label",{htmlFor:"weight",className:"px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]",children:"Weight :"}),(0,r.jsxs)("ul",{id:"weight",className:"mt-[10px] flex flex-wrap",role:"radiogroup","aria-label":"color",children:[(0,r.jsx)(N.Z,{weight:"1kg"}),(0,r.jsx)(N.Z,{weight:"5kg"})]})]}),(0,r.jsxs)("div",{className:"relative mt-[15px] flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"ingredients",className:"px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]",children:"Ingredients :"}),(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{className:"ml-[5px] mt-[15px] flex gap-[10px] text-[14px] leading-[1.23] tracking-[0.02em] text-text_color",children:[(0,r.jsx)(v.Z,{ingredient:t,ingredientType:h.m.BEEF,handleIngredientFilter:s}),(0,r.jsx)(v.Z,{ingredient:t,ingredientType:h.m.CHICKEN,handleIngredientFilter:s})]})})]}),(0,r.jsx)("div",{className:"mt-[25px]",children:(0,r.jsx)("span",{className:"font-quicksand text-[25px] font-bold leading-[1.24] tracking-[-0.02em] text-secondary",children:e.price})}),(0,r.jsx)(j.Z,{}),(0,r.jsx)(b.Z,{})]})})]})]}),(0,r.jsx)(u,{})]})}let y=(0,i.createContext)({id:"",name:"",petType:"",ingredient:"",nutrition_info:"",weight:"",expire_date:"",brand:"",rating:0,description:"",image:"",quantity:0,price:0});function _(){let{productId:e}=(0,a.useParams)(),t={id:e,name:"Premium Cat Food",petType:"Cat",ingredient:"Chicken, Rice, Fish Oil",nutrition_info:"Protein 30%, Fat 10%, Fiber 3%",weight:"1.5kg",expire_date:"2025-08-10",brand:"Whiskers Delight",rating:4.7,description:"A premium blend of chicken and fish for your cat's daily nutrition.",image:"https://example.com/images/premium-cat-food.jpg",quantity:50,price:2e5};return(0,r.jsxs)(y.Provider,{value:t,children:[(0,r.jsx)(s.Z,{pathLink:["/foods","/foods/".concat(t.id)],pathName:["Foods",t.name]}),(0,r.jsx)(w,{})]})}},4233:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7437),s=n(2311);function a(e){let{ingredient:t,ingredientType:n,name:a,handleIngredientFilter:i}=e;return(0,r.jsx)("li",{children:(0,r.jsxs)("label",{htmlFor:n,className:"group inline-flex cursor-pointer items-center gap-[10px] hover:text-secondary",children:[(0,r.jsx)("input",{type:"checkbox",id:n,className:(0,s.Z)("relative inline-block h-[35px] w-[35px] cursor-pointer appearance-none rounded-[50%] bg-cover after:absolute after:bottom-[-4px] after:left-[-4px] after:right-[-4px] after:top-[-4px] after:rounded-[4px] after:border after:border-solid after:content-[''] group-hover:after:border-secondary",{"after:border-secondary":t.includes(n),"after:border-transparent":!t.includes(n),"bg-beef_img":"beef"===n,"bg-chicken_img":"chicken"===n}),onClick:()=>{i(n)}}),a&&(0,r.jsxs)("span",{className:"flex-1",children:[" ",a," "]})]})})}},821:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7437),s=n(2311);function a(e){let{weight:t}=e;return(0,r.jsx)("li",{"aria-checked":!0,tabIndex:0,"data-wvstooltip":"red",className:"m-[2.5px] cursor-pointer list-none",title:t,"data-title":t,"data-value":t,role:"radio",children:(0,r.jsx)("span",{className:(0,s.Z)("block rounded-[13px] border border-solid bg-form_color px-[9px] py-[5px] text-center text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary",{"border-primary":"1kg"===t,"border-form_color":"1kg"!==t}),children:t})})}},8288:function(e,t,n){"use strict";n.d(t,{m:function(){return r}});let r={BEEF:"beef",CHICKEN:"chicken"}}},function(e){e.O(0,[231,885,399,971,23,744],function(){return e(e.s=7341)}),_N_E=e.O()}]);