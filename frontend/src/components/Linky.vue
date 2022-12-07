<template>
    <div class="w-full flex justify-center items-center ">
      <div class="w-96 flex-2 rounded-xl bg-white p-5 my-2 lg:my-4 lg:mx-4 shadow-sm border hover:shadow-md hover:border-purple-600">
      <h3 class="flex justify-center text-lg font-bold flex items-center">
        <button class="w-20 bg-gradient-to-r from-red-600 to-red-400 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded" @click="deleteLink(link)">Delete</button>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
        {{ linky.alias }}
      </h3>
      <div class="flex items-center flex justify-center">
        <router-link class="text-blue-600 underline mr-4" :to="'/' + linky.code" target="_blank">{{ currentHost }}/{{ linky.code }}</router-link>
        <!-- Copy Button -->
        
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Linky',
    props: {
      linky: Object
    },
    data() {
      return {
        currentHost: window.location.host
      }
    },
   
  
  }
  </script>
  
  <style scoped>
    .container:hover {
      box-shadow: rgba(124, 58, 237, .4) 0px 3px 10px 0px;
    }
  </style>