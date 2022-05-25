<template>
  <q-card flat bordered class="custom-card q-pa-md q-my-md">

    <h6 v-if="title" class="q-my-none q-px-md text-grey">{{ title }}</h6>

    <app-fined-data-validate-with-spinner :condition="!!member.post">
      <q-item>
        <q-card-section class="col-10 q-px-none">
          <app-own-member-page-info-item
            liter-name="Наименование организации"
            v-model:item="member.nameOfOrganization"
            :is-editing="isEditing"
            v-if="member.nameOfOrganization"
          />
          <app-own-member-page-info-item
            liter-name="Подразделение"
            v-model:item="member.subdivision"
            :is-editing="isEditing"
            v-if="member.subdivision"
          />
          <app-own-member-page-info-item
            liter-name="Руководитель"
            v-model:item="member.supervisor"
            :is-editing="isEditing"
            v-if="member.supervisor"
          />
          <app-own-member-page-info-item
            liter-name="Признак руководителя (да/нет)"
            v-model:item="member.signOfALeader"
            :is-editing="isEditing"
            v-if="member.signOfALeader"
          />
          <app-own-member-page-info-item
            liter-name="Дата окончания договора"
            v-model:item="member.contractEndDate"
            :is-editing="isEditing"
            v-if="member.contractEndDate"
          />
          <app-own-member-page-info-item
            liter-name="Статус (действующий/не действующий)"
            v-model:item="member.status"
            :is-editing="isEditing"
            v-if="member.status"
          />
          <app-own-member-page-info-item
            liter-name="Причина изменения статуса (нанят, уволен, перевод)"
            v-model:item="member.reasonForStatusChange"
            :is-editing="isEditing"
            v-if="member.reasonForStatusChange"
          />
        </q-card-section>

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
      <q-btn
        @click="updateMemberData"
        outline
        class="q-mx-md"
        color="primary"
        v-if="isEditing"
      >
        Сохранить изменения
      </q-btn>
    </app-fined-data-validate-with-spinner>
  </q-card>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs} from 'vue';
import { IMember } from 'src/types/IMember';
import AppOwnMemberPageInfoItem from 'components/AppOwnMemberPageInfoItem.vue';
import AppFinedDataValidateWithSpinner from 'components/AppFinedDataValidateWithSpinner.vue';

const props = defineProps({
  member: {
    type: Object as PropType<IMember>,
    require: true,
  },
  isEditing: {
    type: Boolean,
    require: true,
  },
  title: {
    type: String,
    require: false,
    default: ''
  }
});

const emits = defineEmits({
  updateData: null,
});

const isEditing = ref<boolean>(false);
const setIsEditing = () => (isEditing.value = !isEditing.value);
const { member } = toRefs<typeof props>(props);

const updateMemberData = () => {
  setIsEditing();
  emits('updateData');
};
</script>

<style scoped lang="scss">
.custom-card {
  border-radius: 20px;
}
</style>
