<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>日历</el-breadcrumb-item>
      <el-breadcrumb-item>带事件的日历</el-breadcrumb-item>
    </el-breadcrumb>
    <vue-event-calendar :events="demoEvents" @day-changed="handleDayChanged" @month-changed="handleMonthChanged"></vue-event-calendar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [
        { date: '2018/03/07', title: '女王节' },
        { date: '2018/03/08', title: '妇女节' },
        { date: '2018/03/12', title: '植树节' },
        { date: '2018/03/15', title: '消费者日' },
        { date: '2018/03/17', title: '二月二' },
        { date: '2018/03/18', title: '龙抬头' },
        { date: '2018/03/21', title: '春分' },
        { date: '2018/04/01', title: '愚人节' }
      ],
    }
  },
  methods: {
    handleDayChanged (data) {
      console.log('date-changed', data)
    },
    handleMonthChanged (data) {
      console.log('month-changed', data)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
