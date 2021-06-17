<template>
  <div
    class="flex flex-col justify-between align-center space-y-4 cardBackground"
  >
    <div class="relative h-64 w-64 rounded-full max-w-xl">
      <div class="absolute inset-0 bg-gray-300 shadow-lg rounded-full">
        <div class="max-w-md mx-auto">
          <img
            src="/davisuko-rhUU1pemhQ0-unsplash-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between align-center mt-2 space-y-2">
      <h1 class="text-5xl text-blueGray-900 font-bold mt-5">Dragon Ball</h1>
      <h3 class="text-2xl text-gray-600 font-thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
      <p class="text-4xl text-CoolGray-900">2500 IRL</p>
      <button class="learnMoreBtn flex align-center justify-center">
        <span class="learnMoreText px-4">
          Add to Cart
          <v-icon
            color="white
"
            class="pb-2 pl-2"
            >mdi-shopping-outline</v-icon
          >
        </span>
      </button>
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
.learnMoreBtn {
  font-size: 25px;
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: transform ease-in-out 0.5s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.learnMoreBtn:hover {
  transform: translateY(-5px);
  background-color: #120129;
  color: #ff4a68;
}
.cardBackground {
  /* background: #b3bbbd33; */
  box-shadow: 0 8px 32px 0 #1f26875e;
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
</style>
