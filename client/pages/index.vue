/* eslint-disable vue/no-parsing-error */
<template>
  <v-app>
    <div id="main" class="">
      <LazyHydrate when-idle>
        <Navbar
          id="navbar"
          v-gsap.to="{
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
          }"
          class="mt-4 navbar sticky"
        />
      </LazyHydrate>
      <div class="w-full">
        <div class="grid place-items-center w-full">
          <div></div>
          <div
            class="
              acapulco-div
              flex flex-col
              align-center
              justify-between
              h-5/6
              w-full
              mb-40
            "
          >
            <div
              v-gsap.to="{
                opacity: 1,
                duration: 1,
                ease: 'circ.out',
              }"
              class="
                w-60
                h-60
                justify-self-center
                self-center
                peaceSignDiv
                opacity-0
              "
            >
                <img class="peaceSign" src="/moomoole.png" alt="" />
            </div>
            <div
              v-gsap.to="{
                opacity: 1,
                duration: 1,
                delay: 1,
                ease: 'circ.out',
              }"
              class="grid grid-cols-3 place-items-center w-full opacity-0"
            >
              <div class="peace self-start transform -translate-y-24">
                <img src="/sketch-162443588438sdfs.png" alt="" />
              </div>

              <div>
                <h1
                  class="
                    acapulco
                    tracking-wider
                    text-9xl
                    md:text-9xl
                    lg:text-10xl
                    text-center
                    leading-none
                    text-gray-200
                  "
                >
                  Acapulco Design
                </h1>
              </div>
              <div class="transform -translate-y-24">
                <img src="/sketch-1624435884386sdfsd(1).png" alt="" />
              </div>
            </div>
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
            class="
              grid grid-cols-3
              place-items-center
              h-4/5
              firstContainer
              content
              mb-40
            "
          >
            <div class="logo">
              <img src="@/static/9757(2).png" alt="" />
            </div>
            <div class="limited justify-self-center">
              <h2
                class="
                  h2-home
                  capitalize
                  text-center text-5xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                <span class="limitedSpan animatedSpans">Limited</span>,
                <span class="animatedSpans">custom</span>,
                <i class="animatedSpans">handmade </i>
                <span class="animatedSpans"> merchendise by : </span>
              </h2>
            </div>
            <div class="logo">
              <img class="object-fill" src="@/static/9757(1).png" alt="" />
            </div>
          </div>

          <div
            class="
              grid grid-rows-2
              lg:grid-cols-2
              place-items-center
              h-4/5
              lg:h-screen
              lg:w-4/5
              secondContainer
              content
              mt-15
            "
          >
            <div class="textDiv flex flex-col order-last">
              <div class="flex flex-row align-center justify-center">
                <h3 class="text-6xl lg:text-7xl">Lighters</h3>
                <div class="w-1/2 lg:w-full">
                  <img
                    class="
                      transform
                      -translate-y-3
                      lg:pb-5
                      lg:pl-3
                      scale-75
                      lg:scale-75
                    "
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
            class="
              grid grid-rows-2
              lg:grid-cols-2
              place-items-center
              h-4/5
              lg:h-screen
              lg:w-4/5
              thirdContainer
              content
            "
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
            class="
              grid grid-rows-2
              lg:grid-cols-2
              place-items-center
              h-4/5
              lg:h-screen
              lg:w-4/5
              forthContainer
              content
            "
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
            class="
              grid grid-row-2
              h-5/6
              lg:h-full
              place-items-center
              gap-4
              fifthContainer
              content
              mb-5
              justify-self-stretch
            "
          >
            <img
              class="absolute tropicalImage md:bg-cover bg-contain bg-center"
              src="/hhjhhUntitled-2.png"
              alt=""
            />

            <div class="collections lg:max-w-6xl md:max-w-2xl max-w-lg"></div>

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
            class="
              grid
              h-4/6
              md:h-5/6
              lg:h-screen
              grid-row-2
              place-items-center
              gap-4
              sixthContainer
              content
              mb-5
              mt-36
            "
          >
            <div class="flex flex-row flex-wrap w-5/6 h-2/6 justify-center">
              <h1 class="introText capitalize text-5xl lg:text-7xl text-center">
                We are a
                <span class="limitedSpan"> Creative Team </span>
                based in Iran
              </h1>
              <h3
                class="
                  learnMore
                  font-thin
                  text-4xl
                  lg:text-6xl
                  py-5
                  text-center
                "
              >
                If you want to know us more, maybe get a cup of coffee, you can!
                <!-- <button id="contactUsBtn" class="learnMoreBtn">
                <span class="learnMoreText"> Contact Us </span>
              </button> -->
              </h3>
            </div>
            <div class="md:h-5/6 h-4/6 flex align-center justify-center mt-36">
              <video width="720" height="140" autoplay loop muted class="">
                <source src="/Y064cQ6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            class="
              seventhContainer
              h-dialog
              lg:h-screen
              grid grid-rows-2
              gap-4
              bg-mainRed
              mt-36
            "
          >
            <div class="h-full flex align-center justify-center">
              <div class="h-4/5 w-3/4 flex justify-center">
                <div class="">
                  <h1
                    class="
                      ml-5
                      mt-6
                      font-mainFont font-extrabold
                      capitalize
                      text-7xl text-mainBlue
                    "
                  >
                    find us on social media!
                  </h1>
                </div>
              </div>
              <div
                class="
                  self-end
                  mr-9
                  z-10
                  transform
                  -translate-x-14
                  translate-y-7
                "
              >
                <img src="/ppp.png" alt="" />
              </div>
            </div>
            <div class="flex justify-end align-end">
              <img class="bg-cover" src="/fsdfsdf.png" alt="" />
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
import LazyHydrate from 'vue-lazy-hydration'

// import gsap from 'gsap'
export default {
  components: {
    LazyHydrate,
    Navbar: () => import('../layouts/Navbar.vue'),
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
    // this.animatePeaceSign()
  },
  transition: {
    mode: 'out-in',
    css: false,
   
    enter (el, done) {
      this.$gsap.from(el, 1, {
        rotationY: 360,
        transformOrigin: '50% 80%',
        ease: 'Back.easeOut'
      })
      done()
    },
    leave (el, done) {
      this.$gsap.from(el, 1, {
        rotationY: 180,
        transformOrigin: '80% 50%',
        ease: 'Back.easeIn'
      })
      done()
    }
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
    // animatePeaceSign() {
    //   const gsap = this.$gsap
    //   gsap.to('.peaceSign', {
    //     opacity: 1,
    //     rotation: 27,
    //     scrollTrigger: {
    //       start: 'top top',
    //       end: 'bottom center',
    //       scrub: 0.5,
    //       trigger: '.peaceSignDiv',
    //       marker: true,
    //     },
    //   })
    // },

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
      const spans = this.$gsap.utils.toArray('.animatedSpans')
      spans.forEach((span) => {
        this.$gsap.from(span, {
          fontSize: 130,
          opacity: 0,
          autoRound: false,
          ease: 'Sine.easeOut',
          scrollTrigger: {
            start: 'top bottom',
            scrub: 0.5,
            end: 'top 70%',
            trigger: span,
          },
        })
      })

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
              stagger: 0.1,

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
  cursor: pointer;
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

.pictureDiv:hover {
  transition: ease-in-out 0.5s;

  transform: scale(1.02);
}

.collections {
  cursor: pointer;
  /* transition: linear; */
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

.collections:hover {
  transform: scale(1.02);
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
  font-family: 'Sail';
  text-shadow: 4px 4px 0px #eb452b, 8px 8px 0px #efa032, 12px 12px 0px #0abac0,
    16px 16px 0px #8338ec, 20px 20px 0px #0ba832, 24px 24px 0px #0a60ff,
    28px 28px 0px #7eb82d, 32px 32px 0px #ff4a68, 36px 36px 0px #00076e;
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
