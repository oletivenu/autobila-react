import React, { Component } from "react";
import NavBar from "../components/common/navBar";
import SearchBar from "../components/common/searchBar";
import FooterBar from "../components/footerBar";
import AutoItemsList from "../components/autolist/autoItemsList";
import autoitems from "../data/autolist.json";
import { paginate } from "../utils/paginate";

class List extends Component {
  state = {
    currentPage: 1,
    pageSize: 6,
    totalCount: autoitems.length,
    sortColumn: { path: "title", order: "asc" },
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { pageSize, currentPage, totalCount } = this.state;
    const items = paginate(autoitems, currentPage, pageSize);
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
        <AutoItemsList
          items={items}
          state={this.state}
          onPageChange={this.handlePageChange}
        />
        <FooterBar />
      </React.Fragment>
    );
  }
}

export default List;
