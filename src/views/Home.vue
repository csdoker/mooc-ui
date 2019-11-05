<template>
  <div class="home">
    <mooc-star
      v-model="starVal"
      :size="30"
      icon-class="iconbanxing"
      :show-text="true"
    ></mooc-star>
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
