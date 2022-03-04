<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <v-btn plain :ripple="false" to="/Dashboard">Dashboard</v-btn>
      <v-btn plain :ripple="false" to="/About">About</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
