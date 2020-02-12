// pages/answer/answer.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongMsg: "回复内容不可少于2个字！",
    hidden: true,
    qinfo: {},
    alist: [],
    txvalue: '',
    question_id: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.question_id);
    this.data.question_id = options.question_id;

    const query1 = new app.globalData.AV.Query("question_answer");
    var toQuestion = app.globalData.AV.Object.createWithoutData('question', options.question_id);
    query1.equalTo('question_id', toQuestion);
    query1.select(['answer', 'wx_id', 'createdAt']);
    query1.include("question_id");
    query1.ascending('createdAt');
    query1.find().then(res => {
      console.log(res)
      this.setData({
        qinfo: { id: options.question_id, title: options.title, content: options.content, wx_id: options.wx_id, time: options.time },
        alist: res.map(a => Object.assign(a.toJSON(), {
          createdAt: a.createdAt.toJSON(),
        })),
      })
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  login(r) {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          //授权了
          console.log(r.detail.userInfo);
          wx.setStorageSync('userInfo', r.detail.userInfo);
          // that.addNewAnswer();

        } else {
          //未授权
          console.log("//未授权");
          console.log(r);
        }
      }
    })
  },

  deleteSth(e){
    console.log(e);
    var id = e.currentTarget.id;
    app.deleteSth("answer", id, wx.getStorageSync('admin'));
    // this.onLoad();
  },

  addNewAnswer: function(e) {
    var first_post = true;
    var obj = e.detail.value
    var msg = obj.answer
    
    try {
      const value = wx.getStorageSync('userInfo');
      if (value) {
        obj.wx_id = value.nickName;
      }
    } catch (e) {
      obj.wx_id = '匿名';
    }

    obj.id = this.data.alist.length + 1
    var d = new Date();
    obj.createdAt = d.toJSON();
    if (msg.length < 2) {
      this.setData({
        hidden: false,
      })
    } else {
      if (first_post) {
        first_post = false;

        var question_answer = app.globalData.AV.Object.extend('question_answer');
        var answer = new question_answer();

        answer.set("openid", wx.getStorageSync('openid'));
        var poid = app.globalData.AV.Object.createWithoutData('question', this.data.question_id);

        answer.set('question_id', poid);
        answer.set("wx_id", obj.wx_id);
        answer.set("answer", msg);

        answer.save().then(res => {
          console.log(res);
          // this.data.alist.push({ attributes: obj });

          this.data.alist.push(obj)
          var newOne = this.data.alist
          this.setData({
            hidden: true,
            alist: newOne,
            txvalue: '',
          })

          wx.showToast({
            title: '提交成功',
            icon: 'success'
          })

        }).catch(err => {
          console.log(err);
        })

        first_post = true;
      }
    }
  }
})