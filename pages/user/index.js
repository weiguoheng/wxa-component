Page({
	data: {
		text_hide: 0
	},
	onLoad() {
		const res = wx.getSystemInfoSync();
		const windowWidth = res.windowWidth;
		const windowHeight = res.windowHeight;
		this.setData({
			windowWidth: windowWidth,
			windowHeight: windowHeight
		});
	},
	// 隐藏文字
	hide_text() {
		const text_hide = this.data.text_hide ? 0 : 1;
		this.setData({ text_hide: text_hide });
	}
});
