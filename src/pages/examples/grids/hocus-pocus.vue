<template lang="pug">
  .container
    .grid
      .grid-item.compact-hidden(class='1/5')
        .navigation(data-gumshoe-header='', data-gumshoe='')
          ul.list-menu
            li.is-active
              a.is-active(href='#intro', data-scroll='') Intro
            li
              a(href='#quick-start', data-scroll='') Quick Start
            li
              a(href='#defaults', data-scroll='') Defaults
            li
              a(href='#colors', data-scroll='') Colors
            li
              a(href='#rwd', data-scroll='') Responsive Design
            li
              a(href='#grid', data-scroll='') Grid
            li
              a(href='#typography', data-scroll='') Typography
            li
              a(href='#lists', data-scroll='') Lists
            li
              a(href='#images', data-scroll='') Images
            li
              a(href='#tables', data-scroll='') Tables
            li
              a(href='#forms', data-scroll='') Forms
            li
              a(href='#buttons', data-scroll='') Buttons
            li
              a(href='#boxes', data-scroll='') Boxes
            li
              a(href='#media', data-scroll='') Media
            li
              a(href='#sticky-footer', data-scroll='') Sticky Footer
      .grid-item(class='4/5 compact-1/1')
        .hidden.compact-visible.margin-bottom
          ul.list-inline
            li
              a(href='#intro', data-scroll='') Intro
            li
              a(href='#quick-start', data-scroll='') Quick Start
            li
              a(href='#defaults', data-scroll='') Defaults
            li
              a(href='#colors', data-scroll='') Colors
            li
              a(href='#rwd', data-scroll='') Responsive Design
            li
              a(href='#grid', data-scroll='') Grid
            li
              a(href='#typography', data-scroll='') Typography
            li
              a(href='#lists', data-scroll='') Lists
            li
              a(href='#images', data-scroll='') Images
            li
              a(href='#tables', data-scroll='') Tables
            li
              a(href='#forms', data-scroll='') Forms
            li
              a(href='#buttons', data-scroll='') Buttons
            li
              a(href='#boxes', data-scroll='') Boxes
            li
              a(href='#media', data-scroll='') Media
            li
              a(href='#sticky-footer', data-scroll='') Sticky Footer
        h1#intro.no-margin-vertical
          | Hocus-Pocus
          a.text-small(href='https://github.com/bkzl/hocus-pocus/tree/v0.3.4')
            | v0.3.4
        p
          small.text-muted
            | Created and maintained by
            a(href='https://twitter.com/_bkzl') @_bkzl
        p
          | Hocus-Pocus is a universal and lightweight stylesheet starter kit that focuses
          | on base html elements and typography. You can change the look of every single
          | component, disable some features and define a range of helpers with variables.
        h2#why-not-bootstrap Why not Bootstrap?
        p
          | Libraries like Bootstrap or Foundation are great and have greatly changed how
          | people think about CSS. However, in most cases within my own project work, I
          | just don’t need all these features and UI components like progress bars or
          | breadcrumbs. Instead, I prefer to have something more universal that I can use
          | in any project.
        h2#key-features Key Features
        p
          | The following features are the most characteristic to Hocus-Pocus:
        ul
          li
            | Enhanced
            a(href='https://github.com/necolas/normalize.css') normalize.css
            |  reset
          li
            | Default colors set and color helpers thanks to
            a(href='http://clrs.cc') clrs.cc
          li Widely responsive web design support with customizable breakpoints and approach
          li Flexbox grid with universal, fraction based width helpers
          li
            | Visibility and spacing helpers (auto-generated for the each viewport breakpoint!)
          li Typography with vertical rhythm based on rem units
          li
            | Components like lists, menus, tables, forms, buttons, boxes, media object and sticky footer
        p
          | Code is open sourced
          a(href='https://github.com/bkzl/hocus-pocus/') on GitHub
          | .
          |             Up to date changelog is available under
          a(href='https://github.com/bkzl/hocus-pocus/releases') the releases section
          | .
        p
          | I appreciate any comments, feedback, and information about potential issues.
          | Have you experienced a bug or noticed a mistake in documentation?
          | Please
          a(href='https://github.com/bkzl/hocus-pocus/issues') add a new issue
          | .
          |             Thanks!
        //
        h2#quick-start Quick Start
        ul.list-tabs(data-tabs='')
          li.is-active
            a(href='#npm', data-tab='') npm
          li
            a(href='#bower', data-tab='') Bower
        div(data-tabs-content='')
          #npm.tabs-pane.active(data-tabs-pane='', tabindex='-1', data-tab-focused='true')
            p
              | Hocus-Pocus requires
              a(href='http://sass-lang.com') Sass
              |       (version 3.3.0 or later) to proper work.
            p
              | Run:
            pre.
            p
              | Then import a main file just after your settings, but before rest of
              | stylesheets. If you want to use color variables in your variables import
              | them first:
            pre.
          #bower.tabs-pane(data-tabs-pane='')
            p
              | Hocus-Pocus requires
              a(href='http://sass-lang.com') Sass
              |       (version 3.3.0 or later) to proper work.
            p
              | Run:
            pre.
            p
              | Then import a main file just after your settings, but before rest of
              | stylesheets. If you want to use color variables in your variables import
              | them first:
            pre.
        p
          | Hocus-Pocus applies a following naming convention:
        pre.
        //
        h2#defaults Defaults
        p
          | The most common settings are listed below. Other defaults are listed
          | on corresponding documentation pages or you can find them
          a(href='https://github.com/bkzl/hocus-pocus/blob/master/sass/_defaults.scss') in the source code
          |   under
          code.nohighlight scss/_defaults.scss
          | .
        pre.
        //
        h2#colors Colors
        p
          | Colors available as variables (so you can override them if you wish to):
        .color-block.bg-white.text-muted $color-white
        .color-block.bg-silver $color-silver
        .color-block.bg-gray $color-gray
        .color-block.bg-black $color-black
        .color-block.bg-red $color-red
        .color-block.bg-orange $color-orange
        .color-block.bg-yellow $color-yellow
        .color-block.bg-lime $color-lime
        .color-block.bg-green $color-green
        .color-block.bg-olive $color-olive
        .color-block.bg-teal $color-teal
        .color-block.bg-aqua $color-aqua
        .color-block.bg-blue $color-blue
        .color-block.bg-navy $color-navy
        .color-block.bg-fuchsia $color-fuchsia
        .color-block.bg-purple $color-purple
        .color-block.bg-maroon $color-maroon
        p
          | Defaults:
        pre.
        h3#color-helpers Color Helpers
        p
          | Specify text and background color of an element.
        p
          | Color helpers use
          code.nohighlight !important
          |  and are generated for each color in
          code.nohighlight $color-map
          | .
        p
          | Usage:
        pre.
        .example
          p.text-muted Paragraph with a muted text
          p.text-brand Paragraph with a brand text
          p.bg-negative Paragraph with a negative background
          p.bg-black.text-white Paragraph with a black background and white text
        pre.
        //
        h2#rwd Responsive Design
        p
          | Choose approach of writing responsive design that you prefer:
          code.nohighlight mobile-first
          |  or
          code.nohighlight desktop-first
          | .
        p
          | Define custom breakpoints. Each of them gets a mixin and own set of helpers.
        p
          | Defaults:
        pre.
        p
          | Additional helper for hidpi displays:
        pre.
        p
          | Usage:
        pre.
        pre.
        h3#width-helpers Width Helpers
        p
          | Width helpers work with various elements like grid items, boxes, form inputs,
          | table cells etc.
        p
          | Fractions of these numbers are available:
          code.nohighlight n/1
          | ,
          code.nohighlight n/2
          | ,
          code.nohighlight n/3
          | ,
          code.nohighlight n/4
          | ,
          code.nohighlight n/5
          | ,
          code.nohighlight n/6
          | ,
          code.nohighlight n/8
          | ,
          code.nohighlight n/9
          | ,
          code.nohighlight n/10
          |  and
          code.nohighlight n/12
          | .
        p
          | Width helpers are generated for each breakpoint in
          code.nohighlight $rwd-map
          | .
        p
          | Usage:
        .grid
          .grid-item(class='1/1')
            .preview-grid
              | .1/1
        .grid
          .grid-item(class='1/4')
            .preview-grid
              | .1/4, .2/8, .3/12
          .grid-item(class='3/4')
            .preview-grid
              | .3/4, .6/8, .9/12
        .grid
          .grid-item(class='2/5')
            .preview-grid
              | .2/5, .4/10
          .grid-item(class='3/5')
            .preview-grid
              | .3/5, .6/10
        .grid
          .grid-item(class='1/6')
            .preview-grid
              | .1/6, .2/12
          .grid-item(class='5/6')
            .preview-grid
              | .5/6, .10/12
        .grid
          .grid-item(class='1/2')
            .preview-grid
              | .1/2, .2/4, .3/6, .4/8, .5/10, .6/12
          .grid-item(class='1/8')
            .preview-grid
              | .1/8
          .grid-item(class='3/8')
            .preview-grid
              | .3/8
        .grid
          .grid-item(class='1/5 compact-1/2')
            .preview-grid
              | .1/5.compact-1/2
          .grid-item(class='4/5 compact-1/2')
            .preview-grid
              | .4/5.compact-1/2
        h3#visibility-helpers Visibility Helpers
        p
          | Specify visibility of an element.
        p
          | Visibility helpers use
          code.nohighlight !important
          |  and are generated for each breakpoint in
          code.nohighlight $rwd-map
          | .
        p
          | Following classes are available:
          code.nohighlight .hidden
          | ,
          code.nohighlight .visible
          | ,
          code.nohighlight .block
          | ,
          code.nohighlight .inline-block
          |  and
          code.nohighlight .inline
        p
          | Usage:
        .example
          p.inline.compact-hidden Inline paragraph hidden on mobile
          small.hidden.compact-block Block small text visible on mobile
        pre.
        h3#spacing-helpers Spacing Helpers
        p
          | Specify spacing (margin/padding) of an element.
        p
          | Spacing helpers use
          code.nohighlight !important
          |  and are generated for each size
          |   in
          code.nohighlight $spacing-map
          |  and each breakpoint in
          code.nohighlight $rwd-map
          | .
        p
          | Defaults:
        pre.
        p
          | Usage:
        pre.
        .example
          .padding-vertical.bg-green.text-white.text-mono.text-small
            | .padding-vertical
          .margin.no-padding.bg-olive.text-white.text-mono.text-small
            | .margin.no-padding
          .bg-teal.text-white.text-mono.text-small(class='margin-2/1-bottom')
            | .margin-2/1-bottom
          .compact-no-padding-left.bg-aqua.text-white.text-mono.text-small(class='padding-1/2-left padding-1/2-top')
            | .padding-1/2-left.padding-1/2-top.compact-no-padding-left
          .compact-margin-horizontal.bg-blue.text-white.text-mono.text-small
            | .compact-margin-horizontal
          .bg-navy.text-white.text-mono.text-small(class='compact-padding-1/2')
            | .compact-padding-1/2
        pre.
        //
        h2#grid Grid
        p
          | Create a centered wrapper for grid elements. Usually used as a root element
          | for a whole layout.
        p
          | Defaults:
        pre.
        p
          | Usage:
        .example
          .container.preview-grid
            | .container
        pre.
        p
          | Build a grid using a combination of grid items and
          a(href='#width-helpers') width helpers
          | .
          |   Grid elements can be nested. It's based on flexbox.
        p
          | Defaults:
        pre.
        p
          | Usage:
        .example
          .grid
            .grid-item(class='1/3')
              .preview-grid .grid-item.1/3
            .grid-item(class='2/3')
              .preview-grid .grid-item.2/3
        pre.
        h3#grid-types Grid Types
        p
          | Set horizontal and/or vertical alignment:
        .example
          .grid.grid-left
            .grid-item(class='1/3')
              .preview-grid
                | .grid-item.1/3
        pre.
        .example
          .grid.grid-center
            .grid-item(class='1/3')
              .preview-grid
                | .grid-item.1/3
        pre.
        .example
          .grid.grid-right
            .grid-item(class='1/3')
              .preview-grid
                | .grid-item.1/3
        pre.
        .example
          .grid.grid-top
            .grid-item(class='1/2')
              .preview-grid.preview-grid-large
                | .grid-item.1/2
            .grid-item(class='1/2')
              .preview-grid
                | .grid-item.1/2
        pre.
        .example
          .grid.grid-middle
            .grid-item(class='1/2')
              .preview-grid.preview-grid-large
                | .grid-item.1/2
            .grid-item(class='1/2')
              .preview-grid
                | .grid-item.1/2
        pre.
        .example
          .grid.grid-bottom
            .grid-item(class='1/2')
              .preview-grid.preview-grid-large
                | .grid-item.1/2
            .grid-item(class='1/2')
              .preview-grid
                | .grid-item.1/2
        pre.
        p
          | Create a flat grid without gutter:
        .example
          .grid.grid-flat.preview-grid
            .grid-item(class='1/2')
              .preview-grid
                | .grid-item.1/2
            .grid-item(class='1/2')
              .preview-grid
                | .grid-item.1/2
        pre.
        p
          | Create a grid where content of a first item is aligned to left and content
          | of a second item is aligned to right:
        .example
          .grid.grid-pair
            .grid-item(class='1/2')
              .preview-grid
                | .grid-item.1/2
            .grid-item(class='1/2')
              .preview-grid
                | .grid-item.1/2
        pre.
        p
          | Reverse grid items order (available for each breakpoint in
          code.nohighlight $rwd-map
          | ):
        .example
          .grid.grid-reverse
            .grid-item(class='1/3')
              .preview-grid
                | .grid-item.1/3
            .grid-item(class='2/3')
              .preview-grid
                | .grid-item.2/3
        pre.
        .example
          .grid.compact-grid-reverse
            .grid-item(class='2/5')
              .preview-grid
                | .grid-item.2/5
            .grid-item(class='3/5')
              .preview-grid
                | .grid-item.3/5
        pre.
        p
          | Stack grid items (available for each breakpoint in
          code.nohighlight $rwd-map
          | ):
        .example
          .grid.grid-stack
            .grid-item(class='1/3')
              .preview-grid
                | .grid-item.1/3
            .grid-item(class='2/3')
              .preview-grid
                | .grid-item.2/3
        pre.
        .example
          .grid.compact-grid-stack
            .grid-item(class='2/5 compact-1/1')
              .preview-grid
                | .grid-item.2/5.compact-1/1
            .grid-item(class='3/5 compact-1/1')
              .preview-grid
                | .grid-item.3/5.compact-1/1
        pre.
        p
          | Combination of stack and reverse:
        .example
          .grid.grid-reverse.grid-stack
            .grid-item(class='5/6')
              .preview-grid
                | .grid-item.5/6
            .grid-item(class='1/6')
              .preview-grid
                | .grid-item.1/6
        pre.
        .example
          .grid.compact-grid-reverse.compact-grid-stack
            .grid-item(class='1/3')
              .preview-grid
                | .grid-item.1/3
            .grid-item(class='2/3')
              .preview-grid
                | .grid-item.2/3
        pre.
        h3#float-helpers Float Helpers
        p
          | Clearfix and float helpers.
        .example
          .clearfix
            .float-left.preview-grid .float-left
            .float-right.preview-grid .float-right
        pre.
        //
        h2#typography Typography
        p
          | Typography elements keep vertical rhythm and have custom reset.
        p
          | Defaults:
        pre.
        h3#headings Headings
        .example
          h1 Heading Level 1
        pre.
        .example
          h2 Heading Level 2
        pre.
        .example
          h3 Heading Level 3
        pre.
        .example
          h4 Heading Level 4
        pre.
        .example
          h5 Heading Level 5
        pre.
        .example
          h6 Heading Level 6
        pre.
        h3#paragraphs Paragraphs
        p
          | Default styles for
          code.nohighlight <p>
          | ,
          code.nohighlight <strong>
          | ,
          code.nohighlight <em>
          | ,
          code.nohighlight <sup>
          | ,
          code.nohighlight <sub>
          | ,
          code.nohighlight <small>
          | ,
          code.nohighlight <a>
          | ,
          code.nohighlight <mark>
          | ,
          code.nohighlight <del>
          | ,
          code.nohighlight <ins>
          | ,
          code.nohighlight <s>
          |   and
          code.nohighlight <u>
          | .
        .example
          p
            | Paragraph with a
            strong strong
            |  element.
          p
            | Paragraph with an
            em emphasis
            |  element.
          p
            | Paragraph with a
            sup sup
            |  element.
          p
            | Paragraph with a
            sub sub
            |  element.
          p
            | Paragraph with a
            small small
            |  element.
          p
            | Paragraph with a
            a(href='#') link
            | .
          p
            | Paragraph with a
            mark mark
            |  element.
          p
            | Paragraph with a
            del deleted text
            |  and an
            ins inserted text
            |  elements.
          p
            | Paragraph with a
            s strikethrough
            |  element.
          p
            | Paragraph with an
            u underline
            |  element.
        pre.
        h3#blockquote Blockquote
        .example
          blockquote
            p
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
              | Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida.
        pre.
        h3#code Code
        .example
          code.nohighlight
            | .hocus-pocus {
            | display: block;
            | }
        pre.
        h3#rule Rule
        .example
          hr
        pre.
        h3#text-helpers Text Helpers
        .example
          p.text-micro Micro text
          p.text-small Small text
          p Normal text
          p.text-lead Lead text
        pre.
        .example
          p.text-mono Mono text
        pre.
        .example
          p.text-light Light weight text
          p.text-normal Normal weight text
          p.text-bold Bold weight text
        pre.
        .example
          p.text-lowercase Lowercased text
          p.text-uppercase Uppercased text
          p.text-capitalize Capitalized text
        pre.
        .example
          p.text-left Left aligned text
          p.text-center Center aligned text
          p.text-right Right aligned text
        pre.
        //
        h2#lists Lists
        p
          | Defaults:
        pre.
        p
          | Usage:
        .example
          ol
            li List item 1
            li List item 2
        pre.
        .example
          ul
            li List item 1
            li
              | List item 2
              ul
                li List item A
                li List item B
        pre.
        .example
          ul.list-reset
            li List item 1
            li List item 2
            li List item 3
        pre.
        .example
          ul.list-inline
            li List item 1
            li List item 2
            li List item 3
        pre.
        .example
          ul.list-divided
            li List item 1
            li List item 2
            li List item 3
        pre.
        .example
          ul.list-menu
            li
              a(href='#-') List item 1
            li
              a(href='#-') List item 2
            li
              a(href='#-') List item 3
        pre.
        .example
          dl
            dt Definition list title
            dd Definition list description
        pre.
        //
        h2#images Images
        p
          | Images are vertically aligned to the middle of container and have
          code.nohighlight box-sizing
          |  set to
          code.nohighlight content-box
          | .
        p
          | Replace any element that contains text with an image:
        pre.
        p
          | Usage:
        pre.
        h3#image-helpers Image Helpers
        .example
          img.img-rwd(src='//placehold.it/1200x200/39cccc/fff', alt='example')
        pre.
        .example
          img.img-rounded(src='//placehold.it/150x150/39cccc/fff', alt='example')
        pre.
        .example
          img.img-circle(src='//placehold.it/150x150/39cccc/fff', alt='example')
        pre.
        //
        h2#tables Tables
        p
          | Defaults:
        pre.
        p
          | Usage:
        .example
          table
            colgroup
              col.(class='1/4')
              col.(class='1/2')
              col.(class='1/4')
            thead
              tr
                th Header 1
                th Header 2
                th Header 3
            tbody
              tr
                td Cell A
                td Cell B
                td Cell C
              tr
                td Cell D
                td Cell E
                td Cell F
              tr
                td Cell G
                td Cell H
                td Cell I
        pre.
        .example
          table.table-bordered
            thead
              tr
                th Header 1
                th Header 2
                th Header 3
            tbody
              tr
                td Cell A
                td Cell B
                td Cell C
              tr
                td Cell D
                td Cell E
                td Cell F
              tr
                td Cell G
                td Cell H
                td Cell I
        pre.
        .example
          table.table-bordered.table-zebra
            thead
              tr
                th Header 1
                th Header 2
                th Header 3
            tbody
              tr
                td Cell A
                td Cell B
                td Cell C
              tr
                td Cell D
                td Cell E
                td Cell F
              tr
                td Cell G
                td Cell H
                td Cell I
        pre.
        .example
          table.table-bordered.table-hover
            thead
              tr
                th Header 1
                th Header 2
                th Header 3
            tbody
              tr
                td Cell A
                td Cell B
                td Cell C
              tr
                td Cell D
                td Cell E
                td Cell F
              tr
                td Cell G
                td Cell H
                td Cell I
        pre.
        //
        h2#forms Forms
        p
          | Usage:
        .example
          form.form-inline
            input(type='email', placeholder='E-mail')
            input(type='password', placeholder='Password')
            button(type='submit') Submit
        pre.
        .example
          form.form-stacked
            label(for='name') Name
            input#name
            label(for='email') E-mail
            input#email(type='email')
            label(for='password') Password
            input#password(type='password')
            label(for='search') Search
            input#search(type='search')
            label(for='disabled') Disabled
            input#disabled(type='text', disabled='')
            label(for='readonly') Read-only
            input#readonly(type='text', readonly='')
            label
              input(type='checkbox')
              | Remember me
            label(for='gender') Gender
            select#gender
              option(selected='')
              option(value='female') Female
              option(value='male') Male
            label(for='comment') Comment
            textarea#comment
            button(type='submit') Submit
        pre.
        .example
          form.form-horizontal
            .form-item
              label(for='email-horizontal') E-mail
              input#email-horizontal(type='email')
            .form-item
              label(for='password-horizontal') Password
              input#password-horizontal(type='password')
            .form-group
              label
                input(type='checkbox')
                | Remember me
              button(type='submit') Submit
        pre.
        //
        h2#buttons Buttons
        p
          | Defaults:
        pre.
        p
          | Define own button types:
        pre.
        p
          | Usage:
        pre.
        h3#button-types Button Types
        .example
          button(type='submit') Form button
          a.btn(href='#-') Link as a button
        pre.
        .example
          button(disabled='') Disabled button
          a.btn.btn-disabled(href='#-') Disabled link as a button
        pre.
        .example
          a.btn.btn-outline(href='#-') Outline button
          a.btn.btn-brand.btn-outline(href='#-') Outline brand button
        pre.
        .example
          a.btn.btn-flat.bg-aqua(href='#-') Flat button
        pre.
        .example
          a.btn.btn-shadow.bg-aqua(href='#-') Shadowed button
        pre.
        .example
          a.btn.btn-block(href='#-') Block button
        pre.
        .example
          a.btn.btn-brand(href='#-') Brand button
        pre.
        .example
          a.btn.btn-positive(href='#-') Positive button
        pre.
        .example
          a.btn.btn-negative(href='#-') Negative button
        pre.
        //
        h2#boxes Boxes
        p
          | Create an element that is out of a rest of content. Useful for flashes, islands,
          | sidebar boxes etc. The last element inside it will have removed a bottom margin.
        p
          | Define own box types:
        pre.
        p
          | Usage:
        pre.
        h3#box-types Box Types
        .example
          .box
            p Element inside a box
        pre.
        .example
          .box.bg-silver
            p Element inside a box
        pre.
        .example
          .box.box-informative
            p Informative box
        pre.
        .example
          .box.box-positive
            p Positive box
        pre.
        .example
          .box.box-cautionary
            p Cautionary box
        pre.
        .example
          .box.box-negative
            p Negative box
        pre.
        //
        h2#media Media
        p
          | Media object works with any html element.
        p
          | Gutter size modifiers are generated for each size in
          code.hljs
            span.hljs-meta
              span.hljs-meta-keyword $spacing
              | -map
          | .
        p
          | Usage:
        .example
          .media
            img(src='//placehold.it/75x75/39cccc/fff')
            .media-body
              p Example Text
        pre.
        .example
          .media.media-middle
            img(src='//placehold.it/75x75/39cccc/fff')
            .media-body
              p Example Text
        pre.
        .example
          .media.media-bottom
            img(src='//placehold.it/75x75/39cccc/fff')
            .media-body
              p Example Text
        pre.
        .example
          .media(class='media-1/2')
            img(src='//placehold.it/75x75/39cccc/fff')
            .media-body
              p Example Text
        pre.
        .example
          .media(class='media-2/1')
            img(src='//placehold.it/75x75/39cccc/fff')
            .media-body
              p Example Text
        pre.
        .example
          .media.media-flat
            img(src='//placehold.it/75x75/39cccc/fff')
            .media-body
              p Example Text
        pre.
        .example
          .media.media-reverse
            img(src='//placehold.it/75x75/39cccc/fff')
            .media-body
              p Example Text
        pre.
        .example
          .media.media-reverse.media-middle(class='media-3/1')
            img(src='//placehold.it/75x75/39cccc/fff')
            .media-body
              p Example Text
        pre.
        //
        h2#sticky-footer Sticky Footer
        p
          | Pin footer to the bottom of a viewport regardless of the content.
        p
          | Usage:
        pre.
</template>
