<template>
  <div>
    <NavbarVue></NavbarVue>
    <main>
      <section class="bg-black text-white">
        <!-- <div
          class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
        >
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
          >
            The Shortest Link Shortener
          </h1>
          <p
            class="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
          >
            Make your long links into short just in one click
          </p>
          <div
            class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-32"
          >
            <input
              type="url"
              id="url"
              class="text-slate-50 text-lg font-semibold rounded-lg p-3 w-full md:w-[60%] bg-slate-800 border-0 focus:outline-none focus:ring-0"
            />
            <button type="submit" class="bg-sky-400 text-slate-50 p-3 font-bold rounded-lg">
              Shorten this link!
            </button>
          </div>
        </div> -->
        <div class="mx-32 h-96 flex justify-center">
          <div class="w-[50%] py-28">
            <h1
              class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
            >
              The Shortest Link Shortener
            </h1>
            <p
              class="mb-8 text-lg font-normal lg:text-xl dark:text-gray-400"
            >
              Make your long links into short just in one click, and share it with your friends. It's that simple!
            </p>
            <div class="flex space-x-4">
              <input type="url" id="url" class="w-full bg-neutral-700 border-0 rounded-lg focus:outline-0 focus:ring-0 font-medium" autocomplete="off">
              <button type="submit" class="bg-green-500 text-slate-50 p-3 font-bold rounded-lg w-32">
                Short it!
              </button>
            </div>
          </div>
          <div class="w-[50%]">
            <img src="/Tabs-bro.png" alt="">
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import NavbarVue from "../components/Navbar.vue";
export default {
  name: "HomeView",
  components: {
    NavbarVue,
  },
};
</script>