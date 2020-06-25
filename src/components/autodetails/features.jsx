import React from "react";
import { Link, NavLink } from "react-router-dom";

const Features = () => {
  return (
    <div>
      <h3>Ford Mustang 2016 Turbo</h3>
      <div className="product_comments_block_extra">
        <div className="comments_note">
          <span className="average">Average grade&nbsp;</span>
          <div className="star_content clearfix">
            <i className="fa fa-star fa-star_on" aria-hidden="true"></i>
            <i className="fa fa-star fa-star_on" aria-hidden="true"></i>
            <i className="fa fa-star fa-star_on" aria-hidden="true"></i>
            <i className="fa fa-star fa-star_on" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className="comments_advices">
          <a className="nb-comments" href="#idTab5">
            1 Reviews
          </a>
          <a
            className="open-comment-form"
            href="#"
            data-toggle="modal"
            data-target="#productcomment-modal"
          >
            Write a review
          </a>
        </div>
      </div>
      <div className="product_content">
        <p>
          Product description goes here. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>
      <div className="overall_details">
        <div className="pricerange">
          <span className="our_price">Our Price</span>$ 3,50,456
        </div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="t-label">BODY</td>
              <td className="t-value">Convertible</td>
            </tr>
            <tr>
              <td className="t-label">MILEAGE</td>
              <td className="t-value">18000</td>
            </tr>
            <tr>
              <td className="t-label">FUEL TYPE</td>
              <td className="t-value">Gasoline</td>
            </tr>
            <tr>
              <td className="t-label">ENGINE</td>
              <td className="t-value">5000</td>
            </tr>
            <tr>
              <td className="t-label">YEAR</td>
              <td className="t-value">2015</td>
            </tr>
            <tr>
              <td className="t-label">TRANSMISSION</td>
              <td className="t-value">Semi-automatic</td>
            </tr>
            <tr>
              <td className="t-label">DRIVE</td>
              <td className="t-value">RWD</td>
            </tr>
            <tr>
              <td className="t-label">FUEL ECONOMY</td>
              <td className="t-value">35.3</td>
            </tr>
            <tr>
              <td className="t-label">EXTERIOR COLOR</td>
              <td className="t-value">Silver Metallic</td>
            </tr>
            <tr>
              <td className="t-label">INTERIOR COLOR</td>
              <td className="t-value">Jet Red</td>
            </tr>
            <tr>
              <td className="t-label">VIN</td>
              <td className="t-value">5YFBURHE6FP219</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Features;
