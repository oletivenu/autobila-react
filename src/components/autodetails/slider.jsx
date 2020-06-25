import React from "react";
import { Link, NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div className="details_section_slider">
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <img src="images/details/3_-798x466.jpg" />
            </div>
            <div className="item">
              <img src="images/details/15-798x466.jpg" />
            </div>
            <div className="item">
              <img src="images/details/44-798x466.jpg" />
            </div>
            <div className="item">
              <img src="images/details/55-798x466.jpg" />
            </div>
            <div className="item">
              <img src="images/details/62-798x466.jpg" />
            </div>
            <div className="item">
              <img src="images/details/44-798x466.jpg" />
            </div>
            <div className="item">
              <img src="images/details/55-798x466.jpg" />
            </div>
            <div className="item">
              <img src="images/details/62-798x466.jpg" />
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div
            id="thumbcarousel"
            className="carousel slide"
            data-interval="false"
          >
            <div className="carousel-inner">
              <div className="item active">
                <div
                  data-target="#carousel"
                  data-slide-to="0"
                  className="thumb"
                >
                  <img src="images/details/3_-798x466.jpg" />
                </div>
                <div
                  data-target="#carousel"
                  data-slide-to="1"
                  className="thumb"
                >
                  <img src="images/details/15-798x466.jpg" />
                </div>
                <div
                  data-target="#carousel"
                  data-slide-to="2"
                  className="thumb"
                >
                  <img src="images/details/44-798x466.jpg" />
                </div>
                <div
                  data-target="#carousel"
                  data-slide-to="3"
                  className="thumb"
                >
                  <img src="images/details/55-798x466.jpg" />
                </div>
              </div>
              <div className="item">
                <div
                  data-target="#carousel"
                  data-slide-to="4"
                  className="thumb"
                >
                  <img src="images/details/62-798x466.jpg" />
                </div>
                <div
                  data-target="#carousel"
                  data-slide-to="1"
                  className="thumb"
                >
                  <img src="images/details/15-798x466.jpg" />
                </div>
                <div
                  data-target="#carousel"
                  data-slide-to="2"
                  className="thumb"
                >
                  <img src="images/details/44-798x466.jpg" />
                </div>
                <div
                  data-target="#carousel"
                  data-slide-to="3"
                  className="thumb"
                >
                  <img src="images/details/55-798x466.jpg" />
                </div>
              </div>
            </div>
            <a
              className="left carousel-control"
              href="#thumbcarousel"
              role="button"
              data-slide="prev"
            >
              <span className="fa fa-arrow-circle-o-left"></span>
            </a>
            <a
              className="right carousel-control"
              href="#thumbcarousel"
              role="button"
              data-slide="next"
            >
              <span className="fa fa-arrow-circle-o-right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
