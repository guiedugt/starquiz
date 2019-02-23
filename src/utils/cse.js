import axios from 'axios'

const { NODE_ENV, GOOGLE_CX_ID, GOOGLE_API_KEY } = process.env

const apiHosts = {
  'production': 'https://www.googleapis.com',
  'staging': 'https://www.googleapis.com',
  'demo': 'https://www.googleapis.com',
  'development': 'https://www.googleapis.com'
}

const apiHost = NODE_ENV ? apiHosts[NODE_ENV] : apiHosts['development']

const instance = axios.create({
  baseURL: `${apiHost}/customsearch/v1`
})

instance.defaults.params = {
  key: GOOGLE_API_KEY,
  cx: GOOGLE_CX_ID,
  searchType: 'image',
  imgSize: 'medium',
  start: 1,
  num: 5
}

export const mapImages = res => {
  return res.data.items.map(item => ({
    url: item.link,
    height: item.image.height,
    width: item.image.width
  }))
}

export const getRandomImage = images => {
  const image = images[Math.floor(Math.random() * images.length)]
  return image
}

export default instance
