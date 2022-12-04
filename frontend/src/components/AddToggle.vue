<template>
  <div @click="view.newLink()">
    <button
      class="shadow-md rounded-lg w-fit p-2 bg-slate-100 hover:bg-slate-200"
    >
      <Icon icon="material-symbols:add" width="30" />
    </button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useView } from "../stores/index.js";

export default {
  components: {
    Icon,
  },
  setup() {
    const view = useView();
    return {
      view,
    };
  },
};
</script>
