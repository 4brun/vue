<template>
  <div>
    <header>
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/Page404">404</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
// import About from "../pages/About.vue";
// import Dashboard from "../pages/Dashboard.vue";
// import Page404 from "../pages/Page404.vue";
export default {
  //   components: { Dashboard, About, Page404 },
  name: "navigation",
  data() {
    return {
      page: "dashboard",
    };
  },
  methods: {
    changePage() {
      //console.log(location.pathname);
      this.page = location.pathname.slice(1);
    },
  },
  mounted() {
    //  const Links = document.querySelectorAll("a");
    //  Links.forEach((link) => {
    //    link.addEventListener("click", (event) => {
    //      event.preventDefault();
    //      history.pushState({}, "", link.href);
    //      this.changePage();
    //    });
    //  });
    //  //  this.changePage();
    //  //  window.addEventListener("hashchange", () => this.changePage());
    //  window.addEventListener("popstate", () => this.changePage());
  },
};
</script>

<style>
</style>