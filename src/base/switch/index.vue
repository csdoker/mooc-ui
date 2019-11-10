<template>
  <div
    class="mooc-switch"
    :class="{
      'is-disabled': disabled,
      'is-checked': checked
    }"
    @click.prevent="handleSwitchClick"
  >
    <input
      ref="checkbox"
      type="checkbox"
      class="mooc-switch-input"
      @change="handleInputChange"
    >
    <span
      ref="SwitchRadius"
      class="mooc-switch-radius"
      :style="{
        width: `${width}px`
      }"
    ></span>
  </div>
</template>
<script>
export default {
  name: 'MoocSwitch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked () {
      return this.value === this.activeValue
    }
  },
  mounted () {
    this.$refs.checkbox.checked = this.checked
  },
  methods: {
    handleSwitchClick () {
      if (this.disabled) {
        return false
      }
      this.handleInputChange()
    },
    handleInputChange () {
      const val = this.checked ? this.inactiveValue : this.activeValue
      this.$emit('input', val)
      this.$emit('change', val)
      this.$nextTick(() => {
        this.$refs.checkbox.checked = this.checked
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/theme/variables.styl';
  @import '~assets/theme/src/switch-variables.styl';
  .mooc-switch
    position: relative;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    &.is-checked
      .mooc-switch-radius
        background-color: $base-primary;
        border-color: $base-primary;
        &::after
          left: 100%;
          margin-left: unit(1 - 18, 'px');
    &.is-disabled
      pointer-events: none;
      .mooc-switch-radius
        opacity: 0.6;
        cursor: not-allowed;
    .mooc-switch-input
      width: 0;
      height: 0;
      opacity: 0;
    .mooc-switch-label, .mooc-switch-radius
      display: inline-block;
      vertical-align: middle;
    .mooc-switch-label
      transition: color 0.3s;
      font-size: 14px;
      font-weight: normal;
      &.is-active
        color: $base-primary;
      &-left
        margin-right: 10px;
      &-right
        margin-left: 10px;
    .mooc-switch-radius
      position: relative;
      height: 20px;
      line-height: 20px;
      background-color: $base-info;
      border: 1px solid $base-info;
      border-radius: 10px;
      box-sizing: border-box;
      cursor: pointer;
      &::after
        content: '';
        position: absolute;
        left: 1px;
        top: 1px;
        width: 16px;
        height: 16px;
        background-color: #fff;
        border-radius: 50%;
        transition: all 0.3s;
</style>
