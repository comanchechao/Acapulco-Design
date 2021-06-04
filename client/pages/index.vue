/* eslint-disable vue/no-parsing-error */
<template>
  <v-app>
    <div id="main">
      <Navbar id="navbar" class="sticky" />
      <div class="w-full h-full">
        <div class="grid place-items-center w-screen">
          <div class="acapulco-div flex flex-col justify-start w-5/6">
            <!-- <div
              v-gsap.from="{
                y: -40,
                opacity: 0,
                duration: 1.5,

                ease: 'circ.out',
              }"
              class="w-60 h-60 justify-self-center self-center"
            >
              <img class="ChiefHead" src="/sdasd.png" alt="" />
            </div> -->
            <h1
              v-gsap.to="{
                y: 40,
                opacity: 1,
                duration: 1.5,

                ease: 'circ.out',
              }"
              class="acapulco pr-8 transform text-center leading-none text-10xl md:text-12xl lg:text-15xl text-red-50"
            >
              Acapulco Design
            </h1>
            <div
              v-gsap.to="{
                opacity: 1,
                duration: 0.6,
                delay: 1,
                ease: 'circ.out',
              }"
              class="scrollDownBtn self-center"
            >
              <v-btn
                class="mt-28"
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
          <!-- <div class="d-flex align-self justify-self"></div> -->
          <v-spacer></v-spacer>
          <div
            class="grid grid-cols-3 place-items-center h-4/5 firstContainer content mb-40"
          >
            <div class="logo">
              <img src="@/static/9757(2).png" alt="" />
            </div>
            <div class="limited justify-self-center">
              <h2
                class="h2-home capitalize text-center text-5xl md:text-7xl lg:text-8xl"
              >
                <span class="limitedSpan">Limited</span>, <span>custom</span>,
                <i class="">handmade </i>
                merchendise by :
              </h2>
            </div>
            <div class="logo">
              <img class="object-fill" src="@/static/9757(1).png" alt="" />
            </div>
          </div>

          <div
            class="grid grid-rows-2 lg:grid-cols-2 place-items-center h-4/5 lg:h-screen lg:w-4/5 secondContainer content mt-15"
          >
            <div class="textDiv flex flex-col order-last">
              <div class="flex flex-row align-center justify-center">
                <h3 class="text-6xl lg:text-7xl">Lighters</h3>
                <div class="w-1/2 lg:w-full">
                  <img
                    class="transform -translate-y-3 lg:pb-5 lg:pl-3 scale-75 lg:scale-75"
                    src="/zoozoo(1).png"
                    alt=""
                  />
                </div>
              </div>
              <div class="self-center lg:self-end">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
                    <span class="px-9 py-5 learnMoreText"> Learn More </span>
                  </button>
                </NuxtLink>
              </div>
            </div>
            <div class="pictureDiv lg:order-last"></div>
          </div>

          <div
            class="grid grid-rows-2 lg:grid-cols-2 place-items-center h-4/5 lg:h-screen lg:w-4/5 thirdContainer content"
          >
            <div class="pictureDiv">
              <v-img> </v-img>
            </div>
            <div class="textDiv flex flex-col order-last">
              <div class="flex justify-end">
                <h3 class="text-6xl p-5">Acapulco Shirts</h3>
                <img class="transform scale-75" src="/fsdf.png" alt="" />
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
                    <span class="px-9 py-5 learnMoreText"> Learn More </span>
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="grid grid-rows-2 lg:grid-cols-2 place-items-center h-4/5 lg:h-screen lg:w-4/5 forthContainer content"
          >
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <!-- <img
                class="transform -translate-y-4"
                src="/zoozoo(1).png"
                alt=""
              /> -->
                <h3 class="text-6xl lg:text-7xl p-5">Custom Matchboxes💥</h3>
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
                    <span class="px-9 py-5 learnMoreText"> Learn More </span>
                  </button>
                </NuxtLink>
              </div>
            </div>
            <div class="pictureDiv lg:order-last"></div>
          </div>

          <div
            class="grid grid-row-2 h-4/6 lg:h-4/5 place-items-center gap-4 fifthContainer content mb-5 justify-self-stretch"
          >
            <img
              class="absolute tropicalImage bg-cover bg-center"
              src="/hhjhhUntitled-2.png"
              alt=""
            />

            <div class="collections lg:max-w-6xl max-w-2xl"></div>

            <div class="textDiv mt-4 z-10">
              <h3 class="text-6xl">Collections 🗿</h3>
              <NuxtLink to="/productList">
                <button class="learnMoreBtn">
                  <span class="px-9 py-8 learnMoreText"> Learn More </span>
                </button>
              </NuxtLink>
            </div>
          </div>

          <div
            class="grid h-screen grid-row-2 place-items-center gap-4 sixthContainer content mb-5"
          >
            <div class="flex flex-row flex-wrap w-5/6 h-2/6 justify-center">
              <h1 class="introText capitalize text-5xl lg:text-7xl text-center">
                We are a
                <span class="limitedSpan"> Creative Team </span>
                based in Iran
              </h1>
              <h3
                class="learnMore font-thin text-4xl lg:text-6xl py-5 text-center"
              >
                If you want to know us more, maybe get a cup of coffee, you can!
                <!-- <button id="contactUsBtn" class="learnMoreBtn">
                <span class="learnMoreText"> Contact Us </span>
              </button> -->
              </h3>

              <div class="flex align-center justify-center mt-4">
                <video width="720" height="540" autoplay loop muted>
                  <source src="/Y064cQ6.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div class="seventhContainer w-screen">
            <div>
              <h1 class="introText pl-8">You can contact us with</h1>
              <img class="" src="/fsdfsdf.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
    this.animateChiefHead()
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
    animateChiefHead() {
      const gsap = this.$gsap
      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      tl.fromTo(
        '.ChiefHead',
        1,
        { ease: 'power1.inOut', rotation: '-10deg' },
        { ease: 'power1.inOut', rotation: '10deg' }
      )
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
              toggleActions: 'play reverse  none none',
            },
          }
        )
        // this.$gsap.fromTo(
        //   content,
        //   { y: -120 },
        //   {
        //     y: -150,
        //     opacity: 0,
        //     // ease: 'Power1.easeInOut',
        //     scrollTrigger: {
        //       trigger: content,
        //       start: 'top top',
        //       end: 'center top',
        //       scrub: 0.1,

        //       // toggleActions: 'restart none reverse none',
        //     },
        //   }
        // )
      })
    },
  },
}
</script>

<style scoped>
/* Hide scrollbar for IE, Edge and Firefox */

.acapulco-div {
  height: 100vh;
}
.content {
  opacity: 0;
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
  /* font-size: 3.6em; */
  font-family: 'Roboto Slab', serif;
  /* line-height: 110%; */
  /* text-transform: capitalize; */
  color: #120129;
}

.learnMore {
  font-weight: 300;
  font-family: 'Roboto Slab', serif;
  color: #120129;
}

.learnMoreBtn {
  font-size: 30px;
  background-color: #ff4a68;
  color: #120129;
  border-radius: 35px;
  transition: transform ease-in-out 0.5s;
  padding: 9px 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
}

.learnMoreBtn:hover {
  transform: translateY(-5px);
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
  z-index: 1;
  text-shadow: 4px 4px 0px #eb452b, 8px 8px 0px #efa032, 12px 12px 0px #46b59b,
    16px 16px 0px #017e7f, 20px 20px 0px #052939, 24px 24px 0px #5f010a,
    28px 28px 0px #c11a2b, 32px 32px 0px #4649ff, 36px 36px 0px #00076e;
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
</style>
