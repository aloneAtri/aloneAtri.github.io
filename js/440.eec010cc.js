"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[440],{6440:function(s,t,e){e.r(t),e.d(t,{default:function(){return o}});var i=function(){var s=this,t=s._self._c;return t("div",{attrs:{id:"music"}},[t("div",{attrs:{id:"title"}},[t("h1",{staticClass:"select2"},[s._v("MusicPlayer")]),t("ul",{attrs:{id:"head"}},[t("li",{staticClass:"select2"},[t("el-button",[s._v("播放列表")])],1),t("li",{staticClass:"select2"},[t("el-button",[s._v("歌单")])],1),t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:s.search,expression:"search"}],attrs:{type:"text",id:"search"},domProps:{value:s.search},on:{keyup:function(t){return!t.type.indexOf("key")&&s._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.searchMusic.apply(null,arguments)},input:function(t){t.target.composing||(s.search=t.target.value)}}})]),t("li",{staticClass:"select2"},[t("el-button",{attrs:{id:"searchMusic",icon:"el-icon-search"},nativeOn:{click:function(t){return s.searchMusic.apply(null,arguments)}}},[s._v("歌曲搜索")])],1)])]),t("router-view",{attrs:{result:s.result,sendAsk:s.sendAsk}}),t("div",{attrs:{id:"load"}},[t("div",[s._m(0),t("span",[t("i",{staticClass:"el-icon-video-pause select",style:s.pauseStyle,on:{click:s.pause}})]),t("span",[t("i",{staticClass:"el-icon-video-play select",style:s.playStyle,on:{click:s.playMusic}})]),s._m(1)]),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"}),t("el-slider",{model:{value:s.load,callback:function(t){s.load=t},expression:"load"}})],1),t("div",[s._m(2),t("span",{staticClass:"demonstration1"}),t("el-slider",{staticStyle:{width:"65%","margin-right":"20px"},model:{value:s.sound,callback:function(t){s.sound=t},expression:"sound"}})],1),t("audio",{ref:"music",staticStyle:{display:"none"},attrs:{autoplay:"",controls:"",src:s.url},on:{timeupdate:s.timeupdate,ended:s.end}})]),t("div",{ref:"bg",attrs:{id:"bgImg"}})],1)},a=[function(){var s=this,t=s._self._c;return t("span",[t("i",{staticClass:"el-icon-d-arrow-left select"})])},function(){var s=this,t=s._self._c;return t("span",[t("i",{staticClass:"el-icon-d-arrow-right select"})])},function(){var s=this,t=s._self._c;return t("span",[t("i",{staticClass:"el-icon-bell select"})])}],l=e(196),r={data(){return{search:"",load:0,sound:100,result:[],isPlay:!1,urlArray:[],sendAsk:!1,pauseStyle:{},playStyle:{}}},computed:{id(){return this.$store.state.id},url(){return this.$store.state.url},idArray(){return this.$store.state.idArray},isPlayIndex(){return this.$store.state.isPlayIndex},imgUrl(){return this.$store.state.imgSrc}},methods:{end(){this.$store.commit("CHANGEURL",this.urlArray[this.isPlayIndex+1]),this.$store.commit("CHANGEID",this.idArray[this.isPlayIndex]),this.$refs.music.play()},timeupdate(){this.load=this.$refs.music.currentTime},pause(){this.$refs.music.pause(),this.isPlay=!1,this.playStyle={color:"rgba(225, 225, 225, 0.6)"},this.pauseStyle={color:"white",transform:"scale(1.1)"}},playMusic(){this.$refs.music.play(),this.isPlay=!0,this.playStyle={color:"white",transform:"scale(1.1)"},this.pauseStyle={color:"rgba(225, 225, 225, 0.6)"}},searchMusic(){this.sendAsk=!0,l.ZP.get(`https://music-api.heheda.top/search?keywords=${this.search}`).then((s=>{console.log("发送成功"),this.result=s.data.result.songs;let t=[];for(let e=0;e<s.data.result.songs.length;e++){const i=s.data.result.songs[e];t[e]=i.id}this.$store.commit("CHANGEIDARRAY",t)}),(s=>{console.log(s.data)}))}},mounted(){this.$bus.$on("ask",(s=>{this.sendAsk=!this.sendAsk,this.urlArray=s}))},watch:{sound(){let s=this.$refs.music;s.volume=this.sound/100},isPlayIndex(){this.$nextTick((()=>{this.$refs.bg.style="background-image:url("+this.imgUrl+");filter: blur(15px);"}))},imgUrl(){this.$nextTick((()=>{this.$refs.bg.style="background-image:url("+this.imgUrl+");filter: blur(15px);"}))}}},n=r,c=e(1001),u=(0,c.Z)(n,i,a,!1,null,"27f014cc",null),o=u.exports}}]);
//# sourceMappingURL=440.eec010cc.js.map