// pages/comment/comment.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    grade:[
      { id: 0, check: false, txt: "A/A+" },
      { id: 1, check: true, txt: "B/B+" },
      { id: 2, check: false, txt: "C/C+" },
      { id: 3, check: false, txt: "D/D+" },
      { id: 4, check: false, txt: "F" }
    ],
    attend:[
      { id: 10, check: false, txt: "点名" },
      { id: 11, check: true, txt: "电子出勤" },
      { id: 12, check: false, txt: "签名" },
      { id: 13, check: false, txt: "指定座位" },
      { id: 14, check: false, txt: "网课" },
      { id: 15, check: false, txt: "答题出勤" },
      { id: 16, check: false, txt: "混用" },
      { id: 17, check: false, txt: "无" }
    ],
    homework:[
      { id: 20, check: false, txt: "很多" },
      { id: 21, check: true, txt: "普通" },
      { id: 22, check: false, txt: "无" }
    ],
    group:[
      { id: 30, check: false, txt: "很多" },
      { id: 31, check: true, txt: "普通" },
      { id: 32, check: false, txt: "无" }
    ],
    exam:[
      { id: 40, check: false, txt: "四次" },
      { id: 41, check: false, txt: "三次" },
      { id: 42, check: true, txt: "两次" },
      { id: 43, check: false, txt: "一次" },
      { id: 44, check: false, txt: "无" },
      { id: 45, check: false, txt: "每章节一次" },
      { id: 46, check: false, txt: "报告书代替" },
      { id: 47, check: false, txt: "发表代替" }
    ],
    point:[
      { id: 50, check: false, txt: "1分" },
      { id: 51, check: false, txt: "2分" },
      { id: 52, check: false, txt: "3分" },
      { id: 51, check: true, txt: "4分" },
      { id: 52, check: false, txt: "5分" }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  addNewFinish (){

    wx.navigateBack({
      delta: 1
    })
    
    wx.showToast({
      title: '提交成功',
      icon: 'success'
    })
  }
})