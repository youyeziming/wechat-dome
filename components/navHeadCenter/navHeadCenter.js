// components/navHeadCenter/navHeadCenter.js
let app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 高度
    navHeight:{
      type:Number
    },
    // 名字
    name:{
      type:String
    },
    // 返回
    showReturn:{
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    globalData:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    returnBack(e){
      if(e.currentTarget.dataset.item){
        wx.navigateBack({
          detail: 1
        })
      }
        },
  },
  created(){
    
  },
  onReady(){
    this.setData({
      globalData:app.globalData
    })
    console.log(globalData.windowHeight);
  },

})
