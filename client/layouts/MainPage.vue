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
        <div
          v-gsap.to="{
            opacity: 1,
            duration: 0.6,
            delay: 1.9,
            ease: 'circ.out',
          }"
          class="scrollDownBtn"
        >
          <v-btn
            class="mb-4"
            x-large
            rounded
            fab
            depressed
            dark
            color="transparent"
          >
            <v-icon x-large>mdi-arrow-up-down</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <!-- <div class="d-flex align-self justify-self"></div> -->
    <v-spacer></v-spacer>
    <v-container class="firstContainer content pl-8 mb-10">
      <v-row>
        <v-col cols="6" align-end>
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
      <v-row>
        <v-col cols="6" align-self="center">
          <div class="textDiv d-flex flex-column align-start">
            <h3>Lighters</h3>
            <NuxtLink to="/productList">
              <button class="learnMoreBtn">
                <span class="px-9 py-8 learnMoreText"> Learn More </span>
              </button>
            </NuxtLink>
          </div></v-col
        >
        <v-col cols="6">
          <div class="pictureDiv d-flex"></div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="thirdContainer content">
      <v-row>
        <v-col cols="6">
          <div class="pictureDiv">
            <v-img> </v-img>
          </div>
        </v-col>
        <v-col cols="6" align-self="center">
          <div class="textDiv d-flex flex-column align-end">
            <h3 id="altText">Acapulco Shirts</h3>
            <NuxtLink to="/productList">
              <button class="learnMoreBtn">
                <span class="px-9 py-8 learnMoreText"> Learn More </span>
              </button>
            </NuxtLink>
          </div></v-col
        >
      </v-row>
    </v-container>
    <v-container class="forthContainer content">
      <v-row>
        <v-col cols="6" align-self="center">
          <div class="textDiv d-flex flex-column align-start">
            <h3 id="altText">Custom Matchboxes</h3>
            <NuxtLink to="/productList">
              <button class="learnMoreBtn">
                <span class="px-9 py-8 learnMoreText"> Learn More </span>
              </button>
            </NuxtLink>
          </div></v-col
        >
        <v-col cols="6">
          <div class="pictureDiv d-flex"></div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="fifthContainer content mb-5">
      <v-row class="pb-8">
        <v-col cols="12">
          <div class="collections d-flex"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align-self="center">
          <div class="textDiv d-flex flex-column align-center">
            <h3 id="altText">Collections</h3>
            <NuxtLink to="/productList">
              <button class="learnMoreBtn">
                <span class="px-9 py-8 learnMoreText"> Learn More </span>
              </button>
            </NuxtLink>
          </div></v-col
        >
      </v-row>
    </v-container>
    <v-container fluid class="sixthContainer content">
      <v-row class="pb-8" justify="center" align-center align="center">
        <v-col cols="12">
          <div class="d-flex flex-column flex-wrap">
            <h1 class="introText">
              We are a
              <span class="limitedSpan"> Creative Team </span>
              based in Iran
            </h1>
            <h3 class="learnMore py-5">
              If you want to know us more, maybe get a cup of coffee, you can
              <!-- <button id="contactUsBtn" class="learnMoreBtn">
                <span class="learnMoreText"> Contact Us </span>
              </button> -->
            </h3>
          </div>
        </v-col>
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-center justify-center">
              <video width="620" height="540" autoplay loop muted>
                <source src="/Y064cQ6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
    <v-container class="seventhContainer">
      <v-row>
        <v-col cols="12">
          <h1 class="introText">You can contact us with</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="collections"></div>
        </v-col>
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
    this.animatePictureDiv()
    this.animateOnScroll()
    this.animateScrollDownBtn()
  },
  methods: {
    animatePictureDiv() {
      const gsap = this.$gsap
      const pictureDivs = this.$gsap.utils.toArray('.pictureDiv')
      const tl = gsap.timeline()
      tl.from('.collections', {
        opacity: 0,
        x: 40,
        scale: 0.5,
        scrollTrigger: {
          trigger: '.collections',
          scrub: 0.7,
          start: 'top bottom',
          end: 'top center',
          toggleActions: 'play none none reset',
        },
      })

      // .To('collections', {
      //   y: -150,
      //   opacity: 0,
      //   // ease: 'Power1.easeInOut',
      //   scrollTrigger: {
      //     trigger: 'collections',
      //     start: 'top top',
      //     end: 'center top',
      //     scrub: 0.1,

      //     // toggleActions: 'restart none reverse none',
      //   },
      // })
      pictureDivs.forEach((pictureDiv) => {
        tl.to(pictureDiv, {
          width: 600,
          scrollTrigger: {
            trigger: pictureDiv,
            scrub: 0.7,
            start: 'top bottom',
            end: 'top center',
            toggleActions: 'play none none reset',
          },
        })
      })
    },

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
      const tl = this.$gsap.timeline()
      tl.fromTo(
        '.acapulco-div',
        {
          opacity: 1,
          y: 40,
        },
        {
          opacity: 0,
          y: 0,
          scrollTrigger: {
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
            trigger: '.acapulco',
          },
        }
      )
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
          { y: -120 },
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@500&display=swap');

@font-face {
  font-family: 'Bernadette';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/BernadetteRegular-DOVj0.ttf') format('truetype');
}

@font-face {
  font-family: 'QuickKiss';
  font-style: normal;
  font-display: swap;
  src: url('~assets/fonts/QuickKissPersonalUse-PxlZ.ttf') format('truetype');
}

#main::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#main {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

#main {
  display: grid;
  justify-content: center;
  align-items: center;
}

.acapulco-div {
  height: 100vh;
  grid-area: 2 / 3 / 3 / 4;
}
.content {
  opacity: 0;
}

.firstContainer {
  width: 100vw;
  height: 50vh;
}

.secondContainer,
.thirdContainer,
.forthContainer,
.fifthContainer {
  width: 100vw;
  height: 80vh;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 5em;
  color: #120129;
}

.sixthContainer {
  width: 100vw;
  height: 100vh;
}

.introText {
  font-size: 3.6em;
  font-family: 'Roboto Slab', serif;
  text-align: start;
  line-height: 110%;
  text-transform: capitalize;
  color: #120129;
}

.learnMore {
  font-weight: 300;
  font-size: 2.6em;
  font-family: 'Roboto Slab', serif;
  text-align: start;
  line-height: 110%;
  text-transform: capitalize;
  color: #120129;
}

#altText {
  font-size: 64px;
}
.learnMoreBtn {
  font-size: 30px;
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: ease-in-out 0.3s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.learnMoreBtn:hover {
  background-color: #120129;
  color: #ff4a68;
}

/* #contactUsBtn {
  font-weight: 600;
  font-family: 'Roboto Slab', serif;
  transition: ease-in-out 0.3s;
  color: #ff4a68;
  background-color: transparent;
}

#contactUsBtn:hover {
  background-color: #ff4a68;
  color: #120129;
} */

.pictureDiv {
  width: 300px;
  height: 500px;
  background-color: #dddddd;
  box-shadow: 0 2.3px 7px -20px rgba(0, 0, 0, 0.023),
    0 5.4px 16.2px -20px rgba(0, 0, 0, 0.034),
    0 9.7px 29px -20px rgba(0, 0, 0, 0.041),
    0 16.1px 48.2px -20px rgba(0, 0, 0, 0.049),
    0 26.5px 79.4px -20px rgba(0, 0, 0, 0.056),
    0 46.2px 138.7px -20px rgba(0, 0, 0, 0.067),
    0 100px 300px -20px rgba(0, 0, 0, 0.09);
}

.collections {
  width: 100%;
  height: 500px;
  background-color: #dddddd;
  box-shadow: 0 2.3px 7px -20px rgba(0, 0, 0, 0.023),
    0 5.4px 16.2px -20px rgba(0, 0, 0, 0.034),
    0 9.7px 29px -20px rgba(0, 0, 0, 0.041),
    0 16.1px 48.2px -20px rgba(0, 0, 0, 0.049),
    0 26.5px 79.4px -20px rgba(0, 0, 0, 0.056),
    0 46.2px 138.7px -20px rgba(0, 0, 0, 0.067),
    0 100px 300px -20px rgba(0, 0, 0, 0.09);
}

.limited {
  grid-area: 4 / 3 / 5 / 4;
  justify-content: center;
  align-items: center;
}
.logo {
  grid-area: 4 / 3 / 5 / 4;
  display: flex;
  justify-content: center;
}

.image {
  display: block;
}

.acapulco {
  opacity: 0;
  font-family: 'Sail';
  z-index: 0;
  font-size: 230px;
  text-align: center;
  color: #fcedd8;
  text-shadow: 5px 5px 0px #eb452b, 10px 10px 0px #efa032, 15px 15px 0px #46b59b,
    20px 20px 0px #017e7f, 25px 25px 0px #052939, 30px 30px 0px #c11a2b,
    35px 35px 0px #c11a2b, 40px 40px 0px #c11a2b, 45px 45px 0px #c11a2b;
  line-height: 100%;
}

.scrollDownBtn {
  opacity: 0;
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
