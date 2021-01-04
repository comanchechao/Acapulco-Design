<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" large v-on="on">
        <span class="pa-1 white--text"> Signup </span>
      </v-btn>
    </template>
    <div>
      <v-form dark class="signupForm px-4 py-4" @submit.prevent="createUser">
        <v-text-field
          :rules="nameRules"
          v-model="name"
          light
          class=""
          required
          label="Name"
        />
        <v-text-field
          :rules="emailRules"
          v-model="email"
          light
          label="E-mail"
          type="email"
          autocomplete="username"
          required
          class=""
        />
        <v-text-field
          :rules="passwordRules"
          v-model="password"
          light
          type="password"
          required
          autocomplete
          class=""
          label="Password"
        />

        <v-btn x-large dark type="submit">Sign up</v-btn>
        <p v-if="error" class="error red--text">
          {{ error }}
        </p>
      </v-form>
    </div>
  </v-dialog>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/auth'
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      (v) =>
        !!(v || '').match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
    ],
    error: '',
  }),
  methods: {
    // createUserWithEmailAndPassword() {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(this.email, this.password)
    //     .then((data) => {
    //       console.log(data)
    //       this.$router.push('/')
    //     })
    //     .catch((error) => {
    //       this.error = error
    //     })
    // },
    createUser() {
      this.$store
        .dispatch('signUp', {
          email: this.email,
          password: this.password,
          name: this.name,
        })
        .then((data) => {
          console.log(data)
          this.$router.push('/')
        })
        .catch((err) => {
          this.error = err
        })
    },
  },
}
</script>

<style>
.error {
  background: white;
}
.signupForm {
  background: rgb(255, 255, 255);
}
</style>
