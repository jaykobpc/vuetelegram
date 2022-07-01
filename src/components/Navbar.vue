<template>
  <div class="navbar no-select">
    <div class="navbar__container">
      <div class="navbar__group">
        <div @click="openNavigation" class="navbar__icon">
          <span class="material-icons">menu</span>
        </div>
        <h4 class="navbar__textview">Telegram</h4>
      </div>
      <div @click="navigateSearch" class="navbar__icon">
        <span class="material-icons">search</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    openNavigation() {
      this.$store.dispatch("openSideNavigation");
    },
    navigateSearch() {
      this.$router.push("/search");
    },
  },
};
</script>
