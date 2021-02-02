<template>
  <div>
    <Header></Header>
    <h1>About page</h1>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '@/components/Header'

export default defineComponent({
  components: {
    Header
  }
})
</script>
