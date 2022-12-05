import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      children: [
        {
          path: "",
          name: "dashboardhome",
          component: () => import("../components/dashboard/Home.vue"),
        },
        {
          path: "links",
          name: "links",
          component: () => import("../components/dashboard/Links.vue"),
        },
        {
          path: "settings",
          name: "settings",
          component: () => import("../components/dashboard/Settings.vue"),
        },
      ],
    },
    // {
    //   path: "/dashboard/settings",
    //   name: "settings",
    //   component: () => import("../views/PengaturanView.vue"),
    // },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

export default router;
