import React, { Component } from 'react';
import style from './Shelf.less';

export default class Shelf extends Component {
  render() {
    let value = this.props.value;
    return (
      <h1 className="shelf">{value}</h1>
    );
  }
}
