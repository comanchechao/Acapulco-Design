<template>
  <div v-show="product.catagory === catagory">
    <div
      class="
        flex flex-col
        h-72
        w-96
        bg-goldie
        lg:flex-row
        justify-center
        align-center
        space-x-3
        cardBackground
        productCard
      "
    >
      <div class="h-full w-2/5 bg-red-300">
        <!-- <div
              class="absolute inset-0 bg-gray-300 shadow-lg rounded-full lg:rounded-none h-full"
            > -->
        <!-- <img
          src="/davisuko-rhUU1pemhQ0-unsplash-removebg-preview.png"
          alt=""
          class="mx-auto object-cover"
        /> -->
        <!-- </div> -->
      </div>
      <div
        class="
          bg-blue-400
          w-3/5
          h-full
          flex flex-col
          justify-between
          align-center
          space-y-2
          p-6
        "
      >
        <div class="w-full h-3/4 bg-Lime-900"></div>
        <div class="w-full h-1/4 bg-CoolGray-900"></div>
        <!-- <h1 class="text-5xl text-blueGray-900 font-bold mt-5">
          {{ product.title }}
        </h1>
        <h3 class="text-2xl text-gray-600 font-thin text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p class="text-4xl text-CoolGray-900">{{ product.price }} IRL</p>
        <div class="flex align-center justify-center w-full h-full space-x-2">
          <button
            class="
              learnMoreBtn
              flex
              py-2
              align-center
              justify-center
              rounded-full
              bg-green-300
            "
            @click="addToCart"
          >
            <span class="text-xl pl-2 font-mainFont text-mainBlue">
              Add to Cart
              <v-icon
                color="white
"
                class=""
                >mdi-shopping-outline</v-icon
              >
            </span>
          </button>
          <ProductDetail :product="product" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import ProductDetail from './ProductDetail.vue'
export default {
  components: {
    // ProductDetail,
  },
  props: ['product'],

  data() {
    return {
      Product: {
        item: this.product,
        quantity: 1,
      },
    }
  },

  computed: {
    catagory() {
      return this.$store.state.catagory
    },
  },

  methods: {
    catagorySelect(selected) {
      this.catagory = selected
      console.log(this.catagory)
    },
    addToCart() {
      this.$store.commit('AddToCart', this.Product)
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

.learnMoreBtn:hover {
  transform: scale(0.95);
  background-color: #120129;
  color: #ff4a68;
}
.cardBackground {
  /* background: #e6e6e6; */
  box-shadow: 0 8px 32px 0 #1f26875e;
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 10px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  transition: ease-in-out 0.2s;
}
/* .productDetailBackground {
  background: #120129c9;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
} */
</style>
