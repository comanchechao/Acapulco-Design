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
              class=""
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
        <v-form dark class="loginForm px-10 py-8" @submit.prevent="signInUser">
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
          <div class="flex flex-col justify-center align-center">
            <p class="signup mr-6 mt-5">Don't have an account?</p>
            <SignupDialog class="" />
            <PasswordResetDialog />
          </div>
          <p v-if="error" class="errorText">
            {{ error }}
          </p>
        </v-form>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import SignupDialog from './SignupDialog'
import PasswordResetDialog from './PasswordResetDIalog'
export default {
  components: {
    SignupDialog,
    PasswordResetDialog,
  },
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
      this.$store
        .dispatch('signInWithGoogle')
        .then((result) => {
          // store the user ore wathever
          this.$router.push('/')
        })
        .catch((err) => console.log(err))
    },
    signInUser() {
      this.$store
        .dispatch('signInWithEmail', {
          email: this.email,
          password: this.password,
        })
        .then((data) => {
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
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

/* .login-text {
  font-size: 15px;
  color: rgb(73, 73, 73);
  font-family: 'Montserrat';
  font-weight: 700;
  text-transform: capitalize;
} */
.loginText,
.googleText {
  font-family: 'Acme', sans-serif;
  font-size: 1.3em;
  text-transform: capitalize;
  font-weight: 500;
}

.signup,
.title {
  font-size: 1.6em;
  color: #494949;
  font-family: 'Acme', sans-serif;
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
.errorText {
  font-family: 'Acme', sans-serif;
  font-size: 1.3em;
  background-color: white;
  color: crimson;
}
</style>
