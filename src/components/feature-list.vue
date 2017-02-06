<template>
  <div class="featureList">
    <div class="featureListItem">
      <div class="featureListItem__icon">
        <div class="icon fa fa-calendar"></div>
      </div>
      <div class="featureListItem__description">The calendar feature makes scheduling a snap.</div>
    </div>
    <div class="featureListItem featureListItem--reverse">
      <div class="featureListItem__icon">
        <div class="icon fa fa-dashboard"></div>
      </div>
      <div class="featureListItem__description">Our dashboard gives you a bird&rsquo;s-eye-view-at-a-glance-on-the-go.</div>
    </div>
    <div class="featureListItem">
      <div class="featureListItem__icon">
        <div class="icon fa fa-envelope"></div>
      </div>
      <div class="featureListItem__description">You can get notified by email or SMS.</div>
    </div>
  </div>
</template>
<style>
  .featureListItem {
    /**
     * Lay out the children of this container with
     * flexbox, which is horizontal by default.
     */
    display: flex;

    /**
     * Align the children in the center, along
     * the main axis, which is horizontal in this case.
     */
    align-items: center;

    max-width: 400px;
    padding: 10px;
  }

  .featureListItem + .featureListItem {
    border-top: 1px solid #D7DBDD;
  }

  .featureListItem--reverse {
    /**
     * We can specify the flex-direction so that
     * the children elements are displayed in the
     * reverse order of how they appear in the
     * markup.
     */
    flex-direction: row-reverse;
  }

    .featureListItem__icon,
    .featureListItem__description {
      padding: 5px 15px;
    }

    .featureListItem__icon {
      font-size: 50px;
      line-height: 0;
    }

    .featureListItem__description {
      color: #86969C;
      font-size: 12px;
    }
</style>
