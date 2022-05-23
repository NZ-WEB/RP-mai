<template>
  <q-list
    bordered
    padding
    class="rounded-borders full-width q-mb-auto q-mt-none"
  >
    <q-item-label header>Список сотрудников</q-item-label>

    <div v-if="membersList?.length">
      <app-home-page-members-list-item
        v-for="memberListItem in membersList"
        :key="memberListItem.id"
        :id="memberListItem.id"
        :full-name="memberListItem.fullName"
        :avatar="memberListItem.avatar"
        :post="memberListItem.post"
        :phone-number="memberListItem.phoneNumber"
      />
    </div>
    <div v-else class="q-pa-md">
      <q-spinner color="primary" size="3em" />
    </div>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AppHomePageMembersListItem from 'components/AppHomePageMembersListItem.vue';
import { IUsers } from 'src/types/IUsers';

export default defineComponent({
  components: { AppHomePageMembersListItem },
  props: {
    membersList: {
      type: Object as PropType<IUsers[]>,
      require: true,
    },
  },
});
</script>
