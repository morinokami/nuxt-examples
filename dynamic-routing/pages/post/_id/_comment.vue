<template>
  <div>
    <Header />
    <h1>Post: {{ id }}</h1>
    <h1>Comment: {{ comment }}</h1>
  </div>
</template>

<script>
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import Header from '@/components/Header'

export default defineComponent({
  components: {
    Header
  },
  setup() {
    const { route } = useContext()
    const { id, comment } = route.value.params

    return { id, comment }
  }
})
</script>
