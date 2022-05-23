<template>
  <q-page class="row items-center justify-evenly">
    <app-page-title
      name="Главная"
      description="На главной станице расположены краткие сведения о сотрудниках, НИРах, конференциях и т.п."
    />

    <the-home-page-nirs />

    <the-home-pahe-members-list :members-list="membersList" />
  </q-page>
</template>

<script lang="ts" setup>
import AppPageTitle from 'components/AppPageTitle.vue';
import TheHomePaheMembersList from 'components/TheHomePaheMembersList.vue';

import { storeToRefs } from 'pinia/dist/pinia';
import { useUsersStore } from 'stores/members-store';
import TheHomePageNirs from 'components/TheHomePageNirs.vue';

const { membersList } = storeToRefs(useUsersStore());
const { loadMemberList } = useUsersStore();

loadMemberList();
</script>
