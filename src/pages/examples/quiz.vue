<template lang="pug>
  #app
  h1 {{ quiz.title }}
  // index is used to check with current question index
  div(v-for='(question, index) in quiz.questions')
    // Hide all questions, show only the one with index === to current question index
    div(v-show='index === questionIndex')
      h2 {{ question.text }}
      ol
        li(v-for='response in question.responses')
          label
            // The radio button has three new directives
            // v-bind:value sets "value" to "true" if the response is correct
            // v-bind:name sets "name" to question index to group answers by question
            // v-model creates binding with userResponses
            input(type='radio', v-bind:value='response.correct', v-bind:name='index', v-model='userResponses[index]')
            |  {{response.text}}
      // The two navigation buttons
      // Note: prev is hidden on first question
      button(v-if='questionIndex > 0', v-on:click='prev')
        | prev
      button(v-on:click='next')
        | next
  div(v-show='questionIndex === quiz.questions.length')
    h2
      | Quiz finished
    p
      | Total score: {{ score() }} / {{ quiz.questions.length }}

</template>
<script>
  // Create a quiz object with a title and two questions.
  // A question has one or more answer, and one or more is valid.
  var quiz = {
    title: 'My quiz',
    questions: [
      {
        text: "Question 1",
        responses: [
          { text: 'Wrong, too bad.' },
          { text: 'Right!', correct: true }
        ]
      },
      {
        text: "Question 2",
        responses: [
          { text: 'Right answer', correct: true },
          { text: 'Wrong answer' },
        ]
      }
    ]
  }

  export default {
    data: () => ({
      quiz: quiz,
      // Store current question index
      questionIndex: 0,
      // An array initialized with "false" values for each question
      // It means: "Did the user answer the question correctly?, no".
      userResponses: Array(quiz.questions.length).fill(false)
    }),
    // The view will trigger these methods on click
    methods: {
      // Go to next question
      next () {
        this.questionIndex++
      },
      // Go to previous question
      prev () {
        this.questionIndex--
      },
      // Return "true" count in userResponses
      score () {
        return this.userResponses.filter(function(val) { return val }).length
      }
    }
  }
</script>
