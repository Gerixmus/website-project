(this["webpackJsonpmy-app-new"]=this["webpackJsonpmy-app-new"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c.n(s),n=c(24),a=c.n(n),o=(c(58),c(31),c(3)),r=c(16),l=(c(59),c(1)),j=["btn--primary","btn--outline","btn--test"],b=["btn--medium","btn--large"],m=function(e){var t=e.children,c=e.type,s=e.onClick,i=e.buttonStyle,n=e.buttonSize,a=j.includes(i)?i:j[0],o=b.includes(n)?n:b[0];return Object(l.jsx)(r.b,{to:"/website-project/sign-up",className:"btn-mobile",children:Object(l.jsx)("button",{className:"btn ".concat(a," ").concat(o),onClick:s,type:c,children:t})})};c(62);var d=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(!0),a=Object(o.a)(n,2),j=(a[0],a[1]),b=function(){return i(!1)},m=function(){window.innerWidth<=1024?j(!1):j(!0)};return Object(s.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsxs)(r.b,{to:"/website-project/",className:"navbar-logo",onClick:b,children:["Gorgo School",Object(l.jsx)("img",{className:"social_information_icon_2",src:"/website-project/icons/book.svg",alt:"book"})]}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return i(!c)},children:Object(l.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(l.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/website-project/",className:"nav-links",onClick:function(){b()},children:"O nas"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/website-project/cennik",className:"nav-links",onClick:b,children:"Ucz si\u0119 ze mn\u0105"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/website-project/sign-up",className:"nav-links",onClick:b,children:"Kontakt"})})]})]})})})},x=c(5);c(63);function h(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__item",children:Object(l.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(l.jsx)("img",{className:"cards__item__img",alt:"Travel",src:e.src})}),Object(l.jsx)("div",{className:"cards__item__info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})}var p=c(50);var O=function(){return Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("h1",{children:"Zobacz nasze ostatnie zdj\u0119cia!"}),Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsxs)("div",{className:"cards__wrapper",children:[Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(h,{src:"/website-project/images/img-ren.jpg",text:"Rennesaince",label:"Ren",path:"/cennik"}),Object(l.jsx)(h,{src:"/website-project/images/kylo-ren.jpg",text:"Kylo-ren",label:"Ren",path:"/cennik"})]}),Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(h,{src:"/website-project/images/renesmee.jpg",text:"Renesmee",label:"Ren",path:"/cennik"}),Object(l.jsx)(h,{src:"/website-project/images/drawing.jpg",text:"Lana with puppies",label:"Drawing",path:"/cennik"}),Object(l.jsx)(h,{src:"/website-project/images/ezhik.jpg",text:"Atapaski Ezhik Snow",label:"Our dogs",path:"/cennik"})]}),Object(l.jsx)("h1",{children:"Zobacz nasze posty na Facebooku!"}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(p.FacebookEmbed,{url:"https://www.facebook.com/20531316728/posts/10154009990506729/",width:550})})]})})]})};c(96);var u=function(){return Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsx)("img",{className:"hero_section",src:"/website-project/images/img-school.jpg",alt:"hero_section"}),Object(l.jsx)("h1",{children:"GORGO SCHOOL"}),Object(l.jsx)("p",{children:"Szko\u0142a j\u0119zyka angielskiego"}),Object(l.jsx)("div",{className:"hero-btns",children:Object(l.jsx)(m,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"NAPISZ DO NAS"})})]})},f=c(104),g={in:{opacity:1},out:{opacity:0}},w={duration:.5};var _=function(){return Object(l.jsxs)(f.a.div,{initial:"out",animate:"in",exit:"out",variants:g,transition:w,children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{})]})};c(97);var k=function(){return Object(l.jsx)("div",{className:"smth"})};function v(){return Object(l.jsxs)(f.a.div,{initial:"out",animate:"in",exit:"out",variants:g,transition:w,children:[Object(l.jsx)("h1",{className:"products",children:"PRODUCTS"}),Object(l.jsx)(k,{})]})}c(98);var N=c(53),y=c(44),z={width:"400px",height:"400px"},S={lat:52.22615740785355,lng:20.987153727655095};function C(){var e=Object(y.c)({id:"google-map-script",googleMapsApiKey:"AIzaSyCOoS98S8DWRbRk-t6qK67qpBklvwBuxuQ"}).isLoaded,t=i.a.useState(null),c=Object(o.a)(t,2),s=(c[0],c[1]),n=i.a.useCallback((function(e){s(null)}),[]);return e?Object(l.jsxs)(y.a,{mapContainerStyle:z,center:S,zoom:15,onUnmount:n,children:[Object(l.jsx)(y.b,{onLoad:function(e){console.log("marker: ",e)},position:S}),Object(l.jsx)(l.Fragment,{})]}):Object(l.jsx)(l.Fragment,{})}var P=i.a.memo(C),L=function(){return Object(l.jsx)("p",{children:"Twoja Wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana!"})};var F=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),i=c[0],n=c[1];return setTimeout((function(){n(!1)}),5e3),Object(l.jsxs)("div",{className:"contact_site_container",children:[Object(l.jsxs)("div",{className:"contact_container",children:[Object(l.jsxs)("form",{className:"form_container",action:"",onSubmit:function(e){e.preventDefault(),N.a.sendForm("service_pxigapj","template_wv36r6a",e.target,"user_VB2jRakqrEaN4Zp62PZyB").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),n(!0)},children:[Object(l.jsx)("h2",{className:"form_header",children:"Napisz do nas!"}),Object(l.jsxs)("div",{className:"form_imput_container",children:[Object(l.jsxs)("div",{className:"contact_info_form",children:[Object(l.jsxs)("div",{className:"form_part",children:[Object(l.jsx)("label",{for:"fullName",children:"Imi\u0119 i nazwisko"}),Object(l.jsx)("input",{className:"personal_info",type:"text",id:"fullName",name:"fullName",required:!0})]}),Object(l.jsxs)("div",{className:"form_part",children:[Object(l.jsx)("label",{for:"phone",children:"Numer telefonu"}),Object(l.jsx)("input",{className:"personal_info",type:"text",id:"phone",name:"phone",pattern:"[+]?[0-9]{2}[0-9]{9}|[0-9]{9}"})]}),Object(l.jsxs)("div",{className:"form_part",children:[Object(l.jsx)("label",{for:"email",children:"Adres email"}),Object(l.jsx)("input",{className:"personal_info",type:"email",id:"email",name:"email",required:!0})]})]}),Object(l.jsx)("div",{className:"message_form",children:Object(l.jsxs)("div",{className:"form_part_message",children:[Object(l.jsx)("label",{for:"message",children:"Wiadomo\u015b\u0107"}),Object(l.jsx)("textarea",{className:"message_input",id:"message",name:"message",required:!0}),Object(l.jsx)("div",{className:"row",children:i?Object(l.jsx)(L,{}):null}),Object(l.jsx)("button",{children:"Wy\u015blij"})]})})]})]}),Object(l.jsx)("div",{className:"social_information",children:Object(l.jsxs)("div",{className:"social_information_container",children:[Object(l.jsx)("h2",{className:"comment_header",children:"Dane kontaktowe"}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[Object(l.jsxs)("div",{className:"social_information_section",children:[Object(l.jsx)("img",{className:"social_information_icon",src:"/website-project/icons/pin.svg",alt:"pin"}),Object(l.jsx)("p",{children:"Towarowa 3, 00-811 Warszawa, Polska"})]}),Object(l.jsxs)("div",{className:"social_information_section",children:[Object(l.jsx)("img",{className:"social_information_icon",src:"/website-project/icons/phone.svg",alt:"pin"}),Object(l.jsx)("p",{children:"+48 123 456 789"})]}),Object(l.jsxs)("div",{className:"social_information_section",children:[Object(l.jsx)("img",{className:"social_information_icon",src:"/website-project/icons/email.svg",alt:"pin"}),Object(l.jsx)("p",{children:"jan.kowalski@mail.com"})]})]}),Object(l.jsx)("div",{style:{marginBottom:"20px"},children:Object(l.jsxs)("div",{style:{display:"flex",gap:"25px"},children:[Object(l.jsx)("a",{class:"social-icon-link website",href:"https://www.facebook.com/",target:"_blank",children:Object(l.jsx)("img",{className:"social_information_icon_2",src:"/website-project/icons/icons8-facebook.svg",alt:"facebook"})}),Object(l.jsx)("a",{class:"social-icon-link website",href:"https://github.com/Gerixmus/website-project",target:"_blank",children:Object(l.jsx)("img",{className:"social_information_icon_2",src:"/website-project/icons/icons8-github.svg",alt:"github"})}),Object(l.jsx)("a",{class:"social-icon-link website",href:"https://www.instagram.com/",target:"_blank",children:Object(l.jsx)("img",{className:"social_information_icon_2",src:"/website-project/icons/icons8-instagram.svg",alt:"instagram"})})]})})]})})]}),Object(l.jsx)("div",{style:{boxShadow:"0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)"},children:Object(l.jsx)(P,{})})]})};function R(){return Object(l.jsx)("div",{style:{flex:1},children:Object(l.jsx)(f.a.div,{style:{height:"100%"},initial:"out",animate:"in",exit:"out",variants:g,transition:w,children:Object(l.jsx)(F,{})})})}function D(){var e=Object(x.k)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}c(100);var B=[{opis:"Pakiet 10 zaj\u0119\u0107 po 45 min",cena:"1000  PLN",pakiet:"podstawowy",info:"Idealny dla osoby pocz\u0105tkuj\u0105cej, kinestetyka, osoby, kt\xf3ra szybko si\u0119 nudzi b\u0105d\u017a do bie\u017c\u0105cego przygotowywania si\u0119 do zaj\u0119\u0107 lekcyjnych."},{opis:"Pakiet 10 zaj\u0119\u0107 po 60 min",cena:"1250  PLN",pakiet:"rozszerzony",info:"Polecam dla os\xf3b, kt\xf3re pracuj\u0105 wolniej, s\u0105 dok\u0142adne, potrzebuj\u0105 wi\u0119cej czasu na wykonanie zadania, b\u0105d\u017a dla ucznia, kt\xf3ry ma zaleg\u0142o\u015bci i potrzebuje je nadrobi\u0107."},{opis:"Pakiet 5 zaj\u0119\u0107 po 90 min",cena:"900  PLN",pakiet:"egzaminacyjny",info:"Niezb\u0119dny, gdy pozosta\u0142o ma\u0142o czasu do prze\u0107wiczenia zada\u0144 typu egzaminacyjnego i strategii egzaminacyjnych."},{opis:"Lekcja indywidualna 60 min",cena:"150  PLN",pakiet:"",info:"Jednorazowa forma pomocy w wykonaniu zadania domowego, przygotowania si\u0119 do zaj\u0119\u0107 b\u0105d\u017a te\u017c forma konsultacji, om\xf3wienia dalszych mo\u017cliwo\u015bci rozwoju kompetencji j\u0119zykowych. Nie zobowi\u0105zuje do dalszej wsp\xf3\u0142pracy. "},{opis:"Lekcja  indywidualna 60 min z pisemnym opisem",cena:"200  PLN",pakiet:"",info:"Forma diagnozy umiej\u0119tno\u015bci j\u0119zykowych z uwzgl\u0119dnieniem czterech obszar\xf3w kompetencji j\u0119zykowych: s\u0142uchania, czytania, pisania i m\xf3wienia wraz z opisem."}],E=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(l.jsx)("div",{className:"cennik-container",children:Object(l.jsxs)("table",{className:"content-table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Opis"}),Object(l.jsx)("th",{children:"Cena"}),Object(l.jsx)("th",{children:"Pakiet"})]})}),Object(l.jsx)("tbody",{children:B.map((function(e,t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("tr",{className:"normal-row",onClick:function(){return function(e){if(c===e)return i(null);i(e)}(t)},children:[Object(l.jsx)("td",{children:e.opis}),Object(l.jsx)("td",{children:e.cena}),Object(l.jsx)("td",{children:e.pakiet})]},t),Object(l.jsx)("tr",{className:c===t?"content show":"content",children:Object(l.jsx)("td",{className:"content-show",colSpan:3,children:e.info})})]})}))})]})})};function G(){return Object(l.jsx)("div",{style:{flex:1},children:Object(l.jsx)(f.a.div,{initial:"out",animate:"in",exit:"out",variants:g,transition:w,children:Object(l.jsx)(E,{})})})}var T=c(105);c(101);var q=function(){return Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsx)("div",{class:"footer-links",children:Object(l.jsx)("div",{className:"footer-link-wrapper"})}),Object(l.jsx)("section",{class:"social-media",children:Object(l.jsxs)("div",{class:"social-media-wrap",children:[Object(l.jsx)("div",{class:"footer-logo",children:Object(l.jsxs)(r.b,{to:"/",className:"social-logo",children:["Gorgo School",Object(l.jsx)("img",{className:"social_information_icon_2",src:"/website-project/icons/book.svg",alt:"book"})]})}),Object(l.jsx)("small",{class:"website-rights",children:"Gabriel Gordziejonok \xa9 2021"}),Object(l.jsxs)("div",{class:"social-icons",children:[Object(l.jsx)("a",{class:"social-icon-link website",href:"https://www.facebook.com/",target:"_blank",children:Object(l.jsx)("img",{className:"social_information_icon_2",src:"/website-project/icons/icons8-facebook.svg",alt:"facebook"})}),Object(l.jsx)("a",{class:"social-icon-link website",href:"https://github.com/Gerixmus/website-project",target:"_blank",children:Object(l.jsx)("img",{className:"social_information_icon_2",src:"/website-project/icons/icons8-github.svg",alt:"github"})}),Object(l.jsx)("a",{class:"social-icon-link website",href:"https://www.instagram.com/",target:"_blank",children:Object(l.jsx)("img",{className:"social_information_icon_2",src:"/website-project/icons/icons8-instagram.svg",alt:"instagram"})})]})]})})]})};var A=function(){return Object(l.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Object(l.jsxs)(T.a,{exitBeforeEnter:!0,children:[Object(l.jsx)(D,{}),Object(l.jsx)(d,{}),Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{path:"/",element:Object(l.jsx)(_,{})}),Object(l.jsx)(x.a,{path:"/website-project",element:Object(l.jsx)(_,{})}),Object(l.jsx)(x.a,{path:"/website-project/cennik",element:Object(l.jsx)(G,{})}),Object(l.jsx)(x.a,{path:"/website-project/products",element:Object(l.jsx)(v,{})}),Object(l.jsx)(x.a,{path:"/website-project/sign-up",element:Object(l.jsx)(R,{})})]}),Object(l.jsx)(q,{})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,106)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(A,{})})}),document.getElementById("root")),I()},31:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.4e6697aa.chunk.js.map