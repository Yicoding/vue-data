<template>
  <div>
      <example></example>
  </div>
</template>

<script>
import example from 'components/chart/example'
export default {
    components: {
        example,
    },
    created() {

        // Math.sqrt(5)/5 * (
        //     Math.pow(
        //         (1+Math.sqrt(5))/2,n
        //     )-Math.pow(
        //         (1-Math.sqrt(5))/2,n
        //     )
        // )
    }
}
</script>

<style scoped>

</style>
