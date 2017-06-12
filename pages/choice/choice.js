// choice.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
   
    "req":[
      { id:1,title: "考试80分以上",score:30,thumb:"/images/Test_paper.png"},
      { id:2,title: "看望外公外婆", score: 30,thumb:"/images/grandma.png"},
      { id:3,title: "看望爷爷奶奶", score: 30,thumb:"/images/grandpa.png"},
      { id:4,title: "看书一小时", score: 10,thumb:"/images/open_book.png"},
      { id:5,title: "收拾屋子", score: 10,thumb:"/images/broom_brush.png"},
      { id:6,title: "运动一小时", score: 10,thumb:"/images/fat_run.png"},
      { id:7,title: "按时睡觉", score: 5,thumb:"/images/sleep.png"},
      { id:8,title: "吃蔬菜", score: 5 ,thumb:"/images/Eggplant.png"},
       {id:9,title: "看电影一部", score: 5, thumb: "/images/film.png" }

    ]
     
     
    
  },
  tocelebrate:function(e){
    

    
    wx.navigateTo({
      url: '../celebrate/celebrate?id='+e.currentTarget.id,
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
    wx.getStorage({
      key: 'total',
      success: function () {

      },
      fail: function () {
        wx.setStorage({
          key: 'total',
          data: 0,
        })
      }
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