import React, { Component } from 'react';
import style from './Card.less';

export default class Card extends Component {
  render() {
    let title = this.props.title;
    let copy = this.props.copy;
    return (
      <a className="uim-card">
        <div className="uim-card-heading">{title}</div>
        <div className="uim-card-body">{copy}</div>
      </a>
    );
  }
}
