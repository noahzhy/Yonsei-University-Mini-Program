//app.js
App({
  globalData: {
    userInfo: null,
    AV: require('/utils/av-weapp-min.js'),
  },

  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.AV.init('DwDFOEW3PGKApGggCstfM590-gzGzoHsz', 'QRkIayvl9pR96ATk7i7QFehe');
    // 登录
    wx.login({
      success: res => {
        this.globalData.AV.User.loginWithWeapp().then(user => {
          // console.log(user);
          wx.setStorage({
            key: 'openid',
            data: user.attributes.authData.lc_weapp.openid,
          });
          wx.setStorage({
            key: 'admin',
            data: user.attributes.admin,
          })
        }).catch(console.error)
      }
    })
  },

  get_info_by_id(res, id, key) {
    var r = res.find(function (x) {
      return x.id === id
    });

    if (key == "course") {
      return r.get("course");
    } else if (key == "num_sellers") {
      return r.get("num_sellers");
    } else if (key == "min_price") {
      return r.get("min_price");
    } else if (key == "name") {
      return r.get("name");
    } else if (key == "image") {
      return r.get("image").get("url")
    } else if (key == "wx_id") {
      return r.get("wx_id")
    } else if (key == "title") {
      return r.get("title")
    } else if (key == "content") {
      return r.get("content")
    } else if (key == "time") {
      return r.createdAt.toJSON()
    } 
  },

  toBookDetail(res,e) {
    wx.navigateTo({
      url: '/pages/bookDetail/bookDetail?book_id=' + e.currentTarget.id +
        '&course=' + this.get_info_by_id(res, e.currentTarget.id, 'course') +
        '&num_sellers=' + this.get_info_by_id(res, e.currentTarget.id, 'num_sellers') +
        '&min_price=' + this.get_info_by_id(res, e.currentTarget.id, 'min_price') +
        '&name=' + this.get_info_by_id(res, e.currentTarget.id, 'name') +
        '&image=' + this.get_info_by_id(res, e.currentTarget.id, 'image'),
    })
  },

  toAnswer(res,e) {
    wx.navigateTo({
      url: '/pages/answer/answer?question_id=' + e.currentTarget.id +
        '&wx_id=' + this.get_info_by_id(res, e.currentTarget.id, 'wx_id') +
        '&title=' + this.get_info_by_id(res, e.currentTarget.id, 'title') +
        '&content=' + this.get_info_by_id(res, e.currentTarget.id, 'content') +
        '&time=' + this.get_info_by_id(res, e.currentTarget.id, 'time'),
    })
  },

  toTalk() {
    const query2 = new this.globalData.AV.Query("question");
    query2.descending('createdAt');
    query2.limit(3);
    query2.select(['wx_id', 'title', 'content']);
    query2.find().then(res => {
      console.log(res);
      if(res.length <= 1){
        wx.navigateTo({
          url: '/pages/answer/answer?question_id=5c6e6e5067f3560044b8bc94' +
            '&wx_id=' + 'hanyang' +
            '&title=' + '欢迎进入汉阳大学' +
            '&content=' + '在汉阳大学遇到任何问题都可以在此讨论哦。' +
            '&time=' + '2018-02-21',
        })
      }else{
        wx.navigateTo({
          url: '/pages/question/question',
        })
      }
    });

  },

  deleteSth(kind,id,right){
    var that = this;
    if(kind == 'comment' && right){
      console.log(id);
      var comment = this.globalData.AV.Object.createWithoutData('course_comment', id);
      wx.showModal({
        title: '管理员权限',
        content: '您确定要删除此条课程评价吗？',
        confirmColor: "#004483",
        success: function (res) {
          if (res.confirm) {
            comment.destroy().then(function (success) {
              wx.showToast({
                title: '删除评价成功',
                icon: 'success'
              })
            }, function (error) {
              // 删除失败
            });
            // that.onLoad();
          }
        }
      })

    } else if (kind == 'answer' && right){
      console.log(id);
      var comment = this.globalData.AV.Object.createWithoutData('question_answer', id);
      wx.showModal({
        title: '管理员权限',
        content: '您确定要删除此条回答吗？',
        confirmColor: "#004483",
        success: function (res) {
          if (res.confirm) {
            comment.destroy().then(function (success) {
              wx.showToast({
                title: '删除回答成功',
                icon: 'success'
              })
            }, function (error) {
              // 删除失败
            });
            // that.onLoad();
          }
        }
      })


    }
  },
})