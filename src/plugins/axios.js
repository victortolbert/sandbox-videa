import axios from 'axios'

export default axios.create({
  baseURL: process.env.baseURL || 'http://localhost:3000'
})

// in pages... import axios from '~plugins/axios'
