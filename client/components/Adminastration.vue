<template>
  <div
    v-if="showModal"
    id="modal"
    class="
      modal
      flex
      justify-center
      h-56
      items-center
      bg-green-200
      rounded-lg
      antialiased
    "
  >
    <div
      class="
        topBar
        flex flex-col
        w-11/12
        sm:w-5/6
        lg:w-1/2
        max-w-2xl
        mx-auto
        rounded-lg
        border border-green-300
        shadow-xl
      "
    >
      <div
        class="
          flex flex-row
          justify-between
          p-6
          border-b border-gray-200
          rounded-tl-lg rounded-tr-lg
        "
      >
        <p class="font-semibold text-gray-100 text-6xl">Add Product</p>
        <svg
          class="w-6 h-6 cursor-pointer text-white"
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
      <div class="flex flex-col px-6 py-5 background">
        <label for="title" class="mb-2 font-semibold text-gray-100 text-3xl"
          >Title</label
        >
        <input
          id=""
          v-model="title"
          type="text"
          name="title"
          placeholder="Enter title"
          class="
            p-2
            mb-3
            text-black
            bg-gray-100
            border border-gray-200
            rounded
            shadow-sm
            h-16
            focus:outline-none
          "
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
          class="
            p-2
            mb-3
            text-black
            bg-gray-100
            border border-gray-200
            rounded
            shadow-sm
            h-16
            focus:outline-none
          "
        />
        <label class="block mt-4 mb-2 font-semibold text-gray-100 text-3xl">
          <span class="text-gray-100">Catagory</span>
          <select
          v-model="catagory"
            placeholder="Catagory"
            class="
              shadow-sm
              focus:outline-none
              bg-white
              h-16
              text-black
              rounded
              text-base
              form-select
              mt-1
              p-2
              mb-3
              w-full
            "
          >
            <option>Lighters</option>
            <option>Shirts</option>
            <option>Custom Matchboxes</option>
            <option>Collections</option>
          </select>
        </label>

        <div class="flex place-content-center mt-5 space-x-4">
          <input type="file" @change="uploadImage" />
          <input
            id="check1"
            v-model="inStock"
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
        class="
          flex flex-row
          items-center
          justify-between
          topBar
          p-5
          bg-white
          border-t border-gray-200
          rounded-bl-lg rounded-br-lg
        "
      >
        <p class="font-semibold text-gray-600 cursor-pointer" @click="toggleModal">Cancel</p>
        <button
          class="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
          @click="addProduct()"
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
      image: null,
      inStock: null,
      catagory: null,
      feedback: null,
    }
  },
  mounted() {},
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },

    uploadImage(e) {
      const file = e.target.files[0]
      const storageRef = this.$fire.storage.ref('Product Image/' + file.name)

      const uploadTask = storageRef.put(file)

      uploadTask.on('state_changed', (snapshot) => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL)
          this.image = downloadURL
        })
      })
    },
    addProduct() {
      if (this.title) {
        this.$fire.firestore
          .collection('Products')
          .add({
            title: this.title,
            price: this.price,
            image: this.image,
            inStock: this.inStock,
            catagory: this.catagory,
          })
          .then(() => {
            this.title = null
            this.price = null
            this.inStock = null
            this.catagory = null
            this.feedback = null
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

.topBar{
  background-color: #041F60;
}

.background{
   background-color: #219ebc;
}
</style>
