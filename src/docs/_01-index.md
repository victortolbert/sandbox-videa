---
hidden: true
title: UI Styleguide and Patterns Lab
---

> An overview ...

Quick start

```
# Clone the repository
$ git clone https://tfs.videa.tv/videa-sandbox <directory>
$ cd <directory>

# Install the dependencies
$ npm install # or yarn

# Develop w/hot reloading (by default: http://localhost:3000)
$ npm run fractal

# Generate static documentation
$ npm run fractal:generate
```

### How to add `CSS` and `HTML` to the website

1. The assets will be accessed via the website: <http://videa.design>
2. The CSS will be checked into the `videa-ui-css` repo. The developer should include as a npm package.
3. What if CSS and HTML is not on the website?
4.  The developers need to following this process:

- BEM

### Useful Tools
- SCSS to CSS converter
-        Component normally only has HTML and CSS
-        Have UI developer approve the pull request

## The demo site ( http://videa.demo.int )

- Pug for generating HTML
- Stylus for generating CSS


The Demo site uses components from with default JavaScript scripts. These scripts should be replaced with Angular implementation.

- Lint (or some program) to format JavaScript file
- A tool to write JSON file

### How to add JavaScript to the website

1. UI user controls can be found in `videa-ui-component` repository.
2. The component should have html, css and JavaScript.
  - Who should review the PR for this?
