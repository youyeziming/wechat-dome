// components/grabbingOrdersuccess/grabbingOrdersuccess.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showsuccess:null,
    type:null
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
      this.setData({ showsuccess: false });
      if(this.properties.type == 1){
        this.triggerEvent('eventup',{params: 1},{})
      }else{
        this.triggerEvent('eventup',{params: 2},{})
      }
    },

  }
})
