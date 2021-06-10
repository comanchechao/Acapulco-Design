<template>
  <v-app>
    <div id="main" class="">
      <Navbar
        v-gsap.to="{
          opacity: 1,
          duration: 1.5,
          delay: 1,
          ease: 'circ.out',
        }"
        class="mt-4 navbar"
      />
      <div class="w-full flex flex-col align-center justify-center">
        <div class="w-3/4 z-10 mt-14">
          <h1
            class="text-8xl text-center text-black capitalize firstText opacity-0"
          >
            We here care about <span class="span"> personality </span>
          </h1>
        </div>
        <div class="w-11/12 grid grid-cols-8 gap-4 mt-24 background">
          <div class="col-span-6 rounded-lg self-start justify-self-start">
            <!-- <div class="grid w-full divide-y-4"> -->
            <div
              class="col-span-3 menuNavbar sticky flex align-center pt-9 divide-x-2 divide-black mb-6"
            >
              <NuxtLink to="/">
                <span class="p-9"
                  ><v-icon light x-large>mdi-chevron-double-left</v-icon></span
                >
              </NuxtLink>
              <NuxtLink to="/">
                <span class="menu px-5 text-2xl text-gray-700 font-semibold">
                  Home
                </span>
              </NuxtLink>
              <NuxtLink to="/productList">
                <span>
                  <h1 class="px-5 text-2xl text-gray-700 font-semibold">
                    Shop
                  </h1>
                </span>
              </NuxtLink>
            </div>

            <div class="row-span-5 col-span-2 place-items-center">
              <div class="grid grid-cols-2 p-4 place-items-center">
                <ProductCard
                  v-for="product in products"
                  id="product-card"
                  :key="product.id"
                  class="p-4 productCard"
                  :product="product"
                />
              </div>
            </div>
            <!-- </div> -->
          </div>
          <div
            class="col-span-2 p-5 justify-self-center sidebar opacity-0 space-y-4 sticky top-0 rounded-lg h-auto flex flex-col justify-between align-center"
          >
            <!-- <div class="flex flex-col p-10 self-center"> -->
            <!-- <h1 class="text-7xl mt-10 text-center text-gray-700 font-bold">
                Shop
              </h1> -->
            <div class="mt-12 px-4">
              <h3 class="p-3 text-gray-700 text-2xl sidebarText">Filter by:</h3>
              <NuxtLink to="/productList">
                <span>
                  <h1 class="text-2xl text-gray-700 p-3 sidebarText">
                    Lighters🔥
                  </h1>
                </span>
              </NuxtLink>
              <NuxtLink to="/productList">
                <span>
                  <h1 class="text-2xl text-gray-700 p-3 sidebarText">
                    Acapulco Shirts🌴
                  </h1>
                </span>
              </NuxtLink>
              <NuxtLink to="/productList">
                <span>
                  <h1 class="text-2xl text-gray-700 p-3 sidebarText">
                    Custom Matchboxes💥
                  </h1>
                </span>
              </NuxtLink>
              <NuxtLink to="/productList">
                <span>
                  <h1 class="text-2xl text-gray-700 p-3 sidebarText">
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
<!-- <div
      id="main"
      class="w-full h-screen grid grid-cols-6 gap-x-11 place-items-center"
    >
      <div
        class="w-4/5 h-3/4 col-span-5 flex-col flex bg-gray-50 shadow-2xl rounded-lg"
      >
        <div
          class="border-red-400 border-b-2 self-end text-6xl m-10 text-gray-800"
        >
          <h1>Lighters</h1>
        </div>
        <div class="grid grid-cols-3 gap-4 justify-items-center">
          <ProductCard-gtf
            v-for="product in products"
            id="product-card"
            :key="product.id"
            class=""
            :product="product"
          />
        </div>
      </div>
    </div> -->

<script>
import Navbar from '../layouts/Navbar'
import ProductCard from '../components/ProductCard'
export default {
  components: {
    ProductCard,
    Navbar,
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
      tl.from(
        '.menuNavbar',
        {
          opacity: 0,
          y: -40,

          duration: 0.7,

          ease: 'expo.Out',
        },
        '-=1'
      )
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
      tl.from('.productCard', {
        opacity: 0,
        y: -20,
        ease: 'power3.out',
        stagger: 0.1,
      })
    },
  },
}
</script>

<style scoped>
#main {
  font-family: 'Merriweather', serif;
}

.span {
  color: #ff4a68;
}

.background {
  border-radius: 20px;
  background: linear-gradient(145deg, #fff1f1, #decbcb);
  box-shadow: 7px 7px 71px #f2dddd, -7px -7px 71px #dfd8d8;
}
</style>
2
