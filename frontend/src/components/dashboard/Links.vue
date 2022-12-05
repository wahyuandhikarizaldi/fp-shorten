<template>
  <div
    class="w-full ml-24 mr-5 mb-9 my-7 rounded-lg bg-neutral-900 px-7 py-6 h-fit"
  >
    <h1 class="text-4xl font-bold text-neutral-50">Your Links</h1>
    <div class="mt-8 space-y-3">
      <div class="bg-neutral-800 rounded-lg w-2/3 flex items-center mb-9">
        <input type="url" name="url" id="url" class="rounded-lg w-full bg-neutral-800 border-0 focus:outline-none focus:ring-0" placeholder="Place your link here!">
        <button type="submit" class="bg-green-400 p-3 rounded-r-lg w-24 hover:bg-green-500 font-bold">
          Short it!
        </button>
      </div>
      <div class="p-5 bg-neutral-800 rounded-lg w-2/3">
        <div class="flex relative">
          <h1 class="font-medium text-2xl hover:underline text-yellow-200 cursor-pointer">Sh.link/B3uz4</h1>
          <div
            class="bg-neutral-700 px-1.5 py-1 rounded-md ml-3 absolute right-0 flex justify-center items-center space-x-1 cursor-pointer hover:bg-neutral-600"
          >
            <h1 class="text-sm font-semibold">Edit</h1>
            <Icon
              icon="material-symbols:edit"
              width="17"
              class="text-neutral-50 cursor-pointer"
            ></Icon>
          </div>
        </div>
        <a href="#" class="text-neutral-400 hover:underline"
          >https://router.vuejs.org/</a
        >
        <hr class="mt-1">
        <div class="w-full relative flex mt-2">
          <div class="flex items-center space-x-1">
            <Icon
              icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
              width="20"
              class="text-neutral-50"
            ></Icon>
            <h1 class="text-neutral-50">05 December 2022 05:07</h1>
          </div>
          <div class="absolute right-0">
            <div class="flex items-center space-x-2">
              <div class="bg-neutral-700 p-1 h-7 rounded-md cursor-pointer hover:bg-neutral-600">
                <Icon icon="material-symbols:lock-outline"
                  width="20"
                  class="text-neutral-50"
                ></Icon>
              </div>
              <div class="bg-neutral-700 px-1.5 h-7 rounded-md flex items-center cursor-pointer hover:bg-neutral-600">
                <Icon icon="material-symbols:bar-chart-rounded"
                  width="20"
                  class="text-neutral-50"
                ></Icon>
                <h1 class="text-neutral-50">Statistics</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
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
