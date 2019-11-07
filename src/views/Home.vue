<template>
  <div class="home">
    <mooc-badge></mooc-badge>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      starVal: 3
    }
  }
}
</script>
<style lang="stylus" scoped>
  .home {
    margin: 100px auto;
    width: 800px;
  }
</style>
