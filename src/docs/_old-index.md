---
order: 1
---

> The Videa Design system is a collection of design patterns, components, and guidelines to ensure the creation of unified ...

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

---

[![forthebadge](http://forthebadge.com/images/badges/oooo-kill-em.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/fuck-it-ship-it.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/contains-technical-debt.svg)](http://forthebadge.com)

### Theme switching with CSS variables
---

```sass
:root { --theme-color: cornflowerblue }
h1 { color: var(--theme-color) }
a { color: var(--theme-color) }
strong { color: var(--theme-color) }
```

```js
const rootElement = document.documentElement
rootElement.style.setProperty('--theme-color', 'plum')
```

### Component categories

| Category | Description |
|----------|-------------|
| **Utilities:** | Components with a single purpose and specific role |
| **Common:** | Components that may appear anywhere on the site |
| **Global:** | Components that appear on every page on the site |
| **Layout:** | Components concerned with macro layout |
| **Scopes:** | Components used to style scoped areas of content |
| **Templates:** | Templates for particular page types |

## For generating fake data

<https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html>


## Process

`hypothesis -> develop -> test -> refine -> "prove" -> publish`

Solution is used and is identified or proposed as a ‘Pattern’.

Pattern is reviewed, tested and built in the best way possible:

1. Accessible
2. Performant
3. Maintainable
4. Reusable

## Purpose of the Videa Design System:

* Single place for Videa Teams to find ‘Production Ready’ HTML + CSS + Javascript for Citizen facing and internal services. **Make the right thing to do, the easy thing to do.** *No more bootstrap*

* Documentation for how teams should write, test and maintain HTML + CSS + Javascript for the Videa. Get teams doing things consistently to a high standard.

* A way for teams and developers to write their own patterns and code which can be shared back with the department (and wider gov). **Avoid teams solving the same problems.**

## Our users:

- Product Owners
- Content Designers
- Front-end developers
- Software Engineers ('Full stack developers', Backend developers)
- Interaction Designers

  <img src="/shared/diagrams/vuex.png" alt="">

  ```
  /shared/diagrams/vue-component-with-preprocessors.png
  /shared/diagrams/vue-component.png
  /shared/diagrams/props-events.png
  /shared/diagrams/vue2-vs-vue1.jpg
  /shared/diagrams/transition.png
  /shared/diagrams/lifecycle.png
  /shared/diagrams/state.png
  /shared/diagrams/data.png
  /shared/diagrams/vuex.png
  ```

Inline-style:
![data alt text](/shared/diagrams/data.png)

Reference-style:

![alt-text][lifecycle]

![vue-component-with-preprocessors](/shared/diagrams/vue-component-with-preprocessors.png)
![text-baselining](/shared/diagrams/text-baselining.png)
![vue-component](/shared/diagrams/vue-component.png)
![props-events](/shared/diagrams/props-events.png)
![vue2-vs-vue1](/shared/diagrams/vue2-vs-vue1.png)
![transitition](/shared/diagrams/transition.png)
![box-model](/shared/diagrams/box-model.png)
![state](/shared/diagrams/state.png)
![data](/shared/diagrams/data.png)
![vuex](/shared/diagrams/vuex.png)


[lifecycle]: /shared/diagrams/lifecycle.png "Vue Lifecycle Diagram"



[fractal]: http://fractal.build "A tool to help you build & document web component libraries, and then integrate them into your web projects."
[accounting]: https://github.com/nmartinez23/accountingJS "Javascript library for simple and advanced number, money and currency formatting."
[faker]: https://github.com/Marak/faker.js "generate massive amounts of fake data in Node.js and the browser"
[moment]: https://github.com/moment/moment "Parse, validate, manipulate, and display dates in javascript. "
[3]: http://alistapart.com/article/settingtypeontheweb "Setting Type on the Web to a Baseline Grid"
[cleave]: https://github.com/nosir/cleave.js "Format input text content when you are typing... "
[nuxt]: http://nuxtjs.org "Framework for server-rendered Vue.js applications."
[1]: http://nicolasgallagher.com/about-html-semantics-front-end-architecture/
[validator]: http://simple-vue-validator.maijin.info/ "Simple Vue Validator"
[audio-player]: https://github.com/Blocklevel/vue-howler "Vue Howler"
[2]: https://spec.fm/specifics/8-pt-grid "The 8-Point Grid"

# Cleave

CreditCardDetector.js
DateFormatter.js
NumeralFormatter.js
PhoneFormatter.js
