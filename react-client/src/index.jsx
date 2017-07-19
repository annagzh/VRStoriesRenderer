import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-mouse-cursor-component';
import {Entity, Scene, Options} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Cursor from './components/Cursor.jsx';
import Profiles from './components/Profiles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ['Alex', 'Anna', 'Corey', 'David'],
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
        background: (<a-sky src="#video" rotation="0 -90 0"></a-sky>)
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
        <Profiles toggle={this.toggle.bind(this)} friends={this.state.friends}/>
        <a-assets> 
          <video id="video" crossOrigin="anonymous" src="https://s3-us-west-1.amazonaws.com/vrstories/360+degree+Video-+Pugs+Chompin+down.mp4"
              autoPlay loop></video> 
          <img id="story" src="https://s3-us-west-1.amazonaws.com/vrstories/360-panorama-matador-seo.jpg" crossOrigin="anonymous" ></img>
        </a-assets>
          {this.state.background}
        <Cursor />
      </Scene>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));