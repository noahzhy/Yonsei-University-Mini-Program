// pages/bookDetail/bookDetail.js
const app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hidden: true,
    wrongMsg: "请输入微信号！",
    bookInfo: { id: 0, name: "", class:"", minPrice: 0, sellers: 0, image: "" },
    listData: [],
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    animationData: {},//
    book_id:"",
    wx_id:'',
    priceValue:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var cid = options.book_id;
    var tmp = { id: options.book_id, 
                name: options.name, 
                sellers: options.num_sellers, 
                minPrice: options.min_price, 
                class: options.course, 
                image: options.image};

    const query1 = new app.globalData.AV.Query("book_seller");
    var toBook = app.globalData.AV.Object.createWithoutData('book', cid);
    query1.equalTo('book_id', toBook);
    query1.select(['wx_id', 'price', 'createdAt']);
    query1.include("book_id");
    query1.ascending('createdAt');
    query1.find().then(res => {
      console.log(res)
      this.setData({
        book_id: cid,
        listData: res,
      })
    });

    this.setData({
      bookInfo : tmp,
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
    this.hideModal()
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

  addNewPrice :function(e) {
    var obj = e.detail.value;
    var wx_id = obj.wx_id;
    var price = obj.price;
    var first_post = true;

    if(wx_id.length <= 0){
      this.setData({
        hidden: false,
        wrongMsg: "请输入微信号！"
      })

    } else if (price.length <= 0){
      this.setData({
        hidden: false,
        wrongMsg: "请输入报价！"
      })

    } else {
      if (first_post){
        first_post = false;

        var book_seller = app.globalData.AV.Object.extend('book_seller');
        var seller = new book_seller();

        seller.set("openid", wx.getStorageSync('openid'));
        var poid = app.globalData.AV.Object.createWithoutData('book', this.data.book_id);

        seller.set('book_id', poid);
        seller.set("wx_id", wx_id);
        seller.set("price", parseInt(price));

        var t_sellers = parseInt(this.data.bookInfo.sellers) + 1;
        var t_minPrice;
        if (parseInt(this.data.bookInfo.minPrice)==0){
          t_minPrice = parseInt(price);
        }else{
          t_minPrice = Math.min(parseInt(this.data.bookInfo.minPrice), parseInt(price));
        }
        
        seller.save().then(res => {
          console.log(res);

          this.data.listData.push({ attributes: obj });
          var newOne = this.data.listData;
          
          this.setData({
            hidden: true,
            listData: newOne,
            bookInfo: {
              id: this.data.bookInfo.id,
              name: this.data.bookInfo.name,
              class: this.data.bookInfo.class,
              image: this.data.bookInfo.image,
              sellers: t_sellers,
              minPrice: t_minPrice,
            },
          })

          this.hideModal();
          wx.setStorageSync('wx_id', wx_id);

          wx.showToast({
            title: '报价成功',
            icon: 'success'
          });

        }).catch(err => {
          console.log(err);
        })


        //通知 book 页面更新这本书的数据

        var pages = getCurrentPages();
        if (pages.length > 1) {
          //上一个页面实例对象
          var prePage = pages[pages.length - 2];
          //关键在这里
          prePage.change_data_by_id(this.data.book_id, t_sellers, t_minPrice);
        }

        first_post = true;
      }
    }
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown();//调用隐藏动画   
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 250)//先执行下滑动画，再隐藏模块

  },

  //动画集
  fadeIn: function () {
    this.animation.translateY(-0).step()
    this.setData({
      animationData: this.animation.export()//动画实例的export方法导出动画数据传递给组件的animation属性
    })
  },

  fadeDown: function () {
    this.animation.translateY(-300).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },

  showModal: function (r) {
    var that = this;
    try {
      const value = wx.getStorageSync('wx_id');
      if (value) {
        that.data.wx_id = value;
      }
    } catch (e) {
      that.data.wx_id = '';
    };
    // 弹出窗口的函数↓
    that.setData({
      wx_id: that.data.wx_id,
      priceValue: '',
      hideModal: false,
    });
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    });
    this.animation = animation
    setTimeout(function () {
      that.fadeIn();//调用显示动画
    }, 200);
  },


  login(r) {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          //授权了
          console.log(r.detail.userInfo);
          wx.setStorageSync('userInfo', r.detail.userInfo);
          that.showModal();

        } else {
          //未授权
          console.log("//未授权");
          console.log(r);
          
        }
      }
    })
    
  },

})