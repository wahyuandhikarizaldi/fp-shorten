<template>
  <div class="left-0 right-0 bottom-0 top-0">
    <RouterView />
  </div>
</template>
<script>
import { useApp } from "./stores";
export default {
  name: "App",
  setup() {
    const app = useApp();
    return {
      app,
    };
  },
  created() {
    this.app.sessionCheck();
  },
};
</script>
