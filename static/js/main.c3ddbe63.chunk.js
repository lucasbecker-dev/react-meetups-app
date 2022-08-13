(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={item:"MeetupItem_item__1yCfo",image:"MeetupItem_image__3Abey",content:"MeetupItem_content__177s_",actions:"MeetupItem_actions__27G6p"}},12:function(e,t,a){e.exports={header:"MainNavigation_header__1tzLF",logo:"MainNavigation_logo__3xleW",active:"MainNavigation_active__36wrQ",badge:"MainNavigation_badge__3wr4B"}},17:function(e,t,a){e.exports={card:"Card_card__qJ3FO"}},18:function(e,t,a){e.exports={list:"MeetupList_list__1NhMb"}},21:function(e,t,a){e.exports={main:"Layout_main__2Xdcd"}},23:function(e,t,a){e.exports=a(45)},28:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),i=a(6),o=(a(28),a(1)),u=a(22),s=a(10),m=a(17),d=a.n(m),p=function(e){return r.a.createElement("div",{className:d.a.card},e.children)},f=a(11),v=a.n(f),E=Object(n.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},removeAllFavorites:function(){},isFavorite:function(e){}}),_=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],i={favorites:c,totalFavorites:c.length,addFavorite:function(e){l(function(t){return t.concat(e)})},removeFavorite:function(e){l(function(t){return t.filter(function(t){return t.id!==e})})},removeAllFavorites:function(){l([])},isFavorite:function(e){return c.some(function(t){return t.id===e})}};return r.a.createElement(E.Provider,{value:i},e.children)},b=E,h=function(e){var t=Object(n.useContext)(b),a=t.isFavorite(e.id);return r.a.createElement(p,null,r.a.createElement("li",{className:v.a.item},r.a.createElement("div",{className:v.a.image},r.a.createElement("img",{src:e.image,alt:e.title})),r.a.createElement("div",{className:v.a.content},r.a.createElement("h3",null,e.title),r.a.createElement("address",null,e.address),r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:v.a.actions},r.a.createElement("button",{onClick:function(){a?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,address:e.address,description:e.description,image:e.image})}},a?"Remove from Favorites":"Add to Favorites"))))},g=a(18),F=a.n(g),N=function(e){return r.a.createElement("ul",{className:F.a.list},e.meetups.map(function(e){return r.a.createElement(h,{key:e.id,id:e.id,image:e.image,title:e.title,address:e.address,description:e.description})}))},M=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),m=o[0],d=o[1];return Object(n.useEffect)(function(){l(!0),fetch("https://react-test-app-5a927-default-rtdb.firebaseio.com/meetups.json").then(function(e){return e.json()}).then(function(e){var t=[];for(var a in e)t.push(Object(u.a)({id:a},e[a]));l(!1),d(t)}).catch(function(e){console.error(e)})},[]),c?r.a.createElement("section",null,r.a.createElement("p",null,"Loading...")):r.a.createElement("section",null,r.a.createElement("h1",null,"All Meetups Page"),r.a.createElement(N,{meetups:m}))},j=a(8),O=a.n(j),w=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(),l=Object(n.useRef)();return r.a.createElement(p,null,r.a.createElement("form",{className:O.a.form,onSubmit:function(n){n.preventDefault();var r={title:t.current.value,image:a.current.value,address:c.current.value,description:l.current.value};e.onAddMeetup(r)}},r.a.createElement("div",{className:O.a.control},r.a.createElement("label",{htmlFor:"title"},"Meetup Title"),r.a.createElement("input",{type:"text",required:!0,id:"title",ref:t})),r.a.createElement("div",{className:O.a.control},r.a.createElement("label",{htmlFor:"image"},"Meetup Image"),r.a.createElement("input",{type:"url",required:!0,id:"image",ref:a})),r.a.createElement("div",{className:O.a.control},r.a.createElement("label",{htmlFor:"address"},"Meetup Address"),r.a.createElement("input",{type:"text",required:!0,id:"address",ref:c})),r.a.createElement("div",{className:O.a.control},r.a.createElement("label",{htmlFor:"description"},"Meetup Description"),r.a.createElement("textarea",{rows:5,required:!0,id:"description",ref:l})),r.a.createElement("div",{className:O.a.actions},r.a.createElement("button",null,"Add Meetup"))))},x=function(e){var t=Object(o.f)();return r.a.createElement("section",null,r.a.createElement("h1",null,"Add new meetup"),r.a.createElement(w,{onAddMeetup:function(e){fetch("https://react-test-app-5a927-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(){t.replace("/")})}}))},y=function(e){var t,a=Object(n.useContext)(b);return t=0===a.favorites.length?r.a.createElement("p",null,"You don't have any favorites yet. Go add some!"):r.a.createElement(N,{meetups:a.favorites}),r.a.createElement("section",null,r.a.createElement("h1",null,"My Favorites"),t)},A=a(12),C=a.n(A),k=function(e){var t=Object(n.useContext)(b);return r.a.createElement("header",{className:C.a.header},r.a.createElement("div",{className:C.a.logo},"React Meetups"),r.a.createElement("form",{action:"https://www.lucasbecker.dev/"},r.a.createElement("input",{type:"submit",value:"Go Back to LucasBecker.dev"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/react-meetups-app/"},"All Meetups")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/react-meetups-app/new-meetups"},"New Meetups")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/react-meetups-app/favorites"},"Favorites",r.a.createElement("span",{className:C.a.badge},t.totalFavorites)))))},I=a(21),L=a.n(I),R=function(e){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("main",{className:L.a.main},e.children))},S=function(){return r.a.createElement(R,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:["/","","/react-meetups-app/"],exact:!0},r.a.createElement(M,null)),r.a.createElement(o.a,{path:"/react-meetups-app/new-meetups"},r.a.createElement(x,null)),r.a.createElement(o.a,{path:"/react-meetups-app/favorites"},r.a.createElement(y,null))))};l.a.render(r.a.createElement(_,null,r.a.createElement(i.a,null,r.a.createElement(S,null))),document.getElementById("root"))},8:function(e,t,a){e.exports={form:"NewMeetupForm_form__2l6Cc",control:"NewMeetupForm_control__NLpUF",actions:"NewMeetupForm_actions__2KGJ3"}}},[[23,2,1]]]);
//# sourceMappingURL=main.c3ddbe63.chunk.js.map