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
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          タイトル生成サイト
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item :key="1" :to="{ name: 'Home'}" exact>
          <v-list-item-content>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :key="2" :to="{ name: 'TitleCreater'}" exact>
          <v-list-item-content>
            <v-list-item-title>タイトル生成</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false
  }),
  methods: {
    toggleSideMenu() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
