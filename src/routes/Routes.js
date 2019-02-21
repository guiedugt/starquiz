import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import paths from './paths'

const Routes = () => {
  const defaultPath = paths.find(path => path.default)

  const setRoute = route => <Route key={route.path} {...route} exact />

  const setRedirect = () => <Redirect to={defaultPath.path} />

  const routes = paths.map(setRoute)

  return (
    <Switch>
      {routes}
      <Route component={setRedirect} />
    </Switch>
  )
}

export default withRouter(Routes)
