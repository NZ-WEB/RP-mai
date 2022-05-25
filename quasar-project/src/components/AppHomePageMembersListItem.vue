<template>
  <q-card
    @click="routeOnOwnPage"
    bordered
    flat
    class="q-my-md custom-card q-pa-sm"
  >
    <div class="row wrap">
      <q-card-section class="col-12 col-md-4 col-lg-3">
        <q-item-label
          header
          class="text-black text-bold q-pa-none text-h6 q-py-sm"
        >
          {{ firstName }} {{ secondName }} {{ thirdName }}
        </q-item-label>
      </q-card-section>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  props: {
    id: {
      type: Number,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    secondName: {
      type: String,
      require: true,
    },
    thirdName: {
      type: String,
      require: true,
    }
  },
  setup(props) {
    const router = useRouter();

    const routeOnOwnPage = () => {
      router.push(`/users/${props.id}`);
    };

    return {
      routeOnOwnPage,
    };
  },
});
</script>

<style scoped lang="scss">
.custom-card {
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background: #f4f4f4;
  }
}
</style>
