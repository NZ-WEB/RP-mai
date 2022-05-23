<template>
  <q-page padding>
    <q-banner v-if="authStore.error" class="text-white bg-red">
      Неправильный логин или пароль
    </q-banner>
    <q-form>
      <q-input outlined v-model="login" label="Логин" class="q-my-sm" />
      <q-input outlined v-model="password" label="Пароль" class="q-my-sm" />
      <q-btn color="primary" @click="handleSubmit" class="full-width">
        Войти
      </q-btn>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'stores/auth-store';
import { useRouter } from 'vue-router';

const login = ref<string>('');
const password = ref<string>('');
const router = useRouter();

const authStore = useAuthStore();

const handleSubmit = () => {
  authStore.login(login.value, password.value).then(() => {
    if (!authStore.error) {
      router.push('/');
    }
  });
};
</script>
