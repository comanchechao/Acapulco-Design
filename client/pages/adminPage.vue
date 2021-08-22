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
                class="w-full h-full justify-center"
                :class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <div class="orders w-full h-full">
                  <div class="w-full h-full">
                    <div
                      class="w-full h-full"
                      :class="{
                        hidden: ordersTab !== 'List',
                        block: ordersTab === 'List',
                      }"
                    >
                      <div class="w-full h-full grid grid-rows-7">
                        <div class="">
                          <div
                            class="
                              List
                              h-1/2
                              w-full
                              flex flex-row
                              justify-between
                              align-center
                            "
                          >
                            <button
                              class="p-2 rounded px-3"
                              :class="{
                                'bg-Lime-500': ordersTab === 'List',
                                'transform scale-125': ordersTab ==='List',
                                'bg-Amber-400': ordersTab !== 'List',
                              }"
                              @click="orderTab('List')"
                            >
                              List
                            </button>
                            <button
                              class="p-2 rounded px-3"
                              :class="{
                                'bg-Lime-500': ordersTab === 'Detail',
                                'bg-Amber-400': ordersTab !== 'Detail',
                              }"
                              @click="detailAnime() & orderTab('Detail')"
                            >
                              Detail
                            </button>
                          </div>
                        </div>
                        <div
                          class="
                            orderBar
                            w-full
                            flex flex-row
                            place-content-around
                            align-center
                            row-span-1
                          "
                        >
                          <h1
                            class="
                              headers
                              text-2xl
                              px-3
                              lg:text-3xl
                              lg:px-12
                              border-2 border-blueGray-400
                              rounded-full
                              shadow-xl
                            "
                          >
                            Name
                          </h1>
                          <h1
                            class="
                            headers
                              text-2xl
                              px-3
                              lg:text-3xl
                              lg:px-12
                              border-2 border-blueGray-400
                              rounded-full
                              shadow-xl
                            "
                          >
                            Date
                          </h1>
                          <h1
                            class="
                            headers
                              text-2xl
                              px-3
                              lg:text-3xl
                              lg:px-12
                              border-2 border-blueGray-400
                              rounded-full
                              shadow-xl
                            "
                          >
                            Status
                          </h1>
                        </div>
                        <div
                          class="
                            ordersList
                            rounded
                            border-r-2 border-b-2 border-l-2 border-Cyan-600
                            h-full
                            row-span-5
                            overflow-y-scroll overflow-x-hidden
                          "
                        >
                          <div
                            class="
                              listCard
                              w-full
                              shadow-xl
                              flex flex-row
                              rounded-full
                              my-3
                              p-4
                              place-content-around
                            "
                          >
                            <h1 class="text-3xl">name</h1>
                            <h1 class="text-3xl">date</h1>
                            <h1 class="text-3xl">status</h1>
                          </div>

                          <div
                            class="
                              listCard
                              w-full
                              shadow-xl
                              flex flex-row
                              rounded-full
                              my-3
                              p-4
                              place-content-around
                            "
                          >
                            <h1 class="text-3xl">name</h1>
                            <h1 class="text-3xl">date</h1>
                            <h1 class="text-3xl">status</h1>
                          </div>
                          <div
                            class="
                              listCard
                              w-full
                              shadow-xl
                              flex flex-row
                              rounded-full
                              my-3
                              p-4
                              place-content-around
                            "
                          >
                            <h1 class="text-3xl">name</h1>
                            <h1 class="text-3xl">date</h1>
                            <h1 class="text-3xl">status</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="w-full h-full"
                      :class="{
                        hidden: ordersTab !== 'Detail',
                        block: ordersTab === 'Detail',
                      }"
                    >
                      <div class="grid grid-rows-7 w-full h-full">
                        <div
                          class="
                            List
                            h-1/2
                            row-span-1
                            w-full
                            flex flex-row
                            justify-between
                            align-center
                          "
                        >
                          <button
                            class="p-2 rounded px-3"
                            :class="{
                              'bg-Lime-500': ordersTab === 'List',
                              'bg-Amber-400': ordersTab !== 'List',
                            }"
                            @click="listAnime() & orderTab('List')"
                          >
                            List
                          </button>
                          <button
                            class="p-2 rounded px-3"
                            :class="{
                              'bg-Lime-500': ordersTab === 'Detail',
                              'transform scale-125': ordersTab ==='Detail',
                              'bg-Amber-400': ordersTab !== 'Detail',
                            }"
                            @click=" orderTab('Detail')"
                          >
                            Detail
                          </button>
                        </div>
                        <div
                          class="
                            w-full
                            row-span-6
                            h-full
                            p-2
                            border-r-2 border-b-2 border-l-2 border-Cyan-600
                          "
                        >
                          <div
                            class="
                              orderDetail
                              container
                              grid grid-cols-2
                              overflow-y-scroll
                            "
                          >
                            <div
                              class="
                                detailCards
                                p-2
                                my-1
                                mx-1
                                rounded
                              "
                            >
                              <h1 class="self-center">Status: processing</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">lastName: blah</h1>
                              <h1 class="text-xl border-b-2">
                                Address: someshit place far away from here
                              </h1>
                              <h1 class="text-xl border-b-2">
                                Phone Number: blah
                              </h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                            </div>
                            <div
                              class="
                                detailCards
                                p-2
                                my-1
                                mx-1
                                rounded
                              "
                            >
                              <h1 class="self-center">Status: processing</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">lastName: blah</h1>
                              <h1 class="text-xl border-b-2">
                                Address: someshit place far away from here
                              </h1>
                              <h1 class="text-xl border-b-2">
                                Phone Number: blah
                              </h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                            </div>
                            <div
                              class="
                                detailCards
                                p-2
                                my-1
                                mx-1
                                rounded
                              "
                            >
                              <h1 class="self-center">Status: processing</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">lastName: blah</h1>
                              <h1 class="text-xl border-b-2">
                                Address: someshit place far away from here
                              </h1>
                              <h1 class="text-xl border-b-2">
                                Phone Number: blah
                              </h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                            </div>
                            <div
                              class="
                                detailCards
                                p-2
                                my-1
                                mx-1
                                rounded
                              "
                            >
                              <h1 class="self-center">Status: processing</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">lastName: blah</h1>
                              <h1 class="text-xl border-b-2">
                                Address: someshit place far away from here
                              </h1>
                              <h1 class="text-xl border-b-2">
                                Phone Number: blah
                              </h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                              <h1 class="text-xl border-b-2">Name: blah</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
              place-content-around
              m-6
              flex-row
            "
          >
            <li class="lis shadow-2xl w-full text-center" @click="tab1()">
              <a
                class="
                  place-items-center
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
                <img class="" src="/Market.png" alt="" />
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
                  'text-white bg-Amber-500': openTab === 2,
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
      ordersTab: 'List',
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

    orderTab(tab) {
      this.ordersTab = tab
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

      tl.from('.List', 0.3, {
        scale: 0.3,
        opacity: 0
      })
      tl.from('.orderBar', 0.3, {
        opacity: 0,
      })
      tl.from('.listCard', 0.5, {
        x: 100,
        opacity: 0,
        ease: 'expo.out',
        stagger: {
          each: 0.3,
        },
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

    detailAnime() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.from('.detailCards', 0.5, {
        y: 200,
         ease:  "sine.out",
        opacity: 0 ,
        stagger: {
          each: 0.3
        }
      })
    },

    listAnime(){

      const gsap = this.$gsap
      const tl = gsap.timeline()

       tl.from('.orderBar', 0.3, {
        opacity: 0,
      })
      tl.from('.listCard', 0.5, {
        x: 100,
        opacity: 0,
        ease: 'expo.out',
        stagger: {
          each: 0.3,
        },
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
      tl.from('.lis', {
        opacity: 0,
        scale: 0.5,
        ease: "bounce.out",
        duration: 0.5,
        stagger: {
          each: 0.2,
          from: "center"
        },
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

.List {
  font-size: 30px;
}

.ordersList {
  max-height: 30rem;
}

.orderDetail {
  max-height: 25rem;
}

.detailCards{
  background-color: #BF1363;
}

.headers{
  background-color: #F5FDB0;
}

.listCard{
  background-color: #28FFBF;
  color: #451881;
}
</style>
