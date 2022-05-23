<template>
  <q-page padding>
    <q-card bordered flat class="q-pa-md">
      <q-item v-if="filteredUserById">
        <q-item-section avatar>
          <q-avatar size="xl">
            <img :src="filteredUserById.avatar" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ filteredUserById.fullName }}
          </q-item-label>
          <q-item-label caption>
            {{ filteredUserById.post }}
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
        </q-item-label>
      </q-item>
      <div v-else class="q-pa-md">
        <q-spinner size="md" /> Загружаются данные о сотруднике...
      </div>

      <the-own-member-page-member-info
        :is-editing="isEditing"
        :member="member"
      />

      <q-btn
        @click="updateMemberData"
        outline
        class="q-mx-md"
        color="primary"
        v-if="isEditing"
      >
        Сохранить изменения
      </q-btn>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUsersStore } from 'stores/members-store';
import { IUsers } from 'src/types/IUsers';
import TheOwnMemberPageMemberInfo from 'components/TheOwnMemberPageMemberInfo.vue';

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
