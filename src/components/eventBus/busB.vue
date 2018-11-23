<template>
    <div>
        busB: <br>
        num: {{num}}
    </div>
</template>

<script>
import bus from './index'
export default {
    data() {
        return {
            num: null
        }
    },
    created() {
        bus.$on('busAdd', val => {
            this.num = val
        })
    }
}
</script>
