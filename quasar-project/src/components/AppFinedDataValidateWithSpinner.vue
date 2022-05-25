<template>
  <div v-if="condition">
    <slot/>
  </div>
  <div v-else class="q-ma-md">
    <q-spinner color="primary" size="md"/>
  </div>
</template>

<script setup lang="ts">
import {PropType} from 'vue';

defineProps({
  condition: {
    type: Boolean as PropType<boolean | undefined>,
    require: true
  }
})

</script>
