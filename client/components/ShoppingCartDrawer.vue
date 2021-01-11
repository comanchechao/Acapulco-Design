<template>
  <div>
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
      close-delay
      open-on-hover
      hide-overlay
      app
      scrollable
      src="/ateke-iranmanesh-7APM4YyW_JU-unsplash.jpg"
      width="20%"
    >
      <v-container grid-list-xs class="list">
        <v-row justify-center align-xs>
          <v-col align-self="center" class="items my-4">
            <h3 class="itemName my-3">Custom Dragon Lighter</h3>
            <p class="price">$35000</p>

            <div class="d-flex pa-3 justify-center">
              <v-btn small fab class="minus" color="transparent">
                <v-icon>mdi-minus-circle-outline</v-icon></v-btn
              >
              <p class="pa-3">X2</p>
              <v-btn small fab class="plus" color="transparent"
                ><v-icon>mdi-plus-circle-outline</v-icon></v-btn
              >
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

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

.list {
  width: 300px;
  height: 800px;
}

.items {
  background-color: rgb(5, 0, 32);
  box-shadow: black 1px;
  border-radius: 10px;
}

.itemName {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 10px;
  line-height: 30px;
}

/* .checkout {
  display: flex;
  justify-self: center;
} */
</style>
