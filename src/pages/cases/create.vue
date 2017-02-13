<template lang="pug">
  vui-section.create-case
    vui-form
      vui-breadcrumb
        router-link(
          v-bind:to = '{ name: "cases" }'
        ) Main Page
      vui-title Create New Case
      vui-subtitle Fill out the form below to submit your {{ selectedRequestType }} support request.
      vui-fieldset

        //- -> Request Type
        //-   -> Request Subtype
        //-     -> Environment

        //- There is a special request for the release management piece. When a request for change management is presented, the following items must also be captured:
        //- vui-datepicker(
        //-   label = 'Planned Date/Time'
        //- )
        //- vui-checkbox(
        //-   label = 'End User Outage'
        //- )
        //- Pull Request ID
        //- Summary
        //- Justification
        //- Impact/Risk Analysis
        //- Patch Steps
        //- Rollback Plan

        //- Tech Ops Change management will need something similar as well.  They will need a section for the following:
        //- Request
        //- Planned Date start time / end time
        //- Validator
        //- End User Outage
        //- Implementation Step
        //- Rollback Plan
        //- These will need to be separate fields on the webpage but concatenated in Salesforce into the Description field.


        vui-textarea(
          label = 'Subject'
        )
        vui-select(
          v-bind:options = 'requestTypes'
          v-model = 'selectedRequestType'
          label = 'Request Type'
        )
        vui-select(
          v-bind:options = 'requestSubtypes'
          v-model = 'selectedRequestSubtype'
          label = 'Request Sub-Type'
        )
        vui-select(
          v-bind:options = 'environments'
          v-model = 'selectedEnvironment'
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Environment'
        )
        vui-select(
          v-bind:options = 'priorities'
          v-model = 'selectedPriority'
          label = 'Priority'
        )
        vui-select(
          v-bind:options = 'reasons'
          v-model = 'selectedReason'
          label = 'Reason'
        )
        vui-textarea(
          label = 'Description'
        )

        vui-select(
          v-bind:options = 'scrumTeams'
          v-model = 'selectedScrumTeam'
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Scrum Team'
        )

        //- vui-datepicker(
        //-   v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
        //-   label = 'Request Start'
        //- )

        //- vui-datepicker(
        //-   label = 'Request Start'
        //-   v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
        //-   v-model = 'requestStart'
        //-   name = 'requestStart'
        //-   placeholder = 'MM/dd/yyyy'
        //- )

        //- vui-datepicker(
        //-   v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
        //-   label = 'Request End'
        //- )

        //- vui-datepicker(
        //-   label = 'Request End'
        //-   v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
        //-   v-model = 'requestEnd'
        //-   name = 'requestEnd'
        //-   placeholder = 'MM/dd/yyyy'
        //- )

        //- vui-datepicker(
        //-   v-if = 'selectedRequestType == "Release Management -- Change Request"'
        //-   label = 'Planned Date'
        //- )

        //- vui-datepicker(
        //-   label = 'Planned Date'
        //-   v-if = 'selectedRequestType == "Release Management -- Change Request"'
        //-   v-model = 'plannedDate'
        //-   name = 'plannedDate'
        //-   placeholder = 'MM/dd/yyyy'
        //- )

        //- vui-checkbox(
        //-   v-bind:options = 'reasons'
        //-   v-if = 'selectedRequestType == "Release Management -- Change Request" || selectedRequestType == "Release Management -- Change Request"'
        //-   label = 'End User Outage'
        //- )

        vui-input(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Pull Request Id'
        )
        vui-textarea(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Summary'
        )
        vui-textarea(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Justification'
        )
        vui-textarea(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Impact/Risk Analysis'
        )
        //- vui-select(
        //-   v-bind:options = 'riskLevels'
        //-   v-model = 'selectedRiskLevel'
        //-   v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
        //-   label = 'Risk Level'
        //- )
        vui-input(
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Systems Impact'
        )
        //- vui-select(
        //-   v-bind:options = 'reasons'
        //-   v-model = 'selectedRiskLevel'
        //-   v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
        //-   label = 'Require Modifying Monitoring Agents'
        //- )
        vui-select(
          v-bind:options = 'developers'
          v-model = 'selectedDeveloper'
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Dev Tested'
        )
        vui-select(
          v-bind:options = 'qualityAnalysts'
          v-model = 'selectedQualityAnalyst'
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'QA Tested'
        )
        vui-textarea(
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Validation Steps'
        )
        vui-input(
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Validator'
        )
        vui-textarea(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Patch Steps'
        )
        vui-textarea(
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Additional Notes'
        )
        vui-textarea(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Rollback Plan'
        )
        vui-button Create
        vui-button Cancel


        //- input-select(
        //-   v-bind:options = 'requestTypes'
        //-   v-model = 'requestType'
        //-   name = 'Request Type'
        //- )
        //- input-typeahead(
        //-   v-bind:search = "{ sort: [{ field: 'index', direction: 'asc' }], empty_sort: [{ field: 'index', direction: 'asc' }], limit: 10 }"
        //-   v-bind:suggestions="suggestions"
        //-   v-model = "attrs.version"
        //-   required
        //-   subtitle="Check if the issue is reproducible with the latest stable version of Vue."
        //-   title = "Version"
        //- )
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        versions: [],
        subject: '',
        description: '',
        requestStart: new Date(moment().add(14, 'days').toISOString()),
        requestEnd: new Date(moment().add(5, 'days').toISOString()),
        plannedDate: new Date(moment().add(5, 'days').toISOString()),
        selectedRequestType: 'TechOps -- Server Request',
        requestTypes: [
          'TechOps -- DBA Request',
          'TechOps -- Server Request',
          'TechOps -- Change Management Request',
          'Release Management -- Change Request'
        ],
        selectedRequestSubtype: '',
        techOpsDbaRequestSubtypes: [
          'DBA Access Issue/Azure',
          'DBA Access Issue',
          'DBA Change Request',
          'Feedback',
          'General Inquiry',
          'Report Problem',
        ],
        techOpsServerRequestSubtypes: [
          'TECH Request Resource',
          'TECH Request Resource / Azure',
          'TECH Request Resource / Hyper V VM',
          'Feedback',
          'General Inquiry',
          'Report Problem',
        ],
        releaseManagementChangeRequestSubtypes: [
          'TECH Change Request',
          'DBA Change Request',
          'TECH Change Request / Azure',
          'TECH Change Request / Hyper  VM'
        ],
        techOpsDbaRequestSubtypes: [
          'Alpha - Deployment',
          'Alpha - Emergency Patch',
          'UAT - Deployment',
          'UAT - Emergency Patch',
          'Prod - Deployment',
          'Prod - Emergency Patch'
        ],
          // 'Release Management Change Request',
          // 'Server Request',
          // 'Tech Ops CM Request'
        // releaseManagment:
        selectedScrumTeam: '',
        scrumTeams: [
          'Abacus',
          'Apollo',
          'Calypso',
          'Deee-Lite',
          'Ichiban',
          'Titan',
          'WeareN4'
        ],
        selectedDeveloper: 'Victor Tolbert',
        developers: [
          'Victor Tolbert'
        ],
        selectedQualityAnalyst: 'Victor Tolbert',
        qualityAnalysts: [
          'Victor Tolbert'
        ],
        // Planned date/time (would love calendar but can free text if not feasible)
        // End user outage (yes or no option)
        // Pull Request ID
        // Summary
        // Justification
        // Impact/Risk Analysis
        // Patch Steps
        // Rollback Plan
        selectedEnvironment: '',
        environments: [
          'Alpha',
          'Deployment',
          'Production',
          'UAT'
        ],
        selectedPriority: 'Low',
        priorities: [
          'Low',
          'Medium',
          'High'
        ],
        selectedReason: 'Installation',
        reasons: [
          'Installation',
          'Release Management Change Request',
          'Server Request',
          'Tech Ops CM Request'
        ]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      }
    },
    computed: {
      requestSubtypes () {
        if( this.selectedRequestType == 'TechOps -- DBA Request') {
          return this.techOpsDbaRequestSubtypes
        }
        if( this.selectedRequestType == 'TechOps -- Server Request') {
          return this.techOpsServerRequestSubtypes
        }
        if( this.selectedRequestType == 'TechOps -- Change Management Request') {
          return this.techOpsChangeManagementRequestSubtypes
        }
        if( this.selectedRequestType == 'Release Management -- Change Request') {
          return this.releaseManagementChangeRequestSubtypes
        }
      },
      suggestions () {
        const requestType = this.requestType
        const versions = this.versions
        if (!(requestType in versions)) return []
        return versions[requestType].slice()
          .sort((a, b) => -versionCompare(a.id, b.id))
          .map((a, index) => ({ index, ...a }))
      }
    }
  }
</script>
