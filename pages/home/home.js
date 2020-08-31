// pages/home/home.js
Page({
  data: {
    counter: 0
  },
  handleIncrement(e) {
    console.log(e)
    console.log(this.data.counter)
    this.setData({
      counter: this.data.counter + 1
    })
  }
})