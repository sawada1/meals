(function(){"use strict";var e={4596:function(e,t,a){var n=a(9242),l=a(3396);function r(e,t,a,n,r,o){const s=(0,l.up)("navbar"),i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("nav",null,[(0,l.Wm)(s)]),(0,l.Wm)(i)],64)}var o=a(7e3),s={components:{navbar:o.Z}},i=a(89);const c=(0,i.Z)(s,[["render",r]]);var u=c,m=a(2483),d=a(7139);const p=(0,l._)("h2",null,"random meals",-1),h={class:"allboxes"},g={class:"box"},v=["src"],b={class:"text"},f=["href"],y={class:"error"};function _(e,t,a,n,r,o){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",null,[p,(0,l._)("div",h,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.theMeal,(e=>((0,l.wg)(),(0,l.iD)("div",g,[(0,l.Wm)(s,{to:{name:"theMealbyid",params:{id:e.meals[0].idMeal}}},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.meals[0].strMealThumb,alt:""},null,8,v)])),_:2},1032,["to"]),(0,l._)("div",b,[(0,l._)("h5",null,(0,d.zw)(e.meals[0].strMeal),1),(0,l._)("p",null,(0,d.zw)(e.meals[0].strInstructions.substring(0,100))+"....",1),(0,l._)("a",{href:e.meals[0].strYoutube,class:"btn btn-warning",target:"_blank"},"youtube",8,f)])])))),256))]),(0,l._)("span",y,(0,d.zw)(n.errorMessage),1)])}a(7658);var w=a(4161),k=a(4870),M={name:"HomeView",components:{navbar:o.Z},setup(){let e=(0,k.iH)([]),t=(0,k.iH)(null);return(0,l.bv)((async()=>{console.log("mounted");for(let a=0;a<10;a++){let a=await w.Z.get("https://www.themealdb.com/api/json/v1/1/random.php");if(console.log(a),200!=a.status){console.log(a),t.value="error there's somthing wrong in api";break}e.value.push(a.data),t.value=" "}console.log(e.value)})),{theMeal:e,errorMessage:t}}};const H=(0,i.Z)(M,[["render",_]]);var C=H;const B=e=>((0,l.dD)("data-v-68f664ad"),e=e(),(0,l.Cn)(),e),D={class:"container"},L=B((()=>(0,l._)("h2",null,"search meal by name",-1))),x={class:"theInput"},j=B((()=>(0,l._)("hr",null,null,-1))),Z={key:0},z={class:"allboxes"},N={class:"box"},O=["src"],T={class:"text"},Y=["href"],W={key:1,class:"container data"},K={key:2},I={key:0,class:"container data"};function S(e,t,a,r,o,s){const i=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",D,[L,(0,l._)("div",x,[(0,l.wy)((0,l._)("input",{onKeypress:t[0]||(t[0]=(0,n.D2)(((...e)=>r.searchByName&&r.searchByName(...e)),["enter"])),type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r.searchName=e),placeholder:"search for meals"},null,544),[[n.nr,r.searchName]]),(0,l._)("button",{onClick:t[2]||(t[2]=(...e)=>r.searchByName&&r.searchByName(...e)),class:"btn btn-warning"},"search"),j])]),r.searchName?((0,l.wg)(),(0,l.iD)("div",Z,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.theMeal,(e=>((0,l.wg)(),(0,l.iD)("div",z,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(e=>((0,l.wg)(),(0,l.iD)("div",N,[(0,l.Wm)(i,{to:{name:"theMealbyid",params:{id:e.idMeal}}},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.strMealThumb,alt:""},null,8,O)])),_:2},1032,["to"]),(0,l._)("div",T,[(0,l._)("h5",null,(0,d.zw)(e.strMeal),1),(0,l._)("p",null,(0,d.zw)(e.strInstructions.substring(0,100))+".....",1),(0,l._)("a",{href:e.strYoutube,class:"btn btn-warning",target:"_blank"},"youtube",8,Y)])])))),256))])))),256))])):((0,l.wg)(),(0,l.iD)("div",W,"there's no data yet")),r.searchName?((0,l.wg)(),(0,l.iD)("div",K,[r.nofound?((0,l.wg)(),(0,l.iD)("div",I,(0,d.zw)(r.nofound),1)):(0,l.kq)("",!0)])):(0,l.kq)("",!0)],64)}var P={setup(){let e=(0,k.iH)(null),t=(0,k.iH)([]),a=(0,k.iH)(null);const n=async()=>{let n=await w.Z.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.value}`);console.log(t.value),null==n.data.meals?a.value=`there's no data named ${e.value}`:(t.value=n.data,a.value="")};return{searchName:e,searchByName:n,theMeal:t,nofound:a}}};const E=(0,i.Z)(P,[["render",S],["__scopeId","data-v-68f664ad"]]);var A=E;const U={class:""},$=(0,l._)("h2",null,"meals by letter",-1),q={class:"theletters"},F={class:"allboxes"},V={class:"box"},G=["src"],J={class:"text"},Q=["href"];function R(e,t,a,n,r,o){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",U,[$,(0,l._)("div",q,[(0,l._)("span",{onClick:t[0]||(t[0]=e=>n.getmealByLetter(n.a))},"A"),(0,l._)("span",{onClick:t[1]||(t[1]=e=>n.getmealByLetter(n.b))},"B"),(0,l._)("span",{onClick:t[2]||(t[2]=e=>n.getmealByLetter(n.c))},"C"),(0,l._)("span",{onClick:t[3]||(t[3]=e=>n.getmealByLetter(n.d))},"D"),(0,l._)("span",{onClick:t[4]||(t[4]=e=>n.getmealByLetter(n.e))},"E"),(0,l._)("span",{onClick:t[5]||(t[5]=e=>n.getmealByLetter(n.f))},"F"),(0,l._)("span",{onClick:t[6]||(t[6]=e=>n.getmealByLetter(n.g))},"G"),(0,l._)("span",{onClick:t[7]||(t[7]=e=>n.getmealByLetter(n.h))},"H"),(0,l._)("span",{onClick:t[8]||(t[8]=e=>n.getmealByLetter(n.i))},"I"),(0,l._)("span",{onClick:t[9]||(t[9]=e=>n.getmealByLetter(n.j))},"J"),(0,l._)("span",{onClick:t[10]||(t[10]=e=>n.getmealByLetter(n.k))},"K"),(0,l._)("span",{onClick:t[11]||(t[11]=e=>n.getmealByLetter(n.l))},"L"),(0,l._)("span",{onClick:t[12]||(t[12]=e=>n.getmealByLetter(n.m))},"M"),(0,l._)("span",{onClick:t[13]||(t[13]=e=>n.getmealByLetter(n.n))},"N"),(0,l._)("span",{onClick:t[14]||(t[14]=e=>n.getmealByLetter(n.o))},"O"),(0,l._)("span",{onClick:t[15]||(t[15]=e=>n.getmealByLetter(n.p))},"P"),(0,l._)("span",{onClick:t[16]||(t[16]=e=>n.getmealByLetter(n.q))},"Q"),(0,l._)("span",{onClick:t[17]||(t[17]=e=>n.getmealByLetter(n.r))},"R"),(0,l._)("span",{onClick:t[18]||(t[18]=e=>n.getmealByLetter(n.s))},"S"),(0,l._)("span",{onClick:t[19]||(t[19]=e=>n.getmealByLetter(n.t))},"T"),(0,l._)("span",{onClick:t[20]||(t[20]=e=>n.getmealByLetter(n.u))},"U"),(0,l._)("span",{onClick:t[21]||(t[21]=e=>n.getmealByLetter(n.v))},"V"),(0,l._)("span",{onClick:t[22]||(t[22]=e=>n.getmealByLetter(n.w))},"W"),(0,l._)("span",{onClick:t[23]||(t[23]=e=>n.getmealByLetter(n.x))},"X"),(0,l._)("span",{onClick:t[24]||(t[24]=e=>n.getmealByLetter(n.y))},"Y"),(0,l._)("span",{onClick:t[25]||(t[25]=e=>n.getmealByLetter(n.z))},"Z")])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.theMeal,(e=>((0,l.wg)(),(0,l.iD)("div",F,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(e=>((0,l.wg)(),(0,l.iD)("div",V,[(0,l.Wm)(s,{to:{name:"theMealbyid",params:{id:e.idMeal}}},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.strMealThumb,alt:""},null,8,G)])),_:2},1032,["to"]),(0,l._)("div",J,[(0,l._)("h5",null,(0,d.zw)(e.strMeal),1),(0,l._)("p",null,(0,d.zw)(e.strInstructions.substring(0,100))+".....",1),(0,l._)("a",{href:e.strYoutube,class:"btn btn-warning",target:"_blank"},"youtube",8,Q)])])))),256))])))),256))],64)}var X={setup(){const e=(0,k.iH)("A"),t=(0,k.iH)("B"),a=(0,k.iH)("C"),n=(0,k.iH)("D"),l=(0,k.iH)("E"),r=(0,k.iH)("F"),o=(0,k.iH)("G"),s=(0,k.iH)("H"),i=(0,k.iH)("I"),c=(0,k.iH)("J"),u=(0,k.iH)("K"),m=(0,k.iH)("L"),d=(0,k.iH)("M"),p=(0,k.iH)("N"),h=(0,k.iH)("O"),g=(0,k.iH)("P"),v=(0,k.iH)("Q"),b=(0,k.iH)("R"),f=(0,k.iH)("S"),y=(0,k.iH)("T"),_=(0,k.iH)("U"),M=(0,k.iH)("V"),H=(0,k.iH)("W"),C=(0,k.iH)("X"),B=(0,k.iH)("Y"),D=(0,k.iH)("Z"),L=(0,k.iH)([]),x=async e=>{let t=await w.Z.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${e}`);console.log(t.data),L.value=t.data};return{getmealByLetter:x,theMeal:L,a:e,b:t,c:a,d:n,f:r,g:o,h:s,i:i,j:c,k:u,e:l,l:m,m:d,n:p,o:h,p:g,q:v,r:b,s:f,t:y,u:_,v:M,w:H,x:C,y:B,z:D}}};const ee=(0,i.Z)(X,[["render",R]]);var te=ee;const ae=e=>((0,l.dD)("data-v-7e2c2848"),e=e(),(0,l.Cn)(),e),ne={class:""},le=ae((()=>(0,l._)("h2",null,"ingredients",-1))),re=ae((()=>(0,l._)("input",{type:"text",placeholder:"search for ingreadints"},null,-1))),oe={class:"categoris"},se={class:"cate"};function ie(e,t,a,n,r,o){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",ne,[le,re,(0,l._)("div",oe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.theMeal.categories,(e=>((0,l.wg)(),(0,l.iD)("div",se,[(0,l.Wm)(s,{to:{name:"theMealbyCategory",params:{name:e.strCategory}}},{default:(0,l.w5)((()=>[(0,l._)("h3",null,(0,d.zw)(e.strCategory),1)])),_:2},1032,["to"])])))),256))])])}var ce={setup(){let e=(0,k.iH)([]);(0,k.iH)(null);const t=async()=>{let t=await w.Z.get("https://www.themealdb.com/api/json/v1/1/categories.php");e.value=t.data,console.log(t.data),console.log(e.value.categories)};return t(),{theMeal:e}}};const ue=(0,i.Z)(ce,[["render",ie],["__scopeId","data-v-7e2c2848"]]);var me=ue;const de={class:"allboxes"},pe={class:"box"},he=["src"];function ge(e,t,a,n,r,o){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.theMeal,(e=>((0,l.wg)(),(0,l.iD)("div",de,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(e=>((0,l.wg)(),(0,l.iD)("div",pe,[(0,l.Wm)(s,{to:{name:"theMealbyid",params:{id:e.idMeal}}},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.strMealThumb,alt:""},null,8,he)])),_:2},1032,["to"]),(0,l._)("h5",null,(0,d.zw)(e.strMeal),1)])))),256))])))),256))])}var ve={props:["name"],data(){return{thename:this.$route.params.name,theMeal:[]}},methods:{check:async()=>{}},async mounted(){let e=await w.Z.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.thename}`);console.log(e.data),this.theMeal=e.data}};const be=(0,i.Z)(ve,[["render",ge]]);var fe=be;const ye={class:"container themeal"},_e=["src"],we={class:"container cate"},ke=["href"];function Me(e,t,a,n,r,o){return(0,l.wg)(),(0,l.iD)("div",ye,[(0,l._)("h2",null,(0,d.zw)(n.theMeal.strMeal),1),(0,l._)("img",{class:"container",src:n.theMeal.strMealThumb,alt:""},null,8,_e),(0,l._)("div",we,[(0,l._)("h5",null,[(0,l.Uk)("category: "),(0,l._)("span",null,(0,d.zw)(n.theMeal.strCategory),1)]),(0,l._)("h5",null,[(0,l.Uk)("area: "),(0,l._)("span",null,(0,d.zw)(n.theMeal.strArea),1)]),(0,l._)("h5",null,[(0,l.Uk)("tags: "),(0,l._)("span",null,(0,d.zw)(n.theMeal.strTags),1)])]),(0,l._)("p",null,(0,d.zw)(n.theMeal.strInstructions),1),(0,l._)("a",{href:n.theMeal.strYoutube,class:"btn btn-warning",target:"_blank"},"youtube",8,ke)])}var He={props:["id"],setup(e){let t=(0,k.iH)([]);const a=async()=>{let a=await w.Z.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.id}`);console.log(a.data),t.value=a.data.meals[0]};return a(),{theMeal:t}}};const Ce=(0,i.Z)(He,[["render",Me],["__scopeId","data-v-6e112aae"]]);var Be=Ce;const De=[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,9775))},{path:"/searchByName",name:"mealbyname",component:A},{path:"/searchByLetter",name:"mealbyletter",component:te},{path:"/searchBycategory",name:"searchBycategory",component:me},{path:"/theMealbyCategory/:name",name:"theMealbyCategory",component:fe},{path:"/theMealbyid/:id",name:"theMealbyid",component:Be,props:!0}],Le=(0,m.p7)({history:(0,m.PO)("/meals/"),routes:De});var xe=Le,je=a(65),Ze=(0,je.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});a(5654);(0,n.ri)(u).use(Ze).use(xe).mount("#app")},7e3:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(3396);const l={class:"navbar navbar-expand-lg bg-body-tertiary"},r={class:"container-fluid mainn"},o=(0,n._)("a",{class:"navbar-brand"},"meals",-1),s=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse m-2",id:"navbarSupportedContent"},c={class:"navbar-nav me-auto mb-2 mb-lg-0"},u={class:"nav-item"},m=(0,n._)("a",{class:"nav-link"},"search meal by name",-1),d={class:"nav-item"},p=(0,n._)("a",{class:"nav-link"},"search meal by letter",-1),h={class:"nav-item"},g=(0,n._)("a",{class:"nav-link"},"search meal by category",-1);function v(e,t,a,v,b,f){const y=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("nav",l,[(0,n._)("div",r,[(0,n.Wm)(y,{to:"/"},{default:(0,n.w5)((()=>[o])),_:1}),(0,n._)("div",null,[s,(0,n._)("div",i,[(0,n._)("ul",c,[(0,n._)("li",u,[(0,n.Wm)(y,{to:"/searchByName"},{default:(0,n.w5)((()=>[m])),_:1})]),(0,n._)("li",d,[(0,n.Wm)(y,{to:"/searchByLetter"},{default:(0,n.w5)((()=>[p])),_:1})]),(0,n._)("li",h,[(0,n.Wm)(y,{to:"/searchBycategory"},{default:(0,n.w5)((()=>[g])),_:1})])])])])])])])}var b={},f=a(89);const y=(0,f.Z)(b,[["render",v]]);var _=y}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,r){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],r=e[u][2];for(var s=!0,i=0;i<n.length;i++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(s=!1,r<o&&(o=r));if(s){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,l,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.bf221aba.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="meals:";a.l=function(n,l,r,o){if(e[n])e[n].push(l);else{var s,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==t+r){s=m;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[l];var d=function(t,a){s.onerror=s.onload=null,clearTimeout(p);var l=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),l&&l.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),i&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/meals/"}(),function(){var e={143:0};a.f.j=function(t,n){var l=a.o(e,t)?e[t]:void 0;if(0!==l)if(l)n.push(l[2]);else{var r=new Promise((function(a,n){l=e[t]=[a,n]}));n.push(l[2]=r);var o=a.p+a.u(t),s=new Error,i=function(n){if(a.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,l[1](s)}};a.l(o,i,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,r,o=n[0],s=n[1],i=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(i)var u=i(a)}for(t&&t(n);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkmeals"]=self["webpackChunkmeals"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4596)}));n=a.O(n)})();
//# sourceMappingURL=app.a14e5643.js.map