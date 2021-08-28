<template>
  <div
    v-show="showDialog"
    v-gsap.from="{
      y: 300,
      duration: 1,
      ease: 'expo.out',
    }"
    class="
      shadow-2xl
      rounded-xl
      z-50
      bg-gray-200
      w-96
      h-80
      self-center
      grid grid-rows-8
    "
  >
    <div class="rounded-3xl row-span-2 grid grid-cols-3">
      <svg
        class="
          border-blueGray-500
          m-2
          bg-CoolGray-500
          rounded-full
          flex
          items-center
          justify-center
          cursor-pointer
          fill-current
          text-white
        "
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        @click="toggleDialog"
      >
        <path
          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
        ></path>
      </svg>
      <div class="row-span-2">
        <img class="left-2" src="/tik.png" alt="" />
      </div>
    </div>
    <div class="row-span-4 flex flex-col justify-center">
      <h1 class="text-3xl self-center m-2">Payment Sucessfull</h1>
      <p class="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        odit consequatur tenetur praesentium fugiat.
      </p>
    </div>
    <div class="row-span-2 flex justify-center">
      <button
        class="bg-Rose-500 p-2 m-1 w-full rounded-3xl shadow-3xl"
        @click="toggleDialog"
      >
        Classic!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
    }
  },

  methods: {
    toggleDialog() {
      this.showDialog = !this.showDialog
    },
  },
}
</script>


<style scoped>
.modal {
  transition: opacity 0.25s ease;
}
.modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
}
</style>