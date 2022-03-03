<template>
  <div>
    <header>
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/calculator">Calculator</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      page: "dashboard",
    };
  },
  methods: {
    changePage() {
      this.page = location.pathname.slice(1);
    },
  },
};
</script>

<style>
</style>