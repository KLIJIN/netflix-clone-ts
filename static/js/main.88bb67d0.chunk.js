(this["webpackJsonpreact-ts-quiz-app"]=this["webpackJsonpreact-ts-quiz-app"]||[]).push([[0],{21:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c.n(n),o=(c(21),c(0)),i=c(16),r={fetchTrending:"/trending/all/week?api_key=".concat("d3eb1a878c159b0717fbd32bf36781f6","&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat("d3eb1a878c159b0717fbd32bf36781f6","&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat("d3eb1a878c159b0717fbd32bf36781f6","&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat("d3eb1a878c159b0717fbd32bf36781f6","&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat("d3eb1a878c159b0717fbd32bf36781f6","&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat("d3eb1a878c159b0717fbd32bf36781f6","&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat("d3eb1a878c159b0717fbd32bf36781f6","&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat("d3eb1a878c159b0717fbd32bf36781f6","&with_genres=99")},s=c(4),l=c.n(s),d=c(6),b=c(5),u=c(1),f=function(){var e,t,c=Object(o.useState)(),n=Object(b.a)(c,2),a=n[0],i=n[1],s={backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")')},f=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3".concat(r.fetchNetflixOriginals));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,i(c.results[Math.floor(Math.random()*c.results.length)]),e.abrupt("return",c.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){f()}),[]),console.log("movie",a),Object(u.jsx)("header",{className:"banner",style:s,children:Object(u.jsxs)("div",{className:"banner__contents",children:[Object(u.jsx)("h1",{className:"banner__title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(u.jsxs)("div",{className:"banner__buttons",children:[Object(u.jsx)("button",{className:"banner__button",children:"Play"}),Object(u.jsx)("button",{className:"banner__button",children:"My List "})]}),Object(u.jsxs)("h1",{className:"banner__description",children:[(null===a||void 0===a?void 0:a.overview)&&(e=a.overview,t=100,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+" ...":e)," "]}),Object(u.jsx)("div",{className:"banner--fadeBottom",children:" "})]})})},v=c(12),h=function(e){var t=e.title,c=e.fetchUrl,n=e.isLargeRow,a=Object(o.useState)([]),i=Object(b.a)(a,2),r=i[0],s=i[1],f=Object(o.useState)(""),h=Object(b.a)(f,2),p=h[0],j=h[1],m=function(){var e=Object(d.a)(l.a.mark((function e(t){var c,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("click"),!p){e.next=5;break}j(""),e.next=13;break;case 5:return e.next=7,fetch("https://api.themoviedb.org/3/movie/".concat(null===t||void 0===t?void 0:t.id,"/videos?api_key=").concat("d3eb1a878c159b0717fbd32bf36781f6"));case 7:return n=e.sent,e.next=10,n.json();case 10:a=e.sent,console.log("handleClick-2",a),j(null===(c=a.results[0])||void 0===c?void 0:c.key);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e="".concat("https://api.themoviedb.org/3").concat(c);function t(){return(t=Object(d.a)(l.a.mark((function t(){var c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return c=t.sent,t.next=5,c.json();case 5:return n=t.sent,s(n.results),t.abrupt("return",n.results);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[c]),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("div",{className:"row__posters",children:r.map((function(e){return Object(u.jsx)("img",{className:"row__poster ".concat(n?"row__posterLarge":""),src:"".concat("https://image.tmdb.org/t/p/original").concat(n?null===e||void 0===e?void 0:e.poster_path:null===e||void 0===e?void 0:e.backdrop_path),alt:e.name,onClick:m.bind(undefined,e)},e.id)}))}),p&&Object(u.jsx)(v.a,{videoId:p,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},p=function(){var e=Object(o.useState)(),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(o.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?n(!0):n(!1)})),function(){window.removeEventListener("scroll",(function(){window.scrollY>100?n(!0):n(!1)}))}}),[]),Object(u.jsxs)("div",{className:"nav ".concat(c?"nav__black":""),children:[Object(u.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(u.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})]})},j=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{}),Object(u.jsx)(f,{}),Object(u.jsx)(h,{title:"Trending Now",fetchUrl:r.fetchTrending,isLargeRow:!0}),Object(u.jsx)(h,{title:"Top Rated",fetchUrl:r.fetchTopRated}),Object(u.jsx)(h,{title:"Action Movies",fetchUrl:r.fetchActionMovies}),Object(u.jsx)(h,{title:"Comedy Movies",fetchUrl:r.fetchComedyMovies}),Object(u.jsx)(h,{title:"Horror Movies",fetchUrl:r.fetchHorrorMovies}),Object(u.jsx)(h,{title:"Romance Movies",fetchUrl:r.fetchRomanceMovies}),Object(u.jsx)(h,{title:"Documentaries",fetchUrl:r.fetchDocumentaries})]})})};a.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.88bb67d0.chunk.js.map