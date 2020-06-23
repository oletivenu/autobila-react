import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import autoitems from "../../data/autolist.json";
import AutoItem from "./autoItem";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";

class AutoList extends Component {
  state = {
    currentPage: 1,
    pageSize: 6,
    sortColumn: { path: "title", order: "asc" },
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const totalCount = autoitems.length;
    const { pageSize, currentPage, sortColumn } = this.state;
    const items = paginate(autoitems, currentPage, pageSize);

    return (
      <div>
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
                <button
                  type="button"
                  data-toggle="collapse"
                  data-target="#filters"
                  className="btn d-md-none btn-filter btn-block"
                >
                  Filters <i></i>
                </button>
                <div id="filters" className="collapse d-md-block">
                  <h2 className="d-none d-md-block">sory by Filters</h2>
                  <div className="tab-section">
                    <div className="title-tab">
                      Manufacturer <i></i>
                    </div>
                    <div className="tab-content">
                      <ul>
                        <li>
                          <a href="#home">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Nissan Patrol
                            <span className="badge badge-success pull-right">
                              4
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#news">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Mitsubishi Lancer
                          </a>
                        </li>
                        <li>
                          <a href="#contact">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Toyota Land Cruiser
                          </a>
                        </li>
                        <li>
                          <a href="#about">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Land Rover Range Rover
                          </a>
                        </li>
                        <li>
                          <a href="#contact">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Nissan Tiida
                            <span className="badge badge-danger pull-right">
                              1
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#about">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Nissan Altima
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 order-md-first">
                <div id="products" className="list-group">
                  {items.map((item) => (
                    <AutoItem key={item.Id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div class="pull-right">
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AutoList;
