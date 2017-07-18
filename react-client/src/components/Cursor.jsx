import 'aframe';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import 'aframe-mouse-cursor-component';
import {Entity, Scene, Options} from 'aframe-react';
import React from 'react';

const Cursor = props => (
  <a-entity position="0 1.8 4">
    <a-entity camera look-controls mouse-cursor>
      <a-cursor fuse="true" color="yellow"></a-cursor>
    </a-entity>
  </a-entity>
);

export default Cursor;