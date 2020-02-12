// pages/opinion/opinion.js
const app = getApp();
Page({
  data: {
    hidden: true,
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

  addNewOpinion(e){
    var first_post = true;
    if (e.detail.value.msg.length <= 10) {
      this.setData({
        hidden: false,
      });
    }else {
      this.setData({
        hidden: true,
      });

      if (first_post) {
        first_post = false;

        var opinion = new app.globalData.AV.Object('opinion');
        opinion.set("openid", wx.getStorageSync('openid'));
        opinion.set("title", e.detail.value.title);
        opinion.set("content", e.detail.value.msg);

        opinion.save().then(res => {
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