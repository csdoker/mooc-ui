<template>
  <div class="mooc-badge">
    <slot></slot>
    <span
      v-show="showContent"
      class="mooc-badge-content"
      :class="[
        `mooc-badge-content-${type}`,
        {
          'is-absolute': $slots.default,
          'is-dot': isDot
        }
      ]"
      v-text="content"
    ></span>
  </div>
</template>
<script>
import { baseType } from 'assets/js/mooc.config.js'
export default {
  name: 'MoocBadge',
  props: {
    value: [String, Number],
    max: Number,
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'danger',
      validator (val) {
        return baseType.includes(val)
      }
    }
  },
  computed: {
    content () {
      if (this.isDot) {
        return ''
      }
      let value = +this.value
      if (Number.isNaN(value)) {
        return this.value
      }
      return value > this.max ? `${this.max}+` : value
    },
    showContent () {
      return !this.hidden && (this.content || +this.content === 0 || this.isDot)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/badge-variables.styl';
  @import '~assets/theme/mixin/badge-mixin.styl';
  .mooc-badge
    position: relative
    display: inline-block;
    .mooc-badge-content
      display: inline-block;
      padding: $badge-veritcal-padding $badge-horizontal-padding;
      height: $badge-size;
      line-height: $badge-size;
      border-radius: $badge-border-radius;
      background-color: $base-danger;
      font-size: $badge-font-size;
      color: $badge-color;
      badge-type($badge-types, $base-primary $base-success $base-warning $base-danger $base-info);
      &.is-absolute
        position: absolute;
        top: 0;
        right: unit($badge-size / 2 + 1, 'px');
        transform: translate(100%, -50%);
        &.is-dot
          right: $badge-dot-absolute-right;
      &.is-dot
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
        width: $badge-dot-size;
        height: $badge-dot-size;
        border-radius: $base-border-radius-circle;
</style>
