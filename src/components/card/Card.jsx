import React, { Component } from 'react';
import style from './Card.less';

export default class Card extends Component {
  render() {
    let value = this.props.value;
    return (
      <h1 className="card">{value}</h1>
    );
  }
}
