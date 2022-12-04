<template>
  <div class="my-3 mx-28">
    <nav class="bg-white px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <a href="/" class="flex items-center">
          <Icon icon="mdi:link-variant" width="30" class="mr-1"></Icon>
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >S.link</span
          >
        </a>
        <div class="flex items-center lg:order-2">
          <RouterLink to="/login">
            <a
              href="#"
              class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >Log in</a
            >
          </RouterLink>
          <RouterLink to="/register">
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >Register</a
            >
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useApp, useSettings, useStore } from "../stores/index.js";
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    Icon,
  },
  setup() {
    const settings = useSettings();
    const app = useApp();
    const store = useStore();
    return {
      app,
      settings,
      store,
    };
  },
};
</script>
