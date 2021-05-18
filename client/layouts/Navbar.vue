<template>
  <div>
    <v-app-bar
      id="app"
      v-gsap.to="{
        opacity: 1,
        duration: 1.4,
        ease: 'circ.out',
      }"
      justify-center
      color="transparent"
      width="100%"
      fixed
      elevation="0"
      class="pt-8"
    >
      <!-- <v-btn
        v-if="user"
        :click="signOut()"
        dark
        depressed
        rounded
        x-large
        color="transparent"
        >Logout</v-btn
      > -->
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
            <span class="white--text"> Explore </span> </v-btn
          >
          <v-btn depressed x-large color="transparent Btn" class="mx-2">
            <NuxtLink id="admin-link" class="flex space-x-4" to="/adminPage"
              ><span class="white--text">admin </span> <v-icon class="cowboy">mdi-account-cowboy-hat</v-icon></NuxtLink
            >
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="category in categories" :key="category.title">
            <v-list-item-title>{{ category.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div v-if="user" class="px-5">
        <v-menu light transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  color="transparent"
                  class="profilePageBtn d-flex align-center pr-4"
                  v-bind="attrs"
                  depressed
                  x-large
                  fab
                  dark
                  @click="dialog = true"
                  v-on="{ ...tooltip, ...menu }"
                >
                  <v-icon class="white--text pl-3">mdi-account-key</v-icon>
                </v-btn>
              </template>
              <span>Welcome back!</span>
            </v-tooltip>
          </template>
          <v-list dense>
            <v-list-item>
              <v-list-item-icon>
                <ProfilePageDialog />
              </v-list-item-icon>
            </v-list-item>
            <v-list-item>
              <v-btn
                color="transparent"
                depressed
                class="my-3"
                @click="signOut"
              >
                <v-icon>mdi-logout-variant</v-icon>
                <span> Logout </span>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-if="!user">
        <LoginDialog />
      </div>

      <!-- <div></div> -->

      <div class="ma-0 pa-0">
        <ShoppingCartDrawer />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import LoginDialog from '../components/LoginDialog'
import ProfilePageDialog from '../components/ProfilePageDialog'
import ShoppingCartDrawer from '../components/ShoppingCartDrawer'

// import axios from 'axios'
export default {
  components: {
    ProfilePageDialog,
    LoginDialog,
    ShoppingCartDrawer,
  },
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
    user() {
      return this.$store.getters.getUser
    },
  },

  methods: {
    signOut() {
      this.$store.dispatch('signOut').then((data) => {
        this.$router.push('/')
      })
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
#admin-link {
  color: #fff;
}
.sticky {
  background-color: #fff;
}
</style>
