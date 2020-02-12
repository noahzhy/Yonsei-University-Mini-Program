// pages/book/book.js
const app = getApp();
Page({
  data: {
    books: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const query = new app.globalData.AV.Query("book");
    query.descending('num_sellers');
    query.limit(50);
    query.find().then(res => {
      console.log(res)
      this.setData({
        books:res,
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

  toSell() {
    wx.showModal({
      title: '卖书流程',
      content: "1.选择目录中你想要卖的书目\n2.在详情页中添加你书的售价\n3.若现有书目中没有你要卖的书，可以点击下方的添加按钮添加书目",
      confirmColor: "#004483",
      cancelText: "添加",
      success: function (res) {
        if (res.confirm) {
          console.log('确定')
        } else if (res.cancel) {
          console.log('添加')
          wx:wx.navigateTo({
            url: '/pages/sell/sell',
          })
        }
      }
    })
  },
  
  toSearch: function(e) {
    wx.navigateTo({
      url: '../search/search?q=book',
    })
  },

  toBookDetail(e) {
    app.toBookDetail(this.data.books,e);
  },

  change_data_by_id(id,sellers,minPrice){
    this.setData({
      books: this.data.books.map(function (obj) {
        if(obj.id == id){
          obj.attributes.num_sellers = sellers;
          obj.attributes.min_price = minPrice;
        }
        return obj;
      }),

    })
    console.log(this.data.books);
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

  toAdd() {
    wx: wx.navigateTo({
      url: '/pages/sell/sell',
    })
  }

})