import React from 'react';
import { Player } from 'video-react';



var style = {
	width: '40%',
	height: '50%'
};
export default (props) => {
  return (
  	<div style-={style}>
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
    </div>
  );
};