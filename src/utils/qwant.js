import axios from 'axios'

const { NODE_ENV } = process.env

const apiHosts = {
  'production': 'https://api.qwant.com',
  'staging': 'https://api.qwant.com',
  'demo': 'https://api.qwant.com',
  'development': 'https://api.qwant.com'
}

const apiHost = NODE_ENV ? apiHosts[NODE_ENV] : apiHosts['development']

const instance = axios.create({
  baseURL: `${apiHost}/api/search`
})

instance.defaults.params = {
  locale: 'en_US',
  safesearch: 1,
  t: 'images',
  count: 5,
  uiv: 4
}

export default instance
