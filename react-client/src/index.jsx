import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-mouse-cursor-component';
import {Entity, Scene, Options} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from './components/Cursor.jsx';

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
        <a-box position="0 3.5 -2" rotation="30 30 0" color="skyblue"
            event-set__enter="_event: mouseenter; material.color: yellowgreen; scale: 3 1 1"
            event-set__leave="_event: mouseleave; material.color: skyblue; scale: 1 1 1">
          <a-animation attribute="rotation" begin="click" dur="500" fill="backwards" to="30 30 360"></a-animation>
        </a-box>
        <a-assets> 
          <video id="video" crossOrigin="anonymous" src="https://s3-us-west-1.amazonaws.com/vrstories/1500141395399"
              autoPlay loop></video> 
          <img id="story" src="https://s3-us-west-1.amazonaws.com/vrstories/1500134536083" crossOrigin="anonymous"></img>
        </a-assets> 
        <a-videosphere src="#video" rotation="0 -90 0"></a-videosphere> 
        {/* <a-sky src="#story"></a-sky> */}
        <Cursor />
      </Scene>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));