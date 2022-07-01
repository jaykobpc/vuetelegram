<template>
  <div @click="navigateRoute" class="chatcard">
    <div class="chatcard__container">
      <div class="chatcard__imgbox">
        <img
          :src="require(`@/assets/profiles/${image}`)"
          :alt="name"
          loading="lazy"
          draggable="false"
          class="chatcard__imgbox--img"
        />
      </div>
      <div class="chatcard__context">
        <div class="chatcard__flexview">
          <h3 class="chatcard__title">{{ name }}</h3>
          <p class="chatcard__smtext">{{ timestamp }}</p>
        </div>
        <div class="chatcard__textview">
          <p class="chatcard__textview--lg">{{ message }}</p>
          <span v-if="unread" class="chatcard__textview--counter">{{
            counter
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chatcard",
  props: {
    image: {
      type: String,
      requuired: true,
    },
    name: {
      type: String,
      required: true,
    },
    timestamp: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    counter: {
      type: [String, Number],
      required: true,
      default: 0,
    },
    unread: {
      type: [String, Boolean],
      required: true,
      default: false,
    },
  },
  methods: {
    navigateRoute() {
      this.$router.push("/chat");
    },
  },
};
</script>
