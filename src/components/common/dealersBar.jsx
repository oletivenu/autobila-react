import React from "react";

const DealersBar = () => {
  return (
    <div className="container">
      <div className="logo_section">
        <h2>Certified official dealers</h2>
        <div className="logo_title">
          <div className="or-seperator">
            <i>
              <i className="fa fa-car" aria-hidden="true" />
            </i>
          </div>
        </div>

        <ul id="flexiselDemo3">
          <li>
            <img src="images/logos/fiat.png" />
          </li>
          <li>
            <img src="images/logos/jagore.png" />
          </li>
          <li>
            <img src="images/logos/nissan.png" />
          </li>
          <li>
            <img src="images/logos/vw.png" />
          </li>
          <li>
            <img src="images/logos/ford.png" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DealersBar;
