//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content: [
      { id: 0, title: "고급한국어 : 조성문", star: 4, time: "2018.12.25", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 1, title: "test2-title : test2", star: 3, time: "2018.12.25", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 2, title: "test3-title : test3", star: 2, time: "2018.12.25", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 3, title: "test4-title : test4", star: 4, time: "2018.12.25", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 4, title: "test5-title : test5", star: 5, time: "2018.12.25", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' }
    ],
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
    
  },

  toClass(){
    wx.switchTab({
      url: '../class/class',
    })
  },
  toBook(){
    wx.switchTab({
      url: '../book/book',
    }) 
  },
  toRule() {
    wx.navigateTo({
      url: '../rule/rule',
    })
  },




})



