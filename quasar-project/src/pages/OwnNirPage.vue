<template>
  <q-page padding>
    <app-container>
      <q-item>
        <q-item-label header class="text-black text-h4 q-px-none">
          Информация о научной работе
        </q-item-label>
      </q-item>

      <app-fined-data-validate-with-spinner
        :condition="!!getCurrentNirArr.length"
      >
        <q-card flat bordered>
          <q-item class="items-center justify-between">
            <q-card-section>
              <q-item-label
                v-if="!isEditing"
                header
                class="text-black text-h5 q-px-none"
              >
                {{ getCurrentNir.fullWorkTitle }}
              </q-item-label>
              <q-input
                v-else
                class="full-width"
                :model-value="getCurrentNir.fullWorkTitle"
              />

              <q-item-label v-if="!isEditing" caption>
                Уникальный номер: {{ getCurrentNir.contractNumber }}
              </q-item-label>
              <q-input
                v-else
                class="full-width"
                :model-value="getCurrentNir.fullWorkTitle"
              />
            </q-card-section>

            <q-btn
              @click="setIsEditing"
              size="sm"
              round
              flat
              :icon="isEditing ? 'close' : 'edit'"
            />

            <q-card-section>
              <q-item-label v-if="!isEditing" caption class="text-primary">
                {{ getCurrentNir.workType }}
              </q-item-label>
              <q-input v-else :model-value="getCurrentNir.workType" />
            </q-card-section>
          </q-item>

          <q-card-section class="q-py-sm">
            <app-edit-mod-wrapper
              :condition="!isEditing"
              :model="getCurrentNir.Customer"
            >
              <q-item-label class="text-black text-body1 q-px-md">
                Заказчик: {{ getCurrentNir.Customer }}
              </q-item-label>
            </app-edit-mod-wrapper>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <app-edit-mod-wrapper
              :condition="!isEditing"
              :model="getCurrentNir.leadCustomer"
            >
              <q-item-label class="text-black text-body1 q-px-md">
                Имя руководителя: {{ getCurrentNir.leadCustomer }}
              </q-item-label>
            </app-edit-mod-wrapper>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <app-edit-mod-wrapper
              :condition="!isEditing"
              :model="getCurrentNir.contractDate"
            >
              <q-item-label class="text-black text-body1 q-px-md">
                Дата создания контракта: {{ getCurrentNir.contractDate }}
              </q-item-label>
            </app-edit-mod-wrapper>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <app-edit-mod-wrapper
              :condition="!isEditing"
              :model="getCurrentNir.topicNumber"
            >
              <q-item-label class="text-black text-body1 q-px-md">
                Тип работы: {{ getCurrentNir.topicNumber }}
              </q-item-label>
            </app-edit-mod-wrapper>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <app-edit-mod-wrapper
              :condition="!isEditing"
              :model="getCurrentNir.workPrice"
            >
              <q-item-label class="text-black text-body1 q-px-md">
                Цена: {{ getCurrentNir.workPrice }}р
              </q-item-label>
            </app-edit-mod-wrapper>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <app-edit-mod-wrapper
              :condition="!isEditing"
              :model="getCurrentNir.startDate"
            >
              <q-item-label class="text-black text-body1 q-px-md">
                Начало работы: {{ getCurrentNir.startDate }}
              </q-item-label>
            </app-edit-mod-wrapper>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <app-edit-mod-wrapper
              :condition="!isEditing"
              :model="getCurrentNir.endDate"
            >
              <q-item-label class="text-black text-body1 q-px-md">
                Окончание работы: {{ getCurrentNir.endDate }}
              </q-item-label>
            </app-edit-mod-wrapper>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <app-edit-mod-wrapper
              :condition="!isEditing"
              :model="getCurrentNir.stagesNumber"
            >
              <q-item-label class="text-black text-body1 q-px-md">
                Колличество стадий: {{ getCurrentNir.stagesNumber }}
              </q-item-label>
            </app-edit-mod-wrapper>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <app-edit-mod-wrapper
              :condition="!isEditing"
              :model="getCurrentNir.responsibleExecutorLogin"
            >
              <q-item-label class="text-black text-body1 q-px-md">
                Логин: {{ getCurrentNir.responsibleExecutorLogin }}
              </q-item-label>
            </app-edit-mod-wrapper>
          </q-card-section>

          <q-card-section>
            <q-btn
              v-if="isEditing"
              outline
              color="primary"
              rounded
              @click="handleSave"
              label="Сохранить изменения"
              class="q-mx-md"
            />
          </q-card-section>
        </q-card>
      </app-fined-data-validate-with-spinner>
    </app-container>
  </q-page>
</template>

<script setup lang="ts">
import AppContainer from 'components/AppContainer.vue';
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia/dist/pinia';
import { useNirsStore } from 'stores/nirs-store';
import AppFinedDataValidateWithSpinner from 'components/AppFinedDataValidateWithSpinner.vue';
import { INir } from 'src/types/INir';
import AppEditModWrapper from 'components/AppEditModWrapper.vue';

const route = useRoute();

const code = computed(() => {
  const routeArr = route.path.split('/');
  return routeArr[routeArr.length - 1];
});

const { loadAll } = useNirsStore();
const { getNirs } = storeToRefs(useNirsStore());

const isEditing = ref<boolean>(false);
const setIsEditing = () => {
  isEditing.value = !isEditing.value;
};

const getCurrentNirArr = computed(() => {
  return getNirs.value.filter((nir) => nir.code === code.value);
});

const getCurrentNir = computed((): INir => {
  return getCurrentNirArr.value[0];
});

const handleSave = () => {
  setIsEditing();
  //
};

loadAll();
</script>
