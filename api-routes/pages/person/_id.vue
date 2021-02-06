<template>
  <div>
    <div v-if="data.error">{{ data.error }}</div>
    <div v-else-if="!data.person">Loading...</div>
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ data.person.name }}</td>
          <td>{{ data.person.height }}</td>
          <td>{{ data.person.mass }}</td>
          <td>{{ data.person.hair_color }}</td>
          <td>{{ data.person.skin_color }}</td>
          <td>{{ data.person.eye_color }}</td>
          <td>{{ data.person.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, reactive, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { route } = useContext()
    const data = reactive({
      person: null,
      error: ''
    })

    fetch(`/api/people/${route.value.params.id}`)
      .then(async (res) => {
        if (!res.ok) {
          return Promise.reject(await res.json())
        }
        data.person = await res.json()
      })
      .catch((err) => data.error = err.message)

    return { data }
  }
})
</script>
