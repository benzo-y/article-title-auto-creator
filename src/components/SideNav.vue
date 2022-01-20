<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list-item>
      <v-list-item-content>
        タイトル生成サイト
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item  v-for="(item, index) in items" :key="index" :to="item.link" exact>
        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default{
  data: () => ({
    items: [
      {title: 'ホーム', link: {name: 'Home'}},
      {title: 'タイトル生成', link: {name: 'TitleCreater'}}
    ]
  }),
}
</script>

<style scoped lang="scss"> 

</style>