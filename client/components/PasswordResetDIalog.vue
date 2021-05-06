<template>
  <v-dialog v-model="dialog" max-width="900px" transition="dialog-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="#00e699"
        class="signup-btn d-flex align-center"
        v-bind="attrs"
        rounded
        large
        v-on="on"
      >
        <span class="white--text signup-text px-3"> Reset Your Passwrod </span>
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
