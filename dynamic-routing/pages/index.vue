<template>
  <div>
    <Header></Header>
    <h1>Hello World!</h1>
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
