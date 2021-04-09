<template>
  <main>
    <template v-if="isShow">
      <div class="modal" @click="showPopup">
        <div class="modal-wrapper">
          <img :src="data.photo_prev" alt="" class="modal-img" />
          <img :src="data.selfie_prev" alt="" class="modal-img" />
        </div>
      </div>
    </template>
    <template v-if="raw.length">
      <div class="user-photos">
        <div class="user-photo">
          <div>Фото профиля</div>
          <img :src="data.photo_prev" alt="" class="user-img" />
        </div>
        <div class="user-selfie">
          <div>Фото профиля</div>
          <img :src="data.selfie_prev" alt="" class="user-img" />
        </div>
      </div>
      <div class="user-wrapper">
        <div class="user-left">
          <div class="user-date">
            Заявка,
            {{ data.created_at | dateFormat }}
          </div>
          <div class="user-info">
            <img :src="data.user.avatar" alt="" class="user-avatar" />
            <div class="user-av-right">
              <div class="user-name">
                {{ data.user.name
                }}<span class="user-years">({{ data.user.years }})</span>
              </div>
              <div class="user-location-text">{{ data.user.city }}</div>
              <div class="circle"></div>
            </div>
          </div>
        </div>
        <div class="user-right">
          <div class="verification">
            <div class="verification-up btn" @click="verificationUp">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-shield"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="svg-inline--fa fa-user-shield fa-w-20 fa-9x"
              >
                <path
                  fill="white"
                  d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"
                  class=""
                ></path>
              </svg>
            </div>
            <div class="verification-cancel btn" @click="verificationCancel">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="window-close"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-window-close fa-w-16 fa-9x"
              >
                <path
                  fill="white"
                  d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"
                  class=""
                ></path>
              </svg>
            </div>
            <div class="popup btn" @click="showPopup">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="eye"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-eye fa-w-18 fa-9x"
              >
                <path
                  fill="white"
                  d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  class=""
                ></path>
              </svg>
            </div>
          </div>
          <div class="ban">
            <div class="ban-acc ban-btn" @click="banAccount">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="portrait"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="svg-inline--fa fa-portrait fa-w-12 fa-9x"
              >
                <path
                  fill="white"
                  d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"
                  class=""
                ></path></svg
              ><svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ban"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-ban fa-w-16 fa-9x"
              >
                <path
                  fill="white"
                  d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"
                  class=""
                ></path>
              </svg>
            </div>
            <div class="ban-dev ban-btn" @click="banDev">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="mobile-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                class="svg-inline--fa fa-mobile-alt fa-w-10 fa-9x"
              >
                <path
                  fill="white"
                  d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                  class=""
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ban"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-ban fa-w-16 fa-9x"
              >
                <path
                  fill="white"
                  d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"
                  class=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else><div>Анкеты закончились...</div></template>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    data() {
      return this.$store.getters.DATA;
		},
		raw() {
			return this.$store.getters.RAW;
		}
  },
  filters: {
    dateFormat: function (value) {
      if (!value) return "";
      return new Date(value).toLocaleString("ru-RU").slice(0, -3);
    },
  },
  methods: {
    showPopup() {
      this.isShow = !this.isShow;
    },
    verificationUp() {
      const payload = {
        photo_id: this.data.photo_id,
        user_id: this.data.user.user_id,
        /* more parameters */
      };
      this.$store.dispatch("VERIFICATION_SUCCESS", payload);
    },
    verificationCancel() {
      const payload = {
        photo_id: this.data.photo_id,
        user_id: this.data.user.user_id,
        /* more parameters */
      };
      this.$store.dispatch("VERIFICATION_CANCEL", payload);
    },
    banAccount() {
      const payload = {
        photo_id: this.data.photo_id,
        user_id: this.data.user.user_id,
        /* more parameters */
      };
      this.$store.dispatch("BAN_ACC", payload);
    },
    banDev() {
      const payload = {
        photo_id: this.data.photo_id,
        user_id: this.data.user.user_id,
        /* more parameters */
      };
      this.$store.dispatch("BAN_DEV", payload);
    },
  },
  mounted() {
    return this.$store.dispatch("GET_DATA");
  },
};
</script>

<style lang="scss">
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
