// components/k-tab-control/k-tab-control.js
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
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleActive(event) {
      let currentIndex = event.currentTarget.dataset.currentIndex
      this.setData({
        currentIndex
      })
      //发出事件
      this.triggerEvent("tabClick", {
        index: currentIndex
      }, {})
    }
  }
})