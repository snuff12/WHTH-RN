(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{89:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n(10),a=n.n(r),o=n(29),c=n.n(o),i=n(1),s=n.n(i),l=n(87),u=n(0),p=n.n(u),f=n(4),b=n(31),d=n(11),y=n(46),m=n(76),h=n(88),w=n(58),g=n(9),O=n(50),x=n(129),v="black",D="#3A3D40";function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(){var e=Object(u.useState)(!0),t=c()(e,2),n=t[0],r=t[1],o=Object(u.useState)(""),i=c()(o,2),f=i[0],v=i[1],j=Object(u.useState)({}),P=c()(j,2),k=P[0],T=P[1];Object(u.useEffect)((function(){C()}),[]);var z=function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(O.a.setItem("@toDos",JSON.stringify(e)));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),null,null,[[0,5]],Promise)},C=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(O.a.getItem("@toDos"));case 3:(e=t.sent)&&T(JSON.parse(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]],Promise)};return p.a.createElement(d.a,{style:S.container},p.a.createElement(l.a,{style:"auto"}),p.a.createElement(d.a,{style:S.header},p.a.createElement(y.a,{hitSlop:50,onPress:function(){return r(!0)}},p.a.createElement(b.a,{style:{fontSize:38,fontWeight:"600",color:n?"white":D}},"Work")),p.a.createElement(y.a,{hitSlop:50,onPress:function(){return r(!1)}},p.a.createElement(b.a,{style:{fontSize:38,fontWeight:"600",color:n?D:"white"}},"Travel"))),p.a.createElement(m.a,{onSubmitEditing:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==f){t.next=2;break}return t.abrupt("return");case 2:return e=E(E({},k),{},a()({},Date.now(),{text:f,work:n})),T(e),t.next=6,s.a.awrap(z(e));case 6:v("");case 7:case"end":return t.stop()}}),null,null,null,Promise)},placeholder:n?"Add a To Do":"Where do you want to go?",onChangeText:function(e){return v(e)},returnKeyType:"done",style:S.input}),p.a.createElement(h.a,null,Object.keys(k).map((function(e){if(k[e].work===n)return p.a.createElement(d.a,{style:S.toDo,key:e},p.a.createElement(b.a,{style:S.toDoText},k[e].text),p.a.createElement(y.a,{onPress:function(){return function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:"web"===g.a.OS?confirm("Do you want to delete this To Do?")&&(delete(t=E({},k))[e],T(t),z(t)):w.a.alert("Delete To Do","Are you sure?",[{text:"Cancel"},{text:"I'm sure",onPress:function(){var t=E({},k);delete t[e],T(t),z(t)}}]);case 1:case"end":return n.stop()}}),null,null,null,Promise)}(e)},hitSlop:50},p.a.createElement(x.a,{name:"trash-alt",size:18,color:"white"})))}))))}var S=f.a.create({container:{flex:1,backgroundColor:v,paddingHorizontal:20},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},btnText:{},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginVertical:20,fontSize:18},toDo:{backgroundColor:D,marginBottom:10,paddingVertical:20,paddingHorizontal:20,borderRadius:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"500"}})},90:function(e,t,n){e.exports=n(121)}},[[90,1,2]]]);
//# sourceMappingURL=app.6d3ea9d8.chunk.js.map