<template>
  <div class="chatcontainer">
    <chatcard v-for="(n,index) in 10" :key="index" />
  </div>
</template>

<script>
import Chatcard from "@/components/Chatcard";

export default {
  name: "Chatcontainer",
  components: {
    Chatcard,
  },
};
</script>

<style lang="scss">
.chatcontainer {
  height: 100%;
  background-color: inherit;
  overflow-y: auto;
}
</style>