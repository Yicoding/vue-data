<template>
  <div>
      <el-button @click="showOne">modalOne</el-button>
      <el-button @click="showTwo">modalTwo</el-button>
  </div>
</template>

<script>
import MsgBox from './MsgBox'
export default {
  methods: {
    showOne() {
      MsgBox('基于最新归属于母公司股东的所有者权益与最新总股本计算')
    },
    showTwo() {
      MsgBox({
        content: '基于最新报告期归属母公司股东的净利润与最新总股本计算',
        onOk: () => {
          console.log('ok')
        },
        onShow: () => {
          console.log('show')
        }
      })
    }
  }
}
</script>

<style scoped>
    
</style>

