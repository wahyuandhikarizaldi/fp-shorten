<template>
  <div class="fixed h-[90%] mx-3 px-3 py-3 my-7 bg-neutral-900 rounded-lg">
    <div
      @click="this.$router.push('/dashboard/profile')"
      class="h-10 w-10 rounded-lg bg-neutral-800 flex justify-center items-center p-1 text-neutral-50 hover:text-green-400 cursor-pointer"
      :class="$route.path == '/dashboard/profile' ? 'text-green-400' : ''"
    >
      <Icon icon="mdi:face-man" width="25"></Icon>
    </div>
    <div
      @click="this.$router.push('/dashboard')"
      class="mt-7 h-10 w-10 rounded-lg bg-neutral-800 flex justify-center items-center p-1 text-neutral-50 hover:text-green-400 cursor-pointer"
      :class="$route.path == '/dashboard' ? 'text-green-400' : ''"
    >
      <Icon icon="material-symbols:home-outline-rounded" width="25"></Icon>
    </div>
    <div
      @click="this.$router.push('/dashboard/links')"
      class="mt-3 h-10 w-10 rounded-lg bg-neutral-800 flex justify-center items-center p-1 text-neutral-50 hover:text-green-400 cursor-pointer"
      :class="$route.path == '/dashboard/links' ? 'text-green-400' : ''"
    >
      <Icon icon="mdi:link-variant" width="25"></Icon>
    </div>
    <div
      @click="this.$router.push('/dashboard/settings')"
      class="mt-3 h-10 w-10 rounded-lg bg-neutral-800 flex justify-center items-center p-1 text-neutral-50 hover:text-green-400 cursor-pointer"
      :class="$route.path == '/dashboard/settings' ? 'text-green-400' : ''"
    >
      <Icon icon="ep:setting" width="25"></Icon>
    </div>
    <div
      class="absolute h-10 w-10 rounded-lg bg-neutral-800 flex justify-center items-center p-1 bottom-3 text-neutral-50 hover:text-green-400 cursor-pointer"
    >
      <Icon icon="fa-solid:sign-out-alt" width="25"></Icon>
    </div>
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
