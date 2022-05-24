<template>
  <div>
    <h4 class="q-mt-lg q-mb-sm">Список сотрудников</h4>

    <div class="row items-stretch">
      <q-input
        color="grey"
        :model-value="searchData"
        label="Быстрый поиск..."
        input-class="text-grey-3 q-ma-sm"
      >
        <template v-slot:prepend>
          <q-icon name="search" color="grey" />
        </template>
      </q-input>

      <q-btn-dropdown
        v-model="menu"
        class="q-ma-sm"
        color="grey"
        label="Сортировка"
        outline
        rounded
        size="md"
      >
        <q-list class="text-grey">
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label> От А до Я </q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label> От Я до А </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-btn-dropdown
        v-model="menu"
        class="q-ma-sm"
        color="grey"
        label="Показывать"
        outline
        rounded
        size="md"
      >
        <q-list class="text-grey">
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label> Всех </q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label> Только с правом редактирования </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-btn
        label="Добавить сотрудника"
        color="primary"
        class="q-mr-none q-ml-auto"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

const searchData = ref<string>('');
</script>

<style lang="scss" scoped>
h4 {
  text-align: left;
}

.input-text {
  font-size: 18px;
}
</style>
