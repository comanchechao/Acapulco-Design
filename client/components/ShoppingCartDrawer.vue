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
      hide-overlay
      clipped
      scrollable
      app
      class="lime lighten-5"
      width="33%"
    >
      <v-container grid-list-xs class="list">
        <v-row>
          <v-col class="items my-4 pa-7">
            <div class="title d-flex">
              <img
                class="productImage mx-4"
                src="/davisuko-rhUU1pemhQ0-unsplash.jpg"
                alt="John"
              />
              <div>
                <h3 class="itemName">Lighter: Dragon</h3>
                <v-btn plain color="transparent">
                  <h4 class="delete">Delete</h4>
                </v-btn>
              </div>
              <v-spacer></v-spacer>
              <div class="right px-3 mx-5">
                <p class="price">35000</p>
                <div class="d-flex">
                  <v-btn
                    small
                    light
                    fab
                    plain
                    class="minus"
                    color="transparent"
                  >
                    <v-icon>mdi-minus-circle-outline</v-icon></v-btn
                  >
                  <p class="px-3">2</p>
                  <v-btn light small fab plain class="plus" color="transparent"
                    ><v-icon>mdi-plus-circle-outline</v-icon></v-btn
                  >
                </div>
              </div>
            </div>
          </v-col>
          <!-- <v-spacer></v-spacer>
          <v-col justify-center>
          </v-col> -->
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
      <div class="checkout d-flex justify-center align-end">
        <v-btn x-large color="blue">Checkout</v-btn>
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
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

#main {
  color: #777777;
}

.list {
  width: 600px;
  height: 800px;
  /* margin: 0; */
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
  font-family: 'Monserrat', sans-serif;
  font-size: 25px;
  font-weight: 700;
}
.delete {
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
/* .checkout {
  display: flex;
  justify-self: center;
} */
</style>
