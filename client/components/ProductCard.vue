<template>
  <div  v-show="product.catagory === catagory">
    <div
      class="
        flex flex-col
        lg:h-72
        h-rem26
        lg:w-96 lg:flex-row
        justify-center
        align-center
        lg:space-x-3
        cardBackground
        productCard
      "
    >
      <div
        class="
          lg:h-full
          h-2/5
          w-full
          lg:w-2/5
          bg-Emerald-100
          flex
          justify-center
          align-center
          overflow-hidden
        "
      >
        <img
          :src="product.image"
          alt=""
          class="object-contain lg:object-cover transform lg:scale-150"
        />
      </div>
      <div
        class="
          h-3/5
          w-full
          lg:w-3/5 lg:h-full
          flex flex-col
          justify-between
          align-center
          space-y-3
          p-2
          sm:py-3
        "
      >
        <div
          class="
            w-14
            h-14
            rounded-full
            fixed
            transform
            translate-x-8
            lg:-translate-y-5
            -translate-y-9
            self-end
            flex
            justify-center
            align-center
            bg-goldie
            shoppingBtn
          "
          @click="addToCart"
        >
          <span class="shoppingBtnSpan">
            <v-icon
              color="white
"
              class=""
              >mdi-basket-plus-outline</v-icon
            >
          </span>
        </div>
        <div class="w-full h-3/4 flex flex-col justify-between align-center">
          <h1 class="text-5xl text-mainBlue font-bold text-center">
            {{ product.title }}
          </h1>
          <h3 class="text-2xl text-gray-600 font-thin text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p
            class="
              lg:text-4xl
              text-3xl text-mainBlue text-center
              font-extrabold
            "
          >
            {{ product.price }} IRL
          </p>
        </div>
        <div class="w-full h-1/4 flex justify-center align-center">
          <LazyHydrate when-visible>
            <ProductDetail :product="product" />
          </LazyHydrate>
        </div>
        <!-- 
        
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
            
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,

    ProductDetail: () => import('../components/ProductDetail.vue'),
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
.shoppingBtn {
  transition: ease-in-out 0.3s;
  cursor: pointer;
}
.shoppingBtn:hover {
  filter: brightness(1.1);
}
.shoppingBtn:active {
  filter: brightness(0.5);
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
