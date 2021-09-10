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

<style lang="scss">
.navbar {
  width: 100%;
  background-color: $color-theme-default;
  padding: 1.5rem 0.65rem;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__group {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__icon {
    @include roundedIcon;
    color: $color-grey-200;
  }

  &__textview {
    margin-left: 1rem;
    font-size: 1.7rem;
    letter-spacing: 0.055rem;
    color: $color-grey-200;
  }
}
</style>