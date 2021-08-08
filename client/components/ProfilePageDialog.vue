<template>
  <div class="main">
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      scrollable
      fullscreen
      class="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          light
          depressed
          color="transparent"
          v-on="on"
          @click="dialog = true"
        >
          <v-icon>mdi-account-check</v-icon>

          <span>My Profile</span>
        </v-btn>
      </template>

      <div id="main" class="h-screen w-screen backround overflow-hidden">
        <!-- <div class="bg-blue-300"></div> -->
        <div
          class="
            w-full
            h-full
            flex flex-col
            justify-center
            lg:justify-around
            align-center
          "
        >
          <div class="w-full h-1/4">
            <v-btn
              x-large
              class="ml-11 mt-6"
              icon
              light
              @click="dialog = false"
            >
              <v-icon x-large>mdi-close</v-icon>
            </v-btn>
            <!-- <div
            class="
              w-56
              h-56
              rounded-full
              shadow-lg
              bg-Emerald-400
              flex-shrink-0
            "
          >
            <img
              class="bg-cover"
              src="/davisuko-rhUU1pemhQ0-unsplash-removebg-preview.png"
              alt=""
            />
          </div> -->
            <!-- <div class="flex align-center flex-col justify-center">
              <h1
                class="
                  text-center text-3xl
                  lg:text-6xl
                  font-mainFont
                  text-mainBlue
                "
              >
                {{ displayName }}
                {{ email }}
              </h1>
              <button class="text-lg mb-5">
                <span
                  class="
                    text-mainBlue
                    font-thin
                    py-2
                    px-12
                    rounded-full
                    editBtn
                    border-mainBlue border-2
                    font-mainFont
                  "
                >
                  Edit
                </span>
              </button>
            </div> -->
          </div>
          <div class="h-full w-full lg:w-5/6 lg:rounded-lg">
            <h1 class="font-mainFont font-bold text-2xl absolute p-4">
              My Orders
            </h1>
            <div class="w-full h-1/4">
              <div
                class="
                  flex
                  space-x-2
                  h-full
                  w-full
                  ordersDiv
                  divide-x-4
                  p-4
                  divide-gray-500
                "
              >
                <div class="h-full w-full"></div>
                <div class="h-full w-full"></div>
                <div class="h-full w-full"></div>
              </div>
            </div>

            <div class="w-full h-3/4">
              <div class="w-full h-3/6">
                <div class="w-full h-1/3 bg-green-400">
                  <h2
                    class="
                      font-mainFont
                      text-mainBlue
                      font-bold
                      text-2xl
                      p-4
                      flex
                    "
                  >
                    <v-icon x-large dark>mdi-home</v-icon>

                    <span class="ml-3"> My Address </span>
                  </h2>
                </div>
                <div class="w-full h-2/3 bg-CoolGray-900"></div>
              </div>
              <div class="w-full h-3/6 ordersDiv">
                <div class="w-full h-1/3">
                  <h2
                    class="
                      font-mainFont
                      text-mainBlue
                      font-bold
                      text-2xl
                      p-4
                      flex
                    "
                  >
                    <v-icon x-large light>mdi-account</v-icon>

                    <span class="ml-3"> Account Information </span>
                  </h2>
                </div>
                <div class="w-full h-2/3"></div>
              </div>
            </div>
          </div>
          <!-- <div
            class="
              bg-mainBlue
              w-11/12
              lg:h-2/6
              h-5/6
              rounded-3xl
              font-mainFont
              mainDiv
            "
          >
            <div class="w-full h-full flex align-start p-7">
              <v-icon x-large dark>mdi-notebook-check</v-icon>
              <h1 class="text-4xl font-mainFont text-mainRed">
                <span class="ml-3"> Your Shipping Details </span>
              </h1>
              <div
                class="
                  flex flex-col
                  text-2xl
                  self-center
                  justify-center
                  items-center
                  text-gray-200
                "
              >
                <p>{{ order.Name }}</p>
                <p>{{ order.lastName }}</p>
                <p>{{ order.City }}</p>
                <p>{{ order.phoneNumber }}</p>
                <p>{{ order.Address }}</p>
                <div
                  v-for="item in orderProduct"
                  :key="item.id"
                  class="flex flex-row justify-contents-around"
                >
                  <p>{{ item.item.title }}</p>
                  <p>{{ item.quantity }}</p>
                </div>
              </div>
            </div>
          </div> -->
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
      error: null,
      emailSending: false,
      displayName: null,
      email: null,
      order: [],
      orderProduct: [],
    }
  },

  created() {
    const user = this.$fire.auth.currentUser
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      this.displayName = user.displayName
      this.email = user.email
    }

    const orders = this.$fire.firestore
      .collection('orders')
      .where('userId', '==', user.uid)
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
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut').then((data) => {
        this.$router.push('/')
      })
    },
    // sendVerifyEmail() {
    //   this.emailSending = true
    //   const user = firebase.auth().currentUser
    //   const actionCodeSettings = {
    //     url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
    //   }
    //   user
    //     .sendEmailVerification(actionCodeSettings)
    //     .then(() => {
    //       this.emailSending = false
    //     })
    //     .catch((error) => {
    //       this.emailSending = false
    //       this.error = error.message
    //     })
    // },
  },
}
</script>

<style scoped>
.profilePageBtn {
  font-size: 1.7em;
  color: rgb(73, 73, 73);
  font-family: 'Acme', sans-serif;
  font-weight: 800;
  text-transform: capitalize;
}
span {
  text-align: center;
  font-size: 1.3em;
  display: flex;
  justify-self: center;
  align-self: center;
}
.editBtn {
  transition: ease-in-out 0.5s;
}

.editBtn:hover {
  color: #ff4a68;
  background-color: #120129;
}

.ordersDiv {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

/* .backround {
  background: rgba(233, 233, 233, 0.959);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
} */
</style>
