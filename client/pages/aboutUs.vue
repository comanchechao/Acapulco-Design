<template>
  <v-app>
    <div id="main" class="w-screen h-screen">
      <div class="grid w-screen h-screen grid-cols-2 grid-rows-3">
        <div
          class="
            container
            m-4
            title-div
            w-full
            flex flex-col
            rounded
            h-32
            content-center
            justify-center
            col-span-2
            bg-Amber-500
          "
        >
          <h1 class="who text-center text-3xl text-blue-600">Who are We?</h1>
        </div>

        <!-- <div class="bg-transparent border-2  h-32 container justify-center col-span-2">
          <h2 class="text-white">here</h2>
        </div> -->

        <div class="flex flex-row w-full justify-content-center">
          <div class="flex justify-center">
            <div
              class="
                rounded-full
                items-center
                justify-center
                h-80
                w-48
                bg-pink-500
              "
            >
              <p class="text-center">Magical</p>
            </div>
          </div>

          <div class="flex justify-center">
            <div
              class="
                rounded-full
                items-center
                justify-center
                h-80
                w-48
                bg-CoolGray-500
              "
            >
              <p class="text-center">Web DEv</p>
            </div>
          </div>
        </div>
        <div class="flex w-full flex-row justify-content-center">
          <div class="flex justify-center">
            <div
              class="
                rounded-full
                items-center
                justify-center
                h-80
                w-48
                bg-Emerald-500
              "
            >
              <p class="text-center">Artworks</p>
            </div>
          </div>

          <div class="flex justify-center">
            <div
              class="welcome rounded-full justify-center h-80 w-48 bg-gray-600"
              @mouseleave="hoverReverse"
              @mouseenter="hoverAnimation"
            >
              <p class="text-center alcapulco">Music</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p>ESO/VISTA/J. Emerson, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons</p> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
    }
  },

  // mounted() {
  //   const gsap = this.$gsap
  //   gsap.to('.title-div', 30, {
  //     backgroundPosition: '150% 20%',
  //   })
  // },
  methods: {
    hoverAnimation() {
      const gsap = this.$gsap
      gsap.to('.welcome', {
        scale: 1.2,
        backgroundColor: 'linear-gradient(321deg, #03dda5, #ffe40a)',
        ease: 'Power1.easeOut',
      })
    },
    hoverReverse() {
      const gsap = this.$gsap
      gsap.to('.welcome', {
        scale: 1,
        ease: 'Power3.easeOut',
      })
    },
  },
}
</script>

<style scoped>
#main {
  background-image: url('/beach.jpg');
  background-position: center;
  background-size: 150%;
  background-repeat: no-repeat;
  z-index: 2;
}

.title-div {
  background-image: url('/EyeNebula.jpg');
  animation: backgroundEffect 20s ease-in-out infinite alternate;
  background-position: center;
  background-size: cover;
}

.who {
  font-family: 'Tourney', cursive;
  animation: colorEffect 20s ease-in-out infinite alternate;
}
@keyframes backgroundEffect {
  0% {
    background-position: 100% 100%;
  }
  25% {
    background-position: 80% 60%;
  }
  50% {
    background-position: 50 50%;
  }
  75% {
    background-position: 30% 10%;
  }
  100% {
    background-position: 0% 0%;
  }
}

@keyframes colorEffect {
  0% {
    color: rgb(111, 10, 206);
  }
  25% {
    color: rgb(255, 255, 89);
  }
  50%{
    color:rgb(4, 255, 58)
  }
  100% {
    color: rgb(0, 247, 255);
    font-size: 40px;
  }
}
</style>
