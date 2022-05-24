<template>
  <q-item-label class="q-my-sm">
    <div v-if="!isEditing">
      <span class="text-body1">{{ literName }}: {{ item }}</span>
      <q-separator class="q-my-sm"/>
    </div>
    <q-input
      outlined
      v-else
      :model-value="item"
      @input="updateInput(newValue)"
      class="full-width "
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
