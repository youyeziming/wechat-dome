// app.js
App({
  onLaunch(options) {
       // 更新
       if (wx.canIUse('getUpdateManager')){
        const updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate((res) =>{
          // 请求完新版本信息的回调
          console.log(res.hasUpdate)//res.hasUpdate返回boolean类型
          if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
              wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启当前应用？',
                success(res) {
                  if (res.confirm) {
                    // 新的版本已经下载好，调用applyUpdate应用新版本并重启
                    updateManager.applyUpdate()
                  }
                }
              })
            })
            // 新版本下载失败时执行
            updateManager.onUpdateFailed(()=> {
              wx.showModal({
                title: '发现新版本',
                content: '请删除当前小程序，重新搜索打开...',
              })
            })
          }
        })
      }else{
        //如果小程序需要在最新的微信版本体验，如下提示
        wx.showModal({
          title: '更新提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
    // 判断是否由分享进入小程序
   console.log("options",options);

    //检查是否过期
    // wx.checkSession({
    //   success: function (res) {
    //     console.log("处于登录状态");
    //     wx.showToast({
    //       title: '登录成功!',
    //       icon:"none"
    //     })
    //   },
    //   fail: function (res) {
    //     wx.showModal({
    //       title:"登录",
    //       content:"登录失效,是否前往授权登录?",
    //       success(res){
    //         if(res.confirm){
    //           wx.navigateTo({
    //             url: '/pages/login/login',
    //           })
    //         }else if(res.cancel){

    //         }
    //       }
    //     })
    //   }
    // })
    //头部
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top, //胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2; //导航高度
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  onShow(){

   let userInfo =  wx.getStorageSync('userInfo');
    this.globalData.userInfo = userInfo
  },
  globalData: {
    userInfo: null,
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'], //获取顶部的高度
    share: false, //是否是分享
    showMatch:false//解决switchtab无法传参的问题
  },

    			// 判断登录
			checkLogin(){
				let token = wx.getStorageSync("token");
				if(!token){
					// 未登录
					wx.showModal({
						title: '提示',
						content: '需要您进行登录',
						success: function(res) {
							if (res.confirm) {
								wx.navigateTo({
									url:'/pages/login/login',
								})
							};
						}
					});
					return false
				}
			},

})