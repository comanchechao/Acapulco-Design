<template>
  <div class="relative h-96 w-96 bg-Lime-400 max-w-xl mx-auto my-9">
    <div class="relative h-72 w-72 rounded-full py-3 max-w-xl mx-auto">
      <div class="absolute inset-0 bg-red-300 shadow-lg rounded-full">
        <div class="max-w-md mx-auto">
          <img
            src="/davisuko-rhUU1pemhQ0-unsplash-removebg-preview.png"
            alt=""
          />
        </div>
        <div>
          <h1 class="">Dragon Ball</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <div class="w-1/2 bg-indigo-800"></div> -->
<!-- <div class="titleDiv px-3 py-2">
        <h2 class="name py-3">{{ product.title }}</h2>
        <p class="description mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>
      </div> -->
<!-- <div class="left rounded-r-lg bg-green-400 w-1/2">
    </div> -->
<!-- <div class="wrapper d-flex">
          <div class="shoppingcart-div ml-4">
            <v-btn rounded color="#00ffaa" outlined elevation="4" large>
              <v-icon class="px-1 black--text">mdi-shopping-outline</v-icon>
              <span class="black--text" @click="addToCart()"> Add Now </span>
            </v-btn>
          </div>
          <div class="price-div mr-4">
            <p class="price px-4">${{ product.price }}</p>
          </div>
        </div> -->

<script>
export default {
  props: ['product'],

  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1,
      })
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sail&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;600&display=swap');
@font-face {
  font-family: 'Bernadette';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/BernadetteRegular-DOVj0.ttf') format('truetype');
}
</style>
