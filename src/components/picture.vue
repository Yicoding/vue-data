<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>图片</el-breadcrumb-item>
      <el-breadcrumb-item>H5拍照上传(移动端)</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="div-top"></div>
    <div class="weui-cells weui-cells_form" v-for="(li, index) in idArr" :id="li.uploader" :key="li.uploader">
      <div class="weui-cell">
          <div class="weui-cell__bd">
              <div class="weui-uploader">
                  <div class="weui-uploader__hd">
                      <p class="weui-uploader__title">图片上传</p>
                  </div>
                  <div class="weui-uploader__bd">
                      <ul class="weui-uploader__files" :id="li.uploaderFiles"></ul>
                      <div class="weui-uploader__input-box">
                          <input class="weui-uploader__input" type="file" name="file" accept="image/*"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      idArr: [],
    }
  },
  created() {
    setTimeout(() => {
      for (let i = 0; i < 5; i ++) {
        let uploader = `uploader${i}`
        let uploaderFiles = `uploaderFiles${i}`
        this.idArr.push({uploader: uploader, uploaderFiles: uploaderFiles})
      }
    },500)
  },
  watch: {
    idArr() {
      this.$nextTick(() => {
          /* 图片自动上传 */
        let vm = this
        this.idArr.forEach((todo) => {
          console.log(todo.uploader)
          this.weui.uploader(`#${todo.uploader}`, {
            // url: 'http://192.168.10.238:9000/edit/img/upload',
            url: '/edit/img/upload',
            auto: true,
            type: 'file',
            fileVal: 'file',
            compress: {
              // width: 1600,
              // height: 1600,
              // quality: .5 // .5大概100K+   .8大概300K+   .1大概40K+
              quality: .5 // .5大概100K+   .8大概300K+   .1大概40K+
            },
            // compress: false,
            onSuccess: function (ret) {
              console.log(this, ret);
            },
            onError: function(err){
              console.log(this, err);
            }
          });
        })
        // 缩略图预览
        this.idArr.forEach((todo) => {
          console.log(todo.uploaderFiles)
          document.getElementById(todo.uploaderFiles).addEventListener('click', function(e){
            console.log('click')
            var target = e.target;

            while(!target.classList.contains('weui-uploader__file') && target){
              target = target.parentNode;
            }
            if(!target) return;

            var url = target.getAttribute('style') || '';

            if(url){
              url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
            }
            var gallery = vm.weui.gallery(url, {
              onDelete: function(){
                vm.weui.confirm('确定删除该图片？', function(){
                  target.remove();
                  gallery.hide();
                });
              }
            });
          });
        })
      })
    }
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     /* 图片自动上传 */
  //     let vm = this
  //     this.idArr.forEach((todo) => {
  //       console.log(todo.uploader)
  //       this.weui.uploader(`#${todo.uploader}`, {
  //         // url: 'http://192.168.10.238:9000/edit/img/upload',
  //         url: '/edit/img/upload',
  //         auto: true,
  //         type: 'file',
  //         fileVal: 'file',
  //         compress: {
  //           // width: 1600,
  //           // height: 1600,
  //           // quality: .5 // .5大概100K+   .8大概300K+   .1大概40K+
  //           quality: .9 // .5大概100K+   .8大概300K+   .1大概40K+
  //         },
  //         // compress: false,
  //         onSuccess: function (ret) {
  //           console.log(this, ret);
  //         },
  //         onError: function(err){
  //           console.log(this, err);
  //         }
  //       });
  //     })
  //     // 缩略图预览
  //     this.idArr.forEach((todo) => {
  //       console.log(todo.uploaderFiles)
  //       document.getElementById(todo.uploaderFiles).addEventListener('click', function(e){
  //         console.log('click')
  //         var target = e.target;

  //         while(!target.classList.contains('weui-uploader__file') && target){
  //           target = target.parentNode;
  //         }
  //         if(!target) return;

  //         var url = target.getAttribute('style') || '';

  //         if(url){
  //           url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
  //         }
  //         var gallery = vm.weui.gallery(url, {
  //           onDelete: function(){
  //             vm.weui.confirm('确定删除该图片？', function(){
  //               target.remove();
  //               gallery.hide();
  //             });
  //           }
  //         });
  //       });
  //     })
  //   })
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
