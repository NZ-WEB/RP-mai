<template>
  <q-page padding>
    <app-container>
      <q-item>
        <q-item-label header class="text-black text-h4 q-px-none">
          Информация о сотруднике
        </q-item-label>
      </q-item>

      <q-card bordered flat class="q-mb-md q-pa-md custom-card">
        <q-item v-if="filteredUserById">
          <q-item-section>
            <q-item-label header class="q-px-none text-black text-h5 q-pt-none">
              {{ filteredUserById.fullName }}
            </q-item-label>
            <q-item-label caption class="q-text-body1">
              {{ filteredUserById.post }}
            </q-item-label>
          </q-item-section>

          <q-item-section>
            <q-item-label class="q-pb-md" caption>
              {{ filteredUserById.phoneNumber }}
            </q-item-label>
            <q-item-label caption>
              {{ filteredUserById.birth }}
            </q-item-label>
          </q-item-section>

          <q-item-label>
            <q-btn
              @click="setIsEditing"
              size="sm"
              round
              flat
              :icon="isEditing ? 'close' : 'edit'"
            />

            <q-btn
              @click="updateMemberData"
              outline
              class="q-mx-md"
              color="grey"
              v-if="isEditing"
              rounded
            >
              Сохранить
            </q-btn>
          </q-item-label>
        </q-item>
        <div v-else class="q-pa-md">
          <q-spinner size="md" /> Загружаются данные о сотруднике...
        </div>
      </q-card>

      <the-own-member-page-member-info
        :member="member"
        @updateData="updateMemberData"
        title="Сведения о сотруднике"
      />

      <the-own-member-page-job-plase-info
        :member="member"
        @updateData="updateMemberData"
        title="Информация о месте работы"
      />

      <the-own-member-page-publications
        title="Публикации сотрудника"
      />

    </app-container>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUsersStore } from 'stores/members-store';
import { IUsers } from 'src/types/IUsers';
import TheOwnMemberPageMemberInfo from 'components/TheOwnMemberPageMemberInfo.vue';
import AppContainer from 'components/AppContainer.vue';
import TheOwnMemberPageJobPlaseInfo from 'components/TheOwnMemberPageJobPlaseInfo.vue';
import TheOwnMemberPagePublications from 'components/TheOwnMemberPagePublications.vue';

const route = useRoute();

const { membersList, member } = storeToRefs(useUsersStore());
const { loadMemberList, loadMemberData } = useUsersStore();
const isEditing = ref<boolean>(false);
const setIsEditing = () => (isEditing.value = !isEditing.value);

const userId = computed((): number => {
  const routesArr = route.path.split('/');
  const lastIndex = routesArr.length - 1;
  return parseInt(routesArr[lastIndex]);
});

const filteredUserById = computed((): IUsers | undefined => {
  return membersList.value.filter((user) => user.id === userId.value)[0];
});

const updateMemberData = () => {
  setIsEditing();
  // call to server
};

loadMemberList();
loadMemberData(userId.value);
</script>

<style>
.custom-card {
  border-radius: 20px;
}
</style>
