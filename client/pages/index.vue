<template>
  <v-app id="main">
    <Navbar
      id="navbar"
      class="animate__animated animate__fadeIn animate__delay-0.7s"
    />
    <v-spacer></v-spacer>
    <v-main class="">
      <v-container>
        <component :is="component" class="animate__animated"></component>
        <ProductList class="product-list" />
        <!-- <div v-show="ShowProducts == false" id="switch">
          <v-btn
            id="switch-button"
            class="indigo--text animate__animated animate__jello animate__infinite"
            color="#fadcac"
            @click=";(component = 'ProductList'), (ShowProducts = true)"
            >View Products</v-btn
          >
        </div> -->

        <!-- <Footer /> -->
        <!-- </VueScrollSnap> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/layouts/Navbar.vue'
// import VueScrollSnap from 'vue-scroll-snap'
import MainPage from '@/layouts/MainPage.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductList from '@/components/ProductList.vue'
// import Footer from '@/layouts/Footer.vue'
// import MiniCart from '../components/MiniCart.vue'

export default {
  name: 'Home',
  components: {
    MainPage,
    ProductCard,
    ProductList,
    Navbar,
    // Footer,
    // MiniCart,
  },

  data() {
    return {
      component: 'MainPage',
      product: this.product,
    }
  },

  computed: {
    CartDisplay() {
      return this.$store.state.CartDisplay
    },
  },
  mounted() {
    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('#navbar')
      navbar.classList.toggle('sticky', window.scrollY > 0)
    })
  },
}
</script>

<style scoped>
/* .home-background {
    filter: blur(1px);
  -webkit-filter: blur(1px);
  } */

#main {
  background-image: url('/tabitha-turner--_bSa4Sn1Bs-unsplash.jpg');
  height: 100%;
  display: block;
  background-position: center;
  background-repeat: repeat;
  overflow: hidden;
  background-size: cover;
  z-index: 1;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#switch {
  position: absolute;
  left: 43%;
  bottom: 20%;
  z-index: 1;
}
#dynamic {
  position: relative;
  top: 50%;
}
#bottomsheet {
  position: relative;
  bottom: -25%;
}
#switch-button {
  color: white;
}

.product-list {
  margin: 5% 0%;
}
#navbar {
  z-index: 2;
}

#navbar .sticky {
  background-color: #fff;
  color: #fff;
}
</style>
