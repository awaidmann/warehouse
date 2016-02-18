/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import tapEventPlugin from 'react-tap-event-plugin'

import { Categories, InventoryTypes } from '../mockServices/index'
import Menu from './components/containers/MenuContainer'
import List from './components/containers/DisplayListContainer'

tapEventPlugin()

ReactDOM.render(
  <List />,
  document.getElementById('react')
)

Categories()
InventoryTypes()
