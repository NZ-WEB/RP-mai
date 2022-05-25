<template>
  <q-card flat bordered class="custom-card">
    <q-item>
      <q-item-section>
        <q-item-label header>
          {{ publication.topicName }}
        </q-item-label>
      </q-item-section>

      <q-item-section>
        <q-item-label header>
          {{ publication.publishingHouseName }}
        </q-item-label>
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
  }
})
</script>

<style scoped lang="scss">
.custom-card {
  border-radius: 20px;
}
</style>
