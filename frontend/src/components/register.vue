<template>
  <div class="h-screen backdrop-blur-3xl flex">
    <div
      class="w-full items-center lg:w-3/12 m-auto xl:p-10 lg:p-8 relative flex justify-center  lg:flex-row  ">
      <div class="container">

        <div class="card">
          <div class="cardbody">
            <h1 class="text-3xl text-center font-bold text-white my-8">Register</h1>

            <div class="mt-8">
              <div class="lg:col-span-2">
                <div class="md:col-span-5">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                    <form class="submit" @submit.prevent="app.register(email, password, cpassword)">
                      <input
                        class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                        type="email" name="email" placeholder="Email" v-model="email" required />
                      <br>

                      <input
                        class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                        type="password" name="password" placeholder="Password" v-model="password" required />
                      <br>

                      <input
                        class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                        type="password" name="cpassword" placeholder="Confirm Password" v-model="cpassword" required />
                      <br>

                      <button type="submit" class="w-full bg-gradient-to-r from-blue-900 to-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >Register</button>
                      <br>

                      <div class="alert alert-warning alert-dismissible fade show mt-5 d-none flex justify-center text-white" role="alert"
                        id="alert_2">
                        Fill All These Fields
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                      <br>

                      <div class="justify-center grid">
                        <h1 class="text-sm text-white">Already have an account ?</h1>

                        <button type="button" @click="$router.push('/')"
                          class="text-sm text-blue-600 hover:text-blue-600">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useApp } from "../stores/index.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      cpassword: "",
    };
  },
  setup() {
    const app = useApp();
    return {
      app,
    };
  },
  // methods: {
  //   register(submitEvent) {
  //     this.email = submitEvent.target.elements.email.value;
  //     this.password = submitEvent.target.elements.password.value;

    
  //     // firebase registration
  //     const auth = getAuth();
  //     createUserWithEmailAndPassword(auth, this.email, this.password)
  //       .then((userCredential) => {
  //         const user = userCredential.user;
  //         console.log(user);
  //         console.log("Registration completed");
  //         this.$router.push("/");
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode);
  //         console.log(errorMessage);
  //         let alert_2 = document.querySelector("#alert_2");
  //         alert_2.classList.remove("d-none");
  //         alert_2.innerHTML = errorMessage;
  //         console.log(alert_2);
  //       });
  //   },
  // },
};
</script>





















