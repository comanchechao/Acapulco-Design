<template>
  <v-app>
    <div class="main">
      <Navbar />
      <div>
        <ProductCard
          v-for="product in products"
          id="product-card"
          :key="product.id"
          class=""
          :product="product"
        />
      </div>
    </div>
  </v-app>
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
    this.$store.dispatch('getProducts')
  },
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 15px;
}
#product-card {
  margin-right: 10%;
}
</style>
