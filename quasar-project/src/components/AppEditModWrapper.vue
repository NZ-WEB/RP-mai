<template>
  <div v-if="condition">
    <slot/>
  </div>
  <div v-else>
    <q-input :model-value="model" @input="$emit('update:model', e)"/>
  </div>
</template>

<script setup lang="ts">
import {PropType, Ref} from 'vue';

defineProps({
  condition: {
    type: Boolean,
    require: true,
  },
  model: {
    type: Object,
    require: true,
  }
});

defineEmits({
  'update:model': null
});
</script>
