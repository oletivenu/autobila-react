import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  render() {
    const attachments = this.props.attachments;
    return (
      <div>
        <div className="details_section_slider">
          <Carousel showArrows={true}>
            {attachments.map((item) => (
              <div key={item.Id}>
                <img
                  src={"/uploads/" + item.FolderPath + "/" + item.FilePath}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Slider;
