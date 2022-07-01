<template>
  <div class="searchview no-select">
    <div class="searchview__container">
      <div class="searchview__searchbox">
        <div @click="navigateBack" class="searchview__iconview">
          <span class="material-icons">arrow_back</span>
        </div>
        <div class="searchview__inputbox">
          <input
            type="text"
            name="search"
            placeholder="Search"
            class="searchview__inputbox--input"
          />
        </div>
      </div>
      <!-- slider options -->
      <div class="searchview__options">
        <div class="searchview__group">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="searchview__options--text selected"
              >Chats</swiper-slide
            >
            <swiper-slide class="searchview__options--text">Media</swiper-slide>
            <swiper-slide class="searchview__options--text">Links</swiper-slide>
            <swiper-slide class="searchview__options--text">Files</swiper-slide>
            <swiper-slide class="searchview__options--text">Music</swiper-slide>
            <swiper-slide class="searchview__options--text">Voice</swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- slider contact bubbles -->
      <div class="searchview__contactbubble">
        <swiper ref="myContacts" :options="swiperOptionscontacts">
          <swiper-slide
            v-for="(n, index) in chatListview.slice(7, 12)"
            :key="index"
          >
            <template v-if="!n.name.includes('Group')">
              <div class="searchview__contactcircle">
                <img
                  :src="require(`@/assets/profiles/${n.image}`)"
                  alt="Profile"
                  class="searchview__contactcircle--img"
                />
                <p class="searchview__contactcircle--textview">{{ n.name.slice(0, 6) }}</p>
              </div>
            </template>
          </swiper-slide>
        </swiper>
      </div>
      <!-- recent -->
      <div class="contactsview__container">
        <div class="contactsview__divider">
          <h4 class="contactsview__divider--text">Recent</h4>
        </div>
        <div class="contactsview__list">
          <contact-list-card
            v-for="(profile, index) in chatListview.slice(7, 10)"
            :key="index"
            :image="profile.image"
            :name="profile.name"
            :last_seen="profile.time"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ContactListCard from "@/components/ContactListCard";
import { mapState } from "vuex";

export default {
  name: "Searchview",
  components: {
    Swiper,
    SwiperSlide,
    ContactListCard,
  },
  computed: {
    ...mapState(["chatListview"]),
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,
        loop: false,
      },
      swiperOptionscontacts: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        loop: false,
      },
    };
  },
  methods: {
    navigateBack() {
      this.$router.push("/");
    },
  },
};
</script>
