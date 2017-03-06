<template lang="pug">
  #vue-root.container
    grid
      grid-item(size='1/1')
        vui-title JSON Tree View
    grid.vui-m-bottom--large
      grid-item(size='1/1')
        vui-subtitle Simple JSON #[small opened until depth of 7]
        .vui-box.vui-theme--default
          tree-view(:data='sampleData', max-depth='7')
    grid
      grid-item(size='1/1')
        vui-subtitle Complicated JSON #[small opened until depth of 3]
        .vui-box.vui-theme--default
          tree-view(:data='sampleData1', max-depth='3')

</template>

<script>
  import axios from '~plugins/axios'
  import moment from 'moment'
  import TreeView from '~components/tree-view'

  export default {
    components: {
      TreeView
    },

    methods: {
      // return pretty-printed JSON
      formatJSON (theJSON) {
        return JSON.stringify(theJSON, true, 2)
      }
    },

    data: () => ({
      // Returns a JSON object with common
      // data structures, such as Arrays,
      // Objects and raw Values
      //sampleData: ["test"],
      sampleData: {"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}},
      sampleData1: {"medications":[{"aceInhibitors":[{"name":"lisinopril","strength":"10 mg Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}],"antianginal":[{"name":"nitroglycerin","strength":"0.4 mg Sublingual Tab","dose":"1 tab","route":"SL","sig":"q15min PRN","pillCount":"#30","refills":"Refill 1"}],"anticoagulants":[{"name":"warfarin sodium","strength":"3 mg Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}],"betaBlocker":[{"name":"metoprolol tartrate","strength":"25 mg Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}],"diuretic":[{"name":"furosemide","strength":"40 mg Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}],"mineral":[{"name":"potassium chloride ER","strength":"10 mEq Tab","dose":"1 tab","route":"PO","sig":"daily","pillCount":"#90","refills":"Refill 3"}]}],"labs":[{"name":"Arterial Blood Gas","time":"Today","location":"Main Hospital Lab"},{"name":"BMP","time":"Today","location":"Primary Care Clinic"},{"name":"BNP","time":"3 Weeks","location":"Primary Care Clinic"},{"name":"BUN","time":"1 Year","location":"Primary Care Clinic"},{"name":"Cardiac Enzymes","time":"Today","location":"Primary Care Clinic"},{"name":"CBC","time":"1 Year","location":"Primary Care Clinic"},{"name":"Creatinine","time":"1 Year","location":"Main Hospital Lab"},{"name":"Electrolyte Panel","time":"1 Year","location":"Primary Care Clinic"},{"name":"Glucose","time":"1 Year","location":"Main Hospital Lab"},{"name":"PT/INR","time":"3 Weeks","location":"Primary Care Clinic"},{"name":"PTT","time":"3 Weeks","location":"Coumadin Clinic"},{"name":"TSH","time":"1 Year","location":"Primary Care Clinic"}],"imaging":[{"name":"Chest X-Ray","time":"Today","location":"Main Hospital Radiology"},{"name":"Chest X-Ray","time":"Today","location":"Main Hospital Radiology"},{"name":"Chest X-Ray","time":"Today","location":"Main Hospital Radiology"}]}
    })
  }
</script>
