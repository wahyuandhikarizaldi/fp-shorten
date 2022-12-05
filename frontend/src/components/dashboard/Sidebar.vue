<template>
  <div class="fixed h-[90%] mx-3 px-3 py-3 my-7 bg-neutral-900 rounded-lg">
    <div
      @click="this.$router.push('/dashboard')"
      class="h-10 w-10 rounded-lg bg-neutral-800 flex justify-center items-center p-1 text-neutral-50 hover:text-green-400 cursor-pointer"
    >
      <Icon icon="material-symbols:home-outline-rounded" width="25"></Icon>
    </div>
    <div
      @click="this.$router.push('/dashboard/links')"
      class="h-10 w-10 rounded-lg bg-neutral-800 flex justify-center items-center p-1 mt-3 text-neutral-50 hover:text-green-400 cursor-pointer"
    >
      <Icon icon="mdi:link-variant" width="25"></Icon>
    </div>
    <div
      @click="this.$router.push('/dashboard/settings')"
      class="h-10 w-10 rounded-lg bg-neutral-800 flex justify-center items-center p-1 mt-3 text-neutral-50 hover:text-green-400 cursor-pointer"
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
