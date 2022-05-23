<template>
  <q-card-section>
    <app-own-member-page-info-item
      liter-name="Оклад"
      v-model:item="member.salary"
      :is-editing="isEditing"
      v-if="member.salary"
    />
    <app-own-member-page-info-item
      liter-name="Профессиональная квалификационная группа (ПКГ)"
      v-model:item="member.PKG"
      :is-editing="isEditing"
      v-if="member.PKG"
    />
    <app-own-member-page-info-item
      liter-name="Квалификационный уровень (КУ)"
      v-model:item="member.KL"
      :is-editing="isEditing"
      v-if="member.KL"
    />
    <app-own-member-page-info-item
      liter-name="Тип должности (основное, внутреннее совместительство, внешнее
      совместительство)"
      v-model:item="member.postType"
      :is-editing="isEditing"
      v-if="member.postType"
    />
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
</template>

<script setup lang="ts">
import { PropType, toRefs } from 'vue';
import { IMember } from 'src/types/IMember';
import AppOwnMemberPageInfoItem from 'components/AppOwnMemberPageInfoItem.vue';

const props = defineProps({
  member: {
    type: Object as PropType<IMember>,
    require: true,
  },
  isEditing: {
    type: Boolean,
    require: true,
  },
});

const { member } = toRefs<typeof props>(props);
</script>
