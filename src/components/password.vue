<template>
    <div>
        <div class="pass-box">
            <label class="label">密码：</label>
            <pass-input
                v-model="password"
                type="tel"
                :isShowStar="true"
                :allowChinese="false"
                :alloUpcase="false"
                :alloLowercase="false" />
        </div>
        <p :class="['a', 'b' + index]" v-for="(item, index) in list" :key="index">{{item}}</p>
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
            password: '',
            list: [1, 2, 3, 4, 5]
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

