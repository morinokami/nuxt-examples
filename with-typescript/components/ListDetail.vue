<template>
  <div>
    <h1>Detail for {{ user.name }}</h1>
    <p>ID: {{ user.id }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api'
import { User } from '@/interfaces'

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>
    },
  },
})
</script>
