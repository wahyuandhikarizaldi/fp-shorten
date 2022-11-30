import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const URL_API = 'http://localhost:3000/'

export const useApp = defineStore({
  id: 'App',
  state: () => ({
    user: null,
    token: null,
    refreshToken: null,
    loading: false,
    error: null,
  }),
  getters: {
    isAuthenticated: computed(() => !!this.user),
  },
  actions: {
    async login(email, password) {
      this.loading = true
      this.error = null
      try {
        const { data } = await axios.post(URL_API + 'login', {
          email,
          password,
        })
        .then(res => {
          console.log(res);
          document.cookie = `token=${res.data.token}; path=/; expires=${new Date(res.data.expirationTime).toUTCString()}`;
          document.cookie = `refreshToken=${res.data.refreshToken}; path=/; expires=${new Date(res.data.expirationTime).toUTCString()}`;
        })
        .catch(err => {
          console.log(err);
        });
        this.user = data.user
        this.token = data.token
        this.refreshToken = data.refreshToken
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async register(email, password, cpassword) {
      this.loading = true
      this.error = null
      console.log('register')
      try {
        const { data } = await axios.post(URL_API + 'register', {
          email,
          password,
          cpassword
        })
        .then(res => {
          document.cookie = `token=${res.data.token}; path=/; expires=${new Date(res.data.expirationTime).toUTCString()}`;
          document.cookie = `refreshToken=${res.data.refreshToken}; path=/; expires=${new Date(res.data.expirationTime).toUTCString()}`;
        })
        .catch(error => {
          // Todo: Handle error
          console.log(error.response.data.message);
          if(error.response.data.message.code === "auth/email-already-in-use") {
            alert("Email already in use");
          }
        });
        this.user = data.user
        this.token = data.token
        this.refreshToken = data.refreshToken
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async logout() {
      this.user = null
      this.token = null
      this.refreshToken = null
    },
  },
})
