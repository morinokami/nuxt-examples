<template>
  <div>Hello World.</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'setTitle',
  meta: {
    title: 'This is the default title'
  }
})
</script>
