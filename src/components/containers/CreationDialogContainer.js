/* @flow */

import React, { Component } from 'react'
import { Container } from 'flux/utils'
import { List } from 'immutable'

import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'

import { CreationDialogStore } from '../../stores/index'
import { CreationDialog } from '../index'
import { FormEmitter } from '../../emitters/index'

type State = {
  fieldValues: Map<string, string>,
  focusedFieldRef: ?string,
  autoCompDataSrc: List<string>,
  active: boolean
}

class CreationDialogContainer extends Component<{}, {}, State> {
  static getStores() {
    return [CreationDialogStore]
  }

  static calculateState(prevState: State): State {
    const storeState = CreationDialogStore.getState()
    return {
      fieldValues: storeState.get('fieldValues'),
      focusedFieldRef: storeState.get('focusedFieldRef'),
      autoCompDataSrc: storeState.get('autoCompDataSrc'),
      active: storeState.get('active'),
    }
  }

  render(): ?ReactElement {
    const addButton = (
      <FloatingActionButton
        secondary={true}
        onMouseUp={FormEmitter.formShouldOpen.bind(FormEmitter, 'InventoryType')}
      >
        <ContentAdd />
      </FloatingActionButton>
    )

    return (
      <div>
        { this.state.active ? <CreationDialog formId='InventoryType' dataSource={[]}/> : addButton}
      </div>
      )
  }
}

const container = Container.create(CreationDialogContainer)
export default container
