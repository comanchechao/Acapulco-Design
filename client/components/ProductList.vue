<template>
  <div class="main">
    <ProductCard
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
  /* background-color: aliceblue; */
  /* border-radius: 20px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
#product-card {
  margin-left: 10%;
}
</style>
