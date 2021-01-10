<template>
  <div class="main">
    <ProductCard
      v-for="product in products"
      id="product-card"
      :key="product.id"
      v-scroll-reveal.reset="{ delay: 230 }"
      class=""
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
