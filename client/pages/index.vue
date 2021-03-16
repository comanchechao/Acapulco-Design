<template>
  <v-app id="main" class="pt-6">
    <Navbar id="navbar" class="" />
    <v-spacer></v-spacer>
    <v-main class="">
      <v-container>
        <component :is="component" class="animate__animated"></component>
        <!-- <ProductList class="product-list" /> -->
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
// import ProductList from '@/components/ProductList.vue'
// import Footer from '@/layouts/Footer.vue'
// import MiniCart from '../components/MiniCart.vue'

export default {
  name: 'Home',
  components: {
    MainPage,
    ProductCard,
    // ProductList,
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

body {
  height: 100vh;
  scroll-behavior: smooth;
}

html {
  height: 500vh;
}

canvas {
  position: fixed;
  left: 50%;
  top: 50%;
  max-height: 100vh;
  max-width: 100vw;
  transform: translate(-50%, -50%);
}

#main {
  /* background-color: #d8bbff; */
  /* display: block;
  background-position: top; */
  /* background-repeat: repeat; */
  /* background-repeat: no-repeat; */
  /* background-size: 100%; */
  z-index: 1;
  /* animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s; */
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

/* @keyframes fadeIn {
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
} */
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
