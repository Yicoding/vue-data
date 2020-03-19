<template>
  <div>
    <h3>拒绝回调，拥抱async await</h3>
    <p class="indent">之前使用jquery中ajax，请求的结果需要写在回调函数里面，后面接触到了axios/fetch，使用了es6中Promise进行封装，这种链式结构调用，看起来比之前直观，可是还是没有解决回调的问题，甚至axios/fetch相比原生ajax以及jquery中的ajax来说，不支持同步请求，这就导致：当一个请求需要的参数是依赖上一次请求返回的结果时，只能把第二次请求也写在第一次请求的回调里面，当内容过多时，就会被嵌套绕进去，写法上很不优雅。<p>
    <p class="indent">es7中的async await是一个不错的解决办法，配合try catch，代码简洁而优雅，跟回调说拜拜。</p>
    <p class="indent">对jquery中的ajax进一步封装：</p>
    <p class="indent">1.接口配置(dev: 开发，test：测试，prd：生产)</p>
    <img src="../assets/images/step1.png" />
    <p class="indent">2.使用Promise封装ajax</p>
    <img src="../assets/images/step2.png" />
    <p class="indent">3.调用</p>
    <img src="../assets/images/step3.png" />
    <p class="indent">4.使用async await改写</p>
    <img src="../assets/images/step4.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
    
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    text-align: center;
    margin: 10px 0;
  }
  .indent {
    text-indent: 28px;
    margin: 10px 0;
    line-height: 1.6;
  }
  img {
    display: block;
    max-width: 100%;
  }
</style>
