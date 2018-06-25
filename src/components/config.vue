<template>
  <div>
      config
  </div>
</template>

<script>
import queryString from 'components/test/index'
import {goto} from 'components/test/index'
export default {
    created() {
        queryString.AGget()
        queryString.GLget()
        queryString.goto()
        goto()
    }
}
</script>

<style scoped>

</style>
