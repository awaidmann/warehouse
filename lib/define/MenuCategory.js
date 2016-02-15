/* @flow */

import Immutable from 'immutable'

const CategoryRecord = Immutable.Record({ name: undefined })

export default class MenuCategory extends CategoryRecord {
  name: string;
  constructor(name: string) {
    super({ name: name })
  }
}
