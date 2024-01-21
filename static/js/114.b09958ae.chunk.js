"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[114],{4672:function(n,t,e){e.d(t,{Z:function(){return g}});var r,a,c,o,i=e(7689),s=e(1087),u=e(168),p=e(5216),l=p.ZP.ul(r||(r=(0,u.Z)(["\n  list-style: none;\n  flex-wrap: wrap;\n  gap: 15px;\n  display: flex;\n  padding: 0;\n"]))),f=p.ZP.li(a||(a=(0,u.Z)(["\n  border-radius: 12px;\n  width: 300px;\n  text-align: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease-in-out;\n\n  :hover {\n    transform: scale(1.03);\n  }\n"]))),d=p.ZP.p(c||(c=(0,u.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n  margin-top: 10px;\n"]))),h=p.ZP.img(o||(o=(0,u.Z)(["\n  border-radius: 12px;\n  width: 300px;\n  height: 450px;\n"]))),x=e(9105),v=e(184),g=function(n){var t=n.movies,e=(0,i.TH)();return(0,v.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,v.jsx)(f,{children:(0,v.jsxs)(s.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w400".concat(a):x,alt:r}),(0,v.jsx)(d,{children:r})]})},t)}))})}},6577:function(n,t,e){e.d(t,{Df:function(){return u},M1:function(){return d},Pg:function(){return l},Ph:function(){return g},jP:function(){return x}});var r=e(5861),a=e(4687),c=e.n(a),o=e(5294),i="https://api.themoviedb.org/3",s="032dc0b996a75e755df2ef4834f02f4f";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"/trending/movie/day?api_key=").concat(s),n.prev=1,n.next=4,o.Z.get(t);case 4:return e=n.sent,n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/movie/").concat(t,"?api_key=").concat(s),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(s),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.cast);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(s),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(t),n.prev=1,n.next=4,o.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}},114:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,c,o,i=e(5861),s=e(9439),u=e(4687),p=e.n(u),l=e(4672),f=e(2791),d=e(1087),h=e(6577),x=e(168),v=e(5216),g=v.ZP.p(r||(r=(0,x.Z)(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 32px;\n  color: #e74c3c;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]))),m=e(184),b=function(n){var t=n.errorText;return(0,m.jsx)(g,{children:t})},Z=e(9258),w=v.ZP.form(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  max-width: 300px;\n  background-color: #ecf0f1;\n  border-radius: 4px;\n  overflow: hidden;\n  margin: 0 auto;\n  margin-bottom: 18px;\n"]))),y=v.ZP.button(c||(c=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.8;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background-color: #3498db;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),k=v.ZP.input(o||(o=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  border: none;\n  outline: none;\n  padding: 10px;\n  ::placeholder {\n    font: inherit;\n    font-size: 14px;\n  }\n"]))),j=e(2715),_=function(n){var t=n.setParams,e=(0,f.useState)(""),r=(0,s.Z)(e,2),a=r[0],c=r[1];return(0,m.jsxs)(w,{onSubmit:function(n){n.preventDefault(),t(a)},children:[(0,m.jsx)(k,{type:"text",name:"search",onChange:function(n){c(n.target.value.trim().toLowerCase())}}),(0,m.jsx)(y,{type:"submit",children:(0,m.jsx)(j.Vph,{size:"30"})})]})},P=function(){var n,t=(0,d.lr)(),e=(0,s.Z)(t,2),r=e[0],a=e[1],c=(0,f.useState)(null),o=(0,s.Z)(c,2),u=o[0],x=o[1],v=(0,f.useState)(null),g=(0,s.Z)(v,2),w=g[0],y=g[1],k=(0,f.useState)(null),j=(0,s.Z)(k,2),P=j[0],z=j[1],S=(0,f.useState)(!1),C=(0,s.Z)(S,2),T=C[0],q=C[1],D=null!==(n=r.get("query"))&&void 0!==n?n:"";(0,f.useEffect)((function(){if(""!==D){var n=function(){var n=(0,i.Z)(p().mark((function n(){var t,e,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return q(!0),n.prev=1,n.next=4,(0,h.Ph)(D);case 4:t=n.sent,e=t.results,r=t.total_results,x(e),y(r),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),z(n.t0.message);case 14:return n.prev=14,q(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}}),[D]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(_,{setParams:function(n){a(""!==n?{query:n}:{})}}),T&&(0,m.jsx)(Z.a,{}),u&&!T&&(0,m.jsx)(l.Z,{movies:u}),0===w&&(0,m.jsx)(b,{errorText:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0437\u0430 \u0432\u0430\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),P&&(0,m.jsx)(b,{errorText:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... ".concat(P,". \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.")})]})}},9105:function(n,t,e){n.exports=e.p+"static/media/error.8e31bb59bcb085233c47.jpeg"}}]);
//# sourceMappingURL=114.b09958ae.chunk.js.map