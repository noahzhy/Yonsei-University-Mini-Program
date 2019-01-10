// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      { id: 1, cover: "/images/book-cover.jpg", title: "最新物理学I", name: "test1", numbers: 15, minPrice: 10000 },
      { id: 2, cover: "/images/book-cover.jpg", title: "离散数学", name: "test2", numbers: 31, minPrice: 15000 },
      { id: 3, cover: "/images/book-cover.jpg", title: "宏观经济学", name: "test3", numbers: 11, minPrice: 20000 },
      { id: 4, cover: "/images/book-cover.jpg", title: "数值分析", name: "test4", numbers: 21, minPrice: 18000 },
      { id: 5, cover: "/images/book-cover.jpg", title: "微观经济学", name: "test5", numbers: 12, minPrice: 12000 },
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
  toSellDetail() {
    wx.navigateTo({
      url: '/pages/bookDetail/bookDetail',
    })
  },
  toSell() {
    wx.showModal({
      title: '卖书流程',
      content: "1.请先选择目录中你想要卖的书名\n2.在详情页中出价并留下联系方式\n3.如果现有书目中没有你要卖的书，可以点击左侧的添加按钮添加书目",
      confirmColor: "#004483",
      cancelText: "添加",
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