<template>
  <div id="main">
    <v-dialog max-width="600px">
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              v-bind="attrs"
              dark
              x-large
              depressed
              fab
              class="animate__animated animate__fadeIn animate__delay-0.0s"
              color="transparent"
              v-on="{ ...tooltip, ...menu }"
            >
              <v-icon large>mdi-login-variant</v-icon>
            </v-btn>
          </template>
          <span>Join Us!</span>
        </v-tooltip>
      </template>
      <div>
        <v-form
          dark
          class="loginForm px-10 py-8"
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
          <div class="text-center mt-5">
            <v-btn
              x-large
              dark
              rounded
              outlined
              color="#00e699"
              class="loginBtn"
              type="submit"
            >
              <span class="loginText"> Login </span>
            </v-btn>
            <v-btn
              x-large
              centered
              light
              rounded
              outlined
              class="pa-3 googleBtn ma-2"
              color="#f7f7f7"
              @click="googleSignIn"
              ><v-icon class="px-2" color="red">mdi-google</v-icon>
              <span class="pr-3 googleText">Sign in with Google</span></v-btn
            >
          </div>
          <div class="d-flex justify-center align-center">
            <p class="signup mr-6 mt-5">already have an account?</p>
            <SignupDialog />
          </div>
          <p v-if="error" class="error">
            {{ error }}
          </p>
        </v-form>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data: () => ({
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
          this.$router.push('/')
        })
        .catch((e) => {
          this.$snotify.error(e.message)
          console.log(e)
        })
    },
    signInUser() {
      this.$store
        .dispatch('signInWithEmail', {
          email: this.email,
          password: this.password,
        })
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');
/* .login-text {
  font-size: 15px;
  color: rgb(73, 73, 73);
  font-family: 'Montserrat';
  font-weight: 700;
  text-transform: capitalize;
} */
.loginText,
.googleText {
  font-family: 'Roboto Slab', serif;
  font-size: 19px;
  text-transform: capitalize;
  font-weight: 500;
}

.signup,
.title {
  font-size: 20px;
  color: #494949;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
}
.loginForm {
  background: rgb(255, 255, 255);
}
.googleBtn,
.loginBtn {
  border: 3px solid #00e699;
}
.googleText {
  color: #494949;
}
</style>
