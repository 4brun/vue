<template>
  <div id="app">
    <div>
      <header>
        <div class="title">My personal costs</div>
        <Navigation />
      </header>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
  async created() {
    await this.$store.dispatch("fetchCategoryList");
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
</style>
