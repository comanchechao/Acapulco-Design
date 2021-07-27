<template>
<<<<<<< Updated upstream
  <v-app id="orginal">
    <canvas class="absolute w-full h-full"></canvas>
      <div class="w-full grid grid-cols-2 h-full absolute">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          delectus perspiciatis asperiores! Quasi, quas ab. Consectetur ullam
          vel sunt, esse tempora animi nihil.
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi dolorem, ut temporibus deleniti sit, eaque quibusdam ratione voluptatibus reiciendis nam. Doloremque, veniam.</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quae
          veniam laboriosam molestias, tenetur laborum ipsum officia natus eos.
          Error veritatis quod dolore nobis voluptates molestiae minus ex
=======
  <v-app>
    <div id="main" class="w-screen h-screen">
      <div class="grid w-screen h-screen grid-cols-2 grid-rows-3">
        <!-- <div
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
        </div> -->

        <div
          class="
            bg-transparent
            border-2
            h-32
            container
            justify-center
            col-span-2
          "
        >
          <h2 class="text-white">here</h2>
        </div>

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
>>>>>>> Stashed changes
        </div>
      </div>
    <!-- <p>ESO/VISTA/J. Emerson, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons</p>
    Photo by <a href="https://unsplash.com/@thecreativv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">The Creativv</a> on <a href="https://unsplash.com/s/photos/stone-wall-texture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   -->
  </v-app>
</template>

<script>
import * as THREE from 'three'

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
  mounted() {
    // scene and camera

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.setZ(30)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight ,false)
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
    const planetTexture = new THREE.TextureLoader().load('/earth.jpg')

    const planetGeometry = new THREE.SphereGeometry(5, 32, 32)
    const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture })
    const sphere = new THREE.Mesh(planetGeometry, planetMaterial)
    scene.add(sphere)
    // lights
    const pointLight = new THREE.PointLight(0xFFFFFF)
    pointLight.position.set(5, 5, 5)

    const ambientLight = new THREE.AmbientLight(0xFFFFF0)

    scene.add(pointLight, ambientLight)

    // helpers

    // const lightHelper = new THREE.PointLightHelper(pointLight)
    // const gridHelper = new THREE.GridHelper(200, 50)
    // scene.add(lightHelper, gridHelper)

    // orbit controls

    // scene background

    const beachTexture = new THREE.TextureLoader().load('/Space.jpg')
    scene.background = beachTexture

    // 3d animations

    // stars function
    function addStars() {
      const starGeometry = new THREE.SphereGeometry(0.15, 24, 24)
      const starMaterial = new THREE.MeshBasicMaterial({ color: 16777095 })
      const star = new THREE.Mesh(starGeometry, starMaterial)

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(200))

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
}

canvas { width: 100vw; height: 100vh; display: absolute; }

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
  50% {
    color: rgb(4, 255, 58);
  }
  100% {
    color: rgb(0, 247, 255);
    font-size: 40px;
  }
}
</style>
