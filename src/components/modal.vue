<template>
  <div>
      <el-button @click="showOne">modalOne</el-button>
      <el-button @click="showTwo">modalTwo</el-button>
      <el-button @click="showConfirm">showConfirm</el-button>
  </div>
</template>

<script>
import MsgBox from './MsgBox'
import ConfirmComponent from './confirm'
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
    },
    showConfirm() {
      ConfirmComponent({
        title: 'hi'
      })
    }
  }
}
</script>

<style scoped>
    
</style>

