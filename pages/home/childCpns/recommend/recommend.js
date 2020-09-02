// pages/home/childCpns/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
     /**
      *监听图片加载完
      */
     handleImageLoad(){
        if (!this.data.isLoad) {
            this.setData({
              isLoad:!this.data.isLoad
            })
            this.triggerEvent("imageload")
        }
     }
  }
})