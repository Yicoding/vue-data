<template>
    <div class="model" v-show="canConfirm">
        <div class="prompt center-block">
            <div class="p-head">{{title}}</div>
            <div class="p-main">
                <p>{{content}}</p>
            </div>
            <div class="p-foot flexbox">
                <button class="consider flex-1" @click="cancel">{{buttons[0]}}</button>
                <div class="line"></div>
                <button class="sure flex-1" @click="confirm">{{buttons[1]}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '提示'
            },
            content: {
                type: String,
                default: ''
            },
            buttons: {
                type: Array,
                default: ['考虑一下','确定']
            }
        },
        data() {
          return {
              canConfirm: false
          }
        },
        methods: {
            confirm() {
                this.canConfirm = false;
                this.$emit('clickButton');
            },
            cancel() {
                this.canConfirm = false;
            }
        }
    }
</script>

<style lang="scss">
    // @import '../common/styles/common/_mixin.scss';
    .model {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 9, .3);
        z-index: 10;
    }

    .prompt {
        // width: rem(540);
        width: 540px;
        background: #fff;
        // @include border-radius(rem(6));
        border-radius: 6px;
        margin-top: 50%;
        // @include textAlign(center);
        text-align: center;
        overflow: hidden;
        .p-head {
            height: rem(100);
            height: 100px;
            // line-height: rem(100);
            line-height: 100px;
            // font-size: rem(32);
            font-size: 32px;
            color: #3A3D50;
        }
        .p-main {
            // padding: rem(88) 0;
            padding: 88px 0;
            p {
                // font-size: rem(28);
                font-size: 28px;
                color: #878E99;
            }
        }
        .p-foot{
            // height: rem(90);
            height: 90px;
            // line-height: rem(90);
            line-height: 90px;
            border-top: 1px solid #CFD2DA;
            color: #ADADAD;
            .line{
                width: 1px;
                // height: rem(50);
                height: 50px;
                // margin-top: rem(20);
                margin-top: 20px;
                background: #CFD2DA;
            }
            button{
                background: #fff;
            }
            .sure{
                color: #CB9D6D;
            }
        }
    }
</style>
