<template>
  <q-page class="row items-center justify-evenly">
    <app-page-title
      name="Главная"
      description="На главной станице расположены краткие сведения о сотрудниках, НИРах, конференциях и т.п."
    />

    <the-home-pahe-members-list :members-list="membersStore.membersList" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import AppPageTitle from 'components/AppPageTitle.vue';
import TheHomePaheMembersList from 'components/TheHomePaheMembersList.vue';
import { IMembersList } from 'src/types/IMembersList';
import { useMembersStore } from 'stores/members-store';

export default defineComponent({
  name: 'IndexPage',
  components: { TheHomePaheMembersList, AppPageTitle },
  setup() {
    const membersStore = useMembersStore();

    const membersList = ref<IMembersList[]>([]);

    onMounted(() => {
      membersStore.loadMemberList();
    });

    return {
      membersList,
      membersStore,
    };
  },
});
</script>
