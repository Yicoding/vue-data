<template>
    <div>
        <div class="pass-box">
            <label class="label">密码：</label>
            <pass-input
                v-model="password"
                type="tel"
                :allowChinese="false"
                :alloUpcase="false"
                :alloLowercase="false" />
        </div>
    </div>
</template>

<script>
import passInput from './pass-input.vue'
export default {
    components: {
        passInput
    },
    data() {
        return{
            password: ''
        }
    },
    watch: {
        password(val) {
            console.log(val, '传过来的值')
        }
    }
}
</script>

<style scoped>
    .pass-box{
        display: flex;
        align-items: center;
    }
    label{
        white-space: nowrap;
    }
</style>

