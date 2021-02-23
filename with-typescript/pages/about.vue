<template>
  <div>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <NuxtLink to="/">
        Go home
      </NuxtLink>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head: {
    title: 'About | Nuxt.js + TypeScript Example',
  }
})
</script>
