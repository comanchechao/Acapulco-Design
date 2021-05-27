<template>
  <v-app>
    <Navbar class="" />

    <div
      class="w-full h-screen grid grid-flow-row grid-rows-3 via-yellow-500 h-full bg-gradient-to-t to-Lime-500 from-yellow-300"
    >
      <div
        v-gsap.from="{ duration: 1, y: -300, opacity: 0 }"
        class="w-full h-24"
      >
        <img class="" src="/palmLeavesup.png" alt="" />
      </div>
      <div
        v-gsap.from="{ duration: 1, opacity: 0 }"
        class="grid grid-cols-3 grid-rows-1 align-center justify-items-center justify-center"
      >
        <div
          v-gsap.from="{ x: -300, duration: 1, opacity: 0 }"
          class="flex middle flex-col place-items-center"
        >
          <img src="/Orders.png" alt="" />
          <h2>Check</h2>
        </div>
        <div
          v-gsap.from="{ scale: 0.2, duration: 1, opacity: 0 }"
          class="flex middle flex-col place-items-center"
        >
          <img src="/Add.png" alt="" />
          <h2>Add</h2>
        </div>
        <div
          v-gsap.from="{ x: 300, duration: 1, opacity: 0 }"
          class="flex middle flex-col place-items-center"
        >
          <img src="/Market.png" alt="" />
          <h2>Rates</h2>
        </div>
      </div>
      <div
        v-gsap.from="{ y: 300, duration: 1, opacity: 0 }"
        class="flex lg:w-full place-content-around"
      >
        <img class="" src="/palmtreeR.png" alt="" />

        <img src="/palmtree.png" alt="" />
      </div>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/layouts/Navbar.vue'

export default {
  name: 'AdminPage',
  components: {
    Navbar,
  },
  data() {
    return {
      title: null,
      price: null,
      feedback: null,
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  mounted() {
    this.staggering()
    this.$store.dispatch('getProducts')
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  methods: {
    addProduct() {
      if (this.title) {
        this.$fire.firestore
          .collection('Products')
          .add({
            title: this.title,
            price: this.price,
          })
          .then(() => {
            this.title = null
            this.price = null
            this.feedback = null
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.feedback = 'Fields cannot be empty'
      }
    },
    deleteProduct(id) {
      this.$fire.firestore
        .collection('Products')
        .doc(id)
        .delete()
        .then(() => {
          this.products = this.products.filter((product) => {
            return product.id !== id
          })
        })
    },
    surf() {
      const gsap = this.$gsap
      if (this.title) {
        gsap.fromTo(
          '.surfer',
          { x: 200, y: 100, opacity: 1 },
          { duration: 2.5, ease: 'yoyo', x: -1100, y: 50 }
        )
      }
    },
    staggering() {
      const gsap = this.$gsap
      gsap.from('.grids', {
        y: 600,
        opacity: 0,
        stagger: 0.3,
      })
    },
    pineapple() {
      const gsap = this.$gsap

      gsap.to('.pineapple', {
        y: -20,
        scale: 1.2,
      })
    },
  },
}
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
#leaves {
  z-index: -1;
}
.addButton {
  background-color: #ff4a68;
  color: #120129;
}

.learnMoreBtn {
  font-size: 15px;
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  padding: 5px 12px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.learnMoreBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}
#surfer {
  z-index: 2;
}
.middle {
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
</style>
