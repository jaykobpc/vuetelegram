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
