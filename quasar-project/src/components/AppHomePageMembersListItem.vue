<template>
  <q-item clickable v-ripple @click="routeOnOwnPage">
    <q-item-section avatar top>
      <q-avatar>
        <img :alt="fullName[0]" :src="avatar" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">{{ fullName }}</q-item-label>
      <q-item-label caption>{{ post }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>{{ phoneNumber }}</q-item-label>
    </q-item-section>
  </q-item>
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
