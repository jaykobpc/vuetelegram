<template>
  <div @click="composeFab" class="composefab">
    <div class="composefab__container">
      <span class="material-icons">edit</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "composefab",
  methods: {
    composeFab() {
      this.$router.push("/contacts");
    },
  },
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
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-theme-default;
    color: $color-grey-200;
  }
}
</style>