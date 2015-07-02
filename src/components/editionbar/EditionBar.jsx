import React, { Component } from 'react';
import style from './EditionBar.less';

export default class EditionBar extends Component {
  render() {
    let value = this.props.value;
    return (
      <div className="edition-bar">
          <p className="edition-bar__text">Modo de edição</p>
      </div>
    );
  }
}
