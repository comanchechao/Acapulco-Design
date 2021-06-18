<template>
  <div class="main">
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
          <div class="flex space-x-8 justify-center align-center mt-5">
            <!-- <v-btn
              x-large
              dark
              rounded
              outlined
              color="#00e699"
              class="loginBtn"
              type="submit"
            >
              <span class="loginText"> Login </span>
            </v-btn> -->
            <!-- <v-btn
              x-large
              centered
              light
              rounded
              outlined
              class="pa-3 googleBtn ma-2"
              color="#f7f7f7"
              @click="googleSignIn"
              ><v-icon class="px-2" color="red">mdi-google</v-icon>
              <span class="pr-3 py-3 googleText text-4xl font-medium"
                >Sign in with Google</span
              ></v-btn
            > -->
            <button
              class="loginBtn flex align-center justify-center"
              type="submit"
            >
              <span class="learnMoreText px-4 font-semibold">
                Login
                <v-icon
                  color="white
"
                  class="pb-1 pl-2"
                  >mdi-login-variant</v-icon
                >
              </span>
            </button>
            <button
              class="learnMoreBtn flex align-center justify-center"
              @click="googleSignIn"
            >
              <span class="learnMoreText px-4 font-semibold">
                Sign in with Google
                <v-icon
                  color="white
"
                  class="pb-1 pl-2"
                  >mdi-google</v-icon
                >
              </span>
            </button>
          </div>
          <div class="flex flex-col justify-center align-center">
            <p class="signup py-4 mt-5 text-3xl font-semibold">
              Don't have an account?
            </p>
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
        // eslint-disable-next-line no-console
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

.learnMoreBtn {
  font-size: 25px;
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
.loginBtn {
  font-size: 25px;
  background-color: #ff93a5;
  color: #120129;
  border-radius: 35px;
  border: solid 2px #120129;
  transition: ease-in-out 0.3s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.loginBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}
.learnMoreBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}

.loginText,
.googleText {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  text-transform: capitalize;
}

.signup,
.title {
  color: #494949;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
.loginForm {
  background: rgb(255, 255, 255);
}

.googleText {
  color: #494949;
}
.errorText {
  /* font-family: 'Acme', sans-serif; */
  font-size: 1.3em;
  background-color: white;
  color: crimson;
}
</style>
