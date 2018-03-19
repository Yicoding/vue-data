<template>
  <div class="box">
    <aside>
      <aside-content></aside-content>
    </aside>
    <div class="content">
      <header>
        <h3 class="h-text">header</h3>
      </header>
      <section>
        <router-view :key="$route.path"/>
      </section>
    </div>
  </div>
</template>

<script>
import asideContent from 'components/aside-content'
export default {
  components: {
    asideContent
  }
}
</script>

<style scoped>
  .h-text {
    padding-left: 20px;
  }
</style>
