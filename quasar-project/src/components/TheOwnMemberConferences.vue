<template>
  <q-card flat bordered class="custom-card q-pa-md q-my-md custom-card">
    <h6 v-if="title" class="q-my-none q-px-md text-grey">{{ title }}</h6>

    <q-item class="items-start">
      <q-item-section class="col-11">
        <app-fined-data-validate-with-spinner
          :condition="!!getConferences.length && !error"
        >
          <app-own-member-conferences-item
            v-for="conferences in getConferences"
            :key="conferences.id"
            :conferences="conferences"
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

    <q-btn
      v-if="isEditing"
      @click="handleSave"
      outline
      color="primary"
      rounded
      class="q-ma-md q-mt-none"
    >
      Сохранить
    </q-btn>
  </q-card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia/dist/pinia';
import AppFinedDataValidateWithSpinner from 'components/AppFinedDataValidateWithSpinner.vue';
import { ref } from 'vue';
import { useConferencesStore } from 'stores/conferences-store';
import AppOwnMemberConferencesItem from 'components/AppOwnMemberConferencesItem.vue';

defineProps({
  title: {
    type: String,
    require: true,
  },
});

const conferencesStore = useConferencesStore();
const { loadAll } = conferencesStore;
const { getConferences, error } = storeToRefs(conferencesStore);

const isEditing = ref<boolean>(false);
const setIsEditing = () => {
  isEditing.value = !isEditing.value;
};

const handleSave = () => {
  setIsEditing();
  //
};

loadAll();
</script>

<style scoped lang="scss">
.custom-card {
  border-radius: 20px;
}
</style>
