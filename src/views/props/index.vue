<template>
  <div class="custom-component"></div>
</template>
<script setup>
const props = defineProps({
  element: {
    type: Object,
    default: () => ({}),
  },
})

// 推荐
const element = toRef(() => props.element)
console.log(element)

// 不推荐
// eslint-disable-next-line vue/no-setup-props-destructure
console.log(props.element)
</script>
