<template>
  <v-app>
    <div id="main" class="">
      <LazyHydrate when-idle>
        <Navbar
          v-gsap.to="{
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: 'circ.out',
          }"
          class="mt-4 navbar sticky"
        />
      </LazyHydrate>
      <div class="w-full flex flex-col align-center justify-center">
        <div class="w-3/4 lg:w-4/6 z-10 mt-14">
          <h1
            class="
              text-8xl
              lg:text-9xl
              text-center text-mainBlue
              capitalize
              firstText
              opacity-0
            "
          >
            We here care about
            <span class="text-mainRed font-extrabold span"> personality </span>
          </h1>
        </div>
        <div class="w-11/12 grid grid-cols-8 mt-24 background opacity-0">
          <div
            class="
              menuNavbar
              sticky
              flex
              align-center
              py-6
              divide-x-2 divide-black
              col-span-8
            "
          >
            <NuxtLink to="/">
              <span class="p-9"
                ><v-icon light x-large color="pink lighten-5"
                  >mdi-chevron-double-left</v-icon
                ></span
              >
            </NuxtLink>
            <NuxtLink to="/">
              <span class="menu px-5 text-4xl text-gray-100 font-semibold">
                Home
              </span>
            </NuxtLink>
            <NuxtLink to="/productList">
              <span>
                <h1 class="px-5 text-4xl text-gray-100 font-semibold">Shop</h1>
              </span>
            </NuxtLink>
          </div>
          <div class="col-span-6 rounded-lg self-center justify-self-center">
            <!-- <div class="grid w-full divide-y-4"> -->

            <!-- <div class="row-span-5 col-span-2 place-items-center"> -->
            <div
              class="
                grid grid-cols-2
                gap-6
                p-4
                mt-6
                place-items-center
                self-center
                justify-self-center
              "
            >
              <ProductCard
                v-for="product in products"
                id="product-card"
                :key="product.id"
                class="p-4 productCard"
                :product="product"
              />
            </div>
            <!-- </div> -->
            <!-- </div> -->
          </div>
          <div
            class="
              col-span-2
              self-start
              justify-self-end
              sidebar
              opacity-0
              space-y-4
              sticky
              h-auto
              flex flex-col
              justify-between
              align-center
            "
          >
            <!-- <div class="flex flex-col p-10 self-center"> -->
            <!-- <h1 class="text-7xl mt-10 text-center text-gray-700 font-bold">
                Shop
              </h1> -->
            <div class="mt-12 px-4 text-center">
              <h3 class="p-3 text-mainBlue text-6xl border-red-600 font-black">
                Discover!
              </h3>
              <NuxtLink to="/productList">
                <span>
                  <h1
                    class="
                      text-3xl text-mainBlue
                      border-mainBlue border-b-2
                      p-4
                      sidebarText
                    "
                  >
                    Lighters🔥
                  </h1>
                </span>
              </NuxtLink>
              <NuxtLink to="/productList">
                <span>
                  <h1
                    class="
                      text-3xl text-mainBlue
                      p-4
                      border-mainBlue border-b-2
                      sidebarText
                    "
                  >
                    Acapulco Shirts🌴
                  </h1>
                </span>
              </NuxtLink>
              <NuxtLink to="/productList">
                <span>
                  <h1
                    class="
                      text-3xl text-mainBlue
                      p-4
                      border-mainBlue border-b-2
                      sidebarText
                    "
                  >
                    Custom Matchboxes💥
                  </h1>
                </span>
              </NuxtLink>
              <NuxtLink to="/productList">
                <span>
                  <h1 class="text-3xl text-mainBlue p-4 sidebarText">
                    Collections🗿
                  </h1>
                </span>
              </NuxtLink>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import ProductCard from '../components/ProductCard.vue'
export default {
  components: {
    LazyHydrate,
    ProductCard,
    Navbar: () => import('../layouts/Navbar.vue'),
  },
  computed: {
    products() {
      return this.$store.state.products
    },
  },

  mounted() {
    this.animateBackground()
    this.$store.dispatch('getProducts')
  },

  methods: {
    animateBackground() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.to('.firstText', {
        opacity: 1,
        y: 30,
        ease: 'expo.Out',
        duration: 1,
      })
      tl.from('.span', {
        opacity: 0,
        y: -50,
        ease: 'expo.Out',
        duration: 0.8,
      })
      tl.to('.background', {
        opacity: 1,
        scale: 1,
        ease: 'expo.Out',
        duration: 1.1,
      })
      tl.from('.menuNavbar', {
        opacity: 0,
        y: -10,

        duration: 0.7,

        ease: 'expo.Out',
      })
      tl.to(
        '.sidebar',
        {
          opacity: 1,
          ease: 'expo.Out',
        },
        '-=0.5'
      )
      tl.from('.sidebarText', {
        opacity: 0,
        y: -20,
        ease: 'power3.out',
        stagger: 0.1,
      })
      // tl.to('.productCard', {
      //   opacity: 1,
      //   y: -20,
      //   ease: 'power3.out',
      //   stagger: 0.1,
      // })
    },
  },
}
</script>

<style scoped>
#main {
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.background {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
}

.sidebar {
  background: #ffeeeeef;
  box-shadow: 0 18px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
}

.menuNavbar {
  background-image: url('/trippy.jpg');
  background-size: cover;
  background-position: 0px 0px;
  background-repeat: repeat-y;
  animation: animatedBackground 10s ease infinite alternate;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
}

.sidebarText {
  transition: ease-in-out 0.5s;
}

.sidebarText:hover {
  color: #ff4a68;
  border-bottom: #ff4a68 solid 2px;
}

@keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 100% ;
  }
}
</style>
