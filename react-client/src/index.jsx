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
      items: [],
      toggle: true,
      background: <a-videosphere src="#video" rotation="0 -90 0"></a-videosphere>
    }
  }

  toggle () {
    console.log('toggle!')
    if (!this.state.toggle) {
      this.setState({
        background: (<a-videosphere src="#story"></a-videosphere>)
      })
    } else {
      this.setState({
        background: (<a-videosphere src="#video" rotation="0 -90 0"></a-videosphere>)
      })
    }
    this.setState({
      toggle: !this.state.toggle
    })
  }

  componentDidMount() {
    //
  }

  render () { 
    return (
      <Scene>
        <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 1, z: -3}}
          events={{click: this.toggle.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: '#24CAFF'}}/>
        </Entity>
        <a-assets> 
          <video id="video" crossOrigin="anonymous" src="https://s3-us-west-1.amazonaws.com/vrstories/1500141395399"
              autoPlay loop></video> 
          <video id="story" src="https://s3-us-west-1.amazonaws.com/vrstories/1500430018964" crossOrigin="anonymous" autoPlay ></video>
        </a-assets> 
          {this.state.background}
        <Cursor />
      </Scene>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));