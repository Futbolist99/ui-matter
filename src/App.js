import React, { Component } from 'react';
import style from './app.less';
import Card from './components/card/Card';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <Card value="Eae"/>
      </div>
    );
  }
}
