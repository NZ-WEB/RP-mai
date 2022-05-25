<template>
  <q-page padding>
    <app-container>
      <q-item>
        <q-item-label header class="text-black text-h4 q-px-none">
          Информация о сотруднике
        </q-item-label>
      </q-item>

      <q-card bordered flat class="q-mb-md q-pa-md custom-card">
        <app-fined-data-validate-with-spinner
          :condition="!!filteredUserById?.firstName"
        >
          <q-item v-if="filteredUserById">
            <q-item-section>
              <q-item-label
                header
                class="q-px-none text-black text-h5 q-pt-none"
              >
                {{ filteredUserById.firstName }}
                {{ filteredUserById.secondName }}
                {{ filteredUserById.thirdName }}
              </q-item-label>
              <q-item-label class="text-body1">
                Образование: {{ filteredUserById.education }}
              </q-item-label>
              <q-item-label class="text-body1">
                Учёное звание: {{ filteredUserById.academicRank }}
              </q-item-label>
              <q-item-label class="text-body1">
                Кандидатская степень:{{ filteredUserById.academicDegree }}
              </q-item-label>
            </q-item-section>

            <q-item-section>
              <q-item-label class="q-pb-md" caption>
                Контактный телефон:
                <span class="text-black">
                  {{ filteredUserById.contactNumber }}
                </span>
              </q-item-label>
              <q-item-label caption>
                Контактный e-mail:
                <span class="text-black">
                  {{ filteredUserById.contactEmail }}
                </span>
              </q-item-label>
            </q-item-section>

            <q-item-label>
              <q-btn
                @click="setIsEditing"
                size="sm"
                round
                flat
                :icon="isEditing ? 'close' : 'edit'"
              />

              <q-btn
                @click="updateMemberData"
                outline
                class="q-mx-md"
                color="grey"
                v-if="isEditing"
                rounded
              >
                Сохранить
              </q-btn>
            </q-item-label>
          </q-item>
        </app-fined-data-validate-with-spinner>
      </q-card>

      <!--      <the-own-member-page-member-info-->
      <!--        :member="member"-->
      <!--        @updateData="updateMemberData"-->
      <!--        title="Сведения о сотруднике"-->
      <!--      />-->

      <the-own-member-page-job-plase-info
        :member="member"
        @updateData="updateMemberData"
        title="Информация о месте работы"
      />

      <the-own-member-page-publications title="Публикации сотрудника" />

      <the-own-member-nirs :id="filteredUserById?.id" />
    </app-container>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUsersStore } from 'stores/members-store';
import { IUsers } from 'src/types/IUsers';
import TheOwnMemberPageMemberInfo from 'components/TheOwnMemberPageMemberInfo.vue';
import AppContainer from 'components/AppContainer.vue';
import TheOwnMemberPageJobPlaseInfo from 'components/TheOwnMemberPageJobPlaseInfo.vue';
import TheOwnMemberPagePublications from 'components/TheOwnMemberPagePublications.vue';
import AppFinedDataValidateWithSpinner from 'components/AppFinedDataValidateWithSpinner.vue';
import TheOwnMemberNirs from 'components/TheOwnMemberNirs.vue';

const route = useRoute();

const { membersList, member } = storeToRefs(useUsersStore());
const { loadMemberList, loadMemberData } = useUsersStore();
const isEditing = ref<boolean>(false);
const setIsEditing = () => (isEditing.value = !isEditing.value);

const userId = computed((): number => {
  const routesArr = route.path.split('/');
  const lastIndex = routesArr.length - 1;
  return parseInt(routesArr[lastIndex]);
});

const filteredUserById = computed((): IUsers | undefined => {
  return membersList.value.filter((user) => user.id === userId.value)[0];
});

const updateMemberData = () => {
  setIsEditing();
  // call to server
};

loadMemberList();
loadMemberData(userId.value);
</script>

<style>
.custom-card {
  border-radius: 20px;
}
</style>
