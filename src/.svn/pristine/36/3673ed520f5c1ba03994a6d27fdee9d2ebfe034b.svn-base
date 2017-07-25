let $ = wx.MinQuery("users");
let Util = require("../../public/js/comm/Utilities");
let Vali = require("../../public/js/comm/validate");
let Cookie = require("../../public/js/comm/wxCookie");
//console.log(Util)
let _page = $('page');
let testPwd = new Vali({
	"password": {
		"required": true,
		"minlength": 4,
		"maxlength": 44
	},
}, {
	"password": {
		"required": '请输入密码'
	},
});
$(function() {
	$('.navlink').bind('tap', function(e) {
		let _link = e.data('link');
		$.navigateTo(_link);
	});
	$('#formSubmit').bind('submit', function(e) {
		if (!testPwd.checkForm(e)) {
			const error = testPwd.errorList;
			if (error && error.length > 0) {
				$.showModal({
					title: '友情提示',
					content: `${error[0].msg}`,
					showCancel: !1,
				})
			}
			return false;
		}

	});
	/**
	 * 生命周期函数--监听页面加载
	 */
	_page.on("load", function(e) {

		})
		/**
		 * 生命周期函数--监听页面显示
		 */
		.on("show", function(e) {


		})
		/**
		 * 生命周期函数--监听页面隐藏
		 */
		.on("hide", function(e) {

		})
});