const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  compilerOptions: {
    isCustomElement: (tag) => tag.startsWith('Buttons'),
  }
})
