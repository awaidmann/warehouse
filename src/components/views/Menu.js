/* @flow */

import React from 'react'
import { List } from 'immutable'

import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'
import MuiMenu from 'material-ui/lib/menus/menu'

import AppDispatcher from '../../dispatcher/AppDispatcher'
import { MenuCategory, ActionType } from '../../../lib/index'

type Props = List<MenuCategory>

export default class Menu extends React.Component<{}, Props, {}> {

  categoryItems(): Array<?ReactElement> {
    if (this.props.categories !== undefined) {
      return this.props.categories.map((category) => {
        return (
          <MenuItem
            key={category.get('id')}
            primaryText={category.get('title')}
            onTouchTap={this._handleTapped}
          />
        )
      })
    }

    return []
  }

  // TODO: Not the most reliable method as it relies on the fact 'this' is
  // locally scoped to the MenuItem. Breaks for .bind(this) or removing the
  // enclosing MuiMenu
  _handleTapped() {
    AppDispatcher.dispatch({
      type: ActionType.SELECT_CATEGORY,
      category: this.primaryText
    })
  }

  render(): ?ReactElement {
    return (
      <div>
        <LeftNav open={true}>
          <MuiMenu>
            { this.categoryItems() }
          </MuiMenu>
        </LeftNav>
      </div>
    )
  }
}
