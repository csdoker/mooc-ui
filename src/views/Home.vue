<template>
  <div class="home">
    <mooc-timeline reverse>
      <mooc-timeline-item timestamp="2019-11-12 17:53:56">123</mooc-timeline-item>
      <mooc-timeline-item hide-timestamp placement="top" timestamp="2019-11-11 17:53:56">456</mooc-timeline-item>
    </mooc-timeline>
    <mooc-timeline>
      <mooc-timeline-item size="small" type="primary" timestamp="2019-11-12 17:53:56">123</mooc-timeline-item>
      <mooc-timeline-item size="normal" type="success" timestamp="2019-11-11 17:53:56">456</mooc-timeline-item>
      <mooc-timeline-item size="medium" type="warning" timestamp="2019-11-12 17:53:56">789</mooc-timeline-item>
      <mooc-timeline-item size="large" type="danger" timestamp="2019-11-11 17:53:56">123</mooc-timeline-item>
      <mooc-timeline-item size="large" type="info" timestamp="2019-11-11 17:53:56">456</mooc-timeline-item>
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
    .mooc-timeline {
      display: inline-block;
      vertical-align: top;
      margin-right: 150px;
    }
  }
</style>
