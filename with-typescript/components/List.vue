<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <ListItem :data="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import ListItem from '@/components/ListItem.vue'
import { User } from '@/interfaces'

export default defineComponent({
  components: {
    ListItem,
  },
  props: {
    items: {
      type: Array as PropType<User[]>,
    },
  }
})
</script>
