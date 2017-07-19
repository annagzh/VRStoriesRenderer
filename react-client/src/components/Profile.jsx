import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-mouse-cursor-component';
import {Entity, Scene, Options} from 'aframe-react';
import React from 'react';

const Profile = props => (
  <Entity id="circle"
    geometry={{primitive: 'circle'}}
    material={{src: "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/13406804_10207861632073329_904630480998034000_n.jpg?oh=f3d7b756cc536d9e160923935f8a7c3c&oe=5A10C74B"}}
    animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
    animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
    position={{x: props.x, y: 0, z: -3}}
    >
  </Entity>
);

export default Profile;

// events={{click: props.toggle.bind(this)}}
