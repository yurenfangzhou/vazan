webpackJsonp([31],{"k/r8":function(i,e){},riY1:function(i,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=a("Xxa5"),s=a.n(t),n=a("exGp"),l=a.n(n),c=a("Hj/8"),_=a("wt7V"),o=a("q0fy"),r=a("GKmE"),u={data:function(){return{ps_rule:[{time:"08:00-22:00",cost:"15"}],waimai_limit_jiner:{value:"",placeholder:"请添加",title:"外卖起送价格"},waimai_limit_juli:{value:"",placeholder:"请添加",title:"配送半径"},waimai_peisong_jiner:{title:"基础配送费",value:"",placeholder:"请输入基础配送费"},waimai_peisong_base_juli:{title:"基础公里数",value:"",placeholder:"请输入基础公里数"},waimai_peisong_base_step:{title:"超过每公里增加",value:"",placeholder:"请输入每公里增加费用"}}},components:{"input-assistor":c.a,"btn-bottom":_.a},methods:{save:function(){var i=this;return l()(s.a.mark(function e(){var a,t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t in a=r.a.cloneDeep(i.$data))n=a[t],a[t]="ps_rule"==t?i.getAdaptRuleStructure(a[t]):"dish_waimai_auto_post"===t?1==n?1:0:Number(n.value);return r.a.showLoading("请稍候"),e.next=5,o.a.saveShopTakeOutConfig(a);case 5:if(!e.sent){e.next=10;break}return e.next=9,i.$messagebox.alert("保存成功");case 9:window.location.reload();case 10:case"end":return e.stop()}},e,i)}))()},getAdaptRuleStructure:function(i){return i.map(function(i){var e=i.time.split(/-/g),a=i.cost,t={};return t.ps_time_jiner=a,t.ps_time_s=e[0],t.ps_time_e=e[1],t})},mappingValue:function(i,e){switch(i){case"配送半径":this.waimai_limit_juli.value=e;break;case"外卖起送价格":this.waimai_limit_jiner.value=e;break;case"基础配送费":this.waimai_peisong_jiner.value=e;break;case"基础公里数":this.waimai_peisong_base_juli.value=e;break;case"超过每公里增加":this.waimai_peisong_base_step.value=e}},removeDate:function(i,e){var a=i;a.splice(e,1),i=a},preInject:function(i,e,a){this.$refs.assistor.open(i,e,a)},addRegular:function(){this.ps_rule.push({time:"08:00-17:00",cost:"5"})},getShopTakeOutConfig:function(){var i=this;return l()(s.a.mark(function e(){var a,t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getShopTakeOutConfig();case 2:if(a=e.sent)for(t in a)n=a[t],console.log(t,999),"ps_rule"==t?i[t]=n.map(function(i){return{time:(i.ps_time_b||"00:00")+"-"+(i.ps_time_e||"00:00"),cost:i.ps_time_jiner}}):"dish_waimai_auto_post"===t?i[t]=1==n:i[t].value=n;case 4:case"end":return e.stop()}},e,i)}))()}},mounted:function(){this.getShopTakeOutConfig()}},p={render:function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"shop-config-take-out"},[a("div",{staticClass:"wrap bg-w f30 c333"},[a("div",{staticClass:"header f fc fj"},[a("div",{staticClass:"title"},[i._v("配送规则")]),i._v(" "),a("div",{staticClass:"btn-add btn-base tc dzicon icon-icon_tianjia1",on:{click:i.addRegular}},[a("span",{staticClass:"ml5"},[i._v("添加")])])]),i._v(" "),a("transition-group",{attrs:{name:"fade-in",mode:"out-in"}},i._l(i.ps_rule,function(e,t){return"00:00-00:00"!==e.time?a("div",{key:t,staticClass:"f fc fj mt30"},[a("div",{staticClass:"title f fc c666"},[a("div",{staticClass:"mr30"},[a("span",{},[i._v("时间:")]),i._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"item.time"}],staticClass:"input-time input boder-bottom-theme-color tc",attrs:{placeholder:"配送时间"},domProps:{value:e.time},on:{input:function(a){a.target.composing||i.$set(e,"time",a.target.value)}}})]),i._v(" "),a("div",[a("span",{},[i._v("配送费:")]),i._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.cost,expression:"item.cost"}],staticClass:"input-cost input boder-bottom-theme-color tc ",attrs:{placeholder:"费用"},domProps:{value:e.cost},on:{input:function(a){a.target.composing||i.$set(e,"cost",a.target.value)}}}),i._v(" "),a("span",{staticClass:"ml5"},[i._v("元")])])]),i._v(" "),a("div",{staticClass:"btn-del btn-base tc dzicon icon-icon_shanchu1",on:{click:function(e){i.removeDate(i.ps_rule,t)}}},[a("span",{staticClass:"ml5"},[i._v("删除")])])]):i._e()}))],1),i._v(" "),a("div",{staticClass:"take-out-cost-wrap bg-w f30 c333 mt20"},[a("div",{staticClass:"title"},[i._v("外卖费用")]),i._v(" "),a("div",{staticClass:"cost-item fc f fj mt40"},[a("span",[i._v(i._s(i.waimai_peisong_jiner.title))]),i._v(" "),a("span",{class:i.waimai_peisong_jiner.value?"c666":"cccc",on:{click:function(e){i.preInject(i.waimai_peisong_jiner.title,i.waimai_peisong_jiner.placeholder,i.waimai_peisong_jiner.value)}}},[i._v("\n        "+i._s(i.waimai_peisong_jiner.value?i.waimai_peisong_jiner.value+"元":i.waimai_peisong_jiner.placeholder)+"\n      ")])]),i._v(" "),a("div",{staticClass:"cost-item fc f fj mt20"},[a("span",[i._v(i._s(i.waimai_peisong_base_juli.title))]),i._v(" "),a("span",{class:i.waimai_peisong_base_juli.value?"c666":"cccc",on:{click:function(e){i.preInject(i.waimai_peisong_base_juli.title,i.waimai_peisong_base_juli.placeholder,i.waimai_peisong_base_juli.value)}}},[i._v("\n        "+i._s(i.waimai_peisong_base_juli.value?i.waimai_peisong_base_juli.value+"公里":i.waimai_peisong_base_juli.placeholder)+"\n      ")])]),i._v(" "),a("div",{staticClass:"cost-item fc f fj mt20"},[a("span",[i._v(i._s(i.waimai_peisong_base_step.title))]),i._v(" "),a("span",{class:i.waimai_peisong_base_step.value?"c666":"cccc",on:{click:function(e){i.preInject(i.waimai_peisong_base_step.title,i.waimai_peisong_base_step.placeholder,i.waimai_peisong_base_step.value)}}},[i._v("\n        "+i._s(i.waimai_peisong_base_step.value?i.waimai_peisong_base_step.value+"元":i.waimai_peisong_base_step.placeholder)+"\n      ")])])]),i._v(" "),a("div",{staticClass:"pl24 bg-w f30 c333 mt20"},[a("div",{staticClass:"config-group f fc fj"},[a("span",{staticClass:"left fs f fv"},[a("div",{staticClass:"f30 w-force lh14"},[i._v(i._s(i.waimai_limit_jiner.title))]),i._v(" "),a("div",{staticClass:"tips w-force2 lh14 f20 theme-color-blue mt10"},[i._v("\n          注意：低于该金额用户无法下单，商家拒绝配送\n        ")])]),i._v(" "),a("div",{staticClass:"c666 fg1 tr lh14",class:i.waimai_limit_jiner.value?"c666":"cccc",on:{click:function(e){i.preInject(i.waimai_limit_jiner.title,i.waimai_limit_jiner.placeholder,i.waimai_limit_jiner.value)}}},[i._v("\n        "+i._s(i.waimai_limit_jiner.value?i.waimai_limit_jiner.value+"元":i.waimai_limit_jiner.placeholder)+"\n      ")])]),i._v(" "),a("div",{staticClass:"config-group f fc fj"},[a("span",{staticClass:"left fs f fv"},[a("div",{staticClass:"f30 w-force lh14"},[i._v(i._s(i.waimai_limit_juli.title))]),i._v(" "),a("div",{staticClass:"tips w-force2 lh14 f20 theme-color-blue mt10"},[i._v("\n          距离大于配送半径(公里)时是否允许下单\n        ")])]),i._v(" "),a("div",{staticClass:"c666 fg1 tr lh14",class:i.waimai_limit_juli.value?"c666":"cccc",on:{click:function(e){i.preInject(i.waimai_limit_juli.title,i.waimai_limit_juli.placeholder,i.waimai_limit_juli.value)}}},[i._v("\n        "+i._s(i.waimai_limit_juli.value?i.waimai_limit_juli.value+"公里":i.waimai_limit_juli.placeholder)+"\n      ")])])]),i._v(" "),a("input-assistor",{ref:"assistor",on:{click:i.mappingValue}}),i._v(" "),a("btn-bottom",{attrs:{isFixed:!0},on:{click:i.save}})],1)},staticRenderFns:[]};var m=a("VU/8")(u,p,!1,function(i){a("k/r8")},null,null);e.default=m.exports}});