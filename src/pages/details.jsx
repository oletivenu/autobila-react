import React, { Component } from "react";
import NavBar from "../components/common/navBar";
import AutoDetails from "../components/autodetails/autoDetails";
import FooterBar from "../components/footerBar";

class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <AutoDetails />
        <FooterBar />
      </React.Fragment>
    );
  }
}

export default Details;
