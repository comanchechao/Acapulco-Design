<template>
  <v-app>
    <Navbar class="" />
    <div id="main" class="h-full grid grid-cols-6 gap-x-11 place-items-center">
      <div
        class="h-80 bg-gray-50 rounded-lg ml-4 flex flex-col flex-wrap justify-around shadow-2xl"
      >
        <NuxtLink to="/">
          <v-btn
            class="Btn"
            light
            depressed
            rounded
            x-large
            color="transparent"
          >
            <v-icon class="pr-2" large>mdi-keyboard-backspace</v-icon>
            <span class="aboutUs text-base"> Take Me Back! </span>
          </v-btn>
        </NuxtLink>

        <NuxtLink to="/">
          <v-btn
            class="Btn"
            light
            depressed
            rounded
            x-large
            color="transparent"
          >
            <v-icon class="pr-2" large>mdi-keyboard-backspace</v-icon>
            <span class="aboutUs text-base"> Lighters </span>
          </v-btn>
        </NuxtLink>
        <NuxtLink to="/">
          <v-btn
            class="Btn"
            light
            depressed
            rounded
            x-large
            color="transparent"
          >
            <v-icon class="pr-2" large>mdi-keyboard-backspace</v-icon>
            <span class="aboutUs text-base"> Acapulco Shirts </span>
          </v-btn>
        </NuxtLink>
        <NuxtLink to="/">
          <v-btn
            class="Btn"
            light
            depressed
            rounded
            x-large
            color="transparent"
          >
            <v-icon class="pr-2" large>mdi-keyboard-backspace</v-icon>
            <span class="aboutUs text-sm"> Custom Matchboxes </span>
          </v-btn>
        </NuxtLink>
        <NuxtLink to="/">
          <v-btn
            class="Btn"
            light
            depressed
            rounded
            x-large
            color="transparent"
          >
            <v-icon class="pr-2" large>mdi-keyboard-backspace</v-icon>
            <span class="aboutUs text-base"> Collections </span>
          </v-btn>
        </NuxtLink>
      </div>
      <div
        class="w-full h-3/4 col-span-5 flex-col flex bg-gray-50 shadow-2xl rounded-lg"
      >
        <div
          class="border-red-400 border-b-2 self-end text-6xl m-10 text-gray-800"
        >
          <h1>Lighters</h1>
        </div>
        <div class="grid grid-cols-3 gap-4 justify-items-center">
          <ProductCard
            v-for="product in products"
            id="product-card"
            :key="product.id"
            class=""
            :product="product"
          />
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

#main {
  font-family: 'Acme';
  animation: 30s ease-in-out infinite alternate-reverse color-change;
}
@-webkit-keyframes color-change {
  0% {
    background-color: #ade7e7;
  }
  /* 15% {
    background-color: #7ec6c8;
  }
  30% {
    background-color: #a1dfa1;
  } */
  45% {
    background-color: #a6a6db;
  }
  /* 60% {
    background-color: #d8a5d8;
  }
  75% {
    background-color: #c6b1ec;
  }
  90% {
    background-color: #ade7e7;
  } */
  100% {
    background-color: #d8bbff;
  }
}

@keyframes color-change {
  0% {
    background-color: #83f1f1;
  }
  /* 15% {
    background-color: #7ec6c8;
  }
  30% {
    background-color: #a1dfa1;
  } */
  50% {
    background-color: #55dd8e;
  }
  /* 60% {
    background-color: #d8a5d8;
  }
  75% {
    background-color: #c6b1ec;
  }
  90% {
    background-color: #ade7e7;
  } */
  100% {
    background-color: #595bee;
  }
}
#product-card {
  margin-right: 10%;
}
</style>
