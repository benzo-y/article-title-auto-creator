<template>
  <v-container class="grey lighten-5">
    <v-layout row wrap justify-center>
      <v-flex lg12 xs12 mt-5 mb-5 class="text-center">
        <h1>ホーム</h1>
      </v-flex>
      <v-flex lg10 xs10 mb-5>
        <v-card>
          <v-card-title>
            タイトル作成ツールについて
          </v-card-title>
          <v-card-text>
            <p>
              vue学習用のwebサイトです。<br>
              ブログ運営でタイトルの付け方を勉強したので、タイトルの付け方のポイントとタイトル自動生成ツールを作成しました。
            </p>
            <p>
              タイトル自動生成はヘッダーまたはサイドメニューの「タイトル生成」をクリックしてください。<br>
              「キーワード」を入力し「作成」ボタンをクリックするとタイトルが10個作成されます。
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex lg12 xs12 mt-5 mb-5 class="text-center">
        <h2>タイトルを付けるうえでの{{hints.length}}ポイント</h2>
      </v-flex>
      <v-flex lg10 xs10 mb-5>
        <v-layout row wrap justify-comtens-start mt-0>
          <v-flex lg6 xs12 mb-5 v-for="(hint, index) in hints" :key="index">
            <v-card class="mr-5 ml-5 hint-card">
              <v-card-title>
                {{index+1}}. {{hint.title}}
              </v-card-title>
              <v-card-text>
                {{hint.text}}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import TitleHintList from "../consts/TitleHintList"
  export default {
    name: 'Home',
    data: () =>({
      hints: TitleHintList,
    })
  }
</script>

<style scoped>
.hint-card {
  height: 100%;
}
.hint-card .v-card__text {
    white-space: pre-line;
}
</style>