import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-mouse-cursor-component';
import {Entity, Scene, Options} from 'aframe-react';
import React from 'react';

const Profile = props => (
  <Entity id="box"
    geometry={{primitive: 'box'}}
    material={{color: 'red', opacity: 0.6}}
    animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
    animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
    position={{x: props.x, y: 0, z: -3}}
    events={{click: props.toggle.bind(this)}}>
    <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
            geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
            material={{color: '#24CAFF'}}/>
  </Entity>
);

export default Profile;