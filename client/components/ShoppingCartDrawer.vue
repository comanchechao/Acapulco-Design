<template>
  <div id="main">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          fab
          x-large
          color="transparent"
          v-on="on"
          @click="drawer = !drawer"
        >
          <v-icon color="white">mdi-shopping-outline</v-icon>
        </v-btn>
      </template>
      <span>Shopping Cart</span>
    </v-tooltip>

    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      app
      bottom
      class="light-green lighten-5 drawer"
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
            <h3 class="itemName mb-5">{{item.product.title}}</h3>
            <v-btn rounded outlined color="#d32f2f">
              <h4 class="delete" @click.prevent="removeCartProduct(item.product)">Delete</h4>
            </v-btn>
          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="right mr-1">
          <div class="price d-flex justify-center align-center">
            <p class="">{{item.product.price}}</p>
          </div>
          <div class="d-flex align-center justify-center mr-6">
            <v-btn @click="incrementQuantity()" small large fab plain class="minus" color="#00ffaa">
              <v-icon>mdi-minus</v-icon></v-btn
            >
            <p class="px-3">{{item.quantity}}</p>
            <v-btn @click="addToCart()" light large fab plain class="plus" color="#00ffaa"
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
export default {
  data() {
    return {
      drawer: false,
    }
  },
  computed:{
    cart(){
      return this.$store.state.cart;
    }
  },
  methods: {
    removeCartProduct(product){
      this.$store.dispatch("removeCartProduct", product)
    },
    incrementQuantity(product){
      this.$store.dispatch("incrementQuantity", product)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');
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
  border: 2px solid #00e699;
  background-color: #f3f3f3;
  color: #14ffb1;
  border-radius: 35px;
  transition: ease-in-out 0.5s;
  padding: 9px 20px;
}

.editBtn:hover {
  background-color: #14ffb1;
  color: rgb(243, 243, 243);
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
