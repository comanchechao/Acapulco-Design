<template>
  <div v-show="product.catagory === catagory">
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      class="dialog"
      width="900px"
      :fullscreen="$vuetify.breakpoint.xsOnly"
    >
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          class="
            flex flex-col
            lg:flex-row
            justify-between
            align-center
            space-y-4
            cardBackground
            productCard
          "
          @click.self="dialog = true"
          v-on="on"
        >
          <div
            class="
              md:mt-4
              lg:w-3/4
              lg:h-80
              w-52
              h-52
              rounded-full
              bg-Rose-400
              lg:rounded-none
              lg:flex-shrink lg:flex-grow
              flex
              justify-center
              align-center
            "
          >
            <!-- <div
              class="absolute inset-0 bg-gray-300 shadow-lg rounded-full lg:rounded-none h-full"
            > -->
            <img
              src="/davisuko-rhUU1pemhQ0-unsplash-removebg-preview.png"
              alt=""
              class="mx-auto"
            />
            <!-- </div> -->
          </div>
          <div
            class="
              flex flex-col
              justify-between
              align-center
              mt-2
              space-y-2
              p-6
            "
          >
            <h1 class="text-5xl text-blueGray-900 font-bold mt-5">
              {{ product.title }}
            </h1>
            <h3 class="text-2xl text-gray-600 font-thin text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-4xl text-CoolGray-900">{{ product.price }} IRL</p>
            <button
              class="learnMoreBtn flex align-center justify-center"
              @click="addToCart"
            >
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

      <div class="flex justify-center flex-col align-center rounded-full">
        <ProductDetail :product="product" />
      </div>
    </v-dialog>
  </div>
</template>

<script>
import ProductDetail from './ProductDetail.vue'
export default {
  components: {
    ProductDetail,
  },
  props: ['product'],

  data() {
    return {
      dialog: false,

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
  background: #e6e6e6;
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

.cardBackground:hover {
  transform: scale(1.01);
}
</style>
