import React, { Component } from 'react';
import style from './app.less';
import Card from './components/card/Card';
import Shelf from './components/shelf/Shelf';
import EditionBar from './components/editionbar/EditionBar';


export default class App extends Component {
  render() {
    return (
      <div>
        <EditionBar />
        <h1>Hello, world.</h1>
        <Card value="Eae"/>
        <Shelf />
      </div>
    );
  }
}
