<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    transition="dialog-bottom-transition"
    scrollable
    max-width="600px"
    hide-overlay
    class="dialog"
  >
    <template v-slot:activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            color="transparent"
            class="profilePageBtn d-flex align-center pr-4"
            v-bind="attrs"
            rounded
            depressed
            x-large
            fab
            dark
            @click="dialog = true"
            v-on="{ ...tooltip, ...menu }"
          >
            <v-icon x-large class="white--text pa-3">mdi-account-key</v-icon>
          </v-btn>
        </template>
        <span>Check your Profile</span>
      </v-tooltip>
    </template>

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
import firebase from 'firebase'
// You would obiusly use this component to show secure dashboard information.
// As it stands it is just a simple Vue page with nothing intersting to show.
export default {
  data() {
    return {
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
    sendVerifyEmail() {
      this.emailSending = true
      const user = firebase.auth().currentUser
      const actionCodeSettings = {
        url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
      }
      user
        .sendEmailVerification(actionCodeSettings)
        .then(() => {
          this.emailSending = false
        })
        .catch((error) => {
          this.emailSending = false
          this.error = error.message
        })
    },
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
</style>
