<template>
  <div class="main">
    <ProductCard
      class=""
      v-scroll-reveal.reset="{ delay: 230 }"
      id="product-card"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  components: { ProductCard },

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
