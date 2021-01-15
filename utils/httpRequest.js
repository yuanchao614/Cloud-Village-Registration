export default class request {
  constructor() {
    this._header = {
      'content-type': 'application/json', // 默认值
      'token': 'token'
    }
  }

    //get请求
    sendGetRequest(url, data = {}) {
      return this.sendRequest(url, data, this._header, 'GET')
    }
    //post请求
    sendPostRequest(url, data = {}) {
      return this.sendRequest(url, data, this._header, 'POST')
    }
    //put请求
    sendPutRequest(url, data = {}) {
      return this.sendRequest(url, data, this._header, 'PUT')
    }


  sendRequest(url, data, header = this.header, method = 'GET') {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        header: header,
        method: method,
        timeout: 3000,
        success: (res) => {
          if (res.statusCode === 200) {
            //200: 服务端业务处理正常结束
            resolve(res)
          } else {
            //200以外的code可以单独处理了
            if (that._errorHandler != null) {
            }
            reject(res)
          }
        },

        fail: (res) => {
          reject(res)
        }
      })
    })
  }
}