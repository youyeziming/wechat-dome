//引入reuest请求
const {
	request
} = require('../utils/http')
//基于业务封装的数据请求
//1.url:请求接口的地址
//2.methode:请求方式 GET POST
//3.data:要传递的参数
//4.isSubdomain:表示是否添加二级子域名
//5.needToken是否需要header带token
//6.接口名
module.exports = {
	/**
	 * 列表数据方法--请求示例
	 * 1.address/String 2.methods/String 3.params/object 4.router/boolean 5.needToken/boolean
	 */
	// getList: (params) => {
	// 	// console.log('获取商品列表接口')
	//    	return request('common/indexs', 'GET', params, false);
	// 		 },
	// getList: () => {
	// 	// console.log('获取商品列表接口')
	//    	return request('common/indexs', 'POST', {}, false);
	// 		 },
	/**
	 * 
	 *请求示例 .then为成功 .catch为捕获错误
	 */
	// depositStatus() {
	//
	// 	applicationForWithdrawal({
	// 	bank_id:this.data.account.bank_id,
	// 	withdrawal_price:e.currentTarget.dataset.item,
	// 	card_id:this.data.account.card_number
	// 	}).then(res => {
	// 		console.log("捕捉成功",res)
	// 	}).catch(err=>{
	// 		console.log("捕捉错误",err)
	// 	})

	//get实例
  test:(params)=>request("home/business_taker", "GET",params, false, true,"生意广场选择接单人"),
	login: (params) =>request("home/login", "POST", params, false, false, "登录获取token"),

}
