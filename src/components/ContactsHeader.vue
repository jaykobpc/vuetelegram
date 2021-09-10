<template>
  <div class="contactsheader">
    <div class="contactsheader__container">
      <div @click="navigateBack" class="contactsheader__icon">
        <span class="material-icons">arrow_back</span>
      </div>
      <h3 class="contactsheader__title">New Message</h3>
      <div class="contactsheader__icon">
        <span class="material-icons">search</span>
      </div>
      <div class="contactsheader__icon">
        <span class="material-icons">sort</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contactsheader",
  methods: {
    navigateBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.contactsheader {
  width: 100%;
  background-color: $color-theme-default;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.35rem 0.65rem;
  }

  &__icon {
    @include roundedIcon;
    color: $color-grey-200;
    margin: 0 0.85rem;
  }

  &__title {
    flex: 1;
    color: $color-grey-200;
    margin-left: 1rem;
    font-family: inherit;
    font-size: 1.6rem;
    letter-spacing: 0.045rem;
  }
}
</style>