// pages/home/home.js
const app = getApp()


Page({

  handleShowToast(){
    wx.showToast({
      title: '加载中',
      duration:10000,
      icon:"loading"
    })
  },
  onShareAppMessage(options){
    console.log(options)
  }
})