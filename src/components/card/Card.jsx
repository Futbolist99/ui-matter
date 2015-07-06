import React from 'react';
import style from './Card.less';

let Card = React.createClass({
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
});

export default Card;
