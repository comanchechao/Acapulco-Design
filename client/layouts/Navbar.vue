<template>
  <div>
    <v-app-bar
      id="app"
      v-gsap.to="{
        opacity: 1,
        duration: 1.7,
        ease: 'circ.out',
      }"
      justify-center
      color="transparent"
      width="100%"
      fixed
      elevation="0"
      class="mt-5"
    >
      <NuxtLink to="/aboutUs">
        <v-btn
          class="mx-4 Btn"
          dark
          depressed
          rounded
          x-large
          color="transparent"
        >
          <v-icon class="pr-2" large>mdi-meditation</v-icon>
          <span class="aboutUs"> About Us </span>
        </v-btn>
      </NuxtLink>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-title class=" black--text text-uppercase">
        <span>Acupulco </span>
        <span class="font-weight-light">Design</span>
      </v-toolbar-title> -->

      <v-menu transition="slide-y-transition" bottom open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            depressed
            x-large
            v-bind="attrs"
            color="transparent Btn"
            class="mx-2"
            v-on="on"
          >
            <span class="white--text"> Explore </span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="category in categories" :key="category.title">
            <v-list-item-title>{{ category.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="px-5">
        <LoginDialog />
      </div>

      <div class="ma-0 pa-0">
        <ShoppingCartDrawer />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      categories: [],
      drawer: false,
    }
  },

  computed: {
    cartTotalAmount() {
      return this.$store.getters.cartItemCount()
    },
  },
  // created() {
  //   axios.get('http://127.0.0.1:8000/api/category/').then((response) => {
  //     this.categories = response.data
  //   })
  // },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Engagement&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
#app {
  z-index: 2;
  opacity: 0;
}
span {
  font-family: 'Acme', sans-serif;
  text-align: center;
  font-size: 1.3em;
  display: flex;
  justify-self: center;
  align-self: center;
}
.sticky {
  background-color: #fff;
}
</style>
