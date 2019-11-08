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
      :name="name"
      class="mooc-switch-input"
      @change="handleInputChange"
    >
    <span
      v-if="inactiveText"
      v-text="inactiveText"
      class="mooc-switch-label mooc-switch-label-left"
      :class="{
        'is-active': !checked
      }"
    ></span>
    <span
      ref="SwitchRadius"
      class="mooc-switch-radius"
      :style="{
        width: `${width}px`
      }"
    ></span>
    <span
      v-if="activeText"
      v-text="activeText"
      class="mooc-switch-label mooc-switch-label-right"
      :class="{
        'is-active': checked
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
    activeColor: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ''
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
    this.setSwitchColor()
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
    },
    setSwitchColor () {
      const color = this.checked ? this.activeColor : this.inactiveColor
      if (color) {
        let switchRaduis = this.$refs['SwitchRadius']
        switchRaduis.style.backgroundColor = color
        switchRaduis.style.borderColor = color
      }
    }
  },
  watch: {
    checked (newVal, oldVal) {
      if (newVal === oldVal) {
        return false
      }
      this.setSwitchColor()
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
