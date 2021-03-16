/* eslint-disable vue/no-parsing-error */
<template>
  <v-main id="main pa-0 my-0">
    <div id="depth">
      <div
        class="acapulco-div pb-5 d-flex flex-column justify-space-around align-center"
        :class="{ animate__zoomOut: CartDisplay }"
      >
        <h1
          v-gsap.to="{
            y: 40,
            opacity: 1,
            duration: 1.5,
            delay: 1.5,
            ease: 'circ.out',
          }"
          class="acapulco pt-6"
        >
          Acapulco Design
        </h1>
        <div class="scrollDownBtn">
          <v-btn x-large rounded fab depressed dark color="transparent">
            <v-icon x-large>mdi-arrow-up-down</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <!-- <div class="d-flex align-self justify-self"></div> -->
    <v-spacer></v-spacer>
    <v-container class="firstContainer content pl-8 mb-10">
      <v-row>
        <v-col cols="6">
          <div class="limited">
            <h2 class="h2-home">
              <span class="limitedSpan">Limited</span>, <span>custom</span>,
              <i>handmade </i><br />
              merchendise
            </h2>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="logo mt-5">
            <!-- <v-img
              position="center center"
              class="image animate__animated animate__fadeIn animate__delay-3s"
              src="/spencer-watson-ioy3bN5Irew-unsplash.jpg"
              max-height="700px"
              max-width="400px"
            ></v-img> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="secondContainer content">
      <v-row justify-center>
        <v-col cols="6">
          <div class="textDiv">
            <h3>Lighters</h3>
            <button class="learnMoreBtn">
              <span class="px-9 py-8 LearnMoreText"> Learn More </span>
            </button>
          </div></v-col
        >
        <v-col cols="6">
          <div class="pictureDiv">
            <v-img> </v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="thirdContainer content">
      <v-row justify-center>
        <v-col cols="6">
          <div class="pictureDiv">
            <v-img> </v-img>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="textDiv">
            <h3 id="acapulcoShirtsText">Acapulco Shirts</h3>
            <button class="learnMoreBtn">
              <span class="px-9 py-8 LearnMoreText"> Learn More </span>
            </button>
          </div></v-col
        >
      </v-row>
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
    this.animateScrollDownBtn()
  },
  methods: {
    animateScrollDownBtn() {
      const gsap = this.$gsap
      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      tl.fromTo(
        '.scrollDownBtn',
        1,
        { ease: 'power1.inOut', y: 20 },
        { ease: 'power1.inOut', y: -20 }
      )
    },
    animateOnScroll() {
      const contents = this.$gsap.utils.toArray('.content')
      contents.forEach((content) => {
        this.$gsap.fromTo(
          content,
          {
            y: 0,
            opacity: 0,
          },
          {
            opacity: 1,
            y: -120,
            ease: 'Power1.easeInOut',
            scrollTrigger: {
              scrub: 0.7,
              start: 'top bottom',
              end: 'top center',
              trigger: content,
              toggleActions: 'play none none reset',
            },
          }
        )
        this.$gsap.fromTo(
          content,
          { y: -120, opacity: 1 },
          {
            y: -150,
            opacity: 0,
            // ease: 'Power1.easeInOut',
            scrollTrigger: {
              trigger: content,
              start: 'top top',
              end: 'center top',
              scrub: 0.1,

              // toggleActions: 'restart none reverse none',
            },
          }
        )
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
@import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap');

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
  justify-content: center;
  align-items: center;
}

.acapulco-div {
  height: 110vh;
  grid-area: 2 / 3 / 3 / 4;
}
.content {
  opacity: 0;
}

.firstContainer {
  width: 100vw;
  height: 100vh;
  /* background-color: #dfdfdf; */
}

.secondContainer,
.thirdContainer {
  width: 100vw;
  height: 100vh;
  font-family: 'Acme', sans-serif;
  font-size: 5em;
  color: #272727;
}

#acapulcoShirtsText {
  font-size: 64px;
}
.learnMoreBtn {
  font-size: 30px;
  background-color: #0baf78;
  /* border: 3px solid #0baf78; */

  color: #f3f3f3;
  border-radius: 35px;
  transition: ease-in-out 0.2s;
  padding: 9px 20px;
  font-family: 'Acme', sans-serif;
}

.learnMoreBtn:hover {
  background-color: #d4e300;
  color: #001d2f;
  /* border: 3px solid #0793c2; */
}

.pictureDiv {
  width: 300px;
  height: 700px;
  background-color: #1f0a3a;
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
  opacity: 0;
  /* margin-top: 5em; */

  font-family: 'Sail';
  /* text-shadow: 6px 5px 4px #363636; */
  z-index: 0;
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
  font-size: 5.5em;
  z-index: 1;
  font-family: 'Roboto Slab', serif;
  text-align: start;
  line-height: 110%;
  text-transform: capitalize;
  color: #120129;
}
.limitedSpan {
  color: #ff4a68;
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
