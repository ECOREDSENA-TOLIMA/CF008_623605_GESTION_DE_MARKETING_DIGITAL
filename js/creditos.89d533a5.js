(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-515a8379"],{"0095":function(t,n,i){"use strict";i("95c5")},"13aa":function(t,n,i){"use strict";i.r(n);var r=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"container-fluid banner-interno"},[i("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),i("div",{staticClass:"container"},[i("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?i("div",{staticClass:"banner-interno__titulo__icono me-3"},[i("i",{class:t.icono})]):t._e(),i("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},e=[],o={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},s=o,a=(i("0095"),i("2877")),c=Object(a["a"])(s,r,e,!1,null,null,null);n["default"]=c.exports},"159b":function(t,n,i){var r=i("da84"),e=i("fdbc"),o=i("17c2"),s=i("9112");for(var a in e){var c=r[a],l=c&&c.prototype;if(l&&l.forEach!==o)try{s(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(t,n,i){"use strict";var r=i("b727").forEach,e=i("a640"),o=e("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"2e81":function(t,n,i){"use strict";i.r(n);var r=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"curso-main-container creditos-vista"},[r("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[r("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(t.creditosData,(function(n,i){return r("div",{key:"credito-"+i,staticClass:"creditos__item",class:i!=t.creditosData.length-1?"mb-4":""},[r("div",{staticClass:"creditos__titulo"},[t._v(t._s(n.titulo))]),r("table",[r("tbody",t._l(n.autores,(function(n,i){return r("tr",{key:"autor-"+i},[r("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(n.nombre))}}),r("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(n.cargo))}}),r("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(n.centro))}})])})),0)])])})),0),r("div",{staticClass:"row mb-4 mb-md-5"},[r("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[r("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[r("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:i("ef52")}}),r("p",{domProps:{innerHTML:t._s(t.creditosAdicionales.imagenes)}})])]),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[r("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:i("e1f5")}}),r("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.creditosAdicionales.creativeCommons)}})])])]),r("Footer",{attrs:{"all-round":""}})],1)],1)},e=[],o=(i("d3b7"),i("159b"),i("13aa")),s=i("e9c6"),a={name:"Creditos",components:{BannerInterno:o["default"],Footer:s["a"]},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos},creditosAdicionales:function(){return this.$config.creditosAdicionales}},methods:{renderText:function(t){var n="";return Array.isArray(t)?t.forEach((function(t,i){n+=(i?"<br/>":"")+t})):n+=t,n}}},c=a,l=(i("5d8e"),i("2877")),d=Object(l["a"])(c,r,e,!1,null,null,null);n["default"]=d.exports},"5d8e":function(t,n,i){"use strict";i("f728")},"95c5":function(t,n,i){},a640:function(t,n,i){"use strict";var r=i("d039");t.exports=function(t,n){var i=[][t];return!!i&&r((function(){i.call(null,n||function(){throw 1},1)}))}},e1f5:function(t,n,i){t.exports=i.p+"img/creditos-cc.4836eb56.svg"},ef52:function(t,n,i){t.exports=i.p+"img/creditos-img.689712e2.svg"},f728:function(t,n,i){}}]);
//# sourceMappingURL=creditos.89d533a5.js.map