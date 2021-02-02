<template>
  <div>About us</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'setTitle',
  meta: {
    title: 'About us'
  }
})
</script>
