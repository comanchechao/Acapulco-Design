<template>
  <v-app>
    <Navbar class="absolute z-10" />
    <div
      id="main"
      class="w-full h-screen flex place-items-center via-yellow-500 bg-gradient-to-t to-Lime-500 from-yellow-300"
    >
      <div class="tropicalLeaves absolute lg:w-1/2 top-0">
        <img src="/TropicalLeaves.png" alt="" />
      </div>
      <!-- <div class="bees flex middle flex-col place-items-center">
          <img src="/Orders.png" alt="" />
          <h2 class="text-blue-700 text-3xl">Check</h2>
        </div>
        <div class="bees flex middle flex-col place-items-center">
          <img src="/Add.png" alt="" />
        </div>
        <div class="bees flex middle flex-col place-items-center">
          <img src="/Market.png" alt="" />
          <h2 class="text-blue-700 text-3xl">Rates</h2>
        </div> -->
      <div
        class="w-1/3 admin flex flex-row container z-10 h-1/2 text-center shadow-lg bg-blueGray-200 rounded-lg flex flex-col justify-between align-center"
      >
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="toggleTabs(1)"
              :class="{
                'text-pink-600 bg-white': openTab !== 1,
                'text-white bg-pink-600': openTab === 1,
              }"
            >
              <img src="/Market.png" alt="" />
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="toggleTabs(2)"
              :class="{
                'text-pink-600 bg-white': openTab !== 2,
                'text-white bg-green-600': openTab === 2,
              }"
            >
              <img src="/Add.png" alt="" />
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 mt-1 flex-auto place-content-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="toggleTabs(3)"
              :class="{
                'text-pink-600 bg-white': openTab !== 3,
                'text-white bg-Amber-600': openTab === 3,
              }"
            >
              <img class="" src="/Orders.png" alt="" />
            </a>
          </li>
        </ul>
        <div
          class="relative flex flex-col min-w-0 break-words bg-CoolGray-300 w-full mb-6 shadow-lg rounded"
        >
          <div
            :class="{
              'bg-pink-600': openTab === 1,
              'bg-green-600': openTab === 2,
              'bg-Amber-600': openTab === 3,
            }"
            class="px-4 py-5 flex-auto rounded"
          >
            <div class="tab-content tab-space">
              <div
                :class="{
                  hidden: openTab !== 1,
                  block: openTab === 1,
                }"
              >
                <p v-gsap.from="{ scale: 0.3 }" class="text-black">
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                  <br />
                  <br />
                  Dramatically visualize customer directed convergence without
                  revolutionary ROI.
                </p>
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <div
                  class="flex flex-col"
                  v-gsap.from="{ scale: 0.2 }"
                  v-for="product in products"
                  :key="product.id"
                >
                  {{ product.title }}
                </div>
              </div>
              <div :class="{ hidden: openTab !== 3, block: openTab === 3 }">
                <p v-gsap.from="{ scale: 0.3 }" class="text-black">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                  <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute flex place-content-around align-items-center h-2/3 w-full bottom-0 palms"
    >
      <img class="" src="/palmtrees.png" alt="" />
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
      openTab: 1,
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  mounted() {
    this.welcome()
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
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },
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
    welcome() {
      const gsap = this.$gsap
      const tl = gsap.timeline()
      tl.from('.tropicalLeaves', {
        duration: 1,
        y: -300,
        opacity: 0,
      })
      tl.from('.palms', {
        y: 300,
        duration: 1,
        opacity: 0,
      })
      tl.from('.admin', {
        x: -300,
        duration: 1,
        opacity: 0,
      })
      tl.from('.bees', {
        scale: 0.1,
      })
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
