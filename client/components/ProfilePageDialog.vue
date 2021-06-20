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

      <div class="grid grid-rows-2 h-full w-full backround bg-Cyan-400">
        <!-- <div class="bg-blue-300"></div> -->
        <div class="">
          <div class="w-full h-full flex flex-col justify-center align-center">
            <v-btn
              x-large
              class="self-start ml-14 bg-Emerald-400"
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="w-72 h-72 rounded-full shadow-lg bg-Emerald-400">
              <div class="m-auto">
                <img
                  class="bg-cover"
                  src="/davisuko-rhUU1pemhQ0-unsplash-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row-span-1 flex align-center justify-center">
          <div class="self-start justify-self-center">
            <h1 class="text-center text-6xl font-mainFont">UserName</h1>
            <button class="">
              <span
                class="text-mainBlue text-3xl font-thin px-10 py-2 ml-40 rounded-full editBtn"
              >
                Edit
              </span>
            </button>
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
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    },
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
.dialog {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  color: aquamarine;
}

.profilePageBtn {
  font-size: 1.7em;
  color: rgb(73, 73, 73);
  font-family: 'Acme', sans-serif;
  font-weight: 800;
  text-transform: capitalize;
}
span {
  font-family: 'Acme', sans-serif;
  text-align: center;
  font-size: 1.3em;
  display: flex;
  justify-self: center;
  align-self: center;
}
.editBtn:hover {
  transition: ease-in-out 0.5s;
  background: #ff4a68;
}

/* .backround {
  background: rgba(233, 233, 233, 0.959);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
} */
</style>
