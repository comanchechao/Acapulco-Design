<template>
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

    <div
      class="grid grid-rows-2 h-full w-full backround bg-Cyan-400 opacity-95"
    >
      <!-- <div class="bg-blue-300"></div> -->
      <div class="">
        <div class="w-full h-full flex flex-col justify-center align-center">
          <v-btn
            x-large
            class="ml-6 mt-6 bg-Lime-400 self-start"
            icon
            light
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
      <div class="row-span-1"></div>
    </div>

    <!-- <div v-if="user() != null">
      <h1>foo foo land</h1>
    </div> -->
    <!-- <div>
      <h1 class="text-center mb-4 font-bold text-lg">Dashboard</h1>
      <p class="bg-blue-100 p-5 border border-blue-200 rounded text-blue-500">
        This is the dashboard area which is secured via the router. A user must
        have an account and be logged in to view this page.
      </p>
    </div>
    <div>
      <div
        v-if="!user.emailVerified"
        class="bg-red-100 p-5 border border-red-200 rounded text-red-500 mt-5"
      >
        <p>
          You need to verify your email address, please check
          {{ user.email }} for an email. To resend the email click the button
          below.
        </p>
        <p class="mt-4">
          <button
            type="button"
            class="px-2 py-1 border rounded bg-red-100 border-red-500 hover:bg-red-200 transform transition duration-300 ease-in-out"
            @click="sendVerifyEmail"
          >
            <transition name="fade" mode="out-in">
              <span v-if="!emailSending">Resend</span>
              <span v-else>Sending...</span>
            </transition>
          </button>
        </p>
      </div>
    </div> -->
  </v-dialog>
</template>

<script>
// import firebase from 'firebase'
// You would obiusly use this component to show secure dashboard information.
// As it stands it is just a simple Vue page with nothing intersting to show.
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

/* .backround {
  background: rgba(233, 233, 233, 0.959);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
} */
</style>
