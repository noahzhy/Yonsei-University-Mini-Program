// pages/sell/sell.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booksInfo: [
      { id: 0, name: "请选择书名", url: "/images/book-cover.jpg" },
      { id: 1, name: "最新物理学I", url: "/images/book-cover.jpg" },
      { id: 2, name: "最新物理学II", url: "/images/book-cover.jpg" },
      { id: 3, name: "韩中日通用汉字808", url: "/images/book-cover.jpg" },
      { id: 4, name: "离散数学", url: "/images/book-cover.jpg" },
      { id: 999, name: "手动输入", url: "/images/book-cover.jpg" }
    ],
    nowIndex:0,
    price: [
      { id: 0, check: true, price: "1万" },
      { id: 1, check: false, price: "2万" },
      { id: 2, check: false, price: "3万" },
      { id: 3, check: false, price: "4万" },
      { id: 4, check: false, price: "5万" },
      { id: 5, check: false, price: "待议" },
    ],
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
  pickerChange(e) {
    console.log('选的是', this.data.booksInfo[e.detail.value])
    this.setData({
      nowIndex: e.detail.value
    })
  },
  changeColor(e) {
    var that = this
    console.log(">>>" + e.target.id)
    let priceArr = [];
    for (var i = 0; i < that.data.price.length; i++) {
      if (e.target.id == i) {
        priceArr[i] = { id: that.data.price[i].id, check: true, price: that.data.price[i].price }
      } else {
        priceArr[i] = { id: that.data.price[i].id, check: false, price: that.data.price[i].price }
      }
    }
    this.setData({
      price: priceArr
    })   
  }
})