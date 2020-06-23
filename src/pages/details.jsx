import React from "react";
import NavBar from "../components/common/navBar";
import AutoDetails from "../components/common/autoDetails";
import FooterBar from "../components/footerBar";

function Details() {
  return (
    <React.Fragment>
      <NavBar />
      <AutoDetails />
      <FooterBar />
    </React.Fragment>
  );
}

export default Details;
