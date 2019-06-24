import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/common/navBar";
import SearchBar from "./components/common/searchBar";
import TypeCars from "./components/common/typeCars";
import WelcomeBar from "./components/common/welcomeBar";
import ServiceBar from "./components/common/serviceBar";
import DealersBar from "./components/common/dealersBar";
import FooterBar from "./components/footerBar";

function App() {
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
      <TypeCars />
      <WelcomeBar />
      <ServiceBar />
      <DealersBar />
      <FooterBar/>
    </React.Fragment>
  );
}

export default App;
