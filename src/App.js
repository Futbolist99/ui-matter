import React, { Component } from 'react';
import style from './app.less';
import Card from './components/card/Card';
import Shelf from './components/shelf/Shelf';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <Card value="Eae"/>
        <Shelf value="coé"/>
      </div>
    );
  }
}
