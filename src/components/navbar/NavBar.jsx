import React, { Component } from 'react';
import style from './NavBar.less';


export default class NavBar extends Component {
  render() {
    let value = this.props.value;
    return (
      <nav className="str-navbar">
        <a href="#" className="str-navbar__option"><nav><img src="./src/components/navbar/assets/pencil.svg" alt="" /></nav></a>
        <a href="#" className="str-navbar__option"><nav><img src="./src/components/navbar/assets/multiplewindows.svg" alt="" /></nav></a>
        <a href="#" className="str-navbar__option"><nav><img src="./src/components/navbar/assets/flask.svg" alt="" /></nav></a>
        <a href="#" className="str-navbar__option"><nav><img src="./src/components/navbar/assets/returnright.svg" alt="" /></nav></a>
      </nav>
    );
  }
}
