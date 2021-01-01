<template>
  <div>
    <v-app-bar
      justify-center
      color="transparent"
      width="100%"
      fixed
      elevation="0"
    >
      <v-spacer></v-spacer>
      <!-- <v-toolbar-title class=" black--text text-uppercase">
        <span>Acupulco </span>
        <span class="font-weight-light">Design</span>
      </v-toolbar-title> -->

      <v-menu transition="slide-y-transition" bottom open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            x-large
            v-bind="attrs"
            color="transparent"
            class="mx-2 animate__animated animate__fadeIn animate__delay-0.0s"
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
      <!-- <div>
        <v-btn dark large color="transparent">
          <v-icon> mdi-account-cowboy-hat </v-icon>
        </v-btn>
      </div> -->
      <div>
        <v-menu transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  v-bind="attrs"
                  dark
                  large
                  fab
                  class="animate__animated animate__fadeIn animate__delay-0.0s"
                  color="transparent"
                  v-on="{ ...tooltip, ...menu }"
                >
                  <v-icon large>mdi-login-variant</v-icon>
                </v-btn>
              </template>
              <span>Join Us!</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item>
              <SignupDialog />
            </v-list-item>
            <v-list-item> <LoginDialog /></v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet> -->
      <ShoppingCartDrawer />
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
  // computed: {
  //   Cart() {
  //     return this.$store.state.Cart
  //   },
  // },
  // created() {
  //   axios.get('http://127.0.0.1:8000/api/category/').then((response) => {
  //     this.categories = response.data
  //   })
  // },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Engagement&display=swap');
#app {
}
</style>
