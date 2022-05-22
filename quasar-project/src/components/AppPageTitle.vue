<template>
  <div class="full-width q-pa-md">
    <h3 class="q-my-md">{{ name }}</h3>

    <p>{{description}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    }
  }
})
</script>
