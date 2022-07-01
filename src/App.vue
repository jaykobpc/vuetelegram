<template>
  <main safe-area-view="interactive">
    <router-view />
  </main>
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
