import React, { Component } from "react";
import Slider from "react-slick";

export default class DealersBar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="images/logos/fiat.png" />
          </div>
          <div>
            <img src="images/logos/jagore.png" />
          </div>
          <div>
            <img src="images/logos/nissan.png" />
          </div>
          <div>
            <img src="images/logos/vw.png" />
          </div>
          <div>
            <img src="images/logos/ford.png" />
          </div>
        </Slider>
      </div>
    );
  }
}
