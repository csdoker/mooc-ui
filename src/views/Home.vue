<template>
  <div class="home">
    <mooc-steps>
      <mooc-step></mooc-step>
      <mooc-step></mooc-step>
      <mooc-step></mooc-step>
      <mooc-step></mooc-step>
    </mooc-steps>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      height: 10,
      percentage: 100
    }
  }
}
</script>
<style lang="stylus" scoped>
  .home {
    margin: 100px auto;
    width: 800px;
    .mooc-progress {
      margin-bottom: 50px;
    }
  }
</style>
