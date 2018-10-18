import React from 'react'
import Routes from './routes'
import { HeaderContainer } from 'components/header'
import { withRouter } from 'react-router'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='c-app'>
        <HeaderContainer />
        <Routes />
      </div>
    )
  }
}

export default withRouter(App)
