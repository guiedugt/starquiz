import axios from 'axios'

const { NODE_ENV } = process.env

const apiHosts = {
  'production': 'https://swapi.co',
  'staging': 'https://swapi.co',
  'demo': 'https://swapi.co',
  'development': 'https://swapi.co'
}

const apiHost = NODE_ENV ? apiHosts[NODE_ENV] : apiHosts['development']

const instance = axios.create({
  baseURL: `${apiHost}/api`
})

export default instance
