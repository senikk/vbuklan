(function(t){function e(e){for(var r,s,i=e[0],o=e[1],d=e[2],v=0,c=[];v<i.length;v++)s=i[v],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&c.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(c.length)c.shift()();return l.push.apply(l,d||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],r=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(r=!1)}r&&(l.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},l=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("8c4f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},s=[],i={},o=i,d=a("2877"),u=Object(d["a"])(o,l,s,!1,null,null,null),v=u.exports,c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("VBUK LAN")]),a("span",{staticClass:"font-weight-light"},[t._v("17. april 2021")])]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"/",target:"_blank"}},[a("span",{staticClass:"mr-2"},[t._v("OM VBUK")])])],1),a("v-content",[a("v-container",{attrs:{"lighten-5":"","grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md5:""}},[a("Post",{attrs:{title:"Velkommen til LAN-party i Turbinen"}},[a("p",[t._v("\n              Vaksdal barne- og undomskorps arrangerer LAN-party i Turbinen på Dale i Vaksdal kommune / Vestland fylke lørdag 17. april 2021. Turbinen befinner seg på Dale i Vaksdal kommune i Vestland fylke.\n              Arrangementet vil foregå i 15 timer fra kl 08:00 om morgenen til kl 23:00 om kvelden. Arrangementet er rusfritt og åpent for barn og unge under 20 år bosatt i Vaksdal kommune, alle andre kan delta via vår Discord server hvor man kontakter vår billettluke bot med referanse på billett man har kjøpt.\n            ")]),a("p",[a("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.515088122249!2d5.818765!3d60.5833178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80f4f823c1fde819!2sTurbinen+Fleirbrukshall!5e0!3m2!1sno!2sno!4v1555135944247!5m2!1sno!2sno",width:"100%",height:"450",frameborder:"0",allowfullscreen:""}})])]),a("Post",{attrs:{title:"Live stream"}},[t._v("\n              Live stream foregår på "),a("a",{attrs:{href:"https://tv.vbuk.no"}},[t._v("tv.vbuk.no")]),a("v-data-table",{attrs:{headers:t.calendarh,items:t.live,"hide-default-footer":""},scopedSlots:t._u([{key:"item.title",fn:function(e){var r=e.item;return[r.website?a("a",{attrs:{target:"_blank",href:r.website}},[t._v("\n                    "+t._s(r.title)+"\n                  ")]):t._e(),r.website?t._e():a("span",[t._v(t._s(r.title))])]}}])})],1),a("Post",{attrs:{title:"Hva skjer?"}},[a("v-data-table",{attrs:{headers:t.calendarh,items:t.calendar,"hide-default-footer":""},scopedSlots:t._u([{key:"item.title",fn:function(e){var r=e.item;return[r.website?a("a",{attrs:{target:"_blank",href:r.website}},[t._v("\n                  "+t._s(r.title)+"\n                ")]):t._e(),r.website?t._e():a("span",[t._v(t._s(r.title))])]}}])})],1)],1),a("v-flex",{attrs:{x12:"",sm6:"",md4:""}},[a("Post",{attrs:{title:"Billetter"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[t._v("\n                Det selges billetter til mørk sone i sal og til Discord om du ønsker å delta digitalt. Fysisk billett blir omgjort til Discord billet om det skulle bli nye restriksjoner grunnet korona."),a("br"),a("br"),a("a",{staticStyle:{"font-size":"14pt"},attrs:{target:"_blank",href:"https://vbuk.ticketco.events/no/nb/e/vbuklan2021/lan.vbuk.no"}},[t._v("Klikk her for å kjøpe billett")])])],1)],1),a("Post",{attrs:{title:"VBUK LAN 2021"}},[t._v("\n            Hver deltager får hvert sitt store bord slik at man holder god avstand. Bestilling av kioskvarer med levering direkte til bord. Hvis det mot formodning ikke skulle gå an å arrangere VBUK LAN fysisk i 2021 heller så \n            vil man fortsatt kunne logge seg på hjemmefra på "),a("a",{attrs:{href:"https://chat.vbuk.no"}},[t._v("chat.vbuk.no")]),t._v(" hvor man får tilgang til lukket innhold ved hjelp av billettreferansen. Så arrangement blir det uansett i år.\n          ")]),a("Post",{attrs:{title:"Hva er et LAN-party?"}},[a("p",[t._v("\n              Et LAN-party eller på godt norsk datatreff er et samlingssted hvor man tar med seg sin egen datamaskin, konsoll som t.d. PlayStation eller XBOX og kobler seg til et lokalt nettverk for å spille eller gjøre andre ting sammen.\n              Om man ikke har egen PC/konsoll kan man også bare kjøpe besøksbillett, koble seg til det trådløse nettet med mobil/nettbrett og være med andre som har med seg PC/konsoll.\n            ")]),a("b",[t._v("Huskeliste:")]),a("ul",[a("li",[t._v("PC/konsoll")]),a("li",[t._v("Skjerm")]),a("li",[t._v("Nettverkskabel 10m+")]),a("li",[t._v("Strømforgrener om man har behov for flere enn en stikkontakt t.d. PC/konsoll + skjerm")])])]),a("Post",{attrs:{title:"Regler"}},[a("ul",[a("li",[t._v("Fysiske billetter kun tilgjengelig for barn og unge under 20 år bosatt i Vaksdal kommune")]),a("li",[t._v("Alle inne i hallen må ha adgangsbånd")]),a("li",[t._v("Rusfritt arrangement")]),a("li",[t._v("Du er selv ansvarlig for eget utstyr")]),a("li",[t._v("Fremvisning av upassende innhold er ikke tillatt")]),a("li",[t._v("Spillene du får spille hjemme gjelder også her")])])])],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("Newsletter",{attrs:{form:"2582612:q4l4t5"}}),a("Contact"),a("Ad",{attrs:{src:"vossk.png"}}),a("Ad",{attrs:{src:"multicom.png"}}),a("Ad",{attrs:{src:"vossmusikk.png"}}),a("Ad",{attrs:{src:"klatreparken.png"}}),a("Ad",{attrs:{src:"modalen-kommune.png"}})],1)],1)],1)],1)],1)},m=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-4 mr-2 mx-auto"},[a("v-card-text",[a("p",{staticClass:"display-1 text--primary"},[t._v("\n          "+t._s(t.title)+"\n      ")]),t._t("default")],2)],1)},b=[],f={data:function(){return{}},props:{title:String}},k=f,g=a("6544"),h=a.n(g),_=a("b0af"),y=a("99d9"),V=Object(d["a"])(k,p,b,!1,null,null,null),x=V.exports;h()(V,{VCard:_["a"],VCardText:y["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Post",{attrs:{title:"Kontakt"}},[a("v-list",{attrs:{"two-line":""}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-chat")])],1),a("v-list-item-content",[a("v-list-item-title",[a("a",{attrs:{href:"https://chat.vbuk.no"}},[t._v("chat.vbuk.no")])]),a("v-list-item-subtitle",[t._v("Discord")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-email")])],1),a("v-list-item-content",[a("v-list-item-title",[a("a",{attrs:{href:"mailto:post@vbuk.no"}},[t._v("post@vbuk.no")])]),a("v-list-item-subtitle",[t._v("E-post")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-phone")])],1),a("v-list-item-content",[a("v-list-item-title",[a("a",{attrs:{href:"tel:91334697"}},[t._v("91334697")])]),a("v-list-item-subtitle",[t._v("Telefon")])],1)],1)],1)],1)},j=[],L={data:function(){return{}},components:{Post:x}},T=L,C=a("132d"),A=a("8860"),P=a("da13"),S=a("5d23"),O=a("34c3"),D=Object(d["a"])(T,w,j,!1,null,null,null),B=D.exports;h()(D,{VIcon:C["a"],VList:A["a"],VListItem:P["a"],VListItemContent:S["a"],VListItemIcon:O["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-4 mr-2 mx-auto"},[a("div",{staticClass:"ml-form-embed",attrs:{"data-account":"1060752:s8p2w2u4q5","data-form":t.form}})])},K=[],E={data:function(){return{}},props:{form:String}},I=E,U=Object(d["a"])(I,N,K,!1,null,null,null),$=U.exports;h()(U,{VCard:_["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-4 mr-2 mx-auto"},[a("v-card-text",[a("v-img",{style:t.adimage,attrs:{src:t.src}}),t._t("default")],2)],1)},F=[],M={data:function(){return{adimage:{"max-height":"170px"}}},props:{src:String}},R=M,q=a("adda"),J=Object(d["a"])(R,H,F,!1,null,null,null),W=J.exports;h()(J,{VCard:_["a"],VCardText:y["a"],VImg:q["a"]});var X={name:"LAN",components:{Post:x,Contact:B,Newsletter:$,Ad:W},data:function(){return{calendarh:[{text:"Tittel",value:"title",align:"left",sortable:!1},{text:"Dag",value:"day"},{text:"Tid",value:"time"},{text:"Sted",value:"location"}],live:[{title:"Stream 1 - Terje Pedersen og Emil Walseth (emwaAdventure)",location:"Twitch",day:"Lørdag 17.4.2021",time:"09:00-11:00",website:"https://tv.vbuk.no"},{title:"Stream 2 - Terje Pedersen",location:"Twitch",day:"Lørdag 17.4.2021",time:"16:00-18:00",website:"https://tv.vbuk.no"},{title:"Stream 3 - Terje Pedersen og Emil Walseth (emwaAdventure)",location:"Twitch",day:"Lørdag 17.4.2021",time:"21:00-23:00",website:"https://tv.vbuk.no"},{title:"Premieutdeling",location:"Twitch",day:"Lørdag 17.4.2021",time:"22:00-",website:"https://tv.vbuk.no"}],calendar:[{title:"VBUK LAN 2021",location:"Turbinen/Discord",day:"Lørdag 17.4.2021",time:"08:00-23:00",website:"https://chat.vbuk.no"},{title:"Minecraft bygg din premie konkurranse",location:"mc.vbuk.no",day:"Lørdag 17.4.2021",time:"08:00-21:00",website:"https://chat.vbuk.no"},{title:"Videodubbing konkurranse",location:"Discord",day:"Lørdag 17.4.2021",time:"08:00-21:00",website:"https://chat.vbuk.no"},{title:"Minecraft Hungergame konkurranse",location:"mc.vbuk.no",day:"Lørdag 17.4.2021",time:"10:00-",website:"https://chat.vbuk.no"},{title:"Among Us konkurranse",location:"Discord",day:"Lørdag 17.4.2021",time:"13:00-",website:"https://chat.vbuk.no"},{title:"Rocket League konkurrane 2 per lag",location:"Discord",day:"Lørdag 17.4.2021",time:"17:00-",website:"https://chat.vbuk.no"},{title:"Premieutdeling",location:"Twitch",day:"Lørdag 17.4.2021",time:"22:00-",website:"https://tv.vbuk.no"}]}}},z=X,G=a("7496"),Q=a("40dc"),Y=a("8336"),Z=a("a523"),tt=a("a75b"),et=a("8fea"),at=a("0e8f"),rt=a("a722"),nt=a("2fa4"),lt=a("2a7f"),st=Object(d["a"])(z,c,m,!1,null,null,null),it=st.exports;h()(st,{VApp:G["a"],VAppBar:Q["a"],VBtn:Y["a"],VContainer:Z["a"],VContent:tt["a"],VDataTable:et["a"],VFlex:at["a"],VLayout:rt["a"],VListItem:P["a"],VListItemContent:S["a"],VSpacer:nt["a"],VToolbarTitle:lt["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",{staticClass:"font-weight-light"},[t._v("Vaksdal barne- og ungdomskorps")])]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"/#/lan",target:"_blank"}},[a("span",{staticClass:"mr-2"},[t._v("VBUK LAN")])])],1),a("v-content",[a("v-container",{attrs:{"lighten-5":"","grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs16:"",sm6:"",md8:""}},[a("Post",{attrs:{title:"Lyst til å spille i korps?"}},[a("p",[t._v("               \n              Vaksdal barne- og undomskorps holder til i Vaksdal kommune, Vestland fylke og har sin hovedbase i nye Dale skule. \n              Vi rekrutterer fra alle skolene i kommunen. Korpset har janitsjar besetning og dirigeres av trombonist og kulturskolelærer Ole Kristian Bonden.\n              Det er bare til å slå på tråden til leder Terje Pedersen, tlf 913 34 697.\n\n              "),a("v-data-table",{attrs:{headers:t.rehearsalh,items:t.rehearsals,"hide-default-footer":""}})],1)]),a("Post",{attrs:{title:"Hva skjer?"}},[a("v-data-table",{attrs:{headers:t.calendarh,items:t.calendar,"hide-default-footer":""},scopedSlots:t._u([{key:"item.title",fn:function(e){var r=e.item;return[r.website?a("a",{attrs:{target:"_blank",href:r.website}},[t._v("\n                    "+t._s(r.title)+"\n                  ")]):t._e(),r.website?t._e():a("span",[t._v(t._s(r.title))])]}}])})],1)],1),a("v-flex",{attrs:{xs10:"",sm6:"",md3:""}},[a("Newsletter",{attrs:{form:"2582585:r1s2y0"}}),a("img",{attrs:{src:"note-logo.jpg",width:"97%"}}),a("Contact")],1)],1)],1)],1)],1)},dt=[],ut={name:"VBUK",components:{Post:x,Contact:B,Newsletter:$},data:function(){return{rehearsalh:[{text:"Korps",value:"title",align:"left",sortable:!1},{text:"Dag",value:"day"},{text:"Tid",value:"time"},{text:"Sted",value:"location"}],rehearsals:[{title:"Aspirantkorps",location:"Dale skule",day:"Onsdager (fom 30.9 2020)",time:"16:15-17:15"},{title:"Hovedkorps",location:"Dale skule",day:"Onsdager",time:"17:30-19:30"}],calendarh:[{text:"Tittel",value:"title",align:"left",sortable:!1},{text:"Dag",value:"day"},{text:"Tid",value:"time"},{text:"Sted",value:"location"}],calendar:[{title:"VBUK LAN 2021",location:"Discord/Twitch/Turbinen",day:"Lørdag 17.4.2021",time:"08:00-23:00",website:"https://chat.vbuk.no"}]}}},vt=ut,ct=Object(d["a"])(vt,ot,dt,!1,null,null,null),mt=ct.exports;h()(ct,{VApp:G["a"],VAppBar:Q["a"],VBtn:Y["a"],VContainer:Z["a"],VContent:tt["a"],VDataTable:et["a"],VFlex:at["a"],VLayout:rt["a"],VSpacer:nt["a"],VToolbarTitle:lt["a"]});var pt=a("f309");a("5363");r["a"].use(pt["a"]);var bt=new pt["a"]({icons:{iconfont:"mdi"}}),ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("404")])]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"https://vbuk.no",target:"_blank"}},[a("span",{staticClass:"mr-2"},[t._v("vbuk.no")])])],1),a("v-content",[a("v-container",{attrs:{"lighten-5":"","grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md5:""}},[t._v("\n          Denne siden finnes ikke ta kontakt med "),a("a",{attrs:{href:"mailto:post@vbuk.no"}},[t._v("post@vbuk.no")])])],1)],1)],1)],1)},kt=[],gt={},ht=Object(d["a"])(gt,ft,kt,!1,null,null,null),_t=ht.exports;h()(ht,{VApp:G["a"],VAppBar:Q["a"],VBtn:Y["a"],VContainer:Z["a"],VContent:tt["a"],VFlex:at["a"],VLayout:rt["a"],VSpacer:nt["a"],VToolbarTitle:lt["a"]}),r["a"].config.productionTip=!1,r["a"].use(n["a"]);var yt=[{path:"/",component:mt},{path:"/lan",component:it},{path:"*",component:_t}],Vt=new n["a"]({base:"/",routes:yt});new r["a"]({vuetify:bt,router:Vt,render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.56743ae1.js.map