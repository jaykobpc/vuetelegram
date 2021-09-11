<template>
  <div class="chatbox">
    <div class="chatbox__container">
      <div
        v-for="(messages, index) in chatMessages"
        :key="index"
        :class="{ 'flex-end': messages.is_sender }"
        class="chatbox__widget"
      >
        <div
          :class="{ 'is-right': messages.is_sender }"
          class="chatbox__chatitem"
        >
          <p class="chatbox__chatitem--text">
            {{ messages.message }}
          </p>
          <span class="chatbox__chatitem--time">{{ messages.time }}</span>
          <div v-if="messages.is_sender" class="chatbox__chatitem--svg">
            <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter
                  x="-50%"
                  y="-14.7%"
                  width="200%"
                  height="141.2%"
                  filterUnits="objectBoundingBox"
                  id="a"
                >
                  <feOffset
                    dy="1"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feGaussianBlur
                    stdDeviation="1"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  ></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                    in="shadowBlurOuter1"
                  ></feColorMatrix>
                </filter>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                  fill="#000"
                  filter="url(#a)"
                ></path>
                <path
                  d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                  fill="#EEFFDE"
                  class="corner"
                ></path>
              </g>
            </svg>
          </div>
          <div v-else class="chatbox__chatitem--leftsvg">
            <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter
                  x="-50%"
                  y="-14.7%"
                  width="200%"
                  height="141.2%"
                  filterUnits="objectBoundingBox"
                  id="a"
                >
                  <feOffset
                    dy="1"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feGaussianBlur
                    stdDeviation="1"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  ></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                    in="shadowBlurOuter1"
                  ></feColorMatrix>
                </filter>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                  fill="#000"
                  filter="url(#a)"
                ></path>
                <path
                  d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                  fill="#FFF"
                  class="corner"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Chatbox",
  computed: {
    ...mapState(["chatMessages"]),
  },
};
</script>

<style lang="scss">
.chatbox {
  flex: 1;
  overflow-y: auto;

  &__container {
    margin: 2rem 2rem;
  }

  &__widget {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
  }

  &__chatitem {
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    padding: 1rem;
    max-width: 220px;
    position: relative;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.14);

    &--text {
      font-family: inherit;
      font-size: 1.45rem;
      margin-bottom: 0.5rem;
    }

    &--time {
      font-family: inherit;
      font-size: 1rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #69bb66;
    }

    &--svg {
      position: absolute;
      // top: 0;
      right: -9px;
      bottom: -5px;
    }

    &--leftsvg {
      position: absolute;
      margin-top: 3.5rem;
      left: -9px;
      bottom: -6px;
    }
  }
}

.is-right {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: rgb(238,254,223);
}
</style>