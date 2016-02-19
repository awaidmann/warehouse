/* @flow */

import React, { Component } from 'react'
import { Container } from 'flux/utils'
import { List } from 'immutable'

import { CreationDialogStore } from '../../stores/index'
import { CreationDialog } from '../index'

type State = {
  fieldValues: Map<string, string>,
  focusedFieldRef: ?string,
  autoCompDataSrc: List<string>
}

class CreationDialogContainer extends Component<{}, {}, State> {
  static getStores() {
    return [CreationDialogStore]
  }

  static calculateState(prevState: State): State {
    const storeState = CreationDialogStore.getState()
    return {
      fieldValues: storeState.fieldValues,
      focusedFieldRef: storeState.focusedFieldRef,
      autoCompDataSrc: storeState.autoCompDataSrc,
    }
  }

  render(): ?ReactElement {
    return (
      <div>
        <CreationDialog dataSource={[]}/>
      </div>
      )
  }
}

const container = Container.create(CreationDialogContainer)
export default container
