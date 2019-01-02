//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    "stars": '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //以下代码是由 张昊宇 写的
  onShow: function () {
    // 页面显示
    var that = this;
    var renderData = {
      "stars": that.starCount(4.8)
    };
    that.setData(renderData)
  },

  starCount: function (originStars) {
    //计算星星显示需要的数据，用数组stars存储五个值，分别对应每个位置的星星是全星、半星还是空星
    var starNum = originStars * 10 / 10, stars = [], i = 0;
    do {
      if (starNum >= 1) {
        stars[i] = 'full';
      } else if (starNum >= 0.5) {
        stars[i] = 'half';
      } else {
        stars[i] = 'no';
      }
      starNum--;
      i++;
    } while (i < 5)
    return stars;
  },
  formSubmit: function (event) {
    var that = this;
    var renderData = {
      "stars": that.starCount(event.detail.value.input)
    };
    that.setData(renderData);
  }




})



