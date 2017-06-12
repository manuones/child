// celebrate.js
var util = require('../../utils/util.js')
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    
   
    "change": [
      { title: "零花钱10元", score: 20,thumb:"/images/money.png" },
      { title: "王者荣耀一局", score: 10,thumb:"/images/game.png" },
      { title: "动画片一集", score: 10,thumb:"/images/television.png" },
      { title: "假期赖床1小时", score: 10,thumb:"/images/Bed.png" }
   ]

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var req = [
      { id: 1, title: "考试80分以上", score: 30, thumb: "/images/Test_paper.png" },
      { id: 2, title: "看望外公外婆", score: 30, thumb: "/images/grandma.png" },
      { id: 3, title: "看望爷爷奶奶", score: 30, thumb: "/images/grandpa.png" },
      { id: 4, title: "看书一小时", score: 10, thumb: "/images/open_book.png" },
      { id: 5, title: "收拾屋子", score: 10, thumb: "/images/broom_brush.png" },
      { id: 6, title: "运动一小时", score: 10, thumb: "/images/fat_run.png" },
      { id: 7, title: "按时睡觉", score: 5, thumb: "/images/sleep.png" },
      { id: 8, title: "吃蔬菜", score: 5, thumb: "/images/Eggplant.png" },
      { id: 9, title: "看电影一部", score: 5, thumb: "/images/film.png" }

    ]
    var id = options.id
    
    var score=req[id-1].score
    var title=req[id-1].title

    
    var that = this
    var sum = 0
   
    
    
    this.setData({
       score: score,
       title:title
      
    })
    wx.getStorage({

      key: 'total',
      success: function (res) {
        sum = util.accAdd(res.data, score)
        that.setData({
          sum: util.accAdd(res.data, score)

        })


        wx.setStorage({
          key: 'total',
          data: sum,
        })
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
  onShareAppMessage: function () {
    return {
      title: '积分又增加啦',
      path: '/pages/choice/choice?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

  /**
   * 用户点击右上角分享
   */
  
})