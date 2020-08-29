// pages/home/home.js
const app = getApp();
console.log(app)

Page({
  data: {
    name: "Coderkeke",
    age: 18,
    students: [{
        id: 110,
        name: '小明',
        age: 12
      },
      {
        id: 111,
        name: '效力',
        age: 23
      },
      {
        id: 112,
        name: '下手',
        age: 31
      }
    ],
    counter: 0,
    list:[]
  },

  handleBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  /**
   * 获取用户信息
   */
  handleGetUserInfo(event) {
    console.log(event)
  },

  /**
   * 生命周期
   */
  /**页面初次渲染完成时 */
  onReady() {

  },
  /**页面被加载出来 */
  onLoad() {
    wx.request({
      url: 'http://123.207.32.32:8000/api/x6/home/multidata',
      success:(res) => {
        console.log(res)
        const data = res.data.data.recommend.list;
        this.setData({
          list:data
        })
      }
    })
  },
  /**页面显示时 */
  onShow() {

  },
  /**页面隐藏时 */
  onHide() {

  },
  /** */
  onUnload() {

  },

  //监听事件滚动
  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){
    console.log("页面滚动到底部")
  },
  onPullDownRefresh(){
    console.log("下拉刷新")
  },
  

})