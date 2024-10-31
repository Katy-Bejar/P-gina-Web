(function(){"use strict";var e={3498:function(e,a,t){var n=t(3751),o=t(641);const r={id:"app",class:"app-container"},i={class:"main-content"};function s(e,a,t,n,s,c){const l=(0,o.g2)("AppNavbar"),u=(0,o.g2)("router-view"),d=(0,o.g2)("AppFooter");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(l),(0,o.Lk)("main",i,[(0,o.bF)(u)]),(0,o.bF)(d)])}const c={class:"navbar"},l={class:"section-links"},u={key:0},d={key:1},p={class:"project-switch"};function m(e,a,t,n,r,i){return(0,o.uX)(),(0,o.CE)("nav",c,[(0,o.Lk)("div",l,["dragon"===i.currentProject?((0,o.uX)(),(0,o.CE)("ul",u,a[2]||(a[2]=[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#about"},"Acerca de")],-1),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#videos"},"Videos")],-1),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#process"},"Proceso")],-1),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#team"},"Nuestro Equipo")],-1)]))):"math"===i.currentProject?((0,o.uX)(),(0,o.CE)("ul",d,a[3]||(a[3]=[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#overview"},"Visión General")],-1),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#demos"},"Demostraciones")],-1),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#learning-process"},"Proceso de Aprendizaje")],-1),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#team"},"Nuestro Equipo")],-1)]))):(0,o.Q3)("",!0)]),(0,o.Lk)("div",p,[(0,o.Lk)("button",{onClick:a[0]||(a[0]=(...e)=>i.goToDragonAttack&&i.goToDragonAttack(...e))},"DragonAttack"),(0,o.Lk)("button",{onClick:a[1]||(a[1]=(...e)=>i.goToMathAdventure&&i.goToMathAdventure(...e))},"MathAdventure")])])}t(4114);var g={name:"AppNavbar",computed:{currentProject(){return this.$route.name&&this.$route.name.includes("Dragon")?"dragon":"math"}},methods:{goToDragonAttack(){this.$router.push("/dragon-attack")},goToMathAdventure(){this.$router.push("/math-adventure")}}},v=t(6262);const k=(0,v.A)(g,[["render",m],["__scopeId","data-v-02d0c556"]]);var h=k;const b={class:"footer"};function f(e,a,t,n,r,i){return(0,o.uX)(),(0,o.CE)("footer",b,a[0]||(a[0]=[(0,o.Lk)("p",null,"DragonAttack fue creado para Ciencia de la Computación, Universidad Nacional de San Agustín de Arequipa, Octubre 2024",-1)]))}var L={name:"AppFooter"};const I=(0,v.A)(L,[["render",f],["__scopeId","data-v-f3ce8f78"]]);var A=I,C={name:"App",components:{AppNavbar:h,AppFooter:A}};const y=(0,v.A)(C,[["render",s],["__scopeId","data-v-17362126"]]);var E=y,S=t(5220);const w={id:"about"},R={id:"videos"},z={id:"process"},V={id:"team"};function D(e,a,t,n,r,i){const s=(0,o.g2)("AboutDragon"),c=(0,o.g2)("VideosSection"),l=(0,o.g2)("ProcessSection"),u=(0,o.g2)("TeamSection");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("section",w,[(0,o.bF)(s)]),(0,o.Lk)("section",R,[(0,o.bF)(c)]),(0,o.Lk)("section",z,[(0,o.bF)(l)]),(0,o.Lk)("section",V,[(0,o.bF)(u)])])}var W=t.p+"img/portada_dragon.5fe5cf94.png";const x={class:"about-dragon"},G={class:"about-content"};function N(e,a,t,n,r,i){return(0,o.uX)(),(0,o.CE)("section",x,[(0,o.Lk)("div",G,[a[1]||(a[1]=(0,o.Lk)("h1",null,"DragonAttack",-1)),a[2]||(a[2]=(0,o.Lk)("h2",null,"Tu Aventura Épica en un Mundo Hostil",-1)),a[3]||(a[3]=(0,o.Lk)("p",null," Sobrevive en un mundo devastado, rodeado de criaturas peligrosas y enemigos ancestrales. Enfréntate a dragones y bestias oscuras mientras utilizas poderes mágicos y armas legendarias para restaurar la paz en el reino. ",-1)),a[4]||(a[4]=(0,o.Lk)("p",null," Eres un guerrero legendario enviado a una tierra asolada por invasores aéreos y terrestres. A medida que avanzas, tus enemigos se vuelven más poderosos, revelando que están bajo el dominio de una antigua fuerza maligna. Sólo tú puedes salvar al reino de la aniquilación total. ",-1)),a[5]||(a[5]=(0,o.Lk)("p",null," Derrota a todos los enemigos y supera los desafíos para obtener la victoria, pero recuerda, perderás si tu barra de vida llega a cero. ",-1)),(0,o.Lk)("button",{class:"learn-more",onClick:a[0]||(a[0]=(...e)=>i.goToVideos&&i.goToVideos(...e))},"Explorar Más")]),a[6]||(a[6]=(0,o.Lk)("div",{class:"about-image"},[(0,o.Lk)("img",{src:W,alt:"Dragon Mascot"})],-1))])}var P={name:"AboutDragon",methods:{goToVideos(){this.$router.push("/videos-section")}}};const Z=(0,v.A)(P,[["render",N],["__scopeId","data-v-1e1b9e79"]]);var Q=Z,M=t(33);const B={class:"videos-section",id:"videos"},X={class:"video-thumbnails"},j=["src","alt"],O=["onClick"];function U(e,a,t,n,r,i){return(0,o.uX)(),(0,o.CE)("section",B,[a[0]||(a[0]=(0,o.Lk)("h2",null,"Explora el Gameplay Épico de DragonAttack",-1)),a[1]||(a[1]=(0,o.Lk)("p",null,"Sumérgete en las batallas y la acción que te esperan en el reino de DragonAttack.",-1)),a[2]||(a[2]=(0,o.Lk)("div",{class:"video-container"},[(0,o.Lk)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0gLODoXanog",title:"DragonAttack Gameplay",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1)),(0,o.Lk)("div",X,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.gameplayVideos,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{class:"thumbnail",key:a},[(0,o.Lk)("img",{src:e.thumbnail,alt:e.title},null,8,j),(0,o.Lk)("h3",null,(0,M.v_)(e.title),1),(0,o.Lk)("button",{onClick:a=>i.openVideo(e.url)},"Ver Video",8,O)])))),128))])])}var T={name:"VideosSection",data(){return{gameplayVideos:[{title:"Batalla en el Bosque Oscuro",url:"https://www.youtube.com/watch?v=cF3CmJHiMvY",thumbnail:t(4182)},{title:"Lucha en el Valle del Fuego",url:"https://www.youtube.com/watch?v=IMklgHkggrQ",thumbnail:t(2630)},{title:"Combate en la Ciudadela Sombría",url:"https://www.youtube.com/watch?v=5fIAPcVdZO8",thumbnail:t(6702)}]}},methods:{openVideo(e){window.open(e,"_blank")}}};const J=(0,v.A)(T,[["render",U],["__scopeId","data-v-d99d4a7c"]]);var Y=J;const K={class:"process-section",id:"process"},F={class:"carousel"},q={class:"carousel-track-container"},H=["src","alt"],_={class:"carousel-indicators"},$=["onClick"];function ee(e,a,t,n,r,i){return(0,o.uX)(),(0,o.CE)("section",K,[a[2]||(a[2]=(0,o.Lk)("h2",null,"Proceso de Desarrollo del Juego",-1)),a[3]||(a[3]=(0,o.Lk)("p",null,"Explora los pasos y la evolución creativa detrás de DragonAttack.",-1)),(0,o.Lk)("div",F,[(0,o.Lk)("button",{onClick:a[0]||(a[0]=(...e)=>i.prevSlide&&i.prevSlide(...e)),class:"carousel-nav left"},"❮"),(0,o.Lk)("div",q,[(0,o.Lk)("ul",{class:"carousel-track",style:(0,M.Tr)({transform:`translateX(-${100*r.currentSlide}%)`})},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.processSteps,((e,a)=>((0,o.uX)(),(0,o.CE)("li",{key:a,class:"carousel-slide"},[(0,o.Lk)("h3",null,(0,M.v_)(e.title),1),(0,o.Lk)("img",{src:e.image,alt:e.title,class:"step-image"},null,8,H),(0,o.Lk)("p",null,(0,M.v_)(e.description),1)])))),128))],4)]),(0,o.Lk)("button",{onClick:a[1]||(a[1]=(...e)=>i.nextSlide&&i.nextSlide(...e)),class:"carousel-nav right"},"❯")]),(0,o.Lk)("div",_,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.processSteps,((e,a)=>((0,o.uX)(),(0,o.CE)("span",{key:a,class:(0,M.C4)({active:a===r.currentSlide}),onClick:e=>i.goToSlide(a)},null,10,$)))),128))])])}var ae={name:"ProcessSection",data(){return{currentSlide:0,processSteps:[{title:"Concepto Inicial",description:"En esta etapa inicial, conceptualizamos DragonAttack. Creamos un menú donde los jugadores pueden elegir el tipo de escudo que usarán en el juego, anticipando la estrategia que mejor se adapte a los desafíos que enfrentarán.",image:t(5546)},{title:"Diseño de Personajes",description:"Desarrollamos un menú de selección de armas, que permite a los jugadores personalizar sus estrategias. Los jugadores deben elegir cuidadosamente su armamento para sobrevivir en un mundo dominado por dragones y criaturas hostiles.",image:t(8082)},{title:"Escenarios y Niveles",description:"Diseñamos los niveles y escenarios del juego. Aquí, los dragones y otras criaturas atacan en plena batalla, brindando una experiencia inmersiva de combate en primera persona donde cada decisión cuenta.",image:t(8184)},{title:"Desarrollo de Jugabilidad",description:"Implementamos las mecánicas de combate y exploración. Se añadió un sistema de combate en tiempo real y escenarios detallados que enriquecen la experiencia de juego, manteniendo a los jugadores en suspenso.",image:t(3153)},{title:"Pruebas y Optimización",description:"Realizamos pruebas de jugabilidad y optimizamos el rendimiento del juego para ofrecer una experiencia fluida y sin interrupciones. Esta fase es crucial para detectar errores y mejorar la experiencia de usuario.",image:t(3153)}]}},methods:{nextSlide(){this.currentSlide<this.processSteps.length-1?this.currentSlide++:this.currentSlide=0},prevSlide(){this.currentSlide>0?this.currentSlide--:this.currentSlide=this.processSteps.length-1},goToSlide(e){this.currentSlide=e}}};const te=(0,v.A)(ae,[["render",ee],["__scopeId","data-v-39b307c2"]]);var ne=te;const oe={class:"team-section",id:"team"},re={class:"team-members"},ie={class:"member-photo"},se=["src","alt"],ce={class:"role"};function le(e,a,t,n,r,i){return(0,o.uX)(),(0,o.CE)("section",oe,[a[0]||(a[0]=(0,o.Lk)("h2",null,"Conoce al Equipo de DragonAttack",-1)),a[1]||(a[1]=(0,o.Lk)("p",null,"Descubre a los guerreros, estrategas y místicos detrás de la aventura.",-1)),(0,o.Lk)("div",re,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.teamMembers,((e,a)=>((0,o.uX)(),(0,o.CE)("div",{class:"team-member",key:a},[(0,o.Lk)("div",ie,[(0,o.Lk)("img",{src:e.photo,alt:e.name},null,8,se)]),(0,o.Lk)("h3",null,(0,M.v_)(e.name),1),(0,o.Lk)("p",ce,(0,M.v_)(e.role),1)])))),128))])])}var ue={name:"TeamSection",data(){return{teamMembers:[{name:"Gabriel P.",role:"Desarrollador",photo:t(9068)},{name:"Edson B.",role:"Diseñador",photo:t(8976)},{name:"Jorge T.",role:"Desarrollador",photo:t(8976)},{name:"Katherine B.",role:"Diseñadora",photo:t(9046)}]}}};const de=(0,v.A)(ue,[["render",le],["__scopeId","data-v-23c3e526"]]);var pe=de,me={name:"DragonAttackHome",components:{AboutDragon:Q,VideosSection:Y,ProcessSection:ne,TeamSection:pe}};const ge=(0,v.A)(me,[["render",D],["__scopeId","data-v-6101e76b"]]);var ve=ge;const ke={class:"math-adventure-home"},he={id:"overview"},be={id:"demos"},fe={id:"learning-process"},Le={id:"team"};function Ie(e,a,t,n,r,i){const s=(0,o.g2)("OverviewSection"),c=(0,o.g2)("DemosSection"),l=(0,o.g2)("LearningProcessSection"),u=(0,o.g2)("TeamSection");return(0,o.uX)(),(0,o.CE)("div",ke,[(0,o.Lk)("section",he,[(0,o.bF)(s)]),(0,o.Lk)("section",be,[(0,o.bF)(c)]),(0,o.Lk)("section",fe,[(0,o.bF)(l)]),(0,o.Lk)("section",Le,[(0,o.bF)(u)])])}var Ae=t.p+"img/math_adventure.eb02428d.png";const Ce={class:"math-overview"},ye={class:"overview-content"};function Ee(e,a,t,n,r,i){return(0,o.uX)(),(0,o.CE)("section",Ce,[(0,o.Lk)("div",ye,[a[1]||(a[1]=(0,o.Lk)("h1",null,"MathAdventure",-1)),a[2]||(a[2]=(0,o.Lk)("h2",null,"¡Aprende, Juega y Mejora Tus Habilidades!",-1)),a[3]||(a[3]=(0,o.Lk)("p",null," MathAdventure es una aventura educativa que mezcla desafíos matemáticos con acción física. Los jugadores esquivan obstáculos y resuelven problemas matemáticos en un entorno interactivo, ¡donde cada movimiento cuenta! Desarrolla rapidez mental, mejora tus reflejos y fortalece el equilibrio mientras te diviertes. ",-1)),a[4]||(a[4]=(0,o.Lk)("p",null," Este juego desafía a los niños a medida que avanzan, aumentando la dificultad de los problemas y obstáculos. Con recompensas y retroalimentación instantánea, MathAdventure mantiene la motivación y compromiso, ofreciendo una experiencia lúdica y educativa ideal para el desarrollo integral. ",-1)),(0,o.Lk)("button",{class:"explore-more",onClick:a[0]||(a[0]=(...e)=>i.goToGameFeatures&&i.goToGameFeatures(...e))},"Explorar Más")]),a[5]||(a[5]=(0,o.Lk)("div",{class:"overview-image"},[(0,o.Lk)("img",{src:Ae,alt:"Math World VR Image"})],-1))])}var Se={name:"OverviewSection",methods:{goToGameFeatures(){this.$router.push("/videos")}}};const we=(0,v.A)(Se,[["render",Ee],["__scopeId","data-v-080bbff2"]]);var Re=we;function ze(e,a,t,n,r,i){return(0,o.uX)(),(0,o.CE)("section",null,a[0]||(a[0]=[(0,o.Lk)("h2",null,"MathAdventure Demos",-1),(0,o.Lk)("p",null,"Explore las demostraciones interactivas de MathAdventure.",-1)]))}var Ve={name:"DemosSection"};const De=(0,v.A)(Ve,[["render",ze],["__scopeId","data-v-0ff1f58a"]]);var We=De;function xe(e,a,t,n,r,i){return(0,o.uX)(),(0,o.CE)("section",null,a[0]||(a[0]=[(0,o.Lk)("h2",null,"Learning Process in MathAdventure",-1),(0,o.Lk)("p",null,"Conoce el proceso de aprendizaje de MathAdventure.",-1)]))}var Ge={name:"LearningProcessSection"};const Ne=(0,v.A)(Ge,[["render",xe],["__scopeId","data-v-e66501c6"]]);var Pe=Ne,Ze={name:"MathAdventureHome",components:{OverviewSection:Re,DemosSection:We,LearningProcessSection:Pe,TeamSection:pe}};const Qe=(0,v.A)(Ze,[["render",Ie],["__scopeId","data-v-385a5495"]]);var Me=Qe;const Be=[{path:"/",redirect:"/about-dragon"},{path:"/dragon-attack",name:"DragonAttackHome",component:ve},{path:"/math-adventure",name:"MathAdventureHome",component:Me},{path:"/about-dragon",name:"AboutDragon",component:Q},{path:"/videos-section",name:"VideosSection",component:Y}],Xe=(0,S.aE)({history:(0,S.LA)(),routes:Be});var je=Xe;const Oe=(0,n.Ef)(E);Oe.use(je),Oe.mount("#app")},9046:function(e,a,t){e.exports=t.p+"img/Katy.242639b1.jpeg"},4182:function(e,a,t){e.exports=t.p+"img/bosque_thumbnail.750a9851.jpg"},6702:function(e,a,t){e.exports=t.p+"img/ciudadela_thumbnail.18a214c0.avif"},8184:function(e,a,t){e.exports=t.p+"img/dragones_atacan.3db9e1a3.png"},8976:function(e,a,t){e.exports=t.p+"img/edson.b7f249eb.jpeg"},8082:function(e,a,t){e.exports=t.p+"img/eleccion_arma.123369f7.png"},5546:function(e,a,t){e.exports=t.p+"img/eleccion_escudo.9d41a426.png"},9068:function(e,a,t){e.exports=t.p+"img/gabriel.d25bdaa8.jpg"},3153:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},2630:function(e,a,t){e.exports=t.p+"img/valle_thumbnail.928ff231.avif"}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var r=a[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var l=o();void 0!==l&&(a=l)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/Pagina-Web/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,r,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var u=c(t)}for(a&&a(n);l<i.length;l++)r=i[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},n=self["webpackChunkdragon_attack"]=self["webpackChunkdragon_attack"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(3498)}));n=t.O(n)})();
//# sourceMappingURL=app.a321fdc8.js.map