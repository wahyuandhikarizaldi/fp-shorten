<template>
  <div>
    <aside class="w-full h-full">
      <div
        class="h-full px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800"
      >
        <a
          href="http://localhost:5173/dashboard"
          class="flex items-center pl-2.5 mb-5"
        >
          <Icon icon="mdi:link-variant" width="30" class="mr-1"></Icon>
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >S.link</span
          >
        </a>
        <ul
          class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <li>
            <a
              href="http://localhost:5173/dashboard"
              class="flex items-center justify-center px-2 py-1 rounded-lg"
            >
              <span
                class="block text-lg font-bold text-gray-900 dark:text-white"
                >Hi, Yuni</span
              >
            </a>
          </li>
        </ul>
        <ul
          class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <li @click="$router.push('/dashboard')" class="cursor-pointer">
            <p
              class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white"
              :class="{
                'bg-blue-600 text-white dark:bg-blue-600':
                  $route.path == '/dashboard',
                'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700':
                  $route.path != '/dashboard',
              }"
            >
              <Icon
                icon="icon-park-solid:chart-pie"
                :color="{
                  white: $route.path == '/dashboard',
                  '#a5a5a5': $route.path != '/dashboard',
                }"
                width="21"
              />
              <span class="ml-3">Dashboard</span>
            </p>
          </li>
          <li @click="$router.push('/dashboard/links')" class="cursor-pointer">
            <p
              class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white"
              :class="{
                'bg-blue-600 text-white dark:bg-blue-600':
                  $route.path == '/dashboard/links',
                'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700':
                  $route.path != '/dashboard/links',
              }"
            >
              <Icon
                icon="mdi:link-variant"
                :color="{
                  white: $route.path == '/dashboard/links',
                  '#a5a5a5': $route.path != '/dashboard/links',
                }"
                width="21"
              />
              <span class="ml-3">Tautan</span>
            </p>
          </li>
          <li
            @click="$router.push('/dashboard/settings')"
            class="cursor-pointer"
          >
            <p
              class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white"
              :class="{
                'bg-blue-600 text-white dark:bg-blue-600':
                  $route.path == '/dashboard/settings',
                'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700':
                  $route.path != '/dashboard/settings',
              }"
            >
              <Icon
                icon="icon-park-solid:setting-two"
                :color="{
                  white: $route.path == '/dashboard/settings',
                  '#a5a5a5': $route.path != '/dashboard/settings',
                }"
                width="21"
              />
              <span class="ml-3">Pengaturan</span>
            </p>
          </li>
        </ul>
        <ul
          class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <li @click="$router.push('/signOut')" class="cursor-pointer">
            <p
              class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white"
              :class="{
                'bg-blue-600 text-white dark:bg-blue-600':
                  $route.path == '/signOut',
                'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700':
                  $route.path != '/signOut',
              }"
            >
              <Icon
                icon="ph:sign-out-bold"
                :color="{
                  white: $route.path == '/signOut',
                  '#a5a5a5': $route.path != '/signOut',
                }"
                width="21"
              />
              <span class="ml-3">Sign Out</span>
            </p>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
