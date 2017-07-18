import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene, Options} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    //
  }

  render () {
    return (
      <Scene>
          <a-assets>
          <video id="video" src="https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/"
               autoPlay loop crossorigin="anonymous"></video>
          </a-assets>
          <a-videosphere src="#video" rotation="0 180 0"></a-videosphere>
      </Scene>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));