<template>
  <div class="home">
    <mooc-progress :percentage="percentage" :height="height"></mooc-progress>

    <button @click="handleReduceClick">减少</button>
    <button @click="handleAddClick">增长</button>
    <button @click="handleStartClick">开始(高{{height}})</button>
    <button @click="handleStopClick">结束(高{{height}})</button>
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
  },
  methods: {
    handleReduceClick () {
      this.percentage -= 10
    },
    handleAddClick () {
      this.percentage += 10
    },
    handleStartClick () {
      this.timer = setInterval(() => {
        this.height++
      }, 50)
    },
    handleStopClick () {
      clearInterval(this.timer)
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
