<template>
  <div class="cardGroup">
    <div class="card cardGroup__card">
      <div class="card__description cardGroup__cardDescription">
        <div class="icon fa fa-thumbs-o-up card__descriptionIcon"></div>
        <div class="card__descriptionText">Trial</div>
      </div>
      <div class="card__price">Free!</div>
    </div>
    <div class="card cardGroup__card">
      <div class="card__description cardGroup__cardDescription">
        <div class="icon fa fa-trophy card__descriptionIcon"></div>
        <div class="card__descriptionText">Basic tier<br/>(most popular)</div>
      </div>
      <div class="card__price">$10.00</div>
    </div>
    <div class="card cardGroup__card">
      <div class="card__description cardGroup__cardDescription">
        <div class="icon fa fa-bolt card__descriptionIcon"></div>
        <div class="card__descriptionText">Advanced tier<br/>(only for enterprise-level professionals)</div>
      </div>
      <div class="card__price">$6,000.00</div>
    </div>
  </div>
</template>

<style>
  .cardGroup {
    /**
     * Lay out the children of this container with
     * flexbox, which is horizontal by default.
     */
    display: flex;

    border: 1px solid #CAD0D2;
    border-radius: 4px;
    overflow: hidden;
  }

    .cardGroup__card {
      /**
       * The flex property is a short-hand for setting
       * the flex-grow, flex-shrink, and flex-basis
       * properties. These properties control how the
       * element resizes to fill its container.
       *
       * We'll set flex-grow to 1 so that it will
       * expand to fill its container. (The default
       * default value is 0.)
       *
       * We'll also set flex-shrink to 1 so that the
       * element will shrink as its container gets
       * smaller. (The default value is 1.)
       *
       * Last, we set flex-basis to 0 so that its
       * size is solely determined by the size of
       * the container. (The default value
       * is auto, which would cause the content's
       * size to also be a factor in this calculation.)
       *
       * The net result of these properties is that the
       * element is a fluid size, and will expand and
       * shrink with its container and siblings, but
       * they will all have the same size, even if they
       * have different amounts of content.
       *
       * NOTE: IE11 ignores flex short-hand declarations
       * with unitless flex-basis values. So we have to
       * use 0% instead of 0 as a workaround. You can
       * find more info at:
       * github.com/philipwalton/flexbugs.
       */
      flex: 1 1 0%;

      border: none;
      border-radius: 0;
    }

    .cardGroup__card + .cardGroup__card {
      border-left: 1px solid #D7DBDD;
    }

    .cardGroup__cardDescription {
      /**
       * We're doing almost the exact same thing here as
       * we did above. The difference is that its
       * flex-basis is auto, so now the size of its content
       * will affect how large it is.
       */
      flex: 1 1 auto;
    }
</style>
