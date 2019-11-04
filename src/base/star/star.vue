<template>
  <div class="mooc-star">
    <span
      v-for="n in max"
      :key="n"
      class="mooc-star-item"
      :class="{
        'is-disabled': disabled
      }"
      @mouseenter="handleMouseEnter(n)"
      @mouseleave="handleMouseLeave"
      @click="handleStarClick(n)"
    >
      <i
        class="iconfont iconxingxing"
        :style="{
          color: getIconColor(n)
        }"
      ></i>
    </span>
    <span
      v-if="showValue"
      class="mooc-star-text">
      {{ text }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'MoocStar',
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    color: {
      type: String,
      default: '#ff9900'
    },
    showValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 14
    },
    textColor: {
      type: String,
      default: '#ff9900'
    },
    showText: {
      type: Boolean,
      default: false
    },
    texts: {
      type: Array,
      default () {
        return ['极差', '失望', '一般', '满意', '惊喜']
      }
    },
    iconClass: String
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleMouseEnter (val) {
      if (this.disabled) {
        return
      }
      this.currentValue = val
    },
    handleMouseLeave () {
      if (this.disabled) {
        return
      }
      this.currentValue = this.value
    },
    handleStarClick (val) {
      if (this.disabled) {
        return
      }
      this.currentValue = val
      this.$emit('change', val)
      this.$emit('input', val)
    },
    getIconColor (val) {
      return val <= this.currentValue ? this.color : '#eee'
    }
  },
  computed: {
    text () {
      let result = ''
      if (this.showValue) {
        result = this.currentValue
      }
      return result
    }
  }
}
</script>
<style lang="stylus">
  @import '~assets/theme/src/star-variables.styl';
  .mooc-star
    display: inline-block;
    .mooc-star-item, .mooc-star-text
      display: inline-block;
      vertical-align: middle;
    .mooc-star-item
      margin-right: $star-item-margin-right;
      cursor: default;
      &:last-child
        margin-right: 0;
      &.is-disabled
        pointer-events: none;
      &:not(.is-disabled)
        cursor: pointer;
        .iconfont
          display: inline-block;
          transition: all $star-icon-transition-duration;
        &:hover
          .iconfont
            transform: scale($star-icon-hover-scale);
    .mooc-star-text
      padding-left: $star-text-padding-left;
      font-size: $star-text-font-size;
</style>
