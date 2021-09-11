<template>
  <div class="settingsview no-select">
    <div class="settingsview__container">
      <div class="settingsview__headerwidget">
        <!-- iconview -->
        <div ref="navbar" class="settingsview__headernav">
          <div @click="navigateBack" class="settingsview__iconview">
            <span class="material-icons">arrow_back</span>
          </div>
          <h3 class="settingsview__headernav--text">Jaykobpc</h3>
          <div class="settingsview__iconview">
            <span class="material-icons">more_vert</span>
          </div>
        </div>
        <!-- img view -->
        <div class="settingsview__profilebox">
          <div class="settingsview__profilewidget">
            <h3 class="settingsview__profilewidget--title">Jaykobpc</h3>
            <p class="settingsview__profilewidget--text">Online</p>
          </div>
        </div>
        <!-- upload image fab -->
        <div class="settingsview__uploadfab">
          <div class="material-icons">add_a_photo</div>
        </div>
      </div>
      <!-- group 2 -->
      <div class="settingsview__cardgroup">
        <h3 class="settingsview__cardgroup--title">Account</h3>
        <div class="settingsview__group">
          <h4 class="settingsview__group--title">+254 704 000 000</h4>
          <p class="settingsvoew__group--smtext">Tap to change phone number</p>
        </div>
        <div class="settingsview__group">
          <h4 class="settingsview__group--title">@Jaykob_w</h4>
          <p class="settingsvoew__group--smtext">Username</p>
        </div>
        <div class="settingsview__group">
          <h4 class="settingsview__group--title">
            You can add a few lines about yourself
          </h4>
          <p class="settingsvoew__group--smtext">Bio</p>
        </div>
      </div>
      <!-- group 3 -->
      <div class="settingsview__cardgroup">
        <h3 class="settingsview__cardgroup--title">Settings</h3>
        <div class="settingsview__groupsetting">
          <span class="material-icons">notifications</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Notifications and Sounds</p>
          </div>
        </div>
        <div class="settingsview__groupsetting">
          <span class="material-icons">lock_open</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Privacy and Security</p>
          </div>
        </div>
        <div class="settingsview__groupsetting">
          <span class="material-icons">folder_open</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Data and Storage</p>
          </div>
        </div>
        <div class="settingsview__groupsetting">
          <span class="material-icons">chat</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Chat Settings</p>
          </div>
        </div>
        <div class="settingsview__groupsetting">
          <span class="material-icons">folder_open</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Data and Storage</p>
          </div>
        </div>
        <div class="settingsview__groupsetting">
          <span class="material-icons">folder</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Folders</p>
          </div>
        </div>
        <div class="settingsview__groupsetting">
          <span class="material-icons">devices</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Devices</p>
          </div>
        </div>
        <div class="settingsview__groupsetting">
          <span class="material-icons">language</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Language</p>
          </div>
        </div>
      </div>
      <!-- group 4 -->
      <div class="settingsview__cardgroup">
        <h3 class="settingsview__cardgroup--title">Help</h3>
        <div class="settingsview__groupsetting">
          <span class="material-icons">textsms</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Ask a Question</p>
          </div>
        </div>
        <div class="settingsview__groupsetting">
          <span class="material-icons">help_outline</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Telegram FAQ</p>
          </div>
        </div>
        <div class="settingsview__groupsetting">
          <span class="material-icons">verified_user</span>
          <div class="settingsview__grouptextview">
            <p class="settingsview__grouptext">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  methods: {
    navigateBack() {
      this.$router.push("/");
    },
    scroll_view_shadow() {
      const navbar = this.$refs.navbar;
      const settingsView = document.querySelector(".settingsview");
      settingsView.addEventListener("scroll", (e) => {
        if (e.target.scrollTop > 300) {
          navbar.classList.add("navbar_view_shadow");
        } else if (e.target.scrollTop < 300) {
          navbar.classList.remove("navbar_view_shadow");
        }
      });
    },
  },
  mounted() {
    this.scroll_view_shadow();
  },
};
</script>

<style lang="scss">
.navbar_view_shadow {
  background-color: $color-theme-default;
}

.navbar_view_shadow h3 {
  opacity: 1;
  visibility: visible;
}

.settingsview {
  height: 100%;
  background-color: $color-white;
  overflow-y: auto;

  &__container {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    // height: 100%;
  }

  &__headerwidget {
    background: url("../assets/profiles/user2.jpeg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  &__headernav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.35rem 0.5rem;
    position: fixed;
    top: 0;
    z-index: 990;

    &--text {
      font-family: inherit;
      font-size: 1.75rem;
      letter-spacing: 0.045rem;
      color: $color-grey-200;
      transition: all 0.3s ease;
      visibility: hidden;
      opacity: 0;
    }
  }

  &__iconview {
    @include roundedIcon;
    color: $color-grey-200;
  }

  &__profilebox {
    padding: 2rem 2rem;
    position: absolute;
    bottom: 0;
  }

  &__profilewidget {
    &--title {
      font-family: inherit;
      font-size: 2.5rem;
      color: $color-grey-100;
      line-height: 1.5;
      letter-spacing: 0.045rem;
    }

    &--text {
      font-family: inherit;
      font-size: 1.3rem;
      color: $color-grey-100;
      line-height: 1.5;
      letter-spacing: 0.035rem;
    }
  }

  &__uploadfab {
    position: absolute;
    bottom: -30px;
    right: 20px;
    width: 7rem;
    height: 7rem;
    background-color: $color-white;
    z-index: 500;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
    color: $color-grey-600;
  }

  &__cardgroup {
    padding: 1.5rem 2.5rem;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
    color: $color-grey-600;
    margin-bottom: 1rem;

    &--title {
      font-size: 2rem;
      color: $color-primary;
      letter-spacing: 0.045rem;
      padding: 1rem 0;
    }
  }

  &__group {
    padding: 1.75rem 0rem;
    transition: background-color 0.3s ease;

    &:not(:last-child) {
      border-bottom: 0.5px solid $color-grey-200;
    }

    &--title {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }

    &--smtext {
      font-family: inherit;
      font-size: 1.25rem;
      font-weight: 300;
    }
  }

  &__groupsetting {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
  }

  &__grouptextview {
    margin-left: 2rem;
    width: 100%;
    padding: 2rem 0;
    border-bottom: 0.5px solid $color-grey-300;
  }

  &__grouptext {
    font-size: 1.6rem;
    letter-spacing: 0.045rem;
  }
}
</style>