<template>
  <q-card flat bordered class="custom-card q-pa-md q-my-md">

    <h6 v-if="title" class="q-my-none q-px-md text-grey">{{ title }}</h6>


  </q-card>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    require: true,
  }
});
</script>

<style scoped lang="scss">
.custom-card {
  border-radius: 20px;
}
</style>

