<template>
  <div>
    <p v-if="errors">
      <span :style="{ color: 'red' }">Error:</span> {{ errors }}
    </p>
    <ListDetail v-if="item" :user="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, useMeta, useRoute } from '@nuxtjs/composition-api'
import ListDetail from '@/components/ListDetail.vue'
import { sampleUserData } from '@/utils/sample-data'

export default defineComponent({
  head: {},
  components: {
    ListDetail,
  },
  setup() {
    const route = useRoute()
    try {
      const { id } = route.value.params
      const item = sampleUserData.find((data) => data.id === Number(id))
      useMeta({ title: `${item ? item.name : 'User Detail'} | Nuxt.js + TypeScript Example` })
      return { item, errors: null }
    }
    catch (err) {
      useMeta({ title: 'Error | Nuxt.js + TypeScript Example' })
      return { item: null, errors: err.message }
    }
  },
})
</script>
