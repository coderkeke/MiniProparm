// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePathList: []
  },
  handleChooseAlbum() {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const path = res.tempFilePaths
        this.setData({
          imagePathList: path
        })
      },
    })
  }

})