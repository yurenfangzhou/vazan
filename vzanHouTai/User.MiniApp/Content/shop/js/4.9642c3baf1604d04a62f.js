webpackJsonp([4],{K4R9:function(t,e,r){r("NA/8"),t.exports=r("FeBl").Number.isNaN},MICi:function(t,e,r){t.exports={default:r("K4R9"),__esModule:!0}},"NA/8":function(t,e,r){var s=r("kM2E");s(s.S,"Number",{isNaN:function(t){return t!=t}})},V3q6:function(t,e){},"dp+b":function(t,e){},gOJN:function(t,e,r){"use strict";var s=r("Xxa5"),n=r.n(s),a=r("exGp"),i=r.n(a),c=(r("q0fy"),{name:"orderItem",props:{orderInfo:{type:Object,default:null},index:Number},data:function(){return{}},computed:{isTakeOut:function(){return this.orderInfo&&"外卖"===this.orderInfo.OrderType}},methods:{select:function(){this.$store.commit("order/selectOrder",this.index)},switchDeskModal:function(){var t=this;return i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("changeTable",t.orderInfo.Id);case 1:case"end":return e.stop()}},e,t)}))()},goDetail:function(){this.$router.push({path:"order_detail?id="+this.orderInfo.Id})},noop:function(){}}}),o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.orderInfo?r("div",{staticClass:"order-item mb20",on:{click:t.goDetail}},[r("div",{staticClass:"f fj mb30"},[r("div",{staticClass:"order-num f fc c333 f30"},[r("i",{staticClass:"dzicon mr20 f40",class:t.orderInfo.isSelect?"theme-color-red icon-icon_yixuan":"cccc icon-icon_weixuan",on:{click:function(e){return e.stopPropagation(),t.select(e)}}}),t._v(" "),r("span",[t._v(t._s(t.orderInfo.OrderNo))])]),t._v(" "),r("span",{staticClass:"theme-color-red f fc"},[t._v(t._s(t.orderInfo.OrderState))])]),t._v(" "),r("div",{staticClass:"detail f28"},[r("div",{staticClass:"group mb20"},[r("span",{staticClass:"c666 mr20 title"},[t._v("下单时间:")]),r("span",{staticClass:"c333"},[t._v(t._s(t.orderInfo.OrderDate))])]),t._v(" "),r("div",{staticClass:"group mb20"},[r("span",{staticClass:"c666 mr20 title"},[t._v("用户名:")]),r("span",{staticClass:"c333 mr10"},[t._v(t._s(t.orderInfo.ReceivingName||t.orderInfo.PickUpName||t.orderInfo.UserName))]),t._v(" "),r("mt-badge",{attrs:{size:"small"}},[t._v(t._s(t.orderInfo.OrderType))])],1),t._v(" "),r("div",{staticClass:"group mb20",on:{click:function(e){return e.stopPropagation(),t.noop(e)}}},[r("span",{staticClass:"c666 mr20 title"},[t._v("订单金额:")]),r("span",{staticClass:"c333 mr10"},[t._v("￥"+t._s(t.orderInfo.PayAmount))])]),t._v(" "),t.isTakeOut?[r("div",{staticClass:"group mb20 f"},[r("span",{staticClass:"c666 mr20 fs title"},[t._v("收货地址:")]),t._v(" "),r("div",{staticClass:"c333 mr10 w500 ellipsis"},[t._v(t._s(t.orderInfo.Address))])]),t._v(" "),r("div",{staticClass:"group mb20"},[r("span",{staticClass:"c666 mr20 title"},[t._v("手机号:")]),r("span",{staticClass:"c333 mr10"},[t._v(t._s(t.orderInfo.ReceivingPhoneNo||t.orderInfo.PickUpPhoneNo))])])]:t._e(),t._v(" "),t.isTakeOut?t._e():[t.orderInfo.Table?r("div",{staticClass:"group mb20",on:{click:function(e){return e.stopPropagation(),t.switchDeskModal(e)}}},[r("span",{staticClass:"c666 mr20 title"},[t._v("桌号:")]),r("span",{staticClass:"c333 mr10"},[t._v("双人桌"+t._s("-"+t.orderInfo.Table)+" "),r("i",{staticClass:"f30 dzicon icon-icon_genghuan theme-color-blue"})])]):t._e()]],2)]):t._e()},staticRenderFns:[]};var l=r("VU/8")(c,o,!1,function(t){r("dp+b")},null,null);e.a=l.exports},iEQH:function(t,e){},lX04:function(t,e,r){"use strict";var s=r("Xxa5"),n=r.n(s),a=r("exGp"),i=r.n(a),c=r("q0fy"),o=r("GKmE");e.a=function(t){var e,r=(e=i()(n.a.mark(function t(e){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=void 0,n=s.$store.getters["order/getSelectedOrderList"],!a(r=n.reduce(function(t,e,r,s){return t+=s.length-1===r?e.Id:e.Id+","},""))){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,c.a.updateOrderStatus(r,e);case 5:if(!t.sent){t.next=10;break}return t.next=9,s.$messagebox.alert("更新成功");case 9:s.resetData().getShopOrderListC();case 10:case"end":return t.stop()}var n},t,this)})),function(t){return e.apply(this,arguments)}),s=this;switch(t){case"全选":s.$store.commit("order/setOrderSelectStatus");break;case"清空":s.$store.commit("order/setOrderSelectStatus","default");break;case"确认":r("confirm");break;case"付款":r("pay");break;case"完成":r("complete");break;case"取消":r("cancel");break;case"删除":r("delete")}function a(t){if(!t)return o.a.toast("您还没选择订单"),!0}}},nPZt:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("MICi"),n=r.n(s),a=r("Xxa5"),i=r.n(a),c=r("exGp"),o=r.n(c),l=r("gOJN"),u=r("xSuN"),d=r("xipm"),f=r("lX04"),p=r("/SDt"),m=r("q0fy"),v=r("GKmE"),h=r("gnfT"),b={components:{"order-item":l.a,"order-bottom-bar":u.a,"null-data":p.a},data:function(){return{orderNum:"",searchOrderList:[],table:{list:[],pageIndex:1,pageSize:40,loadAll:!1},popupVisible:!1,currOrderId:0}},computed:{isAllSelect:function(){return this.searchOrderList.length===this.$store.getters["order/getSelectedOrderList"].length}},methods:{handleChangeTable:function(t){var e=this;return o()(i.a.mark(function r(){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e.currOrderId=t,e.popupVisible=!0;case 2:case"end":return r.stop()}},r,e)}))()},getTableList:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getSpecList.call(t,"getTableList","table.list","table.pageIndex","table.pageSize","table.loadAll");case 2:case"end":return e.stop()}},e,t)}))()},changeTable:function(t){var e=this;return o()(i.a.mark(function r(){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:v.a.msgConfirm("确定要更换桌号？",o()(i.a.mark(function r(){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.updateOrderInnerStatus("Table",e.currOrderId,t);case 2:if(!r.sent){r.next=9;break}return r.next=6,e.$messagebox.alert("操作成功");case 6:e.resetData().search(),e.popupVisible=!1,e.currOrderId=0;case 9:case"end":return r.stop()}},r,e)})));case 1:case"end":return r.stop()}},r,e)}))()},search:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.orderNum&&!n()(t.orderNum)){e.next=2;break}return e.abrupt("return",t.$toast("请输入正确的订单号"));case 2:return v.a.showLoading("搜索中"),e.next=5,t.getShopOrderListC();case 5:case"end":return e.stop()}},e,t)}))()},getShopOrderListC:function(){var t=this;return o()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.getShopOrderList(t.StoreId,{orderNo:t.orderNum});case 2:(r=e.sent)&&(r.page.length>0?(t.searchOrderList=t.searchOrderList.concat(t.setDefaultStatus(r.page)),t.$store.commit("order/injectOrderList",t.searchOrderList)):t.$toast("找不到您的订单"));case 4:case"end":return e.stop()}},e,t)}))()},setDefaultStatus:function(t){for(var e=t.length;e--;)t[e].isSelect=!1;return t},resetData:function(){return this.searchOrderList=[],this}},mounted:function(){this.StoreId=this.$route.query.id,d.a.$on("click-order-bottom-bar",f.a.bind(this)),this.getTableList()},beforeDestroy:function(){d.a.$off("click-order-bottom-bar"),this.$store.commit("order/resetOrderList")}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-search"},[r("div",{staticClass:"fixed w-full pt24 z10 bg-f5 top0 pb24 f30"},[r("div",{staticClass:"mock-search f fc"},[r("i",{staticClass:"dzicon cC5C4CC icon-icon_sousuo f40"}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.orderNum,expression:"orderNum"}],staticClass:"search-input f26 ml10",attrs:{type:"number",placeholder:"请输入订单号"},domProps:{value:t.orderNum},on:{input:function(e){e.target.composing||(t.orderNum=e.target.value)}}}),t._v(" "),r("div",{staticClass:"btn-search f fc jc",on:{click:t.search}},[t._v("\n        搜索\n      ")])])]),t._v(" "),r("div",{staticClass:"mt95"},[t._l(t.searchOrderList,function(e,s){return r("order-item",{key:s,attrs:{index:s,orderInfo:e},on:{changeTable:t.handleChangeTable}})}),t._v(" "),r("order-bottom-bar",{attrs:{isSelect:t.isAllSelect,show:!!t.searchOrderList.length}})],2),t._v(" "),r("null-data",{attrs:{show:!t.searchOrderList.length}}),t._v(" "),r("mt-popup",{model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[r("div",{staticClass:"printer-wrapper pt20"},[r("div",{staticClass:"title lh14 f40 t-b pb20 tc c333 border-bottom"},[t._v("餐桌列表")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.table.list,function(e,s){return r("div",{staticClass:"item f fc c666 f26",on:{click:function(r){t.changeTable(e.Id)}}},[t._v("\n          编号："+t._s(s+1)+" "),r("span",{staticClass:"ml20"},[t._v("名字："+t._s(e.Name))])])}))])])],1)},staticRenderFns:[]};var g=r("VU/8")(b,_,!1,function(t){r("V3q6")},null,null);e.default=g.exports},xSuN:function(t,e,r){"use strict";var s=r("xipm"),n={name:"orderBottomBar",props:{show:Boolean,isSelect:Boolean},data:function(){return{showMoreSettings:!1,selectAll:this.isSelect}},watch:{isSelect:function(t){this.selectAll=t}},methods:{switchSelect:function(){this.selectAll=!this.selectAll;var t=this.selectAll?"全选":"清空";this.onClickAfter(t)},showMore:function(){this.showMoreSettings=!this.showMoreSettings},onClickAfter:function(t){"全选"!=t&&"清空"!=t?this.$messagebox.confirm("确认要更新订单状态吗？").then(function(e){"confirm"===e&&s.a.$emit("click-order-bottom-bar",t)},function(t){}):s.a.$emit("click-order-bottom-bar",t),this.showMoreSettings=!1}}},a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.show?r("div",{staticClass:"order-bottom-bar c333 f fj fc fixed bg-w z10"},[r("div",{staticClass:"btn-select-all f fc f30"},[r("i",{staticClass:"dzicon f40 mr20",class:t.selectAll?"theme-color-red icon-icon_yixuan":"icon-icon_weixuan cccc",on:{click:t.switchSelect}}),r("span",[t._v("全选")])]),t._v(" "),r("div",{staticClass:"action-list f fc f26"},[r("span",{staticClass:"mr24 rel"},[r("span",{on:{click:t.showMore}},[t._v("更多")]),t._v(" "),r("transition",{attrs:{name:"fade-in"}},[t.showMoreSettings?r("div",{staticClass:"settings abs cfff f arrow_bottom"},[r("div",{staticClass:"f fc f26 settings-item rel",on:{click:function(e){t.onClickAfter("取消")}}},[r("div",{staticClass:"fs"},[t._v("取消")]),t._v(" "),r("div",{staticClass:"line abs"})]),t._v(" "),r("div",{staticClass:"f fc f26 settings-item rel",on:{click:function(e){t.onClickAfter("删除")}}},[r("div",{staticClass:"fs"},[t._v("删除")])])]):t._e()])],1),t._v(" "),r("div",{staticClass:"btn-base mr24 theme-color-blue border-blue tc",on:{click:function(e){t.onClickAfter("确认")}}},[t._v("\n      确认\n    ")]),t._v(" "),r("div",{staticClass:"btn-base mr24 theme-color-light-red  border-light-red tc",on:{click:function(e){t.onClickAfter("付款")}}},[t._v("\n      付款\n    ")]),t._v(" "),r("div",{staticClass:"btn-base mr24 theme-color-orange  border-orange tc",on:{click:function(e){t.onClickAfter("完成")}}},[t._v("\n      完成\n    ")])])]):t._e()},staticRenderFns:[]};var i=r("VU/8")(n,a,!1,function(t){r("iEQH")},null,null);e.a=i.exports}});