import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import isl from './../images/image1.jpg';
import chanel from './../images/image2.png';
import dolce from './../images/image3.jpg';
import hugoboss from './../images/image4.jpg'


export class HomeContainer extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={isl} />
        </Carousel.Item>

        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={chanel} />
        </Carousel.Item>

        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={dolce} />
        </Carousel.Item>

        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={hugoboss} />
        </Carousel.Item>
      </Carousel>
    )
  }
}