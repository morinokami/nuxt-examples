<template>
  <div>
    <Header />
    <h1>Post: {{ id }}</h1>
    <ul>
      <li>
        <NuxtLink :to="`/post/${id}/first-comment`">
          <a>First comment</a>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/post/${id}/second-comment`">
          <a>Second comment</a>
        </NuxtLink>
      </li>
    </ul>
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
    const { id } = route.value.params

    return { id }
  }
})
</script>
