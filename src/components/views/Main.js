/* @flow */

import React, { Component } from 'react'

import { DisplayListContainer, CreationDialogContainer } from '../index'

export default class Main extends Component {
  render(): ?ReactElement {
    return (
      <div>
      
        <CreationDialogContainer style={Styles.dialog} />
      </div>
    )
  }
}

const Styles = {
  list: {
  },

  dialog: {
    flex: 1,
  },
}
