<template>
  <div class="composefab">
    <div class="composefab__container">
      <span class="material-icons"> person_add_alt_1 </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactAddFab",
};
</script>

<style lang="scss">
.composefab {
  position: absolute;
  bottom: 25px;
  right: 25px;
  z-index: 200;

  &__container {
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-theme-default;
    color: $color-grey-200;
  }
}
</style>