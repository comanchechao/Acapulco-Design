<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
      hide-overlay
      class="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <button
          class="checkoutBtn py-1 flex justify-center align-center"
          v-bind="attrs"
          @click="dialog = true"
          v-on="on"
        >
          <span class="pl-4 checkoutText font-mainFont text-2xl">
            Checkout
          </span>
          <v-icon x-large class="pink--text text--darken-2"
            >mdi-arrow-right-circle</v-icon
          >
        </button>
      </template>
      <div id="main" class="h-screen w-screen overflow-hidden">
        <div class="hidden self-start absolute lg:flex">
          <v-btn x-large class="ml-4 mt-5" icon dark @click="dialog = false">
            <v-icon x-large>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="h-full w-full flex flex-col justify-center">
          <div
            class="
              lg:h-4/5 lg:w-4/5
              w-full
              h-full
              backGround
              self-center
              justify-self-center
              grid grid-rows-2
            "
          >
            <div>
              <div class="w-full h-20 bg-green-400 flex">
                <h1 class="pa-5">
                  <span class="md:hidden lg:hidden span" @click="dialog = false"
                    ><v-icon light x-large color="pink lighten-5"
                      >mdi-chevron-double-left</v-icon
                    ></span
                  >
                  <v-icon x-large dark>mdi-notebook-check</v-icon>
                  <span
                    class="font-mainFont text-mainBlue font-extrabold text-4xl"
                  >
                    Shipping Details
                  </span>
                </h1>
              </div>
              <div
                class="
                  grid grid-cols-2 grid-rows-4 grid-flow-row
                  w-full
                  h-full
                  p-5
                  space-x-5
                  bg-CoolGray-900
                "
              >
                <div>
                  <v-text-field
                    v-model="order.Name"
                    color="blue darken-4"
                    dark
                    label="Name"
                    class="pl-4"
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>
                <div class="">
                  <v-text-field
                    v-model="order.lastName"
                    color="red lighten-5"
                    dark
                    label="Last name"
                    hint="example of helper text only on focus"
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    v-model="order.City"
                    color="red lighten-5"
                    dark
                    label="City"
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    v-model="order.Province"
                    color="red lighten-5"
                    dark
                    label="Province"
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    v-model="order.PhoneNumber"
                    color="red lighten-5"
                    dark
                    label="Phone Number"
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>
                <div>
                  <v-select
                    v-model="order.Age"
                    color="red lighten-5"
                    dark
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                    rounded
                    dense
                    filled
                  ></v-select>
                </div>
                <div class="col-span-2">
                  <v-text-field
                    v-model="order.Address"
                    color="red lighten-5"
                    dark
                    label="Address"
                    required
                    rounded
                    dense
                    filled
                  ></v-text-field>
                </div>

                <!-- <div>
                  <div class="mt-3 d-flex flex-column justify-end align-center">
                  </div>
                </div> -->
              </div>
              <div class="w-full h-20">
                <h1 class="pa-5">
                  <v-icon x-large dark>mdi-cart-arrow-right</v-icon>
                  <span
                    class="font-mainFont text-mainBlue font-extrabold text-4xl"
                  >
                    Shopping Summary
                  </span>
                </h1>
              </div>

              <div class="w-full flex flex-col p-7">
                <div class="bg-blueGray-900 flex flex-col self-start">
                  <p
                    v-for="item in cartItem"
                    :key="item.id"
                    class="font-mainFont text-3xl text-mainBlue font-bold"
                  >
                    {{ item.item.title }}
                  </p>
                </div>
                <div class="self-end justify-self-end">
                  <button
                    class="checkoutBtn py-1 flex justify-center align-center"
                  >
                    <span class="pl-4 checkoutText font-mainFont text-2xl">
                      Checkout
                    </span>
                    <v-icon x-large class="pink--text text--darken-2"
                      >mdi-arrow-right-circle</v-icon
                    >
                  </button>
                </div>
              </div>
              <!-- <div
                class="
                  items
                  flex
                  container
                  align-center
                  rounded-xl
                  m-px
                  flex-col
                "
              >
                <p v-for="item in cartItem" :key="item.id">
                  {{ item.item.title }}
                </p>
              </div>
              <div
                v-if="cartTotalPrice"
                class="
                  total
                  flex flex-end
                  m-3
                  flex-row
                  align-start
                  justify-content-end
                "
              >
                <img class="w-16 m-px" src="/buy-button.png" alt="" />
                total: {{ cartTotalPrice }}$
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        Name: null,
        lastName: null,
        City: null,
        Province: null,
        Address: null,
        PhoneNumber: null,
        Age: null,
      },
      dialog: false,
    }
  },
  computed: {
    cartItem() {
      return this.$store.state.cart
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice
    },
  },
  methods: {
    checkout() {
      const user = this.$fire.auth.currentUser
      if (user) {
        this.$fire.firestore
          .collection('orders')
          .doc(user.uid)
          .set({
            userId: user.uid,
            order: {
              cart: this.cartItem,
              Name: this.order.Name,
              lastName: this.order.lastName,
              City: this.order.City,
              Province: this.order.Province,
              Address: this.order.Address,
              PhoneNumber: this.order.PhoneNumber,
              Age: this.order.Age,
            },
          })
          .then(() => console.log('lolo'))
          .catch((err) => {
            console.error(err)
          })
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
/* .wrapper {
  background-image: linear-gradient(
    to right top,
    #009b87,
    #0090ac,
    #0080e1,
    #0064ff,
    #2e12eb
  );
  /* width: 300px;
  height: 300px; */
*
/* .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 19px;
  grid-row-gap: 0px;
} */
/* .shippingInfo {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  background-color: #120129;
  grid-area: 1 / 1 / 2 / 2;
  height: 100%;
  width: 80%;
  border-radius: 20px;
  box-shadow: -1px 11px 19px 0px #0000005c;
} */
/* .shoppingSummary {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  grid-area: 1 / 2 / 2 / 3;
  height: 100%;
  width: 80%;
  border-radius: 20px;
  box-shadow: -1px 11px 19px 0px #0000005c;
} */
/* .shippingDetailText {
  font-family: 'Londrina Solid', cursive;
}
.shoppingSummaryText {
  font-family: 'Londrina Solid', cursive;
} */
/* .saveText {
  
  font-size: 2rem;
  font-family: 'Londrina Solid', cursive;
} */

.span {
  cursor: pointer;
  transition: ease-in 0.3s;
}

.span:hover {
  filter: brightness(85%);
}

.backGround {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
}

.saveBtn {
  /* background-color: #0baf78; */
  /* border: 3px solid #0baf78; */
  /* color: #f3f3f3; */
  transition: ease-in-out 0.5s;
}
.saveBtn:hover {
  background-color: #120129;
  color: #ff4a68;
  /* background-color: #d4e300;
  color: #001d2f; */
  /* border: 3px solid #0793c2; */
}
.dialog {
  z-index: 1;
}
/* .checkoutText {
  font-family: 'Lato', sans-serif;
  text-transform: capitalize;
  font-size: 1.3rem;
} */
.checkoutBtn {
  background-color: transparent;
  color: #120129;
  border: solid 2px #120129;
  border-radius: 35px;
  transition: ease-in-out 0.2s;
}
.checkoutBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}
/* .checkoutBtnNew {
  font-size: 30px;
  border: solid 2px #120129;
  color: #ff4a68;
  border-radius: 35px;
  transition: ease-in-out 0.2s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
.checkoutBtnNew:hover {
  color: #120129;
  background-color: #ff4a68;
} */
.items {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  color: #120129;
  font-size: 26px;
}
.total {
  font-family: 'Londrina Solid', cursive;
  text-transform: capitalize;
  font-size: 30px;
}
</style>
