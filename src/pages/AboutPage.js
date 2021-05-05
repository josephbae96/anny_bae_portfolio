import React from 'react';

import Featured from '../components/Featured';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Featured title={props.title} subTitle={props.subTitle} />
      <Content>
        <p>
          My name is Anny Bae and I liek ForkNife and rainbows and Pok-E-Maine
        </p>
        <p>
          I have three doggies. dog 1 is bear and he beary happy. dog 2 can dj.
          dog 3 is breanna's blessed lulu. My dream is to one day sleep. just
          touchdown in tomato town.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
