<template>
  <v-container class="grey lighten-5">
    <v-layout row wrap justify-center>
      <v-flex lg12 xs12 mt-5 mb-5 class="text-center">
        <h1>タイトル生成</h1>
      </v-flex>
      <v-flex lg10 xs10 mb-5>
        <v-card>
          <v-card-title>
            条件
          </v-card-title>
            <v-card-text>
            <v-form>
              <v-text-field label="キーワード"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="info">作成</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex lg10 xs10 mb-5>
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-icon class="mr-0">
                <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>【必見】○○完全解説！おすすめ10選を紹介【必見】○○完全解説！おすすめ10選を紹介</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon class="mr-0">
                <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>【必見】○○完全解説！おすすめ10選を紹介</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon class="mr-0">
                <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>【必見】○○完全解説！おすすめ10選を紹介</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
</script>

<style scoped lang="scss">
</style>