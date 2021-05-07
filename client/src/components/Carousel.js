import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Card from './Card';

import bear from '../assets/images/bear.jpeg';
import donjulio from '../assets/images/donjulio.jpeg';
import lulu from '../assets/images/lulu.jpeg';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Hours of Operation',
          subTitle: '11 PM - 7 AM',
          imgSrc: bear, //1000pixels by 1600
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          selected: false,
        },
        {
          id: 1,
          title: 'Kanye West and Kamela Harris 2025',
          subTitle:
            'They promise to last atleast as long as the Kimye marriage',
          imgSrc: donjulio, //1000pixels by 1600
          link: 'https://www.youtube.com/watch?v=Ickn8iipxUc',
          selected: false,
        },
        {
          id: 2,
          title: 'Official Proud Boy!',
          subTitle: 'Defund the police',
          imgSrc: lulu, //1000pixels by 1600
          link: 'https://www.youtube.com/watch?v=ZbM6WbUw7Bs',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card item={item} click={(e) => this.handleCardClick(item.id, e)} />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
