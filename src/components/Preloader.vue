<template>
  <div id="loading-mask">
    <div class="preloader">
      <div class="c-three-dots-loader"/>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
#loading-mask {
  position: fixed;
  width: 100vw;
  height: 100ch;
  background: white;
  z-index: 1000;
  overflow: hidden;
}

#loading-mask h1 {
  text-align: center;
  color: black;
  padding-top: 50%;
  transform: translateY(-50%);
}

#loading-mask .preloader {
  position: absolute;
  text-align: center;
  height: 20px;
  width: 20px;
  top: calc(50vh - 10px);
  left: calc(50vw - 10px);
}

#loading-mask .c-three-dots-loader {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation-fill-mode: both;
  animation: three-dots-loader-animation 2s infinite ease-in-out;
  animation-delay: -0.16s;
  color: #333; // Dots color
}

#loading-mask .c-three-dots-loader:before,
#loading-mask .c-three-dots-loader:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  animation: three-dots-loader-animation 2s infinite ease-in-out;
  border-radius: 50%;
}

#loading-mask .c-three-dots-loader:before {
  left: -24px;
  animation-delay: -0.32s;
}

#loading-mask .c-three-dots-loader:after {
  left: 24px;
}

#loading-mask .load-mask-wrapper {
  position: absolute;
  text-align: center;
  height: 200px;
  width: 200px;
  top: calc(50vh - 100px);
  left: calc(50vw - 100px);
}

#loading-mask .load-mask-innerDots {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 100%;
  height: 100%;
}

#loading-mask .load-mask-outerPlane {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@keyframes three-dots-loader-animation {
  0%,
  80%,
  100% {
    box-shadow: 0 20px 0 -24px;
  }
  40% {
    box-shadow: 0 20px 0 0;
  }
}
</style>
