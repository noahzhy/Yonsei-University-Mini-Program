//index.js
//获取应用实例
const app = getApp()
// const b = app.globalData.bmob;


Page({
  data: {
    qlist: [],
    books: [],
    course_comment: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    getUserInfoFail: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hiddenBig:false,
    
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {

    const query1 = new app.globalData.AV.Query("book");
    query1.descending('createdAt');
    query1.limit(4);
    query1.find().then(res => {
      console.log(res)
      this.setData({
        books: res,
      })
    });

    const query = new app.globalData.AV.Query("course_comment");
    query.select(["comment_content", "course_id", "comment_rate", "name_prof"]);
    query.include('course_id');
    query.limit(3);
    query.descending('createdAt');
    query.find().then( results => {
      console.log(results)
      this.setData({
        course_comment: results,
      })
    }, function (error) {
    });

    const query2 = new app.globalData.AV.Query("question");
    query2.descending('createdAt');
    query2.limit(3);
    query2.select(['wx_id', 'title', 'content']);
    query2.find().then(res => {
      console.log(res);
      this.setData({
        qlist: res,
      })
    });

  },

  toClass() {
    wx.switchTab({
      url: '../class/class',
    })
  },
  toBook() {
    wx.switchTab({
      url: '../book/book',
    })
  },
  toRule() {
    wx.navigateTo({
      url: '../rule/rule',
    })
  },

  toPoint:function(e) {
    console.log("course_id"+e.currentTarget.id)
    wx.navigateTo({
      url: '../point/point?course_id=' + e.currentTarget.id,
    })
  },

  toQuestionAnswer(e) {
    console.log("answer>>>"+e.currentTarget.id)
    app.toAnswer(this.data.qlist,e);
  },

  toBookDetail(e) {
    app.toBookDetail(this.data.books,e);
  },

  toQuestion() {
    app.toTalk();
  },

  toAnswer() {
    wx.navigateTo({
      url: '../answer/answer',
    })
  },

  toOpinion() {
    wx.navigateTo({
      url: '../opinion/opinion',
    })
  },

  //下拉刷新
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



