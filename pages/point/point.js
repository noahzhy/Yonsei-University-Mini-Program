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
    classData: { title:"고급한국어 : 조성문", star:4.6, ch_name: "高级韩国语", grade: "基本A+", attend: "网课", homework: "一次", group: "无", exam: "两次", label:["外专","语言","核教"]}

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

  },

  toLabel() {
    wx.showModal({
      title: '详细说明',
      content: "语言：全球语言与文化领域\n未创：未来产业与创业领域\n科技：科学与技术领域\n人文：人文与艺术领域\n社会：社会与世界领域\n外专：外国人专用课\n古阅：古典阅读领域\n核教：核心教养\n专比：专业必修\n教必：教养必修\n软件：软件领域",
      confirmColor: "#004483",
      success: function (res) {
        
        if (res.confirm) {
          console.log('确定')
        } else if (res.cancel) {
          console.log('取消')
        }
      }
    })
  }
})