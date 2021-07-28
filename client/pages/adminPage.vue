<template>
  <v-app>
    <div id="main" class="h-screen w-screen">
      <LazyHydrate class="z-50" when-idle>
        <Navbar
          v-gsap.to="{
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: 'circ.out',
          }"
          class="mt-4 z-50"
        />
      </LazyHydrate>
      <div class="w-full h-screen flex place-items-center">
        <div class="tropicalLeaves absolute w-1/2 z-0 top-0">
          <img src="/hat.png" alt="" />
        </div>

        <div
          class="absolute inset-x-0 z-20 shadow-xl w-1/3 md:w-2/5 mx-auto -mt-1"
        >
          <Adminastration
            ref="Adminastration"
            v-gsap.from="{
              y: -180,
              opacity: 0,
              duration: 1.5,
              ease: 'expo.out',
            }"
            class="adminastration mb-10"
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
          class="
            w-1/3
            admin
            flex
            sm:flex-row
            flex-col
            container
            z-10
            h-2/3
            text-center
            shadow-lg
            bg-blueGray-200
            rounded-lg
            justify-between
            align-center
          "
        >
          <ul
            class="
              tabBar
              flex
              mb-0
              list-none
              w-1/2
              align-center
              flex-wrap
              pt-3
              pb-4
              flex-row
            "
          >
            <li class="lis -mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  px-5
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
                :class="{
                  'text-pink-600 bg-white': openTab !== 1,
                  'text-white bg-Indigo-500': openTab === 1,
                }"
                @click="toggleTabs(1)"
              >
                <img src="/Market.png" alt="" />
              </a>
            </li>
            <li class="lis -mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  px-5
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
                :class="{
                  'text-pink-600 bg-white': openTab !== 2,
                  'text-white bg-green-600': openTab === 2,
                }"
                @click="toggleTabs(2)"
              >
                <img class="place-self-center" src="/Add.png" alt="" />
              </a>
            </li>
            <li
              class="lis -mb-px mr-2 last:mr-0 mt-1 flex-auto place-content-center"
            >
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  px-5
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
                :class="{
                  'text-pink-600 bg-white': openTab !== 3,
                  'text-white bg-Amber-600': openTab === 3,
                }"
                @click="toggleTabs(3)"
              >
                <img class="place-self-center" src="/Orders.png" alt="" />
              </a>
            </li>
          </ul>

          <div
            class="
              relative
              flex flex-col
              min-w-0
              bees
              break-words
              bg-CoolGray-300
              w-2/3
              mb-6
              shadow-lg
              rounded
            "
          >
            <div
              :class="{
                'bg-Indigo-500': openTab === 1,
                'bg-green-600': openTab === 2,
                'bg-Amber-600': openTab === 3,
              }"
              class="px-4 py-5 flex-auto rounded h-full border-2 border-black"
            >
              <div class="tab-content tab-space">
                <div
                  class="
                    flex
                    max-w-1/3
                    flex-col
                    place-items-stretch
                    flex-shrink
                    overflow-y-auto
                    h-full
                  "
                  :class="{
                    hidden: openTab !== 1,
                    block: openTab === 1,
                  }"
                >
                  <h3 class="text-black text-xl">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br />
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                  </h3>
                </div>
                <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
                  <div
                    class="
                      flex
                      max-w-1/3
                      flex-col
                      place-items-stretch
                      flex-shrink
                      max-h-56
                    "
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
                    <div class="h-full overflow-y-scroll">
                      <div
                        v-for="product in Products"
                        :key="product.id"
                        class=""
                      >
                        <div
                          id="products"
                          class="flex flex-row place-content-around"
                        >
                          <h3>{{ product.title }}</h3>
                          <button class="">
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
                </div>
                <div
                  class="
                    flex
                    max-w-1/3
                    flex-col
                    place-items-center
                    flex-shrink
                    overflow-y-auto
                    max-h-72
                    text-xl
                  "
                  :class="{ hidden: openTab !== 3, block: openTab === 3 }"
                >
                  <div class="flex flex row place-content-around">
                    <p>{{ order.Name }}</p>
                  </div>
                  <div
                    v-for="item in orderProduct"
                    :key="item.id"
                    class="flex flex row place-content-around"
                  >
                    <p class="text-black">{{ item.item.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </v-app>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import Adminastration from '../components/Adminastration.vue'

export default {
  name: 'AdminPage',
  components: {
    LazyHydrate,
    Adminastration,
    Navbar: () => import('../layouts/Navbar.vue'),
  },
  data() {
    return {
      Products: [],
      openTab: 1,
      order: [],
      orderProduct: [],
    }
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
            image: doc.data().image,
          })
        }
      })
    })
  },
  transition: {
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, { opacity: 0, x: 1000 })
    },
    enter(el, done) {
      this.$gsap.to(el, 1, { opacity: 1, x: 0 })
      done()
    },
    leave(el, done) {
      this.$gsap.to(el, 1, { opacity: 0.5 })
      done()
    },
  },

  mounted() {
    const orders = this.$fire.firestore
      .collection('orders')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.order = doc.data().order
          this.orderProduct = doc.data().order.cart
        })
      })
      .catch((err) => {
        console.log(err)
      })

    console.log(orders)

    this.welcome()
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

      tl.from('.palms', {
        x: 300,
        duration: 1,
        opacity: 0,
      })
      tl.from('.admin', {
        duration: 1,
        y: -300,
        opacity: 0,
      })
      tl.from('.tabBar', {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
      })
      tl.from('.bees', {
        scale: 0.1,
        duration: 1,
        opacity: 0,
        y: 200,
      })
      tl.from('.tropicalLeaves', {
        duration: 1,
        x: -300,
        opacity: 0,
      })
    },
    pineapple() {
      const gsap = this.$gsap

      gsap.to('.pineapple', {
        y: -100,
        opacity: 0,
        scale: 1.2,
      })
    },
  },
}
</script>

<style scoped>
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

.fade-leave-active {
  transition: opacity 0.5s;
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

a {
 animation: 30s ease-in-out infinite alternate-reverse color-change;
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

@-webkit-keyframes color-change {
  0% {
    background-color: #ade7e7;
  }

  45% {
    background-color: #a6a6db;
  }

  100% {
    background-color: #d8bbff;
  }
}

@keyframes color-change {
  0% {
    background-color: #83f1f1;
  }

  50% {
    background-color: #55dd8e;
  }

  100% {
    background-color: #595bee;
  }
}

.admin {
  background-image: url('/sunSet.jpg');
  font-family: 'Yanone Kaffeesatz';
  background-size: cover;
}

#products {
  font-family: 'Yanone Kaffeesatz';
  font-size: 22px;
}
</style>
