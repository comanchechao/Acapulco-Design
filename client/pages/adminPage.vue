<template>
  <v-app>
    <Navbar class="grids z-10" />
    <div class="w-auto md:h-full h-auto grid grid-rows-2 grid-cols-2">
      <div
        class="flex align-center grids justify-start bg-purple-600 rounded-br-md"
      >
        <img
          id="leaves"
          class="absolute h-full"
          src="/hhjhhUntitled-2.png"
          alt=""
        />
        <div class="w-1/2">
          <img src="/1uKK.gif" alt="" />
        </div>

        <form class="w-full">
          <div
            class="flex pointer-events-none absolute flex-cols items-stretch justify-end"
          >
            <img
              v-gsap.fromTo="[
                {
                  scale: 0.5,

                  y: -800,
                },
                {
                  duration: 2,
                  scale: 1.5,
                  delay: 2,
                  ease: 'Bounce.easeOut',
                  y: 100,
                },
              ]"
              class="w-1/4 pineapple justify-end"
              src="/pineapple.png"
              alt=""
            />
          </div>
          <div
            class="container transition duration-500 ease-in-out shadow-lg motion-safe:hover:bg-opacity-50 bg-amber-600 rounded bg-opacity-20 font-serif h-full flex w-full p-5 place-items-center flex-col text-2xl"
          >
          <p class="text-Rose-600 text-md" v-gsap.from="{x: 500 , ease: 'bounce'}" v-if="feedback">{{ feedback }}</p>
            <input
              v-model="title"
              class="w-full title p-3 rounded border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              type="text"
              name="title"
              placeholder="title . . ."
              @click.prevent=""
            />
           
            <input
              class="w-full price p-3 border-b-2 border-red-600 rounded border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              type="number"
              name="price"
              placeholder="Price . . ."
            />
            <button @click.prevent="addProduct()" class="learnMoreBtn">
              <v-icon @click.prevent="surf()" class="px-2 py-3 learnMoreText">
                mdi-plus</v-icon
              >
            </button>
          </div>
        </form>
         
      </div>
      <div
        class="flex align-center justify-center grids bg-gradient-to-r from-green-400 to-blue-500 rounded-bl-md"
      >
        <img
          id="leaves"
          class="absolute h-full"
          src="/hhjhhUntitled-2.png"
          alt=""
        />
        <div
          v-gsap.from="{ opacity: 0 }"
          class="container flex flex-col items-center p-2 flex justify-center align-start"
        >
          <div
            v-for="product in products"
            :key="product.id"
            class="flex flex-cols self-center w-1/2 place-content-evenly"
          >
            <h2 class="w-1/2">
              {{ product.title }}
            </h2>
            <v-icon dark @click="deleteProduct(product.id)"> mdi-minus </v-icon>
          </div>
        </div>
      </div>
      <div
        class="flex align-center justify-center grids bg-gradient-to-r from-blue-400 to-green-500 rounded-tr-md"
      >
        <img
          id="leaves"
          class="absolute h-full"
          src="/hhjhhUntitled-2.png"
          alt=""
        />
        <img class="absolute h-full w-full" src="/Ocean.png" alt="" />
      </div>
      <div
        class="flex align-center font-serif font-bold text-3xl justify-center grids bg-gradient-to-r from-blue-400 to-yellow-500 rounded-tl-md"
      >
        <img class="z-10 opacity-0 surfer bottom-2" src="/surfer.png" alt="" />
        <img id="leaves" class="absolute h-full" src="/leaves.png" alt="" />
        <img class="absolute h-full w-full" src="/Ocean.png" alt="" />
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
        scale:1.2
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
</style>
