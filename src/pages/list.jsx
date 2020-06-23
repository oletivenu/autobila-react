import React from "react";
import NavBar from "../components/common/navBar";
import SearchBar from "../components/common/searchBar";
import FooterBar from "../components/footerBar";
import AutoList from "../components/common/autoList";

function List() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <!-- SEARCH --> */}
      {/* <div className="container-fluid car_bg_section">
        <div className="row">
          <div className="car_bg" />
        </div>
      </div> */}
      {/* <SearchBar /> */}
      <AutoList />
      <FooterBar />
    </React.Fragment>
  );
}

export default List;
