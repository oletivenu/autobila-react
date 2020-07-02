import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Features extends Component {
  render() {
    const autoitems = { ...this.props.autoitems };
    console.log(autoitems);
    return (
      <div>
        <h3>{autoitems.AutoName}</h3>
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
          <p>{autoitems.AutoDescription}</p>
        </div>
        <div className="overall_details">
          <div className="pricerange">
            <span className="our_price">Our Price</span>$ {autoitems.Price}
          </div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td className="t-label">Auto Type</td>
                <td className="t-value">{autoitems.AutoType}</td>
              </tr>
              <tr>
                <td className="t-label">Gear Box</td>
                <td className="t-value">{autoitems.GearBox}</td>
              </tr>
              <tr>
                <td className="t-label">FUEL TYPE</td>
                <td className="t-value">{autoitems.FuelType}</td>
              </tr>
              <tr>
                <td className="t-label">Seats</td>
                <td className="t-value">{autoitems.Seats}</td>
              </tr>

              <tr>
                <td className="t-label">Cylinders</td>
                <td className="t-value">{autoitems.Cylinders}</td>
              </tr>
              <tr>
                <td className="t-label">YEAR</td>
                <td className="t-value">{autoitems.Year}</td>
              </tr>
              <tr>
                <td className="t-label">Kilometers</td>
                <td className="t-value">{autoitems.Kilometers}</td>
              </tr>
              <tr>
                <td className="t-label">Wheels</td>
                <td className="t-value">{autoitems.Wheels}</td>
              </tr>
              <tr>
                <td className="t-label">EXTERIOR COLOR</td>
                <td className="t-value">{autoitems.Color}</td>
              </tr>
              <tr>
                <td className="t-label">INTERIOR COLOR</td>
                <td className="t-value">{autoitems.InteriorColor}</td>
              </tr>
              <tr>
                <td className="t-label">Specs</td>
                <td className="t-value">{autoitems.Specs}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Features;
