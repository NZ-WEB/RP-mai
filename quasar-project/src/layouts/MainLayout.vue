<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title @click="$router.push('/')"> RP-MAI </q-toolbar-title>

        <q-btn v-if="!auth" outline to="/auth"> Войти </q-btn>
        <div v-else>{{ user }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Имя Пользователя </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from 'stores/auth-store';
import { storeToRefs } from 'pinia/dist/pinia';

const linksList = [
  {
    title: 'Профиль',
    icon: 'settings',
    link: '/',
  },
  {
    title: 'Сотрудники',
    icon: 'people',
    link: '/',
  },
  {
    title: 'НИРы',
    icon: 'record_voice_over',
    link: '/',
  },
  {
    title: 'Нормативы',
    icon: 'record_voice_over',
    link: '/',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    const authStore = useAuthStore();

    const { auth, user } = storeToRefs(authStore);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      auth,
      user,
    };
  },
});
</script>
