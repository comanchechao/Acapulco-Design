<template>
  <v-app id="orginal">
    <canvas id="bg"></canvas>
    <div class="navbar absolute">
      <LazyHydrate when-idle>
        <Navbar class="w-full top-0 mt-4 navbar absolute z-50" />
      </LazyHydrate>
    </div>
    <div class="whoAreWe w-full flex flex-row content-around self-center absolute">
      <h1 class="opacity-0 text-3xl text-Amber-300 who">WHO </h1>
      <h1 class="opacity-0 text-3xl text-Amber-300 are">ARE </h1>
      <h1 class="opacity-0 text-3xl text-Amber-300 we">WE </h1>
      <h1 class="opacity-0 text-3xl text-Amber-300 mark">???????????</h1>
    </div>

    <div class="absolute h-screen">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quis aperiam voluptas veritatis magni ipsum id aspernatur asperiores deleniti molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi debitis perferendis, ex consequatur molestias porro illo, sapiente quo architecto eius, dolorum ipsam at iure consectetur. Quibusdam nemo necessitatibus commodi veniam. Ratione cum sunt blanditiis deleniti. Ad, rerum, laboriosam similique alias in assumenda corporis ducimus voluptatum perferendis repellat fugit hic commodi fugiat at quis fuga? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptas dolor vero at sapiente aliquam quo animi enim dicta atque.</div>
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
    ring2.position.set(0, 1, -1)

    const RingGeometry1 = new THREE.RingGeometry(11, 9, 32)
    const RingMaterial1 = new THREE.MeshBasicMaterial({
      map: RingTexture,
      side: THREE.DoubleSide,
    })
    const ring1 = new THREE.Mesh(RingGeometry1, RingMaterial1)

    scene.add(ring1)
    ring1.position.set(0, 1, -1)

    const RingGeometry = new THREE.RingGeometry(8, 7, 32)
    const RingMaterial = new THREE.MeshBasicMaterial({
      map: RingTexture,
      side: THREE.DoubleSide,
    })
    const ring = new THREE.Mesh(RingGeometry, RingMaterial)
    scene.add(ring)
    ring.position.set(0, 1, -1)

    // planet
    const planetTexture = new THREE.TextureLoader().load('/earth1.jpg')

    const planetGeometry = new THREE.SphereGeometry(5, 32, 32)
    const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture })
    const sphere = new THREE.Mesh(planetGeometry, planetMaterial)
    scene.add(sphere)
    // lights
    const pointLight = new THREE.PointLight(0xFFFFFF)
    pointLight.position.set(5, 20, 5)

    const ambientLight = new THREE.AmbientLight(0xFFFFF0)

    scene.add(pointLight, ambientLight)

    // helpers

    // const lightHelper = new THREE.PointLightHelper(pointLight)
    // const gridHelper = new THREE.GridHelper(200, 50)
    // scene.add(lightHelper, gridHelper)

    // orbit controls

    // scene background

    const beachTexture = new THREE.TextureLoader().load('/Space4.jpg')
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

    function animate() {
      requestAnimationFrame(animate)
      ring.rotation.z += 0.01
      ring.rotation.x += 0.005

      ring1.rotation.z += -0.01
      ring1.rotation.x += -0.005

      ring2.rotation.z += 0.005
      ring2.rotation.x += 0.005

      sphere.rotation.y += 0.001

      renderer.render(scene, camera)
    }

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top

      scene.rotation.z = t * -0.01
      scene.rotation.y = t * -0.002
    }

    document.body.onscroll = moveCamera
    animate()
  },
  methods: {
    WhoAnimate() {
      const gsap = this.$gsap
      const tl = gsap.timeline()

      tl.to('.navbar', 1 , {
        zIndex: 100,
        width: '100%'


      })

      tl.to('.who', 1, {
        rotation: 360,
        opacity: 1,
        x: 530,
        y: 100,
        transformOrigin: 'left top',
      })
      tl.to('.are', 1, {
        rotation: 360,
        opacity: 1,
        x: 580,
        y: 100,
        transformOrigin: 'left top',
      })
      tl.to('.we', 1, {
        rotation: 360,
        opacity: 1,
        x: 620,
        y: 100,
        transformOrigin: 'left top',
      })
      tl.to('.mark', 1, {
        rotation: 360,
        opacity: 1,
        x: 530,
        y: 150,
        transformOrigin: 'left top',
      })
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

.whoAreWe{font-family: 'Do Hyeon', sans-serif;
}
</style>
