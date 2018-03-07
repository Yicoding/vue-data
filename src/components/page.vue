<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>页码</el-breadcrumb-item>
      <el-breadcrumb-item>动态路由</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="div-top"></div>
    <el-button @click="jump" size="small">跳转到page2</el-button>
    <el-button @click="send(1)" size="small">参数1</el-button>
    <el-button @click="send(2)" size="small">参数2</el-button>
    <hr>
    参数：{{$route.query.page}}
  </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    created() {
        // console.log(this.$route.query.page)
        console.log(this.$route.params.page)
        console.log('aa')
    },
    methods: {
        jump() {
            this.$router.push({name: 'page', params: {page: '2'}})
        },
        send(page) {
            this.$router.push({path: '/page/1', query: {page: page}})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
