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
