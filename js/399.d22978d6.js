"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[399],{1399:function(s,t,e){e.r(t),e.d(t,{default:function(){return u}});var l=function(){var s=this,t=s._self._c;return t("div",{attrs:{id:"music"}},[t("div",{attrs:{id:"title"}},[t("h1",{staticClass:"select2"},[s._v("MusicPlayer")]),t("ul",{attrs:{id:"head"}},[t("li",{staticClass:"select2"},[t("el-button",[s._v("播放列表")])],1),t("li",{staticClass:"select2"},[t("el-button",[s._v("歌单")])],1),t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:s.search,expression:"search"}],attrs:{type:"text",id:"search"},domProps:{value:s.search},on:{keyup:function(t){return!t.type.indexOf("key")&&s._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.searchMusic.apply(null,arguments)},input:function(t){t.target.composing||(s.search=t.target.value)}}})]),t("li",{staticClass:"select2"},[t("el-button",{attrs:{icon:"el-icon-search"},nativeOn:{click:function(t){return s.searchMusic.apply(null,arguments)}}},[s._v("歌曲搜索")])],1)])]),t("router-view",{attrs:{result:s.result}}),t("div",{attrs:{id:"load"}},[t("div",[s._m(0),t("span",[t("i",{staticClass:"el-icon-video-pause select",style:s.pauseStyle,on:{click:s.pause}})]),t("span",[t("i",{staticClass:"el-icon-video-play select",style:s.playStyle,on:{click:s.playMusic}})]),s._m(1)]),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"}),t("el-slider",{model:{value:s.load,callback:function(t){s.load=t},expression:"load"}})],1),t("div",[s._m(2),t("span",{staticClass:"demonstration1"}),t("el-slider",{staticStyle:{width:"65%","margin-right":"20px"},model:{value:s.sound,callback:function(t){s.sound=t},expression:"sound"}})],1),t("audio",{ref:"music",staticStyle:{display:"none"},attrs:{autoplay:"",controls:"",src:s.url},on:{timeupdate:s.timeupdate}})])],1)},a=[function(){var s=this,t=s._self._c;return t("span",[t("i",{staticClass:"el-icon-d-arrow-left select"})])},function(){var s=this,t=s._self._c;return t("span",[t("i",{staticClass:"el-icon-d-arrow-right select"})])},function(){var s=this,t=s._self._c;return t("span",[t("i",{staticClass:"el-icon-bell select"})])}],i=e(196),c={data(){return{url:"",search:"",load:0,sound:100,SongName:"hello",result:[],isPlay:!1,pauseStyle:{},playStyle:{}}},methods:{timeupdate(){this.load=this.$refs.music.currentTime},pause(){this.$refs.music.pause(),this.isPlay=!1,this.playStyle={color:"rgba(225, 225, 225, 0.6)",transform:"scale(1)"},this.pauseStyle={color:"white",transform:"scale(1.1)"}},playMusic(){this.$refs.music.play(),this.isPlay=!0,this.playStyle={color:"white",transform:"scale(1.1)"},this.pauseStyle={color:"rgba(225, 225, 225, 0.6)",transform:"scale(1)"}},searchMusic(){i.ZP.get(`http://cloud-music.pl-fe.cn/search?keywords=${this.search}`).then((s=>{console.log("发送成功"),console.log(s.data),this.result=s.data.result.songs,console.log(this.result)}),(s=>{console.log(s.data)}))}},mounted(){this.$bus.$on("receiveUrl",(s=>{this.url=s}))},watch:{sound(){let s=this.$refs.music;s.volume=this.sound/100}}},r=c,n=e(1001),o=(0,n.Z)(r,l,a,!1,null,"7a19f600",null),u=o.exports}}]);
//# sourceMappingURL=399.d22978d6.js.map