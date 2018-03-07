<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>canvas</el-breadcrumb-item>
      <el-breadcrumb-item>手动签名</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin: 10px 0; border: 1px solid #dfdddd; border-radius: 3px;">
		<vueSignature ref="signature" :sigOption="option" :w="'100%;'" :h="'200px'"></vueSignature>
	</div>
    <el-button @click="clear" type="danger" size="small">清除签名</el-button>
    <el-button @click="save" type="primary" size="small">保存</el-button>
    <img :src="png">
  </div>
</template>

<script>
import vueSignature from "components/vue-signature"
export default {
    components: {
		vueSignature
	},
    data () {
        return {
            option:{
                penColor:"rgb(0, 0, 0)"
            },
            png: null,
        }
    },
    methods: {
        // 清除签名
    	clear() {
			this.$refs.signature.clear()
        },
        // 保存
        save() {
            // let svg = this.$refs.signature.save('image/svg+xml')
			// var jpeg = this.$refs.signature.save('image/jpeg')
			this.png = this.$refs.signature.save()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
