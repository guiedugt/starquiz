import React from 'react'
import { hot } from 'react-hot-loader'
import { Router } from 'react-router-dom'
import history from './routes/history'
import Routes from './routes/Routes'
import './App.css'

const App = () => (
  <Router history={history}>
    <Routes />
  </Router>
)

export default hot(module)(App)
