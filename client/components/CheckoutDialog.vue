<template>
  <v-dialog class="wrapper" max-height="300px" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <button class="checkoutBtn" v-on="on" v-bind="attrs">
        <span class="px-6 py-8 checkoutText"> Checkout </span>
      </button>
      <v-form class="wrapper"> </v-form>
    </template>
  </v-dialog>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');

.wrapper {
  background-color: rgb(234, 255, 239);
  z-index: 1;
}

.checkoutText {
  font-family: 'Lato', sans-serif;
  text-transform: capitalize;
  font-size: 1.3rem;
}
.checkoutBtn {
  background-color: #14ffb1;
  color: rgb(243, 243, 243);
  padding: 9px 20px;
  border-radius: 35px;
  border: 2px solid #14ffb1;

  transition: ease-in-out 0.5s;
}
.checkoutBtn:hover {
  background-color: rgb(243, 243, 243);
  color: #14ffb1;
}
</style>
