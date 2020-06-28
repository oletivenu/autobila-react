import React, { Component } from "react";
import NavBar from "../components/common/navBar";
import AutoDetails from "../components/autodetails/autoDetails";
import FooterBar from "../components/footerBar";
import { getAutoAttachments } from "./../data/autoattachments";

class Details extends Component {
  state = {
    autoattachments: [],
    autoId: this.props.match.params.id,
  };

  componentDidMount() {
    this.setState({
      autoattachments: getAutoAttachments(this.state.autoId),
    });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <AutoDetails autoattachments={this.state.autoattachments} />
        <FooterBar />
      </React.Fragment>
    );
  }
}

export default Details;
