<template>
  <div class="box">
    <aside>
      <aside-content></aside-content>
    </aside>
    <div class="content">
      <header>
        <h3 class="h-text">header</h3>
      </header>
      <section ref="section">
        <router-view :key="$route.path"/>
      </section>
      <transition name="fade">
        <div class= "returnTop"  @click="backToTop" v-show="show"></div>
      </transition>
    </div>
  </div>
</template>

<script>
import asideContent from 'components/aside-content'
export default {
  components: {
    asideContent
  },
  data() {
    return {
      scrollTop: 0,
      show: false,
      interval: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.section.addEventListener('scroll', this.handleScroll, true)
    })
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
      if (this.$refs.section.scrollTop >= this.scrollTop / 2) {
        this.show = true 
      } else {
        this.show = false
      }
    },
    backToTop() {
      this.interval = setInterval(() => {
        var current = this.$refs.section.scrollTop;
        var step = (0 - current) / 10;
        step = Math.ceil(step);
        current += step;
        if(current <= 10) {
          current = 0 
        }
        this.$refs.section.scrollTop = current
        if (current <= 0) {
          clearInterval(this.interval);
        }
      }, 10)
    },
  },
  beforeDestroy() {
   this.$refs.section.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
}
</script>

<style scoped>
  .h-text {
    padding-left: 20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .returnTop {
    position: fixed;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    right: 50px;
    bottom: 50px;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    line-height: 45px;
    background-image: url("assets/images/ruturnTop.png");
     background-size: 40px 40px;
  }
</style>
