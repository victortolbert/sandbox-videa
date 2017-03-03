// http://rollup-plugin-vue.znck.me/configuration/
import vue from 'rollup-plugin-vue'

export default {
  entry: 'src/index.js',
  dest: 'dist/my-package.js',
  plugins: [
    // vue({ css: null }) // or  vue()

    // Generatate .scss file for every component
    vue({
      css(content, styles) {
        // ¯\_(ツ)_/¯ do whatever you want to do.
        styles.forEach(({ id, content }) => {
          const filename = path.basename(id).replace(/\.vue$/, '.scss')

          fs.writeFileSync(`dist/scss/${filename}`, content)
        })
      }
    })
  ]
}
