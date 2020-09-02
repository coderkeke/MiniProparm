// pages/home/home.js

import {
  getMultiData,
  getGoodsData
} from "../../service/home.js"

const TOP_DISTANCE = 500;


Page({
  data: {
    banners: [],
    recommend: [],
    tabControl: ["流行", "新款", "精选"],
    goods: {
      "pop": {
        page: 0,
        list: []
      },
      "new": {
        page: 0,
        list: []
      },
      "sell": {
        page: 0,
        list: []
      }
    },
    currentType: "pop",
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },

  onLoad() {
    this.getBannersAndRecommend()
    this.getGoods("pop")
    this.getGoods("new")
    this.getGoods("sell")
  },

  /** ----------------事件监听----------------*/
  //当前点击的tab按钮
  handleTabClick(e) {
    const index = e.detail.index
    let type = this.setCurrentType(index)
    let page = this.data.goods[type].page
    if (page == 0) {
      this.getGoods()
    }
  },

  //获取当前类型
  setCurrentType(index) {
    let type;
    switch (index) {
      case 0:
        type = "pop";
        break;
      case 1:
        type = "new";
        break;
      case 2:
        type = "sell";
        break;
    }
    this.setData({
      currentType: type
    })
    return type
  },

  //页面滚动到底部
  onReachBottom() {
    this.getGoods()
  },

  /**
   *监听页面滚动
   */
  onPageScroll(options) {
    const scrollTop = options.scrollTop
    console.log(scrollTop);
    const flag = scrollTop > TOP_DISTANCE
    if (flag != this.data.showBackTop) {
      this.setData({
        showBackTop: flag
      })
    }

    const flag2 = scrollTop >= this.data.tabScrollTop
    if (flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  },

  /**
   *图片加载完成
   */
  handleImageLoad() {
    wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect => {
      console.log(rect);
      this.setData({
        tabScrollTop: rect.top
      })
    }).exec()
  },


  /** ----------------网络请求----------------*/
  //获取goods数据
  async getGoods(type1) {
    let type = type1 || this.data.currentType;
    let page = this.data.goods[type].page + 1
    let result = await getGoodsData({
      type,
      page
    })
    console.log(result)
    let list = result.data.data.list
    let oldList = this.data.goods[type].list
    oldList.push(...list)
    const typeKey = `goods.${type}.list`
    const pageKey = `goods.${type}.page`
    this.setData({
      [typeKey]: oldList,
      [pageKey]: page
    })
  },

  //获取轮播图和推荐数据
  async getBannersAndRecommend() {
    let result = await getMultiData();
    const banners = result.data.data.banner.list
    const recommend = result.data.data.recommend.list
    this.setData({
      banners,
      recommend
    })
  }
})