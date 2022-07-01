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
