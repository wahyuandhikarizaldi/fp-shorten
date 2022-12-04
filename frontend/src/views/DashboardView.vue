<template>
  <div class="grid grid-cols-12 grid-rows-8">
    <Sidebar class="col-span-2 row-span-full" />
    <NavDashboard title="Dashboard" class="col-span-10 row-span-1" />
    <div class="col-span-10 row-span-7">
      Dashboard
    </div>
  </div>
</template>

<script>
import { useApp, useView } from "../stores/index.js";
import AddToggle from "../components/AddToggle.vue";
import Sidebar from "../components/Sidebar.vue";
import NavDashboard from "../components/NavDashboard.vue";

export default {
  setup() {
    const view = useView();
    const app = useApp();
    return {
      app,
      view,
    };
  },
  created() {
    if (this.app.user.logged_in === false) {
      this.$router.push("/login");
    }
  },
  components: {
    AddToggle,
    Sidebar,
    NavDashboard,
  },
};
</script>
