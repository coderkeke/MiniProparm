// pages/home/home.js
Page({
  data:{
    name:"Coderkeke",
    age:18,
    students:[
      {id:110,name:'小明',age:12},
      {id:111,name:'效力',age:23},
      {id:112,name:'下手',age:31}
    ],
    counter:0
  },

  handleBtnClick(){
    this.setData({
      counter:this.data.counter +1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})