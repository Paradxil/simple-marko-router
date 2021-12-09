(()=>{"use strict";var e,t={3405:(e,t,n)=>{var a=n(7007),l=n(7209),r=n(333),u=n.n(r),o=n(6427),i=n.n(o),s=new class{constructor(){this.listeners={}}initialize(){window.addEventListener("popstate",(e=>{if(this.listeners.popstate)for(var t of this.listeners.popstate)t(e)}))}navigate(e){if(history.pushState({path:e},"",e),this.listeners.navigate)for(var t of this.listeners.navigate)t(e)}listen(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}};const p=s;var h=s.navigate.bind(s),c=s.listen.bind(s),d=n(7645),v=n.n(d),m=n(4067),b=n.n(m),g=n(3159),f=n(3314),y=n.n(f),k="oKe6U0zL",R=(0,l.t)(k);const B=R;(0,g.r)(k,(()=>R));var w={handleClick(e){h(this.input.path)}};R._=b()((function(e,t,n,a,l){t.be("div",{class:"router-link"},"0",a,null,1,{onclick:n.d("click","handleClick",!1)}),v()(t,e.renderBody,null,null,null,null,n,"1"),t.ee()}),{t:k},w),R.Component=y()(w,R._);var C=n(3590),O=n.n(C),S="u6f+jsYq",_=(0,l.t)(S);const x=_;var G=O()("h2",null,"0",null,1,0).t("Demo"),P=O()("hr",null,"1",null,0,0),j=O()("h3",null,"2",null,1,0).t("Standard Routing"),E=O()("a",null,"4",null,1,0).t("Go to /about"),M=O()("hr",null,"5",null,0,0),z=O()("h3",null,"6",null,1,0).t("Single Param"),A=O()("hr",null,"10",null,0,0),$=O()("h3",null,"11",null,1,0).t("Multiple Params"),L=O()("label",{for:"red"},"12",null,1,0).t("Red"),T=O()("label",{for:"green"},"14",null,1,0).t("Green"),N=O()("label",{for:"blue"},"16",null,1,0).t("Blue"),U=O()("hr",null,"20",null,0,0),Y=O()("h3",null,"21",null,1,0).t("More Multiple Params");(0,g.r)(S,(()=>_));var q={onCreate(){this.state={name:"",r:"204",g:"93",b:"232",age:""}},setState(e,t){this.state[e]=t.target.value}};_._=b()((function(e,t,n,a,l){t.n(G,a),t.n(P,a),t.n(j,a),i()(B,{path:"/about",renderBody:e=>{e.n(E,a)}},t,n,"3"),t.n(M,a),t.n(z,a),t.e("input",{value:l.name,placeholder:"Enter name"},"7",a,0,0,{oninput:n.d("input","setState",!1,["name"])}),i()(B,{path:"/i/am/".concat(l.name),renderBody:e=>{e.be("a",null,"9",a,null,0),e.t("Go to /i/am/",a),e.t(l.name,a),e.ee()}},t,n,"8"),t.n(A,a),t.n($,a),t.n(L,a),t.e("input",{id:"red",type:"number",value:l.r,placeholder:"Red amount"},"13",a,0,0,{oninput:n.d("input","setState",!1,["r"])}),t.n(T,a),t.e("input",{id:"green",type:"number",value:l.g,placeholder:"Green amount"},"15",a,0,0,{oninput:n.d("input","setState",!1,["g"])}),t.n(N,a),t.e("input",{id:"blue",type:"number",value:l.b,placeholder:"Blue amount"},"17",a,0,0,{oninput:n.d("input","setState",!1,["b"])}),i()(B,{path:"/show/rgb/".concat(l.r,"/").concat(l.g,"/").concat(l.b),renderBody:e=>{e.be("a",null,"19",a,null,0),e.t("Go to /show/rgb/",a),e.t(l.r,a),e.t("/",a),e.t(l.g,a),e.t("/",a),e.t(l.b,a),e.ee()}},t,n,"18"),t.n(U,a),t.n(Y,a),t.e("input",{value:l.name,placeholder:"Enter name"},"22",a,0,0,{oninput:n.d("input","setState",!1,["name"])}),t.e("input",{value:l.age,placeholder:"Enter age"},"23",a,0,0,{oninput:n.d("input","setState",!1,["age"])}),i()(B,{path:"/".concat(l.name,"/is/").concat(l.age),renderBody:e=>{e.be("a",null,"25",a,null,0),e.t("Go to /",a),e.t(l.name,a),e.t("/is/",a),e.t(l.age,a),e.ee()}},t,n,"24")}),{t:S},q),_.Component=y()(q,_._);var D=n(5776),F=n.n(D),H="LY4FkT4+",K=(0,l.t)(H);const I=K;var J=O()("p",null,"2",null,1,0).t("No matching path for given routes.");(0,g.r)(H,(()=>K));var Q={onCreate(){this.state={currentRoute:null,params:{}}},onMount(){p.initialize(),c("popstate",(e=>{this.navigate(e.state.path)})),c("navigate",(e=>{this.navigate(e)})),this.input&&this.input.defaultRoute?h(this.input.defaultRoute):h(window.location.pathname)},navigate(e){for(var t of this.input.routes){var n=t.path.match(/:[^\/]*(\/|$)/gi),a=t.path.replaceAll("/","\\/");a=t.path.replaceAll(/:[^\/]*(\/|$)/gi,"([^\\/]+)(?:\\/|$)"),a+="$";var l=new RegExp(a,"i"),r=e.match(l);if(null!==r&&0===r.index){this.state.params={};for(var u=0;u+1<r.length&&u<n.length;u++)this.state.params[n[u].replaceAll(/[\/:]/g,"")]=r[u+1];return void(this.state.currentRoute=t)}}}};K._=b()((function(e,t,n,a,l){l.currentRoute&&l.currentRoute.component?v()(t,l.currentRoute?l.currentRoute.component:null,(()=>({params:l.params})),null,null,null,n,"0"):l.currentRoute?v()(t,l.currentRoute?l.currentRoute.renderBody:null,(()=>({params:l.params})),null,null,null,n,"1"):t.n(J,a)}),{t:H},Q),K.Component=y()(Q,K._);var V="kGjg9PGU",W=(0,l.t)(V),X=O()("h1",null,"5",null,1,0).t("simple-marko-router"),Z=O()("h2",null,"9",null,1,0).t("About"),ee=O()("p",null,"10",null,1,0).t("To learn more about simple-marko-router visit our github page!"),te=O()("a",{href:"https://github.com/Paradxil/simple-marko-router"},"11",null,1,0).t("Github");(0,g.r)(V,(()=>W));var ne={onCreate(){this.state={name:"test"}},onMount(){feather.replace()},setName(e){this.state.name=e}};W._=b()((function(e,t,n,a,l){t.be("div",{class:"wrapper"},"0",a,null,1),t.be("div",{class:"header"},"1",a,null,1),i()(B,{path:"/",renderBody:e=>{e.be("div",{class:"back-button"},"3",a,null,1),i()(u(),{n:!0,renderBody:e=>{e.e("i",{"data-feather":"chevron-left"},"4",a,0,0)}},e,n,"4"),e.ee()}},t,n,"2"),t.n(X,a),t.ee(),t.be("div",{class:"content"},"6",a,null,1);var r=[];r.push({path:"/",renderBody:e=>{i()(x,{},e,n,"8")}}),r.push({path:"/about",renderBody:e=>{e.n(Z,a),e.n(ee,a),e.n(te,a)}}),r.push({path:"/i/am/:name",renderBody:(e,t)=>{var{params:n}=t;e.be("p",null,"12",a,null,0),e.t("Hello ",a),e.t(n.name,a),e.t("!",a),e.ee()}}),r.push({path:"/show/rgb/:r/:g/:b/",renderBody:(e,t)=>{var{params:n}=t;e.be("p",{style:F()({color:"rgb(".concat(n.r,", ").concat(n.g,", ").concat(n.b,")"),fontSize:"20px"})},"13",a,null,1),e.t("This text is colored according to the route!",a),e.ee()}}),r.push({path:"/:name/is/:age",renderBody:(e,t)=>{var{params:n}=t;e.be("p",null,"14",a,null,0),e.t(n.name,a),e.t(" is ",a),e.t(n.age,a),e.t("!",a),e.ee()}}),i()(I,{defaultRoute:"/",routes:r},t,n,"7"),t.ee(),t.ee()}),{t:V},ne),W.Component=y()(ne,W._),(0,a.init)()}},n={};function a(e){var l=n[e];if(void 0!==l)return l.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,l,r)=>{if(!n){var u=1/0;for(p=0;p<e.length;p++){n=e[p][0],l=e[p][1],r=e[p][2];for(var o=!0,i=0;i<n.length;i++)(!1&r||u>=r)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(o=!1,r<u&&(u=r));if(o){e.splice(p--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,l,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={126:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var l,r,u=n[0],o=n[1],i=n[2],s=0;if(u.some((t=>0!==e[t]))){for(l in o)a.o(o,l)&&(a.m[l]=o[l]);if(i)var p=i(a)}for(t&&t(n);s<u.length;s++)r=u[s],a.o(e,r)&&e[r]&&e[r][0](),e[u[s]]=0;return a.O(p)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=a.O(void 0,[58],(()=>a(3405)));l=a.O(l)})();
//# sourceMappingURL=126.a983787a.js.map