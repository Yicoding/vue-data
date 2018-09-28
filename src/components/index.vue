<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>vue资料</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="div-top"></div>
    <el-input clearable size="small" style='width: 300px;' placeholder="请输入导出的文件名(默认excel-list)" prefix-icon="el-icon-document" v-model="filename"></el-input>
    <el-button size="small" type="primary" icon="el-icon-document" @click="handleDownload" :loading="downloadLoading">导出本页数据</el-button>
    <div class="div-top"></div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
	      label="序号"
        type="index"
        width="80">
	    </el-table-column>
      <el-table-column
        prop="name"
        sortable="custom"
        min-width="120"
        label="站点名">
        <template slot-scope="scope">
          <!-- <el-button type="text" size="small" @click="jump(scope.row.site)">{{scope.row.name}}</el-button> -->
          <span style="color: #409EFF; cursor: pointer;" @click="jump(scope.row.site)">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
	      label="网址"
        sortable="custom"
        min-width="200"
        prop="site">
	      <template slot-scope="scope">
          <span style="color: #409EFF; cursor: pointer;" @click="jump(scope.row.site)">{{scope.row.site}}</span>
          <!-- <el-button type="text" size="small" @click="jump(scope.row.site)">{{scope.row.site}}</el-button> -->
        </template>
	    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filename: null,
      downloadLoading: false,
      tableData: [
        { name: 'Vue官网', site: 'https://cn.vuejs.org/v2/guide/' },{ name: 'vue-router官网', site: 'https://router.vuejs.org/zh/' },{ name: 'Vuex中文网', site: 'https://vuex.vuejs.org/zh-cn/intro.html' },{ name: 'Vue开源项目查询', site: 'https://www.ctolib.com/cheatsheets-vuejs.html' },{ name: 'element-ui官网', site: 'http://element.eleme.io/#/zh-CN/component/installation' },{ name: 'Vant有赞移动端', site: 'https://www.youzanyun.com/zanui/vant#/zh-CN/intro' },{ name: 'Mint-ui移动端', site: 'https://mint-ui.github.io/#!/zh-cn' },{ name: 'Cube-ui移动端vueUI框架', site: 'https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start' },{ name: 'axios(基于promise封装的ajax)', site: 'https://www.npmjs.com/package/axios' },{ name: 'Echarts3', site: 'http://echarts.baidu.com/examples.html' },{ name: 'Echarts2', site: 'http://echarts.baidu.com/echarts2/doc/example.html' },{ name: 'webpack中文网', site: 'https://doc.webpack-china.org/' },{ name: 'icon图标网', site: 'https://icomoon.io/' },{ name: '阿里巴巴矢量图网站', site: 'http://www.iconfont.cn/' },{ name: '微信JS-SDK说明文档', site: 'https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115' },{ name: '免费CDN', site: 'http://www.codeyyy.com/javascript/8-117-120.html' },{ name: 'Flex布局教程-阮一峰', site: 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html' },{ name: 'layui经典模块化前端框架', site: 'http://www.layui.com/' },{ name: '百度地图JavaScript API', site: 'http://lbsyun.baidu.com/index.php?title=jspopular' },{ name: 'Laravel官网', site: 'https://www.codecasts.com/' },{ name: 'MUI', site: 'http://dev.dcloud.net.cn/mui/ui/' },{ name: 'Vux移动端', site: 'https://vux.li/#/' },{ name: 'nuxt官网', site: 'https://nuxtjs.org/guide/installation' },{ name: 'vue服务端渲染', site: 'https://ssr.vuejs.org/zh/' },{ name: 'vue微信端框架YDUI', site: 'http://vue.ydui.org/' },{ name: '在jsx里面使用vue', site: 'https://telanx.github.io/2017/08/25/Vue%E5%9C%A8JSX%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85%E7%9A%84%E7%BB%84%E4%BB%B6/' },{ name: 'vue-element-admin', site: 'https://panjiachen.github.io/vue-element-admin-site/#/zh-cn/README' }
      ],
    }
  }, methods: {
    // 站点跳转
    jump (value) {
      window.open(value)
    },
    // 导出Excel
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    // 导出本页数据Excel表格
    handleDownload() {
      this.downloadLoading = true
      import('./vendor/Export2Excel').then(excel => {
        const tHeader = ['站点名', '网址']
        const filterVal = ['name', 'site']
        const tableData = this.tableData
        const data = this.formatJson(filterVal, tableData)
        excel.export_json_to_excel(tHeader, data, this.filename)
        this.downloadLoading = false
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
