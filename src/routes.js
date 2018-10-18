import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotesApp from 'views'

const Routes = (props) => {

  return (
    <div>
      <Switch>
        <Route path='/' render={() => {
          return (<NotesApp />)
        }} />
      </Switch>
    </div>
  )
}

export default Routes
