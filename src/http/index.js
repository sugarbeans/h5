import HttpUtils from './http'
class Http {
  // 数据请求
  GETSTATIC = (url) => {
    return HttpUtils.ajax(url)
  }
  GETORDERLIST = (params) => {
    return HttpUtils.post('/h5face/getData.action', params)
  }

  GETDATA = (params) => {
    return HttpUtils.get('/h5face/getWxSignature.action', params)
  }
}
export default new Http()