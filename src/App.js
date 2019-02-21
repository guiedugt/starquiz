import React from 'react'
import { Router } from 'react-router-dom'
import history from './routes/history'
import Routes from './routes/Routes'
import './App.css'

const App = () => (
  <Router history={history}>
    <Routes />
  </Router>
)

export default App
