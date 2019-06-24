import React from "react";

const WelcomeBar = () => {
  return (
    <div className="container-fluid wel_section">
      <div className="row">
        <div className="container">
          <div className="col-lg-6">
            <div className="welcome">
              <h1>Welcome to Autobila</h1>
              <p>
                quiPPP is a collaborative platform that vitalizes crowd
                participation in Public-Private Projects and connects
                Corporates, Citizens, Domain Experts, NGOs with the Government
                to Initiate and Participate together in socially relevant
                projects.
                <br />
                <br />
                quiPPP is a collaborative platform that vitalizes crowd
                participation in Public-Private Projects and connects
                Corporates, Citizens, Domain Experts, NGOs with the Government
                to Initiate and Participate together in socially relevant
                projects.
              </p>
              <div className="pull-right">
                <a href="#" className="read">
                  Read More
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wel-set row">
              <div className="col-sm-6">
                <div className="wel_options box_shadow">
                  <div className="wel_icon">
                    <img src="images/total-icon.jpg" />
                  </div>
                  <div className="wel_text">
                    <div className="title">
                      Total number of cars<span>103254</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="wel_options box_shadow">
                  <div className="wel_icon">
                    <img src="images/value-icon.jpg" />
                  </div>
                  <div className="wel_text">
                    <div className="title">
                      total value<span>103254</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="wel_options box_shadow">
                  <div className="wel_icon">
                    <img src="images/sold-icon.jpg" />
                  </div>
                  <div className="wel_text">
                    <div className="title">
                      cars sold this week<span>103254</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="wel_options box_shadow">
                  <div className="wel_icon">
                    <img src="images/newcar-icon.jpg" />
                  </div>
                  <div className="wel_text">
                    <div className="title">
                      new cars for sale<span>103254</span>
                    </div>
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

export default WelcomeBar;
