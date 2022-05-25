<template>
  <q-card flat bordered class="custom-card q-pa-md q-my-md custom-card">
    <h6 v-if="title" class="q-my-none q-px-md text-grey">{{ title }}</h6>

    <q-item class="items-start">
      <q-item-section class="col-11">
        <app-fined-data-validate-with-spinner
          :condition="!!getPublications.length && !error"
        >
          <app-own-member-publication-item
            v-for="publication in getPublications"
            :key="publication.publicationId"
            :publication="publication"
            :is-editing="isEditing"
          />
        </app-fined-data-validate-with-spinner>
      </q-item-section>

      <q-item-section class="col-1">
        <q-item-label>
          <q-btn
            @click="setIsEditing"
            size="sm"
            round
            flat
            :icon="isEditing ? 'close' : 'edit'"
          />
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script setup lang="ts">
import { usePublicationsStore } from 'stores/publications-store';
import { storeToRefs } from 'pinia/dist/pinia';
import AppFinedDataValidateWithSpinner from 'components/AppFinedDataValidateWithSpinner.vue';
import AppOwnMemberPublicationItem from 'components/AppOwnMemberPublicationItem.vue';
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    require: true,
  },
});

const publicationsStore = usePublicationsStore();
const { loadAll } = publicationsStore;
const { getPublications, error } = storeToRefs(publicationsStore);

const isEditing = ref<boolean>(false);
const setIsEditing = () => {
  isEditing.value = !isEditing.value;
};

loadAll();
</script>

<style scoped lang="scss">
.custom-card {
  border-radius: 20px;
}
</style>
