<template lang="pug">
  article.article
    h2.article__headline Greetings Brothers from the Class of 1987

    p.article__lede.
      They say an object in motion tends to stay in motion, and an
      object at rest tends to stay at rest. It is a simple law of
      physics. This Founder’s Day is unique. February 14, 2017,
      marks Morehouse College's 150th Birthday. Can you say,
      sesquicentennial?…

    figure
      img(src='/static/shared/morehouse1987/brothers-singing-hymn.jpg')

    .article__featured-photo
      p Photo description goes here in this area
</template>

<style lang="stylus">
  @import '~assets/variables'

  .article
    margin-bottom 32px

  .article__headline
    color color-black
    font-family font-family-strong
    font-size 36px
    // line-height 3 // 48px
    margin-bottom 32px

  .article__lede
    color color-black
    font-family font-family-body
    font-size 24px
    line-height 36px
    margin-bottom 32px

  .article__featured-photo
    color color-french-gray
    font-family font-family-body
    font-size 18px
    line-height 24px
    text-align right
</style>

<!-- article
headline
byline
lede
body
conclusion
https://en.wikipedia.org/wiki/Lead_paragraph
 -->
