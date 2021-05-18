<template>
  <div id="main">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          dark
          fab
          depressed
          x-large
          color="transparent"
          v-on="on"
          @click="drawer = !drawer"
        >
          <v-icon color="white">mdi-shopping-outline</v-icon>
        </v-btn>
        <v-badge
          :content="cartTotalAmount"
          :value="cartTotalAmount"
          color="green"
          overlap
        >
        </v-badge>
      </template>
      <span>Shopping Cart</span>
    </v-tooltip>

    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      app
      bottom
      class="drawer red lighten-4"
      width="33%"
    >
      <!-- <div v-for="product in products" :key="product.id">  
      </div> -->
      <div class="container">
        <div v-for="item in cart" :key="item.product.id">
          <div class="title d-flex">
            <img
              class="productImage mx-4 mt-6"
              src="/davisuko-rhUU1pemhQ0-unsplash.jpg"
              alt="John"
            />
            <div>
              <h3 class="itemName mb-5">{{ item.product.title }}</h3>
              <v-btn rounded outlined color="#d32f2f">
                <h4
                  class="delete"
                  @click.prevent="removeCartProduct(item.product)"
                >
                  Delete
                </h4>
              </v-btn>
            </div>
          </div>
          <v-spacer></v-spacer>
          <div class="right mr-1">
            <div class="price d-flex justify-center align-center">
              <p class="">{{ item.product.price }}</p>
            </div>
            <div class="d-flex align-center justify-center mr-6">
              <v-btn
                small
                large
                fab
                plain
                class="minus"
                color="#00ffaa"
                @click="incrementQuantity()"
              >
                <v-icon>mdi-minus</v-icon></v-btn
              >
              <p class="px-3">{{ item.quantity }}</p>
              <v-btn light large fab plain class="plus" color="#00ffaa"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
          </div>
        </div>
      </div>
      <v-spacer></v-spacer>
      <div class="checkout mb-5 d-flex justify-center align-end">
        <button class="mx-7 editBtn">
          <span class="px-9 py-8 editText"> Edit </span>
        </button>
        <CheckoutDialog />
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import CheckoutDialog from './CheckoutDialog'
export default {
  components: {
    CheckoutDialog,
  },
  data() {
    return {
      cart: [],
      drawer: false,
    }
  },
  computed: {
    cartTotalAmount() {
      return this.$store.getters.cartItemCount
    },
  },
  methods: {
    removeCartProduct(product) {
      this.$store.dispatch('removeCartProduct', product)
    },
    incrementQuantity(product) {
      this.$store.dispatch('incrementQuantity', product)
    },
  },
}
</script>

<style scoped>
#main {
  color: #7a7a7a;
}

.container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 30px;
  /* width: 600px; */
  height: 90%;
}

.drawer {
  z-index: 1;
}

.items {
  /* background-color: rgb(5, 0, 32); */
  box-shadow: black 1px;
}
.title {
  /* float: right; */
  /* margin: 0; */
}

.itemName {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 10px;
  line-height: 30px;
}
.price {
  grid-area: 1 / 3 / 2 / 4;
  font-family: 'Monserrat', sans-serif;
  font-size: 25px;
  font-weight: 700;
}
.delete {
  grid-area: 2 / 3 / 3 / 4;
  font-family: 'Montserrat', sans-serif;
  color: #d32f2f;
  text-transform: capitalize;
}

.productImage {
  border-radius: 50%;
  float: left;
  width: 70px;
  height: 70px;
}
.checkoutText,
.editText {
  font-family: 'Lato', sans-serif;
  text-transform: capitalize;
  font-size: 1.3rem;
}

.editBtn {
  font-size: 30px;
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.editBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}

/* @media screen and (max-width: 800px) {
  .container {
    width: 300px;
  }
} */
/* .checkout {
  display: flex;
  justify-self: center;
} */
</style>
