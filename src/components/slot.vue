<template>
  <div class="slot">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>slot</el-breadcrumb-item>
      <el-breadcrumb-item>插槽</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <slotA>
        <p>我是外部传进插槽A的内容</p>
    </slotA>
    <slotB>
        <template slot="header">
            我是外部传进的插槽header
        </template>
        <p>我是main</p>
        <template slot="footer">
            我是外部传进的插槽footer
        </template>
    </slotB>
    <!--自定义指令-->
    <input type="text" v-focus>
  </div>
</template>

<script>
import slotA from 'components/slot/slotA'
import slotB from 'components/slot/slotB'
export default {
    components: {
        slotA,
        slotB
    },
    mounted() {
        this.$nextTick(() => {
            console.log(this.$el)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
