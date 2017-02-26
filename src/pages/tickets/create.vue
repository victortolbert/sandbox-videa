<template lang="pug">
  vui-section.create-ticket.vui-container--medium
    vui-form
      vui-title.vui-m-bottom--large Tech Ops Ticketing System -- Create New Ticket
      p.vui-text--longform.vui-m-bottom--medium Fill out the form below to submit your <b>{{ selectedRequestType }}</b> support request.
      vui-fieldset
        vui-select.vui-m-bottom--medium(
          v-bind:options = 'requestTypes'
          v-model = 'selectedRequestType'
          label = 'Request Type'
        )
        vui-select.vui-m-bottom--medium(
          v-bind:options = 'requestSubtypes'
          v-model = 'selectedRequestSubtype'
          label = 'Request Sub-Type'
        )
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


        vui-textarea.vui-m-bottom--medium(
          label = 'Description'
        )

        grid
          grid-item(size='1/2')
            vui-select.vui-m-bottom--medium(
              v-bind:options = 'priorities'
              v-model = 'selectedPriority'
              label = 'Priority'
            )

          grid-item(size='1/2')
            vui-select.vui-m-bottom--medium(
              v-bind:options = 'environments'
              v-model = 'selectedEnvironment'
              v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
              label = 'Environment'
            )
        vui-select.vui-m-bottom--medium(
          v-bind:options = 'reasons'
          v-model = 'selectedReason'
          label = 'Reason'
        )
        vui-textarea.vui-m-bottom--large(
          label = 'Description'
        )

        vui-select.vui-m-bottom--medium(
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

        vui-input.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Pull Request Id'
        )
        vui-textarea.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Summary'
        )
        vui-textarea.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Justification'
        )
        vui-textarea.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Impact/Risk Analysis'
        )
        //- vui-select.vui-m-bottom--medium(
        //-   v-bind:options = 'riskLevels'
        //-   v-model = 'selectedRiskLevel'
        //-   v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
        //-   label = 'Risk Level'
        //- )
        vui-input.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Systems Impact'
        )
        //- vui-select.vui-m-bottom--medium(
        //-   v-bind:options = 'reasons'
        //-   v-model = 'selectedRiskLevel'
        //-   v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
        //-   label = 'Require Modifying Monitoring Agents'
        //- )
        grid
          grid-item(size='1/2')
            vui-select.vui-m-bottom--medium(
              v-bind:options = 'developers'
              v-model = 'selectedDeveloper'
              v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
              label = 'Dev Tested'
            )
          grid-item(size='1/2')
            vui-select.vui-m-bottom--medium(
              v-bind:options = 'qualityAnalysts'
              v-model = 'selectedQualityAnalyst'
              v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
              label = 'QA Tested'
            )
        vui-textarea.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Validation Steps'
        )
        vui-input.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Validator'
        )
        vui-textarea.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Patch Steps'
        )
        vui-textarea.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "TechOps -- Change Management Request"'
          label = 'Additional Notes'
        )
        vui-textarea.vui-m-bottom--medium(
          v-if = 'selectedRequestType == "Release Management -- Change Request"'
          label = 'Rollback Plan'
        )
        vui-button.vui-button--brand Create
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
          'DBA Access Issue/AWS',
          'DBA Access Issue',
          'DBA Change Request',
          'Feedback',
          'General Inquiry',
          'Report Problem',
        ],
        techOpsServerRequestSubtypes: [
          'TECH Request Resource',
          'TECH Request Resource / AWS',
          'TECH Request Resource / Hyper V VM',
          'Feedback',
          'General Inquiry',
          'Report Problem',
        ],
        releaseManagementChangeRequestSubtypes: [
          'TECH Change Request',
          'DBA Change Request',
          'TECH Change Request / AWS',
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
        selectedDeveloper: 'Ling Zhu',
        developers: [
          'Ling Zhu',
          'Victor Tolbert'
        ],
        selectedQualityAnalyst: 'MD Khan',
        qualityAnalysts: [
          'MD Khan'
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
          '🔥 Critical ',
          '🙏 High ',
          'Medium',
          'Low'
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
    },

    methods: {
      onSubmit() {
        console.log('submit!')
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'tickets'
    }
  }
</script>
