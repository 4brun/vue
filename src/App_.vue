<template>
  <div id="app">
    <div>
      <header>
        <div class="title">My personal costs</div>
        <Navigation />
      </header>
      <transition name="fade">
        <ModalAddWindow v-if="showModal" :modalSettings="modalSettings" />
      </transition>
      <transition name="fade">
        <ModalMenu />
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import ModalAddWindow from "./components/ModalAddWindow.vue";
import ModalMenu from "./components/ModalMenu.vue";

export default {
  name: "App",
  components: {
    Navigation,
    ModalAddWindow,
    ModalMenu,
  },
  data() {
    return {
      showModal: false,
      modalSettings: {},
    };
  },
  methods: {
    onShow(settings) {
      this.modalSettings = settings;
      this.showModal = true;
    },
    onHide() {
      this.showModal = false;
      this.modalSettings = {};
    },
  },
  async created() {
    await this.$store.dispatch("fetchCategoryList");
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-size: 30px;
  font-weight: 600;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
