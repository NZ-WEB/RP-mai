<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white q-py-sm">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn color="primary" @click="$router.push('/')" label="RP-mai" />
        </q-toolbar-title>

        <q-btn
          v-if="!auth"
          rounded
          flat
          color="white"
          to="/auth"
          class="text-grey-6"
          outline
        >
          <q-icon left name="login" /> Войти
        </q-btn>
        <div v-else>
          <q-btn
            rounded
            color="white"
            class="text-grey"
            icon="people"
            :label="user"
            flat
            outline
          >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section> Мой Профиль</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Настройки</q-item-section>
                </q-item>
                <q-separator />
                <q-item @click="handleLogout" clickable v-close-popup>
                  <q-item-section>выйти</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!--    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>-->
    <!--      <q-list>-->
    <!--        <q-item-label header> Имя Пользователя </q-item-label>-->

    <!--        <EssentialLink-->
    <!--          v-for="link in essentialLinks"-->
    <!--          :key="link.title"-->
    <!--          v-bind="link"-->
    <!--        />-->
    <!--      </q-list>-->
    <!--    </q-drawer>-->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// import { defineComponent, ref } from 'vue';
import { useAuthStore } from 'stores/auth-store';
import { storeToRefs } from 'pinia/dist/pinia';
import { useRouter } from 'vue-router';

// const essentialLinks = [
//   {
//     title: 'Профиль',
//     icon: 'settings',
//     link: '/',
//   },
//   {
//     title: 'Сотрудники',
//     icon: 'people',
//     link: '/',
//   },
//   {
//     title: 'НИРы',
//     icon: 'record_voice_over',
//     link: '/',
//   },
//   {
//     title: 'Нормативы',
//     icon: 'record_voice_over',
//     link: '/',
//   },
// ];

// const leftDrawerOpen = ref(false);
const authStore = useAuthStore();
const { auth, user } = storeToRefs(authStore);
const router = useRouter();

const handleLogout = () => {
  router.push('/auth');
  authStore.logOut();
};
</script>
