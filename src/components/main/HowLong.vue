<template>
  <!--container-->
  <div class="container">

    <div class="page-header">
      <h1>时间查询 <small>过去和未来</small></h1>
    </div>
    <div class="row">
      <div class="col-sm-4 ">
        <p v-html="periodTime">显示<br>结果</p>
      </div>
      <div class="col-sm-4 ">
        选择日期:<input  type="date" class="form-control" v-model="day">

      </div>
      <div class="col-sm-4 ">
        选择时间:<input  type="time" class="form-control" v-model="time">

      </div>
    </div>

  </div>

</template>

<script>
export default{
  name: 'HowLong',
  data: function () {
    return {
      day: '',
      time: ''
    }
  },

  computed: {
    // 计算属性的 getter
    periodTime: function () {
      let wdate = this.day
      let wtime = this.time

      let dateStr = wdate + ' ' + wtime

      // 开始时间
      let date = new Date(dateStr.replace(/-/g, '/'))
      let selectMs = date.getTime()

      let nd = new Date()
      let nowMs = nd.getTime()

      let diff = Math.abs(nowMs - selectMs)

      let hour = Math.floor(diff / 1000 / 60 / 60) % 24
      let minute = Math.floor(diff / 1000 / 60) % 60
      let seconds = Math.floor(diff / 1000) % 60

      let allDay = Math.floor(diff / 1000 / 60 / 60 / 24)
      let allHour = Math.floor(diff / 1000 / 60 / 60)
      let allMinute = Math.floor(diff / 1000 / 60)
      let allSeconds = Math.floor(diff / 1000)

      let tmp1 = '<br>' + allDay + '天' + hour + '小时' + minute + '分钟' + seconds + '秒'

      let tmp2 = '<br>或者' + allHour + '小时' + minute + '分钟' + seconds + '秒'

      let tmp3 = '<br>或者' + allMinute + '分钟' + seconds + '秒'

      let tmp4 = '<br>或者' + allSeconds + '秒'

      let results = null
      if (selectMs < nowMs) {
        // 过去
        results = '距离' + dateStr + '已过去:'
      } else if (selectMs === nowMs) {
        // now

      } else {
        // 未来
        results = '在未来'
      }
      if (isNaN(allDay)) {
        return '请选择'
      }
      return results + tmp1 + tmp2 + tmp3 + tmp4
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
