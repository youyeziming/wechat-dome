// components/navHead/navHead.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showBgc:{
      type:Boolean
    },
    types:String,
    navbarData: { //navbarData 由父页面传递的数据，变量名字自命名
      
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal, "newVal")
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // showBgc:false,
    url: 'http://pshangcheng.wsandos.com/pic/',
    height: app.globalData.statusBarHeight,
    share: app.globalData.share,
    navbarData: {
      showCapsule: 2,
      color: '#fff'
    },
    onPath: 1, //1为上一个路由不存在，2为上一个路径存在
  },
  ready() {
    let pages = getCurrentPages(); //获取页面路由
    let onIndex = pages[1] || 1
    if (onIndex == 1) {
      this.setData({
        onPath: 1
      })
    } else {
      this.setData({
        onPath: 2
      })
    }
    console.log(pages[1] || 1, "roter23123")
  },
  created() {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    _navback() { //跳转到上一页
      wx.navigateBack({
        detail: 1
      })
    },
    _backtabbar(){
      wx.switchTab({
        url: '/pages/member/member'
      })
    },
    _backhome() { //返回首页
      wx.switchTab({
        url: '/pages/index/index'
      })
      app.globalData.share = false
    }
  }
})