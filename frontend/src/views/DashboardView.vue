<template>
  <div class="w-full h-screen bg-black flex text-neutral-50">
    <!-- Sidebar -->
    <Sidebar />
    <RouterView />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useApp, useView } from "../stores/index.js";
import AddToggle from "../components/AddToggle.vue";
import Sidebar from "../components/dashboard/Sidebar.vue";
// import NavDashboard from "../components/NavDashboard.vue";
import HomeDashboard from "../components/dashboard/Home.vue";

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
    Icon,
    AddToggle,
    Sidebar,
    HomeDashboard
  },
};
</script>
