<template>
  <q-card flat bordered class="custom-card q-my-md">
    <q-item>
      <q-item-section>
        <q-item-label v-if="!isEditing" header class="text-h6 text-black">
          {{ publication.topicName }}
        </q-item-label>
        <q-input v-else :model-value="publication.topicName"/>
      </q-item-section>

      <q-item-section>
        <q-item-label v-if="!isEditing" header>
          {{ publication.publishingHouseName }}
        </q-item-label>
        <q-input v-else :model-value="publication.publishingHouseName"/>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script setup lang="ts">
import {PropType} from 'vue';
import {IPublication} from 'src/types/IPublication';

defineProps({
  publication: {
    type: Object as PropType<IPublication>,
    require: true,
  },
  isEditing: {
    type: Boolean,
    require: true,
  }
})
</script>

<style scoped lang="scss">
.custom-card {
  border-radius: 20px;
}
</style>
