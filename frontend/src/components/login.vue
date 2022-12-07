<template>
    <div class="h-screen backdrop-blur-3xl flex">
        <div
            class="rounded-lg bg-transparent w-full items-center lg:w-3/12 m-auto xl:p-10 lg:p-8 relative flex justify-center  lg:flex-row  ">
            <div class="container">
                <div class="card">
                    <div class="cardbody">
                        <h1 class="text-3xl text-center font-bold text-white my-8">Login</h1>
                        <div class="mt-8">
                            <div class="lg:col-span-2">
                                <div class="md:col-span-5">
                                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                                        <form class="submit" @submit.prevent="app.login(email, password)">
                                            <input
                                                class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                                                type="email" name="email" placeholder="Email" required />
                                            <br>
                                            <input
                                                class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                                                type="password" name="password" placeholder="Password" required />
                                            <br>
                                            <button
                                                class="w-full bg-gradient-to-r from-blue-900 to-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                type="submit" id="login_button">Login</button>
                                            <br>
                                            <div class="alert alert-warning alert-dismissible fade show mt-5 d-none flex justify-center text-white"
                                                role="alert" id="alert_1">
                                                Please Fill All This Field
                                                <button type="button" class="btn-close" data-bs-dismiss="alert"
                                                    aria-label="Close"></button>
                                            </div>
                                            <br>
                                            <div class="justify-center grid">
                                                <h1 class="text-sm text-white">Don't have an account ?</h1>
                                                <button @click="$router.push('/register')"
                                                    class="text-sm text-blue-600 hover:text-blue-600">Register</button>
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useApp } from "../stores/index.js";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
//   beforeMount() {
//     if(this.app.user.logged_in) {
//       this.$router.push("/dashboard");
//     }
//   },
  setup() {
    const app = useApp();
    return {
      app,
    };
  },
//   methods: {
//     login(submitEvent) {
//       this.email = submitEvent.target.elements.email.value;
//       this.password = submitEvent.target.elements.password.value;

//       const auth = getAuth();
//       signInWithEmailAndPassword(auth, this.email, this.password)
//         .then(() => {
//           this.$router.push("/dashboard");
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           console.log(errorCode);
//           console.log(errorMessage);
//           let alert_1 = document.querySelector("#alert_1");
//           alert_1.classList.remove("d-none");
//           alert_1.innerHTML = errorMessage;
//           console.log(alert_1);
//         });
//     },
//     moveToRegister() {
//       this.$router.push("/register");
//     },
//   },
};
</script>


