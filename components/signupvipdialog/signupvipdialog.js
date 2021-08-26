// components/novipdialog/novipdialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showvip:null
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickHidesuccess(){
          this.setData({
            showvip:false
          })
          this.triggerEvent("up")
    },
    joinclickr(){
      this.setData({
        showvip:false
      })
      wx.navigateTo({
        url: '/pages/applyVip/applyVip'
      })
    },
  }
})
