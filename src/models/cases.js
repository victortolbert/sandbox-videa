module.exports = {
  id: {
    label: 'Number'
  },
  status: {
    label: 'Status',
    required: true
  },
  priority: {
    label: 'Priority',
    required: true,
    default: 'Low'
  },
  reason: {
    label: 'Reason',
    required: true,
    default: 'Installation'
  },
  subject: {
    label: 'Subject',
    required: true,
    max_length: 255
  },
  request_type: {
    label: '',
    required: true,
    default: null
  },
  request_subtype: {
    label: '',
    required: true,
    default: null
  },
  environment: {
    label: '',
    required: true,
    default: null
  },
  description: {
    label: 'Description',
    required: true,
    max_length: 32000
  },
  request_start: {
    label: '',
    required: true,
    default: null
  },
  request_end: {
    label: '',
    required: true,
    default: null
  },
  end_user_outrage: {
    label: '',
    required: true,
    default: null
  },
  risk_level: {
    label: '',
    required: true,
    default: null
  },
  systems_impacted: {
    label: '',
    required: true,
    default: null
  },
  require_modifying: {
    label: '',
    required: true,
    default: null
  },
  dev_tested: {
    label: '',
    required: true,
    default: null
  },
  qa_tested: {
    label: '',
    required: true,
    default: null
  },
  scrum_team: {
    label: '',
    required: true,
    default: null
  },
  planned_date: {
    label: '',
    required: true,
    default: null
  },
  pull_request_id: {
    label: '',
    required: true,
    default: null
  },
  summary: {
    label: '',
    required: true,
    default: null
  },
  justification: {
    label: '',
    required: true,
    default: null
  },
  patch_steps: {
    label: '',
    required: true,
    default: null
  },
  rollback_plan: {
    label: '',
    required: true,
    default: null
  },
  validation_step: {
    label: '',
    required: true,
    default: null
  },
  validator: {
    label: '',
    required: true,
    default: null
  },
  additional_notes: {
    label: '',
    required: true,
    default: null
  }
}
