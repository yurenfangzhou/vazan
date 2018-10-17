webpackJsonp([19],{gS1V:function(t,a){},kQFE:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("Xxa5"),i=e.n(r),o=e("exGp"),s=e.n(o),n=e("PKHo"),d=e("xT6B"),c=e.n(d),l=e("+TmT"),u=e("RROI"),m=e("Zazt"),p=e("1sGI"),v=e.n(p),h=e("GKmE"),f=e("3z2j"),x={mixins:[n.a,f.a],components:{uploader:l.a,error:m.a},data:function(){return{domTitle:"门店编辑",shopName:"",name:"",pwd:"",startDate:"2018-01-01",endDate:"2019-01-01",startDateProxy:"2018/01/01",endDateProxy:"2019/01/01",avatorSrc:"",mode:"create",validation:null,appId:"",StoreId:""}},methods:{submit:function(){if(this.validation=this.createValidator(),this.validation.validate()){if(c.a.differ(this.startDate,this.endDate)<0)return this.$messagebox.alert("到期日期不能小于起始日期");var t={Logo:this.avatorSrc,Name:this.shopName,Login:this.name,PassWord:this.pwd,Begin:c.a.sprit(this.startDate),Expire:c.a.sprit(this.endDate)};switch(this.mode){case"create":this.handleCreate(t);break;case"edit":this.handleEdit(t)}}},handleCreate:function(t){var a=this;return s()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h.a.showLoading("提交中"),e.next=3,u.a.addShop(a.appId,t);case 3:if(!(r=e.sent)){e.next=9;break}return console.log(r),e.next=8,a.$messagebox.alert("新增成功！");case 8:a.$router.go(-1);case 9:case"end":return e.stop()}},e,a)}))()},handleEdit:function(t){var a=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h.a.showLoading("提交中"),e.next=3,u.a.editShop(a.StoreId,t);case 3:if(!e.sent){e.next=8;break}return e.next=7,a.$messagebox.alert("修改成功！");case 7:a.$router.go(-1);case 8:case"end":return e.stop()}},e,a)}))()},createValidator:function(){return new v.a({shopName:this.shopName,name:this.name,avatorSrc:this.avatorSrc},{shopName:"required",name:"required",avatorSrc:"required"},{"required.shopName":"店铺名不能为空","required.name":"登录名不能为空","required.avatorSrc":"头像不能为空"})},openDatePick:function(t){1==t?this.$refs.startDatePicker.open():this.$refs.endDatePicker.open()},confirmStartDate:function(t){this.startDate=c.a.format(t)},confirmEndDate:function(t){this.endDate=c.a.format(t)},handleMode:function(){var t=this.$route.query;if(console.log(t),this.mode=t.mode,"edit"==this.mode)return this.StoreId=t.StoreId,void this.initShopInfo(t.shopInfo);this.appId=t.appId},initShopInfo:function(t){var a=JSON.parse(t);this.shopName=a.Name,this.name=a.Login,this.avatorSrc=a.Logo,this.startDateProxy=a.Begin,this.endDateProxy=a.Expire,this.startDate=c.a.line(a.Begin),this.endDate=c.a.line(a.Expire)},uploadImg:function(){var t=this;return s()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.getUploadedImgs(1);case 2:t.avatorSrc=a.sent[0];case 3:case"end":return a.stop()}},a,t)}))()}},mounted:function(){this.handleMode()}},D={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"edit-shop"},[e("div",{staticClass:"edit-list"},[e("div",{staticClass:"edit-item f30 c333 edit-avator"},[e("mt-cell",{attrs:{title:"头像"}},[e("uploader",{attrs:{uploaderParams:t.uploadConfig},on:{added:t.handleAdded,progress:t.handleProgress,uploaded:t.handleUploaded,error:t.handleError}},[t.avatorSrc?e("img",{directives:[{name:"src",rawName:"v-src",value:t.avatorSrc,expression:"avatorSrc"}],ref:"upload",staticClass:"avator",attrs:{slot:"btn-upload"},on:{click:t.uploadImg},slot:"btn-upload"}):e("div",{ref:"upload",staticClass:"avator f fc jc",attrs:{slot:"btn-upload"},on:{click:t.uploadImg},slot:"btn-upload"},[e("i",{staticClass:"dzicon icon-icon_tianjia- f40"})])])],1),t._v(" "),e("error",{attrs:{validation:t.validation,check:"avatorSrc"}})],1),t._v(" "),e("div",{staticClass:"edit-item f30 c333"},[e("mt-field",{attrs:{label:"门店名称:",placeholder:"请输入门店名称"},model:{value:t.shopName,callback:function(a){t.shopName=a},expression:"shopName"}}),t._v(" "),e("error",{attrs:{validation:t.validation,check:"shopName"}})],1),t._v(" "),e("div",{staticClass:"edit-item f30 c333"},[e("mt-field",{attrs:{label:"登录名:",placeholder:"请输入登录名"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),t._v(" "),e("error",{attrs:{validation:t.validation,check:"name"}})],1),t._v(" "),e("div",{staticClass:"edit-item f30 c333"},[e("mt-field",{attrs:{label:"密码:",placeholder:"请输入密码",type:"password"},model:{value:t.pwd,callback:function(a){t.pwd=a},expression:"pwd"}}),t._v(" "),e("error",{attrs:{validation:t.validation,check:"pwd"}})],1)]),t._v(" "),e("div",{staticClass:"usage-date f30 c333 mt20 bg-w"},[e("div",{staticClass:"pl10"},[t._v("使用期限")]),t._v(" "),e("div",{staticClass:"mt20",on:{click:function(a){t.openDatePick(1)}}},[e("mt-cell",{attrs:{title:"从:"}},[e("div",{staticClass:"f1"},[t._v("\n          "+t._s(t.startDate)+"\n        ")])])],1),t._v(" "),e("div",{staticClass:"mt20",on:{click:function(a){t.openDatePick(2)}}},[e("mt-cell",{attrs:{title:"到:"}},[e("div",{staticClass:"f1"},[t._v("\n          "+t._s(t.endDate)+"\n        ")])])],1)]),t._v(" "),e("div",{staticClass:"btn-box pw30"},[e("mt-button",{attrs:{size:"large",type:"primary"},on:{click:t.submit}},[t._v("提交")])],1),t._v(" "),e("mt-datetime-picker",{ref:"startDatePicker",attrs:{type:"date","year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:t.confirmStartDate},model:{value:t.startDateProxy,callback:function(a){t.startDateProxy=a},expression:"startDateProxy"}}),t._v(" "),e("mt-datetime-picker",{ref:"endDatePicker",attrs:{"year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日",type:"date"},on:{confirm:t.confirmEndDate},model:{value:t.endDateProxy,callback:function(a){t.endDateProxy=a},expression:"endDateProxy"}})],1)},staticRenderFns:[]};var k=e("VU/8")(x,D,!1,function(t){e("gS1V")},null,null);a.default=k.exports}});