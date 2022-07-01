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
            @click="navigateSettings"
            src="@/assets/profiles/user2.jpeg"
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
        <div @click="navigateContacts" class="sidenavigation__listitem">
          <span class="material-icons">group</span>
          <h4 class="sidenavigation__listitem--text">New Group</h4>
        </div>
        <div @click="navigateContacts" class="sidenavigation__listitem">
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
    navigateContacts() {
      this.$router.push("/contacts");
    },
  },
};
</script>