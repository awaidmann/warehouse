/* @flow */

import React, { Component } from 'react'

import { DisplayListContainer, CreationDialogContainer } from '../index'

export default class Main extends Component {
  render(): ?ReactElement {
    return (
      <div style={style.container}>
        <DisplayListContainer style={style.list}/>
        <div style={style.dialog}>
        <CreationDialogContainer  />
        </div>
      </div>
    )
  }
}

const style = {
  container: {

  },

  list: {

  },

  dialog: {
    position: 'relative',
    left: 255,
  },
}
