import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "./slider";
import TabSection from "./tabSection";
import Features from "./features";
class AutoDetails extends Component {
  render() {
    const autoattachments = this.props.autoattachments;
    return (
      <main>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <h3>product details </h3>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Details
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="details_section">
              <div className="col-sm-8">
                <Slider attachments={autoattachments} />
                <TabSection />
              </div>
              <div className="col-sm-4">
                <Features />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AutoDetails;
