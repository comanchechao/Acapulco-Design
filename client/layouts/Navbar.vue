<i18n lang="yaml">
en:
  aboutus: 'About Us'
  home: 'Home'
  shop: 'Shop'
  admin: 'Admin'
  welcome: 'Welcome Back!'
  logout: 'Logout'
fa:
  aboutus: 'درباره ی ما'
  home: 'خانه'
  shop: 'خرید'
  admin: 'ادمین'
  welcome: 'خوش برگشتی'
  logout: 'لاگ آوت'
</i18n>
<template>
  <!-- <v-app> -->
  <div
    class="
      mb-8
      fixed
      w-screen
      h-20
      lg:h-24
      bg-transparent
      Navbar
      opacity-100
      z-50
      flex
      align-center
      justify-center
      lg:px-9
    "
  >
    <div class="hidden lg:flex">
      <v-btn class="Btn" dark depressed rounded x-large color="transparent">
        <v-icon class="" large>mdi-volume-high</v-icon>
      </v-btn>
    </div>
    <div class="hidden lg:flex">
      <nuxt-link to="/aboutUs">
        <v-btn class="Btn" dark depressed rounded x-large color="transparent">
          <v-icon class="" large>mdi-meditation</v-icon>
          <span class="aboutUs text-xl lg:text-2xl"> {{ $t('aboutus') }} </span>
        </v-btn>
      </nuxt-link>
    </div>

    <div class="flex align-center justify-end px-2">
      <div class="hidden lg:flex">
        <nuxt-link to="/">
          <v-btn class="Btn" dark depressed rounded x-large color="transparent">
            <span class="aboutUs text-xl lg:text-2xl"> {{ $t('home') }} </span>
            <v-icon class="" large>mdi-home</v-icon>
          </v-btn>
        </nuxt-link>
      </div>
      <div class="hidden lg:flex">
        <nuxt-link to="/productList">
          <v-btn depressed x-large color="transparent" class="">
            <span class="white--text text-xl lg:text-2xl">
              {{ $t('shop') }}
            </span>
            <v-icon medium class="white--text">mdi-shopping</v-icon>
          </v-btn>
        </nuxt-link>
      </div>
      <div class="hidden lg:flex">
        <NuxtLink id="admin-link" class="flex" to="/adminPage">
          <v-btn depressed dark x-large color="transparent" class="">
            <span class="white--text text-xl lg:text-2xl">
              {{ $t('admin') }}
            </span>
            <v-icon class="cowboy">mdi-cryengine</v-icon>
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
                  class="profilePageBtn align-center"
                  v-bind="attrs"
                  depressed
                  x-large
                  fab
                  dark
                  @click="dialog = true"
                  v-on="{ ...tooltip, ...menu }"
                >
                  <v-icon class="white--text">mdi-account-key</v-icon>
                </v-btn>
              </template>
              <span
                class="font-mainFont font-extrabold text-xl text-LightBlue-50"
                >{{ $t('welcome') }}</span
              >
            </v-tooltip>
          </template>
          <v-list dense class="space-y-4 p-4">
            <v-list-item>
              <v-list-item-icon>
                <LazyHydrate :on-interaction="['click', 'focus']">
                  <ProfilePageDialog />
                </LazyHydrate>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item>
              <v-btn color="transparent" depressed class="" @click="signOut">
                <v-icon>mdi-logout-variant</v-icon>
                <span class="text-xl ml-1 lg:text-2xl">
                  {{ $t('logout') }}
                </span>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="lg:hidden">
        <LazyHydrate when-visible>
          <MenuBarDrawer />
        </LazyHydrate>
      </div>
      <div class="">
        <LazyHydrate when-visible>
          <LoginDialog v-show="!user"> </LoginDialog>
        </LazyHydrate>
      </div>

      <v-spacer></v-spacer>
      <nuxt-link v-show="route === false" :to="switchLocalePath('en')">
        <v-btn class="Btn" dark depressed rounded x-large color="transparent">
          <v-icon class="" large>mdi-web</v-icon>
          <span class="aboutUs text-lg lg:text-x"> EN </span>
        </v-btn></nuxt-link
      >
      <nuxt-link v-show="route" :to="switchLocalePath('fa')">
        <v-btn class="Btn" dark depressed rounded x-large color="transparent">
          <v-icon class="" large>mdi-web</v-icon>
          <span class="aboutUs text-lg lg:text-xl"> FA </span>
        </v-btn></nuxt-link
      >
      <ShoppingCartDrawer />
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
import LazyHydrate from 'vue-lazy-hydration'
import ShoppingCartDrawer from '../components/ShoppingCartDrawer.vue'
export default {
  components: {
    LazyHydrate,
    MenuBarDrawer: () => import('../components/MenuBarDrawer.vue'),
    ProfilePageDialog: () => import('../components/ProfilePageDialog.vue'),
    LoginDialog: () => import('../components/LoginDialog.vue'),
    ShoppingCartDrawer,
  },
  data() {
    return {
      audio: null,

      drawer: false,
      langButton: false,
    }
  },

  computed: {
    // isSoundEnabled() {
    //   return this.$store.state.isSoundEnabled
    // },
    cartTotalAmount() {
      return this.$store.getters.cartItemCount()
    },
    user() {
      return this.$store.state.user
    },
    route() {
      return this.$route.path
    },
  },

  watch: {
    route() {
      return this.route.includes('/fa')
    },
  },

  mounted() {
    this.$supabase.auth.onAuthStateChange(() => {
      this.$store.dispatch('setUser', this.$supabase.auth.user())
    })
    this.animateNavbar()
  },
  methods: {
    // playSound() {
    //   if (this.isSoundEnabled) {
    //     this.audio = new Audio(require('@/assets/sounds/hymn.mp3'))
    //     this.audio.play()
    //   }
    // },
    async signOut() {
      try {
        const { error } = await this.$supabase.auth.signOut()
        if (error) throw error
        alert('signed out')
      } catch (error) {
        alert(error.message)
      }
    },
    animateNavbar() {
      this.$gsap.to('.Navbar', {
        backgroundColor: '#ff4a68',
        opacity: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.NavbarTrigger',
          scrub: 2.5,
          start: 'bottom top',
          end: 'bottom bottom',
          toggleActions: 'play none none none none',
        },
      })
    },
    // signOut() {
    //   this.$store.dispatch('signOut').then((data) => {
    //     this.$router.go() // Refreshes page
    //     this.$router.push('/')
    //   })
    // },
  },
  // created() {
  //   axios.get('http://127.0.0.1:8000/api/category/').then((response) => {
  //     this.categories = response.data
  //   })
  // },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

span {
  font-family: 'Roboto Slab', 'Estedad';
  text-align: center;
  display: flex;
  justify-self: center;
  align-self: center;
}
#admin-link {
  color: #fff;
}
.Navbar {
  z-index: 200;
}
/* .sticky {
  background-color: #fff;
} */

/* #navbar {
  animation: 30s ease-in-out infinite alternate-reverse color-change;
} */
.Navbar {
  z-index: 250 !important;
}
</style>
