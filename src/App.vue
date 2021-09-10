<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
};
</script>

<style lang="scss">
@charset 'utf-8';

//Material icons
$material-icons-font-path: "~material-icons/iconfont/";

@import "material-icons/iconfont/filled.scss";

.router-anim-enter-active {
  animation: coming 0.25s ease;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.25s ease;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-500px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(500px);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
