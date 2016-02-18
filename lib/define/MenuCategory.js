/* @flow */

import Payload from './Payload'

export default class MenuCategory extends Payload {
  constructor(id: string, title: string) {
    super(id, title)
  }
}
