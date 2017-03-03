<template>
  <div>
    <autocomplete
      url="https://maps.googleapis.com/maps/api/geocode/json?address="
      :custom-params="{ token: 'dev' }"
      anchor="formatted_address"
      label="formatted_address"
      :process="processJSON"
      :on-select="getData" >
    </autocomplete>
  </div>
</template>

<script>
  import Autocomplete from './autocomplete2-component'

  export default {
    components: { Autocomplete },
    methods: {
      processJSON(json) {
        return json.results;
      },
      getData(data) {
        console.log(data);
      }
    }
  };
</script>

<style lang="stylus" scoped>
  import '~assets/variables'

  .transition, .autocomplete, .showAll-transition, .autocomplete ul, .autocomplete ul li a
    transition: all 0.3s ease-out
    -moz-transition: all 0.3s ease-out
    -webkit-transition: all 0.3s ease-out
    -o-transition: all 0.3s ease-out

  .autocomplete ul
    font-family: sans-serif
    position: absolute
    list-style: none
    background: #f8f8f8
    padding: 10px 0
    margin: 0
    display: inline-block
    min-width: 15%
    margin-top: 10px

  .autocomplete ul:before
    content: ""
    display: block
    position: absolute
    height: 0
    width: 0
    border: 10px solid transparent
    border-bottom: 10px solid #f8f8f8
    left: 46%
    top: -20px

  .autocomplete ul li a
    text-decoration: none
    display: block
    background: #f8f8f8
    color: #2b2b2b
    padding: 5px
    padding-left: 10px

  .autocomplete ul li a:hover, .autocomplete ul li.focus-list a
    color: white
    background: #2F9AF7

  .autocomplete ul li a span
    display: block
    margin-top: 3px
    color: grey
    font-size: 13px

  .autocomplete ul li a:hover span, .autocomplete ul li.focus-list a span
    color: white

  .showAll-transition
    opacity: 1
    height: 50px
    overflow: hidden

  .showAll-enter
    opacity: 0.3
    height: 0

  .showAll-leave
    display: none
</style>
<!-- https://github.com/BosNaufal/vue2-autocomplete -->
<!-- <template>
  <autocomplete
    url="http://localhost/proyek/goodmovie/api/api/v1/search"
    anchor="title"
    label="writer"
    :on-select="getData"

    id="custom id"
    class-name="custom class name"
    placeholder="placeholder"
    :init-value="initial value"
    :init-value="initial value"
    :custom-params="{ token: 'dev' }"
    :min="3"

    :on-input="callbackEvent"
    :on-show="callbackEvent"
    :on-blur="callbackEvent"
    :on-hide="callbackEvent"
    :on-focus="callbackEvent"
    :on-select="callbackEvent"
    :on-before-ajax="callbackEvent"
    :on-ajax-progress="callbackEvent"
    :on-ajax-loaded="callbackEvent"
  >
  </autocomplete>
</template> -->

<script>
  // import Autocomplete from 'vue2-autocomplete-js'
  // export default {
  //   components: { Autocomplete },
  //   methods: {
  //     getFiles (obj) {
  //       console.log(obj)
  //     }
  //   }
  // }
</script>
