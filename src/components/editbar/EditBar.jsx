import React from 'react';
import style from './EditBar.less';

var EditBar = React.createClass({
  handleClick: function(i) {
    console.log('You clicked: ' + this.props.items[i]);
  },

  render: function() {
    return (
      <div className="str-editbar">
        <div className="str-editbar__inner">
          <span>Modo Edição</span>
        </div>
      </div>
    );
  }
});

export default EditBar;
