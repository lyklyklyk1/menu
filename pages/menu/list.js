// pages/menu/list.js
const util = require('../../utils/util.js')
const menuService = require('../../service/menuService.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: []
  },
  //事件处理函数
  toAddMenu: function () {
    wx.navigateTo({
      url: 'add'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      menus: menuService.menuService.menulist()
      //menus: (wx.getStorageSync('logs') || []).map(log => {return util.formatTime(new Date(log))})
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
  
  }
})