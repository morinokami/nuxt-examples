<template>
  <NuxtLink :to="`/users/${data.id}`">
    {{ data.id }}: {{ data.name }}
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { User } from '@/interfaces'

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<User>
    }
  }
})
</script>
