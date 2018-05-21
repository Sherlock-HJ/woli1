// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import plugIn from './plugIn'
import 'iview/dist/styles/iview.css'
import iView from 'iview'
import Cookie from 'js-cookie'

Vue.config.productionTip = false


Vue.use(plugIn)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

let lastSW = window.screen.width

window.onresize = function () {
  let currentSW = window.screen.width

  if ((lastSW < 768 && currentSW >= 768) || (currentSW < 768 && lastSW >= 768)) {
    console.log('来了')
    new Vue({
      el: '#app',
      router,
      components: {App},
      template: '<App/>'
    })
  }
  lastSW = window.screen.width
}
