// pages/getsmoney/getsmoney.js
var pages = require('../../utils/pageRequest.js')
var tools = require('../../utils/tools.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
	data: {
		userLogo: [],
		isGet: false
	},

  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		var that = this
		console.log('getsmoney', app.globalData.reductionCart.Id, app.globalData.dbOrder)
		pages.GetReductionCard(that, app.globalData.reductionCart.Id, app.globalData.dbOrder, 0)



		setTimeout(function () {
			var coupon = that.data.coupon
			if (coupon != null) {
				setInterval(function () {
					var nowTime = new Date().getTime()
					var endtime = ((new Date(coupon.EndUseTimeStr)).getTime() - nowTime)
					coupon.endtime = tools.formatDuring(endtime)
					that.setData({ coupon: coupon })
				}, 1000)
			}
		}, 1000)


	},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
	onReady: function () {

	},

  /**
   * 生命周期函数--监听页面显示
   */
	onShow: function () {

	},

  /**
   * 生命周期函数--监听页面隐藏
   */
	onHide: function () {

	},

  /**
   * 生命周期函数--监听页面卸载
   */
	onUnload: function () {

	},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
	onPullDownRefresh: function () {

	},

  /**
   * 页面上拉触底事件的处理函数
   */
	onReachBottom: function () {

	},

  /**
   * 用户点击右上角分享
   */
	onShareAppMessage: function () {
		var that = this
		return {
			title: '社交立减金',
			path: '/pages/getsmoney/invitegetsmoney?couponsId=' + app.globalData.reductionCart.Id + '&orderId=' + app.globalData.dbOrder
		}
	}
})