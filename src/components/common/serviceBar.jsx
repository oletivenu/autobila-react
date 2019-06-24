import React from "react";

const ServiceBar = () => {
  return (
    <div className="container">
      <div className="service_section">
        <div className="col-lg-9 col-sm-8 col-xs-12">
          <div className="col-md-12 col-sm-12 col-xs-12 m_b_50">
            <div className="b_asks_first row">
              <div className="b_asks_first_circle">
                <span className="fa fa-search">&nbsp;</span>
              </div>
              <div className="b_asks_first_info">
                <h2>ARE YOU LOOKING FOR A CAR?</h2>
                <p>
                  Search Our Inventory With Thousands Of Cars And More Cars Are
                  Adding On Daily Basis
                </p>
              </div>
              <div className="b_asks_first_arrow">
                <a href="#">
                  <span className="fa fa-chevron-circle-right">&nbsp;</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="b_asks_first row">
              <div className="b_asks_first_circle">
                <span className="fa fa-usd">&nbsp;</span>
              </div>
              <div className="b_asks_first_info">
                <h2>DO YOU WANT TO SELL A CAR?</h2>
                <p>
                  Search Our Inventory With Thousands Of Cars And More Cars Are
                  Adding On Daily Basis
                </p>
              </div>
              <div className="b_asks_first_arrow">
                <a href="#">
                  <span className="fa fa-chevron-circle-right">&nbsp;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-4 col-xs-12">
          <div className="left-menu clearfix">
            <div className="image">
              <img src="images/bg-call-us.jpg" alt="#" />
            </div>
            <div className="main-content">
              <ul>
                <li className="item free">
                  <div className="icon" />
                  <div className="text">
                    <a className="name" href="#">
                      Auto Loans
                    </a>
                    <p>We are with You</p>
                  </div>
                </li>
                <li className="item protec">
                  <div className="icon" />
                  <div className="text">
                    <a className="name" href="#">
                      Order Protection
                    </a>
                    <p>Secured Information</p>
                  </div>
                </li>
                <li className="item gift">
                  <div className="icon" />
                  <div className="text">
                    <a className="name" href="#">
                      Promotion Gift
                    </a>
                    <p>Special Offer!</p>
                  </div>
                </li>
                <li className="item money-back">
                  <div className="icon" />
                  <div className="text">
                    <a className="name" href="#">
                      Money Back
                    </a>
                    <p>Return over 30 Days</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
