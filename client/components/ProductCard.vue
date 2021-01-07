<template>
  <div class="card">
    <div class="imageBox">
      <img class="productImage" src="/lightertwo.jpg" alt="" />
    </div>
    <div class="content">
      <h2 class="title">{{ product.title }}</h2>
      <p class="price">$ {{ product.price }}</p>
      <v-btn color="#06d6a0" class="add-to-cart"
        ><v-icon large>mdi-cart-plus</v-icon></v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      Image: '@/' + this.$store.state.products.productImage,
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

.card {
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  height: 450px;
  width: 370px;
  /* top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto; */
  left: -5%;
  height: 230px;
  margin: 100px 20px;
  box-shadow: 0 5px 20px #1b263b;
  border-radius: 20px;
  background-color: #ffd166;
  transform-style: preserve-3d;
  transition: ease-in-out 0.5s;
  border-bottom: 3px solid transparent;
  font-family: 'Righteous', cursive;
}

.card:hover {
  transition: ease 0.3s;
  height: 230px;
  animation-play-state: paused;
}

.card .imageBox {
  position: relative;
  width: 260px;
  height: 260px;
  top: -50px;
  left: -15px;
  box-shadow: 0 5px 20px #778da9;
  border-radius: 10px;
  transition: ease-in-out 0.5s;
}
.imageBox:hover {
  opacity: 1;
  transform: translateX(30%);
}
.card .content {
  background-color: #073b4c;
  border-radius: 15px;
  position: relative;
  margin-top: -130px;
  padding: 10px 15px;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s ease-in-out;
}

.card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -60px;
  transition-delay: 0.3s;
}

.card .title {
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
}

.card .content .price {
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
}

.card:hover .title {
  top: 20px;
  opacity: 1;
}

.card .add-to-cart {
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
}

.card:hover .add-to-cart {
  top: -1px;
  margin: 0 35px;
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
}
@media screen and (max-width: 800px) {
  .card {
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    height: 400px;
    width: 500px;
    /* top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto; */
    left: -5%;
    margin: 100px 30px;
  }
  .card .imageBox {
    width: 400px;
    height: 300px;
  }
  .card:hover {
    height: 400px;
    width: 400;
  }
  .card:hover .price {
    top: -7px;
    opacity: 1;
  }
  .card:hover .add-to-cart {
    top: -25px;
    margin: 20px 55px;
    opacity: 1;
  }
  .card .content {
  background-color: #073b4c;
  border-radius: 15px;
  position: relative;
  margin-top: -50px;
  padding: 10px 15px;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s ease-in-out;
}
.card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: 40px;
  transition-delay: 0.3s;
}

}
</style>
