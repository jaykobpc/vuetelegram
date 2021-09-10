<template>
  <div @click="navigateRoute" class="chatcard">
    <div class="chatcard__container">
      <div class="chatcard__imgbox">
        <img
          src="@/assets/profiles/user1.jpeg"
          alt="Profile"
          class="chatcard__imgbox--img"
        />
      </div>
      <div class="chatcard__context">
        <div class="chatcard__flexview">
          <h3 class="chatcard__title">Jaykobpc</h3>
          <p class="chatcard__smtext">13:10</p>
        </div>
        <div class="chatcard__textview">
          <p class="chatcard__textview--lg">This is message was generated...</p>
          <span class="chatcard__textview--counter">15</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chatcard",
  methods: {
    navigateRoute() {
      this.$router.push("/chat");
    },
  },
};
</script>

<style lang="scss">
.chatcard {
  width: 100%;

  &__container {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0.85rem 0.65rem;
    background-color: inherit;
  }

  &__imgbox {
    margin: 0 1rem;

    &--img {
      width: 6.65rem;
      height: 6.65rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__context {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
    border-bottom: 0.5px solid $color-grey-300;
  }

  &__flexview {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 0;
  }

  &__title {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  &__smtext {
    font-size: 1.2rem;
  }

  &__textview {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 1.35rem;

    &--lg {
      font-size: 1.35rem;
      line-height: 1.5;
      color: $color-grey-600;
    }

    &--counter {
      background-color: $color-green;
      width: 3.5rem;
      height: 2.5rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      color: $color-white;
    }
  }
}
</style>