<template>
  <div class="w-full h-dialog flex">
    <div class="w-2/5 h-full bg-mainRed">
      <img
        src="/davisuko-rhUU1pemhQ0-unsplash-removebg-preview.png"
        alt=""
        class=""
      />
    </div>

    <div class="w-3/5 p-9 bg-gray-100 flex-col flex justify-around">
      <div class="flex justify-between flex-grow-0">
        <h1 class="text-5xl text-blueGray-900 font-bold font-mainFont">
          {{ product.title }}
          <h3 class="text-gray-600 font-thin text-2xl font-mainFont">
            {{ product.catagory }}
          </h3>
        </h1>
        <h1 class="text-5xl text-blueGray-900 font-bold font-mainFont">
          {{ product.price }}$
        </h1>
      </div>

      <div class="">
        <h2 class="text-mainBlue font-mainFont text-3xl font-thin">
          Desctiption
        </h2>
        <p class="text-gray-500 text-2xl font-thin font-mainFont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          explicabo aut cum veniam iste aliquid perspiciatis, amet sed accusamus
          numquam enim similique vel sit. Architecto incidunt aliquid esse
          veniam sunt.
        </p>
      </div>
      <div
        v-for="item in cartItem"
        :key="item.id"
        class="flex align-center justify-center"
      >
        <v-btn
          small
          large
          fab
          plain
          class="minus"
          color="#00ffaa"
          @click="decrementQuantity(item)"
        >
          <v-icon>mdi-minus</v-icon></v-btn
        >
        <p class="px-3 text-2xl text-mainBlue font-mainFont">
          Quantity :
          {{ item.quantity }}
        </p>
        <v-btn
          light
          large
          fab
          plain
          class="plus"
          color="#00ffaa"
          @click="incrementQuantity(item)"
          ><v-icon>mdi-plus</v-icon></v-btn
        >
      </div>
      <div class="flex flex-grow-0">
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
        <v-btn text icon color="blue" x-large class="mx-2">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      cart: [],

      Product: {
        item: this.product,
        quantity: 1,
      },
    }
  },
  computed: {
    cartTotalAmount() {
      return this.$store.getters.cartItemCount
    },
    cartItem() {
      return this.$store.state.cart
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('AddToCart', this.Product)
    },
    incrementQuantity(Product) {
      this.$store.commit('incerementQuantity', Product)
    },
    decrementQuantity(Product) {
      this.$store.commit('decrementQuantity', Product)
    },
  },
}
</script>

<style scoped>
.learnMoreBtn {
  font-size: 25px;
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: ease-in-out 0.2s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.learnMoreBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}
</style>
