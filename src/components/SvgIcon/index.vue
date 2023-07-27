<template>
  <svg aria-hidden="true" class="base-svg-icon" :style="sizeStyle">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup>
/**
 * SvgIcon组件
 * @see https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md
 */
const props = defineProps({
  // svg-icon 名称，为方便区分管理可在 src/assets/svg-icon 下定义模块目录
  // 如：svg-icon/editor/bold.svg 在组件调用时候即可写为 <svg-icon name="editor-bold"/>
  name: {
    type: String,
    default: '',
    required: true,
  },
  size: {
    type: [Number, String],
    default: 18,
  },
})

const symbolId = computed(() => `#icon-${props.name}`)
const sizeStyle = computed(() => {
  const { size } = props
  let s = `${size}`
  s = `${s.replace('px', '')}px`
  return {
    width: s,
    height: s,
  }
})
</script>

<style lang="scss">
.base-svg-icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  outline: none;
  fill: currentColor;
}
</style>
