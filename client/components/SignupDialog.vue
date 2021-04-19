<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="#00e699"
        class="signup-btn d-flex align-center"
        v-bind="attrs"
        rounded
        large
        v-on="on"
      >
        <v-icon medium>mdi-account-key</v-icon>
        <span class="white--text signup-text px-3"> Signup </span>
      </v-btn>
    </template>
    <div>
      <v-form dark class="signupForm pa-10" @submit.prevent="createUser">
        <!-- <v-text-field
          v-model="displayName"
          :rules="displayNameRules"
          light
          class=""
          required
          label="Name"
        /> -->
        <v-text-field
          v-model="email"
          :rules="emailRules"
          light
          label="E-mail"
          type="email"
          autocomplete="username"
          required
          class=""
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          light
          type="password"
          required
          autocomplete
          class=""
          label="Password"
        />
        <!-- <v-text-field
          v-model="passwordRepeat"
          :rules="passwordRepeatRules"
          light
          type="password"
          required
          autocomplete
          class=""
          label="Repeat Your Password"
        /> -->
        <div class="text-center">
          <v-btn
            class="mt-4"
            centered
            x-large
            rounded
            color="#00e699"
            dark
            type="submit"
          >
            <v-icon>mdi-account</v-icon>
            <span class="signupText"> Signup </span>
          </v-btn>
        </div>

        <p v-if="error" class="pt-6 errorText">
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
    // displayName: '',
    // displayNameRules: [
    //   (v) => !!v || 'Name is required',
    //   (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    // ],
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
    // passwordRepeat: '',
    // passwordRepeatRules: [
    //   (v) => (!!v && v) === this.match || 'Values do not match',
    // ],
    error: '',
  }),
  methods: {
    createUser() {
      this.$store
        .dispatch('signUp', {
          email: this.email,
          password: this.password,
          // displayName: this.displayName,
        })
        .then((data) => {
          this.$router.push('/')
        })
        .catch((err) => {
          this.error = err
        })
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

.signup-text {
  font-size: 1.7em;
  color: rgb(73, 73, 73);
  font-family: 'Acme', sans-serif;
  font-weight: 800;
  text-transform: capitalize;
}
.signupText {
  font-family: 'Acme', sans-serif;
  text-transform: capitalize;
  font-weight: 800;
  font-size: 1.7em;
}

.errorText {
  font-family: 'Acme', sans-serif;
  font-size: 1.3em;
  background-color: white;
  color: crimson;
}
.signupForm {
  background: rgb(255, 255, 255);
}
</style>
