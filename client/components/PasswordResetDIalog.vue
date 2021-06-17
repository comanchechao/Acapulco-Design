<template>
  <v-dialog v-model="dialog" max-width="900px" transition="dialog-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        depressed
        class="resetyourpasswordBtn mt-5 border-4 border-green-300"
        v-bind="attrs"
        rounded
        large
        v-on="on"
        outlined
      >
        <span class="signup-text px-3 capitalize"> reset your password </span>
      </v-btn>
    </template>

    <div class="bg-gray-300">
      <v-btn x-large class="ml-6 mt-6 pa-3" icon light @click="dialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <div class="flex items center">
        <div
          class="ma-8 w-4/6 h-96 flex items-center self-center bg-gray-50"
        ></div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      email: '',
      showSuccess: false,
      errorMsg: '',
    }
  },
  methods: {
    async resetPassword() {
      this.errorMsg = ''
      try {
        await this.$fire.auth.sendPasswordResetEmail(this.email)
        this.showSuccess = true
      } catch (err) {
        this.errorMsg = err.message
      }
    },
  },
}
</script>

<style scoped>
.resetyourpasswordBtn {
  font-size: 1.7em;
  color: #00e699;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
</style>
