<template>
  <div>
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List :items="items" />
    <p>
      <NuxtLink to="/">
        Go home
      </NuxtLink>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import List from '@/components/List.vue'
import { sampleUserData } from '@/utils/sample-data'

export default defineComponent({
  head: {
    title: 'Users List | Nuxt.js + TypeScript Example',
  },
  components: {
    List
  },
  setup() {
    return {
      items: sampleUserData,
    }
  }
})
</script>
