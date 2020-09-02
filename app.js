const TOKEN = "token"

App({

  globalData: {
    token: ""
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const token = wx.getStorageSync(TOKEN)
    if (token) {


    } else {
      this.login()
    }


  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },

  login() {
    /**登录操作 code只有5分钟有效期*/
    wx.login({
      success: res => {
        const code = res.code;
        // wx.request({
        //   url: 'http://123.207.32.32:3000/login',
        //   method: "POST",
        //   data: {
        //     code
        //   },
        //   success: res => {
        //     const token = res.data.token
        //     this.globalData.token = token
        //     wx.setStorageSync(TOKEN, token)
        //   }
        // })

      }
    })
  }
})