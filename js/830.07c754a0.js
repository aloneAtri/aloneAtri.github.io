"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[830],{6830:function(t,s,i){i.r(s),i.d(s,{default:function(){return d}});var r=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"main"}},[s("ul",{attrs:{id:"list"}},[t._m(0),t._l(t.result,(function(i,r){return s("li",{key:r,on:{click:function(s){return t.player(i.id,r)}}},[s("span",[t._v(t._s(r+1))]),s("span",[t._v(t._s(i.name))]),s("span",[t._v(t._s(i.ar[0].name))]),s("span",[t._v(t._s(i.al.name))])])}))],2),s("div",{attrs:{id:"img"}},[s("img",{attrs:{src:t.imgSrc,alt:""}})])])},e=[function(){var t=this,s=t._self._c;return s("li",[s("span",[t._v("序列")]),s("span",[t._v("歌曲")]),s("span",[t._v("歌手")]),s("span",[t._v("专辑")])])}],a=i(196),n={data(){return{array:[]}},computed:{id(){return this.$store.state.id},url(){return this.$store.state.url},idArray(){return this.$store.state.idArray},isPlayIndex(){return this.$store.state.isPlayIndex},imgSrc(){return this.$store.state.imgSrc}},props:["result","sendAsk"],methods:{getid(){for(let t=0;t<this.idArray.length;t++){const s=this.idArray[t];a.ZP.get(`https://music.cyrilstudio.top/song/url?id=${s}`).then((s=>{this.array[t]=s.data.data[0].url}),(t=>{console.log("接收失败",t)}))}this.$bus.$emit("ask",this.array)},player(t,s){this.$store.commit("CHANGEID",t),this.getid(),a.ZP.get(`https://music.cyrilstudio.top/song/url?id=${this.id}`).then((t=>{console.log(t.data),this.$store.commit("CHANGEURL",t.data.data[0].url),this.$store.commit("CHAGESONGINDEX",s)}))}},watch:{isPlayIndex:{handler(){console.log("数据为"+this.result[this.isPlayIndex].al.picUrl),this.$store.commit("CHANGEIMGURL",this.result[this.isPlayIndex].al.picUrl)}},id:{handler(){console.log("id为",this.idArray[this.isPlayIndex]),this.$store.commit("CHANGEIMGURL",this.result[this.isPlayIndex].al.picUrl)}}}},l=n,o=i(1001),u=(0,o.Z)(l,r,e,!1,null,"3a6816d4",null),d=u.exports}}]);
//# sourceMappingURL=830.07c754a0.js.map