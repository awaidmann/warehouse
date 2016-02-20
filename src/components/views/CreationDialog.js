/* @flow */

import React, { Component } from 'react'

import Paper from 'material-ui/lib/paper'
import Divider from 'material-ui/lib/divider';
import RaisedButton from 'material-ui/lib/raised-button'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import TextField from 'material-ui/lib/text-field'
import AutoComplete from 'material-ui/lib/auto-complete'

import { FormEmitter } from '../../emitters/index'

const SUBMIT = 'submit'
const CANCEL = 'cancel'

type Props = {
  formId: string,
  dataSource: Array<string>,
}

export default class CreationDialog extends Component<{}, Props, {}> {

  updateInput(textFieldRef: string, text: string) {
    FormEmitter.textFieldDidUpdate('', text, textFieldRef)
  }

  handleButtonTap(refID: string, evt: SyntheticEvent) {
    switch (refID) {
      case SUBMIT:
        FormEmitter.formDidSubmit(this.props.formId, {})
        break
      case CANCEL:
        FormEmitter.formDidCancel(this.props.formId)
        break
      default:
        return
    }
  }

  render(): ?ReactElement {
    return (
      <div>
        <Paper style={style.dialog} zDepth={1}>
          <AppBar
            title='New Inventory Type'
            iconElementLeft={<IconButton onMouseUp={this.handleButtonTap.bind(this, CANCEL)} ><NavigationClose /></IconButton>}
          />
          <div style={style.field}>
            <AutoComplete
              fullWidth={true}
              hintText='Inventory Type'
              dataSource={this.props.dataSource}
              onUpdateInput={this.updateInput.bind(this, 'InventoryType')}
            />
          </div>
          <Divider />

          <div style={style.field}>
            <TextField
              fullWidth={true}
              hintText='Make'
              floatingLabelText='Make'
              onChange={this.updateInput.bind(this, 'Make')}
            />
          </div>
          <div style={style.field}>
            <TextField
              fullWidth={true}
              hintText='Model'
              floatingLabelText='Model'
              onChange={this.updateInput.bind(this, 'Model')}
            />
          </div>

          <RaisedButton
            id={SUBMIT}
            style={style.button}
            label='Submit'
            primary={true}
            onMouseUp={this.handleButtonTap.bind(this, SUBMIT)}
          />
        </Paper>
      </div>
    )
  }
}

const style = {
  dialog: {
    height: 315,
    width: 500,
    margin: 20,
  },

  field: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  button: {
    float: 'right',
    margin: 12,
  },
}
