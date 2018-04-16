<template>
  <div>
    <el-menu :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item v-for="item in menuList" :key="item.index" :index="item.index" @click.native="toRouter(item.index)">
          <i :class="item.icon"></i>
          <span slot="title" v-text="item.name"></span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                { index: '/index', icon: 'el-icon-menu', name: '主页' },
                { index: '/sign', icon: 'el-icon-edit', name: '签名' },
                { index: '/calendar', icon: 'el-icon-date', name: '日历' },
                { index: '/page/1', icon: 'el-icon-printer', name: '页码' },
                { index: '/picture', icon: 'el-icon-picture', name: '图片' },
                { index: '/echarts', icon: 'el-icon-tickets', name: '图表' },
                { index: '/sockjs', icon: 'el-icon-tickets', name: 'sockjs' },
                { index: '/modal', icon: 'el-icon-document', name: 'modal' },
                { index: '/chart', icon: 'el-icon-news', name: 'chart' },
            ]
        }
    },
    methods: {
        toRouter(item) {
            this.$router.push(item)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
