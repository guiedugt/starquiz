import HomePage from '../pages/HomePage'
import PublicPage from '../pages/PublicPage'

const paths = [
  {
    path: '/',
    component: PublicPage,
    default: true
  },
  {
    path: '/home',
    component: HomePage
  }
]

export default paths
