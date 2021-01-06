<template>
  <v-app>
    <div id="main">
      <div class="container">
        <div class="title-div">
          <h1 class="title black--text">Who are We?</h1>
        </div>
        <div class="p-div">
          <p>
            Hi. we are a bunch of guys, from a less known city of a dystopian
            country, while we're not lost and consumed by the sheer pressure of
            human survival, we tend to smoke, and create stuff, in the hope of
            finding the long lost peace that we all crave along the way.
          </p>
        </div>
        <div class="welcome">
          <p class="alcapulco">Welcome to Acapulco!</p>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
@font-face {
  font-family: 'Mushroom';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/TheMeshroom-3zaXL.ttf') format('truetype');
}

#main {
  background-image: url('/wallhaven-g7z7ld.jpg');
  height: 150%;
  display: block;
  background-position: center;
  background-size: cover;
  z-index: 2;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.title-div {
  grid-area: 2 / 2 / 3 / 5;
}
.title {
  font-size: 199px;
  background-color: skyblue;
  font-family: 'Mushroom';
}
.p-div {
  grid-area: 3 / 2 / 5 / 5;
}
.welcome {
  grid-area: 5 / 2 / 6 / 5;
}
</style>
