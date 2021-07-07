<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
      scrollable
      max-width="600px"
      hide-overlay
      class="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <button
          class="checkoutBtn"
          v-bind="attrs"
          @click="dialog = true"
          v-on="on"
        >
          <span class="pl-6 py-7 checkoutText"> Checkout </span>
          <v-icon x-large class="pink--text text--darken-2"
            >mdi-arrow-right-circle</v-icon
          >
        </button>
      </template>
      <div class="wrapper">
        <v-btn x-large class="ml-6 mt-6 pa-3" icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="grid">
          <div class="shippingInfo">
            <h1 class="pa-5">
              <v-icon x-large dark>mdi-notebook-check</v-icon>
              <span class="shippingDetailText text-Cyan-50 text-4xl">
                Shipping Details
              </span>
            </h1>
            <v-container light class="pa-8">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="order.Name"
                    color=""
                    dark
                    label="Name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="order.lastName"
                    color="red lighten-5"
                    dark
                    label="Last name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    light
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col> -->
                <v-col cols="6">
                  <v-text-field
                    v-model="order.City"
                    color="red lighten-5"
                    dark
                    label="City"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="order.Region"
                    color="red lighten-5"
                    dark
                    label="Region"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="order.Address"
                    color="red lighten-5"
                    dark
                    label="Address"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="order.Age"
                    color="red lighten-5"
                    dark
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <div class="mt-3 d-flex flex-column justify-end align-center">
                    <button @click="checkout()" class="checkoutBtnNew">
                      <span class="pl-6 py-7 checkoutText"> Checkout </span>
                      <v-icon x-large class="pink--text text--darken-2"
                        >mdi-arrow-right-circle</v-icon
                      >
                    </button>
                    <!-- <v-btn x-large rounded color="#000A36">
                      <span class="saveText my-3 py-9 px-5"> Save </span>
                      <v-icon class="pl-1" large>mdi-check-circle</v-icon>
                    </v-btn> -->
                  </div>
                </v-col>
                <!-- <v-col cols="12" sm="6">
                  <v-btn x-large rounded color="success">Save</v-btn>
                </v-col> -->
              </v-row>
            </v-container>
          </div>
          <div
            class="
              grid-flow-col grid-rows-3 grid-cols-1
              cartSummary
              bg-mainRed
              rounded-2xl
              mr-11
            "
          >
            <div>
              <h1 class="pa-5">
                <v-icon x-large dark>mdi-cart-arrow-right</v-icon>
                <span class="shoppingSummaryText text-4xl">
                  Shopping Summary
                </span>
              </h1>
            </div>
            <div
              class="items flex container align-center rounded-xl m-px flex-col"
            >
              <p v-for="item in cartItem" :key="item.id">
                {{ item.item.title }}
              </p>
            </div>
            <div
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
              total: {{ cartTotalPrice }}
            </div>
            <!-- <div>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/vitaly-gorbachev"
                title="Vitaly Gorbachev"
                >Vitaly Gorbachev</a
              >
              from
              <a href="https://www.flaticon.com/" title="Flaticon"
                >www.flaticon.com</a
              >
            </div> -->
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
        Region: null,
        Address: null,
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
          .collection('users')
          .doc(user.uid)
          .update({
            order: {
              cart: this.cartItem,
              Name: this.order.Name,
              lastName: this.order.lastName,
              City: this.order.City,
              Region: this.order.Region,
              Address: this.order.Address,
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
.wrapper {
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
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 19px;
  grid-row-gap: 0px;
}
.shippingInfo {
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
}
.shoppingSummary {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  grid-area: 1 / 2 / 2 / 3;
  height: 100%;
  width: 80%;
  border-radius: 20px;
  box-shadow: -1px 11px 19px 0px #0000005c;
}
.shippingDetailText {
  font-family: 'Londrina Solid', cursive;
}
.shoppingSummaryText {
  font-family: 'Londrina Solid', cursive;
}
/* .saveText {
  font-size: 2rem;
  font-family: 'Londrina Solid', cursive;
} */
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
.checkoutText {
  font-family: 'Lato', sans-serif;
  text-transform: capitalize;
  font-size: 1.3rem;
}
.checkoutBtn {
  font-size: 30px;
  background-color: transparent;
  color: #120129;
  border: solid 2px #120129;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
.checkoutBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}
.checkoutBtnNew {
  font-size: 30px;
  border: solid 2px #120129;
  color: #ff4a68;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
.checkoutBtnNew:hover {
  color: #120129;
  background-color: #ff4a68;
}
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