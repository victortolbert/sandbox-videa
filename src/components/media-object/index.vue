<template lang="pug">
  article.media
    figure.media-left
      p.image.is-64x64
        img(src='http://placehold.it/128x128')
    .media-content
      .content
        p
          strong John Smith
          small @johnsmith
          small 31m
          br
          |         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      nav.level
        .level-left
          a.level-item
            span.icon.is-small
              i.fa.fa-reply
          a.level-item
            span.icon.is-small
              i.fa.fa-retweet
          a.level-item
            span.icon.is-small
              i.fa.fa-heart
    .media-right
      button.delete

</template>
