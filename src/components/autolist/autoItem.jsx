import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class AutoItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <Link to={"/auto/" + item.Id}>
        <div className="item col-xs-4 col-lg-4">
          <div className="thumbnail">
            <div className="effect">
              <img
                className="group list-group-image img-responsive"
                src={"uploads/" + item.FirstImage}
                alt=""
              />
            </div>
            <div className="gp_products_item_caption">
              <div className="date">
                <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                {item.CreatedDateTime}
              </div>
              <div className="disc">{item.AutoName}</div>
              <div className="rate">AED {item.Price}</div>
            </div>
            <div className="product_footer clearfix">
              <div className="type">
                <i className="fa fa-tachometer" aria-hidden="true"></i>{" "}
                {item.FuelType}
              </div>
              <div className="millage text-right">
                <i className="fa fa-tachometer" aria-hidden="true"></i>{" "}
                {item.Kilometers} KM
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default AutoItem;
