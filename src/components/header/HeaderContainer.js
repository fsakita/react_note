import React from 'react'
import { Header } from './'

class HeaderContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Header {...this.state} />
    )
  }
}

export default HeaderContainer
