module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "タイトル生成サイト",
    }
  },
  transpileDependencies: [
    'vuetify'
  ],

  outputDir: 'docs',
  assetsDir: './',
  publicPath: '/article-title-auto-creator/'
}
