import aframe from 'aframe';
import registerClickDrag from 'aframe-click-drag-component';
registerClickDrag(aframe);
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-mouse-cursor-component';
import {Entity, Scene, Options} from 'aframe-react';
import React from 'react';
import Profile from './Profile.jsx';


const Profiles = props => {
let x = -6;
return (
  <Entity click-drag={{position:"0 1.25 -1"}}>
  {
    props.friends.map(friend => {
      x +=2
      return (
        <Profile toggle={props.toggle} x={x}/>
      )
    })
  }
  </Entity>
);
}

export default Profiles;
