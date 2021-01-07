<template>
  <v-main id="main pa-0 my-4">
    <v-container>
      <div  id="depth">
      <div
        class="acapulco-div pa-0 my-12"
        :class="{ animate__zoomOut: CartDisplay }"
      >
        <h1
          class="acapulco animate__animated animate__fadeIn animate__delay-1s"
        >
          Acapulco Design
        </h1>
      </div>
      <div class="limited my-5">
        <h2 class="h2-home animate__animated animate__fadeIn animate__delay-2s">
          Limited custom handmade <br />
          merchendise by
        </h2>
      </div>
      <div class="logo mt-5">
        <v-img
          position="center center"
          class="image animate__animated animate__fadeIn animate__delay-3s"
          src="/sketch-1606252673782.png"
          max-height="300px"
          max-width="600px"
        ></v-img>
      </div>
      <!-- <v-img
          class="home-background"
          max-height="900"
          src="/tabitha-turner--_bSa4Sn1Bs-unsplash.jpg"
        ></v-img> -->
      </div>
    </v-container>
  </v-main>
</template>
<!-- <div class="">

</v-app>
      <h1 class="acapulco text-center"></h1>
    </div> -->

<script>
export default {
  computed: {
    CartDisplay() {
      return this.$store.state.CartDisplay
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sail&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sahitya&display=swap');

.home-background {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

#main {
  display: grid;
  grid-template-columns: repeat(2, 1fr) 5fr repeat(2, 1fr);
  grid-template-rows: 1fr 3fr 1fr 2fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
}

#depth{
  box-shadow:6px 5px 4px #0d1b2a;
  display: block;
  justify-content: center;
  width: 100%;
  height: 700px;
 background-position: center;
  background-image: url('/Custom1.jpg');
  border-radius: 10px;
  background-size: cover;
  margin: 10px;
  background-position: center;
  transition: ease-in-out 0.3s;
}

.acapulco-div {
  grid-area: 2 / 3 / 3 / 4;
  /* width: 300px; */
}

.limited {
  grid-area: 4 / 3 / 5 / 4;
  justify-content: center;
  align-items: center;
}
.logo {
  grid-area: 4 / 3 / 5 / 4;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* max-width: 600px; */
}

.image {
  display: block;
}

.acapulco {
  /* margin-bottom: 40px;
  margin-top: 20px; */
  font-family: sail;
  text-shadow:6px 5px 4px #195F5A;
  z-index: 1;
  font-size: 170px;
  /* backdrop-filter: blur(4px); */
  text-align: center;
  color: #087e8b;
  line-height: 90%;
  /* position: absolute;
  top: 10%;
  left: 8%;
  transform: translate(-50%, -50%);
   */
}

.h2-home {
  font-size: 3.5rem;
  z-index: 1;
  font-family: 'Sahitya', serif;
  text-align: center;
  line-height: 110%;
  text-shadow:6px 5px 4px #195F5A;
  /* width: 764px;
  top: 50%;
  left: 15%;
  /*  */
  color: #087e8b;
}
#main {
  color: transparent;
  /* padding: 20%; */
}

@media screen and (max-width: 800px){
  .acapulco{
    font-size: 130px;
  }
}
</style>
