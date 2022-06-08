<template>
  <q-page class="">
    <app-container>
      <the-home-page-sort />
      <the-home-pahe-members-list :members-list="membersList" />
    </app-container>
  </q-page>
</template>

<script lang="ts" setup>
// import AppPageTitle from 'components/AppPageTitle.vue';
import TheHomePaheMembersList from 'components/TheHomePaheMembersList.vue';

import { storeToRefs } from 'pinia/dist/pinia';
import { useUsersStore } from 'stores/members-store';
import TheHomePageSort from 'components/TheHomePageSort.vue';
import AppContainer from 'components/AppContainer.vue';

const { membersList } = storeToRefs(useUsersStore());
const { loadMemberList } = useUsersStore();

loadMemberList();
</script>

<style lang="scss">
.custom-card {
  border-radius: 20px;
}
</style>
