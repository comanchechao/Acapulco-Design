<template>
  <v-app>
    <Navbar />
    <div class="h-full grid grid-rows-2 grid-cols-2">
      <div
        v-gsap.from="{
          duration: 1,
          scale: 0.1,
        }"
        class="flex align-center justify-start bg-purple-500 rounded-br-md"
      >
        <img id="leaves" class="absolute" src="/hhjhhUntitled-2.png" alt="" />
        <div class="w-1/2">
          <img src="/1uKK.gif" alt="" />
        </div>
        <form class="w-full">
          <div
            class="container bg-yellow-600 rounded bg-opacity-20 font-serif h-full flex w-full p-5 place-items-center flex-col text-2xl"
          >
            <input
              @click.prevent=""
              class="w-full p-3 border-b-2 border-red-600"
              type="text"
              name="title"
              placeholder="title . . ."
              v-model="title"
            />
            <input
              class="w-full p-3 border-b-2 border-red-600"
              type="number"
              name="price"
              placeholder="Price . . ."
              v-model="price"
            />
            <v-btn class="mx-2" fab dark color="amber darken-3">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </div>
        </form>
      </div>
      <div
        v-gsap.from="{
          duration: 1,
          scale: 0.1,
        }"
        class="flex align-center justify-center bg-blue-800 rounded-bl-md"
      >
        <img id="leaves" class="absolute" src="/hhjhhUntitled-2.png" alt="" />
      </div>
      <div
        v-gsap.from="{
          duration: 1,
          scale: 0.1,
        }"
        class="flex align-center justify-center bg-Lime-500 rounded-tr-md"
      >
        <img id="leaves" class="absolute" src="/hhjhhUntitled-2.png" alt="" />
        <img class="absolute w-full" src="/Ocean.png" alt="" />
      </div>
      <div
        v-gsap.from="{
          duration: 1,
          scale: 0.1,
        }"
        class="flex align-center font-serif font-bold text-3xl justify-center bg-yellow-400 rounded-tl-md"
      >
        <img id="leaves" class="absolute" src="/leaves.png" alt="" />
        <img class="absolute w-full" src="/Ocean.png" alt="" />
        kesler
      </div>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/layouts/Navbar.vue'

export default {
  name: 'adminPage',
  components: {
    Navbar,
  },
  data() {
    return {
        title:null,
        price:null,
    }
  },
}
</script>

<style>
input:focus,v-btn,
textarea {
  outline: 1px;
  outline: crimson;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
#leaves {
  z-index: -1;
}
</style>