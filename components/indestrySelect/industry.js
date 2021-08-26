// components/industry/industry.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    textarr:{
      type:Array,
      value:''
    },
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showarr:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showoneclick(){
      let showarr = ''
      showarr = !this.data.showarr
      this.setData({
        showarr:showarr
      })
    },
  }
})

