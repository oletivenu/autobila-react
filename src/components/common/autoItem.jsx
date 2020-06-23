import React from "react";
import { Link, NavLink } from "react-router-dom";
import history from "../../history";
const AutoItem = (item) => {
  return (
    <div className="item col-xs-4 col-lg-4">
      <Link to="/details">
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
      </Link>
    </div>
  );
};

export default AutoItem;
