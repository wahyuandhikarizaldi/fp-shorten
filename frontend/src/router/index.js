import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../components/login.vue";
import Redirect from '../views/Redirect.vue';
import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "about" */ "../components/register.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "about" */ "../components/dashboard.vue"),
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/:code',
      name: 'Redirect',
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/Redirect.vue"),
    }
  ],
});

export default router;
