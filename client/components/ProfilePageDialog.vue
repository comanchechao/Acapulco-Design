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

      <div class="h-full w-full backround bg-Cyan-400">
        <!-- <div class="bg-blue-300"></div> -->
        <div
          class="
            w-full
            h-full
            flex flex-col
            justify-between
            lg:justify-around
            align-center
          "
        >
          <v-btn
            x-large
            class="self-start ml-11 mt-6"
            icon
            light
            @click="dialog = false"
          >
            <v-icon x-large>mdi-close</v-icon>
          </v-btn>
          <div
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
          </div>
          <div class="self-center justify-self-center">
            <h1 class="text-center text-6xl font-mainFont text-mainBlue">
              {{ displayName }}
              {{ email }}
            </h1>
            <button class="text-lg">
              <span
                class="
                  text-mainBlue
                  font-thin
                  px-12
                  py-2
                  ml-40
                  rounded-full
                  editBtn
                  border-mainBlue border-2
                  mt-3
                  font-mainFont
                "
              >
                Edit
              </span>
            </button>
          </div>
          <div
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

.mainDiv {
  border: solid 1px red;
}

/* .backround {
  background: rgba(233, 233, 233, 0.959);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
} */
</style>
