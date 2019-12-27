export default {
  // 显示模板
  showMask({ commit }) {
    commit("showMask")
  },

  // 隐藏模板
  hideMask({ commit }) {
    commit("hideMask")
  },

  // 退出登录
  exit({ commit }) {
    commit("exit")
  },

  // 用户名
  setUsername({ commit }, username) {
    commit("setUsername", username)
  },

  changeLoginStatus({ commit }, isLogin) {
    commit("changeLoginStatus", isLogin)
  },

  changeScale({ commit }, scale) {
    commit("changeScale", scale)
  }
}