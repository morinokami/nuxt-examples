<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.main {
  font: 15px Helvetica, Arial;
  border: 1px solid #eee;
  padding: 0 10px;
}
h1 {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}
</style>