<template>
  <v-app>
    <div id="mainStyle">
      <Navbar
        v-gsap.to="{
          opacity: 1,
          duration: 1.5,
          delay: 1,
          ease: 'circ.out',
        }"
        class="mt-4"
      />
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: Navbar,
}
</script>

<style scoped>
#mainStyle {
  animation: 30s ease-in-out infinite alternate-reverse color-change;
  height: 100%;
}
@-webkit-keyframes color-change {
  0% {
    background-color: #ade7e7;
  }

  45% {
    background-color: #a6a6db;
  }

  100% {
    background-color: #d8bbff;
  }
}

@keyframes color-change {
  0% {
    background-color: #83f1f1;
  }

  50% {
    background-color: #55dd8e;
  }

  100% {
    background-color: #595bee;
  }
}
</style>
