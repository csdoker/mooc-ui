<template>
  <div class="mooc-steps" :class="`mooc-steps-${direction}`">
    <slot></slot>
  </div>
</template>

<script>
import { baseDirection, processStatus } from 'assets/js/mooc.config.js'
export default {
  name: 'MoocSteps',
  props: {
    space: [Number, String],
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (val) {
        return baseDirection.includes(val)
      }
    },
    processStatus: {
      type: String,
      default: 'process',
      validator (val) {
        return processStatus.includes(val)
      }
    },
    finishStatus: {
      type: String,
      default: 'finish',
      validator (val) {
        return processStatus.includes(val)
      }
    }
  },
  data () {
    return {
      steps: []
    }
  },
  watch: {
    steps (steps) {
      steps.forEach((step, index) => {
        step.index = index
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/steps-variables.styl';
  .mooc-steps
    display: flex
    .mooc-steps-horizontal
      white-space: nowrap;
    .mooc-steps-vertical
      flex-direction: column;
</style>
