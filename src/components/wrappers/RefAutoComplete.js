/* @flow */

import React from 'react'
import AutoComplete from 'material-ui/lib/auto-complete'

export default class RefAutoComplete extends AutoComplete {
  constructor(props: Object) {
    super(props)
    super.onUpdateInput = this._refUpdateHandler
    this.fieldRef = props.fieldRef
    this.onUpdateInputWithRef = props.onUpdateInputWithRef
  }

  _refUpdateHandler(text: string) {
    if (this.onUpdateInputWithRef) {
      this.onUpdateInputWithRef(text, this.fieldRef)
    }
  }
}

RefAutoComplete.propTypes = {

  fieldRef: React.PropTypes.string,

  onUpdateInputWithRef: React.PropTypes.func,
}
