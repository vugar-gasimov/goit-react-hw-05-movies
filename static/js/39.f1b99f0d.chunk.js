"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[39],{9039:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,o,i,a,c,d,s,u,p,l=r(9439),f=r(4476),h=r(2791),x=r(7689),b=r(6835),v=r(168),g=r(1087),m=r(5867),k=(m.ZP.div(t||(t=(0,v.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n  color: #fdd03b;\n  > a {\n    text-decoration: none;\n  }\n"]))),m.ZP.div(o||(o=(0,v.Z)(["\n  margin: 0 auto;\n  background: #10101058;\n  width: fit-content;\n  border-radius: 10px;\n  padding: 10px;\n  height: fit-content;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n"])))),Z=m.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n\n  &::after {\n    content: '';\n    position: fixed;\n    top: 0px;\n    left: -5px;\n    width: calc(100% + 10px);\n    height: calc(100vh + 10px);\n    background-image: ",";\n    background-size: cover;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n\n    z-index: -1;\n    opacity: 0.35;\n  }\n"])),(function(n){return n.$backdrop?"url('https://image.tmdb.org/t/p/w500/".concat(n.$backdrop,"')"):"none"})),j=m.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    display: flex;\n    width: 500px;\n    height: 650px;\n\n    border-radius: 5px;\n  }\n"]))),w=m.ZP.div(c||(c=(0,v.Z)(["\n  max-width: 500px;\n  background: #10101058;\n  border-radius: 10px;\n  padding: 10px;\n  height: fit-content;\n  h2 {\n    margin-bottom: 5px;\n    color: #fdd03b;\n  }\n\n  p {\n    margin: 5px 0;\n    color: #fdd03b;\n  }\n\n  h3,\n  h4 {\n    margin: 10px 0 5px;\n    color: #fdd03b;\n  }\n\n  span {\n    margin-right: 10px;\n    color: #fdd03b;\n  }\n"]))),y=(0,m.ZP)(g.rU)(d||(d=(0,v.Z)(["\n  width: fit-content;\n  text-decoration: none;\n  margin-left: 20px;\n  border: 2px solid #cdcdcd;\n  padding: 0.4rem 1.5rem;\n  font-size: 1.2rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  display: inline-block;\n  height: 3rem;\n  color: #fdd03b;\n  border: 1px solid transparent;\n  background-color: #fdd03b;\n  border-color: transparent;\n  color: black;\n\n  &:hover:not(.active) {\n    color: #fff;\n  }\n"]))),_=(0,m.ZP)(g.OL)(s||(s=(0,v.Z)(["\n  text-decoration: none;\n  margin-left: 20px;\n  border: 2px solid #cdcdcd;\n  padding: 0.4rem 1.5rem;\n  font-size: 1.2rem;\n  font-weight: 600;\n  border-radius: 2rem;\n  cursor: pointer;\n  display: inline-block;\n  height: 3rem;\n  color: #fdd03b;\n  border: 1px solid transparent;\n\n  border-color: transparent;\n\n  &.active {\n    color: #212121;\n    background-color: #fdd03b;\n    font-weight: 500;\n    border-color: #fdd348;\n  }\n\n  &:hover:not(.active) {\n    color: black;\n    background-color: #fdd03b;\n    font-weight: 500;\n    border-color: transparent;\n  }\n"]))),P=m.ZP.div(u||(u=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),z=m.ZP.div(p||(p=(0,v.Z)(["\n  color: #fdd03b;\n  display: flex;\n  justify-content: center;\n"]))),U=r(1844),S=r(184),q=function(){var n,e,r,t,o,i=(0,h.useState)(null),a=(0,l.Z)(i,2),c=a[0],d=a[1],s=(0,h.useState)(""),u=(0,l.Z)(s,2)[1],p=(0,x.TH)(),v=(0,h.useRef)((null===(n=p.state)||void 0===n?void 0:n.from)||"/"),g=(0,x.UO)().id,m=(0,x.s0)();return(0,h.useEffect)((function(){(0,f.Mc)(g).then((function(n){d(n)})).catch((function(n){m("/404"),u(n.message)}))}),[g,m]),c&&0!==c.length?(0,S.jsxs)(Z,{$backdrop:c.backdrop_path,children:[(0,S.jsx)(y,{to:v.current,children:(0,S.jsx)(U.Z,{size:28,strokeWidth:2.5})}),(0,S.jsxs)(j,{children:[(0,S.jsx)("img",{width:500,height:650,src:null!==c&&void 0!==c&&c.poster_path?"https://image.tmdb.org/t/p/w500".concat(null===c||void 0===c?void 0:c.poster_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU",alt:null!==(e=null!==(r=c.original_title)&&void 0!==r?r:c.title)&&void 0!==e?e:c.name}),(0,S.jsxs)(w,{children:[(0,S.jsxs)("h2",{children:[null!==(t=null!==(o=c.original_title)&&void 0!==o?o:c.title)&&void 0!==t?t:c.name,(0,S.jsx)("br",{}),"(",null===c||void 0===c?void 0:c.release_date,")"]}),(0,S.jsxs)("p",{children:["User score: ",(10*c.vote_average).toFixed(2),"%"]}),(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)("p",{children:c.overview}),(0,S.jsx)("h4",{children:"Genres"}),(0,S.jsx)("p",{children:c.genres.map((function(n){return(0,S.jsx)("span",{children:n.name},n.id)}))})]})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)(z,{children:"Additional information:"}),(0,S.jsxs)(P,{children:[(0,S.jsx)(_,{to:"cast",children:" Cast "}),(0,S.jsx)(_,{to:"reviews",children:" Reviews "})]})]}),(0,S.jsx)("br",{}),(0,S.jsx)(h.Suspense,{fallback:(0,S.jsx)(b.Z,{}),children:(0,S.jsx)(x.j3,{})})]}):(0,S.jsx)("div",{children:(0,S.jsx)(b.Z,{})})}},4476:function(n,e,r){r.d(e,{IV:function(){return p},Mc:function(){return u},mv:function(){return f},vw:function(){return s},wH:function(){return l}});var t=r(1413),o=r(5861),i=r(7757),a=r.n(i),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var d="3d5790bdd3fdeefaeb5478f646385f38",s=function(){var n=(0,o.Z)(a().mark((function n(e){var r,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day",{params:(0,t.Z)((0,t.Z)({},e),{},{api_key:d})});case 2:return r=n.sent,o=r.data,n.abrupt("return",o.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,o.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e),{params:{api_key:d}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits"),{params:{api_key:d}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:d}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)(a().mark((function n(e,r){var o,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{params:(0,t.Z)((0,t.Z)({query:e},r),{},{api_key:d})});case 2:return o=n.sent,i=o.data,n.abrupt("return",i.results);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=39.f1b99f0d.chunk.js.map