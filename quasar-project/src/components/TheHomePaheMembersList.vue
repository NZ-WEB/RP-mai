<template>
  <div class="q-my-md">
    <div v-if="membersList?.length">
      <app-home-page-members-list-item
        v-for="memberListItem in membersList"
        :key="memberListItem.id"
        :id="memberListItem.id"
        :full-name="memberListItem.fullName"
        :avatar="memberListItem.avatar"
        :post="memberListItem.post"
        :phone-number="memberListItem.phoneNumber"
        :birth="memberListItem.birth"
        :login="memberListItem.login"
      />
    </div>
    <div v-else class="q-pa-md">
      <q-spinner color="primary" size="3em" />
    </div>
  </div>
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
