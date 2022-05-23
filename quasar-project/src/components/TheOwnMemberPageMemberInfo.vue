<template>
  <q-card-section v-if="member">
    <app-own-member-page-info-item
      liter-name="Оклад"
      v-model:item="member.salary"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Профессиональная квалификационная группа (ПКГ)"
      v-model:item="member.PKG"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Квалификационный уровень (КУ)"
      v-model:item="member.KL"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Тип должности (основное, внутреннее совместительство, внешнее
      совместительство)"
      v-model:item="member.postType"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Наименование организации"
      v-model:item="member.nameOfOrganization"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Подразделение"
      v-model:item="member.subdivision"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Руководитель"
      v-model:item="member.supervisor"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Признак руководителя (да/нет)"
      v-model:item="member.signOfALeader"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Дата окончания договора"
      v-model:item="member.contractEndDate"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Статус (действующий/не действующий)"
      v-model:item="member.status"
      :is-editing="isEditing"
    />
    <app-own-member-page-info-item
      liter-name="Причина изменения статуса (нанят, уволен, перевод)"
      v-model:item="member.reasonForStatusChange"
      :is-editing="isEditing"
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
