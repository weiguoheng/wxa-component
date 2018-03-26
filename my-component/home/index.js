const app = getApp();
Component({
	options: {
		multipleSlots: true // 在组件定义时的选项中启用多slot支持
	},
	properties: {
		homeContent: String
	},
	attached() {
		this.getUserInfo();
	},

	methods: {
		getUserInfo() {
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo;
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					});
				}
			});
		}
	}
});
