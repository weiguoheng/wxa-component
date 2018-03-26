Component({
	properties: {
		textHide: Number
	},
	attached() {
		this.getPhoneInfo();
	},
	methods: {
		getPhoneInfo() {
			const res = wx.getSystemInfoSync();
			const windowWidth = res.windowWidth;
			const windowHeight = res.windowHeight;
			this.setData({
				windowWidth: windowWidth,
				windowHeight: windowHeight
			});
		}
	}
});
