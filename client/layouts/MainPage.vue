<template>
  <v-main id="main pa-0 my-0">
    <div id="depth">
      <div class="acapulco-div" :class="{ animate__zoomOut: CartDisplay }">
        <h1
          v-gsap.to="{
            y: 40,
            opacity: 1,
            duration: 1.5,
            delay: 1.5,
            ease: 'circ.out',
          }"
          grid-list-lg
          class="acapulco"
        >
          Acapulco Design
        </h1>
      </div>
    </div>
    <v-spacer></v-spacer>
    <v-container>
      <div class="limited content">
        <h2 class="h2-home">
          Limited custom handmade <br />
          merchendise by :
        </h2>
        <div class="logo mt-5">
          <v-img
            position="center center"
            class="image animate__animated animate__fadeIn animate__delay-3s"
            src="/sketch-1606252673782.png"
            max-height="600px"
            max-width="600px"
          ></v-img>
        </div>
      </div>
    </v-container>
    <v-container class="secondContainer" grid-list-md>
      <div class="textDiv">
        <h2>Lighters</h2>
      </div>
      <div class="boxDiv"></div>
    </v-container>
  </v-main>
</template>
<!-- <div class="">

</v-app>
      <h1 class="acapulco text-center"></h1>
    </div> -->

<script>
// import gsap from 'gsap'
export default {
  computed: {
    CartDisplay() {
      return this.$store.state.CartDisplay
    },
  },
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll() {
      this.$gsap.to(window, { duration: 2, scrollTo: 1000 })

      this.$gsap.to('.acapulco-div', {
        x: 500,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.content',
          pin: true,
          end: 'bottom',
          scrub: true,
        },
      })
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sail&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sahitya&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@font-face {
  font-family: 'Bernadette';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/BernadetteRegular-DOVj0.ttf') format('truetype');
}

.home-background {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

#main {
  display: grid;

  align-items: center;
}

.acapulco-div {
  margin-top: 5em;
  grid-area: 2 / 3 / 3 / 4;
}

.limited {
  margin-top: 27em;
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
  opacity: 0;
  font-family: 'Sail';
  /* text-shadow: 6px 5px 4px #363636; */
  z-index: 1;
  font-size: 230px;
  /* backdrop-filter: blur(4px); */
  text-align: center;
  color: #fcedd8;
  text-shadow: 5px 5px 0px #eb452b, 10px 10px 0px #efa032, 15px 15px 0px #46b59b,
    20px 20px 0px #017e7f, 25px 25px 0px #052939, 30px 30px 0px #c11a2b,
    35px 35px 0px #c11a2b, 40px 40px 0px #c11a2b, 45px 45px 0px #c11a2b;
  line-height: 100%;
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
  text-shadow: 6px 5px 4px #195f5a;
  /* width: 764px;
  top: 50%;
  left: 15%;
  /*  */
  color: #fffb00;
}
#main {
  color: transparent;
  /* padding: 20%; */
}

@media screen and (max-width: 800px) {
  .acapulco {
    font-size: 125px;
  }
  .h2-home {
    font-size: 3rem;
  }
}
</style>
