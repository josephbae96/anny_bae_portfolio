import React from 'react';

import Featured from '../components/Featured';
import Content from '../components/Content';

function ContactPage(props) {
  return (
    <div>
      <Featured title={props.title} />
      <Content>
        <p>If you'd like to contact me, don't!</p>
      </Content>
    </div>
  );
}

export default ContactPage;
