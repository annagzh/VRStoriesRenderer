import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-mouse-cursor-component';
import {Entity, Scene, Options} from 'aframe-react';
import React from 'react';
import Profile from './Profile.jsx';


const Profiles = props => {
let x = 0;
return (
  <Entity>
  {
    props.friends.map(friend => {
      x ++
      return (
        <Profile toggle={props.toggle} x={x}/> 
      )
    })
  }
  </Entity>
);
}

export default Profiles;