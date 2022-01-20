<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'Home'}">
        <v-btn text>
          ホーム
        </v-btn>
      </router-link>
      <router-link :to="{ name: 'TitleCreater'}">
        <v-btn text>
          タイトル生成
        </v-btn>            
      </router-link>
    </v-app-bar>
    <SideNav/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav"
import { mapActions } from "vuex";
export default {
  name: 'App',
  components: {
    SideNav
  },
  data: () => ({}),
  methods: {
    ...mapActions(["toggleSideMenu"])
  }
};
</script>
