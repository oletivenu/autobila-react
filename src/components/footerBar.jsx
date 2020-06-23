import React from "react";
import FootBar from "./common/footBar";
import Address from "./common/address";
import TopBrands from "./common/topBrands";
import TopCities from "./common/topCities";
import SecurityPolicy from "./common/securityPolicy";

const FooterBar = () => {
  return (
    // <!-- FOOTER -->
    <footer id="mc-footer" className="clearfix">
      {/* <!-- Footer top //Start--> */}
      <div className="footer-top clearfix">
        <div className="container">
          {/* <!-- Footer link //Start--> */}
          <ul className="footer-link">
            <Address />
            <TopBrands />
            <TopCities />
            <SecurityPolicy />
          </ul>
        </div>
      </div>
      {/* <!-- Footer top //end--> */}
      <FootBar />
    </footer>
  );
};

export default FooterBar;
