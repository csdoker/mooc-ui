<template>
  <div
    class="mooc-step"
    :class="[
      `is-${parentDirection}`,
      isLast && `is-last`
    ]"
    :style="stepStyle"
  >
    <!-- icon & line -->
    <div class="mooc-step-head">
      <div class="mooc-step-line">
        <i class="mooc-step-line-inner"></i>
      </div>
      <div class="mooc-step-icon">
        <div class="mooc-step-icon-inner">
          <slot name="icon">
            {{ index + 1 }}
          </slot>
        </div>
      </div>
    </div>

    <!-- title & description -->
    <div class="mooc-step-main">
      <div v-if="title || $slots.title" class="mooc-step-title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div v-if="description || $slots.description" class="mooc-step-description">
        <slot name="description">
          {{ description }}
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MoocStep',
  props: {
    title: String,
    description: String,
    icon: String,
    status: String
  },
  data () {
    return {
      index: -1
    }
  },
  beforeCreate () {
    this.$parent.steps.push(this)
  },
  computed: {
    parentDirection () {
      return this.$parent.direction
    },
    parentSpace () {
      return this.$parent.space
    },
    stepStyle () {
      let style = {}
      if (this.parentSpace) {
        style.flexBasis = (typeof parent.space === 'number') ? `${parent.space}px` : parent.space
      } else {
        style.flexBasis = `${100 / (this.stepCount - 1)}%`
      }
      if (this.isLast) {
        style.flexBasis = ''
        style.maxWidth = `${100 / this.stepCount}%`
      }
      return style
    },
    stepCount () {
      return this.$parent.steps.length
    },
    isLast () {
      return this.$parent.steps[this.stepCount - 1] === this
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/steps-variables.styl';
  .mooc-step
    position: relative;
    flex-shrink: 1;
    &.is-last
      flex-basis: auto;
      flex-shrink: 0;
      flex-grow: 0;
</style>
