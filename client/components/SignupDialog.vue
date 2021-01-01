<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" large v-on="on">
        <span class="pa-1 white--text"> Signup </span>
      </v-btn>
    </template>
    <div>
      <v-form
        dark
        class="signupForm px-4 py-4"
        @submit.prevent="createUserWithEmailAndPassword"
      >
        <v-text-field
          v-model="displayName"
          light
          class=""
          required
          label="Name"
        />
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

        <v-btn x-large dark type="submit">Sign up</v-btn>
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
    createUserWithEmailAndPassword() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
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
.signupForm {
  background: rgb(255, 255, 255);
}
</style>
