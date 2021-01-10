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
      src="/tyler-nix-6mze64HRU2Q-unsplash.jpg"
      width="20%"
    >
      <div class="list">
        <div class="items">
          <h3 class="itemName">Custom Dragon Lighter</h3>
          <p class="price">$35000</p>
          <div class="itemCount">
            <v-btn small fab class="minus" color="transparent">
              <v-icon>mdi-minus-circle-outline</v-icon></v-btn
            >
            <p>X2</p>
            <v-btn small fab class="plus" color="transparent"
              ><v-icon>mdi-plus-circle-outline</v-icon></v-btn
            >
          </div>
        </div>
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

<style></style>
