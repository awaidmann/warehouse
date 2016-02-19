/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import tapEventPlugin from 'react-tap-event-plugin'

import { Categories, InventoryTypes } from '../mockServices/index'
import { Main } from './components/index'

tapEventPlugin()

ReactDOM.render(
  <Main />,
  document.getElementById('react')
)

Categories()
InventoryTypes()
