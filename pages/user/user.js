// user.js

Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    "change": [
      { id:1,title: "零花钱10元", score: 20, thumb: "/images/money.png" },
      { id:2,title: "王者荣耀一局", score: 10, thumb: "/images/game.png" },
      { id:3,title: "动画片一集", score: 10, thumb: "/images/television.png" },
      { id:4,title: "星期天赖床1小时", score: 10, thumb: "/images/Bed.png" }


    ],
  iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ]
  },
  tochange: function (e) {
    wx.navigateTo({
      url: '../change/change?id=' + e.currentTarget.id,
    })

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
    var that=this
    var sum=0
    var title=null
    
     that.setData({
      sum: wx.getStorageSync('total'),
      title:wx.getStorageSync('title'),
      
    })
     
  
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
  
})