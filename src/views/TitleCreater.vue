<template>
  <v-container class="grey lighten-5">
    <v-layout row wrap justify-center>
      <v-flex lg12 xs12 mt-5 mb-5 class="text-center">
        <h1>タイトル生成</h1>
      </v-flex>
      <v-flex lg10 xs10 mb-5>
        <v-form ref="form" @submit.prevent="createTitles">
          <v-card>
            <v-card-title>
              条件
            </v-card-title>
              <v-card-text>
                <v-text-field 
                  v-model="keyword"
                  label="キーワード"
                  :rules="rules"
                >
                </v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="info" @click="createTitles">作成</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
      <v-flex lg10 xs10 mb-5 v-if="titles.length">
        <v-card>
          <v-list>
            <v-list-item v-for="(title, index) in titles" :key="index">
              <v-list-item-icon class="mr-0">
                <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default{
  data: () => ({
    keyword: "",
    titles: [],
    rules: [
      v => !!v || 'キーワードを入力してください。',
      v => v.length <= 30 || 'キーワードは30文字以内に設定してください。',
    ]
  }),
  methods: {
    createTitles() {
      var result = this.$refs.form.validate();
      if (result) {
        var title_tmplate = []

        // TODO: タイトル作成用ひな形の読み込み
        title_tmplate = [
          ["【必見】", "完全解説！おすすめ10選を紹介"],
          ["【おすすめ】", "完全解説！おすすめ20選を紹介"],
          ["【一押し】", "完全解説！おすすめ30選を紹介"],
          ["【重要】", "完全解説！おすすめ40選を紹介"],
          ["【要チェック】", "完全解説！おすすめ50選を紹介"],
          ["【閲覧注意】", "完全解説！おすすめ60選を紹介"],
        ];

        this.titles = [];
        [...Array(3)].map(() => {
          var randm_num = Math.floor( Math.random() * title_tmplate.length);
          this.titles.push(title_tmplate[randm_num][0] + this.keyword + title_tmplate[randm_num][1]);          
          title_tmplate.splice(randm_num, 1);
        });
      }
    }
  },
}
</script>

<style scoped lang="scss">
</style>