webpackJsonp([1],{"5A0+":function(t,e){},"5LU+":function(t,e){},"5ZHH":function(t,e){},"74v7":function(t,e){t.exports={postData:[{name:"椰汁凉粉",price:"19",category:"凉粉系列",hotsale:!0},{name:"西瓜凉粉",price:"19",category:"凉粉系列",hotsale:!1},{name:"芒果凉粉",price:"28",category:"凉粉系列",hotsale:!0},{name:"鲜杂果凉粉",price:"33",category:"凉粉系列",hotsale:!1},{name:"雪山榴莲",price:"39",category:"雪山系列",hotsale:!0},{name:"椰汁马豆糕",price:"16",category:"糕点系列",hotsale:!1}]}},"7gTv":function(t,e){},GzHn:function(t,e){},HCYP:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},o,!1,function(t){s("pHqA")},null,null).exports,n=s("/ocq"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("mt-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:this.toOrder}},[e("p",{staticClass:"btn__tableNum"},[this._v(this._s(this.$route.params.id)+"号餐桌")]),this._v(" "),e("p",[this._v("立即点餐")])])],1)},staticRenderFns:[]};var c=s("VU/8")({methods:{toOrder:function(){this.$router.push({path:"/table"+this.$route.params.id+"/index/order"})}}},r,!1,function(t){s("zb0s")},"data-v-97043f12",null).exports,l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("router-view"),t._v(" "),s("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"order"},nativeOn:{click:function(e){t.goTo()}}},[s("i",{staticClass:"iconfont icon-diancan",attrs:{slot:"icon"},slot:"icon"}),t._v("\r\n      点餐\r\n    ")]),t._v(" "),s("mt-tab-item",{attrs:{id:"history"},nativeOn:{click:function(e){t.goTo()}}},[s("i",{staticClass:"iconfont icon-3lishi",attrs:{slot:"icon"},slot:"icon"}),t._v("\r\n      历史\r\n    ")]),t._v(" "),s("mt-tab-item",{attrs:{id:"user"},nativeOn:{click:function(e){t.goTo()}}},[s("i",{staticClass:"iconfont icon-iconfuzhi",attrs:{slot:"icon"},slot:"icon"}),t._v("\r\n      我的\r\n    ")])],1)],1)},staticRenderFns:[]};var d=s("VU/8")({data:function(){return{selected:"order"}},mounted:function(){this.selected=this.$route.name},methods:{goTo:function(){this.$router.push("./"+this.selected)}}},l,!1,function(t){s("HCYP")},"data-v-af2aec26",null).exports,u=s("mvHQ"),m=s.n(u),v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-bottom":"100px"}},t._l(t.goodsInfo,function(e,i){return s("div",{key:i,staticClass:"itemGroup"},[s("div",{staticClass:"item"},[s("div",{staticClass:"img"}),t._v(" "),s("div",{staticClass:"detail"},[s("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"ditailBottom"},[s("div",{staticClass:"price"},[s("i",{staticClass:"iconfont icon-renminbi"}),t._v(t._s(e.price))]),t._v(" "),s("mt-button",{staticClass:"btn",attrs:{type:"primary",size:"small"},on:{click:function(s){t.addToCart(e)}}},[t._v("\r\n            加入餐篮\r\n          ")])],1)])])])}))},staticRenderFns:[]};var h=s("VU/8")({props:["goodsInfo"],methods:{addToCart:function(t){this.$emit("goodsItem",t)}}},v,!1,function(t){s("5ZHH")},"data-v-63f938bc",null).exports,f={props:["cartInfo"],data:function(){return{localStorageArray:[]}},methods:{add:function(t){t.quantity++},minus:function(t,e){t.quantity--,0===t.quantity&&this.cartInfo.splice(e,1),0===this.cartInfo.length&&this.$emit("banBtn")},sum:function(){if(this.cartInfo.length>0)return this.cartInfo.map(function(t){return t.goodsPrice*t.quantity}).reduce(function(t,e){return t+e})},addToHistoryOrder:function(){var t={orderList:this.cartInfo,totalPrice:this.sum(),orderDate:new Date,orderStatus:"进行中",tableNumber:this.$route.params.id},e=JSON.parse(localStorage.getItem("historyOrder"));e&&e.length>0?(this.localStorageArray=e,this.localStorageArray.push(t),localStorage.setItem("historyOrder",m()(this.localStorageArray)),console.log("had localStorage")):(console.log("empty localStorage"),this.localStorageArray.push(t),localStorage.setItem("historyOrder",m()(this.localStorageArray))),this.$emit("hadSubmit")}},mounted:function(){}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"cartList"},[t._m(0),t._v(" "),t._l(t.cartInfo,function(e,i){return s("div",{key:i,staticClass:"cartItem"},[s("p",{staticClass:"goodsName"},[t._v(t._s(e.goodsName))]),t._v(" "),s("p",{staticClass:"goodsPrice"},[s("i",{staticClass:"iconfont icon-renminbi"}),t._v("\n        "+t._s(e.goodsPrice)+"\n      ")]),t._v(" "),s("div",{staticClass:"goodsQuantity"},[s("mt-button",{staticClass:"numBtn",attrs:{size:"small"},on:{click:function(s){t.minus(e,i)}}},[s("i",{staticClass:"iconfont icon-minus",attrs:{slot:"icon"},slot:"icon"})]),t._v("\n          "+t._s(e.quantity)+"\n        "),s("mt-button",{staticClass:"numBtn",attrs:{size:"small"},on:{click:function(s){t.add(e)}}},[s("i",{staticClass:"iconfont icon-add",attrs:{slot:"icon"},slot:"icon"})])],1)])}),t._v(" "),s("div",{staticClass:"sum"},[t._v("\n      合计：\n      "),s("span",[s("i",{staticClass:"iconfont icon-renminbi"}),t._v("\n        "+t._s(t.sum())+"\n      ")])]),t._v(" "),s("div",{staticClass:"submitBtn"},[s("mt-button",{staticStyle:{width:"100%"},on:{click:t.addToHistoryOrder}},[t._v("submit")])],1)],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"caption"},[e("div",{staticClass:"caption__col",staticStyle:{width:"40%"}},[this._v("商品名称")]),this._v(" "),e("div",{staticClass:"caption__col",staticStyle:{width:"30%"}},[this._v("商品单价")]),this._v(" "),e("div",{staticClass:"caption__col",staticStyle:{width:"30%"}},[this._v("商品数量")])])}]};var p=s("VU/8")(f,_,!1,function(t){s("7gTv")},"data-v-11407ab2",null).exports,g=s("74v7"),y={components:{goodsList:h,cartList:p},data:function(){return{tableNum:"/table"+this.$route.params.id,headerTitle:this.$route.params.id+"号餐桌点餐中",selected:"1",goodsList:[],cartList:[],cartBtnDisabled:!0,popupVisible:!1,clearCartList:!1}},computed:{goodsList1:function(){return this.goodsList.filter(function(t){return!0===t.hotsale})},goodsList2:function(){return this.goodsList.filter(function(t){return"凉粉系列"===t.category})},goodsList3:function(){return this.goodsList.filter(function(t){return"雪山系列"===t.category})},goodsList4:function(){return this.goodsList.filter(function(t){return"糕点系列"===t.category})}},mounted:function(){var t=JSON.parse(localStorage.getItem("goodsList"));t&&t.length>0?this.goodsList=t:(localStorage.setItem("goodsList",m()(g.postData)),this.goodsList=g.postData)},beforeDestroy:function(){this.goodsList=[]},methods:{getcartList:function(t){if(this.cartList.some(function(e){return e.goodsName===t.name})){this.cartList.filter(function(e){return e.goodsName===t.name})[0].quantity++}else{var e={goodsName:t.name,goodsPrice:t.price,quantity:1};this.cartList.push(e)}0===this.cartList.length?this.controlBtn():this.cartBtnDisabled=!1},toggleCart:function(){this.popupVisible=!this.popupVisible},controlBtn:function(){this.toggleCart(),this.cartBtnDisabled=!0},clearList:function(){this.cartList=[],this.controlBtn()}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("mt-header",{attrs:{title:t.headerTitle}},[s("router-link",{attrs:{slot:"left",to:t.tableNum},slot:"left"},[s("mt-button",{attrs:{icon:"back"}})],1)],1),t._v(" "),s("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"1"}},[t._v("热销推荐")]),t._v(" "),s("mt-tab-item",{attrs:{id:"2"}},[t._v("凉粉系列")]),t._v(" "),s("mt-tab-item",{attrs:{id:"3"}},[t._v("雪山系列")]),t._v(" "),s("mt-tab-item",{attrs:{id:"4"}},[t._v("糕点系列")])],1),t._v(" "),s("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-container-item",{attrs:{id:"1"}},[s("goods-list",{attrs:{goodsInfo:t.goodsList1},on:{goodsItem:t.getcartList}})],1),t._v(" "),s("mt-tab-container-item",{attrs:{id:"2"}},[s("goods-list",{attrs:{goodsInfo:t.goodsList2},on:{goodsItem:t.getcartList}})],1),t._v(" "),s("mt-tab-container-item",{attrs:{id:"3"}},[s("goods-list",{attrs:{goodsInfo:t.goodsList3},on:{goodsItem:t.getcartList}})],1),t._v(" "),s("mt-tab-container-item",{attrs:{id:"4"}},[s("goods-list",{attrs:{goodsInfo:t.goodsList4},on:{goodsItem:t.getcartList}})],1)],1),t._v(" "),s("mt-button",{staticClass:"cartBtn",attrs:{type:"default",disabled:t.cartBtnDisabled},on:{click:t.toggleCart}},[t._v("\r\n    餐篮\r\n    "),0!==t.cartList.length?s("mt-badge",[t._v(t._s(t.cartList.length))]):t._e()],1),t._v(" "),s("mt-popup",{staticStyle:{width:"100%"},attrs:{position:"bottom"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[s("cart-list",{attrs:{cartInfo:t.cartList},on:{banBtn:t.controlBtn,hadSubmit:t.clearList}})],1)],1)},staticRenderFns:[]};var C=s("VU/8")(y,b,!1,function(t){s("XwEJ")},"data-v-435dd4f9",null).exports,L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"list"},t._l(t.listInfo,function(e,i){return s("div",{key:i,staticClass:"list__item"},[s("div",{staticClass:"list__item--goodsName"},[t._v(t._s(e.goodsName))]),t._v(" "),s("div",{staticClass:"list__item--goodsPrice"},[s("i",{staticClass:"iconfont icon-renminbi"}),t._v("\r\n        "+t._s(e.goodsPrice)+"\r\n      ")]),t._v(" "),s("div",{staticClass:"list__item--goodsQuantity"},[t._v(t._s(e.quantity))])])}))])},staticRenderFns:[]};var S=s("VU/8")({props:["listInfo"]},L,!1,function(t){s("gP1R")},"data-v-a8668c06",null).exports,k={props:["historyOrderInfo"],components:{List:S},methods:{FormatDate:function(t){var e=new Date(t);return e.getFullYear()+"/"+(e.getMonth()+1>10?e.getMonth()+1:"0"+(e.getMonth()+1))+"/"+(e.getDate()>10?e.getDate():"0"+e.getDate())+" "+(e.getHours()>10?e.getHours():"0"+e.getHours())+":"+(e.getMinutes()>10?e.getMinutes():"0"+e.getMinutes())+":"+(e.getSeconds()>10?e.getSeconds():"0"+e.getSeconds())}}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.historyOrderInfo,function(e,i){return s("div",{key:i,class:{item:!0,hadCompleted:"已完成"===e.orderStatus}},[s("div",{staticClass:"item__header"},[s("div",{staticClass:"item__header-top"},[t._v("\n        日期："+t._s(t.FormatDate(e.orderDate))+"\n      ")]),t._v(" "),s("div",{staticClass:"item__header-bottom"},[t._v("\n        状态："+t._s(e.orderStatus)+"\n      ")])]),t._v(" "),s("list",{staticStyle:{margin:"0.2rem 0"},attrs:{listInfo:e.orderList}}),t._v(" "),s("div",{staticClass:"item__footer"},[t._v("\n      总计：\n      "),s("span",[s("i",{staticClass:"iconfont icon-renminbi"}),t._v("\n        "+t._s(e.totalPrice)+"\n      ")])])],1)}))},staticRenderFns:[]};var w={components:{historyOrderList:s("VU/8")(k,I,!1,function(t){s("dycy")},"data-v-03d3dc1e",null).exports},data:function(){return{headerTitle:"历史订单",historyList:[]}},mounted:function(){this.historyList=JSON.parse(localStorage.getItem("historyOrder"))}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mt-header",{attrs:{title:this.headerTitle}}),this._v(" "),e("history-order-list",{staticStyle:{padding:"0 0.5rem","margin-bottom":"4rem"},attrs:{historyOrderInfo:this.historyList}})],1)},staticRenderFns:[]},O=s("VU/8")(w,x,!1,null,null,null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("  用户页建设中...")])])}]};var G=s("VU/8")({},$,!1,function(t){s("GzHn")},"data-v-4d5aae24",null).exports,P={props:["orderListInfo"],components:{list:S},methods:{showMessageBox:function(t){var e=JSON.parse(localStorage.getItem("historyOrder"));"进行中"===t.orderStatus&&this.$confirm("提示","确定完成订单？").then(function(s){if("confirm"===s){t.orderStatus="已完成";var i=e.findIndex(function(e){return e.orderDate===t.orderDate});e.splice(i,1,t),localStorage.setItem("historyOrder",m()(e))}}).catch(function(t){console.log(t)})}}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},t._l(t.orderListInfo,function(e,i){return s("div",{key:i,class:{item:!0,hadCompleted:"已完成"===e.orderStatus},on:{click:function(s){t.showMessageBox(e)}}},[s("div",{staticClass:"item__header"},[s("div",{staticClass:"item__header-top"},[t._v("\n        日期："+t._s(e.orderDate)+"\n      ")]),t._v(" "),s("div",{staticClass:"item__header-bottom"},[t._v("\n        餐桌号： "+t._s(e.tableNumber)+"\n        "),s("span",[t._v("状态："+t._s(e.orderStatus))])])]),t._v(" "),s("list",{staticClass:"item__list",attrs:{listInfo:e.orderList}}),t._v(" "),s("div",{staticClass:"item__footer"},[t._v("\n      总计：\n      "),s("span",[s("i",{staticClass:"iconfont icon-renminbi"}),t._v("\n        "+t._s(e.totalPrice)+"\n      ")])])],1)}))},staticRenderFns:[]};var V={components:{kitchenOrderList:s("VU/8")(P,E,!1,function(t){s("5LU+")},"data-v-2907d960",null).exports},data:function(){return{headerTitle:"厨房订单处理",orderList:[],selected:"1"}},computed:{isOrding:function(){if(this.orderList)return this.orderList.filter(function(t){return"进行中"===t.orderStatus})},hadCompleted:function(){if(this.orderList)return this.orderList.filter(function(t){return"已完成"===t.orderStatus})}},mounted:function(){var t=localStorage.getItem("historyOrder");this.orderList=JSON.parse(t)},methods:{clearLocalStorage:function(){localStorage.removeItem("historyOrder"),console.log("had remove localStorage ‘historyOrder’")}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mt-header",{attrs:{title:t.headerTitle}}),t._v(" "),s("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"1"}},[t._v("进行中")]),t._v(" "),s("mt-tab-item",{attrs:{id:"2"}},[t._v("已完成")])],1),t._v(" "),s("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-container-item",{attrs:{id:"1"}},[s("kitchenOrderList",{attrs:{orderListInfo:t.isOrding}})],1),t._v(" "),s("mt-tab-container-item",{attrs:{id:"2"}},[s("kitchenOrderList",{attrs:{orderListInfo:t.hadCompleted}})],1)],1),t._v(" "),s("button",{on:{click:t.clearLocalStorage}},[t._v("clear up localStorage")])],1)},staticRenderFns:[]};var T=s("VU/8")(V,N,!1,function(t){s("OqI9")},"data-v-55ea35a4",null).exports,D=s("lHA8"),H=s.n(D),B=s("c/Tr"),F=s.n(B),M={name:"Modal",props:{maskPaddingLr:{type:String,default:"0"},maskOpacity:{type:Number,default:.3}},data:function(){return{}},computed:{modal_style:function(){return{padding:"0 "+this.Torem(this.maskPaddingLr),backgroundColor:"rgba(0, 0, 0, "+this.maskOpacity+")"}}},created:function(){window.addEventListener("touchmove",this.handleScroll,{passive:!1})},methods:{Torem:function(t){return t/10/2*1+"rem"},close:function(){this.$emit("close"),window.removeEventListener("touchmove",this.handleScroll)},handleScroll:function(t){t.preventDefault()}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"modal-fade"}},[e("div",{staticClass:"modal-mask",style:this.modal_style,on:{click:this.close}},[e("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"modal-content"},[this._t("content",[e("h2",[this._v("模态框的内容")]),this._v("\n          style:"+this._s(this.modal_style)+"\n        ")])],2)])])])},staticRenderFns:[]};var U=s("VU/8")(M,R,!1,function(t){s("5A0+")},"data-v-1bcf9d99",null).exports,A=s("Au9i"),q=s.n(A),J=s("74v7"),z={components:{model:U},data:function(){return{goods:[],activeGoods:{},showModel:!1,categoryPickerVisible:!1,categoryList:[]}},mounted:function(){var t=JSON.parse(localStorage.getItem("goodsList"));t&&t.length>0?this.goods=t:this.goods=J.postData;var e=this.goods.map(function(t){return t.category}),s=F()(new H.a(e));this.categoryList=[{flex:1,values:s}]},methods:{editGoods:function(t){this.activeGoods=t,this.showEditor(),console.log(this.activeGoods)},delGoods:function(){var t=this;A.MessageBox.confirm("确定删除"+this.activeGoods.name+"?").then(function(e){if("confirm"===e){var s=t.goods.findIndex(function(e){return e.name===t.activeGoods.name});t.goods.splice(s,1),t.changeLocalStorage();var i=t.activeGoods.name+" 已删除";Object(A.Toast)(i),t.closeEditor()}}).catch(function(t){console.log(t)})},submitEdit:function(){var t=this,e=this.goods.findIndex(function(e){return e.name===t.activeGoods.name});if(e>-1){this.goods[e]=this.activeGoods,this.changeLocalStorage();var s=this.activeGoods.name+" 修改成功";Object(A.Toast)(s)}else{var i=this.activeGoods,o={name:i.name,price:i.price,category:i.category,hotsale:i.hotsale};console.log(o),this.goods.push(o),localStorage.setItem("goodsList",m()(this.goods)),console.log(JSON.parse(localStorage.getItem("goodsList")));var a=this.activeGoods.name+" 添加成功";Object(A.Toast)(a)}this.closeEditor()},changeLocalStorage:function(){localStorage.setItem("goodsList",m()(this.goods))},showEditor:function(){this.showModel=!0},closeEditor:function(){this.showModel=!1,this.activeGoods={}},showCategoryPicker:function(){this.categoryPickerVisible=!this.categoryPickerVisible},onCategoryChange:function(t){var e=t.getValues()[0];this.activeGoods.category=e}}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"header"},[s("h1",[t._v("菜品管理")]),t._v(" "),s("mt-button",{on:{click:t.showEditor}},[t._v("添加菜品")])],1),t._v(" "),s("div",{staticClass:"goodsList"},[t._m(0),t._v(" "),t._l(t.goods,function(e,i){return s("div",{key:i,staticClass:"goodsItem",on:{click:function(s){t.editGoods(e)}}},[s("div",{staticStyle:{width:"30%"}},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticStyle:{width:"20%"}},[t._v(t._s(e.price))]),t._v(" "),s("div",{staticStyle:{width:"30%"}},[t._v(t._s(e.category))]),t._v(" "),s("div",{staticStyle:{width:"20%"}},[t._v(t._s(e.hotsale?"是":"否"))])])})],2),t._v(" "),t.showModel?s("model",{attrs:{maskPaddingLr:"10"},on:{close:t.closeEditor}},[s("div",{staticClass:"editor",attrs:{slot:"content"},slot:"content"},[s("mt-button",{directives:[{name:"show",rawName:"v-show",value:t.activeGoods.name,expression:"activeGoods.name"}],staticStyle:{width:"100%"},attrs:{type:"danger"},on:{click:t.delGoods}},[t._v("\r\n        删除菜品\r\n      ")]),t._v(" "),s("div",{staticClass:"form"},[s("mt-field",{attrs:{label:"菜品名",placeholder:"请输入菜品名"},model:{value:t.activeGoods.name,callback:function(e){t.$set(t.activeGoods,"name",e)},expression:"activeGoods.name"}}),t._v(" "),s("mt-field",{attrs:{label:"菜品价格",placeholder:"请输入菜品价格",type:"number"},model:{value:t.activeGoods.price,callback:function(e){t.$set(t.activeGoods,"price",e)},expression:"activeGoods.price"}}),t._v(" "),s("div",{on:{click:t.showCategoryPicker}},[s("mt-field",{attrs:{label:"菜品分类",placeholder:"请选择菜品分类",readonly:!0},model:{value:t.activeGoods.category,callback:function(e){t.$set(t.activeGoods,"category",e)},expression:"activeGoods.category"}})],1),t._v(" "),s("mt-field",{attrs:{label:"是否推荐",readonly:!0}},[s("mt-switch",{model:{value:t.activeGoods.hotsale,callback:function(e){t.$set(t.activeGoods,"hotsale",e)},expression:"activeGoods.hotsale"}})],1)],1),t._v(" "),s("mt-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.submitEdit}},[t._v("\r\n        确认更改\r\n      ")])],1)]):t._e(),t._v(" "),s("mt-popup",{staticClass:"categoryPicker",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.categoryPickerVisible,callback:function(e){t.categoryPickerVisible=e},expression:"categoryPickerVisible"}},[s("mt-picker",{attrs:{slots:t.categoryList},on:{change:t.onCategoryChange}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"caption"},[e("div",{staticClass:"caption__col",staticStyle:{width:"30%"}},[this._v("名称")]),this._v(" "),e("div",{staticClass:"caption__col",staticStyle:{width:"20%"}},[this._v("单价")]),this._v(" "),e("div",{staticClass:"caption__col",staticStyle:{width:"30%"}},[this._v("分类")]),this._v(" "),e("div",{staticClass:"caption__col",staticStyle:{width:"20%"}},[this._v("推荐")])])}]};var Y=s("VU/8")(z,Q,!1,function(t){s("Q+nP")},"data-v-2ab160bf",null).exports;i.default.use(n.a);var j=new n.a({routes:[{path:"/",name:"HelloWorld",component:T},{path:"/table:id",name:"tablePage",component:c},{path:"/table:id/index",name:"indexPage",redirect:"/table:id/index/order",component:d,children:[{path:"order",name:"order",component:C},{path:"history",name:"history",component:O},{path:"user",name:"user",component:G}]},{path:"/kitchen",name:"kitchenPage",component:T},{path:"/admin",name:"adminPage",component:Y}]}),W=(s("sVYa"),s("d8/S"),s("NYxO"));i.default.use(q.a);var X=q.a.MessageBox;i.default.prototype.$msgbox=X,i.default.prototype.$alert=X.alert,i.default.prototype.$confirm=X.confirm,i.default.prototype.$prompt=X.prompt,i.default.use(W.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:j,components:{App:a},template:"<App/>"})},OqI9:function(t,e){},"Q+nP":function(t,e){},XwEJ:function(t,e){},"d8/S":function(t,e){},dycy:function(t,e){},gP1R:function(t,e){},pHqA:function(t,e){},zb0s:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d9393728c9292d9621c3.js.map