<template>
  <h1>This page has a title 🤔</h1>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  head() {},
  setup() {
    useMeta({
      title: 'This page has a title 🤔',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }
      ]
    })
  }
})
</script>
