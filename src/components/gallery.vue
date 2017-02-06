<template>
  <div class="gallery">
    <div class="photo photo1 photo--large">1</div>
    <div class="photo photo2 photo--large">2</div>
    <div class="photo photo3 photo--large">3</div>
    <div class="photo photo4 photo--large">4</div>
    <div class="photo photo5 photo--large">5</div>
    <div class="photo photo6 photo--large">6</div>
    <div class="photo photo7 photo--large">7</div>
    <div class="photo photo8 photo--large">8</div>
    <div class="photo photo9 photo--large">9</div>
    <div class="photo photo10 photo--large">10</div>
  </div>
</template>

<style>
  .gallery {
    /**
     * Lay out the children of this container with
     * flexbox, which is horizontal by default.
     */
    display: flex;

    /**
     * Allow the children to wrap to the next "row",
     * instead of trying to squeeze them all into
     * a single row.
     */
    flex-wrap: wrap;

    width: 478px;
    padding: 5px;
    border: 1px solid #D7DBDD;
  }

  .photo2 {
    background-image: url('../images/dog_2.jpg');
  }

  .photo3 {
    background-image: url('../images/dog_3.jpg');
  }

  .photo4 {
    background-image: url('../images/dog_4.jpg');
  }

  .photo5 {
    background-image: url('../images/dog_5.jpg');
  }

  .photo6 {
    background-image: url('../images/dog_1.jpg');
  }

  .photo7 {
    background-image: url('../images/dog_2.jpg');
  }

  .photo8 {
    background-image: url('../images/dog_3.jpg');
  }

  .photo9 {
    background-image: url('../images/dog_4.jpg');
  }

  .photo10 {
    background-image: url('../images/dog_5.jpg');
  }
</style>
