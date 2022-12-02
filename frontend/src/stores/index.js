import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useStore = defineStore({
  id: "Store",
  state: () => ({}),
  actions: {
    DeleteLink() {
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
    EditLink() {
      Swal.fire({
        title: "Edit Link",
        input: "text",
        inputValue: "https://example.com",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write something!";
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
  getters: {},
});
