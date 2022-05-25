<template>
  <q-card flat bordered class="custom-card q-pa-md q-my-md">

    <h6 v-if="title" class="q-my-none q-px-md text-grey">{{ title }}</h6>

    <app-fined-data-validate-with-spinner :condition="!!member.salary">
      <q-item>
        <q-card-section class="col-10 q-px-none">
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
import { PropType, ref, toRefs } from 'vue';
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

const { member } = toRefs<typeof props>(props);
const isEditing = ref<boolean>(false);
const setIsEditing = () => (isEditing.value = !isEditing.value);

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
