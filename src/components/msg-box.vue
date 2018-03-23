<template>
    <transition name="fade">
        <div class="msg-box" v-show="showFlag">
            <p class="p-title" v-text="title"></p>
            <el-progress :percentage="percentage" :status="over"></el-progress>
            <i class="flag-close el-icon-close" @click="hide"></i>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '进度'
            },
            percentage: {
                type: Number,
                default: 0
            },
            over: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                showFlag: false,
            }
        },
        created() {
            
        },
        methods: {
            show() {
                this.showFlag = true
            },
            hide() {
                this.showFlag = false
            },
        }
    }
</script>

<style scoped>
    .msg-box {
        position: fixed;
        top: 16px;
        right: 16px;
        z-index: 2005;
        padding: 20px 26px 30px 13px;
        width: 330px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        overflow: hidden;
    }
    .p-title {
        padding: 10px 5px;
    }
    .flag-close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 20px;
        cursor: pointer;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
        transition: all .5s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: translateX(190px);
    }
</style>


