import React from "react";

const TopCities = () => {
  return (
    <div className="col-sm-3 col-xs-12">
      <h3>Top Cities</h3>
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-dot-circle-o" aria-hidden="true" />
            Dubai
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-dot-circle-o" aria-hidden="true" />
            Ajman
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-dot-circle-o" aria-hidden="true" /> Abu Dhabi
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-dot-circle-o" aria-hidden="true" />
            Fujairah
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-dot-circle-o" aria-hidden="true" /> Ras al Khaimah
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-dot-circle-o" aria-hidden="true" />
            Sharjah
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopCities;
