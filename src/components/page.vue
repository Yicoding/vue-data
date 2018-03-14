<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>页码</el-breadcrumb-item>
      <el-breadcrumb-item>动态路由+路由传参</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="div-top"></div>
    <el-button @click="jump" size="small">跳转到page2</el-button>
    <el-button @click="send(1)" size="small">参数1</el-button>
    <el-button @click="send(2)" size="small">参数2</el-button>
    <el-button @click="send(3)" size="small">参数3</el-button>
    <div class="div-top"></div>
    参数：{{$route.query.page}}
    <div class="div-top"></div>
    <el-button size="small" @click="open">打开模态框</el-button>
    <confirm ref="confirm" @confirm="confirmClear" text="即将前往QQ联系客服" confirmBtnText="确定"></confirm>
    <el-button onclick="this.innerHTML = Date()" size="small">add</el-button>
    <div class="div-top"></div>
    <test :info="info" :lists="lists"></test>
    <a href="/#/sign" target="blank">百度一下</a>
  </div>
</template>

<script>

import Confirm from 'components/confirm'
import test from 'components/test'
export default {
    components: {
        Confirm,
        test
    },
    data () {
        return {
            info: 'one',
            lists: []
        }
    },
    watch: {
        $route(value) {
            console.log(value)
            // console.log(value.query.page)
            // this.page = value.query.page
        }
    },
    created() {
        setTimeout(() => {
            this.info = 'two'
            this.lists = [{id: 'a', name: 'aa'}, {id: 'b', name: 'bb'}]
        },2000)
    },
    methods: {
        jump() {
            this.$router.push({name: 'page', params: {page: 2}})
        },
        send(page) {
            this.$router.push({path: `/page/${this.$route.params.page}`, query: {page: page}})
        },
        open() {
            this.$refs.confirm.show()
        },
        confirmClear() {
            console.log('确定的回调')
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
