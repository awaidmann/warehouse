import React from 'react'
import { Container } from 'flux/utils'

import MenuStore from '../../stores/MenuStore'
import Menu from '../views/Menu'

class MenuContainer extends React.Component {
  static getStores() {
    return [MenuStore]
  }

  static calculateState(prevState) {
    return {
      categories: MenuStore.categories,
      selected: MenuStore.selected
    }
  }

  render() {
    return <Menu categories={ this.state.categories } />
  }
}

const container = Container.create(MenuContainer)
export default container
