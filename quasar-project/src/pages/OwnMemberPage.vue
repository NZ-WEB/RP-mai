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
      </q-item>

      <the-own-member-page-member-info :member="member" />
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUsersStore } from 'stores/members-store';
import { IUsers } from 'src/types/IUsers';
import TheOwnMemberPageMemberInfo from 'components/TheOwnMemberPageMemberInfo.vue';

const route = useRoute();

const { membersList, member } = storeToRefs(useUsersStore());

const { loadMemberList, loadMemberData } = useUsersStore();

const userId = computed((): number => {
  const routesArr = route.path.split('/');
  const lastIndex = routesArr.length - 1;
  return parseInt(routesArr[lastIndex]);
});

const filteredUserById = computed((): IUsers | undefined => {
  return membersList.value.filter((user) => user.id === userId.value)[0];
});

loadMemberList();
loadMemberData(userId.value);
</script>
