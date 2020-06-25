import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// import autoitems from "../../data/autolist.json";
import AutoItem from "./autoItem";
import Pagination from "../common/pagination";

import Filters from "./filters";

class AutoItemsList extends Component {
  // state = {
  //   currentPage: 1,
  //   pageSize: 6,
  //   sortColumn: { path: "title", order: "asc" },
  // };

  render() {
    const { pageSize, currentPage, totalCount } = this.props.state;
    const items = this.props.items;

    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <h3>All Products view</h3>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/list">Cars</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cars List
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="filter_section">
              <div className="col-md-3 order-md-last">
                <Filters />
              </div>
              <div className="col-md-9 order-md-first">
                <div id="products" className="list-group">
                  {items.map((item) => (
                    <AutoItem key={item.Id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="pull-right">
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.props.onPageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AutoItemsList;
