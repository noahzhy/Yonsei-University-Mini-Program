// pages/point/point.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '课程评价，然后考试内容什么的剧透啊，或者出勤方式提及一下，或者什么其他的相关内容。总之这仅仅只是一段示例文字。',
    stars: ''
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
      // url: '../logs/logs',
      url: '../comment/comment',
    })

    // wx.showToast()
  },
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