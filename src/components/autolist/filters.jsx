import React from "react";
import { Link, NavLink } from "react-router-dom";

const Filters = () => {
  return (
    <div>
      <div id="filters" className="collapse d-md-block">
        <h2 className="d-none d-md-block">sort by Filters</h2>
        <div className="tab-section">
          <div className="title-tab">
            Manufacturer <i></i>
          </div>
          <div className="tab-content">
            <ul>
              <li>
                <a href="#home">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Nissan Patrol
                  <span className="badge badge-success pull-right">4</span>
                </a>
              </li>
              <li>
                <a href="#news">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Mitsubishi Lancer
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Toyota Land Cruiser
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Land Rover Range Rover
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Nissan Tiida
                  <span className="badge badge-danger pull-right">1</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  Nissan Altima
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
