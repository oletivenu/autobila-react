import React, { Component } from "react";
import NavBar from "../components/common/navBar";
import AutoDetails from "../components/autodetails/autoDetails";
import FooterBar from "../components/footerBar";
import { getAutoAttachments } from "./../data/autoattachments";
import { getAutoitems } from "./../data/autolist";

class Details extends Component {
  state = {
    autoattachments: [],
    autoId: this.props.match.params.id,
    autoitems: null,
  };

  componentDidMount() {
    this.setState({
      autoattachments: getAutoAttachments(this.state.autoId),
      autoitems: getAutoitems(this.state.autoId),
    });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <AutoDetails
          autoattachments={this.state.autoattachments}
          autoitems={this.state.autoitems}
        />
        <FooterBar />
      </React.Fragment>
    );
  }
}

export default Details;
