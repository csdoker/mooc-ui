<template>
  <div class="home">
    <mooc-badge type="primary" :value="10">
      <div class="mooc-button">消息</div>
    </mooc-badge>
    <mooc-badge type="success" :value="100" :max="99">
      <div class="mooc-button">消息</div>
    </mooc-badge>
    <mooc-badge :value="100" :is-dot="true">
      <div class="mooc-button">消息</div>
    </mooc-badge>
    <mooc-badge value="hot">
      <div class="mooc-button">消息</div>
    </mooc-badge>
    <mooc-badge value="hot" :hidden="true">
      <div class="mooc-button">消息</div>
    </mooc-badge>
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
