<template>
  <q-card-section v-if="member">
    <q-item-label caption> Информация о сотруднике </q-item-label>
    <q-item-label v-if="member.bid"> Ставка: {{ member.bid }} </q-item-label>
    <q-item-label v-if="member.salary">
      Оклад: {{ member.salary }}
    </q-item-label>
    <q-item-label v-if="member.PKG">
      Профессиональная квалификационная группа (ПКГ): {{ member.PKG }}
    </q-item-label>
    <q-item-label v-if="member.KL">
      Квалификационный уровень (КУ): {{ member.KL }}
    </q-item-label>
    <q-item-label v-if="member.postType">
      Тип должности (основное, внутреннее совместительство, внешнее
      совместительство): {{ member.postType }}
    </q-item-label>
    <q-item-label v-if="member.nameOfOrganization">
      Наименование организации: {{ member.nameOfOrganization }}
    </q-item-label>
    <q-item-label v-if="member.subdivision">
      Подразделение: {{ member.subdivision }}
    </q-item-label>
    <q-item-label v-if="member.supervisor">
      Руководитель: {{ member.supervisor }}
    </q-item-label>
    <q-item-label v-if="member.signOfALeader">
      Признак руководителя (да/нет): {{ member.signOfALeader }}
    </q-item-label>
    <q-item-label v-if="member.contractEndDate">
      Дата окончания договора: {{ member.contractEndDate }}
    </q-item-label>
    <q-item-label v-if="member.status">
      Статус (действующий/не действующий): {{ member.status }}
    </q-item-label>
    <q-item-label v-if="member.reasonForStatusChange">
      Причина изменения статуса (нанят, уволен, перевод):
      {{ member.reasonForStatusChange }}
    </q-item-label>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IMember } from 'src/types/IMember';
export default defineComponent({
  props: {
    member: {
      type: Object as PropType<IMember>,
      require: true,
    },
  },
});
</script>
