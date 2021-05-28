<template>
  <v-app>
    <div id="main">
      <Navbar class="" />
      <div class="w-full h-full grid place-items-center">
        <div class="mt-64 bg-blueGray-50 h-full w-10/12 background">
          <div class="grid w-full h-full grid-rows-6 grid-flow-col gap-4">
            <div class="sticky col-span-3 navbar flex align-center">
              <NuxtLink to="/">
                <span class="p-9"
                  ><v-icon light x-large>mdi-chevron-double-left</v-icon></span
                >
              </NuxtLink>
              <NuxtLink to="/">
                <span class="px-5 text-3xl text-gray-700"> Home </span>
              </NuxtLink>
              <NuxtLink to="/productList">
                <span>
                  <h1 class="text-3xl text-gray-700">Shop</h1>
                </span>
              </NuxtLink>
            </div>
            <div
              class="row-span-5 sidebar flex flex-col justify-space-between align-center"
            >
              <div class="flex flex-col">
                <h1 class="text-5xl mt-10 text-center text-gray-700">Shop</h1>
                <div class="mt-12">
                  <h3 class="p-3 text-gray-700">Filter by:</h3>
                  <NuxtLink to="/productList">
                    <span>
                      <h1 class="text-3xl text-gray-700 p-3">Lighters</h1>
                    </span>
                  </NuxtLink>
                  <NuxtLink to="/productList">
                    <span>
                      <h1 class="text-3xl text-gray-700 p-3">
                        Acapulco Shirts
                      </h1>
                    </span>
                  </NuxtLink>
                  <NuxtLink to="/productList">
                    <span>
                      <h1 class="text-3xl text-gray-700 p-3">
                        Custom Matchboxes
                      </h1>
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="row-span-5 col-span-4">
              <div class="grid grid-cols-2 p-4 place-items-center">
                <ProductCard
                  v-for="product in products"
                  id="product-card"
                  :key="product.id"
                  class="p-4"
                  :product="product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
  <!-- <div
      id="main"
      class="w-full h-full grid grid-cols-6 gap-x-11 place-items-center"
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
</template>

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
      tl.from('.background', {
        opacity: 0,
        y: 90,

        duration: 0.6,
      })
      tl.from('.navbar', {
        opacity: 0,
        y: -70,
      })
      tl.from('.sidebar', {
        opacity: 0,
        x: -70,
      })
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

#main {
  overflow: hidden;

  font-family: 'Acme';
}
</style>
