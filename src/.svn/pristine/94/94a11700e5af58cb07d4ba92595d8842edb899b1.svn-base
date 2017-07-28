//index.js
//获取应用实例
/*
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
}) this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
*/





let $ = wx.MinQuery("logs");
let Util = require("../../public/js/comm/Utilities");
let _page = $('page');

$(function () {
    $('.navlink').bind('tap', function (e) {
        let _link = e.data('link');
        $.navigateTo(_link);
    });
	$(".checkbox").bind("change",function(e){
		$(this).toggleClass("open");
	})
	/**
	 * 生命周期函数--监听页面加载
	 */
    _page.on("load", function (e) {
		$.setData("logs",(wx.getStorageSync('logs') || []).map(function (log) {
        return Util.format(log,"yyyy-MM-dd hh：mm：ss");
      }));
		$('app').trigger('login',{call: function(res){
			console.log(res,res[0]);
			$.setData("userInfo",res[0]);
		  }},function(res){}).data('userInfo')
		
    })
		/**
		 * 生命周期函数--监听页面显示
		 */
        .on("show", function (e) {
			
		})
		/**
		 * 生命周期函数--监听页面隐藏
		 */
        .on("hide", function (e) { });
});