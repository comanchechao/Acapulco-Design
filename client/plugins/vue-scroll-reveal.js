import VueScrollReveal from 'vue-scroll-reveal'
import Vue from 'vue'


// custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 700,
  scale: 1.2,
  distance: '30px',
  mobile: true,
})
