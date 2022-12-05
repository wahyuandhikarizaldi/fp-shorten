<template>
  <div class="mx-10 my-3">
    <nav class="bg-black px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <a href="/" class="flex items-center">
          <Icon icon="mdi:link-variant" width="30" class="mr-1 text-yellow-100"></Icon>
          <span
            class="font-black text-yellow-100 self-center text-xl whitespace-nowrap dark:text-white"
            >SHLINK</span
          >
        </a>
        <div class="flex items-center lg:order-2">
          <RouterLink to="/login" v-show="app.user.logged_in === false">
            <a
              href="#"
              class="text-white font-bold dark:text-white hover:bg-neutral-700 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >Log in</a
            >
          </RouterLink>
          <RouterLink to="/register" v-show="app.user.logged_in === false">
            <a
              href="#"
              class="text-black bg-white hover:bg-neutral-500 focus:ring-4 focus:ring-neutral-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >Register</a
            >
          </RouterLink>
          <RouterLink to="/dashboard" v-show="app.user.logged_in === true">
            <a
              href="#"
              class="text-black bg-white hover:bg-neutral-500 focus:ring-4 focus:ring-neutral-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >Dashboard</a
            >
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useApp, useView } from "../stores/index.js";

export default {
  name: "App",
  components: {
    Icon,
  },
  setup() {
    const app = useApp();
    const view = useView();
    return {
      app,
      view,
    };
  },
};
</script>
