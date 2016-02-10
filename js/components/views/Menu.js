import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'
import MuiMenu from 'material-ui/lib/menus/menu'

import AppDispatcher from '../../dispatcher/AppDispatcher'
import Actions from '../../constants/ActionConstants'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.categories = props.categories
  }

  categoryItems() {
    return this.categories.map((name) => {
      return (
        <MenuItem
          key={name}
          primaryText={name}
          onTouchTap={this._handleTapped}
        />
      )
    })
  }

  // TODO: Not the most reliable method as it relies on the fact 'this' is
  // locally scoped to the MenuItem. Breaks for .bind(this) or removing the
  // enclosing MuiMenu
  _handleTapped() {
    AppDispatcher.dispatch({
      type: Actions.SELECT_CATEGORY,
      category: this.primaryText
    })
  }

  render() {
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
