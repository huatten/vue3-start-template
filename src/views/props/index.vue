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
console.log(props.element)
</script>
