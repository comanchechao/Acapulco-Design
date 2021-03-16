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
          <span class="px-6 py-8 checkoutText"> Checkout </span>
        </button>
      </template>
      <div class="wrapper">
        <v-btn x-large class="ml-6 mt-6 pa-3" icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="grid">
          <div class="shippingInfo">
            <h1 class="pa-5">
              <v-icon x-large light>mdi-notebook-check</v-icon>
              <span class="shippingDetailText"> Shipping Details </span>
            </h1>
            <v-container class="pa-8">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    color="grey darken-4"
                    light
                    label="Name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    color="grey darken-4"
                    light
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
                    color="grey darken-4"
                    light
                    label="City"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    color="grey darken-4"
                    light
                    label="Region"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="grey darken-4"
                    light
                    label="Address"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    color="grey darken-4"
                    light
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <div class="mt-3 d-flex flex-column justify-end align-center">
                    <button class="saveBtn">
                      <span class="px-9 py-8 savBtnText"> Checkout </span>
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
          <div class="cartSummary">
            <h1 class="pa-5">
              <v-icon x-large dark>mdi-cart-arrow-right</v-icon>
              <span class="shoppingSummaryText"> Shopping Summary </span>
            </h1>
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
      dialog: false,
    }
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
  background-color: #8dffaf;
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
  background-color: #008528;
  grid-area: 1 / 2 / 2 / 3;
  height: 100%;
  width: 80%;
  border-radius: 20px;
  box-shadow: -1px 11px 19px 0px #0000005c;
}

.shippingDetailText {
  font-size: 1.2em;
  font-family: 'Londrina Solid', cursive;
  color: #2c2c2c;
}

.shoppingSummaryText {
  color: aliceblue;
  font-size: 1.2em;
  font-family: 'Londrina Solid', cursive;
}

/* .saveText {
  font-size: 2rem;
  font-family: 'Londrina Solid', cursive;
} */

.saveBtn {
  font-size: 30px;
  background-color: #0baf78;
  /* border: 3px solid #0baf78; */

  color: #f3f3f3;
  border-radius: 35px;
  transition: ease-in-out 0.2s;
  padding: 9px 20px;
  font-family: 'Acme', sans-serif;
}

.saveBtn:hover {
  background-color: #d4e300;
  color: #001d2f;
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
  background-color: #14ffb1;
  color: rgb(243, 243, 243);
  padding: 9px 20px;
  border-radius: 35px;
  border: 2px solid #14ffb1;

  transition: ease-in-out 0.5s;
}
.checkoutBtn:hover {
  background-color: rgb(243, 243, 243);
  color: #14ffb1;
}
</style>
