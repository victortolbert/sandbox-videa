import axios from 'axios'

export default axios.create({
  baseURL: process.env.baseURL || 'https://intense-falls-98650.herokuapp.com'
})

// in pages... import axios from '~plugins/axios'
