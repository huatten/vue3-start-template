<template>
  <div>
    <n-button type="primary" :loading="loading" @click="handleFetch">点我试试</n-button>
  </div>
</template>
<script setup>
import { getSubjectInfo } from '@/api/user'

const loading = ref(false)
const handleFetch = async () => {
  try {
    loading.value = true
    const { data } = await getSubjectInfo()
    console.log(data)
  } catch (e) {
    window.$message.error(e?.message)
  } finally {
    loading.value = false
  }
}
</script>
