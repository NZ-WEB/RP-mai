<template>
  <app-fined-data-validate-with-spinner :condition="!!nirs.length && !error">
    <q-card flat bordered class=custom-card>
      <q-item>
        <q-item-section>
          <q-item-label header class="text-h6">
            Научные работы
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-list bordered separator v-for="row in nirs" :key="row.code" class="q-my-none">
          <q-item @click="handleRoute(row.code)" clickable>
            <q-item-label header line item class="q-px-md text-black">
              {{ row.shortWorkTitle }}
            </q-item-label>
          </q-item>
      </q-list>
    </q-card>
  </app-fined-data-validate-with-spinner>
</template>

<script setup lang="ts">
import  {useNirsStore } from 'stores/nirs-store';
import {storeToRefs} from 'pinia/dist/pinia';
import AppFinedDataValidateWithSpinner from 'components/AppFinedDataValidateWithSpinner.vue';
import {useRouter} from 'vue-router';

defineProps({
  id: {
    type: Number,
    require: true
  }
})

const nirsStore = useNirsStore();
const {loadAll} = nirsStore;
const router = useRouter();

const { nirs, error } = storeToRefs(nirsStore);

const handleRoute = (code: string) => {
  router.push(`/nirs/${code}`);
};

loadAll();
</script>

<style lang="scss" scoped>
.custom-card {
  border-radius: 20px;
}
</style>
