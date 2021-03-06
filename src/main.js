import Vue from 'vue'
import App from './App.vue'
import noticeMessage from './lib'

Vue.config.productionTip = false

Vue.use(noticeMessage)

new Vue({
  render: h => h(App)
}).$mount('#app')
