<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">
          Home
        </NuxtLink>
        |
        <NuxtLink to="/about">
          About
        </NuxtLink>
        |
        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
      </nav>
    </header>

    <Nuxt />

    <footer>I`m here to stay</footer>
  </div>
</template>

<script>
import { computed, defineComponent, useContext, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  head() {},
  setup() {
    const { store } = useContext()
    const title = computed(() => store.state.title)

    useMeta({
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }
      ]
    })
  }
})
</script>
