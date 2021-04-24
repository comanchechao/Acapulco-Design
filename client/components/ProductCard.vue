<template>
  <div class="card my-5">
    <div class="right">
      <div class="titleDiv px-3 py-2">
        <h2 class="name py-3">{{ product.title }}</h2>
        <p class="description mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>
        <div class="wrapper d-flex">
          <div class="shoppingcart-div ml-4">
            <v-btn rounded color="#00ffaa" outlined elevation="4" large>
              <v-icon class="px-1 black--text">mdi-shopping-outline</v-icon>
              <span class="black--text" @click="addToCart()"> Add Now </span>
            </v-btn>
          </div>
          <v-spacer></v-spacer>
          <div class="price-div mr-4">
            <p class="price px-4">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="left ml-14">
      <div class="pic-div">
        <v-img>{{ product.productImage }}</v-img>
      </div>
      <h3 class="pa-2 acapulco">Acapulco Design</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],

  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1,
      })
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sail&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;600&display=swap');
@font-face {
  font-family: 'Bernadette';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/BernadetteRegular-DOVj0.ttf') format('truetype');
}
.name {
  font-family: 'Poppins', sans-serif;
  font-size: 35px;
  line-height: 90%;
  text-transform: capitalize;
}

.titleDiv {
  overflow: hidden;
}

.price {
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 29px;
  /* margin-top: 13px; */
  transition: ease 1s;
}
.price:hover {
  border-bottom: 2px;
}

.description {
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
}
.wrapper {
  /* display: flex; */
  /* margin-top: 25px; */
  /* justify-content: flex-start;
    align-items: flex-end;
    margin-top: 15px; */
}
.card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
  width: 600px;
  height: 300px;
  transition: ease-in-out 0.5s;
}

.right {
  width: 300px;
  grid-area: 1 / 2 / 3 / 3;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;
  margin-right: 130px;
  height: 340px;
  background-color: #050020;
  box-shadow: 0 5px 20px #0f0f0f;
  transition: ease-in-out 0.4s;
  z-index: 2;
}

.acapulco {
  color: #1c3d00;
  text-align: center;
  font-family: Bernadette;
  overflow: hidden;
  opacity: 0.3;
  font-size: 95px;
  transform: rotate(-90deg);
  line-height: 90%;
}

.card .left {
  overflow: hidden;
  grid-area: 1 / 1 / 3 / 2;
  background: #22c1c3;
  background: linear-gradient(55deg, #3dcb9c 1%, #a1ac02 100%);
  width: 180px;
  height: 240px;
  box-shadow: 0 5px 20px #383838;
  transition: ease-in-out 0.3s;
}
.card:hover {
  /* opacity: 0.5;
  transform: translateX(-20%); */
}
.right:hover {
  transform: scale(97%); /* transform: translateY(10%); */
  box-shadow: 0 5px 20px #f4ffc1;
}
</style>
