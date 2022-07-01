<template>
  <div class="chatsview">
    <chat-header />
    <chat-box />
    <chat-footer />
  </div>
</template>

<script>
import ChatHeader from "@/components/ChatHeader";
import ChatBox from "@/components/Chatbox";
import ChatFooter from "@/components/ChatFooter";


export default {
  name: "Chats",
  components: {
    ChatHeader,
    ChatBox,
    ChatFooter,
  },
};
</script>

<style>

</style>