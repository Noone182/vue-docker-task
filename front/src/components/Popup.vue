<template>
  <div class="modal" @click="showPopup">
    <div class="modal-wrapper">
      <img :src="data.photo_prev" alt="" class="modal-img" />
      <img :src="data.selfie_prev" alt="" class="modal-img" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["DATA"]),
    data() {
      return this.DATA;
    },
  },
  methods: {
    showPopup() {
      this.$emit("showPopup");
    },
  },
};
</script>
