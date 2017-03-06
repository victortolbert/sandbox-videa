<template lang="pug">
  .example
    vui-title Local Storage Example
    grid
      grid-item(size='1/2')
        .vui-box.vui-theme--default
          form.form(v-on:submit='addTodo')
            input.input.form__input(v-model='inputVal')
            button.btn.form__submit-btn(type='submit') Add
          transition-group.todo-list(tag='ol', name='list')
            li.todo-list__item(v-bind:class='{ complete: todo.complete }', v-bind:key='index', v-for='(todo, index) in filteredTodos')
              button.todo-list__item-content(v-on:click='toggleTodo(todo)')
                | {{ todo.text }}
              button.btn.todo-list__item-remove(v-on:click='deleteTodo(index)')
                i.fa(v-bind:class="[todo.complete ? 'fa-check' : 'fa-times']")
          .filters
            button.btn.filters__btn.filters__btn--all(v-on:click="filterTodos('all')")
              | All
            button.btn.filters__btn.filters__btn--complete(v-on:click="filterTodos('complete')")
              | Complete
            button.btn.filters__btn.filters__btn--incomplete(v-on:click="filterTodos('incomplete')")
              | Incomplete
</template>
<script>
  var filters = {
    all (todos) {
      return todos
    },

    complete (todos) {
      return todos.filter(todo => todo.complete)
    },

    incomplete (todos) {
      return todos.filter(todo => !todo.complete)
    }
  }

  var STORAGE_KEY = 'vue-js-todo-P7oZi9sL'
  var todoStorage = {
    fetch () {
      var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      return todos
    },
    save (todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
  }

  export default {
    data: () => ({
      inputVal: '',
      todos: todoStorage.fetch(),
      visibility: 'all'
    }),

    watch: {
      todos: {
        handler (todos) {
          todoStorage.save(todos)
        }
      }
    },

    computed: {
      filteredTodos () {
        return filters[this.visibility](this.todos)
      }
    },

    methods: {
      addTodo (e) {
        e.preventDefault();
        if (this.inputVal) {
          this.todos.push({
            text: this.inputVal,
            complete: false
          })
        }
        this.inputVal = ''
      },

      toggleTodo (todo) {
        todo.complete = !todo.complete
      },

      filterTodos (filter) {
        this.visibility = filter
      },

      deleteTodo (index) {
        this.todos.splice(index, 1)
        // this.$delete(this.todos, index) // > v2.2

      }
    }
  }
</script>
<style lang="scss" scoped>
  $color-main: #4fc08d;
  $font-family: 'Source Sans Pro',
  sans-serif;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "liga", "kern";
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    background: linear-gradient(210deg, lighten($color-main, 20%), $color-main);
  }

  body {
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $font-family;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .app {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 1em;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(25, 25, 25, .25);
  }

  .btn {
    font-size: 14px;
    margin: 0 .5em;
    border-radius: 2em;
    padding: 0.75em 1.5em;
    cursor: pointer;
    background: none;
    color: darken($color-main, 20%);
    border: 1px solid;
    letter-spacing: 1px;
    font-family: $font-family;
    color: #4fc08d;
    border: $color-main 1px solid;
    transition: 250ms ease-out;
    &:hover,
    &:focus {
      color: #fff;
      background: $color-main;
    }
  }

  .form {
    width: 100%;
    padding: 1.5rem 1rem 0 1rem;
    display: flex;
    &__input {
      width: 100%;
      font-size: 14px;
      margin: 0 .5em;
      border-radius: 2em;
      padding: 0.75em 1.5em;
      background: none;
      font-family: $font-family;
      border: #e3e3e3 1px solid;
      transition: border 250ms ease-out;
      &:focus {
        border: $color-main 1px solid;
        outline: none;
      }
    }
    &__input,
    &__submit-btn {}
  }

  .todo-list {
    $block: #{&};
    width: 100%;
    padding: 0 1rem;
    flex: 1;
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5em;
      margin-bottom: .5em;
      border-radius: 3px;
      transition: 200ms;
      color: $color-main;
      &:last-child {
        margin-bottom: 0;
      }
      &.complete {
        color: lightgreen;
        #{$block}__item-content {
          &:after {
            background: lightgreen;
          }
        }
      }
    }
    &__item-content {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        height: 1px;
        background: $color-main;
        transition: 250ms ease-out;
        transform-origin: center;
        transform: scalex(0);
      }
      &:hover,
      &:focus {
        &:after {
          transform: scalex(1);
        }
      }
    }
    &__item-remove {
      margin-left: .5em;
      background: none;
      border: 1px solid;
      color: inherit;
      padding: 0;
      line-height: 1;
      width: 2em;
      height: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 80%;
    }
  }

  .filters {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 1rem 1.5rem 1rem;
  }

  .list-move,
  .list-leave-active,
  .list-enter-active,
  {
    transition: 500ms cubic-bezier(.87, -.41, .19, 1.44);
  }

  .list-enter,
  .list-leave-active {
    transform: translate(100%, 0);
    opacity: 0;
  }
</style>
