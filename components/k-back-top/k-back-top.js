// components/k-back-top/k-back-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     *点击回首页
     */
    handleBackTop(){
      wx.pageScrollTo({
        duration: 500,
        scrollTop:0
      })
    }
  }
})