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
          <swiper-slide v-for="(n, index) in 6" :key="index">
            <div class="searchview__contactcircle">
              <img
                src="@/assets/profiles/user1.jpeg"
                alt="Profile"
                class="searchview__contactcircle--img"
              />
              <p class="searchview__contactcircle--textview">Jaykobpc</p>
            </div>
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
            v-for="(profile, index) in searchList"
            :key="index"
            :image="profile.profile_image"
            :name="profile.profile_name"
            :last_seen="profile.profile_lastseen"
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
    ...mapState(["searchList"]),
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

<style lang="scss">
.searchview {
  height: 100%;
  background-color: $color-white;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__searchbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 1.35rem 0.65rem;
  }

  &__iconview {
    @include roundedIcon;
    color: $color-grey-600;
  }

  &__inputbox {
    margin: 0 1rem;

    &--input {
      font-family: inherit;
      color: $color-grey-600;
      padding: 0 1rem;

      &::placeholder {
        font-family: inherit;
        letter-spacing: 0.055rem;
      }
    }
  }

  &__options {
    -webkit-box-shadow: 0 10px 10px -10px #000000;
    -moz-box-shadow: 0 10px 10px -10px #000000;
    box-shadow: 0 10px 10px -16px #000000;

    &--text {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 600;
      padding: 1rem 0.5rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $color-grey-600;
      letter-spacing: 0.045rem;
      padding: 1.5rem 0;
    }
  }

  &__contactbubble {
    padding: 1.5rem 0;
  }

  &__contactcircle {
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 6.5rem;
      height: 6.5rem;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 0.8rem;
    }

    &--textview {
      font-family: inherit;
      font-size: 1.3rem;
    }
  }
}

.selected {
  &::before {
    bottom: 0;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    width: 100%;
    content: "";
    height: 4px;
    position: absolute;
    background-color: $color-theme-default;
  }
}
</style>