<template>
  <!-- <v-app> -->
  <div class="w-full bg-transparent Navbar opacity-0 z-50">
    <div class="grid grid-cols-4 place-content-center">
      <div class="col-span-2 justify-self-start self-center">
        <NuxtLink to="/aboutUs">
          <v-btn
            class="ml-14 Btn"
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
      </div>

      <div
        class="flex col-span-2 align-center space-x-3 justify-self-end mr-14"
      >
        <div>
          <NuxtLink to="/productList">
            <v-btn depressed x-large color="transparent" class="">
              <span class="white--text"> Shop </span>
            </v-btn>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink id="admin-link" class="flex" to="/adminPage">
            <v-btn depressed x-large color="transparent Btn" class="">
              <span class="white--text pr-2">admin</span>
              <v-icon class="cowboy">mdi-account-cowboy-hat</v-icon>
            </v-btn>
          </NuxtLink>
        </div>
        <div v-show="user" class="">
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
            <v-list dense class="space-y-4 p-4">
              <v-list-item>
                <v-list-item-icon>
                  <ProfilePageDialog />
                </v-list-item-icon>
              </v-list-item>
              <v-list-item>
                <v-btn color="transparent" depressed class="" @click="signOut">
                  <v-icon>mdi-logout-variant</v-icon>
                  <span> Logout </span>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div v-show="!user" class="">
          <LoginDialog />
        </div>

        <div class="">
          <ShoppingCartDrawer />
        </div>
      </div>
    </div>
  </div>
  <!-- </v-app> -->
</template>
<!-- id="app"
    
      justify-center
      color="transparent"
      width="100%"
      fixed
      elevation="0"
      class="pt-8" -->

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
      categories: [
        {
          title: 'Lighters',
        },
        {
          title: 'Acapulco Shirts',
        },
        {
          title: 'Custom Matchboxes',
        },
        {
          title: 'Collections',
        },
      ],
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

  mounted() {
    // this.animateNavbar()
  },
  methods: {
    // animateNavbar() {
    //   this.$gsap.from('.Navbar', {
    //     opacity: 0,

    //     duration: 2,
    //     ease: 'circ.out',
    //   })
    // },
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
/* .sticky {
  background-color: #fff;
} */

/* #navbar {
  animation: 30s ease-in-out infinite alternate-reverse color-change;
} */
</style>
