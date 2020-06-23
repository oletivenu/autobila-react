import React from "react";
import NavBar from "../components/common/navBar";
import StatBanner from "../components/common/statBanner";
import AutoSaveForm from "../components/common/autoSaveForm";
import FooterBar from "../components/footerBar";

function AutoSave() {
  return (
    <React.Fragment>
      <NavBar />

      <StatBanner />
      <AutoSaveForm />
      <FooterBar />
    </React.Fragment>
  );
}

export default AutoSave;
