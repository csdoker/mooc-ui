<script>
export default {
  name: 'MoocTimeline',
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  render () {
    let reverse = this.reverse
    let slots = this.$slots.default || []
    let classs = {
      'mooc-timeline': true
    }
    if (reverse) {
      slots = slots.reverse()
    }

    return (
      <ul class={ classs }>
        { slots }
      </ul>
    )
  }
}
</script>
<style lang="stylus" scoped>
  .mooc-timeline
    list-style: none;
</style>
