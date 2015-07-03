import React, { Component } from 'react';
import style from './app.less';
import Card from './components/card/Card';
import NavBar from './components/navbar/NavBar';


export default class App extends Component {
  render() {
    var mock = {
      isOpen: true,
      copy: 'Este card não é muito maneiro',
      title: 'Card Maneiro'
    };

    return (
      <div className="str-content">
        <Card title="Card Maneiro" copy="Este card é muito maneiro"/>
        <NavBar isOpen={mock.isOpen}/>
      </div>
    );
  }
}
