import React from 'react';

import Featured from '../components/Featured';
import Content from '../components/Content';

function ArticlesPage(props) {
  return (
    <div>
      <Featured title={props.title} />
      <Content>
        <p>
          Here are some amazing things about me! I'm also extremely humble like
          u hav no ider
        </p>
      </Content>
    </div>
  );
}

export default ArticlesPage;
