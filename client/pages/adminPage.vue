<template>
  <v-app id="app">
    <div
      id="main"
      class="h-screen w-screen overflow-hidden grid self-center justify-center"
    >
      <LazyHydrate class="z-50" when-idle>
        <Navbar
          v-gsap.to="{
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: 'circ.out',
          }"
          class="mt-4 absolute z-50"
        />
      </LazyHydrate>

      <div
        class="
          absolute
          lg:w-1/3
          inset-x-0
          top-20
          z-20
          shadow-xl
          w-full
          sm:w-full
          md:w-2/5
          mx-auto
          -mt-1
        "
      >
        <Adminastration
          ref="Adminastration"
          v-gsap.from="{
            y: -180,
            opacity: 0,
            duration: 1.5,
            ease: 'expo.out',
          }"
          class="adminastration sm:w-full"
        />
      </div>

      <div class="w-screen h-screen mt-15 grid align-center grid-rows-4">
        <div
          class="
            flex
            justify-center
            align-center
            w-full
            h-full
            container
            row-span-3
          "
        >
          <div
            class="
              admin
              shadow-2xl
              px-4
              py-8
              flex flex-row
              justify-center
              self-center
              w-full
              rounded
              h-full
            "
          >
            <div
              class="
                tab-content
                h-full
                w-full
                place-items-center
                content-center
                justify-center
                flex
                self-center
                tab-space
              "
            >
              <div
                class="
                  flex flex-col
                  place-items-center
                  justify-center
                  h-full
                  w-full
                  text-gray-200
                "
                :class="{
                  hidden: openTab !== 1,
                  block: openTab === 1,
                }"
              >
                <div class="w-full h-full grid grid-rows-1 grid-cols-3">
                  <div
                    class="
                      totalProducts
                      w-full
                      h-full
                      flex flex-col
                      justify-center
                      align-center
                    "
                  >
                    <h2 class="text-center">total</h2>
                    <h2
                      class="
                        ProductLength
                        border-t-2
                        w-1/3
                        text-center
                        rounded
                        border-b-2
                      "
                    >
                      {{ Products.length }}
                    </h2>
                    <h2 class="text-center">Products</h2>
                  </div>

                  <div
                    class="
                      sellsRecord
                      flex flex-col
                      justify-center
                      align-center
                      border-r-2 border-l-2
                    "
                  >
                    <h2 class="text-center">sells</h2>
                    <h2
                      class="
                        SellsLength
                        border-t-2
                        w-1/3
                        text-center
                        rounded
                        border-b-2
                      "
                    >
                      25
                    </h2>
                    <h2 class="text-center">Records</h2>
                  </div>

                  <div
                    class="
                      totalShipment
                      flex flex-col
                      justify-center
                      align-center
                    "
                  >
                    <h2 class="text-center">Shipment</h2>
                    <h2
                      class="
                        ShipmentLength
                        border-t-2
                        w-1/3
                        text-center
                        rounded
                        border-b-2
                      "
                    >
                      25
                    </h2>
                    <h2 class="text-center">Delivered</h2>
                  </div>
                </div>
              </div>
              <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
                <div class="grid grid-cols-2 grid-rows-2">
                  <div
                    class="
                      catagories
                      container
                      col-span-2
                      flex flex-wrap flex-row
                      justify-center
                      content-center
                      h-full
                      w-full
                      m-3
                      p-5
                    "
                  >
                    <v-btn
                      elevation="7"
                      x-large
                      color="amber"
                      class="border-2 border-CoolGray-600 p-2 m-3"
                      @click="catagorySelect('Shirts')"
                    >
                      <v-icon dark>mdi-tshirt-crew</v-icon></v-btn
                    >
                    <v-btn
                      elevation="7"
                      x-large
                      color="amber"
                      class="border-2 border-CoolGray-600 p-2 m-3"
                      @click="catagorySelect('Lighters')"
                      ><v-icon dark>mdi-fire</v-icon></v-btn
                    >
                    <v-btn
                      elevation="7"
                      x-large
                      color="amber"
                      class="border-2 border-CoolGray-600 p-2 m-3"
                      @click="catagorySelect('Custom Matchboxes')"
                      ><v-icon dark>mdi-package</v-icon></v-btn
                    >
                    <v-btn
                      elevation="7"
                      x-large
                      color="amber"
                      class="border-2 border-CoolGray-600 p-2 m-3"
                      @click="catagorySelect('Collections')"
                      ><v-icon dark>mdi-toolbox</v-icon></v-btn
                    >
                  </div>

                  <div
                    class="
                      addSomthing
                      flex flex-col
                      w-full
                      h-full
                      self-center
                      align-center
                    "
                  >
                    <h2 class="text-3xl">SOMETHING TO ADD?</h2>
                    <button
                      class="
                        focus:outline-none
                        my-8
                        addButton
                        self-center
                        text-center
                        h-1/3
                        w-2/3
                      "
                      @click="showModal"
                    >
                      +
                    </button>
                  </div>
                  <div
                    class="
                      w-full
                      products
                      p-5
                      rounded-lg
                      shadow-2xl
                      overflow-y-scroll
                      h-2/3
                      text-gray-200
                    "
                  >
                    <div v-for="product in Products" :key="product.id" class="">
                      <div
                        v-show="product.catagory === catagory"
                        id="products"
                        class="
                          flex flex-row
                          divide-y
                          border-black
                          text-black
                          place-content-around
                        "
                      >
                        <div
                          class="
                            bottomBorder
                            flex flex-row
                            place-content-between
                            border-b-2
                            w-full
                          "
                        >
                          <h3 class="">{{ product.title }}</h3>
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
                <div class="orders flex flex-row">
                  <div class="text-black">
                    <p>{{ orders.Name }}</p>
                  </div>
                  <div v-for="item in orderProduct" :key="item.id" class="">
                    <p class="">{{ item.item.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            flex
            align-center
            mb-10
            justify-center
            w-full
            h-full
            row-span-1
          "
        >
          <ul
            class="
              tabBar
              flex
              list-none
              w-full
              h-full
              align-center
              content-center
              justify-items-center
              pt-3
              pb-4
              place-content-evenly
              m-6
              flex-row
            "
          >
            <li class="lis shadow-2xl w-full text-center" @click="tab1()">
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  mx-1
                  sm:h-full
                  px-5
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
                :class="{
                  'text-pink-600 bg-blue-300': openTab !== 1,
                  'text-white bg-Lime-500': openTab === 1,
                }"
                @click="toggleTabs(1)"
              >
                <img src="/Market.png" alt="" />
              </a>
            </li>
            <li class="lis shadow-2xl w-full text-center" @click="tab2()">
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  px-5
                  mx-1
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
                :class="{
                  'text-pink-600 bg-blue-300': openTab !== 2,
                  'text-white bg-Indigo-500': openTab === 2,
                }"
                @click="toggleTabs(2)"
              >
                <img class="place-self-center" src="/Add.png" alt="" />
              </a>
            </li>
            <li class="lis shadow-2xl w-full text-center" @click="tab3()">
              <a
                class="
                  text-xs
                  font-bold
                  uppercase
                  mx-1
                  px-5
                  py-3
                  shadow-lg
                  rounded
                  block
                  leading-normal
                "
                :class="{
                  'text-pink-600 bg-blue-300': openTab !== 3,
                  'text-white bg-Lime-600': openTab === 3,
                }"
                @click="toggleTabs(3)"
              >
                <img class="place-self-center" src="/Orders.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="absolute w-full z-0 h-screen flex place-items-center">
        <div class="tropicalLeaves absolute w-1/2 z-0 top-0">
          <img src="/hat.png" alt="" />
        </div>
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
        </div> -->
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
      <!-- <div
          class="
            m-8
            w-screen
            admin
            grid grid-rows-4
            self-center
            z-30
            h-screen
            self-center
            text-center
            shadow-lg
            bg-blueGray-200
            rounded-lg
            align-center
          "
        >
          

           <div
            class="
              row-span-3
              flex flex-col
              align-center
              justify-center
              self-center
              bees
              break-words
              bg-CoolGray-300
              w-2/3
              h-2/3
              shadow-lg
              rounded
            "
          > -->
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
      catagory: 'Lighters',

      Products: [],
      openTab: 1,
      orders: [],
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
            catagory: doc.data().catagory,
          })
        }
      })
    })
  },
  transition: {
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, { opacity: 0 })
    },
    enter(el, done) {
      this.$gsap.to(el, 1, { opacity: 1 })
      done()
    },
    leave(el, done) {
      this.$gsap.to(el, 1, { opacity: 0.5 })
      done()
    },
  },

  mounted() {
    this.$fire.firestore
      .collection('orders')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          this.orders = doc.data().order
          this.orderProduct = doc.data().order.cart
        })
      })

    // console.log(this.order)
    // const orders = this.$fire.firestore
    //   .collection('orders')
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       this.order = doc.data().order
    //       this.orderProduct = doc.data().order.cart
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    // console.log(orders)

    this.welcome()
    console.log(this.catagory)

    this.numberAnimation()
  },
  methods: {
    catagorySelect(selectedTab) {
      this.catagory = selectedTab
    },

    numberAnimation() {
      const gsap = this.$gsap

      gsap.from('.ProductLength', {
        textContent: 54,
        duration: 4,
        ease: 'Power1.easeIn',
        snap: { textContent: 3 },
        stagger: 1,
        // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      })
    },

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

    tab2() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.catagories', 0.5, {
        x: -100,
        opacity: 0,
      })
      tl.from('.addSomthing', 0.5, {
        x: -100,
        opacity: 0,
        scale: 0.2,
      })
      tl.from('.products', 0.5, {
        x: 100,
        opacity: 0,
      })
      console.log(' you clicked me ')
    },

    tab3() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.orders', 0.5, {
        x: 100,
        opacity: 0,
      })
    },

    tab1() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.totalProducts', 0.5, {
        x: -100,
        opacity: 0,
      })
      tl.from('.totalShipment', 0.5, {
        x: 100,
        opacity: 0,
      })
      tl.from('.sellsRecord', 0.5, {
        y: 100,
        opacity: 0,
      })
    },

    welcome() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.admin', {
        duration: 1,
        y: -300,
        opacity: 0,
      })
      tl.from('.tabBar', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.4,
      })
      tl.from('.tab-content', 0.5, {
        opacity: 0,
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

#app {
  overflow: hidden;
  height: 100%;
  width: 100%;
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
  font-size: 70px;
  background-color: #023047;
  color: #fb8500;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  padding: 5px 5px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.addButton:hover {
  background-color: #ffb703;
  color: #120129;
}
#surfer {
  z-index: 2;
}
.middle {
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.admin {
  font-family: 'Yanone Kaffeesatz';
  background-color: #14c2dd;
}

#products {
  font-family: 'Yanone Kaffeesatz';
  font-size: 22px;
}

.bottomBorder {
  border-color: #dee2ff;
  color: #023047;
}
.products {
  background-color: #ffb703;
}
.addSomthing {
  color: #ffb703;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.totalProducts {
  font-size: 35px;
  border-color: #54086b;
  color: #050833;
}

.totalShipment {
  font-size: 35px;
  color: #050833;
  border-color: #54086b;
}

.sellsRecord {
  font-size: 35px;
  border-color: #54086b;
  color: #050833;
}

.SellsLength {
  border-color: #c7f954;
}

.ProductLength {
  border-color: #c7f954;
}

.ShipmentLength {
  border-color: #c7f954;
}
</style>
