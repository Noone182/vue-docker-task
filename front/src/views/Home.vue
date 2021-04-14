<template>
  <main>
    <transition name="fade">
      <Popup v-if="isShow" @showPopup="showPopup" />
    </transition>
    <Card v-if="RAW.length" @showPopup="showPopup" />
    <template v-else><div>Анкеты закончились...</div></template>
  </main>
</template>

<script>
import Popup from "@/components/Popup.vue";
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    Popup,
    Card,
  },
  computed: {
    ...mapGetters(["RAW"]),
  },

  methods: {
    showPopup() {
      this.isShow = !this.isShow;
    },
  },
  mounted() {
    return this.$store.dispatch("GET_DATA");
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
main {
  max-width: 380px;
  display: flex;
  flex-direction: column;
}
.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &-wrapper {
    display: flex;
    max-width: 920px;
    height: 500px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
  }
  &-img {
    max-width: 400px;
    &:first-child {
      margin-right: 10px;
    }
  }
}

.user {
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
  }
  &-photos {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  &-img {
    max-height: 270px;
    max-width: 186px;
    margin: 0 auto;
  }
  &-info {
    display: flex;
    margin-top: 40px;
  }
  &-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }
  &-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &-date {
    color: #e48800;
  }
  &-av-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &-name {
    color: #667fa0;
  }
  &-years {
    color: #aaa;
  }
  &-avatar {
    max-width: 70px;
    flex: 50px 0 0;
    margin-right: 10px;
    display: block;
  }
  &-location-text {
    color: #797979;
  }
}

.circle {
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background: #6dbb4a;
}
svg {
  width: 20px;
  margin-top: 10px;
}
.verification,
.ban {
  display: flex;
  align-items: center;
}
.verification div,
.ban div {
  margin-left: 10px;
  cursor: pointer;
}

.ban {
  margin-top: 30px;
}

.btn {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.verification-up {
  background: #6dbb4a;
}
.verification-cancel {
  background: #e48800;
}
.popup {
  background: #41cac0;
}
.ban-acc {
  background: #e48800;
}
.ban-dev {
  background: #ec6459;
}
.ban-btn {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  svg {
    width: 10px;
    margin-left: 5px;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
