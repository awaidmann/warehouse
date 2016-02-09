import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.categories = props.categories
  }

  categoryItems() {
    return this.categories.map((name) => {
      return <MenuItem key={name}>{name}</MenuItem>
    })
  }

  render() {
    return (
      <div>
        <LeftNav open={true}>
          { this.categoryItems() }
        </LeftNav>
      </div>
    )
  }
}
