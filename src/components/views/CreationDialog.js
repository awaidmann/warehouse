/* @flow */

import React, { Component } from 'react'

import Paper from 'material-ui/lib/paper'
import AutoComplete from 'material-ui/lib/auto-complete'

import { RefAutoComplete } from '../index'
import { TextFieldEmitter } from '../../emitters/index'

type Props = {
  dataSource: Array<string>
}

export default class CreationDialog extends Component<{}, Props, {}> {

  static updateInput(text: string, textFieldRef: string) {
    TextFieldEmitter.textFieldDidUpdate('', text, textFieldRef)
  }

  // <RefAutoComplete
  //   hintText='Inventory Type'
  //   fieldRef='1'
  //   dataSource={this.props.dataSource}
  //   onUpdateInputWithRef={this.updateInput}
  // />

  render(): ?ReactElement {
    return (
      <div>
        <Paper style={Style.dialog} zDepth={1}>
          <AutoComplete
            hintText='Inventory Type'
            dataSource={this.props.dataSource}
            onUpdateInput={CreationDialog.updateInput}
          />
        </Paper>
      </div>
    )
  }
}

const Style = {
  dialog: {
    height: 300,
    width: 200,
    margin: 20,
  }
}
