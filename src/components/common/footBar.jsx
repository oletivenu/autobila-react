import React from "react";

const FootBar = () => {
  return (
    // {/* <!-- Footer bottom //Start--> */}
    <div className="footer-bottom clearfix">
      <div className="container">
        <div className="col-lg-6 foot-note">
          © 2020 - Autobila. All Rights Reserved.
        </div>
        <div className="col-lg-6">
          <ul className="bot-link">
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-skype"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    //   {/* <!-- Footer bottom //end--> */}
  );
};

export default FootBar;
