const path = require('path')

// Create and export a fractal instance
const fractal = module.exports = require('@frctl/fractal').create()

// Customize theme
const mandelbrot = require('@frctl/mandelbrot')({
  format: 'yaml',
  nav: ['docs', 'components'],
  skin: 'white',
  styles: ['default', '/css/vui.css']
})

// Project config
fractal.set('project.title', 'videa.design/sandbox')
fractal.set('project.description', 'Build. Document. Integrate')
fractal.set('project.version', '0.1.0')
fractal.set('project.lastUpdated', new Date())

// Template Engine config
const mdAbbr = require('markdown-it-abbr')
const mdFootnote = require('markdown-it-footnote')
const md = require('markdown-it')({
  html: true,
  xhtmlOut: true,
  typographer: true
}).use(mdAbbr).use(mdFootnote)

const nunjucksDate = require('nunjucks-date')
const nunjucks = require('@frctl/nunjucks')({
  paths: ['docs'],
  filters: {
    date: nunjucksDate,
    markdown (str) {
      return md.render(str)
    },
    markdownInline (str) {
      return md.renderInline(str)
    },
    slugify (str) {
      return str.toLowerCase().replace(/[^\w]+/g, '')
    },
    stringify () {
      return JSON.stringify(this, null, '\t')
    }
  }
})

// Components config
fractal.components.engine(nunjucks)
fractal.components.set('ext', '.html')
fractal.components.set('path', path.join(__dirname, 'src/components'))
fractal.components.set('label', 'Components')

// Docs config
fractal.docs.engine(nunjucks)
fractal.docs.set('ext', '.md')
fractal.docs.set('path', path.join(__dirname, 'src/docs'))

// Web UI config
fractal.web.theme(mandelbrot)
fractal.web.set('static.path', path.join(__dirname, 'static'))
fractal.web.set('builder.dest', '/Users/vtolbert/videa/design/patterns')
// fractal.web.set('builder.urls.ext', null)
