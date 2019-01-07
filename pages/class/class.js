// pages/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [
      { id: 0, title: "고급한국어 : 조성문", star: 4, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 1, title: "test2-title : test2", star: 3, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 2, title: "test3-title : test3", star: 2, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 3, title: "test4-title : test4", star: 4, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 4, title: "test5-title : test5", star: 5, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' }
    ],




    stars: ['5','4','3']
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
  //以下代码是由 张昊宇 写的
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

  toPoint(){
    wx.navigateTo({
      url: '../point/point',
    })
  },
})