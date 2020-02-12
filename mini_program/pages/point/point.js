// pages/point/point.js
const app = getApp()
Page({
  data: {
    comment_content: [],
    classData: [],
    course_id:"",
  },

  onLoad: function (options) {
    this.data.course_id = options.course_id;
    console.log("options.course_id"+options.course_id)

    const query = new app.globalData.AV.Query("course");
    query.get(options.course_id).then(res => {
      console.log(res)
      this.data.classData = res;
      this.setData({
        classData: res,
      })
    });

    const query1 = new app.globalData.AV.Query("course_comment");
    var toCourse = app.globalData.AV.Object.createWithoutData('course', this.data.course_id);
    query1.equalTo('course_id', toCourse);
    query1.select(['comment_rate', 'comment_content', 'createdAt']);
    query1.include("course_id");
    query1.descending('createdAt');
    query1.find().then(res => {
      console.log(res)
      this.setData({
        
        comment_content: res.map(comment => Object.assign(comment.toJSON(), {
          createdAt: comment.createdAt.toJSON(),
        })),
      })
    });

  },

  login(r) {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          //授权了
          console.log(r.detail.userInfo);
          wx.setStorageSync('userInfo', r.detail.userInfo);
          that.addNew();

        } else {
          //未授权
          console.log("//未授权");
          console.log(r);
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  //ZHANG HAOYU write these
  addNew(){
    wx.navigateTo({
      url: '../comment/comment?course_id='+this.data.course_id,
    })
  },
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

  updatePoint: function (cid){
    const query = new app.globalData.AV.Query("course");
    query.get(cid).then(res => {
      console.log(res)
      this.data.classData = res;
    });

  },

  toLabel() {
    wx.showModal({
      title: '详细说明',
      content: "语言：全球语言与文化领域\n未创：未来产业与创业领域\n科技：科学与技术领域\n人文：人文与艺术领域\n社会：社会与世界领域\n外专：外国人专用课\n古阅：古典阅读领域\n核教：核心教养\n专比：专业必修\n教必：教养必修\n软件：软件领域",
      confirmColor: "#004483",
      success: function (res) {
        
        if (res.confirm) {
          console.log('确定')
        } else if (res.cancel) {
          console.log('取消')
        }
      }
    })
  },
  
  change_data(p,t){
    this.updatePoint(this.data.course_id);

    var obj = Object();
    obj.comment_rate = p;
    obj.comment_content = t;
    var d = new Date();
    obj.createdAt = d.toJSON();
    this.data.comment_content.unshift(obj);
    this.setData({
      classData: this.data.classData,
      comment_content: this.data.comment_content,
    })
  },

  deleteSth (e){
    console.log(e);
    app.deleteSth("comment", e.currentTarget.id, wx.getStorageSync('admin'));

  },
})