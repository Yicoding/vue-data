<template>
    <div>
        <el-button @click="open" :loading="loading">{{btnText}}</el-button>
        <msg-box ref="box" :percentage="percentage" :over="over"></msg-box>
    </div>
</template>

<script>
    import msgBox from 'components/msg-box'
    // import SockJS from 'sockjs-client'
    import EventBus from 'vertx3-eventbus-client'

    // var eb = new EventBus('http://192.168.10.240:8080/eb/notification')

    // eb.onopen = () => {
    //     console.log('one')
    //     console.log( eb.registerHandler)
    //     // set a handler to receive a message
    //     eb.registerHandler('eb.task', (error, message) => {
    //         console.log('open')
    //         console.log(error)
    //         console.log('received a message: ' + JSON.stringify(message))
    //     });
    //     console.log('end')

    //     // send a message
    //     // this.eb.send('some-address', {name: 'tim', age: 587})

    // }
    
    export default {
        components: {
           msgBox 
        },
        data() {
            return {
                sock: null,
                percent: 0,
                timee: null,
                percentage: 0,
                over: '',
                loading: false,
                btnText: '下载',
                eb: null,
                uid: null,
                msg: null,
            }
        },
        created() {
            // this.sock = new SockJS('https://mydomain.com/my_prefix')
            // this.sock.onopen = () => {
            //     console.log('open')
            //     this.sock.send('test')
            // }

            // this.sock.onmessage = (e) => {
            //     console.log('message', e.data)
            //     this.sock.close()
            // }

            // this.sock.onclose = () => {
            //     console.log('close')
            // }

            this.eb = new EventBus('http://192.168.10.240:8080/eb/notification')

            this.eb.onopen = () => {
                console.log('one')
                // set a handler to receive a message
                this.eb.registerHandler('eb.task', (error, message) => {
                    console.log('callback')
                    // console.log(error)
                    console.log('received a message: ' + JSON.stringify(message))
                    if (message.body.id === this.uid && message.body.state) {
                        this.loading = false
                        this.btnText = '开始下载'
                        this.msg = message.body.msg
                    }
                });
                // console.log('end')

                // send a message
                // this.eb.send('some-address', {name: 'tim', age: 587})

            }
            this.eb.onerror = (err) => {
                console.log(err)
            }
        },
        beforeDestroy() {
            this.eb.close()
        },
        methods: {
            // open() {
            //     if (this.btnText = '完成') {
            //         this.btnText = '下载'
            //     }
            //     this.loading = true
            //     this.$refs.box.show()
            //     this.percentage = 0
            //     this.over = ''
            //     clearInterval(this.timee)
            //     this.timee = setInterval(() => {
            //         this.percentage ++
            //         if (this.percentage > 99) {
            //             clearInterval(this.timee)
            //             this.over = 'success'
            //             this.loading = false
            //             this.btnText = '完成'
            //         }
            //     }, 50)
            // }
            open() {
                if (this.btnText === '下载') {
                    this.loading = true
                    this.btnText = '准备数据'
                    this.uid= this.RndNum(6)
                    this.$http.get(`http://192.168.10.240:8080/eb/task/${this.uid}`).then((res) => {

                    })
                } else if (this.btnText === '开始下载') {
                    location.href = this.msg
                }
            },
            RndNum(n) {
                var rnd="";
                for(var i = 0; i < n; i++) {
                    rnd += Math.floor(Math.random() * 10)
                }
                return rnd
            }
        }
    }
</script>

<style>

</style>


