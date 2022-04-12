import React, {Suspense} from 'react'
import {
  Switch, Route, Redirect
} from 'react-router-dom'
import {Transition} from 'semantic-ui-react'
import routes from './routes'

const Content = () => {
  return (
    <div>
      <Suspense fallback='loading...'>
        <Switch>
          {routes.map((route, index) => {
            return route.component && (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <Transition.Group animation='fade up' duration='400ms'>
                    <route.component {...props}/>
                  </Transition.Group>
                )}
              />
            )
          })}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </div>
  )
}

export default Content
