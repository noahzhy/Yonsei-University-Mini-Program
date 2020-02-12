// pages/user/user.js
const app = getApp()

Page({
  data: {
    books:[],
    qlist:[],
    bookHidden:true,
    questionHidden:true,
    noneHidden:true,
  },
  onLoad: function () {
    var key = wx.getStorageSync('openid');
    const query = new app.globalData.AV.Query("book_seller");
    query.descending('createdAt');
    query.limit(50);
    query.equalTo('openid',key)
    query.include('book_id')
    query.select(['openid', 'book_id','price']);
    query.find().then(res => {
      if (res.length == 0) {
        this.setData({ bookHidden: true })
      } else {
        console.log(res);
        this.setData({
          bookHidden: false,
          books: res,
        })
      }
    });

    const query1 = new app.globalData.AV.Query("question");
    query1.descending('createdAt');
    query1.limit(50);
    query1.equalTo('openid', key);
    query1.select(['openid', 'objectId', 'content', 'title']);
    query1.find().then(res => {
      console.log(res);
      if (res.length == 0) {
        this.setData({ questionHidden: true })
      } else {
        console.log(res);
        this.setData({
          questionHidden: false,
          qlist: res,
        })
      }
    });
  },


  deleteBook(e){
    var that = this;
    console.log(e.currentTarget.id);
    var seller = app.globalData.AV.Object.createWithoutData('book_seller', e.currentTarget.id);
    wx.showModal({
      title: '取消报价',
      content: '您确定要取消这本书的报价吗？',
      confirmColor: "#004483",
      success:function(res) {
        if(res.confirm) {
          seller.destroy().then(function (success) {
            wx.showToast({
              title: '取消报价成功',
              icon: 'success'
            })
          }, function (error) {
            // 删除失败
          });
          that.onLoad();
        }
      }
    })
  },

  deleteQuestion(e) {
    var that = this;
    console.log(e.currentTarget.id);
    var seller = app.globalData.AV.Object.createWithoutData('question', e.currentTarget.id);
    wx.showModal({
      title: '删除问题',
      content: '您确定要删除这个问题吗？',
      confirmColor: "#004483",
      success: function (res) {
        if (res.confirm) {
          seller.destroy().then(function (success) {
            wx.showToast({
              title: '删除问题成功',
              icon: 'success'
            })
          }, function (error) {
            // 删除失败
          });
          that.onLoad();
        }
      }
    })
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
