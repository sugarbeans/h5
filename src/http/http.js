/* eslint-disable func-call-spacing,prefer-promise-reject-errors */
import axios from 'axios'
function ajaxGet (url) {
  return new Promise((resolve, reject) => {
    const xmlAjax = new XMLHttpRequest()
    xmlAjax.open('get', url, true)
    xmlAjax.send()
    xmlAjax.onreadystatechange = function () {
      if (xmlAjax.readyState === 4) {
        if (xmlAjax.status === 200) {
          resolve(xmlAjax.responseText)
        } else {
          reject(null)
        }
      }
    }
  })
}
const instance = axios.create({
  baseURL: '',
  withCredentials: true // 跨域类型时是否在请求中协带cookie
})
export default class HttpUtil {
  static get (url, params = {}) {
    return new Promise((resolve, reject) => {
      instance.get(url, { params }).then(({ data }) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
  static post (url, params = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, params).then(({data}) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
  static ajax (url) {
    return new Promise(resolve => {
      resolve(ajaxGet(url))
    })
  }
}
