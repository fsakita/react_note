import React from 'react'
import Routes from './routes'
import { withRouter } from 'react-router'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='c-app'>
        <Routes />
      </div>
    )
  }
}

export default withRouter(App)
