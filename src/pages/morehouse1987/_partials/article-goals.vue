<template lang="pug">
  article.article
    h2.article__headline Our Reunion Goals
    goals(:goals='reunionGoals')
</template>

<script>
  import Goals from './goals'

  export default {
    components: {
      Goals
    },

    data () {
      return {
        reunionGoals: {
          classGift: { title: 'Class Gift', description: 'Dollars', currently: 160000, target: 300000, isCurrency: true },
          recurringGifts: { title: 'Recurring Gifts', description: 'Classmates', currently: 10, target: 47 },
          firstTimeDonors: { title: 'First Time Donors', description: 'Classmates', currently: 5, target: 93 },
          registrations: { title: 'Registrations', description: 'Classmates', currently: 9, target: 47 },
          classParticipation: { title: 'Class Participation', description: 'Classmates', currently: 43, target: 93 }
        }
      }
    }
  }
</script>

