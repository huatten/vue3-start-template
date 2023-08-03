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
// eslint-disable-next-line vue/no-setup-props-destructure
console.log(props.element)
</script>
