<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Link</th>
          <th scope="col" class="py-3 px-6">Day</th>
          <th scope="col" class="py-3 px-6">Month</th>
          <th scope="col" class="py-3 px-6">Price</th>
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
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple MacBook Pro 17"
          </th>
          <td class="py-4 px-6">Sliver</td>
          <td class="py-4 px-6">Laptop</td>
          <td class="py-4 px-6">$2999</td>
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
          <td class="py-4 px-6">Laptop PC</td>
          <td class="py-4 px-6">$1999</td>
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
</template>

<script>
import { useStore } from "../stores/index.js";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
};
</script>
