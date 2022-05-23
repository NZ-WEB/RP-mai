<template>
  <q-item-label class="q-my-sm">
    <span v-if="!isEditing">{{ literName }}: {{ item }}</span>
    <q-input
      outlined
      v-else
      :model-value="item"
      @input="updateInput(newValue)"
      class=""
      label="оклад"
    />
  </q-item-label>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: String,
    require: true,
  },
  literName: {
    type: String,
    require: true,
  },
  isEditing: {
    type: Boolean,
    require: true,
  },
});

const emit = defineEmits({
  'update:item': null,
});

const updateInput = (newValue: string) => {
  emit('update:item', newValue);
};
</script>
