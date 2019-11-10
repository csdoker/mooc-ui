<template>
  <div class="home">
    <mooc-switch
      v-model="value"
      active-color="#f60"
      active-text="按月付"
      inactive-color="#666"
      inactive-text="按年付"
    ></mooc-switch>
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
    .mooc-button {
      width: 60px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      border: 1px solid #58a;
      color: #58a;
      border-radius: 4px;
    }
    .mooc-badge {
      margin-right: 30px;
    }
  }
</style>
