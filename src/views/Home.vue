<template>
  <div class="home">
    <mooc-timeline>
      <mooc-timeline-item></mooc-timeline-item>
    </mooc-timeline>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      value: true,
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
