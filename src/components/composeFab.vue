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
