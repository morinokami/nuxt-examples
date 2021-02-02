<template>
  <div>Contact</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'setTitle',
  meta: {
    title: 'Contact us'
  }
})
</script>