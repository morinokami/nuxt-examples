<template>
  <div>
    <div v-if="data.error">Failed to load</div>
    <div v-else-if="!data.people">Loading...</div>
    <ul v-else>
      <person v-for="(p, i) in data.people" :key="i" :person="p" />
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import Person from '@/components/Person'

export default defineComponent({
  components: {
    Person
  },
  setup() {
    const data = reactive({
      people: null,
      error: false
    })

    fetch('http://localhost:3000/api/people')
      .then(async (res) => data.people = await res.json())
      .catch((err) => data.error = true)

    return { data }
  }
})
</script>
