<template>
  <h4>Научные конференции</h4>
  <q-carousel
    v-if="getConferences.length && !error"
    v-model="slide"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    control-color="primary"
    navigation
    padding
    arrows
    height="200px"
    class="full-width"
  >
    <q-carousel-slide v-for="conference in getConferences" :key="conference.id" :name="conference.id" class="column no-wrap flex-center">
      <div class="q-mt-md text-center text-body1">
        {{ conference.name }}
      </div>
    </q-carousel-slide>
  </q-carousel>
  <div v-else class="q-pa-md">
    <q-spinner size="md" color="primary"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useConferencesStore} from 'stores/conferences-store';
import {storeToRefs} from 'pinia/dist/pinia';
const conferencesStore = useConferencesStore();
const conferencesStoreRefs = storeToRefs(conferencesStore);

const { loadAll } = conferencesStore;
const  {getConferences, error } = conferencesStoreRefs;


const slide = ref<number>(1);

loadAll();

</script>
