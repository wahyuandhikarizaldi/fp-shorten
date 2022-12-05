import { ref, computed } from "vue";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

const URL_API = "http://localhost:3000/";

export const useApp = defineStore({
  id: "App",
  state: () => ({
    user: {
      logged_in: false,
    },
    token: null,
    refreshToken: null,
    loading: false,
    error: null,
  }),
  actions: {
    async login(email, password) {
      this.loading = true;
      this.error = null;
      try {
        const { data } = await axios
          .post(URL_API + "login", {
            email,
            password,
          })
          .then((res) => {
            console.log(res);
            document.cookie = `token=${
              res.data.token
            }; path=/; expires=${new Date(
              res.data.expirationTime
            ).toUTCString()}`;
            document.cookie = `refreshToken=${
              res.data.refreshToken
            }; path=/; expires=${new Date(
              res.data.expirationTime
            ).toUTCString()}`;
          })
          .catch((err) => {
            console.log(err);
          });
        this.user = data.user;
        this.token = data.token;
        this.refreshToken = data.refreshToken;
      } catch (error) {
        this.error = error;
      } finally {
        console.log(this.router);
        this.router.push("/dashboard");
        this.loading = false;
      }
    },
    async register(email, password, cpassword) {
      this.loading = true;
      this.error = null;
      console.log("register");
      try {
        const { data } = await axios
          .post(URL_API + "register", {
            email,
            password,
            cpassword,
          })
          .then((res) => {
            document.cookie = `token=${
              res.data.token
            }; path=/; expires=${new Date(
              res.data.expirationTime
            ).toUTCString()}`;
            document.cookie = `refreshToken=${
              res.data.refreshToken
            }; path=/; expires=${new Date(
              res.data.expirationTime
            ).toUTCString()}`;
          })
          .catch((error) => {
            // Todo: Handle error
            console.log(error.response.data.message);
            if (
              error.response.data.message.code === "auth/email-already-in-use"
            ) {
              alert("Email already in use");
            }
          });
        this.user = data.user;
        this.token = data.token;
        this.refreshToken = data.refreshToken;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
      this.router.push("/dashboard");
    },
    async logout() {
      this.user = null;
      this.token = null;
      this.refreshToken = null;
    },
    async sessionCheck() {
      // Todo: Check if token is valid
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const refreshToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("refreshToken="))
        ?.split("=")[1];

      console.log("token : " + token);
      console.log("refreshToken : " + refreshToken);

      if (token && refreshToken) {
        this.user.logged_in = true;
        console.log("logged_in : " + this.user.logged_in);
        return true;
      }
      return false;
    },
  },
});

export const useView = defineStore({
  id: "View",
  state: () => ({
    user_settings: false,
    use_custom_link: false,
  }),
  actions: {
    useCustomLink() {
      this.use_custom_link = !this.use_custom_link;
    },
    deleteLink() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    editLink() {
      Swal.fire({
        title: "Edit Link",
        input: "text",
        inputValue: "https://example.com",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Changed Successfully",
            "Your file has been changed.",
            "success"
          );
        }
      });
    },
    async newLink() {
      const { value: formValues } = await Swal.fire({
        title: "Add New Short Link",
        html: `
        <div>
          <div>
            <label
              for="swal-input1"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Link</label
            >
            <div class="flex mb-2">
              <span
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                id="swal-input1"
                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://www.google.com/"
              />
            </div>
            <div class="flex justify-end">
              Use&nbsp;
              <p
                class="hover:text-blue-500 hover:underline cursor-pointer"
                @click="${this.UseCustomLink()}"
              >
                Custom Link
              </p>
            </div>
          </div>
          <div :class="{ hidden: ${this.use_custom_link == false} }">
            <label
              for="swal-input2"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Custom Link</label
            >
            <div class="flex">
              <span
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                id="swal-input2"
                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://www.google.com/"
              />
            </div>
          </div>
        </div>
        `,
        inputAttributes: {
          required: true,
        },
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
          ];
        },
      });

      if (formValues) {
        Swal.fire(JSON.stringify(formValues));
      }
    },
    toggleUserSettings() {
      this.user_settings = !this.user_settings;
      console.log(this.user_settings);
    },
  },
  getters: {},
});
