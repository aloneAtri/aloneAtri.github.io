(function(){"use strict";var t={785:function(t,s,i){var o=i(144),r=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("MyHead")],1)},a=[],e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"center"},[s("div",{staticClass:"bg1",staticStyle:{height:"1500px"},style:{backgroundPositionY:this.scroH/20-200+"px"},attrs:{id:"first-bg"}},[s("div",{staticClass:"box1"},[s("TheNav"),s("TheFirstBox")],1),s("div",{attrs:{id:"info1"}}),s("transition",{attrs:{name:"showTop"}},[t.scroH>100?s("div",{staticClass:"info",attrs:{id:"info"}},[s("TheInfo")],1):t._e()]),s("TheStory",{attrs:{scroH:t.scroH}})],1),s("div",{staticClass:"bg2",style:{backgroundPositionY:this.scroH/20-350+"px"},attrs:{id:"transit"}},[s("transition",{attrs:{name:"showLeftBlur"}},[t.scroH>900?s("img",{staticStyle:{position:"absolute",top:"80px",right:"0px"},attrs:{src:i(415),alt:""}}):t._e()])],1),s("div",{staticClass:"bg1",style:{backgroundPositionY:this.scroH/20-200+"px"},attrs:{id:"atri-bg"}},[s("div",{attrs:{id:"character"}},[s("transition",{attrs:{name:"showBottom"}},[t.scroH>1200?s("img",{attrs:{src:i(408),alt:""}}):t._e()])],1)]),s("TheCharacter",{attrs:{scroH:t.scroH}}),s("div",{staticClass:"bg1",staticStyle:{height:"800px"},style:{backgroundPositionY:this.scroH/20-200+"px"}},[s("transition",{attrs:{name:"fadeIn"}},[t.scroH>2400?s("div",[s("TheSecondBg")],1):t._e()])],1),s("div",{staticClass:"bg2",attrs:{id:"blueSky"}}),s("div",{staticClass:"bg1",style:{backgroundPositionY:this.scroH/20-200+"px"}}),t._m(0)],1)},n=[function(){var t=this,s=t._self._c;return s("footer",[s("div",{staticClass:"footer"})])}],l=function(){var t=this,s=t._self._c;return s("div",[s("iframe",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"music",frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"330",height:"86",src:t.music}}),s("div",{staticClass:"nav"},[s("ul",{staticClass:"nav-1"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),s("li",[s("a",{attrs:{href:"#"},on:{click:function(s){return t.closeMusic()}}},[s("div",{style:t.styleMusic,attrs:{id:"musicT"}})])])])])])},c=[function(){var t=this,s=t._self._c;return s("li",[s("a",{attrs:{href:"index.html"}},[t._v("TOP")])])},function(){var t=this,s=t._self._c;return s("li",[s("a",{attrs:{href:"#info1"}},[t._v("STORY")])])},function(){var t=this,s=t._self._c;return s("li",[s("a",{attrs:{href:"#transit"}},[t._v("CHARACTER")])])},function(){var t=this,s=t._self._c;return s("li",[s("a",{attrs:{href:"#"}},[t._v("GRAPHIC")])])},function(){var t=this,s=t._self._c;return s("li",[s("a",{attrs:{href:"#"}},[t._v("SPECIAL")])])},function(){var t=this,s=t._self._c;return s("li",[s("a",{attrs:{href:"#"}},[t._v("PRODUCT")])])}],p={name:"TheNav",data(){return{music:"https://music.163.com/outchain/player?type=2&id=1367158075&auto=1&height=66",styleMusic:{backgroundPositionY:"-32px"}}},methods:{closeMusic(){""!=this.music?(this.music="",this.styleMusic={backgroundPositionY:"0px"}):(this.music="https://music.163.com/outchain/player?type=2&id=1367158075&auto=1&height=66",this.styleMusic={backgroundPositionY:"-32px"})}}},h=p,u=i(1),d=(0,u.Z)(h,l,c,!1,null,null,null),f=d.exports,g=function(){var t=this;t._self._c;return t._m(0)},A=[function(){var t=this,s=t._self._c;return s("div",[s("img",{attrs:{src:i(599),alt:""}}),s("dl",{staticClass:"infomation",staticStyle:{"font-family":"'楷体'","font-size":"1.5rem",height:"150px",overflow:"scroll"}},[s("dt",[s("strong",[t._v("20221012")])]),s("dd",[t._v("使用Vue2-cil重新部署网站,极大加快网页渲染速度。")]),s("dt",[s("strong",[t._v("20221001")])]),s("dd",[t._v("用Vue2技术替代jquery重写了网页,优化了加载速度。")]),s("dt",[s("strong",[t._v("20220930")])]),s("dd",[t._v("增加和补充了一些图片文字和动画,使页面更加美化。")]),s("dt",[s("strong",[t._v("20220923")])]),s("dd",[t._v("博客界面开始搭建。")]),s("dt",[s("strong",[t._v("20220923")])]),s("dd",[t._v(" 本网站的初衷是用来分享一些自己的作品,记录一下自己的学习记录写写博客。 ")]),s("dt",[s("strong",[t._v("20220923")])]),s("dd",[t._v("随着时间的推移,希望能加入更多的模块,更好的完善网站。")])])])}],x={},m=x,v=(0,u.Z)(m,g,A,!1,null,null,null),w=v.exports,b=function(){var t=this,s=t._self._c;return s("div",{staticClass:"content1",class:t.imgAnimation.showTop},[s("div",{staticClass:"content1-left"},[s("img",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{id:"pic1",src:i(626),alt:""}}),s("ul",{staticClass:"content1-ul"})])])},y=[],_={name:"TheFirstBox",data(){return{imgAnimation:{showLeft:{showLeft:!0},showLeftSlow:{showLeftSlow:!0},fadeIn:{fadeIn:!0},fadeInSlow:{fadeInSlow:!0},showRight:{showRight:!0},showBottom:{showBottom:!0},showBottomBlur:{showBottomBlur:!0},showTop:{showTop:!0}}}}},T=_,S=(0,u.Z)(T,b,y,!1,null,null,null),C=S.exports,B=function(){var t=this;t._self._c;return t._m(0)},H=[function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"second-bg"}},[s("div",{attrs:{id:"bg"}})])}],N={},R=N,Q=(0,u.Z)(R,B,H,!1,null,null,null),k=Q.exports,L=function(){var t=this,s=t._self._c;return s("div",{staticStyle:{width:"42.3%",height:"100px",margin:"auto",position:"relative"},attrs:{id:"story"}},[s("transition",{attrs:{name:"showBottom"}},[t.scroH>300?s("img",{staticStyle:{position:"absolute",left:"0px",top:"-50px"},attrs:{src:i(963),alt:""}}):t._e()]),s("transition",{attrs:{name:"showRight"}},[t.scroH>300?s("img",{staticClass:"enlarge",staticStyle:{height:"200px",width:"53.8%",position:"absolute",left:"-30%",top:"50%",border:"2px solid pink","border-radius":"2px","box-shadow":"0px 0px 5px 2px hotpink"},attrs:{src:i(846),alt:""}}):t._e()]),s("transition",{attrs:{name:"showRight"}},[t.scroH>300?s("img",{staticClass:"enlarge",staticStyle:{height:"200px",width:"53.8%",position:"absolute",left:"-30%",top:"300%",border:"2px solid yellow","border-radius":"2px","box-shadow":"0px 0px 5px 2px yellowgreen"},attrs:{src:i(42),alt:""}}):t._e()]),s("transition",{attrs:{name:"showLeftBlur"}},[t.scroH>300?s("img",{staticClass:"enlarge",staticStyle:{height:"200px",width:"50%",position:"absolute",top:"180px",right:"-420px",border:"2px solid skyblue","border-radius":"2px","box-shadow":"0px 0px 5px 2px skyblue"},attrs:{src:i(112),alt:""}}):t._e()]),s("transition",{attrs:{name:"showBottomBlur"}},[t.scroH>300?s("img",{staticStyle:{width:"18.5%",height:"525px",position:"absolute",top:"50px",left:"180px"},attrs:{src:i(634),alt:""}}):t._e()]),s("transition",{attrs:{name:"showLeftBlur"}},[t.scroH>300?s("img",{staticStyle:{width:"69.2%",height:"525px",position:"absolute",top:"50px",right:"-100px"},attrs:{src:i(984),alt:""}}):t._e()])],1)},E=[],J={props:{scroH:{typeof:Number}}},O=J,D=(0,u.Z)(O,L,E,!1,null,null,null),P=D.exports,F=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bg2",attrs:{id:"sakuraTree"}},[s("transition",{attrs:{name:"showRight"}},[t.scroH>1200?s("img",{staticStyle:{position:"absolute",left:"50px",top:"-200px",width:"400px",height:"150px"},attrs:{id:"atri-logo",src:i(486),alt:""}}):t._e()]),s("transition",{attrs:{name:"fadeInSlow"}},[t.scroH>1200?s("img",{staticStyle:{width:"900px",height:"810px",position:"absolute",left:"300px",size:"100%",top:"-600px"},attrs:{id:"atri-img1",src:i(440),alt:""}}):t._e()]),t.scroH>1200?[s("div",{attrs:{id:"atri-txt"}},[s("img",{class:t.imgAnimation.showLeft,staticStyle:{position:"absolute",width:"200px",height:"400px",top:"-520px",left:"850px"},attrs:{id:"atri-txt1",src:i(86),alt:""}}),s("img",{class:t.imgAnimation.showRight,staticStyle:{position:"absolute",width:"200px",height:"400px",top:"-420px",left:"400px"},attrs:{id:"atri-txt2",src:i(470),alt:""}}),s("img",{class:t.imgAnimation.showLeft,staticStyle:{position:"absolute",width:"200px",height:"400px",top:"-650px",left:"280px",filter:"blur(3px)"},attrs:{id:"atri-txt3",src:i(181),alt:""}}),s("img",{class:t.imgAnimation.showRight,staticStyle:{position:"absolute",width:"200px",height:"400px",top:"-550px",left:"950px",filter:"blur(3px)"},attrs:{id:"atri-txt4",src:i(642),alt:""}})])]:t._e(),s("img",{staticStyle:{width:"450px",height:"636px",position:"absolute",top:"-335px",left:"1090px"},attrs:{src:i(63),alt:""}})],2)},Y=[],I={props:{scroH:{typeof:Number}},data(){return{imgAnimation:{showLeft:{showLeft:!0},showLeftSlow:{showLeftSlow:!0},fadeIn:{fadeIn:!0},fadeInSlow:{fadeInSlow:!0},showRight:{showRight:!0},showBottom:{showBottom:!0},showBottomBlur:{showBottomBlur:!0},showTop:{showTop:!0}}}}},Z=I,q=(0,u.Z)(Z,F,Y,!1,null,null,null),j=q.exports,V={name:"MyHead",components:{TheNav:f,TheInfo:w,TheFirstBox:C,TheSecondBg:k,TheStory:P,TheCharacter:j},data(){return{scroH:0}},methods:{handleScroll(){this.scroH=document.documentElement.scrollTop}},computed:{sakuraFall(){return this.scroH/20-200}},mounted(){window.addEventListener("scroll",this.handleScroll,!0)}},M=V,G=(0,u.Z)(M,e,n,!1,null,null,null),K=G.exports,U={name:"App",components:{MyHead:K},created(){document.body.removeChild(document.getElementById("loading"))}},z=U,W=(0,u.Z)(z,r,a,!1,null,null,null),X=W.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(X)}).$mount("#app")},486:function(t,s,i){t.exports=i.p+"static/img/logo.b3ddfe49.svg"},86:function(t,s,i){t.exports=i.p+"static/img/txt_1.85b623a2.svg"},470:function(t,s,i){t.exports=i.p+"static/img/txt_2.4c08bdfb.svg"},181:function(t,s,i){t.exports=i.p+"static/img/txt_3.04c28852.svg"},642:function(t,s,i){t.exports=i.p+"static/img/txt_4.268ca14a.svg"},440:function(t,s,i){t.exports=i.p+"static/img/atri.a3ff81ce.png"},408:function(t,s,i){t.exports=i.p+"static/img/character.9c208c0d.png"},599:function(t){t.exports="data:image/png;base64,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"},112:function(t,s,i){t.exports=i.p+"static/img/ETC_e002a.86e1dda9.png"},626:function(t,s,i){t.exports=i.p+"static/img/myblog.2d213981.png"},42:function(t,s,i){t.exports=i.p+"static/img/story-img1.78779dde.png"},846:function(t,s,i){t.exports=i.p+"static/img/story-img2.47ad39c6.png"},963:function(t,s,i){t.exports=i.p+"static/img/story.207566a9.png"},634:function(t,s,i){t.exports=i.p+"static/img/story-1.8a06ae55.png"},984:function(t,s,i){t.exports=i.p+"static/img/story-2.4130a137.png"},415:function(t,s,i){t.exports=i.p+"static/img/transit-txt.aa052d3f.png"},63:function(t,s,i){t.exports=i.p+"static/img/白花1.a9d9cb7d.png"}},s={};function i(o){var r=s[o];if(void 0!==r)return r.exports;var a=s[o]={exports:{}};return t[o](a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(s,o,r,a){if(!o){var e=1/0;for(p=0;p<t.length;p++){o=t[p][0],r=t[p][1],a=t[p][2];for(var n=!0,l=0;l<o.length;l++)(!1&a||e>=a)&&Object.keys(i.O).every((function(t){return i.O[t](o[l])}))?o.splice(l--,1):(n=!1,a<e&&(e=a));if(n){t.splice(p--,1);var c=r();void 0!==c&&(s=c)}}return s}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[o,r,a]}}(),function(){i.d=function(t,s){for(var o in s)i.o(s,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){i.p=""}(),function(){var t={143:0};i.O.j=function(s){return 0===t[s]};var s=function(s,o){var r,a,e=o[0],n=o[1],l=o[2],c=0;if(e.some((function(s){return 0!==t[s]}))){for(r in n)i.o(n,r)&&(i.m[r]=n[r]);if(l)var p=l(i)}for(s&&s(o);c<e.length;c++)a=e[c],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(p)},o=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(785)}));o=i.O(o)})();
//# sourceMappingURL=app.fbe3d0e1.js.map