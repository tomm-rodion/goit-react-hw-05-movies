"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961,527],{527:function(e,r,n){n.r(r);var t=n(184);r.default=function(){return(0,t.jsx)("div",{children:(0,t.jsx)("h3",{children:" Oops....Not found page! Please reload the page !"})})}},854:function(e,r,n){n.d(r,{a:function(){return s}});var t=n(748),a=n(184),s=function(){return(0,a.jsx)(t.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}},961:function(e,r,n){n.r(r);var t=n(861),a=n(439),s=n(757),i=n.n(s),c=n(791),u=n(689),o=n(87),l=n(527),p=n(390),d=n(854),h=n(184);r.default=function(){var e,r,n=(0,u.UO)().moviesId,s=(0,c.useState)(null),f=(0,a.Z)(s,2),v=f[0],x=f[1],j=(0,c.useState)(null),w=(0,a.Z)(j,2),g=w[0],m=w[1],b=(0,c.useState)(!1),y=(0,a.Z)(b,2),Z=y[0],k=y[1],_=(0,u.TH)();(0,c.useEffect)((function(){function e(){return(e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.BG)(n);case 3:r=e.sent,x(r),m(r.release_date.substr(0,[4])),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),k(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var S=null!==(e=null===_||void 0===_||null===(r=_.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,h.jsxs)(h.Fragment,{children:[Z&&(0,h.jsx)(l.default,{}),v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.OL,{to:S,children:"Go back"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(v.backdrop_path),alt:"Poster movie",width:"300px"}),(0,h.jsxs)("h2",{children:[v.original_title,(0,h.jsxs)("span",{children:[" (",g,")"]})]}),(0,h.jsxs)("p",{children:["User Score: ",v.vote_average]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:v.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("ul",{children:v.genres.map((function(e,r){var n=e.name;return(0,h.jsx)("li",{children:n},r)}))})]})]}),v&&(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,h.jsx)(c.Suspense,{fallback:(0,h.jsxs)("div",{children:["Loading subpage...",(0,h.jsx)(d.a,{})]}),children:(0,h.jsx)(u.j3,{})})]})}},390:function(e,r,n){n.d(r,{BG:function(){return o},FE:function(){return l},Me:function(){return d},uy:function(){return f},wr:function(){return c}});var t=n(861),a=n(757),s=n.n(a),i=n(243);function c(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"64402845586832b1fcc80d4c6361d650"};var o=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"?&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();function l(e){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"/credits"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=961.b88a6dc4.chunk.js.map