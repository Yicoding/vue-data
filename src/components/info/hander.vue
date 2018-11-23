<template>
    <div>
        <container @callbackFuc="handleClick"></container>
        <button @click="send">send</button>
    </div>
</template>

<script>
import container from 'components/info/container.vue'
export default {
    components: {
        container
    },
    data() {
        return {
            num: 0
        }
    },
    created() {
        this.$on('getInfo', val => {
            console.log(val)
        })
    },
    methods: {
        handleClick(val) {
            console.log(val)
        },
        send() {
            this.num ++
            this.$emit('getInfo', this.num)
        }
    }
}
</script>
