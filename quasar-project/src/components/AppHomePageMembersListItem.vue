<template>

  <q-card bordered flat class=" q-my-md custom-card">
    <div class="row wrap">
      <q-card-section class="col-12 col-md-4 col-lg-2">
        <q-item-label caption> {{ login }} </q-item-label>

        <q-item-label
          header
          class="text-black text-bold q-pa-none text-h6 q-py-sm"
        >
          {{ fullName }}
        </q-item-label>

        <q-item-label class="q-pa-none">
          {{ birth }}
        </q-item-label>

        <q-item class="items-center q-px-none justify-between q-mt-md">
          <q-item-label caption  >
            <span class="text-bold">10</span> <span>Научных работ</span>
          </q-item-label>

          <q-item-label caption >
            <span class="text-bold">10</span> <span>Конференций</span>
          </q-item-label>
        </q-item>
      </q-card-section>

      <q-card-section class="col-6 col-md-4 q-my-auto text-center">
       {{ post }}
      </q-card-section>
      <q-card-section class="col-5 col-md-4 q-my-auto text-center">
       {{ phoneNumber }}
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
    fullName: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: false,
      default: '',
    },
    post: {
      type: String,
      require: true,
    },
    birth: {
      type: String,
      require: true,
    },
    login: {
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

    &:hover {
      background: #f4f4f4;
    }
  }
</style>
