<template>
  <div class="grid gap-4 grid-rows-2">
    <div class="title-div row-span-2">
      <h1 class="who black--text">Who are We?</h1>
    </div>
    <div class="p-div row-span-1">
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
</template>

<script>
export default {}
</script>

<style scoped>
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
}

.title-div {
}
.who {
  font-size: 2rem;
  background-color: skyblue;
  font-family: 'Recoleta';
}
.p-div {
  grid-area: 3 / 2 / 5 / 5;
}
.welcome {
  grid-area: 5 / 2 / 6 / 5;
}
</style>
