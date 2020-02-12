// pages/comment/comment.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    wrongMsg: "详细评价不能少于10个字！",
    grade:[
      { id: 0, check: false, txt: "A/A+" },
      { id: 1, check: true, txt: "B/B+" },
      { id: 2, check: false, txt: "C/C+" },
      { id: 3, check: false, txt: "D/D+" },
      { id: 4, check: false, txt: "F" }
    ],
    attend:[
      { id: 10, check: false, txt: "点名" },
      { id: 11, check: true, txt: "电子出勤" },
      { id: 12, check: false, txt: "签名" },
      { id: 13, check: false, txt: "指定座位" },
      { id: 14, check: false, txt: "网课" },
      { id: 15, check: false, txt: "答题出勤" },
      { id: 16, check: false, txt: "混用" },
      { id: 17, check: false, txt: "无" }
    ],
    homework:[
      { id: 20, check: false, txt: "很多" },
      { id: 21, check: true, txt: "普通" },
      { id: 22, check: false, txt: "无" }
    ],
    group:[
      { id: 30, check: false, txt: "很多" },
      { id: 31, check: true, txt: "普通" },
      { id: 32, check: false, txt: "无" }
    ],
    exam:[
      { id: 40, check: false, txt: "四次" },
      { id: 41, check: false, txt: "三次" },
      { id: 42, check: true, txt: "两次" },
      { id: 43, check: false, txt: "一次" },
      { id: 44, check: false, txt: "无" },
      { id: 45, check: false, txt: "每章节一次" },
      { id: 46, check: false, txt: "报告书代替" },
      { id: 47, check: false, txt: "发表代替" }
    ],
    point:[
      { id: 50, check: false, txt: "1分" },
      { id: 51, check: false, txt: "2分" },
      { id: 52, check: false, txt: "3分" },
      { id: 53, check: true, txt: "4分" },
      { id: 54, check: false, txt: "5分" }
    ],
    pGrade:"B/B+",
    pAttend:"电子出勤",
    pHomework:"普通",
    pGroup:"普通",
    pExam:"两次",
    pPoint:"4分",

    course_id:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(">>>>>comment>>>>>"+options.course_id)
    this.setData({
      course_id : options.course_id,
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
  changeColor(e) {
    var that = this
    console.log(">>>" + e.target.id)
    let gradeArr = [],attendArr = [],homeworkArr = [],groupArr = [],examArr = [],pointArr = [];
    var tmp = Math.floor(e.target.id / 10)
    var mod = e.target.id % 10
    switch (tmp) {
      case 0:
        for (var i = 0; i < that.data.grade.length; i++) {
          if (e.target.id == i) {
            gradeArr[i] = { id: that.data.grade[i].id, check: true, txt: that.data.grade[i].txt }
          } else {
            gradeArr[i] = { id: that.data.grade[i].id, check: false, txt: that.data.grade[i].txt }
          } 
        }
        this.setData({
          grade: gradeArr,
          pGrade: that.data.grade[mod].txt,
        })
        break;
      case 1:
        for (var i = 0; i < that.data.attend.length; i++) {
          if (e.target.id % 10 == i) {
            attendArr[i] = { id: that.data.attend[i].id, check: true, txt: that.data.attend[i].txt }
          } else {
            attendArr[i] = { id: that.data.attend[i].id, check: false, txt: that.data.attend[i].txt }
          }
        }
        this.setData({
          attend: attendArr,
          pAttend: that.data.attend[mod].txt,
        })
        break;
      case 2:
        for (var i = 0; i < that.data.homework.length; i++) {
          if (e.target.id % 20 == i) {
            homeworkArr[i] = { id: that.data.homework[i].id, check: true, txt: that.data.homework[i].txt }
          } else {
            homeworkArr[i] = { id: that.data.homework[i].id, check: false, txt: that.data.homework[i].txt }
          }
        }
        this.setData({
          homework: homeworkArr,
          pHomework : that.data.homework[mod].txt,
        })
        break;
      case 3:
        for (var i = 0; i < that.data.group.length; i++) {
          if (e.target.id % 30 == i) {
            groupArr[i] = { id: that.data.group[i].id, check: true, txt: that.data.group[i].txt }
          } else {
            groupArr[i] = { id: that.data.group[i].id, check: false, txt: that.data.group[i].txt }
          }
        }
        this.setData({
          group: groupArr,
          pGroup: that.data.group[mod].txt,
        })
        break;
      case 4:
        for (var i = 0; i < that.data.exam.length; i++) {
          if (e.target.id % 40 == i) {
            examArr[i] = { id: that.data.exam[i].id, check: true, txt: that.data.exam[i].txt }
          } else {
            examArr[i] = { id: that.data.exam[i].id, check: false, txt: that.data.exam[i].txt }
          }
        }
        this.setData({
          exam: examArr,
          pExam: that.data.exam[mod].txt,
        })
        break;
      case 5:
        for (var i = 0; i < that.data.point.length; i++) {
          if (e.target.id % 50 == i) {
            pointArr[i] = { id: that.data.point[i].id, check: true, txt: that.data.point[i].txt }
          } else {
            pointArr[i] = { id: that.data.point[i].id, check: false, txt: that.data.point[i].txt }
          }
        }
        this.setData({
          point: pointArr,
          pPoint: that.data.point[mod].txt,
        })
        break;
    }
  },

  addNewComment:function (e){
    var that = this;
    var first_post = true;
    if(e.detail.value.msg.length<=10){
      this.setData({
        hidden:false,
      })
    } else if (first_post){
      first_post = false;

      wx.showModal({
        title: '提示',
        content: '课程评价一经提交将无法修改和删除，您确定要提交评价吗？',
        success: function (res) {
          if (res.confirm) {
            console.log('确定');

            var course_comment = app.globalData.AV.Object.extend('course_comment');
            var comment = new course_comment();
            comment.set("user_id", wx.getStorageSync('openid'));
            var poid = app.globalData.AV.Object.createWithoutData('course', that.data.course_id);
            comment.set('course_id', poid);
            comment.set("grade", that.data.pGrade);
            comment.set("attend_way", that.data.pAttend);
            comment.set("homework", that.data.pHomework);
            comment.set("group_talk", that.data.pGroup);
            comment.set("exam_times", that.data.pExam);

            var t_rate = that.data.pPoint;
            comment.set("comment_rate", parseInt(t_rate[0]));
            comment.set("comment_content", e.detail.value.msg);

            comment.save().then(res => {
              console.log(res);

              //通知 point 页面更新这节课的数据
              var pages = getCurrentPages();
              if (pages.length > 1) {
                //上一个页面实例对象
                var prePage = pages[pages.length - 2];
                //关键在这里
                prePage.change_data(parseInt(t_rate[0]), e.detail.value.msg);
              }

              wx.navigateBack({
                delta: 1
              })

              wx.showToast({
                title: '提交成功',
                icon: 'success'
              })

            }).catch(err => {
              console.log(err)
            })

          } else if (res.cancel) {
            console.log('取消')
          }
        }
      })
    
      first_post = true;
    }
  }
})