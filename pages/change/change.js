// change.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "change": [
      { title: "零花钱10元", score: 20, thumb: "/images/money.png" },
      { title: "王者荣耀一局", score: 10, thumb: "/images/game.png" },
      { title: "动画片一集", score: 10, thumb: "/images/television.png" },
      { title: "假期赖床1小时", score: 10, thumb: "/images/Bed.png" }
    ]
  
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var change=[
      { id: 1, title: "零花钱10元", score: 20, thumb: "/images/money.png" },
      { id: 2, title: "王者荣耀一局", score: 10, thumb: "/images/game.png" },
      { id: 3, title: "动画片一集", score: 10, thumb: "/images/television.png" },
      { id: 4, title: "假期赖床1小时", score: 10, thumb: "/images/Bed.png" }
    ]
    var that = this
    var sum = 0
   
    var id = options.id
    var score=change[id-1].score
    var title=change[id-1].title

    this.setData({
      score:score,
      title:title

    })
    wx.getStorage({

      key: 'total',
      success: function (res) {
        sum = util.accSub(res.data, score)
        that.setData({
          sum: util.accSub(res.data, score)

        })


        wx.setStorage({
          key: 'total',
          data: sum,
        })
      }
    })
    wx.setStorageSync('title', title)
    
    
  
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
 
})