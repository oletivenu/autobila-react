import React from "react";
import NavBar from "../components/common/navBar";
import SearchBar from "../components/common/searchBar";
import TypeCars from "../components/common/typeCars";
import WelcomeBar from "../components/common/welcomeBar";
import ServiceBar from "../components/common/serviceBar";

import FooterBar from "../components/footerBar";
import DealersBar from "../components/common/dealersBar";
import { autoitems } from "../data/autolist";

function Main() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <!-- SEARCH --> */}
      <div className="container-fluid car_bg_section">
        <div className="row">
          <div className="car_bg" />
        </div>
      </div>
      <SearchBar />
      <TypeCars items={autoitems} />
      <WelcomeBar />
      {/* <ServiceBar /> */}
      <DealersBar />
      <FooterBar />
    </React.Fragment>
  );
}

export default Main;
