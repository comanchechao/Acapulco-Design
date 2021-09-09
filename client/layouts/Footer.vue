<template>
  <div>
    <div
      class="
        seventhContainer
        h-dialog
        lg:h-screen
        grid grid-rows-2
        gap-4
        bg-mainRed
      "
    >
      <div class="h-full flex align-center justify-center bg-mainBlue">
        <div class="h-4/5 w-3/4 flex flex-col justify-center">
          <div class="self-center">
            <h1
              class="
                font-mainFont font-extrabold
                capitalize
                text-5xl
                p-4
                lg:text-7xl
                text-mainRed
              "
            >
              find us on social media!
            </h1>
          </div>
          <div
            class="
              w-screen
              h-3/5
              self-center
              flex
              justify-around
              lg:justify-center
              align-center
              space-x-1
              lg:space-x-9
            "
          >
            <i
              class="
                fab
                fa-twitter fa-10x
                icon-3d
                transform
                scale-50
                lg:scale-100
              "
            ></i>
            <i
              class="
                fab
                fa-facebook fa-10x
                icon-3d
                transform
                scale-50
                lg:scale-100
              "
            ></i>
            <i
              class="
                fab
                fa-instagram fa-10x
                icon-3d
                transform
                scale-50
                lg:scale-100
              "
            ></i>
            <i
              class="
                fab
                fa-whatsapp fa-10x
                icon-3d
                transform
                scale-50
                lg:scale-100
              "
            ></i>
            <img
              class="
                self-end
                justify-self-end
                icon-3d
                scale-75
                lg:scale-100
                z-10
              "
              src="/ppp.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end align-end z-10 md:mt-5">
        <img
          class="object-scale-down scale-50 lg:scale-100"
          src="/fsdfsdf.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$redColor: rgba(244, 67, 54, 1);
$blueColor: rgba(33, 150, 243, 1);
.icon-3d {
  cursor: pointer;
  -webkit-animation: icon3d 200ms 10;
  animation: icon3d 200ms 10;
  color: #f6f6f6;
  padding-bottom: 5px;
  border-bottom: 5px solid #120129;
  border-radius: 25px;
  // border-right: 5px solid #120129;
  &:hover {
    border-bottom: 5px solid #ff4a68;
    // border-right: 5px solid #ff4a68;

    transition: ease-in-out 0.7s;
    -webkit-animation: icon3d 200ms infinite;
    animation: icon3d 200ms infinite;
  }
}

@keyframes icon3d {
  0% {
    text-shadow: 5px 4px $redColor, -5px -6px $blueColor;
  }
  25% {
    text-shadow: -5px -6px $redColor, 5px 4px $blueColor;
  }
  50% {
    text-shadow: 5px -4px $redColor, -8px 4px $blueColor;
  }
  75% {
    text-shadow: -8px -4px $redColor, -5px -4px $blueColor;
  }
  100% {
    text-shadow: -5px 0 $redColor, 5px -4px $blueColor;
  }
}
</style>
