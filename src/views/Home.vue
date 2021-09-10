<template>
  <div class="homeview">
    <navbar />
    <sidenavigation />
    <chatcontainer />
    <compose-fab />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidenavigation from "@/components/Sidenavigation";
import Chatcontainer from "@/components/Chatcontainer";
import ComposeFab from "@/components/composeFab";

export default {
  name: "Home",
  components: {
    Navbar,
    Sidenavigation,
    Chatcontainer,
    ComposeFab,
  },
};
</script>

<style lang="scss">
.homeview {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: $color-white;
}
</style>