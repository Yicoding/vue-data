<template>
  <div>
    <e-line></e-line>
    <bar></bar>
    <e-map></e-map>
  </div>
</template>

<script>
import eLine from 'components/echarts/line'
import bar from 'components/echarts/bar'
import eMap from 'components/echarts/map'
export default {
    components: {
        eLine,
        bar,
        eMap
    },
    data () {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .box{
        height: 100px;
        width: 100px;
        border: 1px solid #eee;
        .child{
            color: #69c;
        }
    }
</style>
