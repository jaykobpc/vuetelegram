<template>
  <div
    :class="{ open_navigation: isNavigationOpen }"
    @click.prevent="closeNavigation"
    class="sidenavigation no-select"
  >
    <div class="sidenavigation__container">
      <!-- header -->
      <div class="sidenavigation__header">
        <div class="sidenavigation__widget">
          <img
            src="@/assets/profiles/user1.jpeg"
            alt="Profile"
            class="sidenavigation__profile"
          />
          <div class="sidenavigation__contact">
            <h4 class="sidenavigation__textview">Jaykobpc</h4>
            <p class="sidenavigation__textview--sm">+254 700 000 000</p>
          </div>
        </div>
        <div class="sidenavigation__themetoggle">
          <span class="material-icons md-18">lightbulb</span>
        </div>
      </div>
      <!-- options -->
      <div class="sidenavigation__listview">
        <div class="sidenavigation__listitem">
          <span class="material-icons">group</span>
          <h4 class="sidenavigation__listitem--text">New Group</h4>
        </div>
        <div class="sidenavigation__listitem">
          <span class="material-icons">person</span>
          <h4 class="sidenavigation__listitem--text">Contacts</h4>
        </div>
        <div class="sidenavigation__listitem">
          <span class="material-icons">call</span>
          <h4 class="sidenavigation__listitem--text">Calls</h4>
        </div>
        <div class="sidenavigation__listitem">
          <span class="material-icons">place</span>
          <h4 class="sidenavigation__listitem--text">People Nearby</h4>
        </div>
        <div class="sidenavigation__listitem">
          <span class="material-icons">bookmark_border</span>
          <h4 class="sidenavigation__listitem--text">Saved Messages</h4>
        </div>
        <div @click="navigateSettings" class="sidenavigation__listitem">
          <span class="material-icons">settings</span>
          <h4 class="sidenavigation__listitem--text">Settings</h4>
        </div>
      </div>
      <!-- divider -->
      <div class="sidenavigation__divider"></div>
      <!-- options -->
      <div class="sidenavigation__listview">
        <div class="sidenavigation__listitem">
          <span class="material-icons">person_add</span>
          <h4 class="sidenavigation__listitem--text">Invite Friends</h4>
        </div>
        <div class="sidenavigation__listitem">
          <span class="material-icons">help_outline</span>
          <h4 class="sidenavigation__listitem--text">Telegram Features</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Sidenavigation",
  computed: {
    ...mapState(["isNavigationOpen"]),
  },
  methods: {
    closeNavigation() {
      this.$store.dispatch("closeSideNavigation");
    },
    navigateSettings() {
      this.$router.push("/settings");
    },
  },
};
</script>

<style lang="scss">
.sidenavigation {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 255;
  position: fixed;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.3s ease;

  &__container {
    width: 34rem;
    height: 100%;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    transition: all 0.2s ease;
    transform: translateX(-35rem);
    background-color: $color-white;
    color: $color-grey-600;
  }

  &__header {
    padding: 1.35rem 2.5rem;
    background-color: $color-theme-default;
    height: 18rem;
    position: relative;
    color: $color-grey-300;
  }

  &__widget {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  &__profile {
    width: 8.5rem;
    height: 8.5rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__textview {
    font-size: 1.5rem;
    letter-spacing: 0.055rem;
    margin-bottom: 0.25rem;
    margin-left: 0.5rem;

    &--sm {
      font-size: 1.15rem;
    }
  }

  &__themetoggle {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    @include roundedIcon;
  }

  &__listview {
    background-color: $color-white;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0rem;
  }

  &__listitem {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.5rem 2.5rem;
    color: $color-grey-500;
    transition: background-color 0.3s ease-in;

    &:hover {
      background-color: $color-grey-200;
    }

    &--text {
      font-size: 1.5rem;
      margin-left: 2.8rem;
      letter-spacing: 0.025rem;
      color: $color-grey-600;
    }
  }

  &__divider {
    border: 0.5px solid $color-grey-300;
  }
}

.open_navigation {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.open_navigation .sidenavigation__container {
  transition: all 0.3s ease-in;
  transform: translateX(0);
}
</style>