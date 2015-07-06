import React, { Component } from 'react';
import style from './app.less';
import Card from './components/card/Card';
import NavBar from './components/navbar/NavBar';
import EditBar from './components/editbar/EditBar';
import BottomBar from './components/bottombar/BottomBar';


export default class App extends Component {
  render() {
    var mock = {
      isOpen: true,
      copy: 'Este card não é muito maneiro',
      title: 'Card Maneiro'
    };

    let cards = [];
    for (var i = 0; i < 25; i++) {
      cards.push(<Card title={mock.title} copy={mock.copy} />);
    }

    return (
      <div className="str-content">
        <EditBar />
        <div className="str-inner">
          {cards}
          <NavBar isOpen={mock.isOpen}/>
           <BottomBar />
        </div>
      </div>
    );
  }
}
