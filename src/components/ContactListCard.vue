<template>
  <div @click="navigateRoute" class="chatcard">
    <div class="chatcard__container">
      <div class="chatcard__imgbox">
        <img
          :src="require(`@/assets/profiles/${image}`)"
          :alt="name"
          class="chatcard__imgbox--img"
        />
      </div>
      <div class="chatcard__context">
        <div class="chatcard__flexview">
          <h3 class="chatcard__title">{{ name }}</h3>
          <!-- <p class="chatcard__smtext">13:10</p> -->
        </div>
        <div class="chatcard__textview">
          <p class="chatcard__textview--lg">Last seen at {{ last_seen }}</p>
          <!-- <span class="chatcard__textview--counter">15</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactListCard",
  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
      default: "Undefined",
    },
    last_seen: {
      type: String,
      default: "Unknown",
    },
  },
  methods: {
    navigateRoute() {
      this.$router.push("/chat");
    },
  },
};
</script>
