import React from "react";

const StatBanner = () => {
  return (
    <div>
      <div className="container-fluid info_section">
        <div className="row">
          <div className="background">
            <div className="container">
              <div className="total_info box_shadow clearfix">
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="clear_details">
                    <ul>
                      <li className="item sold">
                        <div className="icon"></div>
                        <div className="text">
                          <div className="name counter-count">795</div>
                          <p>Car Sold Already</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="clear_details">
                    <ul>
                      <li className="item overall">
                        <div className="icon"></div>
                        <div className="text">
                          <div className="name counter-count">6582</div>
                          <p>Overall Car Searches</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="clear_details">
                    <ul>
                      <li className="item verify">
                        <div className="icon"></div>
                        <div className="text">
                          <div className="name">100%</div>
                          <p>Verified Buyers</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="clear_details">
                    <ul>
                      <li className="item fastest">
                        <div className="icon"></div>
                        <div className="text">
                          <div className="name">Fastest</div>
                          <p>Way to Sell Your Car</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatBanner;
