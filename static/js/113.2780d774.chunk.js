"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[113],{2475:function(t,n,e){e.d(n,{F:function(){return u},a:function(){return c}});var r,a,i=e(168),o=e(6444),s=e(1087),c=o.ZP.ul(r||(r=(0,i.Z)(["\n& li {\n    padding-top: 2px;\n }\n"]))),u=(0,o.ZP)(s.OL)(a||(a=(0,i.Z)(["\n    color: black;\n    \n    &:visited{ color: darkgray;}\n\n    &:hover{\n        color: #0d6efd;\n    }\n\n"])))},1128:function(t,n,e){e.d(n,{VE:function(){return s},qH:function(){return p},tx:function(){return l},vq:function(){return c},zv:function(){return u}});var r=e(5861),a=e(7757),i=e.n(a),o=e(1243),s=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:"fab61af76b035bb5fe60a72bbd93e670"},t.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/week?page=".concat(n),{params:e});case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:"fab61af76b035bb5fe60a72bbd93e670"},t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n),{params:e});case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:"fab61af76b035bb5fe60a72bbd93e670"},t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"),{params:e});case 3:return r=t.sent,a=r.data,t.abrupt("return",a.cast);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:"fab61af76b035bb5fe60a72bbd93e670"},t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),{params:e});case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n,e){var r,a,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={query:n,api_key:"fab61af76b035bb5fe60a72bbd93e670"},t.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?page=".concat(e),{params:r});case 3:return a=t.sent,s=a.data,t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},8113:function(t,n,e){e.r(n),e.d(n,{default:function(){return It}});var r,a=e(5861),i=e(9439),o=e(7757),s=e.n(o),c=e(2791),u=e(1128),l=e(7689),p=e(2475),f=e(184),d=function(t){var n=t.movies,e=(0,l.TH)();return(0,f.jsx)("div",{className:"column-container",children:(0,f.jsx)(p.a,{children:n.map((function(t){return(0,f.jsx)("li",{className:"item-container",children:(0,f.jsx)(p.F,{to:"/movies/".concat(t.id),state:{from:e},children:t.original_title})},t.id)}))})})},m=e(168),v=e(6444).ZP.div(r||(r=(0,m.Z)(["\ndisplay: flex;\njustify-content: center;\npadding-top: 20px;\n\n & input {\n    width: 300px;\n    height: 40px;\n    margin-right: 20px;\n }\n\n & input:active {\n    outline: none;\n }\n\n & button {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    transition: 0.3s;\n }\n\n & button:hover {\n    background-color: #0d6efd; \n    scale: 1.2;\n }\n\n"]))),b=e(3433);function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){g(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var x={data:""},w=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||x},k=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Z=/\/\*[^]*?\*\/|  +/g,j=/\n+/g,O=function t(n,e){var r="",a="",i="",o=function(o){var c=n[o];"@"==o[0]?"i"==o[1]?r=o+" "+c+";":a+="f"==o[1]?t(c,o):o+"{"+t(c,"k"==o[1]?"":e)+"}":"object"==typeof c?a+=t(c,e?e.replace(/([^,])+/g,(function(t){return o.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):o):null!=c&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=t.p?t.p(o,c):o+":"+c+";"),s=o};for(var s in n)o(s);return r+(e&&i?e+"{"+i+"}":i)+a},E={},C=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},N=function(t,n,e,r,a){var i=C(t),o=E[i]||(E[i]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(i));if(!E[o]){var s=i!==t?t:function(t){for(var n,e,r=[{}];n=k.exec(t.replace(Z,""));)n[4]?r.shift():n[3]?(e=n[3].replace(j," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(j," ").trim();return r[0]}(t);E[o]=O(a?g({},"@keyframes "+o,s):s,e?"":"."+o)}var c=e&&E.g?E.g:null;return e&&(E.g=E[o]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(E[o],n,r,c),o},P=function(t,n,e){return t.reduce((function(t,r,a){var i=n[a];if(i&&i.call){var o=i(e),s=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=s?"."+s:o&&"object"==typeof o?o.props?"":O(o,""):!1===o?"":o}return t+r+(null==i?"":i)}),"")};function _(t){var n=this||{},e=t.call?t(n.p):t;return N(e.unshift?e.raw?P(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,w(n.target),n.g,n.o,n.k)}_.bind({g:1});var D,S,L,z,A,F,H,I,T,M,q,R,U,B,V,Y,$,G,J,K=_.bind({k:1});function Q(t,n){var e=this||{};return function(){var r=arguments;function a(i,o){var s=Object.assign({},i),c=s.className||a.className;e.p=Object.assign({theme:S&&S()},s),e.o=/ *go\d+/.test(c),s.className=_.apply(e,r)+(c?" "+c:""),n&&(s.ref=o);var u=t;return t[0]&&(u=s.as||t,delete s.as),L&&u[0]&&L(s),D(u,s)}return n?n(a):a}}var W=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},X=function(){var t=0;return function(){return(++t).toString()}}(),tt=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),nt=new Map,et=function(t){if(!nt.has(t)){var n=setTimeout((function(){nt.delete(t),ot({type:4,toastId:t})}),1e3);nt.set(t,n)}},rt=function t(n,e){switch(e.type){case 0:return y(y({},n),{},{toasts:[e.toast].concat((0,b.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=nt.get(t);n&&clearTimeout(n)}(e.toast.id),y(y({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?y(y({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var a=e.toastId;return a?et(a):n.toasts.forEach((function(t){et(t.id)})),y(y({},n),{},{toasts:n.toasts.map((function(t){return t.id===a||void 0===a?y(y({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?y(y({},n),{},{toasts:[]}):y(y({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return y(y({},n),{},{pausedAt:e.time});case 6:var i=e.time-(n.pausedAt||0);return y(y({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return y(y({},t),{},{pauseDuration:t.pauseDuration+i})}))})}},at=[],it={toasts:[],pausedAt:void 0},ot=function(t){it=rt(it,t),at.forEach((function(t){t(it)}))},st={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ct=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return y(y({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||X()})}(n,t,e);return ot({type:2,toast:r}),r.id}},ut=function(t,n){return ct("blank")(t,n)};ut.error=ct("error"),ut.success=ct("success"),ut.loading=ct("loading"),ut.custom=ct("custom"),ut.dismiss=function(t){ot({type:3,toastId:t})},ut.remove=function(t){return ot({type:4,toastId:t})},ut.promise=function(t,n,e){var r=ut.loading(n.loading,y(y({},e),null==e?void 0:e.loading));return t.then((function(t){return ut.success(W(n.success,t),y(y({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){ut.error(W(n.error,t),y(y({id:r},e),null==e?void 0:e.error))})),t};var lt=function(t,n){ot({type:1,toast:{id:t,height:n}})},pt=function(){ot({type:5,time:Date.now()})},ft=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,c.useState)(it),e=(0,i.Z)(n,2),r=e[0],a=e[1];(0,c.useEffect)((function(){return at.push(a),function(){var t=at.indexOf(a);t>-1&&at.splice(t,1)}}),[r]);var o=r.toasts.map((function(n){var e,r;return y(y(y(y({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||st[n.type],style:y(y(y({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return y(y({},r),{},{toasts:o})}(t),e=n.toasts,r=n.pausedAt;(0,c.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return ut.dismiss(n.id)}),e);n.visible&&ut.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var a=(0,c.useCallback)((function(){r&&ot({type:6,time:Date.now()})}),[r]),o=(0,c.useCallback)((function(t,n){var r,a=n||{},i=a.reverseOrder,o=void 0!==i&&i,s=a.gutter,c=void 0===s?8:s,u=a.defaultPosition,l=e.filter((function(n){return(n.position||u)===(t.position||u)&&n.height})),p=l.findIndex((function(n){return n.id===t.id})),f=l.filter((function(t,n){return n<p&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,(0,b.Z)(o?[f+1]:[0,f])).reduce((function(t,n){return t+(n.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:lt,startPause:pt,endPause:a,calculateOffset:o}}},dt=K(z||(z=(0,m.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),mt=K(A||(A=(0,m.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),vt=K(F||(F=(0,m.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),bt=Q("div")(H||(H=(0,m.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),dt,mt,(function(t){return t.secondary||"#fff"}),vt),gt=K(I||(I=(0,m.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ht=Q("div")(T||(T=(0,m.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),gt),yt=K(M||(M=(0,m.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),xt=K(q||(q=(0,m.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),wt=Q("div")(R||(R=(0,m.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),yt,xt,(function(t){return t.secondary||"#fff"})),kt=Q("div")(U||(U=(0,m.Z)(["\n  position: absolute;\n"]))),Zt=Q("div")(B||(B=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),jt=K(V||(V=(0,m.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Ot=Q("div")(Y||(Y=(0,m.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),jt),Et=function(t){var n=t.toast,e=n.icon,r=n.type,a=n.iconTheme;return void 0!==e?"string"==typeof e?c.createElement(Ot,null,e):e:"blank"===r?null:c.createElement(Zt,null,c.createElement(ht,y({},a)),"loading"!==r&&c.createElement(kt,null,"error"===r?c.createElement(bt,y({},a)):c.createElement(wt,y({},a))))},Ct=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Nt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},Pt=Q("div")($||($=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),_t=Q("div")(G||(G=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Dt=c.memo((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,o=n.height?function(t,n){var e=t.includes("top")?1:-1,r=tt()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Ct(e),Nt(e)],a=(0,i.Z)(r,2),o=a[0],s=a[1];return{animation:n?"".concat(K(o)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(K(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},s=c.createElement(Et,{toast:n}),u=c.createElement(_t,y({},n.ariaProps),W(n.message,n));return c.createElement(Pt,{className:n.className,style:y(y(y({},o),r),n.style)},"function"==typeof a?a({icon:s,message:u}):c.createElement(c.Fragment,null,s,u))}));!function(t,n,e,r){O.p=n,D=t,S=e,L=r}(c.createElement);var St=function(t){var n=t.id,e=t.className,r=t.style,a=t.onHeightUpdate,i=t.children,o=c.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;a(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,a]);return c.createElement("div",{ref:o,className:e,style:r},i)},Lt=_(J||(J=(0,m.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),zt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,a=t.toastOptions,i=t.gutter,o=t.children,s=t.containerStyle,u=t.containerClassName,l=ft(a),p=l.toasts,f=l.handlers;return c.createElement("div",{style:y({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:u,onMouseEnter:f.startPause,onMouseLeave:f.endPause},p.map((function(t){var e=t.position||r,a=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return y(y({left:0,right:0,display:"flex",position:"absolute",transition:tt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),a)}(e,f.calculateOffset(t,{reverseOrder:n,gutter:i,defaultPosition:r}));return c.createElement(St,{id:t.id,key:t.id,onHeightUpdate:f.updateHeight,className:t.visible?Lt:"",style:a},"custom"===t.type?W(t.message,t):o?o(t):c.createElement(Dt,{toast:t,position:e}))})))},At=ut,Ft=e(6048),Ht=e.n(Ft),It=function(){var t=(0,c.useState)(""),n=(0,i.Z)(t,2),e=n[0],r=n[1],o=(0,c.useState)(""),l=(0,i.Z)(o,2),p=l[0],m=l[1],b=(0,c.useState)([]),g=(0,i.Z)(b,2),h=g[0],y=g[1],x=(0,c.useState)(1),w=(0,i.Z)(x,2),k=w[0],Z=w[1],j=(0,c.useState)(0),O=(0,i.Z)(j,2),E=O[0],C=O[1];(0,c.useEffect)((function(){if(""!==p){var t=function(){var t=(0,a.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.qH)(p,k);case 2:n=t.sent,y(n.results),C(n.total_pages);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(p)}}),[p,k]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(zt,{}),(0,f.jsx)(v,{children:(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target.elements.input.value.trim();console.log(n),""!==n?m(t.target.input.value):At.error("The input is empty!")},children:[(0,f.jsx)("label",{children:(0,f.jsx)("input",{type:"text",placeholder:"Enter a movie",name:"input",value:e,onChange:function(t){r(t.target.value.trim())}})}),(0,f.jsx)("button",{type:"submit",children:"Submit"})]})}),(0,f.jsx)("main",{children:0!==h.length?(0,f.jsx)(d,{movies:h}):(0,f.jsx)("div",{children:"No movies found"})}),0!==h.length?(0,f.jsx)(Ht(),{nextLabel:"next >",onPageChange:function(t){var n=t.selected+1;Z(n)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:E,previousLabel:"< previous",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null}):null]})}}}]);
//# sourceMappingURL=113.2780d774.chunk.js.map