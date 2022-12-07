<template>
<div class="h-full backdrop-blur-3xl">
  <div class="blur-lg"></div> <nav id="home" class="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="flex md:order-2">
        <button type="button"
          class="ease-in-out duration-300 text-white bg-gradient-to-r from-blue-900 to-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          @click="signOut">Log Out</button>

      </div>

      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-800 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#about"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page">About Us</a>
          </li>

          <li>
            <a href="#link"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page">Link</a>
          </li>

        </ul>
      </div>

    </div>


  </nav>
  <!-- Shorten -->
  <div
    class="rounded-lg bg-gray-900 w-full items-center lg:w-3/12 m-auto xl:p-10 lg:p-8 relative flex justify-center  lg:flex-row hover:shadow-md border border-blue-800 my-32">
    <div class="container">
      <div class="card">
        <div class="cardbody">
          <h1 class="text-4xl text-center font-bold text-white my-4">Shorten</h1>
          <div class="mt-8">
            <div class="lg:col-span-2">
              <div class="md:col-span-5">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                  <form class="submit" @submit.prevent="shorten">
                    <input
                      class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                      type="url" 
                      pattern="https://.*" 
                      v-model="url" 
                      aria-label="URL"
                      placeholder="blabla.com" 
                      required />
                    <br>
                    <input
                      class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                      type="text" 
                      v-model="alias" 
                      aria-label="Alias"
                      placeholder="alias" 
                      required />
                    <br>
                    <input
                      class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                      type="text" 
                      v-model="code" 
                      aria-label="Alias"
                      placeholder="code" 
                      required />
                    <br>
                    <button class="w-full bg-gradient-to-r from-blue-900 to-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit" @click="$router.push('/dashboard')">
                      Submit
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Link -->
  <div id="link" class="text-6xl text-white text-center font-bold my-32">Your Link</div>
  <div  class="grid grid-cols-3">
    <h1 class="text-lg text-white text-center" v-if="linkys.length == 0"></h1>
    <Linky v-else v-for="linky in linkys" :key="linky.code" :linky="linky"/>
  </div>
  <h3 class="text-lg font-bold flex items-center"></h3>

  <div class="text-6xl text-white text-center font-bold my-32">Hafozh Developer Team</div>
  <section id="about" class="flex flex-row first-letter: my-24">
    <!-- Box 1 -->
    <section class="w-64 mx-auto bg-gray-400 rounded-lg
     bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
 rounded-3xl px-8 py-6 shadow-lg">
        <div class="flex items-center">
            <span class="text-gray-400 text-sm">Login/Register Dashboard Frontend</span>
            <span class="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div class="mt-6 w-fit mx-auto">
            <img src="https://cdn.discordapp.com/attachments/884248953804181526/1048998546210291862/image0.jpg" class="rounded-full w-28 " alt="profile picture" srcset="">
        </div>

        <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">Athallah <br/> Narda Wiyoga</h2>
        </div>
        <p class="text-blue-500 font-semibold mt-2.5" >
            5027211041
        </p>

        <div class="h-1 w-full bg-black mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5 bg-blue-500 "></div>
        </div>
        <div class="mt-3 text-white text-sm">
            <span class="text-gray-400 font-semibold">Storage:</span>
            <span>40%</span>
        </div>
        
    </section>

    <!-- Box 2 -->
    <section class="w-64 mx-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
 rounded-3xl px-8 py-6 shadow-lg">
        <div class="flex items-center">
            <span class="text-gray-400 text-sm">Shorten Frontend-Backend Developer</span>
            <span class="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div class="mt-6 w-fit mx-auto">
            <img src="https://cdn.discordapp.com/attachments/884248953804181526/1049000398419136522/image0.jpg" class="rounded-full w-28 " alt="profile picture" srcset="">
        </div>

        <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">Sulthan Akmal<br/> Rafliansyah</h2>
        </div>
        <p class="text-blue-500 font-semibold mt-2.5" >
            5027211039
        </p>

        <div class="h-1 w-full bg-black mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5 bg-blue-500 "></div>
        </div>
        <div class="mt-3 text-white text-sm">
            <span class="text-gray-400 font-semibold">Storage:</span>
            <span>40%</span>
        </div>

    </section>

    <!-- Box 3  -->
    <section class="w-64 mx-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
 rounded-3xl px-8 py-6 shadow-lg">
        <div class="flex items-center">
            <span class="text-gray-400 text-sm">Login/Register Shorten Backend</span>
            <span class="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div class="mt-6 w-fit mx-auto">
            <img src="https://cdn.discordapp.com/attachments/884248953804181526/1049003276080779294/image0.jpg" class="rounded-full w-28 " alt="profile picture" srcset="">
        </div>

        <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">Wahyu <br/> Andhika Rizaldi</h2>
        </div>
        <p class="text-blue-500 font-semibold mt-2.5" >
            5027211003
        </p>

        <div class="h-1 w-full bg-black mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5 bg-blue-500 "></div>
        </div>
        <div class="mt-3 text-white text-sm">
            <span class="text-gray-400 font-semibold">Storage:</span>
            <span>40%</span>
        </div>

    </section>

  </section>

  
<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" class="hover:underline">Hafozh™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#home" class="hover:underline">Home</a>
        </li>
    </ul>
</footer>
        
</div>
</template>


<script>
import { getAuth } from "firebase/auth";
import db  from "../config/firebase.js";
// import shortid from 'shortid';

import Linky from '@/components/Linky.vue'

const auth = getAuth();

export default {
  components: {
    Linky
  },
  data() {
    return {
      // email: auth.currentUser.email,
      url: '',
      alias: '',
      linkys: []
    }
  },
  // setup() {
  //   const view = useView();
  //   const app = useApp();
  //   return {
  //     app,
  //     view,
  //   };
  // },
  // created() {
  //   if (this.app.user.logged_in === false) {
  //     this.$router.push("/");
  //   }
  // },
  mounted() {
    this.refreshList();
  },
  methods: {
    signOut() {
      auth
        .signOut()
        .then(() => {
          console.log("Sign Out completed");
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
    async shorten(){
      await db.collection('urls').add({
        alias: this.alias,
        url: this.url,
        code: this.code
      }).then((result) => {
        // Reset form
        this.resetForm();
        // Refresh link list
        this.refreshList();
      }).catch((error) => {
        console.log(error);
      });
    },
    resetForm() {
      this.url = '';
      this.alias = '';
    },
    async refreshList(){
      this.linkys = [];
      await db.collection('urls').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          this.linkys.push(doc.data());
        })
      }).catch((error) => {
        console.error(error);
      });
    }
  },
};
</script>


<style scoped>
  .form-card {
    box-shadow: rgba(124, 38, 237, .7) 0px 3px 10px 0px;
  }
</style>