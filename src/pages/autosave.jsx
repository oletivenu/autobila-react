import React, { Component } from "react";
import NavBar from "../components/common/navBar";
import StatBanner from "../components/common/statBanner";
import AutoSaveForm from "../components/common/autoSaveForm";
import FooterBar from "../components/footerBar";

class AutoSave extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <StatBanner />
        <AutoSaveForm />
        <FooterBar />
      </React.Fragment>
    );
  }
}

export default AutoSave;
