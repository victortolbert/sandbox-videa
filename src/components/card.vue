<template>
  <div class="card card--fixedWidth">
    <div class="card__description">
      <div class="icon fa fa-flask card__descriptionIcon"></div>
      <div class="card__descriptionText">Science potion</div>
    </div>
    <div class="card__price">Costs $5</div>
  </div>
</template>

<style>
  .card {
    /**
     * Lay out the children of this container with
     * flexbox, which is horizontal by default.
     */
    display: flex;

    /**
     * Rotate the main axis so that the children
     * are laid out vertically.
     */
    flex-direction: column;

    border: 1px solid #CAD0D2;
    border-radius: 4px;
    overflow: hidden;
  }

    .card__description {
      /**
       * Lay out the children of this container with
       * flexbox.
       */
      display: flex;

      /**
       * We're going to lay out this element's children
       * just like in the "Centered prompt" example.
       * First we'll rotate the main axis so that the
       * children are laid out vertically.
       */
      flex-direction: column;

      /**
       * Just like in the "Centered prompt", we'll
       * group the children in the center of their
       * container.
       */
      justify-content: center;

      /**
       * And just like in the "Centered prompt" example,
       * we'll align the children in the center, along
       * the main axis.
       */
      align-items: center;

      padding: 15px 0;
    }

      .card__descriptionIcon {
        font-size: 32px;
        margin-bottom: 10px;
      }

      .card__descriptionText {
        color: #57727C;
        font-size: 12px;
        text-align: center;
        max-width: calc(100% - 30px);
      }

    .card__price {
      text-align: center;
      color: #57727C;
      font-size: 12px;
      font-weight: 700;
      padding: 5px 15px;
      border-top: 1px solid #D7DBDD;
      background-color: #EEF3F5;
    }

  .card--fixedWidth {
    max-width: 120px;
  }
</style>
