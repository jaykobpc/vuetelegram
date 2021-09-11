<template>
  <div class="contactsview no-select">
    <contacts-header />
    <div class="contactsview__container">
      <div class="contactsview__groupview">
        <div class="contactsview__groupcard">
          <span class="material-icons">group</span>
          <h4 class="contactsview__groupcard--title">New Group</h4>
        </div>
        <div class="contactsview__groupcard">
          <span class="material-icons">lock_open</span>
          <h4 class="contactsview__groupcard--title">New Secret Chat</h4>
        </div>
        <div class="contactsview__groupcard">
          <span class="material-icons">rss_feed</span>
          <h4 class="contactsview__groupcard--title">New Channel</h4>
        </div>
      </div>
      <div class="contactsview__divider">
        <h4 class="contactsview__divider--text">Sorted by last seen time</h4>
      </div>
      <div class="contactsview__list">
        <template v-for="(profile, index) in chatListview">
          <template v-if="!profile.name.includes('Group')">
            <contact-list-card
              :key="index"
              :image="profile.image"
              :name="profile.name"
              :last_seen="profile.time"
            />
          </template>
        </template>
      </div>
    </div>
    <contact-add-fab />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ContactsHeader from "@/components/ContactsHeader";
import ContactListCard from "@/components/ContactListCard";
import ContactAddFab from "@/components/ContactAddFab";

export default {
  name: "Contacts",
  components: {
    ContactsHeader,
    ContactListCard,
    ContactAddFab,
  },
  computed: {
    ...mapState(["chatListview"]),
  },
};
</script>

<style lang="scss">
.contactsview {
  height: 100%;
  background-color: $color-white;
  display: flex;
  flex-direction: column;

  &__container {
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  &__groupview {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: $color-white;
    margin: 1rem 0;
  }

  &__groupcard {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    color: $color-grey-600;
    padding: 1.5rem 2rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: $color-grey-200;
    }

    &--title {
      font-family: inherit;
      font-size: 1.5rem;
      margin-left: 1.5rem;
    }
  }

  &__divider {
    padding: 1rem 2rem;
    background-color: $color-grey-300;

    &--text {
      font-family: inherit;
      font-size: 1.2rem;
      color: $color-grey-600;
    }
  }
}
</style>