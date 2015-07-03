import React, { Component } from 'react';
import classNames from 'classNames';
import style from './NavBar.less';


export default class NavBar extends Component {
  render() {

    var classes = classNames(
      'str-navbar',
      { 'str-navbar--open': this.props.isOpen },
      { 'str-navbar--closed': !this.props.isOpen }
    );
    /*
    var classes = 'str-navbar';
    if (this.props.isOpen) {
      classes = classes + ' str-navbar--open';
    } else {
      classes = classes + ' str-navbar--closed';
    }
  */
    return (
      <nav className={classes}>
        <a href="#" className="str-navbar__option"><nav><img src="./src/components/navbar/assets/pencil.svg" alt="" /></nav></a>
        <a href="#" className="str-navbar__option"><nav><img src="./src/components/navbar/assets/multiplewindows.svg" alt="" /></nav></a>
        <a href="#" className="str-navbar__option"><nav><img src="./src/components/navbar/assets/flask.svg" alt="" /></nav></a>
        <a href="#" className="str-navbar__option"><nav><img src="./src/components/navbar/assets/returnright.svg" alt="" /></nav></a>
      </nav>
    );
  }
}
