<template>
  <li>
    <NuxtLink :to="`/person/${person.id}`">
      <a>{{ person.name }}</a>
    </NuxtLink>
  </li>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    person: {
      type: Object
    }
  }
})
</script>
