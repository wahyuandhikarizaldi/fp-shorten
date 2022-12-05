<template>
  <div>
    <NavbarVue></NavbarVue>
    <main>
      <section class="bg-black text-white">
        <div class="mx-32 h-96 flex justify-center">
          <div class="w-[50%] py-28">
            <h1
              class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
            >
              The Shortest Link Shortener
            </h1>
            <p class="mb-8 text-lg font-normal lg:text-xl dark:text-gray-400">
              Make your long links into short just in one click, and share it
              with your friends. It's that simple!
            </p>
            <div class="flex space-x-4">
              <input
                type="url"
                id="url"
                class="w-full bg-neutral-700 border-0 rounded-lg focus:outline-0 focus:ring-0 font-medium"
                autocomplete="off"
              />
              <button
                type="submit"
                class="bg-green-500 text-slate-50 p-3 font-bold rounded-lg w-32"
              >
                Short it!
              </button>
            </div>
          </div>
          <div class="w-[50%]">
            <img src="/Tabs-bro.png" alt="" />
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
