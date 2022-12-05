<template>
  <section class="bg-black my-7 text-white">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-neutral-900 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <RouterLink to="/" class="flex items-center justify-center">
            <Icon
              icon="mdi:link-variant"
              width="30"
              class="mr-1 text-yellow-100"
            ></Icon>
            <h1
              class="self-center text-xl font-black text-yellow-100 whitespace-nowrap dark:text-white"
            >
              SHLINK
            </h1>
          </RouterLink>
          <h1
            class="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white"
          >
            Create and account
          </h1>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="bg-neutral-800 border text-slate-50 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              placeholder="name@company.com"
              required=""
              v-model="email"
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Password</label
            >
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              class="bg-neutral-800 border text-slate-50 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              required=""
              v-model="password"
            />
          </div>
          <div>
            <label
              for="confirm-password"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Confirm password</label
            >
            <input
              type="password"
              id="confirm-password"
              placeholder="••••••••"
              class="bg-neutral-800 border text-slate-50 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              required=""
              v-model="cpassword"
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-neutral-800 text-green-500 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="terms" class="font-light dark:text-gray-300"
                >I accept the
                <a
                  class="font-medium text-green-600 hover:underline dark:text-green-500"
                  href="#"
                  >Terms and Conditions</a
                ></label
              >
            </div>
          </div>
          <button
            @click="app.register(email, password, cpassword)"
            type="submit"
            class="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create an account
          </button>
          <p class="text-sm font-light dark:text-gray-400">
            Already have an account?
            <RouterLink to="/login"
              ><a
                href="#"
                class="font-medium text-green-600 hover:underline dark:text-green-500"
                >Login here</a
              ></RouterLink
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Icon } from "@iconify/vue";
import { useApp } from "../stores/index.js";
export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: "",
      cpassword: "",
    };
  },
  components: {
    Icon,
  },
  setup() {
    const app = useApp();
    return {
      app,
    };
  },
};
</script>
