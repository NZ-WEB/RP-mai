<template>
  <q-card flat bordered class="custom-card q-my-md">
    <q-item>
      <q-item-section>
        <q-item-label v-if="!isEditing" header class="text-h6 text-black">
          {{ conferences.name }}
        </q-item-label>
        <q-input v-else :model-value="conferences.name" />
      </q-item-section>

      <q-item-section>
        <q-item-label v-if="!isEditing" header class="text-body1 text-primary">
          {{ conferences.theme }}
        </q-item-label>
        <q-input v-else :model-value="conferences.theme" />
      </q-item-section>
    </q-item>
  </q-card>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import {IConference} from 'src/types/IConference';

defineProps({
  conferences: {
    type: Object as PropType<IConference>,
    require: true,
  },
  isEditing: {
    type: Boolean,
    require: true,
  },
});
</script>

<style scoped lang="scss">
.custom-card {
  border-radius: 20px;
}
</style>
