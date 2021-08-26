//引入env中的url
const {
  baseUrl,
  openDebug
} = require('./config').dev
let token = ""
//子域名域名
const SubDomain = 'xxx';
module.exports = {
  //二次封装wx.request
  //url:请求接口的地址//
  // methode:请求方式 GET POST
  //data:要传递的参数
  //isSubdomain:表示是否添加二级子域名
  //needToken是否需要header带token
  //interFaceName 接口名
  request: (url, method, data, isSubDomain, needToken, interFaceName) => {
    let _url = `${baseUrl}/${isSubDomain ? SubDomain : ''}${url}`;
    console.log(_url)
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '加载中...'
      })
      // 获取token
      wx.getStorage({
        key: "token",
        success(resToken) {
          wx.request({
            url: _url,
            data: data,
            method: method,
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'token': needToken ? resToken.data : ""
            },
            success(res) {
              if (res.data.code == 1 || res.data.code == 200) {
                if (openDebug) {
                  console.group("%c请求成功!", "color:green;font-size:40px");
                  console.table({
                    status: res.statusCode,
                    url: _url,
                    params: JSON.stringify(data),
                    method: method,
                    token: token,
                    interFaceName: interFaceName,
                    tips: res.data.msg
                  });
                  console.groupEnd()
                }
                resolve(res.data)
                wx.hideLoading()
              } else {
                if (res) {
                  wx.hideLoading();
                  switch (res.statusCode || res.code) {
                    case 400:
                      console.group("%c请求错误,未找到该资源--接口错误!", "color:red;font-size:40px");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      wx.showToast({
                        title: `${res.data.msg}`,
                        icon: 'none'
                      })
                      break;
                    case 401:
                      // localStorage.removeItem('token');
                      // window.location.href =
                      //   ""; 出现401跳转登录
                      // err.message = '未授权，请重新登录';
                      // return Promise.reject(response);
                      console.group("%c登录失效,请重新登录--接口错误!", "color:red;font-size:40px");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      wx.showModal({
                        content: "登录失效,请重新登录",
                        success(succ) {
                          if (succ.confirm) {
                            wx.navigateTo({
                              url: '/pages/login/login',
                            });
                          }
                        }
                      })
                      break;
                    case 403:
                      // err.message = '拒绝访问'
                      console.log("拒绝访问!")
                      break;
                      // showModal为测试
                    case 404:
                      console.group("%c请求错误,未找到该资源--接口错误!", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      break;
                    case 405:
                      console.group("%c请求错误,请求方法未允许--接口错误!", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      break;
                    case 408:
                      console.group("%c请求错误,请求超时--接口错误!", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      break;
                    case 500:
                      console.group("%c服务端出错--接口错误!", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      break;
                    case 501:
                      console.group("%c网络未实现--接口错误!", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      break;
                    case 502:
                      console.group("%c网络错误--接口错误!", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      break;
                    case 503:
                      console.group("%c服务不可用--接口错误!", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      break;
                    case 504:
                      console.group("%c网络超时--接口错误!", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      break;
                    case 505:
                      console.group("%chttp版本不支持该请求", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      break;
                    default:
                      // err.message = `连接错误${err.response.status}`
                      // wx.showToast({
                      //   title: '服务繁忙,请稍后再试!',
                      //   icon: 'none',
                      //   duration: 2000
                      // })
                      resolve(res.data)
                      wx.hideLoading()
                  }
                } else {
                  err.message = "连接到服务器失败";
                  wx.showLoading({
                    title: '接口出错!'
                  })
                }
              }
            },
            fail(err) {
              console.log(err)
            },
            //接口报错判断
            fail(err) {

            }
          })
        },
        // 另一种情况//多预判一重
        fail(err) {
          console.log(err);
          wx.request({
            url: _url,
            data: data,
            method: method,
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'token': ""
            },
            success(res) {
              //  console.log(res)
              if (res.data.code == 1 || res.data.code == 200) {
                resolve(res.data)
                wx.hideLoading()
              } else {
                // console.log(res);
                reject("接口出现错误:");
                if (res.statusCode || res.code) {
                  wx.hideLoading();
                  switch (res.statusCode) {
                    case 401:
                      console.group("%c登录失效,请重新登录--接口错误!", "color:red;font-size:16px;font-weight:bold;background-image:linear-gradient(to right,#84c0be,#005b5a,#005b5a)");
                      console.table({
                        status: res.statusCode,
                        url: _url,
                        params: JSON.stringify(data),
                        method: method,
                        token: token,
                        interFaceName: interFaceName,
                        tips: res.data.msg
                      });
                      console.groupEnd()
                      wx.showModal({
                        content: "登录失效,请重新登录",
                        // showCancel: false,
                        success(succ) {
                          if (succ.confirm) {
                            wx.navigateTo({
                              url: '/pages/login/login',
                            });
                          }else{
                            wx.switchTab({
                              url: '/pages/index/index',
                            })
                          }
                        }
                      })
                      break;
                    default:
                      // err.message = `连接错误${err.response.status}`
                      wx.showToast({
                        title: '服务繁忙,请稍后再试!',
                        icon: 'none',
                        duration: 2000
                      })

                  }
                } else {
                  err.message = "连接到服务器失败";
                  wx.showLoading({
                    title: '接口出错!'
                  })
                }
              }
            },
            fail(err) {
              console.log(err)
            },
            //接口报错判断
            fail(err) {

            }
          })
        }
      })
    })

  },
  /**
   * 上传图片请求
   */
  uploadPictures(imgUrl, filePath, formData, header, loadbool) {
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: this._uploadImg + imgUrl,
        filePath, //图片地址
        header: header,
        name: 'file',
        formData, //添加的其他参数
        success: (res => {
          console.log(res)
          if (res.statusCode === 200) {
            //200: 服务端业务处理正常结束
            //返回来的数据小程序不会帮我们把JSON格式转换成js的格式
            res.data = JSON.parse(res.data)
            let code = Number(res.data.code);
            switch (code) {
              case 200:
                resolve(res);
                break;
              case 10001:
                wx.showToast({
                  title: '上传失败',
                  icon: 'none',
                  duration: 2000
                });
                break;

            }
            if (loadbool) {
              wx.hideLoading();
            };

          } else {
            //其它错误，提示用户错误信息
            if (this._errorHandler != null) {
              //如果有统一的异常处理，就先调用统一异常处理函数对异常进行处理
              this._errorHandler(res)
            }
            reject(res)
          }
        }),
        fail: (res => {
          if (this._errorHandler != null) {
            this._errorHandler(res)
          }
          reject(res)
        })
      })
    })
  }
}