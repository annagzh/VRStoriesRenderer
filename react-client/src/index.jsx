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
      friends: [{ first: 'Alex', pic: 'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg'},
                { first: 'Anna', pic: 'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg'},
                { first: 'Corey', pic: 'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg'}],
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
