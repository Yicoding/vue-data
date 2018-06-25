<template>
    <div>
        busA: {{num}}<br>
        <el-button @click="add">add</el-button>
    </div>
</template>

<script>
import bus from './index'
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        add() {
            this.num ++
            bus.$emit('busAdd', this.num)
        }
    }
}
</script>
