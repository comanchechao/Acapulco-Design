<template>
  <v-app class="body">
    <!-- peace thing
    <a href="https://www.freepik.com/vectors/background"
      >Background vector created by freepik - www.freepik.com</a
    >
    the hippies
    <a href="https://www.freepik.com/vectors/vintage"
      >Vintage vector created by macrovector - www.freepik.com</a
    > -->
    <div id="main" class="panelContainer bg-Sky-600">
      <LazyHydrate class="z-50" when-idle>
        <Navbar
          v-gsap.to="{
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: 'circ.out',
          }"
          class="absolute z-50"
        />
      </LazyHydrate>
      <section class="panel1 w-screen h-screen">
        <img class="hippie1" src="/hippie1.png" alt="" />
        <div class="m-1 hippie1-text">
          Hi. we are a bunch of guys From a less known city of a dystopian
          country
        </div>
      </section>
      <section
        class="panel2 grid content-start place-content-center w-screen h-screen"
      >
        <img class="hippie2 justify-self-center" src="/hippie2.png" alt="" />
        <div class="m-1 hippie2-text">
          While we're not lost and consumed by the sheer pressure of human
          survival We tend to smoke, and create stuff
        </div>
      </section>
      <section class="panel3 w-screen h-screen">
        <img class="hippie3" src="/hippie3.png" alt="" />
        <div class="m-1 hippie3-text">
          In the hope of finding the long lost peace that we all crave Along the
          way.
        </div>
      </section>
    </div>
    <!-- <div class="panels"> Hi. we are a bunch of guys From a less known city of a dystopian
            country While we're not lost and consumed by the sheer pressure of
            human survival We tend to smoke, and create stuff In the hope of
            finding the long lost peace that we all crave Along the way.</div>
        </div> -->
  </v-app>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,
    Navbar: () => import('../layouts/Navbar.vue'),
  },

  mounted() {
    const gsap = this.$gsap

    gsap.from('.hippie2', {
      y: -350,
      ease: 'Power2.easeIn',
      scrollTrigger: {
        trigger: '.panel2',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
        toggleActions: 'restart none resume pause',
      },
    })
    gsap.from('.hippie2-text', {
      opacity: 0,
      scale: 0.2,
      x: 200,
      ease: 'Power2.easeIn',
      scrollTrigger: {
        trigger: '.panel2',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
        toggleActions: 'restart none resume pause',
      },
    })
    gsap.from('.hippie3', {
      y: -350,
      ease: 'Power2.easeIn',
      scrollTrigger: {
        trigger: '.panel3',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
        toggleActions: 'restart none resume pause',
      },
    })

    // tl.to('.panelContainer', 5, { x: -window.innerWidth })

    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: '.panelContainer',
    //   start: 'center center',
    //   end: '+=4000',
    //   scrub:true,
    //   pin: true
    // })

    // const totalPanels = document.querySelectorAll('.panels')
    // const totalPanelCount = totalPanels.length
    // console.log(totalPanelCount)

    // const gsap = this.$gsap
    // const panels = gsap.utils.toArray('.panels')

    // gsap.to(panels, {
    //   xPercent: -100 * (totalPanelCount - 1),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.panelContainer',
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (totalPanelCount - 1),
    //     end: () => '+=' + document.querySelector('.panelContainer').offsetWidth,
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //   },
    // })
  },
}
</script>

<style scoped>
.panelContainer {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 25px;
}
/* .body{
  min-height: 100vh;
  margin: 0;
}
.panelContainer {
  display: flex;
  flex-wrap: nowrap;
  
}

.panels {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
} */
</style>