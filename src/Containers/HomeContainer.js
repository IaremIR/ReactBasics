import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import prada from './../images/prada.png';
import hermes from './../images/hermes.png';
import nike from './../images/nike.png';


export class HomeContainer extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={nike} />
        </Carousel.Item>

        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={prada} />
        </Carousel.Item>

        <Carousel.Item>
          <img width={500} height={500} alt="500x500" src={hermes} />
        </Carousel.Item>
      </Carousel>
    )
  }
}