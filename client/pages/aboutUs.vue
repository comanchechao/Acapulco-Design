<template>
  <v-app id="orginal">
    <canvas id="bg"></canvas>
    <div class="navbar absolute">
      <LazyHydrate when-idle>
        <Navbar class="w-full top-0 mt-4 navbar absolute z-50" />
      </LazyHydrate>
    </div>
    <div
      class="whoAreWe w-full flex flex-row content-around self-center absolute"
    >
      <h1 class="opacity-0 who">WHO</h1>
      <h1 class="opacity-0 are">ARE</h1>
      <h1 class="opacity-0 we">WE?</h1>
    </div>

    <div class="absolute grid-row-6 grid-col-2 h-full">
      <div class="h-screen justify-center flex flex-col">
        <div class="follow justify-center opacity-0 w-0 h-0 rounded">
          <h2 class="text-CoolGray-300 self-center">follow along</h2>
        </div>
      </div>
      <div class="h-screen justify-center flex flex-col">
        <div class="secend justify-center opacity-0 w-0 h-0 rounded">
          <h2>Hi. we are a bunch of guys</h2>
        </div>
      </div>
      <div class="h-screen justify-center flex flex-col">
        <div class="justify-center w-0 h-0 rounded opacity-0 third">
          <h2>from a less known city of a dystopian country,</h2>
        </div>
      </div>
      <div class="h-screen justify-center flex flex-col">
        <div class="fourth justify-center opacity-0 w-0 h-0 rounded">
          <h2>
            while we're not lost and consumed by the sheer pressure of human
            survival
          </h2>
        </div>
      </div>
      <div class="h-screen justify-center flex flex-col">
        <div class="fifth justify-center opacity-0 w-0 h-0 rounded">
          <h2>we tend to smoke, and create stuff</h2>
        </div>
      </div>
      <div class="h-screen justify-center flex flex-col">
        <div class="sixth justify-center opacity-0 rounded">
          <h2>
            in the hope of finding the long lost peace that we all crave along
            the way.
          </h2>
        </div>
      </div>
    </div>
    <!-- <p>ESO/VISTA/J. Emerson, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons</p>
    Photo by <a href="https://unsplash.com/@thecreativv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">The Creativv</a> on <a href="https://unsplash.com/s/photos/stone-wall-texture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   -->
  </v-app>
</template>

<script>
import * as THREE from 'three'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,
    Navbar: () => import('../layouts/Navbar.vue'),
  },
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
  mounted() {
    this.WhoAnimate()

    // scene and camera

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.setZ(30)

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    })
    renderer.setSize(window.innerWidth, window.innerHeight, false)
    renderer.setPixelRatio = window.devicePixelRatio
    document.body.appendChild(renderer.domElement)

    // shapes

    // ring

    const RingTexture = new THREE.TextureLoader().load('/ring.jpg')

    const RingGeometry2 = new THREE.RingGeometry(14, 12, 32)
    const RingMaterial2 = new THREE.MeshBasicMaterial({
      map: RingTexture,
      side: THREE.DoubleSide,
    })
    const ring2 = new THREE.Mesh(RingGeometry2, RingMaterial2)

    scene.add(ring2)
    ring2.position.set(0, 0,0)

    const RingGeometry1 = new THREE.RingGeometry(11, 9, 32)
    const RingMaterial1 = new THREE.MeshBasicMaterial({
      map: RingTexture,
      side: THREE.DoubleSide,
    })
    const ring1 = new THREE.Mesh(RingGeometry1, RingMaterial1)

    scene.add(ring1)
    ring1.position.set(0, 0, 0)

    const RingGeometry = new THREE.RingGeometry(8, 7, 32)
    const RingMaterial = new THREE.MeshBasicMaterial({
      map: RingTexture,
      side: THREE.DoubleSide,
    })
    const ring = new THREE.Mesh(RingGeometry, RingMaterial)
    scene.add(ring)
    ring.position.set(0, 0, 0)

    // planet
    const planetTexture = new THREE.TextureLoader().load('/earth1.jpg')

    const planetGeometry = new THREE.SphereGeometry(5, 32, 32)
    const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture })
    const sphere = new THREE.Mesh(planetGeometry, planetMaterial)
    scene.add(sphere)
    // lights

    const spotLight = new THREE.SpotLight(0xFFFFFF)
    spotLight.position.set(0, 0, 100)

    const pointLight = new THREE.PointLight(0xFFFFFF)
    pointLight.position.set(5, 20, 5)

    const ambientLight = new THREE.AmbientLight(0xFFFFF0)

    scene.add(pointLight, ambientLight, spotLight)

    // helpers

    // const lightHelper = new THREE.PointLightHelper(pointLight)
    // const gridHelper = new THREE.GridHelper(200, 50)
    // scene.add(lightHelper, gridHelper)

    // orbit controls

    // scene background

    const beachTexture = new THREE.TextureLoader().load('/Space7.png')
    scene.background = beachTexture

    // 3d animations

    // stars function
    function addStars() {
      const starGeometry = new THREE.SphereGeometry(0.15, 24, 24)
      const starMaterial = new THREE.MeshBasicMaterial({ color: 16777095 })
      const star = new THREE.Mesh(starGeometry, starMaterial)

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100))

      star.position.set(x, y, z)
      scene.add(star)
    }

    Array(200).fill().forEach(addStars)

    // traiangles

    function particles() {
      const particleGeometry = new THREE.ConeGeometry(0.2, 0.8, 32, 20)
      const particleMaterial = new THREE.MeshBasicMaterial({ color: '#FB13DF' })

      const particle = new THREE.Mesh(particleGeometry, particleMaterial)

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100))

      particle.position.set(x, y, z)
      scene.add(particle)
    }

    Array(80).fill().forEach(particles)

    // animate function

    function animate() {
      requestAnimationFrame(animate)
      ring.rotation.z += 0.01
      ring.rotation.x += 0.005

      ring1.rotation.z += -0.01
      ring1.rotation.x += -0.005

      ring2.rotation.z += 0.005
      ring2.rotation.x += 0.005

      sphere.rotation.z += 0.001

      renderer.render(scene, camera)
    }

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top

      scene.rotation.z = t * -0.01
      scene.rotation.y = t * -0.002
      scene.rotation.x = t * -0.002
    }

    document.body.onscroll = moveCamera
    animate()
  },
  methods: {
    WhoAnimate() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.to('.navbar', 1, {
        zIndex: 100,
        width: '100%',
      })

      tl.fromTo(
        '.who',
        0.5,
        { y: -800, opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 400,
          y: 100,
          transformOrigin: 'left top',
          ease: "back.out(1.7)"
        }
      )
      tl.fromTo(
        '.are',
        0.5,
        { y: -800, opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 420,
          y: 110,
          transformOrigin: 'left top',
          ease: "back.out(1.7)"
        }
      )
      tl.fromTo(
        '.we',
        0.5,
        { y: -800, opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 440,
          y: 120,
          transformOrigin: 'left top',
          ease: "back.out(1.7)"
        }
      )
      tl.fromTo(
        '.mark',
        0.5,
        { y: -800, opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 410,
          y: 180,
          transformOrigin: 'left top',
          ease: "back.out(1.7)"
        }
      )
      tl.fromTo('.follow', 1, {
        x: 150,
        y: -800,
        ease: "slow(0.7, 0.7, false)"
      }, {
        opacity: 1,
        width: '300px',
        height: '150px',
        x: 150,
        y: 280,
        transformOrigin: 'left top',
      })
      tl.fromTo('.secend', 1 , {
        x: -600,
      }, {
        x: 50,
        opacity: 1,
        width: '500px',
        height: '150px',
        y: 100,
        ease: "slow(0.7, 0.7, false)",
        scrollTrigger: {
          trigger: '.secend',
          start: 'top 110%',
          end: 'top center',
          scrub: 1,
          toggleActions: 'restart none resume pause',
        },
      })
      tl.fromTo('.third',1 , {
        x: 1300
      }, {
        x: 900,
        opacity: 1,
        width: '500px',
        height: '150px',
        y: 100,
        scrollTrigger: {
          trigger: '.third',

          end: 'bottom center',
          start: 'top 110%',
          scrub: 1,
          toggleActions: 'restart none resume pause',
        },
      })
      tl.fromTo('.fourth',1 , {
        x:-100
      }, {
        x: 50,
        opacity: 1,
        width: '500px',

        height: '150px',
        y: 100,
        scrollTrigger: {
          trigger: '.fourth',
          start: 'top 110%',
          end: 'bottom center',
          scrub: 1,
          toggleActions: 'restart none resume pause',
        },
      })
      tl.fromTo('.fifth',1 , {
        x: 1300
      }, {
        x: 900,
        opacity: 1,
        width: '500px',

        start: 'top 110%',
        height: '150px',
        y: 100,
        scrollTrigger: {
          trigger: '.fifth',
          start: 'top 110%',
          end: 'bottom center',
          scrub: 1,
          toggleActions: 'restart none resume pause',
        },
      })
     tl.fromTo('.sixth',1 , {
       x: -200
     }, {
        x: 100,
        opacity: 1,
        width: '800px',
        height: '150px',
        y: 100,
        scrollTrigger: {
          trigger: '.sixth',

          end: 'bottom center',
          start: 'top 110%',
          scrub: 1,
          toggleActions: 'restart none resume pause',
        }})
    },
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
#orginal {
  position: absolute;
  margin: 0;
  z-index: -20;
}

#bg {
  position: fixed;
  top: 0;
  right: 0;
  z-index: -2222;
}

.navbar {
  z-index: 99;
}

h2 {
  font-family: 'Londrina Solid', cursive;
  font-size: 50px;
  color: #deff0a;
}
.whoAreWe {
  font-family: 'Fascinate Inline', cursive;
  font-size: 80px;
  color: #C70039;
}
</style>
