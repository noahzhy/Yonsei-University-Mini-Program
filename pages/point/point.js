// pages/point/point.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [
      { id: 0, star: 5, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 1, star: 4, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 2, star: 3, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 3, star: 4, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' },
      { id: 4, star: 5, time: "2018年12月25日", txt: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。' }
    ],
    classData: { title:"고급한국어 : 조성문", star:4.6, ch_name: "高级韩国语", grade: "基本A+", attend: "网课", homework: "一次", group: "无", exam: "两次"}

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
  addNew(){
    wx.navigateTo({
      url: '../comment/comment',
    })

    // wx.showToast()
  },
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

  }
})