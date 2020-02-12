// pages/class.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_comment: [],
    rankBy: [{ id: 1, tx: "按时间", check: true }, { id: 2, tx: "按评分", check: false }],
    pre_rankBy:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const query = new app.globalData.AV.Query("course_comment");

    if (this.data.rankBy[0].check){
      query.descending('createdAt');
    }
    if (this.data.rankBy[1].check){
      query.descending('comment_rate');
    }

    query.limit(50);
    query.include('course_id');
    query.find().then( res => {
      console.log(res);
      this.setData({
        course_comment: res.map(comment => Object.assign(comment.toJSON(), {
          createdAt: comment.createdAt.toJSON(),
        })),
      })
    });

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
    // this.onLoad();

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

  toPoint:function(e){
    console.log("id>>>"+e.currentTarget.id);
    wx.navigateTo({
      url: '../point/point?course_id=' + e.currentTarget.id,
    })
  },

  toSearch: function (e) {
    wx.navigateTo({
      url: '../search/search?q=class',
    })
  },

  rankBy(e){
    if (e.currentTarget.id == 1){
      if (this.data.pre_rankBy != e.currentTarget.id){
        this.setData({
          rankBy: [{ id: 1, tx: "按时间", check: true }, { id: 2, tx: "按评分", check: false }]
        })
        this.onLoad();
      }
      this.data.pre_rankBy = 1;
    }
    if (e.currentTarget.id == 2){
      if (this.data.pre_rankBy != e.currentTarget.id) {
        this.setData({
          rankBy: [{ id: 1, tx: "按时间", check: false }, { id: 2, tx: "按评分", check: true }]
        })
        this.onLoad();
      }
      this.data.pre_rankBy = 2;
    }
  },
  
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.onLoad();
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

})