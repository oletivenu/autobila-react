import React from "react";

const Address = () => {
  return (
    <div className="col-sm-3 col-xs-12">
      <img src="/images/logo.png" />
      <div className="content-footer">
        <div className="address">
          <span>
            <span className="tittle">Address:</span>
            No 40 Baria Sreet 133/2 NY City, United States
          </span>
        </div>
        <div className="email">
          <span>
            <span className="tittle">Email:</span>
            contact@autobila.com
          </span>
        </div>
        <div className="phone">
          <span>
            <span className="tittle">Phone:</span>
            (888) 1900 86420 - (444) 1900 56789
          </span>
        </div>
        <div className="open-time">
          <span>
            <span className="tittle">Open Time:</span>
            8:00AM - 6:00PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default Address;
