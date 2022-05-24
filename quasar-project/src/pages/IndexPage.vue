<template>
  <q-page class="">
    <!--    <app-page-title-->
    <!--      name="Главная"-->
    <!--      description="На главной станице расположены краткие сведения о сотрудниках, НИРах, конференциях и т.п."-->
    <!--    />-->

    <app-container>
      <the-home-page-sort />

      <the-home-pahe-members-list :members-list="membersList" />

      <the-home-page-nirs />
    </app-container>
  </q-page>
</template>

<script lang="ts" setup>
// import AppPageTitle from 'components/AppPageTitle.vue';
import TheHomePaheMembersList from 'components/TheHomePaheMembersList.vue';

import { storeToRefs } from 'pinia/dist/pinia';
import { useUsersStore } from 'stores/members-store';
import TheHomePageNirs from 'components/TheHomePageNirs.vue';
import TheHomePageSort from 'components/TheHomePageSort.vue';
import AppContainer from 'components/AppContainer.vue';

const { membersList } = storeToRefs(useUsersStore());
const { loadMemberList } = useUsersStore();

loadMemberList();
</script>
