<template>
  <div class="chatheader no-select">
    <div class="chatheader__container">
      <div @click="navigateBack" class="chatheader__icon">
        <span class="material-icons">arrow_back</span>
      </div>
      <div class="chatheader__contextview">
        <img
          src="@/assets/profiles/user2.jpeg"
          alt="Profile"
          class="chatheader__imgview"
        />
        <div class="chatheader__widget">
          <h3 class="chatheader__widget--title">Cassie cage</h3>
          <p class="chatheader__widget--subtitle">last seen recently</p>
        </div>
      </div>
      <div class="chatheader__icon flex-end">
        <span class="material-icons">more_vert</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chatheader",
  methods: {
    navigateBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.chatheader {
  width: 100%;
  background-color: $color-theme-default;
  z-index: 300;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 0.65rem;
    width: 100%;
  }

  &__icon {
    @include roundedIcon;
    color: $color-grey-300;
  }

  &__contextview {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  &__imgview {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 1.5rem;
  }

  &__widget {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $color-grey-300;

    &--title {
      font-size: 1.5rem;
      line-height: 1.5;
    }

    &--subtitle {
      font-size: 1.3rem;
      line-height: 1.5;
    }
  }
}

.flex-end {
  justify-content: flex-end;
}
</style>