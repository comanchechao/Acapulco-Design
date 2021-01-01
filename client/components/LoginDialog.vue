<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" large v-on="on">
        <span class="pa-2 white--text"> Login </span>
      </v-btn>
    </template>
    <div>
      <v-form
        dark
        class="loginForm px-4 py-4"
        @submit.prevent="signInWithEmailAndPassword"
      >
        <!-- <v-text-field
            v-model="displayName"
            light
            class=""
            required
            label="Name"
          /> -->
        <v-text-field
          v-model="email"
          light
          label="E-mail"
          type="email"
          autocomplete="username"
          required
          class=""
        />
        <v-text-field
          v-model="password"
          light
          type="password"
          required
          autocomplete
          class=""
          label="Password"
        />
        <div class="text-center">
          <v-btn x-large dark type="submit">Login</v-btn>
          <v-btn
            x-large
            elevation="3"
            centered
            class="pa-3 ma-2 blue--text"
            color="#f7f7f7"
            @click="googleSignIn"
            ><v-icon class="pr-2" color="red">mdi-google</v-icon>Sign in with
            Google</v-btn
          >
        </div>

        <p v-if="error" class="error">
          {{ error }}
        </p>
      </v-form>
    </div>
  </v-dialog>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data: () => ({
    email: '',
    password: '',
    displayName: '',
    error: '',
  }),
  methods: {
    googleSignIn() {
      this.provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(this.provider)
        .then((result) => {
          // store the user ore wathever
          this.$router.push('/home')
        })
        .catch((e) => {
          this.$snotify.error(e.message)
          console.log(e)
        })
    },
    signInWithEmailAndPassword() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data)
          this.$router.push('/')
        })
        .catch((error) => {
          this.error = error
        })
    },
  },
}
</script>

<style>
.loginForm {
  background: rgb(255, 255, 255);
}
</style>
