<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
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
</template>
<script>
export default{
  data: () => ({}),
}
</script>

<style scoped lang="scss"> 

</style>