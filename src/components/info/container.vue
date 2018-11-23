<template>
    <div>
        <button @click="handleClick('Tom')">我是Tom</button>
        <button @click="handleClick('Bob')">我是Bob</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick(val) {
            this.$emit('callbackFuc', val)
        }
    }
}
</script>
