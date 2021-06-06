<template>
  <div
    v-if="showModal"
    id="modal"
    class="flex justify-center h-1/2 items-center bg-green-200 rounded-lg antialiased"
  >
    <div
      class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto bg-green-500 rounded-lg border border-green-300 shadow-xl"
    >
      <div
        class="flex flex-row justify-between p-6 border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
      >
        <p class="font-semibold text-gray-100 text-6xl">Add Product</p>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click="toggleModal"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div class="flex flex-col px-6 py-5 bg-Indigo-500">
        <label for="title" class="mb-2 font-semibold text-gray-100 text-3xl"
          >Title</label
        >
        <input
          id=""
          v-model="title"
          type="text"
          name="title"
          placeholder="Enter title"
          class="p-2 mb-3 text-black bg-gray-100 border border-gray-200 rounded shadow-sm h-24 focus:outline-none"
        />
        <p v-if="feedback" class="text-red-500">{{ feedback }}</p>
        <label for="price" class="mb-2 font-semibold text-gray-100 text-3xl"
          >Price</label
        >
        <input
          id=""
          v-model="price"
          type="number"
          name="price"
          placeholder="Enter price"
          class="p-2 mb-3 text-black bg-gray-100 border border-gray-200 rounded shadow-sm h-24 focus:outline-none"
        />

        <div class="flex place-content-center mt-5 space-x-4">
          <input
            id="check1"
            class="inline-flex rounded-full"
            type="checkbox"
            name="check1"
          />
          <label class="inline-flex font-semibold text-gray-800" for="check1">
            in stock</label
          >
        </div>
      </div>
      <div
        class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
      >
        <p class="font-semibold text-gray-600" @click="toggleModal()">Cancel</p>
        <button
          class="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
          @click="addProduct() && closeModal()"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LargeModal',
  data() {
    return {
      showModal: false,
      title: null,
      price: null,
      feedback: null,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    closeModal() {
      this.showModal = false
    },
    addProduct() {
      if (this.title) {
        this.$fire.firestore
          .collection('Products')
          .add({
            title: this.title,
            price: this.price,
          })
          .then(() => {
            this.title = null
            this.price = null
            this.feedback = null
            this.showModal = false
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err)
          })
      } else {
        this.feedback = 'Fields cannot be empty'
      }
    },
  },
}
</script>

<style>
#modal {
  font-family: 'Yanone Kaffeesatz';
  font-size: 20px;
}
</style>
