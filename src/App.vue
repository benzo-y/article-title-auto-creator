<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
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

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
