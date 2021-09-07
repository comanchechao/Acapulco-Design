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
      <!-- <h1 class="opacity-0 mark">?</h1> -->
    </div>

    <div class="absolute grid-row-6 grid-col-2 h-full">
      <div class="h-screen justify-center flex flex-col">
        <div class="follow justify-center opacity-0 w-0 h-0 rounded">
          <h2 class="text-CoolGray-300 self-center">follow along</h2>
        </div>
      </div>
      <div class="h-1/2 justify-center flex flex-col">
        <div class="secend px-2 bg-Lime-500 justify-center opacity-0 w-0 h-0 rounded">
          <h2>Hi. we are a bunch of guys</h2>
        </div>
      </div>
      <div class="h-1/2 justify-center flex flex-col">
        <div class="justify-center w-0 h-0 rounded opacity-0 third px-2 bg-Lime-500">
          <h2>From a less known city of a dystopian country,</h2>
        </div>
      </div>
      <div class="h-1/2 justify-center flex flex-col">
        <div class="fourth px-2 bg-Lime-500 justify-center opacity-0 w-0 h-0 rounded">
          <h2>
            While we're not lost and consumed by the sheer pressure of human
            survival
          </h2>
        </div>
      </div>
      <div class="h-1/2 justify-center flex flex-col">
        <div class="fifth px-2 bg-Lime-500 justify-center opacity-0 w-0 h-0 rounded">
          <h2>We tend to smoke, and create stuff</h2>
        </div>
      </div>
      <div class="h-1/2 justify-center flex flex-col">
        <div class="sixth px-2 bg-Lime-500 justify-center opacity-0 rounded">
          <h2>In the hope of finding the long lost peace that we all crave</h2>
        </div>
      </div>
      <div class="h-screen justify-center flex flex-col">
        <div class="seventh p-2 justify-center opacity-0 rounded flex flex-col">
          <h2 class="">Along the way.</h2>
          <NuxtLink to="/">
            <span
              class="
                menu
                px-5
                text-4xl
                rounded-full
                bg-Lime-500
                text-gray-100
                font-semibold
              "
            >
              back to our shopping journey ..
            </span>
          </NuxtLink>
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

    const RingGeometry2 = new THREE.RingGeometry(26, 22, 32)
    const RingMaterial2 = new THREE.MeshBasicMaterial({
      map: RingTexture,
      side: THREE.DoubleSide,
    })
    const ring2 = new THREE.Mesh(RingGeometry2, RingMaterial2)

    scene.add(ring2)
    ring2.position.set(10, 0, 0)

    const RingGeometry1 = new THREE.RingGeometry(21, 17, 32)
    const RingMaterial1 = new THREE.MeshBasicMaterial({
      map: RingTexture,
      side: THREE.DoubleSide,
    })
    const ring1 = new THREE.Mesh(RingGeometry1, RingMaterial1)

    scene.add(ring1)
    ring1.position.set(10, 0, 0)

    const RingGeometry = new THREE.RingGeometry(16, 11, 32)
    const RingMaterial = new THREE.MeshBasicMaterial({
      map: RingTexture,
      side: THREE.DoubleSide,
    })
    const ring = new THREE.Mesh(RingGeometry, RingMaterial)
    scene.add(ring)
    ring.position.set(10, 0, 0)

    // planet
    const planetTexture = new THREE.TextureLoader().load('/earth1.jpg')

    const planetGeometry = new THREE.SphereGeometry(9, 32, 32)
    const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture })
    const sphere = new THREE.Mesh(planetGeometry, planetMaterial)
    scene.add(sphere)
    sphere.position.set(10, 0, 0)
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
      //  const t = document.body.getBoundingClientRect().top

      // scene.rotation.x = t * -0.002

      ring.rotation.y -= 0.05

      ring1.rotation.y -= -0.05

      ring2.rotation.y -= 0.05

      sphere.rotation.x -= 0.01
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
          x: 200,
          y: 100,
          transformOrigin: 'left top',
          ease: 'back.out(1.7)',
        }
      )
      tl.fromTo(
        '.are',
        0.5,
        { y: -800, opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 220,
          y: 110,
          transformOrigin: 'left top',
          ease: 'back.out(1.7)',
        }
      )
      tl.fromTo(
        '.we',
        0.5,
        { y: -800, opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 240,
          y: 120,
          transformOrigin: 'left top',
          ease: 'back.out(1.7)',
        }
      )
      tl.fromTo(
        '.mark',
        0.5,
        { y: -800, opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 210,
          y: 180,
          transformOrigin: 'left top',
          ease: 'back.out(1.7)',
        }
      )
      tl.fromTo(
        '.follow',
        1,
        {
          x: 600,
          y: -800,
          
        },
        {
          opacity: 1,
          width: '300px',
          height: '150px',
          x: 300,
          y: 280,
          transformOrigin: 'left top',
          ease: 'expo.out',
        }
      )

      tl.fromTo(
        '.secend',
        1,
        {
          x: -600,
        },
        {
          x: 50,
          opacity: 1,
          width: '500px',
          height: '150px',
          y: 100,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.secend',
            start: 'top bottom',
            end: 'top center',
            scrub: 1,
            toggleActions: 'restart none resume pause',
          },
        }
      )
      tl.fromTo(
        '.third',
        1,
        {
          x: -200,
        },
        {
          x: 40,
          opacity: 1,
          width: '500px',
          height: '150px',
          y: 100,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.third',

            end: 'bottom center',
            start: 'top bottom',
            scrub: 1,
            toggleActions: 'restart none resume pause',
          },
        }
      )
      tl.fromTo(
        '.fourth',
        1,
        {
          x: -100,
        },
        {
          x: 50,
          opacity: 1,
          width: '550px',

          height: '220px',
          y: 100,
          scrollTrigger: {
            trigger: '.fourth',
            start: 'top bottom',
            end: 'bottom center',
            scrub: 1,
            toggleActions: 'restart none resume pause',
          },
        }
      )
      tl.fromTo(
        '.fifth',
        1,
        {
          x: -200,
        },
        {
          x: 40,
          opacity: 1,
          width: '500px',

          start: 'top 110%',
          height: '150px',
          y: 100,
          scrollTrigger: {
            trigger: '.fifth',
            start: 'top bottom',
            end: 'bottom center',
            scrub: 1,
            toggleActions: 'restart none resume pause',
          },
        }
      )
      tl.fromTo(
        '.sixth',
        1,
        {
          x: -200,
        },
        {
          x: 100,
          opacity: 1,
          width: '800px',
          height: '150px',
          y: 100,
          scrollTrigger: {
            trigger: '.sixth',

            end: 'bottom center',
            start: 'top bottom',
            scrub: 1,
            toggleActions: 'restart none resume pause',
          },
        }
      )
      tl.fromTo(
        '.seventh',
        1,
        {
          x: 600,
          y: 50,
          scale: 0.1,
        },
        {
          y: 1200,
          x: 300,
          scale: 1,
          opacity: 1,
          width: '800px',
          height: '150px',
          scrollTrigger: {
            trigger: '.seventh',

            end: 'bottom center',
            start: 'top bottom',
            scrub: 1,
            toggleActions: 'restart none resume pause',
          },
        }
      )
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
  background-color: black;
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
  color: #0717aa;
}
.whoAreWe {
  font-family: 'Fascinate Inline', cursive;
  font-size: 80px;
  color: #eb6b16;
}
</style>
