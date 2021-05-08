/* eslint-disable vue/no-parsing-error */
<template>
  <v-app>
    <Navbar id="navbar" class="" />

    <v-main id="main" class="">
      <div class="grid place-items-center">
        <div id="depth">
          <div
            class="acapulco-div pb-5 flex flex-col justify-space-around align-center"
          >
            <h1
              v-gsap.to="{
                y: 40,
                opacity: 1,
                duration: 1.5,
                delay: 1.5,
                ease: 'circ.out',
              }"
              class="acapulco pt-6 w-5/6"
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
        <div
          class="grid grid-cols-3 place-items-center firstContainer content mb-10"
        >
          <div class="logo">
            <img src="@/static/9756.png" alt="" />
          </div>
          <div class="limited justify-self-center">
            <h2 class="h2-home capitalize text-center text-4xl md:text-8xl">
              <span class="limitedSpan">Limited</span>, <span>custom</span>,
              <i class="">handmade </i>
              merchendise by :
            </h2>
          </div>
          <div class="logo">
            <img src="@/static/9757.png" alt="" />
          </div>
        </div>

        <div
          class="grid grid-cols-2 place-items-center h-screen w-4/5 secondContainer content"
        >
          <div class="textDiv flex flex-col">
            <div class="flex-row flex align-center justify-start">
              <img
                class="transform -translate-y-4"
                src="/zoozoo(1).png"
                alt=""
              />
              <h3 class="text-7xl p-5">Lighters</h3>
            </div>
            <div class="self-end">
              <NuxtLink to="/productList">
                <button class="learnMoreBtn">
                  <span class="px-9 py-5 learnMoreText"> Learn More </span>
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="pictureDiv"></div>
        </div>

        <div
          class="grid grid-cols-2 place-items-center h-4/5 w-4/5 thirdContainer content"
        >
          <div class="pictureDiv">
            <v-img> </v-img>
          </div>
          <div class="textDiv flex flex-col">
            <div class="flex-row flex justify-center align-center">
              <h3 class="text-7xl p-5">Acapulco Shirts</h3>
              <img class="" src="/fsdf.png" alt="" />
            </div>
            <div class="">
              <NuxtLink to="/productList">
                <button class="learnMoreBtn">
                  <span class="px-9 py-5 learnMoreText"> Learn More </span>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-2 place-items-center h-screen w-4/5 secondContainer content"
        >
          <div class="textDiv flex flex-col">
            <div class="flex-row flex align-center justify-center">
              <img
                class="transform -translate-y-4"
                src="/zoozoo(1).png"
                alt=""
              />
              <h3 class="text-6xl p-5">Custom Matchboxes</h3>
            </div>
            <div class="self-end">
              <NuxtLink to="/productList">
                <button class="learnMoreBtn">
                  <span class="px-9 py-5 learnMoreText"> Learn More </span>
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="pictureDiv"></div>
        </div>
        <div
          class="grid grid-row-2 place-items-center gap-4 fifthContainer content mb-5 justify-self-stretch"
        >
          <img
            class="absolute tropicalImage"
            src="/hhjhhUntitled-2.png"
            alt=""
          />
          <div class="collections max-w-6xl"></div>

          <div class="textDiv">
            <h3 id="altText">Collections</h3>
            <NuxtLink to="/productList">
              <button class="learnMoreBtn">
                <span class="px-9 py-8 learnMoreText"> Learn More </span>
              </button>
            </NuxtLink>
          </div>
        </div>

        <div
          class="grid grid-row-2 place-items-center gap-4 sixthContainer content mb-5"
        >
          <div class="d-flex flex-column flex-wrap">
            <h1 class="introText text-center">
              We are a
              <span class="limitedSpan"> Creative Team </span>
              based in Iran
            </h1>
            <h3 class="learnMore py-5 text-center">
              If you want to know us more, maybe get a cup of coffee, you can
              <!-- <button id="contactUsBtn" class="learnMoreBtn">
                <span class="learnMoreText"> Contact Us </span>
              </button> -->
            </h3>
          </div>

          <div class="d-flex align-center justify-center">
            <video width="620" height="540" autoplay loop muted>
              <source src="/Y064cQ6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="seventhContainer">
          <div>
            <h1 class="introText pl-8">You can contact us with</h1>
            <img class="" src="/fsdfsdf.png" alt="" />
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<!-- <div class="">

</v-app>
      <h1 class="acapulco text-center"></h1>
    </div> -->

<script>
import Navbar from '@/layouts/Navbar.vue'

// import gsap from 'gsap'
export default {
  components: {
    Navbar,
  },
  computed: {
    // CartDisplay() {
    //   return this.$store.state.CartDisplay
    // },
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
      // tl.from('.tropicalImage', {
      //   opacity: 0,
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: '.tropicalImage',
      //     start: 'top bottom',
      //     toggleActions: 'play none none reset',
      //   },
      // })
      tl.from('.collections', {
        opacity: 0,
        x: 40,
        scale: 0.5,
        scrollTrigger: {
          trigger: '.collections',
          scrub: 0.7,
          start: 'top bottom',
          end: 'top center',
          toggleActions: 'play none none none',
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
            toggleActions: 'play none none none',
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
              toggleActions: 'play none none none',
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
* {
  scrollbar-width: thin;
  scrollbar-color: #e28b0a #00ffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 32px;
}

*::-webkit-scrollbar-track {
  background: #00ffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #e28b0a;
  border-radius: 100px;
  border: 3px solid #e44343;
}

/* Hide scrollbar for IE, Edge and Firefox */

#main {
  animation: 30s ease-in-out infinite alternate-reverse color-change;
}
@-webkit-keyframes color-change {
  0% {
    background-color: #ade7e7;
  }
  /* 15% {
    background-color: #7ec6c8;
  }
  30% {
    background-color: #a1dfa1;
  } */
  45% {
    background-color: #a6a6db;
  }
  /* 60% {
    background-color: #d8a5d8;
  }
  75% {
    background-color: #c6b1ec;
  }
  90% {
    background-color: #ade7e7;
  } */
  100% {
    background-color: #d8bbff;
  }
}

@keyframes color-change {
  0% {
    background-color: #83f1f1;
  }
  /* 15% {
    background-color: #7ec6c8;
  }
  30% {
    background-color: #a1dfa1;
  } */
  50% {
    background-color: #55dd8e;
  }
  /* 60% {
    background-color: #d8a5d8;
  }
  75% {
    background-color: #c6b1ec;
  }
  90% {
    background-color: #ade7e7;
  } */
  100% {
    background-color: #595bee;
  }
}
.acapulco-div {
  height: 100vh;
}
.content {
  opacity: 0;
}

.firstContainer {
  width: 100vw;
  height: 80vh;
}

.secondContainer,
.thirdContainer,
.forthContainer,
.fifthContainer {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  color: #120129;
}

.sixthContainer {
  width: 100vw;
  height: 110vh;
}

/* .seventhContainer {
  width: 100vw;
  height: 60vh;
} */

.introText {
  font-size: 3.6em;
  font-family: 'Roboto Slab', serif;
  line-height: 110%;
  text-transform: capitalize;
  color: #120129;
}

.learnMore {
  font-weight: 300;
  font-size: 2.6em;
  font-family: 'Roboto Slab', serif;
  text-align: center;
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

/* .limited {
  grid-area: 4 / 3 / 5 / 4;
  justify-content: center;
  align-items: center;
}
.logo {
  grid-area: 4 / 3 / 5 / 4;
  display: flex;
  justify-content: center;
} */

/* .image {
  display: block;
} */

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
  font-family: 'Roboto Slab', serif;
  line-height: 110%;
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
}
</style>
