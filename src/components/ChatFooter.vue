<template>
  <div class="chatfooter no-select">
    <div class="chatfooter__container">
        <div class="chatfooter__texticon">
            <h4 class="chatfooter__texticon--text">GIF</h4>
        </div>
        <div class="chatfooter__input">
            <input type="text" name="input" placeholder="Message" class="chatfooter__input--inputbox">
        </div>
        <div class="chatfooter__iconview">
            <span class="material-icons">attach_file</span>
        </div>
        <div class="chatfooter__iconview">
            <span class="material-icons">photo_camera</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatFooter",
};
</script>

<style lang="scss">
.chatfooter {
    z-index: 25;
    background-color: $color-white;
    box-shadow: 0px 0px 7px -5px;

    &__container {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        padding: 1.85rem 1.5rem;
    }

    &__texticon {
        font-family: inherit;
        margin: 0rem;

        &--text {
            font-size: 1.3rem;
            font-weight: 800;
            letter-spacing: 0.035rem;
        }
    }

    &__input {
        flex: 1;
        margin: 0 1rem;

        &--inputbox {
            font-family: inherit;
            padding: 0 1rem;

            &::placeholder {
                font-family: inherit;
                letter-spacing: 0.065rem;
            }
        }
    }

    &__iconview {
        @include roundedIcon;
        color: $color-grey-500;
        margin: 0 0.5rem;
    }
}
</style>