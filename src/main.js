import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http'

import '@/assets/css/font.css'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import scroll from './components/scroll'

import { Lazyload, Swipe, SwipeItem, Tabbar, TabbarItem, Grid, GridItem, Tab, Tabs, Divider, Uploader, Dialog, Field, Button, CellGroup, Toast, Icon,  Popup, Picker, DatetimePicker, List, Cell, Step, Steps, NavBar, Search, Panel, Notify, Image} from 'vant'
Vue.use(Lazyload).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(Grid).use(GridItem).use(Tab).use(Tabs).use(Divider).use(Uploader).use(Dialog).use(Image).use(Field).use(Button).use(CellGroup).use(Toast).use(Icon).use(Popup).use(Picker).use(DatetimePicker).use(List).use(Cell).use(Step).use(Steps).use(NavBar).use(Search).use(Panel).use(Notify)

Vue.use(scroll)
Vue.prototype.$store = store
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
