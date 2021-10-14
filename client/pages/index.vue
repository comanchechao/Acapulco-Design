<template>
  <v-app>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
      integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
      crossorigin="anonymous"
    />
    <div id="main" class="w-screen">
      <Navbar
        id="navbar"
        v-gsap.to="{
          opacity: 1,
          duration: 1,
          ease: 'circ.out',
        }"
        class="navbar"
      />
      <div class="w-screen overflow-hidden">
        <div class="grid place-items-center w-screen">
          <!-- <div
            v-gsap.to="{
              opacity: 1,
              duration: 0.6,
              delay: 1,
              ease: 'circ.out',
            }"
            class="
              absolute
              top-3
              justify-self-center
              self-start
              peaceSignDiv
              opacity-0
              transform
              scale-50
              lg:scale-100
            "
          >
            <img class="peaceSign m-auto" src="/moomoole.png" alt="" />
          </div> -->
          <div
            v-gsap.to="{
              opacity: 1,
              duration: 1,
              delay: 1,
              ease: 'circ.out',
            }"
            class="
              mt-7
              acapulco-div
              lg:h-screen
              px-5
              lg:px-0
              w-screen
              h-dialog
              flex flex-col
              lg:flex-row
              align-center
              justify-between
              opacity-0
              relative
              mb-32
            "
          >
            <div
              class="
                peace
                z-10
                lg:max-w-xl
                h-2/5
                w-full
                transform
                lg:-translate-x-24
              "
            >
              <img
                class="
                  object-contain
                  w-full
                  h-full
                  drop-shadow-2xl
                  transform
                  lg:-rotate-90
                "
                src="/sketch-162443588438sdfs.png"
                alt=""
              />
            </div>

            <div
              class="
                w-full
                h-full
                flex
                align-center
                justify-center
                md:align-start
                absolute
                m-auto
              "
            >
              <h1
                class="
                  acapulco
                  tracking-wider
                  text-7xl
                  md:text-9xl
                  lg:text-10xl
                  text-center
                  leading-none
                  text-gray-100
                "
              >
                Acapulco Design
              </h1>
            </div>
            <div class="lg:max-w-xl z-10 h-2/5 w-full">
              <img
                class="
                  object-contain
                  w-full
                  h-full
                  drop-shadow-2xl
                  rotate-180
                  lg:rotate-90
                  transform
                  lg:translate-x-24
                "
                src="/sketch-162443588438sdfs.png"
                alt=""
              />
            </div>
          </div>
          <!-- <div
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
              <v-icon class="transform scale-125" x-large
                >mdi-arrow-up-down</v-icon
              >
            </v-btn>
          </div> -->
          <div
            class="
              flex
              h-screen
              w-screen
              justify-center
              align-center
              firstContainer
              content
              relative
            "
          >
            <div
              class="
                transform
                -translate-x-32
                lg:-translate-x-0
                inset-y-0
                left-0
                absolute
                z-10
                max-w-xs
                lg:max-w-xl
              "
            >
              <img class="object-cover" src="/whatwhat.png" alt="" />
            </div>
            <div
              class="
                absolute
                p-16
                inset-0
                lg:h-full
                h-3/4
                flex
                justify-start
                align-center
                lg:p-96
              "
            >
              <h2
                class="
                  sm:w-96
                  h2-home
                  text-center
                  capitalize
                  font-bold
                  text-4xl
                  md:text-7xl
                  lg:text-9xl
                  transform
                  sm:m-auto
                "
              >
                <span class="text-mainRed animatedSpans">Limited</span>,
                <span class="animatedSpans">custom</span>,
                <i class="animatedSpans">handmade </i>
                <span class="animatedSpans"> merchendise</span>
              </h2>
            </div>
            <div
              class="
                transform
                translate-x-24
                lg:-translate-x-0 lg:max-w-xl
                inset-y-0
                right-0
                absolute
                z-10
                max-w-xs
              "
            >
              <img
                class="object-cover transform rotate-180"
                src="/whatwhat.png"
                alt=""
              />
            </div>
          </div>

          <div
            class="
              lg:mt-28
              h-screen
              w-screen
              flex flex-col
              lg:flex-row
              align-center
              justify-center
              space-y-9
              p-20
              lg:p-48
              justify-self-stretch
              forthContainer
              content
            "
          >
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3 class="text-6xl lg:text-7xl p-5 text-center">Lighters</h3>
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
                    <span class="px-9 py-5 learnMoreText"> Learn More </span>
                  </button>
                </NuxtLink>
              </div>
            </div>
            <div
              class="
                pictureDiv
                lg:order-last
                max-w-lg
                cursor-pointer
                bg-red-200
                sm:max-h-80
                h-full
                lg:max-w-2xl
                md:max-w-2xl
                shadow-2xl
                w-full
                overflow-hidden
              "
            >
              <!-- <img
                src="/lighters.png"
                class="lg:object-cover object-cover m-auto"
                alt=""
              /> -->
            </div>
          </div>

          <div
            class="
              h-screen
              w-screen
              flex flex-col
              lg:flex-row
              align-center
              justify-center
              space-y-6
              p-20
              lg:p-48
              justify-self-stretch
              thirdContainer
              content
            "
          >
            <div
              class="
                pictureDiv
                lg:order-first
                max-w-lg
                cursor-pointer
                bg-red-200
                h-full
                sm:max-h-80
                lg:max-w-xl
                md:max-w-xl
                shadow-2xl
                w-full
                flex flex-col-reverse
                justify-start
                align-end
              "
            >
              <h1
                class="
                  m-3
                  font-mainFont
                  rounded-full
                  py-2
                  px-8
                  text-mainBlue
                  bg-goldie
                  text-2xl
                  lg:text-3xl
                  font-bold
                "
              >
                Coming Soon...
              </h1>
              <v-img> </v-img>
            </div>
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3 class="text-6xl p-5 text-center">Acapulco Shirts</h3>
                <!-- <img class="transform scale-75" src="/fsdf.png" alt="" /> -->
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
              h-screen
              w-screen
              flex flex-col
              lg:flex-row
              align-center
              justify-center
              space-y-6
              p-20
              lg:p-48
              justify-self-stretch
              forthContainer
              content
            "
          >
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3 class="text-6xl lg:text-7xl p-5 text-center">
                  Custom Matchboxes💥
                </h3>
              </div>
              <div class="self-center">
                <NuxtLink to="/productList">
                  <button class="learnMoreBtn">
                    <span class="px-9 py-5 learnMoreText"> Learn More </span>
                  </button>
                </NuxtLink>
              </div>
            </div>
            <div
              class="
                pictureDiv
                lg:order-last
                max-w-lg
                cursor-pointer
                bg-red-200
                h-full
                lg:max-w-2xl
                md:max-w-2xl
                shadow-2xl
                w-full
              "
            ></div>
          </div>
          <div
            class="
              h-screen
              w-screen
              flex flex-col
              lg:flex-row
              align-center
              justify-center
              space-y-6
              p-20
              lg:p-48
              justify-self-stretch
              thirdContainer
              content
            "
          >
            <div
              class="
                pictureDiv
                lg:order-first
                max-w-lg
                cursor-pointer
                bg-red-200
                h-full
                lg:max-w-xl
                md:max-w-xl
                shadow-2xl
                w-full
                flex flex-col-reverse
                justify-start
                align-end
                space-x-2
              "
            >
              <h1
                class="
                  m-3
                  font-mainFont
                  rounded-full
                  py-2
                  px-8
                  text-mainBlue
                  bg-goldie
                  text-2xl
                  lg:text-3xl
                  font-bold
                "
              >
                Coming Soon...
              </h1>
              <v-img> </v-img>
            </div>
            <div class="textDiv flex flex-col order-last">
              <div class="flex-row-reverse align-center justify-center">
                <h3 class="text-6xl p-5 text-center">Acapulco Shorts</h3>
                <!-- <img class="transform scale-75" src="/fsdf.png" alt="" /> -->
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
              h-screen
              w-screen
              flex flex-col
              align-center
              justify-center
              space-y-6
              p-20
              justify-self-stretch
              thirdContainer
              content
            "
          >
            <div
              class="
                pictureDiv
                max-w-lg
                cursor-pointer
                bg-red-200
                h-full
                lg:max-w-6xl
                md:max-w-2xl
                shadow-2xl
                w-full
                flex flex-col-reverse
                justify-start
                align-end
              "
            >
              <h1
                class="
                  m-3
                  font-mainFont
                  rounded-full
                  py-2
                  px-8
                  text-mainBlue
                  bg-goldie
                  text-2xl
                  lg:text-3xl
                  font-bold
                "
              >
                Coming Soon...
              </h1>
              <v-img> </v-img>
            </div>
            <div class="textDiv flex flex-col order-last">
              <div class="flex justify-end">
                <h3 class="text-6xl p-5 text-center">Acapulco Hoodies</h3>
                <img
                  src="/Hoodie.png"
                  class="transform scale-95 object-contain lg:scale-100"
                  alt=""
                />
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
              h-screen
              fifthContainer
              flex flex-col
              align-center
              justify-center
              space-y-6
              content
              p-20
              justify-self-stretch
            "
          >
            <div
              class="
                pictureDiv
                collections
                x-w-lg
                cursor-pointer
                bg-red-200
                h-full
                lg:max-w-6xl
                md:max-w-2xl
                shadow-2xl
                w-full
              "
            ></div>

            <div class="textDiv">
              <h3 class="text-6xl mt-3 text-center">Collections 🗿</h3>
            </div>
            <NuxtLink to="/productList">
              <button class="learnMoreBtn">
                <span class="px-9 py-8 learnMoreText"> Learn More </span>
              </button>
            </NuxtLink>
            <div></div>
          </div>

          <div
            class="
              w-screen
              lg:p-44
              flex
              align-center
              h-screen
              lg:h-screen
              grid-row-2
              justify-center
              sixthContainer
              content
            "
          >
            <div class="flex flex-row flex-wrap w-5/6 h-2/6 justify-center">
              <h1
                class="
                  introText
                  capitalize
                  text-5xl
                  lg:text-7xl
                  text-center
                  bg-goldie
                  p-2
                "
              >
                We are a
                <span class="limitedSpan"> Creative Team </span>
                based in Iran
              </h1>
              <h3
                class="
                  px-2
                  learnMore
                  font-thin
                  text-4xl
                  lg:text-6xl
                  py-5
                  text-center
                "
              >
                If you want to know us more, maybe get a cup of coffee, you can!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<!-- <Footer /> -->
<!-- <div class="flex align-center justify-center">
              <video
                class="object-contain md:object-scale-down"
                width="320"
                height="220"
                autoplay
                loop
                muted
              >
                <source src="/Y064cQ6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> -->

<!-- <div class="">

</v-app>
      <h1 class="acapulco text-center"></h1>
    </div> -->

<script>
// import gsap from 'gsap'
export default {
  components: {
    // Footer: () => import('../layouts/Footer.vue'),
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
    // this.animateScrollDownBtn()
    // this.peaceSignAnimation()
    this.animatePeaceSign()
  },
  transition: {
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, { opacity: 0 })
    },
    enter(el, done) {
      this.$gsap.to(el, 1, { opacity: 1 })
      done()
    },
    leave(el, done) {
      this.$gsap.to(el, 1, { opacity: 0 })
      done()
    },
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
        tl.from(pictureDiv, {
          opacity: 0,
          scale: 0.5,
          ease: 'Sine.easeOut',
          scrollTrigger: {
            trigger: pictureDiv,
            scrub: true,

            start: 'top bottom',
            end: 'top center',
            toggleActions: 'play none none reverse',
          },
        })
      })
    },

    // peaceSignAnimation() {
    //   const gsap = this.$gsap

    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         trigger: '.peaceSignDiv',
    //         pin: true,
    //         scrub: 0.2,
    //         start: 'top top',
    //         end: '+=10000',
    //       },
    //     })
    //     .to('.peaceSignDiv', {
    //       rotation: 360 * 5,
    //       scale: 0.8,
    //       opacity: 0.8,
    //       duration: 1,
    //       y: 500,
    //       ease: 'none',
    //     })
    // },\

    animatePeaceSign() {
      const gsap = this.$gsap

      gsap
        .timeline({
          scrollTrigger: {
            start: 'top top',
            end: '+=8000',
            scrub: 2,
            trigger: '.peaceSignDiv',
            marker: true,
          },
        })
        .to('.peaceSign', {
          opacity: 0,
          rotation: 360 * 7,
          duration: 0.2,
          scale: 0.2,
        })
    },

    // animateScrollDownBtn() {
    //   const gsap = this.$gsap
    //   const tl = gsap.timeline({ repeat: -1, yoyo: true })
    //   tl.fromTo(
    //     '.scrollDownBtn',
    //     1,
    //     { ease: 'power1.inOut', y: 20 },
    //     { ease: 'power1.inOut', y: -20 }
    //   )
    // },
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
        this.$gsap.fromTo(
          span,
          {
            y: 200,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            ease: 'Sine.easeOut',
            scrollTrigger: {
              start: 'top bottom',
              scrub: 1.5,
              end: 'top 70%',
              trigger: span,
              stagger: 0.1,
            },
          }
        )
      })

      const contents = this.$gsap.utils.toArray('.content')
      contents.forEach((content) => {
        this.$gsap.fromTo(
          content,
          {
            y: -120,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
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
  transform: scale(1.05);
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

/* .pictureDiv {
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

@media only screen and (max-width: 480px) {
  .pictureDiv {
    transform: scale(0.5);
  }
} */

.pictureDiv {
  transition: ease-in-out 0.3s;
}

.pictureDiv:hover {
  transform: scale(1.02);
}

.collections {
  transition: ease-in-out 0.3s;
}

.collections:hover {
  transform: scale(1.02);
}

.peaceSignDiv {
  position: sticky;
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
  text-shadow: 2px 2px 0px #aa9a3c, 4px 4px 0px #efff0b, 8px 8px 0px #9bd300,
    12px 12px 0px #1e800b, 16px 16px 0px #16ff5c, 20px 20px 0px #7be68a,
    24px 24px 0px #00ffd5, 28px 28px 0px #0077ff, 32px 32px 0px #3a007c;
}

@media only screen and (max-width: 414px) {
  .acapulco {
    font-family: 'Sail';
    text-shadow: 0.5px 0.5px 0px #aa9a3c, 1px 1px 0px #efff0b,
      1.5px 1.5px 0px #9bd300, 2px 2px 0px #1e800b, 3px 3px 0px #16ff5c,
      4px 4px 0px #7be68a, 5px 5px 0px #00ffd5, 6px 6px 0px #0077ff,
      7px 7px 0px #3a007c;
  }
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
  color: #be0a46;
}

input::-moz-focus-inner {
  border: 0;
  padding: 0;
  margin-top: -2px;
  margin-bottom: -2px;
}
</style>
