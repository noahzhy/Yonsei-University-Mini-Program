// pages/sell/sell.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    bookInfo:{},

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

  addNewBook(e) {
    var first_post = true;
    if (e.detail.value.course.length == 0 && e.detail.value.name.length == 0) {
      this.setData({
        hidden: false,
      });
    } else {
      this.setData({
        hidden: true,
      });

      if (first_post) {
        first_post = false;

        var book = new app.globalData.AV.Object('book');
        book.set("name", e.detail.value.name);
        book.set("course", e.detail.value.course);
        book.set("min_price", null);

        book.save().then(res => {

          //通知 book 页面添加这本书的数据
          var pages = getCurrentPages();
          if (pages.length > 1) {
            //上一个页面实例对象
            var prePage = pages[pages.length - 2];
            //关键在这里
            prePage.onLoad();
          }

          console.log(res);
          wx.navigateBack({
            delta: 1
          })
          wx.showToast({
            title: '提交成功',
            icon: 'success'
          })

        });

        first_post = true;
      }
    }
  }

})