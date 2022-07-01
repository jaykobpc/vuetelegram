<template>
  <div class="chatcontainer">
    <chatcard
      v-for="(n, index) in chatListview"
      :image="n.image"
      :name="n.name"
      :timestamp="n.time"
      :message="n.message"
      :counter="n.counter"
      :unread="n.unread"
      :key="index"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Chatcard from "@/components/Chatcard";

export default {
  name: "Chatcontainer",
  components: {
    Chatcard,
  },
  computed: {
    ...mapState(["chatListview"]),
  },
};
</script>