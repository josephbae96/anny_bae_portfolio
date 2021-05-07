import React from 'react';

import Featured from '../components/Featured';
import Carousel from '../components/Carousel';

function HomePage(props) {
  return (
    <div>
      <Featured
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      />
      <Carousel />
    </div>
  );
}

export default HomePage;
