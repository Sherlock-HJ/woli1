/* eslint-disable indent */
export default {
  install: function (Vue, options) {
    /*
     * @date 是 年月日 eg:1994-1-23
     * @return 数字年龄
     * */
    Vue.prototype.ageForYear = function (dateStr) {
      let birthdayTime = Date.parse(dateStr)
      let ageTime = new Date().getTime() - birthdayTime
      return Math.floor(ageTime / 1000 / 60 / 60 / 24 / 365)
    }
    Vue.prototype.isPC = function () {
      let userAgentInfo = navigator.userAgent
      let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      let flag = true
      for (let num = 0; num < Agents.length; num++) {
        if (userAgentInfo.indexOf(Agents[num]) > 0) {
          flag = false
          break
        }
      }
      return flag
    }
    Vue.prototype.isWeiXin = function () {
      let ua = navigator.userAgent.toLowerCase()
      return ua.indexOf('micromessenger') !== -1
    }
    Vue.prototype.is768 = function () {
      return window.screen.width < 768
    }
    Vue.prototype.isValueNumber = function (value) {
      return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '')
    }
  }
}
