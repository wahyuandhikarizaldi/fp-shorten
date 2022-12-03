<template>
  <div>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Link</th>
            <th scope="col" class="py-3 px-6">Link Asli</th>
            <th scope="col" class="py-3 px-6">Day</th>
            <th scope="col" class="py-3 px-6">Month</th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit | Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              @click="OpenLink(`https://intip.in/canvaLink`)"
              scope="row"
              class="hover:text-blue-500 py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
            >
              {{ SetWidth(`https://intip.in/canvaLink`) }}
            </th>
            <td
              class="py-4 px-6 w-4 cursor-pointer"
              @click="
                OpenLink(
                  `https://docs.google.com/spreadsheets/d/16BR6fOluac3r2TWWgW9Kah-ksCjI-yKZzJb59iPuBhU/edit#gid=0`
                )
              "
            >
              <p class="group relative inline-block hover:text-blue-500 duration-300">
                {{
                  SetWidth(
                    `https://docs.google.com/spreadsheets/d/16BR6fOluac3r2TWWgW9Kah-ksCjI-yKZzJb59iPuBhU/edit#gid=0`
                  )
                }}
                <span
                  class="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-fit px-2 py-1 bg-gray-600 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"
                  @click="
                    OpenLink(
                      `https://docs.google.com/spreadsheets/d/16BR6fOluac3r2TWWgW9Kah-ksCjI-yKZzJb59iPuBhU/edit#gid=0`
                    )
                  "
                  >https://docs.google.com/spreadsheets/d/16BR6fOluac3r2TWWgW9Kah-ksCjI-yKZzJb59iPuBhU/edit#gid=0</span
                >
              </p>
            </td>
            <td class="py-4 px-6">Sliver</td>
            <td class="py-4 px-6">Laptop</td>
            <td class="py-4 px-6 text-right flex justify-around">
              <a
                @click="store.EditLink()"
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
              <a
                @click="store.DeleteLink()"
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td class="py-4 px-6">White</td>
            <td class="py-4 px-6">White</td>
            <td class="py-4 px-6">Laptop PC</td>
            <td class="py-4 px-6 text-right flex justify-around">
              <a
                @click="store.EditLink()"
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
              <a
                @click="store.DeleteLink()"
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="fixed right-0 bottom-0">
      <AddToggle class="mr-12 mb-12" />
    </div>
  </div>
</template>

<script>
import { useStore } from "../stores/index.js";
import AddToggle from "../components/AddToggle.vue";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  components: {
    AddToggle,
  },
  methods: {
    SetWidth(str) {
      return str.length > 50 ? str.substring(0, 35) + "..." : str;
    },
    OpenLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
