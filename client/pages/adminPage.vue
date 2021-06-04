<template>
  <v-app>
    <div
      id="main"
      class="w-full h-screen flex overflow-hidden place-items-center via-yellow-500 bg-gradient-to-t to-Lime-500 from-yellow-300"
    >
      <Navbar class="absolute top-0 z-10" />
      <div class="tropicalLeaves absolute lg:w-1/2 top-0">
        <img src="/TropicalLeaves.png" alt="" />
      </div>
      <div
        class="absolute inset-x-0 shadow-xl w-1/3 md:w-2/5 mx-auto -mt-1 z-20"
      >
        <Adminastration
          ref="Adminastration"
          v-gsap.from="{ y: -600, duration: 1, ease: 'bounce' }"
        />
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
        class="w-1/3 admin container z-10 h-1/2 text-center shadow-lg bg-blueGray-200 rounded-lg flex flex-row lg:flex-col justify-between align-center"
      >
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              :class="{
                'text-pink-600 bg-white': openTab !== 1,
                'text-white bg-pink-600': openTab === 1,
              }"
              @click="toggleTabs(1)"
            >
              <img src="/Market.png" alt="" />
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              :class="{
                'text-pink-600 bg-white': openTab !== 2,
                'text-white bg-green-600': openTab === 2,
              }"
              @click="toggleTabs(2)"
            >
              <img src="/Add.png" alt="" />
            </a>
          </li>
          <li class="-mb-px mr-2 last:mr-0 mt-1 flex-auto place-content-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              :class="{
                'text-pink-600 bg-white': openTab !== 3,
                'text-white bg-Amber-600': openTab === 3,
              }"
              @click="toggleTabs(3)"
            >
              <img class="" src="/Orders.png" alt="" />
            </a>
          </li>
        </ul>
        <div
          class="relative flex flex-col min-w-0 break-words bg-CoolGray-300 w-2/3 mb-6 shadow-lg rounded"
        >
          <div
            :class="{
              'bg-pink-600': openTab === 1,
              'bg-green-600': openTab === 2,
              'bg-Amber-600': openTab === 3,
            }"
            class="px-4 py-5 flex-auto rounded border-2 border-black"
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
              <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
                <div
                  v-for="product in products"
                  :key="product.id"
                  v-gsap.from="{ scale: 0.2 }"
                  class="flex flex-col"
                >
                  <div class="flex flex-col place-items-center">
                    <button
                      class="focus:outline-none addButton w-1/2"
                      @click="showModal"
                    >
                      Add
                    </button>
                    <h1 id="products">products</h1>
                  </div>
                  <div v-for="product in Products" :key="product.id" class="">
                    <div
                      id="products"
                      class="flex flex-row place-content-around"
                    >
                      <h3>{{ product.title }}</h3>
                      <button class=" ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="text-red-500 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          @click="deleteProduct(product.id)"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
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
import Adminastration from '../components/Adminastration.vue'

export default {
  name: 'AdminPage',
  components: {
    Adminastration,
    Navbar,
  },
  data() {
    return {
      Products: [],
      openTab: 1,
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
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
  created() {
    const ref = this.$fire.firestore.collection('Products')

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const doc = change.doc
          this.Products.push({
            id: doc.id,
            title: doc.data().title,
            price: doc.data().price,
          })
          console.log(this.Products)
        }
      })
    })
  },
  mounted() {
    this.welcome()
    this.$store.dispatch('getProducts')
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },
    showModal() {
      this.$refs.Adminastration.toggleModal()
    },

    deleteProduct(id) {
      this.$fire.firestore
        .collection('Products')
        .doc(id)
        .delete()
        .then(() => {
          this.Products = this.Products.filter((product) => {
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

.addButton {
  font-size: 20px;
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  padding: 5px 8px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.addButton:hover {
  background-color: #120129;
  color: #ff4a68;
}
#surfer {
  z-index: 2;
}
.middle {
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
#products {
  font-family: 'Yanone Kaffeesatz';
  font-size: 22px;
}
</style>
