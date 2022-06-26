<template>
  <div safe-area-view>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__slideInRight animate__faster"
      leave-active-class="animate__animated animate__slideOutLeft animate__faster"
    >
      <router-view />
    </transition>
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
</style>
