webpackJsonp([15],{UWSw:function(t,s){},snIb:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Xxa5"),n=a.n(e),c=a("exGp"),i=a.n(c),o=a("PKHo"),l=a("q0fy"),r={name:"shopHome",mixins:[o.a],computed:{todayIncomeTotal:function(){return String(this.todayIncome.Total).slice(0,1)},todayOrderTotal:function(){return String(this.todayOrder.Total).slice(0,1)}},data:function(){return{popupVisible:!1,domTitle:"门店",todayIncome:{},allIncome:{},todayOrder:{},StoreId:0,total:{},injectPopup:{}}},methods:{showIncome:function(t){"total"===t?this.injectPopup=this.allIncome:"income"===t?this.injectPopup=this.todayIncome:"order"===t&&(this.injectPopup=this.todayOrder),this.popupVisible=!this.popupVisible},getTodayReport:function(){var t=this;return i()(n.a.mark(function s(){var a;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l.a.getShopTodayReport(t.StoreId);case 2:(a=s.sent)&&(t.todayIncome=a.TodayIncome,t.todayOrder=a.TodayOrder,t.allIncome=a.TotalIncome,t.total=a.Total);case 4:case"end":return s.stop()}},s,t)}))()},tofix:function(t){return t&&Number(t).toFixed(2)}},mounted:function(){this.StoreId=this.$route.params.id,this.getTodayReport()}},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"shop-home"},[a("div",{staticClass:"top cfff rel"},[a("div",{on:{click:function(s){t.showIncome("total")}}},[a("p",{staticClass:"f30 tc"},[t._v("总收入(元)")]),t._v(" "),a("p",{staticClass:"f100 tc mt30 font-alexcheung"},[t._v(t._s(t.tofix(t.total.Income)))])]),t._v(" "),a("i",{staticClass:"dzicon icon-icon_fanhui f40 abs right-arrow"}),t._v(" "),a("div",{staticClass:"detail abs f"},[a("div",{staticClass:"wp50 rel f fv fc jc"},[a("div",{staticClass:"f48 theme-color font-alexcheung"},[t._v("\n          "+t._s(t.todayIncomeTotal)+"\n        ")]),t._v(" "),a("div",{staticClass:"nav f26 c999 f fc",on:{click:function(s){t.showIncome("income")}}},[a("span",[t._v("今日收入(元) ")]),a("i",{staticClass:"dzicon icon-icon_fanhui f40"})]),t._v(" "),a("div",{staticClass:"line abs"})]),t._v(" "),a("div",{staticClass:"wp50 rel f fv fc jc",on:{click:function(s){t.showIncome("order")}}},[a("div",{staticClass:"f48 theme-color font-alexcheung"},[t._v("\n          "+t._s(t.todayOrderTotal)+"\n        ")]),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"f fsa entrance-group mt167 cfff"},[a("div",{staticClass:"entrance entrance1"},[a("p",{staticClass:"f26"},[t._v("总订单数")]),t._v(" "),a("p",{staticClass:"mt23"},[a("span",{staticClass:"f48 font-alexcheung font-sub"},[t._v("\n          "+t._s(t.total.Order)+"\n        ")]),t._v(" "),a("span",{staticClass:"f26 "},[t._v("\n          单\n        ")])])]),t._v(" "),a("div",{staticClass:"entrance entrance2"},[a("p",{staticClass:"f26"},[t._v("打印机数")]),t._v(" "),a("p",{staticClass:"mt23"},[a("span",{staticClass:"f48 font-alexcheung font-sub"},[t._v("\n          "+t._s(t.total.Prnter)+"\n        ")]),t._v(" "),a("span",{staticClass:"f26 "},[t._v("\n          台\n        ")])])]),t._v(" "),a("div",{staticClass:"entrance entrance3"},[a("p",{staticClass:"f26"},[t._v("餐桌数")]),t._v(" "),a("p",{staticClass:"mt23"},[a("span",{staticClass:"f48 font-alexcheung font-sub"},[t._v("\n          "+t._s(t.total.Table)+"\n        ")]),t._v(" "),a("span",{staticClass:"f26 "},[t._v("\n          张\n        ")])])]),t._v(" "),a("div",{staticClass:"entrance entrance4"},[a("p",{staticClass:"f26"},[t._v("商品数")]),t._v(" "),a("p",{staticClass:"mt23"},[a("span",{staticClass:"f48 font-alexcheung font-sub"},[t._v("\n          "+t._s(t.total.Product)+"\n        ")]),t._v(" "),a("span",{staticClass:"f26 "},[t._v("\n          个\n        ")])])])]),t._v(" "),a("mt-popup",{attrs:{position:"right"},model:{value:t.popupVisible,callback:function(s){t.popupVisible=s},expression:"popupVisible"}},[a("div",{staticClass:"income-details"},[a("div",{staticClass:"wrap"},[t.injectPopup.Account?a("mt-cell",{attrs:{title:"余额支付",value:t.injectPopup.Account}}):t._e(),t._v(" "),t.injectPopup.AccountCheckout?a("mt-cell",{attrs:{title:"微信支付",value:t.injectPopup.AccountCheckout}}):t._e(),t._v(" "),t.injectPopup.Wx?a("mt-cell",{attrs:{title:"线下支付",value:t.injectPopup.Wx}}):t._e(),t._v(" "),a("div",{staticClass:"none"},[t.injectPopup.CashDelivery?a("mt-cell",{attrs:{title:"货到支付",value:t.injectPopup.CashDelivery}}):t._e()],1)],1),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"by-hand none mt20"},[t.injectPopup.Accounting?a("mt-cell",{attrs:{title:"手动确认",value:t.injectPopup.Accounting}}):t._e()],1)]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"payment mt20"},[t.injectPopup.WxCheckout?a("mt-cell",{attrs:{title:"微信买单",value:t.injectPopup.WxCheckout}}):t._e(),t._v(" "),a("div",{staticClass:"none"},[t.injectPopup.AccountCheckout?a("mt-cell",{attrs:{title:"余额买单",value:t.injectPopup.AccountCheckout}}):t._e()],1)],1)]),t._v(" "),a("div",{staticClass:"btn-wrap mt40 pw30",on:{click:t.showIncome}},[a("mt-button",{attrs:{size:"large",type:"primary"}},[t._v("收起")])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"nav f26 c999 f fc"},[s("span",[this._v("今日订单(个)")]),s("i",{staticClass:"dzicon icon-icon_fanhui f40"})])}]};var u=a("VU/8")(r,p,!1,function(t){a("UWSw")},null,null);s.default=u.exports}});