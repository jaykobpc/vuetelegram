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