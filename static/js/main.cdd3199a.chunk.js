(this.webpackJsonpDiagnal=this.webpackJsonpDiagnal||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),o=(a(23),a(24),a(25),a(10)),l=a.n(o),i=a(15),u=a(3),m=a(2),g=function(e){return{type:"SEARCH_MOVIES",payload:e}},b=function(e){return{type:"ADVANCE_PAGE",payload:e}},p=function(e){return c.a.createElement("div",{className:""},c.a.createElement("img",{onError:function(e){console.log("Image not found ",e.target.src),e.target.src="/Diagnal/assets/images/posterNotFound.jpg"},loading:"lazy",width:"200",src:"/Diagnal/assets/images/".concat(e.posterImageName),alt:"movie"}),c.a.createElement("p",{className:"text-white"},e.name))},f=Object(m.b)((function(e){return{state:e}}),(function(e){return{setMovieList:function(t){return e({type:"SET_MOVIE_LIST",payload:t})},advancePage:function(t){return e(b(t))}}}))((function(e){var t=e.state,a=(t.movieList,t.searchResults),r=t.page,s=Object(n.useRef)(null),o=Object(n.useState)(!1),m=Object(u.a)(o,2),g=m[0],f=m[1];Object(n.useEffect)((function(){console.log("Fetch Page ",r),0!=r&&d()}),[r]);var v=Object(n.useCallback)((function(t){new IntersectionObserver((function(t){console.log("IntersectionObserver entry ",t),t.forEach((function(t){t.intersectionRatio>0&&(console.log("Page bottom reached",e.state.page),e.advancePage()),0==t.intersectionRatio&&g&&f(!1)}))})).observe(t)}),[b]);Object(n.useEffect)((function(){s.current&&v(s.current)}),[v,s]);var d=function(){var t=Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,fetch("/Diagnal/assets/json/CONTENTLISTINGPAGE-PAGE".concat(r,".json"));case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,e.setMovieList(n),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),f(!0);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}(),E=a;return c.a.createElement("div",null,c.a.createElement("img",{className:"w-full h-35/100",src:"/assets/images/nav_bar.png"}),c.a.createElement("div",{className:"grid gap-4 grid-cols-3"},E.map((function(e,t){return c.a.createElement(p,{key:t,name:e.name,posterImageName:e["poster-image"]})}))),g&&c.a.createElement("div",{className:"w-full text-center text-yellow-300 animate-bounce"},0==a.length?"No Results found":"Reached the bottom"),c.a.createElement("div",{id:"page-bottom-boundary",style:{border:"1px solid red"},ref:s}))})),v=Object(m.b)(null,(function(e){return{searchMovies:function(t){return e(g(t))}}}))((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(""),l=Object(u.a)(o,2),i=(l[0],l[1]);return c.a.createElement("div",{className:"grid grid-cols-".concat(r?"6 bg-black":1," gap-4 ")},r?c.a.createElement("img",{className:"col-span-1 h-5/100 w-5/100 p-1",src:"/Diagnal/assets/images/close.jpg",onClick:function(){return s(!r)}}):c.a.createElement("img",{className:"col-span-1 h-5/100 w-5/100 p-1",src:"/Diagnal/assets/images/search.png",onClick:function(){return s(!r)}}),r&&c.a.createElement("input",{className:"col-span-5 bg-transparent focus:outline-none border-b-2 text-white p-1",placeholder:"Search Movies",onKeyUp:function(t){return a=t.target.value,console.log("Query is ",a),e.searchMovies({searchQuery:a}),void i(a);var a}}))})),d=Object(m.b)(null,(function(e){return{searchMovies:function(t){return e(g(t))}}}))((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(""),l=Object(u.a)(o,2);l[0],l[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"fixed w-full"},c.a.createElement("img",{className:"w-full h-40/100",src:"/Diagnal/assets/images/nav_bar.png"}),c.a.createElement("div",{className:"absolute left-0 top-0"},c.a.createElement("img",{className:"h-5/100 w-5/100 pl-4 pt-2",src:"/Diagnal/assets/images/Back.png",onClick:function(){return s(!r)}})),c.a.createElement("div",{className:"absolute inset-top-center"},c.a.createElement("h3",{className:"text-white"},"Romantic Comedy")),c.a.createElement("div",{className:"absolute right-0 top-0"},c.a.createElement(v,null))))}));var E=function(){return c.a.createElement("div",{className:"bg-black"},c.a.createElement(d,null),c.a.createElement(f,null))},O=a(6),h=a(1),j=a(4),N={movieList:[],page:0,category:"Romantic Comedy",searchResults:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(JSON.stringify(e));switch(t.type){case"SET_MOVIE_LIST":var n=[].concat(Object(j.a)(a.movieList),Object(j.a)(t.payload.page["content-items"].content));return a.movieList=Object(j.a)(n),a.searchResults=Object(j.a)(n),Object(h.a)(Object(h.a)({},e),a);case"SEARCH_MOVIES":var c=t.payload.searchQuery;if(0==(c=c.replaceAll("\\","")).length)return Object(h.a)(Object(h.a)({},e),{},{searchResults:Object(j.a)(e.movieList)});var r=new RegExp(c,"ig"),s=e.movieList.filter((function(e){return r.test(e.name)}));return Object(h.a)(Object(h.a)({},e),{},{searchResults:s});case"ADVANCE_PAGE":return++a.page,Object(h.a)(Object(h.a)({},e),a);default:return Object(h.a)({},e)}},w=a(17),S=a.n(w),R=Object(O.c)(y,Object(O.a)(S.a));s.a.render(c.a.createElement(m.a,{store:R},c.a.createElement(E,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.cdd3199a.chunk.js.map