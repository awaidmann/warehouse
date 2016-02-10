import React from 'react'
import ReactDOM from 'react-dom'
import tapEventPlugin from 'react-tap-event-plugin'

import Menu from './components/containers/MenuContainer'

tapEventPlugin()

ReactDOM.render(
  <Menu />,
  document.getElementById('react')
)
