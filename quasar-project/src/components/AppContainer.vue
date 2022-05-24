<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // name: 'ComponentName'
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1300px;
  width: 100%;
  padding: 0 16px;

  margin: 0 auto;
}
</style>
