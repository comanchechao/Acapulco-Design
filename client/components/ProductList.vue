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
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;
}
#product-card {
  text-align: center;
  left: 6%;
}

@media only screen and (min-width: 800px) {
  .main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
}

@media screen and (min-width: 1200px) {
  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 0px;
  }
  #product-card{
    margin-right: 4%;
    left: -15%;
  }
}
</style>
