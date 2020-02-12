// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whichOne: "class",
    barMsg:"输入关键字搜索",
    bookHidden: true,
    classHidden: true,
    questionHidden: true,
    noneHidden: true,
    books:[],
    classes:[],
    questions:[],
    key:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.q == "class"){
      this.data.whichOne = "class"
    } else if (options.q == "book") {
      this.data.whichOne = "book"
    } else if (options.q == "question") {
      this.data.whichOne = "question"
    }
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

  bindKeyInput(e){
    console.log(e)
    this.data.key = e.detail.value;
  },

  doSearch:function(e) {
    console.log(e)
    var key = this.data.key;
    console.log("key>>>"+key)
    if (key.length == 0) {
      wx.showToast({
        title: '请输入关键字',     //提示文字
        duration: 2000,           //显示时长
        icon: 'none',             //图标，支持"success"、"loading"  
      })
    }else {

      if(this.data.whichOne == "class"){

        var q1 = new app.globalData.AV.Query("course")
        q1.contains('name', key);
        var q2 = new app.globalData.AV.Query("course");
        q2.contains('Chinese_name', key);
        const query = new app.globalData.AV.Query.or(q1, q2);
        query.select(["name", "Chinese_name", "prof", "rate", "objectId"]);
        query.descending('rate');
        query.limit(50);
        query.find().then(res => {
          console.log(res)
          if (res.length == 0) {
            this.setData({
              classHidden: false,
              classes: res,
              noneHidden: false,
            })
          } else {
            this.setData({
              classHidden: false,
              classes: res,
            })
          }
        });

      } else if (this.data.whichOne == "book") {

        var q1 = new app.globalData.AV.Query("book")
        q1.contains('name', key);
        var q2 = new app.globalData.AV.Query("book");
        q2.contains('course', key);
        const query = new app.globalData.AV.Query.or(q1,q2);
        query.select(["name", "course", "num_sellers", "min_price", "image"]);
        query.descending('num_sellers');
        query.limit(50);
        query.find().then(res => {
          console.log(res)
          if(res.length==0){
            this.setData({
              bookHidden: false,
              books: res,
              noneHidden: false,
            })
          } else {
            this.setData({
              bookHidden: false,
              books: res,
            })
          }
        });

      } else if (this.data.whichOne == "question") {

        var q1 = new app.globalData.AV.Query("question")
        q1.contains('title', key);
        var q2 = new app.globalData.AV.Query("question");
        q2.contains('content', key);
        const query = new app.globalData.AV.Query.or(q1, q2);
        query.select(["title", "content"]);
        query.descending('createdAt');
        query.limit(50);
        query.find().then(res => {
          console.log(res)
          if (res.length == 0) {
            this.setData({
              questionHidden: false,
              questions: res,
              noneHidden: false,
            })
          } else {
            this.setData({
              questionHidden: false,
              questions: res,
            })
          }
        });
      }


    }
  },

  toPoint: function (e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../point/point?course_id=' + e.currentTarget.id,
    })
  },

  toBookDetail: function (e) {
    app.toBookDetail(this.data.books, e);
  },

  toAnswer: function (e) {
    app.toAnswer(this.data.questions, e);
  }

})