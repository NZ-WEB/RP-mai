<template>
  <q-page class="row items-center justify-evenly">
    <app-page-title name="Главная" description="На главной станице расположены краткие сведения о сотрудниках, НИРах, конференциях и т.п."/>

    <the-home-page-nirs/>

    <the-home-page-conferences/>

    <the-home-page-members-table/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TheHomePageNirs from 'components/TheHomePageNirs.vue';
import TheHomePageMembersTable from 'components/TheHomePageMembersTable.vue';
import TheHomePageConferences from 'components/TheHomePageConferences.vue';
import AppPageTitle from 'components/AppPageTitle.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {AppPageTitle, TheHomePageConferences, TheHomePageMembersTable, TheHomePageNirs: TheHomePageNirs},
  setup() {
    //
  }
});
</script>
