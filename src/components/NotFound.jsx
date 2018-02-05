import React from 'react';

import { Image } from 'react-bootstrap';

import img404 from '../images/image.png';

function NotFound() {
  return (
    <div>
      <Image
        src={img404}
        alt="Page not found"
        className="img-responsive center-block" />
    </div>
  );
}

export default NotFound;