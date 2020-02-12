// pages/ask/ask.js
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

  // login(r) {
  //   var that = this;
  //   wx.getSetting({
  //     success: function (res) {
  //       if (res.authSetting['scope.userInfo']) {
  //         //授权了
  //         console.log("//授权了");
  //         console.log(r);
  //         console.log("//授权了 end");
  //         wx.setStorageSync('userInfo', r.detail.userInfo);
  //         // that.addQuestion(r);

  //       } else {
  //         //未授权
  //         console.log("//未授权");
  //         console.log(r);
  //       }
  //     }
  //   })
  // },

  addQuestion: function(e) {
    console.log(e)
    var first_post = true;
    if (e.detail.value.msg.length <= 10) {
      this.setData({
        hidden: false,
      });
    } else {
      this.setData({
        hidden: true,
      });

      if (first_post) {
        first_post = false;

        var question = new app.globalData.AV.Object('question');
        question.set("openid", wx.getStorageSync('openid'));
        question.set("title", e.detail.value.title);
        question.set("content", e.detail.value.msg);

        const value = wx.getStorageSync('userInfo');
        console.log(value);
        question.set("wx_id",value.nickName);
        
        question.save().then(res => {
          console.log(">>>res>>>")
          console.log(res);

          //通知 question 页面更新这节课的数据
          var pages = getCurrentPages();
          if (pages.length > 1) {
            //上一个页面实例对象
            var prePage = pages[pages.length - 2];
            //关键在这里
            prePage.change_data(res);
          }

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