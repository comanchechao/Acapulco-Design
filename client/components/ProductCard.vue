<template>
  <div class="card my-5">
    <div class="right">
      <div class="title-div px-3 py-2">
        <h2 class="name py-3">{{ product.title }}</h2>
        <!-- <h3 class="category">Category</h3> -->
        <p class="description mb-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>
        <v-spacer></v-spacer>

        <!-- <v-spacer></v-spacer> -->
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

    <!-- <img class="productImage" src="/lightertwo.jpg" alt="" /> -->
    <div class="left">
      <div class="pic-div">
        <v-img></v-img>
      </div>
      <h3 class="pa-2 acapulco">Acapulco Design</h3>
    </div>
    <!-- <div class="content">
      <v-btn color="#ef476f" class="add-to-cart"
        ><v-icon large>mdi-cart-plus</v-icon></v-btn
      >
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['product'],
  
  methods:{
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1
      })
    }
  }
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

.price-div {
  /* display: flex;
  justify-content: center;
  align-items: center; */

  /* display: flex;
  justify-self: flex-start; */
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
  /* top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto; */
  /* left: -5%;
  height: 230px;
  margin: 100px 20px;
  box-shadow: 0 5px 20px #1b263b;
  border-radius: 20px;
  background-color: #0d1f2d;
  transform-style: preserve-3d;
  transition: ease-in-out 0.5s;
  border-bottom: 3px solid transparent;
  font-family: 'Righteous', cursive; */
  width: 600px;
  height: 300px;
  transition: ease-in-out 0.5s;
}

.right {
  width: 350px;

  grid-area: 1 / 2 / 3 / 3;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* border-radius: 10px; */
  cursor: pointer;
  position: absolute;
  margin-right: 130px;
  height: 260px;
  background-color: rgb(5, 0, 32);
  box-shadow: 0 5px 20px rgb(15, 15, 15);
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

  background: rgb(34, 193, 195);
  background: linear-gradient(
    55deg,
    rgba(61, 203, 156, 1) 1%,
    rgba(161, 172, 2, 1) 100%
  );
  width: 160px;
  height: 200px;
  /* top: -20px;
  left: -15px; */
  box-shadow: 0 5px 20px #383838;
  /* border-radius: 10px; */
  transition: ease-in-out 0.3s;
}
.card:hover {
  /* opacity: 0.5;
  transform: translateX(-20%); */
}
.right:hover {
  transform: scale(0.9); /* transform: translateY(10%); */
}

/* .card:hover {
  transition: ease 0.3s;
  height: 230px;
  animation-play-state: paused;
} */
/* .card .content {
  background-color: #15c481d5;
  border-radius: 15px;
  position: relative;
  margin-top: -130px;
  padding: 10px 15px;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s ease-in-out;
} */

/* .card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -38px;
  transition-delay: 0.3s;
} */

/* .card::before {
  content: 'Kesler';
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 5em;
  font-weight: 900;
  color: #433520;
  font-style: italic;
  opacity: 0;
  transition: ease-in-out 0.5s;
}
.card::after {
  content: 'Products';
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 4em;
  font-weight: 900;
  color: #433520;
  font-style: italic;
  opacity: 0;
  transition: 0.5s ease;
} */
/*
.card:hover::after,
.card:hover::before {
  opacity: 0.04;
} */

/* .card .title {
  position: absolute;
  top: 25%;
  left: 0;
  text-align: center;
  color: #06d6a0;
  width: 100%;
  transform-style: preserve-3d;
  transform: translate3d(0, -15px, 75px);
  transition: 0.5s ease;
  opacity: 0;
  font-family: 'Righteous', cursive;
  z-index: 10;
} */

/* .card .price {
  position: relative;
  font-size: 20px;
  font-weight: 400px;
  color: #06d6a0;
  top: 40%;
  left: 0;
  transform-style: preserve-3d;
  transform: translate3d(0, 20px, 75px);
  text-align: left;
  transition: ease-in-out 0.3s;
} */

/* .card:hover .title {
  top: 20px;
  opacity: 1;
} */

/* .card .add-to-cart {
  position: absolute;
  top: 54%;
  left: 75%;
  transform: translate3d(-50%, 50%, 75px);
  color: #fdfffc;
  background: #333;
  padding: 20px 25px;
  border-radius: 30px;
  transition: ease 0.2s;
  text-align: right;
  opacity: 0;
  font-family: 'Righteous', cursive;
  z-index: 10;
} */

/* .card:hover .add-to-cart {
  bottom: 250px;
  opacity: 1;
}

.add-to-cart:hover {
  color: #0b132b;
}

.card .imageBox .productImage {
  position: relative;
  max-width: 100%;
  border-radius: 10px;
  transition: ease-in-out 0.2s;
}

.card:hover .imageBox {
  transform: scale(1.1);
} */
</style>
