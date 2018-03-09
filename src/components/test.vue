<template>
  <div>
    <div v-for="li in lists" :key="li.id" :id="li.id">{{li.name}}</div>
    <hr>
    <div v-for="li in menu" :key="li.id" :id="li.id">{{li.name}}</div>
  </div>
</template>

<script>

import Confirm from 'components/confirm'
export default {
    props: {
        info: {
            type: String,
            default: 'default'
        },
        lists: {
            type: Array,
            default: function() {return []}
        }
    },
    data() {
        return {
            menu: [],
            timer: null,
        }
    },
    watch: {
        lists(value) {
            console.log('watch')
            this.$nextTick(() => {
                console.log(document.getElementById('b'))
                document.getElementById('b').id = 'main'
            })
        }
    },
    created() {

    },
    mounted() {
        this.timer = setTimeout(() => {
            console.log('mounted')
            this.menu = [{id: 'c', name: 'cc'}]
            this.$nextTick(() => {
                console.log(document.getElementById('c'))
                document.getElementById('c').id = 'app'
            }, 500)
        }, 2000)
    },
    destroyed() {
        clearTimeout(this.timer)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
