<template>
    <div class="pass-input">
        <input :type="type" class="password" v-model="password" :maxlength="maxlength" ref="input" />
        <span @click="handleClick" class="mask" v-if="isShowStar"></span>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        maxlength: { // 最大长度
            type: Number,
            default: 255,
        },
        type: { // input类型：text为文本，tel为数字
            type: String,
            default: ''
        },
        isShowStar: { // input是否显示为*
            type: Boolean,
            default: false
        },
        allowChinese: { // 是否允许输入中文
            type: Boolean,
            default: true
        },
        alloUpcase: { // 是否允许大写
            type: Boolean,
            default: true
        },
        alloLowercase: { // 是否允许小写
            type: Boolean,
            default: true
        },
    },
    data() {
        return{
            password: '',
            val: ''
        }
    },
    watch: {
        value(val) {
            // this.password = val
        },
        password(val) {
            if (val[val.length-1] == ' ') {
                this.password = val.slice(0, val.length-1)
                return
            }
            
            if (!val) { // 是否清空
                this.val = ''
                this.$emit('input', '')
                return
            }
            // 是否允许中文
            if (!this.allowChinese) { // 不允许中文
                if (this.isChinese(val.slice(-1))) { // 是中文的情况 
                    console.log(1)
                    this.password = val.slice(0, val.length-1)
                    this.$emit('input', this.password)
                    return
                }
            }
            // 是否允许大写
            if (!this.alloUpcase) { // 不允许大写
                if (this.isUpcase(val.slice(-1))) { // 大写的情况
                    this.password = val.slice(0, val.length-1)
                    this.$emit('input', this.password)
                    return
                }
            }

            // 是否允许小写
            if (!this.alloLowercase) { // 不允许小写
                if (this.isLowercase(val.slice(-1))) { // 小写的情况
                    this.password = val.slice(0, val.length-1)
                    this.$emit('input', this.password)
                    return
                }
            }

            // 显示为*的处理逻辑
            if (!this.isShowStar) { // 不显示为*直接返回
                this.$emit('input', val)
                return
            }
            
            if (val.length == 1) {
                this.val = val
                this.password = val.replace(/./g, '*')
                this.$emit('input', val)
                return
            }
            // 显示为*的处理
            if (val.length > this.val.length) {
                let num = val.length - this.val.length
                this.val = this.val + val.slice(-num)
            } else if (val.length < this.val.length) {
                this.val = this.val.slice(0, this.val.length - 1)
            }
            this.password = val.replace(/./g, '*')
            this.$emit('input', this.val)
        }
    },
    methods: {
        // 判断是否为中文
        isChinese(val) {
            if (val.charCodeAt(0) > 0 && val.charCodeAt(0) < 255) {
                return false
            }
            return true
        },
        // 判断是否为大写
        isUpcase(val) {
            let reg = /[A-Z]/g
            return reg.test(val)
        },
        // 判断是否为小写
        isLowercase(val) {
            let reg = /[a-z]/g
            return reg.test(val)
        },
        // 点击span触发input
        handleClick() {
            this.$refs.input.focus()
        }
    }
}
</script>

<style scoped>
    .pass-input{
        width: 200px;
        height: 30px;
        position: relative;
    }
    .password{
        height: 30px;
        width: 200px;
        outline: 0;
    }
    .mask{
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        z-index: 9;
    }
</style>

