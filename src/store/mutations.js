export default {
  // 显示模板
  showMask(state) {
    state.isShowMask = true
  },

  // 隐藏模板
  hideMask(state) {
    state.isShowMask = false
  },

  // 退出登录
  exit(state) {
    state.isLogin = false
    state.uername = ''
  },

  // 设置用户名
  setUsername(state, username) {
    state.username = username
  },
  changeLoginStatus(state, isLogin) {
    state.isLogin = isLogin
  },

  changeScale (state, scale) {
    state.scale = scale
  }

}