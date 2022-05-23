<template>
  <q-page padding>
    <q-form>
      <q-input outlined v-model="login" label="Логин" class="q-my-sm" />
      <q-input outlined v-model="password" label="Пароль" class="q-my-sm" />
      <q-btn color="primary" @click="handleSubmit" class="full-width">
        Войти
      </q-btn>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const login = ref<string>('');
    const password = ref<string>('');

    const handleSubmit = () => {
      const submitData = {
        login: login.value,
        password: password.value,
      };

      console.log(submitData);
    };

    return {
      login,
      password,
      handleSubmit,
    };
  },
});
</script>
