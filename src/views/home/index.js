let $ = wx.MinQuery("home");
let Util = require("../../public/js/comm/Utilities");
let Swiper = require("../../public/comm/swiper/swiper");
let _page = $('page');
let mySwiper = null;

$(function() {
	$('.navlink').bind('tap', function(e) {
		let _link = e.data('link');
		$.navigateTo(_link);
	});
	$("#mySwiper").bind("touchstart", function(e) {
		mySwiper.touchstart(e)
	}).bind("touchmove", function(e) {
		mySwiper.touchmove(e)
	}).bind("touchend", function(e) {
		mySwiper.touchend(e)
	});
	/**
	 * 生命周期函数--监听页面加载
	 */
	_page.on("load", function(e) {
			mySwiper = new Swiper({
				animationViewName: 'animationData',
				slideLength: 3,
				initialSlide: 0,
				timingFunction:"linear",
				//autoplay:8000
			});
		$('app').trigger('login',{call: function(res){
			console.log(res);
		  }},function(res){}).data('userInfo')
			
		})
		/**
		 * 生命周期函数--监听页面显示
		 */
		.on("show", function(e) {
	
		})
		/**
		 * 生命周期函数--监听页面隐藏
		 */
		.on("hide", function(e) { });
	
});