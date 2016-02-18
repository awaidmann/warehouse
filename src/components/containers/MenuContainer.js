/* @flow */

import React from 'react'
import { Container } from 'flux/utils'
import { List } from 'immutable'

import Menu from '../views/Menu'
import { MenuStore } from '../../stores/index'
import { MenuCategory } from '../../../lib/index'

type State = {
  categories: List<MenuCategory>,
}

class MenuContainer extends React.Component<{}, {}, State> {
  static getStores() {
    return [MenuStore]
  }

  static calculateState(prevState: State): State {
    return {
      categories: MenuStore.getState()
    }
  }

  render(): ?ReactElement {
    return (
      <div>
        <Menu categories={ this.state.categories } />
      </div>
      )
  }
}

const container = Container.create(MenuContainer)
export default container
