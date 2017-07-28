let $ = wx.MinQuery("login");
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
		$(".checkbox").addClass("open");
    })
		/**
		 * 生命周期函数--监听页面显示
		 */
        .on("show", function (e) { })
		/**
		 * 生命周期函数--监听页面隐藏
		 */
        .on("hide", function (e) { });
});