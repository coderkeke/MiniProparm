// components/my-cpn/my-cpn.js
Component({
  options:{
    multipleSlots:true
  },


  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '我是默认的标题',
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },

  externalClasses: ["titleclass"],

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement(event) {
      this.triggerEvent("increment", event, {})
      this.setData({
        counter: this.data.counter += 1
      })
    }
  }
})