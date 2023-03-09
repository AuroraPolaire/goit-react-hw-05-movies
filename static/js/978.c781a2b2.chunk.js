"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[978],{7978:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,i,s,o=t(5861),c=t(9439),u=t(7757),d=t.n(u),p=t(1087),f=t(7689),h=t(2791),l=t(1128),v=t(168),b=t(6444),x=b.ZP.button(r||(r=(0,v.Z)(["\n    margin: 15px 50px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 3px;\n    transition: 0.3s;\n \n\n &:hover {\n    background-color: #0d6efd; \n    \n }\n"]))),m=b.ZP.div(a||(a=(0,v.Z)(["\ndisplay: flex;\ngap: 20px;\npadding: 0 20px;\n\n& img {\n max-width: 200px;\n}\n& h1 {\n    margin: 0;\n}\n\n& h2 {\n    font-size: 20px;\n}\n\n\n\n"]))),g=b.ZP.div(i||(i=(0,v.Z)(["\npadding: 0 20px;\n& h2 {\n    font-size: 20px;\n}\n\n& .additional:not(:last-child) {\n    padding-bottom: 10px ;\n}\n\n& .additional {\n\n}\n"]))),j=(0,b.ZP)(p.OL)(s||(s=(0,v.Z)(["\n  color: black;\n\n  &:hover {\n    border-bottom: 3px solid #0d6efd; \n  }\n\n&.active {\n  color: #0d6efd;\n}"]))),w=t(184),Z=function(){var n,e,t=(0,h.useState)({}),r=(0,c.Z)(t,2),a=r[0],i=r[1],s=(0,h.useState)([]),u=(0,c.Z)(s,2),v=u[0],b=u[1],Z=(0,h.useState)(""),k=(0,c.Z)(Z,2),_=k[0],y=k[1],q=(0,f.UO)().id,P=(0,f.TH)(),z=null!==(n=null===P||void 0===P||null===(e=P.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,h.useEffect)((function(){var n=function(){var n=(0,o.Z)(d().mark((function n(e){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.vq)(e);case 2:t=n.sent,i(t),b(t.genres),y("https://image.tmdb.org/t/p/w300/".concat(t.poster_path));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();n(q)}),[q]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p.rU,{to:z,children:(0,w.jsx)(x,{type:"button",children:"Go back"})}),(0,w.jsxs)(m,{children:[(0,w.jsx)("div",{children:""!==_?(0,w.jsx)("img",{src:_,alt:""}):(0,w.jsx)("div",{children:"Loading ..."})}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("h1",{children:[a.original_title," (",parseFloat(a.release_date),")"]}),(0,w.jsxs)("p",{children:["User score: ",(10*a.vote_average).toFixed(),"%"]}),(0,w.jsx)("h2",{children:"Overview"}),(0,w.jsx)("p",{children:a.overview}),(0,w.jsx)("h2",{children:"Genres"}),(0,w.jsx)("p",{children:function(n){if(n)return n.map((function(n){return n.name})).join(" ")}(v)})]})]}),(0,w.jsxs)(g,{children:[(0,w.jsx)("h2",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{className:"additional",children:(0,w.jsx)(j,{to:"cast",state:{from:P},children:"Cast"})}),(0,w.jsx)("li",{className:"additional",children:(0,w.jsx)(j,{to:"reviews",state:{from:P},children:"Reviews"})})]})]}),(0,w.jsx)(f.j3,{})]})}},1128:function(n,e,t){t.d(e,{VE:function(){return o},qH:function(){return p},tx:function(){return d},vq:function(){return c},zv:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),s=t(1243),o=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/trending/movie/week?page=".concat(e),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={query:e,api_key:"fab61af76b035bb5fe60a72bbd93e670"},n.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?page=".concat(t),{params:r});case 3:return a=n.sent,o=a.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=978.c781a2b2.chunk.js.map